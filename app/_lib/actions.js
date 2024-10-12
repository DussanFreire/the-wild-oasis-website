"use server";

import { revalidatePath } from "next/cache";
import { auth, signIn, signOut } from "./auth";
import { supabase } from "./supabase";
import { Paths } from "./paths";
import { getBookings } from "./data-service";
import { redirect } from "next/dist/server/api-utils";

export async function signInAction() {
  await signIn("google", { redirectTo: Paths.ACCOUNT });
}

export async function signOutAction() {
  await signOut({ redirectTo: Paths.ROOT });
}

export async function updateGuest(formData) {
  const session = GetUserSession();

  const nationalID = formData.get("nationalID");
  const [nationality, countryFlag] = formData.get("nationality").split("%");

  if (/^[a-zA-Z0-9]{6, 12}$/.test(nationalID)) {
    throw new Error("please, provide a valid national ID");
  }

  const updateData = { nationality, countryFlag, nationalID };
  const { error } = await supabase
    .from("guests")
    .update(updateData)
    .eq("id", session.user.guestId);

  if (error) {
    throw new Error("Guest could not be updated");
  }
  revalidatePath(Paths.PROFILE);
}

export async function deleteReservation({ bookingId }) {
  const session = GetUserSession();

  VerifyUserAuthorization(bookingId, session.user.guestId);

  const { error } = await supabase
    .from("bookings")
    .delete()
    .eq("id", bookingId);

  if (error) {
    throw new Error("Booking could not be deleted");
  }
  revalidatePath(Paths.RESERVATIONS);
}

export async function updateBooking(formData) {
  const bookingId = Number(formData.get("bookingId"));
  const updateData = {
    numGuests: Number(formData.get("numGuests")),
    observations: formData.get("observations").slice(0, 1000),
  };

  const session = GetUserSession();
  VerifyUserAuthorization(bookingId, session.user.guestId);

  const { error } = await supabase
    .from("bookings")
    .update(updateData)
    .eq("id", bookingId);

  if (error) {
    console.error(error);
    throw new Error("Booking could not be updated");
  }

  revalidatePath(`${Paths.RESERVATIONS}/edit/${bookingId}`);
  revalidatePath(Paths.RESERVATIONS);

  redirect(Paths.RESERVATIONS);
}

async function VerifyUserAuthorization(bookingId, guestId) {
  const guestBookings = await getBookings(guestId);
  const guestBookingIds = guestBookings.map((booking) => booking.id);

  if (!guestBookingIds.includes(bookingId)) {
    throw new Error("You are not allowed to delete this booking");
  }
}

async function GetUserSession() {
  const session = await auth();

  if (!session) {
    throw new Error("You must be logged in");
  }

  return session;
}

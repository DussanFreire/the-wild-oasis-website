import SelectCountry from "@/app/_components/SelectCountry";
import UpdateProfileForm from "@/app/_components/UpdateProfileForm";
import { auth } from "@/app/_lib/auth";
import { getGuest } from "@/app/_lib/data-service";
import {
  ProfilePageDescriptionText,
  ProfilePageMetadataTitleText,
  ProfilePageTitleText,
} from "@/app/_lib/pageConstants";

export const metadata = {
  title: ProfilePageMetadataTitleText,
};

async function Page() {
  const session = await auth();
  const guest = await getGuest(session.user.email);
  return (
    <div>
      <h2 className="mb-4 text-2xl font-semibold text-accent-400">
        {ProfilePageTitleText}
      </h2>

      <p className="mb-8 text-lg text-primary-200">
        {ProfilePageDescriptionText}
      </p>
      <UpdateProfileForm guest={guest}>
        <SelectCountry
          name="nationality"
          id="nationality"
          className="w-full rounded-sm bg-primary-200 px-5 py-3 text-primary-800 shadow-sm"
          defaultCountry={guest.nationality}
        />
      </UpdateProfileForm>
    </div>
  );
}

export default Page;

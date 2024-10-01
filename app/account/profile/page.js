import SelectCountry from "@/app/_components/SelectCountry";
import UpdateProfileForm from "@/app/_components/UpdateProfileForm";
import {
  ProfilePageDescriptionText,
  ProfilePageMetadataTitleText,
  ProfilePageTitleText,
} from "@/app/_lib/pageConstants";

export const metadata = {
  title: ProfilePageMetadataTitleText,
};

function Page() {
  const nationality = "portugal";

  return (
    <div>
      <h2 className="mb-4 text-2xl font-semibold text-accent-400">
        {ProfilePageTitleText}
      </h2>

      <p className="mb-8 text-lg text-primary-200">
        {ProfilePageDescriptionText}
      </p>

      <UpdateProfileForm>
        <SelectCountry
          name="nationality"
          id="nationality"
          className="w-full rounded-sm bg-primary-200 px-5 py-3 text-primary-800 shadow-sm"
          defaultCountry={nationality}
        />
      </UpdateProfileForm>
    </div>
  );
}

export default Page;

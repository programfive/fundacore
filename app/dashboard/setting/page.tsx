import { InformationForm } from "@/components/dashboard/settings/information-form";
import { UploadAvatarForm } from "@/components/dashboard/settings/upload-avatar-form";

function Setting() {
  return (
    <section className="flex gap-4 w-full flex-col items-center sm:flex-row  sm:items-start  ">
      <InformationForm />
      <UploadAvatarForm />
    </section>
  );
}

export default Setting;

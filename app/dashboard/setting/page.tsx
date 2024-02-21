"use client";
import { InformationForm } from "@/components/dashboard/settings/information-form";
import { UploadAvatarForm } from "@/components/dashboard/settings/upload-avatar-form";
import { motion } from "framer-motion";
function SettingPage() {
  return (
    <motion.section className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
      <InformationForm />
      <UploadAvatarForm />
    </motion.section>
  );
}

export default SettingPage;

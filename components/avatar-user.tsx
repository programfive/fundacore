"use client";
import { useAvatarStore } from "@/store/avatar";
import { useEffect } from "react";
import { useCurrentUser } from "@/hooks/use-current-user";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { FaUser } from "react-icons/fa6";

export function AvatarUser() {
  const { urlImage, updateUrlImage } = useAvatarStore();
  const user = useCurrentUser();
  const userImage = user?.image || "";
  useEffect(() => {
    if (userImage) {
      updateUrlImage(userImage);
    } else {
      updateUrlImage(urlImage);
    }
  }, []);
  return <AvatarImage className="object-cover" src={urlImage} />;
}

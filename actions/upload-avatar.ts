"use server";

import { v2 as cloudinary } from "cloudinary";
import { currentUser } from "@/lib/auth";
import { db } from "@/lib/db";
import { update } from "@/auth";

export async function createAvatar(urlAvatar: string) {
  const user = await currentUser();
  const updateImage = await db.user.update({
    where: { id: user?.id },
    data: { image: urlAvatar },
  });
  update({
    user: {
      image: updateImage.image,
    },
  });
  return { success: "Avatar Updated!" };
}
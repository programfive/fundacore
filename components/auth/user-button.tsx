"use client";
import { FaUser } from "react-icons/fa";
import { ExitIcon } from "@radix-ui/react-icons";
import { FaRegUser } from "react-icons/fa";
import { BiCog } from "react-icons/bi";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useCurrentUser } from "@/hooks/use-current-user";
import { LogoutButton } from "@/components/auth/logout-button";
import Link from "next/link";
import { useAvatarStore } from "@/store/avatar";
import { useEffect } from "react";

export const UserButton = () => {
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
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-none ">
        <Avatar>
          <AvatarImage className="object-cover" src={urlImage} />
          <AvatarFallback className="bg-blue-500">
            <FaUser className="text-white" />
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40 mt-2" align="end">
        <LogoutButton>
          <DropdownMenuItem>
            <ExitIcon className="h-4 w-4 mr-2" />
            Logout
          </DropdownMenuItem>
        </LogoutButton>
        <DropdownMenuItem>
          <Link
            href="/dashboard/profile"
            className=" flex items-center gap-2  w-full"
          >
            <FaRegUser className="h-4 w-4" />
            <span> Profile</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link
            href="/dashboard/setting"
            className=" flex items-center gap-2  w-full"
          >
            <BiCog className="h-4 w-4 " />
            <span>Setting</span>
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

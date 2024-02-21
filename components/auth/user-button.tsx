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
import { Avatar } from "@/components/ui/avatar";
import { LogoutButton } from "@/components/auth/logout-button";
import Link from "next/link";
import { AvatarFallbackUser } from "../avatar-fallback";
import { AvatarUser } from "../avatar-user";

export const UserButton = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-none ">
        <Avatar>
          <AvatarUser />
          <AvatarFallbackUser />
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

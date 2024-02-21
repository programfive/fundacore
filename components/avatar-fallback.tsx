import { FaUser } from "react-icons/fa6";
import { AvatarFallback } from "./ui/avatar";

export function AvatarFallbackUser() {
  return (
    <AvatarFallback className="bg-blue-500">
      <FaUser className="text-white" />
    </AvatarFallback>
  );
}

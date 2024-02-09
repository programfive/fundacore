import { Logo } from "../ui/logo";
interface HeaderProps {
  label: string;
}
export const Header = ({ label }: HeaderProps) => {
  return (
    <div className="w-full flex flex-col  gap-y-4 items-center justify-center">
      <Logo className="w-auto h-6" />
      <p className="text-muted-foreground self-start ">{label}</p>
    </div>
  );
};

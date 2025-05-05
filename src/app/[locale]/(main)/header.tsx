import { ThemeSwitcher } from "@/components/theme-switcher";

export default function MainLayoutHeader() {
  return (
    <div className="flex p-4 border-b-1 items-center justify-center">
      <div className="flex w-content h-10 items-center gap-4">
        <ThemeSwitcher />
      </div>
    </div>
  );
}

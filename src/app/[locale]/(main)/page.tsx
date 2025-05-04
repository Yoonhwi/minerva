import { useTranslations } from "next-intl";

export default function MainPage() {
  const t = useTranslations("Common");

  return (
    <div>
      <p>{t("back")}</p>
      <p>{t("edit")}</p>
      <p>{t("delete")}</p>
    </div>
  );
}

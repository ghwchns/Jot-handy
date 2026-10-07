import { useTranslation } from "react-i18next";

const BrandLogo = ({
  width = 160,
  height,
  className,
}: {
  width?: number;
  height?: number;
  className?: string;
}) => {
  const { t } = useTranslation();
  return (
    <div
      className={`flex items-center justify-center gap-2 text-text ${className ?? ""}`}
      style={{ width, height }}
    >
      <img src="/app-icon.png" alt="" width={width * 0.32} />
      <span
        className="font-semibold leading-none tracking-tight"
        style={{ fontSize: width * 0.3 }}
      >
        {t("appName")}
      </span>
    </div>
  );
};

export default BrandLogo;

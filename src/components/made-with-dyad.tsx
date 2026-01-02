import { useTranslation } from '@/hooks/useTranslation'; // Import useTranslation

export const MadeWithDyad = () => {
  const { t } = useTranslation();
  return (
    <div className="p-4 text-center">
      <a
        href="https://ikako.vip/r/wojdd"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
      >
        {t("MadeByVoidd")}
      </a>
    </div>
  );
};

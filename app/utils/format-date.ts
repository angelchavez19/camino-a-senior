import { format, type Locale } from "date-fns";
import { enUS, es } from "date-fns/locale";
import type { LocaleT } from "~/types";

interface DateFormatOption {
  formatString: string;
  locale: Locale;
}

type OptionsMap = Record<LocaleT, DateFormatOption>;

const options: OptionsMap = {
  en: {
    formatString: "MMM dd, yyyy",
    locale: enUS,
  },
  es: {
    formatString: "dd 'de' MMMM, yyyy",
    locale: es,
  },
};

export const formatDate = (date: Date | string, locale: LocaleT): string => {
  const option = options[locale];
  const normalizeDate = date instanceof String ? new Date(date) : date;

  return format(normalizeDate, option.formatString, { locale: option.locale });
};

import { Locale } from "./locale";
import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

// 이 함수는 서버 사이드에서 모든 페이지 요청마다 실행됩니다
export default getRequestConfig(async ({ requestLocale }) => {
  let locale = (await requestLocale) as Locale;

  // 유효하지 않은 로케일이면 기본 로케일로 설정
  if (!locale || !routing.locales.includes(locale)) {
    locale = routing.defaultLocale;
  }

  // 해당 로케일의 번역 파일을 불러옵니다
  return {
    locale,
    messages: (await import(`./locales/${locale}.json`)).default,
  };
});

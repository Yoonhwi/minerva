import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import createMiddleware from "next-intl/middleware";
import { routing } from "./lib/i18n/routing";
import { getPathname } from "./lib/i18n/navigation";
import { hasLocale, Locale } from "next-intl";

const intlMiddleware = createMiddleware(routing);

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const locale = pathname.split("/")[1] as Locale;

  if (!locale || !hasLocale(routing.locales, locale)) {
    const redirectUrl = new URL(
      getPathname({ href: pathname, locale: routing.defaultLocale }),
      request.nextUrl.origin
    );
    return NextResponse.redirect(redirectUrl);
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: ["/", "/(en|ko)/:path*"],
};

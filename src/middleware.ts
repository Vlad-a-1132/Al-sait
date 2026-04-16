import { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: ["/prices", "/prices/:path*"],
};

function unauthorized(challenge: boolean, body: string): NextResponse {
  const headers = new Headers({ "Content-Type": "text/plain; charset=utf-8" });
  if (challenge) {
    headers.set("WWW-Authenticate", 'Basic realm="Restricted"');
  }
  return new NextResponse(body, { status: 401, headers });
}

export function middleware(request: NextRequest) {
  const expectedUser = process.env.PRICES_TEST_USER?.trim();
  const expectedPass = process.env.PRICES_TEST_PASS?.trim();

  if (!expectedUser || !expectedPass) {
    return unauthorized(
      false,
      "Prices test page is locked: set PRICES_TEST_USER and PRICES_TEST_PASS in the server environment."
    );
  }

  const auth = request.headers.get("authorization");
  if (!auth || !auth.startsWith("Basic ")) {
    return unauthorized(true, "Authentication required");
  }

  let decoded: string;
  try {
    decoded = atob(auth.slice(6));
  } catch {
    return unauthorized(true, "Invalid authorization encoding");
  }

  const colon = decoded.indexOf(":");
  const user = colon === -1 ? decoded : decoded.slice(0, colon);
  const pass = colon === -1 ? "" : decoded.slice(colon + 1);

  if (user !== expectedUser || pass !== expectedPass) {
    return unauthorized(true, "Invalid credentials");
  }

  return NextResponse.next();
}

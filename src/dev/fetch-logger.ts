/* eslint-disable @typescript-eslint/no-explicit-any */
// Dev-only fetch logger. Import this only in dev mode.
export function initFetchLogger(): void {
  try {
    const nativeFetch = window.fetch.bind(window);

    window.fetch = (async (
      input: RequestInfo | URL,
      init?: RequestInit
    ): Promise<Response> => {
      try {
        const url =
          typeof input === "string"
            ? input
            : input instanceof URL
              ? input.toString()
              : input instanceof Request
                ? input.url
                : "";
        const method =
          (init && init.method) ||
          (input instanceof Request && input.method) ||
          "GET";

        // Log requests to the auth domain and common auth paths
        if (
          typeof url === "string" &&
          (url.includes("authn-acul.tech") ||
            url.includes("/u/login") ||
            url.includes("/authorize"))
        ) {
          try {
            console.groupCollapsed(`[DEV][fetch] ${method} ${url}`);
            console.log("Request init:", init);
            if (init && init.body) {
              try {
                console.log("Request body:", init.body);
              } catch {
                console.log("Request body (could not stringify)");
              }
            }
            console.groupEnd();
          } catch {
            // ignore
          }
        }

        const resp = await nativeFetch(input as any, init as any);

        if (
          typeof url === "string" &&
          (url.includes("authn-acul.tech") ||
            url.includes("/u/login") ||
            url.includes("/authorize"))
        ) {
          try {
            const clone = resp.clone();
            clone
              .text()
              .then((text) => {
                console.log(
                  `[DEV][fetch] Response ${resp.status} ${url}:`,
                  text
                );
              })
              .catch(() => {
                console.log(
                  `[DEV][fetch] Response ${resp.status} ${url}: <non-text body>`
                );
              });
          } catch {
            // ignore
          }
        }

        return resp;
      } catch (err) {
        console.error("[DEV][fetch] error", err);
        throw err;
      }
    }) as unknown as typeof window.fetch;
  } catch (err) {
    // best-effort dev helper: swallow to avoid breaking app boot

    console.warn("Failed to initialize fetch logger", err);
  }
}

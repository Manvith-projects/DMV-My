import { Suspense, useEffect, useState } from "react";

import { getCurrentScreen } from "@auth0/auth0-acul-js";

import { getScreenComponent } from "@/utils/screen/screenLoader";

const POLL_INTERVAL_MS = 250;

const App = () => {
  // Default to "login" for fallback
  const [screen, setScreen] = useState("login");

  useEffect(() => {
    // On mount, seed the current screen from the SDK
    const initial = getCurrentScreen();
    setScreen(initial || "login");

    // Simple polling loop: the SDK exposes a global current screen getter
    // but doesn't provide a built-in React subscription here. Polling is a
    // small, low-risk solution that ensures the app picks up screen changes
    // triggered by the SDK (for example, after loginIdInstance.login()).
    let mounted = true;
    const tick = () => {
      if (!mounted) return;
      try {
        const current = getCurrentScreen();
        if (current && current !== screen) {
          setScreen(current);
        }
      } catch {
        // Ignore polling errors; do not crash the app. SDK errors will be
        // surfaced elsewhere (network/console).
      }
    };

    const id = setInterval(tick, POLL_INTERVAL_MS);

    return () => {
      mounted = false;
      clearInterval(id);
    };
    // Intentionally exclude `screen` from deps to avoid resetting the
    // interval when screen changes; the interval will observe changes.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const ScreenComponent = getScreenComponent(screen);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {ScreenComponent ? (
        <ScreenComponent />
      ) : (
        <div>Screen &quot;{screen}&quot; not implemented yet</div>
      )}
    </Suspense>
  );
};

export default App;

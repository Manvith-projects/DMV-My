/**
 * In development mode, logs the intended action.
 */
export const executeSafely = <R>(
  actionDescription: string,
  actionFn: () => R
): R | void => {
  // Always attempt the action, but log the intention in development.
  // Support both Node env and Vite's import.meta.env.DEV so logs appear when
  // running with the Vite dev server.
  // NOTE: `import.meta` is available in the browser build under Vite; guard
  // access so tools that run this file in Node (e.g. Jest) don't break.
  // Create a small type for Vite's `import.meta.env` to avoid using `any` and
  // satisfy `@typescript-eslint/no-explicit-any`.
  type ViteMeta = { env?: { DEV?: boolean } };

  const isDev =
    (typeof process !== "undefined" &&
      process.env.NODE_ENV === "development") ||
    (typeof import.meta !== "undefined" &&
      (import.meta as unknown as ViteMeta).env?.DEV === true);

  if (isDev) {
    console.log(`[DEV] ${actionDescription}`);
  }

  try {
    const result = actionFn();

    // If the action returns a Promise, attach a rejection handler so async
    // errors are surfaced to the console during development.
    if (
      result &&
      typeof (result as unknown as Promise<unknown>).then === "function"
    ) {
      (result as unknown as Promise<unknown>).catch((err: unknown) => {
        console.error(`Async error during action: ${actionDescription}`, err);
      });
    }

    return result;
  } catch (err) {
    // Surface errors to the console so developers can see failures.
    // Do not rethrow to keep calling sites simple; they can handle async errors.

    console.error(`Error during action: ${actionDescription}`, err);
    return undefined;
  }
};

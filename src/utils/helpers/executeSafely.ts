/**
 * In development mode, logs the intended action.
 */
export const executeSafely = <R>(
  actionDescription: string,
  actionFn: () => R
): R | void => {
  // Always attempt the action, but log the intention in development.
  if (process.env.NODE_ENV === "development") {
    console.log(`[DEV] ${actionDescription}`);
  }

  try {
    return actionFn();
  } catch (err) {
    // Surface errors to the console so developers can see failures.
    // Do not rethrow to keep calling sites simple; they can handle async errors.

    console.error(`Error during action: ${actionDescription}`, err);
    return undefined;
  }
};

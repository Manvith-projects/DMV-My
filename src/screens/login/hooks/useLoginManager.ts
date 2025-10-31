import { useMemo } from "react";

import LoginInstance from "@auth0/auth0-acul-js/login";
import type { ScreenMembersOnLogin } from "@auth0/auth0-acul-js/types";

import { executeSafely } from "@/utils/helpers/executeSafely";

export const useLoginManager = () => {
  const loginInstance = useMemo(() => new LoginInstance(), []);

  const { transaction, screen } = loginInstance;
  const { isSignupEnabled, isForgotPasswordEnabled, passwordPolicy } =
    transaction;

  const { signupLink, resetPasswordLink, texts, captchaImage } = screen;

  const handleLogin = async (
    username: string,
    password: string,
    captcha?: string
  ): Promise<void> => {
    const options: { username: string; password: string; captcha?: string } = {
      username: username?.trim() || "",
      password: password || "",
    };

    if (screen.isCaptchaAvailable && captcha?.trim()) {
      options.captcha = captcha.trim();
    }

    // Dev-only logging + quick guard to catch corrupted client IDs (e.g. when
    // a static asset like /favicon.ico is accidentally forwarded to the auth
    // endpoint or appended to a value). This helps reproduce the issue where
    // client_id looks like '.../favicon.ico' and the /authorize request is
    // missing required params such as response_type.
    type ViteMeta = { env?: { DEV?: boolean } };
    const isDev =
      (typeof process !== "undefined" &&
        process.env.NODE_ENV === "development") ||
      (typeof import.meta !== "undefined" &&
        (import.meta as unknown as ViteMeta).env?.DEV === true);

    if (isDev) {
      // Pull client id from the global mock context if present
      const ctx = (
        window as unknown as {
          universal_login_context?: { client?: { id?: string } };
        }
      )?.universal_login_context;
      const ctxClientId = ctx?.client?.id;
      try {
        console.log(
          "[DEV] Login with options:",
          options,
          "context client_id:",
          ctxClientId
        );
      } catch {
        // swallow any console serialization errors in odd environments
      }

      if (typeof ctxClientId === "string" && ctxClientId.includes("/")) {
        console.error(
          "[DEV] Detected suspicious client_id (contains '/'):",
          ctxClientId,
          "— this may indicate a static asset path like /favicon.ico was appended to a param or routed incorrectly"
        );
      }
    }

    executeSafely(`Login with options: ${JSON.stringify(options)}`, () =>
      loginInstance.login(options)
    );
  };

  const handleFederatedLogin = async (connectionName: string) => {
    executeSafely(`Federated login with connection: ${connectionName}`, () =>
      loginInstance.federatedLogin({ connection: connectionName })
    );
  };

  return {
    loginInstance,
    handleLogin,
    handleFederatedLogin,
    texts: (texts || {}) as ScreenMembersOnLogin["texts"],
    isSignupEnabled: isSignupEnabled === true,
    isForgotPasswordEnabled: isForgotPasswordEnabled === true,
    isCaptchaAvailable: screen.isCaptchaAvailable === true,
    errors: loginInstance.getErrors(),
    captchaImage,
    signupLink,
    resetPasswordLink,
    allowedIdentifiers: transaction.allowedIdentifiers || [],
    passwordPolicy,
  };
};

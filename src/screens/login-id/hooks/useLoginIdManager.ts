import { useMemo } from "react";

import LoginIdInstance from "@auth0/auth0-acul-js/login-id";
import type { ScreenMembersOnLoginId } from "@auth0/auth0-acul-js/types";

import { executeSafely } from "@/utils/helpers/executeSafely";

export const useLoginIdManager = () => {
  const loginIdInstance = useMemo(() => new LoginIdInstance(), []);

  const { transaction, screen } = loginIdInstance;
  const { isSignupEnabled, isForgotPasswordEnabled, isPasskeyEnabled } =
    transaction;

  const { signupLink, resetPasswordLink, texts, captchaImage } = screen;

  const handleLoginId = async (
    loginId: string,
    captcha?: string
  ): Promise<void> => {
    const options: { username: string; captcha?: string } = {
      username: loginId?.trim() || "",
    };

    if (screen.isCaptchaAvailable && captcha?.trim()) {
      options.captcha = captcha.trim();
    }
    // Log the options and execute the SDK call. Await and surface errors so
    // the browser console shows the server response (useful for debugging 400s).
    executeSafely(`LoginId with options: ${JSON.stringify(options)}`, () => {
      const p = loginIdInstance.login(options);
      // Attach handlers so we log success or failure details
      if (p && typeof (p as Promise<unknown>).then === "function") {
        (p as Promise<unknown>)
          .then((res: unknown) => {
            console.log("LoginId success response:", res);
          })
          .catch((err: unknown) => {
            console.error("LoginId failed:", err);
            // Re-throw so callers can observe failures if they await handleLoginId
            throw err;
          });
      }
      return p;
    });
  };

  const handleFederatedLogin = async (connectionName: string) => {
    executeSafely(`Federated login with connection: ${connectionName}`, () =>
      loginIdInstance.federatedLogin({ connection: connectionName })
    );
  };

  const handlePasskeyLogin = async () => {
    if (isPasskeyEnabled) {
      executeSafely(`Passkey login`, () => loginIdInstance.passkeyLogin());
    }
  };

  const handlePickCountryCode = async () => {
    executeSafely(`Pick country code`, () => loginIdInstance.pickCountryCode());
  };

  return {
    loginIdInstance,
    handleLoginId,
    handleFederatedLogin,
    handlePasskeyLogin,
    handlePickCountryCode,
    texts: (texts || {}) as ScreenMembersOnLoginId["texts"],
    isSignupEnabled: isSignupEnabled === true,
    isForgotPasswordEnabled: isForgotPasswordEnabled === true,
    isPasskeyEnabled: isPasskeyEnabled === true,
    isCaptchaAvailable: screen.isCaptchaAvailable === true,
    errors: loginIdInstance.getErrors(),
    captchaImage,
    captcha: screen.captcha || null,
    signupLink,
    resetPasswordLink,
  };
};

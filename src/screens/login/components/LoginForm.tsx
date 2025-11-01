import { useForm } from "react-hook-form";

import type { Error } from "@auth0/auth0-acul-js";

// import Captcha from "@/components/Captcha";
import { ULThemeFloatingLabelField } from "@/components/form/ULThemeFloatingLabelField";
import { ULThemeFormMessage } from "@/components/form/ULThemeFormMessage";
import { Form, FormField, FormItem } from "@/components/ui/form";
import { ULThemeAlert, ULThemeAlertTitle } from "@/components/ULThemeError";
import ULThemeLink from "@/components/ULThemeLink";
import { ULThemePasswordField } from "@/components/ULThemePasswordField";
import { ULThemePrimaryButton } from "@/components/ULThemePrimaryButton";
import { getFieldError } from "@/utils/helpers/errorUtils";
import { getIdentifierDetails } from "@/utils/helpers/identifierUtils";
import { rebaseLinkToCurrentOrigin } from "@/utils/helpers/urlUtils";

import { useLoginManager } from "../hooks/useLoginManager";

interface LoginFormData {
  username: string;
  password: string;
}

function LoginForm() {
  const {
    handleLogin,
    errors,
    // isCaptchaAvailable,
    // captchaImage,
    resetPasswordLink,
    isForgotPasswordEnabled,
    texts,
    allowedIdentifiers,
    passwordPolicy,
  } = useLoginManager();

  const form = useForm<LoginFormData>({
    defaultValues: {
      username: "",
      password: "",
      // captcha: "",
    },
  });

  const {
    formState: { isSubmitting },
  } = form;

  // Handle text fallbacks in component
  const buttonText = texts?.buttonText || "Login";
  // const captchaLabel = texts?.captchaCodePlaceholder?.concat("*") || "CAPTCHA*";
  // const captchaImageAlt = "CAPTCHA challenge"; // Default fallback
  const forgotPasswordText = texts?.forgotPasswordText || "Forgot Password?";

  // Use getIdentifierDetails pattern for username label
  const {
    label: usernameLabel,
    type: usernameType,
    autoComplete: usernameAutoComplete,
  } = getIdentifierDetails(allowedIdentifiers, texts);

  const passwordLabel = texts?.passwordPlaceholder?.concat("*") || "Password*";

  // Password visibility toggle
  const generalErrors =
    errors?.filter((error: Error) => !error.field || error.field === null) ||
    [];

  const usernameSDKError =
    getFieldError("username", errors) || getFieldError("email", errors);

  const passwordSDKError = getFieldError("password", errors);
  // const captchaSDKError = getFieldError("captcha", errors);

  // Proper submit handler with form data
  const onSubmit = async (data: LoginFormData) => {
    await handleLogin(data.username, data.password);
  };

  const localizedResetPasswordLink =
    resetPasswordLink && rebaseLinkToCurrentOrigin(resetPasswordLink);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
        {/* General alerts at the top */}
        {generalErrors.length > 0 && (
          <div className="space-y-3 mb-4">
            {generalErrors.map((error: Error, index: number) => (
              <ULThemeAlert key={index} variant="destructive">
                <ULThemeAlertTitle>{error.message}</ULThemeAlertTitle>
              </ULThemeAlert>
            ))}
          </div>
        )}

        <FormField
          control={form.control}
          name="username"
          rules={{
            required: "This field is required",
            maxLength: {
              value: 100,
              message: "Maximum 100 characters allowed",
            },
          }}
          render={({ field, fieldState }) => (
            <FormItem>
              <ULThemeFloatingLabelField
                {...field}
                label={usernameLabel}
                type={usernameType}
                autoFocus={true}
                autoComplete={usernameAutoComplete}
                error={!!fieldState.error || !!usernameSDKError}
                className="!w-3/4 !px-3.5 !py-3 !text-base !border !border-[#c4d4e0] !rounded-md focus:!outline-none focus:!border-[#4a90e2] focus:!ring-2 focus:!ring-[#4a90e2]/20 !bg-white !text-[#333333] placeholder:!text-[#999999]"
              />
              <ULThemeFormMessage
                sdkError={usernameSDKError}
                hasFormError={!!fieldState.error}
              />
            </FormItem>
          )}
        />
        <h3>
          <a href="#" className="text-link underline links text-sm">
            No longer have access to your email address?
          </a>
        </h3>
        {/* Password input field */}
        <FormField
          control={form.control}
          name="password"
          rules={{
            required: "Password is required",
            maxLength: {
              value: 200,
              message: "Maximum 200 characters allowed",
            },
            minLength: passwordPolicy?.minLength
              ? {
                  value: passwordPolicy.minLength,
                  message: `Password must be at least ${passwordPolicy.minLength} characters`,
                }
              : undefined,
          }}
          render={({ field, fieldState }) => (
            <FormItem>
              <ULThemePasswordField
                {...field}
                label={passwordLabel}
                autoComplete="current-password"
                error={!!fieldState.error || !!passwordSDKError}
                className="!w-3/4 !px-3.5 !py-3 !text-base !border !border-[#c4d4e0] !rounded-md focus:!outline-none focus:!border-[#4a90e2] focus:!ring-2 focus:!ring-[#4a90e2]/20 !bg-white !text-[#333333] placeholder:!text-[#999999]"
              />
              <ULThemeFormMessage
                sdkError={passwordSDKError}
                hasFormError={!!fieldState.error}
              />
            </FormItem>
          )}
        />

        {/* CAPTCHA Box */}
        {/* {isCaptchaAvailable && (
          <Captcha
            control={form.control}
            name="captcha"
            label={captchaLabel}
            imageUrl={captchaImage || ""}
            imageAltText={captchaImageAlt}
            sdkError={captchaSDKError}
            rules={{
              required: "Please complete the CAPTCHA",
              maxLength: {
                value: 15,
                message: "CAPTCHA too long",
              },
            }}
          />
        )} */}

        {/* Forgot Password link */}
        <div className="text-left ">
          {isForgotPasswordEnabled && localizedResetPasswordLink && (
            <ULThemeLink
              href={localizedResetPasswordLink}
              className="text-link underline links"
            >
              {forgotPasswordText}
            </ULThemeLink>
          )}
        </div>

        {/* Submit button */}
        <ULThemePrimaryButton
          type="submit"
          className="!w-[162px] !rounded-full !bg-[#126ba5] hover:!bg-[#0f5a8a] !text-white !font-bold"
          disabled={isSubmitting}
        >
          {buttonText}
        </ULThemePrimaryButton>
      </form>
    </Form>
  );
}

export default LoginForm;

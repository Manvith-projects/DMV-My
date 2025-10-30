import { useState } from "react";
import { useForm } from "react-hook-form";

import type { Error } from "@auth0/auth0-acul-js/types";

import Captcha from "@/components/Captcha";
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
  captcha?: string;
}

interface LoginFormProps {
  useNativeMarkup?: boolean;
  disableCaptcha?: boolean;
}

function LoginForm({
  useNativeMarkup = false,
  disableCaptcha = false,
}: LoginFormProps) {
  const {
    handleLogin,
    errors,
    isCaptchaAvailable,
    captchaImage,
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
      captcha: "",
    },
  });

  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => setShowPassword((s) => !s);

  const {
    formState: { isSubmitting },
  } = form;

  // Handle text fallbacks in component
  const buttonText = texts?.buttonText || "Continue";
  const captchaLabel = texts?.captchaCodePlaceholder?.concat("*") || "CAPTCHA*";
  const captchaImageAlt = "CAPTCHA challenge"; // Default fallback
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
  const captchaSDKError = getFieldError("captcha", errors);

  // Proper submit handler with form data
  const onSubmit = async (data: LoginFormData) => {
    await handleLogin(data.username, data.password, data.captcha);
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

        {/* Username/Email input field */}
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
              {useNativeMarkup ? (
                <>
                  <label htmlFor={field.name} className="form-label label-text">
                    {usernameLabel}
                  </label>
                  <input
                    {...field}
                    id={field.name}
                    type={usernameType}
                    autoComplete={usernameAutoComplete}
                    className="form-input input-field w-full"
                    placeholder={usernameLabel}
                  />
                </>
              ) : (
                <ULThemeFloatingLabelField
                  {...field}
                  label={usernameLabel}
                  type={usernameType}
                  autoFocus={true}
                  autoComplete={usernameAutoComplete}
                  error={!!fieldState.error || !!usernameSDKError}
                />
              )}
              <ULThemeFormMessage
                sdkError={usernameSDKError}
                hasFormError={!!fieldState.error}
              />
            </FormItem>
          )}
        />

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
              {useNativeMarkup ? (
                <>
                  <label htmlFor={field.name} className="form-label label-text">
                    {passwordLabel}
                  </label>
                  <div className="password-wrapper relative">
                    <input
                      {...field}
                      id={field.name}
                      type={showPassword ? "text" : "password"}
                      autoComplete="current-password"
                      className="form-input input-field w-full pr-10"
                      placeholder={passwordLabel}
                    />
                    <button
                      type="button"
                      onClick={togglePassword}
                      className="toggle-password absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400"
                      aria-label={
                        showPassword ? "Hide password" : "Show password"
                      }
                    >
                      <i className="fa-regular fa-eye" aria-hidden="true"></i>
                    </button>
                  </div>
                </>
              ) : (
                <ULThemePasswordField
                  {...field}
                  label={passwordLabel}
                  autoComplete="current-password"
                  error={!!fieldState.error || !!passwordSDKError}
                />
              )}
              <ULThemeFormMessage
                sdkError={passwordSDKError}
                hasFormError={!!fieldState.error}
              />
            </FormItem>
          )}
        />

        {/* CAPTCHA Box */}
        {/* Render CAPTCHA only if the SDK indicates availability and it's not disabled via prop */}
        {isCaptchaAvailable && !disableCaptcha && (
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
        )}

        {/* Forgot Password link */}
        <div className="text-left">
          {isForgotPasswordEnabled && localizedResetPasswordLink && (
            <ULThemeLink href={localizedResetPasswordLink}>
              {forgotPasswordText}
            </ULThemeLink>
          )}
        </div>

        {/* Submit button */}
        {useNativeMarkup ? (
          <button
            type="submit"
            className="login-button w-full"
            disabled={isSubmitting}
          >
            {buttonText}
          </button>
        ) : (
          <ULThemePrimaryButton
            type="submit"
            className="w-full"
            disabled={isSubmitting}
          >
            {buttonText}
          </ULThemePrimaryButton>
        )}
      </form>
    </Form>
  );
}

export default LoginForm;

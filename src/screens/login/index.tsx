import { useEffect } from "react";

import ULThemePageLayout from "@/components/ULThemePageLayout";

import LoginForm from "./components/LoginForm";

function LoginScreen() {
  useEffect(() => {
    document.title = "Login";
  }, []);

  // The detailed form and behavior are provided by `LoginForm` component.

  return (
    <ULThemePageLayout className="theme-universal">
      <div className="login-page min-h-screen flex flex-col z-30">
        {/* Header and hero are supplied by the UL theme wrapper; screens should only render screen-level containers */}

        {/* Centered card */}
        <main className="container mx-auto px-6 -mt-16 mb-16 z-30 max-w-7xl">
          <div className="max-w-7xl mx-auto">
            <div className="login-card bg-white rounded overflow-hidden w-full">
              <div className="p-6">
                <h2 className="welcome-title">Welcome Back</h2>
                <hr className="divider mb-4" />

                <div className="login-container">
                  <div className="wallet-login mb-4 flex items-start gap-3">
                    <div className="wallet-icon h-10 w-10 rounded overflow-hidden bg-white flex items-center justify-center">
                      <img
                        src="https://cdn.dmv.ca.gov/dmv-cdn/prod/isam/images/mdl/ca-dmv-wallet-icon.png"
                        alt="CA DMV Wallet"
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <div>
                      <a
                        href="#"
                        className="wallet-link text-link font-medium links"
                      >
                        Log in with CA DMV Wallet App
                      </a>
                      <div className="wallet-subtitle text-xs text-muted">
                        No password needed
                      </div>
                    </div>
                  </div>

                  <div className="section-title mb-3">MyDMV</div>

                  <p className="register-text mb-4 small-note">
                    <strong>Not Registered?</strong> In order to log in, you
                    will first need to{" "}
                    <a href="#" className="text-link underline links">
                      create an account
                    </a>
                    .
                  </p>

                  {/* Replace the manual form with the reusable LoginForm component (native markup to preserve UI) */}
                  <LoginForm useNativeMarkup disableCaptcha />
                </div>
              </div>
            </div>
          </div>
        </main>

        <footer className="mt-auto"></footer>
      </div>
    </ULThemePageLayout>
  );
}

export default LoginScreen;

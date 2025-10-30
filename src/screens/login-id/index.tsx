import { useEffect } from "react";

import ULThemePageLayout from "@/components/ULThemePageLayout";
import { applyAuth0Theme } from "@/utils/theme";

import IdentifierForm from "./components/IdentifierForm";
import { useLoginIdManager } from "./hooks/useLoginIdManager";

function LoginScreen() {
  const { loginIdInstance, texts } = useLoginIdManager();

  useEffect(() => {
    // Prefer SDK-provided page title when available
    if (texts?.pageTitle) {
      document.title = texts.pageTitle;
    } else {
      document.title = "Login";
    }

    // Apply theme from SDK instance when screen loads
    applyAuth0Theme(loginIdInstance);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ULThemePageLayout className="theme-universal">
      <div className="login-page min-h-screen flex flex-col z-30">
        {/* Header and hero are supplied by the UL theme wrapper; screens should only render screen-level containers */}

        {/* Centered card */}
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-16 mb-16 z-30 max-w-4xl">
          <div className="mx-auto">
            <div className="login-card bg-white rounded overflow-hidden w-full shadow-md">
              <div className="p-4 sm:p-6 md:p-8">
                <h2 className="welcome-title text-lg sm:text-xl md:text-2xl">
                  Welcome Back
                </h2>
                <hr className="divider mb-4" />

                <div className="flex flex-col gap-6">
                  {/* Top section - compact info / wallet CTA */}
                  <aside className="w-full bg-gray-50 rounded p-4 flex flex-col gap-4 justify-center">
                    <div className="wallet-login flex items-start gap-3">
                      <div className="wallet-icon h-10 w-10 rounded overflow-hidden bg-white flex items-center justify-center">
                        <img
                          src="https://cdn.dmv.ca.gov/dmv-cdn/prod/isam/images/mdl/ca-dmv-wallet-icon.png"
                          alt="CA DMV Wallet"
                          className="h-full w-full object-contain max-h-12 max-w-12"
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

                    <div className="section-title mt-2">MyDMV</div>

                    <p className="register-text mb-0 small-note text-sm">
                      <strong>Not Registered?</strong> In order to log in, you
                      will first need to
                      <a href="#" className="text-link underline links ml-1">
                        create an account
                      </a>
                      .
                    </p>
                  </aside>

                  {/* Form section - uses the IdentifierForm component for full functionality */}
                  <section className="w-full">
                    <IdentifierForm />
                  </section>
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

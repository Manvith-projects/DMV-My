import { useEffect, useState } from "react";

import ULThemePageLayout from "@/components/ULThemePageLayout";

function LoginScreen() {
  useEffect(() => {
    document.title = "Login";
  }, []);

  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => setShowPassword((s) => !s);

  return (
    <ULThemePageLayout className="theme-universal">
      <div className="login-page min-h-screen flex flex-col z-30">
        {/* Header and hero are supplied by the UL theme wrapper; screens should only render screen-level containers */}

        {/* Centered card */}
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-16 mb-16 z-30 max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <div className="login-card bg-white rounded overflow-hidden w-full shadow-md">
              <div className="p-4 sm:p-6 md:p-8">
                <h2 className="welcome-title text-lg sm:text-xl md:text-2xl">
                  Welcome Back
                </h2>
                <hr className="divider mb-4" />

                {/* Single-column responsive layout (stacked on all sizes) */}
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

                  {/* Form section (stacked below info) */}
                  <section className="w-full">
                    <form
                      className="login-container"
                      onSubmit={(e) => e.preventDefault()}
                    >
                      <div className="form-group mb-4">
                        <label
                          htmlFor="email"
                          className="form-label label-text"
                        >
                          Email
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          className="form-input input-field w-full"
                          placeholder="Email"
                        />
                        <a
                          href="#"
                          className="helper-link text-link mt-2 inline-block links text-sm"
                        >
                          No longer have access to your email address?
                        </a>
                      </div>

                      <div className="form-group mb-4">
                        <label
                          htmlFor="password"
                          className="form-label label-text"
                        >
                          Password
                        </label>
                        <div className="password-wrapper relative">
                          <input
                            id="password"
                            name="password"
                            type={showPassword ? "text" : "password"}
                            className="form-input input-field w-full pr-10"
                            placeholder="Password"
                          />
                          <button
                            type="button"
                            onClick={togglePassword}
                            className="toggle-password absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400"
                            aria-label={
                              showPassword ? "Hide password" : "Show password"
                            }
                          >
                            <i
                              className="fa-regular fa-eye"
                              aria-hidden="true"
                            ></i>
                          </button>
                        </div>
                        <a
                          href="#"
                          className="helper-link text-link mt-2 inline-block links text-sm"
                        >
                          Forgot your password?
                        </a>
                      </div>

                      <div className="mb-6">
                        <button type="submit" className="login-button w-full">
                          Log In
                        </button>
                      </div>
                    </form>
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

import ULThemeCard from "@/components/ULThemeCard";
import ULThemePageLayout from "@/components/ULThemePageLayout";
import { applyAuth0Theme } from "@/utils/theme/themeEngine";

// import Header from "./components/Header";
import LoginForm from "./components/LoginForm";
import { useLoginManager } from "./hooks/useLoginManager";

function LoginScreen() {
  // Extracting attributes from hook made out of LoginInstance class of Auth0 JS SDK
  const { loginInstance, texts } = useLoginManager();

  // Other Texts
  document.title = texts?.pageTitle || "Login";

  // Apply theme from SDK instance when screen loads
  applyAuth0Theme(loginInstance);

  return (
    // Applying UDS theme overrides using the "theme-universal" class
    <ULThemePageLayout className="theme-universal">
      <ULThemeCard className="w-full max-w-[1400px] -top-110px gap-0">
        {/* <Header /> */}
        <div className="login-container">
          <h2 className="welcome-title">Welcome Back</h2>

          <div className="wallet-login mb-4 flex items-start gap-3">
            <div className="wallet-icon h-10 w-10 rounded overflow-hidden bg-white flex items-center justify-center">
              <img
                src="https://cdn.dmv.ca.gov/dmv-cdn/prod/isam/images/mdl/ca-dmv-wallet-icon.png"
                alt="CA DMV Wallet"
                className="h-full w-full object-contain"
              />
            </div>
            <div>
              <a href="#" className="wallet-link text-link font-medium links">
                Log in with CA DMV Wallet App
              </a>
              <div className="wallet-subtitle text-xs text-muted">
                No password needed
              </div>
            </div>
          </div>

          <div className="section-title mb-3">MyDMV</div>

          <p className="register-text mb-4 small-note">
            <strong>Not Registered?</strong> In order to log in, you will first
            need to{" "}
            <a href="#" className="text-link underline links">
              create an account
            </a>
            .
          </p>

          <LoginForm />
        </div>
        {/* <Footer /> */}
      </ULThemeCard>
    </ULThemePageLayout>
  );
}

export default LoginScreen;

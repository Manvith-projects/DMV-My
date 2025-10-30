import {
  t as te,
  c as re,
  j as t,
  r as h,
  a as N,
  b as ne,
  A as se,
  d as ae,
  F as W,
  e as oe,
  f as le,
  g as ie,
  C as de,
  u as ue,
  h as ce,
  i as me,
  T as he,
  k as fe,
  l as pe,
  m as ge,
  n as xe,
  o as be,
  p as ve,
  E as we,
  q as ye,
  s as je,
  v as _e,
  w as Ne,
  x as ke,
} from "../shared/vendor.CtTIV4rL.js";
function l(...e) {
  return te(re(e));
}
const M = ({ children: e, className: r, ...n }) => {
  const s = l("w-full min-h-screen", "justify-page-layout", r);
  return t.jsxs("div", {
    className: s,
    ...n,
    children: [
      t.jsx("div", {
        className: "ul-topbar",
        children: t.jsxs("div", {
          className:
            "container mx-auto py-9 px-6 flex items-center justify-between h-14",
          children: [
            t.jsxs("div", {
              className: "flex items-center",
              children: [
                t.jsx("div", {
                  className: "ul-logo bg-no-repeat bg-contain",
                  style: {
                    backgroundImage:
                      "url('https://www.dmv.ca.gov/imageserver/theme_10up/images/logo-ca-gov.svg')",
                    height: "36px",
                    width: "160px",
                  },
                  "aria-hidden": !0,
                }),
                t.jsx("div", {
                  className: "ul-logo bg-no-repeat bg-contain -ml-20",
                  style: {
                    backgroundImage:
                      "url('https://www.dmv.ca.gov/imageserver/theme_10up/images/logo-ca-dmv-white.svg')",
                    height: "36px",
                    width: "160px",
                  },
                  "aria-hidden": !0,
                }),
              ],
            }),
            t.jsxs("div", {
              className: "flex items-center gap-4",
              children: [
                t.jsx("span", {
                  className: "bg-white p-1 rounded-full",
                  "aria-hidden": "true",
                  children: t.jsx("i", {
                    className: "fa-solid fa-globe",
                    style: { color: "#000" },
                    "aria-hidden": "true",
                  }),
                }),
                t.jsx("button", {
                  className: "translate-btn",
                  children: "Translate",
                }),
              ],
            }),
          ],
        }),
      }),
      t.jsx("div", {
        className: "ul-nav",
        children: t.jsx("div", {
          className: "container mx-auto px-6",
          children: t.jsx("div", {
            className: "py-4 text-center font-bold",
            children: "Home",
          }),
        }),
      }),
      t.jsx("div", {
        className: "ul-hero",
        style: {
          position: "relative",
          zIndex: 1,
          backgroundImage:
            "url('https://www.dmv.ca.gov/imageserver/theme_10up/images/hero-mountains.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          clipPath: "polygon(0 0, 100% 0, 100% 69%, 0 98%)",
          minHeight: "400px",
        },
        children: t.jsx("div", {
          className: "container mx-auto px-9 relative bg-cover",
          children: t.jsx("div", {
            className: "absolute inset-0 flex items-start justify-start",
            children: t.jsx("h1", {
              className: "hero-title m-10",
              style: { fontFamily: "tt-commons-800-italic, sans-serif" },
              children: "LOG IN",
            }),
          }),
        }),
      }),
      t.jsx("div", {
        className: "ul-content relative w-full",
        style: { marginTop: "-150px", zIndex: 20 },
        children: t.jsx("div", {
          className: "container mx-auto px-6 w-full max-w-7xl",
          children: e,
        }),
      }),
    ],
  });
};
function Pe() {
  h.useEffect(() => {
    document.title = "Login";
  }, []);
  const [e, r] = h.useState(!1),
    n = () => r((s) => !s);
  return t.jsx(M, {
    className: "theme-universal",
    children: t.jsxs("div", {
      className: "login-page min-h-screen flex flex-col z-30",
      children: [
        t.jsx("main", {
          className: "container mx-auto px-6 -mt-16 mb-16 z-30 max-w-7xl",
          children: t.jsx("div", {
            className: "max-w-7xl mx-auto",
            children: t.jsx("div", {
              className: "login-card bg-white rounded overflow-hidden w-full",
              children: t.jsxs("div", {
                className: "p-6",
                children: [
                  t.jsx("h2", {
                    className: "welcome-title",
                    children: "Welcome Back",
                  }),
                  t.jsx("hr", { className: "divider mb-4" }),
                  t.jsxs("form", {
                    className: "login-container",
                    onSubmit: (s) => s.preventDefault(),
                    children: [
                      t.jsxs("div", {
                        className: "wallet-login mb-4 flex items-start gap-3",
                        children: [
                          t.jsx("div", {
                            className:
                              "wallet-icon h-10 w-10 rounded overflow-hidden bg-white flex items-center justify-center",
                            children: t.jsx("img", {
                              src: "https://cdn.dmv.ca.gov/dmv-cdn/prod/isam/images/mdl/ca-dmv-wallet-icon.png",
                              alt: "CA DMV Wallet",
                              className: "h-full w-full object-contain",
                            }),
                          }),
                          t.jsxs("div", {
                            children: [
                              t.jsx("a", {
                                href: "#",
                                className:
                                  "wallet-link text-link font-medium links",
                                children: "Log in with CA DMV Wallet App",
                              }),
                              t.jsx("div", {
                                className: "wallet-subtitle text-xs text-muted",
                                children: "No password needed",
                              }),
                            ],
                          }),
                        ],
                      }),
                      t.jsx("div", {
                        className: "section-title mb-3",
                        children: "MyDMV",
                      }),
                      t.jsxs("p", {
                        className: "register-text mb-4 small-note",
                        children: [
                          t.jsx("strong", { children: "Not Registered?" }),
                          " In order to log in, you will first need to ",
                          t.jsx("a", {
                            href: "#",
                            className: "text-link underline links",
                            children: "create an account",
                          }),
                          ".",
                        ],
                      }),
                      t.jsxs("div", {
                        className: "form-group mb-4",
                        children: [
                          t.jsx("label", {
                            htmlFor: "email",
                            className: "form-label label-text",
                            children: "Email",
                          }),
                          t.jsx("input", {
                            id: "email",
                            name: "email",
                            type: "email",
                            className: "form-input input-field w-full",
                            placeholder: "Email",
                          }),
                          t.jsx("a", {
                            href: "#",
                            className:
                              "helper-link text-link mt-2 inline-block links",
                            children:
                              "No longer have access to your email address?",
                          }),
                        ],
                      }),
                      t.jsxs("div", {
                        className: "form-group mb-4",
                        children: [
                          t.jsx("label", {
                            htmlFor: "password",
                            className: "form-label label-text",
                            children: "Password",
                          }),
                          t.jsxs("div", {
                            className: "password-wrapper relative",
                            children: [
                              t.jsx("input", {
                                id: "password",
                                name: "password",
                                type: e ? "text" : "password",
                                className:
                                  "form-input input-field w-full pr-10",
                                placeholder: "Password",
                              }),
                              t.jsx("button", {
                                type: "button",
                                onClick: n,
                                className:
                                  "toggle-password absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400",
                                "aria-label": "Show password",
                                children: "👁️",
                              }),
                            ],
                          }),
                          t.jsx("a", {
                            href: "#",
                            className:
                              "helper-link text-link mt-2 inline-block links",
                            children: "Forgot your password?",
                          }),
                        ],
                      }),
                      t.jsx("div", {
                        className: "mb-6",
                        children: t.jsx("button", {
                          type: "submit",
                          className: "login-button",
                          children: "Log In",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          }),
        }),
        t.jsx("footer", { className: "mt-auto" }),
      ],
    }),
  });
}
const Se = Object.freeze(
  Object.defineProperty({ __proto__: null, default: Pe }, Symbol.toStringTag, {
    value: "Module",
  })
);
function Ce() {
  h.useEffect(() => {
    document.title = "Login";
  }, []);
  const [e, r] = h.useState(!1),
    n = () => r((s) => !s);
  return t.jsx(M, {
    className: "theme-universal",
    children: t.jsxs("div", {
      className: "login-page min-h-screen flex flex-col z-30",
      children: [
        t.jsx("main", {
          className: "container mx-auto px-6 -mt-16 mb-16 z-30 max-w-7xl",
          children: t.jsx("div", {
            className: "max-w-7xl mx-auto",
            children: t.jsx("div", {
              className: "login-card bg-white rounded overflow-hidden w-full",
              children: t.jsxs("div", {
                className: "p-6",
                children: [
                  t.jsx("h2", {
                    className: "welcome-title",
                    children: "Welcome Back",
                  }),
                  t.jsx("hr", { className: "divider mb-4" }),
                  t.jsxs("form", {
                    className: "login-container",
                    onSubmit: (s) => s.preventDefault(),
                    children: [
                      t.jsxs("div", {
                        className: "wallet-login mb-4 flex items-start gap-3",
                        children: [
                          t.jsx("div", {
                            className:
                              "wallet-icon h-10 w-10 rounded overflow-hidden bg-white flex items-center justify-center",
                            children: t.jsx("img", {
                              src: "https://cdn.dmv.ca.gov/dmv-cdn/prod/isam/images/mdl/ca-dmv-wallet-icon.png",
                              alt: "CA DMV Wallet",
                              className: "h-full w-full object-contain",
                            }),
                          }),
                          t.jsxs("div", {
                            children: [
                              t.jsx("a", {
                                href: "#",
                                className:
                                  "wallet-link text-link font-medium links",
                                children: "Log in with CA DMV Wallet App",
                              }),
                              t.jsx("div", {
                                className: "wallet-subtitle text-xs text-muted",
                                children: "No password needed",
                              }),
                            ],
                          }),
                        ],
                      }),
                      t.jsx("div", {
                        className: "section-title mb-3",
                        children: "MyDMV",
                      }),
                      t.jsxs("p", {
                        className: "register-text mb-4 small-note",
                        children: [
                          t.jsx("strong", { children: "Not Registered?" }),
                          " In order to log in, you will first need to",
                          " ",
                          t.jsx("a", {
                            href: "#",
                            className: "text-link underline links",
                            children: "create an account",
                          }),
                          ".",
                        ],
                      }),
                      t.jsxs("div", {
                        className: "form-group mb-4",
                        children: [
                          t.jsx("label", {
                            htmlFor: "email",
                            className: "form-label label-text",
                            children: "Email",
                          }),
                          t.jsx("input", {
                            id: "email",
                            name: "email",
                            type: "email",
                            className: "form-input input-field w-full",
                            placeholder: "Email",
                          }),
                          t.jsx("a", {
                            href: "#",
                            className:
                              "helper-link text-link mt-2 inline-block links",
                            children:
                              "No longer have access to your email address?",
                          }),
                        ],
                      }),
                      t.jsxs("div", {
                        className: "form-group mb-4",
                        children: [
                          t.jsx("label", {
                            htmlFor: "password",
                            className: "form-label label-text",
                            children: "Password",
                          }),
                          t.jsxs("div", {
                            className: "password-wrapper relative",
                            children: [
                              t.jsx("input", {
                                id: "password",
                                name: "password",
                                type: e ? "text" : "password",
                                className:
                                  "form-input input-field w-full pr-10",
                                placeholder: "Password",
                              }),
                              t.jsx("button", {
                                type: "button",
                                onClick: n,
                                className:
                                  "toggle-password absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400",
                                "aria-label": e
                                  ? "Hide password"
                                  : "Show password",
                                children: t.jsx("i", {
                                  className: "fa-regular fa-eye",
                                  "aria-hidden": "true",
                                }),
                              }),
                            ],
                          }),
                          t.jsx("a", {
                            href: "#",
                            className:
                              "helper-link text-link mt-2 inline-block links",
                            children: "Forgot your password?",
                          }),
                        ],
                      }),
                      t.jsx("div", {
                        className: "mb-6",
                        children: t.jsx("button", {
                          type: "submit",
                          className: "login-button",
                          children: "Log In",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          }),
        }),
        t.jsx("footer", { className: "mt-auto" }),
      ],
    }),
  });
}
const Ee = Object.freeze(
  Object.defineProperty({ __proto__: null, default: Ce }, Symbol.toStringTag, {
    value: "Module",
  })
);
function Fe({ className: e, ...r }) {
  return t.jsx("div", {
    "data-slot": "card",
    className: l(
      "bg-card text-card-foreground shadow-bevel-2xl flex flex-col gap-6 rounded-4xl py-6",
      e
    ),
    ...r,
  });
}
const Le = ({ children: e, className: r, ...n }) => {
  const s = l(
    "px-10",
    "py-10",
    "theme-universal:bg-widget-bg",
    "theme-universal:border-(--color-widget-border)",
    "theme-universal:rounded-widget",
    "theme-universal:shadow-widget",
    "theme-universal:border-(length:--border-widget)",
    r
  );
  return t.jsx(Fe, { className: s, ...n, children: e });
};
function Te(e) {
  const r = {};
  return (
    e.primary_button &&
      (r["--ul-theme-color-primary-button"] = e.primary_button),
    e.primary_button_label &&
      (r["--ul-theme-color-primary-button-label"] = e.primary_button_label),
    e.secondary_button_border &&
      (r["--ul-theme-color-secondary-button-border"] =
        e.secondary_button_border),
    e.secondary_button_label &&
      (r["--ul-theme-color-secondary-button-label"] = e.secondary_button_label),
    e.base_focus_color &&
      (r["--ul-theme-color-base-focus-color"] = e.base_focus_color),
    e.base_hover_color &&
      (r["--ul-theme-color-base-hover-color"] = e.base_hover_color),
    e.links_focused_components &&
      (r["--ul-theme-color-links-focused-components"] =
        e.links_focused_components),
    e.header && (r["--ul-theme-color-header"] = e.header),
    e.body_text && (r["--ul-theme-color-body-text"] = e.body_text),
    e.widget_background &&
      (r["--ul-theme-color-widget-background"] = e.widget_background),
    e.widget_border && (r["--ul-theme-color-widget-border"] = e.widget_border),
    e.input_labels_placeholders &&
      (r["--ul-theme-color-input-labels-placeholders"] =
        e.input_labels_placeholders),
    e.input_filled_text &&
      (r["--ul-theme-color-input-filled-text"] = e.input_filled_text),
    e.input_border && (r["--ul-theme-color-input-border"] = e.input_border),
    e.input_background &&
      (r["--ul-theme-color-input-background"] = e.input_background),
    e.icons && (r["--ul-theme-color-icons"] = e.icons),
    e.error && (r["--ul-theme-color-error"] = e.error),
    e.success && (r["--ul-theme-color-success"] = e.success),
    e.captcha_widget_theme &&
      (r["--ul-theme-color-captcha-widget-theme"] = e.captcha_widget_theme),
    r
  );
}
function R(e, r, n = 10) {
  switch (e) {
    case "pill":
      return 9999;
    case "sharp":
      return 0;
    case "rounded":
    default:
      return r || n;
  }
}
function ze(e) {
  const r = {},
    n = e.buttons_style
      ? R(e.buttons_style, e.button_border_radius)
      : e.button_border_radius,
    s = e.inputs_style
      ? R(e.inputs_style, e.input_border_radius)
      : e.input_border_radius;
  return (
    n !== void 0 && (r["--ul-theme-border-button-border-radius"] = `${n}px`),
    s !== void 0 && (r["--ul-theme-border-input-border-radius"] = `${s}px`),
    e.widget_corner_radius &&
      (r["--ul-theme-border-widget-corner-radius"] =
        `${e.widget_corner_radius}px`),
    e.button_border_weight !== void 0 &&
      (r["--ul-theme-border-button-border-weight"] =
        `${e.button_border_weight}px`),
    e.input_border_weight !== void 0 &&
      (r["--ul-theme-border-input-border-weight"] =
        `${e.input_border_weight}px`),
    e.widget_border_weight !== void 0 &&
      (r["--ul-theme-border-widget-border-weight"] =
        `${e.widget_border_weight}px`),
    e.buttons_style && (r["--ul-theme-border-buttons-style"] = e.buttons_style),
    e.inputs_style && (r["--ul-theme-border-inputs-style"] = e.inputs_style),
    e.show_widget_shadow !== void 0 &&
      (r["--ul-theme-border-show-widget-shadow"] = e.show_widget_shadow
        ? "0px 12px 40px 0px rgba(0, 0, 0, 0.12)"
        : "none"),
    r
  );
}
function Ae(e) {
  const r = {};
  e.reference_text_size &&
    (r["--ul-theme-font-reference-text-size"] = `${e.reference_text_size}px`);
  const n = (s, a) => {
    if (s?.size) {
      const o = s.size;
      if (e.reference_text_size) {
        const d = (e.reference_text_size * o) / 100;
        r[`--ul-theme-font-${a}-size`] = `${d}px`;
      } else {
        const i = o / 100;
        r[`--ul-theme-font-${a}-size`] = `${i}rem`;
      }
    }
    s?.bold !== void 0 &&
      (r[`--ul-theme-font-${a}-weight`] = s.bold ? "700" : "400");
  };
  return (
    n(e.title, "title"),
    n(e.subtitle, "subtitle"),
    n(e.body_text, "body-text"),
    n(e.buttons_text, "buttons-text"),
    n(e.input_labels, "input-labels"),
    n(e.links, "links"),
    e.links_style && (r["--ul-theme-font-links-style"] = e.links_style),
    r
  );
}
function Oe(e) {
  const r = {};
  if (
    (e.background_color &&
      (r["--ul-theme-page-bg-background-color"] = e.background_color),
    e.background_image_url &&
      (r["--ul-theme-page-bg-background-image-url"] =
        e.background_image_url === null || e.background_image_url === ""
          ? "none"
          : `url("${e.background_image_url}")`),
    e.page_layout)
  ) {
    const n = { center: "center", left: "flex-start", right: "flex-end" };
    r["--ul-theme-page-bg-page-layout"] = n[e.page_layout] || "center";
  }
  return r;
}
function Ie(e) {
  const r = {};
  if (
    (e.logo_url && (r["--ul-theme-widget-logo-url"] = `"${e.logo_url}"`),
    e.logo_height &&
      (r["--ul-theme-widget-logo-height"] = `${e.logo_height}px`),
    e.logo_position)
  ) {
    const n = {
      center: "center",
      left: "flex-start",
      right: "flex-end",
      none: "none",
    };
    r["--ul-theme-widget-logo-position"] = n[e.logo_position] || "center";
  }
  if (e.header_text_alignment) {
    r["--ul-theme-widget-header-text-alignment"] = e.header_text_alignment;
    const n = { center: "center", left: "left", right: "right" };
    r["--text-align-header"] = n[e.header_text_alignment] || "center";
  }
  return (
    e.social_buttons_layout &&
      (r["--ul-theme-widget-social-buttons-layout"] = e.social_buttons_layout),
    r
  );
}
let S = {};
const Ve = {
  "colors.primary": "--ul-theme-color-primary-button",
  "colors.page_background": "--ul-theme-page-bg-background-color",
  logoUrl: "--ul-theme-widget-logo-url",
};
function Me(e) {
  if (!e?.branding) return;
  qe();
  const r = Ue(e);
  Be(r);
}
function Ue(e) {
  const r = e.branding?.themes?.default || {},
    n = D(e.branding?.settings),
    s = $e(r),
    a = D(e.organization?.branding);
  return { ...n, ...s, ...a };
}
function $e(e) {
  return {
    ...Te(e.colors || {}),
    ...ze(e.borders || {}),
    ...Ae(e.fonts || {}),
    ...Oe(e.pageBackground || e.page_background || {}),
    ...Ie(e.widget || {}),
  };
}
function D(e) {
  const r = {};
  return (e && Re(e, Ve, r), r);
}
function Re(e, r, n) {
  Object.entries(r).forEach(([s, a]) => {
    const o = De(e, s);
    o &&
      typeof o == "string" &&
      (a === "--ul-theme-widget-logo-url"
        ? (n[a] = `"${o}"`)
        : a === "--ul-theme-widget-logo-height"
          ? (n[a] = typeof o == "number" ? `${o}px` : o)
          : (n[a] = o));
  });
}
function De(e, r) {
  return r.split(".").reduce((n, s) => n?.[s], e);
}
function Be(e) {
  const r = We(e);
  Object.keys(r).length !== 0 && (He(r), Ke(r));
}
function We(e) {
  const r = {};
  return (
    Object.entries(e).forEach(([n, s]) => {
      S[n] !== s && (r[n] = s);
    }),
    r
  );
}
function He(e) {
  const r = document.documentElement.style;
  Object.entries(e).forEach(([n, s]) => {
    r.setProperty(n, s);
  });
}
function Ke(e) {
  S = { ...S, ...e };
}
function qe() {
  S = {};
}
const Ge = N(
  "focus-within:ring-ring inline-flex items-center gap-2 rounded-md py-0.5 underline-offset-4 transition-colors focus:ring-3 focus-visible:outline-hidden",
  {
    variants: {
      variant: {
        destructive: "text-destructive hover:text-destructive/90",
        muted: "text-muted hover:text-muted/80",
        primary: "text-primary hover:text-primary/90",
      },
      underline: {
        none: "no-underline",
        hover: "no-underline hover:underline",
        always: "underline",
      },
    },
    defaultVariants: { variant: "primary", underline: "always" },
  }
);
function Je({
  className: e,
  children: r,
  variant: n,
  underline: s,
  ref: a,
  ...o
}) {
  return t.jsx("a", {
    ref: a,
    className: l(Ge({ variant: n, underline: s }), e),
    ...o,
    children: r,
  });
}
const z = (e) =>
    getComputedStyle(document.documentElement)
      .getPropertyValue(e)
      .trim()
      .replace(/^"(.*)"$/, "$1"),
  A = ({ children: e, className: r, disabled: n = !1, ref: s, ...a }) => {
    const o =
        "text-link-focus text-(length:--ul-theme-font-links-size) font-(weight:--ul-theme-font-links-weight) focus:rounded-(--ul-theme-border-links-border-radius) hover:text-link-focus/80",
      i = n ? "pointer-events-none text-muted cursor-not-allowed" : "",
      d =
        "theme-universal:focus:outline-none theme-universal:focus:ring-4 theme-universal:focus:ring-base-focus/15 theme-universal:focus:bg-base-focus/15",
      c = z("--ul-theme-font-links-style") === "normal" ? "none" : "always";
    return t.jsx(Je, {
      ref: s,
      className: l(o, i, d, r),
      underline: c,
      "aria-disabled": n,
      ...a,
      children: e,
    });
  },
  O = (e) => {
    if (typeof window > "u" || !e) return e;
    const r = window.location.origin;
    try {
      if (e.startsWith("http://") || e.startsWith("https://")) {
        const s = new URL(e);
        return r + s.pathname + s.search + s.hash;
      }
      if (e.startsWith("/")) {
        const s = new URL(e, r);
        return r + s.pathname + s.search + s.hash;
      }
      const n = new URL(e, window.location.href);
      return r + n.pathname + n.search + n.hash;
    } catch (n) {
      return (
        console.error("Failed to rebase URL:", n, { originalLink: e }),
        e
      );
    }
  },
  Qe = (e, r) => r(),
  E = () => {
    const e = h.useMemo(() => new ne(), []),
      { transaction: r, screen: n } = e,
      {
        isSignupEnabled: s,
        isForgotPasswordEnabled: a,
        isPasskeyEnabled: o,
      } = r,
      {
        signupLink: i,
        resetPasswordLink: d,
        texts: c,
        captchaImage: m,
        editIdentifierLink: u,
        links: f,
        data: p,
      } = n;
    return {
      loginPasswordInstance: e,
      handleLoginPassword: async (b, _, j) => {
        const v = { username: b?.trim() || "", password: _?.trim() || "" };
        (n.isCaptchaAvailable && j?.trim() && (v.captcha = j.trim()),
          Qe(`LoginPassword with options: ${JSON.stringify(v)}`, () =>
            e.login(v)
          ));
      },
      texts: c || {},
      isSignupEnabled: s === !0,
      isForgotPasswordEnabled: a === !0,
      isPasskeyEnabled: o === !0,
      isCaptchaAvailable: n.isCaptchaAvailable === !0,
      errors: e.getErrors(),
      links: f,
      editIdentifierLink: u,
      signupLink: i,
      resetPasswordLink: d,
      captchaImage: m,
      data: p,
    };
  };
function Xe() {
  const { isSignupEnabled: e, signupLink: r, texts: n } = E();
  if (!e) return null;
  const s = O(r),
    a = n?.footerText || "Don't have an account?",
    o = n?.footerLinkText || "Sign up";
  return t.jsxs("div", {
    className: "mt-4 text-left",
    children: [
      t.jsx("span", { className: "text-sm pr-1", children: a }),
      s && t.jsx(A, { href: s, children: o }),
    ],
  });
}
function Ye({ className: e, ...r }) {
  return t.jsx(se, {
    "data-slot": "avatar",
    className: l(
      "relative flex size-8 shrink-0 overflow-hidden rounded-full",
      e
    ),
    ...r,
  });
}
function Ze({ className: e, ...r }) {
  return t.jsx(ae, {
    "data-slot": "avatar-image",
    className: l("aspect-square size-full", e),
    ...r,
  });
}
const et = ({ imageUrl: e, altText: r, className: n, ...s }) => {
    const a = z("--ul-theme-widget-logo-url"),
      o = z("--ul-theme-widget-logo-position") === "none",
      i = "flex flex-wrap justify-widget-logo",
      d = "h-(--height-widget-logo)",
      c = a || e;
    return (
      !o &&
      t.jsx("div", {
        className: l(i, n),
        children: t.jsx(Ye, {
          className: "size-auto rounded-none",
          children: t.jsx(Ze, {
            src: c,
            alt: r,
            className: l(d),
            loading: "eager",
            decoding: "async",
            fetchPriority: "high",
            ...s,
          }),
        }),
      })
    );
  },
  tt = ({ children: e, className: r, ...n }) =>
    t.jsx("p", {
      className: l(
        "mb-4 text-body-text justify-text-header text-(length:--ul-theme-font-subtitle-size) font-subtitle",
        r
      ),
      ...n,
      children: e,
    }),
  rt = ({ children: e, className: r, ...n }) =>
    t.jsx("h1", {
      className: l(
        "mt-6 mb-4 text-header justify-text-header text-(length:--ul-theme-font-title-size) font-title",
        r
      ),
      ...n,
      children: e,
    });
function nt() {
  const { texts: e } = E(),
    r = e?.logoAltText || "Application Logo";
  return t.jsxs(t.Fragment, {
    children: [
      t.jsx(et, { altText: r }),
      t.jsx(rt, { children: e?.title || "Welcome" }),
      t.jsx(tt, {
        children:
          e?.description ||
          "Enter your password for My Company to continue to My App",
      }),
    ],
  });
}
const st = N(
    "bg-input aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive theme-default:active:scale-[0.99] relative box-border inline-flex w-full shrink-0 cursor-text items-center justify-center text-sm transition-[color,box-shadow] duration-150 ease-in-out outline-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
    {
      variants: {
        variant: {
          default:
            "text-input-foreground shadow-input-resting hover:shadow-input-hover focus-within:ring-ring focus-within:ring-4",
          error:
            "text-destructive-foreground shadow-input-destructive-resting hover:shadow-input-destructive-hover focus-within:ring-destructive-border/15 focus-within:ring-4",
        },
        size: {
          default: "h-14 rounded-2xl",
          sm: "h-12 rounded-2xl",
          lg: "h-16 rounded-2xl",
        },
      },
      defaultVariants: { variant: "default", size: "default" },
    }
  ),
  H = h.forwardRef(
    (
      {
        className: e,
        variant: r,
        size: n,
        error: s,
        helperText: a,
        label: o,
        startAdornment: i,
        endAdornment: d,
        ...c
      },
      m
    ) => {
      const [u, f] = h.useState(!1),
        [p, w] = h.useState(!!(c.value || c.defaultValue)),
        b = c.disabled,
        _ = (x) => {
          (f(!0), c.onFocus?.(x));
        },
        j = (x) => {
          (f(!1), w(!!x.target.value), c.onBlur?.(x));
        },
        v = (x) => {
          (w(!!x.target.value), c.onChange?.(x));
        },
        k = u || p;
      return t.jsxs("div", {
        children: [
          t.jsxs(W, {
            className: l(
              st({ variant: s ? "error" : r, size: n }),
              "group relative items-end gap-0.5",
              b &&
                "bg-input-muted text-input-foreground cursor-not-allowed opacity-50",
              b && r === "default" && "bg-input-muted",
              i && "pl-[5px]",
              d && "pr-[5px]",
              e
            ),
            children: [
              t.jsx(oe, {
                htmlFor: c.id,
                className: l(
                  "pointer-events-none absolute top-1/2 left-4 z-[10] -translate-y-1/2 text-sm transition-all duration-150 ease-in-out origin-left",
                  i && "left-0",
                  k &&
                    "scale-80 -translate-y-[1.18rem] top-2 z-10 bg-input px-1",
                  s ? "text-destructive-foreground" : "text-muted-foreground",
                  u && !s && "text-primary"
                ),
                children: o,
              }),
              i &&
                t.jsx("div", {
                  className:
                    "flex h-full items-center justify-center [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
                  children: i,
                }),
              t.jsx("div", {
                className: "relative flex-1",
                children: t.jsx(le, {
                  id: c.id,
                  className: l(
                    "h-14 w-full flex-1 rounded-2xl bg-transparent px-3 py-4 outline-none file:border-0 file:bg-transparent file:text-sm file:font-medium",
                    "autofill:bg-transparent",
                    "autofill:[-webkit-text-fill-color:inherit]",
                    "autofill:[transition:background-color_9999s_ease-in-out_0s]",
                    b &&
                      "bg-input-muted text-input-foreground cursor-not-allowed opacity-50",
                    i ? "rounded-l-none pl-0" : "pl-3",
                    d ? "rounded-r-none pr-0" : "pr-3",
                    n === "sm" && "h-12 py-3 text-sm",
                    n === "lg" && "h-16 py-5 text-base"
                  ),
                  ...c,
                  ref: m,
                  onFocus: _,
                  onBlur: j,
                  onChange: v,
                }),
              }),
              d &&
                t.jsx("div", {
                  className:
                    "flex h-full items-center justify-center [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
                  children: d,
                }),
            ],
          }),
          a &&
            t.jsx("p", {
              className: l(
                "mt-1.5 text-xs",
                s ? "text-destructive-foreground" : "text-muted-foreground"
              ),
              children: a,
            }),
        ],
      });
    }
  );
H.displayName = "FloatingLabelField";
const at = ie,
  K = h.createContext({}),
  I = ({ ...e }) =>
    t.jsx(K.Provider, {
      value: { name: e.name },
      children: t.jsx(de, { ...e }),
    }),
  q = () => {
    const e = h.useContext(K),
      r = h.useContext(G),
      { getFieldState: n } = ue(),
      s = ce({ name: e.name }),
      a = n(e.name, s);
    if (!e) throw new Error("useFormField should be used within <FormField>");
    const { id: o } = r;
    return {
      id: o,
      name: e.name,
      formItemId: `${o}-form-item`,
      formDescriptionId: `${o}-form-item-description`,
      formMessageId: `${o}-form-item-message`,
      ...a,
    };
  },
  G = h.createContext({});
function V({ className: e, ...r }) {
  const n = h.useId();
  return t.jsx(G.Provider, {
    value: { id: n },
    children: t.jsx(W, {
      "data-slot": "form-item",
      className: l("grid", e),
      ...r,
    }),
  });
}
function ot({ className: e, ...r }) {
  const { error: n, formMessageId: s } = q(),
    a = n ? String(n?.message ?? "") : r.children;
  return a
    ? t.jsx("p", {
        "data-slot": "form-message",
        id: s,
        className: l("text-destructive text-sm", e),
        ...r,
        children: a,
      })
    : null;
}
const lt = N(
  [
    "mb-2",
    "theme-universal:bg-input-bg",
    "theme-universal:text-input-text",
    "theme-universal:border-(length:--ul-theme-border-input-border-weight)",
    "theme-universal:border-input-border",
    "theme-universal:rounded-input",
    "theme-universal:text-(length:--ul-theme-font-body-text-size)",
    "theme-universal:font-body-text",
    "theme-universal:placeholder:text-input-labels",
    "theme-universal:[&_input]:placeholder:text-input-labels",
    "theme-universal:placeholder:text-(length:--ul-theme-font-input-labels-size)",
    "theme-universal:[&_input]:placeholder:text-(length:--ul-theme-font-input-labels-size)",
    "theme-universal:placeholder:font-input-label",
    "theme-universal:[&_input]:placeholder:font-input-label",
    "theme-universal:[&_label]:bg-input-bg",
    "theme-universal:[&_label]:text-input-labels",
    "theme-universal:[&_label]:text-(length:--ul-theme-font-input-labels-size)",
    "theme-universal:[&_label]:font-input-label",
  ],
  {
    variants: {
      themeState: {
        default: [
          "theme-universal:focus-within:border-base-focus",
          "theme-universal:focus-within:ring-0",
          "theme-universal:focus-within:[&_label]:text-base-focus",
        ],
        error: [
          "theme-universal:text-error",
          "theme-universal:border-error",
          "theme-universal:focus-within:border-error",
          "theme-universal:focus-within:ring-0",
          "theme-universal:[&_label]:text-error",
        ],
      },
    },
    defaultVariants: { themeState: "default" },
  }
);
function F({
  className: e,
  variant: r = "default",
  size: n = "default",
  wrapperClassName: s,
  error: a,
  ...o
}) {
  const { formItemId: i } = q(),
    d = a ? "error" : r,
    c = lt({ themeState: a ? "error" : "default" });
  return t.jsx("div", {
    className: l("w-full", s),
    children: t.jsx(H, {
      id: i,
      className: l(e, c),
      variant: d,
      size: n,
      error: a,
      ...o,
    }),
  });
}
F.displayName = "ULThemeFloatingLabelField";
const C = ({ sdkError: e, hasFormError: r, showIcon: n = !0, className: s }) =>
  !e && !r
    ? null
    : t.jsxs("div", {
        className: l(
          "flex mb-2 items-center text-sm font-medium theme-universal:text-error",
          s
        ),
        role: "alert",
        "aria-live": "polite",
        children: [
          n && t.jsx(me, { className: "h-4 w-4 mr-1 flex-shrink-0" }),
          e
            ? t.jsx("p", {
                className:
                  "text-destructive text-sm theme-universal:text-error",
                children: e,
              })
            : t.jsx(ot, { className: "theme-universal:text-error" }),
        ],
      });
C.displayName = "ULThemeFormMessage";
const it = ({
    name: e,
    control: r,
    rules: n,
    label: s,
    imageUrl: a,
    imageAltText: o,
    sdkError: i,
    className: d,
  }) => {
    const c = l("space-y-2", d),
      m = l(
        "flex justify-center p-8 rounded",
        "theme-universal:bg-input-bg",
        "theme-universal:border",
        "theme-universal:border-input-border",
        "theme-universal:rounded-input"
      );
    return a
      ? t.jsxs("div", {
          className: c,
          children: [
            t.jsx("div", {
              className: m,
              children: t.jsx("img", {
                src: a,
                alt: o,
                className: "object-contain",
              }),
            }),
            t.jsx(I, {
              control: r,
              name: e,
              rules: n,
              render: ({ field: u, fieldState: f }) =>
                t.jsxs(V, {
                  children: [
                    t.jsx(F, {
                      ...u,
                      label: s,
                      type: "text",
                      autoComplete: "off",
                      error: !!f.error || !!i,
                    }),
                    t.jsx(C, {
                      className: "mt-1",
                      sdkError: i,
                      hasFormError: !!f.error,
                    }),
                  ],
                }),
            }),
          ],
        })
      : null;
  },
  dt = N(
    "shadow-input-hover bg-input relative grid w-full grid-cols-[0_1fr] items-start gap-y-0.5 overflow-clip rounded-3xl p-3 text-sm has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] has-[>svg]:gap-x-3 [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current",
    {
      variants: {
        variant: {
          default: "text-foreground border-b-2 border-transparent",
          info: "text-info-foreground [&>svg]:text-info-foreground",
          success: "text-success-foreground [&>svg]:text-success-foreground",
          warning: "text-warning-foreground [&>svg]:text-warning-foreground",
          destructive:
            "text-destructive-foreground [&>svg]:text-destructive-foreground",
        },
      },
      defaultVariants: { variant: "default" },
    }
  );
function ut({ className: e, variant: r, ...n }) {
  return t.jsx("div", {
    "data-slot": "alert",
    role: "alert",
    className: l(dt({ variant: r }), e),
    ...n,
  });
}
function ct({ className: e, ...r }) {
  return t.jsx("div", {
    "data-slot": "alert-title",
    className: l(
      "col-start-2 line-clamp-1 flex h-auto min-h-4 leading-4.5 font-medium tracking-tight",
      e
    ),
    ...r,
  });
}
function mt({ variant: e = "destructive", className: r, ...n }) {
  const s = {
      destructive: l(
        "p-4",
        "theme-universal:bg-error",
        "theme-universal:text-(--ul-theme-color-primary-button-label)",
        "theme-universal:rounded-button",
        "theme-universal:font-body",
        "theme-universal:text-(length:--ul-theme-font-body-text-size)"
      ),
    },
    a = l(e && s[e]);
  return t.jsx(ut, { variant: e, className: l(r, a), ...n });
}
function ht({ className: e, ...r }) {
  const n = l(
    "theme-universal:text-(--ul-theme-color-primary-button-label)",
    "theme-universal:font-body",
    "theme-universal:text-(length:--ul-theme-font-body-text-size)"
  );
  return t.jsx(ct, { className: l(e, n), ...r });
}
function ft({ delay: e = 0, ...r }) {
  return t.jsx(ve, { "data-slot": "tooltip-provider", delay: e, ...r });
}
function pt({ ...e }) {
  return t.jsx(ft, { children: t.jsx(he, { "data-slot": "tooltip", ...e }) });
}
function gt({ ...e }) {
  return t.jsx(fe, { "data-slot": "tooltip-trigger", ...e });
}
function xt({
  className: e,
  arrow: r,
  side: n,
  sideOffset: s = 8,
  children: a,
  ...o
}) {
  return t.jsx(pe, {
    children: t.jsx(ge, {
      side: n,
      sideOffset: s,
      children: t.jsxs(xe, {
        "data-slot": "tooltip-content",
        className: l(
          "bg-popover text-popover-foreground data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 shadow-bevel-lg z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-xl px-2 py-1 text-sm text-balance",
          e
        ),
        ...o,
        children: [
          a,
          r
            ? t.jsx(be, {
                className:
                  "bg-primary fill-primary z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]",
              })
            : null,
        ],
      }),
    }),
  });
}
const J = ({ onVisibilityToggle: e, buttonClassName: r, ...n }) => {
  const [s, a] = h.useState(!1),
    o = () => {
      const d = !s;
      (a(d), e?.(d));
    },
    i = t.jsxs(pt, {
      children: [
        t.jsx(gt, {
          type: "button",
          onClick: o,
          className: l(
            "cursor-pointer h-full w-full min-w-[44px] mr-[-5px]",
            "theme-universal:rounded-r-input theme-universal:rounded-l-none",
            "theme-universal:text-input-labels",
            "theme-universal:hover:text-input-text",
            "transition-colors",
            "theme-universal:focus:bg-base-focus/15 theme-universal:focus-visible:ring-0 theme-universal:focus-visible:ring-offset-0",
            "flex items-center justify-center",
            "bg-transparent border-none outline-none",
            r
          ),
          "aria-label": s ? "Hide password" : "Show password",
          children: s ? t.jsx(we, {}) : t.jsx(ye, {}),
        }),
        t.jsx(xt, {
          sideOffset: 0,
          className: "bg-black text-white -mb-2 ml-0.5",
          children: s ? "Hide password" : "Show password",
        }),
      ],
    });
  return t.jsx(F, { ...n, type: s ? "text" : "password", endAdornment: i });
};
J.displayName = "ULThemePasswordField";
const bt = N(
  "focus-visible:ring-ring aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive theme-default:active:scale-[0.99] relative box-border inline-flex shrink-0 items-center justify-center gap-2 overflow-hidden text-sm font-medium whitespace-nowrap transition-all duration-150 ease-in-out outline-none focus-visible:ring-4 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        primary:
          "shadow-button-resting hover:shadow-button-hover hover:border-primary/50 border-primary bg-primary text-primary-foreground hover:bg-primary/90 theme-default:before:from-primary-foreground/0 theme-default:before:to-primary-foreground/15 theme-default:before:absolute theme-default:before:top-0 theme-default:before:left-0 theme-default:before:block theme-default:before:h-full theme-default:before:w-full theme-default:before:bg-gradient-to-t theme-default:before:content-[''] border",
        outline:
          "dark:bg-muted/50 hover:text-accent-foreground shadow-button-outlined-resting hover:shadow-button-outlined-hover hover:border-accent bg-background hover:bg-muted text-primary border-primary/35 theme-default:before:from-primary/5 theme-default:before:to-primary/0 theme-default:before:absolute theme-default:before:top-0 theme-default:before:left-0 theme-default:before:block theme-default:before:h-full theme-default:before:w-full theme-default:before:bg-gradient-to-t theme-default:before:content-[''] border",
        ghost: "hover:bg-muted text-primary bg-transparent",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-button-destructive-resting hover:shadow-button-destructive-hover border-destructive-border/25 hover:border-destructive-border/50 theme-default:before:to-primary-foreground/50 theme-default:before:absolute theme-default:before:top-0 theme-default:before:left-0 theme-default:before:block theme-default:before:h-full theme-default:before:w-full theme-default:before:bg-gradient-to-t theme-default:before:content-[''] theme-default:border",
        link: "text-foreground underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 rounded-2xl px-4 py-2.5 has-[>svg]:px-3",
        xs: "h-7 rounded-md px-2 py-1.5 text-xs has-[>svg]:px-2",
        sm: "h-8 gap-1.5 rounded-xl px-3 py-2 text-xs has-[>svg]:px-2.5",
        lg: "h-12 rounded-3xl px-6 py-3 text-base has-[>svg]:px-4",
        icon: "size-7 rounded-xl",
      },
    },
    defaultVariants: { variant: "primary", size: "default" },
  }
);
function vt({
  className: e,
  variant: r,
  size: n,
  render: s = t.jsx("button", {}),
  ...a
}) {
  const o = { className: l(bt({ variant: r, size: n }), e) };
  return je({ render: s, props: { ...o, ...a } });
}
function wt({
  variant: e = "primary",
  size: r = "default",
  className: n,
  ...s
}) {
  const a = {
      primary: l(
        "p-6 border-0",
        "cursor-pointer",
        "theme-universal:bg-primary-button",
        "theme-universal:text-(--ul-theme-color-primary-button-label)",
        "theme-universal:hover:shadow-[var(--button-hover-shadow)]",
        "theme-universal:focus:outline-none theme-universal:focus:ring-4 theme-universal:focus:ring-base-focus/15",
        "theme-universal:disabled:bg-primary-button/70",
        "theme-universal:disabled:border-primary-button/70",
        "theme-universal:disabled:cursor-not-allowed"
      ),
      secondary: "",
      destructive: "",
      outline: "",
      ghost: "",
      link: "",
    },
    o = {
      default: l(
        "theme-universal:rounded-button",
        "theme-universal:font-button",
        "theme-universal:text-(length:--ul-theme-font-buttons-text-size)"
      ),
      xs: l(
        "theme-universal:rounded-button",
        "theme-universal:font-button",
        "theme-universal:text-(length:--ul-theme-font-buttons-text-size)"
      ),
      sm: l(
        "theme-universal:rounded-button",
        "theme-universal:font-button",
        "theme-universal:text-(length:--ul-theme-font-buttons-text-size)"
      ),
      lg: l(
        "theme-universal:rounded-button",
        "theme-universal:font-button",
        "theme-universal:text-(length:--ul-theme-font-buttons-text-size)"
      ),
      icon: l("theme-universal:rounded-button"),
    },
    i = l(e && a[e], r && o[r]);
  return t.jsx(vt, { variant: e, size: r, className: l(n, i), ...s });
}
const P = (e, r) =>
    Array.isArray(r) ? r.find((s) => s.field === e)?.message : void 0,
  yt = (e, r, n) => {
    const s = [];
    return (
      e && s.push("email"),
      r && s.push("phone"),
      n && s.push("username"),
      s.join("-")
    );
  },
  jt = (e, r) => {
    let n = r?.usernameOrEmailPlaceholder || "Username or Email Address",
      s = "text",
      a = "username";
    if (e) {
      const o = e.includes("email"),
        i = e.includes("phone"),
        d = e.includes("username"),
        c = yt(o, i, d),
        u = {
          email: {
            labelKey: "emailPlaceholder",
            labelFallback: r?.emailPlaceholder || "Email Address",
            type: "email",
            autoComplete: "email",
          },
          phone: {
            labelKey: "phonePlaceholder",
            labelFallback: r?.phonePlaceholder || "Phone Number",
            type: "tel",
            autoComplete: "tel",
          },
          username: {
            labelKey: "usernameOnlyPlaceholder",
            labelFallback: r?.usernameOnlyPlaceholder || "Username",
            autoComplete: "username",
          },
          "email-phone": {
            labelKey: "phoneOrEmailPlaceholder",
            labelFallback:
              r?.phoneOrEmailPlaceholder || "Phone Number or Email Address",
            autoComplete: "username",
          },
          "email-username": {
            labelKey: "usernameOrEmailPlaceholder",
            labelFallback:
              r?.usernameOrEmailPlaceholder || "Username or Email Address",
            autoComplete: "username",
          },
          "phone-username": {
            labelKey: "phoneOrUsernamePlaceholder",
            labelFallback:
              r?.phoneOrUsernamePlaceholder || "Phone Number or Username",
            autoComplete: "username",
          },
          "email-phone-username": {
            labelKey: "phoneOrUsernameOrEmailPlaceholder",
            labelFallback:
              r?.phoneOrUsernameOrEmailPlaceholder ||
              "Phone, Username, or Email",
            autoComplete: "username",
          },
        }[c];
      u &&
        ((n = u.labelFallback),
        u.type && (s = u.type),
        u.autoComplete && (a = u.autoComplete));
    }
    return (
      n.endsWith("*") || (n += "*"),
      { label: n, type: s, autoComplete: a }
    );
  };
function _t() {
  const {
      links: e,
      data: r,
      handleLoginPassword: n,
      errors: s,
      isCaptchaAvailable: a,
      captchaImage: o,
      resetPasswordLink: i,
      isForgotPasswordEnabled: d,
      loginPasswordInstance: c,
      texts: m,
    } = E(),
    u = _e({
      defaultValues: { username: r?.username || "", password: "", captcha: "" },
    }),
    {
      formState: { isSubmitting: f },
    } = u,
    p = m?.buttonText || "Continue",
    w = m?.passwordPlaceholder || "Password",
    b = m?.captchaCodePlaceholder?.concat("*") || "CAPTCHA*",
    _ = "CAPTCHA challenge",
    j = m?.forgotPasswordText || "Forgot Password?",
    v = s?.filter((g) => !g.field || g.field === null) || [],
    k = P("username", s) || P("email", s),
    x = P("password", s),
    U = P("captcha", s),
    Q = c?.transaction?.getAllowedIdentifiers() || [],
    L = c?.transaction?.getPasswordPolicy(),
    { label: X, type: Y } = jt(Q, m),
    Z = async (g) => {
      await n(g.username, g.password, g.captcha);
    },
    $ = i && O(i),
    ee = O(e?.edit_identifier) || "";
  return t.jsx(at, {
    ...u,
    children: t.jsxs("form", {
      onSubmit: u.handleSubmit(Z),
      className: "space-y-2",
      children: [
        v.length > 0 &&
          t.jsx("div", {
            className: "space-y-3 mb-4",
            children: v.map((g, y) =>
              t.jsx(mt, { children: t.jsx(ht, { children: g.message }) }, y)
            ),
          }),
        t.jsx(I, {
          control: u.control,
          name: "username",
          render: ({ field: g, fieldState: y }) =>
            t.jsxs(V, {
              children: [
                t.jsx(F, {
                  ...g,
                  label: X,
                  type: Y,
                  value: r?.username || "",
                  error: !!y.error || !!k,
                  readOnly: !0,
                  endAdornment: t.jsx(A, {
                    href: ee,
                    children: m?.editEmailText || "Edit",
                  }),
                  className: "pr-[16px]",
                }),
                t.jsx(C, { sdkError: k, hasFormError: !!y.error }),
              ],
            }),
        }),
        t.jsx(I, {
          control: u.control,
          name: "password",
          rules: {
            required: "Password is required",
            maxLength: {
              value: 200,
              message: "Maximum 200 characters allowed",
            },
            minLength: L?.minLength
              ? {
                  value: L.minLength,
                  message: `Password must be at least ${L.minLength} characters`,
                }
              : void 0,
          },
          render: ({ field: g, fieldState: y }) =>
            t.jsxs(V, {
              children: [
                t.jsx(J, {
                  ...g,
                  label: w,
                  autoFocus: !0,
                  autoComplete: "current-password",
                  error: !!y.error || !!x,
                }),
                t.jsx(C, { sdkError: x, hasFormError: !!y.error }),
              ],
            }),
        }),
        a &&
          (x || U || v.length > 0) &&
          t.jsx(it, {
            control: u.control,
            name: "captcha",
            label: b,
            imageUrl: o || "",
            imageAltText: _,
            className: "mb-4",
            sdkError: U,
            rules: {
              required: "Please complete the CAPTCHA",
              maxLength: { value: 15, message: "CAPTCHA too long" },
            },
          }),
        t.jsx("div", {
          className: "text-left mb-4",
          children: d && $ && t.jsx(A, { href: $, children: j }),
        }),
        t.jsx(wt, {
          type: "submit",
          className: "w-full",
          disabled: f,
          children: p,
        }),
      ],
    }),
  });
}
function Nt() {
  const { loginPasswordInstance: e } = E();
  return (
    Me(e),
    t.jsx(M, {
      className: "theme-universal",
      children: t.jsxs(Le, {
        className: "w-full max-w-[400px] gap-0",
        children: [t.jsx(nt, {}), t.jsx(_t, {}), t.jsx(Xe, {})],
      }),
    })
  );
}
const kt = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Nt },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Pt = "modulepreload",
  St = function (e) {
    return "/" + e;
  },
  B = {},
  T = function (r, n, s) {
    let a = Promise.resolve();
    if (n && n.length > 0) {
      let c = function (m) {
        return Promise.all(
          m.map((u) =>
            Promise.resolve(u).then(
              (f) => ({ status: "fulfilled", value: f }),
              (f) => ({ status: "rejected", reason: f })
            )
          )
        );
      };
      document.getElementsByTagName("link");
      const i = document.querySelector("meta[property=csp-nonce]"),
        d = i?.nonce || i?.getAttribute("nonce");
      a = c(
        n.map((m) => {
          if (((m = St(m)), m in B)) return;
          B[m] = !0;
          const u = m.endsWith(".css"),
            f = u ? '[rel="stylesheet"]' : "";
          if (document.querySelector(`link[href="${m}"]${f}`)) return;
          const p = document.createElement("link");
          if (
            ((p.rel = u ? "stylesheet" : Pt),
            u || (p.as = "script"),
            (p.crossOrigin = ""),
            (p.href = m),
            d && p.setAttribute("nonce", d),
            document.head.appendChild(p),
            u)
          )
            return new Promise((w, b) => {
              (p.addEventListener("load", w),
                p.addEventListener("error", () =>
                  b(new Error(`Unable to preload CSS for ${m}`))
                ));
            });
        })
      );
    }
    function o(i) {
      const d = new Event("vite:preloadError", { cancelable: !0 });
      if (((d.payload = i), window.dispatchEvent(d), !d.defaultPrevented))
        throw i;
    }
    return a.then((i) => {
      for (const d of i || []) d.status === "rejected" && o(d.reason);
      return r().catch(o);
    });
  };
async function Ct() {}
const Et = {
    "login-id": h.lazy(() => T(() => Promise.resolve().then(() => Ee), void 0)),
    login: h.lazy(() => T(() => Promise.resolve().then(() => Se), void 0)),
    "login-password": h.lazy(() =>
      T(() => Promise.resolve().then(() => kt), void 0)
    ),
  },
  Ft = (e) => Et[e] || null,
  Lt = () => {
    const [e, r] = h.useState("login-id");
    h.useEffect(() => {
      const s = Ne();
      r(s || "login-id");
    }, []);
    const n = Ft(e);
    return t.jsx(h.Suspense, {
      fallback: t.jsx("div", { children: "Loading..." }),
      children: n
        ? t.jsx(n, {})
        : t.jsxs("div", { children: ['Screen "', e, '" not implemented yet'] }),
    });
  };
async function Tt() {
  await Ct();
  const e = document.createElement("div");
  ((e.id = "root"),
    document.body.appendChild(e),
    ke
      .createRoot(document.getElementById("root"))
      .render(t.jsx(h.StrictMode, { children: t.jsx(Lt, {}) })));
}
Tt();
export { Ce as L, Nt as a };
//# sourceMappingURL=index.BO9SIy9N.js.map

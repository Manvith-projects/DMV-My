import {
  t as ve,
  c as ye,
  j as t,
  r as h,
  a as F,
  u as we,
  d as je,
  A as Ce,
  b as _e,
  F as J,
  e as Ne,
  f as Se,
  g as Pe,
  C as ke,
  h as Te,
  i as Le,
  k as Ee,
  l as Fe,
  m as q,
  n as Ae,
  T as Ie,
  o as Me,
  p as ze,
  q as Re,
  s as Be,
  v as Ue,
  w as Oe,
  E as Ve,
  x as Ge,
  y as De,
  z as Ke,
} from "../shared/vendor.BlA-uXW_.js";
function u(...e) {
  return ve(ye(e));
}
const G = ({ children: e, className: a, ...n }) => {
  const r = u("w-full min-h-screen", "justify-page-layout", a);
  return t.jsxs("div", {
    className: r,
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
function $e() {
  h.useEffect(() => {
    document.title = "Login";
  }, []);
  const [e, a] = h.useState(!1),
    n = () => a((r) => !r);
  return t.jsx(G, {
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
                    onSubmit: (r) => r.preventDefault(),
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
const He = Object.freeze(
  Object.defineProperty({ __proto__: null, default: $e }, Symbol.toStringTag, {
    value: "Module",
  })
);
function We({ className: e, ...a }) {
  return t.jsx("div", {
    "data-slot": "card",
    className: u(
      "bg-card text-card-foreground shadow-bevel-2xl flex flex-col gap-6 rounded-4xl py-6",
      e
    ),
    ...a,
  });
}
const Y = ({ children: e, className: a, ...n }) => {
    const r = u(
      "px-10",
      "py-10",
      "theme-universal:bg-widget-bg",
      "theme-universal:border-(--color-widget-border)",
      "theme-universal:rounded-widget",
      "theme-universal:shadow-widget",
      "theme-universal:border-(length:--border-widget)",
      a
    );
    return t.jsx(We, { className: r, ...n, children: e });
  },
  K = ({ text: e, className: a }) => {
    const n = "relative flex items-center my-4",
      r = u("flex-grow border-t", "theme-universal:border-input-border"),
      l = u(
        "flex-shrink px-2",
        "theme-universal:text-body-text",
        "theme-universal:text-(length:--ul-theme-font-body-text-size)",
        "theme-universal:font-body"
      );
    return e
      ? t.jsxs("div", {
          className: u(n, a),
          children: [
            t.jsx("div", { className: r }),
            t.jsx("span", { className: l, children: e }),
            t.jsx("div", { className: r }),
          ],
        })
      : t.jsx("hr", { className: u("my-4", r, a) });
  },
  M = (e) =>
    getComputedStyle(document.documentElement)
      .getPropertyValue(e)
      .trim()
      .replace(/^"(.*)"$/, "$1");
function Ze(e) {
  const a = {};
  return (
    e.primary_button &&
      (a["--ul-theme-color-primary-button"] = e.primary_button),
    e.primary_button_label &&
      (a["--ul-theme-color-primary-button-label"] = e.primary_button_label),
    e.secondary_button_border &&
      (a["--ul-theme-color-secondary-button-border"] =
        e.secondary_button_border),
    e.secondary_button_label &&
      (a["--ul-theme-color-secondary-button-label"] = e.secondary_button_label),
    e.base_focus_color &&
      (a["--ul-theme-color-base-focus-color"] = e.base_focus_color),
    e.base_hover_color &&
      (a["--ul-theme-color-base-hover-color"] = e.base_hover_color),
    e.links_focused_components &&
      (a["--ul-theme-color-links-focused-components"] =
        e.links_focused_components),
    e.header && (a["--ul-theme-color-header"] = e.header),
    e.body_text && (a["--ul-theme-color-body-text"] = e.body_text),
    e.widget_background &&
      (a["--ul-theme-color-widget-background"] = e.widget_background),
    e.widget_border && (a["--ul-theme-color-widget-border"] = e.widget_border),
    e.input_labels_placeholders &&
      (a["--ul-theme-color-input-labels-placeholders"] =
        e.input_labels_placeholders),
    e.input_filled_text &&
      (a["--ul-theme-color-input-filled-text"] = e.input_filled_text),
    e.input_border && (a["--ul-theme-color-input-border"] = e.input_border),
    e.input_background &&
      (a["--ul-theme-color-input-background"] = e.input_background),
    e.icons && (a["--ul-theme-color-icons"] = e.icons),
    e.error && (a["--ul-theme-color-error"] = e.error),
    e.success && (a["--ul-theme-color-success"] = e.success),
    e.captcha_widget_theme &&
      (a["--ul-theme-color-captcha-widget-theme"] = e.captcha_widget_theme),
    a
  );
}
function $(e, a, n = 10) {
  switch (e) {
    case "pill":
      return 9999;
    case "sharp":
      return 0;
    case "rounded":
    default:
      return a || n;
  }
}
function Je(e) {
  const a = {},
    n = e.buttons_style
      ? $(e.buttons_style, e.button_border_radius)
      : e.button_border_radius,
    r = e.inputs_style
      ? $(e.inputs_style, e.input_border_radius)
      : e.input_border_radius;
  return (
    n !== void 0 && (a["--ul-theme-border-button-border-radius"] = `${n}px`),
    r !== void 0 && (a["--ul-theme-border-input-border-radius"] = `${r}px`),
    e.widget_corner_radius &&
      (a["--ul-theme-border-widget-corner-radius"] =
        `${e.widget_corner_radius}px`),
    e.button_border_weight !== void 0 &&
      (a["--ul-theme-border-button-border-weight"] =
        `${e.button_border_weight}px`),
    e.input_border_weight !== void 0 &&
      (a["--ul-theme-border-input-border-weight"] =
        `${e.input_border_weight}px`),
    e.widget_border_weight !== void 0 &&
      (a["--ul-theme-border-widget-border-weight"] =
        `${e.widget_border_weight}px`),
    e.buttons_style && (a["--ul-theme-border-buttons-style"] = e.buttons_style),
    e.inputs_style && (a["--ul-theme-border-inputs-style"] = e.inputs_style),
    e.show_widget_shadow !== void 0 &&
      (a["--ul-theme-border-show-widget-shadow"] = e.show_widget_shadow
        ? "0px 12px 40px 0px rgba(0, 0, 0, 0.12)"
        : "none"),
    a
  );
}
function qe(e) {
  const a = {};
  e.reference_text_size &&
    (a["--ul-theme-font-reference-text-size"] = `${e.reference_text_size}px`);
  const n = (r, l) => {
    if (r?.size) {
      const s = r.size;
      if (e.reference_text_size) {
        const i = (e.reference_text_size * s) / 100;
        a[`--ul-theme-font-${l}-size`] = `${i}px`;
      } else {
        const o = s / 100;
        a[`--ul-theme-font-${l}-size`] = `${o}rem`;
      }
    }
    r?.bold !== void 0 &&
      (a[`--ul-theme-font-${l}-weight`] = r.bold ? "700" : "400");
  };
  return (
    n(e.title, "title"),
    n(e.subtitle, "subtitle"),
    n(e.body_text, "body-text"),
    n(e.buttons_text, "buttons-text"),
    n(e.input_labels, "input-labels"),
    n(e.links, "links"),
    e.links_style && (a["--ul-theme-font-links-style"] = e.links_style),
    a
  );
}
function Ye(e) {
  const a = {};
  if (
    (e.background_color &&
      (a["--ul-theme-page-bg-background-color"] = e.background_color),
    e.background_image_url &&
      (a["--ul-theme-page-bg-background-image-url"] =
        e.background_image_url === null || e.background_image_url === ""
          ? "none"
          : `url("${e.background_image_url}")`),
    e.page_layout)
  ) {
    const n = { center: "center", left: "flex-start", right: "flex-end" };
    a["--ul-theme-page-bg-page-layout"] = n[e.page_layout] || "center";
  }
  return a;
}
function Qe(e) {
  const a = {};
  if (
    (e.logo_url && (a["--ul-theme-widget-logo-url"] = `"${e.logo_url}"`),
    e.logo_height &&
      (a["--ul-theme-widget-logo-height"] = `${e.logo_height}px`),
    e.logo_position)
  ) {
    const n = {
      center: "center",
      left: "flex-start",
      right: "flex-end",
      none: "none",
    };
    a["--ul-theme-widget-logo-position"] = n[e.logo_position] || "center";
  }
  if (e.header_text_alignment) {
    a["--ul-theme-widget-header-text-alignment"] = e.header_text_alignment;
    const n = { center: "center", left: "left", right: "right" };
    a["--text-align-header"] = n[e.header_text_alignment] || "center";
  }
  return (
    e.social_buttons_layout &&
      (a["--ul-theme-widget-social-buttons-layout"] = e.social_buttons_layout),
    a
  );
}
let z = {};
const Xe = {
  "colors.primary": "--ul-theme-color-primary-button",
  "colors.page_background": "--ul-theme-page-bg-background-color",
  logoUrl: "--ul-theme-widget-logo-url",
};
function Q(e) {
  if (!e?.branding) return;
  it();
  const a = et(e);
  rt(a);
}
function et(e) {
  const a = e.branding?.themes?.default || {},
    n = H(e.branding?.settings),
    r = tt(a),
    l = H(e.organization?.branding);
  return { ...n, ...r, ...l };
}
function tt(e) {
  return {
    ...Ze(e.colors || {}),
    ...Je(e.borders || {}),
    ...qe(e.fonts || {}),
    ...Ye(e.pageBackground || e.page_background || {}),
    ...Qe(e.widget || {}),
  };
}
function H(e) {
  const a = {};
  return (e && at(e, Xe, a), a);
}
function at(e, a, n) {
  Object.entries(a).forEach(([r, l]) => {
    const s = nt(e, r);
    s &&
      typeof s == "string" &&
      (l === "--ul-theme-widget-logo-url"
        ? (n[l] = `"${s}"`)
        : l === "--ul-theme-widget-logo-height"
          ? (n[l] = typeof s == "number" ? `${s}px` : s)
          : (n[l] = s));
  });
}
function nt(e, a) {
  return a.split(".").reduce((n, r) => n?.[r], e);
}
function rt(e) {
  const a = lt(e);
  Object.keys(a).length !== 0 && (st(a), ot(a));
}
function lt(e) {
  const a = {};
  return (
    Object.entries(e).forEach(([n, r]) => {
      z[n] !== r && (a[n] = r);
    }),
    a
  );
}
function st(e) {
  const a = document.documentElement.style;
  Object.entries(e).forEach(([n, r]) => {
    a.setProperty(n, r);
  });
}
function ot(e) {
  z = { ...z, ...e };
}
function it() {
  z = {};
}
const ut = F(
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
function X({
  className: e,
  variant: a,
  size: n,
  render: r = t.jsx("button", {}),
  ...l
}) {
  const s = { className: u(ut({ variant: a, size: n }), e) };
  return we({ render: r, props: { ...s, ...l } });
}
const W = ({
    onClick: e,
    variant: a = "outline",
    size: n = "default",
    iconComponent: r,
    displayName: l,
    buttonText: s,
    disabled: o = !1,
    className: i,
    ...d
  }) => {
    const m = `social-provider-button-${l.toLowerCase().replace(/\s+/g, "-")}`,
      c =
        "flex items-center justify-start w-full max-w-[320px] h-[52px] py-[14px] px-[16px] gap-x-4",
      f = "bg-white border-gray-mid text-text-default cursor-pointer",
      g =
        "bg-gray-mid/10 border-gray-mid/50 text-text-secondary cursor-not-allowed",
      x = {
        outline: u(
          "theme-universal:font-button",
          "theme-universal:rounded-button",
          "theme-universal:border-(length:--ul-theme-border-button-border-weight)",
          "theme-universal:border-(--color-secondary-button-border)",
          "theme-universal:text-(--color-secondary-button-label)",
          "theme-universal:hover:shadow-[var(--button-hover-shadow)]",
          "theme-universal:focus:outline-none theme-universal:focus:ring-4 theme-universal:focus:ring-base-focus/15 theme-universal:focus:bg-base-focus/15"
        ),
        primary: "",
        secondary: "",
        destructive: "",
        ghost: "",
        link: "",
      },
      p = u(a && x[a]);
    return t.jsxs(X, {
      variant: a,
      size: n,
      className: u(c, o ? g : f, p, i),
      "data-testid": m,
      disabled: o,
      onClick: e,
      ...d,
      children: [
        r &&
          t.jsx("span", {
            className: "w-5 h-5 flex items-center justify-center",
            children: r,
          }),
        t.jsx("span", {
          className:
            "overflow-hidden whitespace-nowrap text-ellipsis text-base",
          children: s,
        }),
      ],
    });
  },
  dt = (e) =>
    t.jsxs("svg", {
      width: "20",
      height: "20",
      viewBox: "0 0 20 20",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ...e,
      children: [
        t.jsx("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M5.2978e-06 2.35529C3.89779e-06 1.73149 0.247459 1.13317 0.688082 0.69161C1.12871 0.250051 1.7265 0.00132161 2.3503 0H10.5888C11.2126 0.00132161 11.8104 0.250051 12.251 0.69161C12.6917 1.13317 12.9391 1.73149 12.9391 2.35529V4.72555C12.9391 5.35021 13.1873 5.94929 13.629 6.39099C14.0707 6.83269 14.6698 7.08084 15.2944 7.08084H17.6447C18.2685 7.08084 18.8668 7.32829 19.3084 7.76892C19.7499 8.20954 19.9987 8.80734 20 9.43114V17.6497C19.9987 18.2735 19.7499 18.8713 19.3084 19.3119C18.8668 19.7525 18.2685 20 17.6447 20H9.41118C9.10211 20.0007 8.79597 19.9403 8.51024 19.8225C8.22451 19.7047 7.96482 19.5317 7.74605 19.3134C7.52727 19.0951 7.3537 18.8358 7.23528 18.5503C7.11685 18.2648 7.0559 17.9588 7.0559 17.6497V15.2944C7.0559 14.6711 6.80827 14.0733 6.3675 13.6325C5.92674 13.1917 5.32893 12.9441 4.70559 12.9441H2.3503C2.04123 12.9441 1.7352 12.8832 1.44973 12.7647C1.16425 12.6463 0.904931 12.4727 0.68662 12.254C0.46831 12.0352 0.295296 11.7755 0.177476 11.4898C0.0596565 11.204 -0.000650893 10.8979 5.2978e-06 10.5888V2.35529ZM8.38323 6.91617C7.99054 6.92271 7.61616 7.08332 7.34079 7.36335C7.06542 7.64339 6.91113 8.02043 6.91119 8.41317V12.1357C6.91113 12.5285 7.06542 12.9055 7.34079 13.1855C7.61616 13.4656 7.99054 13.6262 8.38323 13.6327H12.1058C12.5028 13.6327 12.8836 13.475 13.1643 13.1943C13.4451 12.9135 13.6028 12.5328 13.6028 12.1357V8.41317C13.6028 8.01614 13.4451 7.63537 13.1643 7.35463C12.8836 7.07388 12.5028 6.91617 12.1058 6.91617H8.38323Z",
          fill: "url(#paint0_linear_default_icon)",
        }),
        t.jsx("defs", {
          children: t.jsxs("linearGradient", {
            id: "paint0_linear_default_icon",
            x1: "-0.509765",
            y1: "0.499999",
            x2: "22.9902",
            y2: "21",
            gradientUnits: "userSpaceOnUse",
            children: [
              t.jsx("stop", { stopColor: "#635DFF" }),
              t.jsx("stop", { offset: "1", stopColor: "#3885FF" }),
            ],
          }),
        }),
      ],
    }),
  ee = () => t.jsx(dt, {}),
  mt = (e) =>
    "options" in e && e.options?.displayName
      ? e.options.displayName
      : e.name
        ? e.name
            .split(/[-_]/)
            .map((a) => a.charAt(0).toUpperCase() + a.slice(1).toLowerCase())
            .join(" ")
        : e.strategy
          ? e.strategy.charAt(0).toUpperCase() + e.strategy.slice(1)
          : "Login Provider",
  ct = (e) => {
    const a = mt(e),
      n = ee();
    return { displayName: a, iconComponent: n };
  },
  k = (e, a) => a(),
  A = () => {
    const e = h.useMemo(() => new je(), []),
      { transaction: a, screen: n } = e,
      {
        isSignupEnabled: r,
        isForgotPasswordEnabled: l,
        isPasskeyEnabled: s,
      } = a,
      { signupLink: o, resetPasswordLink: i, texts: d, captchaImage: m } = n;
    return {
      loginIdInstance: e,
      handleLoginId: async (p, C) => {
        const v = { username: p?.trim() || "" };
        (n.isCaptchaAvailable && C?.trim() && (v.captcha = C.trim()),
          k(`LoginId with options: ${JSON.stringify(v)}`, () => e.login(v)));
      },
      handleFederatedLogin: async (p) => {
        k(`Federated login with connection: ${p}`, () =>
          e.federatedLogin({ connection: p })
        );
      },
      handlePasskeyLogin: async () => {
        s && k("Passkey login", () => e.passkeyLogin());
      },
      handlePickCountryCode: async () => {
        k("Pick country code", () => e.pickCountryCode());
      },
      texts: d || {},
      isSignupEnabled: r === !0,
      isForgotPasswordEnabled: l === !0,
      isPasskeyEnabled: s === !0,
      isCaptchaAvailable: n.isCaptchaAvailable === !0,
      errors: e.getErrors(),
      captchaImage: m,
      captcha: n.captcha || null,
      signupLink: o,
      resetPasswordLink: i,
    };
  },
  ft = ({ connections: e }) => {
    const {
        handleFederatedLogin: a,
        handlePasskeyLogin: n,
        texts: r,
        isPasskeyEnabled: l,
      } = A(),
      s = r?.passkeyButtonText || "Continue with a passkey";
    return t.jsx(t.Fragment, {
      children: t.jsxs("div", {
        className: "space-y-3 mt-2",
        children: [
          l &&
            t.jsx(
              W,
              {
                displayName: "Passkey",
                buttonText: s,
                iconComponent: t.jsx("span", {
                  className: "text-primary",
                  children: ee(),
                }),
                onClick: () => n(),
              },
              "passkey"
            ),
          e?.map((o) => {
            const { displayName: i, iconComponent: d } = ct(o),
              m = `Continue with ${i}`;
            return t.jsx(
              W,
              {
                displayName: i,
                buttonText: m,
                iconComponent: d,
                onClick: () => a(o.name),
              },
              o.name
            );
          }),
        ],
      }),
    });
  },
  ht = F(
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
function gt({
  className: e,
  children: a,
  variant: n,
  underline: r,
  ref: l,
  ...s
}) {
  return t.jsx("a", {
    ref: l,
    className: u(ht({ variant: n, underline: r }), e),
    ...s,
    children: a,
  });
}
const T = ({ children: e, className: a, disabled: n = !1, ref: r, ...l }) => {
    const s =
        "text-link-focus text-(length:--ul-theme-font-links-size) font-(weight:--ul-theme-font-links-weight) focus:rounded-(--ul-theme-border-links-border-radius) hover:text-link-focus/80",
      o = n ? "pointer-events-none text-muted cursor-not-allowed" : "",
      i =
        "theme-universal:focus:outline-none theme-universal:focus:ring-4 theme-universal:focus:ring-base-focus/15 theme-universal:focus:bg-base-focus/15",
      d = M("--ul-theme-font-links-style") === "normal" ? "none" : "always";
    return t.jsx(gt, {
      ref: r,
      className: u(s, o, i, a),
      underline: d,
      "aria-disabled": n,
      ...l,
      children: e,
    });
  },
  L = (e) => {
    if (typeof window > "u" || !e) return e;
    const a = window.location.origin;
    try {
      if (e.startsWith("http://") || e.startsWith("https://")) {
        const r = new URL(e);
        return a + r.pathname + r.search + r.hash;
      }
      if (e.startsWith("/")) {
        const r = new URL(e, a);
        return a + r.pathname + r.search + r.hash;
      }
      const n = new URL(e, window.location.href);
      return a + n.pathname + n.search + n.hash;
    } catch (n) {
      return (
        console.error("Failed to rebase URL:", n, { originalLink: e }),
        e
      );
    }
  };
function pt() {
  const { isSignupEnabled: e, signupLink: a, texts: n } = A();
  if (!e) return null;
  const r = L(a),
    l = n?.footerText || "Don't have an account?",
    s = n?.footerLinkText || "Sign up";
  return t.jsxs("div", {
    className: "mt-4 text-left",
    children: [
      t.jsx("span", {
        className:
          "pr-1 text-body-text text-(length:--ul-theme-font-body-text-size) font-body",
        children: l,
      }),
      r && t.jsx(T, { href: r, children: s }),
    ],
  });
}
function xt({ className: e, ...a }) {
  return t.jsx(Ce, {
    "data-slot": "avatar",
    className: u(
      "relative flex size-8 shrink-0 overflow-hidden rounded-full",
      e
    ),
    ...a,
  });
}
function bt({ className: e, ...a }) {
  return t.jsx(_e, {
    "data-slot": "avatar-image",
    className: u("aspect-square size-full", e),
    ...a,
  });
}
const te = ({ imageUrl: e, altText: a, className: n, ...r }) => {
    const l = M("--ul-theme-widget-logo-url"),
      s = M("--ul-theme-widget-logo-position") === "none",
      o = "flex flex-wrap justify-widget-logo",
      i = "h-(--height-widget-logo)",
      d = l || e;
    return (
      !s &&
      t.jsx("div", {
        className: u(o, n),
        children: t.jsx(xt, {
          className: "size-auto rounded-none",
          children: t.jsx(bt, {
            src: d,
            alt: a,
            className: u(i),
            loading: "eager",
            decoding: "async",
            fetchPriority: "high",
            ...r,
          }),
        }),
      })
    );
  },
  ae = ({ children: e, className: a, ...n }) =>
    t.jsx("p", {
      className: u(
        "mb-4 text-body-text justify-text-header text-(length:--ul-theme-font-subtitle-size) font-subtitle",
        a
      ),
      ...n,
      children: e,
    }),
  ne = ({ children: e, className: a, ...n }) =>
    t.jsx("h1", {
      className: u(
        "mt-6 mb-4 text-header justify-text-header text-(length:--ul-theme-font-title-size) font-title",
        a
      ),
      ...n,
      children: e,
    });
function vt() {
  const { texts: e } = A(),
    a = e?.logoAltText || "Application Logo";
  return t.jsxs(t.Fragment, {
    children: [
      t.jsx(te, { altText: a }),
      t.jsx(ne, { children: e?.title || "Welcome" }),
      t.jsx(ae, {
        children:
          e?.description ||
          "Log in to dev-tenant to continue to my acul react.",
      }),
    ],
  });
}
const yt = F(
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
  re = h.forwardRef(
    (
      {
        className: e,
        variant: a,
        size: n,
        error: r,
        helperText: l,
        label: s,
        startAdornment: o,
        endAdornment: i,
        ...d
      },
      m
    ) => {
      const [c, f] = h.useState(!1),
        [g, x] = h.useState(!!(d.value || d.defaultValue)),
        p = d.disabled,
        C = (b) => {
          (f(!0), d.onFocus?.(b));
        },
        v = (b) => {
          (f(!1), x(!!b.target.value), d.onBlur?.(b));
        },
        w = (b) => {
          (x(!!b.target.value), d.onChange?.(b));
        },
        N = c || g;
      return t.jsxs("div", {
        children: [
          t.jsxs(J, {
            className: u(
              yt({ variant: r ? "error" : a, size: n }),
              "group relative items-end gap-0.5",
              p &&
                "bg-input-muted text-input-foreground cursor-not-allowed opacity-50",
              p && a === "default" && "bg-input-muted",
              o && "pl-[5px]",
              i && "pr-[5px]",
              e
            ),
            children: [
              t.jsx(Ne, {
                htmlFor: d.id,
                className: u(
                  "pointer-events-none absolute top-1/2 left-4 z-[10] -translate-y-1/2 text-sm transition-all duration-150 ease-in-out origin-left",
                  o && "left-0",
                  N &&
                    "scale-80 -translate-y-[1.18rem] top-2 z-10 bg-input px-1",
                  r ? "text-destructive-foreground" : "text-muted-foreground",
                  c && !r && "text-primary"
                ),
                children: s,
              }),
              o &&
                t.jsx("div", {
                  className:
                    "flex h-full items-center justify-center [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
                  children: o,
                }),
              t.jsx("div", {
                className: "relative flex-1",
                children: t.jsx(Se, {
                  id: d.id,
                  className: u(
                    "h-14 w-full flex-1 rounded-2xl bg-transparent px-3 py-4 outline-none file:border-0 file:bg-transparent file:text-sm file:font-medium",
                    "autofill:bg-transparent",
                    "autofill:[-webkit-text-fill-color:inherit]",
                    "autofill:[transition:background-color_9999s_ease-in-out_0s]",
                    p &&
                      "bg-input-muted text-input-foreground cursor-not-allowed opacity-50",
                    o ? "rounded-l-none pl-0" : "pl-3",
                    i ? "rounded-r-none pr-0" : "pr-3",
                    n === "sm" && "h-12 py-3 text-sm",
                    n === "lg" && "h-16 py-5 text-base"
                  ),
                  ...d,
                  ref: m,
                  onFocus: C,
                  onBlur: v,
                  onChange: w,
                }),
              }),
              i &&
                t.jsx("div", {
                  className:
                    "flex h-full items-center justify-center [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
                  children: i,
                }),
            ],
          }),
          l &&
            t.jsx("p", {
              className: u(
                "mt-1.5 text-xs",
                r ? "text-destructive-foreground" : "text-muted-foreground"
              ),
              children: l,
            }),
        ],
      });
    }
  );
re.displayName = "FloatingLabelField";
const le = Pe,
  se = h.createContext({}),
  R = ({ ...e }) =>
    t.jsx(se.Provider, {
      value: { name: e.name },
      children: t.jsx(ke, { ...e }),
    }),
  oe = () => {
    const e = h.useContext(se),
      a = h.useContext(ie),
      { getFieldState: n } = Te(),
      r = Le({ name: e.name }),
      l = n(e.name, r);
    if (!e) throw new Error("useFormField should be used within <FormField>");
    const { id: s } = a;
    return {
      id: s,
      name: e.name,
      formItemId: `${s}-form-item`,
      formDescriptionId: `${s}-form-item-description`,
      formMessageId: `${s}-form-item-message`,
      ...l,
    };
  },
  ie = h.createContext({});
function B({ className: e, ...a }) {
  const n = h.useId();
  return t.jsx(ie.Provider, {
    value: { id: n },
    children: t.jsx(J, {
      "data-slot": "form-item",
      className: u("grid", e),
      ...a,
    }),
  });
}
function wt({ className: e, ...a }) {
  const { error: n, formMessageId: r } = oe(),
    l = n ? String(n?.message ?? "") : a.children;
  return l
    ? t.jsx("p", {
        "data-slot": "form-message",
        id: r,
        className: u("text-destructive text-sm", e),
        ...a,
        children: l,
      })
    : null;
}
const jt = F(
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
function I({
  className: e,
  variant: a = "default",
  size: n = "default",
  wrapperClassName: r,
  error: l,
  ...s
}) {
  const { formItemId: o } = oe(),
    i = l ? "error" : a,
    d = jt({ themeState: l ? "error" : "default" });
  return t.jsx("div", {
    className: u("w-full", r),
    children: t.jsx(re, {
      id: o,
      className: u(e, d),
      variant: i,
      size: n,
      error: l,
      ...s,
    }),
  });
}
I.displayName = "ULThemeFloatingLabelField";
const E = ({ sdkError: e, hasFormError: a, showIcon: n = !0, className: r }) =>
  !e && !a
    ? null
    : t.jsxs("div", {
        className: u(
          "flex mb-2 items-center text-sm font-medium theme-universal:text-error",
          r
        ),
        role: "alert",
        "aria-live": "polite",
        children: [
          n && t.jsx(Ee, { className: "h-4 w-4 mr-1 flex-shrink-0" }),
          e
            ? t.jsx("p", {
                className:
                  "text-destructive text-sm theme-universal:text-error",
                children: e,
              })
            : t.jsx(wt, { className: "theme-universal:text-error" }),
        ],
      });
E.displayName = "ULThemeFormMessage";
const ue = h.forwardRef(
  (
    {
      selectedCountry: e,
      placeholder: a = "Select Country",
      isLoading: n = !1,
      fullWidth: r = !1,
      className: l,
      disabled: s,
      ...o
    },
    i
  ) => {
    const d = u(
        "inline-flex items-center justify-between px-4 py-4 text-left font-medium transition-colors duration-150 ease-in-out",
        "theme-universal:bg-input-bg",
        "theme-universal:text-input-text",
        "theme-universal:border",
        "theme-universal:border-input-border",
        "theme-universal:text-(length:--ul-theme-font-body-text-size)",
        "theme-universal:font-body",
        "theme-universal:rounded-input",
        "theme-universal:hover:border-base-focus",
        "theme-universal:focus:outline-none theme-universal:focus:ring-2 theme-universal:focus:ring-base-focus/20"
      ),
      m = r ? "w-full" : "",
      c = s || n ? "disabled:opacity-70 cursor-not-allowed" : "cursor-pointer";
    return t.jsxs("button", {
      ref: i,
      type: "button",
      disabled: s || n,
      className: u(d, m, c, l),
      ...o,
      children: [
        t.jsx("div", {
          className: "flex items-center space-x-3 flex-1 min-w-0",
          children: e
            ? t.jsxs(t.Fragment, {
                children: [
                  t.jsx("div", {
                    className:
                      "flex-shrink-0 w-6 h-4 flex items-center justify-center",
                    children: e.flag.startsWith("http")
                      ? t.jsx("img", {
                          src: e.flag,
                          alt: `${e.name} flag`,
                          className: "w-6 h-4 object-cover rounded-sm",
                        })
                      : t.jsx("span", {
                          className: "text-lg",
                          children: e.flag,
                        }),
                  }),
                  t.jsx("div", {
                    className: "flex-1 min-w-0",
                    children: t.jsxs("span", {
                      className:
                        "theme-universal:text-input-text theme-universal:font-body truncate",
                      children: [e.name, ", ", e.code, ",", " ", e.dialCode],
                    }),
                  }),
                ],
              })
            : t.jsxs(t.Fragment, {
                children: [
                  t.jsx("div", {
                    className:
                      "flex-shrink-0 w-6 h-4 theme-universal:bg-input-border rounded-sm",
                  }),
                  t.jsx("span", {
                    className:
                      "theme-universal:text-input-labels flex-1 truncate",
                    children: a,
                  }),
                ],
              }),
        }),
        t.jsx("div", {
          className: "flex-shrink-0 ml-2",
          children: t.jsx(Fe, {
            className: u(
              "w-4 h-4 theme-universal:text-input-labels transition-transform duration-200",
              n && "animate-pulse"
            ),
          }),
        }),
      ],
    });
  }
);
ue.displayName = "ULThemeCountryCodePicker";
const Ct = F(
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
function _t({ className: e, variant: a, ...n }) {
  return t.jsx("div", {
    "data-slot": "alert",
    role: "alert",
    className: u(Ct({ variant: a }), e),
    ...n,
  });
}
function Nt({ className: e, ...a }) {
  return t.jsx("div", {
    "data-slot": "alert-title",
    className: u(
      "col-start-2 line-clamp-1 flex h-auto min-h-4 leading-4.5 font-medium tracking-tight",
      e
    ),
    ...a,
  });
}
function de({ variant: e = "destructive", className: a, ...n }) {
  const r = {
      destructive: u(
        "p-4",
        "theme-universal:bg-error",
        "theme-universal:text-(--ul-theme-color-primary-button-label)",
        "theme-universal:rounded-button",
        "theme-universal:font-body",
        "theme-universal:text-(length:--ul-theme-font-body-text-size)"
      ),
    },
    l = u(e && r[e]);
  return t.jsx(_t, { variant: e, className: u(a, l), ...n });
}
function me({ className: e, ...a }) {
  const n = u(
    "theme-universal:text-(--ul-theme-color-primary-button-label)",
    "theme-universal:font-body",
    "theme-universal:text-(length:--ul-theme-font-body-text-size)"
  );
  return t.jsx(Nt, { className: u(e, n), ...a });
}
function ce({
  variant: e = "primary",
  size: a = "default",
  className: n,
  ...r
}) {
  const l = {
      primary: u(
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
    s = {
      default: u(
        "theme-universal:rounded-button",
        "theme-universal:font-button",
        "theme-universal:text-(length:--ul-theme-font-buttons-text-size)"
      ),
      xs: u(
        "theme-universal:rounded-button",
        "theme-universal:font-button",
        "theme-universal:text-(length:--ul-theme-font-buttons-text-size)"
      ),
      sm: u(
        "theme-universal:rounded-button",
        "theme-universal:font-button",
        "theme-universal:text-(length:--ul-theme-font-buttons-text-size)"
      ),
      lg: u(
        "theme-universal:rounded-button",
        "theme-universal:font-button",
        "theme-universal:text-(length:--ul-theme-font-buttons-text-size)"
      ),
      icon: u("theme-universal:rounded-button"),
    },
    o = u(e && l[e], a && s[a]);
  return t.jsx(X, { variant: e, size: a, className: u(n, o), ...r });
}
const St = {
  AD: { name: "Andorra", flag: "🇦🇩" },
  AE: { name: "United Arab Emirates", flag: "🇦🇪" },
  AF: { name: "Afghanistan", flag: "🇦🇫" },
  AG: { name: "Antigua and Barbuda", flag: "🇦🇬" },
  AI: { name: "Anguilla", flag: "🇦🇮" },
  AL: { name: "Albania", flag: "🇦🇱" },
  AM: { name: "Armenia", flag: "🇦🇲" },
  AO: { name: "Angola", flag: "🇦🇴" },
  AQ: { name: "Antarctica", flag: "🇦🇶" },
  AR: { name: "Argentina", flag: "🇦🇷" },
  AS: { name: "American Samoa", flag: "🇦🇸" },
  AT: { name: "Austria", flag: "🇦🇹" },
  AU: { name: "Australia", flag: "🇦🇺" },
  AW: { name: "Aruba", flag: "🇦🇼" },
  AX: { name: "Åland Islands", flag: "🇦🇽" },
  AZ: { name: "Azerbaijan", flag: "🇦🇿" },
  BA: { name: "Bosnia and Herzegovina", flag: "🇧🇦" },
  BB: { name: "Barbados", flag: "🇧🇧" },
  BD: { name: "Bangladesh", flag: "🇧🇩" },
  BE: { name: "Belgium", flag: "🇧🇪" },
  BF: { name: "Burkina Faso", flag: "🇧🇫" },
  BG: { name: "Bulgaria", flag: "🇧🇬" },
  BH: { name: "Bahrain", flag: "🇧🇭" },
  BI: { name: "Burundi", flag: "🇧🇮" },
  BJ: { name: "Benin", flag: "🇧🇯" },
  BL: { name: "Saint Barthélemy", flag: "🇧🇱" },
  BM: { name: "Bermuda", flag: "🇧🇲" },
  BN: { name: "Brunei Darussalam", flag: "🇧🇳" },
  BO: { name: "Bolivia, Plurinational State of", flag: "🇧🇴" },
  BQ: { name: "Bonaire, Sint Eustatius and Saba", flag: "🇧🇶" },
  BR: { name: "Brazil", flag: "🇧🇷" },
  BS: { name: "Bahamas", flag: "🇧🇸" },
  BT: { name: "Bhutan", flag: "🇧🇹" },
  BV: { name: "Bouvet Island", flag: "🇧🇻" },
  BW: { name: "Botswana", flag: "🇧🇼" },
  BY: { name: "Belarus", flag: "🇧🇾" },
  BZ: { name: "Belize", flag: "🇧🇿" },
  CA: { name: "Canada", flag: "🇨🇦" },
  CC: { name: "Cocos (Keeling) Islands", flag: "🇨🇨" },
  CD: { name: "Congo, the Democratic Republic of the", flag: "🇨🇩" },
  CF: { name: "Central African Republic", flag: "🇨🇫" },
  CG: { name: "Congo", flag: "🇨🇬" },
  CH: { name: "Switzerland", flag: "🇨🇭" },
  CI: { name: "Côte d'Ivoire", flag: "🇨🇮" },
  CK: { name: "Cook Islands", flag: "🇨🇰" },
  CL: { name: "Chile", flag: "🇨🇱" },
  CM: { name: "Cameroon", flag: "🇨🇲" },
  CN: { name: "China", flag: "🇨🇳" },
  CO: { name: "Colombia", flag: "🇨🇴" },
  CR: { name: "Costa Rica", flag: "🇨🇷" },
  CU: { name: "Cuba", flag: "🇨🇺" },
  CV: { name: "Cape Verde", flag: "🇨🇻" },
  CW: { name: "Curaçao", flag: "🇨🇼" },
  CX: { name: "Christmas Island", flag: "🇨🇽" },
  CY: { name: "Cyprus", flag: "🇨🇾" },
  CZ: { name: "Czech Republic", flag: "🇨🇿" },
  DE: { name: "Germany", flag: "🇩🇪" },
  DJ: { name: "Djibouti", flag: "🇩🇯" },
  DK: { name: "Denmark", flag: "🇩🇰" },
  DM: { name: "Dominica", flag: "🇩🇲" },
  DO: { name: "Dominican Republic", flag: "🇩🇴" },
  DZ: { name: "Algeria", flag: "🇩🇿" },
  EC: { name: "Ecuador", flag: "🇪🇨" },
  EE: { name: "Estonia", flag: "🇪🇪" },
  EG: { name: "Egypt", flag: "🇪🇬" },
  EH: { name: "Western Sahara", flag: "🇪🇭" },
  ER: { name: "Eritrea", flag: "🇪🇷" },
  ES: { name: "Spain", flag: "🇪🇸" },
  ET: { name: "Ethiopia", flag: "🇪🇹" },
  FI: { name: "Finland", flag: "🇫🇮" },
  FJ: { name: "Fiji", flag: "🇫🇯" },
  FK: { name: "Falkland Islands (Malvinas)", flag: "🇫🇰" },
  FM: { name: "Micronesia, Federated States of", flag: "🇫🇲" },
  FO: { name: "Faroe Islands", flag: "🇫🇴" },
  FR: { name: "France", flag: "🇫🇷" },
  GA: { name: "Gabon", flag: "🇬🇦" },
  GB: { name: "United Kingdom", flag: "🇬🇧" },
  GD: { name: "Grenada", flag: "🇬🇩" },
  GE: { name: "Georgia", flag: "🇬🇪" },
  GF: { name: "French Guiana", flag: "🇬🇫" },
  GG: { name: "Guernsey", flag: "🇬🇬" },
  GH: { name: "Ghana", flag: "🇬🇭" },
  GI: { name: "Gibraltar", flag: "🇬🇮" },
  GL: { name: "Greenland", flag: "🇬🇱" },
  GM: { name: "Gambia", flag: "🇬🇲" },
  GN: { name: "Guinea", flag: "🇬🇳" },
  GP: { name: "Guadeloupe", flag: "🇬🇵" },
  GQ: { name: "Equatorial Guinea", flag: "🇬🇶" },
  GR: { name: "Greece", flag: "🇬🇷" },
  GS: { name: "South Georgia and the South Sandwich Islands", flag: "🇬🇸" },
  GT: { name: "Guatemala", flag: "🇬🇹" },
  GU: { name: "Guam", flag: "🇬🇺" },
  GW: { name: "Guinea-Bissau", flag: "🇬🇼" },
  GY: { name: "Guyana", flag: "🇬🇾" },
  HK: { name: "Hong Kong", flag: "🇭🇰" },
  HM: { name: "Heard Island and McDonald Islands", flag: "🇭🇲" },
  HN: { name: "Honduras", flag: "🇭🇳" },
  HR: { name: "Croatia", flag: "🇭🇷" },
  HT: { name: "Haiti", flag: "🇭🇹" },
  HU: { name: "Hungary", flag: "🇭🇺" },
  ID: { name: "Indonesia", flag: "🇮🇩" },
  IE: { name: "Ireland", flag: "🇮🇪" },
  IL: { name: "Israel", flag: "🇮🇱" },
  IM: { name: "Isle of Man", flag: "🇮🇲" },
  IN: { name: "India", flag: "🇮🇳" },
  IO: { name: "British Indian Ocean Territory", flag: "🇮🇴" },
  IQ: { name: "Iraq", flag: "🇮🇶" },
  IR: { name: "Iran, Islamic Republic of", flag: "🇮🇷" },
  IS: { name: "Iceland", flag: "🇮🇸" },
  IT: { name: "Italy", flag: "🇮🇹" },
  JE: { name: "Jersey", flag: "🇯🇪" },
  JM: { name: "Jamaica", flag: "🇯🇲" },
  JO: { name: "Jordan", flag: "🇯🇴" },
  JP: { name: "Japan", flag: "🇯🇵" },
  KE: { name: "Kenya", flag: "🇰🇪" },
  KG: { name: "Kyrgyzstan", flag: "🇰🇬" },
  KH: { name: "Cambodia", flag: "🇰🇭" },
  KI: { name: "Kiribati", flag: "🇰🇮" },
  KM: { name: "Comoros", flag: "🇰🇲" },
  KN: { name: "Saint Kitts and Nevis", flag: "🇰🇳" },
  KP: { name: "Korea, Democratic People's Republic of", flag: "🇰🇵" },
  KR: { name: "Korea, Republic of", flag: "🇰🇷" },
  KW: { name: "Kuwait", flag: "🇰🇼" },
  KY: { name: "Cayman Islands", flag: "🇰🇾" },
  KZ: { name: "Kazakhstan", flag: "🇰🇿" },
  LA: { name: "Lao People's Democratic Republic", flag: "🇱🇦" },
  LB: { name: "Lebanon", flag: "🇱🇧" },
  LC: { name: "Saint Lucia", flag: "🇱🇨" },
  LI: { name: "Liechtenstein", flag: "🇱🇮" },
  LK: { name: "Sri Lanka", flag: "🇱🇰" },
  LR: { name: "Liberia", flag: "🇱🇷" },
  LS: { name: "Lesotho", flag: "🇱🇸" },
  LT: { name: "Lithuania", flag: "🇱🇹" },
  LU: { name: "Luxembourg", flag: "🇱🇺" },
  LV: { name: "Latvia", flag: "🇱🇻" },
  LY: { name: "Libya", flag: "🇱🇾" },
  MA: { name: "Morocco", flag: "🇲🇦" },
  MC: { name: "Monaco", flag: "🇲🇨" },
  MD: { name: "Moldova, Republic of", flag: "🇲🇩" },
  ME: { name: "Montenegro", flag: "🇲🇪" },
  MF: { name: "Saint Martin (French part)", flag: "🇲🇫" },
  MG: { name: "Madagascar", flag: "🇲🇬" },
  MH: { name: "Marshall Islands", flag: "🇲🇭" },
  MK: { name: "Macedonia, the former Yugoslav Republic of", flag: "🇲🇰" },
  ML: { name: "Mali", flag: "🇲🇱" },
  MM: { name: "Myanmar", flag: "🇲🇲" },
  MN: { name: "Mongolia", flag: "🇲🇳" },
  MO: { name: "Macao", flag: "🇲🇴" },
  MP: { name: "Northern Mariana Islands", flag: "🇲🇵" },
  MQ: { name: "Martinique", flag: "🇲🇶" },
  MR: { name: "Mauritania", flag: "🇲🇷" },
  MS: { name: "Montserrat", flag: "🇲🇸" },
  MT: { name: "Malta", flag: "🇲🇹" },
  MU: { name: "Mauritius", flag: "🇲🇺" },
  MV: { name: "Maldives", flag: "🇲🇻" },
  MW: { name: "Malawi", flag: "🇲🇼" },
  MX: { name: "Mexico", flag: "🇲🇽" },
  MY: { name: "Malaysia", flag: "🇲🇾" },
  MZ: { name: "Mozambique", flag: "🇲🇿" },
  NA: { name: "Namibia", flag: "🇳🇦" },
  NC: { name: "New Caledonia", flag: "🇳🇨" },
  NE: { name: "Niger", flag: "🇳🇪" },
  NF: { name: "Norfolk Island", flag: "🇳🇫" },
  NG: { name: "Nigeria", flag: "🇳🇬" },
  NI: { name: "Nicaragua", flag: "🇳🇮" },
  NL: { name: "Netherlands", flag: "🇳🇱" },
  NO: { name: "Norway", flag: "🇳🇴" },
  NP: { name: "Nepal", flag: "🇳🇵" },
  NR: { name: "Nauru", flag: "🇳🇷" },
  NU: { name: "Niue", flag: "🇳🇺" },
  NZ: { name: "New Zealand", flag: "🇳🇿" },
  OM: { name: "Oman", flag: "🇴🇲" },
  PA: { name: "Panama", flag: "🇵🇦" },
  PE: { name: "Peru", flag: "🇵🇪" },
  PF: { name: "French Polynesia", flag: "🇵🇫" },
  PG: { name: "Papua New Guinea", flag: "🇵🇬" },
  PH: { name: "Philippines", flag: "🇵🇭" },
  PK: { name: "Pakistan", flag: "🇵🇰" },
  PL: { name: "Poland", flag: "🇵🇱" },
  PM: { name: "Saint Pierre and Miquelon", flag: "🇵🇲" },
  PN: { name: "Pitcairn", flag: "🇵🇳" },
  PR: { name: "Puerto Rico", flag: "🇵🇷" },
  PS: { name: "Palestine, State of", flag: "🇵🇸" },
  PT: { name: "Portugal", flag: "🇵🇹" },
  PW: { name: "Palau", flag: "🇵🇼" },
  PY: { name: "Paraguay", flag: "🇵🇾" },
  QA: { name: "Qatar", flag: "🇶🇦" },
  RE: { name: "Réunion", flag: "🇷🇪" },
  RO: { name: "Romania", flag: "🇷🇴" },
  RS: { name: "Serbia", flag: "🇷🇸" },
  RU: { name: "Russian Federation", flag: "🇷🇺" },
  RW: { name: "Rwanda", flag: "🇷🇼" },
  SA: { name: "Saudi Arabia", flag: "🇸🇦" },
  SB: { name: "Solomon Islands", flag: "🇸🇧" },
  SC: { name: "Seychelles", flag: "🇸🇨" },
  SD: { name: "Sudan", flag: "🇸🇩" },
  SE: { name: "Sweden", flag: "🇸🇪" },
  SG: { name: "Singapore", flag: "🇸🇬" },
  SH: { name: "Saint Helena, Ascension and Tristan da Cunha", flag: "🇸🇭" },
  SI: { name: "Slovenia", flag: "🇸🇮" },
  SJ: { name: "Svalbard and Jan Mayen", flag: "🇸🇯" },
  SK: { name: "Slovakia", flag: "🇸🇰" },
  SL: { name: "Sierra Leone", flag: "🇸🇱" },
  SM: { name: "San Marino", flag: "🇸🇲" },
  SN: { name: "Senegal", flag: "🇸🇳" },
  SO: { name: "Somalia", flag: "🇸🇴" },
  SR: { name: "Suriname", flag: "🇸🇷" },
  SS: { name: "South Sudan", flag: "🇸🇸" },
  ST: { name: "Sao Tome and Principe", flag: "🇸🇹" },
  SV: { name: "El Salvador", flag: "🇸🇻" },
  SX: { name: "Sint Maarten (Dutch part)", flag: "🇸🇽" },
  SY: { name: "Syrian Arab Republic", flag: "🇸🇾" },
  SZ: { name: "Swaziland", flag: "🇸🇿" },
  TC: { name: "Turks and Caicos Islands", flag: "🇹🇨" },
  TD: { name: "Chad", flag: "🇹🇩" },
  TF: { name: "French Southern Territories", flag: "🇹🇫" },
  TG: { name: "Togo", flag: "🇹🇬" },
  TH: { name: "Thailand", flag: "🇹🇭" },
  TJ: { name: "Tajikistan", flag: "🇹🇯" },
  TK: { name: "Tokelau", flag: "🇹🇰" },
  TL: { name: "Timor-Leste", flag: "🇹🇱" },
  TM: { name: "Turkmenistan", flag: "🇹🇲" },
  TN: { name: "Tunisia", flag: "🇹🇳" },
  TO: { name: "Tonga", flag: "🇹🇴" },
  TR: { name: "Turkey", flag: "🇹🇷" },
  TT: { name: "Trinidad and Tobago", flag: "🇹🇹" },
  TV: { name: "Tuvalu", flag: "🇹🇻" },
  TW: { name: "Taiwan, Province of China", flag: "🇹🇼" },
  TZ: { name: "Tanzania, United Republic of", flag: "🇹🇿" },
  UA: { name: "Ukraine", flag: "🇺🇦" },
  UG: { name: "Uganda", flag: "🇺🇬" },
  UM: { name: "United States Minor Outlying Islands", flag: "🇺🇲" },
  US: { name: "United States", flag: "🇺🇸" },
  UY: { name: "Uruguay", flag: "🇺🇾" },
  UZ: { name: "Uzbekistan", flag: "🇺🇿" },
  VA: { name: "Holy See (Vatican City State)", flag: "🇻🇦" },
  VC: { name: "Saint Vincent and the Grenadines", flag: "🇻🇨" },
  VE: { name: "Venezuela, Bolivarian Republic of", flag: "🇻🇪" },
  VG: { name: "Virgin Islands, British", flag: "🇻🇬" },
  VI: { name: "Virgin Islands, U.S.", flag: "🇻🇮" },
  VN: { name: "Viet Nam", flag: "🇻🇳" },
  VU: { name: "Vanuatu", flag: "🇻🇺" },
  WF: { name: "Wallis and Futuna", flag: "🇼🇫" },
  WS: { name: "Samoa", flag: "🇼🇸" },
  YE: { name: "Yemen", flag: "🇾🇪" },
  YT: { name: "Mayotte", flag: "🇾🇹" },
  ZA: { name: "South Africa", flag: "🇿🇦" },
  ZM: { name: "Zambia", flag: "🇿🇲" },
  ZW: { name: "Zimbabwe", flag: "🇿🇼" },
};
function Pt(e, a) {
  if (!e) return;
  const n = St[e];
  return n
    ? { name: n.name, code: e, dialCode: a ? `+${a}` : "+??", flag: n.flag }
    : {
        name: `Country ${e}`,
        code: e,
        dialCode: a ? `+${a}` : "+??",
        flag: "🏳️",
      };
}
function kt(e) {
  return e.length === 1 && e.some((a) => a.toLowerCase().includes("phone"));
}
const _ = (e, a) =>
    Array.isArray(a) ? a.find((r) => r.field === e)?.message : void 0,
  Tt = (e, a, n) => {
    const r = [];
    return (
      e && r.push("email"),
      a && r.push("phone"),
      n && r.push("username"),
      r.join("-")
    );
  },
  fe = (e, a) => {
    let n = a?.usernameOrEmailPlaceholder || "Username or Email Address",
      r = "text",
      l = "username";
    if (e) {
      const s = e.includes("email"),
        o = e.includes("phone"),
        i = e.includes("username"),
        d = Tt(s, o, i),
        c = {
          email: {
            labelKey: "emailPlaceholder",
            labelFallback: a?.emailPlaceholder || "Email Address",
            type: "email",
            autoComplete: "email",
          },
          phone: {
            labelKey: "phonePlaceholder",
            labelFallback: a?.phonePlaceholder || "Phone Number",
            type: "tel",
            autoComplete: "tel",
          },
          username: {
            labelKey: "usernameOnlyPlaceholder",
            labelFallback: a?.usernameOnlyPlaceholder || "Username",
            autoComplete: "username",
          },
          "email-phone": {
            labelKey: "phoneOrEmailPlaceholder",
            labelFallback:
              a?.phoneOrEmailPlaceholder || "Phone Number or Email Address",
            autoComplete: "username",
          },
          "email-username": {
            labelKey: "usernameOrEmailPlaceholder",
            labelFallback:
              a?.usernameOrEmailPlaceholder || "Username or Email Address",
            autoComplete: "username",
          },
          "phone-username": {
            labelKey: "phoneOrUsernamePlaceholder",
            labelFallback:
              a?.phoneOrUsernamePlaceholder || "Phone Number or Username",
            autoComplete: "username",
          },
          "email-phone-username": {
            labelKey: "phoneOrUsernameOrEmailPlaceholder",
            labelFallback:
              a?.phoneOrUsernameOrEmailPlaceholder ||
              "Phone, Username, or Email",
            autoComplete: "username",
          },
        }[d];
      c &&
        ((n = c.labelFallback),
        c.type && (r = c.type),
        c.autoComplete && (l = c.autoComplete));
    }
    return (
      n.endsWith("*") || (n += "*"),
      { label: n, type: r, autoComplete: l }
    );
  };
function Lt() {
  const {
      handleLoginId: e,
      errors: a,
      resetPasswordLink: n,
      isForgotPasswordEnabled: r,
      loginIdInstance: l,
      texts: s,
      handlePickCountryCode: o,
    } = A(),
    i = q({ defaultValues: { identifier: "" } }),
    {
      formState: { isSubmitting: d },
    } = i,
    m = s?.buttonText || "Continue",
    c = s?.forgotPasswordText || "Forgot Password?",
    f = a?.filter((j) => !j.field || j.field === null) || [],
    g =
      _("identifier", a) || _("email", a) || _("phone", a) || _("username", a),
    x = l?.transaction?.allowedIdentifiers || [],
    { label: p, type: C, autoComplete: v } = fe(x, s),
    w = async (j) => {
      await e(j.identifier);
    },
    N = n && L(n),
    b = kt(x);
  return t.jsx(le, {
    ...i,
    children: t.jsxs("form", {
      onSubmit: i.handleSubmit(w),
      className: "space-y-2",
      children: [
        f.length > 0 &&
          t.jsx("div", {
            className: "space-y-3 mb-4",
            children: f.map((j, P) =>
              t.jsx(
                de,
                {
                  variant: "destructive",
                  children: t.jsx(me, { children: j.message }),
                },
                P
              )
            ),
          }),
        b &&
          t.jsx("div", {
            className: "mb-4",
            children: t.jsx(ue, {
              selectedCountry: Pt(
                l?.transaction?.countryCode,
                l?.transaction?.countryPrefix
              ),
              onClick: o,
              fullWidth: !0,
              placeholder: "Select Country",
            }),
          }),
        t.jsx(R, {
          control: i.control,
          name: "identifier",
          rules: {
            required: "This field is required",
            maxLength: {
              value: 100,
              message: "Maximum 100 characters allowed",
            },
          },
          render: ({ field: j, fieldState: P }) =>
            t.jsxs(B, {
              children: [
                t.jsx(I, {
                  ...j,
                  label: p,
                  type: C,
                  autoFocus: !0,
                  autoComplete: v,
                  error: !!P.error || !!g,
                }),
                t.jsx(E, { sdkError: g, hasFormError: !!P.error }),
              ],
            }),
        }),
        t.jsx("div", {
          className: "text-left mb-4",
          children: r && N && t.jsx(T, { href: N, children: c }),
        }),
        t.jsx(ce, {
          type: "submit",
          className: "w-full",
          disabled: d,
          children: m,
        }),
      ],
    }),
  });
}
function Et() {
  const { loginIdInstance: e, texts: a, isPasskeyEnabled: n } = A(),
    r = e?.transaction?.alternateConnections,
    l = n || (r && r.length > 0),
    s = a?.separatorText || "OR";
  ((document.title = a?.pageTitle || "Login"), Q(e));
  const o = M("--ul-theme-widget-social-buttons-layout"),
    i = (d) =>
      t.jsxs(t.Fragment, {
        children: [
          d === "bottom" && l && t.jsx(K, { text: s }),
          t.jsx(ft, { connections: r }),
          d === "top" && l && t.jsx(K, { text: s }),
        ],
      });
  return t.jsx("div", {
    style: { backgroundColor: "red" },
    children: t.jsx(G, {
      className: "theme-universal",
      children: t.jsxs(Y, {
        className: "w-full max-w-[400px] gap-0",
        children: [
          t.jsx(vt, {}),
          o === "top" && i("top"),
          t.jsx(Lt, {}),
          t.jsx(pt, {}),
          o === "bottom" && i("bottom"),
        ],
      }),
    }),
  });
}
const Ft = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Et },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  U = () => {
    const e = h.useMemo(() => new Ae(), []),
      { transaction: a, screen: n } = e,
      {
        isSignupEnabled: r,
        isForgotPasswordEnabled: l,
        isPasskeyEnabled: s,
      } = a,
      {
        signupLink: o,
        resetPasswordLink: i,
        texts: d,
        captchaImage: m,
        editIdentifierLink: c,
        links: f,
        data: g,
      } = n;
    return {
      loginPasswordInstance: e,
      handleLoginPassword: async (p, C, v) => {
        const w = { username: p?.trim() || "", password: C?.trim() || "" };
        (n.isCaptchaAvailable && v?.trim() && (w.captcha = v.trim()),
          k(`LoginPassword with options: ${JSON.stringify(w)}`, () =>
            e.login(w)
          ));
      },
      texts: d || {},
      isSignupEnabled: r === !0,
      isForgotPasswordEnabled: l === !0,
      isPasskeyEnabled: s === !0,
      isCaptchaAvailable: n.isCaptchaAvailable === !0,
      errors: e.getErrors(),
      links: f,
      editIdentifierLink: c,
      signupLink: o,
      resetPasswordLink: i,
      captchaImage: m,
      data: g,
    };
  };
function At() {
  const { isSignupEnabled: e, signupLink: a, texts: n } = U();
  if (!e) return null;
  const r = L(a),
    l = n?.footerText || "Don't have an account?",
    s = n?.footerLinkText || "Sign up";
  return t.jsxs("div", {
    className: "mt-4 text-left",
    children: [
      t.jsx("span", { className: "text-sm pr-1", children: l }),
      r && t.jsx(T, { href: r, children: s }),
    ],
  });
}
function It() {
  const { texts: e } = U(),
    a = e?.logoAltText || "Application Logo";
  return t.jsxs(t.Fragment, {
    children: [
      t.jsx(te, { altText: a }),
      t.jsx(ne, { children: e?.title || "Welcome" }),
      t.jsx(ae, {
        children:
          e?.description ||
          "Enter your password for My Company to continue to My App",
      }),
    ],
  });
}
const Mt = ({
  name: e,
  control: a,
  rules: n,
  label: r,
  imageUrl: l,
  imageAltText: s,
  sdkError: o,
  className: i,
}) => {
  const d = u("space-y-2", i),
    m = u(
      "flex justify-center p-8 rounded",
      "theme-universal:bg-input-bg",
      "theme-universal:border",
      "theme-universal:border-input-border",
      "theme-universal:rounded-input"
    );
  return l
    ? t.jsxs("div", {
        className: d,
        children: [
          t.jsx("div", {
            className: m,
            children: t.jsx("img", {
              src: l,
              alt: s,
              className: "object-contain",
            }),
          }),
          t.jsx(R, {
            control: a,
            name: e,
            rules: n,
            render: ({ field: c, fieldState: f }) =>
              t.jsxs(B, {
                children: [
                  t.jsx(I, {
                    ...c,
                    label: r,
                    type: "text",
                    autoComplete: "off",
                    error: !!f.error || !!o,
                  }),
                  t.jsx(E, {
                    className: "mt-1",
                    sdkError: o,
                    hasFormError: !!f.error,
                  }),
                ],
              }),
          }),
        ],
      })
    : null;
};
function zt({ delay: e = 0, ...a }) {
  return t.jsx(Oe, { "data-slot": "tooltip-provider", delay: e, ...a });
}
function Rt({ ...e }) {
  return t.jsx(zt, { children: t.jsx(Ie, { "data-slot": "tooltip", ...e }) });
}
function Bt({ ...e }) {
  return t.jsx(Me, { "data-slot": "tooltip-trigger", ...e });
}
function Ut({
  className: e,
  arrow: a,
  side: n,
  sideOffset: r = 8,
  children: l,
  ...s
}) {
  return t.jsx(ze, {
    children: t.jsx(Re, {
      side: n,
      sideOffset: r,
      children: t.jsxs(Be, {
        "data-slot": "tooltip-content",
        className: u(
          "bg-popover text-popover-foreground data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 shadow-bevel-lg z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-xl px-2 py-1 text-sm text-balance",
          e
        ),
        ...s,
        children: [
          l,
          a
            ? t.jsx(Ue, {
                className:
                  "bg-primary fill-primary z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]",
              })
            : null,
        ],
      }),
    }),
  });
}
const he = ({ onVisibilityToggle: e, buttonClassName: a, ...n }) => {
  const [r, l] = h.useState(!1),
    s = () => {
      const i = !r;
      (l(i), e?.(i));
    },
    o = t.jsxs(Rt, {
      children: [
        t.jsx(Bt, {
          type: "button",
          onClick: s,
          className: u(
            "cursor-pointer h-full w-full min-w-[44px] mr-[-5px]",
            "theme-universal:rounded-r-input theme-universal:rounded-l-none",
            "theme-universal:text-input-labels",
            "theme-universal:hover:text-input-text",
            "transition-colors",
            "theme-universal:focus:bg-base-focus/15 theme-universal:focus-visible:ring-0 theme-universal:focus-visible:ring-offset-0",
            "flex items-center justify-center",
            "bg-transparent border-none outline-none",
            a
          ),
          "aria-label": r ? "Hide password" : "Show password",
          children: r ? t.jsx(Ve, {}) : t.jsx(Ge, {}),
        }),
        t.jsx(Ut, {
          sideOffset: 0,
          className: "bg-black text-white -mb-2 ml-0.5",
          children: r ? "Hide password" : "Show password",
        }),
      ],
    });
  return t.jsx(I, { ...n, type: r ? "text" : "password", endAdornment: o });
};
he.displayName = "ULThemePasswordField";
function Ot() {
  const {
      links: e,
      data: a,
      handleLoginPassword: n,
      errors: r,
      isCaptchaAvailable: l,
      captchaImage: s,
      resetPasswordLink: o,
      isForgotPasswordEnabled: i,
      loginPasswordInstance: d,
      texts: m,
    } = U(),
    c = q({
      defaultValues: { username: a?.username || "", password: "", captcha: "" },
    }),
    {
      formState: { isSubmitting: f },
    } = c,
    g = m?.buttonText || "Continue",
    x = m?.passwordPlaceholder || "Password",
    p = m?.captchaCodePlaceholder?.concat("*") || "CAPTCHA*",
    C = "CAPTCHA challenge",
    v = m?.forgotPasswordText || "Forgot Password?",
    w = r?.filter((y) => !y.field || y.field === null) || [],
    N = _("username", r) || _("email", r),
    b = _("password", r),
    j = _("captcha", r),
    P = d?.transaction?.getAllowedIdentifiers() || [],
    O = d?.transaction?.getPasswordPolicy(),
    { label: ge, type: pe } = fe(P, m),
    xe = async (y) => {
      await n(y.username, y.password, y.captcha);
    },
    D = o && L(o),
    be = L(e?.edit_identifier) || "";
  return t.jsx(le, {
    ...c,
    children: t.jsxs("form", {
      onSubmit: c.handleSubmit(xe),
      className: "space-y-2",
      children: [
        w.length > 0 &&
          t.jsx("div", {
            className: "space-y-3 mb-4",
            children: w.map((y, S) =>
              t.jsx(de, { children: t.jsx(me, { children: y.message }) }, S)
            ),
          }),
        t.jsx(R, {
          control: c.control,
          name: "username",
          render: ({ field: y, fieldState: S }) =>
            t.jsxs(B, {
              children: [
                t.jsx(I, {
                  ...y,
                  label: ge,
                  type: pe,
                  value: a?.username || "",
                  error: !!S.error || !!N,
                  readOnly: !0,
                  endAdornment: t.jsx(T, {
                    href: be,
                    children: m?.editEmailText || "Edit",
                  }),
                  className: "pr-[16px]",
                }),
                t.jsx(E, { sdkError: N, hasFormError: !!S.error }),
              ],
            }),
        }),
        t.jsx(R, {
          control: c.control,
          name: "password",
          rules: {
            required: "Password is required",
            maxLength: {
              value: 200,
              message: "Maximum 200 characters allowed",
            },
            minLength: O?.minLength
              ? {
                  value: O.minLength,
                  message: `Password must be at least ${O.minLength} characters`,
                }
              : void 0,
          },
          render: ({ field: y, fieldState: S }) =>
            t.jsxs(B, {
              children: [
                t.jsx(he, {
                  ...y,
                  label: x,
                  autoFocus: !0,
                  autoComplete: "current-password",
                  error: !!S.error || !!b,
                }),
                t.jsx(E, { sdkError: b, hasFormError: !!S.error }),
              ],
            }),
        }),
        l &&
          (b || j || w.length > 0) &&
          t.jsx(Mt, {
            control: c.control,
            name: "captcha",
            label: p,
            imageUrl: s || "",
            imageAltText: C,
            className: "mb-4",
            sdkError: j,
            rules: {
              required: "Please complete the CAPTCHA",
              maxLength: { value: 15, message: "CAPTCHA too long" },
            },
          }),
        t.jsx("div", {
          className: "text-left mb-4",
          children: i && D && t.jsx(T, { href: D, children: v }),
        }),
        t.jsx(ce, {
          type: "submit",
          className: "w-full",
          disabled: f,
          children: g,
        }),
      ],
    }),
  });
}
function Vt() {
  const { loginPasswordInstance: e } = U();
  return (
    Q(e),
    t.jsx(G, {
      className: "theme-universal",
      children: t.jsxs(Y, {
        className: "w-full max-w-[400px] gap-0",
        children: [t.jsx(It, {}), t.jsx(Ot, {}), t.jsx(At, {})],
      }),
    })
  );
}
const Gt = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Vt },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Dt = "modulepreload",
  Kt = function (e) {
    return "/" + e;
  },
  Z = {},
  V = function (a, n, r) {
    let l = Promise.resolve();
    if (n && n.length > 0) {
      let d = function (m) {
        return Promise.all(
          m.map((c) =>
            Promise.resolve(c).then(
              (f) => ({ status: "fulfilled", value: f }),
              (f) => ({ status: "rejected", reason: f })
            )
          )
        );
      };
      document.getElementsByTagName("link");
      const o = document.querySelector("meta[property=csp-nonce]"),
        i = o?.nonce || o?.getAttribute("nonce");
      l = d(
        n.map((m) => {
          if (((m = Kt(m)), m in Z)) return;
          Z[m] = !0;
          const c = m.endsWith(".css"),
            f = c ? '[rel="stylesheet"]' : "";
          if (document.querySelector(`link[href="${m}"]${f}`)) return;
          const g = document.createElement("link");
          if (
            ((g.rel = c ? "stylesheet" : Dt),
            c || (g.as = "script"),
            (g.crossOrigin = ""),
            (g.href = m),
            i && g.setAttribute("nonce", i),
            document.head.appendChild(g),
            c)
          )
            return new Promise((x, p) => {
              (g.addEventListener("load", x),
                g.addEventListener("error", () =>
                  p(new Error(`Unable to preload CSS for ${m}`))
                ));
            });
        })
      );
    }
    function s(o) {
      const i = new Event("vite:preloadError", { cancelable: !0 });
      if (((i.payload = o), window.dispatchEvent(i), !i.defaultPrevented))
        throw o;
    }
    return l.then((o) => {
      for (const i of o || []) i.status === "rejected" && s(i.reason);
      return a().catch(s);
    });
  };
async function $t() {}
const Ht = {
    "login-id": h.lazy(() => V(() => Promise.resolve().then(() => Ft), void 0)),
    login: h.lazy(() => V(() => Promise.resolve().then(() => He), void 0)),
    "login-password": h.lazy(() =>
      V(() => Promise.resolve().then(() => Gt), void 0)
    ),
  },
  Wt = (e) => Ht[e] || null,
  Zt = () => {
    const [e, a] = h.useState("login-id");
    h.useEffect(() => {
      const r = De();
      a(r || "login-id");
    }, []);
    const n = Wt(e);
    return t.jsx(h.Suspense, {
      fallback: t.jsx("div", { children: "Loading..." }),
      children: n
        ? t.jsx(n, {})
        : t.jsxs("div", { children: ['Screen "', e, '" not implemented yet'] }),
    });
  };
async function Jt() {
  await $t();
  const e = document.createElement("div");
  ((e.id = "root"),
    document.body.appendChild(e),
    Ke.createRoot(document.getElementById("root")).render(
      t.jsx(h.StrictMode, { children: t.jsx(Zt, {}) })
    ));
}
Jt();
export { Et as L, Vt as a };
//# sourceMappingURL=index.htq3QW6u.js.map

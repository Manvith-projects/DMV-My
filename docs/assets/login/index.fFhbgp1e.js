import {
  t as Te,
  c as ke,
  j as a,
  a as U,
  u as Ee,
  r as h,
  b as Le,
  A as Ne,
  d as Ae,
  F as pe,
  e as Fe,
  f as Ie,
  g as Me,
  C as Re,
  h as ze,
  i as Ve,
  k as Oe,
  T as Be,
  l as Ue,
  m as He,
  n as De,
  o as Ge,
  p as Ke,
  q as $e,
  E as We,
  s as qe,
  v as J,
  w as Ze,
  x as Je,
  W as Ye,
  H as Qe,
  R as Xe,
  y as et,
  z as tt,
  B as at,
  D as nt,
  G as rt,
} from "../shared/vendor.BZxuTLQB.js";
function c(...e) {
  return Te(ke(e));
}
function st({ className: e, ...t }) {
  return a.jsx("div", {
    "data-slot": "card",
    className: c(
      "bg-card text-card-foreground shadow-bevel-2xl flex flex-col gap-6 rounded-4xl py-6",
      e
    ),
    ...t,
  });
}
const Y = ({ children: e, className: t, ...n }) => {
    const r = c(
      "px-10",
      "py-10",
      "theme-universal:bg-widget-bg",
      "theme-universal:border-(--color-widget-border)",
      "theme-universal:rounded-widget",
      "theme-universal:shadow-widget",
      "theme-universal:border-(length:--border-widget)",
      t
    );
    return a.jsx(st, { className: r, ...n, children: e });
  },
  Q = ({ children: e, className: t, ...n }) =>
    a.jsx("div", {
      className: c(
        "flex px-10 py-20 justify-page-layout bg-background-page bg-(image:--ul-theme-page-bg-background-image-url)",
        t
      ),
      ...n,
      children: e,
    }),
  G = ({ text: e, className: t }) => {
    const n = "relative flex items-center my-4",
      r = c("flex-grow border-t", "theme-universal:border-input-border"),
      s = c(
        "flex-shrink px-2",
        "theme-universal:text-body-text",
        "theme-universal:text-(length:--ul-theme-font-body-text-size)",
        "theme-universal:font-body"
      );
    return e
      ? a.jsxs("div", {
          className: c(n, t),
          children: [
            a.jsx("div", { className: r }),
            a.jsx("span", { className: s, children: e }),
            a.jsx("div", { className: r }),
          ],
        })
      : a.jsx("hr", { className: c("my-4", r, t) });
  },
  B = (e) =>
    getComputedStyle(document.documentElement)
      .getPropertyValue(e)
      .trim()
      .replace(/^"(.*)"$/, "$1");
function ot(e) {
  const t = {};
  return (
    e.primary_button &&
      (t["--ul-theme-color-primary-button"] = e.primary_button),
    e.primary_button_label &&
      (t["--ul-theme-color-primary-button-label"] = e.primary_button_label),
    e.secondary_button_border &&
      (t["--ul-theme-color-secondary-button-border"] =
        e.secondary_button_border),
    e.secondary_button_label &&
      (t["--ul-theme-color-secondary-button-label"] = e.secondary_button_label),
    e.base_focus_color &&
      (t["--ul-theme-color-base-focus-color"] = e.base_focus_color),
    e.base_hover_color &&
      (t["--ul-theme-color-base-hover-color"] = e.base_hover_color),
    e.links_focused_components &&
      (t["--ul-theme-color-links-focused-components"] =
        e.links_focused_components),
    e.header && (t["--ul-theme-color-header"] = e.header),
    e.body_text && (t["--ul-theme-color-body-text"] = e.body_text),
    e.widget_background &&
      (t["--ul-theme-color-widget-background"] = e.widget_background),
    e.widget_border && (t["--ul-theme-color-widget-border"] = e.widget_border),
    e.input_labels_placeholders &&
      (t["--ul-theme-color-input-labels-placeholders"] =
        e.input_labels_placeholders),
    e.input_filled_text &&
      (t["--ul-theme-color-input-filled-text"] = e.input_filled_text),
    e.input_border && (t["--ul-theme-color-input-border"] = e.input_border),
    e.input_background &&
      (t["--ul-theme-color-input-background"] = e.input_background),
    e.icons && (t["--ul-theme-color-icons"] = e.icons),
    e.error && (t["--ul-theme-color-error"] = e.error),
    e.success && (t["--ul-theme-color-success"] = e.success),
    e.captcha_widget_theme &&
      (t["--ul-theme-color-captcha-widget-theme"] = e.captcha_widget_theme),
    t
  );
}
function ue(e, t, n = 10) {
  switch (e) {
    case "pill":
      return 9999;
    case "sharp":
      return 0;
    case "rounded":
    default:
      return t || n;
  }
}
function lt(e) {
  const t = {},
    n = e.buttons_style
      ? ue(e.buttons_style, e.button_border_radius)
      : e.button_border_radius,
    r = e.inputs_style
      ? ue(e.inputs_style, e.input_border_radius)
      : e.input_border_radius;
  return (
    n !== void 0 && (t["--ul-theme-border-button-border-radius"] = `${n}px`),
    r !== void 0 && (t["--ul-theme-border-input-border-radius"] = `${r}px`),
    e.widget_corner_radius &&
      (t["--ul-theme-border-widget-corner-radius"] =
        `${e.widget_corner_radius}px`),
    e.button_border_weight !== void 0 &&
      (t["--ul-theme-border-button-border-weight"] =
        `${e.button_border_weight}px`),
    e.input_border_weight !== void 0 &&
      (t["--ul-theme-border-input-border-weight"] =
        `${e.input_border_weight}px`),
    e.widget_border_weight !== void 0 &&
      (t["--ul-theme-border-widget-border-weight"] =
        `${e.widget_border_weight}px`),
    e.buttons_style && (t["--ul-theme-border-buttons-style"] = e.buttons_style),
    e.inputs_style && (t["--ul-theme-border-inputs-style"] = e.inputs_style),
    e.show_widget_shadow !== void 0 &&
      (t["--ul-theme-border-show-widget-shadow"] = e.show_widget_shadow
        ? "0px 12px 40px 0px rgba(0, 0, 0, 0.12)"
        : "none"),
    t
  );
}
function it(e) {
  const t = {};
  e.reference_text_size &&
    (t["--ul-theme-font-reference-text-size"] = `${e.reference_text_size}px`);
  const n = (r, s) => {
    if (r?.size) {
      const o = r.size;
      if (e.reference_text_size) {
        const i = (e.reference_text_size * o) / 100;
        t[`--ul-theme-font-${s}-size`] = `${i}px`;
      } else {
        const l = o / 100;
        t[`--ul-theme-font-${s}-size`] = `${l}rem`;
      }
    }
    r?.bold !== void 0 &&
      (t[`--ul-theme-font-${s}-weight`] = r.bold ? "700" : "400");
  };
  return (
    n(e.title, "title"),
    n(e.subtitle, "subtitle"),
    n(e.body_text, "body-text"),
    n(e.buttons_text, "buttons-text"),
    n(e.input_labels, "input-labels"),
    n(e.links, "links"),
    e.links_style && (t["--ul-theme-font-links-style"] = e.links_style),
    t
  );
}
function dt(e) {
  const t = {};
  if (
    (e.background_color &&
      (t["--ul-theme-page-bg-background-color"] = e.background_color),
    e.background_image_url &&
      (t["--ul-theme-page-bg-background-image-url"] =
        e.background_image_url === null || e.background_image_url === ""
          ? "none"
          : `url("${e.background_image_url}")`),
    e.page_layout)
  ) {
    const n = { center: "center", left: "flex-start", right: "flex-end" };
    t["--ul-theme-page-bg-page-layout"] = n[e.page_layout] || "center";
  }
  return t;
}
function ut(e) {
  const t = {};
  if (
    (e.logo_url && (t["--ul-theme-widget-logo-url"] = `"${e.logo_url}"`),
    e.logo_height &&
      (t["--ul-theme-widget-logo-height"] = `${e.logo_height}px`),
    e.logo_position)
  ) {
    const n = {
      center: "center",
      left: "flex-start",
      right: "flex-end",
      none: "none",
    };
    t["--ul-theme-widget-logo-position"] = n[e.logo_position] || "center";
  }
  if (e.header_text_alignment) {
    t["--ul-theme-widget-header-text-alignment"] = e.header_text_alignment;
    const n = { center: "center", left: "left", right: "right" };
    t["--text-align-header"] = n[e.header_text_alignment] || "center";
  }
  return (
    e.social_buttons_layout &&
      (t["--ul-theme-widget-social-buttons-layout"] = e.social_buttons_layout),
    t
  );
}
let K = {};
const ct = {
  "colors.primary": "--ul-theme-color-primary-button",
  "colors.page_background": "--ul-theme-page-bg-background-color",
  logoUrl: "--ul-theme-widget-logo-url",
};
function X(e) {
  if (!e?.branding) return;
  yt();
  const t = mt(e);
  pt(t);
}
function mt(e) {
  const t = e.branding?.themes?.default || {},
    n = ce(e.branding?.settings),
    r = ht(t),
    s = ce(e.organization?.branding);
  return { ...n, ...r, ...s };
}
function ht(e) {
  return {
    ...ot(e.colors || {}),
    ...lt(e.borders || {}),
    ...it(e.fonts || {}),
    ...dt(e.pageBackground || e.page_background || {}),
    ...ut(e.widget || {}),
  };
}
function ce(e) {
  const t = {};
  return (e && ft(e, ct, t), t);
}
function ft(e, t, n) {
  Object.entries(t).forEach(([r, s]) => {
    const o = gt(e, r);
    o &&
      typeof o == "string" &&
      (s === "--ul-theme-widget-logo-url"
        ? (n[s] = `"${o}"`)
        : s === "--ul-theme-widget-logo-height"
          ? (n[s] = typeof o == "number" ? `${o}px` : o)
          : (n[s] = o));
  });
}
function gt(e, t) {
  return t.split(".").reduce((n, r) => n?.[r], e);
}
function pt(e) {
  const t = bt(e);
  Object.keys(t).length !== 0 && (xt(t), vt(t));
}
function bt(e) {
  const t = {};
  return (
    Object.entries(e).forEach(([n, r]) => {
      K[n] !== r && (t[n] = r);
    }),
    t
  );
}
function xt(e) {
  const t = document.documentElement.style;
  Object.entries(e).forEach(([n, r]) => {
    t.setProperty(n, r);
  });
}
function vt(e) {
  K = { ...K, ...e };
}
function yt() {
  K = {};
}
const ee = (e) =>
    e === "auto"
      ? window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
      : e || "light",
  wt = U(
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
function be({
  className: e,
  variant: t,
  size: n,
  render: r = a.jsx("button", {}),
  ...s
}) {
  const o = { className: c(wt({ variant: t, size: n }), e) };
  return Ee({ render: r, props: { ...o, ...s } });
}
const Z = ({
    onClick: e,
    variant: t = "outline",
    size: n = "default",
    iconComponent: r,
    displayName: s,
    buttonText: o,
    disabled: l = !1,
    className: i,
    ...u
  }) => {
    const d = `social-provider-button-${s.toLowerCase().replace(/\s+/g, "-")}`,
      m =
        "flex items-center justify-start w-full max-w-[320px] h-[52px] py-[14px] px-[16px] gap-x-4",
      g = "bg-white border-gray-mid text-text-default cursor-pointer",
      f =
        "bg-gray-mid/10 border-gray-mid/50 text-text-secondary cursor-not-allowed",
      b = {
        outline: c(
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
      p = c(t && b[t]);
    return a.jsxs(be, {
      variant: t,
      size: n,
      className: c(m, l ? f : g, p, i),
      "data-testid": d,
      disabled: l,
      onClick: e,
      ...u,
      children: [
        r &&
          a.jsx("span", {
            className: "w-5 h-5 flex items-center justify-center",
            children: r,
          }),
        a.jsx("span", {
          className:
            "overflow-hidden whitespace-nowrap text-ellipsis text-base",
          children: o,
        }),
      ],
    });
  },
  Ct = (e) =>
    a.jsxs("svg", {
      width: "20",
      height: "20",
      viewBox: "0 0 20 20",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ...e,
      children: [
        a.jsx("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M5.2978e-06 2.35529C3.89779e-06 1.73149 0.247459 1.13317 0.688082 0.69161C1.12871 0.250051 1.7265 0.00132161 2.3503 0H10.5888C11.2126 0.00132161 11.8104 0.250051 12.251 0.69161C12.6917 1.13317 12.9391 1.73149 12.9391 2.35529V4.72555C12.9391 5.35021 13.1873 5.94929 13.629 6.39099C14.0707 6.83269 14.6698 7.08084 15.2944 7.08084H17.6447C18.2685 7.08084 18.8668 7.32829 19.3084 7.76892C19.7499 8.20954 19.9987 8.80734 20 9.43114V17.6497C19.9987 18.2735 19.7499 18.8713 19.3084 19.3119C18.8668 19.7525 18.2685 20 17.6447 20H9.41118C9.10211 20.0007 8.79597 19.9403 8.51024 19.8225C8.22451 19.7047 7.96482 19.5317 7.74605 19.3134C7.52727 19.0951 7.3537 18.8358 7.23528 18.5503C7.11685 18.2648 7.0559 17.9588 7.0559 17.6497V15.2944C7.0559 14.6711 6.80827 14.0733 6.3675 13.6325C5.92674 13.1917 5.32893 12.9441 4.70559 12.9441H2.3503C2.04123 12.9441 1.7352 12.8832 1.44973 12.7647C1.16425 12.6463 0.904931 12.4727 0.68662 12.254C0.46831 12.0352 0.295296 11.7755 0.177476 11.4898C0.0596565 11.204 -0.000650893 10.8979 5.2978e-06 10.5888V2.35529ZM8.38323 6.91617C7.99054 6.92271 7.61616 7.08332 7.34079 7.36335C7.06542 7.64339 6.91113 8.02043 6.91119 8.41317V12.1357C6.91113 12.5285 7.06542 12.9055 7.34079 13.1855C7.61616 13.4656 7.99054 13.6262 8.38323 13.6327H12.1058C12.5028 13.6327 12.8836 13.475 13.1643 13.1943C13.4451 12.9135 13.6028 12.5328 13.6028 12.1357V8.41317C13.6028 8.01614 13.4451 7.63537 13.1643 7.35463C12.8836 7.07388 12.5028 6.91617 12.1058 6.91617H8.38323Z",
          fill: "url(#paint0_linear_default_icon)",
        }),
        a.jsx("defs", {
          children: a.jsxs("linearGradient", {
            id: "paint0_linear_default_icon",
            x1: "-0.509765",
            y1: "0.499999",
            x2: "22.9902",
            y2: "21",
            gradientUnits: "userSpaceOnUse",
            children: [
              a.jsx("stop", { stopColor: "#635DFF" }),
              a.jsx("stop", { offset: "1", stopColor: "#3885FF" }),
            ],
          }),
        }),
      ],
    }),
  xe = () => a.jsx(Ct, {}),
  jt = (e) =>
    "options" in e && e.options?.displayName
      ? e.options.displayName
      : e.name
        ? e.name
            .split(/[-_]/)
            .map((t) => t.charAt(0).toUpperCase() + t.slice(1).toLowerCase())
            .join(" ")
        : e.strategy
          ? e.strategy.charAt(0).toUpperCase() + e.strategy.slice(1)
          : "Login Provider",
  ve = (e) => {
    const t = jt(e),
      n = xe();
    return { displayName: t, iconComponent: n };
  },
  A = (e, t) => t(),
  H = () => {
    const e = h.useMemo(() => new Le(), []),
      { transaction: t, screen: n } = e,
      { isSignupEnabled: r, isForgotPasswordEnabled: s, passwordPolicy: o } = t,
      { signupLink: l, resetPasswordLink: i, texts: u, captchaImage: d } = n;
    return {
      loginInstance: e,
      handleLogin: async (f, b, p) => {
        const x = { username: f?.trim() || "", password: b || "" };
        (n.isCaptchaAvailable && p?.trim() && (x.captcha = p.trim()),
          A(`Login with options: ${JSON.stringify(x)}`, () => e.login(x)));
      },
      handleFederatedLogin: async (f) => {
        A(`Federated login with connection: ${f}`, () =>
          e.federatedLogin({ connection: f })
        );
      },
      texts: u || {},
      isSignupEnabled: r === !0,
      isForgotPasswordEnabled: s === !0,
      isCaptchaAvailable: n.isCaptchaAvailable === !0,
      errors: e.getErrors(),
      captchaImage: d,
      signupLink: l,
      resetPasswordLink: i,
      allowedIdentifiers: t.allowedIdentifiers || [],
      passwordPolicy: o,
    };
  },
  St = ({ connections: e }) => {
    const { handleFederatedLogin: t } = H();
    return a.jsx(a.Fragment, {
      children: a.jsx("div", {
        className: "space-y-3 mt-2",
        children: e?.map((n) => {
          const { displayName: r, iconComponent: s } = ve(n),
            o = `Continue with ${r}`;
          return a.jsx(
            Z,
            {
              displayName: r,
              buttonText: o,
              iconComponent: s,
              onClick: () => t(n.name),
            },
            n.name
          );
        }),
      }),
    });
  },
  _t = U(
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
function Pt({
  className: e,
  children: t,
  variant: n,
  underline: r,
  ref: s,
  ...o
}) {
  return a.jsx("a", {
    ref: s,
    className: c(_t({ variant: n, underline: r }), e),
    ...o,
    children: t,
  });
}
const F = ({ children: e, className: t, disabled: n = !1, ref: r, ...s }) => {
    const o =
        "text-link-focus text-(length:--ul-theme-font-links-size) font-(weight:--ul-theme-font-links-weight) focus:rounded-(--ul-theme-border-links-border-radius) hover:text-link-focus/80",
      l = n ? "pointer-events-none text-muted cursor-not-allowed" : "",
      i =
        "theme-universal:focus:outline-none theme-universal:focus:ring-4 theme-universal:focus:ring-base-focus/15 theme-universal:focus:bg-base-focus/15",
      u = B("--ul-theme-font-links-style") === "normal" ? "none" : "always";
    return a.jsx(Pt, {
      ref: r,
      className: c(o, l, i, t),
      underline: u,
      "aria-disabled": n,
      ...s,
      children: e,
    });
  },
  I = (e) => {
    if (typeof window > "u" || !e) return e;
    const t = window.location.origin;
    try {
      if (e.startsWith("http://") || e.startsWith("https://")) {
        const r = new URL(e);
        return t + r.pathname + r.search + r.hash;
      }
      if (e.startsWith("/")) {
        const r = new URL(e, t);
        return t + r.pathname + r.search + r.hash;
      }
      const n = new URL(e, window.location.href);
      return t + n.pathname + n.search + n.hash;
    } catch (n) {
      return (
        console.error("Failed to rebase URL:", n, { originalLink: e }),
        e
      );
    }
  };
function Tt() {
  const { texts: e, signupLink: t, isSignupEnabled: n } = H(),
    r = e?.footerText || e?.signupActionText || "Don't have an account?",
    s = e?.footerLinkText || e?.signupActionLinkText || "Sign up",
    o = t && I(t);
  return a.jsx("div", {
    className: "mt-4 text-left",
    children:
      n &&
      o &&
      a.jsxs("div", {
        className: "text-sm",
        children: [
          a.jsxs("span", { className: "text-body-text", children: [r, " "] }),
          a.jsx(F, { href: o, children: s }),
        ],
      }),
  });
}
function kt({ className: e, ...t }) {
  return a.jsx(Ne, {
    "data-slot": "avatar",
    className: c(
      "relative flex size-8 shrink-0 overflow-hidden rounded-full",
      e
    ),
    ...t,
  });
}
function Et({ className: e, ...t }) {
  return a.jsx(Ae, {
    "data-slot": "avatar-image",
    className: c("aspect-square size-full", e),
    ...t,
  });
}
const te = ({ imageUrl: e, altText: t, className: n, ...r }) => {
    const s = B("--ul-theme-widget-logo-url"),
      o = B("--ul-theme-widget-logo-position") === "none",
      l = "flex flex-wrap justify-widget-logo",
      i = "h-(--height-widget-logo)",
      u = s || e;
    return (
      !o &&
      a.jsx("div", {
        className: c(l, n),
        children: a.jsx(kt, {
          className: "size-auto rounded-none",
          children: a.jsx(Et, {
            src: u,
            alt: t,
            className: c(i),
            loading: "eager",
            decoding: "async",
            fetchPriority: "high",
            ...r,
          }),
        }),
      })
    );
  },
  ae = ({ children: e, className: t, ...n }) =>
    a.jsx("p", {
      className: c(
        "mb-4 text-body-text justify-text-header text-(length:--ul-theme-font-subtitle-size) font-subtitle",
        t
      ),
      ...n,
      children: e,
    }),
  ne = ({ children: e, className: t, ...n }) =>
    a.jsx("h1", {
      className: c(
        "mt-6 mb-4 text-header justify-text-header text-(length:--ul-theme-font-title-size) font-title",
        t
      ),
      ...n,
      children: e,
    });
function Lt() {
  const { texts: e } = H(),
    t = e?.logoAltText || "Application Logo";
  return a.jsxs(a.Fragment, {
    children: [
      a.jsx(te, { altText: t }),
      a.jsx(ne, { children: e?.title || "Welcome" }),
      a.jsx(ae, {
        children:
          e?.description ||
          "Log in to dev-tenant to continue to my acul react.",
      }),
    ],
  });
}
const Nt = U(
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
  ye = h.forwardRef(
    (
      {
        className: e,
        variant: t,
        size: n,
        error: r,
        helperText: s,
        label: o,
        startAdornment: l,
        endAdornment: i,
        ...u
      },
      d
    ) => {
      const [m, g] = h.useState(!1),
        [f, b] = h.useState(!!(u.value || u.defaultValue)),
        p = u.disabled,
        x = (w) => {
          (g(!0), u.onFocus?.(w));
        },
        y = (w) => {
          (g(!1), b(!!w.target.value), u.onBlur?.(w));
        },
        v = (w) => {
          (b(!!w.target.value), u.onChange?.(w));
        },
        j = m || f;
      return a.jsxs("div", {
        children: [
          a.jsxs(pe, {
            className: c(
              Nt({ variant: r ? "error" : t, size: n }),
              "group relative items-end gap-0.5",
              p &&
                "bg-input-muted text-input-foreground cursor-not-allowed opacity-50",
              p && t === "default" && "bg-input-muted",
              l && "pl-[5px]",
              i && "pr-[5px]",
              e
            ),
            children: [
              a.jsx(Fe, {
                htmlFor: u.id,
                className: c(
                  "pointer-events-none absolute top-1/2 left-4 z-[10] -translate-y-1/2 text-sm transition-all duration-150 ease-in-out origin-left",
                  l && "left-0",
                  j &&
                    "scale-80 -translate-y-[1.18rem] top-2 z-10 bg-input px-1",
                  r ? "text-destructive-foreground" : "text-muted-foreground",
                  m && !r && "text-primary"
                ),
                children: o,
              }),
              l &&
                a.jsx("div", {
                  className:
                    "flex h-full items-center justify-center [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
                  children: l,
                }),
              a.jsx("div", {
                className: "relative flex-1",
                children: a.jsx(Ie, {
                  id: u.id,
                  className: c(
                    "h-14 w-full flex-1 rounded-2xl bg-transparent px-3 py-4 outline-none file:border-0 file:bg-transparent file:text-sm file:font-medium",
                    "autofill:bg-transparent",
                    "autofill:[-webkit-text-fill-color:inherit]",
                    "autofill:[transition:background-color_9999s_ease-in-out_0s]",
                    p &&
                      "bg-input-muted text-input-foreground cursor-not-allowed opacity-50",
                    l ? "rounded-l-none pl-0" : "pl-3",
                    i ? "rounded-r-none pr-0" : "pr-3",
                    n === "sm" && "h-12 py-3 text-sm",
                    n === "lg" && "h-16 py-5 text-base"
                  ),
                  ...u,
                  ref: d,
                  onFocus: x,
                  onBlur: y,
                  onChange: v,
                }),
              }),
              i &&
                a.jsx("div", {
                  className:
                    "flex h-full items-center justify-center [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
                  children: i,
                }),
            ],
          }),
          s &&
            a.jsx("p", {
              className: c(
                "mt-1.5 text-xs",
                r ? "text-destructive-foreground" : "text-muted-foreground"
              ),
              children: s,
            }),
        ],
      });
    }
  );
ye.displayName = "FloatingLabelField";
const re = Me,
  we = h.createContext({}),
  M = ({ ...e }) =>
    a.jsx(we.Provider, {
      value: { name: e.name },
      children: a.jsx(Re, { ...e }),
    }),
  Ce = () => {
    const e = h.useContext(we),
      t = h.useContext(je),
      { getFieldState: n } = ze(),
      r = Ve({ name: e.name }),
      s = n(e.name, r);
    if (!e) throw new Error("useFormField should be used within <FormField>");
    const { id: o } = t;
    return {
      id: o,
      name: e.name,
      formItemId: `${o}-form-item`,
      formDescriptionId: `${o}-form-item-description`,
      formMessageId: `${o}-form-item-message`,
      ...s,
    };
  },
  je = h.createContext({});
function R({ className: e, ...t }) {
  const n = h.useId();
  return a.jsx(je.Provider, {
    value: { id: n },
    children: a.jsx(pe, {
      "data-slot": "form-item",
      className: c("grid", e),
      ...t,
    }),
  });
}
function At({ className: e, ...t }) {
  const { error: n, formMessageId: r } = Ce(),
    s = n ? String(n?.message ?? "") : t.children;
  return s
    ? a.jsx("p", {
        "data-slot": "form-message",
        id: r,
        className: c("text-destructive text-sm", e),
        ...t,
        children: s,
      })
    : null;
}
const Ft = U(
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
function z({
  className: e,
  variant: t = "default",
  size: n = "default",
  wrapperClassName: r,
  error: s,
  ...o
}) {
  const { formItemId: l } = Ce(),
    i = s ? "error" : t,
    u = Ft({ themeState: s ? "error" : "default" });
  return a.jsx("div", {
    className: c("w-full", r),
    children: a.jsx(ye, {
      id: l,
      className: c(e, u),
      variant: i,
      size: n,
      error: s,
      ...o,
    }),
  });
}
z.displayName = "ULThemeFloatingLabelField";
const E = ({ sdkError: e, hasFormError: t, showIcon: n = !0, className: r }) =>
  !e && !t
    ? null
    : a.jsxs("div", {
        className: c(
          "flex mb-2 items-center text-sm font-medium theme-universal:text-error",
          r
        ),
        role: "alert",
        "aria-live": "polite",
        children: [
          n && a.jsx(Oe, { className: "h-4 w-4 mr-1 flex-shrink-0" }),
          e
            ? a.jsx("p", {
                className:
                  "text-destructive text-sm theme-universal:text-error",
                children: e,
              })
            : a.jsx(At, { className: "theme-universal:text-error" }),
        ],
      });
E.displayName = "ULThemeFormMessage";
const Se = ({
    name: e,
    control: t,
    rules: n,
    label: r,
    imageUrl: s,
    imageAltText: o,
    sdkError: l,
    className: i,
  }) => {
    const u = c("space-y-2", i),
      d = c(
        "flex justify-center p-8 rounded",
        "theme-universal:bg-input-bg",
        "theme-universal:border",
        "theme-universal:border-input-border",
        "theme-universal:rounded-input"
      );
    return s
      ? a.jsxs("div", {
          className: u,
          children: [
            a.jsx("div", {
              className: d,
              children: a.jsx("img", {
                src: s,
                alt: o,
                className: "object-contain",
              }),
            }),
            a.jsx(M, {
              control: t,
              name: e,
              rules: n,
              render: ({ field: m, fieldState: g }) =>
                a.jsxs(R, {
                  children: [
                    a.jsx(z, {
                      ...m,
                      label: r,
                      type: "text",
                      autoComplete: "off",
                      error: !!g.error || !!l,
                    }),
                    a.jsx(E, {
                      className: "mt-1",
                      sdkError: l,
                      hasFormError: !!g.error,
                    }),
                  ],
                }),
            }),
          ],
        })
      : null;
  },
  It = U(
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
function Mt({ className: e, variant: t, ...n }) {
  return a.jsx("div", {
    "data-slot": "alert",
    role: "alert",
    className: c(It({ variant: t }), e),
    ...n,
  });
}
function Rt({ className: e, ...t }) {
  return a.jsx("div", {
    "data-slot": "alert-title",
    className: c(
      "col-start-2 line-clamp-1 flex h-auto min-h-4 leading-4.5 font-medium tracking-tight",
      e
    ),
    ...t,
  });
}
function se({ variant: e = "destructive", className: t, ...n }) {
  const r = {
      destructive: c(
        "p-4",
        "theme-universal:bg-error",
        "theme-universal:text-(--ul-theme-color-primary-button-label)",
        "theme-universal:rounded-button",
        "theme-universal:font-body",
        "theme-universal:text-(length:--ul-theme-font-body-text-size)"
      ),
    },
    s = c(e && r[e]);
  return a.jsx(Mt, { variant: e, className: c(t, s), ...n });
}
function oe({ className: e, ...t }) {
  const n = c(
    "theme-universal:text-(--ul-theme-color-primary-button-label)",
    "theme-universal:font-body",
    "theme-universal:text-(length:--ul-theme-font-body-text-size)"
  );
  return a.jsx(Rt, { className: c(e, n), ...t });
}
function zt({ delay: e = 0, ...t }) {
  return a.jsx($e, { "data-slot": "tooltip-provider", delay: e, ...t });
}
function Vt({ ...e }) {
  return a.jsx(zt, { children: a.jsx(Be, { "data-slot": "tooltip", ...e }) });
}
function Ot({ ...e }) {
  return a.jsx(Ue, { "data-slot": "tooltip-trigger", ...e });
}
function Bt({
  className: e,
  arrow: t,
  side: n,
  sideOffset: r = 8,
  children: s,
  ...o
}) {
  return a.jsx(He, {
    children: a.jsx(De, {
      side: n,
      sideOffset: r,
      children: a.jsxs(Ge, {
        "data-slot": "tooltip-content",
        className: c(
          "bg-popover text-popover-foreground data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 shadow-bevel-lg z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-xl px-2 py-1 text-sm text-balance",
          e
        ),
        ...o,
        children: [
          s,
          t
            ? a.jsx(Ke, {
                className:
                  "bg-primary fill-primary z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]",
              })
            : null,
        ],
      }),
    }),
  });
}
const le = ({ onVisibilityToggle: e, buttonClassName: t, ...n }) => {
  const [r, s] = h.useState(!1),
    o = () => {
      const i = !r;
      (s(i), e?.(i));
    },
    l = a.jsxs(Vt, {
      children: [
        a.jsx(Ot, {
          type: "button",
          onClick: o,
          className: c(
            "cursor-pointer h-full w-full min-w-[44px] mr-[-5px]",
            "theme-universal:rounded-r-input theme-universal:rounded-l-none",
            "theme-universal:text-input-labels",
            "theme-universal:hover:text-input-text",
            "transition-colors",
            "theme-universal:focus:bg-base-focus/15 theme-universal:focus-visible:ring-0 theme-universal:focus-visible:ring-offset-0",
            "flex items-center justify-center",
            "bg-transparent border-none outline-none",
            t
          ),
          "aria-label": r ? "Hide password" : "Show password",
          children: r ? a.jsx(We, {}) : a.jsx(qe, {}),
        }),
        a.jsx(Bt, {
          sideOffset: 0,
          className: "bg-black text-white -mb-2 ml-0.5",
          children: r ? "Hide password" : "Show password",
        }),
      ],
    });
  return a.jsx(z, { ...n, type: r ? "text" : "password", endAdornment: l });
};
le.displayName = "ULThemePasswordField";
function ie({
  variant: e = "primary",
  size: t = "default",
  className: n,
  ...r
}) {
  const s = {
      primary: c(
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
      default: c(
        "theme-universal:rounded-button",
        "theme-universal:font-button",
        "theme-universal:text-(length:--ul-theme-font-buttons-text-size)"
      ),
      xs: c(
        "theme-universal:rounded-button",
        "theme-universal:font-button",
        "theme-universal:text-(length:--ul-theme-font-buttons-text-size)"
      ),
      sm: c(
        "theme-universal:rounded-button",
        "theme-universal:font-button",
        "theme-universal:text-(length:--ul-theme-font-buttons-text-size)"
      ),
      lg: c(
        "theme-universal:rounded-button",
        "theme-universal:font-button",
        "theme-universal:text-(length:--ul-theme-font-buttons-text-size)"
      ),
      icon: c("theme-universal:rounded-button"),
    },
    l = c(e && s[e], t && o[t]);
  return a.jsx(be, { variant: e, size: t, className: c(n, l), ...r });
}
const T = (e, t) =>
    Array.isArray(t) ? t.find((r) => r.field === e)?.message : void 0,
  Ut = (e, t, n) => {
    const r = [];
    return (
      e && r.push("email"),
      t && r.push("phone"),
      n && r.push("username"),
      r.join("-")
    );
  },
  de = (e, t) => {
    let n = t?.usernameOrEmailPlaceholder || "Username or Email Address",
      r = "text",
      s = "username";
    if (e) {
      const o = e.includes("email"),
        l = e.includes("phone"),
        i = e.includes("username"),
        u = Ut(o, l, i),
        m = {
          email: {
            labelKey: "emailPlaceholder",
            labelFallback: t?.emailPlaceholder || "Email Address",
            type: "email",
            autoComplete: "email",
          },
          phone: {
            labelKey: "phonePlaceholder",
            labelFallback: t?.phonePlaceholder || "Phone Number",
            type: "tel",
            autoComplete: "tel",
          },
          username: {
            labelKey: "usernameOnlyPlaceholder",
            labelFallback: t?.usernameOnlyPlaceholder || "Username",
            autoComplete: "username",
          },
          "email-phone": {
            labelKey: "phoneOrEmailPlaceholder",
            labelFallback:
              t?.phoneOrEmailPlaceholder || "Phone Number or Email Address",
            autoComplete: "username",
          },
          "email-username": {
            labelKey: "usernameOrEmailPlaceholder",
            labelFallback:
              t?.usernameOrEmailPlaceholder || "Username or Email Address",
            autoComplete: "username",
          },
          "phone-username": {
            labelKey: "phoneOrUsernamePlaceholder",
            labelFallback:
              t?.phoneOrUsernamePlaceholder || "Phone Number or Username",
            autoComplete: "username",
          },
          "email-phone-username": {
            labelKey: "phoneOrUsernameOrEmailPlaceholder",
            labelFallback:
              t?.phoneOrUsernameOrEmailPlaceholder ||
              "Phone, Username, or Email",
            autoComplete: "username",
          },
        }[u];
      m &&
        ((n = m.labelFallback),
        m.type && (r = m.type),
        m.autoComplete && (s = m.autoComplete));
    }
    return (
      n.endsWith("*") || (n += "*"),
      { label: n, type: r, autoComplete: s }
    );
  };
function Ht() {
  const {
      handleLogin: e,
      errors: t,
      isCaptchaAvailable: n,
      captchaImage: r,
      resetPasswordLink: s,
      isForgotPasswordEnabled: o,
      texts: l,
      allowedIdentifiers: i,
      passwordPolicy: u,
    } = H(),
    d = J({ defaultValues: { username: "", password: "", captcha: "" } }),
    {
      formState: { isSubmitting: m },
    } = d,
    g = l?.buttonText || "Continue",
    f = l?.captchaCodePlaceholder?.concat("*") || "CAPTCHA*",
    b = "CAPTCHA challenge",
    p = l?.forgotPasswordText || "Forgot Password?",
    { label: x, type: y, autoComplete: v } = de(i, l),
    j = l?.passwordPlaceholder?.concat("*") || "Password*",
    w = t?.filter((S) => !S.field || S.field === null) || [],
    k = T("username", t) || T("email", t),
    L = T("password", t),
    N = T("captcha", t),
    O = async (S) => {
      await e(S.username, S.password, S.captcha);
    },
    V = s && I(s);
  return a.jsx(re, {
    ...d,
    children: a.jsxs("form", {
      onSubmit: d.handleSubmit(O),
      className: "space-y-2",
      children: [
        w.length > 0 &&
          a.jsx("div", {
            className: "space-y-3 mb-4",
            children: w.map((S, P) =>
              a.jsx(
                se,
                {
                  variant: "destructive",
                  children: a.jsx(oe, { children: S.message }),
                },
                P
              )
            ),
          }),
        a.jsx(M, {
          control: d.control,
          name: "username",
          rules: {
            required: "This field is required",
            maxLength: {
              value: 100,
              message: "Maximum 100 characters allowed",
            },
          },
          render: ({ field: S, fieldState: P }) =>
            a.jsxs(R, {
              children: [
                a.jsx(z, {
                  ...S,
                  label: x,
                  type: y,
                  autoFocus: !0,
                  autoComplete: v,
                  error: !!P.error || !!k,
                }),
                a.jsx(E, { sdkError: k, hasFormError: !!P.error }),
              ],
            }),
        }),
        a.jsx(M, {
          control: d.control,
          name: "password",
          rules: {
            required: "Password is required",
            maxLength: {
              value: 200,
              message: "Maximum 200 characters allowed",
            },
            minLength: u?.minLength
              ? {
                  value: u.minLength,
                  message: `Password must be at least ${u.minLength} characters`,
                }
              : void 0,
          },
          render: ({ field: S, fieldState: P }) =>
            a.jsxs(R, {
              children: [
                a.jsx(le, {
                  ...S,
                  label: j,
                  autoComplete: "current-password",
                  error: !!P.error || !!L,
                }),
                a.jsx(E, { sdkError: L, hasFormError: !!P.error }),
              ],
            }),
        }),
        n &&
          a.jsx(Se, {
            control: d.control,
            name: "captcha",
            label: f,
            imageUrl: r || "",
            imageAltText: b,
            sdkError: N,
            rules: {
              required: "Please complete the CAPTCHA",
              maxLength: { value: 15, message: "CAPTCHA too long" },
            },
          }),
        a.jsx("div", {
          className: "text-left",
          children: o && V && a.jsx(F, { href: V, children: p }),
        }),
        a.jsx(ie, {
          type: "submit",
          className: "w-full",
          disabled: m,
          children: g,
        }),
      ],
    }),
  });
}
function Dt() {
  const { loginInstance: e, texts: t } = H(),
    n = e?.transaction?.alternateConnections,
    r = n && n.length > 0,
    s = t?.separatorText || "OR";
  ((document.title = t?.pageTitle || "Login"), X(e));
  const o = B("--ul-theme-widget-social-buttons-layout"),
    l = (i) =>
      a.jsxs(a.Fragment, {
        children: [
          i === "bottom" && r && a.jsx(G, { text: s }),
          a.jsx(St, { connections: n }),
          i === "top" && r && a.jsx(G, { text: s }),
        ],
      });
  return a.jsx(Q, {
    className: "theme-universal",
    children: a.jsxs(Y, {
      className: "w-full max-w-[400px] gap-0",
      children: [
        a.jsx(Lt, {}),
        o === "top" && l("top"),
        a.jsx(Ht, {}),
        a.jsx(Tt, {}),
        o === "bottom" && l("bottom"),
      ],
    }),
  });
}
const Gt = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Dt },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  D = () => {
    const e = h.useMemo(() => new Ze(), []),
      { transaction: t, screen: n } = e,
      {
        isSignupEnabled: r,
        isForgotPasswordEnabled: s,
        isPasskeyEnabled: o,
      } = t,
      { signupLink: l, resetPasswordLink: i, texts: u, captchaImage: d } = n;
    return {
      loginIdInstance: e,
      handleLoginId: async (p, x) => {
        const y = { username: p?.trim() || "" };
        (n.isCaptchaAvailable && x?.trim() && (y.captcha = x.trim()),
          A(`LoginId with options: ${JSON.stringify(y)}`, () => e.login(y)));
      },
      handleFederatedLogin: async (p) => {
        A(`Federated login with connection: ${p}`, () =>
          e.federatedLogin({ connection: p })
        );
      },
      handlePasskeyLogin: async () => {
        o && A("Passkey login", () => e.passkeyLogin());
      },
      handlePickCountryCode: async () => {
        A("Pick country code", () => e.pickCountryCode());
      },
      texts: u || {},
      isSignupEnabled: r === !0,
      isForgotPasswordEnabled: s === !0,
      isPasskeyEnabled: o === !0,
      isCaptchaAvailable: n.isCaptchaAvailable === !0,
      errors: e.getErrors(),
      captchaImage: d,
      captcha: n.captcha || null,
      signupLink: l,
      resetPasswordLink: i,
    };
  },
  Kt = ({ connections: e }) => {
    const {
        handleFederatedLogin: t,
        handlePasskeyLogin: n,
        texts: r,
        isPasskeyEnabled: s,
      } = D(),
      o = r?.passkeyButtonText || "Continue with a passkey";
    return a.jsx(a.Fragment, {
      children: a.jsxs("div", {
        className: "space-y-3 mt-2",
        children: [
          s &&
            a.jsx(
              Z,
              {
                displayName: "Passkey",
                buttonText: o,
                iconComponent: a.jsx("span", {
                  className: "text-primary",
                  children: xe(),
                }),
                onClick: () => n(),
              },
              "passkey"
            ),
          e?.map((l) => {
            const { displayName: i, iconComponent: u } = ve(l),
              d = `Continue with ${i}`;
            return a.jsx(
              Z,
              {
                displayName: i,
                buttonText: d,
                iconComponent: u,
                onClick: () => t(l.name),
              },
              l.name
            );
          }),
        ],
      }),
    });
  };
function $t() {
  const { isSignupEnabled: e, signupLink: t, texts: n } = D();
  if (!e) return null;
  const r = I(t),
    s = n?.footerText || "Don't have an account?",
    o = n?.footerLinkText || "Sign up";
  return a.jsxs("div", {
    className: "mt-4 text-left",
    children: [
      a.jsx("span", {
        className:
          "pr-1 text-body-text text-(length:--ul-theme-font-body-text-size) font-body",
        children: s,
      }),
      r && a.jsx(F, { href: r, children: o }),
    ],
  });
}
function Wt() {
  const { texts: e } = D(),
    t = e?.logoAltText || "Application Logo";
  return a.jsxs(a.Fragment, {
    children: [
      a.jsx(te, { altText: t }),
      a.jsx(ne, { children: e?.title || "Welcome" }),
      a.jsx(ae, {
        children:
          e?.description ||
          "Log in to dev-tenant to continue to my acul react.",
      }),
    ],
  });
}
const qt = 3,
  Zt = ({
    config: e,
    onCaptchaResponse: t,
    className: n = "",
    theme: r,
    error: s,
  }) => {
    const [o, l] = h.useState(s),
      i = h.useRef(0);
    if (
      (h.useEffect(() => {
        l(s);
      }, [s]),
      e.provider !== "auth0_v2")
    )
      return null;
    const u = e.siteKey;
    if (!u) return null;
    const d = (b) => {
        ((i.current = 0), l(void 0), t({ provider: "auth0_v2", token: b }));
      },
      m = (b) => {
        if ((t(null), i.current < qt)) {
          i.current += 1;
          return;
        } else l(`Verification failed after multiple attempts: ${b}`);
      },
      g = () => {
        (t(null), (i.current = 0));
      },
      f = {
        transform: "scale(1.06)",
        transformOrigin: "0 0",
        overflow: "hidden",
        display: "inline-block",
        lineHeight: 0,
        fontSize: 0,
      };
    return a.jsx("div", {
      className: c("space-y-2", n),
      children: a.jsx("div", {
        className: c(
          "rounded-sm inline-block",
          o ? "border border-[#d93025]" : "none"
        ),
        style: f,
        children: a.jsx(Je, {
          sitekey: u,
          onVerify: d,
          onError: m,
          onExpire: g,
          theme: r,
          size: "normal",
        }),
      }),
    });
  },
  me = "friendly_captcha",
  Jt = ({
    config: e,
    onCaptchaResponse: t,
    className: n = "",
    error: r,
    theme: s,
  }) => {
    const [o, l] = h.useState(void 0),
      [i, u] = h.useState(r),
      [d, m] = h.useState(!1),
      g = h.useRef(null),
      f = h.useRef(null),
      b = e.siteKey,
      p = e.provider === me,
      x = h.useCallback(
        (v) => {
          (l(v), u(void 0), t({ provider: me, token: v }));
        },
        [t]
      ),
      y = h.useCallback(() => {
        (l(void 0), t(null));
      }, [t]);
    return (
      h.useEffect(() => {
        m(!0);
      }, []),
      h.useEffect(() => {
        u(r);
      }, [r]),
      h.useEffect(() => {
        if (!d || !p || !b || !g.current || f.current) return;
        const v = !!window.friendlyChallenge,
          j = () => {
            f.current = new Ye(g.current, {
              sitekey: b,
              doneCallback: x,
              errorCallback: y,
            });
          };
        if (v) j();
        else {
          const w = document.createElement("script");
          ((w.src =
            "https://cdn.jsdelivr.net/npm/friendly-challenge@0.9.14/widget.min.js"),
            (w.async = !0),
            (w.onload = () => {
              j();
            }),
            document.head.appendChild(w));
        }
      }, [d, p, b, x, y]),
      !d || !p || !b
        ? null
        : a.jsxs("div", {
            className: c("space-y-2", n),
            children: [
              a.jsx("div", {
                className: c(
                  "w-full rounded-[3px]",
                  i
                    ? "border border-[#d93025] overflow-hidden"
                    : "border border-[#d3d3d3] overflow-auto"
                ),
                children: a.jsx("form", {
                  onSubmit: (v) => v.preventDefault(),
                  children: a.jsx("div", {
                    "data-testid": "friendly-captcha-container",
                    ref: g,
                    className: `frc-captcha ${ee(s)}`,
                    "data-sitekey": b,
                    style: { transform: "scale(1.02)", transformOrigin: "0 0" },
                  }),
                }),
              }),
              a.jsx("input", {
                type: "hidden",
                name: "friendly-challenge-response",
                id: "hidden-friendly-captcha",
                value: o || "",
              }),
            ],
          })
    );
  },
  he = "hcaptcha",
  Yt = ({
    config: e,
    onCaptchaResponse: t,
    className: n = "",
    error: r,
    theme: s,
  }) => {
    const [o, l] = h.useState(void 0),
      [i, u] = h.useState(r),
      [d, m] = h.useState(!1),
      g = h.useCallback(
        (x) => {
          (l(x || void 0), u(void 0), t(x ? { provider: he, token: x } : null));
        },
        [t]
      ),
      f = h.useCallback(() => {
        g(null);
      }, [g]),
      b = h.useCallback(() => {
        (l(void 0), t(null));
      }, [t]);
    if (
      (h.useEffect(() => {
        m(!0);
      }, []),
      h.useEffect(() => {
        u(r);
      }, [r]),
      e.provider !== he)
    )
      return null;
    const { siteKey: p } = e;
    return !p || !d
      ? null
      : a.jsxs("div", {
          className: c("space-y-2", n),
          children: [
            a.jsx("div", {
              className: c(
                "w-full rounded-sm",
                i
                  ? "border border-[#d93025] overflow-hidden"
                  : "none overflow-visible"
              ),
              children: a.jsx("div", {
                style: { transform: "scale(1.06)", transformOrigin: "0 0" },
                children: a.jsx(Qe, {
                  sitekey: p,
                  onVerify: g,
                  onExpire: f,
                  onError: b,
                  theme: ee(s),
                  size: "normal",
                }),
              }),
            }),
            a.jsx("input", {
              type: "hidden",
              name: "h-captcha-response",
              id: "hidden-h-captcha",
              value: o || "",
            }),
          ],
        });
  },
  Qt = "recaptcha_v2",
  Xt = "recaptcha_enterprise",
  fe = ({
    config: e,
    onCaptchaResponse: t,
    className: n = "",
    error: r,
    theme: s,
  }) => {
    const [o, l] = h.useState(void 0),
      [i, u] = h.useState(r),
      d = h.useCallback(
        (j) => {
          if ((l(j || void 0), u(void 0), j)) {
            const k = { provider: e.provider, token: j };
            t(k);
          } else t(null);
        },
        [e.provider, t]
      ),
      m = h.useCallback(() => {
        d(null);
      }, [d]),
      g = h.useCallback(() => {
        (l(void 0), t(null));
      }, [t]),
      f = e.provider === Xt,
      b = e.provider === Qt;
    if (!f && !b) return null;
    const p = e.siteKey;
    if (!p) return null;
    const x = f ? Xe : et,
      y = f ? "g-recaptcha-response-enterprise" : "g-recaptcha-response",
      v = f ? "hidden-recaptcha-enterprise" : "hidden-recaptcha-v2";
    return a.jsxs("div", {
      className: c("space-y-2", n),
      children: [
        a.jsx("div", {
          className: c(
            "flex w-full rounded box-border",
            i ? "border border-[#d93025]" : "border border-[#d3d3d3]"
          ),
          style: { overflow: "hidden", display: "inline-block" },
          children: a.jsx("div", {
            style: { transform: "scale(1.06)", transformOrigin: "0 0" },
            children: a.jsx(x, {
              sitekey: p,
              onChange: d,
              onExpired: m,
              onError: g,
              theme: ee(s),
              size: "normal",
            }),
          }),
        }),
        a.jsx("input", { type: "hidden", name: y, id: v, value: o }),
      ],
    });
  },
  ea = ({
    config: e,
    onCaptchaResponse: t,
    control: n,
    name: r,
    rules: s,
    label: o = "",
    error: l,
    className: i = "",
  }) => {
    if (e.provider !== "auth0") return null;
    const u = e.image,
      d = "CAPTCHA challenge",
      m = c(
        "flex justify-center p-8 rounded",
        "theme-universal:bg-input-bg",
        "theme-universal:border",
        "theme-universal:border-input-border",
        "theme-universal:rounded-input"
      ),
      g = (b) => {
        const x = { provider: "auth0", answer: b.target.value };
        t(x);
      },
      f = (b) => (p) => {
        (g(p), b.onChange(p));
      };
    return a.jsxs("div", {
      className: c("space-y-2", i),
      children: [
        u &&
          a.jsx("div", {
            className: m,
            children: a.jsx("img", {
              src: u,
              alt: d,
              className: c("object-contain"),
            }),
          }),
        a.jsx(M, {
          control: n,
          name: r,
          rules: s,
          render: ({ field: b, fieldState: p }) =>
            a.jsxs(R, {
              children: [
                a.jsx(z, {
                  ...b,
                  onChange: f(b),
                  label: o,
                  type: "text",
                  autoComplete: "off",
                  error: !!p.error || !!l,
                }),
                a.jsx(E, {
                  className: "mt-1",
                  sdkError: l,
                  hasFormError: !!p.error,
                }),
              ],
            }),
        }),
      ],
    });
  },
  ta = ({
    control: e,
    rules: t,
    name: n,
    captcha: r,
    onValidationChange: s,
    label: o,
    sdkError: l,
    theme: i,
    className: u,
  }) => {
    function d() {
      return {
        recaptcha_v2: fe,
        recaptcha_enterprise: fe,
        hcaptcha: Yt,
        auth0_v2: Zt,
        friendly_captcha: Jt,
      };
    }
    const m = d(),
      { provider: g, image: f, siteKey: b, enabled: p = !0 } = r || {};
    if (!p || !g) return null;
    const x = (v) => {
      if (s)
        if (v) {
          const j =
            v.provider === "auth0" ? v.answer : v.token || v.arkoseToken;
          s(!!j, j);
        } else s(!1);
    };
    if (g === "auth0")
      return f
        ? a.jsx(ea, {
            config: { provider: "auth0", image: f },
            onCaptchaResponse: x,
            control: e,
            name: n,
            rules: t,
            label: o,
            error: l,
            className: u,
          })
        : null;
    const y = m[g];
    return y && b
      ? a.jsx(y, {
          config: { provider: g, siteKey: b },
          name: n,
          onCaptchaResponse: x,
          theme: i,
          label: o,
          error: l,
          className: u,
        })
      : null;
  },
  _e = h.forwardRef(
    (
      {
        selectedCountry: e,
        placeholder: t = "Select Country",
        isLoading: n = !1,
        fullWidth: r = !1,
        className: s,
        disabled: o,
        ...l
      },
      i
    ) => {
      const u = c(
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
        d = r ? "w-full" : "",
        m =
          o || n ? "disabled:opacity-70 cursor-not-allowed" : "cursor-pointer";
      return a.jsxs("button", {
        ref: i,
        type: "button",
        disabled: o || n,
        className: c(u, d, m, s),
        ...l,
        children: [
          a.jsx("div", {
            className: "flex items-center space-x-3 flex-1 min-w-0",
            children: e
              ? a.jsxs(a.Fragment, {
                  children: [
                    a.jsx("div", {
                      className:
                        "flex-shrink-0 w-6 h-4 flex items-center justify-center",
                      children: e.flag.startsWith("http")
                        ? a.jsx("img", {
                            src: e.flag,
                            alt: `${e.name} flag`,
                            className: "w-6 h-4 object-cover rounded-sm",
                          })
                        : a.jsx("span", {
                            className: "text-lg",
                            children: e.flag,
                          }),
                    }),
                    a.jsx("div", {
                      className: "flex-1 min-w-0",
                      children: a.jsxs("span", {
                        className:
                          "theme-universal:text-input-text theme-universal:font-body truncate",
                        children: [e.name, ", ", e.code, ",", " ", e.dialCode],
                      }),
                    }),
                  ],
                })
              : a.jsxs(a.Fragment, {
                  children: [
                    a.jsx("div", {
                      className:
                        "flex-shrink-0 w-6 h-4 theme-universal:bg-input-border rounded-sm",
                    }),
                    a.jsx("span", {
                      className:
                        "theme-universal:text-input-labels flex-1 truncate",
                      children: t,
                    }),
                  ],
                }),
          }),
          a.jsx("div", {
            className: "flex-shrink-0 ml-2",
            children: a.jsx(tt, {
              className: c(
                "w-4 h-4 theme-universal:text-input-labels transition-transform duration-200",
                n && "animate-pulse"
              ),
            }),
          }),
        ],
      });
    }
  );
_e.displayName = "ULThemeCountryCodePicker";
const aa = (e, t, n) => {
    const r = !!e && !!e.provider,
      [s, o] = h.useState(!r),
      [l, i] = h.useState(void 0),
      [u, d] = h.useState(void 0),
      m = h.useCallback((g, f, b) => {
        (o(g), i(f), d(b));
      }, []);
    return {
      captchaConfig: r ? e : void 0,
      captchaProps: { label: t, onValidationChange: m, error: u, theme: n },
      captchaValue: l,
      isCaptchaSolved: s,
    };
  },
  na = {
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
function ra(e, t) {
  if (!e) return;
  const n = na[e];
  return n
    ? { name: n.name, code: e, dialCode: t ? `+${t}` : "+??", flag: n.flag }
    : {
        name: `Country ${e}`,
        code: e,
        dialCode: t ? `+${t}` : "+??",
        flag: "🏳️",
      };
}
function sa(e) {
  return e.length === 1 && e.some((t) => t.toLowerCase().includes("phone"));
}
function oa() {
  const {
      handleLoginId: e,
      errors: t,
      isCaptchaAvailable: n,
      captcha: r,
      resetPasswordLink: s,
      isForgotPasswordEnabled: o,
      loginIdInstance: l,
      texts: i,
      handlePickCountryCode: u,
    } = D(),
    d = J({ defaultValues: { identifier: "", captcha: "" } }),
    {
      formState: { isSubmitting: m },
    } = d,
    g = () => {
      const C = ["light", "dark", "auto"],
        _ = l?.branding?.themes?.default?.colors?.captcha_widget_theme;
      return ((Pe) => C.includes(Pe))(_) ? _ : "auto";
    },
    f = i?.buttonText || "Continue",
    b = i?.captchaCodePlaceholder?.concat("*") || "CAPTCHA*",
    p = i?.forgotPasswordText || "Forgot Password?",
    x = t?.filter((C) => !C.field || C.field === null) || [],
    y =
      T("identifier", t) || T("email", t) || T("phone", t) || T("username", t),
    v = T("captcha", t),
    {
      captchaConfig: j,
      captchaProps: w,
      captchaValue: k,
    } = aa(r || void 0, b, g()),
    L = l?.transaction?.allowedIdentifiers || [],
    { label: N, type: O, autoComplete: V } = de(L, i),
    S = async (C) => {
      await e(C.identifier, k);
    },
    P = s && I(s),
    W = sa(L);
  return a.jsx(re, {
    ...d,
    children: a.jsxs("form", {
      onSubmit: d.handleSubmit(S),
      className: "space-y-2",
      children: [
        x.length > 0 &&
          a.jsx("div", {
            className: "space-y-3 mb-4",
            children: x.map((C, _) =>
              a.jsx(
                se,
                {
                  variant: "destructive",
                  children: a.jsx(oe, { children: C.message }),
                },
                _
              )
            ),
          }),
        W &&
          a.jsx("div", {
            className: "mb-4",
            children: a.jsx(_e, {
              selectedCountry: ra(
                l?.transaction?.countryCode,
                l?.transaction?.countryPrefix
              ),
              onClick: u,
              fullWidth: !0,
              placeholder: "Select Country",
            }),
          }),
        a.jsx(M, {
          control: d.control,
          name: "identifier",
          rules: {
            required: "This field is required",
            maxLength: {
              value: 100,
              message: "Maximum 100 characters allowed",
            },
          },
          render: ({ field: C, fieldState: _ }) =>
            a.jsxs(R, {
              children: [
                a.jsx(z, {
                  ...C,
                  label: N,
                  type: O,
                  autoFocus: !0,
                  autoComplete: V,
                  error: !!_.error || !!y,
                }),
                a.jsx(E, { sdkError: y, hasFormError: !!_.error }),
              ],
            }),
        }),
        n &&
          j &&
          a.jsx(ta, {
            control: d.control,
            name: "captcha",
            captcha: j,
            ...w,
            sdkError: v,
            rules: {
              required: "Please complete the CAPTCHA",
              maxLength: { value: 15, message: "CAPTCHA too long" },
            },
          }),
        a.jsx("div", {
          className: "text-left mb-4",
          children: o && P && a.jsx(F, { href: P, children: p }),
        }),
        a.jsx(ie, {
          type: "submit",
          className: "w-full",
          disabled: m,
          children: f,
        }),
      ],
    }),
  });
}
function la() {
  const { loginIdInstance: e, texts: t, isPasskeyEnabled: n } = D(),
    r = e?.transaction?.alternateConnections,
    s = n || (r && r.length > 0),
    o = t?.separatorText || "OR";
  ((document.title = t?.pageTitle || "Login"), X(e));
  const l = B("--ul-theme-widget-social-buttons-layout"),
    i = (u) =>
      a.jsxs(a.Fragment, {
        children: [
          u === "bottom" && s && a.jsx(G, { text: o }),
          a.jsx(Kt, { connections: r }),
          u === "top" && s && a.jsx(G, { text: o }),
        ],
      });
  return a.jsx(Q, {
    className: "theme-universal",
    children: a.jsxs(Y, {
      className: "w-full max-w-[400px] gap-0",
      children: [
        a.jsx(Wt, {}),
        l === "top" && i("top"),
        a.jsx(oa, {}),
        a.jsx($t, {}),
        l === "bottom" && i("bottom"),
      ],
    }),
  });
}
const ia = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: la },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  $ = () => {
    const e = h.useMemo(() => new at(), []),
      { transaction: t, screen: n } = e,
      {
        isSignupEnabled: r,
        isForgotPasswordEnabled: s,
        isPasskeyEnabled: o,
      } = t,
      {
        signupLink: l,
        resetPasswordLink: i,
        texts: u,
        captchaImage: d,
        editIdentifierLink: m,
        links: g,
        data: f,
      } = n;
    return {
      loginPasswordInstance: e,
      handleLoginPassword: async (p, x, y) => {
        const v = { username: p?.trim() || "", password: x?.trim() || "" };
        (n.isCaptchaAvailable && y?.trim() && (v.captcha = y.trim()),
          A(`LoginPassword with options: ${JSON.stringify(v)}`, () =>
            e.login(v)
          ));
      },
      texts: u || {},
      isSignupEnabled: r === !0,
      isForgotPasswordEnabled: s === !0,
      isPasskeyEnabled: o === !0,
      isCaptchaAvailable: n.isCaptchaAvailable === !0,
      errors: e.getErrors(),
      links: g,
      editIdentifierLink: m,
      signupLink: l,
      resetPasswordLink: i,
      captchaImage: d,
      data: f,
    };
  };
function da() {
  const { isSignupEnabled: e, signupLink: t, texts: n } = $();
  if (!e) return null;
  const r = I(t),
    s = n?.footerText || "Don't have an account?",
    o = n?.footerLinkText || "Sign up";
  return a.jsxs("div", {
    className: "mt-4 text-left",
    children: [
      a.jsx("span", { className: "text-sm pr-1", children: s }),
      r && a.jsx(F, { href: r, children: o }),
    ],
  });
}
function ua() {
  const { texts: e } = $(),
    t = e?.logoAltText || "Application Logo";
  return a.jsxs(a.Fragment, {
    children: [
      a.jsx(te, { altText: t }),
      a.jsx(ne, { children: e?.title || "Welcome" }),
      a.jsx(ae, {
        children:
          e?.description ||
          "Enter your password for My Company to continue to My App",
      }),
    ],
  });
}
function ca() {
  const {
      links: e,
      data: t,
      handleLoginPassword: n,
      errors: r,
      isCaptchaAvailable: s,
      captchaImage: o,
      resetPasswordLink: l,
      isForgotPasswordEnabled: i,
      loginPasswordInstance: u,
      texts: d,
    } = $(),
    m = J({
      defaultValues: { username: t?.username || "", password: "", captcha: "" },
    }),
    {
      formState: { isSubmitting: g },
    } = m,
    f = d?.buttonText || "Continue",
    b = d?.passwordPlaceholder || "Password",
    p = d?.captchaCodePlaceholder?.concat("*") || "CAPTCHA*",
    x = "CAPTCHA challenge",
    y = d?.forgotPasswordText || "Forgot Password?",
    v = r?.filter((C) => !C.field || C.field === null) || [],
    j = T("username", r) || T("email", r),
    w = T("password", r),
    k = T("captcha", r),
    L = u?.transaction?.getAllowedIdentifiers() || [],
    N = u?.transaction?.getPasswordPolicy(),
    { label: O, type: V } = de(L, d),
    S = async (C) => {
      await n(C.username, C.password, C.captcha);
    },
    P = l && I(l),
    W = I(e?.edit_identifier) || "";
  return a.jsx(re, {
    ...m,
    children: a.jsxs("form", {
      onSubmit: m.handleSubmit(S),
      className: "space-y-2",
      children: [
        v.length > 0 &&
          a.jsx("div", {
            className: "space-y-3 mb-4",
            children: v.map((C, _) =>
              a.jsx(se, { children: a.jsx(oe, { children: C.message }) }, _)
            ),
          }),
        a.jsx(M, {
          control: m.control,
          name: "username",
          render: ({ field: C, fieldState: _ }) =>
            a.jsxs(R, {
              children: [
                a.jsx(z, {
                  ...C,
                  label: O,
                  type: V,
                  value: t?.username || "",
                  error: !!_.error || !!j,
                  readOnly: !0,
                  endAdornment: a.jsx(F, {
                    href: W,
                    children: d?.editEmailText || "Edit",
                  }),
                  className: "pr-[16px]",
                }),
                a.jsx(E, { sdkError: j, hasFormError: !!_.error }),
              ],
            }),
        }),
        a.jsx(M, {
          control: m.control,
          name: "password",
          rules: {
            required: "Password is required",
            maxLength: {
              value: 200,
              message: "Maximum 200 characters allowed",
            },
            minLength: N?.minLength
              ? {
                  value: N.minLength,
                  message: `Password must be at least ${N.minLength} characters`,
                }
              : void 0,
          },
          render: ({ field: C, fieldState: _ }) =>
            a.jsxs(R, {
              children: [
                a.jsx(le, {
                  ...C,
                  label: b,
                  autoFocus: !0,
                  autoComplete: "current-password",
                  error: !!_.error || !!w,
                }),
                a.jsx(E, { sdkError: w, hasFormError: !!_.error }),
              ],
            }),
        }),
        s &&
          (w || k || v.length > 0) &&
          a.jsx(Se, {
            control: m.control,
            name: "captcha",
            label: p,
            imageUrl: o || "",
            imageAltText: x,
            className: "mb-4",
            sdkError: k,
            rules: {
              required: "Please complete the CAPTCHA",
              maxLength: { value: 15, message: "CAPTCHA too long" },
            },
          }),
        a.jsx("div", {
          className: "text-left mb-4",
          children: i && P && a.jsx(F, { href: P, children: y }),
        }),
        a.jsx(ie, {
          type: "submit",
          className: "w-full",
          disabled: g,
          children: f,
        }),
      ],
    }),
  });
}
function ma() {
  const { loginPasswordInstance: e } = $();
  return (
    X(e),
    a.jsx(Q, {
      className: "theme-universal",
      children: a.jsxs(Y, {
        className: "w-full max-w-[400px] gap-0",
        children: [a.jsx(ua, {}), a.jsx(ca, {}), a.jsx(da, {})],
      }),
    })
  );
}
const ha = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: ma },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  fa = "modulepreload",
  ga = function (e) {
    return "/" + e;
  },
  ge = {},
  q = function (t, n, r) {
    let s = Promise.resolve();
    if (n && n.length > 0) {
      let u = function (d) {
        return Promise.all(
          d.map((m) =>
            Promise.resolve(m).then(
              (g) => ({ status: "fulfilled", value: g }),
              (g) => ({ status: "rejected", reason: g })
            )
          )
        );
      };
      document.getElementsByTagName("link");
      const l = document.querySelector("meta[property=csp-nonce]"),
        i = l?.nonce || l?.getAttribute("nonce");
      s = u(
        n.map((d) => {
          if (((d = ga(d)), d in ge)) return;
          ge[d] = !0;
          const m = d.endsWith(".css"),
            g = m ? '[rel="stylesheet"]' : "";
          if (document.querySelector(`link[href="${d}"]${g}`)) return;
          const f = document.createElement("link");
          if (
            ((f.rel = m ? "stylesheet" : fa),
            m || (f.as = "script"),
            (f.crossOrigin = ""),
            (f.href = d),
            i && f.setAttribute("nonce", i),
            document.head.appendChild(f),
            m)
          )
            return new Promise((b, p) => {
              (f.addEventListener("load", b),
                f.addEventListener("error", () =>
                  p(new Error(`Unable to preload CSS for ${d}`))
                ));
            });
        })
      );
    }
    function o(l) {
      const i = new Event("vite:preloadError", { cancelable: !0 });
      if (((i.payload = l), window.dispatchEvent(i), !i.defaultPrevented))
        throw l;
    }
    return s.then((l) => {
      for (const i of l || []) i.status === "rejected" && o(i.reason);
      return t().catch(o);
    });
  };
async function pa() {}
const ba = {
    "login-id": h.lazy(() => q(() => Promise.resolve().then(() => ia), void 0)),
    login: h.lazy(() => q(() => Promise.resolve().then(() => Gt), void 0)),
    "login-password": h.lazy(() =>
      q(() => Promise.resolve().then(() => ha), void 0)
    ),
  },
  xa = (e) => ba[e] || null,
  va = () => {
    const [e, t] = h.useState("login-id");
    h.useEffect(() => {
      const r = nt();
      t(r || "login-id");
    }, []);
    const n = xa(e);
    return a.jsx(h.Suspense, {
      fallback: a.jsx("div", { children: "Loading..." }),
      children: n
        ? a.jsx(n, {})
        : a.jsxs("div", { children: ['Screen "', e, '" not implemented yet'] }),
    });
  };
async function ya() {
  await pa();
  const e = document.createElement("div");
  ((e.id = "root"),
    document.body.appendChild(e),
    rt
      .createRoot(document.getElementById("root"))
      .render(a.jsx(h.StrictMode, { children: a.jsx(va, {}) })));
}
ya();
export { la as L, ma as a };
//# sourceMappingURL=index.fFhbgp1e.js.map

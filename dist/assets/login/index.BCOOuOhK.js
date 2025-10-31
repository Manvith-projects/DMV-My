import {
  t as he,
  c as ge,
  j as a,
  r as g,
  F as le,
  a as pe,
  b as xe,
  d as U,
  e as be,
  C as ve,
  u as we,
  f as ye,
  g as je,
  T as Ne,
  h as _e,
  i as Se,
  k as Ce,
  l as Pe,
  m as Le,
  n as ke,
  E as Te,
  o as Ee,
  p as Fe,
  q as Ae,
  s as q,
  v as Ie,
  w as Me,
  x as ze,
  A as Re,
  y as Be,
  z as Oe,
  B as Ue,
} from "../shared/vendor.BXyqNJ2J.js";
function d(...e) {
  return he(ge(e));
}
const J = ({ children: e, className: t, ...n }) => {
    const r = d("w-full min-h-screen", "justify-page-layout", t);
    return a.jsxs("div", {
      className: r,
      ...n,
      children: [
        a.jsx("div", {
          className: "ul-topbar",
          children: a.jsxs("div", {
            className:
              "container mx-auto py-9 px-6 flex items-center justify-between h-14",
            children: [
              a.jsxs("div", {
                className: "flex items-center",
                children: [
                  a.jsx("div", {
                    className: "ul-logo bg-no-repeat bg-contain",
                    style: {
                      backgroundImage:
                        "url('https://www.dmv.ca.gov/imageserver/theme_10up/images/logo-ca-gov.svg')",
                      height: "36px",
                      width: "160px",
                    },
                    "aria-hidden": !0,
                  }),
                  a.jsx("div", {
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
              a.jsxs("div", {
                className: "flex items-center gap-4",
                children: [
                  a.jsx("span", {
                    className: "bg-white p-1 rounded-full",
                    "aria-hidden": "true",
                    children: a.jsx("i", {
                      className: "fa-solid fa-globe",
                      style: { color: "#000" },
                      "aria-hidden": "true",
                    }),
                  }),
                  a.jsx("button", {
                    className: "translate-btn",
                    children: "Translate",
                  }),
                ],
              }),
            ],
          }),
        }),
        a.jsx("div", {
          className: "ul-nav",
          children: a.jsx("div", {
            className: "container mx-auto px-6",
            children: a.jsx("div", {
              className: "py-4 text-center font-bold",
              children: "Home",
            }),
          }),
        }),
        a.jsx("div", {
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
          children: a.jsx("div", {
            className: "container mx-auto px-9 relative bg-cover",
            children: a.jsx("div", {
              className: "absolute inset-0 flex items-start justify-start",
              children: a.jsx("h1", {
                className: "hero-title m-10",
                style: { fontFamily: "tt-commons-800-italic, sans-serif" },
                children: "LOG IN",
              }),
            }),
          }),
        }),
        a.jsx("div", {
          className: "ul-content relative w-full",
          style: { marginTop: "-150px", zIndex: 20 },
          children: a.jsx("div", {
            className: "container mx-auto px-6 w-full max-w-7xl",
            children: e,
          }),
        }),
      ],
    });
  },
  Ve = U(
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
  se = g.forwardRef(
    (
      {
        className: e,
        variant: t,
        size: n,
        error: r,
        helperText: l,
        label: s,
        startAdornment: o,
        endAdornment: i,
        ...u
      },
      c
    ) => {
      const [m, f] = g.useState(!1),
        [h, w] = g.useState(!!(u.value || u.defaultValue)),
        p = u.disabled,
        v = (j) => {
          (f(!0), u.onFocus?.(j));
        },
        y = (j) => {
          (f(!1), w(!!j.target.value), u.onBlur?.(j));
        },
        b = (j) => {
          (w(!!j.target.value), u.onChange?.(j));
        },
        _ = m || h;
      return a.jsxs("div", {
        children: [
          a.jsxs(le, {
            className: d(
              Ve({ variant: r ? "error" : t, size: n }),
              "group relative items-end gap-0.5",
              p &&
                "bg-input-muted text-input-foreground cursor-not-allowed opacity-50",
              p && t === "default" && "bg-input-muted",
              o && "pl-[5px]",
              i && "pr-[5px]",
              e
            ),
            children: [
              a.jsx(pe, {
                htmlFor: u.id,
                className: d(
                  "pointer-events-none absolute top-1/2 left-4 z-[10] -translate-y-1/2 text-sm transition-all duration-150 ease-in-out origin-left",
                  o && "left-0",
                  _ &&
                    "scale-80 -translate-y-[1.18rem] top-2 z-10 bg-input px-1",
                  r ? "text-destructive-foreground" : "text-muted-foreground",
                  m && !r && "text-primary"
                ),
                children: s,
              }),
              o &&
                a.jsx("div", {
                  className:
                    "flex h-full items-center justify-center [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
                  children: o,
                }),
              a.jsx("div", {
                className: "relative flex-1",
                children: a.jsx(xe, {
                  id: u.id,
                  className: d(
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
                  ...u,
                  ref: c,
                  onFocus: v,
                  onBlur: y,
                  onChange: b,
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
          l &&
            a.jsx("p", {
              className: d(
                "mt-1.5 text-xs",
                r ? "text-destructive-foreground" : "text-muted-foreground"
              ),
              children: l,
            }),
        ],
      });
    }
  );
se.displayName = "FloatingLabelField";
const Z = be,
  oe = g.createContext({}),
  A = ({ ...e }) =>
    a.jsx(oe.Provider, {
      value: { name: e.name },
      children: a.jsx(ve, { ...e }),
    }),
  ie = () => {
    const e = g.useContext(oe),
      t = g.useContext(de),
      { getFieldState: n } = we(),
      r = ye({ name: e.name }),
      l = n(e.name, r);
    if (!e) throw new Error("useFormField should be used within <FormField>");
    const { id: s } = t;
    return {
      id: s,
      name: e.name,
      formItemId: `${s}-form-item`,
      formDescriptionId: `${s}-form-item-description`,
      formMessageId: `${s}-form-item-message`,
      ...l,
    };
  },
  de = g.createContext({});
function I({ className: e, ...t }) {
  const n = g.useId();
  return a.jsx(de.Provider, {
    value: { id: n },
    children: a.jsx(le, {
      "data-slot": "form-item",
      className: d("grid", e),
      ...t,
    }),
  });
}
function Ge({ className: e, ...t }) {
  const { error: n, formMessageId: r } = ie(),
    l = n ? String(n?.message ?? "") : t.children;
  return l
    ? a.jsx("p", {
        "data-slot": "form-message",
        id: r,
        className: d("text-destructive text-sm", e),
        ...t,
        children: l,
      })
    : null;
}
const Ke = U(
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
function M({
  className: e,
  variant: t = "default",
  size: n = "default",
  wrapperClassName: r,
  error: l,
  ...s
}) {
  const { formItemId: o } = ie(),
    i = l ? "error" : t,
    u = Ke({ themeState: l ? "error" : "default" });
  return a.jsx("div", {
    className: d("w-full", r),
    children: a.jsx(se, {
      id: o,
      className: d(e, u),
      variant: i,
      size: n,
      error: l,
      ...s,
    }),
  });
}
M.displayName = "ULThemeFloatingLabelField";
const E = ({ sdkError: e, hasFormError: t, showIcon: n = !0, className: r }) =>
  !e && !t
    ? null
    : a.jsxs("div", {
        className: d(
          "flex mb-2 items-center text-sm font-medium theme-universal:text-error",
          r
        ),
        role: "alert",
        "aria-live": "polite",
        children: [
          n && a.jsx(je, { className: "h-4 w-4 mr-1 flex-shrink-0" }),
          e
            ? a.jsx("p", {
                className:
                  "text-destructive text-sm theme-universal:text-error",
                children: e,
              })
            : a.jsx(Ge, { className: "theme-universal:text-error" }),
        ],
      });
E.displayName = "ULThemeFormMessage";
const ue = ({
    name: e,
    control: t,
    rules: n,
    label: r,
    imageUrl: l,
    imageAltText: s,
    sdkError: o,
    className: i,
  }) => {
    const u = d("space-y-2", i),
      c = d(
        "flex justify-center p-8 rounded",
        "theme-universal:bg-input-bg",
        "theme-universal:border",
        "theme-universal:border-input-border",
        "theme-universal:rounded-input"
      );
    return l
      ? a.jsxs("div", {
          className: u,
          children: [
            a.jsx("div", {
              className: c,
              children: a.jsx("img", {
                src: l,
                alt: s,
                className: "object-contain",
              }),
            }),
            a.jsx(A, {
              control: t,
              name: e,
              rules: n,
              render: ({ field: m, fieldState: f }) =>
                a.jsxs(I, {
                  children: [
                    a.jsx(M, {
                      ...m,
                      label: r,
                      type: "text",
                      autoComplete: "off",
                      error: !!f.error || !!o,
                    }),
                    a.jsx(E, {
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
  },
  $e = U(
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
function De({ className: e, variant: t, ...n }) {
  return a.jsx("div", {
    "data-slot": "alert",
    role: "alert",
    className: d($e({ variant: t }), e),
    ...n,
  });
}
function He({ className: e, ...t }) {
  return a.jsx("div", {
    "data-slot": "alert-title",
    className: d(
      "col-start-2 line-clamp-1 flex h-auto min-h-4 leading-4.5 font-medium tracking-tight",
      e
    ),
    ...t,
  });
}
function Y({ variant: e = "destructive", className: t, ...n }) {
  const r = {
      destructive: d(
        "p-4",
        "theme-universal:bg-error",
        "theme-universal:text-(--ul-theme-color-primary-button-label)",
        "theme-universal:rounded-button",
        "theme-universal:font-body",
        "theme-universal:text-(length:--ul-theme-font-body-text-size)"
      ),
    },
    l = d(e && r[e]);
  return a.jsx(De, { variant: e, className: d(t, l), ...n });
}
function Q({ className: e, ...t }) {
  const n = d(
    "theme-universal:text-(--ul-theme-color-primary-button-label)",
    "theme-universal:font-body",
    "theme-universal:text-(length:--ul-theme-font-body-text-size)"
  );
  return a.jsx(He, { className: d(e, n), ...t });
}
const We = U(
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
function qe({
  className: e,
  children: t,
  variant: n,
  underline: r,
  ref: l,
  ...s
}) {
  return a.jsx("a", {
    ref: l,
    className: d(We({ variant: n, underline: r }), e),
    ...s,
    children: t,
  });
}
const W = (e) =>
    getComputedStyle(document.documentElement)
      .getPropertyValue(e)
      .trim()
      .replace(/^"(.*)"$/, "$1"),
  B = ({ children: e, className: t, disabled: n = !1, ref: r, ...l }) => {
    const s =
        "text-link-focus text-(length:--ul-theme-font-links-size) font-(weight:--ul-theme-font-links-weight) focus:rounded-(--ul-theme-border-links-border-radius) hover:text-link-focus/80",
      o = n ? "pointer-events-none text-muted cursor-not-allowed" : "",
      i =
        "theme-universal:focus:outline-none theme-universal:focus:ring-4 theme-universal:focus:ring-base-focus/15 theme-universal:focus:bg-base-focus/15",
      u = W("--ul-theme-font-links-style") === "normal" ? "none" : "always";
    return a.jsx(qe, {
      ref: r,
      className: d(s, o, i, t),
      underline: u,
      "aria-disabled": n,
      ...l,
      children: e,
    });
  };
function Je({ delay: e = 0, ...t }) {
  return a.jsx(ke, { "data-slot": "tooltip-provider", delay: e, ...t });
}
function Ze({ ...e }) {
  return a.jsx(Je, { children: a.jsx(Ne, { "data-slot": "tooltip", ...e }) });
}
function Ye({ ...e }) {
  return a.jsx(_e, { "data-slot": "tooltip-trigger", ...e });
}
function Qe({
  className: e,
  arrow: t,
  side: n,
  sideOffset: r = 8,
  children: l,
  ...s
}) {
  return a.jsx(Se, {
    children: a.jsx(Ce, {
      side: n,
      sideOffset: r,
      children: a.jsxs(Pe, {
        "data-slot": "tooltip-content",
        className: d(
          "bg-popover text-popover-foreground data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 shadow-bevel-lg z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-xl px-2 py-1 text-sm text-balance",
          e
        ),
        ...s,
        children: [
          l,
          t
            ? a.jsx(Le, {
                className:
                  "bg-primary fill-primary z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]",
              })
            : null,
        ],
      }),
    }),
  });
}
const X = ({ onVisibilityToggle: e, buttonClassName: t, ...n }) => {
  const [r, l] = g.useState(!1),
    s = () => {
      const i = !r;
      (l(i), e?.(i));
    },
    o = a.jsxs(Ze, {
      children: [
        a.jsx(Ye, {
          type: "button",
          onClick: s,
          className: d(
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
          children: r ? a.jsx(Te, {}) : a.jsx(Ee, {}),
        }),
        a.jsx(Qe, {
          sideOffset: 0,
          className: "bg-black text-white -mb-2 ml-0.5",
          children: r ? "Hide password" : "Show password",
        }),
      ],
    });
  return a.jsx(M, { ...n, type: r ? "text" : "password", endAdornment: o });
};
X.displayName = "ULThemePasswordField";
const Xe = U(
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
function ea({
  className: e,
  variant: t,
  size: n,
  render: r = a.jsx("button", {}),
  ...l
}) {
  const s = { className: d(Xe({ variant: t, size: n }), e) };
  return Fe({ render: r, props: { ...s, ...l } });
}
function ee({
  variant: e = "primary",
  size: t = "default",
  className: n,
  ...r
}) {
  const l = {
      primary: d(
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
      default: d(
        "theme-universal:rounded-button",
        "theme-universal:font-button",
        "theme-universal:text-(length:--ul-theme-font-buttons-text-size)"
      ),
      xs: d(
        "theme-universal:rounded-button",
        "theme-universal:font-button",
        "theme-universal:text-(length:--ul-theme-font-buttons-text-size)"
      ),
      sm: d(
        "theme-universal:rounded-button",
        "theme-universal:font-button",
        "theme-universal:text-(length:--ul-theme-font-buttons-text-size)"
      ),
      lg: d(
        "theme-universal:rounded-button",
        "theme-universal:font-button",
        "theme-universal:text-(length:--ul-theme-font-buttons-text-size)"
      ),
      icon: d("theme-universal:rounded-button"),
    },
    o = d(e && l[e], t && s[t]);
  return a.jsx(ea, { variant: e, size: t, className: d(n, o), ...r });
}
const C = (e, t) =>
    Array.isArray(t) ? t.find((r) => r.field === e)?.message : void 0,
  aa = (e, t, n) => {
    const r = [];
    return (
      e && r.push("email"),
      t && r.push("phone"),
      n && r.push("username"),
      r.join("-")
    );
  },
  ae = (e, t) => {
    let n = t?.usernameOrEmailPlaceholder || "Username or Email Address",
      r = "text",
      l = "username";
    if (e) {
      const s = e.includes("email"),
        o = e.includes("phone"),
        i = e.includes("username"),
        u = aa(s, o, i),
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
        m.autoComplete && (l = m.autoComplete));
    }
    return (
      n.endsWith("*") || (n += "*"),
      { label: n, type: r, autoComplete: l }
    );
  },
  O = (e) => {
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
  },
  T = (e, t) => {
    try {
      const n = t();
      return (
        n &&
          typeof n.then == "function" &&
          n.catch((r) => {
            console.error(`Async error during action: ${e}`, r);
          }),
        n
      );
    } catch (n) {
      console.error(`Error during action: ${e}`, n);
      return;
    }
  },
  ta = () => {
    const e = g.useMemo(() => new Ae(), []),
      { transaction: t, screen: n } = e,
      { isSignupEnabled: r, isForgotPasswordEnabled: l, passwordPolicy: s } = t,
      { signupLink: o, resetPasswordLink: i, texts: u, captchaImage: c } = n;
    return {
      loginInstance: e,
      handleLogin: async (h, w, p) => {
        const v = { username: h?.trim() || "", password: w || "" };
        (n.isCaptchaAvailable && p?.trim() && (v.captcha = p.trim()),
          T(`Login with options: ${JSON.stringify(v)}`, () => e.login(v)));
      },
      handleFederatedLogin: async (h) => {
        T(`Federated login with connection: ${h}`, () =>
          e.federatedLogin({ connection: h })
        );
      },
      texts: u || {},
      isSignupEnabled: r === !0,
      isForgotPasswordEnabled: l === !0,
      isCaptchaAvailable: n.isCaptchaAvailable === !0,
      errors: e.getErrors(),
      captchaImage: c,
      signupLink: o,
      resetPasswordLink: i,
      allowedIdentifiers: t.allowedIdentifiers || [],
      passwordPolicy: s,
    };
  };
function na({ useNativeMarkup: e = !1, disableCaptcha: t = !1 }) {
  const {
      handleLogin: n,
      errors: r,
      isCaptchaAvailable: l,
      captchaImage: s,
      resetPasswordLink: o,
      isForgotPasswordEnabled: i,
      texts: u,
      allowedIdentifiers: c,
      passwordPolicy: m,
    } = ta(),
    f = q({ defaultValues: { username: "", password: "", captcha: "" } }),
    [h, w] = g.useState(!1),
    p = () => w((x) => !x),
    {
      formState: { isSubmitting: v },
    } = f,
    y = u?.buttonText || "Continue",
    b = u?.captchaCodePlaceholder?.concat("*") || "CAPTCHA*",
    _ = "CAPTCHA challenge",
    j = u?.forgotPasswordText || "Forgot Password?",
    { label: N, type: L, autoComplete: F } = ae(c, u),
    z = u?.passwordPlaceholder?.concat("*") || "Password*",
    V = r?.filter((x) => !x.field || x.field === null) || [],
    G = C("username", r) || C("email", r),
    R = C("password", r),
    D = C("captcha", r),
    S = async (x) => {
      await n(x.username, x.password, x.captcha);
    },
    P = o && O(o);
  return a.jsx(Z, {
    ...f,
    children: a.jsxs("form", {
      onSubmit: f.handleSubmit(S),
      className: "space-y-2",
      children: [
        V.length > 0 &&
          a.jsx("div", {
            className: "space-y-3 mb-4",
            children: V.map((x, k) =>
              a.jsx(
                Y,
                {
                  variant: "destructive",
                  children: a.jsx(Q, { children: x.message }),
                },
                k
              )
            ),
          }),
        a.jsx(A, {
          control: f.control,
          name: "username",
          rules: {
            required: "This field is required",
            maxLength: {
              value: 100,
              message: "Maximum 100 characters allowed",
            },
          },
          render: ({ field: x, fieldState: k }) =>
            a.jsxs(I, {
              children: [
                e
                  ? a.jsxs(a.Fragment, {
                      children: [
                        a.jsx("label", {
                          htmlFor: x.name,
                          className: "form-label label-text",
                          children: N,
                        }),
                        a.jsx("input", {
                          ...x,
                          id: x.name,
                          type: L,
                          autoComplete: F,
                          className: "form-input input-field w-full",
                          placeholder: N,
                        }),
                      ],
                    })
                  : a.jsx(M, {
                      ...x,
                      label: N,
                      type: L,
                      autoFocus: !0,
                      autoComplete: F,
                      error: !!k.error || !!G,
                    }),
                a.jsx(E, { sdkError: G, hasFormError: !!k.error }),
              ],
            }),
        }),
        a.jsx(A, {
          control: f.control,
          name: "password",
          rules: {
            required: "Password is required",
            maxLength: {
              value: 200,
              message: "Maximum 200 characters allowed",
            },
            minLength: m?.minLength
              ? {
                  value: m.minLength,
                  message: `Password must be at least ${m.minLength} characters`,
                }
              : void 0,
          },
          render: ({ field: x, fieldState: k }) =>
            a.jsxs(I, {
              children: [
                e
                  ? a.jsxs(a.Fragment, {
                      children: [
                        a.jsx("label", {
                          htmlFor: x.name,
                          className: "form-label label-text",
                          children: z,
                        }),
                        a.jsxs("div", {
                          className: "password-wrapper relative",
                          children: [
                            a.jsx("input", {
                              ...x,
                              id: x.name,
                              type: h ? "text" : "password",
                              autoComplete: "current-password",
                              className: "form-input input-field w-full pr-10",
                              placeholder: z,
                            }),
                            a.jsx("button", {
                              type: "button",
                              onClick: p,
                              className:
                                "toggle-password absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400",
                              "aria-label": h
                                ? "Hide password"
                                : "Show password",
                              children: a.jsx("i", {
                                className: "fa-regular fa-eye",
                                "aria-hidden": "true",
                              }),
                            }),
                          ],
                        }),
                      ],
                    })
                  : a.jsx(X, {
                      ...x,
                      label: z,
                      autoComplete: "current-password",
                      error: !!k.error || !!R,
                    }),
                a.jsx(E, { sdkError: R, hasFormError: !!k.error }),
              ],
            }),
        }),
        l &&
          !t &&
          a.jsx(ue, {
            control: f.control,
            name: "captcha",
            label: b,
            imageUrl: s || "",
            imageAltText: _,
            sdkError: D,
            rules: {
              required: "Please complete the CAPTCHA",
              maxLength: { value: 15, message: "CAPTCHA too long" },
            },
          }),
        a.jsx("div", {
          className: "text-left",
          children: i && P && a.jsx(B, { href: P, children: j }),
        }),
        e
          ? a.jsx("button", {
              type: "submit",
              className: "login-button w-full",
              disabled: v,
              children: y,
            })
          : a.jsx(ee, {
              type: "submit",
              className: "w-full",
              disabled: v,
              children: y,
            }),
      ],
    }),
  });
}
function ra() {
  return (
    g.useEffect(() => {
      document.title = "Login";
    }, []),
    a.jsx(J, {
      className: "theme-universal",
      children: a.jsxs("div", {
        className: "login-page min-h-screen flex flex-col z-30",
        children: [
          a.jsx("main", {
            className: "container mx-auto px-6 -mt-16 mb-16 z-30 max-w-7xl",
            children: a.jsx("div", {
              className: "max-w-7xl mx-auto",
              children: a.jsx("div", {
                className: "login-card bg-white rounded overflow-hidden w-full",
                children: a.jsxs("div", {
                  className: "p-6",
                  children: [
                    a.jsx("h2", {
                      className: "welcome-title",
                      children: "Welcome Back",
                    }),
                    a.jsx("hr", { className: "divider mb-4" }),
                    a.jsxs("div", {
                      className: "login-container",
                      children: [
                        a.jsxs("div", {
                          className: "wallet-login mb-4 flex items-start gap-3",
                          children: [
                            a.jsx("div", {
                              className:
                                "wallet-icon h-10 w-10 rounded overflow-hidden bg-white flex items-center justify-center",
                              children: a.jsx("img", {
                                src: "https://cdn.dmv.ca.gov/dmv-cdn/prod/isam/images/mdl/ca-dmv-wallet-icon.png",
                                alt: "CA DMV Wallet",
                                className: "h-full w-full object-contain",
                              }),
                            }),
                            a.jsxs("div", {
                              children: [
                                a.jsx("a", {
                                  href: "#",
                                  className:
                                    "wallet-link text-link font-medium links",
                                  children: "Log in with CA DMV Wallet App",
                                }),
                                a.jsx("div", {
                                  className:
                                    "wallet-subtitle text-xs text-muted",
                                  children: "No password needed",
                                }),
                              ],
                            }),
                          ],
                        }),
                        a.jsx("div", {
                          className: "section-title mb-3",
                          children: "MyDMV",
                        }),
                        a.jsxs("p", {
                          className: "register-text mb-4 small-note",
                          children: [
                            a.jsx("strong", { children: "Not Registered?" }),
                            " In order to log in, you will first need to",
                            " ",
                            a.jsx("a", {
                              href: "#",
                              className: "text-link underline links",
                              children: "create an account",
                            }),
                            ".",
                          ],
                        }),
                        a.jsx(na, { useNativeMarkup: !0, disableCaptcha: !0 }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          }),
          a.jsx("footer", { className: "mt-auto" }),
        ],
      }),
    })
  );
}
const la = Object.freeze(
  Object.defineProperty({ __proto__: null, default: ra }, Symbol.toStringTag, {
    value: "Module",
  })
);
function sa(e) {
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
function te(e, t, n = 10) {
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
function oa(e) {
  const t = {},
    n = e.buttons_style
      ? te(e.buttons_style, e.button_border_radius)
      : e.button_border_radius,
    r = e.inputs_style
      ? te(e.inputs_style, e.input_border_radius)
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
function ia(e) {
  const t = {};
  e.reference_text_size &&
    (t["--ul-theme-font-reference-text-size"] = `${e.reference_text_size}px`);
  const n = (r, l) => {
    if (r?.size) {
      const s = r.size;
      if (e.reference_text_size) {
        const i = (e.reference_text_size * s) / 100;
        t[`--ul-theme-font-${l}-size`] = `${i}px`;
      } else {
        const o = s / 100;
        t[`--ul-theme-font-${l}-size`] = `${o}rem`;
      }
    }
    r?.bold !== void 0 &&
      (t[`--ul-theme-font-${l}-weight`] = r.bold ? "700" : "400");
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
function da(e) {
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
function ua(e) {
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
const ma = {
  "colors.primary": "--ul-theme-color-primary-button",
  "colors.page_background": "--ul-theme-page-bg-background-color",
  logoUrl: "--ul-theme-widget-logo-url",
};
function me(e) {
  if (!e?.branding) return;
  wa();
  const t = ca(e);
  pa(t);
}
function ca(e) {
  const t = e.branding?.themes?.default || {},
    n = ne(e.branding?.settings),
    r = fa(t),
    l = ne(e.organization?.branding);
  return { ...n, ...r, ...l };
}
function fa(e) {
  return {
    ...sa(e.colors || {}),
    ...oa(e.borders || {}),
    ...ia(e.fonts || {}),
    ...da(e.pageBackground || e.page_background || {}),
    ...ua(e.widget || {}),
  };
}
function ne(e) {
  const t = {};
  return (e && ha(e, ma, t), t);
}
function ha(e, t, n) {
  Object.entries(t).forEach(([r, l]) => {
    const s = ga(e, r);
    s &&
      typeof s == "string" &&
      (l === "--ul-theme-widget-logo-url"
        ? (n[l] = `"${s}"`)
        : l === "--ul-theme-widget-logo-height"
          ? (n[l] = typeof s == "number" ? `${s}px` : s)
          : (n[l] = s));
  });
}
function ga(e, t) {
  return t.split(".").reduce((n, r) => n?.[r], e);
}
function pa(e) {
  const t = xa(e);
  Object.keys(t).length !== 0 && (ba(t), va(t));
}
function xa(e) {
  const t = {};
  return (
    Object.entries(e).forEach(([n, r]) => {
      K[n] !== r && (t[n] = r);
    }),
    t
  );
}
function ba(e) {
  const t = document.documentElement.style;
  Object.entries(e).forEach(([n, r]) => {
    t.setProperty(n, r);
  });
}
function va(e) {
  K = { ...K, ...e };
}
function wa() {
  K = {};
}
const ce = g.forwardRef(
  (
    {
      selectedCountry: e,
      placeholder: t = "Select Country",
      isLoading: n = !1,
      fullWidth: r = !1,
      className: l,
      disabled: s,
      ...o
    },
    i
  ) => {
    const u = d(
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
      c = r ? "w-full" : "",
      m = s || n ? "disabled:opacity-70 cursor-not-allowed" : "cursor-pointer";
    return a.jsxs("button", {
      ref: i,
      type: "button",
      disabled: s || n,
      className: d(u, c, m, l),
      ...o,
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
          children: a.jsx(Ie, {
            className: d(
              "w-4 h-4 theme-universal:text-input-labels transition-transform duration-200",
              n && "animate-pulse"
            ),
          }),
        }),
      ],
    });
  }
);
ce.displayName = "ULThemeCountryCodePicker";
const ya = {
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
function ja(e, t) {
  if (!e) return;
  const n = ya[e];
  return n
    ? { name: n.name, code: e, dialCode: t ? `+${t}` : "+??", flag: n.flag }
    : {
        name: `Country ${e}`,
        code: e,
        dialCode: t ? `+${t}` : "+??",
        flag: "🏳️",
      };
}
function Na(e) {
  return e.length === 1 && e.some((t) => t.toLowerCase().includes("phone"));
}
const fe = () => {
  const e = g.useMemo(() => new Me(), []),
    { transaction: t, screen: n } = e,
    { isSignupEnabled: r, isForgotPasswordEnabled: l, isPasskeyEnabled: s } = t,
    { signupLink: o, resetPasswordLink: i, texts: u, captchaImage: c } = n;
  return {
    loginIdInstance: e,
    handleLoginId: async (p, v) => {
      const y = { username: p?.trim() || "" };
      (n.isCaptchaAvailable && v?.trim() && (y.captcha = v.trim()),
        T(`LoginId with options: ${JSON.stringify(y)}`, () => {
          const b = e.login(y);
          return (
            b &&
              typeof b.then == "function" &&
              b
                .then((_) => {
                  console.log("LoginId success response:", _);
                })
                .catch((_) => {
                  throw (console.error("LoginId failed:", _), _);
                }),
            b
          );
        }));
    },
    handleFederatedLogin: async (p) => {
      T(`Federated login with connection: ${p}`, () =>
        e.federatedLogin({ connection: p })
      );
    },
    handlePasskeyLogin: async () => {
      s && T("Passkey login", () => e.passkeyLogin());
    },
    handlePickCountryCode: async () => {
      T("Pick country code", () => e.pickCountryCode());
    },
    texts: u || {},
    isSignupEnabled: r === !0,
    isForgotPasswordEnabled: l === !0,
    isPasskeyEnabled: s === !0,
    isCaptchaAvailable: n.isCaptchaAvailable === !0,
    errors: e.getErrors(),
    captchaImage: c,
    captcha: n.captcha || null,
    signupLink: o,
    resetPasswordLink: i,
  };
};
function _a() {
  const {
      handleLoginId: e,
      errors: t,
      resetPasswordLink: n,
      isForgotPasswordEnabled: r,
      loginIdInstance: l,
      texts: s,
      handlePickCountryCode: o,
    } = fe(),
    i = q({ defaultValues: { identifier: "" } }),
    {
      formState: { isSubmitting: u },
    } = i,
    c = s?.buttonText || "Continue",
    m = s?.forgotPasswordText || "Forgot Password?",
    f = t?.filter((N) => !N.field || N.field === null) || [],
    h =
      C("identifier", t) || C("email", t) || C("phone", t) || C("username", t),
    w = l?.transaction?.allowedIdentifiers || [],
    { label: p, type: v, autoComplete: y } = ae(w, s),
    b = async (N) => {
      await e(N.identifier);
    },
    _ = n && O(n),
    j = Na(w);
  return a.jsx(Z, {
    ...i,
    children: a.jsxs("form", {
      onSubmit: i.handleSubmit(b),
      className: "space-y-2",
      children: [
        f.length > 0 &&
          a.jsx("div", {
            className: "space-y-3 mb-4",
            children: f.map((N, L) =>
              a.jsx(
                Y,
                {
                  variant: "destructive",
                  children: a.jsx(Q, { children: N.message }),
                },
                L
              )
            ),
          }),
        j &&
          a.jsx("div", {
            className: "mb-4",
            children: a.jsx(ce, {
              selectedCountry: ja(
                l?.transaction?.countryCode,
                l?.transaction?.countryPrefix
              ),
              onClick: o,
              fullWidth: !0,
              placeholder: "Select Country",
            }),
          }),
        a.jsx(A, {
          control: i.control,
          name: "identifier",
          rules: {
            required: "This field is required",
            maxLength: {
              value: 100,
              message: "Maximum 100 characters allowed",
            },
          },
          render: ({ field: N, fieldState: L }) =>
            a.jsxs(I, {
              children: [
                a.jsx(M, {
                  ...N,
                  label: p,
                  type: v,
                  autoFocus: !0,
                  autoComplete: y,
                  error: !!L.error || !!h,
                }),
                a.jsx(E, { sdkError: h, hasFormError: !!L.error }),
              ],
            }),
        }),
        a.jsx("div", {
          className: "text-left mb-4",
          children: r && _ && a.jsx(B, { href: _, children: m }),
        }),
        a.jsx(ee, {
          type: "submit",
          className: "w-full",
          disabled: u,
          children: c,
        }),
      ],
    }),
  });
}
function Sa() {
  const { loginIdInstance: e, texts: t } = fe();
  return (
    g.useEffect(() => {
      (t?.pageTitle
        ? (document.title = t.pageTitle)
        : (document.title = "Login"),
        me(e));
    }, []),
    a.jsx(J, {
      className: "theme-universal",
      children: a.jsxs("div", {
        className: "login-page min-h-screen flex flex-col z-30",
        children: [
          a.jsx("main", {
            className:
              "container mx-auto px-4 sm:px-6 lg:px-8 -mt-16 mb-16 z-30 max-w-4xl",
            children: a.jsx("div", {
              className: "mx-auto",
              children: a.jsx("div", {
                className:
                  "login-card bg-white rounded overflow-hidden w-full shadow-md",
                children: a.jsxs("div", {
                  className: "p-4 sm:p-6 md:p-8",
                  children: [
                    a.jsx("h2", {
                      className: "welcome-title text-lg sm:text-xl md:text-2xl",
                      children: "Welcome Back",
                    }),
                    a.jsx("hr", { className: "divider mb-4" }),
                    a.jsxs("div", {
                      className: "flex flex-col gap-6",
                      children: [
                        a.jsxs("aside", {
                          className:
                            "w-full bg-gray-50 rounded p-4 flex flex-col gap-4 justify-center",
                          children: [
                            a.jsxs("div", {
                              className: "wallet-login flex items-start gap-3",
                              children: [
                                a.jsx("div", {
                                  className:
                                    "wallet-icon h-10 w-10 rounded overflow-hidden bg-white flex items-center justify-center",
                                  children: a.jsx("img", {
                                    src: "https://cdn.dmv.ca.gov/dmv-cdn/prod/isam/images/mdl/ca-dmv-wallet-icon.png",
                                    alt: "CA DMV Wallet",
                                    className:
                                      "h-full w-full object-contain max-h-12 max-w-12",
                                  }),
                                }),
                                a.jsxs("div", {
                                  children: [
                                    a.jsx("a", {
                                      href: "#",
                                      className:
                                        "wallet-link text-link font-medium links",
                                      children: "Log in with CA DMV Wallet App",
                                    }),
                                    a.jsx("div", {
                                      className:
                                        "wallet-subtitle text-xs text-muted",
                                      children: "No password needed",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            a.jsx("div", {
                              className: "section-title mt-2",
                              children: "MyDMV",
                            }),
                            a.jsxs("p", {
                              className:
                                "register-text mb-0 small-note text-sm",
                              children: [
                                a.jsx("strong", {
                                  children: "Not Registered?",
                                }),
                                " In order to log in, you will first need to",
                                a.jsx("a", {
                                  href: "#",
                                  className: "text-link underline links ml-1",
                                  children: "create an account",
                                }),
                                ".",
                              ],
                            }),
                          ],
                        }),
                        a.jsx("section", {
                          className: "w-full",
                          children: a.jsx(_a, {}),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          }),
          a.jsx("footer", { className: "mt-auto" }),
        ],
      }),
    })
  );
}
const Ca = Object.freeze(
  Object.defineProperty({ __proto__: null, default: Sa }, Symbol.toStringTag, {
    value: "Module",
  })
);
function Pa({ className: e, ...t }) {
  return a.jsx("div", {
    "data-slot": "card",
    className: d(
      "bg-card text-card-foreground shadow-bevel-2xl flex flex-col gap-6 rounded-4xl py-6",
      e
    ),
    ...t,
  });
}
const La = ({ children: e, className: t, ...n }) => {
    const r = d(
      "px-10",
      "py-10",
      "theme-universal:bg-widget-bg",
      "theme-universal:border-(--color-widget-border)",
      "theme-universal:rounded-widget",
      "theme-universal:shadow-widget",
      "theme-universal:border-(length:--border-widget)",
      t
    );
    return a.jsx(Pa, { className: r, ...n, children: e });
  },
  $ = () => {
    const e = g.useMemo(() => new ze(), []),
      { transaction: t, screen: n } = e,
      {
        isSignupEnabled: r,
        isForgotPasswordEnabled: l,
        isPasskeyEnabled: s,
      } = t,
      {
        signupLink: o,
        resetPasswordLink: i,
        texts: u,
        captchaImage: c,
        editIdentifierLink: m,
        links: f,
        data: h,
      } = n;
    return {
      loginPasswordInstance: e,
      handleLoginPassword: async (p, v, y) => {
        const b = { username: p?.trim() || "", password: v?.trim() || "" };
        (n.isCaptchaAvailable && y?.trim() && (b.captcha = y.trim()),
          T(`LoginPassword with options: ${JSON.stringify(b)}`, () =>
            e.login(b)
          ));
      },
      texts: u || {},
      isSignupEnabled: r === !0,
      isForgotPasswordEnabled: l === !0,
      isPasskeyEnabled: s === !0,
      isCaptchaAvailable: n.isCaptchaAvailable === !0,
      errors: e.getErrors(),
      links: f,
      editIdentifierLink: m,
      signupLink: o,
      resetPasswordLink: i,
      captchaImage: c,
      data: h,
    };
  };
function ka() {
  const { isSignupEnabled: e, signupLink: t, texts: n } = $();
  if (!e) return null;
  const r = O(t),
    l = n?.footerText || "Don't have an account?",
    s = n?.footerLinkText || "Sign up";
  return a.jsxs("div", {
    className: "mt-4 text-left",
    children: [
      a.jsx("span", { className: "text-sm pr-1", children: l }),
      r && a.jsx(B, { href: r, children: s }),
    ],
  });
}
function Ta({ className: e, ...t }) {
  return a.jsx(Re, {
    "data-slot": "avatar",
    className: d(
      "relative flex size-8 shrink-0 overflow-hidden rounded-full",
      e
    ),
    ...t,
  });
}
function Ea({ className: e, ...t }) {
  return a.jsx(Be, {
    "data-slot": "avatar-image",
    className: d("aspect-square size-full", e),
    ...t,
  });
}
const Fa = ({ imageUrl: e, altText: t, className: n, ...r }) => {
    const l = W("--ul-theme-widget-logo-url"),
      s = W("--ul-theme-widget-logo-position") === "none",
      o = "flex flex-wrap justify-widget-logo",
      i = "h-(--height-widget-logo)",
      u = l || e;
    return (
      !s &&
      a.jsx("div", {
        className: d(o, n),
        children: a.jsx(Ta, {
          className: "size-auto rounded-none",
          children: a.jsx(Ea, {
            src: u,
            alt: t,
            className: d(i),
            loading: "eager",
            decoding: "async",
            fetchPriority: "high",
            ...r,
          }),
        }),
      })
    );
  },
  Aa = ({ children: e, className: t, ...n }) =>
    a.jsx("p", {
      className: d(
        "mb-4 text-body-text justify-text-header text-(length:--ul-theme-font-subtitle-size) font-subtitle",
        t
      ),
      ...n,
      children: e,
    }),
  Ia = ({ children: e, className: t, ...n }) =>
    a.jsx("h1", {
      className: d(
        "mt-6 mb-4 text-header justify-text-header text-(length:--ul-theme-font-title-size) font-title",
        t
      ),
      ...n,
      children: e,
    });
function Ma() {
  const { texts: e } = $(),
    t = e?.logoAltText || "Application Logo";
  return a.jsxs(a.Fragment, {
    children: [
      a.jsx(Fa, { altText: t }),
      a.jsx(Ia, { children: e?.title || "Welcome" }),
      a.jsx(Aa, {
        children:
          e?.description ||
          "Enter your password for My Company to continue to My App",
      }),
    ],
  });
}
function za() {
  const {
      links: e,
      data: t,
      handleLoginPassword: n,
      errors: r,
      isCaptchaAvailable: l,
      captchaImage: s,
      resetPasswordLink: o,
      isForgotPasswordEnabled: i,
      loginPasswordInstance: u,
      texts: c,
    } = $(),
    m = q({
      defaultValues: { username: t?.username || "", password: "", captcha: "" },
    }),
    {
      formState: { isSubmitting: f },
    } = m,
    h = c?.buttonText || "Continue",
    w = c?.passwordPlaceholder || "Password",
    p = c?.captchaCodePlaceholder?.concat("*") || "CAPTCHA*",
    v = "CAPTCHA challenge",
    y = c?.forgotPasswordText || "Forgot Password?",
    b = r?.filter((S) => !S.field || S.field === null) || [],
    _ = C("username", r) || C("email", r),
    j = C("password", r),
    N = C("captcha", r),
    L = u?.transaction?.getAllowedIdentifiers() || [],
    F = u?.transaction?.getPasswordPolicy(),
    { label: z, type: V } = ae(L, c),
    G = async (S) => {
      await n(S.username, S.password, S.captcha);
    },
    R = o && O(o),
    D = O(e?.edit_identifier) || "";
  return a.jsx(Z, {
    ...m,
    children: a.jsxs("form", {
      onSubmit: m.handleSubmit(G),
      className: "space-y-2",
      children: [
        b.length > 0 &&
          a.jsx("div", {
            className: "space-y-3 mb-4",
            children: b.map((S, P) =>
              a.jsx(Y, { children: a.jsx(Q, { children: S.message }) }, P)
            ),
          }),
        a.jsx(A, {
          control: m.control,
          name: "username",
          render: ({ field: S, fieldState: P }) =>
            a.jsxs(I, {
              children: [
                a.jsx(M, {
                  ...S,
                  label: z,
                  type: V,
                  value: t?.username || "",
                  error: !!P.error || !!_,
                  readOnly: !0,
                  endAdornment: a.jsx(B, {
                    href: D,
                    children: c?.editEmailText || "Edit",
                  }),
                  className: "pr-[16px]",
                }),
                a.jsx(E, { sdkError: _, hasFormError: !!P.error }),
              ],
            }),
        }),
        a.jsx(A, {
          control: m.control,
          name: "password",
          rules: {
            required: "Password is required",
            maxLength: {
              value: 200,
              message: "Maximum 200 characters allowed",
            },
            minLength: F?.minLength
              ? {
                  value: F.minLength,
                  message: `Password must be at least ${F.minLength} characters`,
                }
              : void 0,
          },
          render: ({ field: S, fieldState: P }) =>
            a.jsxs(I, {
              children: [
                a.jsx(X, {
                  ...S,
                  label: w,
                  autoFocus: !0,
                  autoComplete: "current-password",
                  error: !!P.error || !!j,
                }),
                a.jsx(E, { sdkError: j, hasFormError: !!P.error }),
              ],
            }),
        }),
        l &&
          (j || N || b.length > 0) &&
          a.jsx(ue, {
            control: m.control,
            name: "captcha",
            label: p,
            imageUrl: s || "",
            imageAltText: v,
            className: "mb-4",
            sdkError: N,
            rules: {
              required: "Please complete the CAPTCHA",
              maxLength: { value: 15, message: "CAPTCHA too long" },
            },
          }),
        a.jsx("div", {
          className: "text-left mb-4",
          children: i && R && a.jsx(B, { href: R, children: y }),
        }),
        a.jsx(ee, {
          type: "submit",
          className: "w-full",
          disabled: f,
          children: h,
        }),
      ],
    }),
  });
}
function Ra() {
  const { loginPasswordInstance: e } = $();
  return (
    me(e),
    a.jsx(J, {
      className: "theme-universal",
      children: a.jsxs(La, {
        className: "w-full max-w-[400px] gap-0",
        children: [a.jsx(Ma, {}), a.jsx(za, {}), a.jsx(ka, {})],
      }),
    })
  );
}
const Ba = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Ra },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Oa = "modulepreload",
  Ua = function (e) {
    return "/" + e;
  },
  re = {},
  H = function (t, n, r) {
    let l = Promise.resolve();
    if (n && n.length > 0) {
      let u = function (c) {
        return Promise.all(
          c.map((m) =>
            Promise.resolve(m).then(
              (f) => ({ status: "fulfilled", value: f }),
              (f) => ({ status: "rejected", reason: f })
            )
          )
        );
      };
      document.getElementsByTagName("link");
      const o = document.querySelector("meta[property=csp-nonce]"),
        i = o?.nonce || o?.getAttribute("nonce");
      l = u(
        n.map((c) => {
          if (((c = Ua(c)), c in re)) return;
          re[c] = !0;
          const m = c.endsWith(".css"),
            f = m ? '[rel="stylesheet"]' : "";
          if (document.querySelector(`link[href="${c}"]${f}`)) return;
          const h = document.createElement("link");
          if (
            ((h.rel = m ? "stylesheet" : Oa),
            m || (h.as = "script"),
            (h.crossOrigin = ""),
            (h.href = c),
            i && h.setAttribute("nonce", i),
            document.head.appendChild(h),
            m)
          )
            return new Promise((w, p) => {
              (h.addEventListener("load", w),
                h.addEventListener("error", () =>
                  p(new Error(`Unable to preload CSS for ${c}`))
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
      return t().catch(s);
    });
  };
async function Va() {}
const Ga = {
    "login-id": g.lazy(() => H(() => Promise.resolve().then(() => Ca), void 0)),
    login: g.lazy(() => H(() => Promise.resolve().then(() => la), void 0)),
    "login-password": g.lazy(() =>
      H(() => Promise.resolve().then(() => Ba), void 0)
    ),
  },
  Ka = (e) => Ga[e] || null,
  $a = () => {
    const [e, t] = g.useState("login");
    g.useEffect(() => {
      const r = Oe();
      t(r || "login");
    }, []);
    const n = Ka(e);
    return a.jsx(g.Suspense, {
      fallback: a.jsx("div", { children: "Loading..." }),
      children: n
        ? a.jsx(n, {})
        : a.jsxs("div", { children: ['Screen "', e, '" not implemented yet'] }),
    });
  };
async function Da() {
  await Va();
  const e = document.createElement("div");
  ((e.id = "root"),
    document.body.appendChild(e),
    Ue.createRoot(document.getElementById("root")).render(
      a.jsx(g.StrictMode, { children: a.jsx($a, {}) })
    ));
}
Da();
export { Sa as L, Ra as a };
//# sourceMappingURL=index.BCOOuOhK.js.map

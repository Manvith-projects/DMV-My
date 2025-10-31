import {
  t as ge,
  c as pe,
  j as t,
  r as g,
  F as se,
  a as xe,
  b as be,
  d as U,
  e as ve,
  C as we,
  u as ye,
  f as je,
  g as Ne,
  T as _e,
  h as Se,
  i as Pe,
  k as Ce,
  l as Le,
  m as ke,
  n as Te,
  E as Ee,
  o as Fe,
  p as Ae,
  q as Ie,
  s as q,
  v as Me,
  w as ze,
  x as Re,
  A as Be,
  y as Oe,
  z as ae,
  B as Ue,
} from "../shared/vendor.BXyqNJ2J.js";
function d(...e) {
  return ge(pe(e));
}
const J = ({ children: e, className: a, ...n }) => {
    const r = d("w-full min-h-screen", "justify-page-layout", a);
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
  oe = g.forwardRef(
    (
      {
        className: e,
        variant: a,
        size: n,
        error: r,
        helperText: l,
        label: s,
        startAdornment: i,
        endAdornment: o,
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
      return t.jsxs("div", {
        children: [
          t.jsxs(se, {
            className: d(
              Ve({ variant: r ? "error" : a, size: n }),
              "group relative items-end gap-0.5",
              p &&
                "bg-input-muted text-input-foreground cursor-not-allowed opacity-50",
              p && a === "default" && "bg-input-muted",
              i && "pl-[5px]",
              o && "pr-[5px]",
              e
            ),
            children: [
              t.jsx(xe, {
                htmlFor: u.id,
                className: d(
                  "pointer-events-none absolute top-1/2 left-4 z-[10] -translate-y-1/2 text-sm transition-all duration-150 ease-in-out origin-left",
                  i && "left-0",
                  _ &&
                    "scale-80 -translate-y-[1.18rem] top-2 z-10 bg-input px-1",
                  r ? "text-destructive-foreground" : "text-muted-foreground",
                  m && !r && "text-primary"
                ),
                children: s,
              }),
              i &&
                t.jsx("div", {
                  className:
                    "flex h-full items-center justify-center [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
                  children: i,
                }),
              t.jsx("div", {
                className: "relative flex-1",
                children: t.jsx(be, {
                  id: u.id,
                  className: d(
                    "h-14 w-full flex-1 rounded-2xl bg-transparent px-3 py-4 outline-none file:border-0 file:bg-transparent file:text-sm file:font-medium",
                    "autofill:bg-transparent",
                    "autofill:[-webkit-text-fill-color:inherit]",
                    "autofill:[transition:background-color_9999s_ease-in-out_0s]",
                    p &&
                      "bg-input-muted text-input-foreground cursor-not-allowed opacity-50",
                    i ? "rounded-l-none pl-0" : "pl-3",
                    o ? "rounded-r-none pr-0" : "pr-3",
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
              o &&
                t.jsx("div", {
                  className:
                    "flex h-full items-center justify-center [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
                  children: o,
                }),
            ],
          }),
          l &&
            t.jsx("p", {
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
oe.displayName = "FloatingLabelField";
const Z = ve,
  ie = g.createContext({}),
  A = ({ ...e }) =>
    t.jsx(ie.Provider, {
      value: { name: e.name },
      children: t.jsx(we, { ...e }),
    }),
  de = () => {
    const e = g.useContext(ie),
      a = g.useContext(ue),
      { getFieldState: n } = ye(),
      r = je({ name: e.name }),
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
  ue = g.createContext({});
function I({ className: e, ...a }) {
  const n = g.useId();
  return t.jsx(ue.Provider, {
    value: { id: n },
    children: t.jsx(se, {
      "data-slot": "form-item",
      className: d("grid", e),
      ...a,
    }),
  });
}
function Ge({ className: e, ...a }) {
  const { error: n, formMessageId: r } = de(),
    l = n ? String(n?.message ?? "") : a.children;
  return l
    ? t.jsx("p", {
        "data-slot": "form-message",
        id: r,
        className: d("text-destructive text-sm", e),
        ...a,
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
  variant: a = "default",
  size: n = "default",
  wrapperClassName: r,
  error: l,
  ...s
}) {
  const { formItemId: i } = de(),
    o = l ? "error" : a,
    u = Ke({ themeState: l ? "error" : "default" });
  return t.jsx("div", {
    className: d("w-full", r),
    children: t.jsx(oe, {
      id: i,
      className: d(e, u),
      variant: o,
      size: n,
      error: l,
      ...s,
    }),
  });
}
M.displayName = "ULThemeFloatingLabelField";
const E = ({ sdkError: e, hasFormError: a, showIcon: n = !0, className: r }) =>
  !e && !a
    ? null
    : t.jsxs("div", {
        className: d(
          "flex mb-2 items-center text-sm font-medium theme-universal:text-error",
          r
        ),
        role: "alert",
        "aria-live": "polite",
        children: [
          n && t.jsx(Ne, { className: "h-4 w-4 mr-1 flex-shrink-0" }),
          e
            ? t.jsx("p", {
                className:
                  "text-destructive text-sm theme-universal:text-error",
                children: e,
              })
            : t.jsx(Ge, { className: "theme-universal:text-error" }),
        ],
      });
E.displayName = "ULThemeFormMessage";
const me = ({
    name: e,
    control: a,
    rules: n,
    label: r,
    imageUrl: l,
    imageAltText: s,
    sdkError: i,
    className: o,
  }) => {
    const u = d("space-y-2", o),
      c = d(
        "flex justify-center p-8 rounded",
        "theme-universal:bg-input-bg",
        "theme-universal:border",
        "theme-universal:border-input-border",
        "theme-universal:rounded-input"
      );
    return l
      ? t.jsxs("div", {
          className: u,
          children: [
            t.jsx("div", {
              className: c,
              children: t.jsx("img", {
                src: l,
                alt: s,
                className: "object-contain",
              }),
            }),
            t.jsx(A, {
              control: a,
              name: e,
              rules: n,
              render: ({ field: m, fieldState: f }) =>
                t.jsxs(I, {
                  children: [
                    t.jsx(M, {
                      ...m,
                      label: r,
                      type: "text",
                      autoComplete: "off",
                      error: !!f.error || !!i,
                    }),
                    t.jsx(E, {
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
function De({ className: e, variant: a, ...n }) {
  return t.jsx("div", {
    "data-slot": "alert",
    role: "alert",
    className: d($e({ variant: a }), e),
    ...n,
  });
}
function He({ className: e, ...a }) {
  return t.jsx("div", {
    "data-slot": "alert-title",
    className: d(
      "col-start-2 line-clamp-1 flex h-auto min-h-4 leading-4.5 font-medium tracking-tight",
      e
    ),
    ...a,
  });
}
function Y({ variant: e = "destructive", className: a, ...n }) {
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
  return t.jsx(De, { variant: e, className: d(a, l), ...n });
}
function Q({ className: e, ...a }) {
  const n = d(
    "theme-universal:text-(--ul-theme-color-primary-button-label)",
    "theme-universal:font-body",
    "theme-universal:text-(length:--ul-theme-font-body-text-size)"
  );
  return t.jsx(He, { className: d(e, n), ...a });
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
  children: a,
  variant: n,
  underline: r,
  ref: l,
  ...s
}) {
  return t.jsx("a", {
    ref: l,
    className: d(We({ variant: n, underline: r }), e),
    ...s,
    children: a,
  });
}
const W = (e) =>
    getComputedStyle(document.documentElement)
      .getPropertyValue(e)
      .trim()
      .replace(/^"(.*)"$/, "$1"),
  B = ({ children: e, className: a, disabled: n = !1, ref: r, ...l }) => {
    const s =
        "text-link-focus text-(length:--ul-theme-font-links-size) font-(weight:--ul-theme-font-links-weight) focus:rounded-(--ul-theme-border-links-border-radius) hover:text-link-focus/80",
      i = n ? "pointer-events-none text-muted cursor-not-allowed" : "",
      o =
        "theme-universal:focus:outline-none theme-universal:focus:ring-4 theme-universal:focus:ring-base-focus/15 theme-universal:focus:bg-base-focus/15",
      u = W("--ul-theme-font-links-style") === "normal" ? "none" : "always";
    return t.jsx(qe, {
      ref: r,
      className: d(s, i, o, a),
      underline: u,
      "aria-disabled": n,
      ...l,
      children: e,
    });
  };
function Je({ delay: e = 0, ...a }) {
  return t.jsx(Te, { "data-slot": "tooltip-provider", delay: e, ...a });
}
function Ze({ ...e }) {
  return t.jsx(Je, { children: t.jsx(_e, { "data-slot": "tooltip", ...e }) });
}
function Ye({ ...e }) {
  return t.jsx(Se, { "data-slot": "tooltip-trigger", ...e });
}
function Qe({
  className: e,
  arrow: a,
  side: n,
  sideOffset: r = 8,
  children: l,
  ...s
}) {
  return t.jsx(Pe, {
    children: t.jsx(Ce, {
      side: n,
      sideOffset: r,
      children: t.jsxs(Le, {
        "data-slot": "tooltip-content",
        className: d(
          "bg-popover text-popover-foreground data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 shadow-bevel-lg z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-xl px-2 py-1 text-sm text-balance",
          e
        ),
        ...s,
        children: [
          l,
          a
            ? t.jsx(ke, {
                className:
                  "bg-primary fill-primary z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]",
              })
            : null,
        ],
      }),
    }),
  });
}
const X = ({ onVisibilityToggle: e, buttonClassName: a, ...n }) => {
  const [r, l] = g.useState(!1),
    s = () => {
      const o = !r;
      (l(o), e?.(o));
    },
    i = t.jsxs(Ze, {
      children: [
        t.jsx(Ye, {
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
            a
          ),
          "aria-label": r ? "Hide password" : "Show password",
          children: r ? t.jsx(Ee, {}) : t.jsx(Fe, {}),
        }),
        t.jsx(Qe, {
          sideOffset: 0,
          className: "bg-black text-white -mb-2 ml-0.5",
          children: r ? "Hide password" : "Show password",
        }),
      ],
    });
  return t.jsx(M, { ...n, type: r ? "text" : "password", endAdornment: i });
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
function et({
  className: e,
  variant: a,
  size: n,
  render: r = t.jsx("button", {}),
  ...l
}) {
  const s = { className: d(Xe({ variant: a, size: n }), e) };
  return Ae({ render: r, props: { ...s, ...l } });
}
function ee({
  variant: e = "primary",
  size: a = "default",
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
    i = d(e && l[e], a && s[a]);
  return t.jsx(et, { variant: e, size: a, className: d(n, i), ...r });
}
const P = (e, a) =>
    Array.isArray(a) ? a.find((r) => r.field === e)?.message : void 0,
  tt = (e, a, n) => {
    const r = [];
    return (
      e && r.push("email"),
      a && r.push("phone"),
      n && r.push("username"),
      r.join("-")
    );
  },
  te = (e, a) => {
    let n = a?.usernameOrEmailPlaceholder || "Username or Email Address",
      r = "text",
      l = "username";
    if (e) {
      const s = e.includes("email"),
        i = e.includes("phone"),
        o = e.includes("username"),
        u = tt(s, i, o),
        m = {
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
  },
  T = (e, a) => {
    try {
      const n = a();
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
  at = () => {
    const e = g.useMemo(() => new Ie(), []),
      { transaction: a, screen: n } = e,
      { isSignupEnabled: r, isForgotPasswordEnabled: l, passwordPolicy: s } = a,
      { signupLink: i, resetPasswordLink: o, texts: u, captchaImage: c } = n;
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
      signupLink: i,
      resetPasswordLink: o,
      allowedIdentifiers: a.allowedIdentifiers || [],
      passwordPolicy: s,
    };
  };
function nt({ useNativeMarkup: e = !1, disableCaptcha: a = !1 }) {
  const {
      handleLogin: n,
      errors: r,
      isCaptchaAvailable: l,
      captchaImage: s,
      resetPasswordLink: i,
      isForgotPasswordEnabled: o,
      texts: u,
      allowedIdentifiers: c,
      passwordPolicy: m,
    } = at(),
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
    { label: N, type: L, autoComplete: F } = te(c, u),
    z = u?.passwordPlaceholder?.concat("*") || "Password*",
    V = r?.filter((x) => !x.field || x.field === null) || [],
    G = P("username", r) || P("email", r),
    R = P("password", r),
    D = P("captcha", r),
    S = async (x) => {
      await n(x.username, x.password, x.captcha);
    },
    C = i && O(i);
  return t.jsx(Z, {
    ...f,
    children: t.jsxs("form", {
      onSubmit: f.handleSubmit(S),
      className: "space-y-2",
      children: [
        V.length > 0 &&
          t.jsx("div", {
            className: "space-y-3 mb-4",
            children: V.map((x, k) =>
              t.jsx(
                Y,
                {
                  variant: "destructive",
                  children: t.jsx(Q, { children: x.message }),
                },
                k
              )
            ),
          }),
        t.jsx(A, {
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
            t.jsxs(I, {
              children: [
                e
                  ? t.jsxs(t.Fragment, {
                      children: [
                        t.jsx("label", {
                          htmlFor: x.name,
                          className: "form-label label-text",
                          children: N,
                        }),
                        t.jsx("input", {
                          ...x,
                          id: x.name,
                          type: L,
                          autoComplete: F,
                          className: "form-input input-field w-full",
                          placeholder: N,
                        }),
                      ],
                    })
                  : t.jsx(M, {
                      ...x,
                      label: N,
                      type: L,
                      autoFocus: !0,
                      autoComplete: F,
                      error: !!k.error || !!G,
                    }),
                t.jsx(E, { sdkError: G, hasFormError: !!k.error }),
              ],
            }),
        }),
        t.jsx(A, {
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
            t.jsxs(I, {
              children: [
                e
                  ? t.jsxs(t.Fragment, {
                      children: [
                        t.jsx("label", {
                          htmlFor: x.name,
                          className: "form-label label-text",
                          children: z,
                        }),
                        t.jsxs("div", {
                          className: "password-wrapper relative",
                          children: [
                            t.jsx("input", {
                              ...x,
                              id: x.name,
                              type: h ? "text" : "password",
                              autoComplete: "current-password",
                              className: "form-input input-field w-full pr-10",
                              placeholder: z,
                            }),
                            t.jsx("button", {
                              type: "button",
                              onClick: p,
                              className:
                                "toggle-password absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400",
                              "aria-label": h
                                ? "Hide password"
                                : "Show password",
                              children: t.jsx("i", {
                                className: "fa-regular fa-eye",
                                "aria-hidden": "true",
                              }),
                            }),
                          ],
                        }),
                      ],
                    })
                  : t.jsx(X, {
                      ...x,
                      label: z,
                      autoComplete: "current-password",
                      error: !!k.error || !!R,
                    }),
                t.jsx(E, { sdkError: R, hasFormError: !!k.error }),
              ],
            }),
        }),
        l &&
          !a &&
          t.jsx(me, {
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
        t.jsx("div", {
          className: "text-left",
          children: o && C && t.jsx(B, { href: C, children: j }),
        }),
        e
          ? t.jsx("button", {
              type: "submit",
              className: "login-button w-full",
              disabled: v,
              children: y,
            })
          : t.jsx(ee, {
              type: "submit",
              className: "w-full",
              disabled: v,
              children: y,
            }),
      ],
    }),
  });
}
function rt() {
  return (
    g.useEffect(() => {
      document.title = "Login";
    }, []),
    t.jsx(J, {
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
                    t.jsxs("div", {
                      className: "login-container",
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
                                  className:
                                    "wallet-subtitle text-xs text-muted",
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
                        t.jsx(nt, { useNativeMarkup: !0, disableCaptcha: !0 }),
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
    })
  );
}
const lt = Object.freeze(
  Object.defineProperty({ __proto__: null, default: rt }, Symbol.toStringTag, {
    value: "Module",
  })
);
function st(e) {
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
function ne(e, a, n = 10) {
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
function ot(e) {
  const a = {},
    n = e.buttons_style
      ? ne(e.buttons_style, e.button_border_radius)
      : e.button_border_radius,
    r = e.inputs_style
      ? ne(e.inputs_style, e.input_border_radius)
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
function it(e) {
  const a = {};
  e.reference_text_size &&
    (a["--ul-theme-font-reference-text-size"] = `${e.reference_text_size}px`);
  const n = (r, l) => {
    if (r?.size) {
      const s = r.size;
      if (e.reference_text_size) {
        const o = (e.reference_text_size * s) / 100;
        a[`--ul-theme-font-${l}-size`] = `${o}px`;
      } else {
        const i = s / 100;
        a[`--ul-theme-font-${l}-size`] = `${i}rem`;
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
function dt(e) {
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
function ut(e) {
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
let K = {};
const mt = {
  "colors.primary": "--ul-theme-color-primary-button",
  "colors.page_background": "--ul-theme-page-bg-background-color",
  logoUrl: "--ul-theme-widget-logo-url",
};
function ce(e) {
  if (!e?.branding) return;
  wt();
  const a = ct(e);
  pt(a);
}
function ct(e) {
  const a = e.branding?.themes?.default || {},
    n = re(e.branding?.settings),
    r = ft(a),
    l = re(e.organization?.branding);
  return { ...n, ...r, ...l };
}
function ft(e) {
  return {
    ...st(e.colors || {}),
    ...ot(e.borders || {}),
    ...it(e.fonts || {}),
    ...dt(e.pageBackground || e.page_background || {}),
    ...ut(e.widget || {}),
  };
}
function re(e) {
  const a = {};
  return (e && ht(e, mt, a), a);
}
function ht(e, a, n) {
  Object.entries(a).forEach(([r, l]) => {
    const s = gt(e, r);
    s &&
      typeof s == "string" &&
      (l === "--ul-theme-widget-logo-url"
        ? (n[l] = `"${s}"`)
        : l === "--ul-theme-widget-logo-height"
          ? (n[l] = typeof s == "number" ? `${s}px` : s)
          : (n[l] = s));
  });
}
function gt(e, a) {
  return a.split(".").reduce((n, r) => n?.[r], e);
}
function pt(e) {
  const a = xt(e);
  Object.keys(a).length !== 0 && (bt(a), vt(a));
}
function xt(e) {
  const a = {};
  return (
    Object.entries(e).forEach(([n, r]) => {
      K[n] !== r && (a[n] = r);
    }),
    a
  );
}
function bt(e) {
  const a = document.documentElement.style;
  Object.entries(e).forEach(([n, r]) => {
    a.setProperty(n, r);
  });
}
function vt(e) {
  K = { ...K, ...e };
}
function wt() {
  K = {};
}
const fe = g.forwardRef(
  (
    {
      selectedCountry: e,
      placeholder: a = "Select Country",
      isLoading: n = !1,
      fullWidth: r = !1,
      className: l,
      disabled: s,
      ...i
    },
    o
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
    return t.jsxs("button", {
      ref: o,
      type: "button",
      disabled: s || n,
      className: d(u, c, m, l),
      ...i,
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
          children: t.jsx(Me, {
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
fe.displayName = "ULThemeCountryCodePicker";
const yt = {
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
function jt(e, a) {
  if (!e) return;
  const n = yt[e];
  return n
    ? { name: n.name, code: e, dialCode: a ? `+${a}` : "+??", flag: n.flag }
    : {
        name: `Country ${e}`,
        code: e,
        dialCode: a ? `+${a}` : "+??",
        flag: "🏳️",
      };
}
function Nt(e) {
  return e.length === 1 && e.some((a) => a.toLowerCase().includes("phone"));
}
const he = () => {
  const e = g.useMemo(() => new ze(), []),
    { transaction: a, screen: n } = e,
    { isSignupEnabled: r, isForgotPasswordEnabled: l, isPasskeyEnabled: s } = a,
    { signupLink: i, resetPasswordLink: o, texts: u, captchaImage: c } = n;
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
    signupLink: i,
    resetPasswordLink: o,
  };
};
function _t() {
  const {
      handleLoginId: e,
      errors: a,
      resetPasswordLink: n,
      isForgotPasswordEnabled: r,
      loginIdInstance: l,
      texts: s,
      handlePickCountryCode: i,
    } = he(),
    o = q({ defaultValues: { identifier: "" } }),
    {
      formState: { isSubmitting: u },
    } = o,
    c = s?.buttonText || "Continue",
    m = s?.forgotPasswordText || "Forgot Password?",
    f = a?.filter((N) => !N.field || N.field === null) || [],
    h =
      P("identifier", a) || P("email", a) || P("phone", a) || P("username", a),
    w = l?.transaction?.allowedIdentifiers || [],
    { label: p, type: v, autoComplete: y } = te(w, s),
    b = async (N) => {
      await e(N.identifier);
    },
    _ = n && O(n),
    j = Nt(w);
  return t.jsx(Z, {
    ...o,
    children: t.jsxs("form", {
      onSubmit: o.handleSubmit(b),
      className: "space-y-2",
      children: [
        f.length > 0 &&
          t.jsx("div", {
            className: "space-y-3 mb-4",
            children: f.map((N, L) =>
              t.jsx(
                Y,
                {
                  variant: "destructive",
                  children: t.jsx(Q, { children: N.message }),
                },
                L
              )
            ),
          }),
        j &&
          t.jsx("div", {
            className: "mb-4",
            children: t.jsx(fe, {
              selectedCountry: jt(
                l?.transaction?.countryCode,
                l?.transaction?.countryPrefix
              ),
              onClick: i,
              fullWidth: !0,
              placeholder: "Select Country",
            }),
          }),
        t.jsx(A, {
          control: o.control,
          name: "identifier",
          rules: {
            required: "This field is required",
            maxLength: {
              value: 100,
              message: "Maximum 100 characters allowed",
            },
          },
          render: ({ field: N, fieldState: L }) =>
            t.jsxs(I, {
              children: [
                t.jsx(M, {
                  ...N,
                  label: p,
                  type: v,
                  autoFocus: !0,
                  autoComplete: y,
                  error: !!L.error || !!h,
                }),
                t.jsx(E, { sdkError: h, hasFormError: !!L.error }),
              ],
            }),
        }),
        t.jsx("div", {
          className: "text-left mb-4",
          children: r && _ && t.jsx(B, { href: _, children: m }),
        }),
        t.jsx(ee, {
          type: "submit",
          className: "w-full",
          disabled: u,
          children: c,
        }),
      ],
    }),
  });
}
function St() {
  const { loginIdInstance: e, texts: a } = he();
  return (
    g.useEffect(() => {
      (a?.pageTitle
        ? (document.title = a.pageTitle)
        : (document.title = "Login"),
        ce(e));
    }, []),
    t.jsx(J, {
      className: "theme-universal",
      children: t.jsxs("div", {
        className: "login-page min-h-screen flex flex-col z-30",
        children: [
          t.jsx("main", {
            className:
              "container mx-auto px-4 sm:px-6 lg:px-8 -mt-16 mb-16 z-30 max-w-4xl",
            children: t.jsx("div", {
              className: "mx-auto",
              children: t.jsx("div", {
                className:
                  "login-card bg-white rounded overflow-hidden w-full shadow-md",
                children: t.jsxs("div", {
                  className: "p-4 sm:p-6 md:p-8",
                  children: [
                    t.jsx("h2", {
                      className: "welcome-title text-lg sm:text-xl md:text-2xl",
                      children: "Welcome Back",
                    }),
                    t.jsx("hr", { className: "divider mb-4" }),
                    t.jsxs("div", {
                      className: "flex flex-col gap-6",
                      children: [
                        t.jsxs("aside", {
                          className:
                            "w-full bg-gray-50 rounded p-4 flex flex-col gap-4 justify-center",
                          children: [
                            t.jsxs("div", {
                              className: "wallet-login flex items-start gap-3",
                              children: [
                                t.jsx("div", {
                                  className:
                                    "wallet-icon h-10 w-10 rounded overflow-hidden bg-white flex items-center justify-center",
                                  children: t.jsx("img", {
                                    src: "https://cdn.dmv.ca.gov/dmv-cdn/prod/isam/images/mdl/ca-dmv-wallet-icon.png",
                                    alt: "CA DMV Wallet",
                                    className:
                                      "h-full w-full object-contain max-h-12 max-w-12",
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
                                      className:
                                        "wallet-subtitle text-xs text-muted",
                                      children: "No password needed",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            t.jsx("div", {
                              className: "section-title mt-2",
                              children: "MyDMV",
                            }),
                            t.jsxs("p", {
                              className:
                                "register-text mb-0 small-note text-sm",
                              children: [
                                t.jsx("strong", {
                                  children: "Not Registered?",
                                }),
                                " In order to log in, you will first need to",
                                t.jsx("a", {
                                  href: "#",
                                  className: "text-link underline links ml-1",
                                  children: "create an account",
                                }),
                                ".",
                              ],
                            }),
                          ],
                        }),
                        t.jsx("section", {
                          className: "w-full",
                          children: t.jsx(_t, {}),
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
    })
  );
}
const Pt = Object.freeze(
  Object.defineProperty({ __proto__: null, default: St }, Symbol.toStringTag, {
    value: "Module",
  })
);
function Ct({ className: e, ...a }) {
  return t.jsx("div", {
    "data-slot": "card",
    className: d(
      "bg-card text-card-foreground shadow-bevel-2xl flex flex-col gap-6 rounded-4xl py-6",
      e
    ),
    ...a,
  });
}
const Lt = ({ children: e, className: a, ...n }) => {
    const r = d(
      "px-10",
      "py-10",
      "theme-universal:bg-widget-bg",
      "theme-universal:border-(--color-widget-border)",
      "theme-universal:rounded-widget",
      "theme-universal:shadow-widget",
      "theme-universal:border-(length:--border-widget)",
      a
    );
    return t.jsx(Ct, { className: r, ...n, children: e });
  },
  $ = () => {
    const e = g.useMemo(() => new Re(), []),
      { transaction: a, screen: n } = e,
      {
        isSignupEnabled: r,
        isForgotPasswordEnabled: l,
        isPasskeyEnabled: s,
      } = a,
      {
        signupLink: i,
        resetPasswordLink: o,
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
      signupLink: i,
      resetPasswordLink: o,
      captchaImage: c,
      data: h,
    };
  };
function kt() {
  const { isSignupEnabled: e, signupLink: a, texts: n } = $();
  if (!e) return null;
  const r = O(a),
    l = n?.footerText || "Don't have an account?",
    s = n?.footerLinkText || "Sign up";
  return t.jsxs("div", {
    className: "mt-4 text-left",
    children: [
      t.jsx("span", { className: "text-sm pr-1", children: l }),
      r && t.jsx(B, { href: r, children: s }),
    ],
  });
}
function Tt({ className: e, ...a }) {
  return t.jsx(Be, {
    "data-slot": "avatar",
    className: d(
      "relative flex size-8 shrink-0 overflow-hidden rounded-full",
      e
    ),
    ...a,
  });
}
function Et({ className: e, ...a }) {
  return t.jsx(Oe, {
    "data-slot": "avatar-image",
    className: d("aspect-square size-full", e),
    ...a,
  });
}
const Ft = ({ imageUrl: e, altText: a, className: n, ...r }) => {
    const l = W("--ul-theme-widget-logo-url"),
      s = W("--ul-theme-widget-logo-position") === "none",
      i = "flex flex-wrap justify-widget-logo",
      o = "h-(--height-widget-logo)",
      u = l || e;
    return (
      !s &&
      t.jsx("div", {
        className: d(i, n),
        children: t.jsx(Tt, {
          className: "size-auto rounded-none",
          children: t.jsx(Et, {
            src: u,
            alt: a,
            className: d(o),
            loading: "eager",
            decoding: "async",
            fetchPriority: "high",
            ...r,
          }),
        }),
      })
    );
  },
  At = ({ children: e, className: a, ...n }) =>
    t.jsx("p", {
      className: d(
        "mb-4 text-body-text justify-text-header text-(length:--ul-theme-font-subtitle-size) font-subtitle",
        a
      ),
      ...n,
      children: e,
    }),
  It = ({ children: e, className: a, ...n }) =>
    t.jsx("h1", {
      className: d(
        "mt-6 mb-4 text-header justify-text-header text-(length:--ul-theme-font-title-size) font-title",
        a
      ),
      ...n,
      children: e,
    });
function Mt() {
  const { texts: e } = $(),
    a = e?.logoAltText || "Application Logo";
  return t.jsxs(t.Fragment, {
    children: [
      t.jsx(Ft, { altText: a }),
      t.jsx(It, { children: e?.title || "Welcome" }),
      t.jsx(At, {
        children:
          e?.description ||
          "Enter your password for My Company to continue to My App",
      }),
    ],
  });
}
function zt() {
  const {
      links: e,
      data: a,
      handleLoginPassword: n,
      errors: r,
      isCaptchaAvailable: l,
      captchaImage: s,
      resetPasswordLink: i,
      isForgotPasswordEnabled: o,
      loginPasswordInstance: u,
      texts: c,
    } = $(),
    m = q({
      defaultValues: { username: a?.username || "", password: "", captcha: "" },
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
    _ = P("username", r) || P("email", r),
    j = P("password", r),
    N = P("captcha", r),
    L = u?.transaction?.getAllowedIdentifiers() || [],
    F = u?.transaction?.getPasswordPolicy(),
    { label: z, type: V } = te(L, c),
    G = async (S) => {
      await n(S.username, S.password, S.captcha);
    },
    R = i && O(i),
    D = O(e?.edit_identifier) || "";
  return t.jsx(Z, {
    ...m,
    children: t.jsxs("form", {
      onSubmit: m.handleSubmit(G),
      className: "space-y-2",
      children: [
        b.length > 0 &&
          t.jsx("div", {
            className: "space-y-3 mb-4",
            children: b.map((S, C) =>
              t.jsx(Y, { children: t.jsx(Q, { children: S.message }) }, C)
            ),
          }),
        t.jsx(A, {
          control: m.control,
          name: "username",
          render: ({ field: S, fieldState: C }) =>
            t.jsxs(I, {
              children: [
                t.jsx(M, {
                  ...S,
                  label: z,
                  type: V,
                  value: a?.username || "",
                  error: !!C.error || !!_,
                  readOnly: !0,
                  endAdornment: t.jsx(B, {
                    href: D,
                    children: c?.editEmailText || "Edit",
                  }),
                  className: "pr-[16px]",
                }),
                t.jsx(E, { sdkError: _, hasFormError: !!C.error }),
              ],
            }),
        }),
        t.jsx(A, {
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
          render: ({ field: S, fieldState: C }) =>
            t.jsxs(I, {
              children: [
                t.jsx(X, {
                  ...S,
                  label: w,
                  autoFocus: !0,
                  autoComplete: "current-password",
                  error: !!C.error || !!j,
                }),
                t.jsx(E, { sdkError: j, hasFormError: !!C.error }),
              ],
            }),
        }),
        l &&
          (j || N || b.length > 0) &&
          t.jsx(me, {
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
        t.jsx("div", {
          className: "text-left mb-4",
          children: o && R && t.jsx(B, { href: R, children: y }),
        }),
        t.jsx(ee, {
          type: "submit",
          className: "w-full",
          disabled: f,
          children: h,
        }),
      ],
    }),
  });
}
function Rt() {
  const { loginPasswordInstance: e } = $();
  return (
    ce(e),
    t.jsx(J, {
      className: "theme-universal",
      children: t.jsxs(Lt, {
        className: "w-full max-w-[400px] gap-0",
        children: [t.jsx(Mt, {}), t.jsx(zt, {}), t.jsx(kt, {})],
      }),
    })
  );
}
const Bt = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Rt },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Ot = "modulepreload",
  Ut = function (e) {
    return "/" + e;
  },
  le = {},
  H = function (a, n, r) {
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
      const i = document.querySelector("meta[property=csp-nonce]"),
        o = i?.nonce || i?.getAttribute("nonce");
      l = u(
        n.map((c) => {
          if (((c = Ut(c)), c in le)) return;
          le[c] = !0;
          const m = c.endsWith(".css"),
            f = m ? '[rel="stylesheet"]' : "";
          if (document.querySelector(`link[href="${c}"]${f}`)) return;
          const h = document.createElement("link");
          if (
            ((h.rel = m ? "stylesheet" : Ot),
            m || (h.as = "script"),
            (h.crossOrigin = ""),
            (h.href = c),
            o && h.setAttribute("nonce", o),
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
    function s(i) {
      const o = new Event("vite:preloadError", { cancelable: !0 });
      if (((o.payload = i), window.dispatchEvent(o), !o.defaultPrevented))
        throw i;
    }
    return l.then((i) => {
      for (const o of i || []) o.status === "rejected" && s(o.reason);
      return a().catch(s);
    });
  };
async function Vt() {}
const Gt = {
    "login-id": g.lazy(() => H(() => Promise.resolve().then(() => Pt), void 0)),
    login: g.lazy(() => H(() => Promise.resolve().then(() => lt), void 0)),
    "login-password": g.lazy(() =>
      H(() => Promise.resolve().then(() => Bt), void 0)
    ),
  },
  Kt = (e) => Gt[e] || null,
  $t = 250,
  Dt = () => {
    const [e, a] = g.useState("login");
    g.useEffect(() => {
      const r = ae();
      a(r || "login");
      let l = !0;
      const i = setInterval(() => {
        if (l)
          try {
            const o = ae();
            o && o !== e && a(o);
          } catch {}
      }, $t);
      return () => {
        ((l = !1), clearInterval(i));
      };
    }, []);
    const n = Kt(e);
    return t.jsx(g.Suspense, {
      fallback: t.jsx("div", { children: "Loading..." }),
      children: n
        ? t.jsx(n, {})
        : t.jsxs("div", { children: ['Screen "', e, '" not implemented yet'] }),
    });
  };
async function Ht() {
  await Vt();
  const e = document.createElement("div");
  ((e.id = "root"),
    document.body.appendChild(e),
    Ue.createRoot(document.getElementById("root")).render(
      t.jsx(g.StrictMode, { children: t.jsx(Dt, {}) })
    ));
}
Ht();
export { St as L, Rt as a };
//# sourceMappingURL=index.cTRT0YSg.js.map

function v0(a, l) {
  for (var r = 0; r < l.length; r++) {
    const o = l[r];
    if (typeof o != "string" && !Array.isArray(o)) {
      for (const u in o)
        if (u !== "default" && !(u in a)) {
          const f = Object.getOwnPropertyDescriptor(o, u);
          f &&
            Object.defineProperty(
              a,
              u,
              f.get ? f : { enumerable: !0, get: () => o[u] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(a, Symbol.toStringTag, { value: "Module" })
  );
}
function Ns(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default")
    ? a.default
    : a;
}
var of = { exports: {} },
  Sr = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ap;
function A0() {
  if (Ap) return Sr;
  Ap = 1;
  var a = Symbol.for("react.transitional.element"),
    l = Symbol.for("react.fragment");
  function r(o, u, f) {
    var d = null;
    if (
      (f !== void 0 && (d = "" + f),
      u.key !== void 0 && (d = "" + u.key),
      "key" in u)
    ) {
      f = {};
      for (var m in u) m !== "key" && (f[m] = u[m]);
    } else f = u;
    return (
      (u = f.ref),
      { $$typeof: a, type: o, key: d, ref: u !== void 0 ? u : null, props: f }
    );
  }
  return ((Sr.Fragment = l), (Sr.jsx = r), (Sr.jsxs = r), Sr);
}
var bp;
function b0() {
  return (bp || ((bp = 1), (of.exports = A0())), of.exports);
}
var jn = b0();
function By(a) {
  var l,
    r,
    o = "";
  if (typeof a == "string" || typeof a == "number") o += a;
  else if (typeof a == "object")
    if (Array.isArray(a)) {
      var u = a.length;
      for (l = 0; l < u; l++)
        a[l] && (r = By(a[l])) && (o && (o += " "), (o += r));
    } else for (r in a) a[r] && (o && (o += " "), (o += r));
  return o;
}
function _0() {
  for (var a, l, r = 0, o = "", u = arguments.length; r < u; r++)
    (a = arguments[r]) && (l = By(a)) && (o && (o += " "), (o += l));
  return o;
}
const ed = "-",
  x0 = (a) => {
    const l = S0(a),
      { conflictingClassGroups: r, conflictingClassGroupModifiers: o } = a;
    return {
      getClassGroupId: (d) => {
        const m = d.split(ed);
        return (m[0] === "" && m.length !== 1 && m.shift(), Ny(m, l) || E0(d));
      },
      getConflictingClassGroupIds: (d, m) => {
        const p = r[d] || [];
        return m && o[d] ? [...p, ...o[d]] : p;
      },
    };
  },
  Ny = (a, l) => {
    if (a.length === 0) return l.classGroupId;
    const r = a[0],
      o = l.nextPart.get(r),
      u = o ? Ny(a.slice(1), o) : void 0;
    if (u) return u;
    if (l.validators.length === 0) return;
    const f = a.join(ed);
    return l.validators.find(({ validator: d }) => d(f))?.classGroupId;
  },
  _p = /^\[(.+)\]$/,
  E0 = (a) => {
    if (_p.test(a)) {
      const l = _p.exec(a)[1],
        r = l?.substring(0, l.indexOf(":"));
      if (r) return "arbitrary.." + r;
    }
  },
  S0 = (a) => {
    const { theme: l, classGroups: r } = a,
      o = { nextPart: new Map(), validators: [] };
    for (const u in r) Tf(r[u], o, u, l);
    return o;
  },
  Tf = (a, l, r, o) => {
    a.forEach((u) => {
      if (typeof u == "string") {
        const f = u === "" ? l : xp(l, u);
        f.classGroupId = r;
        return;
      }
      if (typeof u == "function") {
        if (C0(u)) {
          Tf(u(o), l, r, o);
          return;
        }
        l.validators.push({ validator: u, classGroupId: r });
        return;
      }
      Object.entries(u).forEach(([f, d]) => {
        Tf(d, xp(l, f), r, o);
      });
    });
  },
  xp = (a, l) => {
    let r = a;
    return (
      l.split(ed).forEach((o) => {
        (r.nextPart.has(o) ||
          r.nextPart.set(o, { nextPart: new Map(), validators: [] }),
          (r = r.nextPart.get(o)));
      }),
      r
    );
  },
  C0 = (a) => a.isThemeGetter,
  w0 = (a) => {
    if (a < 1) return { get: () => {}, set: () => {} };
    let l = 0,
      r = new Map(),
      o = new Map();
    const u = (f, d) => {
      (r.set(f, d), l++, l > a && ((l = 0), (o = r), (r = new Map())));
    };
    return {
      get(f) {
        let d = r.get(f);
        if (d !== void 0) return d;
        if ((d = o.get(f)) !== void 0) return (u(f, d), d);
      },
      set(f, d) {
        r.has(f) ? r.set(f, d) : u(f, d);
      },
    };
  },
  Of = "!",
  zf = ":",
  R0 = zf.length,
  T0 = (a) => {
    const { prefix: l, experimentalParseClassName: r } = a;
    let o = (u) => {
      const f = [];
      let d = 0,
        m = 0,
        p = 0,
        g;
      for (let S = 0; S < u.length; S++) {
        let w = u[S];
        if (d === 0 && m === 0) {
          if (w === zf) {
            (f.push(u.slice(p, S)), (p = S + R0));
            continue;
          }
          if (w === "/") {
            g = S;
            continue;
          }
        }
        w === "[" ? d++ : w === "]" ? d-- : w === "(" ? m++ : w === ")" && m--;
      }
      const v = f.length === 0 ? u : u.substring(p),
        A = O0(v),
        b = A !== v,
        _ = g && g > p ? g - p : void 0;
      return {
        modifiers: f,
        hasImportantModifier: b,
        baseClassName: A,
        maybePostfixModifierPosition: _,
      };
    };
    if (l) {
      const u = l + zf,
        f = o;
      o = (d) =>
        d.startsWith(u)
          ? f(d.substring(u.length))
          : {
              isExternal: !0,
              modifiers: [],
              hasImportantModifier: !1,
              baseClassName: d,
              maybePostfixModifierPosition: void 0,
            };
    }
    if (r) {
      const u = o;
      o = (f) => r({ className: f, parseClassName: u });
    }
    return o;
  },
  O0 = (a) =>
    a.endsWith(Of)
      ? a.substring(0, a.length - 1)
      : a.startsWith(Of)
        ? a.substring(1)
        : a,
  z0 = (a) => {
    const l = Object.fromEntries(a.orderSensitiveModifiers.map((o) => [o, !0]));
    return (o) => {
      if (o.length <= 1) return o;
      const u = [];
      let f = [];
      return (
        o.forEach((d) => {
          d[0] === "[" || l[d] ? (u.push(...f.sort(), d), (f = [])) : f.push(d);
        }),
        u.push(...f.sort()),
        u
      );
    };
  },
  M0 = (a) => ({
    cache: w0(a.cacheSize),
    parseClassName: T0(a),
    sortModifiers: z0(a),
    ...x0(a),
  }),
  D0 = /\s+/,
  B0 = (a, l) => {
    const {
        parseClassName: r,
        getClassGroupId: o,
        getConflictingClassGroupIds: u,
        sortModifiers: f,
      } = l,
      d = [],
      m = a.trim().split(D0);
    let p = "";
    for (let g = m.length - 1; g >= 0; g -= 1) {
      const v = m[g],
        {
          isExternal: A,
          modifiers: b,
          hasImportantModifier: _,
          baseClassName: S,
          maybePostfixModifierPosition: w,
        } = r(v);
      if (A) {
        p = v + (p.length > 0 ? " " + p : p);
        continue;
      }
      let Q = !!w,
        F = o(Q ? S.substring(0, w) : S);
      if (!F) {
        if (!Q) {
          p = v + (p.length > 0 ? " " + p : p);
          continue;
        }
        if (((F = o(S)), !F)) {
          p = v + (p.length > 0 ? " " + p : p);
          continue;
        }
        Q = !1;
      }
      const I = f(b).join(":"),
        N = _ ? I + Of : I,
        j = N + F;
      if (d.includes(j)) continue;
      d.push(j);
      const M = u(F, Q);
      for (let Y = 0; Y < M.length; ++Y) {
        const K = M[Y];
        d.push(N + K);
      }
      p = v + (p.length > 0 ? " " + p : p);
    }
    return p;
  };
function N0() {
  let a = 0,
    l,
    r,
    o = "";
  for (; a < arguments.length; )
    (l = arguments[a++]) && (r = ky(l)) && (o && (o += " "), (o += r));
  return o;
}
const ky = (a) => {
  if (typeof a == "string") return a;
  let l,
    r = "";
  for (let o = 0; o < a.length; o++)
    a[o] && (l = ky(a[o])) && (r && (r += " "), (r += l));
  return r;
};
function k0(a, ...l) {
  let r,
    o,
    u,
    f = d;
  function d(p) {
    const g = l.reduce((v, A) => A(v), a());
    return ((r = M0(g)), (o = r.cache.get), (u = r.cache.set), (f = m), m(p));
  }
  function m(p) {
    const g = o(p);
    if (g) return g;
    const v = B0(p, r);
    return (u(p, v), v);
  }
  return function () {
    return f(N0.apply(null, arguments));
  };
}
const Et = (a) => {
    const l = (r) => r[a] || [];
    return ((l.isThemeGetter = !0), l);
  },
  Ly = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
  Uy = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
  L0 = /^\d+\/\d+$/,
  U0 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  V0 =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  Q0 = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
  H0 = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  j0 =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  pl = (a) => L0.test(a),
  Me = (a) => !!a && !Number.isNaN(Number(a)),
  Wa = (a) => !!a && Number.isInteger(Number(a)),
  sf = (a) => a.endsWith("%") && Me(a.slice(0, -1)),
  Aa = (a) => U0.test(a),
  I0 = () => !0,
  G0 = (a) => V0.test(a) && !Q0.test(a),
  Vy = () => !1,
  Y0 = (a) => H0.test(a),
  q0 = (a) => j0.test(a),
  K0 = (a) => !ve(a) && !Ae(a),
  X0 = (a) => Cl(a, jy, Vy),
  ve = (a) => Ly.test(a),
  Ei = (a) => Cl(a, Iy, G0),
  uf = (a) => Cl(a, $0, Me),
  Ep = (a) => Cl(a, Qy, Vy),
  F0 = (a) => Cl(a, Hy, q0),
  is = (a) => Cl(a, Gy, Y0),
  Ae = (a) => Uy.test(a),
  Cr = (a) => wl(a, Iy),
  Z0 = (a) => wl(a, W0),
  Sp = (a) => wl(a, Qy),
  J0 = (a) => wl(a, jy),
  P0 = (a) => wl(a, Hy),
  ls = (a) => wl(a, Gy, !0),
  Cl = (a, l, r) => {
    const o = Ly.exec(a);
    return o ? (o[1] ? l(o[1]) : r(o[2])) : !1;
  },
  wl = (a, l, r = !1) => {
    const o = Uy.exec(a);
    return o ? (o[1] ? l(o[1]) : r) : !1;
  },
  Qy = (a) => a === "position" || a === "percentage",
  Hy = (a) => a === "image" || a === "url",
  jy = (a) => a === "length" || a === "size" || a === "bg-size",
  Iy = (a) => a === "length",
  $0 = (a) => a === "number",
  W0 = (a) => a === "family-name",
  Gy = (a) => a === "shadow",
  e_ = () => {
    const a = Et("color"),
      l = Et("font"),
      r = Et("text"),
      o = Et("font-weight"),
      u = Et("tracking"),
      f = Et("leading"),
      d = Et("breakpoint"),
      m = Et("container"),
      p = Et("spacing"),
      g = Et("radius"),
      v = Et("shadow"),
      A = Et("inset-shadow"),
      b = Et("text-shadow"),
      _ = Et("drop-shadow"),
      S = Et("blur"),
      w = Et("perspective"),
      Q = Et("aspect"),
      F = Et("ease"),
      I = Et("animate"),
      N = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      j = () => [
        "center",
        "top",
        "bottom",
        "left",
        "right",
        "top-left",
        "left-top",
        "top-right",
        "right-top",
        "bottom-right",
        "right-bottom",
        "bottom-left",
        "left-bottom",
      ],
      M = () => [...j(), Ae, ve],
      Y = () => ["auto", "hidden", "clip", "visible", "scroll"],
      K = () => ["auto", "contain", "none"],
      J = () => [Ae, ve, p],
      he = () => [pl, "full", "auto", ...J()],
      pe = () => [Wa, "none", "subgrid", Ae, ve],
      fe = () => ["auto", { span: ["full", Wa, Ae, ve] }, Wa, Ae, ve],
      Z = () => [Wa, "auto", Ae, ve],
      H = () => ["auto", "min", "max", "fr", Ae, ve],
      te = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
        "baseline",
        "center-safe",
        "end-safe",
      ],
      se = () => [
        "start",
        "end",
        "center",
        "stretch",
        "center-safe",
        "end-safe",
      ],
      O = () => ["auto", ...J()],
      D = () => [
        pl,
        "auto",
        "full",
        "dvw",
        "dvh",
        "lvw",
        "lvh",
        "svw",
        "svh",
        "min",
        "max",
        "fit",
        ...J(),
      ],
      z = () => [a, Ae, ve],
      le = () => [...j(), Sp, Ep, { position: [Ae, ve] }],
      ce = () => ["no-repeat", { repeat: ["", "x", "y", "space", "round"] }],
      x = () => ["auto", "cover", "contain", J0, X0, { size: [Ae, ve] }],
      k = () => [sf, Cr, Ei],
      P = () => ["", "none", "full", g, Ae, ve],
      ie = () => ["", Me, Cr, Ei],
      oe = () => ["solid", "dashed", "dotted", "double"],
      q = () => [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
      ],
      ae = () => [Me, sf, Sp, Ep],
      _e = () => ["", "none", S, Ae, ve],
      de = () => ["none", Me, Ae, ve],
      Ee = () => ["none", Me, Ae, ve],
      Le = () => [Me, Ae, ve],
      we = () => [pl, "full", ...J()];
    return {
      cacheSize: 500,
      theme: {
        animate: ["spin", "ping", "pulse", "bounce"],
        aspect: ["video"],
        blur: [Aa],
        breakpoint: [Aa],
        color: [I0],
        container: [Aa],
        "drop-shadow": [Aa],
        ease: ["in", "out", "in-out"],
        font: [K0],
        "font-weight": [
          "thin",
          "extralight",
          "light",
          "normal",
          "medium",
          "semibold",
          "bold",
          "extrabold",
          "black",
        ],
        "inset-shadow": [Aa],
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
        perspective: [
          "dramatic",
          "near",
          "normal",
          "midrange",
          "distant",
          "none",
        ],
        radius: [Aa],
        shadow: [Aa],
        spacing: ["px", Me],
        text: [Aa],
        "text-shadow": [Aa],
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"],
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", pl, ve, Ae, Q] }],
        container: ["container"],
        columns: [{ columns: [Me, ve, Ae, m] }],
        "break-after": [{ "break-after": N() }],
        "break-before": [{ "break-before": N() }],
        "break-inside": [
          { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
        ],
        "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
        box: [{ box: ["border", "content"] }],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden",
        ],
        sr: ["sr-only", "not-sr-only"],
        float: [{ float: ["right", "left", "none", "start", "end"] }],
        clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [
          { object: ["contain", "cover", "fill", "none", "scale-down"] },
        ],
        "object-position": [{ object: M() }],
        overflow: [{ overflow: Y() }],
        "overflow-x": [{ "overflow-x": Y() }],
        "overflow-y": [{ "overflow-y": Y() }],
        overscroll: [{ overscroll: K() }],
        "overscroll-x": [{ "overscroll-x": K() }],
        "overscroll-y": [{ "overscroll-y": K() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: he() }],
        "inset-x": [{ "inset-x": he() }],
        "inset-y": [{ "inset-y": he() }],
        start: [{ start: he() }],
        end: [{ end: he() }],
        top: [{ top: he() }],
        right: [{ right: he() }],
        bottom: [{ bottom: he() }],
        left: [{ left: he() }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: [Wa, "auto", Ae, ve] }],
        basis: [{ basis: [pl, "full", "auto", m, ...J()] }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["nowrap", "wrap", "wrap-reverse"] }],
        flex: [{ flex: [Me, pl, "auto", "initial", "none", ve] }],
        grow: [{ grow: ["", Me, Ae, ve] }],
        shrink: [{ shrink: ["", Me, Ae, ve] }],
        order: [{ order: [Wa, "first", "last", "none", Ae, ve] }],
        "grid-cols": [{ "grid-cols": pe() }],
        "col-start-end": [{ col: fe() }],
        "col-start": [{ "col-start": Z() }],
        "col-end": [{ "col-end": Z() }],
        "grid-rows": [{ "grid-rows": pe() }],
        "row-start-end": [{ row: fe() }],
        "row-start": [{ "row-start": Z() }],
        "row-end": [{ "row-end": Z() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": H() }],
        "auto-rows": [{ "auto-rows": H() }],
        gap: [{ gap: J() }],
        "gap-x": [{ "gap-x": J() }],
        "gap-y": [{ "gap-y": J() }],
        "justify-content": [{ justify: [...te(), "normal"] }],
        "justify-items": [{ "justify-items": [...se(), "normal"] }],
        "justify-self": [{ "justify-self": ["auto", ...se()] }],
        "align-content": [{ content: ["normal", ...te()] }],
        "align-items": [{ items: [...se(), { baseline: ["", "last"] }] }],
        "align-self": [{ self: ["auto", ...se(), { baseline: ["", "last"] }] }],
        "place-content": [{ "place-content": te() }],
        "place-items": [{ "place-items": [...se(), "baseline"] }],
        "place-self": [{ "place-self": ["auto", ...se()] }],
        p: [{ p: J() }],
        px: [{ px: J() }],
        py: [{ py: J() }],
        ps: [{ ps: J() }],
        pe: [{ pe: J() }],
        pt: [{ pt: J() }],
        pr: [{ pr: J() }],
        pb: [{ pb: J() }],
        pl: [{ pl: J() }],
        m: [{ m: O() }],
        mx: [{ mx: O() }],
        my: [{ my: O() }],
        ms: [{ ms: O() }],
        me: [{ me: O() }],
        mt: [{ mt: O() }],
        mr: [{ mr: O() }],
        mb: [{ mb: O() }],
        ml: [{ ml: O() }],
        "space-x": [{ "space-x": J() }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": J() }],
        "space-y-reverse": ["space-y-reverse"],
        size: [{ size: D() }],
        w: [{ w: [m, "screen", ...D()] }],
        "min-w": [{ "min-w": [m, "screen", "none", ...D()] }],
        "max-w": [
          { "max-w": [m, "screen", "none", "prose", { screen: [d] }, ...D()] },
        ],
        h: [{ h: ["screen", "lh", ...D()] }],
        "min-h": [{ "min-h": ["screen", "lh", "none", ...D()] }],
        "max-h": [{ "max-h": ["screen", "lh", ...D()] }],
        "font-size": [{ text: ["base", r, Cr, Ei] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [{ font: [o, Ae, uf] }],
        "font-stretch": [
          {
            "font-stretch": [
              "ultra-condensed",
              "extra-condensed",
              "condensed",
              "semi-condensed",
              "normal",
              "semi-expanded",
              "expanded",
              "extra-expanded",
              "ultra-expanded",
              sf,
              ve,
            ],
          },
        ],
        "font-family": [{ font: [Z0, ve, l] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        tracking: [{ tracking: [u, Ae, ve] }],
        "line-clamp": [{ "line-clamp": [Me, "none", Ae, uf] }],
        leading: [{ leading: [f, ...J()] }],
        "list-image": [{ "list-image": ["none", Ae, ve] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "list-style-type": [{ list: ["disc", "decimal", "none", Ae, ve] }],
        "text-alignment": [
          { text: ["left", "center", "right", "justify", "start", "end"] },
        ],
        "placeholder-color": [{ placeholder: z() }],
        "text-color": [{ text: z() }],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        "text-decoration-style": [{ decoration: [...oe(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: [Me, "from-font", "auto", Ae, Ei] },
        ],
        "text-decoration-color": [{ decoration: z() }],
        "underline-offset": [{ "underline-offset": [Me, "auto", Ae, ve] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: J() }],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              Ae,
              ve,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              "normal",
              "nowrap",
              "pre",
              "pre-line",
              "pre-wrap",
              "break-spaces",
            ],
          },
        ],
        break: [{ break: ["normal", "words", "all", "keep"] }],
        wrap: [{ wrap: ["break-word", "anywhere", "normal"] }],
        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
        content: [{ content: ["none", Ae, ve] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: le() }],
        "bg-repeat": [{ bg: ce() }],
        "bg-size": [{ bg: x() }],
        "bg-image": [
          {
            bg: [
              "none",
              {
                linear: [
                  { to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
                  Wa,
                  Ae,
                  ve,
                ],
                radial: ["", Ae, ve],
                conic: [Wa, Ae, ve],
              },
              P0,
              F0,
            ],
          },
        ],
        "bg-color": [{ bg: z() }],
        "gradient-from-pos": [{ from: k() }],
        "gradient-via-pos": [{ via: k() }],
        "gradient-to-pos": [{ to: k() }],
        "gradient-from": [{ from: z() }],
        "gradient-via": [{ via: z() }],
        "gradient-to": [{ to: z() }],
        rounded: [{ rounded: P() }],
        "rounded-s": [{ "rounded-s": P() }],
        "rounded-e": [{ "rounded-e": P() }],
        "rounded-t": [{ "rounded-t": P() }],
        "rounded-r": [{ "rounded-r": P() }],
        "rounded-b": [{ "rounded-b": P() }],
        "rounded-l": [{ "rounded-l": P() }],
        "rounded-ss": [{ "rounded-ss": P() }],
        "rounded-se": [{ "rounded-se": P() }],
        "rounded-ee": [{ "rounded-ee": P() }],
        "rounded-es": [{ "rounded-es": P() }],
        "rounded-tl": [{ "rounded-tl": P() }],
        "rounded-tr": [{ "rounded-tr": P() }],
        "rounded-br": [{ "rounded-br": P() }],
        "rounded-bl": [{ "rounded-bl": P() }],
        "border-w": [{ border: ie() }],
        "border-w-x": [{ "border-x": ie() }],
        "border-w-y": [{ "border-y": ie() }],
        "border-w-s": [{ "border-s": ie() }],
        "border-w-e": [{ "border-e": ie() }],
        "border-w-t": [{ "border-t": ie() }],
        "border-w-r": [{ "border-r": ie() }],
        "border-w-b": [{ "border-b": ie() }],
        "border-w-l": [{ "border-l": ie() }],
        "divide-x": [{ "divide-x": ie() }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": ie() }],
        "divide-y-reverse": ["divide-y-reverse"],
        "border-style": [{ border: [...oe(), "hidden", "none"] }],
        "divide-style": [{ divide: [...oe(), "hidden", "none"] }],
        "border-color": [{ border: z() }],
        "border-color-x": [{ "border-x": z() }],
        "border-color-y": [{ "border-y": z() }],
        "border-color-s": [{ "border-s": z() }],
        "border-color-e": [{ "border-e": z() }],
        "border-color-t": [{ "border-t": z() }],
        "border-color-r": [{ "border-r": z() }],
        "border-color-b": [{ "border-b": z() }],
        "border-color-l": [{ "border-l": z() }],
        "divide-color": [{ divide: z() }],
        "outline-style": [{ outline: [...oe(), "none", "hidden"] }],
        "outline-offset": [{ "outline-offset": [Me, Ae, ve] }],
        "outline-w": [{ outline: ["", Me, Cr, Ei] }],
        "outline-color": [{ outline: z() }],
        shadow: [{ shadow: ["", "none", v, ls, is] }],
        "shadow-color": [{ shadow: z() }],
        "inset-shadow": [{ "inset-shadow": ["none", A, ls, is] }],
        "inset-shadow-color": [{ "inset-shadow": z() }],
        "ring-w": [{ ring: ie() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: z() }],
        "ring-offset-w": [{ "ring-offset": [Me, Ei] }],
        "ring-offset-color": [{ "ring-offset": z() }],
        "inset-ring-w": [{ "inset-ring": ie() }],
        "inset-ring-color": [{ "inset-ring": z() }],
        "text-shadow": [{ "text-shadow": ["none", b, ls, is] }],
        "text-shadow-color": [{ "text-shadow": z() }],
        opacity: [{ opacity: [Me, Ae, ve] }],
        "mix-blend": [{ "mix-blend": [...q(), "plus-darker", "plus-lighter"] }],
        "bg-blend": [{ "bg-blend": q() }],
        "mask-clip": [
          {
            "mask-clip": [
              "border",
              "padding",
              "content",
              "fill",
              "stroke",
              "view",
            ],
          },
          "mask-no-clip",
        ],
        "mask-composite": [
          { mask: ["add", "subtract", "intersect", "exclude"] },
        ],
        "mask-image-linear-pos": [{ "mask-linear": [Me] }],
        "mask-image-linear-from-pos": [{ "mask-linear-from": ae() }],
        "mask-image-linear-to-pos": [{ "mask-linear-to": ae() }],
        "mask-image-linear-from-color": [{ "mask-linear-from": z() }],
        "mask-image-linear-to-color": [{ "mask-linear-to": z() }],
        "mask-image-t-from-pos": [{ "mask-t-from": ae() }],
        "mask-image-t-to-pos": [{ "mask-t-to": ae() }],
        "mask-image-t-from-color": [{ "mask-t-from": z() }],
        "mask-image-t-to-color": [{ "mask-t-to": z() }],
        "mask-image-r-from-pos": [{ "mask-r-from": ae() }],
        "mask-image-r-to-pos": [{ "mask-r-to": ae() }],
        "mask-image-r-from-color": [{ "mask-r-from": z() }],
        "mask-image-r-to-color": [{ "mask-r-to": z() }],
        "mask-image-b-from-pos": [{ "mask-b-from": ae() }],
        "mask-image-b-to-pos": [{ "mask-b-to": ae() }],
        "mask-image-b-from-color": [{ "mask-b-from": z() }],
        "mask-image-b-to-color": [{ "mask-b-to": z() }],
        "mask-image-l-from-pos": [{ "mask-l-from": ae() }],
        "mask-image-l-to-pos": [{ "mask-l-to": ae() }],
        "mask-image-l-from-color": [{ "mask-l-from": z() }],
        "mask-image-l-to-color": [{ "mask-l-to": z() }],
        "mask-image-x-from-pos": [{ "mask-x-from": ae() }],
        "mask-image-x-to-pos": [{ "mask-x-to": ae() }],
        "mask-image-x-from-color": [{ "mask-x-from": z() }],
        "mask-image-x-to-color": [{ "mask-x-to": z() }],
        "mask-image-y-from-pos": [{ "mask-y-from": ae() }],
        "mask-image-y-to-pos": [{ "mask-y-to": ae() }],
        "mask-image-y-from-color": [{ "mask-y-from": z() }],
        "mask-image-y-to-color": [{ "mask-y-to": z() }],
        "mask-image-radial": [{ "mask-radial": [Ae, ve] }],
        "mask-image-radial-from-pos": [{ "mask-radial-from": ae() }],
        "mask-image-radial-to-pos": [{ "mask-radial-to": ae() }],
        "mask-image-radial-from-color": [{ "mask-radial-from": z() }],
        "mask-image-radial-to-color": [{ "mask-radial-to": z() }],
        "mask-image-radial-shape": [{ "mask-radial": ["circle", "ellipse"] }],
        "mask-image-radial-size": [
          {
            "mask-radial": [
              { closest: ["side", "corner"], farthest: ["side", "corner"] },
            ],
          },
        ],
        "mask-image-radial-pos": [{ "mask-radial-at": j() }],
        "mask-image-conic-pos": [{ "mask-conic": [Me] }],
        "mask-image-conic-from-pos": [{ "mask-conic-from": ae() }],
        "mask-image-conic-to-pos": [{ "mask-conic-to": ae() }],
        "mask-image-conic-from-color": [{ "mask-conic-from": z() }],
        "mask-image-conic-to-color": [{ "mask-conic-to": z() }],
        "mask-mode": [{ mask: ["alpha", "luminance", "match"] }],
        "mask-origin": [
          {
            "mask-origin": [
              "border",
              "padding",
              "content",
              "fill",
              "stroke",
              "view",
            ],
          },
        ],
        "mask-position": [{ mask: le() }],
        "mask-repeat": [{ mask: ce() }],
        "mask-size": [{ mask: x() }],
        "mask-type": [{ "mask-type": ["alpha", "luminance"] }],
        "mask-image": [{ mask: ["none", Ae, ve] }],
        filter: [{ filter: ["", "none", Ae, ve] }],
        blur: [{ blur: _e() }],
        brightness: [{ brightness: [Me, Ae, ve] }],
        contrast: [{ contrast: [Me, Ae, ve] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", _, ls, is] }],
        "drop-shadow-color": [{ "drop-shadow": z() }],
        grayscale: [{ grayscale: ["", Me, Ae, ve] }],
        "hue-rotate": [{ "hue-rotate": [Me, Ae, ve] }],
        invert: [{ invert: ["", Me, Ae, ve] }],
        saturate: [{ saturate: [Me, Ae, ve] }],
        sepia: [{ sepia: ["", Me, Ae, ve] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none", Ae, ve] }],
        "backdrop-blur": [{ "backdrop-blur": _e() }],
        "backdrop-brightness": [{ "backdrop-brightness": [Me, Ae, ve] }],
        "backdrop-contrast": [{ "backdrop-contrast": [Me, Ae, ve] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": ["", Me, Ae, ve] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [Me, Ae, ve] }],
        "backdrop-invert": [{ "backdrop-invert": ["", Me, Ae, ve] }],
        "backdrop-opacity": [{ "backdrop-opacity": [Me, Ae, ve] }],
        "backdrop-saturate": [{ "backdrop-saturate": [Me, Ae, ve] }],
        "backdrop-sepia": [{ "backdrop-sepia": ["", Me, Ae, ve] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": J() }],
        "border-spacing-x": [{ "border-spacing-x": J() }],
        "border-spacing-y": [{ "border-spacing-y": J() }],
        "table-layout": [{ table: ["auto", "fixed"] }],
        caption: [{ caption: ["top", "bottom"] }],
        transition: [
          {
            transition: [
              "",
              "all",
              "colors",
              "opacity",
              "shadow",
              "transform",
              "none",
              Ae,
              ve,
            ],
          },
        ],
        "transition-behavior": [{ transition: ["normal", "discrete"] }],
        duration: [{ duration: [Me, "initial", Ae, ve] }],
        ease: [{ ease: ["linear", "initial", F, Ae, ve] }],
        delay: [{ delay: [Me, Ae, ve] }],
        animate: [{ animate: ["none", I, Ae, ve] }],
        backface: [{ backface: ["hidden", "visible"] }],
        perspective: [{ perspective: [w, Ae, ve] }],
        "perspective-origin": [{ "perspective-origin": M() }],
        rotate: [{ rotate: de() }],
        "rotate-x": [{ "rotate-x": de() }],
        "rotate-y": [{ "rotate-y": de() }],
        "rotate-z": [{ "rotate-z": de() }],
        scale: [{ scale: Ee() }],
        "scale-x": [{ "scale-x": Ee() }],
        "scale-y": [{ "scale-y": Ee() }],
        "scale-z": [{ "scale-z": Ee() }],
        "scale-3d": ["scale-3d"],
        skew: [{ skew: Le() }],
        "skew-x": [{ "skew-x": Le() }],
        "skew-y": [{ "skew-y": Le() }],
        transform: [{ transform: [Ae, ve, "", "none", "gpu", "cpu"] }],
        "transform-origin": [{ origin: M() }],
        "transform-style": [{ transform: ["3d", "flat"] }],
        translate: [{ translate: we() }],
        "translate-x": [{ "translate-x": we() }],
        "translate-y": [{ "translate-y": we() }],
        "translate-z": [{ "translate-z": we() }],
        "translate-none": ["translate-none"],
        accent: [{ accent: z() }],
        appearance: [{ appearance: ["none", "auto"] }],
        "caret-color": [{ caret: z() }],
        "color-scheme": [
          {
            scheme: [
              "normal",
              "dark",
              "light",
              "light-dark",
              "only-dark",
              "only-light",
            ],
          },
        ],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              Ae,
              ve,
            ],
          },
        ],
        "field-sizing": [{ "field-sizing": ["fixed", "content"] }],
        "pointer-events": [{ "pointer-events": ["auto", "none"] }],
        resize: [{ resize: ["none", "", "y", "x"] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": J() }],
        "scroll-mx": [{ "scroll-mx": J() }],
        "scroll-my": [{ "scroll-my": J() }],
        "scroll-ms": [{ "scroll-ms": J() }],
        "scroll-me": [{ "scroll-me": J() }],
        "scroll-mt": [{ "scroll-mt": J() }],
        "scroll-mr": [{ "scroll-mr": J() }],
        "scroll-mb": [{ "scroll-mb": J() }],
        "scroll-ml": [{ "scroll-ml": J() }],
        "scroll-p": [{ "scroll-p": J() }],
        "scroll-px": [{ "scroll-px": J() }],
        "scroll-py": [{ "scroll-py": J() }],
        "scroll-ps": [{ "scroll-ps": J() }],
        "scroll-pe": [{ "scroll-pe": J() }],
        "scroll-pt": [{ "scroll-pt": J() }],
        "scroll-pr": [{ "scroll-pr": J() }],
        "scroll-pb": [{ "scroll-pb": J() }],
        "scroll-pl": [{ "scroll-pl": J() }],
        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
        "snap-stop": [{ snap: ["normal", "always"] }],
        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
        touch: [{ touch: ["auto", "none", "manipulation"] }],
        "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
        "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{ select: ["none", "text", "all", "auto"] }],
        "will-change": [
          {
            "will-change": ["auto", "scroll", "contents", "transform", Ae, ve],
          },
        ],
        fill: [{ fill: ["none", ...z()] }],
        "stroke-w": [{ stroke: [Me, Cr, Ei, uf] }],
        stroke: [{ stroke: ["none", ...z()] }],
        "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: [
          "inset-x",
          "inset-y",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left",
        ],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction",
        ],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl",
        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": [
          "border-w-x",
          "border-w-y",
          "border-w-s",
          "border-w-e",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l",
        ],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": [
          "border-color-x",
          "border-color-y",
          "border-color-s",
          "border-color-e",
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l",
        ],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        translate: ["translate-x", "translate-y", "translate-none"],
        "translate-none": [
          "translate",
          "translate-x",
          "translate-y",
          "translate-z",
        ],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml",
        ],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl",
        ],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"],
      },
      conflictingClassGroupModifiers: { "font-size": ["leading"] },
      orderSensitiveModifiers: [
        "*",
        "**",
        "after",
        "backdrop",
        "before",
        "details-content",
        "file",
        "first-letter",
        "first-line",
        "marker",
        "placeholder",
        "selection",
      ],
    };
  },
  aw = k0(e_);
var cf = { exports: {} },
  Re = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Cp;
function t_() {
  if (Cp) return Re;
  Cp = 1;
  var a = Symbol.for("react.transitional.element"),
    l = Symbol.for("react.portal"),
    r = Symbol.for("react.fragment"),
    o = Symbol.for("react.strict_mode"),
    u = Symbol.for("react.profiler"),
    f = Symbol.for("react.consumer"),
    d = Symbol.for("react.context"),
    m = Symbol.for("react.forward_ref"),
    p = Symbol.for("react.suspense"),
    g = Symbol.for("react.memo"),
    v = Symbol.for("react.lazy"),
    A = Symbol.for("react.activity"),
    b = Symbol.iterator;
  function _(x) {
    return x === null || typeof x != "object"
      ? null
      : ((x = (b && x[b]) || x["@@iterator"]),
        typeof x == "function" ? x : null);
  }
  var S = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    w = Object.assign,
    Q = {};
  function F(x, k, P) {
    ((this.props = x),
      (this.context = k),
      (this.refs = Q),
      (this.updater = P || S));
  }
  ((F.prototype.isReactComponent = {}),
    (F.prototype.setState = function (x, k) {
      if (typeof x != "object" && typeof x != "function" && x != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, x, k, "setState");
    }),
    (F.prototype.forceUpdate = function (x) {
      this.updater.enqueueForceUpdate(this, x, "forceUpdate");
    }));
  function I() {}
  I.prototype = F.prototype;
  function N(x, k, P) {
    ((this.props = x),
      (this.context = k),
      (this.refs = Q),
      (this.updater = P || S));
  }
  var j = (N.prototype = new I());
  ((j.constructor = N), w(j, F.prototype), (j.isPureReactComponent = !0));
  var M = Array.isArray;
  function Y() {}
  var K = { H: null, A: null, T: null, S: null },
    J = Object.prototype.hasOwnProperty;
  function he(x, k, P) {
    var ie = P.ref;
    return {
      $$typeof: a,
      type: x,
      key: k,
      ref: ie !== void 0 ? ie : null,
      props: P,
    };
  }
  function pe(x, k) {
    return he(x.type, k, x.props);
  }
  function fe(x) {
    return typeof x == "object" && x !== null && x.$$typeof === a;
  }
  function Z(x) {
    var k = { "=": "=0", ":": "=2" };
    return (
      "$" +
      x.replace(/[=:]/g, function (P) {
        return k[P];
      })
    );
  }
  var H = /\/+/g;
  function te(x, k) {
    return typeof x == "object" && x !== null && x.key != null
      ? Z("" + x.key)
      : k.toString(36);
  }
  function se(x) {
    switch (x.status) {
      case "fulfilled":
        return x.value;
      case "rejected":
        throw x.reason;
      default:
        switch (
          (typeof x.status == "string"
            ? x.then(Y, Y)
            : ((x.status = "pending"),
              x.then(
                function (k) {
                  x.status === "pending" &&
                    ((x.status = "fulfilled"), (x.value = k));
                },
                function (k) {
                  x.status === "pending" &&
                    ((x.status = "rejected"), (x.reason = k));
                }
              )),
          x.status)
        ) {
          case "fulfilled":
            return x.value;
          case "rejected":
            throw x.reason;
        }
    }
    throw x;
  }
  function O(x, k, P, ie, oe) {
    var q = typeof x;
    (q === "undefined" || q === "boolean") && (x = null);
    var ae = !1;
    if (x === null) ae = !0;
    else
      switch (q) {
        case "bigint":
        case "string":
        case "number":
          ae = !0;
          break;
        case "object":
          switch (x.$$typeof) {
            case a:
            case l:
              ae = !0;
              break;
            case v:
              return ((ae = x._init), O(ae(x._payload), k, P, ie, oe));
          }
      }
    if (ae)
      return (
        (oe = oe(x)),
        (ae = ie === "" ? "." + te(x, 0) : ie),
        M(oe)
          ? ((P = ""),
            ae != null && (P = ae.replace(H, "$&/") + "/"),
            O(oe, k, P, "", function (Ee) {
              return Ee;
            }))
          : oe != null &&
            (fe(oe) &&
              (oe = pe(
                oe,
                P +
                  (oe.key == null || (x && x.key === oe.key)
                    ? ""
                    : ("" + oe.key).replace(H, "$&/") + "/") +
                  ae
              )),
            k.push(oe)),
        1
      );
    ae = 0;
    var _e = ie === "" ? "." : ie + ":";
    if (M(x))
      for (var de = 0; de < x.length; de++)
        ((ie = x[de]), (q = _e + te(ie, de)), (ae += O(ie, k, P, q, oe)));
    else if (((de = _(x)), typeof de == "function"))
      for (x = de.call(x), de = 0; !(ie = x.next()).done; )
        ((ie = ie.value), (q = _e + te(ie, de++)), (ae += O(ie, k, P, q, oe)));
    else if (q === "object") {
      if (typeof x.then == "function") return O(se(x), k, P, ie, oe);
      throw (
        (k = String(x)),
        Error(
          "Objects are not valid as a React child (found: " +
            (k === "[object Object]"
              ? "object with keys {" + Object.keys(x).join(", ") + "}"
              : k) +
            "). If you meant to render a collection of children, use an array instead."
        )
      );
    }
    return ae;
  }
  function D(x, k, P) {
    if (x == null) return x;
    var ie = [],
      oe = 0;
    return (
      O(x, ie, "", "", function (q) {
        return k.call(P, q, oe++);
      }),
      ie
    );
  }
  function z(x) {
    if (x._status === -1) {
      var k = x._result;
      ((k = k()),
        k.then(
          function (P) {
            (x._status === 0 || x._status === -1) &&
              ((x._status = 1), (x._result = P));
          },
          function (P) {
            (x._status === 0 || x._status === -1) &&
              ((x._status = 2), (x._result = P));
          }
        ),
        x._status === -1 && ((x._status = 0), (x._result = k)));
    }
    if (x._status === 1) return x._result.default;
    throw x._result;
  }
  var le =
      typeof reportError == "function"
        ? reportError
        : function (x) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var k = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof x == "object" &&
                  x !== null &&
                  typeof x.message == "string"
                    ? String(x.message)
                    : String(x),
                error: x,
              });
              if (!window.dispatchEvent(k)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", x);
              return;
            }
            console.error(x);
          },
    ce = {
      map: D,
      forEach: function (x, k, P) {
        D(
          x,
          function () {
            k.apply(this, arguments);
          },
          P
        );
      },
      count: function (x) {
        var k = 0;
        return (
          D(x, function () {
            k++;
          }),
          k
        );
      },
      toArray: function (x) {
        return (
          D(x, function (k) {
            return k;
          }) || []
        );
      },
      only: function (x) {
        if (!fe(x))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return x;
      },
    };
  return (
    (Re.Activity = A),
    (Re.Children = ce),
    (Re.Component = F),
    (Re.Fragment = r),
    (Re.Profiler = u),
    (Re.PureComponent = N),
    (Re.StrictMode = o),
    (Re.Suspense = p),
    (Re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = K),
    (Re.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (x) {
        return K.H.useMemoCache(x);
      },
    }),
    (Re.cache = function (x) {
      return function () {
        return x.apply(null, arguments);
      };
    }),
    (Re.cacheSignal = function () {
      return null;
    }),
    (Re.cloneElement = function (x, k, P) {
      if (x == null)
        throw Error(
          "The argument must be a React element, but you passed " + x + "."
        );
      var ie = w({}, x.props),
        oe = x.key;
      if (k != null)
        for (q in (k.key !== void 0 && (oe = "" + k.key), k))
          !J.call(k, q) ||
            q === "key" ||
            q === "__self" ||
            q === "__source" ||
            (q === "ref" && k.ref === void 0) ||
            (ie[q] = k[q]);
      var q = arguments.length - 2;
      if (q === 1) ie.children = P;
      else if (1 < q) {
        for (var ae = Array(q), _e = 0; _e < q; _e++)
          ae[_e] = arguments[_e + 2];
        ie.children = ae;
      }
      return he(x.type, oe, ie);
    }),
    (Re.createContext = function (x) {
      return (
        (x = {
          $$typeof: d,
          _currentValue: x,
          _currentValue2: x,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (x.Provider = x),
        (x.Consumer = { $$typeof: f, _context: x }),
        x
      );
    }),
    (Re.createElement = function (x, k, P) {
      var ie,
        oe = {},
        q = null;
      if (k != null)
        for (ie in (k.key !== void 0 && (q = "" + k.key), k))
          J.call(k, ie) &&
            ie !== "key" &&
            ie !== "__self" &&
            ie !== "__source" &&
            (oe[ie] = k[ie]);
      var ae = arguments.length - 2;
      if (ae === 1) oe.children = P;
      else if (1 < ae) {
        for (var _e = Array(ae), de = 0; de < ae; de++)
          _e[de] = arguments[de + 2];
        oe.children = _e;
      }
      if (x && x.defaultProps)
        for (ie in ((ae = x.defaultProps), ae))
          oe[ie] === void 0 && (oe[ie] = ae[ie]);
      return he(x, q, oe);
    }),
    (Re.createRef = function () {
      return { current: null };
    }),
    (Re.forwardRef = function (x) {
      return { $$typeof: m, render: x };
    }),
    (Re.isValidElement = fe),
    (Re.lazy = function (x) {
      return { $$typeof: v, _payload: { _status: -1, _result: x }, _init: z };
    }),
    (Re.memo = function (x, k) {
      return { $$typeof: g, type: x, compare: k === void 0 ? null : k };
    }),
    (Re.startTransition = function (x) {
      var k = K.T,
        P = {};
      K.T = P;
      try {
        var ie = x(),
          oe = K.S;
        (oe !== null && oe(P, ie),
          typeof ie == "object" &&
            ie !== null &&
            typeof ie.then == "function" &&
            ie.then(Y, le));
      } catch (q) {
        le(q);
      } finally {
        (k !== null && P.types !== null && (k.types = P.types), (K.T = k));
      }
    }),
    (Re.unstable_useCacheRefresh = function () {
      return K.H.useCacheRefresh();
    }),
    (Re.use = function (x) {
      return K.H.use(x);
    }),
    (Re.useActionState = function (x, k, P) {
      return K.H.useActionState(x, k, P);
    }),
    (Re.useCallback = function (x, k) {
      return K.H.useCallback(x, k);
    }),
    (Re.useContext = function (x) {
      return K.H.useContext(x);
    }),
    (Re.useDebugValue = function () {}),
    (Re.useDeferredValue = function (x, k) {
      return K.H.useDeferredValue(x, k);
    }),
    (Re.useEffect = function (x, k) {
      return K.H.useEffect(x, k);
    }),
    (Re.useEffectEvent = function (x) {
      return K.H.useEffectEvent(x);
    }),
    (Re.useId = function () {
      return K.H.useId();
    }),
    (Re.useImperativeHandle = function (x, k, P) {
      return K.H.useImperativeHandle(x, k, P);
    }),
    (Re.useInsertionEffect = function (x, k) {
      return K.H.useInsertionEffect(x, k);
    }),
    (Re.useLayoutEffect = function (x, k) {
      return K.H.useLayoutEffect(x, k);
    }),
    (Re.useMemo = function (x, k) {
      return K.H.useMemo(x, k);
    }),
    (Re.useOptimistic = function (x, k) {
      return K.H.useOptimistic(x, k);
    }),
    (Re.useReducer = function (x, k, P) {
      return K.H.useReducer(x, k, P);
    }),
    (Re.useRef = function (x) {
      return K.H.useRef(x);
    }),
    (Re.useState = function (x) {
      return K.H.useState(x);
    }),
    (Re.useSyncExternalStore = function (x, k, P) {
      return K.H.useSyncExternalStore(x, k, P);
    }),
    (Re.useTransition = function () {
      return K.H.useTransition();
    }),
    (Re.version = "19.2.0"),
    Re
  );
}
var wp;
function ks() {
  return (wp || ((wp = 1), (cf.exports = t_())), cf.exports);
}
var T = ks();
const De = Ns(T),
  Yy = v0({ __proto__: null, default: De }, [T]),
  Rp = {};
function Rl(a, l) {
  const r = T.useRef(Rp);
  return (r.current === Rp && (r.current = a(l)), r);
}
function Tp(a, l, r, o) {
  const u = Rl(qy).current;
  return (a_(u, a, l, r, o) && Ky(u, [a, l, r, o]), u.callback);
}
function n_(a) {
  const l = Rl(qy).current;
  return (i_(l, a) && Ky(l, a), l.callback);
}
function qy() {
  return { callback: null, cleanup: null, refs: [] };
}
function a_(a, l, r, o, u) {
  return (
    a.refs[0] !== l || a.refs[1] !== r || a.refs[2] !== o || a.refs[3] !== u
  );
}
function i_(a, l) {
  return a.refs.length !== l.length || a.refs.some((r, o) => r !== l[o]);
}
function Ky(a, l) {
  if (((a.refs = l), l.every((r) => r == null))) {
    a.callback = null;
    return;
  }
  a.callback = (r) => {
    if ((a.cleanup && (a.cleanup(), (a.cleanup = null)), r != null)) {
      const o = Array(l.length).fill(null);
      for (let u = 0; u < l.length; u += 1) {
        const f = l[u];
        if (f != null)
          switch (typeof f) {
            case "function": {
              const d = f(r);
              typeof d == "function" && (o[u] = d);
              break;
            }
            case "object": {
              f.current = r;
              break;
            }
          }
      }
      a.cleanup = () => {
        for (let u = 0; u < l.length; u += 1) {
          const f = l[u];
          if (f != null)
            switch (typeof f) {
              case "function": {
                const d = o[u];
                typeof d == "function" ? d() : f(null);
                break;
              }
              case "object": {
                f.current = null;
                break;
              }
            }
        }
      };
    }
  };
}
const l_ = parseInt(T.version, 10);
function r_(a) {
  return l_ >= a;
}
function Xy(a, l) {
  if (a && !l) return a;
  if (!a && l) return l;
  if (a || l) return { ...a, ...l };
}
function o_(a, l) {
  const r = {};
  for (const o in a) {
    const u = a[o];
    if (l?.hasOwnProperty(o)) {
      const f = l[o](u);
      f != null && Object.assign(r, f);
      continue;
    }
    u === !0
      ? (r[`data-${o.toLowerCase()}`] = "")
      : u && (r[`data-${o.toLowerCase()}`] = u.toString());
  }
  return r;
}
function s_(a, l) {
  return typeof a == "function" ? a(l) : a;
}
const Mr = {};
function Mf(a, l, r, o, u) {
  let f = { ...Df(a, Mr) };
  return (l && (f = Fy(f, l)), f);
}
function u_(a) {
  if (a.length === 0) return Mr;
  if (a.length === 1) return Df(a[0], Mr);
  let l = { ...Df(a[0], Mr) };
  for (let r = 1; r < a.length; r += 1) l = Fy(l, a[r]);
  return l;
}
function Fy(a, l) {
  return Zy(l) ? l(a) : c_(a, l);
}
function c_(a, l) {
  if (!l) return a;
  for (const r in l) {
    const o = l[r];
    switch (r) {
      case "style": {
        a[r] = Xy(a.style, o);
        break;
      }
      case "className": {
        a[r] = Jy(a.className, o);
        break;
      }
      default:
        f_(r, o) ? (a[r] = d_(a[r], o)) : (a[r] = o);
    }
  }
  return a;
}
function f_(a, l) {
  const r = a.charCodeAt(0),
    o = a.charCodeAt(1),
    u = a.charCodeAt(2);
  return (
    r === 111 &&
    o === 110 &&
    u >= 65 &&
    u <= 90 &&
    (typeof l == "function" || typeof l > "u")
  );
}
function Zy(a) {
  return typeof a == "function";
}
function Df(a, l) {
  return Zy(a) ? a(l) : (a ?? Mr);
}
function d_(a, l) {
  return l
    ? a
      ? (r) => {
          if (m_(r)) {
            const u = r;
            h_(u);
            const f = l(u);
            return (u.baseUIHandlerPrevented || a?.(u), f);
          }
          const o = l(r);
          return (a?.(r), o);
        }
      : l
    : a;
}
function h_(a) {
  return (
    (a.preventBaseUIHandler = () => {
      a.baseUIHandlerPrevented = !0;
    }),
    a
  );
}
function Jy(a, l) {
  return l ? (a ? l + " " + a : l) : a;
}
function m_(a) {
  return a != null && typeof a == "object" && "nativeEvent" in a;
}
function Vn() {}
const ti = Object.freeze({}),
  g_ = { style: { transition: "none" } },
  p_ = { fallbackAxisSide: "end" };
function Jn(a, l, r = {}) {
  const o = l.render,
    u = y_(l, r);
  if (r.enabled === !1) return null;
  const f = r.state ?? ti;
  return v_(a, o, u, f);
}
function y_(a, l = {}) {
  const { className: r, render: o } = a,
    {
      state: u = ti,
      ref: f,
      props: d,
      stateAttributesMapping: m,
      enabled: p = !0,
    } = l,
    g = p ? s_(r, u) : void 0,
    v = p ? o_(u, m) : ti,
    A = p ? (Xy(v, Array.isArray(d) ? u_(d) : d) ?? ti) : ti;
  return (
    typeof document < "u" &&
      (p
        ? Array.isArray(f)
          ? (A.ref = n_([A.ref, Op(o), ...f]))
          : (A.ref = Tp(A.ref, Op(o), f))
        : Tp(null, null)),
    p ? (g !== void 0 && (A.className = Jy(A.className, g)), A) : ti
  );
}
function v_(a, l, r, o) {
  if (l) {
    if (typeof l == "function") return l(r, o);
    const u = Mf(r, l.props);
    return ((u.ref = r.ref), T.cloneElement(l, u));
  }
  if (a && typeof a == "string") return A_(a, r);
  throw new Error("Base UI: Render element or function are not defined.");
}
function A_(a, l) {
  return a === "button"
    ? jn.jsx("button", { type: "button", ...l })
    : a === "img"
      ? jn.jsx("img", { alt: "", ...l })
      : T.createElement(a, l);
}
function Op(a) {
  return a && typeof a != "function" ? (r_(19) ? a.props.ref : a.ref) : null;
}
function iw(a) {
  return Jn(a.defaultTagName ?? "div", a, a);
}
const zp = (a) => (typeof a == "boolean" ? `${a}` : a === 0 ? "0" : a),
  Mp = _0,
  lw = (a, l) => (r) => {
    var o;
    if (l?.variants == null) return Mp(a, r?.class, r?.className);
    const { variants: u, defaultVariants: f } = l,
      d = Object.keys(u).map((g) => {
        const v = r?.[g],
          A = f?.[g];
        if (v === null) return null;
        const b = zp(v) || zp(A);
        return u[g][b];
      }),
      m =
        r &&
        Object.entries(r).reduce((g, v) => {
          let [A, b] = v;
          return (b === void 0 || (g[A] = b), g);
        }, {}),
      p =
        l == null || (o = l.compoundVariants) === null || o === void 0
          ? void 0
          : o.reduce((g, v) => {
              let { class: A, className: b, ..._ } = v;
              return Object.entries(_).every((S) => {
                let [w, Q] = S;
                return Array.isArray(Q)
                  ? Q.includes({ ...f, ...m }[w])
                  : { ...f, ...m }[w] === Q;
              })
                ? [...g, A, b]
                : g;
            }, []);
    return Mp(a, d, p, r?.class, r?.className);
  },
  Py = { PICK_COUNTRY_CODE: "pick-country-code" },
  td = {
    LOGIN: "login",
    LOGIN_ID: "login-id",
    LOGIN_PASSWORD: "login-password",
  };
let b_ = class Bf {
    settings;
    themes;
    constructor(l) {
      ((this.settings = Bf.getSettings(l)), (this.themes = Bf.getThemes(l)));
    }
    static getSettings(l) {
      if (!l?.settings) return null;
      const { colors: r, favicon_url: o, logo_url: u, font: f } = l.settings;
      return {
        ...(r && {
          colors: {
            primary: r.primary,
            pageBackground:
              typeof r.page_background == "string"
                ? r.page_background
                : r.page_background && {
                    type: r.page_background.type,
                    start: r.page_background.start,
                    end: r.page_background.end,
                    angleDegree: r.page_background.angle_deg,
                  },
          },
        }),
        ...(typeof o == "string" && o.length > 0 ? { faviconUrl: o } : {}),
        ...(typeof u == "string" && u.length > 0 ? { logoUrl: u } : {}),
        ...(typeof f?.url == "string" && f.url.length > 0
          ? { fontUrl: f.url }
          : {}),
      };
    }
    static getThemes(l) {
      if (!l?.themes) return null;
      const {
        default: {
          borders: r = {},
          colors: o = {},
          displayName: u = "",
          fonts: f = {},
          page_background: d = {},
          widget: m = {},
        } = {},
      } = l.themes;
      return {
        default: {
          borders: r,
          colors: o,
          displayName: u,
          fonts: f,
          pageBackground: d,
          widget: m,
        },
      };
    }
  },
  __ = class {
    id;
    name;
    logoUrl;
    description;
    metadata;
    constructor(l) {
      ((this.id = l?.id),
        (this.name = l?.name),
        (this.logoUrl = l?.logo_uri ?? null),
        (this.description = l?.description ?? null),
        (this.metadata = l?.metadata ?? null));
    }
  },
  x_ = class {
    id;
    name;
    usage;
    displayName;
    branding;
    metadata;
    constructor(l) {
      ((this.id = l?.id ?? null),
        (this.name = l?.name ?? null),
        (this.usage = l?.usage ?? null),
        (this.displayName = l?.display_name ?? null),
        (this.branding = l?.branding ?? null),
        (this.metadata = l?.metadata ?? null));
    }
  },
  E_ = class {
    name;
    constructor(l) {
      this.name = l.name;
    }
  },
  xl = class Nf {
    name;
    captchaImage;
    captchaSiteKey;
    captchaProvider;
    isCaptchaAvailable;
    data;
    links;
    texts;
    captcha;
    constructor(l) {
      ((this.name = l.name),
        (this.captchaImage = l.captcha?.image ?? null),
        (this.captchaSiteKey = l.captcha?.siteKey ?? null),
        (this.captchaProvider = l.captcha?.provider ?? null),
        (this.isCaptchaAvailable = !!l.captcha),
        (this.texts = l.texts ?? null),
        (this.captcha = l.captcha ?? null),
        (this.data = Nf.getScreenData(l)),
        (this.links = Nf.getScreenLinks(l)));
    }
    static getScreenData(l) {
      return l.data ?? null;
    }
    static getScreenLinks(l) {
      return l.links ?? null;
    }
  },
  S_ = class {
    name;
    friendlyName;
    enabledLocales;
    enabledFactors;
    constructor(l) {
      ((this.name = l?.name ?? null),
        (this.friendlyName = l?.friendly_name ?? null),
        (this.enabledLocales = l?.enabled_locales ?? null),
        (this.enabledFactors = l?.enabled_factors ?? null));
    }
  },
  Ls = class gs {
    state;
    hasErrors;
    locale;
    countryCode;
    countryPrefix;
    connectionStrategy;
    errors;
    currentConnection;
    alternateConnections;
    constructor(l) {
      ((this.state = l.state),
        (this.hasErrors = !!(l.errors && l.errors.length > 0)),
        (this.locale = l.locale),
        (this.countryCode = l.country_code?.code ?? null),
        (this.countryPrefix = l.country_code?.prefix ?? null),
        (this.connectionStrategy =
          l?.connection?.strategy?.toLowerCase() ?? null),
        (this.errors = gs.getErrors(l)),
        (this.currentConnection = gs.getCurrentConnection(l)),
        (this.alternateConnections = gs.getAlternateConnections(l)));
    }
    static getErrors(l) {
      return l.errors && l.errors.length !== 0
        ? l.errors.map((r) => ({
            code: r.code,
            field: r.field,
            message: r.message,
          }))
        : null;
    }
    static getCurrentConnection(l) {
      if (!l?.connection) return null;
      const { name: r, strategy: o, metadata: u } = l.connection;
      return { name: r, strategy: o, metadata: u };
    }
    static getAlternateConnections(l) {
      const r = l?.alternate_connections;
      return r && Array.isArray(r)
        ? r.map((o) => {
            const { name: u, strategy: f, metadata: d } = o,
              m = { name: u, strategy: f, metadata: d };
            if ("options" in o) {
              const {
                icon_url: p,
                display_name: g,
                show_as_button: v,
              } = o.options;
              return {
                ...m,
                options: { iconUrl: p, displayName: g, showAsButton: v },
              };
            }
            return m;
          })
        : null;
    }
  },
  C_ = class kf {
    submittedFormData;
    authorizationParams;
    constructor(l) {
      ((this.submittedFormData = kf.getSubmittedFormData(l)),
        (this.authorizationParams = kf.getAuthorizationParams(l)));
    }
    static getSubmittedFormData(l) {
      return l?.submitted_form_data ? (l?.submitted_form_data ?? null) : null;
    }
    static getAuthorizationParams(l) {
      return l?.authorization_params
        ? {
            login_hint: l?.authorization_params?.login_hint,
            screen_hint: l?.authorization_params?.screen_hint,
            ui_locales: l?.authorization_params?.ui_locales,
            ...l?.authorization_params,
          }
        : null;
    }
  },
  w_ = class $y {
    id;
    username;
    email;
    picture;
    phoneNumber;
    userMetadata;
    appMetadata;
    enrolledFactors;
    enrolledEmails;
    enrolledPhoneNumbers;
    enrolledDevices;
    organizations;
    constructor(l) {
      ((this.id = l?.id ?? null),
        (this.username = l?.username ?? null),
        (this.email = l?.email ?? null),
        (this.picture = l?.picture ?? null),
        (this.phoneNumber = l?.phone_number ?? null),
        (this.userMetadata = l?.user_metadata ?? null),
        (this.appMetadata = l?.app_metadata ?? null),
        (this.enrolledFactors = l?.enrolled_factors ?? null),
        (this.enrolledEmails = l?.enrolled_emails ?? null),
        (this.enrolledPhoneNumbers = l?.enrolled_phone_numbers ?? null),
        (this.enrolledDevices = l?.enrolled_devices ?? null),
        (this.organizations = $y.getOrganizations(l)));
    }
    static getOrganizations(l) {
      return l?.organizations && Array.isArray(l?.organizations)
        ? l?.organizations.map((r) => ({
            organizationId: r.id,
            organizationName: r.name,
            displayName: r.display_name,
            branding: { logoUrl: r.branding?.logo_url },
          }))
        : null;
    }
  },
  Us = class ei {
    branding;
    screen;
    tenant;
    prompt;
    organization;
    client;
    transaction;
    user;
    untrustedData;
    static context = null;
    static screenIdentifier = "";
    constructor() {
      if (!ei.context) {
        const o = window;
        ei.context = o.universal_login_context ?? null;
      }
      const l = ei.context,
        r = new.target?.screenIdentifier;
      if (!l)
        throw new Error(
          "Universal Login Context is not available on the global window object."
        );
      if (r !== l?.screen?.name && r !== "")
        throw new Error(
          `Incorrect import: The current screen name does not match the imported screen class. Imported Screen: ${r}, Current Screen: ${l?.screen?.name}`
        );
      ((this.branding = new b_(l.branding)),
        (this.screen = new xl(l.screen)),
        (this.tenant = new S_(l.tenant)),
        (this.prompt = new E_(l.prompt)),
        (this.organization = new x_(l.organization)),
        (this.client = new __(l.client)),
        (this.transaction = new Ls(l.transaction)),
        (this.user = new w_(l.user)),
        (this.untrustedData = new C_(l.untrusted_data)));
    }
    getContext(l) {
      if (!ei.context) {
        const r = window;
        ei.context = r.universal_login_context ?? null;
      }
      if (ei.context) return ei.context[l];
    }
    getErrors() {
      return this.transaction?.errors ?? [];
    }
  },
  Xn = class {
    options;
    constructor(l) {
      this.options = l;
    }
    async submitData(l) {
      const r = { ...l, state: this.options.state },
        o = this.buildForm(r);
      (document.body.appendChild(o), o.submit());
    }
    buildForm(l) {
      const r = document.createElement("form");
      return (
        (r.method = "POST"),
        (r.action = this.options.route ?? ""),
        Object.entries(l).forEach(([o, u]) => {
          const f = document.createElement("input");
          ((f.type = "hidden"),
            (f.name = o),
            (f.value = String(u ?? "")),
            r.appendChild(f));
        }),
        this.addTelemetryField(r),
        r
      );
    }
    addTelemetryField(l) {
      const r = document.createElement("input"),
        o = globalThis.__ACUL_SDK_NAME__ || "@auth0/auth0-acul-js",
        u = globalThis.__ACUL_SDK_VERSION__ || "1.0.0-alpha.1";
      return (
        (r.type = "hidden"),
        (r.name = "acul-sdk"),
        (r.value = `${o}@${u}`),
        l.appendChild(r),
        l
      );
    }
  };
function Wy(a) {
  return a || null;
}
function nd(a) {
  return a?.links?.signup ?? null;
}
function ad(a) {
  return a?.links?.reset_password ?? null;
}
function R_(a) {
  return a?.links?.edit_identifier ?? null;
}
function T_(a) {
  return a.data?.passkey?.public_key ?? null;
}
let O_ = class extends xl {
  signupLink;
  resetPasswordLink;
  data;
  constructor(l) {
    (super(l),
      (this.signupLink = nd(l)),
      (this.resetPasswordLink = ad(l)),
      (this.data = xl.getScreenData(l)));
  }
};
const xs = { EMAIL: "email", PHONE: "phone" },
  Es = { SMS: "sms", EMAIL: "email" };
function id(a) {
  return a?.connection?.options?.signup_enabled === !0;
}
function ld(a) {
  return a?.connection?.options?.forgot_password_enabled === !0;
}
function rd(a) {
  return a?.connection?.options?.authentication_methods?.passkey?.enabled ?? !1;
}
function z_(a) {
  return a?.connection?.options?.username_required ?? !1;
}
function ev(a) {
  const l = a?.connection,
    { signup_status: r, validation: o } =
      l?.options?.attributes?.username ?? {};
  if (o)
    return {
      isActive: ["optional", "required"].includes(r),
      maxLength: o.max_length,
      minLength: o.min_length,
      allowedFormats: {
        usernameInEmailFormat: o.allowed_types?.email ?? !1,
        usernameInPhoneFormat: o.allowed_types?.phone_number ?? !1,
      },
    };
  const { validation: u, username_required: f } = l?.options ?? {},
    d = u?.username;
  return d
    ? { isActive: f === !0, maxLength: d.max_length, minLength: d.min_length }
    : null;
}
function tv(a) {
  const l = a?.connection,
    r = l?.options?.authentication_methods?.password;
  return r
    ? {
        minLength: r.min_length,
        policy: r.policy,
        passwordSecurityInfo: r.password_security_info?.map((o) =>
          o.status === "valid" ? { ...o, isValid: !0 } : { ...o, isValid: !1 }
        ),
      }
    : null;
}
function nv(a) {
  const l = a?.connection;
  if (!l) return null;
  const { attributes: r, username_required: o } = l.options || {};
  if (r && Object.keys(r).length > 0) {
    const u = Object.entries(r)
      .filter(([, f]) => f.identifier_active)
      .map(([f]) => f);
    return u.length > 0 ? u : null;
  }
  return o ? ["email", "username"] : ["email"];
}
function M_(a) {
  const l = a?.connection;
  if (!l) return null;
  const { attributes: r, username_required: o } = l.options || {};
  return r && Object.keys(r).length > 0
    ? D_(l, ["required", "optional"])
    : o
      ? ["email", "username"]
      : ["email"];
}
function D_(a, l) {
  if (!a) return null;
  const { attributes: r, username_required: o } = a.options || {};
  if (!r || Object.keys(r).length === 0)
    return o ? ["email", "username"] : ["email"];
  const u = Object.entries(r)
    .filter(([, f]) => f.signup_status && l.includes(f.signup_status))
    .map(([f]) => f);
  return u.length > 0 ? u : null;
}
let B_ = class av extends Ls {
    isSignupEnabled;
    isForgotPasswordEnabled;
    isPasskeyEnabled;
    passwordPolicy;
    allowedIdentifiers;
    constructor(l) {
      (super(l),
        (this.isSignupEnabled = id(l)),
        (this.isForgotPasswordEnabled = ld(l)),
        (this.isPasskeyEnabled = rd(l)),
        (this.passwordPolicy = tv(l)),
        (this.allowedIdentifiers = av.getAllowedIdentifiers(
          l,
          this.connectionStrategy
        )));
    }
    static getAllowedIdentifiers(l, r) {
      return r === Es.SMS ? [xs.PHONE] : r === Es.EMAIL ? [xs.EMAIL] : nv(l);
    }
  },
  dw = class ps extends Us {
    static screenIdentifier = td.LOGIN;
    screen;
    transaction;
    constructor() {
      super();
      const l = this.getContext("screen"),
        r = this.getContext("transaction");
      ((this.screen = new O_(l)), (this.transaction = new B_(r)));
    }
    async login(l) {
      const r = {
        state: this.transaction.state,
        telemetry: [ps.screenIdentifier, "login"],
      };
      await new Xn(r).submitData(l);
    }
    async federatedLogin(l) {
      const r = {
        state: this.transaction.state,
        telemetry: [ps.screenIdentifier, "federatedLogin"],
      };
      await new Xn(r).submitData(l);
    }
    async pickCountryCode(l) {
      const r = {
        state: this.transaction.state,
        telemetry: [ps.screenIdentifier, "pickCountryCode"],
      };
      await new Xn(r).submitData({ ...l, action: Py.PICK_COUNTRY_CODE });
    }
    getLoginIdentifiers() {
      return Wy(this.transaction.allowedIdentifiers);
    }
  };
function iv({ controlled: a, default: l, name: r, state: o = "value" }) {
  const { current: u } = T.useRef(a !== void 0),
    [f, d] = T.useState(l),
    m = u ? a : f,
    p = T.useCallback((g) => {
      u || d(g);
    }, []);
  return [m, p];
}
const ff = Yy[`useInsertionEffect${Math.random().toFixed(1)}`.slice(0, -3)],
  N_ = ff && ff !== T.useLayoutEffect ? ff : (a) => a();
function Ze(a) {
  const l = Rl(k_).current;
  return ((l.next = a), N_(l.effect), l.trampoline);
}
function k_() {
  const a = {
    next: void 0,
    callback: L_,
    trampoline: (...l) => a.callback?.(...l),
    effect: () => {
      a.callback = a.next;
    },
  };
  return a;
}
function L_() {}
const U_ = () => {},
  lt = typeof document < "u" ? T.useLayoutEffect : U_,
  V_ = T.createContext(void 0);
function Q_(a = !0) {
  const l = T.useContext(V_);
  if (l === void 0 && !a)
    throw new Error("Base UI: DirectionContext is missing.");
  return l?.direction ?? "ltr";
}
function Lt(a, l, r) {
  let o = !1,
    u = !1;
  const f = ti;
  return {
    reason: a,
    event: l ?? new Event("base-ui"),
    cancel() {
      o = !0;
    },
    allowPropagation() {
      u = !0;
    },
    get isCanceled() {
      return o;
    },
    get isPropagationAllowed() {
      return u;
    },
    ...f,
  };
}
const H_ = { ...Yy };
let Dp = 0;
function j_(a, l = "mui") {
  const [r, o] = T.useState(a),
    u = a || r;
  return (
    T.useEffect(() => {
      r == null && ((Dp += 1), o(`${l}-${Dp}`));
    }, [r, l]),
    u
  );
}
const Bp = H_.useId;
function od(a, l) {
  if (Bp !== void 0) {
    const r = Bp();
    return a ?? (l ? `${l}-${r}` : r);
  }
  return j_(a, l);
}
function lv(a) {
  return od(a, "base-ui");
}
var df = { exports: {} },
  Nt = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Np;
function I_() {
  if (Np) return Nt;
  Np = 1;
  var a = ks();
  function l(p) {
    var g = "https://react.dev/errors/" + p;
    if (1 < arguments.length) {
      g += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var v = 2; v < arguments.length; v++)
        g += "&args[]=" + encodeURIComponent(arguments[v]);
    }
    return (
      "Minified React error #" +
      p +
      "; visit " +
      g +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function r() {}
  var o = {
      d: {
        f: r,
        r: function () {
          throw Error(l(522));
        },
        D: r,
        C: r,
        L: r,
        m: r,
        X: r,
        S: r,
        M: r,
      },
      p: 0,
      findDOMNode: null,
    },
    u = Symbol.for("react.portal");
  function f(p, g, v) {
    var A =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: u,
      key: A == null ? null : "" + A,
      children: p,
      containerInfo: g,
      implementation: v,
    };
  }
  var d = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function m(p, g) {
    if (p === "font") return "";
    if (typeof g == "string") return g === "use-credentials" ? g : "";
  }
  return (
    (Nt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o),
    (Nt.createPortal = function (p, g) {
      var v =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!g || (g.nodeType !== 1 && g.nodeType !== 9 && g.nodeType !== 11))
        throw Error(l(299));
      return f(p, g, null, v);
    }),
    (Nt.flushSync = function (p) {
      var g = d.T,
        v = o.p;
      try {
        if (((d.T = null), (o.p = 2), p)) return p();
      } finally {
        ((d.T = g), (o.p = v), o.d.f());
      }
    }),
    (Nt.preconnect = function (p, g) {
      typeof p == "string" &&
        (g
          ? ((g = g.crossOrigin),
            (g =
              typeof g == "string"
                ? g === "use-credentials"
                  ? g
                  : ""
                : void 0))
          : (g = null),
        o.d.C(p, g));
    }),
    (Nt.prefetchDNS = function (p) {
      typeof p == "string" && o.d.D(p);
    }),
    (Nt.preinit = function (p, g) {
      if (typeof p == "string" && g && typeof g.as == "string") {
        var v = g.as,
          A = m(v, g.crossOrigin),
          b = typeof g.integrity == "string" ? g.integrity : void 0,
          _ = typeof g.fetchPriority == "string" ? g.fetchPriority : void 0;
        v === "style"
          ? o.d.S(p, typeof g.precedence == "string" ? g.precedence : void 0, {
              crossOrigin: A,
              integrity: b,
              fetchPriority: _,
            })
          : v === "script" &&
            o.d.X(p, {
              crossOrigin: A,
              integrity: b,
              fetchPriority: _,
              nonce: typeof g.nonce == "string" ? g.nonce : void 0,
            });
      }
    }),
    (Nt.preinitModule = function (p, g) {
      if (typeof p == "string")
        if (typeof g == "object" && g !== null) {
          if (g.as == null || g.as === "script") {
            var v = m(g.as, g.crossOrigin);
            o.d.M(p, {
              crossOrigin: v,
              integrity: typeof g.integrity == "string" ? g.integrity : void 0,
              nonce: typeof g.nonce == "string" ? g.nonce : void 0,
            });
          }
        } else g == null && o.d.M(p);
    }),
    (Nt.preload = function (p, g) {
      if (
        typeof p == "string" &&
        typeof g == "object" &&
        g !== null &&
        typeof g.as == "string"
      ) {
        var v = g.as,
          A = m(v, g.crossOrigin);
        o.d.L(p, v, {
          crossOrigin: A,
          integrity: typeof g.integrity == "string" ? g.integrity : void 0,
          nonce: typeof g.nonce == "string" ? g.nonce : void 0,
          type: typeof g.type == "string" ? g.type : void 0,
          fetchPriority:
            typeof g.fetchPriority == "string" ? g.fetchPriority : void 0,
          referrerPolicy:
            typeof g.referrerPolicy == "string" ? g.referrerPolicy : void 0,
          imageSrcSet:
            typeof g.imageSrcSet == "string" ? g.imageSrcSet : void 0,
          imageSizes: typeof g.imageSizes == "string" ? g.imageSizes : void 0,
          media: typeof g.media == "string" ? g.media : void 0,
        });
      }
    }),
    (Nt.preloadModule = function (p, g) {
      if (typeof p == "string")
        if (g) {
          var v = m(g.as, g.crossOrigin);
          o.d.m(p, {
            as: typeof g.as == "string" && g.as !== "script" ? g.as : void 0,
            crossOrigin: v,
            integrity: typeof g.integrity == "string" ? g.integrity : void 0,
          });
        } else o.d.m(p);
    }),
    (Nt.requestFormReset = function (p) {
      o.d.r(p);
    }),
    (Nt.unstable_batchedUpdates = function (p, g) {
      return p(g);
    }),
    (Nt.useFormState = function (p, g, v) {
      return d.H.useFormState(p, g, v);
    }),
    (Nt.useFormStatus = function () {
      return d.H.useHostTransitionStatus();
    }),
    (Nt.version = "19.2.0"),
    Nt
  );
}
var kp;
function rv() {
  if (kp) return df.exports;
  kp = 1;
  function a() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (l) {
        console.error(l);
      }
  }
  return (a(), (df.exports = I_()), df.exports);
}
var Tl = rv();
const G_ = [];
function ov(a) {
  T.useEffect(a, G_);
}
const rs = null;
class Y_ {
  callbacks = [];
  callbacksCount = 0;
  nextId = 1;
  startId = 1;
  isScheduled = !1;
  tick = (l) => {
    this.isScheduled = !1;
    const r = this.callbacks,
      o = this.callbacksCount;
    if (
      ((this.callbacks = []),
      (this.callbacksCount = 0),
      (this.startId = this.nextId),
      o > 0)
    )
      for (let u = 0; u < r.length; u += 1) r[u]?.(l);
  };
  request(l) {
    const r = this.nextId;
    return (
      (this.nextId += 1),
      this.callbacks.push(l),
      (this.callbacksCount += 1),
      (!this.isScheduled || !1) &&
        (requestAnimationFrame(this.tick), (this.isScheduled = !0)),
      r
    );
  }
  cancel(l) {
    const r = l - this.startId;
    r < 0 ||
      r >= this.callbacks.length ||
      ((this.callbacks[r] = null), (this.callbacksCount -= 1));
  }
}
const os = new Y_();
class xa {
  static create() {
    return new xa();
  }
  static request(l) {
    return os.request(l);
  }
  static cancel(l) {
    return os.cancel(l);
  }
  currentId = rs;
  request(l) {
    (this.cancel(),
      (this.currentId = os.request(() => {
        ((this.currentId = rs), l());
      })));
  }
  cancel = () => {
    this.currentId !== rs && (os.cancel(this.currentId), (this.currentId = rs));
  };
  disposeEffect = () => this.cancel;
}
function q_() {
  const a = Rl(xa.create).current;
  return (ov(a.disposeEffect), a);
}
function K_(a, l = !1) {
  const r = q_();
  return Ze((o, u = null) => {
    if ((r.cancel(), a == null)) return;
    let f;
    if ("current" in a) {
      if (a.current == null) return;
      f = a.current;
    } else f = a;
    typeof f.getAnimations != "function" ||
    globalThis.BASE_UI_ANIMATIONS_DISABLED
      ? o()
      : r.request(() => {
          function d() {
            f &&
              Promise.allSettled(f.getAnimations().map((m) => m.finished)).then(
                () => {
                  (u != null && u.aborted) || Tl.flushSync(o);
                }
              );
          }
          l ? r.request(d) : d();
        });
  });
}
function X_(a, l = !1, r = !1) {
  const [o, u] = T.useState(a && l ? "idle" : void 0),
    [f, d] = T.useState(a);
  return (
    a && !f && (d(!0), u("starting")),
    !a && f && o !== "ending" && !r && u("ending"),
    !a && !f && o === "ending" && u(void 0),
    lt(() => {
      if (!a && f && o !== "ending" && r) {
        const m = xa.request(() => {
          u("ending");
        });
        return () => {
          xa.cancel(m);
        };
      }
    }, [a, f, o, r]),
    lt(() => {
      if (!a || l) return;
      const m = xa.request(() => {
        Tl.flushSync(() => {
          u(void 0);
        });
      });
      return () => {
        xa.cancel(m);
      };
    }, [l, a]),
    lt(() => {
      if (!a || !l) return;
      a && f && o !== "idle" && u("starting");
      const m = xa.request(() => {
        u("idle");
      });
      return () => {
        xa.cancel(m);
      };
    }, [l, a, f, u, o]),
    T.useMemo(
      () => ({ mounted: f, setMounted: d, transitionStatus: o }),
      [f, o]
    )
  );
}
let Ss = (function (a) {
  return (
    (a.startingStyle = "data-starting-style"),
    (a.endingStyle = "data-ending-style"),
    a
  );
})({});
const F_ = { [Ss.startingStyle]: "" },
  Z_ = { [Ss.endingStyle]: "" },
  J_ = {
    transitionStatus(a) {
      return a === "starting" ? F_ : a === "ending" ? Z_ : null;
    },
  };
function Vs() {
  return typeof window < "u";
}
function Ol(a) {
  return sd(a) ? (a.nodeName || "").toLowerCase() : "#document";
}
function Ht(a) {
  var l;
  return (
    (a == null || (l = a.ownerDocument) == null ? void 0 : l.defaultView) ||
    window
  );
}
function Pn(a) {
  var l;
  return (l = (sd(a) ? a.ownerDocument : a.document) || window.document) == null
    ? void 0
    : l.documentElement;
}
function sd(a) {
  return Vs() ? a instanceof Node || a instanceof Ht(a).Node : !1;
}
function nt(a) {
  return Vs() ? a instanceof Element || a instanceof Ht(a).Element : !1;
}
function mn(a) {
  return Vs() ? a instanceof HTMLElement || a instanceof Ht(a).HTMLElement : !1;
}
function Lf(a) {
  return !Vs() || typeof ShadowRoot > "u"
    ? !1
    : a instanceof ShadowRoot || a instanceof Ht(a).ShadowRoot;
}
const P_ = new Set(["inline", "contents"]);
function Ur(a) {
  const { overflow: l, overflowX: r, overflowY: o, display: u } = On(a);
  return /auto|scroll|overlay|hidden|clip/.test(l + o + r) && !P_.has(u);
}
const $_ = new Set(["table", "td", "th"]);
function W_(a) {
  return $_.has(Ol(a));
}
const ex = [":popover-open", ":modal"];
function Qs(a) {
  return ex.some((l) => {
    try {
      return a.matches(l);
    } catch {
      return !1;
    }
  });
}
const tx = ["transform", "translate", "scale", "rotate", "perspective"],
  nx = ["transform", "translate", "scale", "rotate", "perspective", "filter"],
  ax = ["paint", "layout", "strict", "content"];
function ud(a) {
  const l = Hs(),
    r = nt(a) ? On(a) : a;
  return (
    tx.some((o) => (r[o] ? r[o] !== "none" : !1)) ||
    (r.containerType ? r.containerType !== "normal" : !1) ||
    (!l && (r.backdropFilter ? r.backdropFilter !== "none" : !1)) ||
    (!l && (r.filter ? r.filter !== "none" : !1)) ||
    nx.some((o) => (r.willChange || "").includes(o)) ||
    ax.some((o) => (r.contain || "").includes(o))
  );
}
function ix(a) {
  let l = wa(a);
  for (; mn(l) && !Ca(l); ) {
    if (ud(l)) return l;
    if (Qs(l)) return null;
    l = wa(l);
  }
  return null;
}
function Hs() {
  return typeof CSS > "u" || !CSS.supports
    ? !1
    : CSS.supports("-webkit-backdrop-filter", "none");
}
const lx = new Set(["html", "body", "#document"]);
function Ca(a) {
  return lx.has(Ol(a));
}
function On(a) {
  return Ht(a).getComputedStyle(a);
}
function js(a) {
  return nt(a)
    ? { scrollLeft: a.scrollLeft, scrollTop: a.scrollTop }
    : { scrollLeft: a.scrollX, scrollTop: a.scrollY };
}
function wa(a) {
  if (Ol(a) === "html") return a;
  const l = a.assignedSlot || a.parentNode || (Lf(a) && a.host) || Pn(a);
  return Lf(l) ? l.host : l;
}
function sv(a) {
  const l = wa(a);
  return Ca(l)
    ? a.ownerDocument
      ? a.ownerDocument.body
      : a.body
    : mn(l) && Ur(l)
      ? l
      : sv(l);
}
function ni(a, l, r) {
  var o;
  (l === void 0 && (l = []), r === void 0 && (r = !0));
  const u = sv(a),
    f = u === ((o = a.ownerDocument) == null ? void 0 : o.body),
    d = Ht(u);
  if (f) {
    const m = Uf(d);
    return l.concat(
      d,
      d.visualViewport || [],
      Ur(u) ? u : [],
      m && r ? ni(m) : []
    );
  }
  return l.concat(u, ni(u, [], r));
}
function Uf(a) {
  return a.parent && Object.getPrototypeOf(a.parent) ? a.frameElement : null;
}
const Vr = typeof navigator < "u",
  hf = fx(),
  rx = hx(),
  ox = dx();
typeof CSS > "u" ||
  !CSS.supports ||
  CSS.supports("-webkit-backdrop-filter:none");
(hf.platform === "MacIntel" && hf.maxTouchPoints > 1) ||
  /iP(hone|ad|od)|iOS/.test(hf.platform);
const sx = Vr && /apple/i.test(navigator.vendor),
  ux = Vr && rx.toLowerCase().startsWith("mac") && !navigator.maxTouchPoints,
  cx = ox.includes("jsdom/");
function fx() {
  if (!Vr) return { platform: "", maxTouchPoints: -1 };
  const a = navigator.userAgentData;
  return a?.platform
    ? { platform: a.platform, maxTouchPoints: navigator.maxTouchPoints }
    : {
        platform: navigator.platform ?? "",
        maxTouchPoints: navigator.maxTouchPoints ?? -1,
      };
}
function dx() {
  if (!Vr) return "";
  const a = navigator.userAgentData;
  return a && Array.isArray(a.brands)
    ? a.brands.map(({ brand: l, version: r }) => `${l}/${r}`).join(" ")
    : navigator.userAgent;
}
function hx() {
  if (!Vr) return "";
  const a = navigator.userAgentData;
  return a?.platform ? a.platform : (navigator.platform ?? "");
}
const mx = "data-base-ui-focusable",
  uv = "active",
  cv = "selected",
  gx =
    "input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";
function Lp(a) {
  let l = a.activeElement;
  for (; l?.shadowRoot?.activeElement != null; ) l = l.shadowRoot.activeElement;
  return l;
}
function Fn(a, l) {
  if (!a || !l) return !1;
  const r = l.getRootNode?.();
  if (a.contains(l)) return !0;
  if (r && Lf(r)) {
    let o = l;
    for (; o; ) {
      if (a === o) return !0;
      o = o.parentNode || o.host;
    }
  }
  return !1;
}
function Kn(a) {
  return "composedPath" in a ? a.composedPath()[0] : a.target;
}
function ba(a, l) {
  if (l == null) return !1;
  if ("composedPath" in a) return a.composedPath().includes(l);
  const r = a;
  return r.target != null && l.contains(r.target);
}
function px(a) {
  return a.matches("html,body");
}
function wi(a) {
  return a?.ownerDocument || document;
}
function yx(a) {
  return mn(a) && a.matches(gx);
}
function vx(a) {
  if (!a || cx) return !0;
  try {
    return a.matches(":focus-visible");
  } catch {
    return !0;
  }
}
function Dr(a, l, r = !0) {
  return a
    .filter((u) => u.parentId === l && (!r || u.context?.open))
    .flatMap((u) => [u, ...Dr(a, u.id, r)]);
}
function Ax(a) {
  return "nativeEvent" in a;
}
function Cs(a, l) {
  const r = ["mouse", "pen"];
  return (r.push("", void 0), r.includes(a));
}
const bx = ["top", "right", "bottom", "left"],
  El = Math.min,
  fn = Math.max,
  ws = Math.round,
  ss = Math.floor,
  Zn = (a) => ({ x: a, y: a }),
  _x = { left: "right", right: "left", bottom: "top", top: "bottom" },
  xx = { start: "end", end: "start" };
function Vf(a, l, r) {
  return fn(a, El(l, r));
}
function Ra(a, l) {
  return typeof a == "function" ? a(l) : a;
}
function hn(a) {
  return a.split("-")[0];
}
function ai(a) {
  return a.split("-")[1];
}
function cd(a) {
  return a === "x" ? "y" : "x";
}
function fd(a) {
  return a === "y" ? "height" : "width";
}
const Ex = new Set(["top", "bottom"]);
function Tn(a) {
  return Ex.has(hn(a)) ? "y" : "x";
}
function dd(a) {
  return cd(Tn(a));
}
function Sx(a, l, r) {
  r === void 0 && (r = !1);
  const o = ai(a),
    u = dd(a),
    f = fd(u);
  let d =
    u === "x"
      ? o === (r ? "end" : "start")
        ? "right"
        : "left"
      : o === "start"
        ? "bottom"
        : "top";
  return (l.reference[f] > l.floating[f] && (d = Rs(d)), [d, Rs(d)]);
}
function Cx(a) {
  const l = Rs(a);
  return [Qf(a), l, Qf(l)];
}
function Qf(a) {
  return a.replace(/start|end/g, (l) => xx[l]);
}
const Up = ["left", "right"],
  Vp = ["right", "left"],
  wx = ["top", "bottom"],
  Rx = ["bottom", "top"];
function Tx(a, l, r) {
  switch (a) {
    case "top":
    case "bottom":
      return r ? (l ? Vp : Up) : l ? Up : Vp;
    case "left":
    case "right":
      return l ? wx : Rx;
    default:
      return [];
  }
}
function Ox(a, l, r, o) {
  const u = ai(a);
  let f = Tx(hn(a), r === "start", o);
  return (
    u && ((f = f.map((d) => d + "-" + u)), l && (f = f.concat(f.map(Qf)))),
    f
  );
}
function Rs(a) {
  return a.replace(/left|right|bottom|top/g, (l) => _x[l]);
}
function zx(a) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...a };
}
function fv(a) {
  return typeof a != "number"
    ? zx(a)
    : { top: a, right: a, bottom: a, left: a };
}
function Ts(a) {
  const { x: l, y: r, width: o, height: u } = a;
  return {
    width: o,
    height: u,
    top: r,
    left: l,
    right: l + o,
    bottom: r + u,
    x: l,
    y: r,
  };
}
function Sa(a) {
  const l = Rl(Mx, a).current;
  return ((l.next = a), lt(l.effect), l);
}
function Mx(a) {
  const l = {
    current: a,
    next: a,
    effect: () => {
      l.current = l.next;
    },
  };
  return l;
}
function dv(a) {
  const { enabled: l = !0, open: r, ref: o, onComplete: u } = a,
    f = Sa(r),
    d = Ze(u),
    m = K_(o, r);
  T.useEffect(() => {
    l &&
      m(() => {
        r === f.current && d();
      });
  }, [l, r, d, m, f]);
}
let hd = (function (a) {
    return (
      (a.open = "data-open"),
      (a.closed = "data-closed"),
      (a[(a.startingStyle = Ss.startingStyle)] = "startingStyle"),
      (a[(a.endingStyle = Ss.endingStyle)] = "endingStyle"),
      (a.anchorHidden = "data-anchor-hidden"),
      a
    );
  })({}),
  Dx = (function (a) {
    return ((a.popupOpen = "data-popup-open"), (a.pressed = "data-pressed"), a);
  })({});
const Bx = { [Dx.popupOpen]: "" },
  Nx = { [hd.open]: "" },
  kx = { [hd.closed]: "" },
  Lx = { [hd.anchorHidden]: "" },
  Ux = {
    open(a) {
      return a ? Bx : null;
    },
  },
  md = {
    open(a) {
      return a ? Nx : kx;
    },
    anchorHidden(a) {
      return a ? Lx : null;
    },
  },
  wr = 0;
class zl {
  static create() {
    return new zl();
  }
  currentId = wr;
  start(l, r) {
    (this.clear(),
      (this.currentId = setTimeout(() => {
        ((this.currentId = wr), r());
      }, l)));
  }
  isStarted() {
    return this.currentId !== wr;
  }
  clear = () => {
    this.currentId !== wr &&
      (clearTimeout(this.currentId), (this.currentId = wr));
  };
  disposeEffect = () => this.clear;
}
function Oi() {
  const a = Rl(zl.create).current;
  return (ov(a.disposeEffect), a);
}
function Vx() {
  const a = new Map();
  return {
    emit(l, r) {
      a.get(l)?.forEach((o) => o(r));
    },
    on(l, r) {
      (a.has(l) || a.set(l, new Set()), a.get(l).add(r));
    },
    off(l, r) {
      a.get(l)?.delete(r);
    },
  };
}
const Qx = T.createContext(null),
  Hx = T.createContext(null),
  hv = () => T.useContext(Qx)?.id || null,
  gd = () => T.useContext(Hx);
function Is(a) {
  return `data-base-ui-${a}`;
}
const Qp = Is("safe-polygon");
function ys(a, l, r) {
  if (r && !Cs(r)) return 0;
  if (typeof a == "number") return a;
  if (typeof a == "function") {
    const o = a();
    return typeof o == "number" ? o : o?.[l];
  }
  return a?.[l];
}
function mf(a) {
  return typeof a == "function" ? a() : a;
}
function jx(a, l = {}) {
  const { open: r, onOpenChange: o, dataRef: u, events: f, elements: d } = a,
    {
      enabled: m = !0,
      delay: p = 0,
      handleClose: g = null,
      mouseOnly: v = !1,
      restMs: A = 0,
      move: b = !0,
    } = l,
    _ = gd(),
    S = hv(),
    w = Sa(g),
    Q = Sa(p),
    F = Sa(r),
    I = Sa(A),
    N = T.useRef(void 0),
    j = Oi(),
    M = T.useRef(void 0),
    Y = Oi(),
    K = T.useRef(!0),
    J = T.useRef(!1),
    he = T.useRef(() => {}),
    pe = T.useRef(!1),
    fe = Ze(() => {
      const D = u.current.openEvent?.type;
      return D?.includes("mouse") && D !== "mousedown";
    });
  (T.useEffect(() => {
    if (!m) return;
    function D(z) {
      z.open || (j.clear(), Y.clear(), (K.current = !0), (pe.current = !1));
    }
    return (
      f.on("openchange", D),
      () => {
        f.off("openchange", D);
      }
    );
  }, [m, f, j, Y]),
    T.useEffect(() => {
      if (!m || !w.current || !r) return;
      function D(le) {
        fe() && o(!1, Lt("trigger-hover", le));
      }
      const z = wi(d.floating).documentElement;
      return (
        z.addEventListener("mouseleave", D),
        () => {
          z.removeEventListener("mouseleave", D);
        }
      );
    }, [d.floating, r, o, m, w, fe]));
  const Z = T.useCallback(
      (D, z = !0) => {
        const le = ys(Q.current, "close", N.current);
        le && !M.current
          ? j.start(le, () => o(!1, Lt("trigger-hover", D)))
          : z && (j.clear(), o(!1, Lt("trigger-hover", D)));
      },
      [Q, o, j]
    ),
    H = Ze(() => {
      (he.current(), (M.current = void 0));
    }),
    te = Ze(() => {
      if (J.current) {
        const D = wi(d.floating).body;
        ((D.style.pointerEvents = ""), D.removeAttribute(Qp), (J.current = !1));
      }
    }),
    se = Ze(() =>
      u.current.openEvent
        ? ["click", "mousedown"].includes(u.current.openEvent.type)
        : !1
    );
  (T.useEffect(() => {
    if (!m) return;
    function D(k) {
      if (
        (j.clear(),
        (K.current = !1),
        (v && !Cs(N.current)) || (mf(I.current) > 0 && !ys(Q.current, "open")))
      )
        return;
      const P = ys(Q.current, "open", N.current);
      P
        ? j.start(P, () => {
            F.current || o(!0, Lt("trigger-hover", k));
          })
        : r || o(!0, Lt("trigger-hover", k));
    }
    function z(k) {
      if (se()) {
        te();
        return;
      }
      he.current();
      const P = wi(d.floating);
      if (
        (Y.clear(), (pe.current = !1), w.current && u.current.floatingContext)
      ) {
        (r || j.clear(),
          (M.current = w.current({
            ...u.current.floatingContext,
            tree: _,
            x: k.clientX,
            y: k.clientY,
            onClose() {
              (te(), H(), se() || Z(k, !0));
            },
          })));
        const oe = M.current;
        (P.addEventListener("mousemove", oe),
          (he.current = () => {
            P.removeEventListener("mousemove", oe);
          }));
        return;
      }
      (N.current === "touch" ? !Fn(d.floating, k.relatedTarget) : !0) && Z(k);
    }
    function le(k) {
      se() ||
        (u.current.floatingContext &&
          w.current?.({
            ...u.current.floatingContext,
            tree: _,
            x: k.clientX,
            y: k.clientY,
            onClose() {
              (te(), H(), se() || Z(k));
            },
          })(k));
    }
    function ce() {
      j.clear();
    }
    function x(k) {
      se() || Z(k, !1);
    }
    if (nt(d.domReference)) {
      const k = d.domReference,
        P = d.floating;
      return (
        r && k.addEventListener("mouseleave", le),
        b && k.addEventListener("mousemove", D, { once: !0 }),
        k.addEventListener("mouseenter", D),
        k.addEventListener("mouseleave", z),
        P &&
          (P.addEventListener("mouseleave", le),
          P.addEventListener("mouseenter", ce),
          P.addEventListener("mouseleave", x)),
        () => {
          (r && k.removeEventListener("mouseleave", le),
            b && k.removeEventListener("mousemove", D),
            k.removeEventListener("mouseenter", D),
            k.removeEventListener("mouseleave", z),
            P &&
              (P.removeEventListener("mouseleave", le),
              P.removeEventListener("mouseenter", ce),
              P.removeEventListener("mouseleave", x)));
        }
      );
    }
  }, [d, m, a, v, b, Z, H, te, o, r, F, _, Q, w, u, se, I, j, Y]),
    lt(() => {
      if (m && r && w.current?.__options?.blockPointerEvents && fe()) {
        J.current = !0;
        const D = d.floating;
        if (nt(d.domReference) && D) {
          const z = wi(d.floating).body;
          z.setAttribute(Qp, "");
          const le = d.domReference,
            ce = _?.nodesRef.current.find((x) => x.id === S)?.context?.elements
              .floating;
          return (
            ce && (ce.style.pointerEvents = ""),
            (z.style.pointerEvents = "none"),
            (le.style.pointerEvents = "auto"),
            (D.style.pointerEvents = "auto"),
            () => {
              ((z.style.pointerEvents = ""),
                (le.style.pointerEvents = ""),
                (D.style.pointerEvents = ""));
            }
          );
        }
      }
    }, [m, r, S, d, _, w, fe]),
    lt(() => {
      r || ((N.current = void 0), (pe.current = !1), H(), te());
    }, [r, H, te]),
    T.useEffect(
      () => () => {
        (H(), j.clear(), Y.clear());
      },
      [m, d.domReference, H, j, Y]
    ),
    T.useEffect(() => te, [te]));
  const O = T.useMemo(() => {
    function D(z) {
      N.current = z.pointerType;
    }
    return {
      onPointerDown: D,
      onPointerEnter: D,
      onMouseMove(z) {
        const { nativeEvent: le } = z;
        function ce() {
          !K.current && !F.current && o(!0, Lt("trigger-hover", le));
        }
        (v && !Cs(N.current)) ||
          r ||
          mf(I.current) === 0 ||
          (pe.current && z.movementX ** 2 + z.movementY ** 2 < 2) ||
          (Y.clear(),
          N.current === "touch"
            ? ce()
            : ((pe.current = !0), Y.start(mf(I.current), ce)));
      },
    };
  }, [v, o, r, F, I, Y]);
  return T.useMemo(() => (m ? { reference: O } : {}), [m, O]);
}
const mv = T.createContext({
  hasProvider: !1,
  timeoutMs: 0,
  delayRef: { current: 0 },
  initialDelayRef: { current: 0 },
  timeout: new zl(),
  currentIdRef: { current: null },
  currentContextRef: { current: null },
});
function Ix(a) {
  const { children: l, delay: r, timeoutMs: o = 0 } = a,
    u = T.useRef(r),
    f = T.useRef(r),
    d = T.useRef(null),
    m = T.useRef(null),
    p = Oi();
  return jn.jsx(mv.Provider, {
    value: T.useMemo(
      () => ({
        hasProvider: !0,
        delayRef: u,
        initialDelayRef: f,
        currentIdRef: d,
        timeoutMs: o,
        currentContextRef: m,
        timeout: p,
      }),
      [o, p]
    ),
    children: l,
  });
}
function Gx(a, l = {}) {
  const { open: r, onOpenChange: o, floatingId: u } = a,
    { enabled: f = !0 } = l,
    d = T.useContext(mv),
    {
      currentIdRef: m,
      delayRef: p,
      timeoutMs: g,
      initialDelayRef: v,
      currentContextRef: A,
      hasProvider: b,
      timeout: _,
    } = d,
    [S, w] = T.useState(!1);
  return (
    lt(() => {
      function Q() {
        (w(!1),
          A.current?.setIsInstantPhase(!1),
          (m.current = null),
          (A.current = null),
          (p.current = v.current));
      }
      if (f && m.current && !r && m.current === u) {
        if ((w(!1), g))
          return (
            _.start(g, Q),
            () => {
              _.clear();
            }
          );
        Q();
      }
    }, [f, r, u, m, p, g, v, A, _]),
    lt(() => {
      if (!f || !r) return;
      const Q = A.current,
        F = m.current;
      ((A.current = { onOpenChange: o, setIsInstantPhase: w }),
        (m.current = u),
        (p.current = { open: 0, close: ys(v.current, "close") }),
        F !== null && F !== u
          ? (_.clear(),
            w(!0),
            Q?.setIsInstantPhase(!0),
            Q?.onOpenChange(!1, Lt("none")))
          : (w(!1), Q?.setIsInstantPhase(!1)));
    }, [f, r, u, o, m, p, g, v, A, _]),
    lt(
      () => () => {
        A.current = null;
      },
      [A]
    ),
    T.useMemo(
      () => ({ hasProvider: b, delayRef: p, isInstantPhase: S }),
      [b, p, S]
    )
  );
}
function Yx(a) {
  return a?.ownerDocument || document;
}
const qx = T.createContext(null),
  Kx = () => T.useContext(qx),
  Hp = Is("portal");
function Xx(a = {}) {
  const { id: l, root: r } = a,
    o = od(),
    u = Kx(),
    [f, d] = T.useState(null),
    m = T.useRef(null);
  return (
    lt(
      () => () => {
        (f?.remove(),
          queueMicrotask(() => {
            m.current = null;
          }));
      },
      [f]
    ),
    lt(() => {
      if (!o || m.current) return;
      const p = l ? document.getElementById(l) : null;
      if (!p) return;
      const g = document.createElement("div");
      ((g.id = o),
        g.setAttribute(Hp, ""),
        p.appendChild(g),
        (m.current = g),
        d(g));
    }, [l, o]),
    lt(() => {
      if (r === null || !o || m.current) return;
      let p = r || u?.portalNode;
      (p && !sd(p) && (p = p.current), (p = p || document.body));
      let g = null;
      l && ((g = document.createElement("div")), (g.id = l), p.appendChild(g));
      const v = document.createElement("div");
      ((v.id = o),
        v.setAttribute(Hp, ""),
        (p = g || p),
        p.appendChild(v),
        (m.current = v),
        d(v));
    }, [l, r, o, u]),
    f
  );
}
function Fx(a, l) {
  let r = null,
    o = null,
    u = !1;
  return {
    contextElement: a || void 0,
    getBoundingClientRect() {
      const f = a?.getBoundingClientRect() || {
          width: 0,
          height: 0,
          x: 0,
          y: 0,
        },
        d = l.axis === "x" || l.axis === "both",
        m = l.axis === "y" || l.axis === "both",
        p =
          ["mouseenter", "mousemove"].includes(
            l.dataRef.current.openEvent?.type || ""
          ) && l.pointerType !== "touch";
      let g = f.width,
        v = f.height,
        A = f.x,
        b = f.y;
      return (
        r == null && l.x && d && (r = f.x - l.x),
        o == null && l.y && m && (o = f.y - l.y),
        (A -= r || 0),
        (b -= o || 0),
        (g = 0),
        (v = 0),
        !u || p
          ? ((g = l.axis === "y" ? f.width : 0),
            (v = l.axis === "x" ? f.height : 0),
            (A = d && l.x != null ? l.x : A),
            (b = m && l.y != null ? l.y : b))
          : u &&
            !p &&
            ((v = l.axis === "x" ? f.height : v),
            (g = l.axis === "y" ? f.width : g)),
        (u = !0),
        {
          width: g,
          height: v,
          x: A,
          y: b,
          top: b,
          right: A + g,
          bottom: b + v,
          left: A,
        }
      );
    },
  };
}
function jp(a) {
  return a != null && a.clientX != null;
}
function Zx(a, l = {}) {
  const {
      open: r,
      dataRef: o,
      elements: { floating: u, domReference: f },
      refs: d,
    } = a,
    { enabled: m = !0, axis: p = "both", x: g = null, y: v = null } = l,
    A = T.useRef(!1),
    b = T.useRef(null),
    [_, S] = T.useState(),
    [w, Q] = T.useState([]),
    F = Ze((Y, K) => {
      A.current ||
        (o.current.openEvent && !jp(o.current.openEvent)) ||
        d.setPositionReference(
          Fx(f, { x: Y, y: K, axis: p, dataRef: o, pointerType: _ })
        );
    }),
    I = Ze((Y) => {
      g != null ||
        v != null ||
        (r ? b.current || Q([]) : F(Y.clientX, Y.clientY));
    }),
    N = Cs(_) ? u : r,
    j = T.useCallback(() => {
      if (!N || !m || g != null || v != null) return;
      const Y = Ht(u);
      function K(J) {
        const he = Kn(J);
        Fn(u, he)
          ? (Y.removeEventListener("mousemove", K), (b.current = null))
          : F(J.clientX, J.clientY);
      }
      if (!o.current.openEvent || jp(o.current.openEvent)) {
        Y.addEventListener("mousemove", K);
        const J = () => {
          (Y.removeEventListener("mousemove", K), (b.current = null));
        };
        return ((b.current = J), J);
      }
      d.setPositionReference(f);
    }, [N, m, g, v, u, o, d, f, F]);
  (T.useEffect(() => j(), [j, w]),
    T.useEffect(() => {
      m && !u && (A.current = !1);
    }, [m, u]),
    T.useEffect(() => {
      !m && r && (A.current = !0);
    }, [m, r]),
    lt(() => {
      m && (g != null || v != null) && ((A.current = !1), F(g, v));
    }, [m, g, v, F]));
  const M = T.useMemo(() => {
    function Y(K) {
      S(K.pointerType);
    }
    return {
      onPointerDown: Y,
      onPointerEnter: Y,
      onMouseMove: I,
      onMouseEnter: I,
    };
  }, [I]);
  return T.useMemo(() => (m ? { reference: M } : {}), [m, M]);
}
function Ip(a, l, r) {
  let { reference: o, floating: u } = a;
  const f = Tn(l),
    d = dd(l),
    m = fd(d),
    p = hn(l),
    g = f === "y",
    v = o.x + o.width / 2 - u.width / 2,
    A = o.y + o.height / 2 - u.height / 2,
    b = o[m] / 2 - u[m] / 2;
  let _;
  switch (p) {
    case "top":
      _ = { x: v, y: o.y - u.height };
      break;
    case "bottom":
      _ = { x: v, y: o.y + o.height };
      break;
    case "right":
      _ = { x: o.x + o.width, y: A };
      break;
    case "left":
      _ = { x: o.x - u.width, y: A };
      break;
    default:
      _ = { x: o.x, y: o.y };
  }
  switch (ai(l)) {
    case "start":
      _[d] -= b * (r && g ? -1 : 1);
      break;
    case "end":
      _[d] += b * (r && g ? -1 : 1);
      break;
  }
  return _;
}
const Jx = async (a, l, r) => {
  const {
      placement: o = "bottom",
      strategy: u = "absolute",
      middleware: f = [],
      platform: d,
    } = r,
    m = f.filter(Boolean),
    p = await (d.isRTL == null ? void 0 : d.isRTL(l));
  let g = await d.getElementRects({ reference: a, floating: l, strategy: u }),
    { x: v, y: A } = Ip(g, o, p),
    b = o,
    _ = {},
    S = 0;
  for (let w = 0; w < m.length; w++) {
    const { name: Q, fn: F } = m[w],
      {
        x: I,
        y: N,
        data: j,
        reset: M,
      } = await F({
        x: v,
        y: A,
        initialPlacement: o,
        placement: b,
        strategy: u,
        middlewareData: _,
        rects: g,
        platform: d,
        elements: { reference: a, floating: l },
      });
    ((v = I ?? v),
      (A = N ?? A),
      (_ = { ..._, [Q]: { ..._[Q], ...j } }),
      M &&
        S <= 50 &&
        (S++,
        typeof M == "object" &&
          (M.placement && (b = M.placement),
          M.rects &&
            (g =
              M.rects === !0
                ? await d.getElementRects({
                    reference: a,
                    floating: l,
                    strategy: u,
                  })
                : M.rects),
          ({ x: v, y: A } = Ip(g, b, p))),
        (w = -1)));
  }
  return { x: v, y: A, placement: b, strategy: u, middlewareData: _ };
};
async function kr(a, l) {
  var r;
  l === void 0 && (l = {});
  const { x: o, y: u, platform: f, rects: d, elements: m, strategy: p } = a,
    {
      boundary: g = "clippingAncestors",
      rootBoundary: v = "viewport",
      elementContext: A = "floating",
      altBoundary: b = !1,
      padding: _ = 0,
    } = Ra(l, a),
    S = fv(_),
    Q = m[b ? (A === "floating" ? "reference" : "floating") : A],
    F = Ts(
      await f.getClippingRect({
        element:
          (r = await (f.isElement == null ? void 0 : f.isElement(Q))) == null ||
          r
            ? Q
            : Q.contextElement ||
              (await (f.getDocumentElement == null
                ? void 0
                : f.getDocumentElement(m.floating))),
        boundary: g,
        rootBoundary: v,
        strategy: p,
      })
    ),
    I =
      A === "floating"
        ? { x: o, y: u, width: d.floating.width, height: d.floating.height }
        : d.reference,
    N = await (f.getOffsetParent == null
      ? void 0
      : f.getOffsetParent(m.floating)),
    j = (await (f.isElement == null ? void 0 : f.isElement(N)))
      ? (await (f.getScale == null ? void 0 : f.getScale(N))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    M = Ts(
      f.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await f.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: m,
            rect: I,
            offsetParent: N,
            strategy: p,
          })
        : I
    );
  return {
    top: (F.top - M.top + S.top) / j.y,
    bottom: (M.bottom - F.bottom + S.bottom) / j.y,
    left: (F.left - M.left + S.left) / j.x,
    right: (M.right - F.right + S.right) / j.x,
  };
}
const Px = function (a) {
  return (
    a === void 0 && (a = {}),
    {
      name: "flip",
      options: a,
      async fn(l) {
        var r, o;
        const {
            placement: u,
            middlewareData: f,
            rects: d,
            initialPlacement: m,
            platform: p,
            elements: g,
          } = l,
          {
            mainAxis: v = !0,
            crossAxis: A = !0,
            fallbackPlacements: b,
            fallbackStrategy: _ = "bestFit",
            fallbackAxisSideDirection: S = "none",
            flipAlignment: w = !0,
            ...Q
          } = Ra(a, l);
        if ((r = f.arrow) != null && r.alignmentOffset) return {};
        const F = hn(u),
          I = Tn(m),
          N = hn(m) === m,
          j = await (p.isRTL == null ? void 0 : p.isRTL(g.floating)),
          M = b || (N || !w ? [Rs(m)] : Cx(m)),
          Y = S !== "none";
        !b && Y && M.push(...Ox(m, w, S, j));
        const K = [m, ...M],
          J = await kr(l, Q),
          he = [];
        let pe = ((o = f.flip) == null ? void 0 : o.overflows) || [];
        if ((v && he.push(J[F]), A)) {
          const te = Sx(u, d, j);
          he.push(J[te[0]], J[te[1]]);
        }
        if (
          ((pe = [...pe, { placement: u, overflows: he }]),
          !he.every((te) => te <= 0))
        ) {
          var fe, Z;
          const te = (((fe = f.flip) == null ? void 0 : fe.index) || 0) + 1,
            se = K[te];
          if (
            se &&
            (!(A === "alignment" ? I !== Tn(se) : !1) ||
              pe.every((z) =>
                Tn(z.placement) === I ? z.overflows[0] > 0 : !0
              ))
          )
            return {
              data: { index: te, overflows: pe },
              reset: { placement: se },
            };
          let O =
            (Z = pe
              .filter((D) => D.overflows[0] <= 0)
              .sort((D, z) => D.overflows[1] - z.overflows[1])[0]) == null
              ? void 0
              : Z.placement;
          if (!O)
            switch (_) {
              case "bestFit": {
                var H;
                const D =
                  (H = pe
                    .filter((z) => {
                      if (Y) {
                        const le = Tn(z.placement);
                        return le === I || le === "y";
                      }
                      return !0;
                    })
                    .map((z) => [
                      z.placement,
                      z.overflows
                        .filter((le) => le > 0)
                        .reduce((le, ce) => le + ce, 0),
                    ])
                    .sort((z, le) => z[1] - le[1])[0]) == null
                    ? void 0
                    : H[0];
                D && (O = D);
                break;
              }
              case "initialPlacement":
                O = m;
                break;
            }
          if (u !== O) return { reset: { placement: O } };
        }
        return {};
      },
    }
  );
};
function Gp(a, l) {
  return {
    top: a.top - l.height,
    right: a.right - l.width,
    bottom: a.bottom - l.height,
    left: a.left - l.width,
  };
}
function Yp(a) {
  return bx.some((l) => a[l] >= 0);
}
const $x = function (a) {
    return (
      a === void 0 && (a = {}),
      {
        name: "hide",
        options: a,
        async fn(l) {
          const { rects: r } = l,
            { strategy: o = "referenceHidden", ...u } = Ra(a, l);
          switch (o) {
            case "referenceHidden": {
              const f = await kr(l, { ...u, elementContext: "reference" }),
                d = Gp(f, r.reference);
              return {
                data: { referenceHiddenOffsets: d, referenceHidden: Yp(d) },
              };
            }
            case "escaped": {
              const f = await kr(l, { ...u, altBoundary: !0 }),
                d = Gp(f, r.floating);
              return { data: { escapedOffsets: d, escaped: Yp(d) } };
            }
            default:
              return {};
          }
        },
      }
    );
  },
  gv = new Set(["left", "top"]);
async function Wx(a, l) {
  const { placement: r, platform: o, elements: u } = a,
    f = await (o.isRTL == null ? void 0 : o.isRTL(u.floating)),
    d = hn(r),
    m = ai(r),
    p = Tn(r) === "y",
    g = gv.has(d) ? -1 : 1,
    v = f && p ? -1 : 1,
    A = Ra(l, a);
  let {
    mainAxis: b,
    crossAxis: _,
    alignmentAxis: S,
  } = typeof A == "number"
    ? { mainAxis: A, crossAxis: 0, alignmentAxis: null }
    : {
        mainAxis: A.mainAxis || 0,
        crossAxis: A.crossAxis || 0,
        alignmentAxis: A.alignmentAxis,
      };
  return (
    m && typeof S == "number" && (_ = m === "end" ? S * -1 : S),
    p ? { x: _ * v, y: b * g } : { x: b * g, y: _ * v }
  );
}
const e1 = function (a) {
    return (
      a === void 0 && (a = 0),
      {
        name: "offset",
        options: a,
        async fn(l) {
          var r, o;
          const { x: u, y: f, placement: d, middlewareData: m } = l,
            p = await Wx(l, a);
          return d === ((r = m.offset) == null ? void 0 : r.placement) &&
            (o = m.arrow) != null &&
            o.alignmentOffset
            ? {}
            : { x: u + p.x, y: f + p.y, data: { ...p, placement: d } };
        },
      }
    );
  },
  t1 = function (a) {
    return (
      a === void 0 && (a = {}),
      {
        name: "shift",
        options: a,
        async fn(l) {
          const { x: r, y: o, placement: u } = l,
            {
              mainAxis: f = !0,
              crossAxis: d = !1,
              limiter: m = {
                fn: (Q) => {
                  let { x: F, y: I } = Q;
                  return { x: F, y: I };
                },
              },
              ...p
            } = Ra(a, l),
            g = { x: r, y: o },
            v = await kr(l, p),
            A = Tn(hn(u)),
            b = cd(A);
          let _ = g[b],
            S = g[A];
          if (f) {
            const Q = b === "y" ? "top" : "left",
              F = b === "y" ? "bottom" : "right",
              I = _ + v[Q],
              N = _ - v[F];
            _ = Vf(I, _, N);
          }
          if (d) {
            const Q = A === "y" ? "top" : "left",
              F = A === "y" ? "bottom" : "right",
              I = S + v[Q],
              N = S - v[F];
            S = Vf(I, S, N);
          }
          const w = m.fn({ ...l, [b]: _, [A]: S });
          return {
            ...w,
            data: { x: w.x - r, y: w.y - o, enabled: { [b]: f, [A]: d } },
          };
        },
      }
    );
  },
  n1 = function (a) {
    return (
      a === void 0 && (a = {}),
      {
        options: a,
        fn(l) {
          const { x: r, y: o, placement: u, rects: f, middlewareData: d } = l,
            { offset: m = 0, mainAxis: p = !0, crossAxis: g = !0 } = Ra(a, l),
            v = { x: r, y: o },
            A = Tn(u),
            b = cd(A);
          let _ = v[b],
            S = v[A];
          const w = Ra(m, l),
            Q =
              typeof w == "number"
                ? { mainAxis: w, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ...w };
          if (p) {
            const N = b === "y" ? "height" : "width",
              j = f.reference[b] - f.floating[N] + Q.mainAxis,
              M = f.reference[b] + f.reference[N] - Q.mainAxis;
            _ < j ? (_ = j) : _ > M && (_ = M);
          }
          if (g) {
            var F, I;
            const N = b === "y" ? "width" : "height",
              j = gv.has(hn(u)),
              M =
                f.reference[A] -
                f.floating[N] +
                ((j && ((F = d.offset) == null ? void 0 : F[A])) || 0) +
                (j ? 0 : Q.crossAxis),
              Y =
                f.reference[A] +
                f.reference[N] +
                (j ? 0 : ((I = d.offset) == null ? void 0 : I[A]) || 0) -
                (j ? Q.crossAxis : 0);
            S < M ? (S = M) : S > Y && (S = Y);
          }
          return { [b]: _, [A]: S };
        },
      }
    );
  },
  a1 = function (a) {
    return (
      a === void 0 && (a = {}),
      {
        name: "size",
        options: a,
        async fn(l) {
          var r, o;
          const { placement: u, rects: f, platform: d, elements: m } = l,
            { apply: p = () => {}, ...g } = Ra(a, l),
            v = await kr(l, g),
            A = hn(u),
            b = ai(u),
            _ = Tn(u) === "y",
            { width: S, height: w } = f.floating;
          let Q, F;
          A === "top" || A === "bottom"
            ? ((Q = A),
              (F =
                b ===
                ((await (d.isRTL == null ? void 0 : d.isRTL(m.floating)))
                  ? "start"
                  : "end")
                  ? "left"
                  : "right"))
            : ((F = A), (Q = b === "end" ? "top" : "bottom"));
          const I = w - v.top - v.bottom,
            N = S - v.left - v.right,
            j = El(w - v[Q], I),
            M = El(S - v[F], N),
            Y = !l.middlewareData.shift;
          let K = j,
            J = M;
          if (
            ((r = l.middlewareData.shift) != null && r.enabled.x && (J = N),
            (o = l.middlewareData.shift) != null && o.enabled.y && (K = I),
            Y && !b)
          ) {
            const pe = fn(v.left, 0),
              fe = fn(v.right, 0),
              Z = fn(v.top, 0),
              H = fn(v.bottom, 0);
            _
              ? (J =
                  S -
                  2 * (pe !== 0 || fe !== 0 ? pe + fe : fn(v.left, v.right)))
              : (K =
                  w - 2 * (Z !== 0 || H !== 0 ? Z + H : fn(v.top, v.bottom)));
          }
          await p({ ...l, availableWidth: J, availableHeight: K });
          const he = await d.getDimensions(m.floating);
          return S !== he.width || w !== he.height
            ? { reset: { rects: !0 } }
            : {};
        },
      }
    );
  };
function pv(a) {
  const l = On(a);
  let r = parseFloat(l.width) || 0,
    o = parseFloat(l.height) || 0;
  const u = mn(a),
    f = u ? a.offsetWidth : r,
    d = u ? a.offsetHeight : o,
    m = ws(r) !== f || ws(o) !== d;
  return (m && ((r = f), (o = d)), { width: r, height: o, $: m });
}
function pd(a) {
  return nt(a) ? a : a.contextElement;
}
function _l(a) {
  const l = pd(a);
  if (!mn(l)) return Zn(1);
  const r = l.getBoundingClientRect(),
    { width: o, height: u, $: f } = pv(l);
  let d = (f ? ws(r.width) : r.width) / o,
    m = (f ? ws(r.height) : r.height) / u;
  return (
    (!d || !Number.isFinite(d)) && (d = 1),
    (!m || !Number.isFinite(m)) && (m = 1),
    { x: d, y: m }
  );
}
const i1 = Zn(0);
function yv(a) {
  const l = Ht(a);
  return !Hs() || !l.visualViewport
    ? i1
    : { x: l.visualViewport.offsetLeft, y: l.visualViewport.offsetTop };
}
function l1(a, l, r) {
  return (l === void 0 && (l = !1), !r || (l && r !== Ht(a)) ? !1 : l);
}
function zi(a, l, r, o) {
  (l === void 0 && (l = !1), r === void 0 && (r = !1));
  const u = a.getBoundingClientRect(),
    f = pd(a);
  let d = Zn(1);
  l && (o ? nt(o) && (d = _l(o)) : (d = _l(a)));
  const m = l1(f, r, o) ? yv(f) : Zn(0);
  let p = (u.left + m.x) / d.x,
    g = (u.top + m.y) / d.y,
    v = u.width / d.x,
    A = u.height / d.y;
  if (f) {
    const b = Ht(f),
      _ = o && nt(o) ? Ht(o) : o;
    let S = b,
      w = Uf(S);
    for (; w && o && _ !== S; ) {
      const Q = _l(w),
        F = w.getBoundingClientRect(),
        I = On(w),
        N = F.left + (w.clientLeft + parseFloat(I.paddingLeft)) * Q.x,
        j = F.top + (w.clientTop + parseFloat(I.paddingTop)) * Q.y;
      ((p *= Q.x),
        (g *= Q.y),
        (v *= Q.x),
        (A *= Q.y),
        (p += N),
        (g += j),
        (S = Ht(w)),
        (w = Uf(S)));
    }
  }
  return Ts({ width: v, height: A, x: p, y: g });
}
function Gs(a, l) {
  const r = js(a).scrollLeft;
  return l ? l.left + r : zi(Pn(a)).left + r;
}
function vv(a, l) {
  const r = a.getBoundingClientRect(),
    o = r.left + l.scrollLeft - Gs(a, r),
    u = r.top + l.scrollTop;
  return { x: o, y: u };
}
function r1(a) {
  let { elements: l, rect: r, offsetParent: o, strategy: u } = a;
  const f = u === "fixed",
    d = Pn(o),
    m = l ? Qs(l.floating) : !1;
  if (o === d || (m && f)) return r;
  let p = { scrollLeft: 0, scrollTop: 0 },
    g = Zn(1);
  const v = Zn(0),
    A = mn(o);
  if (
    (A || (!A && !f)) &&
    ((Ol(o) !== "body" || Ur(d)) && (p = js(o)), mn(o))
  ) {
    const _ = zi(o);
    ((g = _l(o)), (v.x = _.x + o.clientLeft), (v.y = _.y + o.clientTop));
  }
  const b = d && !A && !f ? vv(d, p) : Zn(0);
  return {
    width: r.width * g.x,
    height: r.height * g.y,
    x: r.x * g.x - p.scrollLeft * g.x + v.x + b.x,
    y: r.y * g.y - p.scrollTop * g.y + v.y + b.y,
  };
}
function o1(a) {
  return Array.from(a.getClientRects());
}
function s1(a) {
  const l = Pn(a),
    r = js(a),
    o = a.ownerDocument.body,
    u = fn(l.scrollWidth, l.clientWidth, o.scrollWidth, o.clientWidth),
    f = fn(l.scrollHeight, l.clientHeight, o.scrollHeight, o.clientHeight);
  let d = -r.scrollLeft + Gs(a);
  const m = -r.scrollTop;
  return (
    On(o).direction === "rtl" && (d += fn(l.clientWidth, o.clientWidth) - u),
    { width: u, height: f, x: d, y: m }
  );
}
const qp = 25;
function u1(a, l) {
  const r = Ht(a),
    o = Pn(a),
    u = r.visualViewport;
  let f = o.clientWidth,
    d = o.clientHeight,
    m = 0,
    p = 0;
  if (u) {
    ((f = u.width), (d = u.height));
    const v = Hs();
    (!v || (v && l === "fixed")) && ((m = u.offsetLeft), (p = u.offsetTop));
  }
  const g = Gs(o);
  if (g <= 0) {
    const v = o.ownerDocument,
      A = v.body,
      b = getComputedStyle(A),
      _ =
        (v.compatMode === "CSS1Compat" &&
          parseFloat(b.marginLeft) + parseFloat(b.marginRight)) ||
        0,
      S = Math.abs(o.clientWidth - A.clientWidth - _);
    S <= qp && (f -= S);
  } else g <= qp && (f += g);
  return { width: f, height: d, x: m, y: p };
}
const c1 = new Set(["absolute", "fixed"]);
function f1(a, l) {
  const r = zi(a, !0, l === "fixed"),
    o = r.top + a.clientTop,
    u = r.left + a.clientLeft,
    f = mn(a) ? _l(a) : Zn(1),
    d = a.clientWidth * f.x,
    m = a.clientHeight * f.y,
    p = u * f.x,
    g = o * f.y;
  return { width: d, height: m, x: p, y: g };
}
function Kp(a, l, r) {
  let o;
  if (l === "viewport") o = u1(a, r);
  else if (l === "document") o = s1(Pn(a));
  else if (nt(l)) o = f1(l, r);
  else {
    const u = yv(a);
    o = { x: l.x - u.x, y: l.y - u.y, width: l.width, height: l.height };
  }
  return Ts(o);
}
function Av(a, l) {
  const r = wa(a);
  return r === l || !nt(r) || Ca(r)
    ? !1
    : On(r).position === "fixed" || Av(r, l);
}
function d1(a, l) {
  const r = l.get(a);
  if (r) return r;
  let o = ni(a, [], !1).filter((m) => nt(m) && Ol(m) !== "body"),
    u = null;
  const f = On(a).position === "fixed";
  let d = f ? wa(a) : a;
  for (; nt(d) && !Ca(d); ) {
    const m = On(d),
      p = ud(d);
    (!p && m.position === "fixed" && (u = null),
      (
        f
          ? !p && !u
          : (!p && m.position === "static" && !!u && c1.has(u.position)) ||
            (Ur(d) && !p && Av(a, d))
      )
        ? (o = o.filter((v) => v !== d))
        : (u = m),
      (d = wa(d)));
  }
  return (l.set(a, o), o);
}
function h1(a) {
  let { element: l, boundary: r, rootBoundary: o, strategy: u } = a;
  const d = [
      ...(r === "clippingAncestors"
        ? Qs(l)
          ? []
          : d1(l, this._c)
        : [].concat(r)),
      o,
    ],
    m = d[0],
    p = d.reduce(
      (g, v) => {
        const A = Kp(l, v, u);
        return (
          (g.top = fn(A.top, g.top)),
          (g.right = El(A.right, g.right)),
          (g.bottom = El(A.bottom, g.bottom)),
          (g.left = fn(A.left, g.left)),
          g
        );
      },
      Kp(l, m, u)
    );
  return {
    width: p.right - p.left,
    height: p.bottom - p.top,
    x: p.left,
    y: p.top,
  };
}
function m1(a) {
  const { width: l, height: r } = pv(a);
  return { width: l, height: r };
}
function g1(a, l, r) {
  const o = mn(l),
    u = Pn(l),
    f = r === "fixed",
    d = zi(a, !0, f, l);
  let m = { scrollLeft: 0, scrollTop: 0 };
  const p = Zn(0);
  function g() {
    p.x = Gs(u);
  }
  if (o || (!o && !f))
    if (((Ol(l) !== "body" || Ur(u)) && (m = js(l)), o)) {
      const _ = zi(l, !0, f, l);
      ((p.x = _.x + l.clientLeft), (p.y = _.y + l.clientTop));
    } else u && g();
  f && !o && u && g();
  const v = u && !o && !f ? vv(u, m) : Zn(0),
    A = d.left + m.scrollLeft - p.x - v.x,
    b = d.top + m.scrollTop - p.y - v.y;
  return { x: A, y: b, width: d.width, height: d.height };
}
function gf(a) {
  return On(a).position === "static";
}
function Xp(a, l) {
  if (!mn(a) || On(a).position === "fixed") return null;
  if (l) return l(a);
  let r = a.offsetParent;
  return (Pn(a) === r && (r = r.ownerDocument.body), r);
}
function bv(a, l) {
  const r = Ht(a);
  if (Qs(a)) return r;
  if (!mn(a)) {
    let u = wa(a);
    for (; u && !Ca(u); ) {
      if (nt(u) && !gf(u)) return u;
      u = wa(u);
    }
    return r;
  }
  let o = Xp(a, l);
  for (; o && W_(o) && gf(o); ) o = Xp(o, l);
  return o && Ca(o) && gf(o) && !ud(o) ? r : o || ix(a) || r;
}
const p1 = async function (a) {
  const l = this.getOffsetParent || bv,
    r = this.getDimensions,
    o = await r(a.floating);
  return {
    reference: g1(a.reference, await l(a.floating), a.strategy),
    floating: { x: 0, y: 0, width: o.width, height: o.height },
  };
};
function y1(a) {
  return On(a).direction === "rtl";
}
const v1 = {
  convertOffsetParentRelativeRectToViewportRelativeRect: r1,
  getDocumentElement: Pn,
  getClippingRect: h1,
  getOffsetParent: bv,
  getElementRects: p1,
  getClientRects: o1,
  getDimensions: m1,
  getScale: _l,
  isElement: nt,
  isRTL: y1,
};
function _v(a, l) {
  return (
    a.x === l.x && a.y === l.y && a.width === l.width && a.height === l.height
  );
}
function A1(a, l) {
  let r = null,
    o;
  const u = Pn(a);
  function f() {
    var m;
    (clearTimeout(o), (m = r) == null || m.disconnect(), (r = null));
  }
  function d(m, p) {
    (m === void 0 && (m = !1), p === void 0 && (p = 1), f());
    const g = a.getBoundingClientRect(),
      { left: v, top: A, width: b, height: _ } = g;
    if ((m || l(), !b || !_)) return;
    const S = ss(A),
      w = ss(u.clientWidth - (v + b)),
      Q = ss(u.clientHeight - (A + _)),
      F = ss(v),
      N = {
        rootMargin: -S + "px " + -w + "px " + -Q + "px " + -F + "px",
        threshold: fn(0, El(1, p)) || 1,
      };
    let j = !0;
    function M(Y) {
      const K = Y[0].intersectionRatio;
      if (K !== p) {
        if (!j) return d();
        K
          ? d(!1, K)
          : (o = setTimeout(() => {
              d(!1, 1e-7);
            }, 1e3));
      }
      (K === 1 && !_v(g, a.getBoundingClientRect()) && d(), (j = !1));
    }
    try {
      r = new IntersectionObserver(M, { ...N, root: u.ownerDocument });
    } catch {
      r = new IntersectionObserver(M, N);
    }
    r.observe(a);
  }
  return (d(!0), f);
}
function Fp(a, l, r, o) {
  o === void 0 && (o = {});
  const {
      ancestorScroll: u = !0,
      ancestorResize: f = !0,
      elementResize: d = typeof ResizeObserver == "function",
      layoutShift: m = typeof IntersectionObserver == "function",
      animationFrame: p = !1,
    } = o,
    g = pd(a),
    v = u || f ? [...(g ? ni(g) : []), ...ni(l)] : [];
  v.forEach((F) => {
    (u && F.addEventListener("scroll", r, { passive: !0 }),
      f && F.addEventListener("resize", r));
  });
  const A = g && m ? A1(g, r) : null;
  let b = -1,
    _ = null;
  d &&
    ((_ = new ResizeObserver((F) => {
      let [I] = F;
      (I &&
        I.target === g &&
        _ &&
        (_.unobserve(l),
        cancelAnimationFrame(b),
        (b = requestAnimationFrame(() => {
          var N;
          (N = _) == null || N.observe(l);
        }))),
        r());
    })),
    g && !p && _.observe(g),
    _.observe(l));
  let S,
    w = p ? zi(a) : null;
  p && Q();
  function Q() {
    const F = zi(a);
    (w && !_v(w, F) && r(), (w = F), (S = requestAnimationFrame(Q)));
  }
  return (
    r(),
    () => {
      var F;
      (v.forEach((I) => {
        (u && I.removeEventListener("scroll", r),
          f && I.removeEventListener("resize", r));
      }),
        A?.(),
        (F = _) == null || F.disconnect(),
        (_ = null),
        p && cancelAnimationFrame(S));
    }
  );
}
const b1 = e1,
  _1 = t1,
  x1 = Px,
  E1 = a1,
  S1 = $x,
  C1 = n1,
  w1 = (a, l, r) => {
    const o = new Map(),
      u = { platform: v1, ...r },
      f = { ...u.platform, _c: o };
    return Jx(a, l, { ...u, platform: f });
  };
var R1 = typeof document < "u",
  T1 = function () {},
  vs = R1 ? T.useLayoutEffect : T1;
function Os(a, l) {
  if (a === l) return !0;
  if (typeof a != typeof l) return !1;
  if (typeof a == "function" && a.toString() === l.toString()) return !0;
  let r, o, u;
  if (a && l && typeof a == "object") {
    if (Array.isArray(a)) {
      if (((r = a.length), r !== l.length)) return !1;
      for (o = r; o-- !== 0; ) if (!Os(a[o], l[o])) return !1;
      return !0;
    }
    if (((u = Object.keys(a)), (r = u.length), r !== Object.keys(l).length))
      return !1;
    for (o = r; o-- !== 0; ) if (!{}.hasOwnProperty.call(l, u[o])) return !1;
    for (o = r; o-- !== 0; ) {
      const f = u[o];
      if (!(f === "_owner" && a.$$typeof) && !Os(a[f], l[f])) return !1;
    }
    return !0;
  }
  return a !== a && l !== l;
}
function xv(a) {
  return typeof window > "u"
    ? 1
    : (a.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Zp(a, l) {
  const r = xv(a);
  return Math.round(l * r) / r;
}
function pf(a) {
  const l = T.useRef(a);
  return (
    vs(() => {
      l.current = a;
    }),
    l
  );
}
function O1(a) {
  a === void 0 && (a = {});
  const {
      placement: l = "bottom",
      strategy: r = "absolute",
      middleware: o = [],
      platform: u,
      elements: { reference: f, floating: d } = {},
      transform: m = !0,
      whileElementsMounted: p,
      open: g,
    } = a,
    [v, A] = T.useState({
      x: 0,
      y: 0,
      strategy: r,
      placement: l,
      middlewareData: {},
      isPositioned: !1,
    }),
    [b, _] = T.useState(o);
  Os(b, o) || _(o);
  const [S, w] = T.useState(null),
    [Q, F] = T.useState(null),
    I = T.useCallback((z) => {
      z !== Y.current && ((Y.current = z), w(z));
    }, []),
    N = T.useCallback((z) => {
      z !== K.current && ((K.current = z), F(z));
    }, []),
    j = f || S,
    M = d || Q,
    Y = T.useRef(null),
    K = T.useRef(null),
    J = T.useRef(v),
    he = p != null,
    pe = pf(p),
    fe = pf(u),
    Z = pf(g),
    H = T.useCallback(() => {
      if (!Y.current || !K.current) return;
      const z = { placement: l, strategy: r, middleware: b };
      (fe.current && (z.platform = fe.current),
        w1(Y.current, K.current, z).then((le) => {
          const ce = { ...le, isPositioned: Z.current !== !1 };
          te.current &&
            !Os(J.current, ce) &&
            ((J.current = ce),
            Tl.flushSync(() => {
              A(ce);
            }));
        }));
    }, [b, l, r, fe, Z]);
  vs(() => {
    g === !1 &&
      J.current.isPositioned &&
      ((J.current.isPositioned = !1), A((z) => ({ ...z, isPositioned: !1 })));
  }, [g]);
  const te = T.useRef(!1);
  (vs(
    () => (
      (te.current = !0),
      () => {
        te.current = !1;
      }
    ),
    []
  ),
    vs(() => {
      if ((j && (Y.current = j), M && (K.current = M), j && M)) {
        if (pe.current) return pe.current(j, M, H);
        H();
      }
    }, [j, M, H, pe, he]));
  const se = T.useMemo(
      () => ({ reference: Y, floating: K, setReference: I, setFloating: N }),
      [I, N]
    ),
    O = T.useMemo(() => ({ reference: j, floating: M }), [j, M]),
    D = T.useMemo(() => {
      const z = { position: r, left: 0, top: 0 };
      if (!O.floating) return z;
      const le = Zp(O.floating, v.x),
        ce = Zp(O.floating, v.y);
      return m
        ? {
            ...z,
            transform: "translate(" + le + "px, " + ce + "px)",
            ...(xv(O.floating) >= 1.5 && { willChange: "transform" }),
          }
        : { position: r, left: le, top: ce };
    }, [r, m, O.floating, v.x, v.y]);
  return T.useMemo(
    () => ({ ...v, update: H, refs: se, elements: O, floatingStyles: D }),
    [v, H, se, O, D]
  );
}
const z1 = (a, l) => ({ ...b1(a), options: [a, l] }),
  M1 = (a, l) => ({ ..._1(a), options: [a, l] }),
  D1 = (a, l) => ({ ...C1(a), options: [a, l] }),
  B1 = (a, l) => ({ ...x1(a), options: [a, l] }),
  N1 = (a, l) => ({ ...E1(a), options: [a, l] }),
  k1 = (a, l) => ({ ...S1(a), options: [a, l] }),
  L1 = { intentional: "onClick", sloppy: "onPointerDown" };
function Jp(a) {
  return {
    escapeKey: typeof a == "boolean" ? a : (a?.escapeKey ?? !1),
    outsidePress: typeof a == "boolean" ? a : (a?.outsidePress ?? !0),
  };
}
function U1(a, l = {}) {
  const { open: r, onOpenChange: o, elements: u, dataRef: f } = a,
    {
      enabled: d = !0,
      escapeKey: m = !0,
      outsidePress: p = !0,
      outsidePressEvent: g = "sloppy",
      referencePress: v = !1,
      referencePressEvent: A = "sloppy",
      ancestorScroll: b = !1,
      bubbles: _,
      capture: S,
    } = l,
    w = gd(),
    Q = Ze(typeof p == "function" ? p : () => !1),
    F = typeof p == "function" ? Q : p,
    I = T.useRef(!1),
    { escapeKey: N, outsidePress: j } = Jp(_),
    { escapeKey: M, outsidePress: Y } = Jp(S),
    K = T.useRef(null),
    J = Oi(),
    he = Oi(),
    pe = T.useRef(!1),
    fe = T.useRef(""),
    Z = Ze((q) => {
      fe.current = q.pointerType;
    }),
    H = Ze(() => {
      const q = fe.current,
        ae = q === "pen" || !q ? "mouse" : q,
        _e = typeof g == "function" ? g() : g;
      return typeof _e == "string" ? _e : _e[ae];
    }),
    te = Ze((q) => {
      if (!r || !d || !m || q.key !== "Escape" || pe.current) return;
      const ae = f.current.floatingContext?.nodeId,
        _e = w ? Dr(w.nodesRef.current, ae) : [];
      if (!N && _e.length > 0) {
        let Le = !0;
        if (
          (_e.forEach((we) => {
            we.context?.open &&
              !we.context.dataRef.current.__escapeKeyBubbles &&
              (Le = !1);
          }),
          !Le)
        )
          return;
      }
      const de = Ax(q) ? q.nativeEvent : q,
        Ee = Lt("escape-key", de);
      (o(!1, Ee), !N && !Ee.isPropagationAllowed && q.stopPropagation());
    }),
    se = Ze((q) => {
      const ae = H();
      return (
        (ae === "intentional" && q.type !== "click") ||
        (ae === "sloppy" && q.type === "click")
      );
    }),
    O = Ze((q) => {
      const ae = () => {
        (te(q), Kn(q)?.removeEventListener("keydown", ae));
      };
      Kn(q)?.addEventListener("keydown", ae);
    }),
    D = Ze((q, ae = !1) => {
      if (se(q)) return;
      const _e = f.current.insideReactTree;
      if (
        ((f.current.insideReactTree = !1),
        (H() === "intentional" && ae) ||
          _e ||
          (typeof F == "function" && !F(q)))
      )
        return;
      const de = Kn(q),
        Ee = `[${Is("inert")}]`,
        Le = wi(u.floating).querySelectorAll(Ee);
      let we = nt(de) ? de : null;
      for (; we && !Ca(we); ) {
        const qe = wa(we);
        if (Ca(qe) || !nt(qe)) break;
        we = qe;
      }
      if (
        Le.length &&
        nt(de) &&
        !px(de) &&
        !Fn(de, u.floating) &&
        Array.from(Le).every((qe) => !Fn(we, qe))
      )
        return;
      if (mn(de)) {
        const qe = Ca(de),
          ht = On(de),
          $n = /auto|scroll/,
          zn = qe || $n.test(ht.overflowX),
          C = qe || $n.test(ht.overflowY),
          L = zn && de.clientWidth > 0 && de.scrollWidth > de.clientWidth,
          $ = C && de.clientHeight > 0 && de.scrollHeight > de.clientHeight,
          me = ht.direction === "rtl",
          re =
            $ &&
            (me
              ? q.offsetX <= de.offsetWidth - de.clientWidth
              : q.offsetX > de.clientWidth),
          ue = L && q.offsetY > de.clientHeight;
        if (re || ue) return;
      }
      const Ut = f.current.floatingContext?.nodeId,
        ze =
          w &&
          Dr(w.nodesRef.current, Ut).some((qe) =>
            ba(q, qe.context?.elements.floating)
          );
      if (ba(q, u.floating) || ba(q, u.domReference) || ze) return;
      const ot = w ? Dr(w.nodesRef.current, Ut) : [];
      if (ot.length > 0) {
        let qe = !0;
        if (
          (ot.forEach((ht) => {
            ht.context?.open &&
              !ht.context.dataRef.current.__outsidePressBubbles &&
              (qe = !1);
          }),
          !qe)
        )
          return;
      }
      o(!1, Lt("outside-press", q));
    }),
    z = Ze((q) => {
      if (
        !(
          H() !== "sloppy" ||
          !r ||
          !d ||
          ba(q, u.floating) ||
          ba(q, u.domReference)
        )
      ) {
        if (q.pointerType === "touch") {
          ((K.current = {
            startTime: Date.now(),
            startX: q.clientX,
            startY: q.clientY,
            dismissOnPointerUp: !1,
            dismissOnMouseDown: !0,
          }),
            J.start(1e3, () => {
              K.current &&
                ((K.current.dismissOnPointerUp = !1),
                (K.current.dismissOnMouseDown = !1));
            }));
          return;
        }
        D(q);
      }
    }),
    le = Ze((q) => {
      const ae = I.current;
      if (
        ((I.current = !1),
        se(q) ||
          (J.clear(),
          q.type === "mousedown" && K.current && !K.current.dismissOnMouseDown))
      )
        return;
      const _e = () => {
        (q.type === "pointerdown" ? z(q) : D(q, ae),
          Kn(q)?.removeEventListener(q.type, _e));
      };
      Kn(q)?.addEventListener(q.type, _e);
    }),
    ce = Ze((q) => {
      if (
        H() !== "sloppy" ||
        q.pointerType !== "touch" ||
        !K.current ||
        ba(q, u.floating) ||
        ba(q, u.domReference)
      )
        return;
      const ae = Math.abs(q.clientX - K.current.startX),
        _e = Math.abs(q.clientY - K.current.startY),
        de = Math.sqrt(ae * ae + _e * _e);
      (de > 5 && (K.current.dismissOnPointerUp = !0),
        de > 10 && (D(q), J.clear(), (K.current = null)));
    }),
    x = Ze((q) => {
      H() !== "sloppy" ||
        q.pointerType !== "touch" ||
        !K.current ||
        ba(q, u.floating) ||
        ba(q, u.domReference) ||
        (K.current.dismissOnPointerUp && D(q), J.clear(), (K.current = null));
    });
  (T.useEffect(() => {
    if (!r || !d) return;
    ((f.current.__escapeKeyBubbles = N), (f.current.__outsidePressBubbles = j));
    const q = new zl();
    function ae(we) {
      o(!1, Lt("none", we));
    }
    function _e() {
      (q.clear(), (pe.current = !0));
    }
    function de() {
      q.start(Hs() ? 5 : 0, () => {
        pe.current = !1;
      });
    }
    const Ee = wi(u.floating);
    (Ee.addEventListener("pointerdown", Z, !0),
      m &&
        (Ee.addEventListener("keydown", M ? O : te, M),
        Ee.addEventListener("compositionstart", _e),
        Ee.addEventListener("compositionend", de)),
      F &&
        (Ee.addEventListener("click", Y ? le : D, Y),
        Ee.addEventListener("pointerdown", Y ? le : D, Y),
        Ee.addEventListener("pointermove", ce, Y),
        Ee.addEventListener("pointerup", x, Y),
        Ee.addEventListener("mousedown", le, Y)));
    let Le = [];
    return (
      b &&
        (nt(u.domReference) && (Le = ni(u.domReference)),
        nt(u.floating) && (Le = Le.concat(ni(u.floating))),
        !nt(u.reference) &&
          u.reference &&
          u.reference.contextElement &&
          (Le = Le.concat(ni(u.reference.contextElement)))),
      (Le = Le.filter((we) => we !== Ee.defaultView?.visualViewport)),
      Le.forEach((we) => {
        we.addEventListener("scroll", ae, { passive: !0 });
      }),
      () => {
        (Ee.removeEventListener("pointerdown", Z, !0),
          m &&
            (Ee.removeEventListener("keydown", M ? O : te, M),
            Ee.removeEventListener("compositionstart", _e),
            Ee.removeEventListener("compositionend", de)),
          F &&
            (Ee.removeEventListener("click", Y ? le : D, Y),
            Ee.removeEventListener("pointerdown", Y ? le : D, Y),
            Ee.removeEventListener("pointermove", ce, Y),
            Ee.removeEventListener("pointerup", x, Y),
            Ee.removeEventListener("mousedown", le, Y)),
          Le.forEach((we) => {
            we.removeEventListener("scroll", ae);
          }),
          q.clear());
      }
    );
  }, [f, u, m, F, r, o, b, d, N, j, te, M, O, D, Y, le, z, ce, x, Z]),
    T.useEffect(() => {
      f.current.insideReactTree = !1;
    }, [f, F]));
  const k = T.useMemo(
      () => ({
        onKeyDown: te,
        ...(v && {
          [L1[A]]: (q) => {
            o(!1, Lt("trigger-press", q.nativeEvent));
          },
          ...(A !== "intentional" && {
            onClick(q) {
              o(!1, Lt("trigger-press", q.nativeEvent));
            },
          }),
        }),
      }),
      [te, o, v, A]
    ),
    P = Ze((q) => {
      const ae = Kn(q.nativeEvent);
      !Fn(u.floating, ae) || q.button !== 0 || (I.current = !0);
    }),
    ie = Ze(() => {
      ((f.current.insideReactTree = !0),
        he.start(0, () => {
          f.current.insideReactTree = !1;
        }));
    }),
    oe = T.useMemo(
      () => ({
        onKeyDown: te,
        onMouseDown: P,
        onMouseUp: P,
        onPointerDownCapture: ie,
        onMouseDownCapture: ie,
        onClickCapture: ie,
        onMouseUpCapture: ie,
      }),
      [te, P, ie]
    );
  return T.useMemo(() => (d ? { reference: k, floating: oe } : {}), [d, k, oe]);
}
function Ev(a) {
  const { open: l = !1, onOpenChange: r, elements: o } = a,
    u = od(),
    f = T.useRef({}),
    [d] = T.useState(() => Vx()),
    m = hv() != null,
    [p, g] = T.useState(o.reference),
    v = Ze((_, S) => {
      if (((f.current.openEvent = _ ? S.event : void 0), !a.noEmit)) {
        const w = {
          open: _,
          reason: S.reason,
          nativeEvent: S.event,
          nested: m,
        };
        d.emit("openchange", w);
      }
      r?.(_, S);
    }),
    A = T.useMemo(() => ({ setPositionReference: g }), []),
    b = T.useMemo(
      () => ({
        reference: p || o.reference || null,
        floating: o.floating || null,
        domReference: o.reference,
      }),
      [p, o.reference, o.floating]
    );
  return T.useMemo(
    () => ({
      dataRef: f,
      open: l,
      onOpenChange: v,
      elements: b,
      events: d,
      floatingId: u,
      refs: A,
    }),
    [l, v, b, d, u, A]
  );
}
function V1(a = {}) {
  const { nodeId: l } = a,
    r = Ev({
      ...a,
      elements: { reference: null, floating: null, ...a.elements },
    }),
    o = a.rootContext || r,
    u = o.elements,
    [f, d] = T.useState(null),
    [m, p] = T.useState(null),
    v = u?.domReference || f,
    A = T.useRef(null),
    b = gd();
  lt(() => {
    v && (A.current = v);
  }, [v]);
  const _ = O1({ ...a, elements: { ...u, ...(m && { reference: m }) } }),
    S = T.useCallback(
      (N) => {
        const j = nt(N)
          ? {
              getBoundingClientRect: () => N.getBoundingClientRect(),
              getClientRects: () => N.getClientRects(),
              contextElement: N,
            }
          : N;
        (p(j), _.refs.setReference(j));
      },
      [_.refs]
    ),
    w = T.useCallback(
      (N) => {
        ((nt(N) || N === null) && ((A.current = N), d(N)),
          (nt(_.refs.reference.current) ||
            _.refs.reference.current === null ||
            (N !== null && !nt(N))) &&
            _.refs.setReference(N));
      },
      [_.refs]
    ),
    Q = T.useMemo(
      () => ({
        ..._.refs,
        setReference: w,
        setPositionReference: S,
        domReference: A,
      }),
      [_.refs, w, S]
    ),
    F = T.useMemo(() => ({ ..._.elements, domReference: v }), [_.elements, v]),
    I = T.useMemo(
      () => ({ ..._, ...o, refs: Q, elements: F, nodeId: l }),
      [_, Q, F, l, o]
    );
  return (
    lt(() => {
      o.dataRef.current.floatingContext = I;
      const N = b?.nodesRef.current.find((j) => j.id === l);
      N && (N.context = I);
    }),
    T.useMemo(() => ({ ..._, context: I, refs: Q, elements: F }), [_, Q, F, I])
  );
}
const yf = ux && sx;
function Q1(a, l = {}) {
  const { open: r, onOpenChange: o, events: u, dataRef: f, elements: d } = a,
    { enabled: m = !0, visibleOnly: p = !0 } = l,
    g = T.useRef(!1),
    v = Oi(),
    A = T.useRef(!0);
  (T.useEffect(() => {
    if (!m) return;
    const _ = Ht(d.domReference);
    function S() {
      !r &&
        mn(d.domReference) &&
        d.domReference === Lp(wi(d.domReference)) &&
        (g.current = !0);
    }
    function w() {
      A.current = !0;
    }
    function Q() {
      A.current = !1;
    }
    return (
      _.addEventListener("blur", S),
      yf &&
        (_.addEventListener("keydown", w, !0),
        _.addEventListener("pointerdown", Q, !0)),
      () => {
        (_.removeEventListener("blur", S),
          yf &&
            (_.removeEventListener("keydown", w, !0),
            _.removeEventListener("pointerdown", Q, !0)));
      }
    );
  }, [d.domReference, r, m]),
    T.useEffect(() => {
      if (!m) return;
      function _(S) {
        (S.reason === "trigger-press" || S.reason === "escape-key") &&
          (g.current = !0);
      }
      return (
        u.on("openchange", _),
        () => {
          u.off("openchange", _);
        }
      );
    }, [u, m]));
  const b = T.useMemo(
    () => ({
      onMouseLeave() {
        g.current = !1;
      },
      onFocus(_) {
        if (g.current) return;
        const S = Kn(_.nativeEvent);
        if (p && nt(S)) {
          if (yf && !_.relatedTarget) {
            if (!A.current && !yx(S)) return;
          } else if (!vx(S)) return;
        }
        o(!0, Lt("trigger-focus", _.nativeEvent));
      },
      onBlur(_) {
        g.current = !1;
        const S = _.relatedTarget,
          w = _.nativeEvent,
          Q =
            nt(S) &&
            S.hasAttribute(Is("focus-guard")) &&
            S.getAttribute("data-type") === "outside";
        v.start(0, () => {
          const F = Lp(
            d.domReference ? d.domReference.ownerDocument : document
          );
          (!S && F === d.domReference) ||
            Fn(f.current.floatingContext?.refs.floating.current, F) ||
            Fn(d.domReference, F) ||
            Q ||
            o(!1, Lt("trigger-focus", w));
        });
      },
    }),
    [f, d.domReference, o, p, v]
  );
  return T.useMemo(() => (m ? { reference: b } : {}), [m, b]);
}
function H1(a = []) {
  const l = a.map((m) => m?.reference),
    r = a.map((m) => m?.floating),
    o = a.map((m) => m?.item),
    u = T.useCallback((m) => vf(m, a, "reference"), l),
    f = T.useCallback((m) => vf(m, a, "floating"), r),
    d = T.useCallback((m) => vf(m, a, "item"), o);
  return T.useMemo(
    () => ({ getReferenceProps: u, getFloatingProps: f, getItemProps: d }),
    [u, f, d]
  );
}
function vf(a, l, r) {
  const o = new Map(),
    u = r === "item",
    f = {};
  r === "floating" && ((f.tabIndex = -1), (f[mx] = ""));
  for (const d in a) (u && a && (d === uv || d === cv)) || (f[d] = a[d]);
  for (let d = 0; d < l.length; d += 1) {
    let m;
    const p = l[d]?.[r];
    (typeof p == "function" ? (m = a ? p(a) : null) : (m = p),
      m && Pp(f, m, u, o));
  }
  return (Pp(f, a, u, o), f);
}
function Pp(a, l, r, o) {
  for (const u in l) {
    const f = l[u];
    (r && (u === uv || u === cv)) ||
      (u.startsWith("on")
        ? (o.has(u) || o.set(u, []),
          typeof f == "function" &&
            (o.get(u)?.push(f),
            (a[u] = (...d) =>
              o
                .get(u)
                ?.map((m) => m(...d))
                .find((m) => m !== void 0))))
        : (a[u] = f));
  }
}
function $p(a, l) {
  const [r, o] = a;
  let u = !1;
  const f = l.length;
  for (let d = 0, m = f - 1; d < f; m = d++) {
    const [p, g] = l[d] || [0, 0],
      [v, A] = l[m] || [0, 0];
    g >= o != A >= o && r <= ((v - p) * (o - g)) / (A - g) + p && (u = !u);
  }
  return u;
}
function j1(a, l) {
  return (
    a[0] >= l.x &&
    a[0] <= l.x + l.width &&
    a[1] >= l.y &&
    a[1] <= l.y + l.height
  );
}
function I1(a = {}) {
  const {
      buffer: l = 0.5,
      blockPointerEvents: r = !1,
      requireIntent: o = !0,
    } = a,
    u = new zl();
  let f = !1,
    d = null,
    m = null,
    p = typeof performance < "u" ? performance.now() : 0;
  function g(A, b) {
    const _ = performance.now(),
      S = _ - p;
    if (d === null || m === null || S === 0)
      return ((d = A), (m = b), (p = _), null);
    const w = A - d,
      Q = b - m,
      I = Math.sqrt(w * w + Q * Q) / S;
    return ((d = A), (m = b), (p = _), I);
  }
  const v = ({
    x: A,
    y: b,
    placement: _,
    elements: S,
    onClose: w,
    nodeId: Q,
    tree: F,
  }) =>
    function (N) {
      function j() {
        (u.clear(), w());
      }
      if (
        (u.clear(),
        !S.domReference || !S.floating || _ == null || A == null || b == null)
      )
        return;
      const { clientX: M, clientY: Y } = N,
        K = [M, Y],
        J = Kn(N),
        he = N.type === "mouseleave",
        pe = Fn(S.floating, J),
        fe = Fn(S.domReference, J),
        Z = S.domReference.getBoundingClientRect(),
        H = S.floating.getBoundingClientRect(),
        te = _.split("-")[0],
        se = A > H.right - H.width / 2,
        O = b > H.bottom - H.height / 2,
        D = j1(K, Z),
        z = H.width > Z.width,
        le = H.height > Z.height,
        ce = (z ? Z : H).left,
        x = (z ? Z : H).right,
        k = (le ? Z : H).top,
        P = (le ? Z : H).bottom;
      if (pe && ((f = !0), !he)) return;
      if ((fe && (f = !1), fe && !he)) {
        f = !0;
        return;
      }
      if (
        (he && nt(N.relatedTarget) && Fn(S.floating, N.relatedTarget)) ||
        (F && Dr(F.nodesRef.current, Q).some(({ context: q }) => q?.open))
      )
        return;
      if (
        (te === "top" && b >= Z.bottom - 1) ||
        (te === "bottom" && b <= Z.top + 1) ||
        (te === "left" && A >= Z.right - 1) ||
        (te === "right" && A <= Z.left + 1)
      )
        return j();
      let ie = [];
      switch (te) {
        case "top":
          ie = [
            [ce, Z.top + 1],
            [ce, H.bottom - 1],
            [x, H.bottom - 1],
            [x, Z.top + 1],
          ];
          break;
        case "bottom":
          ie = [
            [ce, H.top + 1],
            [ce, Z.bottom - 1],
            [x, Z.bottom - 1],
            [x, H.top + 1],
          ];
          break;
        case "left":
          ie = [
            [H.right - 1, P],
            [H.right - 1, k],
            [Z.left + 1, k],
            [Z.left + 1, P],
          ];
          break;
        case "right":
          ie = [
            [Z.right - 1, P],
            [Z.right - 1, k],
            [H.left + 1, k],
            [H.left + 1, P],
          ];
          break;
      }
      function oe([q, ae]) {
        switch (te) {
          case "top": {
            const _e = [z ? q + l / 2 : se ? q + l * 4 : q - l * 4, ae + l + 1],
              de = [z ? q - l / 2 : se ? q + l * 4 : q - l * 4, ae + l + 1],
              Ee = [
                [H.left, se || z ? H.bottom - l : H.top],
                [H.right, se ? (z ? H.bottom - l : H.top) : H.bottom - l],
              ];
            return [_e, de, ...Ee];
          }
          case "bottom": {
            const _e = [z ? q + l / 2 : se ? q + l * 4 : q - l * 4, ae - l],
              de = [z ? q - l / 2 : se ? q + l * 4 : q - l * 4, ae - l],
              Ee = [
                [H.left, se || z ? H.top + l : H.bottom],
                [H.right, se ? (z ? H.top + l : H.bottom) : H.top + l],
              ];
            return [_e, de, ...Ee];
          }
          case "left": {
            const _e = [
                q + l + 1,
                le ? ae + l / 2 : O ? ae + l * 4 : ae - l * 4,
              ],
              de = [q + l + 1, le ? ae - l / 2 : O ? ae + l * 4 : ae - l * 4];
            return [
              ...[
                [O || le ? H.right - l : H.left, H.top],
                [O ? (le ? H.right - l : H.left) : H.right - l, H.bottom],
              ],
              _e,
              de,
            ];
          }
          case "right": {
            const _e = [q - l, le ? ae + l / 2 : O ? ae + l * 4 : ae - l * 4],
              de = [q - l, le ? ae - l / 2 : O ? ae + l * 4 : ae - l * 4],
              Ee = [
                [O || le ? H.left + l : H.right, H.top],
                [O ? (le ? H.left + l : H.right) : H.left + l, H.bottom],
              ];
            return [_e, de, ...Ee];
          }
          default:
            return [];
        }
      }
      if (!$p([M, Y], ie)) {
        if (f && !D) return j();
        if (!he && o) {
          const q = g(N.clientX, N.clientY);
          if (q !== null && q < 0.1) return j();
        }
        $p([M, Y], oe([A, b])) ? !f && o && u.start(40, j) : j();
      }
    };
  return ((v.__options = { blockPointerEvents: r }), v);
}
let Wp = (function (a) {
  return (
    (a.disabled = "data-disabled"),
    (a.valid = "data-valid"),
    (a.invalid = "data-invalid"),
    (a.touched = "data-touched"),
    (a.dirty = "data-dirty"),
    (a.filled = "data-filled"),
    (a.focused = "data-focused"),
    a
  );
})({});
const Ys = {
    badInput: !1,
    customError: !1,
    patternMismatch: !1,
    rangeOverflow: !1,
    rangeUnderflow: !1,
    stepMismatch: !1,
    tooLong: !1,
    tooShort: !1,
    typeMismatch: !1,
    valid: null,
    valueMissing: !1,
  },
  yd = {
    valid(a) {
      return a === null ? null : a ? { [Wp.valid]: "" } : { [Wp.invalid]: "" };
    },
  },
  Sv = T.createContext({
    invalid: void 0,
    controlId: void 0,
    setControlId: Vn,
    labelId: void 0,
    setLabelId: Vn,
    messageIds: [],
    setMessageIds: Vn,
    name: void 0,
    validityData: {
      state: Ys,
      errors: [],
      error: "",
      value: "",
      initialValue: null,
    },
    setValidityData: Vn,
    disabled: void 0,
    touched: !1,
    setTouched: Vn,
    dirty: !1,
    setDirty: Vn,
    filled: !1,
    setFilled: Vn,
    focused: !1,
    setFocused: Vn,
    validate: () => null,
    validationMode: "onBlur",
    validationDebounceTime: 0,
    state: {
      disabled: !1,
      valid: null,
      touched: !1,
      dirty: !1,
      filled: !1,
      focused: !1,
    },
    markedDirtyRef: { current: !1 },
  });
function Lr(a = !0) {
  const l = T.useContext(Sv);
  if (l.setControlId === Vn && !a)
    throw new Error(
      "Base UI: FieldRootContext is missing. Field parts must be placed within <Field.Root>."
    );
  return l;
}
const G1 = T.createContext({
  formRef: { current: { fields: new Map() } },
  errors: {},
  clearErrors: Vn,
});
function vd() {
  return T.useContext(G1);
}
function Hf(a, l) {
  return { ...a, state: { ...a.state, valid: !l && a.state.valid } };
}
const As = Object.keys(Ys);
function Y1(a) {
  if (!a || a.valid || !a.valueMissing) return !1;
  let l = !1;
  for (const r of As)
    r !== "valid" && (r === "valueMissing" && (l = a[r]), a[r] && (l = !1));
  return l;
}
function q1() {
  const {
      setValidityData: a,
      validate: l,
      messageIds: r,
      validityData: o,
      validationMode: u,
      validationDebounceTime: f,
      invalid: d,
      markedDirtyRef: m,
      controlId: p,
      state: g,
      name: v,
    } = Lr(),
    { formRef: A, clearErrors: b } = vd(),
    _ = Oi(),
    S = T.useRef(null),
    w = Ze(async (I, N = !1) => {
      const j = S.current;
      if (!j) return;
      if (N) {
        if (g.valid !== !1) return;
        const fe = j.validity;
        if (!fe.valueMissing) {
          const H = {
            value: I,
            state: { ...Ys, valid: !0 },
            error: "",
            errors: [],
            initialValue: o.initialValue,
          };
          if ((j.setCustomValidity(""), p)) {
            const te = A.current.fields.get(p);
            te && A.current.fields.set(p, { ...te, ...Hf(H, !1) });
          }
          a(H);
          return;
        }
        const Z = As.reduce((H, te) => ((H[te] = fe[te]), H), {});
        if (!Z.valid && !Y1(Z)) return;
      }
      function M(fe) {
        const Z = As.reduce((te, se) => ((te[se] = fe.validity[se]), te), {});
        let H = !1;
        for (const te of As)
          if (te !== "valid") {
            if (te === "valueMissing" && Z[te]) H = !0;
            else if (Z[te]) return Z;
          }
        return (H && !m.current && ((Z.valid = !0), (Z.valueMissing = !1)), Z);
      }
      _.clear();
      let Y = null,
        K = [];
      const J = M(j);
      let he;
      if (j.validationMessage)
        ((he = j.validationMessage), (K = [j.validationMessage]));
      else {
        const fe = Array.from(A.current.fields.values()).reduce(
            (H, te) => (
              te.name &&
                te.getValueRef &&
                (H[te.name] = te.getValueRef.current?.()),
              H
            ),
            {}
          ),
          Z = l(I, fe);
        (typeof Z == "object" && Z !== null && "then" in Z
          ? (Y = await Z)
          : (Y = Z),
          Y !== null &&
            ((J.valid = !1),
            (J.customError = !0),
            Array.isArray(Y)
              ? ((K = Y),
                j.setCustomValidity(
                  Y.join(`
`)
                ))
              : Y && ((K = [Y]), j.setCustomValidity(Y))));
      }
      const pe = {
        value: I,
        state: J,
        error: he ?? (Array.isArray(Y) ? Y[0] : (Y ?? "")),
        errors: K,
        initialValue: o.initialValue,
      };
      if (p) {
        const fe = A.current.fields.get(p);
        fe && A.current.fields.set(p, { ...fe, ...Hf(pe, d) });
      }
      a(pe);
    }),
    Q = T.useCallback(
      (I = {}) =>
        Mf(
          {
            ...(r.length && { "aria-describedby": r.join(" ") }),
            ...(g.valid === !1 && { "aria-invalid": !0 }),
          },
          I
        ),
      [r, g.valid]
    ),
    F = T.useCallback(
      (I = {}) =>
        Mf(
          {
            onChange(N) {
              if (N.nativeEvent.defaultPrevented) return;
              if ((b(v), u !== "onChange")) {
                w(N.currentTarget.value, !0);
                return;
              }
              if (d) return;
              const j = N.currentTarget;
              if (j.value === "") {
                w(j.value);
                return;
              }
              (_.clear(),
                f
                  ? _.start(f, () => {
                      w(j.value);
                    })
                  : w(j.value));
            },
          },
          Q(I)
        ),
      [Q, b, v, _, w, d, u, f]
    );
  return T.useMemo(
    () => ({
      getValidationProps: Q,
      getInputValidationProps: F,
      inputRef: S,
      commitValidation: w,
    }),
    [Q, F, w]
  );
}
function K1(a) {
  const { formRef: l } = vd(),
    {
      invalid: r,
      markedDirtyRef: o,
      validityData: u,
      setValidityData: f,
    } = Lr(),
    {
      enabled: d = !0,
      value: m,
      id: p,
      name: g,
      controlRef: v,
      commitValidation: A,
    } = a,
    b = Sa(a.getValue);
  (lt(() => {
    if (!d) return;
    let _ = m;
    (_ === void 0 && (_ = b.current?.()),
      u.initialValue === null &&
        _ !== u.initialValue &&
        f((S) => ({ ...S, initialValue: _ })));
  }, [d, f, m, u.initialValue, b]),
    lt(() => {
      d &&
        p &&
        l.current.fields.set(p, {
          controlRef: v,
          validityData: Hf(u, r),
          validate() {
            let _ = m;
            (_ === void 0 && (_ = b.current?.()),
              (o.current = !0),
              Tl.flushSync(() => A(_)));
          },
          getValueRef: b,
          name: g,
        });
    }, [A, v, d, l, b, p, r, o, g, u, m]),
    lt(() => {
      const _ = l.current.fields;
      return () => {
        p && _.delete(p);
      };
    }, [l, p]));
}
const X1 = (a) => ({
    name: "arrow",
    options: a,
    async fn(l) {
      const {
          x: r,
          y: o,
          placement: u,
          rects: f,
          platform: d,
          elements: m,
          middlewareData: p,
        } = l,
        {
          element: g,
          padding: v = 0,
          offsetParent: A = "real",
        } = Ra(a, l) || {};
      if (g == null) return {};
      const b = fv(v),
        _ = { x: r, y: o },
        S = dd(u),
        w = fd(S),
        Q = await d.getDimensions(g),
        F = S === "y",
        I = F ? "top" : "left",
        N = F ? "bottom" : "right",
        j = F ? "clientHeight" : "clientWidth",
        M = f.reference[w] + f.reference[S] - _[S] - f.floating[w],
        Y = _[S] - f.reference[S],
        K = A === "real" ? await d.getOffsetParent?.(g) : m.floating;
      let J = m.floating[j] || f.floating[w];
      (!J || !(await d.isElement?.(K))) && (J = m.floating[j] || f.floating[w]);
      const he = M / 2 - Y / 2,
        pe = J / 2 - Q[w] / 2 - 1,
        fe = Math.min(b[I], pe),
        Z = Math.min(b[N], pe),
        H = fe,
        te = J - Q[w] - Z,
        se = J / 2 - Q[w] / 2 + he,
        O = Vf(H, se, te),
        D =
          !p.arrow &&
          ai(u) != null &&
          se !== O &&
          f.reference[w] / 2 - (se < H ? fe : Z) - Q[w] / 2 < 0,
        z = D ? (se < H ? se - H : se - te) : 0;
      return {
        [S]: _[S] + z,
        data: {
          [S]: O,
          centerOffset: se - O - z,
          ...(D && { alignmentOffset: z }),
        },
        reset: D,
      };
    },
  }),
  F1 = (a, l) => ({ ...X1(a), options: [a, l] });
function Cv(a, l, r) {
  const o = a === "inline-start" || a === "inline-end";
  return {
    top: "top",
    right: o ? (r ? "inline-start" : "inline-end") : "right",
    bottom: "bottom",
    left: o ? (r ? "inline-end" : "inline-start") : "left",
  }[l];
}
function ey(a, l, r) {
  const { rects: o, placement: u } = a;
  return {
    side: Cv(l, hn(u), r),
    align: ai(u) || "center",
    anchor: { width: o.reference.width, height: o.reference.height },
    positioner: { width: o.floating.width, height: o.floating.height },
  };
}
function Z1(a) {
  const {
      anchor: l,
      positionMethod: r = "absolute",
      side: o = "bottom",
      sideOffset: u = 0,
      align: f = "center",
      alignOffset: d = 0,
      collisionBoundary: m,
      collisionPadding: p = 5,
      sticky: g = !1,
      arrowPadding: v = 5,
      trackAnchor: A = !0,
      keepMounted: b = !1,
      floatingRootContext: _,
      mounted: S,
      collisionAvoidance: w,
      shiftCrossAxis: Q = !1,
      nodeId: F,
      adaptiveOrigin: I,
      lazyFlip: N = !1,
    } = a,
    [j, M] = T.useState(null);
  !S && j !== null && M(null);
  const Y = w.side || "flip",
    K = w.align || "flip",
    J = w.fallbackAxisSide || "end",
    he = typeof l == "function" ? l : void 0,
    pe = Ze(he),
    fe = he ? pe : l,
    Z = Sa(l),
    te = Q_() === "rtl",
    se =
      j ||
      {
        top: "top",
        right: "right",
        bottom: "bottom",
        left: "left",
        "inline-end": te ? "left" : "right",
        "inline-start": te ? "right" : "left",
      }[o],
    O = f === "center" ? se : `${se}-${f}`;
  let D = p;
  const z = 1,
    le = o === "bottom" ? z : 0,
    ce = o === "top" ? z : 0,
    x = o === "right" ? z : 0,
    k = o === "left" ? z : 0;
  typeof D == "number"
    ? (D = { top: D + le, right: D + k, bottom: D + ce, left: D + x })
    : D &&
      (D = {
        top: (D.top || 0) + le,
        right: (D.right || 0) + k,
        bottom: (D.bottom || 0) + ce,
        left: (D.left || 0) + x,
      });
  const P = {
      boundary: m === "clipping-ancestors" ? "clippingAncestors" : m,
      padding: D,
    },
    ie = T.useRef(null),
    oe = Sa(u),
    q = Sa(d),
    de = [
      z1(
        (Be) => {
          const Ct = ey(Be, o, te),
            Vt = typeof oe.current == "function" ? oe.current(Ct) : oe.current,
            jt = typeof q.current == "function" ? q.current(Ct) : q.current;
          return { mainAxis: Vt, crossAxis: jt, alignmentAxis: jt };
        },
        [typeof u != "function" ? u : 0, typeof d != "function" ? d : 0, te, o]
      ),
    ],
    Ee = K === "none" && Y !== "shift",
    Le = !Ee && (g || Q || Y === "shift"),
    we =
      Y === "none"
        ? null
        : B1({
            ...P,
            padding: {
              top: D.top + z,
              right: D.right + z,
              bottom: D.bottom + z,
              left: D.left + z,
            },
            mainAxis: !Q && Y === "flip",
            crossAxis: K === "flip" ? "alignment" : !1,
            fallbackAxisSideDirection: J,
          }),
    Ut = Ee
      ? null
      : M1(
          (Be) => {
            const Ct = Yx(Be.elements.floating).documentElement;
            return {
              ...P,
              rootBoundary: Q
                ? { x: 0, y: 0, width: Ct.clientWidth, height: Ct.clientHeight }
                : void 0,
              mainAxis: K !== "none",
              crossAxis: Le,
              limiter:
                g || Q
                  ? void 0
                  : D1((Vt) => {
                      if (!ie.current) return {};
                      const { width: jt, height: Mn } =
                          ie.current.getBoundingClientRect(),
                        Dn = Tn(hn(Vt.placement)),
                        Wn = Dn === "y" ? jt : Mn,
                        Bn = Dn === "y" ? D.left + D.right : D.top + D.bottom;
                      return { offset: Wn / 2 + Bn / 2 };
                    }),
            };
          },
          [P, g, Q, D, K]
        );
  (Y === "shift" || K === "shift" || f === "center"
    ? de.push(Ut, we)
    : de.push(we, Ut),
    de.push(
      N1({
        ...P,
        apply({
          elements: { floating: Be },
          rects: { reference: Ct },
          availableWidth: Vt,
          availableHeight: jt,
        }) {
          Object.entries({
            "--available-width": `${Vt}px`,
            "--available-height": `${jt}px`,
            "--anchor-width": `${Ct.width}px`,
            "--anchor-height": `${Ct.height}px`,
          }).forEach(([Mn, Dn]) => {
            Be.style.setProperty(Mn, Dn);
          });
        },
      }),
      F1(
        () => ({
          element: ie.current || document.createElement("div"),
          padding: v,
          offsetParent: "floating",
        }),
        [v]
      ),
      k1(),
      {
        name: "transformOrigin",
        fn(Be) {
          const {
              elements: Ct,
              middlewareData: Vt,
              placement: jt,
              rects: Mn,
              y: Dn,
            } = Be,
            Wn = hn(jt),
            Bn = Tn(Wn),
            ii = ie.current,
            li = Vt.arrow?.x || 0,
            Js = Vt.arrow?.y || 0,
            Hr = ii?.clientWidth || 0,
            Dl = ii?.clientHeight || 0,
            ea = li + Hr / 2,
            jr = Js + Dl / 2,
            Ir = Math.abs(Vt.shift?.y || 0),
            Gr = Mn.reference.height / 2,
            Ta = typeof u == "function" ? u(ey(Be, o, te)) : u,
            Bl = Ir > Ta,
            Nl = {
              top: `${ea}px calc(100% + ${Ta}px)`,
              bottom: `${ea}px ${-Ta}px`,
              left: `calc(100% + ${Ta}px) ${jr}px`,
              right: `${-Ta}px ${jr}px`,
            }[Wn],
            Yr = `${ea}px ${Mn.reference.y + Gr - Dn}px`;
          return (
            Ct.floating.style.setProperty(
              "--transform-origin",
              Le && Bn === "y" && Bl ? Yr : Nl
            ),
            {}
          );
        },
      },
      I
    ));
  let ze = _;
  !S &&
    _ &&
    (ze = {
      ..._,
      elements: { reference: null, floating: null, domReference: null },
    });
  const ot = T.useMemo(
      () => ({
        elementResize: A && typeof ResizeObserver < "u",
        layoutShift: A && typeof IntersectionObserver < "u",
      }),
      [A]
    ),
    {
      refs: qe,
      elements: ht,
      x: $n,
      y: zn,
      middlewareData: C,
      update: L,
      placement: $,
      context: me,
      isPositioned: re,
      floatingStyles: ue,
    } = V1({
      rootContext: ze,
      placement: O,
      middleware: de,
      strategy: r,
      whileElementsMounted: b ? void 0 : (...Be) => Fp(...Be, ot),
      nodeId: F,
    }),
    { sideX: xe, sideY: Qe } = C.adaptiveOrigin || {},
    je = T.useMemo(
      () => (I ? { position: r, [xe]: `${$n}px`, [Qe]: `${zn}px` } : ue),
      [I, xe, Qe, r, $n, zn, ue]
    ),
    _t = T.useRef(null);
  (lt(() => {
    if (!S) return;
    const Be = Z.current,
      Ct = typeof Be == "function" ? Be() : Be,
      jt = (ty(Ct) ? Ct.current : Ct) || null || null;
    jt !== _t.current && (qe.setPositionReference(jt), (_t.current = jt));
  }, [S, qe, fe, Z]),
    T.useEffect(() => {
      if (!S) return;
      const Be = Z.current;
      typeof Be != "function" &&
        ty(Be) &&
        Be.current !== _t.current &&
        (qe.setPositionReference(Be.current), (_t.current = Be.current));
    }, [S, qe, fe, Z]),
    T.useEffect(() => {
      if (b && S && ht.domReference && ht.floating)
        return Fp(ht.domReference, ht.floating, L, ot);
    }, [b, S, ht, L, ot]));
  const $t = hn($),
    Wt = Cv(o, $t, te),
    Mi = ai($) || "center",
    gn = !!C.hide?.referenceHidden;
  lt(() => {
    N && S && re && M($t);
  }, [N, S, re, $t]);
  const mt = T.useMemo(
      () => ({ position: "absolute", top: C.arrow?.y, left: C.arrow?.x }),
      [C.arrow]
    ),
    en = C.arrow?.centerOffset !== 0;
  return T.useMemo(
    () => ({
      positionerStyles: je,
      arrowStyles: mt,
      arrowRef: ie,
      arrowUncentered: en,
      side: Wt,
      align: Mi,
      physicalSide: $t,
      anchorHidden: gn,
      refs: qe,
      context: me,
      isPositioned: re,
      update: L,
    }),
    [je, mt, ie, en, Wt, Mi, $t, gn, qe, me, re, L]
  );
}
function ty(a) {
  return a != null && "current" in a;
}
const wv = T.createContext(void 0);
function J1() {
  const a = T.useContext(wv);
  if (a === void 0)
    throw new Error(
      "Base UI: AvatarRootContext is missing. Avatar parts must be placed within <Avatar.Root>."
    );
  return a;
}
const Rv = { imageLoadingStatus: () => null },
  hw = T.forwardRef(function (l, r) {
    const { className: o, render: u, ...f } = l,
      [d, m] = T.useState("idle"),
      p = T.useMemo(() => ({ imageLoadingStatus: d }), [d]),
      g = T.useMemo(
        () => ({ imageLoadingStatus: d, setImageLoadingStatus: m }),
        [d, m]
      ),
      v = Jn("span", l, {
        state: p,
        ref: r,
        props: f,
        stateAttributesMapping: Rv,
      });
    return jn.jsx(wv.Provider, { value: g, children: v });
  });
function P1(a, { referrerPolicy: l, crossOrigin: r }) {
  const [o, u] = T.useState("idle");
  return (
    lt(() => {
      if (!a) return (u("error"), Vn);
      let f = !0;
      const d = new window.Image(),
        m = (p) => () => {
          f && u(p);
        };
      return (
        u("loading"),
        (d.onload = m("loaded")),
        (d.onerror = m("error")),
        l && (d.referrerPolicy = l),
        (d.crossOrigin = r ?? null),
        (d.src = a),
        () => {
          f = !1;
        }
      );
    }, [a, r, l]),
    o
  );
}
const mw = T.forwardRef(function (l, r) {
    const {
        className: o,
        render: u,
        onLoadingStatusChange: f,
        referrerPolicy: d,
        crossOrigin: m,
        ...p
      } = l,
      g = J1(),
      v = P1(l.src, { referrerPolicy: d, crossOrigin: m }),
      A = Ze((S) => {
        (f?.(S), g.setImageLoadingStatus(S));
      });
    lt(() => {
      v !== "idle" && A(v);
    }, [v, A]);
    const b = T.useMemo(() => ({ imageLoadingStatus: v }), [v]);
    return Jn("img", l, {
      state: b,
      ref: r,
      props: p,
      stateAttributesMapping: Rv,
      enabled: v === "loaded",
    });
  }),
  $1 = T.createContext({
    legendId: void 0,
    setLegendId: () => {},
    disabled: void 0,
  });
function W1() {
  return T.useContext($1);
}
const gw = T.forwardRef(function (l, r) {
    const {
        render: o,
        className: u,
        validate: f,
        validationDebounceTime: d = 0,
        validationMode: m = "onBlur",
        name: p,
        disabled: g = !1,
        invalid: v,
        ...A
      } = l,
      { disabled: b } = W1(),
      { errors: _ } = vd(),
      S = Ze(f || (() => null)),
      w = b || g,
      [Q, F] = T.useState(void 0),
      [I, N] = T.useState(void 0),
      [j, M] = T.useState([]),
      [Y, K] = T.useState(!1),
      [J, he] = T.useState(!1),
      [pe, fe] = T.useState(!1),
      [Z, H] = T.useState(!1),
      te = T.useRef(!1),
      se = T.useCallback((P) => {
        (P && (te.current = !0), he(P));
      }, []),
      O = !!(v || (p && {}.hasOwnProperty.call(_, p) && _[p] !== void 0)),
      [D, z] = T.useState({
        state: Ys,
        error: "",
        errors: [],
        value: null,
        initialValue: null,
      }),
      le = !O && D.state.valid,
      ce = T.useMemo(
        () => ({
          disabled: w,
          touched: Y,
          dirty: J,
          valid: le,
          filled: pe,
          focused: Z,
        }),
        [w, Y, J, le, pe, Z]
      ),
      x = T.useMemo(
        () => ({
          invalid: O,
          controlId: Q,
          setControlId: F,
          labelId: I,
          setLabelId: N,
          messageIds: j,
          setMessageIds: M,
          name: p,
          validityData: D,
          setValidityData: z,
          disabled: w,
          touched: Y,
          setTouched: K,
          dirty: J,
          setDirty: se,
          filled: pe,
          setFilled: fe,
          focused: Z,
          setFocused: H,
          validate: S,
          validationMode: m,
          validationDebounceTime: d,
          state: ce,
          markedDirtyRef: te,
        }),
        [O, Q, I, j, p, D, w, Y, J, se, pe, fe, Z, H, S, m, d, ce]
      ),
      k = Jn("div", l, {
        ref: r,
        state: ce,
        props: A,
        stateAttributesMapping: yd,
      });
    return jn.jsx(Sv.Provider, { value: x, children: k });
  }),
  pw = T.forwardRef(function (l, r) {
    const { render: o, className: u, id: f, ...d } = l,
      { labelId: m, setLabelId: p, state: g, controlId: v } = Lr(!1),
      A = lv(f),
      b = v ?? void 0;
    return (
      lt(
        () => (
          (v != null || f) && p(A),
          () => {
            p(void 0);
          }
        ),
        [v, A, f, p]
      ),
      Jn("label", l, {
        ref: r,
        state: g,
        props: [
          {
            id: m,
            htmlFor: b,
            onMouseDown(S) {
              Kn(S.nativeEvent)?.closest("button,input,select,textarea") ||
                (!S.defaultPrevented && S.detail > 1 && S.preventDefault());
            },
          },
          d,
        ],
        stateAttributesMapping: yd,
      })
    );
  }),
  yw = T.forwardRef(function (l, r) {
    const {
        render: o,
        className: u,
        id: f,
        name: d,
        value: m,
        disabled: p = !1,
        onValueChange: g,
        defaultValue: v,
        ...A
      } = l,
      { state: b, name: _, disabled: S } = Lr(),
      w = S || p,
      Q = _ ?? d,
      F = T.useMemo(() => ({ ...b, disabled: w }), [b, w]),
      {
        setControlId: I,
        labelId: N,
        setTouched: j,
        setDirty: M,
        validityData: Y,
        setFocused: K,
        setFilled: J,
        validationMode: he,
      } = Lr(),
      {
        getValidationProps: pe,
        getInputValidationProps: fe,
        commitValidation: Z,
        inputRef: H,
      } = q1(),
      te = lv(f);
    (lt(
      () => (
        I(te),
        () => {
          I(void 0);
        }
      ),
      [te, I]
    ),
      lt(() => {
        const ce = m != null;
        H.current?.value || (ce && m !== "") ? J(!0) : ce && m === "" && J(!1);
      }, [H, J, m]));
    const [se, O] = iv({
        controlled: m,
        default: v,
        name: "FieldControl",
        state: "value",
      }),
      D = m !== void 0,
      z = Ze((ce, x) => {
        (g?.(ce, x), !x.isCanceled && O(ce));
      });
    return (
      K1({
        id: te,
        name: Q,
        commitValidation: Z,
        value: se,
        getValue: () => H.current?.value,
        controlRef: H,
      }),
      Jn("input", l, {
        ref: r,
        state: F,
        props: [
          {
            id: te,
            disabled: w,
            name: Q,
            ref: H,
            "aria-labelledby": N,
            ...(D ? { value: se } : { defaultValue: v }),
            onChange(ce) {
              const x = ce.currentTarget.value;
              (z(x, Lt("none", ce.nativeEvent)),
                M(x !== Y.initialValue),
                J(x !== ""));
            },
            onFocus() {
              K(!0);
            },
            onBlur(ce) {
              (j(!0), K(!1), he === "onBlur" && Z(ce.currentTarget.value));
            },
            onKeyDown(ce) {
              ce.currentTarget.tagName === "INPUT" &&
                ce.key === "Enter" &&
                (j(!0), Z(ce.currentTarget.value));
            },
          },
          pe(),
          fe(),
          A,
        ],
        stateAttributesMapping: yd,
      })
    );
  });
function eE(a) {
  const l = Xx({ root: a.root });
  return l && Tl.createPortal(a.children, l);
}
const Tv = T.createContext(void 0);
function qs() {
  const a = T.useContext(Tv);
  if (a === void 0)
    throw new Error(
      "Base UI: TooltipRootContext is missing. Tooltip parts must be placed within <Tooltip.Root>."
    );
  return a;
}
const tE = 600,
  Ov = T.createContext(void 0);
function nE() {
  return T.useContext(Ov);
}
function vw(a) {
  const {
      disabled: l = !1,
      defaultOpen: r = !1,
      onOpenChange: o,
      open: u,
      delay: f,
      closeDelay: d,
      hoverable: m = !0,
      trackCursorAxis: p = "none",
      actionsRef: g,
      onOpenChangeComplete: v,
    } = a,
    A = f ?? tE,
    b = d ?? 0,
    [_, S] = T.useState(null),
    [w, Q] = T.useState(null),
    [F, I] = T.useState(),
    N = T.useRef(null),
    [j, M] = iv({ controlled: u, default: r, name: "Tooltip", state: "open" }),
    Y = !l && j;
  function K(ae, _e) {
    const de = _e.reason,
      Ee = de === "trigger-hover",
      Le = ae && de === "trigger-focus",
      we = !ae && (de === "trigger-press" || de === "escape-key");
    if ((o?.(ae, _e), _e.isCanceled)) return;
    function Ut() {
      M(ae);
    }
    (Ee ? Tl.flushSync(Ut) : Ut(),
      Le || we
        ? I(Le ? "focus" : "dismiss")
        : de === "trigger-hover" && I(void 0));
  }
  const J = Ze(K);
  j && l && K(!1, Lt("disabled"));
  const { mounted: he, setMounted: pe, transitionStatus: fe } = X_(Y),
    Z = Ze(() => {
      (pe(!1), v?.(!1));
    });
  (dv({
    enabled: !g,
    open: Y,
    ref: N,
    onComplete() {
      Y || Z();
    },
  }),
    T.useImperativeHandle(g, () => ({ unmount: Z }), [Z]));
  const H = Ev({
      elements: { reference: _, floating: w },
      open: Y,
      onOpenChange: J,
    }),
    te = nE(),
    { delayRef: se, isInstantPhase: O, hasProvider: D } = Gx(H),
    z = O ? "delay" : F,
    le = jx(H, {
      enabled: !l,
      mouseOnly: !0,
      move: !1,
      handleClose: m && p !== "both" ? I1() : null,
      restMs() {
        const ae = te?.delay,
          _e = typeof se.current == "object" ? se.current.open : void 0;
        let de = A;
        return (D && (_e !== 0 ? (de = f ?? ae ?? A) : (de = 0)), de);
      },
      delay() {
        const ae = typeof se.current == "object" ? se.current.close : void 0;
        let _e = b;
        return (d == null && D && (_e = ae), { close: _e });
      },
    }),
    ce = Q1(H, { enabled: !l }),
    x = U1(H, { enabled: !l, referencePress: !0 }),
    k = Zx(H, { enabled: !l && p !== "none", axis: p === "none" ? void 0 : p }),
    { getReferenceProps: P, getFloatingProps: ie } = H1([le, ce, x, k]),
    oe = T.useMemo(
      () => ({
        open: Y,
        setOpen: J,
        mounted: he,
        setMounted: pe,
        setTriggerElement: S,
        positionerElement: w,
        setPositionerElement: Q,
        popupRef: N,
        triggerProps: P(),
        popupProps: ie(),
        floatingRootContext: H,
        instantType: z,
        transitionStatus: fe,
        onOpenChangeComplete: v,
      }),
      [Y, J, he, pe, S, w, Q, N, P, ie, H, z, fe, v]
    ),
    q = T.useMemo(
      () => ({
        ...oe,
        delay: A,
        closeDelay: b,
        trackCursorAxis: p,
        hoverable: m,
      }),
      [oe, A, b, p, m]
    );
  return jn.jsx(Tv.Provider, { value: q, children: a.children });
}
const Aw = T.forwardRef(function (l, r) {
    const { className: o, render: u, ...f } = l,
      { open: d, setTriggerElement: m, triggerProps: p } = qs(),
      g = T.useMemo(() => ({ open: d }), [d]);
    return Jn("button", l, {
      state: g,
      ref: [r, m],
      props: [p, f],
      stateAttributesMapping: Ux,
    });
  }),
  zv = T.createContext(void 0);
function aE() {
  const a = T.useContext(zv);
  if (a === void 0) throw new Error("Base UI: <Tooltip.Portal> is missing.");
  return a;
}
function bw(a) {
  const { children: l, keepMounted: r = !1, container: o } = a,
    { mounted: u } = qs();
  return u || r
    ? jn.jsx(zv.Provider, {
        value: r,
        children: jn.jsx(eE, { root: o, children: l }),
      })
    : null;
}
const Mv = T.createContext(void 0);
function Dv() {
  const a = T.useContext(Mv);
  if (a === void 0)
    throw new Error(
      "Base UI: TooltipPositionerContext is missing. TooltipPositioner parts must be placed within <Tooltip.Positioner>."
    );
  return a;
}
const _w = T.forwardRef(function (l, r) {
    const {
        render: o,
        className: u,
        anchor: f,
        positionMethod: d = "absolute",
        side: m = "top",
        align: p = "center",
        sideOffset: g = 0,
        alignOffset: v = 0,
        collisionBoundary: A = "clipping-ancestors",
        collisionPadding: b = 5,
        arrowPadding: _ = 5,
        sticky: S = !1,
        trackAnchor: w = !0,
        collisionAvoidance: Q = p_,
        ...F
      } = l,
      {
        open: I,
        setPositionerElement: N,
        mounted: j,
        floatingRootContext: M,
        trackCursorAxis: Y,
        hoverable: K,
      } = qs(),
      J = aE(),
      he = Z1({
        anchor: f,
        positionMethod: d,
        floatingRootContext: M,
        mounted: j,
        side: m,
        sideOffset: g,
        align: p,
        alignOffset: v,
        collisionBoundary: A,
        collisionPadding: b,
        sticky: S,
        arrowPadding: _,
        trackAnchor: w,
        keepMounted: J,
        collisionAvoidance: Q,
      }),
      pe = T.useMemo(() => {
        const se = {};
        return (
          (!I || Y === "both" || !K) && (se.pointerEvents = "none"),
          {
            role: "presentation",
            hidden: !j,
            style: { ...he.positionerStyles, ...se },
          }
        );
      }, [I, Y, K, j, he.positionerStyles]),
      fe = T.useMemo(() => ({ props: pe, ...he }), [pe, he]),
      Z = T.useMemo(
        () => ({
          open: I,
          side: fe.side,
          align: fe.align,
          anchorHidden: fe.anchorHidden,
        }),
        [I, fe.side, fe.align, fe.anchorHidden]
      ),
      H = T.useMemo(
        () => ({
          ...Z,
          arrowRef: fe.arrowRef,
          arrowStyles: fe.arrowStyles,
          arrowUncentered: fe.arrowUncentered,
        }),
        [Z, fe.arrowRef, fe.arrowStyles, fe.arrowUncentered]
      ),
      te = Jn("div", l, {
        state: Z,
        props: [fe.props, F],
        ref: [r, N],
        stateAttributesMapping: md,
      });
    return jn.jsx(Mv.Provider, { value: H, children: te });
  }),
  iE = { ...md, ...J_ },
  xw = T.forwardRef(function (l, r) {
    const { className: o, render: u, ...f } = l,
      {
        open: d,
        instantType: m,
        transitionStatus: p,
        popupProps: g,
        popupRef: v,
        onOpenChangeComplete: A,
      } = qs(),
      { side: b, align: _ } = Dv();
    dv({
      open: d,
      ref: v,
      onComplete() {
        d && A?.(!0);
      },
    });
    const S = T.useMemo(
      () => ({ open: d, side: b, align: _, instant: m, transitionStatus: p }),
      [d, b, _, m, p]
    );
    return Jn("div", l, {
      state: S,
      ref: [r, v],
      props: [g, p === "starting" ? g_ : ti, f],
      stateAttributesMapping: iE,
    });
  }),
  Ew = T.forwardRef(function (l, r) {
    const { className: o, render: u, ...f } = l,
      {
        open: d,
        arrowRef: m,
        side: p,
        align: g,
        arrowUncentered: v,
        arrowStyles: A,
      } = Dv(),
      b = T.useMemo(
        () => ({ open: d, side: p, align: g, uncentered: v }),
        [d, p, g, v]
      );
    return Jn("div", l, {
      state: b,
      ref: [r, m],
      props: [{ style: A, "aria-hidden": !0 }, f],
      stateAttributesMapping: md,
    });
  }),
  Sw = function (l) {
    const { delay: r, closeDelay: o, timeout: u = 400 } = l,
      f = T.useMemo(() => ({ delay: r, closeDelay: o }), [r, o]),
      d = T.useMemo(() => ({ open: r, close: o }), [r, o]);
    return jn.jsx(Ov.Provider, {
      value: f,
      children: jn.jsx(Ix, { delay: d, timeoutMs: u, children: l.children }),
    });
  };
var Qr = (a) => a.type === "checkbox",
  Ri = (a) => a instanceof Date,
  Pt = (a) => a == null;
const Bv = (a) => typeof a == "object";
var bt = (a) => !Pt(a) && !Array.isArray(a) && Bv(a) && !Ri(a),
  Nv = (a) =>
    bt(a) && a.target ? (Qr(a.target) ? a.target.checked : a.target.value) : a,
  lE = (a) => a.substring(0, a.search(/\.\d+(\.|$)/)) || a,
  kv = (a, l) => a.has(lE(l)),
  rE = (a) => {
    const l = a.constructor && a.constructor.prototype;
    return bt(l) && l.hasOwnProperty("isPrototypeOf");
  },
  Ad =
    typeof window < "u" &&
    typeof window.HTMLElement < "u" &&
    typeof document < "u";
function St(a) {
  let l;
  const r = Array.isArray(a),
    o = typeof FileList < "u" ? a instanceof FileList : !1;
  if (a instanceof Date) l = new Date(a);
  else if (!(Ad && (a instanceof Blob || o)) && (r || bt(a)))
    if (((l = r ? [] : Object.create(Object.getPrototypeOf(a))), !r && !rE(a)))
      l = a;
    else for (const u in a) a.hasOwnProperty(u) && (l[u] = St(a[u]));
  else return a;
  return l;
}
var Ks = (a) => /^\w*$/.test(a),
  ct = (a) => a === void 0,
  bd = (a) => (Array.isArray(a) ? a.filter(Boolean) : []),
  _d = (a) => bd(a.replace(/["|']|\]/g, "").split(/\.|\[/)),
  ge = (a, l, r) => {
    if (!l || !bt(a)) return r;
    const o = (Ks(l) ? [l] : _d(l)).reduce((u, f) => (Pt(u) ? u : u[f]), a);
    return ct(o) || o === a ? (ct(a[l]) ? r : a[l]) : o;
  },
  cn = (a) => typeof a == "boolean",
  tt = (a, l, r) => {
    let o = -1;
    const u = Ks(l) ? [l] : _d(l),
      f = u.length,
      d = f - 1;
    for (; ++o < f; ) {
      const m = u[o];
      let p = r;
      if (o !== d) {
        const g = a[m];
        p = bt(g) || Array.isArray(g) ? g : isNaN(+u[o + 1]) ? {} : [];
      }
      if (m === "__proto__" || m === "constructor" || m === "prototype") return;
      ((a[m] = p), (a = a[m]));
    }
  };
const zs = { BLUR: "blur", FOCUS_OUT: "focusout", CHANGE: "change" },
  Qn = {
    onBlur: "onBlur",
    onChange: "onChange",
    onSubmit: "onSubmit",
    onTouched: "onTouched",
    all: "all",
  },
  _a = {
    max: "max",
    min: "min",
    maxLength: "maxLength",
    minLength: "minLength",
    pattern: "pattern",
    required: "required",
    validate: "validate",
  },
  xd = De.createContext(null);
xd.displayName = "HookFormContext";
const Ed = () => De.useContext(xd),
  Cw = (a) => {
    const { children: l, ...r } = a;
    return De.createElement(xd.Provider, { value: r }, l);
  };
var Lv = (a, l, r, o = !0) => {
  const u = { defaultValues: l._defaultValues };
  for (const f in a)
    Object.defineProperty(u, f, {
      get: () => {
        const d = f;
        return (
          l._proxyFormState[d] !== Qn.all &&
            (l._proxyFormState[d] = !o || Qn.all),
          r && (r[d] = !0),
          a[d]
        );
      },
    });
  return u;
};
const Sd = typeof window < "u" ? De.useLayoutEffect : De.useEffect;
function oE(a) {
  const l = Ed(),
    { control: r = l.control, disabled: o, name: u, exact: f } = a || {},
    [d, m] = De.useState(r._formState),
    p = De.useRef({
      isDirty: !1,
      isLoading: !1,
      dirtyFields: !1,
      touchedFields: !1,
      validatingFields: !1,
      isValidating: !1,
      isValid: !1,
      errors: !1,
    });
  return (
    Sd(
      () =>
        r._subscribe({
          name: u,
          formState: p.current,
          exact: f,
          callback: (g) => {
            !o && m({ ...r._formState, ...g });
          },
        }),
      [u, o, f]
    ),
    De.useEffect(() => {
      p.current.isValid && r._setValid(!0);
    }, [r]),
    De.useMemo(() => Lv(d, r, p.current, !1), [d, r])
  );
}
var dn = (a) => typeof a == "string",
  Uv = (a, l, r, o, u) =>
    dn(a)
      ? (o && l.watch.add(a), ge(r, a, u))
      : Array.isArray(a)
        ? a.map((f) => (o && l.watch.add(f), ge(r, f)))
        : (o && (l.watchAll = !0), r),
  jf = (a) => Pt(a) || !Bv(a);
function Ea(a, l, r = new WeakSet()) {
  if (jf(a) || jf(l)) return a === l;
  if (Ri(a) && Ri(l)) return a.getTime() === l.getTime();
  const o = Object.keys(a),
    u = Object.keys(l);
  if (o.length !== u.length) return !1;
  if (r.has(a) || r.has(l)) return !0;
  (r.add(a), r.add(l));
  for (const f of o) {
    const d = a[f];
    if (!u.includes(f)) return !1;
    if (f !== "ref") {
      const m = l[f];
      if (
        (Ri(d) && Ri(m)) ||
        (bt(d) && bt(m)) ||
        (Array.isArray(d) && Array.isArray(m))
          ? !Ea(d, m, r)
          : d !== m
      )
        return !1;
    }
  }
  return !0;
}
function sE(a) {
  const l = Ed(),
    {
      control: r = l.control,
      name: o,
      defaultValue: u,
      disabled: f,
      exact: d,
      compute: m,
    } = a || {},
    p = De.useRef(u),
    g = De.useRef(m),
    v = De.useRef(void 0);
  g.current = m;
  const A = De.useMemo(() => r._getWatch(o, p.current), [r, o]),
    [b, _] = De.useState(g.current ? g.current(A) : A);
  return (
    Sd(
      () =>
        r._subscribe({
          name: o,
          formState: { values: !0 },
          exact: d,
          callback: (S) => {
            if (!f) {
              const w = Uv(
                o,
                r._names,
                S.values || r._formValues,
                !1,
                p.current
              );
              if (g.current) {
                const Q = g.current(w);
                Ea(Q, v.current) || (_(Q), (v.current = Q));
              } else _(w);
            }
          },
        }),
      [r, f, o, d]
    ),
    De.useEffect(() => r._removeUnmounted()),
    b
  );
}
function uE(a) {
  const l = Ed(),
    {
      name: r,
      disabled: o,
      control: u = l.control,
      shouldUnregister: f,
      defaultValue: d,
    } = a,
    m = kv(u._names.array, r),
    p = De.useMemo(
      () => ge(u._formValues, r, ge(u._defaultValues, r, d)),
      [u, r, d]
    ),
    g = sE({ control: u, name: r, defaultValue: p, exact: !0 }),
    v = oE({ control: u, name: r, exact: !0 }),
    A = De.useRef(a),
    b = De.useRef(void 0),
    _ = De.useRef(
      u.register(r, {
        ...a.rules,
        value: g,
        ...(cn(a.disabled) ? { disabled: a.disabled } : {}),
      })
    );
  A.current = a;
  const S = De.useMemo(
      () =>
        Object.defineProperties(
          {},
          {
            invalid: { enumerable: !0, get: () => !!ge(v.errors, r) },
            isDirty: { enumerable: !0, get: () => !!ge(v.dirtyFields, r) },
            isTouched: { enumerable: !0, get: () => !!ge(v.touchedFields, r) },
            isValidating: {
              enumerable: !0,
              get: () => !!ge(v.validatingFields, r),
            },
            error: { enumerable: !0, get: () => ge(v.errors, r) },
          }
        ),
      [v, r]
    ),
    w = De.useCallback(
      (N) =>
        _.current.onChange({
          target: { value: Nv(N), name: r },
          type: zs.CHANGE,
        }),
      [r]
    ),
    Q = De.useCallback(
      () =>
        _.current.onBlur({
          target: { value: ge(u._formValues, r), name: r },
          type: zs.BLUR,
        }),
      [r, u._formValues]
    ),
    F = De.useCallback(
      (N) => {
        const j = ge(u._fields, r);
        j &&
          N &&
          (j._f.ref = {
            focus: () => N.focus && N.focus(),
            select: () => N.select && N.select(),
            setCustomValidity: (M) => N.setCustomValidity(M),
            reportValidity: () => N.reportValidity(),
          });
      },
      [u._fields, r]
    ),
    I = De.useMemo(
      () => ({
        name: r,
        value: g,
        ...(cn(o) || v.disabled ? { disabled: v.disabled || o } : {}),
        onChange: w,
        onBlur: Q,
        ref: F,
      }),
      [r, o, v.disabled, w, Q, F, g]
    );
  return (
    De.useEffect(() => {
      const N = u._options.shouldUnregister || f,
        j = b.current;
      (j && j !== r && !m && u.unregister(j),
        u.register(r, {
          ...A.current.rules,
          ...(cn(A.current.disabled) ? { disabled: A.current.disabled } : {}),
        }));
      const M = (Y, K) => {
        const J = ge(u._fields, Y);
        J && J._f && (J._f.mount = K);
      };
      if ((M(r, !0), N)) {
        const Y = St(ge(u._options.defaultValues, r, A.current.defaultValue));
        (tt(u._defaultValues, r, Y),
          ct(ge(u._formValues, r)) && tt(u._formValues, r, Y));
      }
      return (
        !m && u.register(r),
        (b.current = r),
        () => {
          (m ? N && !u._state.action : N) ? u.unregister(r) : M(r, !1);
        }
      );
    }, [r, u, m, f]),
    De.useEffect(() => {
      u._setDisabledField({ disabled: o, name: r });
    }, [o, r, u]),
    De.useMemo(() => ({ field: I, formState: v, fieldState: S }), [I, v, S])
  );
}
const ww = (a) => a.render(uE(a));
var cE = (a, l, r, o, u) =>
    l
      ? {
          ...r[a],
          types: { ...(r[a] && r[a].types ? r[a].types : {}), [o]: u || !0 },
        }
      : {},
  Br = (a) => (Array.isArray(a) ? a : [a]),
  ny = () => {
    let a = [];
    return {
      get observers() {
        return a;
      },
      next: (u) => {
        for (const f of a) f.next && f.next(u);
      },
      subscribe: (u) => (
        a.push(u),
        {
          unsubscribe: () => {
            a = a.filter((f) => f !== u);
          },
        }
      ),
      unsubscribe: () => {
        a = [];
      },
    };
  };
function Vv(a, l) {
  const r = {};
  for (const o in a)
    if (a.hasOwnProperty(o)) {
      const u = a[o],
        f = l[o];
      if (u && bt(u) && f) {
        const d = Vv(u, f);
        bt(d) && (r[o] = d);
      } else a[o] && (r[o] = f);
    }
  return r;
}
var Jt = (a) => bt(a) && !Object.keys(a).length,
  Cd = (a) => a.type === "file",
  Hn = (a) => typeof a == "function",
  Ms = (a) => {
    if (!Ad) return !1;
    const l = a ? a.ownerDocument : 0;
    return (
      a instanceof
      (l && l.defaultView ? l.defaultView.HTMLElement : HTMLElement)
    );
  },
  Qv = (a) => a.type === "select-multiple",
  wd = (a) => a.type === "radio",
  fE = (a) => wd(a) || Qr(a),
  Af = (a) => Ms(a) && a.isConnected;
function dE(a, l) {
  const r = l.slice(0, -1).length;
  let o = 0;
  for (; o < r; ) a = ct(a) ? o++ : a[l[o++]];
  return a;
}
function hE(a) {
  for (const l in a) if (a.hasOwnProperty(l) && !ct(a[l])) return !1;
  return !0;
}
function At(a, l) {
  const r = Array.isArray(l) ? l : Ks(l) ? [l] : _d(l),
    o = r.length === 1 ? a : dE(a, r),
    u = r.length - 1,
    f = r[u];
  return (
    o && delete o[f],
    u !== 0 &&
      ((bt(o) && Jt(o)) || (Array.isArray(o) && hE(o))) &&
      At(a, r.slice(0, -1)),
    a
  );
}
var mE = (a) => {
  for (const l in a) if (Hn(a[l])) return !0;
  return !1;
};
function Hv(a) {
  return Array.isArray(a) || (bt(a) && !mE(a));
}
function If(a, l = {}) {
  for (const r in a)
    Hv(a[r])
      ? ((l[r] = Array.isArray(a[r]) ? [] : {}), If(a[r], l[r]))
      : ct(a[r]) || (l[r] = !0);
  return l;
}
function vl(a, l, r) {
  r || (r = If(l));
  for (const o in a)
    Hv(a[o])
      ? ct(l) || jf(r[o])
        ? (r[o] = If(a[o], Array.isArray(a[o]) ? [] : {}))
        : vl(a[o], Pt(l) ? {} : l[o], r[o])
      : (r[o] = !Ea(a[o], l[o]));
  return r;
}
const ay = { value: !1, isValid: !1 },
  iy = { value: !0, isValid: !0 };
var jv = (a) => {
    if (Array.isArray(a)) {
      if (a.length > 1) {
        const l = a
          .filter((r) => r && r.checked && !r.disabled)
          .map((r) => r.value);
        return { value: l, isValid: !!l.length };
      }
      return a[0].checked && !a[0].disabled
        ? a[0].attributes && !ct(a[0].attributes.value)
          ? ct(a[0].value) || a[0].value === ""
            ? iy
            : { value: a[0].value, isValid: !0 }
          : iy
        : ay;
    }
    return ay;
  },
  Iv = (a, { valueAsNumber: l, valueAsDate: r, setValueAs: o }) =>
    ct(a)
      ? a
      : l
        ? a === ""
          ? NaN
          : a && +a
        : r && dn(a)
          ? new Date(a)
          : o
            ? o(a)
            : a;
const ly = { isValid: !1, value: null };
var Gv = (a) =>
  Array.isArray(a)
    ? a.reduce(
        (l, r) =>
          r && r.checked && !r.disabled ? { isValid: !0, value: r.value } : l,
        ly
      )
    : ly;
function ry(a) {
  const l = a.ref;
  return Cd(l)
    ? l.files
    : wd(l)
      ? Gv(a.refs).value
      : Qv(l)
        ? [...l.selectedOptions].map(({ value: r }) => r)
        : Qr(l)
          ? jv(a.refs).value
          : Iv(ct(l.value) ? a.ref.value : l.value, a);
}
var gE = (a, l, r, o) => {
    const u = {};
    for (const f of a) {
      const d = ge(l, f);
      d && tt(u, f, d._f);
    }
    return {
      criteriaMode: r,
      names: [...a],
      fields: u,
      shouldUseNativeValidation: o,
    };
  },
  Ds = (a) => a instanceof RegExp,
  Rr = (a) =>
    ct(a)
      ? a
      : Ds(a)
        ? a.source
        : bt(a)
          ? Ds(a.value)
            ? a.value.source
            : a.value
          : a,
  oy = (a) => ({
    isOnSubmit: !a || a === Qn.onSubmit,
    isOnBlur: a === Qn.onBlur,
    isOnChange: a === Qn.onChange,
    isOnAll: a === Qn.all,
    isOnTouch: a === Qn.onTouched,
  });
const sy = "AsyncFunction";
var pE = (a) =>
    !!a &&
    !!a.validate &&
    !!(
      (Hn(a.validate) && a.validate.constructor.name === sy) ||
      (bt(a.validate) &&
        Object.values(a.validate).find((l) => l.constructor.name === sy))
    ),
  yE = (a) =>
    a.mount &&
    (a.required ||
      a.min ||
      a.max ||
      a.maxLength ||
      a.minLength ||
      a.pattern ||
      a.validate),
  uy = (a, l, r) =>
    !r &&
    (l.watchAll ||
      l.watch.has(a) ||
      [...l.watch].some(
        (o) => a.startsWith(o) && /^\.\w+/.test(a.slice(o.length))
      ));
const Nr = (a, l, r, o) => {
  for (const u of r || Object.keys(a)) {
    const f = ge(a, u);
    if (f) {
      const { _f: d, ...m } = f;
      if (d) {
        if (d.refs && d.refs[0] && l(d.refs[0], u) && !o) return !0;
        if (d.ref && l(d.ref, d.name) && !o) return !0;
        if (Nr(m, l)) break;
      } else if (bt(m) && Nr(m, l)) break;
    }
  }
};
function cy(a, l, r) {
  const o = ge(a, r);
  if (o || Ks(r)) return { error: o, name: r };
  const u = r.split(".");
  for (; u.length; ) {
    const f = u.join("."),
      d = ge(l, f),
      m = ge(a, f);
    if (d && !Array.isArray(d) && r !== f) return { name: r };
    if (m && m.type) return { name: f, error: m };
    if (m && m.root && m.root.type) return { name: `${f}.root`, error: m.root };
    u.pop();
  }
  return { name: r };
}
var vE = (a, l, r, o) => {
    r(a);
    const { name: u, ...f } = a;
    return (
      Jt(f) ||
      Object.keys(f).length >= Object.keys(l).length ||
      Object.keys(f).find((d) => l[d] === (!o || Qn.all))
    );
  },
  AE = (a, l, r) =>
    !a ||
    !l ||
    a === l ||
    Br(a).some((o) => o && (r ? o === l : o.startsWith(l) || l.startsWith(o))),
  bE = (a, l, r, o, u) =>
    u.isOnAll
      ? !1
      : !r && u.isOnTouch
        ? !(l || a)
        : (r ? o.isOnBlur : u.isOnBlur)
          ? !a
          : (r ? o.isOnChange : u.isOnChange)
            ? a
            : !0,
  _E = (a, l) => !bd(ge(a, l)).length && At(a, l),
  xE = (a, l, r) => {
    const o = Br(ge(a, r));
    return (tt(o, "root", l[r]), tt(a, r, o), a);
  };
function fy(a, l, r = "validate") {
  if (dn(a) || (Array.isArray(a) && a.every(dn)) || (cn(a) && !a))
    return { type: r, message: dn(a) ? a : "", ref: l };
}
var yl = (a) => (bt(a) && !Ds(a) ? a : { value: a, message: "" }),
  dy = async (a, l, r, o, u, f) => {
    const {
        ref: d,
        refs: m,
        required: p,
        maxLength: g,
        minLength: v,
        min: A,
        max: b,
        pattern: _,
        validate: S,
        name: w,
        valueAsNumber: Q,
        mount: F,
      } = a._f,
      I = ge(r, w);
    if (!F || l.has(w)) return {};
    const N = m ? m[0] : d,
      j = (Z) => {
        u &&
          N.reportValidity &&
          (N.setCustomValidity(cn(Z) ? "" : Z || ""), N.reportValidity());
      },
      M = {},
      Y = wd(d),
      K = Qr(d),
      J = Y || K,
      he =
        ((Q || Cd(d)) && ct(d.value) && ct(I)) ||
        (Ms(d) && d.value === "") ||
        I === "" ||
        (Array.isArray(I) && !I.length),
      pe = cE.bind(null, w, o, M),
      fe = (Z, H, te, se = _a.maxLength, O = _a.minLength) => {
        const D = Z ? H : te;
        M[w] = { type: Z ? se : O, message: D, ref: d, ...pe(Z ? se : O, D) };
      };
    if (
      f
        ? !Array.isArray(I) || !I.length
        : p &&
          ((!J && (he || Pt(I))) ||
            (cn(I) && !I) ||
            (K && !jv(m).isValid) ||
            (Y && !Gv(m).isValid))
    ) {
      const { value: Z, message: H } = dn(p)
        ? { value: !!p, message: p }
        : yl(p);
      if (
        Z &&
        ((M[w] = {
          type: _a.required,
          message: H,
          ref: N,
          ...pe(_a.required, H),
        }),
        !o)
      )
        return (j(H), M);
    }
    if (!he && (!Pt(A) || !Pt(b))) {
      let Z, H;
      const te = yl(b),
        se = yl(A);
      if (!Pt(I) && !isNaN(I)) {
        const O = d.valueAsNumber || (I && +I);
        (Pt(te.value) || (Z = O > te.value),
          Pt(se.value) || (H = O < se.value));
      } else {
        const O = d.valueAsDate || new Date(I),
          D = (ce) => new Date(new Date().toDateString() + " " + ce),
          z = d.type == "time",
          le = d.type == "week";
        (dn(te.value) &&
          I &&
          (Z = z
            ? D(I) > D(te.value)
            : le
              ? I > te.value
              : O > new Date(te.value)),
          dn(se.value) &&
            I &&
            (H = z
              ? D(I) < D(se.value)
              : le
                ? I < se.value
                : O < new Date(se.value)));
      }
      if ((Z || H) && (fe(!!Z, te.message, se.message, _a.max, _a.min), !o))
        return (j(M[w].message), M);
    }
    if ((g || v) && !he && (dn(I) || (f && Array.isArray(I)))) {
      const Z = yl(g),
        H = yl(v),
        te = !Pt(Z.value) && I.length > +Z.value,
        se = !Pt(H.value) && I.length < +H.value;
      if ((te || se) && (fe(te, Z.message, H.message), !o))
        return (j(M[w].message), M);
    }
    if (_ && !he && dn(I)) {
      const { value: Z, message: H } = yl(_);
      if (
        Ds(Z) &&
        !I.match(Z) &&
        ((M[w] = {
          type: _a.pattern,
          message: H,
          ref: d,
          ...pe(_a.pattern, H),
        }),
        !o)
      )
        return (j(H), M);
    }
    if (S) {
      if (Hn(S)) {
        const Z = await S(I, r),
          H = fy(Z, N);
        if (H && ((M[w] = { ...H, ...pe(_a.validate, H.message) }), !o))
          return (j(H.message), M);
      } else if (bt(S)) {
        let Z = {};
        for (const H in S) {
          if (!Jt(Z) && !o) break;
          const te = fy(await S[H](I, r), N, H);
          te &&
            ((Z = { ...te, ...pe(H, te.message) }),
            j(te.message),
            o && (M[w] = Z));
        }
        if (!Jt(Z) && ((M[w] = { ref: N, ...Z }), !o)) return M;
      }
    }
    return (j(!0), M);
  };
const EE = {
  mode: Qn.onSubmit,
  reValidateMode: Qn.onChange,
  shouldFocusError: !0,
};
function SE(a = {}) {
  let l = { ...EE, ...a },
    r = {
      submitCount: 0,
      isDirty: !1,
      isReady: !1,
      isLoading: Hn(l.defaultValues),
      isValidating: !1,
      isSubmitted: !1,
      isSubmitting: !1,
      isSubmitSuccessful: !1,
      isValid: !1,
      touchedFields: {},
      dirtyFields: {},
      validatingFields: {},
      errors: l.errors || {},
      disabled: l.disabled || !1,
    },
    o = {},
    u =
      bt(l.defaultValues) || bt(l.values)
        ? St(l.defaultValues || l.values) || {}
        : {},
    f = l.shouldUnregister ? {} : St(u),
    d = { action: !1, mount: !1, watch: !1 },
    m = {
      mount: new Set(),
      disabled: new Set(),
      unMount: new Set(),
      array: new Set(),
      watch: new Set(),
    },
    p,
    g = 0;
  const v = {
    isDirty: !1,
    dirtyFields: !1,
    validatingFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1,
  };
  let A = { ...v };
  const b = { array: ny(), state: ny() },
    _ = l.criteriaMode === Qn.all,
    S = (C) => (L) => {
      (clearTimeout(g), (g = setTimeout(C, L)));
    },
    w = async (C) => {
      if (!l.disabled && (v.isValid || A.isValid || C)) {
        const L = l.resolver ? Jt((await K()).errors) : await he(o, !0);
        L !== r.isValid && b.state.next({ isValid: L });
      }
    },
    Q = (C, L) => {
      !l.disabled &&
        (v.isValidating ||
          v.validatingFields ||
          A.isValidating ||
          A.validatingFields) &&
        ((C || Array.from(m.mount)).forEach(($) => {
          $ && (L ? tt(r.validatingFields, $, L) : At(r.validatingFields, $));
        }),
        b.state.next({
          validatingFields: r.validatingFields,
          isValidating: !Jt(r.validatingFields),
        }));
    },
    F = (C, L = [], $, me, re = !0, ue = !0) => {
      if (me && $ && !l.disabled) {
        if (((d.action = !0), ue && Array.isArray(ge(o, C)))) {
          const xe = $(ge(o, C), me.argA, me.argB);
          re && tt(o, C, xe);
        }
        if (ue && Array.isArray(ge(r.errors, C))) {
          const xe = $(ge(r.errors, C), me.argA, me.argB);
          (re && tt(r.errors, C, xe), _E(r.errors, C));
        }
        if (
          (v.touchedFields || A.touchedFields) &&
          ue &&
          Array.isArray(ge(r.touchedFields, C))
        ) {
          const xe = $(ge(r.touchedFields, C), me.argA, me.argB);
          re && tt(r.touchedFields, C, xe);
        }
        ((v.dirtyFields || A.dirtyFields) && (r.dirtyFields = vl(u, f)),
          b.state.next({
            name: C,
            isDirty: fe(C, L),
            dirtyFields: r.dirtyFields,
            errors: r.errors,
            isValid: r.isValid,
          }));
      } else tt(f, C, L);
    },
    I = (C, L) => {
      (tt(r.errors, C, L), b.state.next({ errors: r.errors }));
    },
    N = (C) => {
      ((r.errors = C), b.state.next({ errors: r.errors, isValid: !1 }));
    },
    j = (C, L, $, me) => {
      const re = ge(o, C);
      if (re) {
        const ue = ge(f, C, ct($) ? ge(u, C) : $);
        (ct(ue) || (me && me.defaultChecked) || L
          ? tt(f, C, L ? ue : ry(re._f))
          : te(C, ue),
          d.mount && w());
      }
    },
    M = (C, L, $, me, re) => {
      let ue = !1,
        xe = !1;
      const Qe = { name: C };
      if (!l.disabled) {
        if (!$ || me) {
          (v.isDirty || A.isDirty) &&
            ((xe = r.isDirty),
            (r.isDirty = Qe.isDirty = fe()),
            (ue = xe !== Qe.isDirty));
          const je = Ea(ge(u, C), L);
          ((xe = !!ge(r.dirtyFields, C)),
            je ? At(r.dirtyFields, C) : tt(r.dirtyFields, C, !0),
            (Qe.dirtyFields = r.dirtyFields),
            (ue = ue || ((v.dirtyFields || A.dirtyFields) && xe !== !je)));
        }
        if ($) {
          const je = ge(r.touchedFields, C);
          je ||
            (tt(r.touchedFields, C, $),
            (Qe.touchedFields = r.touchedFields),
            (ue = ue || ((v.touchedFields || A.touchedFields) && je !== $)));
        }
        ue && re && b.state.next(Qe);
      }
      return ue ? Qe : {};
    },
    Y = (C, L, $, me) => {
      const re = ge(r.errors, C),
        ue = (v.isValid || A.isValid) && cn(L) && r.isValid !== L;
      if (
        (l.delayError && $
          ? ((p = S(() => I(C, $))), p(l.delayError))
          : (clearTimeout(g),
            (p = null),
            $ ? tt(r.errors, C, $) : At(r.errors, C)),
        ($ ? !Ea(re, $) : re) || !Jt(me) || ue)
      ) {
        const xe = {
          ...me,
          ...(ue && cn(L) ? { isValid: L } : {}),
          errors: r.errors,
          name: C,
        };
        ((r = { ...r, ...xe }), b.state.next(xe));
      }
    },
    K = async (C) => {
      Q(C, !0);
      const L = await l.resolver(
        f,
        l.context,
        gE(C || m.mount, o, l.criteriaMode, l.shouldUseNativeValidation)
      );
      return (Q(C), L);
    },
    J = async (C) => {
      const { errors: L } = await K(C);
      if (C)
        for (const $ of C) {
          const me = ge(L, $);
          me ? tt(r.errors, $, me) : At(r.errors, $);
        }
      else r.errors = L;
      return L;
    },
    he = async (C, L, $ = { valid: !0 }) => {
      for (const me in C) {
        const re = C[me];
        if (re) {
          const { _f: ue, ...xe } = re;
          if (ue) {
            const Qe = m.array.has(ue.name),
              je = re._f && pE(re._f);
            je && v.validatingFields && Q([ue.name], !0);
            const _t = await dy(
              re,
              m.disabled,
              f,
              _,
              l.shouldUseNativeValidation && !L,
              Qe
            );
            if (
              (je && v.validatingFields && Q([ue.name]),
              _t[ue.name] && (($.valid = !1), L))
            )
              break;
            !L &&
              (ge(_t, ue.name)
                ? Qe
                  ? xE(r.errors, _t, ue.name)
                  : tt(r.errors, ue.name, _t[ue.name])
                : At(r.errors, ue.name));
          }
          !Jt(xe) && (await he(xe, L, $));
        }
      }
      return $.valid;
    },
    pe = () => {
      for (const C of m.unMount) {
        const L = ge(o, C);
        L &&
          (L._f.refs ? L._f.refs.every(($) => !Af($)) : !Af(L._f.ref)) &&
          ae(C);
      }
      m.unMount = new Set();
    },
    fe = (C, L) => !l.disabled && (C && L && tt(f, C, L), !Ea(ce(), u)),
    Z = (C, L, $) =>
      Uv(C, m, { ...(d.mount ? f : ct(L) ? u : dn(C) ? { [C]: L } : L) }, $, L),
    H = (C) =>
      bd(ge(d.mount ? f : u, C, l.shouldUnregister ? ge(u, C, []) : [])),
    te = (C, L, $ = {}) => {
      const me = ge(o, C);
      let re = L;
      if (me) {
        const ue = me._f;
        ue &&
          (!ue.disabled && tt(f, C, Iv(L, ue)),
          (re = Ms(ue.ref) && Pt(L) ? "" : L),
          Qv(ue.ref)
            ? [...ue.ref.options].forEach(
                (xe) => (xe.selected = re.includes(xe.value))
              )
            : ue.refs
              ? Qr(ue.ref)
                ? ue.refs.forEach((xe) => {
                    (!xe.defaultChecked || !xe.disabled) &&
                      (Array.isArray(re)
                        ? (xe.checked = !!re.find((Qe) => Qe === xe.value))
                        : (xe.checked = re === xe.value || !!re));
                  })
                : ue.refs.forEach((xe) => (xe.checked = xe.value === re))
              : Cd(ue.ref)
                ? (ue.ref.value = "")
                : ((ue.ref.value = re),
                  ue.ref.type || b.state.next({ name: C, values: St(f) })));
      }
      (($.shouldDirty || $.shouldTouch) &&
        M(C, re, $.shouldTouch, $.shouldDirty, !0),
        $.shouldValidate && le(C));
    },
    se = (C, L, $) => {
      for (const me in L) {
        if (!L.hasOwnProperty(me)) return;
        const re = L[me],
          ue = C + "." + me,
          xe = ge(o, ue);
        (m.array.has(C) || bt(re) || (xe && !xe._f)) && !Ri(re)
          ? se(ue, re, $)
          : te(ue, re, $);
      }
    },
    O = (C, L, $ = {}) => {
      const me = ge(o, C),
        re = m.array.has(C),
        ue = St(L);
      (tt(f, C, ue),
        re
          ? (b.array.next({ name: C, values: St(f) }),
            (v.isDirty || v.dirtyFields || A.isDirty || A.dirtyFields) &&
              $.shouldDirty &&
              b.state.next({
                name: C,
                dirtyFields: vl(u, f),
                isDirty: fe(C, ue),
              }))
          : me && !me._f && !Pt(ue)
            ? se(C, ue, $)
            : te(C, ue, $),
        uy(C, m) && b.state.next({ ...r, name: C }),
        b.state.next({ name: d.mount ? C : void 0, values: St(f) }));
    },
    D = async (C) => {
      d.mount = !0;
      const L = C.target;
      let $ = L.name,
        me = !0;
      const re = ge(o, $),
        ue = (je) => {
          me =
            Number.isNaN(je) ||
            (Ri(je) && isNaN(je.getTime())) ||
            Ea(je, ge(f, $, je));
        },
        xe = oy(l.mode),
        Qe = oy(l.reValidateMode);
      if (re) {
        let je, _t;
        const $t = L.type ? ry(re._f) : Nv(C),
          Wt = C.type === zs.BLUR || C.type === zs.FOCUS_OUT,
          Mi =
            (!yE(re._f) && !l.resolver && !ge(r.errors, $) && !re._f.deps) ||
            bE(Wt, ge(r.touchedFields, $), r.isSubmitted, Qe, xe),
          gn = uy($, m, Wt);
        (tt(f, $, $t),
          Wt
            ? (!L || !L.readOnly) &&
              (re._f.onBlur && re._f.onBlur(C), p && p(0))
            : re._f.onChange && re._f.onChange(C));
        const mt = M($, $t, Wt),
          en = !Jt(mt) || gn;
        if ((!Wt && b.state.next({ name: $, type: C.type, values: St(f) }), Mi))
          return (
            (v.isValid || A.isValid) &&
              (l.mode === "onBlur" ? Wt && w() : Wt || w()),
            en && b.state.next({ name: $, ...(gn ? {} : mt) })
          );
        if ((!Wt && gn && b.state.next({ ...r }), l.resolver)) {
          const { errors: Be } = await K([$]);
          if ((ue($t), me)) {
            const Ct = cy(r.errors, o, $),
              Vt = cy(Be, o, Ct.name || $);
            ((je = Vt.error), ($ = Vt.name), (_t = Jt(Be)));
          }
        } else
          (Q([$], !0),
            (je = (await dy(re, m.disabled, f, _, l.shouldUseNativeValidation))[
              $
            ]),
            Q([$]),
            ue($t),
            me &&
              (je
                ? (_t = !1)
                : (v.isValid || A.isValid) && (_t = await he(o, !0))));
        me &&
          (re._f.deps &&
            (!Array.isArray(re._f.deps) || re._f.deps.length > 0) &&
            le(re._f.deps),
          Y($, _t, je, mt));
      }
    },
    z = (C, L) => {
      if (ge(r.errors, L) && C.focus) return (C.focus(), 1);
    },
    le = async (C, L = {}) => {
      let $, me;
      const re = Br(C);
      if (l.resolver) {
        const ue = await J(ct(C) ? C : re);
        (($ = Jt(ue)), (me = C ? !re.some((xe) => ge(ue, xe)) : $));
      } else
        C
          ? ((me = (
              await Promise.all(
                re.map(async (ue) => {
                  const xe = ge(o, ue);
                  return await he(xe && xe._f ? { [ue]: xe } : xe);
                })
              )
            ).every(Boolean)),
            !(!me && !r.isValid) && w())
          : (me = $ = await he(o));
      return (
        b.state.next({
          ...(!dn(C) || ((v.isValid || A.isValid) && $ !== r.isValid)
            ? {}
            : { name: C }),
          ...(l.resolver || !C ? { isValid: $ } : {}),
          errors: r.errors,
        }),
        L.shouldFocus && !me && Nr(o, z, C ? re : m.mount),
        me
      );
    },
    ce = (C, L) => {
      let $ = { ...(d.mount ? f : u) };
      return (
        L && ($ = Vv(L.dirtyFields ? r.dirtyFields : r.touchedFields, $)),
        ct(C) ? $ : dn(C) ? ge($, C) : C.map((me) => ge($, me))
      );
    },
    x = (C, L) => ({
      invalid: !!ge((L || r).errors, C),
      isDirty: !!ge((L || r).dirtyFields, C),
      error: ge((L || r).errors, C),
      isValidating: !!ge(r.validatingFields, C),
      isTouched: !!ge((L || r).touchedFields, C),
    }),
    k = (C) => {
      (C && Br(C).forEach((L) => At(r.errors, L)),
        b.state.next({ errors: C ? r.errors : {} }));
    },
    P = (C, L, $) => {
      const me = (ge(o, C, { _f: {} })._f || {}).ref,
        re = ge(r.errors, C) || {},
        { ref: ue, message: xe, type: Qe, ...je } = re;
      (tt(r.errors, C, { ...je, ...L, ref: me }),
        b.state.next({ name: C, errors: r.errors, isValid: !1 }),
        $ && $.shouldFocus && me && me.focus && me.focus());
    },
    ie = (C, L) =>
      Hn(C)
        ? b.state.subscribe({
            next: ($) => "values" in $ && C(Z(void 0, L), $),
          })
        : Z(C, L, !0),
    oe = (C) =>
      b.state.subscribe({
        next: (L) => {
          AE(C.name, L.name, C.exact) &&
            vE(L, C.formState || v, ht, C.reRenderRoot) &&
            C.callback({ values: { ...f }, ...r, ...L, defaultValues: u });
        },
      }).unsubscribe,
    q = (C) => (
      (d.mount = !0),
      (A = { ...A, ...C.formState }),
      oe({ ...C, formState: A })
    ),
    ae = (C, L = {}) => {
      for (const $ of C ? Br(C) : m.mount)
        (m.mount.delete($),
          m.array.delete($),
          L.keepValue || (At(o, $), At(f, $)),
          !L.keepError && At(r.errors, $),
          !L.keepDirty && At(r.dirtyFields, $),
          !L.keepTouched && At(r.touchedFields, $),
          !L.keepIsValidating && At(r.validatingFields, $),
          !l.shouldUnregister && !L.keepDefaultValue && At(u, $));
      (b.state.next({ values: St(f) }),
        b.state.next({ ...r, ...(L.keepDirty ? { isDirty: fe() } : {}) }),
        !L.keepIsValid && w());
    },
    _e = ({ disabled: C, name: L }) => {
      ((cn(C) && d.mount) || C || m.disabled.has(L)) &&
        (C ? m.disabled.add(L) : m.disabled.delete(L));
    },
    de = (C, L = {}) => {
      let $ = ge(o, C);
      const me = cn(L.disabled) || cn(l.disabled);
      return (
        tt(o, C, {
          ...($ || {}),
          _f: {
            ...($ && $._f ? $._f : { ref: { name: C } }),
            name: C,
            mount: !0,
            ...L,
          },
        }),
        m.mount.add(C),
        $
          ? _e({ disabled: cn(L.disabled) ? L.disabled : l.disabled, name: C })
          : j(C, !0, L.value),
        {
          ...(me ? { disabled: L.disabled || l.disabled } : {}),
          ...(l.progressive
            ? {
                required: !!L.required,
                min: Rr(L.min),
                max: Rr(L.max),
                minLength: Rr(L.minLength),
                maxLength: Rr(L.maxLength),
                pattern: Rr(L.pattern),
              }
            : {}),
          name: C,
          onChange: D,
          onBlur: D,
          ref: (re) => {
            if (re) {
              (de(C, L), ($ = ge(o, C)));
              const ue =
                  (ct(re.value) &&
                    re.querySelectorAll &&
                    re.querySelectorAll("input,select,textarea")[0]) ||
                  re,
                xe = fE(ue),
                Qe = $._f.refs || [];
              if (xe ? Qe.find((je) => je === ue) : ue === $._f.ref) return;
              (tt(o, C, {
                _f: {
                  ...$._f,
                  ...(xe
                    ? {
                        refs: [
                          ...Qe.filter(Af),
                          ue,
                          ...(Array.isArray(ge(u, C)) ? [{}] : []),
                        ],
                        ref: { type: ue.type, name: C },
                      }
                    : { ref: ue }),
                },
              }),
                j(C, !1, void 0, ue));
            } else
              (($ = ge(o, C, {})),
                $._f && ($._f.mount = !1),
                (l.shouldUnregister || L.shouldUnregister) &&
                  !(kv(m.array, C) && d.action) &&
                  m.unMount.add(C));
          },
        }
      );
    },
    Ee = () => l.shouldFocusError && Nr(o, z, m.mount),
    Le = (C) => {
      cn(C) &&
        (b.state.next({ disabled: C }),
        Nr(
          o,
          (L, $) => {
            const me = ge(o, $);
            me &&
              ((L.disabled = me._f.disabled || C),
              Array.isArray(me._f.refs) &&
                me._f.refs.forEach((re) => {
                  re.disabled = me._f.disabled || C;
                }));
          },
          0,
          !1
        ));
    },
    we = (C, L) => async ($) => {
      let me;
      $ && ($.preventDefault && $.preventDefault(), $.persist && $.persist());
      let re = St(f);
      if ((b.state.next({ isSubmitting: !0 }), l.resolver)) {
        const { errors: ue, values: xe } = await K();
        ((r.errors = ue), (re = St(xe)));
      } else await he(o);
      if (m.disabled.size) for (const ue of m.disabled) At(re, ue);
      if ((At(r.errors, "root"), Jt(r.errors))) {
        b.state.next({ errors: {} });
        try {
          await C(re, $);
        } catch (ue) {
          me = ue;
        }
      } else (L && (await L({ ...r.errors }, $)), Ee(), setTimeout(Ee));
      if (
        (b.state.next({
          isSubmitted: !0,
          isSubmitting: !1,
          isSubmitSuccessful: Jt(r.errors) && !me,
          submitCount: r.submitCount + 1,
          errors: r.errors,
        }),
        me)
      )
        throw me;
    },
    Ut = (C, L = {}) => {
      ge(o, C) &&
        (ct(L.defaultValue)
          ? O(C, St(ge(u, C)))
          : (O(C, L.defaultValue), tt(u, C, St(L.defaultValue))),
        L.keepTouched || At(r.touchedFields, C),
        L.keepDirty ||
          (At(r.dirtyFields, C),
          (r.isDirty = L.defaultValue ? fe(C, St(ge(u, C))) : fe())),
        L.keepError || (At(r.errors, C), v.isValid && w()),
        b.state.next({ ...r }));
    },
    ze = (C, L = {}) => {
      const $ = C ? St(C) : u,
        me = St($),
        re = Jt(C),
        ue = re ? u : me;
      if ((L.keepDefaultValues || (u = $), !L.keepValues)) {
        if (L.keepDirtyValues) {
          const xe = new Set([...m.mount, ...Object.keys(vl(u, f))]);
          for (const Qe of Array.from(xe))
            ge(r.dirtyFields, Qe) ? tt(ue, Qe, ge(f, Qe)) : O(Qe, ge(ue, Qe));
        } else {
          if (Ad && ct(C))
            for (const xe of m.mount) {
              const Qe = ge(o, xe);
              if (Qe && Qe._f) {
                const je = Array.isArray(Qe._f.refs)
                  ? Qe._f.refs[0]
                  : Qe._f.ref;
                if (Ms(je)) {
                  const _t = je.closest("form");
                  if (_t) {
                    _t.reset();
                    break;
                  }
                }
              }
            }
          if (L.keepFieldsRef) for (const xe of m.mount) O(xe, ge(ue, xe));
          else o = {};
        }
        ((f = l.shouldUnregister ? (L.keepDefaultValues ? St(u) : {}) : St(ue)),
          b.array.next({ values: { ...ue } }),
          b.state.next({ values: { ...ue } }));
      }
      ((m = {
        mount: L.keepDirtyValues ? m.mount : new Set(),
        unMount: new Set(),
        array: new Set(),
        disabled: new Set(),
        watch: new Set(),
        watchAll: !1,
        focus: "",
      }),
        (d.mount = !v.isValid || !!L.keepIsValid || !!L.keepDirtyValues),
        (d.watch = !!l.shouldUnregister),
        b.state.next({
          submitCount: L.keepSubmitCount ? r.submitCount : 0,
          isDirty: re
            ? !1
            : L.keepDirty
              ? r.isDirty
              : !!(L.keepDefaultValues && !Ea(C, u)),
          isSubmitted: L.keepIsSubmitted ? r.isSubmitted : !1,
          dirtyFields: re
            ? {}
            : L.keepDirtyValues
              ? L.keepDefaultValues && f
                ? vl(u, f)
                : r.dirtyFields
              : L.keepDefaultValues && C
                ? vl(u, C)
                : L.keepDirty
                  ? r.dirtyFields
                  : {},
          touchedFields: L.keepTouched ? r.touchedFields : {},
          errors: L.keepErrors ? r.errors : {},
          isSubmitSuccessful: L.keepIsSubmitSuccessful
            ? r.isSubmitSuccessful
            : !1,
          isSubmitting: !1,
          defaultValues: u,
        }));
    },
    ot = (C, L) => ze(Hn(C) ? C(f) : C, L),
    qe = (C, L = {}) => {
      const $ = ge(o, C),
        me = $ && $._f;
      if (me) {
        const re = me.refs ? me.refs[0] : me.ref;
        re.focus &&
          (re.focus(), L.shouldSelect && Hn(re.select) && re.select());
      }
    },
    ht = (C) => {
      r = { ...r, ...C };
    },
    zn = {
      control: {
        register: de,
        unregister: ae,
        getFieldState: x,
        handleSubmit: we,
        setError: P,
        _subscribe: oe,
        _runSchema: K,
        _focusError: Ee,
        _getWatch: Z,
        _getDirty: fe,
        _setValid: w,
        _setFieldArray: F,
        _setDisabledField: _e,
        _setErrors: N,
        _getFieldArray: H,
        _reset: ze,
        _resetDefaultValues: () =>
          Hn(l.defaultValues) &&
          l.defaultValues().then((C) => {
            (ot(C, l.resetOptions), b.state.next({ isLoading: !1 }));
          }),
        _removeUnmounted: pe,
        _disableForm: Le,
        _subjects: b,
        _proxyFormState: v,
        get _fields() {
          return o;
        },
        get _formValues() {
          return f;
        },
        get _state() {
          return d;
        },
        set _state(C) {
          d = C;
        },
        get _defaultValues() {
          return u;
        },
        get _names() {
          return m;
        },
        set _names(C) {
          m = C;
        },
        get _formState() {
          return r;
        },
        get _options() {
          return l;
        },
        set _options(C) {
          l = { ...l, ...C };
        },
      },
      subscribe: q,
      trigger: le,
      register: de,
      handleSubmit: we,
      watch: ie,
      setValue: O,
      getValues: ce,
      reset: ot,
      resetField: Ut,
      clearErrors: k,
      unregister: ae,
      setError: P,
      setFocus: qe,
      getFieldState: x,
    };
  return { ...zn, formControl: zn };
}
function Rw(a = {}) {
  const l = De.useRef(void 0),
    r = De.useRef(void 0),
    [o, u] = De.useState({
      isDirty: !1,
      isValidating: !1,
      isLoading: Hn(a.defaultValues),
      isSubmitted: !1,
      isSubmitting: !1,
      isSubmitSuccessful: !1,
      isValid: !1,
      submitCount: 0,
      dirtyFields: {},
      touchedFields: {},
      validatingFields: {},
      errors: a.errors || {},
      disabled: a.disabled || !1,
      isReady: !1,
      defaultValues: Hn(a.defaultValues) ? void 0 : a.defaultValues,
    });
  if (!l.current)
    if (a.formControl)
      ((l.current = { ...a.formControl, formState: o }),
        a.defaultValues &&
          !Hn(a.defaultValues) &&
          a.formControl.reset(a.defaultValues, a.resetOptions));
    else {
      const { formControl: d, ...m } = SE(a);
      l.current = { ...m, formState: o };
    }
  const f = l.current.control;
  return (
    (f._options = a),
    Sd(() => {
      const d = f._subscribe({
        formState: f._proxyFormState,
        callback: () => u({ ...f._formState }),
        reRenderRoot: !0,
      });
      return (
        u((m) => ({ ...m, isReady: !0 })),
        (f._formState.isReady = !0),
        d
      );
    }, [f]),
    De.useEffect(() => f._disableForm(a.disabled), [f, a.disabled]),
    De.useEffect(() => {
      (a.mode && (f._options.mode = a.mode),
        a.reValidateMode && (f._options.reValidateMode = a.reValidateMode));
    }, [f, a.mode, a.reValidateMode]),
    De.useEffect(() => {
      a.errors && (f._setErrors(a.errors), f._focusError());
    }, [f, a.errors]),
    De.useEffect(() => {
      a.shouldUnregister && f._subjects.state.next({ values: f._getWatch() });
    }, [f, a.shouldUnregister]),
    De.useEffect(() => {
      if (f._proxyFormState.isDirty) {
        const d = f._getDirty();
        d !== o.isDirty && f._subjects.state.next({ isDirty: d });
      }
    }, [f, o.isDirty]),
    De.useEffect(() => {
      a.values && !Ea(a.values, r.current)
        ? (f._reset(a.values, {
            keepFieldsRef: !0,
            ...f._options.resetOptions,
          }),
          (r.current = a.values),
          u((d) => ({ ...d })))
        : f._resetDefaultValues();
    }, [f, a.values]),
    De.useEffect(() => {
      (f._state.mount || (f._setValid(), (f._state.mount = !0)),
        f._state.watch &&
          ((f._state.watch = !1), f._subjects.state.next({ ...f._formState })),
        f._removeUnmounted());
    }),
    (l.current.formState = Lv(o, f)),
    l.current
  );
}
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const CE = (a) => a.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  wE = (a) =>
    a.replace(/^([A-Z])|[\s-_]+(\w)/g, (l, r, o) =>
      o ? o.toUpperCase() : r.toLowerCase()
    ),
  hy = (a) => {
    const l = wE(a);
    return l.charAt(0).toUpperCase() + l.slice(1);
  },
  Yv = (...a) =>
    a
      .filter((l, r, o) => !!l && l.trim() !== "" && o.indexOf(l) === r)
      .join(" ")
      .trim(),
  RE = (a) => {
    for (const l in a)
      if (l.startsWith("aria-") || l === "role" || l === "title") return !0;
  };
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var TE = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const OE = T.forwardRef(
  (
    {
      color: a = "currentColor",
      size: l = 24,
      strokeWidth: r = 2,
      absoluteStrokeWidth: o,
      className: u = "",
      children: f,
      iconNode: d,
      ...m
    },
    p
  ) =>
    T.createElement(
      "svg",
      {
        ref: p,
        ...TE,
        width: l,
        height: l,
        stroke: a,
        strokeWidth: o ? (Number(r) * 24) / Number(l) : r,
        className: Yv("lucide", u),
        ...(!f && !RE(m) && { "aria-hidden": "true" }),
        ...m,
      },
      [
        ...d.map(([g, v]) => T.createElement(g, v)),
        ...(Array.isArray(f) ? f : [f]),
      ]
    )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Xs = (a, l) => {
  const r = T.forwardRef(({ className: o, ...u }, f) =>
    T.createElement(OE, {
      ref: f,
      iconNode: l,
      className: Yv(`lucide-${CE(hy(a))}`, `lucide-${a}`, o),
      ...u,
    })
  );
  return ((r.displayName = hy(a)), r);
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const zE = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]],
  Tw = Xs("chevron-right", zE);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ME = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
    ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }],
  ],
  Ow = Xs("circle-alert", ME);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const DE = [
    [
      "path",
      {
        d: "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",
        key: "ct8e1f",
      },
    ],
    ["path", { d: "M14.084 14.158a3 3 0 0 1-4.242-4.242", key: "151rxh" }],
    [
      "path",
      {
        d: "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",
        key: "13bj9a",
      },
    ],
    ["path", { d: "m2 2 20 20", key: "1ooewy" }],
  ],
  zw = Xs("eye-off", DE);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const BE = [
    [
      "path",
      {
        d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
        key: "1nclc0",
      },
    ],
    ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
  ],
  Mw = Xs("eye", BE),
  Ti = {
    PASSKEY_DATA_UNAVAILABLE:
      "Passkey data is unavailable. Please verify if passkeys are enabled in your Auth0 dashboard settings.",
    PASSKEY_PUBLIC_KEY_UNAVAILABLE:
      "Public key data is unavailable. Please verify if passkeys are enabled in your Auth0 dashboard settings.",
    PASSKEY_CREDENTIALS_UNAVAILABLE:
      "Unable to retrieve the credential. No credentials found or multiple options detected.",
    PASSKEY_EXPECTED_ASSERTION_RESPONSE:
      "Expected AuthenticatorAssertionResponse",
    PASSKEY_AUTOCOMPLETE_REGISTRATION_FAILED:
      "Passkey autocomplete registration failed",
  };
async function NE() {
  if (typeof navigator > "u") return !1;
  const a = navigator;
  if (a.brave?.isBrave && typeof a.brave.isBrave == "function")
    try {
      return !!(await a.brave.isBrave());
    } catch {
      return !1;
    }
  return !1;
}
function qv() {
  return window.PublicKeyCredential !== void 0;
}
async function Rd() {
  if (!window || !window.PublicKeyCredential) return !1;
  try {
    return !!(await window.PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable());
  } catch (a) {
    return (
      console.warn("isUserVerifyingPlatformAuthenticatorAvailable failed", a),
      !1
    );
  }
}
async function kE() {
  if (!qv()) return !1;
  try {
    return (
      (await Rd()) &&
      !!(await window.PublicKeyCredential.isConditionalMediationAvailable())
    );
  } catch (a) {
    return (console.warn("isPasskeySupported failed", a), !1);
  }
}
async function Kv() {
  return {
    "js-available": !0,
    "is-brave": await NE(),
    "webauthn-available": qv(),
    "webauthn-platform-available": await Rd(),
    "allow-passkeys": await kE(),
  };
}
let LE = class extends Error {
  code;
  field;
  constructor(l, r) {
    (super(l),
      (this.name = new.target.name),
      (this.code = "ACUL_ERROR"),
      (this.field = r),
      Object.setPrototypeOf(this, new.target.prototype));
  }
};
class UE extends LE {
  code = "SDK_USAGE_ERROR";
  constructor(l, r) {
    (super(l, r), Object.setPrototypeOf(this, new.target.prototype));
  }
}
function Gf(a) {
  if (!a || typeof a != "string")
    throw new TypeError("Invalid base64Url input");
  const l = a.replace(/-/g, "+").replace(/_/g, "/"),
    r = (4 - (l.length % 4)) % 4,
    o = l + "=".repeat(r),
    u = atob(o),
    f = new Uint8Array(u.length);
  for (let d = 0; d < u.length; d++) f[d] = u.charCodeAt(d);
  return f.buffer;
}
function VE(a) {
  if (!(a instanceof ArrayBuffer))
    throw new TypeError("Expected an ArrayBuffer");
  const l = new Uint8Array(a);
  let r = "";
  for (const o of l) r += String.fromCharCode(o);
  return btoa(r).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
function Tr(a) {
  return a ? VE(a) : null;
}
async function QE(a) {
  if (!a?.challenge) throw new Error(Ti.PASSKEY_PUBLIC_KEY_UNAVAILABLE);
  const l = await Rd(),
    r = Gf(a.challenge),
    o = await navigator.credentials.get({
      publicKey: {
        challenge: r,
        allowCredentials: a.allowCredentials?.length
          ? a.allowCredentials.map((f) => ({
              id: Gf(f.id),
              type: "public-key",
              transports: f.transports?.map((d) => d),
            }))
          : void 0,
      },
    });
  if (!o) throw new Error(Ti.PASSKEY_CREDENTIALS_UNAVAILABLE);
  if (
    !(function (f) {
      return f.authenticatorData !== void 0;
    })(o.response)
  )
    throw new Error(Ti.PASSKEY_EXPECTED_ASSERTION_RESPONSE);
  const u = o.response;
  return {
    id: o.id,
    rawId: Tr(o.rawId ?? null),
    type: o.type,
    authenticatorAttachment: o.authenticatorAttachment,
    response: {
      clientDataJSON: Tr(u.clientDataJSON ?? null),
      authenticatorData: Tr(u.authenticatorData ?? null),
      signature: Tr(u.signature ?? null),
      userHandle: Tr(u.userHandle ?? null),
    },
    isUserVerifyingPlatformAuthenticatorAvailable: l,
  };
}
async function HE({ publicKey: a, inputId: l, onResolve: r, onReject: o }) {
  if (!a?.challenge) throw new Error(Ti.PASSKEY_PUBLIC_KEY_UNAVAILABLE);
  const u = PublicKeyCredential;
  if (
    !(
      typeof u.isConditionalMediationAvailable == "function" &&
      (await u.isConditionalMediationAvailable())
    )
  )
    return void o?.(
      new Error("Conditional mediation not supported by this browser.")
    );
  if (!("credentials" in navigator) || !("PublicKeyCredential" in window))
    return void o?.(
      new Error("WebAuthn is not supported in this environment.")
    );
  if (typeof document < "u" && l) {
    const p = document.getElementById(l);
    p && p.tagName?.toUpperCase() === "INPUT"
      ? p.setAttribute("autocomplete", "username webauthn")
      : console.warn(
          `[Auth0 ACUL] No valid <input> found with id="${l}". Passkey autocomplete may not work.`
        );
  }
  const f = Gf(a.challenge),
    d = new AbortController(),
    m = {
      publicKey: {
        challenge: f,
        rpId: window.location.hostname,
        allowCredentials: [],
        userVerification: "preferred",
        timeout: 3e5,
      },
      mediation: "conditional",
      signal: d.signal,
    };
  return (
    navigator.credentials
      .get(m)
      .then((p) => p && r(p))
      .catch((p) => {
        (p instanceof DOMException && p.name === "AbortError") || o?.(p);
      }),
    d
  );
}
class jE extends xl {
  signupLink;
  resetPasswordLink;
  publicKey;
  constructor(l) {
    (super(l),
      (this.signupLink = nd(l)),
      (this.resetPasswordLink = ad(l)),
      (this.publicKey = T_(l)));
  }
}
let IE = class Xv extends Ls {
    isSignupEnabled;
    isForgotPasswordEnabled;
    isPasskeyEnabled;
    isUsernameRequired;
    usernamePolicy;
    allowedIdentifiers;
    constructor(l) {
      (super(l),
        (this.isSignupEnabled = id(l)),
        (this.isForgotPasswordEnabled = ld(l)),
        (this.isPasskeyEnabled = rd(l)),
        (this.isUsernameRequired = z_(l)),
        (this.usernamePolicy = ev(l)),
        (this.allowedIdentifiers = Xv.getAllowedIdentifiers(
          l,
          this.connectionStrategy
        )));
    }
    static getAllowedIdentifiers(l, r) {
      return r === Es.SMS ? [xs.PHONE] : r === Es.EMAIL ? [xs.EMAIL] : nv(l);
    }
  },
  Bw = class Al extends Us {
    static screenIdentifier = td.LOGIN_ID;
    #e;
    #t = !1;
    screen;
    transaction;
    constructor() {
      super();
      const l = this.getContext("screen"),
        r = this.getContext("transaction");
      ((this.screen = new jE(l)), (this.transaction = new IE(r)));
    }
    async login(l) {
      const r = {
          state: this.transaction.state,
          telemetry: [Al.screenIdentifier, "login"],
        },
        o = await Kv();
      await new Xn(r).submitData({ ...l, ...o });
    }
    async federatedLogin(l) {
      const r = {
        state: this.transaction.state,
        telemetry: [Al.screenIdentifier, "federatedLogin"],
      };
      await new Xn(r).submitData(l);
    }
    async passkeyLogin(l) {
      (this.#e?.abort(), (this.#e = void 0));
      const r = this.screen.publicKey;
      if (!r) throw new Error(Ti.PASSKEY_DATA_UNAVAILABLE);
      try {
        const o = await QE(r),
          u = {
            state: this.transaction.state,
            telemetry: [Al.screenIdentifier, "passkeyLogin"],
          };
        await new Xn(u).submitData({ ...l, passkey: JSON.stringify(o) });
      } catch (o) {
        if (o instanceof DOMException && o.name === "NotAllowedError") {
          if (this.#t)
            try {
              await this.registerPasskeyAutofill();
            } catch (u) {
              console.warn("Conditional UI restart failed", u);
            }
          return;
        }
        throw o;
      }
    }
    async pickCountryCode(l) {
      const r = {
        state: this.transaction.state,
        telemetry: [Al.screenIdentifier, "pickCountryCode"],
      };
      await new Xn(r).submitData({ ...l, action: Py.PICK_COUNTRY_CODE });
    }
    getLoginIdentifiers() {
      return Wy(this.transaction.allowedIdentifiers);
    }
    async registerPasskeyAutofill(l) {
      const r = this.screen.publicKey;
      if (!r) throw new Error(Ti.PASSKEY_DATA_UNAVAILABLE);
      ((this.#e =
        (await HE({
          publicKey: r,
          inputId: l,
          onResolve: async (o) => {
            const u = {
              state: this.transaction.state,
              telemetry: [Al.screenIdentifier, "passkeyAutocomplete"],
            };
            await new Xn(u).submitData({ passkey: JSON.stringify(o) });
          },
          onReject: (o) => {
            throw (
              console.warn("Passkey autocomplete registration failed", o),
              new UE(Ti.PASSKEY_AUTOCOMPLETE_REGISTRATION_FAILED)
            );
          },
        })) ?? void 0),
        (this.#t = !0));
    }
  };
var wn = {},
  my;
function GE() {
  if (my) return wn;
  my = 1;
  var a =
      (wn && wn.__createBinding) ||
      (Object.create
        ? function (b, _, S, w) {
            w === void 0 && (w = S);
            var Q = Object.getOwnPropertyDescriptor(_, S);
            ((!Q ||
              ("get" in Q ? !_.__esModule : Q.writable || Q.configurable)) &&
              (Q = {
                enumerable: !0,
                get: function () {
                  return _[S];
                },
              }),
              Object.defineProperty(b, w, Q));
          }
        : function (b, _, S, w) {
            (w === void 0 && (w = S), (b[w] = _[S]));
          }),
    l =
      (wn && wn.__setModuleDefault) ||
      (Object.create
        ? function (b, _) {
            Object.defineProperty(b, "default", { enumerable: !0, value: _ });
          }
        : function (b, _) {
            b.default = _;
          }),
    r =
      (wn && wn.__importStar) ||
      function (b) {
        if (b && b.__esModule) return b;
        var _ = {};
        if (b != null)
          for (var S in b)
            S !== "default" &&
              Object.prototype.hasOwnProperty.call(b, S) &&
              a(_, b, S);
        return (l(_, b), _);
      };
  (Object.defineProperty(wn, "__esModule", { value: !0 }),
    (wn.useTurnstile = void 0));
  const o = r(ks()),
    u = typeof globalThis < "u" ? globalThis : window;
  let f = typeof u.turnstile < "u" ? "ready" : "unloaded",
    d,
    m;
  const p = new Promise((b, _) => {
    ((m = { resolve: b, reject: _ }), f === "ready" && b(void 0));
  });
  {
    const b = "cf__reactTurnstileOnLoad",
      _ = "https://challenges.cloudflare.com/turnstile/v0/api.js";
    d = () => {
      if (f === "unloaded") {
        ((f = "loading"),
          (u[b] = () => {
            (m.resolve(), (f = "ready"), delete u[b]);
          }));
        const S = `${_}?onload=${b}&render=explicit`,
          w = document.createElement("script");
        ((w.src = S),
          (w.async = !0),
          w.addEventListener("error", () => {
            (m.reject("Failed to load Turnstile."), delete u[b]);
          }),
          document.head.appendChild(w));
      }
      return p;
    };
  }
  function g({
    id: b,
    className: _,
    style: S,
    sitekey: w,
    action: Q,
    cData: F,
    theme: I,
    language: N,
    tabIndex: j,
    responseField: M,
    responseFieldName: Y,
    size: K,
    fixedSize: J,
    retry: he,
    retryInterval: pe,
    refreshExpired: fe,
    appearance: Z,
    execution: H,
    userRef: te,
    onVerify: se,
    onSuccess: O,
    onLoad: D,
    onError: z,
    onExpire: le,
    onTimeout: ce,
    onAfterInteractive: x,
    onBeforeInteractive: k,
    onUnsupported: P,
  }) {
    const ie = (0, o.useRef)(null),
      oe = (0, o.useState)({
        onVerify: se,
        onSuccess: O,
        onLoad: D,
        onError: z,
        onExpire: le,
        onTimeout: ce,
        onAfterInteractive: x,
        onBeforeInteractive: k,
        onUnsupported: P,
      })[0],
      q = te ?? ie,
      ae = J
        ? {
            width:
              K === "compact" ? "130px" : K === "flexible" ? "100%" : "300px",
            height: K === "compact" ? "120px" : "65px",
            ...S,
          }
        : S;
    return (
      (0, o.useEffect)(() => {
        if (!q.current) return;
        let _e = !1,
          de = "";
        return (
          (async () => {
            var Ee, Le;
            if (f !== "ready")
              try {
                await d();
              } catch (ze) {
                (Ee = oe.onError) === null || Ee === void 0 || Ee.call(oe, ze);
                return;
              }
            if (_e || !q.current) return;
            let we;
            const Ut = {
              sitekey: w,
              action: Q,
              cData: F,
              theme: I,
              language: N,
              tabindex: j,
              "response-field": M,
              "response-field-name": Y,
              size: K,
              retry: he,
              "retry-interval": pe,
              "refresh-expired": fe,
              appearance: Z,
              execution: H,
              callback: (ze, ot) => {
                var qe, ht;
                ((qe = oe.onVerify) === null ||
                  qe === void 0 ||
                  qe.call(oe, ze, we),
                  (ht = oe.onSuccess) === null ||
                    ht === void 0 ||
                    ht.call(oe, ze, ot, we));
              },
              "error-callback": (ze) => {
                var ot;
                return (ot = oe.onError) === null || ot === void 0
                  ? void 0
                  : ot.call(oe, ze, we);
              },
              "expired-callback": (ze) => {
                var ot;
                return (ot = oe.onExpire) === null || ot === void 0
                  ? void 0
                  : ot.call(oe, ze, we);
              },
              "timeout-callback": () => {
                var ze;
                return (ze = oe.onTimeout) === null || ze === void 0
                  ? void 0
                  : ze.call(oe, we);
              },
              "after-interactive-callback": () => {
                var ze;
                return (ze = oe.onAfterInteractive) === null || ze === void 0
                  ? void 0
                  : ze.call(oe, we);
              },
              "before-interactive-callback": () => {
                var ze;
                return (ze = oe.onBeforeInteractive) === null || ze === void 0
                  ? void 0
                  : ze.call(oe, we);
              },
              "unsupported-callback": () => {
                var ze;
                return (ze = oe.onUnsupported) === null || ze === void 0
                  ? void 0
                  : ze.call(oe, we);
              },
            };
            ((de = window.turnstile.render(q.current, Ut)),
              (we = v(de)),
              (Le = oe.onLoad) === null ||
                Le === void 0 ||
                Le.call(oe, de, we));
          })(),
          () => {
            ((_e = !0), de && window.turnstile.remove(de));
          }
        );
      }, [w, Q, F, I, N, j, M, Y, K, he, pe, fe, Z, H]),
      (0, o.useEffect)(() => {
        ((oe.onVerify = se),
          (oe.onSuccess = O),
          (oe.onLoad = D),
          (oe.onError = z),
          (oe.onExpire = le),
          (oe.onTimeout = ce),
          (oe.onAfterInteractive = x),
          (oe.onBeforeInteractive = k),
          (oe.onUnsupported = P));
      }, [se, O, D, z, le, ce, x, k, P]),
      o.default.createElement("div", { ref: q, id: b, className: _, style: ae })
    );
  }
  wn.default = g;
  function v(b) {
    return {
      execute: (_) => window.turnstile.execute(b, _),
      reset: () => window.turnstile.reset(b),
      getResponse: () => window.turnstile.getResponse(b),
      isExpired: () => window.turnstile.isExpired(b),
    };
  }
  function A() {
    const [b, _] = (0, o.useState)(f);
    return (
      (0, o.useEffect)(() => {
        f !== "ready" && p.then(() => _(f));
      }, []),
      u.turnstile
    );
  }
  return ((wn.useTurnstile = A), wn);
}
var YE = GE();
const Nw = Ns(YE),
  bl = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
  gy = 61,
  zr = new Uint8Array(256);
for (let a = 0; a < bl.length; a++) zr[bl.charCodeAt(a)] = a;
function py(a) {
  const l = a.length;
  let r = "";
  for (let o = 0; o < l; o += 3) {
    const u = a[o + 0],
      f = a[o + 1],
      d = a[o + 2];
    let m = "";
    ((m += bl.charAt(u >>> 2)),
      (m += bl.charAt(((u & 3) << 4) | (f >>> 4))),
      (m += bl.charAt(((f & 15) << 2) | (d >>> 6))),
      (m += bl.charAt(d & 63)),
      (r += m));
  }
  return (
    l % 3 === 2
      ? (r = r.substring(0, r.length - 1) + "=")
      : l % 3 === 1 && (r = r.substring(0, r.length - 2) + "=="),
    r
  );
}
function qE(a) {
  const l = a.length;
  let r = (l * 3) >>> 2;
  (a.charCodeAt(l - 1) === gy && r--, a.charCodeAt(l - 2) === gy && r--);
  const o = new Uint8Array(r);
  for (let u = 0, f = 0; u < l; u += 4) {
    const d = zr[a.charCodeAt(u + 0)],
      m = zr[a.charCodeAt(u + 1)],
      p = zr[a.charCodeAt(u + 2)],
      g = zr[a.charCodeAt(u + 3)];
    ((o[f++] = (d << 2) | (m >> 4)),
      (o[f++] = ((m & 15) << 4) | (p >> 2)),
      (o[f++] = ((p & 3) << 6) | (g & 63)));
  }
  return o;
}
var KE =
  ".frc-captcha *{margin:0;padding:0;border:0;text-align:initial;border-radius:0;filter:none!important;transition:none!important;font-weight:400;font-size:14px;line-height:1.2;text-decoration:none;background-color:initial;color:#222}.frc-captcha{position:relative;min-width:250px;max-width:312px;border:1px solid #f4f4f4;padding-bottom:12px;background-color:#fff}.frc-captcha b{font-weight:700}.frc-container{display:flex;align-items:center;min-height:52px}.frc-icon{fill:#222;stroke:#222;flex-shrink:0;margin:8px 8px 0}.frc-icon.frc-warning{fill:#c00}.frc-success .frc-icon{animation:1s ease-in both frc-fade-in}.frc-content{white-space:nowrap;display:flex;flex-direction:column;margin:4px 6px 0 0;overflow-x:auto;flex-grow:1}.frc-banner{position:absolute;bottom:0;right:6px;line-height:1}.frc-banner *{font-size:10px;opacity:.8;text-decoration:none}.frc-progress{-webkit-appearance:none;-moz-appearance:none;appearance:none;margin:3px 0;height:4px;border:none;background-color:#eee;color:#222;width:100%;transition:.5s linear}.frc-progress::-webkit-progress-bar{background:#eee}.frc-progress::-webkit-progress-value{background:#222}.frc-progress::-moz-progress-bar{background:#222}.frc-button{cursor:pointer;padding:2px 6px;background-color:#f1f1f1;border:1px solid transparent;text-align:center;font-weight:600;text-transform:none}.frc-button:focus{border:1px solid #333}.frc-button:hover{background-color:#ddd}.frc-captcha-solution{display:none}.frc-err-url{text-decoration:underline;font-size:.9em}.frc-rtl{direction:rtl}.frc-rtl .frc-content{margin:4px 0 0 6px}.frc-banner.frc-rtl{left:6px;right:auto}.dark.frc-captcha{color:#fff;background-color:#222;border-color:#333}.dark.frc-captcha *{color:#fff}.dark.frc-captcha button{background-color:#444}.dark .frc-icon{fill:#fff;stroke:#fff}.dark .frc-progress{background-color:#444}.dark .frc-progress::-webkit-progress-bar{background:#444}.dark .frc-progress::-webkit-progress-value{background:#ddd}.dark .frc-progress::-moz-progress-bar{background:#ddd}@keyframes frc-fade-in{from{opacity:0}to{opacity:1}}";
const XE = 1,
  FE = 128,
  Fv =
    '<circle cx="12" cy="12" r="8" stroke-width="3" stroke-dasharray="15 10" fill="none" stroke-linecap="round" transform="rotate(0 12 12)"><animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="0.9s" values="0 12 12;360 12 12"/></circle>',
  Zv =
    '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>';
function Ml(a, l, r, o, u, f, d, m = !1, p, g) {
  return `<div class="frc-container${g ? " " + g : ""}${l ? " frc-rtl" : ""}">
<svg class="frc-icon"${o ? ' aria-hidden="true"' : ""} role="img" xmlns="http://www.w3.org/2000/svg" height="32" width="32" viewBox="0 0 24 24">${r}</svg>
<div class="frc-content">
    <span class="frc-text" ${p ? `data-debug="${p}"` : ""}>${u}</span>
    ${d ? `<button type="button" class="frc-button">${d}</button>` : ""}
    ${m ? '<progress class="frc-progress" value="0">0%</progress>' : ""}
</div>
</div><span class="frc-banner${l ? " frc-rtl" : ""}"><a lang="en" href="https://friendlycaptcha.com/" rel="noopener" target="_blank"><b>Friendly</b>Captcha ⇗</a></span>
${a === "-" ? "" : `<input name="${a}" class="frc-captcha-solution" type="hidden" value="${f}">`}`;
}
function ZE(a, l) {
  return Ml(
    a,
    l.rtl,
    '<path d="M17,11c0.34,0,0.67,0.04,1,0.09V6.27L10.5,3L3,6.27v4.91c0,4.54,3.2,8.79,7.5,9.82c0.55-0.13,1.08-0.32,1.6-0.55 C11.41,19.47,11,18.28,11,17C11,13.69,13.69,11,17,11z"/><path d="M17,13c-2.21,0-4,1.79-4,4c0,2.21,1.79,4,4,4s4-1.79,4-4C21,14.79,19.21,13,17,13z M17,14.38"/>',
    !0,
    l.text_ready,
    ".UNSTARTED",
    l.button_start,
    !1
  );
}
function JE(a, l) {
  return Ml(a, l.rtl, Fv, !0, l.text_fetching, ".FETCHING", void 0, !0);
}
function PE(a, l) {
  return Ml(a, l.rtl, Fv, !0, l.text_solving, ".UNFINISHED", void 0, !0);
}
function $E(a, l, r, o) {
  const u = `${o.t.toFixed(0)}s (${((o.h / o.t) * 0.001).toFixed(0)}K/s)${o.solver === XE ? " JS Fallback" : ""}`;
  return Ml(
    a,
    l.rtl,
    `<title>${l.text_completed_sr}</title><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"></path>`,
    !1,
    l.text_completed,
    r,
    void 0,
    !1,
    u,
    "frc-success"
  );
}
function WE(a, l) {
  return Ml(a, l.rtl, Zv, !0, l.text_expired, ".EXPIRED", l.button_restart);
}
function us(a, l, r, o = !0, u = !1) {
  return Ml(
    a,
    l.rtl,
    Zv,
    !0,
    `<b>${l.text_error}</b><br>${r}`,
    u ? ".HEADLESS_ERROR" : ".ERROR",
    o ? l.button_retry : void 0
  );
}
function eS(a = null) {
  if (!document.querySelector("#frc-style")) {
    const l = document.createElement("style");
    ((l.id = "frc-style"),
      (l.innerHTML = KE),
      a && l.setAttribute("nonce", a),
      document.head.appendChild(l));
  }
}
function tS(a, l) {
  const r = a.querySelector(".frc-progress"),
    o = (l.i + 1) / l.n;
  r &&
    ((r.value = o),
    (r.innerText = (o * 100).toFixed(1) + "%"),
    (r.title =
      l.i + 1 + "/" + l.n + " (" + ((l.h / l.t) * 0.001).toFixed(0) + "K/s)"));
}
function nS(a) {
  for (; a.tagName !== "FORM"; ) if (((a = a.parentElement), !a)) return null;
  return a;
}
function aS(a, l) {
  a.addEventListener("focusin", l, { once: !0, passive: !0 });
}
let Si, bs;
typeof navigator < "u" &&
  typeof navigator.userAgent == "string" &&
  ((Si = navigator), (bs = Si.userAgent.toLowerCase()));
function iS() {
  return (
    bs.indexOf("headless") !== -1 ||
    Si.appVersion.indexOf("Headless") !== -1 ||
    bs.indexOf("bot") !== -1 ||
    bs.indexOf("crawl") !== -1 ||
    Si.webdriver === !0 ||
    !Si.language ||
    (Si.languages !== void 0 && !Si.languages.length)
  );
}
function lS(a) {
  return (
    a > 255 ? (a = 255) : a < 0 && (a = 0),
    Math.pow(2, (255.999 - a) / 8) >>> 0
  );
}
const rS = 13,
  oS = 14,
  sS = 15;
function uS(a, l) {
  const r = [];
  for (let o = 0; o < l; o++) {
    const u = new Uint8Array(FE);
    (u.set(a), (u[120] = o), r.push(u));
  }
  return r;
}
function cS(a) {
  const l = a.split("."),
    r = l[1],
    o = qE(r);
  return {
    signature: l[0],
    base64: r,
    buffer: o,
    n: o[oS],
    threshold: lS(o[sS]),
    expiry: o[rS] * 3e5,
  };
}
async function fS(a, l, r) {
  const o = a.split(",");
  for (let u = 0; u < o.length; u++)
    try {
      const f = await Jv(
        o[u] + "?sitekey=" + l,
        { headers: [["x-frc-client", "js-0.9.19"]], mode: "cors" },
        2
      );
      if (f.ok) return (await f.json()).data.puzzle;
      {
        let d;
        try {
          d = await f.json();
        } catch {}
        if (d && d.errors && d.errors[0] === "endpoint_not_enabled")
          throw Error(`Endpoint not allowed (${f.status})`);
        if (u === o.length - 1)
          throw Error(
            `Response status ${f.status} ${f.statusText} ${d ? d.errors : ""}`
          );
      }
    } catch (f) {
      console.error("[FRC Fetch]:", f);
      const d = new Error(
        `${r.text_fetch_error} <a class="frc-err-url" href="${o[u]}">${o[u]}</a>`
      );
      throw ((d.rawError = f), d);
    }
  throw Error("Internal error");
}
async function Jv(a, l, r) {
  let o = 1e3;
  return fetch(a, l).catch(async (u) => {
    if (r === 0) throw u;
    return (
      await new Promise((f) => setTimeout(f, o)),
      (o *= 4),
      Jv(a, l, r - 1)
    );
  });
}
const dS = {
    text_init: "Initializing...",
    text_ready: "Anti-Robot Verification",
    button_start: "Click to start verification",
    text_fetching: "Fetching Challenge",
    text_solving: "Verifying you are human...",
    text_completed: "I am human",
    text_completed_sr: "Automatic spam check completed",
    text_expired: "Anti-Robot verification expired",
    button_restart: "Restart",
    text_error: "Verification failed",
    button_retry: "Retry",
    text_fetch_error: "Failed to connect to",
  },
  hS = {
    text_init: "Chargement...",
    text_ready: "Vérification Anti-Robot",
    button_start: "Clique ici pour vérifier",
    text_fetching: "Chargement du défi",
    text_solving: "Nous vérifions que vous n'êtes pas un robot...",
    text_completed: "Je ne suis pas un robot",
    text_completed_sr: "Vérification automatique des spams terminée",
    text_expired: "Vérification anti-robot expirée",
    button_restart: "Redémarrer",
    text_error: "Échec de la vérification",
    button_retry: "Recommencer",
    text_fetch_error: "Problème de connexion avec",
  },
  mS = {
    text_init: "Initialisierung...",
    text_ready: "Anti-Roboter-Verifizierung",
    button_start: "Hier klicken",
    text_fetching: "Herausforderung laden...",
    text_solving: "Verifizierung, dass Sie ein Mensch sind...",
    text_completed: "Ich bin ein Mensch",
    text_completed_sr: "Automatische Spamprüfung abgeschlossen",
    text_expired: "Verifizierung abgelaufen",
    button_restart: "Erneut starten",
    text_error: "Verifizierung fehlgeschlagen",
    button_retry: "Erneut versuchen",
    text_fetch_error: "Verbindungsproblem mit",
  },
  gS = {
    text_init: "Initializeren...",
    text_ready: "Anti-robotverificatie",
    button_start: "Klik om te starten",
    text_fetching: "Aan het laden...",
    text_solving: "Anti-robotverificatie bezig...",
    text_completed: "Ik ben een mens",
    text_completed_sr: "Automatische anti-spamcheck voltooid",
    text_expired: "Verificatie verlopen",
    button_restart: "Opnieuw starten",
    text_error: "Verificatie mislukt",
    button_retry: "Opnieuw proberen",
    text_fetch_error: "Verbinding mislukt met",
  },
  pS = {
    text_init: "Inizializzazione...",
    text_ready: "Verifica Anti-Robot",
    button_start: "Clicca per iniziare",
    text_fetching: "Caricamento...",
    text_solving: "Verificando che sei umano...",
    text_completed: "Non sono un robot",
    text_completed_sr: "Controllo automatico dello spam completato",
    text_expired: "Verifica Anti-Robot scaduta",
    button_restart: "Ricomincia",
    text_error: "Verifica fallita",
    button_retry: "Riprova",
    text_fetch_error: "Problema di connessione con",
  },
  yS = {
    text_init: "Inicializando...",
    text_ready: "Verificação Anti-Robô",
    button_start: "Clique para iniciar verificação",
    text_fetching: "Carregando...",
    text_solving: "Verificando se você é humano...",
    text_completed: "Eu sou humano",
    text_completed_sr: "Verificação automática de spam concluída",
    text_expired: "Verificação Anti-Robô expirada",
    button_restart: "Reiniciar",
    text_error: "Verificação falhou",
    button_retry: "Tentar novamente",
    text_fetch_error: "Falha de conexão com",
  },
  vS = {
    text_init: "Inicializando...",
    text_ready: "Verificación Anti-Robot",
    button_start: "Haga clic para iniciar la verificación",
    text_fetching: "Cargando desafío",
    text_solving: "Verificando que eres humano...",
    text_completed: "Soy humano",
    text_completed_sr: "Verificación automática de spam completada",
    text_expired: "Verificación Anti-Robot expirada",
    button_restart: "Reiniciar",
    text_error: "Ha fallado la verificación",
    button_retry: "Intentar de nuevo",
    text_fetch_error: "Error al conectarse a",
  },
  AS = {
    text_init: "Inicialitzant...",
    text_ready: "Verificació Anti-Robot",
    button_start: "Fes clic per començar la verificació",
    text_fetching: "Carregant repte",
    text_solving: "Verificant que ets humà...",
    text_completed: "Soc humà",
    text_completed_sr: "Verificació automàtica de correu brossa completada",
    text_expired: "La verificació Anti-Robot ha expirat",
    button_restart: "Reiniciar",
    text_error: "Ha fallat la verificació",
    button_retry: "Tornar a provar",
    text_fetch_error: "Error connectant a",
  },
  bS = {
    text_init: "開始しています...",
    text_ready: "アンチロボット認証",
    button_start: "クリックして認証を開始",
    text_fetching: "ロードしています",
    text_solving: "認証中...",
    text_completed: "私はロボットではありません",
    text_completed_sr: "自動スパムチェックが完了しました",
    text_expired: "認証の期限が切れています",
    button_restart: "再度認証を行う",
    text_error: "認証にエラーが発生しました",
    button_retry: "再度認証を行う",
    text_fetch_error: "接続ができませんでした",
  },
  _S = {
    text_init: "Aktiverer...",
    text_ready: "Jeg er ikke en robot",
    button_start: "Klik for at starte verifikationen",
    text_fetching: "Henter data",
    text_solving: "Kontrollerer at du er et menneske...",
    text_completed: "Jeg er et menneske.",
    text_completed_sr: "Automatisk spamkontrol gennemført",
    text_expired: "Verifikationen kunne ikke fuldføres",
    button_restart: "Genstart",
    text_error: "Bekræftelse mislykkedes",
    button_retry: "Prøv igen",
    text_fetch_error: "Forbindelsen mislykkedes",
  },
  xS = {
    text_init: "Инициализация...",
    text_ready: "АнтиРобот проверка",
    button_start: "Нажмите, чтобы начать проверку",
    text_fetching: "Получаю задачу",
    text_solving: "Проверяю, что вы человек...",
    text_completed: "Я человек",
    text_completed_sr: "Aвтоматическая проверка на спам завершена",
    text_expired: "Срок АнтиРоботной проверки истёк",
    button_restart: "Начать заново",
    text_error: "Ошибка проверки",
    button_retry: "Повторить ещё раз",
    text_fetch_error: "Ошибка подключения",
  },
  ES = {
    text_init: "Aktiverar...",
    text_ready: "Jag är inte en robot",
    button_start: "Klicka för att verifiera",
    text_fetching: "Hämtar data",
    text_solving: "Kontrollerar att du är människa...",
    text_completed: "Jag är en människa",
    text_completed_sr: "Automatisk spamkontroll slutförd",
    text_expired: "Anti-robot-verifieringen har löpt ut",
    button_restart: "Börja om",
    text_error: "Verifiering kunde inte slutföras",
    button_retry: "Omstart",
    text_fetch_error: "Verifiering misslyckades",
  },
  SS = {
    text_init: "Başlatılıyor...",
    text_ready: "Anti-Robot Doğrulaması",
    button_start: "Doğrulamayı başlatmak için tıklayın",
    text_fetching: "Yükleniyor",
    text_solving: "Robot olmadığınız doğrulanıyor...",
    text_completed: "Ben bir insanım",
    text_completed_sr: "Otomatik spam kontrolü tamamlandı",
    text_expired: "Anti-Robot doğrulamasının süresi doldu",
    button_restart: "Yeniden başlat",
    text_error: "Doğrulama başarısız oldu",
    button_retry: "Tekrar dene",
    text_fetch_error: "Bağlantı başarısız oldu",
  },
  CS = {
    text_init: "Προετοιμασία...",
    text_ready: "Anti-Robot Επαλήθευση",
    button_start: " Κάντε κλικ για να ξεκινήσει η επαλήθευση",
    text_fetching: " Λήψη πρόκλησης",
    text_solving: " Επιβεβαίωση ανθρώπου...",
    text_completed: "Είμαι άνθρωπος",
    text_completed_sr:
      " Ο αυτόματος έλεγχος ανεπιθύμητου περιεχομένου ολοκληρώθηκε",
    text_expired: " Η επαλήθευση Anti-Robot έληξε",
    button_restart: " Επανεκκίνηση",
    text_error: " Η επαλήθευση απέτυχε",
    button_retry: " Δοκιμάστε ξανά",
    text_fetch_error: " Αποτυχία σύνδεσης με",
  },
  wS = {
    text_init: "Ініціалізація...",
    text_ready: "Антиробот верифікація",
    button_start: "Натисніть, щоб розпочати верифікацію",
    text_fetching: "З’єднання",
    text_solving: "Перевірка, що ви не робот...",
    text_completed: "Я не робот",
    text_completed_sr: "Автоматична перевірка спаму завершена",
    text_expired: "Час вичерпано",
    button_restart: "Почати знову",
    text_error: "Верифікація не вдалась",
    button_retry: "Спробувати знову",
    text_fetch_error: "Не вдалось з’єднатись",
  },
  RS = {
    text_init: "Инициализиране...",
    text_ready: "Анти-робот проверка",
    button_start: "Щракнете, за да започнете проверката",
    text_fetching: "Предизвикателство",
    text_solving: "Проверяваме дали си човек...",
    text_completed: "Аз съм човек",
    text_completed_sr: "Автоматичната проверка за спам е завършена",
    text_expired: "Анти-Робот проверката изтече",
    button_restart: "Рестартирайте",
    text_error: "Неуспешна проверка",
    button_retry: "Опитайте пак",
    text_fetch_error: "Неуспешно свързване с",
  },
  TS = {
    text_init: "Inicializace...",
    text_ready: "Ověření proti robotům",
    button_start: "Klikněte pro ověření",
    text_fetching: "Problém při načítání",
    text_solving: "Ověření, že jste člověk...",
    text_completed: "Jsem člověk",
    text_completed_sr: "Automatická kontrola spamu dokončena",
    text_expired: "Ověření proti robotům vypršelo",
    button_restart: "Restartovat",
    text_error: "Ověření se nezdařilo",
    button_retry: "Zkusit znovu",
    text_fetch_error: "Připojení se nezdařilo",
  },
  OS = {
    text_init: "Inicializácia...",
    text_ready: "Overenie proti robotom",
    button_start: "Kliknite pre overenie",
    text_fetching: "Problém pri načítaní",
    text_solving: "Overenie, že ste človek...",
    text_completed: "Som človek",
    text_completed_sr: "Automatická kontrola spamu dokončená",
    text_expired: "Overenie proti robotom vypršalo",
    button_restart: "Reštartovať",
    text_error: "Overenie sa nepodarilo",
    button_retry: "Skúsiť znova",
    text_fetch_error: "Pripojenie sa nepodarilo",
  },
  yy = {
    text_init: " Aktiverer...",
    text_ready: "Jeg er ikke en robot",
    button_start: "Klikk for å starte verifiseringen",
    text_fetching: "Henter data",
    text_solving: "Sjekker at du er et menneske...",
    text_completed: "Jeg er et menneske",
    text_completed_sr: "Automatisk spam-sjekk fullført",
    text_expired: "Verifisering kunne ikke fullføres",
    button_restart: "Omstart",
    text_error: "Bekreftelsen mislyktes",
    button_retry: "Prøv på nytt",
    text_fetch_error: "Tilkoblingen mislyktes",
  },
  zS = {
    text_init: "Aktivoidaan...",
    text_ready: "En ole robotti",
    button_start: "Aloita vahvistus klikkaamalla",
    text_fetching: "Haetaan tietoja",
    text_solving: "Tarkistaa, että olet ihminen...",
    text_completed: "Olen ihminen",
    text_completed_sr: "Automaattinen roskapostin tarkistus suoritettu",
    text_expired: "Vahvistusta ei voitu suorittaa loppuun",
    button_restart: "Uudelleenkäynnistys",
    text_error: "Vahvistus epäonnistui",
    button_retry: "Yritä uudelleen",
    text_fetch_error: "Yhteys epäonnistui",
  },
  MS = {
    text_init: "Notiek inicializēšana...",
    text_ready: "Verifikācija, ka neesat robots",
    button_start: "Noklikšķiniet, lai sāktu verifikāciju",
    text_fetching: "Notiek drošības uzdevuma izgūšana",
    text_solving: "Notiek pārbaude, vai esat cilvēks...",
    text_completed: "Es esmu cilvēks",
    text_completed_sr: "Automātiska surogātpasta pārbaude pabeigta",
    text_expired: "Verifikācijas, ka neesat robots, derīgums beidzies",
    button_restart: "Restartēt",
    text_error: "Verifikācija neizdevās",
    button_retry: "Mēģināt vēlreiz",
    text_fetch_error: "Neizdevās izveidot savienojumu ar",
  },
  DS = {
    text_init: "Inicijuojama...",
    text_ready: "Patikrinimas, ar nesate robotas",
    button_start: "Spustelėkite patikrinimui pradėti",
    text_fetching: "Gavimo iššūkis",
    text_solving: "Tikrinama, ar esate žmogus...",
    text_completed: "Esu žmogus",
    text_completed_sr: "Automatinė patikra dėl pašto šiukšlių atlikta",
    text_expired: "Patikrinimas, ar nesate robotas, baigė galioti",
    button_restart: "Pradėti iš naujo",
    text_error: "Patikrinimas nepavyko",
    button_retry: "Kartoti",
    text_fetch_error: "Nepavyko prisijungti prie",
  },
  BS = {
    text_init: "Inicjowanie...",
    text_ready: "Weryfikacja antybotowa",
    button_start: "Kliknij, aby rozpocząć weryfikację",
    text_fetching: "Pobieranie",
    text_solving: "Weryfikacja, czy nie jesteś robotem...",
    text_completed: "Nie jestem robotem",
    text_completed_sr: "Zakończono automatyczne sprawdzanie spamu",
    text_expired: "Weryfikacja antybotowa wygasła",
    button_restart: "Uruchom ponownie",
    text_error: "Weryfikacja nie powiodła się",
    button_retry: "Spróbuj ponownie",
    text_fetch_error: "Nie udało się połączyć z",
  },
  NS = {
    text_init: "Initsialiseerimine...",
    text_ready: "Robotivastane kinnitus",
    button_start: "Kinnitamisega alustamiseks klõpsake",
    text_fetching: "Väljakutse toomine",
    text_solving: "Kinnitatakse, et sa oled inimene...",
    text_completed: "Ma olen inimene",
    text_completed_sr: "Automaatne rämpsposti kontroll on lõpetatud",
    text_expired: "Robotivastane kinnitus aegus",
    button_restart: "Taaskäivita",
    text_error: "Kinnitamine nurjus",
    button_retry: "Proovi uuesti",
    text_fetch_error: "Ühenduse loomine nurjus",
  },
  kS = {
    text_init: "Početno postavljanje...",
    text_ready: "Provjera protiv robota",
    button_start: "Kliknite za početak provjere",
    text_fetching: "Dohvaćanje izazova",
    text_solving: "Provjeravamo jeste li čovjek...",
    text_completed: "Nisam robot",
    text_completed_sr: "Automatska provjera je završena",
    text_expired: "Vrijeme za provjeru protiv robota je isteklo",
    button_restart: "Osvježi",
    text_error: "Provjera nije uspjlela",
    button_retry: " Ponovo pokreni",
    text_fetch_error: "Nije moguće uspostaviti vezu",
  },
  LS = {
    text_init: "Pokretanje...",
    text_ready: "Anti-Robot Verifikacija",
    button_start: "Kliknite da biste započeli verifikaciju",
    text_fetching: "Učitavanje izazova",
    text_solving: "Verifikacija da ste čovek...",
    text_completed: "Ja sam čovek",
    text_completed_sr: "Automatska provera neželjene pošte je završena",
    text_expired: "Anti-Robot verifikacija je istekla",
    button_restart: "Ponovo pokrenuti",
    text_error: "Verifikacija nije uspela",
    button_retry: "Pokušajte ponovo",
    text_fetch_error: "Neuspelo povezivanje sa...",
  },
  US = {
    text_init: "Inicializiranje...",
    text_ready: "Preverjanje robotov",
    button_start: "Kliknite za začetek preverjanja",
    text_fetching: "Prenašanje izziva",
    text_solving: "Preverjamo, ali ste človek",
    text_completed: "Nisem robot",
    text_completed_sr: "Avtomatsko preverjanje je zaključeno",
    text_expired: "Preverjanje robotov je poteklo",
    button_restart: "Osveži",
    text_error: "Preverjanje ni uspelo",
    button_retry: "Poskusi ponovno",
    text_fetch_error: "Povezave ni bilo mogoče vzpostaviti",
  },
  VS = {
    text_init: "Inicializálás...",
    text_ready: "Robotellenes ellenőrzés",
    button_start: "Kattintson az ellenőrzés megkezdéséhez",
    text_fetching: "Feladvány lekérése",
    text_solving: "Annak igazolása, hogy Ön nem robot...",
    text_completed: "Nem vagyok robot",
    text_completed_sr: "Automatikus spam ellenőrzés befejeződött",
    text_expired: "Robotellenes ellenőrzés lejárt",
    button_restart: "Újraindítás",
    text_error: "Az ellenőrzés nem sikerült",
    button_retry: "Próbálja újra",
    text_fetch_error: "Nem sikerült csatlakozni",
  },
  QS = {
    text_init: "Se inițializează...",
    text_ready: "Verificare anti-robot",
    button_start: "Click pentru a începe verificarea",
    text_fetching: "Downloading",
    text_solving: "Verificare că ești om...",
    text_completed: "Sunt om",
    text_completed_sr: "Verificarea automată a spam-ului a fost finalizată",
    text_expired: "Verificarea anti-robot a expirat",
    button_restart: "Restart",
    text_error: "Verificare eșuată",
    button_retry: "Reîncearcă",
    text_fetch_error: "Nu s-a putut conecta",
  },
  HS = {
    text_init: "初始化中……",
    text_ready: "人机验证",
    button_start: "点击开始",
    text_fetching: "正在加载",
    text_solving: "人机校验中……",
    text_completed: "我不是机器人",
    text_completed_sr: "人机验证完成",
    text_expired: "验证已过期",
    button_restart: "重新开始",
    text_error: "校验失败",
    button_retry: "重试",
    text_fetch_error: "无法连接到",
  },
  jS = {
    text_init: "正在初始化……",
    text_ready: "反機器人驗證",
    button_start: "點擊開始驗證",
    text_fetching: "載入中",
    text_solving: "反機器人驗證中……",
    text_completed: "我不是機器人",
    text_completed_sr: "驗證完成",
    text_expired: "驗證超時",
    button_restart: "重新開始",
    text_error: "驗證失敗",
    button_retry: "重試",
    text_fetch_error: "無法連線到",
  },
  IS = {
    text_init: "Đang khởi tạo...",
    text_ready: "Xác minh chống Robot",
    button_start: "Bấm vào đây để xác minh",
    text_fetching: "Tìm nạp và xử lý thử thách",
    text_solving: "Xác minh bạn là người...",
    text_completed: "Bạn là con người",
    text_completed_sr: "Xác minh hoàn tất",
    text_expired: "Xác minh đã hết hạn",
    button_restart: "Khởi động lại",
    text_error: "Xác minh thất bại",
    button_retry: "Thử lại",
    text_fetch_error: "Không kết nối được",
  },
  GS = {
    text_init: "בביצוע...",
    text_ready: "אימות אנוש",
    button_start: "צריך ללחוץ להתחלת האימות",
    text_fetching: "אתגר המענה בהכנה",
    text_solving: "מתבצע אימות אנוש...",
    text_completed: "אני לא רובוט",
    text_completed_sr: "בדיקת הספאם האוטומטית הסתיימה",
    text_expired: "פג תוקף אימות האנוש",
    button_restart: "להתחיל שוב",
    text_error: "אימות האנוש נכשל",
    button_retry: "לנסות שוב",
    text_fetch_error: "נכשל החיבור אל",
    rtl: !0,
  },
  YS = {
    text_init: "การเริ่มต้น...",
    text_ready: " การตรวจสอบต่อต้านหุ่นยนต์",
    button_start: "คลิกเพื่อเริ่มการตรวจสอบ",
    text_fetching: "การดึงความท้าทาย",
    text_solving: "ยืนยันว่าคุณเป็นมนุษย์...",
    text_completed: "ฉันเป็นมนุษย์",
    text_completed_sr: "การตรวจสอบสแปมอัตโนมัติเสร็จสมบูรณ์",
    text_expired: "การตรวจสอบ ต่อต้านหุ่นยนต์ หมดอายุ",
    button_restart: "รีสตาร์ท",
    text_error: "การยืนยันล้มเหลว",
    button_retry: "ลองใหม่",
    text_fetch_error: "ไม่สามารถเชื่อมต่อได้",
  },
  qS = {
    text_init: "초기화 중",
    text_ready: "Anti-Robot 검증",
    button_start: "검증을 위해 클릭해 주세요",
    text_fetching: "검증 준비 중",
    text_solving: "검증 중",
    text_completed: "검증이 완료되었습니다",
    text_completed_sr: "자동 스팸 확인 완료",
    text_expired: "Anti-Robot 검증 만료",
    button_restart: "다시 시작합니다",
    text_error: "검증 실패",
    button_retry: "다시 시도해 주세요",
    text_fetch_error: "연결하지 못했습니다",
  },
  KS = {
    text_init: "...التهيئة",
    text_ready: "يتم التحقيق",
    button_start: "إضغط هنا للتحقيق",
    text_fetching: "تهيئة التحدي",
    text_solving: "نتحقق من أنك لست روبوتًا...",
    text_completed: "أنا لست روبوتًا",
    text_completed_sr: "تم الانتهاء من التحقق التلقائي من البريد العشوائي",
    text_expired: "انتهت صلاحية التحقق",
    button_restart: "إعادة تشغيل",
    text_error: "فشل التحقق",
    button_retry: "ابدأ مرة أخرى",
    text_fetch_error: "مشكلة في الاتصال مع",
  },
  cs = {
    en: dS,
    de: mS,
    nl: gS,
    fr: hS,
    it: pS,
    pt: yS,
    es: vS,
    ca: AS,
    ja: bS,
    da: _S,
    ru: xS,
    sv: ES,
    tr: SS,
    el: CS,
    uk: wS,
    bg: RS,
    cs: TS,
    sk: OS,
    no: yy,
    fi: zS,
    lv: MS,
    lt: DS,
    pl: BS,
    et: NS,
    hr: kS,
    sr: LS,
    sl: US,
    hu: VS,
    ro: QS,
    zh: HS,
    zh_tw: jS,
    vi: IS,
    he: GS,
    th: YS,
    kr: qS,
    ar: KS,
    nb: yy,
  };
function XS(a, l) {
  const r = new Uint8Array(3),
    o = new DataView(r.buffer);
  return (o.setUint8(0, a), o.setUint16(1, l), r);
}
var FS =
  '!function(){"use strict";const A="=".charCodeAt(0),I=new Uint8Array(256);for(let A=0;A<64;A++)I["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charCodeAt(A)]=A;function g(A){const I={},g=A.exports,C=g.memory,Q=g.__alloc,t=g.__retain,B=g.__rtti_base||-1;return I.__allocArray=(A,I)=>{const g=function(A){return new Uint32Array(C.buffer)[(B+4>>>2)+2*A]}(A),e=31-Math.clz32(g>>>6&31),o=I.length,i=Q(o<<e,0),r=Q(12,A),n=new Uint32Array(C.buffer);n[r+0>>>2]=t(i),n[r+4>>>2]=i,n[r+8>>>2]=o<<e;const E=C.buffer,s=new Uint8Array(E);if(16384&g)for(let A=0;A<o;++A)s[(i>>>e)+A]=t(I[A]);else s.set(I,i>>>e);return r},I.__getUint8Array=A=>{const I=new Uint32Array(C.buffer),g=I[A+4>>>2];return new Uint8Array(C.buffer,g,I[g-4>>>2]>>>0)},function(A,I={}){const g=A.__argumentsLength?I=>{A.__argumentsLength.value=I}:A.__setArgumentsLength||A.__setargc||(()=>({}));for(const C in A){if(!Object.prototype.hasOwnProperty.call(A,C))continue;const Q=A[C],t=C.split(".")[0];"function"==typeof Q&&Q!==g?(I[t]=(...A)=>(g(A.length),Q(...A))).original=Q:I[t]=Q}return I}(g,I)}class C{constructor(A){this.b=new Uint8Array(128),this.h=new Uint32Array(16),this.t=0,this.c=0,this.v=new Uint32Array(32),this.m=new Uint32Array(32),this.outlen=A}}function Q(A,I){return A[I]^A[I+1]<<8^A[I+2]<<16^A[I+3]<<24}function t(A,I,g,C,Q,t,B,e){const o=I[B],i=I[B+1],r=I[e],n=I[e+1];let E,s,w,a,c=A[g],D=A[g+1],f=A[C],h=A[C+1],y=A[Q],l=A[Q+1],u=A[t],N=A[t+1];E=c+f,s=(c&f|(c|f)&~E)>>>31,c=E,D=D+h+s,E=c+o,s=(c&o|(c|o)&~E)>>>31,c=E,D=D+i+s,w=u^c,a=N^D,u=a,N=w,E=y+u,s=(y&u|(y|u)&~E)>>>31,y=E,l=l+N+s,w=f^y,a=h^l,f=w>>>24^a<<8,h=a>>>24^w<<8,E=c+f,s=(c&f|(c|f)&~E)>>>31,c=E,D=D+h+s,E=c+r,s=(c&r|(c|r)&~E)>>>31,c=E,D=D+n+s,w=u^c,a=N^D,u=w>>>16^a<<16,N=a>>>16^w<<16,E=y+u,s=(y&u|(y|u)&~E)>>>31,y=E,l=l+N+s,w=f^y,a=h^l,f=a>>>31^w<<1,h=w>>>31^a<<1,A[g]=c,A[g+1]=D,A[C]=f,A[C+1]=h,A[Q]=y,A[Q+1]=l,A[t]=u,A[t+1]=N}const B=[4089235720,1779033703,2227873595,3144134277,4271175723,1013904242,1595750129,2773480762,2917565137,1359893119,725511199,2600822924,4215389547,528734635,327033209,1541459225],e=[0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,28,20,8,16,18,30,26,12,2,24,0,4,22,14,10,6,22,16,24,0,10,4,30,26,20,28,6,12,14,2,18,8,14,18,6,2,26,24,22,28,4,12,10,20,8,0,30,16,18,0,10,14,4,8,20,30,28,2,22,24,12,16,6,26,4,24,12,20,0,22,16,6,8,26,14,10,30,28,2,18,24,10,2,30,28,26,8,20,0,14,12,6,18,4,16,22,26,22,14,28,24,2,6,18,10,0,30,8,16,12,4,20,12,30,28,18,22,6,0,16,24,4,26,14,2,8,20,10,20,4,16,8,14,12,2,10,30,22,18,28,6,24,26,0,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,28,20,8,16,18,30,26,12,2,24,0,4,22,14,10,6];function o(A,I){const g=A.v,C=A.m;for(let I=0;I<16;I++)g[I]=A.h[I],g[I+16]=B[I];g[24]=g[24]^A.t,g[25]=g[25]^A.t/4294967296,I&&(g[28]=~g[28],g[29]=~g[29]);for(let I=0;I<32;I++)C[I]=Q(A.b,4*I);for(let A=0;A<12;A++)t(g,C,0,8,16,24,e[16*A+0],e[16*A+1]),t(g,C,2,10,18,26,e[16*A+2],e[16*A+3]),t(g,C,4,12,20,28,e[16*A+4],e[16*A+5]),t(g,C,6,14,22,30,e[16*A+6],e[16*A+7]),t(g,C,0,10,20,30,e[16*A+8],e[16*A+9]),t(g,C,2,12,22,24,e[16*A+10],e[16*A+11]),t(g,C,4,14,16,26,e[16*A+12],e[16*A+13]),t(g,C,6,8,18,28,e[16*A+14],e[16*A+15]);for(let I=0;I<16;I++)A.h[I]=A.h[I]^g[I]^g[I+16]}function i(A,I){for(let I=0;I<16;I++)A.h[I]=B[I];A.b.set(I),A.h[0]^=16842752^A.outlen}async function r(){return(A,I,g=4294967295)=>{const Q=function(A,I,g){if(128!=A.length)throw Error("Invalid input");const Q=A.buffer,t=new DataView(Q),B=new C(32);B.t=128;const e=t.getUint32(124,!0),r=e+g;for(let g=e;g<r;g++)if(t.setUint32(124,g,!0),i(B,A),o(B,!0),B.h[0]<I)return 0==ASC_TARGET?new Uint8Array(B.h.buffer):Uint8Array.wrap(B.h.buffer);return new Uint8Array(0)}(A,I,g);return[A,Q]}}let n,E;Uint8Array.prototype.slice||Object.defineProperty(Uint8Array.prototype,"slice",{value:function(A,I){return new Uint8Array(Array.prototype.slice.call(this,A,I))}}),self.ASC_TARGET=0;const s=new Promise((A=>E=A));self.onerror=A=>{self.postMessage({type:"error",message:JSON.stringify(A)})},self.onmessage=async C=>{const Q=C.data;try{if("solver"===Q.type){if(Q.forceJS){n=1;const A=await r();E(A)}else try{n=2;const C=WebAssembly.compile(function(g){let C=3285;g.charCodeAt(4379)===A&&C--,g.charCodeAt(4378)===A&&C--;const Q=new Uint8Array(C);for(let A=0,C=0;A<4380;A+=4){const t=I[g.charCodeAt(A+0)],B=I[g.charCodeAt(A+1)],e=I[g.charCodeAt(A+2)],o=I[g.charCodeAt(A+3)];Q[C++]=t<<2|B>>4,Q[C++]=(15&B)<<4|e>>2,Q[C++]=(3&e)<<6|63&o}return Q}("AGFzbQEAAAABKghgAABgAn9/AGADf39/AX9gAX8AYAR/f39/AGAAAX9gAX8Bf2ACf38BfwINAQNlbnYFYWJvcnQABAMMCwcGAwAAAQIFAQIABQMBAAEGFgR/AUEAC38BQQALfwBBAwt/AEHgDAsHbgkGbWVtb3J5AgAHX19hbGxvYwABCF9fcmV0YWluAAIJX19yZWxlYXNlAAMJX19jb2xsZWN0AAQHX19yZXNldAAFC19fcnR0aV9iYXNlAwMNVWludDhBcnJheV9JRAMCDHNvbHZlQmxha2UyYgAKCAELCvQSC5IBAQV/IABB8P///wNLBEAACyMBQRBqIgQgAEEPakFwcSICQRAgAkEQSxsiBmoiAj8AIgVBEHQiA0sEQCAFIAIgA2tB//8DakGAgHxxQRB2IgMgBSADShtAAEEASARAIANAAEEASARAAAsLCyACJAEgBEEQayICIAY2AgAgAkEBNgIEIAIgATYCCCACIAA2AgwgBAsEACAACwMAAQsDAAELBgAjACQBC7sCAQF/AkAgAUUNACAAQQA6AAAgACABakEEayICQQA6AAMgAUECTQ0AIABBADoAASAAQQA6AAIgAkEAOgACIAJBADoAASABQQZNDQAgAEEAOgADIAJBADoAACABQQhNDQAgAEEAIABrQQNxIgJqIgBBADYCACAAIAEgAmtBfHEiAmpBHGsiAUEANgIYIAJBCE0NACAAQQA2AgQgAEEANgIIIAFBADYCECABQQA2AhQgAkEYTQ0AIABBADYCDCAAQQA2AhAgAEEANgIUIABBADYCGCABQQA2AgAgAUEANgIEIAFBADYCCCABQQA2AgwgACAAQQRxQRhqIgFqIQAgAiABayEBA0AgAUEgTwRAIABCADcDACAAQgA3AwggAEIANwMQIABCADcDGCABQSBrIQEgAEEgaiEADAELCwsLcgACfyAARQRAQQxBAhABIQALIAALQQA2AgAgAEEANgIEIABBADYCCCABQfD///8DIAJ2SwRAQcAKQfAKQRJBORAAAAsgASACdCIBQQAQASICIAEQBiAAKAIAGiAAIAI2AgAgACACNgIEIAAgATYCCCAAC88BAQJ/QaABQQAQASIAQQxBAxABQYABQQAQBzYCACAAQQxBBBABQQhBAxAHNgIEIABCADcDCCAAQQA2AhAgAEIANwMYIABCADcDICAAQgA3AyggAEIANwMwIABCADcDOCAAQgA3A0AgAEIANwNIIABCADcDUCAAQgA3A1ggAEIANwNgIABCADcDaCAAQgA3A3AgAEIANwN4IABCADcDgAEgAEIANwOIASAAQgA3A5ABQYABQQUQASIBQYABEAYgACABNgKYASAAQSA2ApwBIAAL2AkCA38SfiAAKAIEIQIgACgCmAEhAwNAIARBgAFIBEAgAyAEaiABIARqKQMANwMAIARBCGohBAwBCwsgAigCBCkDACEMIAIoAgQpAwghDSACKAIEKQMQIQ4gAigCBCkDGCEPIAIoAgQpAyAhBSACKAIEKQMoIQsgAigCBCkDMCEGIAIoAgQpAzghB0KIkvOd/8z5hOoAIQhCu86qptjQ67O7fyEJQqvw0/Sv7ry3PCEQQvHt9Pilp/2npX8hCiAAKQMIQtGFmu/6z5SH0QCFIRFCn9j52cKR2oKbfyESQpSF+aXAyom+YCETQvnC+JuRo7Pw2wAhFEEAIQQDQCAEQcABSARAIAUgCCARIAwgBSADIARBgAhqIgEtAABBA3RqKQMAfHwiBYVCIIoiDHwiCIVCGIoiESAIIAwgBSARIAMgAS0AAUEDdGopAwB8fCIMhUIQiiIIfCIVhUI/iiEFIAsgCSASIA0gCyADIAEtAAJBA3RqKQMAfHwiDYVCIIoiCXwiEYVCGIohCyAGIBAgEyAOIAYgAyABLQAEQQN0aikDAHx8IgaFQiCKIg58IhCFQhiKIhIgECAOIAYgEiADIAEtAAVBA3RqKQMAfHwiDoVCEIoiE3wiEIVCP4ohBiAHIAogFCAPIAcgAyABLQAGQQN0aikDAHx8IgeFQiCKIg98IgqFQhiKIhIgCiAPIAcgEiADIAEtAAdBA3RqKQMAfHwiD4VCEIoiCnwiEoVCP4ohByAQIAogDCARIAkgDSALIAMgAS0AA0EDdGopAwB8fCINhUIQiiIJfCIWIAuFQj+KIgwgAyABLQAIQQN0aikDAHx8IhCFQiCKIgp8IgsgECALIAyFQhiKIhEgAyABLQAJQQN0aikDAHx8IgwgCoVCEIoiFHwiECARhUI/iiELIAYgEiAIIA0gBiADIAEtAApBA3RqKQMAfHwiDYVCIIoiCHwiCoVCGIoiBiANIAYgAyABLQALQQN0aikDAHx8Ig0gCIVCEIoiESAKfCIKhUI/iiEGIAcgFSAJIA4gByADIAEtAAxBA3RqKQMAfHwiDoVCIIoiCHwiCYVCGIoiByAOIAcgAyABLQANQQN0aikDAHx8Ig4gCIVCEIoiEiAJfCIIhUI/iiEHIAUgFiATIA8gBSADIAEtAA5BA3RqKQMAfHwiD4VCIIoiCXwiFYVCGIoiBSAPIAUgAyABLQAPQQN0aikDAHx8Ig8gCYVCEIoiEyAVfCIJhUI/iiEFIARBEGohBAwBCwsgAigCBCACKAIEKQMAIAggDIWFNwMAIAIoAgQgAigCBCkDCCAJIA2FhTcDCCACKAIEIAIoAgQpAxAgDiAQhYU3AxAgAigCBCACKAIEKQMYIAogD4WFNwMYIAIoAgQgAigCBCkDICAFIBGFhTcDICACKAIEIAIoAgQpAyggCyAShYU3AyggAigCBCACKAIEKQMwIAYgE4WFNwMwIAIoAgQgAigCBCkDOCAHIBSFhTcDOCAAIAw3AxggACANNwMgIAAgDjcDKCAAIA83AzAgACAFNwM4IAAgCzcDQCAAIAY3A0ggACAHNwNQIAAgCDcDWCAAIAk3A2AgACAQNwNoIAAgCjcDcCAAIBE3A3ggACASNwOAASAAIBM3A4gBIAAgFDcDkAEL4QIBBH8gACgCCEGAAUcEQEHQCUGACkEeQQUQAAALIAAoAgAhBBAIIgMoAgQhBSADQoABNwMIIAQoAnwiACACaiEGA0AgACAGSQRAIAQgADYCfCADKAIEIgIoAgQgAygCnAGtQoiS95X/zPmE6gCFNwMAIAIoAgRCu86qptjQ67O7fzcDCCACKAIEQqvw0/Sv7ry3PDcDECACKAIEQvHt9Pilp/2npX83AxggAigCBELRhZrv+s+Uh9EANwMgIAIoAgRCn9j52cKR2oKbfzcDKCACKAIEQuv6htq/tfbBHzcDMCACKAIEQvnC+JuRo7Pw2wA3AzggAyAEEAkgBSgCBCkDAKcgAUkEQEEAIAUoAgAiAUEQaygCDCICSwRAQfALQbAMQc0NQQUQAAALQQxBAxABIgAgATYCACAAIAI2AgggACABNgIEIAAPCyAAQQFqIQAMAQsLQQxBAxABQQBBABAHCwwAQaANJABBoA0kAQsL+gQJAEGBCAu/AQECAwQFBgcICQoLDA0ODw4KBAgJDw0GAQwAAgsHBQMLCAwABQIPDQoOAwYHAQkEBwkDAQ0MCw4CBgUKBAAPCAkABQcCBAoPDgELDAYIAw0CDAYKAAsIAwQNBwUPDgEJDAUBDw4NBAoABwYDCQIICw0LBw4MAQMJBQAPBAgGAgoGDw4JCwMACAwCDQcBBAoFCgIIBAcGAQUPCwkOAwwNAAABAgMEBQYHCAkKCwwNDg8OCgQICQ8NBgEMAAILBwUDAEHACQspGgAAAAEAAAABAAAAGgAAAEkAbgB2AGEAbABpAGQAIABpAG4AcAB1AHQAQfAJCzEiAAAAAQAAAAEAAAAiAAAAcwByAGMALwBzAG8AbAB2AGUAcgBXAGEAcwBtAC4AdABzAEGwCgsrHAAAAAEAAAABAAAAHAAAAEkAbgB2AGEAbABpAGQAIABsAGUAbgBnAHQAaABB4AoLNSYAAAABAAAAAQAAACYAAAB+AGwAaQBiAC8AYQByAHIAYQB5AGIAdQBmAGYAZQByAC4AdABzAEGgCws1JgAAAAEAAAABAAAAJgAAAH4AbABpAGIALwBzAHQAYQB0AGkAYwBhAHIAcgBhAHkALgB0AHMAQeALCzMkAAAAAQAAAAEAAAAkAAAASQBuAGQAZQB4ACAAbwB1AHQAIABvAGYAIAByAGEAbgBnAGUAQaAMCzMkAAAAAQAAAAEAAAAkAAAAfgBsAGkAYgAvAHQAeQBwAGUAZABhAHIAcgBhAHkALgB0AHMAQeAMCy4GAAAAIAAAAAAAAAAgAAAAAAAAACAAAAAAAAAAYQAAAAIAAAAhAgAAAgAAACQC")),Q=await async function(A){const I=await async function(A){const I={env:{abort(){throw Error("Wasm aborted")}}};return{exports:g(await WebAssembly.instantiate(A,I))}}(A),C=I.exports.__retain(I.exports.__allocArray(I.exports.Uint8Array_ID,new Uint8Array(128)));let Q=I.exports.__getUint8Array(C);return(A,g,t=4294967295)=>{Q.set(A);const B=I.exports.solveBlake2b(C,g,t);Q=I.exports.__getUint8Array(C);const e=I.exports.__getUint8Array(B);return I.exports.__release(B),[Q,e]}}(await C);E(Q)}catch(A){console.log("FriendlyCaptcha failed to initialize WebAssembly, falling back to Javascript solver: "+A.toString()),n=1;const I=await r();E(I)}self.postMessage({type:"ready",solver:n})}else if("start"===Q.type){const A=await s;self.postMessage({type:"started"});let I,g=0;for(let C=0;C<256;C++){Q.puzzleSolverInput[123]=C;const[t,B]=A(Q.puzzleSolverInput,Q.threshold);if(0!==B.length){I=t;break}console.warn("FC: Internal error or no solution found"),g+=Math.pow(2,32)-1}g+=new DataView(I.slice(-4).buffer).getUint32(0,!0),self.postMessage({type:"done",solution:I.slice(-8),h:g,puzzleIndex:Q.puzzleIndex,puzzleNumber:Q.puzzleNumber})}}catch(A){setTimeout((()=>{throw A}))}}}();';
let Pv;
typeof window < "u" && (Pv = window.URL || window.webkitURL);
class ZS {
  constructor() {
    ((this.workers = []),
      (this.puzzleNumber = 0),
      (this.numPuzzles = 0),
      (this.threshold = 0),
      (this.startTime = 0),
      (this.progress = 0),
      (this.totalHashes = 0),
      (this.puzzleSolverInputs = []),
      (this.puzzleIndex = 0),
      (this.solutionBuffer = new Uint8Array(0)),
      (this.solverType = 1),
      (this.readyPromise = new Promise(() => {})),
      (this.readyCount = 0),
      (this.startCount = 0),
      (this.progressCallback = () => 0),
      (this.readyCallback = () => 0),
      (this.startedCallback = () => 0),
      (this.doneCallback = () => 0),
      (this.errorCallback = () => 0));
  }
  init() {
    (this.terminateWorkers(), (this.progress = 0), (this.totalHashes = 0));
    let l;
    ((this.readyPromise = new Promise((o) => (l = o))),
      (this.readyCount = 0),
      (this.startCount = 0),
      (this.workers = new Array(4)));
    const r = new Blob([FS], { type: "text/javascript" });
    for (let o = 0; o < this.workers.length; o++)
      ((this.workers[o] = new Worker(Pv.createObjectURL(r))),
        (this.workers[o].onerror = (u) => this.errorCallback(u)),
        (this.workers[o].onmessage = (u) => {
          const f = u.data;
          if (f)
            if (f.type === "ready")
              (this.readyCount++,
                (this.solverType = f.solver),
                this.readyCount == this.workers.length &&
                  (l(), this.readyCallback()));
            else if (f.type === "started")
              (this.startCount++,
                this.startCount == 1 &&
                  ((this.startTime = Date.now()), this.startedCallback()));
            else if (f.type === "done") {
              if (f.puzzleNumber !== this.puzzleNumber) return;
              if (
                (this.puzzleIndex < this.puzzleSolverInputs.length &&
                  (this.workers[o].postMessage({
                    type: "start",
                    puzzleSolverInput:
                      this.puzzleSolverInputs[this.puzzleIndex],
                    threshold: this.threshold,
                    puzzleIndex: this.puzzleIndex,
                    puzzleNumber: this.puzzleNumber,
                  }),
                  this.puzzleIndex++),
                this.progress++,
                (this.totalHashes += f.h),
                this.progressCallback({
                  n: this.numPuzzles,
                  h: this.totalHashes,
                  t: (Date.now() - this.startTime) / 1e3,
                  i: this.progress,
                }),
                this.solutionBuffer.set(f.solution, f.puzzleIndex * 8),
                this.progress == this.numPuzzles)
              ) {
                const d = (Date.now() - this.startTime) / 1e3;
                this.doneCallback({
                  solution: this.solutionBuffer,
                  h: this.totalHashes,
                  t: d,
                  diagnostics: XS(this.solverType, d),
                  solver: this.solverType,
                });
              }
            } else f.type === "error" && this.errorCallback(f);
        }));
  }
  setupSolver(l = !1) {
    const r = { type: "solver", forceJS: l };
    for (let o = 0; o < this.workers.length; o++)
      this.workers[o].postMessage(r);
  }
  async start(l) {
    (await this.readyPromise,
      (this.puzzleSolverInputs = uS(l.buffer, l.n)),
      (this.solutionBuffer = new Uint8Array(8 * l.n)),
      (this.numPuzzles = l.n),
      (this.threshold = l.threshold),
      (this.puzzleIndex = 0),
      this.puzzleNumber++);
    for (
      let r = 0;
      r < this.workers.length &&
      this.puzzleIndex !== this.puzzleSolverInputs.length;
      r++
    )
      (this.workers[r].postMessage({
        type: "start",
        puzzleSolverInput: this.puzzleSolverInputs[r],
        threshold: this.threshold,
        puzzleIndex: this.puzzleIndex,
        puzzleNumber: this.puzzleNumber,
      }),
        this.puzzleIndex++);
  }
  terminateWorkers() {
    if (this.workers.length != 0) {
      for (let l = 0; l < this.workers.length; l++) this.workers[l].terminate();
      this.workers = [];
    }
  }
}
const JS = "https://api.friendlycaptcha.com/api/v1/puzzle";
class kw {
  constructor(l, r = {}) {
    ((this.workerGroup = new ZS()),
      (this.valid = !1),
      (this.needsReInit = !1),
      (this.hasBeenStarted = !1),
      (this.hasBeenDestroyed = !1),
      (this.opts = Object.assign(
        {
          forceJSFallback: !1,
          skipStyleInjection: !1,
          startMode: "focus",
          puzzleEndpoint: l.dataset.puzzleEndpoint || JS,
          startedCallback: () => 0,
          readyCallback: () => 0,
          doneCallback: () => 0,
          errorCallback: () => 0,
          sitekey: l.dataset.sitekey || "",
          language: l.dataset.lang || "en",
          solutionFieldName:
            l.dataset.solutionFieldName || "frc-captcha-solution",
          styleNonce: null,
        },
        r
      )),
      (this.e = l),
      (this.e.friendlyChallengeWidget = this),
      this.loadLanguage(),
      (l.innerText = this.lang.text_init),
      this.opts.skipStyleInjection || eS(this.opts.styleNonce),
      this.init(
        this.opts.startMode === "auto" || this.e.dataset.start === "auto"
      ));
  }
  init(l) {
    if (this.hasBeenDestroyed) {
      console.error(
        "FriendlyCaptcha widget has been destroyed using destroy(), it can not be used anymore."
      );
      return;
    }
    if ((this.initWorkerGroup(), l)) this.start();
    else if (
      this.e.dataset.start !== "none" &&
      (this.opts.startMode === "focus" || this.e.dataset.start === "focus")
    ) {
      const r = nS(this.e);
      r
        ? aS(r, () => this.start())
        : console.log(
            "FriendlyCaptcha div seems not to be contained in a form, autostart will not work"
          );
    }
  }
  loadLanguage(l) {
    if (
      (l !== void 0
        ? (this.opts.language = l)
        : this.e.dataset.lang && (this.opts.language = this.e.dataset.lang),
      typeof this.opts.language == "string")
    ) {
      let r = this.opts.language.toLowerCase(),
        o = cs[r];
      (o === void 0 && r[2] === "-" && ((r = r.substring(0, 2)), (o = cs[r])),
        o === void 0 &&
          (console.error(
            'FriendlyCaptcha: language "' + this.opts.language + '" not found.'
          ),
          (o = cs.en)),
        (this.lang = o));
    } else
      this.lang = Object.assign(Object.assign({}, cs.en), this.opts.language);
  }
  makeButtonStart() {
    const l = this.e.querySelector("button");
    l &&
      (l.addEventListener("click", (r) => this.start(), {
        once: !0,
        passive: !0,
      }),
      l.addEventListener("touchstart", (r) => this.start(), {
        once: !0,
        passive: !0,
      }));
  }
  onWorkerError(l) {
    ((this.hasBeenStarted = !1),
      (this.needsReInit = !0),
      this.expiryTimeout && clearTimeout(this.expiryTimeout),
      console.error("[FRC]", l),
      (this.e.innerHTML = us(
        this.opts.solutionFieldName,
        this.lang,
        "Background worker error " + l.message
      )),
      this.makeButtonStart(),
      (this.opts.forceJSFallback = !0));
  }
  initWorkerGroup() {
    ((this.workerGroup.progressCallback = (l) => {
      tS(this.e, l);
    }),
      (this.workerGroup.readyCallback = () => {
        ((this.e.innerHTML = ZE(this.opts.solutionFieldName, this.lang)),
          this.makeButtonStart(),
          this.opts.readyCallback());
      }),
      (this.workerGroup.startedCallback = () => {
        ((this.e.innerHTML = PE(this.opts.solutionFieldName, this.lang)),
          this.opts.startedCallback());
      }),
      (this.workerGroup.doneCallback = (l) => {
        const r = this.handleDone(l);
        this.opts.doneCallback(r);
        const o = this.e.dataset.callback;
        o && window[o](r);
      }),
      (this.workerGroup.errorCallback = (l) => {
        this.onWorkerError(l);
      }),
      this.workerGroup.init(),
      this.workerGroup.setupSolver(this.opts.forceJSFallback));
  }
  expire() {
    ((this.hasBeenStarted = !1),
      this.e.isConnected !== !1 &&
        ((this.e.innerHTML = WE(this.opts.solutionFieldName, this.lang)),
        this.makeButtonStart()));
  }
  async start() {
    if (this.hasBeenDestroyed) {
      console.error(
        "Can not start FriendlyCaptcha widget which has been destroyed"
      );
      return;
    }
    if (this.hasBeenStarted) {
      console.warn(
        "Can not start FriendlyCaptcha widget which has already been started"
      );
      return;
    }
    const l = this.opts.sitekey || this.e.dataset.sitekey;
    if (!l) {
      (console.error("FriendlyCaptcha: sitekey not set on frc-captcha element"),
        (this.e.innerHTML = us(
          this.opts.solutionFieldName,
          this.lang,
          "Website problem: sitekey not set",
          !1
        )));
      return;
    }
    if (iS()) {
      this.e.innerHTML = us(
        this.opts.solutionFieldName,
        this.lang,
        "Browser check failed, try a different browser",
        !1,
        !0
      );
      return;
    }
    if (this.needsReInit) {
      ((this.needsReInit = !1), this.init(!0));
      return;
    }
    this.hasBeenStarted = !0;
    try {
      ((this.e.innerHTML = JE(this.opts.solutionFieldName, this.lang)),
        (this.puzzle = cS(await fS(this.opts.puzzleEndpoint, l, this.lang))),
        this.expiryTimeout && clearTimeout(this.expiryTimeout),
        (this.expiryTimeout = setTimeout(
          () => this.expire(),
          this.puzzle.expiry - 3e4
        )));
    } catch (r) {
      (console.error("[FRC]", r),
        (this.hasBeenStarted = !1),
        this.expiryTimeout && clearTimeout(this.expiryTimeout),
        (this.e.innerHTML = us(
          this.opts.solutionFieldName,
          this.lang,
          r.message
        )),
        this.makeButtonStart(),
        this.opts.errorCallback({
          code: "error_getting_puzzle",
          description: r.toString(),
          error: r,
        }));
      const u = this.e.dataset["callback-error"];
      u && window[u](this);
      return;
    }
    await this.workerGroup.start(this.puzzle);
  }
  handleDone(l) {
    this.valid = !0;
    const r = `${this.puzzle.signature}.${this.puzzle.base64}.${py(l.solution)}.${py(l.diagnostics)}`;
    return (
      (this.e.innerHTML = $E(this.opts.solutionFieldName, this.lang, r, l)),
      (this.needsReInit = !0),
      r
    );
  }
  destroy() {
    (this.workerGroup.terminateWorkers(),
      (this.needsReInit = !1),
      (this.hasBeenStarted = !1),
      this.expiryTimeout && clearTimeout(this.expiryTimeout),
      this.e && (this.e.remove(), delete this.e),
      (this.hasBeenDestroyed = !0));
  }
  reset() {
    if (this.hasBeenDestroyed) {
      console.error(
        "FriendlyCaptcha widget has been destroyed, it can not be used anymore"
      );
      return;
    }
    (this.workerGroup.terminateWorkers(),
      (this.needsReInit = !1),
      (this.hasBeenStarted = !1),
      this.expiryTimeout && clearTimeout(this.expiryTimeout),
      this.init(
        this.opts.startMode === "auto" || this.e.dataset.start === "auto"
      ));
  }
}
function Rn(a) {
  if (a === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return a;
}
function Yf(a, l) {
  return (
    (Yf = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, o) {
          return ((r.__proto__ = o), r);
        }),
    Yf(a, l)
  );
}
function PS(a, l) {
  ((a.prototype = Object.create(l.prototype)),
    (a.prototype.constructor = a),
    Yf(a, l));
}
var $S = Object.defineProperty,
  WS = Object.defineProperties,
  eC = Object.getOwnPropertyDescriptors,
  Bs = Object.getOwnPropertySymbols,
  $v = Object.prototype.hasOwnProperty,
  Wv = Object.prototype.propertyIsEnumerable,
  qf = (a, l, r) =>
    l in a
      ? $S(a, l, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (a[l] = r),
  un = (a, l) => {
    for (var r in l || (l = {})) $v.call(l, r) && qf(a, r, l[r]);
    if (Bs) for (var r of Bs(l)) Wv.call(l, r) && qf(a, r, l[r]);
    return a;
  },
  eA = (a, l) => WS(a, eC(l)),
  tC = (a, l) => {
    var r = {};
    for (var o in a) $v.call(a, o) && l.indexOf(o) < 0 && (r[o] = a[o]);
    if (a != null && Bs)
      for (var o of Bs(a)) l.indexOf(o) < 0 && Wv.call(a, o) && (r[o] = a[o]);
    return r;
  },
  Tt = (a, l, r) => (qf(a, typeof l != "symbol" ? l + "" : l, r), r),
  Sl = (a, l, r) =>
    new Promise((o, u) => {
      var f = (p) => {
          try {
            m(r.next(p));
          } catch (g) {
            u(g);
          }
        },
        d = (p) => {
          try {
            m(r.throw(p));
          } catch (g) {
            u(g);
          }
        },
        m = (p) => (p.done ? o(p.value) : Promise.resolve(p.value).then(f, d));
      m((r = r.apply(a, l)).next());
    }),
  nC = "hCaptcha-script",
  _s = "hCaptchaOnLoad",
  vy = "script-error",
  Ci = "@hCaptcha/loader";
function aC(a) {
  return Object.entries(a)
    .filter(([, l]) => l || l === !1)
    .map(
      ([l, r]) => `${encodeURIComponent(l)}=${encodeURIComponent(String(r))}`
    )
    .join("&");
}
function tA(a) {
  let l = (a && a.ownerDocument) || document,
    r = l.defaultView || l.parentWindow || window;
  return { document: l, window: r };
}
function nA(a) {
  return a || document.head;
}
function iC(a) {
  var l;
  (a.setTag("source", Ci),
    a.setTag("url", document.URL),
    a.setContext("os", { UA: navigator.userAgent }),
    a.setContext("browser", un({}, lC())),
    a.setContext(
      "device",
      eA(un({}, rC()), {
        screen_width_pixels: screen.width,
        screen_height_pixels: screen.height,
        language: navigator.language,
        orientation:
          ((l = screen.orientation) == null ? void 0 : l.type) || "Unknown",
        processor_count: navigator.hardwareConcurrency,
        platform: navigator.platform,
      })
    ));
}
function lC() {
  var a, l, r, o, u, f;
  let d = navigator.userAgent,
    m,
    p;
  return (
    d.indexOf("Firefox") !== -1
      ? ((m = "Firefox"),
        (p = (a = d.match(/Firefox\/([\d.]+)/)) == null ? void 0 : a[1]))
      : d.indexOf("Edg") !== -1
        ? ((m = "Microsoft Edge"),
          (p = (l = d.match(/Edg\/([\d.]+)/)) == null ? void 0 : l[1]))
        : d.indexOf("Chrome") !== -1 && d.indexOf("Safari") !== -1
          ? ((m = "Chrome"),
            (p = (r = d.match(/Chrome\/([\d.]+)/)) == null ? void 0 : r[1]))
          : d.indexOf("Safari") !== -1 && d.indexOf("Chrome") === -1
            ? ((m = "Safari"),
              (p = (o = d.match(/Version\/([\d.]+)/)) == null ? void 0 : o[1]))
            : d.indexOf("Opera") !== -1 || d.indexOf("OPR") !== -1
              ? ((m = "Opera"),
                (p =
                  (u = d.match(/(Opera|OPR)\/([\d.]+)/)) == null
                    ? void 0
                    : u[2]))
              : d.indexOf("MSIE") !== -1 || d.indexOf("Trident") !== -1
                ? ((m = "Internet Explorer"),
                  (p =
                    (f = d.match(/(MSIE |rv:)([\d.]+)/)) == null
                      ? void 0
                      : f[2]))
                : ((m = "Unknown"), (p = "Unknown")),
    { name: m, version: p }
  );
}
function rC() {
  let a = navigator.userAgent,
    l;
  a.indexOf("Win") !== -1
    ? (l = "Windows")
    : a.indexOf("Mac") !== -1
      ? (l = "Mac")
      : a.indexOf("Linux") !== -1
        ? (l = "Linux")
        : a.indexOf("Android") !== -1
          ? (l = "Android")
          : a.indexOf("like Mac") !== -1 ||
              a.indexOf("iPhone") !== -1 ||
              a.indexOf("iPad") !== -1
            ? (l = "iOS")
            : (l = "Unknown");
  let r;
  return (
    /Mobile|iPhone|iPod|Android/i.test(a)
      ? (r = "Mobile")
      : /Tablet|iPad/i.test(a)
        ? (r = "Tablet")
        : (r = "Desktop"),
    { model: l, family: l, device: r }
  );
}
var oC = class aA {
    constructor(l) {
      (Tt(this, "_parent"),
        Tt(this, "breadcrumbs", []),
        Tt(this, "context", {}),
        Tt(this, "extra", {}),
        Tt(this, "tags", {}),
        Tt(this, "request"),
        Tt(this, "user"),
        (this._parent = l));
    }
    get parent() {
      return this._parent;
    }
    child() {
      return new aA(this);
    }
    setRequest(l) {
      return ((this.request = l), this);
    }
    removeRequest() {
      return ((this.request = void 0), this);
    }
    addBreadcrumb(l) {
      return (
        typeof l.timestamp > "u" && (l.timestamp = new Date().toISOString()),
        this.breadcrumbs.push(l),
        this
      );
    }
    setExtra(l, r) {
      return ((this.extra[l] = r), this);
    }
    removeExtra(l) {
      return (delete this.extra[l], this);
    }
    setContext(l, r) {
      return (typeof r.type > "u" && (r.type = l), (this.context[l] = r), this);
    }
    removeContext(l) {
      return (delete this.context[l], this);
    }
    setTags(l) {
      return ((this.tags = un(un({}, this.tags), l)), this);
    }
    setTag(l, r) {
      return ((this.tags[l] = r), this);
    }
    removeTag(l) {
      return (delete this.tags[l], this);
    }
    setUser(l) {
      return ((this.user = l), this);
    }
    removeUser() {
      return ((this.user = void 0), this);
    }
    toBody() {
      let l = [],
        r = this;
      for (; r; ) (l.push(r), (r = r.parent));
      return l.reverse().reduce(
        (o, u) => {
          var f;
          return (
            (o.breadcrumbs = [
              ...((f = o.breadcrumbs) != null ? f : []),
              ...u.breadcrumbs,
            ]),
            (o.extra = un(un({}, o.extra), u.extra)),
            (o.contexts = un(un({}, o.contexts), u.context)),
            (o.tags = un(un({}, o.tags), u.tags)),
            u.user && (o.user = u.user),
            u.request && (o.request = u.request),
            o
          );
        },
        {
          breadcrumbs: [],
          extra: {},
          contexts: {},
          tags: {},
          request: void 0,
          user: void 0,
        }
      );
    }
    clear() {
      ((this.breadcrumbs = []),
        (this.context = {}),
        (this.tags = {}),
        (this.user = void 0));
    }
  },
  sC =
    /^\s*at (?:(.*?) ?\()?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
  uC =
    /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension).*?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js))(?::(\d+))?(?::(\d+))?\s*$/i,
  cC =
    /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i,
  fC = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+))?@)([\w.-]+)(?::(\d+))?\/(.+)/,
  fs = "?",
  Ay = "An unknown error occurred",
  dC = "0.0.4";
function hC(a) {
  for (let l = 0; l < a.length; l++) a[l] = Math.floor(Math.random() * 256);
  return a;
}
function kt(a) {
  return (a + 256).toString(16).substring(1);
}
function mC() {
  let a = hC(new Array(16));
  return (
    (a[6] = (a[6] & 15) | 64),
    (a[8] = (a[8] & 63) | 128),
    kt(a[0]) +
      kt(a[1]) +
      kt(a[2]) +
      kt(a[3]) +
      "-" +
      kt(a[4]) +
      kt(a[5]) +
      "-" +
      kt(a[6]) +
      kt(a[7]) +
      "-" +
      kt(a[8]) +
      kt(a[9]) +
      "-" +
      kt(a[10]) +
      kt(a[11]) +
      kt(a[12]) +
      kt(a[13]) +
      kt(a[14]) +
      kt(a[15])
  );
}
var gC = [
  [sC, "chrome"],
  [cC, "winjs"],
  [uC, "gecko"],
];
function pC(a) {
  var l, r, o, u;
  if (!a.stack) return null;
  let f = [],
    d =
      (o =
        (r = (l = a.stack).split) == null
          ? void 0
          : r.call(
              l,
              `
`
            )) != null
        ? o
        : [];
  for (let m = 0; m < d.length; ++m) {
    let p = null,
      g = null,
      v = null;
    for (let [A, b] of gC)
      if (((g = A.exec(d[m])), g)) {
        v = b;
        break;
      }
    if (!(!g || !v)) {
      if (v === "chrome")
        p = {
          filename:
            (u = g[2]) != null && u.startsWith("address at ")
              ? g[2].substring(11)
              : g[2],
          function: g[1] || fs,
          lineno: g[3] ? +g[3] : null,
          colno: g[4] ? +g[4] : null,
        };
      else if (v === "winjs")
        p = {
          filename: g[2],
          function: g[1] || fs,
          lineno: +g[3],
          colno: g[4] ? +g[4] : null,
        };
      else if (v === "gecko")
        (m === 0 &&
          !g[5] &&
          a.columnNumber !== void 0 &&
          f.length > 0 &&
          (f[0].column = a.columnNumber + 1),
          (p = {
            filename: g[3],
            function: g[1] || fs,
            lineno: g[4] ? +g[4] : null,
            colno: g[5] ? +g[5] : null,
          }));
      else continue;
      (!p.function && p.lineno && (p.function = fs), f.push(p));
    }
  }
  return f.length ? f.reverse() : null;
}
function yC(a) {
  let l = pC(a);
  return { type: a.name, value: a.message, stacktrace: { frames: l ?? [] } };
}
function vC(a) {
  let l = fC.exec(a),
    r = l ? l.slice(1) : [];
  if (r.length !== 6) throw new Error("Invalid DSN");
  let o = r[5].split("/"),
    u = o.slice(0, -1).join("/");
  return (
    r[0] +
    "://" +
    r[3] +
    (r[4] ? ":" + r[4] : "") +
    (u ? "/" + u : "") +
    "/api/" +
    o.pop() +
    "/envelope/?sentry_version=7&sentry_key=" +
    r[1] +
    (r[2] ? "&sentry_secret=" + r[2] : "")
  );
}
function AC(a, l, r) {
  var o, u;
  let f = un(
    {
      event_id: mC().replaceAll("-", ""),
      platform: "javascript",
      sdk: { name: "@hcaptcha/sentry", version: dC },
      environment: l,
      release: r,
      timestamp: Date.now() / 1e3,
    },
    a.scope.toBody()
  );
  if (a.type === "exception") {
    ((f.message =
      (u = (o = a.error) == null ? void 0 : o.message) != null
        ? u
        : "Unknown error"),
      (f.fingerprint = [f.message]));
    let d = [],
      m = a.error;
    for (
      let p = 0;
      p < 5 && m && (d.push(yC(m)), !(!m.cause || !(m.cause instanceof Error)));
      p++
    )
      m = m.cause;
    f.exception = { values: d.reverse() };
  }
  return (
    a.type === "message" && ((f.message = a.message), (f.level = a.level)),
    f
  );
}
function bC(a) {
  if (a instanceof Error) return a;
  if (typeof a == "string") return new Error(a);
  if (typeof a == "object" && a !== null && !Array.isArray(a)) {
    let r = a,
      { message: o } = r,
      u = tC(r, ["message"]),
      f = new Error(typeof o == "string" ? o : Ay);
    return Object.assign(f, u);
  }
  let l = new Error(Ay);
  return Object.assign(l, { cause: a });
}
function _C(a, l, r) {
  return Sl(this, null, function* () {
    var o, u;
    try {
      if (typeof fetch < "u" && typeof AbortSignal < "u") {
        let f;
        if (r) {
          let p = new AbortController();
          ((f = p.signal), setTimeout(() => p.abort(), r));
        }
        let d = yield fetch(a, eA(un({}, l), { signal: f })),
          m = yield d.text();
        return { status: d.status, body: m };
      }
      return yield new Promise((f, d) => {
        var m, p;
        let g = new XMLHttpRequest();
        if (
          (g.open((m = l?.method) != null ? m : "GET", a),
          (g.onload = () => f({ status: g.status, body: g.responseText })),
          (g.onerror = () => d(new Error("XHR Network Error"))),
          l?.headers)
        )
          for (let [v, A] of Object.entries(l.headers))
            g.setRequestHeader(v, A);
        if (r) {
          let v = setTimeout(() => {
            (g.abort(), d(new Error("Request timed out")));
          }, r);
          g.onloadend = () => {
            clearTimeout(v);
          };
        }
        g.send((p = l?.body) == null ? void 0 : p.toString());
      });
    } catch (f) {
      return {
        status: 0,
        body:
          (u = (o = f?.toString) == null ? void 0 : o.call(f)) != null
            ? u
            : "Unknown error",
      };
    }
  });
}
var Zt,
  Kf =
    ((Zt = class {
      constructor(a) {
        (Tt(this, "apiURL"),
          Tt(this, "dsn"),
          Tt(this, "environment"),
          Tt(this, "release"),
          Tt(this, "sampleRate"),
          Tt(this, "debug"),
          Tt(this, "_scope"),
          Tt(this, "shouldBuffer", !1),
          Tt(this, "bufferlimit", 20),
          Tt(this, "buffer", []));
        var l, r, o, u, f;
        ((this.environment = a.environment),
          (this.release = a.release),
          (this.sampleRate = (l = a.sampleRate) != null ? l : 1),
          (this.debug = (r = a.debug) != null ? r : !1),
          (this._scope = (o = a.scope) != null ? o : new oC()),
          (this.apiURL = vC(a.dsn)),
          (this.dsn = a.dsn),
          (this.shouldBuffer = (u = a.buffer) != null ? u : !1),
          (this.bufferlimit = (f = a.bufferLimit) != null ? f : 20));
      }
      static init(a) {
        Zt._instance || (Zt._instance = new Zt(a));
      }
      static get instance() {
        if (!Zt._instance) throw new Error("Sentry has not been initialized");
        return Zt._instance;
      }
      log(...a) {
        this.debug && console.log(...a);
      }
      get scope() {
        return this._scope;
      }
      static get scope() {
        return Zt.instance.scope;
      }
      withScope(a) {
        let l = this._scope.child();
        a(l);
      }
      static withScope(a) {
        Zt.instance.withScope(a);
      }
      captureException(a, l) {
        this.captureEvent({
          type: "exception",
          level: "error",
          error: bC(a),
          scope: l ?? this._scope,
        });
      }
      static captureException(a, l) {
        Zt.instance.captureException(a, l);
      }
      captureMessage(a, l = "info", r) {
        this.captureEvent({
          type: "message",
          level: l,
          message: a,
          scope: r ?? this._scope,
        });
      }
      static captureMessage(a, l = "info", r) {
        Zt.instance.captureMessage(a, l, r);
      }
      captureEvent(a) {
        if (Math.random() >= this.sampleRate) {
          this.log("Dropped event due to sample rate");
          return;
        }
        if (this.shouldBuffer) {
          if (this.buffer.length >= this.bufferlimit) return;
          this.buffer.push(a);
        } else this.sendEvent(a);
      }
      sendEvent(a, l = 5e3) {
        return Sl(this, null, function* () {
          try {
            this.log("Sending sentry event", a);
            let r = AC(a, this.environment, this.release),
              o = { event_id: r.event_id, dsn: this.dsn },
              u = { type: "event" },
              f =
                JSON.stringify(o) +
                `
` +
                JSON.stringify(u) +
                `
` +
                JSON.stringify(r),
              d = yield _C(
                this.apiURL,
                {
                  method: "POST",
                  headers: { "Content-Type": "application/x-sentry-envelope" },
                  body: f,
                },
                l
              );
            (this.log("Sentry response", d.status),
              d.status !== 200 &&
                (console.log(d.body),
                console.error("Failed to send event to Sentry", d)));
          } catch (r) {
            console.error("Failed to send event", r);
          }
        });
      }
      flush(a = 5e3) {
        return Sl(this, null, function* () {
          try {
            this.log("Flushing sentry events", this.buffer.length);
            let l = this.buffer
              .splice(0, this.buffer.length)
              .map((r) => this.sendEvent(r, a));
            (yield Promise.all(l), this.log("Flushed all events"));
          } catch (l) {
            console.error("Failed to flush events", l);
          }
        });
      }
      static flush(a = 5e3) {
        return Zt.instance.flush(a);
      }
      static reset() {
        Zt._instance = void 0;
      }
    }),
    Tt(Zt, "_instance"),
    Zt),
  xC = "https://d233059272824702afc8c43834c4912d@sentry.hcaptcha.com/6",
  EC = "2.2.0",
  SC = "production";
function CC(a = !0) {
  if (!a) return by();
  Kf.init({ dsn: xC, release: EC, environment: SC });
  let l = Kf.scope;
  return (iC(l), by(l));
}
function by(a = null) {
  return {
    addBreadcrumb: (l) => {
      a && a.addBreadcrumb(l);
    },
    captureRequest: (l) => {
      a && a.setRequest(l);
    },
    captureException: (l) => {
      a && Kf.captureException(l, a);
    },
  };
}
function wC(
  {
    scriptLocation: a,
    query: l,
    loadAsync: r = !0,
    crossOrigin: o = "anonymous",
    apihost: u = "https://js.hcaptcha.com",
    cleanup: f = !1,
    secureApi: d = !1,
    scriptSource: m = "",
  } = {},
  p
) {
  let g = nA(a),
    v = tA(g);
  return new Promise((A, b) => {
    let _ = v.document.createElement("script");
    ((_.id = nC),
      m
        ? (_.src = `${m}?onload=${_s}`)
        : d
          ? (_.src = `${u}/1/secure-api.js?onload=${_s}`)
          : (_.src = `${u}/1/api.js?onload=${_s}`),
      (_.crossOrigin = o),
      (_.async = r));
    let S = (w, Q) => {
      try {
        (!d && f && g.removeChild(_), Q(w));
      } catch (F) {
        b(F);
      }
    };
    ((_.onload = (w) => S(w, A)),
      (_.onerror = (w) => {
        (p && p(_.src), S(w, b));
      }),
      (_.src += l !== "" ? `&${l}` : ""),
      g.appendChild(_));
  });
}
var ds = [];
function RC(a = { cleanup: !1 }, l) {
  try {
    l.addBreadcrumb({
      category: Ci,
      message: "hCaptcha loader params",
      data: a,
    });
    let r = nA(a.scriptLocation),
      o = tA(r),
      u = ds.find(({ scope: d }) => d === o.window);
    if (u)
      return (
        l.addBreadcrumb({ category: Ci, message: "hCaptcha already loaded" }),
        u.promise
      );
    let f = new Promise((d, m) =>
      Sl(this, null, function* () {
        try {
          o.window[_s] = () => {
            (l.addBreadcrumb({
              category: Ci,
              message: "hCaptcha script called onload function",
            }),
              d(o.window.hcaptcha));
          };
          let p = aC({
            custom: a.custom,
            render: a.render,
            sentry: a.sentry,
            assethost: a.assethost,
            imghost: a.imghost,
            reportapi: a.reportapi,
            endpoint: a.endpoint,
            host: a.host,
            recaptchacompat: a.recaptchacompat,
            hl: a.hl,
            uj: a.uj,
          });
          (yield wC(un({ query: p }, a), (g) => {
            l.captureRequest({ url: g, method: "GET" });
          }),
            l.addBreadcrumb({
              category: Ci,
              message: "hCaptcha loaded",
              data: u,
            }));
        } catch {
          l.addBreadcrumb({ category: Ci, message: "hCaptcha failed to load" });
          let g = ds.findIndex((v) => v.scope === o.window);
          (g !== -1 && ds.splice(g, 1), m(new Error(vy)));
        }
      })
    );
    return (ds.push({ promise: f, scope: o.window }), f);
  } catch (r) {
    return (l.captureException(r), Promise.reject(new Error(vy)));
  }
}
function iA(a, l, r = 0) {
  return Sl(this, null, function* () {
    let o = r < 2 ? "Retry loading hCaptcha Api" : "Exceeded maximum retries";
    try {
      return yield RC(a, l);
    } catch (u) {
      return (
        l.addBreadcrumb({ category: Ci, message: o }),
        r >= 2
          ? (l.captureException(u), Promise.reject(u))
          : ((r += 1), iA(a, l, r))
      );
    }
  });
}
function TC() {
  return Sl(this, arguments, function* (a = {}) {
    let l = CC(a.sentry);
    return yield iA(a, l);
  });
}
function _y(a) {
  var l = (a && a.ownerDocument) || document,
    r = l.defaultView || l.parentWindow || window;
  return { document: l, window: r };
}
function xy(a) {
  return a || document.head;
}
var Lw = (function (a) {
    PS(l, a);
    function l(o) {
      var u;
      return (
        (u = a.call(this, o) || this),
        (u._hcaptcha = void 0),
        (u.renderCaptcha = u.renderCaptcha.bind(Rn(u))),
        (u.resetCaptcha = u.resetCaptcha.bind(Rn(u))),
        (u.removeCaptcha = u.removeCaptcha.bind(Rn(u))),
        (u.isReady = u.isReady.bind(Rn(u))),
        (u._onReady = null),
        (u.loadCaptcha = u.loadCaptcha.bind(Rn(u))),
        (u.handleOnLoad = u.handleOnLoad.bind(Rn(u))),
        (u.handleSubmit = u.handleSubmit.bind(Rn(u))),
        (u.handleExpire = u.handleExpire.bind(Rn(u))),
        (u.handleError = u.handleError.bind(Rn(u))),
        (u.handleOpen = u.handleOpen.bind(Rn(u))),
        (u.handleClose = u.handleClose.bind(Rn(u))),
        (u.handleChallengeExpired = u.handleChallengeExpired.bind(Rn(u))),
        (u.ref = T.createRef()),
        (u.apiScriptRequested = !1),
        (u.sentryHub = null),
        (u.captchaId = ""),
        (u._pendingExecute = null),
        (u.state = { isApiReady: !1, isRemoved: !1, elementId: o.id }),
        u
      );
    }
    var r = l.prototype;
    return (
      (r.componentDidMount = function () {
        var u = this,
          f = xy(this.props.scriptLocation),
          d = _y(f);
        this._hcaptcha = d.window.hcaptcha || void 0;
        var m = typeof this._hcaptcha < "u";
        if (m) {
          this.setState({ isApiReady: !0 }, function () {
            u.renderCaptcha();
          });
          return;
        }
        this.loadCaptcha();
      }),
      (r.componentWillUnmount = function () {
        var u = this._hcaptcha,
          f = this.captchaId;
        (this._cancelPendingExecute("react-component-unmounted"),
          this.isReady() && (u.reset(f), u.remove(f)));
      }),
      (r.shouldComponentUpdate = function (u, f) {
        return !(
          this.state.isApiReady !== f.isApiReady ||
          this.state.isRemoved !== f.isRemoved
        );
      }),
      (r.componentDidUpdate = function (u) {
        var f = this,
          d = [
            "sitekey",
            "size",
            "theme",
            "tabindex",
            "languageOverride",
            "endpoint",
          ],
          m = d.every(function (p) {
            return u[p] === f.props[p];
          });
        m ||
          this.removeCaptcha(function () {
            f.renderCaptcha();
          });
      }),
      (r.loadCaptcha = function () {
        if (!this.apiScriptRequested) {
          var u = this.props,
            f = u.apihost,
            d = u.assethost,
            m = u.endpoint,
            p = u.host,
            g = u.imghost,
            v = u.languageOverride,
            A = u.reCaptchaCompat,
            b = u.reportapi,
            _ = u.sentry,
            S = u.custom,
            w = u.loadAsync,
            Q = u.scriptLocation,
            F = u.scriptSource,
            I = u.secureApi,
            N = u.cleanup,
            j = N === void 0 ? !0 : N,
            M = u.userJourneys,
            Y = {
              render: "explicit",
              apihost: f,
              assethost: d,
              endpoint: m,
              hl: v,
              host: p,
              imghost: g,
              recaptchacompat: A === !1 ? "off" : null,
              reportapi: b,
              sentry: _,
              custom: S,
              loadAsync: w,
              scriptLocation: Q,
              scriptSource: F,
              secureApi: I,
              cleanup: j,
              uj: M !== void 0 ? M : !1,
            };
          (TC(Y)
            .then(this.handleOnLoad, this.handleError)
            .catch(this.handleError),
            (this.apiScriptRequested = !0));
        }
      }),
      (r.renderCaptcha = function (u) {
        var f = this,
          d = this.props.onReady,
          m = this.state.isApiReady,
          p = this.captchaId;
        if (!(!m || p)) {
          var g = Object.assign(
              {
                "open-callback": this.handleOpen,
                "close-callback": this.handleClose,
                "error-callback": this.handleError,
                "chalexpired-callback": this.handleChallengeExpired,
                "expired-callback": this.handleExpire,
                callback: this.handleSubmit,
              },
              this.props,
              {
                hl: this.props.hl || this.props.languageOverride,
                languageOverride: void 0,
              }
            ),
            v = this._hcaptcha,
            A = v.render(this.ref.current, g);
          ((this.captchaId = A),
            this.setState({ isRemoved: !1 }, function () {
              (u && u(), d && d(), f._onReady && f._onReady(A));
            }));
        }
      }),
      (r.resetCaptcha = function () {
        var u = this._hcaptcha,
          f = this.captchaId;
        this.isReady() &&
          (u.reset(f), this._cancelPendingExecute("hcaptcha-reset"));
      }),
      (r.removeCaptcha = function (u) {
        var f = this,
          d = this._hcaptcha,
          m = this.captchaId;
        (this._cancelPendingExecute("hcaptcha-removed"),
          this.isReady() &&
            this.setState({ isRemoved: !0 }, function () {
              ((f.captchaId = ""), d.remove(m), u && u());
            }));
      }),
      (r.handleOnLoad = function () {
        var u = this;
        this.setState({ isApiReady: !0 }, function () {
          var f = xy(u.props.scriptLocation),
            d = _y(f);
          ((u._hcaptcha = d.window.hcaptcha),
            u.renderCaptcha(function () {
              var m = u.props.onLoad;
              m && m();
            }));
        });
      }),
      (r.handleSubmit = function (u) {
        var f = this.props.onVerify,
          d = this.state.isRemoved,
          m = this._hcaptcha,
          p = this.captchaId;
        if (!(typeof m > "u" || d)) {
          var g = m.getResponse(p),
            v = m.getRespKey(p);
          f && f(g, v);
        }
      }),
      (r.handleExpire = function () {
        var u = this.props.onExpire,
          f = this._hcaptcha,
          d = this.captchaId;
        this.isReady() && (f.reset(d), u && u());
      }),
      (r.handleError = function (u) {
        var f = this.props.onError,
          d = this._hcaptcha,
          m = this.captchaId;
        (this.isReady() && d.reset(m), f && f(u));
      }),
      (r.isReady = function () {
        var u = this.state,
          f = u.isApiReady,
          d = u.isRemoved;
        return f && !d;
      }),
      (r._cancelPendingExecute = function (u) {
        if (this._pendingExecute) {
          var f = this._pendingExecute;
          this._pendingExecute = null;
          var d = new Error(u);
          f.reject(d);
        }
      }),
      (r.handleOpen = function () {
        !this.isReady() || !this.props.onOpen || this.props.onOpen();
      }),
      (r.handleClose = function () {
        !this.isReady() || !this.props.onClose || this.props.onClose();
      }),
      (r.handleChallengeExpired = function () {
        !this.isReady() ||
          !this.props.onChalExpired ||
          this.props.onChalExpired();
      }),
      (r.execute = function (u) {
        var f = this;
        (u === void 0 && (u = null), (u = typeof u == "object" ? u : null));
        try {
          var d = this._hcaptcha,
            m = this.captchaId;
          if (
            (u &&
              u.async &&
              this._pendingExecute &&
              this._cancelPendingExecute("hcaptcha-execute-replaced"),
            !this.isReady())
          )
            return u && u.async
              ? new Promise(function (g, v) {
                  ((f._pendingExecute = { resolve: g, reject: v }),
                    (f._onReady = function (A) {
                      if (f._pendingExecute)
                        try {
                          var b = d.execute(A, u);
                          b && typeof b.then == "function"
                            ? b
                                .then(function (_) {
                                  ((f._pendingExecute = null), g(_));
                                })
                                .catch(function (_) {
                                  ((f._pendingExecute = null), v(_));
                                })
                            : ((f._pendingExecute = null),
                              v(new Error("hcaptcha-execute-no-promise")));
                        } catch (_) {
                          ((f._pendingExecute = null), v(_));
                        }
                    }));
                })
              : ((this._onReady = function (g) {
                  d.execute(g, u);
                }),
                null);
          var p = d.execute(m, u);
          return u && u.async && p && typeof p.then == "function"
            ? new Promise(function (g, v) {
                ((f._pendingExecute = { resolve: g, reject: v }),
                  p
                    .then(function (A) {
                      ((f._pendingExecute = null), g(A));
                    })
                    .catch(function (A) {
                      ((f._pendingExecute = null), v(A));
                    }));
              })
            : p;
        } catch (g) {
          return u && u.async ? Promise.reject(g) : null;
        }
      }),
      (r.close = function () {
        var u = this._hcaptcha,
          f = this.captchaId;
        if ((this._cancelPendingExecute("hcaptcha-closed"), !!this.isReady()))
          return u.close(f);
      }),
      (r.setData = function (u) {
        var f = this._hcaptcha,
          d = this.captchaId;
        this.isReady() &&
          (u && typeof u != "object" && (u = null), f.setData(d, u));
      }),
      (r.getResponse = function () {
        var u = this._hcaptcha;
        return u.getResponse(this.captchaId);
      }),
      (r.getRespKey = function () {
        var u = this._hcaptcha;
        return u.getRespKey(this.captchaId);
      }),
      (r.render = function () {
        var u = this.state.elementId;
        return T.createElement("div", { ref: this.ref, id: u });
      }),
      l
    );
  })(T.Component),
  bf = { exports: {} },
  _f,
  Ey;
function OC() {
  if (Ey) return _f;
  Ey = 1;
  var a = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return ((_f = a), _f);
}
var xf, Sy;
function zC() {
  if (Sy) return xf;
  Sy = 1;
  var a = OC();
  function l() {}
  function r() {}
  return (
    (r.resetWarningCache = l),
    (xf = function () {
      function o(d, m, p, g, v, A) {
        if (A !== a) {
          var b = new Error(
            "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
          );
          throw ((b.name = "Invariant Violation"), b);
        }
      }
      o.isRequired = o;
      function u() {
        return o;
      }
      var f = {
        array: o,
        bigint: o,
        bool: o,
        func: o,
        number: o,
        object: o,
        string: o,
        symbol: o,
        any: o,
        arrayOf: u,
        element: o,
        elementType: o,
        instanceOf: u,
        node: o,
        objectOf: u,
        oneOf: u,
        oneOfType: u,
        shape: u,
        exact: u,
        checkPropTypes: r,
        resetWarningCache: l,
      };
      return ((f.PropTypes = f), f);
    }),
    xf
  );
}
var Cy;
function MC() {
  return (Cy || ((Cy = 1), (bf.exports = zC()())), bf.exports);
}
var DC = MC();
const et = Ns(DC);
var BC = [
  "sitekey",
  "onChange",
  "theme",
  "type",
  "tabindex",
  "onExpired",
  "onErrored",
  "size",
  "stoken",
  "grecaptcha",
  "badge",
  "hl",
  "isolated",
];
function Xf() {
  return (
    (Xf = Object.assign
      ? Object.assign.bind()
      : function (a) {
          for (var l = 1; l < arguments.length; l++) {
            var r = arguments[l];
            for (var o in r)
              Object.prototype.hasOwnProperty.call(r, o) && (a[o] = r[o]);
          }
          return a;
        }),
    Xf.apply(this, arguments)
  );
}
function NC(a, l) {
  if (a == null) return {};
  var r = {},
    o = Object.keys(a),
    u,
    f;
  for (f = 0; f < o.length; f++)
    ((u = o[f]), !(l.indexOf(u) >= 0) && (r[u] = a[u]));
  return r;
}
function hs(a) {
  if (a === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return a;
}
function kC(a, l) {
  ((a.prototype = Object.create(l.prototype)),
    (a.prototype.constructor = a),
    Ff(a, l));
}
function Ff(a, l) {
  return (
    (Ff = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (o, u) {
          return ((o.__proto__ = u), o);
        }),
    Ff(a, l)
  );
}
var Fs = (function (a) {
  kC(l, a);
  function l() {
    var o;
    return (
      (o = a.call(this) || this),
      (o.handleExpired = o.handleExpired.bind(hs(o))),
      (o.handleErrored = o.handleErrored.bind(hs(o))),
      (o.handleChange = o.handleChange.bind(hs(o))),
      (o.handleRecaptchaRef = o.handleRecaptchaRef.bind(hs(o))),
      o
    );
  }
  var r = l.prototype;
  return (
    (r.getCaptchaFunction = function (u) {
      return this.props.grecaptcha
        ? this.props.grecaptcha.enterprise
          ? this.props.grecaptcha.enterprise[u]
          : this.props.grecaptcha[u]
        : null;
    }),
    (r.getValue = function () {
      var u = this.getCaptchaFunction("getResponse");
      return u && this._widgetId !== void 0 ? u(this._widgetId) : null;
    }),
    (r.getWidgetId = function () {
      return this.props.grecaptcha && this._widgetId !== void 0
        ? this._widgetId
        : null;
    }),
    (r.execute = function () {
      var u = this.getCaptchaFunction("execute");
      if (u && this._widgetId !== void 0) return u(this._widgetId);
      this._executeRequested = !0;
    }),
    (r.executeAsync = function () {
      var u = this;
      return new Promise(function (f, d) {
        ((u.executionResolve = f), (u.executionReject = d), u.execute());
      });
    }),
    (r.reset = function () {
      var u = this.getCaptchaFunction("reset");
      u && this._widgetId !== void 0 && u(this._widgetId);
    }),
    (r.forceReset = function () {
      var u = this.getCaptchaFunction("reset");
      u && u();
    }),
    (r.handleExpired = function () {
      this.props.onExpired ? this.props.onExpired() : this.handleChange(null);
    }),
    (r.handleErrored = function () {
      (this.props.onErrored && this.props.onErrored(),
        this.executionReject &&
          (this.executionReject(),
          delete this.executionResolve,
          delete this.executionReject));
    }),
    (r.handleChange = function (u) {
      (this.props.onChange && this.props.onChange(u),
        this.executionResolve &&
          (this.executionResolve(u),
          delete this.executionReject,
          delete this.executionResolve));
    }),
    (r.explicitRender = function () {
      var u = this.getCaptchaFunction("render");
      if (u && this._widgetId === void 0) {
        var f = document.createElement("div");
        ((this._widgetId = u(f, {
          sitekey: this.props.sitekey,
          callback: this.handleChange,
          theme: this.props.theme,
          type: this.props.type,
          tabindex: this.props.tabindex,
          "expired-callback": this.handleExpired,
          "error-callback": this.handleErrored,
          size: this.props.size,
          stoken: this.props.stoken,
          hl: this.props.hl,
          badge: this.props.badge,
          isolated: this.props.isolated,
        })),
          this.captcha.appendChild(f));
      }
      this._executeRequested &&
        this.props.grecaptcha &&
        this._widgetId !== void 0 &&
        ((this._executeRequested = !1), this.execute());
    }),
    (r.componentDidMount = function () {
      this.explicitRender();
    }),
    (r.componentDidUpdate = function () {
      this.explicitRender();
    }),
    (r.handleRecaptchaRef = function (u) {
      this.captcha = u;
    }),
    (r.render = function () {
      var u = this.props;
      (u.sitekey,
        u.onChange,
        u.theme,
        u.type,
        u.tabindex,
        u.onExpired,
        u.onErrored,
        u.size,
        u.stoken,
        u.grecaptcha,
        u.badge,
        u.hl,
        u.isolated);
      var f = NC(u, BC);
      return T.createElement(
        "div",
        Xf({}, f, { ref: this.handleRecaptchaRef })
      );
    }),
    l
  );
})(T.Component);
Fs.displayName = "ReCAPTCHA";
Fs.propTypes = {
  sitekey: et.string.isRequired,
  onChange: et.func,
  grecaptcha: et.object,
  theme: et.oneOf(["dark", "light"]),
  type: et.oneOf(["image", "audio"]),
  tabindex: et.number,
  onExpired: et.func,
  onErrored: et.func,
  size: et.oneOf(["compact", "normal", "invisible"]),
  stoken: et.string,
  hl: et.string,
  badge: et.oneOf(["bottomright", "bottomleft", "inline"]),
  isolated: et.bool,
};
Fs.defaultProps = {
  onChange: function () {},
  theme: "light",
  type: "image",
  tabindex: 0,
  size: "normal",
  badge: "bottomright",
};
var Ef = { exports: {} },
  Ke = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var wy;
function LC() {
  if (wy) return Ke;
  wy = 1;
  var a = typeof Symbol == "function" && Symbol.for,
    l = a ? Symbol.for("react.element") : 60103,
    r = a ? Symbol.for("react.portal") : 60106,
    o = a ? Symbol.for("react.fragment") : 60107,
    u = a ? Symbol.for("react.strict_mode") : 60108,
    f = a ? Symbol.for("react.profiler") : 60114,
    d = a ? Symbol.for("react.provider") : 60109,
    m = a ? Symbol.for("react.context") : 60110,
    p = a ? Symbol.for("react.async_mode") : 60111,
    g = a ? Symbol.for("react.concurrent_mode") : 60111,
    v = a ? Symbol.for("react.forward_ref") : 60112,
    A = a ? Symbol.for("react.suspense") : 60113,
    b = a ? Symbol.for("react.suspense_list") : 60120,
    _ = a ? Symbol.for("react.memo") : 60115,
    S = a ? Symbol.for("react.lazy") : 60116,
    w = a ? Symbol.for("react.block") : 60121,
    Q = a ? Symbol.for("react.fundamental") : 60117,
    F = a ? Symbol.for("react.responder") : 60118,
    I = a ? Symbol.for("react.scope") : 60119;
  function N(M) {
    if (typeof M == "object" && M !== null) {
      var Y = M.$$typeof;
      switch (Y) {
        case l:
          switch (((M = M.type), M)) {
            case p:
            case g:
            case o:
            case f:
            case u:
            case A:
              return M;
            default:
              switch (((M = M && M.$$typeof), M)) {
                case m:
                case v:
                case S:
                case _:
                case d:
                  return M;
                default:
                  return Y;
              }
          }
        case r:
          return Y;
      }
    }
  }
  function j(M) {
    return N(M) === g;
  }
  return (
    (Ke.AsyncMode = p),
    (Ke.ConcurrentMode = g),
    (Ke.ContextConsumer = m),
    (Ke.ContextProvider = d),
    (Ke.Element = l),
    (Ke.ForwardRef = v),
    (Ke.Fragment = o),
    (Ke.Lazy = S),
    (Ke.Memo = _),
    (Ke.Portal = r),
    (Ke.Profiler = f),
    (Ke.StrictMode = u),
    (Ke.Suspense = A),
    (Ke.isAsyncMode = function (M) {
      return j(M) || N(M) === p;
    }),
    (Ke.isConcurrentMode = j),
    (Ke.isContextConsumer = function (M) {
      return N(M) === m;
    }),
    (Ke.isContextProvider = function (M) {
      return N(M) === d;
    }),
    (Ke.isElement = function (M) {
      return typeof M == "object" && M !== null && M.$$typeof === l;
    }),
    (Ke.isForwardRef = function (M) {
      return N(M) === v;
    }),
    (Ke.isFragment = function (M) {
      return N(M) === o;
    }),
    (Ke.isLazy = function (M) {
      return N(M) === S;
    }),
    (Ke.isMemo = function (M) {
      return N(M) === _;
    }),
    (Ke.isPortal = function (M) {
      return N(M) === r;
    }),
    (Ke.isProfiler = function (M) {
      return N(M) === f;
    }),
    (Ke.isStrictMode = function (M) {
      return N(M) === u;
    }),
    (Ke.isSuspense = function (M) {
      return N(M) === A;
    }),
    (Ke.isValidElementType = function (M) {
      return (
        typeof M == "string" ||
        typeof M == "function" ||
        M === o ||
        M === g ||
        M === f ||
        M === u ||
        M === A ||
        M === b ||
        (typeof M == "object" &&
          M !== null &&
          (M.$$typeof === S ||
            M.$$typeof === _ ||
            M.$$typeof === d ||
            M.$$typeof === m ||
            M.$$typeof === v ||
            M.$$typeof === Q ||
            M.$$typeof === F ||
            M.$$typeof === I ||
            M.$$typeof === w))
      );
    }),
    (Ke.typeOf = N),
    Ke
  );
}
var Ry;
function UC() {
  return (Ry || ((Ry = 1), (Ef.exports = LC())), Ef.exports);
}
var Sf, Ty;
function VC() {
  if (Ty) return Sf;
  Ty = 1;
  var a = UC(),
    l = {
      childContextTypes: !0,
      contextType: !0,
      contextTypes: !0,
      defaultProps: !0,
      displayName: !0,
      getDefaultProps: !0,
      getDerivedStateFromError: !0,
      getDerivedStateFromProps: !0,
      mixins: !0,
      propTypes: !0,
      type: !0,
    },
    r = {
      name: !0,
      length: !0,
      prototype: !0,
      caller: !0,
      callee: !0,
      arguments: !0,
      arity: !0,
    },
    o = {
      $$typeof: !0,
      render: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
    },
    u = {
      $$typeof: !0,
      compare: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
      type: !0,
    },
    f = {};
  ((f[a.ForwardRef] = o), (f[a.Memo] = u));
  function d(S) {
    return a.isMemo(S) ? u : f[S.$$typeof] || l;
  }
  var m = Object.defineProperty,
    p = Object.getOwnPropertyNames,
    g = Object.getOwnPropertySymbols,
    v = Object.getOwnPropertyDescriptor,
    A = Object.getPrototypeOf,
    b = Object.prototype;
  function _(S, w, Q) {
    if (typeof w != "string") {
      if (b) {
        var F = A(w);
        F && F !== b && _(S, F, Q);
      }
      var I = p(w);
      g && (I = I.concat(g(w)));
      for (var N = d(S), j = d(w), M = 0; M < I.length; ++M) {
        var Y = I[M];
        if (!r[Y] && !(Q && Q[Y]) && !(j && j[Y]) && !(N && N[Y])) {
          var K = v(w, Y);
          try {
            m(S, Y, K);
          } catch {}
        }
      }
    }
    return S;
  }
  return ((Sf = _), Sf);
}
var QC = VC();
const HC = Ns(QC);
function Zf() {
  return (
    (Zf =
      Object.assign ||
      function (a) {
        for (var l = 1; l < arguments.length; l++) {
          var r = arguments[l];
          for (var o in r)
            Object.prototype.hasOwnProperty.call(r, o) && (a[o] = r[o]);
        }
        return a;
      }),
    Zf.apply(this, arguments)
  );
}
function jC(a, l) {
  if (a == null) return {};
  var r = {},
    o = Object.keys(a),
    u,
    f;
  for (f = 0; f < o.length; f++)
    ((u = o[f]), !(l.indexOf(u) >= 0) && (r[u] = a[u]));
  return r;
}
function IC(a, l) {
  ((a.prototype = Object.create(l.prototype)),
    (a.prototype.constructor = a),
    (a.__proto__ = l));
}
var Un = {},
  GC = 0;
function lA(a, l) {
  return (
    (l = l || {}),
    function (o) {
      var u = o.displayName || o.name || "Component",
        f = (function (m) {
          IC(p, m);
          function p(v, A) {
            var b;
            return (
              (b = m.call(this, v, A) || this),
              (b.state = {}),
              (b.__scriptURL = ""),
              b
            );
          }
          var g = p.prototype;
          return (
            (g.asyncScriptLoaderGetScriptLoaderID = function () {
              return (
                this.__scriptLoaderID ||
                  (this.__scriptLoaderID = "async-script-loader-" + GC++),
                this.__scriptLoaderID
              );
            }),
            (g.setupScriptURL = function () {
              return (
                (this.__scriptURL = typeof a == "function" ? a() : a),
                this.__scriptURL
              );
            }),
            (g.asyncScriptLoaderHandleLoad = function (A) {
              var b = this;
              this.setState(A, function () {
                return (
                  b.props.asyncScriptOnLoad &&
                  b.props.asyncScriptOnLoad(b.state)
                );
              });
            }),
            (g.asyncScriptLoaderTriggerOnScriptLoaded = function () {
              var A = Un[this.__scriptURL];
              if (!A || !A.loaded) throw new Error("Script is not loaded.");
              for (var b in A.observers) A.observers[b](A);
              delete window[l.callbackName];
            }),
            (g.componentDidMount = function () {
              var A = this,
                b = this.setupScriptURL(),
                _ = this.asyncScriptLoaderGetScriptLoaderID(),
                S = l,
                w = S.globalName,
                Q = S.callbackName,
                F = S.scriptId;
              if (
                (w &&
                  typeof window[w] < "u" &&
                  (Un[b] = { loaded: !0, observers: {} }),
                Un[b])
              ) {
                var I = Un[b];
                if (I && (I.loaded || I.errored)) {
                  this.asyncScriptLoaderHandleLoad(I);
                  return;
                }
                I.observers[_] = function (K) {
                  return A.asyncScriptLoaderHandleLoad(K);
                };
                return;
              }
              var N = {};
              ((N[_] = function (K) {
                return A.asyncScriptLoaderHandleLoad(K);
              }),
                (Un[b] = { loaded: !1, observers: N }));
              var j = document.createElement("script");
              ((j.src = b), (j.async = !0));
              for (var M in l.attributes) j.setAttribute(M, l.attributes[M]);
              F && (j.id = F);
              var Y = function (J) {
                if (Un[b]) {
                  var he = Un[b],
                    pe = he.observers;
                  for (var fe in pe) J(pe[fe]) && delete pe[fe];
                }
              };
              (Q &&
                typeof window < "u" &&
                (window[Q] = function () {
                  return A.asyncScriptLoaderTriggerOnScriptLoaded();
                }),
                (j.onload = function () {
                  var K = Un[b];
                  K &&
                    ((K.loaded = !0),
                    Y(function (J) {
                      return Q ? !1 : (J(K), !0);
                    }));
                }),
                (j.onerror = function () {
                  var K = Un[b];
                  K &&
                    ((K.errored = !0),
                    Y(function (J) {
                      return (J(K), !0);
                    }));
                }),
                document.body.appendChild(j));
            }),
            (g.componentWillUnmount = function () {
              var A = this.__scriptURL;
              if (l.removeOnUnmount === !0)
                for (
                  var b = document.getElementsByTagName("script"), _ = 0;
                  _ < b.length;
                  _ += 1
                )
                  b[_].src.indexOf(A) > -1 &&
                    b[_].parentNode &&
                    b[_].parentNode.removeChild(b[_]);
              var S = Un[A];
              S &&
                (delete S.observers[this.asyncScriptLoaderGetScriptLoaderID()],
                l.removeOnUnmount === !0 && delete Un[A]);
            }),
            (g.render = function () {
              var A = l.globalName,
                b = this.props;
              b.asyncScriptOnLoad;
              var _ = b.forwardedRef,
                S = jC(b, ["asyncScriptOnLoad", "forwardedRef"]);
              return (
                A &&
                  typeof window < "u" &&
                  (S[A] = typeof window[A] < "u" ? window[A] : void 0),
                (S.ref = _),
                T.createElement(o, S)
              );
            }),
            p
          );
        })(T.Component),
        d = T.forwardRef(function (m, p) {
          return T.createElement(f, Zf({}, m, { forwardedRef: p }));
        });
      return (
        (d.displayName = "AsyncScriptLoader(" + u + ")"),
        (d.propTypes = { asyncScriptOnLoad: et.func }),
        HC(d, o)
      );
    }
  );
}
var Jf = "onloadcallback",
  YC = "grecaptcha";
function Pf() {
  return (typeof window < "u" && window.recaptchaOptions) || {};
}
function qC() {
  var a = Pf(),
    l = a.useRecaptchaNet ? "recaptcha.net" : "www.google.com";
  return a.enterprise
    ? "https://" +
        l +
        "/recaptcha/enterprise.js?onload=" +
        Jf +
        "&render=explicit"
    : "https://" + l + "/recaptcha/api.js?onload=" + Jf + "&render=explicit";
}
const Uw = lA(qC, {
  callbackName: Jf,
  globalName: YC,
  attributes: Pf().nonce ? { nonce: Pf().nonce } : {},
})(Fs);
function $f() {
  return (
    ($f =
      Object.assign ||
      function (a) {
        for (var l = 1; l < arguments.length; l++) {
          var r = arguments[l];
          for (var o in r)
            Object.prototype.hasOwnProperty.call(r, o) && (a[o] = r[o]);
        }
        return a;
      }),
    $f.apply(this, arguments)
  );
}
function KC(a, l) {
  if (a == null) return {};
  var r = {},
    o = Object.keys(a),
    u,
    f;
  for (f = 0; f < o.length; f++)
    ((u = o[f]), !(l.indexOf(u) >= 0) && (r[u] = a[u]));
  return r;
}
function ms(a) {
  if (a === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return a;
}
function XC(a, l) {
  ((a.prototype = Object.create(l.prototype)),
    (a.prototype.constructor = a),
    (a.__proto__ = l));
}
var Zs = (function (a) {
  XC(l, a);
  function l() {
    var o;
    return (
      (o = a.call(this) || this),
      (o.handleExpired = o.handleExpired.bind(ms(o))),
      (o.handleErrored = o.handleErrored.bind(ms(o))),
      (o.handleChange = o.handleChange.bind(ms(o))),
      (o.handleRecaptchaRef = o.handleRecaptchaRef.bind(ms(o))),
      o
    );
  }
  var r = l.prototype;
  return (
    (r.getValue = function () {
      return this.props.grecaptcha && this._widgetId !== void 0
        ? this.props.grecaptcha.enterprise.getResponse(this._widgetId)
        : null;
    }),
    (r.getWidgetId = function () {
      return this.props.grecaptcha && this._widgetId !== void 0
        ? this._widgetId
        : null;
    }),
    (r.execute = function () {
      var u = this.props.grecaptcha;
      if (u && this._widgetId !== void 0)
        return u.enterprise.execute(this._widgetId);
      this._executeRequested = !0;
    }),
    (r.executeAsync = function () {
      var u = this;
      return new Promise(function (f, d) {
        ((u.executionResolve = f), (u.executionReject = d), u.execute());
      });
    }),
    (r.reset = function () {
      this.props.grecaptcha &&
        this._widgetId !== void 0 &&
        this.props.grecaptcha.enterprise.reset(this._widgetId);
    }),
    (r.forceReset = function () {
      this.props.grecaptcha && this.props.grecaptcha.enterprise.reset();
    }),
    (r.handleExpired = function () {
      this.props.onExpired ? this.props.onExpired() : this.handleChange(null);
    }),
    (r.handleErrored = function () {
      (this.props.onErrored && this.props.onErrored(),
        this.executionReject &&
          (this.executionReject(),
          delete this.executionResolve,
          delete this.executionReject));
    }),
    (r.handleChange = function (u) {
      (this.props.onChange && this.props.onChange(u),
        this.executionResolve &&
          (this.executionResolve(u),
          delete this.executionReject,
          delete this.executionResolve));
    }),
    (r.explicitRender = function () {
      if (
        this.props.grecaptcha &&
        this.props.grecaptcha.enterprise &&
        this.props.grecaptcha.enterprise.render &&
        this._widgetId === void 0
      ) {
        var u = document.createElement("div");
        ((this._widgetId = this.props.grecaptcha.enterprise.render(u, {
          sitekey: this.props.sitekey,
          callback: this.handleChange,
          theme: this.props.theme,
          type: this.props.type,
          tabindex: this.props.tabindex,
          "expired-callback": this.handleExpired,
          "error-callback": this.handleErrored,
          size: this.props.size,
          stoken: this.props.stoken,
          hl: this.props.hl,
          badge: this.props.badge,
          isolated: this.props.isolated,
        })),
          this.captcha.appendChild(u));
      }
      this._executeRequested &&
        this.props.grecaptcha &&
        this._widgetId !== void 0 &&
        ((this._executeRequested = !1), this.execute());
    }),
    (r.componentDidMount = function () {
      this.explicitRender();
    }),
    (r.componentDidUpdate = function () {
      this.explicitRender();
    }),
    (r.handleRecaptchaRef = function (u) {
      this.captcha = u;
    }),
    (r.render = function () {
      var u = this.props;
      (u.sitekey,
        u.onChange,
        u.theme,
        u.type,
        u.tabindex,
        u.onExpired,
        u.onErrored,
        u.size,
        u.stoken,
        u.grecaptcha,
        u.badge,
        u.hl,
        u.isolated);
      var f = KC(u, [
        "sitekey",
        "onChange",
        "theme",
        "type",
        "tabindex",
        "onExpired",
        "onErrored",
        "size",
        "stoken",
        "grecaptcha",
        "badge",
        "hl",
        "isolated",
      ]);
      return T.createElement(
        "div",
        $f({}, f, { ref: this.handleRecaptchaRef })
      );
    }),
    l
  );
})(T.Component);
Zs.displayName = "ReCAPTCHA";
Zs.propTypes = {
  sitekey: et.string.isRequired,
  onChange: et.func,
  grecaptcha: et.object,
  theme: et.oneOf(["dark", "light"]),
  type: et.oneOf(["image", "audio"]),
  tabindex: et.number,
  onExpired: et.func,
  onErrored: et.func,
  size: et.oneOf(["compact", "normal", "invisible"]),
  stoken: et.string,
  hl: et.string,
  badge: et.oneOf(["bottomright", "bottomleft", "inline"]),
  isolated: et.bool,
};
Zs.defaultProps = {
  onChange: function () {},
  theme: "light",
  type: "image",
  tabindex: 0,
  size: "normal",
  badge: "bottomright",
};
var rA = "onloadcallback",
  FC = "grecaptcha";
function ZC() {
  return (typeof window < "u" && window.recaptchaOptions) || {};
}
function JC() {
  var a = ZC(),
    l = a.useRecaptchaNet ? "recaptcha.net" : "www.google.com";
  return (
    "https://" +
    l +
    "/recaptcha/enterprise.js?onload=" +
    rA +
    "&render=explicit"
  );
}
const Vw = lA(JC, { callbackName: rA, globalName: FC })(Zs);
class PC extends xl {
  signupLink;
  resetPasswordLink;
  editIdentifierLink;
  data;
  constructor(l) {
    (super(l),
      (this.signupLink = nd(l)),
      (this.resetPasswordLink = ad(l)),
      (this.editIdentifierLink = R_(l)),
      (this.data = xl.getScreenData(l)));
  }
}
class $C extends Ls {
  constructor(l) {
    (super(l),
      (this.isSignupEnabled = id(l)),
      (this.isForgotPasswordEnabled = ld(l)),
      (this.isPasskeyEnabled = rd(l)),
      (this.getPasswordPolicy = () => tv(l)),
      (this.getUsernamePolicy = () => ev(l)),
      (this.getAllowedIdentifiers = () => M_(l)));
  }
  isSignupEnabled;
  isForgotPasswordEnabled;
  isPasskeyEnabled;
  getPasswordPolicy;
  getUsernamePolicy;
  getAllowedIdentifiers;
}
class Wf extends Us {
  static screenIdentifier = td.LOGIN_PASSWORD;
  screen;
  transaction;
  constructor() {
    super();
    const l = this.getContext("screen"),
      r = this.getContext("transaction");
    ((this.screen = new PC(l)), (this.transaction = new $C(r)));
  }
  async login(l) {
    const r = {
        state: this.transaction.state,
        telemetry: [Wf.screenIdentifier, "login"],
      },
      o = await Kv();
    await new Xn(r).submitData({ ...l, ...o });
  }
  async federatedLogin(l) {
    const r = {
      state: this.transaction.state,
      telemetry: [Wf.screenIdentifier, "federatedLogin"],
    };
    await new Xn(r).submitData(l);
  }
}
var Cf = { exports: {} },
  Or = {},
  wf = { exports: {} },
  Rf = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Oy;
function WC() {
  return (
    Oy ||
      ((Oy = 1),
      (function (a) {
        function l(O, D) {
          var z = O.length;
          O.push(D);
          e: for (; 0 < z; ) {
            var le = (z - 1) >>> 1,
              ce = O[le];
            if (0 < u(ce, D)) ((O[le] = D), (O[z] = ce), (z = le));
            else break e;
          }
        }
        function r(O) {
          return O.length === 0 ? null : O[0];
        }
        function o(O) {
          if (O.length === 0) return null;
          var D = O[0],
            z = O.pop();
          if (z !== D) {
            O[0] = z;
            e: for (var le = 0, ce = O.length, x = ce >>> 1; le < x; ) {
              var k = 2 * (le + 1) - 1,
                P = O[k],
                ie = k + 1,
                oe = O[ie];
              if (0 > u(P, z))
                ie < ce && 0 > u(oe, P)
                  ? ((O[le] = oe), (O[ie] = z), (le = ie))
                  : ((O[le] = P), (O[k] = z), (le = k));
              else if (ie < ce && 0 > u(oe, z))
                ((O[le] = oe), (O[ie] = z), (le = ie));
              else break e;
            }
          }
          return D;
        }
        function u(O, D) {
          var z = O.sortIndex - D.sortIndex;
          return z !== 0 ? z : O.id - D.id;
        }
        if (
          ((a.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var f = performance;
          a.unstable_now = function () {
            return f.now();
          };
        } else {
          var d = Date,
            m = d.now();
          a.unstable_now = function () {
            return d.now() - m;
          };
        }
        var p = [],
          g = [],
          v = 1,
          A = null,
          b = 3,
          _ = !1,
          S = !1,
          w = !1,
          Q = !1,
          F = typeof setTimeout == "function" ? setTimeout : null,
          I = typeof clearTimeout == "function" ? clearTimeout : null,
          N = typeof setImmediate < "u" ? setImmediate : null;
        function j(O) {
          for (var D = r(g); D !== null; ) {
            if (D.callback === null) o(g);
            else if (D.startTime <= O)
              (o(g), (D.sortIndex = D.expirationTime), l(p, D));
            else break;
            D = r(g);
          }
        }
        function M(O) {
          if (((w = !1), j(O), !S))
            if (r(p) !== null) ((S = !0), Y || ((Y = !0), Z()));
            else {
              var D = r(g);
              D !== null && se(M, D.startTime - O);
            }
        }
        var Y = !1,
          K = -1,
          J = 5,
          he = -1;
        function pe() {
          return Q ? !0 : !(a.unstable_now() - he < J);
        }
        function fe() {
          if (((Q = !1), Y)) {
            var O = a.unstable_now();
            he = O;
            var D = !0;
            try {
              e: {
                ((S = !1), w && ((w = !1), I(K), (K = -1)), (_ = !0));
                var z = b;
                try {
                  t: {
                    for (
                      j(O), A = r(p);
                      A !== null && !(A.expirationTime > O && pe());

                    ) {
                      var le = A.callback;
                      if (typeof le == "function") {
                        ((A.callback = null), (b = A.priorityLevel));
                        var ce = le(A.expirationTime <= O);
                        if (((O = a.unstable_now()), typeof ce == "function")) {
                          ((A.callback = ce), j(O), (D = !0));
                          break t;
                        }
                        (A === r(p) && o(p), j(O));
                      } else o(p);
                      A = r(p);
                    }
                    if (A !== null) D = !0;
                    else {
                      var x = r(g);
                      (x !== null && se(M, x.startTime - O), (D = !1));
                    }
                  }
                  break e;
                } finally {
                  ((A = null), (b = z), (_ = !1));
                }
                D = void 0;
              }
            } finally {
              D ? Z() : (Y = !1);
            }
          }
        }
        var Z;
        if (typeof N == "function")
          Z = function () {
            N(fe);
          };
        else if (typeof MessageChannel < "u") {
          var H = new MessageChannel(),
            te = H.port2;
          ((H.port1.onmessage = fe),
            (Z = function () {
              te.postMessage(null);
            }));
        } else
          Z = function () {
            F(fe, 0);
          };
        function se(O, D) {
          K = F(function () {
            O(a.unstable_now());
          }, D);
        }
        ((a.unstable_IdlePriority = 5),
          (a.unstable_ImmediatePriority = 1),
          (a.unstable_LowPriority = 4),
          (a.unstable_NormalPriority = 3),
          (a.unstable_Profiling = null),
          (a.unstable_UserBlockingPriority = 2),
          (a.unstable_cancelCallback = function (O) {
            O.callback = null;
          }),
          (a.unstable_forceFrameRate = function (O) {
            0 > O || 125 < O
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (J = 0 < O ? Math.floor(1e3 / O) : 5);
          }),
          (a.unstable_getCurrentPriorityLevel = function () {
            return b;
          }),
          (a.unstable_next = function (O) {
            switch (b) {
              case 1:
              case 2:
              case 3:
                var D = 3;
                break;
              default:
                D = b;
            }
            var z = b;
            b = D;
            try {
              return O();
            } finally {
              b = z;
            }
          }),
          (a.unstable_requestPaint = function () {
            Q = !0;
          }),
          (a.unstable_runWithPriority = function (O, D) {
            switch (O) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                O = 3;
            }
            var z = b;
            b = O;
            try {
              return D();
            } finally {
              b = z;
            }
          }),
          (a.unstable_scheduleCallback = function (O, D, z) {
            var le = a.unstable_now();
            switch (
              (typeof z == "object" && z !== null
                ? ((z = z.delay),
                  (z = typeof z == "number" && 0 < z ? le + z : le))
                : (z = le),
              O)
            ) {
              case 1:
                var ce = -1;
                break;
              case 2:
                ce = 250;
                break;
              case 5:
                ce = 1073741823;
                break;
              case 4:
                ce = 1e4;
                break;
              default:
                ce = 5e3;
            }
            return (
              (ce = z + ce),
              (O = {
                id: v++,
                callback: D,
                priorityLevel: O,
                startTime: z,
                expirationTime: ce,
                sortIndex: -1,
              }),
              z > le
                ? ((O.sortIndex = z),
                  l(g, O),
                  r(p) === null &&
                    O === r(g) &&
                    (w ? (I(K), (K = -1)) : (w = !0), se(M, z - le)))
                : ((O.sortIndex = ce),
                  l(p, O),
                  S || _ || ((S = !0), Y || ((Y = !0), Z()))),
              O
            );
          }),
          (a.unstable_shouldYield = pe),
          (a.unstable_wrapCallback = function (O) {
            var D = b;
            return function () {
              var z = b;
              b = D;
              try {
                return O.apply(this, arguments);
              } finally {
                b = z;
              }
            };
          }));
      })(Rf)),
    Rf
  );
}
var zy;
function ew() {
  return (zy || ((zy = 1), (wf.exports = WC())), wf.exports);
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var My;
function tw() {
  if (My) return Or;
  My = 1;
  var a = ew(),
    l = ks(),
    r = rv();
  function o(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var n = 2; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    }
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function u(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function f(e) {
    var t = e,
      n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do ((t = e), (t.flags & 4098) !== 0 && (n = t.return), (e = t.return));
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function d(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function m(e) {
    if (e.tag === 31) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function p(e) {
    if (f(e) !== e) throw Error(o(188));
  }
  function g(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = f(e)), t === null)) throw Error(o(188));
      return t !== e ? null : e;
    }
    for (var n = e, i = t; ; ) {
      var s = n.return;
      if (s === null) break;
      var c = s.alternate;
      if (c === null) {
        if (((i = s.return), i !== null)) {
          n = i;
          continue;
        }
        break;
      }
      if (s.child === c.child) {
        for (c = s.child; c; ) {
          if (c === n) return (p(s), e);
          if (c === i) return (p(s), t);
          c = c.sibling;
        }
        throw Error(o(188));
      }
      if (n.return !== i.return) ((n = s), (i = c));
      else {
        for (var h = !1, y = s.child; y; ) {
          if (y === n) {
            ((h = !0), (n = s), (i = c));
            break;
          }
          if (y === i) {
            ((h = !0), (i = s), (n = c));
            break;
          }
          y = y.sibling;
        }
        if (!h) {
          for (y = c.child; y; ) {
            if (y === n) {
              ((h = !0), (n = c), (i = s));
              break;
            }
            if (y === i) {
              ((h = !0), (i = c), (n = s));
              break;
            }
            y = y.sibling;
          }
          if (!h) throw Error(o(189));
        }
      }
      if (n.alternate !== i) throw Error(o(190));
    }
    if (n.tag !== 3) throw Error(o(188));
    return n.stateNode.current === n ? e : t;
  }
  function v(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (((t = v(e)), t !== null)) return t;
      e = e.sibling;
    }
    return null;
  }
  var A = Object.assign,
    b = Symbol.for("react.element"),
    _ = Symbol.for("react.transitional.element"),
    S = Symbol.for("react.portal"),
    w = Symbol.for("react.fragment"),
    Q = Symbol.for("react.strict_mode"),
    F = Symbol.for("react.profiler"),
    I = Symbol.for("react.consumer"),
    N = Symbol.for("react.context"),
    j = Symbol.for("react.forward_ref"),
    M = Symbol.for("react.suspense"),
    Y = Symbol.for("react.suspense_list"),
    K = Symbol.for("react.memo"),
    J = Symbol.for("react.lazy"),
    he = Symbol.for("react.activity"),
    pe = Symbol.for("react.memo_cache_sentinel"),
    fe = Symbol.iterator;
  function Z(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (fe && e[fe]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var H = Symbol.for("react.client.reference");
  function te(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === H ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case w:
        return "Fragment";
      case F:
        return "Profiler";
      case Q:
        return "StrictMode";
      case M:
        return "Suspense";
      case Y:
        return "SuspenseList";
      case he:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case S:
          return "Portal";
        case N:
          return e.displayName || "Context";
        case I:
          return (e._context.displayName || "Context") + ".Consumer";
        case j:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case K:
          return (
            (t = e.displayName || null),
            t !== null ? t : te(e.type) || "Memo"
          );
        case J:
          ((t = e._payload), (e = e._init));
          try {
            return te(e(t));
          } catch {}
      }
    return null;
  }
  var se = Array.isArray,
    O = l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    D = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    z = { pending: !1, data: null, method: null, action: null },
    le = [],
    ce = -1;
  function x(e) {
    return { current: e };
  }
  function k(e) {
    0 > ce || ((e.current = le[ce]), (le[ce] = null), ce--);
  }
  function P(e, t) {
    (ce++, (le[ce] = e.current), (e.current = t));
  }
  var ie = x(null),
    oe = x(null),
    q = x(null),
    ae = x(null);
  function _e(e, t) {
    switch ((P(q, t), P(oe, e), P(ie, null), t.nodeType)) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? Ig(e) : 0;
        break;
      default:
        if (((e = t.tagName), (t = t.namespaceURI)))
          ((t = Ig(t)), (e = Gg(t, e)));
        else
          switch (e) {
            case "svg":
              e = 1;
              break;
            case "math":
              e = 2;
              break;
            default:
              e = 0;
          }
    }
    (k(ie), P(ie, e));
  }
  function de() {
    (k(ie), k(oe), k(q));
  }
  function Ee(e) {
    e.memoizedState !== null && P(ae, e);
    var t = ie.current,
      n = Gg(t, e.type);
    t !== n && (P(oe, e), P(ie, n));
  }
  function Le(e) {
    (oe.current === e && (k(ie), k(oe)),
      ae.current === e && (k(ae), (br._currentValue = z)));
  }
  var we, Ut;
  function ze(e) {
    if (we === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        ((we = (t && t[1]) || ""),
          (Ut =
            -1 <
            n.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < n.stack.indexOf("@")
                ? "@unknown:0:0"
                : ""));
      }
    return (
      `
` +
      we +
      e +
      Ut
    );
  }
  var ot = !1;
  function qe(e, t) {
    if (!e || ot) return "";
    ot = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var i = {
        DetermineComponentFrameRoot: function () {
          try {
            if (t) {
              var ne = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(ne.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(ne, []);
                } catch (X) {
                  var G = X;
                }
                Reflect.construct(e, [], ne);
              } else {
                try {
                  ne.call();
                } catch (X) {
                  G = X;
                }
                e.call(ne.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (X) {
                G = X;
              }
              (ne = e()) &&
                typeof ne.catch == "function" &&
                ne.catch(function () {});
            }
          } catch (X) {
            if (X && G && typeof X.stack == "string") return [X.stack, G.stack];
          }
          return [null, null];
        },
      };
      i.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var s = Object.getOwnPropertyDescriptor(
        i.DetermineComponentFrameRoot,
        "name"
      );
      s &&
        s.configurable &&
        Object.defineProperty(i.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var c = i.DetermineComponentFrameRoot(),
        h = c[0],
        y = c[1];
      if (h && y) {
        var E = h.split(`
`),
          V = y.split(`
`);
        for (
          s = i = 0;
          i < E.length && !E[i].includes("DetermineComponentFrameRoot");

        )
          i++;
        for (; s < V.length && !V[s].includes("DetermineComponentFrameRoot"); )
          s++;
        if (i === E.length || s === V.length)
          for (
            i = E.length - 1, s = V.length - 1;
            1 <= i && 0 <= s && E[i] !== V[s];

          )
            s--;
        for (; 1 <= i && 0 <= s; i--, s--)
          if (E[i] !== V[s]) {
            if (i !== 1 || s !== 1)
              do
                if ((i--, s--, 0 > s || E[i] !== V[s])) {
                  var W =
                    `
` + E[i].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      W.includes("<anonymous>") &&
                      (W = W.replace("<anonymous>", e.displayName)),
                    W
                  );
                }
              while (1 <= i && 0 <= s);
            break;
          }
      }
    } finally {
      ((ot = !1), (Error.prepareStackTrace = n));
    }
    return (n = e ? e.displayName || e.name : "") ? ze(n) : "";
  }
  function ht(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return ze(e.type);
      case 16:
        return ze("Lazy");
      case 13:
        return e.child !== t && t !== null
          ? ze("Suspense Fallback")
          : ze("Suspense");
      case 19:
        return ze("SuspenseList");
      case 0:
      case 15:
        return qe(e.type, !1);
      case 11:
        return qe(e.type.render, !1);
      case 1:
        return qe(e.type, !0);
      case 31:
        return ze("Activity");
      default:
        return "";
    }
  }
  function $n(e) {
    try {
      var t = "",
        n = null;
      do ((t += ht(e, n)), (n = e), (e = e.return));
      while (e);
      return t;
    } catch (i) {
      return (
        `
Error generating stack: ` +
        i.message +
        `
` +
        i.stack
      );
    }
  }
  var zn = Object.prototype.hasOwnProperty,
    C = a.unstable_scheduleCallback,
    L = a.unstable_cancelCallback,
    $ = a.unstable_shouldYield,
    me = a.unstable_requestPaint,
    re = a.unstable_now,
    ue = a.unstable_getCurrentPriorityLevel,
    xe = a.unstable_ImmediatePriority,
    Qe = a.unstable_UserBlockingPriority,
    je = a.unstable_NormalPriority,
    _t = a.unstable_LowPriority,
    $t = a.unstable_IdlePriority,
    Wt = a.log,
    Mi = a.unstable_setDisableYieldValue,
    gn = null,
    mt = null;
  function en(e) {
    if (
      (typeof Wt == "function" && Mi(e),
      mt && typeof mt.setStrictMode == "function")
    )
      try {
        mt.setStrictMode(gn, e);
      } catch {}
  }
  var Be = Math.clz32 ? Math.clz32 : jt,
    Ct = Math.log,
    Vt = Math.LN2;
  function jt(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((Ct(e) / Vt) | 0)) | 0);
  }
  var Mn = 256,
    Dn = 262144,
    Wn = 4194304;
  function Bn(e) {
    var t = e & 42;
    if (t !== 0) return t;
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return e & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function ii(e, t, n) {
    var i = e.pendingLanes;
    if (i === 0) return 0;
    var s = 0,
      c = e.suspendedLanes,
      h = e.pingedLanes;
    e = e.warmLanes;
    var y = i & 134217727;
    return (
      y !== 0
        ? ((i = y & ~c),
          i !== 0
            ? (s = Bn(i))
            : ((h &= y),
              h !== 0
                ? (s = Bn(h))
                : n || ((n = y & ~e), n !== 0 && (s = Bn(n)))))
        : ((y = i & ~c),
          y !== 0
            ? (s = Bn(y))
            : h !== 0
              ? (s = Bn(h))
              : n || ((n = i & ~e), n !== 0 && (s = Bn(n)))),
      s === 0
        ? 0
        : t !== 0 &&
            t !== s &&
            (t & c) === 0 &&
            ((c = s & -s),
            (n = t & -t),
            c >= n || (c === 32 && (n & 4194048) !== 0))
          ? t
          : s
    );
  }
  function li(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function Js(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Hr() {
    var e = Wn;
    return ((Wn <<= 1), (Wn & 62914560) === 0 && (Wn = 4194304), e);
  }
  function Dl(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function ea(e, t) {
    ((e.pendingLanes |= t),
      t !== 268435456 &&
        ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0)));
  }
  function jr(e, t, n, i, s, c) {
    var h = e.pendingLanes;
    ((e.pendingLanes = n),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.warmLanes = 0),
      (e.expiredLanes &= n),
      (e.entangledLanes &= n),
      (e.errorRecoveryDisabledLanes &= n),
      (e.shellSuspendCounter = 0));
    var y = e.entanglements,
      E = e.expirationTimes,
      V = e.hiddenUpdates;
    for (n = h & ~n; 0 < n; ) {
      var W = 31 - Be(n),
        ne = 1 << W;
      ((y[W] = 0), (E[W] = -1));
      var G = V[W];
      if (G !== null)
        for (V[W] = null, W = 0; W < G.length; W++) {
          var X = G[W];
          X !== null && (X.lane &= -536870913);
        }
      n &= ~ne;
    }
    (i !== 0 && Ir(e, i, 0),
      c !== 0 && s === 0 && e.tag !== 0 && (e.suspendedLanes |= c & ~(h & ~t)));
  }
  function Ir(e, t, n) {
    ((e.pendingLanes |= t), (e.suspendedLanes &= ~t));
    var i = 31 - Be(t);
    ((e.entangledLanes |= t),
      (e.entanglements[i] = e.entanglements[i] | 1073741824 | (n & 261930)));
  }
  function Gr(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var i = 31 - Be(n),
        s = 1 << i;
      ((s & t) | (e[i] & t) && (e[i] |= t), (n &= ~s));
    }
  }
  function Ta(e, t) {
    var n = t & -t;
    return (
      (n = (n & 42) !== 0 ? 1 : Bl(n)),
      (n & (e.suspendedLanes | t)) !== 0 ? 0 : n
    );
  }
  function Bl(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }
  function Nl(e) {
    return (
      (e &= -e),
      2 < e ? (8 < e ? ((e & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function Yr() {
    var e = D.p;
    return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : dp(e.type));
  }
  function Td(e, t) {
    var n = D.p;
    try {
      return ((D.p = e), t());
    } finally {
      D.p = n;
    }
  }
  var Oa = Math.random().toString(36).slice(2),
    Ot = "__reactFiber$" + Oa,
    It = "__reactProps$" + Oa,
    Di = "__reactContainer$" + Oa,
    Ps = "__reactEvents$" + Oa,
    oA = "__reactListeners$" + Oa,
    sA = "__reactHandles$" + Oa,
    Od = "__reactResources$" + Oa,
    kl = "__reactMarker$" + Oa;
  function $s(e) {
    (delete e[Ot], delete e[It], delete e[Ps], delete e[oA], delete e[sA]);
  }
  function Bi(e) {
    var t = e[Ot];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[Di] || n[Ot])) {
        if (
          ((n = t.alternate),
          t.child !== null || (n !== null && n.child !== null))
        )
          for (e = Jg(e); e !== null; ) {
            if ((n = e[Ot])) return n;
            e = Jg(e);
          }
        return t;
      }
      ((e = n), (n = e.parentNode));
    }
    return null;
  }
  function Ni(e) {
    if ((e = e[Ot] || e[Di])) {
      var t = e.tag;
      if (
        t === 5 ||
        t === 6 ||
        t === 13 ||
        t === 31 ||
        t === 26 ||
        t === 27 ||
        t === 3
      )
        return e;
    }
    return null;
  }
  function Ll(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(o(33));
  }
  function ki(e) {
    var t = e[Od];
    return (
      t ||
        (t = e[Od] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      t
    );
  }
  function wt(e) {
    e[kl] = !0;
  }
  var zd = new Set(),
    Md = {};
  function ri(e, t) {
    (Li(e, t), Li(e + "Capture", t));
  }
  function Li(e, t) {
    for (Md[e] = t, e = 0; e < t.length; e++) zd.add(t[e]);
  }
  var uA = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ),
    Dd = {},
    Bd = {};
  function cA(e) {
    return zn.call(Bd, e)
      ? !0
      : zn.call(Dd, e)
        ? !1
        : uA.test(e)
          ? (Bd[e] = !0)
          : ((Dd[e] = !0), !1);
  }
  function qr(e, t, n) {
    if (cA(t))
      if (n === null) e.removeAttribute(t);
      else {
        switch (typeof n) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(t);
            return;
          case "boolean":
            var i = t.toLowerCase().slice(0, 5);
            if (i !== "data-" && i !== "aria-") {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, "" + n);
      }
  }
  function Kr(e, t, n) {
    if (n === null) e.removeAttribute(t);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, "" + n);
    }
  }
  function ta(e, t, n, i) {
    if (i === null) e.removeAttribute(n);
    else {
      switch (typeof i) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(n);
          return;
      }
      e.setAttributeNS(t, n, "" + i);
    }
  }
  function pn(e) {
    switch (typeof e) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function Nd(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function fA(e, t, n) {
    var i = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
    if (
      !e.hasOwnProperty(t) &&
      typeof i < "u" &&
      typeof i.get == "function" &&
      typeof i.set == "function"
    ) {
      var s = i.get,
        c = i.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return s.call(this);
          },
          set: function (h) {
            ((n = "" + h), c.call(this, h));
          },
        }),
        Object.defineProperty(e, t, { enumerable: i.enumerable }),
        {
          getValue: function () {
            return n;
          },
          setValue: function (h) {
            n = "" + h;
          },
          stopTracking: function () {
            ((e._valueTracker = null), delete e[t]);
          },
        }
      );
    }
  }
  function Ws(e) {
    if (!e._valueTracker) {
      var t = Nd(e) ? "checked" : "value";
      e._valueTracker = fA(e, t, "" + e[t]);
    }
  }
  function kd(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      i = "";
    return (
      e && (i = Nd(e) ? (e.checked ? "true" : "false") : e.value),
      (e = i),
      e !== n ? (t.setValue(e), !0) : !1
    );
  }
  function Xr(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var dA = /[\n"\\]/g;
  function yn(e) {
    return e.replace(dA, function (t) {
      return "\\" + t.charCodeAt(0).toString(16) + " ";
    });
  }
  function eu(e, t, n, i, s, c, h, y) {
    ((e.name = ""),
      h != null &&
      typeof h != "function" &&
      typeof h != "symbol" &&
      typeof h != "boolean"
        ? (e.type = h)
        : e.removeAttribute("type"),
      t != null
        ? h === "number"
          ? ((t === 0 && e.value === "") || e.value != t) &&
            (e.value = "" + pn(t))
          : e.value !== "" + pn(t) && (e.value = "" + pn(t))
        : (h !== "submit" && h !== "reset") || e.removeAttribute("value"),
      t != null
        ? tu(e, h, pn(t))
        : n != null
          ? tu(e, h, pn(n))
          : i != null && e.removeAttribute("value"),
      s == null && c != null && (e.defaultChecked = !!c),
      s != null &&
        (e.checked = s && typeof s != "function" && typeof s != "symbol"),
      y != null &&
      typeof y != "function" &&
      typeof y != "symbol" &&
      typeof y != "boolean"
        ? (e.name = "" + pn(y))
        : e.removeAttribute("name"));
  }
  function Ld(e, t, n, i, s, c, h, y) {
    if (
      (c != null &&
        typeof c != "function" &&
        typeof c != "symbol" &&
        typeof c != "boolean" &&
        (e.type = c),
      t != null || n != null)
    ) {
      if (!((c !== "submit" && c !== "reset") || t != null)) {
        Ws(e);
        return;
      }
      ((n = n != null ? "" + pn(n) : ""),
        (t = t != null ? "" + pn(t) : n),
        y || t === e.value || (e.value = t),
        (e.defaultValue = t));
    }
    ((i = i ?? s),
      (i = typeof i != "function" && typeof i != "symbol" && !!i),
      (e.checked = y ? e.checked : !!i),
      (e.defaultChecked = !!i),
      h != null &&
        typeof h != "function" &&
        typeof h != "symbol" &&
        typeof h != "boolean" &&
        (e.name = h),
      Ws(e));
  }
  function tu(e, t, n) {
    (t === "number" && Xr(e.ownerDocument) === e) ||
      e.defaultValue === "" + n ||
      (e.defaultValue = "" + n);
  }
  function Ui(e, t, n, i) {
    if (((e = e.options), t)) {
      t = {};
      for (var s = 0; s < n.length; s++) t["$" + n[s]] = !0;
      for (n = 0; n < e.length; n++)
        ((s = t.hasOwnProperty("$" + e[n].value)),
          e[n].selected !== s && (e[n].selected = s),
          s && i && (e[n].defaultSelected = !0));
    } else {
      for (n = "" + pn(n), t = null, s = 0; s < e.length; s++) {
        if (e[s].value === n) {
          ((e[s].selected = !0), i && (e[s].defaultSelected = !0));
          return;
        }
        t !== null || e[s].disabled || (t = e[s]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Ud(e, t, n) {
    if (
      t != null &&
      ((t = "" + pn(t)), t !== e.value && (e.value = t), n == null)
    ) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = n != null ? "" + pn(n) : "";
  }
  function Vd(e, t, n, i) {
    if (t == null) {
      if (i != null) {
        if (n != null) throw Error(o(92));
        if (se(i)) {
          if (1 < i.length) throw Error(o(93));
          i = i[0];
        }
        n = i;
      }
      (n == null && (n = ""), (t = n));
    }
    ((n = pn(t)),
      (e.defaultValue = n),
      (i = e.textContent),
      i === n && i !== "" && i !== null && (e.value = i),
      Ws(e));
  }
  function Vi(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var hA = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Qd(e, t, n) {
    var i = t.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === ""
      ? i
        ? e.setProperty(t, "")
        : t === "float"
          ? (e.cssFloat = "")
          : (e[t] = "")
      : i
        ? e.setProperty(t, n)
        : typeof n != "number" || n === 0 || hA.has(t)
          ? t === "float"
            ? (e.cssFloat = n)
            : (e[t] = ("" + n).trim())
          : (e[t] = n + "px");
  }
  function Hd(e, t, n) {
    if (t != null && typeof t != "object") throw Error(o(62));
    if (((e = e.style), n != null)) {
      for (var i in n)
        !n.hasOwnProperty(i) ||
          (t != null && t.hasOwnProperty(i)) ||
          (i.indexOf("--") === 0
            ? e.setProperty(i, "")
            : i === "float"
              ? (e.cssFloat = "")
              : (e[i] = ""));
      for (var s in t)
        ((i = t[s]), t.hasOwnProperty(s) && n[s] !== i && Qd(e, s, i));
    } else for (var c in t) t.hasOwnProperty(c) && Qd(e, c, t[c]);
  }
  function nu(e) {
    if (e.indexOf("-") === -1) return !1;
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var mA = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    gA =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Fr(e) {
    return gA.test("" + e)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : e;
  }
  function na() {}
  var au = null;
  function iu(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Qi = null,
    Hi = null;
  function jd(e) {
    var t = Ni(e);
    if (t && (e = t.stateNode)) {
      var n = e[It] || null;
      e: switch (((e = t.stateNode), t.type)) {
        case "input":
          if (
            (eu(
              e,
              n.value,
              n.defaultValue,
              n.defaultValue,
              n.checked,
              n.defaultChecked,
              n.type,
              n.name
            ),
            (t = n.name),
            n.type === "radio" && t != null)
          ) {
            for (n = e; n.parentNode; ) n = n.parentNode;
            for (
              n = n.querySelectorAll(
                'input[name="' + yn("" + t) + '"][type="radio"]'
              ),
                t = 0;
              t < n.length;
              t++
            ) {
              var i = n[t];
              if (i !== e && i.form === e.form) {
                var s = i[It] || null;
                if (!s) throw Error(o(90));
                eu(
                  i,
                  s.value,
                  s.defaultValue,
                  s.defaultValue,
                  s.checked,
                  s.defaultChecked,
                  s.type,
                  s.name
                );
              }
            }
            for (t = 0; t < n.length; t++)
              ((i = n[t]), i.form === e.form && kd(i));
          }
          break e;
        case "textarea":
          Ud(e, n.value, n.defaultValue);
          break e;
        case "select":
          ((t = n.value), t != null && Ui(e, !!n.multiple, t, !1));
      }
    }
  }
  var lu = !1;
  function Id(e, t, n) {
    if (lu) return e(t, n);
    lu = !0;
    try {
      var i = e(t);
      return i;
    } finally {
      if (
        ((lu = !1),
        (Qi !== null || Hi !== null) &&
          (Lo(), Qi && ((t = Qi), (e = Hi), (Hi = Qi = null), jd(t), e)))
      )
        for (t = 0; t < e.length; t++) jd(e[t]);
    }
  }
  function Ul(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var i = n[It] || null;
    if (i === null) return null;
    n = i[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        ((i = !i.disabled) ||
          ((e = e.type),
          (i = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !i));
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(o(231, t, typeof n));
    return n;
  }
  var aa = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    ru = !1;
  if (aa)
    try {
      var Vl = {};
      (Object.defineProperty(Vl, "passive", {
        get: function () {
          ru = !0;
        },
      }),
        window.addEventListener("test", Vl, Vl),
        window.removeEventListener("test", Vl, Vl));
    } catch {
      ru = !1;
    }
  var za = null,
    ou = null,
    Zr = null;
  function Gd() {
    if (Zr) return Zr;
    var e,
      t = ou,
      n = t.length,
      i,
      s = "value" in za ? za.value : za.textContent,
      c = s.length;
    for (e = 0; e < n && t[e] === s[e]; e++);
    var h = n - e;
    for (i = 1; i <= h && t[n - i] === s[c - i]; i++);
    return (Zr = s.slice(e, 1 < i ? 1 - i : void 0));
  }
  function Jr(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Pr() {
    return !0;
  }
  function Yd() {
    return !1;
  }
  function Gt(e) {
    function t(n, i, s, c, h) {
      ((this._reactName = n),
        (this._targetInst = s),
        (this.type = i),
        (this.nativeEvent = c),
        (this.target = h),
        (this.currentTarget = null));
      for (var y in e)
        e.hasOwnProperty(y) && ((n = e[y]), (this[y] = n ? n(c) : c[y]));
      return (
        (this.isDefaultPrevented = (
          c.defaultPrevented != null ? c.defaultPrevented : c.returnValue === !1
        )
          ? Pr
          : Yd),
        (this.isPropagationStopped = Yd),
        this
      );
    }
    return (
      A(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = Pr));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = Pr));
        },
        persist: function () {},
        isPersistent: Pr,
      }),
      t
    );
  }
  var oi = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    $r = Gt(oi),
    Ql = A({}, oi, { view: 0, detail: 0 }),
    pA = Gt(Ql),
    su,
    uu,
    Hl,
    Wr = A({}, Ql, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: fu,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== Hl &&
              (Hl && e.type === "mousemove"
                ? ((su = e.screenX - Hl.screenX), (uu = e.screenY - Hl.screenY))
                : (uu = su = 0),
              (Hl = e)),
            su);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : uu;
      },
    }),
    qd = Gt(Wr),
    yA = A({}, Wr, { dataTransfer: 0 }),
    vA = Gt(yA),
    AA = A({}, Ql, { relatedTarget: 0 }),
    cu = Gt(AA),
    bA = A({}, oi, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    _A = Gt(bA),
    xA = A({}, oi, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    EA = Gt(xA),
    SA = A({}, oi, { data: 0 }),
    Kd = Gt(SA),
    CA = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    wA = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    RA = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function TA(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = RA[e])
        ? !!t[e]
        : !1;
  }
  function fu() {
    return TA;
  }
  var OA = A({}, Ql, {
      key: function (e) {
        if (e.key) {
          var t = CA[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = Jr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
            ? wA[e.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: fu,
      charCode: function (e) {
        return e.type === "keypress" ? Jr(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? Jr(e)
          : e.type === "keydown" || e.type === "keyup"
            ? e.keyCode
            : 0;
      },
    }),
    zA = Gt(OA),
    MA = A({}, Wr, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Xd = Gt(MA),
    DA = A({}, Ql, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: fu,
    }),
    BA = Gt(DA),
    NA = A({}, oi, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    kA = Gt(NA),
    LA = A({}, Wr, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
            ? -e.wheelDeltaX
            : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
            ? -e.wheelDeltaY
            : "wheelDelta" in e
              ? -e.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    UA = Gt(LA),
    VA = A({}, oi, { newState: 0, oldState: 0 }),
    QA = Gt(VA),
    HA = [9, 13, 27, 32],
    du = aa && "CompositionEvent" in window,
    jl = null;
  aa && "documentMode" in document && (jl = document.documentMode);
  var jA = aa && "TextEvent" in window && !jl,
    Fd = aa && (!du || (jl && 8 < jl && 11 >= jl)),
    Zd = " ",
    Jd = !1;
  function Pd(e, t) {
    switch (e) {
      case "keyup":
        return HA.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function $d(e) {
    return (
      (e = e.detail),
      typeof e == "object" && "data" in e ? e.data : null
    );
  }
  var ji = !1;
  function IA(e, t) {
    switch (e) {
      case "compositionend":
        return $d(t);
      case "keypress":
        return t.which !== 32 ? null : ((Jd = !0), Zd);
      case "textInput":
        return ((e = t.data), e === Zd && Jd ? null : e);
      default:
        return null;
    }
  }
  function GA(e, t) {
    if (ji)
      return e === "compositionend" || (!du && Pd(e, t))
        ? ((e = Gd()), (Zr = ou = za = null), (ji = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Fd && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var YA = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function Wd(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!YA[e.type] : t === "textarea";
  }
  function eh(e, t, n, i) {
    (Qi ? (Hi ? Hi.push(i) : (Hi = [i])) : (Qi = i),
      (t = Go(t, "onChange")),
      0 < t.length &&
        ((n = new $r("onChange", "change", null, n, i)),
        e.push({ event: n, listeners: t })));
  }
  var Il = null,
    Gl = null;
  function qA(e) {
    Lg(e, 0);
  }
  function eo(e) {
    var t = Ll(e);
    if (kd(t)) return e;
  }
  function th(e, t) {
    if (e === "change") return t;
  }
  var nh = !1;
  if (aa) {
    var hu;
    if (aa) {
      var mu = "oninput" in document;
      if (!mu) {
        var ah = document.createElement("div");
        (ah.setAttribute("oninput", "return;"),
          (mu = typeof ah.oninput == "function"));
      }
      hu = mu;
    } else hu = !1;
    nh = hu && (!document.documentMode || 9 < document.documentMode);
  }
  function ih() {
    Il && (Il.detachEvent("onpropertychange", lh), (Gl = Il = null));
  }
  function lh(e) {
    if (e.propertyName === "value" && eo(Gl)) {
      var t = [];
      (eh(t, Gl, e, iu(e)), Id(qA, t));
    }
  }
  function KA(e, t, n) {
    e === "focusin"
      ? (ih(), (Il = t), (Gl = n), Il.attachEvent("onpropertychange", lh))
      : e === "focusout" && ih();
  }
  function XA(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return eo(Gl);
  }
  function FA(e, t) {
    if (e === "click") return eo(t);
  }
  function ZA(e, t) {
    if (e === "input" || e === "change") return eo(t);
  }
  function JA(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var tn = typeof Object.is == "function" ? Object.is : JA;
  function Yl(e, t) {
    if (tn(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var n = Object.keys(e),
      i = Object.keys(t);
    if (n.length !== i.length) return !1;
    for (i = 0; i < n.length; i++) {
      var s = n[i];
      if (!zn.call(t, s) || !tn(e[s], t[s])) return !1;
    }
    return !0;
  }
  function rh(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function oh(e, t) {
    var n = rh(e);
    e = 0;
    for (var i; n; ) {
      if (n.nodeType === 3) {
        if (((i = e + n.textContent.length), e <= t && i >= t))
          return { node: n, offset: t - e };
        e = i;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = rh(n);
    }
  }
  function sh(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? sh(e, t.parentNode)
            : "contains" in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function uh(e) {
    e =
      e != null &&
      e.ownerDocument != null &&
      e.ownerDocument.defaultView != null
        ? e.ownerDocument.defaultView
        : window;
    for (var t = Xr(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Xr(e.document);
    }
    return t;
  }
  function gu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        t === "textarea" ||
        e.contentEditable === "true")
    );
  }
  var PA = aa && "documentMode" in document && 11 >= document.documentMode,
    Ii = null,
    pu = null,
    ql = null,
    yu = !1;
  function ch(e, t, n) {
    var i =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    yu ||
      Ii == null ||
      Ii !== Xr(i) ||
      ((i = Ii),
      "selectionStart" in i && gu(i)
        ? (i = { start: i.selectionStart, end: i.selectionEnd })
        : ((i = (
            (i.ownerDocument && i.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (i = {
            anchorNode: i.anchorNode,
            anchorOffset: i.anchorOffset,
            focusNode: i.focusNode,
            focusOffset: i.focusOffset,
          })),
      (ql && Yl(ql, i)) ||
        ((ql = i),
        (i = Go(pu, "onSelect")),
        0 < i.length &&
          ((t = new $r("onSelect", "select", null, t, n)),
          e.push({ event: t, listeners: i }),
          (t.target = Ii))));
  }
  function si(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n["Webkit" + e] = "webkit" + t),
      (n["Moz" + e] = "moz" + t),
      n
    );
  }
  var Gi = {
      animationend: si("Animation", "AnimationEnd"),
      animationiteration: si("Animation", "AnimationIteration"),
      animationstart: si("Animation", "AnimationStart"),
      transitionrun: si("Transition", "TransitionRun"),
      transitionstart: si("Transition", "TransitionStart"),
      transitioncancel: si("Transition", "TransitionCancel"),
      transitionend: si("Transition", "TransitionEnd"),
    },
    vu = {},
    fh = {};
  aa &&
    ((fh = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Gi.animationend.animation,
      delete Gi.animationiteration.animation,
      delete Gi.animationstart.animation),
    "TransitionEvent" in window || delete Gi.transitionend.transition);
  function ui(e) {
    if (vu[e]) return vu[e];
    if (!Gi[e]) return e;
    var t = Gi[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in fh) return (vu[e] = t[n]);
    return e;
  }
  var dh = ui("animationend"),
    hh = ui("animationiteration"),
    mh = ui("animationstart"),
    $A = ui("transitionrun"),
    WA = ui("transitionstart"),
    eb = ui("transitioncancel"),
    gh = ui("transitionend"),
    ph = new Map(),
    Au =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  Au.push("scrollEnd");
  function Nn(e, t) {
    (ph.set(e, t), ri(t, [e]));
  }
  var to =
      typeof reportError == "function"
        ? reportError
        : function (e) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var t = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof e == "object" &&
                  e !== null &&
                  typeof e.message == "string"
                    ? String(e.message)
                    : String(e),
                error: e,
              });
              if (!window.dispatchEvent(t)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", e);
              return;
            }
            console.error(e);
          },
    vn = [],
    Yi = 0,
    bu = 0;
  function no() {
    for (var e = Yi, t = (bu = Yi = 0); t < e; ) {
      var n = vn[t];
      vn[t++] = null;
      var i = vn[t];
      vn[t++] = null;
      var s = vn[t];
      vn[t++] = null;
      var c = vn[t];
      if (((vn[t++] = null), i !== null && s !== null)) {
        var h = i.pending;
        (h === null ? (s.next = s) : ((s.next = h.next), (h.next = s)),
          (i.pending = s));
      }
      c !== 0 && yh(n, s, c);
    }
  }
  function ao(e, t, n, i) {
    ((vn[Yi++] = e),
      (vn[Yi++] = t),
      (vn[Yi++] = n),
      (vn[Yi++] = i),
      (bu |= i),
      (e.lanes |= i),
      (e = e.alternate),
      e !== null && (e.lanes |= i));
  }
  function _u(e, t, n, i) {
    return (ao(e, t, n, i), io(e));
  }
  function ci(e, t) {
    return (ao(e, null, null, t), io(e));
  }
  function yh(e, t, n) {
    e.lanes |= n;
    var i = e.alternate;
    i !== null && (i.lanes |= n);
    for (var s = !1, c = e.return; c !== null; )
      ((c.childLanes |= n),
        (i = c.alternate),
        i !== null && (i.childLanes |= n),
        c.tag === 22 &&
          ((e = c.stateNode), e === null || e._visibility & 1 || (s = !0)),
        (e = c),
        (c = c.return));
    return e.tag === 3
      ? ((c = e.stateNode),
        s &&
          t !== null &&
          ((s = 31 - Be(n)),
          (e = c.hiddenUpdates),
          (i = e[s]),
          i === null ? (e[s] = [t]) : i.push(t),
          (t.lane = n | 536870912)),
        c)
      : null;
  }
  function io(e) {
    if (50 < hr) throw ((hr = 0), (zc = null), Error(o(185)));
    for (var t = e.return; t !== null; ) ((e = t), (t = e.return));
    return e.tag === 3 ? e.stateNode : null;
  }
  var qi = {};
  function tb(e, t, n, i) {
    ((this.tag = e),
      (this.key = n),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = i),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function nn(e, t, n, i) {
    return new tb(e, t, n, i);
  }
  function xu(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function ia(e, t) {
    var n = e.alternate;
    return (
      n === null
        ? ((n = nn(e.tag, t, e.key, e.mode)),
          (n.elementType = e.elementType),
          (n.type = e.type),
          (n.stateNode = e.stateNode),
          (n.alternate = e),
          (e.alternate = n))
        : ((n.pendingProps = t),
          (n.type = e.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = e.flags & 65011712),
      (n.childLanes = e.childLanes),
      (n.lanes = e.lanes),
      (n.child = e.child),
      (n.memoizedProps = e.memoizedProps),
      (n.memoizedState = e.memoizedState),
      (n.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (n.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (n.sibling = e.sibling),
      (n.index = e.index),
      (n.ref = e.ref),
      (n.refCleanup = e.refCleanup),
      n
    );
  }
  function vh(e, t) {
    e.flags &= 65011714;
    var n = e.alternate;
    return (
      n === null
        ? ((e.childLanes = 0),
          (e.lanes = t),
          (e.child = null),
          (e.subtreeFlags = 0),
          (e.memoizedProps = null),
          (e.memoizedState = null),
          (e.updateQueue = null),
          (e.dependencies = null),
          (e.stateNode = null))
        : ((e.childLanes = n.childLanes),
          (e.lanes = n.lanes),
          (e.child = n.child),
          (e.subtreeFlags = 0),
          (e.deletions = null),
          (e.memoizedProps = n.memoizedProps),
          (e.memoizedState = n.memoizedState),
          (e.updateQueue = n.updateQueue),
          (e.type = n.type),
          (t = n.dependencies),
          (e.dependencies =
            t === null
              ? null
              : { lanes: t.lanes, firstContext: t.firstContext })),
      e
    );
  }
  function lo(e, t, n, i, s, c) {
    var h = 0;
    if (((i = e), typeof e == "function")) xu(e) && (h = 1);
    else if (typeof e == "string")
      h = r0(e, n, ie.current)
        ? 26
        : e === "html" || e === "head" || e === "body"
          ? 27
          : 5;
    else
      e: switch (e) {
        case he:
          return (
            (e = nn(31, n, t, s)),
            (e.elementType = he),
            (e.lanes = c),
            e
          );
        case w:
          return fi(n.children, s, c, t);
        case Q:
          ((h = 8), (s |= 24));
          break;
        case F:
          return (
            (e = nn(12, n, t, s | 2)),
            (e.elementType = F),
            (e.lanes = c),
            e
          );
        case M:
          return ((e = nn(13, n, t, s)), (e.elementType = M), (e.lanes = c), e);
        case Y:
          return ((e = nn(19, n, t, s)), (e.elementType = Y), (e.lanes = c), e);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case N:
                h = 10;
                break e;
              case I:
                h = 9;
                break e;
              case j:
                h = 11;
                break e;
              case K:
                h = 14;
                break e;
              case J:
                ((h = 16), (i = null));
                break e;
            }
          ((h = 29),
            (n = Error(o(130, e === null ? "null" : typeof e, ""))),
            (i = null));
      }
    return (
      (t = nn(h, n, t, s)),
      (t.elementType = e),
      (t.type = i),
      (t.lanes = c),
      t
    );
  }
  function fi(e, t, n, i) {
    return ((e = nn(7, e, i, t)), (e.lanes = n), e);
  }
  function Eu(e, t, n) {
    return ((e = nn(6, e, null, t)), (e.lanes = n), e);
  }
  function Ah(e) {
    var t = nn(18, null, null, 0);
    return ((t.stateNode = e), t);
  }
  function Su(e, t, n) {
    return (
      (t = nn(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  var bh = new WeakMap();
  function An(e, t) {
    if (typeof e == "object" && e !== null) {
      var n = bh.get(e);
      return n !== void 0
        ? n
        : ((t = { value: e, source: t, stack: $n(t) }), bh.set(e, t), t);
    }
    return { value: e, source: t, stack: $n(t) };
  }
  var Ki = [],
    Xi = 0,
    ro = null,
    Kl = 0,
    bn = [],
    _n = 0,
    Ma = null,
    In = 1,
    Gn = "";
  function la(e, t) {
    ((Ki[Xi++] = Kl), (Ki[Xi++] = ro), (ro = e), (Kl = t));
  }
  function _h(e, t, n) {
    ((bn[_n++] = In), (bn[_n++] = Gn), (bn[_n++] = Ma), (Ma = e));
    var i = In;
    e = Gn;
    var s = 32 - Be(i) - 1;
    ((i &= ~(1 << s)), (n += 1));
    var c = 32 - Be(t) + s;
    if (30 < c) {
      var h = s - (s % 5);
      ((c = (i & ((1 << h) - 1)).toString(32)),
        (i >>= h),
        (s -= h),
        (In = (1 << (32 - Be(t) + s)) | (n << s) | i),
        (Gn = c + e));
    } else ((In = (1 << c) | (n << s) | i), (Gn = e));
  }
  function Cu(e) {
    e.return !== null && (la(e, 1), _h(e, 1, 0));
  }
  function wu(e) {
    for (; e === ro; )
      ((ro = Ki[--Xi]), (Ki[Xi] = null), (Kl = Ki[--Xi]), (Ki[Xi] = null));
    for (; e === Ma; )
      ((Ma = bn[--_n]),
        (bn[_n] = null),
        (Gn = bn[--_n]),
        (bn[_n] = null),
        (In = bn[--_n]),
        (bn[_n] = null));
  }
  function xh(e, t) {
    ((bn[_n++] = In),
      (bn[_n++] = Gn),
      (bn[_n++] = Ma),
      (In = t.id),
      (Gn = t.overflow),
      (Ma = e));
  }
  var zt = null,
    at = null,
    He = !1,
    Da = null,
    xn = !1,
    Ru = Error(o(519));
  function Ba(e) {
    var t = Error(
      o(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1]
          ? "text"
          : "HTML",
        ""
      )
    );
    throw (Xl(An(t, e)), Ru);
  }
  function Eh(e) {
    var t = e.stateNode,
      n = e.type,
      i = e.memoizedProps;
    switch (((t[Ot] = e), (t[It] = i), n)) {
      case "dialog":
        (ke("cancel", t), ke("close", t));
        break;
      case "iframe":
      case "object":
      case "embed":
        ke("load", t);
        break;
      case "video":
      case "audio":
        for (n = 0; n < gr.length; n++) ke(gr[n], t);
        break;
      case "source":
        ke("error", t);
        break;
      case "img":
      case "image":
      case "link":
        (ke("error", t), ke("load", t));
        break;
      case "details":
        ke("toggle", t);
        break;
      case "input":
        (ke("invalid", t),
          Ld(
            t,
            i.value,
            i.defaultValue,
            i.checked,
            i.defaultChecked,
            i.type,
            i.name,
            !0
          ));
        break;
      case "select":
        ke("invalid", t);
        break;
      case "textarea":
        (ke("invalid", t), Vd(t, i.value, i.defaultValue, i.children));
    }
    ((n = i.children),
      (typeof n != "string" && typeof n != "number" && typeof n != "bigint") ||
      t.textContent === "" + n ||
      i.suppressHydrationWarning === !0 ||
      Hg(t.textContent, n)
        ? (i.popover != null && (ke("beforetoggle", t), ke("toggle", t)),
          i.onScroll != null && ke("scroll", t),
          i.onScrollEnd != null && ke("scrollend", t),
          i.onClick != null && (t.onclick = na),
          (t = !0))
        : (t = !1),
      t || Ba(e, !0));
  }
  function Sh(e) {
    for (zt = e.return; zt; )
      switch (zt.tag) {
        case 5:
        case 31:
        case 13:
          xn = !1;
          return;
        case 27:
        case 3:
          xn = !0;
          return;
        default:
          zt = zt.return;
      }
  }
  function Fi(e) {
    if (e !== zt) return !1;
    if (!He) return (Sh(e), (He = !0), !1);
    var t = e.tag,
      n;
    if (
      ((n = t !== 3 && t !== 27) &&
        ((n = t === 5) &&
          ((n = e.type),
          (n =
            !(n !== "form" && n !== "button") || qc(e.type, e.memoizedProps))),
        (n = !n)),
      n && at && Ba(e),
      Sh(e),
      t === 13)
    ) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(o(317));
      at = Zg(e);
    } else if (t === 31) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(o(317));
      at = Zg(e);
    } else
      t === 27
        ? ((t = at), Xa(e.type) ? ((e = Jc), (Jc = null), (at = e)) : (at = t))
        : (at = zt ? Sn(e.stateNode.nextSibling) : null);
    return !0;
  }
  function di() {
    ((at = zt = null), (He = !1));
  }
  function Tu() {
    var e = Da;
    return (
      e !== null &&
        (Xt === null ? (Xt = e) : Xt.push.apply(Xt, e), (Da = null)),
      e
    );
  }
  function Xl(e) {
    Da === null ? (Da = [e]) : Da.push(e);
  }
  var Ou = x(null),
    hi = null,
    ra = null;
  function Na(e, t, n) {
    (P(Ou, t._currentValue), (t._currentValue = n));
  }
  function oa(e) {
    ((e._currentValue = Ou.current), k(Ou));
  }
  function zu(e, t, n) {
    for (; e !== null; ) {
      var i = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), i !== null && (i.childLanes |= t))
          : i !== null && (i.childLanes & t) !== t && (i.childLanes |= t),
        e === n)
      )
        break;
      e = e.return;
    }
  }
  function Mu(e, t, n, i) {
    var s = e.child;
    for (s !== null && (s.return = e); s !== null; ) {
      var c = s.dependencies;
      if (c !== null) {
        var h = s.child;
        c = c.firstContext;
        e: for (; c !== null; ) {
          var y = c;
          c = s;
          for (var E = 0; E < t.length; E++)
            if (y.context === t[E]) {
              ((c.lanes |= n),
                (y = c.alternate),
                y !== null && (y.lanes |= n),
                zu(c.return, n, e),
                i || (h = null));
              break e;
            }
          c = y.next;
        }
      } else if (s.tag === 18) {
        if (((h = s.return), h === null)) throw Error(o(341));
        ((h.lanes |= n),
          (c = h.alternate),
          c !== null && (c.lanes |= n),
          zu(h, n, e),
          (h = null));
      } else h = s.child;
      if (h !== null) h.return = s;
      else
        for (h = s; h !== null; ) {
          if (h === e) {
            h = null;
            break;
          }
          if (((s = h.sibling), s !== null)) {
            ((s.return = h.return), (h = s));
            break;
          }
          h = h.return;
        }
      s = h;
    }
  }
  function Zi(e, t, n, i) {
    e = null;
    for (var s = t, c = !1; s !== null; ) {
      if (!c) {
        if ((s.flags & 524288) !== 0) c = !0;
        else if ((s.flags & 262144) !== 0) break;
      }
      if (s.tag === 10) {
        var h = s.alternate;
        if (h === null) throw Error(o(387));
        if (((h = h.memoizedProps), h !== null)) {
          var y = s.type;
          tn(s.pendingProps.value, h.value) ||
            (e !== null ? e.push(y) : (e = [y]));
        }
      } else if (s === ae.current) {
        if (((h = s.alternate), h === null)) throw Error(o(387));
        h.memoizedState.memoizedState !== s.memoizedState.memoizedState &&
          (e !== null ? e.push(br) : (e = [br]));
      }
      s = s.return;
    }
    (e !== null && Mu(t, e, n, i), (t.flags |= 262144));
  }
  function oo(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!tn(e.context._currentValue, e.memoizedValue)) return !0;
      e = e.next;
    }
    return !1;
  }
  function mi(e) {
    ((hi = e),
      (ra = null),
      (e = e.dependencies),
      e !== null && (e.firstContext = null));
  }
  function Mt(e) {
    return Ch(hi, e);
  }
  function so(e, t) {
    return (hi === null && mi(e), Ch(e, t));
  }
  function Ch(e, t) {
    var n = t._currentValue;
    if (((t = { context: t, memoizedValue: n, next: null }), ra === null)) {
      if (e === null) throw Error(o(308));
      ((ra = t),
        (e.dependencies = { lanes: 0, firstContext: t }),
        (e.flags |= 524288));
    } else ra = ra.next = t;
    return n;
  }
  var nb =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var e = [],
              t = (this.signal = {
                aborted: !1,
                addEventListener: function (n, i) {
                  e.push(i);
                },
              });
            this.abort = function () {
              ((t.aborted = !0),
                e.forEach(function (n) {
                  return n();
                }));
            };
          },
    ab = a.unstable_scheduleCallback,
    ib = a.unstable_NormalPriority,
    gt = {
      $$typeof: N,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Du() {
    return { controller: new nb(), data: new Map(), refCount: 0 };
  }
  function Fl(e) {
    (e.refCount--,
      e.refCount === 0 &&
        ab(ib, function () {
          e.controller.abort();
        }));
  }
  var Zl = null,
    Bu = 0,
    Ji = 0,
    Pi = null;
  function lb(e, t) {
    if (Zl === null) {
      var n = (Zl = []);
      ((Bu = 0),
        (Ji = Lc()),
        (Pi = {
          status: "pending",
          value: void 0,
          then: function (i) {
            n.push(i);
          },
        }));
    }
    return (Bu++, t.then(wh, wh), t);
  }
  function wh() {
    if (--Bu === 0 && Zl !== null) {
      Pi !== null && (Pi.status = "fulfilled");
      var e = Zl;
      ((Zl = null), (Ji = 0), (Pi = null));
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function rb(e, t) {
    var n = [],
      i = {
        status: "pending",
        value: null,
        reason: null,
        then: function (s) {
          n.push(s);
        },
      };
    return (
      e.then(
        function () {
          ((i.status = "fulfilled"), (i.value = t));
          for (var s = 0; s < n.length; s++) (0, n[s])(t);
        },
        function (s) {
          for (i.status = "rejected", i.reason = s, s = 0; s < n.length; s++)
            (0, n[s])(void 0);
        }
      ),
      i
    );
  }
  var Rh = O.S;
  O.S = function (e, t) {
    ((cg = re()),
      typeof t == "object" &&
        t !== null &&
        typeof t.then == "function" &&
        lb(e, t),
      Rh !== null && Rh(e, t));
  };
  var gi = x(null);
  function Nu() {
    var e = gi.current;
    return e !== null ? e : We.pooledCache;
  }
  function uo(e, t) {
    t === null ? P(gi, gi.current) : P(gi, t.pool);
  }
  function Th() {
    var e = Nu();
    return e === null ? null : { parent: gt._currentValue, pool: e };
  }
  var $i = Error(o(460)),
    ku = Error(o(474)),
    co = Error(o(542)),
    fo = { then: function () {} };
  function Oh(e) {
    return ((e = e.status), e === "fulfilled" || e === "rejected");
  }
  function zh(e, t, n) {
    switch (
      ((n = e[n]),
      n === void 0 ? e.push(t) : n !== t && (t.then(na, na), (t = n)),
      t.status)
    ) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw ((e = t.reason), Dh(e), e);
      default:
        if (typeof t.status == "string") t.then(na, na);
        else {
          if (((e = We), e !== null && 100 < e.shellSuspendCounter))
            throw Error(o(482));
          ((e = t),
            (e.status = "pending"),
            e.then(
              function (i) {
                if (t.status === "pending") {
                  var s = t;
                  ((s.status = "fulfilled"), (s.value = i));
                }
              },
              function (i) {
                if (t.status === "pending") {
                  var s = t;
                  ((s.status = "rejected"), (s.reason = i));
                }
              }
            ));
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw ((e = t.reason), Dh(e), e);
        }
        throw ((yi = t), $i);
    }
  }
  function pi(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (n) {
      throw n !== null && typeof n == "object" && typeof n.then == "function"
        ? ((yi = n), $i)
        : n;
    }
  }
  var yi = null;
  function Mh() {
    if (yi === null) throw Error(o(459));
    var e = yi;
    return ((yi = null), e);
  }
  function Dh(e) {
    if (e === $i || e === co) throw Error(o(483));
  }
  var Wi = null,
    Jl = 0;
  function ho(e) {
    var t = Jl;
    return ((Jl += 1), Wi === null && (Wi = []), zh(Wi, e, t));
  }
  function Pl(e, t) {
    ((t = t.props.ref), (e.ref = t !== void 0 ? t : null));
  }
  function mo(e, t) {
    throw t.$$typeof === b
      ? Error(o(525))
      : ((e = Object.prototype.toString.call(t)),
        Error(
          o(
            31,
            e === "[object Object]"
              ? "object with keys {" + Object.keys(t).join(", ") + "}"
              : e
          )
        ));
  }
  function Bh(e) {
    function t(B, R) {
      if (e) {
        var U = B.deletions;
        U === null ? ((B.deletions = [R]), (B.flags |= 16)) : U.push(R);
      }
    }
    function n(B, R) {
      if (!e) return null;
      for (; R !== null; ) (t(B, R), (R = R.sibling));
      return null;
    }
    function i(B) {
      for (var R = new Map(); B !== null; )
        (B.key !== null ? R.set(B.key, B) : R.set(B.index, B), (B = B.sibling));
      return R;
    }
    function s(B, R) {
      return ((B = ia(B, R)), (B.index = 0), (B.sibling = null), B);
    }
    function c(B, R, U) {
      return (
        (B.index = U),
        e
          ? ((U = B.alternate),
            U !== null
              ? ((U = U.index), U < R ? ((B.flags |= 67108866), R) : U)
              : ((B.flags |= 67108866), R))
          : ((B.flags |= 1048576), R)
      );
    }
    function h(B) {
      return (e && B.alternate === null && (B.flags |= 67108866), B);
    }
    function y(B, R, U, ee) {
      return R === null || R.tag !== 6
        ? ((R = Eu(U, B.mode, ee)), (R.return = B), R)
        : ((R = s(R, U)), (R.return = B), R);
    }
    function E(B, R, U, ee) {
      var Se = U.type;
      return Se === w
        ? W(B, R, U.props.children, ee, U.key)
        : R !== null &&
            (R.elementType === Se ||
              (typeof Se == "object" &&
                Se !== null &&
                Se.$$typeof === J &&
                pi(Se) === R.type))
          ? ((R = s(R, U.props)), Pl(R, U), (R.return = B), R)
          : ((R = lo(U.type, U.key, U.props, null, B.mode, ee)),
            Pl(R, U),
            (R.return = B),
            R);
    }
    function V(B, R, U, ee) {
      return R === null ||
        R.tag !== 4 ||
        R.stateNode.containerInfo !== U.containerInfo ||
        R.stateNode.implementation !== U.implementation
        ? ((R = Su(U, B.mode, ee)), (R.return = B), R)
        : ((R = s(R, U.children || [])), (R.return = B), R);
    }
    function W(B, R, U, ee, Se) {
      return R === null || R.tag !== 7
        ? ((R = fi(U, B.mode, ee, Se)), (R.return = B), R)
        : ((R = s(R, U)), (R.return = B), R);
    }
    function ne(B, R, U) {
      if (
        (typeof R == "string" && R !== "") ||
        typeof R == "number" ||
        typeof R == "bigint"
      )
        return ((R = Eu("" + R, B.mode, U)), (R.return = B), R);
      if (typeof R == "object" && R !== null) {
        switch (R.$$typeof) {
          case _:
            return (
              (U = lo(R.type, R.key, R.props, null, B.mode, U)),
              Pl(U, R),
              (U.return = B),
              U
            );
          case S:
            return ((R = Su(R, B.mode, U)), (R.return = B), R);
          case J:
            return ((R = pi(R)), ne(B, R, U));
        }
        if (se(R) || Z(R))
          return ((R = fi(R, B.mode, U, null)), (R.return = B), R);
        if (typeof R.then == "function") return ne(B, ho(R), U);
        if (R.$$typeof === N) return ne(B, so(B, R), U);
        mo(B, R);
      }
      return null;
    }
    function G(B, R, U, ee) {
      var Se = R !== null ? R.key : null;
      if (
        (typeof U == "string" && U !== "") ||
        typeof U == "number" ||
        typeof U == "bigint"
      )
        return Se !== null ? null : y(B, R, "" + U, ee);
      if (typeof U == "object" && U !== null) {
        switch (U.$$typeof) {
          case _:
            return U.key === Se ? E(B, R, U, ee) : null;
          case S:
            return U.key === Se ? V(B, R, U, ee) : null;
          case J:
            return ((U = pi(U)), G(B, R, U, ee));
        }
        if (se(U) || Z(U)) return Se !== null ? null : W(B, R, U, ee, null);
        if (typeof U.then == "function") return G(B, R, ho(U), ee);
        if (U.$$typeof === N) return G(B, R, so(B, U), ee);
        mo(B, U);
      }
      return null;
    }
    function X(B, R, U, ee, Se) {
      if (
        (typeof ee == "string" && ee !== "") ||
        typeof ee == "number" ||
        typeof ee == "bigint"
      )
        return ((B = B.get(U) || null), y(R, B, "" + ee, Se));
      if (typeof ee == "object" && ee !== null) {
        switch (ee.$$typeof) {
          case _:
            return (
              (B = B.get(ee.key === null ? U : ee.key) || null),
              E(R, B, ee, Se)
            );
          case S:
            return (
              (B = B.get(ee.key === null ? U : ee.key) || null),
              V(R, B, ee, Se)
            );
          case J:
            return ((ee = pi(ee)), X(B, R, U, ee, Se));
        }
        if (se(ee) || Z(ee))
          return ((B = B.get(U) || null), W(R, B, ee, Se, null));
        if (typeof ee.then == "function") return X(B, R, U, ho(ee), Se);
        if (ee.$$typeof === N) return X(B, R, U, so(R, ee), Se);
        mo(R, ee);
      }
      return null;
    }
    function ye(B, R, U, ee) {
      for (
        var Se = null, Ie = null, be = R, Oe = (R = 0), Ve = null;
        be !== null && Oe < U.length;
        Oe++
      ) {
        be.index > Oe ? ((Ve = be), (be = null)) : (Ve = be.sibling);
        var Ge = G(B, be, U[Oe], ee);
        if (Ge === null) {
          be === null && (be = Ve);
          break;
        }
        (e && be && Ge.alternate === null && t(B, be),
          (R = c(Ge, R, Oe)),
          Ie === null ? (Se = Ge) : (Ie.sibling = Ge),
          (Ie = Ge),
          (be = Ve));
      }
      if (Oe === U.length) return (n(B, be), He && la(B, Oe), Se);
      if (be === null) {
        for (; Oe < U.length; Oe++)
          ((be = ne(B, U[Oe], ee)),
            be !== null &&
              ((R = c(be, R, Oe)),
              Ie === null ? (Se = be) : (Ie.sibling = be),
              (Ie = be)));
        return (He && la(B, Oe), Se);
      }
      for (be = i(be); Oe < U.length; Oe++)
        ((Ve = X(be, B, Oe, U[Oe], ee)),
          Ve !== null &&
            (e &&
              Ve.alternate !== null &&
              be.delete(Ve.key === null ? Oe : Ve.key),
            (R = c(Ve, R, Oe)),
            Ie === null ? (Se = Ve) : (Ie.sibling = Ve),
            (Ie = Ve)));
      return (
        e &&
          be.forEach(function ($a) {
            return t(B, $a);
          }),
        He && la(B, Oe),
        Se
      );
    }
    function Ce(B, R, U, ee) {
      if (U == null) throw Error(o(151));
      for (
        var Se = null,
          Ie = null,
          be = R,
          Oe = (R = 0),
          Ve = null,
          Ge = U.next();
        be !== null && !Ge.done;
        Oe++, Ge = U.next()
      ) {
        be.index > Oe ? ((Ve = be), (be = null)) : (Ve = be.sibling);
        var $a = G(B, be, Ge.value, ee);
        if ($a === null) {
          be === null && (be = Ve);
          break;
        }
        (e && be && $a.alternate === null && t(B, be),
          (R = c($a, R, Oe)),
          Ie === null ? (Se = $a) : (Ie.sibling = $a),
          (Ie = $a),
          (be = Ve));
      }
      if (Ge.done) return (n(B, be), He && la(B, Oe), Se);
      if (be === null) {
        for (; !Ge.done; Oe++, Ge = U.next())
          ((Ge = ne(B, Ge.value, ee)),
            Ge !== null &&
              ((R = c(Ge, R, Oe)),
              Ie === null ? (Se = Ge) : (Ie.sibling = Ge),
              (Ie = Ge)));
        return (He && la(B, Oe), Se);
      }
      for (be = i(be); !Ge.done; Oe++, Ge = U.next())
        ((Ge = X(be, B, Oe, Ge.value, ee)),
          Ge !== null &&
            (e &&
              Ge.alternate !== null &&
              be.delete(Ge.key === null ? Oe : Ge.key),
            (R = c(Ge, R, Oe)),
            Ie === null ? (Se = Ge) : (Ie.sibling = Ge),
            (Ie = Ge)));
      return (
        e &&
          be.forEach(function (y0) {
            return t(B, y0);
          }),
        He && la(B, Oe),
        Se
      );
    }
    function $e(B, R, U, ee) {
      if (
        (typeof U == "object" &&
          U !== null &&
          U.type === w &&
          U.key === null &&
          (U = U.props.children),
        typeof U == "object" && U !== null)
      ) {
        switch (U.$$typeof) {
          case _:
            e: {
              for (var Se = U.key; R !== null; ) {
                if (R.key === Se) {
                  if (((Se = U.type), Se === w)) {
                    if (R.tag === 7) {
                      (n(B, R.sibling),
                        (ee = s(R, U.props.children)),
                        (ee.return = B),
                        (B = ee));
                      break e;
                    }
                  } else if (
                    R.elementType === Se ||
                    (typeof Se == "object" &&
                      Se !== null &&
                      Se.$$typeof === J &&
                      pi(Se) === R.type)
                  ) {
                    (n(B, R.sibling),
                      (ee = s(R, U.props)),
                      Pl(ee, U),
                      (ee.return = B),
                      (B = ee));
                    break e;
                  }
                  n(B, R);
                  break;
                } else t(B, R);
                R = R.sibling;
              }
              U.type === w
                ? ((ee = fi(U.props.children, B.mode, ee, U.key)),
                  (ee.return = B),
                  (B = ee))
                : ((ee = lo(U.type, U.key, U.props, null, B.mode, ee)),
                  Pl(ee, U),
                  (ee.return = B),
                  (B = ee));
            }
            return h(B);
          case S:
            e: {
              for (Se = U.key; R !== null; ) {
                if (R.key === Se)
                  if (
                    R.tag === 4 &&
                    R.stateNode.containerInfo === U.containerInfo &&
                    R.stateNode.implementation === U.implementation
                  ) {
                    (n(B, R.sibling),
                      (ee = s(R, U.children || [])),
                      (ee.return = B),
                      (B = ee));
                    break e;
                  } else {
                    n(B, R);
                    break;
                  }
                else t(B, R);
                R = R.sibling;
              }
              ((ee = Su(U, B.mode, ee)), (ee.return = B), (B = ee));
            }
            return h(B);
          case J:
            return ((U = pi(U)), $e(B, R, U, ee));
        }
        if (se(U)) return ye(B, R, U, ee);
        if (Z(U)) {
          if (((Se = Z(U)), typeof Se != "function")) throw Error(o(150));
          return ((U = Se.call(U)), Ce(B, R, U, ee));
        }
        if (typeof U.then == "function") return $e(B, R, ho(U), ee);
        if (U.$$typeof === N) return $e(B, R, so(B, U), ee);
        mo(B, U);
      }
      return (typeof U == "string" && U !== "") ||
        typeof U == "number" ||
        typeof U == "bigint"
        ? ((U = "" + U),
          R !== null && R.tag === 6
            ? (n(B, R.sibling), (ee = s(R, U)), (ee.return = B), (B = ee))
            : (n(B, R), (ee = Eu(U, B.mode, ee)), (ee.return = B), (B = ee)),
          h(B))
        : n(B, R);
    }
    return function (B, R, U, ee) {
      try {
        Jl = 0;
        var Se = $e(B, R, U, ee);
        return ((Wi = null), Se);
      } catch (be) {
        if (be === $i || be === co) throw be;
        var Ie = nn(29, be, null, B.mode);
        return ((Ie.lanes = ee), (Ie.return = B), Ie);
      } finally {
      }
    };
  }
  var vi = Bh(!0),
    Nh = Bh(!1),
    ka = !1;
  function Lu(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function Uu(e, t) {
    ((e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          callbacks: null,
        }));
  }
  function La(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function Ua(e, t, n) {
    var i = e.updateQueue;
    if (i === null) return null;
    if (((i = i.shared), (Ye & 2) !== 0)) {
      var s = i.pending;
      return (
        s === null ? (t.next = t) : ((t.next = s.next), (s.next = t)),
        (i.pending = t),
        (t = io(e)),
        yh(e, null, n),
        t
      );
    }
    return (ao(e, i, t, n), io(e));
  }
  function $l(e, t, n) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194048) !== 0))
    ) {
      var i = t.lanes;
      ((i &= e.pendingLanes), (n |= i), (t.lanes = n), Gr(e, n));
    }
  }
  function Vu(e, t) {
    var n = e.updateQueue,
      i = e.alternate;
    if (i !== null && ((i = i.updateQueue), n === i)) {
      var s = null,
        c = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var h = {
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: null,
            next: null,
          };
          (c === null ? (s = c = h) : (c = c.next = h), (n = n.next));
        } while (n !== null);
        c === null ? (s = c = t) : (c = c.next = t);
      } else s = c = t;
      ((n = {
        baseState: i.baseState,
        firstBaseUpdate: s,
        lastBaseUpdate: c,
        shared: i.shared,
        callbacks: i.callbacks,
      }),
        (e.updateQueue = n));
      return;
    }
    ((e = n.lastBaseUpdate),
      e === null ? (n.firstBaseUpdate = t) : (e.next = t),
      (n.lastBaseUpdate = t));
  }
  var Qu = !1;
  function Wl() {
    if (Qu) {
      var e = Pi;
      if (e !== null) throw e;
    }
  }
  function er(e, t, n, i) {
    Qu = !1;
    var s = e.updateQueue;
    ka = !1;
    var c = s.firstBaseUpdate,
      h = s.lastBaseUpdate,
      y = s.shared.pending;
    if (y !== null) {
      s.shared.pending = null;
      var E = y,
        V = E.next;
      ((E.next = null), h === null ? (c = V) : (h.next = V), (h = E));
      var W = e.alternate;
      W !== null &&
        ((W = W.updateQueue),
        (y = W.lastBaseUpdate),
        y !== h &&
          (y === null ? (W.firstBaseUpdate = V) : (y.next = V),
          (W.lastBaseUpdate = E)));
    }
    if (c !== null) {
      var ne = s.baseState;
      ((h = 0), (W = V = E = null), (y = c));
      do {
        var G = y.lane & -536870913,
          X = G !== y.lane;
        if (X ? (Ue & G) === G : (i & G) === G) {
          (G !== 0 && G === Ji && (Qu = !0),
            W !== null &&
              (W = W.next =
                {
                  lane: 0,
                  tag: y.tag,
                  payload: y.payload,
                  callback: null,
                  next: null,
                }));
          e: {
            var ye = e,
              Ce = y;
            G = t;
            var $e = n;
            switch (Ce.tag) {
              case 1:
                if (((ye = Ce.payload), typeof ye == "function")) {
                  ne = ye.call($e, ne, G);
                  break e;
                }
                ne = ye;
                break e;
              case 3:
                ye.flags = (ye.flags & -65537) | 128;
              case 0:
                if (
                  ((ye = Ce.payload),
                  (G = typeof ye == "function" ? ye.call($e, ne, G) : ye),
                  G == null)
                )
                  break e;
                ne = A({}, ne, G);
                break e;
              case 2:
                ka = !0;
            }
          }
          ((G = y.callback),
            G !== null &&
              ((e.flags |= 64),
              X && (e.flags |= 8192),
              (X = s.callbacks),
              X === null ? (s.callbacks = [G]) : X.push(G)));
        } else
          ((X = {
            lane: G,
            tag: y.tag,
            payload: y.payload,
            callback: y.callback,
            next: null,
          }),
            W === null ? ((V = W = X), (E = ne)) : (W = W.next = X),
            (h |= G));
        if (((y = y.next), y === null)) {
          if (((y = s.shared.pending), y === null)) break;
          ((X = y),
            (y = X.next),
            (X.next = null),
            (s.lastBaseUpdate = X),
            (s.shared.pending = null));
        }
      } while (!0);
      (W === null && (E = ne),
        (s.baseState = E),
        (s.firstBaseUpdate = V),
        (s.lastBaseUpdate = W),
        c === null && (s.shared.lanes = 0),
        (Ia |= h),
        (e.lanes = h),
        (e.memoizedState = ne));
    }
  }
  function kh(e, t) {
    if (typeof e != "function") throw Error(o(191, e));
    e.call(t);
  }
  function Lh(e, t) {
    var n = e.callbacks;
    if (n !== null)
      for (e.callbacks = null, e = 0; e < n.length; e++) kh(n[e], t);
  }
  var el = x(null),
    go = x(0);
  function Uh(e, t) {
    ((e = pa), P(go, e), P(el, t), (pa = e | t.baseLanes));
  }
  function Hu() {
    (P(go, pa), P(el, el.current));
  }
  function ju() {
    ((pa = go.current), k(el), k(go));
  }
  var an = x(null),
    En = null;
  function Va(e) {
    var t = e.alternate;
    (P(ft, ft.current & 1),
      P(an, e),
      En === null &&
        (t === null || el.current !== null || t.memoizedState !== null) &&
        (En = e));
  }
  function Iu(e) {
    (P(ft, ft.current), P(an, e), En === null && (En = e));
  }
  function Vh(e) {
    e.tag === 22
      ? (P(ft, ft.current), P(an, e), En === null && (En = e))
      : Qa();
  }
  function Qa() {
    (P(ft, ft.current), P(an, an.current));
  }
  function ln(e) {
    (k(an), En === e && (En = null), k(ft));
  }
  var ft = x(0);
  function po(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && ((n = n.dehydrated), n === null || Fc(n) || Zc(n)))
          return t;
      } else if (
        t.tag === 19 &&
        (t.memoizedProps.revealOrder === "forwards" ||
          t.memoizedProps.revealOrder === "backwards" ||
          t.memoizedProps.revealOrder === "unstable_legacy-backwards" ||
          t.memoizedProps.revealOrder === "together")
      ) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        ((t.child.return = t), (t = t.child));
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
    return null;
  }
  var sa = 0,
    Te = null,
    Je = null,
    pt = null,
    yo = !1,
    tl = !1,
    Ai = !1,
    vo = 0,
    tr = 0,
    nl = null,
    ob = 0;
  function st() {
    throw Error(o(321));
  }
  function Gu(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!tn(e[n], t[n])) return !1;
    return !0;
  }
  function Yu(e, t, n, i, s, c) {
    return (
      (sa = c),
      (Te = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (O.H = e === null || e.memoizedState === null ? _m : lc),
      (Ai = !1),
      (c = n(i, s)),
      (Ai = !1),
      tl && (c = Hh(t, n, i, s)),
      Qh(e),
      c
    );
  }
  function Qh(e) {
    O.H = ir;
    var t = Je !== null && Je.next !== null;
    if (((sa = 0), (pt = Je = Te = null), (yo = !1), (tr = 0), (nl = null), t))
      throw Error(o(300));
    e === null ||
      yt ||
      ((e = e.dependencies), e !== null && oo(e) && (yt = !0));
  }
  function Hh(e, t, n, i) {
    Te = e;
    var s = 0;
    do {
      if ((tl && (nl = null), (tr = 0), (tl = !1), 25 <= s))
        throw Error(o(301));
      if (((s += 1), (pt = Je = null), e.updateQueue != null)) {
        var c = e.updateQueue;
        ((c.lastEffect = null),
          (c.events = null),
          (c.stores = null),
          c.memoCache != null && (c.memoCache.index = 0));
      }
      ((O.H = xm), (c = t(n, i)));
    } while (tl);
    return c;
  }
  function sb() {
    var e = O.H,
      t = e.useState()[0];
    return (
      (t = typeof t.then == "function" ? nr(t) : t),
      (e = e.useState()[0]),
      (Je !== null ? Je.memoizedState : null) !== e && (Te.flags |= 1024),
      t
    );
  }
  function qu() {
    var e = vo !== 0;
    return ((vo = 0), e);
  }
  function Ku(e, t, n) {
    ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~n));
  }
  function Xu(e) {
    if (yo) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        (t !== null && (t.pending = null), (e = e.next));
      }
      yo = !1;
    }
    ((sa = 0), (pt = Je = Te = null), (tl = !1), (tr = vo = 0), (nl = null));
  }
  function Qt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return (pt === null ? (Te.memoizedState = pt = e) : (pt = pt.next = e), pt);
  }
  function dt() {
    if (Je === null) {
      var e = Te.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Je.next;
    var t = pt === null ? Te.memoizedState : pt.next;
    if (t !== null) ((pt = t), (Je = e));
    else {
      if (e === null)
        throw Te.alternate === null ? Error(o(467)) : Error(o(310));
      ((Je = e),
        (e = {
          memoizedState: Je.memoizedState,
          baseState: Je.baseState,
          baseQueue: Je.baseQueue,
          queue: Je.queue,
          next: null,
        }),
        pt === null ? (Te.memoizedState = pt = e) : (pt = pt.next = e));
    }
    return pt;
  }
  function Ao() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function nr(e) {
    var t = tr;
    return (
      (tr += 1),
      nl === null && (nl = []),
      (e = zh(nl, e, t)),
      (t = Te),
      (pt === null ? t.memoizedState : pt.next) === null &&
        ((t = t.alternate),
        (O.H = t === null || t.memoizedState === null ? _m : lc)),
      e
    );
  }
  function bo(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return nr(e);
      if (e.$$typeof === N) return Mt(e);
    }
    throw Error(o(438, String(e)));
  }
  function Fu(e) {
    var t = null,
      n = Te.updateQueue;
    if ((n !== null && (t = n.memoCache), t == null)) {
      var i = Te.alternate;
      i !== null &&
        ((i = i.updateQueue),
        i !== null &&
          ((i = i.memoCache),
          i != null &&
            (t = {
              data: i.data.map(function (s) {
                return s.slice();
              }),
              index: 0,
            })));
    }
    if (
      (t == null && (t = { data: [], index: 0 }),
      n === null && ((n = Ao()), (Te.updateQueue = n)),
      (n.memoCache = t),
      (n = t.data[t.index]),
      n === void 0)
    )
      for (n = t.data[t.index] = Array(e), i = 0; i < e; i++) n[i] = pe;
    return (t.index++, n);
  }
  function ua(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function _o(e) {
    var t = dt();
    return Zu(t, Je, e);
  }
  function Zu(e, t, n) {
    var i = e.queue;
    if (i === null) throw Error(o(311));
    i.lastRenderedReducer = n;
    var s = e.baseQueue,
      c = i.pending;
    if (c !== null) {
      if (s !== null) {
        var h = s.next;
        ((s.next = c.next), (c.next = h));
      }
      ((t.baseQueue = s = c), (i.pending = null));
    }
    if (((c = e.baseState), s === null)) e.memoizedState = c;
    else {
      t = s.next;
      var y = (h = null),
        E = null,
        V = t,
        W = !1;
      do {
        var ne = V.lane & -536870913;
        if (ne !== V.lane ? (Ue & ne) === ne : (sa & ne) === ne) {
          var G = V.revertLane;
          if (G === 0)
            (E !== null &&
              (E = E.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: V.action,
                  hasEagerState: V.hasEagerState,
                  eagerState: V.eagerState,
                  next: null,
                }),
              ne === Ji && (W = !0));
          else if ((sa & G) === G) {
            ((V = V.next), G === Ji && (W = !0));
            continue;
          } else
            ((ne = {
              lane: 0,
              revertLane: V.revertLane,
              gesture: null,
              action: V.action,
              hasEagerState: V.hasEagerState,
              eagerState: V.eagerState,
              next: null,
            }),
              E === null ? ((y = E = ne), (h = c)) : (E = E.next = ne),
              (Te.lanes |= G),
              (Ia |= G));
          ((ne = V.action),
            Ai && n(c, ne),
            (c = V.hasEagerState ? V.eagerState : n(c, ne)));
        } else
          ((G = {
            lane: ne,
            revertLane: V.revertLane,
            gesture: V.gesture,
            action: V.action,
            hasEagerState: V.hasEagerState,
            eagerState: V.eagerState,
            next: null,
          }),
            E === null ? ((y = E = G), (h = c)) : (E = E.next = G),
            (Te.lanes |= ne),
            (Ia |= ne));
        V = V.next;
      } while (V !== null && V !== t);
      if (
        (E === null ? (h = c) : (E.next = y),
        !tn(c, e.memoizedState) && ((yt = !0), W && ((n = Pi), n !== null)))
      )
        throw n;
      ((e.memoizedState = c),
        (e.baseState = h),
        (e.baseQueue = E),
        (i.lastRenderedState = c));
    }
    return (s === null && (i.lanes = 0), [e.memoizedState, i.dispatch]);
  }
  function Ju(e) {
    var t = dt(),
      n = t.queue;
    if (n === null) throw Error(o(311));
    n.lastRenderedReducer = e;
    var i = n.dispatch,
      s = n.pending,
      c = t.memoizedState;
    if (s !== null) {
      n.pending = null;
      var h = (s = s.next);
      do ((c = e(c, h.action)), (h = h.next));
      while (h !== s);
      (tn(c, t.memoizedState) || (yt = !0),
        (t.memoizedState = c),
        t.baseQueue === null && (t.baseState = c),
        (n.lastRenderedState = c));
    }
    return [c, i];
  }
  function jh(e, t, n) {
    var i = Te,
      s = dt(),
      c = He;
    if (c) {
      if (n === void 0) throw Error(o(407));
      n = n();
    } else n = t();
    var h = !tn((Je || s).memoizedState, n);
    if (
      (h && ((s.memoizedState = n), (yt = !0)),
      (s = s.queue),
      Wu(Yh.bind(null, i, s, e), [e]),
      s.getSnapshot !== t || h || (pt !== null && pt.memoizedState.tag & 1))
    ) {
      if (
        ((i.flags |= 2048),
        al(9, { destroy: void 0 }, Gh.bind(null, i, s, n, t), null),
        We === null)
      )
        throw Error(o(349));
      c || (sa & 127) !== 0 || Ih(i, t, n);
    }
    return n;
  }
  function Ih(e, t, n) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = Te.updateQueue),
      t === null
        ? ((t = Ao()), (Te.updateQueue = t), (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
  }
  function Gh(e, t, n, i) {
    ((t.value = n), (t.getSnapshot = i), qh(t) && Kh(e));
  }
  function Yh(e, t, n) {
    return n(function () {
      qh(t) && Kh(e);
    });
  }
  function qh(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !tn(e, n);
    } catch {
      return !0;
    }
  }
  function Kh(e) {
    var t = ci(e, 2);
    t !== null && Ft(t, e, 2);
  }
  function Pu(e) {
    var t = Qt();
    if (typeof e == "function") {
      var n = e;
      if (((e = n()), Ai)) {
        en(!0);
        try {
          n();
        } finally {
          en(!1);
        }
      }
    }
    return (
      (t.memoizedState = t.baseState = e),
      (t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ua,
        lastRenderedState: e,
      }),
      t
    );
  }
  function Xh(e, t, n, i) {
    return ((e.baseState = n), Zu(e, Je, typeof i == "function" ? i : ua));
  }
  function ub(e, t, n, i, s) {
    if (So(e)) throw Error(o(485));
    if (((e = t.action), e !== null)) {
      var c = {
        payload: s,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (h) {
          c.listeners.push(h);
        },
      };
      (O.T !== null ? n(!0) : (c.isTransition = !1),
        i(c),
        (n = t.pending),
        n === null
          ? ((c.next = t.pending = c), Fh(t, c))
          : ((c.next = n.next), (t.pending = n.next = c)));
    }
  }
  function Fh(e, t) {
    var n = t.action,
      i = t.payload,
      s = e.state;
    if (t.isTransition) {
      var c = O.T,
        h = {};
      O.T = h;
      try {
        var y = n(s, i),
          E = O.S;
        (E !== null && E(h, y), Zh(e, t, y));
      } catch (V) {
        $u(e, t, V);
      } finally {
        (c !== null && h.types !== null && (c.types = h.types), (O.T = c));
      }
    } else
      try {
        ((c = n(s, i)), Zh(e, t, c));
      } catch (V) {
        $u(e, t, V);
      }
  }
  function Zh(e, t, n) {
    n !== null && typeof n == "object" && typeof n.then == "function"
      ? n.then(
          function (i) {
            Jh(e, t, i);
          },
          function (i) {
            return $u(e, t, i);
          }
        )
      : Jh(e, t, n);
  }
  function Jh(e, t, n) {
    ((t.status = "fulfilled"),
      (t.value = n),
      Ph(t),
      (e.state = n),
      (t = e.pending),
      t !== null &&
        ((n = t.next),
        n === t ? (e.pending = null) : ((n = n.next), (t.next = n), Fh(e, n))));
  }
  function $u(e, t, n) {
    var i = e.pending;
    if (((e.pending = null), i !== null)) {
      i = i.next;
      do ((t.status = "rejected"), (t.reason = n), Ph(t), (t = t.next));
      while (t !== i);
    }
    e.action = null;
  }
  function Ph(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function $h(e, t) {
    return t;
  }
  function Wh(e, t) {
    if (He) {
      var n = We.formState;
      if (n !== null) {
        e: {
          var i = Te;
          if (He) {
            if (at) {
              t: {
                for (var s = at, c = xn; s.nodeType !== 8; ) {
                  if (!c) {
                    s = null;
                    break t;
                  }
                  if (((s = Sn(s.nextSibling)), s === null)) {
                    s = null;
                    break t;
                  }
                }
                ((c = s.data), (s = c === "F!" || c === "F" ? s : null));
              }
              if (s) {
                ((at = Sn(s.nextSibling)), (i = s.data === "F!"));
                break e;
              }
            }
            Ba(i);
          }
          i = !1;
        }
        i && (t = n[0]);
      }
    }
    return (
      (n = Qt()),
      (n.memoizedState = n.baseState = t),
      (i = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: $h,
        lastRenderedState: t,
      }),
      (n.queue = i),
      (n = vm.bind(null, Te, i)),
      (i.dispatch = n),
      (i = Pu(!1)),
      (c = ic.bind(null, Te, !1, i.queue)),
      (i = Qt()),
      (s = { state: t, dispatch: null, action: e, pending: null }),
      (i.queue = s),
      (n = ub.bind(null, Te, s, c, n)),
      (s.dispatch = n),
      (i.memoizedState = e),
      [t, n, !1]
    );
  }
  function em(e) {
    var t = dt();
    return tm(t, Je, e);
  }
  function tm(e, t, n) {
    if (
      ((t = Zu(e, t, $h)[0]),
      (e = _o(ua)[0]),
      typeof t == "object" && t !== null && typeof t.then == "function")
    )
      try {
        var i = nr(t);
      } catch (h) {
        throw h === $i ? co : h;
      }
    else i = t;
    t = dt();
    var s = t.queue,
      c = s.dispatch;
    return (
      n !== t.memoizedState &&
        ((Te.flags |= 2048),
        al(9, { destroy: void 0 }, cb.bind(null, s, n), null)),
      [i, c, e]
    );
  }
  function cb(e, t) {
    e.action = t;
  }
  function nm(e) {
    var t = dt(),
      n = Je;
    if (n !== null) return tm(t, n, e);
    (dt(), (t = t.memoizedState), (n = dt()));
    var i = n.queue.dispatch;
    return ((n.memoizedState = e), [t, i, !1]);
  }
  function al(e, t, n, i) {
    return (
      (e = { tag: e, create: n, deps: i, inst: t, next: null }),
      (t = Te.updateQueue),
      t === null && ((t = Ao()), (Te.updateQueue = t)),
      (n = t.lastEffect),
      n === null
        ? (t.lastEffect = e.next = e)
        : ((i = n.next), (n.next = e), (e.next = i), (t.lastEffect = e)),
      e
    );
  }
  function am() {
    return dt().memoizedState;
  }
  function xo(e, t, n, i) {
    var s = Qt();
    ((Te.flags |= e),
      (s.memoizedState = al(
        1 | t,
        { destroy: void 0 },
        n,
        i === void 0 ? null : i
      )));
  }
  function Eo(e, t, n, i) {
    var s = dt();
    i = i === void 0 ? null : i;
    var c = s.memoizedState.inst;
    Je !== null && i !== null && Gu(i, Je.memoizedState.deps)
      ? (s.memoizedState = al(t, c, n, i))
      : ((Te.flags |= e), (s.memoizedState = al(1 | t, c, n, i)));
  }
  function im(e, t) {
    xo(8390656, 8, e, t);
  }
  function Wu(e, t) {
    Eo(2048, 8, e, t);
  }
  function fb(e) {
    Te.flags |= 4;
    var t = Te.updateQueue;
    if (t === null) ((t = Ao()), (Te.updateQueue = t), (t.events = [e]));
    else {
      var n = t.events;
      n === null ? (t.events = [e]) : n.push(e);
    }
  }
  function lm(e) {
    var t = dt().memoizedState;
    return (
      fb({ ref: t, nextImpl: e }),
      function () {
        if ((Ye & 2) !== 0) throw Error(o(440));
        return t.impl.apply(void 0, arguments);
      }
    );
  }
  function rm(e, t) {
    return Eo(4, 2, e, t);
  }
  function om(e, t) {
    return Eo(4, 4, e, t);
  }
  function sm(e, t) {
    if (typeof t == "function") {
      e = e();
      var n = t(e);
      return function () {
        typeof n == "function" ? n() : t(null);
      };
    }
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function um(e, t, n) {
    ((n = n != null ? n.concat([e]) : null), Eo(4, 4, sm.bind(null, t, e), n));
  }
  function ec() {}
  function cm(e, t) {
    var n = dt();
    t = t === void 0 ? null : t;
    var i = n.memoizedState;
    return t !== null && Gu(t, i[1]) ? i[0] : ((n.memoizedState = [e, t]), e);
  }
  function fm(e, t) {
    var n = dt();
    t = t === void 0 ? null : t;
    var i = n.memoizedState;
    if (t !== null && Gu(t, i[1])) return i[0];
    if (((i = e()), Ai)) {
      en(!0);
      try {
        e();
      } finally {
        en(!1);
      }
    }
    return ((n.memoizedState = [i, t]), i);
  }
  function tc(e, t, n) {
    return n === void 0 || ((sa & 1073741824) !== 0 && (Ue & 261930) === 0)
      ? (e.memoizedState = t)
      : ((e.memoizedState = n), (e = dg()), (Te.lanes |= e), (Ia |= e), n);
  }
  function dm(e, t, n, i) {
    return tn(n, t)
      ? n
      : el.current !== null
        ? ((e = tc(e, n, i)), tn(e, t) || (yt = !0), e)
        : (sa & 42) === 0 || ((sa & 1073741824) !== 0 && (Ue & 261930) === 0)
          ? ((yt = !0), (e.memoizedState = n))
          : ((e = dg()), (Te.lanes |= e), (Ia |= e), t);
  }
  function hm(e, t, n, i, s) {
    var c = D.p;
    D.p = c !== 0 && 8 > c ? c : 8;
    var h = O.T,
      y = {};
    ((O.T = y), ic(e, !1, t, n));
    try {
      var E = s(),
        V = O.S;
      if (
        (V !== null && V(y, E),
        E !== null && typeof E == "object" && typeof E.then == "function")
      ) {
        var W = rb(E, i);
        ar(e, t, W, sn(e));
      } else ar(e, t, i, sn(e));
    } catch (ne) {
      ar(e, t, { then: function () {}, status: "rejected", reason: ne }, sn());
    } finally {
      ((D.p = c),
        h !== null && y.types !== null && (h.types = y.types),
        (O.T = h));
    }
  }
  function db() {}
  function nc(e, t, n, i) {
    if (e.tag !== 5) throw Error(o(476));
    var s = mm(e).queue;
    hm(
      e,
      s,
      t,
      z,
      n === null
        ? db
        : function () {
            return (gm(e), n(i));
          }
    );
  }
  function mm(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: z,
      baseState: z,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ua,
        lastRenderedState: z,
      },
      next: null,
    };
    var n = {};
    return (
      (t.next = {
        memoizedState: n,
        baseState: n,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: ua,
          lastRenderedState: n,
        },
        next: null,
      }),
      (e.memoizedState = t),
      (e = e.alternate),
      e !== null && (e.memoizedState = t),
      t
    );
  }
  function gm(e) {
    var t = mm(e);
    (t.next === null && (t = e.alternate.memoizedState),
      ar(e, t.next.queue, {}, sn()));
  }
  function ac() {
    return Mt(br);
  }
  function pm() {
    return dt().memoizedState;
  }
  function ym() {
    return dt().memoizedState;
  }
  function hb(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var n = sn();
          e = La(n);
          var i = Ua(t, e, n);
          (i !== null && (Ft(i, t, n), $l(i, t, n)),
            (t = { cache: Du() }),
            (e.payload = t));
          return;
      }
      t = t.return;
    }
  }
  function mb(e, t, n) {
    var i = sn();
    ((n = {
      lane: i,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      So(e)
        ? Am(t, n)
        : ((n = _u(e, t, n, i)), n !== null && (Ft(n, e, i), bm(n, t, i))));
  }
  function vm(e, t, n) {
    var i = sn();
    ar(e, t, n, i);
  }
  function ar(e, t, n, i) {
    var s = {
      lane: i,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (So(e)) Am(t, s);
    else {
      var c = e.alternate;
      if (
        e.lanes === 0 &&
        (c === null || c.lanes === 0) &&
        ((c = t.lastRenderedReducer), c !== null)
      )
        try {
          var h = t.lastRenderedState,
            y = c(h, n);
          if (((s.hasEagerState = !0), (s.eagerState = y), tn(y, h)))
            return (ao(e, t, s, 0), We === null && no(), !1);
        } catch {
        } finally {
        }
      if (((n = _u(e, t, s, i)), n !== null))
        return (Ft(n, e, i), bm(n, t, i), !0);
    }
    return !1;
  }
  function ic(e, t, n, i) {
    if (
      ((i = {
        lane: 2,
        revertLane: Lc(),
        gesture: null,
        action: i,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      So(e))
    ) {
      if (t) throw Error(o(479));
    } else ((t = _u(e, n, i, 2)), t !== null && Ft(t, e, 2));
  }
  function So(e) {
    var t = e.alternate;
    return e === Te || (t !== null && t === Te);
  }
  function Am(e, t) {
    tl = yo = !0;
    var n = e.pending;
    (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
      (e.pending = t));
  }
  function bm(e, t, n) {
    if ((n & 4194048) !== 0) {
      var i = t.lanes;
      ((i &= e.pendingLanes), (n |= i), (t.lanes = n), Gr(e, n));
    }
  }
  var ir = {
    readContext: Mt,
    use: bo,
    useCallback: st,
    useContext: st,
    useEffect: st,
    useImperativeHandle: st,
    useLayoutEffect: st,
    useInsertionEffect: st,
    useMemo: st,
    useReducer: st,
    useRef: st,
    useState: st,
    useDebugValue: st,
    useDeferredValue: st,
    useTransition: st,
    useSyncExternalStore: st,
    useId: st,
    useHostTransitionStatus: st,
    useFormState: st,
    useActionState: st,
    useOptimistic: st,
    useMemoCache: st,
    useCacheRefresh: st,
  };
  ir.useEffectEvent = st;
  var _m = {
      readContext: Mt,
      use: bo,
      useCallback: function (e, t) {
        return ((Qt().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: Mt,
      useEffect: im,
      useImperativeHandle: function (e, t, n) {
        ((n = n != null ? n.concat([e]) : null),
          xo(4194308, 4, sm.bind(null, t, e), n));
      },
      useLayoutEffect: function (e, t) {
        return xo(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        xo(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = Qt();
        t = t === void 0 ? null : t;
        var i = e();
        if (Ai) {
          en(!0);
          try {
            e();
          } finally {
            en(!1);
          }
        }
        return ((n.memoizedState = [i, t]), i);
      },
      useReducer: function (e, t, n) {
        var i = Qt();
        if (n !== void 0) {
          var s = n(t);
          if (Ai) {
            en(!0);
            try {
              n(t);
            } finally {
              en(!1);
            }
          }
        } else s = t;
        return (
          (i.memoizedState = i.baseState = s),
          (e = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: s,
          }),
          (i.queue = e),
          (e = e.dispatch = mb.bind(null, Te, e)),
          [i.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = Qt();
        return ((e = { current: e }), (t.memoizedState = e));
      },
      useState: function (e) {
        e = Pu(e);
        var t = e.queue,
          n = vm.bind(null, Te, t);
        return ((t.dispatch = n), [e.memoizedState, n]);
      },
      useDebugValue: ec,
      useDeferredValue: function (e, t) {
        var n = Qt();
        return tc(n, e, t);
      },
      useTransition: function () {
        var e = Pu(!1);
        return (
          (e = hm.bind(null, Te, e.queue, !0, !1)),
          (Qt().memoizedState = e),
          [!1, e]
        );
      },
      useSyncExternalStore: function (e, t, n) {
        var i = Te,
          s = Qt();
        if (He) {
          if (n === void 0) throw Error(o(407));
          n = n();
        } else {
          if (((n = t()), We === null)) throw Error(o(349));
          (Ue & 127) !== 0 || Ih(i, t, n);
        }
        s.memoizedState = n;
        var c = { value: n, getSnapshot: t };
        return (
          (s.queue = c),
          im(Yh.bind(null, i, c, e), [e]),
          (i.flags |= 2048),
          al(9, { destroy: void 0 }, Gh.bind(null, i, c, n, t), null),
          n
        );
      },
      useId: function () {
        var e = Qt(),
          t = We.identifierPrefix;
        if (He) {
          var n = Gn,
            i = In;
          ((n = (i & ~(1 << (32 - Be(i) - 1))).toString(32) + n),
            (t = "_" + t + "R_" + n),
            (n = vo++),
            0 < n && (t += "H" + n.toString(32)),
            (t += "_"));
        } else ((n = ob++), (t = "_" + t + "r_" + n.toString(32) + "_"));
        return (e.memoizedState = t);
      },
      useHostTransitionStatus: ac,
      useFormState: Wh,
      useActionState: Wh,
      useOptimistic: function (e) {
        var t = Qt();
        t.memoizedState = t.baseState = e;
        var n = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (t.queue = n),
          (t = ic.bind(null, Te, !0, n)),
          (n.dispatch = t),
          [e, t]
        );
      },
      useMemoCache: Fu,
      useCacheRefresh: function () {
        return (Qt().memoizedState = hb.bind(null, Te));
      },
      useEffectEvent: function (e) {
        var t = Qt(),
          n = { impl: e };
        return (
          (t.memoizedState = n),
          function () {
            if ((Ye & 2) !== 0) throw Error(o(440));
            return n.impl.apply(void 0, arguments);
          }
        );
      },
    },
    lc = {
      readContext: Mt,
      use: bo,
      useCallback: cm,
      useContext: Mt,
      useEffect: Wu,
      useImperativeHandle: um,
      useInsertionEffect: rm,
      useLayoutEffect: om,
      useMemo: fm,
      useReducer: _o,
      useRef: am,
      useState: function () {
        return _o(ua);
      },
      useDebugValue: ec,
      useDeferredValue: function (e, t) {
        var n = dt();
        return dm(n, Je.memoizedState, e, t);
      },
      useTransition: function () {
        var e = _o(ua)[0],
          t = dt().memoizedState;
        return [typeof e == "boolean" ? e : nr(e), t];
      },
      useSyncExternalStore: jh,
      useId: pm,
      useHostTransitionStatus: ac,
      useFormState: em,
      useActionState: em,
      useOptimistic: function (e, t) {
        var n = dt();
        return Xh(n, Je, e, t);
      },
      useMemoCache: Fu,
      useCacheRefresh: ym,
    };
  lc.useEffectEvent = lm;
  var xm = {
    readContext: Mt,
    use: bo,
    useCallback: cm,
    useContext: Mt,
    useEffect: Wu,
    useImperativeHandle: um,
    useInsertionEffect: rm,
    useLayoutEffect: om,
    useMemo: fm,
    useReducer: Ju,
    useRef: am,
    useState: function () {
      return Ju(ua);
    },
    useDebugValue: ec,
    useDeferredValue: function (e, t) {
      var n = dt();
      return Je === null ? tc(n, e, t) : dm(n, Je.memoizedState, e, t);
    },
    useTransition: function () {
      var e = Ju(ua)[0],
        t = dt().memoizedState;
      return [typeof e == "boolean" ? e : nr(e), t];
    },
    useSyncExternalStore: jh,
    useId: pm,
    useHostTransitionStatus: ac,
    useFormState: nm,
    useActionState: nm,
    useOptimistic: function (e, t) {
      var n = dt();
      return Je !== null
        ? Xh(n, Je, e, t)
        : ((n.baseState = e), [e, n.queue.dispatch]);
    },
    useMemoCache: Fu,
    useCacheRefresh: ym,
  };
  xm.useEffectEvent = lm;
  function rc(e, t, n, i) {
    ((t = e.memoizedState),
      (n = n(i, t)),
      (n = n == null ? t : A({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n));
  }
  var oc = {
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var i = sn(),
        s = La(i);
      ((s.payload = t),
        n != null && (s.callback = n),
        (t = Ua(e, s, i)),
        t !== null && (Ft(t, e, i), $l(t, e, i)));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var i = sn(),
        s = La(i);
      ((s.tag = 1),
        (s.payload = t),
        n != null && (s.callback = n),
        (t = Ua(e, s, i)),
        t !== null && (Ft(t, e, i), $l(t, e, i)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = sn(),
        i = La(n);
      ((i.tag = 2),
        t != null && (i.callback = t),
        (t = Ua(e, i, n)),
        t !== null && (Ft(t, e, n), $l(t, e, n)));
    },
  };
  function Em(e, t, n, i, s, c, h) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(i, c, h)
        : t.prototype && t.prototype.isPureReactComponent
          ? !Yl(n, i) || !Yl(s, c)
          : !0
    );
  }
  function Sm(e, t, n, i) {
    ((e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(n, i),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(n, i),
      t.state !== e && oc.enqueueReplaceState(t, t.state, null));
  }
  function bi(e, t) {
    var n = t;
    if ("ref" in t) {
      n = {};
      for (var i in t) i !== "ref" && (n[i] = t[i]);
    }
    if ((e = e.defaultProps)) {
      n === t && (n = A({}, n));
      for (var s in e) n[s] === void 0 && (n[s] = e[s]);
    }
    return n;
  }
  function Cm(e) {
    to(e);
  }
  function wm(e) {
    console.error(e);
  }
  function Rm(e) {
    to(e);
  }
  function Co(e, t) {
    try {
      var n = e.onUncaughtError;
      n(t.value, { componentStack: t.stack });
    } catch (i) {
      setTimeout(function () {
        throw i;
      });
    }
  }
  function Tm(e, t, n) {
    try {
      var i = e.onCaughtError;
      i(n.value, {
        componentStack: n.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null,
      });
    } catch (s) {
      setTimeout(function () {
        throw s;
      });
    }
  }
  function sc(e, t, n) {
    return (
      (n = La(n)),
      (n.tag = 3),
      (n.payload = { element: null }),
      (n.callback = function () {
        Co(e, t);
      }),
      n
    );
  }
  function Om(e) {
    return ((e = La(e)), (e.tag = 3), e);
  }
  function zm(e, t, n, i) {
    var s = n.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var c = i.value;
      ((e.payload = function () {
        return s(c);
      }),
        (e.callback = function () {
          Tm(t, n, i);
        }));
    }
    var h = n.stateNode;
    h !== null &&
      typeof h.componentDidCatch == "function" &&
      (e.callback = function () {
        (Tm(t, n, i),
          typeof s != "function" &&
            (Ga === null ? (Ga = new Set([this])) : Ga.add(this)));
        var y = i.stack;
        this.componentDidCatch(i.value, {
          componentStack: y !== null ? y : "",
        });
      });
  }
  function gb(e, t, n, i, s) {
    if (
      ((n.flags |= 32768),
      i !== null && typeof i == "object" && typeof i.then == "function")
    ) {
      if (
        ((t = n.alternate),
        t !== null && Zi(t, n, s, !0),
        (n = an.current),
        n !== null)
      ) {
        switch (n.tag) {
          case 31:
          case 13:
            return (
              En === null ? Uo() : n.alternate === null && ut === 0 && (ut = 3),
              (n.flags &= -257),
              (n.flags |= 65536),
              (n.lanes = s),
              i === fo
                ? (n.flags |= 16384)
                : ((t = n.updateQueue),
                  t === null ? (n.updateQueue = new Set([i])) : t.add(i),
                  Bc(e, i, s)),
              !1
            );
          case 22:
            return (
              (n.flags |= 65536),
              i === fo
                ? (n.flags |= 16384)
                : ((t = n.updateQueue),
                  t === null
                    ? ((t = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([i]),
                      }),
                      (n.updateQueue = t))
                    : ((n = t.retryQueue),
                      n === null ? (t.retryQueue = new Set([i])) : n.add(i)),
                  Bc(e, i, s)),
              !1
            );
        }
        throw Error(o(435, n.tag));
      }
      return (Bc(e, i, s), Uo(), !1);
    }
    if (He)
      return (
        (t = an.current),
        t !== null
          ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = s),
            i !== Ru && ((e = Error(o(422), { cause: i })), Xl(An(e, n))))
          : (i !== Ru && ((t = Error(o(423), { cause: i })), Xl(An(t, n))),
            (e = e.current.alternate),
            (e.flags |= 65536),
            (s &= -s),
            (e.lanes |= s),
            (i = An(i, n)),
            (s = sc(e.stateNode, i, s)),
            Vu(e, s),
            ut !== 4 && (ut = 2)),
        !1
      );
    var c = Error(o(520), { cause: i });
    if (
      ((c = An(c, n)),
      dr === null ? (dr = [c]) : dr.push(c),
      ut !== 4 && (ut = 2),
      t === null)
    )
      return !0;
    ((i = An(i, n)), (n = t));
    do {
      switch (n.tag) {
        case 3:
          return (
            (n.flags |= 65536),
            (e = s & -s),
            (n.lanes |= e),
            (e = sc(n.stateNode, i, e)),
            Vu(n, e),
            !1
          );
        case 1:
          if (
            ((t = n.type),
            (c = n.stateNode),
            (n.flags & 128) === 0 &&
              (typeof t.getDerivedStateFromError == "function" ||
                (c !== null &&
                  typeof c.componentDidCatch == "function" &&
                  (Ga === null || !Ga.has(c)))))
          )
            return (
              (n.flags |= 65536),
              (s &= -s),
              (n.lanes |= s),
              (s = Om(s)),
              zm(s, e, n, i),
              Vu(n, s),
              !1
            );
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var uc = Error(o(461)),
    yt = !1;
  function Dt(e, t, n, i) {
    t.child = e === null ? Nh(t, null, n, i) : vi(t, e.child, n, i);
  }
  function Mm(e, t, n, i, s) {
    n = n.render;
    var c = t.ref;
    if ("ref" in i) {
      var h = {};
      for (var y in i) y !== "ref" && (h[y] = i[y]);
    } else h = i;
    return (
      mi(t),
      (i = Yu(e, t, n, h, c, s)),
      (y = qu()),
      e !== null && !yt
        ? (Ku(e, t, s), ca(e, t, s))
        : (He && y && Cu(t), (t.flags |= 1), Dt(e, t, i, s), t.child)
    );
  }
  function Dm(e, t, n, i, s) {
    if (e === null) {
      var c = n.type;
      return typeof c == "function" &&
        !xu(c) &&
        c.defaultProps === void 0 &&
        n.compare === null
        ? ((t.tag = 15), (t.type = c), Bm(e, t, c, i, s))
        : ((e = lo(n.type, null, i, t, t.mode, s)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((c = e.child), !yc(e, s))) {
      var h = c.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : Yl), n(h, i) && e.ref === t.ref)
      )
        return ca(e, t, s);
    }
    return (
      (t.flags |= 1),
      (e = ia(c, i)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function Bm(e, t, n, i, s) {
    if (e !== null) {
      var c = e.memoizedProps;
      if (Yl(c, i) && e.ref === t.ref)
        if (((yt = !1), (t.pendingProps = i = c), yc(e, s)))
          (e.flags & 131072) !== 0 && (yt = !0);
        else return ((t.lanes = e.lanes), ca(e, t, s));
    }
    return cc(e, t, n, i, s);
  }
  function Nm(e, t, n, i) {
    var s = i.children,
      c = e !== null ? e.memoizedState : null;
    if (
      (e === null &&
        t.stateNode === null &&
        (t.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      i.mode === "hidden")
    ) {
      if ((t.flags & 128) !== 0) {
        if (((c = c !== null ? c.baseLanes | n : n), e !== null)) {
          for (i = t.child = e.child, s = 0; i !== null; )
            ((s = s | i.lanes | i.childLanes), (i = i.sibling));
          i = s & ~c;
        } else ((i = 0), (t.child = null));
        return km(e, t, c, n, i);
      }
      if ((n & 536870912) !== 0)
        ((t.memoizedState = { baseLanes: 0, cachePool: null }),
          e !== null && uo(t, c !== null ? c.cachePool : null),
          c !== null ? Uh(t, c) : Hu(),
          Vh(t));
      else
        return (
          (i = t.lanes = 536870912),
          km(e, t, c !== null ? c.baseLanes | n : n, n, i)
        );
    } else
      c !== null
        ? (uo(t, c.cachePool), Uh(t, c), Qa(), (t.memoizedState = null))
        : (e !== null && uo(t, null), Hu(), Qa());
    return (Dt(e, t, s, n), t.child);
  }
  function lr(e, t) {
    return (
      (e !== null && e.tag === 22) ||
        t.stateNode !== null ||
        (t.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      t.sibling
    );
  }
  function km(e, t, n, i, s) {
    var c = Nu();
    return (
      (c = c === null ? null : { parent: gt._currentValue, pool: c }),
      (t.memoizedState = { baseLanes: n, cachePool: c }),
      e !== null && uo(t, null),
      Hu(),
      Vh(t),
      e !== null && Zi(e, t, i, !0),
      (t.childLanes = s),
      null
    );
  }
  function wo(e, t) {
    return (
      (t = To({ mode: t.mode, children: t.children }, e.mode)),
      (t.ref = e.ref),
      (e.child = t),
      (t.return = e),
      t
    );
  }
  function Lm(e, t, n) {
    return (
      vi(t, e.child, null, n),
      (e = wo(t, t.pendingProps)),
      (e.flags |= 2),
      ln(t),
      (t.memoizedState = null),
      e
    );
  }
  function pb(e, t, n) {
    var i = t.pendingProps,
      s = (t.flags & 128) !== 0;
    if (((t.flags &= -129), e === null)) {
      if (He) {
        if (i.mode === "hidden")
          return ((e = wo(t, i)), (t.lanes = 536870912), lr(null, e));
        if (
          (Iu(t),
          (e = at)
            ? ((e = Fg(e, xn)),
              (e = e !== null && e.data === "&" ? e : null),
              e !== null &&
                ((t.memoizedState = {
                  dehydrated: e,
                  treeContext: Ma !== null ? { id: In, overflow: Gn } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (n = Ah(e)),
                (n.return = t),
                (t.child = n),
                (zt = t),
                (at = null)))
            : (e = null),
          e === null)
        )
          throw Ba(t);
        return ((t.lanes = 536870912), null);
      }
      return wo(t, i);
    }
    var c = e.memoizedState;
    if (c !== null) {
      var h = c.dehydrated;
      if ((Iu(t), s))
        if (t.flags & 256) ((t.flags &= -257), (t = Lm(e, t, n)));
        else if (t.memoizedState !== null)
          ((t.child = e.child), (t.flags |= 128), (t = null));
        else throw Error(o(558));
      else if (
        (yt || Zi(e, t, n, !1), (s = (n & e.childLanes) !== 0), yt || s)
      ) {
        if (
          ((i = We),
          i !== null && ((h = Ta(i, n)), h !== 0 && h !== c.retryLane))
        )
          throw ((c.retryLane = h), ci(e, h), Ft(i, e, h), uc);
        (Uo(), (t = Lm(e, t, n)));
      } else
        ((e = c.treeContext),
          (at = Sn(h.nextSibling)),
          (zt = t),
          (He = !0),
          (Da = null),
          (xn = !1),
          e !== null && xh(t, e),
          (t = wo(t, i)),
          (t.flags |= 4096));
      return t;
    }
    return (
      (e = ia(e.child, { mode: i.mode, children: i.children })),
      (e.ref = t.ref),
      (t.child = e),
      (e.return = t),
      e
    );
  }
  function Ro(e, t) {
    var n = t.ref;
    if (n === null) e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof n != "function" && typeof n != "object") throw Error(o(284));
      (e === null || e.ref !== n) && (t.flags |= 4194816);
    }
  }
  function cc(e, t, n, i, s) {
    return (
      mi(t),
      (n = Yu(e, t, n, i, void 0, s)),
      (i = qu()),
      e !== null && !yt
        ? (Ku(e, t, s), ca(e, t, s))
        : (He && i && Cu(t), (t.flags |= 1), Dt(e, t, n, s), t.child)
    );
  }
  function Um(e, t, n, i, s, c) {
    return (
      mi(t),
      (t.updateQueue = null),
      (n = Hh(t, i, n, s)),
      Qh(e),
      (i = qu()),
      e !== null && !yt
        ? (Ku(e, t, c), ca(e, t, c))
        : (He && i && Cu(t), (t.flags |= 1), Dt(e, t, n, c), t.child)
    );
  }
  function Vm(e, t, n, i, s) {
    if ((mi(t), t.stateNode === null)) {
      var c = qi,
        h = n.contextType;
      (typeof h == "object" && h !== null && (c = Mt(h)),
        (c = new n(i, c)),
        (t.memoizedState =
          c.state !== null && c.state !== void 0 ? c.state : null),
        (c.updater = oc),
        (t.stateNode = c),
        (c._reactInternals = t),
        (c = t.stateNode),
        (c.props = i),
        (c.state = t.memoizedState),
        (c.refs = {}),
        Lu(t),
        (h = n.contextType),
        (c.context = typeof h == "object" && h !== null ? Mt(h) : qi),
        (c.state = t.memoizedState),
        (h = n.getDerivedStateFromProps),
        typeof h == "function" && (rc(t, n, h, i), (c.state = t.memoizedState)),
        typeof n.getDerivedStateFromProps == "function" ||
          typeof c.getSnapshotBeforeUpdate == "function" ||
          (typeof c.UNSAFE_componentWillMount != "function" &&
            typeof c.componentWillMount != "function") ||
          ((h = c.state),
          typeof c.componentWillMount == "function" && c.componentWillMount(),
          typeof c.UNSAFE_componentWillMount == "function" &&
            c.UNSAFE_componentWillMount(),
          h !== c.state && oc.enqueueReplaceState(c, c.state, null),
          er(t, i, c, s),
          Wl(),
          (c.state = t.memoizedState)),
        typeof c.componentDidMount == "function" && (t.flags |= 4194308),
        (i = !0));
    } else if (e === null) {
      c = t.stateNode;
      var y = t.memoizedProps,
        E = bi(n, y);
      c.props = E;
      var V = c.context,
        W = n.contextType;
      ((h = qi), typeof W == "object" && W !== null && (h = Mt(W)));
      var ne = n.getDerivedStateFromProps;
      ((W =
        typeof ne == "function" ||
        typeof c.getSnapshotBeforeUpdate == "function"),
        (y = t.pendingProps !== y),
        W ||
          (typeof c.UNSAFE_componentWillReceiveProps != "function" &&
            typeof c.componentWillReceiveProps != "function") ||
          ((y || V !== h) && Sm(t, c, i, h)),
        (ka = !1));
      var G = t.memoizedState;
      ((c.state = G),
        er(t, i, c, s),
        Wl(),
        (V = t.memoizedState),
        y || G !== V || ka
          ? (typeof ne == "function" &&
              (rc(t, n, ne, i), (V = t.memoizedState)),
            (E = ka || Em(t, n, E, i, G, V, h))
              ? (W ||
                  (typeof c.UNSAFE_componentWillMount != "function" &&
                    typeof c.componentWillMount != "function") ||
                  (typeof c.componentWillMount == "function" &&
                    c.componentWillMount(),
                  typeof c.UNSAFE_componentWillMount == "function" &&
                    c.UNSAFE_componentWillMount()),
                typeof c.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof c.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = i),
                (t.memoizedState = V)),
            (c.props = i),
            (c.state = V),
            (c.context = h),
            (i = E))
          : (typeof c.componentDidMount == "function" && (t.flags |= 4194308),
            (i = !1)));
    } else {
      ((c = t.stateNode),
        Uu(e, t),
        (h = t.memoizedProps),
        (W = bi(n, h)),
        (c.props = W),
        (ne = t.pendingProps),
        (G = c.context),
        (V = n.contextType),
        (E = qi),
        typeof V == "object" && V !== null && (E = Mt(V)),
        (y = n.getDerivedStateFromProps),
        (V =
          typeof y == "function" ||
          typeof c.getSnapshotBeforeUpdate == "function") ||
          (typeof c.UNSAFE_componentWillReceiveProps != "function" &&
            typeof c.componentWillReceiveProps != "function") ||
          ((h !== ne || G !== E) && Sm(t, c, i, E)),
        (ka = !1),
        (G = t.memoizedState),
        (c.state = G),
        er(t, i, c, s),
        Wl());
      var X = t.memoizedState;
      h !== ne ||
      G !== X ||
      ka ||
      (e !== null && e.dependencies !== null && oo(e.dependencies))
        ? (typeof y == "function" && (rc(t, n, y, i), (X = t.memoizedState)),
          (W =
            ka ||
            Em(t, n, W, i, G, X, E) ||
            (e !== null && e.dependencies !== null && oo(e.dependencies)))
            ? (V ||
                (typeof c.UNSAFE_componentWillUpdate != "function" &&
                  typeof c.componentWillUpdate != "function") ||
                (typeof c.componentWillUpdate == "function" &&
                  c.componentWillUpdate(i, X, E),
                typeof c.UNSAFE_componentWillUpdate == "function" &&
                  c.UNSAFE_componentWillUpdate(i, X, E)),
              typeof c.componentDidUpdate == "function" && (t.flags |= 4),
              typeof c.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof c.componentDidUpdate != "function" ||
                (h === e.memoizedProps && G === e.memoizedState) ||
                (t.flags |= 4),
              typeof c.getSnapshotBeforeUpdate != "function" ||
                (h === e.memoizedProps && G === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = i),
              (t.memoizedState = X)),
          (c.props = i),
          (c.state = X),
          (c.context = E),
          (i = W))
        : (typeof c.componentDidUpdate != "function" ||
            (h === e.memoizedProps && G === e.memoizedState) ||
            (t.flags |= 4),
          typeof c.getSnapshotBeforeUpdate != "function" ||
            (h === e.memoizedProps && G === e.memoizedState) ||
            (t.flags |= 1024),
          (i = !1));
    }
    return (
      (c = i),
      Ro(e, t),
      (i = (t.flags & 128) !== 0),
      c || i
        ? ((c = t.stateNode),
          (n =
            i && typeof n.getDerivedStateFromError != "function"
              ? null
              : c.render()),
          (t.flags |= 1),
          e !== null && i
            ? ((t.child = vi(t, e.child, null, s)),
              (t.child = vi(t, null, n, s)))
            : Dt(e, t, n, s),
          (t.memoizedState = c.state),
          (e = t.child))
        : (e = ca(e, t, s)),
      e
    );
  }
  function Qm(e, t, n, i) {
    return (di(), (t.flags |= 256), Dt(e, t, n, i), t.child);
  }
  var fc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function dc(e) {
    return { baseLanes: e, cachePool: Th() };
  }
  function hc(e, t, n) {
    return ((e = e !== null ? e.childLanes & ~n : 0), t && (e |= on), e);
  }
  function Hm(e, t, n) {
    var i = t.pendingProps,
      s = !1,
      c = (t.flags & 128) !== 0,
      h;
    if (
      ((h = c) ||
        (h =
          e !== null && e.memoizedState === null ? !1 : (ft.current & 2) !== 0),
      h && ((s = !0), (t.flags &= -129)),
      (h = (t.flags & 32) !== 0),
      (t.flags &= -33),
      e === null)
    ) {
      if (He) {
        if (
          (s ? Va(t) : Qa(),
          (e = at)
            ? ((e = Fg(e, xn)),
              (e = e !== null && e.data !== "&" ? e : null),
              e !== null &&
                ((t.memoizedState = {
                  dehydrated: e,
                  treeContext: Ma !== null ? { id: In, overflow: Gn } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (n = Ah(e)),
                (n.return = t),
                (t.child = n),
                (zt = t),
                (at = null)))
            : (e = null),
          e === null)
        )
          throw Ba(t);
        return (Zc(e) ? (t.lanes = 32) : (t.lanes = 536870912), null);
      }
      var y = i.children;
      return (
        (i = i.fallback),
        s
          ? (Qa(),
            (s = t.mode),
            (y = To({ mode: "hidden", children: y }, s)),
            (i = fi(i, s, n, null)),
            (y.return = t),
            (i.return = t),
            (y.sibling = i),
            (t.child = y),
            (i = t.child),
            (i.memoizedState = dc(n)),
            (i.childLanes = hc(e, h, n)),
            (t.memoizedState = fc),
            lr(null, i))
          : (Va(t), mc(t, y))
      );
    }
    var E = e.memoizedState;
    if (E !== null && ((y = E.dehydrated), y !== null)) {
      if (c)
        t.flags & 256
          ? (Va(t), (t.flags &= -257), (t = gc(e, t, n)))
          : t.memoizedState !== null
            ? (Qa(), (t.child = e.child), (t.flags |= 128), (t = null))
            : (Qa(),
              (y = i.fallback),
              (s = t.mode),
              (i = To({ mode: "visible", children: i.children }, s)),
              (y = fi(y, s, n, null)),
              (y.flags |= 2),
              (i.return = t),
              (y.return = t),
              (i.sibling = y),
              (t.child = i),
              vi(t, e.child, null, n),
              (i = t.child),
              (i.memoizedState = dc(n)),
              (i.childLanes = hc(e, h, n)),
              (t.memoizedState = fc),
              (t = lr(null, i)));
      else if ((Va(t), Zc(y))) {
        if (((h = y.nextSibling && y.nextSibling.dataset), h)) var V = h.dgst;
        ((h = V),
          (i = Error(o(419))),
          (i.stack = ""),
          (i.digest = h),
          Xl({ value: i, source: null, stack: null }),
          (t = gc(e, t, n)));
      } else if (
        (yt || Zi(e, t, n, !1), (h = (n & e.childLanes) !== 0), yt || h)
      ) {
        if (
          ((h = We),
          h !== null && ((i = Ta(h, n)), i !== 0 && i !== E.retryLane))
        )
          throw ((E.retryLane = i), ci(e, i), Ft(h, e, i), uc);
        (Fc(y) || Uo(), (t = gc(e, t, n)));
      } else
        Fc(y)
          ? ((t.flags |= 192), (t.child = e.child), (t = null))
          : ((e = E.treeContext),
            (at = Sn(y.nextSibling)),
            (zt = t),
            (He = !0),
            (Da = null),
            (xn = !1),
            e !== null && xh(t, e),
            (t = mc(t, i.children)),
            (t.flags |= 4096));
      return t;
    }
    return s
      ? (Qa(),
        (y = i.fallback),
        (s = t.mode),
        (E = e.child),
        (V = E.sibling),
        (i = ia(E, { mode: "hidden", children: i.children })),
        (i.subtreeFlags = E.subtreeFlags & 65011712),
        V !== null ? (y = ia(V, y)) : ((y = fi(y, s, n, null)), (y.flags |= 2)),
        (y.return = t),
        (i.return = t),
        (i.sibling = y),
        (t.child = i),
        lr(null, i),
        (i = t.child),
        (y = e.child.memoizedState),
        y === null
          ? (y = dc(n))
          : ((s = y.cachePool),
            s !== null
              ? ((E = gt._currentValue),
                (s = s.parent !== E ? { parent: E, pool: E } : s))
              : (s = Th()),
            (y = { baseLanes: y.baseLanes | n, cachePool: s })),
        (i.memoizedState = y),
        (i.childLanes = hc(e, h, n)),
        (t.memoizedState = fc),
        lr(e.child, i))
      : (Va(t),
        (n = e.child),
        (e = n.sibling),
        (n = ia(n, { mode: "visible", children: i.children })),
        (n.return = t),
        (n.sibling = null),
        e !== null &&
          ((h = t.deletions),
          h === null ? ((t.deletions = [e]), (t.flags |= 16)) : h.push(e)),
        (t.child = n),
        (t.memoizedState = null),
        n);
  }
  function mc(e, t) {
    return (
      (t = To({ mode: "visible", children: t }, e.mode)),
      (t.return = e),
      (e.child = t)
    );
  }
  function To(e, t) {
    return ((e = nn(22, e, null, t)), (e.lanes = 0), e);
  }
  function gc(e, t, n) {
    return (
      vi(t, e.child, null, n),
      (e = mc(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function jm(e, t, n) {
    e.lanes |= t;
    var i = e.alternate;
    (i !== null && (i.lanes |= t), zu(e.return, t, n));
  }
  function pc(e, t, n, i, s, c) {
    var h = e.memoizedState;
    h === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: i,
          tail: n,
          tailMode: s,
          treeForkCount: c,
        })
      : ((h.isBackwards = t),
        (h.rendering = null),
        (h.renderingStartTime = 0),
        (h.last = i),
        (h.tail = n),
        (h.tailMode = s),
        (h.treeForkCount = c));
  }
  function Im(e, t, n) {
    var i = t.pendingProps,
      s = i.revealOrder,
      c = i.tail;
    i = i.children;
    var h = ft.current,
      y = (h & 2) !== 0;
    if (
      (y ? ((h = (h & 1) | 2), (t.flags |= 128)) : (h &= 1),
      P(ft, h),
      Dt(e, t, i, n),
      (i = He ? Kl : 0),
      !y && e !== null && (e.flags & 128) !== 0)
    )
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && jm(e, n, t);
        else if (e.tag === 19) jm(e, n, t);
        else if (e.child !== null) {
          ((e.child.return = e), (e = e.child));
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        ((e.sibling.return = e.return), (e = e.sibling));
      }
    switch (s) {
      case "forwards":
        for (n = t.child, s = null; n !== null; )
          ((e = n.alternate),
            e !== null && po(e) === null && (s = n),
            (n = n.sibling));
        ((n = s),
          n === null
            ? ((s = t.child), (t.child = null))
            : ((s = n.sibling), (n.sibling = null)),
          pc(t, !1, s, n, c, i));
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (n = null, s = t.child, t.child = null; s !== null; ) {
          if (((e = s.alternate), e !== null && po(e) === null)) {
            t.child = s;
            break;
          }
          ((e = s.sibling), (s.sibling = n), (n = s), (s = e));
        }
        pc(t, !0, n, null, c, i);
        break;
      case "together":
        pc(t, !1, null, null, void 0, i);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function ca(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (Ia |= t.lanes),
      (n & t.childLanes) === 0)
    )
      if (e !== null) {
        if ((Zi(e, t, n, !1), (n & t.childLanes) === 0)) return null;
      } else return null;
    if (e !== null && t.child !== e.child) throw Error(o(153));
    if (t.child !== null) {
      for (
        e = t.child, n = ia(e, e.pendingProps), t.child = n, n.return = t;
        e.sibling !== null;

      )
        ((e = e.sibling),
          (n = n.sibling = ia(e, e.pendingProps)),
          (n.return = t));
      n.sibling = null;
    }
    return t.child;
  }
  function yc(e, t) {
    return (e.lanes & t) !== 0
      ? !0
      : ((e = e.dependencies), !!(e !== null && oo(e)));
  }
  function yb(e, t, n) {
    switch (t.tag) {
      case 3:
        (_e(t, t.stateNode.containerInfo),
          Na(t, gt, e.memoizedState.cache),
          di());
        break;
      case 27:
      case 5:
        Ee(t);
        break;
      case 4:
        _e(t, t.stateNode.containerInfo);
        break;
      case 10:
        Na(t, t.type, t.memoizedProps.value);
        break;
      case 31:
        if (t.memoizedState !== null) return ((t.flags |= 128), Iu(t), null);
        break;
      case 13:
        var i = t.memoizedState;
        if (i !== null)
          return i.dehydrated !== null
            ? (Va(t), (t.flags |= 128), null)
            : (n & t.child.childLanes) !== 0
              ? Hm(e, t, n)
              : (Va(t), (e = ca(e, t, n)), e !== null ? e.sibling : null);
        Va(t);
        break;
      case 19:
        var s = (e.flags & 128) !== 0;
        if (
          ((i = (n & t.childLanes) !== 0),
          i || (Zi(e, t, n, !1), (i = (n & t.childLanes) !== 0)),
          s)
        ) {
          if (i) return Im(e, t, n);
          t.flags |= 128;
        }
        if (
          ((s = t.memoizedState),
          s !== null &&
            ((s.rendering = null), (s.tail = null), (s.lastEffect = null)),
          P(ft, ft.current),
          i)
        )
          break;
        return null;
      case 22:
        return ((t.lanes = 0), Nm(e, t, n, t.pendingProps));
      case 24:
        Na(t, gt, e.memoizedState.cache);
    }
    return ca(e, t, n);
  }
  function Gm(e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps) yt = !0;
      else {
        if (!yc(e, n) && (t.flags & 128) === 0) return ((yt = !1), yb(e, t, n));
        yt = (e.flags & 131072) !== 0;
      }
    else ((yt = !1), He && (t.flags & 1048576) !== 0 && _h(t, Kl, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        e: {
          var i = t.pendingProps;
          if (((e = pi(t.elementType)), (t.type = e), typeof e == "function"))
            xu(e)
              ? ((i = bi(e, i)), (t.tag = 1), (t = Vm(null, t, e, i, n)))
              : ((t.tag = 0), (t = cc(null, t, e, i, n)));
          else {
            if (e != null) {
              var s = e.$$typeof;
              if (s === j) {
                ((t.tag = 11), (t = Mm(null, t, e, i, n)));
                break e;
              } else if (s === K) {
                ((t.tag = 14), (t = Dm(null, t, e, i, n)));
                break e;
              }
            }
            throw ((t = te(e) || e), Error(o(306, t, "")));
          }
        }
        return t;
      case 0:
        return cc(e, t, t.type, t.pendingProps, n);
      case 1:
        return ((i = t.type), (s = bi(i, t.pendingProps)), Vm(e, t, i, s, n));
      case 3:
        e: {
          if ((_e(t, t.stateNode.containerInfo), e === null))
            throw Error(o(387));
          i = t.pendingProps;
          var c = t.memoizedState;
          ((s = c.element), Uu(e, t), er(t, i, null, n));
          var h = t.memoizedState;
          if (
            ((i = h.cache),
            Na(t, gt, i),
            i !== c.cache && Mu(t, [gt], n, !0),
            Wl(),
            (i = h.element),
            c.isDehydrated)
          )
            if (
              ((c = { element: i, isDehydrated: !1, cache: h.cache }),
              (t.updateQueue.baseState = c),
              (t.memoizedState = c),
              t.flags & 256)
            ) {
              t = Qm(e, t, i, n);
              break e;
            } else if (i !== s) {
              ((s = An(Error(o(424)), t)), Xl(s), (t = Qm(e, t, i, n)));
              break e;
            } else {
              switch (((e = t.stateNode.containerInfo), e.nodeType)) {
                case 9:
                  e = e.body;
                  break;
                default:
                  e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
              }
              for (
                at = Sn(e.firstChild),
                  zt = t,
                  He = !0,
                  Da = null,
                  xn = !0,
                  n = Nh(t, null, i, n),
                  t.child = n;
                n;

              )
                ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
            }
          else {
            if ((di(), i === s)) {
              t = ca(e, t, n);
              break e;
            }
            Dt(e, t, i, n);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          Ro(e, t),
          e === null
            ? (n = ep(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = n)
              : He ||
                ((n = t.type),
                (e = t.pendingProps),
                (i = Yo(q.current).createElement(n)),
                (i[Ot] = t),
                (i[It] = e),
                Bt(i, n, e),
                wt(i),
                (t.stateNode = i))
            : (t.memoizedState = ep(
                t.type,
                e.memoizedProps,
                t.pendingProps,
                e.memoizedState
              )),
          null
        );
      case 27:
        return (
          Ee(t),
          e === null &&
            He &&
            ((i = t.stateNode = Pg(t.type, t.pendingProps, q.current)),
            (zt = t),
            (xn = !0),
            (s = at),
            Xa(t.type) ? ((Jc = s), (at = Sn(i.firstChild))) : (at = s)),
          Dt(e, t, t.pendingProps.children, n),
          Ro(e, t),
          e === null && (t.flags |= 4194304),
          t.child
        );
      case 5:
        return (
          e === null &&
            He &&
            ((s = i = at) &&
              ((i = Xb(i, t.type, t.pendingProps, xn)),
              i !== null
                ? ((t.stateNode = i),
                  (zt = t),
                  (at = Sn(i.firstChild)),
                  (xn = !1),
                  (s = !0))
                : (s = !1)),
            s || Ba(t)),
          Ee(t),
          (s = t.type),
          (c = t.pendingProps),
          (h = e !== null ? e.memoizedProps : null),
          (i = c.children),
          qc(s, c) ? (i = null) : h !== null && qc(s, h) && (t.flags |= 32),
          t.memoizedState !== null &&
            ((s = Yu(e, t, sb, null, null, n)), (br._currentValue = s)),
          Ro(e, t),
          Dt(e, t, i, n),
          t.child
        );
      case 6:
        return (
          e === null &&
            He &&
            ((e = n = at) &&
              ((n = Fb(n, t.pendingProps, xn)),
              n !== null
                ? ((t.stateNode = n), (zt = t), (at = null), (e = !0))
                : (e = !1)),
            e || Ba(t)),
          null
        );
      case 13:
        return Hm(e, t, n);
      case 4:
        return (
          _e(t, t.stateNode.containerInfo),
          (i = t.pendingProps),
          e === null ? (t.child = vi(t, null, i, n)) : Dt(e, t, i, n),
          t.child
        );
      case 11:
        return Mm(e, t, t.type, t.pendingProps, n);
      case 7:
        return (Dt(e, t, t.pendingProps, n), t.child);
      case 8:
        return (Dt(e, t, t.pendingProps.children, n), t.child);
      case 12:
        return (Dt(e, t, t.pendingProps.children, n), t.child);
      case 10:
        return (
          (i = t.pendingProps),
          Na(t, t.type, i.value),
          Dt(e, t, i.children, n),
          t.child
        );
      case 9:
        return (
          (s = t.type._context),
          (i = t.pendingProps.children),
          mi(t),
          (s = Mt(s)),
          (i = i(s)),
          (t.flags |= 1),
          Dt(e, t, i, n),
          t.child
        );
      case 14:
        return Dm(e, t, t.type, t.pendingProps, n);
      case 15:
        return Bm(e, t, t.type, t.pendingProps, n);
      case 19:
        return Im(e, t, n);
      case 31:
        return pb(e, t, n);
      case 22:
        return Nm(e, t, n, t.pendingProps);
      case 24:
        return (
          mi(t),
          (i = Mt(gt)),
          e === null
            ? ((s = Nu()),
              s === null &&
                ((s = We),
                (c = Du()),
                (s.pooledCache = c),
                c.refCount++,
                c !== null && (s.pooledCacheLanes |= n),
                (s = c)),
              (t.memoizedState = { parent: i, cache: s }),
              Lu(t),
              Na(t, gt, s))
            : ((e.lanes & n) !== 0 && (Uu(e, t), er(t, null, null, n), Wl()),
              (s = e.memoizedState),
              (c = t.memoizedState),
              s.parent !== i
                ? ((s = { parent: i, cache: i }),
                  (t.memoizedState = s),
                  t.lanes === 0 &&
                    (t.memoizedState = t.updateQueue.baseState = s),
                  Na(t, gt, i))
                : ((i = c.cache),
                  Na(t, gt, i),
                  i !== s.cache && Mu(t, [gt], n, !0))),
          Dt(e, t, t.pendingProps.children, n),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(o(156, t.tag));
  }
  function fa(e) {
    e.flags |= 4;
  }
  function vc(e, t, n, i, s) {
    if (((t = (e.mode & 32) !== 0) && (t = !1), t)) {
      if (((e.flags |= 16777216), (s & 335544128) === s))
        if (e.stateNode.complete) e.flags |= 8192;
        else if (pg()) e.flags |= 8192;
        else throw ((yi = fo), ku);
    } else e.flags &= -16777217;
  }
  function Ym(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (((e.flags |= 16777216), !lp(t)))
      if (pg()) e.flags |= 8192;
      else throw ((yi = fo), ku);
  }
  function Oo(e, t) {
    (t !== null && (e.flags |= 4),
      e.flags & 16384 &&
        ((t = e.tag !== 22 ? Hr() : 536870912), (e.lanes |= t), (ol |= t)));
  }
  function rr(e, t) {
    if (!He)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var n = null; t !== null; )
            (t.alternate !== null && (n = t), (t = t.sibling));
          n === null ? (e.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = e.tail;
          for (var i = null; n !== null; )
            (n.alternate !== null && (i = n), (n = n.sibling));
          i === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (i.sibling = null);
      }
  }
  function it(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      n = 0,
      i = 0;
    if (t)
      for (var s = e.child; s !== null; )
        ((n |= s.lanes | s.childLanes),
          (i |= s.subtreeFlags & 65011712),
          (i |= s.flags & 65011712),
          (s.return = e),
          (s = s.sibling));
    else
      for (s = e.child; s !== null; )
        ((n |= s.lanes | s.childLanes),
          (i |= s.subtreeFlags),
          (i |= s.flags),
          (s.return = e),
          (s = s.sibling));
    return ((e.subtreeFlags |= i), (e.childLanes = n), t);
  }
  function vb(e, t, n) {
    var i = t.pendingProps;
    switch ((wu(t), t.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (it(t), null);
      case 1:
        return (it(t), null);
      case 3:
        return (
          (n = t.stateNode),
          (i = null),
          e !== null && (i = e.memoizedState.cache),
          t.memoizedState.cache !== i && (t.flags |= 2048),
          oa(gt),
          de(),
          n.pendingContext &&
            ((n.context = n.pendingContext), (n.pendingContext = null)),
          (e === null || e.child === null) &&
            (Fi(t)
              ? fa(t)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), Tu())),
          it(t),
          null
        );
      case 26:
        var s = t.type,
          c = t.memoizedState;
        return (
          e === null
            ? (fa(t),
              c !== null ? (it(t), Ym(t, c)) : (it(t), vc(t, s, null, i, n)))
            : c
              ? c !== e.memoizedState
                ? (fa(t), it(t), Ym(t, c))
                : (it(t), (t.flags &= -16777217))
              : ((e = e.memoizedProps),
                e !== i && fa(t),
                it(t),
                vc(t, s, e, i, n)),
          null
        );
      case 27:
        if (
          (Le(t),
          (n = q.current),
          (s = t.type),
          e !== null && t.stateNode != null)
        )
          e.memoizedProps !== i && fa(t);
        else {
          if (!i) {
            if (t.stateNode === null) throw Error(o(166));
            return (it(t), null);
          }
          ((e = ie.current),
            Fi(t) ? Eh(t) : ((e = Pg(s, i, n)), (t.stateNode = e), fa(t)));
        }
        return (it(t), null);
      case 5:
        if ((Le(t), (s = t.type), e !== null && t.stateNode != null))
          e.memoizedProps !== i && fa(t);
        else {
          if (!i) {
            if (t.stateNode === null) throw Error(o(166));
            return (it(t), null);
          }
          if (((c = ie.current), Fi(t))) Eh(t);
          else {
            var h = Yo(q.current);
            switch (c) {
              case 1:
                c = h.createElementNS("http://www.w3.org/2000/svg", s);
                break;
              case 2:
                c = h.createElementNS("http://www.w3.org/1998/Math/MathML", s);
                break;
              default:
                switch (s) {
                  case "svg":
                    c = h.createElementNS("http://www.w3.org/2000/svg", s);
                    break;
                  case "math":
                    c = h.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      s
                    );
                    break;
                  case "script":
                    ((c = h.createElement("div")),
                      (c.innerHTML = "<script><\/script>"),
                      (c = c.removeChild(c.firstChild)));
                    break;
                  case "select":
                    ((c =
                      typeof i.is == "string"
                        ? h.createElement("select", { is: i.is })
                        : h.createElement("select")),
                      i.multiple
                        ? (c.multiple = !0)
                        : i.size && (c.size = i.size));
                    break;
                  default:
                    c =
                      typeof i.is == "string"
                        ? h.createElement(s, { is: i.is })
                        : h.createElement(s);
                }
            }
            ((c[Ot] = t), (c[It] = i));
            e: for (h = t.child; h !== null; ) {
              if (h.tag === 5 || h.tag === 6) c.appendChild(h.stateNode);
              else if (h.tag !== 4 && h.tag !== 27 && h.child !== null) {
                ((h.child.return = h), (h = h.child));
                continue;
              }
              if (h === t) break e;
              for (; h.sibling === null; ) {
                if (h.return === null || h.return === t) break e;
                h = h.return;
              }
              ((h.sibling.return = h.return), (h = h.sibling));
            }
            t.stateNode = c;
            e: switch ((Bt(c, s, i), s)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                i = !!i.autoFocus;
                break e;
              case "img":
                i = !0;
                break e;
              default:
                i = !1;
            }
            i && fa(t);
          }
        }
        return (
          it(t),
          vc(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, n),
          null
        );
      case 6:
        if (e && t.stateNode != null) e.memoizedProps !== i && fa(t);
        else {
          if (typeof i != "string" && t.stateNode === null) throw Error(o(166));
          if (((e = q.current), Fi(t))) {
            if (
              ((e = t.stateNode),
              (n = t.memoizedProps),
              (i = null),
              (s = zt),
              s !== null)
            )
              switch (s.tag) {
                case 27:
                case 5:
                  i = s.memoizedProps;
              }
            ((e[Ot] = t),
              (e = !!(
                e.nodeValue === n ||
                (i !== null && i.suppressHydrationWarning === !0) ||
                Hg(e.nodeValue, n)
              )),
              e || Ba(t, !0));
          } else
            ((e = Yo(e).createTextNode(i)), (e[Ot] = t), (t.stateNode = e));
        }
        return (it(t), null);
      case 31:
        if (((n = t.memoizedState), e === null || e.memoizedState !== null)) {
          if (((i = Fi(t)), n !== null)) {
            if (e === null) {
              if (!i) throw Error(o(318));
              if (
                ((e = t.memoizedState),
                (e = e !== null ? e.dehydrated : null),
                !e)
              )
                throw Error(o(557));
              e[Ot] = t;
            } else
              (di(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4));
            (it(t), (e = !1));
          } else
            ((n = Tu()),
              e !== null &&
                e.memoizedState !== null &&
                (e.memoizedState.hydrationErrors = n),
              (e = !0));
          if (!e) return t.flags & 256 ? (ln(t), t) : (ln(t), null);
          if ((t.flags & 128) !== 0) throw Error(o(558));
        }
        return (it(t), null);
      case 13:
        if (
          ((i = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (((s = Fi(t)), i !== null && i.dehydrated !== null)) {
            if (e === null) {
              if (!s) throw Error(o(318));
              if (
                ((s = t.memoizedState),
                (s = s !== null ? s.dehydrated : null),
                !s)
              )
                throw Error(o(317));
              s[Ot] = t;
            } else
              (di(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4));
            (it(t), (s = !1));
          } else
            ((s = Tu()),
              e !== null &&
                e.memoizedState !== null &&
                (e.memoizedState.hydrationErrors = s),
              (s = !0));
          if (!s) return t.flags & 256 ? (ln(t), t) : (ln(t), null);
        }
        return (
          ln(t),
          (t.flags & 128) !== 0
            ? ((t.lanes = n), t)
            : ((n = i !== null),
              (e = e !== null && e.memoizedState !== null),
              n &&
                ((i = t.child),
                (s = null),
                i.alternate !== null &&
                  i.alternate.memoizedState !== null &&
                  i.alternate.memoizedState.cachePool !== null &&
                  (s = i.alternate.memoizedState.cachePool.pool),
                (c = null),
                i.memoizedState !== null &&
                  i.memoizedState.cachePool !== null &&
                  (c = i.memoizedState.cachePool.pool),
                c !== s && (i.flags |= 2048)),
              n !== e && n && (t.child.flags |= 8192),
              Oo(t, t.updateQueue),
              it(t),
              null)
        );
      case 4:
        return (de(), e === null && Hc(t.stateNode.containerInfo), it(t), null);
      case 10:
        return (oa(t.type), it(t), null);
      case 19:
        if ((k(ft), (i = t.memoizedState), i === null)) return (it(t), null);
        if (((s = (t.flags & 128) !== 0), (c = i.rendering), c === null))
          if (s) rr(i, !1);
          else {
            if (ut !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((c = po(e)), c !== null)) {
                  for (
                    t.flags |= 128,
                      rr(i, !1),
                      e = c.updateQueue,
                      t.updateQueue = e,
                      Oo(t, e),
                      t.subtreeFlags = 0,
                      e = n,
                      n = t.child;
                    n !== null;

                  )
                    (vh(n, e), (n = n.sibling));
                  return (
                    P(ft, (ft.current & 1) | 2),
                    He && la(t, i.treeForkCount),
                    t.child
                  );
                }
                e = e.sibling;
              }
            i.tail !== null &&
              re() > No &&
              ((t.flags |= 128), (s = !0), rr(i, !1), (t.lanes = 4194304));
          }
        else {
          if (!s)
            if (((e = po(c)), e !== null)) {
              if (
                ((t.flags |= 128),
                (s = !0),
                (e = e.updateQueue),
                (t.updateQueue = e),
                Oo(t, e),
                rr(i, !0),
                i.tail === null &&
                  i.tailMode === "hidden" &&
                  !c.alternate &&
                  !He)
              )
                return (it(t), null);
            } else
              2 * re() - i.renderingStartTime > No &&
                n !== 536870912 &&
                ((t.flags |= 128), (s = !0), rr(i, !1), (t.lanes = 4194304));
          i.isBackwards
            ? ((c.sibling = t.child), (t.child = c))
            : ((e = i.last),
              e !== null ? (e.sibling = c) : (t.child = c),
              (i.last = c));
        }
        return i.tail !== null
          ? ((e = i.tail),
            (i.rendering = e),
            (i.tail = e.sibling),
            (i.renderingStartTime = re()),
            (e.sibling = null),
            (n = ft.current),
            P(ft, s ? (n & 1) | 2 : n & 1),
            He && la(t, i.treeForkCount),
            e)
          : (it(t), null);
      case 22:
      case 23:
        return (
          ln(t),
          ju(),
          (i = t.memoizedState !== null),
          e !== null
            ? (e.memoizedState !== null) !== i && (t.flags |= 8192)
            : i && (t.flags |= 8192),
          i
            ? (n & 536870912) !== 0 &&
              (t.flags & 128) === 0 &&
              (it(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : it(t),
          (n = t.updateQueue),
          n !== null && Oo(t, n.retryQueue),
          (n = null),
          e !== null &&
            e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (n = e.memoizedState.cachePool.pool),
          (i = null),
          t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (i = t.memoizedState.cachePool.pool),
          i !== n && (t.flags |= 2048),
          e !== null && k(gi),
          null
        );
      case 24:
        return (
          (n = null),
          e !== null && (n = e.memoizedState.cache),
          t.memoizedState.cache !== n && (t.flags |= 2048),
          oa(gt),
          it(t),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(o(156, t.tag));
  }
  function Ab(e, t) {
    switch ((wu(t), t.tag)) {
      case 1:
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          oa(gt),
          de(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((t.flags = (e & -65537) | 128), t)
            : null
        );
      case 26:
      case 27:
      case 5:
        return (Le(t), null);
      case 31:
        if (t.memoizedState !== null) {
          if ((ln(t), t.alternate === null)) throw Error(o(340));
          di();
        }
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 13:
        if (
          (ln(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(o(340));
          di();
        }
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return (k(ft), null);
      case 4:
        return (de(), null);
      case 10:
        return (oa(t.type), null);
      case 22:
      case 23:
        return (
          ln(t),
          ju(),
          e !== null && k(gi),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 24:
        return (oa(gt), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function qm(e, t) {
    switch ((wu(t), t.tag)) {
      case 3:
        (oa(gt), de());
        break;
      case 26:
      case 27:
      case 5:
        Le(t);
        break;
      case 4:
        de();
        break;
      case 31:
        t.memoizedState !== null && ln(t);
        break;
      case 13:
        ln(t);
        break;
      case 19:
        k(ft);
        break;
      case 10:
        oa(t.type);
        break;
      case 22:
      case 23:
        (ln(t), ju(), e !== null && k(gi));
        break;
      case 24:
        oa(gt);
    }
  }
  function or(e, t) {
    try {
      var n = t.updateQueue,
        i = n !== null ? n.lastEffect : null;
      if (i !== null) {
        var s = i.next;
        n = s;
        do {
          if ((n.tag & e) === e) {
            i = void 0;
            var c = n.create,
              h = n.inst;
            ((i = c()), (h.destroy = i));
          }
          n = n.next;
        } while (n !== s);
      }
    } catch (y) {
      Fe(t, t.return, y);
    }
  }
  function Ha(e, t, n) {
    try {
      var i = t.updateQueue,
        s = i !== null ? i.lastEffect : null;
      if (s !== null) {
        var c = s.next;
        i = c;
        do {
          if ((i.tag & e) === e) {
            var h = i.inst,
              y = h.destroy;
            if (y !== void 0) {
              ((h.destroy = void 0), (s = t));
              var E = n,
                V = y;
              try {
                V();
              } catch (W) {
                Fe(s, E, W);
              }
            }
          }
          i = i.next;
        } while (i !== c);
      }
    } catch (W) {
      Fe(t, t.return, W);
    }
  }
  function Km(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var n = e.stateNode;
      try {
        Lh(t, n);
      } catch (i) {
        Fe(e, e.return, i);
      }
    }
  }
  function Xm(e, t, n) {
    ((n.props = bi(e.type, e.memoizedProps)), (n.state = e.memoizedState));
    try {
      n.componentWillUnmount();
    } catch (i) {
      Fe(e, t, i);
    }
  }
  function sr(e, t) {
    try {
      var n = e.ref;
      if (n !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var i = e.stateNode;
            break;
          case 30:
            i = e.stateNode;
            break;
          default:
            i = e.stateNode;
        }
        typeof n == "function" ? (e.refCleanup = n(i)) : (n.current = i);
      }
    } catch (s) {
      Fe(e, t, s);
    }
  }
  function Yn(e, t) {
    var n = e.ref,
      i = e.refCleanup;
    if (n !== null)
      if (typeof i == "function")
        try {
          i();
        } catch (s) {
          Fe(e, t, s);
        } finally {
          ((e.refCleanup = null),
            (e = e.alternate),
            e != null && (e.refCleanup = null));
        }
      else if (typeof n == "function")
        try {
          n(null);
        } catch (s) {
          Fe(e, t, s);
        }
      else n.current = null;
  }
  function Fm(e) {
    var t = e.type,
      n = e.memoizedProps,
      i = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          n.autoFocus && i.focus();
          break e;
        case "img":
          n.src ? (i.src = n.src) : n.srcSet && (i.srcset = n.srcSet);
      }
    } catch (s) {
      Fe(e, e.return, s);
    }
  }
  function Ac(e, t, n) {
    try {
      var i = e.stateNode;
      (jb(i, e.type, n, t), (i[It] = t));
    } catch (s) {
      Fe(e, e.return, s);
    }
  }
  function Zm(e) {
    return (
      e.tag === 5 ||
      e.tag === 3 ||
      e.tag === 26 ||
      (e.tag === 27 && Xa(e.type)) ||
      e.tag === 4
    );
  }
  function bc(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || Zm(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if (
          (e.tag === 27 && Xa(e.type)) ||
          e.flags & 2 ||
          e.child === null ||
          e.tag === 4
        )
          continue e;
        ((e.child.return = e), (e = e.child));
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function _c(e, t, n) {
    var i = e.tag;
    if (i === 5 || i === 6)
      ((e = e.stateNode),
        t
          ? (n.nodeType === 9
              ? n.body
              : n.nodeName === "HTML"
                ? n.ownerDocument.body
                : n
            ).insertBefore(e, t)
          : ((t =
              n.nodeType === 9
                ? n.body
                : n.nodeName === "HTML"
                  ? n.ownerDocument.body
                  : n),
            t.appendChild(e),
            (n = n._reactRootContainer),
            n != null || t.onclick !== null || (t.onclick = na)));
    else if (
      i !== 4 &&
      (i === 27 && Xa(e.type) && ((n = e.stateNode), (t = null)),
      (e = e.child),
      e !== null)
    )
      for (_c(e, t, n), e = e.sibling; e !== null; )
        (_c(e, t, n), (e = e.sibling));
  }
  function zo(e, t, n) {
    var i = e.tag;
    if (i === 5 || i === 6)
      ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
    else if (
      i !== 4 &&
      (i === 27 && Xa(e.type) && (n = e.stateNode), (e = e.child), e !== null)
    )
      for (zo(e, t, n), e = e.sibling; e !== null; )
        (zo(e, t, n), (e = e.sibling));
  }
  function Jm(e) {
    var t = e.stateNode,
      n = e.memoizedProps;
    try {
      for (var i = e.type, s = t.attributes; s.length; )
        t.removeAttributeNode(s[0]);
      (Bt(t, i, n), (t[Ot] = e), (t[It] = n));
    } catch (c) {
      Fe(e, e.return, c);
    }
  }
  var da = !1,
    vt = !1,
    xc = !1,
    Pm = typeof WeakSet == "function" ? WeakSet : Set,
    Rt = null;
  function bb(e, t) {
    if (((e = e.containerInfo), (Gc = Po), (e = uh(e)), gu(e))) {
      if ("selectionStart" in e)
        var n = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          n = ((n = e.ownerDocument) && n.defaultView) || window;
          var i = n.getSelection && n.getSelection();
          if (i && i.rangeCount !== 0) {
            n = i.anchorNode;
            var s = i.anchorOffset,
              c = i.focusNode;
            i = i.focusOffset;
            try {
              (n.nodeType, c.nodeType);
            } catch {
              n = null;
              break e;
            }
            var h = 0,
              y = -1,
              E = -1,
              V = 0,
              W = 0,
              ne = e,
              G = null;
            t: for (;;) {
              for (
                var X;
                ne !== n || (s !== 0 && ne.nodeType !== 3) || (y = h + s),
                  ne !== c || (i !== 0 && ne.nodeType !== 3) || (E = h + i),
                  ne.nodeType === 3 && (h += ne.nodeValue.length),
                  (X = ne.firstChild) !== null;

              )
                ((G = ne), (ne = X));
              for (;;) {
                if (ne === e) break t;
                if (
                  (G === n && ++V === s && (y = h),
                  G === c && ++W === i && (E = h),
                  (X = ne.nextSibling) !== null)
                )
                  break;
                ((ne = G), (G = ne.parentNode));
              }
              ne = X;
            }
            n = y === -1 || E === -1 ? null : { start: y, end: E };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (
      Yc = { focusedElem: e, selectionRange: n }, Po = !1, Rt = t;
      Rt !== null;

    )
      if (
        ((t = Rt), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)
      )
        ((e.return = t), (Rt = e));
      else
        for (; Rt !== null; ) {
          switch (((t = Rt), (c = t.alternate), (e = t.flags), t.tag)) {
            case 0:
              if (
                (e & 4) !== 0 &&
                ((e = t.updateQueue),
                (e = e !== null ? e.events : null),
                e !== null)
              )
                for (n = 0; n < e.length; n++)
                  ((s = e[n]), (s.ref.impl = s.nextImpl));
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && c !== null) {
                ((e = void 0),
                  (n = t),
                  (s = c.memoizedProps),
                  (c = c.memoizedState),
                  (i = n.stateNode));
                try {
                  var ye = bi(n.type, s);
                  ((e = i.getSnapshotBeforeUpdate(ye, c)),
                    (i.__reactInternalSnapshotBeforeUpdate = e));
                } catch (Ce) {
                  Fe(n, n.return, Ce);
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (
                  ((e = t.stateNode.containerInfo), (n = e.nodeType), n === 9)
                )
                  Xc(e);
                else if (n === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Xc(e);
                      break;
                    default:
                      e.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((e & 1024) !== 0) throw Error(o(163));
          }
          if (((e = t.sibling), e !== null)) {
            ((e.return = t.return), (Rt = e));
            break;
          }
          Rt = t.return;
        }
  }
  function $m(e, t, n) {
    var i = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        (ma(e, n), i & 4 && or(5, n));
        break;
      case 1:
        if ((ma(e, n), i & 4))
          if (((e = n.stateNode), t === null))
            try {
              e.componentDidMount();
            } catch (h) {
              Fe(n, n.return, h);
            }
          else {
            var s = bi(n.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              e.componentDidUpdate(s, t, e.__reactInternalSnapshotBeforeUpdate);
            } catch (h) {
              Fe(n, n.return, h);
            }
          }
        (i & 64 && Km(n), i & 512 && sr(n, n.return));
        break;
      case 3:
        if ((ma(e, n), i & 64 && ((e = n.updateQueue), e !== null))) {
          if (((t = null), n.child !== null))
            switch (n.child.tag) {
              case 27:
              case 5:
                t = n.child.stateNode;
                break;
              case 1:
                t = n.child.stateNode;
            }
          try {
            Lh(e, t);
          } catch (h) {
            Fe(n, n.return, h);
          }
        }
        break;
      case 27:
        t === null && i & 4 && Jm(n);
      case 26:
      case 5:
        (ma(e, n), t === null && i & 4 && Fm(n), i & 512 && sr(n, n.return));
        break;
      case 12:
        ma(e, n);
        break;
      case 31:
        (ma(e, n), i & 4 && tg(e, n));
        break;
      case 13:
        (ma(e, n),
          i & 4 && ng(e, n),
          i & 64 &&
            ((e = n.memoizedState),
            e !== null &&
              ((e = e.dehydrated),
              e !== null && ((n = Ob.bind(null, n)), Zb(e, n)))));
        break;
      case 22:
        if (((i = n.memoizedState !== null || da), !i)) {
          ((t = (t !== null && t.memoizedState !== null) || vt), (s = da));
          var c = vt;
          ((da = i),
            (vt = t) && !c ? ga(e, n, (n.subtreeFlags & 8772) !== 0) : ma(e, n),
            (da = s),
            (vt = c));
        }
        break;
      case 30:
        break;
      default:
        ma(e, n);
    }
  }
  function Wm(e) {
    var t = e.alternate;
    (t !== null && ((e.alternate = null), Wm(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 && ((t = e.stateNode), t !== null && $s(t)),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null));
  }
  var rt = null,
    Yt = !1;
  function ha(e, t, n) {
    for (n = n.child; n !== null; ) (eg(e, t, n), (n = n.sibling));
  }
  function eg(e, t, n) {
    if (mt && typeof mt.onCommitFiberUnmount == "function")
      try {
        mt.onCommitFiberUnmount(gn, n);
      } catch {}
    switch (n.tag) {
      case 26:
        (vt || Yn(n, t),
          ha(e, t, n),
          n.memoizedState
            ? n.memoizedState.count--
            : n.stateNode && ((n = n.stateNode), n.parentNode.removeChild(n)));
        break;
      case 27:
        vt || Yn(n, t);
        var i = rt,
          s = Yt;
        (Xa(n.type) && ((rt = n.stateNode), (Yt = !1)),
          ha(e, t, n),
          yr(n.stateNode),
          (rt = i),
          (Yt = s));
        break;
      case 5:
        vt || Yn(n, t);
      case 6:
        if (
          ((i = rt),
          (s = Yt),
          (rt = null),
          ha(e, t, n),
          (rt = i),
          (Yt = s),
          rt !== null)
        )
          if (Yt)
            try {
              (rt.nodeType === 9
                ? rt.body
                : rt.nodeName === "HTML"
                  ? rt.ownerDocument.body
                  : rt
              ).removeChild(n.stateNode);
            } catch (c) {
              Fe(n, t, c);
            }
          else
            try {
              rt.removeChild(n.stateNode);
            } catch (c) {
              Fe(n, t, c);
            }
        break;
      case 18:
        rt !== null &&
          (Yt
            ? ((e = rt),
              Kg(
                e.nodeType === 9
                  ? e.body
                  : e.nodeName === "HTML"
                    ? e.ownerDocument.body
                    : e,
                n.stateNode
              ),
              gl(e))
            : Kg(rt, n.stateNode));
        break;
      case 4:
        ((i = rt),
          (s = Yt),
          (rt = n.stateNode.containerInfo),
          (Yt = !0),
          ha(e, t, n),
          (rt = i),
          (Yt = s));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (Ha(2, n, t), vt || Ha(4, n, t), ha(e, t, n));
        break;
      case 1:
        (vt ||
          (Yn(n, t),
          (i = n.stateNode),
          typeof i.componentWillUnmount == "function" && Xm(n, t, i)),
          ha(e, t, n));
        break;
      case 21:
        ha(e, t, n);
        break;
      case 22:
        ((vt = (i = vt) || n.memoizedState !== null), ha(e, t, n), (vt = i));
        break;
      default:
        ha(e, t, n);
    }
  }
  function tg(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate), e !== null && ((e = e.memoizedState), e !== null))
    ) {
      e = e.dehydrated;
      try {
        gl(e);
      } catch (n) {
        Fe(t, t.return, n);
      }
    }
  }
  function ng(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate),
      e !== null &&
        ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
    )
      try {
        gl(e);
      } catch (n) {
        Fe(t, t.return, n);
      }
  }
  function _b(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return (t === null && (t = e.stateNode = new Pm()), t);
      case 22:
        return (
          (e = e.stateNode),
          (t = e._retryCache),
          t === null && (t = e._retryCache = new Pm()),
          t
        );
      default:
        throw Error(o(435, e.tag));
    }
  }
  function Mo(e, t) {
    var n = _b(e);
    t.forEach(function (i) {
      if (!n.has(i)) {
        n.add(i);
        var s = zb.bind(null, e, i);
        i.then(s, s);
      }
    });
  }
  function qt(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var i = 0; i < n.length; i++) {
        var s = n[i],
          c = e,
          h = t,
          y = h;
        e: for (; y !== null; ) {
          switch (y.tag) {
            case 27:
              if (Xa(y.type)) {
                ((rt = y.stateNode), (Yt = !1));
                break e;
              }
              break;
            case 5:
              ((rt = y.stateNode), (Yt = !1));
              break e;
            case 3:
            case 4:
              ((rt = y.stateNode.containerInfo), (Yt = !0));
              break e;
          }
          y = y.return;
        }
        if (rt === null) throw Error(o(160));
        (eg(c, h, s),
          (rt = null),
          (Yt = !1),
          (c = s.alternate),
          c !== null && (c.return = null),
          (s.return = null));
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; ) (ag(t, e), (t = t.sibling));
  }
  var kn = null;
  function ag(e, t) {
    var n = e.alternate,
      i = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        (qt(t, e),
          Kt(e),
          i & 4 && (Ha(3, e, e.return), or(3, e), Ha(5, e, e.return)));
        break;
      case 1:
        (qt(t, e),
          Kt(e),
          i & 512 && (vt || n === null || Yn(n, n.return)),
          i & 64 &&
            da &&
            ((e = e.updateQueue),
            e !== null &&
              ((i = e.callbacks),
              i !== null &&
                ((n = e.shared.hiddenCallbacks),
                (e.shared.hiddenCallbacks = n === null ? i : n.concat(i))))));
        break;
      case 26:
        var s = kn;
        if (
          (qt(t, e),
          Kt(e),
          i & 512 && (vt || n === null || Yn(n, n.return)),
          i & 4)
        ) {
          var c = n !== null ? n.memoizedState : null;
          if (((i = e.memoizedState), n === null))
            if (i === null)
              if (e.stateNode === null) {
                e: {
                  ((i = e.type),
                    (n = e.memoizedProps),
                    (s = s.ownerDocument || s));
                  t: switch (i) {
                    case "title":
                      ((c = s.getElementsByTagName("title")[0]),
                        (!c ||
                          c[kl] ||
                          c[Ot] ||
                          c.namespaceURI === "http://www.w3.org/2000/svg" ||
                          c.hasAttribute("itemprop")) &&
                          ((c = s.createElement(i)),
                          s.head.insertBefore(
                            c,
                            s.querySelector("head > title")
                          )),
                        Bt(c, i, n),
                        (c[Ot] = e),
                        wt(c),
                        (i = c));
                      break e;
                    case "link":
                      var h = ap("link", "href", s).get(i + (n.href || ""));
                      if (h) {
                        for (var y = 0; y < h.length; y++)
                          if (
                            ((c = h[y]),
                            c.getAttribute("href") ===
                              (n.href == null || n.href === ""
                                ? null
                                : n.href) &&
                              c.getAttribute("rel") ===
                                (n.rel == null ? null : n.rel) &&
                              c.getAttribute("title") ===
                                (n.title == null ? null : n.title) &&
                              c.getAttribute("crossorigin") ===
                                (n.crossOrigin == null ? null : n.crossOrigin))
                          ) {
                            h.splice(y, 1);
                            break t;
                          }
                      }
                      ((c = s.createElement(i)),
                        Bt(c, i, n),
                        s.head.appendChild(c));
                      break;
                    case "meta":
                      if (
                        (h = ap("meta", "content", s).get(
                          i + (n.content || "")
                        ))
                      ) {
                        for (y = 0; y < h.length; y++)
                          if (
                            ((c = h[y]),
                            c.getAttribute("content") ===
                              (n.content == null ? null : "" + n.content) &&
                              c.getAttribute("name") ===
                                (n.name == null ? null : n.name) &&
                              c.getAttribute("property") ===
                                (n.property == null ? null : n.property) &&
                              c.getAttribute("http-equiv") ===
                                (n.httpEquiv == null ? null : n.httpEquiv) &&
                              c.getAttribute("charset") ===
                                (n.charSet == null ? null : n.charSet))
                          ) {
                            h.splice(y, 1);
                            break t;
                          }
                      }
                      ((c = s.createElement(i)),
                        Bt(c, i, n),
                        s.head.appendChild(c));
                      break;
                    default:
                      throw Error(o(468, i));
                  }
                  ((c[Ot] = e), wt(c), (i = c));
                }
                e.stateNode = i;
              } else ip(s, e.type, e.stateNode);
            else e.stateNode = np(s, i, e.memoizedProps);
          else
            c !== i
              ? (c === null
                  ? n.stateNode !== null &&
                    ((n = n.stateNode), n.parentNode.removeChild(n))
                  : c.count--,
                i === null
                  ? ip(s, e.type, e.stateNode)
                  : np(s, i, e.memoizedProps))
              : i === null &&
                e.stateNode !== null &&
                Ac(e, e.memoizedProps, n.memoizedProps);
        }
        break;
      case 27:
        (qt(t, e),
          Kt(e),
          i & 512 && (vt || n === null || Yn(n, n.return)),
          n !== null && i & 4 && Ac(e, e.memoizedProps, n.memoizedProps));
        break;
      case 5:
        if (
          (qt(t, e),
          Kt(e),
          i & 512 && (vt || n === null || Yn(n, n.return)),
          e.flags & 32)
        ) {
          s = e.stateNode;
          try {
            Vi(s, "");
          } catch (ye) {
            Fe(e, e.return, ye);
          }
        }
        (i & 4 &&
          e.stateNode != null &&
          ((s = e.memoizedProps), Ac(e, s, n !== null ? n.memoizedProps : s)),
          i & 1024 && (xc = !0));
        break;
      case 6:
        if ((qt(t, e), Kt(e), i & 4)) {
          if (e.stateNode === null) throw Error(o(162));
          ((i = e.memoizedProps), (n = e.stateNode));
          try {
            n.nodeValue = i;
          } catch (ye) {
            Fe(e, e.return, ye);
          }
        }
        break;
      case 3:
        if (
          ((Xo = null),
          (s = kn),
          (kn = qo(t.containerInfo)),
          qt(t, e),
          (kn = s),
          Kt(e),
          i & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            gl(t.containerInfo);
          } catch (ye) {
            Fe(e, e.return, ye);
          }
        xc && ((xc = !1), ig(e));
        break;
      case 4:
        ((i = kn),
          (kn = qo(e.stateNode.containerInfo)),
          qt(t, e),
          Kt(e),
          (kn = i));
        break;
      case 12:
        (qt(t, e), Kt(e));
        break;
      case 31:
        (qt(t, e),
          Kt(e),
          i & 4 &&
            ((i = e.updateQueue),
            i !== null && ((e.updateQueue = null), Mo(e, i))));
        break;
      case 13:
        (qt(t, e),
          Kt(e),
          e.child.flags & 8192 &&
            (e.memoizedState !== null) !=
              (n !== null && n.memoizedState !== null) &&
            (Bo = re()),
          i & 4 &&
            ((i = e.updateQueue),
            i !== null && ((e.updateQueue = null), Mo(e, i))));
        break;
      case 22:
        s = e.memoizedState !== null;
        var E = n !== null && n.memoizedState !== null,
          V = da,
          W = vt;
        if (
          ((da = V || s),
          (vt = W || E),
          qt(t, e),
          (vt = W),
          (da = V),
          Kt(e),
          i & 8192)
        )
          e: for (
            t = e.stateNode,
              t._visibility = s ? t._visibility & -2 : t._visibility | 1,
              s && (n === null || E || da || vt || _i(e)),
              n = null,
              t = e;
            ;

          ) {
            if (t.tag === 5 || t.tag === 26) {
              if (n === null) {
                E = n = t;
                try {
                  if (((c = E.stateNode), s))
                    ((h = c.style),
                      typeof h.setProperty == "function"
                        ? h.setProperty("display", "none", "important")
                        : (h.display = "none"));
                  else {
                    y = E.stateNode;
                    var ne = E.memoizedProps.style,
                      G =
                        ne != null && ne.hasOwnProperty("display")
                          ? ne.display
                          : null;
                    y.style.display =
                      G == null || typeof G == "boolean" ? "" : ("" + G).trim();
                  }
                } catch (ye) {
                  Fe(E, E.return, ye);
                }
              }
            } else if (t.tag === 6) {
              if (n === null) {
                E = t;
                try {
                  E.stateNode.nodeValue = s ? "" : E.memoizedProps;
                } catch (ye) {
                  Fe(E, E.return, ye);
                }
              }
            } else if (t.tag === 18) {
              if (n === null) {
                E = t;
                try {
                  var X = E.stateNode;
                  s ? Xg(X, !0) : Xg(E.stateNode, !1);
                } catch (ye) {
                  Fe(E, E.return, ye);
                }
              }
            } else if (
              ((t.tag !== 22 && t.tag !== 23) ||
                t.memoizedState === null ||
                t === e) &&
              t.child !== null
            ) {
              ((t.child.return = t), (t = t.child));
              continue;
            }
            if (t === e) break e;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === e) break e;
              (n === t && (n = null), (t = t.return));
            }
            (n === t && (n = null),
              (t.sibling.return = t.return),
              (t = t.sibling));
          }
        i & 4 &&
          ((i = e.updateQueue),
          i !== null &&
            ((n = i.retryQueue),
            n !== null && ((i.retryQueue = null), Mo(e, n))));
        break;
      case 19:
        (qt(t, e),
          Kt(e),
          i & 4 &&
            ((i = e.updateQueue),
            i !== null && ((e.updateQueue = null), Mo(e, i))));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        (qt(t, e), Kt(e));
    }
  }
  function Kt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var n, i = e.return; i !== null; ) {
          if (Zm(i)) {
            n = i;
            break;
          }
          i = i.return;
        }
        if (n == null) throw Error(o(160));
        switch (n.tag) {
          case 27:
            var s = n.stateNode,
              c = bc(e);
            zo(e, c, s);
            break;
          case 5:
            var h = n.stateNode;
            n.flags & 32 && (Vi(h, ""), (n.flags &= -33));
            var y = bc(e);
            zo(e, y, h);
            break;
          case 3:
          case 4:
            var E = n.stateNode.containerInfo,
              V = bc(e);
            _c(e, V, E);
            break;
          default:
            throw Error(o(161));
        }
      } catch (W) {
        Fe(e, e.return, W);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function ig(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        (ig(t),
          t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
          (e = e.sibling));
      }
  }
  function ma(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; ) ($m(e, t.alternate, t), (t = t.sibling));
  }
  function _i(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (Ha(4, t, t.return), _i(t));
          break;
        case 1:
          Yn(t, t.return);
          var n = t.stateNode;
          (typeof n.componentWillUnmount == "function" && Xm(t, t.return, n),
            _i(t));
          break;
        case 27:
          yr(t.stateNode);
        case 26:
        case 5:
          (Yn(t, t.return), _i(t));
          break;
        case 22:
          t.memoizedState === null && _i(t);
          break;
        case 30:
          _i(t);
          break;
        default:
          _i(t);
      }
      e = e.sibling;
    }
  }
  function ga(e, t, n) {
    for (n = n && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var i = t.alternate,
        s = e,
        c = t,
        h = c.flags;
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
          (ga(s, c, n), or(4, c));
          break;
        case 1:
          if (
            (ga(s, c, n),
            (i = c),
            (s = i.stateNode),
            typeof s.componentDidMount == "function")
          )
            try {
              s.componentDidMount();
            } catch (V) {
              Fe(i, i.return, V);
            }
          if (((i = c), (s = i.updateQueue), s !== null)) {
            var y = i.stateNode;
            try {
              var E = s.shared.hiddenCallbacks;
              if (E !== null)
                for (s.shared.hiddenCallbacks = null, s = 0; s < E.length; s++)
                  kh(E[s], y);
            } catch (V) {
              Fe(i, i.return, V);
            }
          }
          (n && h & 64 && Km(c), sr(c, c.return));
          break;
        case 27:
          Jm(c);
        case 26:
        case 5:
          (ga(s, c, n), n && i === null && h & 4 && Fm(c), sr(c, c.return));
          break;
        case 12:
          ga(s, c, n);
          break;
        case 31:
          (ga(s, c, n), n && h & 4 && tg(s, c));
          break;
        case 13:
          (ga(s, c, n), n && h & 4 && ng(s, c));
          break;
        case 22:
          (c.memoizedState === null && ga(s, c, n), sr(c, c.return));
          break;
        case 30:
          break;
        default:
          ga(s, c, n);
      }
      t = t.sibling;
    }
  }
  function Ec(e, t) {
    var n = null;
    (e !== null &&
      e.memoizedState !== null &&
      e.memoizedState.cachePool !== null &&
      (n = e.memoizedState.cachePool.pool),
      (e = null),
      t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (e = t.memoizedState.cachePool.pool),
      e !== n && (e != null && e.refCount++, n != null && Fl(n)));
  }
  function Sc(e, t) {
    ((e = null),
      t.alternate !== null && (e = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== e && (t.refCount++, e != null && Fl(e)));
  }
  function Ln(e, t, n, i) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) (lg(e, t, n, i), (t = t.sibling));
  }
  function lg(e, t, n, i) {
    var s = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        (Ln(e, t, n, i), s & 2048 && or(9, t));
        break;
      case 1:
        Ln(e, t, n, i);
        break;
      case 3:
        (Ln(e, t, n, i),
          s & 2048 &&
            ((e = null),
            t.alternate !== null && (e = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== e && (t.refCount++, e != null && Fl(e))));
        break;
      case 12:
        if (s & 2048) {
          (Ln(e, t, n, i), (e = t.stateNode));
          try {
            var c = t.memoizedProps,
              h = c.id,
              y = c.onPostCommit;
            typeof y == "function" &&
              y(
                h,
                t.alternate === null ? "mount" : "update",
                e.passiveEffectDuration,
                -0
              );
          } catch (E) {
            Fe(t, t.return, E);
          }
        } else Ln(e, t, n, i);
        break;
      case 31:
        Ln(e, t, n, i);
        break;
      case 13:
        Ln(e, t, n, i);
        break;
      case 23:
        break;
      case 22:
        ((c = t.stateNode),
          (h = t.alternate),
          t.memoizedState !== null
            ? c._visibility & 2
              ? Ln(e, t, n, i)
              : ur(e, t)
            : c._visibility & 2
              ? Ln(e, t, n, i)
              : ((c._visibility |= 2),
                il(e, t, n, i, (t.subtreeFlags & 10256) !== 0 || !1)),
          s & 2048 && Ec(h, t));
        break;
      case 24:
        (Ln(e, t, n, i), s & 2048 && Sc(t.alternate, t));
        break;
      default:
        Ln(e, t, n, i);
    }
  }
  function il(e, t, n, i, s) {
    for (
      s = s && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child;
      t !== null;

    ) {
      var c = e,
        h = t,
        y = n,
        E = i,
        V = h.flags;
      switch (h.tag) {
        case 0:
        case 11:
        case 15:
          (il(c, h, y, E, s), or(8, h));
          break;
        case 23:
          break;
        case 22:
          var W = h.stateNode;
          (h.memoizedState !== null
            ? W._visibility & 2
              ? il(c, h, y, E, s)
              : ur(c, h)
            : ((W._visibility |= 2), il(c, h, y, E, s)),
            s && V & 2048 && Ec(h.alternate, h));
          break;
        case 24:
          (il(c, h, y, E, s), s && V & 2048 && Sc(h.alternate, h));
          break;
        default:
          il(c, h, y, E, s);
      }
      t = t.sibling;
    }
  }
  function ur(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var n = e,
          i = t,
          s = i.flags;
        switch (i.tag) {
          case 22:
            (ur(n, i), s & 2048 && Ec(i.alternate, i));
            break;
          case 24:
            (ur(n, i), s & 2048 && Sc(i.alternate, i));
            break;
          default:
            ur(n, i);
        }
        t = t.sibling;
      }
  }
  var cr = 8192;
  function ll(e, t, n) {
    if (e.subtreeFlags & cr)
      for (e = e.child; e !== null; ) (rg(e, t, n), (e = e.sibling));
  }
  function rg(e, t, n) {
    switch (e.tag) {
      case 26:
        (ll(e, t, n),
          e.flags & cr &&
            e.memoizedState !== null &&
            o0(n, kn, e.memoizedState, e.memoizedProps));
        break;
      case 5:
        ll(e, t, n);
        break;
      case 3:
      case 4:
        var i = kn;
        ((kn = qo(e.stateNode.containerInfo)), ll(e, t, n), (kn = i));
        break;
      case 22:
        e.memoizedState === null &&
          ((i = e.alternate),
          i !== null && i.memoizedState !== null
            ? ((i = cr), (cr = 16777216), ll(e, t, n), (cr = i))
            : ll(e, t, n));
        break;
      default:
        ll(e, t, n);
    }
  }
  function og(e) {
    var t = e.alternate;
    if (t !== null && ((e = t.child), e !== null)) {
      t.child = null;
      do ((t = e.sibling), (e.sibling = null), (e = t));
      while (e !== null);
    }
  }
  function fr(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          ((Rt = i), ug(i, e));
        }
      og(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) (sg(e), (e = e.sibling));
  }
  function sg(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        (fr(e), e.flags & 2048 && Ha(9, e, e.return));
        break;
      case 3:
        fr(e);
        break;
      case 12:
        fr(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null &&
        t._visibility & 2 &&
        (e.return === null || e.return.tag !== 13)
          ? ((t._visibility &= -3), Do(e))
          : fr(e);
        break;
      default:
        fr(e);
    }
  }
  function Do(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          ((Rt = i), ug(i, e));
        }
      og(e);
    }
    for (e = e.child; e !== null; ) {
      switch (((t = e), t.tag)) {
        case 0:
        case 11:
        case 15:
          (Ha(8, t, t.return), Do(t));
          break;
        case 22:
          ((n = t.stateNode),
            n._visibility & 2 && ((n._visibility &= -3), Do(t)));
          break;
        default:
          Do(t);
      }
      e = e.sibling;
    }
  }
  function ug(e, t) {
    for (; Rt !== null; ) {
      var n = Rt;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          Ha(8, n, t);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var i = n.memoizedState.cachePool.pool;
            i != null && i.refCount++;
          }
          break;
        case 24:
          Fl(n.memoizedState.cache);
      }
      if (((i = n.child), i !== null)) ((i.return = n), (Rt = i));
      else
        e: for (n = e; Rt !== null; ) {
          i = Rt;
          var s = i.sibling,
            c = i.return;
          if ((Wm(i), i === n)) {
            Rt = null;
            break e;
          }
          if (s !== null) {
            ((s.return = c), (Rt = s));
            break e;
          }
          Rt = c;
        }
    }
  }
  var xb = {
      getCacheForType: function (e) {
        var t = Mt(gt),
          n = t.data.get(e);
        return (n === void 0 && ((n = e()), t.data.set(e, n)), n);
      },
      cacheSignal: function () {
        return Mt(gt).controller.signal;
      },
    },
    Eb = typeof WeakMap == "function" ? WeakMap : Map,
    Ye = 0,
    We = null,
    Ne = null,
    Ue = 0,
    Xe = 0,
    rn = null,
    ja = !1,
    rl = !1,
    Cc = !1,
    pa = 0,
    ut = 0,
    Ia = 0,
    xi = 0,
    wc = 0,
    on = 0,
    ol = 0,
    dr = null,
    Xt = null,
    Rc = !1,
    Bo = 0,
    cg = 0,
    No = 1 / 0,
    ko = null,
    Ga = null,
    xt = 0,
    Ya = null,
    sl = null,
    ya = 0,
    Tc = 0,
    Oc = null,
    fg = null,
    hr = 0,
    zc = null;
  function sn() {
    return (Ye & 2) !== 0 && Ue !== 0 ? Ue & -Ue : O.T !== null ? Lc() : Yr();
  }
  function dg() {
    if (on === 0)
      if ((Ue & 536870912) === 0 || He) {
        var e = Dn;
        ((Dn <<= 1), (Dn & 3932160) === 0 && (Dn = 262144), (on = e));
      } else on = 536870912;
    return ((e = an.current), e !== null && (e.flags |= 32), on);
  }
  function Ft(e, t, n) {
    (((e === We && (Xe === 2 || Xe === 9)) || e.cancelPendingCommit !== null) &&
      (ul(e, 0), qa(e, Ue, on, !1)),
      ea(e, n),
      ((Ye & 2) === 0 || e !== We) &&
        (e === We &&
          ((Ye & 2) === 0 && (xi |= n), ut === 4 && qa(e, Ue, on, !1)),
        qn(e)));
  }
  function hg(e, t, n) {
    if ((Ye & 6) !== 0) throw Error(o(327));
    var i = (!n && (t & 127) === 0 && (t & e.expiredLanes) === 0) || li(e, t),
      s = i ? wb(e, t) : Dc(e, t, !0),
      c = i;
    do {
      if (s === 0) {
        rl && !i && qa(e, t, 0, !1);
        break;
      } else {
        if (((n = e.current.alternate), c && !Sb(n))) {
          ((s = Dc(e, t, !1)), (c = !1));
          continue;
        }
        if (s === 2) {
          if (((c = t), e.errorRecoveryDisabledLanes & c)) var h = 0;
          else
            ((h = e.pendingLanes & -536870913),
              (h = h !== 0 ? h : h & 536870912 ? 536870912 : 0));
          if (h !== 0) {
            t = h;
            e: {
              var y = e;
              s = dr;
              var E = y.current.memoizedState.isDehydrated;
              if ((E && (ul(y, h).flags |= 256), (h = Dc(y, h, !1)), h !== 2)) {
                if (Cc && !E) {
                  ((y.errorRecoveryDisabledLanes |= c), (xi |= c), (s = 4));
                  break e;
                }
                ((c = Xt),
                  (Xt = s),
                  c !== null &&
                    (Xt === null ? (Xt = c) : Xt.push.apply(Xt, c)));
              }
              s = h;
            }
            if (((c = !1), s !== 2)) continue;
          }
        }
        if (s === 1) {
          (ul(e, 0), qa(e, t, 0, !0));
          break;
        }
        e: {
          switch (((i = e), (c = s), c)) {
            case 0:
            case 1:
              throw Error(o(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              qa(i, t, on, !ja);
              break e;
            case 2:
              Xt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(o(329));
          }
          if ((t & 62914560) === t && ((s = Bo + 300 - re()), 10 < s)) {
            if ((qa(i, t, on, !ja), ii(i, 0, !0) !== 0)) break e;
            ((ya = t),
              (i.timeoutHandle = Yg(
                mg.bind(
                  null,
                  i,
                  n,
                  Xt,
                  ko,
                  Rc,
                  t,
                  on,
                  xi,
                  ol,
                  ja,
                  c,
                  "Throttled",
                  -0,
                  0
                ),
                s
              )));
            break e;
          }
          mg(i, n, Xt, ko, Rc, t, on, xi, ol, ja, c, null, -0, 0);
        }
      }
      break;
    } while (!0);
    qn(e);
  }
  function mg(e, t, n, i, s, c, h, y, E, V, W, ne, G, X) {
    if (
      ((e.timeoutHandle = -1),
      (ne = t.subtreeFlags),
      ne & 8192 || (ne & 16785408) === 16785408)
    ) {
      ((ne = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: na,
      }),
        rg(t, c, ne));
      var ye =
        (c & 62914560) === c ? Bo - re() : (c & 4194048) === c ? cg - re() : 0;
      if (((ye = s0(ne, ye)), ye !== null)) {
        ((ya = c),
          (e.cancelPendingCommit = ye(
            xg.bind(null, e, t, c, n, i, s, h, y, E, W, ne, null, G, X)
          )),
          qa(e, c, h, !V));
        return;
      }
    }
    xg(e, t, c, n, i, s, h, y, E);
  }
  function Sb(e) {
    for (var t = e; ; ) {
      var n = t.tag;
      if (
        (n === 0 || n === 11 || n === 15) &&
        t.flags & 16384 &&
        ((n = t.updateQueue), n !== null && ((n = n.stores), n !== null))
      )
        for (var i = 0; i < n.length; i++) {
          var s = n[i],
            c = s.getSnapshot;
          s = s.value;
          try {
            if (!tn(c(), s)) return !1;
          } catch {
            return !1;
          }
        }
      if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
        ((n.return = t), (t = n));
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
    }
    return !0;
  }
  function qa(e, t, n, i) {
    ((t &= ~wc),
      (t &= ~xi),
      (e.suspendedLanes |= t),
      (e.pingedLanes &= ~t),
      i && (e.warmLanes |= t),
      (i = e.expirationTimes));
    for (var s = t; 0 < s; ) {
      var c = 31 - Be(s),
        h = 1 << c;
      ((i[c] = -1), (s &= ~h));
    }
    n !== 0 && Ir(e, n, t);
  }
  function Lo() {
    return (Ye & 6) === 0 ? (mr(0), !1) : !0;
  }
  function Mc() {
    if (Ne !== null) {
      if (Xe === 0) var e = Ne.return;
      else ((e = Ne), (ra = hi = null), Xu(e), (Wi = null), (Jl = 0), (e = Ne));
      for (; e !== null; ) (qm(e.alternate, e), (e = e.return));
      Ne = null;
    }
  }
  function ul(e, t) {
    var n = e.timeoutHandle;
    (n !== -1 && ((e.timeoutHandle = -1), Yb(n)),
      (n = e.cancelPendingCommit),
      n !== null && ((e.cancelPendingCommit = null), n()),
      (ya = 0),
      Mc(),
      (We = e),
      (Ne = n = ia(e.current, null)),
      (Ue = t),
      (Xe = 0),
      (rn = null),
      (ja = !1),
      (rl = li(e, t)),
      (Cc = !1),
      (ol = on = wc = xi = Ia = ut = 0),
      (Xt = dr = null),
      (Rc = !1),
      (t & 8) !== 0 && (t |= t & 32));
    var i = e.entangledLanes;
    if (i !== 0)
      for (e = e.entanglements, i &= t; 0 < i; ) {
        var s = 31 - Be(i),
          c = 1 << s;
        ((t |= e[s]), (i &= ~c));
      }
    return ((pa = t), no(), n);
  }
  function gg(e, t) {
    ((Te = null),
      (O.H = ir),
      t === $i || t === co
        ? ((t = Mh()), (Xe = 3))
        : t === ku
          ? ((t = Mh()), (Xe = 4))
          : (Xe =
              t === uc
                ? 8
                : t !== null &&
                    typeof t == "object" &&
                    typeof t.then == "function"
                  ? 6
                  : 1),
      (rn = t),
      Ne === null && ((ut = 1), Co(e, An(t, e.current))));
  }
  function pg() {
    var e = an.current;
    return e === null
      ? !0
      : (Ue & 4194048) === Ue
        ? En === null
        : (Ue & 62914560) === Ue || (Ue & 536870912) !== 0
          ? e === En
          : !1;
  }
  function yg() {
    var e = O.H;
    return ((O.H = ir), e === null ? ir : e);
  }
  function vg() {
    var e = O.A;
    return ((O.A = xb), e);
  }
  function Uo() {
    ((ut = 4),
      ja || ((Ue & 4194048) !== Ue && an.current !== null) || (rl = !0),
      ((Ia & 134217727) === 0 && (xi & 134217727) === 0) ||
        We === null ||
        qa(We, Ue, on, !1));
  }
  function Dc(e, t, n) {
    var i = Ye;
    Ye |= 2;
    var s = yg(),
      c = vg();
    ((We !== e || Ue !== t) && ((ko = null), ul(e, t)), (t = !1));
    var h = ut;
    e: do
      try {
        if (Xe !== 0 && Ne !== null) {
          var y = Ne,
            E = rn;
          switch (Xe) {
            case 8:
              (Mc(), (h = 6));
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              an.current === null && (t = !0);
              var V = Xe;
              if (((Xe = 0), (rn = null), cl(e, y, E, V), n && rl)) {
                h = 0;
                break e;
              }
              break;
            default:
              ((V = Xe), (Xe = 0), (rn = null), cl(e, y, E, V));
          }
        }
        (Cb(), (h = ut));
        break;
      } catch (W) {
        gg(e, W);
      }
    while (!0);
    return (
      t && e.shellSuspendCounter++,
      (ra = hi = null),
      (Ye = i),
      (O.H = s),
      (O.A = c),
      Ne === null && ((We = null), (Ue = 0), no()),
      h
    );
  }
  function Cb() {
    for (; Ne !== null; ) Ag(Ne);
  }
  function wb(e, t) {
    var n = Ye;
    Ye |= 2;
    var i = yg(),
      s = vg();
    We !== e || Ue !== t
      ? ((ko = null), (No = re() + 500), ul(e, t))
      : (rl = li(e, t));
    e: do
      try {
        if (Xe !== 0 && Ne !== null) {
          t = Ne;
          var c = rn;
          t: switch (Xe) {
            case 1:
              ((Xe = 0), (rn = null), cl(e, t, c, 1));
              break;
            case 2:
            case 9:
              if (Oh(c)) {
                ((Xe = 0), (rn = null), bg(t));
                break;
              }
              ((t = function () {
                ((Xe !== 2 && Xe !== 9) || We !== e || (Xe = 7), qn(e));
              }),
                c.then(t, t));
              break e;
            case 3:
              Xe = 7;
              break e;
            case 4:
              Xe = 5;
              break e;
            case 7:
              Oh(c)
                ? ((Xe = 0), (rn = null), bg(t))
                : ((Xe = 0), (rn = null), cl(e, t, c, 7));
              break;
            case 5:
              var h = null;
              switch (Ne.tag) {
                case 26:
                  h = Ne.memoizedState;
                case 5:
                case 27:
                  var y = Ne;
                  if (h ? lp(h) : y.stateNode.complete) {
                    ((Xe = 0), (rn = null));
                    var E = y.sibling;
                    if (E !== null) Ne = E;
                    else {
                      var V = y.return;
                      V !== null ? ((Ne = V), Vo(V)) : (Ne = null);
                    }
                    break t;
                  }
              }
              ((Xe = 0), (rn = null), cl(e, t, c, 5));
              break;
            case 6:
              ((Xe = 0), (rn = null), cl(e, t, c, 6));
              break;
            case 8:
              (Mc(), (ut = 6));
              break e;
            default:
              throw Error(o(462));
          }
        }
        Rb();
        break;
      } catch (W) {
        gg(e, W);
      }
    while (!0);
    return (
      (ra = hi = null),
      (O.H = i),
      (O.A = s),
      (Ye = n),
      Ne !== null ? 0 : ((We = null), (Ue = 0), no(), ut)
    );
  }
  function Rb() {
    for (; Ne !== null && !$(); ) Ag(Ne);
  }
  function Ag(e) {
    var t = Gm(e.alternate, e, pa);
    ((e.memoizedProps = e.pendingProps), t === null ? Vo(e) : (Ne = t));
  }
  function bg(e) {
    var t = e,
      n = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Um(n, t, t.pendingProps, t.type, void 0, Ue);
        break;
      case 11:
        t = Um(n, t, t.pendingProps, t.type.render, t.ref, Ue);
        break;
      case 5:
        Xu(t);
      default:
        (qm(n, t), (t = Ne = vh(t, pa)), (t = Gm(n, t, pa)));
    }
    ((e.memoizedProps = e.pendingProps), t === null ? Vo(e) : (Ne = t));
  }
  function cl(e, t, n, i) {
    ((ra = hi = null), Xu(t), (Wi = null), (Jl = 0));
    var s = t.return;
    try {
      if (gb(e, s, t, n, Ue)) {
        ((ut = 1), Co(e, An(n, e.current)), (Ne = null));
        return;
      }
    } catch (c) {
      if (s !== null) throw ((Ne = s), c);
      ((ut = 1), Co(e, An(n, e.current)), (Ne = null));
      return;
    }
    t.flags & 32768
      ? (He || i === 1
          ? (e = !0)
          : rl || (Ue & 536870912) !== 0
            ? (e = !1)
            : ((ja = e = !0),
              (i === 2 || i === 9 || i === 3 || i === 6) &&
                ((i = an.current),
                i !== null && i.tag === 13 && (i.flags |= 16384))),
        _g(t, e))
      : Vo(t);
  }
  function Vo(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        _g(t, ja);
        return;
      }
      e = t.return;
      var n = vb(t.alternate, t, pa);
      if (n !== null) {
        Ne = n;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        Ne = t;
        return;
      }
      Ne = t = e;
    } while (t !== null);
    ut === 0 && (ut = 5);
  }
  function _g(e, t) {
    do {
      var n = Ab(e.alternate, e);
      if (n !== null) {
        ((n.flags &= 32767), (Ne = n));
        return;
      }
      if (
        ((n = e.return),
        n !== null &&
          ((n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null)),
        !t && ((e = e.sibling), e !== null))
      ) {
        Ne = e;
        return;
      }
      Ne = e = n;
    } while (e !== null);
    ((ut = 6), (Ne = null));
  }
  function xg(e, t, n, i, s, c, h, y, E) {
    e.cancelPendingCommit = null;
    do Qo();
    while (xt !== 0);
    if ((Ye & 6) !== 0) throw Error(o(327));
    if (t !== null) {
      if (t === e.current) throw Error(o(177));
      if (
        ((c = t.lanes | t.childLanes),
        (c |= bu),
        jr(e, n, c, h, y, E),
        e === We && ((Ne = We = null), (Ue = 0)),
        (sl = t),
        (Ya = e),
        (ya = n),
        (Tc = c),
        (Oc = s),
        (fg = i),
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
          ? ((e.callbackNode = null),
            (e.callbackPriority = 0),
            Mb(je, function () {
              return (Rg(), null);
            }))
          : ((e.callbackNode = null), (e.callbackPriority = 0)),
        (i = (t.flags & 13878) !== 0),
        (t.subtreeFlags & 13878) !== 0 || i)
      ) {
        ((i = O.T), (O.T = null), (s = D.p), (D.p = 2), (h = Ye), (Ye |= 4));
        try {
          bb(e, t, n);
        } finally {
          ((Ye = h), (D.p = s), (O.T = i));
        }
      }
      ((xt = 1), Eg(), Sg(), Cg());
    }
  }
  function Eg() {
    if (xt === 1) {
      xt = 0;
      var e = Ya,
        t = sl,
        n = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || n) {
        ((n = O.T), (O.T = null));
        var i = D.p;
        D.p = 2;
        var s = Ye;
        Ye |= 4;
        try {
          ag(t, e);
          var c = Yc,
            h = uh(e.containerInfo),
            y = c.focusedElem,
            E = c.selectionRange;
          if (
            h !== y &&
            y &&
            y.ownerDocument &&
            sh(y.ownerDocument.documentElement, y)
          ) {
            if (E !== null && gu(y)) {
              var V = E.start,
                W = E.end;
              if ((W === void 0 && (W = V), "selectionStart" in y))
                ((y.selectionStart = V),
                  (y.selectionEnd = Math.min(W, y.value.length)));
              else {
                var ne = y.ownerDocument || document,
                  G = (ne && ne.defaultView) || window;
                if (G.getSelection) {
                  var X = G.getSelection(),
                    ye = y.textContent.length,
                    Ce = Math.min(E.start, ye),
                    $e = E.end === void 0 ? Ce : Math.min(E.end, ye);
                  !X.extend && Ce > $e && ((h = $e), ($e = Ce), (Ce = h));
                  var B = oh(y, Ce),
                    R = oh(y, $e);
                  if (
                    B &&
                    R &&
                    (X.rangeCount !== 1 ||
                      X.anchorNode !== B.node ||
                      X.anchorOffset !== B.offset ||
                      X.focusNode !== R.node ||
                      X.focusOffset !== R.offset)
                  ) {
                    var U = ne.createRange();
                    (U.setStart(B.node, B.offset),
                      X.removeAllRanges(),
                      Ce > $e
                        ? (X.addRange(U), X.extend(R.node, R.offset))
                        : (U.setEnd(R.node, R.offset), X.addRange(U)));
                  }
                }
              }
            }
            for (ne = [], X = y; (X = X.parentNode); )
              X.nodeType === 1 &&
                ne.push({ element: X, left: X.scrollLeft, top: X.scrollTop });
            for (
              typeof y.focus == "function" && y.focus(), y = 0;
              y < ne.length;
              y++
            ) {
              var ee = ne[y];
              ((ee.element.scrollLeft = ee.left),
                (ee.element.scrollTop = ee.top));
            }
          }
          ((Po = !!Gc), (Yc = Gc = null));
        } finally {
          ((Ye = s), (D.p = i), (O.T = n));
        }
      }
      ((e.current = t), (xt = 2));
    }
  }
  function Sg() {
    if (xt === 2) {
      xt = 0;
      var e = Ya,
        t = sl,
        n = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || n) {
        ((n = O.T), (O.T = null));
        var i = D.p;
        D.p = 2;
        var s = Ye;
        Ye |= 4;
        try {
          $m(e, t.alternate, t);
        } finally {
          ((Ye = s), (D.p = i), (O.T = n));
        }
      }
      xt = 3;
    }
  }
  function Cg() {
    if (xt === 4 || xt === 3) {
      ((xt = 0), me());
      var e = Ya,
        t = sl,
        n = ya,
        i = fg;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
        ? (xt = 5)
        : ((xt = 0), (sl = Ya = null), wg(e, e.pendingLanes));
      var s = e.pendingLanes;
      if (
        (s === 0 && (Ga = null),
        Nl(n),
        (t = t.stateNode),
        mt && typeof mt.onCommitFiberRoot == "function")
      )
        try {
          mt.onCommitFiberRoot(gn, t, void 0, (t.current.flags & 128) === 128);
        } catch {}
      if (i !== null) {
        ((t = O.T), (s = D.p), (D.p = 2), (O.T = null));
        try {
          for (var c = e.onRecoverableError, h = 0; h < i.length; h++) {
            var y = i[h];
            c(y.value, { componentStack: y.stack });
          }
        } finally {
          ((O.T = t), (D.p = s));
        }
      }
      ((ya & 3) !== 0 && Qo(),
        qn(e),
        (s = e.pendingLanes),
        (n & 261930) !== 0 && (s & 42) !== 0
          ? e === zc
            ? hr++
            : ((hr = 0), (zc = e))
          : (hr = 0),
        mr(0));
    }
  }
  function wg(e, t) {
    (e.pooledCacheLanes &= t) === 0 &&
      ((t = e.pooledCache), t != null && ((e.pooledCache = null), Fl(t)));
  }
  function Qo() {
    return (Eg(), Sg(), Cg(), Rg());
  }
  function Rg() {
    if (xt !== 5) return !1;
    var e = Ya,
      t = Tc;
    Tc = 0;
    var n = Nl(ya),
      i = O.T,
      s = D.p;
    try {
      ((D.p = 32 > n ? 32 : n), (O.T = null), (n = Oc), (Oc = null));
      var c = Ya,
        h = ya;
      if (((xt = 0), (sl = Ya = null), (ya = 0), (Ye & 6) !== 0))
        throw Error(o(331));
      var y = Ye;
      if (
        ((Ye |= 4),
        sg(c.current),
        lg(c, c.current, h, n),
        (Ye = y),
        mr(0, !1),
        mt && typeof mt.onPostCommitFiberRoot == "function")
      )
        try {
          mt.onPostCommitFiberRoot(gn, c);
        } catch {}
      return !0;
    } finally {
      ((D.p = s), (O.T = i), wg(e, t));
    }
  }
  function Tg(e, t, n) {
    ((t = An(n, t)),
      (t = sc(e.stateNode, t, 2)),
      (e = Ua(e, t, 2)),
      e !== null && (ea(e, 2), qn(e)));
  }
  function Fe(e, t, n) {
    if (e.tag === 3) Tg(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Tg(t, e, n);
          break;
        } else if (t.tag === 1) {
          var i = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof i.componentDidCatch == "function" &&
              (Ga === null || !Ga.has(i)))
          ) {
            ((e = An(n, e)),
              (n = Om(2)),
              (i = Ua(t, n, 2)),
              i !== null && (zm(n, i, t, e), ea(i, 2), qn(i)));
            break;
          }
        }
        t = t.return;
      }
  }
  function Bc(e, t, n) {
    var i = e.pingCache;
    if (i === null) {
      i = e.pingCache = new Eb();
      var s = new Set();
      i.set(t, s);
    } else ((s = i.get(t)), s === void 0 && ((s = new Set()), i.set(t, s)));
    s.has(n) ||
      ((Cc = !0), s.add(n), (e = Tb.bind(null, e, t, n)), t.then(e, e));
  }
  function Tb(e, t, n) {
    var i = e.pingCache;
    (i !== null && i.delete(t),
      (e.pingedLanes |= e.suspendedLanes & n),
      (e.warmLanes &= ~n),
      We === e &&
        (Ue & n) === n &&
        (ut === 4 || (ut === 3 && (Ue & 62914560) === Ue && 300 > re() - Bo)
          ? (Ye & 2) === 0 && ul(e, 0)
          : (wc |= n),
        ol === Ue && (ol = 0)),
      qn(e));
  }
  function Og(e, t) {
    (t === 0 && (t = Hr()), (e = ci(e, t)), e !== null && (ea(e, t), qn(e)));
  }
  function Ob(e) {
    var t = e.memoizedState,
      n = 0;
    (t !== null && (n = t.retryLane), Og(e, n));
  }
  function zb(e, t) {
    var n = 0;
    switch (e.tag) {
      case 31:
      case 13:
        var i = e.stateNode,
          s = e.memoizedState;
        s !== null && (n = s.retryLane);
        break;
      case 19:
        i = e.stateNode;
        break;
      case 22:
        i = e.stateNode._retryCache;
        break;
      default:
        throw Error(o(314));
    }
    (i !== null && i.delete(t), Og(e, n));
  }
  function Mb(e, t) {
    return C(e, t);
  }
  var Ho = null,
    fl = null,
    Nc = !1,
    jo = !1,
    kc = !1,
    Ka = 0;
  function qn(e) {
    (e !== fl &&
      e.next === null &&
      (fl === null ? (Ho = fl = e) : (fl = fl.next = e)),
      (jo = !0),
      Nc || ((Nc = !0), Bb()));
  }
  function mr(e, t) {
    if (!kc && jo) {
      kc = !0;
      do
        for (var n = !1, i = Ho; i !== null; ) {
          if (e !== 0) {
            var s = i.pendingLanes;
            if (s === 0) var c = 0;
            else {
              var h = i.suspendedLanes,
                y = i.pingedLanes;
              ((c = (1 << (31 - Be(42 | e) + 1)) - 1),
                (c &= s & ~(h & ~y)),
                (c = c & 201326741 ? (c & 201326741) | 1 : c ? c | 2 : 0));
            }
            c !== 0 && ((n = !0), Bg(i, c));
          } else
            ((c = Ue),
              (c = ii(
                i,
                i === We ? c : 0,
                i.cancelPendingCommit !== null || i.timeoutHandle !== -1
              )),
              (c & 3) === 0 || li(i, c) || ((n = !0), Bg(i, c)));
          i = i.next;
        }
      while (n);
      kc = !1;
    }
  }
  function Db() {
    zg();
  }
  function zg() {
    jo = Nc = !1;
    var e = 0;
    Ka !== 0 && Gb() && (e = Ka);
    for (var t = re(), n = null, i = Ho; i !== null; ) {
      var s = i.next,
        c = Mg(i, t);
      (c === 0
        ? ((i.next = null),
          n === null ? (Ho = s) : (n.next = s),
          s === null && (fl = n))
        : ((n = i), (e !== 0 || (c & 3) !== 0) && (jo = !0)),
        (i = s));
    }
    ((xt !== 0 && xt !== 5) || mr(e), Ka !== 0 && (Ka = 0));
  }
  function Mg(e, t) {
    for (
      var n = e.suspendedLanes,
        i = e.pingedLanes,
        s = e.expirationTimes,
        c = e.pendingLanes & -62914561;
      0 < c;

    ) {
      var h = 31 - Be(c),
        y = 1 << h,
        E = s[h];
      (E === -1
        ? ((y & n) === 0 || (y & i) !== 0) && (s[h] = Js(y, t))
        : E <= t && (e.expiredLanes |= y),
        (c &= ~y));
    }
    if (
      ((t = We),
      (n = Ue),
      (n = ii(
        e,
        e === t ? n : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1
      )),
      (i = e.callbackNode),
      n === 0 ||
        (e === t && (Xe === 2 || Xe === 9)) ||
        e.cancelPendingCommit !== null)
    )
      return (
        i !== null && i !== null && L(i),
        (e.callbackNode = null),
        (e.callbackPriority = 0)
      );
    if ((n & 3) === 0 || li(e, n)) {
      if (((t = n & -n), t === e.callbackPriority)) return t;
      switch ((i !== null && L(i), Nl(n))) {
        case 2:
        case 8:
          n = Qe;
          break;
        case 32:
          n = je;
          break;
        case 268435456:
          n = $t;
          break;
        default:
          n = je;
      }
      return (
        (i = Dg.bind(null, e)),
        (n = C(n, i)),
        (e.callbackPriority = t),
        (e.callbackNode = n),
        t
      );
    }
    return (
      i !== null && i !== null && L(i),
      (e.callbackPriority = 2),
      (e.callbackNode = null),
      2
    );
  }
  function Dg(e, t) {
    if (xt !== 0 && xt !== 5)
      return ((e.callbackNode = null), (e.callbackPriority = 0), null);
    var n = e.callbackNode;
    if (Qo() && e.callbackNode !== n) return null;
    var i = Ue;
    return (
      (i = ii(
        e,
        e === We ? i : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1
      )),
      i === 0
        ? null
        : (hg(e, i, t),
          Mg(e, re()),
          e.callbackNode != null && e.callbackNode === n
            ? Dg.bind(null, e)
            : null)
    );
  }
  function Bg(e, t) {
    if (Qo()) return null;
    hg(e, t, !0);
  }
  function Bb() {
    qb(function () {
      (Ye & 6) !== 0 ? C(xe, Db) : zg();
    });
  }
  function Lc() {
    if (Ka === 0) {
      var e = Ji;
      (e === 0 && ((e = Mn), (Mn <<= 1), (Mn & 261888) === 0 && (Mn = 256)),
        (Ka = e));
    }
    return Ka;
  }
  function Ng(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean"
      ? null
      : typeof e == "function"
        ? e
        : Fr("" + e);
  }
  function kg(e, t) {
    var n = t.ownerDocument.createElement("input");
    return (
      (n.name = t.name),
      (n.value = t.value),
      e.id && n.setAttribute("form", e.id),
      t.parentNode.insertBefore(n, t),
      (e = new FormData(e)),
      n.parentNode.removeChild(n),
      e
    );
  }
  function Nb(e, t, n, i, s) {
    if (t === "submit" && n && n.stateNode === s) {
      var c = Ng((s[It] || null).action),
        h = i.submitter;
      h &&
        ((t = (t = h[It] || null)
          ? Ng(t.formAction)
          : h.getAttribute("formAction")),
        t !== null && ((c = t), (h = null)));
      var y = new $r("action", "action", null, i, s);
      e.push({
        event: y,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (i.defaultPrevented) {
                if (Ka !== 0) {
                  var E = h ? kg(s, h) : new FormData(s);
                  nc(
                    n,
                    { pending: !0, data: E, method: s.method, action: c },
                    null,
                    E
                  );
                }
              } else
                typeof c == "function" &&
                  (y.preventDefault(),
                  (E = h ? kg(s, h) : new FormData(s)),
                  nc(
                    n,
                    { pending: !0, data: E, method: s.method, action: c },
                    c,
                    E
                  ));
            },
            currentTarget: s,
          },
        ],
      });
    }
  }
  for (var Uc = 0; Uc < Au.length; Uc++) {
    var Vc = Au[Uc],
      kb = Vc.toLowerCase(),
      Lb = Vc[0].toUpperCase() + Vc.slice(1);
    Nn(kb, "on" + Lb);
  }
  (Nn(dh, "onAnimationEnd"),
    Nn(hh, "onAnimationIteration"),
    Nn(mh, "onAnimationStart"),
    Nn("dblclick", "onDoubleClick"),
    Nn("focusin", "onFocus"),
    Nn("focusout", "onBlur"),
    Nn($A, "onTransitionRun"),
    Nn(WA, "onTransitionStart"),
    Nn(eb, "onTransitionCancel"),
    Nn(gh, "onTransitionEnd"),
    Li("onMouseEnter", ["mouseout", "mouseover"]),
    Li("onMouseLeave", ["mouseout", "mouseover"]),
    Li("onPointerEnter", ["pointerout", "pointerover"]),
    Li("onPointerLeave", ["pointerout", "pointerover"]),
    ri(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    ri(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    ri("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    ri(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    ri(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    ri(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    ));
  var gr =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    Ub = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(gr)
    );
  function Lg(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var i = e[n],
        s = i.event;
      i = i.listeners;
      e: {
        var c = void 0;
        if (t)
          for (var h = i.length - 1; 0 <= h; h--) {
            var y = i[h],
              E = y.instance,
              V = y.currentTarget;
            if (((y = y.listener), E !== c && s.isPropagationStopped()))
              break e;
            ((c = y), (s.currentTarget = V));
            try {
              c(s);
            } catch (W) {
              to(W);
            }
            ((s.currentTarget = null), (c = E));
          }
        else
          for (h = 0; h < i.length; h++) {
            if (
              ((y = i[h]),
              (E = y.instance),
              (V = y.currentTarget),
              (y = y.listener),
              E !== c && s.isPropagationStopped())
            )
              break e;
            ((c = y), (s.currentTarget = V));
            try {
              c(s);
            } catch (W) {
              to(W);
            }
            ((s.currentTarget = null), (c = E));
          }
      }
    }
  }
  function ke(e, t) {
    var n = t[Ps];
    n === void 0 && (n = t[Ps] = new Set());
    var i = e + "__bubble";
    n.has(i) || (Ug(t, e, 2, !1), n.add(i));
  }
  function Qc(e, t, n) {
    var i = 0;
    (t && (i |= 4), Ug(n, e, i, t));
  }
  var Io = "_reactListening" + Math.random().toString(36).slice(2);
  function Hc(e) {
    if (!e[Io]) {
      ((e[Io] = !0),
        zd.forEach(function (n) {
          n !== "selectionchange" && (Ub.has(n) || Qc(n, !1, e), Qc(n, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Io] || ((t[Io] = !0), Qc("selectionchange", !1, t));
    }
  }
  function Ug(e, t, n, i) {
    switch (dp(t)) {
      case 2:
        var s = f0;
        break;
      case 8:
        s = d0;
        break;
      default:
        s = tf;
    }
    ((n = s.bind(null, t, n, e)),
      (s = void 0),
      !ru ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (s = !0),
      i
        ? s !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: s })
          : e.addEventListener(t, n, !0)
        : s !== void 0
          ? e.addEventListener(t, n, { passive: s })
          : e.addEventListener(t, n, !1));
  }
  function jc(e, t, n, i, s) {
    var c = i;
    if ((t & 1) === 0 && (t & 2) === 0 && i !== null)
      e: for (;;) {
        if (i === null) return;
        var h = i.tag;
        if (h === 3 || h === 4) {
          var y = i.stateNode.containerInfo;
          if (y === s) break;
          if (h === 4)
            for (h = i.return; h !== null; ) {
              var E = h.tag;
              if ((E === 3 || E === 4) && h.stateNode.containerInfo === s)
                return;
              h = h.return;
            }
          for (; y !== null; ) {
            if (((h = Bi(y)), h === null)) return;
            if (((E = h.tag), E === 5 || E === 6 || E === 26 || E === 27)) {
              i = c = h;
              continue e;
            }
            y = y.parentNode;
          }
        }
        i = i.return;
      }
    Id(function () {
      var V = c,
        W = iu(n),
        ne = [];
      e: {
        var G = ph.get(e);
        if (G !== void 0) {
          var X = $r,
            ye = e;
          switch (e) {
            case "keypress":
              if (Jr(n) === 0) break e;
            case "keydown":
            case "keyup":
              X = zA;
              break;
            case "focusin":
              ((ye = "focus"), (X = cu));
              break;
            case "focusout":
              ((ye = "blur"), (X = cu));
              break;
            case "beforeblur":
            case "afterblur":
              X = cu;
              break;
            case "click":
              if (n.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              X = qd;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              X = vA;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              X = BA;
              break;
            case dh:
            case hh:
            case mh:
              X = _A;
              break;
            case gh:
              X = kA;
              break;
            case "scroll":
            case "scrollend":
              X = pA;
              break;
            case "wheel":
              X = UA;
              break;
            case "copy":
            case "cut":
            case "paste":
              X = EA;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              X = Xd;
              break;
            case "toggle":
            case "beforetoggle":
              X = QA;
          }
          var Ce = (t & 4) !== 0,
            $e = !Ce && (e === "scroll" || e === "scrollend"),
            B = Ce ? (G !== null ? G + "Capture" : null) : G;
          Ce = [];
          for (var R = V, U; R !== null; ) {
            var ee = R;
            if (
              ((U = ee.stateNode),
              (ee = ee.tag),
              (ee !== 5 && ee !== 26 && ee !== 27) ||
                U === null ||
                B === null ||
                ((ee = Ul(R, B)), ee != null && Ce.push(pr(R, ee, U))),
              $e)
            )
              break;
            R = R.return;
          }
          0 < Ce.length &&
            ((G = new X(G, ye, null, n, W)),
            ne.push({ event: G, listeners: Ce }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((G = e === "mouseover" || e === "pointerover"),
            (X = e === "mouseout" || e === "pointerout"),
            G &&
              n !== au &&
              (ye = n.relatedTarget || n.fromElement) &&
              (Bi(ye) || ye[Di]))
          )
            break e;
          if (
            (X || G) &&
            ((G =
              W.window === W
                ? W
                : (G = W.ownerDocument)
                  ? G.defaultView || G.parentWindow
                  : window),
            X
              ? ((ye = n.relatedTarget || n.toElement),
                (X = V),
                (ye = ye ? Bi(ye) : null),
                ye !== null &&
                  (($e = f(ye)),
                  (Ce = ye.tag),
                  ye !== $e || (Ce !== 5 && Ce !== 27 && Ce !== 6)) &&
                  (ye = null))
              : ((X = null), (ye = V)),
            X !== ye)
          ) {
            if (
              ((Ce = qd),
              (ee = "onMouseLeave"),
              (B = "onMouseEnter"),
              (R = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((Ce = Xd),
                (ee = "onPointerLeave"),
                (B = "onPointerEnter"),
                (R = "pointer")),
              ($e = X == null ? G : Ll(X)),
              (U = ye == null ? G : Ll(ye)),
              (G = new Ce(ee, R + "leave", X, n, W)),
              (G.target = $e),
              (G.relatedTarget = U),
              (ee = null),
              Bi(W) === V &&
                ((Ce = new Ce(B, R + "enter", ye, n, W)),
                (Ce.target = U),
                (Ce.relatedTarget = $e),
                (ee = Ce)),
              ($e = ee),
              X && ye)
            )
              t: {
                for (Ce = Vb, B = X, R = ye, U = 0, ee = B; ee; ee = Ce(ee))
                  U++;
                ee = 0;
                for (var Se = R; Se; Se = Ce(Se)) ee++;
                for (; 0 < U - ee; ) ((B = Ce(B)), U--);
                for (; 0 < ee - U; ) ((R = Ce(R)), ee--);
                for (; U--; ) {
                  if (B === R || (R !== null && B === R.alternate)) {
                    Ce = B;
                    break t;
                  }
                  ((B = Ce(B)), (R = Ce(R)));
                }
                Ce = null;
              }
            else Ce = null;
            (X !== null && Vg(ne, G, X, Ce, !1),
              ye !== null && $e !== null && Vg(ne, $e, ye, Ce, !0));
          }
        }
        e: {
          if (
            ((G = V ? Ll(V) : window),
            (X = G.nodeName && G.nodeName.toLowerCase()),
            X === "select" || (X === "input" && G.type === "file"))
          )
            var Ie = th;
          else if (Wd(G))
            if (nh) Ie = ZA;
            else {
              Ie = XA;
              var be = KA;
            }
          else
            ((X = G.nodeName),
              !X ||
              X.toLowerCase() !== "input" ||
              (G.type !== "checkbox" && G.type !== "radio")
                ? V && nu(V.elementType) && (Ie = th)
                : (Ie = FA));
          if (Ie && (Ie = Ie(e, V))) {
            eh(ne, Ie, n, W);
            break e;
          }
          (be && be(e, G, V),
            e === "focusout" &&
              V &&
              G.type === "number" &&
              V.memoizedProps.value != null &&
              tu(G, "number", G.value));
        }
        switch (((be = V ? Ll(V) : window), e)) {
          case "focusin":
            (Wd(be) || be.contentEditable === "true") &&
              ((Ii = be), (pu = V), (ql = null));
            break;
          case "focusout":
            ql = pu = Ii = null;
            break;
          case "mousedown":
            yu = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((yu = !1), ch(ne, n, W));
            break;
          case "selectionchange":
            if (PA) break;
          case "keydown":
          case "keyup":
            ch(ne, n, W);
        }
        var Oe;
        if (du)
          e: {
            switch (e) {
              case "compositionstart":
                var Ve = "onCompositionStart";
                break e;
              case "compositionend":
                Ve = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Ve = "onCompositionUpdate";
                break e;
            }
            Ve = void 0;
          }
        else
          ji
            ? Pd(e, n) && (Ve = "onCompositionEnd")
            : e === "keydown" &&
              n.keyCode === 229 &&
              (Ve = "onCompositionStart");
        (Ve &&
          (Fd &&
            n.locale !== "ko" &&
            (ji || Ve !== "onCompositionStart"
              ? Ve === "onCompositionEnd" && ji && (Oe = Gd())
              : ((za = W),
                (ou = "value" in za ? za.value : za.textContent),
                (ji = !0))),
          (be = Go(V, Ve)),
          0 < be.length &&
            ((Ve = new Kd(Ve, e, null, n, W)),
            ne.push({ event: Ve, listeners: be }),
            Oe
              ? (Ve.data = Oe)
              : ((Oe = $d(n)), Oe !== null && (Ve.data = Oe)))),
          (Oe = jA ? IA(e, n) : GA(e, n)) &&
            ((Ve = Go(V, "onBeforeInput")),
            0 < Ve.length &&
              ((be = new Kd("onBeforeInput", "beforeinput", null, n, W)),
              ne.push({ event: be, listeners: Ve }),
              (be.data = Oe))),
          Nb(ne, e, V, n, W));
      }
      Lg(ne, t);
    });
  }
  function pr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Go(e, t) {
    for (var n = t + "Capture", i = []; e !== null; ) {
      var s = e,
        c = s.stateNode;
      if (
        ((s = s.tag),
        (s !== 5 && s !== 26 && s !== 27) ||
          c === null ||
          ((s = Ul(e, n)),
          s != null && i.unshift(pr(e, s, c)),
          (s = Ul(e, t)),
          s != null && i.push(pr(e, s, c))),
        e.tag === 3)
      )
        return i;
      e = e.return;
    }
    return [];
  }
  function Vb(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function Vg(e, t, n, i, s) {
    for (var c = t._reactName, h = []; n !== null && n !== i; ) {
      var y = n,
        E = y.alternate,
        V = y.stateNode;
      if (((y = y.tag), E !== null && E === i)) break;
      ((y !== 5 && y !== 26 && y !== 27) ||
        V === null ||
        ((E = V),
        s
          ? ((V = Ul(n, c)), V != null && h.unshift(pr(n, V, E)))
          : s || ((V = Ul(n, c)), V != null && h.push(pr(n, V, E)))),
        (n = n.return));
    }
    h.length !== 0 && e.push({ event: t, listeners: h });
  }
  var Qb = /\r\n?/g,
    Hb = /\u0000|\uFFFD/g;
  function Qg(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        Qb,
        `
`
      )
      .replace(Hb, "");
  }
  function Hg(e, t) {
    return ((t = Qg(t)), Qg(e) === t);
  }
  function Pe(e, t, n, i, s, c) {
    switch (n) {
      case "children":
        typeof i == "string"
          ? t === "body" || (t === "textarea" && i === "") || Vi(e, i)
          : (typeof i == "number" || typeof i == "bigint") &&
            t !== "body" &&
            Vi(e, "" + i);
        break;
      case "className":
        Kr(e, "class", i);
        break;
      case "tabIndex":
        Kr(e, "tabindex", i);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Kr(e, n, i);
        break;
      case "style":
        Hd(e, i, c);
        break;
      case "data":
        if (t !== "object") {
          Kr(e, "data", i);
          break;
        }
      case "src":
      case "href":
        if (i === "" && (t !== "a" || n !== "href")) {
          e.removeAttribute(n);
          break;
        }
        if (
          i == null ||
          typeof i == "function" ||
          typeof i == "symbol" ||
          typeof i == "boolean"
        ) {
          e.removeAttribute(n);
          break;
        }
        ((i = Fr("" + i)), e.setAttribute(n, i));
        break;
      case "action":
      case "formAction":
        if (typeof i == "function") {
          e.setAttribute(
            n,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof c == "function" &&
            (n === "formAction"
              ? (t !== "input" && Pe(e, t, "name", s.name, s, null),
                Pe(e, t, "formEncType", s.formEncType, s, null),
                Pe(e, t, "formMethod", s.formMethod, s, null),
                Pe(e, t, "formTarget", s.formTarget, s, null))
              : (Pe(e, t, "encType", s.encType, s, null),
                Pe(e, t, "method", s.method, s, null),
                Pe(e, t, "target", s.target, s, null)));
        if (i == null || typeof i == "symbol" || typeof i == "boolean") {
          e.removeAttribute(n);
          break;
        }
        ((i = Fr("" + i)), e.setAttribute(n, i));
        break;
      case "onClick":
        i != null && (e.onclick = na);
        break;
      case "onScroll":
        i != null && ke("scroll", e);
        break;
      case "onScrollEnd":
        i != null && ke("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (i != null) {
          if (typeof i != "object" || !("__html" in i)) throw Error(o(61));
          if (((n = i.__html), n != null)) {
            if (s.children != null) throw Error(o(60));
            e.innerHTML = n;
          }
        }
        break;
      case "multiple":
        e.multiple = i && typeof i != "function" && typeof i != "symbol";
        break;
      case "muted":
        e.muted = i && typeof i != "function" && typeof i != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          i == null ||
          typeof i == "function" ||
          typeof i == "boolean" ||
          typeof i == "symbol"
        ) {
          e.removeAttribute("xlink:href");
          break;
        }
        ((n = Fr("" + i)),
          e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n));
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        i != null && typeof i != "function" && typeof i != "symbol"
          ? e.setAttribute(n, "" + i)
          : e.removeAttribute(n);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        i && typeof i != "function" && typeof i != "symbol"
          ? e.setAttribute(n, "")
          : e.removeAttribute(n);
        break;
      case "capture":
      case "download":
        i === !0
          ? e.setAttribute(n, "")
          : i !== !1 &&
              i != null &&
              typeof i != "function" &&
              typeof i != "symbol"
            ? e.setAttribute(n, i)
            : e.removeAttribute(n);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        i != null &&
        typeof i != "function" &&
        typeof i != "symbol" &&
        !isNaN(i) &&
        1 <= i
          ? e.setAttribute(n, i)
          : e.removeAttribute(n);
        break;
      case "rowSpan":
      case "start":
        i == null || typeof i == "function" || typeof i == "symbol" || isNaN(i)
          ? e.removeAttribute(n)
          : e.setAttribute(n, i);
        break;
      case "popover":
        (ke("beforetoggle", e), ke("toggle", e), qr(e, "popover", i));
        break;
      case "xlinkActuate":
        ta(e, "http://www.w3.org/1999/xlink", "xlink:actuate", i);
        break;
      case "xlinkArcrole":
        ta(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", i);
        break;
      case "xlinkRole":
        ta(e, "http://www.w3.org/1999/xlink", "xlink:role", i);
        break;
      case "xlinkShow":
        ta(e, "http://www.w3.org/1999/xlink", "xlink:show", i);
        break;
      case "xlinkTitle":
        ta(e, "http://www.w3.org/1999/xlink", "xlink:title", i);
        break;
      case "xlinkType":
        ta(e, "http://www.w3.org/1999/xlink", "xlink:type", i);
        break;
      case "xmlBase":
        ta(e, "http://www.w3.org/XML/1998/namespace", "xml:base", i);
        break;
      case "xmlLang":
        ta(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", i);
        break;
      case "xmlSpace":
        ta(e, "http://www.w3.org/XML/1998/namespace", "xml:space", i);
        break;
      case "is":
        qr(e, "is", i);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < n.length) ||
          (n[0] !== "o" && n[0] !== "O") ||
          (n[1] !== "n" && n[1] !== "N")) &&
          ((n = mA.get(n) || n), qr(e, n, i));
    }
  }
  function Ic(e, t, n, i, s, c) {
    switch (n) {
      case "style":
        Hd(e, i, c);
        break;
      case "dangerouslySetInnerHTML":
        if (i != null) {
          if (typeof i != "object" || !("__html" in i)) throw Error(o(61));
          if (((n = i.__html), n != null)) {
            if (s.children != null) throw Error(o(60));
            e.innerHTML = n;
          }
        }
        break;
      case "children":
        typeof i == "string"
          ? Vi(e, i)
          : (typeof i == "number" || typeof i == "bigint") && Vi(e, "" + i);
        break;
      case "onScroll":
        i != null && ke("scroll", e);
        break;
      case "onScrollEnd":
        i != null && ke("scrollend", e);
        break;
      case "onClick":
        i != null && (e.onclick = na);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Md.hasOwnProperty(n))
          e: {
            if (
              n[0] === "o" &&
              n[1] === "n" &&
              ((s = n.endsWith("Capture")),
              (t = n.slice(2, s ? n.length - 7 : void 0)),
              (c = e[It] || null),
              (c = c != null ? c[n] : null),
              typeof c == "function" && e.removeEventListener(t, c, s),
              typeof i == "function")
            ) {
              (typeof c != "function" &&
                c !== null &&
                (n in e
                  ? (e[n] = null)
                  : e.hasAttribute(n) && e.removeAttribute(n)),
                e.addEventListener(t, i, s));
              break e;
            }
            n in e
              ? (e[n] = i)
              : i === !0
                ? e.setAttribute(n, "")
                : qr(e, n, i);
          }
    }
  }
  function Bt(e, t, n) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        (ke("error", e), ke("load", e));
        var i = !1,
          s = !1,
          c;
        for (c in n)
          if (n.hasOwnProperty(c)) {
            var h = n[c];
            if (h != null)
              switch (c) {
                case "src":
                  i = !0;
                  break;
                case "srcSet":
                  s = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(o(137, t));
                default:
                  Pe(e, t, c, h, n, null);
              }
          }
        (s && Pe(e, t, "srcSet", n.srcSet, n, null),
          i && Pe(e, t, "src", n.src, n, null));
        return;
      case "input":
        ke("invalid", e);
        var y = (c = h = s = null),
          E = null,
          V = null;
        for (i in n)
          if (n.hasOwnProperty(i)) {
            var W = n[i];
            if (W != null)
              switch (i) {
                case "name":
                  s = W;
                  break;
                case "type":
                  h = W;
                  break;
                case "checked":
                  E = W;
                  break;
                case "defaultChecked":
                  V = W;
                  break;
                case "value":
                  c = W;
                  break;
                case "defaultValue":
                  y = W;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (W != null) throw Error(o(137, t));
                  break;
                default:
                  Pe(e, t, i, W, n, null);
              }
          }
        Ld(e, c, y, E, V, h, s, !1);
        return;
      case "select":
        (ke("invalid", e), (i = h = c = null));
        for (s in n)
          if (n.hasOwnProperty(s) && ((y = n[s]), y != null))
            switch (s) {
              case "value":
                c = y;
                break;
              case "defaultValue":
                h = y;
                break;
              case "multiple":
                i = y;
              default:
                Pe(e, t, s, y, n, null);
            }
        ((t = c),
          (n = h),
          (e.multiple = !!i),
          t != null ? Ui(e, !!i, t, !1) : n != null && Ui(e, !!i, n, !0));
        return;
      case "textarea":
        (ke("invalid", e), (c = s = i = null));
        for (h in n)
          if (n.hasOwnProperty(h) && ((y = n[h]), y != null))
            switch (h) {
              case "value":
                i = y;
                break;
              case "defaultValue":
                s = y;
                break;
              case "children":
                c = y;
                break;
              case "dangerouslySetInnerHTML":
                if (y != null) throw Error(o(91));
                break;
              default:
                Pe(e, t, h, y, n, null);
            }
        Vd(e, i, s, c);
        return;
      case "option":
        for (E in n)
          if (n.hasOwnProperty(E) && ((i = n[E]), i != null))
            switch (E) {
              case "selected":
                e.selected =
                  i && typeof i != "function" && typeof i != "symbol";
                break;
              default:
                Pe(e, t, E, i, n, null);
            }
        return;
      case "dialog":
        (ke("beforetoggle", e),
          ke("toggle", e),
          ke("cancel", e),
          ke("close", e));
        break;
      case "iframe":
      case "object":
        ke("load", e);
        break;
      case "video":
      case "audio":
        for (i = 0; i < gr.length; i++) ke(gr[i], e);
        break;
      case "image":
        (ke("error", e), ke("load", e));
        break;
      case "details":
        ke("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        (ke("error", e), ke("load", e));
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (V in n)
          if (n.hasOwnProperty(V) && ((i = n[V]), i != null))
            switch (V) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(o(137, t));
              default:
                Pe(e, t, V, i, n, null);
            }
        return;
      default:
        if (nu(t)) {
          for (W in n)
            n.hasOwnProperty(W) &&
              ((i = n[W]), i !== void 0 && Ic(e, t, W, i, n, void 0));
          return;
        }
    }
    for (y in n)
      n.hasOwnProperty(y) && ((i = n[y]), i != null && Pe(e, t, y, i, n, null));
  }
  function jb(e, t, n, i) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var s = null,
          c = null,
          h = null,
          y = null,
          E = null,
          V = null,
          W = null;
        for (X in n) {
          var ne = n[X];
          if (n.hasOwnProperty(X) && ne != null)
            switch (X) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                E = ne;
              default:
                i.hasOwnProperty(X) || Pe(e, t, X, null, i, ne);
            }
        }
        for (var G in i) {
          var X = i[G];
          if (((ne = n[G]), i.hasOwnProperty(G) && (X != null || ne != null)))
            switch (G) {
              case "type":
                c = X;
                break;
              case "name":
                s = X;
                break;
              case "checked":
                V = X;
                break;
              case "defaultChecked":
                W = X;
                break;
              case "value":
                h = X;
                break;
              case "defaultValue":
                y = X;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (X != null) throw Error(o(137, t));
                break;
              default:
                X !== ne && Pe(e, t, G, X, i, ne);
            }
        }
        eu(e, h, y, E, V, W, c, s);
        return;
      case "select":
        X = h = y = G = null;
        for (c in n)
          if (((E = n[c]), n.hasOwnProperty(c) && E != null))
            switch (c) {
              case "value":
                break;
              case "multiple":
                X = E;
              default:
                i.hasOwnProperty(c) || Pe(e, t, c, null, i, E);
            }
        for (s in i)
          if (
            ((c = i[s]),
            (E = n[s]),
            i.hasOwnProperty(s) && (c != null || E != null))
          )
            switch (s) {
              case "value":
                G = c;
                break;
              case "defaultValue":
                y = c;
                break;
              case "multiple":
                h = c;
              default:
                c !== E && Pe(e, t, s, c, i, E);
            }
        ((t = y),
          (n = h),
          (i = X),
          G != null
            ? Ui(e, !!n, G, !1)
            : !!i != !!n &&
              (t != null ? Ui(e, !!n, t, !0) : Ui(e, !!n, n ? [] : "", !1)));
        return;
      case "textarea":
        X = G = null;
        for (y in n)
          if (
            ((s = n[y]),
            n.hasOwnProperty(y) && s != null && !i.hasOwnProperty(y))
          )
            switch (y) {
              case "value":
                break;
              case "children":
                break;
              default:
                Pe(e, t, y, null, i, s);
            }
        for (h in i)
          if (
            ((s = i[h]),
            (c = n[h]),
            i.hasOwnProperty(h) && (s != null || c != null))
          )
            switch (h) {
              case "value":
                G = s;
                break;
              case "defaultValue":
                X = s;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (s != null) throw Error(o(91));
                break;
              default:
                s !== c && Pe(e, t, h, s, i, c);
            }
        Ud(e, G, X);
        return;
      case "option":
        for (var ye in n)
          if (
            ((G = n[ye]),
            n.hasOwnProperty(ye) && G != null && !i.hasOwnProperty(ye))
          )
            switch (ye) {
              case "selected":
                e.selected = !1;
                break;
              default:
                Pe(e, t, ye, null, i, G);
            }
        for (E in i)
          if (
            ((G = i[E]),
            (X = n[E]),
            i.hasOwnProperty(E) && G !== X && (G != null || X != null))
          )
            switch (E) {
              case "selected":
                e.selected =
                  G && typeof G != "function" && typeof G != "symbol";
                break;
              default:
                Pe(e, t, E, G, i, X);
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var Ce in n)
          ((G = n[Ce]),
            n.hasOwnProperty(Ce) &&
              G != null &&
              !i.hasOwnProperty(Ce) &&
              Pe(e, t, Ce, null, i, G));
        for (V in i)
          if (
            ((G = i[V]),
            (X = n[V]),
            i.hasOwnProperty(V) && G !== X && (G != null || X != null))
          )
            switch (V) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (G != null) throw Error(o(137, t));
                break;
              default:
                Pe(e, t, V, G, i, X);
            }
        return;
      default:
        if (nu(t)) {
          for (var $e in n)
            ((G = n[$e]),
              n.hasOwnProperty($e) &&
                G !== void 0 &&
                !i.hasOwnProperty($e) &&
                Ic(e, t, $e, void 0, i, G));
          for (W in i)
            ((G = i[W]),
              (X = n[W]),
              !i.hasOwnProperty(W) ||
                G === X ||
                (G === void 0 && X === void 0) ||
                Ic(e, t, W, G, i, X));
          return;
        }
    }
    for (var B in n)
      ((G = n[B]),
        n.hasOwnProperty(B) &&
          G != null &&
          !i.hasOwnProperty(B) &&
          Pe(e, t, B, null, i, G));
    for (ne in i)
      ((G = i[ne]),
        (X = n[ne]),
        !i.hasOwnProperty(ne) ||
          G === X ||
          (G == null && X == null) ||
          Pe(e, t, ne, G, i, X));
  }
  function jg(e) {
    switch (e) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function Ib() {
    if (typeof performance.getEntriesByType == "function") {
      for (
        var e = 0, t = 0, n = performance.getEntriesByType("resource"), i = 0;
        i < n.length;
        i++
      ) {
        var s = n[i],
          c = s.transferSize,
          h = s.initiatorType,
          y = s.duration;
        if (c && y && jg(h)) {
          for (h = 0, y = s.responseEnd, i += 1; i < n.length; i++) {
            var E = n[i],
              V = E.startTime;
            if (V > y) break;
            var W = E.transferSize,
              ne = E.initiatorType;
            W &&
              jg(ne) &&
              ((E = E.responseEnd), (h += W * (E < y ? 1 : (y - V) / (E - V))));
          }
          if ((--i, (t += (8 * (c + h)) / (s.duration / 1e3)), e++, 10 < e))
            break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection &&
      ((e = navigator.connection.downlink), typeof e == "number")
      ? e
      : 5;
  }
  var Gc = null,
    Yc = null;
  function Yo(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function Ig(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Gg(e, t) {
    if (e === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return e === 1 && t === "foreignObject" ? 0 : e;
  }
  function qc(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      typeof t.children == "bigint" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Kc = null;
  function Gb() {
    var e = window.event;
    return e && e.type === "popstate"
      ? e === Kc
        ? !1
        : ((Kc = e), !0)
      : ((Kc = null), !1);
  }
  var Yg = typeof setTimeout == "function" ? setTimeout : void 0,
    Yb = typeof clearTimeout == "function" ? clearTimeout : void 0,
    qg = typeof Promise == "function" ? Promise : void 0,
    qb =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof qg < "u"
          ? function (e) {
              return qg.resolve(null).then(e).catch(Kb);
            }
          : Yg;
  function Kb(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function Xa(e) {
    return e === "head";
  }
  function Kg(e, t) {
    var n = t,
      i = 0;
    do {
      var s = n.nextSibling;
      if ((e.removeChild(n), s && s.nodeType === 8))
        if (((n = s.data), n === "/$" || n === "/&")) {
          if (i === 0) {
            (e.removeChild(s), gl(t));
            return;
          }
          i--;
        } else if (
          n === "$" ||
          n === "$?" ||
          n === "$~" ||
          n === "$!" ||
          n === "&"
        )
          i++;
        else if (n === "html") yr(e.ownerDocument.documentElement);
        else if (n === "head") {
          ((n = e.ownerDocument.head), yr(n));
          for (var c = n.firstChild; c; ) {
            var h = c.nextSibling,
              y = c.nodeName;
            (c[kl] ||
              y === "SCRIPT" ||
              y === "STYLE" ||
              (y === "LINK" && c.rel.toLowerCase() === "stylesheet") ||
              n.removeChild(c),
              (c = h));
          }
        } else n === "body" && yr(e.ownerDocument.body);
      n = s;
    } while (n);
    gl(t);
  }
  function Xg(e, t) {
    var n = e;
    e = 0;
    do {
      var i = n.nextSibling;
      if (
        (n.nodeType === 1
          ? t
            ? ((n._stashedDisplay = n.style.display),
              (n.style.display = "none"))
            : ((n.style.display = n._stashedDisplay || ""),
              n.getAttribute("style") === "" && n.removeAttribute("style"))
          : n.nodeType === 3 &&
            (t
              ? ((n._stashedText = n.nodeValue), (n.nodeValue = ""))
              : (n.nodeValue = n._stashedText || "")),
        i && i.nodeType === 8)
      )
        if (((n = i.data), n === "/$")) {
          if (e === 0) break;
          e--;
        } else (n !== "$" && n !== "$?" && n !== "$~" && n !== "$!") || e++;
      n = i;
    } while (n);
  }
  function Xc(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var n = t;
      switch (((t = t.nextSibling), n.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          (Xc(n), $s(n));
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (n.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(n);
    }
  }
  function Xb(e, t, n, i) {
    for (; e.nodeType === 1; ) {
      var s = n;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!i && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
      } else if (i) {
        if (!e[kl])
          switch (t) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (
                ((c = e.getAttribute("rel")),
                c === "stylesheet" && e.hasAttribute("data-precedence"))
              )
                break;
              if (
                c !== s.rel ||
                e.getAttribute("href") !==
                  (s.href == null || s.href === "" ? null : s.href) ||
                e.getAttribute("crossorigin") !==
                  (s.crossOrigin == null ? null : s.crossOrigin) ||
                e.getAttribute("title") !== (s.title == null ? null : s.title)
              )
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (
                ((c = e.getAttribute("src")),
                (c !== (s.src == null ? null : s.src) ||
                  e.getAttribute("type") !== (s.type == null ? null : s.type) ||
                  e.getAttribute("crossorigin") !==
                    (s.crossOrigin == null ? null : s.crossOrigin)) &&
                  c &&
                  e.hasAttribute("async") &&
                  !e.hasAttribute("itemprop"))
              )
                break;
              return e;
            default:
              return e;
          }
      } else if (t === "input" && e.type === "hidden") {
        var c = s.name == null ? null : "" + s.name;
        if (s.type === "hidden" && e.getAttribute("name") === c) return e;
      } else return e;
      if (((e = Sn(e.nextSibling)), e === null)) break;
    }
    return null;
  }
  function Fb(e, t, n) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") &&
          !n) ||
        ((e = Sn(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function Fg(e, t) {
    for (; e.nodeType !== 8; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") &&
          !t) ||
        ((e = Sn(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function Fc(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function Zc(e) {
    return (
      e.data === "$!" ||
      (e.data === "$?" && e.ownerDocument.readyState !== "loading")
    );
  }
  function Zb(e, t) {
    var n = e.ownerDocument;
    if (e.data === "$~") e._reactRetry = t;
    else if (e.data !== "$?" || n.readyState !== "loading") t();
    else {
      var i = function () {
        (t(), n.removeEventListener("DOMContentLoaded", i));
      };
      (n.addEventListener("DOMContentLoaded", i), (e._reactRetry = i));
    }
  }
  function Sn(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (
          ((t = e.data),
          t === "$" ||
            t === "$!" ||
            t === "$?" ||
            t === "$~" ||
            t === "&" ||
            t === "F!" ||
            t === "F")
        )
          break;
        if (t === "/$" || t === "/&") return null;
      }
    }
    return e;
  }
  var Jc = null;
  function Zg(e) {
    e = e.nextSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "/$" || n === "/&") {
          if (t === 0) return Sn(e.nextSibling);
          t--;
        } else
          (n !== "$" && n !== "$!" && n !== "$?" && n !== "$~" && n !== "&") ||
            t++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function Jg(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?" || n === "$~" || n === "&") {
          if (t === 0) return e;
          t--;
        } else (n !== "/$" && n !== "/&") || t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function Pg(e, t, n) {
    switch (((t = Yo(n)), e)) {
      case "html":
        if (((e = t.documentElement), !e)) throw Error(o(452));
        return e;
      case "head":
        if (((e = t.head), !e)) throw Error(o(453));
        return e;
      case "body":
        if (((e = t.body), !e)) throw Error(o(454));
        return e;
      default:
        throw Error(o(451));
    }
  }
  function yr(e) {
    for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
    $s(e);
  }
  var Cn = new Map(),
    $g = new Set();
  function qo(e) {
    return typeof e.getRootNode == "function"
      ? e.getRootNode()
      : e.nodeType === 9
        ? e
        : e.ownerDocument;
  }
  var va = D.d;
  D.d = { f: Jb, r: Pb, D: $b, C: Wb, L: e0, m: t0, X: a0, S: n0, M: i0 };
  function Jb() {
    var e = va.f(),
      t = Lo();
    return e || t;
  }
  function Pb(e) {
    var t = Ni(e);
    t !== null && t.tag === 5 && t.type === "form" ? gm(t) : va.r(e);
  }
  var dl = typeof document > "u" ? null : document;
  function Wg(e, t, n) {
    var i = dl;
    if (i && typeof t == "string" && t) {
      var s = yn(t);
      ((s = 'link[rel="' + e + '"][href="' + s + '"]'),
        typeof n == "string" && (s += '[crossorigin="' + n + '"]'),
        $g.has(s) ||
          ($g.add(s),
          (e = { rel: e, crossOrigin: n, href: t }),
          i.querySelector(s) === null &&
            ((t = i.createElement("link")),
            Bt(t, "link", e),
            wt(t),
            i.head.appendChild(t))));
    }
  }
  function $b(e) {
    (va.D(e), Wg("dns-prefetch", e, null));
  }
  function Wb(e, t) {
    (va.C(e, t), Wg("preconnect", e, t));
  }
  function e0(e, t, n) {
    va.L(e, t, n);
    var i = dl;
    if (i && e && t) {
      var s = 'link[rel="preload"][as="' + yn(t) + '"]';
      t === "image" && n && n.imageSrcSet
        ? ((s += '[imagesrcset="' + yn(n.imageSrcSet) + '"]'),
          typeof n.imageSizes == "string" &&
            (s += '[imagesizes="' + yn(n.imageSizes) + '"]'))
        : (s += '[href="' + yn(e) + '"]');
      var c = s;
      switch (t) {
        case "style":
          c = hl(e);
          break;
        case "script":
          c = ml(e);
      }
      Cn.has(c) ||
        ((e = A(
          {
            rel: "preload",
            href: t === "image" && n && n.imageSrcSet ? void 0 : e,
            as: t,
          },
          n
        )),
        Cn.set(c, e),
        i.querySelector(s) !== null ||
          (t === "style" && i.querySelector(vr(c))) ||
          (t === "script" && i.querySelector(Ar(c))) ||
          ((t = i.createElement("link")),
          Bt(t, "link", e),
          wt(t),
          i.head.appendChild(t)));
    }
  }
  function t0(e, t) {
    va.m(e, t);
    var n = dl;
    if (n && e) {
      var i = t && typeof t.as == "string" ? t.as : "script",
        s =
          'link[rel="modulepreload"][as="' + yn(i) + '"][href="' + yn(e) + '"]',
        c = s;
      switch (i) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          c = ml(e);
      }
      if (
        !Cn.has(c) &&
        ((e = A({ rel: "modulepreload", href: e }, t)),
        Cn.set(c, e),
        n.querySelector(s) === null)
      ) {
        switch (i) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(Ar(c))) return;
        }
        ((i = n.createElement("link")),
          Bt(i, "link", e),
          wt(i),
          n.head.appendChild(i));
      }
    }
  }
  function n0(e, t, n) {
    va.S(e, t, n);
    var i = dl;
    if (i && e) {
      var s = ki(i).hoistableStyles,
        c = hl(e);
      t = t || "default";
      var h = s.get(c);
      if (!h) {
        var y = { loading: 0, preload: null };
        if ((h = i.querySelector(vr(c)))) y.loading = 5;
        else {
          ((e = A({ rel: "stylesheet", href: e, "data-precedence": t }, n)),
            (n = Cn.get(c)) && Pc(e, n));
          var E = (h = i.createElement("link"));
          (wt(E),
            Bt(E, "link", e),
            (E._p = new Promise(function (V, W) {
              ((E.onload = V), (E.onerror = W));
            })),
            E.addEventListener("load", function () {
              y.loading |= 1;
            }),
            E.addEventListener("error", function () {
              y.loading |= 2;
            }),
            (y.loading |= 4),
            Ko(h, t, i));
        }
        ((h = { type: "stylesheet", instance: h, count: 1, state: y }),
          s.set(c, h));
      }
    }
  }
  function a0(e, t) {
    va.X(e, t);
    var n = dl;
    if (n && e) {
      var i = ki(n).hoistableScripts,
        s = ml(e),
        c = i.get(s);
      c ||
        ((c = n.querySelector(Ar(s))),
        c ||
          ((e = A({ src: e, async: !0 }, t)),
          (t = Cn.get(s)) && $c(e, t),
          (c = n.createElement("script")),
          wt(c),
          Bt(c, "link", e),
          n.head.appendChild(c)),
        (c = { type: "script", instance: c, count: 1, state: null }),
        i.set(s, c));
    }
  }
  function i0(e, t) {
    va.M(e, t);
    var n = dl;
    if (n && e) {
      var i = ki(n).hoistableScripts,
        s = ml(e),
        c = i.get(s);
      c ||
        ((c = n.querySelector(Ar(s))),
        c ||
          ((e = A({ src: e, async: !0, type: "module" }, t)),
          (t = Cn.get(s)) && $c(e, t),
          (c = n.createElement("script")),
          wt(c),
          Bt(c, "link", e),
          n.head.appendChild(c)),
        (c = { type: "script", instance: c, count: 1, state: null }),
        i.set(s, c));
    }
  }
  function ep(e, t, n, i) {
    var s = (s = q.current) ? qo(s) : null;
    if (!s) throw Error(o(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string"
          ? ((t = hl(n.href)),
            (n = ki(s).hoistableStyles),
            (i = n.get(t)),
            i ||
              ((i = { type: "style", instance: null, count: 0, state: null }),
              n.set(t, i)),
            i)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          n.rel === "stylesheet" &&
          typeof n.href == "string" &&
          typeof n.precedence == "string"
        ) {
          e = hl(n.href);
          var c = ki(s).hoistableStyles,
            h = c.get(e);
          if (
            (h ||
              ((s = s.ownerDocument || s),
              (h = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              c.set(e, h),
              (c = s.querySelector(vr(e))) &&
                !c._p &&
                ((h.instance = c), (h.state.loading = 5)),
              Cn.has(e) ||
                ((n = {
                  rel: "preload",
                  as: "style",
                  href: n.href,
                  crossOrigin: n.crossOrigin,
                  integrity: n.integrity,
                  media: n.media,
                  hrefLang: n.hrefLang,
                  referrerPolicy: n.referrerPolicy,
                }),
                Cn.set(e, n),
                c || l0(s, e, n, h.state))),
            t && i === null)
          )
            throw Error(o(528, ""));
          return h;
        }
        if (t && i !== null) throw Error(o(529, ""));
        return null;
      case "script":
        return (
          (t = n.async),
          (n = n.src),
          typeof n == "string" &&
          t &&
          typeof t != "function" &&
          typeof t != "symbol"
            ? ((t = ml(n)),
              (n = ki(s).hoistableScripts),
              (i = n.get(t)),
              i ||
                ((i = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                n.set(t, i)),
              i)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(o(444, e));
    }
  }
  function hl(e) {
    return 'href="' + yn(e) + '"';
  }
  function vr(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function tp(e) {
    return A({}, e, { "data-precedence": e.precedence, precedence: null });
  }
  function l0(e, t, n, i) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]")
      ? (i.loading = 1)
      : ((t = e.createElement("link")),
        (i.preload = t),
        t.addEventListener("load", function () {
          return (i.loading |= 1);
        }),
        t.addEventListener("error", function () {
          return (i.loading |= 2);
        }),
        Bt(t, "link", n),
        wt(t),
        e.head.appendChild(t));
  }
  function ml(e) {
    return '[src="' + yn(e) + '"]';
  }
  function Ar(e) {
    return "script[async]" + e;
  }
  function np(e, t, n) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case "style":
          var i = e.querySelector('style[data-href~="' + yn(n.href) + '"]');
          if (i) return ((t.instance = i), wt(i), i);
          var s = A({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null,
          });
          return (
            (i = (e.ownerDocument || e).createElement("style")),
            wt(i),
            Bt(i, "style", s),
            Ko(i, n.precedence, e),
            (t.instance = i)
          );
        case "stylesheet":
          s = hl(n.href);
          var c = e.querySelector(vr(s));
          if (c) return ((t.state.loading |= 4), (t.instance = c), wt(c), c);
          ((i = tp(n)),
            (s = Cn.get(s)) && Pc(i, s),
            (c = (e.ownerDocument || e).createElement("link")),
            wt(c));
          var h = c;
          return (
            (h._p = new Promise(function (y, E) {
              ((h.onload = y), (h.onerror = E));
            })),
            Bt(c, "link", i),
            (t.state.loading |= 4),
            Ko(c, n.precedence, e),
            (t.instance = c)
          );
        case "script":
          return (
            (c = ml(n.src)),
            (s = e.querySelector(Ar(c)))
              ? ((t.instance = s), wt(s), s)
              : ((i = n),
                (s = Cn.get(c)) && ((i = A({}, n)), $c(i, s)),
                (e = e.ownerDocument || e),
                (s = e.createElement("script")),
                wt(s),
                Bt(s, "link", i),
                e.head.appendChild(s),
                (t.instance = s))
          );
        case "void":
          return null;
        default:
          throw Error(o(443, t.type));
      }
    else
      t.type === "stylesheet" &&
        (t.state.loading & 4) === 0 &&
        ((i = t.instance), (t.state.loading |= 4), Ko(i, n.precedence, e));
    return t.instance;
  }
  function Ko(e, t, n) {
    for (
      var i = n.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]'
        ),
        s = i.length ? i[i.length - 1] : null,
        c = s,
        h = 0;
      h < i.length;
      h++
    ) {
      var y = i[h];
      if (y.dataset.precedence === t) c = y;
      else if (c !== s) break;
    }
    c
      ? c.parentNode.insertBefore(e, c.nextSibling)
      : ((t = n.nodeType === 9 ? n.head : n), t.insertBefore(e, t.firstChild));
  }
  function Pc(e, t) {
    (e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.title == null && (e.title = t.title));
  }
  function $c(e, t) {
    (e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.integrity == null && (e.integrity = t.integrity));
  }
  var Xo = null;
  function ap(e, t, n) {
    if (Xo === null) {
      var i = new Map(),
        s = (Xo = new Map());
      s.set(n, i);
    } else ((s = Xo), (i = s.get(n)), i || ((i = new Map()), s.set(n, i)));
    if (i.has(e)) return i;
    for (
      i.set(e, null), n = n.getElementsByTagName(e), s = 0;
      s < n.length;
      s++
    ) {
      var c = n[s];
      if (
        !(
          c[kl] ||
          c[Ot] ||
          (e === "link" && c.getAttribute("rel") === "stylesheet")
        ) &&
        c.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var h = c.getAttribute(t) || "";
        h = e + h;
        var y = i.get(h);
        y ? y.push(c) : i.set(h, [c]);
      }
    }
    return i;
  }
  function ip(e, t, n) {
    ((e = e.ownerDocument || e),
      e.head.insertBefore(
        n,
        t === "title" ? e.querySelector("head > title") : null
      ));
  }
  function r0(e, t, n) {
    if (n === 1 || t.itemProp != null) return !1;
    switch (e) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof t.precedence != "string" ||
          typeof t.href != "string" ||
          t.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof t.rel != "string" ||
          typeof t.href != "string" ||
          t.href === "" ||
          t.onLoad ||
          t.onError
        )
          break;
        switch (t.rel) {
          case "stylesheet":
            return (
              (e = t.disabled),
              typeof t.precedence == "string" && e == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          t.async &&
          typeof t.async != "function" &&
          typeof t.async != "symbol" &&
          !t.onLoad &&
          !t.onError &&
          t.src &&
          typeof t.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function lp(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function o0(e, t, n, i) {
    if (
      n.type === "stylesheet" &&
      (typeof i.media != "string" || matchMedia(i.media).matches !== !1) &&
      (n.state.loading & 4) === 0
    ) {
      if (n.instance === null) {
        var s = hl(i.href),
          c = t.querySelector(vr(s));
        if (c) {
          ((t = c._p),
            t !== null &&
              typeof t == "object" &&
              typeof t.then == "function" &&
              (e.count++, (e = Fo.bind(e)), t.then(e, e)),
            (n.state.loading |= 4),
            (n.instance = c),
            wt(c));
          return;
        }
        ((c = t.ownerDocument || t),
          (i = tp(i)),
          (s = Cn.get(s)) && Pc(i, s),
          (c = c.createElement("link")),
          wt(c));
        var h = c;
        ((h._p = new Promise(function (y, E) {
          ((h.onload = y), (h.onerror = E));
        })),
          Bt(c, "link", i),
          (n.instance = c));
      }
      (e.stylesheets === null && (e.stylesheets = new Map()),
        e.stylesheets.set(n, t),
        (t = n.state.preload) &&
          (n.state.loading & 3) === 0 &&
          (e.count++,
          (n = Fo.bind(e)),
          t.addEventListener("load", n),
          t.addEventListener("error", n)));
    }
  }
  var Wc = 0;
  function s0(e, t) {
    return (
      e.stylesheets && e.count === 0 && Jo(e, e.stylesheets),
      0 < e.count || 0 < e.imgCount
        ? function (n) {
            var i = setTimeout(function () {
              if ((e.stylesheets && Jo(e, e.stylesheets), e.unsuspend)) {
                var c = e.unsuspend;
                ((e.unsuspend = null), c());
              }
            }, 6e4 + t);
            0 < e.imgBytes && Wc === 0 && (Wc = 62500 * Ib());
            var s = setTimeout(
              function () {
                if (
                  ((e.waitingForImages = !1),
                  e.count === 0 &&
                    (e.stylesheets && Jo(e, e.stylesheets), e.unsuspend))
                ) {
                  var c = e.unsuspend;
                  ((e.unsuspend = null), c());
                }
              },
              (e.imgBytes > Wc ? 50 : 800) + t
            );
            return (
              (e.unsuspend = n),
              function () {
                ((e.unsuspend = null), clearTimeout(i), clearTimeout(s));
              }
            );
          }
        : null
    );
  }
  function Fo() {
    if (
      (this.count--,
      this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))
    ) {
      if (this.stylesheets) Jo(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        ((this.unsuspend = null), e());
      }
    }
  }
  var Zo = null;
  function Jo(e, t) {
    ((e.stylesheets = null),
      e.unsuspend !== null &&
        (e.count++,
        (Zo = new Map()),
        t.forEach(u0, e),
        (Zo = null),
        Fo.call(e)));
  }
  function u0(e, t) {
    if (!(t.state.loading & 4)) {
      var n = Zo.get(e);
      if (n) var i = n.get(null);
      else {
        ((n = new Map()), Zo.set(e, n));
        for (
          var s = e.querySelectorAll(
              "link[data-precedence],style[data-precedence]"
            ),
            c = 0;
          c < s.length;
          c++
        ) {
          var h = s[c];
          (h.nodeName === "LINK" || h.getAttribute("media") !== "not all") &&
            (n.set(h.dataset.precedence, h), (i = h));
        }
        i && n.set(null, i);
      }
      ((s = t.instance),
        (h = s.getAttribute("data-precedence")),
        (c = n.get(h) || i),
        c === i && n.set(null, s),
        n.set(h, s),
        this.count++,
        (i = Fo.bind(this)),
        s.addEventListener("load", i),
        s.addEventListener("error", i),
        c
          ? c.parentNode.insertBefore(s, c.nextSibling)
          : ((e = e.nodeType === 9 ? e.head : e),
            e.insertBefore(s, e.firstChild)),
        (t.state.loading |= 4));
    }
  }
  var br = {
    $$typeof: N,
    Provider: null,
    Consumer: null,
    _currentValue: z,
    _currentValue2: z,
    _threadCount: 0,
  };
  function c0(e, t, n, i, s, c, h, y, E) {
    ((this.tag = 1),
      (this.containerInfo = e),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = Dl(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Dl(0)),
      (this.hiddenUpdates = Dl(null)),
      (this.identifierPrefix = i),
      (this.onUncaughtError = s),
      (this.onCaughtError = c),
      (this.onRecoverableError = h),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = E),
      (this.incompleteTransitions = new Map()));
  }
  function rp(e, t, n, i, s, c, h, y, E, V, W, ne) {
    return (
      (e = new c0(e, t, n, h, E, V, W, ne, y)),
      (t = 1),
      c === !0 && (t |= 24),
      (c = nn(3, null, null, t)),
      (e.current = c),
      (c.stateNode = e),
      (t = Du()),
      t.refCount++,
      (e.pooledCache = t),
      t.refCount++,
      (c.memoizedState = { element: i, isDehydrated: n, cache: t }),
      Lu(c),
      e
    );
  }
  function op(e) {
    return e ? ((e = qi), e) : qi;
  }
  function sp(e, t, n, i, s, c) {
    ((s = op(s)),
      i.context === null ? (i.context = s) : (i.pendingContext = s),
      (i = La(t)),
      (i.payload = { element: n }),
      (c = c === void 0 ? null : c),
      c !== null && (i.callback = c),
      (n = Ua(e, i, t)),
      n !== null && (Ft(n, e, t), $l(n, e, t)));
  }
  function up(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function ef(e, t) {
    (up(e, t), (e = e.alternate) && up(e, t));
  }
  function cp(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = ci(e, 67108864);
      (t !== null && Ft(t, e, 67108864), ef(e, 67108864));
    }
  }
  function fp(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = sn();
      t = Bl(t);
      var n = ci(e, t);
      (n !== null && Ft(n, e, t), ef(e, t));
    }
  }
  var Po = !0;
  function f0(e, t, n, i) {
    var s = O.T;
    O.T = null;
    var c = D.p;
    try {
      ((D.p = 2), tf(e, t, n, i));
    } finally {
      ((D.p = c), (O.T = s));
    }
  }
  function d0(e, t, n, i) {
    var s = O.T;
    O.T = null;
    var c = D.p;
    try {
      ((D.p = 8), tf(e, t, n, i));
    } finally {
      ((D.p = c), (O.T = s));
    }
  }
  function tf(e, t, n, i) {
    if (Po) {
      var s = nf(i);
      if (s === null) (jc(e, t, i, $o, n), hp(e, i));
      else if (m0(s, e, t, n, i)) i.stopPropagation();
      else if ((hp(e, i), t & 4 && -1 < h0.indexOf(e))) {
        for (; s !== null; ) {
          var c = Ni(s);
          if (c !== null)
            switch (c.tag) {
              case 3:
                if (((c = c.stateNode), c.current.memoizedState.isDehydrated)) {
                  var h = Bn(c.pendingLanes);
                  if (h !== 0) {
                    var y = c;
                    for (y.pendingLanes |= 2, y.entangledLanes |= 2; h; ) {
                      var E = 1 << (31 - Be(h));
                      ((y.entanglements[1] |= E), (h &= ~E));
                    }
                    (qn(c), (Ye & 6) === 0 && ((No = re() + 500), mr(0)));
                  }
                }
                break;
              case 31:
              case 13:
                ((y = ci(c, 2)), y !== null && Ft(y, c, 2), Lo(), ef(c, 2));
            }
          if (((c = nf(i)), c === null && jc(e, t, i, $o, n), c === s)) break;
          s = c;
        }
        s !== null && i.stopPropagation();
      } else jc(e, t, i, null, n);
    }
  }
  function nf(e) {
    return ((e = iu(e)), af(e));
  }
  var $o = null;
  function af(e) {
    if ((($o = null), (e = Bi(e)), e !== null)) {
      var t = f(e);
      if (t === null) e = null;
      else {
        var n = t.tag;
        if (n === 13) {
          if (((e = d(t)), e !== null)) return e;
          e = null;
        } else if (n === 31) {
          if (((e = m(t)), e !== null)) return e;
          e = null;
        } else if (n === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return (($o = e), null);
  }
  function dp(e) {
    switch (e) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (ue()) {
          case xe:
            return 2;
          case Qe:
            return 8;
          case je:
          case _t:
            return 32;
          case $t:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var lf = !1,
    Fa = null,
    Za = null,
    Ja = null,
    _r = new Map(),
    xr = new Map(),
    Pa = [],
    h0 =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " "
      );
  function hp(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Fa = null;
        break;
      case "dragenter":
      case "dragleave":
        Za = null;
        break;
      case "mouseover":
      case "mouseout":
        Ja = null;
        break;
      case "pointerover":
      case "pointerout":
        _r.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        xr.delete(t.pointerId);
    }
  }
  function Er(e, t, n, i, s, c) {
    return e === null || e.nativeEvent !== c
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: i,
          nativeEvent: c,
          targetContainers: [s],
        }),
        t !== null && ((t = Ni(t)), t !== null && cp(t)),
        e)
      : ((e.eventSystemFlags |= i),
        (t = e.targetContainers),
        s !== null && t.indexOf(s) === -1 && t.push(s),
        e);
  }
  function m0(e, t, n, i, s) {
    switch (t) {
      case "focusin":
        return ((Fa = Er(Fa, e, t, n, i, s)), !0);
      case "dragenter":
        return ((Za = Er(Za, e, t, n, i, s)), !0);
      case "mouseover":
        return ((Ja = Er(Ja, e, t, n, i, s)), !0);
      case "pointerover":
        var c = s.pointerId;
        return (_r.set(c, Er(_r.get(c) || null, e, t, n, i, s)), !0);
      case "gotpointercapture":
        return (
          (c = s.pointerId),
          xr.set(c, Er(xr.get(c) || null, e, t, n, i, s)),
          !0
        );
    }
    return !1;
  }
  function mp(e) {
    var t = Bi(e.target);
    if (t !== null) {
      var n = f(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = d(n)), t !== null)) {
            ((e.blockedOn = t),
              Td(e.priority, function () {
                fp(n);
              }));
            return;
          }
        } else if (t === 31) {
          if (((t = m(n)), t !== null)) {
            ((e.blockedOn = t),
              Td(e.priority, function () {
                fp(n);
              }));
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Wo(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = nf(e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var i = new n.constructor(n.type, n);
        ((au = i), n.target.dispatchEvent(i), (au = null));
      } else return ((t = Ni(n)), t !== null && cp(t), (e.blockedOn = n), !1);
      t.shift();
    }
    return !0;
  }
  function gp(e, t, n) {
    Wo(e) && n.delete(t);
  }
  function g0() {
    ((lf = !1),
      Fa !== null && Wo(Fa) && (Fa = null),
      Za !== null && Wo(Za) && (Za = null),
      Ja !== null && Wo(Ja) && (Ja = null),
      _r.forEach(gp),
      xr.forEach(gp));
  }
  function es(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      lf ||
        ((lf = !0),
        a.unstable_scheduleCallback(a.unstable_NormalPriority, g0)));
  }
  var ts = null;
  function pp(e) {
    ts !== e &&
      ((ts = e),
      a.unstable_scheduleCallback(a.unstable_NormalPriority, function () {
        ts === e && (ts = null);
        for (var t = 0; t < e.length; t += 3) {
          var n = e[t],
            i = e[t + 1],
            s = e[t + 2];
          if (typeof i != "function") {
            if (af(i || n) === null) continue;
            break;
          }
          var c = Ni(n);
          c !== null &&
            (e.splice(t, 3),
            (t -= 3),
            nc(c, { pending: !0, data: s, method: n.method, action: i }, i, s));
        }
      }));
  }
  function gl(e) {
    function t(E) {
      return es(E, e);
    }
    (Fa !== null && es(Fa, e),
      Za !== null && es(Za, e),
      Ja !== null && es(Ja, e),
      _r.forEach(t),
      xr.forEach(t));
    for (var n = 0; n < Pa.length; n++) {
      var i = Pa[n];
      i.blockedOn === e && (i.blockedOn = null);
    }
    for (; 0 < Pa.length && ((n = Pa[0]), n.blockedOn === null); )
      (mp(n), n.blockedOn === null && Pa.shift());
    if (((n = (e.ownerDocument || e).$$reactFormReplay), n != null))
      for (i = 0; i < n.length; i += 3) {
        var s = n[i],
          c = n[i + 1],
          h = s[It] || null;
        if (typeof c == "function") h || pp(n);
        else if (h) {
          var y = null;
          if (c && c.hasAttribute("formAction")) {
            if (((s = c), (h = c[It] || null))) y = h.formAction;
            else if (af(s) !== null) continue;
          } else y = h.action;
          (typeof y == "function" ? (n[i + 1] = y) : (n.splice(i, 3), (i -= 3)),
            pp(n));
        }
      }
  }
  function yp() {
    function e(c) {
      c.canIntercept &&
        c.info === "react-transition" &&
        c.intercept({
          handler: function () {
            return new Promise(function (h) {
              return (s = h);
            });
          },
          focusReset: "manual",
          scroll: "manual",
        });
    }
    function t() {
      (s !== null && (s(), (s = null)), i || setTimeout(n, 20));
    }
    function n() {
      if (!i && !navigation.transition) {
        var c = navigation.currentEntry;
        c &&
          c.url != null &&
          navigation.navigate(c.url, {
            state: c.getState(),
            info: "react-transition",
            history: "replace",
          });
      }
    }
    if (typeof navigation == "object") {
      var i = !1,
        s = null;
      return (
        navigation.addEventListener("navigate", e),
        navigation.addEventListener("navigatesuccess", t),
        navigation.addEventListener("navigateerror", t),
        setTimeout(n, 100),
        function () {
          ((i = !0),
            navigation.removeEventListener("navigate", e),
            navigation.removeEventListener("navigatesuccess", t),
            navigation.removeEventListener("navigateerror", t),
            s !== null && (s(), (s = null)));
        }
      );
    }
  }
  function rf(e) {
    this._internalRoot = e;
  }
  ((ns.prototype.render = rf.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(o(409));
      var n = t.current,
        i = sn();
      sp(n, i, e, t, null, null);
    }),
    (ns.prototype.unmount = rf.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          (sp(e.current, 2, null, e, null, null), Lo(), (t[Di] = null));
        }
      }));
  function ns(e) {
    this._internalRoot = e;
  }
  ns.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = Yr();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Pa.length && t !== 0 && t < Pa[n].priority; n++);
      (Pa.splice(n, 0, e), n === 0 && mp(e));
    }
  };
  var vp = l.version;
  if (vp !== "19.2.0") throw Error(o(527, vp, "19.2.0"));
  D.findDOMNode = function (e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function"
        ? Error(o(188))
        : ((e = Object.keys(e).join(",")), Error(o(268, e)));
    return (
      (e = g(t)),
      (e = e !== null ? v(e) : null),
      (e = e === null ? null : e.stateNode),
      e
    );
  };
  var p0 = {
    bundleType: 0,
    version: "19.2.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: O,
    reconcilerVersion: "19.2.0",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var as = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!as.isDisabled && as.supportsFiber)
      try {
        ((gn = as.inject(p0)), (mt = as));
      } catch {}
  }
  return (
    (Or.createRoot = function (e, t) {
      if (!u(e)) throw Error(o(299));
      var n = !1,
        i = "",
        s = Cm,
        c = wm,
        h = Rm;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (i = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (s = t.onUncaughtError),
          t.onCaughtError !== void 0 && (c = t.onCaughtError),
          t.onRecoverableError !== void 0 && (h = t.onRecoverableError)),
        (t = rp(e, 1, !1, null, null, n, i, null, s, c, h, yp)),
        (e[Di] = t.current),
        Hc(e),
        new rf(t)
      );
    }),
    (Or.hydrateRoot = function (e, t, n) {
      if (!u(e)) throw Error(o(299));
      var i = !1,
        s = "",
        c = Cm,
        h = wm,
        y = Rm,
        E = null;
      return (
        n != null &&
          (n.unstable_strictMode === !0 && (i = !0),
          n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
          n.onUncaughtError !== void 0 && (c = n.onUncaughtError),
          n.onCaughtError !== void 0 && (h = n.onCaughtError),
          n.onRecoverableError !== void 0 && (y = n.onRecoverableError),
          n.formState !== void 0 && (E = n.formState)),
        (t = rp(e, 1, !0, t, n ?? null, i, s, E, c, h, y, yp)),
        (t.context = op(null)),
        (n = t.current),
        (i = sn()),
        (i = Bl(i)),
        (s = La(i)),
        (s.callback = null),
        Ua(n, s, i),
        (n = i),
        (t.current.lanes = n),
        ea(t, n),
        qn(t),
        (e[Di] = t.current),
        Hc(e),
        new ns(t)
      );
    }),
    (Or.version = "19.2.0"),
    Or
  );
}
var Dy;
function nw() {
  if (Dy) return Cf.exports;
  Dy = 1;
  function a() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (l) {
        console.error(l);
      }
  }
  return (a(), (Cf.exports = tw()), Cf.exports);
}
var Qw = nw();
function Hw() {
  return new Us().getContext("screen")?.name ?? null;
}
export {
  hw as A,
  Wf as B,
  ww as C,
  Hw as D,
  zw as E,
  gw as F,
  Qw as G,
  Lw as H,
  Vw as R,
  vw as T,
  kw as W,
  lw as a,
  dw as b,
  _0 as c,
  mw as d,
  pw as e,
  yw as f,
  Cw as g,
  Ed as h,
  oE as i,
  jn as j,
  Ow as k,
  Aw as l,
  bw as m,
  _w as n,
  xw as o,
  Ew as p,
  Sw as q,
  T as r,
  Mw as s,
  aw as t,
  iw as u,
  Rw as v,
  Bw as w,
  Nw as x,
  Uw as y,
  Tw as z,
};
//# sourceMappingURL=vendor.BZxuTLQB.js.map

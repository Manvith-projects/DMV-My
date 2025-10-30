function Wb(a, i) {
  for (var r = 0; r < i.length; r++) {
    const s = i[r];
    if (typeof s != "string" && !Array.isArray(s)) {
      for (const c in s)
        if (c !== "default" && !(c in a)) {
          const f = Object.getOwnPropertyDescriptor(s, c);
          f &&
            Object.defineProperty(
              a,
              c,
              f.get ? f : { enumerable: !0, get: () => s[c] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(a, Symbol.toStringTag, { value: "Module" })
  );
}
function Pb(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default")
    ? a.default
    : a;
}
var Cc = { exports: {} },
  su = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Tg;
function Ib() {
  if (Tg) return su;
  Tg = 1;
  var a = Symbol.for("react.transitional.element"),
    i = Symbol.for("react.fragment");
  function r(s, c, f) {
    var m = null;
    if (
      (f !== void 0 && (m = "" + f),
      c.key !== void 0 && (m = "" + c.key),
      "key" in c)
    ) {
      f = {};
      for (var h in c) h !== "key" && (f[h] = c[h]);
    } else f = c;
    return (
      (c = f.ref),
      { $$typeof: a, type: s, key: m, ref: c !== void 0 ? c : null, props: f }
    );
  }
  return ((su.Fragment = i), (su.jsx = r), (su.jsxs = r), su);
}
var _g;
function e0() {
  return (_g || ((_g = 1), (Cc.exports = Ib())), Cc.exports);
}
var zn = e0(),
  wc = { exports: {} },
  Re = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Rg;
function t0() {
  if (Rg) return Re;
  Rg = 1;
  var a = Symbol.for("react.transitional.element"),
    i = Symbol.for("react.portal"),
    r = Symbol.for("react.fragment"),
    s = Symbol.for("react.strict_mode"),
    c = Symbol.for("react.profiler"),
    f = Symbol.for("react.consumer"),
    m = Symbol.for("react.context"),
    h = Symbol.for("react.forward_ref"),
    y = Symbol.for("react.suspense"),
    v = Symbol.for("react.memo"),
    p = Symbol.for("react.lazy"),
    b = Symbol.for("react.activity"),
    x = Symbol.iterator;
  function _(S) {
    return S === null || typeof S != "object"
      ? null
      : ((S = (x && S[x]) || S["@@iterator"]),
        typeof S == "function" ? S : null);
  }
  var M = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    z = Object.assign,
    X = {};
  function P(S, V, J) {
    ((this.props = S),
      (this.context = V),
      (this.refs = X),
      (this.updater = J || M));
  }
  ((P.prototype.isReactComponent = {}),
    (P.prototype.setState = function (S, V) {
      if (typeof S != "object" && typeof S != "function" && S != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, S, V, "setState");
    }),
    (P.prototype.forceUpdate = function (S) {
      this.updater.enqueueForceUpdate(this, S, "forceUpdate");
    }));
  function G() {}
  G.prototype = P.prototype;
  function Y(S, V, J) {
    ((this.props = S),
      (this.context = V),
      (this.refs = X),
      (this.updater = J || M));
  }
  var k = (Y.prototype = new G());
  ((k.constructor = Y), z(k, P.prototype), (k.isPureReactComponent = !0));
  var ne = Array.isArray;
  function Z() {}
  var W = { H: null, A: null, T: null, S: null },
    $ = Object.prototype.hasOwnProperty;
  function me(S, V, J) {
    var ae = J.ref;
    return {
      $$typeof: a,
      type: S,
      key: V,
      ref: ae !== void 0 ? ae : null,
      props: J,
    };
  }
  function ge(S, V) {
    return me(S.type, V, S.props);
  }
  function ce(S) {
    return typeof S == "object" && S !== null && S.$$typeof === a;
  }
  function Q(S) {
    var V = { "=": "=0", ":": "=2" };
    return (
      "$" +
      S.replace(/[=:]/g, function (J) {
        return V[J];
      })
    );
  }
  var B = /\/+/g;
  function te(S, V) {
    return typeof S == "object" && S !== null && S.key != null
      ? Q("" + S.key)
      : V.toString(36);
  }
  function oe(S) {
    switch (S.status) {
      case "fulfilled":
        return S.value;
      case "rejected":
        throw S.reason;
      default:
        switch (
          (typeof S.status == "string"
            ? S.then(Z, Z)
            : ((S.status = "pending"),
              S.then(
                function (V) {
                  S.status === "pending" &&
                    ((S.status = "fulfilled"), (S.value = V));
                },
                function (V) {
                  S.status === "pending" &&
                    ((S.status = "rejected"), (S.reason = V));
                }
              )),
          S.status)
        ) {
          case "fulfilled":
            return S.value;
          case "rejected":
            throw S.reason;
        }
    }
    throw S;
  }
  function R(S, V, J, ae, ye) {
    var q = typeof S;
    (q === "undefined" || q === "boolean") && (S = null);
    var le = !1;
    if (S === null) le = !0;
    else
      switch (q) {
        case "bigint":
        case "string":
        case "number":
          le = !0;
          break;
        case "object":
          switch (S.$$typeof) {
            case a:
            case i:
              le = !0;
              break;
            case p:
              return ((le = S._init), R(le(S._payload), V, J, ae, ye));
          }
      }
    if (le)
      return (
        (ye = ye(S)),
        (le = ae === "" ? "." + te(S, 0) : ae),
        ne(ye)
          ? ((J = ""),
            le != null && (J = le.replace(B, "$&/") + "/"),
            R(ye, V, J, "", function (Te) {
              return Te;
            }))
          : ye != null &&
            (ce(ye) &&
              (ye = ge(
                ye,
                J +
                  (ye.key == null || (S && S.key === ye.key)
                    ? ""
                    : ("" + ye.key).replace(B, "$&/") + "/") +
                  le
              )),
            V.push(ye)),
        1
      );
    le = 0;
    var Ae = ae === "" ? "." : ae + ":";
    if (ne(S))
      for (var fe = 0; fe < S.length; fe++)
        ((ae = S[fe]), (q = Ae + te(ae, fe)), (le += R(ae, V, J, q, ye)));
    else if (((fe = _(S)), typeof fe == "function"))
      for (S = fe.call(S), fe = 0; !(ae = S.next()).done; )
        ((ae = ae.value), (q = Ae + te(ae, fe++)), (le += R(ae, V, J, q, ye)));
    else if (q === "object") {
      if (typeof S.then == "function") return R(oe(S), V, J, ae, ye);
      throw (
        (V = String(S)),
        Error(
          "Objects are not valid as a React child (found: " +
            (V === "[object Object]"
              ? "object with keys {" + Object.keys(S).join(", ") + "}"
              : V) +
            "). If you meant to render a collection of children, use an array instead."
        )
      );
    }
    return le;
  }
  function O(S, V, J) {
    if (S == null) return S;
    var ae = [],
      ye = 0;
    return (
      R(S, ae, "", "", function (q) {
        return V.call(J, q, ye++);
      }),
      ae
    );
  }
  function w(S) {
    if (S._status === -1) {
      var V = S._result;
      ((V = V()),
        V.then(
          function (J) {
            (S._status === 0 || S._status === -1) &&
              ((S._status = 1), (S._result = J));
          },
          function (J) {
            (S._status === 0 || S._status === -1) &&
              ((S._status = 2), (S._result = J));
          }
        ),
        S._status === -1 && ((S._status = 0), (S._result = V)));
    }
    if (S._status === 1) return S._result.default;
    throw S._result;
  }
  var ue =
      typeof reportError == "function"
        ? reportError
        : function (S) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var V = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof S == "object" &&
                  S !== null &&
                  typeof S.message == "string"
                    ? String(S.message)
                    : String(S),
                error: S,
              });
              if (!window.dispatchEvent(V)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", S);
              return;
            }
            console.error(S);
          },
    se = {
      map: O,
      forEach: function (S, V, J) {
        O(
          S,
          function () {
            V.apply(this, arguments);
          },
          J
        );
      },
      count: function (S) {
        var V = 0;
        return (
          O(S, function () {
            V++;
          }),
          V
        );
      },
      toArray: function (S) {
        return (
          O(S, function (V) {
            return V;
          }) || []
        );
      },
      only: function (S) {
        if (!ce(S))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return S;
      },
    };
  return (
    (Re.Activity = b),
    (Re.Children = se),
    (Re.Component = P),
    (Re.Fragment = r),
    (Re.Profiler = c),
    (Re.PureComponent = Y),
    (Re.StrictMode = s),
    (Re.Suspense = y),
    (Re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = W),
    (Re.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (S) {
        return W.H.useMemoCache(S);
      },
    }),
    (Re.cache = function (S) {
      return function () {
        return S.apply(null, arguments);
      };
    }),
    (Re.cacheSignal = function () {
      return null;
    }),
    (Re.cloneElement = function (S, V, J) {
      if (S == null)
        throw Error(
          "The argument must be a React element, but you passed " + S + "."
        );
      var ae = z({}, S.props),
        ye = S.key;
      if (V != null)
        for (q in (V.key !== void 0 && (ye = "" + V.key), V))
          !$.call(V, q) ||
            q === "key" ||
            q === "__self" ||
            q === "__source" ||
            (q === "ref" && V.ref === void 0) ||
            (ae[q] = V[q]);
      var q = arguments.length - 2;
      if (q === 1) ae.children = J;
      else if (1 < q) {
        for (var le = Array(q), Ae = 0; Ae < q; Ae++)
          le[Ae] = arguments[Ae + 2];
        ae.children = le;
      }
      return me(S.type, ye, ae);
    }),
    (Re.createContext = function (S) {
      return (
        (S = {
          $$typeof: m,
          _currentValue: S,
          _currentValue2: S,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (S.Provider = S),
        (S.Consumer = { $$typeof: f, _context: S }),
        S
      );
    }),
    (Re.createElement = function (S, V, J) {
      var ae,
        ye = {},
        q = null;
      if (V != null)
        for (ae in (V.key !== void 0 && (q = "" + V.key), V))
          $.call(V, ae) &&
            ae !== "key" &&
            ae !== "__self" &&
            ae !== "__source" &&
            (ye[ae] = V[ae]);
      var le = arguments.length - 2;
      if (le === 1) ye.children = J;
      else if (1 < le) {
        for (var Ae = Array(le), fe = 0; fe < le; fe++)
          Ae[fe] = arguments[fe + 2];
        ye.children = Ae;
      }
      if (S && S.defaultProps)
        for (ae in ((le = S.defaultProps), le))
          ye[ae] === void 0 && (ye[ae] = le[ae]);
      return me(S, q, ye);
    }),
    (Re.createRef = function () {
      return { current: null };
    }),
    (Re.forwardRef = function (S) {
      return { $$typeof: h, render: S };
    }),
    (Re.isValidElement = ce),
    (Re.lazy = function (S) {
      return { $$typeof: p, _payload: { _status: -1, _result: S }, _init: w };
    }),
    (Re.memo = function (S, V) {
      return { $$typeof: v, type: S, compare: V === void 0 ? null : V };
    }),
    (Re.startTransition = function (S) {
      var V = W.T,
        J = {};
      W.T = J;
      try {
        var ae = S(),
          ye = W.S;
        (ye !== null && ye(J, ae),
          typeof ae == "object" &&
            ae !== null &&
            typeof ae.then == "function" &&
            ae.then(Z, ue));
      } catch (q) {
        ue(q);
      } finally {
        (V !== null && J.types !== null && (V.types = J.types), (W.T = V));
      }
    }),
    (Re.unstable_useCacheRefresh = function () {
      return W.H.useCacheRefresh();
    }),
    (Re.use = function (S) {
      return W.H.use(S);
    }),
    (Re.useActionState = function (S, V, J) {
      return W.H.useActionState(S, V, J);
    }),
    (Re.useCallback = function (S, V) {
      return W.H.useCallback(S, V);
    }),
    (Re.useContext = function (S) {
      return W.H.useContext(S);
    }),
    (Re.useDebugValue = function () {}),
    (Re.useDeferredValue = function (S, V) {
      return W.H.useDeferredValue(S, V);
    }),
    (Re.useEffect = function (S, V) {
      return W.H.useEffect(S, V);
    }),
    (Re.useEffectEvent = function (S) {
      return W.H.useEffectEvent(S);
    }),
    (Re.useId = function () {
      return W.H.useId();
    }),
    (Re.useImperativeHandle = function (S, V, J) {
      return W.H.useImperativeHandle(S, V, J);
    }),
    (Re.useInsertionEffect = function (S, V) {
      return W.H.useInsertionEffect(S, V);
    }),
    (Re.useLayoutEffect = function (S, V) {
      return W.H.useLayoutEffect(S, V);
    }),
    (Re.useMemo = function (S, V) {
      return W.H.useMemo(S, V);
    }),
    (Re.useOptimistic = function (S, V) {
      return W.H.useOptimistic(S, V);
    }),
    (Re.useReducer = function (S, V, J) {
      return W.H.useReducer(S, V, J);
    }),
    (Re.useRef = function (S) {
      return W.H.useRef(S);
    }),
    (Re.useState = function (S) {
      return W.H.useState(S);
    }),
    (Re.useSyncExternalStore = function (S, V, J) {
      return W.H.useSyncExternalStore(S, V, J);
    }),
    (Re.useTransition = function () {
      return W.H.useTransition();
    }),
    (Re.version = "19.2.0"),
    Re
  );
}
var Cg;
function rf() {
  return (Cg || ((Cg = 1), (wc.exports = t0())), wc.exports);
}
var C = rf();
const Oe = Pb(C),
  _y = Wb({ __proto__: null, default: Oe }, [C]);
function Ry(a) {
  var i,
    r,
    s = "";
  if (typeof a == "string" || typeof a == "number") s += a;
  else if (typeof a == "object")
    if (Array.isArray(a)) {
      var c = a.length;
      for (i = 0; i < c; i++)
        a[i] && (r = Ry(a[i])) && (s && (s += " "), (s += r));
    } else for (r in a) a[r] && (s && (s += " "), (s += r));
  return s;
}
function n0() {
  for (var a, i, r = 0, s = "", c = arguments.length; r < c; r++)
    (a = arguments[r]) && (i = Ry(a)) && (s && (s += " "), (s += i));
  return s;
}
const of = "-",
  l0 = (a) => {
    const i = i0(a),
      { conflictingClassGroups: r, conflictingClassGroupModifiers: s } = a;
    return {
      getClassGroupId: (m) => {
        const h = m.split(of);
        return (h[0] === "" && h.length !== 1 && h.shift(), Cy(h, i) || a0(m));
      },
      getConflictingClassGroupIds: (m, h) => {
        const y = r[m] || [];
        return h && s[m] ? [...y, ...s[m]] : y;
      },
    };
  },
  Cy = (a, i) => {
    if (a.length === 0) return i.classGroupId;
    const r = a[0],
      s = i.nextPart.get(r),
      c = s ? Cy(a.slice(1), s) : void 0;
    if (c) return c;
    if (i.validators.length === 0) return;
    const f = a.join(of);
    return i.validators.find(({ validator: m }) => m(f))?.classGroupId;
  },
  wg = /^\[(.+)\]$/,
  a0 = (a) => {
    if (wg.test(a)) {
      const i = wg.exec(a)[1],
        r = i?.substring(0, i.indexOf(":"));
      if (r) return "arbitrary.." + r;
    }
  },
  i0 = (a) => {
    const { theme: i, classGroups: r } = a,
      s = { nextPart: new Map(), validators: [] };
    for (const c in r) kc(r[c], s, c, i);
    return s;
  },
  kc = (a, i, r, s) => {
    a.forEach((c) => {
      if (typeof c == "string") {
        const f = c === "" ? i : Mg(i, c);
        f.classGroupId = r;
        return;
      }
      if (typeof c == "function") {
        if (u0(c)) {
          kc(c(s), i, r, s);
          return;
        }
        i.validators.push({ validator: c, classGroupId: r });
        return;
      }
      Object.entries(c).forEach(([f, m]) => {
        kc(m, Mg(i, f), r, s);
      });
    });
  },
  Mg = (a, i) => {
    let r = a;
    return (
      i.split(of).forEach((s) => {
        (r.nextPart.has(s) ||
          r.nextPart.set(s, { nextPart: new Map(), validators: [] }),
          (r = r.nextPart.get(s)));
      }),
      r
    );
  },
  u0 = (a) => a.isThemeGetter,
  r0 = (a) => {
    if (a < 1) return { get: () => {}, set: () => {} };
    let i = 0,
      r = new Map(),
      s = new Map();
    const c = (f, m) => {
      (r.set(f, m), i++, i > a && ((i = 0), (s = r), (r = new Map())));
    };
    return {
      get(f) {
        let m = r.get(f);
        if (m !== void 0) return m;
        if ((m = s.get(f)) !== void 0) return (c(f, m), m);
      },
      set(f, m) {
        r.has(f) ? r.set(f, m) : c(f, m);
      },
    };
  },
  Xc = "!",
  Qc = ":",
  o0 = Qc.length,
  s0 = (a) => {
    const { prefix: i, experimentalParseClassName: r } = a;
    let s = (c) => {
      const f = [];
      let m = 0,
        h = 0,
        y = 0,
        v;
      for (let M = 0; M < c.length; M++) {
        let z = c[M];
        if (m === 0 && h === 0) {
          if (z === Qc) {
            (f.push(c.slice(y, M)), (y = M + o0));
            continue;
          }
          if (z === "/") {
            v = M;
            continue;
          }
        }
        z === "[" ? m++ : z === "]" ? m-- : z === "(" ? h++ : z === ")" && h--;
      }
      const p = f.length === 0 ? c : c.substring(y),
        b = c0(p),
        x = b !== p,
        _ = v && v > y ? v - y : void 0;
      return {
        modifiers: f,
        hasImportantModifier: x,
        baseClassName: b,
        maybePostfixModifierPosition: _,
      };
    };
    if (i) {
      const c = i + Qc,
        f = s;
      s = (m) =>
        m.startsWith(c)
          ? f(m.substring(c.length))
          : {
              isExternal: !0,
              modifiers: [],
              hasImportantModifier: !1,
              baseClassName: m,
              maybePostfixModifierPosition: void 0,
            };
    }
    if (r) {
      const c = s;
      s = (f) => r({ className: f, parseClassName: c });
    }
    return s;
  },
  c0 = (a) =>
    a.endsWith(Xc)
      ? a.substring(0, a.length - 1)
      : a.startsWith(Xc)
        ? a.substring(1)
        : a,
  f0 = (a) => {
    const i = Object.fromEntries(a.orderSensitiveModifiers.map((s) => [s, !0]));
    return (s) => {
      if (s.length <= 1) return s;
      const c = [];
      let f = [];
      return (
        s.forEach((m) => {
          m[0] === "[" || i[m] ? (c.push(...f.sort(), m), (f = [])) : f.push(m);
        }),
        c.push(...f.sort()),
        c
      );
    };
  },
  d0 = (a) => ({
    cache: r0(a.cacheSize),
    parseClassName: s0(a),
    sortModifiers: f0(a),
    ...l0(a),
  }),
  m0 = /\s+/,
  h0 = (a, i) => {
    const {
        parseClassName: r,
        getClassGroupId: s,
        getConflictingClassGroupIds: c,
        sortModifiers: f,
      } = i,
      m = [],
      h = a.trim().split(m0);
    let y = "";
    for (let v = h.length - 1; v >= 0; v -= 1) {
      const p = h[v],
        {
          isExternal: b,
          modifiers: x,
          hasImportantModifier: _,
          baseClassName: M,
          maybePostfixModifierPosition: z,
        } = r(p);
      if (b) {
        y = p + (y.length > 0 ? " " + y : y);
        continue;
      }
      let X = !!z,
        P = s(X ? M.substring(0, z) : M);
      if (!P) {
        if (!X) {
          y = p + (y.length > 0 ? " " + y : y);
          continue;
        }
        if (((P = s(M)), !P)) {
          y = p + (y.length > 0 ? " " + y : y);
          continue;
        }
        X = !1;
      }
      const G = f(x).join(":"),
        Y = _ ? G + Xc : G,
        k = Y + P;
      if (m.includes(k)) continue;
      m.push(k);
      const ne = c(P, X);
      for (let Z = 0; Z < ne.length; ++Z) {
        const W = ne[Z];
        m.push(Y + W);
      }
      y = p + (y.length > 0 ? " " + y : y);
    }
    return y;
  };
function g0() {
  let a = 0,
    i,
    r,
    s = "";
  for (; a < arguments.length; )
    (i = arguments[a++]) && (r = wy(i)) && (s && (s += " "), (s += r));
  return s;
}
const wy = (a) => {
  if (typeof a == "string") return a;
  let i,
    r = "";
  for (let s = 0; s < a.length; s++)
    a[s] && (i = wy(a[s])) && (r && (r += " "), (r += i));
  return r;
};
function y0(a, ...i) {
  let r,
    s,
    c,
    f = m;
  function m(y) {
    const v = i.reduce((p, b) => b(p), a());
    return ((r = d0(v)), (s = r.cache.get), (c = r.cache.set), (f = h), h(y));
  }
  function h(y) {
    const v = s(y);
    if (v) return v;
    const p = h0(y, r);
    return (c(y, p), p);
  }
  return function () {
    return f(g0.apply(null, arguments));
  };
}
const pt = (a) => {
    const i = (r) => r[a] || [];
    return ((i.isThemeGetter = !0), i);
  },
  My = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
  Oy = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
  v0 = /^\d+\/\d+$/,
  p0 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  b0 =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  S0 = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
  E0 = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  A0 =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  ii = (a) => v0.test(a),
  Me = (a) => !!a && !Number.isNaN(Number(a)),
  kl = (a) => !!a && Number.isInteger(Number(a)),
  Mc = (a) => a.endsWith("%") && Me(a.slice(0, -1)),
  sl = (a) => p0.test(a),
  x0 = () => !0,
  T0 = (a) => b0.test(a) && !S0.test(a),
  Dy = () => !1,
  _0 = (a) => E0.test(a),
  R0 = (a) => A0.test(a),
  C0 = (a) => !pe(a) && !be(a),
  w0 = (a) => fi(a, Ny, Dy),
  pe = (a) => My.test(a),
  ma = (a) => fi(a, Ly, T0),
  Oc = (a) => fi(a, U0, Me),
  Og = (a) => fi(a, zy, Dy),
  M0 = (a) => fi(a, Uy, R0),
  jr = (a) => fi(a, Vy, _0),
  be = (a) => Oy.test(a),
  cu = (a) => di(a, Ly),
  O0 = (a) => di(a, N0),
  Dg = (a) => di(a, zy),
  D0 = (a) => di(a, Ny),
  z0 = (a) => di(a, Uy),
  Gr = (a) => di(a, Vy, !0),
  fi = (a, i, r) => {
    const s = My.exec(a);
    return s ? (s[1] ? i(s[1]) : r(s[2])) : !1;
  },
  di = (a, i, r = !1) => {
    const s = Oy.exec(a);
    return s ? (s[1] ? i(s[1]) : r) : !1;
  },
  zy = (a) => a === "position" || a === "percentage",
  Uy = (a) => a === "image" || a === "url",
  Ny = (a) => a === "length" || a === "size" || a === "bg-size",
  Ly = (a) => a === "length",
  U0 = (a) => a === "number",
  N0 = (a) => a === "family-name",
  Vy = (a) => a === "shadow",
  L0 = () => {
    const a = pt("color"),
      i = pt("font"),
      r = pt("text"),
      s = pt("font-weight"),
      c = pt("tracking"),
      f = pt("leading"),
      m = pt("breakpoint"),
      h = pt("container"),
      y = pt("spacing"),
      v = pt("radius"),
      p = pt("shadow"),
      b = pt("inset-shadow"),
      x = pt("text-shadow"),
      _ = pt("drop-shadow"),
      M = pt("blur"),
      z = pt("perspective"),
      X = pt("aspect"),
      P = pt("ease"),
      G = pt("animate"),
      Y = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      k = () => [
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
      ne = () => [...k(), be, pe],
      Z = () => ["auto", "hidden", "clip", "visible", "scroll"],
      W = () => ["auto", "contain", "none"],
      $ = () => [be, pe, y],
      me = () => [ii, "full", "auto", ...$()],
      ge = () => [kl, "none", "subgrid", be, pe],
      ce = () => ["auto", { span: ["full", kl, be, pe] }, kl, be, pe],
      Q = () => [kl, "auto", be, pe],
      B = () => ["auto", "min", "max", "fr", be, pe],
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
      oe = () => [
        "start",
        "end",
        "center",
        "stretch",
        "center-safe",
        "end-safe",
      ],
      R = () => ["auto", ...$()],
      O = () => [
        ii,
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
        ...$(),
      ],
      w = () => [a, be, pe],
      ue = () => [...k(), Dg, Og, { position: [be, pe] }],
      se = () => ["no-repeat", { repeat: ["", "x", "y", "space", "round"] }],
      S = () => ["auto", "cover", "contain", D0, w0, { size: [be, pe] }],
      V = () => [Mc, cu, ma],
      J = () => ["", "none", "full", v, be, pe],
      ae = () => ["", Me, cu, ma],
      ye = () => ["solid", "dashed", "dotted", "double"],
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
      le = () => [Me, Mc, Dg, Og],
      Ae = () => ["", "none", M, be, pe],
      fe = () => ["none", Me, be, pe],
      Te = () => ["none", Me, be, pe],
      qe = () => [Me, be, pe],
      Ye = () => [ii, "full", ...$()];
    return {
      cacheSize: 500,
      theme: {
        animate: ["spin", "ping", "pulse", "bounce"],
        aspect: ["video"],
        blur: [sl],
        breakpoint: [sl],
        color: [x0],
        container: [sl],
        "drop-shadow": [sl],
        ease: ["in", "out", "in-out"],
        font: [C0],
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
        "inset-shadow": [sl],
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
        perspective: [
          "dramatic",
          "near",
          "normal",
          "midrange",
          "distant",
          "none",
        ],
        radius: [sl],
        shadow: [sl],
        spacing: ["px", Me],
        text: [sl],
        "text-shadow": [sl],
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"],
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", ii, pe, be, X] }],
        container: ["container"],
        columns: [{ columns: [Me, pe, be, h] }],
        "break-after": [{ "break-after": Y() }],
        "break-before": [{ "break-before": Y() }],
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
        "object-position": [{ object: ne() }],
        overflow: [{ overflow: Z() }],
        "overflow-x": [{ "overflow-x": Z() }],
        "overflow-y": [{ "overflow-y": Z() }],
        overscroll: [{ overscroll: W() }],
        "overscroll-x": [{ "overscroll-x": W() }],
        "overscroll-y": [{ "overscroll-y": W() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: me() }],
        "inset-x": [{ "inset-x": me() }],
        "inset-y": [{ "inset-y": me() }],
        start: [{ start: me() }],
        end: [{ end: me() }],
        top: [{ top: me() }],
        right: [{ right: me() }],
        bottom: [{ bottom: me() }],
        left: [{ left: me() }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: [kl, "auto", be, pe] }],
        basis: [{ basis: [ii, "full", "auto", h, ...$()] }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["nowrap", "wrap", "wrap-reverse"] }],
        flex: [{ flex: [Me, ii, "auto", "initial", "none", pe] }],
        grow: [{ grow: ["", Me, be, pe] }],
        shrink: [{ shrink: ["", Me, be, pe] }],
        order: [{ order: [kl, "first", "last", "none", be, pe] }],
        "grid-cols": [{ "grid-cols": ge() }],
        "col-start-end": [{ col: ce() }],
        "col-start": [{ "col-start": Q() }],
        "col-end": [{ "col-end": Q() }],
        "grid-rows": [{ "grid-rows": ge() }],
        "row-start-end": [{ row: ce() }],
        "row-start": [{ "row-start": Q() }],
        "row-end": [{ "row-end": Q() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": B() }],
        "auto-rows": [{ "auto-rows": B() }],
        gap: [{ gap: $() }],
        "gap-x": [{ "gap-x": $() }],
        "gap-y": [{ "gap-y": $() }],
        "justify-content": [{ justify: [...te(), "normal"] }],
        "justify-items": [{ "justify-items": [...oe(), "normal"] }],
        "justify-self": [{ "justify-self": ["auto", ...oe()] }],
        "align-content": [{ content: ["normal", ...te()] }],
        "align-items": [{ items: [...oe(), { baseline: ["", "last"] }] }],
        "align-self": [{ self: ["auto", ...oe(), { baseline: ["", "last"] }] }],
        "place-content": [{ "place-content": te() }],
        "place-items": [{ "place-items": [...oe(), "baseline"] }],
        "place-self": [{ "place-self": ["auto", ...oe()] }],
        p: [{ p: $() }],
        px: [{ px: $() }],
        py: [{ py: $() }],
        ps: [{ ps: $() }],
        pe: [{ pe: $() }],
        pt: [{ pt: $() }],
        pr: [{ pr: $() }],
        pb: [{ pb: $() }],
        pl: [{ pl: $() }],
        m: [{ m: R() }],
        mx: [{ mx: R() }],
        my: [{ my: R() }],
        ms: [{ ms: R() }],
        me: [{ me: R() }],
        mt: [{ mt: R() }],
        mr: [{ mr: R() }],
        mb: [{ mb: R() }],
        ml: [{ ml: R() }],
        "space-x": [{ "space-x": $() }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": $() }],
        "space-y-reverse": ["space-y-reverse"],
        size: [{ size: O() }],
        w: [{ w: [h, "screen", ...O()] }],
        "min-w": [{ "min-w": [h, "screen", "none", ...O()] }],
        "max-w": [
          { "max-w": [h, "screen", "none", "prose", { screen: [m] }, ...O()] },
        ],
        h: [{ h: ["screen", "lh", ...O()] }],
        "min-h": [{ "min-h": ["screen", "lh", "none", ...O()] }],
        "max-h": [{ "max-h": ["screen", "lh", ...O()] }],
        "font-size": [{ text: ["base", r, cu, ma] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [{ font: [s, be, Oc] }],
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
              Mc,
              pe,
            ],
          },
        ],
        "font-family": [{ font: [O0, pe, i] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        tracking: [{ tracking: [c, be, pe] }],
        "line-clamp": [{ "line-clamp": [Me, "none", be, Oc] }],
        leading: [{ leading: [f, ...$()] }],
        "list-image": [{ "list-image": ["none", be, pe] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "list-style-type": [{ list: ["disc", "decimal", "none", be, pe] }],
        "text-alignment": [
          { text: ["left", "center", "right", "justify", "start", "end"] },
        ],
        "placeholder-color": [{ placeholder: w() }],
        "text-color": [{ text: w() }],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        "text-decoration-style": [{ decoration: [...ye(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: [Me, "from-font", "auto", be, ma] },
        ],
        "text-decoration-color": [{ decoration: w() }],
        "underline-offset": [{ "underline-offset": [Me, "auto", be, pe] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: $() }],
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
              be,
              pe,
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
        content: [{ content: ["none", be, pe] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: ue() }],
        "bg-repeat": [{ bg: se() }],
        "bg-size": [{ bg: S() }],
        "bg-image": [
          {
            bg: [
              "none",
              {
                linear: [
                  { to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
                  kl,
                  be,
                  pe,
                ],
                radial: ["", be, pe],
                conic: [kl, be, pe],
              },
              z0,
              M0,
            ],
          },
        ],
        "bg-color": [{ bg: w() }],
        "gradient-from-pos": [{ from: V() }],
        "gradient-via-pos": [{ via: V() }],
        "gradient-to-pos": [{ to: V() }],
        "gradient-from": [{ from: w() }],
        "gradient-via": [{ via: w() }],
        "gradient-to": [{ to: w() }],
        rounded: [{ rounded: J() }],
        "rounded-s": [{ "rounded-s": J() }],
        "rounded-e": [{ "rounded-e": J() }],
        "rounded-t": [{ "rounded-t": J() }],
        "rounded-r": [{ "rounded-r": J() }],
        "rounded-b": [{ "rounded-b": J() }],
        "rounded-l": [{ "rounded-l": J() }],
        "rounded-ss": [{ "rounded-ss": J() }],
        "rounded-se": [{ "rounded-se": J() }],
        "rounded-ee": [{ "rounded-ee": J() }],
        "rounded-es": [{ "rounded-es": J() }],
        "rounded-tl": [{ "rounded-tl": J() }],
        "rounded-tr": [{ "rounded-tr": J() }],
        "rounded-br": [{ "rounded-br": J() }],
        "rounded-bl": [{ "rounded-bl": J() }],
        "border-w": [{ border: ae() }],
        "border-w-x": [{ "border-x": ae() }],
        "border-w-y": [{ "border-y": ae() }],
        "border-w-s": [{ "border-s": ae() }],
        "border-w-e": [{ "border-e": ae() }],
        "border-w-t": [{ "border-t": ae() }],
        "border-w-r": [{ "border-r": ae() }],
        "border-w-b": [{ "border-b": ae() }],
        "border-w-l": [{ "border-l": ae() }],
        "divide-x": [{ "divide-x": ae() }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": ae() }],
        "divide-y-reverse": ["divide-y-reverse"],
        "border-style": [{ border: [...ye(), "hidden", "none"] }],
        "divide-style": [{ divide: [...ye(), "hidden", "none"] }],
        "border-color": [{ border: w() }],
        "border-color-x": [{ "border-x": w() }],
        "border-color-y": [{ "border-y": w() }],
        "border-color-s": [{ "border-s": w() }],
        "border-color-e": [{ "border-e": w() }],
        "border-color-t": [{ "border-t": w() }],
        "border-color-r": [{ "border-r": w() }],
        "border-color-b": [{ "border-b": w() }],
        "border-color-l": [{ "border-l": w() }],
        "divide-color": [{ divide: w() }],
        "outline-style": [{ outline: [...ye(), "none", "hidden"] }],
        "outline-offset": [{ "outline-offset": [Me, be, pe] }],
        "outline-w": [{ outline: ["", Me, cu, ma] }],
        "outline-color": [{ outline: w() }],
        shadow: [{ shadow: ["", "none", p, Gr, jr] }],
        "shadow-color": [{ shadow: w() }],
        "inset-shadow": [{ "inset-shadow": ["none", b, Gr, jr] }],
        "inset-shadow-color": [{ "inset-shadow": w() }],
        "ring-w": [{ ring: ae() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: w() }],
        "ring-offset-w": [{ "ring-offset": [Me, ma] }],
        "ring-offset-color": [{ "ring-offset": w() }],
        "inset-ring-w": [{ "inset-ring": ae() }],
        "inset-ring-color": [{ "inset-ring": w() }],
        "text-shadow": [{ "text-shadow": ["none", x, Gr, jr] }],
        "text-shadow-color": [{ "text-shadow": w() }],
        opacity: [{ opacity: [Me, be, pe] }],
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
        "mask-image-linear-from-pos": [{ "mask-linear-from": le() }],
        "mask-image-linear-to-pos": [{ "mask-linear-to": le() }],
        "mask-image-linear-from-color": [{ "mask-linear-from": w() }],
        "mask-image-linear-to-color": [{ "mask-linear-to": w() }],
        "mask-image-t-from-pos": [{ "mask-t-from": le() }],
        "mask-image-t-to-pos": [{ "mask-t-to": le() }],
        "mask-image-t-from-color": [{ "mask-t-from": w() }],
        "mask-image-t-to-color": [{ "mask-t-to": w() }],
        "mask-image-r-from-pos": [{ "mask-r-from": le() }],
        "mask-image-r-to-pos": [{ "mask-r-to": le() }],
        "mask-image-r-from-color": [{ "mask-r-from": w() }],
        "mask-image-r-to-color": [{ "mask-r-to": w() }],
        "mask-image-b-from-pos": [{ "mask-b-from": le() }],
        "mask-image-b-to-pos": [{ "mask-b-to": le() }],
        "mask-image-b-from-color": [{ "mask-b-from": w() }],
        "mask-image-b-to-color": [{ "mask-b-to": w() }],
        "mask-image-l-from-pos": [{ "mask-l-from": le() }],
        "mask-image-l-to-pos": [{ "mask-l-to": le() }],
        "mask-image-l-from-color": [{ "mask-l-from": w() }],
        "mask-image-l-to-color": [{ "mask-l-to": w() }],
        "mask-image-x-from-pos": [{ "mask-x-from": le() }],
        "mask-image-x-to-pos": [{ "mask-x-to": le() }],
        "mask-image-x-from-color": [{ "mask-x-from": w() }],
        "mask-image-x-to-color": [{ "mask-x-to": w() }],
        "mask-image-y-from-pos": [{ "mask-y-from": le() }],
        "mask-image-y-to-pos": [{ "mask-y-to": le() }],
        "mask-image-y-from-color": [{ "mask-y-from": w() }],
        "mask-image-y-to-color": [{ "mask-y-to": w() }],
        "mask-image-radial": [{ "mask-radial": [be, pe] }],
        "mask-image-radial-from-pos": [{ "mask-radial-from": le() }],
        "mask-image-radial-to-pos": [{ "mask-radial-to": le() }],
        "mask-image-radial-from-color": [{ "mask-radial-from": w() }],
        "mask-image-radial-to-color": [{ "mask-radial-to": w() }],
        "mask-image-radial-shape": [{ "mask-radial": ["circle", "ellipse"] }],
        "mask-image-radial-size": [
          {
            "mask-radial": [
              { closest: ["side", "corner"], farthest: ["side", "corner"] },
            ],
          },
        ],
        "mask-image-radial-pos": [{ "mask-radial-at": k() }],
        "mask-image-conic-pos": [{ "mask-conic": [Me] }],
        "mask-image-conic-from-pos": [{ "mask-conic-from": le() }],
        "mask-image-conic-to-pos": [{ "mask-conic-to": le() }],
        "mask-image-conic-from-color": [{ "mask-conic-from": w() }],
        "mask-image-conic-to-color": [{ "mask-conic-to": w() }],
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
        "mask-position": [{ mask: ue() }],
        "mask-repeat": [{ mask: se() }],
        "mask-size": [{ mask: S() }],
        "mask-type": [{ "mask-type": ["alpha", "luminance"] }],
        "mask-image": [{ mask: ["none", be, pe] }],
        filter: [{ filter: ["", "none", be, pe] }],
        blur: [{ blur: Ae() }],
        brightness: [{ brightness: [Me, be, pe] }],
        contrast: [{ contrast: [Me, be, pe] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", _, Gr, jr] }],
        "drop-shadow-color": [{ "drop-shadow": w() }],
        grayscale: [{ grayscale: ["", Me, be, pe] }],
        "hue-rotate": [{ "hue-rotate": [Me, be, pe] }],
        invert: [{ invert: ["", Me, be, pe] }],
        saturate: [{ saturate: [Me, be, pe] }],
        sepia: [{ sepia: ["", Me, be, pe] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none", be, pe] }],
        "backdrop-blur": [{ "backdrop-blur": Ae() }],
        "backdrop-brightness": [{ "backdrop-brightness": [Me, be, pe] }],
        "backdrop-contrast": [{ "backdrop-contrast": [Me, be, pe] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": ["", Me, be, pe] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [Me, be, pe] }],
        "backdrop-invert": [{ "backdrop-invert": ["", Me, be, pe] }],
        "backdrop-opacity": [{ "backdrop-opacity": [Me, be, pe] }],
        "backdrop-saturate": [{ "backdrop-saturate": [Me, be, pe] }],
        "backdrop-sepia": [{ "backdrop-sepia": ["", Me, be, pe] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": $() }],
        "border-spacing-x": [{ "border-spacing-x": $() }],
        "border-spacing-y": [{ "border-spacing-y": $() }],
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
              be,
              pe,
            ],
          },
        ],
        "transition-behavior": [{ transition: ["normal", "discrete"] }],
        duration: [{ duration: [Me, "initial", be, pe] }],
        ease: [{ ease: ["linear", "initial", P, be, pe] }],
        delay: [{ delay: [Me, be, pe] }],
        animate: [{ animate: ["none", G, be, pe] }],
        backface: [{ backface: ["hidden", "visible"] }],
        perspective: [{ perspective: [z, be, pe] }],
        "perspective-origin": [{ "perspective-origin": ne() }],
        rotate: [{ rotate: fe() }],
        "rotate-x": [{ "rotate-x": fe() }],
        "rotate-y": [{ "rotate-y": fe() }],
        "rotate-z": [{ "rotate-z": fe() }],
        scale: [{ scale: Te() }],
        "scale-x": [{ "scale-x": Te() }],
        "scale-y": [{ "scale-y": Te() }],
        "scale-z": [{ "scale-z": Te() }],
        "scale-3d": ["scale-3d"],
        skew: [{ skew: qe() }],
        "skew-x": [{ "skew-x": qe() }],
        "skew-y": [{ "skew-y": qe() }],
        transform: [{ transform: [be, pe, "", "none", "gpu", "cpu"] }],
        "transform-origin": [{ origin: ne() }],
        "transform-style": [{ transform: ["3d", "flat"] }],
        translate: [{ translate: Ye() }],
        "translate-x": [{ "translate-x": Ye() }],
        "translate-y": [{ "translate-y": Ye() }],
        "translate-z": [{ "translate-z": Ye() }],
        "translate-none": ["translate-none"],
        accent: [{ accent: w() }],
        appearance: [{ appearance: ["none", "auto"] }],
        "caret-color": [{ caret: w() }],
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
              be,
              pe,
            ],
          },
        ],
        "field-sizing": [{ "field-sizing": ["fixed", "content"] }],
        "pointer-events": [{ "pointer-events": ["auto", "none"] }],
        resize: [{ resize: ["none", "", "y", "x"] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": $() }],
        "scroll-mx": [{ "scroll-mx": $() }],
        "scroll-my": [{ "scroll-my": $() }],
        "scroll-ms": [{ "scroll-ms": $() }],
        "scroll-me": [{ "scroll-me": $() }],
        "scroll-mt": [{ "scroll-mt": $() }],
        "scroll-mr": [{ "scroll-mr": $() }],
        "scroll-mb": [{ "scroll-mb": $() }],
        "scroll-ml": [{ "scroll-ml": $() }],
        "scroll-p": [{ "scroll-p": $() }],
        "scroll-px": [{ "scroll-px": $() }],
        "scroll-py": [{ "scroll-py": $() }],
        "scroll-ps": [{ "scroll-ps": $() }],
        "scroll-pe": [{ "scroll-pe": $() }],
        "scroll-pt": [{ "scroll-pt": $() }],
        "scroll-pr": [{ "scroll-pr": $() }],
        "scroll-pb": [{ "scroll-pb": $() }],
        "scroll-pl": [{ "scroll-pl": $() }],
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
            "will-change": ["auto", "scroll", "contents", "transform", be, pe],
          },
        ],
        fill: [{ fill: ["none", ...w()] }],
        "stroke-w": [{ stroke: [Me, cu, ma, Oc] }],
        stroke: [{ stroke: ["none", ...w()] }],
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
  OA = y0(L0),
  zg = {};
function mi(a, i) {
  const r = C.useRef(zg);
  return (r.current === zg && (r.current = a(i)), r);
}
function Ug(a, i, r, s) {
  const c = mi(By).current;
  return (B0(c, a, i, r, s) && Hy(c, [a, i, r, s]), c.callback);
}
function V0(a) {
  const i = mi(By).current;
  return (H0(i, a) && Hy(i, a), i.callback);
}
function By() {
  return { callback: null, cleanup: null, refs: [] };
}
function B0(a, i, r, s, c) {
  return (
    a.refs[0] !== i || a.refs[1] !== r || a.refs[2] !== s || a.refs[3] !== c
  );
}
function H0(a, i) {
  return a.refs.length !== i.length || a.refs.some((r, s) => r !== i[s]);
}
function Hy(a, i) {
  if (((a.refs = i), i.every((r) => r == null))) {
    a.callback = null;
    return;
  }
  a.callback = (r) => {
    if ((a.cleanup && (a.cleanup(), (a.cleanup = null)), r != null)) {
      const s = Array(i.length).fill(null);
      for (let c = 0; c < i.length; c += 1) {
        const f = i[c];
        if (f != null)
          switch (typeof f) {
            case "function": {
              const m = f(r);
              typeof m == "function" && (s[c] = m);
              break;
            }
            case "object": {
              f.current = r;
              break;
            }
          }
      }
      a.cleanup = () => {
        for (let c = 0; c < i.length; c += 1) {
          const f = i[c];
          if (f != null)
            switch (typeof f) {
              case "function": {
                const m = s[c];
                typeof m == "function" ? m() : f(null);
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
const Y0 = parseInt(C.version, 10);
function q0(a) {
  return Y0 >= a;
}
function Yy(a, i) {
  if (a && !i) return a;
  if (!a && i) return i;
  if (a || i) return { ...a, ...i };
}
function j0(a, i) {
  const r = {};
  for (const s in a) {
    const c = a[s];
    if (i?.hasOwnProperty(s)) {
      const f = i[s](c);
      f != null && Object.assign(r, f);
      continue;
    }
    c === !0
      ? (r[`data-${s.toLowerCase()}`] = "")
      : c && (r[`data-${s.toLowerCase()}`] = c.toString());
  }
  return r;
}
function G0(a, i) {
  return typeof a == "function" ? a(i) : a;
}
const gu = {};
function Zc(a, i, r, s, c) {
  let f = { ...Kc(a, gu) };
  return (i && (f = qy(f, i)), f);
}
function k0(a) {
  if (a.length === 0) return gu;
  if (a.length === 1) return Kc(a[0], gu);
  let i = { ...Kc(a[0], gu) };
  for (let r = 1; r < a.length; r += 1) i = qy(i, a[r]);
  return i;
}
function qy(a, i) {
  return jy(i) ? i(a) : X0(a, i);
}
function X0(a, i) {
  if (!i) return a;
  for (const r in i) {
    const s = i[r];
    switch (r) {
      case "style": {
        a[r] = Yy(a.style, s);
        break;
      }
      case "className": {
        a[r] = Gy(a.className, s);
        break;
      }
      default:
        Q0(r, s) ? (a[r] = Z0(a[r], s)) : (a[r] = s);
    }
  }
  return a;
}
function Q0(a, i) {
  const r = a.charCodeAt(0),
    s = a.charCodeAt(1),
    c = a.charCodeAt(2);
  return (
    r === 111 &&
    s === 110 &&
    c >= 65 &&
    c <= 90 &&
    (typeof i == "function" || typeof i > "u")
  );
}
function jy(a) {
  return typeof a == "function";
}
function Kc(a, i) {
  return jy(a) ? a(i) : (a ?? gu);
}
function Z0(a, i) {
  return i
    ? a
      ? (r) => {
          if (J0(r)) {
            const c = r;
            K0(c);
            const f = i(c);
            return (c.baseUIHandlerPrevented || a?.(c), f);
          }
          const s = i(r);
          return (a?.(r), s);
        }
      : i
    : a;
}
function K0(a) {
  return (
    (a.preventBaseUIHandler = () => {
      a.baseUIHandlerPrevented = !0;
    }),
    a
  );
}
function Gy(a, i) {
  return i ? (a ? i + " " + a : i) : a;
}
function J0(a) {
  return a != null && typeof a == "object" && "nativeEvent" in a;
}
function Mn() {}
const Ql = Object.freeze({}),
  F0 = { style: { transition: "none" } },
  $0 = { fallbackAxisSide: "end" };
function qn(a, i, r = {}) {
  const s = i.render,
    c = W0(i, r);
  if (r.enabled === !1) return null;
  const f = r.state ?? Ql;
  return P0(a, s, c, f);
}
function W0(a, i = {}) {
  const { className: r, render: s } = a,
    {
      state: c = Ql,
      ref: f,
      props: m,
      stateAttributesMapping: h,
      enabled: y = !0,
    } = i,
    v = y ? G0(r, c) : void 0,
    p = y ? j0(c, h) : Ql,
    b = y ? (Yy(p, Array.isArray(m) ? k0(m) : m) ?? Ql) : Ql;
  return (
    typeof document < "u" &&
      (y
        ? Array.isArray(f)
          ? (b.ref = V0([b.ref, Ng(s), ...f]))
          : (b.ref = Ug(b.ref, Ng(s), f))
        : Ug(null, null)),
    y ? (v !== void 0 && (b.className = Gy(b.className, v)), b) : Ql
  );
}
function P0(a, i, r, s) {
  if (i) {
    if (typeof i == "function") return i(r, s);
    const c = Zc(r, i.props);
    return ((c.ref = r.ref), C.cloneElement(i, c));
  }
  if (a && typeof a == "string") return I0(a, r);
  throw new Error("Base UI: Render element or function are not defined.");
}
function I0(a, i) {
  return a === "button"
    ? zn.jsx("button", { type: "button", ...i })
    : a === "img"
      ? zn.jsx("img", { alt: "", ...i })
      : C.createElement(a, i);
}
function Ng(a) {
  return a && typeof a != "function" ? (q0(19) ? a.props.ref : a.ref) : null;
}
function DA(a) {
  return qn(a.defaultTagName ?? "div", a, a);
}
const Lg = (a) => (typeof a == "boolean" ? `${a}` : a === 0 ? "0" : a),
  Vg = n0,
  zA = (a, i) => (r) => {
    var s;
    if (i?.variants == null) return Vg(a, r?.class, r?.className);
    const { variants: c, defaultVariants: f } = i,
      m = Object.keys(c).map((v) => {
        const p = r?.[v],
          b = f?.[v];
        if (p === null) return null;
        const x = Lg(p) || Lg(b);
        return c[v][x];
      }),
      h =
        r &&
        Object.entries(r).reduce((v, p) => {
          let [b, x] = p;
          return (x === void 0 || (v[b] = x), v);
        }, {}),
      y =
        i == null || (s = i.compoundVariants) === null || s === void 0
          ? void 0
          : s.reduce((v, p) => {
              let { class: b, className: x, ..._ } = p;
              return Object.entries(_).every((M) => {
                let [z, X] = M;
                return Array.isArray(X)
                  ? X.includes({ ...f, ...h }[z])
                  : { ...f, ...h }[z] === X;
              })
                ? [...v, b, x]
                : v;
            }, []);
    return Vg(a, m, y, r?.class, r?.className);
  },
  e1 = { PICK_COUNTRY_CODE: "pick-country-code" },
  ky = { LOGIN_ID: "login-id", LOGIN_PASSWORD: "login-password" },
  va = {
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
let t1 = class Jc {
    settings;
    themes;
    constructor(i) {
      ((this.settings = Jc.getSettings(i)), (this.themes = Jc.getThemes(i)));
    }
    static getSettings(i) {
      if (!i?.settings) return null;
      const { colors: r, favicon_url: s, logo_url: c, font: f } = i.settings;
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
        ...(typeof s == "string" && s.length > 0 ? { faviconUrl: s } : {}),
        ...(typeof c == "string" && c.length > 0 ? { logoUrl: c } : {}),
        ...(typeof f?.url == "string" && f.url.length > 0
          ? { fontUrl: f.url }
          : {}),
      };
    }
    static getThemes(i) {
      if (!i?.themes) return null;
      const {
        default: {
          borders: r = {},
          colors: s = {},
          displayName: c = "",
          fonts: f = {},
          page_background: m = {},
          widget: h = {},
        } = {},
      } = i.themes;
      return {
        default: {
          borders: r,
          colors: s,
          displayName: c,
          fonts: f,
          pageBackground: m,
          widget: h,
        },
      };
    }
  },
  n1 = class {
    id;
    name;
    logoUrl;
    description;
    metadata;
    constructor(i) {
      ((this.id = i?.id),
        (this.name = i?.name),
        (this.logoUrl = i?.logo_uri ?? null),
        (this.description = i?.description ?? null),
        (this.metadata = i?.metadata ?? null));
    }
  },
  l1 = class {
    id;
    name;
    usage;
    displayName;
    branding;
    metadata;
    constructor(i) {
      ((this.id = i?.id ?? null),
        (this.name = i?.name ?? null),
        (this.usage = i?.usage ?? null),
        (this.displayName = i?.display_name ?? null),
        (this.branding = i?.branding ?? null),
        (this.metadata = i?.metadata ?? null));
    }
  },
  a1 = class {
    name;
    constructor(i) {
      this.name = i.name;
    }
  },
  $r = class Fc {
    name;
    captchaImage;
    captchaSiteKey;
    captchaProvider;
    isCaptchaAvailable;
    data;
    links;
    texts;
    captcha;
    constructor(i) {
      ((this.name = i.name),
        (this.captchaImage = i.captcha?.image ?? null),
        (this.captchaSiteKey = i.captcha?.siteKey ?? null),
        (this.captchaProvider = i.captcha?.provider ?? null),
        (this.isCaptchaAvailable = !!i.captcha),
        (this.texts = i.texts ?? null),
        (this.captcha = i.captcha ?? null),
        (this.data = Fc.getScreenData(i)),
        (this.links = Fc.getScreenLinks(i)));
    }
    static getScreenData(i) {
      return i.data ?? null;
    }
    static getScreenLinks(i) {
      return i.links ?? null;
    }
  },
  i1 = class {
    name;
    friendlyName;
    enabledLocales;
    enabledFactors;
    constructor(i) {
      ((this.name = i?.name ?? null),
        (this.friendlyName = i?.friendly_name ?? null),
        (this.enabledLocales = i?.enabled_locales ?? null),
        (this.enabledFactors = i?.enabled_factors ?? null));
    }
  },
  sf = class Zr {
    state;
    hasErrors;
    locale;
    countryCode;
    countryPrefix;
    connectionStrategy;
    errors;
    currentConnection;
    alternateConnections;
    constructor(i) {
      ((this.state = i.state),
        (this.hasErrors = !!(i.errors && i.errors.length > 0)),
        (this.locale = i.locale),
        (this.countryCode = i.country_code?.code ?? null),
        (this.countryPrefix = i.country_code?.prefix ?? null),
        (this.connectionStrategy =
          i?.connection?.strategy?.toLowerCase() ?? null),
        (this.errors = Zr.getErrors(i)),
        (this.currentConnection = Zr.getCurrentConnection(i)),
        (this.alternateConnections = Zr.getAlternateConnections(i)));
    }
    static getErrors(i) {
      return i.errors && i.errors.length !== 0
        ? i.errors.map((r) => ({
            code: r.code,
            field: r.field,
            message: r.message,
          }))
        : null;
    }
    static getCurrentConnection(i) {
      if (!i?.connection) return null;
      const { name: r, strategy: s, metadata: c } = i.connection;
      return { name: r, strategy: s, metadata: c };
    }
    static getAlternateConnections(i) {
      const r = i?.alternate_connections;
      return r && Array.isArray(r)
        ? r.map((s) => {
            const { name: c, strategy: f, metadata: m } = s,
              h = { name: c, strategy: f, metadata: m };
            if ("options" in s) {
              const {
                icon_url: y,
                display_name: v,
                show_as_button: p,
              } = s.options;
              return {
                ...h,
                options: { iconUrl: y, displayName: v, showAsButton: p },
              };
            }
            return h;
          })
        : null;
    }
  },
  u1 = class $c {
    submittedFormData;
    authorizationParams;
    constructor(i) {
      ((this.submittedFormData = $c.getSubmittedFormData(i)),
        (this.authorizationParams = $c.getAuthorizationParams(i)));
    }
    static getSubmittedFormData(i) {
      return i?.submitted_form_data ? (i?.submitted_form_data ?? null) : null;
    }
    static getAuthorizationParams(i) {
      return i?.authorization_params
        ? {
            login_hint: i?.authorization_params?.login_hint,
            screen_hint: i?.authorization_params?.screen_hint,
            ui_locales: i?.authorization_params?.ui_locales,
            ...i?.authorization_params,
          }
        : null;
    }
  },
  r1 = class Xy {
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
    constructor(i) {
      ((this.id = i?.id ?? null),
        (this.username = i?.username ?? null),
        (this.email = i?.email ?? null),
        (this.picture = i?.picture ?? null),
        (this.phoneNumber = i?.phone_number ?? null),
        (this.userMetadata = i?.user_metadata ?? null),
        (this.appMetadata = i?.app_metadata ?? null),
        (this.enrolledFactors = i?.enrolled_factors ?? null),
        (this.enrolledEmails = i?.enrolled_emails ?? null),
        (this.enrolledPhoneNumbers = i?.enrolled_phone_numbers ?? null),
        (this.enrolledDevices = i?.enrolled_devices ?? null),
        (this.organizations = Xy.getOrganizations(i)));
    }
    static getOrganizations(i) {
      return i?.organizations && Array.isArray(i?.organizations)
        ? i?.organizations.map((r) => ({
            organizationId: r.id,
            organizationName: r.name,
            displayName: r.display_name,
            branding: { logoUrl: r.branding?.logo_url },
          }))
        : null;
    }
  },
  cf = class Xl {
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
      if (!Xl.context) {
        const s = window;
        Xl.context = s.universal_login_context ?? null;
      }
      const i = Xl.context,
        r = new.target?.screenIdentifier;
      if (!i)
        throw new Error(
          "Universal Login Context is not available on the global window object."
        );
      if (r !== i?.screen?.name && r !== "")
        throw new Error(
          `Incorrect import: The current screen name does not match the imported screen class. Imported Screen: ${r}, Current Screen: ${i?.screen?.name}`
        );
      ((this.branding = new t1(i.branding)),
        (this.screen = new $r(i.screen)),
        (this.tenant = new i1(i.tenant)),
        (this.prompt = new a1(i.prompt)),
        (this.organization = new l1(i.organization)),
        (this.client = new n1(i.client)),
        (this.transaction = new sf(i.transaction)),
        (this.user = new r1(i.user)),
        (this.untrustedData = new u1(i.untrusted_data)));
    }
    getContext(i) {
      if (!Xl.context) {
        const r = window;
        Xl.context = r.universal_login_context ?? null;
      }
      if (Xl.context) return Xl.context[i];
    }
    getErrors() {
      return this.transaction?.errors ?? [];
    }
  };
async function o1() {
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
function Qy() {
  return window.PublicKeyCredential !== void 0;
}
async function ff() {
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
async function s1() {
  if (!Qy()) return !1;
  try {
    return (
      (await ff()) &&
      !!(await window.PublicKeyCredential.isConditionalMediationAvailable())
    );
  } catch (a) {
    return (console.warn("isPasskeySupported failed", a), !1);
  }
}
async function Zy() {
  return {
    "js-available": !0,
    "is-brave": await o1(),
    "webauthn-available": Qy(),
    "webauthn-platform-available": await ff(),
    "allow-passkeys": await s1(),
  };
}
let c1 = class extends Error {
    code;
    field;
    constructor(i, r) {
      (super(i),
        (this.name = new.target.name),
        (this.code = "ACUL_ERROR"),
        (this.field = r),
        Object.setPrototypeOf(this, new.target.prototype));
    }
  },
  f1 = class extends c1 {
    code = "SDK_USAGE_ERROR";
    constructor(i, r) {
      (super(i, r), Object.setPrototypeOf(this, new.target.prototype));
    }
  },
  ha = class {
    options;
    constructor(i) {
      this.options = i;
    }
    async submitData(i) {
      const r = { ...i, state: this.options.state },
        s = this.buildForm(r);
      (document.body.appendChild(s), s.submit());
    }
    buildForm(i) {
      const r = document.createElement("form");
      return (
        (r.method = "POST"),
        (r.action = this.options.route ?? ""),
        Object.entries(i).forEach(([s, c]) => {
          const f = document.createElement("input");
          ((f.type = "hidden"),
            (f.name = s),
            (f.value = String(c ?? "")),
            r.appendChild(f));
        }),
        this.addTelemetryField(r),
        r
      );
    }
    addTelemetryField(i) {
      const r = document.createElement("input"),
        s = globalThis.__ACUL_SDK_NAME__ || "@auth0/auth0-acul-js",
        c = globalThis.__ACUL_SDK_VERSION__ || "1.0.0-alpha.1";
      return (
        (r.type = "hidden"),
        (r.name = "acul-sdk"),
        (r.value = `${s}@${c}`),
        i.appendChild(r),
        i
      );
    }
  };
function d1(a) {
  return a || null;
}
function Wc(a) {
  if (!a || typeof a != "string")
    throw new TypeError("Invalid base64Url input");
  const i = a.replace(/-/g, "+").replace(/_/g, "/"),
    r = (4 - (i.length % 4)) % 4,
    s = i + "=".repeat(r),
    c = atob(s),
    f = new Uint8Array(c.length);
  for (let m = 0; m < c.length; m++) f[m] = c.charCodeAt(m);
  return f.buffer;
}
function m1(a) {
  if (!(a instanceof ArrayBuffer))
    throw new TypeError("Expected an ArrayBuffer");
  const i = new Uint8Array(a);
  let r = "";
  for (const s of i) r += String.fromCharCode(s);
  return btoa(r).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
function fu(a) {
  return a ? m1(a) : null;
}
async function h1(a) {
  if (!a?.challenge) throw new Error(va.PASSKEY_PUBLIC_KEY_UNAVAILABLE);
  const i = await ff(),
    r = Wc(a.challenge),
    s = await navigator.credentials.get({
      publicKey: {
        challenge: r,
        allowCredentials: a.allowCredentials?.length
          ? a.allowCredentials.map((f) => ({
              id: Wc(f.id),
              type: "public-key",
              transports: f.transports?.map((m) => m),
            }))
          : void 0,
      },
    });
  if (!s) throw new Error(va.PASSKEY_CREDENTIALS_UNAVAILABLE);
  if (
    !(function (f) {
      return f.authenticatorData !== void 0;
    })(s.response)
  )
    throw new Error(va.PASSKEY_EXPECTED_ASSERTION_RESPONSE);
  const c = s.response;
  return {
    id: s.id,
    rawId: fu(s.rawId ?? null),
    type: s.type,
    authenticatorAttachment: s.authenticatorAttachment,
    response: {
      clientDataJSON: fu(c.clientDataJSON ?? null),
      authenticatorData: fu(c.authenticatorData ?? null),
      signature: fu(c.signature ?? null),
      userHandle: fu(c.userHandle ?? null),
    },
    isUserVerifyingPlatformAuthenticatorAvailable: i,
  };
}
async function g1({ publicKey: a, inputId: i, onResolve: r, onReject: s }) {
  if (!a?.challenge) throw new Error(va.PASSKEY_PUBLIC_KEY_UNAVAILABLE);
  const c = PublicKeyCredential;
  if (
    !(
      typeof c.isConditionalMediationAvailable == "function" &&
      (await c.isConditionalMediationAvailable())
    )
  )
    return void s?.(
      new Error("Conditional mediation not supported by this browser.")
    );
  if (!("credentials" in navigator) || !("PublicKeyCredential" in window))
    return void s?.(
      new Error("WebAuthn is not supported in this environment.")
    );
  if (typeof document < "u" && i) {
    const y = document.getElementById(i);
    y && y.tagName?.toUpperCase() === "INPUT"
      ? y.setAttribute("autocomplete", "username webauthn")
      : console.warn(
          `[Auth0 ACUL] No valid <input> found with id="${i}". Passkey autocomplete may not work.`
        );
  }
  const f = Wc(a.challenge),
    m = new AbortController(),
    h = {
      publicKey: {
        challenge: f,
        rpId: window.location.hostname,
        allowCredentials: [],
        userVerification: "preferred",
        timeout: 3e5,
      },
      mediation: "conditional",
      signal: m.signal,
    };
  return (
    navigator.credentials
      .get(h)
      .then((y) => y && r(y))
      .catch((y) => {
        (y instanceof DOMException && y.name === "AbortError") || s?.(y);
      }),
    m
  );
}
function Ky(a) {
  return a?.links?.signup ?? null;
}
function Jy(a) {
  return a?.links?.reset_password ?? null;
}
function y1(a) {
  return a?.links?.edit_identifier ?? null;
}
function v1(a) {
  return a.data?.passkey?.public_key ?? null;
}
let p1 = class extends $r {
  signupLink;
  resetPasswordLink;
  publicKey;
  constructor(i) {
    (super(i),
      (this.signupLink = Ky(i)),
      (this.resetPasswordLink = Jy(i)),
      (this.publicKey = v1(i)));
  }
};
const Bg = { EMAIL: "email", PHONE: "phone" },
  Hg = { SMS: "sms", EMAIL: "email" };
function Fy(a) {
  return a?.connection?.options?.signup_enabled === !0;
}
function $y(a) {
  return a?.connection?.options?.forgot_password_enabled === !0;
}
function Wy(a) {
  return a?.connection?.options?.authentication_methods?.passkey?.enabled ?? !1;
}
function b1(a) {
  return a?.connection?.options?.username_required ?? !1;
}
function Py(a) {
  const i = a?.connection,
    { signup_status: r, validation: s } =
      i?.options?.attributes?.username ?? {};
  if (s)
    return {
      isActive: ["optional", "required"].includes(r),
      maxLength: s.max_length,
      minLength: s.min_length,
      allowedFormats: {
        usernameInEmailFormat: s.allowed_types?.email ?? !1,
        usernameInPhoneFormat: s.allowed_types?.phone_number ?? !1,
      },
    };
  const { validation: c, username_required: f } = i?.options ?? {},
    m = c?.username;
  return m
    ? { isActive: f === !0, maxLength: m.max_length, minLength: m.min_length }
    : null;
}
function S1(a) {
  const i = a?.connection,
    r = i?.options?.authentication_methods?.password;
  return r
    ? {
        minLength: r.min_length,
        policy: r.policy,
        passwordSecurityInfo: r.password_security_info?.map((s) =>
          s.status === "valid" ? { ...s, isValid: !0 } : { ...s, isValid: !1 }
        ),
      }
    : null;
}
function E1(a) {
  const i = a?.connection;
  if (!i) return null;
  const { attributes: r, username_required: s } = i.options || {};
  if (r && Object.keys(r).length > 0) {
    const c = Object.entries(r)
      .filter(([, f]) => f.identifier_active)
      .map(([f]) => f);
    return c.length > 0 ? c : null;
  }
  return s ? ["email", "username"] : ["email"];
}
function A1(a) {
  const i = a?.connection;
  if (!i) return null;
  const { attributes: r, username_required: s } = i.options || {};
  return r && Object.keys(r).length > 0
    ? x1(i, ["required", "optional"])
    : s
      ? ["email", "username"]
      : ["email"];
}
function x1(a, i) {
  if (!a) return null;
  const { attributes: r, username_required: s } = a.options || {};
  if (!r || Object.keys(r).length === 0)
    return s ? ["email", "username"] : ["email"];
  const c = Object.entries(r)
    .filter(([, f]) => f.signup_status && i.includes(f.signup_status))
    .map(([f]) => f);
  return c.length > 0 ? c : null;
}
class df extends sf {
  isSignupEnabled;
  isForgotPasswordEnabled;
  isPasskeyEnabled;
  isUsernameRequired;
  usernamePolicy;
  allowedIdentifiers;
  constructor(i) {
    (super(i),
      (this.isSignupEnabled = Fy(i)),
      (this.isForgotPasswordEnabled = $y(i)),
      (this.isPasskeyEnabled = Wy(i)),
      (this.isUsernameRequired = b1(i)),
      (this.usernamePolicy = Py(i)),
      (this.allowedIdentifiers = df.getAllowedIdentifiers(
        i,
        this.connectionStrategy
      )));
  }
  static getAllowedIdentifiers(i, r) {
    return r === Hg.SMS ? [Bg.PHONE] : r === Hg.EMAIL ? [Bg.EMAIL] : E1(i);
  }
}
class ri extends cf {
  static screenIdentifier = ky.LOGIN_ID;
  #e;
  #t = !1;
  screen;
  transaction;
  constructor() {
    super();
    const i = this.getContext("screen"),
      r = this.getContext("transaction");
    ((this.screen = new p1(i)), (this.transaction = new df(r)));
  }
  async login(i) {
    const r = {
        state: this.transaction.state,
        telemetry: [ri.screenIdentifier, "login"],
      },
      s = await Zy();
    await new ha(r).submitData({ ...i, ...s });
  }
  async federatedLogin(i) {
    const r = {
      state: this.transaction.state,
      telemetry: [ri.screenIdentifier, "federatedLogin"],
    };
    await new ha(r).submitData(i);
  }
  async passkeyLogin(i) {
    (this.#e?.abort(), (this.#e = void 0));
    const r = this.screen.publicKey;
    if (!r) throw new Error(va.PASSKEY_DATA_UNAVAILABLE);
    try {
      const s = await h1(r),
        c = {
          state: this.transaction.state,
          telemetry: [ri.screenIdentifier, "passkeyLogin"],
        };
      await new ha(c).submitData({ ...i, passkey: JSON.stringify(s) });
    } catch (s) {
      if (s instanceof DOMException && s.name === "NotAllowedError") {
        if (this.#t)
          try {
            await this.registerPasskeyAutofill();
          } catch (c) {
            console.warn("Conditional UI restart failed", c);
          }
        return;
      }
      throw s;
    }
  }
  async pickCountryCode(i) {
    const r = {
      state: this.transaction.state,
      telemetry: [ri.screenIdentifier, "pickCountryCode"],
    };
    await new ha(r).submitData({ ...i, action: e1.PICK_COUNTRY_CODE });
  }
  getLoginIdentifiers() {
    return d1(this.transaction.allowedIdentifiers);
  }
  async registerPasskeyAutofill(i) {
    const r = this.screen.publicKey;
    if (!r) throw new Error(va.PASSKEY_DATA_UNAVAILABLE);
    ((this.#e =
      (await g1({
        publicKey: r,
        inputId: i,
        onResolve: async (s) => {
          const c = {
            state: this.transaction.state,
            telemetry: [ri.screenIdentifier, "passkeyAutocomplete"],
          };
          await new ha(c).submitData({ passkey: JSON.stringify(s) });
        },
        onReject: (s) => {
          throw (
            console.warn("Passkey autocomplete registration failed", s),
            new f1(va.PASSKEY_AUTOCOMPLETE_REGISTRATION_FAILED)
          );
        },
      })) ?? void 0),
      (this.#t = !0));
  }
}
function Iy({ controlled: a, default: i, name: r, state: s = "value" }) {
  const { current: c } = C.useRef(a !== void 0),
    [f, m] = C.useState(i),
    h = c ? a : f,
    y = C.useCallback((v) => {
      c || m(v);
    }, []);
  return [h, y];
}
const Dc = _y[`useInsertionEffect${Math.random().toFixed(1)}`.slice(0, -3)],
  T1 = Dc && Dc !== C.useLayoutEffect ? Dc : (a) => a();
function Ze(a) {
  const i = mi(_1).current;
  return ((i.next = a), T1(i.effect), i.trampoline);
}
function _1() {
  const a = {
    next: void 0,
    callback: R1,
    trampoline: (...i) => a.callback?.(...i),
    effect: () => {
      a.callback = a.next;
    },
  };
  return a;
}
function R1() {}
const C1 = () => {},
  nt = typeof document < "u" ? C.useLayoutEffect : C1,
  w1 = C.createContext(void 0);
function M1(a = !0) {
  const i = C.useContext(w1);
  if (i === void 0 && !a)
    throw new Error("Base UI: DirectionContext is missing.");
  return i?.direction ?? "ltr";
}
function Ot(a, i, r) {
  let s = !1,
    c = !1;
  const f = Ql;
  return {
    reason: a,
    event: i ?? new Event("base-ui"),
    cancel() {
      s = !0;
    },
    allowPropagation() {
      c = !0;
    },
    get isCanceled() {
      return s;
    },
    get isPropagationAllowed() {
      return c;
    },
    ...f,
  };
}
const O1 = { ..._y };
let Yg = 0;
function D1(a, i = "mui") {
  const [r, s] = C.useState(a),
    c = a || r;
  return (
    C.useEffect(() => {
      r == null && ((Yg += 1), s(`${i}-${Yg}`));
    }, [r, i]),
    c
  );
}
const qg = O1.useId;
function mf(a, i) {
  if (qg !== void 0) {
    const r = qg();
    return a ?? (i ? `${i}-${r}` : r);
  }
  return D1(a, i);
}
function ev(a) {
  return mf(a, "base-ui");
}
var zc = { exports: {} },
  Mt = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var jg;
function z1() {
  if (jg) return Mt;
  jg = 1;
  var a = rf();
  function i(y) {
    var v = "https://react.dev/errors/" + y;
    if (1 < arguments.length) {
      v += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var p = 2; p < arguments.length; p++)
        v += "&args[]=" + encodeURIComponent(arguments[p]);
    }
    return (
      "Minified React error #" +
      y +
      "; visit " +
      v +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function r() {}
  var s = {
      d: {
        f: r,
        r: function () {
          throw Error(i(522));
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
    c = Symbol.for("react.portal");
  function f(y, v, p) {
    var b =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: c,
      key: b == null ? null : "" + b,
      children: y,
      containerInfo: v,
      implementation: p,
    };
  }
  var m = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function h(y, v) {
    if (y === "font") return "";
    if (typeof v == "string") return v === "use-credentials" ? v : "";
  }
  return (
    (Mt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = s),
    (Mt.createPortal = function (y, v) {
      var p =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!v || (v.nodeType !== 1 && v.nodeType !== 9 && v.nodeType !== 11))
        throw Error(i(299));
      return f(y, v, null, p);
    }),
    (Mt.flushSync = function (y) {
      var v = m.T,
        p = s.p;
      try {
        if (((m.T = null), (s.p = 2), y)) return y();
      } finally {
        ((m.T = v), (s.p = p), s.d.f());
      }
    }),
    (Mt.preconnect = function (y, v) {
      typeof y == "string" &&
        (v
          ? ((v = v.crossOrigin),
            (v =
              typeof v == "string"
                ? v === "use-credentials"
                  ? v
                  : ""
                : void 0))
          : (v = null),
        s.d.C(y, v));
    }),
    (Mt.prefetchDNS = function (y) {
      typeof y == "string" && s.d.D(y);
    }),
    (Mt.preinit = function (y, v) {
      if (typeof y == "string" && v && typeof v.as == "string") {
        var p = v.as,
          b = h(p, v.crossOrigin),
          x = typeof v.integrity == "string" ? v.integrity : void 0,
          _ = typeof v.fetchPriority == "string" ? v.fetchPriority : void 0;
        p === "style"
          ? s.d.S(y, typeof v.precedence == "string" ? v.precedence : void 0, {
              crossOrigin: b,
              integrity: x,
              fetchPriority: _,
            })
          : p === "script" &&
            s.d.X(y, {
              crossOrigin: b,
              integrity: x,
              fetchPriority: _,
              nonce: typeof v.nonce == "string" ? v.nonce : void 0,
            });
      }
    }),
    (Mt.preinitModule = function (y, v) {
      if (typeof y == "string")
        if (typeof v == "object" && v !== null) {
          if (v.as == null || v.as === "script") {
            var p = h(v.as, v.crossOrigin);
            s.d.M(y, {
              crossOrigin: p,
              integrity: typeof v.integrity == "string" ? v.integrity : void 0,
              nonce: typeof v.nonce == "string" ? v.nonce : void 0,
            });
          }
        } else v == null && s.d.M(y);
    }),
    (Mt.preload = function (y, v) {
      if (
        typeof y == "string" &&
        typeof v == "object" &&
        v !== null &&
        typeof v.as == "string"
      ) {
        var p = v.as,
          b = h(p, v.crossOrigin);
        s.d.L(y, p, {
          crossOrigin: b,
          integrity: typeof v.integrity == "string" ? v.integrity : void 0,
          nonce: typeof v.nonce == "string" ? v.nonce : void 0,
          type: typeof v.type == "string" ? v.type : void 0,
          fetchPriority:
            typeof v.fetchPriority == "string" ? v.fetchPriority : void 0,
          referrerPolicy:
            typeof v.referrerPolicy == "string" ? v.referrerPolicy : void 0,
          imageSrcSet:
            typeof v.imageSrcSet == "string" ? v.imageSrcSet : void 0,
          imageSizes: typeof v.imageSizes == "string" ? v.imageSizes : void 0,
          media: typeof v.media == "string" ? v.media : void 0,
        });
      }
    }),
    (Mt.preloadModule = function (y, v) {
      if (typeof y == "string")
        if (v) {
          var p = h(v.as, v.crossOrigin);
          s.d.m(y, {
            as: typeof v.as == "string" && v.as !== "script" ? v.as : void 0,
            crossOrigin: p,
            integrity: typeof v.integrity == "string" ? v.integrity : void 0,
          });
        } else s.d.m(y);
    }),
    (Mt.requestFormReset = function (y) {
      s.d.r(y);
    }),
    (Mt.unstable_batchedUpdates = function (y, v) {
      return y(v);
    }),
    (Mt.useFormState = function (y, v, p) {
      return m.H.useFormState(y, v, p);
    }),
    (Mt.useFormStatus = function () {
      return m.H.useHostTransitionStatus();
    }),
    (Mt.version = "19.2.0"),
    Mt
  );
}
var Gg;
function tv() {
  if (Gg) return zc.exports;
  Gg = 1;
  function a() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (i) {
        console.error(i);
      }
  }
  return (a(), (zc.exports = z1()), zc.exports);
}
var hi = tv();
const U1 = [];
function nv(a) {
  C.useEffect(a, U1);
}
const kr = null;
class N1 {
  callbacks = [];
  callbacksCount = 0;
  nextId = 1;
  startId = 1;
  isScheduled = !1;
  tick = (i) => {
    this.isScheduled = !1;
    const r = this.callbacks,
      s = this.callbacksCount;
    if (
      ((this.callbacks = []),
      (this.callbacksCount = 0),
      (this.startId = this.nextId),
      s > 0)
    )
      for (let c = 0; c < r.length; c += 1) r[c]?.(i);
  };
  request(i) {
    const r = this.nextId;
    return (
      (this.nextId += 1),
      this.callbacks.push(i),
      (this.callbacksCount += 1),
      (!this.isScheduled || !1) &&
        (requestAnimationFrame(this.tick), (this.isScheduled = !0)),
      r
    );
  }
  cancel(i) {
    const r = i - this.startId;
    r < 0 ||
      r >= this.callbacks.length ||
      ((this.callbacks[r] = null), (this.callbacksCount -= 1));
  }
}
const Xr = new N1();
class dl {
  static create() {
    return new dl();
  }
  static request(i) {
    return Xr.request(i);
  }
  static cancel(i) {
    return Xr.cancel(i);
  }
  currentId = kr;
  request(i) {
    (this.cancel(),
      (this.currentId = Xr.request(() => {
        ((this.currentId = kr), i());
      })));
  }
  cancel = () => {
    this.currentId !== kr && (Xr.cancel(this.currentId), (this.currentId = kr));
  };
  disposeEffect = () => this.cancel;
}
function L1() {
  const a = mi(dl.create).current;
  return (nv(a.disposeEffect), a);
}
function V1(a, i = !1) {
  const r = L1();
  return Ze((s, c = null) => {
    if ((r.cancel(), a == null)) return;
    let f;
    if ("current" in a) {
      if (a.current == null) return;
      f = a.current;
    } else f = a;
    typeof f.getAnimations != "function" ||
    globalThis.BASE_UI_ANIMATIONS_DISABLED
      ? s()
      : r.request(() => {
          function m() {
            f &&
              Promise.allSettled(f.getAnimations().map((h) => h.finished)).then(
                () => {
                  (c != null && c.aborted) || hi.flushSync(s);
                }
              );
          }
          i ? r.request(m) : m();
        });
  });
}
function B1(a, i = !1, r = !1) {
  const [s, c] = C.useState(a && i ? "idle" : void 0),
    [f, m] = C.useState(a);
  return (
    a && !f && (m(!0), c("starting")),
    !a && f && s !== "ending" && !r && c("ending"),
    !a && !f && s === "ending" && c(void 0),
    nt(() => {
      if (!a && f && s !== "ending" && r) {
        const h = dl.request(() => {
          c("ending");
        });
        return () => {
          dl.cancel(h);
        };
      }
    }, [a, f, s, r]),
    nt(() => {
      if (!a || i) return;
      const h = dl.request(() => {
        hi.flushSync(() => {
          c(void 0);
        });
      });
      return () => {
        dl.cancel(h);
      };
    }, [i, a]),
    nt(() => {
      if (!a || !i) return;
      a && f && s !== "idle" && c("starting");
      const h = dl.request(() => {
        c("idle");
      });
      return () => {
        dl.cancel(h);
      };
    }, [i, a, f, c, s]),
    C.useMemo(
      () => ({ mounted: f, setMounted: m, transitionStatus: s }),
      [f, s]
    )
  );
}
let Wr = (function (a) {
  return (
    (a.startingStyle = "data-starting-style"),
    (a.endingStyle = "data-ending-style"),
    a
  );
})({});
const H1 = { [Wr.startingStyle]: "" },
  Y1 = { [Wr.endingStyle]: "" },
  q1 = {
    transitionStatus(a) {
      return a === "starting" ? H1 : a === "ending" ? Y1 : null;
    },
  };
function uo() {
  return typeof window < "u";
}
function gi(a) {
  return hf(a) ? (a.nodeName || "").toLowerCase() : "#document";
}
function Nt(a) {
  var i;
  return (
    (a == null || (i = a.ownerDocument) == null ? void 0 : i.defaultView) ||
    window
  );
}
function jn(a) {
  var i;
  return (i = (hf(a) ? a.ownerDocument : a.document) || window.document) == null
    ? void 0
    : i.documentElement;
}
function hf(a) {
  return uo() ? a instanceof Node || a instanceof Nt(a).Node : !1;
}
function Ie(a) {
  return uo() ? a instanceof Element || a instanceof Nt(a).Element : !1;
}
function on(a) {
  return uo() ? a instanceof HTMLElement || a instanceof Nt(a).HTMLElement : !1;
}
function Pc(a) {
  return !uo() || typeof ShadowRoot > "u"
    ? !1
    : a instanceof ShadowRoot || a instanceof Nt(a).ShadowRoot;
}
const j1 = new Set(["inline", "contents"]);
function Eu(a) {
  const { overflow: i, overflowX: r, overflowY: s, display: c } = En(a);
  return /auto|scroll|overlay|hidden|clip/.test(i + s + r) && !j1.has(c);
}
const G1 = new Set(["table", "td", "th"]);
function k1(a) {
  return G1.has(gi(a));
}
const X1 = [":popover-open", ":modal"];
function ro(a) {
  return X1.some((i) => {
    try {
      return a.matches(i);
    } catch {
      return !1;
    }
  });
}
const Q1 = ["transform", "translate", "scale", "rotate", "perspective"],
  Z1 = ["transform", "translate", "scale", "rotate", "perspective", "filter"],
  K1 = ["paint", "layout", "strict", "content"];
function gf(a) {
  const i = oo(),
    r = Ie(a) ? En(a) : a;
  return (
    Q1.some((s) => (r[s] ? r[s] !== "none" : !1)) ||
    (r.containerType ? r.containerType !== "normal" : !1) ||
    (!i && (r.backdropFilter ? r.backdropFilter !== "none" : !1)) ||
    (!i && (r.filter ? r.filter !== "none" : !1)) ||
    Z1.some((s) => (r.willChange || "").includes(s)) ||
    K1.some((s) => (r.contain || "").includes(s))
  );
}
function J1(a) {
  let i = yl(a);
  for (; on(i) && !gl(i); ) {
    if (gf(i)) return i;
    if (ro(i)) return null;
    i = yl(i);
  }
  return null;
}
function oo() {
  return typeof CSS > "u" || !CSS.supports
    ? !1
    : CSS.supports("-webkit-backdrop-filter", "none");
}
const F1 = new Set(["html", "body", "#document"]);
function gl(a) {
  return F1.has(gi(a));
}
function En(a) {
  return Nt(a).getComputedStyle(a);
}
function so(a) {
  return Ie(a)
    ? { scrollLeft: a.scrollLeft, scrollTop: a.scrollTop }
    : { scrollLeft: a.scrollX, scrollTop: a.scrollY };
}
function yl(a) {
  if (gi(a) === "html") return a;
  const i = a.assignedSlot || a.parentNode || (Pc(a) && a.host) || jn(a);
  return Pc(i) ? i.host : i;
}
function lv(a) {
  const i = yl(a);
  return gl(i)
    ? a.ownerDocument
      ? a.ownerDocument.body
      : a.body
    : on(i) && Eu(i)
      ? i
      : lv(i);
}
function Zl(a, i, r) {
  var s;
  (i === void 0 && (i = []), r === void 0 && (r = !0));
  const c = lv(a),
    f = c === ((s = a.ownerDocument) == null ? void 0 : s.body),
    m = Nt(c);
  if (f) {
    const h = Ic(m);
    return i.concat(
      m,
      m.visualViewport || [],
      Eu(c) ? c : [],
      h && r ? Zl(h) : []
    );
  }
  return i.concat(c, Zl(c, [], r));
}
function Ic(a) {
  return a.parent && Object.getPrototypeOf(a.parent) ? a.frameElement : null;
}
const Au = typeof navigator < "u",
  Uc = tS(),
  $1 = lS(),
  W1 = nS();
typeof CSS > "u" ||
  !CSS.supports ||
  CSS.supports("-webkit-backdrop-filter:none");
(Uc.platform === "MacIntel" && Uc.maxTouchPoints > 1) ||
  /iP(hone|ad|od)|iOS/.test(Uc.platform);
const P1 = Au && /apple/i.test(navigator.vendor),
  I1 = Au && $1.toLowerCase().startsWith("mac") && !navigator.maxTouchPoints,
  eS = W1.includes("jsdom/");
function tS() {
  if (!Au) return { platform: "", maxTouchPoints: -1 };
  const a = navigator.userAgentData;
  return a?.platform
    ? { platform: a.platform, maxTouchPoints: navigator.maxTouchPoints }
    : {
        platform: navigator.platform ?? "",
        maxTouchPoints: navigator.maxTouchPoints ?? -1,
      };
}
function nS() {
  if (!Au) return "";
  const a = navigator.userAgentData;
  return a && Array.isArray(a.brands)
    ? a.brands.map(({ brand: i, version: r }) => `${i}/${r}`).join(" ")
    : navigator.userAgent;
}
function lS() {
  if (!Au) return "";
  const a = navigator.userAgentData;
  return a?.platform ? a.platform : (navigator.platform ?? "");
}
const aS = "data-base-ui-focusable",
  av = "active",
  iv = "selected",
  iS =
    "input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";
function kg(a) {
  let i = a.activeElement;
  for (; i?.shadowRoot?.activeElement != null; ) i = i.shadowRoot.activeElement;
  return i;
}
function Hn(a, i) {
  if (!a || !i) return !1;
  const r = i.getRootNode?.();
  if (a.contains(i)) return !0;
  if (r && Pc(r)) {
    let s = i;
    for (; s; ) {
      if (a === s) return !0;
      s = s.parentNode || s.host;
    }
  }
  return !1;
}
function Bn(a) {
  return "composedPath" in a ? a.composedPath()[0] : a.target;
}
function cl(a, i) {
  if (i == null) return !1;
  if ("composedPath" in a) return a.composedPath().includes(i);
  const r = a;
  return r.target != null && i.contains(r.target);
}
function uS(a) {
  return a.matches("html,body");
}
function ga(a) {
  return a?.ownerDocument || document;
}
function rS(a) {
  return on(a) && a.matches(iS);
}
function oS(a) {
  if (!a || eS) return !0;
  try {
    return a.matches(":focus-visible");
  } catch {
    return !0;
  }
}
function yu(a, i, r = !0) {
  return a
    .filter((c) => c.parentId === i && (!r || c.context?.open))
    .flatMap((c) => [c, ...yu(a, c.id, r)]);
}
function sS(a) {
  return "nativeEvent" in a;
}
function Pr(a, i) {
  const r = ["mouse", "pen"];
  return (r.push("", void 0), r.includes(a));
}
const cS = ["top", "right", "bottom", "left"],
  ci = Math.min,
  an = Math.max,
  Ir = Math.round,
  Qr = Math.floor,
  Yn = (a) => ({ x: a, y: a }),
  fS = { left: "right", right: "left", bottom: "top", top: "bottom" },
  dS = { start: "end", end: "start" };
function ef(a, i, r) {
  return an(a, ci(i, r));
}
function vl(a, i) {
  return typeof a == "function" ? a(i) : a;
}
function rn(a) {
  return a.split("-")[0];
}
function Kl(a) {
  return a.split("-")[1];
}
function yf(a) {
  return a === "x" ? "y" : "x";
}
function vf(a) {
  return a === "y" ? "height" : "width";
}
const mS = new Set(["top", "bottom"]);
function Sn(a) {
  return mS.has(rn(a)) ? "y" : "x";
}
function pf(a) {
  return yf(Sn(a));
}
function hS(a, i, r) {
  r === void 0 && (r = !1);
  const s = Kl(a),
    c = pf(a),
    f = vf(c);
  let m =
    c === "x"
      ? s === (r ? "end" : "start")
        ? "right"
        : "left"
      : s === "start"
        ? "bottom"
        : "top";
  return (i.reference[f] > i.floating[f] && (m = eo(m)), [m, eo(m)]);
}
function gS(a) {
  const i = eo(a);
  return [tf(a), i, tf(i)];
}
function tf(a) {
  return a.replace(/start|end/g, (i) => dS[i]);
}
const Xg = ["left", "right"],
  Qg = ["right", "left"],
  yS = ["top", "bottom"],
  vS = ["bottom", "top"];
function pS(a, i, r) {
  switch (a) {
    case "top":
    case "bottom":
      return r ? (i ? Qg : Xg) : i ? Xg : Qg;
    case "left":
    case "right":
      return i ? yS : vS;
    default:
      return [];
  }
}
function bS(a, i, r, s) {
  const c = Kl(a);
  let f = pS(rn(a), r === "start", s);
  return (
    c && ((f = f.map((m) => m + "-" + c)), i && (f = f.concat(f.map(tf)))),
    f
  );
}
function eo(a) {
  return a.replace(/left|right|bottom|top/g, (i) => fS[i]);
}
function SS(a) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...a };
}
function uv(a) {
  return typeof a != "number"
    ? SS(a)
    : { top: a, right: a, bottom: a, left: a };
}
function to(a) {
  const { x: i, y: r, width: s, height: c } = a;
  return {
    width: s,
    height: c,
    top: r,
    left: i,
    right: i + s,
    bottom: r + c,
    x: i,
    y: r,
  };
}
function hl(a) {
  const i = mi(ES, a).current;
  return ((i.next = a), nt(i.effect), i);
}
function ES(a) {
  const i = {
    current: a,
    next: a,
    effect: () => {
      i.current = i.next;
    },
  };
  return i;
}
function rv(a) {
  const { enabled: i = !0, open: r, ref: s, onComplete: c } = a,
    f = hl(r),
    m = Ze(c),
    h = V1(s, r);
  C.useEffect(() => {
    i &&
      h(() => {
        r === f.current && m();
      });
  }, [i, r, m, h, f]);
}
let bf = (function (a) {
    return (
      (a.open = "data-open"),
      (a.closed = "data-closed"),
      (a[(a.startingStyle = Wr.startingStyle)] = "startingStyle"),
      (a[(a.endingStyle = Wr.endingStyle)] = "endingStyle"),
      (a.anchorHidden = "data-anchor-hidden"),
      a
    );
  })({}),
  AS = (function (a) {
    return ((a.popupOpen = "data-popup-open"), (a.pressed = "data-pressed"), a);
  })({});
const xS = { [AS.popupOpen]: "" },
  TS = { [bf.open]: "" },
  _S = { [bf.closed]: "" },
  RS = { [bf.anchorHidden]: "" },
  CS = {
    open(a) {
      return a ? xS : null;
    },
  },
  Sf = {
    open(a) {
      return a ? TS : _S;
    },
    anchorHidden(a) {
      return a ? RS : null;
    },
  },
  du = 0;
class yi {
  static create() {
    return new yi();
  }
  currentId = du;
  start(i, r) {
    (this.clear(),
      (this.currentId = setTimeout(() => {
        ((this.currentId = du), r());
      }, i)));
  }
  isStarted() {
    return this.currentId !== du;
  }
  clear = () => {
    this.currentId !== du &&
      (clearTimeout(this.currentId), (this.currentId = du));
  };
  disposeEffect = () => this.clear;
}
function pa() {
  const a = mi(yi.create).current;
  return (nv(a.disposeEffect), a);
}
function wS() {
  const a = new Map();
  return {
    emit(i, r) {
      a.get(i)?.forEach((s) => s(r));
    },
    on(i, r) {
      (a.has(i) || a.set(i, new Set()), a.get(i).add(r));
    },
    off(i, r) {
      a.get(i)?.delete(r);
    },
  };
}
const MS = C.createContext(null),
  OS = C.createContext(null),
  ov = () => C.useContext(MS)?.id || null,
  Ef = () => C.useContext(OS);
function co(a) {
  return `data-base-ui-${a}`;
}
const Zg = co("safe-polygon");
function Kr(a, i, r) {
  if (r && !Pr(r)) return 0;
  if (typeof a == "number") return a;
  if (typeof a == "function") {
    const s = a();
    return typeof s == "number" ? s : s?.[i];
  }
  return a?.[i];
}
function Nc(a) {
  return typeof a == "function" ? a() : a;
}
function DS(a, i = {}) {
  const { open: r, onOpenChange: s, dataRef: c, events: f, elements: m } = a,
    {
      enabled: h = !0,
      delay: y = 0,
      handleClose: v = null,
      mouseOnly: p = !1,
      restMs: b = 0,
      move: x = !0,
    } = i,
    _ = Ef(),
    M = ov(),
    z = hl(v),
    X = hl(y),
    P = hl(r),
    G = hl(b),
    Y = C.useRef(void 0),
    k = pa(),
    ne = C.useRef(void 0),
    Z = pa(),
    W = C.useRef(!0),
    $ = C.useRef(!1),
    me = C.useRef(() => {}),
    ge = C.useRef(!1),
    ce = Ze(() => {
      const O = c.current.openEvent?.type;
      return O?.includes("mouse") && O !== "mousedown";
    });
  (C.useEffect(() => {
    if (!h) return;
    function O(w) {
      w.open || (k.clear(), Z.clear(), (W.current = !0), (ge.current = !1));
    }
    return (
      f.on("openchange", O),
      () => {
        f.off("openchange", O);
      }
    );
  }, [h, f, k, Z]),
    C.useEffect(() => {
      if (!h || !z.current || !r) return;
      function O(ue) {
        ce() && s(!1, Ot("trigger-hover", ue));
      }
      const w = ga(m.floating).documentElement;
      return (
        w.addEventListener("mouseleave", O),
        () => {
          w.removeEventListener("mouseleave", O);
        }
      );
    }, [m.floating, r, s, h, z, ce]));
  const Q = C.useCallback(
      (O, w = !0) => {
        const ue = Kr(X.current, "close", Y.current);
        ue && !ne.current
          ? k.start(ue, () => s(!1, Ot("trigger-hover", O)))
          : w && (k.clear(), s(!1, Ot("trigger-hover", O)));
      },
      [X, s, k]
    ),
    B = Ze(() => {
      (me.current(), (ne.current = void 0));
    }),
    te = Ze(() => {
      if ($.current) {
        const O = ga(m.floating).body;
        ((O.style.pointerEvents = ""), O.removeAttribute(Zg), ($.current = !1));
      }
    }),
    oe = Ze(() =>
      c.current.openEvent
        ? ["click", "mousedown"].includes(c.current.openEvent.type)
        : !1
    );
  (C.useEffect(() => {
    if (!h) return;
    function O(V) {
      if (
        (k.clear(),
        (W.current = !1),
        (p && !Pr(Y.current)) || (Nc(G.current) > 0 && !Kr(X.current, "open")))
      )
        return;
      const J = Kr(X.current, "open", Y.current);
      J
        ? k.start(J, () => {
            P.current || s(!0, Ot("trigger-hover", V));
          })
        : r || s(!0, Ot("trigger-hover", V));
    }
    function w(V) {
      if (oe()) {
        te();
        return;
      }
      me.current();
      const J = ga(m.floating);
      if (
        (Z.clear(), (ge.current = !1), z.current && c.current.floatingContext)
      ) {
        (r || k.clear(),
          (ne.current = z.current({
            ...c.current.floatingContext,
            tree: _,
            x: V.clientX,
            y: V.clientY,
            onClose() {
              (te(), B(), oe() || Q(V, !0));
            },
          })));
        const ye = ne.current;
        (J.addEventListener("mousemove", ye),
          (me.current = () => {
            J.removeEventListener("mousemove", ye);
          }));
        return;
      }
      (Y.current === "touch" ? !Hn(m.floating, V.relatedTarget) : !0) && Q(V);
    }
    function ue(V) {
      oe() ||
        (c.current.floatingContext &&
          z.current?.({
            ...c.current.floatingContext,
            tree: _,
            x: V.clientX,
            y: V.clientY,
            onClose() {
              (te(), B(), oe() || Q(V));
            },
          })(V));
    }
    function se() {
      k.clear();
    }
    function S(V) {
      oe() || Q(V, !1);
    }
    if (Ie(m.domReference)) {
      const V = m.domReference,
        J = m.floating;
      return (
        r && V.addEventListener("mouseleave", ue),
        x && V.addEventListener("mousemove", O, { once: !0 }),
        V.addEventListener("mouseenter", O),
        V.addEventListener("mouseleave", w),
        J &&
          (J.addEventListener("mouseleave", ue),
          J.addEventListener("mouseenter", se),
          J.addEventListener("mouseleave", S)),
        () => {
          (r && V.removeEventListener("mouseleave", ue),
            x && V.removeEventListener("mousemove", O),
            V.removeEventListener("mouseenter", O),
            V.removeEventListener("mouseleave", w),
            J &&
              (J.removeEventListener("mouseleave", ue),
              J.removeEventListener("mouseenter", se),
              J.removeEventListener("mouseleave", S)));
        }
      );
    }
  }, [m, h, a, p, x, Q, B, te, s, r, P, _, X, z, c, oe, G, k, Z]),
    nt(() => {
      if (h && r && z.current?.__options?.blockPointerEvents && ce()) {
        $.current = !0;
        const O = m.floating;
        if (Ie(m.domReference) && O) {
          const w = ga(m.floating).body;
          w.setAttribute(Zg, "");
          const ue = m.domReference,
            se = _?.nodesRef.current.find((S) => S.id === M)?.context?.elements
              .floating;
          return (
            se && (se.style.pointerEvents = ""),
            (w.style.pointerEvents = "none"),
            (ue.style.pointerEvents = "auto"),
            (O.style.pointerEvents = "auto"),
            () => {
              ((w.style.pointerEvents = ""),
                (ue.style.pointerEvents = ""),
                (O.style.pointerEvents = ""));
            }
          );
        }
      }
    }, [h, r, M, m, _, z, ce]),
    nt(() => {
      r || ((Y.current = void 0), (ge.current = !1), B(), te());
    }, [r, B, te]),
    C.useEffect(
      () => () => {
        (B(), k.clear(), Z.clear());
      },
      [h, m.domReference, B, k, Z]
    ),
    C.useEffect(() => te, [te]));
  const R = C.useMemo(() => {
    function O(w) {
      Y.current = w.pointerType;
    }
    return {
      onPointerDown: O,
      onPointerEnter: O,
      onMouseMove(w) {
        const { nativeEvent: ue } = w;
        function se() {
          !W.current && !P.current && s(!0, Ot("trigger-hover", ue));
        }
        (p && !Pr(Y.current)) ||
          r ||
          Nc(G.current) === 0 ||
          (ge.current && w.movementX ** 2 + w.movementY ** 2 < 2) ||
          (Z.clear(),
          Y.current === "touch"
            ? se()
            : ((ge.current = !0), Z.start(Nc(G.current), se)));
      },
    };
  }, [p, s, r, P, G, Z]);
  return C.useMemo(() => (h ? { reference: R } : {}), [h, R]);
}
const sv = C.createContext({
  hasProvider: !1,
  timeoutMs: 0,
  delayRef: { current: 0 },
  initialDelayRef: { current: 0 },
  timeout: new yi(),
  currentIdRef: { current: null },
  currentContextRef: { current: null },
});
function zS(a) {
  const { children: i, delay: r, timeoutMs: s = 0 } = a,
    c = C.useRef(r),
    f = C.useRef(r),
    m = C.useRef(null),
    h = C.useRef(null),
    y = pa();
  return zn.jsx(sv.Provider, {
    value: C.useMemo(
      () => ({
        hasProvider: !0,
        delayRef: c,
        initialDelayRef: f,
        currentIdRef: m,
        timeoutMs: s,
        currentContextRef: h,
        timeout: y,
      }),
      [s, y]
    ),
    children: i,
  });
}
function US(a, i = {}) {
  const { open: r, onOpenChange: s, floatingId: c } = a,
    { enabled: f = !0 } = i,
    m = C.useContext(sv),
    {
      currentIdRef: h,
      delayRef: y,
      timeoutMs: v,
      initialDelayRef: p,
      currentContextRef: b,
      hasProvider: x,
      timeout: _,
    } = m,
    [M, z] = C.useState(!1);
  return (
    nt(() => {
      function X() {
        (z(!1),
          b.current?.setIsInstantPhase(!1),
          (h.current = null),
          (b.current = null),
          (y.current = p.current));
      }
      if (f && h.current && !r && h.current === c) {
        if ((z(!1), v))
          return (
            _.start(v, X),
            () => {
              _.clear();
            }
          );
        X();
      }
    }, [f, r, c, h, y, v, p, b, _]),
    nt(() => {
      if (!f || !r) return;
      const X = b.current,
        P = h.current;
      ((b.current = { onOpenChange: s, setIsInstantPhase: z }),
        (h.current = c),
        (y.current = { open: 0, close: Kr(p.current, "close") }),
        P !== null && P !== c
          ? (_.clear(),
            z(!0),
            X?.setIsInstantPhase(!0),
            X?.onOpenChange(!1, Ot("none")))
          : (z(!1), X?.setIsInstantPhase(!1)));
    }, [f, r, c, s, h, y, v, p, b, _]),
    nt(
      () => () => {
        b.current = null;
      },
      [b]
    ),
    C.useMemo(
      () => ({ hasProvider: x, delayRef: y, isInstantPhase: M }),
      [x, y, M]
    )
  );
}
function NS(a) {
  return a?.ownerDocument || document;
}
const LS = C.createContext(null),
  VS = () => C.useContext(LS),
  Kg = co("portal");
function BS(a = {}) {
  const { id: i, root: r } = a,
    s = mf(),
    c = VS(),
    [f, m] = C.useState(null),
    h = C.useRef(null);
  return (
    nt(
      () => () => {
        (f?.remove(),
          queueMicrotask(() => {
            h.current = null;
          }));
      },
      [f]
    ),
    nt(() => {
      if (!s || h.current) return;
      const y = i ? document.getElementById(i) : null;
      if (!y) return;
      const v = document.createElement("div");
      ((v.id = s),
        v.setAttribute(Kg, ""),
        y.appendChild(v),
        (h.current = v),
        m(v));
    }, [i, s]),
    nt(() => {
      if (r === null || !s || h.current) return;
      let y = r || c?.portalNode;
      (y && !hf(y) && (y = y.current), (y = y || document.body));
      let v = null;
      i && ((v = document.createElement("div")), (v.id = i), y.appendChild(v));
      const p = document.createElement("div");
      ((p.id = s),
        p.setAttribute(Kg, ""),
        (y = v || y),
        y.appendChild(p),
        (h.current = p),
        m(p));
    }, [i, r, s, c]),
    f
  );
}
function HS(a, i) {
  let r = null,
    s = null,
    c = !1;
  return {
    contextElement: a || void 0,
    getBoundingClientRect() {
      const f = a?.getBoundingClientRect() || {
          width: 0,
          height: 0,
          x: 0,
          y: 0,
        },
        m = i.axis === "x" || i.axis === "both",
        h = i.axis === "y" || i.axis === "both",
        y =
          ["mouseenter", "mousemove"].includes(
            i.dataRef.current.openEvent?.type || ""
          ) && i.pointerType !== "touch";
      let v = f.width,
        p = f.height,
        b = f.x,
        x = f.y;
      return (
        r == null && i.x && m && (r = f.x - i.x),
        s == null && i.y && h && (s = f.y - i.y),
        (b -= r || 0),
        (x -= s || 0),
        (v = 0),
        (p = 0),
        !c || y
          ? ((v = i.axis === "y" ? f.width : 0),
            (p = i.axis === "x" ? f.height : 0),
            (b = m && i.x != null ? i.x : b),
            (x = h && i.y != null ? i.y : x))
          : c &&
            !y &&
            ((p = i.axis === "x" ? f.height : p),
            (v = i.axis === "y" ? f.width : v)),
        (c = !0),
        {
          width: v,
          height: p,
          x: b,
          y: x,
          top: x,
          right: b + v,
          bottom: x + p,
          left: b,
        }
      );
    },
  };
}
function Jg(a) {
  return a != null && a.clientX != null;
}
function YS(a, i = {}) {
  const {
      open: r,
      dataRef: s,
      elements: { floating: c, domReference: f },
      refs: m,
    } = a,
    { enabled: h = !0, axis: y = "both", x: v = null, y: p = null } = i,
    b = C.useRef(!1),
    x = C.useRef(null),
    [_, M] = C.useState(),
    [z, X] = C.useState([]),
    P = Ze((Z, W) => {
      b.current ||
        (s.current.openEvent && !Jg(s.current.openEvent)) ||
        m.setPositionReference(
          HS(f, { x: Z, y: W, axis: y, dataRef: s, pointerType: _ })
        );
    }),
    G = Ze((Z) => {
      v != null ||
        p != null ||
        (r ? x.current || X([]) : P(Z.clientX, Z.clientY));
    }),
    Y = Pr(_) ? c : r,
    k = C.useCallback(() => {
      if (!Y || !h || v != null || p != null) return;
      const Z = Nt(c);
      function W($) {
        const me = Bn($);
        Hn(c, me)
          ? (Z.removeEventListener("mousemove", W), (x.current = null))
          : P($.clientX, $.clientY);
      }
      if (!s.current.openEvent || Jg(s.current.openEvent)) {
        Z.addEventListener("mousemove", W);
        const $ = () => {
          (Z.removeEventListener("mousemove", W), (x.current = null));
        };
        return ((x.current = $), $);
      }
      m.setPositionReference(f);
    }, [Y, h, v, p, c, s, m, f, P]);
  (C.useEffect(() => k(), [k, z]),
    C.useEffect(() => {
      h && !c && (b.current = !1);
    }, [h, c]),
    C.useEffect(() => {
      !h && r && (b.current = !0);
    }, [h, r]),
    nt(() => {
      h && (v != null || p != null) && ((b.current = !1), P(v, p));
    }, [h, v, p, P]));
  const ne = C.useMemo(() => {
    function Z(W) {
      M(W.pointerType);
    }
    return {
      onPointerDown: Z,
      onPointerEnter: Z,
      onMouseMove: G,
      onMouseEnter: G,
    };
  }, [G]);
  return C.useMemo(() => (h ? { reference: ne } : {}), [h, ne]);
}
function Fg(a, i, r) {
  let { reference: s, floating: c } = a;
  const f = Sn(i),
    m = pf(i),
    h = vf(m),
    y = rn(i),
    v = f === "y",
    p = s.x + s.width / 2 - c.width / 2,
    b = s.y + s.height / 2 - c.height / 2,
    x = s[h] / 2 - c[h] / 2;
  let _;
  switch (y) {
    case "top":
      _ = { x: p, y: s.y - c.height };
      break;
    case "bottom":
      _ = { x: p, y: s.y + s.height };
      break;
    case "right":
      _ = { x: s.x + s.width, y: b };
      break;
    case "left":
      _ = { x: s.x - c.width, y: b };
      break;
    default:
      _ = { x: s.x, y: s.y };
  }
  switch (Kl(i)) {
    case "start":
      _[m] -= x * (r && v ? -1 : 1);
      break;
    case "end":
      _[m] += x * (r && v ? -1 : 1);
      break;
  }
  return _;
}
const qS = async (a, i, r) => {
  const {
      placement: s = "bottom",
      strategy: c = "absolute",
      middleware: f = [],
      platform: m,
    } = r,
    h = f.filter(Boolean),
    y = await (m.isRTL == null ? void 0 : m.isRTL(i));
  let v = await m.getElementRects({ reference: a, floating: i, strategy: c }),
    { x: p, y: b } = Fg(v, s, y),
    x = s,
    _ = {},
    M = 0;
  for (let z = 0; z < h.length; z++) {
    const { name: X, fn: P } = h[z],
      {
        x: G,
        y: Y,
        data: k,
        reset: ne,
      } = await P({
        x: p,
        y: b,
        initialPlacement: s,
        placement: x,
        strategy: c,
        middlewareData: _,
        rects: v,
        platform: m,
        elements: { reference: a, floating: i },
      });
    ((p = G ?? p),
      (b = Y ?? b),
      (_ = { ..._, [X]: { ..._[X], ...k } }),
      ne &&
        M <= 50 &&
        (M++,
        typeof ne == "object" &&
          (ne.placement && (x = ne.placement),
          ne.rects &&
            (v =
              ne.rects === !0
                ? await m.getElementRects({
                    reference: a,
                    floating: i,
                    strategy: c,
                  })
                : ne.rects),
          ({ x: p, y: b } = Fg(v, x, y))),
        (z = -1)));
  }
  return { x: p, y: b, placement: x, strategy: c, middlewareData: _ };
};
async function bu(a, i) {
  var r;
  i === void 0 && (i = {});
  const { x: s, y: c, platform: f, rects: m, elements: h, strategy: y } = a,
    {
      boundary: v = "clippingAncestors",
      rootBoundary: p = "viewport",
      elementContext: b = "floating",
      altBoundary: x = !1,
      padding: _ = 0,
    } = vl(i, a),
    M = uv(_),
    X = h[x ? (b === "floating" ? "reference" : "floating") : b],
    P = to(
      await f.getClippingRect({
        element:
          (r = await (f.isElement == null ? void 0 : f.isElement(X))) == null ||
          r
            ? X
            : X.contextElement ||
              (await (f.getDocumentElement == null
                ? void 0
                : f.getDocumentElement(h.floating))),
        boundary: v,
        rootBoundary: p,
        strategy: y,
      })
    ),
    G =
      b === "floating"
        ? { x: s, y: c, width: m.floating.width, height: m.floating.height }
        : m.reference,
    Y = await (f.getOffsetParent == null
      ? void 0
      : f.getOffsetParent(h.floating)),
    k = (await (f.isElement == null ? void 0 : f.isElement(Y)))
      ? (await (f.getScale == null ? void 0 : f.getScale(Y))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    ne = to(
      f.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await f.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: h,
            rect: G,
            offsetParent: Y,
            strategy: y,
          })
        : G
    );
  return {
    top: (P.top - ne.top + M.top) / k.y,
    bottom: (ne.bottom - P.bottom + M.bottom) / k.y,
    left: (P.left - ne.left + M.left) / k.x,
    right: (ne.right - P.right + M.right) / k.x,
  };
}
const jS = function (a) {
  return (
    a === void 0 && (a = {}),
    {
      name: "flip",
      options: a,
      async fn(i) {
        var r, s;
        const {
            placement: c,
            middlewareData: f,
            rects: m,
            initialPlacement: h,
            platform: y,
            elements: v,
          } = i,
          {
            mainAxis: p = !0,
            crossAxis: b = !0,
            fallbackPlacements: x,
            fallbackStrategy: _ = "bestFit",
            fallbackAxisSideDirection: M = "none",
            flipAlignment: z = !0,
            ...X
          } = vl(a, i);
        if ((r = f.arrow) != null && r.alignmentOffset) return {};
        const P = rn(c),
          G = Sn(h),
          Y = rn(h) === h,
          k = await (y.isRTL == null ? void 0 : y.isRTL(v.floating)),
          ne = x || (Y || !z ? [eo(h)] : gS(h)),
          Z = M !== "none";
        !x && Z && ne.push(...bS(h, z, M, k));
        const W = [h, ...ne],
          $ = await bu(i, X),
          me = [];
        let ge = ((s = f.flip) == null ? void 0 : s.overflows) || [];
        if ((p && me.push($[P]), b)) {
          const te = hS(c, m, k);
          me.push($[te[0]], $[te[1]]);
        }
        if (
          ((ge = [...ge, { placement: c, overflows: me }]),
          !me.every((te) => te <= 0))
        ) {
          var ce, Q;
          const te = (((ce = f.flip) == null ? void 0 : ce.index) || 0) + 1,
            oe = W[te];
          if (
            oe &&
            (!(b === "alignment" ? G !== Sn(oe) : !1) ||
              ge.every((w) =>
                Sn(w.placement) === G ? w.overflows[0] > 0 : !0
              ))
          )
            return {
              data: { index: te, overflows: ge },
              reset: { placement: oe },
            };
          let R =
            (Q = ge
              .filter((O) => O.overflows[0] <= 0)
              .sort((O, w) => O.overflows[1] - w.overflows[1])[0]) == null
              ? void 0
              : Q.placement;
          if (!R)
            switch (_) {
              case "bestFit": {
                var B;
                const O =
                  (B = ge
                    .filter((w) => {
                      if (Z) {
                        const ue = Sn(w.placement);
                        return ue === G || ue === "y";
                      }
                      return !0;
                    })
                    .map((w) => [
                      w.placement,
                      w.overflows
                        .filter((ue) => ue > 0)
                        .reduce((ue, se) => ue + se, 0),
                    ])
                    .sort((w, ue) => w[1] - ue[1])[0]) == null
                    ? void 0
                    : B[0];
                O && (R = O);
                break;
              }
              case "initialPlacement":
                R = h;
                break;
            }
          if (c !== R) return { reset: { placement: R } };
        }
        return {};
      },
    }
  );
};
function $g(a, i) {
  return {
    top: a.top - i.height,
    right: a.right - i.width,
    bottom: a.bottom - i.height,
    left: a.left - i.width,
  };
}
function Wg(a) {
  return cS.some((i) => a[i] >= 0);
}
const GS = function (a) {
    return (
      a === void 0 && (a = {}),
      {
        name: "hide",
        options: a,
        async fn(i) {
          const { rects: r } = i,
            { strategy: s = "referenceHidden", ...c } = vl(a, i);
          switch (s) {
            case "referenceHidden": {
              const f = await bu(i, { ...c, elementContext: "reference" }),
                m = $g(f, r.reference);
              return {
                data: { referenceHiddenOffsets: m, referenceHidden: Wg(m) },
              };
            }
            case "escaped": {
              const f = await bu(i, { ...c, altBoundary: !0 }),
                m = $g(f, r.floating);
              return { data: { escapedOffsets: m, escaped: Wg(m) } };
            }
            default:
              return {};
          }
        },
      }
    );
  },
  cv = new Set(["left", "top"]);
async function kS(a, i) {
  const { placement: r, platform: s, elements: c } = a,
    f = await (s.isRTL == null ? void 0 : s.isRTL(c.floating)),
    m = rn(r),
    h = Kl(r),
    y = Sn(r) === "y",
    v = cv.has(m) ? -1 : 1,
    p = f && y ? -1 : 1,
    b = vl(i, a);
  let {
    mainAxis: x,
    crossAxis: _,
    alignmentAxis: M,
  } = typeof b == "number"
    ? { mainAxis: b, crossAxis: 0, alignmentAxis: null }
    : {
        mainAxis: b.mainAxis || 0,
        crossAxis: b.crossAxis || 0,
        alignmentAxis: b.alignmentAxis,
      };
  return (
    h && typeof M == "number" && (_ = h === "end" ? M * -1 : M),
    y ? { x: _ * p, y: x * v } : { x: x * v, y: _ * p }
  );
}
const XS = function (a) {
    return (
      a === void 0 && (a = 0),
      {
        name: "offset",
        options: a,
        async fn(i) {
          var r, s;
          const { x: c, y: f, placement: m, middlewareData: h } = i,
            y = await kS(i, a);
          return m === ((r = h.offset) == null ? void 0 : r.placement) &&
            (s = h.arrow) != null &&
            s.alignmentOffset
            ? {}
            : { x: c + y.x, y: f + y.y, data: { ...y, placement: m } };
        },
      }
    );
  },
  QS = function (a) {
    return (
      a === void 0 && (a = {}),
      {
        name: "shift",
        options: a,
        async fn(i) {
          const { x: r, y: s, placement: c } = i,
            {
              mainAxis: f = !0,
              crossAxis: m = !1,
              limiter: h = {
                fn: (X) => {
                  let { x: P, y: G } = X;
                  return { x: P, y: G };
                },
              },
              ...y
            } = vl(a, i),
            v = { x: r, y: s },
            p = await bu(i, y),
            b = Sn(rn(c)),
            x = yf(b);
          let _ = v[x],
            M = v[b];
          if (f) {
            const X = x === "y" ? "top" : "left",
              P = x === "y" ? "bottom" : "right",
              G = _ + p[X],
              Y = _ - p[P];
            _ = ef(G, _, Y);
          }
          if (m) {
            const X = b === "y" ? "top" : "left",
              P = b === "y" ? "bottom" : "right",
              G = M + p[X],
              Y = M - p[P];
            M = ef(G, M, Y);
          }
          const z = h.fn({ ...i, [x]: _, [b]: M });
          return {
            ...z,
            data: { x: z.x - r, y: z.y - s, enabled: { [x]: f, [b]: m } },
          };
        },
      }
    );
  },
  ZS = function (a) {
    return (
      a === void 0 && (a = {}),
      {
        options: a,
        fn(i) {
          const { x: r, y: s, placement: c, rects: f, middlewareData: m } = i,
            { offset: h = 0, mainAxis: y = !0, crossAxis: v = !0 } = vl(a, i),
            p = { x: r, y: s },
            b = Sn(c),
            x = yf(b);
          let _ = p[x],
            M = p[b];
          const z = vl(h, i),
            X =
              typeof z == "number"
                ? { mainAxis: z, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ...z };
          if (y) {
            const Y = x === "y" ? "height" : "width",
              k = f.reference[x] - f.floating[Y] + X.mainAxis,
              ne = f.reference[x] + f.reference[Y] - X.mainAxis;
            _ < k ? (_ = k) : _ > ne && (_ = ne);
          }
          if (v) {
            var P, G;
            const Y = x === "y" ? "width" : "height",
              k = cv.has(rn(c)),
              ne =
                f.reference[b] -
                f.floating[Y] +
                ((k && ((P = m.offset) == null ? void 0 : P[b])) || 0) +
                (k ? 0 : X.crossAxis),
              Z =
                f.reference[b] +
                f.reference[Y] +
                (k ? 0 : ((G = m.offset) == null ? void 0 : G[b]) || 0) -
                (k ? X.crossAxis : 0);
            M < ne ? (M = ne) : M > Z && (M = Z);
          }
          return { [x]: _, [b]: M };
        },
      }
    );
  },
  KS = function (a) {
    return (
      a === void 0 && (a = {}),
      {
        name: "size",
        options: a,
        async fn(i) {
          var r, s;
          const { placement: c, rects: f, platform: m, elements: h } = i,
            { apply: y = () => {}, ...v } = vl(a, i),
            p = await bu(i, v),
            b = rn(c),
            x = Kl(c),
            _ = Sn(c) === "y",
            { width: M, height: z } = f.floating;
          let X, P;
          b === "top" || b === "bottom"
            ? ((X = b),
              (P =
                x ===
                ((await (m.isRTL == null ? void 0 : m.isRTL(h.floating)))
                  ? "start"
                  : "end")
                  ? "left"
                  : "right"))
            : ((P = b), (X = x === "end" ? "top" : "bottom"));
          const G = z - p.top - p.bottom,
            Y = M - p.left - p.right,
            k = ci(z - p[X], G),
            ne = ci(M - p[P], Y),
            Z = !i.middlewareData.shift;
          let W = k,
            $ = ne;
          if (
            ((r = i.middlewareData.shift) != null && r.enabled.x && ($ = Y),
            (s = i.middlewareData.shift) != null && s.enabled.y && (W = G),
            Z && !x)
          ) {
            const ge = an(p.left, 0),
              ce = an(p.right, 0),
              Q = an(p.top, 0),
              B = an(p.bottom, 0);
            _
              ? ($ =
                  M -
                  2 * (ge !== 0 || ce !== 0 ? ge + ce : an(p.left, p.right)))
              : (W =
                  z - 2 * (Q !== 0 || B !== 0 ? Q + B : an(p.top, p.bottom)));
          }
          await y({ ...i, availableWidth: $, availableHeight: W });
          const me = await m.getDimensions(h.floating);
          return M !== me.width || z !== me.height
            ? { reset: { rects: !0 } }
            : {};
        },
      }
    );
  };
function fv(a) {
  const i = En(a);
  let r = parseFloat(i.width) || 0,
    s = parseFloat(i.height) || 0;
  const c = on(a),
    f = c ? a.offsetWidth : r,
    m = c ? a.offsetHeight : s,
    h = Ir(r) !== f || Ir(s) !== m;
  return (h && ((r = f), (s = m)), { width: r, height: s, $: h });
}
function Af(a) {
  return Ie(a) ? a : a.contextElement;
}
function si(a) {
  const i = Af(a);
  if (!on(i)) return Yn(1);
  const r = i.getBoundingClientRect(),
    { width: s, height: c, $: f } = fv(i);
  let m = (f ? Ir(r.width) : r.width) / s,
    h = (f ? Ir(r.height) : r.height) / c;
  return (
    (!m || !Number.isFinite(m)) && (m = 1),
    (!h || !Number.isFinite(h)) && (h = 1),
    { x: m, y: h }
  );
}
const JS = Yn(0);
function dv(a) {
  const i = Nt(a);
  return !oo() || !i.visualViewport
    ? JS
    : { x: i.visualViewport.offsetLeft, y: i.visualViewport.offsetTop };
}
function FS(a, i, r) {
  return (i === void 0 && (i = !1), !r || (i && r !== Nt(a)) ? !1 : i);
}
function ba(a, i, r, s) {
  (i === void 0 && (i = !1), r === void 0 && (r = !1));
  const c = a.getBoundingClientRect(),
    f = Af(a);
  let m = Yn(1);
  i && (s ? Ie(s) && (m = si(s)) : (m = si(a)));
  const h = FS(f, r, s) ? dv(f) : Yn(0);
  let y = (c.left + h.x) / m.x,
    v = (c.top + h.y) / m.y,
    p = c.width / m.x,
    b = c.height / m.y;
  if (f) {
    const x = Nt(f),
      _ = s && Ie(s) ? Nt(s) : s;
    let M = x,
      z = Ic(M);
    for (; z && s && _ !== M; ) {
      const X = si(z),
        P = z.getBoundingClientRect(),
        G = En(z),
        Y = P.left + (z.clientLeft + parseFloat(G.paddingLeft)) * X.x,
        k = P.top + (z.clientTop + parseFloat(G.paddingTop)) * X.y;
      ((y *= X.x),
        (v *= X.y),
        (p *= X.x),
        (b *= X.y),
        (y += Y),
        (v += k),
        (M = Nt(z)),
        (z = Ic(M)));
    }
  }
  return to({ width: p, height: b, x: y, y: v });
}
function fo(a, i) {
  const r = so(a).scrollLeft;
  return i ? i.left + r : ba(jn(a)).left + r;
}
function mv(a, i) {
  const r = a.getBoundingClientRect(),
    s = r.left + i.scrollLeft - fo(a, r),
    c = r.top + i.scrollTop;
  return { x: s, y: c };
}
function $S(a) {
  let { elements: i, rect: r, offsetParent: s, strategy: c } = a;
  const f = c === "fixed",
    m = jn(s),
    h = i ? ro(i.floating) : !1;
  if (s === m || (h && f)) return r;
  let y = { scrollLeft: 0, scrollTop: 0 },
    v = Yn(1);
  const p = Yn(0),
    b = on(s);
  if (
    (b || (!b && !f)) &&
    ((gi(s) !== "body" || Eu(m)) && (y = so(s)), on(s))
  ) {
    const _ = ba(s);
    ((v = si(s)), (p.x = _.x + s.clientLeft), (p.y = _.y + s.clientTop));
  }
  const x = m && !b && !f ? mv(m, y) : Yn(0);
  return {
    width: r.width * v.x,
    height: r.height * v.y,
    x: r.x * v.x - y.scrollLeft * v.x + p.x + x.x,
    y: r.y * v.y - y.scrollTop * v.y + p.y + x.y,
  };
}
function WS(a) {
  return Array.from(a.getClientRects());
}
function PS(a) {
  const i = jn(a),
    r = so(a),
    s = a.ownerDocument.body,
    c = an(i.scrollWidth, i.clientWidth, s.scrollWidth, s.clientWidth),
    f = an(i.scrollHeight, i.clientHeight, s.scrollHeight, s.clientHeight);
  let m = -r.scrollLeft + fo(a);
  const h = -r.scrollTop;
  return (
    En(s).direction === "rtl" && (m += an(i.clientWidth, s.clientWidth) - c),
    { width: c, height: f, x: m, y: h }
  );
}
const Pg = 25;
function IS(a, i) {
  const r = Nt(a),
    s = jn(a),
    c = r.visualViewport;
  let f = s.clientWidth,
    m = s.clientHeight,
    h = 0,
    y = 0;
  if (c) {
    ((f = c.width), (m = c.height));
    const p = oo();
    (!p || (p && i === "fixed")) && ((h = c.offsetLeft), (y = c.offsetTop));
  }
  const v = fo(s);
  if (v <= 0) {
    const p = s.ownerDocument,
      b = p.body,
      x = getComputedStyle(b),
      _ =
        (p.compatMode === "CSS1Compat" &&
          parseFloat(x.marginLeft) + parseFloat(x.marginRight)) ||
        0,
      M = Math.abs(s.clientWidth - b.clientWidth - _);
    M <= Pg && (f -= M);
  } else v <= Pg && (f += v);
  return { width: f, height: m, x: h, y };
}
const eE = new Set(["absolute", "fixed"]);
function tE(a, i) {
  const r = ba(a, !0, i === "fixed"),
    s = r.top + a.clientTop,
    c = r.left + a.clientLeft,
    f = on(a) ? si(a) : Yn(1),
    m = a.clientWidth * f.x,
    h = a.clientHeight * f.y,
    y = c * f.x,
    v = s * f.y;
  return { width: m, height: h, x: y, y: v };
}
function Ig(a, i, r) {
  let s;
  if (i === "viewport") s = IS(a, r);
  else if (i === "document") s = PS(jn(a));
  else if (Ie(i)) s = tE(i, r);
  else {
    const c = dv(a);
    s = { x: i.x - c.x, y: i.y - c.y, width: i.width, height: i.height };
  }
  return to(s);
}
function hv(a, i) {
  const r = yl(a);
  return r === i || !Ie(r) || gl(r)
    ? !1
    : En(r).position === "fixed" || hv(r, i);
}
function nE(a, i) {
  const r = i.get(a);
  if (r) return r;
  let s = Zl(a, [], !1).filter((h) => Ie(h) && gi(h) !== "body"),
    c = null;
  const f = En(a).position === "fixed";
  let m = f ? yl(a) : a;
  for (; Ie(m) && !gl(m); ) {
    const h = En(m),
      y = gf(m);
    (!y && h.position === "fixed" && (c = null),
      (
        f
          ? !y && !c
          : (!y && h.position === "static" && !!c && eE.has(c.position)) ||
            (Eu(m) && !y && hv(a, m))
      )
        ? (s = s.filter((p) => p !== m))
        : (c = h),
      (m = yl(m)));
  }
  return (i.set(a, s), s);
}
function lE(a) {
  let { element: i, boundary: r, rootBoundary: s, strategy: c } = a;
  const m = [
      ...(r === "clippingAncestors"
        ? ro(i)
          ? []
          : nE(i, this._c)
        : [].concat(r)),
      s,
    ],
    h = m[0],
    y = m.reduce(
      (v, p) => {
        const b = Ig(i, p, c);
        return (
          (v.top = an(b.top, v.top)),
          (v.right = ci(b.right, v.right)),
          (v.bottom = ci(b.bottom, v.bottom)),
          (v.left = an(b.left, v.left)),
          v
        );
      },
      Ig(i, h, c)
    );
  return {
    width: y.right - y.left,
    height: y.bottom - y.top,
    x: y.left,
    y: y.top,
  };
}
function aE(a) {
  const { width: i, height: r } = fv(a);
  return { width: i, height: r };
}
function iE(a, i, r) {
  const s = on(i),
    c = jn(i),
    f = r === "fixed",
    m = ba(a, !0, f, i);
  let h = { scrollLeft: 0, scrollTop: 0 };
  const y = Yn(0);
  function v() {
    y.x = fo(c);
  }
  if (s || (!s && !f))
    if (((gi(i) !== "body" || Eu(c)) && (h = so(i)), s)) {
      const _ = ba(i, !0, f, i);
      ((y.x = _.x + i.clientLeft), (y.y = _.y + i.clientTop));
    } else c && v();
  f && !s && c && v();
  const p = c && !s && !f ? mv(c, h) : Yn(0),
    b = m.left + h.scrollLeft - y.x - p.x,
    x = m.top + h.scrollTop - y.y - p.y;
  return { x: b, y: x, width: m.width, height: m.height };
}
function Lc(a) {
  return En(a).position === "static";
}
function ey(a, i) {
  if (!on(a) || En(a).position === "fixed") return null;
  if (i) return i(a);
  let r = a.offsetParent;
  return (jn(a) === r && (r = r.ownerDocument.body), r);
}
function gv(a, i) {
  const r = Nt(a);
  if (ro(a)) return r;
  if (!on(a)) {
    let c = yl(a);
    for (; c && !gl(c); ) {
      if (Ie(c) && !Lc(c)) return c;
      c = yl(c);
    }
    return r;
  }
  let s = ey(a, i);
  for (; s && k1(s) && Lc(s); ) s = ey(s, i);
  return s && gl(s) && Lc(s) && !gf(s) ? r : s || J1(a) || r;
}
const uE = async function (a) {
  const i = this.getOffsetParent || gv,
    r = this.getDimensions,
    s = await r(a.floating);
  return {
    reference: iE(a.reference, await i(a.floating), a.strategy),
    floating: { x: 0, y: 0, width: s.width, height: s.height },
  };
};
function rE(a) {
  return En(a).direction === "rtl";
}
const oE = {
  convertOffsetParentRelativeRectToViewportRelativeRect: $S,
  getDocumentElement: jn,
  getClippingRect: lE,
  getOffsetParent: gv,
  getElementRects: uE,
  getClientRects: WS,
  getDimensions: aE,
  getScale: si,
  isElement: Ie,
  isRTL: rE,
};
function yv(a, i) {
  return (
    a.x === i.x && a.y === i.y && a.width === i.width && a.height === i.height
  );
}
function sE(a, i) {
  let r = null,
    s;
  const c = jn(a);
  function f() {
    var h;
    (clearTimeout(s), (h = r) == null || h.disconnect(), (r = null));
  }
  function m(h, y) {
    (h === void 0 && (h = !1), y === void 0 && (y = 1), f());
    const v = a.getBoundingClientRect(),
      { left: p, top: b, width: x, height: _ } = v;
    if ((h || i(), !x || !_)) return;
    const M = Qr(b),
      z = Qr(c.clientWidth - (p + x)),
      X = Qr(c.clientHeight - (b + _)),
      P = Qr(p),
      Y = {
        rootMargin: -M + "px " + -z + "px " + -X + "px " + -P + "px",
        threshold: an(0, ci(1, y)) || 1,
      };
    let k = !0;
    function ne(Z) {
      const W = Z[0].intersectionRatio;
      if (W !== y) {
        if (!k) return m();
        W
          ? m(!1, W)
          : (s = setTimeout(() => {
              m(!1, 1e-7);
            }, 1e3));
      }
      (W === 1 && !yv(v, a.getBoundingClientRect()) && m(), (k = !1));
    }
    try {
      r = new IntersectionObserver(ne, { ...Y, root: c.ownerDocument });
    } catch {
      r = new IntersectionObserver(ne, Y);
    }
    r.observe(a);
  }
  return (m(!0), f);
}
function ty(a, i, r, s) {
  s === void 0 && (s = {});
  const {
      ancestorScroll: c = !0,
      ancestorResize: f = !0,
      elementResize: m = typeof ResizeObserver == "function",
      layoutShift: h = typeof IntersectionObserver == "function",
      animationFrame: y = !1,
    } = s,
    v = Af(a),
    p = c || f ? [...(v ? Zl(v) : []), ...Zl(i)] : [];
  p.forEach((P) => {
    (c && P.addEventListener("scroll", r, { passive: !0 }),
      f && P.addEventListener("resize", r));
  });
  const b = v && h ? sE(v, r) : null;
  let x = -1,
    _ = null;
  m &&
    ((_ = new ResizeObserver((P) => {
      let [G] = P;
      (G &&
        G.target === v &&
        _ &&
        (_.unobserve(i),
        cancelAnimationFrame(x),
        (x = requestAnimationFrame(() => {
          var Y;
          (Y = _) == null || Y.observe(i);
        }))),
        r());
    })),
    v && !y && _.observe(v),
    _.observe(i));
  let M,
    z = y ? ba(a) : null;
  y && X();
  function X() {
    const P = ba(a);
    (z && !yv(z, P) && r(), (z = P), (M = requestAnimationFrame(X)));
  }
  return (
    r(),
    () => {
      var P;
      (p.forEach((G) => {
        (c && G.removeEventListener("scroll", r),
          f && G.removeEventListener("resize", r));
      }),
        b?.(),
        (P = _) == null || P.disconnect(),
        (_ = null),
        y && cancelAnimationFrame(M));
    }
  );
}
const cE = XS,
  fE = QS,
  dE = jS,
  mE = KS,
  hE = GS,
  gE = ZS,
  yE = (a, i, r) => {
    const s = new Map(),
      c = { platform: oE, ...r },
      f = { ...c.platform, _c: s };
    return qS(a, i, { ...c, platform: f });
  };
var vE = typeof document < "u",
  pE = function () {},
  Jr = vE ? C.useLayoutEffect : pE;
function no(a, i) {
  if (a === i) return !0;
  if (typeof a != typeof i) return !1;
  if (typeof a == "function" && a.toString() === i.toString()) return !0;
  let r, s, c;
  if (a && i && typeof a == "object") {
    if (Array.isArray(a)) {
      if (((r = a.length), r !== i.length)) return !1;
      for (s = r; s-- !== 0; ) if (!no(a[s], i[s])) return !1;
      return !0;
    }
    if (((c = Object.keys(a)), (r = c.length), r !== Object.keys(i).length))
      return !1;
    for (s = r; s-- !== 0; ) if (!{}.hasOwnProperty.call(i, c[s])) return !1;
    for (s = r; s-- !== 0; ) {
      const f = c[s];
      if (!(f === "_owner" && a.$$typeof) && !no(a[f], i[f])) return !1;
    }
    return !0;
  }
  return a !== a && i !== i;
}
function vv(a) {
  return typeof window > "u"
    ? 1
    : (a.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function ny(a, i) {
  const r = vv(a);
  return Math.round(i * r) / r;
}
function Vc(a) {
  const i = C.useRef(a);
  return (
    Jr(() => {
      i.current = a;
    }),
    i
  );
}
function bE(a) {
  a === void 0 && (a = {});
  const {
      placement: i = "bottom",
      strategy: r = "absolute",
      middleware: s = [],
      platform: c,
      elements: { reference: f, floating: m } = {},
      transform: h = !0,
      whileElementsMounted: y,
      open: v,
    } = a,
    [p, b] = C.useState({
      x: 0,
      y: 0,
      strategy: r,
      placement: i,
      middlewareData: {},
      isPositioned: !1,
    }),
    [x, _] = C.useState(s);
  no(x, s) || _(s);
  const [M, z] = C.useState(null),
    [X, P] = C.useState(null),
    G = C.useCallback((w) => {
      w !== Z.current && ((Z.current = w), z(w));
    }, []),
    Y = C.useCallback((w) => {
      w !== W.current && ((W.current = w), P(w));
    }, []),
    k = f || M,
    ne = m || X,
    Z = C.useRef(null),
    W = C.useRef(null),
    $ = C.useRef(p),
    me = y != null,
    ge = Vc(y),
    ce = Vc(c),
    Q = Vc(v),
    B = C.useCallback(() => {
      if (!Z.current || !W.current) return;
      const w = { placement: i, strategy: r, middleware: x };
      (ce.current && (w.platform = ce.current),
        yE(Z.current, W.current, w).then((ue) => {
          const se = { ...ue, isPositioned: Q.current !== !1 };
          te.current &&
            !no($.current, se) &&
            (($.current = se),
            hi.flushSync(() => {
              b(se);
            }));
        }));
    }, [x, i, r, ce, Q]);
  Jr(() => {
    v === !1 &&
      $.current.isPositioned &&
      (($.current.isPositioned = !1), b((w) => ({ ...w, isPositioned: !1 })));
  }, [v]);
  const te = C.useRef(!1);
  (Jr(
    () => (
      (te.current = !0),
      () => {
        te.current = !1;
      }
    ),
    []
  ),
    Jr(() => {
      if ((k && (Z.current = k), ne && (W.current = ne), k && ne)) {
        if (ge.current) return ge.current(k, ne, B);
        B();
      }
    }, [k, ne, B, ge, me]));
  const oe = C.useMemo(
      () => ({ reference: Z, floating: W, setReference: G, setFloating: Y }),
      [G, Y]
    ),
    R = C.useMemo(() => ({ reference: k, floating: ne }), [k, ne]),
    O = C.useMemo(() => {
      const w = { position: r, left: 0, top: 0 };
      if (!R.floating) return w;
      const ue = ny(R.floating, p.x),
        se = ny(R.floating, p.y);
      return h
        ? {
            ...w,
            transform: "translate(" + ue + "px, " + se + "px)",
            ...(vv(R.floating) >= 1.5 && { willChange: "transform" }),
          }
        : { position: r, left: ue, top: se };
    }, [r, h, R.floating, p.x, p.y]);
  return C.useMemo(
    () => ({ ...p, update: B, refs: oe, elements: R, floatingStyles: O }),
    [p, B, oe, R, O]
  );
}
const SE = (a, i) => ({ ...cE(a), options: [a, i] }),
  EE = (a, i) => ({ ...fE(a), options: [a, i] }),
  AE = (a, i) => ({ ...gE(a), options: [a, i] }),
  xE = (a, i) => ({ ...dE(a), options: [a, i] }),
  TE = (a, i) => ({ ...mE(a), options: [a, i] }),
  _E = (a, i) => ({ ...hE(a), options: [a, i] }),
  RE = { intentional: "onClick", sloppy: "onPointerDown" };
function ly(a) {
  return {
    escapeKey: typeof a == "boolean" ? a : (a?.escapeKey ?? !1),
    outsidePress: typeof a == "boolean" ? a : (a?.outsidePress ?? !0),
  };
}
function CE(a, i = {}) {
  const { open: r, onOpenChange: s, elements: c, dataRef: f } = a,
    {
      enabled: m = !0,
      escapeKey: h = !0,
      outsidePress: y = !0,
      outsidePressEvent: v = "sloppy",
      referencePress: p = !1,
      referencePressEvent: b = "sloppy",
      ancestorScroll: x = !1,
      bubbles: _,
      capture: M,
    } = i,
    z = Ef(),
    X = Ze(typeof y == "function" ? y : () => !1),
    P = typeof y == "function" ? X : y,
    G = C.useRef(!1),
    { escapeKey: Y, outsidePress: k } = ly(_),
    { escapeKey: ne, outsidePress: Z } = ly(M),
    W = C.useRef(null),
    $ = pa(),
    me = pa(),
    ge = C.useRef(!1),
    ce = C.useRef(""),
    Q = Ze((q) => {
      ce.current = q.pointerType;
    }),
    B = Ze(() => {
      const q = ce.current,
        le = q === "pen" || !q ? "mouse" : q,
        Ae = typeof v == "function" ? v() : v;
      return typeof Ae == "string" ? Ae : Ae[le];
    }),
    te = Ze((q) => {
      if (!r || !m || !h || q.key !== "Escape" || ge.current) return;
      const le = f.current.floatingContext?.nodeId,
        Ae = z ? yu(z.nodesRef.current, le) : [];
      if (!Y && Ae.length > 0) {
        let qe = !0;
        if (
          (Ae.forEach((Ye) => {
            Ye.context?.open &&
              !Ye.context.dataRef.current.__escapeKeyBubbles &&
              (qe = !1);
          }),
          !qe)
        )
          return;
      }
      const fe = sS(q) ? q.nativeEvent : q,
        Te = Ot("escape-key", fe);
      (s(!1, Te), !Y && !Te.isPropagationAllowed && q.stopPropagation());
    }),
    oe = Ze((q) => {
      const le = B();
      return (
        (le === "intentional" && q.type !== "click") ||
        (le === "sloppy" && q.type === "click")
      );
    }),
    R = Ze((q) => {
      const le = () => {
        (te(q), Bn(q)?.removeEventListener("keydown", le));
      };
      Bn(q)?.addEventListener("keydown", le);
    }),
    O = Ze((q, le = !1) => {
      if (oe(q)) return;
      const Ae = f.current.insideReactTree;
      if (
        ((f.current.insideReactTree = !1),
        (B() === "intentional" && le) ||
          Ae ||
          (typeof P == "function" && !P(q)))
      )
        return;
      const fe = Bn(q),
        Te = `[${co("inert")}]`,
        qe = ga(c.floating).querySelectorAll(Te);
      let Ye = Ie(fe) ? fe : null;
      for (; Ye && !gl(Ye); ) {
        const We = yl(Ye);
        if (gl(We) || !Ie(We)) break;
        Ye = We;
      }
      if (
        qe.length &&
        Ie(fe) &&
        !uS(fe) &&
        !Hn(fe, c.floating) &&
        Array.from(qe).every((We) => !Hn(Ye, We))
      )
        return;
      if (on(fe)) {
        const We = gl(fe),
          wt = En(fe),
          Gn = /auto|scroll/,
          An = We || Gn.test(wt.overflowX),
          A = We || Gn.test(wt.overflowY),
          U = An && fe.clientWidth > 0 && fe.scrollWidth > fe.clientWidth,
          K = A && fe.clientHeight > 0 && fe.scrollHeight > fe.clientHeight,
          de = wt.direction === "rtl",
          ie =
            K &&
            (de
              ? q.offsetX <= fe.offsetWidth - fe.clientWidth
              : q.offsetX > fe.clientWidth),
          re = U && q.offsetY > fe.clientHeight;
        if (ie || re) return;
      }
      const Qt = f.current.floatingContext?.nodeId,
        Dt =
          z &&
          yu(z.nodesRef.current, Qt).some((We) =>
            cl(q, We.context?.elements.floating)
          );
      if (cl(q, c.floating) || cl(q, c.domReference) || Dt) return;
      const Zt = z ? yu(z.nodesRef.current, Qt) : [];
      if (Zt.length > 0) {
        let We = !0;
        if (
          (Zt.forEach((wt) => {
            wt.context?.open &&
              !wt.context.dataRef.current.__outsidePressBubbles &&
              (We = !1);
          }),
          !We)
        )
          return;
      }
      s(!1, Ot("outside-press", q));
    }),
    w = Ze((q) => {
      if (
        !(
          B() !== "sloppy" ||
          !r ||
          !m ||
          cl(q, c.floating) ||
          cl(q, c.domReference)
        )
      ) {
        if (q.pointerType === "touch") {
          ((W.current = {
            startTime: Date.now(),
            startX: q.clientX,
            startY: q.clientY,
            dismissOnPointerUp: !1,
            dismissOnMouseDown: !0,
          }),
            $.start(1e3, () => {
              W.current &&
                ((W.current.dismissOnPointerUp = !1),
                (W.current.dismissOnMouseDown = !1));
            }));
          return;
        }
        O(q);
      }
    }),
    ue = Ze((q) => {
      const le = G.current;
      if (
        ((G.current = !1),
        oe(q) ||
          ($.clear(),
          q.type === "mousedown" && W.current && !W.current.dismissOnMouseDown))
      )
        return;
      const Ae = () => {
        (q.type === "pointerdown" ? w(q) : O(q, le),
          Bn(q)?.removeEventListener(q.type, Ae));
      };
      Bn(q)?.addEventListener(q.type, Ae);
    }),
    se = Ze((q) => {
      if (
        B() !== "sloppy" ||
        q.pointerType !== "touch" ||
        !W.current ||
        cl(q, c.floating) ||
        cl(q, c.domReference)
      )
        return;
      const le = Math.abs(q.clientX - W.current.startX),
        Ae = Math.abs(q.clientY - W.current.startY),
        fe = Math.sqrt(le * le + Ae * Ae);
      (fe > 5 && (W.current.dismissOnPointerUp = !0),
        fe > 10 && (O(q), $.clear(), (W.current = null)));
    }),
    S = Ze((q) => {
      B() !== "sloppy" ||
        q.pointerType !== "touch" ||
        !W.current ||
        cl(q, c.floating) ||
        cl(q, c.domReference) ||
        (W.current.dismissOnPointerUp && O(q), $.clear(), (W.current = null));
    });
  (C.useEffect(() => {
    if (!r || !m) return;
    ((f.current.__escapeKeyBubbles = Y), (f.current.__outsidePressBubbles = k));
    const q = new yi();
    function le(Ye) {
      s(!1, Ot("none", Ye));
    }
    function Ae() {
      (q.clear(), (ge.current = !0));
    }
    function fe() {
      q.start(oo() ? 5 : 0, () => {
        ge.current = !1;
      });
    }
    const Te = ga(c.floating);
    (Te.addEventListener("pointerdown", Q, !0),
      h &&
        (Te.addEventListener("keydown", ne ? R : te, ne),
        Te.addEventListener("compositionstart", Ae),
        Te.addEventListener("compositionend", fe)),
      P &&
        (Te.addEventListener("click", Z ? ue : O, Z),
        Te.addEventListener("pointerdown", Z ? ue : O, Z),
        Te.addEventListener("pointermove", se, Z),
        Te.addEventListener("pointerup", S, Z),
        Te.addEventListener("mousedown", ue, Z)));
    let qe = [];
    return (
      x &&
        (Ie(c.domReference) && (qe = Zl(c.domReference)),
        Ie(c.floating) && (qe = qe.concat(Zl(c.floating))),
        !Ie(c.reference) &&
          c.reference &&
          c.reference.contextElement &&
          (qe = qe.concat(Zl(c.reference.contextElement)))),
      (qe = qe.filter((Ye) => Ye !== Te.defaultView?.visualViewport)),
      qe.forEach((Ye) => {
        Ye.addEventListener("scroll", le, { passive: !0 });
      }),
      () => {
        (Te.removeEventListener("pointerdown", Q, !0),
          h &&
            (Te.removeEventListener("keydown", ne ? R : te, ne),
            Te.removeEventListener("compositionstart", Ae),
            Te.removeEventListener("compositionend", fe)),
          P &&
            (Te.removeEventListener("click", Z ? ue : O, Z),
            Te.removeEventListener("pointerdown", Z ? ue : O, Z),
            Te.removeEventListener("pointermove", se, Z),
            Te.removeEventListener("pointerup", S, Z),
            Te.removeEventListener("mousedown", ue, Z)),
          qe.forEach((Ye) => {
            Ye.removeEventListener("scroll", le);
          }),
          q.clear());
      }
    );
  }, [f, c, h, P, r, s, x, m, Y, k, te, ne, R, O, Z, ue, w, se, S, Q]),
    C.useEffect(() => {
      f.current.insideReactTree = !1;
    }, [f, P]));
  const V = C.useMemo(
      () => ({
        onKeyDown: te,
        ...(p && {
          [RE[b]]: (q) => {
            s(!1, Ot("trigger-press", q.nativeEvent));
          },
          ...(b !== "intentional" && {
            onClick(q) {
              s(!1, Ot("trigger-press", q.nativeEvent));
            },
          }),
        }),
      }),
      [te, s, p, b]
    ),
    J = Ze((q) => {
      const le = Bn(q.nativeEvent);
      !Hn(c.floating, le) || q.button !== 0 || (G.current = !0);
    }),
    ae = Ze(() => {
      ((f.current.insideReactTree = !0),
        me.start(0, () => {
          f.current.insideReactTree = !1;
        }));
    }),
    ye = C.useMemo(
      () => ({
        onKeyDown: te,
        onMouseDown: J,
        onMouseUp: J,
        onPointerDownCapture: ae,
        onMouseDownCapture: ae,
        onClickCapture: ae,
        onMouseUpCapture: ae,
      }),
      [te, J, ae]
    );
  return C.useMemo(() => (m ? { reference: V, floating: ye } : {}), [m, V, ye]);
}
function pv(a) {
  const { open: i = !1, onOpenChange: r, elements: s } = a,
    c = mf(),
    f = C.useRef({}),
    [m] = C.useState(() => wS()),
    h = ov() != null,
    [y, v] = C.useState(s.reference),
    p = Ze((_, M) => {
      if (((f.current.openEvent = _ ? M.event : void 0), !a.noEmit)) {
        const z = {
          open: _,
          reason: M.reason,
          nativeEvent: M.event,
          nested: h,
        };
        m.emit("openchange", z);
      }
      r?.(_, M);
    }),
    b = C.useMemo(() => ({ setPositionReference: v }), []),
    x = C.useMemo(
      () => ({
        reference: y || s.reference || null,
        floating: s.floating || null,
        domReference: s.reference,
      }),
      [y, s.reference, s.floating]
    );
  return C.useMemo(
    () => ({
      dataRef: f,
      open: i,
      onOpenChange: p,
      elements: x,
      events: m,
      floatingId: c,
      refs: b,
    }),
    [i, p, x, m, c, b]
  );
}
function wE(a = {}) {
  const { nodeId: i } = a,
    r = pv({
      ...a,
      elements: { reference: null, floating: null, ...a.elements },
    }),
    s = a.rootContext || r,
    c = s.elements,
    [f, m] = C.useState(null),
    [h, y] = C.useState(null),
    p = c?.domReference || f,
    b = C.useRef(null),
    x = Ef();
  nt(() => {
    p && (b.current = p);
  }, [p]);
  const _ = bE({ ...a, elements: { ...c, ...(h && { reference: h }) } }),
    M = C.useCallback(
      (Y) => {
        const k = Ie(Y)
          ? {
              getBoundingClientRect: () => Y.getBoundingClientRect(),
              getClientRects: () => Y.getClientRects(),
              contextElement: Y,
            }
          : Y;
        (y(k), _.refs.setReference(k));
      },
      [_.refs]
    ),
    z = C.useCallback(
      (Y) => {
        ((Ie(Y) || Y === null) && ((b.current = Y), m(Y)),
          (Ie(_.refs.reference.current) ||
            _.refs.reference.current === null ||
            (Y !== null && !Ie(Y))) &&
            _.refs.setReference(Y));
      },
      [_.refs]
    ),
    X = C.useMemo(
      () => ({
        ..._.refs,
        setReference: z,
        setPositionReference: M,
        domReference: b,
      }),
      [_.refs, z, M]
    ),
    P = C.useMemo(() => ({ ..._.elements, domReference: p }), [_.elements, p]),
    G = C.useMemo(
      () => ({ ..._, ...s, refs: X, elements: P, nodeId: i }),
      [_, X, P, i, s]
    );
  return (
    nt(() => {
      s.dataRef.current.floatingContext = G;
      const Y = x?.nodesRef.current.find((k) => k.id === i);
      Y && (Y.context = G);
    }),
    C.useMemo(() => ({ ..._, context: G, refs: X, elements: P }), [_, X, P, G])
  );
}
const Bc = I1 && P1;
function ME(a, i = {}) {
  const { open: r, onOpenChange: s, events: c, dataRef: f, elements: m } = a,
    { enabled: h = !0, visibleOnly: y = !0 } = i,
    v = C.useRef(!1),
    p = pa(),
    b = C.useRef(!0);
  (C.useEffect(() => {
    if (!h) return;
    const _ = Nt(m.domReference);
    function M() {
      !r &&
        on(m.domReference) &&
        m.domReference === kg(ga(m.domReference)) &&
        (v.current = !0);
    }
    function z() {
      b.current = !0;
    }
    function X() {
      b.current = !1;
    }
    return (
      _.addEventListener("blur", M),
      Bc &&
        (_.addEventListener("keydown", z, !0),
        _.addEventListener("pointerdown", X, !0)),
      () => {
        (_.removeEventListener("blur", M),
          Bc &&
            (_.removeEventListener("keydown", z, !0),
            _.removeEventListener("pointerdown", X, !0)));
      }
    );
  }, [m.domReference, r, h]),
    C.useEffect(() => {
      if (!h) return;
      function _(M) {
        (M.reason === "trigger-press" || M.reason === "escape-key") &&
          (v.current = !0);
      }
      return (
        c.on("openchange", _),
        () => {
          c.off("openchange", _);
        }
      );
    }, [c, h]));
  const x = C.useMemo(
    () => ({
      onMouseLeave() {
        v.current = !1;
      },
      onFocus(_) {
        if (v.current) return;
        const M = Bn(_.nativeEvent);
        if (y && Ie(M)) {
          if (Bc && !_.relatedTarget) {
            if (!b.current && !rS(M)) return;
          } else if (!oS(M)) return;
        }
        s(!0, Ot("trigger-focus", _.nativeEvent));
      },
      onBlur(_) {
        v.current = !1;
        const M = _.relatedTarget,
          z = _.nativeEvent,
          X =
            Ie(M) &&
            M.hasAttribute(co("focus-guard")) &&
            M.getAttribute("data-type") === "outside";
        p.start(0, () => {
          const P = kg(
            m.domReference ? m.domReference.ownerDocument : document
          );
          (!M && P === m.domReference) ||
            Hn(f.current.floatingContext?.refs.floating.current, P) ||
            Hn(m.domReference, P) ||
            X ||
            s(!1, Ot("trigger-focus", z));
        });
      },
    }),
    [f, m.domReference, s, y, p]
  );
  return C.useMemo(() => (h ? { reference: x } : {}), [h, x]);
}
function OE(a = []) {
  const i = a.map((h) => h?.reference),
    r = a.map((h) => h?.floating),
    s = a.map((h) => h?.item),
    c = C.useCallback((h) => Hc(h, a, "reference"), i),
    f = C.useCallback((h) => Hc(h, a, "floating"), r),
    m = C.useCallback((h) => Hc(h, a, "item"), s);
  return C.useMemo(
    () => ({ getReferenceProps: c, getFloatingProps: f, getItemProps: m }),
    [c, f, m]
  );
}
function Hc(a, i, r) {
  const s = new Map(),
    c = r === "item",
    f = {};
  r === "floating" && ((f.tabIndex = -1), (f[aS] = ""));
  for (const m in a) (c && a && (m === av || m === iv)) || (f[m] = a[m]);
  for (let m = 0; m < i.length; m += 1) {
    let h;
    const y = i[m]?.[r];
    (typeof y == "function" ? (h = a ? y(a) : null) : (h = y),
      h && ay(f, h, c, s));
  }
  return (ay(f, a, c, s), f);
}
function ay(a, i, r, s) {
  for (const c in i) {
    const f = i[c];
    (r && (c === av || c === iv)) ||
      (c.startsWith("on")
        ? (s.has(c) || s.set(c, []),
          typeof f == "function" &&
            (s.get(c)?.push(f),
            (a[c] = (...m) =>
              s
                .get(c)
                ?.map((h) => h(...m))
                .find((h) => h !== void 0))))
        : (a[c] = f));
  }
}
function iy(a, i) {
  const [r, s] = a;
  let c = !1;
  const f = i.length;
  for (let m = 0, h = f - 1; m < f; h = m++) {
    const [y, v] = i[m] || [0, 0],
      [p, b] = i[h] || [0, 0];
    v >= s != b >= s && r <= ((p - y) * (s - v)) / (b - v) + y && (c = !c);
  }
  return c;
}
function DE(a, i) {
  return (
    a[0] >= i.x &&
    a[0] <= i.x + i.width &&
    a[1] >= i.y &&
    a[1] <= i.y + i.height
  );
}
function zE(a = {}) {
  const {
      buffer: i = 0.5,
      blockPointerEvents: r = !1,
      requireIntent: s = !0,
    } = a,
    c = new yi();
  let f = !1,
    m = null,
    h = null,
    y = typeof performance < "u" ? performance.now() : 0;
  function v(b, x) {
    const _ = performance.now(),
      M = _ - y;
    if (m === null || h === null || M === 0)
      return ((m = b), (h = x), (y = _), null);
    const z = b - m,
      X = x - h,
      G = Math.sqrt(z * z + X * X) / M;
    return ((m = b), (h = x), (y = _), G);
  }
  const p = ({
    x: b,
    y: x,
    placement: _,
    elements: M,
    onClose: z,
    nodeId: X,
    tree: P,
  }) =>
    function (Y) {
      function k() {
        (c.clear(), z());
      }
      if (
        (c.clear(),
        !M.domReference || !M.floating || _ == null || b == null || x == null)
      )
        return;
      const { clientX: ne, clientY: Z } = Y,
        W = [ne, Z],
        $ = Bn(Y),
        me = Y.type === "mouseleave",
        ge = Hn(M.floating, $),
        ce = Hn(M.domReference, $),
        Q = M.domReference.getBoundingClientRect(),
        B = M.floating.getBoundingClientRect(),
        te = _.split("-")[0],
        oe = b > B.right - B.width / 2,
        R = x > B.bottom - B.height / 2,
        O = DE(W, Q),
        w = B.width > Q.width,
        ue = B.height > Q.height,
        se = (w ? Q : B).left,
        S = (w ? Q : B).right,
        V = (ue ? Q : B).top,
        J = (ue ? Q : B).bottom;
      if (ge && ((f = !0), !me)) return;
      if ((ce && (f = !1), ce && !me)) {
        f = !0;
        return;
      }
      if (
        (me && Ie(Y.relatedTarget) && Hn(M.floating, Y.relatedTarget)) ||
        (P && yu(P.nodesRef.current, X).some(({ context: q }) => q?.open))
      )
        return;
      if (
        (te === "top" && x >= Q.bottom - 1) ||
        (te === "bottom" && x <= Q.top + 1) ||
        (te === "left" && b >= Q.right - 1) ||
        (te === "right" && b <= Q.left + 1)
      )
        return k();
      let ae = [];
      switch (te) {
        case "top":
          ae = [
            [se, Q.top + 1],
            [se, B.bottom - 1],
            [S, B.bottom - 1],
            [S, Q.top + 1],
          ];
          break;
        case "bottom":
          ae = [
            [se, B.top + 1],
            [se, Q.bottom - 1],
            [S, Q.bottom - 1],
            [S, B.top + 1],
          ];
          break;
        case "left":
          ae = [
            [B.right - 1, J],
            [B.right - 1, V],
            [Q.left + 1, V],
            [Q.left + 1, J],
          ];
          break;
        case "right":
          ae = [
            [Q.right - 1, J],
            [Q.right - 1, V],
            [B.left + 1, V],
            [B.left + 1, J],
          ];
          break;
      }
      function ye([q, le]) {
        switch (te) {
          case "top": {
            const Ae = [w ? q + i / 2 : oe ? q + i * 4 : q - i * 4, le + i + 1],
              fe = [w ? q - i / 2 : oe ? q + i * 4 : q - i * 4, le + i + 1],
              Te = [
                [B.left, oe || w ? B.bottom - i : B.top],
                [B.right, oe ? (w ? B.bottom - i : B.top) : B.bottom - i],
              ];
            return [Ae, fe, ...Te];
          }
          case "bottom": {
            const Ae = [w ? q + i / 2 : oe ? q + i * 4 : q - i * 4, le - i],
              fe = [w ? q - i / 2 : oe ? q + i * 4 : q - i * 4, le - i],
              Te = [
                [B.left, oe || w ? B.top + i : B.bottom],
                [B.right, oe ? (w ? B.top + i : B.bottom) : B.top + i],
              ];
            return [Ae, fe, ...Te];
          }
          case "left": {
            const Ae = [
                q + i + 1,
                ue ? le + i / 2 : R ? le + i * 4 : le - i * 4,
              ],
              fe = [q + i + 1, ue ? le - i / 2 : R ? le + i * 4 : le - i * 4];
            return [
              ...[
                [R || ue ? B.right - i : B.left, B.top],
                [R ? (ue ? B.right - i : B.left) : B.right - i, B.bottom],
              ],
              Ae,
              fe,
            ];
          }
          case "right": {
            const Ae = [q - i, ue ? le + i / 2 : R ? le + i * 4 : le - i * 4],
              fe = [q - i, ue ? le - i / 2 : R ? le + i * 4 : le - i * 4],
              Te = [
                [R || ue ? B.left + i : B.right, B.top],
                [R ? (ue ? B.left + i : B.right) : B.left + i, B.bottom],
              ];
            return [Ae, fe, ...Te];
          }
          default:
            return [];
        }
      }
      if (!iy([ne, Z], ae)) {
        if (f && !O) return k();
        if (!me && s) {
          const q = v(Y.clientX, Y.clientY);
          if (q !== null && q < 0.1) return k();
        }
        iy([ne, Z], ye([b, x])) ? !f && s && c.start(40, k) : k();
      }
    };
  return ((p.__options = { blockPointerEvents: r }), p);
}
let uy = (function (a) {
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
const mo = {
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
  xf = {
    valid(a) {
      return a === null ? null : a ? { [uy.valid]: "" } : { [uy.invalid]: "" };
    },
  },
  bv = C.createContext({
    invalid: void 0,
    controlId: void 0,
    setControlId: Mn,
    labelId: void 0,
    setLabelId: Mn,
    messageIds: [],
    setMessageIds: Mn,
    name: void 0,
    validityData: {
      state: mo,
      errors: [],
      error: "",
      value: "",
      initialValue: null,
    },
    setValidityData: Mn,
    disabled: void 0,
    touched: !1,
    setTouched: Mn,
    dirty: !1,
    setDirty: Mn,
    filled: !1,
    setFilled: Mn,
    focused: !1,
    setFocused: Mn,
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
function Su(a = !0) {
  const i = C.useContext(bv);
  if (i.setControlId === Mn && !a)
    throw new Error(
      "Base UI: FieldRootContext is missing. Field parts must be placed within <Field.Root>."
    );
  return i;
}
const UE = C.createContext({
  formRef: { current: { fields: new Map() } },
  errors: {},
  clearErrors: Mn,
});
function Tf() {
  return C.useContext(UE);
}
function nf(a, i) {
  return { ...a, state: { ...a.state, valid: !i && a.state.valid } };
}
const Fr = Object.keys(mo);
function NE(a) {
  if (!a || a.valid || !a.valueMissing) return !1;
  let i = !1;
  for (const r of Fr)
    r !== "valid" && (r === "valueMissing" && (i = a[r]), a[r] && (i = !1));
  return i;
}
function LE() {
  const {
      setValidityData: a,
      validate: i,
      messageIds: r,
      validityData: s,
      validationMode: c,
      validationDebounceTime: f,
      invalid: m,
      markedDirtyRef: h,
      controlId: y,
      state: v,
      name: p,
    } = Su(),
    { formRef: b, clearErrors: x } = Tf(),
    _ = pa(),
    M = C.useRef(null),
    z = Ze(async (G, Y = !1) => {
      const k = M.current;
      if (!k) return;
      if (Y) {
        if (v.valid !== !1) return;
        const ce = k.validity;
        if (!ce.valueMissing) {
          const B = {
            value: G,
            state: { ...mo, valid: !0 },
            error: "",
            errors: [],
            initialValue: s.initialValue,
          };
          if ((k.setCustomValidity(""), y)) {
            const te = b.current.fields.get(y);
            te && b.current.fields.set(y, { ...te, ...nf(B, !1) });
          }
          a(B);
          return;
        }
        const Q = Fr.reduce((B, te) => ((B[te] = ce[te]), B), {});
        if (!Q.valid && !NE(Q)) return;
      }
      function ne(ce) {
        const Q = Fr.reduce((te, oe) => ((te[oe] = ce.validity[oe]), te), {});
        let B = !1;
        for (const te of Fr)
          if (te !== "valid") {
            if (te === "valueMissing" && Q[te]) B = !0;
            else if (Q[te]) return Q;
          }
        return (B && !h.current && ((Q.valid = !0), (Q.valueMissing = !1)), Q);
      }
      _.clear();
      let Z = null,
        W = [];
      const $ = ne(k);
      let me;
      if (k.validationMessage)
        ((me = k.validationMessage), (W = [k.validationMessage]));
      else {
        const ce = Array.from(b.current.fields.values()).reduce(
            (B, te) => (
              te.name &&
                te.getValueRef &&
                (B[te.name] = te.getValueRef.current?.()),
              B
            ),
            {}
          ),
          Q = i(G, ce);
        (typeof Q == "object" && Q !== null && "then" in Q
          ? (Z = await Q)
          : (Z = Q),
          Z !== null &&
            (($.valid = !1),
            ($.customError = !0),
            Array.isArray(Z)
              ? ((W = Z),
                k.setCustomValidity(
                  Z.join(`
`)
                ))
              : Z && ((W = [Z]), k.setCustomValidity(Z))));
      }
      const ge = {
        value: G,
        state: $,
        error: me ?? (Array.isArray(Z) ? Z[0] : (Z ?? "")),
        errors: W,
        initialValue: s.initialValue,
      };
      if (y) {
        const ce = b.current.fields.get(y);
        ce && b.current.fields.set(y, { ...ce, ...nf(ge, m) });
      }
      a(ge);
    }),
    X = C.useCallback(
      (G = {}) =>
        Zc(
          {
            ...(r.length && { "aria-describedby": r.join(" ") }),
            ...(v.valid === !1 && { "aria-invalid": !0 }),
          },
          G
        ),
      [r, v.valid]
    ),
    P = C.useCallback(
      (G = {}) =>
        Zc(
          {
            onChange(Y) {
              if (Y.nativeEvent.defaultPrevented) return;
              if ((x(p), c !== "onChange")) {
                z(Y.currentTarget.value, !0);
                return;
              }
              if (m) return;
              const k = Y.currentTarget;
              if (k.value === "") {
                z(k.value);
                return;
              }
              (_.clear(),
                f
                  ? _.start(f, () => {
                      z(k.value);
                    })
                  : z(k.value));
            },
          },
          X(G)
        ),
      [X, x, p, _, z, m, c, f]
    );
  return C.useMemo(
    () => ({
      getValidationProps: X,
      getInputValidationProps: P,
      inputRef: M,
      commitValidation: z,
    }),
    [X, P, z]
  );
}
function VE(a) {
  const { formRef: i } = Tf(),
    {
      invalid: r,
      markedDirtyRef: s,
      validityData: c,
      setValidityData: f,
    } = Su(),
    {
      enabled: m = !0,
      value: h,
      id: y,
      name: v,
      controlRef: p,
      commitValidation: b,
    } = a,
    x = hl(a.getValue);
  (nt(() => {
    if (!m) return;
    let _ = h;
    (_ === void 0 && (_ = x.current?.()),
      c.initialValue === null &&
        _ !== c.initialValue &&
        f((M) => ({ ...M, initialValue: _ })));
  }, [m, f, h, c.initialValue, x]),
    nt(() => {
      m &&
        y &&
        i.current.fields.set(y, {
          controlRef: p,
          validityData: nf(c, r),
          validate() {
            let _ = h;
            (_ === void 0 && (_ = x.current?.()),
              (s.current = !0),
              hi.flushSync(() => b(_)));
          },
          getValueRef: x,
          name: v,
        });
    }, [b, p, m, i, x, y, r, s, v, c, h]),
    nt(() => {
      const _ = i.current.fields;
      return () => {
        y && _.delete(y);
      };
    }, [i, y]));
}
const BE = (a) => ({
    name: "arrow",
    options: a,
    async fn(i) {
      const {
          x: r,
          y: s,
          placement: c,
          rects: f,
          platform: m,
          elements: h,
          middlewareData: y,
        } = i,
        {
          element: v,
          padding: p = 0,
          offsetParent: b = "real",
        } = vl(a, i) || {};
      if (v == null) return {};
      const x = uv(p),
        _ = { x: r, y: s },
        M = pf(c),
        z = vf(M),
        X = await m.getDimensions(v),
        P = M === "y",
        G = P ? "top" : "left",
        Y = P ? "bottom" : "right",
        k = P ? "clientHeight" : "clientWidth",
        ne = f.reference[z] + f.reference[M] - _[M] - f.floating[z],
        Z = _[M] - f.reference[M],
        W = b === "real" ? await m.getOffsetParent?.(v) : h.floating;
      let $ = h.floating[k] || f.floating[z];
      (!$ || !(await m.isElement?.(W))) && ($ = h.floating[k] || f.floating[z]);
      const me = ne / 2 - Z / 2,
        ge = $ / 2 - X[z] / 2 - 1,
        ce = Math.min(x[G], ge),
        Q = Math.min(x[Y], ge),
        B = ce,
        te = $ - X[z] - Q,
        oe = $ / 2 - X[z] / 2 + me,
        R = ef(B, oe, te),
        O =
          !y.arrow &&
          Kl(c) != null &&
          oe !== R &&
          f.reference[z] / 2 - (oe < B ? ce : Q) - X[z] / 2 < 0,
        w = O ? (oe < B ? oe - B : oe - te) : 0;
      return {
        [M]: _[M] + w,
        data: {
          [M]: R,
          centerOffset: oe - R - w,
          ...(O && { alignmentOffset: w }),
        },
        reset: O,
      };
    },
  }),
  HE = (a, i) => ({ ...BE(a), options: [a, i] });
function Sv(a, i, r) {
  const s = a === "inline-start" || a === "inline-end";
  return {
    top: "top",
    right: s ? (r ? "inline-start" : "inline-end") : "right",
    bottom: "bottom",
    left: s ? (r ? "inline-end" : "inline-start") : "left",
  }[i];
}
function ry(a, i, r) {
  const { rects: s, placement: c } = a;
  return {
    side: Sv(i, rn(c), r),
    align: Kl(c) || "center",
    anchor: { width: s.reference.width, height: s.reference.height },
    positioner: { width: s.floating.width, height: s.floating.height },
  };
}
function YE(a) {
  const {
      anchor: i,
      positionMethod: r = "absolute",
      side: s = "bottom",
      sideOffset: c = 0,
      align: f = "center",
      alignOffset: m = 0,
      collisionBoundary: h,
      collisionPadding: y = 5,
      sticky: v = !1,
      arrowPadding: p = 5,
      trackAnchor: b = !0,
      keepMounted: x = !1,
      floatingRootContext: _,
      mounted: M,
      collisionAvoidance: z,
      shiftCrossAxis: X = !1,
      nodeId: P,
      adaptiveOrigin: G,
      lazyFlip: Y = !1,
    } = a,
    [k, ne] = C.useState(null);
  !M && k !== null && ne(null);
  const Z = z.side || "flip",
    W = z.align || "flip",
    $ = z.fallbackAxisSide || "end",
    me = typeof i == "function" ? i : void 0,
    ge = Ze(me),
    ce = me ? ge : i,
    Q = hl(i),
    te = M1() === "rtl",
    oe =
      k ||
      {
        top: "top",
        right: "right",
        bottom: "bottom",
        left: "left",
        "inline-end": te ? "left" : "right",
        "inline-start": te ? "right" : "left",
      }[s],
    R = f === "center" ? oe : `${oe}-${f}`;
  let O = y;
  const w = 1,
    ue = s === "bottom" ? w : 0,
    se = s === "top" ? w : 0,
    S = s === "right" ? w : 0,
    V = s === "left" ? w : 0;
  typeof O == "number"
    ? (O = { top: O + ue, right: O + V, bottom: O + se, left: O + S })
    : O &&
      (O = {
        top: (O.top || 0) + ue,
        right: (O.right || 0) + V,
        bottom: (O.bottom || 0) + se,
        left: (O.left || 0) + S,
      });
  const J = {
      boundary: h === "clipping-ancestors" ? "clippingAncestors" : h,
      padding: O,
    },
    ae = C.useRef(null),
    ye = hl(c),
    q = hl(m),
    fe = [
      SE(
        (De) => {
          const St = ry(De, s, te),
            zt = typeof ye.current == "function" ? ye.current(St) : ye.current,
            Lt = typeof q.current == "function" ? q.current(St) : q.current;
          return { mainAxis: zt, crossAxis: Lt, alignmentAxis: Lt };
        },
        [typeof c != "function" ? c : 0, typeof m != "function" ? m : 0, te, s]
      ),
    ],
    Te = W === "none" && Z !== "shift",
    qe = !Te && (v || X || Z === "shift"),
    Ye =
      Z === "none"
        ? null
        : xE({
            ...J,
            padding: {
              top: O.top + w,
              right: O.right + w,
              bottom: O.bottom + w,
              left: O.left + w,
            },
            mainAxis: !X && Z === "flip",
            crossAxis: W === "flip" ? "alignment" : !1,
            fallbackAxisSideDirection: $,
          }),
    Qt = Te
      ? null
      : EE(
          (De) => {
            const St = NS(De.elements.floating).documentElement;
            return {
              ...J,
              rootBoundary: X
                ? { x: 0, y: 0, width: St.clientWidth, height: St.clientHeight }
                : void 0,
              mainAxis: W !== "none",
              crossAxis: qe,
              limiter:
                v || X
                  ? void 0
                  : AE((zt) => {
                      if (!ae.current) return {};
                      const { width: Lt, height: xn } =
                          ae.current.getBoundingClientRect(),
                        Tn = Sn(rn(zt.placement)),
                        kn = Tn === "y" ? Lt : xn,
                        _n = Tn === "y" ? O.left + O.right : O.top + O.bottom;
                      return { offset: kn / 2 + _n / 2 };
                    }),
            };
          },
          [J, v, X, O, W]
        );
  (Z === "shift" || W === "shift" || f === "center"
    ? fe.push(Qt, Ye)
    : fe.push(Ye, Qt),
    fe.push(
      TE({
        ...J,
        apply({
          elements: { floating: De },
          rects: { reference: St },
          availableWidth: zt,
          availableHeight: Lt,
        }) {
          Object.entries({
            "--available-width": `${zt}px`,
            "--available-height": `${Lt}px`,
            "--anchor-width": `${St.width}px`,
            "--anchor-height": `${St.height}px`,
          }).forEach(([xn, Tn]) => {
            De.style.setProperty(xn, Tn);
          });
        },
      }),
      HE(
        () => ({
          element: ae.current || document.createElement("div"),
          padding: p,
          offsetParent: "floating",
        }),
        [p]
      ),
      _E(),
      {
        name: "transformOrigin",
        fn(De) {
          const {
              elements: St,
              middlewareData: zt,
              placement: Lt,
              rects: xn,
              y: Tn,
            } = De,
            kn = rn(Lt),
            _n = Sn(kn),
            Jl = ae.current,
            Fl = zt.arrow?.x || 0,
            vo = zt.arrow?.y || 0,
            Tu = Jl?.clientWidth || 0,
            vi = Jl?.clientHeight || 0,
            Xn = Fl + Tu / 2,
            _u = vo + vi / 2,
            Ru = Math.abs(zt.shift?.y || 0),
            Cu = xn.reference.height / 2,
            pl = typeof c == "function" ? c(ry(De, s, te)) : c,
            pi = Ru > pl,
            bi = {
              top: `${Xn}px calc(100% + ${pl}px)`,
              bottom: `${Xn}px ${-pl}px`,
              left: `calc(100% + ${pl}px) ${_u}px`,
              right: `${-pl}px ${_u}px`,
            }[kn],
            wu = `${Xn}px ${xn.reference.y + Cu - Tn}px`;
          return (
            St.floating.style.setProperty(
              "--transform-origin",
              qe && _n === "y" && pi ? wu : bi
            ),
            {}
          );
        },
      },
      G
    ));
  let Dt = _;
  !M &&
    _ &&
    (Dt = {
      ..._,
      elements: { reference: null, floating: null, domReference: null },
    });
  const Zt = C.useMemo(
      () => ({
        elementResize: b && typeof ResizeObserver < "u",
        layoutShift: b && typeof IntersectionObserver < "u",
      }),
      [b]
    ),
    {
      refs: We,
      elements: wt,
      x: Gn,
      y: An,
      middlewareData: A,
      update: U,
      placement: K,
      context: de,
      isPositioned: ie,
      floatingStyles: re,
    } = wE({
      rootContext: Dt,
      placement: R,
      middleware: fe,
      strategy: r,
      whileElementsMounted: x ? void 0 : (...De) => ty(...De, Zt),
      nodeId: P,
    }),
    { sideX: Ee, sideY: Ve } = A.adaptiveOrigin || {},
    He = C.useMemo(
      () => (G ? { position: r, [Ee]: `${Gn}px`, [Ve]: `${An}px` } : re),
      [G, Ee, Ve, r, Gn, An, re]
    ),
    yt = C.useRef(null);
  (nt(() => {
    if (!M) return;
    const De = Q.current,
      St = typeof De == "function" ? De() : De,
      Lt = (oy(St) ? St.current : St) || null || null;
    Lt !== yt.current && (We.setPositionReference(Lt), (yt.current = Lt));
  }, [M, We, ce, Q]),
    C.useEffect(() => {
      if (!M) return;
      const De = Q.current;
      typeof De != "function" &&
        oy(De) &&
        De.current !== yt.current &&
        (We.setPositionReference(De.current), (yt.current = De.current));
    }, [M, We, ce, Q]),
    C.useEffect(() => {
      if (x && M && wt.domReference && wt.floating)
        return ty(wt.domReference, wt.floating, U, Zt);
    }, [x, M, wt, U, Zt]));
  const Kt = rn(K),
    Jt = Sv(s, Kt, te),
    Sa = Kl(K) || "center",
    sn = !!A.hide?.referenceHidden;
  nt(() => {
    Y && M && ie && ne(Kt);
  }, [Y, M, ie, Kt]);
  const st = C.useMemo(
      () => ({ position: "absolute", top: A.arrow?.y, left: A.arrow?.x }),
      [A.arrow]
    ),
    Ft = A.arrow?.centerOffset !== 0;
  return C.useMemo(
    () => ({
      positionerStyles: He,
      arrowStyles: st,
      arrowRef: ae,
      arrowUncentered: Ft,
      side: Jt,
      align: Sa,
      physicalSide: Kt,
      anchorHidden: sn,
      refs: We,
      context: de,
      isPositioned: ie,
      update: U,
    }),
    [He, st, ae, Ft, Jt, Sa, Kt, sn, We, de, ie, U]
  );
}
function oy(a) {
  return a != null && "current" in a;
}
const Ev = C.createContext(void 0);
function qE() {
  const a = C.useContext(Ev);
  if (a === void 0)
    throw new Error(
      "Base UI: AvatarRootContext is missing. Avatar parts must be placed within <Avatar.Root>."
    );
  return a;
}
const Av = { imageLoadingStatus: () => null },
  jA = C.forwardRef(function (i, r) {
    const { className: s, render: c, ...f } = i,
      [m, h] = C.useState("idle"),
      y = C.useMemo(() => ({ imageLoadingStatus: m }), [m]),
      v = C.useMemo(
        () => ({ imageLoadingStatus: m, setImageLoadingStatus: h }),
        [m, h]
      ),
      p = qn("span", i, {
        state: y,
        ref: r,
        props: f,
        stateAttributesMapping: Av,
      });
    return zn.jsx(Ev.Provider, { value: v, children: p });
  });
function jE(a, { referrerPolicy: i, crossOrigin: r }) {
  const [s, c] = C.useState("idle");
  return (
    nt(() => {
      if (!a) return (c("error"), Mn);
      let f = !0;
      const m = new window.Image(),
        h = (y) => () => {
          f && c(y);
        };
      return (
        c("loading"),
        (m.onload = h("loaded")),
        (m.onerror = h("error")),
        i && (m.referrerPolicy = i),
        (m.crossOrigin = r ?? null),
        (m.src = a),
        () => {
          f = !1;
        }
      );
    }, [a, r, i]),
    s
  );
}
const GA = C.forwardRef(function (i, r) {
    const {
        className: s,
        render: c,
        onLoadingStatusChange: f,
        referrerPolicy: m,
        crossOrigin: h,
        ...y
      } = i,
      v = qE(),
      p = jE(i.src, { referrerPolicy: m, crossOrigin: h }),
      b = Ze((M) => {
        (f?.(M), v.setImageLoadingStatus(M));
      });
    nt(() => {
      p !== "idle" && b(p);
    }, [p, b]);
    const x = C.useMemo(() => ({ imageLoadingStatus: p }), [p]);
    return qn("img", i, {
      state: x,
      ref: r,
      props: y,
      stateAttributesMapping: Av,
      enabled: p === "loaded",
    });
  }),
  GE = C.createContext({
    legendId: void 0,
    setLegendId: () => {},
    disabled: void 0,
  });
function kE() {
  return C.useContext(GE);
}
const kA = C.forwardRef(function (i, r) {
    const {
        render: s,
        className: c,
        validate: f,
        validationDebounceTime: m = 0,
        validationMode: h = "onBlur",
        name: y,
        disabled: v = !1,
        invalid: p,
        ...b
      } = i,
      { disabled: x } = kE(),
      { errors: _ } = Tf(),
      M = Ze(f || (() => null)),
      z = x || v,
      [X, P] = C.useState(void 0),
      [G, Y] = C.useState(void 0),
      [k, ne] = C.useState([]),
      [Z, W] = C.useState(!1),
      [$, me] = C.useState(!1),
      [ge, ce] = C.useState(!1),
      [Q, B] = C.useState(!1),
      te = C.useRef(!1),
      oe = C.useCallback((J) => {
        (J && (te.current = !0), me(J));
      }, []),
      R = !!(p || (y && {}.hasOwnProperty.call(_, y) && _[y] !== void 0)),
      [O, w] = C.useState({
        state: mo,
        error: "",
        errors: [],
        value: null,
        initialValue: null,
      }),
      ue = !R && O.state.valid,
      se = C.useMemo(
        () => ({
          disabled: z,
          touched: Z,
          dirty: $,
          valid: ue,
          filled: ge,
          focused: Q,
        }),
        [z, Z, $, ue, ge, Q]
      ),
      S = C.useMemo(
        () => ({
          invalid: R,
          controlId: X,
          setControlId: P,
          labelId: G,
          setLabelId: Y,
          messageIds: k,
          setMessageIds: ne,
          name: y,
          validityData: O,
          setValidityData: w,
          disabled: z,
          touched: Z,
          setTouched: W,
          dirty: $,
          setDirty: oe,
          filled: ge,
          setFilled: ce,
          focused: Q,
          setFocused: B,
          validate: M,
          validationMode: h,
          validationDebounceTime: m,
          state: se,
          markedDirtyRef: te,
        }),
        [R, X, G, k, y, O, z, Z, $, oe, ge, ce, Q, B, M, h, m, se]
      ),
      V = qn("div", i, {
        ref: r,
        state: se,
        props: b,
        stateAttributesMapping: xf,
      });
    return zn.jsx(bv.Provider, { value: S, children: V });
  }),
  XA = C.forwardRef(function (i, r) {
    const { render: s, className: c, id: f, ...m } = i,
      { labelId: h, setLabelId: y, state: v, controlId: p } = Su(!1),
      b = ev(f),
      x = p ?? void 0;
    return (
      nt(
        () => (
          (p != null || f) && y(b),
          () => {
            y(void 0);
          }
        ),
        [p, b, f, y]
      ),
      qn("label", i, {
        ref: r,
        state: v,
        props: [
          {
            id: h,
            htmlFor: x,
            onMouseDown(M) {
              Bn(M.nativeEvent)?.closest("button,input,select,textarea") ||
                (!M.defaultPrevented && M.detail > 1 && M.preventDefault());
            },
          },
          m,
        ],
        stateAttributesMapping: xf,
      })
    );
  }),
  QA = C.forwardRef(function (i, r) {
    const {
        render: s,
        className: c,
        id: f,
        name: m,
        value: h,
        disabled: y = !1,
        onValueChange: v,
        defaultValue: p,
        ...b
      } = i,
      { state: x, name: _, disabled: M } = Su(),
      z = M || y,
      X = _ ?? m,
      P = C.useMemo(() => ({ ...x, disabled: z }), [x, z]),
      {
        setControlId: G,
        labelId: Y,
        setTouched: k,
        setDirty: ne,
        validityData: Z,
        setFocused: W,
        setFilled: $,
        validationMode: me,
      } = Su(),
      {
        getValidationProps: ge,
        getInputValidationProps: ce,
        commitValidation: Q,
        inputRef: B,
      } = LE(),
      te = ev(f);
    (nt(
      () => (
        G(te),
        () => {
          G(void 0);
        }
      ),
      [te, G]
    ),
      nt(() => {
        const se = h != null;
        B.current?.value || (se && h !== "") ? $(!0) : se && h === "" && $(!1);
      }, [B, $, h]));
    const [oe, R] = Iy({
        controlled: h,
        default: p,
        name: "FieldControl",
        state: "value",
      }),
      O = h !== void 0,
      w = Ze((se, S) => {
        (v?.(se, S), !S.isCanceled && R(se));
      });
    return (
      VE({
        id: te,
        name: X,
        commitValidation: Q,
        value: oe,
        getValue: () => B.current?.value,
        controlRef: B,
      }),
      qn("input", i, {
        ref: r,
        state: P,
        props: [
          {
            id: te,
            disabled: z,
            name: X,
            ref: B,
            "aria-labelledby": Y,
            ...(O ? { value: oe } : { defaultValue: p }),
            onChange(se) {
              const S = se.currentTarget.value;
              (w(S, Ot("none", se.nativeEvent)),
                ne(S !== Z.initialValue),
                $(S !== ""));
            },
            onFocus() {
              W(!0);
            },
            onBlur(se) {
              (k(!0), W(!1), me === "onBlur" && Q(se.currentTarget.value));
            },
            onKeyDown(se) {
              se.currentTarget.tagName === "INPUT" &&
                se.key === "Enter" &&
                (k(!0), Q(se.currentTarget.value));
            },
          },
          ge(),
          ce(),
          b,
        ],
        stateAttributesMapping: xf,
      })
    );
  });
function XE(a) {
  const i = BS({ root: a.root });
  return i && hi.createPortal(a.children, i);
}
const xv = C.createContext(void 0);
function ho() {
  const a = C.useContext(xv);
  if (a === void 0)
    throw new Error(
      "Base UI: TooltipRootContext is missing. Tooltip parts must be placed within <Tooltip.Root>."
    );
  return a;
}
const QE = 600,
  Tv = C.createContext(void 0);
function ZE() {
  return C.useContext(Tv);
}
function ZA(a) {
  const {
      disabled: i = !1,
      defaultOpen: r = !1,
      onOpenChange: s,
      open: c,
      delay: f,
      closeDelay: m,
      hoverable: h = !0,
      trackCursorAxis: y = "none",
      actionsRef: v,
      onOpenChangeComplete: p,
    } = a,
    b = f ?? QE,
    x = m ?? 0,
    [_, M] = C.useState(null),
    [z, X] = C.useState(null),
    [P, G] = C.useState(),
    Y = C.useRef(null),
    [k, ne] = Iy({ controlled: c, default: r, name: "Tooltip", state: "open" }),
    Z = !i && k;
  function W(le, Ae) {
    const fe = Ae.reason,
      Te = fe === "trigger-hover",
      qe = le && fe === "trigger-focus",
      Ye = !le && (fe === "trigger-press" || fe === "escape-key");
    if ((s?.(le, Ae), Ae.isCanceled)) return;
    function Qt() {
      ne(le);
    }
    (Te ? hi.flushSync(Qt) : Qt(),
      qe || Ye
        ? G(qe ? "focus" : "dismiss")
        : fe === "trigger-hover" && G(void 0));
  }
  const $ = Ze(W);
  k && i && W(!1, Ot("disabled"));
  const { mounted: me, setMounted: ge, transitionStatus: ce } = B1(Z),
    Q = Ze(() => {
      (ge(!1), p?.(!1));
    });
  (rv({
    enabled: !v,
    open: Z,
    ref: Y,
    onComplete() {
      Z || Q();
    },
  }),
    C.useImperativeHandle(v, () => ({ unmount: Q }), [Q]));
  const B = pv({
      elements: { reference: _, floating: z },
      open: Z,
      onOpenChange: $,
    }),
    te = ZE(),
    { delayRef: oe, isInstantPhase: R, hasProvider: O } = US(B),
    w = R ? "delay" : P,
    ue = DS(B, {
      enabled: !i,
      mouseOnly: !0,
      move: !1,
      handleClose: h && y !== "both" ? zE() : null,
      restMs() {
        const le = te?.delay,
          Ae = typeof oe.current == "object" ? oe.current.open : void 0;
        let fe = b;
        return (O && (Ae !== 0 ? (fe = f ?? le ?? b) : (fe = 0)), fe);
      },
      delay() {
        const le = typeof oe.current == "object" ? oe.current.close : void 0;
        let Ae = x;
        return (m == null && O && (Ae = le), { close: Ae });
      },
    }),
    se = ME(B, { enabled: !i }),
    S = CE(B, { enabled: !i, referencePress: !0 }),
    V = YS(B, { enabled: !i && y !== "none", axis: y === "none" ? void 0 : y }),
    { getReferenceProps: J, getFloatingProps: ae } = OE([ue, se, S, V]),
    ye = C.useMemo(
      () => ({
        open: Z,
        setOpen: $,
        mounted: me,
        setMounted: ge,
        setTriggerElement: M,
        positionerElement: z,
        setPositionerElement: X,
        popupRef: Y,
        triggerProps: J(),
        popupProps: ae(),
        floatingRootContext: B,
        instantType: w,
        transitionStatus: ce,
        onOpenChangeComplete: p,
      }),
      [Z, $, me, ge, M, z, X, Y, J, ae, B, w, ce, p]
    ),
    q = C.useMemo(
      () => ({
        ...ye,
        delay: b,
        closeDelay: x,
        trackCursorAxis: y,
        hoverable: h,
      }),
      [ye, b, x, y, h]
    );
  return zn.jsx(xv.Provider, { value: q, children: a.children });
}
const KA = C.forwardRef(function (i, r) {
    const { className: s, render: c, ...f } = i,
      { open: m, setTriggerElement: h, triggerProps: y } = ho(),
      v = C.useMemo(() => ({ open: m }), [m]);
    return qn("button", i, {
      state: v,
      ref: [r, h],
      props: [y, f],
      stateAttributesMapping: CS,
    });
  }),
  _v = C.createContext(void 0);
function KE() {
  const a = C.useContext(_v);
  if (a === void 0) throw new Error("Base UI: <Tooltip.Portal> is missing.");
  return a;
}
function JA(a) {
  const { children: i, keepMounted: r = !1, container: s } = a,
    { mounted: c } = ho();
  return c || r
    ? zn.jsx(_v.Provider, {
        value: r,
        children: zn.jsx(XE, { root: s, children: i }),
      })
    : null;
}
const Rv = C.createContext(void 0);
function Cv() {
  const a = C.useContext(Rv);
  if (a === void 0)
    throw new Error(
      "Base UI: TooltipPositionerContext is missing. TooltipPositioner parts must be placed within <Tooltip.Positioner>."
    );
  return a;
}
const FA = C.forwardRef(function (i, r) {
    const {
        render: s,
        className: c,
        anchor: f,
        positionMethod: m = "absolute",
        side: h = "top",
        align: y = "center",
        sideOffset: v = 0,
        alignOffset: p = 0,
        collisionBoundary: b = "clipping-ancestors",
        collisionPadding: x = 5,
        arrowPadding: _ = 5,
        sticky: M = !1,
        trackAnchor: z = !0,
        collisionAvoidance: X = $0,
        ...P
      } = i,
      {
        open: G,
        setPositionerElement: Y,
        mounted: k,
        floatingRootContext: ne,
        trackCursorAxis: Z,
        hoverable: W,
      } = ho(),
      $ = KE(),
      me = YE({
        anchor: f,
        positionMethod: m,
        floatingRootContext: ne,
        mounted: k,
        side: h,
        sideOffset: v,
        align: y,
        alignOffset: p,
        collisionBoundary: b,
        collisionPadding: x,
        sticky: M,
        arrowPadding: _,
        trackAnchor: z,
        keepMounted: $,
        collisionAvoidance: X,
      }),
      ge = C.useMemo(() => {
        const oe = {};
        return (
          (!G || Z === "both" || !W) && (oe.pointerEvents = "none"),
          {
            role: "presentation",
            hidden: !k,
            style: { ...me.positionerStyles, ...oe },
          }
        );
      }, [G, Z, W, k, me.positionerStyles]),
      ce = C.useMemo(() => ({ props: ge, ...me }), [ge, me]),
      Q = C.useMemo(
        () => ({
          open: G,
          side: ce.side,
          align: ce.align,
          anchorHidden: ce.anchorHidden,
        }),
        [G, ce.side, ce.align, ce.anchorHidden]
      ),
      B = C.useMemo(
        () => ({
          ...Q,
          arrowRef: ce.arrowRef,
          arrowStyles: ce.arrowStyles,
          arrowUncentered: ce.arrowUncentered,
        }),
        [Q, ce.arrowRef, ce.arrowStyles, ce.arrowUncentered]
      ),
      te = qn("div", i, {
        state: Q,
        props: [ce.props, P],
        ref: [r, Y],
        stateAttributesMapping: Sf,
      });
    return zn.jsx(Rv.Provider, { value: B, children: te });
  }),
  JE = { ...Sf, ...q1 },
  $A = C.forwardRef(function (i, r) {
    const { className: s, render: c, ...f } = i,
      {
        open: m,
        instantType: h,
        transitionStatus: y,
        popupProps: v,
        popupRef: p,
        onOpenChangeComplete: b,
      } = ho(),
      { side: x, align: _ } = Cv();
    rv({
      open: m,
      ref: p,
      onComplete() {
        m && b?.(!0);
      },
    });
    const M = C.useMemo(
      () => ({ open: m, side: x, align: _, instant: h, transitionStatus: y }),
      [m, x, _, h, y]
    );
    return qn("div", i, {
      state: M,
      ref: [r, p],
      props: [v, y === "starting" ? F0 : Ql, f],
      stateAttributesMapping: JE,
    });
  }),
  WA = C.forwardRef(function (i, r) {
    const { className: s, render: c, ...f } = i,
      {
        open: m,
        arrowRef: h,
        side: y,
        align: v,
        arrowUncentered: p,
        arrowStyles: b,
      } = Cv(),
      x = C.useMemo(
        () => ({ open: m, side: y, align: v, uncentered: p }),
        [m, y, v, p]
      );
    return qn("div", i, {
      state: x,
      ref: [r, h],
      props: [{ style: b, "aria-hidden": !0 }, f],
      stateAttributesMapping: Sf,
    });
  }),
  PA = function (i) {
    const { delay: r, closeDelay: s, timeout: c = 400 } = i,
      f = C.useMemo(() => ({ delay: r, closeDelay: s }), [r, s]),
      m = C.useMemo(() => ({ open: r, close: s }), [r, s]);
    return zn.jsx(Tv.Provider, {
      value: f,
      children: zn.jsx(zS, { delay: m, timeoutMs: c, children: i.children }),
    });
  };
var xu = (a) => a.type === "checkbox",
  ya = (a) => a instanceof Date,
  Xt = (a) => a == null;
const wv = (a) => typeof a == "object";
var gt = (a) => !Xt(a) && !Array.isArray(a) && wv(a) && !ya(a),
  Mv = (a) =>
    gt(a) && a.target ? (xu(a.target) ? a.target.checked : a.target.value) : a,
  FE = (a) => a.substring(0, a.search(/\.\d+(\.|$)/)) || a,
  Ov = (a, i) => a.has(FE(i)),
  $E = (a) => {
    const i = a.constructor && a.constructor.prototype;
    return gt(i) && i.hasOwnProperty("isPrototypeOf");
  },
  _f =
    typeof window < "u" &&
    typeof window.HTMLElement < "u" &&
    typeof document < "u";
function bt(a) {
  let i;
  const r = Array.isArray(a),
    s = typeof FileList < "u" ? a instanceof FileList : !1;
  if (a instanceof Date) i = new Date(a);
  else if (!(_f && (a instanceof Blob || s)) && (r || gt(a)))
    if (((i = r ? [] : Object.create(Object.getPrototypeOf(a))), !r && !$E(a)))
      i = a;
    else for (const c in a) a.hasOwnProperty(c) && (i[c] = bt(a[c]));
  else return a;
  return i;
}
var go = (a) => /^\w*$/.test(a),
  ut = (a) => a === void 0,
  Rf = (a) => (Array.isArray(a) ? a.filter(Boolean) : []),
  Cf = (a) => Rf(a.replace(/["|']|\]/g, "").split(/\.|\[/)),
  he = (a, i, r) => {
    if (!i || !gt(a)) return r;
    const s = (go(i) ? [i] : Cf(i)).reduce((c, f) => (Xt(c) ? c : c[f]), a);
    return ut(s) || s === a ? (ut(a[i]) ? r : a[i]) : s;
  },
  ln = (a) => typeof a == "boolean",
  Pe = (a, i, r) => {
    let s = -1;
    const c = go(i) ? [i] : Cf(i),
      f = c.length,
      m = f - 1;
    for (; ++s < f; ) {
      const h = c[s];
      let y = r;
      if (s !== m) {
        const v = a[h];
        y = gt(v) || Array.isArray(v) ? v : isNaN(+c[s + 1]) ? {} : [];
      }
      if (h === "__proto__" || h === "constructor" || h === "prototype") return;
      ((a[h] = y), (a = a[h]));
    }
  };
const lo = { BLUR: "blur", FOCUS_OUT: "focusout", CHANGE: "change" },
  On = {
    onBlur: "onBlur",
    onChange: "onChange",
    onSubmit: "onSubmit",
    onTouched: "onTouched",
    all: "all",
  },
  fl = {
    max: "max",
    min: "min",
    maxLength: "maxLength",
    minLength: "minLength",
    pattern: "pattern",
    required: "required",
    validate: "validate",
  },
  wf = Oe.createContext(null);
wf.displayName = "HookFormContext";
const Mf = () => Oe.useContext(wf),
  IA = (a) => {
    const { children: i, ...r } = a;
    return Oe.createElement(wf.Provider, { value: r }, i);
  };
var Dv = (a, i, r, s = !0) => {
  const c = { defaultValues: i._defaultValues };
  for (const f in a)
    Object.defineProperty(c, f, {
      get: () => {
        const m = f;
        return (
          i._proxyFormState[m] !== On.all &&
            (i._proxyFormState[m] = !s || On.all),
          r && (r[m] = !0),
          a[m]
        );
      },
    });
  return c;
};
const Of = typeof window < "u" ? Oe.useLayoutEffect : Oe.useEffect;
function WE(a) {
  const i = Mf(),
    { control: r = i.control, disabled: s, name: c, exact: f } = a || {},
    [m, h] = Oe.useState(r._formState),
    y = Oe.useRef({
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
    Of(
      () =>
        r._subscribe({
          name: c,
          formState: y.current,
          exact: f,
          callback: (v) => {
            !s && h({ ...r._formState, ...v });
          },
        }),
      [c, s, f]
    ),
    Oe.useEffect(() => {
      y.current.isValid && r._setValid(!0);
    }, [r]),
    Oe.useMemo(() => Dv(m, r, y.current, !1), [m, r])
  );
}
var un = (a) => typeof a == "string",
  zv = (a, i, r, s, c) =>
    un(a)
      ? (s && i.watch.add(a), he(r, a, c))
      : Array.isArray(a)
        ? a.map((f) => (s && i.watch.add(f), he(r, f)))
        : (s && (i.watchAll = !0), r),
  lf = (a) => Xt(a) || !wv(a);
function ml(a, i, r = new WeakSet()) {
  if (lf(a) || lf(i)) return a === i;
  if (ya(a) && ya(i)) return a.getTime() === i.getTime();
  const s = Object.keys(a),
    c = Object.keys(i);
  if (s.length !== c.length) return !1;
  if (r.has(a) || r.has(i)) return !0;
  (r.add(a), r.add(i));
  for (const f of s) {
    const m = a[f];
    if (!c.includes(f)) return !1;
    if (f !== "ref") {
      const h = i[f];
      if (
        (ya(m) && ya(h)) ||
        (gt(m) && gt(h)) ||
        (Array.isArray(m) && Array.isArray(h))
          ? !ml(m, h, r)
          : m !== h
      )
        return !1;
    }
  }
  return !0;
}
function PE(a) {
  const i = Mf(),
    {
      control: r = i.control,
      name: s,
      defaultValue: c,
      disabled: f,
      exact: m,
      compute: h,
    } = a || {},
    y = Oe.useRef(c),
    v = Oe.useRef(h),
    p = Oe.useRef(void 0);
  v.current = h;
  const b = Oe.useMemo(() => r._getWatch(s, y.current), [r, s]),
    [x, _] = Oe.useState(v.current ? v.current(b) : b);
  return (
    Of(
      () =>
        r._subscribe({
          name: s,
          formState: { values: !0 },
          exact: m,
          callback: (M) => {
            if (!f) {
              const z = zv(
                s,
                r._names,
                M.values || r._formValues,
                !1,
                y.current
              );
              if (v.current) {
                const X = v.current(z);
                ml(X, p.current) || (_(X), (p.current = X));
              } else _(z);
            }
          },
        }),
      [r, f, s, m]
    ),
    Oe.useEffect(() => r._removeUnmounted()),
    x
  );
}
function IE(a) {
  const i = Mf(),
    {
      name: r,
      disabled: s,
      control: c = i.control,
      shouldUnregister: f,
      defaultValue: m,
    } = a,
    h = Ov(c._names.array, r),
    y = Oe.useMemo(
      () => he(c._formValues, r, he(c._defaultValues, r, m)),
      [c, r, m]
    ),
    v = PE({ control: c, name: r, defaultValue: y, exact: !0 }),
    p = WE({ control: c, name: r, exact: !0 }),
    b = Oe.useRef(a),
    x = Oe.useRef(void 0),
    _ = Oe.useRef(
      c.register(r, {
        ...a.rules,
        value: v,
        ...(ln(a.disabled) ? { disabled: a.disabled } : {}),
      })
    );
  b.current = a;
  const M = Oe.useMemo(
      () =>
        Object.defineProperties(
          {},
          {
            invalid: { enumerable: !0, get: () => !!he(p.errors, r) },
            isDirty: { enumerable: !0, get: () => !!he(p.dirtyFields, r) },
            isTouched: { enumerable: !0, get: () => !!he(p.touchedFields, r) },
            isValidating: {
              enumerable: !0,
              get: () => !!he(p.validatingFields, r),
            },
            error: { enumerable: !0, get: () => he(p.errors, r) },
          }
        ),
      [p, r]
    ),
    z = Oe.useCallback(
      (Y) =>
        _.current.onChange({
          target: { value: Mv(Y), name: r },
          type: lo.CHANGE,
        }),
      [r]
    ),
    X = Oe.useCallback(
      () =>
        _.current.onBlur({
          target: { value: he(c._formValues, r), name: r },
          type: lo.BLUR,
        }),
      [r, c._formValues]
    ),
    P = Oe.useCallback(
      (Y) => {
        const k = he(c._fields, r);
        k &&
          Y &&
          (k._f.ref = {
            focus: () => Y.focus && Y.focus(),
            select: () => Y.select && Y.select(),
            setCustomValidity: (ne) => Y.setCustomValidity(ne),
            reportValidity: () => Y.reportValidity(),
          });
      },
      [c._fields, r]
    ),
    G = Oe.useMemo(
      () => ({
        name: r,
        value: v,
        ...(ln(s) || p.disabled ? { disabled: p.disabled || s } : {}),
        onChange: z,
        onBlur: X,
        ref: P,
      }),
      [r, s, p.disabled, z, X, P, v]
    );
  return (
    Oe.useEffect(() => {
      const Y = c._options.shouldUnregister || f,
        k = x.current;
      (k && k !== r && !h && c.unregister(k),
        c.register(r, {
          ...b.current.rules,
          ...(ln(b.current.disabled) ? { disabled: b.current.disabled } : {}),
        }));
      const ne = (Z, W) => {
        const $ = he(c._fields, Z);
        $ && $._f && ($._f.mount = W);
      };
      if ((ne(r, !0), Y)) {
        const Z = bt(he(c._options.defaultValues, r, b.current.defaultValue));
        (Pe(c._defaultValues, r, Z),
          ut(he(c._formValues, r)) && Pe(c._formValues, r, Z));
      }
      return (
        !h && c.register(r),
        (x.current = r),
        () => {
          (h ? Y && !c._state.action : Y) ? c.unregister(r) : ne(r, !1);
        }
      );
    }, [r, c, h, f]),
    Oe.useEffect(() => {
      c._setDisabledField({ disabled: s, name: r });
    }, [s, r, c]),
    Oe.useMemo(() => ({ field: G, formState: p, fieldState: M }), [G, p, M])
  );
}
const ex = (a) => a.render(IE(a));
var eA = (a, i, r, s, c) =>
    i
      ? {
          ...r[a],
          types: { ...(r[a] && r[a].types ? r[a].types : {}), [s]: c || !0 },
        }
      : {},
  vu = (a) => (Array.isArray(a) ? a : [a]),
  sy = () => {
    let a = [];
    return {
      get observers() {
        return a;
      },
      next: (c) => {
        for (const f of a) f.next && f.next(c);
      },
      subscribe: (c) => (
        a.push(c),
        {
          unsubscribe: () => {
            a = a.filter((f) => f !== c);
          },
        }
      ),
      unsubscribe: () => {
        a = [];
      },
    };
  };
function Uv(a, i) {
  const r = {};
  for (const s in a)
    if (a.hasOwnProperty(s)) {
      const c = a[s],
        f = i[s];
      if (c && gt(c) && f) {
        const m = Uv(c, f);
        gt(m) && (r[s] = m);
      } else a[s] && (r[s] = f);
    }
  return r;
}
var kt = (a) => gt(a) && !Object.keys(a).length,
  Df = (a) => a.type === "file",
  Dn = (a) => typeof a == "function",
  ao = (a) => {
    if (!_f) return !1;
    const i = a ? a.ownerDocument : 0;
    return (
      a instanceof
      (i && i.defaultView ? i.defaultView.HTMLElement : HTMLElement)
    );
  },
  Nv = (a) => a.type === "select-multiple",
  zf = (a) => a.type === "radio",
  tA = (a) => zf(a) || xu(a),
  Yc = (a) => ao(a) && a.isConnected;
function nA(a, i) {
  const r = i.slice(0, -1).length;
  let s = 0;
  for (; s < r; ) a = ut(a) ? s++ : a[i[s++]];
  return a;
}
function lA(a) {
  for (const i in a) if (a.hasOwnProperty(i) && !ut(a[i])) return !1;
  return !0;
}
function ht(a, i) {
  const r = Array.isArray(i) ? i : go(i) ? [i] : Cf(i),
    s = r.length === 1 ? a : nA(a, r),
    c = r.length - 1,
    f = r[c];
  return (
    s && delete s[f],
    c !== 0 &&
      ((gt(s) && kt(s)) || (Array.isArray(s) && lA(s))) &&
      ht(a, r.slice(0, -1)),
    a
  );
}
var aA = (a) => {
  for (const i in a) if (Dn(a[i])) return !0;
  return !1;
};
function Lv(a) {
  return Array.isArray(a) || (gt(a) && !aA(a));
}
function af(a, i = {}) {
  for (const r in a)
    Lv(a[r])
      ? ((i[r] = Array.isArray(a[r]) ? [] : {}), af(a[r], i[r]))
      : ut(a[r]) || (i[r] = !0);
  return i;
}
function oi(a, i, r) {
  r || (r = af(i));
  for (const s in a)
    Lv(a[s])
      ? ut(i) || lf(r[s])
        ? (r[s] = af(a[s], Array.isArray(a[s]) ? [] : {}))
        : oi(a[s], Xt(i) ? {} : i[s], r[s])
      : (r[s] = !ml(a[s], i[s]));
  return r;
}
const cy = { value: !1, isValid: !1 },
  fy = { value: !0, isValid: !0 };
var Vv = (a) => {
    if (Array.isArray(a)) {
      if (a.length > 1) {
        const i = a
          .filter((r) => r && r.checked && !r.disabled)
          .map((r) => r.value);
        return { value: i, isValid: !!i.length };
      }
      return a[0].checked && !a[0].disabled
        ? a[0].attributes && !ut(a[0].attributes.value)
          ? ut(a[0].value) || a[0].value === ""
            ? fy
            : { value: a[0].value, isValid: !0 }
          : fy
        : cy;
    }
    return cy;
  },
  Bv = (a, { valueAsNumber: i, valueAsDate: r, setValueAs: s }) =>
    ut(a)
      ? a
      : i
        ? a === ""
          ? NaN
          : a && +a
        : r && un(a)
          ? new Date(a)
          : s
            ? s(a)
            : a;
const dy = { isValid: !1, value: null };
var Hv = (a) =>
  Array.isArray(a)
    ? a.reduce(
        (i, r) =>
          r && r.checked && !r.disabled ? { isValid: !0, value: r.value } : i,
        dy
      )
    : dy;
function my(a) {
  const i = a.ref;
  return Df(i)
    ? i.files
    : zf(i)
      ? Hv(a.refs).value
      : Nv(i)
        ? [...i.selectedOptions].map(({ value: r }) => r)
        : xu(i)
          ? Vv(a.refs).value
          : Bv(ut(i.value) ? a.ref.value : i.value, a);
}
var iA = (a, i, r, s) => {
    const c = {};
    for (const f of a) {
      const m = he(i, f);
      m && Pe(c, f, m._f);
    }
    return {
      criteriaMode: r,
      names: [...a],
      fields: c,
      shouldUseNativeValidation: s,
    };
  },
  io = (a) => a instanceof RegExp,
  mu = (a) =>
    ut(a)
      ? a
      : io(a)
        ? a.source
        : gt(a)
          ? io(a.value)
            ? a.value.source
            : a.value
          : a,
  hy = (a) => ({
    isOnSubmit: !a || a === On.onSubmit,
    isOnBlur: a === On.onBlur,
    isOnChange: a === On.onChange,
    isOnAll: a === On.all,
    isOnTouch: a === On.onTouched,
  });
const gy = "AsyncFunction";
var uA = (a) =>
    !!a &&
    !!a.validate &&
    !!(
      (Dn(a.validate) && a.validate.constructor.name === gy) ||
      (gt(a.validate) &&
        Object.values(a.validate).find((i) => i.constructor.name === gy))
    ),
  rA = (a) =>
    a.mount &&
    (a.required ||
      a.min ||
      a.max ||
      a.maxLength ||
      a.minLength ||
      a.pattern ||
      a.validate),
  yy = (a, i, r) =>
    !r &&
    (i.watchAll ||
      i.watch.has(a) ||
      [...i.watch].some(
        (s) => a.startsWith(s) && /^\.\w+/.test(a.slice(s.length))
      ));
const pu = (a, i, r, s) => {
  for (const c of r || Object.keys(a)) {
    const f = he(a, c);
    if (f) {
      const { _f: m, ...h } = f;
      if (m) {
        if (m.refs && m.refs[0] && i(m.refs[0], c) && !s) return !0;
        if (m.ref && i(m.ref, m.name) && !s) return !0;
        if (pu(h, i)) break;
      } else if (gt(h) && pu(h, i)) break;
    }
  }
};
function vy(a, i, r) {
  const s = he(a, r);
  if (s || go(r)) return { error: s, name: r };
  const c = r.split(".");
  for (; c.length; ) {
    const f = c.join("."),
      m = he(i, f),
      h = he(a, f);
    if (m && !Array.isArray(m) && r !== f) return { name: r };
    if (h && h.type) return { name: f, error: h };
    if (h && h.root && h.root.type) return { name: `${f}.root`, error: h.root };
    c.pop();
  }
  return { name: r };
}
var oA = (a, i, r, s) => {
    r(a);
    const { name: c, ...f } = a;
    return (
      kt(f) ||
      Object.keys(f).length >= Object.keys(i).length ||
      Object.keys(f).find((m) => i[m] === (!s || On.all))
    );
  },
  sA = (a, i, r) =>
    !a ||
    !i ||
    a === i ||
    vu(a).some((s) => s && (r ? s === i : s.startsWith(i) || i.startsWith(s))),
  cA = (a, i, r, s, c) =>
    c.isOnAll
      ? !1
      : !r && c.isOnTouch
        ? !(i || a)
        : (r ? s.isOnBlur : c.isOnBlur)
          ? !a
          : (r ? s.isOnChange : c.isOnChange)
            ? a
            : !0,
  fA = (a, i) => !Rf(he(a, i)).length && ht(a, i),
  dA = (a, i, r) => {
    const s = vu(he(a, r));
    return (Pe(s, "root", i[r]), Pe(a, r, s), a);
  };
function py(a, i, r = "validate") {
  if (un(a) || (Array.isArray(a) && a.every(un)) || (ln(a) && !a))
    return { type: r, message: un(a) ? a : "", ref: i };
}
var ui = (a) => (gt(a) && !io(a) ? a : { value: a, message: "" }),
  by = async (a, i, r, s, c, f) => {
    const {
        ref: m,
        refs: h,
        required: y,
        maxLength: v,
        minLength: p,
        min: b,
        max: x,
        pattern: _,
        validate: M,
        name: z,
        valueAsNumber: X,
        mount: P,
      } = a._f,
      G = he(r, z);
    if (!P || i.has(z)) return {};
    const Y = h ? h[0] : m,
      k = (Q) => {
        c &&
          Y.reportValidity &&
          (Y.setCustomValidity(ln(Q) ? "" : Q || ""), Y.reportValidity());
      },
      ne = {},
      Z = zf(m),
      W = xu(m),
      $ = Z || W,
      me =
        ((X || Df(m)) && ut(m.value) && ut(G)) ||
        (ao(m) && m.value === "") ||
        G === "" ||
        (Array.isArray(G) && !G.length),
      ge = eA.bind(null, z, s, ne),
      ce = (Q, B, te, oe = fl.maxLength, R = fl.minLength) => {
        const O = Q ? B : te;
        ne[z] = { type: Q ? oe : R, message: O, ref: m, ...ge(Q ? oe : R, O) };
      };
    if (
      f
        ? !Array.isArray(G) || !G.length
        : y &&
          ((!$ && (me || Xt(G))) ||
            (ln(G) && !G) ||
            (W && !Vv(h).isValid) ||
            (Z && !Hv(h).isValid))
    ) {
      const { value: Q, message: B } = un(y)
        ? { value: !!y, message: y }
        : ui(y);
      if (
        Q &&
        ((ne[z] = {
          type: fl.required,
          message: B,
          ref: Y,
          ...ge(fl.required, B),
        }),
        !s)
      )
        return (k(B), ne);
    }
    if (!me && (!Xt(b) || !Xt(x))) {
      let Q, B;
      const te = ui(x),
        oe = ui(b);
      if (!Xt(G) && !isNaN(G)) {
        const R = m.valueAsNumber || (G && +G);
        (Xt(te.value) || (Q = R > te.value),
          Xt(oe.value) || (B = R < oe.value));
      } else {
        const R = m.valueAsDate || new Date(G),
          O = (se) => new Date(new Date().toDateString() + " " + se),
          w = m.type == "time",
          ue = m.type == "week";
        (un(te.value) &&
          G &&
          (Q = w
            ? O(G) > O(te.value)
            : ue
              ? G > te.value
              : R > new Date(te.value)),
          un(oe.value) &&
            G &&
            (B = w
              ? O(G) < O(oe.value)
              : ue
                ? G < oe.value
                : R < new Date(oe.value)));
      }
      if ((Q || B) && (ce(!!Q, te.message, oe.message, fl.max, fl.min), !s))
        return (k(ne[z].message), ne);
    }
    if ((v || p) && !me && (un(G) || (f && Array.isArray(G)))) {
      const Q = ui(v),
        B = ui(p),
        te = !Xt(Q.value) && G.length > +Q.value,
        oe = !Xt(B.value) && G.length < +B.value;
      if ((te || oe) && (ce(te, Q.message, B.message), !s))
        return (k(ne[z].message), ne);
    }
    if (_ && !me && un(G)) {
      const { value: Q, message: B } = ui(_);
      if (
        io(Q) &&
        !G.match(Q) &&
        ((ne[z] = {
          type: fl.pattern,
          message: B,
          ref: m,
          ...ge(fl.pattern, B),
        }),
        !s)
      )
        return (k(B), ne);
    }
    if (M) {
      if (Dn(M)) {
        const Q = await M(G, r),
          B = py(Q, Y);
        if (B && ((ne[z] = { ...B, ...ge(fl.validate, B.message) }), !s))
          return (k(B.message), ne);
      } else if (gt(M)) {
        let Q = {};
        for (const B in M) {
          if (!kt(Q) && !s) break;
          const te = py(await M[B](G, r), Y, B);
          te &&
            ((Q = { ...te, ...ge(B, te.message) }),
            k(te.message),
            s && (ne[z] = Q));
        }
        if (!kt(Q) && ((ne[z] = { ref: Y, ...Q }), !s)) return ne;
      }
    }
    return (k(!0), ne);
  };
const mA = {
  mode: On.onSubmit,
  reValidateMode: On.onChange,
  shouldFocusError: !0,
};
function hA(a = {}) {
  let i = { ...mA, ...a },
    r = {
      submitCount: 0,
      isDirty: !1,
      isReady: !1,
      isLoading: Dn(i.defaultValues),
      isValidating: !1,
      isSubmitted: !1,
      isSubmitting: !1,
      isSubmitSuccessful: !1,
      isValid: !1,
      touchedFields: {},
      dirtyFields: {},
      validatingFields: {},
      errors: i.errors || {},
      disabled: i.disabled || !1,
    },
    s = {},
    c =
      gt(i.defaultValues) || gt(i.values)
        ? bt(i.defaultValues || i.values) || {}
        : {},
    f = i.shouldUnregister ? {} : bt(c),
    m = { action: !1, mount: !1, watch: !1 },
    h = {
      mount: new Set(),
      disabled: new Set(),
      unMount: new Set(),
      array: new Set(),
      watch: new Set(),
    },
    y,
    v = 0;
  const p = {
    isDirty: !1,
    dirtyFields: !1,
    validatingFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1,
  };
  let b = { ...p };
  const x = { array: sy(), state: sy() },
    _ = i.criteriaMode === On.all,
    M = (A) => (U) => {
      (clearTimeout(v), (v = setTimeout(A, U)));
    },
    z = async (A) => {
      if (!i.disabled && (p.isValid || b.isValid || A)) {
        const U = i.resolver ? kt((await W()).errors) : await me(s, !0);
        U !== r.isValid && x.state.next({ isValid: U });
      }
    },
    X = (A, U) => {
      !i.disabled &&
        (p.isValidating ||
          p.validatingFields ||
          b.isValidating ||
          b.validatingFields) &&
        ((A || Array.from(h.mount)).forEach((K) => {
          K && (U ? Pe(r.validatingFields, K, U) : ht(r.validatingFields, K));
        }),
        x.state.next({
          validatingFields: r.validatingFields,
          isValidating: !kt(r.validatingFields),
        }));
    },
    P = (A, U = [], K, de, ie = !0, re = !0) => {
      if (de && K && !i.disabled) {
        if (((m.action = !0), re && Array.isArray(he(s, A)))) {
          const Ee = K(he(s, A), de.argA, de.argB);
          ie && Pe(s, A, Ee);
        }
        if (re && Array.isArray(he(r.errors, A))) {
          const Ee = K(he(r.errors, A), de.argA, de.argB);
          (ie && Pe(r.errors, A, Ee), fA(r.errors, A));
        }
        if (
          (p.touchedFields || b.touchedFields) &&
          re &&
          Array.isArray(he(r.touchedFields, A))
        ) {
          const Ee = K(he(r.touchedFields, A), de.argA, de.argB);
          ie && Pe(r.touchedFields, A, Ee);
        }
        ((p.dirtyFields || b.dirtyFields) && (r.dirtyFields = oi(c, f)),
          x.state.next({
            name: A,
            isDirty: ce(A, U),
            dirtyFields: r.dirtyFields,
            errors: r.errors,
            isValid: r.isValid,
          }));
      } else Pe(f, A, U);
    },
    G = (A, U) => {
      (Pe(r.errors, A, U), x.state.next({ errors: r.errors }));
    },
    Y = (A) => {
      ((r.errors = A), x.state.next({ errors: r.errors, isValid: !1 }));
    },
    k = (A, U, K, de) => {
      const ie = he(s, A);
      if (ie) {
        const re = he(f, A, ut(K) ? he(c, A) : K);
        (ut(re) || (de && de.defaultChecked) || U
          ? Pe(f, A, U ? re : my(ie._f))
          : te(A, re),
          m.mount && z());
      }
    },
    ne = (A, U, K, de, ie) => {
      let re = !1,
        Ee = !1;
      const Ve = { name: A };
      if (!i.disabled) {
        if (!K || de) {
          (p.isDirty || b.isDirty) &&
            ((Ee = r.isDirty),
            (r.isDirty = Ve.isDirty = ce()),
            (re = Ee !== Ve.isDirty));
          const He = ml(he(c, A), U);
          ((Ee = !!he(r.dirtyFields, A)),
            He ? ht(r.dirtyFields, A) : Pe(r.dirtyFields, A, !0),
            (Ve.dirtyFields = r.dirtyFields),
            (re = re || ((p.dirtyFields || b.dirtyFields) && Ee !== !He)));
        }
        if (K) {
          const He = he(r.touchedFields, A);
          He ||
            (Pe(r.touchedFields, A, K),
            (Ve.touchedFields = r.touchedFields),
            (re = re || ((p.touchedFields || b.touchedFields) && He !== K)));
        }
        re && ie && x.state.next(Ve);
      }
      return re ? Ve : {};
    },
    Z = (A, U, K, de) => {
      const ie = he(r.errors, A),
        re = (p.isValid || b.isValid) && ln(U) && r.isValid !== U;
      if (
        (i.delayError && K
          ? ((y = M(() => G(A, K))), y(i.delayError))
          : (clearTimeout(v),
            (y = null),
            K ? Pe(r.errors, A, K) : ht(r.errors, A)),
        (K ? !ml(ie, K) : ie) || !kt(de) || re)
      ) {
        const Ee = {
          ...de,
          ...(re && ln(U) ? { isValid: U } : {}),
          errors: r.errors,
          name: A,
        };
        ((r = { ...r, ...Ee }), x.state.next(Ee));
      }
    },
    W = async (A) => {
      X(A, !0);
      const U = await i.resolver(
        f,
        i.context,
        iA(A || h.mount, s, i.criteriaMode, i.shouldUseNativeValidation)
      );
      return (X(A), U);
    },
    $ = async (A) => {
      const { errors: U } = await W(A);
      if (A)
        for (const K of A) {
          const de = he(U, K);
          de ? Pe(r.errors, K, de) : ht(r.errors, K);
        }
      else r.errors = U;
      return U;
    },
    me = async (A, U, K = { valid: !0 }) => {
      for (const de in A) {
        const ie = A[de];
        if (ie) {
          const { _f: re, ...Ee } = ie;
          if (re) {
            const Ve = h.array.has(re.name),
              He = ie._f && uA(ie._f);
            He && p.validatingFields && X([re.name], !0);
            const yt = await by(
              ie,
              h.disabled,
              f,
              _,
              i.shouldUseNativeValidation && !U,
              Ve
            );
            if (
              (He && p.validatingFields && X([re.name]),
              yt[re.name] && ((K.valid = !1), U))
            )
              break;
            !U &&
              (he(yt, re.name)
                ? Ve
                  ? dA(r.errors, yt, re.name)
                  : Pe(r.errors, re.name, yt[re.name])
                : ht(r.errors, re.name));
          }
          !kt(Ee) && (await me(Ee, U, K));
        }
      }
      return K.valid;
    },
    ge = () => {
      for (const A of h.unMount) {
        const U = he(s, A);
        U &&
          (U._f.refs ? U._f.refs.every((K) => !Yc(K)) : !Yc(U._f.ref)) &&
          le(A);
      }
      h.unMount = new Set();
    },
    ce = (A, U) => !i.disabled && (A && U && Pe(f, A, U), !ml(se(), c)),
    Q = (A, U, K) =>
      zv(A, h, { ...(m.mount ? f : ut(U) ? c : un(A) ? { [A]: U } : U) }, K, U),
    B = (A) =>
      Rf(he(m.mount ? f : c, A, i.shouldUnregister ? he(c, A, []) : [])),
    te = (A, U, K = {}) => {
      const de = he(s, A);
      let ie = U;
      if (de) {
        const re = de._f;
        re &&
          (!re.disabled && Pe(f, A, Bv(U, re)),
          (ie = ao(re.ref) && Xt(U) ? "" : U),
          Nv(re.ref)
            ? [...re.ref.options].forEach(
                (Ee) => (Ee.selected = ie.includes(Ee.value))
              )
            : re.refs
              ? xu(re.ref)
                ? re.refs.forEach((Ee) => {
                    (!Ee.defaultChecked || !Ee.disabled) &&
                      (Array.isArray(ie)
                        ? (Ee.checked = !!ie.find((Ve) => Ve === Ee.value))
                        : (Ee.checked = ie === Ee.value || !!ie));
                  })
                : re.refs.forEach((Ee) => (Ee.checked = Ee.value === ie))
              : Df(re.ref)
                ? (re.ref.value = "")
                : ((re.ref.value = ie),
                  re.ref.type || x.state.next({ name: A, values: bt(f) })));
      }
      ((K.shouldDirty || K.shouldTouch) &&
        ne(A, ie, K.shouldTouch, K.shouldDirty, !0),
        K.shouldValidate && ue(A));
    },
    oe = (A, U, K) => {
      for (const de in U) {
        if (!U.hasOwnProperty(de)) return;
        const ie = U[de],
          re = A + "." + de,
          Ee = he(s, re);
        (h.array.has(A) || gt(ie) || (Ee && !Ee._f)) && !ya(ie)
          ? oe(re, ie, K)
          : te(re, ie, K);
      }
    },
    R = (A, U, K = {}) => {
      const de = he(s, A),
        ie = h.array.has(A),
        re = bt(U);
      (Pe(f, A, re),
        ie
          ? (x.array.next({ name: A, values: bt(f) }),
            (p.isDirty || p.dirtyFields || b.isDirty || b.dirtyFields) &&
              K.shouldDirty &&
              x.state.next({
                name: A,
                dirtyFields: oi(c, f),
                isDirty: ce(A, re),
              }))
          : de && !de._f && !Xt(re)
            ? oe(A, re, K)
            : te(A, re, K),
        yy(A, h) && x.state.next({ ...r, name: A }),
        x.state.next({ name: m.mount ? A : void 0, values: bt(f) }));
    },
    O = async (A) => {
      m.mount = !0;
      const U = A.target;
      let K = U.name,
        de = !0;
      const ie = he(s, K),
        re = (He) => {
          de =
            Number.isNaN(He) ||
            (ya(He) && isNaN(He.getTime())) ||
            ml(He, he(f, K, He));
        },
        Ee = hy(i.mode),
        Ve = hy(i.reValidateMode);
      if (ie) {
        let He, yt;
        const Kt = U.type ? my(ie._f) : Mv(A),
          Jt = A.type === lo.BLUR || A.type === lo.FOCUS_OUT,
          Sa =
            (!rA(ie._f) && !i.resolver && !he(r.errors, K) && !ie._f.deps) ||
            cA(Jt, he(r.touchedFields, K), r.isSubmitted, Ve, Ee),
          sn = yy(K, h, Jt);
        (Pe(f, K, Kt),
          Jt
            ? (!U || !U.readOnly) &&
              (ie._f.onBlur && ie._f.onBlur(A), y && y(0))
            : ie._f.onChange && ie._f.onChange(A));
        const st = ne(K, Kt, Jt),
          Ft = !kt(st) || sn;
        if ((!Jt && x.state.next({ name: K, type: A.type, values: bt(f) }), Sa))
          return (
            (p.isValid || b.isValid) &&
              (i.mode === "onBlur" ? Jt && z() : Jt || z()),
            Ft && x.state.next({ name: K, ...(sn ? {} : st) })
          );
        if ((!Jt && sn && x.state.next({ ...r }), i.resolver)) {
          const { errors: De } = await W([K]);
          if ((re(Kt), de)) {
            const St = vy(r.errors, s, K),
              zt = vy(De, s, St.name || K);
            ((He = zt.error), (K = zt.name), (yt = kt(De)));
          }
        } else
          (X([K], !0),
            (He = (await by(ie, h.disabled, f, _, i.shouldUseNativeValidation))[
              K
            ]),
            X([K]),
            re(Kt),
            de &&
              (He
                ? (yt = !1)
                : (p.isValid || b.isValid) && (yt = await me(s, !0))));
        de &&
          (ie._f.deps &&
            (!Array.isArray(ie._f.deps) || ie._f.deps.length > 0) &&
            ue(ie._f.deps),
          Z(K, yt, He, st));
      }
    },
    w = (A, U) => {
      if (he(r.errors, U) && A.focus) return (A.focus(), 1);
    },
    ue = async (A, U = {}) => {
      let K, de;
      const ie = vu(A);
      if (i.resolver) {
        const re = await $(ut(A) ? A : ie);
        ((K = kt(re)), (de = A ? !ie.some((Ee) => he(re, Ee)) : K));
      } else
        A
          ? ((de = (
              await Promise.all(
                ie.map(async (re) => {
                  const Ee = he(s, re);
                  return await me(Ee && Ee._f ? { [re]: Ee } : Ee);
                })
              )
            ).every(Boolean)),
            !(!de && !r.isValid) && z())
          : (de = K = await me(s));
      return (
        x.state.next({
          ...(!un(A) || ((p.isValid || b.isValid) && K !== r.isValid)
            ? {}
            : { name: A }),
          ...(i.resolver || !A ? { isValid: K } : {}),
          errors: r.errors,
        }),
        U.shouldFocus && !de && pu(s, w, A ? ie : h.mount),
        de
      );
    },
    se = (A, U) => {
      let K = { ...(m.mount ? f : c) };
      return (
        U && (K = Uv(U.dirtyFields ? r.dirtyFields : r.touchedFields, K)),
        ut(A) ? K : un(A) ? he(K, A) : A.map((de) => he(K, de))
      );
    },
    S = (A, U) => ({
      invalid: !!he((U || r).errors, A),
      isDirty: !!he((U || r).dirtyFields, A),
      error: he((U || r).errors, A),
      isValidating: !!he(r.validatingFields, A),
      isTouched: !!he((U || r).touchedFields, A),
    }),
    V = (A) => {
      (A && vu(A).forEach((U) => ht(r.errors, U)),
        x.state.next({ errors: A ? r.errors : {} }));
    },
    J = (A, U, K) => {
      const de = (he(s, A, { _f: {} })._f || {}).ref,
        ie = he(r.errors, A) || {},
        { ref: re, message: Ee, type: Ve, ...He } = ie;
      (Pe(r.errors, A, { ...He, ...U, ref: de }),
        x.state.next({ name: A, errors: r.errors, isValid: !1 }),
        K && K.shouldFocus && de && de.focus && de.focus());
    },
    ae = (A, U) =>
      Dn(A)
        ? x.state.subscribe({
            next: (K) => "values" in K && A(Q(void 0, U), K),
          })
        : Q(A, U, !0),
    ye = (A) =>
      x.state.subscribe({
        next: (U) => {
          sA(A.name, U.name, A.exact) &&
            oA(U, A.formState || p, wt, A.reRenderRoot) &&
            A.callback({ values: { ...f }, ...r, ...U, defaultValues: c });
        },
      }).unsubscribe,
    q = (A) => (
      (m.mount = !0),
      (b = { ...b, ...A.formState }),
      ye({ ...A, formState: b })
    ),
    le = (A, U = {}) => {
      for (const K of A ? vu(A) : h.mount)
        (h.mount.delete(K),
          h.array.delete(K),
          U.keepValue || (ht(s, K), ht(f, K)),
          !U.keepError && ht(r.errors, K),
          !U.keepDirty && ht(r.dirtyFields, K),
          !U.keepTouched && ht(r.touchedFields, K),
          !U.keepIsValidating && ht(r.validatingFields, K),
          !i.shouldUnregister && !U.keepDefaultValue && ht(c, K));
      (x.state.next({ values: bt(f) }),
        x.state.next({ ...r, ...(U.keepDirty ? { isDirty: ce() } : {}) }),
        !U.keepIsValid && z());
    },
    Ae = ({ disabled: A, name: U }) => {
      ((ln(A) && m.mount) || A || h.disabled.has(U)) &&
        (A ? h.disabled.add(U) : h.disabled.delete(U));
    },
    fe = (A, U = {}) => {
      let K = he(s, A);
      const de = ln(U.disabled) || ln(i.disabled);
      return (
        Pe(s, A, {
          ...(K || {}),
          _f: {
            ...(K && K._f ? K._f : { ref: { name: A } }),
            name: A,
            mount: !0,
            ...U,
          },
        }),
        h.mount.add(A),
        K
          ? Ae({ disabled: ln(U.disabled) ? U.disabled : i.disabled, name: A })
          : k(A, !0, U.value),
        {
          ...(de ? { disabled: U.disabled || i.disabled } : {}),
          ...(i.progressive
            ? {
                required: !!U.required,
                min: mu(U.min),
                max: mu(U.max),
                minLength: mu(U.minLength),
                maxLength: mu(U.maxLength),
                pattern: mu(U.pattern),
              }
            : {}),
          name: A,
          onChange: O,
          onBlur: O,
          ref: (ie) => {
            if (ie) {
              (fe(A, U), (K = he(s, A)));
              const re =
                  (ut(ie.value) &&
                    ie.querySelectorAll &&
                    ie.querySelectorAll("input,select,textarea")[0]) ||
                  ie,
                Ee = tA(re),
                Ve = K._f.refs || [];
              if (Ee ? Ve.find((He) => He === re) : re === K._f.ref) return;
              (Pe(s, A, {
                _f: {
                  ...K._f,
                  ...(Ee
                    ? {
                        refs: [
                          ...Ve.filter(Yc),
                          re,
                          ...(Array.isArray(he(c, A)) ? [{}] : []),
                        ],
                        ref: { type: re.type, name: A },
                      }
                    : { ref: re }),
                },
              }),
                k(A, !1, void 0, re));
            } else
              ((K = he(s, A, {})),
                K._f && (K._f.mount = !1),
                (i.shouldUnregister || U.shouldUnregister) &&
                  !(Ov(h.array, A) && m.action) &&
                  h.unMount.add(A));
          },
        }
      );
    },
    Te = () => i.shouldFocusError && pu(s, w, h.mount),
    qe = (A) => {
      ln(A) &&
        (x.state.next({ disabled: A }),
        pu(
          s,
          (U, K) => {
            const de = he(s, K);
            de &&
              ((U.disabled = de._f.disabled || A),
              Array.isArray(de._f.refs) &&
                de._f.refs.forEach((ie) => {
                  ie.disabled = de._f.disabled || A;
                }));
          },
          0,
          !1
        ));
    },
    Ye = (A, U) => async (K) => {
      let de;
      K && (K.preventDefault && K.preventDefault(), K.persist && K.persist());
      let ie = bt(f);
      if ((x.state.next({ isSubmitting: !0 }), i.resolver)) {
        const { errors: re, values: Ee } = await W();
        ((r.errors = re), (ie = bt(Ee)));
      } else await me(s);
      if (h.disabled.size) for (const re of h.disabled) ht(ie, re);
      if ((ht(r.errors, "root"), kt(r.errors))) {
        x.state.next({ errors: {} });
        try {
          await A(ie, K);
        } catch (re) {
          de = re;
        }
      } else (U && (await U({ ...r.errors }, K)), Te(), setTimeout(Te));
      if (
        (x.state.next({
          isSubmitted: !0,
          isSubmitting: !1,
          isSubmitSuccessful: kt(r.errors) && !de,
          submitCount: r.submitCount + 1,
          errors: r.errors,
        }),
        de)
      )
        throw de;
    },
    Qt = (A, U = {}) => {
      he(s, A) &&
        (ut(U.defaultValue)
          ? R(A, bt(he(c, A)))
          : (R(A, U.defaultValue), Pe(c, A, bt(U.defaultValue))),
        U.keepTouched || ht(r.touchedFields, A),
        U.keepDirty ||
          (ht(r.dirtyFields, A),
          (r.isDirty = U.defaultValue ? ce(A, bt(he(c, A))) : ce())),
        U.keepError || (ht(r.errors, A), p.isValid && z()),
        x.state.next({ ...r }));
    },
    Dt = (A, U = {}) => {
      const K = A ? bt(A) : c,
        de = bt(K),
        ie = kt(A),
        re = ie ? c : de;
      if ((U.keepDefaultValues || (c = K), !U.keepValues)) {
        if (U.keepDirtyValues) {
          const Ee = new Set([...h.mount, ...Object.keys(oi(c, f))]);
          for (const Ve of Array.from(Ee))
            he(r.dirtyFields, Ve) ? Pe(re, Ve, he(f, Ve)) : R(Ve, he(re, Ve));
        } else {
          if (_f && ut(A))
            for (const Ee of h.mount) {
              const Ve = he(s, Ee);
              if (Ve && Ve._f) {
                const He = Array.isArray(Ve._f.refs)
                  ? Ve._f.refs[0]
                  : Ve._f.ref;
                if (ao(He)) {
                  const yt = He.closest("form");
                  if (yt) {
                    yt.reset();
                    break;
                  }
                }
              }
            }
          if (U.keepFieldsRef) for (const Ee of h.mount) R(Ee, he(re, Ee));
          else s = {};
        }
        ((f = i.shouldUnregister ? (U.keepDefaultValues ? bt(c) : {}) : bt(re)),
          x.array.next({ values: { ...re } }),
          x.state.next({ values: { ...re } }));
      }
      ((h = {
        mount: U.keepDirtyValues ? h.mount : new Set(),
        unMount: new Set(),
        array: new Set(),
        disabled: new Set(),
        watch: new Set(),
        watchAll: !1,
        focus: "",
      }),
        (m.mount = !p.isValid || !!U.keepIsValid || !!U.keepDirtyValues),
        (m.watch = !!i.shouldUnregister),
        x.state.next({
          submitCount: U.keepSubmitCount ? r.submitCount : 0,
          isDirty: ie
            ? !1
            : U.keepDirty
              ? r.isDirty
              : !!(U.keepDefaultValues && !ml(A, c)),
          isSubmitted: U.keepIsSubmitted ? r.isSubmitted : !1,
          dirtyFields: ie
            ? {}
            : U.keepDirtyValues
              ? U.keepDefaultValues && f
                ? oi(c, f)
                : r.dirtyFields
              : U.keepDefaultValues && A
                ? oi(c, A)
                : U.keepDirty
                  ? r.dirtyFields
                  : {},
          touchedFields: U.keepTouched ? r.touchedFields : {},
          errors: U.keepErrors ? r.errors : {},
          isSubmitSuccessful: U.keepIsSubmitSuccessful
            ? r.isSubmitSuccessful
            : !1,
          isSubmitting: !1,
          defaultValues: c,
        }));
    },
    Zt = (A, U) => Dt(Dn(A) ? A(f) : A, U),
    We = (A, U = {}) => {
      const K = he(s, A),
        de = K && K._f;
      if (de) {
        const ie = de.refs ? de.refs[0] : de.ref;
        ie.focus &&
          (ie.focus(), U.shouldSelect && Dn(ie.select) && ie.select());
      }
    },
    wt = (A) => {
      r = { ...r, ...A };
    },
    An = {
      control: {
        register: fe,
        unregister: le,
        getFieldState: S,
        handleSubmit: Ye,
        setError: J,
        _subscribe: ye,
        _runSchema: W,
        _focusError: Te,
        _getWatch: Q,
        _getDirty: ce,
        _setValid: z,
        _setFieldArray: P,
        _setDisabledField: Ae,
        _setErrors: Y,
        _getFieldArray: B,
        _reset: Dt,
        _resetDefaultValues: () =>
          Dn(i.defaultValues) &&
          i.defaultValues().then((A) => {
            (Zt(A, i.resetOptions), x.state.next({ isLoading: !1 }));
          }),
        _removeUnmounted: ge,
        _disableForm: qe,
        _subjects: x,
        _proxyFormState: p,
        get _fields() {
          return s;
        },
        get _formValues() {
          return f;
        },
        get _state() {
          return m;
        },
        set _state(A) {
          m = A;
        },
        get _defaultValues() {
          return c;
        },
        get _names() {
          return h;
        },
        set _names(A) {
          h = A;
        },
        get _formState() {
          return r;
        },
        get _options() {
          return i;
        },
        set _options(A) {
          i = { ...i, ...A };
        },
      },
      subscribe: q,
      trigger: ue,
      register: fe,
      handleSubmit: Ye,
      watch: ae,
      setValue: R,
      getValues: se,
      reset: Zt,
      resetField: Qt,
      clearErrors: V,
      unregister: le,
      setError: J,
      setFocus: We,
      getFieldState: S,
    };
  return { ...An, formControl: An };
}
function tx(a = {}) {
  const i = Oe.useRef(void 0),
    r = Oe.useRef(void 0),
    [s, c] = Oe.useState({
      isDirty: !1,
      isValidating: !1,
      isLoading: Dn(a.defaultValues),
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
      defaultValues: Dn(a.defaultValues) ? void 0 : a.defaultValues,
    });
  if (!i.current)
    if (a.formControl)
      ((i.current = { ...a.formControl, formState: s }),
        a.defaultValues &&
          !Dn(a.defaultValues) &&
          a.formControl.reset(a.defaultValues, a.resetOptions));
    else {
      const { formControl: m, ...h } = hA(a);
      i.current = { ...h, formState: s };
    }
  const f = i.current.control;
  return (
    (f._options = a),
    Of(() => {
      const m = f._subscribe({
        formState: f._proxyFormState,
        callback: () => c({ ...f._formState }),
        reRenderRoot: !0,
      });
      return (
        c((h) => ({ ...h, isReady: !0 })),
        (f._formState.isReady = !0),
        m
      );
    }, [f]),
    Oe.useEffect(() => f._disableForm(a.disabled), [f, a.disabled]),
    Oe.useEffect(() => {
      (a.mode && (f._options.mode = a.mode),
        a.reValidateMode && (f._options.reValidateMode = a.reValidateMode));
    }, [f, a.mode, a.reValidateMode]),
    Oe.useEffect(() => {
      a.errors && (f._setErrors(a.errors), f._focusError());
    }, [f, a.errors]),
    Oe.useEffect(() => {
      a.shouldUnregister && f._subjects.state.next({ values: f._getWatch() });
    }, [f, a.shouldUnregister]),
    Oe.useEffect(() => {
      if (f._proxyFormState.isDirty) {
        const m = f._getDirty();
        m !== s.isDirty && f._subjects.state.next({ isDirty: m });
      }
    }, [f, s.isDirty]),
    Oe.useEffect(() => {
      a.values && !ml(a.values, r.current)
        ? (f._reset(a.values, {
            keepFieldsRef: !0,
            ...f._options.resetOptions,
          }),
          (r.current = a.values),
          c((m) => ({ ...m })))
        : f._resetDefaultValues();
    }, [f, a.values]),
    Oe.useEffect(() => {
      (f._state.mount || (f._setValid(), (f._state.mount = !0)),
        f._state.watch &&
          ((f._state.watch = !1), f._subjects.state.next({ ...f._formState })),
        f._removeUnmounted());
    }),
    (i.current.formState = Dv(s, f)),
    i.current
  );
}
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const gA = (a) => a.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  yA = (a) =>
    a.replace(/^([A-Z])|[\s-_]+(\w)/g, (i, r, s) =>
      s ? s.toUpperCase() : r.toLowerCase()
    ),
  Sy = (a) => {
    const i = yA(a);
    return i.charAt(0).toUpperCase() + i.slice(1);
  },
  Yv = (...a) =>
    a
      .filter((i, r, s) => !!i && i.trim() !== "" && s.indexOf(i) === r)
      .join(" ")
      .trim(),
  vA = (a) => {
    for (const i in a)
      if (i.startsWith("aria-") || i === "role" || i === "title") return !0;
  };
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var pA = {
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
 */ const bA = C.forwardRef(
  (
    {
      color: a = "currentColor",
      size: i = 24,
      strokeWidth: r = 2,
      absoluteStrokeWidth: s,
      className: c = "",
      children: f,
      iconNode: m,
      ...h
    },
    y
  ) =>
    C.createElement(
      "svg",
      {
        ref: y,
        ...pA,
        width: i,
        height: i,
        stroke: a,
        strokeWidth: s ? (Number(r) * 24) / Number(i) : r,
        className: Yv("lucide", c),
        ...(!f && !vA(h) && { "aria-hidden": "true" }),
        ...h,
      },
      [
        ...m.map(([v, p]) => C.createElement(v, p)),
        ...(Array.isArray(f) ? f : [f]),
      ]
    )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const yo = (a, i) => {
  const r = C.forwardRef(({ className: s, ...c }, f) =>
    C.createElement(bA, {
      ref: f,
      iconNode: i,
      className: Yv(`lucide-${gA(Sy(a))}`, `lucide-${a}`, s),
      ...c,
    })
  );
  return ((r.displayName = Sy(a)), r);
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const SA = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]],
  nx = yo("chevron-right", SA);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const EA = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
    ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }],
  ],
  lx = yo("circle-alert", EA);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const AA = [
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
  ax = yo("eye-off", AA);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const xA = [
    [
      "path",
      {
        d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
        key: "1nclc0",
      },
    ],
    ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
  ],
  ix = yo("eye", xA);
class TA extends $r {
  signupLink;
  resetPasswordLink;
  editIdentifierLink;
  data;
  constructor(i) {
    (super(i),
      (this.signupLink = Ky(i)),
      (this.resetPasswordLink = Jy(i)),
      (this.editIdentifierLink = y1(i)),
      (this.data = $r.getScreenData(i)));
  }
}
class _A extends sf {
  constructor(i) {
    (super(i),
      (this.isSignupEnabled = Fy(i)),
      (this.isForgotPasswordEnabled = $y(i)),
      (this.isPasskeyEnabled = Wy(i)),
      (this.getPasswordPolicy = () => S1(i)),
      (this.getUsernamePolicy = () => Py(i)),
      (this.getAllowedIdentifiers = () => A1(i)));
  }
  isSignupEnabled;
  isForgotPasswordEnabled;
  isPasskeyEnabled;
  getPasswordPolicy;
  getUsernamePolicy;
  getAllowedIdentifiers;
}
class uf extends cf {
  static screenIdentifier = ky.LOGIN_PASSWORD;
  screen;
  transaction;
  constructor() {
    super();
    const i = this.getContext("screen"),
      r = this.getContext("transaction");
    ((this.screen = new TA(i)), (this.transaction = new _A(r)));
  }
  async login(i) {
    const r = {
        state: this.transaction.state,
        telemetry: [uf.screenIdentifier, "login"],
      },
      s = await Zy();
    await new ha(r).submitData({ ...i, ...s });
  }
  async federatedLogin(i) {
    const r = {
      state: this.transaction.state,
      telemetry: [uf.screenIdentifier, "federatedLogin"],
    };
    await new ha(r).submitData(i);
  }
}
var qc = { exports: {} },
  hu = {},
  jc = { exports: {} },
  Gc = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ey;
function RA() {
  return (
    Ey ||
      ((Ey = 1),
      (function (a) {
        function i(R, O) {
          var w = R.length;
          R.push(O);
          e: for (; 0 < w; ) {
            var ue = (w - 1) >>> 1,
              se = R[ue];
            if (0 < c(se, O)) ((R[ue] = O), (R[w] = se), (w = ue));
            else break e;
          }
        }
        function r(R) {
          return R.length === 0 ? null : R[0];
        }
        function s(R) {
          if (R.length === 0) return null;
          var O = R[0],
            w = R.pop();
          if (w !== O) {
            R[0] = w;
            e: for (var ue = 0, se = R.length, S = se >>> 1; ue < S; ) {
              var V = 2 * (ue + 1) - 1,
                J = R[V],
                ae = V + 1,
                ye = R[ae];
              if (0 > c(J, w))
                ae < se && 0 > c(ye, J)
                  ? ((R[ue] = ye), (R[ae] = w), (ue = ae))
                  : ((R[ue] = J), (R[V] = w), (ue = V));
              else if (ae < se && 0 > c(ye, w))
                ((R[ue] = ye), (R[ae] = w), (ue = ae));
              else break e;
            }
          }
          return O;
        }
        function c(R, O) {
          var w = R.sortIndex - O.sortIndex;
          return w !== 0 ? w : R.id - O.id;
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
          var m = Date,
            h = m.now();
          a.unstable_now = function () {
            return m.now() - h;
          };
        }
        var y = [],
          v = [],
          p = 1,
          b = null,
          x = 3,
          _ = !1,
          M = !1,
          z = !1,
          X = !1,
          P = typeof setTimeout == "function" ? setTimeout : null,
          G = typeof clearTimeout == "function" ? clearTimeout : null,
          Y = typeof setImmediate < "u" ? setImmediate : null;
        function k(R) {
          for (var O = r(v); O !== null; ) {
            if (O.callback === null) s(v);
            else if (O.startTime <= R)
              (s(v), (O.sortIndex = O.expirationTime), i(y, O));
            else break;
            O = r(v);
          }
        }
        function ne(R) {
          if (((z = !1), k(R), !M))
            if (r(y) !== null) ((M = !0), Z || ((Z = !0), Q()));
            else {
              var O = r(v);
              O !== null && oe(ne, O.startTime - R);
            }
        }
        var Z = !1,
          W = -1,
          $ = 5,
          me = -1;
        function ge() {
          return X ? !0 : !(a.unstable_now() - me < $);
        }
        function ce() {
          if (((X = !1), Z)) {
            var R = a.unstable_now();
            me = R;
            var O = !0;
            try {
              e: {
                ((M = !1), z && ((z = !1), G(W), (W = -1)), (_ = !0));
                var w = x;
                try {
                  t: {
                    for (
                      k(R), b = r(y);
                      b !== null && !(b.expirationTime > R && ge());

                    ) {
                      var ue = b.callback;
                      if (typeof ue == "function") {
                        ((b.callback = null), (x = b.priorityLevel));
                        var se = ue(b.expirationTime <= R);
                        if (((R = a.unstable_now()), typeof se == "function")) {
                          ((b.callback = se), k(R), (O = !0));
                          break t;
                        }
                        (b === r(y) && s(y), k(R));
                      } else s(y);
                      b = r(y);
                    }
                    if (b !== null) O = !0;
                    else {
                      var S = r(v);
                      (S !== null && oe(ne, S.startTime - R), (O = !1));
                    }
                  }
                  break e;
                } finally {
                  ((b = null), (x = w), (_ = !1));
                }
                O = void 0;
              }
            } finally {
              O ? Q() : (Z = !1);
            }
          }
        }
        var Q;
        if (typeof Y == "function")
          Q = function () {
            Y(ce);
          };
        else if (typeof MessageChannel < "u") {
          var B = new MessageChannel(),
            te = B.port2;
          ((B.port1.onmessage = ce),
            (Q = function () {
              te.postMessage(null);
            }));
        } else
          Q = function () {
            P(ce, 0);
          };
        function oe(R, O) {
          W = P(function () {
            R(a.unstable_now());
          }, O);
        }
        ((a.unstable_IdlePriority = 5),
          (a.unstable_ImmediatePriority = 1),
          (a.unstable_LowPriority = 4),
          (a.unstable_NormalPriority = 3),
          (a.unstable_Profiling = null),
          (a.unstable_UserBlockingPriority = 2),
          (a.unstable_cancelCallback = function (R) {
            R.callback = null;
          }),
          (a.unstable_forceFrameRate = function (R) {
            0 > R || 125 < R
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : ($ = 0 < R ? Math.floor(1e3 / R) : 5);
          }),
          (a.unstable_getCurrentPriorityLevel = function () {
            return x;
          }),
          (a.unstable_next = function (R) {
            switch (x) {
              case 1:
              case 2:
              case 3:
                var O = 3;
                break;
              default:
                O = x;
            }
            var w = x;
            x = O;
            try {
              return R();
            } finally {
              x = w;
            }
          }),
          (a.unstable_requestPaint = function () {
            X = !0;
          }),
          (a.unstable_runWithPriority = function (R, O) {
            switch (R) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                R = 3;
            }
            var w = x;
            x = R;
            try {
              return O();
            } finally {
              x = w;
            }
          }),
          (a.unstable_scheduleCallback = function (R, O, w) {
            var ue = a.unstable_now();
            switch (
              (typeof w == "object" && w !== null
                ? ((w = w.delay),
                  (w = typeof w == "number" && 0 < w ? ue + w : ue))
                : (w = ue),
              R)
            ) {
              case 1:
                var se = -1;
                break;
              case 2:
                se = 250;
                break;
              case 5:
                se = 1073741823;
                break;
              case 4:
                se = 1e4;
                break;
              default:
                se = 5e3;
            }
            return (
              (se = w + se),
              (R = {
                id: p++,
                callback: O,
                priorityLevel: R,
                startTime: w,
                expirationTime: se,
                sortIndex: -1,
              }),
              w > ue
                ? ((R.sortIndex = w),
                  i(v, R),
                  r(y) === null &&
                    R === r(v) &&
                    (z ? (G(W), (W = -1)) : (z = !0), oe(ne, w - ue)))
                : ((R.sortIndex = se),
                  i(y, R),
                  M || _ || ((M = !0), Z || ((Z = !0), Q()))),
              R
            );
          }),
          (a.unstable_shouldYield = ge),
          (a.unstable_wrapCallback = function (R) {
            var O = x;
            return function () {
              var w = x;
              x = O;
              try {
                return R.apply(this, arguments);
              } finally {
                x = w;
              }
            };
          }));
      })(Gc)),
    Gc
  );
}
var Ay;
function CA() {
  return (Ay || ((Ay = 1), (jc.exports = RA())), jc.exports);
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var xy;
function wA() {
  if (xy) return hu;
  xy = 1;
  var a = CA(),
    i = rf(),
    r = tv();
  function s(e) {
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
  function c(e) {
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
  function m(e) {
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
  function h(e) {
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
  function y(e) {
    if (f(e) !== e) throw Error(s(188));
  }
  function v(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = f(e)), t === null)) throw Error(s(188));
      return t !== e ? null : e;
    }
    for (var n = e, l = t; ; ) {
      var u = n.return;
      if (u === null) break;
      var o = u.alternate;
      if (o === null) {
        if (((l = u.return), l !== null)) {
          n = l;
          continue;
        }
        break;
      }
      if (u.child === o.child) {
        for (o = u.child; o; ) {
          if (o === n) return (y(u), e);
          if (o === l) return (y(u), t);
          o = o.sibling;
        }
        throw Error(s(188));
      }
      if (n.return !== l.return) ((n = u), (l = o));
      else {
        for (var d = !1, g = u.child; g; ) {
          if (g === n) {
            ((d = !0), (n = u), (l = o));
            break;
          }
          if (g === l) {
            ((d = !0), (l = u), (n = o));
            break;
          }
          g = g.sibling;
        }
        if (!d) {
          for (g = o.child; g; ) {
            if (g === n) {
              ((d = !0), (n = o), (l = u));
              break;
            }
            if (g === l) {
              ((d = !0), (l = o), (n = u));
              break;
            }
            g = g.sibling;
          }
          if (!d) throw Error(s(189));
        }
      }
      if (n.alternate !== l) throw Error(s(190));
    }
    if (n.tag !== 3) throw Error(s(188));
    return n.stateNode.current === n ? e : t;
  }
  function p(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (((t = p(e)), t !== null)) return t;
      e = e.sibling;
    }
    return null;
  }
  var b = Object.assign,
    x = Symbol.for("react.element"),
    _ = Symbol.for("react.transitional.element"),
    M = Symbol.for("react.portal"),
    z = Symbol.for("react.fragment"),
    X = Symbol.for("react.strict_mode"),
    P = Symbol.for("react.profiler"),
    G = Symbol.for("react.consumer"),
    Y = Symbol.for("react.context"),
    k = Symbol.for("react.forward_ref"),
    ne = Symbol.for("react.suspense"),
    Z = Symbol.for("react.suspense_list"),
    W = Symbol.for("react.memo"),
    $ = Symbol.for("react.lazy"),
    me = Symbol.for("react.activity"),
    ge = Symbol.for("react.memo_cache_sentinel"),
    ce = Symbol.iterator;
  function Q(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (ce && e[ce]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var B = Symbol.for("react.client.reference");
  function te(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === B ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case z:
        return "Fragment";
      case P:
        return "Profiler";
      case X:
        return "StrictMode";
      case ne:
        return "Suspense";
      case Z:
        return "SuspenseList";
      case me:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case M:
          return "Portal";
        case Y:
          return e.displayName || "Context";
        case G:
          return (e._context.displayName || "Context") + ".Consumer";
        case k:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case W:
          return (
            (t = e.displayName || null),
            t !== null ? t : te(e.type) || "Memo"
          );
        case $:
          ((t = e._payload), (e = e._init));
          try {
            return te(e(t));
          } catch {}
      }
    return null;
  }
  var oe = Array.isArray,
    R = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    O = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    w = { pending: !1, data: null, method: null, action: null },
    ue = [],
    se = -1;
  function S(e) {
    return { current: e };
  }
  function V(e) {
    0 > se || ((e.current = ue[se]), (ue[se] = null), se--);
  }
  function J(e, t) {
    (se++, (ue[se] = e.current), (e.current = t));
  }
  var ae = S(null),
    ye = S(null),
    q = S(null),
    le = S(null);
  function Ae(e, t) {
    switch ((J(q, t), J(ye, e), J(ae, null), t.nodeType)) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? Kh(e) : 0;
        break;
      default:
        if (((e = t.tagName), (t = t.namespaceURI)))
          ((t = Kh(t)), (e = Jh(t, e)));
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
    (V(ae), J(ae, e));
  }
  function fe() {
    (V(ae), V(ye), V(q));
  }
  function Te(e) {
    e.memoizedState !== null && J(le, e);
    var t = ae.current,
      n = Jh(t, e.type);
    t !== n && (J(ye, e), J(ae, n));
  }
  function qe(e) {
    (ye.current === e && (V(ae), V(ye)),
      le.current === e && (V(le), (iu._currentValue = w)));
  }
  var Ye, Qt;
  function Dt(e) {
    if (Ye === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        ((Ye = (t && t[1]) || ""),
          (Qt =
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
      Ye +
      e +
      Qt
    );
  }
  var Zt = !1;
  function We(e, t) {
    if (!e || Zt) return "";
    Zt = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var l = {
        DetermineComponentFrameRoot: function () {
          try {
            if (t) {
              var ee = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(ee.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(ee, []);
                } catch (j) {
                  var H = j;
                }
                Reflect.construct(e, [], ee);
              } else {
                try {
                  ee.call();
                } catch (j) {
                  H = j;
                }
                e.call(ee.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (j) {
                H = j;
              }
              (ee = e()) &&
                typeof ee.catch == "function" &&
                ee.catch(function () {});
            }
          } catch (j) {
            if (j && H && typeof j.stack == "string") return [j.stack, H.stack];
          }
          return [null, null];
        },
      };
      l.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var u = Object.getOwnPropertyDescriptor(
        l.DetermineComponentFrameRoot,
        "name"
      );
      u &&
        u.configurable &&
        Object.defineProperty(l.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var o = l.DetermineComponentFrameRoot(),
        d = o[0],
        g = o[1];
      if (d && g) {
        var E = d.split(`
`),
          L = g.split(`
`);
        for (
          u = l = 0;
          l < E.length && !E[l].includes("DetermineComponentFrameRoot");

        )
          l++;
        for (; u < L.length && !L[u].includes("DetermineComponentFrameRoot"); )
          u++;
        if (l === E.length || u === L.length)
          for (
            l = E.length - 1, u = L.length - 1;
            1 <= l && 0 <= u && E[l] !== L[u];

          )
            u--;
        for (; 1 <= l && 0 <= u; l--, u--)
          if (E[l] !== L[u]) {
            if (l !== 1 || u !== 1)
              do
                if ((l--, u--, 0 > u || E[l] !== L[u])) {
                  var F =
                    `
` + E[l].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      F.includes("<anonymous>") &&
                      (F = F.replace("<anonymous>", e.displayName)),
                    F
                  );
                }
              while (1 <= l && 0 <= u);
            break;
          }
      }
    } finally {
      ((Zt = !1), (Error.prepareStackTrace = n));
    }
    return (n = e ? e.displayName || e.name : "") ? Dt(n) : "";
  }
  function wt(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return Dt(e.type);
      case 16:
        return Dt("Lazy");
      case 13:
        return e.child !== t && t !== null
          ? Dt("Suspense Fallback")
          : Dt("Suspense");
      case 19:
        return Dt("SuspenseList");
      case 0:
      case 15:
        return We(e.type, !1);
      case 11:
        return We(e.type.render, !1);
      case 1:
        return We(e.type, !0);
      case 31:
        return Dt("Activity");
      default:
        return "";
    }
  }
  function Gn(e) {
    try {
      var t = "",
        n = null;
      do ((t += wt(e, n)), (n = e), (e = e.return));
      while (e);
      return t;
    } catch (l) {
      return (
        `
Error generating stack: ` +
        l.message +
        `
` +
        l.stack
      );
    }
  }
  var An = Object.prototype.hasOwnProperty,
    A = a.unstable_scheduleCallback,
    U = a.unstable_cancelCallback,
    K = a.unstable_shouldYield,
    de = a.unstable_requestPaint,
    ie = a.unstable_now,
    re = a.unstable_getCurrentPriorityLevel,
    Ee = a.unstable_ImmediatePriority,
    Ve = a.unstable_UserBlockingPriority,
    He = a.unstable_NormalPriority,
    yt = a.unstable_LowPriority,
    Kt = a.unstable_IdlePriority,
    Jt = a.log,
    Sa = a.unstable_setDisableYieldValue,
    sn = null,
    st = null;
  function Ft(e) {
    if (
      (typeof Jt == "function" && Sa(e),
      st && typeof st.setStrictMode == "function")
    )
      try {
        st.setStrictMode(sn, e);
      } catch {}
  }
  var De = Math.clz32 ? Math.clz32 : Lt,
    St = Math.log,
    zt = Math.LN2;
  function Lt(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((St(e) / zt) | 0)) | 0);
  }
  var xn = 256,
    Tn = 262144,
    kn = 4194304;
  function _n(e) {
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
  function Jl(e, t, n) {
    var l = e.pendingLanes;
    if (l === 0) return 0;
    var u = 0,
      o = e.suspendedLanes,
      d = e.pingedLanes;
    e = e.warmLanes;
    var g = l & 134217727;
    return (
      g !== 0
        ? ((l = g & ~o),
          l !== 0
            ? (u = _n(l))
            : ((d &= g),
              d !== 0
                ? (u = _n(d))
                : n || ((n = g & ~e), n !== 0 && (u = _n(n)))))
        : ((g = l & ~o),
          g !== 0
            ? (u = _n(g))
            : d !== 0
              ? (u = _n(d))
              : n || ((n = l & ~e), n !== 0 && (u = _n(n)))),
      u === 0
        ? 0
        : t !== 0 &&
            t !== u &&
            (t & o) === 0 &&
            ((o = u & -u),
            (n = t & -t),
            o >= n || (o === 32 && (n & 4194048) !== 0))
          ? t
          : u
    );
  }
  function Fl(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function vo(e, t) {
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
  function Tu() {
    var e = kn;
    return ((kn <<= 1), (kn & 62914560) === 0 && (kn = 4194304), e);
  }
  function vi(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Xn(e, t) {
    ((e.pendingLanes |= t),
      t !== 268435456 &&
        ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0)));
  }
  function _u(e, t, n, l, u, o) {
    var d = e.pendingLanes;
    ((e.pendingLanes = n),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.warmLanes = 0),
      (e.expiredLanes &= n),
      (e.entangledLanes &= n),
      (e.errorRecoveryDisabledLanes &= n),
      (e.shellSuspendCounter = 0));
    var g = e.entanglements,
      E = e.expirationTimes,
      L = e.hiddenUpdates;
    for (n = d & ~n; 0 < n; ) {
      var F = 31 - De(n),
        ee = 1 << F;
      ((g[F] = 0), (E[F] = -1));
      var H = L[F];
      if (H !== null)
        for (L[F] = null, F = 0; F < H.length; F++) {
          var j = H[F];
          j !== null && (j.lane &= -536870913);
        }
      n &= ~ee;
    }
    (l !== 0 && Ru(e, l, 0),
      o !== 0 && u === 0 && e.tag !== 0 && (e.suspendedLanes |= o & ~(d & ~t)));
  }
  function Ru(e, t, n) {
    ((e.pendingLanes |= t), (e.suspendedLanes &= ~t));
    var l = 31 - De(t);
    ((e.entangledLanes |= t),
      (e.entanglements[l] = e.entanglements[l] | 1073741824 | (n & 261930)));
  }
  function Cu(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var l = 31 - De(n),
        u = 1 << l;
      ((u & t) | (e[l] & t) && (e[l] |= t), (n &= ~u));
    }
  }
  function pl(e, t) {
    var n = t & -t;
    return (
      (n = (n & 42) !== 0 ? 1 : pi(n)),
      (n & (e.suspendedLanes | t)) !== 0 ? 0 : n
    );
  }
  function pi(e) {
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
  function bi(e) {
    return (
      (e &= -e),
      2 < e ? (8 < e ? ((e & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function wu() {
    var e = O.p;
    return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : vg(e.type));
  }
  function Uf(e, t) {
    var n = O.p;
    try {
      return ((O.p = e), t());
    } finally {
      O.p = n;
    }
  }
  var bl = Math.random().toString(36).slice(2),
    xt = "__reactFiber$" + bl,
    Vt = "__reactProps$" + bl,
    Ea = "__reactContainer$" + bl,
    po = "__reactEvents$" + bl,
    qv = "__reactListeners$" + bl,
    jv = "__reactHandles$" + bl,
    Nf = "__reactResources$" + bl,
    Si = "__reactMarker$" + bl;
  function bo(e) {
    (delete e[xt], delete e[Vt], delete e[po], delete e[qv], delete e[jv]);
  }
  function Aa(e) {
    var t = e[xt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[Ea] || n[xt])) {
        if (
          ((n = t.alternate),
          t.child !== null || (n !== null && n.child !== null))
        )
          for (e = tg(e); e !== null; ) {
            if ((n = e[xt])) return n;
            e = tg(e);
          }
        return t;
      }
      ((e = n), (n = e.parentNode));
    }
    return null;
  }
  function xa(e) {
    if ((e = e[xt] || e[Ea])) {
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
  function Ei(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(s(33));
  }
  function Ta(e) {
    var t = e[Nf];
    return (
      t ||
        (t = e[Nf] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      t
    );
  }
  function Et(e) {
    e[Si] = !0;
  }
  var Lf = new Set(),
    Vf = {};
  function $l(e, t) {
    (_a(e, t), _a(e + "Capture", t));
  }
  function _a(e, t) {
    for (Vf[e] = t, e = 0; e < t.length; e++) Lf.add(t[e]);
  }
  var Gv = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ),
    Bf = {},
    Hf = {};
  function kv(e) {
    return An.call(Hf, e)
      ? !0
      : An.call(Bf, e)
        ? !1
        : Gv.test(e)
          ? (Hf[e] = !0)
          : ((Bf[e] = !0), !1);
  }
  function Mu(e, t, n) {
    if (kv(t))
      if (n === null) e.removeAttribute(t);
      else {
        switch (typeof n) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(t);
            return;
          case "boolean":
            var l = t.toLowerCase().slice(0, 5);
            if (l !== "data-" && l !== "aria-") {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, "" + n);
      }
  }
  function Ou(e, t, n) {
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
  function Qn(e, t, n, l) {
    if (l === null) e.removeAttribute(n);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(n);
          return;
      }
      e.setAttributeNS(t, n, "" + l);
    }
  }
  function cn(e) {
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
  function Yf(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function Xv(e, t, n) {
    var l = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
    if (
      !e.hasOwnProperty(t) &&
      typeof l < "u" &&
      typeof l.get == "function" &&
      typeof l.set == "function"
    ) {
      var u = l.get,
        o = l.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return u.call(this);
          },
          set: function (d) {
            ((n = "" + d), o.call(this, d));
          },
        }),
        Object.defineProperty(e, t, { enumerable: l.enumerable }),
        {
          getValue: function () {
            return n;
          },
          setValue: function (d) {
            n = "" + d;
          },
          stopTracking: function () {
            ((e._valueTracker = null), delete e[t]);
          },
        }
      );
    }
  }
  function So(e) {
    if (!e._valueTracker) {
      var t = Yf(e) ? "checked" : "value";
      e._valueTracker = Xv(e, t, "" + e[t]);
    }
  }
  function qf(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      l = "";
    return (
      e && (l = Yf(e) ? (e.checked ? "true" : "false") : e.value),
      (e = l),
      e !== n ? (t.setValue(e), !0) : !1
    );
  }
  function Du(e) {
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
  var Qv = /[\n"\\]/g;
  function fn(e) {
    return e.replace(Qv, function (t) {
      return "\\" + t.charCodeAt(0).toString(16) + " ";
    });
  }
  function Eo(e, t, n, l, u, o, d, g) {
    ((e.name = ""),
      d != null &&
      typeof d != "function" &&
      typeof d != "symbol" &&
      typeof d != "boolean"
        ? (e.type = d)
        : e.removeAttribute("type"),
      t != null
        ? d === "number"
          ? ((t === 0 && e.value === "") || e.value != t) &&
            (e.value = "" + cn(t))
          : e.value !== "" + cn(t) && (e.value = "" + cn(t))
        : (d !== "submit" && d !== "reset") || e.removeAttribute("value"),
      t != null
        ? Ao(e, d, cn(t))
        : n != null
          ? Ao(e, d, cn(n))
          : l != null && e.removeAttribute("value"),
      u == null && o != null && (e.defaultChecked = !!o),
      u != null &&
        (e.checked = u && typeof u != "function" && typeof u != "symbol"),
      g != null &&
      typeof g != "function" &&
      typeof g != "symbol" &&
      typeof g != "boolean"
        ? (e.name = "" + cn(g))
        : e.removeAttribute("name"));
  }
  function jf(e, t, n, l, u, o, d, g) {
    if (
      (o != null &&
        typeof o != "function" &&
        typeof o != "symbol" &&
        typeof o != "boolean" &&
        (e.type = o),
      t != null || n != null)
    ) {
      if (!((o !== "submit" && o !== "reset") || t != null)) {
        So(e);
        return;
      }
      ((n = n != null ? "" + cn(n) : ""),
        (t = t != null ? "" + cn(t) : n),
        g || t === e.value || (e.value = t),
        (e.defaultValue = t));
    }
    ((l = l ?? u),
      (l = typeof l != "function" && typeof l != "symbol" && !!l),
      (e.checked = g ? e.checked : !!l),
      (e.defaultChecked = !!l),
      d != null &&
        typeof d != "function" &&
        typeof d != "symbol" &&
        typeof d != "boolean" &&
        (e.name = d),
      So(e));
  }
  function Ao(e, t, n) {
    (t === "number" && Du(e.ownerDocument) === e) ||
      e.defaultValue === "" + n ||
      (e.defaultValue = "" + n);
  }
  function Ra(e, t, n, l) {
    if (((e = e.options), t)) {
      t = {};
      for (var u = 0; u < n.length; u++) t["$" + n[u]] = !0;
      for (n = 0; n < e.length; n++)
        ((u = t.hasOwnProperty("$" + e[n].value)),
          e[n].selected !== u && (e[n].selected = u),
          u && l && (e[n].defaultSelected = !0));
    } else {
      for (n = "" + cn(n), t = null, u = 0; u < e.length; u++) {
        if (e[u].value === n) {
          ((e[u].selected = !0), l && (e[u].defaultSelected = !0));
          return;
        }
        t !== null || e[u].disabled || (t = e[u]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Gf(e, t, n) {
    if (
      t != null &&
      ((t = "" + cn(t)), t !== e.value && (e.value = t), n == null)
    ) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = n != null ? "" + cn(n) : "";
  }
  function kf(e, t, n, l) {
    if (t == null) {
      if (l != null) {
        if (n != null) throw Error(s(92));
        if (oe(l)) {
          if (1 < l.length) throw Error(s(93));
          l = l[0];
        }
        n = l;
      }
      (n == null && (n = ""), (t = n));
    }
    ((n = cn(t)),
      (e.defaultValue = n),
      (l = e.textContent),
      l === n && l !== "" && l !== null && (e.value = l),
      So(e));
  }
  function Ca(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Zv = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Xf(e, t, n) {
    var l = t.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === ""
      ? l
        ? e.setProperty(t, "")
        : t === "float"
          ? (e.cssFloat = "")
          : (e[t] = "")
      : l
        ? e.setProperty(t, n)
        : typeof n != "number" || n === 0 || Zv.has(t)
          ? t === "float"
            ? (e.cssFloat = n)
            : (e[t] = ("" + n).trim())
          : (e[t] = n + "px");
  }
  function Qf(e, t, n) {
    if (t != null && typeof t != "object") throw Error(s(62));
    if (((e = e.style), n != null)) {
      for (var l in n)
        !n.hasOwnProperty(l) ||
          (t != null && t.hasOwnProperty(l)) ||
          (l.indexOf("--") === 0
            ? e.setProperty(l, "")
            : l === "float"
              ? (e.cssFloat = "")
              : (e[l] = ""));
      for (var u in t)
        ((l = t[u]), t.hasOwnProperty(u) && n[u] !== l && Xf(e, u, l));
    } else for (var o in t) t.hasOwnProperty(o) && Xf(e, o, t[o]);
  }
  function xo(e) {
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
  var Kv = new Map([
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
    Jv =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function zu(e) {
    return Jv.test("" + e)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : e;
  }
  function Zn() {}
  var To = null;
  function _o(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var wa = null,
    Ma = null;
  function Zf(e) {
    var t = xa(e);
    if (t && (e = t.stateNode)) {
      var n = e[Vt] || null;
      e: switch (((e = t.stateNode), t.type)) {
        case "input":
          if (
            (Eo(
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
                'input[name="' + fn("" + t) + '"][type="radio"]'
              ),
                t = 0;
              t < n.length;
              t++
            ) {
              var l = n[t];
              if (l !== e && l.form === e.form) {
                var u = l[Vt] || null;
                if (!u) throw Error(s(90));
                Eo(
                  l,
                  u.value,
                  u.defaultValue,
                  u.defaultValue,
                  u.checked,
                  u.defaultChecked,
                  u.type,
                  u.name
                );
              }
            }
            for (t = 0; t < n.length; t++)
              ((l = n[t]), l.form === e.form && qf(l));
          }
          break e;
        case "textarea":
          Gf(e, n.value, n.defaultValue);
          break e;
        case "select":
          ((t = n.value), t != null && Ra(e, !!n.multiple, t, !1));
      }
    }
  }
  var Ro = !1;
  function Kf(e, t, n) {
    if (Ro) return e(t, n);
    Ro = !0;
    try {
      var l = e(t);
      return l;
    } finally {
      if (
        ((Ro = !1),
        (wa !== null || Ma !== null) &&
          (br(), wa && ((t = wa), (e = Ma), (Ma = wa = null), Zf(t), e)))
      )
        for (t = 0; t < e.length; t++) Zf(e[t]);
    }
  }
  function Ai(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var l = n[Vt] || null;
    if (l === null) return null;
    n = l[t];
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
        ((l = !l.disabled) ||
          ((e = e.type),
          (l = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !l));
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(s(231, t, typeof n));
    return n;
  }
  var Kn = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    Co = !1;
  if (Kn)
    try {
      var xi = {};
      (Object.defineProperty(xi, "passive", {
        get: function () {
          Co = !0;
        },
      }),
        window.addEventListener("test", xi, xi),
        window.removeEventListener("test", xi, xi));
    } catch {
      Co = !1;
    }
  var Sl = null,
    wo = null,
    Uu = null;
  function Jf() {
    if (Uu) return Uu;
    var e,
      t = wo,
      n = t.length,
      l,
      u = "value" in Sl ? Sl.value : Sl.textContent,
      o = u.length;
    for (e = 0; e < n && t[e] === u[e]; e++);
    var d = n - e;
    for (l = 1; l <= d && t[n - l] === u[o - l]; l++);
    return (Uu = u.slice(e, 1 < l ? 1 - l : void 0));
  }
  function Nu(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Lu() {
    return !0;
  }
  function Ff() {
    return !1;
  }
  function Bt(e) {
    function t(n, l, u, o, d) {
      ((this._reactName = n),
        (this._targetInst = u),
        (this.type = l),
        (this.nativeEvent = o),
        (this.target = d),
        (this.currentTarget = null));
      for (var g in e)
        e.hasOwnProperty(g) && ((n = e[g]), (this[g] = n ? n(o) : o[g]));
      return (
        (this.isDefaultPrevented = (
          o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
        )
          ? Lu
          : Ff),
        (this.isPropagationStopped = Ff),
        this
      );
    }
    return (
      b(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = Lu));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = Lu));
        },
        persist: function () {},
        isPersistent: Lu,
      }),
      t
    );
  }
  var Wl = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Vu = Bt(Wl),
    Ti = b({}, Wl, { view: 0, detail: 0 }),
    Fv = Bt(Ti),
    Mo,
    Oo,
    _i,
    Bu = b({}, Ti, {
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
      getModifierState: zo,
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
          : (e !== _i &&
              (_i && e.type === "mousemove"
                ? ((Mo = e.screenX - _i.screenX), (Oo = e.screenY - _i.screenY))
                : (Oo = Mo = 0),
              (_i = e)),
            Mo);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : Oo;
      },
    }),
    $f = Bt(Bu),
    $v = b({}, Bu, { dataTransfer: 0 }),
    Wv = Bt($v),
    Pv = b({}, Ti, { relatedTarget: 0 }),
    Do = Bt(Pv),
    Iv = b({}, Wl, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    ep = Bt(Iv),
    tp = b({}, Wl, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    np = Bt(tp),
    lp = b({}, Wl, { data: 0 }),
    Wf = Bt(lp),
    ap = {
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
    ip = {
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
    up = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function rp(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = up[e])
        ? !!t[e]
        : !1;
  }
  function zo() {
    return rp;
  }
  var op = b({}, Ti, {
      key: function (e) {
        if (e.key) {
          var t = ap[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = Nu(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
            ? ip[e.keyCode] || "Unidentified"
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
      getModifierState: zo,
      charCode: function (e) {
        return e.type === "keypress" ? Nu(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? Nu(e)
          : e.type === "keydown" || e.type === "keyup"
            ? e.keyCode
            : 0;
      },
    }),
    sp = Bt(op),
    cp = b({}, Bu, {
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
    Pf = Bt(cp),
    fp = b({}, Ti, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: zo,
    }),
    dp = Bt(fp),
    mp = b({}, Wl, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    hp = Bt(mp),
    gp = b({}, Bu, {
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
    yp = Bt(gp),
    vp = b({}, Wl, { newState: 0, oldState: 0 }),
    pp = Bt(vp),
    bp = [9, 13, 27, 32],
    Uo = Kn && "CompositionEvent" in window,
    Ri = null;
  Kn && "documentMode" in document && (Ri = document.documentMode);
  var Sp = Kn && "TextEvent" in window && !Ri,
    If = Kn && (!Uo || (Ri && 8 < Ri && 11 >= Ri)),
    ed = " ",
    td = !1;
  function nd(e, t) {
    switch (e) {
      case "keyup":
        return bp.indexOf(t.keyCode) !== -1;
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
  function ld(e) {
    return (
      (e = e.detail),
      typeof e == "object" && "data" in e ? e.data : null
    );
  }
  var Oa = !1;
  function Ep(e, t) {
    switch (e) {
      case "compositionend":
        return ld(t);
      case "keypress":
        return t.which !== 32 ? null : ((td = !0), ed);
      case "textInput":
        return ((e = t.data), e === ed && td ? null : e);
      default:
        return null;
    }
  }
  function Ap(e, t) {
    if (Oa)
      return e === "compositionend" || (!Uo && nd(e, t))
        ? ((e = Jf()), (Uu = wo = Sl = null), (Oa = !1), e)
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
        return If && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var xp = {
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
  function ad(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!xp[e.type] : t === "textarea";
  }
  function id(e, t, n, l) {
    (wa ? (Ma ? Ma.push(l) : (Ma = [l])) : (wa = l),
      (t = Rr(t, "onChange")),
      0 < t.length &&
        ((n = new Vu("onChange", "change", null, n, l)),
        e.push({ event: n, listeners: t })));
  }
  var Ci = null,
    wi = null;
  function Tp(e) {
    jh(e, 0);
  }
  function Hu(e) {
    var t = Ei(e);
    if (qf(t)) return e;
  }
  function ud(e, t) {
    if (e === "change") return t;
  }
  var rd = !1;
  if (Kn) {
    var No;
    if (Kn) {
      var Lo = "oninput" in document;
      if (!Lo) {
        var od = document.createElement("div");
        (od.setAttribute("oninput", "return;"),
          (Lo = typeof od.oninput == "function"));
      }
      No = Lo;
    } else No = !1;
    rd = No && (!document.documentMode || 9 < document.documentMode);
  }
  function sd() {
    Ci && (Ci.detachEvent("onpropertychange", cd), (wi = Ci = null));
  }
  function cd(e) {
    if (e.propertyName === "value" && Hu(wi)) {
      var t = [];
      (id(t, wi, e, _o(e)), Kf(Tp, t));
    }
  }
  function _p(e, t, n) {
    e === "focusin"
      ? (sd(), (Ci = t), (wi = n), Ci.attachEvent("onpropertychange", cd))
      : e === "focusout" && sd();
  }
  function Rp(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Hu(wi);
  }
  function Cp(e, t) {
    if (e === "click") return Hu(t);
  }
  function wp(e, t) {
    if (e === "input" || e === "change") return Hu(t);
  }
  function Mp(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var $t = typeof Object.is == "function" ? Object.is : Mp;
  function Mi(e, t) {
    if ($t(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var n = Object.keys(e),
      l = Object.keys(t);
    if (n.length !== l.length) return !1;
    for (l = 0; l < n.length; l++) {
      var u = n[l];
      if (!An.call(t, u) || !$t(e[u], t[u])) return !1;
    }
    return !0;
  }
  function fd(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function dd(e, t) {
    var n = fd(e);
    e = 0;
    for (var l; n; ) {
      if (n.nodeType === 3) {
        if (((l = e + n.textContent.length), e <= t && l >= t))
          return { node: n, offset: t - e };
        e = l;
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
      n = fd(n);
    }
  }
  function md(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? md(e, t.parentNode)
            : "contains" in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function hd(e) {
    e =
      e != null &&
      e.ownerDocument != null &&
      e.ownerDocument.defaultView != null
        ? e.ownerDocument.defaultView
        : window;
    for (var t = Du(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Du(e.document);
    }
    return t;
  }
  function Vo(e) {
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
  var Op = Kn && "documentMode" in document && 11 >= document.documentMode,
    Da = null,
    Bo = null,
    Oi = null,
    Ho = !1;
  function gd(e, t, n) {
    var l =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Ho ||
      Da == null ||
      Da !== Du(l) ||
      ((l = Da),
      "selectionStart" in l && Vo(l)
        ? (l = { start: l.selectionStart, end: l.selectionEnd })
        : ((l = (
            (l.ownerDocument && l.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (l = {
            anchorNode: l.anchorNode,
            anchorOffset: l.anchorOffset,
            focusNode: l.focusNode,
            focusOffset: l.focusOffset,
          })),
      (Oi && Mi(Oi, l)) ||
        ((Oi = l),
        (l = Rr(Bo, "onSelect")),
        0 < l.length &&
          ((t = new Vu("onSelect", "select", null, t, n)),
          e.push({ event: t, listeners: l }),
          (t.target = Da))));
  }
  function Pl(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n["Webkit" + e] = "webkit" + t),
      (n["Moz" + e] = "moz" + t),
      n
    );
  }
  var za = {
      animationend: Pl("Animation", "AnimationEnd"),
      animationiteration: Pl("Animation", "AnimationIteration"),
      animationstart: Pl("Animation", "AnimationStart"),
      transitionrun: Pl("Transition", "TransitionRun"),
      transitionstart: Pl("Transition", "TransitionStart"),
      transitioncancel: Pl("Transition", "TransitionCancel"),
      transitionend: Pl("Transition", "TransitionEnd"),
    },
    Yo = {},
    yd = {};
  Kn &&
    ((yd = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete za.animationend.animation,
      delete za.animationiteration.animation,
      delete za.animationstart.animation),
    "TransitionEvent" in window || delete za.transitionend.transition);
  function Il(e) {
    if (Yo[e]) return Yo[e];
    if (!za[e]) return e;
    var t = za[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in yd) return (Yo[e] = t[n]);
    return e;
  }
  var vd = Il("animationend"),
    pd = Il("animationiteration"),
    bd = Il("animationstart"),
    Dp = Il("transitionrun"),
    zp = Il("transitionstart"),
    Up = Il("transitioncancel"),
    Sd = Il("transitionend"),
    Ed = new Map(),
    qo =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  qo.push("scrollEnd");
  function Rn(e, t) {
    (Ed.set(e, t), $l(t, [e]));
  }
  var Yu =
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
    dn = [],
    Ua = 0,
    jo = 0;
  function qu() {
    for (var e = Ua, t = (jo = Ua = 0); t < e; ) {
      var n = dn[t];
      dn[t++] = null;
      var l = dn[t];
      dn[t++] = null;
      var u = dn[t];
      dn[t++] = null;
      var o = dn[t];
      if (((dn[t++] = null), l !== null && u !== null)) {
        var d = l.pending;
        (d === null ? (u.next = u) : ((u.next = d.next), (d.next = u)),
          (l.pending = u));
      }
      o !== 0 && Ad(n, u, o);
    }
  }
  function ju(e, t, n, l) {
    ((dn[Ua++] = e),
      (dn[Ua++] = t),
      (dn[Ua++] = n),
      (dn[Ua++] = l),
      (jo |= l),
      (e.lanes |= l),
      (e = e.alternate),
      e !== null && (e.lanes |= l));
  }
  function Go(e, t, n, l) {
    return (ju(e, t, n, l), Gu(e));
  }
  function ea(e, t) {
    return (ju(e, null, null, t), Gu(e));
  }
  function Ad(e, t, n) {
    e.lanes |= n;
    var l = e.alternate;
    l !== null && (l.lanes |= n);
    for (var u = !1, o = e.return; o !== null; )
      ((o.childLanes |= n),
        (l = o.alternate),
        l !== null && (l.childLanes |= n),
        o.tag === 22 &&
          ((e = o.stateNode), e === null || e._visibility & 1 || (u = !0)),
        (e = o),
        (o = o.return));
    return e.tag === 3
      ? ((o = e.stateNode),
        u &&
          t !== null &&
          ((u = 31 - De(n)),
          (e = o.hiddenUpdates),
          (l = e[u]),
          l === null ? (e[u] = [t]) : l.push(t),
          (t.lane = n | 536870912)),
        o)
      : null;
  }
  function Gu(e) {
    if (50 < Pi) throw ((Pi = 0), (Ws = null), Error(s(185)));
    for (var t = e.return; t !== null; ) ((e = t), (t = e.return));
    return e.tag === 3 ? e.stateNode : null;
  }
  var Na = {};
  function Np(e, t, n, l) {
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
      (this.mode = l),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function Wt(e, t, n, l) {
    return new Np(e, t, n, l);
  }
  function ko(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function Jn(e, t) {
    var n = e.alternate;
    return (
      n === null
        ? ((n = Wt(e.tag, t, e.key, e.mode)),
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
  function xd(e, t) {
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
  function ku(e, t, n, l, u, o) {
    var d = 0;
    if (((l = e), typeof e == "function")) ko(e) && (d = 1);
    else if (typeof e == "string")
      d = Yb(e, n, ae.current)
        ? 26
        : e === "html" || e === "head" || e === "body"
          ? 27
          : 5;
    else
      e: switch (e) {
        case me:
          return (
            (e = Wt(31, n, t, u)),
            (e.elementType = me),
            (e.lanes = o),
            e
          );
        case z:
          return ta(n.children, u, o, t);
        case X:
          ((d = 8), (u |= 24));
          break;
        case P:
          return (
            (e = Wt(12, n, t, u | 2)),
            (e.elementType = P),
            (e.lanes = o),
            e
          );
        case ne:
          return (
            (e = Wt(13, n, t, u)),
            (e.elementType = ne),
            (e.lanes = o),
            e
          );
        case Z:
          return ((e = Wt(19, n, t, u)), (e.elementType = Z), (e.lanes = o), e);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case Y:
                d = 10;
                break e;
              case G:
                d = 9;
                break e;
              case k:
                d = 11;
                break e;
              case W:
                d = 14;
                break e;
              case $:
                ((d = 16), (l = null));
                break e;
            }
          ((d = 29),
            (n = Error(s(130, e === null ? "null" : typeof e, ""))),
            (l = null));
      }
    return (
      (t = Wt(d, n, t, u)),
      (t.elementType = e),
      (t.type = l),
      (t.lanes = o),
      t
    );
  }
  function ta(e, t, n, l) {
    return ((e = Wt(7, e, l, t)), (e.lanes = n), e);
  }
  function Xo(e, t, n) {
    return ((e = Wt(6, e, null, t)), (e.lanes = n), e);
  }
  function Td(e) {
    var t = Wt(18, null, null, 0);
    return ((t.stateNode = e), t);
  }
  function Qo(e, t, n) {
    return (
      (t = Wt(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  var _d = new WeakMap();
  function mn(e, t) {
    if (typeof e == "object" && e !== null) {
      var n = _d.get(e);
      return n !== void 0
        ? n
        : ((t = { value: e, source: t, stack: Gn(t) }), _d.set(e, t), t);
    }
    return { value: e, source: t, stack: Gn(t) };
  }
  var La = [],
    Va = 0,
    Xu = null,
    Di = 0,
    hn = [],
    gn = 0,
    El = null,
    Un = 1,
    Nn = "";
  function Fn(e, t) {
    ((La[Va++] = Di), (La[Va++] = Xu), (Xu = e), (Di = t));
  }
  function Rd(e, t, n) {
    ((hn[gn++] = Un), (hn[gn++] = Nn), (hn[gn++] = El), (El = e));
    var l = Un;
    e = Nn;
    var u = 32 - De(l) - 1;
    ((l &= ~(1 << u)), (n += 1));
    var o = 32 - De(t) + u;
    if (30 < o) {
      var d = u - (u % 5);
      ((o = (l & ((1 << d) - 1)).toString(32)),
        (l >>= d),
        (u -= d),
        (Un = (1 << (32 - De(t) + u)) | (n << u) | l),
        (Nn = o + e));
    } else ((Un = (1 << o) | (n << u) | l), (Nn = e));
  }
  function Zo(e) {
    e.return !== null && (Fn(e, 1), Rd(e, 1, 0));
  }
  function Ko(e) {
    for (; e === Xu; )
      ((Xu = La[--Va]), (La[Va] = null), (Di = La[--Va]), (La[Va] = null));
    for (; e === El; )
      ((El = hn[--gn]),
        (hn[gn] = null),
        (Nn = hn[--gn]),
        (hn[gn] = null),
        (Un = hn[--gn]),
        (hn[gn] = null));
  }
  function Cd(e, t) {
    ((hn[gn++] = Un),
      (hn[gn++] = Nn),
      (hn[gn++] = El),
      (Un = t.id),
      (Nn = t.overflow),
      (El = e));
  }
  var Tt = null,
    et = null,
    Be = !1,
    Al = null,
    yn = !1,
    Jo = Error(s(519));
  function xl(e) {
    var t = Error(
      s(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1]
          ? "text"
          : "HTML",
        ""
      )
    );
    throw (zi(mn(t, e)), Jo);
  }
  function wd(e) {
    var t = e.stateNode,
      n = e.type,
      l = e.memoizedProps;
    switch (((t[xt] = e), (t[Vt] = l), n)) {
      case "dialog":
        (Ue("cancel", t), Ue("close", t));
        break;
      case "iframe":
      case "object":
      case "embed":
        Ue("load", t);
        break;
      case "video":
      case "audio":
        for (n = 0; n < eu.length; n++) Ue(eu[n], t);
        break;
      case "source":
        Ue("error", t);
        break;
      case "img":
      case "image":
      case "link":
        (Ue("error", t), Ue("load", t));
        break;
      case "details":
        Ue("toggle", t);
        break;
      case "input":
        (Ue("invalid", t),
          jf(
            t,
            l.value,
            l.defaultValue,
            l.checked,
            l.defaultChecked,
            l.type,
            l.name,
            !0
          ));
        break;
      case "select":
        Ue("invalid", t);
        break;
      case "textarea":
        (Ue("invalid", t), kf(t, l.value, l.defaultValue, l.children));
    }
    ((n = l.children),
      (typeof n != "string" && typeof n != "number" && typeof n != "bigint") ||
      t.textContent === "" + n ||
      l.suppressHydrationWarning === !0 ||
      Qh(t.textContent, n)
        ? (l.popover != null && (Ue("beforetoggle", t), Ue("toggle", t)),
          l.onScroll != null && Ue("scroll", t),
          l.onScrollEnd != null && Ue("scrollend", t),
          l.onClick != null && (t.onclick = Zn),
          (t = !0))
        : (t = !1),
      t || xl(e, !0));
  }
  function Md(e) {
    for (Tt = e.return; Tt; )
      switch (Tt.tag) {
        case 5:
        case 31:
        case 13:
          yn = !1;
          return;
        case 27:
        case 3:
          yn = !0;
          return;
        default:
          Tt = Tt.return;
      }
  }
  function Ba(e) {
    if (e !== Tt) return !1;
    if (!Be) return (Md(e), (Be = !0), !1);
    var t = e.tag,
      n;
    if (
      ((n = t !== 3 && t !== 27) &&
        ((n = t === 5) &&
          ((n = e.type),
          (n =
            !(n !== "form" && n !== "button") || dc(e.type, e.memoizedProps))),
        (n = !n)),
      n && et && xl(e),
      Md(e),
      t === 13)
    ) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(s(317));
      et = eg(e);
    } else if (t === 31) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(s(317));
      et = eg(e);
    } else
      t === 27
        ? ((t = et), Bl(e.type) ? ((e = vc), (vc = null), (et = e)) : (et = t))
        : (et = Tt ? pn(e.stateNode.nextSibling) : null);
    return !0;
  }
  function na() {
    ((et = Tt = null), (Be = !1));
  }
  function Fo() {
    var e = Al;
    return (
      e !== null &&
        (jt === null ? (jt = e) : jt.push.apply(jt, e), (Al = null)),
      e
    );
  }
  function zi(e) {
    Al === null ? (Al = [e]) : Al.push(e);
  }
  var $o = S(null),
    la = null,
    $n = null;
  function Tl(e, t, n) {
    (J($o, t._currentValue), (t._currentValue = n));
  }
  function Wn(e) {
    ((e._currentValue = $o.current), V($o));
  }
  function Wo(e, t, n) {
    for (; e !== null; ) {
      var l = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), l !== null && (l.childLanes |= t))
          : l !== null && (l.childLanes & t) !== t && (l.childLanes |= t),
        e === n)
      )
        break;
      e = e.return;
    }
  }
  function Po(e, t, n, l) {
    var u = e.child;
    for (u !== null && (u.return = e); u !== null; ) {
      var o = u.dependencies;
      if (o !== null) {
        var d = u.child;
        o = o.firstContext;
        e: for (; o !== null; ) {
          var g = o;
          o = u;
          for (var E = 0; E < t.length; E++)
            if (g.context === t[E]) {
              ((o.lanes |= n),
                (g = o.alternate),
                g !== null && (g.lanes |= n),
                Wo(o.return, n, e),
                l || (d = null));
              break e;
            }
          o = g.next;
        }
      } else if (u.tag === 18) {
        if (((d = u.return), d === null)) throw Error(s(341));
        ((d.lanes |= n),
          (o = d.alternate),
          o !== null && (o.lanes |= n),
          Wo(d, n, e),
          (d = null));
      } else d = u.child;
      if (d !== null) d.return = u;
      else
        for (d = u; d !== null; ) {
          if (d === e) {
            d = null;
            break;
          }
          if (((u = d.sibling), u !== null)) {
            ((u.return = d.return), (d = u));
            break;
          }
          d = d.return;
        }
      u = d;
    }
  }
  function Ha(e, t, n, l) {
    e = null;
    for (var u = t, o = !1; u !== null; ) {
      if (!o) {
        if ((u.flags & 524288) !== 0) o = !0;
        else if ((u.flags & 262144) !== 0) break;
      }
      if (u.tag === 10) {
        var d = u.alternate;
        if (d === null) throw Error(s(387));
        if (((d = d.memoizedProps), d !== null)) {
          var g = u.type;
          $t(u.pendingProps.value, d.value) ||
            (e !== null ? e.push(g) : (e = [g]));
        }
      } else if (u === le.current) {
        if (((d = u.alternate), d === null)) throw Error(s(387));
        d.memoizedState.memoizedState !== u.memoizedState.memoizedState &&
          (e !== null ? e.push(iu) : (e = [iu]));
      }
      u = u.return;
    }
    (e !== null && Po(t, e, n, l), (t.flags |= 262144));
  }
  function Qu(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!$t(e.context._currentValue, e.memoizedValue)) return !0;
      e = e.next;
    }
    return !1;
  }
  function aa(e) {
    ((la = e),
      ($n = null),
      (e = e.dependencies),
      e !== null && (e.firstContext = null));
  }
  function _t(e) {
    return Od(la, e);
  }
  function Zu(e, t) {
    return (la === null && aa(e), Od(e, t));
  }
  function Od(e, t) {
    var n = t._currentValue;
    if (((t = { context: t, memoizedValue: n, next: null }), $n === null)) {
      if (e === null) throw Error(s(308));
      (($n = t),
        (e.dependencies = { lanes: 0, firstContext: t }),
        (e.flags |= 524288));
    } else $n = $n.next = t;
    return n;
  }
  var Lp =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var e = [],
              t = (this.signal = {
                aborted: !1,
                addEventListener: function (n, l) {
                  e.push(l);
                },
              });
            this.abort = function () {
              ((t.aborted = !0),
                e.forEach(function (n) {
                  return n();
                }));
            };
          },
    Vp = a.unstable_scheduleCallback,
    Bp = a.unstable_NormalPriority,
    ct = {
      $$typeof: Y,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Io() {
    return { controller: new Lp(), data: new Map(), refCount: 0 };
  }
  function Ui(e) {
    (e.refCount--,
      e.refCount === 0 &&
        Vp(Bp, function () {
          e.controller.abort();
        }));
  }
  var Ni = null,
    es = 0,
    Ya = 0,
    qa = null;
  function Hp(e, t) {
    if (Ni === null) {
      var n = (Ni = []);
      ((es = 0),
        (Ya = lc()),
        (qa = {
          status: "pending",
          value: void 0,
          then: function (l) {
            n.push(l);
          },
        }));
    }
    return (es++, t.then(Dd, Dd), t);
  }
  function Dd() {
    if (--es === 0 && Ni !== null) {
      qa !== null && (qa.status = "fulfilled");
      var e = Ni;
      ((Ni = null), (Ya = 0), (qa = null));
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function Yp(e, t) {
    var n = [],
      l = {
        status: "pending",
        value: null,
        reason: null,
        then: function (u) {
          n.push(u);
        },
      };
    return (
      e.then(
        function () {
          ((l.status = "fulfilled"), (l.value = t));
          for (var u = 0; u < n.length; u++) (0, n[u])(t);
        },
        function (u) {
          for (l.status = "rejected", l.reason = u, u = 0; u < n.length; u++)
            (0, n[u])(void 0);
        }
      ),
      l
    );
  }
  var zd = R.S;
  R.S = function (e, t) {
    ((gh = ie()),
      typeof t == "object" &&
        t !== null &&
        typeof t.then == "function" &&
        Hp(e, t),
      zd !== null && zd(e, t));
  };
  var ia = S(null);
  function ts() {
    var e = ia.current;
    return e !== null ? e : $e.pooledCache;
  }
  function Ku(e, t) {
    t === null ? J(ia, ia.current) : J(ia, t.pool);
  }
  function Ud() {
    var e = ts();
    return e === null ? null : { parent: ct._currentValue, pool: e };
  }
  var ja = Error(s(460)),
    ns = Error(s(474)),
    Ju = Error(s(542)),
    Fu = { then: function () {} };
  function Nd(e) {
    return ((e = e.status), e === "fulfilled" || e === "rejected");
  }
  function Ld(e, t, n) {
    switch (
      ((n = e[n]),
      n === void 0 ? e.push(t) : n !== t && (t.then(Zn, Zn), (t = n)),
      t.status)
    ) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw ((e = t.reason), Bd(e), e);
      default:
        if (typeof t.status == "string") t.then(Zn, Zn);
        else {
          if (((e = $e), e !== null && 100 < e.shellSuspendCounter))
            throw Error(s(482));
          ((e = t),
            (e.status = "pending"),
            e.then(
              function (l) {
                if (t.status === "pending") {
                  var u = t;
                  ((u.status = "fulfilled"), (u.value = l));
                }
              },
              function (l) {
                if (t.status === "pending") {
                  var u = t;
                  ((u.status = "rejected"), (u.reason = l));
                }
              }
            ));
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw ((e = t.reason), Bd(e), e);
        }
        throw ((ra = t), ja);
    }
  }
  function ua(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (n) {
      throw n !== null && typeof n == "object" && typeof n.then == "function"
        ? ((ra = n), ja)
        : n;
    }
  }
  var ra = null;
  function Vd() {
    if (ra === null) throw Error(s(459));
    var e = ra;
    return ((ra = null), e);
  }
  function Bd(e) {
    if (e === ja || e === Ju) throw Error(s(483));
  }
  var Ga = null,
    Li = 0;
  function $u(e) {
    var t = Li;
    return ((Li += 1), Ga === null && (Ga = []), Ld(Ga, e, t));
  }
  function Vi(e, t) {
    ((t = t.props.ref), (e.ref = t !== void 0 ? t : null));
  }
  function Wu(e, t) {
    throw t.$$typeof === x
      ? Error(s(525))
      : ((e = Object.prototype.toString.call(t)),
        Error(
          s(
            31,
            e === "[object Object]"
              ? "object with keys {" + Object.keys(t).join(", ") + "}"
              : e
          )
        ));
  }
  function Hd(e) {
    function t(D, T) {
      if (e) {
        var N = D.deletions;
        N === null ? ((D.deletions = [T]), (D.flags |= 16)) : N.push(T);
      }
    }
    function n(D, T) {
      if (!e) return null;
      for (; T !== null; ) (t(D, T), (T = T.sibling));
      return null;
    }
    function l(D) {
      for (var T = new Map(); D !== null; )
        (D.key !== null ? T.set(D.key, D) : T.set(D.index, D), (D = D.sibling));
      return T;
    }
    function u(D, T) {
      return ((D = Jn(D, T)), (D.index = 0), (D.sibling = null), D);
    }
    function o(D, T, N) {
      return (
        (D.index = N),
        e
          ? ((N = D.alternate),
            N !== null
              ? ((N = N.index), N < T ? ((D.flags |= 67108866), T) : N)
              : ((D.flags |= 67108866), T))
          : ((D.flags |= 1048576), T)
      );
    }
    function d(D) {
      return (e && D.alternate === null && (D.flags |= 67108866), D);
    }
    function g(D, T, N, I) {
      return T === null || T.tag !== 6
        ? ((T = Xo(N, D.mode, I)), (T.return = D), T)
        : ((T = u(T, N)), (T.return = D), T);
    }
    function E(D, T, N, I) {
      var xe = N.type;
      return xe === z
        ? F(D, T, N.props.children, I, N.key)
        : T !== null &&
            (T.elementType === xe ||
              (typeof xe == "object" &&
                xe !== null &&
                xe.$$typeof === $ &&
                ua(xe) === T.type))
          ? ((T = u(T, N.props)), Vi(T, N), (T.return = D), T)
          : ((T = ku(N.type, N.key, N.props, null, D.mode, I)),
            Vi(T, N),
            (T.return = D),
            T);
    }
    function L(D, T, N, I) {
      return T === null ||
        T.tag !== 4 ||
        T.stateNode.containerInfo !== N.containerInfo ||
        T.stateNode.implementation !== N.implementation
        ? ((T = Qo(N, D.mode, I)), (T.return = D), T)
        : ((T = u(T, N.children || [])), (T.return = D), T);
    }
    function F(D, T, N, I, xe) {
      return T === null || T.tag !== 7
        ? ((T = ta(N, D.mode, I, xe)), (T.return = D), T)
        : ((T = u(T, N)), (T.return = D), T);
    }
    function ee(D, T, N) {
      if (
        (typeof T == "string" && T !== "") ||
        typeof T == "number" ||
        typeof T == "bigint"
      )
        return ((T = Xo("" + T, D.mode, N)), (T.return = D), T);
      if (typeof T == "object" && T !== null) {
        switch (T.$$typeof) {
          case _:
            return (
              (N = ku(T.type, T.key, T.props, null, D.mode, N)),
              Vi(N, T),
              (N.return = D),
              N
            );
          case M:
            return ((T = Qo(T, D.mode, N)), (T.return = D), T);
          case $:
            return ((T = ua(T)), ee(D, T, N));
        }
        if (oe(T) || Q(T))
          return ((T = ta(T, D.mode, N, null)), (T.return = D), T);
        if (typeof T.then == "function") return ee(D, $u(T), N);
        if (T.$$typeof === Y) return ee(D, Zu(D, T), N);
        Wu(D, T);
      }
      return null;
    }
    function H(D, T, N, I) {
      var xe = T !== null ? T.key : null;
      if (
        (typeof N == "string" && N !== "") ||
        typeof N == "number" ||
        typeof N == "bigint"
      )
        return xe !== null ? null : g(D, T, "" + N, I);
      if (typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case _:
            return N.key === xe ? E(D, T, N, I) : null;
          case M:
            return N.key === xe ? L(D, T, N, I) : null;
          case $:
            return ((N = ua(N)), H(D, T, N, I));
        }
        if (oe(N) || Q(N)) return xe !== null ? null : F(D, T, N, I, null);
        if (typeof N.then == "function") return H(D, T, $u(N), I);
        if (N.$$typeof === Y) return H(D, T, Zu(D, N), I);
        Wu(D, N);
      }
      return null;
    }
    function j(D, T, N, I, xe) {
      if (
        (typeof I == "string" && I !== "") ||
        typeof I == "number" ||
        typeof I == "bigint"
      )
        return ((D = D.get(N) || null), g(T, D, "" + I, xe));
      if (typeof I == "object" && I !== null) {
        switch (I.$$typeof) {
          case _:
            return (
              (D = D.get(I.key === null ? N : I.key) || null),
              E(T, D, I, xe)
            );
          case M:
            return (
              (D = D.get(I.key === null ? N : I.key) || null),
              L(T, D, I, xe)
            );
          case $:
            return ((I = ua(I)), j(D, T, N, I, xe));
        }
        if (oe(I) || Q(I))
          return ((D = D.get(N) || null), F(T, D, I, xe, null));
        if (typeof I.then == "function") return j(D, T, N, $u(I), xe);
        if (I.$$typeof === Y) return j(D, T, N, Zu(T, I), xe);
        Wu(T, I);
      }
      return null;
    }
    function ve(D, T, N, I) {
      for (
        var xe = null, je = null, Se = T, we = (T = 0), Le = null;
        Se !== null && we < N.length;
        we++
      ) {
        Se.index > we ? ((Le = Se), (Se = null)) : (Le = Se.sibling);
        var Ge = H(D, Se, N[we], I);
        if (Ge === null) {
          Se === null && (Se = Le);
          break;
        }
        (e && Se && Ge.alternate === null && t(D, Se),
          (T = o(Ge, T, we)),
          je === null ? (xe = Ge) : (je.sibling = Ge),
          (je = Ge),
          (Se = Le));
      }
      if (we === N.length) return (n(D, Se), Be && Fn(D, we), xe);
      if (Se === null) {
        for (; we < N.length; we++)
          ((Se = ee(D, N[we], I)),
            Se !== null &&
              ((T = o(Se, T, we)),
              je === null ? (xe = Se) : (je.sibling = Se),
              (je = Se)));
        return (Be && Fn(D, we), xe);
      }
      for (Se = l(Se); we < N.length; we++)
        ((Le = j(Se, D, we, N[we], I)),
          Le !== null &&
            (e &&
              Le.alternate !== null &&
              Se.delete(Le.key === null ? we : Le.key),
            (T = o(Le, T, we)),
            je === null ? (xe = Le) : (je.sibling = Le),
            (je = Le)));
      return (
        e &&
          Se.forEach(function (Gl) {
            return t(D, Gl);
          }),
        Be && Fn(D, we),
        xe
      );
    }
    function _e(D, T, N, I) {
      if (N == null) throw Error(s(151));
      for (
        var xe = null,
          je = null,
          Se = T,
          we = (T = 0),
          Le = null,
          Ge = N.next();
        Se !== null && !Ge.done;
        we++, Ge = N.next()
      ) {
        Se.index > we ? ((Le = Se), (Se = null)) : (Le = Se.sibling);
        var Gl = H(D, Se, Ge.value, I);
        if (Gl === null) {
          Se === null && (Se = Le);
          break;
        }
        (e && Se && Gl.alternate === null && t(D, Se),
          (T = o(Gl, T, we)),
          je === null ? (xe = Gl) : (je.sibling = Gl),
          (je = Gl),
          (Se = Le));
      }
      if (Ge.done) return (n(D, Se), Be && Fn(D, we), xe);
      if (Se === null) {
        for (; !Ge.done; we++, Ge = N.next())
          ((Ge = ee(D, Ge.value, I)),
            Ge !== null &&
              ((T = o(Ge, T, we)),
              je === null ? (xe = Ge) : (je.sibling = Ge),
              (je = Ge)));
        return (Be && Fn(D, we), xe);
      }
      for (Se = l(Se); !Ge.done; we++, Ge = N.next())
        ((Ge = j(Se, D, we, Ge.value, I)),
          Ge !== null &&
            (e &&
              Ge.alternate !== null &&
              Se.delete(Ge.key === null ? we : Ge.key),
            (T = o(Ge, T, we)),
            je === null ? (xe = Ge) : (je.sibling = Ge),
            (je = Ge)));
      return (
        e &&
          Se.forEach(function ($b) {
            return t(D, $b);
          }),
        Be && Fn(D, we),
        xe
      );
    }
    function Fe(D, T, N, I) {
      if (
        (typeof N == "object" &&
          N !== null &&
          N.type === z &&
          N.key === null &&
          (N = N.props.children),
        typeof N == "object" && N !== null)
      ) {
        switch (N.$$typeof) {
          case _:
            e: {
              for (var xe = N.key; T !== null; ) {
                if (T.key === xe) {
                  if (((xe = N.type), xe === z)) {
                    if (T.tag === 7) {
                      (n(D, T.sibling),
                        (I = u(T, N.props.children)),
                        (I.return = D),
                        (D = I));
                      break e;
                    }
                  } else if (
                    T.elementType === xe ||
                    (typeof xe == "object" &&
                      xe !== null &&
                      xe.$$typeof === $ &&
                      ua(xe) === T.type)
                  ) {
                    (n(D, T.sibling),
                      (I = u(T, N.props)),
                      Vi(I, N),
                      (I.return = D),
                      (D = I));
                    break e;
                  }
                  n(D, T);
                  break;
                } else t(D, T);
                T = T.sibling;
              }
              N.type === z
                ? ((I = ta(N.props.children, D.mode, I, N.key)),
                  (I.return = D),
                  (D = I))
                : ((I = ku(N.type, N.key, N.props, null, D.mode, I)),
                  Vi(I, N),
                  (I.return = D),
                  (D = I));
            }
            return d(D);
          case M:
            e: {
              for (xe = N.key; T !== null; ) {
                if (T.key === xe)
                  if (
                    T.tag === 4 &&
                    T.stateNode.containerInfo === N.containerInfo &&
                    T.stateNode.implementation === N.implementation
                  ) {
                    (n(D, T.sibling),
                      (I = u(T, N.children || [])),
                      (I.return = D),
                      (D = I));
                    break e;
                  } else {
                    n(D, T);
                    break;
                  }
                else t(D, T);
                T = T.sibling;
              }
              ((I = Qo(N, D.mode, I)), (I.return = D), (D = I));
            }
            return d(D);
          case $:
            return ((N = ua(N)), Fe(D, T, N, I));
        }
        if (oe(N)) return ve(D, T, N, I);
        if (Q(N)) {
          if (((xe = Q(N)), typeof xe != "function")) throw Error(s(150));
          return ((N = xe.call(N)), _e(D, T, N, I));
        }
        if (typeof N.then == "function") return Fe(D, T, $u(N), I);
        if (N.$$typeof === Y) return Fe(D, T, Zu(D, N), I);
        Wu(D, N);
      }
      return (typeof N == "string" && N !== "") ||
        typeof N == "number" ||
        typeof N == "bigint"
        ? ((N = "" + N),
          T !== null && T.tag === 6
            ? (n(D, T.sibling), (I = u(T, N)), (I.return = D), (D = I))
            : (n(D, T), (I = Xo(N, D.mode, I)), (I.return = D), (D = I)),
          d(D))
        : n(D, T);
    }
    return function (D, T, N, I) {
      try {
        Li = 0;
        var xe = Fe(D, T, N, I);
        return ((Ga = null), xe);
      } catch (Se) {
        if (Se === ja || Se === Ju) throw Se;
        var je = Wt(29, Se, null, D.mode);
        return ((je.lanes = I), (je.return = D), je);
      } finally {
      }
    };
  }
  var oa = Hd(!0),
    Yd = Hd(!1),
    _l = !1;
  function ls(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function as(e, t) {
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
  function Rl(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function Cl(e, t, n) {
    var l = e.updateQueue;
    if (l === null) return null;
    if (((l = l.shared), (ke & 2) !== 0)) {
      var u = l.pending;
      return (
        u === null ? (t.next = t) : ((t.next = u.next), (u.next = t)),
        (l.pending = t),
        (t = Gu(e)),
        Ad(e, null, n),
        t
      );
    }
    return (ju(e, l, t, n), Gu(e));
  }
  function Bi(e, t, n) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194048) !== 0))
    ) {
      var l = t.lanes;
      ((l &= e.pendingLanes), (n |= l), (t.lanes = n), Cu(e, n));
    }
  }
  function is(e, t) {
    var n = e.updateQueue,
      l = e.alternate;
    if (l !== null && ((l = l.updateQueue), n === l)) {
      var u = null,
        o = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var d = {
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: null,
            next: null,
          };
          (o === null ? (u = o = d) : (o = o.next = d), (n = n.next));
        } while (n !== null);
        o === null ? (u = o = t) : (o = o.next = t);
      } else u = o = t;
      ((n = {
        baseState: l.baseState,
        firstBaseUpdate: u,
        lastBaseUpdate: o,
        shared: l.shared,
        callbacks: l.callbacks,
      }),
        (e.updateQueue = n));
      return;
    }
    ((e = n.lastBaseUpdate),
      e === null ? (n.firstBaseUpdate = t) : (e.next = t),
      (n.lastBaseUpdate = t));
  }
  var us = !1;
  function Hi() {
    if (us) {
      var e = qa;
      if (e !== null) throw e;
    }
  }
  function Yi(e, t, n, l) {
    us = !1;
    var u = e.updateQueue;
    _l = !1;
    var o = u.firstBaseUpdate,
      d = u.lastBaseUpdate,
      g = u.shared.pending;
    if (g !== null) {
      u.shared.pending = null;
      var E = g,
        L = E.next;
      ((E.next = null), d === null ? (o = L) : (d.next = L), (d = E));
      var F = e.alternate;
      F !== null &&
        ((F = F.updateQueue),
        (g = F.lastBaseUpdate),
        g !== d &&
          (g === null ? (F.firstBaseUpdate = L) : (g.next = L),
          (F.lastBaseUpdate = E)));
    }
    if (o !== null) {
      var ee = u.baseState;
      ((d = 0), (F = L = E = null), (g = o));
      do {
        var H = g.lane & -536870913,
          j = H !== g.lane;
        if (j ? (Ne & H) === H : (l & H) === H) {
          (H !== 0 && H === Ya && (us = !0),
            F !== null &&
              (F = F.next =
                {
                  lane: 0,
                  tag: g.tag,
                  payload: g.payload,
                  callback: null,
                  next: null,
                }));
          e: {
            var ve = e,
              _e = g;
            H = t;
            var Fe = n;
            switch (_e.tag) {
              case 1:
                if (((ve = _e.payload), typeof ve == "function")) {
                  ee = ve.call(Fe, ee, H);
                  break e;
                }
                ee = ve;
                break e;
              case 3:
                ve.flags = (ve.flags & -65537) | 128;
              case 0:
                if (
                  ((ve = _e.payload),
                  (H = typeof ve == "function" ? ve.call(Fe, ee, H) : ve),
                  H == null)
                )
                  break e;
                ee = b({}, ee, H);
                break e;
              case 2:
                _l = !0;
            }
          }
          ((H = g.callback),
            H !== null &&
              ((e.flags |= 64),
              j && (e.flags |= 8192),
              (j = u.callbacks),
              j === null ? (u.callbacks = [H]) : j.push(H)));
        } else
          ((j = {
            lane: H,
            tag: g.tag,
            payload: g.payload,
            callback: g.callback,
            next: null,
          }),
            F === null ? ((L = F = j), (E = ee)) : (F = F.next = j),
            (d |= H));
        if (((g = g.next), g === null)) {
          if (((g = u.shared.pending), g === null)) break;
          ((j = g),
            (g = j.next),
            (j.next = null),
            (u.lastBaseUpdate = j),
            (u.shared.pending = null));
        }
      } while (!0);
      (F === null && (E = ee),
        (u.baseState = E),
        (u.firstBaseUpdate = L),
        (u.lastBaseUpdate = F),
        o === null && (u.shared.lanes = 0),
        (zl |= d),
        (e.lanes = d),
        (e.memoizedState = ee));
    }
  }
  function qd(e, t) {
    if (typeof e != "function") throw Error(s(191, e));
    e.call(t);
  }
  function jd(e, t) {
    var n = e.callbacks;
    if (n !== null)
      for (e.callbacks = null, e = 0; e < n.length; e++) qd(n[e], t);
  }
  var ka = S(null),
    Pu = S(0);
  function Gd(e, t) {
    ((e = ul), J(Pu, e), J(ka, t), (ul = e | t.baseLanes));
  }
  function rs() {
    (J(Pu, ul), J(ka, ka.current));
  }
  function os() {
    ((ul = Pu.current), V(ka), V(Pu));
  }
  var Pt = S(null),
    vn = null;
  function wl(e) {
    var t = e.alternate;
    (J(rt, rt.current & 1),
      J(Pt, e),
      vn === null &&
        (t === null || ka.current !== null || t.memoizedState !== null) &&
        (vn = e));
  }
  function ss(e) {
    (J(rt, rt.current), J(Pt, e), vn === null && (vn = e));
  }
  function kd(e) {
    e.tag === 22
      ? (J(rt, rt.current), J(Pt, e), vn === null && (vn = e))
      : Ml();
  }
  function Ml() {
    (J(rt, rt.current), J(Pt, Pt.current));
  }
  function It(e) {
    (V(Pt), vn === e && (vn = null), V(rt));
  }
  var rt = S(0);
  function Iu(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && ((n = n.dehydrated), n === null || gc(n) || yc(n)))
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
  var Pn = 0,
    Ce = null,
    Ke = null,
    ft = null,
    er = !1,
    Xa = !1,
    sa = !1,
    tr = 0,
    qi = 0,
    Qa = null,
    qp = 0;
  function at() {
    throw Error(s(321));
  }
  function cs(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!$t(e[n], t[n])) return !1;
    return !0;
  }
  function fs(e, t, n, l, u, o) {
    return (
      (Pn = o),
      (Ce = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (R.H = e === null || e.memoizedState === null ? Rm : Rs),
      (sa = !1),
      (o = n(l, u)),
      (sa = !1),
      Xa && (o = Qd(t, n, l, u)),
      Xd(e),
      o
    );
  }
  function Xd(e) {
    R.H = ki;
    var t = Ke !== null && Ke.next !== null;
    if (((Pn = 0), (ft = Ke = Ce = null), (er = !1), (qi = 0), (Qa = null), t))
      throw Error(s(300));
    e === null ||
      dt ||
      ((e = e.dependencies), e !== null && Qu(e) && (dt = !0));
  }
  function Qd(e, t, n, l) {
    Ce = e;
    var u = 0;
    do {
      if ((Xa && (Qa = null), (qi = 0), (Xa = !1), 25 <= u))
        throw Error(s(301));
      if (((u += 1), (ft = Ke = null), e.updateQueue != null)) {
        var o = e.updateQueue;
        ((o.lastEffect = null),
          (o.events = null),
          (o.stores = null),
          o.memoCache != null && (o.memoCache.index = 0));
      }
      ((R.H = Cm), (o = t(n, l)));
    } while (Xa);
    return o;
  }
  function jp() {
    var e = R.H,
      t = e.useState()[0];
    return (
      (t = typeof t.then == "function" ? ji(t) : t),
      (e = e.useState()[0]),
      (Ke !== null ? Ke.memoizedState : null) !== e && (Ce.flags |= 1024),
      t
    );
  }
  function ds() {
    var e = tr !== 0;
    return ((tr = 0), e);
  }
  function ms(e, t, n) {
    ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~n));
  }
  function hs(e) {
    if (er) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        (t !== null && (t.pending = null), (e = e.next));
      }
      er = !1;
    }
    ((Pn = 0), (ft = Ke = Ce = null), (Xa = !1), (qi = tr = 0), (Qa = null));
  }
  function Ut() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return (ft === null ? (Ce.memoizedState = ft = e) : (ft = ft.next = e), ft);
  }
  function ot() {
    if (Ke === null) {
      var e = Ce.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Ke.next;
    var t = ft === null ? Ce.memoizedState : ft.next;
    if (t !== null) ((ft = t), (Ke = e));
    else {
      if (e === null)
        throw Ce.alternate === null ? Error(s(467)) : Error(s(310));
      ((Ke = e),
        (e = {
          memoizedState: Ke.memoizedState,
          baseState: Ke.baseState,
          baseQueue: Ke.baseQueue,
          queue: Ke.queue,
          next: null,
        }),
        ft === null ? (Ce.memoizedState = ft = e) : (ft = ft.next = e));
    }
    return ft;
  }
  function nr() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function ji(e) {
    var t = qi;
    return (
      (qi += 1),
      Qa === null && (Qa = []),
      (e = Ld(Qa, e, t)),
      (t = Ce),
      (ft === null ? t.memoizedState : ft.next) === null &&
        ((t = t.alternate),
        (R.H = t === null || t.memoizedState === null ? Rm : Rs)),
      e
    );
  }
  function lr(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return ji(e);
      if (e.$$typeof === Y) return _t(e);
    }
    throw Error(s(438, String(e)));
  }
  function gs(e) {
    var t = null,
      n = Ce.updateQueue;
    if ((n !== null && (t = n.memoCache), t == null)) {
      var l = Ce.alternate;
      l !== null &&
        ((l = l.updateQueue),
        l !== null &&
          ((l = l.memoCache),
          l != null &&
            (t = {
              data: l.data.map(function (u) {
                return u.slice();
              }),
              index: 0,
            })));
    }
    if (
      (t == null && (t = { data: [], index: 0 }),
      n === null && ((n = nr()), (Ce.updateQueue = n)),
      (n.memoCache = t),
      (n = t.data[t.index]),
      n === void 0)
    )
      for (n = t.data[t.index] = Array(e), l = 0; l < e; l++) n[l] = ge;
    return (t.index++, n);
  }
  function In(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function ar(e) {
    var t = ot();
    return ys(t, Ke, e);
  }
  function ys(e, t, n) {
    var l = e.queue;
    if (l === null) throw Error(s(311));
    l.lastRenderedReducer = n;
    var u = e.baseQueue,
      o = l.pending;
    if (o !== null) {
      if (u !== null) {
        var d = u.next;
        ((u.next = o.next), (o.next = d));
      }
      ((t.baseQueue = u = o), (l.pending = null));
    }
    if (((o = e.baseState), u === null)) e.memoizedState = o;
    else {
      t = u.next;
      var g = (d = null),
        E = null,
        L = t,
        F = !1;
      do {
        var ee = L.lane & -536870913;
        if (ee !== L.lane ? (Ne & ee) === ee : (Pn & ee) === ee) {
          var H = L.revertLane;
          if (H === 0)
            (E !== null &&
              (E = E.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: L.action,
                  hasEagerState: L.hasEagerState,
                  eagerState: L.eagerState,
                  next: null,
                }),
              ee === Ya && (F = !0));
          else if ((Pn & H) === H) {
            ((L = L.next), H === Ya && (F = !0));
            continue;
          } else
            ((ee = {
              lane: 0,
              revertLane: L.revertLane,
              gesture: null,
              action: L.action,
              hasEagerState: L.hasEagerState,
              eagerState: L.eagerState,
              next: null,
            }),
              E === null ? ((g = E = ee), (d = o)) : (E = E.next = ee),
              (Ce.lanes |= H),
              (zl |= H));
          ((ee = L.action),
            sa && n(o, ee),
            (o = L.hasEagerState ? L.eagerState : n(o, ee)));
        } else
          ((H = {
            lane: ee,
            revertLane: L.revertLane,
            gesture: L.gesture,
            action: L.action,
            hasEagerState: L.hasEagerState,
            eagerState: L.eagerState,
            next: null,
          }),
            E === null ? ((g = E = H), (d = o)) : (E = E.next = H),
            (Ce.lanes |= ee),
            (zl |= ee));
        L = L.next;
      } while (L !== null && L !== t);
      if (
        (E === null ? (d = o) : (E.next = g),
        !$t(o, e.memoizedState) && ((dt = !0), F && ((n = qa), n !== null)))
      )
        throw n;
      ((e.memoizedState = o),
        (e.baseState = d),
        (e.baseQueue = E),
        (l.lastRenderedState = o));
    }
    return (u === null && (l.lanes = 0), [e.memoizedState, l.dispatch]);
  }
  function vs(e) {
    var t = ot(),
      n = t.queue;
    if (n === null) throw Error(s(311));
    n.lastRenderedReducer = e;
    var l = n.dispatch,
      u = n.pending,
      o = t.memoizedState;
    if (u !== null) {
      n.pending = null;
      var d = (u = u.next);
      do ((o = e(o, d.action)), (d = d.next));
      while (d !== u);
      ($t(o, t.memoizedState) || (dt = !0),
        (t.memoizedState = o),
        t.baseQueue === null && (t.baseState = o),
        (n.lastRenderedState = o));
    }
    return [o, l];
  }
  function Zd(e, t, n) {
    var l = Ce,
      u = ot(),
      o = Be;
    if (o) {
      if (n === void 0) throw Error(s(407));
      n = n();
    } else n = t();
    var d = !$t((Ke || u).memoizedState, n);
    if (
      (d && ((u.memoizedState = n), (dt = !0)),
      (u = u.queue),
      Ss(Fd.bind(null, l, u, e), [e]),
      u.getSnapshot !== t || d || (ft !== null && ft.memoizedState.tag & 1))
    ) {
      if (
        ((l.flags |= 2048),
        Za(9, { destroy: void 0 }, Jd.bind(null, l, u, n, t), null),
        $e === null)
      )
        throw Error(s(349));
      o || (Pn & 127) !== 0 || Kd(l, t, n);
    }
    return n;
  }
  function Kd(e, t, n) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = Ce.updateQueue),
      t === null
        ? ((t = nr()), (Ce.updateQueue = t), (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
  }
  function Jd(e, t, n, l) {
    ((t.value = n), (t.getSnapshot = l), $d(t) && Wd(e));
  }
  function Fd(e, t, n) {
    return n(function () {
      $d(t) && Wd(e);
    });
  }
  function $d(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !$t(e, n);
    } catch {
      return !0;
    }
  }
  function Wd(e) {
    var t = ea(e, 2);
    t !== null && Gt(t, e, 2);
  }
  function ps(e) {
    var t = Ut();
    if (typeof e == "function") {
      var n = e;
      if (((e = n()), sa)) {
        Ft(!0);
        try {
          n();
        } finally {
          Ft(!1);
        }
      }
    }
    return (
      (t.memoizedState = t.baseState = e),
      (t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: In,
        lastRenderedState: e,
      }),
      t
    );
  }
  function Pd(e, t, n, l) {
    return ((e.baseState = n), ys(e, Ke, typeof l == "function" ? l : In));
  }
  function Gp(e, t, n, l, u) {
    if (rr(e)) throw Error(s(485));
    if (((e = t.action), e !== null)) {
      var o = {
        payload: u,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (d) {
          o.listeners.push(d);
        },
      };
      (R.T !== null ? n(!0) : (o.isTransition = !1),
        l(o),
        (n = t.pending),
        n === null
          ? ((o.next = t.pending = o), Id(t, o))
          : ((o.next = n.next), (t.pending = n.next = o)));
    }
  }
  function Id(e, t) {
    var n = t.action,
      l = t.payload,
      u = e.state;
    if (t.isTransition) {
      var o = R.T,
        d = {};
      R.T = d;
      try {
        var g = n(u, l),
          E = R.S;
        (E !== null && E(d, g), em(e, t, g));
      } catch (L) {
        bs(e, t, L);
      } finally {
        (o !== null && d.types !== null && (o.types = d.types), (R.T = o));
      }
    } else
      try {
        ((o = n(u, l)), em(e, t, o));
      } catch (L) {
        bs(e, t, L);
      }
  }
  function em(e, t, n) {
    n !== null && typeof n == "object" && typeof n.then == "function"
      ? n.then(
          function (l) {
            tm(e, t, l);
          },
          function (l) {
            return bs(e, t, l);
          }
        )
      : tm(e, t, n);
  }
  function tm(e, t, n) {
    ((t.status = "fulfilled"),
      (t.value = n),
      nm(t),
      (e.state = n),
      (t = e.pending),
      t !== null &&
        ((n = t.next),
        n === t ? (e.pending = null) : ((n = n.next), (t.next = n), Id(e, n))));
  }
  function bs(e, t, n) {
    var l = e.pending;
    if (((e.pending = null), l !== null)) {
      l = l.next;
      do ((t.status = "rejected"), (t.reason = n), nm(t), (t = t.next));
      while (t !== l);
    }
    e.action = null;
  }
  function nm(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function lm(e, t) {
    return t;
  }
  function am(e, t) {
    if (Be) {
      var n = $e.formState;
      if (n !== null) {
        e: {
          var l = Ce;
          if (Be) {
            if (et) {
              t: {
                for (var u = et, o = yn; u.nodeType !== 8; ) {
                  if (!o) {
                    u = null;
                    break t;
                  }
                  if (((u = pn(u.nextSibling)), u === null)) {
                    u = null;
                    break t;
                  }
                }
                ((o = u.data), (u = o === "F!" || o === "F" ? u : null));
              }
              if (u) {
                ((et = pn(u.nextSibling)), (l = u.data === "F!"));
                break e;
              }
            }
            xl(l);
          }
          l = !1;
        }
        l && (t = n[0]);
      }
    }
    return (
      (n = Ut()),
      (n.memoizedState = n.baseState = t),
      (l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: lm,
        lastRenderedState: t,
      }),
      (n.queue = l),
      (n = xm.bind(null, Ce, l)),
      (l.dispatch = n),
      (l = ps(!1)),
      (o = _s.bind(null, Ce, !1, l.queue)),
      (l = Ut()),
      (u = { state: t, dispatch: null, action: e, pending: null }),
      (l.queue = u),
      (n = Gp.bind(null, Ce, u, o, n)),
      (u.dispatch = n),
      (l.memoizedState = e),
      [t, n, !1]
    );
  }
  function im(e) {
    var t = ot();
    return um(t, Ke, e);
  }
  function um(e, t, n) {
    if (
      ((t = ys(e, t, lm)[0]),
      (e = ar(In)[0]),
      typeof t == "object" && t !== null && typeof t.then == "function")
    )
      try {
        var l = ji(t);
      } catch (d) {
        throw d === ja ? Ju : d;
      }
    else l = t;
    t = ot();
    var u = t.queue,
      o = u.dispatch;
    return (
      n !== t.memoizedState &&
        ((Ce.flags |= 2048),
        Za(9, { destroy: void 0 }, kp.bind(null, u, n), null)),
      [l, o, e]
    );
  }
  function kp(e, t) {
    e.action = t;
  }
  function rm(e) {
    var t = ot(),
      n = Ke;
    if (n !== null) return um(t, n, e);
    (ot(), (t = t.memoizedState), (n = ot()));
    var l = n.queue.dispatch;
    return ((n.memoizedState = e), [t, l, !1]);
  }
  function Za(e, t, n, l) {
    return (
      (e = { tag: e, create: n, deps: l, inst: t, next: null }),
      (t = Ce.updateQueue),
      t === null && ((t = nr()), (Ce.updateQueue = t)),
      (n = t.lastEffect),
      n === null
        ? (t.lastEffect = e.next = e)
        : ((l = n.next), (n.next = e), (e.next = l), (t.lastEffect = e)),
      e
    );
  }
  function om() {
    return ot().memoizedState;
  }
  function ir(e, t, n, l) {
    var u = Ut();
    ((Ce.flags |= e),
      (u.memoizedState = Za(
        1 | t,
        { destroy: void 0 },
        n,
        l === void 0 ? null : l
      )));
  }
  function ur(e, t, n, l) {
    var u = ot();
    l = l === void 0 ? null : l;
    var o = u.memoizedState.inst;
    Ke !== null && l !== null && cs(l, Ke.memoizedState.deps)
      ? (u.memoizedState = Za(t, o, n, l))
      : ((Ce.flags |= e), (u.memoizedState = Za(1 | t, o, n, l)));
  }
  function sm(e, t) {
    ir(8390656, 8, e, t);
  }
  function Ss(e, t) {
    ur(2048, 8, e, t);
  }
  function Xp(e) {
    Ce.flags |= 4;
    var t = Ce.updateQueue;
    if (t === null) ((t = nr()), (Ce.updateQueue = t), (t.events = [e]));
    else {
      var n = t.events;
      n === null ? (t.events = [e]) : n.push(e);
    }
  }
  function cm(e) {
    var t = ot().memoizedState;
    return (
      Xp({ ref: t, nextImpl: e }),
      function () {
        if ((ke & 2) !== 0) throw Error(s(440));
        return t.impl.apply(void 0, arguments);
      }
    );
  }
  function fm(e, t) {
    return ur(4, 2, e, t);
  }
  function dm(e, t) {
    return ur(4, 4, e, t);
  }
  function mm(e, t) {
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
  function hm(e, t, n) {
    ((n = n != null ? n.concat([e]) : null), ur(4, 4, mm.bind(null, t, e), n));
  }
  function Es() {}
  function gm(e, t) {
    var n = ot();
    t = t === void 0 ? null : t;
    var l = n.memoizedState;
    return t !== null && cs(t, l[1]) ? l[0] : ((n.memoizedState = [e, t]), e);
  }
  function ym(e, t) {
    var n = ot();
    t = t === void 0 ? null : t;
    var l = n.memoizedState;
    if (t !== null && cs(t, l[1])) return l[0];
    if (((l = e()), sa)) {
      Ft(!0);
      try {
        e();
      } finally {
        Ft(!1);
      }
    }
    return ((n.memoizedState = [l, t]), l);
  }
  function As(e, t, n) {
    return n === void 0 || ((Pn & 1073741824) !== 0 && (Ne & 261930) === 0)
      ? (e.memoizedState = t)
      : ((e.memoizedState = n), (e = vh()), (Ce.lanes |= e), (zl |= e), n);
  }
  function vm(e, t, n, l) {
    return $t(n, t)
      ? n
      : ka.current !== null
        ? ((e = As(e, n, l)), $t(e, t) || (dt = !0), e)
        : (Pn & 42) === 0 || ((Pn & 1073741824) !== 0 && (Ne & 261930) === 0)
          ? ((dt = !0), (e.memoizedState = n))
          : ((e = vh()), (Ce.lanes |= e), (zl |= e), t);
  }
  function pm(e, t, n, l, u) {
    var o = O.p;
    O.p = o !== 0 && 8 > o ? o : 8;
    var d = R.T,
      g = {};
    ((R.T = g), _s(e, !1, t, n));
    try {
      var E = u(),
        L = R.S;
      if (
        (L !== null && L(g, E),
        E !== null && typeof E == "object" && typeof E.then == "function")
      ) {
        var F = Yp(E, l);
        Gi(e, t, F, nn(e));
      } else Gi(e, t, l, nn(e));
    } catch (ee) {
      Gi(e, t, { then: function () {}, status: "rejected", reason: ee }, nn());
    } finally {
      ((O.p = o),
        d !== null && g.types !== null && (d.types = g.types),
        (R.T = d));
    }
  }
  function Qp() {}
  function xs(e, t, n, l) {
    if (e.tag !== 5) throw Error(s(476));
    var u = bm(e).queue;
    pm(
      e,
      u,
      t,
      w,
      n === null
        ? Qp
        : function () {
            return (Sm(e), n(l));
          }
    );
  }
  function bm(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: w,
      baseState: w,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: In,
        lastRenderedState: w,
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
          lastRenderedReducer: In,
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
  function Sm(e) {
    var t = bm(e);
    (t.next === null && (t = e.alternate.memoizedState),
      Gi(e, t.next.queue, {}, nn()));
  }
  function Ts() {
    return _t(iu);
  }
  function Em() {
    return ot().memoizedState;
  }
  function Am() {
    return ot().memoizedState;
  }
  function Zp(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var n = nn();
          e = Rl(n);
          var l = Cl(t, e, n);
          (l !== null && (Gt(l, t, n), Bi(l, t, n)),
            (t = { cache: Io() }),
            (e.payload = t));
          return;
      }
      t = t.return;
    }
  }
  function Kp(e, t, n) {
    var l = nn();
    ((n = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      rr(e)
        ? Tm(t, n)
        : ((n = Go(e, t, n, l)), n !== null && (Gt(n, e, l), _m(n, t, l))));
  }
  function xm(e, t, n) {
    var l = nn();
    Gi(e, t, n, l);
  }
  function Gi(e, t, n, l) {
    var u = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (rr(e)) Tm(t, u);
    else {
      var o = e.alternate;
      if (
        e.lanes === 0 &&
        (o === null || o.lanes === 0) &&
        ((o = t.lastRenderedReducer), o !== null)
      )
        try {
          var d = t.lastRenderedState,
            g = o(d, n);
          if (((u.hasEagerState = !0), (u.eagerState = g), $t(g, d)))
            return (ju(e, t, u, 0), $e === null && qu(), !1);
        } catch {
        } finally {
        }
      if (((n = Go(e, t, u, l)), n !== null))
        return (Gt(n, e, l), _m(n, t, l), !0);
    }
    return !1;
  }
  function _s(e, t, n, l) {
    if (
      ((l = {
        lane: 2,
        revertLane: lc(),
        gesture: null,
        action: l,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      rr(e))
    ) {
      if (t) throw Error(s(479));
    } else ((t = Go(e, n, l, 2)), t !== null && Gt(t, e, 2));
  }
  function rr(e) {
    var t = e.alternate;
    return e === Ce || (t !== null && t === Ce);
  }
  function Tm(e, t) {
    Xa = er = !0;
    var n = e.pending;
    (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
      (e.pending = t));
  }
  function _m(e, t, n) {
    if ((n & 4194048) !== 0) {
      var l = t.lanes;
      ((l &= e.pendingLanes), (n |= l), (t.lanes = n), Cu(e, n));
    }
  }
  var ki = {
    readContext: _t,
    use: lr,
    useCallback: at,
    useContext: at,
    useEffect: at,
    useImperativeHandle: at,
    useLayoutEffect: at,
    useInsertionEffect: at,
    useMemo: at,
    useReducer: at,
    useRef: at,
    useState: at,
    useDebugValue: at,
    useDeferredValue: at,
    useTransition: at,
    useSyncExternalStore: at,
    useId: at,
    useHostTransitionStatus: at,
    useFormState: at,
    useActionState: at,
    useOptimistic: at,
    useMemoCache: at,
    useCacheRefresh: at,
  };
  ki.useEffectEvent = at;
  var Rm = {
      readContext: _t,
      use: lr,
      useCallback: function (e, t) {
        return ((Ut().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: _t,
      useEffect: sm,
      useImperativeHandle: function (e, t, n) {
        ((n = n != null ? n.concat([e]) : null),
          ir(4194308, 4, mm.bind(null, t, e), n));
      },
      useLayoutEffect: function (e, t) {
        return ir(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        ir(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = Ut();
        t = t === void 0 ? null : t;
        var l = e();
        if (sa) {
          Ft(!0);
          try {
            e();
          } finally {
            Ft(!1);
          }
        }
        return ((n.memoizedState = [l, t]), l);
      },
      useReducer: function (e, t, n) {
        var l = Ut();
        if (n !== void 0) {
          var u = n(t);
          if (sa) {
            Ft(!0);
            try {
              n(t);
            } finally {
              Ft(!1);
            }
          }
        } else u = t;
        return (
          (l.memoizedState = l.baseState = u),
          (e = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: u,
          }),
          (l.queue = e),
          (e = e.dispatch = Kp.bind(null, Ce, e)),
          [l.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = Ut();
        return ((e = { current: e }), (t.memoizedState = e));
      },
      useState: function (e) {
        e = ps(e);
        var t = e.queue,
          n = xm.bind(null, Ce, t);
        return ((t.dispatch = n), [e.memoizedState, n]);
      },
      useDebugValue: Es,
      useDeferredValue: function (e, t) {
        var n = Ut();
        return As(n, e, t);
      },
      useTransition: function () {
        var e = ps(!1);
        return (
          (e = pm.bind(null, Ce, e.queue, !0, !1)),
          (Ut().memoizedState = e),
          [!1, e]
        );
      },
      useSyncExternalStore: function (e, t, n) {
        var l = Ce,
          u = Ut();
        if (Be) {
          if (n === void 0) throw Error(s(407));
          n = n();
        } else {
          if (((n = t()), $e === null)) throw Error(s(349));
          (Ne & 127) !== 0 || Kd(l, t, n);
        }
        u.memoizedState = n;
        var o = { value: n, getSnapshot: t };
        return (
          (u.queue = o),
          sm(Fd.bind(null, l, o, e), [e]),
          (l.flags |= 2048),
          Za(9, { destroy: void 0 }, Jd.bind(null, l, o, n, t), null),
          n
        );
      },
      useId: function () {
        var e = Ut(),
          t = $e.identifierPrefix;
        if (Be) {
          var n = Nn,
            l = Un;
          ((n = (l & ~(1 << (32 - De(l) - 1))).toString(32) + n),
            (t = "_" + t + "R_" + n),
            (n = tr++),
            0 < n && (t += "H" + n.toString(32)),
            (t += "_"));
        } else ((n = qp++), (t = "_" + t + "r_" + n.toString(32) + "_"));
        return (e.memoizedState = t);
      },
      useHostTransitionStatus: Ts,
      useFormState: am,
      useActionState: am,
      useOptimistic: function (e) {
        var t = Ut();
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
          (t = _s.bind(null, Ce, !0, n)),
          (n.dispatch = t),
          [e, t]
        );
      },
      useMemoCache: gs,
      useCacheRefresh: function () {
        return (Ut().memoizedState = Zp.bind(null, Ce));
      },
      useEffectEvent: function (e) {
        var t = Ut(),
          n = { impl: e };
        return (
          (t.memoizedState = n),
          function () {
            if ((ke & 2) !== 0) throw Error(s(440));
            return n.impl.apply(void 0, arguments);
          }
        );
      },
    },
    Rs = {
      readContext: _t,
      use: lr,
      useCallback: gm,
      useContext: _t,
      useEffect: Ss,
      useImperativeHandle: hm,
      useInsertionEffect: fm,
      useLayoutEffect: dm,
      useMemo: ym,
      useReducer: ar,
      useRef: om,
      useState: function () {
        return ar(In);
      },
      useDebugValue: Es,
      useDeferredValue: function (e, t) {
        var n = ot();
        return vm(n, Ke.memoizedState, e, t);
      },
      useTransition: function () {
        var e = ar(In)[0],
          t = ot().memoizedState;
        return [typeof e == "boolean" ? e : ji(e), t];
      },
      useSyncExternalStore: Zd,
      useId: Em,
      useHostTransitionStatus: Ts,
      useFormState: im,
      useActionState: im,
      useOptimistic: function (e, t) {
        var n = ot();
        return Pd(n, Ke, e, t);
      },
      useMemoCache: gs,
      useCacheRefresh: Am,
    };
  Rs.useEffectEvent = cm;
  var Cm = {
    readContext: _t,
    use: lr,
    useCallback: gm,
    useContext: _t,
    useEffect: Ss,
    useImperativeHandle: hm,
    useInsertionEffect: fm,
    useLayoutEffect: dm,
    useMemo: ym,
    useReducer: vs,
    useRef: om,
    useState: function () {
      return vs(In);
    },
    useDebugValue: Es,
    useDeferredValue: function (e, t) {
      var n = ot();
      return Ke === null ? As(n, e, t) : vm(n, Ke.memoizedState, e, t);
    },
    useTransition: function () {
      var e = vs(In)[0],
        t = ot().memoizedState;
      return [typeof e == "boolean" ? e : ji(e), t];
    },
    useSyncExternalStore: Zd,
    useId: Em,
    useHostTransitionStatus: Ts,
    useFormState: rm,
    useActionState: rm,
    useOptimistic: function (e, t) {
      var n = ot();
      return Ke !== null
        ? Pd(n, Ke, e, t)
        : ((n.baseState = e), [e, n.queue.dispatch]);
    },
    useMemoCache: gs,
    useCacheRefresh: Am,
  };
  Cm.useEffectEvent = cm;
  function Cs(e, t, n, l) {
    ((t = e.memoizedState),
      (n = n(l, t)),
      (n = n == null ? t : b({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n));
  }
  var ws = {
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var l = nn(),
        u = Rl(l);
      ((u.payload = t),
        n != null && (u.callback = n),
        (t = Cl(e, u, l)),
        t !== null && (Gt(t, e, l), Bi(t, e, l)));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var l = nn(),
        u = Rl(l);
      ((u.tag = 1),
        (u.payload = t),
        n != null && (u.callback = n),
        (t = Cl(e, u, l)),
        t !== null && (Gt(t, e, l), Bi(t, e, l)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = nn(),
        l = Rl(n);
      ((l.tag = 2),
        t != null && (l.callback = t),
        (t = Cl(e, l, n)),
        t !== null && (Gt(t, e, n), Bi(t, e, n)));
    },
  };
  function wm(e, t, n, l, u, o, d) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(l, o, d)
        : t.prototype && t.prototype.isPureReactComponent
          ? !Mi(n, l) || !Mi(u, o)
          : !0
    );
  }
  function Mm(e, t, n, l) {
    ((e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(n, l),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(n, l),
      t.state !== e && ws.enqueueReplaceState(t, t.state, null));
  }
  function ca(e, t) {
    var n = t;
    if ("ref" in t) {
      n = {};
      for (var l in t) l !== "ref" && (n[l] = t[l]);
    }
    if ((e = e.defaultProps)) {
      n === t && (n = b({}, n));
      for (var u in e) n[u] === void 0 && (n[u] = e[u]);
    }
    return n;
  }
  function Om(e) {
    Yu(e);
  }
  function Dm(e) {
    console.error(e);
  }
  function zm(e) {
    Yu(e);
  }
  function or(e, t) {
    try {
      var n = e.onUncaughtError;
      n(t.value, { componentStack: t.stack });
    } catch (l) {
      setTimeout(function () {
        throw l;
      });
    }
  }
  function Um(e, t, n) {
    try {
      var l = e.onCaughtError;
      l(n.value, {
        componentStack: n.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null,
      });
    } catch (u) {
      setTimeout(function () {
        throw u;
      });
    }
  }
  function Ms(e, t, n) {
    return (
      (n = Rl(n)),
      (n.tag = 3),
      (n.payload = { element: null }),
      (n.callback = function () {
        or(e, t);
      }),
      n
    );
  }
  function Nm(e) {
    return ((e = Rl(e)), (e.tag = 3), e);
  }
  function Lm(e, t, n, l) {
    var u = n.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var o = l.value;
      ((e.payload = function () {
        return u(o);
      }),
        (e.callback = function () {
          Um(t, n, l);
        }));
    }
    var d = n.stateNode;
    d !== null &&
      typeof d.componentDidCatch == "function" &&
      (e.callback = function () {
        (Um(t, n, l),
          typeof u != "function" &&
            (Ul === null ? (Ul = new Set([this])) : Ul.add(this)));
        var g = l.stack;
        this.componentDidCatch(l.value, {
          componentStack: g !== null ? g : "",
        });
      });
  }
  function Jp(e, t, n, l, u) {
    if (
      ((n.flags |= 32768),
      l !== null && typeof l == "object" && typeof l.then == "function")
    ) {
      if (
        ((t = n.alternate),
        t !== null && Ha(t, n, u, !0),
        (n = Pt.current),
        n !== null)
      ) {
        switch (n.tag) {
          case 31:
          case 13:
            return (
              vn === null ? Sr() : n.alternate === null && it === 0 && (it = 3),
              (n.flags &= -257),
              (n.flags |= 65536),
              (n.lanes = u),
              l === Fu
                ? (n.flags |= 16384)
                : ((t = n.updateQueue),
                  t === null ? (n.updateQueue = new Set([l])) : t.add(l),
                  ec(e, l, u)),
              !1
            );
          case 22:
            return (
              (n.flags |= 65536),
              l === Fu
                ? (n.flags |= 16384)
                : ((t = n.updateQueue),
                  t === null
                    ? ((t = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([l]),
                      }),
                      (n.updateQueue = t))
                    : ((n = t.retryQueue),
                      n === null ? (t.retryQueue = new Set([l])) : n.add(l)),
                  ec(e, l, u)),
              !1
            );
        }
        throw Error(s(435, n.tag));
      }
      return (ec(e, l, u), Sr(), !1);
    }
    if (Be)
      return (
        (t = Pt.current),
        t !== null
          ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = u),
            l !== Jo && ((e = Error(s(422), { cause: l })), zi(mn(e, n))))
          : (l !== Jo && ((t = Error(s(423), { cause: l })), zi(mn(t, n))),
            (e = e.current.alternate),
            (e.flags |= 65536),
            (u &= -u),
            (e.lanes |= u),
            (l = mn(l, n)),
            (u = Ms(e.stateNode, l, u)),
            is(e, u),
            it !== 4 && (it = 2)),
        !1
      );
    var o = Error(s(520), { cause: l });
    if (
      ((o = mn(o, n)),
      Wi === null ? (Wi = [o]) : Wi.push(o),
      it !== 4 && (it = 2),
      t === null)
    )
      return !0;
    ((l = mn(l, n)), (n = t));
    do {
      switch (n.tag) {
        case 3:
          return (
            (n.flags |= 65536),
            (e = u & -u),
            (n.lanes |= e),
            (e = Ms(n.stateNode, l, e)),
            is(n, e),
            !1
          );
        case 1:
          if (
            ((t = n.type),
            (o = n.stateNode),
            (n.flags & 128) === 0 &&
              (typeof t.getDerivedStateFromError == "function" ||
                (o !== null &&
                  typeof o.componentDidCatch == "function" &&
                  (Ul === null || !Ul.has(o)))))
          )
            return (
              (n.flags |= 65536),
              (u &= -u),
              (n.lanes |= u),
              (u = Nm(u)),
              Lm(u, e, n, l),
              is(n, u),
              !1
            );
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var Os = Error(s(461)),
    dt = !1;
  function Rt(e, t, n, l) {
    t.child = e === null ? Yd(t, null, n, l) : oa(t, e.child, n, l);
  }
  function Vm(e, t, n, l, u) {
    n = n.render;
    var o = t.ref;
    if ("ref" in l) {
      var d = {};
      for (var g in l) g !== "ref" && (d[g] = l[g]);
    } else d = l;
    return (
      aa(t),
      (l = fs(e, t, n, d, o, u)),
      (g = ds()),
      e !== null && !dt
        ? (ms(e, t, u), el(e, t, u))
        : (Be && g && Zo(t), (t.flags |= 1), Rt(e, t, l, u), t.child)
    );
  }
  function Bm(e, t, n, l, u) {
    if (e === null) {
      var o = n.type;
      return typeof o == "function" &&
        !ko(o) &&
        o.defaultProps === void 0 &&
        n.compare === null
        ? ((t.tag = 15), (t.type = o), Hm(e, t, o, l, u))
        : ((e = ku(n.type, null, l, t, t.mode, u)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((o = e.child), !Hs(e, u))) {
      var d = o.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : Mi), n(d, l) && e.ref === t.ref)
      )
        return el(e, t, u);
    }
    return (
      (t.flags |= 1),
      (e = Jn(o, l)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function Hm(e, t, n, l, u) {
    if (e !== null) {
      var o = e.memoizedProps;
      if (Mi(o, l) && e.ref === t.ref)
        if (((dt = !1), (t.pendingProps = l = o), Hs(e, u)))
          (e.flags & 131072) !== 0 && (dt = !0);
        else return ((t.lanes = e.lanes), el(e, t, u));
    }
    return Ds(e, t, n, l, u);
  }
  function Ym(e, t, n, l) {
    var u = l.children,
      o = e !== null ? e.memoizedState : null;
    if (
      (e === null &&
        t.stateNode === null &&
        (t.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      l.mode === "hidden")
    ) {
      if ((t.flags & 128) !== 0) {
        if (((o = o !== null ? o.baseLanes | n : n), e !== null)) {
          for (l = t.child = e.child, u = 0; l !== null; )
            ((u = u | l.lanes | l.childLanes), (l = l.sibling));
          l = u & ~o;
        } else ((l = 0), (t.child = null));
        return qm(e, t, o, n, l);
      }
      if ((n & 536870912) !== 0)
        ((t.memoizedState = { baseLanes: 0, cachePool: null }),
          e !== null && Ku(t, o !== null ? o.cachePool : null),
          o !== null ? Gd(t, o) : rs(),
          kd(t));
      else
        return (
          (l = t.lanes = 536870912),
          qm(e, t, o !== null ? o.baseLanes | n : n, n, l)
        );
    } else
      o !== null
        ? (Ku(t, o.cachePool), Gd(t, o), Ml(), (t.memoizedState = null))
        : (e !== null && Ku(t, null), rs(), Ml());
    return (Rt(e, t, u, n), t.child);
  }
  function Xi(e, t) {
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
  function qm(e, t, n, l, u) {
    var o = ts();
    return (
      (o = o === null ? null : { parent: ct._currentValue, pool: o }),
      (t.memoizedState = { baseLanes: n, cachePool: o }),
      e !== null && Ku(t, null),
      rs(),
      kd(t),
      e !== null && Ha(e, t, l, !0),
      (t.childLanes = u),
      null
    );
  }
  function sr(e, t) {
    return (
      (t = fr({ mode: t.mode, children: t.children }, e.mode)),
      (t.ref = e.ref),
      (e.child = t),
      (t.return = e),
      t
    );
  }
  function jm(e, t, n) {
    return (
      oa(t, e.child, null, n),
      (e = sr(t, t.pendingProps)),
      (e.flags |= 2),
      It(t),
      (t.memoizedState = null),
      e
    );
  }
  function Fp(e, t, n) {
    var l = t.pendingProps,
      u = (t.flags & 128) !== 0;
    if (((t.flags &= -129), e === null)) {
      if (Be) {
        if (l.mode === "hidden")
          return ((e = sr(t, l)), (t.lanes = 536870912), Xi(null, e));
        if (
          (ss(t),
          (e = et)
            ? ((e = Ih(e, yn)),
              (e = e !== null && e.data === "&" ? e : null),
              e !== null &&
                ((t.memoizedState = {
                  dehydrated: e,
                  treeContext: El !== null ? { id: Un, overflow: Nn } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (n = Td(e)),
                (n.return = t),
                (t.child = n),
                (Tt = t),
                (et = null)))
            : (e = null),
          e === null)
        )
          throw xl(t);
        return ((t.lanes = 536870912), null);
      }
      return sr(t, l);
    }
    var o = e.memoizedState;
    if (o !== null) {
      var d = o.dehydrated;
      if ((ss(t), u))
        if (t.flags & 256) ((t.flags &= -257), (t = jm(e, t, n)));
        else if (t.memoizedState !== null)
          ((t.child = e.child), (t.flags |= 128), (t = null));
        else throw Error(s(558));
      else if (
        (dt || Ha(e, t, n, !1), (u = (n & e.childLanes) !== 0), dt || u)
      ) {
        if (
          ((l = $e),
          l !== null && ((d = pl(l, n)), d !== 0 && d !== o.retryLane))
        )
          throw ((o.retryLane = d), ea(e, d), Gt(l, e, d), Os);
        (Sr(), (t = jm(e, t, n)));
      } else
        ((e = o.treeContext),
          (et = pn(d.nextSibling)),
          (Tt = t),
          (Be = !0),
          (Al = null),
          (yn = !1),
          e !== null && Cd(t, e),
          (t = sr(t, l)),
          (t.flags |= 4096));
      return t;
    }
    return (
      (e = Jn(e.child, { mode: l.mode, children: l.children })),
      (e.ref = t.ref),
      (t.child = e),
      (e.return = t),
      e
    );
  }
  function cr(e, t) {
    var n = t.ref;
    if (n === null) e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof n != "function" && typeof n != "object") throw Error(s(284));
      (e === null || e.ref !== n) && (t.flags |= 4194816);
    }
  }
  function Ds(e, t, n, l, u) {
    return (
      aa(t),
      (n = fs(e, t, n, l, void 0, u)),
      (l = ds()),
      e !== null && !dt
        ? (ms(e, t, u), el(e, t, u))
        : (Be && l && Zo(t), (t.flags |= 1), Rt(e, t, n, u), t.child)
    );
  }
  function Gm(e, t, n, l, u, o) {
    return (
      aa(t),
      (t.updateQueue = null),
      (n = Qd(t, l, n, u)),
      Xd(e),
      (l = ds()),
      e !== null && !dt
        ? (ms(e, t, o), el(e, t, o))
        : (Be && l && Zo(t), (t.flags |= 1), Rt(e, t, n, o), t.child)
    );
  }
  function km(e, t, n, l, u) {
    if ((aa(t), t.stateNode === null)) {
      var o = Na,
        d = n.contextType;
      (typeof d == "object" && d !== null && (o = _t(d)),
        (o = new n(l, o)),
        (t.memoizedState =
          o.state !== null && o.state !== void 0 ? o.state : null),
        (o.updater = ws),
        (t.stateNode = o),
        (o._reactInternals = t),
        (o = t.stateNode),
        (o.props = l),
        (o.state = t.memoizedState),
        (o.refs = {}),
        ls(t),
        (d = n.contextType),
        (o.context = typeof d == "object" && d !== null ? _t(d) : Na),
        (o.state = t.memoizedState),
        (d = n.getDerivedStateFromProps),
        typeof d == "function" && (Cs(t, n, d, l), (o.state = t.memoizedState)),
        typeof n.getDerivedStateFromProps == "function" ||
          typeof o.getSnapshotBeforeUpdate == "function" ||
          (typeof o.UNSAFE_componentWillMount != "function" &&
            typeof o.componentWillMount != "function") ||
          ((d = o.state),
          typeof o.componentWillMount == "function" && o.componentWillMount(),
          typeof o.UNSAFE_componentWillMount == "function" &&
            o.UNSAFE_componentWillMount(),
          d !== o.state && ws.enqueueReplaceState(o, o.state, null),
          Yi(t, l, o, u),
          Hi(),
          (o.state = t.memoizedState)),
        typeof o.componentDidMount == "function" && (t.flags |= 4194308),
        (l = !0));
    } else if (e === null) {
      o = t.stateNode;
      var g = t.memoizedProps,
        E = ca(n, g);
      o.props = E;
      var L = o.context,
        F = n.contextType;
      ((d = Na), typeof F == "object" && F !== null && (d = _t(F)));
      var ee = n.getDerivedStateFromProps;
      ((F =
        typeof ee == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function"),
        (g = t.pendingProps !== g),
        F ||
          (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
            typeof o.componentWillReceiveProps != "function") ||
          ((g || L !== d) && Mm(t, o, l, d)),
        (_l = !1));
      var H = t.memoizedState;
      ((o.state = H),
        Yi(t, l, o, u),
        Hi(),
        (L = t.memoizedState),
        g || H !== L || _l
          ? (typeof ee == "function" &&
              (Cs(t, n, ee, l), (L = t.memoizedState)),
            (E = _l || wm(t, n, E, l, H, L, d))
              ? (F ||
                  (typeof o.UNSAFE_componentWillMount != "function" &&
                    typeof o.componentWillMount != "function") ||
                  (typeof o.componentWillMount == "function" &&
                    o.componentWillMount(),
                  typeof o.UNSAFE_componentWillMount == "function" &&
                    o.UNSAFE_componentWillMount()),
                typeof o.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof o.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = l),
                (t.memoizedState = L)),
            (o.props = l),
            (o.state = L),
            (o.context = d),
            (l = E))
          : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
            (l = !1)));
    } else {
      ((o = t.stateNode),
        as(e, t),
        (d = t.memoizedProps),
        (F = ca(n, d)),
        (o.props = F),
        (ee = t.pendingProps),
        (H = o.context),
        (L = n.contextType),
        (E = Na),
        typeof L == "object" && L !== null && (E = _t(L)),
        (g = n.getDerivedStateFromProps),
        (L =
          typeof g == "function" ||
          typeof o.getSnapshotBeforeUpdate == "function") ||
          (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
            typeof o.componentWillReceiveProps != "function") ||
          ((d !== ee || H !== E) && Mm(t, o, l, E)),
        (_l = !1),
        (H = t.memoizedState),
        (o.state = H),
        Yi(t, l, o, u),
        Hi());
      var j = t.memoizedState;
      d !== ee ||
      H !== j ||
      _l ||
      (e !== null && e.dependencies !== null && Qu(e.dependencies))
        ? (typeof g == "function" && (Cs(t, n, g, l), (j = t.memoizedState)),
          (F =
            _l ||
            wm(t, n, F, l, H, j, E) ||
            (e !== null && e.dependencies !== null && Qu(e.dependencies)))
            ? (L ||
                (typeof o.UNSAFE_componentWillUpdate != "function" &&
                  typeof o.componentWillUpdate != "function") ||
                (typeof o.componentWillUpdate == "function" &&
                  o.componentWillUpdate(l, j, E),
                typeof o.UNSAFE_componentWillUpdate == "function" &&
                  o.UNSAFE_componentWillUpdate(l, j, E)),
              typeof o.componentDidUpdate == "function" && (t.flags |= 4),
              typeof o.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof o.componentDidUpdate != "function" ||
                (d === e.memoizedProps && H === e.memoizedState) ||
                (t.flags |= 4),
              typeof o.getSnapshotBeforeUpdate != "function" ||
                (d === e.memoizedProps && H === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = l),
              (t.memoizedState = j)),
          (o.props = l),
          (o.state = j),
          (o.context = E),
          (l = F))
        : (typeof o.componentDidUpdate != "function" ||
            (d === e.memoizedProps && H === e.memoizedState) ||
            (t.flags |= 4),
          typeof o.getSnapshotBeforeUpdate != "function" ||
            (d === e.memoizedProps && H === e.memoizedState) ||
            (t.flags |= 1024),
          (l = !1));
    }
    return (
      (o = l),
      cr(e, t),
      (l = (t.flags & 128) !== 0),
      o || l
        ? ((o = t.stateNode),
          (n =
            l && typeof n.getDerivedStateFromError != "function"
              ? null
              : o.render()),
          (t.flags |= 1),
          e !== null && l
            ? ((t.child = oa(t, e.child, null, u)),
              (t.child = oa(t, null, n, u)))
            : Rt(e, t, n, u),
          (t.memoizedState = o.state),
          (e = t.child))
        : (e = el(e, t, u)),
      e
    );
  }
  function Xm(e, t, n, l) {
    return (na(), (t.flags |= 256), Rt(e, t, n, l), t.child);
  }
  var zs = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function Us(e) {
    return { baseLanes: e, cachePool: Ud() };
  }
  function Ns(e, t, n) {
    return ((e = e !== null ? e.childLanes & ~n : 0), t && (e |= tn), e);
  }
  function Qm(e, t, n) {
    var l = t.pendingProps,
      u = !1,
      o = (t.flags & 128) !== 0,
      d;
    if (
      ((d = o) ||
        (d =
          e !== null && e.memoizedState === null ? !1 : (rt.current & 2) !== 0),
      d && ((u = !0), (t.flags &= -129)),
      (d = (t.flags & 32) !== 0),
      (t.flags &= -33),
      e === null)
    ) {
      if (Be) {
        if (
          (u ? wl(t) : Ml(),
          (e = et)
            ? ((e = Ih(e, yn)),
              (e = e !== null && e.data !== "&" ? e : null),
              e !== null &&
                ((t.memoizedState = {
                  dehydrated: e,
                  treeContext: El !== null ? { id: Un, overflow: Nn } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (n = Td(e)),
                (n.return = t),
                (t.child = n),
                (Tt = t),
                (et = null)))
            : (e = null),
          e === null)
        )
          throw xl(t);
        return (yc(e) ? (t.lanes = 32) : (t.lanes = 536870912), null);
      }
      var g = l.children;
      return (
        (l = l.fallback),
        u
          ? (Ml(),
            (u = t.mode),
            (g = fr({ mode: "hidden", children: g }, u)),
            (l = ta(l, u, n, null)),
            (g.return = t),
            (l.return = t),
            (g.sibling = l),
            (t.child = g),
            (l = t.child),
            (l.memoizedState = Us(n)),
            (l.childLanes = Ns(e, d, n)),
            (t.memoizedState = zs),
            Xi(null, l))
          : (wl(t), Ls(t, g))
      );
    }
    var E = e.memoizedState;
    if (E !== null && ((g = E.dehydrated), g !== null)) {
      if (o)
        t.flags & 256
          ? (wl(t), (t.flags &= -257), (t = Vs(e, t, n)))
          : t.memoizedState !== null
            ? (Ml(), (t.child = e.child), (t.flags |= 128), (t = null))
            : (Ml(),
              (g = l.fallback),
              (u = t.mode),
              (l = fr({ mode: "visible", children: l.children }, u)),
              (g = ta(g, u, n, null)),
              (g.flags |= 2),
              (l.return = t),
              (g.return = t),
              (l.sibling = g),
              (t.child = l),
              oa(t, e.child, null, n),
              (l = t.child),
              (l.memoizedState = Us(n)),
              (l.childLanes = Ns(e, d, n)),
              (t.memoizedState = zs),
              (t = Xi(null, l)));
      else if ((wl(t), yc(g))) {
        if (((d = g.nextSibling && g.nextSibling.dataset), d)) var L = d.dgst;
        ((d = L),
          (l = Error(s(419))),
          (l.stack = ""),
          (l.digest = d),
          zi({ value: l, source: null, stack: null }),
          (t = Vs(e, t, n)));
      } else if (
        (dt || Ha(e, t, n, !1), (d = (n & e.childLanes) !== 0), dt || d)
      ) {
        if (
          ((d = $e),
          d !== null && ((l = pl(d, n)), l !== 0 && l !== E.retryLane))
        )
          throw ((E.retryLane = l), ea(e, l), Gt(d, e, l), Os);
        (gc(g) || Sr(), (t = Vs(e, t, n)));
      } else
        gc(g)
          ? ((t.flags |= 192), (t.child = e.child), (t = null))
          : ((e = E.treeContext),
            (et = pn(g.nextSibling)),
            (Tt = t),
            (Be = !0),
            (Al = null),
            (yn = !1),
            e !== null && Cd(t, e),
            (t = Ls(t, l.children)),
            (t.flags |= 4096));
      return t;
    }
    return u
      ? (Ml(),
        (g = l.fallback),
        (u = t.mode),
        (E = e.child),
        (L = E.sibling),
        (l = Jn(E, { mode: "hidden", children: l.children })),
        (l.subtreeFlags = E.subtreeFlags & 65011712),
        L !== null ? (g = Jn(L, g)) : ((g = ta(g, u, n, null)), (g.flags |= 2)),
        (g.return = t),
        (l.return = t),
        (l.sibling = g),
        (t.child = l),
        Xi(null, l),
        (l = t.child),
        (g = e.child.memoizedState),
        g === null
          ? (g = Us(n))
          : ((u = g.cachePool),
            u !== null
              ? ((E = ct._currentValue),
                (u = u.parent !== E ? { parent: E, pool: E } : u))
              : (u = Ud()),
            (g = { baseLanes: g.baseLanes | n, cachePool: u })),
        (l.memoizedState = g),
        (l.childLanes = Ns(e, d, n)),
        (t.memoizedState = zs),
        Xi(e.child, l))
      : (wl(t),
        (n = e.child),
        (e = n.sibling),
        (n = Jn(n, { mode: "visible", children: l.children })),
        (n.return = t),
        (n.sibling = null),
        e !== null &&
          ((d = t.deletions),
          d === null ? ((t.deletions = [e]), (t.flags |= 16)) : d.push(e)),
        (t.child = n),
        (t.memoizedState = null),
        n);
  }
  function Ls(e, t) {
    return (
      (t = fr({ mode: "visible", children: t }, e.mode)),
      (t.return = e),
      (e.child = t)
    );
  }
  function fr(e, t) {
    return ((e = Wt(22, e, null, t)), (e.lanes = 0), e);
  }
  function Vs(e, t, n) {
    return (
      oa(t, e.child, null, n),
      (e = Ls(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function Zm(e, t, n) {
    e.lanes |= t;
    var l = e.alternate;
    (l !== null && (l.lanes |= t), Wo(e.return, t, n));
  }
  function Bs(e, t, n, l, u, o) {
    var d = e.memoizedState;
    d === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: l,
          tail: n,
          tailMode: u,
          treeForkCount: o,
        })
      : ((d.isBackwards = t),
        (d.rendering = null),
        (d.renderingStartTime = 0),
        (d.last = l),
        (d.tail = n),
        (d.tailMode = u),
        (d.treeForkCount = o));
  }
  function Km(e, t, n) {
    var l = t.pendingProps,
      u = l.revealOrder,
      o = l.tail;
    l = l.children;
    var d = rt.current,
      g = (d & 2) !== 0;
    if (
      (g ? ((d = (d & 1) | 2), (t.flags |= 128)) : (d &= 1),
      J(rt, d),
      Rt(e, t, l, n),
      (l = Be ? Di : 0),
      !g && e !== null && (e.flags & 128) !== 0)
    )
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Zm(e, n, t);
        else if (e.tag === 19) Zm(e, n, t);
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
    switch (u) {
      case "forwards":
        for (n = t.child, u = null; n !== null; )
          ((e = n.alternate),
            e !== null && Iu(e) === null && (u = n),
            (n = n.sibling));
        ((n = u),
          n === null
            ? ((u = t.child), (t.child = null))
            : ((u = n.sibling), (n.sibling = null)),
          Bs(t, !1, u, n, o, l));
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (n = null, u = t.child, t.child = null; u !== null; ) {
          if (((e = u.alternate), e !== null && Iu(e) === null)) {
            t.child = u;
            break;
          }
          ((e = u.sibling), (u.sibling = n), (n = u), (u = e));
        }
        Bs(t, !0, n, null, o, l);
        break;
      case "together":
        Bs(t, !1, null, null, void 0, l);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function el(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (zl |= t.lanes),
      (n & t.childLanes) === 0)
    )
      if (e !== null) {
        if ((Ha(e, t, n, !1), (n & t.childLanes) === 0)) return null;
      } else return null;
    if (e !== null && t.child !== e.child) throw Error(s(153));
    if (t.child !== null) {
      for (
        e = t.child, n = Jn(e, e.pendingProps), t.child = n, n.return = t;
        e.sibling !== null;

      )
        ((e = e.sibling),
          (n = n.sibling = Jn(e, e.pendingProps)),
          (n.return = t));
      n.sibling = null;
    }
    return t.child;
  }
  function Hs(e, t) {
    return (e.lanes & t) !== 0
      ? !0
      : ((e = e.dependencies), !!(e !== null && Qu(e)));
  }
  function $p(e, t, n) {
    switch (t.tag) {
      case 3:
        (Ae(t, t.stateNode.containerInfo),
          Tl(t, ct, e.memoizedState.cache),
          na());
        break;
      case 27:
      case 5:
        Te(t);
        break;
      case 4:
        Ae(t, t.stateNode.containerInfo);
        break;
      case 10:
        Tl(t, t.type, t.memoizedProps.value);
        break;
      case 31:
        if (t.memoizedState !== null) return ((t.flags |= 128), ss(t), null);
        break;
      case 13:
        var l = t.memoizedState;
        if (l !== null)
          return l.dehydrated !== null
            ? (wl(t), (t.flags |= 128), null)
            : (n & t.child.childLanes) !== 0
              ? Qm(e, t, n)
              : (wl(t), (e = el(e, t, n)), e !== null ? e.sibling : null);
        wl(t);
        break;
      case 19:
        var u = (e.flags & 128) !== 0;
        if (
          ((l = (n & t.childLanes) !== 0),
          l || (Ha(e, t, n, !1), (l = (n & t.childLanes) !== 0)),
          u)
        ) {
          if (l) return Km(e, t, n);
          t.flags |= 128;
        }
        if (
          ((u = t.memoizedState),
          u !== null &&
            ((u.rendering = null), (u.tail = null), (u.lastEffect = null)),
          J(rt, rt.current),
          l)
        )
          break;
        return null;
      case 22:
        return ((t.lanes = 0), Ym(e, t, n, t.pendingProps));
      case 24:
        Tl(t, ct, e.memoizedState.cache);
    }
    return el(e, t, n);
  }
  function Jm(e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps) dt = !0;
      else {
        if (!Hs(e, n) && (t.flags & 128) === 0) return ((dt = !1), $p(e, t, n));
        dt = (e.flags & 131072) !== 0;
      }
    else ((dt = !1), Be && (t.flags & 1048576) !== 0 && Rd(t, Di, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        e: {
          var l = t.pendingProps;
          if (((e = ua(t.elementType)), (t.type = e), typeof e == "function"))
            ko(e)
              ? ((l = ca(e, l)), (t.tag = 1), (t = km(null, t, e, l, n)))
              : ((t.tag = 0), (t = Ds(null, t, e, l, n)));
          else {
            if (e != null) {
              var u = e.$$typeof;
              if (u === k) {
                ((t.tag = 11), (t = Vm(null, t, e, l, n)));
                break e;
              } else if (u === W) {
                ((t.tag = 14), (t = Bm(null, t, e, l, n)));
                break e;
              }
            }
            throw ((t = te(e) || e), Error(s(306, t, "")));
          }
        }
        return t;
      case 0:
        return Ds(e, t, t.type, t.pendingProps, n);
      case 1:
        return ((l = t.type), (u = ca(l, t.pendingProps)), km(e, t, l, u, n));
      case 3:
        e: {
          if ((Ae(t, t.stateNode.containerInfo), e === null))
            throw Error(s(387));
          l = t.pendingProps;
          var o = t.memoizedState;
          ((u = o.element), as(e, t), Yi(t, l, null, n));
          var d = t.memoizedState;
          if (
            ((l = d.cache),
            Tl(t, ct, l),
            l !== o.cache && Po(t, [ct], n, !0),
            Hi(),
            (l = d.element),
            o.isDehydrated)
          )
            if (
              ((o = { element: l, isDehydrated: !1, cache: d.cache }),
              (t.updateQueue.baseState = o),
              (t.memoizedState = o),
              t.flags & 256)
            ) {
              t = Xm(e, t, l, n);
              break e;
            } else if (l !== u) {
              ((u = mn(Error(s(424)), t)), zi(u), (t = Xm(e, t, l, n)));
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
                et = pn(e.firstChild),
                  Tt = t,
                  Be = !0,
                  Al = null,
                  yn = !0,
                  n = Yd(t, null, l, n),
                  t.child = n;
                n;

              )
                ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
            }
          else {
            if ((na(), l === u)) {
              t = el(e, t, n);
              break e;
            }
            Rt(e, t, l, n);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          cr(e, t),
          e === null
            ? (n = ig(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = n)
              : Be ||
                ((n = t.type),
                (e = t.pendingProps),
                (l = Cr(q.current).createElement(n)),
                (l[xt] = t),
                (l[Vt] = e),
                Ct(l, n, e),
                Et(l),
                (t.stateNode = l))
            : (t.memoizedState = ig(
                t.type,
                e.memoizedProps,
                t.pendingProps,
                e.memoizedState
              )),
          null
        );
      case 27:
        return (
          Te(t),
          e === null &&
            Be &&
            ((l = t.stateNode = ng(t.type, t.pendingProps, q.current)),
            (Tt = t),
            (yn = !0),
            (u = et),
            Bl(t.type) ? ((vc = u), (et = pn(l.firstChild))) : (et = u)),
          Rt(e, t, t.pendingProps.children, n),
          cr(e, t),
          e === null && (t.flags |= 4194304),
          t.child
        );
      case 5:
        return (
          e === null &&
            Be &&
            ((u = l = et) &&
              ((l = Rb(l, t.type, t.pendingProps, yn)),
              l !== null
                ? ((t.stateNode = l),
                  (Tt = t),
                  (et = pn(l.firstChild)),
                  (yn = !1),
                  (u = !0))
                : (u = !1)),
            u || xl(t)),
          Te(t),
          (u = t.type),
          (o = t.pendingProps),
          (d = e !== null ? e.memoizedProps : null),
          (l = o.children),
          dc(u, o) ? (l = null) : d !== null && dc(u, d) && (t.flags |= 32),
          t.memoizedState !== null &&
            ((u = fs(e, t, jp, null, null, n)), (iu._currentValue = u)),
          cr(e, t),
          Rt(e, t, l, n),
          t.child
        );
      case 6:
        return (
          e === null &&
            Be &&
            ((e = n = et) &&
              ((n = Cb(n, t.pendingProps, yn)),
              n !== null
                ? ((t.stateNode = n), (Tt = t), (et = null), (e = !0))
                : (e = !1)),
            e || xl(t)),
          null
        );
      case 13:
        return Qm(e, t, n);
      case 4:
        return (
          Ae(t, t.stateNode.containerInfo),
          (l = t.pendingProps),
          e === null ? (t.child = oa(t, null, l, n)) : Rt(e, t, l, n),
          t.child
        );
      case 11:
        return Vm(e, t, t.type, t.pendingProps, n);
      case 7:
        return (Rt(e, t, t.pendingProps, n), t.child);
      case 8:
        return (Rt(e, t, t.pendingProps.children, n), t.child);
      case 12:
        return (Rt(e, t, t.pendingProps.children, n), t.child);
      case 10:
        return (
          (l = t.pendingProps),
          Tl(t, t.type, l.value),
          Rt(e, t, l.children, n),
          t.child
        );
      case 9:
        return (
          (u = t.type._context),
          (l = t.pendingProps.children),
          aa(t),
          (u = _t(u)),
          (l = l(u)),
          (t.flags |= 1),
          Rt(e, t, l, n),
          t.child
        );
      case 14:
        return Bm(e, t, t.type, t.pendingProps, n);
      case 15:
        return Hm(e, t, t.type, t.pendingProps, n);
      case 19:
        return Km(e, t, n);
      case 31:
        return Fp(e, t, n);
      case 22:
        return Ym(e, t, n, t.pendingProps);
      case 24:
        return (
          aa(t),
          (l = _t(ct)),
          e === null
            ? ((u = ts()),
              u === null &&
                ((u = $e),
                (o = Io()),
                (u.pooledCache = o),
                o.refCount++,
                o !== null && (u.pooledCacheLanes |= n),
                (u = o)),
              (t.memoizedState = { parent: l, cache: u }),
              ls(t),
              Tl(t, ct, u))
            : ((e.lanes & n) !== 0 && (as(e, t), Yi(t, null, null, n), Hi()),
              (u = e.memoizedState),
              (o = t.memoizedState),
              u.parent !== l
                ? ((u = { parent: l, cache: l }),
                  (t.memoizedState = u),
                  t.lanes === 0 &&
                    (t.memoizedState = t.updateQueue.baseState = u),
                  Tl(t, ct, l))
                : ((l = o.cache),
                  Tl(t, ct, l),
                  l !== u.cache && Po(t, [ct], n, !0))),
          Rt(e, t, t.pendingProps.children, n),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(s(156, t.tag));
  }
  function tl(e) {
    e.flags |= 4;
  }
  function Ys(e, t, n, l, u) {
    if (((t = (e.mode & 32) !== 0) && (t = !1), t)) {
      if (((e.flags |= 16777216), (u & 335544128) === u))
        if (e.stateNode.complete) e.flags |= 8192;
        else if (Eh()) e.flags |= 8192;
        else throw ((ra = Fu), ns);
    } else e.flags &= -16777217;
  }
  function Fm(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (((e.flags |= 16777216), !cg(t)))
      if (Eh()) e.flags |= 8192;
      else throw ((ra = Fu), ns);
  }
  function dr(e, t) {
    (t !== null && (e.flags |= 4),
      e.flags & 16384 &&
        ((t = e.tag !== 22 ? Tu() : 536870912), (e.lanes |= t), ($a |= t)));
  }
  function Qi(e, t) {
    if (!Be)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var n = null; t !== null; )
            (t.alternate !== null && (n = t), (t = t.sibling));
          n === null ? (e.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = e.tail;
          for (var l = null; n !== null; )
            (n.alternate !== null && (l = n), (n = n.sibling));
          l === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (l.sibling = null);
      }
  }
  function tt(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      n = 0,
      l = 0;
    if (t)
      for (var u = e.child; u !== null; )
        ((n |= u.lanes | u.childLanes),
          (l |= u.subtreeFlags & 65011712),
          (l |= u.flags & 65011712),
          (u.return = e),
          (u = u.sibling));
    else
      for (u = e.child; u !== null; )
        ((n |= u.lanes | u.childLanes),
          (l |= u.subtreeFlags),
          (l |= u.flags),
          (u.return = e),
          (u = u.sibling));
    return ((e.subtreeFlags |= l), (e.childLanes = n), t);
  }
  function Wp(e, t, n) {
    var l = t.pendingProps;
    switch ((Ko(t), t.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (tt(t), null);
      case 1:
        return (tt(t), null);
      case 3:
        return (
          (n = t.stateNode),
          (l = null),
          e !== null && (l = e.memoizedState.cache),
          t.memoizedState.cache !== l && (t.flags |= 2048),
          Wn(ct),
          fe(),
          n.pendingContext &&
            ((n.context = n.pendingContext), (n.pendingContext = null)),
          (e === null || e.child === null) &&
            (Ba(t)
              ? tl(t)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), Fo())),
          tt(t),
          null
        );
      case 26:
        var u = t.type,
          o = t.memoizedState;
        return (
          e === null
            ? (tl(t),
              o !== null ? (tt(t), Fm(t, o)) : (tt(t), Ys(t, u, null, l, n)))
            : o
              ? o !== e.memoizedState
                ? (tl(t), tt(t), Fm(t, o))
                : (tt(t), (t.flags &= -16777217))
              : ((e = e.memoizedProps),
                e !== l && tl(t),
                tt(t),
                Ys(t, u, e, l, n)),
          null
        );
      case 27:
        if (
          (qe(t),
          (n = q.current),
          (u = t.type),
          e !== null && t.stateNode != null)
        )
          e.memoizedProps !== l && tl(t);
        else {
          if (!l) {
            if (t.stateNode === null) throw Error(s(166));
            return (tt(t), null);
          }
          ((e = ae.current),
            Ba(t) ? wd(t) : ((e = ng(u, l, n)), (t.stateNode = e), tl(t)));
        }
        return (tt(t), null);
      case 5:
        if ((qe(t), (u = t.type), e !== null && t.stateNode != null))
          e.memoizedProps !== l && tl(t);
        else {
          if (!l) {
            if (t.stateNode === null) throw Error(s(166));
            return (tt(t), null);
          }
          if (((o = ae.current), Ba(t))) wd(t);
          else {
            var d = Cr(q.current);
            switch (o) {
              case 1:
                o = d.createElementNS("http://www.w3.org/2000/svg", u);
                break;
              case 2:
                o = d.createElementNS("http://www.w3.org/1998/Math/MathML", u);
                break;
              default:
                switch (u) {
                  case "svg":
                    o = d.createElementNS("http://www.w3.org/2000/svg", u);
                    break;
                  case "math":
                    o = d.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      u
                    );
                    break;
                  case "script":
                    ((o = d.createElement("div")),
                      (o.innerHTML = "<script><\/script>"),
                      (o = o.removeChild(o.firstChild)));
                    break;
                  case "select":
                    ((o =
                      typeof l.is == "string"
                        ? d.createElement("select", { is: l.is })
                        : d.createElement("select")),
                      l.multiple
                        ? (o.multiple = !0)
                        : l.size && (o.size = l.size));
                    break;
                  default:
                    o =
                      typeof l.is == "string"
                        ? d.createElement(u, { is: l.is })
                        : d.createElement(u);
                }
            }
            ((o[xt] = t), (o[Vt] = l));
            e: for (d = t.child; d !== null; ) {
              if (d.tag === 5 || d.tag === 6) o.appendChild(d.stateNode);
              else if (d.tag !== 4 && d.tag !== 27 && d.child !== null) {
                ((d.child.return = d), (d = d.child));
                continue;
              }
              if (d === t) break e;
              for (; d.sibling === null; ) {
                if (d.return === null || d.return === t) break e;
                d = d.return;
              }
              ((d.sibling.return = d.return), (d = d.sibling));
            }
            t.stateNode = o;
            e: switch ((Ct(o, u, l), u)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                l = !!l.autoFocus;
                break e;
              case "img":
                l = !0;
                break e;
              default:
                l = !1;
            }
            l && tl(t);
          }
        }
        return (
          tt(t),
          Ys(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, n),
          null
        );
      case 6:
        if (e && t.stateNode != null) e.memoizedProps !== l && tl(t);
        else {
          if (typeof l != "string" && t.stateNode === null) throw Error(s(166));
          if (((e = q.current), Ba(t))) {
            if (
              ((e = t.stateNode),
              (n = t.memoizedProps),
              (l = null),
              (u = Tt),
              u !== null)
            )
              switch (u.tag) {
                case 27:
                case 5:
                  l = u.memoizedProps;
              }
            ((e[xt] = t),
              (e = !!(
                e.nodeValue === n ||
                (l !== null && l.suppressHydrationWarning === !0) ||
                Qh(e.nodeValue, n)
              )),
              e || xl(t, !0));
          } else
            ((e = Cr(e).createTextNode(l)), (e[xt] = t), (t.stateNode = e));
        }
        return (tt(t), null);
      case 31:
        if (((n = t.memoizedState), e === null || e.memoizedState !== null)) {
          if (((l = Ba(t)), n !== null)) {
            if (e === null) {
              if (!l) throw Error(s(318));
              if (
                ((e = t.memoizedState),
                (e = e !== null ? e.dehydrated : null),
                !e)
              )
                throw Error(s(557));
              e[xt] = t;
            } else
              (na(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4));
            (tt(t), (e = !1));
          } else
            ((n = Fo()),
              e !== null &&
                e.memoizedState !== null &&
                (e.memoizedState.hydrationErrors = n),
              (e = !0));
          if (!e) return t.flags & 256 ? (It(t), t) : (It(t), null);
          if ((t.flags & 128) !== 0) throw Error(s(558));
        }
        return (tt(t), null);
      case 13:
        if (
          ((l = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (((u = Ba(t)), l !== null && l.dehydrated !== null)) {
            if (e === null) {
              if (!u) throw Error(s(318));
              if (
                ((u = t.memoizedState),
                (u = u !== null ? u.dehydrated : null),
                !u)
              )
                throw Error(s(317));
              u[xt] = t;
            } else
              (na(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4));
            (tt(t), (u = !1));
          } else
            ((u = Fo()),
              e !== null &&
                e.memoizedState !== null &&
                (e.memoizedState.hydrationErrors = u),
              (u = !0));
          if (!u) return t.flags & 256 ? (It(t), t) : (It(t), null);
        }
        return (
          It(t),
          (t.flags & 128) !== 0
            ? ((t.lanes = n), t)
            : ((n = l !== null),
              (e = e !== null && e.memoizedState !== null),
              n &&
                ((l = t.child),
                (u = null),
                l.alternate !== null &&
                  l.alternate.memoizedState !== null &&
                  l.alternate.memoizedState.cachePool !== null &&
                  (u = l.alternate.memoizedState.cachePool.pool),
                (o = null),
                l.memoizedState !== null &&
                  l.memoizedState.cachePool !== null &&
                  (o = l.memoizedState.cachePool.pool),
                o !== u && (l.flags |= 2048)),
              n !== e && n && (t.child.flags |= 8192),
              dr(t, t.updateQueue),
              tt(t),
              null)
        );
      case 4:
        return (fe(), e === null && rc(t.stateNode.containerInfo), tt(t), null);
      case 10:
        return (Wn(t.type), tt(t), null);
      case 19:
        if ((V(rt), (l = t.memoizedState), l === null)) return (tt(t), null);
        if (((u = (t.flags & 128) !== 0), (o = l.rendering), o === null))
          if (u) Qi(l, !1);
          else {
            if (it !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((o = Iu(e)), o !== null)) {
                  for (
                    t.flags |= 128,
                      Qi(l, !1),
                      e = o.updateQueue,
                      t.updateQueue = e,
                      dr(t, e),
                      t.subtreeFlags = 0,
                      e = n,
                      n = t.child;
                    n !== null;

                  )
                    (xd(n, e), (n = n.sibling));
                  return (
                    J(rt, (rt.current & 1) | 2),
                    Be && Fn(t, l.treeForkCount),
                    t.child
                  );
                }
                e = e.sibling;
              }
            l.tail !== null &&
              ie() > vr &&
              ((t.flags |= 128), (u = !0), Qi(l, !1), (t.lanes = 4194304));
          }
        else {
          if (!u)
            if (((e = Iu(o)), e !== null)) {
              if (
                ((t.flags |= 128),
                (u = !0),
                (e = e.updateQueue),
                (t.updateQueue = e),
                dr(t, e),
                Qi(l, !0),
                l.tail === null &&
                  l.tailMode === "hidden" &&
                  !o.alternate &&
                  !Be)
              )
                return (tt(t), null);
            } else
              2 * ie() - l.renderingStartTime > vr &&
                n !== 536870912 &&
                ((t.flags |= 128), (u = !0), Qi(l, !1), (t.lanes = 4194304));
          l.isBackwards
            ? ((o.sibling = t.child), (t.child = o))
            : ((e = l.last),
              e !== null ? (e.sibling = o) : (t.child = o),
              (l.last = o));
        }
        return l.tail !== null
          ? ((e = l.tail),
            (l.rendering = e),
            (l.tail = e.sibling),
            (l.renderingStartTime = ie()),
            (e.sibling = null),
            (n = rt.current),
            J(rt, u ? (n & 1) | 2 : n & 1),
            Be && Fn(t, l.treeForkCount),
            e)
          : (tt(t), null);
      case 22:
      case 23:
        return (
          It(t),
          os(),
          (l = t.memoizedState !== null),
          e !== null
            ? (e.memoizedState !== null) !== l && (t.flags |= 8192)
            : l && (t.flags |= 8192),
          l
            ? (n & 536870912) !== 0 &&
              (t.flags & 128) === 0 &&
              (tt(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : tt(t),
          (n = t.updateQueue),
          n !== null && dr(t, n.retryQueue),
          (n = null),
          e !== null &&
            e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (n = e.memoizedState.cachePool.pool),
          (l = null),
          t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (l = t.memoizedState.cachePool.pool),
          l !== n && (t.flags |= 2048),
          e !== null && V(ia),
          null
        );
      case 24:
        return (
          (n = null),
          e !== null && (n = e.memoizedState.cache),
          t.memoizedState.cache !== n && (t.flags |= 2048),
          Wn(ct),
          tt(t),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(s(156, t.tag));
  }
  function Pp(e, t) {
    switch ((Ko(t), t.tag)) {
      case 1:
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          Wn(ct),
          fe(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((t.flags = (e & -65537) | 128), t)
            : null
        );
      case 26:
      case 27:
      case 5:
        return (qe(t), null);
      case 31:
        if (t.memoizedState !== null) {
          if ((It(t), t.alternate === null)) throw Error(s(340));
          na();
        }
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 13:
        if (
          (It(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(s(340));
          na();
        }
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return (V(rt), null);
      case 4:
        return (fe(), null);
      case 10:
        return (Wn(t.type), null);
      case 22:
      case 23:
        return (
          It(t),
          os(),
          e !== null && V(ia),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 24:
        return (Wn(ct), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function $m(e, t) {
    switch ((Ko(t), t.tag)) {
      case 3:
        (Wn(ct), fe());
        break;
      case 26:
      case 27:
      case 5:
        qe(t);
        break;
      case 4:
        fe();
        break;
      case 31:
        t.memoizedState !== null && It(t);
        break;
      case 13:
        It(t);
        break;
      case 19:
        V(rt);
        break;
      case 10:
        Wn(t.type);
        break;
      case 22:
      case 23:
        (It(t), os(), e !== null && V(ia));
        break;
      case 24:
        Wn(ct);
    }
  }
  function Zi(e, t) {
    try {
      var n = t.updateQueue,
        l = n !== null ? n.lastEffect : null;
      if (l !== null) {
        var u = l.next;
        n = u;
        do {
          if ((n.tag & e) === e) {
            l = void 0;
            var o = n.create,
              d = n.inst;
            ((l = o()), (d.destroy = l));
          }
          n = n.next;
        } while (n !== u);
      }
    } catch (g) {
      Qe(t, t.return, g);
    }
  }
  function Ol(e, t, n) {
    try {
      var l = t.updateQueue,
        u = l !== null ? l.lastEffect : null;
      if (u !== null) {
        var o = u.next;
        l = o;
        do {
          if ((l.tag & e) === e) {
            var d = l.inst,
              g = d.destroy;
            if (g !== void 0) {
              ((d.destroy = void 0), (u = t));
              var E = n,
                L = g;
              try {
                L();
              } catch (F) {
                Qe(u, E, F);
              }
            }
          }
          l = l.next;
        } while (l !== o);
      }
    } catch (F) {
      Qe(t, t.return, F);
    }
  }
  function Wm(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var n = e.stateNode;
      try {
        jd(t, n);
      } catch (l) {
        Qe(e, e.return, l);
      }
    }
  }
  function Pm(e, t, n) {
    ((n.props = ca(e.type, e.memoizedProps)), (n.state = e.memoizedState));
    try {
      n.componentWillUnmount();
    } catch (l) {
      Qe(e, t, l);
    }
  }
  function Ki(e, t) {
    try {
      var n = e.ref;
      if (n !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var l = e.stateNode;
            break;
          case 30:
            l = e.stateNode;
            break;
          default:
            l = e.stateNode;
        }
        typeof n == "function" ? (e.refCleanup = n(l)) : (n.current = l);
      }
    } catch (u) {
      Qe(e, t, u);
    }
  }
  function Ln(e, t) {
    var n = e.ref,
      l = e.refCleanup;
    if (n !== null)
      if (typeof l == "function")
        try {
          l();
        } catch (u) {
          Qe(e, t, u);
        } finally {
          ((e.refCleanup = null),
            (e = e.alternate),
            e != null && (e.refCleanup = null));
        }
      else if (typeof n == "function")
        try {
          n(null);
        } catch (u) {
          Qe(e, t, u);
        }
      else n.current = null;
  }
  function Im(e) {
    var t = e.type,
      n = e.memoizedProps,
      l = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          n.autoFocus && l.focus();
          break e;
        case "img":
          n.src ? (l.src = n.src) : n.srcSet && (l.srcset = n.srcSet);
      }
    } catch (u) {
      Qe(e, e.return, u);
    }
  }
  function qs(e, t, n) {
    try {
      var l = e.stateNode;
      (Sb(l, e.type, n, t), (l[Vt] = t));
    } catch (u) {
      Qe(e, e.return, u);
    }
  }
  function eh(e) {
    return (
      e.tag === 5 ||
      e.tag === 3 ||
      e.tag === 26 ||
      (e.tag === 27 && Bl(e.type)) ||
      e.tag === 4
    );
  }
  function js(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || eh(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if (
          (e.tag === 27 && Bl(e.type)) ||
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
  function Gs(e, t, n) {
    var l = e.tag;
    if (l === 5 || l === 6)
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
            n != null || t.onclick !== null || (t.onclick = Zn)));
    else if (
      l !== 4 &&
      (l === 27 && Bl(e.type) && ((n = e.stateNode), (t = null)),
      (e = e.child),
      e !== null)
    )
      for (Gs(e, t, n), e = e.sibling; e !== null; )
        (Gs(e, t, n), (e = e.sibling));
  }
  function mr(e, t, n) {
    var l = e.tag;
    if (l === 5 || l === 6)
      ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
    else if (
      l !== 4 &&
      (l === 27 && Bl(e.type) && (n = e.stateNode), (e = e.child), e !== null)
    )
      for (mr(e, t, n), e = e.sibling; e !== null; )
        (mr(e, t, n), (e = e.sibling));
  }
  function th(e) {
    var t = e.stateNode,
      n = e.memoizedProps;
    try {
      for (var l = e.type, u = t.attributes; u.length; )
        t.removeAttributeNode(u[0]);
      (Ct(t, l, n), (t[xt] = e), (t[Vt] = n));
    } catch (o) {
      Qe(e, e.return, o);
    }
  }
  var nl = !1,
    mt = !1,
    ks = !1,
    nh = typeof WeakSet == "function" ? WeakSet : Set,
    At = null;
  function Ip(e, t) {
    if (((e = e.containerInfo), (cc = Nr), (e = hd(e)), Vo(e))) {
      if ("selectionStart" in e)
        var n = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          n = ((n = e.ownerDocument) && n.defaultView) || window;
          var l = n.getSelection && n.getSelection();
          if (l && l.rangeCount !== 0) {
            n = l.anchorNode;
            var u = l.anchorOffset,
              o = l.focusNode;
            l = l.focusOffset;
            try {
              (n.nodeType, o.nodeType);
            } catch {
              n = null;
              break e;
            }
            var d = 0,
              g = -1,
              E = -1,
              L = 0,
              F = 0,
              ee = e,
              H = null;
            t: for (;;) {
              for (
                var j;
                ee !== n || (u !== 0 && ee.nodeType !== 3) || (g = d + u),
                  ee !== o || (l !== 0 && ee.nodeType !== 3) || (E = d + l),
                  ee.nodeType === 3 && (d += ee.nodeValue.length),
                  (j = ee.firstChild) !== null;

              )
                ((H = ee), (ee = j));
              for (;;) {
                if (ee === e) break t;
                if (
                  (H === n && ++L === u && (g = d),
                  H === o && ++F === l && (E = d),
                  (j = ee.nextSibling) !== null)
                )
                  break;
                ((ee = H), (H = ee.parentNode));
              }
              ee = j;
            }
            n = g === -1 || E === -1 ? null : { start: g, end: E };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (
      fc = { focusedElem: e, selectionRange: n }, Nr = !1, At = t;
      At !== null;

    )
      if (
        ((t = At), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)
      )
        ((e.return = t), (At = e));
      else
        for (; At !== null; ) {
          switch (((t = At), (o = t.alternate), (e = t.flags), t.tag)) {
            case 0:
              if (
                (e & 4) !== 0 &&
                ((e = t.updateQueue),
                (e = e !== null ? e.events : null),
                e !== null)
              )
                for (n = 0; n < e.length; n++)
                  ((u = e[n]), (u.ref.impl = u.nextImpl));
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && o !== null) {
                ((e = void 0),
                  (n = t),
                  (u = o.memoizedProps),
                  (o = o.memoizedState),
                  (l = n.stateNode));
                try {
                  var ve = ca(n.type, u);
                  ((e = l.getSnapshotBeforeUpdate(ve, o)),
                    (l.__reactInternalSnapshotBeforeUpdate = e));
                } catch (_e) {
                  Qe(n, n.return, _e);
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (
                  ((e = t.stateNode.containerInfo), (n = e.nodeType), n === 9)
                )
                  hc(e);
                else if (n === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      hc(e);
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
              if ((e & 1024) !== 0) throw Error(s(163));
          }
          if (((e = t.sibling), e !== null)) {
            ((e.return = t.return), (At = e));
            break;
          }
          At = t.return;
        }
  }
  function lh(e, t, n) {
    var l = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        (al(e, n), l & 4 && Zi(5, n));
        break;
      case 1:
        if ((al(e, n), l & 4))
          if (((e = n.stateNode), t === null))
            try {
              e.componentDidMount();
            } catch (d) {
              Qe(n, n.return, d);
            }
          else {
            var u = ca(n.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              e.componentDidUpdate(u, t, e.__reactInternalSnapshotBeforeUpdate);
            } catch (d) {
              Qe(n, n.return, d);
            }
          }
        (l & 64 && Wm(n), l & 512 && Ki(n, n.return));
        break;
      case 3:
        if ((al(e, n), l & 64 && ((e = n.updateQueue), e !== null))) {
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
            jd(e, t);
          } catch (d) {
            Qe(n, n.return, d);
          }
        }
        break;
      case 27:
        t === null && l & 4 && th(n);
      case 26:
      case 5:
        (al(e, n), t === null && l & 4 && Im(n), l & 512 && Ki(n, n.return));
        break;
      case 12:
        al(e, n);
        break;
      case 31:
        (al(e, n), l & 4 && uh(e, n));
        break;
      case 13:
        (al(e, n),
          l & 4 && rh(e, n),
          l & 64 &&
            ((e = n.memoizedState),
            e !== null &&
              ((e = e.dehydrated),
              e !== null && ((n = ob.bind(null, n)), wb(e, n)))));
        break;
      case 22:
        if (((l = n.memoizedState !== null || nl), !l)) {
          ((t = (t !== null && t.memoizedState !== null) || mt), (u = nl));
          var o = mt;
          ((nl = l),
            (mt = t) && !o ? il(e, n, (n.subtreeFlags & 8772) !== 0) : al(e, n),
            (nl = u),
            (mt = o));
        }
        break;
      case 30:
        break;
      default:
        al(e, n);
    }
  }
  function ah(e) {
    var t = e.alternate;
    (t !== null && ((e.alternate = null), ah(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 && ((t = e.stateNode), t !== null && bo(t)),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null));
  }
  var lt = null,
    Ht = !1;
  function ll(e, t, n) {
    for (n = n.child; n !== null; ) (ih(e, t, n), (n = n.sibling));
  }
  function ih(e, t, n) {
    if (st && typeof st.onCommitFiberUnmount == "function")
      try {
        st.onCommitFiberUnmount(sn, n);
      } catch {}
    switch (n.tag) {
      case 26:
        (mt || Ln(n, t),
          ll(e, t, n),
          n.memoizedState
            ? n.memoizedState.count--
            : n.stateNode && ((n = n.stateNode), n.parentNode.removeChild(n)));
        break;
      case 27:
        mt || Ln(n, t);
        var l = lt,
          u = Ht;
        (Bl(n.type) && ((lt = n.stateNode), (Ht = !1)),
          ll(e, t, n),
          nu(n.stateNode),
          (lt = l),
          (Ht = u));
        break;
      case 5:
        mt || Ln(n, t);
      case 6:
        if (
          ((l = lt),
          (u = Ht),
          (lt = null),
          ll(e, t, n),
          (lt = l),
          (Ht = u),
          lt !== null)
        )
          if (Ht)
            try {
              (lt.nodeType === 9
                ? lt.body
                : lt.nodeName === "HTML"
                  ? lt.ownerDocument.body
                  : lt
              ).removeChild(n.stateNode);
            } catch (o) {
              Qe(n, t, o);
            }
          else
            try {
              lt.removeChild(n.stateNode);
            } catch (o) {
              Qe(n, t, o);
            }
        break;
      case 18:
        lt !== null &&
          (Ht
            ? ((e = lt),
              Wh(
                e.nodeType === 9
                  ? e.body
                  : e.nodeName === "HTML"
                    ? e.ownerDocument.body
                    : e,
                n.stateNode
              ),
              ai(e))
            : Wh(lt, n.stateNode));
        break;
      case 4:
        ((l = lt),
          (u = Ht),
          (lt = n.stateNode.containerInfo),
          (Ht = !0),
          ll(e, t, n),
          (lt = l),
          (Ht = u));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (Ol(2, n, t), mt || Ol(4, n, t), ll(e, t, n));
        break;
      case 1:
        (mt ||
          (Ln(n, t),
          (l = n.stateNode),
          typeof l.componentWillUnmount == "function" && Pm(n, t, l)),
          ll(e, t, n));
        break;
      case 21:
        ll(e, t, n);
        break;
      case 22:
        ((mt = (l = mt) || n.memoizedState !== null), ll(e, t, n), (mt = l));
        break;
      default:
        ll(e, t, n);
    }
  }
  function uh(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate), e !== null && ((e = e.memoizedState), e !== null))
    ) {
      e = e.dehydrated;
      try {
        ai(e);
      } catch (n) {
        Qe(t, t.return, n);
      }
    }
  }
  function rh(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate),
      e !== null &&
        ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
    )
      try {
        ai(e);
      } catch (n) {
        Qe(t, t.return, n);
      }
  }
  function eb(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return (t === null && (t = e.stateNode = new nh()), t);
      case 22:
        return (
          (e = e.stateNode),
          (t = e._retryCache),
          t === null && (t = e._retryCache = new nh()),
          t
        );
      default:
        throw Error(s(435, e.tag));
    }
  }
  function hr(e, t) {
    var n = eb(e);
    t.forEach(function (l) {
      if (!n.has(l)) {
        n.add(l);
        var u = sb.bind(null, e, l);
        l.then(u, u);
      }
    });
  }
  function Yt(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var l = 0; l < n.length; l++) {
        var u = n[l],
          o = e,
          d = t,
          g = d;
        e: for (; g !== null; ) {
          switch (g.tag) {
            case 27:
              if (Bl(g.type)) {
                ((lt = g.stateNode), (Ht = !1));
                break e;
              }
              break;
            case 5:
              ((lt = g.stateNode), (Ht = !1));
              break e;
            case 3:
            case 4:
              ((lt = g.stateNode.containerInfo), (Ht = !0));
              break e;
          }
          g = g.return;
        }
        if (lt === null) throw Error(s(160));
        (ih(o, d, u),
          (lt = null),
          (Ht = !1),
          (o = u.alternate),
          o !== null && (o.return = null),
          (u.return = null));
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; ) (oh(t, e), (t = t.sibling));
  }
  var Cn = null;
  function oh(e, t) {
    var n = e.alternate,
      l = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        (Yt(t, e),
          qt(e),
          l & 4 && (Ol(3, e, e.return), Zi(3, e), Ol(5, e, e.return)));
        break;
      case 1:
        (Yt(t, e),
          qt(e),
          l & 512 && (mt || n === null || Ln(n, n.return)),
          l & 64 &&
            nl &&
            ((e = e.updateQueue),
            e !== null &&
              ((l = e.callbacks),
              l !== null &&
                ((n = e.shared.hiddenCallbacks),
                (e.shared.hiddenCallbacks = n === null ? l : n.concat(l))))));
        break;
      case 26:
        var u = Cn;
        if (
          (Yt(t, e),
          qt(e),
          l & 512 && (mt || n === null || Ln(n, n.return)),
          l & 4)
        ) {
          var o = n !== null ? n.memoizedState : null;
          if (((l = e.memoizedState), n === null))
            if (l === null)
              if (e.stateNode === null) {
                e: {
                  ((l = e.type),
                    (n = e.memoizedProps),
                    (u = u.ownerDocument || u));
                  t: switch (l) {
                    case "title":
                      ((o = u.getElementsByTagName("title")[0]),
                        (!o ||
                          o[Si] ||
                          o[xt] ||
                          o.namespaceURI === "http://www.w3.org/2000/svg" ||
                          o.hasAttribute("itemprop")) &&
                          ((o = u.createElement(l)),
                          u.head.insertBefore(
                            o,
                            u.querySelector("head > title")
                          )),
                        Ct(o, l, n),
                        (o[xt] = e),
                        Et(o),
                        (l = o));
                      break e;
                    case "link":
                      var d = og("link", "href", u).get(l + (n.href || ""));
                      if (d) {
                        for (var g = 0; g < d.length; g++)
                          if (
                            ((o = d[g]),
                            o.getAttribute("href") ===
                              (n.href == null || n.href === ""
                                ? null
                                : n.href) &&
                              o.getAttribute("rel") ===
                                (n.rel == null ? null : n.rel) &&
                              o.getAttribute("title") ===
                                (n.title == null ? null : n.title) &&
                              o.getAttribute("crossorigin") ===
                                (n.crossOrigin == null ? null : n.crossOrigin))
                          ) {
                            d.splice(g, 1);
                            break t;
                          }
                      }
                      ((o = u.createElement(l)),
                        Ct(o, l, n),
                        u.head.appendChild(o));
                      break;
                    case "meta":
                      if (
                        (d = og("meta", "content", u).get(
                          l + (n.content || "")
                        ))
                      ) {
                        for (g = 0; g < d.length; g++)
                          if (
                            ((o = d[g]),
                            o.getAttribute("content") ===
                              (n.content == null ? null : "" + n.content) &&
                              o.getAttribute("name") ===
                                (n.name == null ? null : n.name) &&
                              o.getAttribute("property") ===
                                (n.property == null ? null : n.property) &&
                              o.getAttribute("http-equiv") ===
                                (n.httpEquiv == null ? null : n.httpEquiv) &&
                              o.getAttribute("charset") ===
                                (n.charSet == null ? null : n.charSet))
                          ) {
                            d.splice(g, 1);
                            break t;
                          }
                      }
                      ((o = u.createElement(l)),
                        Ct(o, l, n),
                        u.head.appendChild(o));
                      break;
                    default:
                      throw Error(s(468, l));
                  }
                  ((o[xt] = e), Et(o), (l = o));
                }
                e.stateNode = l;
              } else sg(u, e.type, e.stateNode);
            else e.stateNode = rg(u, l, e.memoizedProps);
          else
            o !== l
              ? (o === null
                  ? n.stateNode !== null &&
                    ((n = n.stateNode), n.parentNode.removeChild(n))
                  : o.count--,
                l === null
                  ? sg(u, e.type, e.stateNode)
                  : rg(u, l, e.memoizedProps))
              : l === null &&
                e.stateNode !== null &&
                qs(e, e.memoizedProps, n.memoizedProps);
        }
        break;
      case 27:
        (Yt(t, e),
          qt(e),
          l & 512 && (mt || n === null || Ln(n, n.return)),
          n !== null && l & 4 && qs(e, e.memoizedProps, n.memoizedProps));
        break;
      case 5:
        if (
          (Yt(t, e),
          qt(e),
          l & 512 && (mt || n === null || Ln(n, n.return)),
          e.flags & 32)
        ) {
          u = e.stateNode;
          try {
            Ca(u, "");
          } catch (ve) {
            Qe(e, e.return, ve);
          }
        }
        (l & 4 &&
          e.stateNode != null &&
          ((u = e.memoizedProps), qs(e, u, n !== null ? n.memoizedProps : u)),
          l & 1024 && (ks = !0));
        break;
      case 6:
        if ((Yt(t, e), qt(e), l & 4)) {
          if (e.stateNode === null) throw Error(s(162));
          ((l = e.memoizedProps), (n = e.stateNode));
          try {
            n.nodeValue = l;
          } catch (ve) {
            Qe(e, e.return, ve);
          }
        }
        break;
      case 3:
        if (
          ((Or = null),
          (u = Cn),
          (Cn = wr(t.containerInfo)),
          Yt(t, e),
          (Cn = u),
          qt(e),
          l & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            ai(t.containerInfo);
          } catch (ve) {
            Qe(e, e.return, ve);
          }
        ks && ((ks = !1), sh(e));
        break;
      case 4:
        ((l = Cn),
          (Cn = wr(e.stateNode.containerInfo)),
          Yt(t, e),
          qt(e),
          (Cn = l));
        break;
      case 12:
        (Yt(t, e), qt(e));
        break;
      case 31:
        (Yt(t, e),
          qt(e),
          l & 4 &&
            ((l = e.updateQueue),
            l !== null && ((e.updateQueue = null), hr(e, l))));
        break;
      case 13:
        (Yt(t, e),
          qt(e),
          e.child.flags & 8192 &&
            (e.memoizedState !== null) !=
              (n !== null && n.memoizedState !== null) &&
            (yr = ie()),
          l & 4 &&
            ((l = e.updateQueue),
            l !== null && ((e.updateQueue = null), hr(e, l))));
        break;
      case 22:
        u = e.memoizedState !== null;
        var E = n !== null && n.memoizedState !== null,
          L = nl,
          F = mt;
        if (
          ((nl = L || u),
          (mt = F || E),
          Yt(t, e),
          (mt = F),
          (nl = L),
          qt(e),
          l & 8192)
        )
          e: for (
            t = e.stateNode,
              t._visibility = u ? t._visibility & -2 : t._visibility | 1,
              u && (n === null || E || nl || mt || fa(e)),
              n = null,
              t = e;
            ;

          ) {
            if (t.tag === 5 || t.tag === 26) {
              if (n === null) {
                E = n = t;
                try {
                  if (((o = E.stateNode), u))
                    ((d = o.style),
                      typeof d.setProperty == "function"
                        ? d.setProperty("display", "none", "important")
                        : (d.display = "none"));
                  else {
                    g = E.stateNode;
                    var ee = E.memoizedProps.style,
                      H =
                        ee != null && ee.hasOwnProperty("display")
                          ? ee.display
                          : null;
                    g.style.display =
                      H == null || typeof H == "boolean" ? "" : ("" + H).trim();
                  }
                } catch (ve) {
                  Qe(E, E.return, ve);
                }
              }
            } else if (t.tag === 6) {
              if (n === null) {
                E = t;
                try {
                  E.stateNode.nodeValue = u ? "" : E.memoizedProps;
                } catch (ve) {
                  Qe(E, E.return, ve);
                }
              }
            } else if (t.tag === 18) {
              if (n === null) {
                E = t;
                try {
                  var j = E.stateNode;
                  u ? Ph(j, !0) : Ph(E.stateNode, !1);
                } catch (ve) {
                  Qe(E, E.return, ve);
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
        l & 4 &&
          ((l = e.updateQueue),
          l !== null &&
            ((n = l.retryQueue),
            n !== null && ((l.retryQueue = null), hr(e, n))));
        break;
      case 19:
        (Yt(t, e),
          qt(e),
          l & 4 &&
            ((l = e.updateQueue),
            l !== null && ((e.updateQueue = null), hr(e, l))));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        (Yt(t, e), qt(e));
    }
  }
  function qt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var n, l = e.return; l !== null; ) {
          if (eh(l)) {
            n = l;
            break;
          }
          l = l.return;
        }
        if (n == null) throw Error(s(160));
        switch (n.tag) {
          case 27:
            var u = n.stateNode,
              o = js(e);
            mr(e, o, u);
            break;
          case 5:
            var d = n.stateNode;
            n.flags & 32 && (Ca(d, ""), (n.flags &= -33));
            var g = js(e);
            mr(e, g, d);
            break;
          case 3:
          case 4:
            var E = n.stateNode.containerInfo,
              L = js(e);
            Gs(e, L, E);
            break;
          default:
            throw Error(s(161));
        }
      } catch (F) {
        Qe(e, e.return, F);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function sh(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        (sh(t),
          t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
          (e = e.sibling));
      }
  }
  function al(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; ) (lh(e, t.alternate, t), (t = t.sibling));
  }
  function fa(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (Ol(4, t, t.return), fa(t));
          break;
        case 1:
          Ln(t, t.return);
          var n = t.stateNode;
          (typeof n.componentWillUnmount == "function" && Pm(t, t.return, n),
            fa(t));
          break;
        case 27:
          nu(t.stateNode);
        case 26:
        case 5:
          (Ln(t, t.return), fa(t));
          break;
        case 22:
          t.memoizedState === null && fa(t);
          break;
        case 30:
          fa(t);
          break;
        default:
          fa(t);
      }
      e = e.sibling;
    }
  }
  function il(e, t, n) {
    for (n = n && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var l = t.alternate,
        u = e,
        o = t,
        d = o.flags;
      switch (o.tag) {
        case 0:
        case 11:
        case 15:
          (il(u, o, n), Zi(4, o));
          break;
        case 1:
          if (
            (il(u, o, n),
            (l = o),
            (u = l.stateNode),
            typeof u.componentDidMount == "function")
          )
            try {
              u.componentDidMount();
            } catch (L) {
              Qe(l, l.return, L);
            }
          if (((l = o), (u = l.updateQueue), u !== null)) {
            var g = l.stateNode;
            try {
              var E = u.shared.hiddenCallbacks;
              if (E !== null)
                for (u.shared.hiddenCallbacks = null, u = 0; u < E.length; u++)
                  qd(E[u], g);
            } catch (L) {
              Qe(l, l.return, L);
            }
          }
          (n && d & 64 && Wm(o), Ki(o, o.return));
          break;
        case 27:
          th(o);
        case 26:
        case 5:
          (il(u, o, n), n && l === null && d & 4 && Im(o), Ki(o, o.return));
          break;
        case 12:
          il(u, o, n);
          break;
        case 31:
          (il(u, o, n), n && d & 4 && uh(u, o));
          break;
        case 13:
          (il(u, o, n), n && d & 4 && rh(u, o));
          break;
        case 22:
          (o.memoizedState === null && il(u, o, n), Ki(o, o.return));
          break;
        case 30:
          break;
        default:
          il(u, o, n);
      }
      t = t.sibling;
    }
  }
  function Xs(e, t) {
    var n = null;
    (e !== null &&
      e.memoizedState !== null &&
      e.memoizedState.cachePool !== null &&
      (n = e.memoizedState.cachePool.pool),
      (e = null),
      t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (e = t.memoizedState.cachePool.pool),
      e !== n && (e != null && e.refCount++, n != null && Ui(n)));
  }
  function Qs(e, t) {
    ((e = null),
      t.alternate !== null && (e = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== e && (t.refCount++, e != null && Ui(e)));
  }
  function wn(e, t, n, l) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) (ch(e, t, n, l), (t = t.sibling));
  }
  function ch(e, t, n, l) {
    var u = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        (wn(e, t, n, l), u & 2048 && Zi(9, t));
        break;
      case 1:
        wn(e, t, n, l);
        break;
      case 3:
        (wn(e, t, n, l),
          u & 2048 &&
            ((e = null),
            t.alternate !== null && (e = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== e && (t.refCount++, e != null && Ui(e))));
        break;
      case 12:
        if (u & 2048) {
          (wn(e, t, n, l), (e = t.stateNode));
          try {
            var o = t.memoizedProps,
              d = o.id,
              g = o.onPostCommit;
            typeof g == "function" &&
              g(
                d,
                t.alternate === null ? "mount" : "update",
                e.passiveEffectDuration,
                -0
              );
          } catch (E) {
            Qe(t, t.return, E);
          }
        } else wn(e, t, n, l);
        break;
      case 31:
        wn(e, t, n, l);
        break;
      case 13:
        wn(e, t, n, l);
        break;
      case 23:
        break;
      case 22:
        ((o = t.stateNode),
          (d = t.alternate),
          t.memoizedState !== null
            ? o._visibility & 2
              ? wn(e, t, n, l)
              : Ji(e, t)
            : o._visibility & 2
              ? wn(e, t, n, l)
              : ((o._visibility |= 2),
                Ka(e, t, n, l, (t.subtreeFlags & 10256) !== 0 || !1)),
          u & 2048 && Xs(d, t));
        break;
      case 24:
        (wn(e, t, n, l), u & 2048 && Qs(t.alternate, t));
        break;
      default:
        wn(e, t, n, l);
    }
  }
  function Ka(e, t, n, l, u) {
    for (
      u = u && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child;
      t !== null;

    ) {
      var o = e,
        d = t,
        g = n,
        E = l,
        L = d.flags;
      switch (d.tag) {
        case 0:
        case 11:
        case 15:
          (Ka(o, d, g, E, u), Zi(8, d));
          break;
        case 23:
          break;
        case 22:
          var F = d.stateNode;
          (d.memoizedState !== null
            ? F._visibility & 2
              ? Ka(o, d, g, E, u)
              : Ji(o, d)
            : ((F._visibility |= 2), Ka(o, d, g, E, u)),
            u && L & 2048 && Xs(d.alternate, d));
          break;
        case 24:
          (Ka(o, d, g, E, u), u && L & 2048 && Qs(d.alternate, d));
          break;
        default:
          Ka(o, d, g, E, u);
      }
      t = t.sibling;
    }
  }
  function Ji(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var n = e,
          l = t,
          u = l.flags;
        switch (l.tag) {
          case 22:
            (Ji(n, l), u & 2048 && Xs(l.alternate, l));
            break;
          case 24:
            (Ji(n, l), u & 2048 && Qs(l.alternate, l));
            break;
          default:
            Ji(n, l);
        }
        t = t.sibling;
      }
  }
  var Fi = 8192;
  function Ja(e, t, n) {
    if (e.subtreeFlags & Fi)
      for (e = e.child; e !== null; ) (fh(e, t, n), (e = e.sibling));
  }
  function fh(e, t, n) {
    switch (e.tag) {
      case 26:
        (Ja(e, t, n),
          e.flags & Fi &&
            e.memoizedState !== null &&
            qb(n, Cn, e.memoizedState, e.memoizedProps));
        break;
      case 5:
        Ja(e, t, n);
        break;
      case 3:
      case 4:
        var l = Cn;
        ((Cn = wr(e.stateNode.containerInfo)), Ja(e, t, n), (Cn = l));
        break;
      case 22:
        e.memoizedState === null &&
          ((l = e.alternate),
          l !== null && l.memoizedState !== null
            ? ((l = Fi), (Fi = 16777216), Ja(e, t, n), (Fi = l))
            : Ja(e, t, n));
        break;
      default:
        Ja(e, t, n);
    }
  }
  function dh(e) {
    var t = e.alternate;
    if (t !== null && ((e = t.child), e !== null)) {
      t.child = null;
      do ((t = e.sibling), (e.sibling = null), (e = t));
      while (e !== null);
    }
  }
  function $i(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var l = t[n];
          ((At = l), hh(l, e));
        }
      dh(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) (mh(e), (e = e.sibling));
  }
  function mh(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        ($i(e), e.flags & 2048 && Ol(9, e, e.return));
        break;
      case 3:
        $i(e);
        break;
      case 12:
        $i(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null &&
        t._visibility & 2 &&
        (e.return === null || e.return.tag !== 13)
          ? ((t._visibility &= -3), gr(e))
          : $i(e);
        break;
      default:
        $i(e);
    }
  }
  function gr(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var l = t[n];
          ((At = l), hh(l, e));
        }
      dh(e);
    }
    for (e = e.child; e !== null; ) {
      switch (((t = e), t.tag)) {
        case 0:
        case 11:
        case 15:
          (Ol(8, t, t.return), gr(t));
          break;
        case 22:
          ((n = t.stateNode),
            n._visibility & 2 && ((n._visibility &= -3), gr(t)));
          break;
        default:
          gr(t);
      }
      e = e.sibling;
    }
  }
  function hh(e, t) {
    for (; At !== null; ) {
      var n = At;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          Ol(8, n, t);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var l = n.memoizedState.cachePool.pool;
            l != null && l.refCount++;
          }
          break;
        case 24:
          Ui(n.memoizedState.cache);
      }
      if (((l = n.child), l !== null)) ((l.return = n), (At = l));
      else
        e: for (n = e; At !== null; ) {
          l = At;
          var u = l.sibling,
            o = l.return;
          if ((ah(l), l === n)) {
            At = null;
            break e;
          }
          if (u !== null) {
            ((u.return = o), (At = u));
            break e;
          }
          At = o;
        }
    }
  }
  var tb = {
      getCacheForType: function (e) {
        var t = _t(ct),
          n = t.data.get(e);
        return (n === void 0 && ((n = e()), t.data.set(e, n)), n);
      },
      cacheSignal: function () {
        return _t(ct).controller.signal;
      },
    },
    nb = typeof WeakMap == "function" ? WeakMap : Map,
    ke = 0,
    $e = null,
    ze = null,
    Ne = 0,
    Xe = 0,
    en = null,
    Dl = !1,
    Fa = !1,
    Zs = !1,
    ul = 0,
    it = 0,
    zl = 0,
    da = 0,
    Ks = 0,
    tn = 0,
    $a = 0,
    Wi = null,
    jt = null,
    Js = !1,
    yr = 0,
    gh = 0,
    vr = 1 / 0,
    pr = null,
    Ul = null,
    vt = 0,
    Nl = null,
    Wa = null,
    rl = 0,
    Fs = 0,
    $s = null,
    yh = null,
    Pi = 0,
    Ws = null;
  function nn() {
    return (ke & 2) !== 0 && Ne !== 0 ? Ne & -Ne : R.T !== null ? lc() : wu();
  }
  function vh() {
    if (tn === 0)
      if ((Ne & 536870912) === 0 || Be) {
        var e = Tn;
        ((Tn <<= 1), (Tn & 3932160) === 0 && (Tn = 262144), (tn = e));
      } else tn = 536870912;
    return ((e = Pt.current), e !== null && (e.flags |= 32), tn);
  }
  function Gt(e, t, n) {
    (((e === $e && (Xe === 2 || Xe === 9)) || e.cancelPendingCommit !== null) &&
      (Pa(e, 0), Ll(e, Ne, tn, !1)),
      Xn(e, n),
      ((ke & 2) === 0 || e !== $e) &&
        (e === $e &&
          ((ke & 2) === 0 && (da |= n), it === 4 && Ll(e, Ne, tn, !1)),
        Vn(e)));
  }
  function ph(e, t, n) {
    if ((ke & 6) !== 0) throw Error(s(327));
    var l = (!n && (t & 127) === 0 && (t & e.expiredLanes) === 0) || Fl(e, t),
      u = l ? ib(e, t) : Is(e, t, !0),
      o = l;
    do {
      if (u === 0) {
        Fa && !l && Ll(e, t, 0, !1);
        break;
      } else {
        if (((n = e.current.alternate), o && !lb(n))) {
          ((u = Is(e, t, !1)), (o = !1));
          continue;
        }
        if (u === 2) {
          if (((o = t), e.errorRecoveryDisabledLanes & o)) var d = 0;
          else
            ((d = e.pendingLanes & -536870913),
              (d = d !== 0 ? d : d & 536870912 ? 536870912 : 0));
          if (d !== 0) {
            t = d;
            e: {
              var g = e;
              u = Wi;
              var E = g.current.memoizedState.isDehydrated;
              if ((E && (Pa(g, d).flags |= 256), (d = Is(g, d, !1)), d !== 2)) {
                if (Zs && !E) {
                  ((g.errorRecoveryDisabledLanes |= o), (da |= o), (u = 4));
                  break e;
                }
                ((o = jt),
                  (jt = u),
                  o !== null &&
                    (jt === null ? (jt = o) : jt.push.apply(jt, o)));
              }
              u = d;
            }
            if (((o = !1), u !== 2)) continue;
          }
        }
        if (u === 1) {
          (Pa(e, 0), Ll(e, t, 0, !0));
          break;
        }
        e: {
          switch (((l = e), (o = u), o)) {
            case 0:
            case 1:
              throw Error(s(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              Ll(l, t, tn, !Dl);
              break e;
            case 2:
              jt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(s(329));
          }
          if ((t & 62914560) === t && ((u = yr + 300 - ie()), 10 < u)) {
            if ((Ll(l, t, tn, !Dl), Jl(l, 0, !0) !== 0)) break e;
            ((rl = t),
              (l.timeoutHandle = Fh(
                bh.bind(
                  null,
                  l,
                  n,
                  jt,
                  pr,
                  Js,
                  t,
                  tn,
                  da,
                  $a,
                  Dl,
                  o,
                  "Throttled",
                  -0,
                  0
                ),
                u
              )));
            break e;
          }
          bh(l, n, jt, pr, Js, t, tn, da, $a, Dl, o, null, -0, 0);
        }
      }
      break;
    } while (!0);
    Vn(e);
  }
  function bh(e, t, n, l, u, o, d, g, E, L, F, ee, H, j) {
    if (
      ((e.timeoutHandle = -1),
      (ee = t.subtreeFlags),
      ee & 8192 || (ee & 16785408) === 16785408)
    ) {
      ((ee = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Zn,
      }),
        fh(t, o, ee));
      var ve =
        (o & 62914560) === o ? yr - ie() : (o & 4194048) === o ? gh - ie() : 0;
      if (((ve = jb(ee, ve)), ve !== null)) {
        ((rl = o),
          (e.cancelPendingCommit = ve(
            Ch.bind(null, e, t, o, n, l, u, d, g, E, F, ee, null, H, j)
          )),
          Ll(e, o, d, !L));
        return;
      }
    }
    Ch(e, t, o, n, l, u, d, g, E);
  }
  function lb(e) {
    for (var t = e; ; ) {
      var n = t.tag;
      if (
        (n === 0 || n === 11 || n === 15) &&
        t.flags & 16384 &&
        ((n = t.updateQueue), n !== null && ((n = n.stores), n !== null))
      )
        for (var l = 0; l < n.length; l++) {
          var u = n[l],
            o = u.getSnapshot;
          u = u.value;
          try {
            if (!$t(o(), u)) return !1;
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
  function Ll(e, t, n, l) {
    ((t &= ~Ks),
      (t &= ~da),
      (e.suspendedLanes |= t),
      (e.pingedLanes &= ~t),
      l && (e.warmLanes |= t),
      (l = e.expirationTimes));
    for (var u = t; 0 < u; ) {
      var o = 31 - De(u),
        d = 1 << o;
      ((l[o] = -1), (u &= ~d));
    }
    n !== 0 && Ru(e, n, t);
  }
  function br() {
    return (ke & 6) === 0 ? (Ii(0), !1) : !0;
  }
  function Ps() {
    if (ze !== null) {
      if (Xe === 0) var e = ze.return;
      else ((e = ze), ($n = la = null), hs(e), (Ga = null), (Li = 0), (e = ze));
      for (; e !== null; ) ($m(e.alternate, e), (e = e.return));
      ze = null;
    }
  }
  function Pa(e, t) {
    var n = e.timeoutHandle;
    (n !== -1 && ((e.timeoutHandle = -1), xb(n)),
      (n = e.cancelPendingCommit),
      n !== null && ((e.cancelPendingCommit = null), n()),
      (rl = 0),
      Ps(),
      ($e = e),
      (ze = n = Jn(e.current, null)),
      (Ne = t),
      (Xe = 0),
      (en = null),
      (Dl = !1),
      (Fa = Fl(e, t)),
      (Zs = !1),
      ($a = tn = Ks = da = zl = it = 0),
      (jt = Wi = null),
      (Js = !1),
      (t & 8) !== 0 && (t |= t & 32));
    var l = e.entangledLanes;
    if (l !== 0)
      for (e = e.entanglements, l &= t; 0 < l; ) {
        var u = 31 - De(l),
          o = 1 << u;
        ((t |= e[u]), (l &= ~o));
      }
    return ((ul = t), qu(), n);
  }
  function Sh(e, t) {
    ((Ce = null),
      (R.H = ki),
      t === ja || t === Ju
        ? ((t = Vd()), (Xe = 3))
        : t === ns
          ? ((t = Vd()), (Xe = 4))
          : (Xe =
              t === Os
                ? 8
                : t !== null &&
                    typeof t == "object" &&
                    typeof t.then == "function"
                  ? 6
                  : 1),
      (en = t),
      ze === null && ((it = 1), or(e, mn(t, e.current))));
  }
  function Eh() {
    var e = Pt.current;
    return e === null
      ? !0
      : (Ne & 4194048) === Ne
        ? vn === null
        : (Ne & 62914560) === Ne || (Ne & 536870912) !== 0
          ? e === vn
          : !1;
  }
  function Ah() {
    var e = R.H;
    return ((R.H = ki), e === null ? ki : e);
  }
  function xh() {
    var e = R.A;
    return ((R.A = tb), e);
  }
  function Sr() {
    ((it = 4),
      Dl || ((Ne & 4194048) !== Ne && Pt.current !== null) || (Fa = !0),
      ((zl & 134217727) === 0 && (da & 134217727) === 0) ||
        $e === null ||
        Ll($e, Ne, tn, !1));
  }
  function Is(e, t, n) {
    var l = ke;
    ke |= 2;
    var u = Ah(),
      o = xh();
    (($e !== e || Ne !== t) && ((pr = null), Pa(e, t)), (t = !1));
    var d = it;
    e: do
      try {
        if (Xe !== 0 && ze !== null) {
          var g = ze,
            E = en;
          switch (Xe) {
            case 8:
              (Ps(), (d = 6));
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Pt.current === null && (t = !0);
              var L = Xe;
              if (((Xe = 0), (en = null), Ia(e, g, E, L), n && Fa)) {
                d = 0;
                break e;
              }
              break;
            default:
              ((L = Xe), (Xe = 0), (en = null), Ia(e, g, E, L));
          }
        }
        (ab(), (d = it));
        break;
      } catch (F) {
        Sh(e, F);
      }
    while (!0);
    return (
      t && e.shellSuspendCounter++,
      ($n = la = null),
      (ke = l),
      (R.H = u),
      (R.A = o),
      ze === null && (($e = null), (Ne = 0), qu()),
      d
    );
  }
  function ab() {
    for (; ze !== null; ) Th(ze);
  }
  function ib(e, t) {
    var n = ke;
    ke |= 2;
    var l = Ah(),
      u = xh();
    $e !== e || Ne !== t
      ? ((pr = null), (vr = ie() + 500), Pa(e, t))
      : (Fa = Fl(e, t));
    e: do
      try {
        if (Xe !== 0 && ze !== null) {
          t = ze;
          var o = en;
          t: switch (Xe) {
            case 1:
              ((Xe = 0), (en = null), Ia(e, t, o, 1));
              break;
            case 2:
            case 9:
              if (Nd(o)) {
                ((Xe = 0), (en = null), _h(t));
                break;
              }
              ((t = function () {
                ((Xe !== 2 && Xe !== 9) || $e !== e || (Xe = 7), Vn(e));
              }),
                o.then(t, t));
              break e;
            case 3:
              Xe = 7;
              break e;
            case 4:
              Xe = 5;
              break e;
            case 7:
              Nd(o)
                ? ((Xe = 0), (en = null), _h(t))
                : ((Xe = 0), (en = null), Ia(e, t, o, 7));
              break;
            case 5:
              var d = null;
              switch (ze.tag) {
                case 26:
                  d = ze.memoizedState;
                case 5:
                case 27:
                  var g = ze;
                  if (d ? cg(d) : g.stateNode.complete) {
                    ((Xe = 0), (en = null));
                    var E = g.sibling;
                    if (E !== null) ze = E;
                    else {
                      var L = g.return;
                      L !== null ? ((ze = L), Er(L)) : (ze = null);
                    }
                    break t;
                  }
              }
              ((Xe = 0), (en = null), Ia(e, t, o, 5));
              break;
            case 6:
              ((Xe = 0), (en = null), Ia(e, t, o, 6));
              break;
            case 8:
              (Ps(), (it = 6));
              break e;
            default:
              throw Error(s(462));
          }
        }
        ub();
        break;
      } catch (F) {
        Sh(e, F);
      }
    while (!0);
    return (
      ($n = la = null),
      (R.H = l),
      (R.A = u),
      (ke = n),
      ze !== null ? 0 : (($e = null), (Ne = 0), qu(), it)
    );
  }
  function ub() {
    for (; ze !== null && !K(); ) Th(ze);
  }
  function Th(e) {
    var t = Jm(e.alternate, e, ul);
    ((e.memoizedProps = e.pendingProps), t === null ? Er(e) : (ze = t));
  }
  function _h(e) {
    var t = e,
      n = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Gm(n, t, t.pendingProps, t.type, void 0, Ne);
        break;
      case 11:
        t = Gm(n, t, t.pendingProps, t.type.render, t.ref, Ne);
        break;
      case 5:
        hs(t);
      default:
        ($m(n, t), (t = ze = xd(t, ul)), (t = Jm(n, t, ul)));
    }
    ((e.memoizedProps = e.pendingProps), t === null ? Er(e) : (ze = t));
  }
  function Ia(e, t, n, l) {
    (($n = la = null), hs(t), (Ga = null), (Li = 0));
    var u = t.return;
    try {
      if (Jp(e, u, t, n, Ne)) {
        ((it = 1), or(e, mn(n, e.current)), (ze = null));
        return;
      }
    } catch (o) {
      if (u !== null) throw ((ze = u), o);
      ((it = 1), or(e, mn(n, e.current)), (ze = null));
      return;
    }
    t.flags & 32768
      ? (Be || l === 1
          ? (e = !0)
          : Fa || (Ne & 536870912) !== 0
            ? (e = !1)
            : ((Dl = e = !0),
              (l === 2 || l === 9 || l === 3 || l === 6) &&
                ((l = Pt.current),
                l !== null && l.tag === 13 && (l.flags |= 16384))),
        Rh(t, e))
      : Er(t);
  }
  function Er(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        Rh(t, Dl);
        return;
      }
      e = t.return;
      var n = Wp(t.alternate, t, ul);
      if (n !== null) {
        ze = n;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        ze = t;
        return;
      }
      ze = t = e;
    } while (t !== null);
    it === 0 && (it = 5);
  }
  function Rh(e, t) {
    do {
      var n = Pp(e.alternate, e);
      if (n !== null) {
        ((n.flags &= 32767), (ze = n));
        return;
      }
      if (
        ((n = e.return),
        n !== null &&
          ((n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null)),
        !t && ((e = e.sibling), e !== null))
      ) {
        ze = e;
        return;
      }
      ze = e = n;
    } while (e !== null);
    ((it = 6), (ze = null));
  }
  function Ch(e, t, n, l, u, o, d, g, E) {
    e.cancelPendingCommit = null;
    do Ar();
    while (vt !== 0);
    if ((ke & 6) !== 0) throw Error(s(327));
    if (t !== null) {
      if (t === e.current) throw Error(s(177));
      if (
        ((o = t.lanes | t.childLanes),
        (o |= jo),
        _u(e, n, o, d, g, E),
        e === $e && ((ze = $e = null), (Ne = 0)),
        (Wa = t),
        (Nl = e),
        (rl = n),
        (Fs = o),
        ($s = u),
        (yh = l),
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
          ? ((e.callbackNode = null),
            (e.callbackPriority = 0),
            cb(He, function () {
              return (zh(), null);
            }))
          : ((e.callbackNode = null), (e.callbackPriority = 0)),
        (l = (t.flags & 13878) !== 0),
        (t.subtreeFlags & 13878) !== 0 || l)
      ) {
        ((l = R.T), (R.T = null), (u = O.p), (O.p = 2), (d = ke), (ke |= 4));
        try {
          Ip(e, t, n);
        } finally {
          ((ke = d), (O.p = u), (R.T = l));
        }
      }
      ((vt = 1), wh(), Mh(), Oh());
    }
  }
  function wh() {
    if (vt === 1) {
      vt = 0;
      var e = Nl,
        t = Wa,
        n = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || n) {
        ((n = R.T), (R.T = null));
        var l = O.p;
        O.p = 2;
        var u = ke;
        ke |= 4;
        try {
          oh(t, e);
          var o = fc,
            d = hd(e.containerInfo),
            g = o.focusedElem,
            E = o.selectionRange;
          if (
            d !== g &&
            g &&
            g.ownerDocument &&
            md(g.ownerDocument.documentElement, g)
          ) {
            if (E !== null && Vo(g)) {
              var L = E.start,
                F = E.end;
              if ((F === void 0 && (F = L), "selectionStart" in g))
                ((g.selectionStart = L),
                  (g.selectionEnd = Math.min(F, g.value.length)));
              else {
                var ee = g.ownerDocument || document,
                  H = (ee && ee.defaultView) || window;
                if (H.getSelection) {
                  var j = H.getSelection(),
                    ve = g.textContent.length,
                    _e = Math.min(E.start, ve),
                    Fe = E.end === void 0 ? _e : Math.min(E.end, ve);
                  !j.extend && _e > Fe && ((d = Fe), (Fe = _e), (_e = d));
                  var D = dd(g, _e),
                    T = dd(g, Fe);
                  if (
                    D &&
                    T &&
                    (j.rangeCount !== 1 ||
                      j.anchorNode !== D.node ||
                      j.anchorOffset !== D.offset ||
                      j.focusNode !== T.node ||
                      j.focusOffset !== T.offset)
                  ) {
                    var N = ee.createRange();
                    (N.setStart(D.node, D.offset),
                      j.removeAllRanges(),
                      _e > Fe
                        ? (j.addRange(N), j.extend(T.node, T.offset))
                        : (N.setEnd(T.node, T.offset), j.addRange(N)));
                  }
                }
              }
            }
            for (ee = [], j = g; (j = j.parentNode); )
              j.nodeType === 1 &&
                ee.push({ element: j, left: j.scrollLeft, top: j.scrollTop });
            for (
              typeof g.focus == "function" && g.focus(), g = 0;
              g < ee.length;
              g++
            ) {
              var I = ee[g];
              ((I.element.scrollLeft = I.left), (I.element.scrollTop = I.top));
            }
          }
          ((Nr = !!cc), (fc = cc = null));
        } finally {
          ((ke = u), (O.p = l), (R.T = n));
        }
      }
      ((e.current = t), (vt = 2));
    }
  }
  function Mh() {
    if (vt === 2) {
      vt = 0;
      var e = Nl,
        t = Wa,
        n = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || n) {
        ((n = R.T), (R.T = null));
        var l = O.p;
        O.p = 2;
        var u = ke;
        ke |= 4;
        try {
          lh(e, t.alternate, t);
        } finally {
          ((ke = u), (O.p = l), (R.T = n));
        }
      }
      vt = 3;
    }
  }
  function Oh() {
    if (vt === 4 || vt === 3) {
      ((vt = 0), de());
      var e = Nl,
        t = Wa,
        n = rl,
        l = yh;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
        ? (vt = 5)
        : ((vt = 0), (Wa = Nl = null), Dh(e, e.pendingLanes));
      var u = e.pendingLanes;
      if (
        (u === 0 && (Ul = null),
        bi(n),
        (t = t.stateNode),
        st && typeof st.onCommitFiberRoot == "function")
      )
        try {
          st.onCommitFiberRoot(sn, t, void 0, (t.current.flags & 128) === 128);
        } catch {}
      if (l !== null) {
        ((t = R.T), (u = O.p), (O.p = 2), (R.T = null));
        try {
          for (var o = e.onRecoverableError, d = 0; d < l.length; d++) {
            var g = l[d];
            o(g.value, { componentStack: g.stack });
          }
        } finally {
          ((R.T = t), (O.p = u));
        }
      }
      ((rl & 3) !== 0 && Ar(),
        Vn(e),
        (u = e.pendingLanes),
        (n & 261930) !== 0 && (u & 42) !== 0
          ? e === Ws
            ? Pi++
            : ((Pi = 0), (Ws = e))
          : (Pi = 0),
        Ii(0));
    }
  }
  function Dh(e, t) {
    (e.pooledCacheLanes &= t) === 0 &&
      ((t = e.pooledCache), t != null && ((e.pooledCache = null), Ui(t)));
  }
  function Ar() {
    return (wh(), Mh(), Oh(), zh());
  }
  function zh() {
    if (vt !== 5) return !1;
    var e = Nl,
      t = Fs;
    Fs = 0;
    var n = bi(rl),
      l = R.T,
      u = O.p;
    try {
      ((O.p = 32 > n ? 32 : n), (R.T = null), (n = $s), ($s = null));
      var o = Nl,
        d = rl;
      if (((vt = 0), (Wa = Nl = null), (rl = 0), (ke & 6) !== 0))
        throw Error(s(331));
      var g = ke;
      if (
        ((ke |= 4),
        mh(o.current),
        ch(o, o.current, d, n),
        (ke = g),
        Ii(0, !1),
        st && typeof st.onPostCommitFiberRoot == "function")
      )
        try {
          st.onPostCommitFiberRoot(sn, o);
        } catch {}
      return !0;
    } finally {
      ((O.p = u), (R.T = l), Dh(e, t));
    }
  }
  function Uh(e, t, n) {
    ((t = mn(n, t)),
      (t = Ms(e.stateNode, t, 2)),
      (e = Cl(e, t, 2)),
      e !== null && (Xn(e, 2), Vn(e)));
  }
  function Qe(e, t, n) {
    if (e.tag === 3) Uh(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Uh(t, e, n);
          break;
        } else if (t.tag === 1) {
          var l = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof l.componentDidCatch == "function" &&
              (Ul === null || !Ul.has(l)))
          ) {
            ((e = mn(n, e)),
              (n = Nm(2)),
              (l = Cl(t, n, 2)),
              l !== null && (Lm(n, l, t, e), Xn(l, 2), Vn(l)));
            break;
          }
        }
        t = t.return;
      }
  }
  function ec(e, t, n) {
    var l = e.pingCache;
    if (l === null) {
      l = e.pingCache = new nb();
      var u = new Set();
      l.set(t, u);
    } else ((u = l.get(t)), u === void 0 && ((u = new Set()), l.set(t, u)));
    u.has(n) ||
      ((Zs = !0), u.add(n), (e = rb.bind(null, e, t, n)), t.then(e, e));
  }
  function rb(e, t, n) {
    var l = e.pingCache;
    (l !== null && l.delete(t),
      (e.pingedLanes |= e.suspendedLanes & n),
      (e.warmLanes &= ~n),
      $e === e &&
        (Ne & n) === n &&
        (it === 4 || (it === 3 && (Ne & 62914560) === Ne && 300 > ie() - yr)
          ? (ke & 2) === 0 && Pa(e, 0)
          : (Ks |= n),
        $a === Ne && ($a = 0)),
      Vn(e));
  }
  function Nh(e, t) {
    (t === 0 && (t = Tu()), (e = ea(e, t)), e !== null && (Xn(e, t), Vn(e)));
  }
  function ob(e) {
    var t = e.memoizedState,
      n = 0;
    (t !== null && (n = t.retryLane), Nh(e, n));
  }
  function sb(e, t) {
    var n = 0;
    switch (e.tag) {
      case 31:
      case 13:
        var l = e.stateNode,
          u = e.memoizedState;
        u !== null && (n = u.retryLane);
        break;
      case 19:
        l = e.stateNode;
        break;
      case 22:
        l = e.stateNode._retryCache;
        break;
      default:
        throw Error(s(314));
    }
    (l !== null && l.delete(t), Nh(e, n));
  }
  function cb(e, t) {
    return A(e, t);
  }
  var xr = null,
    ei = null,
    tc = !1,
    Tr = !1,
    nc = !1,
    Vl = 0;
  function Vn(e) {
    (e !== ei &&
      e.next === null &&
      (ei === null ? (xr = ei = e) : (ei = ei.next = e)),
      (Tr = !0),
      tc || ((tc = !0), db()));
  }
  function Ii(e, t) {
    if (!nc && Tr) {
      nc = !0;
      do
        for (var n = !1, l = xr; l !== null; ) {
          if (e !== 0) {
            var u = l.pendingLanes;
            if (u === 0) var o = 0;
            else {
              var d = l.suspendedLanes,
                g = l.pingedLanes;
              ((o = (1 << (31 - De(42 | e) + 1)) - 1),
                (o &= u & ~(d & ~g)),
                (o = o & 201326741 ? (o & 201326741) | 1 : o ? o | 2 : 0));
            }
            o !== 0 && ((n = !0), Hh(l, o));
          } else
            ((o = Ne),
              (o = Jl(
                l,
                l === $e ? o : 0,
                l.cancelPendingCommit !== null || l.timeoutHandle !== -1
              )),
              (o & 3) === 0 || Fl(l, o) || ((n = !0), Hh(l, o)));
          l = l.next;
        }
      while (n);
      nc = !1;
    }
  }
  function fb() {
    Lh();
  }
  function Lh() {
    Tr = tc = !1;
    var e = 0;
    Vl !== 0 && Ab() && (e = Vl);
    for (var t = ie(), n = null, l = xr; l !== null; ) {
      var u = l.next,
        o = Vh(l, t);
      (o === 0
        ? ((l.next = null),
          n === null ? (xr = u) : (n.next = u),
          u === null && (ei = n))
        : ((n = l), (e !== 0 || (o & 3) !== 0) && (Tr = !0)),
        (l = u));
    }
    ((vt !== 0 && vt !== 5) || Ii(e), Vl !== 0 && (Vl = 0));
  }
  function Vh(e, t) {
    for (
      var n = e.suspendedLanes,
        l = e.pingedLanes,
        u = e.expirationTimes,
        o = e.pendingLanes & -62914561;
      0 < o;

    ) {
      var d = 31 - De(o),
        g = 1 << d,
        E = u[d];
      (E === -1
        ? ((g & n) === 0 || (g & l) !== 0) && (u[d] = vo(g, t))
        : E <= t && (e.expiredLanes |= g),
        (o &= ~g));
    }
    if (
      ((t = $e),
      (n = Ne),
      (n = Jl(
        e,
        e === t ? n : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1
      )),
      (l = e.callbackNode),
      n === 0 ||
        (e === t && (Xe === 2 || Xe === 9)) ||
        e.cancelPendingCommit !== null)
    )
      return (
        l !== null && l !== null && U(l),
        (e.callbackNode = null),
        (e.callbackPriority = 0)
      );
    if ((n & 3) === 0 || Fl(e, n)) {
      if (((t = n & -n), t === e.callbackPriority)) return t;
      switch ((l !== null && U(l), bi(n))) {
        case 2:
        case 8:
          n = Ve;
          break;
        case 32:
          n = He;
          break;
        case 268435456:
          n = Kt;
          break;
        default:
          n = He;
      }
      return (
        (l = Bh.bind(null, e)),
        (n = A(n, l)),
        (e.callbackPriority = t),
        (e.callbackNode = n),
        t
      );
    }
    return (
      l !== null && l !== null && U(l),
      (e.callbackPriority = 2),
      (e.callbackNode = null),
      2
    );
  }
  function Bh(e, t) {
    if (vt !== 0 && vt !== 5)
      return ((e.callbackNode = null), (e.callbackPriority = 0), null);
    var n = e.callbackNode;
    if (Ar() && e.callbackNode !== n) return null;
    var l = Ne;
    return (
      (l = Jl(
        e,
        e === $e ? l : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1
      )),
      l === 0
        ? null
        : (ph(e, l, t),
          Vh(e, ie()),
          e.callbackNode != null && e.callbackNode === n
            ? Bh.bind(null, e)
            : null)
    );
  }
  function Hh(e, t) {
    if (Ar()) return null;
    ph(e, t, !0);
  }
  function db() {
    Tb(function () {
      (ke & 6) !== 0 ? A(Ee, fb) : Lh();
    });
  }
  function lc() {
    if (Vl === 0) {
      var e = Ya;
      (e === 0 && ((e = xn), (xn <<= 1), (xn & 261888) === 0 && (xn = 256)),
        (Vl = e));
    }
    return Vl;
  }
  function Yh(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean"
      ? null
      : typeof e == "function"
        ? e
        : zu("" + e);
  }
  function qh(e, t) {
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
  function mb(e, t, n, l, u) {
    if (t === "submit" && n && n.stateNode === u) {
      var o = Yh((u[Vt] || null).action),
        d = l.submitter;
      d &&
        ((t = (t = d[Vt] || null)
          ? Yh(t.formAction)
          : d.getAttribute("formAction")),
        t !== null && ((o = t), (d = null)));
      var g = new Vu("action", "action", null, l, u);
      e.push({
        event: g,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (l.defaultPrevented) {
                if (Vl !== 0) {
                  var E = d ? qh(u, d) : new FormData(u);
                  xs(
                    n,
                    { pending: !0, data: E, method: u.method, action: o },
                    null,
                    E
                  );
                }
              } else
                typeof o == "function" &&
                  (g.preventDefault(),
                  (E = d ? qh(u, d) : new FormData(u)),
                  xs(
                    n,
                    { pending: !0, data: E, method: u.method, action: o },
                    o,
                    E
                  ));
            },
            currentTarget: u,
          },
        ],
      });
    }
  }
  for (var ac = 0; ac < qo.length; ac++) {
    var ic = qo[ac],
      hb = ic.toLowerCase(),
      gb = ic[0].toUpperCase() + ic.slice(1);
    Rn(hb, "on" + gb);
  }
  (Rn(vd, "onAnimationEnd"),
    Rn(pd, "onAnimationIteration"),
    Rn(bd, "onAnimationStart"),
    Rn("dblclick", "onDoubleClick"),
    Rn("focusin", "onFocus"),
    Rn("focusout", "onBlur"),
    Rn(Dp, "onTransitionRun"),
    Rn(zp, "onTransitionStart"),
    Rn(Up, "onTransitionCancel"),
    Rn(Sd, "onTransitionEnd"),
    _a("onMouseEnter", ["mouseout", "mouseover"]),
    _a("onMouseLeave", ["mouseout", "mouseover"]),
    _a("onPointerEnter", ["pointerout", "pointerover"]),
    _a("onPointerLeave", ["pointerout", "pointerover"]),
    $l(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    $l(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    $l("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    $l(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    $l(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    $l(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    ));
  var eu =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    yb = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(eu)
    );
  function jh(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var l = e[n],
        u = l.event;
      l = l.listeners;
      e: {
        var o = void 0;
        if (t)
          for (var d = l.length - 1; 0 <= d; d--) {
            var g = l[d],
              E = g.instance,
              L = g.currentTarget;
            if (((g = g.listener), E !== o && u.isPropagationStopped()))
              break e;
            ((o = g), (u.currentTarget = L));
            try {
              o(u);
            } catch (F) {
              Yu(F);
            }
            ((u.currentTarget = null), (o = E));
          }
        else
          for (d = 0; d < l.length; d++) {
            if (
              ((g = l[d]),
              (E = g.instance),
              (L = g.currentTarget),
              (g = g.listener),
              E !== o && u.isPropagationStopped())
            )
              break e;
            ((o = g), (u.currentTarget = L));
            try {
              o(u);
            } catch (F) {
              Yu(F);
            }
            ((u.currentTarget = null), (o = E));
          }
      }
    }
  }
  function Ue(e, t) {
    var n = t[po];
    n === void 0 && (n = t[po] = new Set());
    var l = e + "__bubble";
    n.has(l) || (Gh(t, e, 2, !1), n.add(l));
  }
  function uc(e, t, n) {
    var l = 0;
    (t && (l |= 4), Gh(n, e, l, t));
  }
  var _r = "_reactListening" + Math.random().toString(36).slice(2);
  function rc(e) {
    if (!e[_r]) {
      ((e[_r] = !0),
        Lf.forEach(function (n) {
          n !== "selectionchange" && (yb.has(n) || uc(n, !1, e), uc(n, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[_r] || ((t[_r] = !0), uc("selectionchange", !1, t));
    }
  }
  function Gh(e, t, n, l) {
    switch (vg(t)) {
      case 2:
        var u = Xb;
        break;
      case 8:
        u = Qb;
        break;
      default:
        u = Ac;
    }
    ((n = u.bind(null, t, n, e)),
      (u = void 0),
      !Co ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (u = !0),
      l
        ? u !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: u })
          : e.addEventListener(t, n, !0)
        : u !== void 0
          ? e.addEventListener(t, n, { passive: u })
          : e.addEventListener(t, n, !1));
  }
  function oc(e, t, n, l, u) {
    var o = l;
    if ((t & 1) === 0 && (t & 2) === 0 && l !== null)
      e: for (;;) {
        if (l === null) return;
        var d = l.tag;
        if (d === 3 || d === 4) {
          var g = l.stateNode.containerInfo;
          if (g === u) break;
          if (d === 4)
            for (d = l.return; d !== null; ) {
              var E = d.tag;
              if ((E === 3 || E === 4) && d.stateNode.containerInfo === u)
                return;
              d = d.return;
            }
          for (; g !== null; ) {
            if (((d = Aa(g)), d === null)) return;
            if (((E = d.tag), E === 5 || E === 6 || E === 26 || E === 27)) {
              l = o = d;
              continue e;
            }
            g = g.parentNode;
          }
        }
        l = l.return;
      }
    Kf(function () {
      var L = o,
        F = _o(n),
        ee = [];
      e: {
        var H = Ed.get(e);
        if (H !== void 0) {
          var j = Vu,
            ve = e;
          switch (e) {
            case "keypress":
              if (Nu(n) === 0) break e;
            case "keydown":
            case "keyup":
              j = sp;
              break;
            case "focusin":
              ((ve = "focus"), (j = Do));
              break;
            case "focusout":
              ((ve = "blur"), (j = Do));
              break;
            case "beforeblur":
            case "afterblur":
              j = Do;
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
              j = $f;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              j = Wv;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              j = dp;
              break;
            case vd:
            case pd:
            case bd:
              j = ep;
              break;
            case Sd:
              j = hp;
              break;
            case "scroll":
            case "scrollend":
              j = Fv;
              break;
            case "wheel":
              j = yp;
              break;
            case "copy":
            case "cut":
            case "paste":
              j = np;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              j = Pf;
              break;
            case "toggle":
            case "beforetoggle":
              j = pp;
          }
          var _e = (t & 4) !== 0,
            Fe = !_e && (e === "scroll" || e === "scrollend"),
            D = _e ? (H !== null ? H + "Capture" : null) : H;
          _e = [];
          for (var T = L, N; T !== null; ) {
            var I = T;
            if (
              ((N = I.stateNode),
              (I = I.tag),
              (I !== 5 && I !== 26 && I !== 27) ||
                N === null ||
                D === null ||
                ((I = Ai(T, D)), I != null && _e.push(tu(T, I, N))),
              Fe)
            )
              break;
            T = T.return;
          }
          0 < _e.length &&
            ((H = new j(H, ve, null, n, F)),
            ee.push({ event: H, listeners: _e }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((H = e === "mouseover" || e === "pointerover"),
            (j = e === "mouseout" || e === "pointerout"),
            H &&
              n !== To &&
              (ve = n.relatedTarget || n.fromElement) &&
              (Aa(ve) || ve[Ea]))
          )
            break e;
          if (
            (j || H) &&
            ((H =
              F.window === F
                ? F
                : (H = F.ownerDocument)
                  ? H.defaultView || H.parentWindow
                  : window),
            j
              ? ((ve = n.relatedTarget || n.toElement),
                (j = L),
                (ve = ve ? Aa(ve) : null),
                ve !== null &&
                  ((Fe = f(ve)),
                  (_e = ve.tag),
                  ve !== Fe || (_e !== 5 && _e !== 27 && _e !== 6)) &&
                  (ve = null))
              : ((j = null), (ve = L)),
            j !== ve)
          ) {
            if (
              ((_e = $f),
              (I = "onMouseLeave"),
              (D = "onMouseEnter"),
              (T = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((_e = Pf),
                (I = "onPointerLeave"),
                (D = "onPointerEnter"),
                (T = "pointer")),
              (Fe = j == null ? H : Ei(j)),
              (N = ve == null ? H : Ei(ve)),
              (H = new _e(I, T + "leave", j, n, F)),
              (H.target = Fe),
              (H.relatedTarget = N),
              (I = null),
              Aa(F) === L &&
                ((_e = new _e(D, T + "enter", ve, n, F)),
                (_e.target = N),
                (_e.relatedTarget = Fe),
                (I = _e)),
              (Fe = I),
              j && ve)
            )
              t: {
                for (_e = vb, D = j, T = ve, N = 0, I = D; I; I = _e(I)) N++;
                I = 0;
                for (var xe = T; xe; xe = _e(xe)) I++;
                for (; 0 < N - I; ) ((D = _e(D)), N--);
                for (; 0 < I - N; ) ((T = _e(T)), I--);
                for (; N--; ) {
                  if (D === T || (T !== null && D === T.alternate)) {
                    _e = D;
                    break t;
                  }
                  ((D = _e(D)), (T = _e(T)));
                }
                _e = null;
              }
            else _e = null;
            (j !== null && kh(ee, H, j, _e, !1),
              ve !== null && Fe !== null && kh(ee, Fe, ve, _e, !0));
          }
        }
        e: {
          if (
            ((H = L ? Ei(L) : window),
            (j = H.nodeName && H.nodeName.toLowerCase()),
            j === "select" || (j === "input" && H.type === "file"))
          )
            var je = ud;
          else if (ad(H))
            if (rd) je = wp;
            else {
              je = Rp;
              var Se = _p;
            }
          else
            ((j = H.nodeName),
              !j ||
              j.toLowerCase() !== "input" ||
              (H.type !== "checkbox" && H.type !== "radio")
                ? L && xo(L.elementType) && (je = ud)
                : (je = Cp));
          if (je && (je = je(e, L))) {
            id(ee, je, n, F);
            break e;
          }
          (Se && Se(e, H, L),
            e === "focusout" &&
              L &&
              H.type === "number" &&
              L.memoizedProps.value != null &&
              Ao(H, "number", H.value));
        }
        switch (((Se = L ? Ei(L) : window), e)) {
          case "focusin":
            (ad(Se) || Se.contentEditable === "true") &&
              ((Da = Se), (Bo = L), (Oi = null));
            break;
          case "focusout":
            Oi = Bo = Da = null;
            break;
          case "mousedown":
            Ho = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((Ho = !1), gd(ee, n, F));
            break;
          case "selectionchange":
            if (Op) break;
          case "keydown":
          case "keyup":
            gd(ee, n, F);
        }
        var we;
        if (Uo)
          e: {
            switch (e) {
              case "compositionstart":
                var Le = "onCompositionStart";
                break e;
              case "compositionend":
                Le = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Le = "onCompositionUpdate";
                break e;
            }
            Le = void 0;
          }
        else
          Oa
            ? nd(e, n) && (Le = "onCompositionEnd")
            : e === "keydown" &&
              n.keyCode === 229 &&
              (Le = "onCompositionStart");
        (Le &&
          (If &&
            n.locale !== "ko" &&
            (Oa || Le !== "onCompositionStart"
              ? Le === "onCompositionEnd" && Oa && (we = Jf())
              : ((Sl = F),
                (wo = "value" in Sl ? Sl.value : Sl.textContent),
                (Oa = !0))),
          (Se = Rr(L, Le)),
          0 < Se.length &&
            ((Le = new Wf(Le, e, null, n, F)),
            ee.push({ event: Le, listeners: Se }),
            we
              ? (Le.data = we)
              : ((we = ld(n)), we !== null && (Le.data = we)))),
          (we = Sp ? Ep(e, n) : Ap(e, n)) &&
            ((Le = Rr(L, "onBeforeInput")),
            0 < Le.length &&
              ((Se = new Wf("onBeforeInput", "beforeinput", null, n, F)),
              ee.push({ event: Se, listeners: Le }),
              (Se.data = we))),
          mb(ee, e, L, n, F));
      }
      jh(ee, t);
    });
  }
  function tu(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Rr(e, t) {
    for (var n = t + "Capture", l = []; e !== null; ) {
      var u = e,
        o = u.stateNode;
      if (
        ((u = u.tag),
        (u !== 5 && u !== 26 && u !== 27) ||
          o === null ||
          ((u = Ai(e, n)),
          u != null && l.unshift(tu(e, u, o)),
          (u = Ai(e, t)),
          u != null && l.push(tu(e, u, o))),
        e.tag === 3)
      )
        return l;
      e = e.return;
    }
    return [];
  }
  function vb(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function kh(e, t, n, l, u) {
    for (var o = t._reactName, d = []; n !== null && n !== l; ) {
      var g = n,
        E = g.alternate,
        L = g.stateNode;
      if (((g = g.tag), E !== null && E === l)) break;
      ((g !== 5 && g !== 26 && g !== 27) ||
        L === null ||
        ((E = L),
        u
          ? ((L = Ai(n, o)), L != null && d.unshift(tu(n, L, E)))
          : u || ((L = Ai(n, o)), L != null && d.push(tu(n, L, E)))),
        (n = n.return));
    }
    d.length !== 0 && e.push({ event: t, listeners: d });
  }
  var pb = /\r\n?/g,
    bb = /\u0000|\uFFFD/g;
  function Xh(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        pb,
        `
`
      )
      .replace(bb, "");
  }
  function Qh(e, t) {
    return ((t = Xh(t)), Xh(e) === t);
  }
  function Je(e, t, n, l, u, o) {
    switch (n) {
      case "children":
        typeof l == "string"
          ? t === "body" || (t === "textarea" && l === "") || Ca(e, l)
          : (typeof l == "number" || typeof l == "bigint") &&
            t !== "body" &&
            Ca(e, "" + l);
        break;
      case "className":
        Ou(e, "class", l);
        break;
      case "tabIndex":
        Ou(e, "tabindex", l);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Ou(e, n, l);
        break;
      case "style":
        Qf(e, l, o);
        break;
      case "data":
        if (t !== "object") {
          Ou(e, "data", l);
          break;
        }
      case "src":
      case "href":
        if (l === "" && (t !== "a" || n !== "href")) {
          e.removeAttribute(n);
          break;
        }
        if (
          l == null ||
          typeof l == "function" ||
          typeof l == "symbol" ||
          typeof l == "boolean"
        ) {
          e.removeAttribute(n);
          break;
        }
        ((l = zu("" + l)), e.setAttribute(n, l));
        break;
      case "action":
      case "formAction":
        if (typeof l == "function") {
          e.setAttribute(
            n,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof o == "function" &&
            (n === "formAction"
              ? (t !== "input" && Je(e, t, "name", u.name, u, null),
                Je(e, t, "formEncType", u.formEncType, u, null),
                Je(e, t, "formMethod", u.formMethod, u, null),
                Je(e, t, "formTarget", u.formTarget, u, null))
              : (Je(e, t, "encType", u.encType, u, null),
                Je(e, t, "method", u.method, u, null),
                Je(e, t, "target", u.target, u, null)));
        if (l == null || typeof l == "symbol" || typeof l == "boolean") {
          e.removeAttribute(n);
          break;
        }
        ((l = zu("" + l)), e.setAttribute(n, l));
        break;
      case "onClick":
        l != null && (e.onclick = Zn);
        break;
      case "onScroll":
        l != null && Ue("scroll", e);
        break;
      case "onScrollEnd":
        l != null && Ue("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l)) throw Error(s(61));
          if (((n = l.__html), n != null)) {
            if (u.children != null) throw Error(s(60));
            e.innerHTML = n;
          }
        }
        break;
      case "multiple":
        e.multiple = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "muted":
        e.muted = l && typeof l != "function" && typeof l != "symbol";
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
          l == null ||
          typeof l == "function" ||
          typeof l == "boolean" ||
          typeof l == "symbol"
        ) {
          e.removeAttribute("xlink:href");
          break;
        }
        ((n = zu("" + l)),
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
        l != null && typeof l != "function" && typeof l != "symbol"
          ? e.setAttribute(n, "" + l)
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
        l && typeof l != "function" && typeof l != "symbol"
          ? e.setAttribute(n, "")
          : e.removeAttribute(n);
        break;
      case "capture":
      case "download":
        l === !0
          ? e.setAttribute(n, "")
          : l !== !1 &&
              l != null &&
              typeof l != "function" &&
              typeof l != "symbol"
            ? e.setAttribute(n, l)
            : e.removeAttribute(n);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        l != null &&
        typeof l != "function" &&
        typeof l != "symbol" &&
        !isNaN(l) &&
        1 <= l
          ? e.setAttribute(n, l)
          : e.removeAttribute(n);
        break;
      case "rowSpan":
      case "start":
        l == null || typeof l == "function" || typeof l == "symbol" || isNaN(l)
          ? e.removeAttribute(n)
          : e.setAttribute(n, l);
        break;
      case "popover":
        (Ue("beforetoggle", e), Ue("toggle", e), Mu(e, "popover", l));
        break;
      case "xlinkActuate":
        Qn(e, "http://www.w3.org/1999/xlink", "xlink:actuate", l);
        break;
      case "xlinkArcrole":
        Qn(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", l);
        break;
      case "xlinkRole":
        Qn(e, "http://www.w3.org/1999/xlink", "xlink:role", l);
        break;
      case "xlinkShow":
        Qn(e, "http://www.w3.org/1999/xlink", "xlink:show", l);
        break;
      case "xlinkTitle":
        Qn(e, "http://www.w3.org/1999/xlink", "xlink:title", l);
        break;
      case "xlinkType":
        Qn(e, "http://www.w3.org/1999/xlink", "xlink:type", l);
        break;
      case "xmlBase":
        Qn(e, "http://www.w3.org/XML/1998/namespace", "xml:base", l);
        break;
      case "xmlLang":
        Qn(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", l);
        break;
      case "xmlSpace":
        Qn(e, "http://www.w3.org/XML/1998/namespace", "xml:space", l);
        break;
      case "is":
        Mu(e, "is", l);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < n.length) ||
          (n[0] !== "o" && n[0] !== "O") ||
          (n[1] !== "n" && n[1] !== "N")) &&
          ((n = Kv.get(n) || n), Mu(e, n, l));
    }
  }
  function sc(e, t, n, l, u, o) {
    switch (n) {
      case "style":
        Qf(e, l, o);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l)) throw Error(s(61));
          if (((n = l.__html), n != null)) {
            if (u.children != null) throw Error(s(60));
            e.innerHTML = n;
          }
        }
        break;
      case "children":
        typeof l == "string"
          ? Ca(e, l)
          : (typeof l == "number" || typeof l == "bigint") && Ca(e, "" + l);
        break;
      case "onScroll":
        l != null && Ue("scroll", e);
        break;
      case "onScrollEnd":
        l != null && Ue("scrollend", e);
        break;
      case "onClick":
        l != null && (e.onclick = Zn);
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
        if (!Vf.hasOwnProperty(n))
          e: {
            if (
              n[0] === "o" &&
              n[1] === "n" &&
              ((u = n.endsWith("Capture")),
              (t = n.slice(2, u ? n.length - 7 : void 0)),
              (o = e[Vt] || null),
              (o = o != null ? o[n] : null),
              typeof o == "function" && e.removeEventListener(t, o, u),
              typeof l == "function")
            ) {
              (typeof o != "function" &&
                o !== null &&
                (n in e
                  ? (e[n] = null)
                  : e.hasAttribute(n) && e.removeAttribute(n)),
                e.addEventListener(t, l, u));
              break e;
            }
            n in e
              ? (e[n] = l)
              : l === !0
                ? e.setAttribute(n, "")
                : Mu(e, n, l);
          }
    }
  }
  function Ct(e, t, n) {
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
        (Ue("error", e), Ue("load", e));
        var l = !1,
          u = !1,
          o;
        for (o in n)
          if (n.hasOwnProperty(o)) {
            var d = n[o];
            if (d != null)
              switch (o) {
                case "src":
                  l = !0;
                  break;
                case "srcSet":
                  u = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(s(137, t));
                default:
                  Je(e, t, o, d, n, null);
              }
          }
        (u && Je(e, t, "srcSet", n.srcSet, n, null),
          l && Je(e, t, "src", n.src, n, null));
        return;
      case "input":
        Ue("invalid", e);
        var g = (o = d = u = null),
          E = null,
          L = null;
        for (l in n)
          if (n.hasOwnProperty(l)) {
            var F = n[l];
            if (F != null)
              switch (l) {
                case "name":
                  u = F;
                  break;
                case "type":
                  d = F;
                  break;
                case "checked":
                  E = F;
                  break;
                case "defaultChecked":
                  L = F;
                  break;
                case "value":
                  o = F;
                  break;
                case "defaultValue":
                  g = F;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (F != null) throw Error(s(137, t));
                  break;
                default:
                  Je(e, t, l, F, n, null);
              }
          }
        jf(e, o, g, E, L, d, u, !1);
        return;
      case "select":
        (Ue("invalid", e), (l = d = o = null));
        for (u in n)
          if (n.hasOwnProperty(u) && ((g = n[u]), g != null))
            switch (u) {
              case "value":
                o = g;
                break;
              case "defaultValue":
                d = g;
                break;
              case "multiple":
                l = g;
              default:
                Je(e, t, u, g, n, null);
            }
        ((t = o),
          (n = d),
          (e.multiple = !!l),
          t != null ? Ra(e, !!l, t, !1) : n != null && Ra(e, !!l, n, !0));
        return;
      case "textarea":
        (Ue("invalid", e), (o = u = l = null));
        for (d in n)
          if (n.hasOwnProperty(d) && ((g = n[d]), g != null))
            switch (d) {
              case "value":
                l = g;
                break;
              case "defaultValue":
                u = g;
                break;
              case "children":
                o = g;
                break;
              case "dangerouslySetInnerHTML":
                if (g != null) throw Error(s(91));
                break;
              default:
                Je(e, t, d, g, n, null);
            }
        kf(e, l, u, o);
        return;
      case "option":
        for (E in n)
          if (n.hasOwnProperty(E) && ((l = n[E]), l != null))
            switch (E) {
              case "selected":
                e.selected =
                  l && typeof l != "function" && typeof l != "symbol";
                break;
              default:
                Je(e, t, E, l, n, null);
            }
        return;
      case "dialog":
        (Ue("beforetoggle", e),
          Ue("toggle", e),
          Ue("cancel", e),
          Ue("close", e));
        break;
      case "iframe":
      case "object":
        Ue("load", e);
        break;
      case "video":
      case "audio":
        for (l = 0; l < eu.length; l++) Ue(eu[l], e);
        break;
      case "image":
        (Ue("error", e), Ue("load", e));
        break;
      case "details":
        Ue("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        (Ue("error", e), Ue("load", e));
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
        for (L in n)
          if (n.hasOwnProperty(L) && ((l = n[L]), l != null))
            switch (L) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(s(137, t));
              default:
                Je(e, t, L, l, n, null);
            }
        return;
      default:
        if (xo(t)) {
          for (F in n)
            n.hasOwnProperty(F) &&
              ((l = n[F]), l !== void 0 && sc(e, t, F, l, n, void 0));
          return;
        }
    }
    for (g in n)
      n.hasOwnProperty(g) && ((l = n[g]), l != null && Je(e, t, g, l, n, null));
  }
  function Sb(e, t, n, l) {
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
        var u = null,
          o = null,
          d = null,
          g = null,
          E = null,
          L = null,
          F = null;
        for (j in n) {
          var ee = n[j];
          if (n.hasOwnProperty(j) && ee != null)
            switch (j) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                E = ee;
              default:
                l.hasOwnProperty(j) || Je(e, t, j, null, l, ee);
            }
        }
        for (var H in l) {
          var j = l[H];
          if (((ee = n[H]), l.hasOwnProperty(H) && (j != null || ee != null)))
            switch (H) {
              case "type":
                o = j;
                break;
              case "name":
                u = j;
                break;
              case "checked":
                L = j;
                break;
              case "defaultChecked":
                F = j;
                break;
              case "value":
                d = j;
                break;
              case "defaultValue":
                g = j;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (j != null) throw Error(s(137, t));
                break;
              default:
                j !== ee && Je(e, t, H, j, l, ee);
            }
        }
        Eo(e, d, g, E, L, F, o, u);
        return;
      case "select":
        j = d = g = H = null;
        for (o in n)
          if (((E = n[o]), n.hasOwnProperty(o) && E != null))
            switch (o) {
              case "value":
                break;
              case "multiple":
                j = E;
              default:
                l.hasOwnProperty(o) || Je(e, t, o, null, l, E);
            }
        for (u in l)
          if (
            ((o = l[u]),
            (E = n[u]),
            l.hasOwnProperty(u) && (o != null || E != null))
          )
            switch (u) {
              case "value":
                H = o;
                break;
              case "defaultValue":
                g = o;
                break;
              case "multiple":
                d = o;
              default:
                o !== E && Je(e, t, u, o, l, E);
            }
        ((t = g),
          (n = d),
          (l = j),
          H != null
            ? Ra(e, !!n, H, !1)
            : !!l != !!n &&
              (t != null ? Ra(e, !!n, t, !0) : Ra(e, !!n, n ? [] : "", !1)));
        return;
      case "textarea":
        j = H = null;
        for (g in n)
          if (
            ((u = n[g]),
            n.hasOwnProperty(g) && u != null && !l.hasOwnProperty(g))
          )
            switch (g) {
              case "value":
                break;
              case "children":
                break;
              default:
                Je(e, t, g, null, l, u);
            }
        for (d in l)
          if (
            ((u = l[d]),
            (o = n[d]),
            l.hasOwnProperty(d) && (u != null || o != null))
          )
            switch (d) {
              case "value":
                H = u;
                break;
              case "defaultValue":
                j = u;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (u != null) throw Error(s(91));
                break;
              default:
                u !== o && Je(e, t, d, u, l, o);
            }
        Gf(e, H, j);
        return;
      case "option":
        for (var ve in n)
          if (
            ((H = n[ve]),
            n.hasOwnProperty(ve) && H != null && !l.hasOwnProperty(ve))
          )
            switch (ve) {
              case "selected":
                e.selected = !1;
                break;
              default:
                Je(e, t, ve, null, l, H);
            }
        for (E in l)
          if (
            ((H = l[E]),
            (j = n[E]),
            l.hasOwnProperty(E) && H !== j && (H != null || j != null))
          )
            switch (E) {
              case "selected":
                e.selected =
                  H && typeof H != "function" && typeof H != "symbol";
                break;
              default:
                Je(e, t, E, H, l, j);
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
        for (var _e in n)
          ((H = n[_e]),
            n.hasOwnProperty(_e) &&
              H != null &&
              !l.hasOwnProperty(_e) &&
              Je(e, t, _e, null, l, H));
        for (L in l)
          if (
            ((H = l[L]),
            (j = n[L]),
            l.hasOwnProperty(L) && H !== j && (H != null || j != null))
          )
            switch (L) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (H != null) throw Error(s(137, t));
                break;
              default:
                Je(e, t, L, H, l, j);
            }
        return;
      default:
        if (xo(t)) {
          for (var Fe in n)
            ((H = n[Fe]),
              n.hasOwnProperty(Fe) &&
                H !== void 0 &&
                !l.hasOwnProperty(Fe) &&
                sc(e, t, Fe, void 0, l, H));
          for (F in l)
            ((H = l[F]),
              (j = n[F]),
              !l.hasOwnProperty(F) ||
                H === j ||
                (H === void 0 && j === void 0) ||
                sc(e, t, F, H, l, j));
          return;
        }
    }
    for (var D in n)
      ((H = n[D]),
        n.hasOwnProperty(D) &&
          H != null &&
          !l.hasOwnProperty(D) &&
          Je(e, t, D, null, l, H));
    for (ee in l)
      ((H = l[ee]),
        (j = n[ee]),
        !l.hasOwnProperty(ee) ||
          H === j ||
          (H == null && j == null) ||
          Je(e, t, ee, H, l, j));
  }
  function Zh(e) {
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
  function Eb() {
    if (typeof performance.getEntriesByType == "function") {
      for (
        var e = 0, t = 0, n = performance.getEntriesByType("resource"), l = 0;
        l < n.length;
        l++
      ) {
        var u = n[l],
          o = u.transferSize,
          d = u.initiatorType,
          g = u.duration;
        if (o && g && Zh(d)) {
          for (d = 0, g = u.responseEnd, l += 1; l < n.length; l++) {
            var E = n[l],
              L = E.startTime;
            if (L > g) break;
            var F = E.transferSize,
              ee = E.initiatorType;
            F &&
              Zh(ee) &&
              ((E = E.responseEnd), (d += F * (E < g ? 1 : (g - L) / (E - L))));
          }
          if ((--l, (t += (8 * (o + d)) / (u.duration / 1e3)), e++, 10 < e))
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
  var cc = null,
    fc = null;
  function Cr(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function Kh(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Jh(e, t) {
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
  function dc(e, t) {
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
  var mc = null;
  function Ab() {
    var e = window.event;
    return e && e.type === "popstate"
      ? e === mc
        ? !1
        : ((mc = e), !0)
      : ((mc = null), !1);
  }
  var Fh = typeof setTimeout == "function" ? setTimeout : void 0,
    xb = typeof clearTimeout == "function" ? clearTimeout : void 0,
    $h = typeof Promise == "function" ? Promise : void 0,
    Tb =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof $h < "u"
          ? function (e) {
              return $h.resolve(null).then(e).catch(_b);
            }
          : Fh;
  function _b(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function Bl(e) {
    return e === "head";
  }
  function Wh(e, t) {
    var n = t,
      l = 0;
    do {
      var u = n.nextSibling;
      if ((e.removeChild(n), u && u.nodeType === 8))
        if (((n = u.data), n === "/$" || n === "/&")) {
          if (l === 0) {
            (e.removeChild(u), ai(t));
            return;
          }
          l--;
        } else if (
          n === "$" ||
          n === "$?" ||
          n === "$~" ||
          n === "$!" ||
          n === "&"
        )
          l++;
        else if (n === "html") nu(e.ownerDocument.documentElement);
        else if (n === "head") {
          ((n = e.ownerDocument.head), nu(n));
          for (var o = n.firstChild; o; ) {
            var d = o.nextSibling,
              g = o.nodeName;
            (o[Si] ||
              g === "SCRIPT" ||
              g === "STYLE" ||
              (g === "LINK" && o.rel.toLowerCase() === "stylesheet") ||
              n.removeChild(o),
              (o = d));
          }
        } else n === "body" && nu(e.ownerDocument.body);
      n = u;
    } while (n);
    ai(t);
  }
  function Ph(e, t) {
    var n = e;
    e = 0;
    do {
      var l = n.nextSibling;
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
        l && l.nodeType === 8)
      )
        if (((n = l.data), n === "/$")) {
          if (e === 0) break;
          e--;
        } else (n !== "$" && n !== "$?" && n !== "$~" && n !== "$!") || e++;
      n = l;
    } while (n);
  }
  function hc(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var n = t;
      switch (((t = t.nextSibling), n.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          (hc(n), bo(n));
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
  function Rb(e, t, n, l) {
    for (; e.nodeType === 1; ) {
      var u = n;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!l && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
      } else if (l) {
        if (!e[Si])
          switch (t) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (
                ((o = e.getAttribute("rel")),
                o === "stylesheet" && e.hasAttribute("data-precedence"))
              )
                break;
              if (
                o !== u.rel ||
                e.getAttribute("href") !==
                  (u.href == null || u.href === "" ? null : u.href) ||
                e.getAttribute("crossorigin") !==
                  (u.crossOrigin == null ? null : u.crossOrigin) ||
                e.getAttribute("title") !== (u.title == null ? null : u.title)
              )
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (
                ((o = e.getAttribute("src")),
                (o !== (u.src == null ? null : u.src) ||
                  e.getAttribute("type") !== (u.type == null ? null : u.type) ||
                  e.getAttribute("crossorigin") !==
                    (u.crossOrigin == null ? null : u.crossOrigin)) &&
                  o &&
                  e.hasAttribute("async") &&
                  !e.hasAttribute("itemprop"))
              )
                break;
              return e;
            default:
              return e;
          }
      } else if (t === "input" && e.type === "hidden") {
        var o = u.name == null ? null : "" + u.name;
        if (u.type === "hidden" && e.getAttribute("name") === o) return e;
      } else return e;
      if (((e = pn(e.nextSibling)), e === null)) break;
    }
    return null;
  }
  function Cb(e, t, n) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") &&
          !n) ||
        ((e = pn(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function Ih(e, t) {
    for (; e.nodeType !== 8; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") &&
          !t) ||
        ((e = pn(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function gc(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function yc(e) {
    return (
      e.data === "$!" ||
      (e.data === "$?" && e.ownerDocument.readyState !== "loading")
    );
  }
  function wb(e, t) {
    var n = e.ownerDocument;
    if (e.data === "$~") e._reactRetry = t;
    else if (e.data !== "$?" || n.readyState !== "loading") t();
    else {
      var l = function () {
        (t(), n.removeEventListener("DOMContentLoaded", l));
      };
      (n.addEventListener("DOMContentLoaded", l), (e._reactRetry = l));
    }
  }
  function pn(e) {
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
  var vc = null;
  function eg(e) {
    e = e.nextSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "/$" || n === "/&") {
          if (t === 0) return pn(e.nextSibling);
          t--;
        } else
          (n !== "$" && n !== "$!" && n !== "$?" && n !== "$~" && n !== "&") ||
            t++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function tg(e) {
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
  function ng(e, t, n) {
    switch (((t = Cr(n)), e)) {
      case "html":
        if (((e = t.documentElement), !e)) throw Error(s(452));
        return e;
      case "head":
        if (((e = t.head), !e)) throw Error(s(453));
        return e;
      case "body":
        if (((e = t.body), !e)) throw Error(s(454));
        return e;
      default:
        throw Error(s(451));
    }
  }
  function nu(e) {
    for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
    bo(e);
  }
  var bn = new Map(),
    lg = new Set();
  function wr(e) {
    return typeof e.getRootNode == "function"
      ? e.getRootNode()
      : e.nodeType === 9
        ? e
        : e.ownerDocument;
  }
  var ol = O.d;
  O.d = { f: Mb, r: Ob, D: Db, C: zb, L: Ub, m: Nb, X: Vb, S: Lb, M: Bb };
  function Mb() {
    var e = ol.f(),
      t = br();
    return e || t;
  }
  function Ob(e) {
    var t = xa(e);
    t !== null && t.tag === 5 && t.type === "form" ? Sm(t) : ol.r(e);
  }
  var ti = typeof document > "u" ? null : document;
  function ag(e, t, n) {
    var l = ti;
    if (l && typeof t == "string" && t) {
      var u = fn(t);
      ((u = 'link[rel="' + e + '"][href="' + u + '"]'),
        typeof n == "string" && (u += '[crossorigin="' + n + '"]'),
        lg.has(u) ||
          (lg.add(u),
          (e = { rel: e, crossOrigin: n, href: t }),
          l.querySelector(u) === null &&
            ((t = l.createElement("link")),
            Ct(t, "link", e),
            Et(t),
            l.head.appendChild(t))));
    }
  }
  function Db(e) {
    (ol.D(e), ag("dns-prefetch", e, null));
  }
  function zb(e, t) {
    (ol.C(e, t), ag("preconnect", e, t));
  }
  function Ub(e, t, n) {
    ol.L(e, t, n);
    var l = ti;
    if (l && e && t) {
      var u = 'link[rel="preload"][as="' + fn(t) + '"]';
      t === "image" && n && n.imageSrcSet
        ? ((u += '[imagesrcset="' + fn(n.imageSrcSet) + '"]'),
          typeof n.imageSizes == "string" &&
            (u += '[imagesizes="' + fn(n.imageSizes) + '"]'))
        : (u += '[href="' + fn(e) + '"]');
      var o = u;
      switch (t) {
        case "style":
          o = ni(e);
          break;
        case "script":
          o = li(e);
      }
      bn.has(o) ||
        ((e = b(
          {
            rel: "preload",
            href: t === "image" && n && n.imageSrcSet ? void 0 : e,
            as: t,
          },
          n
        )),
        bn.set(o, e),
        l.querySelector(u) !== null ||
          (t === "style" && l.querySelector(lu(o))) ||
          (t === "script" && l.querySelector(au(o))) ||
          ((t = l.createElement("link")),
          Ct(t, "link", e),
          Et(t),
          l.head.appendChild(t)));
    }
  }
  function Nb(e, t) {
    ol.m(e, t);
    var n = ti;
    if (n && e) {
      var l = t && typeof t.as == "string" ? t.as : "script",
        u =
          'link[rel="modulepreload"][as="' + fn(l) + '"][href="' + fn(e) + '"]',
        o = u;
      switch (l) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          o = li(e);
      }
      if (
        !bn.has(o) &&
        ((e = b({ rel: "modulepreload", href: e }, t)),
        bn.set(o, e),
        n.querySelector(u) === null)
      ) {
        switch (l) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(au(o))) return;
        }
        ((l = n.createElement("link")),
          Ct(l, "link", e),
          Et(l),
          n.head.appendChild(l));
      }
    }
  }
  function Lb(e, t, n) {
    ol.S(e, t, n);
    var l = ti;
    if (l && e) {
      var u = Ta(l).hoistableStyles,
        o = ni(e);
      t = t || "default";
      var d = u.get(o);
      if (!d) {
        var g = { loading: 0, preload: null };
        if ((d = l.querySelector(lu(o)))) g.loading = 5;
        else {
          ((e = b({ rel: "stylesheet", href: e, "data-precedence": t }, n)),
            (n = bn.get(o)) && pc(e, n));
          var E = (d = l.createElement("link"));
          (Et(E),
            Ct(E, "link", e),
            (E._p = new Promise(function (L, F) {
              ((E.onload = L), (E.onerror = F));
            })),
            E.addEventListener("load", function () {
              g.loading |= 1;
            }),
            E.addEventListener("error", function () {
              g.loading |= 2;
            }),
            (g.loading |= 4),
            Mr(d, t, l));
        }
        ((d = { type: "stylesheet", instance: d, count: 1, state: g }),
          u.set(o, d));
      }
    }
  }
  function Vb(e, t) {
    ol.X(e, t);
    var n = ti;
    if (n && e) {
      var l = Ta(n).hoistableScripts,
        u = li(e),
        o = l.get(u);
      o ||
        ((o = n.querySelector(au(u))),
        o ||
          ((e = b({ src: e, async: !0 }, t)),
          (t = bn.get(u)) && bc(e, t),
          (o = n.createElement("script")),
          Et(o),
          Ct(o, "link", e),
          n.head.appendChild(o)),
        (o = { type: "script", instance: o, count: 1, state: null }),
        l.set(u, o));
    }
  }
  function Bb(e, t) {
    ol.M(e, t);
    var n = ti;
    if (n && e) {
      var l = Ta(n).hoistableScripts,
        u = li(e),
        o = l.get(u);
      o ||
        ((o = n.querySelector(au(u))),
        o ||
          ((e = b({ src: e, async: !0, type: "module" }, t)),
          (t = bn.get(u)) && bc(e, t),
          (o = n.createElement("script")),
          Et(o),
          Ct(o, "link", e),
          n.head.appendChild(o)),
        (o = { type: "script", instance: o, count: 1, state: null }),
        l.set(u, o));
    }
  }
  function ig(e, t, n, l) {
    var u = (u = q.current) ? wr(u) : null;
    if (!u) throw Error(s(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string"
          ? ((t = ni(n.href)),
            (n = Ta(u).hoistableStyles),
            (l = n.get(t)),
            l ||
              ((l = { type: "style", instance: null, count: 0, state: null }),
              n.set(t, l)),
            l)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          n.rel === "stylesheet" &&
          typeof n.href == "string" &&
          typeof n.precedence == "string"
        ) {
          e = ni(n.href);
          var o = Ta(u).hoistableStyles,
            d = o.get(e);
          if (
            (d ||
              ((u = u.ownerDocument || u),
              (d = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              o.set(e, d),
              (o = u.querySelector(lu(e))) &&
                !o._p &&
                ((d.instance = o), (d.state.loading = 5)),
              bn.has(e) ||
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
                bn.set(e, n),
                o || Hb(u, e, n, d.state))),
            t && l === null)
          )
            throw Error(s(528, ""));
          return d;
        }
        if (t && l !== null) throw Error(s(529, ""));
        return null;
      case "script":
        return (
          (t = n.async),
          (n = n.src),
          typeof n == "string" &&
          t &&
          typeof t != "function" &&
          typeof t != "symbol"
            ? ((t = li(n)),
              (n = Ta(u).hoistableScripts),
              (l = n.get(t)),
              l ||
                ((l = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                n.set(t, l)),
              l)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(s(444, e));
    }
  }
  function ni(e) {
    return 'href="' + fn(e) + '"';
  }
  function lu(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function ug(e) {
    return b({}, e, { "data-precedence": e.precedence, precedence: null });
  }
  function Hb(e, t, n, l) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]")
      ? (l.loading = 1)
      : ((t = e.createElement("link")),
        (l.preload = t),
        t.addEventListener("load", function () {
          return (l.loading |= 1);
        }),
        t.addEventListener("error", function () {
          return (l.loading |= 2);
        }),
        Ct(t, "link", n),
        Et(t),
        e.head.appendChild(t));
  }
  function li(e) {
    return '[src="' + fn(e) + '"]';
  }
  function au(e) {
    return "script[async]" + e;
  }
  function rg(e, t, n) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case "style":
          var l = e.querySelector('style[data-href~="' + fn(n.href) + '"]');
          if (l) return ((t.instance = l), Et(l), l);
          var u = b({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null,
          });
          return (
            (l = (e.ownerDocument || e).createElement("style")),
            Et(l),
            Ct(l, "style", u),
            Mr(l, n.precedence, e),
            (t.instance = l)
          );
        case "stylesheet":
          u = ni(n.href);
          var o = e.querySelector(lu(u));
          if (o) return ((t.state.loading |= 4), (t.instance = o), Et(o), o);
          ((l = ug(n)),
            (u = bn.get(u)) && pc(l, u),
            (o = (e.ownerDocument || e).createElement("link")),
            Et(o));
          var d = o;
          return (
            (d._p = new Promise(function (g, E) {
              ((d.onload = g), (d.onerror = E));
            })),
            Ct(o, "link", l),
            (t.state.loading |= 4),
            Mr(o, n.precedence, e),
            (t.instance = o)
          );
        case "script":
          return (
            (o = li(n.src)),
            (u = e.querySelector(au(o)))
              ? ((t.instance = u), Et(u), u)
              : ((l = n),
                (u = bn.get(o)) && ((l = b({}, n)), bc(l, u)),
                (e = e.ownerDocument || e),
                (u = e.createElement("script")),
                Et(u),
                Ct(u, "link", l),
                e.head.appendChild(u),
                (t.instance = u))
          );
        case "void":
          return null;
        default:
          throw Error(s(443, t.type));
      }
    else
      t.type === "stylesheet" &&
        (t.state.loading & 4) === 0 &&
        ((l = t.instance), (t.state.loading |= 4), Mr(l, n.precedence, e));
    return t.instance;
  }
  function Mr(e, t, n) {
    for (
      var l = n.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]'
        ),
        u = l.length ? l[l.length - 1] : null,
        o = u,
        d = 0;
      d < l.length;
      d++
    ) {
      var g = l[d];
      if (g.dataset.precedence === t) o = g;
      else if (o !== u) break;
    }
    o
      ? o.parentNode.insertBefore(e, o.nextSibling)
      : ((t = n.nodeType === 9 ? n.head : n), t.insertBefore(e, t.firstChild));
  }
  function pc(e, t) {
    (e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.title == null && (e.title = t.title));
  }
  function bc(e, t) {
    (e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.integrity == null && (e.integrity = t.integrity));
  }
  var Or = null;
  function og(e, t, n) {
    if (Or === null) {
      var l = new Map(),
        u = (Or = new Map());
      u.set(n, l);
    } else ((u = Or), (l = u.get(n)), l || ((l = new Map()), u.set(n, l)));
    if (l.has(e)) return l;
    for (
      l.set(e, null), n = n.getElementsByTagName(e), u = 0;
      u < n.length;
      u++
    ) {
      var o = n[u];
      if (
        !(
          o[Si] ||
          o[xt] ||
          (e === "link" && o.getAttribute("rel") === "stylesheet")
        ) &&
        o.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var d = o.getAttribute(t) || "";
        d = e + d;
        var g = l.get(d);
        g ? g.push(o) : l.set(d, [o]);
      }
    }
    return l;
  }
  function sg(e, t, n) {
    ((e = e.ownerDocument || e),
      e.head.insertBefore(
        n,
        t === "title" ? e.querySelector("head > title") : null
      ));
  }
  function Yb(e, t, n) {
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
  function cg(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function qb(e, t, n, l) {
    if (
      n.type === "stylesheet" &&
      (typeof l.media != "string" || matchMedia(l.media).matches !== !1) &&
      (n.state.loading & 4) === 0
    ) {
      if (n.instance === null) {
        var u = ni(l.href),
          o = t.querySelector(lu(u));
        if (o) {
          ((t = o._p),
            t !== null &&
              typeof t == "object" &&
              typeof t.then == "function" &&
              (e.count++, (e = Dr.bind(e)), t.then(e, e)),
            (n.state.loading |= 4),
            (n.instance = o),
            Et(o));
          return;
        }
        ((o = t.ownerDocument || t),
          (l = ug(l)),
          (u = bn.get(u)) && pc(l, u),
          (o = o.createElement("link")),
          Et(o));
        var d = o;
        ((d._p = new Promise(function (g, E) {
          ((d.onload = g), (d.onerror = E));
        })),
          Ct(o, "link", l),
          (n.instance = o));
      }
      (e.stylesheets === null && (e.stylesheets = new Map()),
        e.stylesheets.set(n, t),
        (t = n.state.preload) &&
          (n.state.loading & 3) === 0 &&
          (e.count++,
          (n = Dr.bind(e)),
          t.addEventListener("load", n),
          t.addEventListener("error", n)));
    }
  }
  var Sc = 0;
  function jb(e, t) {
    return (
      e.stylesheets && e.count === 0 && Ur(e, e.stylesheets),
      0 < e.count || 0 < e.imgCount
        ? function (n) {
            var l = setTimeout(function () {
              if ((e.stylesheets && Ur(e, e.stylesheets), e.unsuspend)) {
                var o = e.unsuspend;
                ((e.unsuspend = null), o());
              }
            }, 6e4 + t);
            0 < e.imgBytes && Sc === 0 && (Sc = 62500 * Eb());
            var u = setTimeout(
              function () {
                if (
                  ((e.waitingForImages = !1),
                  e.count === 0 &&
                    (e.stylesheets && Ur(e, e.stylesheets), e.unsuspend))
                ) {
                  var o = e.unsuspend;
                  ((e.unsuspend = null), o());
                }
              },
              (e.imgBytes > Sc ? 50 : 800) + t
            );
            return (
              (e.unsuspend = n),
              function () {
                ((e.unsuspend = null), clearTimeout(l), clearTimeout(u));
              }
            );
          }
        : null
    );
  }
  function Dr() {
    if (
      (this.count--,
      this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))
    ) {
      if (this.stylesheets) Ur(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        ((this.unsuspend = null), e());
      }
    }
  }
  var zr = null;
  function Ur(e, t) {
    ((e.stylesheets = null),
      e.unsuspend !== null &&
        (e.count++,
        (zr = new Map()),
        t.forEach(Gb, e),
        (zr = null),
        Dr.call(e)));
  }
  function Gb(e, t) {
    if (!(t.state.loading & 4)) {
      var n = zr.get(e);
      if (n) var l = n.get(null);
      else {
        ((n = new Map()), zr.set(e, n));
        for (
          var u = e.querySelectorAll(
              "link[data-precedence],style[data-precedence]"
            ),
            o = 0;
          o < u.length;
          o++
        ) {
          var d = u[o];
          (d.nodeName === "LINK" || d.getAttribute("media") !== "not all") &&
            (n.set(d.dataset.precedence, d), (l = d));
        }
        l && n.set(null, l);
      }
      ((u = t.instance),
        (d = u.getAttribute("data-precedence")),
        (o = n.get(d) || l),
        o === l && n.set(null, u),
        n.set(d, u),
        this.count++,
        (l = Dr.bind(this)),
        u.addEventListener("load", l),
        u.addEventListener("error", l),
        o
          ? o.parentNode.insertBefore(u, o.nextSibling)
          : ((e = e.nodeType === 9 ? e.head : e),
            e.insertBefore(u, e.firstChild)),
        (t.state.loading |= 4));
    }
  }
  var iu = {
    $$typeof: Y,
    Provider: null,
    Consumer: null,
    _currentValue: w,
    _currentValue2: w,
    _threadCount: 0,
  };
  function kb(e, t, n, l, u, o, d, g, E) {
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
      (this.expirationTimes = vi(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = vi(0)),
      (this.hiddenUpdates = vi(null)),
      (this.identifierPrefix = l),
      (this.onUncaughtError = u),
      (this.onCaughtError = o),
      (this.onRecoverableError = d),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = E),
      (this.incompleteTransitions = new Map()));
  }
  function fg(e, t, n, l, u, o, d, g, E, L, F, ee) {
    return (
      (e = new kb(e, t, n, d, E, L, F, ee, g)),
      (t = 1),
      o === !0 && (t |= 24),
      (o = Wt(3, null, null, t)),
      (e.current = o),
      (o.stateNode = e),
      (t = Io()),
      t.refCount++,
      (e.pooledCache = t),
      t.refCount++,
      (o.memoizedState = { element: l, isDehydrated: n, cache: t }),
      ls(o),
      e
    );
  }
  function dg(e) {
    return e ? ((e = Na), e) : Na;
  }
  function mg(e, t, n, l, u, o) {
    ((u = dg(u)),
      l.context === null ? (l.context = u) : (l.pendingContext = u),
      (l = Rl(t)),
      (l.payload = { element: n }),
      (o = o === void 0 ? null : o),
      o !== null && (l.callback = o),
      (n = Cl(e, l, t)),
      n !== null && (Gt(n, e, t), Bi(n, e, t)));
  }
  function hg(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Ec(e, t) {
    (hg(e, t), (e = e.alternate) && hg(e, t));
  }
  function gg(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = ea(e, 67108864);
      (t !== null && Gt(t, e, 67108864), Ec(e, 67108864));
    }
  }
  function yg(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = nn();
      t = pi(t);
      var n = ea(e, t);
      (n !== null && Gt(n, e, t), Ec(e, t));
    }
  }
  var Nr = !0;
  function Xb(e, t, n, l) {
    var u = R.T;
    R.T = null;
    var o = O.p;
    try {
      ((O.p = 2), Ac(e, t, n, l));
    } finally {
      ((O.p = o), (R.T = u));
    }
  }
  function Qb(e, t, n, l) {
    var u = R.T;
    R.T = null;
    var o = O.p;
    try {
      ((O.p = 8), Ac(e, t, n, l));
    } finally {
      ((O.p = o), (R.T = u));
    }
  }
  function Ac(e, t, n, l) {
    if (Nr) {
      var u = xc(l);
      if (u === null) (oc(e, t, l, Lr, n), pg(e, l));
      else if (Kb(u, e, t, n, l)) l.stopPropagation();
      else if ((pg(e, l), t & 4 && -1 < Zb.indexOf(e))) {
        for (; u !== null; ) {
          var o = xa(u);
          if (o !== null)
            switch (o.tag) {
              case 3:
                if (((o = o.stateNode), o.current.memoizedState.isDehydrated)) {
                  var d = _n(o.pendingLanes);
                  if (d !== 0) {
                    var g = o;
                    for (g.pendingLanes |= 2, g.entangledLanes |= 2; d; ) {
                      var E = 1 << (31 - De(d));
                      ((g.entanglements[1] |= E), (d &= ~E));
                    }
                    (Vn(o), (ke & 6) === 0 && ((vr = ie() + 500), Ii(0)));
                  }
                }
                break;
              case 31:
              case 13:
                ((g = ea(o, 2)), g !== null && Gt(g, o, 2), br(), Ec(o, 2));
            }
          if (((o = xc(l)), o === null && oc(e, t, l, Lr, n), o === u)) break;
          u = o;
        }
        u !== null && l.stopPropagation();
      } else oc(e, t, l, null, n);
    }
  }
  function xc(e) {
    return ((e = _o(e)), Tc(e));
  }
  var Lr = null;
  function Tc(e) {
    if (((Lr = null), (e = Aa(e)), e !== null)) {
      var t = f(e);
      if (t === null) e = null;
      else {
        var n = t.tag;
        if (n === 13) {
          if (((e = m(t)), e !== null)) return e;
          e = null;
        } else if (n === 31) {
          if (((e = h(t)), e !== null)) return e;
          e = null;
        } else if (n === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return ((Lr = e), null);
  }
  function vg(e) {
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
        switch (re()) {
          case Ee:
            return 2;
          case Ve:
            return 8;
          case He:
          case yt:
            return 32;
          case Kt:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var _c = !1,
    Hl = null,
    Yl = null,
    ql = null,
    uu = new Map(),
    ru = new Map(),
    jl = [],
    Zb =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " "
      );
  function pg(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Hl = null;
        break;
      case "dragenter":
      case "dragleave":
        Yl = null;
        break;
      case "mouseover":
      case "mouseout":
        ql = null;
        break;
      case "pointerover":
      case "pointerout":
        uu.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        ru.delete(t.pointerId);
    }
  }
  function ou(e, t, n, l, u, o) {
    return e === null || e.nativeEvent !== o
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: l,
          nativeEvent: o,
          targetContainers: [u],
        }),
        t !== null && ((t = xa(t)), t !== null && gg(t)),
        e)
      : ((e.eventSystemFlags |= l),
        (t = e.targetContainers),
        u !== null && t.indexOf(u) === -1 && t.push(u),
        e);
  }
  function Kb(e, t, n, l, u) {
    switch (t) {
      case "focusin":
        return ((Hl = ou(Hl, e, t, n, l, u)), !0);
      case "dragenter":
        return ((Yl = ou(Yl, e, t, n, l, u)), !0);
      case "mouseover":
        return ((ql = ou(ql, e, t, n, l, u)), !0);
      case "pointerover":
        var o = u.pointerId;
        return (uu.set(o, ou(uu.get(o) || null, e, t, n, l, u)), !0);
      case "gotpointercapture":
        return (
          (o = u.pointerId),
          ru.set(o, ou(ru.get(o) || null, e, t, n, l, u)),
          !0
        );
    }
    return !1;
  }
  function bg(e) {
    var t = Aa(e.target);
    if (t !== null) {
      var n = f(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = m(n)), t !== null)) {
            ((e.blockedOn = t),
              Uf(e.priority, function () {
                yg(n);
              }));
            return;
          }
        } else if (t === 31) {
          if (((t = h(n)), t !== null)) {
            ((e.blockedOn = t),
              Uf(e.priority, function () {
                yg(n);
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
  function Vr(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = xc(e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var l = new n.constructor(n.type, n);
        ((To = l), n.target.dispatchEvent(l), (To = null));
      } else return ((t = xa(n)), t !== null && gg(t), (e.blockedOn = n), !1);
      t.shift();
    }
    return !0;
  }
  function Sg(e, t, n) {
    Vr(e) && n.delete(t);
  }
  function Jb() {
    ((_c = !1),
      Hl !== null && Vr(Hl) && (Hl = null),
      Yl !== null && Vr(Yl) && (Yl = null),
      ql !== null && Vr(ql) && (ql = null),
      uu.forEach(Sg),
      ru.forEach(Sg));
  }
  function Br(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      _c ||
        ((_c = !0),
        a.unstable_scheduleCallback(a.unstable_NormalPriority, Jb)));
  }
  var Hr = null;
  function Eg(e) {
    Hr !== e &&
      ((Hr = e),
      a.unstable_scheduleCallback(a.unstable_NormalPriority, function () {
        Hr === e && (Hr = null);
        for (var t = 0; t < e.length; t += 3) {
          var n = e[t],
            l = e[t + 1],
            u = e[t + 2];
          if (typeof l != "function") {
            if (Tc(l || n) === null) continue;
            break;
          }
          var o = xa(n);
          o !== null &&
            (e.splice(t, 3),
            (t -= 3),
            xs(o, { pending: !0, data: u, method: n.method, action: l }, l, u));
        }
      }));
  }
  function ai(e) {
    function t(E) {
      return Br(E, e);
    }
    (Hl !== null && Br(Hl, e),
      Yl !== null && Br(Yl, e),
      ql !== null && Br(ql, e),
      uu.forEach(t),
      ru.forEach(t));
    for (var n = 0; n < jl.length; n++) {
      var l = jl[n];
      l.blockedOn === e && (l.blockedOn = null);
    }
    for (; 0 < jl.length && ((n = jl[0]), n.blockedOn === null); )
      (bg(n), n.blockedOn === null && jl.shift());
    if (((n = (e.ownerDocument || e).$$reactFormReplay), n != null))
      for (l = 0; l < n.length; l += 3) {
        var u = n[l],
          o = n[l + 1],
          d = u[Vt] || null;
        if (typeof o == "function") d || Eg(n);
        else if (d) {
          var g = null;
          if (o && o.hasAttribute("formAction")) {
            if (((u = o), (d = o[Vt] || null))) g = d.formAction;
            else if (Tc(u) !== null) continue;
          } else g = d.action;
          (typeof g == "function" ? (n[l + 1] = g) : (n.splice(l, 3), (l -= 3)),
            Eg(n));
        }
      }
  }
  function Ag() {
    function e(o) {
      o.canIntercept &&
        o.info === "react-transition" &&
        o.intercept({
          handler: function () {
            return new Promise(function (d) {
              return (u = d);
            });
          },
          focusReset: "manual",
          scroll: "manual",
        });
    }
    function t() {
      (u !== null && (u(), (u = null)), l || setTimeout(n, 20));
    }
    function n() {
      if (!l && !navigation.transition) {
        var o = navigation.currentEntry;
        o &&
          o.url != null &&
          navigation.navigate(o.url, {
            state: o.getState(),
            info: "react-transition",
            history: "replace",
          });
      }
    }
    if (typeof navigation == "object") {
      var l = !1,
        u = null;
      return (
        navigation.addEventListener("navigate", e),
        navigation.addEventListener("navigatesuccess", t),
        navigation.addEventListener("navigateerror", t),
        setTimeout(n, 100),
        function () {
          ((l = !0),
            navigation.removeEventListener("navigate", e),
            navigation.removeEventListener("navigatesuccess", t),
            navigation.removeEventListener("navigateerror", t),
            u !== null && (u(), (u = null)));
        }
      );
    }
  }
  function Rc(e) {
    this._internalRoot = e;
  }
  ((Yr.prototype.render = Rc.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(s(409));
      var n = t.current,
        l = nn();
      mg(n, l, e, t, null, null);
    }),
    (Yr.prototype.unmount = Rc.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          (mg(e.current, 2, null, e, null, null), br(), (t[Ea] = null));
        }
      }));
  function Yr(e) {
    this._internalRoot = e;
  }
  Yr.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = wu();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < jl.length && t !== 0 && t < jl[n].priority; n++);
      (jl.splice(n, 0, e), n === 0 && bg(e));
    }
  };
  var xg = i.version;
  if (xg !== "19.2.0") throw Error(s(527, xg, "19.2.0"));
  O.findDOMNode = function (e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function"
        ? Error(s(188))
        : ((e = Object.keys(e).join(",")), Error(s(268, e)));
    return (
      (e = v(t)),
      (e = e !== null ? p(e) : null),
      (e = e === null ? null : e.stateNode),
      e
    );
  };
  var Fb = {
    bundleType: 0,
    version: "19.2.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: R,
    reconcilerVersion: "19.2.0",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var qr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!qr.isDisabled && qr.supportsFiber)
      try {
        ((sn = qr.inject(Fb)), (st = qr));
      } catch {}
  }
  return (
    (hu.createRoot = function (e, t) {
      if (!c(e)) throw Error(s(299));
      var n = !1,
        l = "",
        u = Om,
        o = Dm,
        d = zm;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (l = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (u = t.onUncaughtError),
          t.onCaughtError !== void 0 && (o = t.onCaughtError),
          t.onRecoverableError !== void 0 && (d = t.onRecoverableError)),
        (t = fg(e, 1, !1, null, null, n, l, null, u, o, d, Ag)),
        (e[Ea] = t.current),
        rc(e),
        new Rc(t)
      );
    }),
    (hu.hydrateRoot = function (e, t, n) {
      if (!c(e)) throw Error(s(299));
      var l = !1,
        u = "",
        o = Om,
        d = Dm,
        g = zm,
        E = null;
      return (
        n != null &&
          (n.unstable_strictMode === !0 && (l = !0),
          n.identifierPrefix !== void 0 && (u = n.identifierPrefix),
          n.onUncaughtError !== void 0 && (o = n.onUncaughtError),
          n.onCaughtError !== void 0 && (d = n.onCaughtError),
          n.onRecoverableError !== void 0 && (g = n.onRecoverableError),
          n.formState !== void 0 && (E = n.formState)),
        (t = fg(e, 1, !0, t, n ?? null, l, u, E, o, d, g, Ag)),
        (t.context = dg(null)),
        (n = t.current),
        (l = nn()),
        (l = pi(l)),
        (u = Rl(l)),
        (u.callback = null),
        Cl(n, u, l),
        (n = l),
        (t.current.lanes = n),
        Xn(t, n),
        Vn(t),
        (e[Ea] = t.current),
        rc(e),
        new Yr(t)
      );
    }),
    (hu.version = "19.2.0"),
    hu
  );
}
var Ty;
function MA() {
  if (Ty) return qc.exports;
  Ty = 1;
  function a() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (i) {
        console.error(i);
      }
  }
  return (a(), (qc.exports = wA()), qc.exports);
}
var ux = MA();
function rx() {
  return new cf().getContext("screen")?.name ?? null;
}
export {
  jA as A,
  ex as C,
  ax as E,
  kA as F,
  ZA as T,
  zA as a,
  GA as b,
  n0 as c,
  ri as d,
  XA as e,
  QA as f,
  IA as g,
  Mf as h,
  WE as i,
  zn as j,
  lx as k,
  nx as l,
  tx as m,
  uf as n,
  KA as o,
  JA as p,
  FA as q,
  C as r,
  $A as s,
  OA as t,
  DA as u,
  WA as v,
  PA as w,
  ix as x,
  rx as y,
  ux as z,
};
//# sourceMappingURL=vendor.BlA-uXW_.js.map

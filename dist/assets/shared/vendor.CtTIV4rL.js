function L0(a, i) {
  for (var o = 0; o < i.length; o++) {
    const c = i[o];
    if (typeof c != "string" && !Array.isArray(c)) {
      for (const s in c)
        if (s !== "default" && !(s in a)) {
          const d = Object.getOwnPropertyDescriptor(c, s);
          d &&
            Object.defineProperty(
              a,
              s,
              d.get ? d : { enumerable: !0, get: () => c[s] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(a, Symbol.toStringTag, { value: "Module" })
  );
}
function B0(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default")
    ? a.default
    : a;
}
var Es = { exports: {} },
  uu = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var gg;
function H0() {
  if (gg) return uu;
  gg = 1;
  var a = Symbol.for("react.transitional.element"),
    i = Symbol.for("react.fragment");
  function o(c, s, d) {
    var m = null;
    if (
      (d !== void 0 && (m = "" + d),
      s.key !== void 0 && (m = "" + s.key),
      "key" in s)
    ) {
      d = {};
      for (var h in s) h !== "key" && (d[h] = s[h]);
    } else d = s;
    return (
      (s = d.ref),
      { $$typeof: a, type: c, key: m, ref: s !== void 0 ? s : null, props: d }
    );
  }
  return ((uu.Fragment = i), (uu.jsx = o), (uu.jsxs = o), uu);
}
var yg;
function q0() {
  return (yg || ((yg = 1), (Es.exports = H0())), Es.exports);
}
var Dn = q0(),
  As = { exports: {} },
  Re = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var vg;
function Y0() {
  if (vg) return Re;
  vg = 1;
  var a = Symbol.for("react.transitional.element"),
    i = Symbol.for("react.portal"),
    o = Symbol.for("react.fragment"),
    c = Symbol.for("react.strict_mode"),
    s = Symbol.for("react.profiler"),
    d = Symbol.for("react.consumer"),
    m = Symbol.for("react.context"),
    h = Symbol.for("react.forward_ref"),
    v = Symbol.for("react.suspense"),
    y = Symbol.for("react.memo"),
    p = Symbol.for("react.lazy"),
    b = Symbol.for("react.activity"),
    x = Symbol.iterator;
  function _(S) {
    return S === null || typeof S != "object"
      ? null
      : ((S = (x && S[x]) || S["@@iterator"]),
        typeof S == "function" ? S : null);
  }
  var O = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    D = Object.assign,
    k = {};
  function P(S, L, J) {
    ((this.props = S),
      (this.context = L),
      (this.refs = k),
      (this.updater = J || O));
  }
  ((P.prototype.isReactComponent = {}),
    (P.prototype.setState = function (S, L) {
      if (typeof S != "object" && typeof S != "function" && S != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, S, L, "setState");
    }),
    (P.prototype.forceUpdate = function (S) {
      this.updater.enqueueForceUpdate(this, S, "forceUpdate");
    }));
  function G() {}
  G.prototype = P.prototype;
  function q(S, L, J) {
    ((this.props = S),
      (this.context = L),
      (this.refs = k),
      (this.updater = J || O));
  }
  var X = (q.prototype = new G());
  ((X.constructor = q), D(X, P.prototype), (X.isPureReactComponent = !0));
  var ne = Array.isArray;
  function Z() {}
  var W = { H: null, A: null, T: null, S: null },
    $ = Object.prototype.hasOwnProperty;
  function me(S, L, J) {
    var ae = J.ref;
    return {
      $$typeof: a,
      type: S,
      key: L,
      ref: ae !== void 0 ? ae : null,
      props: J,
    };
  }
  function ge(S, L) {
    return me(S.type, L, S.props);
  }
  function se(S) {
    return typeof S == "object" && S !== null && S.$$typeof === a;
  }
  function Q(S) {
    var L = { "=": "=0", ":": "=2" };
    return (
      "$" +
      S.replace(/[=:]/g, function (J) {
        return L[J];
      })
    );
  }
  var B = /\/+/g;
  function te(S, L) {
    return typeof S == "object" && S !== null && S.key != null
      ? Q("" + S.key)
      : L.toString(36);
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
                function (L) {
                  S.status === "pending" &&
                    ((S.status = "fulfilled"), (S.value = L));
                },
                function (L) {
                  S.status === "pending" &&
                    ((S.status = "rejected"), (S.reason = L));
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
  function R(S, L, J, ae, ye) {
    var Y = typeof S;
    (Y === "undefined" || Y === "boolean") && (S = null);
    var le = !1;
    if (S === null) le = !0;
    else
      switch (Y) {
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
              return ((le = S._init), R(le(S._payload), L, J, ae, ye));
          }
      }
    if (le)
      return (
        (ye = ye(S)),
        (le = ae === "" ? "." + te(S, 0) : ae),
        ne(ye)
          ? ((J = ""),
            le != null && (J = le.replace(B, "$&/") + "/"),
            R(ye, L, J, "", function (Te) {
              return Te;
            }))
          : ye != null &&
            (se(ye) &&
              (ye = ge(
                ye,
                J +
                  (ye.key == null || (S && S.key === ye.key)
                    ? ""
                    : ("" + ye.key).replace(B, "$&/") + "/") +
                  le
              )),
            L.push(ye)),
        1
      );
    le = 0;
    var Ae = ae === "" ? "." : ae + ":";
    if (ne(S))
      for (var fe = 0; fe < S.length; fe++)
        ((ae = S[fe]), (Y = Ae + te(ae, fe)), (le += R(ae, L, J, Y, ye)));
    else if (((fe = _(S)), typeof fe == "function"))
      for (S = fe.call(S), fe = 0; !(ae = S.next()).done; )
        ((ae = ae.value), (Y = Ae + te(ae, fe++)), (le += R(ae, L, J, Y, ye)));
    else if (Y === "object") {
      if (typeof S.then == "function") return R(oe(S), L, J, ae, ye);
      throw (
        (L = String(S)),
        Error(
          "Objects are not valid as a React child (found: " +
            (L === "[object Object]"
              ? "object with keys {" + Object.keys(S).join(", ") + "}"
              : L) +
            "). If you meant to render a collection of children, use an array instead."
        )
      );
    }
    return le;
  }
  function w(S, L, J) {
    if (S == null) return S;
    var ae = [],
      ye = 0;
    return (
      R(S, ae, "", "", function (Y) {
        return L.call(J, Y, ye++);
      }),
      ae
    );
  }
  function C(S) {
    if (S._status === -1) {
      var L = S._result;
      ((L = L()),
        L.then(
          function (J) {
            (S._status === 0 || S._status === -1) &&
              ((S._status = 1), (S._result = J));
          },
          function (J) {
            (S._status === 0 || S._status === -1) &&
              ((S._status = 2), (S._result = J));
          }
        ),
        S._status === -1 && ((S._status = 0), (S._result = L)));
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
              var L = new window.ErrorEvent("error", {
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
              if (!window.dispatchEvent(L)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", S);
              return;
            }
            console.error(S);
          },
    ce = {
      map: w,
      forEach: function (S, L, J) {
        w(
          S,
          function () {
            L.apply(this, arguments);
          },
          J
        );
      },
      count: function (S) {
        var L = 0;
        return (
          w(S, function () {
            L++;
          }),
          L
        );
      },
      toArray: function (S) {
        return (
          w(S, function (L) {
            return L;
          }) || []
        );
      },
      only: function (S) {
        if (!se(S))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return S;
      },
    };
  return (
    (Re.Activity = b),
    (Re.Children = ce),
    (Re.Component = P),
    (Re.Fragment = o),
    (Re.Profiler = s),
    (Re.PureComponent = q),
    (Re.StrictMode = c),
    (Re.Suspense = v),
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
    (Re.cloneElement = function (S, L, J) {
      if (S == null)
        throw Error(
          "The argument must be a React element, but you passed " + S + "."
        );
      var ae = D({}, S.props),
        ye = S.key;
      if (L != null)
        for (Y in (L.key !== void 0 && (ye = "" + L.key), L))
          !$.call(L, Y) ||
            Y === "key" ||
            Y === "__self" ||
            Y === "__source" ||
            (Y === "ref" && L.ref === void 0) ||
            (ae[Y] = L[Y]);
      var Y = arguments.length - 2;
      if (Y === 1) ae.children = J;
      else if (1 < Y) {
        for (var le = Array(Y), Ae = 0; Ae < Y; Ae++)
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
        (S.Consumer = { $$typeof: d, _context: S }),
        S
      );
    }),
    (Re.createElement = function (S, L, J) {
      var ae,
        ye = {},
        Y = null;
      if (L != null)
        for (ae in (L.key !== void 0 && (Y = "" + L.key), L))
          $.call(L, ae) &&
            ae !== "key" &&
            ae !== "__self" &&
            ae !== "__source" &&
            (ye[ae] = L[ae]);
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
      return me(S, Y, ye);
    }),
    (Re.createRef = function () {
      return { current: null };
    }),
    (Re.forwardRef = function (S) {
      return { $$typeof: h, render: S };
    }),
    (Re.isValidElement = se),
    (Re.lazy = function (S) {
      return { $$typeof: p, _payload: { _status: -1, _result: S }, _init: C };
    }),
    (Re.memo = function (S, L) {
      return { $$typeof: y, type: S, compare: L === void 0 ? null : L };
    }),
    (Re.startTransition = function (S) {
      var L = W.T,
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
      } catch (Y) {
        ue(Y);
      } finally {
        (L !== null && J.types !== null && (L.types = J.types), (W.T = L));
      }
    }),
    (Re.unstable_useCacheRefresh = function () {
      return W.H.useCacheRefresh();
    }),
    (Re.use = function (S) {
      return W.H.use(S);
    }),
    (Re.useActionState = function (S, L, J) {
      return W.H.useActionState(S, L, J);
    }),
    (Re.useCallback = function (S, L) {
      return W.H.useCallback(S, L);
    }),
    (Re.useContext = function (S) {
      return W.H.useContext(S);
    }),
    (Re.useDebugValue = function () {}),
    (Re.useDeferredValue = function (S, L) {
      return W.H.useDeferredValue(S, L);
    }),
    (Re.useEffect = function (S, L) {
      return W.H.useEffect(S, L);
    }),
    (Re.useEffectEvent = function (S) {
      return W.H.useEffectEvent(S);
    }),
    (Re.useId = function () {
      return W.H.useId();
    }),
    (Re.useImperativeHandle = function (S, L, J) {
      return W.H.useImperativeHandle(S, L, J);
    }),
    (Re.useInsertionEffect = function (S, L) {
      return W.H.useInsertionEffect(S, L);
    }),
    (Re.useLayoutEffect = function (S, L) {
      return W.H.useLayoutEffect(S, L);
    }),
    (Re.useMemo = function (S, L) {
      return W.H.useMemo(S, L);
    }),
    (Re.useOptimistic = function (S, L) {
      return W.H.useOptimistic(S, L);
    }),
    (Re.useReducer = function (S, L, J) {
      return W.H.useReducer(S, L, J);
    }),
    (Re.useRef = function (S) {
      return W.H.useRef(S);
    }),
    (Re.useState = function (S) {
      return W.H.useState(S);
    }),
    (Re.useSyncExternalStore = function (S, L, J) {
      return W.H.useSyncExternalStore(S, L, J);
    }),
    (Re.useTransition = function () {
      return W.H.useTransition();
    }),
    (Re.version = "19.2.0"),
    Re
  );
}
var pg;
function ef() {
  return (pg || ((pg = 1), (As.exports = Y0())), As.exports);
}
var M = ef();
const we = B0(M),
  gy = L0({ __proto__: null, default: we }, [M]);
function yy(a) {
  var i,
    o,
    c = "";
  if (typeof a == "string" || typeof a == "number") c += a;
  else if (typeof a == "object")
    if (Array.isArray(a)) {
      var s = a.length;
      for (i = 0; i < s; i++)
        a[i] && (o = yy(a[i])) && (c && (c += " "), (c += o));
    } else for (o in a) a[o] && (c && (c += " "), (c += o));
  return c;
}
function j0() {
  for (var a, i, o = 0, c = "", s = arguments.length; o < s; o++)
    (a = arguments[o]) && (i = yy(a)) && (c && (c += " "), (c += i));
  return c;
}
const tf = "-",
  G0 = (a) => {
    const i = k0(a),
      { conflictingClassGroups: o, conflictingClassGroupModifiers: c } = a;
    return {
      getClassGroupId: (m) => {
        const h = m.split(tf);
        return (h[0] === "" && h.length !== 1 && h.shift(), vy(h, i) || X0(m));
      },
      getConflictingClassGroupIds: (m, h) => {
        const v = o[m] || [];
        return h && c[m] ? [...v, ...c[m]] : v;
      },
    };
  },
  vy = (a, i) => {
    if (a.length === 0) return i.classGroupId;
    const o = a[0],
      c = i.nextPart.get(o),
      s = c ? vy(a.slice(1), c) : void 0;
    if (s) return s;
    if (i.validators.length === 0) return;
    const d = a.join(tf);
    return i.validators.find(({ validator: m }) => m(d))?.classGroupId;
  },
  bg = /^\[(.+)\]$/,
  X0 = (a) => {
    if (bg.test(a)) {
      const i = bg.exec(a)[1],
        o = i?.substring(0, i.indexOf(":"));
      if (o) return "arbitrary.." + o;
    }
  },
  k0 = (a) => {
    const { theme: i, classGroups: o } = a,
      c = { nextPart: new Map(), validators: [] };
    for (const s in o) Bs(o[s], c, s, i);
    return c;
  },
  Bs = (a, i, o, c) => {
    a.forEach((s) => {
      if (typeof s == "string") {
        const d = s === "" ? i : Sg(i, s);
        d.classGroupId = o;
        return;
      }
      if (typeof s == "function") {
        if (Q0(s)) {
          Bs(s(c), i, o, c);
          return;
        }
        i.validators.push({ validator: s, classGroupId: o });
        return;
      }
      Object.entries(s).forEach(([d, m]) => {
        Bs(m, Sg(i, d), o, c);
      });
    });
  },
  Sg = (a, i) => {
    let o = a;
    return (
      i.split(tf).forEach((c) => {
        (o.nextPart.has(c) ||
          o.nextPart.set(c, { nextPart: new Map(), validators: [] }),
          (o = o.nextPart.get(c)));
      }),
      o
    );
  },
  Q0 = (a) => a.isThemeGetter,
  Z0 = (a) => {
    if (a < 1) return { get: () => {}, set: () => {} };
    let i = 0,
      o = new Map(),
      c = new Map();
    const s = (d, m) => {
      (o.set(d, m), i++, i > a && ((i = 0), (c = o), (o = new Map())));
    };
    return {
      get(d) {
        let m = o.get(d);
        if (m !== void 0) return m;
        if ((m = c.get(d)) !== void 0) return (s(d, m), m);
      },
      set(d, m) {
        o.has(d) ? o.set(d, m) : s(d, m);
      },
    };
  },
  Hs = "!",
  qs = ":",
  K0 = qs.length,
  J0 = (a) => {
    const { prefix: i, experimentalParseClassName: o } = a;
    let c = (s) => {
      const d = [];
      let m = 0,
        h = 0,
        v = 0,
        y;
      for (let O = 0; O < s.length; O++) {
        let D = s[O];
        if (m === 0 && h === 0) {
          if (D === qs) {
            (d.push(s.slice(v, O)), (v = O + K0));
            continue;
          }
          if (D === "/") {
            y = O;
            continue;
          }
        }
        D === "[" ? m++ : D === "]" ? m-- : D === "(" ? h++ : D === ")" && h--;
      }
      const p = d.length === 0 ? s : s.substring(v),
        b = F0(p),
        x = b !== p,
        _ = y && y > v ? y - v : void 0;
      return {
        modifiers: d,
        hasImportantModifier: x,
        baseClassName: b,
        maybePostfixModifierPosition: _,
      };
    };
    if (i) {
      const s = i + qs,
        d = c;
      c = (m) =>
        m.startsWith(s)
          ? d(m.substring(s.length))
          : {
              isExternal: !0,
              modifiers: [],
              hasImportantModifier: !1,
              baseClassName: m,
              maybePostfixModifierPosition: void 0,
            };
    }
    if (o) {
      const s = c;
      c = (d) => o({ className: d, parseClassName: s });
    }
    return c;
  },
  F0 = (a) =>
    a.endsWith(Hs)
      ? a.substring(0, a.length - 1)
      : a.startsWith(Hs)
        ? a.substring(1)
        : a,
  $0 = (a) => {
    const i = Object.fromEntries(a.orderSensitiveModifiers.map((c) => [c, !0]));
    return (c) => {
      if (c.length <= 1) return c;
      const s = [];
      let d = [];
      return (
        c.forEach((m) => {
          m[0] === "[" || i[m] ? (s.push(...d.sort(), m), (d = [])) : d.push(m);
        }),
        s.push(...d.sort()),
        s
      );
    };
  },
  W0 = (a) => ({
    cache: Z0(a.cacheSize),
    parseClassName: J0(a),
    sortModifiers: $0(a),
    ...G0(a),
  }),
  P0 = /\s+/,
  I0 = (a, i) => {
    const {
        parseClassName: o,
        getClassGroupId: c,
        getConflictingClassGroupIds: s,
        sortModifiers: d,
      } = i,
      m = [],
      h = a.trim().split(P0);
    let v = "";
    for (let y = h.length - 1; y >= 0; y -= 1) {
      const p = h[y],
        {
          isExternal: b,
          modifiers: x,
          hasImportantModifier: _,
          baseClassName: O,
          maybePostfixModifierPosition: D,
        } = o(p);
      if (b) {
        v = p + (v.length > 0 ? " " + v : v);
        continue;
      }
      let k = !!D,
        P = c(k ? O.substring(0, D) : O);
      if (!P) {
        if (!k) {
          v = p + (v.length > 0 ? " " + v : v);
          continue;
        }
        if (((P = c(O)), !P)) {
          v = p + (v.length > 0 ? " " + v : v);
          continue;
        }
        k = !1;
      }
      const G = d(x).join(":"),
        q = _ ? G + Hs : G,
        X = q + P;
      if (m.includes(X)) continue;
      m.push(X);
      const ne = s(P, k);
      for (let Z = 0; Z < ne.length; ++Z) {
        const W = ne[Z];
        m.push(q + W);
      }
      v = p + (v.length > 0 ? " " + v : v);
    }
    return v;
  };
function eb() {
  let a = 0,
    i,
    o,
    c = "";
  for (; a < arguments.length; )
    (i = arguments[a++]) && (o = py(i)) && (c && (c += " "), (c += o));
  return c;
}
const py = (a) => {
  if (typeof a == "string") return a;
  let i,
    o = "";
  for (let c = 0; c < a.length; c++)
    a[c] && (i = py(a[c])) && (o && (o += " "), (o += i));
  return o;
};
function tb(a, ...i) {
  let o,
    c,
    s,
    d = m;
  function m(v) {
    const y = i.reduce((p, b) => b(p), a());
    return ((o = W0(y)), (c = o.cache.get), (s = o.cache.set), (d = h), h(v));
  }
  function h(v) {
    const y = c(v);
    if (y) return y;
    const p = I0(v, o);
    return (s(v, p), p);
  }
  return function () {
    return d(eb.apply(null, arguments));
  };
}
const pt = (a) => {
    const i = (o) => o[a] || [];
    return ((i.isThemeGetter = !0), i);
  },
  by = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
  Sy = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
  nb = /^\d+\/\d+$/,
  lb = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  ab =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  ib = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
  ub = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  rb =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  li = (a) => nb.test(a),
  Oe = (a) => !!a && !Number.isNaN(Number(a)),
  Xl = (a) => !!a && Number.isInteger(Number(a)),
  xs = (a) => a.endsWith("%") && Oe(a.slice(0, -1)),
  cl = (a) => lb.test(a),
  ob = () => !0,
  cb = (a) => ab.test(a) && !ib.test(a),
  Ey = () => !1,
  sb = (a) => ub.test(a),
  fb = (a) => rb.test(a),
  db = (a) => !pe(a) && !be(a),
  mb = (a) => oi(a, Ty, Ey),
  pe = (a) => by.test(a),
  ma = (a) => oi(a, _y, cb),
  Ts = (a) => oi(a, pb, Oe),
  Eg = (a) => oi(a, Ay, Ey),
  hb = (a) => oi(a, xy, fb),
  Br = (a) => oi(a, Ry, sb),
  be = (a) => Sy.test(a),
  ru = (a) => ci(a, _y),
  gb = (a) => ci(a, bb),
  Ag = (a) => ci(a, Ay),
  yb = (a) => ci(a, Ty),
  vb = (a) => ci(a, xy),
  Hr = (a) => ci(a, Ry, !0),
  oi = (a, i, o) => {
    const c = by.exec(a);
    return c ? (c[1] ? i(c[1]) : o(c[2])) : !1;
  },
  ci = (a, i, o = !1) => {
    const c = Sy.exec(a);
    return c ? (c[1] ? i(c[1]) : o) : !1;
  },
  Ay = (a) => a === "position" || a === "percentage",
  xy = (a) => a === "image" || a === "url",
  Ty = (a) => a === "length" || a === "size" || a === "bg-size",
  _y = (a) => a === "length",
  pb = (a) => a === "number",
  bb = (a) => a === "family-name",
  Ry = (a) => a === "shadow",
  Sb = () => {
    const a = pt("color"),
      i = pt("font"),
      o = pt("text"),
      c = pt("font-weight"),
      s = pt("tracking"),
      d = pt("leading"),
      m = pt("breakpoint"),
      h = pt("container"),
      v = pt("spacing"),
      y = pt("radius"),
      p = pt("shadow"),
      b = pt("inset-shadow"),
      x = pt("text-shadow"),
      _ = pt("drop-shadow"),
      O = pt("blur"),
      D = pt("perspective"),
      k = pt("aspect"),
      P = pt("ease"),
      G = pt("animate"),
      q = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      X = () => [
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
      ne = () => [...X(), be, pe],
      Z = () => ["auto", "hidden", "clip", "visible", "scroll"],
      W = () => ["auto", "contain", "none"],
      $ = () => [be, pe, v],
      me = () => [li, "full", "auto", ...$()],
      ge = () => [Xl, "none", "subgrid", be, pe],
      se = () => ["auto", { span: ["full", Xl, be, pe] }, Xl, be, pe],
      Q = () => [Xl, "auto", be, pe],
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
      w = () => [
        li,
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
      C = () => [a, be, pe],
      ue = () => [...X(), Ag, Eg, { position: [be, pe] }],
      ce = () => ["no-repeat", { repeat: ["", "x", "y", "space", "round"] }],
      S = () => ["auto", "cover", "contain", yb, mb, { size: [be, pe] }],
      L = () => [xs, ru, ma],
      J = () => ["", "none", "full", y, be, pe],
      ae = () => ["", Oe, ru, ma],
      ye = () => ["solid", "dashed", "dotted", "double"],
      Y = () => [
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
      le = () => [Oe, xs, Ag, Eg],
      Ae = () => ["", "none", O, be, pe],
      fe = () => ["none", Oe, be, pe],
      Te = () => ["none", Oe, be, pe],
      Ye = () => [Oe, be, pe],
      qe = () => [li, "full", ...$()];
    return {
      cacheSize: 500,
      theme: {
        animate: ["spin", "ping", "pulse", "bounce"],
        aspect: ["video"],
        blur: [cl],
        breakpoint: [cl],
        color: [ob],
        container: [cl],
        "drop-shadow": [cl],
        ease: ["in", "out", "in-out"],
        font: [db],
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
        "inset-shadow": [cl],
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
        perspective: [
          "dramatic",
          "near",
          "normal",
          "midrange",
          "distant",
          "none",
        ],
        radius: [cl],
        shadow: [cl],
        spacing: ["px", Oe],
        text: [cl],
        "text-shadow": [cl],
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"],
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", li, pe, be, k] }],
        container: ["container"],
        columns: [{ columns: [Oe, pe, be, h] }],
        "break-after": [{ "break-after": q() }],
        "break-before": [{ "break-before": q() }],
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
        z: [{ z: [Xl, "auto", be, pe] }],
        basis: [{ basis: [li, "full", "auto", h, ...$()] }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["nowrap", "wrap", "wrap-reverse"] }],
        flex: [{ flex: [Oe, li, "auto", "initial", "none", pe] }],
        grow: [{ grow: ["", Oe, be, pe] }],
        shrink: [{ shrink: ["", Oe, be, pe] }],
        order: [{ order: [Xl, "first", "last", "none", be, pe] }],
        "grid-cols": [{ "grid-cols": ge() }],
        "col-start-end": [{ col: se() }],
        "col-start": [{ "col-start": Q() }],
        "col-end": [{ "col-end": Q() }],
        "grid-rows": [{ "grid-rows": ge() }],
        "row-start-end": [{ row: se() }],
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
        size: [{ size: w() }],
        w: [{ w: [h, "screen", ...w()] }],
        "min-w": [{ "min-w": [h, "screen", "none", ...w()] }],
        "max-w": [
          { "max-w": [h, "screen", "none", "prose", { screen: [m] }, ...w()] },
        ],
        h: [{ h: ["screen", "lh", ...w()] }],
        "min-h": [{ "min-h": ["screen", "lh", "none", ...w()] }],
        "max-h": [{ "max-h": ["screen", "lh", ...w()] }],
        "font-size": [{ text: ["base", o, ru, ma] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [{ font: [c, be, Ts] }],
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
              xs,
              pe,
            ],
          },
        ],
        "font-family": [{ font: [gb, pe, i] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        tracking: [{ tracking: [s, be, pe] }],
        "line-clamp": [{ "line-clamp": [Oe, "none", be, Ts] }],
        leading: [{ leading: [d, ...$()] }],
        "list-image": [{ "list-image": ["none", be, pe] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "list-style-type": [{ list: ["disc", "decimal", "none", be, pe] }],
        "text-alignment": [
          { text: ["left", "center", "right", "justify", "start", "end"] },
        ],
        "placeholder-color": [{ placeholder: C() }],
        "text-color": [{ text: C() }],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        "text-decoration-style": [{ decoration: [...ye(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: [Oe, "from-font", "auto", be, ma] },
        ],
        "text-decoration-color": [{ decoration: C() }],
        "underline-offset": [{ "underline-offset": [Oe, "auto", be, pe] }],
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
        "bg-repeat": [{ bg: ce() }],
        "bg-size": [{ bg: S() }],
        "bg-image": [
          {
            bg: [
              "none",
              {
                linear: [
                  { to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
                  Xl,
                  be,
                  pe,
                ],
                radial: ["", be, pe],
                conic: [Xl, be, pe],
              },
              vb,
              hb,
            ],
          },
        ],
        "bg-color": [{ bg: C() }],
        "gradient-from-pos": [{ from: L() }],
        "gradient-via-pos": [{ via: L() }],
        "gradient-to-pos": [{ to: L() }],
        "gradient-from": [{ from: C() }],
        "gradient-via": [{ via: C() }],
        "gradient-to": [{ to: C() }],
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
        "border-color": [{ border: C() }],
        "border-color-x": [{ "border-x": C() }],
        "border-color-y": [{ "border-y": C() }],
        "border-color-s": [{ "border-s": C() }],
        "border-color-e": [{ "border-e": C() }],
        "border-color-t": [{ "border-t": C() }],
        "border-color-r": [{ "border-r": C() }],
        "border-color-b": [{ "border-b": C() }],
        "border-color-l": [{ "border-l": C() }],
        "divide-color": [{ divide: C() }],
        "outline-style": [{ outline: [...ye(), "none", "hidden"] }],
        "outline-offset": [{ "outline-offset": [Oe, be, pe] }],
        "outline-w": [{ outline: ["", Oe, ru, ma] }],
        "outline-color": [{ outline: C() }],
        shadow: [{ shadow: ["", "none", p, Hr, Br] }],
        "shadow-color": [{ shadow: C() }],
        "inset-shadow": [{ "inset-shadow": ["none", b, Hr, Br] }],
        "inset-shadow-color": [{ "inset-shadow": C() }],
        "ring-w": [{ ring: ae() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: C() }],
        "ring-offset-w": [{ "ring-offset": [Oe, ma] }],
        "ring-offset-color": [{ "ring-offset": C() }],
        "inset-ring-w": [{ "inset-ring": ae() }],
        "inset-ring-color": [{ "inset-ring": C() }],
        "text-shadow": [{ "text-shadow": ["none", x, Hr, Br] }],
        "text-shadow-color": [{ "text-shadow": C() }],
        opacity: [{ opacity: [Oe, be, pe] }],
        "mix-blend": [{ "mix-blend": [...Y(), "plus-darker", "plus-lighter"] }],
        "bg-blend": [{ "bg-blend": Y() }],
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
        "mask-image-linear-pos": [{ "mask-linear": [Oe] }],
        "mask-image-linear-from-pos": [{ "mask-linear-from": le() }],
        "mask-image-linear-to-pos": [{ "mask-linear-to": le() }],
        "mask-image-linear-from-color": [{ "mask-linear-from": C() }],
        "mask-image-linear-to-color": [{ "mask-linear-to": C() }],
        "mask-image-t-from-pos": [{ "mask-t-from": le() }],
        "mask-image-t-to-pos": [{ "mask-t-to": le() }],
        "mask-image-t-from-color": [{ "mask-t-from": C() }],
        "mask-image-t-to-color": [{ "mask-t-to": C() }],
        "mask-image-r-from-pos": [{ "mask-r-from": le() }],
        "mask-image-r-to-pos": [{ "mask-r-to": le() }],
        "mask-image-r-from-color": [{ "mask-r-from": C() }],
        "mask-image-r-to-color": [{ "mask-r-to": C() }],
        "mask-image-b-from-pos": [{ "mask-b-from": le() }],
        "mask-image-b-to-pos": [{ "mask-b-to": le() }],
        "mask-image-b-from-color": [{ "mask-b-from": C() }],
        "mask-image-b-to-color": [{ "mask-b-to": C() }],
        "mask-image-l-from-pos": [{ "mask-l-from": le() }],
        "mask-image-l-to-pos": [{ "mask-l-to": le() }],
        "mask-image-l-from-color": [{ "mask-l-from": C() }],
        "mask-image-l-to-color": [{ "mask-l-to": C() }],
        "mask-image-x-from-pos": [{ "mask-x-from": le() }],
        "mask-image-x-to-pos": [{ "mask-x-to": le() }],
        "mask-image-x-from-color": [{ "mask-x-from": C() }],
        "mask-image-x-to-color": [{ "mask-x-to": C() }],
        "mask-image-y-from-pos": [{ "mask-y-from": le() }],
        "mask-image-y-to-pos": [{ "mask-y-to": le() }],
        "mask-image-y-from-color": [{ "mask-y-from": C() }],
        "mask-image-y-to-color": [{ "mask-y-to": C() }],
        "mask-image-radial": [{ "mask-radial": [be, pe] }],
        "mask-image-radial-from-pos": [{ "mask-radial-from": le() }],
        "mask-image-radial-to-pos": [{ "mask-radial-to": le() }],
        "mask-image-radial-from-color": [{ "mask-radial-from": C() }],
        "mask-image-radial-to-color": [{ "mask-radial-to": C() }],
        "mask-image-radial-shape": [{ "mask-radial": ["circle", "ellipse"] }],
        "mask-image-radial-size": [
          {
            "mask-radial": [
              { closest: ["side", "corner"], farthest: ["side", "corner"] },
            ],
          },
        ],
        "mask-image-radial-pos": [{ "mask-radial-at": X() }],
        "mask-image-conic-pos": [{ "mask-conic": [Oe] }],
        "mask-image-conic-from-pos": [{ "mask-conic-from": le() }],
        "mask-image-conic-to-pos": [{ "mask-conic-to": le() }],
        "mask-image-conic-from-color": [{ "mask-conic-from": C() }],
        "mask-image-conic-to-color": [{ "mask-conic-to": C() }],
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
        "mask-repeat": [{ mask: ce() }],
        "mask-size": [{ mask: S() }],
        "mask-type": [{ "mask-type": ["alpha", "luminance"] }],
        "mask-image": [{ mask: ["none", be, pe] }],
        filter: [{ filter: ["", "none", be, pe] }],
        blur: [{ blur: Ae() }],
        brightness: [{ brightness: [Oe, be, pe] }],
        contrast: [{ contrast: [Oe, be, pe] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", _, Hr, Br] }],
        "drop-shadow-color": [{ "drop-shadow": C() }],
        grayscale: [{ grayscale: ["", Oe, be, pe] }],
        "hue-rotate": [{ "hue-rotate": [Oe, be, pe] }],
        invert: [{ invert: ["", Oe, be, pe] }],
        saturate: [{ saturate: [Oe, be, pe] }],
        sepia: [{ sepia: ["", Oe, be, pe] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none", be, pe] }],
        "backdrop-blur": [{ "backdrop-blur": Ae() }],
        "backdrop-brightness": [{ "backdrop-brightness": [Oe, be, pe] }],
        "backdrop-contrast": [{ "backdrop-contrast": [Oe, be, pe] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": ["", Oe, be, pe] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [Oe, be, pe] }],
        "backdrop-invert": [{ "backdrop-invert": ["", Oe, be, pe] }],
        "backdrop-opacity": [{ "backdrop-opacity": [Oe, be, pe] }],
        "backdrop-saturate": [{ "backdrop-saturate": [Oe, be, pe] }],
        "backdrop-sepia": [{ "backdrop-sepia": ["", Oe, be, pe] }],
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
        duration: [{ duration: [Oe, "initial", be, pe] }],
        ease: [{ ease: ["linear", "initial", P, be, pe] }],
        delay: [{ delay: [Oe, be, pe] }],
        animate: [{ animate: ["none", G, be, pe] }],
        backface: [{ backface: ["hidden", "visible"] }],
        perspective: [{ perspective: [D, be, pe] }],
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
        skew: [{ skew: Ye() }],
        "skew-x": [{ "skew-x": Ye() }],
        "skew-y": [{ "skew-y": Ye() }],
        transform: [{ transform: [be, pe, "", "none", "gpu", "cpu"] }],
        "transform-origin": [{ origin: ne() }],
        "transform-style": [{ transform: ["3d", "flat"] }],
        translate: [{ translate: qe() }],
        "translate-x": [{ "translate-x": qe() }],
        "translate-y": [{ "translate-y": qe() }],
        "translate-z": [{ "translate-z": qe() }],
        "translate-none": ["translate-none"],
        accent: [{ accent: C() }],
        appearance: [{ appearance: ["none", "auto"] }],
        "caret-color": [{ caret: C() }],
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
        fill: [{ fill: ["none", ...C()] }],
        "stroke-w": [{ stroke: [Oe, ru, ma, Ts] }],
        stroke: [{ stroke: ["none", ...C()] }],
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
  fA = tb(Sb),
  xg = (a) => (typeof a == "boolean" ? `${a}` : a === 0 ? "0" : a),
  Tg = j0,
  dA = (a, i) => (o) => {
    var c;
    if (i?.variants == null) return Tg(a, o?.class, o?.className);
    const { variants: s, defaultVariants: d } = i,
      m = Object.keys(s).map((y) => {
        const p = o?.[y],
          b = d?.[y];
        if (p === null) return null;
        const x = xg(p) || xg(b);
        return s[y][x];
      }),
      h =
        o &&
        Object.entries(o).reduce((y, p) => {
          let [b, x] = p;
          return (x === void 0 || (y[b] = x), y);
        }, {}),
      v =
        i == null || (c = i.compoundVariants) === null || c === void 0
          ? void 0
          : c.reduce((y, p) => {
              let { class: b, className: x, ..._ } = p;
              return Object.entries(_).every((O) => {
                let [D, k] = O;
                return Array.isArray(k)
                  ? k.includes({ ...d, ...h }[D])
                  : { ...d, ...h }[D] === k;
              })
                ? [...y, b, x]
                : y;
            }, []);
    return Tg(a, m, v, o?.class, o?.className);
  },
  Eb = { LOGIN_PASSWORD: "login-password" };
let Ab = class Ys {
    settings;
    themes;
    constructor(i) {
      ((this.settings = Ys.getSettings(i)), (this.themes = Ys.getThemes(i)));
    }
    static getSettings(i) {
      if (!i?.settings) return null;
      const { colors: o, favicon_url: c, logo_url: s, font: d } = i.settings;
      return {
        ...(o && {
          colors: {
            primary: o.primary,
            pageBackground:
              typeof o.page_background == "string"
                ? o.page_background
                : o.page_background && {
                    type: o.page_background.type,
                    start: o.page_background.start,
                    end: o.page_background.end,
                    angleDegree: o.page_background.angle_deg,
                  },
          },
        }),
        ...(typeof c == "string" && c.length > 0 ? { faviconUrl: c } : {}),
        ...(typeof s == "string" && s.length > 0 ? { logoUrl: s } : {}),
        ...(typeof d?.url == "string" && d.url.length > 0
          ? { fontUrl: d.url }
          : {}),
      };
    }
    static getThemes(i) {
      if (!i?.themes) return null;
      const {
        default: {
          borders: o = {},
          colors: c = {},
          displayName: s = "",
          fonts: d = {},
          page_background: m = {},
          widget: h = {},
        } = {},
      } = i.themes;
      return {
        default: {
          borders: o,
          colors: c,
          displayName: s,
          fonts: d,
          pageBackground: m,
          widget: h,
        },
      };
    }
  },
  xb = class {
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
  Tb = class {
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
  _b = class {
    name;
    constructor(i) {
      this.name = i.name;
    }
  },
  js = class Gs {
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
        (this.data = Gs.getScreenData(i)),
        (this.links = Gs.getScreenLinks(i)));
    }
    static getScreenData(i) {
      return i.data ?? null;
    }
    static getScreenLinks(i) {
      return i.links ?? null;
    }
  },
  Rb = class {
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
  My = class Gr {
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
        (this.errors = Gr.getErrors(i)),
        (this.currentConnection = Gr.getCurrentConnection(i)),
        (this.alternateConnections = Gr.getAlternateConnections(i)));
    }
    static getErrors(i) {
      return i.errors && i.errors.length !== 0
        ? i.errors.map((o) => ({
            code: o.code,
            field: o.field,
            message: o.message,
          }))
        : null;
    }
    static getCurrentConnection(i) {
      if (!i?.connection) return null;
      const { name: o, strategy: c, metadata: s } = i.connection;
      return { name: o, strategy: c, metadata: s };
    }
    static getAlternateConnections(i) {
      const o = i?.alternate_connections;
      return o && Array.isArray(o)
        ? o.map((c) => {
            const { name: s, strategy: d, metadata: m } = c,
              h = { name: s, strategy: d, metadata: m };
            if ("options" in c) {
              const {
                icon_url: v,
                display_name: y,
                show_as_button: p,
              } = c.options;
              return {
                ...h,
                options: { iconUrl: v, displayName: y, showAsButton: p },
              };
            }
            return h;
          })
        : null;
    }
  },
  Mb = class Xs {
    submittedFormData;
    authorizationParams;
    constructor(i) {
      ((this.submittedFormData = Xs.getSubmittedFormData(i)),
        (this.authorizationParams = Xs.getAuthorizationParams(i)));
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
  Cb = class Cy {
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
        (this.organizations = Cy.getOrganizations(i)));
    }
    static getOrganizations(i) {
      return i?.organizations && Array.isArray(i?.organizations)
        ? i?.organizations.map((o) => ({
            organizationId: o.id,
            organizationName: o.name,
            displayName: o.display_name,
            branding: { logoUrl: o.branding?.logo_url },
          }))
        : null;
    }
  },
  Oy = class kl {
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
      if (!kl.context) {
        const c = window;
        kl.context = c.universal_login_context ?? null;
      }
      const i = kl.context,
        o = new.target?.screenIdentifier;
      if (!i)
        throw new Error(
          "Universal Login Context is not available on the global window object."
        );
      if (o !== i?.screen?.name && o !== "")
        throw new Error(
          `Incorrect import: The current screen name does not match the imported screen class. Imported Screen: ${o}, Current Screen: ${i?.screen?.name}`
        );
      ((this.branding = new Ab(i.branding)),
        (this.screen = new js(i.screen)),
        (this.tenant = new Rb(i.tenant)),
        (this.prompt = new _b(i.prompt)),
        (this.organization = new Tb(i.organization)),
        (this.client = new xb(i.client)),
        (this.transaction = new My(i.transaction)),
        (this.user = new Cb(i.user)),
        (this.untrustedData = new Mb(i.untrusted_data)));
    }
    getContext(i) {
      if (!kl.context) {
        const o = window;
        kl.context = o.universal_login_context ?? null;
      }
      if (kl.context) return kl.context[i];
    }
    getErrors() {
      return this.transaction?.errors ?? [];
    }
  };
async function Ob() {
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
function wy() {
  return window.PublicKeyCredential !== void 0;
}
async function zy() {
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
async function wb() {
  if (!wy()) return !1;
  try {
    return (
      (await zy()) &&
      !!(await window.PublicKeyCredential.isConditionalMediationAvailable())
    );
  } catch (a) {
    return (console.warn("isPasskeySupported failed", a), !1);
  }
}
async function zb() {
  return {
    "js-available": !0,
    "is-brave": await Ob(),
    "webauthn-available": wy(),
    "webauthn-platform-available": await zy(),
    "allow-passkeys": await wb(),
  };
}
let _g = class {
  options;
  constructor(i) {
    this.options = i;
  }
  async submitData(i) {
    const o = { ...i, state: this.options.state },
      c = this.buildForm(o);
    (document.body.appendChild(c), c.submit());
  }
  buildForm(i) {
    const o = document.createElement("form");
    return (
      (o.method = "POST"),
      (o.action = this.options.route ?? ""),
      Object.entries(i).forEach(([c, s]) => {
        const d = document.createElement("input");
        ((d.type = "hidden"),
          (d.name = c),
          (d.value = String(s ?? "")),
          o.appendChild(d));
      }),
      this.addTelemetryField(o),
      o
    );
  }
  addTelemetryField(i) {
    const o = document.createElement("input"),
      c = globalThis.__ACUL_SDK_NAME__ || "@auth0/auth0-acul-js",
      s = globalThis.__ACUL_SDK_VERSION__ || "1.0.0-alpha.1";
    return (
      (o.type = "hidden"),
      (o.name = "acul-sdk"),
      (o.value = `${c}@${s}`),
      i.appendChild(o),
      i
    );
  }
};
function Db(a) {
  return a?.links?.signup ?? null;
}
function Ub(a) {
  return a?.links?.reset_password ?? null;
}
function Nb(a) {
  return a?.links?.edit_identifier ?? null;
}
class Vb extends js {
  signupLink;
  resetPasswordLink;
  editIdentifierLink;
  data;
  constructor(i) {
    (super(i),
      (this.signupLink = Db(i)),
      (this.resetPasswordLink = Ub(i)),
      (this.editIdentifierLink = Nb(i)),
      (this.data = js.getScreenData(i)));
  }
}
function Lb(a) {
  return a?.connection?.options?.signup_enabled === !0;
}
function Bb(a) {
  return a?.connection?.options?.forgot_password_enabled === !0;
}
function Hb(a) {
  return a?.connection?.options?.authentication_methods?.passkey?.enabled ?? !1;
}
function qb(a) {
  const i = a?.connection,
    { signup_status: o, validation: c } =
      i?.options?.attributes?.username ?? {};
  if (c)
    return {
      isActive: ["optional", "required"].includes(o),
      maxLength: c.max_length,
      minLength: c.min_length,
      allowedFormats: {
        usernameInEmailFormat: c.allowed_types?.email ?? !1,
        usernameInPhoneFormat: c.allowed_types?.phone_number ?? !1,
      },
    };
  const { validation: s, username_required: d } = i?.options ?? {},
    m = s?.username;
  return m
    ? { isActive: d === !0, maxLength: m.max_length, minLength: m.min_length }
    : null;
}
function Yb(a) {
  const i = a?.connection,
    o = i?.options?.authentication_methods?.password;
  return o
    ? {
        minLength: o.min_length,
        policy: o.policy,
        passwordSecurityInfo: o.password_security_info?.map((c) =>
          c.status === "valid" ? { ...c, isValid: !0 } : { ...c, isValid: !1 }
        ),
      }
    : null;
}
function jb(a) {
  const i = a?.connection;
  if (!i) return null;
  const { attributes: o, username_required: c } = i.options || {};
  return o && Object.keys(o).length > 0
    ? Gb(i, ["required", "optional"])
    : c
      ? ["email", "username"]
      : ["email"];
}
function Gb(a, i) {
  if (!a) return null;
  const { attributes: o, username_required: c } = a.options || {};
  if (!o || Object.keys(o).length === 0)
    return c ? ["email", "username"] : ["email"];
  const s = Object.entries(o)
    .filter(([, d]) => d.signup_status && i.includes(d.signup_status))
    .map(([d]) => d);
  return s.length > 0 ? s : null;
}
class Xb extends My {
  constructor(i) {
    (super(i),
      (this.isSignupEnabled = Lb(i)),
      (this.isForgotPasswordEnabled = Bb(i)),
      (this.isPasskeyEnabled = Hb(i)),
      (this.getPasswordPolicy = () => Yb(i)),
      (this.getUsernamePolicy = () => qb(i)),
      (this.getAllowedIdentifiers = () => jb(i)));
  }
  isSignupEnabled;
  isForgotPasswordEnabled;
  isPasskeyEnabled;
  getPasswordPolicy;
  getUsernamePolicy;
  getAllowedIdentifiers;
}
class ks extends Oy {
  static screenIdentifier = Eb.LOGIN_PASSWORD;
  screen;
  transaction;
  constructor() {
    super();
    const i = this.getContext("screen"),
      o = this.getContext("transaction");
    ((this.screen = new Vb(i)), (this.transaction = new Xb(o)));
  }
  async login(i) {
    const o = {
        state: this.transaction.state,
        telemetry: [ks.screenIdentifier, "login"],
      },
      c = await zb();
    await new _g(o).submitData({ ...i, ...c });
  }
  async federatedLogin(i) {
    const o = {
      state: this.transaction.state,
      telemetry: [ks.screenIdentifier, "federatedLogin"],
    };
    await new _g(o).submitData(i);
  }
}
function Dy({ controlled: a, default: i, name: o, state: c = "value" }) {
  const { current: s } = M.useRef(a !== void 0),
    [d, m] = M.useState(i),
    h = s ? a : d,
    v = M.useCallback((y) => {
      s || m(y);
    }, []);
  return [h, v];
}
const Rg = {};
function si(a, i) {
  const o = M.useRef(Rg);
  return (o.current === Rg && (o.current = a(i)), o);
}
const _s = gy[`useInsertionEffect${Math.random().toFixed(1)}`.slice(0, -3)],
  kb = _s && _s !== M.useLayoutEffect ? _s : (a) => a();
function Ze(a) {
  const i = si(Qb).current;
  return ((i.next = a), kb(i.effect), i.trampoline);
}
function Qb() {
  const a = {
    next: void 0,
    callback: Zb,
    trampoline: (...i) => a.callback?.(...i),
    effect: () => {
      a.callback = a.next;
    },
  };
  return a;
}
function Zb() {}
const Kb = () => {},
  nt = typeof document < "u" ? M.useLayoutEffect : Kb;
function On() {}
const Ql = Object.freeze({}),
  Jb = { style: { transition: "none" } },
  Fb = { fallbackAxisSide: "end" },
  $b = M.createContext(void 0);
function Wb(a = !0) {
  const i = M.useContext($b);
  if (i === void 0 && !a)
    throw new Error("Base UI: DirectionContext is missing.");
  return i?.direction ?? "ltr";
}
function Mg(a, i, o, c) {
  const s = si(Uy).current;
  return (Ib(s, a, i, o, c) && Ny(s, [a, i, o, c]), s.callback);
}
function Pb(a) {
  const i = si(Uy).current;
  return (e1(i, a) && Ny(i, a), i.callback);
}
function Uy() {
  return { callback: null, cleanup: null, refs: [] };
}
function Ib(a, i, o, c, s) {
  return (
    a.refs[0] !== i || a.refs[1] !== o || a.refs[2] !== c || a.refs[3] !== s
  );
}
function e1(a, i) {
  return a.refs.length !== i.length || a.refs.some((o, c) => o !== i[c]);
}
function Ny(a, i) {
  if (((a.refs = i), i.every((o) => o == null))) {
    a.callback = null;
    return;
  }
  a.callback = (o) => {
    if ((a.cleanup && (a.cleanup(), (a.cleanup = null)), o != null)) {
      const c = Array(i.length).fill(null);
      for (let s = 0; s < i.length; s += 1) {
        const d = i[s];
        if (d != null)
          switch (typeof d) {
            case "function": {
              const m = d(o);
              typeof m == "function" && (c[s] = m);
              break;
            }
            case "object": {
              d.current = o;
              break;
            }
          }
      }
      a.cleanup = () => {
        for (let s = 0; s < i.length; s += 1) {
          const d = i[s];
          if (d != null)
            switch (typeof d) {
              case "function": {
                const m = c[s];
                typeof m == "function" ? m() : d(null);
                break;
              }
              case "object": {
                d.current = null;
                break;
              }
            }
        }
      };
    }
  };
}
const t1 = parseInt(M.version, 10);
function n1(a) {
  return t1 >= a;
}
function Vy(a, i) {
  if (a && !i) return a;
  if (!a && i) return i;
  if (a || i) return { ...a, ...i };
}
function l1(a, i) {
  const o = {};
  for (const c in a) {
    const s = a[c];
    if (i?.hasOwnProperty(c)) {
      const d = i[c](s);
      d != null && Object.assign(o, d);
      continue;
    }
    s === !0
      ? (o[`data-${c.toLowerCase()}`] = "")
      : s && (o[`data-${c.toLowerCase()}`] = s.toString());
  }
  return o;
}
function a1(a, i) {
  return typeof a == "function" ? a(i) : a;
}
const fu = {};
function Qs(a, i, o, c, s) {
  let d = { ...Zs(a, fu) };
  return (i && (d = Ly(d, i)), d);
}
function i1(a) {
  if (a.length === 0) return fu;
  if (a.length === 1) return Zs(a[0], fu);
  let i = { ...Zs(a[0], fu) };
  for (let o = 1; o < a.length; o += 1) i = Ly(i, a[o]);
  return i;
}
function Ly(a, i) {
  return By(i) ? i(a) : u1(a, i);
}
function u1(a, i) {
  if (!i) return a;
  for (const o in i) {
    const c = i[o];
    switch (o) {
      case "style": {
        a[o] = Vy(a.style, c);
        break;
      }
      case "className": {
        a[o] = Hy(a.className, c);
        break;
      }
      default:
        r1(o, c) ? (a[o] = o1(a[o], c)) : (a[o] = c);
    }
  }
  return a;
}
function r1(a, i) {
  const o = a.charCodeAt(0),
    c = a.charCodeAt(1),
    s = a.charCodeAt(2);
  return (
    o === 111 &&
    c === 110 &&
    s >= 65 &&
    s <= 90 &&
    (typeof i == "function" || typeof i > "u")
  );
}
function By(a) {
  return typeof a == "function";
}
function Zs(a, i) {
  return By(a) ? a(i) : (a ?? fu);
}
function o1(a, i) {
  return i
    ? a
      ? (o) => {
          if (s1(o)) {
            const s = o;
            c1(s);
            const d = i(s);
            return (s.baseUIHandlerPrevented || a?.(s), d);
          }
          const c = i(o);
          return (a?.(o), c);
        }
      : i
    : a;
}
function c1(a) {
  return (
    (a.preventBaseUIHandler = () => {
      a.baseUIHandlerPrevented = !0;
    }),
    a
  );
}
function Hy(a, i) {
  return i ? (a ? i + " " + a : i) : a;
}
function s1(a) {
  return a != null && typeof a == "object" && "nativeEvent" in a;
}
function Yn(a, i, o = {}) {
  const c = i.render,
    s = f1(i, o);
  if (o.enabled === !1) return null;
  const d = o.state ?? Ql;
  return d1(a, c, s, d);
}
function f1(a, i = {}) {
  const { className: o, render: c } = a,
    {
      state: s = Ql,
      ref: d,
      props: m,
      stateAttributesMapping: h,
      enabled: v = !0,
    } = i,
    y = v ? a1(o, s) : void 0,
    p = v ? l1(s, h) : Ql,
    b = v ? (Vy(p, Array.isArray(m) ? i1(m) : m) ?? Ql) : Ql;
  return (
    typeof document < "u" &&
      (v
        ? Array.isArray(d)
          ? (b.ref = Pb([b.ref, Cg(c), ...d]))
          : (b.ref = Mg(b.ref, Cg(c), d))
        : Mg(null, null)),
    v ? (y !== void 0 && (b.className = Hy(b.className, y)), b) : Ql
  );
}
function d1(a, i, o, c) {
  if (i) {
    if (typeof i == "function") return i(o, c);
    const s = Qs(o, i.props);
    return ((s.ref = o.ref), M.cloneElement(i, s));
  }
  if (a && typeof a == "string") return m1(a, o);
  throw new Error("Base UI: Render element or function are not defined.");
}
function m1(a, i) {
  return a === "button"
    ? Dn.jsx("button", { type: "button", ...i })
    : a === "img"
      ? Dn.jsx("img", { alt: "", ...i })
      : M.createElement(a, i);
}
function Cg(a) {
  return a && typeof a != "function" ? (n1(19) ? a.props.ref : a.ref) : null;
}
function wt(a, i, o) {
  let c = !1,
    s = !1;
  const d = Ql;
  return {
    reason: a,
    event: i ?? new Event("base-ui"),
    cancel() {
      c = !0;
    },
    allowPropagation() {
      s = !0;
    },
    get isCanceled() {
      return c;
    },
    get isPropagationAllowed() {
      return s;
    },
    ...d,
  };
}
const h1 = { ...gy };
let Og = 0;
function g1(a, i = "mui") {
  const [o, c] = M.useState(a),
    s = a || o;
  return (
    M.useEffect(() => {
      o == null && ((Og += 1), c(`${i}-${Og}`));
    }, [o, i]),
    s
  );
}
const wg = h1.useId;
function nf(a, i) {
  if (wg !== void 0) {
    const o = wg();
    return a ?? (i ? `${i}-${o}` : o);
  }
  return g1(a, i);
}
function qy(a) {
  return nf(a, "base-ui");
}
var Rs = { exports: {} },
  Ot = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var zg;
function y1() {
  if (zg) return Ot;
  zg = 1;
  var a = ef();
  function i(v) {
    var y = "https://react.dev/errors/" + v;
    if (1 < arguments.length) {
      y += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var p = 2; p < arguments.length; p++)
        y += "&args[]=" + encodeURIComponent(arguments[p]);
    }
    return (
      "Minified React error #" +
      v +
      "; visit " +
      y +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function o() {}
  var c = {
      d: {
        f: o,
        r: function () {
          throw Error(i(522));
        },
        D: o,
        C: o,
        L: o,
        m: o,
        X: o,
        S: o,
        M: o,
      },
      p: 0,
      findDOMNode: null,
    },
    s = Symbol.for("react.portal");
  function d(v, y, p) {
    var b =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: s,
      key: b == null ? null : "" + b,
      children: v,
      containerInfo: y,
      implementation: p,
    };
  }
  var m = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function h(v, y) {
    if (v === "font") return "";
    if (typeof y == "string") return y === "use-credentials" ? y : "";
  }
  return (
    (Ot.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = c),
    (Ot.createPortal = function (v, y) {
      var p =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!y || (y.nodeType !== 1 && y.nodeType !== 9 && y.nodeType !== 11))
        throw Error(i(299));
      return d(v, y, null, p);
    }),
    (Ot.flushSync = function (v) {
      var y = m.T,
        p = c.p;
      try {
        if (((m.T = null), (c.p = 2), v)) return v();
      } finally {
        ((m.T = y), (c.p = p), c.d.f());
      }
    }),
    (Ot.preconnect = function (v, y) {
      typeof v == "string" &&
        (y
          ? ((y = y.crossOrigin),
            (y =
              typeof y == "string"
                ? y === "use-credentials"
                  ? y
                  : ""
                : void 0))
          : (y = null),
        c.d.C(v, y));
    }),
    (Ot.prefetchDNS = function (v) {
      typeof v == "string" && c.d.D(v);
    }),
    (Ot.preinit = function (v, y) {
      if (typeof v == "string" && y && typeof y.as == "string") {
        var p = y.as,
          b = h(p, y.crossOrigin),
          x = typeof y.integrity == "string" ? y.integrity : void 0,
          _ = typeof y.fetchPriority == "string" ? y.fetchPriority : void 0;
        p === "style"
          ? c.d.S(v, typeof y.precedence == "string" ? y.precedence : void 0, {
              crossOrigin: b,
              integrity: x,
              fetchPriority: _,
            })
          : p === "script" &&
            c.d.X(v, {
              crossOrigin: b,
              integrity: x,
              fetchPriority: _,
              nonce: typeof y.nonce == "string" ? y.nonce : void 0,
            });
      }
    }),
    (Ot.preinitModule = function (v, y) {
      if (typeof v == "string")
        if (typeof y == "object" && y !== null) {
          if (y.as == null || y.as === "script") {
            var p = h(y.as, y.crossOrigin);
            c.d.M(v, {
              crossOrigin: p,
              integrity: typeof y.integrity == "string" ? y.integrity : void 0,
              nonce: typeof y.nonce == "string" ? y.nonce : void 0,
            });
          }
        } else y == null && c.d.M(v);
    }),
    (Ot.preload = function (v, y) {
      if (
        typeof v == "string" &&
        typeof y == "object" &&
        y !== null &&
        typeof y.as == "string"
      ) {
        var p = y.as,
          b = h(p, y.crossOrigin);
        c.d.L(v, p, {
          crossOrigin: b,
          integrity: typeof y.integrity == "string" ? y.integrity : void 0,
          nonce: typeof y.nonce == "string" ? y.nonce : void 0,
          type: typeof y.type == "string" ? y.type : void 0,
          fetchPriority:
            typeof y.fetchPriority == "string" ? y.fetchPriority : void 0,
          referrerPolicy:
            typeof y.referrerPolicy == "string" ? y.referrerPolicy : void 0,
          imageSrcSet:
            typeof y.imageSrcSet == "string" ? y.imageSrcSet : void 0,
          imageSizes: typeof y.imageSizes == "string" ? y.imageSizes : void 0,
          media: typeof y.media == "string" ? y.media : void 0,
        });
      }
    }),
    (Ot.preloadModule = function (v, y) {
      if (typeof v == "string")
        if (y) {
          var p = h(y.as, y.crossOrigin);
          c.d.m(v, {
            as: typeof y.as == "string" && y.as !== "script" ? y.as : void 0,
            crossOrigin: p,
            integrity: typeof y.integrity == "string" ? y.integrity : void 0,
          });
        } else c.d.m(v);
    }),
    (Ot.requestFormReset = function (v) {
      c.d.r(v);
    }),
    (Ot.unstable_batchedUpdates = function (v, y) {
      return v(y);
    }),
    (Ot.useFormState = function (v, y, p) {
      return m.H.useFormState(v, y, p);
    }),
    (Ot.useFormStatus = function () {
      return m.H.useHostTransitionStatus();
    }),
    (Ot.version = "19.2.0"),
    Ot
  );
}
var Dg;
function Yy() {
  if (Dg) return Rs.exports;
  Dg = 1;
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
  return (a(), (Rs.exports = y1()), Rs.exports);
}
var fi = Yy();
const v1 = [];
function jy(a) {
  M.useEffect(a, v1);
}
const qr = null;
class p1 {
  callbacks = [];
  callbacksCount = 0;
  nextId = 1;
  startId = 1;
  isScheduled = !1;
  tick = (i) => {
    this.isScheduled = !1;
    const o = this.callbacks,
      c = this.callbacksCount;
    if (
      ((this.callbacks = []),
      (this.callbacksCount = 0),
      (this.startId = this.nextId),
      c > 0)
    )
      for (let s = 0; s < o.length; s += 1) o[s]?.(i);
  };
  request(i) {
    const o = this.nextId;
    return (
      (this.nextId += 1),
      this.callbacks.push(i),
      (this.callbacksCount += 1),
      (!this.isScheduled || !1) &&
        (requestAnimationFrame(this.tick), (this.isScheduled = !0)),
      o
    );
  }
  cancel(i) {
    const o = i - this.startId;
    o < 0 ||
      o >= this.callbacks.length ||
      ((this.callbacks[o] = null), (this.callbacksCount -= 1));
  }
}
const Yr = new p1();
class dl {
  static create() {
    return new dl();
  }
  static request(i) {
    return Yr.request(i);
  }
  static cancel(i) {
    return Yr.cancel(i);
  }
  currentId = qr;
  request(i) {
    (this.cancel(),
      (this.currentId = Yr.request(() => {
        ((this.currentId = qr), i());
      })));
  }
  cancel = () => {
    this.currentId !== qr && (Yr.cancel(this.currentId), (this.currentId = qr));
  };
  disposeEffect = () => this.cancel;
}
function b1() {
  const a = si(dl.create).current;
  return (jy(a.disposeEffect), a);
}
function S1(a, i = !1) {
  const o = b1();
  return Ze((c, s = null) => {
    if ((o.cancel(), a == null)) return;
    let d;
    if ("current" in a) {
      if (a.current == null) return;
      d = a.current;
    } else d = a;
    typeof d.getAnimations != "function" ||
    globalThis.BASE_UI_ANIMATIONS_DISABLED
      ? c()
      : o.request(() => {
          function m() {
            d &&
              Promise.allSettled(d.getAnimations().map((h) => h.finished)).then(
                () => {
                  (s != null && s.aborted) || fi.flushSync(c);
                }
              );
          }
          i ? o.request(m) : m();
        });
  });
}
function E1(a, i = !1, o = !1) {
  const [c, s] = M.useState(a && i ? "idle" : void 0),
    [d, m] = M.useState(a);
  return (
    a && !d && (m(!0), s("starting")),
    !a && d && c !== "ending" && !o && s("ending"),
    !a && !d && c === "ending" && s(void 0),
    nt(() => {
      if (!a && d && c !== "ending" && o) {
        const h = dl.request(() => {
          s("ending");
        });
        return () => {
          dl.cancel(h);
        };
      }
    }, [a, d, c, o]),
    nt(() => {
      if (!a || i) return;
      const h = dl.request(() => {
        fi.flushSync(() => {
          s(void 0);
        });
      });
      return () => {
        dl.cancel(h);
      };
    }, [i, a]),
    nt(() => {
      if (!a || !i) return;
      a && d && c !== "idle" && s("starting");
      const h = dl.request(() => {
        s("idle");
      });
      return () => {
        dl.cancel(h);
      };
    }, [i, a, d, s, c]),
    M.useMemo(
      () => ({ mounted: d, setMounted: m, transitionStatus: c }),
      [d, c]
    )
  );
}
let Zr = (function (a) {
  return (
    (a.startingStyle = "data-starting-style"),
    (a.endingStyle = "data-ending-style"),
    a
  );
})({});
const A1 = { [Zr.startingStyle]: "" },
  x1 = { [Zr.endingStyle]: "" },
  T1 = {
    transitionStatus(a) {
      return a === "starting" ? A1 : a === "ending" ? x1 : null;
    },
  };
function to() {
  return typeof window < "u";
}
function di(a) {
  return lf(a) ? (a.nodeName || "").toLowerCase() : "#document";
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
  return (i = (lf(a) ? a.ownerDocument : a.document) || window.document) == null
    ? void 0
    : i.documentElement;
}
function lf(a) {
  return to() ? a instanceof Node || a instanceof Nt(a).Node : !1;
}
function Ie(a) {
  return to() ? a instanceof Element || a instanceof Nt(a).Element : !1;
}
function on(a) {
  return to() ? a instanceof HTMLElement || a instanceof Nt(a).HTMLElement : !1;
}
function Ks(a) {
  return !to() || typeof ShadowRoot > "u"
    ? !1
    : a instanceof ShadowRoot || a instanceof Nt(a).ShadowRoot;
}
const _1 = new Set(["inline", "contents"]);
function vu(a) {
  const { overflow: i, overflowX: o, overflowY: c, display: s } = En(a);
  return /auto|scroll|overlay|hidden|clip/.test(i + c + o) && !_1.has(s);
}
const R1 = new Set(["table", "td", "th"]);
function M1(a) {
  return R1.has(di(a));
}
const C1 = [":popover-open", ":modal"];
function no(a) {
  return C1.some((i) => {
    try {
      return a.matches(i);
    } catch {
      return !1;
    }
  });
}
const O1 = ["transform", "translate", "scale", "rotate", "perspective"],
  w1 = ["transform", "translate", "scale", "rotate", "perspective", "filter"],
  z1 = ["paint", "layout", "strict", "content"];
function af(a) {
  const i = lo(),
    o = Ie(a) ? En(a) : a;
  return (
    O1.some((c) => (o[c] ? o[c] !== "none" : !1)) ||
    (o.containerType ? o.containerType !== "normal" : !1) ||
    (!i && (o.backdropFilter ? o.backdropFilter !== "none" : !1)) ||
    (!i && (o.filter ? o.filter !== "none" : !1)) ||
    w1.some((c) => (o.willChange || "").includes(c)) ||
    z1.some((c) => (o.contain || "").includes(c))
  );
}
function D1(a) {
  let i = yl(a);
  for (; on(i) && !gl(i); ) {
    if (af(i)) return i;
    if (no(i)) return null;
    i = yl(i);
  }
  return null;
}
function lo() {
  return typeof CSS > "u" || !CSS.supports
    ? !1
    : CSS.supports("-webkit-backdrop-filter", "none");
}
const U1 = new Set(["html", "body", "#document"]);
function gl(a) {
  return U1.has(di(a));
}
function En(a) {
  return Nt(a).getComputedStyle(a);
}
function ao(a) {
  return Ie(a)
    ? { scrollLeft: a.scrollLeft, scrollTop: a.scrollTop }
    : { scrollLeft: a.scrollX, scrollTop: a.scrollY };
}
function yl(a) {
  if (di(a) === "html") return a;
  const i = a.assignedSlot || a.parentNode || (Ks(a) && a.host) || jn(a);
  return Ks(i) ? i.host : i;
}
function Gy(a) {
  const i = yl(a);
  return gl(i)
    ? a.ownerDocument
      ? a.ownerDocument.body
      : a.body
    : on(i) && vu(i)
      ? i
      : Gy(i);
}
function Zl(a, i, o) {
  var c;
  (i === void 0 && (i = []), o === void 0 && (o = !0));
  const s = Gy(a),
    d = s === ((c = a.ownerDocument) == null ? void 0 : c.body),
    m = Nt(s);
  if (d) {
    const h = Js(m);
    return i.concat(
      m,
      m.visualViewport || [],
      vu(s) ? s : [],
      h && o ? Zl(h) : []
    );
  }
  return i.concat(s, Zl(s, [], o));
}
function Js(a) {
  return a.parent && Object.getPrototypeOf(a.parent) ? a.frameElement : null;
}
const pu = typeof navigator < "u",
  Ms = q1(),
  N1 = j1(),
  V1 = Y1();
typeof CSS > "u" ||
  !CSS.supports ||
  CSS.supports("-webkit-backdrop-filter:none");
(Ms.platform === "MacIntel" && Ms.maxTouchPoints > 1) ||
  /iP(hone|ad|od)|iOS/.test(Ms.platform);
const L1 = pu && /apple/i.test(navigator.vendor),
  B1 = pu && N1.toLowerCase().startsWith("mac") && !navigator.maxTouchPoints,
  H1 = V1.includes("jsdom/");
function q1() {
  if (!pu) return { platform: "", maxTouchPoints: -1 };
  const a = navigator.userAgentData;
  return a?.platform
    ? { platform: a.platform, maxTouchPoints: navigator.maxTouchPoints }
    : {
        platform: navigator.platform ?? "",
        maxTouchPoints: navigator.maxTouchPoints ?? -1,
      };
}
function Y1() {
  if (!pu) return "";
  const a = navigator.userAgentData;
  return a && Array.isArray(a.brands)
    ? a.brands.map(({ brand: i, version: o }) => `${i}/${o}`).join(" ")
    : navigator.userAgent;
}
function j1() {
  if (!pu) return "";
  const a = navigator.userAgentData;
  return a?.platform ? a.platform : (navigator.platform ?? "");
}
const G1 = "data-base-ui-focusable",
  Xy = "active",
  ky = "selected",
  X1 =
    "input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";
function Ug(a) {
  let i = a.activeElement;
  for (; i?.shadowRoot?.activeElement != null; ) i = i.shadowRoot.activeElement;
  return i;
}
function Hn(a, i) {
  if (!a || !i) return !1;
  const o = i.getRootNode?.();
  if (a.contains(i)) return !0;
  if (o && Ks(o)) {
    let c = i;
    for (; c; ) {
      if (a === c) return !0;
      c = c.parentNode || c.host;
    }
  }
  return !1;
}
function Bn(a) {
  return "composedPath" in a ? a.composedPath()[0] : a.target;
}
function sl(a, i) {
  if (i == null) return !1;
  if ("composedPath" in a) return a.composedPath().includes(i);
  const o = a;
  return o.target != null && i.contains(o.target);
}
function k1(a) {
  return a.matches("html,body");
}
function ha(a) {
  return a?.ownerDocument || document;
}
function Q1(a) {
  return on(a) && a.matches(X1);
}
function Z1(a) {
  if (!a || H1) return !0;
  try {
    return a.matches(":focus-visible");
  } catch {
    return !0;
  }
}
function du(a, i, o = !0) {
  return a
    .filter((s) => s.parentId === i && (!o || s.context?.open))
    .flatMap((s) => [s, ...du(a, s.id, o)]);
}
function K1(a) {
  return "nativeEvent" in a;
}
function Kr(a, i) {
  const o = ["mouse", "pen"];
  return (o.push("", void 0), o.includes(a));
}
const J1 = ["top", "right", "bottom", "left"],
  ri = Math.min,
  an = Math.max,
  Jr = Math.round,
  jr = Math.floor,
  qn = (a) => ({ x: a, y: a }),
  F1 = { left: "right", right: "left", bottom: "top", top: "bottom" },
  $1 = { start: "end", end: "start" };
function Fs(a, i, o) {
  return an(a, ri(i, o));
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
function uf(a) {
  return a === "x" ? "y" : "x";
}
function rf(a) {
  return a === "y" ? "height" : "width";
}
const W1 = new Set(["top", "bottom"]);
function Sn(a) {
  return W1.has(rn(a)) ? "y" : "x";
}
function of(a) {
  return uf(Sn(a));
}
function P1(a, i, o) {
  o === void 0 && (o = !1);
  const c = Kl(a),
    s = of(a),
    d = rf(s);
  let m =
    s === "x"
      ? c === (o ? "end" : "start")
        ? "right"
        : "left"
      : c === "start"
        ? "bottom"
        : "top";
  return (i.reference[d] > i.floating[d] && (m = Fr(m)), [m, Fr(m)]);
}
function I1(a) {
  const i = Fr(a);
  return [$s(a), i, $s(i)];
}
function $s(a) {
  return a.replace(/start|end/g, (i) => $1[i]);
}
const Ng = ["left", "right"],
  Vg = ["right", "left"],
  eS = ["top", "bottom"],
  tS = ["bottom", "top"];
function nS(a, i, o) {
  switch (a) {
    case "top":
    case "bottom":
      return o ? (i ? Vg : Ng) : i ? Ng : Vg;
    case "left":
    case "right":
      return i ? eS : tS;
    default:
      return [];
  }
}
function lS(a, i, o, c) {
  const s = Kl(a);
  let d = nS(rn(a), o === "start", c);
  return (
    s && ((d = d.map((m) => m + "-" + s)), i && (d = d.concat(d.map($s)))),
    d
  );
}
function Fr(a) {
  return a.replace(/left|right|bottom|top/g, (i) => F1[i]);
}
function aS(a) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...a };
}
function Qy(a) {
  return typeof a != "number"
    ? aS(a)
    : { top: a, right: a, bottom: a, left: a };
}
function $r(a) {
  const { x: i, y: o, width: c, height: s } = a;
  return {
    width: c,
    height: s,
    top: o,
    left: i,
    right: i + c,
    bottom: o + s,
    x: i,
    y: o,
  };
}
function hl(a) {
  const i = si(iS, a).current;
  return ((i.next = a), nt(i.effect), i);
}
function iS(a) {
  const i = {
    current: a,
    next: a,
    effect: () => {
      i.current = i.next;
    },
  };
  return i;
}
function Zy(a) {
  const { enabled: i = !0, open: o, ref: c, onComplete: s } = a,
    d = hl(o),
    m = Ze(s),
    h = S1(c, o);
  M.useEffect(() => {
    i &&
      h(() => {
        o === d.current && m();
      });
  }, [i, o, m, h, d]);
}
let cf = (function (a) {
    return (
      (a.open = "data-open"),
      (a.closed = "data-closed"),
      (a[(a.startingStyle = Zr.startingStyle)] = "startingStyle"),
      (a[(a.endingStyle = Zr.endingStyle)] = "endingStyle"),
      (a.anchorHidden = "data-anchor-hidden"),
      a
    );
  })({}),
  uS = (function (a) {
    return ((a.popupOpen = "data-popup-open"), (a.pressed = "data-pressed"), a);
  })({});
const rS = { [uS.popupOpen]: "" },
  oS = { [cf.open]: "" },
  cS = { [cf.closed]: "" },
  sS = { [cf.anchorHidden]: "" },
  fS = {
    open(a) {
      return a ? rS : null;
    },
  },
  sf = {
    open(a) {
      return a ? oS : cS;
    },
    anchorHidden(a) {
      return a ? sS : null;
    },
  },
  ou = 0;
class mi {
  static create() {
    return new mi();
  }
  currentId = ou;
  start(i, o) {
    (this.clear(),
      (this.currentId = setTimeout(() => {
        ((this.currentId = ou), o());
      }, i)));
  }
  isStarted() {
    return this.currentId !== ou;
  }
  clear = () => {
    this.currentId !== ou &&
      (clearTimeout(this.currentId), (this.currentId = ou));
  };
  disposeEffect = () => this.clear;
}
function ya() {
  const a = si(mi.create).current;
  return (jy(a.disposeEffect), a);
}
function dS() {
  const a = new Map();
  return {
    emit(i, o) {
      a.get(i)?.forEach((c) => c(o));
    },
    on(i, o) {
      (a.has(i) || a.set(i, new Set()), a.get(i).add(o));
    },
    off(i, o) {
      a.get(i)?.delete(o);
    },
  };
}
const mS = M.createContext(null),
  hS = M.createContext(null),
  Ky = () => M.useContext(mS)?.id || null,
  ff = () => M.useContext(hS);
function io(a) {
  return `data-base-ui-${a}`;
}
const Lg = io("safe-polygon");
function Xr(a, i, o) {
  if (o && !Kr(o)) return 0;
  if (typeof a == "number") return a;
  if (typeof a == "function") {
    const c = a();
    return typeof c == "number" ? c : c?.[i];
  }
  return a?.[i];
}
function Cs(a) {
  return typeof a == "function" ? a() : a;
}
function gS(a, i = {}) {
  const { open: o, onOpenChange: c, dataRef: s, events: d, elements: m } = a,
    {
      enabled: h = !0,
      delay: v = 0,
      handleClose: y = null,
      mouseOnly: p = !1,
      restMs: b = 0,
      move: x = !0,
    } = i,
    _ = ff(),
    O = Ky(),
    D = hl(y),
    k = hl(v),
    P = hl(o),
    G = hl(b),
    q = M.useRef(void 0),
    X = ya(),
    ne = M.useRef(void 0),
    Z = ya(),
    W = M.useRef(!0),
    $ = M.useRef(!1),
    me = M.useRef(() => {}),
    ge = M.useRef(!1),
    se = Ze(() => {
      const w = s.current.openEvent?.type;
      return w?.includes("mouse") && w !== "mousedown";
    });
  (M.useEffect(() => {
    if (!h) return;
    function w(C) {
      C.open || (X.clear(), Z.clear(), (W.current = !0), (ge.current = !1));
    }
    return (
      d.on("openchange", w),
      () => {
        d.off("openchange", w);
      }
    );
  }, [h, d, X, Z]),
    M.useEffect(() => {
      if (!h || !D.current || !o) return;
      function w(ue) {
        se() && c(!1, wt("trigger-hover", ue));
      }
      const C = ha(m.floating).documentElement;
      return (
        C.addEventListener("mouseleave", w),
        () => {
          C.removeEventListener("mouseleave", w);
        }
      );
    }, [m.floating, o, c, h, D, se]));
  const Q = M.useCallback(
      (w, C = !0) => {
        const ue = Xr(k.current, "close", q.current);
        ue && !ne.current
          ? X.start(ue, () => c(!1, wt("trigger-hover", w)))
          : C && (X.clear(), c(!1, wt("trigger-hover", w)));
      },
      [k, c, X]
    ),
    B = Ze(() => {
      (me.current(), (ne.current = void 0));
    }),
    te = Ze(() => {
      if ($.current) {
        const w = ha(m.floating).body;
        ((w.style.pointerEvents = ""), w.removeAttribute(Lg), ($.current = !1));
      }
    }),
    oe = Ze(() =>
      s.current.openEvent
        ? ["click", "mousedown"].includes(s.current.openEvent.type)
        : !1
    );
  (M.useEffect(() => {
    if (!h) return;
    function w(L) {
      if (
        (X.clear(),
        (W.current = !1),
        (p && !Kr(q.current)) || (Cs(G.current) > 0 && !Xr(k.current, "open")))
      )
        return;
      const J = Xr(k.current, "open", q.current);
      J
        ? X.start(J, () => {
            P.current || c(!0, wt("trigger-hover", L));
          })
        : o || c(!0, wt("trigger-hover", L));
    }
    function C(L) {
      if (oe()) {
        te();
        return;
      }
      me.current();
      const J = ha(m.floating);
      if (
        (Z.clear(), (ge.current = !1), D.current && s.current.floatingContext)
      ) {
        (o || X.clear(),
          (ne.current = D.current({
            ...s.current.floatingContext,
            tree: _,
            x: L.clientX,
            y: L.clientY,
            onClose() {
              (te(), B(), oe() || Q(L, !0));
            },
          })));
        const ye = ne.current;
        (J.addEventListener("mousemove", ye),
          (me.current = () => {
            J.removeEventListener("mousemove", ye);
          }));
        return;
      }
      (q.current === "touch" ? !Hn(m.floating, L.relatedTarget) : !0) && Q(L);
    }
    function ue(L) {
      oe() ||
        (s.current.floatingContext &&
          D.current?.({
            ...s.current.floatingContext,
            tree: _,
            x: L.clientX,
            y: L.clientY,
            onClose() {
              (te(), B(), oe() || Q(L));
            },
          })(L));
    }
    function ce() {
      X.clear();
    }
    function S(L) {
      oe() || Q(L, !1);
    }
    if (Ie(m.domReference)) {
      const L = m.domReference,
        J = m.floating;
      return (
        o && L.addEventListener("mouseleave", ue),
        x && L.addEventListener("mousemove", w, { once: !0 }),
        L.addEventListener("mouseenter", w),
        L.addEventListener("mouseleave", C),
        J &&
          (J.addEventListener("mouseleave", ue),
          J.addEventListener("mouseenter", ce),
          J.addEventListener("mouseleave", S)),
        () => {
          (o && L.removeEventListener("mouseleave", ue),
            x && L.removeEventListener("mousemove", w),
            L.removeEventListener("mouseenter", w),
            L.removeEventListener("mouseleave", C),
            J &&
              (J.removeEventListener("mouseleave", ue),
              J.removeEventListener("mouseenter", ce),
              J.removeEventListener("mouseleave", S)));
        }
      );
    }
  }, [m, h, a, p, x, Q, B, te, c, o, P, _, k, D, s, oe, G, X, Z]),
    nt(() => {
      if (h && o && D.current?.__options?.blockPointerEvents && se()) {
        $.current = !0;
        const w = m.floating;
        if (Ie(m.domReference) && w) {
          const C = ha(m.floating).body;
          C.setAttribute(Lg, "");
          const ue = m.domReference,
            ce = _?.nodesRef.current.find((S) => S.id === O)?.context?.elements
              .floating;
          return (
            ce && (ce.style.pointerEvents = ""),
            (C.style.pointerEvents = "none"),
            (ue.style.pointerEvents = "auto"),
            (w.style.pointerEvents = "auto"),
            () => {
              ((C.style.pointerEvents = ""),
                (ue.style.pointerEvents = ""),
                (w.style.pointerEvents = ""));
            }
          );
        }
      }
    }, [h, o, O, m, _, D, se]),
    nt(() => {
      o || ((q.current = void 0), (ge.current = !1), B(), te());
    }, [o, B, te]),
    M.useEffect(
      () => () => {
        (B(), X.clear(), Z.clear());
      },
      [h, m.domReference, B, X, Z]
    ),
    M.useEffect(() => te, [te]));
  const R = M.useMemo(() => {
    function w(C) {
      q.current = C.pointerType;
    }
    return {
      onPointerDown: w,
      onPointerEnter: w,
      onMouseMove(C) {
        const { nativeEvent: ue } = C;
        function ce() {
          !W.current && !P.current && c(!0, wt("trigger-hover", ue));
        }
        (p && !Kr(q.current)) ||
          o ||
          Cs(G.current) === 0 ||
          (ge.current && C.movementX ** 2 + C.movementY ** 2 < 2) ||
          (Z.clear(),
          q.current === "touch"
            ? ce()
            : ((ge.current = !0), Z.start(Cs(G.current), ce)));
      },
    };
  }, [p, c, o, P, G, Z]);
  return M.useMemo(() => (h ? { reference: R } : {}), [h, R]);
}
const Jy = M.createContext({
  hasProvider: !1,
  timeoutMs: 0,
  delayRef: { current: 0 },
  initialDelayRef: { current: 0 },
  timeout: new mi(),
  currentIdRef: { current: null },
  currentContextRef: { current: null },
});
function yS(a) {
  const { children: i, delay: o, timeoutMs: c = 0 } = a,
    s = M.useRef(o),
    d = M.useRef(o),
    m = M.useRef(null),
    h = M.useRef(null),
    v = ya();
  return Dn.jsx(Jy.Provider, {
    value: M.useMemo(
      () => ({
        hasProvider: !0,
        delayRef: s,
        initialDelayRef: d,
        currentIdRef: m,
        timeoutMs: c,
        currentContextRef: h,
        timeout: v,
      }),
      [c, v]
    ),
    children: i,
  });
}
function vS(a, i = {}) {
  const { open: o, onOpenChange: c, floatingId: s } = a,
    { enabled: d = !0 } = i,
    m = M.useContext(Jy),
    {
      currentIdRef: h,
      delayRef: v,
      timeoutMs: y,
      initialDelayRef: p,
      currentContextRef: b,
      hasProvider: x,
      timeout: _,
    } = m,
    [O, D] = M.useState(!1);
  return (
    nt(() => {
      function k() {
        (D(!1),
          b.current?.setIsInstantPhase(!1),
          (h.current = null),
          (b.current = null),
          (v.current = p.current));
      }
      if (d && h.current && !o && h.current === s) {
        if ((D(!1), y))
          return (
            _.start(y, k),
            () => {
              _.clear();
            }
          );
        k();
      }
    }, [d, o, s, h, v, y, p, b, _]),
    nt(() => {
      if (!d || !o) return;
      const k = b.current,
        P = h.current;
      ((b.current = { onOpenChange: c, setIsInstantPhase: D }),
        (h.current = s),
        (v.current = { open: 0, close: Xr(p.current, "close") }),
        P !== null && P !== s
          ? (_.clear(),
            D(!0),
            k?.setIsInstantPhase(!0),
            k?.onOpenChange(!1, wt("none")))
          : (D(!1), k?.setIsInstantPhase(!1)));
    }, [d, o, s, c, h, v, y, p, b, _]),
    nt(
      () => () => {
        b.current = null;
      },
      [b]
    ),
    M.useMemo(
      () => ({ hasProvider: x, delayRef: v, isInstantPhase: O }),
      [x, v, O]
    )
  );
}
function pS(a) {
  return a?.ownerDocument || document;
}
const bS = M.createContext(null),
  SS = () => M.useContext(bS),
  Bg = io("portal");
function ES(a = {}) {
  const { id: i, root: o } = a,
    c = nf(),
    s = SS(),
    [d, m] = M.useState(null),
    h = M.useRef(null);
  return (
    nt(
      () => () => {
        (d?.remove(),
          queueMicrotask(() => {
            h.current = null;
          }));
      },
      [d]
    ),
    nt(() => {
      if (!c || h.current) return;
      const v = i ? document.getElementById(i) : null;
      if (!v) return;
      const y = document.createElement("div");
      ((y.id = c),
        y.setAttribute(Bg, ""),
        v.appendChild(y),
        (h.current = y),
        m(y));
    }, [i, c]),
    nt(() => {
      if (o === null || !c || h.current) return;
      let v = o || s?.portalNode;
      (v && !lf(v) && (v = v.current), (v = v || document.body));
      let y = null;
      i && ((y = document.createElement("div")), (y.id = i), v.appendChild(y));
      const p = document.createElement("div");
      ((p.id = c),
        p.setAttribute(Bg, ""),
        (v = y || v),
        v.appendChild(p),
        (h.current = p),
        m(p));
    }, [i, o, c, s]),
    d
  );
}
function AS(a, i) {
  let o = null,
    c = null,
    s = !1;
  return {
    contextElement: a || void 0,
    getBoundingClientRect() {
      const d = a?.getBoundingClientRect() || {
          width: 0,
          height: 0,
          x: 0,
          y: 0,
        },
        m = i.axis === "x" || i.axis === "both",
        h = i.axis === "y" || i.axis === "both",
        v =
          ["mouseenter", "mousemove"].includes(
            i.dataRef.current.openEvent?.type || ""
          ) && i.pointerType !== "touch";
      let y = d.width,
        p = d.height,
        b = d.x,
        x = d.y;
      return (
        o == null && i.x && m && (o = d.x - i.x),
        c == null && i.y && h && (c = d.y - i.y),
        (b -= o || 0),
        (x -= c || 0),
        (y = 0),
        (p = 0),
        !s || v
          ? ((y = i.axis === "y" ? d.width : 0),
            (p = i.axis === "x" ? d.height : 0),
            (b = m && i.x != null ? i.x : b),
            (x = h && i.y != null ? i.y : x))
          : s &&
            !v &&
            ((p = i.axis === "x" ? d.height : p),
            (y = i.axis === "y" ? d.width : y)),
        (s = !0),
        {
          width: y,
          height: p,
          x: b,
          y: x,
          top: x,
          right: b + y,
          bottom: x + p,
          left: b,
        }
      );
    },
  };
}
function Hg(a) {
  return a != null && a.clientX != null;
}
function xS(a, i = {}) {
  const {
      open: o,
      dataRef: c,
      elements: { floating: s, domReference: d },
      refs: m,
    } = a,
    { enabled: h = !0, axis: v = "both", x: y = null, y: p = null } = i,
    b = M.useRef(!1),
    x = M.useRef(null),
    [_, O] = M.useState(),
    [D, k] = M.useState([]),
    P = Ze((Z, W) => {
      b.current ||
        (c.current.openEvent && !Hg(c.current.openEvent)) ||
        m.setPositionReference(
          AS(d, { x: Z, y: W, axis: v, dataRef: c, pointerType: _ })
        );
    }),
    G = Ze((Z) => {
      y != null ||
        p != null ||
        (o ? x.current || k([]) : P(Z.clientX, Z.clientY));
    }),
    q = Kr(_) ? s : o,
    X = M.useCallback(() => {
      if (!q || !h || y != null || p != null) return;
      const Z = Nt(s);
      function W($) {
        const me = Bn($);
        Hn(s, me)
          ? (Z.removeEventListener("mousemove", W), (x.current = null))
          : P($.clientX, $.clientY);
      }
      if (!c.current.openEvent || Hg(c.current.openEvent)) {
        Z.addEventListener("mousemove", W);
        const $ = () => {
          (Z.removeEventListener("mousemove", W), (x.current = null));
        };
        return ((x.current = $), $);
      }
      m.setPositionReference(d);
    }, [q, h, y, p, s, c, m, d, P]);
  (M.useEffect(() => X(), [X, D]),
    M.useEffect(() => {
      h && !s && (b.current = !1);
    }, [h, s]),
    M.useEffect(() => {
      !h && o && (b.current = !0);
    }, [h, o]),
    nt(() => {
      h && (y != null || p != null) && ((b.current = !1), P(y, p));
    }, [h, y, p, P]));
  const ne = M.useMemo(() => {
    function Z(W) {
      O(W.pointerType);
    }
    return {
      onPointerDown: Z,
      onPointerEnter: Z,
      onMouseMove: G,
      onMouseEnter: G,
    };
  }, [G]);
  return M.useMemo(() => (h ? { reference: ne } : {}), [h, ne]);
}
function qg(a, i, o) {
  let { reference: c, floating: s } = a;
  const d = Sn(i),
    m = of(i),
    h = rf(m),
    v = rn(i),
    y = d === "y",
    p = c.x + c.width / 2 - s.width / 2,
    b = c.y + c.height / 2 - s.height / 2,
    x = c[h] / 2 - s[h] / 2;
  let _;
  switch (v) {
    case "top":
      _ = { x: p, y: c.y - s.height };
      break;
    case "bottom":
      _ = { x: p, y: c.y + c.height };
      break;
    case "right":
      _ = { x: c.x + c.width, y: b };
      break;
    case "left":
      _ = { x: c.x - s.width, y: b };
      break;
    default:
      _ = { x: c.x, y: c.y };
  }
  switch (Kl(i)) {
    case "start":
      _[m] -= x * (o && y ? -1 : 1);
      break;
    case "end":
      _[m] += x * (o && y ? -1 : 1);
      break;
  }
  return _;
}
const TS = async (a, i, o) => {
  const {
      placement: c = "bottom",
      strategy: s = "absolute",
      middleware: d = [],
      platform: m,
    } = o,
    h = d.filter(Boolean),
    v = await (m.isRTL == null ? void 0 : m.isRTL(i));
  let y = await m.getElementRects({ reference: a, floating: i, strategy: s }),
    { x: p, y: b } = qg(y, c, v),
    x = c,
    _ = {},
    O = 0;
  for (let D = 0; D < h.length; D++) {
    const { name: k, fn: P } = h[D],
      {
        x: G,
        y: q,
        data: X,
        reset: ne,
      } = await P({
        x: p,
        y: b,
        initialPlacement: c,
        placement: x,
        strategy: s,
        middlewareData: _,
        rects: y,
        platform: m,
        elements: { reference: a, floating: i },
      });
    ((p = G ?? p),
      (b = q ?? b),
      (_ = { ..._, [k]: { ..._[k], ...X } }),
      ne &&
        O <= 50 &&
        (O++,
        typeof ne == "object" &&
          (ne.placement && (x = ne.placement),
          ne.rects &&
            (y =
              ne.rects === !0
                ? await m.getElementRects({
                    reference: a,
                    floating: i,
                    strategy: s,
                  })
                : ne.rects),
          ({ x: p, y: b } = qg(y, x, v))),
        (D = -1)));
  }
  return { x: p, y: b, placement: x, strategy: s, middlewareData: _ };
};
async function gu(a, i) {
  var o;
  i === void 0 && (i = {});
  const { x: c, y: s, platform: d, rects: m, elements: h, strategy: v } = a,
    {
      boundary: y = "clippingAncestors",
      rootBoundary: p = "viewport",
      elementContext: b = "floating",
      altBoundary: x = !1,
      padding: _ = 0,
    } = vl(i, a),
    O = Qy(_),
    k = h[x ? (b === "floating" ? "reference" : "floating") : b],
    P = $r(
      await d.getClippingRect({
        element:
          (o = await (d.isElement == null ? void 0 : d.isElement(k))) == null ||
          o
            ? k
            : k.contextElement ||
              (await (d.getDocumentElement == null
                ? void 0
                : d.getDocumentElement(h.floating))),
        boundary: y,
        rootBoundary: p,
        strategy: v,
      })
    ),
    G =
      b === "floating"
        ? { x: c, y: s, width: m.floating.width, height: m.floating.height }
        : m.reference,
    q = await (d.getOffsetParent == null
      ? void 0
      : d.getOffsetParent(h.floating)),
    X = (await (d.isElement == null ? void 0 : d.isElement(q)))
      ? (await (d.getScale == null ? void 0 : d.getScale(q))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    ne = $r(
      d.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await d.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: h,
            rect: G,
            offsetParent: q,
            strategy: v,
          })
        : G
    );
  return {
    top: (P.top - ne.top + O.top) / X.y,
    bottom: (ne.bottom - P.bottom + O.bottom) / X.y,
    left: (P.left - ne.left + O.left) / X.x,
    right: (ne.right - P.right + O.right) / X.x,
  };
}
const _S = function (a) {
  return (
    a === void 0 && (a = {}),
    {
      name: "flip",
      options: a,
      async fn(i) {
        var o, c;
        const {
            placement: s,
            middlewareData: d,
            rects: m,
            initialPlacement: h,
            platform: v,
            elements: y,
          } = i,
          {
            mainAxis: p = !0,
            crossAxis: b = !0,
            fallbackPlacements: x,
            fallbackStrategy: _ = "bestFit",
            fallbackAxisSideDirection: O = "none",
            flipAlignment: D = !0,
            ...k
          } = vl(a, i);
        if ((o = d.arrow) != null && o.alignmentOffset) return {};
        const P = rn(s),
          G = Sn(h),
          q = rn(h) === h,
          X = await (v.isRTL == null ? void 0 : v.isRTL(y.floating)),
          ne = x || (q || !D ? [Fr(h)] : I1(h)),
          Z = O !== "none";
        !x && Z && ne.push(...lS(h, D, O, X));
        const W = [h, ...ne],
          $ = await gu(i, k),
          me = [];
        let ge = ((c = d.flip) == null ? void 0 : c.overflows) || [];
        if ((p && me.push($[P]), b)) {
          const te = P1(s, m, X);
          me.push($[te[0]], $[te[1]]);
        }
        if (
          ((ge = [...ge, { placement: s, overflows: me }]),
          !me.every((te) => te <= 0))
        ) {
          var se, Q;
          const te = (((se = d.flip) == null ? void 0 : se.index) || 0) + 1,
            oe = W[te];
          if (
            oe &&
            (!(b === "alignment" ? G !== Sn(oe) : !1) ||
              ge.every((C) =>
                Sn(C.placement) === G ? C.overflows[0] > 0 : !0
              ))
          )
            return {
              data: { index: te, overflows: ge },
              reset: { placement: oe },
            };
          let R =
            (Q = ge
              .filter((w) => w.overflows[0] <= 0)
              .sort((w, C) => w.overflows[1] - C.overflows[1])[0]) == null
              ? void 0
              : Q.placement;
          if (!R)
            switch (_) {
              case "bestFit": {
                var B;
                const w =
                  (B = ge
                    .filter((C) => {
                      if (Z) {
                        const ue = Sn(C.placement);
                        return ue === G || ue === "y";
                      }
                      return !0;
                    })
                    .map((C) => [
                      C.placement,
                      C.overflows
                        .filter((ue) => ue > 0)
                        .reduce((ue, ce) => ue + ce, 0),
                    ])
                    .sort((C, ue) => C[1] - ue[1])[0]) == null
                    ? void 0
                    : B[0];
                w && (R = w);
                break;
              }
              case "initialPlacement":
                R = h;
                break;
            }
          if (s !== R) return { reset: { placement: R } };
        }
        return {};
      },
    }
  );
};
function Yg(a, i) {
  return {
    top: a.top - i.height,
    right: a.right - i.width,
    bottom: a.bottom - i.height,
    left: a.left - i.width,
  };
}
function jg(a) {
  return J1.some((i) => a[i] >= 0);
}
const RS = function (a) {
    return (
      a === void 0 && (a = {}),
      {
        name: "hide",
        options: a,
        async fn(i) {
          const { rects: o } = i,
            { strategy: c = "referenceHidden", ...s } = vl(a, i);
          switch (c) {
            case "referenceHidden": {
              const d = await gu(i, { ...s, elementContext: "reference" }),
                m = Yg(d, o.reference);
              return {
                data: { referenceHiddenOffsets: m, referenceHidden: jg(m) },
              };
            }
            case "escaped": {
              const d = await gu(i, { ...s, altBoundary: !0 }),
                m = Yg(d, o.floating);
              return { data: { escapedOffsets: m, escaped: jg(m) } };
            }
            default:
              return {};
          }
        },
      }
    );
  },
  Fy = new Set(["left", "top"]);
async function MS(a, i) {
  const { placement: o, platform: c, elements: s } = a,
    d = await (c.isRTL == null ? void 0 : c.isRTL(s.floating)),
    m = rn(o),
    h = Kl(o),
    v = Sn(o) === "y",
    y = Fy.has(m) ? -1 : 1,
    p = d && v ? -1 : 1,
    b = vl(i, a);
  let {
    mainAxis: x,
    crossAxis: _,
    alignmentAxis: O,
  } = typeof b == "number"
    ? { mainAxis: b, crossAxis: 0, alignmentAxis: null }
    : {
        mainAxis: b.mainAxis || 0,
        crossAxis: b.crossAxis || 0,
        alignmentAxis: b.alignmentAxis,
      };
  return (
    h && typeof O == "number" && (_ = h === "end" ? O * -1 : O),
    v ? { x: _ * p, y: x * y } : { x: x * y, y: _ * p }
  );
}
const CS = function (a) {
    return (
      a === void 0 && (a = 0),
      {
        name: "offset",
        options: a,
        async fn(i) {
          var o, c;
          const { x: s, y: d, placement: m, middlewareData: h } = i,
            v = await MS(i, a);
          return m === ((o = h.offset) == null ? void 0 : o.placement) &&
            (c = h.arrow) != null &&
            c.alignmentOffset
            ? {}
            : { x: s + v.x, y: d + v.y, data: { ...v, placement: m } };
        },
      }
    );
  },
  OS = function (a) {
    return (
      a === void 0 && (a = {}),
      {
        name: "shift",
        options: a,
        async fn(i) {
          const { x: o, y: c, placement: s } = i,
            {
              mainAxis: d = !0,
              crossAxis: m = !1,
              limiter: h = {
                fn: (k) => {
                  let { x: P, y: G } = k;
                  return { x: P, y: G };
                },
              },
              ...v
            } = vl(a, i),
            y = { x: o, y: c },
            p = await gu(i, v),
            b = Sn(rn(s)),
            x = uf(b);
          let _ = y[x],
            O = y[b];
          if (d) {
            const k = x === "y" ? "top" : "left",
              P = x === "y" ? "bottom" : "right",
              G = _ + p[k],
              q = _ - p[P];
            _ = Fs(G, _, q);
          }
          if (m) {
            const k = b === "y" ? "top" : "left",
              P = b === "y" ? "bottom" : "right",
              G = O + p[k],
              q = O - p[P];
            O = Fs(G, O, q);
          }
          const D = h.fn({ ...i, [x]: _, [b]: O });
          return {
            ...D,
            data: { x: D.x - o, y: D.y - c, enabled: { [x]: d, [b]: m } },
          };
        },
      }
    );
  },
  wS = function (a) {
    return (
      a === void 0 && (a = {}),
      {
        options: a,
        fn(i) {
          const { x: o, y: c, placement: s, rects: d, middlewareData: m } = i,
            { offset: h = 0, mainAxis: v = !0, crossAxis: y = !0 } = vl(a, i),
            p = { x: o, y: c },
            b = Sn(s),
            x = uf(b);
          let _ = p[x],
            O = p[b];
          const D = vl(h, i),
            k =
              typeof D == "number"
                ? { mainAxis: D, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ...D };
          if (v) {
            const q = x === "y" ? "height" : "width",
              X = d.reference[x] - d.floating[q] + k.mainAxis,
              ne = d.reference[x] + d.reference[q] - k.mainAxis;
            _ < X ? (_ = X) : _ > ne && (_ = ne);
          }
          if (y) {
            var P, G;
            const q = x === "y" ? "width" : "height",
              X = Fy.has(rn(s)),
              ne =
                d.reference[b] -
                d.floating[q] +
                ((X && ((P = m.offset) == null ? void 0 : P[b])) || 0) +
                (X ? 0 : k.crossAxis),
              Z =
                d.reference[b] +
                d.reference[q] +
                (X ? 0 : ((G = m.offset) == null ? void 0 : G[b]) || 0) -
                (X ? k.crossAxis : 0);
            O < ne ? (O = ne) : O > Z && (O = Z);
          }
          return { [x]: _, [b]: O };
        },
      }
    );
  },
  zS = function (a) {
    return (
      a === void 0 && (a = {}),
      {
        name: "size",
        options: a,
        async fn(i) {
          var o, c;
          const { placement: s, rects: d, platform: m, elements: h } = i,
            { apply: v = () => {}, ...y } = vl(a, i),
            p = await gu(i, y),
            b = rn(s),
            x = Kl(s),
            _ = Sn(s) === "y",
            { width: O, height: D } = d.floating;
          let k, P;
          b === "top" || b === "bottom"
            ? ((k = b),
              (P =
                x ===
                ((await (m.isRTL == null ? void 0 : m.isRTL(h.floating)))
                  ? "start"
                  : "end")
                  ? "left"
                  : "right"))
            : ((P = b), (k = x === "end" ? "top" : "bottom"));
          const G = D - p.top - p.bottom,
            q = O - p.left - p.right,
            X = ri(D - p[k], G),
            ne = ri(O - p[P], q),
            Z = !i.middlewareData.shift;
          let W = X,
            $ = ne;
          if (
            ((o = i.middlewareData.shift) != null && o.enabled.x && ($ = q),
            (c = i.middlewareData.shift) != null && c.enabled.y && (W = G),
            Z && !x)
          ) {
            const ge = an(p.left, 0),
              se = an(p.right, 0),
              Q = an(p.top, 0),
              B = an(p.bottom, 0);
            _
              ? ($ =
                  O -
                  2 * (ge !== 0 || se !== 0 ? ge + se : an(p.left, p.right)))
              : (W =
                  D - 2 * (Q !== 0 || B !== 0 ? Q + B : an(p.top, p.bottom)));
          }
          await v({ ...i, availableWidth: $, availableHeight: W });
          const me = await m.getDimensions(h.floating);
          return O !== me.width || D !== me.height
            ? { reset: { rects: !0 } }
            : {};
        },
      }
    );
  };
function $y(a) {
  const i = En(a);
  let o = parseFloat(i.width) || 0,
    c = parseFloat(i.height) || 0;
  const s = on(a),
    d = s ? a.offsetWidth : o,
    m = s ? a.offsetHeight : c,
    h = Jr(o) !== d || Jr(c) !== m;
  return (h && ((o = d), (c = m)), { width: o, height: c, $: h });
}
function df(a) {
  return Ie(a) ? a : a.contextElement;
}
function ui(a) {
  const i = df(a);
  if (!on(i)) return qn(1);
  const o = i.getBoundingClientRect(),
    { width: c, height: s, $: d } = $y(i);
  let m = (d ? Jr(o.width) : o.width) / c,
    h = (d ? Jr(o.height) : o.height) / s;
  return (
    (!m || !Number.isFinite(m)) && (m = 1),
    (!h || !Number.isFinite(h)) && (h = 1),
    { x: m, y: h }
  );
}
const DS = qn(0);
function Wy(a) {
  const i = Nt(a);
  return !lo() || !i.visualViewport
    ? DS
    : { x: i.visualViewport.offsetLeft, y: i.visualViewport.offsetTop };
}
function US(a, i, o) {
  return (i === void 0 && (i = !1), !o || (i && o !== Nt(a)) ? !1 : i);
}
function va(a, i, o, c) {
  (i === void 0 && (i = !1), o === void 0 && (o = !1));
  const s = a.getBoundingClientRect(),
    d = df(a);
  let m = qn(1);
  i && (c ? Ie(c) && (m = ui(c)) : (m = ui(a)));
  const h = US(d, o, c) ? Wy(d) : qn(0);
  let v = (s.left + h.x) / m.x,
    y = (s.top + h.y) / m.y,
    p = s.width / m.x,
    b = s.height / m.y;
  if (d) {
    const x = Nt(d),
      _ = c && Ie(c) ? Nt(c) : c;
    let O = x,
      D = Js(O);
    for (; D && c && _ !== O; ) {
      const k = ui(D),
        P = D.getBoundingClientRect(),
        G = En(D),
        q = P.left + (D.clientLeft + parseFloat(G.paddingLeft)) * k.x,
        X = P.top + (D.clientTop + parseFloat(G.paddingTop)) * k.y;
      ((v *= k.x),
        (y *= k.y),
        (p *= k.x),
        (b *= k.y),
        (v += q),
        (y += X),
        (O = Nt(D)),
        (D = Js(O)));
    }
  }
  return $r({ width: p, height: b, x: v, y });
}
function uo(a, i) {
  const o = ao(a).scrollLeft;
  return i ? i.left + o : va(jn(a)).left + o;
}
function Py(a, i) {
  const o = a.getBoundingClientRect(),
    c = o.left + i.scrollLeft - uo(a, o),
    s = o.top + i.scrollTop;
  return { x: c, y: s };
}
function NS(a) {
  let { elements: i, rect: o, offsetParent: c, strategy: s } = a;
  const d = s === "fixed",
    m = jn(c),
    h = i ? no(i.floating) : !1;
  if (c === m || (h && d)) return o;
  let v = { scrollLeft: 0, scrollTop: 0 },
    y = qn(1);
  const p = qn(0),
    b = on(c);
  if (
    (b || (!b && !d)) &&
    ((di(c) !== "body" || vu(m)) && (v = ao(c)), on(c))
  ) {
    const _ = va(c);
    ((y = ui(c)), (p.x = _.x + c.clientLeft), (p.y = _.y + c.clientTop));
  }
  const x = m && !b && !d ? Py(m, v) : qn(0);
  return {
    width: o.width * y.x,
    height: o.height * y.y,
    x: o.x * y.x - v.scrollLeft * y.x + p.x + x.x,
    y: o.y * y.y - v.scrollTop * y.y + p.y + x.y,
  };
}
function VS(a) {
  return Array.from(a.getClientRects());
}
function LS(a) {
  const i = jn(a),
    o = ao(a),
    c = a.ownerDocument.body,
    s = an(i.scrollWidth, i.clientWidth, c.scrollWidth, c.clientWidth),
    d = an(i.scrollHeight, i.clientHeight, c.scrollHeight, c.clientHeight);
  let m = -o.scrollLeft + uo(a);
  const h = -o.scrollTop;
  return (
    En(c).direction === "rtl" && (m += an(i.clientWidth, c.clientWidth) - s),
    { width: s, height: d, x: m, y: h }
  );
}
const Gg = 25;
function BS(a, i) {
  const o = Nt(a),
    c = jn(a),
    s = o.visualViewport;
  let d = c.clientWidth,
    m = c.clientHeight,
    h = 0,
    v = 0;
  if (s) {
    ((d = s.width), (m = s.height));
    const p = lo();
    (!p || (p && i === "fixed")) && ((h = s.offsetLeft), (v = s.offsetTop));
  }
  const y = uo(c);
  if (y <= 0) {
    const p = c.ownerDocument,
      b = p.body,
      x = getComputedStyle(b),
      _ =
        (p.compatMode === "CSS1Compat" &&
          parseFloat(x.marginLeft) + parseFloat(x.marginRight)) ||
        0,
      O = Math.abs(c.clientWidth - b.clientWidth - _);
    O <= Gg && (d -= O);
  } else y <= Gg && (d += y);
  return { width: d, height: m, x: h, y: v };
}
const HS = new Set(["absolute", "fixed"]);
function qS(a, i) {
  const o = va(a, !0, i === "fixed"),
    c = o.top + a.clientTop,
    s = o.left + a.clientLeft,
    d = on(a) ? ui(a) : qn(1),
    m = a.clientWidth * d.x,
    h = a.clientHeight * d.y,
    v = s * d.x,
    y = c * d.y;
  return { width: m, height: h, x: v, y };
}
function Xg(a, i, o) {
  let c;
  if (i === "viewport") c = BS(a, o);
  else if (i === "document") c = LS(jn(a));
  else if (Ie(i)) c = qS(i, o);
  else {
    const s = Wy(a);
    c = { x: i.x - s.x, y: i.y - s.y, width: i.width, height: i.height };
  }
  return $r(c);
}
function Iy(a, i) {
  const o = yl(a);
  return o === i || !Ie(o) || gl(o)
    ? !1
    : En(o).position === "fixed" || Iy(o, i);
}
function YS(a, i) {
  const o = i.get(a);
  if (o) return o;
  let c = Zl(a, [], !1).filter((h) => Ie(h) && di(h) !== "body"),
    s = null;
  const d = En(a).position === "fixed";
  let m = d ? yl(a) : a;
  for (; Ie(m) && !gl(m); ) {
    const h = En(m),
      v = af(m);
    (!v && h.position === "fixed" && (s = null),
      (
        d
          ? !v && !s
          : (!v && h.position === "static" && !!s && HS.has(s.position)) ||
            (vu(m) && !v && Iy(a, m))
      )
        ? (c = c.filter((p) => p !== m))
        : (s = h),
      (m = yl(m)));
  }
  return (i.set(a, c), c);
}
function jS(a) {
  let { element: i, boundary: o, rootBoundary: c, strategy: s } = a;
  const m = [
      ...(o === "clippingAncestors"
        ? no(i)
          ? []
          : YS(i, this._c)
        : [].concat(o)),
      c,
    ],
    h = m[0],
    v = m.reduce(
      (y, p) => {
        const b = Xg(i, p, s);
        return (
          (y.top = an(b.top, y.top)),
          (y.right = ri(b.right, y.right)),
          (y.bottom = ri(b.bottom, y.bottom)),
          (y.left = an(b.left, y.left)),
          y
        );
      },
      Xg(i, h, s)
    );
  return {
    width: v.right - v.left,
    height: v.bottom - v.top,
    x: v.left,
    y: v.top,
  };
}
function GS(a) {
  const { width: i, height: o } = $y(a);
  return { width: i, height: o };
}
function XS(a, i, o) {
  const c = on(i),
    s = jn(i),
    d = o === "fixed",
    m = va(a, !0, d, i);
  let h = { scrollLeft: 0, scrollTop: 0 };
  const v = qn(0);
  function y() {
    v.x = uo(s);
  }
  if (c || (!c && !d))
    if (((di(i) !== "body" || vu(s)) && (h = ao(i)), c)) {
      const _ = va(i, !0, d, i);
      ((v.x = _.x + i.clientLeft), (v.y = _.y + i.clientTop));
    } else s && y();
  d && !c && s && y();
  const p = s && !c && !d ? Py(s, h) : qn(0),
    b = m.left + h.scrollLeft - v.x - p.x,
    x = m.top + h.scrollTop - v.y - p.y;
  return { x: b, y: x, width: m.width, height: m.height };
}
function Os(a) {
  return En(a).position === "static";
}
function kg(a, i) {
  if (!on(a) || En(a).position === "fixed") return null;
  if (i) return i(a);
  let o = a.offsetParent;
  return (jn(a) === o && (o = o.ownerDocument.body), o);
}
function ev(a, i) {
  const o = Nt(a);
  if (no(a)) return o;
  if (!on(a)) {
    let s = yl(a);
    for (; s && !gl(s); ) {
      if (Ie(s) && !Os(s)) return s;
      s = yl(s);
    }
    return o;
  }
  let c = kg(a, i);
  for (; c && M1(c) && Os(c); ) c = kg(c, i);
  return c && gl(c) && Os(c) && !af(c) ? o : c || D1(a) || o;
}
const kS = async function (a) {
  const i = this.getOffsetParent || ev,
    o = this.getDimensions,
    c = await o(a.floating);
  return {
    reference: XS(a.reference, await i(a.floating), a.strategy),
    floating: { x: 0, y: 0, width: c.width, height: c.height },
  };
};
function QS(a) {
  return En(a).direction === "rtl";
}
const ZS = {
  convertOffsetParentRelativeRectToViewportRelativeRect: NS,
  getDocumentElement: jn,
  getClippingRect: jS,
  getOffsetParent: ev,
  getElementRects: kS,
  getClientRects: VS,
  getDimensions: GS,
  getScale: ui,
  isElement: Ie,
  isRTL: QS,
};
function tv(a, i) {
  return (
    a.x === i.x && a.y === i.y && a.width === i.width && a.height === i.height
  );
}
function KS(a, i) {
  let o = null,
    c;
  const s = jn(a);
  function d() {
    var h;
    (clearTimeout(c), (h = o) == null || h.disconnect(), (o = null));
  }
  function m(h, v) {
    (h === void 0 && (h = !1), v === void 0 && (v = 1), d());
    const y = a.getBoundingClientRect(),
      { left: p, top: b, width: x, height: _ } = y;
    if ((h || i(), !x || !_)) return;
    const O = jr(b),
      D = jr(s.clientWidth - (p + x)),
      k = jr(s.clientHeight - (b + _)),
      P = jr(p),
      q = {
        rootMargin: -O + "px " + -D + "px " + -k + "px " + -P + "px",
        threshold: an(0, ri(1, v)) || 1,
      };
    let X = !0;
    function ne(Z) {
      const W = Z[0].intersectionRatio;
      if (W !== v) {
        if (!X) return m();
        W
          ? m(!1, W)
          : (c = setTimeout(() => {
              m(!1, 1e-7);
            }, 1e3));
      }
      (W === 1 && !tv(y, a.getBoundingClientRect()) && m(), (X = !1));
    }
    try {
      o = new IntersectionObserver(ne, { ...q, root: s.ownerDocument });
    } catch {
      o = new IntersectionObserver(ne, q);
    }
    o.observe(a);
  }
  return (m(!0), d);
}
function Qg(a, i, o, c) {
  c === void 0 && (c = {});
  const {
      ancestorScroll: s = !0,
      ancestorResize: d = !0,
      elementResize: m = typeof ResizeObserver == "function",
      layoutShift: h = typeof IntersectionObserver == "function",
      animationFrame: v = !1,
    } = c,
    y = df(a),
    p = s || d ? [...(y ? Zl(y) : []), ...Zl(i)] : [];
  p.forEach((P) => {
    (s && P.addEventListener("scroll", o, { passive: !0 }),
      d && P.addEventListener("resize", o));
  });
  const b = y && h ? KS(y, o) : null;
  let x = -1,
    _ = null;
  m &&
    ((_ = new ResizeObserver((P) => {
      let [G] = P;
      (G &&
        G.target === y &&
        _ &&
        (_.unobserve(i),
        cancelAnimationFrame(x),
        (x = requestAnimationFrame(() => {
          var q;
          (q = _) == null || q.observe(i);
        }))),
        o());
    })),
    y && !v && _.observe(y),
    _.observe(i));
  let O,
    D = v ? va(a) : null;
  v && k();
  function k() {
    const P = va(a);
    (D && !tv(D, P) && o(), (D = P), (O = requestAnimationFrame(k)));
  }
  return (
    o(),
    () => {
      var P;
      (p.forEach((G) => {
        (s && G.removeEventListener("scroll", o),
          d && G.removeEventListener("resize", o));
      }),
        b?.(),
        (P = _) == null || P.disconnect(),
        (_ = null),
        v && cancelAnimationFrame(O));
    }
  );
}
const JS = CS,
  FS = OS,
  $S = _S,
  WS = zS,
  PS = RS,
  IS = wS,
  eE = (a, i, o) => {
    const c = new Map(),
      s = { platform: ZS, ...o },
      d = { ...s.platform, _c: c };
    return TS(a, i, { ...s, platform: d });
  };
var tE = typeof document < "u",
  nE = function () {},
  kr = tE ? M.useLayoutEffect : nE;
function Wr(a, i) {
  if (a === i) return !0;
  if (typeof a != typeof i) return !1;
  if (typeof a == "function" && a.toString() === i.toString()) return !0;
  let o, c, s;
  if (a && i && typeof a == "object") {
    if (Array.isArray(a)) {
      if (((o = a.length), o !== i.length)) return !1;
      for (c = o; c-- !== 0; ) if (!Wr(a[c], i[c])) return !1;
      return !0;
    }
    if (((s = Object.keys(a)), (o = s.length), o !== Object.keys(i).length))
      return !1;
    for (c = o; c-- !== 0; ) if (!{}.hasOwnProperty.call(i, s[c])) return !1;
    for (c = o; c-- !== 0; ) {
      const d = s[c];
      if (!(d === "_owner" && a.$$typeof) && !Wr(a[d], i[d])) return !1;
    }
    return !0;
  }
  return a !== a && i !== i;
}
function nv(a) {
  return typeof window > "u"
    ? 1
    : (a.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Zg(a, i) {
  const o = nv(a);
  return Math.round(i * o) / o;
}
function ws(a) {
  const i = M.useRef(a);
  return (
    kr(() => {
      i.current = a;
    }),
    i
  );
}
function lE(a) {
  a === void 0 && (a = {});
  const {
      placement: i = "bottom",
      strategy: o = "absolute",
      middleware: c = [],
      platform: s,
      elements: { reference: d, floating: m } = {},
      transform: h = !0,
      whileElementsMounted: v,
      open: y,
    } = a,
    [p, b] = M.useState({
      x: 0,
      y: 0,
      strategy: o,
      placement: i,
      middlewareData: {},
      isPositioned: !1,
    }),
    [x, _] = M.useState(c);
  Wr(x, c) || _(c);
  const [O, D] = M.useState(null),
    [k, P] = M.useState(null),
    G = M.useCallback((C) => {
      C !== Z.current && ((Z.current = C), D(C));
    }, []),
    q = M.useCallback((C) => {
      C !== W.current && ((W.current = C), P(C));
    }, []),
    X = d || O,
    ne = m || k,
    Z = M.useRef(null),
    W = M.useRef(null),
    $ = M.useRef(p),
    me = v != null,
    ge = ws(v),
    se = ws(s),
    Q = ws(y),
    B = M.useCallback(() => {
      if (!Z.current || !W.current) return;
      const C = { placement: i, strategy: o, middleware: x };
      (se.current && (C.platform = se.current),
        eE(Z.current, W.current, C).then((ue) => {
          const ce = { ...ue, isPositioned: Q.current !== !1 };
          te.current &&
            !Wr($.current, ce) &&
            (($.current = ce),
            fi.flushSync(() => {
              b(ce);
            }));
        }));
    }, [x, i, o, se, Q]);
  kr(() => {
    y === !1 &&
      $.current.isPositioned &&
      (($.current.isPositioned = !1), b((C) => ({ ...C, isPositioned: !1 })));
  }, [y]);
  const te = M.useRef(!1);
  (kr(
    () => (
      (te.current = !0),
      () => {
        te.current = !1;
      }
    ),
    []
  ),
    kr(() => {
      if ((X && (Z.current = X), ne && (W.current = ne), X && ne)) {
        if (ge.current) return ge.current(X, ne, B);
        B();
      }
    }, [X, ne, B, ge, me]));
  const oe = M.useMemo(
      () => ({ reference: Z, floating: W, setReference: G, setFloating: q }),
      [G, q]
    ),
    R = M.useMemo(() => ({ reference: X, floating: ne }), [X, ne]),
    w = M.useMemo(() => {
      const C = { position: o, left: 0, top: 0 };
      if (!R.floating) return C;
      const ue = Zg(R.floating, p.x),
        ce = Zg(R.floating, p.y);
      return h
        ? {
            ...C,
            transform: "translate(" + ue + "px, " + ce + "px)",
            ...(nv(R.floating) >= 1.5 && { willChange: "transform" }),
          }
        : { position: o, left: ue, top: ce };
    }, [o, h, R.floating, p.x, p.y]);
  return M.useMemo(
    () => ({ ...p, update: B, refs: oe, elements: R, floatingStyles: w }),
    [p, B, oe, R, w]
  );
}
const aE = (a, i) => ({ ...JS(a), options: [a, i] }),
  iE = (a, i) => ({ ...FS(a), options: [a, i] }),
  uE = (a, i) => ({ ...IS(a), options: [a, i] }),
  rE = (a, i) => ({ ...$S(a), options: [a, i] }),
  oE = (a, i) => ({ ...WS(a), options: [a, i] }),
  cE = (a, i) => ({ ...PS(a), options: [a, i] }),
  sE = { intentional: "onClick", sloppy: "onPointerDown" };
function Kg(a) {
  return {
    escapeKey: typeof a == "boolean" ? a : (a?.escapeKey ?? !1),
    outsidePress: typeof a == "boolean" ? a : (a?.outsidePress ?? !0),
  };
}
function fE(a, i = {}) {
  const { open: o, onOpenChange: c, elements: s, dataRef: d } = a,
    {
      enabled: m = !0,
      escapeKey: h = !0,
      outsidePress: v = !0,
      outsidePressEvent: y = "sloppy",
      referencePress: p = !1,
      referencePressEvent: b = "sloppy",
      ancestorScroll: x = !1,
      bubbles: _,
      capture: O,
    } = i,
    D = ff(),
    k = Ze(typeof v == "function" ? v : () => !1),
    P = typeof v == "function" ? k : v,
    G = M.useRef(!1),
    { escapeKey: q, outsidePress: X } = Kg(_),
    { escapeKey: ne, outsidePress: Z } = Kg(O),
    W = M.useRef(null),
    $ = ya(),
    me = ya(),
    ge = M.useRef(!1),
    se = M.useRef(""),
    Q = Ze((Y) => {
      se.current = Y.pointerType;
    }),
    B = Ze(() => {
      const Y = se.current,
        le = Y === "pen" || !Y ? "mouse" : Y,
        Ae = typeof y == "function" ? y() : y;
      return typeof Ae == "string" ? Ae : Ae[le];
    }),
    te = Ze((Y) => {
      if (!o || !m || !h || Y.key !== "Escape" || ge.current) return;
      const le = d.current.floatingContext?.nodeId,
        Ae = D ? du(D.nodesRef.current, le) : [];
      if (!q && Ae.length > 0) {
        let Ye = !0;
        if (
          (Ae.forEach((qe) => {
            qe.context?.open &&
              !qe.context.dataRef.current.__escapeKeyBubbles &&
              (Ye = !1);
          }),
          !Ye)
        )
          return;
      }
      const fe = K1(Y) ? Y.nativeEvent : Y,
        Te = wt("escape-key", fe);
      (c(!1, Te), !q && !Te.isPropagationAllowed && Y.stopPropagation());
    }),
    oe = Ze((Y) => {
      const le = B();
      return (
        (le === "intentional" && Y.type !== "click") ||
        (le === "sloppy" && Y.type === "click")
      );
    }),
    R = Ze((Y) => {
      const le = () => {
        (te(Y), Bn(Y)?.removeEventListener("keydown", le));
      };
      Bn(Y)?.addEventListener("keydown", le);
    }),
    w = Ze((Y, le = !1) => {
      if (oe(Y)) return;
      const Ae = d.current.insideReactTree;
      if (
        ((d.current.insideReactTree = !1),
        (B() === "intentional" && le) ||
          Ae ||
          (typeof P == "function" && !P(Y)))
      )
        return;
      const fe = Bn(Y),
        Te = `[${io("inert")}]`,
        Ye = ha(s.floating).querySelectorAll(Te);
      let qe = Ie(fe) ? fe : null;
      for (; qe && !gl(qe); ) {
        const We = yl(qe);
        if (gl(We) || !Ie(We)) break;
        qe = We;
      }
      if (
        Ye.length &&
        Ie(fe) &&
        !k1(fe) &&
        !Hn(fe, s.floating) &&
        Array.from(Ye).every((We) => !Hn(qe, We))
      )
        return;
      if (on(fe)) {
        const We = gl(fe),
          Ct = En(fe),
          Gn = /auto|scroll/,
          An = We || Gn.test(Ct.overflowX),
          A = We || Gn.test(Ct.overflowY),
          U = An && fe.clientWidth > 0 && fe.scrollWidth > fe.clientWidth,
          K = A && fe.clientHeight > 0 && fe.scrollHeight > fe.clientHeight,
          de = Ct.direction === "rtl",
          ie =
            K &&
            (de
              ? Y.offsetX <= fe.offsetWidth - fe.clientWidth
              : Y.offsetX > fe.clientWidth),
          re = U && Y.offsetY > fe.clientHeight;
        if (ie || re) return;
      }
      const Qt = d.current.floatingContext?.nodeId,
        zt =
          D &&
          du(D.nodesRef.current, Qt).some((We) =>
            sl(Y, We.context?.elements.floating)
          );
      if (sl(Y, s.floating) || sl(Y, s.domReference) || zt) return;
      const Zt = D ? du(D.nodesRef.current, Qt) : [];
      if (Zt.length > 0) {
        let We = !0;
        if (
          (Zt.forEach((Ct) => {
            Ct.context?.open &&
              !Ct.context.dataRef.current.__outsidePressBubbles &&
              (We = !1);
          }),
          !We)
        )
          return;
      }
      c(!1, wt("outside-press", Y));
    }),
    C = Ze((Y) => {
      if (
        !(
          B() !== "sloppy" ||
          !o ||
          !m ||
          sl(Y, s.floating) ||
          sl(Y, s.domReference)
        )
      ) {
        if (Y.pointerType === "touch") {
          ((W.current = {
            startTime: Date.now(),
            startX: Y.clientX,
            startY: Y.clientY,
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
        w(Y);
      }
    }),
    ue = Ze((Y) => {
      const le = G.current;
      if (
        ((G.current = !1),
        oe(Y) ||
          ($.clear(),
          Y.type === "mousedown" && W.current && !W.current.dismissOnMouseDown))
      )
        return;
      const Ae = () => {
        (Y.type === "pointerdown" ? C(Y) : w(Y, le),
          Bn(Y)?.removeEventListener(Y.type, Ae));
      };
      Bn(Y)?.addEventListener(Y.type, Ae);
    }),
    ce = Ze((Y) => {
      if (
        B() !== "sloppy" ||
        Y.pointerType !== "touch" ||
        !W.current ||
        sl(Y, s.floating) ||
        sl(Y, s.domReference)
      )
        return;
      const le = Math.abs(Y.clientX - W.current.startX),
        Ae = Math.abs(Y.clientY - W.current.startY),
        fe = Math.sqrt(le * le + Ae * Ae);
      (fe > 5 && (W.current.dismissOnPointerUp = !0),
        fe > 10 && (w(Y), $.clear(), (W.current = null)));
    }),
    S = Ze((Y) => {
      B() !== "sloppy" ||
        Y.pointerType !== "touch" ||
        !W.current ||
        sl(Y, s.floating) ||
        sl(Y, s.domReference) ||
        (W.current.dismissOnPointerUp && w(Y), $.clear(), (W.current = null));
    });
  (M.useEffect(() => {
    if (!o || !m) return;
    ((d.current.__escapeKeyBubbles = q), (d.current.__outsidePressBubbles = X));
    const Y = new mi();
    function le(qe) {
      c(!1, wt("none", qe));
    }
    function Ae() {
      (Y.clear(), (ge.current = !0));
    }
    function fe() {
      Y.start(lo() ? 5 : 0, () => {
        ge.current = !1;
      });
    }
    const Te = ha(s.floating);
    (Te.addEventListener("pointerdown", Q, !0),
      h &&
        (Te.addEventListener("keydown", ne ? R : te, ne),
        Te.addEventListener("compositionstart", Ae),
        Te.addEventListener("compositionend", fe)),
      P &&
        (Te.addEventListener("click", Z ? ue : w, Z),
        Te.addEventListener("pointerdown", Z ? ue : w, Z),
        Te.addEventListener("pointermove", ce, Z),
        Te.addEventListener("pointerup", S, Z),
        Te.addEventListener("mousedown", ue, Z)));
    let Ye = [];
    return (
      x &&
        (Ie(s.domReference) && (Ye = Zl(s.domReference)),
        Ie(s.floating) && (Ye = Ye.concat(Zl(s.floating))),
        !Ie(s.reference) &&
          s.reference &&
          s.reference.contextElement &&
          (Ye = Ye.concat(Zl(s.reference.contextElement)))),
      (Ye = Ye.filter((qe) => qe !== Te.defaultView?.visualViewport)),
      Ye.forEach((qe) => {
        qe.addEventListener("scroll", le, { passive: !0 });
      }),
      () => {
        (Te.removeEventListener("pointerdown", Q, !0),
          h &&
            (Te.removeEventListener("keydown", ne ? R : te, ne),
            Te.removeEventListener("compositionstart", Ae),
            Te.removeEventListener("compositionend", fe)),
          P &&
            (Te.removeEventListener("click", Z ? ue : w, Z),
            Te.removeEventListener("pointerdown", Z ? ue : w, Z),
            Te.removeEventListener("pointermove", ce, Z),
            Te.removeEventListener("pointerup", S, Z),
            Te.removeEventListener("mousedown", ue, Z)),
          Ye.forEach((qe) => {
            qe.removeEventListener("scroll", le);
          }),
          Y.clear());
      }
    );
  }, [d, s, h, P, o, c, x, m, q, X, te, ne, R, w, Z, ue, C, ce, S, Q]),
    M.useEffect(() => {
      d.current.insideReactTree = !1;
    }, [d, P]));
  const L = M.useMemo(
      () => ({
        onKeyDown: te,
        ...(p && {
          [sE[b]]: (Y) => {
            c(!1, wt("trigger-press", Y.nativeEvent));
          },
          ...(b !== "intentional" && {
            onClick(Y) {
              c(!1, wt("trigger-press", Y.nativeEvent));
            },
          }),
        }),
      }),
      [te, c, p, b]
    ),
    J = Ze((Y) => {
      const le = Bn(Y.nativeEvent);
      !Hn(s.floating, le) || Y.button !== 0 || (G.current = !0);
    }),
    ae = Ze(() => {
      ((d.current.insideReactTree = !0),
        me.start(0, () => {
          d.current.insideReactTree = !1;
        }));
    }),
    ye = M.useMemo(
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
  return M.useMemo(() => (m ? { reference: L, floating: ye } : {}), [m, L, ye]);
}
function lv(a) {
  const { open: i = !1, onOpenChange: o, elements: c } = a,
    s = nf(),
    d = M.useRef({}),
    [m] = M.useState(() => dS()),
    h = Ky() != null,
    [v, y] = M.useState(c.reference),
    p = Ze((_, O) => {
      if (((d.current.openEvent = _ ? O.event : void 0), !a.noEmit)) {
        const D = {
          open: _,
          reason: O.reason,
          nativeEvent: O.event,
          nested: h,
        };
        m.emit("openchange", D);
      }
      o?.(_, O);
    }),
    b = M.useMemo(() => ({ setPositionReference: y }), []),
    x = M.useMemo(
      () => ({
        reference: v || c.reference || null,
        floating: c.floating || null,
        domReference: c.reference,
      }),
      [v, c.reference, c.floating]
    );
  return M.useMemo(
    () => ({
      dataRef: d,
      open: i,
      onOpenChange: p,
      elements: x,
      events: m,
      floatingId: s,
      refs: b,
    }),
    [i, p, x, m, s, b]
  );
}
function dE(a = {}) {
  const { nodeId: i } = a,
    o = lv({
      ...a,
      elements: { reference: null, floating: null, ...a.elements },
    }),
    c = a.rootContext || o,
    s = c.elements,
    [d, m] = M.useState(null),
    [h, v] = M.useState(null),
    p = s?.domReference || d,
    b = M.useRef(null),
    x = ff();
  nt(() => {
    p && (b.current = p);
  }, [p]);
  const _ = lE({ ...a, elements: { ...s, ...(h && { reference: h }) } }),
    O = M.useCallback(
      (q) => {
        const X = Ie(q)
          ? {
              getBoundingClientRect: () => q.getBoundingClientRect(),
              getClientRects: () => q.getClientRects(),
              contextElement: q,
            }
          : q;
        (v(X), _.refs.setReference(X));
      },
      [_.refs]
    ),
    D = M.useCallback(
      (q) => {
        ((Ie(q) || q === null) && ((b.current = q), m(q)),
          (Ie(_.refs.reference.current) ||
            _.refs.reference.current === null ||
            (q !== null && !Ie(q))) &&
            _.refs.setReference(q));
      },
      [_.refs]
    ),
    k = M.useMemo(
      () => ({
        ..._.refs,
        setReference: D,
        setPositionReference: O,
        domReference: b,
      }),
      [_.refs, D, O]
    ),
    P = M.useMemo(() => ({ ..._.elements, domReference: p }), [_.elements, p]),
    G = M.useMemo(
      () => ({ ..._, ...c, refs: k, elements: P, nodeId: i }),
      [_, k, P, i, c]
    );
  return (
    nt(() => {
      c.dataRef.current.floatingContext = G;
      const q = x?.nodesRef.current.find((X) => X.id === i);
      q && (q.context = G);
    }),
    M.useMemo(() => ({ ..._, context: G, refs: k, elements: P }), [_, k, P, G])
  );
}
const zs = B1 && L1;
function mE(a, i = {}) {
  const { open: o, onOpenChange: c, events: s, dataRef: d, elements: m } = a,
    { enabled: h = !0, visibleOnly: v = !0 } = i,
    y = M.useRef(!1),
    p = ya(),
    b = M.useRef(!0);
  (M.useEffect(() => {
    if (!h) return;
    const _ = Nt(m.domReference);
    function O() {
      !o &&
        on(m.domReference) &&
        m.domReference === Ug(ha(m.domReference)) &&
        (y.current = !0);
    }
    function D() {
      b.current = !0;
    }
    function k() {
      b.current = !1;
    }
    return (
      _.addEventListener("blur", O),
      zs &&
        (_.addEventListener("keydown", D, !0),
        _.addEventListener("pointerdown", k, !0)),
      () => {
        (_.removeEventListener("blur", O),
          zs &&
            (_.removeEventListener("keydown", D, !0),
            _.removeEventListener("pointerdown", k, !0)));
      }
    );
  }, [m.domReference, o, h]),
    M.useEffect(() => {
      if (!h) return;
      function _(O) {
        (O.reason === "trigger-press" || O.reason === "escape-key") &&
          (y.current = !0);
      }
      return (
        s.on("openchange", _),
        () => {
          s.off("openchange", _);
        }
      );
    }, [s, h]));
  const x = M.useMemo(
    () => ({
      onMouseLeave() {
        y.current = !1;
      },
      onFocus(_) {
        if (y.current) return;
        const O = Bn(_.nativeEvent);
        if (v && Ie(O)) {
          if (zs && !_.relatedTarget) {
            if (!b.current && !Q1(O)) return;
          } else if (!Z1(O)) return;
        }
        c(!0, wt("trigger-focus", _.nativeEvent));
      },
      onBlur(_) {
        y.current = !1;
        const O = _.relatedTarget,
          D = _.nativeEvent,
          k =
            Ie(O) &&
            O.hasAttribute(io("focus-guard")) &&
            O.getAttribute("data-type") === "outside";
        p.start(0, () => {
          const P = Ug(
            m.domReference ? m.domReference.ownerDocument : document
          );
          (!O && P === m.domReference) ||
            Hn(d.current.floatingContext?.refs.floating.current, P) ||
            Hn(m.domReference, P) ||
            k ||
            c(!1, wt("trigger-focus", D));
        });
      },
    }),
    [d, m.domReference, c, v, p]
  );
  return M.useMemo(() => (h ? { reference: x } : {}), [h, x]);
}
function hE(a = []) {
  const i = a.map((h) => h?.reference),
    o = a.map((h) => h?.floating),
    c = a.map((h) => h?.item),
    s = M.useCallback((h) => Ds(h, a, "reference"), i),
    d = M.useCallback((h) => Ds(h, a, "floating"), o),
    m = M.useCallback((h) => Ds(h, a, "item"), c);
  return M.useMemo(
    () => ({ getReferenceProps: s, getFloatingProps: d, getItemProps: m }),
    [s, d, m]
  );
}
function Ds(a, i, o) {
  const c = new Map(),
    s = o === "item",
    d = {};
  o === "floating" && ((d.tabIndex = -1), (d[G1] = ""));
  for (const m in a) (s && a && (m === Xy || m === ky)) || (d[m] = a[m]);
  for (let m = 0; m < i.length; m += 1) {
    let h;
    const v = i[m]?.[o];
    (typeof v == "function" ? (h = a ? v(a) : null) : (h = v),
      h && Jg(d, h, s, c));
  }
  return (Jg(d, a, s, c), d);
}
function Jg(a, i, o, c) {
  for (const s in i) {
    const d = i[s];
    (o && (s === Xy || s === ky)) ||
      (s.startsWith("on")
        ? (c.has(s) || c.set(s, []),
          typeof d == "function" &&
            (c.get(s)?.push(d),
            (a[s] = (...m) =>
              c
                .get(s)
                ?.map((h) => h(...m))
                .find((h) => h !== void 0))))
        : (a[s] = d));
  }
}
function Fg(a, i) {
  const [o, c] = a;
  let s = !1;
  const d = i.length;
  for (let m = 0, h = d - 1; m < d; h = m++) {
    const [v, y] = i[m] || [0, 0],
      [p, b] = i[h] || [0, 0];
    y >= c != b >= c && o <= ((p - v) * (c - y)) / (b - y) + v && (s = !s);
  }
  return s;
}
function gE(a, i) {
  return (
    a[0] >= i.x &&
    a[0] <= i.x + i.width &&
    a[1] >= i.y &&
    a[1] <= i.y + i.height
  );
}
function yE(a = {}) {
  const {
      buffer: i = 0.5,
      blockPointerEvents: o = !1,
      requireIntent: c = !0,
    } = a,
    s = new mi();
  let d = !1,
    m = null,
    h = null,
    v = typeof performance < "u" ? performance.now() : 0;
  function y(b, x) {
    const _ = performance.now(),
      O = _ - v;
    if (m === null || h === null || O === 0)
      return ((m = b), (h = x), (v = _), null);
    const D = b - m,
      k = x - h,
      G = Math.sqrt(D * D + k * k) / O;
    return ((m = b), (h = x), (v = _), G);
  }
  const p = ({
    x: b,
    y: x,
    placement: _,
    elements: O,
    onClose: D,
    nodeId: k,
    tree: P,
  }) =>
    function (q) {
      function X() {
        (s.clear(), D());
      }
      if (
        (s.clear(),
        !O.domReference || !O.floating || _ == null || b == null || x == null)
      )
        return;
      const { clientX: ne, clientY: Z } = q,
        W = [ne, Z],
        $ = Bn(q),
        me = q.type === "mouseleave",
        ge = Hn(O.floating, $),
        se = Hn(O.domReference, $),
        Q = O.domReference.getBoundingClientRect(),
        B = O.floating.getBoundingClientRect(),
        te = _.split("-")[0],
        oe = b > B.right - B.width / 2,
        R = x > B.bottom - B.height / 2,
        w = gE(W, Q),
        C = B.width > Q.width,
        ue = B.height > Q.height,
        ce = (C ? Q : B).left,
        S = (C ? Q : B).right,
        L = (ue ? Q : B).top,
        J = (ue ? Q : B).bottom;
      if (ge && ((d = !0), !me)) return;
      if ((se && (d = !1), se && !me)) {
        d = !0;
        return;
      }
      if (
        (me && Ie(q.relatedTarget) && Hn(O.floating, q.relatedTarget)) ||
        (P && du(P.nodesRef.current, k).some(({ context: Y }) => Y?.open))
      )
        return;
      if (
        (te === "top" && x >= Q.bottom - 1) ||
        (te === "bottom" && x <= Q.top + 1) ||
        (te === "left" && b >= Q.right - 1) ||
        (te === "right" && b <= Q.left + 1)
      )
        return X();
      let ae = [];
      switch (te) {
        case "top":
          ae = [
            [ce, Q.top + 1],
            [ce, B.bottom - 1],
            [S, B.bottom - 1],
            [S, Q.top + 1],
          ];
          break;
        case "bottom":
          ae = [
            [ce, B.top + 1],
            [ce, Q.bottom - 1],
            [S, Q.bottom - 1],
            [S, B.top + 1],
          ];
          break;
        case "left":
          ae = [
            [B.right - 1, J],
            [B.right - 1, L],
            [Q.left + 1, L],
            [Q.left + 1, J],
          ];
          break;
        case "right":
          ae = [
            [Q.right - 1, J],
            [Q.right - 1, L],
            [B.left + 1, L],
            [B.left + 1, J],
          ];
          break;
      }
      function ye([Y, le]) {
        switch (te) {
          case "top": {
            const Ae = [C ? Y + i / 2 : oe ? Y + i * 4 : Y - i * 4, le + i + 1],
              fe = [C ? Y - i / 2 : oe ? Y + i * 4 : Y - i * 4, le + i + 1],
              Te = [
                [B.left, oe || C ? B.bottom - i : B.top],
                [B.right, oe ? (C ? B.bottom - i : B.top) : B.bottom - i],
              ];
            return [Ae, fe, ...Te];
          }
          case "bottom": {
            const Ae = [C ? Y + i / 2 : oe ? Y + i * 4 : Y - i * 4, le - i],
              fe = [C ? Y - i / 2 : oe ? Y + i * 4 : Y - i * 4, le - i],
              Te = [
                [B.left, oe || C ? B.top + i : B.bottom],
                [B.right, oe ? (C ? B.top + i : B.bottom) : B.top + i],
              ];
            return [Ae, fe, ...Te];
          }
          case "left": {
            const Ae = [
                Y + i + 1,
                ue ? le + i / 2 : R ? le + i * 4 : le - i * 4,
              ],
              fe = [Y + i + 1, ue ? le - i / 2 : R ? le + i * 4 : le - i * 4];
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
            const Ae = [Y - i, ue ? le + i / 2 : R ? le + i * 4 : le - i * 4],
              fe = [Y - i, ue ? le - i / 2 : R ? le + i * 4 : le - i * 4],
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
      if (!Fg([ne, Z], ae)) {
        if (d && !w) return X();
        if (!me && c) {
          const Y = y(q.clientX, q.clientY);
          if (Y !== null && Y < 0.1) return X();
        }
        Fg([ne, Z], ye([b, x])) ? !d && c && s.start(40, X) : X();
      }
    };
  return ((p.__options = { blockPointerEvents: o }), p);
}
let $g = (function (a) {
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
const ro = {
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
  mf = {
    valid(a) {
      return a === null ? null : a ? { [$g.valid]: "" } : { [$g.invalid]: "" };
    },
  },
  av = M.createContext({
    invalid: void 0,
    controlId: void 0,
    setControlId: On,
    labelId: void 0,
    setLabelId: On,
    messageIds: [],
    setMessageIds: On,
    name: void 0,
    validityData: {
      state: ro,
      errors: [],
      error: "",
      value: "",
      initialValue: null,
    },
    setValidityData: On,
    disabled: void 0,
    touched: !1,
    setTouched: On,
    dirty: !1,
    setDirty: On,
    filled: !1,
    setFilled: On,
    focused: !1,
    setFocused: On,
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
function yu(a = !0) {
  const i = M.useContext(av);
  if (i.setControlId === On && !a)
    throw new Error(
      "Base UI: FieldRootContext is missing. Field parts must be placed within <Field.Root>."
    );
  return i;
}
const vE = M.createContext({
  formRef: { current: { fields: new Map() } },
  errors: {},
  clearErrors: On,
});
function hf() {
  return M.useContext(vE);
}
function Ws(a, i) {
  return { ...a, state: { ...a.state, valid: !i && a.state.valid } };
}
const Qr = Object.keys(ro);
function pE(a) {
  if (!a || a.valid || !a.valueMissing) return !1;
  let i = !1;
  for (const o of Qr)
    o !== "valid" && (o === "valueMissing" && (i = a[o]), a[o] && (i = !1));
  return i;
}
function bE() {
  const {
      setValidityData: a,
      validate: i,
      messageIds: o,
      validityData: c,
      validationMode: s,
      validationDebounceTime: d,
      invalid: m,
      markedDirtyRef: h,
      controlId: v,
      state: y,
      name: p,
    } = yu(),
    { formRef: b, clearErrors: x } = hf(),
    _ = ya(),
    O = M.useRef(null),
    D = Ze(async (G, q = !1) => {
      const X = O.current;
      if (!X) return;
      if (q) {
        if (y.valid !== !1) return;
        const se = X.validity;
        if (!se.valueMissing) {
          const B = {
            value: G,
            state: { ...ro, valid: !0 },
            error: "",
            errors: [],
            initialValue: c.initialValue,
          };
          if ((X.setCustomValidity(""), v)) {
            const te = b.current.fields.get(v);
            te && b.current.fields.set(v, { ...te, ...Ws(B, !1) });
          }
          a(B);
          return;
        }
        const Q = Qr.reduce((B, te) => ((B[te] = se[te]), B), {});
        if (!Q.valid && !pE(Q)) return;
      }
      function ne(se) {
        const Q = Qr.reduce((te, oe) => ((te[oe] = se.validity[oe]), te), {});
        let B = !1;
        for (const te of Qr)
          if (te !== "valid") {
            if (te === "valueMissing" && Q[te]) B = !0;
            else if (Q[te]) return Q;
          }
        return (B && !h.current && ((Q.valid = !0), (Q.valueMissing = !1)), Q);
      }
      _.clear();
      let Z = null,
        W = [];
      const $ = ne(X);
      let me;
      if (X.validationMessage)
        ((me = X.validationMessage), (W = [X.validationMessage]));
      else {
        const se = Array.from(b.current.fields.values()).reduce(
            (B, te) => (
              te.name &&
                te.getValueRef &&
                (B[te.name] = te.getValueRef.current?.()),
              B
            ),
            {}
          ),
          Q = i(G, se);
        (typeof Q == "object" && Q !== null && "then" in Q
          ? (Z = await Q)
          : (Z = Q),
          Z !== null &&
            (($.valid = !1),
            ($.customError = !0),
            Array.isArray(Z)
              ? ((W = Z),
                X.setCustomValidity(
                  Z.join(`
`)
                ))
              : Z && ((W = [Z]), X.setCustomValidity(Z))));
      }
      const ge = {
        value: G,
        state: $,
        error: me ?? (Array.isArray(Z) ? Z[0] : (Z ?? "")),
        errors: W,
        initialValue: c.initialValue,
      };
      if (v) {
        const se = b.current.fields.get(v);
        se && b.current.fields.set(v, { ...se, ...Ws(ge, m) });
      }
      a(ge);
    }),
    k = M.useCallback(
      (G = {}) =>
        Qs(
          {
            ...(o.length && { "aria-describedby": o.join(" ") }),
            ...(y.valid === !1 && { "aria-invalid": !0 }),
          },
          G
        ),
      [o, y.valid]
    ),
    P = M.useCallback(
      (G = {}) =>
        Qs(
          {
            onChange(q) {
              if (q.nativeEvent.defaultPrevented) return;
              if ((x(p), s !== "onChange")) {
                D(q.currentTarget.value, !0);
                return;
              }
              if (m) return;
              const X = q.currentTarget;
              if (X.value === "") {
                D(X.value);
                return;
              }
              (_.clear(),
                d
                  ? _.start(d, () => {
                      D(X.value);
                    })
                  : D(X.value));
            },
          },
          k(G)
        ),
      [k, x, p, _, D, m, s, d]
    );
  return M.useMemo(
    () => ({
      getValidationProps: k,
      getInputValidationProps: P,
      inputRef: O,
      commitValidation: D,
    }),
    [k, P, D]
  );
}
function SE(a) {
  const { formRef: i } = hf(),
    {
      invalid: o,
      markedDirtyRef: c,
      validityData: s,
      setValidityData: d,
    } = yu(),
    {
      enabled: m = !0,
      value: h,
      id: v,
      name: y,
      controlRef: p,
      commitValidation: b,
    } = a,
    x = hl(a.getValue);
  (nt(() => {
    if (!m) return;
    let _ = h;
    (_ === void 0 && (_ = x.current?.()),
      s.initialValue === null &&
        _ !== s.initialValue &&
        d((O) => ({ ...O, initialValue: _ })));
  }, [m, d, h, s.initialValue, x]),
    nt(() => {
      m &&
        v &&
        i.current.fields.set(v, {
          controlRef: p,
          validityData: Ws(s, o),
          validate() {
            let _ = h;
            (_ === void 0 && (_ = x.current?.()),
              (c.current = !0),
              fi.flushSync(() => b(_)));
          },
          getValueRef: x,
          name: y,
        });
    }, [b, p, m, i, x, v, o, c, y, s, h]),
    nt(() => {
      const _ = i.current.fields;
      return () => {
        v && _.delete(v);
      };
    }, [i, v]));
}
const EE = (a) => ({
    name: "arrow",
    options: a,
    async fn(i) {
      const {
          x: o,
          y: c,
          placement: s,
          rects: d,
          platform: m,
          elements: h,
          middlewareData: v,
        } = i,
        {
          element: y,
          padding: p = 0,
          offsetParent: b = "real",
        } = vl(a, i) || {};
      if (y == null) return {};
      const x = Qy(p),
        _ = { x: o, y: c },
        O = of(s),
        D = rf(O),
        k = await m.getDimensions(y),
        P = O === "y",
        G = P ? "top" : "left",
        q = P ? "bottom" : "right",
        X = P ? "clientHeight" : "clientWidth",
        ne = d.reference[D] + d.reference[O] - _[O] - d.floating[D],
        Z = _[O] - d.reference[O],
        W = b === "real" ? await m.getOffsetParent?.(y) : h.floating;
      let $ = h.floating[X] || d.floating[D];
      (!$ || !(await m.isElement?.(W))) && ($ = h.floating[X] || d.floating[D]);
      const me = ne / 2 - Z / 2,
        ge = $ / 2 - k[D] / 2 - 1,
        se = Math.min(x[G], ge),
        Q = Math.min(x[q], ge),
        B = se,
        te = $ - k[D] - Q,
        oe = $ / 2 - k[D] / 2 + me,
        R = Fs(B, oe, te),
        w =
          !v.arrow &&
          Kl(s) != null &&
          oe !== R &&
          d.reference[D] / 2 - (oe < B ? se : Q) - k[D] / 2 < 0,
        C = w ? (oe < B ? oe - B : oe - te) : 0;
      return {
        [O]: _[O] + C,
        data: {
          [O]: R,
          centerOffset: oe - R - C,
          ...(w && { alignmentOffset: C }),
        },
        reset: w,
      };
    },
  }),
  AE = (a, i) => ({ ...EE(a), options: [a, i] });
function iv(a, i, o) {
  const c = a === "inline-start" || a === "inline-end";
  return {
    top: "top",
    right: c ? (o ? "inline-start" : "inline-end") : "right",
    bottom: "bottom",
    left: c ? (o ? "inline-end" : "inline-start") : "left",
  }[i];
}
function Wg(a, i, o) {
  const { rects: c, placement: s } = a;
  return {
    side: iv(i, rn(s), o),
    align: Kl(s) || "center",
    anchor: { width: c.reference.width, height: c.reference.height },
    positioner: { width: c.floating.width, height: c.floating.height },
  };
}
function xE(a) {
  const {
      anchor: i,
      positionMethod: o = "absolute",
      side: c = "bottom",
      sideOffset: s = 0,
      align: d = "center",
      alignOffset: m = 0,
      collisionBoundary: h,
      collisionPadding: v = 5,
      sticky: y = !1,
      arrowPadding: p = 5,
      trackAnchor: b = !0,
      keepMounted: x = !1,
      floatingRootContext: _,
      mounted: O,
      collisionAvoidance: D,
      shiftCrossAxis: k = !1,
      nodeId: P,
      adaptiveOrigin: G,
      lazyFlip: q = !1,
    } = a,
    [X, ne] = M.useState(null);
  !O && X !== null && ne(null);
  const Z = D.side || "flip",
    W = D.align || "flip",
    $ = D.fallbackAxisSide || "end",
    me = typeof i == "function" ? i : void 0,
    ge = Ze(me),
    se = me ? ge : i,
    Q = hl(i),
    te = Wb() === "rtl",
    oe =
      X ||
      {
        top: "top",
        right: "right",
        bottom: "bottom",
        left: "left",
        "inline-end": te ? "left" : "right",
        "inline-start": te ? "right" : "left",
      }[c],
    R = d === "center" ? oe : `${oe}-${d}`;
  let w = v;
  const C = 1,
    ue = c === "bottom" ? C : 0,
    ce = c === "top" ? C : 0,
    S = c === "right" ? C : 0,
    L = c === "left" ? C : 0;
  typeof w == "number"
    ? (w = { top: w + ue, right: w + L, bottom: w + ce, left: w + S })
    : w &&
      (w = {
        top: (w.top || 0) + ue,
        right: (w.right || 0) + L,
        bottom: (w.bottom || 0) + ce,
        left: (w.left || 0) + S,
      });
  const J = {
      boundary: h === "clipping-ancestors" ? "clippingAncestors" : h,
      padding: w,
    },
    ae = M.useRef(null),
    ye = hl(s),
    Y = hl(m),
    fe = [
      aE(
        (ze) => {
          const St = Wg(ze, c, te),
            Dt = typeof ye.current == "function" ? ye.current(St) : ye.current,
            Vt = typeof Y.current == "function" ? Y.current(St) : Y.current;
          return { mainAxis: Dt, crossAxis: Vt, alignmentAxis: Vt };
        },
        [typeof s != "function" ? s : 0, typeof m != "function" ? m : 0, te, c]
      ),
    ],
    Te = W === "none" && Z !== "shift",
    Ye = !Te && (y || k || Z === "shift"),
    qe =
      Z === "none"
        ? null
        : rE({
            ...J,
            padding: {
              top: w.top + C,
              right: w.right + C,
              bottom: w.bottom + C,
              left: w.left + C,
            },
            mainAxis: !k && Z === "flip",
            crossAxis: W === "flip" ? "alignment" : !1,
            fallbackAxisSideDirection: $,
          }),
    Qt = Te
      ? null
      : iE(
          (ze) => {
            const St = pS(ze.elements.floating).documentElement;
            return {
              ...J,
              rootBoundary: k
                ? { x: 0, y: 0, width: St.clientWidth, height: St.clientHeight }
                : void 0,
              mainAxis: W !== "none",
              crossAxis: Ye,
              limiter:
                y || k
                  ? void 0
                  : uE((Dt) => {
                      if (!ae.current) return {};
                      const { width: Vt, height: xn } =
                          ae.current.getBoundingClientRect(),
                        Tn = Sn(rn(Dt.placement)),
                        Xn = Tn === "y" ? Vt : xn,
                        _n = Tn === "y" ? w.left + w.right : w.top + w.bottom;
                      return { offset: Xn / 2 + _n / 2 };
                    }),
            };
          },
          [J, y, k, w, W]
        );
  (Z === "shift" || W === "shift" || d === "center"
    ? fe.push(Qt, qe)
    : fe.push(qe, Qt),
    fe.push(
      oE({
        ...J,
        apply({
          elements: { floating: ze },
          rects: { reference: St },
          availableWidth: Dt,
          availableHeight: Vt,
        }) {
          Object.entries({
            "--available-width": `${Dt}px`,
            "--available-height": `${Vt}px`,
            "--anchor-width": `${St.width}px`,
            "--anchor-height": `${St.height}px`,
          }).forEach(([xn, Tn]) => {
            ze.style.setProperty(xn, Tn);
          });
        },
      }),
      AE(
        () => ({
          element: ae.current || document.createElement("div"),
          padding: p,
          offsetParent: "floating",
        }),
        [p]
      ),
      cE(),
      {
        name: "transformOrigin",
        fn(ze) {
          const {
              elements: St,
              middlewareData: Dt,
              placement: Vt,
              rects: xn,
              y: Tn,
            } = ze,
            Xn = rn(Vt),
            _n = Sn(Xn),
            Jl = ae.current,
            Fl = Dt.arrow?.x || 0,
            so = Dt.arrow?.y || 0,
            Su = Jl?.clientWidth || 0,
            hi = Jl?.clientHeight || 0,
            kn = Fl + Su / 2,
            Eu = so + hi / 2,
            Au = Math.abs(Dt.shift?.y || 0),
            xu = xn.reference.height / 2,
            pl = typeof s == "function" ? s(Wg(ze, c, te)) : s,
            gi = Au > pl,
            yi = {
              top: `${kn}px calc(100% + ${pl}px)`,
              bottom: `${kn}px ${-pl}px`,
              left: `calc(100% + ${pl}px) ${Eu}px`,
              right: `${-pl}px ${Eu}px`,
            }[Xn],
            Tu = `${kn}px ${xn.reference.y + xu - Tn}px`;
          return (
            St.floating.style.setProperty(
              "--transform-origin",
              Ye && _n === "y" && gi ? Tu : yi
            ),
            {}
          );
        },
      },
      G
    ));
  let zt = _;
  !O &&
    _ &&
    (zt = {
      ..._,
      elements: { reference: null, floating: null, domReference: null },
    });
  const Zt = M.useMemo(
      () => ({
        elementResize: b && typeof ResizeObserver < "u",
        layoutShift: b && typeof IntersectionObserver < "u",
      }),
      [b]
    ),
    {
      refs: We,
      elements: Ct,
      x: Gn,
      y: An,
      middlewareData: A,
      update: U,
      placement: K,
      context: de,
      isPositioned: ie,
      floatingStyles: re,
    } = dE({
      rootContext: zt,
      placement: R,
      middleware: fe,
      strategy: o,
      whileElementsMounted: x ? void 0 : (...ze) => Qg(...ze, Zt),
      nodeId: P,
    }),
    { sideX: Ee, sideY: Le } = A.adaptiveOrigin || {},
    He = M.useMemo(
      () => (G ? { position: o, [Ee]: `${Gn}px`, [Le]: `${An}px` } : re),
      [G, Ee, Le, o, Gn, An, re]
    ),
    yt = M.useRef(null);
  (nt(() => {
    if (!O) return;
    const ze = Q.current,
      St = typeof ze == "function" ? ze() : ze,
      Vt = (Pg(St) ? St.current : St) || null || null;
    Vt !== yt.current && (We.setPositionReference(Vt), (yt.current = Vt));
  }, [O, We, se, Q]),
    M.useEffect(() => {
      if (!O) return;
      const ze = Q.current;
      typeof ze != "function" &&
        Pg(ze) &&
        ze.current !== yt.current &&
        (We.setPositionReference(ze.current), (yt.current = ze.current));
    }, [O, We, se, Q]),
    M.useEffect(() => {
      if (x && O && Ct.domReference && Ct.floating)
        return Qg(Ct.domReference, Ct.floating, U, Zt);
    }, [x, O, Ct, U, Zt]));
  const Kt = rn(K),
    Jt = iv(c, Kt, te),
    pa = Kl(K) || "center",
    cn = !!A.hide?.referenceHidden;
  nt(() => {
    q && O && ie && ne(Kt);
  }, [q, O, ie, Kt]);
  const ct = M.useMemo(
      () => ({ position: "absolute", top: A.arrow?.y, left: A.arrow?.x }),
      [A.arrow]
    ),
    Ft = A.arrow?.centerOffset !== 0;
  return M.useMemo(
    () => ({
      positionerStyles: He,
      arrowStyles: ct,
      arrowRef: ae,
      arrowUncentered: Ft,
      side: Jt,
      align: pa,
      physicalSide: Kt,
      anchorHidden: cn,
      refs: We,
      context: de,
      isPositioned: ie,
      update: U,
    }),
    [He, ct, ae, Ft, Jt, pa, Kt, cn, We, de, ie, U]
  );
}
function Pg(a) {
  return a != null && "current" in a;
}
const uv = M.createContext(void 0);
function TE() {
  const a = M.useContext(uv);
  if (a === void 0)
    throw new Error(
      "Base UI: AvatarRootContext is missing. Avatar parts must be placed within <Avatar.Root>."
    );
  return a;
}
const rv = { imageLoadingStatus: () => null },
  pA = M.forwardRef(function (i, o) {
    const { className: c, render: s, ...d } = i,
      [m, h] = M.useState("idle"),
      v = M.useMemo(() => ({ imageLoadingStatus: m }), [m]),
      y = M.useMemo(
        () => ({ imageLoadingStatus: m, setImageLoadingStatus: h }),
        [m, h]
      ),
      p = Yn("span", i, {
        state: v,
        ref: o,
        props: d,
        stateAttributesMapping: rv,
      });
    return Dn.jsx(uv.Provider, { value: y, children: p });
  });
function _E(a, { referrerPolicy: i, crossOrigin: o }) {
  const [c, s] = M.useState("idle");
  return (
    nt(() => {
      if (!a) return (s("error"), On);
      let d = !0;
      const m = new window.Image(),
        h = (v) => () => {
          d && s(v);
        };
      return (
        s("loading"),
        (m.onload = h("loaded")),
        (m.onerror = h("error")),
        i && (m.referrerPolicy = i),
        (m.crossOrigin = o ?? null),
        (m.src = a),
        () => {
          d = !1;
        }
      );
    }, [a, o, i]),
    c
  );
}
const bA = M.forwardRef(function (i, o) {
    const {
        className: c,
        render: s,
        onLoadingStatusChange: d,
        referrerPolicy: m,
        crossOrigin: h,
        ...v
      } = i,
      y = TE(),
      p = _E(i.src, { referrerPolicy: m, crossOrigin: h }),
      b = Ze((O) => {
        (d?.(O), y.setImageLoadingStatus(O));
      });
    nt(() => {
      p !== "idle" && b(p);
    }, [p, b]);
    const x = M.useMemo(() => ({ imageLoadingStatus: p }), [p]);
    return Yn("img", i, {
      state: x,
      ref: o,
      props: v,
      stateAttributesMapping: rv,
      enabled: p === "loaded",
    });
  }),
  RE = M.createContext({
    legendId: void 0,
    setLegendId: () => {},
    disabled: void 0,
  });
function ME() {
  return M.useContext(RE);
}
const SA = M.forwardRef(function (i, o) {
    const {
        render: c,
        className: s,
        validate: d,
        validationDebounceTime: m = 0,
        validationMode: h = "onBlur",
        name: v,
        disabled: y = !1,
        invalid: p,
        ...b
      } = i,
      { disabled: x } = ME(),
      { errors: _ } = hf(),
      O = Ze(d || (() => null)),
      D = x || y,
      [k, P] = M.useState(void 0),
      [G, q] = M.useState(void 0),
      [X, ne] = M.useState([]),
      [Z, W] = M.useState(!1),
      [$, me] = M.useState(!1),
      [ge, se] = M.useState(!1),
      [Q, B] = M.useState(!1),
      te = M.useRef(!1),
      oe = M.useCallback((J) => {
        (J && (te.current = !0), me(J));
      }, []),
      R = !!(p || (v && {}.hasOwnProperty.call(_, v) && _[v] !== void 0)),
      [w, C] = M.useState({
        state: ro,
        error: "",
        errors: [],
        value: null,
        initialValue: null,
      }),
      ue = !R && w.state.valid,
      ce = M.useMemo(
        () => ({
          disabled: D,
          touched: Z,
          dirty: $,
          valid: ue,
          filled: ge,
          focused: Q,
        }),
        [D, Z, $, ue, ge, Q]
      ),
      S = M.useMemo(
        () => ({
          invalid: R,
          controlId: k,
          setControlId: P,
          labelId: G,
          setLabelId: q,
          messageIds: X,
          setMessageIds: ne,
          name: v,
          validityData: w,
          setValidityData: C,
          disabled: D,
          touched: Z,
          setTouched: W,
          dirty: $,
          setDirty: oe,
          filled: ge,
          setFilled: se,
          focused: Q,
          setFocused: B,
          validate: O,
          validationMode: h,
          validationDebounceTime: m,
          state: ce,
          markedDirtyRef: te,
        }),
        [R, k, G, X, v, w, D, Z, $, oe, ge, se, Q, B, O, h, m, ce]
      ),
      L = Yn("div", i, {
        ref: o,
        state: ce,
        props: b,
        stateAttributesMapping: mf,
      });
    return Dn.jsx(av.Provider, { value: S, children: L });
  }),
  EA = M.forwardRef(function (i, o) {
    const { render: c, className: s, id: d, ...m } = i,
      { labelId: h, setLabelId: v, state: y, controlId: p } = yu(!1),
      b = qy(d),
      x = p ?? void 0;
    return (
      nt(
        () => (
          (p != null || d) && v(b),
          () => {
            v(void 0);
          }
        ),
        [p, b, d, v]
      ),
      Yn("label", i, {
        ref: o,
        state: y,
        props: [
          {
            id: h,
            htmlFor: x,
            onMouseDown(O) {
              Bn(O.nativeEvent)?.closest("button,input,select,textarea") ||
                (!O.defaultPrevented && O.detail > 1 && O.preventDefault());
            },
          },
          m,
        ],
        stateAttributesMapping: mf,
      })
    );
  }),
  AA = M.forwardRef(function (i, o) {
    const {
        render: c,
        className: s,
        id: d,
        name: m,
        value: h,
        disabled: v = !1,
        onValueChange: y,
        defaultValue: p,
        ...b
      } = i,
      { state: x, name: _, disabled: O } = yu(),
      D = O || v,
      k = _ ?? m,
      P = M.useMemo(() => ({ ...x, disabled: D }), [x, D]),
      {
        setControlId: G,
        labelId: q,
        setTouched: X,
        setDirty: ne,
        validityData: Z,
        setFocused: W,
        setFilled: $,
        validationMode: me,
      } = yu(),
      {
        getValidationProps: ge,
        getInputValidationProps: se,
        commitValidation: Q,
        inputRef: B,
      } = bE(),
      te = qy(d);
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
        const ce = h != null;
        B.current?.value || (ce && h !== "") ? $(!0) : ce && h === "" && $(!1);
      }, [B, $, h]));
    const [oe, R] = Dy({
        controlled: h,
        default: p,
        name: "FieldControl",
        state: "value",
      }),
      w = h !== void 0,
      C = Ze((ce, S) => {
        (y?.(ce, S), !S.isCanceled && R(ce));
      });
    return (
      SE({
        id: te,
        name: k,
        commitValidation: Q,
        value: oe,
        getValue: () => B.current?.value,
        controlRef: B,
      }),
      Yn("input", i, {
        ref: o,
        state: P,
        props: [
          {
            id: te,
            disabled: D,
            name: k,
            ref: B,
            "aria-labelledby": q,
            ...(w ? { value: oe } : { defaultValue: p }),
            onChange(ce) {
              const S = ce.currentTarget.value;
              (C(S, wt("none", ce.nativeEvent)),
                ne(S !== Z.initialValue),
                $(S !== ""));
            },
            onFocus() {
              W(!0);
            },
            onBlur(ce) {
              (X(!0), W(!1), me === "onBlur" && Q(ce.currentTarget.value));
            },
            onKeyDown(ce) {
              ce.currentTarget.tagName === "INPUT" &&
                ce.key === "Enter" &&
                (X(!0), Q(ce.currentTarget.value));
            },
          },
          ge(),
          se(),
          b,
        ],
        stateAttributesMapping: mf,
      })
    );
  });
function CE(a) {
  const i = ES({ root: a.root });
  return i && fi.createPortal(a.children, i);
}
const ov = M.createContext(void 0);
function oo() {
  const a = M.useContext(ov);
  if (a === void 0)
    throw new Error(
      "Base UI: TooltipRootContext is missing. Tooltip parts must be placed within <Tooltip.Root>."
    );
  return a;
}
const OE = 600,
  cv = M.createContext(void 0);
function wE() {
  return M.useContext(cv);
}
function xA(a) {
  const {
      disabled: i = !1,
      defaultOpen: o = !1,
      onOpenChange: c,
      open: s,
      delay: d,
      closeDelay: m,
      hoverable: h = !0,
      trackCursorAxis: v = "none",
      actionsRef: y,
      onOpenChangeComplete: p,
    } = a,
    b = d ?? OE,
    x = m ?? 0,
    [_, O] = M.useState(null),
    [D, k] = M.useState(null),
    [P, G] = M.useState(),
    q = M.useRef(null),
    [X, ne] = Dy({ controlled: s, default: o, name: "Tooltip", state: "open" }),
    Z = !i && X;
  function W(le, Ae) {
    const fe = Ae.reason,
      Te = fe === "trigger-hover",
      Ye = le && fe === "trigger-focus",
      qe = !le && (fe === "trigger-press" || fe === "escape-key");
    if ((c?.(le, Ae), Ae.isCanceled)) return;
    function Qt() {
      ne(le);
    }
    (Te ? fi.flushSync(Qt) : Qt(),
      Ye || qe
        ? G(Ye ? "focus" : "dismiss")
        : fe === "trigger-hover" && G(void 0));
  }
  const $ = Ze(W);
  X && i && W(!1, wt("disabled"));
  const { mounted: me, setMounted: ge, transitionStatus: se } = E1(Z),
    Q = Ze(() => {
      (ge(!1), p?.(!1));
    });
  (Zy({
    enabled: !y,
    open: Z,
    ref: q,
    onComplete() {
      Z || Q();
    },
  }),
    M.useImperativeHandle(y, () => ({ unmount: Q }), [Q]));
  const B = lv({
      elements: { reference: _, floating: D },
      open: Z,
      onOpenChange: $,
    }),
    te = wE(),
    { delayRef: oe, isInstantPhase: R, hasProvider: w } = vS(B),
    C = R ? "delay" : P,
    ue = gS(B, {
      enabled: !i,
      mouseOnly: !0,
      move: !1,
      handleClose: h && v !== "both" ? yE() : null,
      restMs() {
        const le = te?.delay,
          Ae = typeof oe.current == "object" ? oe.current.open : void 0;
        let fe = b;
        return (w && (Ae !== 0 ? (fe = d ?? le ?? b) : (fe = 0)), fe);
      },
      delay() {
        const le = typeof oe.current == "object" ? oe.current.close : void 0;
        let Ae = x;
        return (m == null && w && (Ae = le), { close: Ae });
      },
    }),
    ce = mE(B, { enabled: !i }),
    S = fE(B, { enabled: !i, referencePress: !0 }),
    L = xS(B, { enabled: !i && v !== "none", axis: v === "none" ? void 0 : v }),
    { getReferenceProps: J, getFloatingProps: ae } = hE([ue, ce, S, L]),
    ye = M.useMemo(
      () => ({
        open: Z,
        setOpen: $,
        mounted: me,
        setMounted: ge,
        setTriggerElement: O,
        positionerElement: D,
        setPositionerElement: k,
        popupRef: q,
        triggerProps: J(),
        popupProps: ae(),
        floatingRootContext: B,
        instantType: C,
        transitionStatus: se,
        onOpenChangeComplete: p,
      }),
      [Z, $, me, ge, O, D, k, q, J, ae, B, C, se, p]
    ),
    Y = M.useMemo(
      () => ({
        ...ye,
        delay: b,
        closeDelay: x,
        trackCursorAxis: v,
        hoverable: h,
      }),
      [ye, b, x, v, h]
    );
  return Dn.jsx(ov.Provider, { value: Y, children: a.children });
}
const TA = M.forwardRef(function (i, o) {
    const { className: c, render: s, ...d } = i,
      { open: m, setTriggerElement: h, triggerProps: v } = oo(),
      y = M.useMemo(() => ({ open: m }), [m]);
    return Yn("button", i, {
      state: y,
      ref: [o, h],
      props: [v, d],
      stateAttributesMapping: fS,
    });
  }),
  sv = M.createContext(void 0);
function zE() {
  const a = M.useContext(sv);
  if (a === void 0) throw new Error("Base UI: <Tooltip.Portal> is missing.");
  return a;
}
function _A(a) {
  const { children: i, keepMounted: o = !1, container: c } = a,
    { mounted: s } = oo();
  return s || o
    ? Dn.jsx(sv.Provider, {
        value: o,
        children: Dn.jsx(CE, { root: c, children: i }),
      })
    : null;
}
const fv = M.createContext(void 0);
function dv() {
  const a = M.useContext(fv);
  if (a === void 0)
    throw new Error(
      "Base UI: TooltipPositionerContext is missing. TooltipPositioner parts must be placed within <Tooltip.Positioner>."
    );
  return a;
}
const RA = M.forwardRef(function (i, o) {
    const {
        render: c,
        className: s,
        anchor: d,
        positionMethod: m = "absolute",
        side: h = "top",
        align: v = "center",
        sideOffset: y = 0,
        alignOffset: p = 0,
        collisionBoundary: b = "clipping-ancestors",
        collisionPadding: x = 5,
        arrowPadding: _ = 5,
        sticky: O = !1,
        trackAnchor: D = !0,
        collisionAvoidance: k = Fb,
        ...P
      } = i,
      {
        open: G,
        setPositionerElement: q,
        mounted: X,
        floatingRootContext: ne,
        trackCursorAxis: Z,
        hoverable: W,
      } = oo(),
      $ = zE(),
      me = xE({
        anchor: d,
        positionMethod: m,
        floatingRootContext: ne,
        mounted: X,
        side: h,
        sideOffset: y,
        align: v,
        alignOffset: p,
        collisionBoundary: b,
        collisionPadding: x,
        sticky: O,
        arrowPadding: _,
        trackAnchor: D,
        keepMounted: $,
        collisionAvoidance: k,
      }),
      ge = M.useMemo(() => {
        const oe = {};
        return (
          (!G || Z === "both" || !W) && (oe.pointerEvents = "none"),
          {
            role: "presentation",
            hidden: !X,
            style: { ...me.positionerStyles, ...oe },
          }
        );
      }, [G, Z, W, X, me.positionerStyles]),
      se = M.useMemo(() => ({ props: ge, ...me }), [ge, me]),
      Q = M.useMemo(
        () => ({
          open: G,
          side: se.side,
          align: se.align,
          anchorHidden: se.anchorHidden,
        }),
        [G, se.side, se.align, se.anchorHidden]
      ),
      B = M.useMemo(
        () => ({
          ...Q,
          arrowRef: se.arrowRef,
          arrowStyles: se.arrowStyles,
          arrowUncentered: se.arrowUncentered,
        }),
        [Q, se.arrowRef, se.arrowStyles, se.arrowUncentered]
      ),
      te = Yn("div", i, {
        state: Q,
        props: [se.props, P],
        ref: [o, q],
        stateAttributesMapping: sf,
      });
    return Dn.jsx(fv.Provider, { value: B, children: te });
  }),
  DE = { ...sf, ...T1 },
  MA = M.forwardRef(function (i, o) {
    const { className: c, render: s, ...d } = i,
      {
        open: m,
        instantType: h,
        transitionStatus: v,
        popupProps: y,
        popupRef: p,
        onOpenChangeComplete: b,
      } = oo(),
      { side: x, align: _ } = dv();
    Zy({
      open: m,
      ref: p,
      onComplete() {
        m && b?.(!0);
      },
    });
    const O = M.useMemo(
      () => ({ open: m, side: x, align: _, instant: h, transitionStatus: v }),
      [m, x, _, h, v]
    );
    return Yn("div", i, {
      state: O,
      ref: [o, p],
      props: [y, v === "starting" ? Jb : Ql, d],
      stateAttributesMapping: DE,
    });
  }),
  CA = M.forwardRef(function (i, o) {
    const { className: c, render: s, ...d } = i,
      {
        open: m,
        arrowRef: h,
        side: v,
        align: y,
        arrowUncentered: p,
        arrowStyles: b,
      } = dv(),
      x = M.useMemo(
        () => ({ open: m, side: v, align: y, uncentered: p }),
        [m, v, y, p]
      );
    return Yn("div", i, {
      state: x,
      ref: [o, h],
      props: [{ style: b, "aria-hidden": !0 }, d],
      stateAttributesMapping: sf,
    });
  }),
  OA = function (i) {
    const { delay: o, closeDelay: c, timeout: s = 400 } = i,
      d = M.useMemo(() => ({ delay: o, closeDelay: c }), [o, c]),
      m = M.useMemo(() => ({ open: o, close: c }), [o, c]);
    return Dn.jsx(cv.Provider, {
      value: d,
      children: Dn.jsx(yS, { delay: m, timeoutMs: s, children: i.children }),
    });
  };
function wA(a) {
  return Yn(a.defaultTagName ?? "div", a, a);
}
var bu = (a) => a.type === "checkbox",
  ga = (a) => a instanceof Date,
  kt = (a) => a == null;
const mv = (a) => typeof a == "object";
var gt = (a) => !kt(a) && !Array.isArray(a) && mv(a) && !ga(a),
  hv = (a) =>
    gt(a) && a.target ? (bu(a.target) ? a.target.checked : a.target.value) : a,
  UE = (a) => a.substring(0, a.search(/\.\d+(\.|$)/)) || a,
  gv = (a, i) => a.has(UE(i)),
  NE = (a) => {
    const i = a.constructor && a.constructor.prototype;
    return gt(i) && i.hasOwnProperty("isPrototypeOf");
  },
  gf =
    typeof window < "u" &&
    typeof window.HTMLElement < "u" &&
    typeof document < "u";
function bt(a) {
  let i;
  const o = Array.isArray(a),
    c = typeof FileList < "u" ? a instanceof FileList : !1;
  if (a instanceof Date) i = new Date(a);
  else if (!(gf && (a instanceof Blob || c)) && (o || gt(a)))
    if (((i = o ? [] : Object.create(Object.getPrototypeOf(a))), !o && !NE(a)))
      i = a;
    else for (const s in a) a.hasOwnProperty(s) && (i[s] = bt(a[s]));
  else return a;
  return i;
}
var co = (a) => /^\w*$/.test(a),
  ut = (a) => a === void 0,
  yf = (a) => (Array.isArray(a) ? a.filter(Boolean) : []),
  vf = (a) => yf(a.replace(/["|']|\]/g, "").split(/\.|\[/)),
  he = (a, i, o) => {
    if (!i || !gt(a)) return o;
    const c = (co(i) ? [i] : vf(i)).reduce((s, d) => (kt(s) ? s : s[d]), a);
    return ut(c) || c === a ? (ut(a[i]) ? o : a[i]) : c;
  },
  ln = (a) => typeof a == "boolean",
  Pe = (a, i, o) => {
    let c = -1;
    const s = co(i) ? [i] : vf(i),
      d = s.length,
      m = d - 1;
    for (; ++c < d; ) {
      const h = s[c];
      let v = o;
      if (c !== m) {
        const y = a[h];
        v = gt(y) || Array.isArray(y) ? y : isNaN(+s[c + 1]) ? {} : [];
      }
      if (h === "__proto__" || h === "constructor" || h === "prototype") return;
      ((a[h] = v), (a = a[h]));
    }
  };
const Pr = { BLUR: "blur", FOCUS_OUT: "focusout", CHANGE: "change" },
  wn = {
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
  pf = we.createContext(null);
pf.displayName = "HookFormContext";
const bf = () => we.useContext(pf),
  zA = (a) => {
    const { children: i, ...o } = a;
    return we.createElement(pf.Provider, { value: o }, i);
  };
var yv = (a, i, o, c = !0) => {
  const s = { defaultValues: i._defaultValues };
  for (const d in a)
    Object.defineProperty(s, d, {
      get: () => {
        const m = d;
        return (
          i._proxyFormState[m] !== wn.all &&
            (i._proxyFormState[m] = !c || wn.all),
          o && (o[m] = !0),
          a[m]
        );
      },
    });
  return s;
};
const Sf = typeof window < "u" ? we.useLayoutEffect : we.useEffect;
function VE(a) {
  const i = bf(),
    { control: o = i.control, disabled: c, name: s, exact: d } = a || {},
    [m, h] = we.useState(o._formState),
    v = we.useRef({
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
    Sf(
      () =>
        o._subscribe({
          name: s,
          formState: v.current,
          exact: d,
          callback: (y) => {
            !c && h({ ...o._formState, ...y });
          },
        }),
      [s, c, d]
    ),
    we.useEffect(() => {
      v.current.isValid && o._setValid(!0);
    }, [o]),
    we.useMemo(() => yv(m, o, v.current, !1), [m, o])
  );
}
var un = (a) => typeof a == "string",
  vv = (a, i, o, c, s) =>
    un(a)
      ? (c && i.watch.add(a), he(o, a, s))
      : Array.isArray(a)
        ? a.map((d) => (c && i.watch.add(d), he(o, d)))
        : (c && (i.watchAll = !0), o),
  Ps = (a) => kt(a) || !mv(a);
function ml(a, i, o = new WeakSet()) {
  if (Ps(a) || Ps(i)) return a === i;
  if (ga(a) && ga(i)) return a.getTime() === i.getTime();
  const c = Object.keys(a),
    s = Object.keys(i);
  if (c.length !== s.length) return !1;
  if (o.has(a) || o.has(i)) return !0;
  (o.add(a), o.add(i));
  for (const d of c) {
    const m = a[d];
    if (!s.includes(d)) return !1;
    if (d !== "ref") {
      const h = i[d];
      if (
        (ga(m) && ga(h)) ||
        (gt(m) && gt(h)) ||
        (Array.isArray(m) && Array.isArray(h))
          ? !ml(m, h, o)
          : m !== h
      )
        return !1;
    }
  }
  return !0;
}
function LE(a) {
  const i = bf(),
    {
      control: o = i.control,
      name: c,
      defaultValue: s,
      disabled: d,
      exact: m,
      compute: h,
    } = a || {},
    v = we.useRef(s),
    y = we.useRef(h),
    p = we.useRef(void 0);
  y.current = h;
  const b = we.useMemo(() => o._getWatch(c, v.current), [o, c]),
    [x, _] = we.useState(y.current ? y.current(b) : b);
  return (
    Sf(
      () =>
        o._subscribe({
          name: c,
          formState: { values: !0 },
          exact: m,
          callback: (O) => {
            if (!d) {
              const D = vv(
                c,
                o._names,
                O.values || o._formValues,
                !1,
                v.current
              );
              if (y.current) {
                const k = y.current(D);
                ml(k, p.current) || (_(k), (p.current = k));
              } else _(D);
            }
          },
        }),
      [o, d, c, m]
    ),
    we.useEffect(() => o._removeUnmounted()),
    x
  );
}
function BE(a) {
  const i = bf(),
    {
      name: o,
      disabled: c,
      control: s = i.control,
      shouldUnregister: d,
      defaultValue: m,
    } = a,
    h = gv(s._names.array, o),
    v = we.useMemo(
      () => he(s._formValues, o, he(s._defaultValues, o, m)),
      [s, o, m]
    ),
    y = LE({ control: s, name: o, defaultValue: v, exact: !0 }),
    p = VE({ control: s, name: o, exact: !0 }),
    b = we.useRef(a),
    x = we.useRef(void 0),
    _ = we.useRef(
      s.register(o, {
        ...a.rules,
        value: y,
        ...(ln(a.disabled) ? { disabled: a.disabled } : {}),
      })
    );
  b.current = a;
  const O = we.useMemo(
      () =>
        Object.defineProperties(
          {},
          {
            invalid: { enumerable: !0, get: () => !!he(p.errors, o) },
            isDirty: { enumerable: !0, get: () => !!he(p.dirtyFields, o) },
            isTouched: { enumerable: !0, get: () => !!he(p.touchedFields, o) },
            isValidating: {
              enumerable: !0,
              get: () => !!he(p.validatingFields, o),
            },
            error: { enumerable: !0, get: () => he(p.errors, o) },
          }
        ),
      [p, o]
    ),
    D = we.useCallback(
      (q) =>
        _.current.onChange({
          target: { value: hv(q), name: o },
          type: Pr.CHANGE,
        }),
      [o]
    ),
    k = we.useCallback(
      () =>
        _.current.onBlur({
          target: { value: he(s._formValues, o), name: o },
          type: Pr.BLUR,
        }),
      [o, s._formValues]
    ),
    P = we.useCallback(
      (q) => {
        const X = he(s._fields, o);
        X &&
          q &&
          (X._f.ref = {
            focus: () => q.focus && q.focus(),
            select: () => q.select && q.select(),
            setCustomValidity: (ne) => q.setCustomValidity(ne),
            reportValidity: () => q.reportValidity(),
          });
      },
      [s._fields, o]
    ),
    G = we.useMemo(
      () => ({
        name: o,
        value: y,
        ...(ln(c) || p.disabled ? { disabled: p.disabled || c } : {}),
        onChange: D,
        onBlur: k,
        ref: P,
      }),
      [o, c, p.disabled, D, k, P, y]
    );
  return (
    we.useEffect(() => {
      const q = s._options.shouldUnregister || d,
        X = x.current;
      (X && X !== o && !h && s.unregister(X),
        s.register(o, {
          ...b.current.rules,
          ...(ln(b.current.disabled) ? { disabled: b.current.disabled } : {}),
        }));
      const ne = (Z, W) => {
        const $ = he(s._fields, Z);
        $ && $._f && ($._f.mount = W);
      };
      if ((ne(o, !0), q)) {
        const Z = bt(he(s._options.defaultValues, o, b.current.defaultValue));
        (Pe(s._defaultValues, o, Z),
          ut(he(s._formValues, o)) && Pe(s._formValues, o, Z));
      }
      return (
        !h && s.register(o),
        (x.current = o),
        () => {
          (h ? q && !s._state.action : q) ? s.unregister(o) : ne(o, !1);
        }
      );
    }, [o, s, h, d]),
    we.useEffect(() => {
      s._setDisabledField({ disabled: c, name: o });
    }, [c, o, s]),
    we.useMemo(() => ({ field: G, formState: p, fieldState: O }), [G, p, O])
  );
}
const DA = (a) => a.render(BE(a));
var HE = (a, i, o, c, s) =>
    i
      ? {
          ...o[a],
          types: { ...(o[a] && o[a].types ? o[a].types : {}), [c]: s || !0 },
        }
      : {},
  mu = (a) => (Array.isArray(a) ? a : [a]),
  Ig = () => {
    let a = [];
    return {
      get observers() {
        return a;
      },
      next: (s) => {
        for (const d of a) d.next && d.next(s);
      },
      subscribe: (s) => (
        a.push(s),
        {
          unsubscribe: () => {
            a = a.filter((d) => d !== s);
          },
        }
      ),
      unsubscribe: () => {
        a = [];
      },
    };
  };
function pv(a, i) {
  const o = {};
  for (const c in a)
    if (a.hasOwnProperty(c)) {
      const s = a[c],
        d = i[c];
      if (s && gt(s) && d) {
        const m = pv(s, d);
        gt(m) && (o[c] = m);
      } else a[c] && (o[c] = d);
    }
  return o;
}
var Xt = (a) => gt(a) && !Object.keys(a).length,
  Ef = (a) => a.type === "file",
  zn = (a) => typeof a == "function",
  Ir = (a) => {
    if (!gf) return !1;
    const i = a ? a.ownerDocument : 0;
    return (
      a instanceof
      (i && i.defaultView ? i.defaultView.HTMLElement : HTMLElement)
    );
  },
  bv = (a) => a.type === "select-multiple",
  Af = (a) => a.type === "radio",
  qE = (a) => Af(a) || bu(a),
  Us = (a) => Ir(a) && a.isConnected;
function YE(a, i) {
  const o = i.slice(0, -1).length;
  let c = 0;
  for (; c < o; ) a = ut(a) ? c++ : a[i[c++]];
  return a;
}
function jE(a) {
  for (const i in a) if (a.hasOwnProperty(i) && !ut(a[i])) return !1;
  return !0;
}
function ht(a, i) {
  const o = Array.isArray(i) ? i : co(i) ? [i] : vf(i),
    c = o.length === 1 ? a : YE(a, o),
    s = o.length - 1,
    d = o[s];
  return (
    c && delete c[d],
    s !== 0 &&
      ((gt(c) && Xt(c)) || (Array.isArray(c) && jE(c))) &&
      ht(a, o.slice(0, -1)),
    a
  );
}
var GE = (a) => {
  for (const i in a) if (zn(a[i])) return !0;
  return !1;
};
function Sv(a) {
  return Array.isArray(a) || (gt(a) && !GE(a));
}
function Is(a, i = {}) {
  for (const o in a)
    Sv(a[o])
      ? ((i[o] = Array.isArray(a[o]) ? [] : {}), Is(a[o], i[o]))
      : ut(a[o]) || (i[o] = !0);
  return i;
}
function ii(a, i, o) {
  o || (o = Is(i));
  for (const c in a)
    Sv(a[c])
      ? ut(i) || Ps(o[c])
        ? (o[c] = Is(a[c], Array.isArray(a[c]) ? [] : {}))
        : ii(a[c], kt(i) ? {} : i[c], o[c])
      : (o[c] = !ml(a[c], i[c]));
  return o;
}
const ey = { value: !1, isValid: !1 },
  ty = { value: !0, isValid: !0 };
var Ev = (a) => {
    if (Array.isArray(a)) {
      if (a.length > 1) {
        const i = a
          .filter((o) => o && o.checked && !o.disabled)
          .map((o) => o.value);
        return { value: i, isValid: !!i.length };
      }
      return a[0].checked && !a[0].disabled
        ? a[0].attributes && !ut(a[0].attributes.value)
          ? ut(a[0].value) || a[0].value === ""
            ? ty
            : { value: a[0].value, isValid: !0 }
          : ty
        : ey;
    }
    return ey;
  },
  Av = (a, { valueAsNumber: i, valueAsDate: o, setValueAs: c }) =>
    ut(a)
      ? a
      : i
        ? a === ""
          ? NaN
          : a && +a
        : o && un(a)
          ? new Date(a)
          : c
            ? c(a)
            : a;
const ny = { isValid: !1, value: null };
var xv = (a) =>
  Array.isArray(a)
    ? a.reduce(
        (i, o) =>
          o && o.checked && !o.disabled ? { isValid: !0, value: o.value } : i,
        ny
      )
    : ny;
function ly(a) {
  const i = a.ref;
  return Ef(i)
    ? i.files
    : Af(i)
      ? xv(a.refs).value
      : bv(i)
        ? [...i.selectedOptions].map(({ value: o }) => o)
        : bu(i)
          ? Ev(a.refs).value
          : Av(ut(i.value) ? a.ref.value : i.value, a);
}
var XE = (a, i, o, c) => {
    const s = {};
    for (const d of a) {
      const m = he(i, d);
      m && Pe(s, d, m._f);
    }
    return {
      criteriaMode: o,
      names: [...a],
      fields: s,
      shouldUseNativeValidation: c,
    };
  },
  eo = (a) => a instanceof RegExp,
  cu = (a) =>
    ut(a)
      ? a
      : eo(a)
        ? a.source
        : gt(a)
          ? eo(a.value)
            ? a.value.source
            : a.value
          : a,
  ay = (a) => ({
    isOnSubmit: !a || a === wn.onSubmit,
    isOnBlur: a === wn.onBlur,
    isOnChange: a === wn.onChange,
    isOnAll: a === wn.all,
    isOnTouch: a === wn.onTouched,
  });
const iy = "AsyncFunction";
var kE = (a) =>
    !!a &&
    !!a.validate &&
    !!(
      (zn(a.validate) && a.validate.constructor.name === iy) ||
      (gt(a.validate) &&
        Object.values(a.validate).find((i) => i.constructor.name === iy))
    ),
  QE = (a) =>
    a.mount &&
    (a.required ||
      a.min ||
      a.max ||
      a.maxLength ||
      a.minLength ||
      a.pattern ||
      a.validate),
  uy = (a, i, o) =>
    !o &&
    (i.watchAll ||
      i.watch.has(a) ||
      [...i.watch].some(
        (c) => a.startsWith(c) && /^\.\w+/.test(a.slice(c.length))
      ));
const hu = (a, i, o, c) => {
  for (const s of o || Object.keys(a)) {
    const d = he(a, s);
    if (d) {
      const { _f: m, ...h } = d;
      if (m) {
        if (m.refs && m.refs[0] && i(m.refs[0], s) && !c) return !0;
        if (m.ref && i(m.ref, m.name) && !c) return !0;
        if (hu(h, i)) break;
      } else if (gt(h) && hu(h, i)) break;
    }
  }
};
function ry(a, i, o) {
  const c = he(a, o);
  if (c || co(o)) return { error: c, name: o };
  const s = o.split(".");
  for (; s.length; ) {
    const d = s.join("."),
      m = he(i, d),
      h = he(a, d);
    if (m && !Array.isArray(m) && o !== d) return { name: o };
    if (h && h.type) return { name: d, error: h };
    if (h && h.root && h.root.type) return { name: `${d}.root`, error: h.root };
    s.pop();
  }
  return { name: o };
}
var ZE = (a, i, o, c) => {
    o(a);
    const { name: s, ...d } = a;
    return (
      Xt(d) ||
      Object.keys(d).length >= Object.keys(i).length ||
      Object.keys(d).find((m) => i[m] === (!c || wn.all))
    );
  },
  KE = (a, i, o) =>
    !a ||
    !i ||
    a === i ||
    mu(a).some((c) => c && (o ? c === i : c.startsWith(i) || i.startsWith(c))),
  JE = (a, i, o, c, s) =>
    s.isOnAll
      ? !1
      : !o && s.isOnTouch
        ? !(i || a)
        : (o ? c.isOnBlur : s.isOnBlur)
          ? !a
          : (o ? c.isOnChange : s.isOnChange)
            ? a
            : !0,
  FE = (a, i) => !yf(he(a, i)).length && ht(a, i),
  $E = (a, i, o) => {
    const c = mu(he(a, o));
    return (Pe(c, "root", i[o]), Pe(a, o, c), a);
  };
function oy(a, i, o = "validate") {
  if (un(a) || (Array.isArray(a) && a.every(un)) || (ln(a) && !a))
    return { type: o, message: un(a) ? a : "", ref: i };
}
var ai = (a) => (gt(a) && !eo(a) ? a : { value: a, message: "" }),
  cy = async (a, i, o, c, s, d) => {
    const {
        ref: m,
        refs: h,
        required: v,
        maxLength: y,
        minLength: p,
        min: b,
        max: x,
        pattern: _,
        validate: O,
        name: D,
        valueAsNumber: k,
        mount: P,
      } = a._f,
      G = he(o, D);
    if (!P || i.has(D)) return {};
    const q = h ? h[0] : m,
      X = (Q) => {
        s &&
          q.reportValidity &&
          (q.setCustomValidity(ln(Q) ? "" : Q || ""), q.reportValidity());
      },
      ne = {},
      Z = Af(m),
      W = bu(m),
      $ = Z || W,
      me =
        ((k || Ef(m)) && ut(m.value) && ut(G)) ||
        (Ir(m) && m.value === "") ||
        G === "" ||
        (Array.isArray(G) && !G.length),
      ge = HE.bind(null, D, c, ne),
      se = (Q, B, te, oe = fl.maxLength, R = fl.minLength) => {
        const w = Q ? B : te;
        ne[D] = { type: Q ? oe : R, message: w, ref: m, ...ge(Q ? oe : R, w) };
      };
    if (
      d
        ? !Array.isArray(G) || !G.length
        : v &&
          ((!$ && (me || kt(G))) ||
            (ln(G) && !G) ||
            (W && !Ev(h).isValid) ||
            (Z && !xv(h).isValid))
    ) {
      const { value: Q, message: B } = un(v)
        ? { value: !!v, message: v }
        : ai(v);
      if (
        Q &&
        ((ne[D] = {
          type: fl.required,
          message: B,
          ref: q,
          ...ge(fl.required, B),
        }),
        !c)
      )
        return (X(B), ne);
    }
    if (!me && (!kt(b) || !kt(x))) {
      let Q, B;
      const te = ai(x),
        oe = ai(b);
      if (!kt(G) && !isNaN(G)) {
        const R = m.valueAsNumber || (G && +G);
        (kt(te.value) || (Q = R > te.value),
          kt(oe.value) || (B = R < oe.value));
      } else {
        const R = m.valueAsDate || new Date(G),
          w = (ce) => new Date(new Date().toDateString() + " " + ce),
          C = m.type == "time",
          ue = m.type == "week";
        (un(te.value) &&
          G &&
          (Q = C
            ? w(G) > w(te.value)
            : ue
              ? G > te.value
              : R > new Date(te.value)),
          un(oe.value) &&
            G &&
            (B = C
              ? w(G) < w(oe.value)
              : ue
                ? G < oe.value
                : R < new Date(oe.value)));
      }
      if ((Q || B) && (se(!!Q, te.message, oe.message, fl.max, fl.min), !c))
        return (X(ne[D].message), ne);
    }
    if ((y || p) && !me && (un(G) || (d && Array.isArray(G)))) {
      const Q = ai(y),
        B = ai(p),
        te = !kt(Q.value) && G.length > +Q.value,
        oe = !kt(B.value) && G.length < +B.value;
      if ((te || oe) && (se(te, Q.message, B.message), !c))
        return (X(ne[D].message), ne);
    }
    if (_ && !me && un(G)) {
      const { value: Q, message: B } = ai(_);
      if (
        eo(Q) &&
        !G.match(Q) &&
        ((ne[D] = {
          type: fl.pattern,
          message: B,
          ref: m,
          ...ge(fl.pattern, B),
        }),
        !c)
      )
        return (X(B), ne);
    }
    if (O) {
      if (zn(O)) {
        const Q = await O(G, o),
          B = oy(Q, q);
        if (B && ((ne[D] = { ...B, ...ge(fl.validate, B.message) }), !c))
          return (X(B.message), ne);
      } else if (gt(O)) {
        let Q = {};
        for (const B in O) {
          if (!Xt(Q) && !c) break;
          const te = oy(await O[B](G, o), q, B);
          te &&
            ((Q = { ...te, ...ge(B, te.message) }),
            X(te.message),
            c && (ne[D] = Q));
        }
        if (!Xt(Q) && ((ne[D] = { ref: q, ...Q }), !c)) return ne;
      }
    }
    return (X(!0), ne);
  };
const WE = {
  mode: wn.onSubmit,
  reValidateMode: wn.onChange,
  shouldFocusError: !0,
};
function PE(a = {}) {
  let i = { ...WE, ...a },
    o = {
      submitCount: 0,
      isDirty: !1,
      isReady: !1,
      isLoading: zn(i.defaultValues),
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
    c = {},
    s =
      gt(i.defaultValues) || gt(i.values)
        ? bt(i.defaultValues || i.values) || {}
        : {},
    d = i.shouldUnregister ? {} : bt(s),
    m = { action: !1, mount: !1, watch: !1 },
    h = {
      mount: new Set(),
      disabled: new Set(),
      unMount: new Set(),
      array: new Set(),
      watch: new Set(),
    },
    v,
    y = 0;
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
  const x = { array: Ig(), state: Ig() },
    _ = i.criteriaMode === wn.all,
    O = (A) => (U) => {
      (clearTimeout(y), (y = setTimeout(A, U)));
    },
    D = async (A) => {
      if (!i.disabled && (p.isValid || b.isValid || A)) {
        const U = i.resolver ? Xt((await W()).errors) : await me(c, !0);
        U !== o.isValid && x.state.next({ isValid: U });
      }
    },
    k = (A, U) => {
      !i.disabled &&
        (p.isValidating ||
          p.validatingFields ||
          b.isValidating ||
          b.validatingFields) &&
        ((A || Array.from(h.mount)).forEach((K) => {
          K && (U ? Pe(o.validatingFields, K, U) : ht(o.validatingFields, K));
        }),
        x.state.next({
          validatingFields: o.validatingFields,
          isValidating: !Xt(o.validatingFields),
        }));
    },
    P = (A, U = [], K, de, ie = !0, re = !0) => {
      if (de && K && !i.disabled) {
        if (((m.action = !0), re && Array.isArray(he(c, A)))) {
          const Ee = K(he(c, A), de.argA, de.argB);
          ie && Pe(c, A, Ee);
        }
        if (re && Array.isArray(he(o.errors, A))) {
          const Ee = K(he(o.errors, A), de.argA, de.argB);
          (ie && Pe(o.errors, A, Ee), FE(o.errors, A));
        }
        if (
          (p.touchedFields || b.touchedFields) &&
          re &&
          Array.isArray(he(o.touchedFields, A))
        ) {
          const Ee = K(he(o.touchedFields, A), de.argA, de.argB);
          ie && Pe(o.touchedFields, A, Ee);
        }
        ((p.dirtyFields || b.dirtyFields) && (o.dirtyFields = ii(s, d)),
          x.state.next({
            name: A,
            isDirty: se(A, U),
            dirtyFields: o.dirtyFields,
            errors: o.errors,
            isValid: o.isValid,
          }));
      } else Pe(d, A, U);
    },
    G = (A, U) => {
      (Pe(o.errors, A, U), x.state.next({ errors: o.errors }));
    },
    q = (A) => {
      ((o.errors = A), x.state.next({ errors: o.errors, isValid: !1 }));
    },
    X = (A, U, K, de) => {
      const ie = he(c, A);
      if (ie) {
        const re = he(d, A, ut(K) ? he(s, A) : K);
        (ut(re) || (de && de.defaultChecked) || U
          ? Pe(d, A, U ? re : ly(ie._f))
          : te(A, re),
          m.mount && D());
      }
    },
    ne = (A, U, K, de, ie) => {
      let re = !1,
        Ee = !1;
      const Le = { name: A };
      if (!i.disabled) {
        if (!K || de) {
          (p.isDirty || b.isDirty) &&
            ((Ee = o.isDirty),
            (o.isDirty = Le.isDirty = se()),
            (re = Ee !== Le.isDirty));
          const He = ml(he(s, A), U);
          ((Ee = !!he(o.dirtyFields, A)),
            He ? ht(o.dirtyFields, A) : Pe(o.dirtyFields, A, !0),
            (Le.dirtyFields = o.dirtyFields),
            (re = re || ((p.dirtyFields || b.dirtyFields) && Ee !== !He)));
        }
        if (K) {
          const He = he(o.touchedFields, A);
          He ||
            (Pe(o.touchedFields, A, K),
            (Le.touchedFields = o.touchedFields),
            (re = re || ((p.touchedFields || b.touchedFields) && He !== K)));
        }
        re && ie && x.state.next(Le);
      }
      return re ? Le : {};
    },
    Z = (A, U, K, de) => {
      const ie = he(o.errors, A),
        re = (p.isValid || b.isValid) && ln(U) && o.isValid !== U;
      if (
        (i.delayError && K
          ? ((v = O(() => G(A, K))), v(i.delayError))
          : (clearTimeout(y),
            (v = null),
            K ? Pe(o.errors, A, K) : ht(o.errors, A)),
        (K ? !ml(ie, K) : ie) || !Xt(de) || re)
      ) {
        const Ee = {
          ...de,
          ...(re && ln(U) ? { isValid: U } : {}),
          errors: o.errors,
          name: A,
        };
        ((o = { ...o, ...Ee }), x.state.next(Ee));
      }
    },
    W = async (A) => {
      k(A, !0);
      const U = await i.resolver(
        d,
        i.context,
        XE(A || h.mount, c, i.criteriaMode, i.shouldUseNativeValidation)
      );
      return (k(A), U);
    },
    $ = async (A) => {
      const { errors: U } = await W(A);
      if (A)
        for (const K of A) {
          const de = he(U, K);
          de ? Pe(o.errors, K, de) : ht(o.errors, K);
        }
      else o.errors = U;
      return U;
    },
    me = async (A, U, K = { valid: !0 }) => {
      for (const de in A) {
        const ie = A[de];
        if (ie) {
          const { _f: re, ...Ee } = ie;
          if (re) {
            const Le = h.array.has(re.name),
              He = ie._f && kE(ie._f);
            He && p.validatingFields && k([re.name], !0);
            const yt = await cy(
              ie,
              h.disabled,
              d,
              _,
              i.shouldUseNativeValidation && !U,
              Le
            );
            if (
              (He && p.validatingFields && k([re.name]),
              yt[re.name] && ((K.valid = !1), U))
            )
              break;
            !U &&
              (he(yt, re.name)
                ? Le
                  ? $E(o.errors, yt, re.name)
                  : Pe(o.errors, re.name, yt[re.name])
                : ht(o.errors, re.name));
          }
          !Xt(Ee) && (await me(Ee, U, K));
        }
      }
      return K.valid;
    },
    ge = () => {
      for (const A of h.unMount) {
        const U = he(c, A);
        U &&
          (U._f.refs ? U._f.refs.every((K) => !Us(K)) : !Us(U._f.ref)) &&
          le(A);
      }
      h.unMount = new Set();
    },
    se = (A, U) => !i.disabled && (A && U && Pe(d, A, U), !ml(ce(), s)),
    Q = (A, U, K) =>
      vv(A, h, { ...(m.mount ? d : ut(U) ? s : un(A) ? { [A]: U } : U) }, K, U),
    B = (A) =>
      yf(he(m.mount ? d : s, A, i.shouldUnregister ? he(s, A, []) : [])),
    te = (A, U, K = {}) => {
      const de = he(c, A);
      let ie = U;
      if (de) {
        const re = de._f;
        re &&
          (!re.disabled && Pe(d, A, Av(U, re)),
          (ie = Ir(re.ref) && kt(U) ? "" : U),
          bv(re.ref)
            ? [...re.ref.options].forEach(
                (Ee) => (Ee.selected = ie.includes(Ee.value))
              )
            : re.refs
              ? bu(re.ref)
                ? re.refs.forEach((Ee) => {
                    (!Ee.defaultChecked || !Ee.disabled) &&
                      (Array.isArray(ie)
                        ? (Ee.checked = !!ie.find((Le) => Le === Ee.value))
                        : (Ee.checked = ie === Ee.value || !!ie));
                  })
                : re.refs.forEach((Ee) => (Ee.checked = Ee.value === ie))
              : Ef(re.ref)
                ? (re.ref.value = "")
                : ((re.ref.value = ie),
                  re.ref.type || x.state.next({ name: A, values: bt(d) })));
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
          Ee = he(c, re);
        (h.array.has(A) || gt(ie) || (Ee && !Ee._f)) && !ga(ie)
          ? oe(re, ie, K)
          : te(re, ie, K);
      }
    },
    R = (A, U, K = {}) => {
      const de = he(c, A),
        ie = h.array.has(A),
        re = bt(U);
      (Pe(d, A, re),
        ie
          ? (x.array.next({ name: A, values: bt(d) }),
            (p.isDirty || p.dirtyFields || b.isDirty || b.dirtyFields) &&
              K.shouldDirty &&
              x.state.next({
                name: A,
                dirtyFields: ii(s, d),
                isDirty: se(A, re),
              }))
          : de && !de._f && !kt(re)
            ? oe(A, re, K)
            : te(A, re, K),
        uy(A, h) && x.state.next({ ...o, name: A }),
        x.state.next({ name: m.mount ? A : void 0, values: bt(d) }));
    },
    w = async (A) => {
      m.mount = !0;
      const U = A.target;
      let K = U.name,
        de = !0;
      const ie = he(c, K),
        re = (He) => {
          de =
            Number.isNaN(He) ||
            (ga(He) && isNaN(He.getTime())) ||
            ml(He, he(d, K, He));
        },
        Ee = ay(i.mode),
        Le = ay(i.reValidateMode);
      if (ie) {
        let He, yt;
        const Kt = U.type ? ly(ie._f) : hv(A),
          Jt = A.type === Pr.BLUR || A.type === Pr.FOCUS_OUT,
          pa =
            (!QE(ie._f) && !i.resolver && !he(o.errors, K) && !ie._f.deps) ||
            JE(Jt, he(o.touchedFields, K), o.isSubmitted, Le, Ee),
          cn = uy(K, h, Jt);
        (Pe(d, K, Kt),
          Jt
            ? (!U || !U.readOnly) &&
              (ie._f.onBlur && ie._f.onBlur(A), v && v(0))
            : ie._f.onChange && ie._f.onChange(A));
        const ct = ne(K, Kt, Jt),
          Ft = !Xt(ct) || cn;
        if ((!Jt && x.state.next({ name: K, type: A.type, values: bt(d) }), pa))
          return (
            (p.isValid || b.isValid) &&
              (i.mode === "onBlur" ? Jt && D() : Jt || D()),
            Ft && x.state.next({ name: K, ...(cn ? {} : ct) })
          );
        if ((!Jt && cn && x.state.next({ ...o }), i.resolver)) {
          const { errors: ze } = await W([K]);
          if ((re(Kt), de)) {
            const St = ry(o.errors, c, K),
              Dt = ry(ze, c, St.name || K);
            ((He = Dt.error), (K = Dt.name), (yt = Xt(ze)));
          }
        } else
          (k([K], !0),
            (He = (await cy(ie, h.disabled, d, _, i.shouldUseNativeValidation))[
              K
            ]),
            k([K]),
            re(Kt),
            de &&
              (He
                ? (yt = !1)
                : (p.isValid || b.isValid) && (yt = await me(c, !0))));
        de &&
          (ie._f.deps &&
            (!Array.isArray(ie._f.deps) || ie._f.deps.length > 0) &&
            ue(ie._f.deps),
          Z(K, yt, He, ct));
      }
    },
    C = (A, U) => {
      if (he(o.errors, U) && A.focus) return (A.focus(), 1);
    },
    ue = async (A, U = {}) => {
      let K, de;
      const ie = mu(A);
      if (i.resolver) {
        const re = await $(ut(A) ? A : ie);
        ((K = Xt(re)), (de = A ? !ie.some((Ee) => he(re, Ee)) : K));
      } else
        A
          ? ((de = (
              await Promise.all(
                ie.map(async (re) => {
                  const Ee = he(c, re);
                  return await me(Ee && Ee._f ? { [re]: Ee } : Ee);
                })
              )
            ).every(Boolean)),
            !(!de && !o.isValid) && D())
          : (de = K = await me(c));
      return (
        x.state.next({
          ...(!un(A) || ((p.isValid || b.isValid) && K !== o.isValid)
            ? {}
            : { name: A }),
          ...(i.resolver || !A ? { isValid: K } : {}),
          errors: o.errors,
        }),
        U.shouldFocus && !de && hu(c, C, A ? ie : h.mount),
        de
      );
    },
    ce = (A, U) => {
      let K = { ...(m.mount ? d : s) };
      return (
        U && (K = pv(U.dirtyFields ? o.dirtyFields : o.touchedFields, K)),
        ut(A) ? K : un(A) ? he(K, A) : A.map((de) => he(K, de))
      );
    },
    S = (A, U) => ({
      invalid: !!he((U || o).errors, A),
      isDirty: !!he((U || o).dirtyFields, A),
      error: he((U || o).errors, A),
      isValidating: !!he(o.validatingFields, A),
      isTouched: !!he((U || o).touchedFields, A),
    }),
    L = (A) => {
      (A && mu(A).forEach((U) => ht(o.errors, U)),
        x.state.next({ errors: A ? o.errors : {} }));
    },
    J = (A, U, K) => {
      const de = (he(c, A, { _f: {} })._f || {}).ref,
        ie = he(o.errors, A) || {},
        { ref: re, message: Ee, type: Le, ...He } = ie;
      (Pe(o.errors, A, { ...He, ...U, ref: de }),
        x.state.next({ name: A, errors: o.errors, isValid: !1 }),
        K && K.shouldFocus && de && de.focus && de.focus());
    },
    ae = (A, U) =>
      zn(A)
        ? x.state.subscribe({
            next: (K) => "values" in K && A(Q(void 0, U), K),
          })
        : Q(A, U, !0),
    ye = (A) =>
      x.state.subscribe({
        next: (U) => {
          KE(A.name, U.name, A.exact) &&
            ZE(U, A.formState || p, Ct, A.reRenderRoot) &&
            A.callback({ values: { ...d }, ...o, ...U, defaultValues: s });
        },
      }).unsubscribe,
    Y = (A) => (
      (m.mount = !0),
      (b = { ...b, ...A.formState }),
      ye({ ...A, formState: b })
    ),
    le = (A, U = {}) => {
      for (const K of A ? mu(A) : h.mount)
        (h.mount.delete(K),
          h.array.delete(K),
          U.keepValue || (ht(c, K), ht(d, K)),
          !U.keepError && ht(o.errors, K),
          !U.keepDirty && ht(o.dirtyFields, K),
          !U.keepTouched && ht(o.touchedFields, K),
          !U.keepIsValidating && ht(o.validatingFields, K),
          !i.shouldUnregister && !U.keepDefaultValue && ht(s, K));
      (x.state.next({ values: bt(d) }),
        x.state.next({ ...o, ...(U.keepDirty ? { isDirty: se() } : {}) }),
        !U.keepIsValid && D());
    },
    Ae = ({ disabled: A, name: U }) => {
      ((ln(A) && m.mount) || A || h.disabled.has(U)) &&
        (A ? h.disabled.add(U) : h.disabled.delete(U));
    },
    fe = (A, U = {}) => {
      let K = he(c, A);
      const de = ln(U.disabled) || ln(i.disabled);
      return (
        Pe(c, A, {
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
          : X(A, !0, U.value),
        {
          ...(de ? { disabled: U.disabled || i.disabled } : {}),
          ...(i.progressive
            ? {
                required: !!U.required,
                min: cu(U.min),
                max: cu(U.max),
                minLength: cu(U.minLength),
                maxLength: cu(U.maxLength),
                pattern: cu(U.pattern),
              }
            : {}),
          name: A,
          onChange: w,
          onBlur: w,
          ref: (ie) => {
            if (ie) {
              (fe(A, U), (K = he(c, A)));
              const re =
                  (ut(ie.value) &&
                    ie.querySelectorAll &&
                    ie.querySelectorAll("input,select,textarea")[0]) ||
                  ie,
                Ee = qE(re),
                Le = K._f.refs || [];
              if (Ee ? Le.find((He) => He === re) : re === K._f.ref) return;
              (Pe(c, A, {
                _f: {
                  ...K._f,
                  ...(Ee
                    ? {
                        refs: [
                          ...Le.filter(Us),
                          re,
                          ...(Array.isArray(he(s, A)) ? [{}] : []),
                        ],
                        ref: { type: re.type, name: A },
                      }
                    : { ref: re }),
                },
              }),
                X(A, !1, void 0, re));
            } else
              ((K = he(c, A, {})),
                K._f && (K._f.mount = !1),
                (i.shouldUnregister || U.shouldUnregister) &&
                  !(gv(h.array, A) && m.action) &&
                  h.unMount.add(A));
          },
        }
      );
    },
    Te = () => i.shouldFocusError && hu(c, C, h.mount),
    Ye = (A) => {
      ln(A) &&
        (x.state.next({ disabled: A }),
        hu(
          c,
          (U, K) => {
            const de = he(c, K);
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
    qe = (A, U) => async (K) => {
      let de;
      K && (K.preventDefault && K.preventDefault(), K.persist && K.persist());
      let ie = bt(d);
      if ((x.state.next({ isSubmitting: !0 }), i.resolver)) {
        const { errors: re, values: Ee } = await W();
        ((o.errors = re), (ie = bt(Ee)));
      } else await me(c);
      if (h.disabled.size) for (const re of h.disabled) ht(ie, re);
      if ((ht(o.errors, "root"), Xt(o.errors))) {
        x.state.next({ errors: {} });
        try {
          await A(ie, K);
        } catch (re) {
          de = re;
        }
      } else (U && (await U({ ...o.errors }, K)), Te(), setTimeout(Te));
      if (
        (x.state.next({
          isSubmitted: !0,
          isSubmitting: !1,
          isSubmitSuccessful: Xt(o.errors) && !de,
          submitCount: o.submitCount + 1,
          errors: o.errors,
        }),
        de)
      )
        throw de;
    },
    Qt = (A, U = {}) => {
      he(c, A) &&
        (ut(U.defaultValue)
          ? R(A, bt(he(s, A)))
          : (R(A, U.defaultValue), Pe(s, A, bt(U.defaultValue))),
        U.keepTouched || ht(o.touchedFields, A),
        U.keepDirty ||
          (ht(o.dirtyFields, A),
          (o.isDirty = U.defaultValue ? se(A, bt(he(s, A))) : se())),
        U.keepError || (ht(o.errors, A), p.isValid && D()),
        x.state.next({ ...o }));
    },
    zt = (A, U = {}) => {
      const K = A ? bt(A) : s,
        de = bt(K),
        ie = Xt(A),
        re = ie ? s : de;
      if ((U.keepDefaultValues || (s = K), !U.keepValues)) {
        if (U.keepDirtyValues) {
          const Ee = new Set([...h.mount, ...Object.keys(ii(s, d))]);
          for (const Le of Array.from(Ee))
            he(o.dirtyFields, Le) ? Pe(re, Le, he(d, Le)) : R(Le, he(re, Le));
        } else {
          if (gf && ut(A))
            for (const Ee of h.mount) {
              const Le = he(c, Ee);
              if (Le && Le._f) {
                const He = Array.isArray(Le._f.refs)
                  ? Le._f.refs[0]
                  : Le._f.ref;
                if (Ir(He)) {
                  const yt = He.closest("form");
                  if (yt) {
                    yt.reset();
                    break;
                  }
                }
              }
            }
          if (U.keepFieldsRef) for (const Ee of h.mount) R(Ee, he(re, Ee));
          else c = {};
        }
        ((d = i.shouldUnregister ? (U.keepDefaultValues ? bt(s) : {}) : bt(re)),
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
          submitCount: U.keepSubmitCount ? o.submitCount : 0,
          isDirty: ie
            ? !1
            : U.keepDirty
              ? o.isDirty
              : !!(U.keepDefaultValues && !ml(A, s)),
          isSubmitted: U.keepIsSubmitted ? o.isSubmitted : !1,
          dirtyFields: ie
            ? {}
            : U.keepDirtyValues
              ? U.keepDefaultValues && d
                ? ii(s, d)
                : o.dirtyFields
              : U.keepDefaultValues && A
                ? ii(s, A)
                : U.keepDirty
                  ? o.dirtyFields
                  : {},
          touchedFields: U.keepTouched ? o.touchedFields : {},
          errors: U.keepErrors ? o.errors : {},
          isSubmitSuccessful: U.keepIsSubmitSuccessful
            ? o.isSubmitSuccessful
            : !1,
          isSubmitting: !1,
          defaultValues: s,
        }));
    },
    Zt = (A, U) => zt(zn(A) ? A(d) : A, U),
    We = (A, U = {}) => {
      const K = he(c, A),
        de = K && K._f;
      if (de) {
        const ie = de.refs ? de.refs[0] : de.ref;
        ie.focus &&
          (ie.focus(), U.shouldSelect && zn(ie.select) && ie.select());
      }
    },
    Ct = (A) => {
      o = { ...o, ...A };
    },
    An = {
      control: {
        register: fe,
        unregister: le,
        getFieldState: S,
        handleSubmit: qe,
        setError: J,
        _subscribe: ye,
        _runSchema: W,
        _focusError: Te,
        _getWatch: Q,
        _getDirty: se,
        _setValid: D,
        _setFieldArray: P,
        _setDisabledField: Ae,
        _setErrors: q,
        _getFieldArray: B,
        _reset: zt,
        _resetDefaultValues: () =>
          zn(i.defaultValues) &&
          i.defaultValues().then((A) => {
            (Zt(A, i.resetOptions), x.state.next({ isLoading: !1 }));
          }),
        _removeUnmounted: ge,
        _disableForm: Ye,
        _subjects: x,
        _proxyFormState: p,
        get _fields() {
          return c;
        },
        get _formValues() {
          return d;
        },
        get _state() {
          return m;
        },
        set _state(A) {
          m = A;
        },
        get _defaultValues() {
          return s;
        },
        get _names() {
          return h;
        },
        set _names(A) {
          h = A;
        },
        get _formState() {
          return o;
        },
        get _options() {
          return i;
        },
        set _options(A) {
          i = { ...i, ...A };
        },
      },
      subscribe: Y,
      trigger: ue,
      register: fe,
      handleSubmit: qe,
      watch: ae,
      setValue: R,
      getValues: ce,
      reset: Zt,
      resetField: Qt,
      clearErrors: L,
      unregister: le,
      setError: J,
      setFocus: We,
      getFieldState: S,
    };
  return { ...An, formControl: An };
}
function UA(a = {}) {
  const i = we.useRef(void 0),
    o = we.useRef(void 0),
    [c, s] = we.useState({
      isDirty: !1,
      isValidating: !1,
      isLoading: zn(a.defaultValues),
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
      defaultValues: zn(a.defaultValues) ? void 0 : a.defaultValues,
    });
  if (!i.current)
    if (a.formControl)
      ((i.current = { ...a.formControl, formState: c }),
        a.defaultValues &&
          !zn(a.defaultValues) &&
          a.formControl.reset(a.defaultValues, a.resetOptions));
    else {
      const { formControl: m, ...h } = PE(a);
      i.current = { ...h, formState: c };
    }
  const d = i.current.control;
  return (
    (d._options = a),
    Sf(() => {
      const m = d._subscribe({
        formState: d._proxyFormState,
        callback: () => s({ ...d._formState }),
        reRenderRoot: !0,
      });
      return (
        s((h) => ({ ...h, isReady: !0 })),
        (d._formState.isReady = !0),
        m
      );
    }, [d]),
    we.useEffect(() => d._disableForm(a.disabled), [d, a.disabled]),
    we.useEffect(() => {
      (a.mode && (d._options.mode = a.mode),
        a.reValidateMode && (d._options.reValidateMode = a.reValidateMode));
    }, [d, a.mode, a.reValidateMode]),
    we.useEffect(() => {
      a.errors && (d._setErrors(a.errors), d._focusError());
    }, [d, a.errors]),
    we.useEffect(() => {
      a.shouldUnregister && d._subjects.state.next({ values: d._getWatch() });
    }, [d, a.shouldUnregister]),
    we.useEffect(() => {
      if (d._proxyFormState.isDirty) {
        const m = d._getDirty();
        m !== c.isDirty && d._subjects.state.next({ isDirty: m });
      }
    }, [d, c.isDirty]),
    we.useEffect(() => {
      a.values && !ml(a.values, o.current)
        ? (d._reset(a.values, {
            keepFieldsRef: !0,
            ...d._options.resetOptions,
          }),
          (o.current = a.values),
          s((m) => ({ ...m })))
        : d._resetDefaultValues();
    }, [d, a.values]),
    we.useEffect(() => {
      (d._state.mount || (d._setValid(), (d._state.mount = !0)),
        d._state.watch &&
          ((d._state.watch = !1), d._subjects.state.next({ ...d._formState })),
        d._removeUnmounted());
    }),
    (i.current.formState = yv(c, d)),
    i.current
  );
}
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const IE = (a) => a.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  eA = (a) =>
    a.replace(/^([A-Z])|[\s-_]+(\w)/g, (i, o, c) =>
      c ? c.toUpperCase() : o.toLowerCase()
    ),
  sy = (a) => {
    const i = eA(a);
    return i.charAt(0).toUpperCase() + i.slice(1);
  },
  Tv = (...a) =>
    a
      .filter((i, o, c) => !!i && i.trim() !== "" && c.indexOf(i) === o)
      .join(" ")
      .trim(),
  tA = (a) => {
    for (const i in a)
      if (i.startsWith("aria-") || i === "role" || i === "title") return !0;
  };
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var nA = {
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
 */ const lA = M.forwardRef(
  (
    {
      color: a = "currentColor",
      size: i = 24,
      strokeWidth: o = 2,
      absoluteStrokeWidth: c,
      className: s = "",
      children: d,
      iconNode: m,
      ...h
    },
    v
  ) =>
    M.createElement(
      "svg",
      {
        ref: v,
        ...nA,
        width: i,
        height: i,
        stroke: a,
        strokeWidth: c ? (Number(o) * 24) / Number(i) : o,
        className: Tv("lucide", s),
        ...(!d && !tA(h) && { "aria-hidden": "true" }),
        ...h,
      },
      [
        ...m.map(([y, p]) => M.createElement(y, p)),
        ...(Array.isArray(d) ? d : [d]),
      ]
    )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const xf = (a, i) => {
  const o = M.forwardRef(({ className: c, ...s }, d) =>
    M.createElement(lA, {
      ref: d,
      iconNode: i,
      className: Tv(`lucide-${IE(sy(a))}`, `lucide-${a}`, c),
      ...s,
    })
  );
  return ((o.displayName = sy(a)), o);
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const aA = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
    ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }],
  ],
  NA = xf("circle-alert", aA);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const iA = [
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
  VA = xf("eye-off", iA);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const uA = [
    [
      "path",
      {
        d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
        key: "1nclc0",
      },
    ],
    ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
  ],
  LA = xf("eye", uA);
var Ns = { exports: {} },
  su = {},
  Vs = { exports: {} },
  Ls = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var fy;
function rA() {
  return (
    fy ||
      ((fy = 1),
      (function (a) {
        function i(R, w) {
          var C = R.length;
          R.push(w);
          e: for (; 0 < C; ) {
            var ue = (C - 1) >>> 1,
              ce = R[ue];
            if (0 < s(ce, w)) ((R[ue] = w), (R[C] = ce), (C = ue));
            else break e;
          }
        }
        function o(R) {
          return R.length === 0 ? null : R[0];
        }
        function c(R) {
          if (R.length === 0) return null;
          var w = R[0],
            C = R.pop();
          if (C !== w) {
            R[0] = C;
            e: for (var ue = 0, ce = R.length, S = ce >>> 1; ue < S; ) {
              var L = 2 * (ue + 1) - 1,
                J = R[L],
                ae = L + 1,
                ye = R[ae];
              if (0 > s(J, C))
                ae < ce && 0 > s(ye, J)
                  ? ((R[ue] = ye), (R[ae] = C), (ue = ae))
                  : ((R[ue] = J), (R[L] = C), (ue = L));
              else if (ae < ce && 0 > s(ye, C))
                ((R[ue] = ye), (R[ae] = C), (ue = ae));
              else break e;
            }
          }
          return w;
        }
        function s(R, w) {
          var C = R.sortIndex - w.sortIndex;
          return C !== 0 ? C : R.id - w.id;
        }
        if (
          ((a.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var d = performance;
          a.unstable_now = function () {
            return d.now();
          };
        } else {
          var m = Date,
            h = m.now();
          a.unstable_now = function () {
            return m.now() - h;
          };
        }
        var v = [],
          y = [],
          p = 1,
          b = null,
          x = 3,
          _ = !1,
          O = !1,
          D = !1,
          k = !1,
          P = typeof setTimeout == "function" ? setTimeout : null,
          G = typeof clearTimeout == "function" ? clearTimeout : null,
          q = typeof setImmediate < "u" ? setImmediate : null;
        function X(R) {
          for (var w = o(y); w !== null; ) {
            if (w.callback === null) c(y);
            else if (w.startTime <= R)
              (c(y), (w.sortIndex = w.expirationTime), i(v, w));
            else break;
            w = o(y);
          }
        }
        function ne(R) {
          if (((D = !1), X(R), !O))
            if (o(v) !== null) ((O = !0), Z || ((Z = !0), Q()));
            else {
              var w = o(y);
              w !== null && oe(ne, w.startTime - R);
            }
        }
        var Z = !1,
          W = -1,
          $ = 5,
          me = -1;
        function ge() {
          return k ? !0 : !(a.unstable_now() - me < $);
        }
        function se() {
          if (((k = !1), Z)) {
            var R = a.unstable_now();
            me = R;
            var w = !0;
            try {
              e: {
                ((O = !1), D && ((D = !1), G(W), (W = -1)), (_ = !0));
                var C = x;
                try {
                  t: {
                    for (
                      X(R), b = o(v);
                      b !== null && !(b.expirationTime > R && ge());

                    ) {
                      var ue = b.callback;
                      if (typeof ue == "function") {
                        ((b.callback = null), (x = b.priorityLevel));
                        var ce = ue(b.expirationTime <= R);
                        if (((R = a.unstable_now()), typeof ce == "function")) {
                          ((b.callback = ce), X(R), (w = !0));
                          break t;
                        }
                        (b === o(v) && c(v), X(R));
                      } else c(v);
                      b = o(v);
                    }
                    if (b !== null) w = !0;
                    else {
                      var S = o(y);
                      (S !== null && oe(ne, S.startTime - R), (w = !1));
                    }
                  }
                  break e;
                } finally {
                  ((b = null), (x = C), (_ = !1));
                }
                w = void 0;
              }
            } finally {
              w ? Q() : (Z = !1);
            }
          }
        }
        var Q;
        if (typeof q == "function")
          Q = function () {
            q(se);
          };
        else if (typeof MessageChannel < "u") {
          var B = new MessageChannel(),
            te = B.port2;
          ((B.port1.onmessage = se),
            (Q = function () {
              te.postMessage(null);
            }));
        } else
          Q = function () {
            P(se, 0);
          };
        function oe(R, w) {
          W = P(function () {
            R(a.unstable_now());
          }, w);
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
                var w = 3;
                break;
              default:
                w = x;
            }
            var C = x;
            x = w;
            try {
              return R();
            } finally {
              x = C;
            }
          }),
          (a.unstable_requestPaint = function () {
            k = !0;
          }),
          (a.unstable_runWithPriority = function (R, w) {
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
            var C = x;
            x = R;
            try {
              return w();
            } finally {
              x = C;
            }
          }),
          (a.unstable_scheduleCallback = function (R, w, C) {
            var ue = a.unstable_now();
            switch (
              (typeof C == "object" && C !== null
                ? ((C = C.delay),
                  (C = typeof C == "number" && 0 < C ? ue + C : ue))
                : (C = ue),
              R)
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
              (ce = C + ce),
              (R = {
                id: p++,
                callback: w,
                priorityLevel: R,
                startTime: C,
                expirationTime: ce,
                sortIndex: -1,
              }),
              C > ue
                ? ((R.sortIndex = C),
                  i(y, R),
                  o(v) === null &&
                    R === o(y) &&
                    (D ? (G(W), (W = -1)) : (D = !0), oe(ne, C - ue)))
                : ((R.sortIndex = ce),
                  i(v, R),
                  O || _ || ((O = !0), Z || ((Z = !0), Q()))),
              R
            );
          }),
          (a.unstable_shouldYield = ge),
          (a.unstable_wrapCallback = function (R) {
            var w = x;
            return function () {
              var C = x;
              x = w;
              try {
                return R.apply(this, arguments);
              } finally {
                x = C;
              }
            };
          }));
      })(Ls)),
    Ls
  );
}
var dy;
function oA() {
  return (dy || ((dy = 1), (Vs.exports = rA())), Vs.exports);
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var my;
function cA() {
  if (my) return su;
  my = 1;
  var a = oA(),
    i = ef(),
    o = Yy();
  function c(e) {
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
  function s(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function d(e) {
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
  function v(e) {
    if (d(e) !== e) throw Error(c(188));
  }
  function y(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = d(e)), t === null)) throw Error(c(188));
      return t !== e ? null : e;
    }
    for (var n = e, l = t; ; ) {
      var u = n.return;
      if (u === null) break;
      var r = u.alternate;
      if (r === null) {
        if (((l = u.return), l !== null)) {
          n = l;
          continue;
        }
        break;
      }
      if (u.child === r.child) {
        for (r = u.child; r; ) {
          if (r === n) return (v(u), e);
          if (r === l) return (v(u), t);
          r = r.sibling;
        }
        throw Error(c(188));
      }
      if (n.return !== l.return) ((n = u), (l = r));
      else {
        for (var f = !1, g = u.child; g; ) {
          if (g === n) {
            ((f = !0), (n = u), (l = r));
            break;
          }
          if (g === l) {
            ((f = !0), (l = u), (n = r));
            break;
          }
          g = g.sibling;
        }
        if (!f) {
          for (g = r.child; g; ) {
            if (g === n) {
              ((f = !0), (n = r), (l = u));
              break;
            }
            if (g === l) {
              ((f = !0), (l = r), (n = u));
              break;
            }
            g = g.sibling;
          }
          if (!f) throw Error(c(189));
        }
      }
      if (n.alternate !== l) throw Error(c(190));
    }
    if (n.tag !== 3) throw Error(c(188));
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
    O = Symbol.for("react.portal"),
    D = Symbol.for("react.fragment"),
    k = Symbol.for("react.strict_mode"),
    P = Symbol.for("react.profiler"),
    G = Symbol.for("react.consumer"),
    q = Symbol.for("react.context"),
    X = Symbol.for("react.forward_ref"),
    ne = Symbol.for("react.suspense"),
    Z = Symbol.for("react.suspense_list"),
    W = Symbol.for("react.memo"),
    $ = Symbol.for("react.lazy"),
    me = Symbol.for("react.activity"),
    ge = Symbol.for("react.memo_cache_sentinel"),
    se = Symbol.iterator;
  function Q(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (se && e[se]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var B = Symbol.for("react.client.reference");
  function te(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === B ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case D:
        return "Fragment";
      case P:
        return "Profiler";
      case k:
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
        case O:
          return "Portal";
        case q:
          return e.displayName || "Context";
        case G:
          return (e._context.displayName || "Context") + ".Consumer";
        case X:
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
    w = o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    C = { pending: !1, data: null, method: null, action: null },
    ue = [],
    ce = -1;
  function S(e) {
    return { current: e };
  }
  function L(e) {
    0 > ce || ((e.current = ue[ce]), (ue[ce] = null), ce--);
  }
  function J(e, t) {
    (ce++, (ue[ce] = e.current), (e.current = t));
  }
  var ae = S(null),
    ye = S(null),
    Y = S(null),
    le = S(null);
  function Ae(e, t) {
    switch ((J(Y, t), J(ye, e), J(ae, null), t.nodeType)) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? Hh(e) : 0;
        break;
      default:
        if (((e = t.tagName), (t = t.namespaceURI)))
          ((t = Hh(t)), (e = qh(t, e)));
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
    (L(ae), J(ae, e));
  }
  function fe() {
    (L(ae), L(ye), L(Y));
  }
  function Te(e) {
    e.memoizedState !== null && J(le, e);
    var t = ae.current,
      n = qh(t, e.type);
    t !== n && (J(ye, e), J(ae, n));
  }
  function Ye(e) {
    (ye.current === e && (L(ae), L(ye)),
      le.current === e && (L(le), (nu._currentValue = C)));
  }
  var qe, Qt;
  function zt(e) {
    if (qe === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        ((qe = (t && t[1]) || ""),
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
      qe +
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
      var r = l.DetermineComponentFrameRoot(),
        f = r[0],
        g = r[1];
      if (f && g) {
        var E = f.split(`
`),
          V = g.split(`
`);
        for (
          u = l = 0;
          l < E.length && !E[l].includes("DetermineComponentFrameRoot");

        )
          l++;
        for (; u < V.length && !V[u].includes("DetermineComponentFrameRoot"); )
          u++;
        if (l === E.length || u === V.length)
          for (
            l = E.length - 1, u = V.length - 1;
            1 <= l && 0 <= u && E[l] !== V[u];

          )
            u--;
        for (; 1 <= l && 0 <= u; l--, u--)
          if (E[l] !== V[u]) {
            if (l !== 1 || u !== 1)
              do
                if ((l--, u--, 0 > u || E[l] !== V[u])) {
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
    return (n = e ? e.displayName || e.name : "") ? zt(n) : "";
  }
  function Ct(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return zt(e.type);
      case 16:
        return zt("Lazy");
      case 13:
        return e.child !== t && t !== null
          ? zt("Suspense Fallback")
          : zt("Suspense");
      case 19:
        return zt("SuspenseList");
      case 0:
      case 15:
        return We(e.type, !1);
      case 11:
        return We(e.type.render, !1);
      case 1:
        return We(e.type, !0);
      case 31:
        return zt("Activity");
      default:
        return "";
    }
  }
  function Gn(e) {
    try {
      var t = "",
        n = null;
      do ((t += Ct(e, n)), (n = e), (e = e.return));
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
    Le = a.unstable_UserBlockingPriority,
    He = a.unstable_NormalPriority,
    yt = a.unstable_LowPriority,
    Kt = a.unstable_IdlePriority,
    Jt = a.log,
    pa = a.unstable_setDisableYieldValue,
    cn = null,
    ct = null;
  function Ft(e) {
    if (
      (typeof Jt == "function" && pa(e),
      ct && typeof ct.setStrictMode == "function")
    )
      try {
        ct.setStrictMode(cn, e);
      } catch {}
  }
  var ze = Math.clz32 ? Math.clz32 : Vt,
    St = Math.log,
    Dt = Math.LN2;
  function Vt(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((St(e) / Dt) | 0)) | 0);
  }
  var xn = 256,
    Tn = 262144,
    Xn = 4194304;
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
      r = e.suspendedLanes,
      f = e.pingedLanes;
    e = e.warmLanes;
    var g = l & 134217727;
    return (
      g !== 0
        ? ((l = g & ~r),
          l !== 0
            ? (u = _n(l))
            : ((f &= g),
              f !== 0
                ? (u = _n(f))
                : n || ((n = g & ~e), n !== 0 && (u = _n(n)))))
        : ((g = l & ~r),
          g !== 0
            ? (u = _n(g))
            : f !== 0
              ? (u = _n(f))
              : n || ((n = l & ~e), n !== 0 && (u = _n(n)))),
      u === 0
        ? 0
        : t !== 0 &&
            t !== u &&
            (t & r) === 0 &&
            ((r = u & -u),
            (n = t & -t),
            r >= n || (r === 32 && (n & 4194048) !== 0))
          ? t
          : u
    );
  }
  function Fl(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function so(e, t) {
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
  function Su() {
    var e = Xn;
    return ((Xn <<= 1), (Xn & 62914560) === 0 && (Xn = 4194304), e);
  }
  function hi(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function kn(e, t) {
    ((e.pendingLanes |= t),
      t !== 268435456 &&
        ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0)));
  }
  function Eu(e, t, n, l, u, r) {
    var f = e.pendingLanes;
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
      V = e.hiddenUpdates;
    for (n = f & ~n; 0 < n; ) {
      var F = 31 - ze(n),
        ee = 1 << F;
      ((g[F] = 0), (E[F] = -1));
      var H = V[F];
      if (H !== null)
        for (V[F] = null, F = 0; F < H.length; F++) {
          var j = H[F];
          j !== null && (j.lane &= -536870913);
        }
      n &= ~ee;
    }
    (l !== 0 && Au(e, l, 0),
      r !== 0 && u === 0 && e.tag !== 0 && (e.suspendedLanes |= r & ~(f & ~t)));
  }
  function Au(e, t, n) {
    ((e.pendingLanes |= t), (e.suspendedLanes &= ~t));
    var l = 31 - ze(t);
    ((e.entangledLanes |= t),
      (e.entanglements[l] = e.entanglements[l] | 1073741824 | (n & 261930)));
  }
  function xu(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var l = 31 - ze(n),
        u = 1 << l;
      ((u & t) | (e[l] & t) && (e[l] |= t), (n &= ~u));
    }
  }
  function pl(e, t) {
    var n = t & -t;
    return (
      (n = (n & 42) !== 0 ? 1 : gi(n)),
      (n & (e.suspendedLanes | t)) !== 0 ? 0 : n
    );
  }
  function gi(e) {
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
  function yi(e) {
    return (
      (e &= -e),
      2 < e ? (8 < e ? ((e & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function Tu() {
    var e = w.p;
    return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : og(e.type));
  }
  function Tf(e, t) {
    var n = w.p;
    try {
      return ((w.p = e), t());
    } finally {
      w.p = n;
    }
  }
  var bl = Math.random().toString(36).slice(2),
    xt = "__reactFiber$" + bl,
    Lt = "__reactProps$" + bl,
    ba = "__reactContainer$" + bl,
    fo = "__reactEvents$" + bl,
    _v = "__reactListeners$" + bl,
    Rv = "__reactHandles$" + bl,
    _f = "__reactResources$" + bl,
    vi = "__reactMarker$" + bl;
  function mo(e) {
    (delete e[xt], delete e[Lt], delete e[fo], delete e[_v], delete e[Rv]);
  }
  function Sa(e) {
    var t = e[xt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[ba] || n[xt])) {
        if (
          ((n = t.alternate),
          t.child !== null || (n !== null && n.child !== null))
        )
          for (e = Zh(e); e !== null; ) {
            if ((n = e[xt])) return n;
            e = Zh(e);
          }
        return t;
      }
      ((e = n), (n = e.parentNode));
    }
    return null;
  }
  function Ea(e) {
    if ((e = e[xt] || e[ba])) {
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
  function pi(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(c(33));
  }
  function Aa(e) {
    var t = e[_f];
    return (
      t ||
        (t = e[_f] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      t
    );
  }
  function Et(e) {
    e[vi] = !0;
  }
  var Rf = new Set(),
    Mf = {};
  function $l(e, t) {
    (xa(e, t), xa(e + "Capture", t));
  }
  function xa(e, t) {
    for (Mf[e] = t, e = 0; e < t.length; e++) Rf.add(t[e]);
  }
  var Mv = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ),
    Cf = {},
    Of = {};
  function Cv(e) {
    return An.call(Of, e)
      ? !0
      : An.call(Cf, e)
        ? !1
        : Mv.test(e)
          ? (Of[e] = !0)
          : ((Cf[e] = !0), !1);
  }
  function _u(e, t, n) {
    if (Cv(t))
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
  function Ru(e, t, n) {
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
  function sn(e) {
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
  function wf(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function Ov(e, t, n) {
    var l = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
    if (
      !e.hasOwnProperty(t) &&
      typeof l < "u" &&
      typeof l.get == "function" &&
      typeof l.set == "function"
    ) {
      var u = l.get,
        r = l.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return u.call(this);
          },
          set: function (f) {
            ((n = "" + f), r.call(this, f));
          },
        }),
        Object.defineProperty(e, t, { enumerable: l.enumerable }),
        {
          getValue: function () {
            return n;
          },
          setValue: function (f) {
            n = "" + f;
          },
          stopTracking: function () {
            ((e._valueTracker = null), delete e[t]);
          },
        }
      );
    }
  }
  function ho(e) {
    if (!e._valueTracker) {
      var t = wf(e) ? "checked" : "value";
      e._valueTracker = Ov(e, t, "" + e[t]);
    }
  }
  function zf(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      l = "";
    return (
      e && (l = wf(e) ? (e.checked ? "true" : "false") : e.value),
      (e = l),
      e !== n ? (t.setValue(e), !0) : !1
    );
  }
  function Mu(e) {
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
  var wv = /[\n"\\]/g;
  function fn(e) {
    return e.replace(wv, function (t) {
      return "\\" + t.charCodeAt(0).toString(16) + " ";
    });
  }
  function go(e, t, n, l, u, r, f, g) {
    ((e.name = ""),
      f != null &&
      typeof f != "function" &&
      typeof f != "symbol" &&
      typeof f != "boolean"
        ? (e.type = f)
        : e.removeAttribute("type"),
      t != null
        ? f === "number"
          ? ((t === 0 && e.value === "") || e.value != t) &&
            (e.value = "" + sn(t))
          : e.value !== "" + sn(t) && (e.value = "" + sn(t))
        : (f !== "submit" && f !== "reset") || e.removeAttribute("value"),
      t != null
        ? yo(e, f, sn(t))
        : n != null
          ? yo(e, f, sn(n))
          : l != null && e.removeAttribute("value"),
      u == null && r != null && (e.defaultChecked = !!r),
      u != null &&
        (e.checked = u && typeof u != "function" && typeof u != "symbol"),
      g != null &&
      typeof g != "function" &&
      typeof g != "symbol" &&
      typeof g != "boolean"
        ? (e.name = "" + sn(g))
        : e.removeAttribute("name"));
  }
  function Df(e, t, n, l, u, r, f, g) {
    if (
      (r != null &&
        typeof r != "function" &&
        typeof r != "symbol" &&
        typeof r != "boolean" &&
        (e.type = r),
      t != null || n != null)
    ) {
      if (!((r !== "submit" && r !== "reset") || t != null)) {
        ho(e);
        return;
      }
      ((n = n != null ? "" + sn(n) : ""),
        (t = t != null ? "" + sn(t) : n),
        g || t === e.value || (e.value = t),
        (e.defaultValue = t));
    }
    ((l = l ?? u),
      (l = typeof l != "function" && typeof l != "symbol" && !!l),
      (e.checked = g ? e.checked : !!l),
      (e.defaultChecked = !!l),
      f != null &&
        typeof f != "function" &&
        typeof f != "symbol" &&
        typeof f != "boolean" &&
        (e.name = f),
      ho(e));
  }
  function yo(e, t, n) {
    (t === "number" && Mu(e.ownerDocument) === e) ||
      e.defaultValue === "" + n ||
      (e.defaultValue = "" + n);
  }
  function Ta(e, t, n, l) {
    if (((e = e.options), t)) {
      t = {};
      for (var u = 0; u < n.length; u++) t["$" + n[u]] = !0;
      for (n = 0; n < e.length; n++)
        ((u = t.hasOwnProperty("$" + e[n].value)),
          e[n].selected !== u && (e[n].selected = u),
          u && l && (e[n].defaultSelected = !0));
    } else {
      for (n = "" + sn(n), t = null, u = 0; u < e.length; u++) {
        if (e[u].value === n) {
          ((e[u].selected = !0), l && (e[u].defaultSelected = !0));
          return;
        }
        t !== null || e[u].disabled || (t = e[u]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Uf(e, t, n) {
    if (
      t != null &&
      ((t = "" + sn(t)), t !== e.value && (e.value = t), n == null)
    ) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = n != null ? "" + sn(n) : "";
  }
  function Nf(e, t, n, l) {
    if (t == null) {
      if (l != null) {
        if (n != null) throw Error(c(92));
        if (oe(l)) {
          if (1 < l.length) throw Error(c(93));
          l = l[0];
        }
        n = l;
      }
      (n == null && (n = ""), (t = n));
    }
    ((n = sn(t)),
      (e.defaultValue = n),
      (l = e.textContent),
      l === n && l !== "" && l !== null && (e.value = l),
      ho(e));
  }
  function _a(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var zv = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Vf(e, t, n) {
    var l = t.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === ""
      ? l
        ? e.setProperty(t, "")
        : t === "float"
          ? (e.cssFloat = "")
          : (e[t] = "")
      : l
        ? e.setProperty(t, n)
        : typeof n != "number" || n === 0 || zv.has(t)
          ? t === "float"
            ? (e.cssFloat = n)
            : (e[t] = ("" + n).trim())
          : (e[t] = n + "px");
  }
  function Lf(e, t, n) {
    if (t != null && typeof t != "object") throw Error(c(62));
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
        ((l = t[u]), t.hasOwnProperty(u) && n[u] !== l && Vf(e, u, l));
    } else for (var r in t) t.hasOwnProperty(r) && Vf(e, r, t[r]);
  }
  function vo(e) {
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
  var Dv = new Map([
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
    Uv =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Cu(e) {
    return Uv.test("" + e)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : e;
  }
  function Zn() {}
  var po = null;
  function bo(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Ra = null,
    Ma = null;
  function Bf(e) {
    var t = Ea(e);
    if (t && (e = t.stateNode)) {
      var n = e[Lt] || null;
      e: switch (((e = t.stateNode), t.type)) {
        case "input":
          if (
            (go(
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
                var u = l[Lt] || null;
                if (!u) throw Error(c(90));
                go(
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
              ((l = n[t]), l.form === e.form && zf(l));
          }
          break e;
        case "textarea":
          Uf(e, n.value, n.defaultValue);
          break e;
        case "select":
          ((t = n.value), t != null && Ta(e, !!n.multiple, t, !1));
      }
    }
  }
  var So = !1;
  function Hf(e, t, n) {
    if (So) return e(t, n);
    So = !0;
    try {
      var l = e(t);
      return l;
    } finally {
      if (
        ((So = !1),
        (Ra !== null || Ma !== null) &&
          (gr(), Ra && ((t = Ra), (e = Ma), (Ma = Ra = null), Bf(t), e)))
      )
        for (t = 0; t < e.length; t++) Bf(e[t]);
    }
  }
  function bi(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var l = n[Lt] || null;
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
    if (n && typeof n != "function") throw Error(c(231, t, typeof n));
    return n;
  }
  var Kn = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    Eo = !1;
  if (Kn)
    try {
      var Si = {};
      (Object.defineProperty(Si, "passive", {
        get: function () {
          Eo = !0;
        },
      }),
        window.addEventListener("test", Si, Si),
        window.removeEventListener("test", Si, Si));
    } catch {
      Eo = !1;
    }
  var Sl = null,
    Ao = null,
    Ou = null;
  function qf() {
    if (Ou) return Ou;
    var e,
      t = Ao,
      n = t.length,
      l,
      u = "value" in Sl ? Sl.value : Sl.textContent,
      r = u.length;
    for (e = 0; e < n && t[e] === u[e]; e++);
    var f = n - e;
    for (l = 1; l <= f && t[n - l] === u[r - l]; l++);
    return (Ou = u.slice(e, 1 < l ? 1 - l : void 0));
  }
  function wu(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function zu() {
    return !0;
  }
  function Yf() {
    return !1;
  }
  function Bt(e) {
    function t(n, l, u, r, f) {
      ((this._reactName = n),
        (this._targetInst = u),
        (this.type = l),
        (this.nativeEvent = r),
        (this.target = f),
        (this.currentTarget = null));
      for (var g in e)
        e.hasOwnProperty(g) && ((n = e[g]), (this[g] = n ? n(r) : r[g]));
      return (
        (this.isDefaultPrevented = (
          r.defaultPrevented != null ? r.defaultPrevented : r.returnValue === !1
        )
          ? zu
          : Yf),
        (this.isPropagationStopped = Yf),
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
            (this.isDefaultPrevented = zu));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = zu));
        },
        persist: function () {},
        isPersistent: zu,
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
    Du = Bt(Wl),
    Ei = b({}, Wl, { view: 0, detail: 0 }),
    Nv = Bt(Ei),
    xo,
    To,
    Ai,
    Uu = b({}, Ei, {
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
      getModifierState: Ro,
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
          : (e !== Ai &&
              (Ai && e.type === "mousemove"
                ? ((xo = e.screenX - Ai.screenX), (To = e.screenY - Ai.screenY))
                : (To = xo = 0),
              (Ai = e)),
            xo);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : To;
      },
    }),
    jf = Bt(Uu),
    Vv = b({}, Uu, { dataTransfer: 0 }),
    Lv = Bt(Vv),
    Bv = b({}, Ei, { relatedTarget: 0 }),
    _o = Bt(Bv),
    Hv = b({}, Wl, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    qv = Bt(Hv),
    Yv = b({}, Wl, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    jv = Bt(Yv),
    Gv = b({}, Wl, { data: 0 }),
    Gf = Bt(Gv),
    Xv = {
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
    kv = {
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
    Qv = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function Zv(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = Qv[e])
        ? !!t[e]
        : !1;
  }
  function Ro() {
    return Zv;
  }
  var Kv = b({}, Ei, {
      key: function (e) {
        if (e.key) {
          var t = Xv[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = wu(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
            ? kv[e.keyCode] || "Unidentified"
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
      getModifierState: Ro,
      charCode: function (e) {
        return e.type === "keypress" ? wu(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? wu(e)
          : e.type === "keydown" || e.type === "keyup"
            ? e.keyCode
            : 0;
      },
    }),
    Jv = Bt(Kv),
    Fv = b({}, Uu, {
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
    Xf = Bt(Fv),
    $v = b({}, Ei, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Ro,
    }),
    Wv = Bt($v),
    Pv = b({}, Wl, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Iv = Bt(Pv),
    ep = b({}, Uu, {
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
    tp = Bt(ep),
    np = b({}, Wl, { newState: 0, oldState: 0 }),
    lp = Bt(np),
    ap = [9, 13, 27, 32],
    Mo = Kn && "CompositionEvent" in window,
    xi = null;
  Kn && "documentMode" in document && (xi = document.documentMode);
  var ip = Kn && "TextEvent" in window && !xi,
    kf = Kn && (!Mo || (xi && 8 < xi && 11 >= xi)),
    Qf = " ",
    Zf = !1;
  function Kf(e, t) {
    switch (e) {
      case "keyup":
        return ap.indexOf(t.keyCode) !== -1;
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
  function Jf(e) {
    return (
      (e = e.detail),
      typeof e == "object" && "data" in e ? e.data : null
    );
  }
  var Ca = !1;
  function up(e, t) {
    switch (e) {
      case "compositionend":
        return Jf(t);
      case "keypress":
        return t.which !== 32 ? null : ((Zf = !0), Qf);
      case "textInput":
        return ((e = t.data), e === Qf && Zf ? null : e);
      default:
        return null;
    }
  }
  function rp(e, t) {
    if (Ca)
      return e === "compositionend" || (!Mo && Kf(e, t))
        ? ((e = qf()), (Ou = Ao = Sl = null), (Ca = !1), e)
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
        return kf && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var op = {
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
  function Ff(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!op[e.type] : t === "textarea";
  }
  function $f(e, t, n, l) {
    (Ra ? (Ma ? Ma.push(l) : (Ma = [l])) : (Ra = l),
      (t = Ar(t, "onChange")),
      0 < t.length &&
        ((n = new Du("onChange", "change", null, n, l)),
        e.push({ event: n, listeners: t })));
  }
  var Ti = null,
    _i = null;
  function cp(e) {
    Dh(e, 0);
  }
  function Nu(e) {
    var t = pi(e);
    if (zf(t)) return e;
  }
  function Wf(e, t) {
    if (e === "change") return t;
  }
  var Pf = !1;
  if (Kn) {
    var Co;
    if (Kn) {
      var Oo = "oninput" in document;
      if (!Oo) {
        var If = document.createElement("div");
        (If.setAttribute("oninput", "return;"),
          (Oo = typeof If.oninput == "function"));
      }
      Co = Oo;
    } else Co = !1;
    Pf = Co && (!document.documentMode || 9 < document.documentMode);
  }
  function ed() {
    Ti && (Ti.detachEvent("onpropertychange", td), (_i = Ti = null));
  }
  function td(e) {
    if (e.propertyName === "value" && Nu(_i)) {
      var t = [];
      ($f(t, _i, e, bo(e)), Hf(cp, t));
    }
  }
  function sp(e, t, n) {
    e === "focusin"
      ? (ed(), (Ti = t), (_i = n), Ti.attachEvent("onpropertychange", td))
      : e === "focusout" && ed();
  }
  function fp(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Nu(_i);
  }
  function dp(e, t) {
    if (e === "click") return Nu(t);
  }
  function mp(e, t) {
    if (e === "input" || e === "change") return Nu(t);
  }
  function hp(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var $t = typeof Object.is == "function" ? Object.is : hp;
  function Ri(e, t) {
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
  function nd(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function ld(e, t) {
    var n = nd(e);
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
      n = nd(n);
    }
  }
  function ad(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? ad(e, t.parentNode)
            : "contains" in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function id(e) {
    e =
      e != null &&
      e.ownerDocument != null &&
      e.ownerDocument.defaultView != null
        ? e.ownerDocument.defaultView
        : window;
    for (var t = Mu(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Mu(e.document);
    }
    return t;
  }
  function wo(e) {
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
  var gp = Kn && "documentMode" in document && 11 >= document.documentMode,
    Oa = null,
    zo = null,
    Mi = null,
    Do = !1;
  function ud(e, t, n) {
    var l =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Do ||
      Oa == null ||
      Oa !== Mu(l) ||
      ((l = Oa),
      "selectionStart" in l && wo(l)
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
      (Mi && Ri(Mi, l)) ||
        ((Mi = l),
        (l = Ar(zo, "onSelect")),
        0 < l.length &&
          ((t = new Du("onSelect", "select", null, t, n)),
          e.push({ event: t, listeners: l }),
          (t.target = Oa))));
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
  var wa = {
      animationend: Pl("Animation", "AnimationEnd"),
      animationiteration: Pl("Animation", "AnimationIteration"),
      animationstart: Pl("Animation", "AnimationStart"),
      transitionrun: Pl("Transition", "TransitionRun"),
      transitionstart: Pl("Transition", "TransitionStart"),
      transitioncancel: Pl("Transition", "TransitionCancel"),
      transitionend: Pl("Transition", "TransitionEnd"),
    },
    Uo = {},
    rd = {};
  Kn &&
    ((rd = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete wa.animationend.animation,
      delete wa.animationiteration.animation,
      delete wa.animationstart.animation),
    "TransitionEvent" in window || delete wa.transitionend.transition);
  function Il(e) {
    if (Uo[e]) return Uo[e];
    if (!wa[e]) return e;
    var t = wa[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in rd) return (Uo[e] = t[n]);
    return e;
  }
  var od = Il("animationend"),
    cd = Il("animationiteration"),
    sd = Il("animationstart"),
    yp = Il("transitionrun"),
    vp = Il("transitionstart"),
    pp = Il("transitioncancel"),
    fd = Il("transitionend"),
    dd = new Map(),
    No =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  No.push("scrollEnd");
  function Rn(e, t) {
    (dd.set(e, t), $l(t, [e]));
  }
  var Vu =
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
    za = 0,
    Vo = 0;
  function Lu() {
    for (var e = za, t = (Vo = za = 0); t < e; ) {
      var n = dn[t];
      dn[t++] = null;
      var l = dn[t];
      dn[t++] = null;
      var u = dn[t];
      dn[t++] = null;
      var r = dn[t];
      if (((dn[t++] = null), l !== null && u !== null)) {
        var f = l.pending;
        (f === null ? (u.next = u) : ((u.next = f.next), (f.next = u)),
          (l.pending = u));
      }
      r !== 0 && md(n, u, r);
    }
  }
  function Bu(e, t, n, l) {
    ((dn[za++] = e),
      (dn[za++] = t),
      (dn[za++] = n),
      (dn[za++] = l),
      (Vo |= l),
      (e.lanes |= l),
      (e = e.alternate),
      e !== null && (e.lanes |= l));
  }
  function Lo(e, t, n, l) {
    return (Bu(e, t, n, l), Hu(e));
  }
  function ea(e, t) {
    return (Bu(e, null, null, t), Hu(e));
  }
  function md(e, t, n) {
    e.lanes |= n;
    var l = e.alternate;
    l !== null && (l.lanes |= n);
    for (var u = !1, r = e.return; r !== null; )
      ((r.childLanes |= n),
        (l = r.alternate),
        l !== null && (l.childLanes |= n),
        r.tag === 22 &&
          ((e = r.stateNode), e === null || e._visibility & 1 || (u = !0)),
        (e = r),
        (r = r.return));
    return e.tag === 3
      ? ((r = e.stateNode),
        u &&
          t !== null &&
          ((u = 31 - ze(n)),
          (e = r.hiddenUpdates),
          (l = e[u]),
          l === null ? (e[u] = [t]) : l.push(t),
          (t.lane = n | 536870912)),
        r)
      : null;
  }
  function Hu(e) {
    if (50 < Fi) throw ((Fi = 0), (Qc = null), Error(c(185)));
    for (var t = e.return; t !== null; ) ((e = t), (t = e.return));
    return e.tag === 3 ? e.stateNode : null;
  }
  var Da = {};
  function bp(e, t, n, l) {
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
    return new bp(e, t, n, l);
  }
  function Bo(e) {
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
  function hd(e, t) {
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
  function qu(e, t, n, l, u, r) {
    var f = 0;
    if (((l = e), typeof e == "function")) Bo(e) && (f = 1);
    else if (typeof e == "string")
      f = T0(e, n, ae.current)
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
            (e.lanes = r),
            e
          );
        case D:
          return ta(n.children, u, r, t);
        case k:
          ((f = 8), (u |= 24));
          break;
        case P:
          return (
            (e = Wt(12, n, t, u | 2)),
            (e.elementType = P),
            (e.lanes = r),
            e
          );
        case ne:
          return (
            (e = Wt(13, n, t, u)),
            (e.elementType = ne),
            (e.lanes = r),
            e
          );
        case Z:
          return ((e = Wt(19, n, t, u)), (e.elementType = Z), (e.lanes = r), e);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case q:
                f = 10;
                break e;
              case G:
                f = 9;
                break e;
              case X:
                f = 11;
                break e;
              case W:
                f = 14;
                break e;
              case $:
                ((f = 16), (l = null));
                break e;
            }
          ((f = 29),
            (n = Error(c(130, e === null ? "null" : typeof e, ""))),
            (l = null));
      }
    return (
      (t = Wt(f, n, t, u)),
      (t.elementType = e),
      (t.type = l),
      (t.lanes = r),
      t
    );
  }
  function ta(e, t, n, l) {
    return ((e = Wt(7, e, l, t)), (e.lanes = n), e);
  }
  function Ho(e, t, n) {
    return ((e = Wt(6, e, null, t)), (e.lanes = n), e);
  }
  function gd(e) {
    var t = Wt(18, null, null, 0);
    return ((t.stateNode = e), t);
  }
  function qo(e, t, n) {
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
  var yd = new WeakMap();
  function mn(e, t) {
    if (typeof e == "object" && e !== null) {
      var n = yd.get(e);
      return n !== void 0
        ? n
        : ((t = { value: e, source: t, stack: Gn(t) }), yd.set(e, t), t);
    }
    return { value: e, source: t, stack: Gn(t) };
  }
  var Ua = [],
    Na = 0,
    Yu = null,
    Ci = 0,
    hn = [],
    gn = 0,
    El = null,
    Un = 1,
    Nn = "";
  function Fn(e, t) {
    ((Ua[Na++] = Ci), (Ua[Na++] = Yu), (Yu = e), (Ci = t));
  }
  function vd(e, t, n) {
    ((hn[gn++] = Un), (hn[gn++] = Nn), (hn[gn++] = El), (El = e));
    var l = Un;
    e = Nn;
    var u = 32 - ze(l) - 1;
    ((l &= ~(1 << u)), (n += 1));
    var r = 32 - ze(t) + u;
    if (30 < r) {
      var f = u - (u % 5);
      ((r = (l & ((1 << f) - 1)).toString(32)),
        (l >>= f),
        (u -= f),
        (Un = (1 << (32 - ze(t) + u)) | (n << u) | l),
        (Nn = r + e));
    } else ((Un = (1 << r) | (n << u) | l), (Nn = e));
  }
  function Yo(e) {
    e.return !== null && (Fn(e, 1), vd(e, 1, 0));
  }
  function jo(e) {
    for (; e === Yu; )
      ((Yu = Ua[--Na]), (Ua[Na] = null), (Ci = Ua[--Na]), (Ua[Na] = null));
    for (; e === El; )
      ((El = hn[--gn]),
        (hn[gn] = null),
        (Nn = hn[--gn]),
        (hn[gn] = null),
        (Un = hn[--gn]),
        (hn[gn] = null));
  }
  function pd(e, t) {
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
    Go = Error(c(519));
  function xl(e) {
    var t = Error(
      c(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1]
          ? "text"
          : "HTML",
        ""
      )
    );
    throw (Oi(mn(t, e)), Go);
  }
  function bd(e) {
    var t = e.stateNode,
      n = e.type,
      l = e.memoizedProps;
    switch (((t[xt] = e), (t[Lt] = l), n)) {
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
        for (n = 0; n < Wi.length; n++) Ue(Wi[n], t);
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
          Df(
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
        (Ue("invalid", t), Nf(t, l.value, l.defaultValue, l.children));
    }
    ((n = l.children),
      (typeof n != "string" && typeof n != "number" && typeof n != "bigint") ||
      t.textContent === "" + n ||
      l.suppressHydrationWarning === !0 ||
      Lh(t.textContent, n)
        ? (l.popover != null && (Ue("beforetoggle", t), Ue("toggle", t)),
          l.onScroll != null && Ue("scroll", t),
          l.onScrollEnd != null && Ue("scrollend", t),
          l.onClick != null && (t.onclick = Zn),
          (t = !0))
        : (t = !1),
      t || xl(e, !0));
  }
  function Sd(e) {
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
  function Va(e) {
    if (e !== Tt) return !1;
    if (!Be) return (Sd(e), (Be = !0), !1);
    var t = e.tag,
      n;
    if (
      ((n = t !== 3 && t !== 27) &&
        ((n = t === 5) &&
          ((n = e.type),
          (n =
            !(n !== "form" && n !== "button") || us(e.type, e.memoizedProps))),
        (n = !n)),
      n && et && xl(e),
      Sd(e),
      t === 13)
    ) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(c(317));
      et = Qh(e);
    } else if (t === 31) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(c(317));
      et = Qh(e);
    } else
      t === 27
        ? ((t = et), Bl(e.type) ? ((e = fs), (fs = null), (et = e)) : (et = t))
        : (et = Tt ? pn(e.stateNode.nextSibling) : null);
    return !0;
  }
  function na() {
    ((et = Tt = null), (Be = !1));
  }
  function Xo() {
    var e = Al;
    return (
      e !== null &&
        (jt === null ? (jt = e) : jt.push.apply(jt, e), (Al = null)),
      e
    );
  }
  function Oi(e) {
    Al === null ? (Al = [e]) : Al.push(e);
  }
  var ko = S(null),
    la = null,
    $n = null;
  function Tl(e, t, n) {
    (J(ko, t._currentValue), (t._currentValue = n));
  }
  function Wn(e) {
    ((e._currentValue = ko.current), L(ko));
  }
  function Qo(e, t, n) {
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
  function Zo(e, t, n, l) {
    var u = e.child;
    for (u !== null && (u.return = e); u !== null; ) {
      var r = u.dependencies;
      if (r !== null) {
        var f = u.child;
        r = r.firstContext;
        e: for (; r !== null; ) {
          var g = r;
          r = u;
          for (var E = 0; E < t.length; E++)
            if (g.context === t[E]) {
              ((r.lanes |= n),
                (g = r.alternate),
                g !== null && (g.lanes |= n),
                Qo(r.return, n, e),
                l || (f = null));
              break e;
            }
          r = g.next;
        }
      } else if (u.tag === 18) {
        if (((f = u.return), f === null)) throw Error(c(341));
        ((f.lanes |= n),
          (r = f.alternate),
          r !== null && (r.lanes |= n),
          Qo(f, n, e),
          (f = null));
      } else f = u.child;
      if (f !== null) f.return = u;
      else
        for (f = u; f !== null; ) {
          if (f === e) {
            f = null;
            break;
          }
          if (((u = f.sibling), u !== null)) {
            ((u.return = f.return), (f = u));
            break;
          }
          f = f.return;
        }
      u = f;
    }
  }
  function La(e, t, n, l) {
    e = null;
    for (var u = t, r = !1; u !== null; ) {
      if (!r) {
        if ((u.flags & 524288) !== 0) r = !0;
        else if ((u.flags & 262144) !== 0) break;
      }
      if (u.tag === 10) {
        var f = u.alternate;
        if (f === null) throw Error(c(387));
        if (((f = f.memoizedProps), f !== null)) {
          var g = u.type;
          $t(u.pendingProps.value, f.value) ||
            (e !== null ? e.push(g) : (e = [g]));
        }
      } else if (u === le.current) {
        if (((f = u.alternate), f === null)) throw Error(c(387));
        f.memoizedState.memoizedState !== u.memoizedState.memoizedState &&
          (e !== null ? e.push(nu) : (e = [nu]));
      }
      u = u.return;
    }
    (e !== null && Zo(t, e, n, l), (t.flags |= 262144));
  }
  function ju(e) {
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
    return Ed(la, e);
  }
  function Gu(e, t) {
    return (la === null && aa(e), Ed(e, t));
  }
  function Ed(e, t) {
    var n = t._currentValue;
    if (((t = { context: t, memoizedValue: n, next: null }), $n === null)) {
      if (e === null) throw Error(c(308));
      (($n = t),
        (e.dependencies = { lanes: 0, firstContext: t }),
        (e.flags |= 524288));
    } else $n = $n.next = t;
    return n;
  }
  var Sp =
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
    Ep = a.unstable_scheduleCallback,
    Ap = a.unstable_NormalPriority,
    st = {
      $$typeof: q,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Ko() {
    return { controller: new Sp(), data: new Map(), refCount: 0 };
  }
  function wi(e) {
    (e.refCount--,
      e.refCount === 0 &&
        Ep(Ap, function () {
          e.controller.abort();
        }));
  }
  var zi = null,
    Jo = 0,
    Ba = 0,
    Ha = null;
  function xp(e, t) {
    if (zi === null) {
      var n = (zi = []);
      ((Jo = 0),
        (Ba = Wc()),
        (Ha = {
          status: "pending",
          value: void 0,
          then: function (l) {
            n.push(l);
          },
        }));
    }
    return (Jo++, t.then(Ad, Ad), t);
  }
  function Ad() {
    if (--Jo === 0 && zi !== null) {
      Ha !== null && (Ha.status = "fulfilled");
      var e = zi;
      ((zi = null), (Ba = 0), (Ha = null));
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function Tp(e, t) {
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
  var xd = R.S;
  R.S = function (e, t) {
    ((uh = ie()),
      typeof t == "object" &&
        t !== null &&
        typeof t.then == "function" &&
        xp(e, t),
      xd !== null && xd(e, t));
  };
  var ia = S(null);
  function Fo() {
    var e = ia.current;
    return e !== null ? e : $e.pooledCache;
  }
  function Xu(e, t) {
    t === null ? J(ia, ia.current) : J(ia, t.pool);
  }
  function Td() {
    var e = Fo();
    return e === null ? null : { parent: st._currentValue, pool: e };
  }
  var qa = Error(c(460)),
    $o = Error(c(474)),
    ku = Error(c(542)),
    Qu = { then: function () {} };
  function _d(e) {
    return ((e = e.status), e === "fulfilled" || e === "rejected");
  }
  function Rd(e, t, n) {
    switch (
      ((n = e[n]),
      n === void 0 ? e.push(t) : n !== t && (t.then(Zn, Zn), (t = n)),
      t.status)
    ) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw ((e = t.reason), Cd(e), e);
      default:
        if (typeof t.status == "string") t.then(Zn, Zn);
        else {
          if (((e = $e), e !== null && 100 < e.shellSuspendCounter))
            throw Error(c(482));
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
            throw ((e = t.reason), Cd(e), e);
        }
        throw ((ra = t), qa);
    }
  }
  function ua(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (n) {
      throw n !== null && typeof n == "object" && typeof n.then == "function"
        ? ((ra = n), qa)
        : n;
    }
  }
  var ra = null;
  function Md() {
    if (ra === null) throw Error(c(459));
    var e = ra;
    return ((ra = null), e);
  }
  function Cd(e) {
    if (e === qa || e === ku) throw Error(c(483));
  }
  var Ya = null,
    Di = 0;
  function Zu(e) {
    var t = Di;
    return ((Di += 1), Ya === null && (Ya = []), Rd(Ya, e, t));
  }
  function Ui(e, t) {
    ((t = t.props.ref), (e.ref = t !== void 0 ? t : null));
  }
  function Ku(e, t) {
    throw t.$$typeof === x
      ? Error(c(525))
      : ((e = Object.prototype.toString.call(t)),
        Error(
          c(
            31,
            e === "[object Object]"
              ? "object with keys {" + Object.keys(t).join(", ") + "}"
              : e
          )
        ));
  }
  function Od(e) {
    function t(z, T) {
      if (e) {
        var N = z.deletions;
        N === null ? ((z.deletions = [T]), (z.flags |= 16)) : N.push(T);
      }
    }
    function n(z, T) {
      if (!e) return null;
      for (; T !== null; ) (t(z, T), (T = T.sibling));
      return null;
    }
    function l(z) {
      for (var T = new Map(); z !== null; )
        (z.key !== null ? T.set(z.key, z) : T.set(z.index, z), (z = z.sibling));
      return T;
    }
    function u(z, T) {
      return ((z = Jn(z, T)), (z.index = 0), (z.sibling = null), z);
    }
    function r(z, T, N) {
      return (
        (z.index = N),
        e
          ? ((N = z.alternate),
            N !== null
              ? ((N = N.index), N < T ? ((z.flags |= 67108866), T) : N)
              : ((z.flags |= 67108866), T))
          : ((z.flags |= 1048576), T)
      );
    }
    function f(z) {
      return (e && z.alternate === null && (z.flags |= 67108866), z);
    }
    function g(z, T, N, I) {
      return T === null || T.tag !== 6
        ? ((T = Ho(N, z.mode, I)), (T.return = z), T)
        : ((T = u(T, N)), (T.return = z), T);
    }
    function E(z, T, N, I) {
      var xe = N.type;
      return xe === D
        ? F(z, T, N.props.children, I, N.key)
        : T !== null &&
            (T.elementType === xe ||
              (typeof xe == "object" &&
                xe !== null &&
                xe.$$typeof === $ &&
                ua(xe) === T.type))
          ? ((T = u(T, N.props)), Ui(T, N), (T.return = z), T)
          : ((T = qu(N.type, N.key, N.props, null, z.mode, I)),
            Ui(T, N),
            (T.return = z),
            T);
    }
    function V(z, T, N, I) {
      return T === null ||
        T.tag !== 4 ||
        T.stateNode.containerInfo !== N.containerInfo ||
        T.stateNode.implementation !== N.implementation
        ? ((T = qo(N, z.mode, I)), (T.return = z), T)
        : ((T = u(T, N.children || [])), (T.return = z), T);
    }
    function F(z, T, N, I, xe) {
      return T === null || T.tag !== 7
        ? ((T = ta(N, z.mode, I, xe)), (T.return = z), T)
        : ((T = u(T, N)), (T.return = z), T);
    }
    function ee(z, T, N) {
      if (
        (typeof T == "string" && T !== "") ||
        typeof T == "number" ||
        typeof T == "bigint"
      )
        return ((T = Ho("" + T, z.mode, N)), (T.return = z), T);
      if (typeof T == "object" && T !== null) {
        switch (T.$$typeof) {
          case _:
            return (
              (N = qu(T.type, T.key, T.props, null, z.mode, N)),
              Ui(N, T),
              (N.return = z),
              N
            );
          case O:
            return ((T = qo(T, z.mode, N)), (T.return = z), T);
          case $:
            return ((T = ua(T)), ee(z, T, N));
        }
        if (oe(T) || Q(T))
          return ((T = ta(T, z.mode, N, null)), (T.return = z), T);
        if (typeof T.then == "function") return ee(z, Zu(T), N);
        if (T.$$typeof === q) return ee(z, Gu(z, T), N);
        Ku(z, T);
      }
      return null;
    }
    function H(z, T, N, I) {
      var xe = T !== null ? T.key : null;
      if (
        (typeof N == "string" && N !== "") ||
        typeof N == "number" ||
        typeof N == "bigint"
      )
        return xe !== null ? null : g(z, T, "" + N, I);
      if (typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case _:
            return N.key === xe ? E(z, T, N, I) : null;
          case O:
            return N.key === xe ? V(z, T, N, I) : null;
          case $:
            return ((N = ua(N)), H(z, T, N, I));
        }
        if (oe(N) || Q(N)) return xe !== null ? null : F(z, T, N, I, null);
        if (typeof N.then == "function") return H(z, T, Zu(N), I);
        if (N.$$typeof === q) return H(z, T, Gu(z, N), I);
        Ku(z, N);
      }
      return null;
    }
    function j(z, T, N, I, xe) {
      if (
        (typeof I == "string" && I !== "") ||
        typeof I == "number" ||
        typeof I == "bigint"
      )
        return ((z = z.get(N) || null), g(T, z, "" + I, xe));
      if (typeof I == "object" && I !== null) {
        switch (I.$$typeof) {
          case _:
            return (
              (z = z.get(I.key === null ? N : I.key) || null),
              E(T, z, I, xe)
            );
          case O:
            return (
              (z = z.get(I.key === null ? N : I.key) || null),
              V(T, z, I, xe)
            );
          case $:
            return ((I = ua(I)), j(z, T, N, I, xe));
        }
        if (oe(I) || Q(I))
          return ((z = z.get(N) || null), F(T, z, I, xe, null));
        if (typeof I.then == "function") return j(z, T, N, Zu(I), xe);
        if (I.$$typeof === q) return j(z, T, N, Gu(T, I), xe);
        Ku(T, I);
      }
      return null;
    }
    function ve(z, T, N, I) {
      for (
        var xe = null, je = null, Se = T, Ce = (T = 0), Ve = null;
        Se !== null && Ce < N.length;
        Ce++
      ) {
        Se.index > Ce ? ((Ve = Se), (Se = null)) : (Ve = Se.sibling);
        var Ge = H(z, Se, N[Ce], I);
        if (Ge === null) {
          Se === null && (Se = Ve);
          break;
        }
        (e && Se && Ge.alternate === null && t(z, Se),
          (T = r(Ge, T, Ce)),
          je === null ? (xe = Ge) : (je.sibling = Ge),
          (je = Ge),
          (Se = Ve));
      }
      if (Ce === N.length) return (n(z, Se), Be && Fn(z, Ce), xe);
      if (Se === null) {
        for (; Ce < N.length; Ce++)
          ((Se = ee(z, N[Ce], I)),
            Se !== null &&
              ((T = r(Se, T, Ce)),
              je === null ? (xe = Se) : (je.sibling = Se),
              (je = Se)));
        return (Be && Fn(z, Ce), xe);
      }
      for (Se = l(Se); Ce < N.length; Ce++)
        ((Ve = j(Se, z, Ce, N[Ce], I)),
          Ve !== null &&
            (e &&
              Ve.alternate !== null &&
              Se.delete(Ve.key === null ? Ce : Ve.key),
            (T = r(Ve, T, Ce)),
            je === null ? (xe = Ve) : (je.sibling = Ve),
            (je = Ve)));
      return (
        e &&
          Se.forEach(function (Gl) {
            return t(z, Gl);
          }),
        Be && Fn(z, Ce),
        xe
      );
    }
    function _e(z, T, N, I) {
      if (N == null) throw Error(c(151));
      for (
        var xe = null,
          je = null,
          Se = T,
          Ce = (T = 0),
          Ve = null,
          Ge = N.next();
        Se !== null && !Ge.done;
        Ce++, Ge = N.next()
      ) {
        Se.index > Ce ? ((Ve = Se), (Se = null)) : (Ve = Se.sibling);
        var Gl = H(z, Se, Ge.value, I);
        if (Gl === null) {
          Se === null && (Se = Ve);
          break;
        }
        (e && Se && Gl.alternate === null && t(z, Se),
          (T = r(Gl, T, Ce)),
          je === null ? (xe = Gl) : (je.sibling = Gl),
          (je = Gl),
          (Se = Ve));
      }
      if (Ge.done) return (n(z, Se), Be && Fn(z, Ce), xe);
      if (Se === null) {
        for (; !Ge.done; Ce++, Ge = N.next())
          ((Ge = ee(z, Ge.value, I)),
            Ge !== null &&
              ((T = r(Ge, T, Ce)),
              je === null ? (xe = Ge) : (je.sibling = Ge),
              (je = Ge)));
        return (Be && Fn(z, Ce), xe);
      }
      for (Se = l(Se); !Ge.done; Ce++, Ge = N.next())
        ((Ge = j(Se, z, Ce, Ge.value, I)),
          Ge !== null &&
            (e &&
              Ge.alternate !== null &&
              Se.delete(Ge.key === null ? Ce : Ge.key),
            (T = r(Ge, T, Ce)),
            je === null ? (xe = Ge) : (je.sibling = Ge),
            (je = Ge)));
      return (
        e &&
          Se.forEach(function (V0) {
            return t(z, V0);
          }),
        Be && Fn(z, Ce),
        xe
      );
    }
    function Fe(z, T, N, I) {
      if (
        (typeof N == "object" &&
          N !== null &&
          N.type === D &&
          N.key === null &&
          (N = N.props.children),
        typeof N == "object" && N !== null)
      ) {
        switch (N.$$typeof) {
          case _:
            e: {
              for (var xe = N.key; T !== null; ) {
                if (T.key === xe) {
                  if (((xe = N.type), xe === D)) {
                    if (T.tag === 7) {
                      (n(z, T.sibling),
                        (I = u(T, N.props.children)),
                        (I.return = z),
                        (z = I));
                      break e;
                    }
                  } else if (
                    T.elementType === xe ||
                    (typeof xe == "object" &&
                      xe !== null &&
                      xe.$$typeof === $ &&
                      ua(xe) === T.type)
                  ) {
                    (n(z, T.sibling),
                      (I = u(T, N.props)),
                      Ui(I, N),
                      (I.return = z),
                      (z = I));
                    break e;
                  }
                  n(z, T);
                  break;
                } else t(z, T);
                T = T.sibling;
              }
              N.type === D
                ? ((I = ta(N.props.children, z.mode, I, N.key)),
                  (I.return = z),
                  (z = I))
                : ((I = qu(N.type, N.key, N.props, null, z.mode, I)),
                  Ui(I, N),
                  (I.return = z),
                  (z = I));
            }
            return f(z);
          case O:
            e: {
              for (xe = N.key; T !== null; ) {
                if (T.key === xe)
                  if (
                    T.tag === 4 &&
                    T.stateNode.containerInfo === N.containerInfo &&
                    T.stateNode.implementation === N.implementation
                  ) {
                    (n(z, T.sibling),
                      (I = u(T, N.children || [])),
                      (I.return = z),
                      (z = I));
                    break e;
                  } else {
                    n(z, T);
                    break;
                  }
                else t(z, T);
                T = T.sibling;
              }
              ((I = qo(N, z.mode, I)), (I.return = z), (z = I));
            }
            return f(z);
          case $:
            return ((N = ua(N)), Fe(z, T, N, I));
        }
        if (oe(N)) return ve(z, T, N, I);
        if (Q(N)) {
          if (((xe = Q(N)), typeof xe != "function")) throw Error(c(150));
          return ((N = xe.call(N)), _e(z, T, N, I));
        }
        if (typeof N.then == "function") return Fe(z, T, Zu(N), I);
        if (N.$$typeof === q) return Fe(z, T, Gu(z, N), I);
        Ku(z, N);
      }
      return (typeof N == "string" && N !== "") ||
        typeof N == "number" ||
        typeof N == "bigint"
        ? ((N = "" + N),
          T !== null && T.tag === 6
            ? (n(z, T.sibling), (I = u(T, N)), (I.return = z), (z = I))
            : (n(z, T), (I = Ho(N, z.mode, I)), (I.return = z), (z = I)),
          f(z))
        : n(z, T);
    }
    return function (z, T, N, I) {
      try {
        Di = 0;
        var xe = Fe(z, T, N, I);
        return ((Ya = null), xe);
      } catch (Se) {
        if (Se === qa || Se === ku) throw Se;
        var je = Wt(29, Se, null, z.mode);
        return ((je.lanes = I), (je.return = z), je);
      } finally {
      }
    };
  }
  var oa = Od(!0),
    wd = Od(!1),
    _l = !1;
  function Wo(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function Po(e, t) {
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
  function Ml(e, t, n) {
    var l = e.updateQueue;
    if (l === null) return null;
    if (((l = l.shared), (Xe & 2) !== 0)) {
      var u = l.pending;
      return (
        u === null ? (t.next = t) : ((t.next = u.next), (u.next = t)),
        (l.pending = t),
        (t = Hu(e)),
        md(e, null, n),
        t
      );
    }
    return (Bu(e, l, t, n), Hu(e));
  }
  function Ni(e, t, n) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194048) !== 0))
    ) {
      var l = t.lanes;
      ((l &= e.pendingLanes), (n |= l), (t.lanes = n), xu(e, n));
    }
  }
  function Io(e, t) {
    var n = e.updateQueue,
      l = e.alternate;
    if (l !== null && ((l = l.updateQueue), n === l)) {
      var u = null,
        r = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var f = {
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: null,
            next: null,
          };
          (r === null ? (u = r = f) : (r = r.next = f), (n = n.next));
        } while (n !== null);
        r === null ? (u = r = t) : (r = r.next = t);
      } else u = r = t;
      ((n = {
        baseState: l.baseState,
        firstBaseUpdate: u,
        lastBaseUpdate: r,
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
  var ec = !1;
  function Vi() {
    if (ec) {
      var e = Ha;
      if (e !== null) throw e;
    }
  }
  function Li(e, t, n, l) {
    ec = !1;
    var u = e.updateQueue;
    _l = !1;
    var r = u.firstBaseUpdate,
      f = u.lastBaseUpdate,
      g = u.shared.pending;
    if (g !== null) {
      u.shared.pending = null;
      var E = g,
        V = E.next;
      ((E.next = null), f === null ? (r = V) : (f.next = V), (f = E));
      var F = e.alternate;
      F !== null &&
        ((F = F.updateQueue),
        (g = F.lastBaseUpdate),
        g !== f &&
          (g === null ? (F.firstBaseUpdate = V) : (g.next = V),
          (F.lastBaseUpdate = E)));
    }
    if (r !== null) {
      var ee = u.baseState;
      ((f = 0), (F = V = E = null), (g = r));
      do {
        var H = g.lane & -536870913,
          j = H !== g.lane;
        if (j ? (Ne & H) === H : (l & H) === H) {
          (H !== 0 && H === Ba && (ec = !0),
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
            F === null ? ((V = F = j), (E = ee)) : (F = F.next = j),
            (f |= H));
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
        (u.firstBaseUpdate = V),
        (u.lastBaseUpdate = F),
        r === null && (u.shared.lanes = 0),
        (Dl |= f),
        (e.lanes = f),
        (e.memoizedState = ee));
    }
  }
  function zd(e, t) {
    if (typeof e != "function") throw Error(c(191, e));
    e.call(t);
  }
  function Dd(e, t) {
    var n = e.callbacks;
    if (n !== null)
      for (e.callbacks = null, e = 0; e < n.length; e++) zd(n[e], t);
  }
  var ja = S(null),
    Ju = S(0);
  function Ud(e, t) {
    ((e = ul), J(Ju, e), J(ja, t), (ul = e | t.baseLanes));
  }
  function tc() {
    (J(Ju, ul), J(ja, ja.current));
  }
  function nc() {
    ((ul = Ju.current), L(ja), L(Ju));
  }
  var Pt = S(null),
    vn = null;
  function Cl(e) {
    var t = e.alternate;
    (J(rt, rt.current & 1),
      J(Pt, e),
      vn === null &&
        (t === null || ja.current !== null || t.memoizedState !== null) &&
        (vn = e));
  }
  function lc(e) {
    (J(rt, rt.current), J(Pt, e), vn === null && (vn = e));
  }
  function Nd(e) {
    e.tag === 22
      ? (J(rt, rt.current), J(Pt, e), vn === null && (vn = e))
      : Ol();
  }
  function Ol() {
    (J(rt, rt.current), J(Pt, Pt.current));
  }
  function It(e) {
    (L(Pt), vn === e && (vn = null), L(rt));
  }
  var rt = S(0);
  function Fu(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && ((n = n.dehydrated), n === null || cs(n) || ss(n)))
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
    Me = null,
    Ke = null,
    ft = null,
    $u = !1,
    Ga = !1,
    ca = !1,
    Wu = 0,
    Bi = 0,
    Xa = null,
    _p = 0;
  function at() {
    throw Error(c(321));
  }
  function ac(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!$t(e[n], t[n])) return !1;
    return !0;
  }
  function ic(e, t, n, l, u, r) {
    return (
      (Pn = r),
      (Me = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (R.H = e === null || e.memoizedState === null ? vm : Sc),
      (ca = !1),
      (r = n(l, u)),
      (ca = !1),
      Ga && (r = Ld(t, n, l, u)),
      Vd(e),
      r
    );
  }
  function Vd(e) {
    R.H = Yi;
    var t = Ke !== null && Ke.next !== null;
    if (((Pn = 0), (ft = Ke = Me = null), ($u = !1), (Bi = 0), (Xa = null), t))
      throw Error(c(300));
    e === null ||
      dt ||
      ((e = e.dependencies), e !== null && ju(e) && (dt = !0));
  }
  function Ld(e, t, n, l) {
    Me = e;
    var u = 0;
    do {
      if ((Ga && (Xa = null), (Bi = 0), (Ga = !1), 25 <= u))
        throw Error(c(301));
      if (((u += 1), (ft = Ke = null), e.updateQueue != null)) {
        var r = e.updateQueue;
        ((r.lastEffect = null),
          (r.events = null),
          (r.stores = null),
          r.memoCache != null && (r.memoCache.index = 0));
      }
      ((R.H = pm), (r = t(n, l)));
    } while (Ga);
    return r;
  }
  function Rp() {
    var e = R.H,
      t = e.useState()[0];
    return (
      (t = typeof t.then == "function" ? Hi(t) : t),
      (e = e.useState()[0]),
      (Ke !== null ? Ke.memoizedState : null) !== e && (Me.flags |= 1024),
      t
    );
  }
  function uc() {
    var e = Wu !== 0;
    return ((Wu = 0), e);
  }
  function rc(e, t, n) {
    ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~n));
  }
  function oc(e) {
    if ($u) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        (t !== null && (t.pending = null), (e = e.next));
      }
      $u = !1;
    }
    ((Pn = 0), (ft = Ke = Me = null), (Ga = !1), (Bi = Wu = 0), (Xa = null));
  }
  function Ut() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return (ft === null ? (Me.memoizedState = ft = e) : (ft = ft.next = e), ft);
  }
  function ot() {
    if (Ke === null) {
      var e = Me.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Ke.next;
    var t = ft === null ? Me.memoizedState : ft.next;
    if (t !== null) ((ft = t), (Ke = e));
    else {
      if (e === null)
        throw Me.alternate === null ? Error(c(467)) : Error(c(310));
      ((Ke = e),
        (e = {
          memoizedState: Ke.memoizedState,
          baseState: Ke.baseState,
          baseQueue: Ke.baseQueue,
          queue: Ke.queue,
          next: null,
        }),
        ft === null ? (Me.memoizedState = ft = e) : (ft = ft.next = e));
    }
    return ft;
  }
  function Pu() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Hi(e) {
    var t = Bi;
    return (
      (Bi += 1),
      Xa === null && (Xa = []),
      (e = Rd(Xa, e, t)),
      (t = Me),
      (ft === null ? t.memoizedState : ft.next) === null &&
        ((t = t.alternate),
        (R.H = t === null || t.memoizedState === null ? vm : Sc)),
      e
    );
  }
  function Iu(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Hi(e);
      if (e.$$typeof === q) return _t(e);
    }
    throw Error(c(438, String(e)));
  }
  function cc(e) {
    var t = null,
      n = Me.updateQueue;
    if ((n !== null && (t = n.memoCache), t == null)) {
      var l = Me.alternate;
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
      n === null && ((n = Pu()), (Me.updateQueue = n)),
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
  function er(e) {
    var t = ot();
    return sc(t, Ke, e);
  }
  function sc(e, t, n) {
    var l = e.queue;
    if (l === null) throw Error(c(311));
    l.lastRenderedReducer = n;
    var u = e.baseQueue,
      r = l.pending;
    if (r !== null) {
      if (u !== null) {
        var f = u.next;
        ((u.next = r.next), (r.next = f));
      }
      ((t.baseQueue = u = r), (l.pending = null));
    }
    if (((r = e.baseState), u === null)) e.memoizedState = r;
    else {
      t = u.next;
      var g = (f = null),
        E = null,
        V = t,
        F = !1;
      do {
        var ee = V.lane & -536870913;
        if (ee !== V.lane ? (Ne & ee) === ee : (Pn & ee) === ee) {
          var H = V.revertLane;
          if (H === 0)
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
              ee === Ba && (F = !0));
          else if ((Pn & H) === H) {
            ((V = V.next), H === Ba && (F = !0));
            continue;
          } else
            ((ee = {
              lane: 0,
              revertLane: V.revertLane,
              gesture: null,
              action: V.action,
              hasEagerState: V.hasEagerState,
              eagerState: V.eagerState,
              next: null,
            }),
              E === null ? ((g = E = ee), (f = r)) : (E = E.next = ee),
              (Me.lanes |= H),
              (Dl |= H));
          ((ee = V.action),
            ca && n(r, ee),
            (r = V.hasEagerState ? V.eagerState : n(r, ee)));
        } else
          ((H = {
            lane: ee,
            revertLane: V.revertLane,
            gesture: V.gesture,
            action: V.action,
            hasEagerState: V.hasEagerState,
            eagerState: V.eagerState,
            next: null,
          }),
            E === null ? ((g = E = H), (f = r)) : (E = E.next = H),
            (Me.lanes |= ee),
            (Dl |= ee));
        V = V.next;
      } while (V !== null && V !== t);
      if (
        (E === null ? (f = r) : (E.next = g),
        !$t(r, e.memoizedState) && ((dt = !0), F && ((n = Ha), n !== null)))
      )
        throw n;
      ((e.memoizedState = r),
        (e.baseState = f),
        (e.baseQueue = E),
        (l.lastRenderedState = r));
    }
    return (u === null && (l.lanes = 0), [e.memoizedState, l.dispatch]);
  }
  function fc(e) {
    var t = ot(),
      n = t.queue;
    if (n === null) throw Error(c(311));
    n.lastRenderedReducer = e;
    var l = n.dispatch,
      u = n.pending,
      r = t.memoizedState;
    if (u !== null) {
      n.pending = null;
      var f = (u = u.next);
      do ((r = e(r, f.action)), (f = f.next));
      while (f !== u);
      ($t(r, t.memoizedState) || (dt = !0),
        (t.memoizedState = r),
        t.baseQueue === null && (t.baseState = r),
        (n.lastRenderedState = r));
    }
    return [r, l];
  }
  function Bd(e, t, n) {
    var l = Me,
      u = ot(),
      r = Be;
    if (r) {
      if (n === void 0) throw Error(c(407));
      n = n();
    } else n = t();
    var f = !$t((Ke || u).memoizedState, n);
    if (
      (f && ((u.memoizedState = n), (dt = !0)),
      (u = u.queue),
      hc(Yd.bind(null, l, u, e), [e]),
      u.getSnapshot !== t || f || (ft !== null && ft.memoizedState.tag & 1))
    ) {
      if (
        ((l.flags |= 2048),
        ka(9, { destroy: void 0 }, qd.bind(null, l, u, n, t), null),
        $e === null)
      )
        throw Error(c(349));
      r || (Pn & 127) !== 0 || Hd(l, t, n);
    }
    return n;
  }
  function Hd(e, t, n) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = Me.updateQueue),
      t === null
        ? ((t = Pu()), (Me.updateQueue = t), (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
  }
  function qd(e, t, n, l) {
    ((t.value = n), (t.getSnapshot = l), jd(t) && Gd(e));
  }
  function Yd(e, t, n) {
    return n(function () {
      jd(t) && Gd(e);
    });
  }
  function jd(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !$t(e, n);
    } catch {
      return !0;
    }
  }
  function Gd(e) {
    var t = ea(e, 2);
    t !== null && Gt(t, e, 2);
  }
  function dc(e) {
    var t = Ut();
    if (typeof e == "function") {
      var n = e;
      if (((e = n()), ca)) {
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
  function Xd(e, t, n, l) {
    return ((e.baseState = n), sc(e, Ke, typeof l == "function" ? l : In));
  }
  function Mp(e, t, n, l, u) {
    if (lr(e)) throw Error(c(485));
    if (((e = t.action), e !== null)) {
      var r = {
        payload: u,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (f) {
          r.listeners.push(f);
        },
      };
      (R.T !== null ? n(!0) : (r.isTransition = !1),
        l(r),
        (n = t.pending),
        n === null
          ? ((r.next = t.pending = r), kd(t, r))
          : ((r.next = n.next), (t.pending = n.next = r)));
    }
  }
  function kd(e, t) {
    var n = t.action,
      l = t.payload,
      u = e.state;
    if (t.isTransition) {
      var r = R.T,
        f = {};
      R.T = f;
      try {
        var g = n(u, l),
          E = R.S;
        (E !== null && E(f, g), Qd(e, t, g));
      } catch (V) {
        mc(e, t, V);
      } finally {
        (r !== null && f.types !== null && (r.types = f.types), (R.T = r));
      }
    } else
      try {
        ((r = n(u, l)), Qd(e, t, r));
      } catch (V) {
        mc(e, t, V);
      }
  }
  function Qd(e, t, n) {
    n !== null && typeof n == "object" && typeof n.then == "function"
      ? n.then(
          function (l) {
            Zd(e, t, l);
          },
          function (l) {
            return mc(e, t, l);
          }
        )
      : Zd(e, t, n);
  }
  function Zd(e, t, n) {
    ((t.status = "fulfilled"),
      (t.value = n),
      Kd(t),
      (e.state = n),
      (t = e.pending),
      t !== null &&
        ((n = t.next),
        n === t ? (e.pending = null) : ((n = n.next), (t.next = n), kd(e, n))));
  }
  function mc(e, t, n) {
    var l = e.pending;
    if (((e.pending = null), l !== null)) {
      l = l.next;
      do ((t.status = "rejected"), (t.reason = n), Kd(t), (t = t.next));
      while (t !== l);
    }
    e.action = null;
  }
  function Kd(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function Jd(e, t) {
    return t;
  }
  function Fd(e, t) {
    if (Be) {
      var n = $e.formState;
      if (n !== null) {
        e: {
          var l = Me;
          if (Be) {
            if (et) {
              t: {
                for (var u = et, r = yn; u.nodeType !== 8; ) {
                  if (!r) {
                    u = null;
                    break t;
                  }
                  if (((u = pn(u.nextSibling)), u === null)) {
                    u = null;
                    break t;
                  }
                }
                ((r = u.data), (u = r === "F!" || r === "F" ? u : null));
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
        lastRenderedReducer: Jd,
        lastRenderedState: t,
      }),
      (n.queue = l),
      (n = hm.bind(null, Me, l)),
      (l.dispatch = n),
      (l = dc(!1)),
      (r = bc.bind(null, Me, !1, l.queue)),
      (l = Ut()),
      (u = { state: t, dispatch: null, action: e, pending: null }),
      (l.queue = u),
      (n = Mp.bind(null, Me, u, r, n)),
      (u.dispatch = n),
      (l.memoizedState = e),
      [t, n, !1]
    );
  }
  function $d(e) {
    var t = ot();
    return Wd(t, Ke, e);
  }
  function Wd(e, t, n) {
    if (
      ((t = sc(e, t, Jd)[0]),
      (e = er(In)[0]),
      typeof t == "object" && t !== null && typeof t.then == "function")
    )
      try {
        var l = Hi(t);
      } catch (f) {
        throw f === qa ? ku : f;
      }
    else l = t;
    t = ot();
    var u = t.queue,
      r = u.dispatch;
    return (
      n !== t.memoizedState &&
        ((Me.flags |= 2048),
        ka(9, { destroy: void 0 }, Cp.bind(null, u, n), null)),
      [l, r, e]
    );
  }
  function Cp(e, t) {
    e.action = t;
  }
  function Pd(e) {
    var t = ot(),
      n = Ke;
    if (n !== null) return Wd(t, n, e);
    (ot(), (t = t.memoizedState), (n = ot()));
    var l = n.queue.dispatch;
    return ((n.memoizedState = e), [t, l, !1]);
  }
  function ka(e, t, n, l) {
    return (
      (e = { tag: e, create: n, deps: l, inst: t, next: null }),
      (t = Me.updateQueue),
      t === null && ((t = Pu()), (Me.updateQueue = t)),
      (n = t.lastEffect),
      n === null
        ? (t.lastEffect = e.next = e)
        : ((l = n.next), (n.next = e), (e.next = l), (t.lastEffect = e)),
      e
    );
  }
  function Id() {
    return ot().memoizedState;
  }
  function tr(e, t, n, l) {
    var u = Ut();
    ((Me.flags |= e),
      (u.memoizedState = ka(
        1 | t,
        { destroy: void 0 },
        n,
        l === void 0 ? null : l
      )));
  }
  function nr(e, t, n, l) {
    var u = ot();
    l = l === void 0 ? null : l;
    var r = u.memoizedState.inst;
    Ke !== null && l !== null && ac(l, Ke.memoizedState.deps)
      ? (u.memoizedState = ka(t, r, n, l))
      : ((Me.flags |= e), (u.memoizedState = ka(1 | t, r, n, l)));
  }
  function em(e, t) {
    tr(8390656, 8, e, t);
  }
  function hc(e, t) {
    nr(2048, 8, e, t);
  }
  function Op(e) {
    Me.flags |= 4;
    var t = Me.updateQueue;
    if (t === null) ((t = Pu()), (Me.updateQueue = t), (t.events = [e]));
    else {
      var n = t.events;
      n === null ? (t.events = [e]) : n.push(e);
    }
  }
  function tm(e) {
    var t = ot().memoizedState;
    return (
      Op({ ref: t, nextImpl: e }),
      function () {
        if ((Xe & 2) !== 0) throw Error(c(440));
        return t.impl.apply(void 0, arguments);
      }
    );
  }
  function nm(e, t) {
    return nr(4, 2, e, t);
  }
  function lm(e, t) {
    return nr(4, 4, e, t);
  }
  function am(e, t) {
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
  function im(e, t, n) {
    ((n = n != null ? n.concat([e]) : null), nr(4, 4, am.bind(null, t, e), n));
  }
  function gc() {}
  function um(e, t) {
    var n = ot();
    t = t === void 0 ? null : t;
    var l = n.memoizedState;
    return t !== null && ac(t, l[1]) ? l[0] : ((n.memoizedState = [e, t]), e);
  }
  function rm(e, t) {
    var n = ot();
    t = t === void 0 ? null : t;
    var l = n.memoizedState;
    if (t !== null && ac(t, l[1])) return l[0];
    if (((l = e()), ca)) {
      Ft(!0);
      try {
        e();
      } finally {
        Ft(!1);
      }
    }
    return ((n.memoizedState = [l, t]), l);
  }
  function yc(e, t, n) {
    return n === void 0 || ((Pn & 1073741824) !== 0 && (Ne & 261930) === 0)
      ? (e.memoizedState = t)
      : ((e.memoizedState = n), (e = oh()), (Me.lanes |= e), (Dl |= e), n);
  }
  function om(e, t, n, l) {
    return $t(n, t)
      ? n
      : ja.current !== null
        ? ((e = yc(e, n, l)), $t(e, t) || (dt = !0), e)
        : (Pn & 42) === 0 || ((Pn & 1073741824) !== 0 && (Ne & 261930) === 0)
          ? ((dt = !0), (e.memoizedState = n))
          : ((e = oh()), (Me.lanes |= e), (Dl |= e), t);
  }
  function cm(e, t, n, l, u) {
    var r = w.p;
    w.p = r !== 0 && 8 > r ? r : 8;
    var f = R.T,
      g = {};
    ((R.T = g), bc(e, !1, t, n));
    try {
      var E = u(),
        V = R.S;
      if (
        (V !== null && V(g, E),
        E !== null && typeof E == "object" && typeof E.then == "function")
      ) {
        var F = Tp(E, l);
        qi(e, t, F, nn(e));
      } else qi(e, t, l, nn(e));
    } catch (ee) {
      qi(e, t, { then: function () {}, status: "rejected", reason: ee }, nn());
    } finally {
      ((w.p = r),
        f !== null && g.types !== null && (f.types = g.types),
        (R.T = f));
    }
  }
  function wp() {}
  function vc(e, t, n, l) {
    if (e.tag !== 5) throw Error(c(476));
    var u = sm(e).queue;
    cm(
      e,
      u,
      t,
      C,
      n === null
        ? wp
        : function () {
            return (fm(e), n(l));
          }
    );
  }
  function sm(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: C,
      baseState: C,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: In,
        lastRenderedState: C,
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
  function fm(e) {
    var t = sm(e);
    (t.next === null && (t = e.alternate.memoizedState),
      qi(e, t.next.queue, {}, nn()));
  }
  function pc() {
    return _t(nu);
  }
  function dm() {
    return ot().memoizedState;
  }
  function mm() {
    return ot().memoizedState;
  }
  function zp(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var n = nn();
          e = Rl(n);
          var l = Ml(t, e, n);
          (l !== null && (Gt(l, t, n), Ni(l, t, n)),
            (t = { cache: Ko() }),
            (e.payload = t));
          return;
      }
      t = t.return;
    }
  }
  function Dp(e, t, n) {
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
      lr(e)
        ? gm(t, n)
        : ((n = Lo(e, t, n, l)), n !== null && (Gt(n, e, l), ym(n, t, l))));
  }
  function hm(e, t, n) {
    var l = nn();
    qi(e, t, n, l);
  }
  function qi(e, t, n, l) {
    var u = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (lr(e)) gm(t, u);
    else {
      var r = e.alternate;
      if (
        e.lanes === 0 &&
        (r === null || r.lanes === 0) &&
        ((r = t.lastRenderedReducer), r !== null)
      )
        try {
          var f = t.lastRenderedState,
            g = r(f, n);
          if (((u.hasEagerState = !0), (u.eagerState = g), $t(g, f)))
            return (Bu(e, t, u, 0), $e === null && Lu(), !1);
        } catch {
        } finally {
        }
      if (((n = Lo(e, t, u, l)), n !== null))
        return (Gt(n, e, l), ym(n, t, l), !0);
    }
    return !1;
  }
  function bc(e, t, n, l) {
    if (
      ((l = {
        lane: 2,
        revertLane: Wc(),
        gesture: null,
        action: l,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      lr(e))
    ) {
      if (t) throw Error(c(479));
    } else ((t = Lo(e, n, l, 2)), t !== null && Gt(t, e, 2));
  }
  function lr(e) {
    var t = e.alternate;
    return e === Me || (t !== null && t === Me);
  }
  function gm(e, t) {
    Ga = $u = !0;
    var n = e.pending;
    (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
      (e.pending = t));
  }
  function ym(e, t, n) {
    if ((n & 4194048) !== 0) {
      var l = t.lanes;
      ((l &= e.pendingLanes), (n |= l), (t.lanes = n), xu(e, n));
    }
  }
  var Yi = {
    readContext: _t,
    use: Iu,
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
  Yi.useEffectEvent = at;
  var vm = {
      readContext: _t,
      use: Iu,
      useCallback: function (e, t) {
        return ((Ut().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: _t,
      useEffect: em,
      useImperativeHandle: function (e, t, n) {
        ((n = n != null ? n.concat([e]) : null),
          tr(4194308, 4, am.bind(null, t, e), n));
      },
      useLayoutEffect: function (e, t) {
        return tr(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        tr(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = Ut();
        t = t === void 0 ? null : t;
        var l = e();
        if (ca) {
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
          if (ca) {
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
          (e = e.dispatch = Dp.bind(null, Me, e)),
          [l.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = Ut();
        return ((e = { current: e }), (t.memoizedState = e));
      },
      useState: function (e) {
        e = dc(e);
        var t = e.queue,
          n = hm.bind(null, Me, t);
        return ((t.dispatch = n), [e.memoizedState, n]);
      },
      useDebugValue: gc,
      useDeferredValue: function (e, t) {
        var n = Ut();
        return yc(n, e, t);
      },
      useTransition: function () {
        var e = dc(!1);
        return (
          (e = cm.bind(null, Me, e.queue, !0, !1)),
          (Ut().memoizedState = e),
          [!1, e]
        );
      },
      useSyncExternalStore: function (e, t, n) {
        var l = Me,
          u = Ut();
        if (Be) {
          if (n === void 0) throw Error(c(407));
          n = n();
        } else {
          if (((n = t()), $e === null)) throw Error(c(349));
          (Ne & 127) !== 0 || Hd(l, t, n);
        }
        u.memoizedState = n;
        var r = { value: n, getSnapshot: t };
        return (
          (u.queue = r),
          em(Yd.bind(null, l, r, e), [e]),
          (l.flags |= 2048),
          ka(9, { destroy: void 0 }, qd.bind(null, l, r, n, t), null),
          n
        );
      },
      useId: function () {
        var e = Ut(),
          t = $e.identifierPrefix;
        if (Be) {
          var n = Nn,
            l = Un;
          ((n = (l & ~(1 << (32 - ze(l) - 1))).toString(32) + n),
            (t = "_" + t + "R_" + n),
            (n = Wu++),
            0 < n && (t += "H" + n.toString(32)),
            (t += "_"));
        } else ((n = _p++), (t = "_" + t + "r_" + n.toString(32) + "_"));
        return (e.memoizedState = t);
      },
      useHostTransitionStatus: pc,
      useFormState: Fd,
      useActionState: Fd,
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
          (t = bc.bind(null, Me, !0, n)),
          (n.dispatch = t),
          [e, t]
        );
      },
      useMemoCache: cc,
      useCacheRefresh: function () {
        return (Ut().memoizedState = zp.bind(null, Me));
      },
      useEffectEvent: function (e) {
        var t = Ut(),
          n = { impl: e };
        return (
          (t.memoizedState = n),
          function () {
            if ((Xe & 2) !== 0) throw Error(c(440));
            return n.impl.apply(void 0, arguments);
          }
        );
      },
    },
    Sc = {
      readContext: _t,
      use: Iu,
      useCallback: um,
      useContext: _t,
      useEffect: hc,
      useImperativeHandle: im,
      useInsertionEffect: nm,
      useLayoutEffect: lm,
      useMemo: rm,
      useReducer: er,
      useRef: Id,
      useState: function () {
        return er(In);
      },
      useDebugValue: gc,
      useDeferredValue: function (e, t) {
        var n = ot();
        return om(n, Ke.memoizedState, e, t);
      },
      useTransition: function () {
        var e = er(In)[0],
          t = ot().memoizedState;
        return [typeof e == "boolean" ? e : Hi(e), t];
      },
      useSyncExternalStore: Bd,
      useId: dm,
      useHostTransitionStatus: pc,
      useFormState: $d,
      useActionState: $d,
      useOptimistic: function (e, t) {
        var n = ot();
        return Xd(n, Ke, e, t);
      },
      useMemoCache: cc,
      useCacheRefresh: mm,
    };
  Sc.useEffectEvent = tm;
  var pm = {
    readContext: _t,
    use: Iu,
    useCallback: um,
    useContext: _t,
    useEffect: hc,
    useImperativeHandle: im,
    useInsertionEffect: nm,
    useLayoutEffect: lm,
    useMemo: rm,
    useReducer: fc,
    useRef: Id,
    useState: function () {
      return fc(In);
    },
    useDebugValue: gc,
    useDeferredValue: function (e, t) {
      var n = ot();
      return Ke === null ? yc(n, e, t) : om(n, Ke.memoizedState, e, t);
    },
    useTransition: function () {
      var e = fc(In)[0],
        t = ot().memoizedState;
      return [typeof e == "boolean" ? e : Hi(e), t];
    },
    useSyncExternalStore: Bd,
    useId: dm,
    useHostTransitionStatus: pc,
    useFormState: Pd,
    useActionState: Pd,
    useOptimistic: function (e, t) {
      var n = ot();
      return Ke !== null
        ? Xd(n, Ke, e, t)
        : ((n.baseState = e), [e, n.queue.dispatch]);
    },
    useMemoCache: cc,
    useCacheRefresh: mm,
  };
  pm.useEffectEvent = tm;
  function Ec(e, t, n, l) {
    ((t = e.memoizedState),
      (n = n(l, t)),
      (n = n == null ? t : b({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n));
  }
  var Ac = {
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var l = nn(),
        u = Rl(l);
      ((u.payload = t),
        n != null && (u.callback = n),
        (t = Ml(e, u, l)),
        t !== null && (Gt(t, e, l), Ni(t, e, l)));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var l = nn(),
        u = Rl(l);
      ((u.tag = 1),
        (u.payload = t),
        n != null && (u.callback = n),
        (t = Ml(e, u, l)),
        t !== null && (Gt(t, e, l), Ni(t, e, l)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = nn(),
        l = Rl(n);
      ((l.tag = 2),
        t != null && (l.callback = t),
        (t = Ml(e, l, n)),
        t !== null && (Gt(t, e, n), Ni(t, e, n)));
    },
  };
  function bm(e, t, n, l, u, r, f) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(l, r, f)
        : t.prototype && t.prototype.isPureReactComponent
          ? !Ri(n, l) || !Ri(u, r)
          : !0
    );
  }
  function Sm(e, t, n, l) {
    ((e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(n, l),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(n, l),
      t.state !== e && Ac.enqueueReplaceState(t, t.state, null));
  }
  function sa(e, t) {
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
  function Em(e) {
    Vu(e);
  }
  function Am(e) {
    console.error(e);
  }
  function xm(e) {
    Vu(e);
  }
  function ar(e, t) {
    try {
      var n = e.onUncaughtError;
      n(t.value, { componentStack: t.stack });
    } catch (l) {
      setTimeout(function () {
        throw l;
      });
    }
  }
  function Tm(e, t, n) {
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
  function xc(e, t, n) {
    return (
      (n = Rl(n)),
      (n.tag = 3),
      (n.payload = { element: null }),
      (n.callback = function () {
        ar(e, t);
      }),
      n
    );
  }
  function _m(e) {
    return ((e = Rl(e)), (e.tag = 3), e);
  }
  function Rm(e, t, n, l) {
    var u = n.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var r = l.value;
      ((e.payload = function () {
        return u(r);
      }),
        (e.callback = function () {
          Tm(t, n, l);
        }));
    }
    var f = n.stateNode;
    f !== null &&
      typeof f.componentDidCatch == "function" &&
      (e.callback = function () {
        (Tm(t, n, l),
          typeof u != "function" &&
            (Ul === null ? (Ul = new Set([this])) : Ul.add(this)));
        var g = l.stack;
        this.componentDidCatch(l.value, {
          componentStack: g !== null ? g : "",
        });
      });
  }
  function Up(e, t, n, l, u) {
    if (
      ((n.flags |= 32768),
      l !== null && typeof l == "object" && typeof l.then == "function")
    ) {
      if (
        ((t = n.alternate),
        t !== null && La(t, n, u, !0),
        (n = Pt.current),
        n !== null)
      ) {
        switch (n.tag) {
          case 31:
          case 13:
            return (
              vn === null ? yr() : n.alternate === null && it === 0 && (it = 3),
              (n.flags &= -257),
              (n.flags |= 65536),
              (n.lanes = u),
              l === Qu
                ? (n.flags |= 16384)
                : ((t = n.updateQueue),
                  t === null ? (n.updateQueue = new Set([l])) : t.add(l),
                  Jc(e, l, u)),
              !1
            );
          case 22:
            return (
              (n.flags |= 65536),
              l === Qu
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
                  Jc(e, l, u)),
              !1
            );
        }
        throw Error(c(435, n.tag));
      }
      return (Jc(e, l, u), yr(), !1);
    }
    if (Be)
      return (
        (t = Pt.current),
        t !== null
          ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = u),
            l !== Go && ((e = Error(c(422), { cause: l })), Oi(mn(e, n))))
          : (l !== Go && ((t = Error(c(423), { cause: l })), Oi(mn(t, n))),
            (e = e.current.alternate),
            (e.flags |= 65536),
            (u &= -u),
            (e.lanes |= u),
            (l = mn(l, n)),
            (u = xc(e.stateNode, l, u)),
            Io(e, u),
            it !== 4 && (it = 2)),
        !1
      );
    var r = Error(c(520), { cause: l });
    if (
      ((r = mn(r, n)),
      Ji === null ? (Ji = [r]) : Ji.push(r),
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
            (e = xc(n.stateNode, l, e)),
            Io(n, e),
            !1
          );
        case 1:
          if (
            ((t = n.type),
            (r = n.stateNode),
            (n.flags & 128) === 0 &&
              (typeof t.getDerivedStateFromError == "function" ||
                (r !== null &&
                  typeof r.componentDidCatch == "function" &&
                  (Ul === null || !Ul.has(r)))))
          )
            return (
              (n.flags |= 65536),
              (u &= -u),
              (n.lanes |= u),
              (u = _m(u)),
              Rm(u, e, n, l),
              Io(n, u),
              !1
            );
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var Tc = Error(c(461)),
    dt = !1;
  function Rt(e, t, n, l) {
    t.child = e === null ? wd(t, null, n, l) : oa(t, e.child, n, l);
  }
  function Mm(e, t, n, l, u) {
    n = n.render;
    var r = t.ref;
    if ("ref" in l) {
      var f = {};
      for (var g in l) g !== "ref" && (f[g] = l[g]);
    } else f = l;
    return (
      aa(t),
      (l = ic(e, t, n, f, r, u)),
      (g = uc()),
      e !== null && !dt
        ? (rc(e, t, u), el(e, t, u))
        : (Be && g && Yo(t), (t.flags |= 1), Rt(e, t, l, u), t.child)
    );
  }
  function Cm(e, t, n, l, u) {
    if (e === null) {
      var r = n.type;
      return typeof r == "function" &&
        !Bo(r) &&
        r.defaultProps === void 0 &&
        n.compare === null
        ? ((t.tag = 15), (t.type = r), Om(e, t, r, l, u))
        : ((e = qu(n.type, null, l, t, t.mode, u)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((r = e.child), !Dc(e, u))) {
      var f = r.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : Ri), n(f, l) && e.ref === t.ref)
      )
        return el(e, t, u);
    }
    return (
      (t.flags |= 1),
      (e = Jn(r, l)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function Om(e, t, n, l, u) {
    if (e !== null) {
      var r = e.memoizedProps;
      if (Ri(r, l) && e.ref === t.ref)
        if (((dt = !1), (t.pendingProps = l = r), Dc(e, u)))
          (e.flags & 131072) !== 0 && (dt = !0);
        else return ((t.lanes = e.lanes), el(e, t, u));
    }
    return _c(e, t, n, l, u);
  }
  function wm(e, t, n, l) {
    var u = l.children,
      r = e !== null ? e.memoizedState : null;
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
        if (((r = r !== null ? r.baseLanes | n : n), e !== null)) {
          for (l = t.child = e.child, u = 0; l !== null; )
            ((u = u | l.lanes | l.childLanes), (l = l.sibling));
          l = u & ~r;
        } else ((l = 0), (t.child = null));
        return zm(e, t, r, n, l);
      }
      if ((n & 536870912) !== 0)
        ((t.memoizedState = { baseLanes: 0, cachePool: null }),
          e !== null && Xu(t, r !== null ? r.cachePool : null),
          r !== null ? Ud(t, r) : tc(),
          Nd(t));
      else
        return (
          (l = t.lanes = 536870912),
          zm(e, t, r !== null ? r.baseLanes | n : n, n, l)
        );
    } else
      r !== null
        ? (Xu(t, r.cachePool), Ud(t, r), Ol(), (t.memoizedState = null))
        : (e !== null && Xu(t, null), tc(), Ol());
    return (Rt(e, t, u, n), t.child);
  }
  function ji(e, t) {
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
  function zm(e, t, n, l, u) {
    var r = Fo();
    return (
      (r = r === null ? null : { parent: st._currentValue, pool: r }),
      (t.memoizedState = { baseLanes: n, cachePool: r }),
      e !== null && Xu(t, null),
      tc(),
      Nd(t),
      e !== null && La(e, t, l, !0),
      (t.childLanes = u),
      null
    );
  }
  function ir(e, t) {
    return (
      (t = rr({ mode: t.mode, children: t.children }, e.mode)),
      (t.ref = e.ref),
      (e.child = t),
      (t.return = e),
      t
    );
  }
  function Dm(e, t, n) {
    return (
      oa(t, e.child, null, n),
      (e = ir(t, t.pendingProps)),
      (e.flags |= 2),
      It(t),
      (t.memoizedState = null),
      e
    );
  }
  function Np(e, t, n) {
    var l = t.pendingProps,
      u = (t.flags & 128) !== 0;
    if (((t.flags &= -129), e === null)) {
      if (Be) {
        if (l.mode === "hidden")
          return ((e = ir(t, l)), (t.lanes = 536870912), ji(null, e));
        if (
          (lc(t),
          (e = et)
            ? ((e = kh(e, yn)),
              (e = e !== null && e.data === "&" ? e : null),
              e !== null &&
                ((t.memoizedState = {
                  dehydrated: e,
                  treeContext: El !== null ? { id: Un, overflow: Nn } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (n = gd(e)),
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
      return ir(t, l);
    }
    var r = e.memoizedState;
    if (r !== null) {
      var f = r.dehydrated;
      if ((lc(t), u))
        if (t.flags & 256) ((t.flags &= -257), (t = Dm(e, t, n)));
        else if (t.memoizedState !== null)
          ((t.child = e.child), (t.flags |= 128), (t = null));
        else throw Error(c(558));
      else if (
        (dt || La(e, t, n, !1), (u = (n & e.childLanes) !== 0), dt || u)
      ) {
        if (
          ((l = $e),
          l !== null && ((f = pl(l, n)), f !== 0 && f !== r.retryLane))
        )
          throw ((r.retryLane = f), ea(e, f), Gt(l, e, f), Tc);
        (yr(), (t = Dm(e, t, n)));
      } else
        ((e = r.treeContext),
          (et = pn(f.nextSibling)),
          (Tt = t),
          (Be = !0),
          (Al = null),
          (yn = !1),
          e !== null && pd(t, e),
          (t = ir(t, l)),
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
  function ur(e, t) {
    var n = t.ref;
    if (n === null) e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof n != "function" && typeof n != "object") throw Error(c(284));
      (e === null || e.ref !== n) && (t.flags |= 4194816);
    }
  }
  function _c(e, t, n, l, u) {
    return (
      aa(t),
      (n = ic(e, t, n, l, void 0, u)),
      (l = uc()),
      e !== null && !dt
        ? (rc(e, t, u), el(e, t, u))
        : (Be && l && Yo(t), (t.flags |= 1), Rt(e, t, n, u), t.child)
    );
  }
  function Um(e, t, n, l, u, r) {
    return (
      aa(t),
      (t.updateQueue = null),
      (n = Ld(t, l, n, u)),
      Vd(e),
      (l = uc()),
      e !== null && !dt
        ? (rc(e, t, r), el(e, t, r))
        : (Be && l && Yo(t), (t.flags |= 1), Rt(e, t, n, r), t.child)
    );
  }
  function Nm(e, t, n, l, u) {
    if ((aa(t), t.stateNode === null)) {
      var r = Da,
        f = n.contextType;
      (typeof f == "object" && f !== null && (r = _t(f)),
        (r = new n(l, r)),
        (t.memoizedState =
          r.state !== null && r.state !== void 0 ? r.state : null),
        (r.updater = Ac),
        (t.stateNode = r),
        (r._reactInternals = t),
        (r = t.stateNode),
        (r.props = l),
        (r.state = t.memoizedState),
        (r.refs = {}),
        Wo(t),
        (f = n.contextType),
        (r.context = typeof f == "object" && f !== null ? _t(f) : Da),
        (r.state = t.memoizedState),
        (f = n.getDerivedStateFromProps),
        typeof f == "function" && (Ec(t, n, f, l), (r.state = t.memoizedState)),
        typeof n.getDerivedStateFromProps == "function" ||
          typeof r.getSnapshotBeforeUpdate == "function" ||
          (typeof r.UNSAFE_componentWillMount != "function" &&
            typeof r.componentWillMount != "function") ||
          ((f = r.state),
          typeof r.componentWillMount == "function" && r.componentWillMount(),
          typeof r.UNSAFE_componentWillMount == "function" &&
            r.UNSAFE_componentWillMount(),
          f !== r.state && Ac.enqueueReplaceState(r, r.state, null),
          Li(t, l, r, u),
          Vi(),
          (r.state = t.memoizedState)),
        typeof r.componentDidMount == "function" && (t.flags |= 4194308),
        (l = !0));
    } else if (e === null) {
      r = t.stateNode;
      var g = t.memoizedProps,
        E = sa(n, g);
      r.props = E;
      var V = r.context,
        F = n.contextType;
      ((f = Da), typeof F == "object" && F !== null && (f = _t(F)));
      var ee = n.getDerivedStateFromProps;
      ((F =
        typeof ee == "function" ||
        typeof r.getSnapshotBeforeUpdate == "function"),
        (g = t.pendingProps !== g),
        F ||
          (typeof r.UNSAFE_componentWillReceiveProps != "function" &&
            typeof r.componentWillReceiveProps != "function") ||
          ((g || V !== f) && Sm(t, r, l, f)),
        (_l = !1));
      var H = t.memoizedState;
      ((r.state = H),
        Li(t, l, r, u),
        Vi(),
        (V = t.memoizedState),
        g || H !== V || _l
          ? (typeof ee == "function" &&
              (Ec(t, n, ee, l), (V = t.memoizedState)),
            (E = _l || bm(t, n, E, l, H, V, f))
              ? (F ||
                  (typeof r.UNSAFE_componentWillMount != "function" &&
                    typeof r.componentWillMount != "function") ||
                  (typeof r.componentWillMount == "function" &&
                    r.componentWillMount(),
                  typeof r.UNSAFE_componentWillMount == "function" &&
                    r.UNSAFE_componentWillMount()),
                typeof r.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof r.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = l),
                (t.memoizedState = V)),
            (r.props = l),
            (r.state = V),
            (r.context = f),
            (l = E))
          : (typeof r.componentDidMount == "function" && (t.flags |= 4194308),
            (l = !1)));
    } else {
      ((r = t.stateNode),
        Po(e, t),
        (f = t.memoizedProps),
        (F = sa(n, f)),
        (r.props = F),
        (ee = t.pendingProps),
        (H = r.context),
        (V = n.contextType),
        (E = Da),
        typeof V == "object" && V !== null && (E = _t(V)),
        (g = n.getDerivedStateFromProps),
        (V =
          typeof g == "function" ||
          typeof r.getSnapshotBeforeUpdate == "function") ||
          (typeof r.UNSAFE_componentWillReceiveProps != "function" &&
            typeof r.componentWillReceiveProps != "function") ||
          ((f !== ee || H !== E) && Sm(t, r, l, E)),
        (_l = !1),
        (H = t.memoizedState),
        (r.state = H),
        Li(t, l, r, u),
        Vi());
      var j = t.memoizedState;
      f !== ee ||
      H !== j ||
      _l ||
      (e !== null && e.dependencies !== null && ju(e.dependencies))
        ? (typeof g == "function" && (Ec(t, n, g, l), (j = t.memoizedState)),
          (F =
            _l ||
            bm(t, n, F, l, H, j, E) ||
            (e !== null && e.dependencies !== null && ju(e.dependencies)))
            ? (V ||
                (typeof r.UNSAFE_componentWillUpdate != "function" &&
                  typeof r.componentWillUpdate != "function") ||
                (typeof r.componentWillUpdate == "function" &&
                  r.componentWillUpdate(l, j, E),
                typeof r.UNSAFE_componentWillUpdate == "function" &&
                  r.UNSAFE_componentWillUpdate(l, j, E)),
              typeof r.componentDidUpdate == "function" && (t.flags |= 4),
              typeof r.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof r.componentDidUpdate != "function" ||
                (f === e.memoizedProps && H === e.memoizedState) ||
                (t.flags |= 4),
              typeof r.getSnapshotBeforeUpdate != "function" ||
                (f === e.memoizedProps && H === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = l),
              (t.memoizedState = j)),
          (r.props = l),
          (r.state = j),
          (r.context = E),
          (l = F))
        : (typeof r.componentDidUpdate != "function" ||
            (f === e.memoizedProps && H === e.memoizedState) ||
            (t.flags |= 4),
          typeof r.getSnapshotBeforeUpdate != "function" ||
            (f === e.memoizedProps && H === e.memoizedState) ||
            (t.flags |= 1024),
          (l = !1));
    }
    return (
      (r = l),
      ur(e, t),
      (l = (t.flags & 128) !== 0),
      r || l
        ? ((r = t.stateNode),
          (n =
            l && typeof n.getDerivedStateFromError != "function"
              ? null
              : r.render()),
          (t.flags |= 1),
          e !== null && l
            ? ((t.child = oa(t, e.child, null, u)),
              (t.child = oa(t, null, n, u)))
            : Rt(e, t, n, u),
          (t.memoizedState = r.state),
          (e = t.child))
        : (e = el(e, t, u)),
      e
    );
  }
  function Vm(e, t, n, l) {
    return (na(), (t.flags |= 256), Rt(e, t, n, l), t.child);
  }
  var Rc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function Mc(e) {
    return { baseLanes: e, cachePool: Td() };
  }
  function Cc(e, t, n) {
    return ((e = e !== null ? e.childLanes & ~n : 0), t && (e |= tn), e);
  }
  function Lm(e, t, n) {
    var l = t.pendingProps,
      u = !1,
      r = (t.flags & 128) !== 0,
      f;
    if (
      ((f = r) ||
        (f =
          e !== null && e.memoizedState === null ? !1 : (rt.current & 2) !== 0),
      f && ((u = !0), (t.flags &= -129)),
      (f = (t.flags & 32) !== 0),
      (t.flags &= -33),
      e === null)
    ) {
      if (Be) {
        if (
          (u ? Cl(t) : Ol(),
          (e = et)
            ? ((e = kh(e, yn)),
              (e = e !== null && e.data !== "&" ? e : null),
              e !== null &&
                ((t.memoizedState = {
                  dehydrated: e,
                  treeContext: El !== null ? { id: Un, overflow: Nn } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (n = gd(e)),
                (n.return = t),
                (t.child = n),
                (Tt = t),
                (et = null)))
            : (e = null),
          e === null)
        )
          throw xl(t);
        return (ss(e) ? (t.lanes = 32) : (t.lanes = 536870912), null);
      }
      var g = l.children;
      return (
        (l = l.fallback),
        u
          ? (Ol(),
            (u = t.mode),
            (g = rr({ mode: "hidden", children: g }, u)),
            (l = ta(l, u, n, null)),
            (g.return = t),
            (l.return = t),
            (g.sibling = l),
            (t.child = g),
            (l = t.child),
            (l.memoizedState = Mc(n)),
            (l.childLanes = Cc(e, f, n)),
            (t.memoizedState = Rc),
            ji(null, l))
          : (Cl(t), Oc(t, g))
      );
    }
    var E = e.memoizedState;
    if (E !== null && ((g = E.dehydrated), g !== null)) {
      if (r)
        t.flags & 256
          ? (Cl(t), (t.flags &= -257), (t = wc(e, t, n)))
          : t.memoizedState !== null
            ? (Ol(), (t.child = e.child), (t.flags |= 128), (t = null))
            : (Ol(),
              (g = l.fallback),
              (u = t.mode),
              (l = rr({ mode: "visible", children: l.children }, u)),
              (g = ta(g, u, n, null)),
              (g.flags |= 2),
              (l.return = t),
              (g.return = t),
              (l.sibling = g),
              (t.child = l),
              oa(t, e.child, null, n),
              (l = t.child),
              (l.memoizedState = Mc(n)),
              (l.childLanes = Cc(e, f, n)),
              (t.memoizedState = Rc),
              (t = ji(null, l)));
      else if ((Cl(t), ss(g))) {
        if (((f = g.nextSibling && g.nextSibling.dataset), f)) var V = f.dgst;
        ((f = V),
          (l = Error(c(419))),
          (l.stack = ""),
          (l.digest = f),
          Oi({ value: l, source: null, stack: null }),
          (t = wc(e, t, n)));
      } else if (
        (dt || La(e, t, n, !1), (f = (n & e.childLanes) !== 0), dt || f)
      ) {
        if (
          ((f = $e),
          f !== null && ((l = pl(f, n)), l !== 0 && l !== E.retryLane))
        )
          throw ((E.retryLane = l), ea(e, l), Gt(f, e, l), Tc);
        (cs(g) || yr(), (t = wc(e, t, n)));
      } else
        cs(g)
          ? ((t.flags |= 192), (t.child = e.child), (t = null))
          : ((e = E.treeContext),
            (et = pn(g.nextSibling)),
            (Tt = t),
            (Be = !0),
            (Al = null),
            (yn = !1),
            e !== null && pd(t, e),
            (t = Oc(t, l.children)),
            (t.flags |= 4096));
      return t;
    }
    return u
      ? (Ol(),
        (g = l.fallback),
        (u = t.mode),
        (E = e.child),
        (V = E.sibling),
        (l = Jn(E, { mode: "hidden", children: l.children })),
        (l.subtreeFlags = E.subtreeFlags & 65011712),
        V !== null ? (g = Jn(V, g)) : ((g = ta(g, u, n, null)), (g.flags |= 2)),
        (g.return = t),
        (l.return = t),
        (l.sibling = g),
        (t.child = l),
        ji(null, l),
        (l = t.child),
        (g = e.child.memoizedState),
        g === null
          ? (g = Mc(n))
          : ((u = g.cachePool),
            u !== null
              ? ((E = st._currentValue),
                (u = u.parent !== E ? { parent: E, pool: E } : u))
              : (u = Td()),
            (g = { baseLanes: g.baseLanes | n, cachePool: u })),
        (l.memoizedState = g),
        (l.childLanes = Cc(e, f, n)),
        (t.memoizedState = Rc),
        ji(e.child, l))
      : (Cl(t),
        (n = e.child),
        (e = n.sibling),
        (n = Jn(n, { mode: "visible", children: l.children })),
        (n.return = t),
        (n.sibling = null),
        e !== null &&
          ((f = t.deletions),
          f === null ? ((t.deletions = [e]), (t.flags |= 16)) : f.push(e)),
        (t.child = n),
        (t.memoizedState = null),
        n);
  }
  function Oc(e, t) {
    return (
      (t = rr({ mode: "visible", children: t }, e.mode)),
      (t.return = e),
      (e.child = t)
    );
  }
  function rr(e, t) {
    return ((e = Wt(22, e, null, t)), (e.lanes = 0), e);
  }
  function wc(e, t, n) {
    return (
      oa(t, e.child, null, n),
      (e = Oc(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function Bm(e, t, n) {
    e.lanes |= t;
    var l = e.alternate;
    (l !== null && (l.lanes |= t), Qo(e.return, t, n));
  }
  function zc(e, t, n, l, u, r) {
    var f = e.memoizedState;
    f === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: l,
          tail: n,
          tailMode: u,
          treeForkCount: r,
        })
      : ((f.isBackwards = t),
        (f.rendering = null),
        (f.renderingStartTime = 0),
        (f.last = l),
        (f.tail = n),
        (f.tailMode = u),
        (f.treeForkCount = r));
  }
  function Hm(e, t, n) {
    var l = t.pendingProps,
      u = l.revealOrder,
      r = l.tail;
    l = l.children;
    var f = rt.current,
      g = (f & 2) !== 0;
    if (
      (g ? ((f = (f & 1) | 2), (t.flags |= 128)) : (f &= 1),
      J(rt, f),
      Rt(e, t, l, n),
      (l = Be ? Ci : 0),
      !g && e !== null && (e.flags & 128) !== 0)
    )
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Bm(e, n, t);
        else if (e.tag === 19) Bm(e, n, t);
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
            e !== null && Fu(e) === null && (u = n),
            (n = n.sibling));
        ((n = u),
          n === null
            ? ((u = t.child), (t.child = null))
            : ((u = n.sibling), (n.sibling = null)),
          zc(t, !1, u, n, r, l));
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (n = null, u = t.child, t.child = null; u !== null; ) {
          if (((e = u.alternate), e !== null && Fu(e) === null)) {
            t.child = u;
            break;
          }
          ((e = u.sibling), (u.sibling = n), (n = u), (u = e));
        }
        zc(t, !0, n, null, r, l);
        break;
      case "together":
        zc(t, !1, null, null, void 0, l);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function el(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (Dl |= t.lanes),
      (n & t.childLanes) === 0)
    )
      if (e !== null) {
        if ((La(e, t, n, !1), (n & t.childLanes) === 0)) return null;
      } else return null;
    if (e !== null && t.child !== e.child) throw Error(c(153));
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
  function Dc(e, t) {
    return (e.lanes & t) !== 0
      ? !0
      : ((e = e.dependencies), !!(e !== null && ju(e)));
  }
  function Vp(e, t, n) {
    switch (t.tag) {
      case 3:
        (Ae(t, t.stateNode.containerInfo),
          Tl(t, st, e.memoizedState.cache),
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
        if (t.memoizedState !== null) return ((t.flags |= 128), lc(t), null);
        break;
      case 13:
        var l = t.memoizedState;
        if (l !== null)
          return l.dehydrated !== null
            ? (Cl(t), (t.flags |= 128), null)
            : (n & t.child.childLanes) !== 0
              ? Lm(e, t, n)
              : (Cl(t), (e = el(e, t, n)), e !== null ? e.sibling : null);
        Cl(t);
        break;
      case 19:
        var u = (e.flags & 128) !== 0;
        if (
          ((l = (n & t.childLanes) !== 0),
          l || (La(e, t, n, !1), (l = (n & t.childLanes) !== 0)),
          u)
        ) {
          if (l) return Hm(e, t, n);
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
        return ((t.lanes = 0), wm(e, t, n, t.pendingProps));
      case 24:
        Tl(t, st, e.memoizedState.cache);
    }
    return el(e, t, n);
  }
  function qm(e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps) dt = !0;
      else {
        if (!Dc(e, n) && (t.flags & 128) === 0) return ((dt = !1), Vp(e, t, n));
        dt = (e.flags & 131072) !== 0;
      }
    else ((dt = !1), Be && (t.flags & 1048576) !== 0 && vd(t, Ci, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        e: {
          var l = t.pendingProps;
          if (((e = ua(t.elementType)), (t.type = e), typeof e == "function"))
            Bo(e)
              ? ((l = sa(e, l)), (t.tag = 1), (t = Nm(null, t, e, l, n)))
              : ((t.tag = 0), (t = _c(null, t, e, l, n)));
          else {
            if (e != null) {
              var u = e.$$typeof;
              if (u === X) {
                ((t.tag = 11), (t = Mm(null, t, e, l, n)));
                break e;
              } else if (u === W) {
                ((t.tag = 14), (t = Cm(null, t, e, l, n)));
                break e;
              }
            }
            throw ((t = te(e) || e), Error(c(306, t, "")));
          }
        }
        return t;
      case 0:
        return _c(e, t, t.type, t.pendingProps, n);
      case 1:
        return ((l = t.type), (u = sa(l, t.pendingProps)), Nm(e, t, l, u, n));
      case 3:
        e: {
          if ((Ae(t, t.stateNode.containerInfo), e === null))
            throw Error(c(387));
          l = t.pendingProps;
          var r = t.memoizedState;
          ((u = r.element), Po(e, t), Li(t, l, null, n));
          var f = t.memoizedState;
          if (
            ((l = f.cache),
            Tl(t, st, l),
            l !== r.cache && Zo(t, [st], n, !0),
            Vi(),
            (l = f.element),
            r.isDehydrated)
          )
            if (
              ((r = { element: l, isDehydrated: !1, cache: f.cache }),
              (t.updateQueue.baseState = r),
              (t.memoizedState = r),
              t.flags & 256)
            ) {
              t = Vm(e, t, l, n);
              break e;
            } else if (l !== u) {
              ((u = mn(Error(c(424)), t)), Oi(u), (t = Vm(e, t, l, n)));
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
                  n = wd(t, null, l, n),
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
          ur(e, t),
          e === null
            ? (n = $h(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = n)
              : Be ||
                ((n = t.type),
                (e = t.pendingProps),
                (l = xr(Y.current).createElement(n)),
                (l[xt] = t),
                (l[Lt] = e),
                Mt(l, n, e),
                Et(l),
                (t.stateNode = l))
            : (t.memoizedState = $h(
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
            ((l = t.stateNode = Kh(t.type, t.pendingProps, Y.current)),
            (Tt = t),
            (yn = !0),
            (u = et),
            Bl(t.type) ? ((fs = u), (et = pn(l.firstChild))) : (et = u)),
          Rt(e, t, t.pendingProps.children, n),
          ur(e, t),
          e === null && (t.flags |= 4194304),
          t.child
        );
      case 5:
        return (
          e === null &&
            Be &&
            ((u = l = et) &&
              ((l = f0(l, t.type, t.pendingProps, yn)),
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
          (r = t.pendingProps),
          (f = e !== null ? e.memoizedProps : null),
          (l = r.children),
          us(u, r) ? (l = null) : f !== null && us(u, f) && (t.flags |= 32),
          t.memoizedState !== null &&
            ((u = ic(e, t, Rp, null, null, n)), (nu._currentValue = u)),
          ur(e, t),
          Rt(e, t, l, n),
          t.child
        );
      case 6:
        return (
          e === null &&
            Be &&
            ((e = n = et) &&
              ((n = d0(n, t.pendingProps, yn)),
              n !== null
                ? ((t.stateNode = n), (Tt = t), (et = null), (e = !0))
                : (e = !1)),
            e || xl(t)),
          null
        );
      case 13:
        return Lm(e, t, n);
      case 4:
        return (
          Ae(t, t.stateNode.containerInfo),
          (l = t.pendingProps),
          e === null ? (t.child = oa(t, null, l, n)) : Rt(e, t, l, n),
          t.child
        );
      case 11:
        return Mm(e, t, t.type, t.pendingProps, n);
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
        return Cm(e, t, t.type, t.pendingProps, n);
      case 15:
        return Om(e, t, t.type, t.pendingProps, n);
      case 19:
        return Hm(e, t, n);
      case 31:
        return Np(e, t, n);
      case 22:
        return wm(e, t, n, t.pendingProps);
      case 24:
        return (
          aa(t),
          (l = _t(st)),
          e === null
            ? ((u = Fo()),
              u === null &&
                ((u = $e),
                (r = Ko()),
                (u.pooledCache = r),
                r.refCount++,
                r !== null && (u.pooledCacheLanes |= n),
                (u = r)),
              (t.memoizedState = { parent: l, cache: u }),
              Wo(t),
              Tl(t, st, u))
            : ((e.lanes & n) !== 0 && (Po(e, t), Li(t, null, null, n), Vi()),
              (u = e.memoizedState),
              (r = t.memoizedState),
              u.parent !== l
                ? ((u = { parent: l, cache: l }),
                  (t.memoizedState = u),
                  t.lanes === 0 &&
                    (t.memoizedState = t.updateQueue.baseState = u),
                  Tl(t, st, l))
                : ((l = r.cache),
                  Tl(t, st, l),
                  l !== u.cache && Zo(t, [st], n, !0))),
          Rt(e, t, t.pendingProps.children, n),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(c(156, t.tag));
  }
  function tl(e) {
    e.flags |= 4;
  }
  function Uc(e, t, n, l, u) {
    if (((t = (e.mode & 32) !== 0) && (t = !1), t)) {
      if (((e.flags |= 16777216), (u & 335544128) === u))
        if (e.stateNode.complete) e.flags |= 8192;
        else if (dh()) e.flags |= 8192;
        else throw ((ra = Qu), $o);
    } else e.flags &= -16777217;
  }
  function Ym(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (((e.flags |= 16777216), !tg(t)))
      if (dh()) e.flags |= 8192;
      else throw ((ra = Qu), $o);
  }
  function or(e, t) {
    (t !== null && (e.flags |= 4),
      e.flags & 16384 &&
        ((t = e.tag !== 22 ? Su() : 536870912), (e.lanes |= t), (Ja |= t)));
  }
  function Gi(e, t) {
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
  function Lp(e, t, n) {
    var l = t.pendingProps;
    switch ((jo(t), t.tag)) {
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
          Wn(st),
          fe(),
          n.pendingContext &&
            ((n.context = n.pendingContext), (n.pendingContext = null)),
          (e === null || e.child === null) &&
            (Va(t)
              ? tl(t)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), Xo())),
          tt(t),
          null
        );
      case 26:
        var u = t.type,
          r = t.memoizedState;
        return (
          e === null
            ? (tl(t),
              r !== null ? (tt(t), Ym(t, r)) : (tt(t), Uc(t, u, null, l, n)))
            : r
              ? r !== e.memoizedState
                ? (tl(t), tt(t), Ym(t, r))
                : (tt(t), (t.flags &= -16777217))
              : ((e = e.memoizedProps),
                e !== l && tl(t),
                tt(t),
                Uc(t, u, e, l, n)),
          null
        );
      case 27:
        if (
          (Ye(t),
          (n = Y.current),
          (u = t.type),
          e !== null && t.stateNode != null)
        )
          e.memoizedProps !== l && tl(t);
        else {
          if (!l) {
            if (t.stateNode === null) throw Error(c(166));
            return (tt(t), null);
          }
          ((e = ae.current),
            Va(t) ? bd(t) : ((e = Kh(u, l, n)), (t.stateNode = e), tl(t)));
        }
        return (tt(t), null);
      case 5:
        if ((Ye(t), (u = t.type), e !== null && t.stateNode != null))
          e.memoizedProps !== l && tl(t);
        else {
          if (!l) {
            if (t.stateNode === null) throw Error(c(166));
            return (tt(t), null);
          }
          if (((r = ae.current), Va(t))) bd(t);
          else {
            var f = xr(Y.current);
            switch (r) {
              case 1:
                r = f.createElementNS("http://www.w3.org/2000/svg", u);
                break;
              case 2:
                r = f.createElementNS("http://www.w3.org/1998/Math/MathML", u);
                break;
              default:
                switch (u) {
                  case "svg":
                    r = f.createElementNS("http://www.w3.org/2000/svg", u);
                    break;
                  case "math":
                    r = f.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      u
                    );
                    break;
                  case "script":
                    ((r = f.createElement("div")),
                      (r.innerHTML = "<script><\/script>"),
                      (r = r.removeChild(r.firstChild)));
                    break;
                  case "select":
                    ((r =
                      typeof l.is == "string"
                        ? f.createElement("select", { is: l.is })
                        : f.createElement("select")),
                      l.multiple
                        ? (r.multiple = !0)
                        : l.size && (r.size = l.size));
                    break;
                  default:
                    r =
                      typeof l.is == "string"
                        ? f.createElement(u, { is: l.is })
                        : f.createElement(u);
                }
            }
            ((r[xt] = t), (r[Lt] = l));
            e: for (f = t.child; f !== null; ) {
              if (f.tag === 5 || f.tag === 6) r.appendChild(f.stateNode);
              else if (f.tag !== 4 && f.tag !== 27 && f.child !== null) {
                ((f.child.return = f), (f = f.child));
                continue;
              }
              if (f === t) break e;
              for (; f.sibling === null; ) {
                if (f.return === null || f.return === t) break e;
                f = f.return;
              }
              ((f.sibling.return = f.return), (f = f.sibling));
            }
            t.stateNode = r;
            e: switch ((Mt(r, u, l), u)) {
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
          Uc(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, n),
          null
        );
      case 6:
        if (e && t.stateNode != null) e.memoizedProps !== l && tl(t);
        else {
          if (typeof l != "string" && t.stateNode === null) throw Error(c(166));
          if (((e = Y.current), Va(t))) {
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
                Lh(e.nodeValue, n)
              )),
              e || xl(t, !0));
          } else
            ((e = xr(e).createTextNode(l)), (e[xt] = t), (t.stateNode = e));
        }
        return (tt(t), null);
      case 31:
        if (((n = t.memoizedState), e === null || e.memoizedState !== null)) {
          if (((l = Va(t)), n !== null)) {
            if (e === null) {
              if (!l) throw Error(c(318));
              if (
                ((e = t.memoizedState),
                (e = e !== null ? e.dehydrated : null),
                !e)
              )
                throw Error(c(557));
              e[xt] = t;
            } else
              (na(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4));
            (tt(t), (e = !1));
          } else
            ((n = Xo()),
              e !== null &&
                e.memoizedState !== null &&
                (e.memoizedState.hydrationErrors = n),
              (e = !0));
          if (!e) return t.flags & 256 ? (It(t), t) : (It(t), null);
          if ((t.flags & 128) !== 0) throw Error(c(558));
        }
        return (tt(t), null);
      case 13:
        if (
          ((l = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (((u = Va(t)), l !== null && l.dehydrated !== null)) {
            if (e === null) {
              if (!u) throw Error(c(318));
              if (
                ((u = t.memoizedState),
                (u = u !== null ? u.dehydrated : null),
                !u)
              )
                throw Error(c(317));
              u[xt] = t;
            } else
              (na(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4));
            (tt(t), (u = !1));
          } else
            ((u = Xo()),
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
                (r = null),
                l.memoizedState !== null &&
                  l.memoizedState.cachePool !== null &&
                  (r = l.memoizedState.cachePool.pool),
                r !== u && (l.flags |= 2048)),
              n !== e && n && (t.child.flags |= 8192),
              or(t, t.updateQueue),
              tt(t),
              null)
        );
      case 4:
        return (fe(), e === null && ts(t.stateNode.containerInfo), tt(t), null);
      case 10:
        return (Wn(t.type), tt(t), null);
      case 19:
        if ((L(rt), (l = t.memoizedState), l === null)) return (tt(t), null);
        if (((u = (t.flags & 128) !== 0), (r = l.rendering), r === null))
          if (u) Gi(l, !1);
          else {
            if (it !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((r = Fu(e)), r !== null)) {
                  for (
                    t.flags |= 128,
                      Gi(l, !1),
                      e = r.updateQueue,
                      t.updateQueue = e,
                      or(t, e),
                      t.subtreeFlags = 0,
                      e = n,
                      n = t.child;
                    n !== null;

                  )
                    (hd(n, e), (n = n.sibling));
                  return (
                    J(rt, (rt.current & 1) | 2),
                    Be && Fn(t, l.treeForkCount),
                    t.child
                  );
                }
                e = e.sibling;
              }
            l.tail !== null &&
              ie() > mr &&
              ((t.flags |= 128), (u = !0), Gi(l, !1), (t.lanes = 4194304));
          }
        else {
          if (!u)
            if (((e = Fu(r)), e !== null)) {
              if (
                ((t.flags |= 128),
                (u = !0),
                (e = e.updateQueue),
                (t.updateQueue = e),
                or(t, e),
                Gi(l, !0),
                l.tail === null &&
                  l.tailMode === "hidden" &&
                  !r.alternate &&
                  !Be)
              )
                return (tt(t), null);
            } else
              2 * ie() - l.renderingStartTime > mr &&
                n !== 536870912 &&
                ((t.flags |= 128), (u = !0), Gi(l, !1), (t.lanes = 4194304));
          l.isBackwards
            ? ((r.sibling = t.child), (t.child = r))
            : ((e = l.last),
              e !== null ? (e.sibling = r) : (t.child = r),
              (l.last = r));
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
          nc(),
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
          n !== null && or(t, n.retryQueue),
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
          e !== null && L(ia),
          null
        );
      case 24:
        return (
          (n = null),
          e !== null && (n = e.memoizedState.cache),
          t.memoizedState.cache !== n && (t.flags |= 2048),
          Wn(st),
          tt(t),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(c(156, t.tag));
  }
  function Bp(e, t) {
    switch ((jo(t), t.tag)) {
      case 1:
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          Wn(st),
          fe(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((t.flags = (e & -65537) | 128), t)
            : null
        );
      case 26:
      case 27:
      case 5:
        return (Ye(t), null);
      case 31:
        if (t.memoizedState !== null) {
          if ((It(t), t.alternate === null)) throw Error(c(340));
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
          if (t.alternate === null) throw Error(c(340));
          na();
        }
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return (L(rt), null);
      case 4:
        return (fe(), null);
      case 10:
        return (Wn(t.type), null);
      case 22:
      case 23:
        return (
          It(t),
          nc(),
          e !== null && L(ia),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 24:
        return (Wn(st), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function jm(e, t) {
    switch ((jo(t), t.tag)) {
      case 3:
        (Wn(st), fe());
        break;
      case 26:
      case 27:
      case 5:
        Ye(t);
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
        L(rt);
        break;
      case 10:
        Wn(t.type);
        break;
      case 22:
      case 23:
        (It(t), nc(), e !== null && L(ia));
        break;
      case 24:
        Wn(st);
    }
  }
  function Xi(e, t) {
    try {
      var n = t.updateQueue,
        l = n !== null ? n.lastEffect : null;
      if (l !== null) {
        var u = l.next;
        n = u;
        do {
          if ((n.tag & e) === e) {
            l = void 0;
            var r = n.create,
              f = n.inst;
            ((l = r()), (f.destroy = l));
          }
          n = n.next;
        } while (n !== u);
      }
    } catch (g) {
      Qe(t, t.return, g);
    }
  }
  function wl(e, t, n) {
    try {
      var l = t.updateQueue,
        u = l !== null ? l.lastEffect : null;
      if (u !== null) {
        var r = u.next;
        l = r;
        do {
          if ((l.tag & e) === e) {
            var f = l.inst,
              g = f.destroy;
            if (g !== void 0) {
              ((f.destroy = void 0), (u = t));
              var E = n,
                V = g;
              try {
                V();
              } catch (F) {
                Qe(u, E, F);
              }
            }
          }
          l = l.next;
        } while (l !== r);
      }
    } catch (F) {
      Qe(t, t.return, F);
    }
  }
  function Gm(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var n = e.stateNode;
      try {
        Dd(t, n);
      } catch (l) {
        Qe(e, e.return, l);
      }
    }
  }
  function Xm(e, t, n) {
    ((n.props = sa(e.type, e.memoizedProps)), (n.state = e.memoizedState));
    try {
      n.componentWillUnmount();
    } catch (l) {
      Qe(e, t, l);
    }
  }
  function ki(e, t) {
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
  function Vn(e, t) {
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
  function km(e) {
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
  function Nc(e, t, n) {
    try {
      var l = e.stateNode;
      (i0(l, e.type, n, t), (l[Lt] = t));
    } catch (u) {
      Qe(e, e.return, u);
    }
  }
  function Qm(e) {
    return (
      e.tag === 5 ||
      e.tag === 3 ||
      e.tag === 26 ||
      (e.tag === 27 && Bl(e.type)) ||
      e.tag === 4
    );
  }
  function Vc(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || Qm(e.return)) return null;
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
  function Lc(e, t, n) {
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
      for (Lc(e, t, n), e = e.sibling; e !== null; )
        (Lc(e, t, n), (e = e.sibling));
  }
  function cr(e, t, n) {
    var l = e.tag;
    if (l === 5 || l === 6)
      ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
    else if (
      l !== 4 &&
      (l === 27 && Bl(e.type) && (n = e.stateNode), (e = e.child), e !== null)
    )
      for (cr(e, t, n), e = e.sibling; e !== null; )
        (cr(e, t, n), (e = e.sibling));
  }
  function Zm(e) {
    var t = e.stateNode,
      n = e.memoizedProps;
    try {
      for (var l = e.type, u = t.attributes; u.length; )
        t.removeAttributeNode(u[0]);
      (Mt(t, l, n), (t[xt] = e), (t[Lt] = n));
    } catch (r) {
      Qe(e, e.return, r);
    }
  }
  var nl = !1,
    mt = !1,
    Bc = !1,
    Km = typeof WeakSet == "function" ? WeakSet : Set,
    At = null;
  function Hp(e, t) {
    if (((e = e.containerInfo), (as = wr), (e = id(e)), wo(e))) {
      if ("selectionStart" in e)
        var n = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          n = ((n = e.ownerDocument) && n.defaultView) || window;
          var l = n.getSelection && n.getSelection();
          if (l && l.rangeCount !== 0) {
            n = l.anchorNode;
            var u = l.anchorOffset,
              r = l.focusNode;
            l = l.focusOffset;
            try {
              (n.nodeType, r.nodeType);
            } catch {
              n = null;
              break e;
            }
            var f = 0,
              g = -1,
              E = -1,
              V = 0,
              F = 0,
              ee = e,
              H = null;
            t: for (;;) {
              for (
                var j;
                ee !== n || (u !== 0 && ee.nodeType !== 3) || (g = f + u),
                  ee !== r || (l !== 0 && ee.nodeType !== 3) || (E = f + l),
                  ee.nodeType === 3 && (f += ee.nodeValue.length),
                  (j = ee.firstChild) !== null;

              )
                ((H = ee), (ee = j));
              for (;;) {
                if (ee === e) break t;
                if (
                  (H === n && ++V === u && (g = f),
                  H === r && ++F === l && (E = f),
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
      is = { focusedElem: e, selectionRange: n }, wr = !1, At = t;
      At !== null;

    )
      if (
        ((t = At), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)
      )
        ((e.return = t), (At = e));
      else
        for (; At !== null; ) {
          switch (((t = At), (r = t.alternate), (e = t.flags), t.tag)) {
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
              if ((e & 1024) !== 0 && r !== null) {
                ((e = void 0),
                  (n = t),
                  (u = r.memoizedProps),
                  (r = r.memoizedState),
                  (l = n.stateNode));
                try {
                  var ve = sa(n.type, u);
                  ((e = l.getSnapshotBeforeUpdate(ve, r)),
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
                  os(e);
                else if (n === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      os(e);
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
              if ((e & 1024) !== 0) throw Error(c(163));
          }
          if (((e = t.sibling), e !== null)) {
            ((e.return = t.return), (At = e));
            break;
          }
          At = t.return;
        }
  }
  function Jm(e, t, n) {
    var l = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        (al(e, n), l & 4 && Xi(5, n));
        break;
      case 1:
        if ((al(e, n), l & 4))
          if (((e = n.stateNode), t === null))
            try {
              e.componentDidMount();
            } catch (f) {
              Qe(n, n.return, f);
            }
          else {
            var u = sa(n.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              e.componentDidUpdate(u, t, e.__reactInternalSnapshotBeforeUpdate);
            } catch (f) {
              Qe(n, n.return, f);
            }
          }
        (l & 64 && Gm(n), l & 512 && ki(n, n.return));
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
            Dd(e, t);
          } catch (f) {
            Qe(n, n.return, f);
          }
        }
        break;
      case 27:
        t === null && l & 4 && Zm(n);
      case 26:
      case 5:
        (al(e, n), t === null && l & 4 && km(n), l & 512 && ki(n, n.return));
        break;
      case 12:
        al(e, n);
        break;
      case 31:
        (al(e, n), l & 4 && Wm(e, n));
        break;
      case 13:
        (al(e, n),
          l & 4 && Pm(e, n),
          l & 64 &&
            ((e = n.memoizedState),
            e !== null &&
              ((e = e.dehydrated),
              e !== null && ((n = Kp.bind(null, n)), m0(e, n)))));
        break;
      case 22:
        if (((l = n.memoizedState !== null || nl), !l)) {
          ((t = (t !== null && t.memoizedState !== null) || mt), (u = nl));
          var r = mt;
          ((nl = l),
            (mt = t) && !r ? il(e, n, (n.subtreeFlags & 8772) !== 0) : al(e, n),
            (nl = u),
            (mt = r));
        }
        break;
      case 30:
        break;
      default:
        al(e, n);
    }
  }
  function Fm(e) {
    var t = e.alternate;
    (t !== null && ((e.alternate = null), Fm(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 && ((t = e.stateNode), t !== null && mo(t)),
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
    for (n = n.child; n !== null; ) ($m(e, t, n), (n = n.sibling));
  }
  function $m(e, t, n) {
    if (ct && typeof ct.onCommitFiberUnmount == "function")
      try {
        ct.onCommitFiberUnmount(cn, n);
      } catch {}
    switch (n.tag) {
      case 26:
        (mt || Vn(n, t),
          ll(e, t, n),
          n.memoizedState
            ? n.memoizedState.count--
            : n.stateNode && ((n = n.stateNode), n.parentNode.removeChild(n)));
        break;
      case 27:
        mt || Vn(n, t);
        var l = lt,
          u = Ht;
        (Bl(n.type) && ((lt = n.stateNode), (Ht = !1)),
          ll(e, t, n),
          Ii(n.stateNode),
          (lt = l),
          (Ht = u));
        break;
      case 5:
        mt || Vn(n, t);
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
            } catch (r) {
              Qe(n, t, r);
            }
          else
            try {
              lt.removeChild(n.stateNode);
            } catch (r) {
              Qe(n, t, r);
            }
        break;
      case 18:
        lt !== null &&
          (Ht
            ? ((e = lt),
              Gh(
                e.nodeType === 9
                  ? e.body
                  : e.nodeName === "HTML"
                    ? e.ownerDocument.body
                    : e,
                n.stateNode
              ),
              ni(e))
            : Gh(lt, n.stateNode));
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
        (wl(2, n, t), mt || wl(4, n, t), ll(e, t, n));
        break;
      case 1:
        (mt ||
          (Vn(n, t),
          (l = n.stateNode),
          typeof l.componentWillUnmount == "function" && Xm(n, t, l)),
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
  function Wm(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate), e !== null && ((e = e.memoizedState), e !== null))
    ) {
      e = e.dehydrated;
      try {
        ni(e);
      } catch (n) {
        Qe(t, t.return, n);
      }
    }
  }
  function Pm(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate),
      e !== null &&
        ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
    )
      try {
        ni(e);
      } catch (n) {
        Qe(t, t.return, n);
      }
  }
  function qp(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return (t === null && (t = e.stateNode = new Km()), t);
      case 22:
        return (
          (e = e.stateNode),
          (t = e._retryCache),
          t === null && (t = e._retryCache = new Km()),
          t
        );
      default:
        throw Error(c(435, e.tag));
    }
  }
  function sr(e, t) {
    var n = qp(e);
    t.forEach(function (l) {
      if (!n.has(l)) {
        n.add(l);
        var u = Jp.bind(null, e, l);
        l.then(u, u);
      }
    });
  }
  function qt(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var l = 0; l < n.length; l++) {
        var u = n[l],
          r = e,
          f = t,
          g = f;
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
        if (lt === null) throw Error(c(160));
        ($m(r, f, u),
          (lt = null),
          (Ht = !1),
          (r = u.alternate),
          r !== null && (r.return = null),
          (u.return = null));
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; ) (Im(t, e), (t = t.sibling));
  }
  var Mn = null;
  function Im(e, t) {
    var n = e.alternate,
      l = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        (qt(t, e),
          Yt(e),
          l & 4 && (wl(3, e, e.return), Xi(3, e), wl(5, e, e.return)));
        break;
      case 1:
        (qt(t, e),
          Yt(e),
          l & 512 && (mt || n === null || Vn(n, n.return)),
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
        var u = Mn;
        if (
          (qt(t, e),
          Yt(e),
          l & 512 && (mt || n === null || Vn(n, n.return)),
          l & 4)
        ) {
          var r = n !== null ? n.memoizedState : null;
          if (((l = e.memoizedState), n === null))
            if (l === null)
              if (e.stateNode === null) {
                e: {
                  ((l = e.type),
                    (n = e.memoizedProps),
                    (u = u.ownerDocument || u));
                  t: switch (l) {
                    case "title":
                      ((r = u.getElementsByTagName("title")[0]),
                        (!r ||
                          r[vi] ||
                          r[xt] ||
                          r.namespaceURI === "http://www.w3.org/2000/svg" ||
                          r.hasAttribute("itemprop")) &&
                          ((r = u.createElement(l)),
                          u.head.insertBefore(
                            r,
                            u.querySelector("head > title")
                          )),
                        Mt(r, l, n),
                        (r[xt] = e),
                        Et(r),
                        (l = r));
                      break e;
                    case "link":
                      var f = Ih("link", "href", u).get(l + (n.href || ""));
                      if (f) {
                        for (var g = 0; g < f.length; g++)
                          if (
                            ((r = f[g]),
                            r.getAttribute("href") ===
                              (n.href == null || n.href === ""
                                ? null
                                : n.href) &&
                              r.getAttribute("rel") ===
                                (n.rel == null ? null : n.rel) &&
                              r.getAttribute("title") ===
                                (n.title == null ? null : n.title) &&
                              r.getAttribute("crossorigin") ===
                                (n.crossOrigin == null ? null : n.crossOrigin))
                          ) {
                            f.splice(g, 1);
                            break t;
                          }
                      }
                      ((r = u.createElement(l)),
                        Mt(r, l, n),
                        u.head.appendChild(r));
                      break;
                    case "meta":
                      if (
                        (f = Ih("meta", "content", u).get(
                          l + (n.content || "")
                        ))
                      ) {
                        for (g = 0; g < f.length; g++)
                          if (
                            ((r = f[g]),
                            r.getAttribute("content") ===
                              (n.content == null ? null : "" + n.content) &&
                              r.getAttribute("name") ===
                                (n.name == null ? null : n.name) &&
                              r.getAttribute("property") ===
                                (n.property == null ? null : n.property) &&
                              r.getAttribute("http-equiv") ===
                                (n.httpEquiv == null ? null : n.httpEquiv) &&
                              r.getAttribute("charset") ===
                                (n.charSet == null ? null : n.charSet))
                          ) {
                            f.splice(g, 1);
                            break t;
                          }
                      }
                      ((r = u.createElement(l)),
                        Mt(r, l, n),
                        u.head.appendChild(r));
                      break;
                    default:
                      throw Error(c(468, l));
                  }
                  ((r[xt] = e), Et(r), (l = r));
                }
                e.stateNode = l;
              } else eg(u, e.type, e.stateNode);
            else e.stateNode = Ph(u, l, e.memoizedProps);
          else
            r !== l
              ? (r === null
                  ? n.stateNode !== null &&
                    ((n = n.stateNode), n.parentNode.removeChild(n))
                  : r.count--,
                l === null
                  ? eg(u, e.type, e.stateNode)
                  : Ph(u, l, e.memoizedProps))
              : l === null &&
                e.stateNode !== null &&
                Nc(e, e.memoizedProps, n.memoizedProps);
        }
        break;
      case 27:
        (qt(t, e),
          Yt(e),
          l & 512 && (mt || n === null || Vn(n, n.return)),
          n !== null && l & 4 && Nc(e, e.memoizedProps, n.memoizedProps));
        break;
      case 5:
        if (
          (qt(t, e),
          Yt(e),
          l & 512 && (mt || n === null || Vn(n, n.return)),
          e.flags & 32)
        ) {
          u = e.stateNode;
          try {
            _a(u, "");
          } catch (ve) {
            Qe(e, e.return, ve);
          }
        }
        (l & 4 &&
          e.stateNode != null &&
          ((u = e.memoizedProps), Nc(e, u, n !== null ? n.memoizedProps : u)),
          l & 1024 && (Bc = !0));
        break;
      case 6:
        if ((qt(t, e), Yt(e), l & 4)) {
          if (e.stateNode === null) throw Error(c(162));
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
          ((Rr = null),
          (u = Mn),
          (Mn = Tr(t.containerInfo)),
          qt(t, e),
          (Mn = u),
          Yt(e),
          l & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            ni(t.containerInfo);
          } catch (ve) {
            Qe(e, e.return, ve);
          }
        Bc && ((Bc = !1), eh(e));
        break;
      case 4:
        ((l = Mn),
          (Mn = Tr(e.stateNode.containerInfo)),
          qt(t, e),
          Yt(e),
          (Mn = l));
        break;
      case 12:
        (qt(t, e), Yt(e));
        break;
      case 31:
        (qt(t, e),
          Yt(e),
          l & 4 &&
            ((l = e.updateQueue),
            l !== null && ((e.updateQueue = null), sr(e, l))));
        break;
      case 13:
        (qt(t, e),
          Yt(e),
          e.child.flags & 8192 &&
            (e.memoizedState !== null) !=
              (n !== null && n.memoizedState !== null) &&
            (dr = ie()),
          l & 4 &&
            ((l = e.updateQueue),
            l !== null && ((e.updateQueue = null), sr(e, l))));
        break;
      case 22:
        u = e.memoizedState !== null;
        var E = n !== null && n.memoizedState !== null,
          V = nl,
          F = mt;
        if (
          ((nl = V || u),
          (mt = F || E),
          qt(t, e),
          (mt = F),
          (nl = V),
          Yt(e),
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
                  if (((r = E.stateNode), u))
                    ((f = r.style),
                      typeof f.setProperty == "function"
                        ? f.setProperty("display", "none", "important")
                        : (f.display = "none"));
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
                  u ? Xh(j, !0) : Xh(E.stateNode, !1);
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
            n !== null && ((l.retryQueue = null), sr(e, n))));
        break;
      case 19:
        (qt(t, e),
          Yt(e),
          l & 4 &&
            ((l = e.updateQueue),
            l !== null && ((e.updateQueue = null), sr(e, l))));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        (qt(t, e), Yt(e));
    }
  }
  function Yt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var n, l = e.return; l !== null; ) {
          if (Qm(l)) {
            n = l;
            break;
          }
          l = l.return;
        }
        if (n == null) throw Error(c(160));
        switch (n.tag) {
          case 27:
            var u = n.stateNode,
              r = Vc(e);
            cr(e, r, u);
            break;
          case 5:
            var f = n.stateNode;
            n.flags & 32 && (_a(f, ""), (n.flags &= -33));
            var g = Vc(e);
            cr(e, g, f);
            break;
          case 3:
          case 4:
            var E = n.stateNode.containerInfo,
              V = Vc(e);
            Lc(e, V, E);
            break;
          default:
            throw Error(c(161));
        }
      } catch (F) {
        Qe(e, e.return, F);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function eh(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        (eh(t),
          t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
          (e = e.sibling));
      }
  }
  function al(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; ) (Jm(e, t.alternate, t), (t = t.sibling));
  }
  function fa(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (wl(4, t, t.return), fa(t));
          break;
        case 1:
          Vn(t, t.return);
          var n = t.stateNode;
          (typeof n.componentWillUnmount == "function" && Xm(t, t.return, n),
            fa(t));
          break;
        case 27:
          Ii(t.stateNode);
        case 26:
        case 5:
          (Vn(t, t.return), fa(t));
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
        r = t,
        f = r.flags;
      switch (r.tag) {
        case 0:
        case 11:
        case 15:
          (il(u, r, n), Xi(4, r));
          break;
        case 1:
          if (
            (il(u, r, n),
            (l = r),
            (u = l.stateNode),
            typeof u.componentDidMount == "function")
          )
            try {
              u.componentDidMount();
            } catch (V) {
              Qe(l, l.return, V);
            }
          if (((l = r), (u = l.updateQueue), u !== null)) {
            var g = l.stateNode;
            try {
              var E = u.shared.hiddenCallbacks;
              if (E !== null)
                for (u.shared.hiddenCallbacks = null, u = 0; u < E.length; u++)
                  zd(E[u], g);
            } catch (V) {
              Qe(l, l.return, V);
            }
          }
          (n && f & 64 && Gm(r), ki(r, r.return));
          break;
        case 27:
          Zm(r);
        case 26:
        case 5:
          (il(u, r, n), n && l === null && f & 4 && km(r), ki(r, r.return));
          break;
        case 12:
          il(u, r, n);
          break;
        case 31:
          (il(u, r, n), n && f & 4 && Wm(u, r));
          break;
        case 13:
          (il(u, r, n), n && f & 4 && Pm(u, r));
          break;
        case 22:
          (r.memoizedState === null && il(u, r, n), ki(r, r.return));
          break;
        case 30:
          break;
        default:
          il(u, r, n);
      }
      t = t.sibling;
    }
  }
  function Hc(e, t) {
    var n = null;
    (e !== null &&
      e.memoizedState !== null &&
      e.memoizedState.cachePool !== null &&
      (n = e.memoizedState.cachePool.pool),
      (e = null),
      t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (e = t.memoizedState.cachePool.pool),
      e !== n && (e != null && e.refCount++, n != null && wi(n)));
  }
  function qc(e, t) {
    ((e = null),
      t.alternate !== null && (e = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== e && (t.refCount++, e != null && wi(e)));
  }
  function Cn(e, t, n, l) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) (th(e, t, n, l), (t = t.sibling));
  }
  function th(e, t, n, l) {
    var u = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        (Cn(e, t, n, l), u & 2048 && Xi(9, t));
        break;
      case 1:
        Cn(e, t, n, l);
        break;
      case 3:
        (Cn(e, t, n, l),
          u & 2048 &&
            ((e = null),
            t.alternate !== null && (e = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== e && (t.refCount++, e != null && wi(e))));
        break;
      case 12:
        if (u & 2048) {
          (Cn(e, t, n, l), (e = t.stateNode));
          try {
            var r = t.memoizedProps,
              f = r.id,
              g = r.onPostCommit;
            typeof g == "function" &&
              g(
                f,
                t.alternate === null ? "mount" : "update",
                e.passiveEffectDuration,
                -0
              );
          } catch (E) {
            Qe(t, t.return, E);
          }
        } else Cn(e, t, n, l);
        break;
      case 31:
        Cn(e, t, n, l);
        break;
      case 13:
        Cn(e, t, n, l);
        break;
      case 23:
        break;
      case 22:
        ((r = t.stateNode),
          (f = t.alternate),
          t.memoizedState !== null
            ? r._visibility & 2
              ? Cn(e, t, n, l)
              : Qi(e, t)
            : r._visibility & 2
              ? Cn(e, t, n, l)
              : ((r._visibility |= 2),
                Qa(e, t, n, l, (t.subtreeFlags & 10256) !== 0 || !1)),
          u & 2048 && Hc(f, t));
        break;
      case 24:
        (Cn(e, t, n, l), u & 2048 && qc(t.alternate, t));
        break;
      default:
        Cn(e, t, n, l);
    }
  }
  function Qa(e, t, n, l, u) {
    for (
      u = u && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child;
      t !== null;

    ) {
      var r = e,
        f = t,
        g = n,
        E = l,
        V = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          (Qa(r, f, g, E, u), Xi(8, f));
          break;
        case 23:
          break;
        case 22:
          var F = f.stateNode;
          (f.memoizedState !== null
            ? F._visibility & 2
              ? Qa(r, f, g, E, u)
              : Qi(r, f)
            : ((F._visibility |= 2), Qa(r, f, g, E, u)),
            u && V & 2048 && Hc(f.alternate, f));
          break;
        case 24:
          (Qa(r, f, g, E, u), u && V & 2048 && qc(f.alternate, f));
          break;
        default:
          Qa(r, f, g, E, u);
      }
      t = t.sibling;
    }
  }
  function Qi(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var n = e,
          l = t,
          u = l.flags;
        switch (l.tag) {
          case 22:
            (Qi(n, l), u & 2048 && Hc(l.alternate, l));
            break;
          case 24:
            (Qi(n, l), u & 2048 && qc(l.alternate, l));
            break;
          default:
            Qi(n, l);
        }
        t = t.sibling;
      }
  }
  var Zi = 8192;
  function Za(e, t, n) {
    if (e.subtreeFlags & Zi)
      for (e = e.child; e !== null; ) (nh(e, t, n), (e = e.sibling));
  }
  function nh(e, t, n) {
    switch (e.tag) {
      case 26:
        (Za(e, t, n),
          e.flags & Zi &&
            e.memoizedState !== null &&
            _0(n, Mn, e.memoizedState, e.memoizedProps));
        break;
      case 5:
        Za(e, t, n);
        break;
      case 3:
      case 4:
        var l = Mn;
        ((Mn = Tr(e.stateNode.containerInfo)), Za(e, t, n), (Mn = l));
        break;
      case 22:
        e.memoizedState === null &&
          ((l = e.alternate),
          l !== null && l.memoizedState !== null
            ? ((l = Zi), (Zi = 16777216), Za(e, t, n), (Zi = l))
            : Za(e, t, n));
        break;
      default:
        Za(e, t, n);
    }
  }
  function lh(e) {
    var t = e.alternate;
    if (t !== null && ((e = t.child), e !== null)) {
      t.child = null;
      do ((t = e.sibling), (e.sibling = null), (e = t));
      while (e !== null);
    }
  }
  function Ki(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var l = t[n];
          ((At = l), ih(l, e));
        }
      lh(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) (ah(e), (e = e.sibling));
  }
  function ah(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        (Ki(e), e.flags & 2048 && wl(9, e, e.return));
        break;
      case 3:
        Ki(e);
        break;
      case 12:
        Ki(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null &&
        t._visibility & 2 &&
        (e.return === null || e.return.tag !== 13)
          ? ((t._visibility &= -3), fr(e))
          : Ki(e);
        break;
      default:
        Ki(e);
    }
  }
  function fr(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var l = t[n];
          ((At = l), ih(l, e));
        }
      lh(e);
    }
    for (e = e.child; e !== null; ) {
      switch (((t = e), t.tag)) {
        case 0:
        case 11:
        case 15:
          (wl(8, t, t.return), fr(t));
          break;
        case 22:
          ((n = t.stateNode),
            n._visibility & 2 && ((n._visibility &= -3), fr(t)));
          break;
        default:
          fr(t);
      }
      e = e.sibling;
    }
  }
  function ih(e, t) {
    for (; At !== null; ) {
      var n = At;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          wl(8, n, t);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var l = n.memoizedState.cachePool.pool;
            l != null && l.refCount++;
          }
          break;
        case 24:
          wi(n.memoizedState.cache);
      }
      if (((l = n.child), l !== null)) ((l.return = n), (At = l));
      else
        e: for (n = e; At !== null; ) {
          l = At;
          var u = l.sibling,
            r = l.return;
          if ((Fm(l), l === n)) {
            At = null;
            break e;
          }
          if (u !== null) {
            ((u.return = r), (At = u));
            break e;
          }
          At = r;
        }
    }
  }
  var Yp = {
      getCacheForType: function (e) {
        var t = _t(st),
          n = t.data.get(e);
        return (n === void 0 && ((n = e()), t.data.set(e, n)), n);
      },
      cacheSignal: function () {
        return _t(st).controller.signal;
      },
    },
    jp = typeof WeakMap == "function" ? WeakMap : Map,
    Xe = 0,
    $e = null,
    De = null,
    Ne = 0,
    ke = 0,
    en = null,
    zl = !1,
    Ka = !1,
    Yc = !1,
    ul = 0,
    it = 0,
    Dl = 0,
    da = 0,
    jc = 0,
    tn = 0,
    Ja = 0,
    Ji = null,
    jt = null,
    Gc = !1,
    dr = 0,
    uh = 0,
    mr = 1 / 0,
    hr = null,
    Ul = null,
    vt = 0,
    Nl = null,
    Fa = null,
    rl = 0,
    Xc = 0,
    kc = null,
    rh = null,
    Fi = 0,
    Qc = null;
  function nn() {
    return (Xe & 2) !== 0 && Ne !== 0 ? Ne & -Ne : R.T !== null ? Wc() : Tu();
  }
  function oh() {
    if (tn === 0)
      if ((Ne & 536870912) === 0 || Be) {
        var e = Tn;
        ((Tn <<= 1), (Tn & 3932160) === 0 && (Tn = 262144), (tn = e));
      } else tn = 536870912;
    return ((e = Pt.current), e !== null && (e.flags |= 32), tn);
  }
  function Gt(e, t, n) {
    (((e === $e && (ke === 2 || ke === 9)) || e.cancelPendingCommit !== null) &&
      ($a(e, 0), Vl(e, Ne, tn, !1)),
      kn(e, n),
      ((Xe & 2) === 0 || e !== $e) &&
        (e === $e &&
          ((Xe & 2) === 0 && (da |= n), it === 4 && Vl(e, Ne, tn, !1)),
        Ln(e)));
  }
  function ch(e, t, n) {
    if ((Xe & 6) !== 0) throw Error(c(327));
    var l = (!n && (t & 127) === 0 && (t & e.expiredLanes) === 0) || Fl(e, t),
      u = l ? kp(e, t) : Kc(e, t, !0),
      r = l;
    do {
      if (u === 0) {
        Ka && !l && Vl(e, t, 0, !1);
        break;
      } else {
        if (((n = e.current.alternate), r && !Gp(n))) {
          ((u = Kc(e, t, !1)), (r = !1));
          continue;
        }
        if (u === 2) {
          if (((r = t), e.errorRecoveryDisabledLanes & r)) var f = 0;
          else
            ((f = e.pendingLanes & -536870913),
              (f = f !== 0 ? f : f & 536870912 ? 536870912 : 0));
          if (f !== 0) {
            t = f;
            e: {
              var g = e;
              u = Ji;
              var E = g.current.memoizedState.isDehydrated;
              if ((E && ($a(g, f).flags |= 256), (f = Kc(g, f, !1)), f !== 2)) {
                if (Yc && !E) {
                  ((g.errorRecoveryDisabledLanes |= r), (da |= r), (u = 4));
                  break e;
                }
                ((r = jt),
                  (jt = u),
                  r !== null &&
                    (jt === null ? (jt = r) : jt.push.apply(jt, r)));
              }
              u = f;
            }
            if (((r = !1), u !== 2)) continue;
          }
        }
        if (u === 1) {
          ($a(e, 0), Vl(e, t, 0, !0));
          break;
        }
        e: {
          switch (((l = e), (r = u), r)) {
            case 0:
            case 1:
              throw Error(c(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              Vl(l, t, tn, !zl);
              break e;
            case 2:
              jt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(c(329));
          }
          if ((t & 62914560) === t && ((u = dr + 300 - ie()), 10 < u)) {
            if ((Vl(l, t, tn, !zl), Jl(l, 0, !0) !== 0)) break e;
            ((rl = t),
              (l.timeoutHandle = Yh(
                sh.bind(
                  null,
                  l,
                  n,
                  jt,
                  hr,
                  Gc,
                  t,
                  tn,
                  da,
                  Ja,
                  zl,
                  r,
                  "Throttled",
                  -0,
                  0
                ),
                u
              )));
            break e;
          }
          sh(l, n, jt, hr, Gc, t, tn, da, Ja, zl, r, null, -0, 0);
        }
      }
      break;
    } while (!0);
    Ln(e);
  }
  function sh(e, t, n, l, u, r, f, g, E, V, F, ee, H, j) {
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
        nh(t, r, ee));
      var ve =
        (r & 62914560) === r ? dr - ie() : (r & 4194048) === r ? uh - ie() : 0;
      if (((ve = R0(ee, ve)), ve !== null)) {
        ((rl = r),
          (e.cancelPendingCommit = ve(
            ph.bind(null, e, t, r, n, l, u, f, g, E, F, ee, null, H, j)
          )),
          Vl(e, r, f, !V));
        return;
      }
    }
    ph(e, t, r, n, l, u, f, g, E);
  }
  function Gp(e) {
    for (var t = e; ; ) {
      var n = t.tag;
      if (
        (n === 0 || n === 11 || n === 15) &&
        t.flags & 16384 &&
        ((n = t.updateQueue), n !== null && ((n = n.stores), n !== null))
      )
        for (var l = 0; l < n.length; l++) {
          var u = n[l],
            r = u.getSnapshot;
          u = u.value;
          try {
            if (!$t(r(), u)) return !1;
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
  function Vl(e, t, n, l) {
    ((t &= ~jc),
      (t &= ~da),
      (e.suspendedLanes |= t),
      (e.pingedLanes &= ~t),
      l && (e.warmLanes |= t),
      (l = e.expirationTimes));
    for (var u = t; 0 < u; ) {
      var r = 31 - ze(u),
        f = 1 << r;
      ((l[r] = -1), (u &= ~f));
    }
    n !== 0 && Au(e, n, t);
  }
  function gr() {
    return (Xe & 6) === 0 ? ($i(0), !1) : !0;
  }
  function Zc() {
    if (De !== null) {
      if (ke === 0) var e = De.return;
      else ((e = De), ($n = la = null), oc(e), (Ya = null), (Di = 0), (e = De));
      for (; e !== null; ) (jm(e.alternate, e), (e = e.return));
      De = null;
    }
  }
  function $a(e, t) {
    var n = e.timeoutHandle;
    (n !== -1 && ((e.timeoutHandle = -1), o0(n)),
      (n = e.cancelPendingCommit),
      n !== null && ((e.cancelPendingCommit = null), n()),
      (rl = 0),
      Zc(),
      ($e = e),
      (De = n = Jn(e.current, null)),
      (Ne = t),
      (ke = 0),
      (en = null),
      (zl = !1),
      (Ka = Fl(e, t)),
      (Yc = !1),
      (Ja = tn = jc = da = Dl = it = 0),
      (jt = Ji = null),
      (Gc = !1),
      (t & 8) !== 0 && (t |= t & 32));
    var l = e.entangledLanes;
    if (l !== 0)
      for (e = e.entanglements, l &= t; 0 < l; ) {
        var u = 31 - ze(l),
          r = 1 << u;
        ((t |= e[u]), (l &= ~r));
      }
    return ((ul = t), Lu(), n);
  }
  function fh(e, t) {
    ((Me = null),
      (R.H = Yi),
      t === qa || t === ku
        ? ((t = Md()), (ke = 3))
        : t === $o
          ? ((t = Md()), (ke = 4))
          : (ke =
              t === Tc
                ? 8
                : t !== null &&
                    typeof t == "object" &&
                    typeof t.then == "function"
                  ? 6
                  : 1),
      (en = t),
      De === null && ((it = 1), ar(e, mn(t, e.current))));
  }
  function dh() {
    var e = Pt.current;
    return e === null
      ? !0
      : (Ne & 4194048) === Ne
        ? vn === null
        : (Ne & 62914560) === Ne || (Ne & 536870912) !== 0
          ? e === vn
          : !1;
  }
  function mh() {
    var e = R.H;
    return ((R.H = Yi), e === null ? Yi : e);
  }
  function hh() {
    var e = R.A;
    return ((R.A = Yp), e);
  }
  function yr() {
    ((it = 4),
      zl || ((Ne & 4194048) !== Ne && Pt.current !== null) || (Ka = !0),
      ((Dl & 134217727) === 0 && (da & 134217727) === 0) ||
        $e === null ||
        Vl($e, Ne, tn, !1));
  }
  function Kc(e, t, n) {
    var l = Xe;
    Xe |= 2;
    var u = mh(),
      r = hh();
    (($e !== e || Ne !== t) && ((hr = null), $a(e, t)), (t = !1));
    var f = it;
    e: do
      try {
        if (ke !== 0 && De !== null) {
          var g = De,
            E = en;
          switch (ke) {
            case 8:
              (Zc(), (f = 6));
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Pt.current === null && (t = !0);
              var V = ke;
              if (((ke = 0), (en = null), Wa(e, g, E, V), n && Ka)) {
                f = 0;
                break e;
              }
              break;
            default:
              ((V = ke), (ke = 0), (en = null), Wa(e, g, E, V));
          }
        }
        (Xp(), (f = it));
        break;
      } catch (F) {
        fh(e, F);
      }
    while (!0);
    return (
      t && e.shellSuspendCounter++,
      ($n = la = null),
      (Xe = l),
      (R.H = u),
      (R.A = r),
      De === null && (($e = null), (Ne = 0), Lu()),
      f
    );
  }
  function Xp() {
    for (; De !== null; ) gh(De);
  }
  function kp(e, t) {
    var n = Xe;
    Xe |= 2;
    var l = mh(),
      u = hh();
    $e !== e || Ne !== t
      ? ((hr = null), (mr = ie() + 500), $a(e, t))
      : (Ka = Fl(e, t));
    e: do
      try {
        if (ke !== 0 && De !== null) {
          t = De;
          var r = en;
          t: switch (ke) {
            case 1:
              ((ke = 0), (en = null), Wa(e, t, r, 1));
              break;
            case 2:
            case 9:
              if (_d(r)) {
                ((ke = 0), (en = null), yh(t));
                break;
              }
              ((t = function () {
                ((ke !== 2 && ke !== 9) || $e !== e || (ke = 7), Ln(e));
              }),
                r.then(t, t));
              break e;
            case 3:
              ke = 7;
              break e;
            case 4:
              ke = 5;
              break e;
            case 7:
              _d(r)
                ? ((ke = 0), (en = null), yh(t))
                : ((ke = 0), (en = null), Wa(e, t, r, 7));
              break;
            case 5:
              var f = null;
              switch (De.tag) {
                case 26:
                  f = De.memoizedState;
                case 5:
                case 27:
                  var g = De;
                  if (f ? tg(f) : g.stateNode.complete) {
                    ((ke = 0), (en = null));
                    var E = g.sibling;
                    if (E !== null) De = E;
                    else {
                      var V = g.return;
                      V !== null ? ((De = V), vr(V)) : (De = null);
                    }
                    break t;
                  }
              }
              ((ke = 0), (en = null), Wa(e, t, r, 5));
              break;
            case 6:
              ((ke = 0), (en = null), Wa(e, t, r, 6));
              break;
            case 8:
              (Zc(), (it = 6));
              break e;
            default:
              throw Error(c(462));
          }
        }
        Qp();
        break;
      } catch (F) {
        fh(e, F);
      }
    while (!0);
    return (
      ($n = la = null),
      (R.H = l),
      (R.A = u),
      (Xe = n),
      De !== null ? 0 : (($e = null), (Ne = 0), Lu(), it)
    );
  }
  function Qp() {
    for (; De !== null && !K(); ) gh(De);
  }
  function gh(e) {
    var t = qm(e.alternate, e, ul);
    ((e.memoizedProps = e.pendingProps), t === null ? vr(e) : (De = t));
  }
  function yh(e) {
    var t = e,
      n = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Um(n, t, t.pendingProps, t.type, void 0, Ne);
        break;
      case 11:
        t = Um(n, t, t.pendingProps, t.type.render, t.ref, Ne);
        break;
      case 5:
        oc(t);
      default:
        (jm(n, t), (t = De = hd(t, ul)), (t = qm(n, t, ul)));
    }
    ((e.memoizedProps = e.pendingProps), t === null ? vr(e) : (De = t));
  }
  function Wa(e, t, n, l) {
    (($n = la = null), oc(t), (Ya = null), (Di = 0));
    var u = t.return;
    try {
      if (Up(e, u, t, n, Ne)) {
        ((it = 1), ar(e, mn(n, e.current)), (De = null));
        return;
      }
    } catch (r) {
      if (u !== null) throw ((De = u), r);
      ((it = 1), ar(e, mn(n, e.current)), (De = null));
      return;
    }
    t.flags & 32768
      ? (Be || l === 1
          ? (e = !0)
          : Ka || (Ne & 536870912) !== 0
            ? (e = !1)
            : ((zl = e = !0),
              (l === 2 || l === 9 || l === 3 || l === 6) &&
                ((l = Pt.current),
                l !== null && l.tag === 13 && (l.flags |= 16384))),
        vh(t, e))
      : vr(t);
  }
  function vr(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        vh(t, zl);
        return;
      }
      e = t.return;
      var n = Lp(t.alternate, t, ul);
      if (n !== null) {
        De = n;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        De = t;
        return;
      }
      De = t = e;
    } while (t !== null);
    it === 0 && (it = 5);
  }
  function vh(e, t) {
    do {
      var n = Bp(e.alternate, e);
      if (n !== null) {
        ((n.flags &= 32767), (De = n));
        return;
      }
      if (
        ((n = e.return),
        n !== null &&
          ((n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null)),
        !t && ((e = e.sibling), e !== null))
      ) {
        De = e;
        return;
      }
      De = e = n;
    } while (e !== null);
    ((it = 6), (De = null));
  }
  function ph(e, t, n, l, u, r, f, g, E) {
    e.cancelPendingCommit = null;
    do pr();
    while (vt !== 0);
    if ((Xe & 6) !== 0) throw Error(c(327));
    if (t !== null) {
      if (t === e.current) throw Error(c(177));
      if (
        ((r = t.lanes | t.childLanes),
        (r |= Vo),
        Eu(e, n, r, f, g, E),
        e === $e && ((De = $e = null), (Ne = 0)),
        (Fa = t),
        (Nl = e),
        (rl = n),
        (Xc = r),
        (kc = u),
        (rh = l),
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
          ? ((e.callbackNode = null),
            (e.callbackPriority = 0),
            Fp(He, function () {
              return (xh(), null);
            }))
          : ((e.callbackNode = null), (e.callbackPriority = 0)),
        (l = (t.flags & 13878) !== 0),
        (t.subtreeFlags & 13878) !== 0 || l)
      ) {
        ((l = R.T), (R.T = null), (u = w.p), (w.p = 2), (f = Xe), (Xe |= 4));
        try {
          Hp(e, t, n);
        } finally {
          ((Xe = f), (w.p = u), (R.T = l));
        }
      }
      ((vt = 1), bh(), Sh(), Eh());
    }
  }
  function bh() {
    if (vt === 1) {
      vt = 0;
      var e = Nl,
        t = Fa,
        n = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || n) {
        ((n = R.T), (R.T = null));
        var l = w.p;
        w.p = 2;
        var u = Xe;
        Xe |= 4;
        try {
          Im(t, e);
          var r = is,
            f = id(e.containerInfo),
            g = r.focusedElem,
            E = r.selectionRange;
          if (
            f !== g &&
            g &&
            g.ownerDocument &&
            ad(g.ownerDocument.documentElement, g)
          ) {
            if (E !== null && wo(g)) {
              var V = E.start,
                F = E.end;
              if ((F === void 0 && (F = V), "selectionStart" in g))
                ((g.selectionStart = V),
                  (g.selectionEnd = Math.min(F, g.value.length)));
              else {
                var ee = g.ownerDocument || document,
                  H = (ee && ee.defaultView) || window;
                if (H.getSelection) {
                  var j = H.getSelection(),
                    ve = g.textContent.length,
                    _e = Math.min(E.start, ve),
                    Fe = E.end === void 0 ? _e : Math.min(E.end, ve);
                  !j.extend && _e > Fe && ((f = Fe), (Fe = _e), (_e = f));
                  var z = ld(g, _e),
                    T = ld(g, Fe);
                  if (
                    z &&
                    T &&
                    (j.rangeCount !== 1 ||
                      j.anchorNode !== z.node ||
                      j.anchorOffset !== z.offset ||
                      j.focusNode !== T.node ||
                      j.focusOffset !== T.offset)
                  ) {
                    var N = ee.createRange();
                    (N.setStart(z.node, z.offset),
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
          ((wr = !!as), (is = as = null));
        } finally {
          ((Xe = u), (w.p = l), (R.T = n));
        }
      }
      ((e.current = t), (vt = 2));
    }
  }
  function Sh() {
    if (vt === 2) {
      vt = 0;
      var e = Nl,
        t = Fa,
        n = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || n) {
        ((n = R.T), (R.T = null));
        var l = w.p;
        w.p = 2;
        var u = Xe;
        Xe |= 4;
        try {
          Jm(e, t.alternate, t);
        } finally {
          ((Xe = u), (w.p = l), (R.T = n));
        }
      }
      vt = 3;
    }
  }
  function Eh() {
    if (vt === 4 || vt === 3) {
      ((vt = 0), de());
      var e = Nl,
        t = Fa,
        n = rl,
        l = rh;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
        ? (vt = 5)
        : ((vt = 0), (Fa = Nl = null), Ah(e, e.pendingLanes));
      var u = e.pendingLanes;
      if (
        (u === 0 && (Ul = null),
        yi(n),
        (t = t.stateNode),
        ct && typeof ct.onCommitFiberRoot == "function")
      )
        try {
          ct.onCommitFiberRoot(cn, t, void 0, (t.current.flags & 128) === 128);
        } catch {}
      if (l !== null) {
        ((t = R.T), (u = w.p), (w.p = 2), (R.T = null));
        try {
          for (var r = e.onRecoverableError, f = 0; f < l.length; f++) {
            var g = l[f];
            r(g.value, { componentStack: g.stack });
          }
        } finally {
          ((R.T = t), (w.p = u));
        }
      }
      ((rl & 3) !== 0 && pr(),
        Ln(e),
        (u = e.pendingLanes),
        (n & 261930) !== 0 && (u & 42) !== 0
          ? e === Qc
            ? Fi++
            : ((Fi = 0), (Qc = e))
          : (Fi = 0),
        $i(0));
    }
  }
  function Ah(e, t) {
    (e.pooledCacheLanes &= t) === 0 &&
      ((t = e.pooledCache), t != null && ((e.pooledCache = null), wi(t)));
  }
  function pr() {
    return (bh(), Sh(), Eh(), xh());
  }
  function xh() {
    if (vt !== 5) return !1;
    var e = Nl,
      t = Xc;
    Xc = 0;
    var n = yi(rl),
      l = R.T,
      u = w.p;
    try {
      ((w.p = 32 > n ? 32 : n), (R.T = null), (n = kc), (kc = null));
      var r = Nl,
        f = rl;
      if (((vt = 0), (Fa = Nl = null), (rl = 0), (Xe & 6) !== 0))
        throw Error(c(331));
      var g = Xe;
      if (
        ((Xe |= 4),
        ah(r.current),
        th(r, r.current, f, n),
        (Xe = g),
        $i(0, !1),
        ct && typeof ct.onPostCommitFiberRoot == "function")
      )
        try {
          ct.onPostCommitFiberRoot(cn, r);
        } catch {}
      return !0;
    } finally {
      ((w.p = u), (R.T = l), Ah(e, t));
    }
  }
  function Th(e, t, n) {
    ((t = mn(n, t)),
      (t = xc(e.stateNode, t, 2)),
      (e = Ml(e, t, 2)),
      e !== null && (kn(e, 2), Ln(e)));
  }
  function Qe(e, t, n) {
    if (e.tag === 3) Th(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Th(t, e, n);
          break;
        } else if (t.tag === 1) {
          var l = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof l.componentDidCatch == "function" &&
              (Ul === null || !Ul.has(l)))
          ) {
            ((e = mn(n, e)),
              (n = _m(2)),
              (l = Ml(t, n, 2)),
              l !== null && (Rm(n, l, t, e), kn(l, 2), Ln(l)));
            break;
          }
        }
        t = t.return;
      }
  }
  function Jc(e, t, n) {
    var l = e.pingCache;
    if (l === null) {
      l = e.pingCache = new jp();
      var u = new Set();
      l.set(t, u);
    } else ((u = l.get(t)), u === void 0 && ((u = new Set()), l.set(t, u)));
    u.has(n) ||
      ((Yc = !0), u.add(n), (e = Zp.bind(null, e, t, n)), t.then(e, e));
  }
  function Zp(e, t, n) {
    var l = e.pingCache;
    (l !== null && l.delete(t),
      (e.pingedLanes |= e.suspendedLanes & n),
      (e.warmLanes &= ~n),
      $e === e &&
        (Ne & n) === n &&
        (it === 4 || (it === 3 && (Ne & 62914560) === Ne && 300 > ie() - dr)
          ? (Xe & 2) === 0 && $a(e, 0)
          : (jc |= n),
        Ja === Ne && (Ja = 0)),
      Ln(e));
  }
  function _h(e, t) {
    (t === 0 && (t = Su()), (e = ea(e, t)), e !== null && (kn(e, t), Ln(e)));
  }
  function Kp(e) {
    var t = e.memoizedState,
      n = 0;
    (t !== null && (n = t.retryLane), _h(e, n));
  }
  function Jp(e, t) {
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
        throw Error(c(314));
    }
    (l !== null && l.delete(t), _h(e, n));
  }
  function Fp(e, t) {
    return A(e, t);
  }
  var br = null,
    Pa = null,
    Fc = !1,
    Sr = !1,
    $c = !1,
    Ll = 0;
  function Ln(e) {
    (e !== Pa &&
      e.next === null &&
      (Pa === null ? (br = Pa = e) : (Pa = Pa.next = e)),
      (Sr = !0),
      Fc || ((Fc = !0), Wp()));
  }
  function $i(e, t) {
    if (!$c && Sr) {
      $c = !0;
      do
        for (var n = !1, l = br; l !== null; ) {
          if (e !== 0) {
            var u = l.pendingLanes;
            if (u === 0) var r = 0;
            else {
              var f = l.suspendedLanes,
                g = l.pingedLanes;
              ((r = (1 << (31 - ze(42 | e) + 1)) - 1),
                (r &= u & ~(f & ~g)),
                (r = r & 201326741 ? (r & 201326741) | 1 : r ? r | 2 : 0));
            }
            r !== 0 && ((n = !0), Oh(l, r));
          } else
            ((r = Ne),
              (r = Jl(
                l,
                l === $e ? r : 0,
                l.cancelPendingCommit !== null || l.timeoutHandle !== -1
              )),
              (r & 3) === 0 || Fl(l, r) || ((n = !0), Oh(l, r)));
          l = l.next;
        }
      while (n);
      $c = !1;
    }
  }
  function $p() {
    Rh();
  }
  function Rh() {
    Sr = Fc = !1;
    var e = 0;
    Ll !== 0 && r0() && (e = Ll);
    for (var t = ie(), n = null, l = br; l !== null; ) {
      var u = l.next,
        r = Mh(l, t);
      (r === 0
        ? ((l.next = null),
          n === null ? (br = u) : (n.next = u),
          u === null && (Pa = n))
        : ((n = l), (e !== 0 || (r & 3) !== 0) && (Sr = !0)),
        (l = u));
    }
    ((vt !== 0 && vt !== 5) || $i(e), Ll !== 0 && (Ll = 0));
  }
  function Mh(e, t) {
    for (
      var n = e.suspendedLanes,
        l = e.pingedLanes,
        u = e.expirationTimes,
        r = e.pendingLanes & -62914561;
      0 < r;

    ) {
      var f = 31 - ze(r),
        g = 1 << f,
        E = u[f];
      (E === -1
        ? ((g & n) === 0 || (g & l) !== 0) && (u[f] = so(g, t))
        : E <= t && (e.expiredLanes |= g),
        (r &= ~g));
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
        (e === t && (ke === 2 || ke === 9)) ||
        e.cancelPendingCommit !== null)
    )
      return (
        l !== null && l !== null && U(l),
        (e.callbackNode = null),
        (e.callbackPriority = 0)
      );
    if ((n & 3) === 0 || Fl(e, n)) {
      if (((t = n & -n), t === e.callbackPriority)) return t;
      switch ((l !== null && U(l), yi(n))) {
        case 2:
        case 8:
          n = Le;
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
        (l = Ch.bind(null, e)),
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
  function Ch(e, t) {
    if (vt !== 0 && vt !== 5)
      return ((e.callbackNode = null), (e.callbackPriority = 0), null);
    var n = e.callbackNode;
    if (pr() && e.callbackNode !== n) return null;
    var l = Ne;
    return (
      (l = Jl(
        e,
        e === $e ? l : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1
      )),
      l === 0
        ? null
        : (ch(e, l, t),
          Mh(e, ie()),
          e.callbackNode != null && e.callbackNode === n
            ? Ch.bind(null, e)
            : null)
    );
  }
  function Oh(e, t) {
    if (pr()) return null;
    ch(e, t, !0);
  }
  function Wp() {
    c0(function () {
      (Xe & 6) !== 0 ? A(Ee, $p) : Rh();
    });
  }
  function Wc() {
    if (Ll === 0) {
      var e = Ba;
      (e === 0 && ((e = xn), (xn <<= 1), (xn & 261888) === 0 && (xn = 256)),
        (Ll = e));
    }
    return Ll;
  }
  function wh(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean"
      ? null
      : typeof e == "function"
        ? e
        : Cu("" + e);
  }
  function zh(e, t) {
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
  function Pp(e, t, n, l, u) {
    if (t === "submit" && n && n.stateNode === u) {
      var r = wh((u[Lt] || null).action),
        f = l.submitter;
      f &&
        ((t = (t = f[Lt] || null)
          ? wh(t.formAction)
          : f.getAttribute("formAction")),
        t !== null && ((r = t), (f = null)));
      var g = new Du("action", "action", null, l, u);
      e.push({
        event: g,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (l.defaultPrevented) {
                if (Ll !== 0) {
                  var E = f ? zh(u, f) : new FormData(u);
                  vc(
                    n,
                    { pending: !0, data: E, method: u.method, action: r },
                    null,
                    E
                  );
                }
              } else
                typeof r == "function" &&
                  (g.preventDefault(),
                  (E = f ? zh(u, f) : new FormData(u)),
                  vc(
                    n,
                    { pending: !0, data: E, method: u.method, action: r },
                    r,
                    E
                  ));
            },
            currentTarget: u,
          },
        ],
      });
    }
  }
  for (var Pc = 0; Pc < No.length; Pc++) {
    var Ic = No[Pc],
      Ip = Ic.toLowerCase(),
      e0 = Ic[0].toUpperCase() + Ic.slice(1);
    Rn(Ip, "on" + e0);
  }
  (Rn(od, "onAnimationEnd"),
    Rn(cd, "onAnimationIteration"),
    Rn(sd, "onAnimationStart"),
    Rn("dblclick", "onDoubleClick"),
    Rn("focusin", "onFocus"),
    Rn("focusout", "onBlur"),
    Rn(yp, "onTransitionRun"),
    Rn(vp, "onTransitionStart"),
    Rn(pp, "onTransitionCancel"),
    Rn(fd, "onTransitionEnd"),
    xa("onMouseEnter", ["mouseout", "mouseover"]),
    xa("onMouseLeave", ["mouseout", "mouseover"]),
    xa("onPointerEnter", ["pointerout", "pointerover"]),
    xa("onPointerLeave", ["pointerout", "pointerover"]),
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
  var Wi =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    t0 = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(Wi)
    );
  function Dh(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var l = e[n],
        u = l.event;
      l = l.listeners;
      e: {
        var r = void 0;
        if (t)
          for (var f = l.length - 1; 0 <= f; f--) {
            var g = l[f],
              E = g.instance,
              V = g.currentTarget;
            if (((g = g.listener), E !== r && u.isPropagationStopped()))
              break e;
            ((r = g), (u.currentTarget = V));
            try {
              r(u);
            } catch (F) {
              Vu(F);
            }
            ((u.currentTarget = null), (r = E));
          }
        else
          for (f = 0; f < l.length; f++) {
            if (
              ((g = l[f]),
              (E = g.instance),
              (V = g.currentTarget),
              (g = g.listener),
              E !== r && u.isPropagationStopped())
            )
              break e;
            ((r = g), (u.currentTarget = V));
            try {
              r(u);
            } catch (F) {
              Vu(F);
            }
            ((u.currentTarget = null), (r = E));
          }
      }
    }
  }
  function Ue(e, t) {
    var n = t[fo];
    n === void 0 && (n = t[fo] = new Set());
    var l = e + "__bubble";
    n.has(l) || (Uh(t, e, 2, !1), n.add(l));
  }
  function es(e, t, n) {
    var l = 0;
    (t && (l |= 4), Uh(n, e, l, t));
  }
  var Er = "_reactListening" + Math.random().toString(36).slice(2);
  function ts(e) {
    if (!e[Er]) {
      ((e[Er] = !0),
        Rf.forEach(function (n) {
          n !== "selectionchange" && (t0.has(n) || es(n, !1, e), es(n, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Er] || ((t[Er] = !0), es("selectionchange", !1, t));
    }
  }
  function Uh(e, t, n, l) {
    switch (og(t)) {
      case 2:
        var u = O0;
        break;
      case 8:
        u = w0;
        break;
      default:
        u = ys;
    }
    ((n = u.bind(null, t, n, e)),
      (u = void 0),
      !Eo ||
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
  function ns(e, t, n, l, u) {
    var r = l;
    if ((t & 1) === 0 && (t & 2) === 0 && l !== null)
      e: for (;;) {
        if (l === null) return;
        var f = l.tag;
        if (f === 3 || f === 4) {
          var g = l.stateNode.containerInfo;
          if (g === u) break;
          if (f === 4)
            for (f = l.return; f !== null; ) {
              var E = f.tag;
              if ((E === 3 || E === 4) && f.stateNode.containerInfo === u)
                return;
              f = f.return;
            }
          for (; g !== null; ) {
            if (((f = Sa(g)), f === null)) return;
            if (((E = f.tag), E === 5 || E === 6 || E === 26 || E === 27)) {
              l = r = f;
              continue e;
            }
            g = g.parentNode;
          }
        }
        l = l.return;
      }
    Hf(function () {
      var V = r,
        F = bo(n),
        ee = [];
      e: {
        var H = dd.get(e);
        if (H !== void 0) {
          var j = Du,
            ve = e;
          switch (e) {
            case "keypress":
              if (wu(n) === 0) break e;
            case "keydown":
            case "keyup":
              j = Jv;
              break;
            case "focusin":
              ((ve = "focus"), (j = _o));
              break;
            case "focusout":
              ((ve = "blur"), (j = _o));
              break;
            case "beforeblur":
            case "afterblur":
              j = _o;
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
              j = jf;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              j = Lv;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              j = Wv;
              break;
            case od:
            case cd:
            case sd:
              j = qv;
              break;
            case fd:
              j = Iv;
              break;
            case "scroll":
            case "scrollend":
              j = Nv;
              break;
            case "wheel":
              j = tp;
              break;
            case "copy":
            case "cut":
            case "paste":
              j = jv;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              j = Xf;
              break;
            case "toggle":
            case "beforetoggle":
              j = lp;
          }
          var _e = (t & 4) !== 0,
            Fe = !_e && (e === "scroll" || e === "scrollend"),
            z = _e ? (H !== null ? H + "Capture" : null) : H;
          _e = [];
          for (var T = V, N; T !== null; ) {
            var I = T;
            if (
              ((N = I.stateNode),
              (I = I.tag),
              (I !== 5 && I !== 26 && I !== 27) ||
                N === null ||
                z === null ||
                ((I = bi(T, z)), I != null && _e.push(Pi(T, I, N))),
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
              n !== po &&
              (ve = n.relatedTarget || n.fromElement) &&
              (Sa(ve) || ve[ba]))
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
                (j = V),
                (ve = ve ? Sa(ve) : null),
                ve !== null &&
                  ((Fe = d(ve)),
                  (_e = ve.tag),
                  ve !== Fe || (_e !== 5 && _e !== 27 && _e !== 6)) &&
                  (ve = null))
              : ((j = null), (ve = V)),
            j !== ve)
          ) {
            if (
              ((_e = jf),
              (I = "onMouseLeave"),
              (z = "onMouseEnter"),
              (T = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((_e = Xf),
                (I = "onPointerLeave"),
                (z = "onPointerEnter"),
                (T = "pointer")),
              (Fe = j == null ? H : pi(j)),
              (N = ve == null ? H : pi(ve)),
              (H = new _e(I, T + "leave", j, n, F)),
              (H.target = Fe),
              (H.relatedTarget = N),
              (I = null),
              Sa(F) === V &&
                ((_e = new _e(z, T + "enter", ve, n, F)),
                (_e.target = N),
                (_e.relatedTarget = Fe),
                (I = _e)),
              (Fe = I),
              j && ve)
            )
              t: {
                for (_e = n0, z = j, T = ve, N = 0, I = z; I; I = _e(I)) N++;
                I = 0;
                for (var xe = T; xe; xe = _e(xe)) I++;
                for (; 0 < N - I; ) ((z = _e(z)), N--);
                for (; 0 < I - N; ) ((T = _e(T)), I--);
                for (; N--; ) {
                  if (z === T || (T !== null && z === T.alternate)) {
                    _e = z;
                    break t;
                  }
                  ((z = _e(z)), (T = _e(T)));
                }
                _e = null;
              }
            else _e = null;
            (j !== null && Nh(ee, H, j, _e, !1),
              ve !== null && Fe !== null && Nh(ee, Fe, ve, _e, !0));
          }
        }
        e: {
          if (
            ((H = V ? pi(V) : window),
            (j = H.nodeName && H.nodeName.toLowerCase()),
            j === "select" || (j === "input" && H.type === "file"))
          )
            var je = Wf;
          else if (Ff(H))
            if (Pf) je = mp;
            else {
              je = fp;
              var Se = sp;
            }
          else
            ((j = H.nodeName),
              !j ||
              j.toLowerCase() !== "input" ||
              (H.type !== "checkbox" && H.type !== "radio")
                ? V && vo(V.elementType) && (je = Wf)
                : (je = dp));
          if (je && (je = je(e, V))) {
            $f(ee, je, n, F);
            break e;
          }
          (Se && Se(e, H, V),
            e === "focusout" &&
              V &&
              H.type === "number" &&
              V.memoizedProps.value != null &&
              yo(H, "number", H.value));
        }
        switch (((Se = V ? pi(V) : window), e)) {
          case "focusin":
            (Ff(Se) || Se.contentEditable === "true") &&
              ((Oa = Se), (zo = V), (Mi = null));
            break;
          case "focusout":
            Mi = zo = Oa = null;
            break;
          case "mousedown":
            Do = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((Do = !1), ud(ee, n, F));
            break;
          case "selectionchange":
            if (gp) break;
          case "keydown":
          case "keyup":
            ud(ee, n, F);
        }
        var Ce;
        if (Mo)
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
          Ca
            ? Kf(e, n) && (Ve = "onCompositionEnd")
            : e === "keydown" &&
              n.keyCode === 229 &&
              (Ve = "onCompositionStart");
        (Ve &&
          (kf &&
            n.locale !== "ko" &&
            (Ca || Ve !== "onCompositionStart"
              ? Ve === "onCompositionEnd" && Ca && (Ce = qf())
              : ((Sl = F),
                (Ao = "value" in Sl ? Sl.value : Sl.textContent),
                (Ca = !0))),
          (Se = Ar(V, Ve)),
          0 < Se.length &&
            ((Ve = new Gf(Ve, e, null, n, F)),
            ee.push({ event: Ve, listeners: Se }),
            Ce
              ? (Ve.data = Ce)
              : ((Ce = Jf(n)), Ce !== null && (Ve.data = Ce)))),
          (Ce = ip ? up(e, n) : rp(e, n)) &&
            ((Ve = Ar(V, "onBeforeInput")),
            0 < Ve.length &&
              ((Se = new Gf("onBeforeInput", "beforeinput", null, n, F)),
              ee.push({ event: Se, listeners: Ve }),
              (Se.data = Ce))),
          Pp(ee, e, V, n, F));
      }
      Dh(ee, t);
    });
  }
  function Pi(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Ar(e, t) {
    for (var n = t + "Capture", l = []; e !== null; ) {
      var u = e,
        r = u.stateNode;
      if (
        ((u = u.tag),
        (u !== 5 && u !== 26 && u !== 27) ||
          r === null ||
          ((u = bi(e, n)),
          u != null && l.unshift(Pi(e, u, r)),
          (u = bi(e, t)),
          u != null && l.push(Pi(e, u, r))),
        e.tag === 3)
      )
        return l;
      e = e.return;
    }
    return [];
  }
  function n0(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function Nh(e, t, n, l, u) {
    for (var r = t._reactName, f = []; n !== null && n !== l; ) {
      var g = n,
        E = g.alternate,
        V = g.stateNode;
      if (((g = g.tag), E !== null && E === l)) break;
      ((g !== 5 && g !== 26 && g !== 27) ||
        V === null ||
        ((E = V),
        u
          ? ((V = bi(n, r)), V != null && f.unshift(Pi(n, V, E)))
          : u || ((V = bi(n, r)), V != null && f.push(Pi(n, V, E)))),
        (n = n.return));
    }
    f.length !== 0 && e.push({ event: t, listeners: f });
  }
  var l0 = /\r\n?/g,
    a0 = /\u0000|\uFFFD/g;
  function Vh(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        l0,
        `
`
      )
      .replace(a0, "");
  }
  function Lh(e, t) {
    return ((t = Vh(t)), Vh(e) === t);
  }
  function Je(e, t, n, l, u, r) {
    switch (n) {
      case "children":
        typeof l == "string"
          ? t === "body" || (t === "textarea" && l === "") || _a(e, l)
          : (typeof l == "number" || typeof l == "bigint") &&
            t !== "body" &&
            _a(e, "" + l);
        break;
      case "className":
        Ru(e, "class", l);
        break;
      case "tabIndex":
        Ru(e, "tabindex", l);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Ru(e, n, l);
        break;
      case "style":
        Lf(e, l, r);
        break;
      case "data":
        if (t !== "object") {
          Ru(e, "data", l);
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
        ((l = Cu("" + l)), e.setAttribute(n, l));
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
          typeof r == "function" &&
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
        ((l = Cu("" + l)), e.setAttribute(n, l));
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
          if (typeof l != "object" || !("__html" in l)) throw Error(c(61));
          if (((n = l.__html), n != null)) {
            if (u.children != null) throw Error(c(60));
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
        ((n = Cu("" + l)),
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
        (Ue("beforetoggle", e), Ue("toggle", e), _u(e, "popover", l));
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
        _u(e, "is", l);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < n.length) ||
          (n[0] !== "o" && n[0] !== "O") ||
          (n[1] !== "n" && n[1] !== "N")) &&
          ((n = Dv.get(n) || n), _u(e, n, l));
    }
  }
  function ls(e, t, n, l, u, r) {
    switch (n) {
      case "style":
        Lf(e, l, r);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l)) throw Error(c(61));
          if (((n = l.__html), n != null)) {
            if (u.children != null) throw Error(c(60));
            e.innerHTML = n;
          }
        }
        break;
      case "children":
        typeof l == "string"
          ? _a(e, l)
          : (typeof l == "number" || typeof l == "bigint") && _a(e, "" + l);
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
        if (!Mf.hasOwnProperty(n))
          e: {
            if (
              n[0] === "o" &&
              n[1] === "n" &&
              ((u = n.endsWith("Capture")),
              (t = n.slice(2, u ? n.length - 7 : void 0)),
              (r = e[Lt] || null),
              (r = r != null ? r[n] : null),
              typeof r == "function" && e.removeEventListener(t, r, u),
              typeof l == "function")
            ) {
              (typeof r != "function" &&
                r !== null &&
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
                : _u(e, n, l);
          }
    }
  }
  function Mt(e, t, n) {
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
          r;
        for (r in n)
          if (n.hasOwnProperty(r)) {
            var f = n[r];
            if (f != null)
              switch (r) {
                case "src":
                  l = !0;
                  break;
                case "srcSet":
                  u = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(c(137, t));
                default:
                  Je(e, t, r, f, n, null);
              }
          }
        (u && Je(e, t, "srcSet", n.srcSet, n, null),
          l && Je(e, t, "src", n.src, n, null));
        return;
      case "input":
        Ue("invalid", e);
        var g = (r = f = u = null),
          E = null,
          V = null;
        for (l in n)
          if (n.hasOwnProperty(l)) {
            var F = n[l];
            if (F != null)
              switch (l) {
                case "name":
                  u = F;
                  break;
                case "type":
                  f = F;
                  break;
                case "checked":
                  E = F;
                  break;
                case "defaultChecked":
                  V = F;
                  break;
                case "value":
                  r = F;
                  break;
                case "defaultValue":
                  g = F;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (F != null) throw Error(c(137, t));
                  break;
                default:
                  Je(e, t, l, F, n, null);
              }
          }
        Df(e, r, g, E, V, f, u, !1);
        return;
      case "select":
        (Ue("invalid", e), (l = f = r = null));
        for (u in n)
          if (n.hasOwnProperty(u) && ((g = n[u]), g != null))
            switch (u) {
              case "value":
                r = g;
                break;
              case "defaultValue":
                f = g;
                break;
              case "multiple":
                l = g;
              default:
                Je(e, t, u, g, n, null);
            }
        ((t = r),
          (n = f),
          (e.multiple = !!l),
          t != null ? Ta(e, !!l, t, !1) : n != null && Ta(e, !!l, n, !0));
        return;
      case "textarea":
        (Ue("invalid", e), (r = u = l = null));
        for (f in n)
          if (n.hasOwnProperty(f) && ((g = n[f]), g != null))
            switch (f) {
              case "value":
                l = g;
                break;
              case "defaultValue":
                u = g;
                break;
              case "children":
                r = g;
                break;
              case "dangerouslySetInnerHTML":
                if (g != null) throw Error(c(91));
                break;
              default:
                Je(e, t, f, g, n, null);
            }
        Nf(e, l, u, r);
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
        for (l = 0; l < Wi.length; l++) Ue(Wi[l], e);
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
        for (V in n)
          if (n.hasOwnProperty(V) && ((l = n[V]), l != null))
            switch (V) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(c(137, t));
              default:
                Je(e, t, V, l, n, null);
            }
        return;
      default:
        if (vo(t)) {
          for (F in n)
            n.hasOwnProperty(F) &&
              ((l = n[F]), l !== void 0 && ls(e, t, F, l, n, void 0));
          return;
        }
    }
    for (g in n)
      n.hasOwnProperty(g) && ((l = n[g]), l != null && Je(e, t, g, l, n, null));
  }
  function i0(e, t, n, l) {
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
          r = null,
          f = null,
          g = null,
          E = null,
          V = null,
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
                r = j;
                break;
              case "name":
                u = j;
                break;
              case "checked":
                V = j;
                break;
              case "defaultChecked":
                F = j;
                break;
              case "value":
                f = j;
                break;
              case "defaultValue":
                g = j;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (j != null) throw Error(c(137, t));
                break;
              default:
                j !== ee && Je(e, t, H, j, l, ee);
            }
        }
        go(e, f, g, E, V, F, r, u);
        return;
      case "select":
        j = f = g = H = null;
        for (r in n)
          if (((E = n[r]), n.hasOwnProperty(r) && E != null))
            switch (r) {
              case "value":
                break;
              case "multiple":
                j = E;
              default:
                l.hasOwnProperty(r) || Je(e, t, r, null, l, E);
            }
        for (u in l)
          if (
            ((r = l[u]),
            (E = n[u]),
            l.hasOwnProperty(u) && (r != null || E != null))
          )
            switch (u) {
              case "value":
                H = r;
                break;
              case "defaultValue":
                g = r;
                break;
              case "multiple":
                f = r;
              default:
                r !== E && Je(e, t, u, r, l, E);
            }
        ((t = g),
          (n = f),
          (l = j),
          H != null
            ? Ta(e, !!n, H, !1)
            : !!l != !!n &&
              (t != null ? Ta(e, !!n, t, !0) : Ta(e, !!n, n ? [] : "", !1)));
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
        for (f in l)
          if (
            ((u = l[f]),
            (r = n[f]),
            l.hasOwnProperty(f) && (u != null || r != null))
          )
            switch (f) {
              case "value":
                H = u;
                break;
              case "defaultValue":
                j = u;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (u != null) throw Error(c(91));
                break;
              default:
                u !== r && Je(e, t, f, u, l, r);
            }
        Uf(e, H, j);
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
        for (V in l)
          if (
            ((H = l[V]),
            (j = n[V]),
            l.hasOwnProperty(V) && H !== j && (H != null || j != null))
          )
            switch (V) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (H != null) throw Error(c(137, t));
                break;
              default:
                Je(e, t, V, H, l, j);
            }
        return;
      default:
        if (vo(t)) {
          for (var Fe in n)
            ((H = n[Fe]),
              n.hasOwnProperty(Fe) &&
                H !== void 0 &&
                !l.hasOwnProperty(Fe) &&
                ls(e, t, Fe, void 0, l, H));
          for (F in l)
            ((H = l[F]),
              (j = n[F]),
              !l.hasOwnProperty(F) ||
                H === j ||
                (H === void 0 && j === void 0) ||
                ls(e, t, F, H, l, j));
          return;
        }
    }
    for (var z in n)
      ((H = n[z]),
        n.hasOwnProperty(z) &&
          H != null &&
          !l.hasOwnProperty(z) &&
          Je(e, t, z, null, l, H));
    for (ee in l)
      ((H = l[ee]),
        (j = n[ee]),
        !l.hasOwnProperty(ee) ||
          H === j ||
          (H == null && j == null) ||
          Je(e, t, ee, H, l, j));
  }
  function Bh(e) {
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
  function u0() {
    if (typeof performance.getEntriesByType == "function") {
      for (
        var e = 0, t = 0, n = performance.getEntriesByType("resource"), l = 0;
        l < n.length;
        l++
      ) {
        var u = n[l],
          r = u.transferSize,
          f = u.initiatorType,
          g = u.duration;
        if (r && g && Bh(f)) {
          for (f = 0, g = u.responseEnd, l += 1; l < n.length; l++) {
            var E = n[l],
              V = E.startTime;
            if (V > g) break;
            var F = E.transferSize,
              ee = E.initiatorType;
            F &&
              Bh(ee) &&
              ((E = E.responseEnd), (f += F * (E < g ? 1 : (g - V) / (E - V))));
          }
          if ((--l, (t += (8 * (r + f)) / (u.duration / 1e3)), e++, 10 < e))
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
  var as = null,
    is = null;
  function xr(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function Hh(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function qh(e, t) {
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
  function us(e, t) {
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
  var rs = null;
  function r0() {
    var e = window.event;
    return e && e.type === "popstate"
      ? e === rs
        ? !1
        : ((rs = e), !0)
      : ((rs = null), !1);
  }
  var Yh = typeof setTimeout == "function" ? setTimeout : void 0,
    o0 = typeof clearTimeout == "function" ? clearTimeout : void 0,
    jh = typeof Promise == "function" ? Promise : void 0,
    c0 =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof jh < "u"
          ? function (e) {
              return jh.resolve(null).then(e).catch(s0);
            }
          : Yh;
  function s0(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function Bl(e) {
    return e === "head";
  }
  function Gh(e, t) {
    var n = t,
      l = 0;
    do {
      var u = n.nextSibling;
      if ((e.removeChild(n), u && u.nodeType === 8))
        if (((n = u.data), n === "/$" || n === "/&")) {
          if (l === 0) {
            (e.removeChild(u), ni(t));
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
        else if (n === "html") Ii(e.ownerDocument.documentElement);
        else if (n === "head") {
          ((n = e.ownerDocument.head), Ii(n));
          for (var r = n.firstChild; r; ) {
            var f = r.nextSibling,
              g = r.nodeName;
            (r[vi] ||
              g === "SCRIPT" ||
              g === "STYLE" ||
              (g === "LINK" && r.rel.toLowerCase() === "stylesheet") ||
              n.removeChild(r),
              (r = f));
          }
        } else n === "body" && Ii(e.ownerDocument.body);
      n = u;
    } while (n);
    ni(t);
  }
  function Xh(e, t) {
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
  function os(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var n = t;
      switch (((t = t.nextSibling), n.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          (os(n), mo(n));
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
  function f0(e, t, n, l) {
    for (; e.nodeType === 1; ) {
      var u = n;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!l && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
      } else if (l) {
        if (!e[vi])
          switch (t) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (
                ((r = e.getAttribute("rel")),
                r === "stylesheet" && e.hasAttribute("data-precedence"))
              )
                break;
              if (
                r !== u.rel ||
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
                ((r = e.getAttribute("src")),
                (r !== (u.src == null ? null : u.src) ||
                  e.getAttribute("type") !== (u.type == null ? null : u.type) ||
                  e.getAttribute("crossorigin") !==
                    (u.crossOrigin == null ? null : u.crossOrigin)) &&
                  r &&
                  e.hasAttribute("async") &&
                  !e.hasAttribute("itemprop"))
              )
                break;
              return e;
            default:
              return e;
          }
      } else if (t === "input" && e.type === "hidden") {
        var r = u.name == null ? null : "" + u.name;
        if (u.type === "hidden" && e.getAttribute("name") === r) return e;
      } else return e;
      if (((e = pn(e.nextSibling)), e === null)) break;
    }
    return null;
  }
  function d0(e, t, n) {
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
  function kh(e, t) {
    for (; e.nodeType !== 8; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") &&
          !t) ||
        ((e = pn(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function cs(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function ss(e) {
    return (
      e.data === "$!" ||
      (e.data === "$?" && e.ownerDocument.readyState !== "loading")
    );
  }
  function m0(e, t) {
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
  var fs = null;
  function Qh(e) {
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
  function Zh(e) {
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
  function Kh(e, t, n) {
    switch (((t = xr(n)), e)) {
      case "html":
        if (((e = t.documentElement), !e)) throw Error(c(452));
        return e;
      case "head":
        if (((e = t.head), !e)) throw Error(c(453));
        return e;
      case "body":
        if (((e = t.body), !e)) throw Error(c(454));
        return e;
      default:
        throw Error(c(451));
    }
  }
  function Ii(e) {
    for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
    mo(e);
  }
  var bn = new Map(),
    Jh = new Set();
  function Tr(e) {
    return typeof e.getRootNode == "function"
      ? e.getRootNode()
      : e.nodeType === 9
        ? e
        : e.ownerDocument;
  }
  var ol = w.d;
  w.d = { f: h0, r: g0, D: y0, C: v0, L: p0, m: b0, X: E0, S: S0, M: A0 };
  function h0() {
    var e = ol.f(),
      t = gr();
    return e || t;
  }
  function g0(e) {
    var t = Ea(e);
    t !== null && t.tag === 5 && t.type === "form" ? fm(t) : ol.r(e);
  }
  var Ia = typeof document > "u" ? null : document;
  function Fh(e, t, n) {
    var l = Ia;
    if (l && typeof t == "string" && t) {
      var u = fn(t);
      ((u = 'link[rel="' + e + '"][href="' + u + '"]'),
        typeof n == "string" && (u += '[crossorigin="' + n + '"]'),
        Jh.has(u) ||
          (Jh.add(u),
          (e = { rel: e, crossOrigin: n, href: t }),
          l.querySelector(u) === null &&
            ((t = l.createElement("link")),
            Mt(t, "link", e),
            Et(t),
            l.head.appendChild(t))));
    }
  }
  function y0(e) {
    (ol.D(e), Fh("dns-prefetch", e, null));
  }
  function v0(e, t) {
    (ol.C(e, t), Fh("preconnect", e, t));
  }
  function p0(e, t, n) {
    ol.L(e, t, n);
    var l = Ia;
    if (l && e && t) {
      var u = 'link[rel="preload"][as="' + fn(t) + '"]';
      t === "image" && n && n.imageSrcSet
        ? ((u += '[imagesrcset="' + fn(n.imageSrcSet) + '"]'),
          typeof n.imageSizes == "string" &&
            (u += '[imagesizes="' + fn(n.imageSizes) + '"]'))
        : (u += '[href="' + fn(e) + '"]');
      var r = u;
      switch (t) {
        case "style":
          r = ei(e);
          break;
        case "script":
          r = ti(e);
      }
      bn.has(r) ||
        ((e = b(
          {
            rel: "preload",
            href: t === "image" && n && n.imageSrcSet ? void 0 : e,
            as: t,
          },
          n
        )),
        bn.set(r, e),
        l.querySelector(u) !== null ||
          (t === "style" && l.querySelector(eu(r))) ||
          (t === "script" && l.querySelector(tu(r))) ||
          ((t = l.createElement("link")),
          Mt(t, "link", e),
          Et(t),
          l.head.appendChild(t)));
    }
  }
  function b0(e, t) {
    ol.m(e, t);
    var n = Ia;
    if (n && e) {
      var l = t && typeof t.as == "string" ? t.as : "script",
        u =
          'link[rel="modulepreload"][as="' + fn(l) + '"][href="' + fn(e) + '"]',
        r = u;
      switch (l) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          r = ti(e);
      }
      if (
        !bn.has(r) &&
        ((e = b({ rel: "modulepreload", href: e }, t)),
        bn.set(r, e),
        n.querySelector(u) === null)
      ) {
        switch (l) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(tu(r))) return;
        }
        ((l = n.createElement("link")),
          Mt(l, "link", e),
          Et(l),
          n.head.appendChild(l));
      }
    }
  }
  function S0(e, t, n) {
    ol.S(e, t, n);
    var l = Ia;
    if (l && e) {
      var u = Aa(l).hoistableStyles,
        r = ei(e);
      t = t || "default";
      var f = u.get(r);
      if (!f) {
        var g = { loading: 0, preload: null };
        if ((f = l.querySelector(eu(r)))) g.loading = 5;
        else {
          ((e = b({ rel: "stylesheet", href: e, "data-precedence": t }, n)),
            (n = bn.get(r)) && ds(e, n));
          var E = (f = l.createElement("link"));
          (Et(E),
            Mt(E, "link", e),
            (E._p = new Promise(function (V, F) {
              ((E.onload = V), (E.onerror = F));
            })),
            E.addEventListener("load", function () {
              g.loading |= 1;
            }),
            E.addEventListener("error", function () {
              g.loading |= 2;
            }),
            (g.loading |= 4),
            _r(f, t, l));
        }
        ((f = { type: "stylesheet", instance: f, count: 1, state: g }),
          u.set(r, f));
      }
    }
  }
  function E0(e, t) {
    ol.X(e, t);
    var n = Ia;
    if (n && e) {
      var l = Aa(n).hoistableScripts,
        u = ti(e),
        r = l.get(u);
      r ||
        ((r = n.querySelector(tu(u))),
        r ||
          ((e = b({ src: e, async: !0 }, t)),
          (t = bn.get(u)) && ms(e, t),
          (r = n.createElement("script")),
          Et(r),
          Mt(r, "link", e),
          n.head.appendChild(r)),
        (r = { type: "script", instance: r, count: 1, state: null }),
        l.set(u, r));
    }
  }
  function A0(e, t) {
    ol.M(e, t);
    var n = Ia;
    if (n && e) {
      var l = Aa(n).hoistableScripts,
        u = ti(e),
        r = l.get(u);
      r ||
        ((r = n.querySelector(tu(u))),
        r ||
          ((e = b({ src: e, async: !0, type: "module" }, t)),
          (t = bn.get(u)) && ms(e, t),
          (r = n.createElement("script")),
          Et(r),
          Mt(r, "link", e),
          n.head.appendChild(r)),
        (r = { type: "script", instance: r, count: 1, state: null }),
        l.set(u, r));
    }
  }
  function $h(e, t, n, l) {
    var u = (u = Y.current) ? Tr(u) : null;
    if (!u) throw Error(c(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string"
          ? ((t = ei(n.href)),
            (n = Aa(u).hoistableStyles),
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
          e = ei(n.href);
          var r = Aa(u).hoistableStyles,
            f = r.get(e);
          if (
            (f ||
              ((u = u.ownerDocument || u),
              (f = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              r.set(e, f),
              (r = u.querySelector(eu(e))) &&
                !r._p &&
                ((f.instance = r), (f.state.loading = 5)),
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
                r || x0(u, e, n, f.state))),
            t && l === null)
          )
            throw Error(c(528, ""));
          return f;
        }
        if (t && l !== null) throw Error(c(529, ""));
        return null;
      case "script":
        return (
          (t = n.async),
          (n = n.src),
          typeof n == "string" &&
          t &&
          typeof t != "function" &&
          typeof t != "symbol"
            ? ((t = ti(n)),
              (n = Aa(u).hoistableScripts),
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
        throw Error(c(444, e));
    }
  }
  function ei(e) {
    return 'href="' + fn(e) + '"';
  }
  function eu(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function Wh(e) {
    return b({}, e, { "data-precedence": e.precedence, precedence: null });
  }
  function x0(e, t, n, l) {
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
        Mt(t, "link", n),
        Et(t),
        e.head.appendChild(t));
  }
  function ti(e) {
    return '[src="' + fn(e) + '"]';
  }
  function tu(e) {
    return "script[async]" + e;
  }
  function Ph(e, t, n) {
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
            Mt(l, "style", u),
            _r(l, n.precedence, e),
            (t.instance = l)
          );
        case "stylesheet":
          u = ei(n.href);
          var r = e.querySelector(eu(u));
          if (r) return ((t.state.loading |= 4), (t.instance = r), Et(r), r);
          ((l = Wh(n)),
            (u = bn.get(u)) && ds(l, u),
            (r = (e.ownerDocument || e).createElement("link")),
            Et(r));
          var f = r;
          return (
            (f._p = new Promise(function (g, E) {
              ((f.onload = g), (f.onerror = E));
            })),
            Mt(r, "link", l),
            (t.state.loading |= 4),
            _r(r, n.precedence, e),
            (t.instance = r)
          );
        case "script":
          return (
            (r = ti(n.src)),
            (u = e.querySelector(tu(r)))
              ? ((t.instance = u), Et(u), u)
              : ((l = n),
                (u = bn.get(r)) && ((l = b({}, n)), ms(l, u)),
                (e = e.ownerDocument || e),
                (u = e.createElement("script")),
                Et(u),
                Mt(u, "link", l),
                e.head.appendChild(u),
                (t.instance = u))
          );
        case "void":
          return null;
        default:
          throw Error(c(443, t.type));
      }
    else
      t.type === "stylesheet" &&
        (t.state.loading & 4) === 0 &&
        ((l = t.instance), (t.state.loading |= 4), _r(l, n.precedence, e));
    return t.instance;
  }
  function _r(e, t, n) {
    for (
      var l = n.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]'
        ),
        u = l.length ? l[l.length - 1] : null,
        r = u,
        f = 0;
      f < l.length;
      f++
    ) {
      var g = l[f];
      if (g.dataset.precedence === t) r = g;
      else if (r !== u) break;
    }
    r
      ? r.parentNode.insertBefore(e, r.nextSibling)
      : ((t = n.nodeType === 9 ? n.head : n), t.insertBefore(e, t.firstChild));
  }
  function ds(e, t) {
    (e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.title == null && (e.title = t.title));
  }
  function ms(e, t) {
    (e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.integrity == null && (e.integrity = t.integrity));
  }
  var Rr = null;
  function Ih(e, t, n) {
    if (Rr === null) {
      var l = new Map(),
        u = (Rr = new Map());
      u.set(n, l);
    } else ((u = Rr), (l = u.get(n)), l || ((l = new Map()), u.set(n, l)));
    if (l.has(e)) return l;
    for (
      l.set(e, null), n = n.getElementsByTagName(e), u = 0;
      u < n.length;
      u++
    ) {
      var r = n[u];
      if (
        !(
          r[vi] ||
          r[xt] ||
          (e === "link" && r.getAttribute("rel") === "stylesheet")
        ) &&
        r.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var f = r.getAttribute(t) || "";
        f = e + f;
        var g = l.get(f);
        g ? g.push(r) : l.set(f, [r]);
      }
    }
    return l;
  }
  function eg(e, t, n) {
    ((e = e.ownerDocument || e),
      e.head.insertBefore(
        n,
        t === "title" ? e.querySelector("head > title") : null
      ));
  }
  function T0(e, t, n) {
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
  function tg(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function _0(e, t, n, l) {
    if (
      n.type === "stylesheet" &&
      (typeof l.media != "string" || matchMedia(l.media).matches !== !1) &&
      (n.state.loading & 4) === 0
    ) {
      if (n.instance === null) {
        var u = ei(l.href),
          r = t.querySelector(eu(u));
        if (r) {
          ((t = r._p),
            t !== null &&
              typeof t == "object" &&
              typeof t.then == "function" &&
              (e.count++, (e = Mr.bind(e)), t.then(e, e)),
            (n.state.loading |= 4),
            (n.instance = r),
            Et(r));
          return;
        }
        ((r = t.ownerDocument || t),
          (l = Wh(l)),
          (u = bn.get(u)) && ds(l, u),
          (r = r.createElement("link")),
          Et(r));
        var f = r;
        ((f._p = new Promise(function (g, E) {
          ((f.onload = g), (f.onerror = E));
        })),
          Mt(r, "link", l),
          (n.instance = r));
      }
      (e.stylesheets === null && (e.stylesheets = new Map()),
        e.stylesheets.set(n, t),
        (t = n.state.preload) &&
          (n.state.loading & 3) === 0 &&
          (e.count++,
          (n = Mr.bind(e)),
          t.addEventListener("load", n),
          t.addEventListener("error", n)));
    }
  }
  var hs = 0;
  function R0(e, t) {
    return (
      e.stylesheets && e.count === 0 && Or(e, e.stylesheets),
      0 < e.count || 0 < e.imgCount
        ? function (n) {
            var l = setTimeout(function () {
              if ((e.stylesheets && Or(e, e.stylesheets), e.unsuspend)) {
                var r = e.unsuspend;
                ((e.unsuspend = null), r());
              }
            }, 6e4 + t);
            0 < e.imgBytes && hs === 0 && (hs = 62500 * u0());
            var u = setTimeout(
              function () {
                if (
                  ((e.waitingForImages = !1),
                  e.count === 0 &&
                    (e.stylesheets && Or(e, e.stylesheets), e.unsuspend))
                ) {
                  var r = e.unsuspend;
                  ((e.unsuspend = null), r());
                }
              },
              (e.imgBytes > hs ? 50 : 800) + t
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
  function Mr() {
    if (
      (this.count--,
      this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))
    ) {
      if (this.stylesheets) Or(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        ((this.unsuspend = null), e());
      }
    }
  }
  var Cr = null;
  function Or(e, t) {
    ((e.stylesheets = null),
      e.unsuspend !== null &&
        (e.count++,
        (Cr = new Map()),
        t.forEach(M0, e),
        (Cr = null),
        Mr.call(e)));
  }
  function M0(e, t) {
    if (!(t.state.loading & 4)) {
      var n = Cr.get(e);
      if (n) var l = n.get(null);
      else {
        ((n = new Map()), Cr.set(e, n));
        for (
          var u = e.querySelectorAll(
              "link[data-precedence],style[data-precedence]"
            ),
            r = 0;
          r < u.length;
          r++
        ) {
          var f = u[r];
          (f.nodeName === "LINK" || f.getAttribute("media") !== "not all") &&
            (n.set(f.dataset.precedence, f), (l = f));
        }
        l && n.set(null, l);
      }
      ((u = t.instance),
        (f = u.getAttribute("data-precedence")),
        (r = n.get(f) || l),
        r === l && n.set(null, u),
        n.set(f, u),
        this.count++,
        (l = Mr.bind(this)),
        u.addEventListener("load", l),
        u.addEventListener("error", l),
        r
          ? r.parentNode.insertBefore(u, r.nextSibling)
          : ((e = e.nodeType === 9 ? e.head : e),
            e.insertBefore(u, e.firstChild)),
        (t.state.loading |= 4));
    }
  }
  var nu = {
    $$typeof: q,
    Provider: null,
    Consumer: null,
    _currentValue: C,
    _currentValue2: C,
    _threadCount: 0,
  };
  function C0(e, t, n, l, u, r, f, g, E) {
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
      (this.expirationTimes = hi(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = hi(0)),
      (this.hiddenUpdates = hi(null)),
      (this.identifierPrefix = l),
      (this.onUncaughtError = u),
      (this.onCaughtError = r),
      (this.onRecoverableError = f),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = E),
      (this.incompleteTransitions = new Map()));
  }
  function ng(e, t, n, l, u, r, f, g, E, V, F, ee) {
    return (
      (e = new C0(e, t, n, f, E, V, F, ee, g)),
      (t = 1),
      r === !0 && (t |= 24),
      (r = Wt(3, null, null, t)),
      (e.current = r),
      (r.stateNode = e),
      (t = Ko()),
      t.refCount++,
      (e.pooledCache = t),
      t.refCount++,
      (r.memoizedState = { element: l, isDehydrated: n, cache: t }),
      Wo(r),
      e
    );
  }
  function lg(e) {
    return e ? ((e = Da), e) : Da;
  }
  function ag(e, t, n, l, u, r) {
    ((u = lg(u)),
      l.context === null ? (l.context = u) : (l.pendingContext = u),
      (l = Rl(t)),
      (l.payload = { element: n }),
      (r = r === void 0 ? null : r),
      r !== null && (l.callback = r),
      (n = Ml(e, l, t)),
      n !== null && (Gt(n, e, t), Ni(n, e, t)));
  }
  function ig(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function gs(e, t) {
    (ig(e, t), (e = e.alternate) && ig(e, t));
  }
  function ug(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = ea(e, 67108864);
      (t !== null && Gt(t, e, 67108864), gs(e, 67108864));
    }
  }
  function rg(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = nn();
      t = gi(t);
      var n = ea(e, t);
      (n !== null && Gt(n, e, t), gs(e, t));
    }
  }
  var wr = !0;
  function O0(e, t, n, l) {
    var u = R.T;
    R.T = null;
    var r = w.p;
    try {
      ((w.p = 2), ys(e, t, n, l));
    } finally {
      ((w.p = r), (R.T = u));
    }
  }
  function w0(e, t, n, l) {
    var u = R.T;
    R.T = null;
    var r = w.p;
    try {
      ((w.p = 8), ys(e, t, n, l));
    } finally {
      ((w.p = r), (R.T = u));
    }
  }
  function ys(e, t, n, l) {
    if (wr) {
      var u = vs(l);
      if (u === null) (ns(e, t, l, zr, n), cg(e, l));
      else if (D0(u, e, t, n, l)) l.stopPropagation();
      else if ((cg(e, l), t & 4 && -1 < z0.indexOf(e))) {
        for (; u !== null; ) {
          var r = Ea(u);
          if (r !== null)
            switch (r.tag) {
              case 3:
                if (((r = r.stateNode), r.current.memoizedState.isDehydrated)) {
                  var f = _n(r.pendingLanes);
                  if (f !== 0) {
                    var g = r;
                    for (g.pendingLanes |= 2, g.entangledLanes |= 2; f; ) {
                      var E = 1 << (31 - ze(f));
                      ((g.entanglements[1] |= E), (f &= ~E));
                    }
                    (Ln(r), (Xe & 6) === 0 && ((mr = ie() + 500), $i(0)));
                  }
                }
                break;
              case 31:
              case 13:
                ((g = ea(r, 2)), g !== null && Gt(g, r, 2), gr(), gs(r, 2));
            }
          if (((r = vs(l)), r === null && ns(e, t, l, zr, n), r === u)) break;
          u = r;
        }
        u !== null && l.stopPropagation();
      } else ns(e, t, l, null, n);
    }
  }
  function vs(e) {
    return ((e = bo(e)), ps(e));
  }
  var zr = null;
  function ps(e) {
    if (((zr = null), (e = Sa(e)), e !== null)) {
      var t = d(e);
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
    return ((zr = e), null);
  }
  function og(e) {
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
          case Le:
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
  var bs = !1,
    Hl = null,
    ql = null,
    Yl = null,
    lu = new Map(),
    au = new Map(),
    jl = [],
    z0 =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " "
      );
  function cg(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Hl = null;
        break;
      case "dragenter":
      case "dragleave":
        ql = null;
        break;
      case "mouseover":
      case "mouseout":
        Yl = null;
        break;
      case "pointerover":
      case "pointerout":
        lu.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        au.delete(t.pointerId);
    }
  }
  function iu(e, t, n, l, u, r) {
    return e === null || e.nativeEvent !== r
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: l,
          nativeEvent: r,
          targetContainers: [u],
        }),
        t !== null && ((t = Ea(t)), t !== null && ug(t)),
        e)
      : ((e.eventSystemFlags |= l),
        (t = e.targetContainers),
        u !== null && t.indexOf(u) === -1 && t.push(u),
        e);
  }
  function D0(e, t, n, l, u) {
    switch (t) {
      case "focusin":
        return ((Hl = iu(Hl, e, t, n, l, u)), !0);
      case "dragenter":
        return ((ql = iu(ql, e, t, n, l, u)), !0);
      case "mouseover":
        return ((Yl = iu(Yl, e, t, n, l, u)), !0);
      case "pointerover":
        var r = u.pointerId;
        return (lu.set(r, iu(lu.get(r) || null, e, t, n, l, u)), !0);
      case "gotpointercapture":
        return (
          (r = u.pointerId),
          au.set(r, iu(au.get(r) || null, e, t, n, l, u)),
          !0
        );
    }
    return !1;
  }
  function sg(e) {
    var t = Sa(e.target);
    if (t !== null) {
      var n = d(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = m(n)), t !== null)) {
            ((e.blockedOn = t),
              Tf(e.priority, function () {
                rg(n);
              }));
            return;
          }
        } else if (t === 31) {
          if (((t = h(n)), t !== null)) {
            ((e.blockedOn = t),
              Tf(e.priority, function () {
                rg(n);
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
  function Dr(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = vs(e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var l = new n.constructor(n.type, n);
        ((po = l), n.target.dispatchEvent(l), (po = null));
      } else return ((t = Ea(n)), t !== null && ug(t), (e.blockedOn = n), !1);
      t.shift();
    }
    return !0;
  }
  function fg(e, t, n) {
    Dr(e) && n.delete(t);
  }
  function U0() {
    ((bs = !1),
      Hl !== null && Dr(Hl) && (Hl = null),
      ql !== null && Dr(ql) && (ql = null),
      Yl !== null && Dr(Yl) && (Yl = null),
      lu.forEach(fg),
      au.forEach(fg));
  }
  function Ur(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      bs ||
        ((bs = !0),
        a.unstable_scheduleCallback(a.unstable_NormalPriority, U0)));
  }
  var Nr = null;
  function dg(e) {
    Nr !== e &&
      ((Nr = e),
      a.unstable_scheduleCallback(a.unstable_NormalPriority, function () {
        Nr === e && (Nr = null);
        for (var t = 0; t < e.length; t += 3) {
          var n = e[t],
            l = e[t + 1],
            u = e[t + 2];
          if (typeof l != "function") {
            if (ps(l || n) === null) continue;
            break;
          }
          var r = Ea(n);
          r !== null &&
            (e.splice(t, 3),
            (t -= 3),
            vc(r, { pending: !0, data: u, method: n.method, action: l }, l, u));
        }
      }));
  }
  function ni(e) {
    function t(E) {
      return Ur(E, e);
    }
    (Hl !== null && Ur(Hl, e),
      ql !== null && Ur(ql, e),
      Yl !== null && Ur(Yl, e),
      lu.forEach(t),
      au.forEach(t));
    for (var n = 0; n < jl.length; n++) {
      var l = jl[n];
      l.blockedOn === e && (l.blockedOn = null);
    }
    for (; 0 < jl.length && ((n = jl[0]), n.blockedOn === null); )
      (sg(n), n.blockedOn === null && jl.shift());
    if (((n = (e.ownerDocument || e).$$reactFormReplay), n != null))
      for (l = 0; l < n.length; l += 3) {
        var u = n[l],
          r = n[l + 1],
          f = u[Lt] || null;
        if (typeof r == "function") f || dg(n);
        else if (f) {
          var g = null;
          if (r && r.hasAttribute("formAction")) {
            if (((u = r), (f = r[Lt] || null))) g = f.formAction;
            else if (ps(u) !== null) continue;
          } else g = f.action;
          (typeof g == "function" ? (n[l + 1] = g) : (n.splice(l, 3), (l -= 3)),
            dg(n));
        }
      }
  }
  function mg() {
    function e(r) {
      r.canIntercept &&
        r.info === "react-transition" &&
        r.intercept({
          handler: function () {
            return new Promise(function (f) {
              return (u = f);
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
        var r = navigation.currentEntry;
        r &&
          r.url != null &&
          navigation.navigate(r.url, {
            state: r.getState(),
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
  function Ss(e) {
    this._internalRoot = e;
  }
  ((Vr.prototype.render = Ss.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(c(409));
      var n = t.current,
        l = nn();
      ag(n, l, e, t, null, null);
    }),
    (Vr.prototype.unmount = Ss.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          (ag(e.current, 2, null, e, null, null), gr(), (t[ba] = null));
        }
      }));
  function Vr(e) {
    this._internalRoot = e;
  }
  Vr.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = Tu();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < jl.length && t !== 0 && t < jl[n].priority; n++);
      (jl.splice(n, 0, e), n === 0 && sg(e));
    }
  };
  var hg = i.version;
  if (hg !== "19.2.0") throw Error(c(527, hg, "19.2.0"));
  w.findDOMNode = function (e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function"
        ? Error(c(188))
        : ((e = Object.keys(e).join(",")), Error(c(268, e)));
    return (
      (e = y(t)),
      (e = e !== null ? p(e) : null),
      (e = e === null ? null : e.stateNode),
      e
    );
  };
  var N0 = {
    bundleType: 0,
    version: "19.2.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: R,
    reconcilerVersion: "19.2.0",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Lr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Lr.isDisabled && Lr.supportsFiber)
      try {
        ((cn = Lr.inject(N0)), (ct = Lr));
      } catch {}
  }
  return (
    (su.createRoot = function (e, t) {
      if (!s(e)) throw Error(c(299));
      var n = !1,
        l = "",
        u = Em,
        r = Am,
        f = xm;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (l = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (u = t.onUncaughtError),
          t.onCaughtError !== void 0 && (r = t.onCaughtError),
          t.onRecoverableError !== void 0 && (f = t.onRecoverableError)),
        (t = ng(e, 1, !1, null, null, n, l, null, u, r, f, mg)),
        (e[ba] = t.current),
        ts(e),
        new Ss(t)
      );
    }),
    (su.hydrateRoot = function (e, t, n) {
      if (!s(e)) throw Error(c(299));
      var l = !1,
        u = "",
        r = Em,
        f = Am,
        g = xm,
        E = null;
      return (
        n != null &&
          (n.unstable_strictMode === !0 && (l = !0),
          n.identifierPrefix !== void 0 && (u = n.identifierPrefix),
          n.onUncaughtError !== void 0 && (r = n.onUncaughtError),
          n.onCaughtError !== void 0 && (f = n.onCaughtError),
          n.onRecoverableError !== void 0 && (g = n.onRecoverableError),
          n.formState !== void 0 && (E = n.formState)),
        (t = ng(e, 1, !0, t, n ?? null, l, u, E, r, f, g, mg)),
        (t.context = lg(null)),
        (n = t.current),
        (l = nn()),
        (l = gi(l)),
        (u = Rl(l)),
        (u.callback = null),
        Ml(n, u, l),
        (n = l),
        (t.current.lanes = n),
        kn(t, n),
        Ln(t),
        (e[ba] = t.current),
        ts(e),
        new Vr(t)
      );
    }),
    (su.version = "19.2.0"),
    su
  );
}
var hy;
function sA() {
  if (hy) return Ns.exports;
  hy = 1;
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
  return (a(), (Ns.exports = cA()), Ns.exports);
}
var BA = sA();
function HA() {
  return new Oy().getContext("screen")?.name ?? null;
}
export {
  pA as A,
  DA as C,
  VA as E,
  SA as F,
  xA as T,
  dA as a,
  ks as b,
  j0 as c,
  bA as d,
  EA as e,
  AA as f,
  zA as g,
  VE as h,
  NA as i,
  Dn as j,
  TA as k,
  _A as l,
  RA as m,
  MA as n,
  CA as o,
  OA as p,
  LA as q,
  M as r,
  wA as s,
  fA as t,
  bf as u,
  UA as v,
  HA as w,
  BA as x,
};
//# sourceMappingURL=vendor.CtTIV4rL.js.map

/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [29456],
    {
      94381: (te, se, a) => {
        "use strict";
        a.d(se, { S: () => ce });
        var t = a(7850),
          L = a(68031),
          j = a(31857);
        function O(b) {
          return (0, t.jsx)(j.I, {
            ...b,
            viewBox: 16,
            children: (0, t.jsx)("path", {
              d: "M13.8182 1.94629L5.77816 9.98184L2.40483 6.61296L0.835938 8.18184L5.77816 13.1285L15.387 3.51518L13.8182 1.94629Z",
              fill: "currentColor",
            }),
          });
        }
        var E = a(21895),
          f = a(64238),
          w = a.n(f),
          $ = a(80549);
        function ce(b) {
          const {
              checked: U,
              onChange: T,
              disabled: G,
              children: B,
              ref: q,
              variant: K,
              color: v,
              align: i = "center",
              icon: S,
              ...d
            } = b,
            n = U === "indeterminate",
            s = S ?? (n ? A : O),
            o = () => {
              G || (T && T(n ? !0 : !U));
            },
            l = (x) => {
              G ||
                (x.key === " " &&
                  (o(), x.preventDefault(), x.stopPropagation()));
            },
            m = (0, $.f)("Checkbox", K);
          return (0, t.jsxs)(L.s, {
            align: i,
            ref: q,
            role: "checkbox",
            "aria-checked": n ? "mixed" : U,
            "data-state": X(U),
            className: w()(E.Root, E[`Variant-${m}`], G && E.Disabled),
            onClick: o,
            tabIndex: 0,
            onKeyDown: l,
            cursor: "default",
            "aria-disabled": G,
            "data-accent-color": v,
            ...d,
            children: [
              (0, t.jsx)("div", {
                className: E.Checkbox,
                children: U && (0, t.jsx)(s, { className: E.Icon }),
              }),
              B,
            ],
          });
        }
        function X(b) {
          return b === "indeterminate" ? b : b ? "checked" : "unchecked";
        }
        function A(b) {
          return (0, t.jsx)("svg", {
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, t.jsx)("path", {
              d: "M14.6663 7.11133H1.33301V9.33355H14.6663V7.11133Z",
              fill: "currentColor",
            }),
          });
        }
      },
      86946: (te, se, a) => {
        "use strict";
        a.d(se, { j: () => X, w: () => A });
        var t = a(7850),
          L = a(64238),
          j = a.n(L),
          O = a(38878),
          E = a.n(O),
          f = a(60351),
          w = a(68031),
          $ = a(8928),
          ce = a(69289);
        function X(b) {
          const {
              children: U,
              beforeContent: T,
              afterContent: G,
              hasValue: B,
              ...q
            } = b,
            K = A(q);
          return (0, t.jsxs)(w.s, {
            ...K,
            align: "center",
            "data-has-value": !!B,
            minWidth: "0",
            children: [
              T && (0, t.jsx)(w.s, { paddingRight: "2", children: T }),
              (0, t.jsx)(f.az, { flexGrow: "1", minWidth: "0", children: U }),
              G && (0, t.jsx)(w.s, { paddingLeft: "2", children: G }),
            ],
          });
        }
        function A(b) {
          const {
              variant: U = "basic",
              size: T = "2",
              radius: G,
              focusable: B = !0,
              hoverable: q = !0,
              clickable: K = !0,
              disabled: v,
              className: i,
              status: S,
              color: d,
              ...n
            } = b,
            s = U === "underline" ? "none" : G;
          return (0, ce.mz)(
            {
              ...n,
              radius: s,
              "data-status": S,
              "data-dull-color": d && d !== "dull" ? d : void 0,
              className: j()(
                O.ControlBox,
                B && !v && O.Focusable,
                q && !v && O.Hoverable,
                K && !v && O.Clickable,
                v && O.Disabled,
                O[`Variant-${U}`],
                O[`Size-${T}`],
                i,
              ),
            },
            $.h,
          );
        }
      },
      84909: (te, se, a) => {
        "use strict";
        a.d(se, { AM: () => l, Pr: () => s });
        var t = a(7850),
          L = a(90626),
          j = a(73788),
          O = a(8083),
          E = a(94621),
          f = a(18938),
          w = a(24660),
          $ = a(38566),
          ce = a(54130),
          X = a(71742),
          A = a(64238),
          b = a.n(A),
          U = a(3877),
          T = a(3166),
          G = a(28020);
        const B = (0, L.createContext)(null);
        function q(m) {
          const { children: x, ...p } = m,
            _ = n(p);
          return (0, t.jsx)(B.Provider, { value: _, children: x });
        }
        function K(m) {
          const { children: x } = m,
            p = L.Children.only(x),
            _ = (0, L.useContext)(B);
          return p
            ? _
              ? (0, L.cloneElement)(p, {
                  ..._.getReferenceProps(p.props),
                  ref: (0, f.XB)(p.props.ref, _.floating.refs.setReference),
                })
              : (console.error(
                  "<PopoverAnchor> must be a child of <PopoverRoot>.",
                ),
                null)
            : null;
        }
        function v(m) {
          const { children: x, className: p, ref: _, label: D } = m,
            P = (0, L.useContext)(B),
            y = (0, j.SV)([_, P?.floating.refs.setFloating]);
          if (!P)
            return (
              console.error(
                "<Popover.Positioner> must be a child of <Popover.Root>.",
              ),
              null
            );
          if (!P.open) return null;
          let k = L.Children.only(x),
            V = L.Fragment;
          return (
            k.type == l.FocusManager &&
              ((k = L.Children.only(k.props.children)), (V = i)),
            (0, t.jsx)(V, {
              children: (0, t.jsx)(G.HF, {
                presentation: P.presentation,
                sizing: P.sizing,
                floatingRef: y,
                floatingProps: P.getFloatingProps(),
                floatingStyles: P.floating.floatingStyles,
                referenceElement: P.floating.elements.domReference,
                className: b()((0, U.T)(), p),
                label: D,
                children: k,
              }),
            })
          );
        }
        function i(m) {
          return (0, T.Qn)()
            ? (0, t.jsx)(S, { ...m })
            : (0, t.jsx)(d, { ...m });
        }
        function S(m) {
          const { children: x } = m,
            p = (0, L.useContext)(B);
          (0, X.wT)(
            !!p,
            "<Popover.Positioner> must be a child of <Popover.Root>.",
          );
          const _ = () => p.floating.context.onOpenChange(!1),
            D = L.useRef(void 0);
          return (
            (0, w.O7)(D, !0, !0),
            (0, t.jsx)($.D6, {
              navID: "Popover",
              onCancelButton: _,
              modal: !0,
              navTreeRef: D,
              children: (0, t.jsx)("div", {
                style: { display: "contents" },
                children: (0, t.jsx)(ce.q, { children: x }),
              }),
            })
          );
        }
        function d(m) {
          const { children: x } = m,
            p = (0, L.useContext)(B);
          return (
            (0, X.wT)(
              !!p,
              "<Popover.Positioner> must be a child of <Popover.Root>.",
            ),
            (0, t.jsx)(j.s3, {
              context: p.floating.context,
              initialFocus: -1,
              returnFocus: !1,
              children: x,
            })
          );
        }
        function n(m) {
          const {
            open: x,
            interactions: p = {},
            width: _,
            maxHeight: D,
            gutter: P,
            scroll: y,
          } = m;
          let k = x;
          const V = (0, G.Pr)(m.presentation),
            W = s(m, k, V),
            Z = { enabled: !!p.click },
            F = typeof p.click == "function" ? p.click(Z) : Z,
            N = (0, j.kp)(W.context, F),
            u = { enabled: !!p.focus },
            he = typeof p.focus == "function" ? p.focus(u) : u,
            ve = (0, j.iQ)(W.context, he),
            xe = { handleClose: (0, j.iB)() },
            Me = typeof p.hover == "function" ? p.hover(xe) : xe,
            I = (0, j.Mk)(W.context, { enabled: !!p.hover, ...Me }),
            R = (0, j.s9)(W.context),
            { getFloatingProps: J, getReferenceProps: H } = (0, j.bv)([
              N,
              ve,
              I,
              R,
            ]);
          return {
            floating: W,
            getFloatingProps: J,
            getReferenceProps: H,
            open: k,
            presentation: V,
            sizing: { width: _, maxHeight: D, gutter: P, scroll: y },
          };
        }
        function s(m, x, p) {
          const { onOpenChange: _, placement: D } = m,
            P = p === "anchor";
          return (0, j.we)({
            open: x,
            onOpenChange: _,
            middleware: P ? o(m) : [],
            whileElementsMounted: P ? O.ll : void 0,
            placement: D && typeof D == "object" ? D.initial : D,
            strategy: "fixed",
            platform: {
              ...O.iD,
              getOffsetParent: (y) => y?.ownerDocument?.defaultView ?? window,
            },
          });
        }
        function o(m) {
          const { gutter: x = 0, placement: p } = m,
            _ = [],
            D = p && typeof p == "object";
          return (
            D && p.offset
              ? _.push((0, E.cY)(p.offset))
              : (!D || p.offset === void 0) && _.push((0, E.cY)(2)),
            D && p.flip
              ? _.push((0, E.UU)(p.flip))
              : (!D || p.flip === void 0) && _.push((0, E.UU)()),
            D && p.shift
              ? _.push((0, E.BN)(p.shift))
              : (!D || p.shift === void 0) && _.push((0, E.BN)()),
            _.push(
              (0, E.Ej)({
                apply: (P) => {
                  const { rects: y, elements: k, availableHeight: V } = P,
                    W = {
                      boxSizing: "border-box",
                      zIndex: "1",
                      "-webkit-app-region": "no-drag",
                    };
                  switch ((m.scroll && (W.overflowY = "auto"), m.width)) {
                    case "target": {
                      W.width = `${y.reference.width}px`;
                      break;
                    }
                    case "content": {
                      W.width = `${y.floating.width}px`;
                      break;
                    }
                    case "dropdown": {
                      let F = y.reference.width;
                      y.floating.width > F && F < 200 && (F = y.floating.width),
                        (W.width = `${F}px`);
                    }
                  }
                  typeof m.width == "function" &&
                    (W.width = m.width({
                      unContentWidth: y.floating.width,
                      unTargetWidth: y.reference.width,
                    }));
                  const Z =
                    typeof x == "number" ? `${x}px` : `var(--spacing-${x})`;
                  typeof m.maxHeight == "function"
                    ? (W.maxHeight = m.maxHeight({
                        unAvailableHeight: V,
                        gutter: Z,
                      }))
                    : typeof m.maxHeight == "number"
                      ? (W.maxHeight = `min( calc( ${V}px - ${Z} ), ${m.maxHeight}px )`)
                      : typeof x == "number"
                        ? (W.maxHeight = `${V - x}px`)
                        : (W.maxHeight = `calc( ${V}px - var(--spacing-${x}) )`),
                    Object.assign(k.floating.style, W),
                    k.floating.style.setProperty(
                      "--popover-max-height",
                      W.maxHeight,
                    );
                },
              }),
            ),
            _
          );
        }
        const l = { Root: q, Anchor: K, Positioner: v, FocusManager: i };
      },
      21663: (te, se, a) => {
        "use strict";
        a.d(se, { I: () => G });
        var t = a(7850),
          L = a(90626),
          j = a(86946),
          O = a(60351),
          E = a(71742),
          f = a(64238),
          w = a.n(f),
          $ = a(53011),
          ce = a.n($),
          X = a(68031),
          A = a(80549);
        const b = (0, L.createContext)(null);
        function U(K) {
          const {
              variant: v,
              radius: i,
              size: S,
              status: d,
              color: n,
              children: s,
              value: o,
              onValueChange: l,
            } = K,
            [m, x] = (0, L.useState)({}),
            p = (0, L.useCallback)((k, V) => x((W) => ({ ...W, [V]: k })), []),
            _ = (0, L.useCallback)(
              (k, V) =>
                x((W) => {
                  const Z = { ...W };
                  return Z[V] === k && delete Z[V], Z;
                }),
              [],
            ),
            D = (k) => {
              let V = 0;
              switch (k.key) {
                case " ":
                case "Enter":
                case "ArrowRight":
                  V = 1;
                  break;
                case "ArrowLeft":
                  V = -1;
                  break;
              }
              if (V) {
                const W = Array.from(Object.values(m)).sort(q);
                let Z;
                if (o === null) Z = V > 0 ? 0 : W.length - 1;
                else {
                  const u = m[o],
                    he = W.findIndex((ve) => ve === u);
                  (0, E.wT)(
                    typeof he == "number",
                    "Could not find current segmented value position",
                  ),
                    (Z = he + V);
                }
                const F = W[Z < 0 ? W.length + Z : Z % W.length],
                  N = Object.keys(m).find((u) => m[u] === F);
                typeof N != "string"
                  ? console.error("Could not find next segmeneted value")
                  : (l(N), k.stopPropagation(), k.preventDefault());
              }
            },
            P = (0, A.f)("SegmentedControl", v),
            y = (0, L.useMemo)(
              () => ({
                value: o,
                onValueChange: l,
                register: p,
                unregister: _,
                radius: i,
                size: S,
              }),
              [o, l, p, _, i, S],
            );
          return (0, t.jsx)(j.j, {
            clickable: !1,
            hoverable: !1,
            focusable: !1,
            variant: P,
            radius: i,
            size: S,
            status: d,
            className: w()($.SegmentedControlBox, $[`Variant-${P}`]),
            tabIndex: 0,
            onKeyDown: D,
            children: (0, t.jsx)(b.Provider, {
              value: y,
              children: (0, t.jsxs)(O.az, {
                className: $.SegmentedControl,
                style: { "--outer-radius": `var(--radius-${i})` },
                children: [
                  s,
                  o !== null && (0, t.jsx)(B, { radius: i, color: n }),
                ],
              }),
            }),
          });
        }
        function T(K) {
          const { value: v, children: i, disabled: S } = K,
            d = (0, L.useContext)(b),
            [n, s] = (0, L.useState)(),
            { register: o, unregister: l } = d || {};
          if (
            ((0, L.useEffect)(
              () => (!n || !o || !l ? () => {} : (o(n, v), () => l(n, v))),
              [o, l, v, n],
            ),
            !d)
          )
            return null;
          const { value: m, onValueChange: x, radius: p, size: _ } = d,
            D = v === m,
            P = (k) => {
              k.stopPropagation(), k.preventDefault(), !(D || S) && x(v);
            },
            y = i === void 0 ? v : i;
          return (0, t.jsx)(X.s, {
            justify: "center",
            align: "center",
            ref: s,
            onClick: P,
            "data-selected": D ? "true" : "false",
            className: w()($.Item, _ && $[`Size-${_}`], S ? $.disabled : ""),
            children: y,
          });
        }
        function G(K) {
          const { options: v, getOptionLabel: i = (d) => d, ...S } = K;
          return (0, t.jsx)(G.Root, {
            ...S,
            children: v.map((d) =>
              (0, t.jsx)(G.Item, { value: d, children: i(d) }, d),
            ),
          });
        }
        (G.Item = T), (G.Root = U);
        function B(K) {
          const { radius: v, color: i } = K;
          return (0, t.jsx)(O.az, {
            className: $.IndicatorPosition,
            children: (0, t.jsx)("div", {
              className: $.Indicator,
              "data-accent-color": i,
            }),
          });
        }
        function q(K, v) {
          const i = K.compareDocumentPosition(v);
          return i & Node.DOCUMENT_POSITION_FOLLOWING
            ? -1
            : i & Node.DOCUMENT_POSITION_PRECEDING
              ? 1
              : 0;
        }
      },
      87275: (te, se, a) => {
        "use strict";
        a.d(se, { A: () => $, F: () => X });
        var t = a(7850),
          L = a(90626),
          j = a(71742),
          O = a(13854),
          E = a(75),
          f = a.n(E),
          w = a(76854);
        const $ = Object.assign(ce, { Root: b, Track: T, Range: G, Handle: B });
        function ce(i) {
          const {
              value: S,
              onValueChange: d,
              onValueSettled: n,
              min: s,
              ...o
            } = i,
            l = [S],
            m = (0, L.useCallback)((p) => d(p[0]), [d]),
            x = (0, L.useCallback)((p) => n?.(p[0]), [n]);
          return (0, t.jsxs)(b, {
            ...o,
            min: s,
            onValueChange: m,
            onValueSettled: x,
            value: l,
            children: [
              (0, t.jsx)(T, { children: (0, t.jsx)(G, { start: s, end: S }) }),
              (0, t.jsx)(B, {}),
            ],
          });
        }
        function X(i) {
          const { value: S } = i;
          return (0, t.jsxs)(b, {
            ...i,
            children: [
              (0, t.jsx)(T, {
                children: (0, t.jsx)(G, { start: S[0], end: S[1] }),
              }),
              (0, t.jsx)(B, {}),
              (0, t.jsx)(B, {}),
            ],
          });
        }
        const A = (0, L.createContext)(null);
        function b(i) {
          const { children: S, color: d, ...n } = i,
            {
              min: s,
              max: o,
              onValueChange: l,
              value: m,
              step: x = 1,
              onValueSettled: p,
            } = i,
            _ = (0, L.useRef)(null),
            D = (0, L.useRef)(null),
            [P] = (0, L.useState)(() => new Set()),
            [y, k] = (0, L.useState)(!1);
          return (0, t.jsx)(A.Provider, {
            value: { ...n, handles: P, bDragActive: y },
            children: (0, t.jsx)("div", {
              className: E.SliderRoot,
              "data-accent-color": d,
              ref: _,
              onPointerDown: (V) => {
                if (_.current) {
                  if (
                    (V.target.setPointerCapture(V.pointerId),
                    typeof m != "number")
                  ) {
                    const W = _.current.getBoundingClientRect(),
                      Z = q(V.clientX - W.left, [0, W.width], [s, o]);
                    D.current = { activeValueIndex: U(m, Z), bMoved: !1 };
                  } else D.current = { activeValueIndex: 0, bMoved: !1 };
                  k(!0);
                }
              },
              onPointerUp: (V) => {
                const W = V.target;
                W.hasPointerCapture(V.pointerId) &&
                  (W.releasePointerCapture(V.pointerId),
                  p && D.current?.bMoved && p(m),
                  k(!1));
              },
              onPointerMove: (V) => {
                if (
                  V.target.hasPointerCapture(V.pointerId) &&
                  _.current &&
                  D.current
                ) {
                  const Z = _.current.getBoundingClientRect(),
                    F = q(V.clientX - Z.left, [0, Z.width], [s, o]),
                    N = K({ value: F, min: s, max: o, step: x }),
                    u = [...m];
                  (u[D.current.activeValueIndex] = N),
                    u.sort((he, ve) => he - ve),
                    (D.current.activeValueIndex = u.indexOf(N)),
                    (D.current.bMoved = !0),
                    l(u);
                }
              },
              onClick: (V) => {
                if (!_.current || D.current?.bMoved) return;
                const W = _.current.getBoundingClientRect(),
                  Z = q(V.clientX - W.left, [0, W.width], [s, o]),
                  F = K({ value: Z, min: s, max: o, step: x }),
                  N = U(m, Z),
                  u = [...m];
                (u[N] = F), l(u), p && p(u);
              },
              children: (0, t.jsx)("div", { className: E.Inner, children: S }),
            }),
          });
        }
        function U(i, S) {
          if (i.length <= 1) return i.length - 1;
          let d = 0,
            n = Math.abs(S - i[0]);
          for (let s = 1; s < i.length; s++) {
            const o = Math.abs(i[s] - S);
            o < n && ((d = s), (n = o));
          }
          return d;
        }
        function T(i) {
          const { render: S, ...d } = i;
          return (0, w.Q)(
            S,
            (0, t.jsx)("div", { className: E.SliderTrack }),
            d,
            void 0,
          );
        }
        function G(i) {
          const { start: S, end: d, render: n } = i,
            s = (0, L.useContext)(A);
          (0, j.wT)(s, "SliderRange must be used within a SliderRoot!");
          const { min: o, max: l } = s,
            m = v(S, o, l),
            x = 100 - v(d, o, l);
          return (0, w.Q)(
            n,
            (0, t.jsx)("div", {
              className: E.SliderRange,
              style: { "--pct-left": `${m}%`, "--pct-right": `${x}%` },
            }),
            {},
            void 0,
          );
        }
        function B(i) {
          const { render: S } = i,
            d = (0, L.useContext)(A);
          (0, j.wT)(d, "SliderHandle must be used within a SliderRoot!");
          const {
              min: n,
              max: s,
              handles: o,
              value: l,
              step: m = 1,
              onValueChange: x,
              onValueSettled: p,
            } = d,
            [_, D] = (0, L.useState)(null),
            [P, y] = (0, L.useState)(-1);
          (0, L.useEffect)(
            () => (_ ? (o.add(_), y(o.size - 1), () => o.delete(_)) : () => {}),
            [_, o],
          );
          const k = P > -1,
            W = { "--handle-pct": `${v(k ? l[P] : n, n, s)}%` },
            Z = (N) => {
              switch (N.key) {
                case "ArrowRight":
                case "ArrowUp":
                case "ArrowLeft":
                case "ArrowDown": {
                  const u = N.key === "ArrowRight" || N.key === "ArrowUp",
                    he = m * (u ? 1 : -1),
                    ve = K({ value: l[P] + he, min: n, max: s, step: m }),
                    xe = [...l];
                  (xe[P] = ve),
                    x(xe),
                    p && p(xe),
                    N.preventDefault(),
                    N.stopPropagation();
                  break;
                }
                case "PageUp":
                case "PageDown": {
                  const u = N.key === "PageUp",
                    he = Math.round((s - n) / 10) * (u ? 1 : -1),
                    ve = K({ value: l[P] + he, min: n, max: s, step: m }),
                    xe = [...l];
                  (xe[P] = ve),
                    x(xe),
                    p && p(xe),
                    N.preventDefault(),
                    N.stopPropagation();
                  break;
                }
              }
            };
          k || (W.display = "none");
          const F = {
            ref: D,
            role: "slider",
            "aria-valuenow": l[P],
            "aria-valuemin": n,
            "aria-valuemax": s,
            tabIndex: 0,
            onKeyDown: Z,
          };
          return (0, w.Q)(
            S,
            (0, t.jsx)("span", { className: E.SliderHandle, style: W }),
            F,
            { value: l[P], bDragActive: d.bDragActive },
          );
        }
        function q(i, S, d) {
          if (S[0] === S[1] || d[0] === d[1]) return d[0];
          const s = ((d[1] - d[0]) / (S[1] - S[0])) * (i - S[0]) + d[0];
          return O.OQ(s, d[0], d[1]);
        }
        function K(i) {
          const { value: S, min: d, max: n, step: s } = i,
            l = Math.round((S - d) / s) / (1 / s);
          return O.OQ(l + d, d, n);
        }
        function v(i, S, d) {
          return ((i - S) / (d - S)) * 100;
        }
      },
      31857: (te, se, a) => {
        "use strict";
        a.d(se, { I: () => f });
        var t = a(7850),
          L = a(69289),
          j = a(8928),
          O = a(16619),
          E = a.n(O);
        function f(A) {
          return (0, t.jsx)("svg", { ...ce(A) });
        }
        const w = [
          ...j.L,
          {
            prop: "size",
            responsive: !0,
            className: (A) => O[`IconSize-${A}`],
          },
          {
            prop: "color",
            className: O.Color,
            cssProperty: (A) => ["--icon-color", $(A)],
          },
          {
            prop: "hitSlop",
            className: O.HitSlop,
            cssProperty: (A) => [
              "--hit-slop-custom",
              typeof A == "string" ? A : "",
            ],
          },
          j.h.find(({ prop: A }) => A === "cursor"),
        ];
        function $(A) {
          return !A || A[0] === "#" ? A : (0, L.w7)(A);
        }
        function ce(A) {
          const { viewBox: b, ...U } = A,
            G = { className: U.size ? void 0 : O.IconSizeDefault, ...U };
          return b && (G.viewBox = X(b)), (0, L.mz)(G, w);
        }
        function X(A) {
          if (A)
            return typeof A == "number"
              ? `0 0 ${A} ${A}`
              : typeof A == "string"
                ? A
                : `0 0 ${A.width} ${A.height}`;
        }
      },
      12204: (te, se, a) => {
        "use strict";
        a.d(se, { V: () => O });
        var t = a(7850),
          L = a(31857);
        const j = {
          up: "rotate( 180, 10, 10 )",
          left: "rotate( 90, 10, 10 )",
          right: "rotate( 270, 10, 10 )",
        };
        function O(E) {
          const { direction: f = "down" } = E,
            w = j[f];
          return (0, t.jsx)(L.I, {
            ...E,
            viewBox: 20,
            children: (0, t.jsx)("path", {
              transform: w,
              d: "M5.14541 6.89977L10.0063 12.2027L14.8671 6.89977C15.3557 6.36674 16.145 6.36674 16.6336 6.89977C17.1221 7.4328 17.1221 8.29385 16.6336 8.82688L10.8832 15.1002C10.3946 15.6333 9.60537 15.6333 9.11678 15.1002L3.36644 8.82688C2.87785 8.29385 2.87785 7.4328 3.36644 6.89977C3.85503 6.38041 4.65682 6.36674 5.14541 6.89977Z",
              fill: "currentColor",
            }),
          });
        }
      },
      76854: (te, se, a) => {
        "use strict";
        a.d(se, { Q: () => j });
        var t = a(90626);
        function L(O, E, f) {
          return typeof O == "function" ? O(E, f) : t.cloneElement(O, E);
        }
        function j(O, E, f, w) {
          return L(O || E, f, w);
        }
      },
      15252: (te, se, a) => {
        "use strict";
        a.d(se, { Ae: () => A, EY: () => ce, U6: () => X });
        var t = a(7850),
          L = a(1039),
          j = a(69289),
          O = a(8928),
          E = a(64238),
          f = a.n(E),
          w = a(65274),
          $ = a.n(w);
        function ce(b) {
          const { as: U = "span", ref: T, className: G, ...B } = b,
            q = U;
          return (0, t.jsx)(q, {
            ref: T,
            ...(0, j.mz)({ ...B, className: f()(w.Text, G) }, A),
          });
        }
        const X = [
            {
              prop: "weight",
              responsive: !0,
              className: w.TextWeight,
              cssProperty: (b) => ["--text-weight", `var(--font-weight-${b})`],
            },
            {
              prop: "align",
              responsive: !0,
              className: w.TextAlign,
              cssProperty: "--text-align",
            },
            {
              prop: "color",
              responsive: !0,
              cssProperty: (b, U, T) => [
                "--text-color",
                (0, j.To)(b, (0, L.I)(U.contrast, T) ?? "body"),
              ],
            },
            {
              prop: "contrast",
              responsive: !0,
              cssProperty: (b, U, T) => [
                "--text-color",
                (0, j.To)((0, L.I)(U.color, T) ?? "text-body", b),
              ],
            },
            { prop: "truncate", className: w.Truncate },
            {
              prop: "lineClamp",
              responsive: !0,
              className: w.LineClamp,
              cssProperty: "--line-clamp",
            },
            {
              prop: "whiteSpace",
              className: w.WhiteSpace,
              cssProperty: "--white-space",
            },
          ],
          A = [
            ...X,
            ...O.L,
            {
              prop: "size",
              responsive: !0,
              className: (b) => w[`TextSize-${b}`],
            },
          ];
      },
      24805: (te, se, a) => {
        "use strict";
        a.d(se, { Xh: () => $, cU: () => ce, tf: () => A, wl: () => X });
        var t = a(99412),
          L = a(18735),
          j = a(48156),
          O = a(6469),
          E = a(10142),
          f = a(10349),
          w = a(3166);
        const $ = {
          include_assets: !0,
          include_release: !0,
          include_platforms: !0,
          include_tag_count: 20,
          include_basic_info: !0,
          include_optin_registration_tags: !0,
          include_trailers: !0,
          include_reviews: !0,
          include_screenshots: !0,
          include_supported_languages: !0,
        };
        class ce {
          m_setAlreadyAdded = new Set();
          Reset() {
            this.m_setAlreadyAdded = new Set();
          }
          BHasAppID(i) {
            return this.m_setAlreadyAdded.has("a" + i);
          }
          BHasPackageID(i) {
            return this.m_setAlreadyAdded.has("s" + i);
          }
          BHasBundleID(i) {
            return this.m_setAlreadyAdded.has("b" + i);
          }
          BHasStoreItemKey(i) {
            return this.m_setAlreadyAdded.has(
              this.ConvertStoreItemKeyToUniqueKey(i),
            );
          }
          AddStoreItemKey(i) {
            this.m_setAlreadyAdded.add(this.ConvertStoreItemKeyToUniqueKey(i));
          }
          ConvertStoreItemKeyToUniqueKey(i) {
            switch (i.item_type) {
              default:
              case "app":
                return "a" + i.id;
              case "sub":
                return "s" + i.id;
              case "bundle":
                return "b" + i.id;
            }
          }
        }
        const X = 4;
        function A(v, i, S, d, n, s) {
          const o = new Array(),
            l = new Array(),
            m = new Array(),
            x = new Array();
          if (!v || v.length == 0) return o;
          const p = [
            f.by.k_RejectSupportedLanguage,
            f.by.k_RejectAlreadyDisplayed,
            f.by.k_RejectNoTrailer,
          ];
          for (let _ of v) {
            let D = _.id,
              P = f.by.k_NotRejected;
            switch (_.item_type) {
              case "sub":
                const y = E.A.Get().GetPackage(D);
                if (y?.GetIncludedAppIDs()?.length !== 1) {
                  P = q(D, i, d, !0);
                  break;
                }
                D = y.GetIncludedAppIDs()[0];
              case "app":
                P = G(D, i, S, d, !0);
                break;
              case "bundle":
                P = K(D, i, d, !0);
                break;
            }
            if (
              (P == f.by.k_NotRejected
                ? ((_.rejected = f.by.k_NotRejected),
                  o.push({ ..._, priority: 1 }))
                : p.includes(P)
                  ? ((_.rejected = f.by.k_NotRejected), l.push(_))
                  : ((_.rejected = P),
                    P == f.by.k_RejectIgnoredGame ? m.push(_) : x.push(_)),
              o.length > n)
            )
              break;
          }
          return (
            o.length < n &&
              (b(o, l, s, 2),
              o.length < s &&
                i.enforce_minimum &&
                (b(o, m, s, 3), b(o, x, s, X))),
            o
          );
        }
        function b(v, i, S, d) {
          for (let n = 0; v.length < S && n < i.length; ++n)
            v.push({ ...i[n], priority: d });
        }
        function U(v, i) {
          const S = O.Fm.Get();
          if (
            i.only_current_platform &&
            S.BHasPlatformPreferenceSet() &&
            !(
              (v.GetPlatforms()?.windows && S.BIsPreferredPlatform("win")) ||
              (v.GetPlatforms()?.mac && S.BIsPreferredPlatform("mac")) ||
              (v.GetPlatforms()?.steamos_linux &&
                S.BIsPreferredPlatform("linux"))
            )
          )
            return f.by.k_RejectWrongPlatform;
          if (!i.prepurchase && v.BIsComingSoon())
            return f.by.k_RejectNoComingSoon;
          const d = v.GetPlatforms();
          return !i.virtual_reality &&
            d &&
            d.vr_support &&
            d.vr_support.vrhmd_only
            ? f.by.k_RejectNoVR
            : v.GetAllCreatorClanIDs()?.some((n) => S.BIsIgnoringCurator(n))
              ? f.by.k_RejectCreatorClan
              : f.by.k_NotRejected;
        }
        function T(v, i) {
          if (i.localized) {
            const S = (0, t.sfN)(w.TS.LANGUAGE);
            if (!v.GetAllLanguagesWithSomeSupport()?.includes(S))
              return f.by.k_RejectSupportedLanguage;
          }
          return f.by.k_NotRejected;
        }
        function G(v, i, S, d, n) {
          const s = E.A.Get().GetApp(v);
          if (!s) return f.by.k_RejectNotLoaded;
          const o = U(s, i);
          if (o != f.by.k_NotRejected) return o;
          const l = O.Fm.Get();
          if (l.BIsGameIgnored(v)) return f.by.k_RejectIgnoredGame;
          if (l.BExcludeTagIDs(s.GetTagIDs()))
            return f.by.k_RejectIgnoreGameTags;
          if (l.BExcludesContentDescriptor(s.GetContentDescriptorIDs()))
            return f.by.k_RejectIgnoreContentDescriptors;
          if (!i.early_access && s.BIsEarlyAccess())
            return f.by.k_RejectEarlyAccess;
          const m = s.GetAppType();
          if (!i.software && m == j.uE.Sv) return f.by.k_RejectSoftware;
          if (i.games_already_in_library && l.BIsGameOwned(v))
            return f.by.k_RejectInLibrary;
          if (i.games_not_in_library && !l.BIsGameOwned(v))
            return f.by.k_RejectNotInLibrary;
          if (!i.video && [j.uE.Wz, j.uE.gQ, j.uE.ID].includes(m))
            return f.by.k_RejectVideo;
          if (i.has_discount) {
            const x = s.GetBestPurchaseOption();
            if (!x || !x.discount_pct) return f.by.k_RejectNoDiscount;
          }
          return S != "adultonly" &&
            i.no_ao_content &&
            (s.HasContentDescriptorID(L.u7) || s.HasContentDescriptorID(L.T4))
            ? f.by.k_RejectAO
            : m == j.uE.ue &&
                i.games_already_in_library &&
                l.BIsGameOwned(s.GetParentAppID() || 0)
              ? f.by.k_RejectInLibrary
              : n
                ? (m == j.uE.ue && d.BHasAppID(s.GetParentAppID() || 0)) ||
                  d.BHasAppID(v)
                  ? f.by.k_RejectAlreadyDisplayed
                  : i.has_trailer && !s.BHasTrailers(!1)
                    ? f.by.k_RejectNoTrailer
                    : T(s, i)
                : f.by.k_NotRejected;
        }
        function B(v, i) {
          const S = O.Fm.Get();
          let d = !1;
          for (let n of v) {
            if (S.BIsGameIgnored(n)) return f.by.k_RejectIgnoredGame;
            S.BIsGameOwned(n) && (d = !0);
          }
          return i.games_not_in_library && d
            ? f.by.k_RejectInLibrary
            : i.games_not_in_library && !d
              ? f.by.k_RejectNotInLibrary
              : f.by.k_NotRejected;
        }
        function q(v, i, S, d) {
          const n = E.A.Get().GetPackage(v);
          if (!n) return f.by.k_RejectNotLoaded;
          const s = U(n, i);
          if (s != f.by.k_NotRejected) return s;
          const o = B(n.GetIncludedAppIDs(), i);
          if (o != f.by.k_NotRejected) return o;
          const l = O.Fm.Get();
          return i.games_already_in_library && l.BOwnsPackage(v)
            ? f.by.k_RejectInLibrary
            : l.BIsPackageIgnored(v)
              ? f.by.k_RejectIgnoredGame
              : d
                ? S.BHasPackageID(v)
                  ? f.by.k_RejectAlreadyDisplayed
                  : T(n, i)
                : f.by.k_NotRejected;
        }
        function K(v, i, S, d) {
          const n = E.A.Get().GetBundle(v);
          if (!n) return f.by.k_RejectNotLoaded;
          const s = U(n, i);
          if (s != f.by.k_NotRejected) return s;
          const o = B(n.GetIncludedAppIDs(), i);
          return o != f.by.k_NotRejected
            ? o
            : d
              ? S.BHasBundleID(v)
                ? f.by.k_RejectAlreadyDisplayed
                : T(n, i)
              : f.by.k_NotRejected;
        }
      },
      85528: (te, se, a) => {
        "use strict";
        a.d(se, { Vw: () => S });
        var t = a(14947),
          L = a(99412),
          j = a(72604),
          O = a(35038),
          E = a(67529),
          f = a(3166);
        class w {
          m_nLastUpdated = 0;
          m_mapLanguages = t.sH.map();
          m_appid;
          m_fetching = null;
          constructor(n) {
            this.m_appid = n;
          }
          GetAppID() {
            return this.m_appid;
          }
          GetTokenList(n) {
            return this.m_mapLanguages.has(n)
              ? this.m_mapLanguages.get(n)
              : null;
          }
          Localize(n, s) {
            let o = f.TS.LANGUAGE,
              l = this.GetTokenList(o),
              m = o != "english" ? this.GetTokenList("english") : null;
            return $(n, l, m, this.m_appid, s);
          }
          SubstituteParams(n, s) {
            let o = f.TS.LANGUAGE,
              l = this.GetTokenList(o),
              m = o != "english" ? this.GetTokenList("english") : null;
            return ce(n, l, m, this.m_appid, s);
          }
        }
        function $(d, n, s, o, l) {
          if (!d.startsWith("#"))
            return (
              console.log(
                "Token doesn't start with #:",
                d,
                "appid",
                o,
                "tokens",
                n,
              ),
              ""
            );
          let m = d;
          d = d.toLowerCase();
          let x = "";
          if (
            (n && n.has(d) && (x = n.get(d)),
            !x && s && s.has(d) && (x = s.get(d)),
            x)
          )
            x = ce(x, n, s, o, l);
          else if (
            ((n || s) &&
              console.log(
                "No loc found for appid",
                o,
                m,
                "Tokens:",
                n,
                "Fallback:",
                s,
              ),
            n && f.TS.EUNIVERSE != L.wLO)
          )
            return d;
          return x;
        }
        function ce(d, n, s, o, l) {
          let m = /{[A-za-z0-9_%#:]+}/g,
            x = d.match(m);
          if (x)
            for (let p of x) {
              let _ = p.slice(1, -1),
                D = X(_, l),
                P = $(D, n, s, o, l);
              if (!P) return "";
              d = d.replace(p, P);
            }
          return (d = X(d, l)), d;
        }
        function X(d, n) {
          let s = /%[A-Za-z0-9_:]+%/g,
            o = d.match(s);
          if (o)
            for (let l of o) {
              let m = l.slice(1, -1).toLowerCase(),
                x = n.get(m);
              x == null
                ? console.log("No rich presence found for", m)
                : (d = d.replace(l, x));
            }
          return d;
        }
        var A = a(72849),
          b = a(71742),
          U = a(8323),
          T = Object.defineProperty,
          G = Object.getOwnPropertyDescriptor,
          B = (d, n, s, o) => {
            for (
              var l = o > 1 ? void 0 : o ? G(n, s) : n, m = d.length - 1, x;
              m >= 0;
              m--
            )
              (x = d[m]) && (l = (o ? x(n, s, l) : x(l)) || l);
            return o && l && T(n, s, l), l;
          };
        function q(d) {
          return useObserver(() => S.GetAppInfo(d));
        }
        function K(d) {
          return useObserver(() => d.map((n) => S.GetAppInfo(n)));
        }
        const v = 3600 * 24 * 7 * 2;
        class i {
          m_CMInterface;
          m_mapAppInfo = t.sH.map();
          m_mapRichPresenceLoc = t.sH.map();
          m_cAppInfoRequestsInFlight = 0;
          m_setPendingAppInfo = new Set();
          m_PendingAppInfoPromise;
          m_PendingAppInfoResolve;
          m_CacheStorage = null;
          m_fnCallbackOnAppInfoLoaded = new U.lu();
          constructor() {
            (0, t.Gn)(this);
          }
          Init(n) {
            this.m_CMInterface = n;
          }
          BHavePendingAppInfoRequests() {
            return (
              this.m_setPendingAppInfo.size > 0 ||
              this.m_cAppInfoRequestsInFlight > 0
            );
          }
          get CMInterface() {
            return this.m_CMInterface;
          }
          RegisterCallbackOnLoad(n) {
            if (!this.BHavePendingAppInfoRequests()) {
              (0, b.wT)(
                !1,
                "Registering for callback on appinfo load, but nothing queued",
              ),
                n();
              return;
            }
            this.m_fnCallbackOnAppInfoLoaded.Register(n);
          }
          IsLoadingAppID(n) {
            return this.m_setPendingAppInfo.has(n);
          }
          GetAppInfo(n) {
            if (
              ((0, b.wT)(
                this.m_CMInterface,
                "CAppInfoStore.GetAppInfo called before Init",
              ),
              !this.m_mapAppInfo.has(n))
            ) {
              let s = new E.by(n);
              this.m_mapAppInfo.set(n, s), this.QueueAppInfoRequest(n);
            }
            return this.m_mapAppInfo.get(n);
          }
          QueueAppInfoRequest(n) {
            return n
              ? (this.m_setPendingAppInfo.size ||
                  ((this.m_PendingAppInfoPromise = new Promise(
                    (s) => (this.m_PendingAppInfoResolve = s),
                  )),
                  window.setTimeout(() => this.FlushPendingAppInfo(), 25)),
                this.m_setPendingAppInfo.add(n),
                this.m_PendingAppInfoPromise)
              : Promise.resolve();
          }
          async FlushPendingAppInfo() {
            const n = this.m_PendingAppInfoResolve,
              s = Array.from(this.m_setPendingAppInfo);
            (this.m_PendingAppInfoPromise = void 0),
              (this.m_PendingAppInfoResolve = void 0),
              this.m_setPendingAppInfo.clear(),
              await this.LoadAppInfoBatch(s),
              n?.();
          }
          async LoadAppInfoBatch(n) {
            this.m_cAppInfoRequestsInFlight++;
            let s = await this.LoadAppInfoBatchFromLocalCache(n);
            if (s.length) {
              console.log("Loading batch of App Info from Steam: ", s),
                await this.m_CMInterface?.WaitUntilLoggedOn();
              let o = O.w.Init(A._z);
              o.Body().set_language((0, L.sfN)(f.TS.LANGUAGE));
              const l = 50;
              for (; s.length > 0; ) {
                const m = Math.min(l, s.length),
                  x = s.slice(0, m);
                (s = s.slice(m)), o.Body().set_appids(x);
                const p = await A.BE.GetApps(
                  this.m_CMInterface.GetServiceTransport(),
                  o,
                );
                p.GetEResult() == j.R
                  ? this.OnGetAppsResponse(p)
                  : console.error(
                      `Error when calling CommunityService.GetApps: EResult=${p.GetEResult()}, AppIDs:`,
                      x,
                    );
              }
            }
            --this.m_cAppInfoRequestsInFlight == 0 &&
              this.m_setPendingAppInfo.size == 0 &&
              (this.m_fnCallbackOnAppInfoLoaded.Dispatch(),
              this.m_fnCallbackOnAppInfoLoaded.ClearAllCallbacks());
          }
          OnGetAppsResponse(n) {
            let s = [];
            for (let o of n.Body().apps()) {
              let l = this.m_mapAppInfo.get(o.appid());
              (0, b.wT)(
                l,
                `Got AppInfo response for unrequested AppID: ${o.appid()}`,
              ),
                l &&
                  ((l = new E.by(o.appid())),
                  l.DeserializeFromMessage(o),
                  this.m_mapAppInfo.set(o.appid(), l),
                  s.push(l));
            }
            this.SaveAppInfoBatchToLocalCache(s);
          }
          OnAppOverviewChange(n) {
            for (let s of n) {
              const o = new E.by(s.appid());
              o.DeserializeFromAppOverview(s),
                o.is_initialized && this.m_mapAppInfo.set(s.appid(), o);
            }
          }
          async EnsureAppInfoForAppIDs(n) {
            let s = !1;
            return (
              n.forEach((o) => {
                let l = this.m_mapAppInfo.get(o);
                if (l) {
                  l.is_valid || (s = !0);
                  return;
                }
                (l = new E.by(o)),
                  this.m_mapAppInfo.set(o, l),
                  this.QueueAppInfoRequest(o),
                  (s = !0);
              }),
              s && this.m_PendingAppInfoPromise !== void 0
                ? this.m_PendingAppInfoPromise
                : Promise.resolve()
            );
          }
          SetCacheStorage(n) {
            this.m_CacheStorage = n;
          }
          GetCacheKeyForAppID(n) {
            return "APPINFO_" + n;
          }
          async LoadAppInfoBatchFromLocalCache(n) {
            if (!this.m_CacheStorage) return n;
            console.log("Loading batch of App Info from Local Cache: ", n);
            const s = new Date(new Date().getTime() - v * 1e3),
              o = async (p) => {
                const _ = await this.m_CacheStorage?.GetObject(
                  this.GetCacheKeyForAppID(p),
                );
                if (!_) return p;
                let D = this.m_mapAppInfo.get(p);
                return (
                  (0, b.wT)(
                    D,
                    "Didn't find AppInfo in our map when loading from cache but it should've been there?",
                  ),
                  D
                    ? ((D = new E.by(p)),
                      D.DeserializeFromCacheObject(_),
                      D.is_initialized
                        ? (this.m_mapAppInfo.set(p, D),
                          D.time_updated_from_server < s ? p : null)
                        : (console.warn(
                            "Failed to deserialize cached App Info: ",
                            p,
                            _,
                          ),
                          p))
                    : p
                );
              };
            let l = n.map((p) => o(p));
            return (await Promise.all(l)).filter((p) => p !== null);
          }
          async SaveAppInfoBatchToLocalCache(n) {
            if (this.m_CacheStorage) {
              console.log(
                "Saving batch of App Info to Local Cache: ",
                n.map((s) => s.appid),
              );
              for (const s of n) {
                const o = s.SerializeToCacheObject();
                o &&
                  this.m_CacheStorage.StoreObject(
                    this.GetCacheKeyForAppID(s.appid),
                    o,
                  );
              }
            }
          }
          Localize(n, s, o) {
            const l = this.GetRichPresenceLoc(n);
            return l
              ? l.Localize(s, o)
              : f.TS.EUNIVERSE != L.wLO
                ? (console.log(
                    `Unable to find app localization information for app ${n} token ${s}, this may not have had a chance to load yet`,
                  ),
                  s)
                : "";
          }
          GetRichPresenceLoc(n) {
            if (this.m_mapRichPresenceLoc.has(n.toString())) {
              let o = this.m_mapRichPresenceLoc.get(n.toString());
              return (
                o.m_nLastUpdated + 1e3 * 60 * E.IU < Date.now() &&
                  this.QueueRichPresenceLocRequest(o),
                o
              );
            }
            let s = new w(n);
            return (
              this.m_mapRichPresenceLoc.set(n.toString(), s),
              this.QueueRichPresenceLocRequest(s),
              s
            );
          }
          GetRichPresenceLocAsync(n) {
            let s = this.GetRichPresenceLoc(n);
            return s.m_nLastUpdated ? Promise.resolve(s) : s.m_fetching;
          }
          OnRichPresenceLocUpdate(n, s) {
            n.m_nLastUpdated = Date.now();
            for (let o of s) {
              let l = o.language(),
                m = n.m_mapLanguages.get(l);
              m
                ? m.clear()
                : (n.m_mapLanguages.set(l, new Map()),
                  (m = n.m_mapLanguages.get(l)));
              for (let x of o.tokens())
                m?.set(x.name().toLowerCase(), x.value());
            }
          }
          QueueRichPresenceLocRequest(n) {
            return (
              n.m_fetching ||
                ((n.m_fetching = this.m_CMInterface
                  .WaitUntilLoggedOn()
                  .then(() => {
                    let s = O.w.Init(A.zQ);
                    return (
                      s.Body().set_appid(n.GetAppID()),
                      s.Body().set_language(f.TS.LANGUAGE),
                      A.BE.GetAppRichPresenceLocalization(
                        this.m_CMInterface.GetServiceTransport(),
                        s,
                      )
                    );
                  })
                  .then(
                    (s) => (
                      (n.m_fetching = null),
                      s.GetEResult() != j.R
                        ? Promise.reject()
                        : (this.OnRichPresenceLocUpdate(
                            n,
                            s.Body().token_lists(),
                          ),
                          Promise.resolve(n))
                    ),
                  )),
                n.m_fetching.catch(() => {
                  n.m_fetching = null;
                })),
              n.m_fetching
            );
          }
        }
        B([t.XI], i.prototype, "OnGetAppsResponse", 1),
          B([t.XI], i.prototype, "OnRichPresenceLocUpdate", 1);
        const S = new i();
      },
      84676: (te, se, a) => {
        "use strict";
        a.d(se, {
          G6: () => b,
          Gg: () => G,
          Ow: () => T,
          Sq: () => ce,
          YM: () => S,
          eR: () => X,
          ik: () => A,
          mZ: () => B,
          t7: () => U,
          zX: () => K,
        });
        var t = a(41735),
          L = a.n(t),
          j = a(90626),
          O = a(72604),
          E = a(48156),
          f = a(30096),
          w = a(10142);
        function $(d, n, s = !0) {
          const o = s
              ? CStoreItemCache.k_DataRequest_BasicInfo
              : CStoreItemCache.k_DataRequest_CommonOnly,
            l = s || CStoreItemCache.Get().BHasStoreItem(d, n, o) ? d : null,
            [m, x] = b(l, n, o),
            [p, _] = useState(null),
            [D, P] = b(p, n, o);
          useEffect(() => {
            m?.GetAppType() === EStoreAppType.k_EStoreAppType_Demo &&
              _(m.GetParentAppID());
          }, [m]);
          let y = m?.GetShortDescription()
            ? StripBBCodeTags(m.GetShortDescription())
            : "";
          (!y || y.length === 0) &&
            D &&
            (y = D?.GetShortDescription()
              ? StripBBCodeTags(D.GetShortDescription())
              : "");
          const k = x == A && (!p || P == A);
          return [y, k];
        }
        const ce = 1,
          X = 2,
          A = 3;
        function b(d, n, s, o) {
          const l = (0, j.useRef)(void 0),
            m = (0, j.useRef)(void 0),
            x = (0, f.CH)();
          l.current = d;
          const [p, _] = (0, j.useState)(void 0),
            {
              include_assets: D,
              include_release: P,
              include_platforms: y,
              include_all_purchase_options: k,
              include_screenshots: V,
              include_trailers: W,
              include_ratings: Z,
              include_tag_count: F,
              include_reviews: N,
              include_basic_info: u,
              include_supported_languages: he,
              include_full_description: ve,
              include_included_items: xe,
              include_assets_without_overrides: Me,
              apply_user_filters: I,
              include_links: R,
              include_extra_details: J,
              include_optin_registration_tags: H,
            } = s;
          if (
            ((0, j.useEffect)(() => {
              const oe = {
                include_assets: D,
                include_release: P,
                include_platforms: y,
                include_all_purchase_options: k,
                include_screenshots: V,
                include_trailers: W,
                include_ratings: Z,
                include_tag_count: F,
                include_reviews: N,
                include_basic_info: u,
                include_supported_languages: he,
                include_full_description: ve,
                include_included_items: xe,
                include_assets_without_overrides: Me,
                apply_user_filters: I,
                include_links: R,
                include_extra_details: J,
                include_optin_registration_tags: H,
              };
              let Oe = null;
              return (
                !d ||
                  d < 0 ||
                  w.A.Get().BHasStoreItem(d, n, oe) ||
                  (p !== void 0 && o && o == m.current) ||
                  (o !== m.current && (_(void 0), (m.current = o)),
                  (Oe = L().CancelToken.source()),
                  w.A.Get()
                    .QueueStoreItemRequest(d, n, oe)
                    .then((be) => {
                      !Oe?.token.reason && l.current === d && _(be == O.R), x();
                    })),
                () => Oe?.cancel("useStoreItemCache: unmounting")
              );
            }, [
              d,
              n,
              o,
              p,
              D,
              P,
              y,
              k,
              V,
              W,
              Z,
              F,
              N,
              u,
              he,
              ve,
              xe,
              Me,
              I,
              R,
              J,
              H,
              x,
            ]),
            !d)
          )
            return [null, X];
          if (p === !1) return [void 0, X];
          if (w.A.Get().BIsStoreItemMissing(d, n)) return [void 0, X];
          if (!w.A.Get().BHasStoreItem(d, n, s)) return [void 0, ce];
          const Y = w.A.Get().GetStoreItemWithLegacyVisibilityCheck(d, n);
          return Y ? [Y, A] : [null, X];
        }
        function U(d, n, s) {
          return b(d, E.c6.qI, n, s);
        }
        function T(d, n, s) {
          return b(d, E.c6.xO, n, s);
        }
        function G(d, n, s) {
          return b(d, E.c6.RD, n, s);
        }
        function B(d, n, s) {
          const [o, l] = b(d, n, s);
          let m;
          o?.GetStoreItemType() == E.c6.RD &&
            !o.GetAssets()?.GetHeaderURL() &&
            o?.GetIncludedAppIDs().length == 1 &&
            (m = o.GetIncludedAppIDs()[0]);
          const [x, p] = U(m, s);
          return m && x?.BIsVisible() ? [x, p] : [o, l];
        }
        function q(d, n, s, o) {
          const l = (0, f.CH)(),
            {
              include_assets: m,
              include_release: x,
              include_platforms: p,
              include_all_purchase_options: _,
              include_screenshots: D,
              include_trailers: P,
              include_ratings: y,
              include_tag_count: k,
              include_reviews: V,
              include_basic_info: W,
              include_supported_languages: Z,
              include_full_description: F,
              include_included_items: N,
              include_assets_without_overrides: u,
              apply_user_filters: he,
              include_links: ve,
              include_extra_details: xe,
              include_optin_registration_tags: Me,
            } = s;
          return (
            (0, j.useEffect)(() => {
              if (!d || d.length == 0) return;
              const R = {
                  include_assets: m,
                  include_release: x,
                  include_platforms: p,
                  include_all_purchase_options: _,
                  include_screenshots: D,
                  include_trailers: P,
                  include_ratings: y,
                  include_tag_count: k,
                  include_reviews: V,
                  include_basic_info: W,
                  include_supported_languages: Z,
                  include_full_description: F,
                  include_included_items: N,
                  include_assets_without_overrides: u,
                  apply_user_filters: he,
                  include_links: ve,
                  include_extra_details: xe,
                  include_optin_registration_tags: Me,
                },
                J = d.filter(
                  (oe) =>
                    !(
                      w.A.Get().BHasStoreItem(oe, n, R) ||
                      w.A.Get().BIsStoreItemMissing(oe, n)
                    ),
                );
              if (J.length == 0) return;
              const H = L().CancelToken.source(),
                Y = J.map((oe) => w.A.Get().QueueStoreItemRequest(oe, n, R));
              return (
                Promise.all(Y).then(() => {
                  H.token.reason || l();
                }),
                () => H.cancel("useStoreItemCacheMultiplePackages: unmounting")
              );
            }, [
              d,
              n,
              o,
              l,
              m,
              x,
              p,
              _,
              D,
              P,
              y,
              k,
              V,
              W,
              Z,
              F,
              N,
              u,
              he,
              ve,
              xe,
              Me,
            ]),
            d
              ? d.every(
                  (R) =>
                    w.A.Get().BHasStoreItem(R, n, s) ||
                    w.A.Get().BIsStoreItemMissing(R, n),
                )
                ? d.every((R) =>
                    w.A.Get().GetStoreItemWithLegacyVisibilityCheck(R, n),
                  )
                  ? A
                  : X
                : ce
              : X
          );
        }
        function K(d, n, s) {
          return q(d, E.c6.qI, n, s);
        }
        function v(d, n, s) {
          return q(d, EStoreItemType.k_EStoreItemType_Bundle, n, s);
        }
        function i(d, n, s) {
          return q(d, EStoreItemType.k_EStoreItemType_Package, n, s);
        }
        function S() {
          j.useEffect(
            () => (
              w.A.Get().SetReturnUnavailableItems(!0),
              () => w.A.Get().SetReturnUnavailableItems(!1)
            ),
            [],
          );
        }
      },
      19681: (te, se, a) => {
        "use strict";
        a.d(se, { l: () => L });
        var t = a(98609);
        function L(j, O) {
          if (!(!j?.asset_url_format || typeof j[O] != "string"))
            return (
              t.TS.BASE_URL_SHARED_CDN +
              "/store_item_assets/" +
              j.asset_url_format.replace("${FILENAME}", j[O])
            );
        }
      },
      86390: (te, se, a) => {
        "use strict";
        a.d(se, { Cg: () => U, pZ: () => G, vg: () => T });
        var t = a(7850),
          L = a(90626),
          j = a(88003),
          O = a(18210),
          E = a(3166),
          f = a(87242),
          w = a(74974),
          $ = a(6740),
          ce = a(62179),
          X = a(3685),
          A = a(96538);
        function b(q) {
          return (0, t.jsx)(j.x_, {
            onEscKeypress: q.closeModal,
            bDisableBackgroundDismiss: !0,
            children: (0, t.jsx)(B, {
              redirectURL: q.redirectURL,
              guestOption: q.guestOption,
            }),
          });
        }
        function U(q) {
          const { redirectURL: K = window.location.href } = q;
          return (0, t.jsx)(A.EN, {
            active: !0,
            children: (0, t.jsx)(b, { redirectURL: K }),
          });
        }
        function T() {
          (0, j.pg)(
            (0, t.jsx)(b, {
              ownerWin: window,
              redirectURL: window.location.href,
            }),
            window,
            { strTitle: (0, O.we)("#Login_SignInTitle") },
          );
        }
        function G(q, K) {
          (0, j.pg)(
            (0, t.jsx)(b, { ownerWin: window, redirectURL: q, guestOption: K }),
            window,
            { strTitle: (0, O.we)("#Login_SignInTitle") },
          );
        }
        function B(q) {
          const { redirectURL: K, guestOption: v } = q,
            [i] = (0, L.useState)(
              new ce.x(
                new X.D(E.TS.WEBAPI_BASE_URL),
              ).GetAnonymousServiceTransport(),
            ),
            [S, d] = (0, L.useState)(!1),
            n = (s) => {
              s == f.wI.k_PrimaryDomainFail ? d(!0) : window.location.assign(K);
            };
          return (0, t.jsx)("div", {
            children: S
              ? (0, t.jsx)(w.Fn, {})
              : (0, t.jsx)(w.YN, {
                  autoFocus: !0,
                  transport: i,
                  platform: $.SS.tS,
                  onComplete: n,
                  redirectUrl: K,
                  theme: "modal",
                  children: v && (0, t.jsx)(w.Mk, { redirectURL: K }),
                }),
          });
        }
      },
      96533: (te, se, a) => {
        "use strict";
        a.r(se), a.d(se, { default: () => Me });
        var t = a(7850),
          L = a(41735),
          j = a.n(L),
          O = a(3166),
          E = a(80902);
        function f(I, R, J, H, Y) {
          return (0, E.I)(w(I, R, J, H, Y));
        }
        function w(I, R, J, H, Y) {
          return {
            queryKey: ["gamemixer", I, R, J, H, Y],
            queryFn: async () => {
              let oe = {
                appids: I.join(","),
                appweights: R.join(","),
                sessionid: (0, O.KC)(),
                selffactor: J,
                popularity: Y ? 0 : H,
                scoperange: Y ? 100 : 0,
                scopedecayrange: Y ? 1e3 : 0,
                scopedecaystrength: Y ? 20 : 0,
              };
              const Oe = await j().get(
                `${O.TS.STORE_BASE_URL}gameexplorer/exploreapplist`,
                { params: oe, withCredentials: !0, timeout: 1e4 },
              );
              if (Oe.data)
                return Object.entries(Oe.data)
                  .map(([be, Pe]) => ({
                    nAppID: Number(be),
                    fDistance: Number(Pe),
                  }))
                  .filter((be) => be.fDistance > 0 && !I.includes(be.nAppID))
                  .sort((be, Pe) => Pe.fDistance - be.fDistance);
              throw "Failed FetchAppValues";
            },
            placeholderData: (oe) => oe,
          };
        }
        function $() {
          return (0, E.I)(ce());
        }
        function ce() {
          return {
            queryKey: ["gamemixerplayed"],
            queryFn: async () => {
              let I = { sessionid: (0, O.KC)() };
              const R = await j().get(
                `${O.TS.STORE_BASE_URL}gameexplorer/exploreplayedlist`,
                { params: I, withCredentials: !0, timeout: 1e4 },
              );
              if (R.data) return R.data;
              throw "Failed FetchAppValues";
            },
            placeholderData: (I) => I,
          };
        }
        var X = a(1418),
          A = a(8892),
          b = a(87275),
          U = a(21663),
          T = a(53080),
          G = a(90626),
          B = a(86390),
          q = a(51079),
          K = a(36707),
          v = a(18210),
          i = a(41526),
          S = a(19298),
          d = a(84676),
          n = a(47385),
          s = a(96117),
          o = a(92757),
          l = a(48156),
          m = a(24805);
        const x = {
          arrSelectedAppInfos: [],
          nSelfFactor: 0,
          nPopularity: 0,
          bSimilar: !0,
        };
        function p(I) {
          const R =
              I.arrSelectedAppInfos.length == 0
                ? "0"
                : I.arrSelectedAppInfos.map((H) => H.nAppID).join(),
            J =
              I.arrSelectedAppInfos.length == 0
                ? "0"
                : I.arrSelectedAppInfos.map((H) => H.nWeight.toFixed(0)).join();
          return `/gameexplorer/${R}/${J}/${I.nSelfFactor}/${I.nPopularity}/${I.bSimilar}`;
        }
        function _(I) {
          const R = I.appids?.split(",").filter((H) => H != "0") ?? [],
            J = I.weights?.split(",").filter((H) => H != "0") ?? [];
          return {
            arrSelectedAppInfos: R.map((H) => Number(H)).map((H, Y) => ({
              nAppID: H,
              nWeight: Number(J[Y]),
            })),
            nSelfFactor: Number(I?.selffactor ?? "0"),
            nPopularity: Number(I?.popularity ?? "0"),
            bSimilar: I?.similar == "true",
          };
        }
        function D() {
          const I = (0, o.g)(),
            R = _(I),
            [J, H] = G.useState(R),
            [Y, oe] = G.useState(R),
            Oe = (0, o.W6)(),
            be = f(
              Y.arrSelectedAppInfos.map((re) => re.nAppID),
              Y.arrSelectedAppInfos.map((re) => re.nWeight),
              Y.nSelfFactor,
              Y.nPopularity,
              Y.bSimilar,
            ),
            Pe = (re, ie) => {
              H(re), ie && (Oe.push(p(re)), oe(re));
            },
            de = (re) => {
              const ie = {
                ...Y,
                arrSelectedAppInfos: [{ nAppID: re, nWeight: 100 }],
              };
              H(ie), Oe.push(p(ie)), oe(ie);
            };
          return (0, t.jsx)(q.Ay, {
            controller: "gameexplorer",
            method: "default",
            feature: "capsule",
            children: (0, t.jsx)(X.Y, {
              children: (0, t.jsx)(S.Z, {
                className: (0, K.A)(
                  i.GameExplorerApp,
                  be.isFetching && i.Refreshing,
                ),
                children: (0, t.jsxs)(S.Z, {
                  className: i.GameExplorerContainer,
                  children: [
                    (0, t.jsx)(P, {}),
                    !O.iA.steamid && (0, t.jsx)(N, {}),
                    (0, t.jsx)(W, { state: J, onChange: Pe }),
                    be.data &&
                      (0, t.jsx)(F, {
                        arrNearApps: be.data,
                        bIsPending: be.isFetching,
                        fnSetApp: de,
                      }),
                  ],
                }),
              }),
            }),
          });
        }
        function P() {
          return (0, t.jsxs)(S.Z, {
            className: i.GameExplorerHeader,
            children: [
              (0, t.jsx)(S.Z, {
                className: i.GameExplorerTitle,
                children: "Game Explorer",
              }),
              (0, t.jsx)(S.Z, {
                className: i.GameExplorerDescription,
                children: "Explore and Mix Games",
              }),
            ],
          });
        }
        function y(I) {
          const [R] = (0, d.t7)(I.selectedAppInfo.nAppID, {
            include_basic_info: !0,
            include_assets_without_overrides: !0,
          });
          if (!R) return null;
          const J = R.GetAssetsWithoutOverrides().GetMainCapsuleURL();
          return (0, t.jsxs)("div", {
            className: i.SelectedApp,
            children: [
              (0, t.jsx)("div", {
                className: i.RemoveButttonContainer,
                children: (0, t.jsx)(A.$, {
                  size: "1",
                  color: "red",
                  onClick: () => I.onRemove(I.selectedAppInfo.nAppID),
                  children: "X",
                }),
              }),
              (0, t.jsx)("img", { className: i.CapsuleImage, src: J }),
              (0, t.jsx)("div", {
                className: i.WeightContainer,
                children:
                  I.nNumSelected > 1 &&
                  (0, t.jsx)(b.A, {
                    value: I.selectedAppInfo.nWeight,
                    min: 0,
                    max: 100,
                    onValueChange: (H) =>
                      I.onWeightChange(I.selectedAppInfo.nAppID, H, !1),
                    onValueSettled: (H) =>
                      I.onWeightChange(I.selectedAppInfo.nAppID, H, !0),
                  }),
              }),
            ],
          });
        }
        function k(I) {
          if (I.bSimilar) return "Similar";
          switch (I.nPopularity) {
            case 0:
              return "Any";
            case 40:
              return "Popular";
            case 130:
              return "Niche";
          }
          return "";
        }
        function V(I) {
          switch (I.nSelfFactor) {
            case 0:
              return "None";
            case 20:
              return "Some";
            case 40:
              return "Lots";
          }
          return "";
        }
        function W(I) {
          const [R, J] = G.useState(k(I.state)),
            [H, Y] = G.useState(V(I.state)),
            oe = (z, le, me) => {
              let ee = I.state.arrSelectedAppInfos.slice();
              ee.find((Q) => Q.nAppID == z) == null &&
                ((le = 100 / (ee.length + 1)),
                ee.push({ nAppID: z, nWeight: le }));
              let ue = !1;
              if (
                (le == -1 &&
                  ((le = 0), (ee = ee.filter((Q) => Q.nAppID != z)), (ue = !0)),
                ee.length > 1)
              ) {
                const Q = ee
                    .map((De) => (De.nAppID != z ? De.nWeight : null))
                    .filter((De) => De != null),
                  He = Q.reduce((De, Re) => De + Re, 0);
                let Ne = (100 - le - He) / (ee.length - (ue ? 0 : 1));
                const Fe = Q.reduce(
                    (De, Re) => De + Math.max(0, Re + Ne - 100),
                    0,
                  ),
                  ke = Q.reduce((De, Re) => De + Math.min(0, Re + Ne), 0);
                (Ne += Math.floor(Fe / (ee.length - 1))),
                  (Ne += Math.floor(ke / (ee.length - 1))),
                  (ee = ee.map((De) => ({
                    nAppID: De.nAppID,
                    nWeight:
                      De.nAppID == z
                        ? le
                        : Math.max(0, Math.min(100, De.nWeight + Ne)),
                  }))),
                  I.onChange({ ...I.state, arrSelectedAppInfos: ee }, me);
              } else I.onChange({ ...I.state, arrSelectedAppInfos: ee }, me);
            },
            Oe = (z) => {
              oe(z, 100, !0);
            },
            be = (z) => {
              oe(z, -1, !0);
            },
            Pe = (z) => {
              switch (z) {
                case "None":
                  I.onChange({ ...I.state, nSelfFactor: 0 }, !0);
                  break;
                case "Some":
                  I.onChange({ ...I.state, nSelfFactor: 20 }, !0);
                  break;
                case "Lots":
                  I.onChange({ ...I.state, nSelfFactor: 40 }, !0);
                  break;
              }
              Y(z);
            },
            de = (z) => {
              switch (z) {
                case "Similar":
                  I.onChange({ ...I.state, nPopularity: 0, bSimilar: !0 }, !0);
                  break;
                case "Any":
                  I.onChange({ ...I.state, nPopularity: 0, bSimilar: !1 }, !0);
                  break;
                case "Popular":
                  I.onChange({ ...I.state, nPopularity: 40, bSimilar: !1 }, !0);
                  break;
                case "Niche":
                  I.onChange(
                    { ...I.state, nPopularity: 130, bSimilar: !1 },
                    !0,
                  );
                  break;
              }
              J(z);
            },
            re = ["Similar", "Any", "Popular", "Niche"],
            ie = ["None", "Some", "Lots"];
          return (0, t.jsx)("div", {
            className: i.GameExplorerKnobs,
            children: (0, t.jsxs)("div", {
              className: i.AppList,
              children: [
                (0, t.jsxs)("div", {
                  className: i.AppRow,
                  children: [
                    I.state.arrSelectedAppInfos.length == 0 &&
                      (0, t.jsx)("div", {
                        className: i.Empty,
                        children: "Add games to start exploring",
                      }),
                    I.state.arrSelectedAppInfos.map((z) =>
                      (0, t.jsx)(
                        y,
                        {
                          selectedAppInfo: z,
                          onWeightChange: oe,
                          onRemove: be,
                          nNumSelected: I.state.arrSelectedAppInfos.length,
                        },
                        z.nAppID,
                      ),
                    ),
                  ],
                }),
                (0, t.jsxs)("div", {
                  className: i.AppSelectors,
                  children: [
                    (0, t.jsx)(ve, {
                      fnSelectAppID: Oe,
                      arrSelectedAppIDs: I.state.arrSelectedAppInfos.map(
                        (z) => z.nAppID,
                      ),
                    }),
                    (0, t.jsx)(xe, {
                      fnSelectAppID: Oe,
                      arrSelectedAppIDs: I.state.arrSelectedAppInfos.map(
                        (z) => z.nAppID,
                      ),
                    }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  className: i.OtherControls,
                  children: [
                    (0, t.jsxs)("div", {
                      className: i.OtherControl,
                      children: [
                        (0, t.jsx)("div", {
                          className: i.ControlTitle,
                          children: "Popularity",
                        }),
                        (0, t.jsx)(U.I, {
                          options: re,
                          value: R,
                          onValueChange: (z) => de(z),
                          radius: "sm",
                        }),
                        (0, t.jsxs)("div", {
                          className: i.ControlDescription,
                          children: [
                            R == "Similar" &&
                              "Games with similar popularity to your input games",
                            R == "Any" &&
                              "No popularity restrictions, can be noisy",
                            R == "Popular" && "Higher popularity games",
                            R == "Niche" &&
                              "Lower popularity games, can be noisy",
                          ],
                        }),
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      className: i.OtherControl,
                      children: [
                        (0, t.jsx)("div", {
                          className: i.ControlTitle,
                          children: "Self Factor",
                        }),
                        (0, t.jsx)(U.I, {
                          options: ie,
                          value: H,
                          onValueChange: (z) => Pe(z),
                          radius: "sm",
                        }),
                        (0, t.jsxs)("div", {
                          className: i.ControlDescription,
                          children: [
                            H == "None" &&
                              "Your game preferences are not factored in",
                            H == "Some" &&
                              "A bit of your game preferences are mixed in",
                            H == "Lots" &&
                              "Significantly biased towards your game preferences",
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          });
        }
        function Z(I) {
          const [R] = (0, d.G6)(I.nAppID, l.c6.qI, m.Xh);
          return R
            ? (0, t.jsxs)("div", {
                className: i.CapsuleContainer,
                children: [
                  (0, t.jsx)(s.W, {
                    capsule: { id: I.nAppID },
                    imageType: "library",
                    nWidthMultiplier: 2,
                    bShowName: !1,
                    bHidePlatforms: !0,
                    bHidePrice: !0,
                    bHideStatusBanners: !0,
                    bShowIgnoreButton: !0,
                    bShowDescriptionInHover: !0,
                    bPreferAssetWithoutOverride: !1,
                  }),
                  (0, t.jsxs)("div", {
                    className: i.Distance,
                    children: [
                      `${(I.fDistance * 100).toFixed(2)}%`,
                      (0, t.jsx)("div", {
                        className: i.StartExplore,
                        children: (0, t.jsx)(A.$, {
                          size: "1",
                          color: "green",
                          onClick: () => I.fnSetApp(I.nAppID),
                          children: "Go",
                        }),
                      }),
                    ],
                  }),
                ],
              })
            : null;
        }
        function F(I) {
          return I.arrNearApps.length == 0
            ? null
            : (0, t.jsx)("div", {
                className: (0, K.A)(
                  i.GameExplorerResults,
                  I.bIsPending && i.Pending,
                ),
                children: I.arrNearApps?.map((R) =>
                  (0, t.jsx)(
                    Z,
                    {
                      nAppID: R.nAppID,
                      fDistance: R.fDistance,
                      fnSetApp: I.fnSetApp,
                    },
                    R.nAppID,
                  ),
                ),
              });
        }
        function N() {
          return (0, t.jsxs)(S.Z, {
            className: i.PersonalCalendarLoginPrompt,
            children: [
              (0, v.we)("#PersonalCalendar_LoginPrompt"),
              (0, t.jsx)("button", {
                onClick: B.vg,
                className: i.LoginButton,
                children: (0, v.we)("#Login_SignIn"),
              }),
            ],
          });
        }
        function u(I) {
          const [R] = (0, d.t7)(I.nAppID, {
            include_basic_info: !0,
            include_assets_without_overrides: !0,
          });
          if (!R) return null;
          const J = R.GetAssetsWithoutOverrides().GetSmallCapsuleURL();
          return (0, t.jsxs)("div", {
            className: i.AppSelectorResult,
            onPointerDown: () => I.onClick(I.nAppID),
            children: [
              (0, t.jsx)("img", { className: i.Logo, src: J }),
              (0, t.jsx)("div", {
                className: i.RightSide,
                children: R.GetName(),
              }),
            ],
          });
        }
        const he = G.forwardRef(function (R, J) {
            const H = (0, n.T3)(R.strSearch, null, 10),
              Y = R.fnSetResultApps;
            return (
              G.useEffect(() => {
                Y(H.data?.rgItemIDs.map((oe) => oe.appid));
              }, [Y, H.data]),
              (0, t.jsx)("div", {
                className: (0, K.A)(
                  i.AppSelectorResults,
                  H.data?.rgItemIDs.length > 0 && i.Show,
                ),
                ref: J,
                children: H.data?.rgItemIDs
                  .filter((oe) => !R.arrIgnoreAppIDs.includes(oe.appid))
                  .map((oe) =>
                    (0, t.jsx)(
                      u,
                      { nAppID: oe.appid, onClick: R.fnClickApp },
                      oe.appid,
                    ),
                  ),
              })
            );
          }),
          ve = (I) => {
            const [R, J] = G.useState(""),
              [H, Y] = G.useState(0),
              [oe, Oe] = G.useState(0),
              [be, Pe] = G.useState([]),
              de = G.useRef(H),
              re = G.useRef(null),
              ie = 300;
            G.useEffect(() => {
              de.current = H;
            }, [H]);
            const z = () => {
                Date.now() - de.current < ie || (Oe(0), Pe([]));
              },
              le = (Q) => {
                Q != R && (J(Q), Y(Date.now()), setTimeout(z, ie));
              },
              me = (Q) => {
                I.fnSelectAppID(Q), J(""), Oe(0), Pe([]), Y(Date.now());
              },
              ee = (Q) => {
                switch (Q) {
                  case "Enter": {
                    be.length > 0 && me(be[0]);
                    break;
                  }
                  case "Escape": {
                    J("");
                    break;
                  }
                }
              },
              ue = I.arrSelectedAppIDs.length >= 3;
            return (0, t.jsxs)("div", {
              className: i.AppSelector,
              children: [
                (0, t.jsx)("input", {
                  type: "text",
                  className: (0, K.A)(i.ValueInput, ue && i.Disabled),
                  value: R,
                  onChange: (Q) => le(Q.target.value),
                  onKeyDown: (Q) => ee(Q.key),
                  onBlur: (Q) => J(""),
                  placeholder: ue ? "Max three games" : "Type any game name",
                  disabled: ue,
                }),
                (0, t.jsx)(he, {
                  strSearch: R,
                  nSelectedResult: oe,
                  fnSetResultApps: Pe,
                  fnClickApp: me,
                  arrIgnoreAppIDs: I.arrSelectedAppIDs,
                  ref: re,
                }),
              ],
            });
          },
          xe = (I) => {
            const J = $().data,
              H = J?.appids ?? [];
            return (0, t.jsx)("div", {
              className: i.AppPlayedSelector,
              children: (0, t.jsx)(T.l6, {
                options: H,
                size: "1",
                selectedValue: 0,
                onSelectionChange: (Y) => I.fnSelectAppID(Y),
                getOptionLabel: (Y) =>
                  Y == 0
                    ? "Select a recent game to add it"
                    : J?.names[J?.appids.indexOf(Y)],
              }),
            });
          },
          Me = D;
      },
      67637: (te, se, a) => {
        "use strict";
        a.r(se), a.d(se, { default: () => _t });
        var t = a(7850),
          L = a(58732),
          j = a(85528),
          O = a(3166),
          E = a(14947),
          f = a(30096),
          w = a(41735),
          $ = a.n(w),
          ce = Object.defineProperty,
          X = Object.getOwnPropertyDescriptor,
          A = (c, e, r, g) => {
            for (
              var h = g > 1 ? void 0 : g ? X(e, r) : e, M = c.length - 1, C;
              M >= 0;
              M--
            )
              (C = c[M]) && (h = (g ? C(e, r, h) : C(h)) || h);
            return g && h && ce(e, r, h), h;
          };
        class b {
          rgModelNames = [];
          constructor() {
            (0, E.Gn)(this);
          }
          Init(e) {
            j.Vw.Init(e);
            const r = `${O.TS.STORE_BASE_URL}labs/ajaxgetsimilaritymodelnames`;
            $()
              .get(r)
              .then((g) => {
                if (g.data) {
                  let h = [];
                  for (const M of g.data) M != "default" && h.push(M);
                  h.sort(), (h = ["default", ...h]), (this.rgModelNames = h);
                }
              });
          }
          async ComputePathBetweenApps(e, r, g, h, M, C, ae) {
            const ge = Math.acos(g);
            let fe = async (Se) => {
                let _e = await this.GetNeighbors(Se),
                  je = [];
                for (let Ee = 0; Ee < _e.length; Ee++) {
                  const pe = _e[Ee];
                  if (
                    (!h || je.length > h) &&
                    (pe.cost > ge || (M && je.length >= M))
                  )
                    break;
                  je.push(pe);
                }
                return je;
              },
              Ce = await new T(
                fe,
                this.EstimateCosts,
                (Se, _e) => Se == _e,
                ae,
              ).FindPath(e, r, C || 10);
            if (Ce.path) {
              let Se = [],
                _e = 0;
              for (let je = 0; je < Ce.path.length; je++) {
                const Ee = Ce.path[je],
                  pe = Ee.cost - _e;
                (_e = Ee.cost),
                  Se.push({ appid: Ee.node, similarity: Math.cos(pe) });
              }
              return Se;
            } else throw new Error("Unable to compute path.");
          }
          async GetNeighbors(e) {
            const r = `${O.TS.STORE_BASE_URL}labs/ajaxgetsimilarapps?appid=${e}`;
            let g = await $().get(r),
              h = [];
            if (g.data && g.data.appid == e)
              for (let M = 0; M < g.data.similar_appids.length; M++)
                h.push({
                  node: g.data.similar_appids[M],
                  cost: Math.acos(g.data.similarity_scores[M]),
                });
            return h;
          }
          async EstimateCosts(e, r) {
            const g = `${O.TS.STORE_BASE_URL}labs/ajaxgetappsimilarities?appidtarget=${r}&${e.map((M) => "appid[]=" + M.toString()).join("&")}`;
            let h = await $().get(g);
            if (h.data && h.data.similarity_scores)
              return h.data.similarity_scores.map((M) =>
                Math.acos(parseFloat(M)),
              );
            throw new Error("Unable to fetch cost estimates");
          }
        }
        A([E.sH], b.prototype, "rgModelNames", 2),
          A([f.oI], b.prototype, "GetNeighbors", 1),
          A([f.oI], b.prototype, "EstimateCosts", 1);
        class U {
          m_fnCompare;
          m_Heap = [];
          m_Length = 0;
          constructor(e) {
            this.m_fnCompare = e;
          }
          get length() {
            return this.m_Length;
          }
          Clear() {
            (this.m_Heap = []), (this.m_Length = 0);
          }
          Peek() {
            if (this.m_Length > 0) return this.m_Heap[0];
          }
          Pop() {
            if (this.m_Length != 0) {
              const e = this.m_Heap[0];
              return (
                (this.m_Heap[0] = this.m_Heap[this.m_Length - 1]),
                this.m_Length--,
                this.BubbleDown(),
                e
              );
            }
          }
          Push(e) {
            this.m_Heap.length == this.m_Length
              ? this.m_Heap.push(e)
              : (this.m_Heap[this.m_Length] = e),
              this.m_Length++,
              this.BubbleUp();
          }
          FindElement(e) {
            for (let r = 0; r < this.m_Length; r++)
              if (e(this.m_Heap[r]))
                return { index: r, element: this.m_Heap[r] };
          }
          LowerPriorityOfElement(e, r) {
            (this.m_Heap[e] = r), this.BubbleUp(e);
          }
          BubbleDown() {
            let e = 0;
            do {
              const r = e * 2 + 1,
                g = e * 2 + 2;
              let h = e;
              if (
                (r < this.m_Length &&
                  this.m_fnCompare(this.m_Heap[h], this.m_Heap[r]) > 0 &&
                  (h = r),
                g < this.m_Length &&
                  this.m_fnCompare(this.m_Heap[h], this.m_Heap[g]) > 0 &&
                  (h = g),
                h != e)
              ) {
                const M = this.m_Heap[e];
                (this.m_Heap[e] = this.m_Heap[h]),
                  (this.m_Heap[h] = M),
                  (e = h);
              } else break;
            } while (e < this.m_Length);
          }
          BubbleUp(e) {
            let r = e || this.m_Length - 1;
            for (; r > 0; ) {
              const g = (r - 1) >> 1;
              if (this.m_fnCompare(this.m_Heap[g], this.m_Heap[r]) > 0) {
                const h = this.m_Heap[g];
                (this.m_Heap[g] = this.m_Heap[r]),
                  (this.m_Heap[r] = h),
                  (r = g);
              } else break;
            }
          }
        }
        class T {
          m_fnGetNeighbors;
          m_fnEstimateCosts;
          m_fnEquality;
          m_fnIterationCallback;
          constructor(e, r, g, h) {
            (this.m_fnGetNeighbors = e),
              (this.m_fnEstimateCosts = r),
              (this.m_fnEquality = g),
              (this.m_fnIterationCallback = h);
          }
          async FindPath(e, r, g) {
            let h = new U((Ce, Se) => Ce.cost - Se.cost),
              M = new Set();
            h.Push({ node: e, cost: 0 });
            let C = new Map(),
              ae = new Map(),
              ge = new Map(),
              fe = (await this.m_fnEstimateCosts([e], r))[0];
            C.set(e, fe), ae.set(e, 0);
            let we = 0;
            for (; h.length > 0 && we < g; ) {
              let Ce = h.Pop();
              if (this.m_fnEquality(Ce.node, r)) {
                let _e = [],
                  je = Ce.node;
                for (; ge.has(je); ) _e.push(je), (je = ge.get(je));
                let Ee = [];
                for (let pe = _e.length - 1; pe >= 0; pe--)
                  Ee.push({ node: _e[pe], cost: ae.get(_e[pe]) });
                return { path: Ee };
              }
              M.add(Ce.node);
              let Se = await this.m_fnGetNeighbors(Ce.node);
              if (Se.length > 0) {
                let _e = await this.m_fnEstimateCosts(
                  Se.map((Ee) => Ee.node),
                  r,
                );
                if (_e.length != Se.length)
                  return (
                    console.warn(
                      "Failed to fetch expected number of cost estimates. Failing pathfinding.",
                    ),
                    {}
                  );
                let je = ae.get(Ce.node);
                for (let Ee = 0; Ee < Se.length; Ee++) {
                  const pe = Se[Ee];
                  let Be = je + pe.cost;
                  if (
                    (!ae.has(pe.node) || Be < ae.get(pe.node)) &&
                    (ge.set(pe.node, Ce.node),
                    ae.set(pe.node, Be),
                    C.set(pe.node, pe.cost + _e[Ee]),
                    !M.has(pe.node))
                  ) {
                    const Ke = pe.cost + _e[Ee];
                    let Je = h.FindElement((Et) => Et.node == pe.node);
                    Je
                      ? Je.element.cost > Ke &&
                        h.LowerPriorityOfElement(Je.index, {
                          node: pe.node,
                          cost: Ke,
                        })
                      : h.Push({ node: pe.node, cost: Ke });
                  }
                }
              }
              we++, this.m_fnIterationCallback && this.m_fnIterationCallback();
            }
            throw new Error("No path found.");
          }
        }
        const G = new b();
        window.g_LabsSandbox = G;
        var B = a(90626),
          q = a(17083),
          K = a(92757),
          v = a(62139),
          i = a(16412),
          S = a(32093),
          d = a(75844),
          n = a(36707),
          s = Object.defineProperty,
          o = Object.getOwnPropertyDescriptor,
          l = (c, e, r, g) => {
            for (
              var h = g > 1 ? void 0 : g ? o(e, r) : e, M = c.length - 1, C;
              M >= 0;
              M--
            )
              (C = c[M]) && (h = (g ? C(e, r, h) : C(h)) || h);
            return g && h && s(e, r, h), h;
          };
        class m extends B.Component {
          state = {
            appid: 0,
            appinfo: null,
            mode: "display",
            strSearch: "",
            rgSuggestions: [],
          };
          m_currentRequest = 0;
          constructor(e) {
            super(e),
              this.props.appidInitial &&
                (j.Vw.EnsureAppInfoForAppIDs([this.props.appidInitial]).then(
                  () => {
                    const r = j.Vw.GetAppInfo(this.props.appidInitial);
                    this.setState({
                      appid: this.props.appidInitial,
                      appinfo: j.Vw.GetAppInfo(this.props.appidInitial),
                    });
                  },
                ),
                (this.state.appid = this.props.appidInitial));
          }
          OnDisplayClicked() {
            this.setState({ mode: "select" });
          }
          async UpdateAppSuggestions(e) {
            const r = e.target.value && e.target.value.trim();
            if (!r?.length) {
              this.setState({ strSearch: "", rgSuggestions: null });
              return;
            }
            window.clearTimeout(this.m_currentRequest),
              (this.m_currentRequest = window.setTimeout(async () => {
                const g = {
                    cc: O.TS.COUNTRY,
                    l: O.TS.LANGUAGE,
                    realm: S.TU.k_ESteamRealmGlobal,
                    origin: self.origin,
                    f: "jsonfull",
                    term: r.replace(" ", "+"),
                    require_type: "game",
                    excluded_tags: [],
                    excluded_content_descriptors: [],
                  },
                  h = `${O.TS.STORE_BASE_URL}search/suggest`,
                  M = await $().get(h, { params: g, withCredentials: !0 });
                let C;
                M?.data?.length
                  ? (C = M.data.map((ae) =>
                      (0, t.jsxs)(
                        "div",
                        {
                          className: v.Suggestion,
                          onClickCapture: () =>
                            this.SetSelectedApp(parseInt(ae.id)),
                          children: [
                            (0, t.jsx)("img", {
                              src: ae.img,
                              className: v.LogoImage,
                            }),
                            (0, t.jsx)("div", {
                              className: v.AppName,
                              children:
                                ae.name +
                                (this.props.showAppIds ? ` (${ae.id})` : ""),
                            }),
                          ],
                        },
                        `suggestion-${ae.id}`,
                      ),
                    ))
                  : (C = []),
                  this.setState({ strSearch: r, rgSuggestions: C });
              }, 250));
          }
          SetSelectedApp(e) {
            e && e != 0
              ? j.Vw.EnsureAppInfoForAppIDs([e]).then(() => {
                  const r = j.Vw.GetAppInfo(e);
                  this.setState({
                    appid: e,
                    appinfo: j.Vw.GetAppInfo(e),
                    mode: "display",
                  }),
                    this.props.fnOnSelection &&
                      this.props.fnOnSelection(e, this);
                })
              : this.setState({ appid: 0, appinfo: null, mode: "display" });
          }
          OnKeyUp(e) {
            e.keyCode == 27 && this.setState({ mode: "display" });
          }
          render() {
            const e = this.props.classOverride ?? v.AppSelector;
            let r = null;
            const g = (0, t.jsx)(i.pd, {
              type: "text",
              onChange: this.UpdateAppSuggestions,
            });
            if (this.state.mode == "display") {
              const h = this.state.appinfo
                ? this.state.appinfo.name +
                  (this.props.showAppIds ? ` (${this.state.appid})` : "")
                : (this.props.strPrompt ?? "Select game");
              r = (0, t.jsx)("div", {
                className: v.AppDisplay,
                children: (0, t.jsx)("div", {
                  className: v.AppName,
                  children: h,
                }),
              });
            } else if (this.state.mode == "select") {
              const h = this.state.strSearch.length > 0;
              r = (0, t.jsxs)("div", {
                className: v.AppSelect,
                children: [
                  g,
                  h &&
                    (0, t.jsx)("div", {
                      className: v.Suggestions,
                      children: this.state.rgSuggestions,
                    }),
                ],
              });
            }
            return (0, t.jsx)("div", {
              className: e,
              onClick: this.OnDisplayClicked,
              onKeyUpCapture: this.OnKeyUp,
              children: r,
            });
          }
        }
        l([f.oI], m.prototype, "OnDisplayClicked", 1),
          l([f.oI], m.prototype, "UpdateAppSuggestions", 1),
          l([f.oI], m.prototype, "OnKeyUp", 1);
        class x extends B.Component {
          render() {
            if (this.props.appid == 0)
              return (0, t.jsx)("div", { className: v.SimilarApp });
            {
              const e = j.Vw.GetAppInfo(this.props.appid);
              if (!e || !e.is_valid)
                return (0, t.jsx)("div", { className: v.SimilarApp });
              let r = [];
              if (this.props.score) {
                r.push(
                  (0, t.jsx)("div", { className: v.Spacer }, "score-spacer"),
                );
                const M = Math.round(this.props.score * 100).toString() + "%";
                r.push(
                  (0, t.jsx)(
                    "div",
                    { className: v.Score, children: M },
                    "score-value",
                  ),
                );
              }
              const g = e.name + " (" + this.props.appid.toString() + ")",
                h = this.props.fnOnSelected
                  ? this.props.fnOnSelected
                  : (M) => {};
              return (0, t.jsxs)("div", {
                className: v.SimilarApp,
                onClick: () => h(this.props.appid),
                children: [
                  (0, t.jsx)("div", { className: v.AppName, children: g }),
                  r,
                ],
              });
            }
          }
        }
        class p extends B.Component {
          state = {};
          ref_app_a = B.createRef();
          ref_app_b = B.createRef();
          componentDidMount() {
            this.OnAppSelected();
          }
          OnAppSelected() {
            if (
              this.ref_app_a.current &&
              this.ref_app_b.current &&
              this.ref_app_a.current.state.appid &&
              this.ref_app_b.current.state.appid
            ) {
              const e = this.ref_app_a.current.state.appid,
                r = this.ref_app_b.current.state.appid,
                g = `${O.TS.STORE_BASE_URL}labs/ajaxgetappsimilarities?appidtarget=${e}&appid[]=${r}`;
              $()
                .get(g)
                .then((h) => {
                  h.data && h.data.similarity_scores
                    ? this.setState({ score: h.data.similarity_scores[0] })
                    : this.setState({ score: null });
                });
            }
          }
          render() {
            const e = this.state.score
              ? (this.state.score * 100).toFixed(1) + "%"
              : "";
            return (0, t.jsxs)("div", {
              className: v.LabsSimilarity,
              children: [
                (0, t.jsx)(
                  m,
                  {
                    fnOnSelection: this.OnAppSelected,
                    ref: this.ref_app_a,
                    showAppIds: !0,
                    appidInitial: 268500,
                  },
                  "similar_app_a",
                ),
                (0, t.jsx)("div", { className: v.HorizontalSpacer }),
                (0, t.jsx)("div", { className: v.Score, children: e }),
                (0, t.jsx)("div", { className: v.HorizontalSpacer }),
                (0, t.jsx)(
                  m,
                  {
                    fnOnSelection: this.OnAppSelected,
                    ref: this.ref_app_b,
                    showAppIds: !0,
                    appidInitial: 200510,
                  },
                  "similar_app_b",
                ),
              ],
            });
          }
        }
        l([f.oI], p.prototype, "OnAppSelected", 1);
        let _ = class extends B.Component {
          selected_app = 0;
          similar_apps = [];
          similarity_scores = [];
          similarity_model = "default";
          app_selector_ref = B.createRef();
          constructor(c) {
            super(c),
              (0, E.Gn)(this),
              c.default_app && this.SetSelectedApp(c.default_app);
          }
          componentDidMount() {
            this.app_selector_ref.current &&
              this.SetSelectedApp(this.app_selector_ref.current.state.appid);
          }
          OnSelectedApp(c) {
            c && this.SetSelectedApp(c);
          }
          SetSelectedApp(c, e) {
            if (e || c != this.selected_app) {
              (this.similar_apps = []),
                (this.selected_app = c),
                this.app_selector_ref.current &&
                  this.app_selector_ref.current.SetSelectedApp(c);
              const r = `${O.TS.STORE_BASE_URL}labs/ajaxgetsimilarapps?appid=${c}&model=${this.similarity_model}`;
              $()
                .get(r)
                .then((g) => {
                  if (g.data && g.data.appid == this.selected_app) {
                    let h = new Set(
                      g.data.similar_appids.slice(0, this.props.max_similar),
                    );
                    h.add(g.data.appid),
                      j.Vw.EnsureAppInfoForAppIDs(h).then(() => {
                        (this.similar_apps = g.data.similar_appids),
                          (this.similarity_scores = g.data.similarity_scores);
                      });
                  }
                });
            }
          }
          OnModelChanged(c, e) {
            (this.similarity_model = c.data),
              this.SetSelectedApp(this.selected_app, !0);
          }
          render() {
            let c = [],
              e;
            const r = Math.min(
              this.similar_apps.length,
              this.similarity_scores.length,
              this.props.max_similar,
            );
            for (e = 0; e < r; e++) {
              const h = this.similar_apps[e],
                M = this.similarity_scores[e];
              c.push(
                (0, t.jsx)(
                  x,
                  { appid: h, score: M, fnOnSelected: this.SetSelectedApp },
                  h,
                ),
              );
            }
            let g = [];
            for (const h of G.rgModelNames) {
              let M = { label: (0, t.jsx)("div", { children: h }, h), data: h };
              g.push(M);
            }
            return (0, t.jsxs)("div", {
              className: v.LabsSimilarGames,
              children: [
                (0, t.jsx)(i.m, {
                  rgOptions: g,
                  onChange: this.OnModelChanged,
                  selectedOption: "default",
                }),
                (0, t.jsx)("h1", { children: "Games similar to:" }),
                (0, t.jsx)(m, {
                  fnOnSelection: this.OnSelectedApp,
                  ref: this.app_selector_ref,
                  appidInitial: 268500,
                  showAppIds: !0,
                }),
                (0, t.jsx)("div", { className: v.SimilarApps, children: c }),
              ],
            });
          }
        };
        l([E.sH], _.prototype, "selected_app", 2),
          l([E.sH], _.prototype, "similar_apps", 2),
          l([E.sH], _.prototype, "similarity_scores", 2),
          l([E.sH], _.prototype, "similarity_model", 2),
          l([f.oI], _.prototype, "OnSelectedApp", 1),
          l([f.oI], _.prototype, "SetSelectedApp", 1),
          l([f.oI], _.prototype, "OnModelChanged", 1),
          (_ = l([d.PA], _));
        let D = class extends B.Component {
          selected_app = void 0;
          selected_operator = void 0;
          constructor(c) {
            super(c),
              (0, E.Gn)(this),
              (this.selected_app = c.app),
              (this.selected_operator = c.operator);
          }
          OnSelectedApp(c) {
            c &&
              c != this.selected_app &&
              ((this.selected_app = c),
              this.props.fnOnChange && this.props.fnOnChange());
          }
          OnSelectedOperator(c, e) {
            (this.selected_operator = c.data),
              this.props.fnOnChange && this.props.fnOnChange();
          }
          render() {
            let c = [
              {
                label: (0, t.jsx)("div", { children: "Plus" }, "Plus"),
                data: "Plus",
              },
              {
                label: (0, t.jsx)("div", { children: "Minus" }, "Minus"),
                data: "Minus",
              },
            ];
            return (0, t.jsxs)("div", {
              className: v.Operand,
              children: [
                (0, t.jsx)("div", {
                  className: v.OperatorSelect,
                  children: (0, t.jsx)(i.m, {
                    rgOptions: c,
                    onChange: this.OnSelectedOperator,
                    selectedOption: "Plus",
                  }),
                }),
                (0, t.jsx)(m, { fnOnSelection: this.OnSelectedApp }),
              ],
            });
          }
        };
        l([E.sH], D.prototype, "selected_app", 2),
          l([E.sH], D.prototype, "selected_operator", 2),
          l([f.oI], D.prototype, "OnSelectedApp", 1),
          l([f.oI], D.prototype, "OnSelectedOperator", 1),
          (D = l([d.PA], D));
        let P = class extends B.Component {
          operands = [];
          similarity_model = "default";
          similar_apps = [];
          similarity_scores = [];
          operand_refs;
          constructor(c) {
            super(c), (0, E.Gn)(this), (this.operand_refs = []);
            for (let e = 0; e < c.max_operands; e++)
              this.operand_refs.push(B.createRef());
          }
          OnModelChanged(c, e) {
            (this.similarity_model = c.data), this.RecomputeExpression();
          }
          OnAddOperand() {
            this.operands.length < this.props.max_operands &&
              this.operands.push({
                app: 0,
                operator: this.operands.length > 0 ? "Plus" : void 0,
              });
          }
          OnOperandChanged() {
            for (let c = 0; c < this.operands.length; c++) {
              const e = this.operand_refs[c].current;
              (this.operands[c].app = e.selected_app),
                (this.operands[c].operator = e.selected_operator);
            }
            this.RecomputeExpression();
          }
          RecomputeExpression() {
            if (this.operands.length == 0) return;
            const c = this.operands.map((r) => "appid[]=" + r.app.toString()),
              e = `${O.TS.STORE_BASE_URL}labs/ajaxgetappvectors?${c.join("&")}&model=${this.similarity_model}`;
            $()
              .get(e)
              .then((r) => {
                if (
                  ((this.similar_apps = []),
                  (this.similarity_scores = []),
                  r.data && r.data.length == this.operands.length)
                ) {
                  let g = r.data[0].components.map((C) => parseFloat(C));
                  for (let C = 1; C < this.operands.length; C++) {
                    const ae = r.data[C].components.map((ge) => parseFloat(ge));
                    this.operands[C].operator == "Plus"
                      ? (g = g.map((ge, fe) => ge + ae[fe]))
                      : this.operands[C].operator == "Minus"
                        ? (g = g.map((ge, fe) => ge - ae[fe]))
                        : console.log(
                            "Unexpected operator " + this.operands[C].operator,
                          );
                  }
                  const h = g.map((C) => C * C).reduce((C, ae) => C + ae, 0),
                    M = Math.sqrt(h);
                  if (M > 1e-4) {
                    const ae = g
                        .map((fe) => fe / M)
                        .map((fe) => "x[]=" + fe)
                        .join("&"),
                      ge = `${O.TS.STORE_BASE_URL}labs/ajaxgetmostsimilarappstovector?${ae}&model=${this.similarity_model}`;
                    $()
                      .get(ge)
                      .then((fe) => {
                        let we = new Set(
                          fe.data.similar_appids.slice(
                            0,
                            this.props.max_similar,
                          ),
                        );
                        j.Vw.EnsureAppInfoForAppIDs(we).then(() => {
                          (this.similar_apps = fe.data.similar_appids),
                            (this.similarity_scores =
                              fe.data.similarity_scores);
                        });
                      });
                  }
                }
              });
          }
          render() {
            let c = [];
            for (const C of G.rgModelNames) {
              let ae = {
                label: (0, t.jsx)("div", { children: C }, C),
                data: C,
              };
              c.push(ae);
            }
            let e = [],
              r = 0;
            for (const C of this.operands)
              e.push(
                (0, t.jsx)(
                  D,
                  {
                    app: C.app,
                    operator: C.operator,
                    fnOnChange: this.OnOperandChanged,
                    ref: this.operand_refs[r],
                  },
                  r,
                ),
              ),
                r++;
            let g = null;
            this.operands.length < this.props.max_operands &&
              (g = (0, t.jsx)("div", {
                className: v.AddOperand,
                onClick: this.OnAddOperand,
                children: "+",
              }));
            let h = [];
            const M = Math.min(
              this.similar_apps.length,
              this.similarity_scores.length,
              this.props.max_similar,
            );
            for (let C = 0; C < M; C++) {
              const ae = this.similar_apps[C],
                ge = this.similarity_scores[C];
              h.push((0, t.jsx)(x, { appid: ae, score: ge }, ae));
            }
            return (0, t.jsxs)("div", {
              className: v.LabsMixer,
              children: [
                (0, t.jsx)(i.m, {
                  rgOptions: c,
                  onChange: this.OnModelChanged,
                  selectedOption: "default",
                }),
                (0, t.jsx)("h1", { children: "Mixture" }),
                e,
                g,
                (0, t.jsx)("h1", { children: "Games similar to mixture" }),
                (0, t.jsx)("div", { className: v.SimilarApps, children: h }),
              ],
            });
          }
        };
        l([E.sH], P.prototype, "operands", 2),
          l([E.sH], P.prototype, "similarity_model", 2),
          l([E.sH], P.prototype, "similar_apps", 2),
          l([E.sH], P.prototype, "similarity_scores", 2),
          l([f.oI], P.prototype, "OnModelChanged", 1),
          l([f.oI], P.prototype, "OnAddOperand", 1),
          l([f.oI], P.prototype, "OnOperandChanged", 1),
          (P = l([d.PA], P));
        let y = class extends B.Component {
          constructor(c) {
            super(c), (0, E.Gn)(this);
          }
          app_start = 0;
          app_end = 0;
          in_progress = !1;
          progress_iteration = 0;
          found_path = void 0;
          IterationCallback() {
            this.progress_iteration++;
          }
          Pathfind() {
            this.in_progress ||
              ((this.in_progress = !0),
              (this.progress_iteration = 0),
              (this.found_path = void 0),
              G.ComputePathBetweenApps(
                this.app_start,
                this.app_end,
                0.75,
                3,
                10,
                200,
                this.IterationCallback,
              )
                .then((c) => {
                  (this.in_progress = !1),
                    j.Vw.EnsureAppInfoForAppIDs(c.map((e) => e.appid)).then(
                      () => {
                        this.found_path = c;
                      },
                    );
                })
                .catch((c) => {
                  console.warn(
                    "Caught pathfinding failure because: " + c.toString(),
                  ),
                    (this.in_progress = !1),
                    (this.found_path = void 0);
                }));
          }
          OnSelectedStartApp(c) {
            j.Vw.EnsureAppInfoForAppIDs([c]).then(() => {
              this.app_start = c;
            });
          }
          OnSelectedEndApp(c) {
            j.Vw.EnsureAppInfoForAppIDs([c]).then(() => {
              this.app_end = c;
            });
          }
          render() {
            const c =
                this.app_start != 0 &&
                this.app_end != 0 &&
                !this.in_progress &&
                this.app_start != this.app_end,
              e = c ? v.ComputeButton : (0, n.A)(v.ComputeButton, v.Disable);
            let r = null;
            this.in_progress
              ? (r = (0, t.jsx)("div", {
                  className: v.ProgressMessage,
                  children: "Finding path, step " + this.progress_iteration,
                }))
              : this.found_path
                ? (r = (0, t.jsx)("div", {
                    className: v.ProgressMessage,
                    children: "Found path",
                  }))
                : (r = (0, t.jsx)("div", {
                    className: v.ProgressMessage,
                    children: "No path found",
                  }));
            let g = [];
            if (this.found_path)
              for (let h = 0; h < this.found_path.length; h++) {
                const M = this.found_path[h];
                g.push(
                  (0, t.jsx)(
                    x,
                    { appid: M.appid, score: M.similarity },
                    "pathstep" + h,
                  ),
                );
              }
            return (0, t.jsxs)("div", {
              className: v.LabsPathfinder,
              children: [
                (0, t.jsxs)("div", {
                  className: v.SelectEndpoints,
                  children: [
                    (0, t.jsx)(m, {
                      fnOnSelection: this.OnSelectedStartApp,
                      strPrompt: "Select start game",
                    }),
                    (0, t.jsx)(m, {
                      fnOnSelection: this.OnSelectedEndApp,
                      strPrompt: "Select end game",
                    }),
                  ],
                }),
                (0, t.jsx)("div", {
                  className: e,
                  onClick: c ? this.Pathfind : () => {},
                  children: "Pathfind!",
                }),
                r,
                (0, t.jsx)("div", { className: v.Path, children: g }),
              ],
            });
          }
        };
        l([E.sH], y.prototype, "app_start", 2),
          l([E.sH], y.prototype, "app_end", 2),
          l([E.sH], y.prototype, "in_progress", 2),
          l([E.sH], y.prototype, "progress_iteration", 2),
          l([E.sH], y.prototype, "found_path", 2),
          l([f.oI], y.prototype, "IterationCallback", 1),
          l([f.oI], y.prototype, "Pathfind", 1),
          l([f.oI], y.prototype, "OnSelectedStartApp", 1),
          l([f.oI], y.prototype, "OnSelectedEndApp", 1),
          (y = l([d.PA], y));
        function k() {
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)("h1", { children: "Similar Games" }),
              (0, t.jsx)(_, { max_similar: 10 }),
              (0, t.jsx)("div", { className: v.Spacer }),
              (0, t.jsx)("h1", { children: "Similarity" }),
              (0, t.jsx)(p, {}),
              (0, t.jsx)("div", { className: v.Spacer }),
              (0, t.jsx)("h1", { children: "Mixer" }),
              (0, t.jsx)(P, { max_similar: 10, max_operands: 6 }),
              (0, t.jsx)("div", { className: v.Spacer }),
              (0, t.jsx)("h1", { children: "Pathfinder" }),
              (0, t.jsx)(y, {}),
            ],
          });
        }
        var V = a(76559),
          W = a(8323),
          Z = a(35038),
          F = a(80613),
          N = a.n(F),
          u = a(75245),
          he = a(48156);
        const ve = 0,
          xe = 1,
          Me = 2,
          I = 3,
          R = 4,
          J = 5,
          H = 0,
          Y = 1,
          oe = 2,
          Oe = 3;
        function be(c) {
          return "unknown EStoreAppSimilarityPopularityFactor ( " + c + " )";
        }
        function Pe(c) {
          return "unknown EClustersFromPlaytimeSort ( " + c + " )";
        }
        class de extends F.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              de.prototype.tag_score_factor || u.Sg(de.M()),
              F.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              de.sm_m ||
                (de.sm_m = {
                  proto: de,
                  fields: {
                    tag_score_factor: {
                      n: 1,
                      d: 1,
                      br: u.qM.readDouble,
                      bw: u.gp.writeDouble,
                    },
                    playtime_max_seconds: {
                      n: 10,
                      d: 36e4,
                      br: u.qM.readInt32,
                      bw: u.gp.writeInt32,
                    },
                    playtime_max_games: {
                      n: 11,
                      d: 3,
                      br: u.qM.readInt32,
                      bw: u.gp.writeInt32,
                    },
                    playtime_score_factor: {
                      n: 12,
                      d: 0.9,
                      br: u.qM.readDouble,
                      bw: u.gp.writeDouble,
                    },
                    popularity_factor: {
                      n: 20,
                      d: J,
                      br: u.qM.readEnum,
                      bw: u.gp.writeEnum,
                    },
                    popularity_reciprocal: {
                      n: 21,
                      d: 1e4,
                      br: u.qM.readInt32,
                      bw: u.gp.writeInt32,
                    },
                    popularity_base_score: {
                      n: 22,
                      d: "5000000",
                      br: u.qM.readInt64String,
                      bw: u.gp.writeInt64String,
                    },
                    played_since: {
                      n: 23,
                      br: u.qM.readUint32,
                      bw: u.gp.writeUint32,
                    },
                  },
                }),
              de.sm_m
            );
          }
          static MBF() {
            return de.sm_mbf || (de.sm_mbf = u.w0(de.M())), de.sm_mbf;
          }
          toObject(e = !1) {
            return de.toObject(e, this);
          }
          static toObject(e, r) {
            return u.BT(de.M(), e, r);
          }
          static fromObject(e) {
            return u.Uq(de.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (N().BinaryReader)(e),
              g = new de();
            return de.deserializeBinaryFromReader(g, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return u.zj(de.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (N().BinaryWriter)();
            return de.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            u.i0(de.M(), e, r);
          }
          serializeBase64String() {
            var e = new (N().BinaryWriter)();
            return (
              de.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "StoreAppSimilarityPriorityOptions";
          }
        }
        class re extends F.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              re.prototype.steamid || u.Sg(re.M()),
              F.Message.initialize(this, e, 0, -1, [3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              re.sm_m ||
                (re.sm_m = {
                  proto: re,
                  fields: {
                    steamid: {
                      n: 1,
                      br: u.qM.readFixed64String,
                      bw: u.gp.writeFixed64String,
                    },
                    country_code: {
                      n: 2,
                      br: u.qM.readString,
                      bw: u.gp.writeString,
                    },
                    ids: { n: 3, c: he.O4, r: !0, q: !0 },
                    options: { n: 4, c: de },
                    debug: { n: 5, br: u.qM.readBool, bw: u.gp.writeBool },
                    include_owned_games: {
                      n: 6,
                      br: u.qM.readBool,
                      bw: u.gp.writeBool,
                    },
                  },
                }),
              re.sm_m
            );
          }
          static MBF() {
            return re.sm_mbf || (re.sm_mbf = u.w0(re.M())), re.sm_mbf;
          }
          toObject(e = !1) {
            return re.toObject(e, this);
          }
          static toObject(e, r) {
            return u.BT(re.M(), e, r);
          }
          static fromObject(e) {
            return u.Uq(re.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (N().BinaryReader)(e),
              g = new re();
            return re.deserializeBinaryFromReader(g, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return u.zj(re.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (N().BinaryWriter)();
            return re.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            u.i0(re.M(), e, r);
          }
          serializeBase64String() {
            var e = new (N().BinaryWriter)();
            return (
              re.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreAppSimilarity_PrioritizeAppsForUser_Request";
          }
        }
        class ie extends F.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ie.prototype.items || u.Sg(ie.M()),
              F.Message.initialize(this, e, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ie.sm_m ||
                (ie.sm_m = {
                  proto: ie,
                  fields: { items: { n: 1, c: z, r: !0, q: !0 } },
                }),
              ie.sm_m
            );
          }
          static MBF() {
            return ie.sm_mbf || (ie.sm_mbf = u.w0(ie.M())), ie.sm_mbf;
          }
          toObject(e = !1) {
            return ie.toObject(e, this);
          }
          static toObject(e, r) {
            return u.BT(ie.M(), e, r);
          }
          static fromObject(e) {
            return u.Uq(ie.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (N().BinaryReader)(e),
              g = new ie();
            return ie.deserializeBinaryFromReader(g, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return u.zj(ie.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (N().BinaryWriter)();
            return ie.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            u.i0(ie.M(), e, r);
          }
          serializeBase64String() {
            var e = new (N().BinaryWriter)();
            return (
              ie.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreAppSimilarity_PrioritizeAppsForUser_Response";
          }
        }
        class z extends F.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              z.prototype.id || u.Sg(z.M()),
              F.Message.initialize(this, e, 0, -1, [50], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              z.sm_m ||
                (z.sm_m = {
                  proto: z,
                  fields: {
                    id: { n: 1, c: he.O4 },
                    already_owned: {
                      n: 2,
                      br: u.qM.readBool,
                      bw: u.gp.writeBool,
                    },
                    weight: { n: 3, br: u.qM.readDouble, bw: u.gp.writeDouble },
                    weight_before_dedupe: {
                      n: 4,
                      br: u.qM.readDouble,
                      bw: u.gp.writeDouble,
                    },
                    debug_matches: { n: 50, c: le, r: !0, q: !0 },
                    debug_popularity: { n: 51, c: me },
                  },
                }),
              z.sm_m
            );
          }
          static MBF() {
            return z.sm_mbf || (z.sm_mbf = u.w0(z.M())), z.sm_mbf;
          }
          toObject(e = !1) {
            return z.toObject(e, this);
          }
          static toObject(e, r) {
            return u.BT(z.M(), e, r);
          }
          static fromObject(e) {
            return u.Uq(z.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (N().BinaryReader)(e),
              g = new z();
            return z.deserializeBinaryFromReader(g, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return u.zj(z.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (N().BinaryWriter)();
            return z.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            u.i0(z.M(), e, r);
          }
          serializeBase64String() {
            var e = new (N().BinaryWriter)();
            return (
              z.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreAppSimilarity_PrioritizeAppsForUser_Response_ResultItem";
          }
        }
        class le extends F.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              le.prototype.source_app || u.Sg(le.M()),
              F.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              le.sm_m ||
                (le.sm_m = {
                  proto: le,
                  fields: {
                    source_app: {
                      n: 1,
                      br: u.qM.readInt32,
                      bw: u.gp.writeInt32,
                    },
                    weight: { n: 2, br: u.qM.readDouble, bw: u.gp.writeDouble },
                    similarity: {
                      n: 3,
                      br: u.qM.readDouble,
                      bw: u.gp.writeDouble,
                    },
                  },
                }),
              le.sm_m
            );
          }
          static MBF() {
            return le.sm_mbf || (le.sm_mbf = u.w0(le.M())), le.sm_mbf;
          }
          toObject(e = !1) {
            return le.toObject(e, this);
          }
          static toObject(e, r) {
            return u.BT(le.M(), e, r);
          }
          static fromObject(e) {
            return u.Uq(le.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (N().BinaryReader)(e),
              g = new le();
            return le.deserializeBinaryFromReader(g, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return u.zj(le.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (N().BinaryWriter)();
            return le.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            u.i0(le.M(), e, r);
          }
          serializeBase64String() {
            var e = new (N().BinaryWriter)();
            return (
              le.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreAppSimilarity_PrioritizeAppsForUser_Response_ResultItem_MatchDebugInfo";
          }
        }
        class me extends F.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              me.prototype.rank || u.Sg(me.M()),
              F.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              me.sm_m ||
                (me.sm_m = {
                  proto: me,
                  fields: {
                    rank: { n: 1, br: u.qM.readUint32, bw: u.gp.writeUint32 },
                    popularity_factor: {
                      n: 2,
                      br: u.qM.readDouble,
                      bw: u.gp.writeDouble,
                    },
                    weight_before_popularity: {
                      n: 3,
                      br: u.qM.readDouble,
                      bw: u.gp.writeDouble,
                    },
                  },
                }),
              me.sm_m
            );
          }
          static MBF() {
            return me.sm_mbf || (me.sm_mbf = u.w0(me.M())), me.sm_mbf;
          }
          toObject(e = !1) {
            return me.toObject(e, this);
          }
          static toObject(e, r) {
            return u.BT(me.M(), e, r);
          }
          static fromObject(e) {
            return u.Uq(me.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (N().BinaryReader)(e),
              g = new me();
            return me.deserializeBinaryFromReader(g, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return u.zj(me.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (N().BinaryWriter)();
            return me.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            u.i0(me.M(), e, r);
          }
          serializeBase64String() {
            var e = new (N().BinaryWriter)();
            return (
              me.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreAppSimilarity_PrioritizeAppsForUser_Response_ResultItem_PopularityDebugInfo";
          }
        }
        class ee extends F.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ee.prototype.steamid || u.Sg(ee.M()),
              F.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ee.sm_m ||
                (ee.sm_m = {
                  proto: ee,
                  fields: {
                    steamid: {
                      n: 1,
                      br: u.qM.readFixed64String,
                      bw: u.gp.writeFixed64String,
                    },
                    sort: { n: 2, d: Y, br: u.qM.readEnum, bw: u.gp.writeEnum },
                    clusters_to_return: {
                      n: 3,
                      br: u.qM.readInt32,
                      bw: u.gp.writeInt32,
                    },
                    cluster_index: {
                      n: 4,
                      br: u.qM.readInt32,
                      bw: u.gp.writeInt32,
                    },
                    context: { n: 10, c: he.TS },
                    data_request: { n: 11, c: he.gn },
                  },
                }),
              ee.sm_m
            );
          }
          static MBF() {
            return ee.sm_mbf || (ee.sm_mbf = u.w0(ee.M())), ee.sm_mbf;
          }
          toObject(e = !1) {
            return ee.toObject(e, this);
          }
          static toObject(e, r) {
            return u.BT(ee.M(), e, r);
          }
          static fromObject(e) {
            return u.Uq(ee.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (N().BinaryReader)(e),
              g = new ee();
            return ee.deserializeBinaryFromReader(g, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return u.zj(ee.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (N().BinaryWriter)();
            return ee.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            u.i0(ee.M(), e, r);
          }
          serializeBase64String() {
            var e = new (N().BinaryWriter)();
            return (
              ee.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreAppSimilarity_IdentifyClustersFromPlaytime_Request";
          }
        }
        class ue extends F.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ue.prototype.clusters || u.Sg(ue.M()),
              F.Message.initialize(this, e, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ue.sm_m ||
                (ue.sm_m = {
                  proto: ue,
                  fields: { clusters: { n: 1, c: Q, r: !0, q: !0 } },
                }),
              ue.sm_m
            );
          }
          static MBF() {
            return ue.sm_mbf || (ue.sm_mbf = u.w0(ue.M())), ue.sm_mbf;
          }
          toObject(e = !1) {
            return ue.toObject(e, this);
          }
          static toObject(e, r) {
            return u.BT(ue.M(), e, r);
          }
          static fromObject(e) {
            return u.Uq(ue.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (N().BinaryReader)(e),
              g = new ue();
            return ue.deserializeBinaryFromReader(g, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return u.zj(ue.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (N().BinaryWriter)();
            return ue.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            u.i0(ue.M(), e, r);
          }
          serializeBase64String() {
            var e = new (N().BinaryWriter)();
            return (
              ue.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreAppSimilarity_IdentifyClustersFromPlaytime_Response";
          }
        }
        class Q extends F.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Q.prototype.cluster_id || u.Sg(Q.M()),
              F.Message.initialize(this, e, 0, -1, [5, 6, 7], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Q.sm_m ||
                (Q.sm_m = {
                  proto: Q,
                  fields: {
                    cluster_id: {
                      n: 1,
                      br: u.qM.readInt32,
                      bw: u.gp.writeInt32,
                    },
                    playtime_forever: {
                      n: 2,
                      br: u.qM.readInt32,
                      bw: u.gp.writeInt32,
                    },
                    playtime_2weeks: {
                      n: 3,
                      br: u.qM.readInt32,
                      bw: u.gp.writeInt32,
                    },
                    last_played: {
                      n: 4,
                      br: u.qM.readUint32,
                      bw: u.gp.writeUint32,
                    },
                    played_appids: {
                      n: 5,
                      r: !0,
                      q: !0,
                      br: u.qM.readInt32,
                      pbr: u.qM.readPackedInt32,
                      bw: u.gp.writeRepeatedInt32,
                    },
                    similar_items_appids: {
                      n: 6,
                      r: !0,
                      q: !0,
                      br: u.qM.readInt32,
                      pbr: u.qM.readPackedInt32,
                      bw: u.gp.writeRepeatedInt32,
                    },
                    similar_items: { n: 7, c: he.vB, r: !0, q: !0 },
                    similar_item_popularity_score: {
                      n: 8,
                      br: u.qM.readDouble,
                      bw: u.gp.writeDouble,
                    },
                  },
                }),
              Q.sm_m
            );
          }
          static MBF() {
            return Q.sm_mbf || (Q.sm_mbf = u.w0(Q.M())), Q.sm_mbf;
          }
          toObject(e = !1) {
            return Q.toObject(e, this);
          }
          static toObject(e, r) {
            return u.BT(Q.M(), e, r);
          }
          static fromObject(e) {
            return u.Uq(Q.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (N().BinaryReader)(e),
              g = new Q();
            return Q.deserializeBinaryFromReader(g, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return u.zj(Q.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (N().BinaryWriter)();
            return Q.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            u.i0(Q.M(), e, r);
          }
          serializeBase64String() {
            var e = new (N().BinaryWriter)();
            return (
              Q.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreAppSimilarity_IdentifyClustersFromPlaytime_Response_Cluster";
          }
        }
        var He;
        ((c) => {
          function e(g, h, M) {
            return g.SendMsg(
              "StoreAppSimilarity.PrioritizeAppsForUser#1",
              (0, Z.I8)(re, h, M),
              ie,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 2 },
            );
          }
          c.PrioritizeAppsForUser = e;
          function r(g, h, M) {
            return g.SendMsg(
              "StoreAppSimilarity.IdentifyClustersFromPlaytime#1",
              (0, Z.I8)(ee, h, M),
              ue,
              { ePrivilege: 2, eWebAPIKeyRequirement: 2 },
            );
          }
          c.IdentifyClustersFromPlaytime = r;
        })(He || (He = {}));
        var Ne = a(84192),
          Fe = a(10142);
        class ke {
          m_SteamInterface;
          constructor(e) {
            this.m_SteamInterface = e;
          }
          LoadPlaytimeClusters(e, r, g, h) {
            return new De(this.m_SteamInterface, e, r, g, h);
          }
        }
        class De {
          m_callbacksLoaded = new W.lu();
          m_rgClusters;
          constructor(e, r, g, h, M) {
            const C = Z.w.Init(ee);
            (0, Ne.rV)(C),
              M && (0, Ne.Bn)(C, M),
              C.Body().set_steamid(r || O.iA.steamid),
              h && C.Body().set_clusters_to_return(h),
              C.Body().set_sort(g),
              He.IdentifyClustersFromPlaytime(e.GetServiceTransport(), C).then(
                (ae) => {
                  const ge = ae.Body();
                  this.m_rgClusters = [];
                  for (const fe of ge.clusters())
                    this.m_rgClusters.push(this.ReadCluster(fe, M));
                  this.m_callbacksLoaded.Dispatch(this.m_rgClusters);
                },
              );
          }
          ReadCluster(e, r) {
            let g;
            return (
              r &&
                (g = e.similar_items().map((h) => Fe.A.Get().ReadItem(h, r))),
              {
                nClusterID: e.cluster_id(),
                nPlaytimeMinutes: e.playtime_forever(),
                nPlaytimeMinutes2Weeks: e.playtime_2weeks(),
                rtLastPlayed: e.last_played(),
                rgAppIDsPlayed: e.played_appids(),
                rgSimilarItems: g.filter((h) => !!h),
                rgSimilarAppIDs: e.similar_items_appids(),
                flPopularityScore: e.similar_item_popularity_score(),
              }
            );
          }
          RegisterOnReadyCallback(e) {
            const r = this.m_callbacksLoaded.Register(e);
            return (
              this.m_rgClusters !== void 0 &&
                window.setTimeout(() => e(this.m_rgClusters), 0),
              r
            );
          }
        }
        function Re(c, e, r, g = Y, h = null, M = []) {
          const [C, ae] = B.useState(null);
          return (
            B.useEffect(
              () => (
                ae(null),
                r
                  ? c
                      .LoadPlaytimeClusters(r, g, h, e)
                      .RegisterOnReadyCallback(ae).Unregister
                  : void 0
              ),
              [r, g, h, ...M],
            ),
            C
          );
        }
        var Qe = a(85599),
          Ie = a(18210),
          Ge = a(21082),
          st = a(84676),
          Ve = a(25792),
          nt = a(2259);
        function at(c) {
          const { SteamInterface: e } = c,
            r = B.useRef(void 0);
          return (
            r.current || (r.current = new ke(e)),
            (0, t.jsxs)(t.Fragment, {
              children: [
                (0, t.jsxs)("div", {
                  children: [
                    (0, t.jsx)("p", {
                      children:
                        "This data is generated by analyzing games based on similar tags, and generating clusters from that.  We then look at your playtime history to see what games are in clusters together, and suggest other popular games in those clusters.",
                    }),
                    (0, t.jsxs)("p", {
                      children: [
                        "You can also ",
                        (0, t.jsx)("a", {
                          href: "http://store-tc.k.steam.net/graph",
                          target: "_blank",
                          children: "browse the cluster data graphically",
                        }),
                        " (requires Rack VPN).",
                      ],
                    }),
                  ],
                }),
                (0, t.jsx)(rt, { SimilarityStore: r.current }),
              ],
            })
          );
        }
        const Xe = {
          [Oe]: "Total Playtime",
          [oe]: "Number of Played Games",
          [Y]: "Most Recently Played",
        };
        function rt(c) {
          const { SimilarityStore: e } = c,
            [r, g] = B.useState(O.iA.steamid),
            [h, M] = B.useState("10"),
            [C, ae] = B.useState(Y),
            ge = B.useCallback((Be) => g(Be.currentTarget.value), [g]),
            fe = B.useCallback((Be) => M(Be.currentTarget.value), [M]),
            we = B.useCallback((Be) => ae(Be.data), [ae]);
          let Ce = !1;
          const Se = B.useRef(O.iA.steamid),
            _e = r && new V.b(r);
          _e &&
            _e.BIsValid() &&
            _e.BIsIndividualAccount() &&
            ((Se.current = _e.ConvertTo64BitString()), (Ce = !0));
          let je;
          h && !isNaN(parseInt(h)) && (je = parseInt(h));
          const Ee = B.useMemo(() => {
              let Be = [];
              for (let Ke in Xe) Be.push({ data: Number(Ke), label: Xe[Ke] });
              return Be;
            }, []),
            pe = Re(
              e,
              { include_assets: !0, include_basic_info: !0 },
              Se.current,
              C,
              je,
            );
          return (0, t.jsxs)("div", {
            children: [
              (0, t.jsxs)(i.nB, {
                className: Ge.ClusterConfig,
                children: [
                  (0, t.jsx)(i.pd, {
                    label: "SteamID",
                    type: "text",
                    value: r,
                    onChange: ge,
                    description: !Ce && "Invalid SteamID",
                  }),
                  (0, t.jsx)(i.pd, {
                    label: "Clusters to return (Set to blank for all clusters)",
                    type: "text",
                    value: h,
                    onChange: fe,
                  }),
                  (0, t.jsx)(i.m, {
                    label: "Sort clusters by",
                    rgOptions: Ee,
                    selectedOption: C,
                    onChange: we,
                  }),
                ],
              }),
              Ce && !pe && (0, t.jsx)(Qe.t, {}),
              pe && (0, t.jsx)(ot, { rgPlaytimeClusters: pe }),
            ],
          });
        }
        function ot(c) {
          const { rgPlaytimeClusters: e } = c;
          return (0, t.jsx)("div", {
            children: e.map((r) =>
              (0, t.jsx)(
                Ve.tH,
                { children: (0, t.jsx)(it, { cluster: r }) },
                r.nClusterID,
              ),
            ),
          });
        }
        function it(c) {
          const { cluster: e } = c,
            [r, g] = B.useState(!1),
            h = B.useCallback(() => g(!0), [g]),
            [M, C] = B.useState(!1),
            ae = B.useCallback(() => C(!0), [C]),
            ge = (0, nt.OO)({ onEnter: ae });
          return (0, t.jsxs)("div", {
            ref: ge,
            className: Ge.PlaytimeCluster,
            children: [
              (0, t.jsxs)("div", {
                className: Ge.ClusterInfo,
                children: [
                  (0, t.jsxs)("h1", { children: ["Cluster ", e.nClusterID] }),
                  (0, t.jsx)(Ve.tH, {
                    children: (0, t.jsxs)("div", {
                      className: Ge.Overview,
                      children: [
                        (0, t.jsxs)("div", {
                          children: [
                            (0, t.jsx)("b", { children: "Total Playtime:" }),
                            " ",
                            Math.floor(e.nPlaytimeMinutes / 6) / 10,
                            "hr",
                          ],
                        }),
                        (0, t.jsxs)("div", {
                          children: [
                            (0, t.jsx)("b", { children: "Last Played:" }),
                            " ",
                            (0, Ie.$z)(e.rtLastPlayed),
                            " ",
                          ],
                        }),
                        (0, t.jsxs)("div", {
                          children: [
                            (0, t.jsx)("b", { children: "Games played:" }),
                            " ",
                            M &&
                              e.rgAppIDsPlayed.map((fe) =>
                                (0, t.jsxs)(
                                  B.Fragment,
                                  {
                                    children: [
                                      (0, t.jsx)(ct, { appid: fe }),
                                      ", ",
                                    ],
                                  },
                                  fe,
                                ),
                              ),
                          ],
                        }),
                        (0, t.jsxs)("div", {
                          children: [
                            (0, t.jsx)("b", { children: "Popularity Score:" }),
                            " ",
                            Math.floor(e.flPopularityScore * 100),
                            "% \xA0",
                            (0, t.jsx)("span", {
                              title:
                                "Based on the top four items; we might decide not to show clusters if this score is less than some threshold, maybe 90%",
                              style: { cursor: "default" },
                              children: "(?)",
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              (0, t.jsxs)("div", {
                className: Ge.ClusterMembers,
                children: [
                  (0, t.jsx)("h3", { children: "Similar titles:" }),
                  (0, t.jsx)(Ve.tH, {
                    children: (0, t.jsx)("ul", {
                      children: e.rgSimilarItems.map((fe, we) =>
                        r || we < 4
                          ? (0, t.jsx)(
                              "li",
                              { children: (0, t.jsx)(dt, { item: fe }) },
                              fe.GetUniqueID(),
                            )
                          : null,
                      ),
                    }),
                  }),
                  !r &&
                    (0, t.jsxs)(i.$n, {
                      onClick: h,
                      children: ["Show all ", e.rgSimilarItems.length],
                    }),
                ],
              }),
            ],
          });
        }
        const lt = {};
        function ct(c) {
          const { appid: e } = c,
            [r] = (0, st.t7)(e, lt);
          return r
            ? (0, t.jsx)("a", {
                className: Ge.PlayedGame,
                href: r.GetStorePageURL(),
                children: r.GetName(),
              })
            : null;
        }
        function dt(c) {
          const { item: e } = c;
          return (0, t.jsxs)("a", {
            className: Ge.SimilarTitle,
            href: e.GetStorePageURL(),
            children: [
              (0, t.jsx)("img", {
                src: e.GetAssets().GetSmallCapsuleURL(),
                loading: "lazy",
              }),
              e.GetName(),
            ],
          });
        }
        var Ye = a(36118),
          ut = a(6336),
          ne = a.n(ut),
          $e = a(73011),
          mt = a(27066),
          ht = Object.defineProperty,
          pt = Object.getOwnPropertyDescriptor,
          ye = (c, e, r, g) => {
            for (
              var h = g > 1 ? void 0 : g ? pt(e, r) : e, M = c.length - 1, C;
              M >= 0;
              M--
            )
              (C = c[M]) && (h = (g ? C(e, r, h) : C(h)) || h);
            return g && h && ht(e, r, h), h;
          };
        const qe = "-1";
        var Ae = ((c) => (
            (c[(c.Invalid = 0)] = "Invalid"),
            (c[(c.AccountName = 1)] = "AccountName"),
            (c[(c.EmailCode = 2)] = "EmailCode"),
            (c[(c.TwoFactorCode = 3)] = "TwoFactorCode"),
            (c[(c.Complete = 4)] = "Complete"),
            c
          ))(Ae || {}),
          et = ((c) => (
            (c[(c.None = 0)] = "None"),
            (c[(c.InvalidCode = 1)] = "InvalidCode"),
            c
          ))(et || {});
        class Te {
          m_strBaseURL = "";
          m_strOAuthClientID = "";
          m_fnLoginComplete = null;
          m_bRequestInFlight = !1;
          m_userFields = {
            strUserName: "",
            strPassword: "",
            strTwoFactorCode: "",
            strEmailAuthCode: "",
            emailSteamID: "",
            gidCaptcha: "",
            strCaptchaText: "",
            bRememberLogin: !1,
          };
          m_eCurrentStep = 1;
          m_strErrorMessage = "";
          m_strEmailDomain = "";
          m_strCaptchaURL = "";
          m_eSteamGuardCodeError = 0;
          constructor(e, r) {
            (0, E.Gn)(this),
              (this.m_strBaseURL = e),
              (this.m_strOAuthClientID = r ?? "");
          }
          Shutdown() {
            this.m_fnLoginComplete = null;
          }
          SetLoginCompleteCallback(e) {
            this.m_fnLoginComplete = e;
          }
          SetUserName(e) {
            this.m_userFields.strUserName = e;
          }
          GetUserName() {
            return this.m_userFields.strUserName;
          }
          SetPassword(e) {
            this.m_userFields.strPassword = e;
          }
          GetPassword() {
            return this.m_userFields.strPassword;
          }
          SetRememberPassword(e) {
            this.m_userFields.bRememberLogin = e;
          }
          GetRememberPassword() {
            return this.m_userFields.bRememberLogin;
          }
          SetEmailAuthCode(e) {
            this.m_userFields.strEmailAuthCode = e;
          }
          GetEmailAuthCode() {
            return this.m_userFields.strEmailAuthCode;
          }
          GetEmailDomain() {
            return this.m_strEmailDomain;
          }
          SetTwoFactorCode(e) {
            this.m_userFields.strTwoFactorCode = e;
          }
          GetTwoFactorCode() {
            return this.m_userFields.strTwoFactorCode;
          }
          SetCaptchaText(e) {
            this.m_userFields.strCaptchaText = e;
          }
          GetCaptchaText() {
            return this.m_userFields.strCaptchaText;
          }
          IsRequestInFlight() {
            return this.m_bRequestInFlight;
          }
          GetCurrentStep() {
            return this.m_eCurrentStep;
          }
          GetErrorMessage() {
            return this.m_strErrorMessage;
          }
          SetInitialErrorMessage(e) {
            this.m_strErrorMessage = e;
          }
          GetSteamGuardCodeError() {
            return this.m_eSteamGuardCodeError;
          }
          GetCaptchaURL() {
            return this.m_strCaptchaURL;
          }
          async DoLogin() {
            if (this.m_bRequestInFlight) return;
            (0, E.h5)(() => {
              (this.m_bRequestInFlight = !0), (this.m_strErrorMessage = "");
            });
            let e = await (0, $e.ZC)(
              this.m_strBaseURL,
              this.m_strOAuthClientID,
              this.m_userFields,
            );
            (0, E.h5)(() => {
              (this.m_bRequestInFlight = !1), this.UpdateLoginResult(e);
            });
          }
          UpdateLoginResult(e) {
            if (!e) {
              console.log("Login timeout"),
                (this.m_strErrorMessage = (0, Ie.we)(
                  "#ConnectionTrouble_FailedToConnect",
                ));
              return;
            }
            if (e.login_complete) {
              if (((this.m_eCurrentStep = 4), this.m_fnLoginComplete)) {
                let r = {
                  steamID: e.oauth ? e.oauth.steamid : "",
                  strAccountName: e.oauth ? e.oauth.account_name : "",
                  strOAuthToken: e.oauth ? e.oauth.oauth_token : "",
                };
                this.m_fnLoginComplete(r);
              }
              return;
            }
            (this.m_strErrorMessage = e.message || ""),
              (this.m_eSteamGuardCodeError = 0),
              e.requires_twofactor
                ? (this.UpdateCaptchaURL(qe),
                  this.m_eCurrentStep == 3 &&
                    !this.m_strErrorMessage &&
                    ((this.m_strErrorMessage = (0, Ie.we)(
                      "#MobileLogin_IncorrectSteamGuard",
                    )),
                    (this.m_eSteamGuardCodeError = 1),
                    (this.m_userFields.strTwoFactorCode = "")),
                  (this.m_eCurrentStep = 3))
                : e.captcha_needed && e.captcha_gid
                  ? ((this.m_eCurrentStep = 1),
                    this.UpdateCaptchaURL(e.captcha_gid))
                  : e.emailauth_needed
                    ? (e.emaildomain && (this.m_strEmailDomain = e.emaildomain),
                      e.emailsteamid &&
                        (this.m_userFields.emailSteamID = e.emailsteamid),
                      this.m_eCurrentStep == 2 &&
                        !this.m_strErrorMessage &&
                        ((this.m_strErrorMessage = (0, Ie.we)(
                          "#MobileLogin_IncorrectSteamGuard",
                        )),
                        (this.m_eSteamGuardCodeError = 1),
                        (this.m_userFields.strEmailAuthCode = "")),
                      (this.m_eCurrentStep = 2))
                    : e.agreement_session_url
                      ? (this.Shutdown(),
                        console.log(window.location.href),
                        (window.location.href =
                          e.agreement_session_url +
                          "&redir=" +
                          window.location.href))
                      : console.log("Unhandled login error");
          }
          async RefreshCaptcha() {
            let e = await (0, $e.Cr)(this.m_strBaseURL);
            if (!e) {
              console.log("Failed to get captcha");
              return;
            }
            this.UpdateCaptchaURL(e);
          }
          UpdateCaptchaURL(e) {
            if (
              ((this.m_userFields.gidCaptcha = e),
              (this.m_userFields.strCaptchaText = ""),
              e == qe)
            ) {
              this.m_strCaptchaURL = "";
              return;
            }
            this.m_strCaptchaURL = (0, $e.Ok)(this.m_strBaseURL, e);
          }
        }
        ye([E.sH], Te.prototype, "m_bRequestInFlight", 2),
          ye([E.sH], Te.prototype, "m_userFields", 2),
          ye([E.sH], Te.prototype, "m_eCurrentStep", 2),
          ye([E.sH], Te.prototype, "m_strErrorMessage", 2),
          ye([E.sH], Te.prototype, "m_strEmailDomain", 2),
          ye([E.sH], Te.prototype, "m_strCaptchaURL", 2),
          ye([E.sH], Te.prototype, "m_eSteamGuardCodeError", 2),
          ye([mt.o], Te.prototype, "DoLogin", 1),
          ye([E.XI.bound], Te.prototype, "UpdateCaptchaURL", 1);
        var ft = Object.defineProperty,
          gt = Object.getOwnPropertyDescriptor,
          Le = (c, e, r, g) => {
            for (
              var h = g > 1 ? void 0 : g ? gt(e, r) : e, M = c.length - 1, C;
              M >= 0;
              M--
            )
              (C = c[M]) && (h = (g ? C(e, r, h) : C(h)) || h);
            return g && h && ft(e, r, h), h;
          };
        let Ze = class extends B.Component {
          m_manager;
          constructor(c) {
            super(c),
              (this.m_manager = new Te(this.props.baseURL)),
              this.props.onLoginComplete &&
                this.m_manager.SetLoginCompleteCallback(
                  this.props.onLoginComplete,
                );
          }
          componentWillUnmount() {
            this.m_manager.Shutdown();
          }
          render() {
            let {
                baseURL: c,
                onLoginComplete: e,
                className: r,
                ...g
              } = this.props,
              h = (0, n.A)(ne().LoginDialog, r),
              M = this.m_manager.GetCurrentStep(),
              C = this.m_manager.GetErrorMessage();
            return (0, t.jsxs)("div", {
              className: h,
              ...g,
              children: [
                (0, t.jsx)("div", {
                  className: ne().LoginPanelBackground,
                  children: (0, t.jsx)(Ye.Qte, {}),
                }),
                (0, t.jsxs)("div", {
                  className: ne().LoginPanelContent,
                  children: [
                    C && (0, t.jsx)(vt, { text: C }),
                    M == Ae.AccountName &&
                      (0, t.jsx)(We, {
                        manager: this.m_manager,
                        autoFocus: this.props.autoFocus,
                      }),
                    M == Ae.TwoFactorCode &&
                      (0, t.jsx)(Ue, {
                        manager: this.m_manager,
                        authtype: Ae.TwoFactorCode,
                      }),
                    M == Ae.EmailCode &&
                      (0, t.jsx)(Ue, {
                        manager: this.m_manager,
                        authtype: Ae.EmailCode,
                      }),
                    M == Ae.Complete &&
                      (0, t.jsx)("div", {
                        className: ne().LoginComplete,
                        children: (0, t.jsx)(Qe.t, {}),
                      }),
                  ],
                }),
              ],
            });
          }
        };
        Ze = Le([d.PA], Ze);
        function vt(c) {
          return (0, t.jsx)("div", {
            className: ne().ErrorMessage,
            children: c.text,
          });
        }
        let We = class extends B.Component {
          constructor(c) {
            super(c), (this.state = { nNameSize: 0, nPassSize: 0 });
          }
          OnSubmit(c) {
            c.preventDefault(), this.props.manager.DoLogin();
          }
          OnChangeName(c) {
            let e = c.target.value || "";
            this.props.manager.SetUserName(c.target.value),
              e.length > 24 && e.length < 39
                ? this.setState({ nNameSize: 1 })
                : e.length > 38
                  ? this.setState({ nNameSize: 2 })
                  : this.setState({ nNameSize: 0 });
          }
          OnChangePassword(c) {
            let e = c.target.value || "";
            (e = e.replace(/[^\x00-\x7F]/g, "")),
              this.props.manager.SetPassword(e),
              e.length > 19 && e.length < 39
                ? this.setState({ nPassSize: 1 })
                : e.length > 38
                  ? this.setState({ nPassSize: 2 })
                  : this.setState({ nPassSize: 0 });
          }
          OnChangeRememberPass(c) {
            this.props.manager.SetRememberPassword(c.target.checked);
          }
          render() {
            let c = this.props.manager,
              e,
              r;
            return (
              this.state.nPassSize == 1
                ? (r = ne().MedPass)
                : this.state.nPassSize == 2
                  ? (r = ne().LargePass)
                  : (r = ne().DefaultPass),
              this.state.nNameSize == 1
                ? (e = ne().MedName)
                : this.state.nNameSize == 2
                  ? (e = ne().LargeName)
                  : (e = ne().DefaultNAme),
              (0, t.jsxs)("div", {
                className: ne().AccountPasswordPanel,
                children: [
                  (0, t.jsx)("div", {
                    className: ne().SigninTitle,
                    children: (0, Ie.we)("#Login_SignInTitle"),
                  }),
                  (0, t.jsxs)("form", {
                    className: ne().AccountPasswordForm,
                    onSubmit: this.OnSubmit,
                    children: [
                      (0, t.jsx)(i.pd, {
                        autoFocus: this.props.autoFocus,
                        className: (0, n.A)(ne().AccountNameLabel, e),
                        label: (0, Ie.we)("#Login_AccountName"),
                        type: "text",
                        value: c.GetUserName(),
                        focusOnMount: !0,
                        maxLength: 64,
                        onChange: this.OnChangeName,
                      }),
                      (0, t.jsx)(i.pd, {
                        className: (0, n.A)(ne().PasswordDots, r),
                        label: (0, Ie.we)("#Login_Password"),
                        type: "password",
                        autoComplete: "off",
                        maxLength: 64,
                        size: 64,
                        value: c.GetPassword(),
                        onChange: this.OnChangePassword,
                      }),
                      (0, t.jsx)(i.Yh, {
                        className: ne().RememberMeCheck,
                        label: (0, Ie.we)("#Login_RememberMe"),
                        disabled: !1,
                        onChange: () => this.OnChangeRememberPass,
                        checked: c.GetRememberPassword(),
                      }),
                      c.GetCaptchaURL() && (0, t.jsx)(ze, { manager: c }),
                      (0, t.jsx)(i.jn, {
                        disabled: this.props.manager.IsRequestInFlight(),
                        children: (0, Ie.we)(
                          "#Login_SignIn",
                        ).toLocaleUpperCase(),
                      }),
                    ],
                  }),
                  (0, t.jsx)("a", {
                    className: ne().NeedHelpLink,
                    href: O.TS.HELP_BASE_URL,
                    children: (0, Ie.we)("#Login_ForgotPassword"),
                  }),
                  (0, t.jsx)("div", { className: ne().LoginCreateSeperator }),
                  (0, t.jsxs)("div", {
                    className: ne().SteamUpsellContainer,
                    children: [
                      (0, t.jsx)("div", {
                        className: ne().SteamUpsell,
                        children: (0, Ie.we)("#Login_NoSteamAccount"),
                      }),
                      (0, t.jsx)("div", {
                        className: ne().CreateAccountLink,
                        children: (0, t.jsx)("a", {
                          href: `${O.TS.STORE_BASE_URL}join/`,
                          children: (0, Ie.we)("#Login_CreateAccount"),
                        }),
                      }),
                    ],
                  }),
                ],
              })
            );
          }
        };
        Le([f.oI], We.prototype, "OnSubmit", 1),
          Le([f.oI], We.prototype, "OnChangeName", 1),
          Le([f.oI], We.prototype, "OnChangePassword", 1),
          Le([f.oI], We.prototype, "OnChangeRememberPass", 1),
          (We = Le([d.PA], We));
        let ze = class extends B.Component {
          OnCaptchaText(c) {
            this.props.manager.SetCaptchaText(c.target.value);
          }
          RefreshCaptcha(c) {
            this.props.manager.RefreshCaptcha();
          }
          render() {
            let c = this.props.manager;
            return (0, t.jsxs)("div", {
              className: ne().CaptchaContainer,
              children: [
                (0, t.jsxs)("div", {
                  className: ne().CaptchaBlock,
                  children: [
                    (0, t.jsxs)("div", {
                      className: ne().CaptchaImageAndInput,
                      children: [
                        (0, t.jsx)("div", {
                          className: ne().CaptchaImageBox,
                          children: (0, t.jsx)("img", {
                            className: ne().CaptchaImage,
                            src: c.GetCaptchaURL(),
                          }),
                        }),
                        (0, t.jsx)(i.pd, {
                          className: ne().CaptchaInput,
                          type: "text",
                          autoComplete: "off",
                          maxLength: 6,
                          value: c.GetCaptchaText(),
                          onChange: this.OnCaptchaText,
                        }),
                      ],
                    }),
                    (0, t.jsx)("div", {
                      className: ne().ErrorMessage,
                      children: (0, Ie.we)("#Login_CaptchaVerification"),
                    }),
                  ],
                }),
                (0, t.jsx)("div", {
                  children: (0, t.jsx)("span", {
                    className: ne().RefreshCaptchaText,
                    onClick: this.RefreshCaptcha,
                    children: (0, Ie.we)("#Login_RefreshCaptcha"),
                  }),
                }),
              ],
            });
          }
        };
        Le([f.oI], ze.prototype, "OnCaptchaText", 1),
          Le([f.oI], ze.prototype, "RefreshCaptcha", 1),
          (ze = Le([d.PA], ze));
        let Ue = class extends B.Component {
          OnSubmit(c) {
            c.preventDefault(), this.props.manager.DoLogin();
          }
          OnChangeAuthCode(c) {
            this.props.authtype == Ae.TwoFactorCode
              ? this.props.manager.SetTwoFactorCode(c.target.value)
              : this.props.manager.SetEmailAuthCode(c.target.value);
          }
          render() {
            let c = this.props.manager,
              e = "",
              r = null,
              g = "",
              h,
              M = c.GetSteamGuardCodeError() == et.InvalidCode;
            switch (this.props.authtype) {
              case Ae.TwoFactorCode:
                (e = c.GetTwoFactorCode()),
                  (r = (0, Ie.we)("#Login_Enter2FA")),
                  (h = (0, t.jsx)(Ye.kaY, {})),
                  (g = (0, Ie.we)("#Login_Enter2FAHelp"));
                break;
              case Ae.EmailCode:
                (e = c.GetEmailAuthCode()),
                  (r = (0, Ie.PP)(
                    "#Login_SentSteamguard",
                    (0, t.jsxs)("span", {
                      className: ne().Highlight,
                      children: ["@", c.GetEmailDomain()],
                    }),
                  )),
                  (g = (0, Ie.we)("#Login_EnterSteamguard")),
                  (h = (0, t.jsx)(Ye.Lh2, {}));
                break;
              default:
                break;
            }
            return (0, t.jsxs)("div", {
              className: ne().AuthenticationPanel,
              children: [
                (0, t.jsx)(i.JU, { children: (0, Ie.we)("#Login_SigningIn") }),
                (0, t.jsx)("div", {
                  className: ne().SigningInAccountName,
                  children: c.GetUserName(),
                }),
                (0, t.jsx)(i.a3, { children: r }),
                (0, t.jsxs)("div", {
                  className: ne().AuthenticatorInputcontainer,
                  children: [
                    h,
                    (0, t.jsxs)("form", {
                      className: ne().AccountPasswordForm,
                      onSubmit: this.OnSubmit,
                      children: [
                        (0, t.jsx)(i.pd, {
                          className: (0, n.A)(ne().AccountName),
                          label: "Steam Guard Code",
                          type: "text",
                          autoComplete: "off",
                          focusOnMount: !0,
                          maxLength: 64,
                          value: e,
                          onChange: this.OnChangeAuthCode,
                        }),
                        (0, t.jsx)(i.jn, {
                          disabled: this.props.manager.IsRequestInFlight(),
                          children: (0, Ie.we)(
                            "#Login_SteamguardSubmit",
                          ).toLocaleUpperCase(),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, t.jsx)("a", {
                  className: (0, n.A)(
                    ne().NeedHelpLink,
                    M ? ne().NeedHelpHighlight : null,
                  ),
                  href: "http://help.steampowered.com/",
                  children: g,
                }),
              ],
            });
          }
        };
        Le([f.oI], Ue.prototype, "OnSubmit", 1),
          Le([f.oI], Ue.prototype, "OnChangeAuthCode", 1),
          (Ue = Le([d.PA], Ue));
        var xt = a(68312);
        const tt = [
          {
            path: "similarity",
            render: () => (0, t.jsx)(k, {}),
            name: "ML Similarity",
          },
          {
            path: "clustering",
            render: (c) => (0, t.jsx)(at, { SteamInterface: c.SteamInterface }),
            name: "Tag Clustering",
            requires_login: !0,
          },
        ];
        function _t(c) {
          const [e, r] = B.useState(!1),
            g = O.iA.logged_in,
            h = (0, xt.TR)();
          if (
            ((0, B.useEffect)(() => {
              G.Init(h), r(!0);
            }, [h]),
            !e)
          )
            return (0, t.jsx)("div", { className: v.App });
          const M = { SteamInterface: h };
          return (0, t.jsx)("div", {
            className: v.App,
            children: (0, t.jsxs)("div", {
              className: v.Container,
              children: [
                (0, t.jsxs)("div", {
                  className: v.TopSection,
                  children: [
                    (0, t.jsx)("div", {
                      className: v.Header,
                      children: "Labs Sandbox",
                    }),
                    (0, t.jsx)("div", {
                      className: v.Body,
                      children:
                        "Internal testbed page for Steam Labs experiments",
                    }),
                  ],
                }),
                (0, t.jsx)("div", {
                  className: v.Tabs,
                  children: tt.map((C) =>
                    (0, t.jsx)(
                      q.k2,
                      {
                        to: `${L.B.LabsSandbox()}/${C.path}`,
                        className: v.Tab,
                        activeClassName: v.Active,
                        children: C.name,
                      },
                      C.path,
                    ),
                  ),
                }),
                (0, t.jsx)("div", {
                  className: v.SandboxSection,
                  children: (0, t.jsx)(Ve.tH, {
                    children: (0, t.jsx)(K.dO, {
                      children: tt.map((C, ae) =>
                        (0, t.jsx)(
                          K.qh,
                          {
                            path: `${L.B.LabsSandbox()}/${C.path}`,
                            render: (ge) =>
                              !C.requires_login || g
                                ? C.render({ ...ge, ...M })
                                : (0, t.jsx)(It, {}),
                          },
                          C.path,
                        ),
                      ),
                    }),
                  }),
                }),
              ],
            }),
          });
        }
        function It() {
          return (0, t.jsxs)("div", {
            children: [
              (0, t.jsx)("h3", { children: "Please login to view this page." }),
              (0, t.jsx)(Ze, {
                baseURL: O.TS.STORE_BASE_URL,
                onLoginComplete: () => window.location.reload(),
              }),
            ],
          });
        }
      },
      25996: (te, se, a) => {
        "use strict";
        a.r(se), a.d(se, { default: () => d });
        var t = a(7850),
          L = a(29522),
          j = a(40358),
          O = a(41735),
          E = a.n(O),
          f = a(90626),
          w = a(19681),
          $ = a(86390),
          ce = a(95414),
          X = a(51079),
          A = a(36707),
          b = a(18210),
          U = a(3166),
          T = a(32792),
          G = a.n(T),
          B = a(16412);
        const q = (n) => {
            const s = (0, L.$5)(n.nAppID),
              o = (0, j.lv)(s),
              l = (0, j.J$)(s);
            if (!o.data || !l.data) return null;
            const m = (0, w.l)(o.data, "header");
            return (0, t.jsxs)("div", {
              className: T.AppCapsule,
              children: [
                (0, t.jsx)(ce.u, {
                  id: s,
                  children: (0, t.jsx)("img", { className: T.Image, src: m }),
                }),
                (0, t.jsxs)("div", {
                  className: T.UnderInfo,
                  children: [
                    (0, t.jsx)("div", {
                      className: T.Name,
                      children: l.data.name,
                    }),
                    n.fWeight &&
                      (0, t.jsx)("div", {
                        className: T.Weight,
                        children: `${(n.fWeight * 100).toFixed(2)}%`,
                      }),
                  ],
                }),
              ],
            });
          },
          K = (n) => {
            const [s, o] = f.useState([]),
              [l, m] = f.useState([]);
            return (
              f.useEffect(() => {
                (async () => {
                  const p = {
                    rec: n.strName,
                    max: 40,
                    exclude: n.bExclude ? 1 : 0,
                    accountid: n.nAccountID,
                  };
                  try {
                    const _ = await E().get(
                      `${U.TS.STORE_BASE_URL}recommenderdemos/getlist`,
                      { params: p, timeout: 1e4 },
                    );
                    o(_.data.appids), m(_.data.weights);
                  } catch (_) {
                    console.error("Error fetching data", _);
                  }
                })();
              }, [n.strName, n.nAccountID, n.bExclude]),
              (0, t.jsxs)("div", {
                className: T.RecommenderList,
                children: [
                  (0, t.jsx)("div", {
                    className: T.Title,
                    children: n.strTitle,
                  }),
                  (0, t.jsx)("div", {
                    className: T.SubTitle,
                    children: n.strSubtitle,
                  }),
                  (0, t.jsx)("div", {
                    className: T.CapsuleList,
                    children: s?.map((x, p) =>
                      (0, t.jsx)(
                        q,
                        { nAppID: x, fWeight: l[p] },
                        `${n.strName}_${p}`,
                      ),
                    ),
                  }),
                ],
              })
            );
          },
          v = (n) =>
            (0, t.jsxs)("div", {
              className: T.RecommenderList,
              children: [
                (0, t.jsx)("div", { className: T.Title, children: n.strName }),
                (0, t.jsx)("div", {
                  className: T.SubTitle,
                  children: (0, b.we)("#RecommenderDemos_ReleasedGames"),
                }),
                (0, t.jsx)("div", {
                  className: T.CapsuleList,
                  children: n.arrPlaytimeAppIDs.map((s, o) =>
                    (0, t.jsx)(q, { nAppID: s }, `${n.strName}_${o}`),
                  ),
                }),
                (0, t.jsx)("div", { className: T.Spacer }),
                (0, t.jsx)("div", {
                  className: T.SubTitle,
                  children: (0, b.we)("#RecommenderDemos_UnreleasedGames"),
                }),
                (0, t.jsx)("div", {
                  className: T.CapsuleList,
                  children: n.arrWishlistAppIDs.map((s, o) =>
                    (0, t.jsx)(q, { nAppID: s }, `${n.strName}_${o}`),
                  ),
                }),
              ],
            }),
          i = (n) => {
            const [s, o] = f.useState(void 0);
            return (
              f.useEffect(() => {
                (async () => {
                  const m = {
                    max: 40,
                    exclude: n.bExclude ? 1 : 0,
                    accountid: n.nAccountID,
                  };
                  try {
                    const x = await E().get(
                      `${U.TS.STORE_BASE_URL}recommenderdemos/getfests`,
                      { params: m, timeout: 1e4 },
                    );
                    o(x.data);
                  } catch (x) {
                    console.error("Error fetching data", x);
                  }
                })();
              }, [n.bExclude, n.nAccountID]),
              (0, t.jsx)("div", {
                className: T.RecommenderFests,
                children: s?.map((l) =>
                  (0, t.jsx)(
                    v,
                    {
                      strName: l.title,
                      nStartTime: l.start_date,
                      nEndTime: l.end_date,
                      arrPlaytimeAppIDs: l.playtime_appids,
                      arrWishlistAppIDs: l.wishlist_appids,
                    },
                    `Fest_${l.name}`,
                  ),
                ),
              })
            );
          },
          d = () => {
            const [n, s] = f.useState(!1),
              [o, l] = f.useState(0),
              [m, x] = f.useState(""),
              [p, _] = f.useState(!0);
            if (!U.iA.logged_in)
              return (0, t.jsx)("div", {
                className: T.App,
                children: (0, t.jsxs)("div", {
                  className: T.Login,
                  children: [
                    (0, t.jsx)("div", {
                      className: T.Text,
                      children: (0, b.we)("#LoginText"),
                    }),
                    (0, t.jsx)("div", {
                      className: (0, A.A)(
                        "btn_green_white_innerfade",
                        " btn_medium",
                      ),
                      onClick: $.vg,
                      children: (0, t.jsx)("span", {
                        children: (0, b.we)("#LoginButton"),
                      }),
                    }),
                  ],
                }),
              });
            const D = () => {
                isNaN(parseInt(m)) || (s(!0), l(parseInt(m)));
              },
              P = () => {
                s(!1), l(0), x("");
              };
            return (0, t.jsx)(X.Ay, {
              controller: "recommenderdemos",
              method: "default",
              feature: "capsule",
              children: (0, t.jsxs)("div", {
                className: T.RecommenderDemosApp,
                children: [
                  (0, t.jsx)("div", {
                    className: T.ValveOnly,
                    children: "(Valve-Only)",
                  }),
                  (0, t.jsxs)("div", {
                    className: T.TopControls,
                    children: [
                      (0, t.jsxs)("div", {
                        className: T.AccountIDControl,
                        children: [
                          (0, t.jsx)("input", {
                            type: "text",
                            value: m,
                            onChange: (y) => x(y.target.value),
                          }),
                          (0, t.jsx)(B.$n, {
                            className: T.RecDemoButton,
                            onClick: D,
                            children: "Use AccountID",
                          }),
                          (0, t.jsx)(B.$n, {
                            disabled: !n,
                            className: T.RecDemoButton,
                            onClick: P,
                            children: "Clear",
                          }),
                        ],
                      }),
                      n &&
                        (0, t.jsxs)("div", {
                          className: T.AccountIDOverride,
                          children: [
                            (0, b.we)("#RecommenderDemos_OverrideAccountID"),
                            (0, t.jsx)("div", {
                              className: T.AccountID,
                              children: o,
                            }),
                          ],
                        }),
                      (0, t.jsxs)("div", {
                        className: T.CheckBox,
                        children: [
                          (0, t.jsx)("input", {
                            type: "checkbox",
                            id: "exclude_owned_wishlisted",
                            checked: p,
                            onChange: () => _(!p),
                          }),
                          (0, t.jsx)("label", {
                            htmlFor: "exclude_owned_wishlisted",
                            children: (0, b.we)("#RecommenderDemos_Exclude"),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, t.jsx)(K, {
                    nAccountID: o,
                    bExclude: p,
                    strName: "WishlistsOneWeek",
                    strTitle: (0, b.we)("#RecommenderDemos_HotWishlists"),
                    strSubtitle: (0, b.we)(
                      "#RecommenderDemos_HotWishlists_Desc",
                    ),
                  }),
                  (0, t.jsx)(K, {
                    nAccountID: o,
                    bExclude: p,
                    strName: "NextFest",
                    strTitle: (0, b.we)("#RecommenderDemos_NextFest"),
                    strSubtitle: (0, b.we)("#RecommenderDemos_NextFestDesc"),
                  }),
                  (0, t.jsx)(i, { nAccountID: o, bExclude: p }),
                  (0, t.jsx)(K, {
                    nAccountID: o,
                    bExclude: p,
                    strName: "RecAllTime",
                    strTitle: (0, b.we)("#RecommenderDemos_RecAllTime"),
                    strSubtitle: (0, b.we)("#RecommenderDemos_Rec_Desc"),
                  }),
                  (0, t.jsx)(K, {
                    nAccountID: o,
                    bExclude: p,
                    strName: "RecFiveYear",
                    strTitle: (0, b.we)("#RecommenderDemos_RecFiveYear"),
                    strSubtitle: (0, b.we)("#RecommenderDemos_Rec_Desc"),
                  }),
                  (0, t.jsx)(K, {
                    nAccountID: o,
                    bExclude: p,
                    strName: "RecTwoYear",
                    strTitle: (0, b.we)("#RecommenderDemos_RecTwoYear"),
                    strSubtitle: (0, b.we)("#RecommenderDemos_Rec_Desc"),
                  }),
                  (0, t.jsx)(K, {
                    nAccountID: o,
                    bExclude: p,
                    strName: "RecOneYear",
                    strTitle: (0, b.we)("#RecommenderDemos_RecOneYear"),
                    strSubtitle: (0, b.we)("#RecommenderDemos_Rec_Desc"),
                  }),
                  (0, t.jsx)(K, {
                    nAccountID: o,
                    bExclude: p,
                    strName: "RecSixMonths",
                    strTitle: (0, b.we)("#RecommenderDemos_RecSixMonths"),
                    strSubtitle: (0, b.we)("#RecommenderDemos_Rec_Desc"),
                  }),
                  (0, t.jsx)(K, {
                    nAccountID: o,
                    bExclude: p,
                    strName: "RecEmbedding",
                    strTitle: (0, b.we)("#RecommenderDemos_RecEmbedding"),
                    strSubtitle: "",
                  }),
                ],
              }),
            });
          };
      },
      21895: (te) => {
        te.exports = {
          Root: "_1kIuUssJvopWbHik1IKMG6",
          "Variant-light": "zcrlDqGBY0Lrl7faLFoJI",
          "Variant-dark": "_3b6kFRuG8ILziz88w8GESp",
          "Variant-outline": "wlcXkTKJWe-SE0fCwIRwQ",
          Disabled: "kLcGKsNxkoEqxgok6YzML",
          Checkbox: "_3babFLLB0YYBf8znrlE7Dt",
          Icon: "cngAYeP7ZvFo2pT_v3-xO",
        };
      },
      38878: (te) => {
        te.exports = {
          "Variant-basic": "xqG5GdDEeYauX2ots2DLl",
          "Size-3": "_1K_Ve980-qBq8l1-cZJdw1",
          "Variant-inset": "_2Z-Zr4UW8-jHrU5olM_rpn",
          "Variant-inset-focus": "_2RYWJyn7v0tvoY5cR63QuI",
          Focusable: "_1cd-wdIp5lIWsydAxII-vY",
          "Variant-inset-glass": "_32JdL4FubsmwHfHXm6OB9I",
          "Variant-underline": "yV_Aq5WutzzittgbOJ1R-",
          "Variant-dim": "_2qQgKJgeeqc9lEI-i7HdsM",
          "Variant-highlight": "EFvA4gLIikUE06LDGCqg5",
          "Variant-bare": "_3vxqpebgJYIYNTcigTXx21",
          ControlBox: "_2gL71Yq-HzVI9oOGyWu3jH",
          Hoverable: "_8JNTStqpIYaMWQJx6g6hK",
          Clickable: "_1KONo9A0HE0_NOK2F6uvXy",
          Disabled: "_2I6xXve3oCxh8fra7SWTnq",
          "Size-1": "_2e1xlPghh48rkP13ydQOPb",
          "Size-2": "B7HtDxiiORArIRcBR9kVB",
        };
      },
      53011: (te) => {
        te.exports = {
          SegmentedControlBox: "_3tuJ3SHrhBu16Q7GZBtKyt",
          Indicator: "_2OvUYpkiij1e7K-4vW8i9W",
          SegmentedControl: "_3XFGk1-WmLNC9KlGi7IYtN",
          IndicatorPosition: "_1Dgxrv7wtUW1EViSgrdMlA",
          Item: "_2aNlsjcdOdHOtP8uACA3bM",
          "Size-1": "_2Y43gK-c1jI0x35n45iZ0",
          "Size-3": "_3ohjaEz8PkzSzIrIZKEdt9",
          disabled: "_3gVhaCZ4k3QSnF9WhRZk5m",
          "Variant-basic": "d2NNa31iY_ztalFCMja9O",
          "Variant-inset": "_1FRhoIifZWCKbnl4jrnmG2",
          "Variant-inset-glass": "_1gVVovvLBjwCxSH4wWUabt",
          "Variant-dim": "_3qc1Re1q3AH_JYfN49uj8r",
        };
      },
      75: (te) => {
        te.exports = {
          SliderRoot: "Ib6RCjwueJUjl7aWNipFW",
          Inner: "-nNjOur8lh62cpxs1Jnth",
          SliderTrack: "_32V6MAuLhIp8s5_OPJxur1",
          SliderRange: "_1S38a0lsWaX1bdlroIEyXQ",
          SliderHandle: "_1VoJsIZhjVss7lO_vZxCFC",
        };
      },
      16619: (te) => {
        te.exports = {
          Color: "_2Vc3a-PM4tOhJcD72NEq1U",
          IconSizeDefault: "_20lX82QaoUw-iHboSsmZBI",
          "IconSize-1": "_1zRMg9IjPqEIAejKQDDLYW",
          "IconSize-2": "_3dn_hJnXYKfl38rjqz4y91",
          "IconSize-3": "_2aoIykgGddbEHeCGgMR79l",
          "IconSize-4": "_1Ypu_MleveHHMyLy8PVNy",
          "IconSize-5": "e8vp9esm_uAhUEdfq5zjr",
          "IconSize-6": "hXAsxCohKrk8qBq6Enfgt",
          "IconSize-7": "_5TifSVb5dMP2wAaHIDqM_",
          "IconSize-8": "_32KP-QSJpecoxuWZfWkqmy",
          "IconSize-9": "_3TcYJ4xwprVIVhcdzwF17m",
          HitSlop: "_1tiFDvBjIAQRZDbVwz8k2u",
        };
      },
      65274: (te) => {
        te.exports = {
          Text: "f6hU22EA7Z8peFWZVBJU",
          Truncate: "_2tXpWMxzSX3lf_9_EFUzmJ",
          "TextSize-1": "NUSSU36hkPXb7VdM8HFef",
          "TextSize-2": "_1HTEiDPVrmM0RUnp3DzkXW",
          "TextSize-3": "_1maNP9UvDekHzld1kwwQnw",
          "TextSize-4": "mGlMCg85s0ULA8kYCZzMB",
          "TextSize-5": "_2MGI1O3WXMHKcWkSFCf6Bz",
          "TextSize-6": "_3kpvs1OYmjREjAE9RONmZm",
          "TextSize-7": "_3RzzHMo4NUK3RIl__o-aYU",
          "TextSize-8": "_3KRhxZU1kR1ArBuZyY_ib3",
          "TextSize-9": "_3O17p9mMWHcy_sU-_IPM6R",
          TextWeight: "_3KfHV-wUo5sKXQAsJZO5Uw",
          TextAlign: "_310d_LkZp2K-i9ZY8r2B_c",
          LineClamp: "_3z4FSJhGOOHIOqRI6ZqJ_H",
          WhiteSpace: "FYJ4NYxpWeIha0N1-jUcm",
        };
      },
      6336: (te) => {
        te.exports = {
          LoginDialog: "_1bOMwjEv0VPnCbCIXHn0MU",
          AccountPasswordPanel: "_2TsLG2tMkE37m-BNbHvrJc",
          LoginPanelBackground: "_2mIGMF-Jdi_N_9coPKVNFM",
          LoginPanelContent: "_2MS2ZoNZh_oqiVvUGyHh9m",
          ErrorMessage: "_3BmMF6pRx0W94B97vZTvdb",
          AccountPasswordForm: "_1DnlW0kDl6u10k3Ppayvmb",
          AuthenticationPanel: "_3Z8nzLnUEyfz2WMqJj1cd2",
          AccountNameLabel: "_2U77IHTKBoUJ38DNPYVfvH",
          MedName: "_20Gi0qD50szEeLj06XsZ3Z",
          LargeName: "x37D-phxaGSNsZi6mpzQI",
          PasswordDots: "_3jUHPnnvk2AXDp1iFHGxd1",
          MedPass: "_2Hps1hH56vBFJJgXHkqljj",
          LargePass: "tQnGPct_al8-iUWQuf6kv",
          AccountFieldHeader: "HtxVN4b9fPDuS7W0FaLqi",
          PasswordFieldHeader: "_1t03SX5MJ0b8jWS4fxbDTi",
          NeedHelpLink: "_1GdK5C1JWAky1kjS70NvQN",
          NeedHelpHighlight: "_3gBu02N3S9pnzvYTbzfR77",
          CreateAccountLink: "_3bVw0PeUPTcTsuPlkTPGpI",
          LoginCreateSeperator: "_35t4P-snn6716mxGm-Ki9b",
          RefreshCaptchaText: "_1ZDJKWpT_nU_GDved7bxnd",
          SigningInAccountName: "Qcb1FAzMpsqlSJNAV-1A",
          SigninTitle: "_1ggRhTaLVqzY1PPxtIZTpI",
          RememberMeCheck: "_2HTA85PF5pO-46JTcGI1gU",
          SteamUpsellContainer: "_1q-Uirii8tDfKC6VRY61ei",
          SteamUpsell: "_1dYtgxWsKDglJEujOvh1jE",
          CaptchaContainer: "_3Uug3Nm1kL0c3e5-RM5da9",
          CaptchaBlock: "_2kgp38GTVvClMxe5fyBft4",
          CaptchaImageAndInput: "_2U0LTOvZ_ZfYJLZLcMrpSR",
          CaptchaImageBox: "SsNXaiO0GRLZB04nZNff",
          CaptchaImage: "_1G5YT_SnRKsL0Yh3OjU7Ke",
          CaptchaInput: "_Gu34_OCHk02Dl6H9m-Oy",
          AuthenticatorInputcontainer: "_1I7osrv3QXG9Py9FQWCb5G",
          Highlight: "_2q3gmJ7JH65Nef8rMUAS32",
          LoginComplete: "_1tujkMc7mFdQhTGXN_Nr7w",
        };
      },
      41526: (te) => {
        te.exports = {
          GameExplorerApp: "_2YcjZUwjuk8bOScBI3CVix",
          GameExplorerContainer: "_2kqrC47lN71rDA7qxkvL7_",
          GameExplorerHeader: "_1WmCPc_AXRMWszlD7_0M_R",
          GameExplorerTitle: "_1_GGYKaf1G0MFTbrsZVM5x",
          GameExplorerDescription: "_3-0-0bjJzzp0wfZm6ObSXB",
          AppSelectors: "_1w_B8c3g-Xsw9heb2BTnCe",
          AppSelector: "_2D5U16jQrYU81Ch4jVymz7",
          ValueInput: "ihYu1w0pq4dUgUnGycLAk",
          Disabled: "_1Lbg7xK-rfphRUEsyWlxyS",
          AppSelectorResults: "_1pSCVPfk-I7z5cbU-qD7W6",
          Show: "_3MxGERvYfz6dfYOEqyGZma",
          AppSelectorResult: "MaxWBJJButh54DgnMY7TN",
          Logo: "_1TVDEYVA-ckujFOOVEdYm",
          RightSide: "_2qVSpkO1TYHXyYes3TgXLv",
          GameExplorerKnobs: "_1DrliTdL4oqZrcVy0JvPRT",
          AppList: "EMVrWDjVq2HuZkDTLZAP1",
          AppRow: "PQTV5wUjtOMlNoZq9OsoB",
          OtherControls: "_87nwNPJlVpkWBsBVupwAa",
          OtherControl: "_9nG2DtrSmTLKkooDe3Qj3",
          ControlTitle: "_203QCiIvvdFK5KOzd-OjLx",
          ControlDescription: "_3SJWSctED3DIUsdAb55J-y",
          Empty: "_8nGWcDkZ_reQznWJdiy-U",
          SelectedApp: "Wg6n7Ab6nMu1ZJe0yuSLV",
          WeightContainer: "_3iB_ItjvKnG544Uo3sEzl0",
          RemoveButttonContainer: "_2OgYrDkvm0p7Zlj9z-YBO6",
          GameExplorerResults: "_2SQb_tBJWtFz5SIeGyc-kp",
          Pending: "_3EGRvr5Jj24mLnonIcR5-B",
          CapsuleContainer: "_3OpOkSMqPjZSJIm_M3ZP-T",
          Distance: "_3FraUXDt867xR543irvayh",
          StartExplore: "_1DP_jO_QaoNtSbLKbZe9Cq",
        };
      },
      62139: (te) => {
        te.exports = {
          AppSelector: "_2Fikzdx2lTWapJ8oB4VH_E",
          AppDisplay: "_3m6Shao1IRPuuFr0l_7k9l",
          LogoImage: "_3l4Ih5v0fiCKKodcEeMBx6",
          AppName: "_3kXBTGAEHZo3GGTE00v7fR",
          AppSelect: "_2VQ8j1BdC_eQDU74NrrgUf",
          Suggestions: "_102W4ows0_RdyFP6UygrQQ",
          Suggestion: "_3VfDLdhp_ip5SSQIxRvaP1",
          SimilarApp: "_3yV0M5fd6S0GJGbQUVr8v3",
          Spacer: "_1lpCSiBFFQ4eBhiy7uq863",
          Score: "_14zV9TivPpwwriU27MDzcJ",
          App: "_3xv8nd-XJp9gt6KQvKZz1e",
          Container: "_3r507eIQieIortWRpL_p-",
          TopSection: "ZS7SfmqvYN35Oo34Nulf3",
          Header: "_3PXzQH1cJBNzpq8n3h9tLj",
          Body: "LfOIb2hPYOsOlKu2fmCFl",
          SandboxSection: "-FZSwdssB08COThIQfMK8",
          LabsSimilarGames: "_3OMnQ2qb57wpm5YKWrF4mm",
          AppSelection: "_1U3311x5ZUGW7vJEJuzEH2",
          SimilarApps: "_3RByYPiaYU6aep4DLeH_TE",
          LabsSimilarity: "_32kTJnPnuMfAoOdT68EFxE",
          HorizontalSpacer: "_1FnF8c6Og53-dJM6GBdLWa",
          LabsPathfinder: "_1w-DUXN6LIasN_6v55P0_Y",
          SelectEndpoints: "_3QMIIB-guv958P7vast3i_",
          ComputeButton: "_230zDsKb1Xla9fd990J5-j",
          Disabled: "_3o1uEPeXS7kmhPp5j0fXKJ",
          ProgressMessage: "_2IvW-N7lSTGREjL8L5k6XC",
          Path: "V_RIvT-OYDPkuCbfdK2G2",
          LabsMixer: "_1Cns3SI2_c6tbhS9Ib5ZVE",
          Operand: "hILAxewgNwvhHBnXev-nT",
          OperatorSelect: "EM51KAc64W5DNP-imMK-P",
          AddOperand: "tZPTBtDnIu5m3W0blxApx",
          Tabs: "_3Uckh2jP7zKyhdyy5hM3LG",
          Tab: "_16ebkTYinAkWPZmoHK2c9y",
          Active: "_2J9KxT9Uk8my9bIJ76ab_v",
        };
      },
      21082: (te) => {
        te.exports = {
          EntryError: "_1UGoDpJ7HCnew3ISiLQi2r",
          ClusterConfig: "_3Qp2uY9UVYYKnJ-ptgEj0R",
          PlaytimeCluster: "_2qGfqWVATJJ7JZzV8beQLg",
          ClusterInfo: "_20dmpyf2P2BqcyJ1-ACi27",
          ClusterMembers: "VeQtFevYOvbG2bHTuR6U2",
          SimilarTitle: "gRxJTbzwDdBRGFpeDab1C",
        };
      },
      32792: (te) => {
        te.exports = {
          smallentrywidth: "600px",
          optionswrapwidth: "777px",
          ValveOnly: "_3BlEI-AzJaZZmX2NYANWUM",
          RecommenderDemosApp: "Yd0GQ7ZuwBZvFndfWls_V",
          TopControls: "_3pk8aklP1QvRisTxx7jKBk",
          AccountIDControl: "NHix7NSJXYUhKUfq37DfV",
          AccountIDOverride: "i650fxK7SwDP8ncETkWfc",
          AccountID: "_1KvFAONiSWym2s89il4uOT",
          RecDemoButton: "_1-j6-lkyQZPPLjcvFUqtRg",
          RecommenderList: "_2SWgrCnfJv-YVMkRUaHonC",
          Title: "_1sEvnBlkzKtI80ZZnT4MVY",
          SubTitle: "_1jf-uvxuqKuz8FYMHvlhIm",
          CheckBox: "_5aGW9oecPhpwTUVGvj3lg",
          Spacer: "_1kIkFPfBO9A3hDohTT_hoK",
          CapsuleList: "iWS569Edm4Rgt09fYlY2v",
          AppCapsule: "_2ZKToqUzsdeaKKdDTtGZkD",
          UnderInfo: "_3pPpZh7mj-S7Lxj6yU4Fzl",
          Name: "_1EvKcr6zM__ELCD8Hf9S8y",
          Weight: "_2akgNsqkbts6rIO2OMHPNR",
          Image: "_3VtsIJqlIPDKUx2pCA9kyh",
        };
      },
      17083: (te, se, a) => {
        "use strict";
        a.d(se, { N_: () => B, k2: () => d });
        var t = a(92757),
          L = a(42891),
          j = a(90626),
          O = a(29248),
          E = a(58584),
          f = a(81115),
          w = a(68841),
          $ = (function (s) {
            (0, L.A)(o, s);
            function o() {
              for (
                var m, x = arguments.length, p = new Array(x), _ = 0;
                _ < x;
                _++
              )
                p[_] = arguments[_];
              return (
                (m = s.call.apply(s, [this].concat(p)) || this),
                (m.history = (0, O.zR)(m.props)),
                m
              );
            }
            var l = o.prototype;
            return (
              (l.render = function () {
                return j.createElement(t.Ix, {
                  history: this.history,
                  children: this.props.children,
                });
              }),
              o
            );
          })(j.Component),
          ce = (function (s) {
            (0, L.A)(o, s);
            function o() {
              for (
                var m, x = arguments.length, p = new Array(x), _ = 0;
                _ < x;
                _++
              )
                p[_] = arguments[_];
              return (
                (m = s.call.apply(s, [this].concat(p)) || this),
                (m.history = (0, O.TM)(m.props)),
                m
              );
            }
            var l = o.prototype;
            return (
              (l.render = function () {
                return j.createElement(t.Ix, {
                  history: this.history,
                  children: this.props.children,
                });
              }),
              o
            );
          })(j.Component),
          X = function (o, l) {
            return typeof o == "function" ? o(l) : o;
          },
          A = function (o, l) {
            return typeof o == "string" ? (0, O.yJ)(o, null, null, l) : o;
          },
          b = function (o) {
            return o;
          },
          U = j.forwardRef;
        typeof U > "u" && (U = b);
        function T(s) {
          return !!(s.metaKey || s.altKey || s.ctrlKey || s.shiftKey);
        }
        var G = U(function (s, o) {
            var l = s.innerRef,
              m = s.navigate,
              x = s.onClick,
              p = (0, f.A)(s, ["innerRef", "navigate", "onClick"]),
              _ = p.target,
              D = (0, E.A)({}, p, {
                onClick: function (y) {
                  try {
                    x && x(y);
                  } catch (k) {
                    throw (y.preventDefault(), k);
                  }
                  !y.defaultPrevented &&
                    y.button === 0 &&
                    (!_ || _ === "_self") &&
                    !T(y) &&
                    (y.preventDefault(), m());
                },
              });
            return (
              b !== U ? (D.ref = o || l) : (D.ref = l), j.createElement("a", D)
            );
          }),
          B = U(function (s, o) {
            var l = s.component,
              m = l === void 0 ? G : l,
              x = s.replace,
              p = s.to,
              _ = s.innerRef,
              D = (0, f.A)(s, ["component", "replace", "to", "innerRef"]);
            return j.createElement(t.XZ.Consumer, null, function (P) {
              P || (0, w.A)(!1);
              var y = P.history,
                k = A(X(p, P.location), P.location),
                V = k ? y.createHref(k) : "",
                W = (0, E.A)({}, D, {
                  href: V,
                  navigate: function () {
                    var F = X(p, P.location),
                      N = (0, O.AO)(P.location) === (0, O.AO)(A(F)),
                      u = x || N ? y.replace : y.push;
                    u(F);
                  },
                });
              return (
                b !== U ? (W.ref = o || _) : (W.innerRef = _),
                j.createElement(m, W)
              );
            });
          });
        if (0) var q, K;
        var v = function (o) {
            return o;
          },
          i = j.forwardRef;
        typeof i > "u" && (i = v);
        function S() {
          for (var s = arguments.length, o = new Array(s), l = 0; l < s; l++)
            o[l] = arguments[l];
          return o
            .filter(function (m) {
              return m;
            })
            .join(" ");
        }
        var d = i(function (s, o) {
          var l = s["aria-current"],
            m = l === void 0 ? "page" : l,
            x = s.activeClassName,
            p = x === void 0 ? "active" : x,
            _ = s.activeStyle,
            D = s.className,
            P = s.exact,
            y = s.isActive,
            k = s.location,
            V = s.sensitive,
            W = s.strict,
            Z = s.style,
            F = s.to,
            N = s.innerRef,
            u = (0, f.A)(s, [
              "aria-current",
              "activeClassName",
              "activeStyle",
              "className",
              "exact",
              "isActive",
              "location",
              "sensitive",
              "strict",
              "style",
              "to",
              "innerRef",
            ]);
          return j.createElement(t.XZ.Consumer, null, function (he) {
            he || (0, w.A)(!1);
            var ve = k || he.location,
              xe = A(X(F, ve), ve),
              Me = xe.pathname,
              I = Me && Me.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1"),
              R = I
                ? (0, t.B6)(ve.pathname, {
                    path: I,
                    exact: P,
                    sensitive: V,
                    strict: W,
                  })
                : null,
              J = !!(y ? y(R, ve) : R),
              H = typeof D == "function" ? D(J) : D,
              Y = typeof Z == "function" ? Z(J) : Z;
            J && ((H = S(H, p)), (Y = (0, E.A)({}, Y, _)));
            var oe = (0, E.A)(
              {
                "aria-current": (J && m) || null,
                className: H,
                style: Y,
                to: xe,
              },
              u,
            );
            return (
              v !== i ? (oe.ref = o || N) : (oe.innerRef = N),
              j.createElement(B, oe)
            );
          });
        });
        if (0) var n;
      },
    },
  ]);
})();

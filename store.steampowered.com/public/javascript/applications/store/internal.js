/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [29456],
    {
      94381: (te, se, s) => {
        "use strict";
        s.d(se, { S: () => ce });
        var t = s(7850),
          B = s(68031),
          S = s(31857);
        function C(j) {
          return (0, t.jsx)(S.I, {
            ...j,
            viewBox: 16,
            children: (0, t.jsx)("path", {
              d: "M13.8182 1.94629L5.77816 9.98184L2.40483 6.61296L0.835938 8.18184L5.77816 13.1285L15.387 3.51518L13.8182 1.94629Z",
              fill: "currentColor",
            }),
          });
        }
        var E = s(21895),
          p = s(64238),
          N = s.n(p),
          $ = s(80549);
        function ce(j) {
          const {
              checked: U,
              onChange: M,
              disabled: G,
              children: A,
              ref: Z,
              variant: K,
              color: v,
              align: l = "center",
              icon: D,
              ...u
            } = j,
            r = U === "indeterminate",
            n = D ?? (r ? T : C),
            o = () => {
              G || (M && M(r ? !0 : !U));
            },
            i = (x) => {
              G ||
                (x.key === " " &&
                  (o(), x.preventDefault(), x.stopPropagation()));
            },
            c = (0, $.f)("Checkbox", K);
          return (0, t.jsxs)(B.s, {
            align: l,
            ref: Z,
            role: "checkbox",
            "aria-checked": r ? "mixed" : U,
            "data-state": q(U),
            className: N()(E.Root, E[`Variant-${c}`], G && E.Disabled),
            onClick: o,
            tabIndex: 0,
            onKeyDown: i,
            cursor: "default",
            "aria-disabled": G,
            "data-accent-color": v,
            ...u,
            children: [
              (0, t.jsx)("div", {
                className: E.Checkbox,
                children: U && (0, t.jsx)(n, { className: E.Icon }),
              }),
              A,
            ],
          });
        }
        function q(j) {
          return j === "indeterminate" ? j : j ? "checked" : "unchecked";
        }
        function T(j) {
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
      86946: (te, se, s) => {
        "use strict";
        s.d(se, { j: () => q, w: () => T });
        var t = s(7850),
          B = s(64238),
          S = s.n(B),
          C = s(38878),
          E = s.n(C),
          p = s(60351),
          N = s(68031),
          $ = s(8928),
          ce = s(69289);
        function q(j) {
          const {
              children: U,
              beforeContent: M,
              afterContent: G,
              hasValue: A,
              ...Z
            } = j,
            K = T(Z);
          return (0, t.jsxs)(N.s, {
            ...K,
            align: "center",
            "data-has-value": !!A,
            minWidth: "0",
            children: [
              M && (0, t.jsx)(N.s, { paddingRight: "2", children: M }),
              (0, t.jsx)(p.az, { flexGrow: "1", minWidth: "0", children: U }),
              G && (0, t.jsx)(N.s, { paddingLeft: "2", children: G }),
            ],
          });
        }
        function T(j) {
          const {
              variant: U = "basic",
              size: M = "2",
              radius: G,
              focusable: A = !0,
              hoverable: Z = !0,
              clickable: K = !0,
              disabled: v,
              className: l,
              status: D,
              color: u,
              ...r
            } = j,
            n = U === "underline" ? "none" : G;
          return (0, ce.mz)(
            {
              ...r,
              radius: n,
              "data-status": D,
              "data-dull-color": u && u !== "dull" ? u : void 0,
              className: S()(
                C.ControlBox,
                A && !v && C.Focusable,
                Z && !v && C.Hoverable,
                K && !v && C.Clickable,
                v && C.Disabled,
                C[`Variant-${U}`],
                C[`Size-${M}`],
                l,
              ),
            },
            $.h,
          );
        }
      },
      84909: (te, se, s) => {
        "use strict";
        s.d(se, { AM: () => i, Pr: () => n });
        var t = s(7850),
          B = s(90626),
          S = s(73788),
          C = s(8083),
          E = s(94621),
          p = s(18938),
          N = s(24660),
          $ = s(38566),
          ce = s(54130),
          q = s(71742),
          T = s(64238),
          j = s.n(T),
          U = s(3877),
          M = s(3166),
          G = s(28020);
        const A = (0, B.createContext)(null);
        function Z(c) {
          const { children: x, ...f } = c,
            _ = r(f);
          return (0, t.jsx)(A.Provider, { value: _, children: x });
        }
        function K(c) {
          const { children: x } = c,
            f = B.Children.only(x),
            _ = (0, B.useContext)(A);
          return f
            ? _
              ? (0, B.cloneElement)(f, {
                  ..._.getReferenceProps(f.props),
                  ref: (0, p.XB)(f.props.ref, _.floating.refs.setReference),
                })
              : (console.error(
                  "<PopoverAnchor> must be a child of <PopoverRoot>.",
                ),
                null)
            : null;
        }
        function v(c) {
          const { children: x, className: f, ref: _, label: I } = c,
            O = (0, B.useContext)(A),
            y = (0, S.SV)([_, O?.floating.refs.setFloating]);
          if (!O)
            return (
              console.error(
                "<Popover.Positioner> must be a child of <Popover.Root>.",
              ),
              null
            );
          if (!O.open) return null;
          let F = B.Children.only(x),
            H = B.Fragment;
          return (
            F.type == i.FocusManager &&
              ((F = B.Children.only(F.props.children)), (H = l)),
            (0, t.jsx)(H, {
              children: (0, t.jsx)(G.HF, {
                presentation: O.presentation,
                sizing: O.sizing,
                floatingRef: y,
                floatingProps: O.getFloatingProps(),
                floatingStyles: O.floating.floatingStyles,
                referenceElement: O.floating.elements.domReference,
                className: j()((0, U.T)(), f),
                label: I,
                children: F,
              }),
            })
          );
        }
        function l(c) {
          return (0, M.Qn)()
            ? (0, t.jsx)(D, { ...c })
            : (0, t.jsx)(u, { ...c });
        }
        function D(c) {
          const { children: x } = c,
            f = (0, B.useContext)(A);
          (0, q.wT)(
            !!f,
            "<Popover.Positioner> must be a child of <Popover.Root>.",
          );
          const _ = () => f.floating.context.onOpenChange(!1),
            I = B.useRef(void 0);
          return (
            (0, N.O7)(I, !0, !0),
            (0, t.jsx)($.D6, {
              navID: "Popover",
              onCancelButton: _,
              modal: !0,
              navTreeRef: I,
              children: (0, t.jsx)("div", {
                style: { display: "contents" },
                children: (0, t.jsx)(ce.q, { children: x }),
              }),
            })
          );
        }
        function u(c) {
          const { children: x } = c,
            f = (0, B.useContext)(A);
          return (
            (0, q.wT)(
              !!f,
              "<Popover.Positioner> must be a child of <Popover.Root>.",
            ),
            (0, t.jsx)(S.s3, {
              context: f.floating.context,
              initialFocus: -1,
              returnFocus: !1,
              children: x,
            })
          );
        }
        function r(c) {
          const {
            open: x,
            interactions: f = {},
            width: _,
            maxHeight: I,
            gutter: O,
            scroll: y,
          } = c;
          let F = x;
          const H = (0, G.Pr)(c.presentation),
            W = n(c, F, H),
            J = { enabled: !!f.click },
            k = typeof f.click == "function" ? f.click(J) : J,
            w = (0, S.kp)(W.context, k),
            m = { enabled: !!f.focus },
            he = typeof f.focus == "function" ? f.focus(m) : m,
            ve = (0, S.iQ)(W.context, he),
            xe = { handleClose: (0, S.iB)() },
            Me = typeof f.hover == "function" ? f.hover(xe) : xe,
            b = (0, S.Mk)(W.context, { enabled: !!f.hover, ...Me }),
            R = (0, S.s9)(W.context),
            { getFloatingProps: Q, getReferenceProps: z } = (0, S.bv)([
              w,
              ve,
              b,
              R,
            ]);
          return {
            floating: W,
            getFloatingProps: Q,
            getReferenceProps: z,
            open: F,
            presentation: H,
            sizing: { width: _, maxHeight: I, gutter: O, scroll: y },
          };
        }
        function n(c, x, f) {
          const { onOpenChange: _, placement: I } = c,
            O = f === "anchor";
          return (0, S.we)({
            open: x,
            onOpenChange: _,
            middleware: O ? o(c) : [],
            whileElementsMounted: O ? C.ll : void 0,
            placement: I && typeof I == "object" ? I.initial : I,
            strategy: "fixed",
            platform: {
              ...C.iD,
              getOffsetParent: (y) => y?.ownerDocument?.defaultView ?? window,
            },
          });
        }
        function o(c) {
          const { gutter: x = 0, placement: f } = c,
            _ = [],
            I = f && typeof f == "object";
          return (
            I && f.offset
              ? _.push((0, E.cY)(f.offset))
              : (!I || f.offset === void 0) && _.push((0, E.cY)(2)),
            I && f.flip
              ? _.push((0, E.UU)(f.flip))
              : (!I || f.flip === void 0) && _.push((0, E.UU)()),
            I && f.shift
              ? _.push((0, E.BN)(f.shift))
              : (!I || f.shift === void 0) && _.push((0, E.BN)()),
            _.push(
              (0, E.Ej)({
                apply: (O) => {
                  const { rects: y, elements: F, availableHeight: H } = O,
                    W = {
                      boxSizing: "border-box",
                      zIndex: "1",
                      "-webkit-app-region": "no-drag",
                    };
                  switch ((c.scroll && (W.overflowY = "auto"), c.width)) {
                    case "target": {
                      W.width = `${y.reference.width}px`;
                      break;
                    }
                    case "content": {
                      W.width = `${y.floating.width}px`;
                      break;
                    }
                    case "dropdown": {
                      let k = y.reference.width;
                      y.floating.width > k && k < 200 && (k = y.floating.width),
                        (W.width = `${k}px`);
                    }
                  }
                  typeof c.width == "function" &&
                    (W.width = c.width({
                      unContentWidth: y.floating.width,
                      unTargetWidth: y.reference.width,
                    }));
                  const J =
                    typeof x == "number" ? `${x}px` : `var(--spacing-${x})`;
                  typeof c.maxHeight == "function"
                    ? (W.maxHeight = c.maxHeight({
                        unAvailableHeight: H,
                        gutter: J,
                      }))
                    : typeof c.maxHeight == "number"
                      ? (W.maxHeight = `min( calc( ${H}px - ${J} ), ${c.maxHeight}px )`)
                      : typeof x == "number"
                        ? (W.maxHeight = `${H - x}px`)
                        : (W.maxHeight = `calc( ${H}px - var(--spacing-${x}) )`),
                    Object.assign(F.floating.style, W),
                    F.floating.style.setProperty(
                      "--popover-max-height",
                      W.maxHeight,
                    );
                },
              }),
            ),
            _
          );
        }
        const i = { Root: Z, Anchor: K, Positioner: v, FocusManager: l };
      },
      21663: (te, se, s) => {
        "use strict";
        s.d(se, { I: () => G });
        var t = s(7850),
          B = s(90626),
          S = s(86946),
          C = s(60351),
          E = s(71742),
          p = s(64238),
          N = s.n(p),
          $ = s(53011),
          ce = s.n($),
          q = s(68031),
          T = s(80549);
        const j = (0, B.createContext)(null);
        function U(K) {
          const {
              variant: v,
              radius: l,
              size: D,
              status: u,
              color: r,
              children: n,
              value: o,
              onValueChange: i,
            } = K,
            [c, x] = (0, B.useState)({}),
            f = (0, B.useCallback)((F, H) => x((W) => ({ ...W, [H]: F })), []),
            _ = (0, B.useCallback)(
              (F, H) =>
                x((W) => {
                  const J = { ...W };
                  return J[H] === F && delete J[H], J;
                }),
              [],
            ),
            I = (F) => {
              let H = 0;
              switch (F.key) {
                case " ":
                case "Enter":
                case "ArrowRight":
                  H = 1;
                  break;
                case "ArrowLeft":
                  H = -1;
                  break;
              }
              if (H) {
                const W = Array.from(Object.values(c)).sort(Z);
                let J;
                if (o === null) J = H > 0 ? 0 : W.length - 1;
                else {
                  const m = c[o],
                    he = W.findIndex((ve) => ve === m);
                  (0, E.wT)(
                    typeof he == "number",
                    "Could not find current segmented value position",
                  ),
                    (J = he + H);
                }
                const k = W[J < 0 ? W.length + J : J % W.length],
                  w = Object.keys(c).find((m) => c[m] === k);
                typeof w != "string"
                  ? console.error("Could not find next segmeneted value")
                  : (i(w), F.stopPropagation(), F.preventDefault());
              }
            },
            O = (0, T.f)("SegmentedControl", v),
            y = (0, B.useMemo)(
              () => ({
                value: o,
                onValueChange: i,
                register: f,
                unregister: _,
                radius: l,
                size: D,
              }),
              [o, i, f, _, l, D],
            );
          return (0, t.jsx)(S.j, {
            clickable: !1,
            hoverable: !1,
            focusable: !1,
            variant: O,
            radius: l,
            size: D,
            status: u,
            className: N()($.SegmentedControlBox, $[`Variant-${O}`]),
            tabIndex: 0,
            onKeyDown: I,
            children: (0, t.jsx)(j.Provider, {
              value: y,
              children: (0, t.jsxs)(C.az, {
                className: $.SegmentedControl,
                style: { "--outer-radius": `var(--radius-${l})` },
                children: [
                  n,
                  o !== null && (0, t.jsx)(A, { radius: l, color: r }),
                ],
              }),
            }),
          });
        }
        function M(K) {
          const { value: v, children: l, disabled: D } = K,
            u = (0, B.useContext)(j),
            [r, n] = (0, B.useState)(),
            { register: o, unregister: i } = u || {};
          if (
            ((0, B.useEffect)(
              () => (!r || !o || !i ? () => {} : (o(r, v), () => i(r, v))),
              [o, i, v, r],
            ),
            !u)
          )
            return null;
          const { value: c, onValueChange: x, radius: f, size: _ } = u,
            I = v === c,
            O = (F) => {
              F.stopPropagation(), F.preventDefault(), !(I || D) && x(v);
            },
            y = l === void 0 ? v : l;
          return (0, t.jsx)(q.s, {
            justify: "center",
            align: "center",
            ref: n,
            onClick: O,
            "data-selected": I ? "true" : "false",
            className: N()($.Item, _ && $[`Size-${_}`], D ? $.disabled : ""),
            children: y,
          });
        }
        function G(K) {
          const { options: v, getOptionLabel: l = (u) => u, ...D } = K;
          return (0, t.jsx)(G.Root, {
            ...D,
            children: v.map((u) =>
              (0, t.jsx)(G.Item, { value: u, children: l(u) }, u),
            ),
          });
        }
        (G.Item = M), (G.Root = U);
        function A(K) {
          const { radius: v, color: l } = K;
          return (0, t.jsx)(C.az, {
            className: $.IndicatorPosition,
            children: (0, t.jsx)("div", {
              className: $.Indicator,
              "data-accent-color": l,
            }),
          });
        }
        function Z(K, v) {
          const l = K.compareDocumentPosition(v);
          return l & Node.DOCUMENT_POSITION_FOLLOWING
            ? -1
            : l & Node.DOCUMENT_POSITION_PRECEDING
              ? 1
              : 0;
        }
      },
      87275: (te, se, s) => {
        "use strict";
        s.d(se, { A: () => $, F: () => q });
        var t = s(7850),
          B = s(90626),
          S = s(71742),
          C = s(13854),
          E = s(75),
          p = s.n(E),
          N = s(76854);
        const $ = Object.assign(ce, { Root: j, Track: M, Range: G, Handle: A });
        function ce(l) {
          const {
              value: D,
              onValueChange: u,
              onValueSettled: r,
              min: n,
              ...o
            } = l,
            i = [D],
            c = (0, B.useCallback)((f) => u(f[0]), [u]),
            x = (0, B.useCallback)((f) => r?.(f[0]), [r]);
          return (0, t.jsxs)(j, {
            ...o,
            min: n,
            onValueChange: c,
            onValueSettled: x,
            value: i,
            children: [
              (0, t.jsx)(M, { children: (0, t.jsx)(G, { start: n, end: D }) }),
              (0, t.jsx)(A, {}),
            ],
          });
        }
        function q(l) {
          const { value: D } = l;
          return (0, t.jsxs)(j, {
            ...l,
            children: [
              (0, t.jsx)(M, {
                children: (0, t.jsx)(G, { start: D[0], end: D[1] }),
              }),
              (0, t.jsx)(A, {}),
              (0, t.jsx)(A, {}),
            ],
          });
        }
        const T = (0, B.createContext)(null);
        function j(l) {
          const { children: D, color: u, ...r } = l,
            {
              min: n,
              max: o,
              onValueChange: i,
              value: c,
              step: x = 1,
              onValueSettled: f,
            } = l,
            _ = (0, B.useRef)(null),
            I = (0, B.useRef)(null),
            [O] = (0, B.useState)(() => new Set()),
            [y, F] = (0, B.useState)(!1);
          return (0, t.jsx)(T.Provider, {
            value: { ...r, handles: O, bDragActive: y },
            children: (0, t.jsx)("div", {
              className: E.SliderRoot,
              "data-accent-color": u,
              ref: _,
              onPointerDown: (H) => {
                if (_.current) {
                  if (
                    (H.target.setPointerCapture(H.pointerId),
                    typeof c != "number")
                  ) {
                    const W = _.current.getBoundingClientRect(),
                      J = Z(H.clientX - W.left, [0, W.width], [n, o]);
                    I.current = { activeValueIndex: U(c, J), bMoved: !1 };
                  } else I.current = { activeValueIndex: 0, bMoved: !1 };
                  F(!0);
                }
              },
              onPointerUp: (H) => {
                const W = H.target;
                W.hasPointerCapture(H.pointerId) &&
                  (W.releasePointerCapture(H.pointerId),
                  f && I.current?.bMoved && f(c),
                  F(!1));
              },
              onPointerMove: (H) => {
                if (
                  H.target.hasPointerCapture(H.pointerId) &&
                  _.current &&
                  I.current
                ) {
                  const J = _.current.getBoundingClientRect(),
                    k = Z(H.clientX - J.left, [0, J.width], [n, o]),
                    w = K({ value: k, min: n, max: o, step: x }),
                    m = [...c];
                  (m[I.current.activeValueIndex] = w),
                    m.sort((he, ve) => he - ve),
                    (I.current.activeValueIndex = m.indexOf(w)),
                    (I.current.bMoved = !0),
                    i(m);
                }
              },
              onClick: (H) => {
                if (!_.current || I.current?.bMoved) return;
                const W = _.current.getBoundingClientRect(),
                  J = Z(H.clientX - W.left, [0, W.width], [n, o]),
                  k = K({ value: J, min: n, max: o, step: x }),
                  w = U(c, J),
                  m = [...c];
                (m[w] = k), i(m), f && f(m);
              },
              children: (0, t.jsx)("div", { className: E.Inner, children: D }),
            }),
          });
        }
        function U(l, D) {
          if (l.length <= 1) return l.length - 1;
          let u = 0,
            r = Math.abs(D - l[0]);
          for (let n = 1; n < l.length; n++) {
            const o = Math.abs(l[n] - D);
            o < r && ((u = n), (r = o));
          }
          return u;
        }
        function M(l) {
          const { render: D, ...u } = l;
          return (0, N.Q)(
            D,
            (0, t.jsx)("div", { className: E.SliderTrack }),
            u,
            void 0,
          );
        }
        function G(l) {
          const { start: D, end: u, render: r } = l,
            n = (0, B.useContext)(T);
          (0, S.wT)(n, "SliderRange must be used within a SliderRoot!");
          const { min: o, max: i } = n,
            c = v(D, o, i),
            x = 100 - v(u, o, i);
          return (0, N.Q)(
            r,
            (0, t.jsx)("div", {
              className: E.SliderRange,
              style: { "--pct-left": `${c}%`, "--pct-right": `${x}%` },
            }),
            {},
            void 0,
          );
        }
        function A(l) {
          const { render: D } = l,
            u = (0, B.useContext)(T);
          (0, S.wT)(u, "SliderHandle must be used within a SliderRoot!");
          const {
              min: r,
              max: n,
              handles: o,
              value: i,
              step: c = 1,
              onValueChange: x,
              onValueSettled: f,
            } = u,
            [_, I] = (0, B.useState)(null),
            [O, y] = (0, B.useState)(-1);
          (0, B.useEffect)(
            () => (_ ? (o.add(_), y(o.size - 1), () => o.delete(_)) : () => {}),
            [_, o],
          );
          const F = O > -1,
            W = { "--handle-pct": `${v(F ? i[O] : r, r, n)}%` },
            J = (w) => {
              switch (w.key) {
                case "ArrowRight":
                case "ArrowUp":
                case "ArrowLeft":
                case "ArrowDown": {
                  const m = w.key === "ArrowRight" || w.key === "ArrowUp",
                    he = c * (m ? 1 : -1),
                    ve = K({ value: i[O] + he, min: r, max: n, step: c }),
                    xe = [...i];
                  (xe[O] = ve),
                    x(xe),
                    f && f(xe),
                    w.preventDefault(),
                    w.stopPropagation();
                  break;
                }
                case "PageUp":
                case "PageDown": {
                  const m = w.key === "PageUp",
                    he = Math.round((n - r) / 10) * (m ? 1 : -1),
                    ve = K({ value: i[O] + he, min: r, max: n, step: c }),
                    xe = [...i];
                  (xe[O] = ve),
                    x(xe),
                    f && f(xe),
                    w.preventDefault(),
                    w.stopPropagation();
                  break;
                }
              }
            };
          F || (W.display = "none");
          const k = {
            ref: I,
            role: "slider",
            "aria-valuenow": i[O],
            "aria-valuemin": r,
            "aria-valuemax": n,
            tabIndex: 0,
            onKeyDown: J,
          };
          return (0, N.Q)(
            D,
            (0, t.jsx)("span", { className: E.SliderHandle, style: W }),
            k,
            { value: i[O], bDragActive: u.bDragActive },
          );
        }
        function Z(l, D, u) {
          if (D[0] === D[1] || u[0] === u[1]) return u[0];
          const n = ((u[1] - u[0]) / (D[1] - D[0])) * (l - D[0]) + u[0];
          return C.OQ(n, u[0], u[1]);
        }
        function K(l) {
          const { value: D, min: u, max: r, step: n } = l,
            i = Math.round((D - u) / n) / (1 / n);
          return C.OQ(i + u, u, r);
        }
        function v(l, D, u) {
          return ((l - D) / (u - D)) * 100;
        }
      },
      31857: (te, se, s) => {
        "use strict";
        s.d(se, { I: () => p });
        var t = s(7850),
          B = s(69289),
          S = s(8928),
          C = s(16619),
          E = s.n(C);
        function p(T) {
          return (0, t.jsx)("svg", { ...ce(T) });
        }
        const N = [
          ...S.L,
          {
            prop: "size",
            responsive: !0,
            className: (T) => C[`IconSize-${T}`],
          },
          {
            prop: "color",
            className: C.Color,
            cssProperty: (T) => ["--icon-color", $(T)],
          },
          {
            prop: "hitSlop",
            className: C.HitSlop,
            cssProperty: (T) => [
              "--hit-slop-custom",
              typeof T == "string" ? T : "",
            ],
          },
          S.h.find(({ prop: T }) => T === "cursor"),
        ];
        function $(T) {
          return !T || T[0] === "#" ? T : (0, B.w7)(T);
        }
        function ce(T) {
          const { viewBox: j, ...U } = T,
            G = { className: U.size ? void 0 : C.IconSizeDefault, ...U };
          return j && (G.viewBox = q(j)), (0, B.mz)(G, N);
        }
        function q(T) {
          if (T)
            return typeof T == "number"
              ? `0 0 ${T} ${T}`
              : typeof T == "string"
                ? T
                : `0 0 ${T.width} ${T.height}`;
        }
      },
      12204: (te, se, s) => {
        "use strict";
        s.d(se, { V: () => C });
        var t = s(7850),
          B = s(31857);
        const S = {
          up: "rotate( 180, 10, 10 )",
          left: "rotate( 90, 10, 10 )",
          right: "rotate( 270, 10, 10 )",
        };
        function C(E) {
          const { direction: p = "down" } = E,
            N = S[p];
          return (0, t.jsx)(B.I, {
            ...E,
            viewBox: 20,
            children: (0, t.jsx)("path", {
              transform: N,
              d: "M5.14541 6.89977L10.0063 12.2027L14.8671 6.89977C15.3557 6.36674 16.145 6.36674 16.6336 6.89977C17.1221 7.4328 17.1221 8.29385 16.6336 8.82688L10.8832 15.1002C10.3946 15.6333 9.60537 15.6333 9.11678 15.1002L3.36644 8.82688C2.87785 8.29385 2.87785 7.4328 3.36644 6.89977C3.85503 6.38041 4.65682 6.36674 5.14541 6.89977Z",
              fill: "currentColor",
            }),
          });
        }
      },
      76854: (te, se, s) => {
        "use strict";
        s.d(se, { Q: () => S });
        var t = s(90626);
        function B(C, E, p) {
          return typeof C == "function" ? C(E, p) : t.cloneElement(C, E);
        }
        function S(C, E, p, N) {
          return B(C || E, p, N);
        }
      },
      15252: (te, se, s) => {
        "use strict";
        s.d(se, { Ae: () => T, EY: () => ce, U6: () => q });
        var t = s(7850),
          B = s(1039),
          S = s(69289),
          C = s(8928),
          E = s(64238),
          p = s.n(E),
          N = s(65274),
          $ = s.n(N);
        function ce(j) {
          const { as: U = "span", ref: M, className: G, ...A } = j,
            Z = U;
          return (0, t.jsx)(Z, {
            ref: M,
            ...(0, S.mz)({ ...A, className: p()(N.Text, G) }, T),
          });
        }
        const q = [
            {
              prop: "weight",
              responsive: !0,
              className: N.TextWeight,
              cssProperty: (j) => ["--text-weight", `var(--font-weight-${j})`],
            },
            {
              prop: "align",
              responsive: !0,
              className: N.TextAlign,
              cssProperty: "--text-align",
            },
            {
              prop: "color",
              responsive: !0,
              cssProperty: (j, U, M) => [
                "--text-color",
                (0, S.To)(j, (0, B.I)(U.contrast, M) ?? "body"),
              ],
            },
            {
              prop: "contrast",
              responsive: !0,
              cssProperty: (j, U, M) => [
                "--text-color",
                (0, S.To)((0, B.I)(U.color, M) ?? "text-body", j),
              ],
            },
            { prop: "truncate", className: N.Truncate },
            {
              prop: "lineClamp",
              responsive: !0,
              className: N.LineClamp,
              cssProperty: "--line-clamp",
            },
            {
              prop: "whiteSpace",
              className: N.WhiteSpace,
              cssProperty: "--white-space",
            },
          ],
          T = [
            ...q,
            ...C.L,
            {
              prop: "size",
              responsive: !0,
              className: (j) => N[`TextSize-${j}`],
            },
          ];
      },
      24805: (te, se, s) => {
        "use strict";
        s.d(se, { Xh: () => $, cU: () => ce, tf: () => T, wl: () => q });
        var t = s(99412),
          B = s(18735),
          S = s(48156),
          C = s(6469),
          E = s(10142),
          p = s(10349),
          N = s(3166);
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
          BHasAppID(l) {
            return this.m_setAlreadyAdded.has("a" + l);
          }
          BHasPackageID(l) {
            return this.m_setAlreadyAdded.has("s" + l);
          }
          BHasBundleID(l) {
            return this.m_setAlreadyAdded.has("b" + l);
          }
          BHasStoreItemKey(l) {
            return this.m_setAlreadyAdded.has(
              this.ConvertStoreItemKeyToUniqueKey(l),
            );
          }
          AddStoreItemKey(l) {
            this.m_setAlreadyAdded.add(this.ConvertStoreItemKeyToUniqueKey(l));
          }
          ConvertStoreItemKeyToUniqueKey(l) {
            switch (l.item_type) {
              default:
              case "app":
                return "a" + l.id;
              case "sub":
                return "s" + l.id;
              case "bundle":
                return "b" + l.id;
            }
          }
        }
        const q = 4;
        function T(v, l, D, u, r, n) {
          const o = new Array(),
            i = new Array(),
            c = new Array(),
            x = new Array();
          if (!v || v.length == 0) return o;
          const f = [
            p.by.k_RejectSupportedLanguage,
            p.by.k_RejectAlreadyDisplayed,
            p.by.k_RejectNoTrailer,
          ];
          for (let _ of v) {
            let I = _.id,
              O = p.by.k_NotRejected;
            switch (_.item_type) {
              case "sub":
                const y = E.A.Get().GetPackage(I);
                if (y?.GetIncludedAppIDs()?.length !== 1) {
                  O = Z(I, l, u, !0);
                  break;
                }
                I = y.GetIncludedAppIDs()[0];
              case "app":
                O = G(I, l, D, u, !0);
                break;
              case "bundle":
                O = K(I, l, u, !0);
                break;
            }
            if (
              (O == p.by.k_NotRejected
                ? ((_.rejected = p.by.k_NotRejected),
                  o.push({ ..._, priority: 1 }))
                : f.includes(O)
                  ? ((_.rejected = p.by.k_NotRejected), i.push(_))
                  : ((_.rejected = O),
                    O == p.by.k_RejectIgnoredGame ? c.push(_) : x.push(_)),
              o.length > r)
            )
              break;
          }
          return (
            o.length < r &&
              (j(o, i, n, 2),
              o.length < n &&
                l.enforce_minimum &&
                (j(o, c, n, 3), j(o, x, n, q))),
            o
          );
        }
        function j(v, l, D, u) {
          for (let r = 0; v.length < D && r < l.length; ++r)
            v.push({ ...l[r], priority: u });
        }
        function U(v, l) {
          const D = C.Fm.Get();
          if (
            l.only_current_platform &&
            D.BHasPlatformPreferenceSet() &&
            !(
              (v.GetPlatforms()?.windows && D.BIsPreferredPlatform("win")) ||
              (v.GetPlatforms()?.mac && D.BIsPreferredPlatform("mac")) ||
              (v.GetPlatforms()?.steamos_linux &&
                D.BIsPreferredPlatform("linux"))
            )
          )
            return p.by.k_RejectWrongPlatform;
          if (!l.prepurchase && v.BIsComingSoon())
            return p.by.k_RejectNoComingSoon;
          const u = v.GetPlatforms();
          return !l.virtual_reality &&
            u &&
            u.vr_support &&
            u.vr_support.vrhmd_only
            ? p.by.k_RejectNoVR
            : v.GetAllCreatorClanIDs()?.some((r) => D.BIsIgnoringCurator(r))
              ? p.by.k_RejectCreatorClan
              : p.by.k_NotRejected;
        }
        function M(v, l) {
          if (l.localized) {
            const D = (0, t.sfN)(N.TS.LANGUAGE);
            if (!v.GetAllLanguagesWithSomeSupport()?.includes(D))
              return p.by.k_RejectSupportedLanguage;
          }
          return p.by.k_NotRejected;
        }
        function G(v, l, D, u, r) {
          const n = E.A.Get().GetApp(v);
          if (!n) return p.by.k_RejectNotLoaded;
          const o = U(n, l);
          if (o != p.by.k_NotRejected) return o;
          const i = C.Fm.Get();
          if (i.BIsGameIgnored(v)) return p.by.k_RejectIgnoredGame;
          if (i.BExcludeTagIDs(n.GetTagIDs()))
            return p.by.k_RejectIgnoreGameTags;
          if (i.BExcludesContentDescriptor(n.GetContentDescriptorIDs()))
            return p.by.k_RejectIgnoreContentDescriptors;
          if (!l.early_access && n.BIsEarlyAccess())
            return p.by.k_RejectEarlyAccess;
          const c = n.GetAppType();
          if (!l.software && c == S.uE.Sv) return p.by.k_RejectSoftware;
          if (l.games_already_in_library && i.BIsGameOwned(v))
            return p.by.k_RejectInLibrary;
          if (l.games_not_in_library && !i.BIsGameOwned(v))
            return p.by.k_RejectNotInLibrary;
          if (!l.video && [S.uE.Wz, S.uE.gQ, S.uE.ID].includes(c))
            return p.by.k_RejectVideo;
          if (l.has_discount) {
            const x = n.GetBestPurchaseOption();
            if (!x || !x.discount_pct) return p.by.k_RejectNoDiscount;
          }
          return D != "adultonly" &&
            l.no_ao_content &&
            (n.HasContentDescriptorID(B.u7) || n.HasContentDescriptorID(B.T4))
            ? p.by.k_RejectAO
            : c == S.uE.ue &&
                l.games_already_in_library &&
                i.BIsGameOwned(n.GetParentAppID() || 0)
              ? p.by.k_RejectInLibrary
              : r
                ? (c == S.uE.ue && u.BHasAppID(n.GetParentAppID() || 0)) ||
                  u.BHasAppID(v)
                  ? p.by.k_RejectAlreadyDisplayed
                  : l.has_trailer && !n.BHasTrailers(!1)
                    ? p.by.k_RejectNoTrailer
                    : M(n, l)
                : p.by.k_NotRejected;
        }
        function A(v, l) {
          const D = C.Fm.Get();
          let u = !1;
          for (let r of v) {
            if (D.BIsGameIgnored(r)) return p.by.k_RejectIgnoredGame;
            D.BIsGameOwned(r) && (u = !0);
          }
          return l.games_not_in_library && u
            ? p.by.k_RejectInLibrary
            : l.games_not_in_library && !u
              ? p.by.k_RejectNotInLibrary
              : p.by.k_NotRejected;
        }
        function Z(v, l, D, u) {
          const r = E.A.Get().GetPackage(v);
          if (!r) return p.by.k_RejectNotLoaded;
          const n = U(r, l);
          if (n != p.by.k_NotRejected) return n;
          const o = A(r.GetIncludedAppIDs(), l);
          if (o != p.by.k_NotRejected) return o;
          const i = C.Fm.Get();
          return l.games_already_in_library && i.BOwnsPackage(v)
            ? p.by.k_RejectInLibrary
            : i.BIsPackageIgnored(v)
              ? p.by.k_RejectIgnoredGame
              : u
                ? D.BHasPackageID(v)
                  ? p.by.k_RejectAlreadyDisplayed
                  : M(r, l)
                : p.by.k_NotRejected;
        }
        function K(v, l, D, u) {
          const r = E.A.Get().GetBundle(v);
          if (!r) return p.by.k_RejectNotLoaded;
          const n = U(r, l);
          if (n != p.by.k_NotRejected) return n;
          const o = A(r.GetIncludedAppIDs(), l);
          return o != p.by.k_NotRejected
            ? o
            : u
              ? D.BHasBundleID(v)
                ? p.by.k_RejectAlreadyDisplayed
                : M(r, l)
              : p.by.k_NotRejected;
        }
      },
      85528: (te, se, s) => {
        "use strict";
        s.d(se, { Vw: () => D });
        var t = s(14947),
          B = s(99412),
          S = s(72604),
          C = s(35038),
          E = s(67529),
          p = s(3166);
        class N {
          m_nLastUpdated = 0;
          m_mapLanguages = t.sH.map();
          m_appid;
          m_fetching = null;
          constructor(r) {
            this.m_appid = r;
          }
          GetAppID() {
            return this.m_appid;
          }
          GetTokenList(r) {
            return this.m_mapLanguages.has(r)
              ? this.m_mapLanguages.get(r)
              : null;
          }
          Localize(r, n) {
            let o = p.TS.LANGUAGE,
              i = this.GetTokenList(o),
              c = o != "english" ? this.GetTokenList("english") : null;
            return $(r, i, c, this.m_appid, n);
          }
          SubstituteParams(r, n) {
            let o = p.TS.LANGUAGE,
              i = this.GetTokenList(o),
              c = o != "english" ? this.GetTokenList("english") : null;
            return ce(r, i, c, this.m_appid, n);
          }
        }
        function $(u, r, n, o, i) {
          if (!u.startsWith("#"))
            return (
              console.log(
                "Token doesn't start with #:",
                u,
                "appid",
                o,
                "tokens",
                r,
              ),
              ""
            );
          let c = u;
          u = u.toLowerCase();
          let x = "";
          if (
            (r && r.has(u) && (x = r.get(u)),
            !x && n && n.has(u) && (x = n.get(u)),
            x)
          )
            x = ce(x, r, n, o, i);
          else if (
            ((r || n) &&
              console.log(
                "No loc found for appid",
                o,
                c,
                "Tokens:",
                r,
                "Fallback:",
                n,
              ),
            r && p.TS.EUNIVERSE != B.wLO)
          )
            return u;
          return x;
        }
        function ce(u, r, n, o, i) {
          let c = /{[A-za-z0-9_%#:]+}/g,
            x = u.match(c);
          if (x)
            for (let f of x) {
              let _ = f.slice(1, -1),
                I = q(_, i),
                O = $(I, r, n, o, i);
              if (!O) return "";
              u = u.replace(f, O);
            }
          return (u = q(u, i)), u;
        }
        function q(u, r) {
          let n = /%[A-Za-z0-9_:]+%/g,
            o = u.match(n);
          if (o)
            for (let i of o) {
              let c = i.slice(1, -1).toLowerCase(),
                x = r.get(c);
              x == null
                ? console.log("No rich presence found for", c)
                : (u = u.replace(i, x));
            }
          return u;
        }
        var T = s(72849),
          j = s(71742),
          U = s(8323),
          M = Object.defineProperty,
          G = Object.getOwnPropertyDescriptor,
          A = (u, r, n, o) => {
            for (
              var i = o > 1 ? void 0 : o ? G(r, n) : r, c = u.length - 1, x;
              c >= 0;
              c--
            )
              (x = u[c]) && (i = (o ? x(r, n, i) : x(i)) || i);
            return o && i && M(r, n, i), i;
          };
        function Z(u) {
          return useObserver(() => D.GetAppInfo(u));
        }
        function K(u) {
          return useObserver(() => u.map((r) => D.GetAppInfo(r)));
        }
        const v = 3600 * 24 * 7 * 2;
        class l {
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
          Init(r) {
            this.m_CMInterface = r;
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
          RegisterCallbackOnLoad(r) {
            if (!this.BHavePendingAppInfoRequests()) {
              (0, j.wT)(
                !1,
                "Registering for callback on appinfo load, but nothing queued",
              ),
                r();
              return;
            }
            this.m_fnCallbackOnAppInfoLoaded.Register(r);
          }
          IsLoadingAppID(r) {
            return this.m_setPendingAppInfo.has(r);
          }
          GetAppInfo(r) {
            if (
              ((0, j.wT)(
                this.m_CMInterface,
                "CAppInfoStore.GetAppInfo called before Init",
              ),
              !this.m_mapAppInfo.has(r))
            ) {
              let n = new E.by(r);
              this.m_mapAppInfo.set(r, n), this.QueueAppInfoRequest(r);
            }
            return this.m_mapAppInfo.get(r);
          }
          QueueAppInfoRequest(r) {
            return r
              ? (this.m_setPendingAppInfo.size ||
                  ((this.m_PendingAppInfoPromise = new Promise(
                    (n) => (this.m_PendingAppInfoResolve = n),
                  )),
                  window.setTimeout(() => this.FlushPendingAppInfo(), 25)),
                this.m_setPendingAppInfo.add(r),
                this.m_PendingAppInfoPromise)
              : Promise.resolve();
          }
          async FlushPendingAppInfo() {
            const r = this.m_PendingAppInfoResolve,
              n = Array.from(this.m_setPendingAppInfo);
            (this.m_PendingAppInfoPromise = void 0),
              (this.m_PendingAppInfoResolve = void 0),
              this.m_setPendingAppInfo.clear(),
              await this.LoadAppInfoBatch(n),
              r?.();
          }
          async LoadAppInfoBatch(r) {
            this.m_cAppInfoRequestsInFlight++;
            let n = await this.LoadAppInfoBatchFromLocalCache(r);
            if (n.length) {
              console.log("Loading batch of App Info from Steam: ", n),
                await this.m_CMInterface?.WaitUntilLoggedOn();
              let o = C.w.Init(T._z);
              o.Body().set_language((0, B.sfN)(p.TS.LANGUAGE));
              const i = 50;
              for (; n.length > 0; ) {
                const c = Math.min(i, n.length),
                  x = n.slice(0, c);
                (n = n.slice(c)), o.Body().set_appids(x);
                const f = await T.BE.GetApps(
                  this.m_CMInterface.GetServiceTransport(),
                  o,
                );
                f.GetEResult() == S.R
                  ? this.OnGetAppsResponse(f)
                  : console.error(
                      `Error when calling CommunityService.GetApps: EResult=${f.GetEResult()}, AppIDs:`,
                      x,
                    );
              }
            }
            --this.m_cAppInfoRequestsInFlight == 0 &&
              this.m_setPendingAppInfo.size == 0 &&
              (this.m_fnCallbackOnAppInfoLoaded.Dispatch(),
              this.m_fnCallbackOnAppInfoLoaded.ClearAllCallbacks());
          }
          OnGetAppsResponse(r) {
            let n = [];
            for (let o of r.Body().apps()) {
              let i = this.m_mapAppInfo.get(o.appid());
              (0, j.wT)(
                i,
                `Got AppInfo response for unrequested AppID: ${o.appid()}`,
              ),
                i &&
                  ((i = new E.by(o.appid())),
                  i.DeserializeFromMessage(o),
                  this.m_mapAppInfo.set(o.appid(), i),
                  n.push(i));
            }
            this.SaveAppInfoBatchToLocalCache(n);
          }
          OnAppOverviewChange(r) {
            for (let n of r) {
              const o = new E.by(n.appid());
              o.DeserializeFromAppOverview(n),
                o.is_initialized && this.m_mapAppInfo.set(n.appid(), o);
            }
          }
          async EnsureAppInfoForAppIDs(r) {
            let n = !1;
            return (
              r.forEach((o) => {
                let i = this.m_mapAppInfo.get(o);
                if (i) {
                  i.is_valid || (n = !0);
                  return;
                }
                (i = new E.by(o)),
                  this.m_mapAppInfo.set(o, i),
                  this.QueueAppInfoRequest(o),
                  (n = !0);
              }),
              n && this.m_PendingAppInfoPromise !== void 0
                ? this.m_PendingAppInfoPromise
                : Promise.resolve()
            );
          }
          SetCacheStorage(r) {
            this.m_CacheStorage = r;
          }
          GetCacheKeyForAppID(r) {
            return "APPINFO_" + r;
          }
          async LoadAppInfoBatchFromLocalCache(r) {
            if (!this.m_CacheStorage) return r;
            console.log("Loading batch of App Info from Local Cache: ", r);
            const n = new Date(new Date().getTime() - v * 1e3),
              o = async (f) => {
                const _ = await this.m_CacheStorage?.GetObject(
                  this.GetCacheKeyForAppID(f),
                );
                if (!_) return f;
                let I = this.m_mapAppInfo.get(f);
                return (
                  (0, j.wT)(
                    I,
                    "Didn't find AppInfo in our map when loading from cache but it should've been there?",
                  ),
                  I
                    ? ((I = new E.by(f)),
                      I.DeserializeFromCacheObject(_),
                      I.is_initialized
                        ? (this.m_mapAppInfo.set(f, I),
                          I.time_updated_from_server < n ? f : null)
                        : (console.warn(
                            "Failed to deserialize cached App Info: ",
                            f,
                            _,
                          ),
                          f))
                    : f
                );
              };
            let i = r.map((f) => o(f));
            return (await Promise.all(i)).filter((f) => f !== null);
          }
          async SaveAppInfoBatchToLocalCache(r) {
            if (this.m_CacheStorage) {
              console.log(
                "Saving batch of App Info to Local Cache: ",
                r.map((n) => n.appid),
              );
              for (const n of r) {
                const o = n.SerializeToCacheObject();
                o &&
                  this.m_CacheStorage.StoreObject(
                    this.GetCacheKeyForAppID(n.appid),
                    o,
                  );
              }
            }
          }
          Localize(r, n, o) {
            const i = this.GetRichPresenceLoc(r);
            return i
              ? i.Localize(n, o)
              : p.TS.EUNIVERSE != B.wLO
                ? (console.log(
                    `Unable to find app localization information for app ${r} token ${n}, this may not have had a chance to load yet`,
                  ),
                  n)
                : "";
          }
          GetRichPresenceLoc(r) {
            if (this.m_mapRichPresenceLoc.has(r.toString())) {
              let o = this.m_mapRichPresenceLoc.get(r.toString());
              return (
                o.m_nLastUpdated + 1e3 * 60 * E.IU < Date.now() &&
                  this.QueueRichPresenceLocRequest(o),
                o
              );
            }
            let n = new N(r);
            return (
              this.m_mapRichPresenceLoc.set(r.toString(), n),
              this.QueueRichPresenceLocRequest(n),
              n
            );
          }
          GetRichPresenceLocAsync(r) {
            let n = this.GetRichPresenceLoc(r);
            return n.m_nLastUpdated ? Promise.resolve(n) : n.m_fetching;
          }
          OnRichPresenceLocUpdate(r, n) {
            r.m_nLastUpdated = Date.now();
            for (let o of n) {
              let i = o.language(),
                c = r.m_mapLanguages.get(i);
              c
                ? c.clear()
                : (r.m_mapLanguages.set(i, new Map()),
                  (c = r.m_mapLanguages.get(i)));
              for (let x of o.tokens())
                c?.set(x.name().toLowerCase(), x.value());
            }
          }
          QueueRichPresenceLocRequest(r) {
            return (
              r.m_fetching ||
                ((r.m_fetching = this.m_CMInterface
                  .WaitUntilLoggedOn()
                  .then(() => {
                    let n = C.w.Init(T.zQ);
                    return (
                      n.Body().set_appid(r.GetAppID()),
                      n.Body().set_language(p.TS.LANGUAGE),
                      T.BE.GetAppRichPresenceLocalization(
                        this.m_CMInterface.GetServiceTransport(),
                        n,
                      )
                    );
                  })
                  .then(
                    (n) => (
                      (r.m_fetching = null),
                      n.GetEResult() != S.R
                        ? Promise.reject()
                        : (this.OnRichPresenceLocUpdate(
                            r,
                            n.Body().token_lists(),
                          ),
                          Promise.resolve(r))
                    ),
                  )),
                r.m_fetching.catch(() => {
                  r.m_fetching = null;
                })),
              r.m_fetching
            );
          }
        }
        A([t.XI], l.prototype, "OnGetAppsResponse", 1),
          A([t.XI], l.prototype, "OnRichPresenceLocUpdate", 1);
        const D = new l();
      },
      84676: (te, se, s) => {
        "use strict";
        s.d(se, {
          G6: () => j,
          Gg: () => G,
          Ow: () => M,
          Sq: () => ce,
          YM: () => D,
          eR: () => q,
          ik: () => T,
          mZ: () => A,
          t7: () => U,
          zX: () => K,
        });
        var t = s(41735),
          B = s.n(t),
          S = s(90626),
          C = s(72604),
          E = s(48156),
          p = s(30096),
          N = s(10142);
        function $(u, r, n = !0) {
          const o = n
              ? CStoreItemCache.k_DataRequest_BasicInfo
              : CStoreItemCache.k_DataRequest_CommonOnly,
            i = n || CStoreItemCache.Get().BHasStoreItem(u, r, o) ? u : null,
            [c, x] = j(i, r, o),
            [f, _] = useState(null),
            [I, O] = j(f, r, o);
          useEffect(() => {
            c?.GetAppType() === EStoreAppType.k_EStoreAppType_Demo &&
              _(c.GetParentAppID());
          }, [c]);
          let y = c?.GetShortDescription()
            ? StripBBCodeTags(c.GetShortDescription())
            : "";
          (!y || y.length === 0) &&
            I &&
            (y = I?.GetShortDescription()
              ? StripBBCodeTags(I.GetShortDescription())
              : "");
          const F = x == T && (!f || O == T);
          return [y, F];
        }
        const ce = 1,
          q = 2,
          T = 3;
        function j(u, r, n, o) {
          const i = (0, S.useRef)(void 0),
            c = (0, S.useRef)(void 0),
            x = (0, p.CH)();
          i.current = u;
          const [f, _] = (0, S.useState)(void 0),
            {
              include_assets: I,
              include_release: O,
              include_platforms: y,
              include_all_purchase_options: F,
              include_screenshots: H,
              include_trailers: W,
              include_ratings: J,
              include_tag_count: k,
              include_reviews: w,
              include_basic_info: m,
              include_supported_languages: he,
              include_full_description: ve,
              include_included_items: xe,
              include_assets_without_overrides: Me,
              apply_user_filters: b,
              include_links: R,
              include_extra_details: Q,
              include_optin_registration_tags: z,
            } = n;
          if (
            ((0, S.useEffect)(() => {
              const oe = {
                include_assets: I,
                include_release: O,
                include_platforms: y,
                include_all_purchase_options: F,
                include_screenshots: H,
                include_trailers: W,
                include_ratings: J,
                include_tag_count: k,
                include_reviews: w,
                include_basic_info: m,
                include_supported_languages: he,
                include_full_description: ve,
                include_included_items: xe,
                include_assets_without_overrides: Me,
                apply_user_filters: b,
                include_links: R,
                include_extra_details: Q,
                include_optin_registration_tags: z,
              };
              let Se = null;
              return (
                !u ||
                  u < 0 ||
                  N.A.Get().BHasStoreItem(u, r, oe) ||
                  (f !== void 0 && o && o == c.current) ||
                  (o !== c.current && (_(void 0), (c.current = o)),
                  (Se = B().CancelToken.source()),
                  N.A.Get()
                    .QueueStoreItemRequest(u, r, oe)
                    .then((be) => {
                      !Se?.token.reason && i.current === u && _(be == C.R), x();
                    })),
                () => Se?.cancel("useStoreItemCache: unmounting")
              );
            }, [
              u,
              r,
              o,
              f,
              I,
              O,
              y,
              F,
              H,
              W,
              J,
              k,
              w,
              m,
              he,
              ve,
              xe,
              Me,
              b,
              R,
              Q,
              z,
              x,
            ]),
            !u)
          )
            return [null, q];
          if (f === !1) return [void 0, q];
          if (N.A.Get().BIsStoreItemMissing(u, r)) return [void 0, q];
          if (!N.A.Get().BHasStoreItem(u, r, n)) return [void 0, ce];
          const Y = N.A.Get().GetStoreItemWithLegacyVisibilityCheck(u, r);
          return Y ? [Y, T] : [null, q];
        }
        function U(u, r, n) {
          return j(u, E.c6.qI, r, n);
        }
        function M(u, r, n) {
          return j(u, E.c6.xO, r, n);
        }
        function G(u, r, n) {
          return j(u, E.c6.RD, r, n);
        }
        function A(u, r, n) {
          const [o, i] = j(u, r, n);
          let c;
          o?.GetStoreItemType() == E.c6.RD &&
            !o.GetAssets()?.GetHeaderURL() &&
            o?.GetIncludedAppIDs().length == 1 &&
            (c = o.GetIncludedAppIDs()[0]);
          const [x, f] = U(c, n);
          return c && x?.BIsVisible() ? [x, f] : [o, i];
        }
        function Z(u, r, n, o) {
          const i = (0, p.CH)(),
            {
              include_assets: c,
              include_release: x,
              include_platforms: f,
              include_all_purchase_options: _,
              include_screenshots: I,
              include_trailers: O,
              include_ratings: y,
              include_tag_count: F,
              include_reviews: H,
              include_basic_info: W,
              include_supported_languages: J,
              include_full_description: k,
              include_included_items: w,
              include_assets_without_overrides: m,
              apply_user_filters: he,
              include_links: ve,
              include_extra_details: xe,
              include_optin_registration_tags: Me,
            } = n;
          return (
            (0, S.useEffect)(() => {
              if (!u || u.length == 0) return;
              const R = {
                  include_assets: c,
                  include_release: x,
                  include_platforms: f,
                  include_all_purchase_options: _,
                  include_screenshots: I,
                  include_trailers: O,
                  include_ratings: y,
                  include_tag_count: F,
                  include_reviews: H,
                  include_basic_info: W,
                  include_supported_languages: J,
                  include_full_description: k,
                  include_included_items: w,
                  include_assets_without_overrides: m,
                  apply_user_filters: he,
                  include_links: ve,
                  include_extra_details: xe,
                  include_optin_registration_tags: Me,
                },
                Q = u.filter(
                  (oe) =>
                    !(
                      N.A.Get().BHasStoreItem(oe, r, R) ||
                      N.A.Get().BIsStoreItemMissing(oe, r)
                    ),
                );
              if (Q.length == 0) return;
              const z = B().CancelToken.source(),
                Y = Q.map((oe) => N.A.Get().QueueStoreItemRequest(oe, r, R));
              return (
                Promise.all(Y).then(() => {
                  z.token.reason || i();
                }),
                () => z.cancel("useStoreItemCacheMultiplePackages: unmounting")
              );
            }, [
              u,
              r,
              o,
              i,
              c,
              x,
              f,
              _,
              I,
              O,
              y,
              F,
              H,
              W,
              J,
              k,
              w,
              m,
              he,
              ve,
              xe,
              Me,
            ]),
            u
              ? u.every(
                  (R) =>
                    N.A.Get().BHasStoreItem(R, r, n) ||
                    N.A.Get().BIsStoreItemMissing(R, r),
                )
                ? u.every((R) =>
                    N.A.Get().GetStoreItemWithLegacyVisibilityCheck(R, r),
                  )
                  ? T
                  : q
                : ce
              : q
          );
        }
        function K(u, r, n) {
          return Z(u, E.c6.qI, r, n);
        }
        function v(u, r, n) {
          return Z(u, EStoreItemType.k_EStoreItemType_Bundle, r, n);
        }
        function l(u, r, n) {
          return Z(u, EStoreItemType.k_EStoreItemType_Package, r, n);
        }
        function D() {
          S.useEffect(
            () => (
              N.A.Get().SetReturnUnavailableItems(!0),
              () => N.A.Get().SetReturnUnavailableItems(!1)
            ),
            [],
          );
        }
      },
      19681: (te, se, s) => {
        "use strict";
        s.d(se, { l: () => B });
        var t = s(98609);
        function B(S, C) {
          if (!(!S?.asset_url_format || typeof S[C] != "string"))
            return (
              t.TS.BASE_URL_SHARED_CDN +
              "/store_item_assets/" +
              S.asset_url_format.replace("${FILENAME}", S[C])
            );
        }
      },
      86390: (te, se, s) => {
        "use strict";
        s.d(se, { Cg: () => U, pZ: () => G, vg: () => M });
        var t = s(7850),
          B = s(90626),
          S = s(88003),
          C = s(18210),
          E = s(3166),
          p = s(87242),
          N = s(74974),
          $ = s(6740),
          ce = s(62179),
          q = s(3685),
          T = s(96538);
        function j(Z) {
          return (0, t.jsx)(S.x_, {
            onEscKeypress: Z.closeModal,
            bDisableBackgroundDismiss: !0,
            children: (0, t.jsx)(A, {
              redirectURL: Z.redirectURL,
              guestOption: Z.guestOption,
            }),
          });
        }
        function U(Z) {
          const { redirectURL: K = window.location.href } = Z;
          return (0, t.jsx)(T.EN, {
            active: !0,
            children: (0, t.jsx)(j, { redirectURL: K }),
          });
        }
        function M() {
          (0, S.pg)(
            (0, t.jsx)(j, {
              ownerWin: window,
              redirectURL: window.location.href,
            }),
            window,
            { strTitle: (0, C.we)("#Login_SignInTitle") },
          );
        }
        function G(Z, K) {
          (0, S.pg)(
            (0, t.jsx)(j, { ownerWin: window, redirectURL: Z, guestOption: K }),
            window,
            { strTitle: (0, C.we)("#Login_SignInTitle") },
          );
        }
        function A(Z) {
          const { redirectURL: K, guestOption: v } = Z,
            [l] = (0, B.useState)(
              new ce.x(
                new q.D(E.TS.WEBAPI_BASE_URL),
              ).GetAnonymousServiceTransport(),
            ),
            [D, u] = (0, B.useState)(!1),
            r = (n) => {
              n == p.wI.k_PrimaryDomainFail ? u(!0) : window.location.assign(K);
            };
          return (0, t.jsx)("div", {
            children: D
              ? (0, t.jsx)(N.Fn, {})
              : (0, t.jsx)(N.YN, {
                  autoFocus: !0,
                  transport: l,
                  platform: $.SS.tS,
                  onComplete: r,
                  redirectUrl: K,
                  theme: "modal",
                  children: v && (0, t.jsx)(N.Mk, { redirectURL: K }),
                }),
          });
        }
      },
      96533: (te, se, s) => {
        "use strict";
        s.r(se), s.d(se, { default: () => Me });
        var t = s(7850),
          B = s(41735),
          S = s.n(B),
          C = s(3166),
          E = s(80902);
        function p(b, R, Q, z, Y) {
          return (0, E.I)(N(b, R, Q, z, Y));
        }
        function N(b, R, Q, z, Y) {
          return {
            queryKey: ["gamemixer", b, R, Q, z, Y],
            queryFn: async () => {
              let oe = {
                appids: b.join(","),
                appweights: R.join(","),
                sessionid: (0, C.KC)(),
                selffactor: Q,
                popularity: Y ? 0 : z,
                scoperange: Y ? 100 : 0,
                scopedecayrange: Y ? 1e3 : 0,
                scopedecaystrength: Y ? 20 : 0,
              };
              const Se = await S().get(
                `${C.TS.STORE_BASE_URL}gameexplorer/exploreapplist`,
                { params: oe, withCredentials: !0, timeout: 1e4 },
              );
              if (Se.data)
                return Object.entries(Se.data)
                  .map(([be, Pe]) => ({
                    nAppID: Number(be),
                    fDistance: Number(Pe),
                  }))
                  .filter((be) => be.fDistance > 0 && !b.includes(be.nAppID))
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
              let b = { sessionid: (0, C.KC)() };
              const R = await S().get(
                `${C.TS.STORE_BASE_URL}gameexplorer/exploreplayedlist`,
                { params: b, withCredentials: !0, timeout: 1e4 },
              );
              if (R.data) return R.data;
              throw "Failed FetchAppValues";
            },
            placeholderData: (b) => b,
          };
        }
        var q = s(1418),
          T = s(8892),
          j = s(87275),
          U = s(21663),
          M = s(53080),
          G = s(90626),
          A = s(86390),
          Z = s(51079),
          K = s(36707),
          v = s(18210),
          l = s(41526),
          D = s(19298),
          u = s(84676),
          r = s(47385),
          n = s(96117),
          o = s(92757),
          i = s(48156),
          c = s(24805);
        const x = {
          arrSelectedAppInfos: [],
          nSelfFactor: 0,
          nPopularity: 0,
          bSimilar: !0,
        };
        function f(b) {
          const R =
              b.arrSelectedAppInfos.length == 0
                ? "0"
                : b.arrSelectedAppInfos.map((z) => z.nAppID).join(),
            Q =
              b.arrSelectedAppInfos.length == 0
                ? "0"
                : b.arrSelectedAppInfos.map((z) => z.nWeight.toFixed(0)).join();
          return `/gameexplorer/${R}/${Q}/${b.nSelfFactor}/${b.nPopularity}/${b.bSimilar}`;
        }
        function _(b) {
          const R = b.appids?.split(",").filter((z) => z != "0") ?? [],
            Q = b.weights?.split(",").filter((z) => z != "0") ?? [];
          return {
            arrSelectedAppInfos: R.map((z) => Number(z)).map((z, Y) => ({
              nAppID: z,
              nWeight: Number(Q[Y]),
            })),
            nSelfFactor: Number(b?.selffactor ?? "0"),
            nPopularity: Number(b?.popularity ?? "0"),
            bSimilar: b?.similar == "true",
          };
        }
        function I() {
          const b = (0, o.g)(),
            R = _(b),
            [Q, z] = G.useState(R),
            [Y, oe] = G.useState(R),
            Se = (0, o.W6)(),
            be = p(
              Y.arrSelectedAppInfos.map((re) => re.nAppID),
              Y.arrSelectedAppInfos.map((re) => re.nWeight),
              Y.nSelfFactor,
              Y.nPopularity,
              Y.bSimilar,
            ),
            Pe = (re, ie) => {
              z(re), ie && (Se.push(f(re)), oe(re));
            },
            de = (re) => {
              const ie = {
                ...Y,
                arrSelectedAppInfos: [{ nAppID: re, nWeight: 100 }],
              };
              z(ie), Se.push(f(ie)), oe(ie);
            };
          return (0, t.jsx)(Z.Ay, {
            controller: "gameexplorer",
            method: "default",
            feature: "capsule",
            children: (0, t.jsx)(q.Y, {
              children: (0, t.jsx)(D.Z, {
                className: (0, K.A)(
                  l.GameExplorerApp,
                  be.isFetching && l.Refreshing,
                ),
                children: (0, t.jsxs)(D.Z, {
                  className: l.GameExplorerContainer,
                  children: [
                    (0, t.jsx)(O, {}),
                    !C.iA.steamid && (0, t.jsx)(w, {}),
                    (0, t.jsx)(W, { state: Q, onChange: Pe }),
                    be.data &&
                      (0, t.jsx)(k, {
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
        function O() {
          return (0, t.jsxs)(D.Z, {
            className: l.GameExplorerHeader,
            children: [
              (0, t.jsx)(D.Z, {
                className: l.GameExplorerTitle,
                children: "Game Explorer",
              }),
              (0, t.jsx)(D.Z, {
                className: l.GameExplorerDescription,
                children: "Explore and Mix Games",
              }),
            ],
          });
        }
        function y(b) {
          const [R] = (0, u.t7)(b.selectedAppInfo.nAppID, {
            include_basic_info: !0,
            include_assets_without_overrides: !0,
          });
          if (!R) return null;
          const Q = R.GetAssetsWithoutOverrides().GetMainCapsuleURL();
          return (0, t.jsxs)("div", {
            className: l.SelectedApp,
            children: [
              (0, t.jsx)("div", {
                className: l.RemoveButttonContainer,
                children: (0, t.jsx)(T.$, {
                  size: "1",
                  color: "red",
                  onClick: () => b.onRemove(b.selectedAppInfo.nAppID),
                  children: "X",
                }),
              }),
              (0, t.jsx)("img", { className: l.CapsuleImage, src: Q }),
              (0, t.jsx)("div", {
                className: l.WeightContainer,
                children:
                  b.nNumSelected > 1 &&
                  (0, t.jsx)(j.A, {
                    value: b.selectedAppInfo.nWeight,
                    min: 0,
                    max: 100,
                    onValueChange: (z) =>
                      b.onWeightChange(b.selectedAppInfo.nAppID, z, !1),
                    onValueSettled: (z) =>
                      b.onWeightChange(b.selectedAppInfo.nAppID, z, !0),
                  }),
              }),
            ],
          });
        }
        function F(b) {
          if (b.bSimilar) return "Similar";
          switch (b.nPopularity) {
            case 0:
              return "Any";
            case 40:
              return "Popular";
            case 130:
              return "Niche";
          }
          return "";
        }
        function H(b) {
          switch (b.nSelfFactor) {
            case 0:
              return "None";
            case 20:
              return "Some";
            case 40:
              return "Lots";
          }
          return "";
        }
        function W(b) {
          const [R, Q] = G.useState(F(b.state)),
            [z, Y] = G.useState(H(b.state)),
            oe = (V, le, me) => {
              let ee = b.state.arrSelectedAppInfos.slice();
              ee.find((X) => X.nAppID == V) == null &&
                ((le = 100 / (ee.length + 1)),
                ee.push({ nAppID: V, nWeight: le }));
              let ue = !1;
              if (
                (le == -1 &&
                  ((le = 0), (ee = ee.filter((X) => X.nAppID != V)), (ue = !0)),
                ee.length > 1)
              ) {
                const X = ee
                    .map((Ce) => (Ce.nAppID != V ? Ce.nWeight : null))
                    .filter((Ce) => Ce != null),
                  He = X.reduce((Ce, Re) => Ce + Re, 0);
                let we = (100 - le - He) / (ee.length - (ue ? 0 : 1));
                const Fe = X.reduce(
                    (Ce, Re) => Ce + Math.max(0, Re + we - 100),
                    0,
                  ),
                  ke = X.reduce((Ce, Re) => Ce + Math.min(0, Re + we), 0);
                (we += Math.floor(Fe / (ee.length - 1))),
                  (we += Math.floor(ke / (ee.length - 1))),
                  (ee = ee.map((Ce) => ({
                    nAppID: Ce.nAppID,
                    nWeight:
                      Ce.nAppID == V
                        ? le
                        : Math.max(0, Math.min(100, Ce.nWeight + we)),
                  }))),
                  b.onChange({ ...b.state, arrSelectedAppInfos: ee }, me);
              } else b.onChange({ ...b.state, arrSelectedAppInfos: ee }, me);
            },
            Se = (V) => {
              oe(V, 100, !0);
            },
            be = (V) => {
              oe(V, -1, !0);
            },
            Pe = (V) => {
              switch (V) {
                case "None":
                  b.onChange({ ...b.state, nSelfFactor: 0 }, !0);
                  break;
                case "Some":
                  b.onChange({ ...b.state, nSelfFactor: 20 }, !0);
                  break;
                case "Lots":
                  b.onChange({ ...b.state, nSelfFactor: 40 }, !0);
                  break;
              }
              Y(V);
            },
            de = (V) => {
              switch (V) {
                case "Similar":
                  b.onChange({ ...b.state, nPopularity: 0, bSimilar: !0 }, !0);
                  break;
                case "Any":
                  b.onChange({ ...b.state, nPopularity: 0, bSimilar: !1 }, !0);
                  break;
                case "Popular":
                  b.onChange({ ...b.state, nPopularity: 40, bSimilar: !1 }, !0);
                  break;
                case "Niche":
                  b.onChange(
                    { ...b.state, nPopularity: 130, bSimilar: !1 },
                    !0,
                  );
                  break;
              }
              Q(V);
            },
            re = ["Similar", "Any", "Popular", "Niche"],
            ie = ["None", "Some", "Lots"];
          return (0, t.jsx)("div", {
            className: l.GameExplorerKnobs,
            children: (0, t.jsxs)("div", {
              className: l.AppList,
              children: [
                (0, t.jsxs)("div", {
                  className: l.AppRow,
                  children: [
                    b.state.arrSelectedAppInfos.length == 0 &&
                      (0, t.jsx)("div", {
                        className: l.Empty,
                        children: "Add games to start exploring",
                      }),
                    b.state.arrSelectedAppInfos.map((V) =>
                      (0, t.jsx)(
                        y,
                        {
                          selectedAppInfo: V,
                          onWeightChange: oe,
                          onRemove: be,
                          nNumSelected: b.state.arrSelectedAppInfos.length,
                        },
                        V.nAppID,
                      ),
                    ),
                  ],
                }),
                (0, t.jsxs)("div", {
                  className: l.AppSelectors,
                  children: [
                    (0, t.jsx)(ve, {
                      fnSelectAppID: Se,
                      arrSelectedAppIDs: b.state.arrSelectedAppInfos.map(
                        (V) => V.nAppID,
                      ),
                    }),
                    (0, t.jsx)(xe, {
                      fnSelectAppID: Se,
                      arrSelectedAppIDs: b.state.arrSelectedAppInfos.map(
                        (V) => V.nAppID,
                      ),
                    }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  className: l.OtherControls,
                  children: [
                    (0, t.jsxs)("div", {
                      className: l.OtherControl,
                      children: [
                        (0, t.jsx)("div", {
                          className: l.ControlTitle,
                          children: "Popularity",
                        }),
                        (0, t.jsx)(U.I, {
                          options: re,
                          value: R,
                          onValueChange: (V) => de(V),
                          radius: "sm",
                        }),
                        (0, t.jsxs)("div", {
                          className: l.ControlDescription,
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
                      className: l.OtherControl,
                      children: [
                        (0, t.jsx)("div", {
                          className: l.ControlTitle,
                          children: "Self Factor",
                        }),
                        (0, t.jsx)(U.I, {
                          options: ie,
                          value: z,
                          onValueChange: (V) => Pe(V),
                          radius: "sm",
                        }),
                        (0, t.jsxs)("div", {
                          className: l.ControlDescription,
                          children: [
                            z == "None" &&
                              "Your game preferences are not factored in",
                            z == "Some" &&
                              "A bit of your game preferences are mixed in",
                            z == "Lots" &&
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
        function J(b) {
          const [R] = (0, u.G6)(b.nAppID, i.c6.qI, c.Xh);
          return R
            ? (0, t.jsxs)("div", {
                className: l.CapsuleContainer,
                children: [
                  (0, t.jsx)(n.W, {
                    capsule: { id: b.nAppID },
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
                    className: l.Distance,
                    children: [
                      `${(b.fDistance * 100).toFixed(2)}%`,
                      (0, t.jsx)("div", {
                        className: l.StartExplore,
                        children: (0, t.jsx)(T.$, {
                          size: "1",
                          color: "green",
                          onClick: () => b.fnSetApp(b.nAppID),
                          children: "Go",
                        }),
                      }),
                    ],
                  }),
                ],
              })
            : null;
        }
        function k(b) {
          return b.arrNearApps.length == 0
            ? null
            : (0, t.jsx)("div", {
                className: (0, K.A)(
                  l.GameExplorerResults,
                  b.bIsPending && l.Pending,
                ),
                children: b.arrNearApps?.map((R) =>
                  (0, t.jsx)(
                    J,
                    {
                      nAppID: R.nAppID,
                      fDistance: R.fDistance,
                      fnSetApp: b.fnSetApp,
                    },
                    R.nAppID,
                  ),
                ),
              });
        }
        function w() {
          return (0, t.jsxs)(D.Z, {
            className: l.PersonalCalendarLoginPrompt,
            children: [
              (0, v.we)("#PersonalCalendar_LoginPrompt"),
              (0, t.jsx)("button", {
                onClick: A.vg,
                className: l.LoginButton,
                children: (0, v.we)("#Login_SignIn"),
              }),
            ],
          });
        }
        function m(b) {
          const [R] = (0, u.t7)(b.nAppID, {
            include_basic_info: !0,
            include_assets_without_overrides: !0,
          });
          if (!R) return null;
          const Q = R.GetAssetsWithoutOverrides().GetSmallCapsuleURL();
          return (0, t.jsxs)("div", {
            className: l.AppSelectorResult,
            onPointerDown: () => b.onClick(b.nAppID),
            children: [
              (0, t.jsx)("img", { className: l.Logo, src: Q }),
              (0, t.jsx)("div", {
                className: l.RightSide,
                children: R.GetName(),
              }),
            ],
          });
        }
        const he = G.forwardRef(function (R, Q) {
            const z = (0, r.T3)(R.strSearch, null, 10),
              Y = R.fnSetResultApps;
            return (
              G.useEffect(() => {
                Y(z.data?.rgItemIDs.map((oe) => oe.appid));
              }, [Y, z.data]),
              (0, t.jsx)("div", {
                className: (0, K.A)(
                  l.AppSelectorResults,
                  z.data?.rgItemIDs.length > 0 && l.Show,
                ),
                ref: Q,
                children: z.data?.rgItemIDs
                  .filter((oe) => !R.arrIgnoreAppIDs.includes(oe.appid))
                  .map((oe) =>
                    (0, t.jsx)(
                      m,
                      { nAppID: oe.appid, onClick: R.fnClickApp },
                      oe.appid,
                    ),
                  ),
              })
            );
          }),
          ve = (b) => {
            const [R, Q] = G.useState(""),
              [z, Y] = G.useState(0),
              [oe, Se] = G.useState(0),
              [be, Pe] = G.useState([]),
              de = G.useRef(z),
              re = G.useRef(null),
              ie = 300;
            G.useEffect(() => {
              de.current = z;
            }, [z]);
            const V = () => {
                Date.now() - de.current < ie || (Se(0), Pe([]));
              },
              le = (X) => {
                X != R && (Q(X), Y(Date.now()), setTimeout(V, ie));
              },
              me = (X) => {
                b.fnSelectAppID(X), Q(""), Se(0), Pe([]), Y(Date.now());
              },
              ee = (X) => {
                switch (X) {
                  case "Enter": {
                    be.length > 0 && me(be[0]);
                    break;
                  }
                  case "Escape": {
                    Q("");
                    break;
                  }
                }
              },
              ue = b.arrSelectedAppIDs.length >= 3;
            return (0, t.jsxs)("div", {
              className: l.AppSelector,
              children: [
                (0, t.jsx)("input", {
                  type: "text",
                  className: (0, K.A)(l.ValueInput, ue && l.Disabled),
                  value: R,
                  onChange: (X) => le(X.target.value),
                  onKeyDown: (X) => ee(X.key),
                  onBlur: (X) => Q(""),
                  placeholder: ue ? "Max three games" : "Type any game name",
                  disabled: ue,
                }),
                (0, t.jsx)(he, {
                  strSearch: R,
                  nSelectedResult: oe,
                  fnSetResultApps: Pe,
                  fnClickApp: me,
                  arrIgnoreAppIDs: b.arrSelectedAppIDs,
                  ref: re,
                }),
              ],
            });
          },
          xe = (b) => {
            const Q = $().data,
              z = Q?.appids ?? [];
            return (0, t.jsx)("div", {
              className: l.AppPlayedSelector,
              children: (0, t.jsx)(M.l6, {
                options: z,
                size: "1",
                selectedValue: 0,
                onSelectionChange: (Y) => b.fnSelectAppID(Y),
                getOptionLabel: (Y) =>
                  Y == 0
                    ? "Select a recent game to add it"
                    : Q?.names[Q?.appids.indexOf(Y)],
              }),
            });
          },
          Me = I;
      },
      67637: (te, se, s) => {
        "use strict";
        s.r(se), s.d(se, { default: () => _t });
        var t = s(7850),
          B = s(58732),
          S = s(85528),
          C = s(3166),
          E = s(14947),
          p = s(30096),
          N = s(41735),
          $ = s.n(N),
          ce = Object.defineProperty,
          q = Object.getOwnPropertyDescriptor,
          T = (d, e, a, g) => {
            for (
              var h = g > 1 ? void 0 : g ? q(e, a) : e, L = d.length - 1, P;
              L >= 0;
              L--
            )
              (P = d[L]) && (h = (g ? P(e, a, h) : P(h)) || h);
            return g && h && ce(e, a, h), h;
          };
        class j {
          rgModelNames = [];
          constructor() {
            (0, E.Gn)(this);
          }
          Init(e) {
            S.Vw.Init(e);
            const a = `${C.TS.STORE_BASE_URL}labs/ajaxgetsimilaritymodelnames`;
            $()
              .get(a)
              .then((g) => {
                if (g.data) {
                  let h = [];
                  for (const L of g.data) L != "default" && h.push(L);
                  h.sort(), (h = ["default", ...h]), (this.rgModelNames = h);
                }
              });
          }
          async ComputePathBetweenApps(e, a, g, h, L, P, ae) {
            const ge = Math.acos(g);
            let fe = async (Oe) => {
                let Ee = await this.GetNeighbors(Oe),
                  je = [];
                for (let Ie = 0; Ie < Ee.length; Ie++) {
                  const pe = Ee[Ie];
                  if (
                    (!h || je.length > h) &&
                    (pe.cost > ge || (L && je.length >= L))
                  )
                    break;
                  je.push(pe);
                }
                return je;
              },
              De = await new M(
                fe,
                this.EstimateCosts,
                (Oe, Ee) => Oe == Ee,
                ae,
              ).FindPath(e, a, P || 10);
            if (De.path) {
              let Oe = [],
                Ee = 0;
              for (let je = 0; je < De.path.length; je++) {
                const Ie = De.path[je],
                  pe = Ie.cost - Ee;
                (Ee = Ie.cost),
                  Oe.push({ appid: Ie.node, similarity: Math.cos(pe) });
              }
              return Oe;
            } else throw new Error("Unable to compute path.");
          }
          async GetNeighbors(e) {
            const a = `${C.TS.STORE_BASE_URL}labs/ajaxgetsimilarapps?appid=${e}`;
            let g = await $().get(a),
              h = [];
            if (g.data && g.data.appid == e)
              for (let L = 0; L < g.data.similar_appids.length; L++)
                h.push({
                  node: g.data.similar_appids[L],
                  cost: Math.acos(g.data.similarity_scores[L]),
                });
            return h;
          }
          async EstimateCosts(e, a) {
            const g = `${C.TS.STORE_BASE_URL}labs/ajaxgetappsimilarities?appidtarget=${a}&${e.map((L) => "appid[]=" + L.toString()).join("&")}`;
            let h = await $().get(g);
            if (h.data && h.data.similarity_scores)
              return h.data.similarity_scores.map((L) =>
                Math.acos(parseFloat(L)),
              );
            throw new Error("Unable to fetch cost estimates");
          }
        }
        T([E.sH], j.prototype, "rgModelNames", 2),
          T([p.oI], j.prototype, "GetNeighbors", 1),
          T([p.oI], j.prototype, "EstimateCosts", 1);
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
            for (let a = 0; a < this.m_Length; a++)
              if (e(this.m_Heap[a]))
                return { index: a, element: this.m_Heap[a] };
          }
          LowerPriorityOfElement(e, a) {
            (this.m_Heap[e] = a), this.BubbleUp(e);
          }
          BubbleDown() {
            let e = 0;
            do {
              const a = e * 2 + 1,
                g = e * 2 + 2;
              let h = e;
              if (
                (a < this.m_Length &&
                  this.m_fnCompare(this.m_Heap[h], this.m_Heap[a]) > 0 &&
                  (h = a),
                g < this.m_Length &&
                  this.m_fnCompare(this.m_Heap[h], this.m_Heap[g]) > 0 &&
                  (h = g),
                h != e)
              ) {
                const L = this.m_Heap[e];
                (this.m_Heap[e] = this.m_Heap[h]),
                  (this.m_Heap[h] = L),
                  (e = h);
              } else break;
            } while (e < this.m_Length);
          }
          BubbleUp(e) {
            let a = e || this.m_Length - 1;
            for (; a > 0; ) {
              const g = (a - 1) >> 1;
              if (this.m_fnCompare(this.m_Heap[g], this.m_Heap[a]) > 0) {
                const h = this.m_Heap[g];
                (this.m_Heap[g] = this.m_Heap[a]),
                  (this.m_Heap[a] = h),
                  (a = g);
              } else break;
            }
          }
        }
        class M {
          m_fnGetNeighbors;
          m_fnEstimateCosts;
          m_fnEquality;
          m_fnIterationCallback;
          constructor(e, a, g, h) {
            (this.m_fnGetNeighbors = e),
              (this.m_fnEstimateCosts = a),
              (this.m_fnEquality = g),
              (this.m_fnIterationCallback = h);
          }
          async FindPath(e, a, g) {
            let h = new U((De, Oe) => De.cost - Oe.cost),
              L = new Set();
            h.Push({ node: e, cost: 0 });
            let P = new Map(),
              ae = new Map(),
              ge = new Map(),
              fe = (await this.m_fnEstimateCosts([e], a))[0];
            P.set(e, fe), ae.set(e, 0);
            let Ne = 0;
            for (; h.length > 0 && Ne < g; ) {
              let De = h.Pop();
              if (this.m_fnEquality(De.node, a)) {
                let Ee = [],
                  je = De.node;
                for (; ge.has(je); ) Ee.push(je), (je = ge.get(je));
                let Ie = [];
                for (let pe = Ee.length - 1; pe >= 0; pe--)
                  Ie.push({ node: Ee[pe], cost: ae.get(Ee[pe]) });
                return { path: Ie };
              }
              L.add(De.node);
              let Oe = await this.m_fnGetNeighbors(De.node);
              if (Oe.length > 0) {
                let Ee = await this.m_fnEstimateCosts(
                  Oe.map((Ie) => Ie.node),
                  a,
                );
                if (Ee.length != Oe.length)
                  return (
                    console.warn(
                      "Failed to fetch expected number of cost estimates. Failing pathfinding.",
                    ),
                    {}
                  );
                let je = ae.get(De.node);
                for (let Ie = 0; Ie < Oe.length; Ie++) {
                  const pe = Oe[Ie];
                  let Be = je + pe.cost;
                  if (
                    (!ae.has(pe.node) || Be < ae.get(pe.node)) &&
                    (ge.set(pe.node, De.node),
                    ae.set(pe.node, Be),
                    P.set(pe.node, pe.cost + Ee[Ie]),
                    !L.has(pe.node))
                  ) {
                    const Ke = pe.cost + Ee[Ie];
                    let Je = h.FindElement((It) => It.node == pe.node);
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
              Ne++, this.m_fnIterationCallback && this.m_fnIterationCallback();
            }
            throw new Error("No path found.");
          }
        }
        const G = new j();
        window.g_LabsSandbox = G;
        var A = s(90626),
          Z = s(17083),
          K = s(92757),
          v = s(62139),
          l = s(16412),
          D = s(32093),
          u = s(75844),
          r = s(36707),
          n = Object.defineProperty,
          o = Object.getOwnPropertyDescriptor,
          i = (d, e, a, g) => {
            for (
              var h = g > 1 ? void 0 : g ? o(e, a) : e, L = d.length - 1, P;
              L >= 0;
              L--
            )
              (P = d[L]) && (h = (g ? P(e, a, h) : P(h)) || h);
            return g && h && n(e, a, h), h;
          };
        class c extends A.Component {
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
                (S.Vw.EnsureAppInfoForAppIDs([this.props.appidInitial]).then(
                  () => {
                    const a = S.Vw.GetAppInfo(this.props.appidInitial);
                    this.setState({
                      appid: this.props.appidInitial,
                      appinfo: S.Vw.GetAppInfo(this.props.appidInitial),
                    });
                  },
                ),
                (this.state.appid = this.props.appidInitial));
          }
          OnDisplayClicked() {
            this.setState({ mode: "select" });
          }
          async UpdateAppSuggestions(e) {
            const a = e.target.value && e.target.value.trim();
            if (!a?.length) {
              this.setState({ strSearch: "", rgSuggestions: null });
              return;
            }
            window.clearTimeout(this.m_currentRequest),
              (this.m_currentRequest = window.setTimeout(async () => {
                const g = {
                    cc: C.TS.COUNTRY,
                    l: C.TS.LANGUAGE,
                    realm: D.TU.k_ESteamRealmGlobal,
                    origin: self.origin,
                    f: "jsonfull",
                    term: a.replace(" ", "+"),
                    require_type: "game",
                    excluded_tags: [],
                    excluded_content_descriptors: [],
                  },
                  h = `${C.TS.STORE_BASE_URL}search/suggest`,
                  L = await $().get(h, { params: g, withCredentials: !0 });
                let P;
                L?.data?.length
                  ? (P = L.data.map((ae) =>
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
                  : (P = []),
                  this.setState({ strSearch: a, rgSuggestions: P });
              }, 250));
          }
          SetSelectedApp(e) {
            e && e != 0
              ? S.Vw.EnsureAppInfoForAppIDs([e]).then(() => {
                  const a = S.Vw.GetAppInfo(e);
                  this.setState({
                    appid: e,
                    appinfo: S.Vw.GetAppInfo(e),
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
            let a = null;
            const g = (0, t.jsx)(l.pd, {
              type: "text",
              onChange: this.UpdateAppSuggestions,
            });
            if (this.state.mode == "display") {
              const h = this.state.appinfo
                ? this.state.appinfo.name +
                  (this.props.showAppIds ? ` (${this.state.appid})` : "")
                : (this.props.strPrompt ?? "Select game");
              a = (0, t.jsx)("div", {
                className: v.AppDisplay,
                children: (0, t.jsx)("div", {
                  className: v.AppName,
                  children: h,
                }),
              });
            } else if (this.state.mode == "select") {
              const h = this.state.strSearch.length > 0;
              a = (0, t.jsxs)("div", {
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
              children: a,
            });
          }
        }
        i([p.oI], c.prototype, "OnDisplayClicked", 1),
          i([p.oI], c.prototype, "UpdateAppSuggestions", 1),
          i([p.oI], c.prototype, "OnKeyUp", 1);
        class x extends A.Component {
          render() {
            if (this.props.appid == 0)
              return (0, t.jsx)("div", { className: v.SimilarApp });
            {
              const e = S.Vw.GetAppInfo(this.props.appid);
              if (!e || !e.is_valid)
                return (0, t.jsx)("div", { className: v.SimilarApp });
              let a = [];
              if (this.props.score) {
                a.push(
                  (0, t.jsx)("div", { className: v.Spacer }, "score-spacer"),
                );
                const L = Math.round(this.props.score * 100).toString() + "%";
                a.push(
                  (0, t.jsx)(
                    "div",
                    { className: v.Score, children: L },
                    "score-value",
                  ),
                );
              }
              const g = e.name + " (" + this.props.appid.toString() + ")",
                h = this.props.fnOnSelected
                  ? this.props.fnOnSelected
                  : (L) => {};
              return (0, t.jsxs)("div", {
                className: v.SimilarApp,
                onClick: () => h(this.props.appid),
                children: [
                  (0, t.jsx)("div", { className: v.AppName, children: g }),
                  a,
                ],
              });
            }
          }
        }
        class f extends A.Component {
          state = {};
          ref_app_a = A.createRef();
          ref_app_b = A.createRef();
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
                a = this.ref_app_b.current.state.appid,
                g = `${C.TS.STORE_BASE_URL}labs/ajaxgetappsimilarities?appidtarget=${e}&appid[]=${a}`;
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
                  c,
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
                  c,
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
        i([p.oI], f.prototype, "OnAppSelected", 1);
        let _ = class extends A.Component {
          selected_app = 0;
          similar_apps = [];
          similarity_scores = [];
          similarity_model = "default";
          app_selector_ref = A.createRef();
          constructor(d) {
            super(d),
              (0, E.Gn)(this),
              d.default_app && this.SetSelectedApp(d.default_app);
          }
          componentDidMount() {
            this.app_selector_ref.current &&
              this.SetSelectedApp(this.app_selector_ref.current.state.appid);
          }
          OnSelectedApp(d) {
            d && this.SetSelectedApp(d);
          }
          SetSelectedApp(d, e) {
            if (e || d != this.selected_app) {
              (this.similar_apps = []),
                (this.selected_app = d),
                this.app_selector_ref.current &&
                  this.app_selector_ref.current.SetSelectedApp(d);
              const a = `${C.TS.STORE_BASE_URL}labs/ajaxgetsimilarapps?appid=${d}&model=${this.similarity_model}`;
              $()
                .get(a)
                .then((g) => {
                  if (g.data && g.data.appid == this.selected_app) {
                    let h = new Set(
                      g.data.similar_appids.slice(0, this.props.max_similar),
                    );
                    h.add(g.data.appid),
                      S.Vw.EnsureAppInfoForAppIDs(h).then(() => {
                        (this.similar_apps = g.data.similar_appids),
                          (this.similarity_scores = g.data.similarity_scores);
                      });
                  }
                });
            }
          }
          OnModelChanged(d, e) {
            (this.similarity_model = d.data),
              this.SetSelectedApp(this.selected_app, !0);
          }
          render() {
            let d = [],
              e;
            const a = Math.min(
              this.similar_apps.length,
              this.similarity_scores.length,
              this.props.max_similar,
            );
            for (e = 0; e < a; e++) {
              const h = this.similar_apps[e],
                L = this.similarity_scores[e];
              d.push(
                (0, t.jsx)(
                  x,
                  { appid: h, score: L, fnOnSelected: this.SetSelectedApp },
                  h,
                ),
              );
            }
            let g = [];
            for (const h of G.rgModelNames) {
              let L = { label: (0, t.jsx)("div", { children: h }, h), data: h };
              g.push(L);
            }
            return (0, t.jsxs)("div", {
              className: v.LabsSimilarGames,
              children: [
                (0, t.jsx)(l.m, {
                  rgOptions: g,
                  onChange: this.OnModelChanged,
                  selectedOption: "default",
                }),
                (0, t.jsx)("h1", { children: "Games similar to:" }),
                (0, t.jsx)(c, {
                  fnOnSelection: this.OnSelectedApp,
                  ref: this.app_selector_ref,
                  appidInitial: 268500,
                  showAppIds: !0,
                }),
                (0, t.jsx)("div", { className: v.SimilarApps, children: d }),
              ],
            });
          }
        };
        i([E.sH], _.prototype, "selected_app", 2),
          i([E.sH], _.prototype, "similar_apps", 2),
          i([E.sH], _.prototype, "similarity_scores", 2),
          i([E.sH], _.prototype, "similarity_model", 2),
          i([p.oI], _.prototype, "OnSelectedApp", 1),
          i([p.oI], _.prototype, "SetSelectedApp", 1),
          i([p.oI], _.prototype, "OnModelChanged", 1),
          (_ = i([u.PA], _));
        let I = class extends A.Component {
          selected_app = void 0;
          selected_operator = void 0;
          constructor(d) {
            super(d),
              (0, E.Gn)(this),
              (this.selected_app = d.app),
              (this.selected_operator = d.operator);
          }
          OnSelectedApp(d) {
            d &&
              d != this.selected_app &&
              ((this.selected_app = d),
              this.props.fnOnChange && this.props.fnOnChange());
          }
          OnSelectedOperator(d, e) {
            (this.selected_operator = d.data),
              this.props.fnOnChange && this.props.fnOnChange();
          }
          render() {
            let d = [
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
                  children: (0, t.jsx)(l.m, {
                    rgOptions: d,
                    onChange: this.OnSelectedOperator,
                    selectedOption: "Plus",
                  }),
                }),
                (0, t.jsx)(c, { fnOnSelection: this.OnSelectedApp }),
              ],
            });
          }
        };
        i([E.sH], I.prototype, "selected_app", 2),
          i([E.sH], I.prototype, "selected_operator", 2),
          i([p.oI], I.prototype, "OnSelectedApp", 1),
          i([p.oI], I.prototype, "OnSelectedOperator", 1),
          (I = i([u.PA], I));
        let O = class extends A.Component {
          operands = [];
          similarity_model = "default";
          similar_apps = [];
          similarity_scores = [];
          operand_refs;
          constructor(d) {
            super(d), (0, E.Gn)(this), (this.operand_refs = []);
            for (let e = 0; e < d.max_operands; e++)
              this.operand_refs.push(A.createRef());
          }
          OnModelChanged(d, e) {
            (this.similarity_model = d.data), this.RecomputeExpression();
          }
          OnAddOperand() {
            this.operands.length < this.props.max_operands &&
              this.operands.push({
                app: 0,
                operator: this.operands.length > 0 ? "Plus" : void 0,
              });
          }
          OnOperandChanged() {
            for (let d = 0; d < this.operands.length; d++) {
              const e = this.operand_refs[d].current;
              (this.operands[d].app = e.selected_app),
                (this.operands[d].operator = e.selected_operator);
            }
            this.RecomputeExpression();
          }
          RecomputeExpression() {
            if (this.operands.length == 0) return;
            const d = this.operands.map((a) => "appid[]=" + a.app.toString()),
              e = `${C.TS.STORE_BASE_URL}labs/ajaxgetappvectors?${d.join("&")}&model=${this.similarity_model}`;
            $()
              .get(e)
              .then((a) => {
                if (
                  ((this.similar_apps = []),
                  (this.similarity_scores = []),
                  a.data && a.data.length == this.operands.length)
                ) {
                  let g = a.data[0].components.map((P) => parseFloat(P));
                  for (let P = 1; P < this.operands.length; P++) {
                    const ae = a.data[P].components.map((ge) => parseFloat(ge));
                    this.operands[P].operator == "Plus"
                      ? (g = g.map((ge, fe) => ge + ae[fe]))
                      : this.operands[P].operator == "Minus"
                        ? (g = g.map((ge, fe) => ge - ae[fe]))
                        : console.log(
                            "Unexpected operator " + this.operands[P].operator,
                          );
                  }
                  const h = g.map((P) => P * P).reduce((P, ae) => P + ae, 0),
                    L = Math.sqrt(h);
                  if (L > 1e-4) {
                    const ae = g
                        .map((fe) => fe / L)
                        .map((fe) => "x[]=" + fe)
                        .join("&"),
                      ge = `${C.TS.STORE_BASE_URL}labs/ajaxgetmostsimilarappstovector?${ae}&model=${this.similarity_model}`;
                    $()
                      .get(ge)
                      .then((fe) => {
                        let Ne = new Set(
                          fe.data.similar_appids.slice(
                            0,
                            this.props.max_similar,
                          ),
                        );
                        S.Vw.EnsureAppInfoForAppIDs(Ne).then(() => {
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
            let d = [];
            for (const P of G.rgModelNames) {
              let ae = {
                label: (0, t.jsx)("div", { children: P }, P),
                data: P,
              };
              d.push(ae);
            }
            let e = [],
              a = 0;
            for (const P of this.operands)
              e.push(
                (0, t.jsx)(
                  I,
                  {
                    app: P.app,
                    operator: P.operator,
                    fnOnChange: this.OnOperandChanged,
                    ref: this.operand_refs[a],
                  },
                  a,
                ),
              ),
                a++;
            let g = null;
            this.operands.length < this.props.max_operands &&
              (g = (0, t.jsx)("div", {
                className: v.AddOperand,
                onClick: this.OnAddOperand,
                children: "+",
              }));
            let h = [];
            const L = Math.min(
              this.similar_apps.length,
              this.similarity_scores.length,
              this.props.max_similar,
            );
            for (let P = 0; P < L; P++) {
              const ae = this.similar_apps[P],
                ge = this.similarity_scores[P];
              h.push((0, t.jsx)(x, { appid: ae, score: ge }, ae));
            }
            return (0, t.jsxs)("div", {
              className: v.LabsMixer,
              children: [
                (0, t.jsx)(l.m, {
                  rgOptions: d,
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
        i([E.sH], O.prototype, "operands", 2),
          i([E.sH], O.prototype, "similarity_model", 2),
          i([E.sH], O.prototype, "similar_apps", 2),
          i([E.sH], O.prototype, "similarity_scores", 2),
          i([p.oI], O.prototype, "OnModelChanged", 1),
          i([p.oI], O.prototype, "OnAddOperand", 1),
          i([p.oI], O.prototype, "OnOperandChanged", 1),
          (O = i([u.PA], O));
        let y = class extends A.Component {
          constructor(d) {
            super(d), (0, E.Gn)(this);
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
                .then((d) => {
                  (this.in_progress = !1),
                    S.Vw.EnsureAppInfoForAppIDs(d.map((e) => e.appid)).then(
                      () => {
                        this.found_path = d;
                      },
                    );
                })
                .catch((d) => {
                  console.warn(
                    "Caught pathfinding failure because: " + d.toString(),
                  ),
                    (this.in_progress = !1),
                    (this.found_path = void 0);
                }));
          }
          OnSelectedStartApp(d) {
            S.Vw.EnsureAppInfoForAppIDs([d]).then(() => {
              this.app_start = d;
            });
          }
          OnSelectedEndApp(d) {
            S.Vw.EnsureAppInfoForAppIDs([d]).then(() => {
              this.app_end = d;
            });
          }
          render() {
            const d =
                this.app_start != 0 &&
                this.app_end != 0 &&
                !this.in_progress &&
                this.app_start != this.app_end,
              e = d ? v.ComputeButton : (0, r.A)(v.ComputeButton, v.Disable);
            let a = null;
            this.in_progress
              ? (a = (0, t.jsx)("div", {
                  className: v.ProgressMessage,
                  children: "Finding path, step " + this.progress_iteration,
                }))
              : this.found_path
                ? (a = (0, t.jsx)("div", {
                    className: v.ProgressMessage,
                    children: "Found path",
                  }))
                : (a = (0, t.jsx)("div", {
                    className: v.ProgressMessage,
                    children: "No path found",
                  }));
            let g = [];
            if (this.found_path)
              for (let h = 0; h < this.found_path.length; h++) {
                const L = this.found_path[h];
                g.push(
                  (0, t.jsx)(
                    x,
                    { appid: L.appid, score: L.similarity },
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
                    (0, t.jsx)(c, {
                      fnOnSelection: this.OnSelectedStartApp,
                      strPrompt: "Select start game",
                    }),
                    (0, t.jsx)(c, {
                      fnOnSelection: this.OnSelectedEndApp,
                      strPrompt: "Select end game",
                    }),
                  ],
                }),
                (0, t.jsx)("div", {
                  className: e,
                  onClick: d ? this.Pathfind : () => {},
                  children: "Pathfind!",
                }),
                a,
                (0, t.jsx)("div", { className: v.Path, children: g }),
              ],
            });
          }
        };
        i([E.sH], y.prototype, "app_start", 2),
          i([E.sH], y.prototype, "app_end", 2),
          i([E.sH], y.prototype, "in_progress", 2),
          i([E.sH], y.prototype, "progress_iteration", 2),
          i([E.sH], y.prototype, "found_path", 2),
          i([p.oI], y.prototype, "IterationCallback", 1),
          i([p.oI], y.prototype, "Pathfind", 1),
          i([p.oI], y.prototype, "OnSelectedStartApp", 1),
          i([p.oI], y.prototype, "OnSelectedEndApp", 1),
          (y = i([u.PA], y));
        function F() {
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)("h1", { children: "Similar Games" }),
              (0, t.jsx)(_, { max_similar: 10 }),
              (0, t.jsx)("div", { className: v.Spacer }),
              (0, t.jsx)("h1", { children: "Similarity" }),
              (0, t.jsx)(f, {}),
              (0, t.jsx)("div", { className: v.Spacer }),
              (0, t.jsx)("h1", { children: "Mixer" }),
              (0, t.jsx)(O, { max_similar: 10, max_operands: 6 }),
              (0, t.jsx)("div", { className: v.Spacer }),
              (0, t.jsx)("h1", { children: "Pathfinder" }),
              (0, t.jsx)(y, {}),
            ],
          });
        }
        var H = s(76559),
          W = s(8323),
          J = s(35038),
          k = s(80613),
          w = s.n(k),
          m = s(75245),
          he = s(48156);
        const ve = 0,
          xe = 1,
          Me = 2,
          b = 3,
          R = 4,
          Q = 5,
          z = 0,
          Y = 1,
          oe = 2,
          Se = 3;
        function be(d) {
          return "unknown EStoreAppSimilarityPopularityFactor ( " + d + " )";
        }
        function Pe(d) {
          return "unknown EClustersFromPlaytimeSort ( " + d + " )";
        }
        class de extends k.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              de.prototype.tag_score_factor || m.Sg(de.M()),
              k.Message.initialize(this, e, 0, -1, void 0, null);
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
                      br: m.qM.readDouble,
                      bw: m.gp.writeDouble,
                    },
                    playtime_max_seconds: {
                      n: 10,
                      d: 36e4,
                      br: m.qM.readInt32,
                      bw: m.gp.writeInt32,
                    },
                    playtime_max_games: {
                      n: 11,
                      d: 3,
                      br: m.qM.readInt32,
                      bw: m.gp.writeInt32,
                    },
                    playtime_score_factor: {
                      n: 12,
                      d: 0.9,
                      br: m.qM.readDouble,
                      bw: m.gp.writeDouble,
                    },
                    popularity_factor: {
                      n: 20,
                      d: Q,
                      br: m.qM.readEnum,
                      bw: m.gp.writeEnum,
                    },
                    popularity_reciprocal: {
                      n: 21,
                      d: 1e4,
                      br: m.qM.readInt32,
                      bw: m.gp.writeInt32,
                    },
                    popularity_base_score: {
                      n: 22,
                      d: "5000000",
                      br: m.qM.readInt64String,
                      bw: m.gp.writeInt64String,
                    },
                    played_since: {
                      n: 23,
                      br: m.qM.readUint32,
                      bw: m.gp.writeUint32,
                    },
                  },
                }),
              de.sm_m
            );
          }
          static MBF() {
            return de.sm_mbf || (de.sm_mbf = m.w0(de.M())), de.sm_mbf;
          }
          toObject(e = !1) {
            return de.toObject(e, this);
          }
          static toObject(e, a) {
            return m.BT(de.M(), e, a);
          }
          static fromObject(e) {
            return m.Uq(de.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (w().BinaryReader)(e),
              g = new de();
            return de.deserializeBinaryFromReader(g, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return m.zj(de.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (w().BinaryWriter)();
            return de.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            m.i0(de.M(), e, a);
          }
          serializeBase64String() {
            var e = new (w().BinaryWriter)();
            return (
              de.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "StoreAppSimilarityPriorityOptions";
          }
        }
        class re extends k.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              re.prototype.steamid || m.Sg(re.M()),
              k.Message.initialize(this, e, 0, -1, [3], null);
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
                      br: m.qM.readFixed64String,
                      bw: m.gp.writeFixed64String,
                    },
                    country_code: {
                      n: 2,
                      br: m.qM.readString,
                      bw: m.gp.writeString,
                    },
                    ids: { n: 3, c: he.O4, r: !0, q: !0 },
                    options: { n: 4, c: de },
                    debug: { n: 5, br: m.qM.readBool, bw: m.gp.writeBool },
                    include_owned_games: {
                      n: 6,
                      br: m.qM.readBool,
                      bw: m.gp.writeBool,
                    },
                  },
                }),
              re.sm_m
            );
          }
          static MBF() {
            return re.sm_mbf || (re.sm_mbf = m.w0(re.M())), re.sm_mbf;
          }
          toObject(e = !1) {
            return re.toObject(e, this);
          }
          static toObject(e, a) {
            return m.BT(re.M(), e, a);
          }
          static fromObject(e) {
            return m.Uq(re.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (w().BinaryReader)(e),
              g = new re();
            return re.deserializeBinaryFromReader(g, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return m.zj(re.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (w().BinaryWriter)();
            return re.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            m.i0(re.M(), e, a);
          }
          serializeBase64String() {
            var e = new (w().BinaryWriter)();
            return (
              re.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreAppSimilarity_PrioritizeAppsForUser_Request";
          }
        }
        class ie extends k.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ie.prototype.items || m.Sg(ie.M()),
              k.Message.initialize(this, e, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ie.sm_m ||
                (ie.sm_m = {
                  proto: ie,
                  fields: { items: { n: 1, c: V, r: !0, q: !0 } },
                }),
              ie.sm_m
            );
          }
          static MBF() {
            return ie.sm_mbf || (ie.sm_mbf = m.w0(ie.M())), ie.sm_mbf;
          }
          toObject(e = !1) {
            return ie.toObject(e, this);
          }
          static toObject(e, a) {
            return m.BT(ie.M(), e, a);
          }
          static fromObject(e) {
            return m.Uq(ie.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (w().BinaryReader)(e),
              g = new ie();
            return ie.deserializeBinaryFromReader(g, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return m.zj(ie.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (w().BinaryWriter)();
            return ie.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            m.i0(ie.M(), e, a);
          }
          serializeBase64String() {
            var e = new (w().BinaryWriter)();
            return (
              ie.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreAppSimilarity_PrioritizeAppsForUser_Response";
          }
        }
        class V extends k.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              V.prototype.id || m.Sg(V.M()),
              k.Message.initialize(this, e, 0, -1, [50], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              V.sm_m ||
                (V.sm_m = {
                  proto: V,
                  fields: {
                    id: { n: 1, c: he.O4 },
                    already_owned: {
                      n: 2,
                      br: m.qM.readBool,
                      bw: m.gp.writeBool,
                    },
                    weight: { n: 3, br: m.qM.readDouble, bw: m.gp.writeDouble },
                    weight_before_dedupe: {
                      n: 4,
                      br: m.qM.readDouble,
                      bw: m.gp.writeDouble,
                    },
                    debug_matches: { n: 50, c: le, r: !0, q: !0 },
                    debug_popularity: { n: 51, c: me },
                  },
                }),
              V.sm_m
            );
          }
          static MBF() {
            return V.sm_mbf || (V.sm_mbf = m.w0(V.M())), V.sm_mbf;
          }
          toObject(e = !1) {
            return V.toObject(e, this);
          }
          static toObject(e, a) {
            return m.BT(V.M(), e, a);
          }
          static fromObject(e) {
            return m.Uq(V.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (w().BinaryReader)(e),
              g = new V();
            return V.deserializeBinaryFromReader(g, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return m.zj(V.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (w().BinaryWriter)();
            return V.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            m.i0(V.M(), e, a);
          }
          serializeBase64String() {
            var e = new (w().BinaryWriter)();
            return (
              V.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreAppSimilarity_PrioritizeAppsForUser_Response_ResultItem";
          }
        }
        class le extends k.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              le.prototype.source_app || m.Sg(le.M()),
              k.Message.initialize(this, e, 0, -1, void 0, null);
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
                      br: m.qM.readInt32,
                      bw: m.gp.writeInt32,
                    },
                    weight: { n: 2, br: m.qM.readDouble, bw: m.gp.writeDouble },
                    similarity: {
                      n: 3,
                      br: m.qM.readDouble,
                      bw: m.gp.writeDouble,
                    },
                  },
                }),
              le.sm_m
            );
          }
          static MBF() {
            return le.sm_mbf || (le.sm_mbf = m.w0(le.M())), le.sm_mbf;
          }
          toObject(e = !1) {
            return le.toObject(e, this);
          }
          static toObject(e, a) {
            return m.BT(le.M(), e, a);
          }
          static fromObject(e) {
            return m.Uq(le.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (w().BinaryReader)(e),
              g = new le();
            return le.deserializeBinaryFromReader(g, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return m.zj(le.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (w().BinaryWriter)();
            return le.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            m.i0(le.M(), e, a);
          }
          serializeBase64String() {
            var e = new (w().BinaryWriter)();
            return (
              le.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreAppSimilarity_PrioritizeAppsForUser_Response_ResultItem_MatchDebugInfo";
          }
        }
        class me extends k.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              me.prototype.rank || m.Sg(me.M()),
              k.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              me.sm_m ||
                (me.sm_m = {
                  proto: me,
                  fields: {
                    rank: { n: 1, br: m.qM.readUint32, bw: m.gp.writeUint32 },
                    popularity_factor: {
                      n: 2,
                      br: m.qM.readDouble,
                      bw: m.gp.writeDouble,
                    },
                    weight_before_popularity: {
                      n: 3,
                      br: m.qM.readDouble,
                      bw: m.gp.writeDouble,
                    },
                  },
                }),
              me.sm_m
            );
          }
          static MBF() {
            return me.sm_mbf || (me.sm_mbf = m.w0(me.M())), me.sm_mbf;
          }
          toObject(e = !1) {
            return me.toObject(e, this);
          }
          static toObject(e, a) {
            return m.BT(me.M(), e, a);
          }
          static fromObject(e) {
            return m.Uq(me.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (w().BinaryReader)(e),
              g = new me();
            return me.deserializeBinaryFromReader(g, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return m.zj(me.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (w().BinaryWriter)();
            return me.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            m.i0(me.M(), e, a);
          }
          serializeBase64String() {
            var e = new (w().BinaryWriter)();
            return (
              me.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreAppSimilarity_PrioritizeAppsForUser_Response_ResultItem_PopularityDebugInfo";
          }
        }
        class ee extends k.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ee.prototype.steamid || m.Sg(ee.M()),
              k.Message.initialize(this, e, 0, -1, void 0, null);
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
                      br: m.qM.readFixed64String,
                      bw: m.gp.writeFixed64String,
                    },
                    sort: { n: 2, d: Y, br: m.qM.readEnum, bw: m.gp.writeEnum },
                    clusters_to_return: {
                      n: 3,
                      br: m.qM.readInt32,
                      bw: m.gp.writeInt32,
                    },
                    cluster_index: {
                      n: 4,
                      br: m.qM.readInt32,
                      bw: m.gp.writeInt32,
                    },
                    context: { n: 10, c: he.TS },
                    data_request: { n: 11, c: he.gn },
                  },
                }),
              ee.sm_m
            );
          }
          static MBF() {
            return ee.sm_mbf || (ee.sm_mbf = m.w0(ee.M())), ee.sm_mbf;
          }
          toObject(e = !1) {
            return ee.toObject(e, this);
          }
          static toObject(e, a) {
            return m.BT(ee.M(), e, a);
          }
          static fromObject(e) {
            return m.Uq(ee.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (w().BinaryReader)(e),
              g = new ee();
            return ee.deserializeBinaryFromReader(g, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return m.zj(ee.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (w().BinaryWriter)();
            return ee.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            m.i0(ee.M(), e, a);
          }
          serializeBase64String() {
            var e = new (w().BinaryWriter)();
            return (
              ee.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreAppSimilarity_IdentifyClustersFromPlaytime_Request";
          }
        }
        class ue extends k.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ue.prototype.clusters || m.Sg(ue.M()),
              k.Message.initialize(this, e, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ue.sm_m ||
                (ue.sm_m = {
                  proto: ue,
                  fields: { clusters: { n: 1, c: X, r: !0, q: !0 } },
                }),
              ue.sm_m
            );
          }
          static MBF() {
            return ue.sm_mbf || (ue.sm_mbf = m.w0(ue.M())), ue.sm_mbf;
          }
          toObject(e = !1) {
            return ue.toObject(e, this);
          }
          static toObject(e, a) {
            return m.BT(ue.M(), e, a);
          }
          static fromObject(e) {
            return m.Uq(ue.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (w().BinaryReader)(e),
              g = new ue();
            return ue.deserializeBinaryFromReader(g, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return m.zj(ue.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (w().BinaryWriter)();
            return ue.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            m.i0(ue.M(), e, a);
          }
          serializeBase64String() {
            var e = new (w().BinaryWriter)();
            return (
              ue.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreAppSimilarity_IdentifyClustersFromPlaytime_Response";
          }
        }
        class X extends k.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              X.prototype.cluster_id || m.Sg(X.M()),
              k.Message.initialize(this, e, 0, -1, [5, 6, 7], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              X.sm_m ||
                (X.sm_m = {
                  proto: X,
                  fields: {
                    cluster_id: {
                      n: 1,
                      br: m.qM.readInt32,
                      bw: m.gp.writeInt32,
                    },
                    playtime_forever: {
                      n: 2,
                      br: m.qM.readInt32,
                      bw: m.gp.writeInt32,
                    },
                    playtime_2weeks: {
                      n: 3,
                      br: m.qM.readInt32,
                      bw: m.gp.writeInt32,
                    },
                    last_played: {
                      n: 4,
                      br: m.qM.readUint32,
                      bw: m.gp.writeUint32,
                    },
                    played_appids: {
                      n: 5,
                      r: !0,
                      q: !0,
                      br: m.qM.readInt32,
                      pbr: m.qM.readPackedInt32,
                      bw: m.gp.writeRepeatedInt32,
                    },
                    similar_items_appids: {
                      n: 6,
                      r: !0,
                      q: !0,
                      br: m.qM.readInt32,
                      pbr: m.qM.readPackedInt32,
                      bw: m.gp.writeRepeatedInt32,
                    },
                    similar_items: { n: 7, c: he.vB, r: !0, q: !0 },
                    similar_item_popularity_score: {
                      n: 8,
                      br: m.qM.readDouble,
                      bw: m.gp.writeDouble,
                    },
                  },
                }),
              X.sm_m
            );
          }
          static MBF() {
            return X.sm_mbf || (X.sm_mbf = m.w0(X.M())), X.sm_mbf;
          }
          toObject(e = !1) {
            return X.toObject(e, this);
          }
          static toObject(e, a) {
            return m.BT(X.M(), e, a);
          }
          static fromObject(e) {
            return m.Uq(X.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (w().BinaryReader)(e),
              g = new X();
            return X.deserializeBinaryFromReader(g, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return m.zj(X.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (w().BinaryWriter)();
            return X.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            m.i0(X.M(), e, a);
          }
          serializeBase64String() {
            var e = new (w().BinaryWriter)();
            return (
              X.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreAppSimilarity_IdentifyClustersFromPlaytime_Response_Cluster";
          }
        }
        var He;
        ((d) => {
          function e(g, h, L) {
            return g.SendMsg(
              "StoreAppSimilarity.PrioritizeAppsForUser#1",
              (0, J.I8)(re, h, L),
              ie,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 2 },
            );
          }
          d.PrioritizeAppsForUser = e;
          function a(g, h, L) {
            return g.SendMsg(
              "StoreAppSimilarity.IdentifyClustersFromPlaytime#1",
              (0, J.I8)(ee, h, L),
              ue,
              { ePrivilege: 2, eWebAPIKeyRequirement: 2 },
            );
          }
          d.IdentifyClustersFromPlaytime = a;
        })(He || (He = {}));
        var we = s(84192),
          Fe = s(10142);
        class ke {
          m_SteamInterface;
          constructor(e) {
            this.m_SteamInterface = e;
          }
          LoadPlaytimeClusters(e, a, g, h) {
            return new Ce(this.m_SteamInterface, e, a, g, h);
          }
        }
        class Ce {
          m_callbacksLoaded = new W.lu();
          m_rgClusters;
          constructor(e, a, g, h, L) {
            const P = J.w.Init(ee);
            (0, we.rV)(P),
              L && (0, we.Bn)(P, L),
              P.Body().set_steamid(a || C.iA.steamid),
              h && P.Body().set_clusters_to_return(h),
              P.Body().set_sort(g),
              He.IdentifyClustersFromPlaytime(e.GetServiceTransport(), P).then(
                (ae) => {
                  const ge = ae.Body();
                  this.m_rgClusters = [];
                  for (const fe of ge.clusters())
                    this.m_rgClusters.push(this.ReadCluster(fe, L));
                  this.m_callbacksLoaded.Dispatch(this.m_rgClusters);
                },
              );
          }
          ReadCluster(e, a) {
            let g;
            return (
              a &&
                (g = e.similar_items().map((h) => Fe.A.Get().ReadItem(h, a))),
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
            const a = this.m_callbacksLoaded.Register(e);
            return (
              this.m_rgClusters !== void 0 &&
                window.setTimeout(() => e(this.m_rgClusters), 0),
              a
            );
          }
        }
        function Re(d, e, a, g = Y, h = null, L = []) {
          const [P, ae] = A.useState(null);
          return (
            A.useEffect(
              () => (
                ae(null),
                a
                  ? d
                      .LoadPlaytimeClusters(a, g, h, e)
                      .RegisterOnReadyCallback(ae).Unregister
                  : void 0
              ),
              [a, g, h, ...L],
            ),
            P
          );
        }
        var Qe = s(85599),
          _e = s(18210),
          Ge = s(21082),
          st = s(84676),
          Ve = s(25792),
          nt = s(2259);
        function at(d) {
          const { SteamInterface: e } = d,
            a = A.useRef(void 0);
          return (
            a.current || (a.current = new ke(e)),
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
                (0, t.jsx)(rt, { SimilarityStore: a.current }),
              ],
            })
          );
        }
        const Xe = {
          [Se]: "Total Playtime",
          [oe]: "Number of Played Games",
          [Y]: "Most Recently Played",
        };
        function rt(d) {
          const { SimilarityStore: e } = d,
            [a, g] = A.useState(C.iA.steamid),
            [h, L] = A.useState("10"),
            [P, ae] = A.useState(Y),
            ge = A.useCallback((Be) => g(Be.currentTarget.value), [g]),
            fe = A.useCallback((Be) => L(Be.currentTarget.value), [L]),
            Ne = A.useCallback((Be) => ae(Be.data), [ae]);
          let De = !1;
          const Oe = A.useRef(C.iA.steamid),
            Ee = a && new H.b(a);
          Ee &&
            Ee.BIsValid() &&
            Ee.BIsIndividualAccount() &&
            ((Oe.current = Ee.ConvertTo64BitString()), (De = !0));
          let je;
          h && !isNaN(parseInt(h)) && (je = parseInt(h));
          const Ie = A.useMemo(() => {
              let Be = [];
              for (let Ke in Xe) Be.push({ data: Number(Ke), label: Xe[Ke] });
              return Be;
            }, []),
            pe = Re(
              e,
              { include_assets: !0, include_basic_info: !0 },
              Oe.current,
              P,
              je,
            );
          return (0, t.jsxs)("div", {
            children: [
              (0, t.jsxs)(l.nB, {
                className: Ge.ClusterConfig,
                children: [
                  (0, t.jsx)(l.pd, {
                    label: "SteamID",
                    type: "text",
                    value: a,
                    onChange: ge,
                    description: !De && "Invalid SteamID",
                  }),
                  (0, t.jsx)(l.pd, {
                    label: "Clusters to return (Set to blank for all clusters)",
                    type: "text",
                    value: h,
                    onChange: fe,
                  }),
                  (0, t.jsx)(l.m, {
                    label: "Sort clusters by",
                    rgOptions: Ie,
                    selectedOption: P,
                    onChange: Ne,
                  }),
                ],
              }),
              De && !pe && (0, t.jsx)(Qe.t, {}),
              pe && (0, t.jsx)(ot, { rgPlaytimeClusters: pe }),
            ],
          });
        }
        function ot(d) {
          const { rgPlaytimeClusters: e } = d;
          return (0, t.jsx)("div", {
            children: e.map((a) =>
              (0, t.jsx)(
                Ve.tH,
                { children: (0, t.jsx)(it, { cluster: a }) },
                a.nClusterID,
              ),
            ),
          });
        }
        function it(d) {
          const { cluster: e } = d,
            [a, g] = A.useState(!1),
            h = A.useCallback(() => g(!0), [g]),
            [L, P] = A.useState(!1),
            ae = A.useCallback(() => P(!0), [P]),
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
                            (0, _e.$z)(e.rtLastPlayed),
                            " ",
                          ],
                        }),
                        (0, t.jsxs)("div", {
                          children: [
                            (0, t.jsx)("b", { children: "Games played:" }),
                            " ",
                            L &&
                              e.rgAppIDsPlayed.map((fe) =>
                                (0, t.jsxs)(
                                  A.Fragment,
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
                      children: e.rgSimilarItems.map((fe, Ne) =>
                        a || Ne < 4
                          ? (0, t.jsx)(
                              "li",
                              { children: (0, t.jsx)(dt, { item: fe }) },
                              fe.GetUniqueID(),
                            )
                          : null,
                      ),
                    }),
                  }),
                  !a &&
                    (0, t.jsxs)(l.$n, {
                      onClick: h,
                      children: ["Show all ", e.rgSimilarItems.length],
                    }),
                ],
              }),
            ],
          });
        }
        const lt = {};
        function ct(d) {
          const { appid: e } = d,
            [a] = (0, st.t7)(e, lt);
          return a
            ? (0, t.jsx)("a", {
                className: Ge.PlayedGame,
                href: a.GetStorePageURL(),
                children: a.GetName(),
              })
            : null;
        }
        function dt(d) {
          const { item: e } = d;
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
        var Ye = s(36118),
          ut = s(6336),
          ne = s.n(ut),
          $e = s(30178),
          mt = s(27066),
          ht = Object.defineProperty,
          pt = Object.getOwnPropertyDescriptor,
          ye = (d, e, a, g) => {
            for (
              var h = g > 1 ? void 0 : g ? pt(e, a) : e, L = d.length - 1, P;
              L >= 0;
              L--
            )
              (P = d[L]) && (h = (g ? P(e, a, h) : P(h)) || h);
            return g && h && ht(e, a, h), h;
          };
        const qe = "-1";
        var Ae = ((d) => (
            (d[(d.Invalid = 0)] = "Invalid"),
            (d[(d.AccountName = 1)] = "AccountName"),
            (d[(d.EmailCode = 2)] = "EmailCode"),
            (d[(d.TwoFactorCode = 3)] = "TwoFactorCode"),
            (d[(d.Complete = 4)] = "Complete"),
            d
          ))(Ae || {}),
          et = ((d) => (
            (d[(d.None = 0)] = "None"),
            (d[(d.InvalidCode = 1)] = "InvalidCode"),
            d
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
          constructor(e, a) {
            (0, E.Gn)(this),
              (this.m_strBaseURL = e),
              (this.m_strOAuthClientID = a ?? "");
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
                (this.m_strErrorMessage = (0, _e.we)(
                  "#ConnectionTrouble_FailedToConnect",
                ));
              return;
            }
            if (e.login_complete) {
              if (((this.m_eCurrentStep = 4), this.m_fnLoginComplete)) {
                let a = {
                  steamID: e.oauth ? e.oauth.steamid : "",
                  strAccountName: e.oauth ? e.oauth.account_name : "",
                  strOAuthToken: e.oauth ? e.oauth.oauth_token : "",
                };
                this.m_fnLoginComplete(a);
              }
              return;
            }
            (this.m_strErrorMessage = e.message || ""),
              (this.m_eSteamGuardCodeError = 0),
              e.requires_twofactor
                ? (this.UpdateCaptchaURL(qe),
                  this.m_eCurrentStep == 3 &&
                    !this.m_strErrorMessage &&
                    ((this.m_strErrorMessage = (0, _e.we)(
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
                        ((this.m_strErrorMessage = (0, _e.we)(
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
          Le = (d, e, a, g) => {
            for (
              var h = g > 1 ? void 0 : g ? gt(e, a) : e, L = d.length - 1, P;
              L >= 0;
              L--
            )
              (P = d[L]) && (h = (g ? P(e, a, h) : P(h)) || h);
            return g && h && ft(e, a, h), h;
          };
        let Ze = class extends A.Component {
          m_manager;
          constructor(d) {
            super(d),
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
                baseURL: d,
                onLoginComplete: e,
                className: a,
                ...g
              } = this.props,
              h = (0, r.A)(ne().LoginDialog, a),
              L = this.m_manager.GetCurrentStep(),
              P = this.m_manager.GetErrorMessage();
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
                    P && (0, t.jsx)(vt, { text: P }),
                    L == Ae.AccountName &&
                      (0, t.jsx)(We, {
                        manager: this.m_manager,
                        autoFocus: this.props.autoFocus,
                      }),
                    L == Ae.TwoFactorCode &&
                      (0, t.jsx)(Ue, {
                        manager: this.m_manager,
                        authtype: Ae.TwoFactorCode,
                      }),
                    L == Ae.EmailCode &&
                      (0, t.jsx)(Ue, {
                        manager: this.m_manager,
                        authtype: Ae.EmailCode,
                      }),
                    L == Ae.Complete &&
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
        Ze = Le([u.PA], Ze);
        function vt(d) {
          return (0, t.jsx)("div", {
            className: ne().ErrorMessage,
            children: d.text,
          });
        }
        let We = class extends A.Component {
          constructor(d) {
            super(d), (this.state = { nNameSize: 0, nPassSize: 0 });
          }
          OnSubmit(d) {
            d.preventDefault(), this.props.manager.DoLogin();
          }
          OnChangeName(d) {
            let e = d.target.value || "";
            this.props.manager.SetUserName(d.target.value),
              e.length > 24 && e.length < 39
                ? this.setState({ nNameSize: 1 })
                : e.length > 38
                  ? this.setState({ nNameSize: 2 })
                  : this.setState({ nNameSize: 0 });
          }
          OnChangePassword(d) {
            let e = d.target.value || "";
            (e = e.replace(/[^\x00-\x7F]/g, "")),
              this.props.manager.SetPassword(e),
              e.length > 19 && e.length < 39
                ? this.setState({ nPassSize: 1 })
                : e.length > 38
                  ? this.setState({ nPassSize: 2 })
                  : this.setState({ nPassSize: 0 });
          }
          OnChangeRememberPass(d) {
            this.props.manager.SetRememberPassword(d.target.checked);
          }
          render() {
            let d = this.props.manager,
              e,
              a;
            return (
              this.state.nPassSize == 1
                ? (a = ne().MedPass)
                : this.state.nPassSize == 2
                  ? (a = ne().LargePass)
                  : (a = ne().DefaultPass),
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
                    children: (0, _e.we)("#Login_SignInTitle"),
                  }),
                  (0, t.jsxs)("form", {
                    className: ne().AccountPasswordForm,
                    onSubmit: this.OnSubmit,
                    children: [
                      (0, t.jsx)(l.pd, {
                        autoFocus: this.props.autoFocus,
                        className: (0, r.A)(ne().AccountNameLabel, e),
                        label: (0, _e.we)("#Login_AccountName"),
                        type: "text",
                        value: d.GetUserName(),
                        focusOnMount: !0,
                        maxLength: 64,
                        onChange: this.OnChangeName,
                      }),
                      (0, t.jsx)(l.pd, {
                        className: (0, r.A)(ne().PasswordDots, a),
                        label: (0, _e.we)("#Login_Password"),
                        type: "password",
                        autoComplete: "off",
                        maxLength: 64,
                        size: 64,
                        value: d.GetPassword(),
                        onChange: this.OnChangePassword,
                      }),
                      (0, t.jsx)(l.Yh, {
                        className: ne().RememberMeCheck,
                        label: (0, _e.we)("#Login_RememberMe"),
                        disabled: !1,
                        onChange: () => this.OnChangeRememberPass,
                        checked: d.GetRememberPassword(),
                      }),
                      d.GetCaptchaURL() && (0, t.jsx)(ze, { manager: d }),
                      (0, t.jsx)(l.jn, {
                        disabled: this.props.manager.IsRequestInFlight(),
                        children: (0, _e.we)(
                          "#Login_SignIn",
                        ).toLocaleUpperCase(),
                      }),
                    ],
                  }),
                  (0, t.jsx)("a", {
                    className: ne().NeedHelpLink,
                    href: C.TS.HELP_BASE_URL,
                    children: (0, _e.we)("#Login_ForgotPassword"),
                  }),
                  (0, t.jsx)("div", { className: ne().LoginCreateSeperator }),
                  (0, t.jsxs)("div", {
                    className: ne().SteamUpsellContainer,
                    children: [
                      (0, t.jsx)("div", {
                        className: ne().SteamUpsell,
                        children: (0, _e.we)("#Login_NoSteamAccount"),
                      }),
                      (0, t.jsx)("div", {
                        className: ne().CreateAccountLink,
                        children: (0, t.jsx)("a", {
                          href: `${C.TS.STORE_BASE_URL}join/`,
                          children: (0, _e.we)("#Login_CreateAccount"),
                        }),
                      }),
                    ],
                  }),
                ],
              })
            );
          }
        };
        Le([p.oI], We.prototype, "OnSubmit", 1),
          Le([p.oI], We.prototype, "OnChangeName", 1),
          Le([p.oI], We.prototype, "OnChangePassword", 1),
          Le([p.oI], We.prototype, "OnChangeRememberPass", 1),
          (We = Le([u.PA], We));
        let ze = class extends A.Component {
          OnCaptchaText(d) {
            this.props.manager.SetCaptchaText(d.target.value);
          }
          RefreshCaptcha(d) {
            this.props.manager.RefreshCaptcha();
          }
          render() {
            let d = this.props.manager;
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
                            src: d.GetCaptchaURL(),
                            alt: (0, _e.we)("#MobileLogin_CaptchaVerification"),
                          }),
                        }),
                        (0, t.jsx)(l.pd, {
                          className: ne().CaptchaInput,
                          type: "text",
                          autoComplete: "off",
                          maxLength: 6,
                          value: d.GetCaptchaText(),
                          onChange: this.OnCaptchaText,
                        }),
                      ],
                    }),
                    (0, t.jsx)("div", {
                      className: ne().ErrorMessage,
                      children: (0, _e.we)("#Login_CaptchaVerification"),
                    }),
                  ],
                }),
                (0, t.jsx)("div", {
                  children: (0, t.jsx)("button", {
                    type: "button",
                    className: ne().RefreshCaptchaText,
                    onClick: this.RefreshCaptcha,
                    children: (0, _e.we)("#Login_RefreshCaptcha"),
                  }),
                }),
              ],
            });
          }
        };
        Le([p.oI], ze.prototype, "OnCaptchaText", 1),
          Le([p.oI], ze.prototype, "RefreshCaptcha", 1),
          (ze = Le([u.PA], ze));
        let Ue = class extends A.Component {
          OnSubmit(d) {
            d.preventDefault(), this.props.manager.DoLogin();
          }
          OnChangeAuthCode(d) {
            this.props.authtype == Ae.TwoFactorCode
              ? this.props.manager.SetTwoFactorCode(d.target.value)
              : this.props.manager.SetEmailAuthCode(d.target.value);
          }
          render() {
            let d = this.props.manager,
              e = "",
              a = null,
              g = "",
              h,
              L = d.GetSteamGuardCodeError() == et.InvalidCode;
            switch (this.props.authtype) {
              case Ae.TwoFactorCode:
                (e = d.GetTwoFactorCode()),
                  (a = (0, _e.we)("#Login_Enter2FA")),
                  (h = (0, t.jsx)(Ye.kaY, {})),
                  (g = (0, _e.we)("#Login_Enter2FAHelp"));
                break;
              case Ae.EmailCode:
                (e = d.GetEmailAuthCode()),
                  (a = (0, _e.PP)(
                    "#Login_SentSteamguard",
                    (0, t.jsxs)("span", {
                      className: ne().Highlight,
                      children: ["@", d.GetEmailDomain()],
                    }),
                  )),
                  (g = (0, _e.we)("#Login_EnterSteamguard")),
                  (h = (0, t.jsx)(Ye.Lh2, {}));
                break;
              default:
                break;
            }
            return (0, t.jsxs)("div", {
              className: ne().AuthenticationPanel,
              children: [
                (0, t.jsx)(l.JU, { children: (0, _e.we)("#Login_SigningIn") }),
                (0, t.jsx)("div", {
                  className: ne().SigningInAccountName,
                  children: d.GetUserName(),
                }),
                (0, t.jsx)(l.a3, { children: a }),
                (0, t.jsxs)("div", {
                  className: ne().AuthenticatorInputcontainer,
                  children: [
                    h,
                    (0, t.jsxs)("form", {
                      className: ne().AccountPasswordForm,
                      onSubmit: this.OnSubmit,
                      children: [
                        (0, t.jsx)(l.pd, {
                          className: (0, r.A)(ne().AccountName),
                          label: "Steam Guard Code",
                          type: "text",
                          autoComplete: "off",
                          focusOnMount: !0,
                          maxLength: 64,
                          value: e,
                          onChange: this.OnChangeAuthCode,
                        }),
                        (0, t.jsx)(l.jn, {
                          disabled: this.props.manager.IsRequestInFlight(),
                          children: (0, _e.we)(
                            "#Login_SteamguardSubmit",
                          ).toLocaleUpperCase(),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, t.jsx)("a", {
                  className: (0, r.A)(
                    ne().NeedHelpLink,
                    L ? ne().NeedHelpHighlight : null,
                  ),
                  href: "http://help.steampowered.com/",
                  children: g,
                }),
              ],
            });
          }
        };
        Le([p.oI], Ue.prototype, "OnSubmit", 1),
          Le([p.oI], Ue.prototype, "OnChangeAuthCode", 1),
          (Ue = Le([u.PA], Ue));
        var xt = s(68312);
        const tt = [
          {
            path: "similarity",
            render: () => (0, t.jsx)(F, {}),
            name: "ML Similarity",
          },
          {
            path: "clustering",
            render: (d) => (0, t.jsx)(at, { SteamInterface: d.SteamInterface }),
            name: "Tag Clustering",
            requires_login: !0,
          },
        ];
        function _t(d) {
          const [e, a] = A.useState(!1),
            g = C.iA.logged_in,
            h = (0, xt.TR)();
          if (
            ((0, A.useEffect)(() => {
              G.Init(h), a(!0);
            }, [h]),
            !e)
          )
            return (0, t.jsx)("div", { className: v.App });
          const L = { SteamInterface: h };
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
                  children: tt.map((P) =>
                    (0, t.jsx)(
                      Z.k2,
                      {
                        to: `${B.B.LabsSandbox()}/${P.path}`,
                        className: v.Tab,
                        activeClassName: v.Active,
                        children: P.name,
                      },
                      P.path,
                    ),
                  ),
                }),
                (0, t.jsx)("div", {
                  className: v.SandboxSection,
                  children: (0, t.jsx)(Ve.tH, {
                    children: (0, t.jsx)(K.dO, {
                      children: tt.map((P, ae) =>
                        (0, t.jsx)(
                          K.qh,
                          {
                            path: `${B.B.LabsSandbox()}/${P.path}`,
                            render: (ge) =>
                              !P.requires_login || g
                                ? P.render({ ...ge, ...L })
                                : (0, t.jsx)(Et, {}),
                          },
                          P.path,
                        ),
                      ),
                    }),
                  }),
                }),
              ],
            }),
          });
        }
        function Et() {
          return (0, t.jsxs)("div", {
            children: [
              (0, t.jsx)("h3", { children: "Please login to view this page." }),
              (0, t.jsx)(Ze, {
                baseURL: C.TS.STORE_BASE_URL,
                onLoginComplete: () => window.location.reload(),
              }),
            ],
          });
        }
      },
      25996: (te, se, s) => {
        "use strict";
        s.r(se), s.d(se, { default: () => n });
        var t = s(7850),
          B = s(29522),
          S = s(40358),
          C = s(41735),
          E = s.n(C),
          p = s(90626),
          N = s(19681),
          $ = s(86390),
          ce = s(95414),
          q = s(51079),
          T = s(36707),
          j = s(18210),
          U = s(3166),
          M = s(32792),
          G = s.n(M),
          A = s(16412);
        const Z = (o) => {
            const i = (0, B.$5)(o.nAppID),
              c = (0, S.lv)(i),
              x = (0, S.J$)(i);
            if (!c.data || !x.data) return null;
            const f = (0, N.l)(c.data, "header");
            return (0, t.jsxs)("div", {
              className: M.AppCapsule,
              children: [
                (0, t.jsx)(ce.u, {
                  id: i,
                  children: (0, t.jsx)("img", { className: M.Image, src: f }),
                }),
                (0, t.jsxs)("div", {
                  className: M.UnderInfo,
                  children: [
                    (0, t.jsx)("div", {
                      className: M.Name,
                      children: x.data.name,
                    }),
                    o.fWeight &&
                      (0, t.jsx)("div", {
                        className: M.Weight,
                        children: `${(o.fWeight * 100).toFixed(2)}%`,
                      }),
                  ],
                }),
              ],
            });
          },
          K = (o) => {
            const [i, c] = p.useState([]),
              [x, f] = p.useState([]);
            return (
              p.useEffect(() => {
                (async () => {
                  const I = {
                    rec: o.strName,
                    max: 40,
                    exclude: o.bExclude ? 1 : 0,
                    accountid: o.nAccountID,
                  };
                  try {
                    const O = await E().get(
                      `${U.TS.STORE_BASE_URL}recommenderdemos/getlist`,
                      { params: I, timeout: 1e4 },
                    );
                    c(O.data.appids), f(O.data.weights);
                  } catch (O) {
                    console.error("Error fetching data", O);
                  }
                })();
              }, [o.strName, o.nAccountID, o.bExclude]),
              (0, t.jsxs)("div", {
                className: M.RecommenderList,
                children: [
                  (0, t.jsx)("div", {
                    className: M.Title,
                    children: o.strTitle,
                  }),
                  (0, t.jsx)("div", {
                    className: M.SubTitle,
                    children: o.strSubtitle,
                  }),
                  (0, t.jsx)("div", {
                    className: M.CapsuleList,
                    children: i?.map((_, I) =>
                      (0, t.jsx)(
                        Z,
                        { nAppID: _, fWeight: x[I] },
                        `${o.strName}_${I}`,
                      ),
                    ),
                  }),
                ],
              })
            );
          },
          v = (o) =>
            (0, t.jsxs)("div", {
              className: M.RecommenderList,
              children: [
                (0, t.jsx)("div", { className: M.Title, children: o.strName }),
                (0, t.jsx)("div", {
                  className: M.SubTitle,
                  children: (0, j.we)("#RecommenderDemos_ReleasedGames"),
                }),
                (0, t.jsx)("div", {
                  className: M.CapsuleList,
                  children: o.arrPlaytimeAppIDs.map((i, c) =>
                    (0, t.jsx)(Z, { nAppID: i }, `${o.strName}_${c}`),
                  ),
                }),
                (0, t.jsx)("div", { className: M.Spacer }),
                (0, t.jsx)("div", {
                  className: M.SubTitle,
                  children: (0, j.we)("#RecommenderDemos_UnreleasedGames"),
                }),
                (0, t.jsx)("div", {
                  className: M.CapsuleList,
                  children: o.arrWishlistAppIDs.map((i, c) =>
                    (0, t.jsx)(Z, { nAppID: i }, `${o.strName}_${c}`),
                  ),
                }),
              ],
            }),
          l = (o) => {
            const [i, c] = p.useState(void 0);
            return (
              p.useEffect(() => {
                (async () => {
                  const f = {
                    max: 40,
                    exclude: o.bExclude ? 1 : 0,
                    accountid: o.nAccountID,
                  };
                  try {
                    const _ = await E().get(
                      `${U.TS.STORE_BASE_URL}recommenderdemos/getfests`,
                      { params: f, timeout: 1e4 },
                    );
                    c(_.data);
                  } catch (_) {
                    console.error("Error fetching data", _);
                  }
                })();
              }, [o.bExclude, o.nAccountID]),
              (0, t.jsx)("div", {
                className: M.RecommenderFests,
                children: i?.map((x) =>
                  (0, t.jsx)(
                    v,
                    {
                      strName: x.title,
                      nStartTime: x.start_date,
                      nEndTime: x.end_date,
                      arrPlaytimeAppIDs: x.playtime_appids,
                      arrWishlistAppIDs: x.wishlist_appids,
                    },
                    `Fest_${x.name}`,
                  ),
                ),
              })
            );
          },
          D = (o) => {
            const { sale: i } = o;
            return (0, t.jsxs)("div", {
              className: M.RecommenderList,
              children: [
                (0, t.jsx)("a", {
                  className: M.Title,
                  href: i.url,
                  children: i.name || i.url,
                }),
                (0, t.jsx)("div", {
                  className: M.SubTitle,
                  children: `Score ${i.score.toFixed(3)}`,
                }),
                (0, t.jsxs)("div", {
                  className: M.CapsuleList,
                  children: [
                    i.capsule &&
                      (0, t.jsx)("a", {
                        href: i.url,
                        children: (0, t.jsx)("img", {
                          className: M.SaleCapsule,
                          src: i.capsule,
                        }),
                      }),
                    i.appids.map((c) => (0, t.jsx)(Z, { nAppID: c }, c)),
                  ],
                }),
              ],
            });
          },
          u = (o) => {
            const [i, c] = p.useState(void 0),
              [x, f] = p.useState(void 0);
            return (
              p.useEffect(() => {
                (async () => {
                  const I = {
                    max_sales: 5,
                    max_apps: 5,
                    accountid: o.nAccountID,
                  };
                  try {
                    const O = await E().get(
                      `${U.TS.STORE_BASE_URL}recommenderdemos/getcreatorsales`,
                      { params: I, timeout: 1e4 },
                    );
                    c(O.data.sales), f(O.data.error);
                  } catch (O) {
                    console.error("Error fetching data", O);
                  }
                })();
              }, [o.nAccountID]),
              (0, t.jsxs)("div", {
                className: M.RecommenderList,
                children: [
                  (0, t.jsx)("div", {
                    className: M.Title,
                    children: (0, j.we)("#RecommenderDemos_CreatorSales"),
                  }),
                  (0, t.jsx)("div", {
                    className: M.SubTitle,
                    children: (0, j.we)("#RecommenderDemos_CreatorSales_Desc"),
                  }),
                  x &&
                    (0, t.jsx)("div", { className: M.SubTitle, children: x }),
                  (0, t.jsx)("div", {
                    className: M.CreatorSales,
                    children: i?.map((_) => (0, t.jsx)(D, { sale: _ }, _.url)),
                  }),
                ],
              })
            );
          },
          n = () => {
            const [o, i] = p.useState(!1),
              [c, x] = p.useState(0),
              [f, _] = p.useState(""),
              [I, O] = p.useState(!0);
            if (!U.iA.logged_in)
              return (0, t.jsx)("div", {
                className: M.App,
                children: (0, t.jsxs)("div", {
                  className: M.Login,
                  children: [
                    (0, t.jsx)("div", {
                      className: M.Text,
                      children: (0, j.we)("#LoginText"),
                    }),
                    (0, t.jsx)("div", {
                      className: (0, T.A)(
                        "btn_green_white_innerfade",
                        " btn_medium",
                      ),
                      onClick: $.vg,
                      children: (0, t.jsx)("span", {
                        children: (0, j.we)("#LoginButton"),
                      }),
                    }),
                  ],
                }),
              });
            const y = () => {
                isNaN(parseInt(f)) || (i(!0), x(parseInt(f)));
              },
              F = () => {
                i(!1), x(0), _("");
              };
            return (0, t.jsx)(q.Ay, {
              controller: "recommenderdemos",
              method: "default",
              feature: "capsule",
              children: (0, t.jsxs)("div", {
                className: M.RecommenderDemosApp,
                children: [
                  (0, t.jsx)("div", {
                    className: M.ValveOnly,
                    children: "(Valve-Only)",
                  }),
                  (0, t.jsxs)("div", {
                    className: M.TopControls,
                    children: [
                      (0, t.jsxs)("div", {
                        className: M.AccountIDControl,
                        children: [
                          (0, t.jsx)("input", {
                            type: "text",
                            value: f,
                            onChange: (H) => _(H.target.value),
                          }),
                          (0, t.jsx)(A.$n, {
                            className: M.RecDemoButton,
                            onClick: y,
                            children: "Use AccountID",
                          }),
                          (0, t.jsx)(A.$n, {
                            disabled: !o,
                            className: M.RecDemoButton,
                            onClick: F,
                            children: "Clear",
                          }),
                        ],
                      }),
                      o &&
                        (0, t.jsxs)("div", {
                          className: M.AccountIDOverride,
                          children: [
                            (0, j.we)("#RecommenderDemos_OverrideAccountID"),
                            (0, t.jsx)("div", {
                              className: M.AccountID,
                              children: c,
                            }),
                          ],
                        }),
                      (0, t.jsxs)("div", {
                        className: M.CheckBox,
                        children: [
                          (0, t.jsx)("input", {
                            type: "checkbox",
                            id: "exclude_owned_wishlisted",
                            checked: I,
                            onChange: () => O(!I),
                          }),
                          (0, t.jsx)("label", {
                            htmlFor: "exclude_owned_wishlisted",
                            children: (0, j.we)("#RecommenderDemos_Exclude"),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, t.jsx)(K, {
                    nAccountID: c,
                    bExclude: I,
                    strName: "WishlistsOneWeek",
                    strTitle: (0, j.we)("#RecommenderDemos_HotWishlists"),
                    strSubtitle: (0, j.we)(
                      "#RecommenderDemos_HotWishlists_Desc",
                    ),
                  }),
                  (0, t.jsx)(K, {
                    nAccountID: c,
                    bExclude: I,
                    strName: "NextFest",
                    strTitle: (0, j.we)("#RecommenderDemos_NextFest"),
                    strSubtitle: (0, j.we)("#RecommenderDemos_NextFestDesc"),
                  }),
                  (0, t.jsx)(l, { nAccountID: c, bExclude: I }),
                  (0, t.jsx)(u, { nAccountID: c }),
                  (0, t.jsx)(K, {
                    nAccountID: c,
                    bExclude: I,
                    strName: "RecAllTime",
                    strTitle: (0, j.we)("#RecommenderDemos_RecAllTime"),
                    strSubtitle: (0, j.we)("#RecommenderDemos_Rec_Desc"),
                  }),
                  (0, t.jsx)(K, {
                    nAccountID: c,
                    bExclude: I,
                    strName: "RecFiveYear",
                    strTitle: (0, j.we)("#RecommenderDemos_RecFiveYear"),
                    strSubtitle: (0, j.we)("#RecommenderDemos_Rec_Desc"),
                  }),
                  (0, t.jsx)(K, {
                    nAccountID: c,
                    bExclude: I,
                    strName: "RecTwoYear",
                    strTitle: (0, j.we)("#RecommenderDemos_RecTwoYear"),
                    strSubtitle: (0, j.we)("#RecommenderDemos_Rec_Desc"),
                  }),
                  (0, t.jsx)(K, {
                    nAccountID: c,
                    bExclude: I,
                    strName: "RecOneYear",
                    strTitle: (0, j.we)("#RecommenderDemos_RecOneYear"),
                    strSubtitle: (0, j.we)("#RecommenderDemos_Rec_Desc"),
                  }),
                  (0, t.jsx)(K, {
                    nAccountID: c,
                    bExclude: I,
                    strName: "RecSixMonths",
                    strTitle: (0, j.we)("#RecommenderDemos_RecSixMonths"),
                    strSubtitle: (0, j.we)("#RecommenderDemos_Rec_Desc"),
                  }),
                  (0, t.jsx)(K, {
                    nAccountID: c,
                    bExclude: I,
                    strName: "RecEmbedding",
                    strTitle: (0, j.we)("#RecommenderDemos_RecEmbedding"),
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
          CreatorSales: "_3BWewVtUpwrkIE664Jhksg",
          SaleCapsule: "_3MEYk3E7bTo4Y1pQ6oFYqW",
          AppCapsule: "_2ZKToqUzsdeaKKdDTtGZkD",
          UnderInfo: "_3pPpZh7mj-S7Lxj6yU4Fzl",
          Name: "_1EvKcr6zM__ELCD8Hf9S8y",
          Weight: "_2akgNsqkbts6rIO2OMHPNR",
          Image: "_3VtsIJqlIPDKUx2pCA9kyh",
        };
      },
      17083: (te, se, s) => {
        "use strict";
        s.d(se, { N_: () => A, k2: () => u });
        var t = s(92757),
          B = s(42891),
          S = s(90626),
          C = s(29248),
          E = s(58584),
          p = s(81115),
          N = s(68841),
          $ = (function (n) {
            (0, B.A)(o, n);
            function o() {
              for (
                var c, x = arguments.length, f = new Array(x), _ = 0;
                _ < x;
                _++
              )
                f[_] = arguments[_];
              return (
                (c = n.call.apply(n, [this].concat(f)) || this),
                (c.history = (0, C.zR)(c.props)),
                c
              );
            }
            var i = o.prototype;
            return (
              (i.render = function () {
                return S.createElement(t.Ix, {
                  history: this.history,
                  children: this.props.children,
                });
              }),
              o
            );
          })(S.Component),
          ce = (function (n) {
            (0, B.A)(o, n);
            function o() {
              for (
                var c, x = arguments.length, f = new Array(x), _ = 0;
                _ < x;
                _++
              )
                f[_] = arguments[_];
              return (
                (c = n.call.apply(n, [this].concat(f)) || this),
                (c.history = (0, C.TM)(c.props)),
                c
              );
            }
            var i = o.prototype;
            return (
              (i.render = function () {
                return S.createElement(t.Ix, {
                  history: this.history,
                  children: this.props.children,
                });
              }),
              o
            );
          })(S.Component),
          q = function (o, i) {
            return typeof o == "function" ? o(i) : o;
          },
          T = function (o, i) {
            return typeof o == "string" ? (0, C.yJ)(o, null, null, i) : o;
          },
          j = function (o) {
            return o;
          },
          U = S.forwardRef;
        typeof U > "u" && (U = j);
        function M(n) {
          return !!(n.metaKey || n.altKey || n.ctrlKey || n.shiftKey);
        }
        var G = U(function (n, o) {
            var i = n.innerRef,
              c = n.navigate,
              x = n.onClick,
              f = (0, p.A)(n, ["innerRef", "navigate", "onClick"]),
              _ = f.target,
              I = (0, E.A)({}, f, {
                onClick: function (y) {
                  try {
                    x && x(y);
                  } catch (F) {
                    throw (y.preventDefault(), F);
                  }
                  !y.defaultPrevented &&
                    y.button === 0 &&
                    (!_ || _ === "_self") &&
                    !M(y) &&
                    (y.preventDefault(), c());
                },
              });
            return (
              j !== U ? (I.ref = o || i) : (I.ref = i), S.createElement("a", I)
            );
          }),
          A = U(function (n, o) {
            var i = n.component,
              c = i === void 0 ? G : i,
              x = n.replace,
              f = n.to,
              _ = n.innerRef,
              I = (0, p.A)(n, ["component", "replace", "to", "innerRef"]);
            return S.createElement(t.XZ.Consumer, null, function (O) {
              O || (0, N.A)(!1);
              var y = O.history,
                F = T(q(f, O.location), O.location),
                H = F ? y.createHref(F) : "",
                W = (0, E.A)({}, I, {
                  href: H,
                  navigate: function () {
                    var k = q(f, O.location),
                      w = (0, C.AO)(O.location) === (0, C.AO)(T(k)),
                      m = x || w ? y.replace : y.push;
                    m(k);
                  },
                });
              return (
                j !== U ? (W.ref = o || _) : (W.innerRef = _),
                S.createElement(c, W)
              );
            });
          });
        if (0) var Z, K;
        var v = function (o) {
            return o;
          },
          l = S.forwardRef;
        typeof l > "u" && (l = v);
        function D() {
          for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++)
            o[i] = arguments[i];
          return o
            .filter(function (c) {
              return c;
            })
            .join(" ");
        }
        var u = l(function (n, o) {
          var i = n["aria-current"],
            c = i === void 0 ? "page" : i,
            x = n.activeClassName,
            f = x === void 0 ? "active" : x,
            _ = n.activeStyle,
            I = n.className,
            O = n.exact,
            y = n.isActive,
            F = n.location,
            H = n.sensitive,
            W = n.strict,
            J = n.style,
            k = n.to,
            w = n.innerRef,
            m = (0, p.A)(n, [
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
          return S.createElement(t.XZ.Consumer, null, function (he) {
            he || (0, N.A)(!1);
            var ve = F || he.location,
              xe = T(q(k, ve), ve),
              Me = xe.pathname,
              b = Me && Me.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1"),
              R = b
                ? (0, t.B6)(ve.pathname, {
                    path: b,
                    exact: O,
                    sensitive: H,
                    strict: W,
                  })
                : null,
              Q = !!(y ? y(R, ve) : R),
              z = typeof I == "function" ? I(Q) : I,
              Y = typeof J == "function" ? J(Q) : J;
            Q && ((z = D(z, f)), (Y = (0, E.A)({}, Y, _)));
            var oe = (0, E.A)(
              {
                "aria-current": (Q && c) || null,
                className: z,
                style: Y,
                to: xe,
              },
              m,
            );
            return (
              v !== l ? (oe.ref = o || w) : (oe.innerRef = w),
              S.createElement(A, oe)
            );
          });
        });
        if (0) var r;
      },
    },
  ]);
})();

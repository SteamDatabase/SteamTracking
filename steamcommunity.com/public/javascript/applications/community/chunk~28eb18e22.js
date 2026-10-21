/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [96253],
    {
      85367: (S, p, t) => {
        "use strict";
        t.d(p, { S: () => Q });
        var e = t(7850),
          n = t(68031),
          r = t(30241),
          d = t(21895),
          D = t.n(d),
          T = t(64238),
          W = t.n(T),
          U = t(80549);
        function Q(B) {
          const {
              checked: K,
              onChange: Y,
              disabled: M,
              children: G,
              ref: Z,
              variant: V,
              color: L,
              align: R = "center",
              icon: z,
              ...A
            } = B,
            F = K === "indeterminate",
            b = z ?? (F ? P : r.i),
            E = () => {
              M || (Y && Y(F ? !0 : !K));
            },
            g = (u) => {
              M ||
                (u.key === " " &&
                  (E(), u.preventDefault(), u.stopPropagation()));
            },
            o = (0, U.f)("Checkbox", V);
          return (0, e.jsxs)(n.s, {
            align: R,
            ref: Z,
            role: "checkbox",
            "aria-checked": F ? "mixed" : K,
            "data-state": $(K),
            className: W()(d.Root, d[`Variant-${o}`], M && d.Disabled),
            onClick: E,
            tabIndex: 0,
            onKeyDown: g,
            cursor: "default",
            "aria-disabled": M,
            "data-accent-color": L,
            ...A,
            children: [
              (0, e.jsx)("div", {
                className: d.Checkbox,
                children: K && (0, e.jsx)(b, { className: d.Icon }),
              }),
              G,
            ],
          });
        }
        function $(B) {
          return B === "indeterminate" ? B : B ? "checked" : "unchecked";
        }
        function P(B) {
          return (0, e.jsx)("svg", {
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, e.jsx)("path", {
              d: "M14.6663 7.11133H1.33301V9.33355H14.6663V7.11133Z",
              fill: "currentColor",
            }),
          });
        }
      },
      86946: (S, p, t) => {
        "use strict";
        t.d(p, { j: () => $, w: () => P });
        var e = t(7850),
          n = t(64238),
          r = t.n(n),
          d = t(38878),
          D = t.n(d),
          T = t(60351),
          W = t(68031),
          U = t(8928),
          Q = t(69289);
        function $(B) {
          const {
              children: K,
              beforeContent: Y,
              afterContent: M,
              hasValue: G,
              ...Z
            } = B,
            V = P(Z);
          return (0, e.jsxs)(W.s, {
            ...V,
            align: "center",
            "data-has-value": !!G,
            minWidth: "0",
            children: [
              Y && (0, e.jsx)(W.s, { paddingRight: "2", children: Y }),
              (0, e.jsx)(T.az, { flexGrow: "1", minWidth: "0", children: K }),
              M && (0, e.jsx)(W.s, { paddingLeft: "2", children: M }),
            ],
          });
        }
        function P(B) {
          const {
              variant: K = "basic",
              size: Y = "2",
              radius: M,
              focusable: G = !0,
              hoverable: Z = !0,
              clickable: V = !0,
              disabled: L,
              className: R,
              status: z,
              color: A,
              ...F
            } = B,
            b = K === "underline" ? "none" : M;
          return (0, Q.mz)(
            {
              ...F,
              radius: b,
              "data-status": z,
              "data-dull-color": A && A !== "dull" ? A : void 0,
              className: r()(
                d.ControlBox,
                G && !L && d.Focusable,
                Z && !L && d.Hoverable,
                V && !L && d.Clickable,
                L && d.Disabled,
                d[`Variant-${K}`],
                d[`Size-${Y}`],
                R,
              ),
            },
            U.h,
          );
        }
      },
      98929: (S, p, t) => {
        "use strict";
        t.d(p, { F: () => r });
        var e = t(24089),
          n = t.n(e);
        function r() {
          return e.TextEntry;
        }
      },
      84909: (S, p, t) => {
        "use strict";
        t.d(p, { AM: () => g, Pr: () => b });
        var e = t(7850),
          n = t(90626),
          r = t(73788),
          d = t(8083),
          D = t(94621),
          T = t(18938),
          W = t(24660),
          U = t(38566),
          Q = t(54130),
          $ = t(71742),
          P = t(64238),
          B = t.n(P),
          K = t(3877),
          Y = t(3166),
          M = t(28020);
        const G = (0, n.createContext)(null);
        function Z(o) {
          const { children: u, ...s } = o,
            a = F(s);
          return (0, e.jsx)(G.Provider, { value: a, children: u });
        }
        function V(o) {
          const { children: u } = o,
            s = n.Children.only(u),
            a = (0, n.useContext)(G);
          return s
            ? a
              ? (0, n.cloneElement)(s, {
                  ...a.getReferenceProps(s.props),
                  ref: (0, T.XB)(s.props.ref, a.floating.refs.setReference),
                })
              : (console.error(
                  "<PopoverAnchor> must be a child of <PopoverRoot>.",
                ),
                null)
            : null;
        }
        function L(o) {
          const { children: u, className: s, ref: a, label: h } = o,
            C = (0, n.useContext)(G),
            i = (0, r.SV)([a, C?.floating.refs.setFloating]);
          if (!C)
            return (
              console.error(
                "<Popover.Positioner> must be a child of <Popover.Root>.",
              ),
              null
            );
          if (!C.open) return null;
          let l = n.Children.only(u),
            c = n.Fragment;
          return (
            l.type == g.FocusManager &&
              ((l = n.Children.only(l.props.children)), (c = R)),
            (0, e.jsx)(c, {
              children: (0, e.jsx)(M.HF, {
                presentation: C.presentation,
                sizing: C.sizing,
                floatingRef: i,
                floatingProps: C.getFloatingProps(),
                floatingStyles: C.floating.floatingStyles,
                referenceElement: C.floating.elements.domReference,
                className: B()((0, K.T)(), s),
                label: h,
                children: l,
              }),
            })
          );
        }
        function R(o) {
          return (0, Y.Qn)()
            ? (0, e.jsx)(z, { ...o })
            : (0, e.jsx)(A, { ...o });
        }
        function z(o) {
          const { children: u } = o,
            s = (0, n.useContext)(G);
          (0, $.wT)(
            !!s,
            "<Popover.Positioner> must be a child of <Popover.Root>.",
          );
          const a = () => s.floating.context.onOpenChange(!1),
            h = n.useRef(void 0);
          return (
            (0, W.O7)(h, !0, !0),
            (0, e.jsx)(U.D6, {
              navID: "Popover",
              onCancelButton: a,
              modal: !0,
              navTreeRef: h,
              children: (0, e.jsx)("div", {
                style: { display: "contents" },
                children: (0, e.jsx)(Q.q, { children: u }),
              }),
            })
          );
        }
        function A(o) {
          const { children: u } = o,
            s = (0, n.useContext)(G);
          return (
            (0, $.wT)(
              !!s,
              "<Popover.Positioner> must be a child of <Popover.Root>.",
            ),
            (0, e.jsx)(r.s3, {
              context: s.floating.context,
              initialFocus: -1,
              returnFocus: !1,
              children: u,
            })
          );
        }
        function F(o) {
          const {
            open: u,
            interactions: s = {},
            width: a,
            maxHeight: h,
            gutter: C,
            scroll: i,
          } = o;
          let l = u;
          const c = (0, M.Pr)(o.presentation),
            f = b(o, l, c),
            x = { enabled: !!s.click },
            I = typeof s.click == "function" ? s.click(x) : x,
            v = (0, r.kp)(f.context, I),
            O = { enabled: !!s.focus },
            y = typeof s.focus == "function" ? s.focus(O) : O,
            N = (0, r.iQ)(f.context, y),
            m = { handleClose: (0, r.iB)() },
            j = typeof s.hover == "function" ? s.hover(m) : m,
            H = (0, r.Mk)(f.context, { enabled: !!s.hover, ...j }),
            X = (0, r.s9)(f.context),
            { getFloatingProps: k, getReferenceProps: w } = (0, r.bv)([
              v,
              N,
              H,
              X,
            ]);
          return {
            floating: f,
            getFloatingProps: k,
            getReferenceProps: w,
            open: l,
            presentation: c,
            sizing: { width: a, maxHeight: h, gutter: C, scroll: i },
          };
        }
        function b(o, u, s) {
          const { onOpenChange: a, placement: h } = o,
            C = s === "anchor";
          return (0, r.we)({
            open: u,
            onOpenChange: a,
            middleware: C ? E(o) : [],
            whileElementsMounted: C ? d.ll : void 0,
            placement: h && typeof h == "object" ? h.initial : h,
            strategy: "fixed",
            platform: {
              ...d.iD,
              getOffsetParent: (i) => i?.ownerDocument?.defaultView ?? window,
            },
          });
        }
        function E(o) {
          const { gutter: u = 0, placement: s } = o,
            a = [],
            h = s && typeof s == "object";
          return (
            h && s.offset
              ? a.push((0, D.cY)(s.offset))
              : (!h || s.offset === void 0) && a.push((0, D.cY)(2)),
            h && s.flip
              ? a.push((0, D.UU)(s.flip))
              : (!h || s.flip === void 0) && a.push((0, D.UU)()),
            h && s.shift
              ? a.push((0, D.BN)(s.shift))
              : (!h || s.shift === void 0) && a.push((0, D.BN)()),
            a.push(
              (0, D.Ej)({
                apply: (C) => {
                  const { rects: i, elements: l, availableHeight: c } = C,
                    f = {
                      boxSizing: "border-box",
                      zIndex: "1",
                      "-webkit-app-region": "no-drag",
                    };
                  switch ((o.scroll && (f.overflowY = "auto"), o.width)) {
                    case "target": {
                      f.width = `${i.reference.width}px`;
                      break;
                    }
                    case "content": {
                      f.width = `${i.floating.width}px`;
                      break;
                    }
                    case "dropdown": {
                      let I = i.reference.width;
                      i.floating.width > I && I < 200 && (I = i.floating.width),
                        (f.width = `${I}px`);
                    }
                  }
                  typeof o.width == "function" &&
                    (f.width = o.width({
                      unContentWidth: i.floating.width,
                      unTargetWidth: i.reference.width,
                    }));
                  const x =
                    typeof u == "number" ? `${u}px` : `var(--spacing-${u})`;
                  typeof o.maxHeight == "function"
                    ? (f.maxHeight = o.maxHeight({
                        unAvailableHeight: c,
                        gutter: x,
                      }))
                    : typeof o.maxHeight == "number"
                      ? (f.maxHeight = `min( calc( ${c}px - ${x} ), ${o.maxHeight}px )`)
                      : typeof u == "number"
                        ? (f.maxHeight = `${c - u}px`)
                        : (f.maxHeight = `calc( ${c}px - var(--spacing-${u}) )`),
                    Object.assign(l.floating.style, f),
                    l.floating.style.setProperty(
                      "--popover-max-height",
                      f.maxHeight,
                    );
                },
              }),
            ),
            a
          );
        }
        const g = { Root: Z, Anchor: V, Positioner: L, FocusManager: R };
      },
      185: (S, p, t) => {
        "use strict";
        t.d(p, { k: () => b, T: () => F });
        var e = t(7850),
          n = t(90626),
          r = t(73788),
          d = t(60351),
          D = t(76854),
          T = t(48093);
        function W(E) {
          const { render: g, ...o } = E;
          return (0, D.Q)(
            g,
            (0, e.jsx)(d.az, {
              radius: "sm",
              background: "dull-8",
              className: T.ListBox,
            }),
            { role: "listbox", ...o },
          );
        }
        function U(E) {
          const {
              selected: g,
              focused: o,
              label: u = null,
              render: s,
              disabled: a,
              ...h
            } = E,
            C = g ? "true" : "false",
            i = o ? "true" : void 0;
          return (0, D.Q)(
            s,
            (0, e.jsx)(d.az, {
              focusable: !0,
              "data-selected": C,
              "data-focused": i,
              "aria-disabled": a,
              className: T.ListBoxOption,
              paddingY: "2",
              paddingX: "3",
            }),
            { role: "option", ...h },
            { selected: g, focused: o, disabled: a },
          );
        }
        const Q = Object.assign(W, { Option: U });
        var $ = t(84909),
          P = t(28020),
          B = t(24660),
          K = t(38566),
          Y = t(3166);
        const M = (0, n.createContext)(null);
        function G(E) {
          const { children: g, state: o } = E;
          return (0, e.jsx)(M.Provider, { value: o, children: g });
        }
        function Z(E) {
          const { children: g } = E,
            o = n.Children.only(g),
            u = (0, n.useContext)(M),
            s = (0, r.SV)([u?.floating.refs.setReference, o?.props.ref]);
          if (!o) return null;
          if (!u)
            return (
              console.error(
                "<PopoverListAnchor> must be a child of <PopoverListRoot>.",
              ),
              null
            );
          const { ref: a, ...h } = o.props;
          return (0, n.cloneElement)(o, { ref: s, ...u.getReferenceProps(h) });
        }
        function V(E) {
          const { children: g, render: o, ref: u, label: s } = E,
            a = (0, n.useContext)(M),
            h = (0, r.SV)([u, a?.floating.refs.setFloating]);
          return a
            ? a.open
              ? (0, e.jsx)(L, {
                  state: a,
                  children: (0, e.jsx)(P.HF, {
                    presentation: a.presentation,
                    sizing: a.sizing,
                    floatingRef: h,
                    floatingProps: a.getFloatingProps(),
                    floatingStyles: a.floating.floatingStyles,
                    referenceElement: a.floating.elements.domReference,
                    label: s,
                    children: (0, e.jsx)(Q, {
                      render: o,
                      children: (0, e.jsx)(r.ph, {
                        elementsRef: a.elementsRef,
                        labelsRef: a.labelsRef,
                        children: g,
                      }),
                    }),
                  }),
                })
              : null
            : (console.error(
                "<PopoverListPositioner> must be a child of <PopoverListRoot>.",
              ),
              null);
        }
        function L(E) {
          return (0, Y.Qn)()
            ? (0, e.jsx)(R, { ...E })
            : (0, e.jsx)(z, { ...E });
        }
        function R(E) {
          const { state: g, children: o } = E,
            u = () => g.floating.context.onOpenChange(!1),
            s = n.useRef(void 0);
          return (
            (0, B.O7)(s, !0, !0),
            (0, e.jsx)(K.D6, {
              navID: "PopoverList",
              onCancelButton: u,
              modal: !0,
              navTreeRef: s,
              children: o,
            })
          );
        }
        function z(E) {
          const { state: g, children: o } = E;
          return (0, e.jsx)(r.s3, {
            context: g.floating.context,
            initialFocus: g.initialFocus,
            returnFocus: !1,
            children: o,
          });
        }
        function A(E) {
          const {
              children: g,
              label: o,
              selected: u,
              onSelect: s,
              ref: a,
              disabled: h,
              ...C
            } = E,
            i = (0, n.useContext)(M),
            { ref: l, index: c } = (0, r.rm)({ label: o }),
            f = (0, r.SV)([a, l]);
          if (!i)
            return (
              console.error(
                "<PopoverListItem> must be a child of <PopoverListRoot>.",
              ),
              null
            );
          const x = c === i.activeIndex,
            I = c === i.selectedIndex || !!u;
          return (0, e.jsx)(Q.Option, {
            ref: f,
            selected: I,
            focused: x,
            role: "option",
            tabIndex: 0,
            ...i.getItemProps({
              onClick: h ? void 0 : s,
              onKeyDown: (v) => {
                !h &&
                  (v.key === "Enter" ||
                    (v.key === " " && !i.typingRef.current)) &&
                  (s(v), v.preventDefault(), v.stopPropagation());
              },
              active: x,
              selected: I,
              disabled: h,
              ...C,
            }),
            children: g,
          });
        }
        function F(E) {
          const {
            open: g,
            activeIndex: o,
            setActiveIndex: u,
            selectedIndex: s,
            setSelectedIndex: a,
            interactions: h = {},
            role: C,
            width: i,
            maxHeight: l,
            gutter: c,
            scroll: f,
          } = E;
          let x = g;
          const I = (0, P.Pr)(E.presentation),
            v = (0, $.Pr)(E, x, I),
            O = (0, r.kp)(v.context, { enabled: !!h.click }),
            y = (0, r.iQ)(v.context, { enabled: !!h.focus }),
            N = (0, r.s9)(v.context),
            m = (0, n.useRef)([]),
            j = (0, r.C1)(v.context, {
              listRef: m,
              activeIndex: o,
              selectedIndex: s,
              onNavigate: u,
              virtual: !!h.virtualItemFocus,
              loop: !0,
              focusItemOnOpen: !1,
            }),
            H = (0, n.useRef)([]),
            X = (0, n.useRef)(!1),
            k = (0, r.lY)(v.context, {
              enabled: !!h.typeahead,
              listRef: H,
              activeIndex: o,
              selectedIndex: s,
              onMatch: x ? u : a,
              onTypingChange: (tt) => (X.current = tt),
            }),
            w = (0, r.It)(v.context, { role: C }),
            {
              getFloatingProps: _,
              getReferenceProps: J,
              getItemProps: q,
            } = (0, r.bv)([w, O, y, N, j, k]);
          return {
            floating: v,
            getFloatingProps: _,
            getReferenceProps: J,
            getItemProps: q,
            open: x,
            activeIndex: o,
            selectedIndex: s,
            setSelectedIndex: a,
            elementsRef: m,
            labelsRef: H,
            typingRef: X,
            initialFocus: h.virtualItemFocus ? -1 : void 0,
            presentation: I,
            sizing: { width: i, maxHeight: l, gutter: c, scroll: f },
          };
        }
        const b = { Root: G, Anchor: Z, Positioner: V, Item: A };
      },
      21663: (S, p, t) => {
        "use strict";
        t.d(p, { I: () => M });
        var e = t(7850),
          n = t(90626),
          r = t(86946),
          d = t(60351),
          D = t(71742),
          T = t(64238),
          W = t.n(T),
          U = t(53011),
          Q = t.n(U),
          $ = t(68031),
          P = t(80549);
        const B = (0, n.createContext)(null);
        function K(V) {
          const {
              variant: L,
              radius: R,
              size: z,
              status: A,
              color: F,
              children: b,
              value: E,
              onValueChange: g,
            } = V,
            [o, u] = (0, n.useState)({}),
            s = (0, n.useCallback)((l, c) => u((f) => ({ ...f, [c]: l })), []),
            a = (0, n.useCallback)(
              (l, c) =>
                u((f) => {
                  const x = { ...f };
                  return x[c] === l && delete x[c], x;
                }),
              [],
            ),
            h = (l) => {
              let c = 0;
              switch (l.key) {
                case " ":
                case "Enter":
                case "ArrowRight":
                  c = 1;
                  break;
                case "ArrowLeft":
                  c = -1;
                  break;
              }
              if (c) {
                const f = Array.from(Object.values(o)).sort(Z);
                let x;
                if (E === null) x = c > 0 ? 0 : f.length - 1;
                else {
                  const O = o[E],
                    y = f.findIndex((N) => N === O);
                  (0, D.wT)(
                    typeof y == "number",
                    "Could not find current segmented value position",
                  ),
                    (x = y + c);
                }
                const I = f[x < 0 ? f.length + x : x % f.length],
                  v = Object.keys(o).find((O) => o[O] === I);
                typeof v != "string"
                  ? console.error("Could not find next segmeneted value")
                  : (g(v), l.stopPropagation(), l.preventDefault());
              }
            },
            C = (0, P.f)("SegmentedControl", L),
            i = (0, n.useMemo)(
              () => ({
                value: E,
                onValueChange: g,
                register: s,
                unregister: a,
                radius: R,
                size: z,
              }),
              [E, g, s, a, R, z],
            );
          return (0, e.jsx)(r.j, {
            clickable: !1,
            hoverable: !1,
            focusable: !1,
            variant: C,
            radius: R,
            size: z,
            status: A,
            className: W()(U.SegmentedControlBox, U[`Variant-${C}`]),
            tabIndex: 0,
            onKeyDown: h,
            children: (0, e.jsx)(B.Provider, {
              value: i,
              children: (0, e.jsxs)(d.az, {
                className: U.SegmentedControl,
                style: { "--outer-radius": `var(--radius-${R})` },
                children: [
                  b,
                  E !== null && (0, e.jsx)(G, { radius: R, color: F }),
                ],
              }),
            }),
          });
        }
        function Y(V) {
          const { value: L, children: R, disabled: z } = V,
            A = (0, n.useContext)(B),
            [F, b] = (0, n.useState)(),
            { register: E, unregister: g } = A || {};
          if (
            ((0, n.useEffect)(
              () => (!F || !E || !g ? () => {} : (E(F, L), () => g(F, L))),
              [E, g, L, F],
            ),
            !A)
          )
            return null;
          const { value: o, onValueChange: u, radius: s, size: a } = A,
            h = L === o,
            C = (l) => {
              l.stopPropagation(), l.preventDefault(), !(h || z) && u(L);
            },
            i = R === void 0 ? L : R;
          return (0, e.jsx)($.s, {
            justify: "center",
            align: "center",
            ref: b,
            onClick: C,
            "data-selected": h ? "true" : "false",
            className: W()(U.Item, a && U[`Size-${a}`], z ? U.disabled : ""),
            children: i,
          });
        }
        function M(V) {
          const { options: L, getOptionLabel: R = (A) => A, ...z } = V;
          return (0, e.jsx)(M.Root, {
            ...z,
            children: L.map((A) =>
              (0, e.jsx)(M.Item, { value: A, children: R(A) }, A),
            ),
          });
        }
        (M.Item = Y), (M.Root = K);
        function G(V) {
          const { radius: L, color: R } = V;
          return (0, e.jsx)(d.az, {
            className: U.IndicatorPosition,
            children: (0, e.jsx)("div", {
              className: U.Indicator,
              "data-accent-color": R,
            }),
          });
        }
        function Z(V, L) {
          const R = V.compareDocumentPosition(L);
          return R & Node.DOCUMENT_POSITION_FOLLOWING
            ? -1
            : R & Node.DOCUMENT_POSITION_PRECEDING
              ? 1
              : 0;
        }
      },
      58952: (S, p, t) => {
        "use strict";
        t.d(p, { DL: () => o, WM: () => z, l6: () => g, uh: () => a });
        var e = t(7850),
          n = t(90626),
          r = t(185),
          d = t(86946),
          D = t(12204),
          T = t(15252),
          W = t(63029),
          U = t(76854),
          Q = t(39790),
          $ = t(85367),
          P = t(68031),
          B = t(80549),
          K = t(58017),
          Y = t(64415);
        function M(i) {
          const {
              children: l,
              state: c,
              placement: f = "bottom-end",
              popoverWidth: x = "dropdown",
              popoverMaxHeight: I,
              popoverPresentation: v,
              popoverLabel: O,
              ...y
            } = i,
            [N, m] = (0, n.useState)(null),
            [j, H] = (0, n.useState)(null),
            X = (0, n.useMemo)(
              () =>
                c.rgOptions.findIndex((J) =>
                  c.multiselect
                    ? c.selectedValue.includes(J)
                    : J === c.selectedValue,
                ),
              [c.selectedValue, c.rgOptions, c.multiselect],
            ),
            k = (0, n.useRef)(null),
            w = {
              ...c,
              ...y,
              focusedValue: N,
              onFocusChange: m,
              refPopover: k,
              popoverLabel: O,
              setOpen: (J) => {
                J && m(c.multiselect ? c.selectedValue[0] : c.selectedValue),
                  c.setOpen(J);
              },
              focusedIndex: j,
              onFocusedIndexChange: H,
            },
            _ = (0, r.T)({
              open: c.bOpen,
              onOpenChange: c.setOpen,
              width: x,
              maxHeight: I,
              placement: f,
              presentation: v,
              selectedIndex: X,
              setSelectedIndex: (J) => c.onItemSelectionChange(c.rgOptions[J]),
              activeIndex: j,
              setActiveIndex: H,
              gutter: "4",
              interactions: { click: !0, typeahead: !0 },
              role: "select",
              scroll: !0,
            });
          return (0, e.jsx)(h.Provider, {
            value: w,
            children: (0, e.jsx)(r.k.Root, { state: _, children: l }),
          });
        }
        function G(i) {
          const { refPopover: l, popoverLabel: c } = C("<Select.Options>");
          return (0, e.jsx)(r.k.Positioner, {
            ref: l,
            label: c,
            children: i.children,
          });
        }
        function Z(i) {
          const { value: l, children: c, disabled: f, ...x } = i,
            {
              onItemSelectionChange: I,
              multiselect: v,
              selectedValue: O,
              maxSelected: y,
            } = C("<SelectTrigger>"),
            N = typeof l == "string" ? l : void 0;
          let m = !1,
            j = !1;
          v
            ? ((m = Array.isArray(O) && O.includes(l)),
              (j = !!y && Array.isArray(O) && O.length >= y))
            : (m = l === O);
          const H = f || (j && !m);
          return (0, e.jsxs)(r.k.Item, {
            label: N,
            onSelect: () => I(l),
            selected: m,
            disabled: H,
            ...x,
            children: [
              v &&
                (0, e.jsxs)(P.s, {
                  gap: "2",
                  align: "center",
                  children: [
                    (0, e.jsx)($.S, { checked: m, variant: "dark" }),
                    c,
                  ],
                }),
              !v && c,
            ],
          });
        }
        function V(i) {
          const { children: l, render: c } = i,
            {
              bOpen: f,
              setOpen: x,
              selectedValue: I,
              variant: v,
              size: O,
              radius: y,
              status: N,
              color: m,
              rgOptions: j,
              multiselect: H,
              onClear: X,
              focusedValue: k,
              onFocusChange: w,
              onSelectionChange: _,
              clearable: J,
              focusedIndex: q,
              onItemSelectionChange: tt,
              onFocusedIndexChange: dt,
              refPopover: ut,
              popoverLabel: ft,
              placeholder: ht,
              maxSelected: gt,
              ...ot
            } = C("<SelectTrigger>"),
            st = {
              tabIndex: 0,
              role: "combobox",
              onClick: () => x(!f),
              children: l,
            },
            nt = H ? Array.isArray(I) && I.length > 0 : !!I,
            et = nt && J,
            lt = et
              ? (0, e.jsx)(W.g, { onClick: X, cursor: "pointer", hitSlop: !0 })
              : (0, e.jsx)(D.V, {}),
            at = et
              ? {
                  onSecondaryButton: X,
                  actionDescriptionMap: {
                    [Y.pR.SECONDARY]: K.T.Localize("#Clear"),
                  },
                }
              : void 0,
            it = (0, B.f)("Select", v),
            ct = (0, e.jsx)(d.j, {
              afterContent: lt,
              variant: it,
              size: O,
              radius: y,
              status: N,
              color: m,
              hasValue: nt,
              tabIndex: 0,
              cursor: "pointer",
              navProps: at,
              ...ot,
            }),
            rt = (0, U.Q)(c, ct, st, void 0);
          return (0, e.jsx)(r.k.Anchor, { children: rt });
        }
        function L(i) {
          return (0, e.jsx)(T.EY, {
            weight: "medium",
            truncate: !0,
            contrast: "title",
            children: i.children,
          });
        }
        function R(i) {
          return (0, e.jsx)(T.EY, {
            contrast: "description",
            truncate: !0,
            children: i.children,
          });
        }
        function z(i) {
          return A(i, !1);
        }
        function A(i, l) {
          const { onSelectionChange: c, selectedValue: f, ...x } = i,
            [I, v] = (0, n.useState)(!1),
            O = (0, n.useCallback)(
              (m) => {
                c(m), l || v(!1);
              },
              [c, l],
            ),
            y = (0, n.useCallback)(
              (m) => {
                O(l ? [] : null), m?.stopPropagation(), m?.preventDefault();
              },
              [O, l],
            ),
            N = (0, n.useCallback)(
              (m) => {
                if (!l) O(m);
                else {
                  const j = f,
                    H = j.indexOf(m);
                  if (H === -1) O(j.concat(m));
                  else return O(j.slice(0, H).concat(j.slice(H + 1)));
                }
              },
              [O, f, l],
            );
          return {
            onSelectionChange: O,
            onItemSelectionChange: N,
            onClear: y,
            bOpen: I,
            setOpen: v,
            multiselect: l,
            selectedValue: f,
            ...x,
          };
        }
        const F = {
          Root: M,
          Option: Z,
          Options: G,
          Trigger: V,
          Value: L,
          Placeholder: R,
        };
        function b(i) {
          return typeof i == "string"
            ? i
            : typeof i == "number"
              ? i.toString()
              : (console.error(
                  "Could not use default option labeler on Select option value. Custom labeler requried",
                  i,
                ),
                "");
        }
        function E(i) {
          const {
              selectedValue: l,
              onSelectionChange: c,
              options: f,
              placeholder: x,
              getOptionLabel: I = b,
              ...v
            } = i,
            O = z({
              onSelectionChange: c,
              selectedValue: l,
              rgOptions: f,
              placeholder: x,
            }),
            y = l != null,
            N = y ? I(l) : "";
          return (0, e.jsxs)(g.Root, {
            state: O,
            ...v,
            children: [
              (0, e.jsxs)(g.Trigger, {
                children: [
                  y && (0, e.jsx)(g.Value, { children: N }),
                  !y && (0, e.jsx)(g.Placeholder, { children: x }),
                ],
              }),
              (0, e.jsx)(g.Options, {
                children: O.rgOptions.map((m, j) =>
                  (0, e.jsx)(g.Option, { value: m, children: I(m) }, j),
                ),
              }),
            ],
          });
        }
        const g = Object.assign(E, F);
        function o(i) {
          return A(i, !0);
        }
        const u = F;
        function s(i) {
          const {
              selectedValue: l,
              onSelectionChange: c,
              options: f,
              placeholder: x,
              getOptionLabel: I = b,
              maxSelected: v,
              ...O
            } = i,
            y = o({
              onSelectionChange: c,
              selectedValue: l,
              rgOptions: f,
              placeholder: x,
              maxSelected: v,
            }),
            N = Array.isArray(l) && l.length > 0;
          let m = "";
          if (N) {
            const j = l.map((H) => I(H));
            "ListFormat" in Intl
              ? (m = new Intl.ListFormat((0, Q.ZO)().strISOCode).format(j))
              : (m = j.join(", "));
          }
          return (0, e.jsxs)(a.Root, {
            state: y,
            ...O,
            children: [
              (0, e.jsxs)(a.Trigger, {
                children: [
                  N && (0, e.jsx)(a.Value, { children: m }),
                  !N && (0, e.jsx)(a.Placeholder, { children: x }),
                ],
              }),
              (0, e.jsx)(a.Options, {
                children: y.rgOptions.map((j, H) =>
                  (0, e.jsx)(a.Option, { value: j, children: I(j) }, H),
                ),
              }),
            ],
          });
        }
        const a = Object.assign(s, u),
          h = (0, n.createContext)(null);
        function C(i) {
          const l = (0, n.useContext)(h);
          return l || console.error(`${i} must be used within a <Select>!`), l;
        }
      },
      31857: (S, p, t) => {
        "use strict";
        t.d(p, { I: () => T });
        var e = t(7850),
          n = t(69289),
          r = t(8928),
          d = t(16619),
          D = t.n(d);
        function T(P) {
          return (0, e.jsx)("svg", { ...Q(P) });
        }
        const W = [
          ...r.L,
          {
            prop: "size",
            responsive: !0,
            className: (P) => d[`IconSize-${P}`],
          },
          {
            prop: "color",
            className: d.Color,
            cssProperty: (P) => ["--icon-color", U(P)],
          },
          {
            prop: "hitSlop",
            className: d.HitSlop,
            cssProperty: (P) => [
              "--hit-slop-custom",
              typeof P == "string" ? P : "",
            ],
          },
          r.h.find(({ prop: P }) => P === "cursor"),
        ];
        function U(P) {
          return !P || P[0] === "#" ? P : (0, n.w7)(P);
        }
        function Q(P) {
          const { viewBox: B, ...K } = P,
            M = { className: K.size ? void 0 : d.IconSizeDefault, ...K };
          return B && (M.viewBox = $(B)), (0, n.mz)(M, W);
        }
        function $(P) {
          if (P)
            return typeof P == "number"
              ? `0 0 ${P} ${P}`
              : typeof P == "string"
                ? P
                : `0 0 ${P.width} ${P.height}`;
        }
      },
      30241: (S, p, t) => {
        "use strict";
        t.d(p, { i: () => r });
        var e = t(7850),
          n = t(31857);
        function r(d) {
          return (0, e.jsx)(n.I, {
            ...d,
            viewBox: 16,
            children: (0, e.jsx)("path", {
              d: "M13.8182 1.94629L5.77816 9.98184L2.40483 6.61296L0.835938 8.18184L5.77816 13.1285L15.387 3.51518L13.8182 1.94629Z",
              fill: "currentColor",
            }),
          });
        }
      },
      12204: (S, p, t) => {
        "use strict";
        t.d(p, { V: () => d });
        var e = t(7850),
          n = t(31857);
        const r = {
          up: "rotate( 180, 10, 10 )",
          left: "rotate( 90, 10, 10 )",
          right: "rotate( 270, 10, 10 )",
        };
        function d(D) {
          const { direction: T = "down" } = D,
            W = r[T];
          return (0, e.jsx)(n.I, {
            ...D,
            viewBox: 20,
            children: (0, e.jsx)("path", {
              transform: W,
              d: "M5.14541 6.89977L10.0063 12.2027L14.8671 6.89977C15.3557 6.36674 16.145 6.36674 16.6336 6.89977C17.1221 7.4328 17.1221 8.29385 16.6336 8.82688L10.8832 15.1002C10.3946 15.6333 9.60537 15.6333 9.11678 15.1002L3.36644 8.82688C2.87785 8.29385 2.87785 7.4328 3.36644 6.89977C3.85503 6.38041 4.65682 6.36674 5.14541 6.89977Z",
              fill: "currentColor",
            }),
          });
        }
      },
      63029: (S, p, t) => {
        "use strict";
        t.d(p, { g: () => r });
        var e = t(7850),
          n = t(31857);
        function r(d) {
          return (0, e.jsx)(n.I, {
            ...d,
            viewBox: 12,
            children: (0, e.jsx)("path", {
              d: "M10.7068 2.46964L9.53012 1.29297L6.00012 4.81964L2.47012 1.29297L1.29346 2.46964L4.82012 5.99964L1.29346 9.52964L2.47012 10.7063L6.00012 7.17964L9.53012 10.7063L10.7068 9.52964L7.18012 5.99964L10.7068 2.46964Z",
              fill: "currentColor",
            }),
          });
        }
      },
      58017: (S, p, t) => {
        "use strict";
        t.d(p, { T: () => d });
        var e = t(37901);
        const n = {};
        (n.arabic = () => t.e(47608).then(t.t.bind(t, 47608, 19))),
          (n.brazilian = () => t.e(29930).then(t.t.bind(t, 29930, 19))),
          (n.bulgarian = () => t.e(48465).then(t.t.bind(t, 48465, 19))),
          (n.czech = () => t.e(14027).then(t.t.bind(t, 14027, 19))),
          (n.danish = () => t.e(19661).then(t.t.bind(t, 19661, 19))),
          (n.dutch = () => t.e(94654).then(t.t.bind(t, 94654, 19))),
          (n.english = () => t.e(83996).then(t.t.bind(t, 83996, 19))),
          (n.finnish = () => t.e(47759).then(t.t.bind(t, 47759, 19))),
          (n.french = () => t.e(37140).then(t.t.bind(t, 37140, 19))),
          (n.german = () => t.e(81194).then(t.t.bind(t, 81194, 19))),
          (n.greek = () => t.e(71744).then(t.t.bind(t, 71744, 19))),
          (n.hungarian = () => t.e(59845).then(t.t.bind(t, 59845, 19))),
          (n.indonesian = () => t.e(30308).then(t.t.bind(t, 30308, 19))),
          (n.italian = () => t.e(51380).then(t.t.bind(t, 51380, 19))),
          (n.japanese = () => t.e(787).then(t.t.bind(t, 787, 19))),
          (n.koreana = () => t.e(36691).then(t.t.bind(t, 36691, 19))),
          (n.latam = () => t.e(21579).then(t.t.bind(t, 21579, 19))),
          (n.malay = () => t.e(83924).then(t.t.bind(t, 83924, 19))),
          (n.norwegian = () => t.e(97284).then(t.t.bind(t, 97284, 19))),
          (n.polish = () => t.e(44373).then(t.t.bind(t, 44373, 19))),
          (n.portuguese = () => t.e(32561).then(t.t.bind(t, 32561, 19))),
          (n.romanian = () => t.e(17423).then(t.t.bind(t, 17423, 19))),
          (n.russian = () => t.e(52757).then(t.t.bind(t, 52757, 19))),
          (n.sc_schinese = () => t.e(30175).then(t.t.bind(t, 30175, 19))),
          (n.schinese = () => t.e(6128).then(t.t.bind(t, 6128, 19))),
          (n.spanish = () => t.e(41052).then(t.t.bind(t, 41052, 19))),
          (n.swedish = () => t.e(95773).then(t.t.bind(t, 95773, 19))),
          (n.tchinese = () => t.e(66563).then(t.t.bind(t, 66563, 19))),
          (n.thai = () => t.e(75178).then(t.t.bind(t, 75178, 19))),
          (n.turkish = () => t.e(14028).then(t.t.bind(t, 14028, 19))),
          (n.ukrainian = () => t.e(90778).then(t.t.bind(t, 90778, 19))),
          (n.vietnamese = () => t.e(1291).then(t.t.bind(t, 1291, 19)));
        async function r(D) {
          if (n[D]) return n[D]();
        }
        const d = (0, e.l)(r);
      },
      76854: (S, p, t) => {
        "use strict";
        t.d(p, { Q: () => r });
        var e = t(90626);
        function n(d, D, T) {
          return typeof d == "function" ? d(D, T) : e.cloneElement(d, D);
        }
        function r(d, D, T, W) {
          return n(d || D, T, W);
        }
      },
      39790: (S, p, t) => {
        "use strict";
        t.d(p, { ZO: () => n });
        var e = t(37901);
        function n() {
          return (0, e.A)().languages[0];
        }
      },
      21895: (S) => {
        S.exports = {
          Root: "_1kIuUssJvopWbHik1IKMG6",
          "Variant-light": "zcrlDqGBY0Lrl7faLFoJI",
          "Variant-dark": "_3b6kFRuG8ILziz88w8GESp",
          "Variant-outline": "wlcXkTKJWe-SE0fCwIRwQ",
          Disabled: "kLcGKsNxkoEqxgok6YzML",
          Checkbox: "_3babFLLB0YYBf8znrlE7Dt",
          Icon: "cngAYeP7ZvFo2pT_v3-xO",
        };
      },
      38878: (S) => {
        S.exports = {
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
      48093: (S) => {
        S.exports = {
          ListBox: "_1PUg8GjnBeN7rBK-dcyQFl",
          ListBoxOption: "_20oF9tLSfptitLraDOp6X6",
        };
      },
      24089: (S) => {
        S.exports = { TextEntry: "_1vE-LsK6l_D_5yjbywZV1p" };
      },
      53011: (S) => {
        S.exports = {
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
      16619: (S) => {
        S.exports = {
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
    },
  ]);
})();

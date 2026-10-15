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
          c = t(30241),
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
            b = z != null ? z : F ? v : c.i,
            P = () => {
              M || (Y && Y(F ? !0 : !K));
            },
            g = (u) => {
              M ||
                (u.key === " " &&
                  (P(), u.preventDefault(), u.stopPropagation()));
            },
            o = (0, U.f)("Checkbox", V);
          return (0, e.jsxs)(n.s, {
            align: R,
            ref: Z,
            role: "checkbox",
            "aria-checked": F ? "mixed" : K,
            "data-state": $(K),
            className: W()(d.Root, d[`Variant-${o}`], M && d.Disabled),
            onClick: P,
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
        function v(B) {
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
        t.d(p, { j: () => $, w: () => v });
        var e = t(7850),
          n = t(64238),
          c = t.n(n),
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
            V = v(Z);
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
        function v(B) {
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
              className: c()(
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
        t.d(p, { F: () => c });
        var e = t(24089),
          n = t.n(e);
        function c() {
          return e.TextEntry;
        }
      },
      84909: (S, p, t) => {
        "use strict";
        t.d(p, { AM: () => g, Pr: () => b });
        var e = t(7850),
          n = t(90626),
          c = t(73788),
          d = t(8083),
          D = t(94621),
          T = t(18938),
          W = t(24660),
          U = t(38566),
          Q = t(54130),
          $ = t(71742),
          v = t(64238),
          B = t.n(v),
          K = t(3877),
          Y = t(3166),
          M = t(28020);
        const G = (0, n.createContext)(null);
        function Z(o) {
          const { children: u, ...l } = o,
            i = F(l);
          return (0, e.jsx)(G.Provider, { value: i, children: u });
        }
        function V(o) {
          const { children: u } = o,
            l = n.Children.only(u),
            i = (0, n.useContext)(G);
          return l
            ? i
              ? (0, n.cloneElement)(l, {
                  ...i.getReferenceProps(l.props),
                  ref: (0, T.XB)(l.props.ref, i.floating.refs.setReference),
                })
              : (console.error(
                  "<PopoverAnchor> must be a child of <PopoverRoot>.",
                ),
                null)
            : null;
        }
        function L(o) {
          const { children: u, className: l, ref: i, label: h } = o,
            O = (0, n.useContext)(G),
            r = (0, c.SV)([
              i,
              O == null ? void 0 : O.floating.refs.setFloating,
            ]);
          if (!O)
            return (
              console.error(
                "<Popover.Positioner> must be a child of <Popover.Root>.",
              ),
              null
            );
          if (!O.open) return null;
          let s = n.Children.only(u),
            a = n.Fragment;
          return (
            s.type == g.FocusManager &&
              ((s = n.Children.only(s.props.children)), (a = R)),
            (0, e.jsx)(a, {
              children: (0, e.jsx)(M.HF, {
                presentation: O.presentation,
                sizing: O.sizing,
                floatingRef: r,
                floatingProps: O.getFloatingProps(),
                floatingStyles: O.floating.floatingStyles,
                referenceElement: O.floating.elements.domReference,
                className: B()((0, K.T)(), l),
                label: h,
                children: s,
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
            l = (0, n.useContext)(G);
          (0, $.wT)(
            !!l,
            "<Popover.Positioner> must be a child of <Popover.Root>.",
          );
          const i = () => l.floating.context.onOpenChange(!1),
            h = n.useRef(void 0);
          return (
            (0, W.O7)(h, !0, !0),
            (0, e.jsx)(U.D6, {
              navID: "Popover",
              onCancelButton: i,
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
            l = (0, n.useContext)(G);
          return (
            (0, $.wT)(
              !!l,
              "<Popover.Positioner> must be a child of <Popover.Root>.",
            ),
            (0, e.jsx)(c.s3, {
              context: l.floating.context,
              initialFocus: -1,
              returnFocus: !1,
              children: u,
            })
          );
        }
        function F(o) {
          const {
            open: u,
            interactions: l = {},
            width: i,
            maxHeight: h,
            gutter: O,
            scroll: r,
          } = o;
          let s = u;
          const a = (0, M.Pr)(o.presentation),
            f = b(o, s, a),
            E = { enabled: !!l.click },
            I = typeof l.click == "function" ? l.click(E) : E,
            x = (0, c.kp)(f.context, I),
            C = { enabled: !!l.focus },
            y = typeof l.focus == "function" ? l.focus(C) : C,
            N = (0, c.iQ)(f.context, y),
            m = { handleClose: (0, c.iB)() },
            j = typeof l.hover == "function" ? l.hover(m) : m,
            H = (0, c.Mk)(f.context, { enabled: !!l.hover, ...j }),
            X = (0, c.s9)(f.context),
            { getFloatingProps: k, getReferenceProps: w } = (0, c.bv)([
              x,
              N,
              H,
              X,
            ]);
          return {
            floating: f,
            getFloatingProps: k,
            getReferenceProps: w,
            open: s,
            presentation: a,
            sizing: { width: i, maxHeight: h, gutter: O, scroll: r },
          };
        }
        function b(o, u, l) {
          const { onOpenChange: i, placement: h } = o,
            O = l === "anchor";
          return (0, c.we)({
            open: u,
            onOpenChange: i,
            middleware: O ? P(o) : [],
            whileElementsMounted: O ? d.ll : void 0,
            placement: h && typeof h == "object" ? h.initial : h,
            strategy: "fixed",
            platform: {
              ...d.iD,
              getOffsetParent: (r) => {
                var s, a;
                return (a =
                  (s = r == null ? void 0 : r.ownerDocument) == null
                    ? void 0
                    : s.defaultView) != null
                  ? a
                  : window;
              },
            },
          });
        }
        function P(o) {
          const { gutter: u = 0, placement: l } = o,
            i = [],
            h = l && typeof l == "object";
          return (
            h && l.offset
              ? i.push((0, D.cY)(l.offset))
              : (!h || l.offset === void 0) && i.push((0, D.cY)(2)),
            h && l.flip
              ? i.push((0, D.UU)(l.flip))
              : (!h || l.flip === void 0) && i.push((0, D.UU)()),
            h && l.shift
              ? i.push((0, D.BN)(l.shift))
              : (!h || l.shift === void 0) && i.push((0, D.BN)()),
            i.push(
              (0, D.Ej)({
                apply: (O) => {
                  const { rects: r, elements: s, availableHeight: a } = O,
                    f = {
                      boxSizing: "border-box",
                      zIndex: "1",
                      "-webkit-app-region": "no-drag",
                    };
                  switch ((o.scroll && (f.overflowY = "auto"), o.width)) {
                    case "target": {
                      f.width = `${r.reference.width}px`;
                      break;
                    }
                    case "content": {
                      f.width = `${r.floating.width}px`;
                      break;
                    }
                    case "dropdown": {
                      let I = r.reference.width;
                      r.floating.width > I && I < 200 && (I = r.floating.width),
                        (f.width = `${I}px`);
                    }
                  }
                  typeof o.width == "function" &&
                    (f.width = o.width({
                      unContentWidth: r.floating.width,
                      unTargetWidth: r.reference.width,
                    }));
                  const E =
                    typeof u == "number" ? `${u}px` : `var(--spacing-${u})`;
                  typeof o.maxHeight == "function"
                    ? (f.maxHeight = o.maxHeight({
                        unAvailableHeight: a,
                        gutter: E,
                      }))
                    : typeof o.maxHeight == "number"
                      ? (f.maxHeight = `min( calc( ${a}px - ${E} ), ${o.maxHeight}px )`)
                      : typeof u == "number"
                        ? (f.maxHeight = `${a - u}px`)
                        : (f.maxHeight = `calc( ${a}px - var(--spacing-${u}) )`),
                    Object.assign(s.floating.style, f),
                    s.floating.style.setProperty(
                      "--popover-max-height",
                      f.maxHeight,
                    );
                },
              }),
            ),
            i
          );
        }
        const g = { Root: Z, Anchor: V, Positioner: L, FocusManager: R };
      },
      185: (S, p, t) => {
        "use strict";
        t.d(p, { k: () => b, T: () => F });
        var e = t(7850),
          n = t(90626),
          c = t(73788),
          d = t(60351),
          D = t(76854),
          T = t(48093);
        function W(P) {
          const { render: g, ...o } = P;
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
        function U(P) {
          const {
              selected: g,
              focused: o,
              label: u = null,
              render: l,
              disabled: i,
              ...h
            } = P,
            O = g ? "true" : "false",
            r = o ? "true" : void 0;
          return (0, D.Q)(
            l,
            (0, e.jsx)(d.az, {
              focusable: !0,
              "data-selected": O,
              "data-focused": r,
              "aria-disabled": i,
              className: T.ListBoxOption,
              paddingY: "2",
              paddingX: "3",
            }),
            { role: "option", ...h },
            { selected: g, focused: o, disabled: i },
          );
        }
        const Q = Object.assign(W, { Option: U });
        var $ = t(84909),
          v = t(28020),
          B = t(24660),
          K = t(38566),
          Y = t(3166);
        const M = (0, n.createContext)(null);
        function G(P) {
          const { children: g, state: o } = P;
          return (0, e.jsx)(M.Provider, { value: o, children: g });
        }
        function Z(P) {
          const { children: g } = P,
            o = n.Children.only(g),
            u = (0, n.useContext)(M),
            l = (0, c.SV)([
              u == null ? void 0 : u.floating.refs.setReference,
              o == null ? void 0 : o.props.ref,
            ]);
          if (!o) return null;
          if (!u)
            return (
              console.error(
                "<PopoverListAnchor> must be a child of <PopoverListRoot>.",
              ),
              null
            );
          const { ref: i, ...h } = o.props;
          return (0, n.cloneElement)(o, { ref: l, ...u.getReferenceProps(h) });
        }
        function V(P) {
          const { children: g, render: o, ref: u, label: l } = P,
            i = (0, n.useContext)(M),
            h = (0, c.SV)([
              u,
              i == null ? void 0 : i.floating.refs.setFloating,
            ]);
          return i
            ? i.open
              ? (0, e.jsx)(L, {
                  state: i,
                  children: (0, e.jsx)(v.HF, {
                    presentation: i.presentation,
                    sizing: i.sizing,
                    floatingRef: h,
                    floatingProps: i.getFloatingProps(),
                    floatingStyles: i.floating.floatingStyles,
                    referenceElement: i.floating.elements.domReference,
                    label: l,
                    children: (0, e.jsx)(Q, {
                      render: o,
                      children: (0, e.jsx)(c.ph, {
                        elementsRef: i.elementsRef,
                        labelsRef: i.labelsRef,
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
        function L(P) {
          return (0, Y.Qn)()
            ? (0, e.jsx)(R, { ...P })
            : (0, e.jsx)(z, { ...P });
        }
        function R(P) {
          const { state: g, children: o } = P,
            u = () => g.floating.context.onOpenChange(!1),
            l = n.useRef(void 0);
          return (
            (0, B.O7)(l, !0, !0),
            (0, e.jsx)(K.D6, {
              navID: "PopoverList",
              onCancelButton: u,
              modal: !0,
              navTreeRef: l,
              children: o,
            })
          );
        }
        function z(P) {
          const { state: g, children: o } = P;
          return (0, e.jsx)(c.s3, {
            context: g.floating.context,
            initialFocus: g.initialFocus,
            returnFocus: !1,
            children: o,
          });
        }
        function A(P) {
          const {
              children: g,
              label: o,
              selected: u,
              onSelect: l,
              ref: i,
              disabled: h,
              ...O
            } = P,
            r = (0, n.useContext)(M),
            { ref: s, index: a } = (0, c.rm)({ label: o }),
            f = (0, c.SV)([i, s]);
          if (!r)
            return (
              console.error(
                "<PopoverListItem> must be a child of <PopoverListRoot>.",
              ),
              null
            );
          const E = a === r.activeIndex,
            I = a === r.selectedIndex || !!u;
          return (0, e.jsx)(Q.Option, {
            ref: f,
            selected: I,
            focused: E,
            role: "option",
            tabIndex: 0,
            ...r.getItemProps({
              onClick: h ? void 0 : l,
              onKeyDown: (x) => {
                !h &&
                  (x.key === "Enter" ||
                    (x.key === " " && !r.typingRef.current)) &&
                  (l(x), x.preventDefault(), x.stopPropagation());
              },
              active: E,
              selected: I,
              disabled: h,
              ...O,
            }),
            children: g,
          });
        }
        function F(P) {
          const {
            open: g,
            activeIndex: o,
            setActiveIndex: u,
            selectedIndex: l,
            setSelectedIndex: i,
            interactions: h = {},
            role: O,
            width: r,
            maxHeight: s,
            gutter: a,
            scroll: f,
          } = P;
          let E = g;
          const I = (0, v.Pr)(P.presentation),
            x = (0, $.Pr)(P, E, I),
            C = (0, c.kp)(x.context, { enabled: !!h.click }),
            y = (0, c.iQ)(x.context, { enabled: !!h.focus }),
            N = (0, c.s9)(x.context),
            m = (0, n.useRef)([]),
            j = (0, c.C1)(x.context, {
              listRef: m,
              activeIndex: o,
              selectedIndex: l,
              onNavigate: u,
              virtual: !!h.virtualItemFocus,
              loop: !0,
              focusItemOnOpen: !1,
            }),
            H = (0, n.useRef)([]),
            X = (0, n.useRef)(!1),
            k = (0, c.lY)(x.context, {
              enabled: !!h.typeahead,
              listRef: H,
              activeIndex: o,
              selectedIndex: l,
              onMatch: E ? u : i,
              onTypingChange: (tt) => (X.current = tt),
            }),
            w = (0, c.It)(x.context, { role: O }),
            {
              getFloatingProps: _,
              getReferenceProps: J,
              getItemProps: q,
            } = (0, c.bv)([w, C, y, N, j, k]);
          return {
            floating: x,
            getFloatingProps: _,
            getReferenceProps: J,
            getItemProps: q,
            open: E,
            activeIndex: o,
            selectedIndex: l,
            setSelectedIndex: i,
            elementsRef: m,
            labelsRef: H,
            typingRef: X,
            initialFocus: h.virtualItemFocus ? -1 : void 0,
            presentation: I,
            sizing: { width: r, maxHeight: s, gutter: a, scroll: f },
          };
        }
        const b = { Root: G, Anchor: Z, Positioner: V, Item: A };
      },
      21663: (S, p, t) => {
        "use strict";
        t.d(p, { I: () => M });
        var e = t(7850),
          n = t(90626),
          c = t(86946),
          d = t(60351),
          D = t(71742),
          T = t(64238),
          W = t.n(T),
          U = t(53011),
          Q = t.n(U),
          $ = t(68031),
          v = t(80549);
        const B = (0, n.createContext)(null);
        function K(V) {
          const {
              variant: L,
              radius: R,
              size: z,
              status: A,
              color: F,
              children: b,
              value: P,
              onValueChange: g,
            } = V,
            [o, u] = (0, n.useState)({}),
            l = (0, n.useCallback)((s, a) => u((f) => ({ ...f, [a]: s })), []),
            i = (0, n.useCallback)(
              (s, a) =>
                u((f) => {
                  const E = { ...f };
                  return E[a] === s && delete E[a], E;
                }),
              [],
            ),
            h = (s) => {
              let a = 0;
              switch (s.key) {
                case " ":
                case "Enter":
                case "ArrowRight":
                  a = 1;
                  break;
                case "ArrowLeft":
                  a = -1;
                  break;
              }
              if (a) {
                const f = Array.from(Object.values(o)).sort(Z);
                let E;
                if (P === null) E = a > 0 ? 0 : f.length - 1;
                else {
                  const C = o[P],
                    y = f.findIndex((N) => N === C);
                  (0, D.wT)(
                    typeof y == "number",
                    "Could not find current segmented value position",
                  ),
                    (E = y + a);
                }
                const I = f[E < 0 ? f.length + E : E % f.length],
                  x = Object.keys(o).find((C) => o[C] === I);
                typeof x != "string"
                  ? console.error("Could not find next segmeneted value")
                  : (g(x), s.stopPropagation(), s.preventDefault());
              }
            },
            O = (0, v.f)("SegmentedControl", L),
            r = (0, n.useMemo)(
              () => ({
                value: P,
                onValueChange: g,
                register: l,
                unregister: i,
                radius: R,
                size: z,
              }),
              [P, g, l, i, R, z],
            );
          return (0, e.jsx)(c.j, {
            clickable: !1,
            hoverable: !1,
            focusable: !1,
            variant: O,
            radius: R,
            size: z,
            status: A,
            className: W()(U.SegmentedControlBox, U[`Variant-${O}`]),
            tabIndex: 0,
            onKeyDown: h,
            children: (0, e.jsx)(B.Provider, {
              value: r,
              children: (0, e.jsxs)(d.az, {
                className: U.SegmentedControl,
                style: { "--outer-radius": `var(--radius-${R})` },
                children: [
                  b,
                  P !== null && (0, e.jsx)(G, { radius: R, color: F }),
                ],
              }),
            }),
          });
        }
        function Y(V) {
          const { value: L, children: R, disabled: z } = V,
            A = (0, n.useContext)(B),
            [F, b] = (0, n.useState)(),
            { register: P, unregister: g } = A || {};
          if (
            ((0, n.useEffect)(
              () => (!F || !P || !g ? () => {} : (P(F, L), () => g(F, L))),
              [P, g, L, F],
            ),
            !A)
          )
            return null;
          const { value: o, onValueChange: u, radius: l, size: i } = A,
            h = L === o,
            O = (s) => {
              s.stopPropagation(), s.preventDefault(), !(h || z) && u(L);
            },
            r = R === void 0 ? L : R;
          return (0, e.jsx)($.s, {
            justify: "center",
            align: "center",
            ref: b,
            onClick: O,
            "data-selected": h ? "true" : "false",
            className: W()(U.Item, i && U[`Size-${i}`], z ? U.disabled : ""),
            children: r,
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
        t.d(p, { DL: () => o, WM: () => z, l6: () => g, uh: () => i });
        var e = t(7850),
          n = t(90626),
          c = t(185),
          d = t(86946),
          D = t(12204),
          T = t(15252),
          W = t(63029),
          U = t(76854),
          Q = t(39790),
          $ = t(85367),
          v = t(68031),
          B = t(80549),
          K = t(58017),
          Y = t(64415);
        function M(r) {
          const {
              children: s,
              state: a,
              placement: f = "bottom-end",
              popoverWidth: E = "dropdown",
              popoverMaxHeight: I,
              popoverPresentation: x,
              popoverLabel: C,
              ...y
            } = r,
            [N, m] = (0, n.useState)(null),
            [j, H] = (0, n.useState)(null),
            X = (0, n.useMemo)(
              () =>
                a.rgOptions.findIndex((J) =>
                  a.multiselect
                    ? a.selectedValue.includes(J)
                    : J === a.selectedValue,
                ),
              [a.selectedValue, a.rgOptions, a.multiselect],
            ),
            k = (0, n.useRef)(null),
            w = {
              ...a,
              ...y,
              focusedValue: N,
              onFocusChange: m,
              refPopover: k,
              popoverLabel: C,
              setOpen: (J) => {
                J && m(a.multiselect ? a.selectedValue[0] : a.selectedValue),
                  a.setOpen(J);
              },
              focusedIndex: j,
              onFocusedIndexChange: H,
            },
            _ = (0, c.T)({
              open: a.bOpen,
              onOpenChange: a.setOpen,
              width: E,
              maxHeight: I,
              placement: f,
              presentation: x,
              selectedIndex: X,
              setSelectedIndex: (J) => a.onItemSelectionChange(a.rgOptions[J]),
              activeIndex: j,
              setActiveIndex: H,
              gutter: "4",
              interactions: { click: !0, typeahead: !0 },
              role: "select",
              scroll: !0,
            });
          return (0, e.jsx)(h.Provider, {
            value: w,
            children: (0, e.jsx)(c.k.Root, { state: _, children: s }),
          });
        }
        function G(r) {
          const { refPopover: s, popoverLabel: a } = O("<Select.Options>");
          return (0, e.jsx)(c.k.Positioner, {
            ref: s,
            label: a,
            children: r.children,
          });
        }
        function Z(r) {
          const { value: s, children: a, disabled: f, ...E } = r,
            {
              onItemSelectionChange: I,
              multiselect: x,
              selectedValue: C,
              maxSelected: y,
            } = O("<SelectTrigger>"),
            N = typeof s == "string" ? s : void 0;
          let m = !1,
            j = !1;
          x
            ? ((m = Array.isArray(C) && C.includes(s)),
              (j = !!y && Array.isArray(C) && C.length >= y))
            : (m = s === C);
          const H = f || (j && !m);
          return (0, e.jsxs)(c.k.Item, {
            label: N,
            onSelect: () => I(s),
            selected: m,
            disabled: H,
            ...E,
            children: [
              x &&
                (0, e.jsxs)(v.s, {
                  gap: "2",
                  align: "center",
                  children: [
                    (0, e.jsx)($.S, { checked: m, variant: "dark" }),
                    a,
                  ],
                }),
              !x && a,
            ],
          });
        }
        function V(r) {
          const { children: s, render: a } = r,
            {
              bOpen: f,
              setOpen: E,
              selectedValue: I,
              variant: x,
              size: C,
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
            } = O("<SelectTrigger>"),
            st = {
              tabIndex: 0,
              role: "combobox",
              onClick: () => E(!f),
              children: s,
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
            it = (0, B.f)("Select", x),
            rt = (0, e.jsx)(d.j, {
              afterContent: lt,
              variant: it,
              size: C,
              radius: y,
              status: N,
              color: m,
              hasValue: nt,
              tabIndex: 0,
              cursor: "pointer",
              navProps: at,
              ...ot,
            }),
            ct = (0, U.Q)(a, rt, st, void 0);
          return (0, e.jsx)(c.k.Anchor, { children: ct });
        }
        function L(r) {
          return (0, e.jsx)(T.EY, {
            weight: "medium",
            truncate: !0,
            contrast: "title",
            children: r.children,
          });
        }
        function R(r) {
          return (0, e.jsx)(T.EY, {
            contrast: "description",
            truncate: !0,
            children: r.children,
          });
        }
        function z(r) {
          return A(r, !1);
        }
        function A(r, s) {
          const { onSelectionChange: a, selectedValue: f, ...E } = r,
            [I, x] = (0, n.useState)(!1),
            C = (0, n.useCallback)(
              (m) => {
                a(m), s || x(!1);
              },
              [a, s],
            ),
            y = (0, n.useCallback)(
              (m) => {
                C(s ? [] : null),
                  m == null || m.stopPropagation(),
                  m == null || m.preventDefault();
              },
              [C, s],
            ),
            N = (0, n.useCallback)(
              (m) => {
                if (!s) C(m);
                else {
                  const j = f,
                    H = j.indexOf(m);
                  if (H === -1) C(j.concat(m));
                  else return C(j.slice(0, H).concat(j.slice(H + 1)));
                }
              },
              [C, f, s],
            );
          return {
            onSelectionChange: C,
            onItemSelectionChange: N,
            onClear: y,
            bOpen: I,
            setOpen: x,
            multiselect: s,
            selectedValue: f,
            ...E,
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
        function b(r) {
          return typeof r == "string"
            ? r
            : typeof r == "number"
              ? r.toString()
              : (console.error(
                  "Could not use default option labeler on Select option value. Custom labeler requried",
                  r,
                ),
                "");
        }
        function P(r) {
          const {
              selectedValue: s,
              onSelectionChange: a,
              options: f,
              placeholder: E,
              getOptionLabel: I = b,
              ...x
            } = r,
            C = z({
              onSelectionChange: a,
              selectedValue: s,
              rgOptions: f,
              placeholder: E,
            }),
            y = s != null,
            N = y ? I(s) : "";
          return (0, e.jsxs)(g.Root, {
            state: C,
            ...x,
            children: [
              (0, e.jsxs)(g.Trigger, {
                children: [
                  y && (0, e.jsx)(g.Value, { children: N }),
                  !y && (0, e.jsx)(g.Placeholder, { children: E }),
                ],
              }),
              (0, e.jsx)(g.Options, {
                children: C.rgOptions.map((m, j) =>
                  (0, e.jsx)(g.Option, { value: m, children: I(m) }, j),
                ),
              }),
            ],
          });
        }
        const g = Object.assign(P, F);
        function o(r) {
          return A(r, !0);
        }
        const u = F;
        function l(r) {
          const {
              selectedValue: s,
              onSelectionChange: a,
              options: f,
              placeholder: E,
              getOptionLabel: I = b,
              maxSelected: x,
              ...C
            } = r,
            y = o({
              onSelectionChange: a,
              selectedValue: s,
              rgOptions: f,
              placeholder: E,
              maxSelected: x,
            }),
            N = Array.isArray(s) && s.length > 0;
          let m = "";
          if (N) {
            const j = s.map((H) => I(H));
            "ListFormat" in Intl
              ? (m = new Intl.ListFormat((0, Q.ZO)().strISOCode).format(j))
              : (m = j.join(", "));
          }
          return (0, e.jsxs)(i.Root, {
            state: y,
            ...C,
            children: [
              (0, e.jsxs)(i.Trigger, {
                children: [
                  N && (0, e.jsx)(i.Value, { children: m }),
                  !N && (0, e.jsx)(i.Placeholder, { children: E }),
                ],
              }),
              (0, e.jsx)(i.Options, {
                children: y.rgOptions.map((j, H) =>
                  (0, e.jsx)(i.Option, { value: j, children: I(j) }, H),
                ),
              }),
            ],
          });
        }
        const i = Object.assign(l, u),
          h = (0, n.createContext)(null);
        function O(r) {
          const s = (0, n.useContext)(h);
          return s || console.error(`${r} must be used within a <Select>!`), s;
        }
      },
      31857: (S, p, t) => {
        "use strict";
        t.d(p, { I: () => T });
        var e = t(7850),
          n = t(69289),
          c = t(8928),
          d = t(16619),
          D = t.n(d);
        function T(v) {
          return (0, e.jsx)("svg", { ...Q(v) });
        }
        const W = [
          ...c.L,
          {
            prop: "size",
            responsive: !0,
            className: (v) => d[`IconSize-${v}`],
          },
          {
            prop: "color",
            className: d.Color,
            cssProperty: (v) => ["--icon-color", U(v)],
          },
          {
            prop: "hitSlop",
            className: d.HitSlop,
            cssProperty: (v) => [
              "--hit-slop-custom",
              typeof v == "string" ? v : "",
            ],
          },
          c.h.find(({ prop: v }) => v === "cursor"),
        ];
        function U(v) {
          return !v || v[0] === "#" ? v : (0, n.w7)(v);
        }
        function Q(v) {
          const { viewBox: B, ...K } = v,
            M = { className: K.size ? void 0 : d.IconSizeDefault, ...K };
          return B && (M.viewBox = $(B)), (0, n.mz)(M, W);
        }
        function $(v) {
          if (v)
            return typeof v == "number"
              ? `0 0 ${v} ${v}`
              : typeof v == "string"
                ? v
                : `0 0 ${v.width} ${v.height}`;
        }
      },
      30241: (S, p, t) => {
        "use strict";
        t.d(p, { i: () => c });
        var e = t(7850),
          n = t(31857);
        function c(d) {
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
        const c = {
          up: "rotate( 180, 10, 10 )",
          left: "rotate( 90, 10, 10 )",
          right: "rotate( 270, 10, 10 )",
        };
        function d(D) {
          const { direction: T = "down" } = D,
            W = c[T];
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
        t.d(p, { g: () => c });
        var e = t(7850),
          n = t(31857);
        function c(d) {
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
        async function c(D) {
          if (n[D]) return n[D]();
        }
        const d = (0, e.l)(c);
      },
      76854: (S, p, t) => {
        "use strict";
        t.d(p, { Q: () => c });
        var e = t(90626);
        function n(d, D, T) {
          return typeof d == "function" ? d(D, T) : e.cloneElement(d, D);
        }
        function c(d, D, T, W) {
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

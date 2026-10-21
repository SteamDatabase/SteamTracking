/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [49769],
    {
      99631: (W, I, e) => {
        "use strict";
        e.d(I, { C: () => v, I: () => b });
        var t = e(7850),
          l = e(90626),
          f = e(7125);
        const v = Symbol("CoercingTextInputNotParseable");
        function b(h) {
          const {
              value: z,
              onValueChange: x,
              valueToString: U,
              valueFromString: c,
              checkValidText: C,
              onBlur: n,
              onKeyDown: a,
              ...g
            } = h,
            [H, P] = (0, l.useState)(null),
            F = H ?? (z === void 0 ? "" : U(z)),
            A = (L) => {
              const N = c(L);
              N !== v && L === U(N) ? (P(null), x(N)) : (!C || C(L, N)) && P(L);
            },
            $ = () => {
              if (H !== null) {
                const L = c(H);
                L !== v && x(L), P(null);
              }
            },
            Y = (L) => {
              $(), n && n(L);
            },
            G = (L) => {
              L.key === "Enter" && $(), a && a(L);
            };
          return (0, t.jsx)(f.k, {
            value: F,
            onTextChange: A,
            onKeyDown: G,
            onBlur: Y,
            ...g,
          });
        }
      },
      74769: (W, I, e) => {
        "use strict";
        e.d(I, { Bp: () => re, EC: () => ie, G3: () => y, PT: () => X });
        var t = e(7850),
          l = e(90626),
          f = e(86946),
          v = e(12204),
          b = e(15252),
          h = e(7125),
          z = e(63029),
          x = e(185),
          U = e(92148),
          c = e(59366),
          C = e(60351),
          n = e(76854),
          a = e(68031),
          g = e(36707),
          H = e(39790),
          P = e(85367),
          F = e(71742),
          A = e(82277),
          $ = e.n(A),
          Y = e(80549),
          G = e(3166),
          L = e(58017),
          N = e(64415);
        function de(s) {
          const {
              children: o,
              state: r,
              placement: d = "bottom-end",
              popoverWidth: p = "dropdown",
              popoverMaxHeight: _,
              popoverPresentation: R,
              popoverLabel: u,
              ...i
            } = s,
            [S, O] = (0, l.useState)(void 0);
          (0, l.useEffect)(() => O(void 0), [r.bOpen]);
          const T = (0, G.Qn)(),
            m = (0, l.useRef)(null),
            V = (0, l.useRef)(null),
            j = (0, l.useMemo)(
              () => r.rgFilteredOptions.findIndex((D) => D === r.selectedValue),
              [r.selectedValue, r.rgFilteredOptions],
            ),
            K = (0, x.T)({
              open: r.bOpen,
              onOpenChange: r.setOpen,
              width: p,
              maxHeight: _,
              placement: d,
              presentation: R,
              gutter: "4",
              activeIndex: r.activeIndex,
              setActiveIndex: r.setActiveIndex,
              selectedIndex: j,
              setSelectedIndex: (D) =>
                r.onItemSelectionChange(r.rgFilteredOptions[D]),
              interactions: { click: !0, virtualItemFocus: !T },
              role: "combobox",
              scroll: !1,
            }),
            k = {
              ...r,
              ...i,
              focusedValue: S,
              onFocusChange: O,
              refPopover: m,
              refScrollElement: V,
              setOpen: (D) => {
                if (D) {
                  let B = null;
                  r.multiselect
                    ? (B = Array.isArray(r.selectedValue)
                        ? r.selectedValue[0]
                        : null)
                    : (B = r.selectedValue),
                    O(B),
                    r.onInputChange("");
                }
                r.setOpen(D);
              },
              onIndexSelected: (D) => {
                const B = K.elementsRef.current;
                B && B[D] && B[D].click();
              },
              popoverPlacement: K.floating.placement,
              popoverPresentation: K.presentation,
              popoverLabel: u,
            };
          return (0, t.jsx)(ce.Provider, {
            value: k,
            children: (0, t.jsx)(x.k.Root, { state: K, children: o }),
          });
        }
        function w(s) {
          const {
              refPopover: o,
              inputValue: r,
              onInputChange: d,
              activeIndex: p,
              popoverPlacement: _,
              popoverPresentation: R,
              popoverLabel: u,
              multiselect: i,
              setActiveIndex: S,
              setOpen: O,
              filterPlaceholder: T,
              onIndexSelected: m,
              refScrollElement: V,
            } = Z("<Combobox.Options>"),
            j = (E) => {
              E && E.focus({ preventScroll: !0 });
            },
            K = (E) => {
              E.key === "Enter" &&
                p !== null &&
                (m(p),
                i || (S(null), O(!1)),
                E.preventDefault(),
                E.stopPropagation());
            },
            k = R === "anchor" && _.startsWith("top"),
            D = (0, t.jsx)(C.az, {
              overflow: "auto",
              ref: V,
              style: { overscrollBehavior: "contain" },
              children: s.children,
            }),
            B = (E) => {
              (E.key === "Home" || E.key === "End") && E.stopPropagation();
            };
          return (0, t.jsx)(x.k.Positioner, {
            ref: o,
            label: u,
            children: (0, t.jsxs)(a.s, {
              direction: "column",
              maxHeight: "var(--popover-max-height)",
              children: [
                k && D,
                (0, t.jsx)(C.az, {
                  flexShrink: "0",
                  className: (0, g.A)(A.FilterBorder, k ? A.Top : A.Bottom),
                  children: (0, t.jsx)(h.k, {
                    margin: "3",
                    variant: "inset",
                    radius: "sm",
                    value: r,
                    onTextChange: d,
                    onKeyDown: K,
                    onKeyDownCapture: B,
                    placeholder: T,
                    inputRef: j,
                    autoComplete: "off",
                  }),
                }),
                !k && D,
              ],
            }),
          });
        }
        const ne = (0, l.createContext)(null);
        function _e(s) {
          const { items: o, renderItem: r, overscan: d = 5, ...p } = s,
            {
              bOpen: _,
              refPopover: R,
              refScrollElement: u,
            } = Z("<ComboboxVirtualizedOptions>"),
            [i, S] = (0, l.useState)(!1),
            O = _ && !!R.current && !!u.current;
          (0, l.useEffect)(() => {
            O !== i && S(O);
          }, [O, i]);
          const T = (0, U.Te)({
            count: i ? o.length : Math.min(o.length, 3),
            getScrollElement: () => u.current,
            enabled: _,
            measureElement: c.ZO,
            ...p,
          });
          return (0, t.jsx)(w, {
            children: (0, t.jsx)(ne, {
              value: T,
              children: (0, t.jsx)(C.az, {
                height: `${T.getTotalSize()}px`,
                position: "relative",
                width: "100%",
                children: T.getVirtualItems().map((m) => r(o[m.index], m, T)),
              }),
            }),
          });
        }
        function oe(s) {
          const { virtualItem: o, children: r } = s,
            d = (0, l.useContext)(ne);
          return (
            (0, F.wT)(d, "Virtual item rendered outside of a virtualizer!"),
            (0, t.jsx)(C.az, {
              position: "absolute",
              width: "100%",
              style: { top: 0, left: 0, transform: `translateY(${o.start}px)` },
              ref: d.measureElement,
              "data-index": o.index,
              children: r,
            })
          );
        }
        function fe(s) {
          const { virtualItem: o, ...r } = s;
          return (0, t.jsx)(oe, {
            virtualItem: o,
            children: (0, t.jsx)(q, { ...r }),
          });
        }
        function Ce(s) {
          const { virtualItem: o, children: r } = s;
          return (0, t.jsx)(oe, { virtualItem: o, children: r });
        }
        function q(s) {
          const { value: o, children: r, disabled: d } = s,
            {
              onItemSelectionChange: p,
              selectedValue: _,
              multiselect: R,
              maxSelected: u,
            } = Z("<ComboboxTrigger>");
          let i = !1,
            S = !1;
          R
            ? ((i = Array.isArray(_) && _.includes(o)),
              (S = !!u && Array.isArray(_) && _.length >= u))
            : (i = o === _);
          const O = d || (S && !i);
          return (0, t.jsxs)(x.k.Item, {
            onSelect: () => p(o),
            selected: i,
            disabled: O,
            children: [
              R &&
                (0, t.jsxs)(a.s, {
                  gap: "2",
                  align: "center",
                  children: [
                    (0, t.jsx)(P.S, { checked: i, variant: "dark" }),
                    r,
                  ],
                }),
              !R && r,
            ],
          });
        }
        function me(s) {
          const { children: o, beforeContent: r, render: d } = s,
            {
              bOpen: p,
              setOpen: _,
              inputValue: R,
              onInputChange: u,
              selectedValue: i,
              focusedValue: S,
              refScrollElement: O,
              onItemSelectionChange: T,
              activeIndex: m,
              setActiveIndex: V,
              onFocusChange: j,
              rgFilteredOptions: K,
              onSelectionChange: k,
              multiselect: D,
              onClear: B,
              refPopover: E,
              clearable: Ee,
              filterPlaceholder: Pe,
              onIndexSelected: M,
              popoverPlacement: te,
              popoverPresentation: ue,
              popoverLabel: Te,
              maxSelected: je,
              variant: ve,
              ...ge
            } = Z("<ComboboxTrigger>"),
            De = { tabIndex: 0, children: o },
            pe = D ? Array.isArray(i) && i.length > 0 : !!i,
            Oe = pe && Ee,
            Me = Oe
              ? (0, t.jsx)(z.g, { onClick: B, cursor: "pointer", hitSlop: !0 })
              : (0, t.jsx)(v.V, {}),
            Ie = Oe
              ? {
                  onSecondaryButton: B,
                  actionDescriptionMap: {
                    [N.pR.SECONDARY]: L.T.Localize("#Clear"),
                  },
                }
              : void 0,
            be = (0, Y.f)("Combobox", ve),
            Le = (0, t.jsx)(f.j, {
              beforeContent: r,
              afterContent: Me,
              hasValue: pe,
              cursor: "pointer",
              tabIndex: 0,
              variant: be,
              navProps: Ie,
              ...ge,
            }),
            Re = (0, n.Q)(d, Le, De, void 0);
          return (0, t.jsx)(x.k.Anchor, { children: Re });
        }
        function Q(s) {
          return (0, t.jsx)(b.EY, {
            weight: "medium",
            truncate: !0,
            contrast: "title",
            ...s,
          });
        }
        function he(s) {
          return (0, t.jsx)(b.EY, {
            contrast: "description",
            truncate: !0,
            ...s,
          });
        }
        function J(s, o) {
          if (typeof o == "string")
            return o.toLocaleLowerCase().includes(s.toLocaleLowerCase());
          try {
            return JSON.stringify(o)
              .toLocaleLowerCase()
              .includes(s.toLocaleLowerCase());
          } catch {}
          return (
            console.error(
              "Could not use default option filter on provided Comboxbox option. Custom filter function required.",
            ),
            !1
          );
        }
        function re(s) {
          return se(s, !1);
        }
        function se(s, o) {
          const {
              rgOptions: r,
              filter: d = J,
              filterPlaceholder: p,
              selectedValue: _,
              onSelectionChange: R,
              maxSelected: u,
            } = s,
            [i, S] = (0, l.useState)(""),
            [O, T] = (0, l.useState)(!1),
            [m, V] = (0, l.useState)(null),
            j = (0, l.useMemo)(() => r.filter((M) => d(i, M)), [i, r, d]),
            K = typeof m == "number",
            k = j.length > 0,
            D = (0, l.useCallback)(
              (M) => {
                M && !K && k && V(0), S(M);
              },
              [K, k],
            ),
            B = (0, l.useCallback)(
              (M) => {
                M || D(""), T(M);
              },
              [D],
            ),
            E = (0, l.useCallback)(
              (M) => {
                R(M), o || B(!1);
              },
              [o, R, B],
            ),
            Ee = (M) => {
              E(o ? [] : null), M?.stopPropagation(), M?.preventDefault();
            },
            Pe = (0, l.useCallback)(
              (M) => {
                if (!o) E(M);
                else if (!_) E([M]);
                else {
                  const te = _,
                    ue = te.indexOf(M);
                  if (ue === -1) E(te.concat(M));
                  else return E(te.slice(0, ue).concat(te.slice(ue + 1)));
                }
              },
              [E, _, o],
            );
          return {
            activeIndex: m,
            setActiveIndex: V,
            rgFilteredOptions: j,
            selectedValue: _,
            onSelectionChange: E,
            onItemSelectionChange: Pe,
            onClear: Ee,
            inputValue: i,
            onInputChange: D,
            bOpen: O,
            setOpen: B,
            filterPlaceholder: p,
            multiselect: o,
            maxSelected: u,
          };
        }
        const le = {
          Root: de,
          Option: q,
          Options: w,
          VirtualizedOptions: _e,
          VirtualizedOption: fe,
          VirtualizedContent: Ce,
          Trigger: me,
          DefaultOptionFilter: J,
          Value: Q,
          Placeholder: he,
        };
        function ee(s) {
          return s
            ? typeof s == "string"
              ? s
              : typeof s == "number"
                ? s.toString()
                : (console.error(
                    "Could not use default option labeler on Combobox option value. Custom labeler requried",
                    s,
                  ),
                  "")
            : "";
        }
        function ae(s) {
          const {
              selectedValue: o,
              onSelectionChange: r,
              options: d,
              filter: p,
              filterPlaceholder: _,
              placeholder: R,
              getOptionLabel: u = ee,
              ...i
            } = s,
            S = (0, l.useCallback)(
              (m, V) => (p ? p(m, V) : J(m, u(V))),
              [p, u],
            ),
            O = re({
              onSelectionChange: r,
              selectedValue: o,
              rgOptions: d,
              filter: S,
              filterPlaceholder: _,
            }),
            T = o != null;
          return (0, t.jsxs)(y.Root, {
            state: O,
            ...i,
            children: [
              (0, t.jsxs)(y.Trigger, {
                children: [
                  T && (0, t.jsx)(y.Value, { children: u(o) }),
                  !T && (0, t.jsx)(y.Placeholder, { children: R }),
                ],
              }),
              (0, t.jsx)(y.Options, {
                children: O.rgFilteredOptions.map((m) =>
                  (0, t.jsx)(q, { value: m, children: u(m) }, u(m)),
                ),
              }),
            ],
          });
        }
        const y = Object.assign(ae, le);
        function ie(s) {
          return se(s, !0);
        }
        function xe(s) {
          const {
              selectedValue: o,
              onSelectionChange: r,
              options: d,
              filter: p,
              filterPlaceholder: _,
              placeholder: R,
              getOptionLabel: u = ee,
              maxSelected: i,
              ...S
            } = s,
            O = (0, l.useCallback)(
              (j, K) => (p ? p(j, K) : J(j, u(K))),
              [p, u],
            ),
            T = ie({
              onSelectionChange: r,
              selectedValue: o,
              rgOptions: d,
              filter: O,
              filterPlaceholder: _,
              maxSelected: i,
            }),
            m = Array.isArray(o) && o.length > 0;
          let V = "";
          if (m) {
            const j = o.map((K) => u(K));
            "ListFormat" in Intl
              ? (V = new Intl.ListFormat((0, H.ZO)().strISOCode).format(j))
              : (V = j.join(", "));
          }
          return (0, t.jsxs)(y.Root, {
            state: T,
            ...S,
            children: [
              (0, t.jsxs)(y.Trigger, {
                children: [
                  m && (0, t.jsx)(y.Value, { children: V }),
                  !m && (0, t.jsx)(y.Placeholder, { children: R }),
                ],
              }),
              (0, t.jsx)(y.Options, {
                children: T.rgFilteredOptions.map((j) =>
                  (0, t.jsx)(y.Option, { value: j, children: u(j) }, u(j)),
                ),
              }),
            ],
          });
        }
        const X = Object.assign(xe, le),
          ce = (0, l.createContext)(null);
        function Z(s) {
          const o = (0, l.useContext)(ce);
          return (
            o || console.error(`${s} must be used within a <Combobox>!`), o
          );
        }
      },
      7125: (W, I, e) => {
        "use strict";
        e.d(I, { k: () => P });
        var t = e(7850),
          l = e(90626),
          f = e(64238),
          v = e.n(f),
          b = e(3877),
          h = e(98929),
          z = e(60351),
          x = e(86946),
          U = e(63029),
          c = e(18938),
          C = e(24660),
          n = e(80549),
          a = e(3166),
          g = e(58017),
          H = e(64415);
        function P(A) {
          const { extracted: $, remaining: Y } = (0, z.A4)(A),
            {
              value: G,
              onTextChange: L,
              onTextClear: N,
              clearable: de,
              onChange: w,
              radius: ne,
              variant: _e,
              size: oe,
              beforeContent: fe,
              afterContent: Ce,
              inputRef: q,
              ref: me,
              disabled: Q,
              gamepadFocusable: he = !0,
              status: J,
              ...re
            } = Y,
            se = (0, a.Qn)(),
            le = (d) => {
              Q || (L(d.target.value), w && w(d));
            },
            ee = () => {
              L(""), N && N();
            },
            ae = !!G && de,
            y = ae
              ? (0, t.jsx)(U.g, { onClick: ee, cursor: "pointer", hitSlop: !0 })
              : Ce,
            ie = (0, n.f)("TextInput", _e),
            xe = {
              ...$,
              variant: ie,
              size: oe,
              radius: ne,
              status: J,
              beforeContent: fe,
              afterContent: y,
              ref: me,
              disabled: Q,
            },
            X = (0, l.useRef)(null),
            ce = (d) => {
              X.current && d.target !== X.current && X.current.focus();
            },
            Z = he && se,
            s = Z ? F : "input",
            r =
              Z && ae && !Q
                ? {
                    onSecondaryButton: ee,
                    actionDescriptionMap: {
                      [H.pR.SECONDARY]: g.T.Localize("#Clear"),
                    },
                  }
                : {};
          return (0, t.jsx)(x.j, {
            cursor: "text",
            ...xe,
            onClick: ce,
            children: (0, t.jsx)(s, {
              ref: (0, c.Ue)(q, X),
              type: "text",
              "aria-disabled": Q,
              readOnly: Q,
              className: v()((0, b.T)(), (0, h.F)()),
              value: G || "",
              onChange: le,
              ...r,
              ...re,
            }),
          });
        }
        function F(A) {
          return (0, t.jsx)(C.BA, { noFocusRing: !0, ...A });
        }
      },
      34771: (W, I, e) => {
        "use strict";
        e.d(I, { D: () => a });
        var t = e(7850),
          l = e(39049),
          f = e(8928),
          v = e(15252),
          b = e(69289),
          h = e(90626);
        function z(P) {
          const { depth: F } = useContext(x);
          return jsx(x.Provider, {
            value: { depth: F + 1 },
            children: jsx(Box, { ...P }),
          });
        }
        const x = h.createContext({ depth: 0 });
        function U() {
          return (0, h.useContext)(x).depth;
        }
        var c = e(3877),
          C = e(64238),
          n = e.n(C);
        function a(P) {
          const { level: F = "auto", className: A, color: $ } = P,
            Y = U(),
            G = H(F, Y);
          return (0, t.jsx)(G, {
            ...(0, b.mz)({ ...P, className: n()((0, c.T)(), l.Heading, A) }, g),
          });
        }
        const g = [
          ...v.U6,
          ...f.L,
          {
            prop: "size",
            responsive: !0,
            className: (P) => l[`HeadingSize-${P}`],
          },
        ];
        function H(P, F) {
          if (P === "auto" && F === 0) return "h1";
          const A = P === "auto" ? F.toString() : P;
          return /^[1-6]$/.test(A)
            ? "h" + A
            : P === "auto"
              ? (console.error(
                  '<Section> nesting has exceeded "h6" for headings.',
                ),
                "h6")
              : (console.error(
                  `Attempt to render invalid heading level, "${A}".`,
                ),
                "h1");
        }
      },
      51596: (W, I, e) => {
        "use strict";
        e.d(I, { P: () => t });
        function t(l, f) {
          return f === void 0 ? l[""] : l[f];
        }
      },
      52574: (W, I, e) => {
        "use strict";
        e.d(I, { L: () => f });
        var t = e(7850),
          l = e(51596);
        const f = {
          b: { Constructor: v },
          i: { Constructor: b },
          u: { Constructor: h },
          c: { Constructor: z },
          strike: { Constructor: x },
          color: { Constructor: U },
        };
        function v(c) {
          return (0, t.jsx)("b", { children: c.children });
        }
        function b(c) {
          return (0, t.jsx)("i", { children: c.children });
        }
        function h(c) {
          return (0, t.jsx)("u", { children: c.children });
        }
        function z(c) {
          return (0, t.jsx)("code", { children: c.children });
        }
        function x(c) {
          return (0, t.jsx)("s", { children: c.children });
        }
        function U(c) {
          const C = (0, l.P)(c.args),
            n = {};
          return (
            C &&
              (C.match(/^#[a-fA-F0-9]+$/) || C.match(/rgba?\([0-9, ]+\)$/)) &&
              (n.color = C),
            (0, t.jsx)("span", { style: n, children: c.children })
          );
        }
      },
      91937: (W, I, e) => {
        "use strict";
        e.d(I, { F: () => v });
        var t = e(7850),
          l = e(17763),
          f = e.n(l);
        const v = {
          h1: { Constructor: b, skipFollowingNewline: !0 },
          h2: { Constructor: h, skipFollowingNewline: !0 },
          h3: { Constructor: z, skipFollowingNewline: !0 },
          code: { Constructor: x, skipFollowingNewline: !0 },
          quote: {
            Constructor: U,
            skipFollowingNewline: !0,
            skipInternalNewline: !0,
          },
          hr: { Constructor: C, skipFollowingNewline: !0 },
        };
        function b(n) {
          return (0, t.jsx)("h1", { children: n.children });
        }
        function h(n) {
          return (0, t.jsx)("h2", { children: n.children });
        }
        function z(n) {
          return (0, t.jsx)("h3", { children: n.children });
        }
        function x(n) {
          return (0, t.jsx)("pre", {
            className: f().CodeBlock,
            children: (0, t.jsx)("code", { children: n.children }),
          });
        }
        function U(n) {
          return (0, t.jsx)("blockquote", { children: n.children });
        }
        function c(n) {
          return jsxs(Fragment, {
            children: [
              jsx("div", { className: styles.ClearFloat }),
              n.children,
            ],
          });
        }
        function C(n) {
          return (0, t.jsxs)(t.Fragment, {
            children: [(0, t.jsx)("hr", {}), n.children],
          });
        }
      },
      59443: (W, I, e) => {
        "use strict";
        e.d(I, { _r: () => c, e9: () => C, rh: () => U });
        var t = e(7850),
          l = e(90626),
          f = e(43434),
          v = e(86336),
          b = e(51596),
          h = e(39414);
        function z(n) {
          const a = l.Children.toArray(n)[0];
          return typeof a == "string" ? a : void 0;
        }
        function x(n, a) {
          if (!n) return;
          const g = n.startsWith("steamcommunity.com/") ? "https://" + n : n;
          if (g.match(/^https?:\/\//))
            return {
              strURL: g,
              bFromBody: !1,
              bHasCustomText: !a?.match(/^https?:\/\//i),
            };
        }
        function U(n) {
          const a = (0, b.P)(n.args) ?? (0, b.P)(n.args, "href");
          if (a) return x(a, z(n.children));
          if (typeof n.children == "string") {
            const g = n.children.trim();
            if (h.O.exec(g)?.[0] == g)
              return { strURL: g, bFromBody: !0, bHasCustomText: !1 };
          }
        }
        function c(n) {
          const a = U(n);
          if (!a) return n.children;
          if (a.bFromBody) return (0, t.jsx)(C, { strURL: a.strURL });
          const g = (0, f.p)(a.strURL) ? (0, f.E)(a.strURL) : a.strURL;
          return (0, t.jsx)(v.Y, {
            target: "_blank",
            href: g,
            underline: "auto",
            contrast: "title",
            children: n.children,
          });
        }
        function C(n) {
          const a = n.strURL.match(/^[a-z][a-z0-9+.-]*:/i)
              ? n.strURL
              : "http://" + n.strURL,
            g = (0, f.p)(a) ? (0, f.E)(a) : a;
          return (0, t.jsx)(v.Y, {
            target: "_blank",
            href: g,
            underline: "auto",
            contrast: "title",
            children: n.strURL,
          });
        }
      },
      49144: (W, I, e) => {
        "use strict";
        e.d(I, { I: () => l });
        var t = e(7850);
        const l = {
          list: {
            Constructor: f,
            skipInternalNewline: !0,
            skipFollowingNewline: !0,
          },
          olist: {
            Constructor: v,
            skipInternalNewline: !0,
            skipFollowingNewline: !0,
          },
          "*": { Constructor: b, autocloses: !0 },
        };
        function f(h) {
          return (0, t.jsx)("ul", { children: h.children });
        }
        function v(h) {
          return (0, t.jsx)("ol", { children: h.children });
        }
        function b(h) {
          return (0, t.jsx)("li", { children: h.children });
        }
      },
      82277: (W) => {
        W.exports = {
          FilterBorder: "_3xFYpKNlOZ6xjQ529ZgRbr",
          Top: "_310cGk80jWCZr6LxeueX_5",
          Bottom: "nLYMJhpffeKLN_8VkTcD_",
        };
      },
      39049: (W) => {
        W.exports = {
          Heading: "_12ldq1_X5RuLWAAs_ODwt7",
          "HeadingSize-1": "-YHuRmP6nUp0IqPQ4F3wk",
          "HeadingSize-2": "_20m6yPkrPwQ8XwlhPdMtqu",
          "HeadingSize-3": "_2jvih9p3Mc3zUn2nnxzDv7",
          "HeadingSize-4": "_1zvMJY9dUjwMSI0j5QoEdq",
          "HeadingSize-5": "_1196Oisy8jDA4szPu-KrKP",
          "HeadingSize-6": "R1W-zMFN4WGw9JK48Yqez",
          "HeadingSize-7": "Ena8Nl7MJg7YAYsWql_jo",
          "HeadingSize-8": "jyf9-rlT4iFrHQOAVn298",
          "HeadingSize-9": "_3L0vs4_Y96AtsR3P5GUkUa",
        };
      },
      17763: (W) => {
        W.exports = {
          CodeBlock: "OkZ2olcxw9WPWea9VGVr6",
          ClearFloat: "RRZZP47ujIKbmOpZ61w_T",
        };
      },
    },
  ]);
})();

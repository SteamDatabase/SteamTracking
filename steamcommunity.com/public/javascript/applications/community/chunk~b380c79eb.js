/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [49769],
    {
      99631: (W, M, e) => {
        "use strict";
        e.d(M, { C: () => g, I: () => I });
        var t = e(7850),
          l = e(90626),
          C = e(7125);
        const g = Symbol("CoercingTextInputNotParseable");
        function I(x) {
          const {
              value: F,
              onValueChange: E,
              valueToString: U,
              valueFromString: c,
              checkValidText: m,
              onBlur: n,
              onKeyDown: a,
              ...b
            } = x,
            [y, _] = (0, l.useState)(null),
            H = y != null ? y : F === void 0 ? "" : U(F),
            A = (L) => {
              const N = c(L);
              N !== g && L === U(N) ? (_(null), E(N)) : (!m || m(L, N)) && _(L);
            },
            $ = () => {
              if (y !== null) {
                const L = c(y);
                L !== g && E(L), _(null);
              }
            },
            Y = (L) => {
              $(), n && n(L);
            },
            G = (L) => {
              L.key === "Enter" && $(), a && a(L);
            };
          return (0, t.jsx)(C.k, {
            value: H,
            onTextChange: A,
            onKeyDown: G,
            onBlur: Y,
            ...b,
          });
        }
      },
      74769: (W, M, e) => {
        "use strict";
        e.d(M, { Bp: () => re, EC: () => ie, G3: () => V, PT: () => X });
        var t = e(7850),
          l = e(90626),
          C = e(86946),
          g = e(12204),
          I = e(15252),
          x = e(7125),
          F = e(63029),
          E = e(185),
          U = e(92148),
          c = e(59366),
          m = e(60351),
          n = e(76854),
          a = e(68031),
          b = e(36707),
          y = e(39790),
          _ = e(85367),
          H = e(71742),
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
              popoverWidth: v = "dropdown",
              popoverMaxHeight: f,
              popoverPresentation: R,
              popoverLabel: u,
              ...i
            } = s,
            [S, O] = (0, l.useState)(void 0);
          (0, l.useEffect)(() => O(void 0), [r.bOpen]);
          const T = (0, G.Qn)(),
            h = (0, l.useRef)(null),
            z = (0, l.useRef)(null),
            j = (0, l.useMemo)(
              () => r.rgFilteredOptions.findIndex((D) => D === r.selectedValue),
              [r.selectedValue, r.rgFilteredOptions],
            ),
            K = (0, E.T)({
              open: r.bOpen,
              onOpenChange: r.setOpen,
              width: v,
              maxHeight: f,
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
              refPopover: h,
              refScrollElement: z,
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
            children: (0, t.jsx)(E.k.Root, { state: K, children: o }),
          });
        }
        function w(s) {
          const {
              refPopover: o,
              inputValue: r,
              onInputChange: d,
              activeIndex: v,
              popoverPlacement: f,
              popoverPresentation: R,
              popoverLabel: u,
              multiselect: i,
              setActiveIndex: S,
              setOpen: O,
              filterPlaceholder: T,
              onIndexSelected: h,
              refScrollElement: z,
            } = Z("<Combobox.Options>"),
            j = (P) => {
              P && P.focus({ preventScroll: !0 });
            },
            K = (P) => {
              P.key === "Enter" &&
                v !== null &&
                (h(v),
                i || (S(null), O(!1)),
                P.preventDefault(),
                P.stopPropagation());
            },
            k = R === "anchor" && f.startsWith("top"),
            D = (0, t.jsx)(m.az, {
              overflow: "auto",
              ref: z,
              style: { overscrollBehavior: "contain" },
              children: s.children,
            }),
            B = (P) => {
              (P.key === "Home" || P.key === "End") && P.stopPropagation();
            };
          return (0, t.jsx)(E.k.Positioner, {
            ref: o,
            label: u,
            children: (0, t.jsxs)(a.s, {
              direction: "column",
              maxHeight: "var(--popover-max-height)",
              children: [
                k && D,
                (0, t.jsx)(m.az, {
                  flexShrink: "0",
                  className: (0, b.A)(A.FilterBorder, k ? A.Top : A.Bottom),
                  children: (0, t.jsx)(x.k, {
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
          const { items: o, renderItem: r, overscan: d = 5, ...v } = s,
            {
              bOpen: f,
              refPopover: R,
              refScrollElement: u,
            } = Z("<ComboboxVirtualizedOptions>"),
            [i, S] = (0, l.useState)(!1),
            O = f && !!R.current && !!u.current;
          (0, l.useEffect)(() => {
            O !== i && S(O);
          }, [O, i]);
          const T = (0, U.Te)({
            count: i ? o.length : Math.min(o.length, 3),
            getScrollElement: () => u.current,
            enabled: f,
            measureElement: c.ZO,
            ...v,
          });
          return (0, t.jsx)(w, {
            children: (0, t.jsx)(ne, {
              value: T,
              children: (0, t.jsx)(m.az, {
                height: `${T.getTotalSize()}px`,
                position: "relative",
                width: "100%",
                children: T.getVirtualItems().map((h) => r(o[h.index], h, T)),
              }),
            }),
          });
        }
        function oe(s) {
          const { virtualItem: o, children: r } = s,
            d = (0, l.useContext)(ne);
          return (
            (0, H.wT)(d, "Virtual item rendered outside of a virtualizer!"),
            (0, t.jsx)(m.az, {
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
              onItemSelectionChange: v,
              selectedValue: f,
              multiselect: R,
              maxSelected: u,
            } = Z("<ComboboxTrigger>");
          let i = !1,
            S = !1;
          R
            ? ((i = Array.isArray(f) && f.includes(o)),
              (S = !!u && Array.isArray(f) && f.length >= u))
            : (i = o === f);
          const O = d || (S && !i);
          return (0, t.jsxs)(E.k.Item, {
            onSelect: () => v(o),
            selected: i,
            disabled: O,
            children: [
              R &&
                (0, t.jsxs)(a.s, {
                  gap: "2",
                  align: "center",
                  children: [
                    (0, t.jsx)(_.S, { checked: i, variant: "dark" }),
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
              bOpen: v,
              setOpen: f,
              inputValue: R,
              onInputChange: u,
              selectedValue: i,
              focusedValue: S,
              refScrollElement: O,
              onItemSelectionChange: T,
              activeIndex: h,
              setActiveIndex: z,
              onFocusChange: j,
              rgFilteredOptions: K,
              onSelectionChange: k,
              multiselect: D,
              onClear: B,
              refPopover: P,
              clearable: Ee,
              filterPlaceholder: Pe,
              onIndexSelected: p,
              popoverPlacement: te,
              popoverPresentation: ue,
              popoverLabel: Te,
              maxSelected: je,
              variant: Oe,
              ...ge
            } = Z("<ComboboxTrigger>"),
            De = { tabIndex: 0, children: o },
            pe = D ? Array.isArray(i) && i.length > 0 : !!i,
            ve = pe && Ee,
            Me = ve
              ? (0, t.jsx)(F.g, { onClick: B, cursor: "pointer", hitSlop: !0 })
              : (0, t.jsx)(g.V, {}),
            Ie = ve
              ? {
                  onSecondaryButton: B,
                  actionDescriptionMap: {
                    [N.pR.SECONDARY]: L.T.Localize("#Clear"),
                  },
                }
              : void 0,
            be = (0, Y.f)("Combobox", Oe),
            Le = (0, t.jsx)(C.j, {
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
          return (0, t.jsx)(E.k.Anchor, { children: Re });
        }
        function Q(s) {
          return (0, t.jsx)(I.EY, {
            weight: "medium",
            truncate: !0,
            contrast: "title",
            ...s,
          });
        }
        function he(s) {
          return (0, t.jsx)(I.EY, {
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
              filterPlaceholder: v,
              selectedValue: f,
              onSelectionChange: R,
              maxSelected: u,
            } = s,
            [i, S] = (0, l.useState)(""),
            [O, T] = (0, l.useState)(!1),
            [h, z] = (0, l.useState)(null),
            j = (0, l.useMemo)(() => r.filter((p) => d(i, p)), [i, r, d]),
            K = typeof h == "number",
            k = j.length > 0,
            D = (0, l.useCallback)(
              (p) => {
                p && !K && k && z(0), S(p);
              },
              [K, k],
            ),
            B = (0, l.useCallback)(
              (p) => {
                p || D(""), T(p);
              },
              [D],
            ),
            P = (0, l.useCallback)(
              (p) => {
                R(p), o || B(!1);
              },
              [o, R, B],
            ),
            Ee = (p) => {
              P(o ? [] : null),
                p == null || p.stopPropagation(),
                p == null || p.preventDefault();
            },
            Pe = (0, l.useCallback)(
              (p) => {
                if (!o) P(p);
                else if (!f) P([p]);
                else {
                  const te = f,
                    ue = te.indexOf(p);
                  if (ue === -1) P(te.concat(p));
                  else return P(te.slice(0, ue).concat(te.slice(ue + 1)));
                }
              },
              [P, f, o],
            );
          return {
            activeIndex: h,
            setActiveIndex: z,
            rgFilteredOptions: j,
            selectedValue: f,
            onSelectionChange: P,
            onItemSelectionChange: Pe,
            onClear: Ee,
            inputValue: i,
            onInputChange: D,
            bOpen: O,
            setOpen: B,
            filterPlaceholder: v,
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
              filter: v,
              filterPlaceholder: f,
              placeholder: R,
              getOptionLabel: u = ee,
              ...i
            } = s,
            S = (0, l.useCallback)(
              (h, z) => (v ? v(h, z) : J(h, u(z))),
              [v, u],
            ),
            O = re({
              onSelectionChange: r,
              selectedValue: o,
              rgOptions: d,
              filter: S,
              filterPlaceholder: f,
            }),
            T = o != null;
          return (0, t.jsxs)(V.Root, {
            state: O,
            ...i,
            children: [
              (0, t.jsxs)(V.Trigger, {
                children: [
                  T && (0, t.jsx)(V.Value, { children: u(o) }),
                  !T && (0, t.jsx)(V.Placeholder, { children: R }),
                ],
              }),
              (0, t.jsx)(V.Options, {
                children: O.rgFilteredOptions.map((h) =>
                  (0, t.jsx)(q, { value: h, children: u(h) }, u(h)),
                ),
              }),
            ],
          });
        }
        const V = Object.assign(ae, le);
        function ie(s) {
          return se(s, !0);
        }
        function xe(s) {
          const {
              selectedValue: o,
              onSelectionChange: r,
              options: d,
              filter: v,
              filterPlaceholder: f,
              placeholder: R,
              getOptionLabel: u = ee,
              maxSelected: i,
              ...S
            } = s,
            O = (0, l.useCallback)(
              (j, K) => (v ? v(j, K) : J(j, u(K))),
              [v, u],
            ),
            T = ie({
              onSelectionChange: r,
              selectedValue: o,
              rgOptions: d,
              filter: O,
              filterPlaceholder: f,
              maxSelected: i,
            }),
            h = Array.isArray(o) && o.length > 0;
          let z = "";
          if (h) {
            const j = o.map((K) => u(K));
            "ListFormat" in Intl
              ? (z = new Intl.ListFormat((0, y.ZO)().strISOCode).format(j))
              : (z = j.join(", "));
          }
          return (0, t.jsxs)(V.Root, {
            state: T,
            ...S,
            children: [
              (0, t.jsxs)(V.Trigger, {
                children: [
                  h && (0, t.jsx)(V.Value, { children: z }),
                  !h && (0, t.jsx)(V.Placeholder, { children: R }),
                ],
              }),
              (0, t.jsx)(V.Options, {
                children: T.rgFilteredOptions.map((j) =>
                  (0, t.jsx)(V.Option, { value: j, children: u(j) }, u(j)),
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
      7125: (W, M, e) => {
        "use strict";
        e.d(M, { k: () => _ });
        var t = e(7850),
          l = e(90626),
          C = e(64238),
          g = e.n(C),
          I = e(3877),
          x = e(98929),
          F = e(60351),
          E = e(86946),
          U = e(63029),
          c = e(18938),
          m = e(24660),
          n = e(80549),
          a = e(3166),
          b = e(58017),
          y = e(64415);
        function _(A) {
          const { extracted: $, remaining: Y } = (0, F.A4)(A),
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
            V = ae
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
              afterContent: V,
              ref: me,
              disabled: Q,
            },
            X = (0, l.useRef)(null),
            ce = (d) => {
              X.current && d.target !== X.current && X.current.focus();
            },
            Z = he && se,
            s = Z ? H : "input",
            r =
              Z && ae && !Q
                ? {
                    onSecondaryButton: ee,
                    actionDescriptionMap: {
                      [y.pR.SECONDARY]: b.T.Localize("#Clear"),
                    },
                  }
                : {};
          return (0, t.jsx)(E.j, {
            cursor: "text",
            ...xe,
            onClick: ce,
            children: (0, t.jsx)(s, {
              ref: (0, c.Ue)(q, X),
              type: "text",
              "aria-disabled": Q,
              readOnly: Q,
              className: g()((0, I.T)(), (0, x.F)()),
              value: G || "",
              onChange: le,
              ...r,
              ...re,
            }),
          });
        }
        function H(A) {
          return (0, t.jsx)(m.BA, { noFocusRing: !0, ...A });
        }
      },
      34771: (W, M, e) => {
        "use strict";
        e.d(M, { D: () => a });
        var t = e(7850),
          l = e(39049),
          C = e(8928),
          g = e(15252),
          I = e(69289),
          x = e(90626);
        function F(_) {
          const { depth: H } = useContext(E);
          return jsx(E.Provider, {
            value: { depth: H + 1 },
            children: jsx(Box, { ..._ }),
          });
        }
        const E = x.createContext({ depth: 0 });
        function U() {
          return (0, x.useContext)(E).depth;
        }
        var c = e(3877),
          m = e(64238),
          n = e.n(m);
        function a(_) {
          const { level: H = "auto", className: A, color: $ } = _,
            Y = U(),
            G = y(H, Y);
          return (0, t.jsx)(G, {
            ...(0, I.mz)({ ..._, className: n()((0, c.T)(), l.Heading, A) }, b),
          });
        }
        const b = [
          ...g.U6,
          ...C.L,
          {
            prop: "size",
            responsive: !0,
            className: (_) => l[`HeadingSize-${_}`],
          },
        ];
        function y(_, H) {
          if (_ === "auto" && H === 0) return "h1";
          const A = _ === "auto" ? H.toString() : _;
          return /^[1-6]$/.test(A)
            ? "h" + A
            : _ === "auto"
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
      51596: (W, M, e) => {
        "use strict";
        e.d(M, { P: () => t });
        function t(l, C) {
          return C === void 0 ? l[""] : l[C];
        }
      },
      52574: (W, M, e) => {
        "use strict";
        e.d(M, { L: () => C });
        var t = e(7850),
          l = e(51596);
        const C = {
          b: { Constructor: g },
          i: { Constructor: I },
          u: { Constructor: x },
          c: { Constructor: F },
          strike: { Constructor: E },
          color: { Constructor: U },
        };
        function g(c) {
          return (0, t.jsx)("b", { children: c.children });
        }
        function I(c) {
          return (0, t.jsx)("i", { children: c.children });
        }
        function x(c) {
          return (0, t.jsx)("u", { children: c.children });
        }
        function F(c) {
          return (0, t.jsx)("code", { children: c.children });
        }
        function E(c) {
          return (0, t.jsx)("s", { children: c.children });
        }
        function U(c) {
          const m = (0, l.P)(c.args),
            n = {};
          return (
            m &&
              (m.match(/^#[a-fA-F0-9]+$/) || m.match(/rgba?\([0-9, ]+\)$/)) &&
              (n.color = m),
            (0, t.jsx)("span", { style: n, children: c.children })
          );
        }
      },
      91937: (W, M, e) => {
        "use strict";
        e.d(M, { F: () => g });
        var t = e(7850),
          l = e(17763),
          C = e.n(l);
        const g = {
          h1: { Constructor: I, skipFollowingNewline: !0 },
          h2: { Constructor: x, skipFollowingNewline: !0 },
          h3: { Constructor: F, skipFollowingNewline: !0 },
          code: { Constructor: E, skipFollowingNewline: !0 },
          quote: {
            Constructor: U,
            skipFollowingNewline: !0,
            skipInternalNewline: !0,
          },
          hr: { Constructor: m, skipFollowingNewline: !0 },
        };
        function I(n) {
          return (0, t.jsx)("h1", { children: n.children });
        }
        function x(n) {
          return (0, t.jsx)("h2", { children: n.children });
        }
        function F(n) {
          return (0, t.jsx)("h3", { children: n.children });
        }
        function E(n) {
          return (0, t.jsx)("pre", {
            className: C().CodeBlock,
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
        function m(n) {
          return (0, t.jsxs)(t.Fragment, {
            children: [(0, t.jsx)("hr", {}), n.children],
          });
        }
      },
      59443: (W, M, e) => {
        "use strict";
        e.d(M, { _r: () => c, e9: () => m, rh: () => U });
        var t = e(7850),
          l = e(90626),
          C = e(43434),
          g = e(86336),
          I = e(51596),
          x = e(39414);
        function F(n) {
          const a = l.Children.toArray(n)[0];
          return typeof a == "string" ? a : void 0;
        }
        function E(n, a) {
          if (!n) return;
          const b = n.startsWith("steamcommunity.com/") ? "https://" + n : n;
          if (b.match(/^https?:\/\//))
            return {
              strURL: b,
              bFromBody: !1,
              bHasCustomText: !(a != null && a.match(/^https?:\/\//i)),
            };
        }
        function U(n) {
          var a;
          const b =
            (a = (0, I.P)(n.args)) != null ? a : (0, I.P)(n.args, "href");
          if (b) return E(b, F(n.children));
          if (typeof n.children == "string") {
            const y = n.children.trim(),
              _ = x.O.exec(y);
            if ((_ == null ? void 0 : _[0]) == y)
              return { strURL: y, bFromBody: !0, bHasCustomText: !1 };
          }
        }
        function c(n) {
          const a = U(n);
          if (!a) return n.children;
          if (a.bFromBody) return (0, t.jsx)(m, { strURL: a.strURL });
          const b = (0, C.p)(a.strURL) ? (0, C.E)(a.strURL) : a.strURL;
          return (0, t.jsx)(g.Y, {
            target: "_blank",
            href: b,
            underline: "auto",
            contrast: "title",
            children: n.children,
          });
        }
        function m(n) {
          const a = n.strURL.match(/^[a-z][a-z0-9+.-]*:/i)
              ? n.strURL
              : "http://" + n.strURL,
            b = (0, C.p)(a) ? (0, C.E)(a) : a;
          return (0, t.jsx)(g.Y, {
            target: "_blank",
            href: b,
            underline: "auto",
            contrast: "title",
            children: n.strURL,
          });
        }
      },
      49144: (W, M, e) => {
        "use strict";
        e.d(M, { I: () => l });
        var t = e(7850);
        const l = {
          list: {
            Constructor: C,
            skipInternalNewline: !0,
            skipFollowingNewline: !0,
          },
          olist: {
            Constructor: g,
            skipInternalNewline: !0,
            skipFollowingNewline: !0,
          },
          "*": { Constructor: I, autocloses: !0 },
        };
        function C(x) {
          return (0, t.jsx)("ul", { children: x.children });
        }
        function g(x) {
          return (0, t.jsx)("ol", { children: x.children });
        }
        function I(x) {
          return (0, t.jsx)("li", { children: x.children });
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

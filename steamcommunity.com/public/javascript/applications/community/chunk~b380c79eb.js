/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [9769],
    {
      85367: (T, p, t) => {
        "use strict";
        t.d(p, { S: () => Y });
        var e = t(7850),
          n = t(68031),
          o = t(30241),
          a = t(21895),
          C = t.n(a),
          I = t(64238),
          b = t.n(I),
          R = t(80549);
        function Y(s) {
          const {
              checked: E,
              onChange: F,
              disabled: M,
              children: A,
              ref: Z,
              variant: U,
              color: H,
              align: N = "center",
              icon: $,
              ...L
            } = s,
            Q = E === "indeterminate",
            at = $ != null ? $ : Q ? u : o.i,
            D = () => {
              M || (F && F(Q ? !0 : !E));
            },
            O = (h) => {
              M ||
                (h.key === " " &&
                  (D(), h.preventDefault(), h.stopPropagation()));
            },
            l = (0, R.f)("Checkbox", U);
          return (0, e.jsxs)(n.s, {
            align: N,
            ref: Z,
            role: "checkbox",
            "aria-checked": Q ? "mixed" : E,
            "data-state": S(E),
            className: b()(a.Root, a[`Variant-${l}`], M && a.Disabled),
            onClick: D,
            tabIndex: 0,
            onKeyDown: O,
            cursor: "default",
            "aria-disabled": M,
            "data-accent-color": H,
            ...L,
            children: [
              (0, e.jsx)("div", {
                className: a.Checkbox,
                children: E && (0, e.jsx)(at, { className: a.Icon }),
              }),
              A,
            ],
          });
        }
        function S(s) {
          return s === "indeterminate" ? s : s ? "checked" : "unchecked";
        }
        function u(s) {
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
      99631: (T, p, t) => {
        "use strict";
        t.d(p, { C: () => a, I: () => C });
        var e = t(7850),
          n = t(90626),
          o = t(7125);
        const a = Symbol("CoercingTextInputNotParseable");
        function C(I) {
          const {
              value: b,
              onValueChange: R,
              valueToString: Y,
              valueFromString: S,
              checkValidText: u,
              onBlur: s,
              onKeyDown: E,
              ...F
            } = I,
            [M, A] = (0, n.useState)(null),
            Z = M != null ? M : b === void 0 ? "" : Y(b),
            U = (L) => {
              const Q = S(L);
              Q !== a && L === Y(Q) ? (A(null), R(Q)) : (!u || u(L, Q)) && A(L);
            },
            H = () => {
              if (M !== null) {
                const L = S(M);
                L !== a && R(L), A(null);
              }
            },
            N = (L) => {
              H(), s && s(L);
            },
            $ = (L) => {
              L.key === "Enter" && H(), E && E(L);
            };
          return (0, e.jsx)(o.k, {
            value: Z,
            onTextChange: U,
            onKeyDown: $,
            onBlur: N,
            ...F,
          });
        }
      },
      74769: (T, p, t) => {
        "use strict";
        t.d(p, { Bp: () => m, EC: () => w, G3: () => y, PT: () => G });
        var e = t(7850),
          n = t(90626),
          o = t(86946),
          a = t(12204),
          C = t(15252),
          I = t(7125),
          b = t(63029),
          R = t(185),
          Y = t(92148),
          S = t(59366),
          u = t(60351),
          s = t(76854),
          E = t(68031),
          F = t(36707),
          M = t(39790),
          A = t(85367),
          Z = t(71742),
          U = t(82277),
          H = t.n(U),
          N = t(80549),
          $ = t(3166),
          L = t(58017),
          Q = t(64415);
        function at(P) {
          const {
              children: x,
              state: g,
              placement: _ = "bottom-end",
              popoverWidth: et = "dropdown",
              popoverMaxHeight: X,
              popoverPresentation: ct,
              popoverLabel: k,
              ...J
            } = P,
            [xt, ot] = (0, n.useState)(void 0);
          (0, n.useEffect)(() => ot(void 0), [g.bOpen]);
          const it = (0, $.Qn)(),
            tt = (0, n.useRef)(null),
            ft = (0, n.useRef)(null),
            st = (0, n.useMemo)(
              () =>
                g.rgFilteredOptions.findIndex((lt) => lt === g.selectedValue),
              [g.selectedValue, g.rgFilteredOptions],
            ),
            ht = (0, R.T)({
              open: g.bOpen,
              onOpenChange: g.setOpen,
              width: et,
              maxHeight: X,
              placement: _,
              presentation: ct,
              gutter: "4",
              activeIndex: g.activeIndex,
              setActiveIndex: g.setActiveIndex,
              selectedIndex: st,
              setSelectedIndex: (lt) =>
                g.onItemSelectionChange(g.rgFilteredOptions[lt]),
              interactions: { click: !0, virtualItemFocus: !it },
              role: "combobox",
              scroll: !1,
            }),
            Et = {
              ...g,
              ...J,
              focusedValue: xt,
              onFocusChange: ot,
              refPopover: tt,
              refScrollElement: ft,
              setOpen: (lt) => {
                if (lt) {
                  let dt = null;
                  g.multiselect
                    ? (dt = Array.isArray(g.selectedValue)
                        ? g.selectedValue[0]
                        : null)
                    : (dt = g.selectedValue),
                    ot(dt),
                    g.onInputChange("");
                }
                g.setOpen(lt);
              },
              onIndexSelected: (lt) => {
                const dt = ht.elementsRef.current;
                dt && dt[lt] && dt[lt].click();
              },
              popoverPlacement: ht.floating.placement,
              popoverPresentation: ht.presentation,
              popoverLabel: k,
            };
          return (0, e.jsx)(q.Provider, {
            value: Et,
            children: (0, e.jsx)(R.k.Root, { state: ht, children: x }),
          });
        }
        function D(P) {
          const {
              refPopover: x,
              inputValue: g,
              onInputChange: _,
              activeIndex: et,
              popoverPlacement: X,
              popoverPresentation: ct,
              popoverLabel: k,
              multiselect: J,
              setActiveIndex: xt,
              setOpen: ot,
              filterPlaceholder: it,
              onIndexSelected: tt,
              refScrollElement: ft,
            } = ut("<Combobox.Options>"),
            st = (nt) => {
              nt && nt.focus({ preventScroll: !0 });
            },
            ht = (nt) => {
              nt.key === "Enter" &&
                et !== null &&
                (tt(et),
                J || (xt(null), ot(!1)),
                nt.preventDefault(),
                nt.stopPropagation());
            },
            Et = ct === "anchor" && X.startsWith("top"),
            lt = (0, e.jsx)(u.az, {
              overflow: "auto",
              ref: ft,
              style: { overscrollBehavior: "contain" },
              children: P.children,
            }),
            dt = (nt) => {
              (nt.key === "Home" || nt.key === "End") && nt.stopPropagation();
            };
          return (0, e.jsx)(R.k.Positioner, {
            ref: x,
            label: k,
            children: (0, e.jsxs)(E.s, {
              direction: "column",
              maxHeight: "var(--popover-max-height)",
              children: [
                Et && lt,
                (0, e.jsx)(u.az, {
                  flexShrink: "0",
                  className: (0, F.A)(U.FilterBorder, Et ? U.Top : U.Bottom),
                  children: (0, e.jsx)(I.k, {
                    margin: "3",
                    variant: "inset",
                    radius: "sm",
                    value: g,
                    onTextChange: _,
                    onKeyDown: ht,
                    onKeyDownCapture: dt,
                    placeholder: it,
                    inputRef: st,
                    autoComplete: "off",
                  }),
                }),
                !Et && lt,
              ],
            }),
          });
        }
        const O = (0, n.createContext)(null);
        function l(P) {
          const { items: x, renderItem: g, overscan: _ = 5, ...et } = P,
            {
              bOpen: X,
              refPopover: ct,
              refScrollElement: k,
            } = ut("<ComboboxVirtualizedOptions>"),
            [J, xt] = (0, n.useState)(!1),
            ot = X && !!ct.current && !!k.current;
          (0, n.useEffect)(() => {
            ot !== J && xt(ot);
          }, [ot, J]);
          const it = (0, Y.Te)({
            count: J ? x.length : Math.min(x.length, 3),
            getScrollElement: () => k.current,
            enabled: X,
            measureElement: S.ZO,
            ...et,
          });
          return (0, e.jsx)(D, {
            children: (0, e.jsx)(O, {
              value: it,
              children: (0, e.jsx)(u.az, {
                height: `${it.getTotalSize()}px`,
                position: "relative",
                width: "100%",
                children: it
                  .getVirtualItems()
                  .map((tt) => g(x[tt.index], tt, it)),
              }),
            }),
          });
        }
        function h(P) {
          const { virtualItem: x, children: g } = P,
            _ = (0, n.useContext)(O);
          return (
            (0, Z.wT)(_, "Virtual item rendered outside of a virtualizer!"),
            (0, e.jsx)(u.az, {
              position: "absolute",
              width: "100%",
              style: { top: 0, left: 0, transform: `translateY(${x.start}px)` },
              ref: _.measureElement,
              "data-index": x.index,
              children: g,
            })
          );
        }
        function d(P) {
          const { virtualItem: x, ...g } = P;
          return (0, e.jsx)(h, {
            virtualItem: x,
            children: (0, e.jsx)(v, { ...g }),
          });
        }
        function f(P) {
          const { virtualItem: x, children: g } = P;
          return (0, e.jsx)(h, { virtualItem: x, children: g });
        }
        function v(P) {
          const { value: x, children: g, disabled: _ } = P,
            {
              onItemSelectionChange: et,
              selectedValue: X,
              multiselect: ct,
              maxSelected: k,
            } = ut("<ComboboxTrigger>");
          let J = !1,
            xt = !1;
          ct
            ? ((J = Array.isArray(X) && X.includes(x)),
              (xt = !!k && Array.isArray(X) && X.length >= k))
            : (J = x === X);
          const ot = _ || (xt && !J);
          return (0, e.jsxs)(R.k.Item, {
            onSelect: () => et(x),
            selected: J,
            disabled: ot,
            children: [
              ct &&
                (0, e.jsxs)(E.s, {
                  gap: "2",
                  align: "center",
                  children: [
                    (0, e.jsx)(A.S, { checked: J, variant: "dark" }),
                    g,
                  ],
                }),
              !ct && g,
            ],
          });
        }
        function V(P) {
          const { children: x, beforeContent: g, render: _ } = P,
            {
              bOpen: et,
              setOpen: X,
              inputValue: ct,
              onInputChange: k,
              selectedValue: J,
              focusedValue: xt,
              refScrollElement: ot,
              onItemSelectionChange: it,
              activeIndex: tt,
              setActiveIndex: ft,
              onFocusChange: st,
              rgFilteredOptions: ht,
              onSelectionChange: Et,
              multiselect: lt,
              onClear: dt,
              refPopover: nt,
              clearable: gt,
              filterPlaceholder: vt,
              onIndexSelected: rt,
              popoverPlacement: mt,
              popoverPresentation: Pt,
              popoverLabel: At,
              maxSelected: Bt,
              variant: pt,
              ...Dt
            } = ut("<ComboboxTrigger>"),
            It = { tabIndex: 0, children: x },
            Ct = lt ? Array.isArray(J) && J.length > 0 : !!J,
            Ot = Ct && gt,
            Mt = Ot
              ? (0, e.jsx)(b.g, { onClick: dt, cursor: "pointer", hitSlop: !0 })
              : (0, e.jsx)(a.V, {}),
            Lt = Ot
              ? {
                  onSecondaryButton: dt,
                  actionDescriptionMap: {
                    [Q.pR.SECONDARY]: L.T.Localize("#Clear"),
                  },
                }
              : void 0,
            Rt = (0, N.f)("Combobox", pt),
            jt = (0, e.jsx)(o.j, {
              beforeContent: g,
              afterContent: Mt,
              hasValue: Ct,
              cursor: "pointer",
              tabIndex: 0,
              variant: Rt,
              navProps: Lt,
              ...Dt,
            }),
            Tt = (0, s.Q)(_, jt, It, void 0);
          return (0, e.jsx)(R.k.Anchor, { children: Tt });
        }
        function i(P) {
          return (0, e.jsx)(C.EY, {
            weight: "medium",
            truncate: !0,
            contrast: "title",
            ...P,
          });
        }
        function c(P) {
          return (0, e.jsx)(C.EY, {
            contrast: "description",
            truncate: !0,
            ...P,
          });
        }
        function r(P, x) {
          if (typeof x == "string")
            return x.toLocaleLowerCase().includes(P.toLocaleLowerCase());
          try {
            return JSON.stringify(x)
              .toLocaleLowerCase()
              .includes(P.toLocaleLowerCase());
          } catch {}
          return (
            console.error(
              "Could not use default option filter on provided Comboxbox option. Custom filter function required.",
            ),
            !1
          );
        }
        function m(P) {
          return j(P, !1);
        }
        function j(P, x) {
          const {
              rgOptions: g,
              filter: _ = r,
              filterPlaceholder: et,
              selectedValue: X,
              onSelectionChange: ct,
              maxSelected: k,
            } = P,
            [J, xt] = (0, n.useState)(""),
            [ot, it] = (0, n.useState)(!1),
            [tt, ft] = (0, n.useState)(null),
            st = (0, n.useMemo)(() => g.filter((rt) => _(J, rt)), [J, g, _]),
            ht = typeof tt == "number",
            Et = st.length > 0,
            lt = (0, n.useCallback)(
              (rt) => {
                rt && !ht && Et && ft(0), xt(rt);
              },
              [ht, Et],
            ),
            dt = (0, n.useCallback)(
              (rt) => {
                rt || lt(""), it(rt);
              },
              [lt],
            ),
            nt = (0, n.useCallback)(
              (rt) => {
                ct(rt), x || dt(!1);
              },
              [x, ct, dt],
            ),
            gt = (rt) => {
              nt(x ? [] : null),
                rt == null || rt.stopPropagation(),
                rt == null || rt.preventDefault();
            },
            vt = (0, n.useCallback)(
              (rt) => {
                if (!x) nt(rt);
                else if (!X) nt([rt]);
                else {
                  const mt = X,
                    Pt = mt.indexOf(rt);
                  if (Pt === -1) nt(mt.concat(rt));
                  else return nt(mt.slice(0, Pt).concat(mt.slice(Pt + 1)));
                }
              },
              [nt, X, x],
            );
          return {
            activeIndex: tt,
            setActiveIndex: ft,
            rgFilteredOptions: st,
            selectedValue: X,
            onSelectionChange: nt,
            onItemSelectionChange: vt,
            onClear: gt,
            inputValue: J,
            onInputChange: lt,
            bOpen: ot,
            setOpen: dt,
            filterPlaceholder: et,
            multiselect: x,
            maxSelected: k,
          };
        }
        const z = {
          Root: at,
          Option: v,
          Options: D,
          VirtualizedOptions: l,
          VirtualizedOption: d,
          VirtualizedContent: f,
          Trigger: V,
          DefaultOptionFilter: r,
          Value: i,
          Placeholder: c,
        };
        function B(P) {
          return P
            ? typeof P == "string"
              ? P
              : typeof P == "number"
                ? P.toString()
                : (console.error(
                    "Could not use default option labeler on Combobox option value. Custom labeler requried",
                    P,
                  ),
                  "")
            : "";
        }
        function K(P) {
          const {
              selectedValue: x,
              onSelectionChange: g,
              options: _,
              filter: et,
              filterPlaceholder: X,
              placeholder: ct,
              getOptionLabel: k = B,
              ...J
            } = P,
            xt = (0, n.useCallback)(
              (tt, ft) => (et ? et(tt, ft) : r(tt, k(ft))),
              [et, k],
            ),
            ot = m({
              onSelectionChange: g,
              selectedValue: x,
              rgOptions: _,
              filter: xt,
              filterPlaceholder: X,
            }),
            it = x != null;
          return (0, e.jsxs)(y.Root, {
            state: ot,
            ...J,
            children: [
              (0, e.jsxs)(y.Trigger, {
                children: [
                  it && (0, e.jsx)(y.Value, { children: k(x) }),
                  !it && (0, e.jsx)(y.Placeholder, { children: ct }),
                ],
              }),
              (0, e.jsx)(y.Options, {
                children: ot.rgFilteredOptions.map((tt) =>
                  (0, e.jsx)(v, { value: tt, children: k(tt) }, k(tt)),
                ),
              }),
            ],
          });
        }
        const y = Object.assign(K, z);
        function w(P) {
          return j(P, !0);
        }
        function W(P) {
          const {
              selectedValue: x,
              onSelectionChange: g,
              options: _,
              filter: et,
              filterPlaceholder: X,
              placeholder: ct,
              getOptionLabel: k = B,
              maxSelected: J,
              ...xt
            } = P,
            ot = (0, n.useCallback)(
              (st, ht) => (et ? et(st, ht) : r(st, k(ht))),
              [et, k],
            ),
            it = w({
              onSelectionChange: g,
              selectedValue: x,
              rgOptions: _,
              filter: ot,
              filterPlaceholder: X,
              maxSelected: J,
            }),
            tt = Array.isArray(x) && x.length > 0;
          let ft = "";
          if (tt) {
            const st = x.map((ht) => k(ht));
            "ListFormat" in Intl
              ? (ft = new Intl.ListFormat((0, M.ZO)().strISOCode).format(st))
              : (ft = st.join(", "));
          }
          return (0, e.jsxs)(y.Root, {
            state: it,
            ...xt,
            children: [
              (0, e.jsxs)(y.Trigger, {
                children: [
                  tt && (0, e.jsx)(y.Value, { children: ft }),
                  !tt && (0, e.jsx)(y.Placeholder, { children: ct }),
                ],
              }),
              (0, e.jsx)(y.Options, {
                children: it.rgFilteredOptions.map((st) =>
                  (0, e.jsx)(y.Option, { value: st, children: k(st) }, k(st)),
                ),
              }),
            ],
          });
        }
        const G = Object.assign(W, z),
          q = (0, n.createContext)(null);
        function ut(P) {
          const x = (0, n.useContext)(q);
          return (
            x || console.error(`${P} must be used within a <Combobox>!`), x
          );
        }
      },
      86946: (T, p, t) => {
        "use strict";
        t.d(p, { j: () => S, w: () => u });
        var e = t(7850),
          n = t(64238),
          o = t.n(n),
          a = t(38878),
          C = t.n(a),
          I = t(60351),
          b = t(68031),
          R = t(8928),
          Y = t(69289);
        function S(s) {
          const {
              children: E,
              beforeContent: F,
              afterContent: M,
              hasValue: A,
              ...Z
            } = s,
            U = u(Z);
          return (0, e.jsxs)(b.s, {
            ...U,
            align: "center",
            "data-has-value": !!A,
            minWidth: "0",
            children: [
              F && (0, e.jsx)(b.s, { paddingRight: "2", children: F }),
              (0, e.jsx)(I.az, { flexGrow: "1", minWidth: "0", children: E }),
              M && (0, e.jsx)(b.s, { paddingLeft: "2", children: M }),
            ],
          });
        }
        function u(s) {
          const {
              variant: E = "basic",
              size: F = "2",
              radius: M,
              focusable: A = !0,
              hoverable: Z = !0,
              clickable: U = !0,
              disabled: H,
              className: N,
              status: $,
              color: L,
              ...Q
            } = s,
            at = E === "underline" ? "none" : M;
          return (0, Y.mz)(
            {
              ...Q,
              radius: at,
              "data-status": $,
              "data-dull-color": L && L !== "dull" ? L : void 0,
              className: o()(
                a.ControlBox,
                A && !H && a.Focusable,
                Z && !H && a.Hoverable,
                U && !H && a.Clickable,
                H && a.Disabled,
                a[`Variant-${E}`],
                a[`Size-${F}`],
                N,
              ),
            },
            R.h,
          );
        }
      },
      98929: (T, p, t) => {
        "use strict";
        t.d(p, { F: () => o });
        var e = t(24089),
          n = t.n(e);
        function o() {
          return e.TextEntry;
        }
      },
      84909: (T, p, t) => {
        "use strict";
        t.d(p, { AM: () => O, Pr: () => at });
        var e = t(7850),
          n = t(90626),
          o = t(73788),
          a = t(8083),
          C = t(94621),
          I = t(18938),
          b = t(24660),
          R = t(38566),
          Y = t(54130),
          S = t(71742),
          u = t(64238),
          s = t.n(u),
          E = t(3877),
          F = t(3166),
          M = t(28020);
        const A = (0, n.createContext)(null);
        function Z(l) {
          const { children: h, ...d } = l,
            f = Q(d);
          return (0, e.jsx)(A.Provider, { value: f, children: h });
        }
        function U(l) {
          const { children: h } = l,
            d = n.Children.only(h),
            f = (0, n.useContext)(A);
          return d
            ? f
              ? (0, n.cloneElement)(d, {
                  ...f.getReferenceProps(d.props),
                  ref: (0, I.XB)(d.props.ref, f.floating.refs.setReference),
                })
              : (console.error(
                  "<PopoverAnchor> must be a child of <PopoverRoot>.",
                ),
                null)
            : null;
        }
        function H(l) {
          const { children: h, className: d, ref: f, label: v } = l,
            V = (0, n.useContext)(A),
            i = (0, o.SV)([
              f,
              V == null ? void 0 : V.floating.refs.setFloating,
            ]);
          if (!V)
            return (
              console.error(
                "<Popover.Positioner> must be a child of <Popover.Root>.",
              ),
              null
            );
          if (!V.open) return null;
          let c = n.Children.only(h),
            r = n.Fragment;
          return (
            c.type == O.FocusManager &&
              ((c = n.Children.only(c.props.children)), (r = N)),
            (0, e.jsx)(r, {
              children: (0, e.jsx)(M.HF, {
                presentation: V.presentation,
                sizing: V.sizing,
                floatingRef: i,
                floatingProps: V.getFloatingProps(),
                floatingStyles: V.floating.floatingStyles,
                referenceElement: V.floating.elements.domReference,
                className: s()((0, E.T)(), d),
                label: v,
                children: c,
              }),
            })
          );
        }
        function N(l) {
          return (0, F.Qn)()
            ? (0, e.jsx)($, { ...l })
            : (0, e.jsx)(L, { ...l });
        }
        function $(l) {
          const { children: h } = l,
            d = (0, n.useContext)(A);
          (0, S.wT)(
            !!d,
            "<Popover.Positioner> must be a child of <Popover.Root>.",
          );
          const f = () => d.floating.context.onOpenChange(!1),
            v = n.useRef(void 0);
          return (
            (0, b.O7)(v, !0, !0),
            (0, e.jsx)(R.D6, {
              navID: "Popover",
              onCancelButton: f,
              modal: !0,
              navTreeRef: v,
              children: (0, e.jsx)("div", {
                style: { display: "contents" },
                children: (0, e.jsx)(Y.q, { children: h }),
              }),
            })
          );
        }
        function L(l) {
          const { children: h } = l,
            d = (0, n.useContext)(A);
          return (
            (0, S.wT)(
              !!d,
              "<Popover.Positioner> must be a child of <Popover.Root>.",
            ),
            (0, e.jsx)(o.s3, {
              context: d.floating.context,
              initialFocus: -1,
              returnFocus: !1,
              children: h,
            })
          );
        }
        function Q(l) {
          const {
            open: h,
            interactions: d = {},
            width: f,
            maxHeight: v,
            gutter: V,
            scroll: i,
          } = l;
          let c = h;
          const r = (0, M.Pr)(l.presentation),
            m = at(l, c, r),
            j = { enabled: !!d.click },
            z = typeof d.click == "function" ? d.click(j) : j,
            B = (0, o.kp)(m.context, z),
            K = { enabled: !!d.focus },
            y = typeof d.focus == "function" ? d.focus(K) : K,
            w = (0, o.iQ)(m.context, y),
            W = { handleClose: (0, o.iB)() },
            G = typeof d.hover == "function" ? d.hover(W) : W,
            q = (0, o.Mk)(m.context, { enabled: !!d.hover, ...G }),
            ut = (0, o.s9)(m.context),
            { getFloatingProps: P, getReferenceProps: x } = (0, o.bv)([
              B,
              w,
              q,
              ut,
            ]);
          return {
            floating: m,
            getFloatingProps: P,
            getReferenceProps: x,
            open: c,
            presentation: r,
            sizing: { width: f, maxHeight: v, gutter: V, scroll: i },
          };
        }
        function at(l, h, d) {
          const { onOpenChange: f, placement: v } = l,
            V = d === "anchor";
          return (0, o.we)({
            open: h,
            onOpenChange: f,
            middleware: V ? D(l) : [],
            whileElementsMounted: V ? a.ll : void 0,
            placement: v && typeof v == "object" ? v.initial : v,
            strategy: "fixed",
            platform: {
              ...a.iD,
              getOffsetParent: (i) => {
                var c, r;
                return (r =
                  (c = i == null ? void 0 : i.ownerDocument) == null
                    ? void 0
                    : c.defaultView) != null
                  ? r
                  : window;
              },
            },
          });
        }
        function D(l) {
          const { gutter: h = 0, placement: d } = l,
            f = [],
            v = d && typeof d == "object";
          return (
            v && d.offset
              ? f.push((0, C.cY)(d.offset))
              : (!v || d.offset === void 0) && f.push((0, C.cY)(2)),
            v && d.flip
              ? f.push((0, C.UU)(d.flip))
              : (!v || d.flip === void 0) && f.push((0, C.UU)()),
            v && d.shift
              ? f.push((0, C.BN)(d.shift))
              : (!v || d.shift === void 0) && f.push((0, C.BN)()),
            f.push(
              (0, C.Ej)({
                apply: (V) => {
                  const { rects: i, elements: c, availableHeight: r } = V,
                    m = {
                      boxSizing: "border-box",
                      zIndex: "1",
                      "-webkit-app-region": "no-drag",
                    };
                  switch ((l.scroll && (m.overflowY = "auto"), l.width)) {
                    case "target": {
                      m.width = `${i.reference.width}px`;
                      break;
                    }
                    case "content": {
                      m.width = `${i.floating.width}px`;
                      break;
                    }
                    case "dropdown": {
                      let z = i.reference.width;
                      i.floating.width > z && z < 200 && (z = i.floating.width),
                        (m.width = `${z}px`);
                    }
                  }
                  typeof l.width == "function" &&
                    (m.width = l.width({
                      unContentWidth: i.floating.width,
                      unTargetWidth: i.reference.width,
                    }));
                  const j =
                    typeof h == "number" ? `${h}px` : `var(--spacing-${h})`;
                  typeof l.maxHeight == "function"
                    ? (m.maxHeight = l.maxHeight({
                        unAvailableHeight: r,
                        gutter: j,
                      }))
                    : typeof l.maxHeight == "number"
                      ? (m.maxHeight = `min( calc( ${r}px - ${j} ), ${l.maxHeight}px )`)
                      : typeof h == "number"
                        ? (m.maxHeight = `${r - h}px`)
                        : (m.maxHeight = `calc( ${r}px - var(--spacing-${h}) )`),
                    Object.assign(c.floating.style, m),
                    c.floating.style.setProperty(
                      "--popover-max-height",
                      m.maxHeight,
                    );
                },
              }),
            ),
            f
          );
        }
        const O = { Root: Z, Anchor: U, Positioner: H, FocusManager: N };
      },
      185: (T, p, t) => {
        "use strict";
        t.d(p, { k: () => at, T: () => Q });
        var e = t(7850),
          n = t(90626),
          o = t(73788),
          a = t(60351),
          C = t(76854),
          I = t(48093);
        function b(D) {
          const { render: O, ...l } = D;
          return (0, C.Q)(
            O,
            (0, e.jsx)(a.az, {
              radius: "sm",
              background: "dull-8",
              className: I.ListBox,
            }),
            { role: "listbox", ...l },
          );
        }
        function R(D) {
          const {
              selected: O,
              focused: l,
              label: h = null,
              render: d,
              disabled: f,
              ...v
            } = D,
            V = O ? "true" : "false",
            i = l ? "true" : void 0;
          return (0, C.Q)(
            d,
            (0, e.jsx)(a.az, {
              focusable: !0,
              "data-selected": V,
              "data-focused": i,
              "aria-disabled": f,
              className: I.ListBoxOption,
              paddingY: "2",
              paddingX: "3",
            }),
            { role: "option", ...v },
            { selected: O, focused: l, disabled: f },
          );
        }
        const Y = Object.assign(b, { Option: R });
        var S = t(84909),
          u = t(28020),
          s = t(24660),
          E = t(38566),
          F = t(3166);
        const M = (0, n.createContext)(null);
        function A(D) {
          const { children: O, state: l } = D;
          return (0, e.jsx)(M.Provider, { value: l, children: O });
        }
        function Z(D) {
          const { children: O } = D,
            l = n.Children.only(O),
            h = (0, n.useContext)(M),
            d = (0, o.SV)([
              h == null ? void 0 : h.floating.refs.setReference,
              l == null ? void 0 : l.props.ref,
            ]);
          if (!l) return null;
          if (!h)
            return (
              console.error(
                "<PopoverListAnchor> must be a child of <PopoverListRoot>.",
              ),
              null
            );
          const { ref: f, ...v } = l.props;
          return (0, n.cloneElement)(l, { ref: d, ...h.getReferenceProps(v) });
        }
        function U(D) {
          const { children: O, render: l, ref: h, label: d } = D,
            f = (0, n.useContext)(M),
            v = (0, o.SV)([
              h,
              f == null ? void 0 : f.floating.refs.setFloating,
            ]);
          return f
            ? f.open
              ? (0, e.jsx)(H, {
                  state: f,
                  children: (0, e.jsx)(u.HF, {
                    presentation: f.presentation,
                    sizing: f.sizing,
                    floatingRef: v,
                    floatingProps: f.getFloatingProps(),
                    floatingStyles: f.floating.floatingStyles,
                    referenceElement: f.floating.elements.domReference,
                    label: d,
                    children: (0, e.jsx)(Y, {
                      render: l,
                      children: (0, e.jsx)(o.ph, {
                        elementsRef: f.elementsRef,
                        labelsRef: f.labelsRef,
                        children: O,
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
        function H(D) {
          return (0, F.Qn)()
            ? (0, e.jsx)(N, { ...D })
            : (0, e.jsx)($, { ...D });
        }
        function N(D) {
          const { state: O, children: l } = D,
            h = () => O.floating.context.onOpenChange(!1),
            d = n.useRef(void 0);
          return (
            (0, s.O7)(d, !0, !0),
            (0, e.jsx)(E.D6, {
              navID: "PopoverList",
              onCancelButton: h,
              modal: !0,
              navTreeRef: d,
              children: l,
            })
          );
        }
        function $(D) {
          const { state: O, children: l } = D;
          return (0, e.jsx)(o.s3, {
            context: O.floating.context,
            initialFocus: O.initialFocus,
            returnFocus: !1,
            children: l,
          });
        }
        function L(D) {
          const {
              children: O,
              label: l,
              selected: h,
              onSelect: d,
              ref: f,
              disabled: v,
              ...V
            } = D,
            i = (0, n.useContext)(M),
            { ref: c, index: r } = (0, o.rm)({ label: l }),
            m = (0, o.SV)([f, c]);
          if (!i)
            return (
              console.error(
                "<PopoverListItem> must be a child of <PopoverListRoot>.",
              ),
              null
            );
          const j = r === i.activeIndex,
            z = r === i.selectedIndex || !!h;
          return (0, e.jsx)(Y.Option, {
            ref: m,
            selected: z,
            focused: j,
            role: "option",
            tabIndex: 0,
            ...i.getItemProps({
              onClick: v ? void 0 : d,
              onKeyDown: (B) => {
                !v &&
                  (B.key === "Enter" ||
                    (B.key === " " && !i.typingRef.current)) &&
                  (d(B), B.preventDefault(), B.stopPropagation());
              },
              active: j,
              selected: z,
              disabled: v,
              ...V,
            }),
            children: O,
          });
        }
        function Q(D) {
          const {
            open: O,
            activeIndex: l,
            setActiveIndex: h,
            selectedIndex: d,
            setSelectedIndex: f,
            interactions: v = {},
            role: V,
            width: i,
            maxHeight: c,
            gutter: r,
            scroll: m,
          } = D;
          let j = O;
          const z = (0, u.Pr)(D.presentation),
            B = (0, S.Pr)(D, j, z),
            K = (0, o.kp)(B.context, { enabled: !!v.click }),
            y = (0, o.iQ)(B.context, { enabled: !!v.focus }),
            w = (0, o.s9)(B.context),
            W = (0, n.useRef)([]),
            G = (0, o.C1)(B.context, {
              listRef: W,
              activeIndex: l,
              selectedIndex: d,
              onNavigate: h,
              virtual: !!v.virtualItemFocus,
              loop: !0,
              focusItemOnOpen: !1,
            }),
            q = (0, n.useRef)([]),
            ut = (0, n.useRef)(!1),
            P = (0, o.lY)(B.context, {
              enabled: !!v.typeahead,
              listRef: q,
              activeIndex: l,
              selectedIndex: d,
              onMatch: j ? h : f,
              onTypingChange: (X) => (ut.current = X),
            }),
            x = (0, o.It)(B.context, { role: V }),
            {
              getFloatingProps: g,
              getReferenceProps: _,
              getItemProps: et,
            } = (0, o.bv)([x, K, y, w, G, P]);
          return {
            floating: B,
            getFloatingProps: g,
            getReferenceProps: _,
            getItemProps: et,
            open: j,
            activeIndex: l,
            selectedIndex: d,
            setSelectedIndex: f,
            elementsRef: W,
            labelsRef: q,
            typingRef: ut,
            initialFocus: v.virtualItemFocus ? -1 : void 0,
            presentation: z,
            sizing: { width: i, maxHeight: c, gutter: r, scroll: m },
          };
        }
        const at = { Root: A, Anchor: Z, Positioner: U, Item: L };
      },
      21663: (T, p, t) => {
        "use strict";
        t.d(p, { I: () => M });
        var e = t(7850),
          n = t(90626),
          o = t(86946),
          a = t(60351),
          C = t(71742),
          I = t(64238),
          b = t.n(I),
          R = t(53011),
          Y = t.n(R),
          S = t(68031),
          u = t(80549);
        const s = (0, n.createContext)(null);
        function E(U) {
          const {
              variant: H,
              radius: N,
              size: $,
              status: L,
              color: Q,
              children: at,
              value: D,
              onValueChange: O,
            } = U,
            [l, h] = (0, n.useState)({}),
            d = (0, n.useCallback)((c, r) => h((m) => ({ ...m, [r]: c })), []),
            f = (0, n.useCallback)(
              (c, r) =>
                h((m) => {
                  const j = { ...m };
                  return j[r] === c && delete j[r], j;
                }),
              [],
            ),
            v = (c) => {
              let r = 0;
              switch (c.key) {
                case " ":
                case "Enter":
                case "ArrowRight":
                  r = 1;
                  break;
                case "ArrowLeft":
                  r = -1;
                  break;
              }
              if (r) {
                const m = Array.from(Object.values(l)).sort(Z);
                let j;
                if (D === null) j = r > 0 ? 0 : m.length - 1;
                else {
                  const K = l[D],
                    y = m.findIndex((w) => w === K);
                  (0, C.wT)(
                    typeof y == "number",
                    "Could not find current segmented value position",
                  ),
                    (j = y + r);
                }
                const z = m[j < 0 ? m.length + j : j % m.length],
                  B = Object.keys(l).find((K) => l[K] === z);
                typeof B != "string"
                  ? console.error("Could not find next segmeneted value")
                  : (O(B), c.stopPropagation(), c.preventDefault());
              }
            },
            V = (0, u.f)("SegmentedControl", H),
            i = (0, n.useMemo)(
              () => ({
                value: D,
                onValueChange: O,
                register: d,
                unregister: f,
                radius: N,
                size: $,
              }),
              [D, O, d, f, N, $],
            );
          return (0, e.jsx)(o.j, {
            clickable: !1,
            hoverable: !1,
            focusable: !1,
            variant: V,
            radius: N,
            size: $,
            status: L,
            className: b()(R.SegmentedControlBox, R[`Variant-${V}`]),
            tabIndex: 0,
            onKeyDown: v,
            children: (0, e.jsx)(s.Provider, {
              value: i,
              children: (0, e.jsxs)(a.az, {
                className: R.SegmentedControl,
                style: { "--outer-radius": `var(--radius-${N})` },
                children: [
                  at,
                  D !== null && (0, e.jsx)(A, { radius: N, color: Q }),
                ],
              }),
            }),
          });
        }
        function F(U) {
          const { value: H, children: N, disabled: $ } = U,
            L = (0, n.useContext)(s),
            [Q, at] = (0, n.useState)(),
            { register: D, unregister: O } = L || {};
          if (
            ((0, n.useEffect)(
              () => (!Q || !D || !O ? () => {} : (D(Q, H), () => O(Q, H))),
              [D, O, H, Q],
            ),
            !L)
          )
            return null;
          const { value: l, onValueChange: h, radius: d, size: f } = L,
            v = H === l,
            V = (c) => {
              c.stopPropagation(), c.preventDefault(), !(v || $) && h(H);
            },
            i = N === void 0 ? H : N;
          return (0, e.jsx)(S.s, {
            justify: "center",
            align: "center",
            ref: at,
            onClick: V,
            "data-selected": v ? "true" : "false",
            className: b()(R.Item, f && R[`Size-${f}`], $ ? R.disabled : ""),
            children: i,
          });
        }
        function M(U) {
          const { options: H, getOptionLabel: N = (L) => L, ...$ } = U;
          return (0, e.jsx)(M.Root, {
            ...$,
            children: H.map((L) =>
              (0, e.jsx)(M.Item, { value: L, children: N(L) }, L),
            ),
          });
        }
        (M.Item = F), (M.Root = E);
        function A(U) {
          const { radius: H, color: N } = U;
          return (0, e.jsx)(a.az, {
            className: R.IndicatorPosition,
            children: (0, e.jsx)("div", {
              className: R.Indicator,
              "data-accent-color": N,
            }),
          });
        }
        function Z(U, H) {
          const N = U.compareDocumentPosition(H);
          return N & Node.DOCUMENT_POSITION_FOLLOWING
            ? -1
            : N & Node.DOCUMENT_POSITION_PRECEDING
              ? 1
              : 0;
        }
      },
      58952: (T, p, t) => {
        "use strict";
        t.d(p, { DL: () => l, WM: () => $, l6: () => O, uh: () => f });
        var e = t(7850),
          n = t(90626),
          o = t(185),
          a = t(86946),
          C = t(12204),
          I = t(15252),
          b = t(63029),
          R = t(76854),
          Y = t(39790),
          S = t(85367),
          u = t(68031),
          s = t(80549),
          E = t(58017),
          F = t(64415);
        function M(i) {
          const {
              children: c,
              state: r,
              placement: m = "bottom-end",
              popoverWidth: j = "dropdown",
              popoverMaxHeight: z,
              popoverPresentation: B,
              popoverLabel: K,
              ...y
            } = i,
            [w, W] = (0, n.useState)(null),
            [G, q] = (0, n.useState)(null),
            ut = (0, n.useMemo)(
              () =>
                r.rgOptions.findIndex((_) =>
                  r.multiselect
                    ? r.selectedValue.includes(_)
                    : _ === r.selectedValue,
                ),
              [r.selectedValue, r.rgOptions, r.multiselect],
            ),
            P = (0, n.useRef)(null),
            x = {
              ...r,
              ...y,
              focusedValue: w,
              onFocusChange: W,
              refPopover: P,
              popoverLabel: K,
              setOpen: (_) => {
                _ && W(r.multiselect ? r.selectedValue[0] : r.selectedValue),
                  r.setOpen(_);
              },
              focusedIndex: G,
              onFocusedIndexChange: q,
            },
            g = (0, o.T)({
              open: r.bOpen,
              onOpenChange: r.setOpen,
              width: j,
              maxHeight: z,
              placement: m,
              presentation: B,
              selectedIndex: ut,
              setSelectedIndex: (_) => r.onItemSelectionChange(r.rgOptions[_]),
              activeIndex: G,
              setActiveIndex: q,
              gutter: "4",
              interactions: { click: !0, typeahead: !0 },
              role: "select",
              scroll: !0,
            });
          return (0, e.jsx)(v.Provider, {
            value: x,
            children: (0, e.jsx)(o.k.Root, { state: g, children: c }),
          });
        }
        function A(i) {
          const { refPopover: c, popoverLabel: r } = V("<Select.Options>");
          return (0, e.jsx)(o.k.Positioner, {
            ref: c,
            label: r,
            children: i.children,
          });
        }
        function Z(i) {
          const { value: c, children: r, disabled: m, ...j } = i,
            {
              onItemSelectionChange: z,
              multiselect: B,
              selectedValue: K,
              maxSelected: y,
            } = V("<SelectTrigger>"),
            w = typeof c == "string" ? c : void 0;
          let W = !1,
            G = !1;
          B
            ? ((W = Array.isArray(K) && K.includes(c)),
              (G = !!y && Array.isArray(K) && K.length >= y))
            : (W = c === K);
          const q = m || (G && !W);
          return (0, e.jsxs)(o.k.Item, {
            label: w,
            onSelect: () => z(c),
            selected: W,
            disabled: q,
            ...j,
            children: [
              B &&
                (0, e.jsxs)(u.s, {
                  gap: "2",
                  align: "center",
                  children: [
                    (0, e.jsx)(S.S, { checked: W, variant: "dark" }),
                    r,
                  ],
                }),
              !B && r,
            ],
          });
        }
        function U(i) {
          const { children: c, render: r } = i,
            {
              bOpen: m,
              setOpen: j,
              selectedValue: z,
              variant: B,
              size: K,
              radius: y,
              status: w,
              color: W,
              rgOptions: G,
              multiselect: q,
              onClear: ut,
              focusedValue: P,
              onFocusChange: x,
              onSelectionChange: g,
              clearable: _,
              focusedIndex: et,
              onItemSelectionChange: X,
              onFocusedIndexChange: ct,
              refPopover: k,
              popoverLabel: J,
              placeholder: xt,
              maxSelected: ot,
              ...it
            } = V("<SelectTrigger>"),
            tt = {
              tabIndex: 0,
              role: "combobox",
              onClick: () => j(!m),
              children: c,
            },
            ft = q ? Array.isArray(z) && z.length > 0 : !!z,
            st = ft && _,
            ht = st
              ? (0, e.jsx)(b.g, { onClick: ut, cursor: "pointer", hitSlop: !0 })
              : (0, e.jsx)(C.V, {}),
            Et = st
              ? {
                  onSecondaryButton: ut,
                  actionDescriptionMap: {
                    [F.pR.SECONDARY]: E.T.Localize("#Clear"),
                  },
                }
              : void 0,
            lt = (0, s.f)("Select", B),
            dt = (0, e.jsx)(a.j, {
              afterContent: ht,
              variant: lt,
              size: K,
              radius: y,
              status: w,
              color: W,
              hasValue: ft,
              tabIndex: 0,
              cursor: "pointer",
              navProps: Et,
              ...it,
            }),
            nt = (0, R.Q)(r, dt, tt, void 0);
          return (0, e.jsx)(o.k.Anchor, { children: nt });
        }
        function H(i) {
          return (0, e.jsx)(I.EY, {
            weight: "medium",
            truncate: !0,
            contrast: "title",
            children: i.children,
          });
        }
        function N(i) {
          return (0, e.jsx)(I.EY, {
            contrast: "description",
            truncate: !0,
            children: i.children,
          });
        }
        function $(i) {
          return L(i, !1);
        }
        function L(i, c) {
          const { onSelectionChange: r, selectedValue: m, ...j } = i,
            [z, B] = (0, n.useState)(!1),
            K = (0, n.useCallback)(
              (W) => {
                r(W), c || B(!1);
              },
              [r, c],
            ),
            y = (0, n.useCallback)(
              (W) => {
                K(c ? [] : null),
                  W == null || W.stopPropagation(),
                  W == null || W.preventDefault();
              },
              [K, c],
            ),
            w = (0, n.useCallback)(
              (W) => {
                if (!c) K(W);
                else {
                  const G = m,
                    q = G.indexOf(W);
                  if (q === -1) K(G.concat(W));
                  else return K(G.slice(0, q).concat(G.slice(q + 1)));
                }
              },
              [K, m, c],
            );
          return {
            onSelectionChange: K,
            onItemSelectionChange: w,
            onClear: y,
            bOpen: z,
            setOpen: B,
            multiselect: c,
            selectedValue: m,
            ...j,
          };
        }
        const Q = {
          Root: M,
          Option: Z,
          Options: A,
          Trigger: U,
          Value: H,
          Placeholder: N,
        };
        function at(i) {
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
        function D(i) {
          const {
              selectedValue: c,
              onSelectionChange: r,
              options: m,
              placeholder: j,
              getOptionLabel: z = at,
              ...B
            } = i,
            K = $({
              onSelectionChange: r,
              selectedValue: c,
              rgOptions: m,
              placeholder: j,
            }),
            y = c != null,
            w = y ? z(c) : "";
          return (0, e.jsxs)(O.Root, {
            state: K,
            ...B,
            children: [
              (0, e.jsxs)(O.Trigger, {
                children: [
                  y && (0, e.jsx)(O.Value, { children: w }),
                  !y && (0, e.jsx)(O.Placeholder, { children: j }),
                ],
              }),
              (0, e.jsx)(O.Options, {
                children: K.rgOptions.map((W, G) =>
                  (0, e.jsx)(O.Option, { value: W, children: z(W) }, G),
                ),
              }),
            ],
          });
        }
        const O = Object.assign(D, Q);
        function l(i) {
          return L(i, !0);
        }
        const h = Q;
        function d(i) {
          const {
              selectedValue: c,
              onSelectionChange: r,
              options: m,
              placeholder: j,
              getOptionLabel: z = at,
              maxSelected: B,
              ...K
            } = i,
            y = l({
              onSelectionChange: r,
              selectedValue: c,
              rgOptions: m,
              placeholder: j,
              maxSelected: B,
            }),
            w = Array.isArray(c) && c.length > 0;
          let W = "";
          if (w) {
            const G = c.map((q) => z(q));
            "ListFormat" in Intl
              ? (W = new Intl.ListFormat((0, Y.ZO)().strISOCode).format(G))
              : (W = G.join(", "));
          }
          return (0, e.jsxs)(f.Root, {
            state: y,
            ...K,
            children: [
              (0, e.jsxs)(f.Trigger, {
                children: [
                  w && (0, e.jsx)(f.Value, { children: W }),
                  !w && (0, e.jsx)(f.Placeholder, { children: j }),
                ],
              }),
              (0, e.jsx)(f.Options, {
                children: y.rgOptions.map((G, q) =>
                  (0, e.jsx)(f.Option, { value: G, children: z(G) }, q),
                ),
              }),
            ],
          });
        }
        const f = Object.assign(d, h),
          v = (0, n.createContext)(null);
        function V(i) {
          const c = (0, n.useContext)(v);
          return c || console.error(`${i} must be used within a <Select>!`), c;
        }
      },
      7125: (T, p, t) => {
        "use strict";
        t.d(p, { k: () => A });
        var e = t(7850),
          n = t(90626),
          o = t(64238),
          a = t.n(o),
          C = t(3877),
          I = t(98929),
          b = t(60351),
          R = t(86946),
          Y = t(63029),
          S = t(18938),
          u = t(24660),
          s = t(80549),
          E = t(3166),
          F = t(58017),
          M = t(64415);
        function A(U) {
          const { extracted: H, remaining: N } = (0, b.A4)(U),
            {
              value: $,
              onTextChange: L,
              onTextClear: Q,
              clearable: at,
              onChange: D,
              radius: O,
              variant: l,
              size: h,
              beforeContent: d,
              afterContent: f,
              inputRef: v,
              ref: V,
              disabled: i,
              gamepadFocusable: c = !0,
              status: r,
              ...m
            } = N,
            j = (0, E.Qn)(),
            z = (_) => {
              i || (L(_.target.value), D && D(_));
            },
            B = () => {
              L(""), Q && Q();
            },
            K = !!$ && at,
            y = K
              ? (0, e.jsx)(Y.g, { onClick: B, cursor: "pointer", hitSlop: !0 })
              : f,
            w = (0, s.f)("TextInput", l),
            W = {
              ...H,
              variant: w,
              size: h,
              radius: O,
              status: r,
              beforeContent: d,
              afterContent: y,
              ref: V,
              disabled: i,
            },
            G = (0, n.useRef)(null),
            q = (_) => {
              G.current && _.target !== G.current && G.current.focus();
            },
            ut = c && j,
            P = ut ? Z : "input",
            g =
              ut && K && !i
                ? {
                    onSecondaryButton: B,
                    actionDescriptionMap: {
                      [M.pR.SECONDARY]: F.T.Localize("#Clear"),
                    },
                  }
                : {};
          return (0, e.jsx)(R.j, {
            cursor: "text",
            ...W,
            onClick: q,
            children: (0, e.jsx)(P, {
              ref: (0, S.Ue)(v, G),
              type: "text",
              "aria-disabled": i,
              readOnly: i,
              className: a()((0, C.T)(), (0, I.F)()),
              value: $ || "",
              onChange: z,
              ...g,
              ...m,
            }),
          });
        }
        function Z(U) {
          return (0, e.jsx)(u.BA, { noFocusRing: !0, ...U });
        }
      },
      31857: (T, p, t) => {
        "use strict";
        t.d(p, { I: () => I });
        var e = t(7850),
          n = t(69289),
          o = t(8928),
          a = t(16619),
          C = t.n(a);
        function I(u) {
          return (0, e.jsx)("svg", { ...Y(u) });
        }
        const b = [
          ...o.L,
          {
            prop: "size",
            responsive: !0,
            className: (u) => a[`IconSize-${u}`],
          },
          {
            prop: "color",
            className: a.Color,
            cssProperty: (u) => ["--icon-color", R(u)],
          },
          {
            prop: "hitSlop",
            className: a.HitSlop,
            cssProperty: (u) => [
              "--hit-slop-custom",
              typeof u == "string" ? u : "",
            ],
          },
          o.h.find(({ prop: u }) => u === "cursor"),
        ];
        function R(u) {
          return !u || u[0] === "#" ? u : (0, n.w7)(u);
        }
        function Y(u) {
          const { viewBox: s, ...E } = u,
            M = { className: E.size ? void 0 : a.IconSizeDefault, ...E };
          return s && (M.viewBox = S(s)), (0, n.mz)(M, b);
        }
        function S(u) {
          if (u)
            return typeof u == "number"
              ? `0 0 ${u} ${u}`
              : typeof u == "string"
                ? u
                : `0 0 ${u.width} ${u.height}`;
        }
      },
      30241: (T, p, t) => {
        "use strict";
        t.d(p, { i: () => o });
        var e = t(7850),
          n = t(31857);
        function o(a) {
          return (0, e.jsx)(n.I, {
            ...a,
            viewBox: 16,
            children: (0, e.jsx)("path", {
              d: "M13.8182 1.94629L5.77816 9.98184L2.40483 6.61296L0.835938 8.18184L5.77816 13.1285L15.387 3.51518L13.8182 1.94629Z",
              fill: "currentColor",
            }),
          });
        }
      },
      12204: (T, p, t) => {
        "use strict";
        t.d(p, { V: () => a });
        var e = t(7850),
          n = t(31857);
        const o = {
          up: "rotate( 180, 10, 10 )",
          left: "rotate( 90, 10, 10 )",
          right: "rotate( 270, 10, 10 )",
        };
        function a(C) {
          const { direction: I = "down" } = C,
            b = o[I];
          return (0, e.jsx)(n.I, {
            ...C,
            viewBox: 20,
            children: (0, e.jsx)("path", {
              transform: b,
              d: "M5.14541 6.89977L10.0063 12.2027L14.8671 6.89977C15.3557 6.36674 16.145 6.36674 16.6336 6.89977C17.1221 7.4328 17.1221 8.29385 16.6336 8.82688L10.8832 15.1002C10.3946 15.6333 9.60537 15.6333 9.11678 15.1002L3.36644 8.82688C2.87785 8.29385 2.87785 7.4328 3.36644 6.89977C3.85503 6.38041 4.65682 6.36674 5.14541 6.89977Z",
              fill: "currentColor",
            }),
          });
        }
      },
      63029: (T, p, t) => {
        "use strict";
        t.d(p, { g: () => o });
        var e = t(7850),
          n = t(31857);
        function o(a) {
          return (0, e.jsx)(n.I, {
            ...a,
            viewBox: 12,
            children: (0, e.jsx)("path", {
              d: "M10.7068 2.46964L9.53012 1.29297L6.00012 4.81964L2.47012 1.29297L1.29346 2.46964L4.82012 5.99964L1.29346 9.52964L2.47012 10.7063L6.00012 7.17964L9.53012 10.7063L10.7068 9.52964L7.18012 5.99964L10.7068 2.46964Z",
              fill: "currentColor",
            }),
          });
        }
      },
      58017: (T, p, t) => {
        "use strict";
        t.d(p, { T: () => a });
        var e = t(37901);
        const n = {};
        (n.arabic = () => t.e(7608).then(t.t.bind(t, 47608, 19))),
          (n.brazilian = () => t.e(9930).then(t.t.bind(t, 29930, 19))),
          (n.bulgarian = () => t.e(8465).then(t.t.bind(t, 48465, 19))),
          (n.czech = () => t.e(4027).then(t.t.bind(t, 14027, 19))),
          (n.danish = () => t.e(9661).then(t.t.bind(t, 19661, 19))),
          (n.dutch = () => t.e(4654).then(t.t.bind(t, 94654, 19))),
          (n.english = () => t.e(3996).then(t.t.bind(t, 83996, 19))),
          (n.finnish = () => t.e(7759).then(t.t.bind(t, 47759, 19))),
          (n.french = () => t.e(7140).then(t.t.bind(t, 37140, 19))),
          (n.german = () => t.e(1194).then(t.t.bind(t, 81194, 19))),
          (n.greek = () => t.e(1744).then(t.t.bind(t, 71744, 19))),
          (n.hungarian = () => t.e(9845).then(t.t.bind(t, 59845, 19))),
          (n.indonesian = () => t.e(308).then(t.t.bind(t, 30308, 19))),
          (n.italian = () => t.e(1380).then(t.t.bind(t, 51380, 19))),
          (n.japanese = () => t.e(787).then(t.t.bind(t, 787, 19))),
          (n.koreana = () => t.e(6691).then(t.t.bind(t, 36691, 19))),
          (n.latam = () => t.e(1579).then(t.t.bind(t, 21579, 19))),
          (n.malay = () => t.e(1543).then(t.t.bind(t, 83924, 19))),
          (n.norwegian = () => t.e(7284).then(t.t.bind(t, 97284, 19))),
          (n.polish = () => t.e(4373).then(t.t.bind(t, 44373, 19))),
          (n.portuguese = () => t.e(2561).then(t.t.bind(t, 32561, 19))),
          (n.romanian = () => t.e(7423).then(t.t.bind(t, 17423, 19))),
          (n.russian = () => t.e(2757).then(t.t.bind(t, 52757, 19))),
          (n.sc_schinese = () => t.e(175).then(t.t.bind(t, 30175, 19))),
          (n.schinese = () => t.e(6128).then(t.t.bind(t, 6128, 19))),
          (n.spanish = () => t.e(1052).then(t.t.bind(t, 41052, 19))),
          (n.swedish = () => t.e(5773).then(t.t.bind(t, 95773, 19))),
          (n.tchinese = () => t.e(6563).then(t.t.bind(t, 66563, 19))),
          (n.thai = () => t.e(5178).then(t.t.bind(t, 75178, 19))),
          (n.turkish = () => t.e(4028).then(t.t.bind(t, 14028, 19))),
          (n.ukrainian = () => t.e(778).then(t.t.bind(t, 90778, 19))),
          (n.vietnamese = () => t.e(1291).then(t.t.bind(t, 1291, 19)));
        async function o(C) {
          if (n[C]) return n[C]();
        }
        const a = (0, e.l)(o);
      },
      76854: (T, p, t) => {
        "use strict";
        t.d(p, { Q: () => o });
        var e = t(90626);
        function n(a, C, I) {
          return typeof a == "function" ? a(C, I) : e.cloneElement(a, C);
        }
        function o(a, C, I, b) {
          return n(a || C, I, b);
        }
      },
      34771: (T, p, t) => {
        "use strict";
        t.d(p, { D: () => E });
        var e = t(7850),
          n = t(39049),
          o = t(8928),
          a = t(15252),
          C = t(69289),
          I = t(90626);
        function b(A) {
          const { depth: Z } = useContext(R);
          return jsx(R.Provider, {
            value: { depth: Z + 1 },
            children: jsx(Box, { ...A }),
          });
        }
        const R = I.createContext({ depth: 0 });
        function Y() {
          return (0, I.useContext)(R).depth;
        }
        var S = t(3877),
          u = t(64238),
          s = t.n(u);
        function E(A) {
          const { level: Z = "auto", className: U, color: H } = A,
            N = Y(),
            $ = M(Z, N);
          return (0, e.jsx)($, {
            ...(0, C.mz)({ ...A, className: s()((0, S.T)(), n.Heading, U) }, F),
          });
        }
        const F = [
          ...a.U6,
          ...o.L,
          {
            prop: "size",
            responsive: !0,
            className: (A) => n[`HeadingSize-${A}`],
          },
        ];
        function M(A, Z) {
          if (A === "auto" && Z === 0) return "h1";
          const U = A === "auto" ? Z.toString() : A;
          return /^[1-6]$/.test(U)
            ? "h" + U
            : A === "auto"
              ? (console.error(
                  '<Section> nesting has exceeded "h6" for headings.',
                ),
                "h6")
              : (console.error(
                  `Attempt to render invalid heading level, "${U}".`,
                ),
                "h1");
        }
      },
      51596: (T, p, t) => {
        "use strict";
        t.d(p, { P: () => e });
        function e(n, o) {
          return o === void 0 ? n[""] : n[o];
        }
      },
      52574: (T, p, t) => {
        "use strict";
        t.d(p, { L: () => o });
        var e = t(7850),
          n = t(51596);
        const o = {
          b: { Constructor: a },
          i: { Constructor: C },
          u: { Constructor: I },
          c: { Constructor: b },
          strike: { Constructor: R },
          color: { Constructor: Y },
        };
        function a(S) {
          return (0, e.jsx)("b", { children: S.children });
        }
        function C(S) {
          return (0, e.jsx)("i", { children: S.children });
        }
        function I(S) {
          return (0, e.jsx)("u", { children: S.children });
        }
        function b(S) {
          return (0, e.jsx)("code", { children: S.children });
        }
        function R(S) {
          return (0, e.jsx)("s", { children: S.children });
        }
        function Y(S) {
          const u = (0, n.P)(S.args),
            s = {};
          return (
            u &&
              (u.match(/^#[a-fA-F0-9]+$/) || u.match(/rgba?\([0-9, ]+\)$/)) &&
              (s.color = u),
            (0, e.jsx)("span", { style: s, children: S.children })
          );
        }
      },
      91937: (T, p, t) => {
        "use strict";
        t.d(p, { F: () => a });
        var e = t(7850),
          n = t(17763),
          o = t.n(n);
        const a = {
          h1: { Constructor: C, skipFollowingNewline: !0 },
          h2: { Constructor: I, skipFollowingNewline: !0 },
          h3: { Constructor: b, skipFollowingNewline: !0 },
          code: { Constructor: R, skipFollowingNewline: !0 },
          quote: {
            Constructor: Y,
            skipFollowingNewline: !0,
            skipInternalNewline: !0,
          },
          hr: { Constructor: u, skipFollowingNewline: !0 },
        };
        function C(s) {
          return (0, e.jsx)("h1", { children: s.children });
        }
        function I(s) {
          return (0, e.jsx)("h2", { children: s.children });
        }
        function b(s) {
          return (0, e.jsx)("h3", { children: s.children });
        }
        function R(s) {
          return (0, e.jsx)("pre", {
            className: o().CodeBlock,
            children: (0, e.jsx)("code", { children: s.children }),
          });
        }
        function Y(s) {
          return (0, e.jsx)("blockquote", { children: s.children });
        }
        function S(s) {
          return jsxs(Fragment, {
            children: [
              jsx("div", { className: styles.ClearFloat }),
              s.children,
            ],
          });
        }
        function u(s) {
          return (0, e.jsxs)(e.Fragment, {
            children: [(0, e.jsx)("hr", {}), s.children],
          });
        }
      },
      59443: (T, p, t) => {
        "use strict";
        t.d(p, { _r: () => S, e9: () => u, rh: () => Y });
        var e = t(7850),
          n = t(90626),
          o = t(43434),
          a = t(86336),
          C = t(51596),
          I = t(39414);
        function b(s) {
          const E = n.Children.toArray(s)[0];
          return typeof E == "string" ? E : void 0;
        }
        function R(s, E) {
          if (!s) return;
          const F = s.startsWith("steamcommunity.com/") ? "https://" + s : s;
          if (F.match(/^https?:\/\//))
            return {
              strURL: F,
              bFromBody: !1,
              bHasCustomText: !(E != null && E.match(/^https?:\/\//i)),
            };
        }
        function Y(s) {
          var E;
          const F =
            (E = (0, C.P)(s.args)) != null ? E : (0, C.P)(s.args, "href");
          if (F) return R(F, b(s.children));
          if (typeof s.children == "string") {
            const M = s.children.trim(),
              A = I.O.exec(M);
            if ((A == null ? void 0 : A[0]) == M)
              return { strURL: M, bFromBody: !0, bHasCustomText: !1 };
          }
        }
        function S(s) {
          const E = Y(s);
          if (!E) return s.children;
          if (E.bFromBody) return (0, e.jsx)(u, { strURL: E.strURL });
          const F = (0, o.p)(E.strURL) ? (0, o.E)(E.strURL) : E.strURL;
          return (0, e.jsx)(a.Y, {
            target: "_blank",
            href: F,
            underline: "auto",
            contrast: "title",
            children: s.children,
          });
        }
        function u(s) {
          const E = s.strURL.match(/^[a-z][a-z0-9+.-]*:/i)
              ? s.strURL
              : "http://" + s.strURL,
            F = (0, o.p)(E) ? (0, o.E)(E) : E;
          return (0, e.jsx)(a.Y, {
            target: "_blank",
            href: F,
            underline: "auto",
            contrast: "title",
            children: s.strURL,
          });
        }
      },
      49144: (T, p, t) => {
        "use strict";
        t.d(p, { I: () => n });
        var e = t(7850);
        const n = {
          list: {
            Constructor: o,
            skipInternalNewline: !0,
            skipFollowingNewline: !0,
          },
          olist: {
            Constructor: a,
            skipInternalNewline: !0,
            skipFollowingNewline: !0,
          },
          "*": { Constructor: C, autocloses: !0 },
        };
        function o(I) {
          return (0, e.jsx)("ul", { children: I.children });
        }
        function a(I) {
          return (0, e.jsx)("ol", { children: I.children });
        }
        function C(I) {
          return (0, e.jsx)("li", { children: I.children });
        }
      },
      39790: (T, p, t) => {
        "use strict";
        t.d(p, { ZO: () => n });
        var e = t(37901);
        function n() {
          return (0, e.A)().languages[0];
        }
      },
      21895: (T) => {
        T.exports = {
          Root: "_1kIuUssJvopWbHik1IKMG6",
          "Variant-light": "zcrlDqGBY0Lrl7faLFoJI",
          "Variant-dark": "_3b6kFRuG8ILziz88w8GESp",
          "Variant-outline": "wlcXkTKJWe-SE0fCwIRwQ",
          Disabled: "kLcGKsNxkoEqxgok6YzML",
          Checkbox: "_3babFLLB0YYBf8znrlE7Dt",
          Icon: "cngAYeP7ZvFo2pT_v3-xO",
        };
      },
      82277: (T) => {
        T.exports = {
          FilterBorder: "_3xFYpKNlOZ6xjQ529ZgRbr",
          Top: "_310cGk80jWCZr6LxeueX_5",
          Bottom: "nLYMJhpffeKLN_8VkTcD_",
        };
      },
      38878: (T) => {
        T.exports = {
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
      48093: (T) => {
        T.exports = {
          ListBox: "_1PUg8GjnBeN7rBK-dcyQFl",
          ListBoxOption: "_20oF9tLSfptitLraDOp6X6",
        };
      },
      24089: (T) => {
        T.exports = { TextEntry: "_1vE-LsK6l_D_5yjbywZV1p" };
      },
      53011: (T) => {
        T.exports = {
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
      16619: (T) => {
        T.exports = {
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
      39049: (T) => {
        T.exports = {
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
      17763: (T) => {
        T.exports = {
          CodeBlock: "OkZ2olcxw9WPWea9VGVr6",
          ClearFloat: "RRZZP47ujIKbmOpZ61w_T",
        };
      },
    },
  ]);
})();

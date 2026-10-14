/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [53080],
    {
      53080: (M, q, t) => {
        "use strict";
        t.d(q, { l6: () => P, WM: () => Y });
        var s = t(7850),
          x = t(90626),
          S = t(73788),
          H = t(60351),
          V = t(76854),
          E = t(48093);
        function _(n) {
          const { render: o, ...e } = n;
          return (0, V.Q)(
            o,
            (0, s.jsx)(H.az, {
              radius: "sm",
              background: "dull-8",
              className: E.ListBox,
            }),
            { role: "listbox", ...e },
          );
        }
        function tt(n) {
          const {
              selected: o,
              focused: e,
              label: f = null,
              render: a,
              disabled: l,
              ...d
            } = n,
            r = o ? "true" : "false",
            h = e ? "true" : void 0;
          return (0, V.Q)(
            a,
            (0, s.jsx)(H.az, {
              focusable: !0,
              "data-selected": r,
              "data-focused": h,
              "aria-disabled": l,
              className: E.ListBoxOption,
              paddingY: "2",
              paddingX: "3",
            }),
            { role: "option", ...d },
            { selected: o, focused: e, disabled: l },
          );
        }
        const G = Object.assign(_, { Option: tt });
        var nt = t(84909),
          N = t(28020),
          et = t(24660),
          ot = t(38566),
          st = t(3166);
        const I = (0, x.createContext)(null);
        function lt(n) {
          const { children: o, state: e } = n;
          return (0, s.jsx)(I.Provider, { value: e, children: o });
        }
        function it(n) {
          const { children: o } = n,
            e = x.Children.only(o),
            f = (0, x.useContext)(I),
            a = (0, S.SV)([f?.floating.refs.setReference, e?.props.ref]);
          if (!e) return null;
          if (!f)
            return (
              console.error(
                "<PopoverListAnchor> must be a child of <PopoverListRoot>.",
              ),
              null
            );
          const { ref: l, ...d } = e.props;
          return (0, x.cloneElement)(e, { ref: a, ...f.getReferenceProps(d) });
        }
        function ct(n) {
          const { children: o, render: e, ref: f, label: a } = n,
            l = (0, x.useContext)(I),
            d = (0, S.SV)([f, l?.floating.refs.setFloating]);
          return l
            ? l.open
              ? (0, s.jsx)(dt, {
                  state: l,
                  children: (0, s.jsx)(N.HF, {
                    presentation: l.presentation,
                    sizing: l.sizing,
                    floatingRef: d,
                    floatingProps: l.getFloatingProps(),
                    floatingStyles: l.floating.floatingStyles,
                    referenceElement: l.floating.elements.domReference,
                    label: a,
                    children: (0, s.jsx)(G, {
                      render: e,
                      children: (0, s.jsx)(S.ph, {
                        elementsRef: l.elementsRef,
                        labelsRef: l.labelsRef,
                        children: o,
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
        function dt(n) {
          return (0, st.Qn)()
            ? (0, s.jsx)(at, { ...n })
            : (0, s.jsx)(rt, { ...n });
        }
        function at(n) {
          const { state: o, children: e } = n,
            f = () => o.floating.context.onOpenChange(!1),
            a = x.useRef(void 0);
          return (
            (0, et.O7)(a, !0, !0),
            (0, s.jsx)(ot.D6, {
              navID: "PopoverList",
              onCancelButton: f,
              modal: !0,
              navTreeRef: a,
              children: e,
            })
          );
        }
        function rt(n) {
          const { state: o, children: e } = n;
          return (0, s.jsx)(S.s3, {
            context: o.floating.context,
            initialFocus: o.initialFocus,
            returnFocus: !1,
            children: e,
          });
        }
        function ft(n) {
          const {
              children: o,
              label: e,
              selected: f,
              onSelect: a,
              ref: l,
              disabled: d,
              ...r
            } = n,
            h = (0, x.useContext)(I),
            { ref: v, index: c } = (0, S.rm)({ label: e }),
            g = (0, S.SV)([l, v]);
          if (!h)
            return (
              console.error(
                "<PopoverListItem> must be a child of <PopoverListRoot>.",
              ),
              null
            );
          const u = c === h.activeIndex,
            L = c === h.selectedIndex || !!f;
          return (0, s.jsx)(G.Option, {
            ref: g,
            selected: L,
            focused: u,
            role: "option",
            tabIndex: 0,
            ...h.getItemProps({
              onClick: d ? void 0 : a,
              onKeyDown: (m) => {
                !d &&
                  (m.key === "Enter" ||
                    (m.key === " " && !h.typingRef.current)) &&
                  (a(m), m.preventDefault(), m.stopPropagation());
              },
              active: u,
              selected: L,
              disabled: d,
              ...r,
            }),
            children: o,
          });
        }
        function ht(n) {
          const {
            open: o,
            activeIndex: e,
            setActiveIndex: f,
            selectedIndex: a,
            setSelectedIndex: l,
            interactions: d = {},
            role: r,
            width: h,
            maxHeight: v,
            gutter: c,
            scroll: g,
          } = n;
          let u = o;
          const L = (0, N.Pr)(n.presentation),
            m = (0, nt.Pr)(n, u, L),
            p = (0, S.kp)(m.context, { enabled: !!d.click }),
            R = (0, S.iQ)(m.context, { enabled: !!d.focus }),
            C = (0, S.s9)(m.context),
            A = (0, x.useRef)([]),
            $ = (0, S.C1)(m.context, {
              listRef: A,
              activeIndex: e,
              selectedIndex: a,
              onNavigate: f,
              virtual: !!d.virtualItemFocus,
              loop: !0,
              focusItemOnOpen: !1,
            }),
            B = (0, x.useRef)([]),
            z = (0, x.useRef)(!1),
            J = (0, S.lY)(m.context, {
              enabled: !!d.typeahead,
              listRef: B,
              activeIndex: e,
              selectedIndex: a,
              onMatch: u ? f : l,
              onTypingChange: (y) => (z.current = y),
            }),
            b = (0, S.It)(m.context, { role: r }),
            {
              getFloatingProps: k,
              getReferenceProps: D,
              getItemProps: T,
            } = (0, S.bv)([b, p, R, C, $, J]);
          return {
            floating: m,
            getFloatingProps: k,
            getReferenceProps: D,
            getItemProps: T,
            open: u,
            activeIndex: e,
            selectedIndex: a,
            setSelectedIndex: l,
            elementsRef: A,
            labelsRef: B,
            typingRef: z,
            initialFocus: d.virtualItemFocus ? -1 : void 0,
            presentation: L,
            sizing: { width: h, maxHeight: v, gutter: c, scroll: g },
          };
        }
        const O = { Root: lt, Anchor: it, Positioner: ct, Item: ft };
        var gt = t(86946),
          ut = t(12204),
          Q = t(15252),
          xt = t(31857);
        function vt(n) {
          return (0, s.jsx)(xt.I, {
            ...n,
            viewBox: 12,
            children: (0, s.jsx)("path", {
              d: "M10.7068 2.46964L9.53012 1.29297L6.00012 4.81964L2.47012 1.29297L1.29346 2.46964L4.82012 5.99964L1.29346 9.52964L2.47012 10.7063L6.00012 7.17964L9.53012 10.7063L10.7068 9.52964L7.18012 5.99964L10.7068 2.46964Z",
              fill: "currentColor",
            }),
          });
        }
        var U = t(37901);
        function mt() {
          return (0, U.A)().languages[0];
        }
        var St = t(94381),
          Ct = t(68031),
          Lt = t(80549);
        const i = {};
        (i.arabic = () => t.e(47608).then(t.t.bind(t, 47608, 19))),
          (i.brazilian = () => t.e(29930).then(t.t.bind(t, 29930, 19))),
          (i.bulgarian = () => t.e(48465).then(t.t.bind(t, 48465, 19))),
          (i.czech = () => t.e(14027).then(t.t.bind(t, 14027, 19))),
          (i.danish = () => t.e(19661).then(t.t.bind(t, 19661, 19))),
          (i.dutch = () => t.e(94654).then(t.t.bind(t, 94654, 19))),
          (i.english = () => t.e(83996).then(t.t.bind(t, 83996, 19))),
          (i.finnish = () => t.e(47759).then(t.t.bind(t, 47759, 19))),
          (i.french = () => t.e(37140).then(t.t.bind(t, 37140, 19))),
          (i.german = () => t.e(81194).then(t.t.bind(t, 81194, 19))),
          (i.greek = () => t.e(71744).then(t.t.bind(t, 71744, 19))),
          (i.hungarian = () => t.e(59845).then(t.t.bind(t, 59845, 19))),
          (i.indonesian = () => t.e(30308).then(t.t.bind(t, 30308, 19))),
          (i.italian = () => t.e(51380).then(t.t.bind(t, 51380, 19))),
          (i.japanese = () => t.e(787).then(t.t.bind(t, 787, 19))),
          (i.koreana = () => t.e(36691).then(t.t.bind(t, 36691, 19))),
          (i.latam = () => t.e(21579).then(t.t.bind(t, 21579, 19))),
          (i.malay = () => t.e(83924).then(t.t.bind(t, 83924, 19))),
          (i.norwegian = () => t.e(97284).then(t.t.bind(t, 97284, 19))),
          (i.polish = () => t.e(44373).then(t.t.bind(t, 44373, 19))),
          (i.portuguese = () => t.e(32561).then(t.t.bind(t, 32561, 19))),
          (i.romanian = () => t.e(17423).then(t.t.bind(t, 17423, 19))),
          (i.russian = () => t.e(52757).then(t.t.bind(t, 52757, 19))),
          (i.sc_schinese = () => t.e(30175).then(t.t.bind(t, 30175, 19))),
          (i.schinese = () => t.e(6128).then(t.t.bind(t, 6128, 19))),
          (i.spanish = () => t.e(41052).then(t.t.bind(t, 41052, 19))),
          (i.swedish = () => t.e(95773).then(t.t.bind(t, 95773, 19))),
          (i.tchinese = () => t.e(66563).then(t.t.bind(t, 66563, 19))),
          (i.thai = () => t.e(75178).then(t.t.bind(t, 75178, 19))),
          (i.turkish = () => t.e(14028).then(t.t.bind(t, 14028, 19))),
          (i.ukrainian = () => t.e(90778).then(t.t.bind(t, 90778, 19))),
          (i.vietnamese = () => t.e(1291).then(t.t.bind(t, 1291, 19)));
        async function Pt(n) {
          if (i[n]) return i[n]();
        }
        const jt = (0, U.l)(Pt);
        var It = t(64415);
        function Ot(n) {
          const {
              children: o,
              state: e,
              placement: f = "bottom-end",
              popoverWidth: a = "dropdown",
              popoverMaxHeight: l,
              popoverPresentation: d,
              popoverLabel: r,
              ...h
            } = n,
            [v, c] = (0, x.useState)(null),
            [g, u] = (0, x.useState)(null),
            L = (0, x.useMemo)(
              () =>
                e.rgOptions.findIndex((C) =>
                  e.multiselect
                    ? e.selectedValue.includes(C)
                    : C === e.selectedValue,
                ),
              [e.selectedValue, e.rgOptions, e.multiselect],
            ),
            m = (0, x.useRef)(null),
            p = {
              ...e,
              ...h,
              focusedValue: v,
              onFocusChange: c,
              refPopover: m,
              popoverLabel: r,
              setOpen: (C) => {
                C && c(e.multiselect ? e.selectedValue[0] : e.selectedValue),
                  e.setOpen(C);
              },
              focusedIndex: g,
              onFocusedIndexChange: u,
            },
            R = ht({
              open: e.bOpen,
              onOpenChange: e.setOpen,
              width: a,
              maxHeight: l,
              placement: f,
              presentation: d,
              selectedIndex: L,
              setSelectedIndex: (C) => e.onItemSelectionChange(e.rgOptions[C]),
              activeIndex: g,
              setActiveIndex: u,
              gutter: "4",
              interactions: { click: !0, typeahead: !0 },
              role: "select",
              scroll: !0,
            });
          return (0, s.jsx)(Z.Provider, {
            value: p,
            children: (0, s.jsx)(O.Root, { state: R, children: o }),
          });
        }
        function pt(n) {
          const { refPopover: o, popoverLabel: e } = F("<Select.Options>");
          return (0, s.jsx)(O.Positioner, {
            ref: o,
            label: e,
            children: n.children,
          });
        }
        function Rt(n) {
          const { value: o, children: e, disabled: f, ...a } = n,
            {
              onItemSelectionChange: l,
              multiselect: d,
              selectedValue: r,
              maxSelected: h,
            } = F("<SelectTrigger>"),
            v = typeof o == "string" ? o : void 0;
          let c = !1,
            g = !1;
          d
            ? ((c = Array.isArray(r) && r.includes(o)),
              (g = !!h && Array.isArray(r) && r.length >= h))
            : (c = o === r);
          const u = f || (g && !c);
          return (0, s.jsxs)(O.Item, {
            label: v,
            onSelect: () => l(o),
            selected: c,
            disabled: u,
            ...a,
            children: [
              d &&
                (0, s.jsxs)(Ct.s, {
                  gap: "2",
                  align: "center",
                  children: [
                    (0, s.jsx)(St.S, { checked: c, variant: "dark" }),
                    e,
                  ],
                }),
              !d && e,
            ],
          });
        }
        function yt(n) {
          const { children: o, render: e } = n,
            {
              bOpen: f,
              setOpen: a,
              selectedValue: l,
              variant: d,
              size: r,
              radius: h,
              status: v,
              color: c,
              rgOptions: g,
              multiselect: u,
              onClear: L,
              focusedValue: m,
              onFocusChange: p,
              onSelectionChange: R,
              clearable: C,
              focusedIndex: A,
              onItemSelectionChange: $,
              onFocusedIndexChange: B,
              refPopover: z,
              popoverLabel: J,
              placeholder: b,
              maxSelected: k,
              ...D
            } = F("<SelectTrigger>"),
            T = {
              tabIndex: 0,
              role: "combobox",
              onClick: () => a(!f),
              children: o,
            },
            y = u ? Array.isArray(l) && l.length > 0 : !!l,
            w = y && C,
            Tt = w
              ? (0, s.jsx)(vt, { onClick: L, cursor: "pointer", hitSlop: !0 })
              : (0, s.jsx)(ut.V, {}),
            Mt = w
              ? {
                  onSecondaryButton: L,
                  actionDescriptionMap: {
                    [It.pR.SECONDARY]: jt.Localize("#Clear"),
                  },
                }
              : void 0,
            Ht = (0, Lt.f)("Select", d),
            Et = (0, s.jsx)(gt.j, {
              afterContent: Tt,
              variant: Ht,
              size: r,
              radius: h,
              status: v,
              color: c,
              hasValue: y,
              tabIndex: 0,
              cursor: "pointer",
              navProps: Mt,
              ...D,
            }),
            Gt = (0, V.Q)(e, Et, T, void 0);
          return (0, s.jsx)(O.Anchor, { children: Gt });
        }
        function Vt(n) {
          return (0, s.jsx)(Q.EY, {
            weight: "medium",
            truncate: !0,
            contrast: "title",
            children: n.children,
          });
        }
        function Ft(n) {
          return (0, s.jsx)(Q.EY, {
            contrast: "description",
            truncate: !0,
            children: n.children,
          });
        }
        function Y(n) {
          return K(n, !1);
        }
        function K(n, o) {
          const { onSelectionChange: e, selectedValue: f, ...a } = n,
            [l, d] = (0, x.useState)(!1),
            r = (0, x.useCallback)(
              (c) => {
                e(c), o || d(!1);
              },
              [e, o],
            ),
            h = (0, x.useCallback)(
              (c) => {
                r(o ? [] : null), c?.stopPropagation(), c?.preventDefault();
              },
              [r, o],
            ),
            v = (0, x.useCallback)(
              (c) => {
                if (!o) r(c);
                else {
                  const g = f,
                    u = g.indexOf(c);
                  if (u === -1) r(g.concat(c));
                  else return r(g.slice(0, u).concat(g.slice(u + 1)));
                }
              },
              [r, f, o],
            );
          return {
            onSelectionChange: r,
            onItemSelectionChange: v,
            onClear: h,
            bOpen: l,
            setOpen: d,
            multiselect: o,
            selectedValue: f,
            ...a,
          };
        }
        const W = {
          Root: Ot,
          Option: Rt,
          Options: pt,
          Trigger: yt,
          Value: Vt,
          Placeholder: Ft,
        };
        function X(n) {
          return typeof n == "string"
            ? n
            : typeof n == "number"
              ? n.toString()
              : (console.error(
                  "Could not use default option labeler on Select option value. Custom labeler requried",
                  n,
                ),
                "");
        }
        function At(n) {
          const {
              selectedValue: o,
              onSelectionChange: e,
              options: f,
              placeholder: a,
              getOptionLabel: l = X,
              ...d
            } = n,
            r = Y({
              onSelectionChange: e,
              selectedValue: o,
              rgOptions: f,
              placeholder: a,
            }),
            h = o != null,
            v = h ? l(o) : "";
          return (0, s.jsxs)(P.Root, {
            state: r,
            ...d,
            children: [
              (0, s.jsxs)(P.Trigger, {
                children: [
                  h && (0, s.jsx)(P.Value, { children: v }),
                  !h && (0, s.jsx)(P.Placeholder, { children: a }),
                ],
              }),
              (0, s.jsx)(P.Options, {
                children: r.rgOptions.map((c, g) =>
                  (0, s.jsx)(P.Option, { value: c, children: l(c) }, g),
                ),
              }),
            ],
          });
        }
        const P = Object.assign(At, W);
        function Bt(n) {
          return K(n, !0);
        }
        const zt = W;
        function Dt(n) {
          const {
              selectedValue: o,
              onSelectionChange: e,
              options: f,
              placeholder: a,
              getOptionLabel: l = X,
              maxSelected: d,
              ...r
            } = n,
            h = Bt({
              onSelectionChange: e,
              selectedValue: o,
              rgOptions: f,
              placeholder: a,
              maxSelected: d,
            }),
            v = Array.isArray(o) && o.length > 0;
          let c = "";
          if (v) {
            const g = o.map((u) => l(u));
            "ListFormat" in Intl
              ? (c = new Intl.ListFormat(mt().strISOCode).format(g))
              : (c = g.join(", "));
          }
          return (0, s.jsxs)(j.Root, {
            state: h,
            ...r,
            children: [
              (0, s.jsxs)(j.Trigger, {
                children: [
                  v && (0, s.jsx)(j.Value, { children: c }),
                  !v && (0, s.jsx)(j.Placeholder, { children: a }),
                ],
              }),
              (0, s.jsx)(j.Options, {
                children: h.rgOptions.map((g, u) =>
                  (0, s.jsx)(j.Option, { value: g, children: l(g) }, u),
                ),
              }),
            ],
          });
        }
        const j = Object.assign(Dt, zt),
          Z = (0, x.createContext)(null);
        function F(n) {
          const o = (0, x.useContext)(Z);
          return o || console.error(`${n} must be used within a <Select>!`), o;
        }
      },
      48093: (M) => {
        M.exports = {
          ListBox: "_1PUg8GjnBeN7rBK-dcyQFl",
          ListBoxOption: "_20oF9tLSfptitLraDOp6X6",
        };
      },
    },
  ]);
})();

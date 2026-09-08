/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [71232],
  {
    21895: (e) => {
      e.exports = {
        Root: "_1kIuUssJvopWbHik1IKMG6",
        "Variant-light": "zcrlDqGBY0Lrl7faLFoJI",
        "Variant-dark": "_3b6kFRuG8ILziz88w8GESp",
        "Variant-outline": "wlcXkTKJWe-SE0fCwIRwQ",
        Disabled: "kLcGKsNxkoEqxgok6YzML",
        Checkbox: "_3babFLLB0YYBf8znrlE7Dt",
        Icon: "cngAYeP7ZvFo2pT_v3-xO",
      };
    },
    48093: (e) => {
      e.exports = {
        ListBox: "_1PUg8GjnBeN7rBK-dcyQFl",
        ListBoxOption: "_20oF9tLSfptitLraDOp6X6",
      };
    },
    16619: (e) => {
      e.exports = {
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
    57757: (e, t, n) => {
      "use strict";
      n.d(t, { S: () => u });
      var o = n(7850),
        r = n(83392),
        l = n(40704);
      function s(e) {
        return (0, o.jsx)(l.I, {
          ...e,
          viewBoxSize: 16,
          children: (0, o.jsx)("path", {
            d: "M13.8182 1.94629L5.77816 9.98184L2.40483 6.61296L0.835938 8.18184L5.77816 13.1285L15.387 3.51518L13.8182 1.94629Z",
            fill: "currentColor",
          }),
        });
      }
      var c = n(21895),
        i = n(64238),
        a = n.n(i),
        d = n(66922);
      function u(e) {
        const {
            checked: t,
            onChange: n,
            disabled: l,
            children: i,
            ref: u,
            variant: h,
            color: x,
            align: g = "center",
            ...v
          } = e,
          m = "indeterminate" === t,
          I = m ? f : s,
          b = () => {
            l || (n && n(!!m || !t));
          },
          C = (0, d.f)("Checkbox", h);
        return (0, o.jsxs)(r.s, {
          align: g,
          ref: u,
          role: "checkbox",
          "aria-checked": m ? "mixed" : t,
          "data-state": p(t),
          className: a()(c.Root, c[`Variant-${C}`], l && c.Disabled),
          onClick: b,
          tabIndex: 0,
          onKeyDown: (e) => {
            l ||
              (" " === e.key && (b(), e.preventDefault(), e.stopPropagation()));
          },
          cursor: "default",
          "aria-disabled": l,
          "data-accent-color": x,
          ...v,
          children: [
            (0, o.jsx)("div", {
              className: c.Checkbox,
              children: t && (0, o.jsx)(I, { className: c.Icon }),
            }),
            i,
          ],
        });
      }
      function p(e) {
        return "indeterminate" === e ? e : e ? "checked" : "unchecked";
      }
      function f(e) {
        return (0, o.jsx)("svg", {
          viewBox: "0 0 16 16",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: (0, o.jsx)("path", {
            d: "M14.6663 7.11133H1.33301V9.33355H14.6663V7.11133Z",
            fill: "currentColor",
          }),
        });
      }
    },
    71232: (e, t, n) => {
      "use strict";
      n.d(t, { l6: () => B, WM: () => F });
      var o = n(7850),
        r = n(90626),
        l = n(73788),
        s = n(8083),
        c = n(90534),
        i = n(80797),
        a = n(48093);
      const d = Object.assign(
        function (e) {
          const { render: t, ...n } = e;
          return (0, i.Q)(
            t,
            (0, o.jsx)(c.az, {
              radius: "sm",
              background: "dull-8",
              className: a.ListBox,
            }),
            { role: "listbox", ...n },
          );
        },
        {
          Option: function (e) {
            const {
                selected: t,
                focused: n,
                label: r = null,
                render: l,
                disabled: s,
                ...d
              } = e,
              u = t ? "true" : "false",
              p = n ? "true" : void 0;
            return (0, i.Q)(
              l,
              (0, o.jsx)(c.az, {
                focusable: !0,
                "data-selected": u,
                "data-focused": p,
                "aria-disabled": s,
                className: a.ListBoxOption,
                paddingY: "2",
                paddingX: "3",
              }),
              { role: "option", ...d },
              { selected: t, focused: n, disabled: s },
            );
          },
        },
      );
      var u = n(49560),
        p = n(45699),
        f = n(85585),
        h = n(78327);
      const x = (0, r.createContext)(null);
      function g(e) {
        return (0, h.Qn)() ? (0, o.jsx)(v, { ...e }) : (0, o.jsx)(m, { ...e });
      }
      function v(e) {
        const { state: t, children: n } = e,
          l = r.useRef(void 0);
        return (
          (0, p.O7)(l, !!l.current, !1),
          (0, o.jsx)(f.D6, {
            navID: "PopoverList",
            onCancelButton: () => t.floating.context.onOpenChange(!1),
            modal: !0,
            navTreeRef: l,
            children: n,
          })
        );
      }
      function m(e) {
        const { state: t, children: n } = e;
        return (0, o.jsx)(l.s3, {
          context: t.floating.context,
          initialFocus: t.initialFocus,
          returnFocus: !1,
          children: n,
        });
      }
      const I = function (e) {
          const { children: t, state: n } = e;
          return (0, o.jsx)(x.Provider, { value: n, children: t });
        },
        b = function (e) {
          const { children: t } = e,
            n = r.Children.only(t),
            o = (0, r.useContext)(x),
            s = (0, l.SV)([o?.floating.refs.setReference, n?.props.ref]);
          if (!n) return null;
          if (!o)
            return (
              console.error(
                "<PopoverListAnchor> must be a child of <PopoverListRoot>.",
              ),
              null
            );
          const { ref: c, ...i } = n.props;
          return (0, r.cloneElement)(n, { ref: s, ...o.getReferenceProps(i) });
        },
        C = function (e) {
          const { children: t, render: n, ref: s } = e,
            c = (0, r.useContext)(x),
            i = (0, l.SV)([
              s,
              c?.floating.refs.setFloating,
              (e) => e?.showPopover?.(),
            ]);
          return c
            ? c.open
              ? (0, o.jsx)(g, {
                  state: c,
                  children: (0, o.jsx)(d, {
                    ref: i,
                    style: c.floating.floatingStyles,
                    ...c.getFloatingProps({ popover: "manual" }),
                    render: n,
                    children: (0, o.jsx)(l.ph, {
                      elementsRef: c.elementsRef,
                      labelsRef: c.labelsRef,
                      children: t,
                    }),
                  }),
                })
              : null
            : (console.error(
                "<PopoverListPositioner> must be a child of <PopoverListRoot>.",
              ),
              null);
        },
        S = function (e) {
          const {
              children: t,
              label: n,
              selected: s,
              onSelect: c,
              ref: i,
              disabled: a,
              ...u
            } = e,
            p = (0, r.useContext)(x),
            { ref: f, index: h } = (0, l.rm)({ label: n }),
            g = (0, l.SV)([i, f]);
          if (!p)
            return (
              console.error(
                "<PopoverListItem> must be a child of <PopoverListRoot>.",
              ),
              null
            );
          const v = h === p.activeIndex,
            m = h === p.selectedIndex || !!s;
          return (0, o.jsx)(d.Option, {
            ref: g,
            selected: m,
            focused: v,
            role: "option",
            tabIndex: 0,
            ...p.getItemProps({
              onClick: a ? void 0 : c,
              onKeyDown: (e) => {
                a ||
                  ("Enter" !== e.key &&
                    (" " !== e.key || p.typingRef.current)) ||
                  (c(e), e.preventDefault(), e.stopPropagation());
              },
              active: v,
              selected: m,
              disabled: a,
              ...u,
            }),
            children: t,
          });
        };
      var j = n(61023),
        L = n(40704);
      const O = {
        up: "rotate( 180, 10, 10 )",
        left: "rotate( 90, 10, 10 )",
        right: "rotate( 270, 10, 10 )",
      };
      function k(e) {
        const { direction: t = "down" } = e,
          n = O[t];
        return (0, o.jsx)(L.I, {
          ...e,
          children: (0, o.jsx)("path", {
            transform: n,
            d: "M5.14541 6.89977L10.0063 12.2027L14.8671 6.89977C15.3557 6.36674 16.145 6.36674 16.6336 6.89977C17.1221 7.4328 17.1221 8.29385 16.6336 8.82688L10.8832 15.1002C10.3946 15.6333 9.60537 15.6333 9.11678 15.1002L3.36644 8.82688C2.87785 8.29385 2.87785 7.4328 3.36644 6.89977C3.85503 6.38041 4.65682 6.36674 5.14541 6.89977Z",
            fill: "currentColor",
          }),
        });
      }
      var P = n(20187);
      function w(e) {
        return (0, o.jsx)(L.I, {
          ...e,
          viewBoxSize: 12,
          children: (0, o.jsx)("path", {
            d: "M10.7068 2.46964L9.53012 1.29297L6.00012 4.81964L2.47012 1.29297L1.29346 2.46964L4.82012 5.99964L1.29346 9.52964L2.47012 10.7063L6.00012 7.17964L9.53012 10.7063L10.7068 9.52964L7.18012 5.99964L10.7068 2.46964Z",
            fill: "currentColor",
          }),
        });
      }
      var y = n(13843);
      var V = n(57757),
        R = n(83392),
        z = n(66922);
      function F(e) {
        return D(e, !1);
      }
      function D(e, t) {
        const { onSelectionChange: n, selectedValue: o, ...l } = e,
          [s, c] = (0, r.useState)(!1),
          i = (0, r.useCallback)(
            (e) => {
              n(e), t || c(!1);
            },
            [n, t],
          ),
          a = (0, r.useCallback)(
            (e) => {
              i(t ? [] : null), e.stopPropagation(), e.preventDefault();
            },
            [i, t],
          ),
          d = (0, r.useCallback)(
            (e) => {
              if (t) {
                const t = o,
                  n = t.indexOf(e);
                if (-1 !== n) return i(t.slice(0, n).concat(t.slice(n + 1)));
                i(t.concat(e));
              } else i(e);
            },
            [i, o, t],
          );
        return {
          onSelectionChange: i,
          onItemSelectionChange: d,
          onClear: a,
          bOpen: s,
          setOpen: c,
          multiselect: t,
          selectedValue: o,
          ...l,
        };
      }
      const _ = {
        Root: function (e) {
          const {
              children: t,
              state: n,
              placement: c = "bottom-end",
              popoverWidth: i = "dropdown",
              popoverMaxHeight: a,
              ...d
            } = e,
            [p, f] = (0, r.useState)(null),
            [h, x] = (0, r.useState)(null),
            g = (0, r.useMemo)(
              () =>
                n.rgOptions.findIndex((e) =>
                  n.multiselect
                    ? n.selectedValue.includes(e)
                    : e === n.selectedValue,
                ),
              [n.selectedValue, n.rgOptions, n.multiselect],
            ),
            v = (0, r.useRef)(null),
            m = {
              ...n,
              ...d,
              focusedValue: p,
              onFocusChange: f,
              refPopover: v,
              setOpen: (e) => {
                e && f(n.multiselect ? n.selectedValue[0] : n.selectedValue),
                  n.setOpen(e);
              },
              focusedIndex: h,
              onFocusedIndexChange: x,
            },
            b = (function (e) {
              const {
                open: t,
                onOpenChange: n,
                activeIndex: o,
                setActiveIndex: c,
                selectedIndex: i,
                setSelectedIndex: a,
                interactions: d = {},
                role: p,
                placement: f,
              } = e;
              let h = t;
              const x = (0, l.we)({
                  open: h,
                  onOpenChange: n,
                  middleware: (0, u.p)(e),
                  whileElementsMounted: s.ll,
                  placement: f && "object" == typeof f ? f.initial : f,
                  strategy: "fixed",
                  platform: {
                    ...s.iD,
                    getOffsetParent: (e) =>
                      e?.ownerDocument?.defaultView ?? window,
                  },
                }),
                g = (0, l.kp)(x.context, { enabled: !!d.click }),
                v = (0, l.iQ)(x.context, { enabled: !!d.focus }),
                m = (0, l.s9)(x.context),
                I = (0, r.useRef)([]),
                b = (0, l.C1)(x.context, {
                  listRef: I,
                  activeIndex: o,
                  selectedIndex: i,
                  onNavigate: c,
                  virtual: !!d.virtualItemFocus,
                  loop: !0,
                  focusItemOnOpen: !1,
                }),
                C = (0, r.useRef)([]),
                S = (0, r.useRef)(!1),
                j = (0, l.lY)(x.context, {
                  enabled: !!d.typeahead,
                  listRef: C,
                  activeIndex: o,
                  selectedIndex: i,
                  onMatch: h ? c : a,
                  onTypingChange: (e) => (S.current = e),
                }),
                L = (0, l.It)(x.context, { role: p }),
                {
                  getFloatingProps: O,
                  getReferenceProps: k,
                  getItemProps: P,
                } = (0, l.bv)([L, g, v, m, b, j]);
              return {
                floating: x,
                getFloatingProps: O,
                getReferenceProps: k,
                getItemProps: P,
                open: h,
                activeIndex: o,
                selectedIndex: i,
                setSelectedIndex: a,
                elementsRef: I,
                labelsRef: C,
                typingRef: S,
                initialFocus: d.virtualItemFocus ? -1 : void 0,
              };
            })({
              open: n.bOpen,
              onOpenChange: n.setOpen,
              width: i,
              maxHeight: a,
              placement: c,
              selectedIndex: g,
              setSelectedIndex: (e) => n.onItemSelectionChange(n.rgOptions[e]),
              activeIndex: h,
              setActiveIndex: x,
              gutter: "4",
              interactions: { click: !0, typeahead: !0 },
              role: "select",
              scroll: !0,
            });
          return (0, o.jsx)(N.Provider, {
            value: m,
            children: (0, o.jsx)(I, { state: b, children: t }),
          });
        },
        Option: function (e) {
          const { value: t, children: n, disabled: r, ...l } = e,
            {
              onItemSelectionChange: s,
              multiselect: c,
              selectedValue: i,
              maxSelected: a,
            } = Y("<SelectTrigger>"),
            d = "string" == typeof t ? t : void 0;
          let u = !1,
            p = !1;
          c
            ? ((u = Array.isArray(i) && i.includes(t)),
              (p = !!a && Array.isArray(i) && i.length >= a))
            : (u = t === i);
          const f = r || (p && !u);
          return (0, o.jsxs)(S, {
            label: d,
            onSelect: () => s(t),
            selected: u,
            disabled: f,
            ...l,
            children: [
              c &&
                (0, o.jsxs)(R.s, {
                  gap: "2",
                  align: "center",
                  children: [
                    (0, o.jsx)(V.S, { checked: u, variant: "dark" }),
                    n,
                  ],
                }),
              !c && n,
            ],
          });
        },
        Options: function (e) {
          const { refPopover: t } = Y("<Select.Options>");
          return (0, o.jsx)(C, { ref: t, children: e.children });
        },
        Trigger: function (e) {
          const { children: t, render: n } = e,
            {
              bOpen: r,
              setOpen: l,
              selectedValue: s,
              variant: c,
              size: a,
              radius: d,
              status: u,
              rgOptions: p,
              multiselect: f,
              onClear: h,
              focusedValue: x,
              onFocusChange: g,
              onSelectionChange: v,
              clearable: m,
              focusedIndex: I,
              onItemSelectionChange: C,
              onFocusedIndexChange: S,
              refPopover: L,
              placeholder: O,
              maxSelected: P,
              ...y
            } = Y("<SelectTrigger>"),
            V = {
              tabIndex: 0,
              role: "combobox",
              onClick: () => l(!r),
              children: t,
            },
            R = f ? Array.isArray(s) && s.length > 0 : !!s,
            F =
              R && m
                ? (0, o.jsx)(w, { onClick: h, cursor: "pointer", hitSlop: !0 })
                : (0, o.jsx)(k, {}),
            D = (0, z.f)("Select", c),
            _ = (0, o.jsx)(j.j, {
              afterContent: F,
              variant: D,
              size: a,
              radius: d,
              status: u,
              hasValue: R,
              tabIndex: 0,
              cursor: "pointer",
              ...y,
            }),
            A = (0, i.Q)(n, _, V, void 0);
          return (0, o.jsx)(b, { children: A });
        },
        Value: function (e) {
          return (0, o.jsx)(P.EY, {
            weight: "medium",
            truncate: !0,
            contrast: "title",
            children: e.children,
          });
        },
        Placeholder: function (e) {
          return (0, o.jsx)(P.EY, {
            contrast: "description",
            truncate: !0,
            children: e.children,
          });
        },
      };
      function A(e) {
        return "string" == typeof e
          ? e
          : "number" == typeof e
            ? e.toString()
            : (console.error(
                "Could not use default option labeler on Select option value. Custom labeler requried",
                e,
              ),
              "");
      }
      const B = Object.assign(function (e) {
        const {
            selectedValue: t,
            onSelectionChange: n,
            options: r,
            placeholder: l,
            getOptionLabel: s = A,
            ...c
          } = e,
          i = F({
            onSelectionChange: n,
            selectedValue: t,
            rgOptions: r,
            placeholder: l,
          }),
          a = null != t,
          d = a ? s(t) : "";
        return (0, o.jsxs)(B.Root, {
          state: i,
          ...c,
          children: [
            (0, o.jsxs)(B.Trigger, {
              children: [
                a && (0, o.jsx)(B.Value, { children: d }),
                !a && (0, o.jsx)(B.Placeholder, { children: l }),
              ],
            }),
            (0, o.jsx)(B.Options, {
              children: i.rgOptions.map((e, t) =>
                (0, o.jsx)(B.Option, { value: e, children: s(e) }, t),
              ),
            }),
          ],
        });
      }, _);
      const M = _;
      const E = Object.assign(function (e) {
          const {
              selectedValue: t,
              onSelectionChange: n,
              options: r,
              placeholder: l,
              getOptionLabel: s = A,
              maxSelected: c,
              ...i
            } = e,
            a = (function (e) {
              return D(e, !0);
            })({
              onSelectionChange: n,
              selectedValue: t,
              rgOptions: r,
              placeholder: l,
              maxSelected: c,
            }),
            d = Array.isArray(t) && t.length > 0;
          let u = "";
          if (d) {
            const e = t.map((e) => s(e));
            u =
              "ListFormat" in Intl
                ? new Intl.ListFormat(
                    (0, y.A)().languages[0].strISOCode,
                  ).format(e)
                : e.join(", ");
          }
          return (0, o.jsxs)(E.Root, {
            state: a,
            ...i,
            children: [
              (0, o.jsxs)(E.Trigger, {
                children: [
                  d && (0, o.jsx)(E.Value, { children: u }),
                  !d && (0, o.jsx)(E.Placeholder, { children: l }),
                ],
              }),
              (0, o.jsx)(E.Options, {
                children: a.rgOptions.map((e, t) =>
                  (0, o.jsx)(E.Option, { value: e, children: s(e) }, t),
                ),
              }),
            ],
          });
        }, M),
        N = (0, r.createContext)(null);
      function Y(e) {
        const t = (0, r.useContext)(N);
        return t || console.error(`${e} must be used within a <Select>!`), t;
      }
    },
    40704: (e, t, n) => {
      "use strict";
      n.d(t, { I: () => c });
      var o = n(7850),
        r = n(11526),
        l = n(75659),
        s = n(16619);
      function c(e) {
        const { viewBoxSize: t = 20, ...n } = e,
          l = n.size ? void 0 : s.IconSizeDefault;
        return (0, o.jsx)("svg", {
          viewBox: `0 0 ${t} ${t}`,
          ...(0, r.mz)({ className: l, ...n }, i),
        });
      }
      const i = [
        ...l.L,
        { prop: "size", responsive: !0, className: (e) => s[`IconSize-${e}`] },
        {
          prop: "color",
          className: s.Color,
          cssProperty: (e) => ["--icon-color", (0, r.w7)(e)],
        },
        {
          prop: "hitSlop",
          className: s.HitSlop,
          cssProperty: (e) => [
            "--hit-slop-custom",
            "string" == typeof e ? e : "",
          ],
        },
        l.h.find(({ prop: e }) => "cursor" === e),
      ];
    },
  },
]);

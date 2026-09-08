/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [7845],
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
    38878: (e) => {
      e.exports = {
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
    44041: (e) => {
      e.exports = { Box: "_2YzOLNBx6TonKU0Zmp20l4" };
    },
    68875: (e) => {
      e.exports = {
        Flex: "_3nHL7awgK1Qei1XivGvHMK",
        Direction: "_3JCkAyd9cnB90tRcDLPp4W",
        Justify: "_12ampOcrpRamy1y301kEaK",
        Align: "_1SxQuUnaM-MXeF5UfssWve",
        Gap: "ja5o2GZTopxfGJArsZgFh",
        GapX: "_3KiTPfFvdkPH6ixij56nVM",
        GapY: "_38cfDT7owcq-7PHlx-Bx2j",
        Wrap: "dB7ipW28YN-_GytLR4EuE",
        Inline: "LOeaKjPDMbdcAB54IFgyX",
      };
    },
    91239: (e) => {
      e.exports = { Reset: "_3A_c3YHYd4YIjA8Y-olnPl" };
    },
    57757: (e, t, n) => {
      "use strict";
      n.d(t, { S: () => u });
      var o = n(7850),
        r = n(83392),
        s = n(40704);
      function i(e) {
        return (0, o.jsx)(s.I, {
          ...e,
          viewBoxSize: 16,
          children: (0, o.jsx)("path", {
            d: "M13.8182 1.94629L5.77816 9.98184L2.40483 6.61296L0.835938 8.18184L5.77816 13.1285L15.387 3.51518L13.8182 1.94629Z",
            fill: "currentColor",
          }),
        });
      }
      var a = n(21895),
        c = n(64238),
        l = n.n(c),
        d = n(66922);
      function u(e) {
        const {
            checked: t,
            onChange: n,
            disabled: s,
            children: c,
            ref: u,
            variant: h,
            color: x,
            align: g = "center",
            ...m
          } = e,
          v = "indeterminate" === t,
          b = v ? f : i,
          I = () => {
            s || (n && n(!!v || !t));
          },
          j = (0, d.f)("Checkbox", h);
        return (0, o.jsxs)(r.s, {
          align: g,
          ref: u,
          role: "checkbox",
          "aria-checked": v ? "mixed" : t,
          "data-state": p(t),
          className: l()(a.Root, a[`Variant-${j}`], s && a.Disabled),
          onClick: I,
          tabIndex: 0,
          onKeyDown: (e) => {
            s ||
              (" " === e.key && (I(), e.preventDefault(), e.stopPropagation()));
          },
          cursor: "default",
          "aria-disabled": s,
          "data-accent-color": x,
          ...m,
          children: [
            (0, o.jsx)("div", {
              className: a.Checkbox,
              children: t && (0, o.jsx)(b, { className: a.Icon }),
            }),
            c,
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
    61023: (e, t, n) => {
      "use strict";
      n.d(t, { j: () => u, w: () => p });
      var o = n(7850),
        r = n(64238),
        s = n.n(r),
        i = n(38878),
        a = n(90534),
        c = n(83392),
        l = n(75659),
        d = n(11526);
      function u(e) {
        const {
            children: t,
            beforeContent: n,
            afterContent: r,
            hasValue: s,
            ...i
          } = e,
          l = p(i);
        return (0, o.jsxs)(c.s, {
          ...l,
          align: "center",
          "data-has-value": !!s,
          children: [
            n && (0, o.jsx)(c.s, { paddingRight: "2", children: n }),
            (0, o.jsx)(a.az, { flexGrow: "1", minWidth: "0", children: t }),
            r && (0, o.jsx)(c.s, { paddingLeft: "2", children: r }),
          ],
        });
      }
      function p(e) {
        const {
            variant: t = "basic",
            size: n = "2",
            radius: o,
            focusable: r = !0,
            hoverable: a = !0,
            clickable: c = !0,
            disabled: u,
            className: p,
            status: f,
            ...h
          } = e,
          x = "underline" === t ? "none" : o;
        return (0, d.mz)(
          {
            ...h,
            radius: x,
            "data-status": f,
            className: s()(
              i.ControlBox,
              r && !u && i.Focusable,
              a && !u && i.Hoverable,
              c && !u && i.Clickable,
              u && i.Disabled,
              i[`Variant-${t}`],
              i[`Size-${n}`],
              p,
            ),
          },
          l.h,
        );
      }
    },
    17394: (e, t, n) => {
      "use strict";
      n.d(t, { k: () => j, T: () => I });
      var o = n(7850),
        r = n(90626),
        s = n(73788),
        i = n(8083),
        a = n(90534),
        c = n(80797),
        l = n(48093);
      const d = Object.assign(
        function (e) {
          const { render: t, ...n } = e;
          return (0, c.Q)(
            t,
            (0, o.jsx)(a.az, {
              radius: "sm",
              background: "dull-8",
              className: l.ListBox,
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
                render: s,
                disabled: i,
                ...d
              } = e,
              u = t ? "true" : "false",
              p = n ? "true" : void 0;
            return (0, c.Q)(
              s,
              (0, o.jsx)(a.az, {
                focusable: !0,
                "data-selected": u,
                "data-focused": p,
                "aria-disabled": i,
                className: l.ListBoxOption,
                paddingY: "2",
                paddingX: "3",
              }),
              { role: "option", ...d },
              { selected: t, focused: n, disabled: i },
            );
          },
        },
      );
      var u = n(94621),
        p = (n(8871), n(45699)),
        f = n(85585),
        h = (n(7445), n(81393), n(64238), n(11820), n(78327));
      (0, r.createContext)(null);
      function x(e) {
        const { gutter: t = 0, placement: n } = e,
          o = [],
          r = n && "object" == typeof n;
        return (
          r && n.offset
            ? o.push((0, u.cY)(n.offset))
            : (r && void 0 !== n.offset) || o.push((0, u.cY)(2)),
          r && n.flip
            ? o.push((0, u.UU)(n.flip))
            : (r && void 0 !== n.flip) || o.push((0, u.UU)()),
          r && n.shift
            ? o.push((0, u.BN)(n.shift))
            : (r && void 0 !== n.shift) || o.push((0, u.BN)()),
          o.push(
            (0, u.Ej)({
              apply: (n) => {
                const { rects: o, elements: r, availableHeight: s } = n,
                  i = { boxSizing: "border-box", zIndex: "1" };
                switch ((e.scroll && (i.overflowY = "auto"), e.width)) {
                  case "target":
                    i.width = `${o.reference.width}px`;
                    break;
                  case "content":
                    i.width = `${o.floating.width}px`;
                    break;
                  case "dropdown": {
                    let e = o.reference.width;
                    o.floating.width > e && e < 200 && (e = o.floating.width),
                      (i.width = `${e}px`);
                  }
                }
                "function" == typeof e.width &&
                  (i.width = e.width({
                    unContentWidth: o.floating.width,
                    unTargetWidth: o.reference.width,
                  }));
                const a =
                  "number" == typeof t ? `${t}px` : `var(--spacing-${t})`;
                "function" == typeof e.maxHeight
                  ? (i.maxHeight = e.maxHeight({
                      unAvailableHeight: s,
                      gutter: a,
                    }))
                  : "number" == typeof e.maxHeight
                    ? (i.maxHeight = `min( calc( ${s}px - ${a} ), ${e.maxHeight}px )`)
                    : (i.maxHeight =
                        "number" == typeof t
                          ? s - t + "px"
                          : `calc( ${s}px - var(--spacing-${t}) )`),
                  Object.assign(r.floating.style, i),
                  r.floating.style.setProperty(
                    "--popover-max-height",
                    i.maxHeight,
                  );
              },
            }),
          ),
          o
        );
      }
      const g = (0, r.createContext)(null);
      function m(e) {
        return (0, h.Qn)() ? (0, o.jsx)(v, { ...e }) : (0, o.jsx)(b, { ...e });
      }
      function v(e) {
        const { state: t, children: n } = e,
          s = r.useRef(void 0);
        return (
          (0, p.O7)(s, !!s.current, !1),
          (0, o.jsx)(f.D6, {
            navID: "PopoverList",
            onCancelButton: () => t.floating.context.onOpenChange(!1),
            modal: !0,
            navTreeRef: s,
            children: n,
          })
        );
      }
      function b(e) {
        const { state: t, children: n } = e;
        return (0, o.jsx)(s.s3, {
          context: t.floating.context,
          initialFocus: t.initialFocus,
          returnFocus: !1,
          children: n,
        });
      }
      function I(e) {
        const {
          open: t,
          onOpenChange: n,
          activeIndex: o,
          setActiveIndex: a,
          selectedIndex: c,
          setSelectedIndex: l,
          interactions: d = {},
          role: u,
          placement: p,
        } = e;
        let f = t;
        const h = (0, s.we)({
            open: f,
            onOpenChange: n,
            middleware: x(e),
            whileElementsMounted: i.ll,
            placement: p && "object" == typeof p ? p.initial : p,
            strategy: "fixed",
            platform: {
              ...i.iD,
              getOffsetParent: (e) => e?.ownerDocument?.defaultView ?? window,
            },
          }),
          g = (0, s.kp)(h.context, { enabled: !!d.click }),
          m = (0, s.iQ)(h.context, { enabled: !!d.focus }),
          v = (0, s.s9)(h.context),
          b = (0, r.useRef)([]),
          I = (0, s.C1)(h.context, {
            listRef: b,
            activeIndex: o,
            selectedIndex: c,
            onNavigate: a,
            virtual: !!d.virtualItemFocus,
            loop: !0,
            focusItemOnOpen: !1,
          }),
          j = (0, r.useRef)([]),
          y = (0, r.useRef)(!1),
          C = (0, s.lY)(h.context, {
            enabled: !!d.typeahead,
            listRef: j,
            activeIndex: o,
            selectedIndex: c,
            onMatch: f ? a : l,
            onTypingChange: (e) => (y.current = e),
          }),
          S = (0, s.It)(h.context, { role: u }),
          {
            getFloatingProps: w,
            getReferenceProps: L,
            getItemProps: P,
          } = (0, s.bv)([S, g, m, v, I, C]);
        return {
          floating: h,
          getFloatingProps: w,
          getReferenceProps: L,
          getItemProps: P,
          open: f,
          activeIndex: o,
          selectedIndex: c,
          setSelectedIndex: l,
          elementsRef: b,
          labelsRef: j,
          typingRef: y,
          initialFocus: d.virtualItemFocus ? -1 : void 0,
        };
      }
      const j = {
        Root: function (e) {
          const { children: t, state: n } = e;
          return (0, o.jsx)(g.Provider, { value: n, children: t });
        },
        Anchor: function (e) {
          const { children: t } = e,
            n = r.Children.only(t),
            o = (0, r.useContext)(g),
            i = (0, s.SV)([o?.floating.refs.setReference, n?.props.ref]);
          if (!n) return null;
          if (!o)
            return (
              console.error(
                "<PopoverListAnchor> must be a child of <PopoverListRoot>.",
              ),
              null
            );
          const { ref: a, ...c } = n.props;
          return (0, r.cloneElement)(n, { ref: i, ...o.getReferenceProps(c) });
        },
        Positioner: function (e) {
          const { children: t, render: n, ref: i } = e,
            a = (0, r.useContext)(g),
            c = (0, s.SV)([
              i,
              a?.floating.refs.setFloating,
              (e) => e?.showPopover?.(),
            ]);
          return a
            ? a.open
              ? (0, o.jsx)(m, {
                  state: a,
                  children: (0, o.jsx)(d, {
                    ref: c,
                    style: a.floating.floatingStyles,
                    ...a.getFloatingProps({ popover: "manual" }),
                    render: n,
                    children: (0, o.jsx)(s.ph, {
                      elementsRef: a.elementsRef,
                      labelsRef: a.labelsRef,
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
        Item: function (e) {
          const {
              children: t,
              label: n,
              selected: i,
              onSelect: a,
              ref: c,
              disabled: l,
              ...u
            } = e,
            p = (0, r.useContext)(g),
            { ref: f, index: h } = (0, s.rm)({ label: n }),
            x = (0, s.SV)([c, f]);
          if (!p)
            return (
              console.error(
                "<PopoverListItem> must be a child of <PopoverListRoot>.",
              ),
              null
            );
          const m = h === p.activeIndex,
            v = h === p.selectedIndex || !!i;
          return (0, o.jsx)(d.Option, {
            ref: x,
            selected: v,
            focused: m,
            role: "option",
            tabIndex: 0,
            ...p.getItemProps({
              onClick: l ? void 0 : a,
              onKeyDown: (e) => {
                l ||
                  ("Enter" !== e.key &&
                    (" " !== e.key || p.typingRef.current)) ||
                  (a(e), e.preventDefault(), e.stopPropagation());
              },
              active: m,
              selected: v,
              disabled: l,
              ...u,
            }),
            children: t,
          });
        },
      };
    },
    11967: (e, t, n) => {
      "use strict";
      n.d(t, { WM: () => x, l6: () => b, uh: () => j });
      var o = n(7850),
        r = n(90626),
        s = n(17394),
        i = n(61023),
        a = n(89047),
        c = n(20187),
        l = n(77914),
        d = n(80797),
        u = n(14181),
        p = n(57757),
        f = n(83392),
        h = n(66922);
      function x(e) {
        return g(e, !1);
      }
      function g(e, t) {
        const { onSelectionChange: n, selectedValue: o, ...s } = e,
          [i, a] = (0, r.useState)(!1),
          c = (0, r.useCallback)(
            (e) => {
              n(e), t || a(!1);
            },
            [n, t],
          ),
          l = (0, r.useCallback)(
            (e) => {
              c(t ? [] : null), e.stopPropagation(), e.preventDefault();
            },
            [c, t],
          ),
          d = (0, r.useCallback)(
            (e) => {
              if (t) {
                const t = o,
                  n = t.indexOf(e);
                if (-1 !== n) return c(t.slice(0, n).concat(t.slice(n + 1)));
                c(t.concat(e));
              } else c(e);
            },
            [c, o, t],
          );
        return {
          onSelectionChange: c,
          onItemSelectionChange: d,
          onClear: l,
          bOpen: i,
          setOpen: a,
          multiselect: t,
          selectedValue: o,
          ...s,
        };
      }
      const m = {
        Root: function (e) {
          const {
              children: t,
              state: n,
              placement: i = "bottom-end",
              popoverWidth: a = "dropdown",
              popoverMaxHeight: c,
              ...l
            } = e,
            [d, u] = (0, r.useState)(null),
            [p, f] = (0, r.useState)(null),
            h = (0, r.useMemo)(
              () =>
                n.rgOptions.findIndex((e) =>
                  n.multiselect
                    ? n.selectedValue.includes(e)
                    : e === n.selectedValue,
                ),
              [n.selectedValue, n.rgOptions, n.multiselect],
            ),
            x = (0, r.useRef)(null),
            g = {
              ...n,
              ...l,
              focusedValue: d,
              onFocusChange: u,
              refPopover: x,
              setOpen: (e) => {
                e && u(n.multiselect ? n.selectedValue[0] : n.selectedValue),
                  n.setOpen(e);
              },
              focusedIndex: p,
              onFocusedIndexChange: f,
            },
            m = (0, s.T)({
              open: n.bOpen,
              onOpenChange: n.setOpen,
              width: a,
              maxHeight: c,
              placement: i,
              selectedIndex: h,
              setSelectedIndex: (e) => n.onItemSelectionChange(n.rgOptions[e]),
              activeIndex: p,
              setActiveIndex: f,
              gutter: "4",
              interactions: { click: !0, typeahead: !0 },
              role: "select",
              scroll: !0,
            });
          return (0, o.jsx)(y.Provider, {
            value: g,
            children: (0, o.jsx)(s.k.Root, { state: m, children: t }),
          });
        },
        Option: function (e) {
          const { value: t, children: n, disabled: r, ...i } = e,
            {
              onItemSelectionChange: a,
              multiselect: c,
              selectedValue: l,
              maxSelected: d,
            } = C("<SelectTrigger>"),
            u = "string" == typeof t ? t : void 0;
          let h = !1,
            x = !1;
          c
            ? ((h = Array.isArray(l) && l.includes(t)),
              (x = !!d && Array.isArray(l) && l.length >= d))
            : (h = t === l);
          const g = r || (x && !h);
          return (0, o.jsxs)(s.k.Item, {
            label: u,
            onSelect: () => a(t),
            selected: h,
            disabled: g,
            ...i,
            children: [
              c &&
                (0, o.jsxs)(f.s, {
                  gap: "2",
                  align: "center",
                  children: [
                    (0, o.jsx)(p.S, { checked: h, variant: "dark" }),
                    n,
                  ],
                }),
              !c && n,
            ],
          });
        },
        Options: function (e) {
          const { refPopover: t } = C("<Select.Options>");
          return (0, o.jsx)(s.k.Positioner, { ref: t, children: e.children });
        },
        Trigger: function (e) {
          const { children: t, render: n } = e,
            {
              bOpen: r,
              setOpen: c,
              selectedValue: u,
              variant: p,
              size: f,
              radius: x,
              status: g,
              rgOptions: m,
              multiselect: v,
              onClear: b,
              focusedValue: I,
              onFocusChange: j,
              onSelectionChange: y,
              clearable: S,
              focusedIndex: w,
              onItemSelectionChange: L,
              onFocusedIndexChange: P,
              refPopover: k,
              placeholder: O,
              maxSelected: V,
              ...R
            } = C("<SelectTrigger>"),
            z = {
              tabIndex: 0,
              role: "combobox",
              onClick: () => c(!r),
              children: t,
            },
            _ = v ? Array.isArray(u) && u.length > 0 : !!u,
            F =
              _ && S
                ? (0, o.jsx)(l.g, {
                    onClick: b,
                    cursor: "pointer",
                    hitSlop: !0,
                  })
                : (0, o.jsx)(a.V, {}),
            H = (0, h.f)("Select", p),
            B = (0, o.jsx)(i.j, {
              afterContent: F,
              variant: H,
              size: f,
              radius: x,
              status: g,
              hasValue: _,
              tabIndex: 0,
              cursor: "pointer",
              ...R,
            }),
            A = (0, d.Q)(n, B, z, void 0);
          return (0, o.jsx)(s.k.Anchor, { children: A });
        },
        Value: function (e) {
          return (0, o.jsx)(c.EY, {
            weight: "medium",
            truncate: !0,
            contrast: "title",
            children: e.children,
          });
        },
        Placeholder: function (e) {
          return (0, o.jsx)(c.EY, {
            contrast: "description",
            truncate: !0,
            children: e.children,
          });
        },
      };
      function v(e) {
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
      const b = Object.assign(function (e) {
        const {
            selectedValue: t,
            onSelectionChange: n,
            options: r,
            placeholder: s,
            getOptionLabel: i = v,
            ...a
          } = e,
          c = x({
            onSelectionChange: n,
            selectedValue: t,
            rgOptions: r,
            placeholder: s,
          }),
          l = null != t,
          d = l ? i(t) : "";
        return (0, o.jsxs)(b.Root, {
          state: c,
          ...a,
          children: [
            (0, o.jsxs)(b.Trigger, {
              children: [
                l && (0, o.jsx)(b.Value, { children: d }),
                !l && (0, o.jsx)(b.Placeholder, { children: s }),
              ],
            }),
            (0, o.jsx)(b.Options, {
              children: c.rgOptions.map((e, t) =>
                (0, o.jsx)(b.Option, { value: e, children: i(e) }, t),
              ),
            }),
          ],
        });
      }, m);
      const I = m;
      const j = Object.assign(function (e) {
          const {
              selectedValue: t,
              onSelectionChange: n,
              options: r,
              placeholder: s,
              getOptionLabel: i = v,
              maxSelected: a,
              ...c
            } = e,
            l = (function (e) {
              return g(e, !0);
            })({
              onSelectionChange: n,
              selectedValue: t,
              rgOptions: r,
              placeholder: s,
              maxSelected: a,
            }),
            d = Array.isArray(t) && t.length > 0;
          let p = "";
          if (d) {
            const e = t.map((e) => i(e));
            p =
              "ListFormat" in Intl
                ? new Intl.ListFormat((0, u.ZO)().strISOCode).format(e)
                : e.join(", ");
          }
          return (0, o.jsxs)(j.Root, {
            state: l,
            ...c,
            children: [
              (0, o.jsxs)(j.Trigger, {
                children: [
                  d && (0, o.jsx)(j.Value, { children: p }),
                  !d && (0, o.jsx)(j.Placeholder, { children: s }),
                ],
              }),
              (0, o.jsx)(j.Options, {
                children: l.rgOptions.map((e, t) =>
                  (0, o.jsx)(j.Option, { value: e, children: i(e) }, t),
                ),
              }),
            ],
          });
        }, I),
        y = (0, r.createContext)(null);
      function C(e) {
        const t = (0, r.useContext)(y);
        return t || console.error(`${e} must be used within a <Select>!`), t;
      }
    },
    40704: (e, t, n) => {
      "use strict";
      n.d(t, { I: () => a });
      var o = n(7850),
        r = n(11526),
        s = n(75659),
        i = n(16619);
      function a(e) {
        const { viewBoxSize: t = 20, ...n } = e,
          s = n.size ? void 0 : i.IconSizeDefault;
        return (0, o.jsx)("svg", {
          viewBox: `0 0 ${t} ${t}`,
          ...(0, r.mz)({ className: s, ...n }, c),
        });
      }
      const c = [
        ...s.L,
        { prop: "size", responsive: !0, className: (e) => i[`IconSize-${e}`] },
        {
          prop: "color",
          className: i.Color,
          cssProperty: (e) => ["--icon-color", (0, r.w7)(e)],
        },
        {
          prop: "hitSlop",
          className: i.HitSlop,
          cssProperty: (e) => [
            "--hit-slop-custom",
            "string" == typeof e ? e : "",
          ],
        },
        s.h.find(({ prop: e }) => "cursor" === e),
      ];
    },
    89047: (e, t, n) => {
      "use strict";
      n.d(t, { V: () => i });
      var o = n(7850),
        r = n(40704);
      const s = {
        up: "rotate( 180, 10, 10 )",
        left: "rotate( 90, 10, 10 )",
        right: "rotate( 270, 10, 10 )",
      };
      function i(e) {
        const { direction: t = "down" } = e,
          n = s[t];
        return (0, o.jsx)(r.I, {
          ...e,
          children: (0, o.jsx)("path", {
            transform: n,
            d: "M5.14541 6.89977L10.0063 12.2027L14.8671 6.89977C15.3557 6.36674 16.145 6.36674 16.6336 6.89977C17.1221 7.4328 17.1221 8.29385 16.6336 8.82688L10.8832 15.1002C10.3946 15.6333 9.60537 15.6333 9.11678 15.1002L3.36644 8.82688C2.87785 8.29385 2.87785 7.4328 3.36644 6.89977C3.85503 6.38041 4.65682 6.36674 5.14541 6.89977Z",
            fill: "currentColor",
          }),
        });
      }
    },
    77914: (e, t, n) => {
      "use strict";
      n.d(t, { g: () => s });
      var o = n(7850),
        r = n(40704);
      function s(e) {
        return (0, o.jsx)(r.I, {
          ...e,
          viewBoxSize: 12,
          children: (0, o.jsx)("path", {
            d: "M10.7068 2.46964L9.53012 1.29297L6.00012 4.81964L2.47012 1.29297L1.29346 2.46964L4.82012 5.99964L1.29346 9.52964L2.47012 10.7063L6.00012 7.17964L9.53012 10.7063L10.7068 9.52964L7.18012 5.99964L10.7068 2.46964Z",
            fill: "currentColor",
          }),
        });
      }
    },
    90534: (e, t, n) => {
      "use strict";
      n.d(t, { A4: () => h, az: () => p });
      var o = n(7850),
        r = n(44041),
        s = n(39479),
        i = n(64238),
        a = n.n(i),
        c = n(11526),
        l = n(75659),
        d = n(11820),
        u = n(78327);
      function p(e) {
        const { as: t = "div", focusable: n, navProps: i, ref: l, ...p } = e,
          h = (0, u.Qn)(),
          x = (0, c.mz)(
            { ...p, className: a()(r.Box, (0, d.T)(), e.className) },
            f,
          ),
          g = n ?? i?.focusable ?? !!p.onClick,
          m = (0, o.jsx)(t, { ref: l, ...x });
        return h && (g || i)
          ? (0, o.jsx)(s.J, { ...(i || {}), focusable: g, children: m })
          : m;
      }
      const f = l.h;
      function h(e) {
        return (0, c.Ef)(e, l.L);
      }
    },
    83392: (e, t, n) => {
      "use strict";
      n.d(t, { s: () => p });
      var o = n(7850),
        r = n(39479),
        s = n(64238),
        i = n.n(s),
        a = n(11526),
        c = n(55348),
        l = n(75659),
        d = n(68875),
        u = n(78327);
      function p(e) {
        const { as: t = "div", focusable: n, navProps: s, ref: l, ...p } = e,
          h = (0, u.Qn)(),
          x = (0, a.mz)({ ...p, className: i()(e.className, d.Flex) }, f),
          g = n ?? s?.focusable ?? !!p.onClick,
          m = (0, o.jsx)(t, { ref: l, ...x }),
          v = (0, c.n)(p.direction ?? "row");
        return h
          ? (0, o.jsx)(r.J, {
              ...(s || {}),
              focusable: g,
              "flow-children": v,
              children: m,
            })
          : m;
      }
      const f = [
        ...l.h,
        {
          prop: "direction",
          responsive: !0,
          className: d.Direction,
          cssProperty: "--direction",
        },
        {
          prop: "justify",
          responsive: !0,
          className: d.Justify,
          cssProperty: (e) => ["--justify", h(e)],
        },
        {
          prop: "align",
          responsive: !0,
          className: d.Align,
          cssProperty: "--align",
        },
        {
          prop: "gap",
          responsive: !0,
          className: d.Gap,
          cssProperty: (e) => ["--gap", `var(--spacing-${e})`],
        },
        {
          prop: "gapX",
          responsive: !0,
          className: d.GapX,
          cssProperty: (e) => ["--gap-x", `var(--spacing-${e})`],
        },
        {
          prop: "gapY",
          responsive: !0,
          className: d.GapY,
          cssProperty: (e) => ["--gap-y", `var(--spacing-${e})`],
        },
        {
          prop: "wrap",
          responsive: !0,
          className: d.Wrap,
          cssProperty: "--wrap",
        },
        { prop: "inline", responsive: !0, className: d.Inline },
      ];
      function h(e) {
        return /^(between|around|evenly)$/.test(e) ? `space-${e}` : e;
      }
    },
    80797: (e, t, n) => {
      "use strict";
      n.d(t, { Q: () => s });
      var o = n(90626);
      function r(e, t, n) {
        return "function" == typeof e ? e(t, n) : o.cloneElement(e, t);
      }
      function s(e, t, n, o) {
        return r(e || t, n, o);
      }
    },
    11820: (e, t, n) => {
      "use strict";
      n.d(t, { T: () => r });
      var o = n(91239);
      function r() {
        return o.Reset;
      }
    },
    14181: (e, t, n) => {
      "use strict";
      n.d(t, { ZO: () => r });
      var o = n(13843);
      function r() {
        return (0, o.A)().languages[0];
      }
    },
    9161: (e, t, n) => {
      "use strict";
      n.d(t, { g: () => s });
      var o = n(40323),
        r = n.n(o);
      class s {
        static ParseCSVFile(e, t) {
          return new Promise((n, o) => {
            const s = {
              header: !0,
              skipEmptyLines: "greedy",
              complete: n,
              error: (e) => o({ errors: [e] }),
              transformHeader: t,
            };
            r().parse(e, s);
          });
        }
        static ReadFile(e) {
          return new Promise((t, n) => {
            const o = new FileReader();
            (o.onload = (e) => t(o.result)), o.readAsText(e);
          });
        }
        static WriteFile(e, t) {
          let n = document.createElement("a");
          if (navigator.msSaveBlob) navigator.msSaveBlob(e, t);
          else {
            const t = window.URL.createObjectURL(e);
            n.href = t;
          }
          n.setAttribute("download", t), n.click();
          try {
            document.removeChild(n);
          } catch (e) {}
        }
        static WriteCSVToFile(e, t, n, o) {
          const i = o
              ? r().unparse({ fields: o, data: e }, { header: !0 })
              : r().unparse(e, { header: !0 }),
            a = 1 == n ? ["\ufeff" + i] : [i];
          s.WriteFile(new Blob(a, { type: "text/csv:charset=utf-8;" }), t);
        }
        static m_DummyValueForQuestionHack = 0;
        static WriteXMLToFile(e, t) {
          const n = () =>
            this.m_DummyValueForQuestionHack ? "never returned" : "?";
          let o =
            "<" + n() + 'xml version="1.0" encoding="UTF-8" ' + n() + ">\n";
          (o += new XMLSerializer().serializeToString(e)),
            s.WriteFile(
              new Blob([o], { type: "application/xml:charset=utf-8;" }),
              t,
            );
        }
      }
    },
  },
]);

/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [57333, 38843],
    {
      98001: (b, ce, i) => {
        "use strict";
        i.d(ce, { v: () => Q });
        var t = i(72609);
        function m(H) {
          const { appid: q, profileUrl: k, dlc: Y } = H,
            C = k
              ? `${k}/achievements/${q}`
              : `${Config.COMMUNITY_BASE_URL}achievements/${q}`;
          return Y !== void 0 ? `${C}?dlc=${Y}` : C;
        }
        function Q(H) {
          const { appid: q, profileUrl: k } = H;
          return k
            ? `${k}/stats/${q}/achievements/`
            : `${t.TS.COMMUNITY_BASE_URL}stats/${q}/achievements/`;
        }
      },
      84909: (b, ce, i) => {
        "use strict";
        i.d(ce, { AM: () => me, Pr: () => U });
        var t = i(7850),
          m = i(90626),
          Q = i(73788),
          H = i(8083),
          q = i(94621),
          k = i(18938),
          Y = i(24660),
          C = i(38566),
          T = i(54130),
          S = i(71742),
          V = i(64238),
          _ = i.n(V),
          $ = i(3877),
          de = i(3166),
          se = i(28020);
        const N = (0, m.createContext)(null);
        function L(X) {
          const { children: le, ...J } = X,
            ie = te(J);
          return (0, t.jsx)(N.Provider, { value: ie, children: le });
        }
        function re(X) {
          const { children: le } = X,
            J = m.Children.only(le),
            ie = (0, m.useContext)(N);
          return J
            ? ie
              ? (0, m.cloneElement)(J, {
                  ...ie.getReferenceProps(J.props),
                  ref: (0, k.XB)(J.props.ref, ie.floating.refs.setReference),
                })
              : (console.error(
                  "<PopoverAnchor> must be a child of <PopoverRoot>.",
                ),
                null)
            : null;
        }
        function K(X) {
          const { children: le, className: J, ref: ie, label: oe } = X,
            pe = (0, m.useContext)(N),
            Ee = (0, Q.SV)([ie, pe?.floating.refs.setFloating]);
          if (!pe)
            return (
              console.error(
                "<Popover.Positioner> must be a child of <Popover.Root>.",
              ),
              null
            );
          if (!pe.open) return null;
          let Mt = m.Children.only(le),
            Dt = m.Fragment;
          return (
            Mt.type == me.FocusManager &&
              ((Mt = m.Children.only(Mt.props.children)), (Dt = ae)),
            (0, t.jsx)(Dt, {
              children: (0, t.jsx)(se.HF, {
                presentation: pe.presentation,
                sizing: pe.sizing,
                floatingRef: Ee,
                floatingProps: pe.getFloatingProps(),
                floatingStyles: pe.floating.floatingStyles,
                referenceElement: pe.floating.elements.domReference,
                className: _()((0, $.T)(), J),
                label: oe,
                children: Mt,
              }),
            })
          );
        }
        function ae(X) {
          return (0, de.Qn)()
            ? (0, t.jsx)(ee, { ...X })
            : (0, t.jsx)(je, { ...X });
        }
        function ee(X) {
          const { children: le } = X,
            J = (0, m.useContext)(N);
          (0, S.wT)(
            !!J,
            "<Popover.Positioner> must be a child of <Popover.Root>.",
          );
          const ie = () => J.floating.context.onOpenChange(!1),
            oe = m.useRef(void 0);
          return (
            (0, Y.O7)(oe, !0, !0),
            (0, t.jsx)(C.D6, {
              navID: "Popover",
              onCancelButton: ie,
              modal: !0,
              navTreeRef: oe,
              children: (0, t.jsx)("div", {
                style: { display: "contents" },
                children: (0, t.jsx)(T.q, { children: le }),
              }),
            })
          );
        }
        function je(X) {
          const { children: le } = X,
            J = (0, m.useContext)(N);
          return (
            (0, S.wT)(
              !!J,
              "<Popover.Positioner> must be a child of <Popover.Root>.",
            ),
            (0, t.jsx)(Q.s3, {
              context: J.floating.context,
              initialFocus: -1,
              returnFocus: !1,
              children: le,
            })
          );
        }
        function te(X) {
          const {
            open: le,
            interactions: J = {},
            width: ie,
            maxHeight: oe,
            gutter: pe,
            scroll: Ee,
          } = X;
          let Mt = le;
          const Dt = (0, se.Pr)(X.presentation),
            Z = U(X, Mt, Dt),
            ge = { enabled: !!J.click },
            hn = typeof J.click == "function" ? J.click(ge) : ge,
            rs = (0, Q.kp)(Z.context, hn),
            kt = { enabled: !!J.focus },
            is = typeof J.focus == "function" ? J.focus(kt) : kt,
            as = (0, Q.iQ)(Z.context, is),
            Vn = { handleClose: (0, Q.iB)() },
            xs = typeof J.hover == "function" ? J.hover(Vn) : Vn,
            E = (0, Q.Mk)(Z.context, { enabled: !!J.hover, ...xs }),
            Vt = (0, Q.s9)(Z.context),
            { getFloatingProps: At, getReferenceProps: Pr } = (0, Q.bv)([
              rs,
              as,
              E,
              Vt,
            ]);
          return {
            floating: Z,
            getFloatingProps: At,
            getReferenceProps: Pr,
            open: Mt,
            presentation: Dt,
            sizing: { width: ie, maxHeight: oe, gutter: pe, scroll: Ee },
          };
        }
        function U(X, le, J) {
          const { onOpenChange: ie, placement: oe } = X,
            pe = J === "anchor";
          return (0, Q.we)({
            open: le,
            onOpenChange: ie,
            middleware: pe ? ue(X) : [],
            whileElementsMounted: pe ? H.ll : void 0,
            placement: oe && typeof oe == "object" ? oe.initial : oe,
            strategy: "fixed",
            platform: {
              ...H.iD,
              getOffsetParent: (Ee) => Ee?.ownerDocument?.defaultView ?? window,
            },
          });
        }
        function ue(X) {
          const { gutter: le = 0, placement: J } = X,
            ie = [],
            oe = J && typeof J == "object";
          return (
            oe && J.offset
              ? ie.push((0, q.cY)(J.offset))
              : (!oe || J.offset === void 0) && ie.push((0, q.cY)(2)),
            oe && J.flip
              ? ie.push((0, q.UU)(J.flip))
              : (!oe || J.flip === void 0) && ie.push((0, q.UU)()),
            oe && J.shift
              ? ie.push((0, q.BN)(J.shift))
              : (!oe || J.shift === void 0) && ie.push((0, q.BN)()),
            ie.push(
              (0, q.Ej)({
                apply: (pe) => {
                  const { rects: Ee, elements: Mt, availableHeight: Dt } = pe,
                    Z = {
                      boxSizing: "border-box",
                      zIndex: "1",
                      "-webkit-app-region": "no-drag",
                    };
                  switch ((X.scroll && (Z.overflowY = "auto"), X.width)) {
                    case "target": {
                      Z.width = `${Ee.reference.width}px`;
                      break;
                    }
                    case "content": {
                      Z.width = `${Ee.floating.width}px`;
                      break;
                    }
                    case "dropdown": {
                      let hn = Ee.reference.width;
                      Ee.floating.width > hn &&
                        hn < 200 &&
                        (hn = Ee.floating.width),
                        (Z.width = `${hn}px`);
                    }
                  }
                  typeof X.width == "function" &&
                    (Z.width = X.width({
                      unContentWidth: Ee.floating.width,
                      unTargetWidth: Ee.reference.width,
                    }));
                  const ge =
                    typeof le == "number" ? `${le}px` : `var(--spacing-${le})`;
                  typeof X.maxHeight == "function"
                    ? (Z.maxHeight = X.maxHeight({
                        unAvailableHeight: Dt,
                        gutter: ge,
                      }))
                    : typeof X.maxHeight == "number"
                      ? (Z.maxHeight = `min( calc( ${Dt}px - ${ge} ), ${X.maxHeight}px )`)
                      : typeof le == "number"
                        ? (Z.maxHeight = `${Dt - le}px`)
                        : (Z.maxHeight = `calc( ${Dt}px - var(--spacing-${le}) )`),
                    Object.assign(Mt.floating.style, Z),
                    Mt.floating.style.setProperty(
                      "--popover-max-height",
                      Z.maxHeight,
                    );
                },
              }),
            ),
            ie
          );
        }
        const me = { Root: L, Anchor: re, Positioner: K, FocusManager: ae };
      },
      12204: (b, ce, i) => {
        "use strict";
        i.d(ce, { V: () => H });
        var t = i(7850),
          m = i(31857);
        const Q = {
          up: "rotate( 180, 10, 10 )",
          left: "rotate( 90, 10, 10 )",
          right: "rotate( 270, 10, 10 )",
        };
        function H(q) {
          const { direction: k = "down" } = q,
            Y = Q[k];
          return (0, t.jsx)(m.I, {
            ...q,
            viewBox: 20,
            children: (0, t.jsx)("path", {
              transform: Y,
              d: "M5.14541 6.89977L10.0063 12.2027L14.8671 6.89977C15.3557 6.36674 16.145 6.36674 16.6336 6.89977C17.1221 7.4328 17.1221 8.29385 16.6336 8.82688L10.8832 15.1002C10.3946 15.6333 9.60537 15.6333 9.11678 15.1002L3.36644 8.82688C2.87785 8.29385 2.87785 7.4328 3.36644 6.89977C3.85503 6.38041 4.65682 6.36674 5.14541 6.89977Z",
              fill: "currentColor",
            }),
          });
        }
      },
      95994: (b, ce, i) => {
        "use strict";
        i.d(ce, { x: () => S });
        var t = i(7850),
          m = i(70182),
          Q = i(64238),
          H = i.n(Q),
          q = i(8928),
          k = i(69289),
          Y = i(75180),
          C = i.n(Y),
          T = i(3166);
        function S(_) {
          const {
              as: $ = "div",
              ref: de,
              focusable: se,
              navProps: N,
              ...L
            } = _,
            re = (0, T.Qn)(),
            K = (0, k.mz)({ ...L, className: H()(Y.Grid, _.className) }, V),
            ae = se ?? N?.focusable ?? !!L.onClick,
            ee = (0, t.jsx)($, { ref: de, ...K });
          return re
            ? (0, t.jsx)(m.J, {
                "flow-children": "grid",
                ...(N || {}),
                focusable: ae,
                children: ee,
              })
            : ee;
        }
        const V = [
          ...q.h,
          {
            prop: "display",
            responsive: !0,
            className: Y.Display,
            cssProperty: "--grid-display",
          },
          {
            prop: "columns",
            responsive: !0,
            className: Y.Columns,
            cssProperty: "--grid-columns",
          },
          {
            prop: "rows",
            responsive: !0,
            className: Y.Rows,
            cssProperty: "--grid-rows",
          },
          {
            prop: "autoColumns",
            responsive: !0,
            className: Y.AutoColumns,
            cssProperty: "--grid-auto-columns",
          },
          {
            prop: "autoRows",
            responsive: !0,
            className: Y.AutoRows,
            cssProperty: "--grid-auto-rows",
          },
          {
            prop: "autoFlow",
            responsive: !0,
            className: Y.AutoFlow,
            cssProperty: "--grid-auto-flow",
          },
          {
            prop: "areas",
            responsive: !0,
            className: Y.Areas,
            cssProperty: "--grid-areas",
          },
          {
            prop: "flow",
            responsive: !0,
            className: Y.Flow,
            cssProperty: "--grid-flow",
          },
          {
            prop: "alignContent",
            responsive: !0,
            className: Y.AlignContent,
            cssProperty: "--grid-align-content",
          },
          {
            prop: "justifyContent",
            responsive: !0,
            className: Y.JustifyContent,
            cssProperty: "--grid-justify-content",
          },
          {
            prop: "alignItems",
            responsive: !0,
            className: Y.AlignItems,
            cssProperty: "--grid-align-items",
          },
          {
            prop: "justifyItems",
            responsive: !0,
            className: Y.JustifyItems,
            cssProperty: "--grid-justify-items",
          },
          {
            prop: "gap",
            responsive: !0,
            className: Y.Gap,
            cssProperty: (_) => ["--grid-gap", `var(--spacing-${_})`],
          },
          {
            prop: "gapX",
            responsive: !0,
            className: Y.Gap,
            cssProperty: (_) => ["--grid-gap-x", `var(--spacing-${_})`],
          },
          {
            prop: "gapY",
            responsive: !0,
            className: Y.Gap,
            cssProperty: (_) => ["--grid-gap-y", `var(--spacing-${_})`],
          },
        ];
      },
      57152: (b, ce, i) => {
        "use strict";
        i.d(ce, { D: () => $ });
        var t = i(7850),
          m = i(39049),
          Q = i(8928),
          H = i(15252),
          q = i(69289),
          k = i(90626);
        function Y(N) {
          const { depth: L } = useContext(C);
          return jsx(C.Provider, {
            value: { depth: L + 1 },
            children: jsx(Box, { ...N }),
          });
        }
        const C = k.createContext({ depth: 0 });
        function T() {
          return (0, k.useContext)(C).depth;
        }
        var S = i(3877),
          V = i(64238),
          _ = i.n(V);
        function $(N) {
          const { level: L = "auto", className: re, color: K } = N,
            ae = T(),
            ee = se(L, ae);
          return (0, t.jsx)(ee, {
            ...(0, q.mz)(
              { ...N, className: _()((0, S.T)(), m.Heading, re) },
              de,
            ),
          });
        }
        const de = [
          ...H.U6,
          ...Q.L,
          {
            prop: "size",
            responsive: !0,
            className: (N) => m[`HeadingSize-${N}`],
          },
        ];
        function se(N, L) {
          if (N === "auto" && L === 0) return "h1";
          const re = N === "auto" ? L.toString() : N;
          return /^[1-6]$/.test(re)
            ? "h" + re
            : N === "auto"
              ? (console.error(
                  '<Section> nesting has exceeded "h6" for headings.',
                ),
                "h6")
              : (console.error(
                  `Attempt to render invalid heading level, "${re}".`,
                ),
                "h1");
        }
      },
      79014: (b, ce, i) => {
        "use strict";
        i.d(ce, { A: () => Q, i: () => m });
        var t = i(90626);
        function m(H, ...q) {
          const k = [],
            Y = new RegExp(/(.*?)<(\d+)>(.*?)<\/(\2)>/, "gs");
          let C = 0,
            T;
          for (; (T = Y.exec(H)); ) {
            (C += T[0].length), k.push(T[1]);
            const S = parseInt(T[2]),
              V = T[3] || "",
              _ = m(V, ...q),
              de = (S >= 1 && S <= q.length ? q[S - 1] : null)
                ? t.cloneElement(q[S - 1], {}, V ? _ : null)
                : V;
            k.push(de);
          }
          return k.push(H.substr(C)), t.createElement(t.Fragment, null, ...k);
        }
        function Q(H, q = ["b", "i", "br"]) {
          const k = q.join("|"),
            Y = [],
            C = new RegExp(
              `(?<before>.*?)<(?<tagname>${k})>(?<contents>.*?)(?<endtag><\\/\\2>|$)`,
              "gs",
            );
          let T = 0,
            S;
          for (; (S = C.exec(H)); ) {
            if (!S.groups) continue;
            if (!S.groups?.endtag) {
              const se = S.groups.before.length + S.groups.tagname.length + 2;
              (T += se), (C.lastIndex = S.index + se), Y.push(S.groups.before);
              const N = S[2],
                L = t.createElement(N);
              Y.push(L);
              continue;
            }
            (T += S[0].length), Y.push(S.groups.before);
            const V = S.groups.tagname,
              _ = S.groups.contents || "";
            let $ = null;
            _ && ($ = Q(_, q));
            const de = t.createElement(V, {}, $);
            Y.push(de);
          }
          return Y.push(H.slice(T)), t.createElement(t.Fragment, null, ...Y);
        }
      },
      76962: (b, ce, i) => {
        "use strict";
        i.d(ce, { y: () => V });
        var t = i(7850),
          m = i(24660),
          Q = i(38566),
          H = i(54130),
          q = i(64238),
          k = i.n(q),
          Y = i(90626),
          C = i(3166),
          T = i(88208),
          S = i.n(T);
        const V = Object.assign(_, { Root: $, Content: se });
        function _(N) {
          const { children: L, className: re, ...K } = N;
          return (0, t.jsx)(V.Root, {
            ...K,
            children: (0, t.jsx)(V.Content, { className: re, children: L }),
          });
        }
        function $(N) {
          const {
              onClose: L,
              className: re,
              navID: K,
              children: ae,
              allowScrollBehind: ee,
              ...je
            } = N,
            [te, U] = Y.useState(!1),
            ue = Y.useCallback((X) => {
              X &&
                (X.showModal(),
                X.ownerDocument.defaultView &&
                  U(
                    X.ownerDocument.body.scrollHeight >
                      X.ownerDocument.defaultView.innerHeight,
                  ));
            }, []),
            me = Y.useCallback(
              (X) => {
                X.target == X.currentTarget && L("backdropclick");
              },
              [L],
            );
          return (0, t.jsx)(de, {
            navID: K ?? "ModalDialog",
            onClose: L,
            children: (0, t.jsx)("dialog", {
              ref: ue,
              className: k()(T.ModalDialog, !ee && te && T.PreventScroll, re),
              onClose: () => L("onclose"),
              onClick: me,
              ...je,
              children: (0, t.jsx)(H.q, { children: ae }),
            }),
          });
        }
        function de(N) {
          const { navID: L, onClose: re, children: K } = N,
            ae = Y.useCallback(() => re("cancelbutton"), [re]),
            ee = Y.useRef(void 0);
          return (
            (0, m.O7)(ee, !0, !0),
            (0, C.Qn)()
              ? (0, t.jsx)(Q.D6, {
                  navID: L ?? "ModalDialog",
                  onCancelButton: ae,
                  modal: !0,
                  navTreeRef: ee,
                  children: K,
                })
              : (0, t.jsx)(t.Fragment, { children: K })
          );
        }
        function se(N) {
          const { className: L, children: re } = N;
          return (0, t.jsx)("div", {
            className: k()(T.ModalDialogContent, L),
            onClick: (K) => K.stopPropagation(),
            children: re,
          });
        }
      },
      47604: (b, ce, i) => {
        "use strict";
        i.d(ce, { s: () => T });
        var t = i(7850),
          m = i(19298),
          Q = i(64238),
          H = i.n(Q),
          q = i(36118),
          k = i(76962),
          Y = i(5598),
          C = i.n(Y);
        function T(S) {
          const {
            onClose: V,
            className: _,
            navID: $,
            children: de,
            strTitle: se,
            wideMode: N,
            ...L
          } = S;
          return (0, t.jsx)(k.y, {
            onClose: V,
            navID: $ ?? "SimpleModalDialog",
            ...L,
            children: (0, t.jsxs)("div", {
              className: H()(_, C().SimpleModalDialog, N && C().WideMode),
              children: [
                " ",
                (0, t.jsxs)(m.Z, {
                  className: C().SimpleModalDialogHeader,
                  children: [
                    se &&
                      (0, t.jsx)("div", {
                        className: C().SimpleModalDialogTitle,
                        children: se,
                      }),
                    (0, t.jsx)("button", {
                      onClick: (re) => (V("xclick"), re.preventDefault(), !1),
                      className: C().XButton,
                      children: (0, t.jsx)(q.tmm, {}),
                    }),
                  ],
                }),
                (0, t.jsx)("div", {
                  className: C().SimpleModalContentCtn,
                  children: de,
                }),
              ],
            }),
          });
        }
      },
      27990: (b, ce, i) => {
        "use strict";
        i.d(ce, { W4: () => Y, h$: () => T });
        var t = i(7850),
          m = i(90626),
          Q = i(72609),
          H = i(38340);
        function q(S, V) {
          return {
            store_page_asset_url: `${Q.TS.BASE_URL_SHARED_CDN}store_item_assets/steam/apps/${S}/%s?t=${V}`,
          };
        }
        const k = m.createContext({ store_page_asset_url: "" });
        function Y(S) {
          const V =
            S.store_page_asset_url !== void 0
              ? { store_page_asset_url: S.store_page_asset_url }
              : q(S.appid, S.app_last_modified);
          return (0, t.jsx)(k.Provider, { value: V, children: S.children });
        }
        const C = () => m.useContext(k);
        function T() {
          const { store_page_asset_url: S } = C();
          return m.useCallback(
            (V) => {
              if (V)
                if (V.startsWith(H.qR + "/")) {
                  const _ = V.replace(H.qR + "/", "");
                  return S.replace("%s", _);
                } else return V;
            },
            [S],
          );
        }
      },
      45497: (b, ce, i) => {
        "use strict";
        i.d(ce, { n: () => ee });
        var t = i(7850),
          m = i(29950),
          Q = i(33770),
          H = i(7487),
          q = i(99412),
          k = i(24660),
          Y = i(90626),
          C = i(70187),
          T = i(39239),
          S = i(53113),
          V = i(3166),
          _ = i(94162),
          $ = i(27990),
          de = i(33001),
          se = i.n(de);
        function N(te) {
          return new H.OJ(new H.R8());
        }
        function L(te) {
          const U = new Map([
            ...Array.from(C.W4.entries()),
            ["img", { Constructor: je, autocloses: !1 }],
            ["sup", { Constructor: re, autocloses: !1 }],
            [
              "h6",
              { Constructor: K, autocloses: !1, skipFollowingNewline: !0 },
            ],
          ]);
          return te && U.set("url", { Constructor: ae, autocloses: !1 }), U;
        }
        function re(te) {
          return (0, t.jsx)("sup", { children: te.children });
        }
        function K(te) {
          return (0, t.jsx)("h6", { children: te.children });
        }
        function ae(te) {
          let U = (0, m.J)(C.j$(te.args));
          return (
            !U &&
              typeof te.children == "string" &&
              (0, S.DZ)(te.children) &&
              (U = (0, m.J)(te.children)),
            U
              ? (0, t.jsx)(k.Ii, { href: U, children: te.children })
              : te.children || ""
          );
        }
        function ee(te) {
          const { text: U, languageOverride: ue, bBypassLinkFilter: me } = te,
            [X] = (0, Y.useState)(new Q.B(L(me), N, ue || q.Bhc));
          return (0, t.jsx)("div", {
            className: se().StorePageBBCode,
            children: X.ParseBBCode(U, {}, !0),
          });
        }
        function je(te) {
          const { showErrorInfo: U } = te.context,
            ue = (0, $.h$)(),
            me = te.args.alt ?? "";
          if (!!te.args.mp4 || te.args.webm) {
            const le = ue(te.args.webm),
              J = ue(te.args.mp4),
              ie = ue(te.args.poster),
              oe = (0, _.Wr)() || (0, _.Ae)(),
              pe = (Ee) => {
                const Mt = Ee.currentTarget;
                Mt.paused ? Mt.play() : Mt.pause();
              };
            return (0, t.jsxs)("video", {
              className: se().StoreVideo,
              poster: ie,
              "aria-label": me,
              autoPlay: !0,
              muted: !0,
              loop: !0,
              playsInline: !0,
              onClick: pe,
              children: [
                le &&
                  !oe &&
                  (0, t.jsx)("source", { src: le, type: "video/webm" }),
                J &&
                  !V.TS.IN_CLIENT &&
                  (0, t.jsx)("source", { src: J, type: "video/mp4" }),
              ],
            });
          } else {
            const le = ue(te.args.src);
            return U
              ? (0, t.jsx)(T.i, { className: se().StoreImage, src: le })
              : (0, t.jsx)("img", {
                  className: se().StoreImage,
                  src: le,
                  alt: me,
                });
          }
        }
      },
      21079: (b, ce, i) => {
        "use strict";
        i.d(ce, {
          Dk: () => de,
          Mu: () => L,
          Y8: () => re,
          ws: () => se,
          zo: () => N,
        });
        var t = i(72604),
          m = i(35038),
          Q = i(83153),
          H = i(9682),
          q = i(41735),
          k = i.n(q),
          Y = i(80902),
          C = i(75233),
          T = i(68312),
          S = i(77187),
          V = i(3166),
          _ = i(90626);
        function $(ee) {
          return ["AppRelevanceStore", "FriendsRecommended", ee];
        }
        function de(ee) {
          const je = (0, T.KV)();
          return (0, Y.I)({
            queryKey: $(ee),
            queryFn: () => K(je, ee),
            enabled: V.iA.logged_in,
          });
        }
        function se() {
          const ee = (0, C.jE)();
          return _.useCallback(
            (je, te) => {
              ee.setQueryData($(je), te);
            },
            [ee],
          );
        }
        function N(ee) {
          return (0, Y.I)({
            queryKey: ["AppRelevanceStore", "StoreRelevance", ee],
            queryFn: () => ae(ee),
            enabled: V.iA.logged_in,
          });
        }
        function L() {
          return (0, S.PG)("App Relevance Store Top Sellers", {
            sort: Q.Dq.Rm,
            start: 0,
            count: 100,
          });
        }
        function re() {
          const { data: ee } = L();
          return ee;
        }
        async function K(ee, je) {
          const te = m.w.Init(H.KV);
          te.Body().set_appid(je);
          const U = await H.YK.GetFriendsRecommendedApp(ee, te),
            ue = U.GetEResult();
          if (ue == t.R) return U.Body().toObject();
          throw `Error ${ue} failed to call GetFriendsRecommendedApp ${je}`;
        }
        async function ae(ee) {
          let je = { appid: ee },
            te = { arrSimilarPlayedApps: [], bRecommendedByIR: !1 };
          const ue = (
            await k().get(
              `${V.TS.STORE_BASE_URL}explore/ajaxgetstorerelevancedata`,
              { params: je, withCredentials: !0, timeout: 1e4 },
            )
          ).data;
          return (
            ue &&
              ue.success == t.R &&
              (ue.results.similar_played_apps &&
                (te.arrSimilarPlayedApps = ue.results.similar_played_apps.map(
                  (me) => ({
                    appid: me.appid,
                    playtimeForever: me.playtime_forever,
                  }),
                )),
              ue.results.recommended_by_ir && (te.bRecommendedByIR = !0)),
            te
          );
        }
      },
      25509: (b, ce, i) => {
        "use strict";
        i.d(ce, { k: () => Y });
        var t = i(14947),
          m = i(98609),
          Q = Object.defineProperty,
          H = Object.getOwnPropertyDescriptor,
          q = (C, T, S, V) => {
            for (
              var _ = V > 1 ? void 0 : V ? H(T, S) : T, $ = C.length - 1, de;
              $ >= 0;
              $--
            )
              (de = C[$]) && (_ = (V ? de(T, S, _) : de(_)) || _);
            return V && _ && Q(T, S, _), _;
          };
        class k {
          m_ItemDefinition = null;
          m_ItemKV = null;
          constructor(T, S) {
            (0, t.Gn)(this), this.LoadItemDefinition(T, S);
          }
          LoadItemDefinition(T, S) {
            T
              ? (this.m_ItemDefinition = {
                  item_type: T.item_type,
                  item_class: T.item_class,
                  item_description: T.item_description,
                  editor_accountid: T.editor_accountid,
                  deleted: T.deleted,
                  active: T.active,
                  appid: T.appid,
                  item_image_composed: T.item_image_composed,
                  item_image_large: T.item_image_large,
                  item_image_small: T.item_image_small,
                  item_key_values: T.item_key_values,
                  item_movie_mp4: T.item_movie_mp4,
                  item_movie_mp4_small: T.item_movie_mp4_small,
                  item_internal_name: T.item_name,
                  item_series: T.item_series,
                  item_movie_webm: T.item_movie_webm,
                  item_movie_webm_small: T.item_movie_webm_small,
                  item_image_composed_foil: T.item_image_composed_foil,
                  item_last_changed: T.item_last_changed,
                  broadcast_channel_id: T.broadcast_channel_id,
                })
              : (this.m_ItemDefinition = S),
              (this.m_ItemKV = JSON.parse(
                this.m_ItemDefinition.item_key_values,
              ));
          }
          get AppID() {
            return this.m_ItemDefinition.appid;
          }
          get BIsActive() {
            return this.m_ItemDefinition.active;
          }
          get ItemID() {
            return this.m_ItemDefinition.item_type;
          }
          get BIsDeleted() {
            return this.m_ItemDefinition.deleted;
          }
          get ItemClass() {
            return this.m_ItemDefinition.item_class;
          }
          get CommunityItemDef() {
            return this.m_ItemDefinition;
          }
        }
        q([t.sH], k.prototype, "m_ItemDefinition", 2),
          q([t.sH], k.prototype, "m_ItemKV", 2);
        function Y(C, T) {
          return `${m.TS.COMMUNITY_ASSETS_BASE_URL}images/items/${C}/${T}`;
        }
      },
      63547: (b, ce, i) => {
        "use strict";
        i.d(ce, { QW: () => se, VZ: () => de, g: () => _, kF: () => V });
        var t = i(72604),
          m = i(35038),
          Q = i(55051),
          H = i(72609),
          q = i(80902),
          k = i(75233),
          Y = i(51614),
          C = i(90626),
          T = i(68312);
        const S = "PlaytestInvites";
        function V() {
          const N = (0, T.KV)();
          return (0, q.I)({
            queryKey: [S],
            queryFn: async () => {
              const L = m.w.Init(Q.rX),
                re = await Q.BX.GetInvites(N, L);
              if (re.GetEResult() != t.R)
                throw new Error(
                  `Error from usePlaytestInvite: ${re.GetEResult()} ${re.GetErrorMessage()}`,
                );
              return re.Body()?.toObject().invites ?? [];
            },
          });
        }
        function _(N) {
          const L = (0, T.KV)(),
            re = (0, k.jE)();
          return (0, Y.n)({
            mutationFn: async (K) => {
              const ae = m.w.Init(Q.q);
              ae.Body().add_invite_ids(N),
                ae.Body().set_status(K.bAccept ? Q.b1.T5 : Q.b1.eh);
              const ee = await Q.BX.UpdateInvites(L, ae);
              if (ee.GetEResult() != t.R)
                throw {
                  result: ee.GetEResult(),
                  message: `Error from UpdatePlaytestInvite: ${ee.GetErrorMessage()} ( ${ee.GetEResult()} )`,
                };
            },
            onSuccess: (K, ae) => {
              re.setQueryData([S], (ee) =>
                ee.map((je) =>
                  je.invite_id === N
                    ? { ...je, status: ae.bAccept ? Q.b1.T5 : Q.b1.eh }
                    : je,
                ),
              );
            },
            onError: () => {
              re.invalidateQueries({ queryKey: [S] });
            },
          });
        }
        function $(N) {
          return ["PlaytestUserStatus", N];
        }
        function de(N) {
          const L = (0, T.KV)();
          return (0, q.I)({
            queryKey: $(N),
            queryFn: async () => {
              if (H.iA.logged_in) {
                const re = m.w.Init(Q.eW);
                N && re.Body().set_appid(N);
                const K = await Q.BX.GetUserStatus(L, re);
                if (K.GetEResult() != t.R)
                  throw new Error(
                    `Error from usePlaytestUserStatus: ${K.GetEResult()} ${K.GetErrorMessage()}`,
                  );
                return K.Body()?.toObject().results ?? [];
              } else return [];
            },
            staleTime: 600 * 1e3,
          });
        }
        function se() {
          const N = (0, k.jE)();
          return C.useCallback(
            (L, re) => {
              N.setQueryData($(L), re);
            },
            [N],
          );
        }
      },
      90114: (b, ce, i) => {
        "use strict";
        i.r(ce),
          i.d(ce, {
            OpenInDesktopClient: () => T,
            default: () => V,
            useOpenWebInSteamClient: () => S,
          });
        var t = i(7850),
          m = i(90626),
          Q = i(25792),
          H = i(97824),
          q = i.n(H),
          k = i(3166),
          Y = i(97996),
          C = i(18210);
        const T = (0, Q.Nr)(function ($) {
          const { fnOpenInSteamClient: de } = S();
          return (0, t.jsx)("div", {
            className: H.OpenInBannerContainer,
            children: (0, t.jsxs)("div", {
              className: H.OpenInBannerContent,
              children: [
                (0, t.jsx)("div", {
                  className: H.BannerButtonContainer,
                  children: (0, t.jsx)("div", {
                    onClick: de,
                    className: H.BannerButton,
                    children: (0, C.we)(
                      "#OpenInDesktopAppBanner_OpenAppButton",
                    ),
                  }),
                }),
                (0, t.jsx)("div", {
                  className: H.BannerMessage,
                  children: (0, t.jsxs)("div", {
                    className: H.BannerTitle,
                    children: [
                      (0, t.jsx)("b", {
                        children: (0, C.we)(
                          "#OpenInDesktopAppBanner_NotSignedIn",
                        ),
                      }),
                      (0, t.jsx)("br", {}),
                      (0, C.we)("#OpenInDesktopAppBanner_Body"),
                    ],
                  }),
                }),
              ],
            }),
          });
        });
        function S() {
          return {
            fnOpenInSteamClient: m.useCallback(() => {
              let $ = `${(0, k.yl)()}//openurl/`;
              const de = (0, Y.VY)("browserid");
              if (de) {
                const se = new URL(window.location.href),
                  N = new URLSearchParams(se.search);
                N.set("utm_bid", de),
                  ($ += se.origin + se.pathname + "?" + N.toString() + se.hash);
              } else $ += window.location.href;
              window.location.href = $;
            }, []),
          };
        }
        const V = T;
      },
      62038: (b, ce, i) => {
        "use strict";
        i.r(ce),
          i.d(ce, {
            AccessibilityFeatureDisplay: () => se,
            AccessibilityFeaturesFromCategories: () => de,
            AccessibilityIcon: () => N,
          });
        var t = i(7850),
          m = i(90626),
          Q = i(18210),
          H = i(3166),
          q = i(63404),
          k = i.n(q),
          Y = i(24660),
          C = i(99412);
        const T = {
            bAccessibilityDifficultyLevels:
              "#Accessibility_Feature_AdjustableDifficulty",
            bAccessibilitySaveAnytime: "#Accessibility_Feature_SaveAnytime",
            bAccessibilityNarratedMenus: "#Accessibility_Feature_NarratedMenus",
            bAccessibilityBackgroundVolumeControls:
              "#Accessibility_Feature_CustomVolumeControls",
            bAccessibilityStereoSound: "#Accessibility_Feature_StereoSound",
            bAccessibilitySurroundSound: "#Accessibility_Feature_SurroundSound",
            bAccessibilityResizableUI:
              "#Accessibility_Feature_AdjustableTextSize",
            bAccessibilitySubtitles: "#Accessibility_Feature_SubtitleOptions",
            bAccessibilityColorAlternatives:
              "#Accessibility_Feature_ColorAlternatives",
            bAccessibilityCameraComfort: "#Accessibility_Feature_CameraComfort",
            bAccessibilityKeyboardOnlyOption:
              "#Accessibility_Feature_KeyboardOnlyOption",
            bAccessibilityMouseOnlyOption:
              "#Accessibility_Feature_MouseOnlyOption",
            bAccessibilityTouchOnlyOption:
              "#Accessibility_Feature_TouchOnlyOption",
            bAccessibilityPlayableWithoutQuicktimeEvents:
              "#Accessibility_Feature_WithoutQuickTimeEvents",
            bAccessibilityChatTexttoSpeech:
              "#Accessibility_Feature_TextToSpeech",
            bAccessibilityChatSpeechtoText:
              "#Accessibility_Feature_SpeechToText",
            bAccessibilityPlayableAtYourOwnPace:
              "#Accessibility_Feature_PlayableAtYourOwnPace",
            bAccessibilityPlayableWithoutVision:
              "#Accessibility_Feature_PlayableWithoutVision",
            bAccessibilityContrastControls:
              "#Accessibility_Feature_ContrastControls",
          },
          S = {
            bAccessibilityDifficultyLevels: "adjustable_difficulty",
            bAccessibilitySaveAnytime: "save_anytime",
            bAccessibilityNarratedMenus: "narrated_game_menus",
            bAccessibilityBackgroundVolumeControls: "custom_volume_controls",
            bAccessibilityStereoSound: "stereo_sound",
            bAccessibilitySurroundSound: "surround_sound",
            bAccessibilityResizableUI: "adjustable_text_size",
            bAccessibilitySubtitles: "subtitle_options",
            bAccessibilityColorAlternatives: "color_alternatives",
            bAccessibilityCameraComfort: "camera_comfort",
            bAccessibilityKeyboardOnlyOption: "keyboard_only_option",
            bAccessibilityMouseOnlyOption: "mouse_only_option",
            bAccessibilityTouchOnlyOption: "touch_only_option",
            bAccessibilityPlayableWithoutQuicktimeEvents:
              "playable_without_timed_input",
            bAccessibilityChatTexttoSpeech: "chat_text_to_speech",
            bAccessibilityChatSpeechtoText: "chat_speech_to_text",
            bAccessibilityPlayableAtYourOwnPace: "playable_at_your_own_pace",
            bAccessibilityPlayableWithoutVision: "playable_without_vision",
            bAccessibilityContrastControls: "contrast_controls",
          };
        var V = ((K) => (
          (K.Gameplay = "gameplay"),
          (K.Visual = "visual"),
          (K.Audio = "audio"),
          (K.Input = "input"),
          K
        ))(V || {});
        const _ = {
            bAccessibilityDifficultyLevels: "gameplay",
            bAccessibilitySaveAnytime: "gameplay",
            bAccessibilityNarratedMenus: "audio",
            bAccessibilityBackgroundVolumeControls: "audio",
            bAccessibilityStereoSound: "audio",
            bAccessibilitySurroundSound: "audio",
            bAccessibilityResizableUI: "visual",
            bAccessibilitySubtitles: "visual",
            bAccessibilityColorAlternatives: "visual",
            bAccessibilityCameraComfort: "visual",
            bAccessibilityPlayableWithoutVision: "visual",
            bAccessibilityContrastControls: "visual",
            bAccessibilityKeyboardOnlyOption: "input",
            bAccessibilityMouseOnlyOption: "input",
            bAccessibilityTouchOnlyOption: "input",
            bAccessibilityPlayableWithoutQuicktimeEvents: "input",
            bAccessibilityChatTexttoSpeech: "input",
            bAccessibilityChatSpeechtoText: "input",
            bAccessibilityPlayableAtYourOwnPace: "input",
          },
          $ = {
            gameplay: "#Accessibility_Group_Gameplay",
            visual: "#Accessibility_Group_Visual",
            audio: "#Accessibility_Group_Audio",
            input: "#Accessibility_Group_Input",
          };
        function de(K) {
          return {
            bAccessibilityResizableUI: K.includes(C.mWc),
            bAccessibilitySubtitles: K.includes(C.sCr),
            bAccessibilityColorAlternatives: K.includes(C.eEM),
            bAccessibilityCameraComfort: K.includes(C.YAh),
            bAccessibilityBackgroundVolumeControls: K.includes(C.Tby),
            bAccessibilityStereoSound: K.includes(C.a2r),
            bAccessibilitySurroundSound: K.includes(C.Obu),
            bAccessibilityNarratedMenus: K.includes(C.C0f),
            bAccessibilityChatSpeechtoText: K.includes(C.FpT),
            bAccessibilityChatTexttoSpeech: K.includes(C.r_E),
            bAccessibilityPlayableWithoutQuicktimeEvents: K.includes(C.eY9),
            bAccessibilityKeyboardOnlyOption: K.includes(C.TQL),
            bAccessibilityMouseOnlyOption: K.includes(C.beA),
            bAccessibilityTouchOnlyOption: K.includes(C.Pw_),
            bAccessibilityDifficultyLevels: K.includes(C.j2d),
            bAccessibilitySaveAnytime: K.includes(C.Rnx),
            bAccessibilityPlayableAtYourOwnPace: K.includes(C.eAR),
            bAccessibilityPlayableWithoutVision: K.includes(C.tIg),
            bAccessibilityContrastControls: K.includes(C.vVO),
          };
        }
        function se(K) {
          const [ae, ee] = (0, m.useState)(K.initialOpen ?? !1),
            je = m.useId(),
            te = Object.entries(K.features)
              .filter(([me, X]) => X)
              .map(([me]) => me);
          if (te.length === 0) return null;
          const U = {};
          te.forEach((me) => {
            const X = _[me];
            (U[X] ??= []), U[X].push(me);
          });
          const ue = Object.keys(U).length > 1;
          return (0, t.jsxs)("details", {
            className: k().Details,
            open: ae,
            onToggle: (me) => ee(me.currentTarget.open),
            children: [
              (0, t.jsxs)(Y.f_, {
                className: k().Summary,
                children: [
                  (0, t.jsx)("div", {
                    className: k().ImageContainer,
                    children: (0, t.jsx)(N, {
                      className: k().CategoryIcon,
                      "aria-label": "",
                    }),
                  }),
                  (0, t.jsxs)("span", {
                    className: k().FeatureNameContainer,
                    id: je,
                    children: [
                      (0, t.jsx)("span", {
                        className: k().FeatureName,
                        children: ae
                          ? (0, Q.we)("#AccessibilityFeatures")
                          : (0, Q.we)(
                              "#AccessibilityFeaturesWithCount",
                              te.length,
                            ),
                      }),
                      (0, t.jsx)("a", {
                        className: k().InfoLink,
                        href: `${H.TS.HELP_BASE_URL}faqs/view/02F5-ACB2-6038-0F36`,
                        target: "_blank",
                        children: "?",
                      }),
                    ],
                  }),
                ],
              }),
              (0, t.jsxs)("ul", {
                className: k().FeatureList,
                "aria-labelledby": je,
                children: [
                  ue &&
                    (0, t.jsxs)(t.Fragment, {
                      children: [
                        U.gameplay &&
                          (0, t.jsx)("li", {
                            children: (0, t.jsx)(L, {
                              group: "gameplay",
                              features: U.gameplay,
                              open: ae,
                            }),
                          }),
                        U.visual &&
                          (0, t.jsx)("li", {
                            children: (0, t.jsx)(L, {
                              group: "visual",
                              features: U.visual,
                              open: ae,
                            }),
                          }),
                        U.audio &&
                          (0, t.jsx)("li", {
                            children: (0, t.jsx)(L, {
                              group: "audio",
                              features: U.audio,
                              open: ae,
                            }),
                          }),
                        U.input &&
                          (0, t.jsx)("li", {
                            children: (0, t.jsx)(L, {
                              group: "input",
                              features: U.input,
                              open: ae,
                            }),
                          }),
                      ],
                    }),
                  !ue &&
                    te.map((me) =>
                      (0, t.jsx)(
                        "li",
                        { children: (0, t.jsx)(re, { feature: me, open: ae }) },
                        me,
                      ),
                    ),
                ],
              }),
            ],
          });
        }
        function N(K) {
          return (0, t.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            version: "1.1",
            viewBox: "0 0 1200 1200",
            ...K,
            children: [
              (0, t.jsx)("path", {
                fill: "currentColor",
                d: "m600 60c-298.03 0-540 241.97-540 540s241.97 540 540 540 540-241.97 540-540-241.97-540-540-540zm0 95.555c245.3 0 444.46 199.14 444.46 444.45s-199.15 444.45-444.46 444.45c-245.29 0-444.45-199.14-444.45-444.45s199.15-444.45 444.45-444.45z",
                fillRule: "evenodd",
              }),
              (0, t.jsx)("path", {
                fill: "currentColor",
                d: "m521.1 573.13c-9.3242 107.1-33.887 210.97-72.18 311.96-9.3477 24.66 3.0859 52.262 27.73 61.609 24.66 9.3477 52.262-3.0703 61.609-27.73 27.109-71.496 47.832-144.32 61.738-218.58 13.906 74.258 34.633 147.09 61.738 218.58 9.3477 24.66 36.949 37.078 61.609 27.73 24.66-9.3477 37.078-36.949 27.73-61.609-38.27-100.93-62.82-204.76-72.156-311.76 57.227-2.8086 114.48-8.8086 171.73-18.109 26.027-4.2344 43.727-28.801 39.492-54.828-4.2227-26.016-28.789-43.715-54.816-39.492-156.98 25.512-313.96 24.504-470.94-0.046875-26.051-4.0664-50.508 13.777-54.59 39.828-4.0664 26.051 13.777 50.508 39.828 54.574 57.145 8.9414 114.3 14.941 171.47 17.867z",
                fillRule: "evenodd",
              }),
              (0, t.jsx)("path", {
                fill: "currentColor",
                d: "m686.23 353.69c0 47.625-38.605 86.234-86.23 86.234s-86.23-38.609-86.23-86.234 38.605-86.23 86.23-86.23 86.23 38.605 86.23 86.23",
                fillRule: "evenodd",
              }),
            ],
          });
        }
        function L(K) {
          const ae = m.useId();
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)("span", {
                className: k().GroupLabel,
                id: ae,
                children: (0, Q.we)($[K.group]),
              }),
              (0, t.jsx)("ul", {
                className: k().FeatureGroupItems,
                "aria-labelledby": ae,
                children: K.features.map((ee) =>
                  (0, t.jsx)(
                    "li",
                    { children: (0, t.jsx)(re, { feature: ee, open: K.open }) },
                    ee,
                  ),
                ),
              }),
            ],
          });
        }
        function re(K) {
          return (0, t.jsx)(Y.Ii, {
            href: `${H.TS.STORE_BASE_URL}category/${S[K.feature]}`,
            className: k().InfoRow,
            focusable: K.open,
            children: (0, t.jsx)("span", {
              className: k().FeatureNameContainer,
              children: (0, t.jsx)("span", {
                className: k().FeatureName,
                children: (0, Q.we)(T[K.feature]),
              }),
            }),
          });
        }
      },
      61711: (b, ce, i) => {
        "use strict";
        i.r(ce), i.d(ce, { default: () => _ });
        var t = i(7850),
          m = i(54130),
          Q = i(19298),
          H = i(20169),
          q = i(97525),
          k = i(18210),
          Y = i(3166),
          C = i(1205),
          T = i.n(C),
          S = i(94502),
          V = i(36707);
        function _($) {
          const {
              title: de,
              navKey: se,
              seeAllLink: N,
              appIDs: L,
              sortOrder: re,
              scorePenaltyIfOwned: K,
              capsuleSize: ae,
              bFullWidth: ee,
            } = $,
            je = (0, Y.Qn)(),
            { bShowSeeMoreHint: te, panelProps: U } = (0, q.i)(N);
          return (0, t.jsx)(Q.Z, {
            className: (0, V.A)(T().StoreItemsCarousel, ee && T().FullWidth),
            navEntryPreferPosition: H.iU.PREFERRED_CHILD,
            ...U,
            children: (0, t.jsxs)(m.q, {
              children: [
                (0, t.jsxs)("div", {
                  className: T().Header,
                  children: [
                    (0, t.jsx)("div", { className: T().Title, children: de }),
                    !je && (0, t.jsx)(S.H, { url: N }),
                    je &&
                      (0, t.jsx)(q.o, {
                        label: (0, k.we)("#StoreApp_SeeAll"),
                        shown: te,
                      }),
                  ],
                }),
                (0, t.jsx)(Q.Z, {
                  preferredFocus: !0,
                  children: (0, t.jsx)(S._, {
                    navKey: se,
                    classes: T().StorePageCarousel,
                    appIDs: L,
                    maxItemCount: 4,
                    sortOrder: re,
                    scorePenaltyIfOwned: K,
                    capsuleSize: ae,
                  }),
                }),
              ],
            }),
          });
        }
      },
      94502: (b, ce, i) => {
        "use strict";
        i.d(ce, { H: () => U, _: () => ee });
        var t = i(7850),
          m = i(24660),
          Q = i(48156),
          H = i(90626),
          q = i(24805),
          k = i(18994),
          Y = i(6469),
          C = i(10142),
          T = i(10349),
          S = i(84676),
          V = i(36707),
          _ = i(18210),
          $ = i(3166),
          de = i(68538),
          se = i(96117),
          N = i(89524),
          L = i.n(N);
        const re = -1,
          K = parseInt(L().strScrollSnapCarouselItemHeight),
          ae = 250;
        function ee(ue) {
          const {
              navKey: me,
              classes: X,
              appIDs: le,
              sortOrder: J,
              scorePenaltyIfOwned: ie,
              capsuleSize: oe,
              maxItemCount: pe,
              mapAppToCreatorClan: Ee,
              strFeatureFirstAppMsg: Mt,
              setNumberVisibleItems: Dt,
            } = ue,
            Z = (0, k.a4)(910),
            ge = (0, $.Qn)(),
            [hn, rs] = (0, Y.L2)(),
            [kt, is] = H.useState(le),
            as = (0, S.zX)(le, q.Xh),
            [Vn, xs] = H.useState(null);
          H.useEffect(() => {
            if (as == S.Sq) return;
            const Vt = le.filter(
              (At) => !C.A.Get().BIsStoreItemMissing(At, Q.c6.qI),
            );
            if (Mt && Z && !ge && Vt.length > 0 && Vt[0] == le[0]) {
              const At = [Vt[0], re, ...Vt.slice(1)];
              is(At), xs(Mt), Dt?.(At.length);
            } else is(Vt), Dt?.(Vt.length);
          }, [le, ge, Z, as, Dt, Mt]);
          const E = ge;
          return (0, t.jsx)(de.F, {
            className: (0, V.A)(X, {
              SaleSectionCarousel: !0,
              [L().Carousel]: !0,
            }),
            visibleElements: pe,
            useTestScrollbar: !0,
            bLazyRenderChildren: !0,
            lazyRenderPlaceholderHeight: K,
            lazyRenderPlaceholderWidth: ae,
            gap: 12,
            hideArrows: !1,
            screenIsWide: Z,
            navKey: me,
            bForceSimpleCarousel: E,
            children: te(rs, kt, J ?? "none", ie ?? 3).map((Vt, At) =>
              (0, t.jsx)(
                je,
                {
                  appID: Vt,
                  size: oe,
                  creatorClanAccountID: Ee?.get(Vt),
                  strFeaturingMsg: At == 0 && Vn ? Vn : void 0,
                },
                Vt,
              ),
            ),
          });
        }
        function je(ue) {
          const {
              appID: me,
              size: X,
              creatorClanAccountID: le,
              strFeaturingMsg: J,
            } = ue,
            [ie] = (0, S.G6)(me, Q.c6.qI, q.Xh);
          if (me == re)
            return (0, t.jsx)("div", {
              className: (0, V.A)({
                [L().Capsule]: !0,
                [L().Small]: X == "small",
              }),
            });
          if (!ie)
            return (0, t.jsx)("div", {
              className: (0, V.A)(L().Capsule, L().Placeholder),
            });
          const oe = (0, T._4)(ie.GetStoreItemType(), ie.GetAppType()),
            pe = { id: ie.GetID(), type: oe },
            Ee = !!J;
          return (0, t.jsx)("div", {
            className: (0, V.A)({
              [L().Capsule]: !0,
              [L().TwoWide]: Ee,
              [L().Small]: X == "small",
            }),
            children: (0, t.jsx)(se.W, {
              capsule: pe,
              imageType: "header",
              bHidePlatforms: !0,
              bHideStoreHover: Ee,
              creatorAccountID: le,
              strDoubleCapsuleMessage: Ee ? (0, _.we)(J) : void 0,
              bPreferAssetWithoutOverride: !1,
            }),
          });
        }
        function te(ue, me, X, le) {
          const J = H.useMemo(
              () => me.filter((oe) => !ue.BIsGameIgnored(oe)),
              [me, ue],
            ),
            ie = H.useMemo(
              () => Array.from({ length: J.length }, () => Math.random()),
              [J.length],
            );
          return X == "shuffle"
            ? J.map((oe, pe) => {
                const Ee =
                  (ue.BIsGameOwned(oe) ? le : 0) +
                  (Math.sqrt(pe) + 2) * ie[pe] +
                  Math.sqrt(pe);
                return { id: oe, score: Ee };
              })
                .sort((oe, pe) => oe.score - pe.score)
                .map((oe) => oe.id)
            : X == "scored"
              ? J.map((oe, pe) => ({
                  id: oe,
                  score: ue.BIsGameOwned(oe) ? le + pe : pe,
                }))
                  .sort((oe, pe) => oe.score - pe.score)
                  .map((oe) => oe.id)
              : J;
        }
        function U(ue) {
          const { url: me } = ue;
          return me
            ? (0, t.jsx)(m.Ii, {
                href: me,
                className: (0, V.A)(
                  L().SeeAllLink,
                  "btnv6_grey_black btn_medium",
                ),
                children: (0, t.jsx)("span", {
                  children: (0, _.we)("#StoreApp_SeeAll"),
                }),
              })
            : void 0;
        }
      },
      63083: (b, ce, i) => {
        "use strict";
        i.r(ce),
          i.d(ce, {
            AppGameInterestCacheInit: () => il,
            AppStoreBrowseCacheInit: () => al,
            default: () => Oy,
          });
        var t = i(7850),
          m = i(90626),
          Q = i(65329),
          H = i(72849),
          q = i(7582),
          k = i(53025),
          Y = i(71157),
          C = i(90537),
          T = i(24660),
          S = i(19298),
          V = i(20169),
          _ = i(95174),
          $ = i(39905),
          de = i(77495),
          se = i(12037),
          N = i(36118),
          L = i(18210);
        function re(s) {
          return (0, t.jsxs)("div", {
            className: se.LatestUpdateButtonCtn,
            children: [
              (0, t.jsx)("div", {
                className: se.LatestUpdateIcon,
                children: (0, t.jsx)(N.UTF, { role: "presentation" }),
              }),
              (0, t.jsx)(T.ml, {
                className: se.LatestUpdateButton,
                onClick: s.onClick,
                children: $.Z.Localize(
                  "#EventBrowse_LatestUpdateTime_Button",
                  (0, L._l)(s.nUpdateTime),
                ),
              }),
            ],
          });
        }
        function K(s) {
          const { nUpdateTime: e, announcementGID: n, onClick: r } = s,
            a = n ? de.O3.GetClanEventFromAnnouncementGID(n) : null,
            o = _.u;
          return (0, t.jsxs)("div", {
            className: se.Container,
            children: [
              (0, t.jsxs)("h2", {
                children: [
                  (0, L.we)("#EventBrowse_LastUpdateDate", (0, L._l)(e)),
                  (0, t.jsx)(T.ml, {
                    className: se.SectionButton,
                    onClick: (c) => {
                      r?.(), c.stopPropagation(), c.preventDefault();
                    },
                    children: (0, L.we)("#EventBrowse_MoreEventsBtn"),
                  }),
                ],
              }),
              !!a &&
                (0, t.jsx)(S.Z, {
                  className: se.EventsSummariesCtn,
                  "flow-children": "column",
                  navEntryPreferPosition: V.iU.PREFERRED_CHILD,
                  children: (0, t.jsx)(o, {
                    event: a,
                    onClick: (c) => {
                      r?.(), c.stopPropagation(), c.preventDefault();
                    },
                  }),
                }),
            ],
          });
        }
        var ae = i(54130),
          ee = i(56492),
          je = i(33902),
          te = i(71568),
          U = i(3166);
        const ue = 500;
        function me(s) {
          const {
              strClassName: e,
              rgEvents: n,
              fnEventShowModal: r,
              elPostRowElement: a,
              bViewAllShowInfiniteScroll: o,
              nSummaryMaxLength: c,
            } = s,
            d = (0, je.d)(),
            u = (0, te.R7)(),
            p = (0, U.Qn)();
          let h = 2,
            f = ue + 1;
          return (
            u.ownerWindow.window
              ? (f = u.ownerWindow.window.innerWidth)
              : d.viewportWidth && (f = d.viewportWidth.value),
            (h = f <= ue ? 1 : 2),
            n && n.length == 0 && !a
              ? null
              : (0, t.jsxs)(S.Z, {
                  className: e,
                  "flow-children": "row",
                  children: [
                    !!n &&
                      n.length > 0 &&
                      (0, t.jsx)("div", {
                        className: se.Container,
                        children: (0, t.jsxs)(ae.q, {
                          children: [
                            (0, t.jsxs)("h2", {
                              children: [
                                $.Z.Localize("#EventBrowse_RecentEvents"),
                                !p &&
                                  !!n &&
                                  (0, t.jsx)(t.Fragment, {
                                    children:
                                      o && r
                                        ? (0, t.jsx)(T.ml, {
                                            className: se.SectionButton,
                                            onClick: () => r(n[0]),
                                            children: $.Z.Localize(
                                              "#EventBrowse_MoreEventsBtn",
                                            ),
                                          })
                                        : (0, t.jsx)(ee.tj, {
                                            eventModel: n[0],
                                            route: ee.PH.k_eViewWebSiteHub,
                                            className: se.SectionButton,
                                            children: $.Z.Localize(
                                              "#EventBrowse_MoreEventsBtn",
                                            ),
                                          }),
                                  }),
                              ],
                            }),
                            (0, t.jsx)("div", {
                              className: se.EventsSummariesCtn,
                              children: n.slice(0, h).map((y) => {
                                const j =
                                  r && !(0, ee.sY)()
                                    ? (B) => {
                                        r(y),
                                          B.stopPropagation(),
                                          B.preventDefault();
                                      }
                                    : void 0;
                                return (0, t.jsx)(
                                  _.u,
                                  {
                                    event: y,
                                    onClick: j,
                                    nSummaryMaxLength: c,
                                  },
                                  y.GID,
                                );
                              }),
                            }),
                          ],
                        }),
                      }),
                    a,
                  ],
                })
          );
        }
        var X = i(49984),
          le = i(19188),
          J = i(96538),
          ie = i(30096);
        function oe(s) {
          const {
              trackingLocation: e,
              strClassName: n,
              bViewAllShowInfiniteScroll: r,
            } = s,
            [a, o, c] = (0, ie.uD)(),
            [d, u] = (0, m.useState)(null),
            [p, h] = (0, m.useState)(void 0),
            f = (0, C.Y)(),
            y = (0, m.useCallback)(() => {
              u(null), c();
            }, [c]),
            j = (0, m.useCallback)(
              (xe) => {
                e &&
                  xe &&
                  xe.BIsPartnerEvent() &&
                  f.MarkEventRead(xe.GID, xe.clanSteamID.GetAccountID(), e) &&
                  f.Flush(),
                  u(xe),
                  h(void 0),
                  o();
              },
              [e, f, o],
            ),
            { last_update_event: B, rgEvents: P } = pe({
              ...s,
              fnEventShowModal: j,
            }),
            O = (0, m.useCallback)(() => {
              const {
                event_gid: xe,
                announcement_gid: Nt,
                clan_account_id: Yt,
              } = B;
              e && xe && f.MarkEventRead(xe, Yt, e) && f.Flush(),
                h(Nt),
                u(null),
                o();
            }, [B, o, f, e]);
          (0, m.useEffect)(
            () => (
              (window.fnPartnerEvent_ShowInfiniteScroll = (xe, Nt) => {
                h(Nt), u(null), h(Nt), o();
              }),
              () => {
                window.fnPartnerEvent_ShowInfiniteScroll &&
                  delete window.fnPartnerEvent_ShowInfiniteScroll;
              }
            ),
            [o],
          );
          const M = (0, U.Qn)(),
            z = !!B && !!B.rtime,
            G =
              z && !!B.announcement_gid && (!P || P.length == 0)
                ? B.announcement_gid
                : void 0;
          let W;
          return (
            z && G
              ? (W = (0, t.jsx)(K, {
                  nUpdateTime: B.rtime,
                  announcementGID: G,
                  onClick: O,
                }))
              : z &&
                !G &&
                !M &&
                (W = (0, t.jsx)(re, { nUpdateTime: B.rtime, onClick: O })),
            (0, t.jsxs)(t.Fragment, {
              children: [
                (0, t.jsx)(J.EN, {
                  active: a,
                  children: (0, t.jsx)(Mt, {
                    ...s,
                    announcementGID: p || d?.AnnouncementGID,
                    eventModel: d,
                    closeModal: y,
                  }),
                }),
                (0, t.jsx)(me, {
                  elPostRowElement: W,
                  rgEvents: P,
                  fnEventShowModal: j,
                  bViewAllShowInfiniteScroll: r,
                  strClassName: n,
                }),
              ],
            })
          );
        }
        function pe(s) {
          const {
              appid: e,
              event_customization: n,
              partnerEventStore: r,
              trackingLocation: a,
              fnEventShowModal: o,
            } = s,
            [c, d] = (0, m.useState)(null),
            [u, p] = (0, m.useState)(null),
            h = (0, C.Y)(),
            [f] = (0, Y.Q)("emgid", void 0),
            [y] = (0, Y.Q)("announce_gid", void 0);
          return (
            (0, m.useEffect)(() => {
              const j = (0, X.v)("EventWebRowEmbed");
              let B = !1;
              if (Ee(j)) {
                (B = j.bPreLoaded), d(j.last_update_event);
                const P = [];
                j.announcementGIDList.forEach((O) => {
                  const M = de.O3.GetClanEventFromAnnouncementGID(O);
                  M && P.push(M);
                }),
                  p(P);
              }
              B ||
                (async () => {
                  const O = await r.LoadAdjacentPartnerEvents(
                    void 0,
                    void 0,
                    e,
                    0,
                    2,
                    n,
                  );
                  p(O),
                    a &&
                      O &&
                      O.length > 0 &&
                      (O.filter((M) => M.BIsPartnerEvent()).forEach((M) =>
                        h.MarkEventShown(
                          M.GID,
                          M.clanSteamID.GetAccountID(),
                          a,
                        ),
                      ),
                      h.Flush());
                })();
            }, [e, n, o, r, h, a]),
            (0, m.useEffect)(() => {
              if (u != null && (f || y)) {
                const j = u.find((B) => B.GID === f || B.AnnouncementGID == y);
                j
                  ? o(j)
                  : (async () => {
                      const P = f
                        ? await r.LoadPartnerEventFromClanEventGID(e, f, 0)
                        : await r.LoadPartnerEventFromAnnoucementGID(e, y, 0);
                      P && p([...u, P]);
                    })();
              }
            }, [f, y, u, o, p, r, e]),
            { last_update_event: c, rgEvents: u }
          );
        }
        function Ee(s) {
          const e = s;
          return e && typeof e == "object"
            ? e.bPreLoaded !== void 0 &&
                typeof e.bPreLoaded == "boolean" &&
                Array.isArray(e.announcementGIDList)
            : !1;
        }
        function Mt(s) {
          const {
              appid: e,
              partnerEventStore: n,
              trackingLocation: r,
              announcementGID: a,
              eventModel: o,
              closeModal: c,
            } = s,
            d = (0, U.Qn)();
          return (0, t.jsx)(le.N, {
            className: d ? void 0 : se.StoreHeaderAdjust,
            eventClassName: d ? se.GamePadUIWidthAdjust : void 0,
            appid: e,
            trackingLocation: r,
            announcementGID: a,
            partnerEventStore: n,
            eventModel: o ?? void 0,
            closeModal: c,
          });
        }
        function Dt(s) {
          const e = (0, q.s4)(),
            n = new Date(e.setUTCHours(0, 0, 0, 0) - 4320 * 60 * 60 * 1e3),
            r = Math.floor(n.getTime() / 1e3),
            { appid: a } = s;
          return (0, t.jsx)(oe, {
            appid: a,
            partnerEventStore: k.$.Get(),
            event_customization: {
              rtime_oldestevent: r,
              exclude_tags: ["patchnotes", "hide_store", "mod_hide_store"],
              exclude_event_types: [Q.G$._C],
            },
            strClassName: "early_access_announcements",
            trackingLocation: H.Tc.j$,
          });
        }
        var Z = i(99412),
          ge = i(64868),
          hn = i(41735),
          rs = i.n(hn),
          kt = i(29522),
          is = i(58483),
          as = i(82385),
          Vn = i(29245),
          xs = i(27284),
          E = i(40358),
          Vt = i(18057),
          At = i(6019);
        function Pr(s) {
          const e = (0, m.useRef)(null),
            n = (0, is.LJ)(),
            r = Number(s.appID),
            a = (0, kt.$5)(r),
            { data: o } = (0, E.J$)(a),
            [c, d] = (0, m.useState)(null);
          (0, m.useEffect)(
            () => (
              (async () => {
                const B = rs().CancelToken.source();
                e.current = B.cancel;
                const P = {
                    exclude_tags: ["steam_game_festival_artist_statement"],
                    require_tags: ["steam_game_festival_broadcast"],
                  },
                  O = await de.O3.LoadAdjacentPartnerEvents(
                    void 0,
                    void 0,
                    r,
                    0,
                    1,
                    P,
                  );
                B.token.reason || (O.length > 0 && d(O[0]));
              })(),
              () => {
                e.current && e.current("DemoAndQuickPitch: Unmounting");
              }
            ),
            [r],
          );
          const [u, p, h] = (0, ge.uD)(),
            f = c ? c.GetNameWithFallback((0, Z.sfN)(U.TS.LANGUAGE)) : null,
            y = c ? c.BHasEventEnded() : !0;
          return !o ||
            !o.related_items?.demo_appid ||
            o.related_items?.demo_appid.length == 0
            ? null
            : (0, t.jsxs)(t.Fragment, {
                children: [
                  (0, t.jsxs)("div", {
                    className: At.TileContainer,
                    children: [
                      (0, t.jsxs)("div", {
                        className: At.TileTitleContainer,
                        children: [
                          (0, t.jsxs)("div", {
                            className: At.TileTitleInnerContainer,
                            children: [
                              (0, t.jsx)("div", {
                                className: At.TileTitle,
                                children: (0, L.we)(
                                  "#Sale_DownloadDemo",
                                  o.name || "",
                                ),
                              }),
                              (0, t.jsx)(Vn.Q, { id: a }),
                            ],
                          }),
                          (0, t.jsx)(xs.j, {
                            id: a,
                            className: At.TileActionButton,
                          }),
                        ],
                      }),
                      (0, t.jsx)("div", {
                        className: At.TileActionContainer,
                        children:
                          c &&
                          f &&
                          (0, t.jsxs)("div", {
                            className: At.TileActionInnerContainer,
                            children: [
                              y
                                ? (0, t.jsx)("h1", {
                                    children: (0, L.we)(
                                      "#EventBrowse_RecentUpdates",
                                    ),
                                  })
                                : (0, t.jsx)("h1", {
                                    children: (0, L.we)(
                                      "#EventCalendar_TuneIn",
                                    ),
                                  }),
                              (0, t.jsxs)("div", {
                                className: At.TileActionInner,
                                onClick: p,
                                children: [
                                  (0, t.jsx)("div", {
                                    className: At.TileActionInnerTitle,
                                    children: f,
                                  }),
                                  (0, t.jsx)("div", {
                                    className: At.TileActionInnerText,
                                    children: (0, t.jsx)(Vt.K4, {
                                      dateAndTime:
                                        c.GetStartTimeAndDateUnixSeconds(),
                                      bSingleLine: !0,
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                      }),
                    ],
                  }),
                  (0, t.jsx)(J.EN, {
                    active: u,
                    children: (0, t.jsx)(as.AD, {
                      initialEvent: c,
                      bShowOnlyInitialEvent: !1,
                      partnerEventStore: de.O3,
                      emoticonStore: n,
                      showAppHeader: !0,
                      closeModal: h,
                    }),
                  }),
                ],
              });
        }
        var Gs = i(20076),
          cl = i(84750),
          D = i(36707),
          dl = i(27510),
          Ft = i.n(dl),
          Ae = i(56718),
          vs = i(53906);
        const Ny = new cl.cE();
        var on = ((s) => (
          (s[(s.EPurchaseNoticeType_ControllerRequired = 0)] =
            "EPurchaseNoticeType_ControllerRequired"),
          (s[(s.EPurchaseNoticeType_VRRequired = 1)] =
            "EPurchaseNoticeType_VRRequired"),
          (s[(s.EPurchaseNoticeType_VRSupported = 2)] =
            "EPurchaseNoticeType_VRSupported"),
          s
        ))(on || {});
        function js(s) {
          const { appid: e, type: n } = s;
          switch (n) {
            case 0:
              return (0, t.jsx)(ul, { appid: e, controllerType: vs.Oh });
            case 1:
              return (0, t.jsx)(ml, {});
            default:
              return (0, t.jsx)(gl, {});
          }
        }
        function ul(s) {
          return (0, t.jsxs)("div", {
            className: (0, D.A)(Ft().PurchaseNoticeContainer),
            children: [
              (0, t.jsx)("div", {
                className: (0, D.A)(Ft().PurchaseNoticeImageContainer),
                children: (0, t.jsx)(Ae.xIk, {
                  type: "xbox",
                  className: (0, D.A)(Ft().PurchaseNoticeImage, Ft().Tilt),
                }),
              }),
              (0, t.jsx)("div", {
                className: (0, D.A)(Ft().PurchaseNoticeLabel),
                children: (0, L.we)("#PurchaseNotice_ControllerRequired"),
              }),
            ],
          });
        }
        function ml(s) {
          return (0, t.jsxs)("div", {
            className: (0, D.A)(Ft().PurchaseNoticeContainer),
            children: [
              (0, t.jsx)("div", {
                className: (0, D.A)(Ft().PurchaseNoticeImageContainer),
                children: (0, t.jsx)(Ae.oqe, {
                  className: (0, D.A)(Ft().PurchaseNoticeImage, Ft().VROnly),
                }),
              }),
              (0, t.jsx)("div", {
                className: (0, D.A)(Ft().PurchaseNoticeLabel),
                children: (0, L.we)("#PurchaseNotice_VRRequired"),
              }),
            ],
          });
        }
        function gl(s) {
          return (0, t.jsxs)("div", {
            className: (0, D.A)(Ft().PurchaseNoticeContainer),
            children: [
              (0, t.jsx)("div", {
                className: (0, D.A)(
                  Ft().PurchaseNoticeImageContainer,
                  Ft().VRSupported,
                ),
                children: (0, t.jsx)(Ae.Kkn, {
                  className: (0, D.A)(
                    Ft().PurchaseNoticeImage,
                    Ft().VRSupported,
                  ),
                }),
              }),
              (0, t.jsx)("div", {
                className: (0, D.A)(Ft().PurchaseNoticeLabel),
                children: (0, L.we)("#PurchaseNotice_VRSupported"),
              }),
            ],
          });
        }
        const Er = js;
        var Fi = i(97525),
          pl = i(24805),
          Wi = i(813),
          Ri = i(60480),
          wi = ((s) => (
            (s[(s.k_CreatorHomeNone = 0)] = "k_CreatorHomeNone"),
            (s[(s.k_CreatorHomeAll = -1)] = "k_CreatorHomeAll"),
            s
          ))(wi || {}),
          hl = i(10142),
          Ui = i(84676),
          Ci = i(72147),
          fl = i(51249),
          Se = i.n(fl),
          Ki = i(94502);
        function yl(s) {
          const {
              clanID: e,
              title: n,
              seeAllLink: r,
              appIDs: a,
              rgAppIDToCreatorIDs: o,
              rgAllCreatorClanIDs: c,
              strFeatureFirstAppMsg: d,
              bFullWidth: u,
            } = s,
            p = (0, Ui.zX)(a, pl.Xh),
            h = (0, m.useMemo)(() => {
              const y = new Map(
                Object.entries(o).map(([j, B]) => [Number(j), B]),
              );
              if (p != Ui.Sq && e == wi.k_CreatorHomeAll) {
                const j = new Set(c);
                a.forEach((B) => {
                  if (!y.has(B)) {
                    const P = hl.A.Get().GetApp(B);
                    P &&
                      P.GetAllCreatorClanIDs()?.some((O) =>
                        j.has(O) ? (y.set(B, O), !0) : !1,
                      );
                  }
                });
              }
              return y;
            }, [o, p, e, c, a]),
            f = "developer";
          return a.length > 0
            ? (0, t.jsx)(xl, {
                creatorHomeType: f,
                clanID: e,
                titleOverride: n,
                seeAllLink: r,
                appIDs: a,
                mapAppIDsToCreatorClanID: h,
                strFeatureFirstAppMsg: d,
                bFullWidth: u,
              })
            : (0, t.jsx)(vl, { creatorHomeType: f, clanID: e, bFullWidth: u });
        }
        function xl(s) {
          const {
              creatorHomeType: e,
              clanID: n,
              titleOverride: r,
              seeAllLink: a,
              appIDs: o,
              mapAppIDsToCreatorClanID: c,
              strFeatureFirstAppMsg: d,
              bFullWidth: u,
            } = s,
            p = (0, U.Qn)(),
            [h, f] = (0, Wi.TB)(n),
            { creatorHome: y } = (0, Ri.FV)(n),
            j = y?.GetCreatorHomeURL(e),
            [B, P] = m.useState(void 0),
            { bShowSeeMoreHint: O, panelProps: M } = (0, Fi.i)(a);
          if (!y) return;
          const z = !p && (d ? B == 1 : B <= 2) && f;
          return (0, t.jsx)(S.Z, {
            className: (0, D.A)(
              Se().CreatorHomeWithItems,
              z ? Se().WithFollowBtn : "",
              u && Se().FullWidth,
            ),
            navEntryPreferPosition: V.iU.PREFERRED_CHILD,
            ...M,
            children: (0, t.jsxs)(ae.q, {
              children: [
                f?.creator_page_bg_url &&
                  (0, t.jsx)("div", {
                    className: Se().Background,
                    style: { backgroundImage: `url(${f.creator_page_bg_url})` },
                  }),
                (0, t.jsxs)(S.Z, {
                  className: Se().Header,
                  "flow-children": "row",
                  children: [
                    (0, t.jsxs)("div", {
                      className: Se().ClanInfoRow,
                      children: [
                        !!f &&
                          (0, t.jsx)("div", {
                            children: (0, t.jsx)(T.Ii, {
                              href: j,
                              focusable: j !== a,
                              children: (0, t.jsx)("img", {
                                className: Se().ClanAvatarImage,
                                src: y.GetAvatarURLFullSize(),
                              }),
                            }),
                          }),
                        (0, t.jsx)("img", {
                          className: Se().AvatarBackground,
                          src: y.GetAvatarURLFullSize(),
                        }),
                        (0, t.jsx)("div", {
                          className: Se().ClanName,
                          children: (0, t.jsx)("a", {
                            href: j,
                            children: r || y.GetName(),
                          }),
                        }),
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      className: Se().ButtonContainer,
                      children: [
                        !!(!z && f && !p) &&
                          (0, t.jsx)(Ci.of, {
                            className: Se().CarouselFollowButton,
                            clanAccountID: n,
                          }),
                        !p && (0, t.jsx)(Ki.H, { url: a }),
                        p &&
                          (0, t.jsx)(Fi.o, {
                            label: (0, L.we)("#StoreApp_SeeAll"),
                            shown: O,
                          }),
                      ],
                    }),
                  ],
                }),
                (0, t.jsxs)(S.Z, {
                  className: (0, D.A)(
                    Se().CarouselContentsRow,
                    z && Se().WithFollowSection,
                  ),
                  preferredFocus: !0,
                  children: [
                    (0, t.jsx)(Ki._, {
                      navKey: "store_page_" + e,
                      classes: Se().Carousel,
                      appIDs: o,
                      maxItemCount: z ? B : 4,
                      mapAppToCreatorClan: c,
                      strFeatureFirstAppMsg: d,
                      setNumberVisibleItems: P,
                    }),
                    z &&
                      (0, t.jsx)("div", {
                        className: Se().CarouselFollowSection,
                        children: (0, t.jsx)(Gi, {
                          clanID: n,
                          creatorName: y.GetName(),
                          creatorUrl: j,
                        }),
                      }),
                  ],
                }),
              ],
            }),
          });
        }
        function vl(s) {
          const { creatorHomeType: e, clanID: n, bFullWidth: r } = s,
            [a, o] = (0, Wi.TB)(n),
            { creatorHome: c } = (0, Ri.FV)(n),
            d = c?.GetCreatorHomeURL(e);
          if (c)
            return (0, t.jsxs)("div", {
              className: (0, D.A)(
                Se().CreatorHomeWithoutItems,
                r && Se().FullWidth,
              ),
              children: [
                o?.creator_page_bg_url &&
                  (0, t.jsx)("div", {
                    className: Se().Background,
                    style: { backgroundImage: `url(${o.creator_page_bg_url})` },
                  }),
                (0, t.jsx)("div", {
                  children: (0, t.jsx)("a", {
                    href: d,
                    children: (0, t.jsx)("img", {
                      className: Se().ClanAvatarImage,
                      src: c.GetAvatarURLFullSize(),
                    }),
                  }),
                }),
                (0, t.jsx)(Gi, {
                  clanID: n,
                  creatorName: c.GetName(),
                  creatorUrl: d,
                }),
              ],
            });
        }
        function Gi(s) {
          const { clanID: e, creatorName: n, creatorUrl: r } = s;
          return (0, t.jsxs)("div", {
            className: Se().ClanInfoColumn,
            children: [
              (0, t.jsx)("div", {
                className: Se().ClanFollowTitle,
                children: (0, t.jsx)("a", {
                  href: r,
                  children: (0, L.we)("#StoreApp_FollowCreator", n),
                }),
              }),
              (0, t.jsx)("div", {
                className: Se().ClanFollowSubtitle,
                children: (0, L.we)("#StoreApp_FollowCreatorSubtitle"),
              }),
              (0, t.jsx)("div", {
                className: Se().ClanFollowButtonContainer,
                children: (0, t.jsx)(Ci.of, {
                  className: Se().FollowButton,
                  clanAccountID: e,
                }),
              }),
            ],
          });
        }
        var bs = i(14947),
          Ys = i(12997),
          Ir = i(64271),
          jl = i(65946),
          bl = Object.defineProperty,
          Bl = Object.getOwnPropertyDescriptor,
          ks = (s, e, n, r) => {
            for (
              var a = r > 1 ? void 0 : r ? Bl(e, n) : e, o = s.length - 1, c;
              o >= 0;
              o--
            )
              (c = s[o]) && (a = (r ? c(e, n, a) : c(a)) || a);
            return r && a && bl(e, n, a), a;
          };
        function Pl(s) {
          let {
              id: e,
              dashManifests: n,
              hlsManifest: r,
              screenshot: a,
              title: o,
              category: c,
              statsURL: d,
            } = s,
            u = Il(),
            [p, h, f, y] = (0, jl.q3)(() => [
              !u.BPlayTrailer(e),
              u.BAutoplayEnabled(),
              u.GetPlayerVolume(),
              u.BAudioMuted(),
            ]),
            j = (0, m.useCallback)(() => {
              u.FireTrailerPlaybackEnded();
            }, [u]);
          return El(p)
            ? (0, t.jsx)(Ys.v, {
                autoplayEnabled: h,
                setAutoplayEnabled: u.GetSetAutoplayEnabled(),
                playerVolume: f,
                setPlayerVolume: u.GetSetPlayerVolume(),
                audioMuted: y,
                setAudioMuted: u.GetSetAudioMuted(),
                children: (0, t.jsx)(Ir.P, {
                  dashManifests: n,
                  hlsManifest: r,
                  screenshot: a,
                  forcePause: p,
                  onPlaybackEnd: j,
                  altText: o,
                  title: o,
                  category: c,
                  statsURL: d,
                }),
              })
            : null;
        }
        function El(s) {
          let e = m.useRef(!1);
          return s || (e.current = !0), e.current;
        }
        class Bs {
          m_mapTrailerPlay = new Map();
          m_fnOnTrailerEnd;
          m_bAutoplayEnabled = !1;
          m_fnSetAutoplayEnabled;
          m_flPlayerVolume = 1;
          m_fnSetPlayerVolume;
          m_bAudioMuted = !0;
          m_fnSetAudioMuted;
          constructor() {
            (0, bs.Gn)(this);
          }
          InitAutoplayMethods(e, n) {
            (this.m_bAutoplayEnabled = e), (this.m_fnSetAutoplayEnabled = n);
          }
          InitPlayerVolumeMethods(e, n) {
            (this.m_flPlayerVolume = e / 100),
              (this.m_fnSetPlayerVolume = (r) => {
                (r = r * 100), n(r);
              });
          }
          InitAudioMutedMethods(e, n) {
            (this.m_bAudioMuted = e), (this.m_fnSetAudioMuted = n);
          }
          UpdateAutoplay(e) {
            this.m_bAutoplayEnabled = e;
          }
          UpdateVolume(e) {
            this.m_flPlayerVolume = e / 100;
          }
          UpdateMuted(e) {
            this.m_bAudioMuted = e;
          }
          BAutoplayEnabled() {
            return this.m_bAutoplayEnabled;
          }
          GetSetAutoplayEnabled() {
            return this.m_fnSetAutoplayEnabled;
          }
          GetPlayerVolume() {
            return this.m_flPlayerVolume;
          }
          GetSetPlayerVolume() {
            return this.m_fnSetPlayerVolume;
          }
          BAudioMuted() {
            return this.m_bAudioMuted;
          }
          GetSetAudioMuted() {
            return this.m_fnSetAudioMuted;
          }
          SetTrailerState(e, n) {
            this.m_mapTrailerPlay.set(e, n);
          }
          SetTrailerEndCallback(e) {
            this.m_fnOnTrailerEnd = e;
          }
          FireTrailerPlaybackEnded() {
            this.m_fnOnTrailerEnd && this.m_fnOnTrailerEnd();
          }
          BPlayTrailer(e) {
            let n = this.m_mapTrailerPlay.get(e);
            return n === void 0 ? !1 : n;
          }
        }
        ks([bs.sH], Bs.prototype, "m_mapTrailerPlay", 2),
          ks([bs.sH], Bs.prototype, "m_bAutoplayEnabled", 2),
          ks([bs.sH], Bs.prototype, "m_flPlayerVolume", 2),
          ks([bs.sH], Bs.prototype, "m_bAudioMuted", 2);
        let Vs = null;
        function Il() {
          return (
            Vs ||
              ((Vs = new Bs()),
              window.dispatchEvent(
                new CustomEvent("valve_gamehighlighttrailers_ready", {
                  detail: Vs,
                }),
              )),
            Vs
          );
        }
        var Tr = i(67705),
          fn = i(51079),
          ve = i(17479),
          Qn = i(71421);
        function yn(s) {
          const e = s.strSecondaryCategory
              ? `${U.TS.STORE_BASE_URL}search/?controllersupport=${s.strCategory}%2C${s.strSecondaryCategory}`
              : `${U.TS.STORE_BASE_URL}search/?controllersupport=${s.strCategory}`,
            n = (0, t.jsxs)(t.Fragment, {
              children: [
                (0, t.jsx)("div", {
                  className: (0, D.A)(
                    ve.ImgSection,
                    s.bHightlightRow && ve.HighlightRow,
                    s.bHighlightGPRequired && ve.GamepadRequired,
                  ),
                  children: s.tagImage,
                }),
                (0, t.jsxs)("div", {
                  className: (0, D.A)(
                    ve.LocSection,
                    s.bHighlightText && ve.HighlightText,
                    s.bHightlightRow && ve.HighlightRow,
                    s.bHighlightGPRequired && ve.GamepadRequired,
                  ),
                  children: [
                    (0, t.jsx)("div", {
                      className: (0, D.A)(
                        ve.LocString,
                        s.bHighlightText && ve.HighlightText,
                        s.bHightlightRow && ve.HighlightRow,
                        s.bHighlightGPRequired && ve.GamepadRequired,
                        s.bPersonalized && ve.Personalized,
                      ),
                      children: (0, L.we)(s.strLocalizationToken),
                    }),
                    s.strTooltipString &&
                      (0, t.jsx)(Qn.he, {
                        toolTipContent: (0, L.we)(s.strTooltipString),
                        className: ve.ToolTipContainer,
                        children: (0, t.jsx)("span", {
                          className: ve.ToolTipControl,
                          children: "?",
                        }),
                      }),
                  ],
                }),
              ],
            });
          return s.strCategory
            ? (0, t.jsx)("a", { href: e, className: ve.InfoRow, children: n })
            : (0, t.jsx)("div", { className: ve.InfoRow, children: n });
        }
        function Dy(s) {
          return jsx("div", {
            className: styles.PreviewContainer,
            children: jsx(Yi, { bPreview: !0, ...s }),
          });
        }
        function Tl(s) {
          return (0, t.jsx)(t.Fragment, {
            children:
              (s.bPartialXboxControllerSupport ||
                s.bFullXboxControllerSupport) &&
              (0, t.jsx)("div", {
                className: ve.StoreSidebarContainer,
                children: (0, t.jsx)(Yi, { ...s }),
              }),
          });
        }
        function Sl() {
          return (0, t.jsx)(yn, {
            tagImage: (0, t.jsx)(Ae.Moo, {
              className: (0, D.A)(ve.Tilt, ve.SmallerSVG),
              role: "presentation",
            }),
            strLocalizationToken: "#Store_ControllerSupport_GamepadRequired",
            bHighlightGPRequired: !0,
            strTooltipString:
              "#Store_ControllerSupport_Tooltip_ControllerRequired",
          });
        }
        function Ml() {
          return (0, t.jsxs)("div", {
            className: (0, D.A)(ve.PurchaseNoticeContainer),
            children: [
              (0, t.jsx)(Ae.Kz1, {
                className: (0, D.A)(ve.PurchaseNoticeImage),
                role: "presentation",
              }),
              (0, t.jsx)("div", {
                className: (0, D.A)(ve.PurchaseNoticeLabel),
                children: (0, L.we)(
                  "#Store_ControllerSupport_GamepadPreferred",
                ),
              }),
            ],
          });
        }
        function Ll(s) {
          const { bNoKeyboardSupport: e, bGamepadPreferred: n } = s;
          return (0, t.jsxs)("div", {
            className: (0, D.A)(ve.NoticeContainer),
            children: [e && (0, t.jsx)(Sl, {}), n && !e && (0, t.jsx)(Ml, {})],
          });
        }
        function Yi(s) {
          const {
            bControllerSupportWizardComplete: e,
            bPS4ControllerSupport: n,
            bPS5ControllerSupport: r,
            bPS4ControllerBTSupport: a,
            bPS5ControllerBTSupport: o,
            bFullXboxControllerSupport: c,
            bPartialXboxControllerSupport: d,
            bSteamInputAPISupport: u,
            bHasOther: p,
            bHasPS4: h,
            bHasPS5: f,
            bHasXbox: y,
            bPreview: j,
          } = s;
          let B = [];
          if (n && r && a && o) {
            const P = (0, t.jsx)(Ae.pcV, {
                className: ve.SmallerSVG,
                controllerType: vs._X,
                partial: !c,
                role: "presentation",
              }),
              O = h || f;
            B.push(
              (0, t.jsx)(
                yn,
                {
                  tagImage: P,
                  strLocalizationToken: O
                    ? "#Store_ControllerSupport_PS_Personalized"
                    : "#Store_ControllerSupport_PS",
                  bPersonalized: O,
                  strCategory: "55",
                  strSecondaryCategory: "57",
                },
                "1",
              ),
            );
          } else {
            if (n) {
              const P = (0, t.jsx)(Ae.pcV, {
                className: ve.SmallerSVG,
                controllerType: vs._X,
                partial: !c,
                role: "presentation",
              });
              a
                ? B.push(
                    (0, t.jsx)(
                      yn,
                      {
                        tagImage: P,
                        strLocalizationToken: h
                          ? "#Store_ControllerSupport_PS4_Personalized"
                          : "#Store_ControllerSupport_PS4",
                        bPersonalized: h,
                        strCategory: "55",
                      },
                      "2",
                    ),
                  )
                : B.push(
                    (0, t.jsx)(
                      yn,
                      {
                        tagImage: P,
                        strLocalizationToken: h
                          ? "#Store_ControllerSupport_PS4_USB_Personalized"
                          : "#Store_ControllerSupport_PS4_USB",
                        bPersonalized: h,
                        strCategory: "55",
                      },
                      "3",
                    ),
                  );
            }
            if (r) {
              const P = (0, t.jsx)(Ae.pcV, {
                className: ve.SmallerSVG,
                controllerType: vs.HD,
                partial: !c,
                role: "presentation",
              });
              o
                ? B.push(
                    (0, t.jsx)(
                      yn,
                      {
                        tagImage: P,
                        strLocalizationToken: f
                          ? "#Store_ControllerSupport_PS5_Personalized"
                          : "#Store_ControllerSupport_PS5",
                        bPersonalized: f,
                        strCategory: "57",
                      },
                      "4",
                    ),
                  )
                : B.push(
                    (0, t.jsx)(
                      yn,
                      {
                        tagImage: P,
                        strLocalizationToken: f
                          ? "#Store_ControllerSupport_PS5_USB_Personalized"
                          : "#Store_ControllerSupport_PS5_USB",
                        bPersonalized: f,
                        strCategory: "57",
                      },
                      "5",
                    ),
                  );
            }
          }
          return (0, t.jsx)(t.Fragment, {
            children:
              (d || c) &&
              (0, t.jsxs)(t.Fragment, {
                children: [
                  (0, t.jsx)("div", {
                    className: ve.ControllerSupportLevelString,
                    children: (0, L.we)(
                      c
                        ? "#Store_ControllerSupport_FullController"
                        : "#Store_ControllerSupport_PartialController",
                    ),
                  }),
                  (0, t.jsx)(yn, {
                    tagImage: (0, t.jsx)(Ae.pcV, {
                      className: ve.SmallerSVG,
                      controllerType: vs.Oh,
                      partial: !c,
                      role: "presentation",
                    }),
                    strLocalizationToken: y
                      ? "#Store_ControllerSupport_Xbox_Personalized"
                      : "#Store_ControllerSupport_Xbox",
                    bPersonalized: y,
                    strCategory: "18",
                  }),
                  B,
                  u &&
                    (0, t.jsx)(yn, {
                      tagImage: (0, t.jsx)(Ae.kdM, {
                        className: ve.BiggerSVG,
                        bGreyOutRightSide: !c,
                        role: "presentation",
                      }),
                      strLocalizationToken: "#Store_ControllerSupport_SIAPI",
                      strTooltipString:
                        "#Store_ControllerSupport_Tooltip_SIAPI",
                      strCategory: "59",
                    }),
                  ((!j && !e) || (!u && p && !y)) &&
                    (0, t.jsx)(yn, {
                      tagImage: (0, t.jsx)(Ae.vet, {
                        className: ve.BiggerSVG,
                        role: "presentation",
                      }),
                      strLocalizationToken:
                        p || h || f
                          ? "#Store_ControllerSupport_Unknown_Personalized"
                          : "#Store_ControllerSupport_Unknown",
                      bPersonalized: p || h || f,
                    }),
                  (0, t.jsx)(Ll, { ...s }),
                ],
              }),
          });
        }
        const ki = Tl;
        var Vi = i(61711),
          Al = i(45156),
          Ol = i(399),
          be = i.n(Ol),
          Qs = i(98609),
          zl = i(92442),
          wt = i(72865),
          Sr = i(37901);
        const he = {};
        (he.arabic = () => i.e(70667).then(i.t.bind(i, 70667, 19))),
          (he.brazilian = () => i.e(58167).then(i.t.bind(i, 58167, 19))),
          (he.bulgarian = () => i.e(75936).then(i.t.bind(i, 75936, 19))),
          (he.czech = () => i.e(67478).then(i.t.bind(i, 67478, 19))),
          (he.danish = () => i.e(77178).then(i.t.bind(i, 77178, 19))),
          (he.dutch = () => i.e(62063).then(i.t.bind(i, 62063, 19))),
          (he.english = () => i.e(91253).then(i.t.bind(i, 91253, 19))),
          (he.finnish = () => i.e(66690).then(i.t.bind(i, 66690, 19))),
          (he.french = () => i.e(32763).then(i.t.bind(i, 32763, 19))),
          (he.german = () => i.e(82937).then(i.t.bind(i, 82937, 19))),
          (he.greek = () => i.e(36501).then(i.t.bind(i, 36501, 19))),
          (he.hungarian = () => i.e(41812).then(i.t.bind(i, 41812, 19))),
          (he.indonesian = () => i.e(35383).then(i.t.bind(i, 35383, 19))),
          (he.italian = () => i.e(48149).then(i.t.bind(i, 48149, 19))),
          (he.japanese = () => i.e(89876).then(i.t.bind(i, 89876, 19))),
          (he.koreana = () => i.e(21470).then(i.t.bind(i, 99089, 19))),
          (he.latam = () => i.e(69206).then(i.t.bind(i, 69206, 19))),
          (he.malay = () => i.e(74357).then(i.t.bind(i, 74357, 19))),
          (he.norwegian = () => i.e(94025).then(i.t.bind(i, 94025, 19))),
          (he.polish = () => i.e(92494).then(i.t.bind(i, 92494, 19))),
          (he.portuguese = () => i.e(23862).then(i.t.bind(i, 1481, 19))),
          (he.romanian = () => i.e(48824).then(i.t.bind(i, 48824, 19))),
          (he.russian = () => i.e(50208).then(i.t.bind(i, 50208, 19))),
          (he.sc_schinese = () => i.e(63354).then(i.t.bind(i, 63354, 19))),
          (he.schinese = () => i.e(63875).then(i.t.bind(i, 63875, 19))),
          (he.spanish = () => i.e(34053).then(i.t.bind(i, 34053, 19))),
          (he.swedish = () => i.e(38804).then(i.t.bind(i, 38804, 19))),
          (he.tchinese = () => i.e(48688).then(i.t.bind(i, 48688, 19))),
          (he.thai = () => i.e(79173).then(i.t.bind(i, 79173, 19))),
          (he.turkish = () => i.e(75629).then(i.t.bind(i, 75629, 19))),
          (he.ukrainian = () => i.e(22319).then(i.t.bind(i, 22319, 19))),
          (he.vietnamese = () => i.e(33844).then(i.t.bind(i, 33844, 19)));
        async function Nl(s) {
          if (he[s]) return he[s]();
        }
        const g = (0, Sr.l)(Nl),
          Dl = new Map([
            [2379780, { strInternalAppName: "Balatro", strBannerType: "bus" }],
            [
              413150,
              { strInternalAppName: "StardewValley", strBannerType: "farmer" },
            ],
            [
              1086940,
              { strInternalAppName: "BaldursGate3", strBannerType: "knight" },
            ],
            [
              1091500,
              { strInternalAppName: "Cyberpunk2077", strBannerType: "robot" },
            ],
            [
              1245620,
              { strInternalAppName: "EldenRing", strBannerType: "campfire" },
            ],
            [
              1794680,
              {
                strInternalAppName: "VampireSurvivors",
                strBannerType: "zombies",
              },
            ],
            [
              1174180,
              {
                strInternalAppName: "RedDeadRedemption2",
                strBannerType: "campfire",
              },
            ],
            [
              990080,
              { strInternalAppName: "HogwartsLegacy", strBannerType: "family" },
            ],
            [1942280, { strInternalAppName: "Brotato", strBannerType: "bus" }],
            [
              1868140,
              { strInternalAppName: "DaveTheDiver", strBannerType: "beach" },
            ],
            [
              1145360,
              { strInternalAppName: "Hades", strBannerType: "campfire" },
            ],
            [
              292030,
              { strInternalAppName: "TheWitcher3", strBannerType: "campfire" },
            ],
            [
              646570,
              { strInternalAppName: "SlayTheSpire", strBannerType: "city" },
            ],
            [
              2344520,
              { strInternalAppName: "Diablo4", strBannerType: "knight" },
            ],
            [
              1145350,
              { strInternalAppName: "Hades2", strBannerType: "campfire" },
            ],
            [
              250900,
              {
                strInternalAppName: "TheBindingOfIsaacRebirth",
                strBannerType: "busstop",
              },
            ],
            [
              377160,
              { strInternalAppName: "Fallout4", strBannerType: "apocalypse" },
            ],
            [
              2321470,
              {
                strInternalAppName: "DeepRockGalacticSurvivor",
                strBannerType: "miner",
              },
            ],
            [
              367520,
              { strInternalAppName: "HollowKnight", strBannerType: "miner" },
            ],
            [
              1030300,
              {
                strInternalAppName: "HollowKnightSilksong",
                strBannerType: "knight",
              },
            ],
            [
              2767030,
              { strInternalAppName: "MarvelRivals", strBannerType: "porch" },
            ],
            [
              2679460,
              {
                strInternalAppName: "MetaphorReFantazio",
                strBannerType: "bed",
              },
            ],
            [
              1313140,
              { strInternalAppName: "CultOfTheLamb", strBannerType: "city" },
            ],
            [
              275850,
              { strInternalAppName: "NoMansSky", strBannerType: "astronaut" },
            ],
            [
              2694490,
              { strInternalAppName: "PathOfExile2", strBannerType: "knight" },
            ],
            [
              1687950,
              { strInternalAppName: "Persona5Royal", strBannerType: "anime" },
            ],
            [
              582010,
              {
                strInternalAppName: "MonsterHunterWorld",
                strBannerType: "campfire",
              },
            ],
            [
              2142790,
              {
                strInternalAppName: "FieldsOfMistria",
                strBannerType: "farmer",
              },
            ],
            [
              553850,
              { strInternalAppName: "HELLDIVERS2", strBannerType: "porch" },
            ],
            [
              1623730,
              { strInternalAppName: "Palworld", strBannerType: "woodsman" },
            ],
            [588650, { strInternalAppName: "DeadCells", strBannerType: "bus" }],
            [
              1903340,
              {
                strInternalAppName: "ClairObscurExpedition33",
                strBannerType: "campfire",
              },
            ],
            [
              2993780,
              { strInternalAppName: "FantasyLifei", strBannerType: "woodsman" },
            ],
            [
              2623190,
              { strInternalAppName: "Oblivion", strBannerType: "knight" },
            ],
            [
              230410,
              { strInternalAppName: "Warframe", strBannerType: "robot" },
            ],
            [
              1551360,
              { strInternalAppName: "ForzaHorizon5", strBannerType: "car" },
            ],
            [
              976730,
              {
                strInternalAppName: "HaloMasterChiefCollection",
                strBannerType: "robot",
              },
            ],
            [12210, { strInternalAppName: "GTAIV", strBannerType: "car" }],
            [1562430, { strInternalAppName: "Dredge", strBannerType: "beach" }],
            [
              1446780,
              {
                strInternalAppName: "MonsterHunterRise",
                strBannerType: "campfire",
              },
            ],
            [
              3164500,
              { strInternalAppName: "Schedule1", strBannerType: "city" },
            ],
            [
              1817070,
              {
                strInternalAppName: "SpiderManRemastered",
                strBannerType: "superhero",
              },
            ],
            [
              105600,
              { strInternalAppName: "Terraria", strBannerType: "miner" },
            ],
            [
              1293830,
              { strInternalAppName: "ForzaHorizon4", strBannerType: "car" },
            ],
            [3527290, { strInternalAppName: "Peak", strBannerType: "porch" }],
            [
              2161700,
              { strInternalAppName: "Persona3Reload", strBannerType: "anime" },
            ],
            [
              1850570,
              {
                strInternalAppName: "DeathStranding",
                strBannerType: "busstop",
              },
            ],
            [
              2552430,
              { strInternalAppName: "KingdomHearts", strBannerType: "family" },
            ],
            [
              504230,
              { strInternalAppName: "Celeste", strBannerType: "adventurer" },
            ],
            [
              632470,
              { strInternalAppName: "DiscoElysium", strBannerType: "city" },
            ],
            [
              227300,
              {
                strInternalAppName: "EuroTruckSimulator2",
                strBannerType: "car",
              },
            ],
            [
              3405340,
              { strInternalAppName: "Megabonk", strBannerType: "zombies" },
            ],
            [
              2062430,
              { strInternalAppName: "BallxPit", strBannerType: "city" },
            ],
            [
              2592160,
              { strInternalAppName: "Dispatch", strBannerType: "superhero" },
            ],
            [
              1771300,
              {
                strInternalAppName: "KingdomComeDeliverance2",
                strBannerType: "knight",
              },
            ],
            [3241660, { strInternalAppName: "REPO", strBannerType: "porch" }],
            [
              1984270,
              {
                strInternalAppName: "DigimonStoryTimeStranger",
                strBannerType: "anime",
              },
            ],
            [2878980, { strInternalAppName: "NBA2K25", strBannerType: "city" }],
            [
              108600,
              {
                strInternalAppName: "ProjectZomboid",
                strBannerType: "zombies",
              },
            ],
            [
              381210,
              {
                strInternalAppName: "DeadByDaylight",
                strBannerType: "zombies",
              },
            ],
            [
              1401590,
              {
                strInternalAppName: "DisneyDreamlightValley",
                strBannerType: "family",
              },
            ],
            [
              892970,
              { strInternalAppName: "Valheim", strBannerType: "knight" },
            ],
          ]),
          Fl = new Map([
            ["adventurer", { className: be().Adventurer }],
            ["anime", { className: be().Anime }],
            ["apocalypse", { className: be().Apocalypse }],
            ["astronaut", { className: be().Astronaut }],
            ["beach", { className: be().Beach }],
            ["bed", { className: be().Bed }],
            ["bus", { className: be().Bus }],
            ["busstop", { className: be().BusStop }],
            ["campfire", { className: be().Campfire }],
            ["car", { className: be().Car }],
            ["city", { className: be().City }],
            ["family", { className: be().Family }],
            ["farmer", { className: be().Farmer }],
            ["knight", { className: be().Knight }],
            ["miner", { className: be().Miner }],
            ["porch", { className: be().Porch }],
            ["robot", { className: be().Robot }],
            ["superhero", { className: be().Superhero }],
            ["woodsman", { className: be().Woodsman }],
            ["zombies", { className: be().Zombies }],
          ]);
        function Wl(s) {
          return Dl.get(s);
        }
        function Rl(s) {
          return Fl.get(s);
        }
        function Fy(s) {
          const { appid: e } = s,
            { data: n } = useStoreItemDefaultInfo({ appid: e }),
            r = useIsSteamDeckForSaleInUserCountry();
          return !n || !n.name || !r
            ? null
            : jsx(Qi, { appid: e, app_name: n.name });
        }
        function Qi(s) {
          const { appid: e } = s,
            n = Wl(e);
          return n ? (0, t.jsx)(wl, { appBannerDef: n, ...s }) : null;
        }
        function wl(s) {
          const { appid: e, appBannerDef: n, app_name: r } = s,
            a = Rl(n.strBannerType),
            o = (0, wt.aL)(
              Qs.TS.STORE_BASE_URL +
                `app/${zl.wy}?deckapp=${e}&utm_source=topplayed_app_banner&utm_campaign=${e}`,
              "topplayed_app_banner",
              e,
            );
          return a
            ? (0, t.jsxs)("div", {
                className: be().BannerWrapper,
                children: [
                  (0, t.jsxs)("div", {
                    className: be().BannerTitle,
                    children: [
                      (0, t.jsx)("div", { className: be().DeckLogo }),
                      g.Localize("#DeckTopPlayedAppBanner_Title"),
                    ],
                  }),
                  (0, t.jsx)("a", {
                    href: o,
                    className: (0, D.A)(be().TopPlayedBannerCtn, a.className),
                    children: (0, t.jsxs)("div", {
                      className: be().BannerRightContent,
                      children: [
                        (0, t.jsx)("div", {
                          className: be().BannerHeader,
                          children: g.Localize(
                            "#DeckTopPlayedAppBanner_Header",
                          ),
                        }),
                        (0, t.jsx)("div", {
                          className: be().BannerGameText,
                          children: g.LocalizeReact(
                            "#DeckTopPlayedAppBanner_GameText",
                            (0, t.jsx)("span", { children: r }),
                          ),
                        }),
                      ],
                    }),
                  }),
                ],
              })
            : (console.warn(`No banner type found for ${n.strBannerType}`),
              null);
        }
        var $i = i(59970),
          Ul = i(41032),
          Ps = i(21721),
          Un = i(27894),
          Cl = i(94846),
          $n = i.n(Cl),
          Mr = i(48357),
          Kl = i(64774);
        function Gl(s) {
          const { appid: e } = s,
            n = (0, kt.$5)(e),
            { data: r } = (0, E.lv)(n),
            { data: a } = (0, E.J$)(n),
            o = (0, Un.n)(a);
          return !r || !a
            ? null
            : (0, t.jsxs)(S.Z, {
                focusable: !0,
                className: $n().ParentWidgetContainer,
                onActivate: () => {
                  window.location.href = o;
                },
                children: [
                  (0, t.jsx)("div", {
                    className: (0, D.A)($n().ParentCapsuleImageContainer),
                    children: (0, t.jsx)("a", {
                      href: o,
                      children: (0, t.jsx)("img", {
                        className: $n().ParentCapsuleImage,
                        src: (0, Ps.b0)(r, "small_capsule"),
                      }),
                    }),
                  }),
                  (0, t.jsxs)("div", {
                    className: $n().AppDetails,
                    children: [
                      (0, t.jsx)("a", {
                        className: (0, D.A)($n().GameName),
                        href: o,
                        children: a.name,
                      }),
                      (0, t.jsxs)("div", {
                        className: $n().PriceContainer,
                        children: [
                          (0, t.jsx)(Mr.NF, { id: n }),
                          (0, t.jsx)(Kl.r, {
                            appid: e,
                            className: $n().AddToWishlistButton,
                            bTextMode: !0,
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              });
        }
        var Oe = i(19813),
          Lr = i(64415),
          Yl = i(90405);
        function Ji(s, e) {
          return (0, m.useMemo)(() => {
            let r = [],
              a = new Map();
            for (let o of s)
              if (
                (o.featured &&
                  (r.push({ type: "trailer", key: `t_${o.id}`, data: o }),
                  a.set(o.id, !0)),
                r.length >= 2)
              )
                break;
            for (let o of e)
              r.push({ type: "screenshot", key: `s_${o.name}`, data: o });
            for (let o of s)
              a.has(o.id) ||
                r.push({ type: "trailer", key: `t_${o.id}`, data: o });
            return r;
          }, [s, e]);
        }
        var Ut = i(31382),
          kl = i(52951),
          os = i(47045),
          F = i(72609),
          A = i(68031),
          x = i(15252),
          ne = i(60351);
        function $s(s) {
          const { id: e, bSelfPurchaseOption: n, bHideNewTag: r } = s,
            { data: a } = (0, E.J$)(e);
          return a
            ? (0, t.jsx)(Mr.NF, {
                id: e,
                bPurchaseOptionDisplay: !0,
                bHidePrePurchase: !0,
                bSelfPurchaseOption: n,
                bHideNewTag: r,
              })
            : null;
        }
        var ln = i(42993),
          xn = i(75233),
          cn = i(80902),
          Es = i(51614),
          Is = i(57589);
        const Ts = new Is.wd("GameInterest");
        function ls(s, e) {
          return ["GameInterest", s, e];
        }
        function Vl(s, e, n, r) {
          s.setQueryData(ls(e, n), r);
        }
        function Ql(s) {
          const e = (0, xn.jE)(),
            n = (0, ln.LH)();
          return (
            m.useEffect(() => {
              const { appid: r, userInterest: a, markReady: o } = s;
              Vl(e, n, r, a), o();
            }, [e, n, s]),
            null
          );
        }
        function Ss(s) {
          const e = (0, ln.LH)();
          return (0, cn.I)({
            queryKey: ls(e, s),
            enabled: !!e,
            queryFn: async () => {
              throw (
                (Ts.Info(
                  "Fetching user game interest from the back end for ",
                  s,
                ),
                new Error("Fetching user game interest is not yet supported"))
              );
            },
          });
        }
        function Ar(s, e, n) {
          const r = (0, xn.jE)(),
            a = (0, wt.ru)(),
            o = (0, ln.LH)();
          return (0, Es.n)({
            mutationKey: [e, ...ls(o, s)],
            mutationFn: async (c) => {
              Ts.Info(`Mutating ${s} for ${e}`, c);
              const d = new FormData();
              d.set("sessionid", (0, U.KC)()),
                d.set("appid", s.toString()),
                d.set("snr", a);
              const { url: u, new_interest: p } = n(c, d);
              Ts.Info(" new interest before backend call", p),
                r.setQueryData(ls(o, s), p);
              try {
                const h = await fetch(u, { method: "POST", body: d });
                return h.ok
                  ? !0
                  : (Ts.Info(`request to ${e} ${s} failed with ${h}`, c), !1);
              } catch (h) {
                return Ts.Info(`request to ${e} ${s} failed with ${h}`, c), !1;
              }
            },
            onSuccess: (c, d) => {
              c || r.setQueryData(ls(o, s), d.old_interest);
            },
            onError: (c, d, u) => {
              r.setQueryData(ls(o, s), d.old_interest);
            },
          });
        }
        function Zi(s) {
          return Ar(s, "wishlist", (e, n) => {
            const { wishlist: r, old_interest: a } = e,
              o = { ...a, wishlist: r },
              c = r
                ? `${U.TS.STORE_BASE_URL}api/addtowishlist`
                : `${U.TS.STORE_BASE_URL}api/removefromwishlist`;
            return { new_interest: o, url: c };
          });
        }
        function $l(s) {
          return Ar(s, "ignore", (e, n) => {
            const { ignored: r, ignored_reason: a, old_interest: o } = e,
              c = { ...o, ignored: r, ignored_reason: a };
            r && a !== void 0
              ? n.set("ignore_reason", a.toString())
              : n.set("remove", "1");
            const d = `${U.TS.STORE_BASE_URL}recommended/ignorerecommendation/`;
            return { new_interest: c, url: d };
          });
        }
        function Jl(s) {
          return Ar(s, "follow", (e, n) => {
            const { following: r, old_interest: a } = e,
              o = { ...a, following: r };
            r || n.set("unfollow", "1");
            const c = `${U.TS.STORE_BASE_URL}explore/followgame/`;
            return { new_interest: o, url: c };
          });
        }
        var Xi = i(20525);
        function Zl(s) {
          let { trailers: e, screenshots: n, appid: r } = s;
          return (0, t.jsx)(Ut.QY, {
            supportsFullscreen: !1,
            supportsTheater: !0,
            children: (0, t.jsx)(ql, {
              children: (0, t.jsx)(Xl, {
                trailers: e,
                screenshots: n,
                appid: r,
              }),
            }),
          });
        }
        function Xl(s) {
          let { trailers: e, screenshots: n, appid: r } = s,
            a = (0, Ut.ri)(),
            o = a?.strMode == "theater",
            c = (0, Ut.Dy)(a, "theater"),
            d = (0, Ut.Dy)(a, "none"),
            u = (0, kl.tw)(),
            [p, h] = _l(o, d),
            f = Ji(e, n);
          Hl(f);
          const y = m.useCallback(
            (P) => {
              a.refTheater && a.refTheater(P);
            },
            [a],
          );
          if ((m.use(os.n.Ready()), f.length == 0)) return null;
          let j = f.map((P, O) =>
              P.type == "screenshot"
                ? (0, t.jsx)(
                    ec,
                    { autoFocus: O == 0, screenshot: P.data },
                    P.key,
                  )
                : P.type == "trailer"
                  ? (0, t.jsx)(
                      tc,
                      { autoFocus: O == 0, trailer: P.data },
                      P.key,
                    )
                  : null,
            ),
            B = o ? "" : os.n.Localize("#TrailerPlayer_FullScreen_Tooltip");
          return (0, t.jsx)("div", {
            ref: y,
            className: Oe.TheaterDialog,
            popover: "manual",
            children: (0, t.jsx)("div", {
              className: Oe.FocusRingClip,
              children: (0, t.jsx)(ae.q, {
                rootClassName: Oe.FocusRingRoot,
                disableFocusRing: o,
                children: (0, t.jsxs)(S.Z, {
                  ref: u.ref,
                  navRef: u.navRef,
                  className: Oe.GamepadCarousel,
                  "flow-children": "row",
                  navEntryPreferPosition: V.iU.MAINTAIN_X,
                  onOptionsActionDescription: B,
                  onOptionsButton: c,
                  onCancelButton: o ? d : void 0,
                  onGamepadDirection: p,
                  onFocusWithin: h,
                  children: [
                    !!r && (0, t.jsx)(dc, { appid: r, fnExitTheaterMode: d }),
                    j,
                  ],
                }),
              }),
            }),
          });
        }
        function Hl(s) {
          let e = s.length;
          (0, m.useLayoutEffect)(() => {
            if (e < 1) return;
            document
              .querySelectorAll(".gamehighlight_gamepadskeleton")
              .forEach((r) => r.remove());
          }, [e]);
        }
        function ql(s) {
          let { children: e } = s,
            n = (0, m.useCallback)(() => {}, []),
            [r, a] = (0, m.useState)(!0);
          return (0, t.jsx)(Ys.v, {
            autoplayEnabled: !1,
            setAutoplayEnabled: n,
            playerVolume: 1,
            setPlayerVolume: n,
            audioMuted: r,
            setAudioMuted: a,
            children: e,
          });
        }
        function _l(s, e) {
          let n = (0, m.useCallback)(
            (a) => {
              s && !a && e();
            },
            [s, e],
          );
          return [(0, m.useCallback)((a) => !!s, [s]), n];
        }
        function ec(s) {
          let { screenshot: e, autoFocus: n } = s,
            r = (0, D.A)(Oe.CarouselItem, Oe.Screenshot);
          return (0, t.jsx)(S.Z, {
            className: r,
            autoFocus: n,
            focusable: !0,
            onOKActionDescription: "",
            children: (0, t.jsx)("img", { src: e.full, alt: e.altText }),
          });
        }
        function tc(s) {
          let { trailer: e, autoFocus: n } = s;
          return e.dashManifests
            ? (0, t.jsx)(lc, { trailer: e, autoFocus: n })
            : (0, t.jsx)(nc, { trailer: e, autoFocus: n });
        }
        function nc(s) {
          let { trailer: e, autoFocus: n } = s,
            r = (0, m.useRef)(null),
            [a, o] = sc(),
            c = (0, ie.Ue)(r, o),
            [d, u] = rc(r),
            p = ic(d),
            h = ac(r),
            f = (0, m.useCallback)(
              (O) => {
                let M = r.current;
                if (O.detail.button == Lr.pR.TRIGGER_LEFT && M) {
                  (M.currentTime = Math.max(0, M.currentTime - 10)),
                    O.preventDefault(),
                    O.stopPropagation();
                  return;
                }
                if (O.detail.button == Lr.pR.TRIGGER_RIGHT && M) {
                  (M.currentTime = Math.min(M.duration, M.currentTime + 10)),
                    O.preventDefault(),
                    O.stopPropagation();
                  return;
                }
              },
              [r],
            );
          if (!e.webmMax) return null;
          let y = e.poster || "",
            j = a.bMuted
              ? os.n.Localize("#TrailerPlayer_Unmute_Tooltip")
              : os.n.Localize("#TrailerPlayer_Mute_Tooltip"),
            B = a.bPaused
              ? os.n.Localize("#TrailerPlayer_Play_Tooltip")
              : os.n.Localize("#TrailerPlayer_Pause_Tooltip"),
            P = (0, D.A)(Oe.CarouselItem, Oe.SingleFileTrailer);
          return (0, t.jsx)(S.Z, {
            className: P,
            onActivate: u,
            onOKActionDescription: B,
            ...p,
            onSecondaryButton: h,
            onSecondaryActionDescription: j,
            onButtonDown: f,
            autoFocus: n,
            children: (0, t.jsx)("video", {
              ref: c,
              controls: !0,
              muted: !0,
              disablePictureInPicture: !0,
              controlsList: "nodownload",
              playsInline: !0,
              preload: "none",
              poster: y,
              children: (0, t.jsx)("source", {
                src: e.webmMax,
                type: "video/webm",
              }),
            }),
          });
        }
        function sc() {
          let [s, e] = (0, m.useState)({ bPaused: !0, bMuted: !0 }),
            n = (0, ie.QS)(
              (r) => {
                if (!r) return () => {};
                let a = () => {
                    e((u) => ({ ...u, bMuted: r.muted }));
                  },
                  o = () => {
                    e((u) => ({ ...u, bPaused: !1 }));
                  },
                  c = () => {
                    e((u) => ({ ...u, bPaused: !0 }));
                  };
                return (
                  r.addEventListener("volumechange", a),
                  r.addEventListener("play", o),
                  r.addEventListener("pause", c),
                  () => {
                    r.removeEventListener("volumechange", a),
                      r.removeEventListener("play", o),
                      r.removeEventListener("pause", c);
                  }
                );
              },
              [e],
            );
          return [s, n];
        }
        function rc(s) {
          let e = (0, m.useRef)(!1),
            n = (0, m.useRef)(null),
            r = (0, m.useCallback)(
              (o) => {
                let c = s.current;
                if (c && ((e.current = o), !n.current)) {
                  if (!o) {
                    c.paused || c.pause();
                    return;
                  }
                  (n.current = c.play()),
                    n.current
                      .then(() => {
                        !e.current && s.current && s.current.pause(),
                          (n.current = null);
                      })
                      .catch(() => {
                        n.current = null;
                      });
                }
              },
              [s],
            ),
            a = (0, m.useCallback)(() => {
              let o = s.current;
              o && r(o.paused);
            }, [r, s]);
          return [r, a];
        }
        function ic(s) {
          let e = (0, m.useCallback)(() => s(!0), [s]),
            n = (0, m.useCallback)(() => s(!1), [s]);
          return { onGamepadFocus: e, onGamepadBlur: n };
        }
        function ac(s) {
          return (0, m.useCallback)(() => {
            let n = s.current;
            n && (n.muted = !n.muted);
          }, [s]);
        }
        function oc(s) {
          const { poster: e, bVideoReady: n } = s;
          return e
            ? (0, t.jsxs)("div", {
                className: (0, D.A)(Oe.StillPoster, n && Oe.VideoStarted),
                children: [
                  (0, t.jsx)("img", {
                    className: (0, D.A)(Oe.Poster),
                    src: e,
                    alt: "",
                  }),
                  (0, t.jsx)(Xi.ud, { className: Oe.Icon }),
                ],
              })
            : null;
        }
        function lc(s) {
          let { trailer: e, autoFocus: n } = s,
            [r, a] = (0, m.useState)(!1),
            [o, c] = (0, m.useState)(!1),
            [d, u] = (0, ie.TP)();
          const p = m.useCallback(() => {
            a(!0);
          }, []);
          let h,
            f = (0, D.A)(Oe.CarouselItem, Oe.DashTrailer);
          return (0, t.jsxs)(S.Z, {
            ref: u,
            className: f,
            onFocusWithin: c,
            autoFocus: n,
            children: [
              (0, t.jsx)(oc, { poster: e.poster, bVideoReady: r }),
              (0, t.jsx)(Yl.K, {
                mode: "JustLoad",
                horizontal: !0,
                holdGamepadFocus: !0,
                children: (0, t.jsx)(Ir.P, {
                  dashManifests: e.dashManifests,
                  hlsManifest: e.hlsManifest,
                  screenshot: e.poster,
                  altText: e.title,
                  forcePause: !o || !d,
                  onPlaybackEnd: h,
                  onPlaybackStart: p,
                  title: e.title,
                  category: e.category,
                  statsURL: e.statsURL,
                }),
              }),
            ],
          });
        }
        function cc(s, e) {
          return F.TS.STORE_ITEM_BASE_URL + s.replace("${FILENAME}", e);
        }
        function dc(s) {
          const { appid: e, fnExitTheaterMode: n } = s,
            { data: r } = (0, E.J$)({ appid: e }),
            { data: a } = (0, E.wl)({ appid: e }),
            { data: o } = (0, E.lv)({ appid: e }),
            { data: c } = Ss(e),
            { mutateAsync: d } = Zi(e),
            u = !!c?.wishlist,
            p = !c?.owned,
            h = m.useCallback(() => {
              c && d({ wishlist: !c.wishlist, old_interest: c });
            }, [d, c]);
          let f, y;
          p &&
            c &&
            ((f = $.Z.Localize(
              u ? "#Sale_RemoveFromWishlist" : "#Sale_AddToWishlist",
            )),
            (y = h));
          const j = m.useCallback(() => {
            window.postMessage({ method: "FocusPurchaseOptions" });
          }, []);
          if (!o) return null;
          let B = (0, D.A)(Oe.CarouselItem, Oe.TitleCard);
          return (0, t.jsx)(S.Z, {
            className: B,
            onActivate: j,
            onSecondaryActionDescription: f,
            onSecondaryButton: y,
            onOptionsActionDescription: null,
            onOptionsButton: () => {},
            onFocus: n,
            children: (0, t.jsxs)(A.s, {
              position: "absolute",
              inset: "0 0 0 0",
              direction: "column",
              overflow: "hidden",
              children: [
                (0, t.jsx)("img", {
                  className: Oe.Header,
                  src: cc(o.asset_url_format, o.header),
                  alt: "",
                }),
                (0, t.jsxs)(A.s, {
                  className: Oe.Bottom,
                  flexGrow: "1",
                  flexShrink: "1",
                  direction: "column",
                  overflow: "hidden",
                  padding: "3",
                  paddingTop: "2",
                  children: [
                    (0, t.jsx)(A.s, {
                      flexGrow: "0",
                      flexShrink: "0",
                      children: (0, t.jsx)(x.EY, {
                        contrast: "title",
                        weight: "heavy",
                        size: { initial: "2", md: "4", lg: "6" },
                        children: r?.name,
                      }),
                    }),
                    (0, t.jsx)(ne.az, {
                      flexGrow: "1",
                      overflow: "hidden",
                      children: (0, t.jsx)(x.EY, {
                        size: { initial: "1", md: "2", lg: "4" },
                        lineClamp: 7,
                        contrast: "body",
                        children: a?.short_description,
                      }),
                    }),
                    r?.best_purchase_option &&
                      (0, t.jsxs)(A.s, {
                        className: Oe.BottomRow,
                        flexGrow: "0",
                        flexShrink: "0",
                        children: [
                          (0, t.jsx)($s, { id: { appid: e }, bHideNewTag: !0 }),
                          p &&
                            (0, t.jsxs)(A.s, {
                              className: Oe.WishlistButton,
                              children: [
                                u
                                  ? (0, t.jsx)(N.qnF, {
                                      className: Oe.StarIcon,
                                    })
                                  : (0, t.jsx)(N.T4m, {
                                      className: Oe.StarIcon,
                                    }),
                                (0, t.jsx)(Ae.xwO, {
                                  button: "X",
                                  className: Oe.ButtonIcon,
                                }),
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
        var Me = i(20338),
          cs = i(84456),
          Hi = i(7817),
          Ms = i(71742);
        function uc() {
          let s = document.cookie.match(
            /(^|; )bGameHighlightAutoplayDisabled=([^;]*)/,
          );
          return !(s && s[2] == "true");
        }
        function mc(s) {
          let e = new Date();
          e.setTime(e.getTime() + 1e3 * 60 * 60 * 24 * 365 * 10);
          let n = s ? "false" : "true";
          document.cookie = `bGameHighlightAutoplayDisabled=${n}; expires=${e.toUTCString()};path=/`;
        }
        function gc() {
          let s = document.cookie.match(
              /(^|; )flGameHighlightPlayerVolume=([^;]*)/,
            ),
            e = s && s[2] ? parseFloat(s[2]) : 80;
          return e < 0 ? 0 : e > 100 ? 100 : e;
        }
        function pc(s) {
          let e = new Date();
          e.setTime(e.getTime() + 1e3 * 60 * 60 * 24 * 365 * 10),
            (document.cookie = `flGameHighlightPlayerVolume=${s}; expires=${e.toUTCString()};path=/`);
        }
        function hc() {
          let s = document.cookie.match(
            /(^|; )bGameHighlightAudioEnabled=([^;]*)/,
          );
          return s && s[2] == "true";
        }
        function fc(s) {
          let e = new Date();
          e.setTime(e.getTime() + 1e3 * 60 * 60 * 24 * 365 * 10);
          let n = s ? "true" : "false";
          document.cookie = `bGameHighlightAudioEnabled=${n}; expires=${e.toUTCString()};path=/`;
        }
        function yc(s) {
          let { children: e } = s,
            [n, r] = (0, m.useState)(uc),
            a = (0, m.useCallback)((f) => {
              mc(f), r(f);
            }, []),
            [o, c] = (0, m.useState)(gc),
            d = (0, m.useCallback)((f) => {
              (f = f * 100), pc(f), c(f);
            }, []),
            [u, p] = (0, m.useState)(hc),
            h = (0, m.useCallback)((f) => {
              fc(!f), p(!f);
            }, []);
          return (0, t.jsx)(Ys.v, {
            autoplayEnabled: n,
            setAutoplayEnabled: a,
            playerVolume: o / 100,
            setPlayerVolume: d,
            audioMuted: !u,
            setAudioMuted: h,
            children: e,
          });
        }
        function xc() {
          return (0, Ys.F)().m_bAutoplayEnabled ?? !1;
        }
        const qi = (0, m.createContext)(void 0);
        function vc(s) {
          let { orderedItems: e, children: n } = s,
            r = xc(),
            [a, o] = (0, m.useState)(() => bc(e, r)),
            c = (0, m.useMemo)(() => {
              if (e.length == 0)
                return {
                  strActiveID: "",
                  strActiveType: "",
                  strPreviousID: "",
                  strNextID: "",
                  fnSetActive: o,
                };
              let d = e.findIndex((f) => f.key == a);
              d = d || 0;
              let u = e[d].type,
                p = Or("previous", e, d, r),
                h = Or("next", e, d, r);
              return {
                strActiveID: a,
                strActiveType: u,
                strPreviousID: p,
                strNextID: h,
                fnSetActive: o,
              };
            }, [a, o, e, r]);
          return (0, t.jsx)(qi.Provider, { value: c, children: n });
        }
        function dn() {
          let s = (0, m.useContext)(qi);
          return (
            (0, Ms.wT)(
              s != null,
              "useHighlightContext used outside of HighlightContextProvider",
            ),
            s
          );
        }
        function _i(s) {
          let e = dn();
          return s == e.strActiveID;
        }
        function jc(s) {
          let e = dn();
          return s == e.strNextID;
        }
        function bc(s, e) {
          return (
            (0, Ms.wT)(s.length > 0, "Unexpected length"),
            s[0].type == "trailer" && !e ? Or("next", s, 0, e) : s[0].key
          );
        }
        function Or(s, e, n, r) {
          (0, Ms.wT)(e.length > 0, "Unexpected length");
          let a = n;
          do
            if (
              (s == "next"
                ? (a = (a + 1) % e.length)
                : (a = (a - 1 + e.length) % e.length),
              e[a].type != "trailer" || r)
            )
              break;
          while (a != n);
          return e[a].key;
        }
        var Ct = i(69131),
          Ls = i(13854);
        function Bc(s) {
          let { items: e } = s,
            {
              refStrip: n,
              refTrack: r,
              refThumb: a,
              fnRegisterItemElement: o,
            } = Pc(),
            d = (0, Ut.ri)()?.strMode == "theater";
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsxs)("div", {
                className: (0, D.A)(Ct.StripSkeleton, d && Ct.TheaterMode),
                children: [
                  (0, t.jsx)("div", { className: Ct.Items }),
                  (0, t.jsx)("div", { className: Ct.Scrollbar }),
                ],
              }),
              (0, t.jsxs)("div", {
                className: (0, D.A)(Ct.Strip, d && Ct.TheaterMode),
                children: [
                  (0, t.jsx)(Ec, {
                    refStrip: n,
                    items: e,
                    registerItemElement: o,
                  }),
                  (0, t.jsx)(Sc, { refTrack: r, refThumb: a }),
                ],
              }),
            ],
          });
        }
        function Pc() {
          let s = dn(),
            e = (0, m.useRef)(null),
            n = (0, m.useRef)(null),
            r = (0, m.useRef)(null),
            a = (0, m.useRef)(null),
            o = (0, m.useRef)(void 0);
          o.current || (o.current = new Map()),
            (0, m.useEffect)(() => {
              const u = r.current,
                p = n.current,
                h = e.current;
              if (!u || !p || !h) return;
              let f = h.matches(":dir(rtl)"),
                y = () => {
                  a.current ||
                    (a.current = requestAnimationFrame(() => {
                      a.current = null;
                      let j = p.getBoundingClientRect(),
                        B = u.getBoundingClientRect(),
                        P = j.width - B.width,
                        O = h.scrollWidth - h.clientWidth,
                        M;
                      f
                        ? (M = (0, Ls.Fu)(h.scrollLeft, -O, 0, -P, 0))
                        : (M = (0, Ls.Fu)(h.scrollLeft, 0, O, 0, P)),
                        (u.style.transform = `translateX( ${M}px )`);
                    }));
                };
              return (
                h.addEventListener("scroll", y, { passive: !0 }),
                () => {
                  h.removeEventListener("scroll", y),
                    a.current && cancelAnimationFrame(a.current);
                }
              );
            }, []),
            (0, m.useEffect)(() => {
              const u = r.current,
                p = n.current,
                h = e.current;
              if (!u || !p || !h) return;
              let f = null,
                y = h.matches(":dir(rtl)"),
                j = (O) => {
                  if (!f) return;
                  let M = O.clientX - f.nInitialClientX,
                    z = (0, Ls.OQ)(f.nInitialPosition + M, 0, f.nTrackWidth),
                    R = (0, Ls.Fu)(z, 0, f.nTrackWidth, 0, f.nScrollWidth);
                  y && (R = -(f.nScrollWidth - R)),
                    h.scrollTo({ left: R, behavior: "auto" });
                },
                B = (O) => {
                  p.setPointerCapture(O.pointerId);
                  let M = p.getBoundingClientRect(),
                    z = u.getBoundingClientRect(),
                    R = M.width - z.width,
                    G = h.scrollWidth - h.clientWidth,
                    W = Math.max(z.left - M.left, 0),
                    xe = O.clientX;
                  O.target != u &&
                    ((W = O.clientX - M.left),
                    (W -= Math.floor(z.width / 2)),
                    (W = (0, Ls.OQ)(W, 0, R))),
                    (f = {
                      nInitialPosition: W,
                      nInitialClientX: xe,
                      nTrackWidth: R,
                      nScrollWidth: G,
                    }),
                    (document.body.style.userSelect = "none"),
                    j(O);
                },
                P = (O) => {
                  (f = null), (document.body.style.userSelect = "");
                };
              return (
                p.addEventListener("pointerdown", B),
                p.addEventListener("pointermove", j),
                p.addEventListener("lostpointercapture", P),
                () => {
                  p.removeEventListener("pointerdown", B),
                    p.removeEventListener("pointermove", j),
                    p.removeEventListener("lostpointercapture", P);
                }
              );
            }, []);
          let c = s.strActiveID;
          (0, m.useEffect)(() => {
            let u = o.current.get(c);
            if (!u) return;
            const p = e.current;
            if (!p) return;
            let h = p.getBoundingClientRect(),
              f = u.getBoundingClientRect();
            if (f.left < h.left || f.right > h.right) {
              let y = f.left - h.left + p.scrollLeft;
              p.scrollTo({ left: y, behavior: "smooth" });
            }
          }, [c]);
          let d = (0, m.useCallback)(
            (u, p) => {
              p ? o.current.set(u, p) : o.current.delete(u);
            },
            [o],
          );
          return {
            refStrip: e,
            refTrack: n,
            refThumb: r,
            fnRegisterItemElement: d,
          };
        }
        function Ec(s) {
          let { refStrip: e, items: n, registerItemElement: r } = s,
            a = Ic(),
            o = n.map((c) =>
              (0, t.jsx)(Tc, { item: c, registerItemElement: r }, c.key),
            );
          return (0, t.jsx)("div", {
            ref: e,
            className: Ct.StripItems,
            onKeyDown: a,
            tabIndex: 0,
            children: o,
          });
        }
        function Ic() {
          let s = dn();
          return (0, m.useCallback)(
            (n) => {
              n.repeat ||
                (n.code == "ArrowLeft"
                  ? (n.currentTarget.matches(":dir(rtl)")
                      ? s.strNextID && s.fnSetActive(s.strNextID)
                      : s.strPreviousID && s.fnSetActive(s.strPreviousID),
                    n.preventDefault())
                  : n.code == "ArrowRight" &&
                    (n.currentTarget.matches(":dir(rtl)")
                      ? s.strPreviousID && s.fnSetActive(s.strPreviousID)
                      : s.strNextID && s.fnSetActive(s.strNextID),
                    n.preventDefault()));
            },
            [s],
          );
        }
        function Tc(s) {
          let { item: e, registerItemElement: n } = s,
            r = dn(),
            a = e.key == r.strActiveID,
            o = () => r.fnSetActive(e.key),
            c = e.key,
            d = (0, m.useCallback)((h) => n(c, h), [c, n]),
            u = e.data.thumbnail ? e.data.thumbnail : "",
            p = (0, D.A)(Ct.Item, a && Ct.Active);
          return (0, t.jsxs)("div", {
            ref: d,
            className: p,
            onClick: o,
            children: [
              !!u && (0, t.jsx)("img", { src: u, alt: "" }),
              e.type == "trailer" &&
                (0, t.jsx)("div", {
                  className: Ct.PlayIcon,
                  children: (0, t.jsx)(Xi.ud, {}),
                }),
            ],
          });
        }
        function Sc(s) {
          let { refTrack: e, refThumb: n } = s,
            r = dn(),
            a = r.strPreviousID ? () => r.fnSetActive(r.strPreviousID) : void 0,
            o = r.strNextID ? () => r.fnSetActive(r.strNextID) : void 0;
          return (0, t.jsxs)("div", {
            className: Ct.StripScrollbar,
            children: [
              (0, t.jsx)("div", {
                className: Ct.Arrow,
                onClick: a,
                children: (0, t.jsx)(Js, { direction: "left" }),
              }),
              (0, t.jsx)("div", {
                ref: e,
                className: Ct.Track,
                children: (0, t.jsx)("div", { ref: n, className: Ct.Thumb }),
              }),
              (0, t.jsx)("div", {
                className: Ct.Arrow,
                onClick: o,
                children: (0, t.jsx)(Js, { direction: "right" }),
              }),
            ],
          });
        }
        function Js(s) {
          let { direction: e } = s;
          return e == "right"
            ? (0, t.jsx)("svg", {
                viewBox: "0 0 49 79",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: (0, t.jsx)("path", {
                  d: "M8.81647 0L48 39.5005L8.81647 79L0 70.1124L30.3671 39.4995L0 8.88756L8.81647 0Z",
                  fill: "currentColor",
                }),
              })
            : (0, t.jsx)("svg", {
                viewBox: "0 0 49 80",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: (0, t.jsx)("path", {
                  d: "M39.3427 79.6279L0.159182 40.1274L39.3427 0.627931L48.1592 9.51549L17.7921 40.1284L48.1592 70.7404L39.3427 79.6279Z",
                  fill: "currentColor",
                }),
              });
        }
        var ea = i(82734),
          Mc = i(95396),
          Zs = i(86048);
        const Lc = 5e3;
        function Ac(s) {
          let { appName: e, trailers: n, screenshots: r } = s,
            a = Oc(),
            o = Ji(n, r);
          return (
            zc(o),
            o.length == 0
              ? null
              : (0, t.jsx)(Ut.QY, {
                  supportsTheater: !a,
                  supportsFullscreen: (0, ea.tg)(),
                  children: (0, t.jsx)(yc, {
                    children: (0, t.jsx)(vc, {
                      orderedItems: o,
                      children: (0, t.jsxs)(Dc, {
                        children: [
                          (0, t.jsx)(Wc, { appName: e, items: o }),
                          (0, t.jsx)(Bc, { items: o }),
                        ],
                      }),
                    }),
                  }),
                })
          );
        }
        function Oc() {
          return (
            (0, Mc.$)(`(max-width: ${Me.storeNarrowResponsiveWidth})`) ||
            F.TS.IN_MOBILE_WEBVIEW
          );
        }
        function zc(s) {
          let e = s.length;
          (0, m.useLayoutEffect)(() => {
            if (e < 1) return;
            document
              .querySelectorAll(".gamehighlight_desktopskeleton")
              .forEach((r) => r.remove());
          }, [e]);
        }
        const ta = (0, m.createContext)(!1);
        function Nc() {
          return (0, m.useContext)(ta);
        }
        function Dc(s) {
          let { children: e } = s,
            [n, r] = (0, m.useState)(!1),
            a = (0, m.useCallback)((u) => r(u.isIntersecting), []),
            o = (0, ie.BL)(a),
            { refRoot: c } = Fc(n),
            d = (0, ie.Ue)(o, c);
          return (0, t.jsx)(ta.Provider, {
            value: n,
            children: (0, t.jsx)("div", { ref: d, children: e }),
          });
        }
        function Fc(s) {
          let e = (0, m.useRef)(null),
            n = (0, m.useRef)(0),
            r = (0, m.useRef)(!1),
            a = (0, m.useRef)(s),
            o = dn(),
            c = (0, m.useRef)(o);
          c.current = o;
          let u = ((0, Ut.ri)()?.strMode ?? "none") != "none",
            p = (0, m.useRef)(u);
          p.current = u;
          let h = (0, m.useCallback)(() => {
              if (
                !c.current ||
                c.current.strActiveType != "screenshot" ||
                n.current ||
                r.current ||
                p.current ||
                !a.current
              )
                return;
              let j = () => {
                (n.current = 0), c.current.fnSetActive(c.current.strNextID);
              };
              n.current = window.setTimeout(j, Lc);
            }, []),
            f = (0, m.useCallback)(() => {
              n.current && (window.clearTimeout(n.current), (n.current = 0));
            }, []),
            y = o.strActiveID;
          return (
            (0, m.useEffect)(() => {
              h();
            }, [y]),
            (0, m.useEffect)(() => {
              u ? f() : h();
            }, [u]),
            (0, m.useEffect)(() => {
              const j = e.current;
              if (!j) return;
              let B = () => {
                  document.visibilityState == "visible" ? h() : f();
                },
                P = () => {
                  (r.current = !0), f();
                },
                O = () => {
                  (r.current = !1), h();
                };
              return (
                j.addEventListener("pointerenter", P),
                j.addEventListener("pointerleave", O),
                document.addEventListener("visibilitychange", B),
                () => {
                  j.removeEventListener("pointerenter", P),
                    j.removeEventListener("pointerleave", O),
                    document.addEventListener("visibilitychange", B);
                }
              );
            }, []),
            (0, m.useEffect)(() => {
              (a.current = s), s ? h() : f();
            }, [s, h, f]),
            { refRoot: e }
          );
        }
        function Wc(s) {
          let { appName: e, items: n } = s,
            r = dn(),
            a = Kc(),
            o = (0, Ut.ri)(),
            c = o?.strMode == "theater",
            [d, u] = Gc(),
            [p, h] = (0, Zs.Rb)(),
            f = p ? r.strActiveID : "",
            y = wc(r),
            j = (0, ie.Ue)(o?.refTheater, y),
            B = n.map((M) =>
              M.type == "screenshot"
                ? (0, t.jsx)(
                    Yc,
                    { id: M.key, screenshot: M.data, focus: M.key == f },
                    M.key,
                  )
                : M.type == "trailer"
                  ? (0, t.jsx)(
                      kc,
                      { id: M.key, trailer: M.data, focus: M.key == f },
                      M.key,
                    )
                  : null,
            ),
            P = r.strPreviousID ? () => r.fnSetActive(r.strPreviousID) : void 0,
            O = r.strNextID ? () => r.fnSetActive(r.strNextID) : void 0;
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)(Rc, {
                ref: j,
                className: Me.TheaterDialog,
                ...h,
                children: (0, t.jsxs)("div", {
                  className: Me.TheaterModeFrame,
                  children: [
                    (0, t.jsx)(Uc, { appName: e }),
                    (0, t.jsxs)("div", {
                      ref: o?.refFullscreen,
                      className: Me.ItemViewArea,
                      ...u,
                      onKeyDown: a,
                      tabIndex: 0,
                      children: [
                        B,
                        (0, t.jsx)("div", {
                          className: (0, D.A)(
                            Me.FullscreenArrow,
                            d && Me.Visible,
                            Me.Previous,
                          ),
                          onClick: P,
                          "data-keepcontrols": !0,
                          children: (0, t.jsx)(Js, { direction: "left" }),
                        }),
                        (0, t.jsx)("div", {
                          className: (0, D.A)(
                            Me.FullscreenArrow,
                            d && Me.Visible,
                            Me.Next,
                          ),
                          onClick: O,
                          "data-keepcontrols": !0,
                          children: (0, t.jsx)(Js, { direction: "right" }),
                        }),
                      ],
                    }),
                    (0, t.jsx)(Cc, { items: n, activeItem: r.strActiveID }),
                  ],
                }),
              }),
              (0, t.jsx)("div", {
                className: (0, D.A)(Me.SkeletonViewArea, c && Me.TheaterMode),
              }),
            ],
          });
        }
        function Rc(s) {
          let { ref: e, children: n, ...r } = s,
            a = (0, Ut.ri)(),
            o = a?.strMode,
            c = (0, Ut.Dy)(a, "none"),
            d = (0, m.useCallback)(
              (u) => {
                u.target === u.currentTarget && c();
              },
              [c],
            );
          return (
            (0, m.useEffect)(() => {
              if (o != "theater") return;
              let u = (p) => {
                p.key == "Escape" && !p.repeat && c();
              };
              return (
                window.addEventListener("keydown", u),
                () => window.removeEventListener("keydown", u)
              );
            }, [o, c]),
            (0, t.jsx)("div", {
              ref: e,
              ...r,
              popover: "manual",
              onClick: d,
              children: n,
            })
          );
        }
        function wc(s) {
          let e = (0, m.useCallback)(
            (n) => {
              n == "left" && s.strNextID
                ? s.fnSetActive(s.strNextID)
                : n == "right" &&
                  s.strPreviousID &&
                  s.fnSetActive(s.strPreviousID);
            },
            [s],
          );
          return (0, Zs.zO)(e);
        }
        function Uc(s) {
          let { appName: e } = s,
            n = (0, Ut.ri)(),
            r = (0, Ut.Dy)(n, "none");
          return (0, t.jsxs)("div", {
            className: Me.TheaterModeHeader,
            children: [
              (0, t.jsx)("div", {
                className: Me.Center,
                children: (0, L.we)("#GameHighlight_Theater_Header", e),
              }),
              (0, t.jsx)("div", {
                className: Me.Right,
                children: (0, t.jsx)(N.tmm, { onClick: r }),
              }),
            ],
          });
        }
        function Cc(s) {
          let { items: e, activeItem: n } = s,
            r = e.findIndex((o) => n && o.key == n),
            a = "";
          return (
            r >= 0 &&
              (a = (0, L.we)(
                "#GameHighlight_Theater_ItemCount",
                r + 1,
                e.length,
              )),
            (0, t.jsx)("div", {
              className: Me.TheaterModeFooter,
              children: a.length > 0 && (0, t.jsx)("div", { children: a }),
            })
          );
        }
        function Kc() {
          let s = dn();
          return (0, m.useCallback)(
            (n) => {
              n.repeat ||
                s.strActiveType == "trailer" ||
                (n.code == "ArrowLeft"
                  ? (n.currentTarget.matches(":dir(rtl)")
                      ? s.strNextID && s.fnSetActive(s.strNextID)
                      : s.strPreviousID && s.fnSetActive(s.strPreviousID),
                    n.preventDefault())
                  : n.code == "ArrowRight" &&
                    (n.currentTarget.matches(":dir(rtl)")
                      ? s.strPreviousID && s.fnSetActive(s.strPreviousID)
                      : s.strNextID && s.fnSetActive(s.strNextID),
                    n.preventDefault()));
            },
            [s],
          );
        }
        function Gc() {
          let [s, e] = (0, cs.if)(),
            n = (0, m.useRef)({ element: void 0, bKeepControls: !1 }),
            r = (0, m.useCallback)(
              (p) => {
                if (p.target == n.current.element) return;
                let h = (0, cs.Ae)(p);
                n.current = { element: p.target, bKeepControls: h };
              },
              [n],
            ),
            a = (0, m.useCallback)(
              (p) => {
                if (n.current.bKeepControls) {
                  e(!0, 0);
                  return;
                }
                e(!0, p);
              },
              [n, e],
            ),
            o = (0, m.useCallback)(
              (p) => {
                p.pointerType != "touch" && (r(p), a((0, cs.Av)(p)));
              },
              [a, r],
            ),
            c = (0, m.useCallback)(
              (p) => {
                p.pointerType != "touch" && (r(p), a((0, cs.Av)(p)));
              },
              [r, a],
            ),
            d = (0, m.useCallback)(
              (p) => {
                p.pointerType != "touch" &&
                  ((n.current = { element: void 0, bKeepControls: !1 }),
                  a((0, cs.Ug)()));
              },
              [n, a],
            ),
            u = (0, m.useCallback)(
              (p) => {
                a((0, cs.Av)(p));
              },
              [a],
            );
          return [
            s,
            {
              onPointerEnter: o,
              onPointerMove: c,
              onPointerLeave: d,
              onPointerDown: u,
            },
          ];
        }
        function Yc(s) {
          let { id: e, screenshot: n, focus: r } = s,
            a = _i(e),
            o = jc(e),
            c = na(a || o),
            d = (0, Ut.ri)(),
            u = (0, Ut.Dy)(d, "theater"),
            p = !d?.strMode || d.strMode == "none",
            h = (0, Zs.b$)(r);
          if (!c) return null;
          let f = (0, D.A)(
              Me.ViewedItem,
              a && Me.Active,
              Me.Screenshot,
              p && Me.PageEmbedded,
            ),
            y = n.full,
            j = p ? u : void 0;
          return (0, t.jsxs)("div", {
            ref: h,
            className: f,
            onClick: j,
            tabIndex: 0,
            children: [
              (0, t.jsx)("img", { src: y, alt: n.altText }),
              (0, t.jsxs)("div", {
                className: Me.Controls,
                children: [
                  d?.bSupportsTheater && (0, t.jsx)(Hi.tS, {}),
                  d?.bSupportsFullscreen && (0, t.jsx)(Hi.Wc, {}),
                ],
              }),
            ],
          });
        }
        function kc(s) {
          let { id: e, trailer: n, focus: r } = s,
            a = _i(e),
            o = na(a),
            [c, d] = (0, ie.TP)(),
            u = Nc(),
            p = dn(),
            h = (0, m.useCallback)(() => p.fnSetActive(p.strNextID), [p]);
          if (!o) return null;
          let f = (0, D.A)(Me.ViewedItem, a && Me.Active, Me.Trailer);
          return (0, t.jsx)(Ut.vG, {
            drop: !(0, ea.tg)(),
            children: (0, t.jsx)("div", {
              ref: d,
              className: f,
              children: (0, t.jsx)(Ir.P, {
                dashManifests: n.dashManifests,
                hlsManifest: n.hlsManifest,
                screenshot: n.poster,
                altText: n.title,
                forcePause: !a || !c || !u,
                onPlaybackEnd: h,
                title: n.title,
                category: n.category,
                statsURL: n.statsURL,
                focus: r,
              }),
            }),
          });
        }
        function na(s) {
          let e = (0, m.useRef)(!1);
          return s && (e.current = !0), e.current;
        }
        var Jn = i(55051),
          Qt = i(26356),
          Vc = i(46477),
          Qc = i(6046),
          $c = i(35111),
          vn = i.n($c),
          Zn = i(41944);
        function Jc(s) {
          const { appID: e, results: n, appName: r, tab: a = Qt.ZJ } = s,
            o = (0, U.Qn)();
          let c;
          a == Qt.JR
            ? (c = (0, L.we)(
                "#SteamMachineCompatibility_Store_CompatSectionHeader_GamepadUI",
              ))
            : a == Qt.c9
              ? (c = (0, L.we)(
                  "#SteamOSCompatibility_Store_CompatSectionHeader_GamepadUI",
                ))
              : a == Qt.bY
                ? (c = (0, L.we)(
                    "#SteamFrameCompatibility_Store_CompatSectionHeader_GamepadUI",
                  ))
                : (c = o
                    ? (0, L.we)(
                        "#SteamDeckVerified_Store_CompatSectionHeader_GamepadUI",
                      )
                    : (0, L.we)(
                        "#SteamDeckVerified_Store_CompatSectionHeader_Desktop",
                      ));
          const d = m.useId();
          return n
            ? (0, t.jsxs)("div", {
                className: vn().BannerContainer,
                role: "group",
                "aria-labelledby": d,
                children: [
                  (0, t.jsx)("div", {
                    className: vn().BannerHeader,
                    id: d,
                    children: c,
                  }),
                  (0, t.jsx)(sa, { ...s }),
                ],
              })
            : null;
        }
        function sa(s) {
          const {
              appID: e,
              results: n,
              appName: r,
              tab: a = Qt.ZJ,
              className: o,
            } = s,
            c = (0, U.Qn)();
          let d, u;
          if (
            (a == Qt.c9
              ? ((d = (0, t.jsx)(Zn.aw, {
                  category: n.steamos_resolved_category,
                })),
                (u = (0, t.jsx)(Zc, { category: n.steamos_resolved_category })))
              : a == Qt.JR
                ? ((d = (0, t.jsx)(Zn.Ez, {
                    category: n.machine_resolved_category,
                  })),
                  (u = (0, t.jsx)(zr, {
                    category: n.machine_resolved_category,
                  })))
                : a == Qt.bY
                  ? ((d = (0, t.jsx)(Zn.Ez, {
                      category: n.frame_resolved_category,
                    })),
                    (u = (0, t.jsx)(zr, {
                      category: n.frame_resolved_category,
                    })))
                  : ((d = (0, t.jsx)(Zn.Ez, { category: n.resolved_category })),
                    (u = (0, t.jsx)(zr, { category: n.resolved_category }))),
            !n)
          )
            return null;
          const p = n?.steam_deck_blog_url && a != Qt.bY;
          return (0, t.jsxs)("div", {
            className: (0, D.A)(
              c ? vn().BannerContent : vn().BannerContentDesktop,
              o,
            ),
            children: [
              (0, t.jsxs)("div", { children: [d, u] }),
              (0, t.jsx)(Xc, {
                results: n,
                learnMore: (0, L.we)(
                  "#SteamDeckVerified_Store_CompatSection_LearnMore",
                ),
                appName: r || "",
                eStartingTab: a,
              }),
              p && (0, t.jsx)("div", { className: vn().Divider }),
              p &&
                (0, t.jsx)(Zn.Tz, {
                  url: n.steam_deck_blog_url,
                  containerClass: vn().DeveloperComments_Anchor,
                  bIncludeIcon: !0,
                }),
            ],
          });
        }
        function zr(s) {
          const { category: e } = s;
          return (0, t.jsx)("span", {
            className: vn().CompatibilityDetailRatingDescription,
            children: (0, L.we)((0, Zn.Dy)(e)),
          });
        }
        function Zc(s) {
          const { category: e } = s;
          return (0, t.jsx)("span", {
            className: vn().CompatibilityDetailRatingDescription,
            children: (0, L.we)((0, Zn.wW)(e)),
          });
        }
        function Xc(s) {
          const {
              results: e,
              learnMore: n,
              appName: r,
              eStartingTab: a = Qt.ZJ,
            } = s,
            [o, c] = (0, m.useState)(!1);
          let d = m.useCallback(
            (h) => {
              const f = (0, Vc.D)();
              f && f.AddEvent(Jn.Xm.gS), c(!0);
            },
            [c],
          );
          const u = () => {
            c(!1);
          };
          let p = {
            onOKButton: void 0,
            onOKActionDescription: null,
            onCancelActionDescription: $.Z.Localize("#Button_Close"),
            onCancelButton: () => c(!1),
          };
          return (0, t.jsxs)("div", {
            children: [
              (0, t.jsx)(T.Ii, {
                className: vn().LearnMore,
                onClick: d,
                children: n,
              }),
              (0, t.jsx)(J.mt, {
                active: o,
                onDismiss: u,
                modalClassName: "DeckVerifiedModalDialog",
                children: (0, t.jsx)(ae.q, {
                  children: (0, t.jsx)(Qc.Ay, {
                    results: e,
                    buttonProps: p,
                    appName: r,
                    eStartingTab: a,
                  }),
                }),
              }),
            ],
          });
        }
        const Hc = Jc;
        var qc = i(4880),
          rn = i(72604),
          Nr = i(66243),
          _c = i(47604),
          ed = i(64238),
          Cn = i.n(ed),
          Be = i(45931),
          Kt = i(37520),
          zt = i(46146),
          Le = i(35038),
          un = i(19982),
          qt = i(68312);
        const Kn = "0",
          ra = "-1",
          As = "wishlistcategories";
        function ia(s, e, n) {
          return [As, s, e, n];
        }
        function aa(s, e, n, r) {
          return {
            queryKey: ia(e, !n || n === "0" ? "" : n, r),
            queryFn: () => td(s, e, n, r),
            staleTime: 600 * 1e3,
          };
        }
        async function td(s, e, n, r) {
          if (!e || (n != e && !r)) return [];
          let a = [];
          if (r) {
            const o = Le.w.Init(un.Y);
            o.Body().set_steamid(e),
              o.Body().set_share_token(r),
              (a =
                (await un.FQ.GetSharedWishlistCategories(s, o))
                  .Body()
                  .toObject().categories ?? []);
          } else {
            const o = Le.w.Init(un.tP);
            a =
              (await un.FQ.GetWishlistCategories(s, o)).Body().toObject()
                .categories ?? [];
          }
          return Rr(a);
        }
        function Xs(s, e) {
          const n = (0, ln.LH)(),
            r = (0, qt.KV)();
          return (0, cn.I)(aa(r, s, n, e));
        }
        function nd(s, e) {
          const n = (0, ln.LH)(),
            r = (0, qt.KV)(),
            a = m.useCallback((o) => new Map(o.map((c) => [c.id, c])), []);
          return (0, cn.I)({ ...aa(r, s, n, e), select: a });
        }
        const Dr = "wishlistappidcategories";
        function Fr(s, e) {
          return [Dr, s, e];
        }
        function sd(s, e, n) {
          return {
            queryKey: Fr(e, n),
            queryFn: async () => {
              const r = Le.w.Init(un.vu);
              r.Body().set_appid(n);
              const a = await un.FQ.GetItemCategories(s, r);
              return a.BSuccess()
                ? Rr(a.Body().toObject().categories ?? [])
                : [];
            },
            staleTime: 600 * 1e3,
          };
        }
        function Wr(s, e) {
          const n = (0, qt.KV)();
          return (0, cn.I)(sd(n, s, e));
        }
        function oa(s) {
          const e = (0, qt.KV)(),
            n = (0, xn.jE)();
          return (0, Es.n)({
            mutationFn: async (r) => {
              const a = Le.w.Init(un.Vh);
              a.Body().set_appid(r.appid),
                a.Body().set_category_name(r.categoryName),
                a.Body().set_categoryid(r.categoryID);
              const o = await un.FQ.AddWishlistItemCategory(e, a);
              let c = { eresult: o.GetEResult() };
              return (
                o.BSuccess() &&
                  (c.category = {
                    id: o.Body().categoryid(),
                    name: o.Body().name(),
                    cItems: o.Body().item_count(),
                    bNotificationOptIn: !!o.Body().notification_opt_in(),
                  }),
                c
              );
            },
            onSuccess(r, a) {
              n.invalidateQueries({
                queryKey: ["WishlistSortedFiltered", s],
                exact: !1,
              }),
                n.invalidateQueries({ queryKey: [As, s], exact: !1 }),
                n.invalidateQueries({ queryKey: Fr(s, a.appid) });
            },
          });
        }
        function la(s) {
          const e = (0, qt.KV)(),
            n = (0, xn.jE)();
          return (0, Es.n)({
            mutationFn: async (r) => {
              const a = Le.w.Init(un.sF);
              return (
                a.Body().set_appid(r.appid),
                a.Body().set_categoryid(r.categoryID),
                (await un.FQ.RemoveWishlistItemCategory(e, a)).GetEResult()
              );
            },
            onSuccess(r, a) {
              n.invalidateQueries({
                queryKey: ["WishlistSortedFiltered", s],
                exact: !1,
              }),
                n.invalidateQueries({ queryKey: [As, s], exact: !1 }),
                n.invalidateQueries({ queryKey: Fr(s, a.appid) });
            },
          });
        }
        function Wy(s) {
          const e = useActiveServiceTransport(),
            n = useQueryClient();
          return useMutation({
            mutationFn: async (r) => {
              const a = CProtoBufMsg.Init(
                CWishlist_RenameWishlistCategory_Request,
              );
              return (
                a.Body().set_categoryid(r.categoryID),
                a.Body().set_name(r.name),
                {
                  eresult: (
                    await WishlistService.RenameWishlistCategory(e, a)
                  ).GetEResult(),
                }
              );
            },
            onSuccess() {
              n.invalidateQueries({ queryKey: [As, s], exact: !1 }),
                n.invalidateQueries({ queryKey: [Dr, s], exact: !1 });
            },
          });
        }
        const ca = 256;
        function Ry(s) {
          const e = useActiveServiceTransport(),
            n = useQueryClient();
          return useMutation({
            mutationFn: async (r) => {
              const a = {
                eresult: k_EResultOK,
                rgAppIDsUpdated: [],
                rgAppIDsFailed: [],
              };
              if (r.rgAppIDs.length === 0 || (!r.categoryID && !r.categoryName))
                return (a.eresult = k_EResultInvalidParam), a;
              let o = r.categoryID;
              for (let c = 0; c < r.rgAppIDs.length; c += ca) {
                const d = r.rgAppIDs.slice(c, c + ca),
                  u = CProtoBufMsg.Init(
                    CWishlist_SetWishlistItemCategoryBulk_Request,
                  );
                for (const f of d) u.Body().add_appids(f);
                o && o !== Kn
                  ? u.Body().set_categoryid(o)
                  : u.Body().set_category_name(r.categoryName),
                  u.Body().set_remove(!!r.bRemove);
                const p = await WishlistService.SetWishlistItemCategoryBulk(
                  e,
                  u,
                );
                if (!p.BSuccess()) {
                  (a.eresult = p.GetEResult()),
                    a.rgAppIDsFailed.push(...r.rgAppIDs.slice(c));
                  break;
                }
                const h = p.Body().toObject();
                a.rgAppIDsUpdated.push(...(h.appids_updated ?? [])),
                  a.rgAppIDsFailed.push(...(h.appids_failed ?? [])),
                  !a.category &&
                    h.category &&
                    ((a.category = Rr([h.category])[0]),
                    (o = o ?? a.category?.id));
              }
              return a;
            },
            onSuccess(r) {
              r.rgAppIDsUpdated.length !== 0 &&
                (n.invalidateQueries({
                  queryKey: ["WishlistSortedFiltered", s],
                  exact: !1,
                }),
                n.invalidateQueries({ queryKey: [As, s], exact: !1 }),
                n.invalidateQueries({ queryKey: [Dr, s], exact: !1 }));
            },
          });
        }
        const Hs = "wishlist_recent_categories";
        function da(s) {
          return {
            queryKey: [Hs],
            queryFn: async () => (await s.GetObject(Hs)) ?? [],
            staleTime: 3600 * 1e3,
          };
        }
        function ua() {
          const s = (0, qt.rX)();
          return (0, cn.I)(da(s));
        }
        function ma() {
          const s = (0, qt.rX)(),
            e = (0, xn.jE)();
          return (0, Es.n)({
            mutationFn: async (n) => {
              const r = (await e.ensureQueryData(da(s))) ?? [],
                a = Array.from(new Set([...n.rgCategoryIDs, r])).slice(0, 3);
              return await s.StoreObject(Hs, a), a;
            },
            onSuccess: async (n) => {
              e.setQueryData([Hs], n);
            },
          });
        }
        function Rr(s) {
          return (
            s.map((n) => ({
              id: n.categoryid,
              name: n.name,
              cItems: n.item_count ?? 0,
              bNotificationOptIn: !!n.notification_opt_in,
            })) ?? []
          ).sort((n, r) =>
            n.cItems !== r.cItems
              ? r.cItems - n.cItems
              : n.name.localeCompare(r.name),
          );
        }
        function ga(s) {
          const { data: e } = Xs(s);
          return m.useMemo(() => {
            let n = [
              {
                id: Kn,
                name: (0, Be.g)("#Wishlist_Categories_Suggested_Birthday"),
                cItems: 0,
                bNotificationOptIn: !1,
              },
              {
                id: Kn,
                name: (0, Be.g)("#Wishlist_Categories_Suggested_Recommended"),
                cItems: 0,
                bNotificationOptIn: !1,
              },
              {
                id: Kn,
                name: (0, Be.g)("#Wishlist_Categories_Suggested_Discount"),
                cItems: 0,
                bNotificationOptIn: !1,
              },
            ];
            for (const r of e ?? [])
              n = n.filter(
                (a) =>
                  a.name.toLocaleLowerCase() !== r.name.toLocaleLowerCase(),
              );
            return n;
          }, [e]);
        }
        function wy(s) {
          const e = useActiveServiceTransport(),
            n = useQueryClient(),
            r = ia(s, s, void 0);
          return useMutation({
            mutationFn: async (a) => {
              const o = await rd(e, a);
              if (o !== k_EResultOK)
                throw new Error(
                  `SetWishlistCategoryNotifications returned EResult ${o}`,
                );
            },
            onMutate: async (a) => {
              await n.cancelQueries({ queryKey: r }),
                n.setQueryData(r, (o) => {
                  if (!o) return a;
                  const c = new Map(a.map((d) => [d.id, d]));
                  return o.map((d) => c.get(d.id) ?? { ...d });
                });
            },
            onError: () => n.invalidateQueries({ queryKey: r }),
          });
        }
        async function rd(s, e) {
          if (e.length === 0) return k_EResultInvalidParam;
          const n = CProtoBufMsg.Init(
            CWishlist_SetWishlistCategoryNotifications_Request,
          );
          for (const a of e) {
            const o =
              new CWishlist_SetWishlistCategoryNotifications_Request_CategorySettings();
            o.set_categoryid(a.id),
              o.set_notification_opt_in(a.bNotificationOptIn),
              n.Body().add_categories(o);
          }
          return (
            await WishlistService.SetWishlistCategoryNotifications(s, n)
          ).GetEResult();
        }
        const id = parseInt(zt.wishlistCategoryMaxDisplayChars);
        var wr = ((s) => (
          (s[(s.k_ECategoryButtonAction_None = 0)] =
            "k_ECategoryButtonAction_None"),
          (s[(s.k_ECategoryButtonAction_Filter = 1)] =
            "k_ECategoryButtonAction_Filter"),
          (s[(s.k_ECategoryButtonAction_Add = 2)] =
            "k_ECategoryButtonAction_Add"),
          (s[(s.k_ECategoryButtonAction_Remove = 3)] =
            "k_ECategoryButtonAction_Remove"),
          (s[(s.k_ECategoryButtonAction_Select = 4)] =
            "k_ECategoryButtonAction_Select"),
          s
        ))(wr || {});
        function Os(s) {
          const {
              rgCategories: e,
              header: n,
              onClick: r,
              eAction: a,
              bMultiline: o,
              bShowEmptyLabel: c,
              bShowAllButton: d,
              containerClassName: u,
              size: p,
              bShowCounts: h,
            } = s,
            f = m.useRef(null),
            y = a !== 3 && a !== 0;
          let j = [],
            B = !1;
          for (const O of e) {
            O.bSelected && (B = !0);
            const M = O.id === Kn ? O.name : O.id,
              z = (0, t.jsx)(
                pa,
                {
                  category: O,
                  selected: y && !!O.bSelected,
                  onClick: r ? () => r(O.name, O.id) : void 0,
                  eAction: a ?? 0,
                  bShowCount: h,
                },
                M,
              );
            j.push(z);
          }
          const P = (0, Be.g)("#Wishlist_Controls_Categories_All");
          return (
            m.useEffect(() => {
              f.current?.Node().BFocusWithin() &&
                f.current.Node().ForceMeasureFocusRing();
            }, [e]),
            (0, t.jsxs)(S.Z, {
              className: Cn()(zt.CategoriesCtn, u),
              scrollIntoViewWhenChildFocused: !0,
              children: [
                n !== null &&
                  (0, t.jsx)("span", {
                    className: zt.CategoryListHeader,
                    children:
                      n ?? (0, Be.g)("#Wishlist_Controls_Categories_Header"),
                  }),
                (0, t.jsxs)(S.Z, {
                  className: Cn()(
                    zt.CategoryList,
                    o && zt.Multiline,
                    p === "small" && zt.Small,
                    p === "default" && zt.ForceDefaultSize,
                  ),
                  "flow-children": o ? "grid" : "row",
                  focusableIfEmpty: e.length > 0,
                  navRef: f,
                  children: [
                    d &&
                      (0, t.jsx)(pa, {
                        category: {
                          cItems: 0,
                          id: ra,
                          name: P,
                          bNotificationOptIn: !1,
                        },
                        selected: !B,
                        onClick: () => r && r(P, ra),
                        onOKActionDescription: (0, Be.g)(
                          "#Wishlist_Gamepad_Filter_Clear_Category",
                        ),
                      }),
                    j,
                    !e.length &&
                      c &&
                      (0, t.jsx)("div", {
                        className: zt.CategoryListHeader,
                        children: (0, Be.g)("#Wishlist_Categories_None"),
                      }),
                  ],
                }),
              ],
            })
          );
        }
        function pa(s) {
          const {
              category: e,
              selected: n,
              className: r,
              onOKActionDescription: a,
              onClick: o,
              eAction: c,
              bShowCount: d,
            } = s,
            u = c === 3,
            p = c === 1,
            h = e.name.length >= id;
          let f = a;
          p && !f
            ? (f = (0, Be.g)("#Wishlist_Gamepad_Filter_Category"))
            : c === 2 && !f
              ? (f = (0, Be.g)("#Wishlist_Gamepad_Add_Category"))
              : c === 3 &&
                !f &&
                (f = (0, Be.g)("#Wishlist_Gamepad_Removecategory"));
          const y = {
              onOKActionDescription: f,
              onOKButton: () => o && o(),
              focusClassName: zt.Focused,
            },
            j = !!o;
          let B;
          return (
            h
              ? (B = e.name)
              : u && j
                ? (B = (0, Be.g)(
                    "#Wishlist_Controls_Categories_Remove_Tooltip",
                  ))
                : p &&
                  j &&
                  (B = (0, Be.g)(
                    "#Wishlist_Controls_Categories_Filter_Tooltip",
                  )),
            (0, t.jsx)(Qn.Gq, {
              toolTipContent: B,
              usePointerEvents: !0,
              children: (0, t.jsxs)(T.fu, {
                className: Cn()(
                  zt.CategoryBtn,
                  u && zt.Removable,
                  n && zt.Selected,
                  !j && zt.NotActionable,
                  r,
                ),
                onClick: o,
                ...y,
                children: [
                  (0, t.jsx)("span", {
                    className: zt.CategoryName,
                    children: e.name,
                  }),
                  d &&
                    e.cItems > 0 &&
                    (0, t.jsxs)("span", { children: ["(", e.cItems, ")"] }),
                  u && (0, t.jsx)(N.i6V, {}),
                ],
              }),
            })
          );
        }
        function ad(s) {
          const { categoryCount: e, onClick: n, bSimulateHover: r } = s;
          return (0, t.jsx)(Qn.Gq, {
            toolTipContent: (0, Be.g)("#Wishlist_Controls_Categories_Manage"),
            usePointerEvents: !0,
            children: (0, t.jsx)(T.fu, {
              className: Cn()(
                zt.CategoryBtn,
                zt.CategorySettingsBtn,
                r && zt.Focused,
              ),
              onClick: n,
              children: e > 0 ? (0, t.jsx)(N.vmx, {}) : (0, t.jsx)(N.FWt, {}),
            }),
          });
        }
        const ha = 16;
        function fa(s) {
          const {
              appid: e,
              steamid: n,
              onClose: r,
              filteredCategoryIDs: a,
              onAdvanced: o,
            } = s,
            [c, d] = m.useState([]),
            u = ma(),
            { data: p } = (0, E.J$)({ appid: e }),
            h =
              p && p.name && p.visible
                ? (0, Be.g)("#Wishlist_Controls_Categories_Manageitem", p?.name)
                : (0, Be.g)("#Wishlist_Controls_Categories_Manage"),
            { data: f } = Xs(n),
            y = !!o && !!f && f.length > 0,
            j = m.useCallback(() => {
              u.mutate({ rgCategoryIDs: c.reverse() }), r();
            }, [u, c, r]),
            B = (P) => {
              a && a.has(P) && j();
            };
          return (0, t.jsx)(_c.s, {
            onClose: j,
            strTitle: h,
            navID: "AddWishlistCategoryDialog",
            className: Kt.DialogContent,
            children: (0, t.jsxs)(S.Z, {
              "flow-children": "column",
              children: [
                (0, t.jsx)(ld, {
                  appid: e,
                  steamid: n,
                  onCategoryAdd: (P) => d([...c, P].slice(-3)),
                  onCategoryRemove: B,
                }),
                (0, t.jsxs)(S.Z, {
                  className: Kt.Buttons,
                  children: [
                    y &&
                      (0, t.jsx)(Nr.Oh, {
                        onClick: o,
                        children: (0, Be.g)(
                          "#Wishlist_Categories_Dialog_Advanced",
                        ),
                      }),
                    (0, t.jsx)(Nr.n9, {
                      onClick: j,
                      children: $.Z.Localize("#Button_Done"),
                    }),
                  ],
                }),
              ],
            }),
          });
        }
        function od(s, e, n, r) {
          const { data: a } = Wr(n, e),
            { data: o } = ua(),
            c = (d, u) => {
              const p = new Set(u);
              return [
                ...u.map((f) => d.find((y) => y.id === f)).filter((f) => !!f),
                ...d.filter((f) => !p.has(f.id)),
              ];
            };
          return m.useMemo(() => {
            if (!a) return [];
            const d = new Set(a?.map((y) => y.id) ?? []),
              u = s.filter((y) => !d.has(y.id));
            if (!r || r.length === 0)
              return c(
                u.filter((y) => y.cItems > 0),
                o ?? [],
              );
            const p = r.toLocaleLowerCase();
            let h = !1,
              f = u.filter((y) => {
                let j = y.name.toLocaleLowerCase();
                return h || (h = j === p), j.indexOf(p) > -1;
              });
            return (
              (f = c(f, [])),
              h ||
                f.unshift({
                  id: Kn,
                  name: r,
                  cItems: 0,
                  bNotificationOptIn: !1,
                }),
              f
            );
          }, [a, o, s, r]);
        }
        function ld(s) {
          const {
              appid: e,
              steamid: n,
              onCategoryAdd: r,
              onCategoryRemove: a,
            } = s,
            [o, c] = m.useState(""),
            [d, u] = m.useState(void 0),
            p = Xs(n);
          m.useEffect(() => {
            !d && p.data && u(p.data);
          }, [p.data, d]);
          const h = oa(n),
            f = async (G, W) => {
              if (!G || e === 0) return;
              const xe = await h.mutateAsync({
                appid: e,
                categoryName: G,
                categoryID: W ?? Kn,
              });
              xe.eresult === rn.R &&
                xe.category?.id &&
                (r(xe.category.id),
                d &&
                  !d.some((Nt) => Nt.id === xe.category.id) &&
                  u((Nt) => [...Nt, xe.category]));
            },
            y = la(n),
            j = (G) => {
              e !== 0 && (y.mutate({ appid: e, categoryID: G }), a(G));
            },
            B = (G) => {
              G.stopPropagation(),
                G.preventDefault(),
                !(!o || o.length === 0) && (c(""), f(o));
            },
            { data: P } = Wr(n, e),
            O = ga(n),
            M = O.length > 0,
            z = od(d ?? [], e, n, o),
            R = (0, U.Qn)();
          return (0, t.jsxs)(S.Z, {
            className: Kt.CategorySelectorCtn,
            "flow-children": "column",
            children: [
              (0, t.jsxs)("div", {
                children: [
                  (0, t.jsx)("div", {
                    className: Kt.ListHeader,
                    children: (0, Be.g)(
                      "#Wishlist_Controls_Categories_Header_Current",
                    ),
                  }),
                  (0, t.jsx)(Os, {
                    rgCategories: P ?? [],
                    header: null,
                    eAction: wr.k_ECategoryButtonAction_Remove,
                    onClick: (G, W) => j(W),
                    bMultiline: !0,
                    bShowEmptyLabel: !0,
                    containerClassName: Kt.DialogCategoryCtn,
                  }),
                  !!P && P.length >= ha && (0, t.jsx)(cd, {}),
                ],
              }),
              (0, t.jsxs)("form", {
                className: Kt.SearchForm,
                onSubmit: B,
                children: [
                  (0, t.jsx)(T.BA, {
                    autoFocus: !0,
                    value: o,
                    className: Kt.SearchInput,
                    type: "search",
                    placeholder: (0, Be.g)(
                      "#Wishlist_Categories_Dialog_Search",
                    ),
                    onChange: (G) => c(G.target.value),
                    onOKActionDescription:
                      o.length > 0
                        ? (0, Be.g)("#Wishlist_Categories_Dialog_Add")
                        : null,
                    maxLength: 500,
                  }),
                  !R &&
                    (0, t.jsx)("div", {
                      className: Cn()(
                        Kt.AddCategoryBtnCtn,
                        o.length > 0 && Kt.Visible,
                      ),
                      children: (0, t.jsx)(Nr.Oh, {
                        onClick: B,
                        children: (0, Be.g)("#Wishlist_Categories_Dialog_Add"),
                      }),
                    }),
                ],
              }),
              (0, t.jsxs)("div", {
                children: [
                  (0, t.jsx)("div", {
                    className: Kt.ListHeader,
                    children: (0, Be.g)(
                      "#Wishlist_Controls_Categories_Header_Other",
                    ),
                  }),
                  (0, t.jsx)(Os, {
                    rgCategories: z,
                    onClick: f,
                    header: null,
                    bMultiline: !0,
                    bShowEmptyLabel: !0,
                    containerClassName: Kt.DialogCategoryCtn,
                    eAction: wr.k_ECategoryButtonAction_Add,
                  }),
                ],
              }),
              M &&
                (0, t.jsxs)("div", {
                  children: [
                    (0, t.jsx)("div", {
                      className: Kt.ListHeader,
                      children: (0, Be.g)(
                        "#Wishlist_Controls_Categories_Header_Suggested",
                      ),
                    }),
                    (0, t.jsx)(Os, {
                      rgCategories: O,
                      onClick: f,
                      header: null,
                      bMultiline: !0,
                      containerClassName: Cn()(
                        Kt.DialogCategoryCtn,
                        Kt.Suggested,
                      ),
                    }),
                  ],
                }),
            ],
          });
        }
        function cd() {
          return (0, t.jsx)("div", {
            className: Kt.MaxCategoriesMessage,
            children: (0, Be.g)("#Wishlist_Categories_Max_Per_App_Reached", ha),
          });
        }
        var Ur = i(31518);
        function ya(s, e) {
          if (!s.current) return;
          const n = s.current.closest(".queue_menu_flyout");
          n &&
            (e
              ? n.classList.add("force_expand")
              : n.classList.remove("force_expand"));
        }
        function dd(s) {
          const { appid: e } = s,
            n = (0, ln.LH)(),
            [r, a] = m.useState(void 0),
            [o, c] = m.useState(!1),
            d = m.useRef(null),
            [u, p] = (0, Zs.OP)(),
            { data: h } = nd(n),
            { data: f } = Xs(n),
            y = ga(n),
            { data: j } = ua(),
            { data: B } = Wr(n, e),
            P = oa(n),
            O = la(n),
            M = ma(),
            z = async (Yt, sn) => {
              if (!r) return;
              const Br = sn ? r.find((We) => We.id === sn) : void 0;
              if (Br?.bSelected)
                O.mutate({ appid: e, categoryID: Br.id }),
                  a(
                    r.map((We) =>
                      We.id === sn
                        ? {
                            ...We,
                            bSelected: !1,
                            cItems: Math.max(0, We.cItems - 1),
                          }
                        : We,
                    ),
                  );
              else if (Yt) {
                const We = await P.mutateAsync({
                  appid: e,
                  categoryName: Yt,
                  categoryID: sn ?? Kn,
                });
                if (We.eresult === rn.R && We.category?.id) {
                  const ol = { ...We.category, bSelected: !0 };
                  a(
                    (zy) => zy?.map((ll) => (ll.name === Yt ? ol : ll)) ?? [ol],
                  ),
                    M.mutate({ rgCategoryIDs: [We.category.id] });
                }
              }
            },
            R = (Yt) => {
              Yt.stopPropagation(), Yt.preventDefault(), ya(d, !0), c(!0);
            },
            G = () => {
              c(!1), ya(d, !1), a(void 0);
            },
            W = 6;
          if (
            (m.useEffect(() => {
              if (r || !h || !f || !B || !j || !y) return;
              let Yt = new Set(B.map((We) => We.id) ?? []),
                sn = B.map((We) => ({ ...We, bSelected: !0 }));
              const Br = j.map((We) => h.get(We)).filter((We) => !!We);
              for (const We of [...Br, ...f]) {
                if (sn.length >= W) break;
                Yt.has(We.id) || (sn.push(We), Yt.add(We.id));
              }
              sn.length < W &&
                (sn = [...sn, ...(y?.slice(0, W - sn.length) ?? [])]),
                a(sn);
            }, [r, f, h, j, B, y]),
            !r || r.length === 0)
          )
            return null;
          const xe = r.filter((Yt) => !Yt.bSelected),
            Nt = r.filter((Yt) => Yt.bSelected);
          return (0, t.jsxs)("div", {
            className: Ur.CategoriesMenuOption,
            ref: d,
            children: [
              (0, t.jsxs)(T.ml, {
                className: Ur.HeaderCtn,
                ...p,
                onClick: R,
                children: [
                  (0, t.jsx)("div", {
                    className: Ur.Label,
                    children: (0, L.we)("#Wishlist_QuickAdd_Header"),
                  }),
                  (0, t.jsx)(ad, {
                    categoryCount: B?.length ?? 0,
                    bSimulateHover: u,
                    onClick: () => {},
                  }),
                ],
              }),
              Nt.length > 0 &&
                (0, t.jsx)(Os, {
                  rgCategories: Nt,
                  header: null,
                  onClick: z,
                  bMultiline: !0,
                }),
              xe.length > 0 &&
                (0, t.jsxs)("div", {
                  children: [
                    (0, t.jsx)("div", {
                      children: (0, L.we)(
                        "#Wishlist_QuickAdd_RecentAndSuggested",
                      ),
                    }),
                    (0, t.jsx)(Os, {
                      rgCategories: xe,
                      header: null,
                      onClick: z,
                      bMultiline: !0,
                    }),
                  ],
                }),
              o && (0, t.jsx)(fa, { appid: e, steamid: n, onClose: G }),
            ],
          });
        }
        var w = i(48156),
          zs = i(24179),
          xa = i(79882),
          va = i(63547),
          ud = i(68094);
        function Cr(s) {
          return s.packageid
            ? { packageid: s.packageid }
            : { bundleid: s.bundleid };
        }
        function md(s) {
          return (0, ud.ER)(Cr(s));
        }
        var Kr = i(49147);
        function Ns() {
          const s = (0, qt.KV)(),
            e = F.iA.accountid;
          return (0, cn.I)(gd(s, e));
        }
        function gd(s, e) {
          return {
            queryKey: ja(e),
            queryFn: async () => {
              if (!e) return new Set();
              const n = await pd(s, e);
              return new Set(n);
            },
            placeholderData: new Set(),
            staleTime: 600 * 1e3,
          };
        }
        function ja(s) {
          return ["AccountActiveLicenses", s ?? 0];
        }
        async function pd(s, e) {
          throw new Kr.x(rn.Sq, "Not implemented");
        }
        function ba() {
          const s = (0, xn.jE)(),
            e = F.iA.accountid;
          return m.useCallback(
            (n) => {
              s.setQueryData(ja(e), () => new Set(n));
            },
            [s, e],
          );
        }
        function hd(s, e) {
          return !s?.appid ||
            s.type === w.uE._i ||
            !e ||
            !e.included_appids?.length ||
            !e.included_types?.length
            ? !1
            : e.included_appids.length > 1 &&
                !e.included_appids.includes(s.appid) &&
                e.included_types.every((n) => n === w.uE._i);
        }
        function Ba(s) {
          const { data: e } = (0, E.J$)({ appid: s }),
            n = e?.included_items?.included_packages;
          return m.useMemo(() => {
            const r = new Set();
            for (const a of n || []) a.id && hd(e, a) && r.add(a.id);
            return r;
          }, [e, n]);
        }
        function fd(s) {
          const { data: e } = (0, E.is)({ appid: s }),
            n = Ba(s),
            r = e?.purchase_options;
          return m.useMemo(() => {
            if (r)
              return r
                .filter((a) => a.packageid && n.has(a.packageid))
                .sort(
                  (a, o) =>
                    Number(a.final_price_in_cents || 0) -
                    Number(o.final_price_in_cents || 0),
                );
          }, [r, n]);
        }
        var ds = i(67529);
        const jn = m.createContext({ appid: ds.sc, nOptions: 0 }),
          Pa = m.createContext({ ShowConfirmDialog: () => {} });
        var yd = i(1880),
          xd = i(15568);
        function vd(s) {
          const {
            active: e,
            onOK: n,
            closeModal: r,
            bCloseOnOK: a,
            children: o,
            ...c
          } = s;
          if (!e) return null;
          const d =
            (typeof c.strTitle == "string" && c.strTitle) ||
            (0, L.we)("#Steam_Platform");
          return (0, t.jsx)(xd.wA, {
            onlyPopoutIfNeeded: !0,
            popupHeight: 340,
            popupWidth: 640,
            strTitle: d,
            children: (0, t.jsx)(yd.o0, {
              ...c,
              onCancel: r,
              onOK: () => {
                n(), a && r();
              },
              children: o,
            }),
          });
        }
        function jd(s) {
          const { bCloseOnOK: e = !0, children: n, ...r } = s,
            [a, o, c] = (0, ie.uD)();
          return [
            (0, t.jsx)(vd, {
              active: a,
              bCloseOnOK: e,
              closeModal: c,
              ...r,
              children: n,
            }),
            o,
            c,
          ];
        }
        function bd(s) {
          const [e, n] = m.useState(""),
            [r, a] = m.useState(""),
            [o, c] = jd({
              bCloseOnOK: !0,
              bAlertDialog: !0,
              onOK: () => {},
              strTitle: e,
              strDescription: r,
            }),
            d = m.useCallback(
              (p, h) => {
                n(p), a(h), c();
              },
              [c],
            ),
            u = m.useMemo(() => ({ ShowConfirmDialog: d }), [d]);
          return (0, t.jsxs)(Pa.Provider, {
            value: u,
            children: [s.children, o],
          });
        }
        var Bd = i(21763),
          Xn = i.n(Bd),
          Pd = i(62452);
        const Ed = (s) => (0, t.jsx)(Pd.u, { icon: !0, ...s }),
          Uy = (s) => jsx(ButtonLinkBase, { icon: !0, ...s });
        var Ie = i(8892),
          Id = i(80755);
        function Gr(s) {
          const { color: e, onClick: n, strIconTitle: r, children: a } = s,
            o = (c) => {
              c.stopPropagation(), n && n(c);
            };
          return r
            ? (0, t.jsx)(Ed, {
                color: e,
                onClick: o,
                title: r,
                width: "36px",
                minWidth: "36px",
                children: a,
              })
            : (0, t.jsx)(Ie.$, { color: e, onClick: o, children: a });
        }
        function Td(s) {
          const {
              onActivate: e,
              onOKActionDescription: n,
              onSecondaryButton: r,
              onSecondaryActionDescription: a,
              price: o,
              okIcon: c,
            } = s,
            d = !1;
          return o || n || (d && a)
            ? (0, t.jsxs)(A.s, {
                direction: "row",
                flexGrow: "0",
                flexShrink: "0",
                align: "stretch",
                justify: "end",
                gap: "2",
                children: [
                  o,
                  d &&
                    a &&
                    (0, t.jsx)(Gr, { onClick: r, children: (0, Id.gh)(a) }),
                  n &&
                    (c
                      ? (0, t.jsx)(Gr, {
                          color: "storegreen",
                          onClick: e,
                          strIconTitle: n,
                          children: c,
                        })
                      : (0, t.jsx)(Gr, {
                          color: "storegreen",
                          onClick: e,
                          children: n,
                        })),
                ],
              })
            : null;
        }
        function Cy(s) {
          const { option: e } = s,
            n = e.type == "item" && !!e.data.is_edition,
            r = e.type == "item" && e.data.package_group;
          return jsx(Fragment, { children: !1 });
        }
        function bn(s) {
          const {
              className: e,
              option: n,
              color: r = "blue",
              allowSingleLine: a,
              allowTwoColumn: o,
              price: c,
              okIcon: d,
              children: u,
              ...p
            } = s,
            { nOptions: h } = m.useContext(jn),
            f = h == 1;
          return (0, t.jsx)(ae.q, {
            rootClassName: Xn().FocusRing,
            children: (0, t.jsxs)(S.Z, {
              className: (0, D.A)(
                Xn().PurchaseOption,
                r == "green" && Xn().Green,
                a && Xn().AllowSingleLine,
                o && Xn().AllowTwoColumn,
                f && Xn().OnlyChild,
              ),
              focusable: !0,
              ...p,
              children: [
                f &&
                  o &&
                  (0, t.jsx)("div", {
                    className: Xn().LeftColumn,
                    children: u,
                  }),
                !(f && o) && u,
                (0, t.jsx)(Td, { ...p, price: c, okIcon: d }),
                !1,
              ],
            }),
          });
        }
        var Ea = i(13977),
          Sd = i(13620);
        function Yr(s) {
          const e = (0, wt.Gd)();
          return m.useCallback(() => {
            s.packageid
              ? window.AddItemToCart(s.packageid, void 0, e)
              : s.bundleid && window.AddItemToCart(void 0, s.bundleid, e);
          }, [e, s.packageid, s.bundleid]);
        }
        function qs(s, e) {
          return m.useCallback(() => {
            (0, Ea.o)(s, e);
          }, [s, e]);
        }
        function Md(s, e) {
          return m.useCallback(() => {
            (0, Ea.M)(s, e);
          }, [s, e]);
        }
        function _s(s) {
          const { data: e } = (0, E.J$)(s),
            { ShowConfirmDialog: n } = m.useContext(Pa),
            { data: r = new Set() } = Ns(),
            a = ba(),
            o = (0, Sd.S)(s);
          return m.useCallback(() => {
            o.mutateAsync().then(([d, u]) => {
              let p,
                h = e?.name || "";
              if (d != rn.R)
                p = g.Localize(
                  "#AppPage_PurchaseOption_AddToLibraryError",
                  h,
                  d,
                );
              else {
                p = g.Localize("#AppPage_PurchaseOption_AddedToLibrary", h);
                for (let f of u.packageids_added || []) r.add(f);
                a(Array.from(r));
              }
              n(h, p);
            });
          }, [o, n, e?.name, r, a]);
        }
        var Jt = i(57152);
        function Ld(s) {
          const { id: e, bPrepurchase: n } = s,
            { data: r } = (0, E.J$)(e);
          return r
            ? n
              ? g.Localize("#AppPage_Prepurchase", r.name)
              : r.name
            : null;
        }
        function Bn(s) {
          const { id: e, title: n, bPrepurchase: r = !1, children: a } = s;
          return (0, t.jsxs)(Jt.D, {
            size: "4",
            weight: "heavy",
            children: [n || (0, t.jsx)(Ld, { id: e, bPrepurchase: r }), a],
          });
        }
        function Pn(s) {
          const { children: e } = s;
          return (0, t.jsx)(A.s, {
            direction: "column",
            flexGrow: "1",
            gap: "2",
            overflow: "hidden",
            children: e,
          });
        }
        function Ad(s) {
          const { option: e } = s,
            n = { appid: e.appid },
            { data: r } = (0, E.J$)(n),
            a = _s(n),
            o = (0, zs.$Y)(),
            c = e.bStandalone,
            d = o.data?.has(e.appid),
            u = Md(e.appid, r?.name ?? ""),
            p = (0, Un.n)(r),
            h = m.useCallback(() => {
              p && (window.location.href = p);
            }, [p]);
          return r
            ? (0, t.jsx)(t.Fragment, {
                children: (0, t.jsxs)(bn, {
                  color: "green",
                  allowSingleLine: !e.label,
                  allowTwoColumn: !!e.label,
                  option: e,
                  onActivate: u,
                  onOKActionDescription: g.Localize(
                    "#AppPage_PurchaseOption_Download",
                  ),
                  onSecondaryButton: c ? h : void 0,
                  onSecondaryActionDescription: c
                    ? g.Localize("#AppPage_PurchaseOption_MoreInfo")
                    : void 0,
                  onOptionsButton: d ? void 0 : a,
                  onOptionsActionDescription: d
                    ? void 0
                    : g.Localize("#AppPage_PurchaseOption_AddToLibrary"),
                  children: [
                    (0, t.jsx)(Bn, {
                      title: g.Localize(
                        "#AppPage_PurchaseOption_DownloadDemo",
                        r.name,
                      ),
                    }),
                    (0, t.jsx)(Pn, {
                      children: (0, t.jsx)(x.EY, { children: e.label }),
                    }),
                  ],
                }),
              })
            : null;
        }
        var En = i(44983),
          Lt = i(16114);
        function Od(s) {
          const { option: e } = s,
            n = m.useContext(jn),
            { data: r } = (0, E.J$)({ appid: n.appid }),
            a = qs(n.appid, r?.name ?? ""),
            o = (0, En._2)(),
            c =
              r &&
              r.free_weekend &&
              (r.free_weekend.start_time || 0) <= o &&
              (r.free_weekend.end_time || 0) > o;
          return r
            ? (0, t.jsxs)(bn, {
                option: e,
                color: "green",
                allowSingleLine: !0,
                onActivate: a,
                onOKActionDescription: g.Localize(
                  "#AppPage_PurchaseOption_PlayNow",
                ),
                children: [
                  (0, t.jsx)(Bn, {
                    title: g.Localize("#AppPage_PurchaseOption_Play", r.name),
                  }),
                  (0, t.jsxs)(Pn, {
                    children: [
                      !c &&
                        (0, t.jsx)(x.EY, {
                          children: g.Localize(
                            r.type == w.uE.ue
                              ? "#AppPage_PurchaseOption_FreeDemo"
                              : "#AppPage_PurchaseOption_FreeToPlay",
                          ),
                        }),
                      c &&
                        (0, t.jsx)(x.EY, {
                          children: g.Localize(
                            "#AppPage_PurchaseOption_FreeWeekend",
                            (0, Lt.TW)(r.free_weekend.end_time, {
                              weekday: void 0,
                              year: void 0,
                              hour: "numeric",
                              minute: "numeric",
                            }),
                          ),
                        }),
                    ],
                  }),
                ],
              })
            : null;
        }
        var Ia = i(7487),
          zd = i(52574),
          Nd = i(91937),
          Dd = i(49144),
          Fd = i(33770),
          Wd = i(59443),
          Ta = i(51596),
          er = i(43434);
        function Sa(s) {
          const { text: e, onURLDetected: n } = s,
            r = m.useCallback(
              (o) => {
                let c = (0, Ta.P)(o.args) ?? (0, Ta.P)(o.args, "href");
                return (
                  (0, er.p)(c) && (c = (0, er.E)(c)), n && n(c), (0, Wd._r)(o)
                );
              },
              [n],
            );
          return m
            .useMemo(() => {
              const o = (d) => new Ia.OJ(new Ia.R8()),
                c = { ...zd.L, ...Dd.I, ...Nd.F, url: { Constructor: r } };
              return new Fd.B(c, o, U.TS.LANGUAGE);
            }, [r])
            .ParseBBCode(e, void 0);
        }
        var Ma = i(34360),
          Rd = i(16346),
          wd = i(59869),
          kr = i.n(wd);
        function Ud(s) {
          const { option: e } = s,
            n = Yr(e),
            r = e.packageid
              ? { packageid: e.packageid }
              : { bundleid: e.bundleid };
          return (0, t.jsxs)(Ma.kt, {
            className: kr().MenuItem,
            onSelected: n,
            children: [
              (0, t.jsx)("div", {
                className: kr().Name,
                children: e.purchase_option_name,
              }),
              (0, t.jsx)("div", {
                className: kr().Price,
                children: (0, t.jsx)(Mr.AO, { id: r, purchaseOption: e }),
              }),
            ],
          });
        }
        function Cd(s) {
          const { option: e } = s;
          return (0, t.jsx)(Ma.tz, {
            label: e.data.package_group.dropdown_title,
            children: e.data.items.map((n) =>
              (0, t.jsx)(Ud, { option: n }, n.packageid ?? n.bundleid),
            ),
          });
        }
        function Kd(s) {
          if (s.data.package_group.name == "subscriptions") return !0;
          for (let e of s.data.items)
            if (!e.recurrence_info?.packageid) return !1;
          return !0;
        }
        function Gd(s) {
          const { option: e } = s,
            { appid: n } = m.useContext(jn),
            { data: r } = (0, E.J$)({ appid: n }),
            a = e.data.package_group,
            [o, c] = m.useState(""),
            d = (0, wt.aL)(o),
            u = m.useCallback(() => {
              o && (window.location.href = d);
            }, [o, d]),
            p = m.useCallback(
              (h) => {
                (0, Rd.lX)((0, t.jsx)(Cd, { option: e }), h);
              },
              [e],
            );
          return (0, t.jsxs)(bn, {
            option: e,
            allowTwoColumn: !0,
            onActivate: p,
            onSecondaryButton: o ? u : void 0,
            onSecondaryActionDescription: o
              ? g.Localize("#AppPage_PurchaseOption_MoreInfo")
              : void 0,
            children: [
              (0, t.jsx)(Bn, {
                title:
                  a.dropdown_title ||
                  g.Localize("#AppPage_Dropdown_DefaultTitle", r?.name),
              }),
              (0, t.jsxs)(Pn, {
                children: [
                  a.dropdown_description_bbcode &&
                    (0, t.jsx)(x.EY, {
                      size: "2",
                      children: (0, t.jsx)(Sa, {
                        text: a.dropdown_description_bbcode,
                        onURLDetected: c,
                      }),
                    }),
                  !a.dropdown_description_bbcode &&
                    Kd(e) &&
                    (0, t.jsx)(x.EY, {
                      size: "2",
                      children: g.Localize(
                        "#AppPage_Dropdown_DefaultDescription_Subscription",
                      ),
                    }),
                ],
              }),
              (0, t.jsx)(A.s, {
                direction: "row",
                flexGrow: "0",
                flexShrink: "0",
                align: "end",
                justify: "end",
                gap: "2",
                children: (0, t.jsx)(Ie.$, {
                  color: "greyneutral",
                  variant: "dark",
                  children: g.Localize("#AppPage_PurchaseOption_ViewOptions"),
                }),
              }),
            ],
          });
        }
        var La = i(79014);
        function Yd(s) {
          const { appid: e } = s,
            { data: n } = (0, E.J$)({ appid: e }),
            { data: r } = (0, E.lv)({ appid: e });
          if (!n || !r) return null;
          const a = (0, Ps.b0)(r, "community_icon");
          return (0, t.jsxs)(t.Fragment, {
            children: [
              !1,
              (0, t.jsx)(x.EY, {
                children: (0, La.i)(
                  g.Localize(
                    "#AppPage_PurchaseOption_IncludedWithMasterSub",
                    n.name,
                  ),
                  (0, t.jsx)("b", {}),
                ),
              }),
            ],
          });
        }
        function kd(s) {
          const { option: e, appidMasterSub: n } = s,
            r = m.useContext(jn),
            { data: a } = (0, E.J$)({ appid: r.appid }),
            o = qs(r.appid, a?.name ?? "");
          return a
            ? (0, t.jsxs)(bn, {
                option: e,
                color: "green",
                onActivate: o,
                onOKActionDescription: g.Localize(
                  "#AppPage_PurchaseOption_PlayNow",
                ),
                children: [
                  (0, t.jsx)(Bn, {
                    title: g.Localize("#AppPage_PurchaseOption_Play", a.name),
                  }),
                  (0, t.jsxs)(Pn, {
                    children: [
                      !n &&
                        (0, t.jsx)(x.EY, {
                          children: g.Localize(
                            "#AppPage_PurchaseOption_Play_Description",
                            a.name,
                          ),
                        }),
                      !!n && (0, t.jsx)(Yd, { appid: n }),
                    ],
                  }),
                ],
              })
            : null;
        }
        function Vd(s) {
          const { option: e, appidPlaytest: n, bIsOpen: r } = s,
            { data: a } = (0, E.J$)({ appid: n }),
            { data: o } = (0, E.by)({ appid: n }),
            { data: c } = (0, va.VZ)(n);
          if (!a || !o || !c) return null;
          const d = c?.[0]?.status || Jn.EX.Rw;
          console.log(c, d);
          let u, p, h;
          switch (d) {
            case Jn.EX.Rw:
              (u = "#AppPage_PurchaseOption_JoinPlaytest"),
                r
                  ? (o.steam_release_date || Z.TQt) < (0, En._2)()
                    ? (p = "#AppPage_PurchaseOption_Playtest_Open")
                    : (p = "#AppPage_PurchaseOption_Playtest_Open_Unreleased")
                  : (p = "#AppPage_PurchaseOption_JoinPlaytest_Description");
              break;
            case Jn.EX.OT:
              (u = "#AppPage_PurchaseOption_JoinPlaytest"),
                (p = "#AppPage_PurchaseOption_JoinPlaytest_InvitePending");
              break;
            case Jn.EX.IS:
              (u = "#AppPage_PurchaseOption_JoinPlaytest"),
                (p = "#AppPage_PurchaseOption_JoinPlaytest_InvitedByFriend");
              break;
            case Jn.EX.m7:
              (o.steam_release_date || Z.TQt) < (0, En._2)()
                ? ((u = "#AppPage_PurchaseOption_Playtest_Accepted_Title"),
                  (p = "#AppPage_PurchaseOption_Playtest_Accepted"))
                : (o.is_preload,
                  (u =
                    "#AppPage_PurchaseOption_Playtest_Accepted_Unavailable_Title"),
                  (p =
                    "#AppPage_PurchaseOption_Playtest_Accepted_Unavailable"));
              break;
            default:
              (0, Ms.wT)(!1, `Unknown playtest status ${d}`);
          }
          return (
            h && F.iA.logged_in,
            u && p
              ? (0, t.jsxs)(bn, {
                  option: e,
                  onActivate: h,
                  children: [
                    (0, t.jsx)(Bn, { title: g.Localize(u, a.name) }),
                    (0, t.jsx)(Pn, {
                      children: (0, t.jsx)(x.EY, { children: g.Localize(p) }),
                    }),
                  ],
                })
              : null
          );
        }
        var Qd = i(18574),
          mn = i.n(Qd);
        function $d(s) {
          const { option: e } = s,
            n = { appid: e.appid },
            { data: r } = (0, E.J$)(n),
            a = (0, Un.n)(r),
            o = m.useCallback(() => {
              a && (window.location.href = a);
            }, [a]);
          return r
            ? (0, t.jsx)(t.Fragment, {
                children: (0, t.jsxs)(bn, {
                  option: e,
                  onActivate: o,
                  onOKActionDescription: g.Localize(
                    "#AppPage_PurchaseOption_MoreInfo",
                  ),
                  children: [
                    (0, t.jsx)(Bn, { title: e.title }),
                    (0, t.jsx)(Pn, {
                      children: (0, t.jsx)(x.EY, {
                        size: "2",
                        children: e.description,
                      }),
                    }),
                  ],
                }),
              })
            : null;
        }
        function Jd(s) {
          const { discount: e } = s;
          (0, ge.bB)({ msInterval: 1e3 });
          const n = (0, En._2)();
          if (e.discount_end_date <= n) return null;
          const r = Math.max(e.discount_end_date - n, 0),
            a = e.discount_description,
            o = g.Localize(a, (0, Lt.R2)(r));
          return o == a
            ? null
            : (0, t.jsx)(x.EY, { contrast: "body", size: "2", children: o });
        }
        function Zd(s) {
          const { option: e } = s;
          return !e || !e.discount_pct || e.hide_discount_pct_for_compliance
            ? null
            : F.iA.country_code == "PL"
              ? (0, t.jsx)(x.EY, {
                  size: "2",
                  children: g.Localize("#AppPage_Discount_Last30"),
                })
              : null;
        }
        function Xd(s) {
          const { option: e, discount: n } = s,
            r = m.useContext(jn),
            { data: a } = (0, E.J$)({ appid: r.appid }),
            { data: o } = (0, E.J$)({ appid: n.master_sub_appid || ds.sc });
          if (!a || !o || e.discount_pct <= 0) return null;
          const c = n.discount_description,
            d = g.Localize(c, "", e.discount_pct || 0, o.name, a.name);
          return c == d
            ? null
            : (0, t.jsx)(x.EY, { contrast: "body", size: "2", children: d });
        }
        function Hd(s) {
          const { option: e } = s;
          if (!e) return null;
          if (e.is_free_to_keep && e.free_to_keep_ends)
            return (0, t.jsx)(x.EY, {
              contrast: "body",
              size: "2",
              children: g.Localize(
                "#AppPage_PurchaseOption_FreeToKeepDescription",
                (0, Lt.TW)(e.free_to_keep_ends, {
                  weekday: void 0,
                  year: void 0,
                  hour: "numeric",
                  minute: "numeric",
                }),
              ),
            });
          if (!e?.active_discounts?.length) return null;
          const n = (0, En._2)(),
            r = e.active_discounts.reduce((o, c) =>
              c.discount_end_date != Z.TQt &&
              (!o ||
                (c.discount_end_date > n &&
                  c.discount_end_date < o.discount_end_date))
                ? c
                : o,
            );
          let a = "";
          if (r.discount_end_date == Z.TQt)
            a = (0, t.jsx)(Xd, { option: e, discount: r });
          else if (
            r.discount_end_date != Z.TQt &&
            r.discount_end_date - n > 2880 * 60
          ) {
            const o = r.discount_description + "_date";
            (a = g.Localize(
              o,
              (0, Lt.TW)(r.discount_end_date, {
                weekday: void 0,
                year: void 0,
              }),
            )),
              a == o && (a = null);
          } else return (0, t.jsx)(Jd, { discount: r });
          return a
            ? (0, t.jsx)(x.EY, { contrast: "body", size: "2", children: a })
            : null;
        }
        function Vr(s) {
          const { option: e } = s;
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)(Hd, { option: e }),
              (0, t.jsx)(Zd, { option: e }),
            ],
          });
        }
        var Qr = i(74107),
          qd = i(58123),
          tr = i.n(qd);
        function $r(s) {
          const { id: e, bSelfPurchaseOption: n } = s,
            { data: r } = (0, E.Q_)(e),
            { data: a } = (0, E.J$)(e);
          if (!a) return null;
          const o = n && a.item_type == w.c6.RD ? a.self_purchase_option : r;
          return !o?.hide_discount_pct_for_compliance || o.discount_pct <= 0
            ? null
            : (0, t.jsx)("table", {
                className: tr().SaleTechPriceGrid,
                children: (0, t.jsxs)("tbody", {
                  children: [
                    (0, t.jsxs)("tr", {
                      children: [
                        (0, t.jsx)("th", {
                          children: Qr.F5.Localize("#PriceGrid_NormalPrice"),
                        }),
                        (0, t.jsx)("th", {
                          children: Qr.F5.Localize("#PriceGrid_RecentPrice"),
                        }),
                        (0, t.jsx)("th", {
                          children: Qr.F5.Localize("#PriceGrid_CurrentPrice"),
                        }),
                      ],
                    }),
                    (0, t.jsxs)("tr", {
                      children: [
                        (0, t.jsx)("td", {
                          className: tr().OriginalPrice,
                          children: o.formatted_original_price,
                        }),
                        (0, t.jsx)("td", {
                          className: tr().LowestRecentPrice,
                          children: o.formatted_lowest_recent_price,
                        }),
                        (0, t.jsx)("td", {
                          className: tr().FinalPrice,
                          children: o.formatted_final_price,
                        }),
                      ],
                    }),
                  ],
                }),
              });
        }
        var Jr = i(81055),
          _d = i(54652),
          eu = i.n(_d);
        function Zr(s) {
          const { id: e } = s,
            { data: n } = (0, E.J$)(e),
            { data: r } = (0, E.by)(e),
            { data: a } = (0, E.Q_)(e),
            { data: o } = (0, zs.$Y)();
          if (!n || !r || !a || !o) return null;
          const c = "bundleid" in e && !a.must_purchase_as_set,
            d = r?.is_coming_soon && !!r?.advance_access_date;
          let u = null,
            p,
            h;
          if (c) {
            const f = n.included_appids?.filter((y) => !o.has(y)) || [];
            f.length > 0 &&
              f.length < (n.included_appids?.length || 0) &&
              ((p = "slate-12"),
              (h = "blue-8"),
              (u = g.Localize(
                "#AppPage_PurchaseOption_CompleteYourCollection",
              )));
          } else if (d) {
            const f = (0, Lt.TW)(r.advance_access_date, {
              weekday: void 0,
              month: "short",
              day: "numeric",
              year: void 0,
            });
            (p = "slate-12"),
              (h = "blue-8"),
              (u = g.Localize("#AppPage_AdvanceAccess_Banner", f));
          }
          return u
            ? (0, t.jsx)(A.s, {
                className: eu().PurchaseOptionBanner,
                paddingX: "1",
                background: h,
                children: (0, t.jsx)(x.EY, {
                  size: "1",
                  color: p,
                  contrast: "title",
                  whiteSpace: "nowrap",
                  truncate: !0,
                  children: u,
                }),
              })
            : null;
        }
        var tu = i(76962),
          Aa = i(8928),
          Xr = i(69289),
          Oa = i(89611);
        function _t(s) {
          const e = (0, Xr.mz)({ ...s, className: s.className }, nu);
          return (0, t.jsx)("img", { ...e });
        }
        const nu = [
          ...Aa.h,
          {
            prop: "objectFit",
            className: Oa.ObjectFit,
            cssProperty: "--object-fit",
          },
          {
            prop: "objectPosition",
            className: Oa.ObjectPosition,
            cssProperty: "--object-position",
          },
        ];
        function us(s, e) {
          return F.TS.STORE_ITEM_BASE_URL + s.replace("${FILENAME}", e);
        }
        function su(s) {
          const { closeModal: e } = s,
            n = m.useContext(jn),
            { data: r } = (0, E.J$)({ appid: n.appid }),
            { data: a } = (0, E.lv)({ appid: n.appid });
          return (0, t.jsxs)(A.s, {
            direction: "column",
            height: "90vh",
            overflow: "hidden",
            align: "center",
            gap: "2",
            children: [
              (0, t.jsx)(ne.az, {
                aspectRatio: "748 / 896",
                flexGrow: "1",
                flexShrink: "1",
                flexBasis: "90%",
                overflow: "hidden",
                children:
                  r &&
                  a &&
                  (0, t.jsx)(_t, {
                    width: "100%",
                    src: us(a.asset_url_format, a.edition_comparison),
                    alt: r.name,
                  }),
              }),
              (0, t.jsx)(ne.az, {
                flexGrow: "0",
                flexShrink: "0",
                children: (0, t.jsx)(Ie.$, {
                  onClick: e,
                  children: $.Z.Localize("#Button_Close"),
                }),
              }),
            ],
          });
        }
        const nr = new Is.wd("PurchaseOptions");
        function za(s) {
          const { id: e } = s,
            { data: n } = (0, E.J$)(e);
          return n?.purchase_description_bbcode
            ? (0, t.jsx)("div", {
                children: (0, t.jsx)(Sa, {
                  text: n.purchase_description_bbcode,
                }),
              })
            : null;
        }
        function Na(s) {
          const { id: e } = s,
            { data: n } = (0, E.by)(e),
            { data: r } = Ns();
          if (
            !n ||
            !n.advance_access_date ||
            !n.steam_release_date ||
            !r ||
            !n.is_coming_soon
          )
            return null;
          const a = "packageid" in e && r.has(e.packageid),
            o = (0, En._2)(),
            c = (0, Lt.IH)(n.advance_access_date - o),
            d = (0, Lt.IH)(n.steam_release_date - n.advance_access_date);
          let u;
          return (
            o > n.advance_access_date
              ? (u = a
                  ? "#AppPage_AdvanceAccess_Now_Owned"
                  : "#AppPage_AdvanceAccess_Now")
              : (u = a
                  ? "#AppPage_AdvanceAccess_Starts_Owned"
                  : "#AppPage_AdvanceAccess_Starts"),
            u
              ? (0, t.jsx)(x.EY, {
                  size: "2",
                  color: "blue-10",
                  children: g.Localize(u, c, d),
                })
              : null
          );
        }
        function ru(s) {
          const { id: e, option: n } = s,
            r = m.useContext(jn),
            { data: a } = (0, E.J$)(e),
            { data: o } = (0, E.J$)({ appid: r.appid }),
            { data: c } = (0, E.by)(e),
            { data: d } = Ns(),
            u = _s(e),
            p = qs(r.appid, o?.name ?? "");
          if (!a || !o || !d) return null;
          const h = "packageid" in e && d.has(e.packageid);
          nr.Debug(a);
          let f = a.self_purchase_option?.packageid
              ? a.self_purchase_option
              : a.best_purchase_option,
            y = g.Localize("#AppPage_PurchaseOption_GetFreeToKeep", o.name);
          const j = h && f?.is_free_to_keep;
          let B = j ? p : u,
            P = g.Localize(
              j
                ? "#AppPage_PurchaseOption_PlayNow"
                : "#AppPage_PurchaseOption_AddToLibrary",
            );
          return (
            nr.Debug(e, f, a),
            (0, t.jsxs)(t.Fragment, {
              children: [
                (0, t.jsx)(Zr, { id: e }),
                (0, t.jsxs)(bn, {
                  option: n,
                  onActivate: B,
                  onOKActionDescription: P,
                  price: (0, t.jsx)($s, {
                    id: e,
                    bSelfPurchaseOption: !!a.self_purchase_option?.packageid,
                  }),
                  children: [
                    (0, t.jsx)(Bn, {
                      id: e,
                      title: y,
                      bPrepurchase: (0, Jr.Nq)(c, f),
                    }),
                    h &&
                      (0, t.jsx)(x.EY, {
                        size: "3",
                        weight: "heavy",
                        color: "storegreen-10",
                        children: g.Localize(
                          "#AppPage_PurchaseOption_InLibrary",
                        ),
                      }),
                    (0, t.jsxs)(Pn, {
                      children: [
                        (0, t.jsx)($r, {
                          id: e,
                          bSelfPurchaseOption:
                            !!a.self_purchase_option?.packageid,
                        }),
                        (0, t.jsx)(Na, { id: e }),
                        (0, t.jsx)(Vr, { option: f }),
                        (0, t.jsx)(za, { id: e }),
                      ],
                    }),
                  ],
                }),
              ],
            })
          );
        }
        function iu(s) {
          const { id: e, option: n } = s,
            r = m.useContext(jn),
            { data: a } = (0, E.J$)(e),
            { data: o } = (0, E.J$)({ appid: r.appid }),
            { data: c } = (0, E.by)(e),
            { data: d } = Ns(),
            u = _s(e),
            p = Yr(n.data),
            [h, f, y] = (0, ge.uD)(!1);
          if (!a || !o) return null;
          nr.Debug(a);
          let j = a.self_purchase_option?.packageid
            ? a.self_purchase_option
            : a.best_purchase_option;
          if (j?.is_free_to_keep) return (0, t.jsx)(ru, { ...s });
          const B =
              n.bAvailableForFree &&
              n.data.packageid &&
              !d?.has(n.data.packageid),
            P = "packageid" in e && !!d?.has(e.packageid);
          let O, M;
          n.data.is_edition &&
            ((O = f),
            (M = g.Localize("#AppPage_PurchaseOption_CompareEditions")));
          let z, R;
          return (
            B &&
              ((z = u),
              (R = g.Localize("#AppPage_PurchaseOption_AddToLibrary"))),
            nr.Debug(e, j, a),
            (0, t.jsxs)(t.Fragment, {
              children: [
                (0, t.jsx)(Zr, { id: e }),
                (0, t.jsxs)(bn, {
                  option: n,
                  allowTwoColumn: !0,
                  onActivate: p,
                  onOKActionDescription: g.Localize(
                    "#AppPage_PurchaseOption_AddToCart",
                  ),
                  onSecondaryButton: O,
                  onSecondaryActionDescription: M,
                  onOptionsButton: z,
                  onOptionsActionDescription: R,
                  price: (0, t.jsx)($s, {
                    id: e,
                    bSelfPurchaseOption: !!a.self_purchase_option?.packageid,
                  }),
                  okIcon: (0, t.jsx)(Ae.JBW, { width: "24", height: "24" }),
                  children: [
                    (0, t.jsx)(Bn, { id: e, bPrepurchase: (0, Jr.Nq)(c, j) }),
                    P &&
                      (0, t.jsx)(x.EY, {
                        size: "3",
                        weight: "heavy",
                        color: "storegreen-10",
                        children: g.Localize(
                          "#AppPage_PurchaseOption_InLibrary",
                        ),
                      }),
                    (0, t.jsxs)(Pn, {
                      children: [
                        (0, t.jsx)($r, {
                          id: e,
                          bSelfPurchaseOption:
                            !!a.self_purchase_option?.packageid,
                        }),
                        (0, t.jsx)(Na, { id: e }),
                        (0, t.jsx)(Vr, { option: j }),
                        (0, t.jsx)(za, { id: e }),
                      ],
                    }),
                  ],
                }),
                h &&
                  n.data.is_edition &&
                  (0, t.jsx)(tu.y.Root, {
                    onClose: y,
                    children: (0, t.jsx)(su, { closeModal: y }),
                  }),
              ],
            })
          );
        }
        var au = i(95036),
          Hn = i.n(au),
          sr = i(43135),
          ou = i(32384);
        function Da(s) {
          const { bComingSoon: e, purchaseOption: n, className: r } = s;
          return (0, Jr.o$)(e, n)
            ? (0, t.jsxs)("div", {
                className: Cn()(ou.PrePurchaseTag, r),
                children: [
                  (0, t.jsx)(Ae.zD7, {}),
                  $.Z.Localize("#EventDisplay_CallToAction_Prepurchase_Short"),
                ],
              })
            : null;
        }
        const lu = new Is.wd("PurchaseOptions");
        function cu(s) {
          const { id: e, option: n } = s,
            { data: r } = (0, E.J$)(e),
            { data: a } = (0, E.lv)(e),
            { data: o } = (0, zs.$Y)(),
            c = Yr(n.data),
            d = (0, Un.n)(r),
            u = m.useCallback(() => {
              d && (window.location.href = d);
            }, [d]);
          if (!r || !o) return console.warn("Not ready", e, r, a, o), null;
          const p = r.included_appids?.length || 0,
            h = r.included_appids?.filter((P) => !o.has(P)) || [],
            f = r.included_appids?.filter((P) => o.has(P)) || [];
          let y = h.length,
            B =
              p != h.length
                ? "#AppPage_BuyThisBundle_Partial"
                : "#AppPage_BuyThisBundle";
          return (
            h.length == 0 &&
              ((B = "#AppPage_CollectionComplete"),
              (y = r.included_appids?.length || 0)),
            lu.Debug(e, r.best_purchase_option, r),
            (0, t.jsxs)(t.Fragment, {
              children: [
                (0, t.jsx)(Zr, { id: e }),
                (0, t.jsxs)(bn, {
                  option: n,
                  onActivate: c,
                  onOKActionDescription: g.Localize(
                    "#AppPage_PurchaseOption_AddToCart",
                  ),
                  onSecondaryButton: u,
                  onSecondaryActionDescription: g.Localize(
                    "#AppPage_PurchaseOption_BundleInfo",
                  ),
                  price: (0, t.jsx)($s, { id: e, bSelfPurchaseOption: !0 }),
                  okIcon: (0, t.jsx)(Ae.JBW, { width: "24", height: "24" }),
                  children: [
                    (0, t.jsx)(Bn, {
                      id: e,
                      children: (0, t.jsxs)(x.EY, {
                        size: "3",
                        color: "blue-8",
                        children: [
                          " ",
                          g.Localize("#AppPage_PurchaseOption_Bundle"),
                        ],
                      }),
                    }),
                    (0, t.jsxs)(Pn, {
                      children: [
                        (0, t.jsx)($r, { id: e, bSelfPurchaseOption: !0 }),
                        (0, t.jsxs)(A.s, {
                          direction: "column",
                          flexGrow: "1",
                          flexShrink: "1",
                          overflow: "hidden",
                          gap: "1",
                          children: [
                            (0, t.jsx)(Vr, { option: r.best_purchase_option }),
                            (0, t.jsxs)(A.s, {
                              direction: "column",
                              flexGrow: "1",
                              overflow: "hidden",
                              children: [
                                (0, t.jsx)(x.EY, {
                                  size: "2",
                                  children: g.LocalizePlural(
                                    B,
                                    y,
                                    r.best_purchase_option?.discount_pct ||
                                      r.best_purchase_option
                                        ?.bundle_discount_pct ||
                                      0,
                                  ),
                                }),
                                (0, t.jsx)(uu, {
                                  apps: [...h, ...f],
                                  setOwnedApps: o,
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            })
          );
        }
        function Ky(s) {
          const { rgAppids: e } = s;
          return e.length == 0
            ? null
            : jsx("div", {
                className: styles.AppImages,
                children: e?.map((n) => jsx(du, { appid: n }, n)),
              });
        }
        function du(s) {
          const { appid: e } = s,
            { data: n } = useStoreItemDefaultInfo({ appid: e }),
            { data: r } = useStoreItemAssets({ appid: e });
          if (!n || !r) return console.warn("Not ready", e), null;
          const a = r && StoreAssetURL(r, "small_capsule");
          return jsx(Fragment, { children: jsx("img", { src: a, alt: "" }) });
        }
        function uu(s) {
          const { apps: e, setOwnedApps: n } = s,
            r = 6,
            [a, o] = m.useState(e.length > r + 1 ? r : e.length),
            c = m.useRef(null),
            d = (0, ie.wY)((p) => {
              if (c.current) {
                const h = p.contentRect,
                  f = c.current?.getBoundingClientRect();
                let y = h.height,
                  j = 0;
                for (let B of p.target.children) {
                  if (B.tagName != "LI") continue;
                  const P = B.getBoundingClientRect();
                  if (
                    (j != e.length - 1 && P.height < y - f.height) ||
                    (j == e.length - 1 && P.height < y)
                  )
                    j++, (y -= P.height);
                  else break;
                }
                a != j && o(j),
                  (c.current.style.opacity = j == e.length ? "0" : "1");
              }
            });
          if (e.length == 0 || a == 0) return null;
          const u = e.length - a;
          return (0, t.jsxs)("ul", {
            className: Hn().AppList,
            ref: d,
            children: [
              e
                .slice(0, a)
                .map((p) => (0, t.jsx)(mu, { appid: p, bOwned: n.has(p) }, p)),
              (0, t.jsx)(x.EY, {
                as: "div",
                ref: c,
                size: "2",
                children: g.LocalizePlural("#AppPage_AdditionalItem", u),
              }),
            ],
          });
        }
        function mu(s) {
          const { appid: e, bOwned: n } = s,
            { data: r } = (0, E.J$)({ appid: e }),
            { data: a } = (0, E.lv)({ appid: e }),
            o = (0, kt.h0)({ appid: e }),
            { data: c } = (0, E.lv)(o);
          if (!r) return null;
          const d =
            (a && (0, Ps.b0)(a, "community_icon")) ||
            (c && (0, Ps.b0)(c, "community_icon"));
          return (0, t.jsxs)("li", {
            className: Hn().BundleApp,
            children: [
              (0, t.jsx)("div", {
                className: Hn().AppIcon,
                children: d && (0, t.jsx)("img", { src: d, alt: "" }),
              }),
              (0, t.jsxs)("div", {
                className: Hn().AppText,
                children: [
                  (0, t.jsx)(x.EY, {
                    size: "2",
                    contrast: n ? "description" : "subtitle",
                    lineClamp: n ? 1 : 2,
                    className: n ? void 0 : Hn().WrappingName,
                    children: r.name,
                  }),
                  n &&
                    (0, t.jsx)(x.EY, {
                      size: "1",
                      weight: "heavy",
                      color: "storegreen-10",
                      className: Hn().InLibrary,
                      children: (0, sr.eI)("in_library"),
                    }),
                  !n &&
                    (0, t.jsx)(Da, {
                      bComingSoon: r.is_coming_soon,
                      purchaseOption: r.best_purchase_option,
                      className: Hn().PrePurchase,
                    }),
                ],
              }),
            ],
          });
        }
        var Pe = i(86336),
          qn = i(24809),
          gu = i(23413),
          pu = i.n(gu);
        function Fa(s) {
          const { appid: e } = s,
            { data: n } = (0, E.J$)({ appid: e });
          return (0, t.jsx)(Un.p, {
            storeItem: n,
            children: (0, t.jsx)(Pe.W, { size: "2", children: n?.name }),
          });
        }
        function hu(s) {
          const { appid: e } = s,
            { data: n } = (0, E.J$)({ appid: e });
          return n
            ? (0, t.jsx)("li", { children: (0, t.jsx)(Fa, { appid: e }) })
            : null;
        }
        function Wa(s) {
          const {
            appid: e,
            strLocTagTitle: n,
            strLocTagBody: r,
            rgAppidParent: a,
            color: o,
          } = s;
          return (0, t.jsx)(qn.k, {
            children: (0, t.jsxs)(A.s, {
              background: o,
              direction: "column",
              padding: "3",
              children: [
                (0, t.jsx)(Jt.D, { size: "5", children: g.Localize(n) }),
                a.length == 1 &&
                  (0, t.jsx)(x.EY, {
                    children: g.LocalizeReact(
                      r,
                      (0, t.jsx)(Fa, { appid: a[0] }),
                    ),
                  }),
                a.length > 1 &&
                  (0, t.jsxs)(t.Fragment, {
                    children: [
                      (0, t.jsx)(x.EY, {
                        children: g.Localize("#AppPage_DLCWarning_OneOf"),
                      }),
                      (0, t.jsx)("ul", {
                        className: pu().AppList,
                        children: a.map((c) => (0, t.jsx)(hu, { appid: c }, c)),
                      }),
                    ],
                  }),
              ],
            }),
          });
        }
        function fu(s) {
          const { appid: e } = s,
            { data: n } = (0, E.J$)({ appid: e });
          return !n ||
            n.type != w.uE.Ov ||
            !n.related_items?.parent_appid ||
            n.related_items.parent_appid == ds.sc
            ? null
            : (0, t.jsx)(Wa, {
                appid: e,
                strLocTagTitle: "#AppPage_DLCWarning_Title_Soundtrack",
                strLocTagBody: "#AppPage_DLCWarning_Soundtrack",
                rgAppidParent: [n.related_items.parent_appid],
                color: "crimson-7",
              });
        }
        function yu(s) {
          const { appid: e } = s,
            { data: n } = (0, E.J$)({ appid: e });
          return !n || n.type != w.uE._i || !n.related_items?.parent_appid
            ? null
            : (0, t.jsx)(xu, {
                appid: e,
                appidParent: n.related_items.parent_appid,
              });
        }
        function xu(s) {
          const { appid: e, appidParent: n } = s,
            { data: r } = (0, E.J$)({ appid: e }),
            { data: a } = (0, E.J$)({ appid: n });
          if (!r || !a || r.type != w.uE._i) return null;
          const c =
              a && a.type == w.uE.Sv
                ? "#AppPage_DLCWarning_Software"
                : "#AppPage_DLCWarning",
            d = r.related_items?.dlc_parent_appids?.length
              ? r.related_items?.dlc_parent_appids
              : [n];
          return (0, t.jsx)(Wa, {
            appid: e,
            strLocTagTitle: "#AppPage_DLCWarning_Title",
            strLocTagBody: c,
            rgAppidParent: d,
            color: "purple-7",
          });
        }
        function vu(s) {
          const { appid: e } = s;
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)(fu, { appid: e }),
              (0, t.jsx)(yu, { appid: e }),
            ],
          });
        }
        var ju = i(3348),
          Hr = i(47875),
          bu = i(25792),
          Bu = i(90114),
          Pu = i(56680),
          Eu = i.n(Pu);
        const qr = (0, bu.Nr)(function (e) {
          const {
              appid: n,
              bAllowRemove: r,
              children: a,
              color: o,
              width: c,
            } = e,
            d = (0, ln.LH)(),
            { data: u } = Ss(n),
            p = Zi(n),
            [h, f, y] = (0, ie.uD)();
          (0, m.use)($.Z.Ready());
          const j = !!d;
          if (j && !u) return null;
          const B = j && !!u?.wishlist;
          if (B && !r) return null;
          const P = () => {
              p.mutateAsync({ wishlist: !B, old_interest: u });
            },
            O = B ? "#RemoveFromWishlist_ttip" : "#AddToWishlist_ttip",
            M = B ? "#Wishlisted" : "#AddToYourWishlist";
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)(Qn.Gq, {
                toolTipContent: $.Z.Localize(O),
                children: (0, t.jsx)(Ie.$, {
                  color: o,
                  width: c,
                  onClick: j ? P : f,
                  children: a ? a(B) : $.Z.Localize(M),
                }),
              }),
              !j && (0, t.jsx)(Iu, { active: h, closeModal: y }),
            ],
          });
        });
        function Iu(s) {
          const { active: e, closeModal: n } = s,
            { fnOpenInSteamClient: r } = (0, Bu.useOpenWebInSteamClient)();
          return (
            (0, m.use)(g.Ready()),
            (0, t.jsx)(J.EN, {
              active: e,
              children: (0, t.jsxs)(J.o0, {
                strTitle: g.Localize("#OpenInDesktopAppBanner_NotSignedIn"),
                className: Eu().WishlistModalOverride,
                strDescription: g.Localize("#Wishlist_NotSignedIn"),
                closeModal: n,
                bAlertDialog: !0,
                children: [
                  (0, t.jsxs)(A.s, {
                    direction: "row",
                    gap: "4",
                    paddingTop: "4",
                    paddingBottom: "4",
                    children: [
                      (0, t.jsx)(Ie.$, {
                        onClick: r,
                        children: g.Localize(
                          "#OpenInDesktopAppBanner_OpenAppButton",
                        ),
                      }),
                      (0, t.jsx)(Ie.$, {
                        color: "dull",
                        onClick: Hr.l,
                        children: $.Z.Localize("#Login_SignIn"),
                      }),
                    ],
                  }),
                  (0, t.jsx)(x.EY, {
                    children: (0, L.oW)(
                      $.Z.Localize("#GotSteam_NeedSteam"),
                      (0, t.jsx)(Pe.Y, {
                        href: `${Qs.TS.STORE_BASE_URL}about`,
                      }),
                    ),
                  }),
                ],
              }),
            })
          );
        }
        var Tu = i(97393),
          rr = i.n(Tu);
        function Ra(s) {
          const { id: e } = s,
            { data: n } = (0, E.qI)(e);
          if (!n) return null;
          const r = [];
          return (
            n.windows &&
              r.push(
                (0, t.jsx)(
                  "div",
                  {
                    className: rr().PlatformIcon,
                    children: (0, t.jsx)(N.eJJ, {}),
                  },
                  "windows",
                ),
              ),
            n.mac &&
              r.push(
                (0, t.jsx)(
                  "div",
                  {
                    className: rr().PlatformIcon,
                    children: (0, t.jsx)(N.kPc, {}),
                  },
                  "mac",
                ),
              ),
            n.steamos_linux &&
              r.push(
                (0, t.jsx)(
                  "div",
                  {
                    className: rr().PlatformIcon,
                    children: (0, t.jsx)(N.Qte, {}),
                  },
                  "steamos",
                ),
              ),
            r.length == 0
              ? null
              : (0, t.jsx)("div", {
                  className: rr().PlatformIcons,
                  children: r,
                })
          );
        }
        var Su = i(77774),
          _n = i.n(Su);
        function Mu(s, e) {
          if (e) return "#AppPage_ComingSoon_UnlocksIn_Software";
          switch (s) {
            case w.uE.Wz:
              return "#AppPage_ComingSoon_UnlocksIn_Video";
            case w.uE.gQ:
              return "#AppPage_ComingSoon_UnlocksIn_Series";
            case w.uE._i:
              return "#AppPage_ComingSoon_UnlocksIn_DLC";
            default:
              return "#AppPage_ComingSoon_UnlocksIn";
          }
        }
        function Lu(s, e) {
          return e
            ? s.custom_release_date_message
              ? s.custom_release_date_message
              : s.steam_release_date
                ? (0, Lt.$z)(s.steam_release_date)
                : ""
            : "";
        }
        function Au(s, e, n) {
          return s ? s != "date_full" : e ? !0 : !n;
        }
        function Ou(s) {
          const {
              appid: e,
              bHasPrePurchaseSub: n,
              bGetsSoftwareTreatment: r,
              bShowReleaseDateIfComingSoon: a,
              strOffsitePrice: o,
              preload: c,
            } = s,
            { data: d } = (0, E.J$)({ appid: e }),
            { data: u } = (0, E.by)({ appid: e }),
            p = (0, ju.VM)(u);
          if (!d || !u) return null;
          const h = u.coming_soon_display,
            f = u.steam_release_date,
            y = !!f && f < (0, En._2)(),
            j = h == "text_comingsoon" || h == "text_tba",
            B = h != "text_comingsoon",
            P = d.type == w.uE._i,
            O = h ? p : Lu(u, a),
            M = !!O,
            z = n && !j && M,
            R = !y && !!f && !Au(h, u.custom_release_date_message, a);
          return (0, t.jsxs)(qn.k, {
            children: [
              (0, t.jsxs)(A.s, {
                direction: "row",
                className: _n().ComingSoon,
                children: [
                  (0, t.jsxs)(A.s, {
                    direction: "column",
                    className: _n().Content,
                    children: [
                      y &&
                        (0, t.jsxs)(t.Fragment, {
                          children: [
                            (0, t.jsx)(Jt.D, {
                              size: "5",
                              children: g.Localize("#AppPage_ComingSoon_Title"),
                            }),
                            (0, t.jsx)(x.EY, {
                              size: "2",
                              color: "greyneutral-11",
                              children: g.Localize(
                                "#AppPage_ComingSoon_ReleaseDatePassed",
                              ),
                            }),
                          ],
                        }),
                      !y &&
                        z &&
                        (0, t.jsx)(Jt.D, {
                          size: "5",
                          children: g.Localize(
                            "#AppPage_ComingSoon_ReleasesOn",
                            O,
                          ),
                        }),
                      !y &&
                        !z &&
                        (0, t.jsxs)(t.Fragment, {
                          children: [
                            (0, t.jsx)(x.EY, {
                              size: "2",
                              color: "greyneutral-11",
                              children: g.Localize(
                                P
                                  ? "#AppPage_ComingSoon_NotYetAvailable_DLC"
                                  : "#AppPage_ComingSoon_NotYetAvailable",
                              ),
                            }),
                            M &&
                              (0, t.jsxs)(Jt.D, {
                                size: "5",
                                children: [
                                  B &&
                                    `${g.Localize("#AppPage_ComingSoon_IntendedRelease")}: `,
                                  O,
                                ],
                              }),
                          ],
                        }),
                      R &&
                        (0, t.jsx)(x.EY, {
                          size: "2",
                          children: g.Localize(
                            Mu(d.type, r),
                            (0, Lt.Hq)(f - (0, En._2)(), {
                              eSuffix: Lt.a8.None,
                            }),
                          ),
                        }),
                      o &&
                        (0, t.jsx)(x.EY, {
                          size: "3",
                          weight: "heavy",
                          className: _n().OffsitePrice,
                          children: o,
                        }),
                    ],
                  }),
                  !n && (0, t.jsx)(zu, { appid: e }),
                ],
              }),
              c && (0, t.jsx)(Nu, { appid: e, preload: c }),
            ],
          });
        }
        function zu(s) {
          const { appid: e } = s,
            { data: n } = Ss(e);
          if (!n) return null;
          const r = n.wishlist;
          return (0, t.jsxs)(A.s, {
            direction: "column",
            className: _n().Reminder,
            children: [
              (0, t.jsxs)(A.s, {
                direction: "column",
                className: _n().Note,
                children: [
                  r &&
                    (0, t.jsx)(x.EY, {
                      size: "2",
                      children: g.Localize(
                        "#AppPage_ComingSoon_WishlistReminder_On",
                      ),
                    }),
                  !r &&
                    (0, t.jsxs)(t.Fragment, {
                      children: [
                        (0, t.jsx)(x.EY, {
                          size: "2",
                          children: g.Localize(
                            "#AppPage_ComingSoon_WishlistPrompt",
                          ),
                        }),
                        (0, t.jsx)(x.EY, {
                          size: "2",
                          children: g.Localize(
                            "#AppPage_ComingSoon_WishlistReminder",
                          ),
                        }),
                      ],
                    }),
                ],
              }),
              r &&
                (0, t.jsx)(Pe.Y, {
                  href: `${U.TS.STORE_BASE_URL}wishlist/`,
                  children: g.Localize("#AppPage_ComingSoon_ViewWishlist"),
                }),
              !r && (0, t.jsx)(qr, { appid: e, color: "storegreen" }),
            ],
          });
        }
        function Nu(s) {
          const { appid: e, preload: n } = s,
            { subidFreeOnDemand: r, bOwnedPermanent: a } = n,
            { data: o } = (0, E.J$)({ appid: e }),
            c = (0, ln.LH)(),
            d = o?.free_weekend?.appid ?? e,
            u = qs(d, o?.name ?? "");
          if (!o) return null;
          const p = !!c && !!r && !a;
          return (0, t.jsxs)(A.s, {
            direction: "column",
            className: _n().Preload,
            children: [
              (0, t.jsx)(Ra, { id: { appid: e } }),
              (0, t.jsx)(Jt.D, {
                size: "5",
                children: g.Localize(
                  "#AppPage_ComingSoon_PreloadTitle",
                  o.name,
                ),
              }),
              (0, t.jsxs)(A.s, {
                direction: "row",
                className: _n().PreloadActions,
                children: [
                  (0, t.jsx)(Ie.$, {
                    onClick: u,
                    children: g.Localize("#AppPage_ComingSoon_PreloadButton"),
                  }),
                  p && (0, t.jsx)(Du, { subid: r }),
                ],
              }),
            ],
          });
        }
        function Du(s) {
          const e = _s({ packageid: s.subid });
          return (0, t.jsx)(Ie.$, {
            color: "greyneutral",
            onClick: e,
            children: g.Localize("#AppPage_ComingSoon_AddToLibrary"),
          });
        }
        var _r = i(44930),
          es = i(45497),
          Fu = i(74677),
          Wu = i.n(Fu);
        const en = !1,
          wa = [],
          ir = "orange-8",
          Ru = "faqs/view/7451-A8FE-3867-6A2E",
          wu = "kb_article.php?ref=1055-ISJM-8568",
          Uu = "https://support.apple.com/en-us/HT211814",
          Cu = {
            [w.E.C1]: "#AppPage_PurchaseNote_Type_Notice",
            [w.E.NG]: "#AppPage_PurchaseNote_Type_LowViolence",
            [w.E.GG]: "#AppPage_PurchaseNote_Type_CreditCardRequired",
            [w.E.nE]: "#AppPage_PurchaseNote_Type_SystemRequirements",
          };
        function Ku(s) {
          const {
            appid: e,
            bUnsupportedLanguage: n,
            bAdminExcludedFromDiscovery: r,
            bRetired: a,
            bMac64BitNotice: o,
            bMacAppleSiliconNotice: c,
            b360Video: d,
          } = s;
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)(Yu, { appid: e }),
              (n || en) && (0, t.jsx)(ku, {}),
              (r || en) && (0, t.jsx)(Vu, { appid: e }),
              (0, t.jsx)(Qu, {
                appid: e,
                bRetired: a || en,
                bMac64BitNotice: o || en,
                bMacAppleSiliconNotice: c || en,
              }),
              (0, t.jsx)(Ju, { appid: e }),
              (0, t.jsx)(Zu, { appid: e, b360Video: d }),
            ],
          });
        }
        function Gn(s) {
          const { title: e, bHighlight: n, children: r } = s;
          return (0, t.jsx)(qn.k, {
            children: (0, t.jsxs)(A.s, {
              background: n ? "sky-4" : void 0,
              borderColor: n ? void 0 : ir,
              direction: "column",
              gap: "2",
              padding: n ? "4" : "3",
              marginBottom: "3",
              children: [
                e &&
                  (0, t.jsx)(Jt.D, {
                    size: "4",
                    weight: "heavy",
                    color: n ? void 0 : ir,
                    children: e,
                  }),
                r,
              ],
            }),
          });
        }
        function Gu(s) {
          const [e, n] = m.useState(!1);
          return (
            m.useEffect(() => {
              if (
                s != "secureboot_tpm2" ||
                !(0, _r.Dp)("Compat.CheckBootProtectionEnabled")
              )
                return;
              let r = !1;
              return (
                SteamClient.Compat.CheckBootProtectionEnabled("2", !0).then(
                  (a) => {
                    r || n(!a);
                  },
                ),
                () => {
                  r = !0;
                }
              );
            }, [s]),
            e
          );
        }
        function Yu(s) {
          const { appid: e } = s,
            { data: n } = (0, E._F)({ appid: e }),
            r = n?.anticheat;
          return !Gu(r?.boot_protection ? r.boot_protection_name : void 0) &&
            !en
            ? null
            : (0, t.jsx)(Gn, {
                title: g.Localize("#AppPage_PurchaseNote_BootProtection_Title"),
                children: (0, t.jsx)(x.EY, {
                  children: (0, ge.xh)(
                    g.Localize("#AppPage_PurchaseNote_BootProtection"),
                    (0, t.jsx)(Pe.Y, {
                      href: `${F.TS.HELP_BASE_URL}${Ru}`,
                      color: "blue-8",
                    }),
                  ),
                }),
              });
        }
        function ku() {
          return (0, t.jsxs)(Gn, {
            title: g.Localize(
              "#AppPage_PurchaseNote_UnsupportedLanguage_Title",
              (0, L.we)(`#Language_${F.TS.LANGUAGE}`),
            ),
            children: [
              (0, t.jsx)(x.EY, {
                children: g.Localize(
                  "#AppPage_PurchaseNote_UnsupportedLanguage",
                ),
              }),
              F.iA.logged_in &&
                (0, t.jsx)(x.EY, {
                  children: (0, ge.xh)(
                    g.Localize(
                      "#AppPage_PurchaseNote_UnsupportedLanguage_Change",
                    ),
                    (0, t.jsx)(Pe.Y, {
                      href: `${F.TS.STORE_BASE_URL}account/preferences`,
                      color: "blue-8",
                    }),
                  ),
                }),
            ],
          });
        }
        function Vu(s) {
          const { appid: e } = s;
          return (0, t.jsx)(Gn, {
            bHighlight: !0,
            children: (0, t.jsx)(x.EY, {
              size: "4",
              color: "sky-11",
              children: (0, ge.xh)(
                g.Localize("#AppPage_PurchaseNote_ExcludedFromDiscovery"),
                (0, t.jsx)(x.EY, {
                  size: "5",
                  weight: "medium",
                  contrast: "title",
                }),
                (0, t.jsx)(x.EY, { color: "valveonly-7" }),
                (0, t.jsx)(Pe.Y, {
                  href: `${F.TS.PARTNER_BASE_URL}apps/landing/${e}`,
                  target: "_blank",
                  color: "blue-8",
                }),
              ),
            }),
          });
        }
        function Qu(s) {
          const {
              appid: e,
              bRetired: n,
              bMac64BitNotice: r,
              bMacAppleSiliconNotice: a,
            } = s,
            { data: o } = (0, E.J$)({ appid: e });
          if (!o) return null;
          const c = (0, t.jsx)($u, {
            strType: g.Localize("#AppPage_PurchaseNote_Type_Notice"),
          });
          let d;
          return (
            n
              ? (d = g.Localize("#AppPage_PurchaseNote_Retired", o.name ?? ""))
              : o.unlisted &&
                (d = g.Localize(
                  "#AppPage_PurchaseNote_Unlisted",
                  o.name ?? "",
                )),
            (0, t.jsxs)(t.Fragment, {
              children: [
                d &&
                  (0, t.jsx)(Gn, {
                    children: (0, t.jsxs)(x.EY, { children: [c, d] }),
                  }),
                en &&
                  (0, t.jsx)(Gn, {
                    children: (0, t.jsxs)(x.EY, {
                      children: [
                        c,
                        g.Localize(
                          "#AppPage_PurchaseNote_Unlisted",
                          o.name ?? "",
                        ),
                      ],
                    }),
                  }),
                r &&
                  (0, t.jsx)(Gn, {
                    children: (0, t.jsxs)(x.EY, {
                      children: [
                        c,
                        (0, ge.xh)(
                          g.Localize("#AppPage_PurchaseNote_Mac64Bit"),
                          (0, t.jsx)(Pe.Y, {
                            href: `${F.TS.SUPPORT_BASE_URL}${wu}`,
                            color: "blue-8",
                          }),
                        ),
                      ],
                    }),
                  }),
                a &&
                  (0, t.jsx)(Gn, {
                    children: (0, t.jsxs)(x.EY, {
                      children: [
                        c,
                        (0, ge.xh)(
                          g.Localize("#AppPage_PurchaseNote_MacAppleSilicon"),
                          (0, t.jsx)(Pe.Y, { href: Uu, color: "blue-8" }),
                        ),
                      ],
                    }),
                  }),
              ],
            })
          );
        }
        function Ua(s) {
          const { note: e } = s,
            { type: n, highlighted: r, text_bbcode: a } = e;
          if (!a) return null;
          let o = a;
          const c = n !== void 0 ? Cu[n] : void 0;
          return (
            c &&
              (o = `[b][color=var(--color-${ir})][noparse]${g.Localize("#AppPage_PurchaseNote_TypeLabel", g.Localize(c))}[/noparse][/color][/b] ${a}`),
            (0, t.jsx)(Gn, {
              bHighlight: !!r,
              children: (0, t.jsx)(x.EY, {
                as: "div",
                size: r ? "4" : void 0,
                color: r ? "sky-11" : void 0,
                children: (0, t.jsx)(es.n, { text: o }),
              }),
            })
          );
        }
        function $u(s) {
          const { strType: e } = s;
          return (0, t.jsx)(x.EY, {
            weight: "heavy",
            color: ir,
            marginRight: "1",
            children: g.Localize("#AppPage_PurchaseNote_TypeLabel", e),
          });
        }
        function Ju(s) {
          const { appid: e } = s,
            { data: n } = (0, E.J$)({ appid: e }),
            { data: r } = (0, E.is)({ appid: e });
          let a = r?.purchase_notes;
          return (
            en && !a?.length && (a = wa),
            !n || !a?.length || (n.type == w.uE.RA && !en)
              ? null
              : (0, t.jsx)(t.Fragment, {
                  children: a.map((o, c) => (0, t.jsx)(Ua, { note: o }, c)),
                })
          );
        }
        function Zu(s) {
          const { appid: e, b360Video: n } = s,
            { data: r } = (0, E.qI)({ appid: e }),
            { data: a } = (0, E._F)({ appid: e }),
            o = r?.vr_support;
          let c;
          return (
            o?.vrhmd_only && !n
              ? (c = on.EPurchaseNoticeType_VRRequired)
              : a?.no_mouse_keyboard_support
                ? (c = on.EPurchaseNoticeType_ControllerRequired)
                : o?.vrhmd &&
                  o.show_optional_vr_mode_notice &&
                  (c = on.EPurchaseNoticeType_VRSupported),
            en
              ? (0, t.jsxs)(qn.k, {
                  children: [
                    (0, t.jsx)(js, {
                      appid: e,
                      type: on.EPurchaseNoticeType_VRRequired,
                    }),
                    (0, t.jsx)(js, {
                      appid: e,
                      type: on.EPurchaseNoticeType_ControllerRequired,
                    }),
                    (0, t.jsx)(js, {
                      appid: e,
                      type: on.EPurchaseNoticeType_VRSupported,
                    }),
                  ],
                })
              : c === void 0
                ? null
                : (0, t.jsx)(qn.k, {
                    children: (0, t.jsx)(js, { appid: e, type: c }),
                  })
          );
        }
        function Xu(s) {
          const { appid: e } = s,
            { data: n } = (0, E.J$)({ appid: e }),
            { data: r } = (0, E.is)({ appid: e }),
            a = (0, wt.aL)(`${F.TS.STORE_BASE_URL}about/communitymods/`);
          let o = r?.purchase_notes;
          return (
            en && !o?.length && (o = wa),
            !n || (n.type != w.uE.RA && !en) || !o?.[0]?.text_bbcode
              ? null
              : (0, t.jsxs)(t.Fragment, {
                  children: [
                    (0, t.jsx)(qn.k, {
                      children: (0, t.jsxs)(A.s, {
                        className: Wu().ModBubble,
                        direction: "column",
                        gap: "2",
                        paddingX: "4",
                        paddingY: "3",
                        marginBottom: "3",
                        children: [
                          (0, t.jsx)(Jt.D, {
                            size: "6",
                            weight: "heavy",
                            contrast: "title",
                            children: g.Localize(
                              "#AppPage_PurchaseNote_Mod_Title",
                            ),
                          }),
                          (0, t.jsx)(x.EY, {
                            as: "div",
                            contrast: "subtitle",
                            children: (0, t.jsx)(es.n, {
                              text: o[0].text_bbcode,
                            }),
                          }),
                          (0, t.jsx)(x.EY, {
                            contrast: "subtitle",
                            children: (0, ge.xh)(
                              g.Localize("#AppPage_PurchaseNote_Mod_LearnMore"),
                              (0, t.jsx)(Pe.Y, {
                                href: a,
                                color: "text-body",
                                contrast: "subtitle",
                                underline: "always",
                              }),
                            ),
                          }),
                        ],
                      }),
                    }),
                    o.slice(1).map((c, d) => (0, t.jsx)(Ua, { note: c }, d)),
                  ],
                })
          );
        }
        const tn = new Is.wd("PurchaseOptions"),
          Ca = !1;
        function Hu(s) {
          const {
              appid: e,
              rgOwnedApps: n,
              rgOwnedPackages: r,
              playtestStatus: a,
              rgFreePackagesAvailable: o,
              strAccountTypeDescription: c,
              comingSoon: d,
              purchaseNotes: u,
            } = s,
            p = (0, zs._7)(!0),
            h = ba(),
            f = (0, va.QW)(),
            [y, j] = m.useState(!1);
          return (
            m.useEffect(() => {
              tn.Debug("Initializing PurchaseOptions"),
                tn.Debug("rgOwnedApps", n),
                tn.Debug("rgActiveLicenses", r),
                tn.Debug("playtestStatus", a),
                tn.Debug("rgFreePackagesAvailable", o),
                tn.Debug("strAccountTypeDescription", c),
                p(n),
                h(r),
                Ca && a && f(a.appid, a),
                j(!0);
            }, [e, r, n, a, p, h, f, o, c]),
            m.use(g.Ready()),
            m.use($.Z.Ready()),
            y
              ? (0, t.jsx)(m.Suspense, {
                  children: (0, t.jsx)(_u, {
                    appid: e,
                    rgPackagesAvailableForFree: o,
                    strAccountTypeDescription: c,
                    comingSoon: d,
                    purchaseNotes: u,
                  }),
                })
              : null
          );
        }
        function qu(s, e, n) {
          const { data: r } = (0, E.J$)({ appid: s }),
            { data: a } = (0, E.is)({ appid: s }),
            { data: o } = (0, zs.$Y)(),
            c = Ba(s),
            d = a?.purchase_options;
          return (
            tn.Debug(d),
            m.useMemo(() => {
              if (!r || !d || !o) return null;
              const p = r.is_free && !r.is_free_temporarily,
                h = (0, En._2)(),
                f =
                  r.free_weekend &&
                  (r.free_weekend.start_time || 0) <= h &&
                  (r.free_weekend.end_time || 0) > h,
                y = new Set(e),
                j = [];
              if (!p)
                if (o.has(s)) j.push({ type: "play" });
                else {
                  const G = (a.purchase_options || [])
                    .map((W) => W.free_with_master_sub_appid)
                    .filter((W) => !!W);
                  tn.Debug(G);
                  for (const W of G)
                    if (W && o.has(W)) {
                      j.push({ type: "play", appidMasterSub: W });
                      break;
                    }
                }
              if (Ca) {
                const G = r.related_items?.playtests || [];
                if (G.length > 0)
                  for (const W of G)
                    W &&
                      j.push({
                        type: "playtest",
                        appidPlaytest: W.appid,
                        bIsOpen: !!W.is_open,
                      });
              }
              const B = new Set(),
                P = new Set(
                  (r.related_items?.standalone_demos || []).map((G) => G.appid),
                );
              for (let G of r.related_items?.demos?.filter(
                (W) => W.show_above_purchase,
              ) || [])
                B.has(G.appid) ||
                  (j.push({
                    type: "demo",
                    appid: G.appid,
                    label: G.label,
                    bStandalone: P.has(G.appid),
                  }),
                  B.add(G.appid));
              (p || f) && j.push({ type: "free" });
              const O = new Map();
              for (let G of a.package_groups || [])
                O.set(G.name, { id: G.name, package_group: G, items: [] });
              let M = !!r.related_items?.related_f2p;
              const z = new Set(
                d.map((G) => G.free_to_keep_base_package).filter((G) => !!G),
              );
              for (let G of d)
                G.is_free_license &&
                  !G.package_group &&
                  (j.push({
                    type: "item",
                    data: G,
                    bAvailableForFree: !!G.packageid && y.has(G.packageid),
                  }),
                  z.add(G.packageid));
              let R;
              for (let G of d)
                if (
                  !z.has(G.packageid) &&
                  !(G.packageid && c.has(G.packageid))
                ) {
                  if (M && !G.is_edition && r.related_items) {
                    const W = r.related_items.related_f2p;
                    j.push({
                      type: "related",
                      appid: W.appid,
                      title: W.header_text,
                      description: W.description_text,
                    }),
                      (M = !1);
                  }
                  G.package_group !== R?.id &&
                    (G.package_group
                      ? ((R = O.get(G.package_group)),
                        R?.package_group.display_type == w.aq.V &&
                          j.push({ type: "dropdown", data: R }))
                      : (R = void 0)),
                    R && R?.package_group.display_type == w.aq.V
                      ? R.items.push(G)
                      : j.push({
                          type: "item",
                          data: G,
                          bAvailableForFree:
                            !!G.packageid && y.has(G.packageid),
                        });
                }
              return tn.Debug(O), j;
            }, [s, r, a, d, o, e, c])
          );
        }
        function _u(s) {
          const {
              appid: e,
              rgPackagesAvailableForFree: n,
              strAccountTypeDescription: r,
              comingSoon: a,
              purchaseNotes: o,
            } = s,
            { data: c } = (0, E.J$)({ appid: e }),
            d = qu(e, n, r),
            u = m.useRef(null),
            p = m.useCallback((h) => {
              h.data?.method == "FocusPurchaseOptions" &&
                (u.current?.NavTree().Activate(),
                u.current?.TakeFocus(Lr.pR.OK));
            }, []);
          return (
            m.useEffect(
              () => (
                window.addEventListener("message", p),
                () => window.removeEventListener("message", p)
              ),
              [p],
            ),
            !c || !d
              ? (tn.Warning("Not ready", e), null)
              : (tn.Debug(c),
                tn.Debug(d),
                (0, t.jsx)(jn.Provider, {
                  value: { appid: e, nOptions: d.length },
                  children: (0, t.jsx)(bd, {
                    children: (0, t.jsxs)(S.Z, {
                      className: mn().PurchaseOptionDisplay,
                      navEntryPreferPosition: V.iU.PREFERRED_CHILD,
                      navRef: u,
                      children: [
                        a && (0, t.jsx)(Ou, { appid: e, ...a }),
                        (0, t.jsx)(Ku, { appid: e, ...o }),
                        (0, t.jsx)(vu, { appid: e }),
                        (0, t.jsx)(Xu, { appid: e }),
                        d.length > 0 &&
                          (0, t.jsxs)(t.Fragment, {
                            children: [
                              (0, t.jsx)(qn.k, {
                                children: (0, t.jsx)(x.EY, {
                                  size: "3",
                                  contrast: "title",
                                  weight: "heavy",
                                  children: g.Localize(
                                    "#AppPage_PurchaseOptions_Title",
                                  ),
                                }),
                              }),
                              d.length > 2 && (0, t.jsx)(em, { options: d }),
                              d.length <= 2 &&
                                (0, t.jsxs)(S.Z, {
                                  className: (0, D.A)(
                                    mn().PurchaseOptionCarouselWrapper,
                                    d.length <= 2 && mn().NoCarousel,
                                    d.length == 1 && mn().Single,
                                  ),
                                  preferredFocus: !0,
                                  children: [
                                    d.length <= 2 &&
                                      (0, t.jsx)(ei, { option: d[0] }),
                                    d.length == 2 &&
                                      (0, t.jsx)(ei, { option: d[1] }),
                                  ],
                                }),
                            ],
                          }),
                      ],
                    }),
                  }),
                }))
          );
        }
        function ei(s) {
          const { option: e } = s;
          let n = null;
          switch (e.type) {
            case "item":
              e.data.packageid
                ? (n = (0, t.jsx)(iu, { id: Cr(e.data), option: e }))
                : (n = (0, t.jsx)(cu, { id: Cr(e.data), option: e }));
              break;
            case "dropdown":
              n = (0, t.jsx)(Gd, { option: e });
              break;
            case "demo":
              n = (0, t.jsx)(Ad, { option: e });
              break;
            case "free":
              n = (0, t.jsx)(Od, { option: e });
              break;
            case "play":
              n = (0, t.jsx)(kd, {
                option: e,
                appidMasterSub: e.appidMasterSub,
              });
              break;
            case "playtest":
              n = (0, t.jsx)(Vd, {
                option: e,
                appidPlaytest: e.appidPlaytest,
                bIsOpen: e.bIsOpen,
              });
              break;
            case "related":
              n = (0, t.jsx)($d, { option: e });
              break;
            default:
          }
          return n
            ? (0, t.jsx)("div", {
                className: mn().PurchaseOptionWrapper,
                children: n,
              })
            : null;
        }
        function em(s) {
          const { options: e } = s,
            n = "purchase_options",
            [r, a] = (0, xa.Eh)(n),
            o = 0.96,
            c = 256,
            d = 8,
            u = parseInt(mn().CarouselPaddingTop),
            p = parseInt(mn().CarouselPaddingBottom),
            h = m.useCallback(
              (j, B, P, O) => {
                const M = e[j];
                return (0, t.jsx)("div", {
                  style: { width: B, height: P },
                  children: (0, t.jsx)(ei, { option: M }),
                });
              },
              [e],
            ),
            f = m.useCallback(() => c, [c]),
            y = m.useCallback(
              (j) => {
                const B = e[j];
                switch (B.type) {
                  case "item":
                    return md(B.data);
                  case "dropdown":
                    return "dropdown_package_group_" + B.data.id;
                  case "demo":
                    return "demo_" + B.appid;
                  case "free":
                    return "free";
                  case "playtest":
                    return "playtest_" + B.appidPlaytest;
                  case "play":
                    return "play_" + B.appidMasterSub;
                  case "related":
                    return "related_" + B.appid;
                  default:
                    return (
                      (0, Ms.wT)(!1, "Unknown purchase option type", B.type),
                      "unknown"
                    );
                }
              },
              [e],
            );
          return e.length == 0
            ? null
            : (0, t.jsx)(S.Z, {
                className: (0, D.A)(
                  mn().PurchaseOptionCarouselWrapper,
                  r != 0 && mn().NotLeft,
                ),
                preferredFocus: !0,
                children: (0, t.jsx)(xa.jy, {
                  name: n,
                  "aria-label": g.Localize("#AppPage_PurchaseOptions_Title"),
                  className: (0, D.A)(
                    mn().PurchaseOptionsCarousel,
                    "PurchaseOptions",
                  ),
                  focusedColumn: r,
                  setFocusedColumn: a,
                  nNumItems: e.length,
                  nHeight: c / o + u + p,
                  nItemHeight: c / o,
                  nItemMarginX: d,
                  fnGetColumnWidth: f,
                  fnGetId: y,
                  fnItemRenderer: h,
                  scrollToAlignment: "center",
                }),
              });
        }
        var Wt = i(78365),
          ts = i(24642);
        const tm = 0,
          nm = 1,
          sm = 2,
          rm = 3,
          im = 4,
          am = 5;
        var ti = i(95242),
          om = i(91405),
          Ka = i(9843);
        const lm = m.lazy(() =>
          Promise.all([i.e(53080), i.e(56925), i.e(39233), i.e(24102)]).then(
            i.bind(i, 75850),
          ),
        );
        function ni(s) {
          const { rgPackageIDs: e, strButtonToken: n } = s,
            [r, a] = m.useState(void 0),
            o = e.map((y) => ({ packageid: y })),
            { mutate: c, isPending: d } = (0, om.w)(o),
            { data: u } = (0, Ka.UI)(),
            p =
              u !== void 0 &&
              e.length > 0 &&
              e.every((y) => (0, Ka.lb)(u, y, void 0)),
            h = m.useCallback(() => a(void 0), []),
            f = m.useCallback(() => {
              c(void 0, { onSuccess: (y) => a(y) });
            }, [c]);
          return e.length == 0
            ? null
            : (0, t.jsxs)(t.Fragment, {
                children: [
                  r &&
                    (0, t.jsx)(m.Suspense, {
                      children: (0, t.jsx)(lm, {
                        lineItemIDs: r,
                        closeCart: h,
                      }),
                    }),
                  p
                    ? (0, t.jsx)(Ie.v, {
                        navProps: { preferredFocus: !0 },
                        color: "storegreen",
                        focusable: !0,
                        href: `${F.TS.STORE_BASE_URL}cart/`,
                        children: Be.d.Localize("#AddToCartButton_InCart"),
                      })
                    : (0, t.jsx)(Ie.$, {
                        navProps: { preferredFocus: !0 },
                        color: "storegreen",
                        disabled: d,
                        onClick: f,
                        children: g.Localize(n),
                      }),
                ],
              });
        }
        function si(s, e, n = { style: "long", type: "conjunction" }) {
          const a = new Intl.ListFormat(L.pf.GetPreferredLocales(), n)
            .formatToParts(s.map((o, c) => c.toString()))
            .map((o) => {
              if (o.type === "literal") return o.value;
              const c = Number.parseInt(o.value);
              return e(s[c], c);
            });
          return m.createElement(m.Fragment, null, ...a);
        }
        var ms = i(95994);
        const cm = "17px";
        function Ga(s) {
          const {
            overhang: e = cm,
            marginTop: n,
            marginBottom: r,
            buttonBarContents: a,
            children: o,
          } = s;
          return (0, t.jsxs)(ms.x, {
            columns: "1fr",
            rows: `auto ${e}`,
            marginTop: n,
            marginBottom: r,
            children: [o, (0, t.jsx)(dm, { children: a })],
          });
        }
        function dm(s) {
          const { children: e } = s;
          return (0, t.jsx)(A.s, {
            marginX: "4",
            alignSelf: "end",
            justify: "end",
            gap: "1",
            zIndex: "1",
            gridColumn: "1",
            gridRow: "1 / -1",
            navProps: { navEntryPreferPosition: V.iU.PREFERRED_CHILD },
            children: e,
          });
        }
        var um = i(26666),
          ns = i.n(um);
        const mm = 6,
          gm = 5,
          pm = 135;
        function hm(s) {
          const { appid: e, rgOptions: n } = s;
          return (0, t.jsx)(t.Fragment, {
            children: n.map((r) =>
              (0, t.jsx)(fm, { appid: e, option: r }, r.packageid),
            ),
          });
        }
        function fm(s) {
          const { appid: e, option: n } = s,
            r = n.packageid,
            { data: a } = (0, E.J$)({ appid: e }),
            { data: o } = (0, E.J$)({ packageid: r }),
            { data: c } = Ns(),
            d = m.useMemo(() => {
              const f = new Map();
              for (const y of a?.included_items?.included_apps || [])
                y.id && f.set(y.id, y);
              return (o?.included_appids || [])
                .map((y) => f.get(y))
                .filter((y) => !!y);
            }, [a, o]);
          if (!o) return null;
          const u = !!c?.has(r),
            p = !!o.purchase_description_bbcode,
            h = d.slice(0, mm);
          return (0, t.jsx)(Ga, {
            marginBottom: "4",
            buttonBarContents: (0, t.jsx)(ym, { pkg: o, option: n }),
            children: (0, t.jsxs)(ne.az, {
              position: "relative",
              gridRow: "1",
              gridColumn: "1",
              padding: "4",
              paddingTop: "2",
              paddingBottom: "5",
              radius: "md",
              className: ns().PackBody,
              children: [
                u &&
                  (0, t.jsx)(A.s, {
                    align: "center",
                    gap: "1",
                    position: "absolute",
                    inset: "-8px auto auto 6px",
                    paddingX: "1",
                    className: ns().PackInLibrary,
                    children: (0, sr.eI)("in_library"),
                  }),
                (0, t.jsxs)(A.s, {
                  justify: "between",
                  align: "center",
                  children: [
                    (0, t.jsx)(x.EY, {
                      size: "5",
                      children: g.Localize(
                        "#AppPage_Dropdown_DefaultTitle",
                        n.purchase_option_name || o.name || "",
                      ),
                    }),
                    (0, t.jsx)(ne.az, {
                      marginBottom: "1",
                      children: (0, t.jsx)(Ra, { id: { packageid: r } }),
                    }),
                  ],
                }),
                !p && d.length > 1 && (0, t.jsx)(xm, { rgApps: d }),
                h.length > 1 &&
                  (0, t.jsx)(ne.az, {
                    position: "relative",
                    padding: "2",
                    className: ns().PackCapsulesCtn,
                    children: (0, t.jsx)(ne.az, {
                      className: (0, D.A)(
                        ns().PackCapsules,
                        h.length >= gm && ns().PackCapsulesCollapsed,
                      ),
                      children: h.map((f, y) =>
                        (0, t.jsx)(vm, { appid: f.id, zIndex: 10 - y }, f.id),
                      ),
                    }),
                  }),
              ],
            }),
          });
        }
        function ym(s) {
          const { pkg: e, option: n } = s,
            r = m.useMemo(() => [n.packageid], [n.packageid]);
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)(Ya, {
                children: (0, t.jsx)(Ie.v, {
                  focusable: !0,
                  href: (0, Hr._)(e),
                  children: g.Localize("#AppPage_PurchaseOption_MoreInfo"),
                }),
              }),
              (0, t.jsxs)(Ya, {
                children: [
                  (0, t.jsx)(ti.z, { purchaseOption: n }),
                  (0, t.jsx)(ni, {
                    rgPackageIDs: r,
                    strButtonToken: "#AppPage_PurchaseOption_AddToCart",
                  }),
                ],
              }),
            ],
          });
        }
        function Ya(s) {
          const { children: e } = s;
          return (0, t.jsx)(A.s, {
            align: "center",
            gap: "1",
            zIndex: "1",
            className: ns().PackActionGroup,
            children: e,
          });
        }
        function xm(s) {
          const { rgApps: e } = s,
            [n, r] = m.useState(!1),
            a = m.useCallback(() => r((u) => !u), []),
            o = m.useMemo(() => {
              let u = 0,
                p = 0;
              for (const h of e) {
                const f = (h.name || "").length;
                if (p > 0 && u + f >= pm) break;
                (u += f), p++;
              }
              return p;
            }, [e]),
            c = o < e.length,
            d = c && !n ? e.slice(0, o) : e;
          return (0, t.jsx)(S.Z, {
            children: (0, t.jsxs)(x.EY, {
              size: "2",
              marginY: "2",
              children: [
                (0, t.jsx)("b", {
                  children: g.LocalizePlural(
                    "#AppPage_DLCPack_IncludesItems",
                    e.length,
                    (0, ts.D)(e.length),
                  ),
                }),
                " ",
                si(
                  d,
                  (u) =>
                    (0, t.jsx)(
                      Pe.Y,
                      {
                        href: (0, Hr._)(u),
                        whiteSpace: "nowrap",
                        children: u.name,
                      },
                      u.id,
                    ),
                  { type: "unit", style: "short" },
                ),
                c && (n ? " " : "\u2026 "),
                c &&
                  (0, t.jsx)(Pe.W, {
                    onClick: a,
                    children: g.Localize(
                      n
                        ? "#AppPage_DLCPack_ShowLess"
                        : "#AppPage_DLCPack_ShowMore",
                    ),
                  }),
              ],
            }),
          });
        }
        function vm(s) {
          const { appid: e, zIndex: n } = s,
            { data: r } = (0, E.J$)({ appid: e }),
            { data: a } = (0, E.lv)({ appid: e }),
            o =
              a?.asset_url_format && a.small_capsule
                ? us(a.asset_url_format, a.small_capsule)
                : void 0;
          return o
            ? (0, t.jsx)(ne.az, {
                position: "relative",
                display: "inline-block",
                height: "45px",
                width: "120px",
                overflow: "hidden",
                className: ns().PackCapsule,
                style: { zIndex: n },
                children: (0, t.jsx)(_t, {
                  height: "100%",
                  width: "100%",
                  src: o,
                  alt: r?.name || "",
                }),
              })
            : null;
        }
        var jm = i(16071),
          Gt = i.n(jm);
        const ar = 5;
        function bm(s) {
          switch (s) {
            case nm:
              return "#AppPage_DLC_Highlight_New";
            case sm:
              return "#AppPage_DLC_Highlight_ComingSoon";
            case rm:
              return "#AppPage_DLC_Highlight_PlayerFavorite";
            case im:
              return "#AppPage_DLC_Highlight_Recommended";
            case am:
              return "#AppPage_DLC_Highlight_RecommendedForNewPlayers";
            default:
              return null;
          }
        }
        function Bm(s) {
          switch (s) {
            case "in_cart":
              return Gt().FlagInCart;
            case "in_library":
              return Gt().FlagInLibrary;
            case "on_wishlist":
              return Gt().FlagOnWishlist;
            case "ignored":
            case "excluded_by_preferences":
              return Gt().FlagIgnored;
          }
        }
        function Pm(s) {
          const {
              appid: e,
              rgRows: n,
              nDlcBrowseCount: r,
              nNumDLCExcludedByPreferences: a,
              addAllToCart: o,
            } = s,
            [c, d] = m.useState(!1),
            u = m.useCallback(() => d(!0), []),
            { data: p } = (0, E.J$)({ appid: e }),
            h = fd(e);
          if (!p || (n.length == 0 && a == 0 && !h?.length)) return null;
          m.use(g.Ready()), m.use(Be.d.Ready());
          const f = p.type == w.uE.Sv,
            y = !c && n.length > ar,
            j = y ? n.slice(0, ar) : n;
          return (0, t.jsx)(m.Suspense, {
            children: (0, t.jsxs)(A.s, {
              direction: "column",
              gap: "4",
              marginY: "5",
              children: [
                (0, t.jsxs)(Wt.YZ, {
                  "flow-children": "column",
                  children: [
                    (0, t.jsxs)(A.s, {
                      direction: "row",
                      justify: "between",
                      align: "center",
                      marginBottom: "2",
                      children: [
                        (0, t.jsx)(x.EY, {
                          size: "3",
                          contrast: "title",
                          weight: "heavy",
                          children: g.Localize(
                            f
                              ? "#AppPage_DLC_Header_Software"
                              : "#AppPage_DLC_Header",
                          ),
                        }),
                        r > 0 &&
                          (0, t.jsx)(Pe.Y, {
                            size: "2",
                            href: `${F.TS.STORE_BASE_URL}dlc/${e}/`,
                            children: g.Localize(
                              "#AppPage_DLC_BrowseAll",
                              (0, ts.D)(r),
                            ),
                          }),
                      ],
                    }),
                    a > 0 &&
                      (0, t.jsx)(ne.az, {
                        padding: "1",
                        paddingStart: "0",
                        marginBottom: "1",
                        children: (0, t.jsx)(x.EY, {
                          size: "2",
                          color: "greyneutral-11",
                          children: (0, ge.xh)(
                            g.LocalizePlural(
                              "#AppPage_DLC_ExcludedByPreferences",
                              a,
                            ),
                            (0, t.jsx)(Pe.Y, {
                              href: `${F.TS.STORE_BASE_URL}account/preferences/`,
                            }),
                          ),
                        }),
                      }),
                    j.map((B, P) =>
                      (0, t.jsx)(Em, { row: B, bRevealed: P >= ar }, B.appid),
                    ),
                    y &&
                      (0, t.jsxs)(A.s, {
                        direction: "row",
                        justify: "between",
                        align: "center",
                        marginTop: "1",
                        className: Gt().Footer,
                        children: [
                          (0, t.jsx)(Ie.$, {
                            onClick: u,
                            children: g.Localize("#AppPage_DLC_SeeAll"),
                          }),
                          (0, t.jsx)(x.EY, {
                            size: "2",
                            color: "greyneutral-11",
                            children: g.Localize(
                              "#AppPage_DLC_ShowingResults",
                              "1",
                              (0, ts.D)(ar),
                              (0, ts.D)(r),
                            ),
                          }),
                        ],
                      }),
                    !y &&
                      n.length < r &&
                      (0, t.jsx)(ne.az, {
                        marginTop: "1",
                        children: (0, t.jsx)(x.EY, {
                          size: "2",
                          color: "greyneutral-11",
                          className: Gt().PartialList,
                          children: g.Localize(
                            "#AppPage_DLC_ShowingPartialList",
                            (0, ts.D)(n.length),
                            (0, ts.D)(r),
                          ),
                        }),
                      }),
                  ],
                }),
                !y &&
                  o &&
                  (0, t.jsxs)(A.s, {
                    direction: "row",
                    justify: "between",
                    align: "center",
                    gap: "2",
                    marginTop: "2",
                    padding: "2",
                    className: Gt().AddAllToCart,
                    children: [
                      (0, t.jsx)(x.EY, {
                        size: "3",
                        weight: "heavy",
                        children: o.strTotalPrice,
                      }),
                      (0, t.jsx)(ni, {
                        rgPackageIDs: o.rgPackageIDs,
                        strButtonToken: "#AppPage_DLC_BuyAll",
                      }),
                    ],
                  }),
                !!h?.length && (0, t.jsx)(hm, { appid: e, rgOptions: h }),
              ],
            }),
          });
        }
        function Em(s) {
          const { bRevealed: e } = s,
            { appid: n, packageid: r, nHighlightReason: a } = s.row,
            { data: o } = (0, E.J$)({ appid: n }),
            { data: c } = (0, E.mr)(r ? { packageid: r } : void 0),
            d = a !== tm,
            { data: u } = (0, E.lv)(d ? { appid: n } : void 0),
            p = (0, sr.qz)({ appid: n });
          if (!o) return null;
          const h = bm(a),
            f =
              u?.asset_url_format && u.small_capsule
                ? us(u.asset_url_format, u.small_capsule)
                : void 0;
          return (0, t.jsxs)(Un.p, {
            storeItem: o,
            className: (0, D.A)(
              Gt().Row,
              d && Gt().Highlight,
              e && Gt().Revealed,
            ),
            children: [
              d &&
                f &&
                (0, t.jsx)(_t, {
                  maxHeight: "87px",
                  flexGrow: "0",
                  src: f,
                  alt: o.name,
                }),
              (0, t.jsxs)(A.s, {
                direction: "column",
                align: "start",
                gap: "1",
                paddingEnd: "1",
                className: Gt().Name,
                children: [
                  p &&
                    (0, t.jsx)(x.EY, {
                      size: "1",
                      marginBottom: "1",
                      className: (0, D.A)(Gt().Pill, Bm(p)),
                      children: (0, sr.eI)(p),
                    }),
                  h &&
                    (0, t.jsx)(x.EY, {
                      size: "1",
                      className: (0, D.A)(Gt().Pill, Gt().HighlightReason),
                      children: g.Localize(h),
                    }),
                  (0, t.jsx)(x.EY, { size: "3", children: o.name }),
                ],
              }),
              (0, t.jsxs)(ne.az, {
                flexShrink: "0",
                textAlign: "end",
                className: Gt().Price,
                children: [
                  o.is_free &&
                    (0, t.jsx)(x.EY, {
                      size: "4",
                      children: g.Localize("#AppPage_DLC_Free"),
                    }),
                  !o.is_free &&
                    (0, t.jsx)(Da, {
                      bComingSoon: o.is_coming_soon,
                      purchaseOption: c,
                    }),
                  !o.is_free &&
                    c &&
                    (0, t.jsx)(ti.z, { purchaseOption: c, size: "inline" }),
                  !o.is_free &&
                    !c &&
                    (0, t.jsx)(x.EY, {
                      size: "4",
                      children: g.Localize("#AppPage_DLC_NoPrice"),
                    }),
                ],
              }),
            ],
          });
        }
        var Im = i(72723),
          In = i.n(Im);
        function Tm(s) {
          const {
              thisDLC: e,
              rgDependencies: n,
              rgPackageIDsToAdd: r,
              strTotalPrice: a,
            } = s,
            o = n.length == 1,
            { data: c } = (0, E.J$)({ appid: e.appid }),
            { data: d } = (0, E.J$)(o ? { appid: n[0].appid } : void 0);
          if (!c || n.length == 0 || (o && !d)) return null;
          m.use(g.Ready()), m.use(Be.d.Ready());
          const u = n[0].bRequired,
            p = o
              ? g.Localize(
                  u
                    ? "#AppPage_DLCDependency_RequiredTitle"
                    : "#AppPage_DLCDependency_RecommendedTitle",
                )
              : null,
            h = o
              ? g.Localize(
                  u
                    ? "#AppPage_DLCDependency_RequiredDesc"
                    : "#AppPage_DLCDependency_RecommendedDesc",
                  c.name || "",
                  d.name || "",
                )
              : g.Localize("#AppPage_DLCDependency_MultipleDesc", c.name || "");
          return (0, t.jsx)(m.Suspense, {
            children: (0, t.jsx)(Ga, {
              marginTop: "5",
              marginBottom: "5",
              buttonBarContents: (0, t.jsx)(Sm, {
                rgPackageIDs: r,
                strTotalPrice: a,
              }),
              children: (0, t.jsxs)(Wt.YZ, {
                "flow-children": "column",
                className: In().Body,
                children: [
                  p &&
                    (0, t.jsx)(x.EY, {
                      size: "6",
                      contrast: "title",
                      marginBottom: "2",
                      children: p,
                    }),
                  (0, t.jsx)(x.EY, {
                    size: "3",
                    children: (0, ge.xh)(
                      h,
                      (0, t.jsx)("b", {}),
                      (0, t.jsx)("b", {}),
                    ),
                  }),
                  (0, t.jsxs)(S.Z, {
                    "flow-children": "row",
                    className: In().Capsules,
                    children: [
                      (0, t.jsx)(ka, {
                        appid: e.appid,
                        packageid: e.packageid,
                        strCallout: g.Localize(
                          "#AppPage_DLCDependency_ThisDLC",
                        ),
                      }),
                      n.map((f) =>
                        (0, t.jsxs)(
                          m.Fragment,
                          {
                            children: [
                              (0, t.jsx)(ne.az, {
                                "aria-hidden": !0,
                                className: In().Separator,
                                children: "+",
                              }),
                              (0, t.jsx)(ka, {
                                appid: f.appid,
                                packageid: f.packageid,
                                strCallout: g.Localize(
                                  f.bRequired
                                    ? "#AppPage_DLCDependency_RequiredTab"
                                    : "#AppPage_DLCDependency_RecommendedTab",
                                ),
                              }),
                            ],
                          },
                          f.appid,
                        ),
                      ),
                    ],
                  }),
                ],
              }),
            }),
          });
        }
        function Sm(s) {
          const { rgPackageIDs: e, strTotalPrice: n } = s;
          return (0, t.jsxs)(A.s, {
            align: "center",
            gap: "1",
            className: In().ActionGroup,
            children: [
              (0, t.jsx)(x.EY, {
                size: "3",
                className: In().Total,
                children: n,
              }),
              (0, t.jsx)(ni, {
                rgPackageIDs: e,
                strButtonToken: "#AppPage_DLCDependency_AddAllToCart",
              }),
            ],
          });
        }
        function ka(s) {
          const { appid: e, packageid: n, strCallout: r } = s,
            { data: a } = (0, E.J$)({ appid: e }),
            { data: o } = (0, E.lv)({ appid: e }),
            { data: c } = (0, E.mr)(n ? { packageid: n } : void 0);
          if (!a) return null;
          const d =
            o?.asset_url_format && o.small_capsule
              ? us(o.asset_url_format, o.small_capsule)
              : void 0;
          return (0, t.jsxs)(S.Z, {
            "flow-children": "column",
            className: In().Item,
            children: [
              (0, t.jsx)(A.s, {
                justify: "center",
                position: "absolute",
                inset: "-16px 0 auto 0",
                className: In().CalloutRow,
                children: (0, t.jsx)(x.EY, {
                  size: "1",
                  contrast: "title",
                  className: In().Callout,
                  children: r,
                }),
              }),
              (0, t.jsxs)(Un.p, {
                storeItem: a,
                className: In().Link,
                children: [
                  d &&
                    (0, t.jsx)(_t, {
                      display: "block",
                      width: "100%",
                      src: d,
                      alt: a.name || "",
                    }),
                  (0, t.jsxs)(ne.az, {
                    children: [
                      a.is_free &&
                        (0, t.jsx)(x.EY, {
                          size: "3",
                          children: g.Localize("#AppPage_DLC_Free"),
                        }),
                      !a.is_free &&
                        c &&
                        (0, t.jsx)(ti.z, { purchaseOption: c, size: "inline" }),
                      !a.is_free &&
                        !c &&
                        (0, t.jsx)(x.EY, {
                          size: "3",
                          children: g.Localize("#AppPage_DLC_NoPrice"),
                        }),
                    ],
                  }),
                ],
              }),
            ],
          });
        }
        var Va = i(96253),
          Mm = i(48205),
          nn = i.n(Mm),
          Lm = i(21690);
        function Am(s) {
          const {
              appid: e,
              oTags: n,
              oCreatorLinks: r,
              reviewSummaryRecent: a,
              strIdForReviewSummary: o,
            } = s,
            c = new Map();
          for (const [u, p] of Object.entries(n)) c.set(u, p);
          const d = new Map();
          for (const [u, p] of Object.entries(r)) d.set(u, p);
          return (
            m.useLayoutEffect(() => {
              const u = document.querySelector("#summaryBarTop");
              u && (u.style.height = "unset");
            }, []),
            m.use(g.Ready()),
            (0, t.jsx)(m.Suspense, {
              children: (0, t.jsxs)(S.Z, {
                className: nn().SummaryBarTop,
                "flow-children": "grid",
                navEntryPreferPosition: V.iU.MAINTAIN_X,
                resetNavOnEntry: !0,
                children: [
                  (0, t.jsx)(Fm, {
                    appid: e,
                    recent: a,
                    strIdForReviewSummary: o,
                  }),
                  (0, t.jsx)(Om, { appid: e }),
                  (0, t.jsx)(Dm, { appid: e, mapTags: c }),
                  (0, t.jsx)(Wm, { appid: e, mapCreatorLinks: d }),
                ],
              }),
            })
          );
        }
        function or(s) {
          const { children: e } = s;
          return (0, t.jsx)("div", {
            className: nn().Title,
            children: (0, t.jsx)(x.EY, { contrast: "title", children: e }),
          });
        }
        function Om(s) {
          const { appid: e } = s,
            n = m.useMemo(
              () => (0, U.Tc)("hardwarecompatibility", "application_config"),
              [],
            ),
            {
              bSteamDeck: r,
              bSteamOS: a,
              bSteamMachine: o,
              bSteamFrame: c,
            } = (0, Lm.Ec)(),
            [d, u] = m.useMemo(
              () =>
                o
                  ? [
                      Qt.JR,
                      g.Localize("#AppPage_SummaryBar_SteamMachineCompat"),
                    ]
                  : c
                    ? [
                        Qt.bY,
                        g.Localize("#AppPage_SummaryBar_SteamFrameCompat"),
                      ]
                    : a && !r
                      ? [Qt.c9, g.Localize("#AppPage_SummaryBar_SteamOSCompat")]
                      : [
                          Qt.ZJ,
                          g.Localize("#AppPage_SummaryBar_SteamDeckCompat"),
                        ],
              [r, a, o, c],
            );
          return n
            ? (0, t.jsxs)(S.Z, {
                className: (0, D.A)(
                  nn().SummaryBarSection,
                  nn().SteamDeckCompat,
                ),
                children: [
                  (0, t.jsx)(or, { children: u }),
                  (0, t.jsx)(sa, {
                    className: nn().SteamDeckCompatContent,
                    appID: e,
                    results: n,
                    tab: d,
                  }),
                ],
              })
            : null;
        }
        function zm(s) {
          const e = s.Element?.getBoundingClientRect(),
            n = s.m_Parent?.Element?.getBoundingClientRect();
          return !e || !n ? !1 : e.bottom <= n.bottom;
        }
        function Nm(s) {
          const { tag: e } = s,
            n = (0, wt.aL)(
              F.TS.STORE_BASE_URL + `tags/${(0, Va.ut)(F.TS.LANGUAGE)}/${e}`,
            );
          return (0, t.jsx)(T.Ii, {
            className: nn().Tag,
            href: n,
            fnCanTakeFocus: zm,
            children: (0, t.jsx)(ne.az, {
              background: "blue-5",
              paddingX: "1",
              paddingY: "0",
              children: (0, t.jsx)(x.EY, { color: "blue-8", children: e }),
            }),
          });
        }
        function Dm(s) {
          const { appid: e, mapTags: n } = s;
          return (0, t.jsxs)(Wt.YZ, {
            className: (0, D.A)(nn().SummaryBarSection, nn().UserTags),
            focusable: !0,
            children: [
              (0, t.jsx)(or, {
                children: g.Localize("#AppPage_SummaryBar_UserTags"),
              }),
              (0, t.jsx)(S.Z, {
                className: nn().Tags,
                children: Array.from(n.entries()).map(([r, a]) =>
                  (0, t.jsx)(Nm, { tag: r }, r),
                ),
              }),
            ],
          });
        }
        function Qa(s) {
          const {
            label: e,
            reviewScoreDescription: n,
            percentage: r,
            count: a,
          } = s;
          return !e || !n || r == null || !a
            ? null
            : (0, t.jsxs)("div", {
                children: [
                  (0, t.jsx)(x.EY, {
                    contrast: "body",
                    children: g.Localize(e),
                  }),
                  " ",
                  (0, t.jsx)(x.EY, { color: "blue-8", children: n }),
                  " ",
                  (0, t.jsxs)(x.EY, {
                    contrast: "body",
                    children: [
                      "(",
                      g.Localize("#AppPage_ReviewStats", r, (0, ts.D)(a)),
                      ")",
                    ],
                  }),
                ],
              });
        }
        function Fm(s) {
          const { appid: e, recent: n, strIdForReviewSummary: r } = s,
            { data: a } = (0, E.ik)({ appid: e }),
            o = m.useCallback(() => {
              window.MoveFocusToId(r);
            }, [r]);
          return !a || !a.summary_filtered?.review_count
            ? null
            : (0, t.jsxs)(S.Z, {
                className: nn().SummaryBarSection,
                onActivate: o,
                children: [
                  (0, t.jsx)(or, {
                    children: g.Localize("#AppPage_SummaryBar_UserReviews"),
                  }),
                  (0, t.jsx)(Qa, {
                    label: "#AppPage_Reviews_AllTime",
                    reviewScoreDescription:
                      a.summary_filtered?.review_score_label,
                    percentage: a.summary_filtered.percent_positive,
                    count: a.summary_filtered.review_count,
                  }),
                  n &&
                    (0, t.jsx)(Qa, {
                      label: "#AppPage_Reviews_Recent",
                      reviewScoreDescription: n.description,
                      percentage: n.percentage,
                      count: n.count,
                    }),
                ],
              });
        }
        function Wm(s) {
          const { appid: e, mapCreatorLinks: n } = s,
            { data: r } = (0, E.wl)({ appid: e }),
            { data: a } = (0, E.by)({ appid: e }),
            { data: o } = (0, E._F)({ appid: e }),
            c = o?.links_and_info?.manufacturers?.map((d) => ({ name: d }));
          return r
            ? (0, t.jsxs)(Wt.YZ, {
                className: (0, D.A)(nn().SummaryBarSection, nn().GameInfo),
                children: [
                  (0, t.jsx)(or, {
                    children: g.Localize("#AppPage_SummaryBar_GameInfo"),
                  }),
                  (0, t.jsx)("table", {
                    children: (0, t.jsxs)("tbody", {
                      children: [
                        (0, t.jsx)(ri, {
                          label: "#AppPage_SummaryBar_Developer",
                          strType: "developer",
                          rgCreators: r.developers,
                          mapCreatorLinks: n,
                        }),
                        (0, t.jsx)(ri, {
                          label: "#AppPage_SummaryBar_Publisher",
                          strType: "publisher",
                          rgCreators: r.publishers,
                          mapCreatorLinks: n,
                        }),
                        (0, t.jsx)(ri, {
                          label: "#AppPage_SummaryBar_Manufacturer",
                          strType: "manufacturer",
                          rgCreators: c,
                        }),
                        !!a?.steam_release_date &&
                          (0, t.jsxs)("tr", {
                            children: [
                              (0, t.jsx)("td", {
                                children: (0, t.jsx)(x.EY, {
                                  contrast: "body",
                                  children: g.Localize(
                                    "#AppPage_SummaryBar_ReleaseDate",
                                  ),
                                }),
                              }),
                              (0, t.jsx)("td", {
                                children: (0, t.jsx)(x.EY, {
                                  contrast: "body",
                                  children: (0, Lt._l)(a?.steam_release_date, {
                                    fullmonthname: !1,
                                    bUseRelativeNames: !1,
                                    bIncludeDayName: !1,
                                  }),
                                }),
                              }),
                            ],
                          }),
                      ],
                    }),
                  }),
                ],
              })
            : null;
        }
        function Rm(s) {
          const { creator: e, strType: n, mapCreatorLinks: r } = s,
            a = (0, wt.aL)(r?.get(e.name)),
            o = (0, wt.aL)(
              F.TS.STORE_BASE_URL +
                `search/?${n}=${encodeURIComponent(e.name)}`,
            ),
            c = a || o;
          return (0, t.jsx)(T.Ii, {
            href: c,
            children: (0, t.jsx)(x.EY, {
              color: "blue-8",
              whiteSpace: "nowrap",
              children: e.name,
            }),
          });
        }
        function ri(s) {
          const { label: e, strType: n, rgCreators: r, mapCreatorLinks: a } = s,
            o = 4;
          return !r || r.length == 0
            ? null
            : (0, t.jsxs)("tr", {
                children: [
                  (0, t.jsx)("td", {
                    children: (0, t.jsx)(x.EY, {
                      contrast: "body",
                      children: g.Localize(e),
                    }),
                  }),
                  (0, t.jsx)("td", {
                    children: (0, t.jsx)(S.Z, {
                      children: (0, t.jsxs)(x.EY, {
                        contrast: "body",
                        lineClamp: 3,
                        children: [
                          si(
                            r.slice(0, o),
                            (c) =>
                              (0, t.jsx)(
                                Rm,
                                { strType: n, creator: c, mapCreatorLinks: a },
                                c.creator_clan_account_id || c.name,
                              ),
                            { type: "unit", style: "short" },
                          ),
                          r.length > o &&
                            (0, t.jsx)("span", {
                              children: g.Localize(
                                "#AppPage_SummaryBar_AndMore",
                                r.length - o,
                              ),
                            }),
                        ],
                      }),
                    }),
                  }),
                ],
              });
        }
        function wm(s) {
          const e = (0, xn.jE)();
          return (
            m.useEffect(() => {
              const { rgPayloads: n, markReady: r } = s;
              for (let a of n || [])
                for (let o of a.rgStoreItems || [])
                  (0, E.vB)(e, o, a.dataRequestStoreItems);
              r();
            }, [e, s]),
            null
          );
        }
        var Um = i(9246),
          $a = i.n(Um),
          Cm = i(2259),
          Km = i(8611),
          an = i.n(Km);
        function ii(s) {
          const { children: e, className: n } = s,
            {
              setExpanded: r,
              refContents: a,
              bCollapsible: o,
              refPanel: c,
              bExpanded: d,
              bCollapsed: u,
            } = Ja(),
            p = m.useCallback(() => {
              r(!d);
            }, [d, r]);
          return (0, t.jsx)(S.Z, {
            ref: c,
            className: (0, D.A)(an().AutoCollapsePanel, n),
            focusableIfEmpty: !0,
            onActivate: o ? p : void 0,
            children: (0, t.jsxs)(
              S.Z,
              {
                focusable: o,
                children: [
                  (0, t.jsx)("div", {
                    ref: a,
                    className: (0, D.A)(
                      an().Contents,
                      u && an().Collapsed,
                      d && an().Expanded,
                    ),
                    children: e,
                  }),
                  o &&
                    (0, t.jsx)("div", {
                      className: an().ReadMore,
                      children: g.Localize(
                        d ? "#btn_read_less" : "#btn_read_more",
                      ),
                    }),
                ],
              },
              u ? "collapsed" : "expanded",
            ),
          });
        }
        function ai(s) {
          const { children: e, className: n } = s,
            {
              setExpanded: r,
              refContents: a,
              bCollapsible: o,
              refPanel: c,
              bExpanded: d,
              bCollapsed: u,
            } = Ja(),
            p = m.useCallback(
              (f) => {
                f && r(!0);
              },
              [r],
            ),
            h = m.useCallback(() => {
              r(!1);
            }, [r]);
          return (0, t.jsxs)(Wt.YZ, {
            ref: c,
            className: (0, D.A)(an().AutoCollapsePanel, n),
            onExplicitFocusLevelChanged: o ? p : void 0,
            children: [
              (0, t.jsx)("div", {
                ref: a,
                className: (0, D.A)(
                  an().Contents,
                  u && an().Collapsed,
                  d && an().Expanded,
                ),
                children: e,
              }),
              o &&
                !d &&
                (0, t.jsx)("div", {
                  className: an().ReadMore,
                  children: g.Localize("#btn_read_more"),
                }),
              o &&
                d &&
                (0, t.jsx)(S.Z, {
                  className: an().ReadMore,
                  onActivate: h,
                  children: g.Localize("#btn_read_less"),
                }),
            ],
          });
        }
        function Ja() {
          const [s, e] = m.useState(!1),
            [n, r] = m.useState(!1),
            a = m.useRef(null),
            o = m.useRef(!1),
            c = m.useCallback(
              (h) => {
                s || r(h.target.scrollHeight > h.target.clientHeight);
              },
              [s],
            ),
            d = (0, Cm.wY)(c),
            u = n && !s;
          return (
            m.useLayoutEffect(() => {
              o.current &&
                !s &&
                a.current?.scrollIntoView({ block: "nearest" }),
                (o.current = !1);
            }, [s]),
            {
              setExpanded: m.useCallback(
                (h) => {
                  e(h), h || (o.current = !0);
                },
                [e, o],
              ),
              refContents: d,
              refPanel: a,
              bCollapsed: u,
              bExpanded: s,
              bCollapsible: n,
            }
          );
        }
        function Gm(s) {
          const { appid: e } = s,
            { data: n } = (0, E.J$)({ appid: e }),
            { data: r } = (0, E.LM)({ appid: e });
          return (
            m.use(g.Ready()),
            !n || n.type == null || !r
              ? null
              : (0, t.jsxs)(ii, {
                  className: $a().AboutThisGame,
                  "flow-children": "column",
                  children: [
                    (0, t.jsx)("h2", {
                      className: $a().Header,
                      children: g.Localize(
                        g.GetAppTypeLocKey("#About_This", n.type),
                      ),
                    }),
                    (0, t.jsx)(es.n, { text: r }),
                  ],
                })
          );
        }
        var Ym = i(11512),
          km = i(38404),
          $t = i.n(km);
        const Vm = {
          1: "date_full",
          2: "date_month",
          3: "date_quarter",
          4: "date_year",
        };
        function Qm(s) {
          const e = s.release_from_early_access_date,
            n = Vm[s.release_from_early_access_style];
          return !e || !n ? "" : (0, Ym.M)(n, e);
        }
        function $m(s) {
          const { appid: e, staleUpdate: n, bIsAppEditor: r } = s,
            { data: a } = (0, E.J$)({ appid: e }),
            { data: o } = (0, E.by)({ appid: e }),
            { data: c } = (0, E._F)({ appid: e }),
            [d, u] = m.useState(!1),
            p = m.useCallback(() => u((P) => !P), []);
          if ((m.use(g.Ready()), !a || !o)) return null;
          const h = a.type == w.uE.Sv,
            f = !!o.is_coming_soon,
            y = Qm(o);
          let j = "#AppPage_EarlyAccess_Header",
            B = "#AppPage_EarlyAccess_BannerDesc";
          return (
            f
              ? ((j = "#AppPage_EarlyAccess_Header_Soon"),
                (B = "#AppPage_EarlyAccess_BannerDesc_Soon"))
              : h &&
                ((j = "#AppPage_EarlyAccess_Header_Software"),
                (B = "#AppPage_EarlyAccess_BannerDesc_Software")),
            (0, t.jsxs)(Wt.YZ, {
              className: $t().EarlyAccess,
              "flow-children": "column",
              children: [
                !!y &&
                  (0, t.jsx)("div", {
                    className: $t().LeavingEarlyAccess,
                    children: g.Localize("#AppPage_EarlyAccess_LeaveWhen", y),
                  }),
                (0, t.jsxs)(S.Z, {
                  className: $t().Banner,
                  "flow-children": "column",
                  children: [
                    (0, t.jsx)("h2", {
                      className: $t().Title,
                      children: g.Localize(j),
                    }),
                    (0, t.jsx)("p", {
                      className: $t().Desc,
                      children: g.Localize(B),
                    }),
                    (0, t.jsx)(Pe.W, {
                      onClick: p,
                      children: g.Localize(
                        d
                          ? "#AppPage_EarlyAccess_ShowLess"
                          : "#AppPage_EarlyAccess_ShowMore",
                      ),
                    }),
                    d &&
                      (0, t.jsx)(Jm, {
                        earlyAccess: c?.early_access,
                        staleUpdate: n,
                        bIsAppEditor: r,
                        bSoftware: h,
                      }),
                  ],
                }),
              ],
            })
          );
        }
        function Jm(s) {
          const {
              earlyAccess: e,
              staleUpdate: n,
              bIsAppEditor: r,
              bSoftware: a,
            } = s,
            o = `${F.TS.STORE_BASE_URL}earlyaccessfaq/`,
            c = !!e?.description_bbcode;
          let d;
          c
            ? (d = [
                {
                  text: e?.description_bbcode,
                  tokenHeader: "#AppPage_EarlyAccess_WhatDevsSay",
                },
              ])
            : (d = [
                {
                  text: e?.why_bbcode,
                  tokenHeader: "#AppPage_EarlyAccess_Why",
                },
                {
                  text: e?.how_long_bbcode,
                  tokenHeader: a
                    ? "#AppPage_EarlyAccess_HowLong_Software"
                    : "#AppPage_EarlyAccess_HowLong",
                },
                {
                  text: e?.full_version_bbcode,
                  tokenHeader: "#AppPage_EarlyAccess_FullVersion",
                },
                {
                  text: e?.current_state_bbcode,
                  tokenHeader: "#AppPage_EarlyAccess_CurrentState",
                },
                {
                  text: e?.pricing_bbcode,
                  tokenHeader: a
                    ? "#AppPage_EarlyAccess_Pricing_Software"
                    : "#AppPage_EarlyAccess_Pricing",
                },
                {
                  text: e?.community_bbcode,
                  tokenHeader: "#AppPage_EarlyAccess_Community",
                },
              ]);
          const u = d.some((p) => !!p.text);
          return (0, t.jsxs)(S.Z, {
            className: $t().Details,
            "flow-children": "column",
            children: [
              (0, t.jsxs)("p", {
                className: $t().Warn,
                children: [
                  g.Localize(
                    a
                      ? "#AppPage_EarlyAccess_Warn_Software"
                      : "#AppPage_EarlyAccess_Warn",
                  ),
                  " ",
                  (0, t.jsx)(T.Ii, {
                    className: $t().Link,
                    href: o,
                    children: g.Localize("#AppPage_EarlyAccess_LearnMore"),
                  }),
                ],
              }),
              !!n && (0, t.jsx)(Xm, { staleUpdate: n, bIsAppEditor: r }),
              u &&
                (0, t.jsxs)(t.Fragment, {
                  children: [
                    !c &&
                      (0, t.jsx)("div", {
                        className: $t().DevsSay,
                        children: g.Localize(
                          "#AppPage_EarlyAccess_WhatDevsSay",
                        ),
                      }),
                    d.map((p, h) =>
                      (0, t.jsx)(
                        Zm,
                        { text: p.text, tokenHeader: p.tokenHeader },
                        h,
                      ),
                    ),
                  ],
                }),
            ],
          });
        }
        function Zm(s) {
          const { text: e, tokenHeader: n } = s;
          return e
            ? (0, t.jsxs)(t.Fragment, {
                children: [
                  (0, t.jsx)("h3", {
                    className: $t().Question,
                    children: g.Localize(n),
                  }),
                  (0, t.jsx)("div", {
                    className: $t().Answer,
                    children: (0, ge.xh)(
                      g.Localize("#AppPage_EarlyAccess_Quote"),
                      (0, t.jsx)(es.n, { text: e }),
                    ),
                  }),
                ],
              })
            : null;
        }
        function Xm(s) {
          const { staleUpdate: e, bIsAppEditor: n } = s,
            { nMonthsAgo: r, bNoUpdatesEverPublished: a } = e;
          let o;
          if (!r && a) o = g.Localize("#AppPage_EarlyAccess_NoUpdates");
          else if (r && r > 24) {
            const c = Math.floor(r / 12);
            o = g.LocalizePlural("#AppPage_EarlyAccess_StaleYears", c);
          } else o = g.LocalizePlural("#AppPage_EarlyAccess_StaleMonths", r);
          return (0, t.jsxs)("div", {
            className: $t().Stale,
            children: [
              o,
              " ",
              g.Localize("#AppPage_EarlyAccess_StaleWarning2"),
              n &&
                (0, t.jsx)("div", {
                  className: $t().StaleDevs,
                  children: (0, ge.xh)(
                    g.Localize("#AppPage_EarlyAccess_StaleDevs"),
                    (0, t.jsx)(T.Ii, {
                      className: $t().Link,
                      href: `${F.TS.PARTNER_BASE_URL}doc/store/earlyaccess#update_notice`,
                    }),
                  ),
                }),
            ],
          });
        }
        var Hm = i(14844),
          oi = i.n(Hm);
        function qm(s) {
          const { appid: e } = s,
            { data: n } = (0, E._F)({ appid: e });
          m.use(g.Ready());
          const r = n?.section;
          return r?.length
            ? (0, t.jsx)("div", {
                className: oi().PageSections,
                children: r.map((a, o) => (0, t.jsx)(_m, { section: a }, o)),
              })
            : null;
        }
        function _m(s) {
          const { label: e, content_bbcode: n, banner: r } = s.section;
          return (0, t.jsxs)(ii, {
            className: oi().PageSection,
            "flow-children": "column",
            children: [
              e && (0, t.jsx)("h2", { className: oi().Header, children: e }),
              n && (0, t.jsx)(es.n, { text: n }),
            ],
          });
        }
        var eg = i(45200),
          tg = i.n(eg);
        function ng(s) {
          const { appid: e } = s,
            { data: n } = (0, E._F)({ appid: e });
          return (
            m.use(g.Ready()),
            n?.legal_notice_bbcode
              ? (0, t.jsx)(ai, {
                  className: tg().LegalNotice,
                  children: (0, t.jsx)(es.n, {
                    text: n.legal_notice_bbcode,
                    bBypassLinkFilter: !0,
                  }),
                })
              : null
          );
        }
        function sg(s) {
          const { appid: e } = s,
            { data: n } = (0, E._F)({ appid: e }),
            r = n?.press_review;
          return r?.length
            ? (m.use(g.Ready()),
              (0, t.jsx)(ne.az, {
                width: "616px",
                maxWidth: "100%",
                marginTop: "5",
                children: (0, t.jsxs)(Wt.YZ, {
                  children: [
                    (0, t.jsx)(Jt.D, {
                      level: "2",
                      size: "2",
                      weight: "heavy",
                      contrast: "title",
                      children: g.Localize("#AppPage_PressReviews_Header"),
                    }),
                    r.map((a, o) => (0, t.jsx)(rg, { review: a }, o)),
                  ],
                }),
              }))
            : null;
        }
        function rg(s) {
          const { quote: e, score: n, site: r, url: a } = s.review;
          let o = e;
          e && r && (o = g.Localize("#AppPage_PressReviews_Quote", e));
          let c = r;
          r &&
            a &&
            (c = (0, t.jsx)(Pe.Y, { href: a, color: "blue-8", children: r }));
          let d = c;
          return (
            n && r
              ? (d = g.LocalizeReact("#AppPage_PressReviews_Attribution", n, c))
              : n && (d = n),
            (0, t.jsxs)(ne.az, {
              marginBottom: "3",
              children: [
                o && (0, t.jsx)(x.EY, { as: "div", size: "2", children: o }),
                d && (0, t.jsx)(x.EY, { as: "div", size: "2", children: d }),
              ],
            })
          );
        }
        function Za(s) {
          const { strHeading: e, strIntro: n, strBody: r } = s;
          return (0, t.jsx)(ne.az, {
            maxWidth: "100%",
            marginTop: "5",
            children: (0, t.jsxs)(ii, {
              children: [
                (0, t.jsx)(Jt.D, {
                  level: "2",
                  size: "2",
                  weight: "heavy",
                  contrast: "title",
                  children: e,
                }),
                (0, t.jsx)(x.EY, {
                  as: "p",
                  size: "3",
                  marginTop: "3",
                  children: n,
                }),
                (0, t.jsx)(x.EY, {
                  as: "p",
                  size: "3",
                  whiteSpace: "pre-line",
                  style: { fontStyle: "italic" },
                  children: r,
                }),
              ],
            }),
          });
        }
        function ig(s) {
          const { appid: e } = s,
            { data: n } = (0, E._F)({ appid: e }),
            r = n?.content_survey_ai_notes;
          return r
            ? (m.use(g.Ready()),
              (0, t.jsx)(Za, {
                strHeading: g.Localize("#AppPage_AIDisclosure_Header"),
                strIntro: g.Localize("#AppPage_AIDisclosure_Intro"),
                strBody: r,
              }))
            : null;
        }
        var gn = i(32093),
          ag = i(84346),
          Tn = i(18735);
        const og = null,
          li = [
            {
              descid: Tn.ED,
              parentDescID: 0,
              strNameToken: "#ContentDescriptor_GeneralMatureContent",
              strUserDescToken:
                "#ContentDescriptor_GeneralMatureContent_Description",
              bAllowSearch: !0,
              bCustomerFacing: !0,
              bAdultsOnly: !1,
            },
            {
              descid: Tn.M,
              parentDescID: Tn.ED,
              strNameToken: "#ContentDescriptor_FrequentViolenceOrGore",
              strUserDescToken:
                "#ContentDescriptor_FrequentViolenceOrGore_Description",
              bAllowSearch: !0,
              bCustomerFacing: !0,
              bAdultsOnly: !1,
            },
            {
              descid: Tn.mx,
              parentDescID: Tn.ED,
              strNameToken: "#ContentDescriptor_NudityOrSexualContent",
              strUserDescToken:
                "#ContentDescriptor_NudityOrSexualContent_Description",
              bAllowSearch: !0,
              bCustomerFacing: !0,
              bAdultsOnly: !1,
            },
            {
              descid: Tn.T4,
              parentDescID: Tn.mx,
              strNameToken:
                "#ContentDescriptor_GratuitousNudityOrSexualContent",
              strUserDescToken:
                "#ContentDescriptor_GratuitousNudityOrSexualContent_Description",
              bAllowSearch: !0,
              bCustomerFacing: !0,
              bAdultsOnly: !0,
            },
            {
              descid: Tn.u7,
              parentDescID: Tn.T4,
              strNameToken: "#ContentDescriptor_AdultOnlySexualContent",
              strUserDescToken:
                "#ContentDescriptor_AdultOnlySexualContent_Description",
              bAllowSearch: !0,
              bCustomerFacing: !0,
              bAdultsOnly: !0,
            },
          ];
        function Gy() {
          return li;
        }
        function ci(s) {
          return li.find((e) => e.descid === s);
        }
        function Yy(s) {
          return s.some((e) => ci(e)?.bAdultsOnly);
        }
        function Xa(s, e) {
          return !s.bAdultsOnly || !og.includes(e);
        }
        function ky(s, e) {
          return e.some((n) => {
            const r = ci(n);
            return r && !Xa(r, s);
          });
        }
        function lg(s) {
          return li.filter((e) => !Xa(e, s)).map((e) => e.descid);
        }
        function Vy(s, e) {
          return [...new Set([...s, ...lg(e)])].sort((r, a) => r - a);
        }
        function cg(s) {
          const { appid: e } = s,
            { data: n } = (0, E.J$)({ appid: e }),
            { data: r } = (0, E.x2)({ appid: e }),
            a = n?.content_descriptorids;
          if (
            !n ||
            n.type == null ||
            !a?.length ||
            r === void 0 ||
            (0, gn.nA)(U.TS.EREALM)
          )
            return null;
          m.use(g.Ready()), m.use($.Z.Ready());
          let o = r?.content_survey_notes;
          if (!o) {
            const c = [];
            for (const d of a) {
              const u = ci(d);
              u?.bCustomerFacing && c.push($.Z.Localize(u.strNameToken));
            }
            o = g.Localize(
              g.GetAppTypeLocKey("#AppPage_MatureContent_Descriptors", n.type),
              new Intl.ListFormat((0, ag.J)(), {
                type: "unit",
                style: "short",
              }).format(c),
            );
          }
          return (0, t.jsx)(Za, {
            strHeading: g.Localize("#AppPage_MatureContent_Header"),
            strIntro: g.Localize("#AppPage_AgeGate_DescriptorNotes"),
            strBody: o,
          });
        }
        const dg = [
          {
            role: "directors",
            strTitleToken: "#AppPage_CastAndCrew_DirectedBy",
          },
          {
            role: "producers",
            strTitleToken: "#AppPage_CastAndCrew_ProducedBy",
          },
          { role: "writers", strTitleToken: "#AppPage_CastAndCrew_WrittenBy" },
          { role: "music", strTitleToken: "#AppPage_CastAndCrew_MusicBy" },
          { role: "actors", strTitleToken: "#AppPage_CastAndCrew_Starring" },
        ];
        function ug(s) {
          const { appid: e } = s,
            { data: n } = (0, E._F)({ appid: e }),
            r = n?.cast_and_crew,
            a = dg.filter(({ role: o }) => r?.[o]?.length);
          return !r || !a.length
            ? null
            : (m.use(g.Ready()),
              (0, t.jsx)(ne.az, {
                width: "616px",
                maxWidth: "100%",
                marginTop: "5",
                children: (0, t.jsxs)(ai, {
                  children: [
                    (0, t.jsx)(Jt.D, {
                      level: "2",
                      size: "2",
                      weight: "heavy",
                      contrast: "title",
                      children: g.Localize("#AppPage_CastAndCrew_Header"),
                    }),
                    (0, t.jsx)(ms.x, {
                      columns: "150px 1fr",
                      marginTop: "2",
                      children: a.map(({ role: o, strTitleToken: c }) =>
                        (0, t.jsx)(
                          mg,
                          { strTitle: g.Localize(c), rgNames: r[o] },
                          o,
                        ),
                      ),
                    }),
                  ],
                }),
              }));
        }
        function mg(s) {
          const { strTitle: e, rgNames: n } = s;
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)(x.EY, {
                as: "div",
                size: "4",
                weight: "heavy",
                contrast: "subtitle",
                children: e,
              }),
              (0, t.jsx)(x.EY, {
                as: "div",
                size: "4",
                contrast: "subtitle",
                children: si(n, (r, a) => (0, t.jsx)(gg, { strName: r }, a), {
                  type: "unit",
                  style: "short",
                }),
              }),
            ],
          });
        }
        function gg(s) {
          const { strName: e } = s,
            n = (0, wt.aL)(
              `${U.TS.STORE_BASE_URL}search/?term=${encodeURIComponent(e)}`,
            );
          return (0, t.jsx)(Pe.Y, { href: n, contrast: "title", children: e });
        }
        var pg = i(92757),
          hg = i(5827),
          fg = i(54806),
          di = i(98001),
          Ds = i(93191),
          Fs = i(85978),
          ui = i(58612);
        function lr(s, e = !1) {
          return (s / 60).toFixed(e || s < 1200 ? 1 : 0);
        }
        function yg(s) {
          const { data: e } = (0, E.J$)({ appid: s }),
            n = (0, kt.AP)(s),
            { data: r } = (0, ui.Nd)(n),
            a = r?.your_info;
          if (!a?.owned || !a.minutes_played_forever) return null;
          const o = !!e?.categories?.feature_categoryids?.includes(Z.Vb8);
          return {
            nMinutesForever: a.minutes_played_forever,
            nMinutesLastTwoWeeks: a.minutes_played ?? 0,
            bShowStatsLinks: o && !(0, gn.nA)(F.TS.EREALM),
            nSteamworksAppid: n,
          };
        }
        function xg(s) {
          const {
              nMinutesForever: e,
              nMinutesLastTwoWeeks: n,
              bShowStatsLinks: r,
              nSteamworksAppid: a,
            } = s.stats,
            { data: o } = (0, Fs.jn)(F.iA.steamid);
          m.use(g.Ready());
          const c = `${(0, Ds.n)(o, F.iA.steamid)}/stats/appid/${a}`,
            d = (0, di.v)({ appid: a });
          return (0, t.jsxs)(A.s, {
            direction: "column",
            children: [
              (0, t.jsxs)(x.EY, {
                size: "3",
                color: "slate-11",
                children: [
                  n > 0 &&
                    `${g.Localize("#AppPage_MyActivity_HoursLastTwoWeeks", lr(n))} / `,
                  g.Localize("#AppPage_MyActivity_HoursOnRecord", lr(e)),
                ],
              }),
              r &&
                (0, t.jsxs)(A.s, {
                  gap: "2",
                  children: [
                    (0, t.jsx)(Pe.Y, {
                      size: "3",
                      color: "blue-8",
                      href: c,
                      children: g.Localize("#AppPage_MyActivity_ViewStats"),
                    }),
                    (0, t.jsx)(Pe.Y, {
                      size: "3",
                      color: "blue-8",
                      href: d,
                      children: g.Localize(
                        "#AppPage_MyActivity_ViewGlobalStats",
                      ),
                    }),
                  ],
                }),
            ],
          });
        }
        var vg = i(80974),
          cr = i.n(vg);
        function Ha(s) {
          return ((0, gn.nA)(F.TS.EREALM) ? "steamchina://" : "steam://") + s;
        }
        function jg(s) {
          const {
              appid: e,
              bOwned: n,
              masterSub: r,
              timedTrial: a,
              playAppid: o,
            } = s,
            { data: c } = (0, E.J$)({ appid: e }),
            d = yg(e);
          if (!c || (!n && !d)) return null;
          m.use(g.Ready());
          const u = c.type == w.uE.Hk,
            p = !!a && a.nSecondsRemaining == 0 && !!r?.subscription,
            h = n && !u && !p;
          return (0, t.jsxs)(A.s, {
            direction: "column",
            paddingX: "5",
            paddingY: "3",
            background: "greyneutral-2 80%",
            children: [
              n && r && (0, t.jsx)(Bg, { masterSub: r, bTrial: !!a }),
              n && !r && (0, t.jsx)(bg, { strAppName: c.name ?? "" }),
              n && p && (0, t.jsx)(Eg, { subscription: r.subscription }),
              h &&
                (0, t.jsx)(Pg, {
                  strAppName: c.name ?? "",
                  masterSub: r,
                  timedTrial: a,
                }),
              (0, t.jsxs)(S.Z, {
                className: cr().Actions,
                "flow-children": "row",
                children: [
                  h &&
                    o !== null &&
                    (0, t.jsx)(Ig, { appid: o, eType: c.type }),
                  h &&
                    !!a &&
                    (0, t.jsx)(Tg, { nSecondsRemaining: a.nSecondsRemaining }),
                  !!d && (0, t.jsx)(xg, { stats: d }),
                ],
              }),
            ],
          });
        }
        function qa() {
          return (0, t.jsxs)(A.s, {
            className: cr().InLibraryFlag,
            gap: "1",
            flexShrink: "0",
            align: "center",
            height: "18px",
            paddingX: "1",
            background: "storegreen-10",
            children: [
              (0, t.jsx)(Ae.wpD, { className: cr().InLibrarySVG }),
              (0, t.jsx)(x.EY, {
                size: "1",
                color: "slate-1",
                children: g.Localize("#AppPage_Owned_InLibraryFlag"),
              }),
            ],
          });
        }
        function bg(s) {
          const { strAppName: e } = s;
          return (0, t.jsxs)(A.s, {
            gap: "2",
            justify: "between",
            paddingBottom: "3",
            className: cr().InLibraryRow,
            children: [
              (0, t.jsx)(x.EY, {
                size: "4",
                color: "storegreen-10",
                children: g.Localize("#AppPage_Owned_AlreadyInLibrary", e),
              }),
              (0, t.jsx)(qa, {}),
            ],
          });
        }
        function Bg(s) {
          const { masterSub: e, bTrial: n } = s,
            { strPackageName: r, subscription: a } = e,
            o = n
              ? "#AppPage_Owned_MasterSubTrialHeader"
              : "#AppPage_Owned_MasterSubHeader";
          return (0, t.jsxs)(A.s, {
            align: "center",
            gap: "2",
            children: [
              a?.strBadgeImage
                ? (0, t.jsx)(A.s, {
                    background: "blue-7",
                    justify: "center",
                    align: "center",
                    paddingY: "1",
                    paddingLeft: "2",
                    paddingRight: "5",
                    children: (0, t.jsx)(_t, {
                      src: a.strBadgeImage,
                      alt: "",
                      height: "18px",
                    }),
                  })
                : (0, t.jsx)(qa, {}),
              (0, t.jsx)(ne.az, {
                flexGrow: "0",
                children: (0, t.jsx)(x.EY, {
                  size: "4",
                  color: "storegreen-10",
                  children: g.Localize(o, r),
                }),
              }),
              !!a &&
                (0, t.jsx)(ne.az, {
                  flexShrink: "0",
                  children: (0, t.jsx)(Pe.Y, {
                    href: a.strInfoURL,
                    size: "2",
                    color: "text-light",
                    underline: "always",
                    children: g.Localize(
                      "#AppPage_Owned_MasterSubBrowse",
                      a.strName,
                    ),
                  }),
                }),
            ],
          });
        }
        function Pg(s) {
          const { strAppName: e, masterSub: n, timedTrial: r } = s,
            a = n?.subscription;
          let o = null;
          if (r) {
            const c = (0, Lt.Hq)(r.nSecondsAllowed, { eSuffix: Lt.a8.None });
            a
              ? (o = (0, ge.xh)(
                  g.Localize("#AppPage_Owned_TrialWithMasterSub", c, a.strName),
                  (0, t.jsx)(Pe.Y, { href: a.strInfoURL }),
                ))
              : (o = g.Localize("#AppPage_Owned_TrialFree", e, c));
          } else
            a &&
              (o = (0, ge.xh)(
                g.Localize("#AppPage_Owned_MasterSubDesc", a.strName),
                (0, t.jsx)(Pe.Y, { href: a.strInfoURL }),
              ));
          return o
            ? (0, t.jsx)(x.EY, { size: "3", marginTop: "3", children: o })
            : null;
        }
        function Eg(s) {
          const { subscription: e } = s;
          return (0, t.jsx)(x.EY, {
            size: "3",
            marginTop: "3",
            children: (0, ge.xh)(
              g.Localize("#AppPage_Owned_TrialEnded", e.strName),
              (0, t.jsx)(Pe.Y, { href: e.strInfoURL }),
            ),
          });
        }
        function Ig(s) {
          const { appid: e, eType: n } = s;
          let r = "#AppPage_Owned_Play";
          return (
            n == w.uE.Sv
              ? (r = "#AppPage_Owned_Use")
              : n == w.uE.Wz
                ? (r = "#AppPage_Owned_Watch")
                : n == w.uE.Ov && (r = "#AppPage_Owned_PlayMusic"),
            (0, t.jsx)(Ie.v, {
              focusable: !0,
              color: "blue",
              href: Ha(`launch/${e}/Dialog`),
              children: g.Localize(r),
            })
          );
        }
        function Tg(s) {
          const { nSecondsRemaining: e } = s;
          return e <= 0
            ? null
            : (0, t.jsx)(x.EY, {
                size: "4",
                color: "text-light",
                children: (0, Lt.Hq)(e, { eSuffix: Lt.a8.Remaining }),
              });
        }
        const Sg = {
            [w.fj.ur]: void 0,
            [w.fj.TV]: "#AppPage_Series_Type_Episode",
            [w.fj.fH]: "#AppPage_Series_Type_Chapter",
            [w.fj.hl]: "#AppPage_Series_Type_Bonus",
            [w.fj.ej]: "#AppPage_Series_Type_BehindTheScenes",
            [w.fj.h_]: "#AppPage_Series_Type_Deleted",
          },
          Mg = {
            [w.wi.Q9]: "#AppPage_Series_ExtrasNote_Purchase",
            [w.wi.NY]: "#AppPage_Series_ExtrasNote_Rental",
            [w.wi.I]: "#AppPage_Series_ExtrasNote_PurchaseRental",
            [w.wi.JT]: "#AppPage_Series_ExtrasNote_PurchaseSpecialEdition",
            [w.wi.LG]: "#AppPage_Series_ExtrasNote_PurchaseDeluxeEdition",
          };
        function _a(s) {
          return s === w.fj.TV || s === w.fj.fH;
        }
        const Lg = {
          "#Season_Number": "#AppPage_Series_SeasonName_Season",
          "#Section_Number": "#AppPage_Series_SeasonName_Section",
          "#Volume_Number": "#AppPage_Series_SeasonName_Volume",
          "#Tutorial_Content": "#AppPage_Series_SeasonName_TutorialContent",
          "#Additional_Content": "#AppPage_Series_SeasonName_AdditionalContent",
          "#Series_Content": "#AppPage_Series_ContentTitle",
          "#Extra_Content": "#AppPage_Series_ExtraContent",
        };
        function eo(s) {
          const e = s.name && Lg[s.name];
          return e ? g.Localize(e, s.index || 0) : s.name;
        }
        function to(s, e) {
          const n = (0, hg.eG)();
          return (0, fg.E)({ queries: s.map((r) => e(n, r)) });
        }
        function Ag(s) {
          const { appid: e } = s,
            { season: n, episode: r } = (0, pg.g)();
          return (0, t.jsx)(Og, {
            appid: e,
            nRequestedSeason: n ? Number(n) : void 0,
            nRequestedEpisode: r ? Number(r) : void 0,
          });
        }
        function Og(s) {
          const { appid: e, nRequestedSeason: n, nRequestedEpisode: r } = s,
            { data: a } = (0, E.J$)({ appid: e }),
            { data: o } = (0, E._F)({ appid: e }),
            { data: c } = (0, E.lv)({ appid: e }),
            d = o?.seasons || [],
            [u, p] = m.useState(d.some((B) => B.index === n) ? n : d[0]?.index),
            [h, f] = m.useState(!1);
          if (!a || (!d.length && a.type !== w.uE.gQ)) return null;
          if ((m.use(g.Ready()), !d.length))
            return (0, t.jsxs)(ne.az, {
              marginTop: "5",
              children: [
                (0, t.jsx)(Jt.D, {
                  level: "2",
                  size: "2",
                  weight: "heavy",
                  contrast: "title",
                  children: g.Localize("#AppPage_Series_ContentTitle"),
                }),
                (0, t.jsx)(x.EY, {
                  as: "p",
                  size: "4",
                  contrast: "subtitle",
                  children: g.Localize("#AppPage_Series_NoContent"),
                }),
              ],
            });
          const y = d.find((B) => B.index === u) || d[0],
            j = (B) => {
              p(B), f(!0);
            };
          return (0, t.jsx)(ne.az, {
            marginTop: "5",
            children: (0, t.jsxs)(S.Z, {
              "flow-children": "column",
              children: [
                (0, t.jsx)(Jt.D, {
                  level: "2",
                  size: "2",
                  weight: "heavy",
                  contrast: "title",
                  children:
                    d.length > 1
                      ? g.Localize("#AppPage_Series_ContentTitle")
                      : eo(y),
                }),
                d.length > 1 &&
                  (0, t.jsx)(A.s, {
                    wrap: "wrap",
                    gap: "2",
                    marginTop: "2",
                    children: d.map((B) =>
                      (0, t.jsx)(
                        Ie.$,
                        {
                          variant: B === y ? "default" : "basic",
                          onClick: () => j(B.index),
                          children: eo(B),
                        },
                        B.index,
                      ),
                    ),
                  }),
                a.type === w.uE.Wz &&
                  (0, t.jsx)(zg, {
                    appName: a.name,
                    season: y,
                    eNote: o?.video_extras_note,
                  }),
                (0, t.jsx)(
                  Ng,
                  {
                    season: y,
                    series: a,
                    strSeriesHeaderImage:
                      c?.asset_url_format && c.header
                        ? us(c.asset_url_format, c.header)
                        : void 0,
                    bFocusFirstEpisode: h,
                    nActiveEpisode: !h && y.index === n ? (r ?? 0) : 0,
                  },
                  y.index,
                ),
              ],
            }),
          });
        }
        function zg(s) {
          const { appName: e, season: n, eNote: r } = s,
            a = to(
              (n.episode_appids || []).map((d) => ({ appid: d })),
              E.po,
            );
          let o = 0,
            c = 0;
          for (const { data: d } of a)
            d?.episode?.type !== void 0 && !_a(d.episode.type) && o++,
              (c += d?.running_time_minutes || 0);
          return (0, t.jsxs)(ne.az, {
            marginTop: "2",
            children: [
              (0, t.jsx)(x.EY, {
                as: "div",
                size: "3",
                contrast: "description",
                children: g.LocalizePlural(
                  "#AppPage_Series_ExtrasSummary",
                  o,
                  c,
                ),
              }),
              (0, t.jsx)(x.EY, {
                as: "div",
                size: "3",
                contrast: "subtitle",
                marginTop: "1",
                children: g.Localize(Mg[r ?? w.wi.Q9], e || ""),
              }),
            ],
          });
        }
        function Ng(s) {
          const {
              season: e,
              series: n,
              strSeriesHeaderImage: r,
              bFocusFirstEpisode: a,
              nActiveEpisode: o,
            } = s,
            c = e.episode_appids || [],
            d = to(
              c.map((u) => ({ appid: u })),
              E.us,
            );
          return (0, t.jsx)(ne.az, {
            marginTop: "3",
            children: (0, t.jsxs)(Wt.YZ, {
              "flow-children": "column",
              children: [
                d.every(({ data: u, isPending: p }) => !p && !u?.visible) &&
                  (0, t.jsx)(x.EY, {
                    as: "div",
                    size: "3",
                    contrast: "subtitle",
                    marginBottom: "2",
                    children: (0, ge.xh)(
                      g.Localize("#AppPage_Series_SeasonNotAvailable"),
                      (0, t.jsx)("b", {}),
                    ),
                  }),
                c.map((u, p) =>
                  (0, t.jsx)(
                    Dg,
                    {
                      appid: u,
                      nSeason: e.index || 0,
                      nPosition: p + 1,
                      series: n,
                      strSeriesHeaderImage: r,
                      bActive: p + 1 === o,
                      bAutoFocus: a && p === 0,
                    },
                    u,
                  ),
                ),
              ],
            }),
          });
        }
        function Dg(s) {
          const {
              appid: e,
              nSeason: n,
              nPosition: r,
              series: a,
              strSeriesHeaderImage: o,
              bActive: c,
              bAutoFocus: d,
            } = s,
            u = m.useRef(null),
            { data: p } = (0, E.J$)({ appid: e }),
            { data: h } = (0, E.wl)({ appid: e }),
            { data: f } = (0, E.by)({ appid: e }),
            { data: y } = (0, E._F)({ appid: e }),
            { data: j } = (0, E.lv)({ appid: e });
          m.useEffect(() => {
            c && u.current?.scrollIntoView({ block: "center" });
          }, [c]);
          const B = !!p?.visible,
            P = y?.episode,
            O = !B || !!P?.hide_details,
            M = `${a.name}: `;
          let z = p?.name || "";
          z.startsWith(M) && (z = z.slice(M.length));
          let R = P?.number || String(r);
          O &&
            ((R = String(r)),
            (z = g.Localize(
              "#AppPage_Series_EpisodePlaceholder",
              String(n).padStart(2, "0"),
              String(r).padStart(2, "0"),
            )));
          let G = z;
          _a(P?.type) && (G = g.Localize("#AppPage_Series_EpisodeName", R, z));
          let W;
          if (P?.type === w.fj.TV && B) {
            const Nt = f?.original_release_date || f?.steam_release_date;
            Nt &&
              ((W = (0, Lt.$z)(Nt)),
              a.is_coming_soon &&
                (W = g.Localize("#AppPage_Series_AvailableOn", W)));
          } else {
            const Nt = P?.type !== void 0 ? Sg[P.type] : void 0;
            W = Nt && g.Localize(Nt);
          }
          const xe =
            j?.asset_url_format && j.header
              ? us(j.asset_url_format, j.header)
              : o;
          return (0, t.jsxs)(ms.x, {
            ref: u,
            focusable: !0,
            navProps: { autoFocus: d },
            columns: "160px 1fr auto",
            gap: "3",
            padding: "2",
            marginBottom: "2",
            background: c ? "blue-3 60%" : "greyneutral-3 60%",
            onClick:
              B && p?.is_free && !a.is_coming_soon
                ? () => {
                    window.location.href = Ha(`run/${e}`);
                  }
                : void 0,
            children: [
              xe &&
                (0, t.jsx)(ne.az, {
                  children: (0, t.jsx)(_t, { src: xe, alt: "", width: "100%" }),
                }),
              (0, t.jsxs)(ne.az, {
                children: [
                  (0, t.jsx)(x.EY, {
                    as: "div",
                    size: "4",
                    weight: "heavy",
                    contrast: "title",
                    children: G,
                  }),
                  (0, t.jsxs)(x.EY, {
                    as: "div",
                    size: "2",
                    contrast: "description",
                    children: [
                      W && (0, t.jsx)(x.EY, { marginEnd: "3", children: W }),
                      !O &&
                        !!y?.running_time_minutes &&
                        g.LocalizePlural(
                          "#AppPage_Series_RunningTime",
                          y.running_time_minutes,
                        ),
                    ],
                  }),
                  (0, t.jsx)(x.EY, {
                    as: "div",
                    size: "3",
                    contrast: "body",
                    whiteSpace: "pre-line",
                    marginTop: "1",
                    children: O
                      ? g.Localize("#AppPage_Series_DescriptionNotAvailable")
                      : h?.short_description,
                  }),
                ],
              }),
              B &&
                p?.is_free &&
                (0, t.jsxs)(ne.az, {
                  textAlign: "end",
                  children: [
                    (0, t.jsx)(x.EY, {
                      as: "div",
                      size: "3",
                      contrast: "title",
                      children: g.Localize("#AppPage_Series_Free"),
                    }),
                    a.is_coming_soon
                      ? (0, t.jsx)(x.EY, {
                          as: "div",
                          size: "3",
                          contrast: "description",
                          marginTop: "1",
                          children: g.Localize("#AppPage_Series_ComingSoon"),
                        })
                      : (0, t.jsx)(Ie.$, {
                          color: "storegreen",
                          focusable: !1,
                          marginTop: "1",
                          children: g.Localize("#AppPage_Series_Watch"),
                        }),
                  ],
                }),
            ],
          });
        }
        var no = i(62038),
          Fg = i(55367),
          ze = i.n(Fg),
          so = i(83321),
          mi = i(7967),
          gs = i(32994),
          Wg = i(3471),
          Te = i.n(Wg);
        function Ws(s) {
          return ro(s)
            ? (0, L.we)("#Language_" + (0, Z.LgB)(s.elanguage))
            : io(s)
              ? (0, L.we)("#language_ext_" + (0, Z.c6v)(s.eadditionallanguage))
              : (0, L.we)("#language_selection_none");
        }
        function Rg(s) {
          if (!s) return [];
          const e = [];
          for (let n = 0; n < s.length; n++)
            s[s.length - n - 1] == "1" && e.push(n);
          return e;
        }
        function wg(s) {
          if (!s) return [];
          const e = [],
            n = BigInt(s);
          for (let r = Z.Bhc; r < Z.bP9; r++)
            (n >> BigInt(r)) & BigInt(1) && e.push(r);
          return e;
        }
        function ro(s) {
          return s.elanguage != null && s.elanguage != -1;
        }
        function io(s) {
          return s.eadditionallanguage != null && s.eadditionallanguage != -1;
        }
        function Ug(s, e) {
          let n;
          if (!s || !e?.length)
            return {
              rgSorted: [],
              nForceVisible: 0,
              firstPreferredLanguage: n,
            };
          const r = [],
            a = [
              (0, gs.ae)(s),
              ...wg(s.preferences?.secondary_languages),
            ].filter((p) => p != null),
            o = new Set();
          for (const p of a) {
            const h = e.findIndex((f) => f.elanguage == p);
            h != -1 &&
              (r.push({ ...e[h], preferred: !0 }),
              o.add(p),
              n || (n = { ...e[h], preferred: !0 }));
          }
          const c = Rg(s.preferences?.additional_languages),
            d = new Set();
          for (const p of c) {
            const h = e.findIndex((f) => f.eadditionallanguage == p);
            h != -1 && (r.push({ ...e[h], preferred: !0 }), d.add(p));
          }
          const u = r.length;
          for (const p of e)
            if (ro(p)) {
              if (o.has(p.elanguage)) continue;
              r.push({ ...p, preferred: !1 }), o.add(p.elanguage);
            } else if (io(p)) {
              if (d.has(p.elanguage)) continue;
              r.push({ ...p, preferred: !1 }), d.add(p.eadditionallanguage);
            }
          return { rgSorted: r, nForceVisible: u, firstPreferredLanguage: n };
        }
        function Cg(s) {
          const { appid: e, initialOpen: n } = s,
            [r, a] = (0, m.useState)(n ?? !1),
            { data: o } = (0, E.Zx)({ appid: e }),
            { data: c } = (0, E.J$)({ appid: e }),
            { data: d } = (0, gs.lI)(),
            [u, p] = (0, m.useState)(!1),
            h = (0, so.LT)("md"),
            f = m.useId(),
            {
              rgSorted: y,
              nForceVisible: j,
              firstPreferredLanguage: B,
            } = m.useMemo(() => Ug(d, o ?? []), [d, o]);
          if (!y.length || !c || c.type == w.uE.Ov) return null;
          const P = c.type == w.uE.Wz || c.type == w.uE.gQ,
            O = h ? Te().CheckColumn : Te().IconColumn,
            M = h ? Gg : Yg;
          return (0, t.jsxs)(T.fF, {
            className: Te().Details,
            focusableIfEmpty: !0,
            open: r,
            onToggle: (z) => a(z.currentTarget.open),
            children: [
              (0, t.jsxs)(
                T.f_,
                {
                  className: Te().Summary,
                  children: [
                    (0, t.jsx)("div", {
                      className: Te().ImageContainer,
                      children: (0, t.jsx)(N.vCk, { className: Te().Image }),
                    }),
                    (0, t.jsxs)("div", {
                      className: Te().TextBox,
                      children: [
                        (0, t.jsx)(x.EY, {
                          color: "blue-8",
                          children: g.Localize(
                            "#languages_supported",
                            y.length,
                          ),
                        }),
                        !r && (0, t.jsx)(Kg, { language: B }),
                      ],
                    }),
                    r &&
                      (0, t.jsx)("div", {
                        className: Te().Open,
                        children: "-",
                      }),
                    !r &&
                      (0, t.jsx)("div", {
                        className: Te().Closed,
                        children: "+",
                      }),
                  ],
                },
                r ? "open" : "closed",
              ),
              (0, t.jsxs)(mi.Qg, {
                className: Te().LanguageGrid,
                focusable: r,
                children: [
                  !h &&
                    (0, t.jsxs)("div", {
                      className: Te().Legend,
                      children: [
                        (0, t.jsx)(x.EY, {
                          color: "greyneutral-11",
                          children: g.Localize("#language_header_subtitles"),
                        }),
                        (0, t.jsx)("div", {
                          className: Te().LegendIconContainer,
                          children: (0, t.jsx)(N._b5, {
                            className: Te().LegendIcon,
                          }),
                        }),
                        (0, t.jsx)(x.EY, {
                          color: "greyneutral-11",
                          children: g.Localize(
                            "#language_header_full_audio_short",
                          ),
                        }),
                        (0, t.jsx)("div", {
                          className: Te().LegendIconContainer,
                          children: (0, t.jsx)(N.fSs, {
                            className: Te().LegendIcon,
                          }),
                        }),
                      ],
                    }),
                  (0, t.jsxs)("table", {
                    className: Te().LanguageTable,
                    children: [
                      (0, t.jsxs)("colgroup", {
                        children: [
                          (0, t.jsx)("col", { className: Te().LanguageName }),
                          (0, t.jsx)("col", { className: O }),
                          (0, t.jsx)("col", { className: O }),
                          h && (0, t.jsx)("col", { className: O }),
                        ],
                      }),
                      h &&
                        (0, t.jsx)("thead", {
                          children: (0, t.jsxs)("tr", {
                            children: [
                              (0, t.jsx)("th", {}),
                              (0, t.jsx)("th", {
                                children: (0, t.jsx)(x.EY, {
                                  color: "greyneutral-11",
                                  children: g.Localize(
                                    P
                                      ? "#language_header_interface_video"
                                      : "#language_header_interface",
                                  ),
                                }),
                              }),
                              (0, t.jsx)("th", {
                                children: (0, t.jsx)(x.EY, {
                                  color: "greyneutral-11",
                                  children: g.Localize(
                                    "#language_header_subtitles",
                                  ),
                                }),
                              }),
                              (0, t.jsx)("th", {
                                children: (0, t.jsx)(x.EY, {
                                  color: "greyneutral-11",
                                  children: g.Localize(
                                    "#language_header_full_audio",
                                  ),
                                }),
                              }),
                            ],
                          }),
                        }),
                      (0, t.jsx)("tbody", {
                        children: y.map((z, R) =>
                          (0, t.jsx)(M, { language: z }, R),
                        ),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        }
        function Kg(s) {
          const { language: e } = s,
            { data: n } = (0, gs.lI)();
          if (!n) return null;
          if (!e || (!e.supported && !e.subtitles && !e.full_audio))
            return (0, t.jsx)(x.EY, {
              color: "blue-8",
              children: (0, L.we)("#Language_" + (0, Z.LgB)((0, gs.ae)(n))),
            });
          {
            let r;
            return (
              e.full_audio
                ? e.subtitles
                  ? (r = "#language_supported_subtitles_audio")
                  : (r = "#language_supported_audio")
                : e.subtitles
                  ? (r = "#language_supported_subtitles")
                  : (r = "#language_supported_interface"),
              (0, t.jsx)(x.EY, {
                color: "storegreen-7",
                children: g.Localize(r, Ws(e)),
              })
            );
          }
        }
        function Gg(s) {
          const { language: e } = s,
            n = (0, so.LT)("md");
          return !e.supported && !e.full_audio && !e.subtitles
            ? (0, t.jsxs)("tr", {
                className: (0, D.A)(e.preferred && Te().Preferred),
                children: [
                  (0, t.jsx)("td", {
                    children: (0, t.jsx)(x.EY, {
                      color: e.preferred ? "storegreen-7" : "blue-8",
                      children: Ws(e),
                    }),
                  }),
                  (0, t.jsx)("td", {
                    colSpan: 3,
                    children: g.Localize("#language_not_supported"),
                  }),
                ],
              })
            : (0, t.jsxs)("tr", {
                className: (0, D.A)(e.preferred && Te().Preferred),
                children: [
                  (0, t.jsx)("td", { className: Te().Name, children: Ws(e) }),
                  (0, t.jsx)("td", {
                    children:
                      (e.supported &&
                        (0, t.jsx)("span", { children: "\u2714" })) ||
                      (0, t.jsx)(t.Fragment, {}),
                  }),
                  (0, t.jsx)("td", {
                    children:
                      (e.subtitles &&
                        (0, t.jsx)("span", { children: "\u2714" })) ||
                      (0, t.jsx)(t.Fragment, {}),
                  }),
                  (0, t.jsx)("td", {
                    children:
                      (e.full_audio &&
                        (0, t.jsx)("span", { children: "\u2714" })) ||
                      (0, t.jsx)(t.Fragment, {}),
                  }),
                ],
              });
        }
        function Yg(s) {
          const { language: e } = s;
          return !e.supported && !e.full_audio && !e.subtitles
            ? (0, t.jsx)("tr", {
                className: (0, D.A)(e.preferred && Te().Preferred),
                children: (0, t.jsx)("td", {
                  colSpan: 3,
                  children: g.Localize("#language_not_supported_inline", Ws(e)),
                }),
              })
            : (0, t.jsxs)("tr", {
                className: (0, D.A)(e.preferred && Te().Preferred),
                children: [
                  (0, t.jsx)("td", { className: Te().Name, children: Ws(e) }),
                  (0, t.jsx)("td", {
                    children: (0, t.jsx)("div", {
                      className: Te().SmallIcon,
                      children:
                        (e.subtitles && (0, t.jsx)(N._b5, {})) ||
                        (0, t.jsx)(t.Fragment, {}),
                    }),
                  }),
                  (0, t.jsx)("td", {
                    children: (0, t.jsx)("div", {
                      className: Te().SmallIcon,
                      children:
                        (e.full_audio && (0, t.jsx)(N.fSs, {})) ||
                        (0, t.jsx)(t.Fragment, {}),
                    }),
                  }),
                ],
              });
        }
        function dr(s) {
          return (0, t.jsx)(ne.az, {
            marginBottom: "2",
            children: (0, t.jsx)(x.EY, {
              contrast: "title",
              size: "2",
              weight: "heavy",
              style: { letterSpacing: "0.5px" },
              children: s.text,
            }),
          });
        }
        function kg(s) {
          const { appid: e, rgCategories: n, controllersUsed: r } = s,
            { data: a } = (0, E.J$)({ appid: e }),
            { data: o } = (0, E._F)({ appid: e }),
            c = m.useMemo(() => {
              const y = new Set(a?.categories?.feature_categoryids ?? []);
              return (
                a?.categories?.supported_player_categoryids?.forEach((j) =>
                  y.add(j),
                ),
                a?.categories?.controller_categoryids?.forEach((j) => y.add(j)),
                y
              );
            }, [a]),
            { data: d } = (0, E.is)({ appid: e }),
            p =
              d?.purchase_options?.find(
                (y) =>
                  y.free_with_master_sub_appid &&
                  y.free_with_master_sub_appid != ds.sc,
              )?.free_with_master_sub_appid ?? ds.sc;
          if (
            (m.use(g.Ready()),
            m.use($.Z.Ready()),
            !a || a.type == null || a?.type == w.uE.Hk || !o)
          )
            return null;
          const h = n.filter((y) => c.has(y.categoryid ?? 0));
          if (a.type == w.uE.Ov && h.length == 0) return null;
          const { vetted: f } = o;
          return (0, t.jsxs)(Wt.YZ, {
            className: ze().CategorySection,
            "flow-children": "column",
            children: [
              (0, t.jsx)(dr, { text: g.Localize("#AppPage_Features") }),
              (0, t.jsxs)(x.EY, {
                color: "blue-8",
                size: "2",
                children: [
                  h.length > 0 &&
                    (0, t.jsx)(t.Fragment, {
                      children: (0, t.jsx)(S.Z, {
                        className: ze().CategoryLinks,
                        "flow-children": "column",
                        children: h.map((y, j) =>
                          (0, t.jsx)($g, { category: y }, j),
                        ),
                      }),
                    }),
                  !f && (0, t.jsx)(Zg, { appid: e }),
                  (0, t.jsx)(no.AccessibilityFeatureDisplay, {
                    features: (0, no.AccessibilityFeaturesFromCategories)(
                      a?.categories?.feature_categoryids ?? [],
                    ),
                  }),
                  (0, t.jsx)(Cg, { appid: e }),
                  (0, t.jsx)(ki, { ...Xg(e, c, r, o) }),
                  (0, t.jsxs)(x.EY, {
                    color: "gold-11",
                    children: [
                      (0, t.jsx)(qg, { extraDetails: o }),
                      (0, t.jsx)(rp, { extraDetails: o }),
                      (0, t.jsx)(ep, { extraDetails: o }),
                      (0, t.jsx)(ao, { eulas: o.eula ?? [] }),
                      p != ds.sc && (0, t.jsx)(tp, { appid: p }),
                      (0, t.jsx)(sp, { extraDetails: o }),
                      (0, t.jsx)(ip, { extraDetails: o }),
                    ],
                  }),
                ],
              }),
            ],
          });
        }
        function Vg(s) {
          switch (s.categoryid) {
            case Z.Wmb:
            case Z.q0f:
              return "category1=" + s.categoryid;
            case Z.PBc:
              return "vrsupport=401";
            case Z.zWR:
              return "vrsupport=402";
            default:
              return "category2=" + s.categoryid;
          }
        }
        function Qg(s) {
          return (
            s == Z.Y5S ||
            s == Z.mv5 ||
            (s >= Z.KH9 && s <= Z.fui) ||
            (s >= Z.mWc && s <= Z.vVO)
          );
        }
        function $g(s) {
          const { category: e } = s,
            n = (0, wt.aL)(`${U.TS.STORE_BASE_URL}search/?${Vg(e)}`);
          return Qg(e.categoryid)
            ? null
            : (0, t.jsxs)(T.Ii, {
                href: n,
                className: (0, D.A)(ze().SearchLink),
                children: [
                  (0, t.jsx)("div", {
                    className: ze().IconContainer,
                    children: (0, t.jsx)("img", {
                      className: ze().Icon,
                      src: `${U.TS.IMG_URL}/${e.image_path}`,
                      alt: "",
                    }),
                  }),
                  (0, t.jsx)(x.EY, {
                    className: ze().FeatureString,
                    marginLeft: "2",
                    children: g.Localize(e.display_name),
                  }),
                ],
              });
        }
        const Jg = 60;
        function Zg(s) {
          const { appid: e } = s,
            { data: n } = (0, E.J$)({ appid: e }),
            { data: r } = (0, E.by)({ appid: e });
          if (!n || U.TS.EREALM == gn.TU.k_ESteamRealmChina) return null;
          const a = r?.steam_release_date ?? 0,
            o = a != 0 && Date.now() / 1e3 - a < 86400 * Jg;
          let c, d;
          switch (n.type) {
            case w.uE.HT:
              (c = o
                ? "#feature_learning_about_game"
                : "#feature_profile_features_limited"),
                (d = "#feature_learning_about_desc_game");
              break;
            case w.uE.Sv:
              (c = o
                ? "#feature_learning_about_software"
                : "#feature_profile_features_limited"),
                (d = "#feature_learning_about_desc_software");
              break;
            case w.uE._i:
              (c = o
                ? "#feature_learning_about_dlc"
                : "#feature_profile_features_limited"),
                (d = "#feature_learning_about_desc_dlc");
              break;
            case w.uE.RA:
              (c = o
                ? "#feature_learning_about_mod"
                : "#feature_profile_features_limited"),
                (d = "#feature_learning_about_desc_mod");
              break;
          }
          if (!c || !d) return null;
          const u = `${U.TS.IMG_URL}v6/ico/${o ? "ico_learning_about_game.png" : "ico_info.png"}`;
          return (0, t.jsxs)(S.Z, {
            className: ze().LearningAbout,
            children: [
              (0, t.jsx)("div", {
                className: ze().IconContainer,
                children: (0, t.jsx)("img", {
                  className: ze().Icon,
                  src: u,
                  alt: "",
                }),
              }),
              (0, t.jsxs)(x.EY, {
                className: ze().FeatureString,
                marginLeft: "2",
                children: [g.Localize(c), " "],
              }),
            ],
          });
        }
        function Xg(s, e, n, r) {
          const {
              controller_wizard_complete: a,
              no_mouse_keyboard_support: o,
            } = r,
            c =
              !!n.has_any_controller &&
              !n.has_ps4_controller &&
              !n.has_ps5_controller &&
              !n.has_xbox_controller;
          return {
            unAppID: s,
            bFullXboxControllerSupport: e.has(Z.mv5),
            bPartialXboxControllerSupport: e.has(Z.Y5S),
            bPS4ControllerSupport: e.has(Z.KH9),
            bPS4ControllerBTSupport: e.has(Z.wFw),
            bPS5ControllerSupport: e.has(Z.wFw),
            bPS5ControllerBTSupport: e.has(Z.lDg),
            bSteamInputAPISupport: e.has(Z.R2g),
            bNoKeyboardSupport: o,
            bGamepadPreferred: e.has(Z.fui),
            bControllerSupportWizardComplete: a,
            bHasXbox: !!n.has_xbox_controller,
            bHasPS4: !!n.has_ps4_controller,
            bHasPS5: !!n.has_ps5_controller,
            bHasOther: c,
          };
        }
        function Hg(s) {
          const { activationLimit: e } = s;
          return e
            ? e == "Unlimited"
              ? (0, t.jsx)("div", {
                  className: ze().ActivationLimit,
                  children: g.Localize(
                    "#feature_machine_activation_limit_unlimited",
                  ),
                })
              : (0, t.jsx)("div", {
                  className: ze().ActivationLimit,
                  children: g.Localize("#feature_machine_activation_limit", e),
                })
            : null;
        }
        function qg(s) {
          const { extraDetails: e } = s,
            { drm_third_party_type: n, drm_activation_limit: r } = e;
          return n
            ? (0, t.jsx)("div", {
                className: ze().ThirdPartyNotice,
                children: (0, t.jsxs)(x.EY, {
                  children: [
                    g.Localize("#feature_third_party_drm", n),
                    (0, t.jsx)(Hg, { activationLimit: r }),
                  ],
                }),
              })
            : null;
        }
        function _g(s) {
          return s == "secureboot_tpm2"
            ? g.Localize(
                "#feature_anticheat_bootprotection_secureboottpm2_desc",
              )
            : "";
        }
        function ep(s) {
          const { extraDetails: e } = s,
            { anticheat: n } = e;
          if (!n) return null;
          const {
            kernel_mode: r,
            boot_protection: a,
            uninstall_completely: o,
            name: c,
            boot_protection_name: d,
          } = n;
          return (0, t.jsxs)("div", {
            className: (0, D.A)(ze().ThirdPartyNotice, ze().Anticheat),
            children: [
              (0, t.jsx)(x.EY, {
                children: g.Localize(
                  r
                    ? "#feature_includes_kernel_anti_cheat"
                    : "#feature_includes_non_kernel_anti_cheat",
                ),
              }),
              (0, t.jsxs)(x.EY, {
                color: "bronze-12",
                children: [
                  c,
                  r &&
                    !o &&
                    (0, t.jsx)(x.EY, {
                      children: g.Localize(
                        "#feature_anti_cheat_requires_manual_removal",
                      ),
                    }),
                ],
              }),
              a &&
                (0, t.jsxs)(x.EY, {
                  children: [
                    g.Localize("#feature_anticheat_bootprotection"),
                    (0, t.jsx)("div", {
                      className: ze().BootProtectionName,
                      children: _g(d),
                    }),
                  ],
                }),
            ],
          });
        }
        function tp(s) {
          const { appid: e } = s,
            { data: n } = (0, E.J$)({ appid: e });
          return !n || !n.name
            ? null
            : (0, t.jsx)(np, {
                appid: e,
                title: g.Localize("#feature_master_sub_app_eula", n.name),
              });
        }
        function np(s) {
          const { appid: e, title: n } = s,
            { data: r } = (0, E._F)({ appid: e });
          return r ? (0, t.jsx)(ao, { eulas: r.eula ?? [], title: n }) : null;
        }
        function ao(s) {
          const { eulas: e, title: n } = s;
          if (!e?.length) return null;
          const r = n || g.Localize("#feature_third_party_eula");
          return (0, t.jsxs)("div", {
            className: (0, D.A)(ze().ThirdPartyNotice, ze().Eulas),
            children: [
              (0, t.jsxs)(x.EY, { children: [r, " "] }),
              e.map((a, o) =>
                (0, t.jsx)(
                  T.Ii,
                  {
                    className: ze().Link,
                    href: a.url,
                    children: (0, t.jsx)(x.EY, {
                      color: "bronze-12",
                      children: a.name,
                    }),
                  },
                  o,
                ),
              ),
            ],
          });
        }
        function sp(s) {
          return s.extraDetails.refund_checks_ea_playtime
            ? (0, t.jsx)("div", {
                className: ze().ThirdPartyNotice,
                children: (0, t.jsx)(x.EY, {
                  children: g.Localize("#feature_third_party_refund_playtime"),
                }),
              })
            : null;
        }
        function rp(s) {
          const { extraDetails: e } = s,
            {
              user_account_third_party: n,
              user_account_third_party_link_to_steam: r,
            } = e;
          return n
            ? (0, t.jsx)("div", {
                className: (0, D.A)(
                  ze().ThirdPartyNotice,
                  ze().ThirdPartyAccount,
                ),
                children: (0, t.jsxs)(x.EY, {
                  children: [
                    g.Localize("#feature_external_account_service", n),
                    !!r &&
                      (0, t.jsx)(t.Fragment, {
                        children: g.Localize(
                          "#feature_external_account_service_canlink",
                        ),
                      }),
                  ],
                }),
              })
            : null;
        }
        function ip(s) {
          const { extraDetails: e } = s,
            { ai_generation_service: n } = e;
          return !n || !n.name
            ? null
            : (0, t.jsx)("div", {
                className: ze().ThirdPartyNotice,
                children: (0, t.jsx)(x.EY, {
                  children: (0, La.i)(
                    g.Localize(
                      "#feature_ai_generated_content_external_account_service",
                      n.name,
                    ),
                    (0, t.jsx)(T.Ii, { href: n.url }),
                  ),
                }),
              });
        }
        var ap = i(76985),
          Zt = i.n(ap),
          ur = i(48473);
        function op(s) {
          const { appid: e, tracks: n, metadata: r } = s,
            { data: a } = (0, E.J$)({ appid: e }),
            [o, c] = m.useState(n[0]?.discNumber ?? 1),
            d = m.useMemo(() => {
              let u = new Map();
              for (const p of n ?? [])
                u.has(p.discNumber)
                  ? u.get(p.discNumber)?.tracks.push(p)
                  : u.set(p.discNumber, {
                      discNumber: p.discNumber,
                      tracks: [p],
                    });
              return u;
            }, [n]);
          return !a || a.type == null || !n?.length
            ? null
            : (0, t.jsxs)(t.Fragment, {
                children: [
                  (0, t.jsxs)(Wt.YZ, {
                    className: Zt().TrackListContainer,
                    "flow-children": "column",
                    children: [
                      d.size > 1 &&
                        (0, t.jsx)(S.Z, {
                          "flow-children": "row",
                          className: Zt().DiscTabs,
                          children: Array.from(d.values()).map((u) =>
                            (0, t.jsx)(
                              Ie.$,
                              {
                                variant:
                                  u.discNumber == o ? "inverted" : void 0,
                                onClick: () => c(u.discNumber),
                                children: g.Localize(
                                  "#music_disc_tab",
                                  u.discNumber,
                                ),
                              },
                              u.discNumber,
                            ),
                          ),
                        }),
                      (0, t.jsx)(mi.Qg, {
                        className: Zt().TrackList,
                        children: (0, t.jsx)(lp, { tracks: d.get(o).tracks }),
                      }),
                    ],
                  }),
                  (0, t.jsx)(Wt.YZ, {
                    className: Zt().MetadataContainer,
                    "flow-children": "column",
                    children: (0, t.jsx)(mi.Qg, {
                      className: Zt().Metadata,
                      children: (0, t.jsx)(mp, { metadata: r }),
                    }),
                  }),
                ],
              });
        }
        function lp(s) {
          const { tracks: e } = s;
          return (0, t.jsx)(x.EY, {
            color: "greyneutral-12",
            children: (0, t.jsxs)("table", {
              className: Zt().TrackTable,
              children: [
                (0, t.jsxs)("colgroup", {
                  children: [
                    (0, t.jsx)("col", { className: Zt().Number }),
                    (0, t.jsx)("col", { className: Zt().Name }),
                    (0, t.jsx)("col", { className: Zt().Length }),
                  ],
                }),
                (0, t.jsx)("tbody", {
                  children: e.map((n, r) =>
                    (0, t.jsx)(cp, { track: n, odd: r % 2 != 0 }, r),
                  ),
                }),
              ],
            }),
          });
        }
        function cp(s) {
          const { track: e, odd: n } = s;
          return (0, t.jsxs)("tr", {
            className: (0, D.A)(n && Zt().Odd),
            children: [
              (0, t.jsx)("td", { children: e.trackNumber }),
              (0, t.jsx)("td", { children: dp(e) }),
              (0, t.jsx)("td", { className: Zt().Length, children: up(e) }),
            ],
          });
        }
        function dp(s) {
          if (!s.originalName || !s.originalNameLanguage)
            return s.internationalName;
          const e = L.pf.GetELanguageFallbackOrder()[0] ?? Z.Bhc;
          return (0, Z.wwZ)(e) == s.originalNameLanguage
            ? (0, ur.EK)(s.originalName)
            : g.Localize(
                "#music_localized_track_name",
                (0, ur.EK)(s.internationalName),
                (0, ur.EK)(s.originalName),
              );
        }
        function up(s) {
          return g.Localize(
            "#music_album_track_duration",
            s.lengthMinutes,
            s.lengthSeconds.toString().padStart(2, "0"),
          );
        }
        function mp(s) {
          const { metadata: e } = s;
          return e
            ? (0, t.jsxs)(A.s, {
                direction: "column",
                className: Zt().Credits,
                marginTop: "4",
                children: [
                  (0, t.jsx)(x.EY, {
                    size: "5",
                    weight: "heavy",
                    children: g.Localize("#music_album_metadata"),
                  }),
                  (0, t.jsx)(ms.x, {
                    columns: "max-content max-content",
                    gapX: "2",
                    margin: "2",
                    children: e.map((n) =>
                      (0, t.jsx)(gp, { metadata: n }, n.field),
                    ),
                  }),
                ],
              })
            : null;
        }
        function oo(s, e) {
          return s.find((n) => n.language == e);
        }
        function gp(s) {
          const { metadata: e } = s;
          if (!e || !e.values?.length) return null;
          const { field: n, values: r } = e,
            a = "#music_album_metadata_key_" + n,
            o = L.pf.GetELanguageFallbackOrder()[0] ?? Z.Bhc,
            c = oo(r, o) || oo(r, Z.Bhc);
          return c
            ? (0, t.jsxs)(t.Fragment, {
                children: [
                  (0, t.jsx)(x.EY, {
                    className: Zt().CreditName,
                    children: g.Localize(a),
                  }),
                  (0, t.jsx)(x.EY, { children: (0, ur.EK)(c.value) }),
                ],
              })
            : null;
        }
        var mr = i(84909),
          ss = i(43462),
          pp = i(19218),
          gi = i.n(pp);
        const hp = new Is.wd("InterestButtons");
        function fp(s) {
          const { appid: e } = s,
            { data: n } = (0, E.J$)({ appid: e });
          return !n || n.type == null
            ? null
            : (0, t.jsx)(S.Z, {
                className: gi().ButtonRow,
                "flow-children": "column",
                children: (0, t.jsxs)(A.s, {
                  direction: "column",
                  gap: "1",
                  children: [
                    (0, t.jsx)(bp, { appid: e }),
                    (0, t.jsxs)(A.s, {
                      direction: "row",
                      width: "100%",
                      gap: "1",
                      children: [
                        (0, t.jsx)(yp, { appid: e }),
                        (0, t.jsx)(xp, { appid: e }),
                      ],
                    }),
                  ],
                }),
              });
        }
        function pi(s) {
          const { options: e, children: n } = s;
          return (0, t.jsxs)("span", {
            className: gi().WidestChildContainer,
            children: [
              e.map((r, a) =>
                (0, t.jsx)("span", { className: gi().Hidden, children: r }, a),
              ),
              (0, t.jsx)("span", { children: n }),
            ],
          });
        }
        function lo() {
          return (0, t.jsx)(ne.az, {
            width: "16px",
            marginRight: "1",
            marginTop: "1",
            children: (0, t.jsx)(Ae.MGO, {}),
          });
        }
        function yp(s) {
          const { appid: e } = s,
            { data: n } = Ss(e),
            r = Jl(e);
          if (!n) return null;
          const { following: a = !1 } = n,
            o = (u) => {
              r.mutateAsync({ following: u, old_interest: n });
            },
            c = g.Localize("#button_follow"),
            d = (0, t.jsxs)(A.s, {
              direction: "row",
              align: "center",
              gap: "1",
              children: [(0, t.jsx)(lo, {}), g.Localize("#button_follow_undo")],
            });
          return (0, t.jsx)(ne.az, {
            flexGrow: "1",
            children: (0, t.jsxs)(Ie.$, {
              color: "greyneutral",
              onClick: () => o(!a),
              width: "100%",
              children: [
                (0, t.jsx)(ne.az, {
                  children: a ? (0, t.jsx)(N.c9e, {}) : (0, t.jsx)(N.pPV, {}),
                }),
                (0, t.jsx)(pi, { options: [c, d], children: a ? d : c }),
              ],
            }),
          });
        }
        function xp(s) {
          const { appid: e } = s,
            { data: n } = Ss(e),
            r = $l(e),
            [a, o] = m.useState(!1);
          if (!n) return null;
          const { ignored: c = !1, ignored_reason: d } = n,
            u = !!c && (d ?? !1),
            p = (j, B) => {
              hp.Info("ignoring", j, B),
                r.mutateAsync({
                  ignored: j,
                  ignored_reason: B,
                  old_interest: n,
                });
            },
            h = (j) => {
              p(j !== !1, j === !1 ? void 0 : j), o(!1);
            },
            f = g.Localize("#button_ignore"),
            y = (0, t.jsxs)(A.s, {
              direction: "row",
              align: "center",
              gap: "1",
              children: [(0, t.jsx)(lo, {}), g.Localize("#button_ignore_undo")],
            });
          return (0, t.jsx)(ne.az, {
            flexGrow: "1",
            children: (0, t.jsxs)(mr.AM.Root, {
              open: a,
              onOpenChange: o,
              children: [
                (0, t.jsx)(mr.AM.Anchor, {
                  children: (0, t.jsx)(Ie.$, {
                    color: "greyneutral",
                    onClick: () => o(!a),
                    width: "100%",
                    children: (0, t.jsx)(pi, {
                      options: [f, y],
                      children: c ? y : f,
                    }),
                  }),
                }),
                (0, t.jsx)(mr.AM.Positioner, {
                  children: (0, t.jsx)(mr.AM.FocusManager, {
                    children: (0, t.jsx)(ne.az, {
                      border: "1",
                      borderColor: "blue-7",
                      background: "greyneutral-4",
                      elevation: "1",
                      padding: "1",
                      children: (0, t.jsx)(ae.q, {
                        children: (0, t.jsxs)(A.s, {
                          direction: "column",
                          children: [
                            (0, t.jsx)(hi, {
                              type: ss.RI.$m,
                              currentType: u,
                              select: h,
                            }),
                            (0, t.jsx)(hi, {
                              type: ss.RI.yK,
                              currentType: u,
                              select: h,
                            }),
                            (0, t.jsx)(hi, {
                              type: !1,
                              currentType: u,
                              select: h,
                            }),
                          ],
                        }),
                      }),
                    }),
                  }),
                }),
              ],
            }),
          });
        }
        function vp(s) {
          switch (s) {
            default:
            case !1:
              return "#ignore_reason_none_header";
            case ss.RI.$m:
              return "#ignore_reason_generic_header";
            case ss.RI.yK:
              return "#ignore_reason_otherstore_header";
          }
        }
        function jp(s) {
          switch (s) {
            default:
            case !1:
              return "#ignore_reason_none_desc";
            case ss.RI.$m:
              return "#ignore_reason_generic_desc";
            case ss.RI.yK:
              return "#ignore_reason_otherstore_desc";
          }
        }
        function hi(s) {
          const { type: e, currentType: n, select: r } = s;
          return (0, t.jsx)(S.Z, {
            focusable: !0,
            onActivate: () => r(e),
            autoFocus: n == ss.RI.$m,
            children: (0, t.jsxs)(A.s, {
              direction: "row",
              padding: "2",
              maxWidth: "275px",
              gap: "2",
              children: [
                (0, t.jsx)(ne.az, {
                  minWidth: "16px",
                  maxWidth: "16px",
                  children:
                    e === n &&
                    (0, t.jsx)(x.EY, { children: (0, t.jsx)(Ae.MGO, {}) }),
                }),
                (0, t.jsxs)(A.s, {
                  direction: "column",
                  gap: "1",
                  children: [
                    (0, t.jsx)(x.EY, {
                      color: "greyneutral-12",
                      weight: "heavy",
                      children: g.Localize(vp(e)),
                    }),
                    (0, t.jsx)(x.EY, {
                      color: "greyneutral-11",
                      children: g.Localize(jp(e)),
                    }),
                  ],
                }),
              ],
            }),
          });
        }
        function bp(s) {
          const { appid: e } = s,
            [n, r] = m.useState(!1),
            a = (0, ln.LH)(),
            o = (0, t.jsxs)(A.s, {
              direction: "row",
              align: "center",
              gap: "1",
              children: [
                (0, t.jsx)(ne.az, {
                  width: "20px",
                  marginRight: "1",
                  children: (0, t.jsx)(N.T4m, {}),
                }),
                g.Localize("#button_wishlist"),
              ],
            }),
            c = (0, t.jsxs)(A.s, {
              direction: "row",
              align: "center",
              gap: "1",
              children: [
                (0, t.jsx)(ne.az, {
                  width: "20px",
                  marginRight: "1",
                  children: (0, t.jsx)(N.qnF, {}),
                }),
                g.Localize("#button_wishlist_undo"),
              ],
            });
          return (0, t.jsx)(ne.az, {
            children: (0, t.jsxs)(S.Z, {
              onSecondaryButton: () => r(!0),
              onSecondaryActionDescription: g.Localize(
                "#wishlist_manage_categories",
              ),
              children: [
                (0, t.jsx)(qr, {
                  appid: e,
                  bAllowRemove: !0,
                  width: "100%",
                  children: (d) =>
                    (0, t.jsx)(pi, { options: [o, c], children: d ? c : o }),
                }),
                n &&
                  (0, t.jsx)(fa, {
                    appid: e,
                    steamid: a,
                    onClose: () => r(!1),
                  }),
              ],
            }),
          });
        }
        var Bp = i(60993),
          gr = i.n(Bp),
          pr = i(21079),
          Pp = i(20125),
          Ep = i(9094),
          co = i(74679),
          Ip = i(20117);
        function Rs(s, e) {
          return (s || []).map((n) => ({
            accountid: Ip.b2.ToAccountID(n.steamid),
            nMinutesPlayedRecent: n.minutes_played || 0,
            nMinutesPlayedForever: n.minutes_played_forever || 0,
            bInGame: e,
          }));
        }
        function uo(s) {
          return Rs(s.in_wishlist, !1);
        }
        function mo(s, e) {
          const n = Rs(s.in_game, !0).concat(
            Rs(s.played_recently, !1),
            Rs(s.played_ever, !1),
            Rs(s.owns, !1),
          );
          return e ? n.filter((r) => r.nMinutesPlayedForever > 0) : n;
        }
        function Tp(s) {
          const { data: e } = (0, E.J$)({ appid: s }),
            { data: n } = (0, ui.Nd)(s);
          return m.useMemo(
            () =>
              !e || !n
                ? null
                : {
                    rgFriendsThatOwn: mo(n, !!e.is_free),
                    rgFriendsThatWant: uo(n),
                  },
            [e, n],
          );
        }
        var Sp = i(35675),
          ws = i(60001);
        async function Mp(s, e) {
          const n = (0, Pp.Am)(F.TS.STORE_BASE_URL, e, F.iA.country_code),
            o = (await (await fetch(n)).json()).rgCurations[s] || {};
          return Object.entries(o).map((c) => ({
            clan_accountid: Number(c[0]),
            recommendation: c[1],
          }));
        }
        function Lp(s) {
          return (0, cn.I)({
            queryKey: ["UserCurations" + F.iA.accountid],
            queryFn: async () => Mp(s, F.iA.accountid),
            enabled: !!F.iA.accountid,
          });
        }
        function Ap(s) {
          const { data: e } = (0, E.J$)({ appid: s }),
            { data: n } = (0, E.wl)({ appid: s }),
            { data: r } = (0, E.xz)({ appid: s }),
            { data: a } = (0, E.ik)({ appid: s }),
            { data: o } = (0, E.Zx)({ appid: s }),
            { data: c } = (0, pr.Dk)(s),
            { data: d } = (0, co.yt)(),
            { data: u } = (0, pr.zo)(s),
            { data: p } = (0, pr.Mu)(),
            { data: h } = (0, ui.Nd)(s),
            { data: f } = (0, gs.lI)(),
            { data: y } = (0, Ep.nU)(F.iA.steamid),
            { data: j } = (0, Sp.Gw)(),
            { data: B } = Lp(s);
          return m.useMemo(() => {
            if (
              !e ||
              !n ||
              !r ||
              !a ||
              !o ||
              !c ||
              !d ||
              !u ||
              !p ||
              !h ||
              !f ||
              !y ||
              !j ||
              !B
            )
              return null;
            const P = { appid: s };
            (P.nCurrentUserPlaytimeMins =
              h.your_info?.minutes_played_forever || 0),
              (P.bCurrentUserOwns = !!h.your_info?.owned),
              (P.bFromInteractiveRecommender = u.bRecommendedByIR),
              P.bCurrentUserOwns ||
                ((P.rgSimilarApps = u.arrSimilarPlayedApps || []),
                P.rgSimilarApps?.length == 0 &&
                  (P.rgMatchingTagsPlayed =
                    d.filter((W) => r?.find((xe) => xe.tagid == W.tagid)) ||
                    []));
            let O =
              (f.preferences?.review_score_preference == Jn.Wf.Yy &&
                a.summary_unfiltered) ||
              a.summary_filtered;
            const M = O?.review_score || w.j6.sZ;
            if (
              ((P.bPositiveReviews = M > w.j6.lo),
              (P.bNegativeReviews = M > w.j6.sZ && M < w.j6.hc),
              (P.eReviewScore = M),
              (P.strReviewScoreLabel = O?.review_score_label),
              e.type != w.uE.Hk && e.type != w.uE.Ov)
            ) {
              const W = (0, gs.ae)(f);
              P.bUserLanguageSupported = !!o.find((xe) => xe.elanguage == W);
            } else P.bUserLanguageSupported = !0;
            const R = p.GetItems().findIndex((W) => W.GetAppID() == s);
            R != -1 && (R < 25 ? (P.bTopSeller = !0) : (P.bPopular = !0));
            const G = !!y.items.find((W) => W.appid == s);
            return (
              (P.bWishlisted = G),
              (P.rgExcludedTags =
                f.tag_preferences?.tags_to_exclude?.filter((W) =>
                  r?.find((xe) => xe.tagid == W.tagid),
                ) || []),
              (P.rgPublishersFollowed = n.publishers?.filter(
                (W) =>
                  W.creator_clan_account_id &&
                  j?.get(W.creator_clan_account_id)?.is_creator,
              )),
              (P.rgDevelopersFollowed = n.developers?.filter(
                (W) =>
                  W.creator_clan_account_id &&
                  j?.get(W.creator_clan_account_id)?.is_creator,
              )),
              (P.rgFranchisesFollowed = n.franchises?.filter(
                (W) =>
                  W.creator_clan_account_id &&
                  j?.get(W.creator_clan_account_id)?.is_creator,
              )),
              (P.rgPublishersFollowed = P.rgPublishersFollowed?.filter(
                (W) =>
                  !P.rgDevelopersFollowed?.find(
                    (xe) =>
                      xe.creator_clan_account_id == W.creator_clan_account_id,
                  ),
              )),
              (P.rgCuratorsPositive = B.filter(
                (W) => W.recommendation == ws.tV.$D,
              ).map((W) => W.clan_accountid)),
              (P.rgCuratorsNegative = B.filter(
                (W) => W.recommendation == ws.tV.qP,
              ).map((W) => W.clan_accountid)),
              (P.rgFriendsRecommended = c.accountids_recommended || []),
              (P.rgFriendsDisrecommended = c.accountids_not_recommended || []),
              (P.rgFriendsWishlisted = uo(h).map((W) => W.accountid)),
              (P.rgFriendsOwned = mo(h, !!e.is_free).map((W) => W.accountid)),
              P
            );
          }, [s, n, B, j, h, c, p, e, r, d, a, f, u, o, y]);
        }
        var Op = i(13290),
          Yn = i.n(Op),
          pn = ((s) => (
            (s[(s.Info = 0)] = "Info"),
            (s[(s.Positive = 1)] = "Positive"),
            (s[(s.Negative = 2)] = "Negative"),
            s
          ))(pn || {});
        function ps(s) {
          const { type: e, description: n, children: r } = s;
          let a = (0, t.jsx)(Ae.$$j, {});
          return (
            e == 1
              ? (a = (0, t.jsx)(Ae.MGO, { className: Yn().Positive }))
              : e == 2 && (a = (0, t.jsx)(N.tmm, { className: Yn().Negative })),
            (0, t.jsxs)("div", {
              className: Yn().Reason,
              children: [
                (0, t.jsxs)("div", {
                  className: Yn().TopLine,
                  children: [
                    (0, t.jsx)("div", { className: Yn().Icon, children: a }),
                    (0, t.jsx)("div", {
                      className: Yn().Description,
                      children: n,
                    }),
                  ],
                }),
                r &&
                  (0, t.jsx)("div", {
                    className: Yn().Additional,
                    children: r,
                  }),
                (0, t.jsx)("div", { className: Yn().Divider }),
              ],
            })
          );
        }
        function fi(s) {
          const { description: e, children: n } = s;
          return (0, t.jsx)(ps, { type: 0, description: e, children: n });
        }
        function Us(s) {
          const { description: e, children: n } = s;
          return (0, t.jsx)(ps, { type: 1, description: e, children: n });
        }
        function go(s) {
          const { description: e, children: n } = s;
          return (0, t.jsx)(ps, { type: 2, description: e, children: n });
        }
        var zp = i(2699),
          Np = i.n(zp);
        function po(s) {
          const { children: e } = s;
          return (0, t.jsx)(S.Z, { className: Np().AvatarList, children: e });
        }
        var yi = i(30986),
          Dp = i(77614),
          hr = i.n(Dp);
        function ho(s) {
          const e = (0, ln.LH)(),
            { data: n } = (0, Fs.jn)(e);
          return (0, Ds.n)(n, e) + `/friendsthatplay/${s}`;
        }
        function fo(s) {
          const { accountid: e, reviewAppId: n, bShowName: r, friend: a } = s,
            o = (0, Fs.jn)(e);
          if (!o.data || !o.data.public_data) return null;
          const c =
              n && o.data ? `${(0, Ds.n)(o.data)}/recommended/${n}` : void 0,
            d = o.data.public_data.persona_name;
          return (0, t.jsxs)(T.Ii, {
            className: hr().FriendAvatarLink,
            href: c || (0, Ds.n)(o.data),
            "data-miniprofile": e,
            children: [
              (0, t.jsx)(yi.wm, { playerLinkDetails: o.data, alt: d }),
              r &&
                d &&
                (0, t.jsxs)("div", {
                  className: hr().Details,
                  children: [
                    (0, t.jsx)("div", { className: hr().Name, children: d }),
                    a && (0, t.jsx)(Fp, { friend: a }),
                  ],
                }),
            ],
          });
        }
        function Fp(s) {
          const { friend: e } = s;
          let n;
          return (
            e.bInGame
              ? (n = g.Localize("#AppPage_FriendOwnership_NowPlaying"))
              : e.nMinutesPlayedRecent > 0 &&
                (n = g.Localize(
                  "#AppPage_FriendOwnership_PlayedHours",
                  lr(e.nMinutesPlayedRecent, !0),
                )),
            n
              ? (0, t.jsx)("div", { className: hr().Playtime, children: n })
              : null
          );
        }
        function Wp(s) {
          const { accountid: e, appid: n, bLinkToReview: r } = s;
          return (0, t.jsx)(fo, { accountid: e, reviewAppId: r ? n : void 0 });
        }
        function Rp(s) {
          const { rgFriends: e, appid: n, bLinkToReview: r } = s;
          return (0, t.jsx)(po, {
            children: e.map((a) =>
              (0, t.jsx)(Wp, { accountid: a, appid: n, bLinkToReview: r }, a),
            ),
          });
        }
        function fr(s) {
          const {
              type: e,
              appid: n,
              strLocTag: r,
              rgFriends: a,
              nMax: o = 5,
              bLinkToReview: c,
            } = s,
            d = ho(n);
          if (!a || a.length == 0) return null;
          let u = (0, ge.xh)(
            g.LocalizePlural(r, a.length),
            (0, t.jsx)(T.Ii, { href: d }),
          );
          return (0, t.jsx)(ps, {
            type: e,
            description: u,
            children: (0, t.jsx)(Rp, {
              rgFriends: a.slice(0, o),
              appid: n,
              bLinkToReview: c,
            }),
          });
        }
        var wp = i(55483);
        function Up(s) {
          const { url: e, avatarUrl: n, alt: r } = s;
          return (0, t.jsx)(Qn.he, {
            toolTipContent: r,
            children: (0, t.jsx)(T.Ii, {
              href: e,
              children: (0, t.jsx)(yi.Ul, { avatarURL: n, alt: r }),
            }),
          });
        }
        function Cp(s) {
          const { accountid: e, appid: n, fnURLGenerator: r } = s,
            a = (0, wp.TB)(e);
          if (!a.data) return null;
          const o = r(a.data, n);
          return (0, t.jsx)(Up, {
            url: o,
            avatarUrl: a.data.avatar_full_url,
            alt: a.data.group_name,
          });
        }
        function Kp(s) {
          const { rgCurators: e, appid: n, fnURLGenerator: r } = s;
          return (0, t.jsx)(po, {
            children: e.map((a) =>
              (0, t.jsx)(Cp, { accountid: a, appid: n, fnURLGenerator: r }, a),
            ),
          });
        }
        function xi(s) {
          const {
              type: e,
              fnURLGenerator: n,
              appid: r,
              strLocTag: a,
              rgCurators: o,
              nMax: c = 6,
            } = s,
            d = (0, wt.aL)(
              F.TS.STORE_BASE_URL + `curators/mycuratorsreviewing/?appid=${r}`,
            );
          if (!o || o.length == 0) return null;
          let u = (0, ge.xh)(g.Localize(a), (0, t.jsx)(T.Ii, { href: d }));
          return (0, t.jsx)(ps, {
            type: e,
            description: u,
            children: (0, t.jsx)(Kp, {
              rgCurators: o.slice(0, c),
              appid: r,
              fnURLGenerator: n,
            }),
          });
        }
        var Gp = i(57102),
          yo = i.n(Gp);
        function Yp(s) {
          const { tag: e } = s;
          return (0, t.jsx)(T.Ii, {
            className: yo().Tag,
            href: `${F.TS.STORE_BASE_URL}tags/${(0, Z.wwZ)((0, Z.sfN)(F.TS.LANGUAGE))}/${e.name}`,
            children: e.name,
          });
        }
        function xo(s) {
          const { rgTags: e } = s;
          return e.length == 0
            ? null
            : (0, t.jsx)("div", {
                className: yo().TagList,
                children: e.map((n) => (0, t.jsx)(Yp, { tag: n }, n.tagid)),
              });
        }
        var kp = i(54629),
          yr = i.n(kp),
          Vp = i(80702);
        function Qp(s) {
          const { appid: e } = s,
            { data: n } = (0, E.J$)({ appid: e }),
            { data: r } = (0, E.lv)({ appid: e });
          if (!n || !r) return null;
          const a = (0, Ps.b0)(r, "community_icon");
          return (0, t.jsx)(Vp.Q, {
            id: { appid: e },
            bPreventNavigation: !0,
            hoverProps: {
              direction: "overlay",
              nBodyAlignment: 1,
              style: { minWidth: "320px", zIndex: 5e3 },
            },
            children: (0, t.jsxs)(Un.p, {
              className: yr().AppIconAndName,
              storeItem: n,
              children: [
                (0, t.jsx)("div", {
                  className: yr().AppIcon,
                  children: a && (0, t.jsx)("img", { src: a, alt: "" }),
                }),
                (0, t.jsx)("div", {
                  className: yr().AppName,
                  children: n.name,
                }),
              ],
            }),
          });
        }
        function $p(s) {
          const { rgApps: e } = s;
          return e.length == 0
            ? null
            : (0, t.jsx)("div", {
                className: yr().AppList,
                children: e.map((n) =>
                  (0, t.jsx)(Qp, { appid: n.appid }, n.appid),
                ),
              });
        }
        function Jp(s) {
          const { appid: e, friendsRecommended: n, recommendedTags: r } = s,
            [a, o] = m.useState(!1),
            c = (0, pr.ws)(),
            d = (0, co.Fx)();
          return (
            m.useEffect(() => {
              c(e, n), d(r), o(!0);
            }, [e, n, r, c, d]),
            m.use(g.Ready()),
            m.use($.Z.Ready()),
            a
              ? (0, t.jsx)(m.Suspense, {
                  children: (0, t.jsx)(Xp, { appid: e }),
                })
              : null
          );
        }
        function vo(s, e) {
          const { data: n } = (0, E.J$)({ appid: e.appid });
          return g.GetAppTypePluralLocKey(s, n?.type || w.uE.HT);
        }
        function Zp(s, e) {
          const { data: n } = (0, E.J$)({ appid: e.appid });
          return g.GetAppTypeLocKey(s, n?.type || w.uE.HT);
        }
        function vi(s, e) {
          const n = Zp(s, e);
          return g.Localize(n);
        }
        function Xp(s) {
          const { appid: e } = s,
            n = Ap(e);
          return n
            ? (0, t.jsxs)(Wt.YZ, {
                className: gr().RecommendationReasonsDisplay,
                navEntryPreferPosition: V.iU.PREFERRED_CHILD,
                children: [
                  (0, t.jsx)(Hp, { reasons: n }),
                  (0, t.jsx)(qp, { reasons: n }),
                  (0, t.jsx)(t0, { reasons: n }),
                  (0, t.jsx)(n0, { reasons: n }),
                  (0, t.jsx)(s0, { reasons: n }),
                  (0, t.jsx)(i0, { reasons: n }),
                  (0, t.jsx)(r0, { reasons: n }),
                  (0, t.jsx)(a0, { reasons: n }),
                  (0, t.jsx)(o0, { reasons: n }),
                  (0, t.jsx)(u0, { reasons: n }),
                  (0, t.jsx)(m0, { reasons: n }),
                  (0, t.jsx)(g0, { reasons: n }),
                  (0, t.jsx)(p0, { reasons: n }),
                  (0, t.jsx)(h0, { reasons: n }),
                  (0, t.jsx)(f0, { reasons: n }),
                  (0, t.jsx)(y0, { reasons: n }),
                  (0, t.jsx)(x0, { reasons: n }),
                  (0, t.jsx)(v0, { reasons: n }),
                ],
              })
            : null;
        }
        function Hp(s) {
          const { reasons: e } = s,
            n = vi("#AppPage_RecommendationReason_Header", e);
          return (0, t.jsx)(dr, { text: n });
        }
        function qp(s) {
          const { reasons: e } = s;
          if (e.nCurrentUserPlaytimeMins > 0) {
            const n = lr(e.nCurrentUserPlaytimeMins);
            return (0, t.jsx)(fi, {
              description: g.Localize(
                "#AppPage_RecommendationReason_Playtime",
                n,
              ),
            });
          } else if (e.bCurrentUserOwns)
            return (0, t.jsx)(fi, {
              description: g.Localize(
                "#AppPage_RecommendationReason_InLibrary",
              ),
            });
          return null;
        }
        function _p(s) {
          const { reasons: e } = s,
            n = vi("#AppPage_RecommendationReason_MatchingApps", e);
          return (0, t.jsx)(Us, {
            description: n,
            children: (0, t.jsx)($p, { rgApps: e.rgSimilarApps }),
          });
        }
        function e0(s) {
          const { reasons: e } = s,
            n = vi("#AppPage_RecommendationReason_MatchingTags", e);
          return (0, t.jsx)(Us, {
            description: n,
            children: (0, t.jsx)(xo, { rgTags: e.rgMatchingTagsPlayed }),
          });
        }
        function t0(s) {
          const { reasons: e } = s;
          return e.rgSimilarApps && e.rgSimilarApps.length > 0
            ? (0, t.jsx)(_p, { reasons: e })
            : e.rgMatchingTagsPlayed && e.rgMatchingTagsPlayed.length > 0
              ? (0, t.jsx)(e0, { reasons: e })
              : null;
        }
        function n0(s) {
          const { reasons: e } = s;
          return e.bFromInteractiveRecommender
            ? (0, t.jsx)(Us, {
                description: g.Localize(
                  "#AppPage_RecommendationReason_FromInteractiveRecommender",
                ),
              })
            : null;
        }
        function s0(s) {
          const { reasons: e } = s;
          return e.bPositiveReviews || e.bNegativeReviews
            ? (0, t.jsx)(ps, {
                type: e.bPositiveReviews ? pn.Positive : pn.Negative,
                description: (0, ge.xh)(
                  g.Localize(
                    "#AppPage_RecommendationReason_UserReviews",
                    e.strReviewScoreLabel,
                  ),
                  (0, t.jsx)("span", {
                    className: (0, D.A)(
                      gr().ReviewScore,
                      e.bPositiveReviews ? gr().Positive : gr().Negative,
                    ),
                  }),
                ),
              })
            : null;
        }
        function r0(s) {
          const { reasons: e } = s;
          return !e.bTopSeller && !e.bPopular
            ? null
            : (0, t.jsx)(Us, {
                description: g.Localize(
                  e.bTopSeller
                    ? "#AppPage_RecommendationReason_TopSeller"
                    : "#AppPage_RecommendationReason_Popular",
                ),
              });
        }
        function i0(s) {
          const { reasons: e } = s;
          return e.bUserLanguageSupported
            ? null
            : (0, t.jsx)(go, {
                description: (0, ge.xh)(
                  g.Localize(
                    "#AppPage_RecommendationReason_LanguageUnsupported",
                  ),
                  (0, t.jsx)(T.Ii, {
                    href: `${F.TS.STORE_BASE_URL}account/languagepreferences/`,
                  }),
                ),
              });
        }
        function a0(s) {
          const { reasons: e } = s,
            n = (0, wt.aL)(F.TS.STORE_BASE_URL + "wishlist");
          return e.bWishlisted
            ? (0, t.jsx)(Us, {
                description: (0, ge.xh)(
                  g.Localize("#AppPage_RecommendationReason_Wishlisted"),
                  (0, t.jsx)(T.Ii, { href: n }),
                ),
              })
            : null;
        }
        function o0(s) {
          const { reasons: e } = s;
          return !e.rgExcludedTags || e.rgExcludedTags.length == 0
            ? null
            : (0, t.jsx)(go, {
                description: (0, ge.xh)(
                  g.Localize("#AppPage_RecommendationReason_ExcludedTags"),
                  (0, t.jsx)(T.Ii, {
                    href: `${F.TS.STORE_BASE_URL}account/preferences`,
                  }),
                ),
                children: (0, t.jsx)(xo, { rgTags: e.rgExcludedTags }),
              });
        }
        function l0(s, e) {
          return s.vanity_url
            ? `${F.TS.STORE_BASE_URL}${e}/${s.vanity_url}`
            : `${F.TS.STORE_BASE_URL}curator/${s.clanAccountID}`;
        }
        function c0(s, e, n) {
          return `${l0(s, e)}?appid=${n}`;
        }
        function d0(s) {
          return s.vanity_url
            ? `${F.TS.COMMUNITY_BASE_URL}groups/${s.vanity_url}`
            : `${F.TS.COMMUNITY_BASE_URL}gid/${s.clanSteamID?.ConvertTo64BitString()}`;
        }
        function jo(s, e) {
          return `${d0(s)}/curation/app/${e}`;
        }
        function ji(s) {
          const { reasons: e, type: n, strLocTag: r, rgCreators: a } = s;
          if (!a || a.length == 0) return null;
          const o = (c, d) => c0(c, n, d);
          return (0, t.jsx)(xi, {
            appid: e.appid,
            type: pn.Positive,
            fnURLGenerator: o,
            strLocTag: r,
            rgCurators: a.map((c) => c.creator_clan_account_id),
          });
        }
        function u0(s) {
          const { reasons: e } = s;
          return (0, t.jsx)(ji, {
            reasons: e,
            type: "developer",
            strLocTag: "#AppPage_RecommendationReason_FollowedDeveloper",
            rgCreators: e?.rgDevelopersFollowed,
          });
        }
        function m0(s) {
          const { reasons: e } = s;
          return (0, t.jsx)(ji, {
            reasons: e,
            type: "publisher",
            strLocTag: "#AppPage_RecommendationReason_FollowedPublisher",
            rgCreators: e?.rgPublishersFollowed,
          });
        }
        function g0(s) {
          const { reasons: e } = s;
          return (0, t.jsx)(ji, {
            reasons: e,
            type: "franchise",
            strLocTag: "#AppPage_RecommendationReason_FollowedFranchise",
            rgCreators: e?.rgFranchisesFollowed,
          });
        }
        function p0(s) {
          const { reasons: e } = s;
          return (0, t.jsx)(xi, {
            appid: e.appid,
            type: pn.Positive,
            fnURLGenerator: jo,
            strLocTag: "#AppPage_RecommendationReason_CuratorRecommended",
            rgCurators: e.rgCuratorsPositive,
          });
        }
        function h0(s) {
          const { reasons: e } = s;
          return (0, t.jsx)(xi, {
            appid: e.appid,
            type: pn.Negative,
            fnURLGenerator: jo,
            strLocTag: "#AppPage_RecommendationReason_CuratorDisrecommended",
            rgCurators: e.rgCuratorsNegative,
          });
        }
        function f0(s) {
          const { reasons: e } = s;
          return (0, t.jsx)(fr, {
            appid: e.appid,
            type: pn.Positive,
            strLocTag: "#AppPage_RecommendationReason_FriendsRecommended",
            rgFriends: e.rgFriendsRecommended,
            bLinkToReview: !0,
          });
        }
        function y0(s) {
          const { reasons: e } = s;
          return (0, t.jsx)(fr, {
            appid: e.appid,
            type: pn.Negative,
            strLocTag: "#AppPage_RecommendationReason_FriendsDisrecommended",
            rgFriends: e.rgFriendsDisrecommended,
            bLinkToReview: !0,
          });
        }
        function x0(s) {
          const { reasons: e } = s,
            n = vo("#AppPage_RecommendationReason_FriendsWishlisted", e);
          return (0, t.jsx)(fr, {
            appid: e.appid,
            type: pn.Info,
            strLocTag: n,
            rgFriends: e.rgFriendsWishlisted,
          });
        }
        function v0(s) {
          const { reasons: e } = s,
            n = vo("#AppPage_RecommendationReason_FriendsOwned", e);
          return (0, t.jsx)(fr, {
            appid: e.appid,
            type: pn.Info,
            strLocTag: n,
            rgFriends: e.rgFriendsOwned,
          });
        }
        var j0 = i(16836),
          bi = i.n(j0);
        const b0 = 6,
          B0 = 2;
        function P0(s) {
          const { appid: e, bCanShowOwners: n } = s,
            r = Tp(e),
            { data: a } = (0, E.J$)({ appid: e }),
            o = r?.rgFriendsThatWant || [],
            c = n ? r?.rgFriendsThatOwn || [] : [];
          if (o.length == 0 && c.length == 0) return null;
          m.use(g.Ready());
          const d = a?.type || w.uE.HT;
          return (0, t.jsxs)(Wt.YZ, {
            className: bi().FriendOwnership,
            "flow-children": "column",
            children: [
              o.length > 0 &&
                (0, t.jsx)(bo, {
                  appid: e,
                  strLocTag: g.GetAppTypePluralLocKey(
                    "#AppPage_RecommendationReason_FriendsWishlisted",
                    d,
                  ),
                  rgFriends: o,
                  bShowNames: o.length <= B0,
                  bShowPlaytime: !1,
                }),
              c.length > 0 &&
                (0, t.jsx)(bo, {
                  appid: e,
                  strLocTag: g.GetAppTypePluralLocKey(
                    "#AppPage_RecommendationReason_FriendsOwned",
                    d,
                  ),
                  rgFriends: c,
                  bShowNames: !0,
                  bShowPlaytime: !0,
                }),
            ],
          });
        }
        function bo(s) {
          const {
              appid: e,
              strLocTag: n,
              rgFriends: r,
              bShowNames: a,
              bShowPlaytime: o,
            } = s,
            c = ho(e),
            d = (0, ge.xh)(
              g.LocalizePlural(n, r.length),
              (0, t.jsx)(T.Ii, { href: c }),
            );
          return (0, t.jsx)(fi, {
            description: d,
            children: (0, t.jsx)(S.Z, {
              className: (0, D.A)(bi().FriendList, a && bi().WithNames),
              "flow-children": a ? "grid" : "row",
              children: r
                .slice(0, b0)
                .map((u) =>
                  (0, t.jsx)(
                    fo,
                    {
                      accountid: u.accountid,
                      bShowName: a,
                      friend: o ? u : void 0,
                    },
                    u.accountid,
                  ),
                ),
            }),
          });
        }
        var E0 = i(35413),
          I0 = i(78747),
          Ot = i.n(I0);
        function xr(s) {
          if (!s || !/^https?:/.test(s)) return;
          if (!(0, er.p)(s)) return s;
          const e = (0, er.E)(s);
          return U.TS.IN_CLIENT ? "steam://openurl_external/" + e : e;
        }
        function T0(s) {
          const { curator: e, recommendation: n } = s,
            r = Io(n.link_url),
            a = xr(n.link_url),
            o = !!r?.iframe || !!r?.image;
          return (0, t.jsxs)("div", {
            className: Ot().Container,
            children: [
              (0, t.jsx)("h2", {
                children: g.Localize("#AppPage_Curator_Title"),
              }),
              (0, t.jsxs)(Wt.YZ, {
                "flow-children": "row",
                className: Ot().Review,
                children: [
                  o &&
                    (0, t.jsxs)(A.s, {
                      direction: "column",
                      className: Ot().Video,
                      gap: "1",
                      align: "center",
                      children: [
                        r.iframe &&
                          (0, t.jsx)("iframe", {
                            src: r.iframe,
                            frameBorder: "0",
                            allowFullScreen: !0,
                            title: "referring_curator_video_embed",
                          }),
                        r.image &&
                          (0, t.jsxs)(T.Ii, {
                            href: a,
                            className: Ot().VideoThumbnail,
                            children: [
                              (0, t.jsx)("img", {
                                src: r.image,
                                alt: g.Localize(
                                  "#AppPage_Curator_VideoThumbnail",
                                ),
                              }),
                              (0, t.jsx)("div", {
                                className: Ot().PlayOverlay,
                                children: (0, t.jsx)(Ae.jGG, {}),
                              }),
                            ],
                          }),
                        (0, t.jsx)(Bo, { ...s }),
                      ],
                    }),
                  (0, t.jsx)("div", {
                    className: (0, D.A)(Ot().DetailRight, !o && Ot().NoVideo),
                    children: (0, t.jsx)("div", {
                      className: Ot().Blurb,
                      children: (0, t.jsxs)(A.s, {
                        direction: "column",
                        gap: "1",
                        children: [
                          (0, t.jsxs)(A.s, {
                            direction: "row",
                            gap: "1",
                            children: [
                              (0, t.jsx)("div", {
                                className: Ot().Avatar,
                                children: (0, t.jsx)("img", {
                                  src: (0, E0.t)(e.avatar_sha, "full"),
                                  alt: "",
                                }),
                              }),
                              (0, t.jsxs)(A.s, {
                                direction: "column",
                                flexGrow: "1",
                                children: [
                                  (0, t.jsx)(S0, {
                                    state: n.recommendation_state,
                                  }),
                                  (0, t.jsx)(x.EY, {
                                    size: "2",
                                    color: "greyneutral-11",
                                    children: (0, t.jsxs)(A.s, {
                                      direction: "row",
                                      gap: "1",
                                      children: [
                                        (0, ge.xh)(
                                          g.Localize(
                                            "#AppPage_Curator_By",
                                            e.name,
                                          ),
                                          (0, t.jsx)(T.Ii, { href: e.link }),
                                        ),
                                        (0, Lt.$z)(n.time_recommended, {
                                          month: "long",
                                        }),
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                              (0, t.jsxs)(A.s, {
                                direction: "row",
                                children: [
                                  !!n.received_for_free &&
                                    (0, t.jsx)(Po, {
                                      strToolTip: g.Localize(
                                        "#AppPage_Curator_ReceivedForFree",
                                      ),
                                      strIcon: "icon_free.png",
                                    }),
                                  !!n.received_compensation &&
                                    (0, t.jsx)(Po, {
                                      strToolTip: g.Localize(
                                        "#AppPage_Curator_ReceivedCompensation",
                                      ),
                                      strIcon: "icon_compensation.png",
                                    }),
                                ],
                              }),
                            ],
                          }),
                          (0, t.jsx)(M0, { strBlurb: n.blurb }),
                          !o &&
                            (0, t.jsx)(A.s, {
                              direction: "row",
                              children: (0, t.jsx)(Bo, { ...s }),
                            }),
                        ],
                      }),
                    }),
                  }),
                ],
              }),
            ],
          });
        }
        function Bo(s) {
          const { recommendation: e, curator_preferences: n } = s,
            r = Io(e.link_url),
            a = xr(e.link_url),
            o = xr(n?.discussion_url),
            c = !!r?.iframe || !!r?.image;
          return (0, t.jsxs)(t.Fragment, {
            children: [
              a &&
                (0, t.jsx)(Eo, {
                  strURL: a,
                  bPlayIcon: c,
                  strText: g.Localize(
                    c
                      ? "#AppPage_Curator_WatchFullReview"
                      : "#AppPage_Curator_ReadFullReview",
                  ),
                }),
              o &&
                (0, t.jsx)(Eo, {
                  strURL: o,
                  strText: g.Localize("#AppPage_Curator_Discuss"),
                }),
            ],
          });
        }
        function Po(s) {
          const { strToolTip: e, strIcon: n } = s;
          return (0, t.jsx)(Qn.he, {
            toolTipContent: e,
            children: (0, t.jsx)("div", {
              className: Ot().CuratorReceived,
              children: (0, t.jsx)("img", {
                src: `${U.TS.IMG_URL}/curators/${n}`,
                alt: "",
              }),
            }),
          });
        }
        function S0(s) {
          switch (s.state) {
            case ws.tV.$D:
              return (0, t.jsx)("span", {
                className: (0, D.A)(Ot().ReviewTitle, Ot().Recommended),
                children: g.Localize("#AppPage_Curator_Recommended"),
              });
            case ws.tV.qP:
              return (0, t.jsx)("span", {
                className: (0, D.A)(Ot().ReviewTitle, Ot().NotRecommended),
                children: g.Localize("#AppPage_Curator_NotRecommended"),
              });
            case ws.tV.y8:
              return (0, t.jsx)("span", {
                className: (0, D.A)(Ot().ReviewTitle, Ot().Informational),
                children: g.Localize("#AppPage_Curator_Informational"),
              });
            default:
              return null;
          }
        }
        function M0(s) {
          const e = (s.strBlurb ?? "").split(`
`);
          return e.length == 0
            ? null
            : ((e[0] = g.Localize("#AppPage_Curator_QuoteLeft") + e[0].trim()),
              (e[e.length - 1] =
                e[e.length - 1].trim() +
                g.Localize("#AppPage_Curator_QuoteRight")),
              (0, t.jsx)(x.EY, {
                className: Ot().BlurbText,
                children: e.map((n, r) =>
                  (0, t.jsx)("div", { children: n }, r),
                ),
              }));
        }
        function Eo(s) {
          const { strURL: e, strText: n, bPlayIcon: r } = s;
          return (0, t.jsx)(Qn.he, {
            toolTipContent: e,
            children: (0, t.jsx)(T.Ii, {
              className: (0, D.A)(
                "btnv6_blue_hoverfade",
                "btn_small_thin",
                Ot().ActionButton,
              ),
              href: e,
              target: "_blank",
              rel: "noopener noreferrer",
              children: (0, t.jsxs)("span", {
                children: [
                  r &&
                    (0, t.jsx)("span", {
                      className: Ot().PlayIcon,
                      children: (0, t.jsx)(Ae.jGG, {}),
                    }),
                  n,
                ],
              }),
            }),
          });
        }
        function Io(s) {
          if (!s) return;
          const e = [
            [
              /(?:youtube\.com|youtu\.be)\/(?:watch)?(?:\?v=)?([a-zA-Z0-9_-]+)/,
              { image: "https://img.youtube.com/vi/%s/mqdefault.jpg" },
            ],
            [
              /nicovideo\.jp\/watch\/([sm0-9]+)/,
              { iframe: "https://embed.nicovideo.jp/watch/%s" },
            ],
            [
              /escapistmagazine\.com\/videos\/view\/.+\/([0-9]+)/,
              { iframe: "https://www.escapistmagazine.com/videos/embed/%s" },
            ],
            [
              /youku\.com\/v_show\/id_([0-9A-z=]+)/,
              { iframe: "https://player.youku.com/embed/%s" },
            ],
            [
              /bilibili\.com\/video\/av([0-9]+)/,
              {
                iframe:
                  "https://www.bilibili.com/blackboard/player.html?aid=%s",
              },
            ],
          ];
          for (const [n, r] of e) {
            const a = s.match(n);
            if (a)
              return {
                iframe: r.iframe?.replace("%s", a[1]),
                image: r.image?.replace("%s", a[1]),
              };
          }
        }
        const fe = {};
        (fe.arabic = () => i.e(3143).then(i.t.bind(i, 3143, 19))),
          (fe.brazilian = () => i.e(38043).then(i.t.bind(i, 38043, 19))),
          (fe.bulgarian = () => i.e(60308).then(i.t.bind(i, 60308, 19))),
          (fe.czech = () => i.e(99922).then(i.t.bind(i, 99922, 19))),
          (fe.danish = () => i.e(32134).then(i.t.bind(i, 32134, 19))),
          (fe.dutch = () => i.e(47899).then(i.t.bind(i, 47899, 19))),
          (fe.english = () => i.e(31513).then(i.t.bind(i, 31513, 19))),
          (fe.finnish = () => i.e(86910).then(i.t.bind(i, 86910, 19))),
          (fe.french = () => i.e(67007).then(i.t.bind(i, 67007, 19))),
          (fe.german = () => i.e(84597).then(i.t.bind(i, 84597, 19))),
          (fe.greek = () => i.e(79169).then(i.t.bind(i, 79169, 19))),
          (fe.hungarian = () => i.e(28968).then(i.t.bind(i, 28968, 19))),
          (fe.indonesian = () => i.e(17427).then(i.t.bind(i, 17427, 19))),
          (fe.italian = () => i.e(65521).then(i.t.bind(i, 65521, 19))),
          (fe.japanese = () => i.e(49560).then(i.t.bind(i, 49560, 19))),
          (fe.koreana = () => i.e(68858).then(i.t.bind(i, 68858, 19))),
          (fe.latam = () => i.e(73682).then(i.t.bind(i, 73682, 19))),
          (fe.malay = () => i.e(20073).then(i.t.bind(i, 20073, 19))),
          (fe.norwegian = () => i.e(93341).then(i.t.bind(i, 93341, 19))),
          (fe.polish = () => i.e(48634).then(i.t.bind(i, 48634, 19))),
          (fe.portuguese = () => i.e(64794).then(i.t.bind(i, 64794, 19))),
          (fe.romanian = () => i.e(3380).then(i.t.bind(i, 3380, 19))),
          (fe.russian = () => i.e(37940).then(i.t.bind(i, 37940, 19))),
          (fe.sc_schinese = () => i.e(72910).then(i.t.bind(i, 72910, 19))),
          (fe.schinese = () => i.e(3431).then(i.t.bind(i, 3431, 19))),
          (fe.spanish = () => i.e(12737).then(i.t.bind(i, 12737, 19))),
          (fe.swedish = () => i.e(83504).then(i.t.bind(i, 61123, 19))),
          (fe.tchinese = () => i.e(25804).then(i.t.bind(i, 25804, 19))),
          (fe.thai = () => i.e(25401).then(i.t.bind(i, 25401, 19))),
          (fe.turkish = () => i.e(2593).then(i.t.bind(i, 2593, 19))),
          (fe.ukrainian = () => i.e(94219).then(i.t.bind(i, 94219, 19))),
          (fe.vietnamese = () => i.e(95784).then(i.t.bind(i, 95784, 19)));
        async function L0(s) {
          if (fe[s]) return fe[s]();
        }
        const Rt = (0, Sr.l)(L0);
        var A0 = i(66575),
          Xt = i.n(A0);
        const Qy = 0,
          To = 1,
          So = 2,
          O0 = 3,
          Mo = 4;
        var I = i(80613),
          v = i.n(I),
          l = i(75245);
        const $y = 0,
          z0 = 1,
          N0 = 2,
          D0 = 3,
          F0 = 4,
          W0 = 5,
          R0 = 6,
          w0 = 7,
          U0 = 8,
          C0 = 9,
          K0 = 10,
          G0 = 11,
          Y0 = 12,
          k0 = 13,
          V0 = 14,
          Q0 = 15,
          $0 = 16,
          J0 = 17,
          Z0 = 18,
          X0 = 19,
          Jy = 0,
          H0 = 1,
          q0 = 2,
          _0 = 3,
          eh = 4,
          th = 5,
          nh = 6,
          sh = 7,
          rh = 8,
          ih = 9;
        function Zy(s) {
          return "unknown ERatingAgency ( " + s + " )";
        }
        function Xy(s) {
          return "unknown EAppRatingSource ( " + s + " )";
        }
        function Hy(s) {
          return "unknown ERatingDescriptorImage ( " + s + " )";
        }
        class Re extends I.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Re.prototype.descriptors || l.Sg(Re.M()),
              I.Message.initialize(this, e, 0, -1, [1, 2, 6], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Re.sm_m ||
                (Re.sm_m = {
                  proto: Re,
                  fields: {
                    descriptors: {
                      n: 1,
                      r: !0,
                      q: !0,
                      br: l.qM.readString,
                      bw: l.gp.writeRepeatedString,
                    },
                    interactive_elements: {
                      n: 2,
                      r: !0,
                      q: !0,
                      br: l.qM.readString,
                      bw: l.gp.writeRepeatedString,
                    },
                    official_id: {
                      n: 3,
                      br: l.qM.readString,
                      bw: l.gp.writeString,
                    },
                    esrb_online_music_not_rated: {
                      n: 4,
                      br: l.qM.readBool,
                      bw: l.gp.writeBool,
                    },
                    esrb_online_interactions_not_rated: {
                      n: 5,
                      br: l.qM.readBool,
                      bw: l.gp.writeBool,
                    },
                    descriptor_images: {
                      n: 6,
                      r: !0,
                      q: !0,
                      br: l.qM.readEnum,
                      pbr: l.qM.readPackedEnum,
                      bw: l.gp.writeRepeatedEnum,
                    },
                  },
                }),
              Re.sm_m
            );
          }
          static MBF() {
            return Re.sm_mbf || (Re.sm_mbf = l.w0(Re.M())), Re.sm_mbf;
          }
          toObject(e = !1) {
            return Re.toObject(e, this);
          }
          static toObject(e, n) {
            return l.BT(Re.M(), e, n);
          }
          static fromObject(e) {
            return l.Uq(Re.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (v().BinaryReader)(e),
              r = new Re();
            return Re.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return l.zj(Re.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (v().BinaryWriter)();
            return Re.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            l.i0(Re.M(), e, n);
          }
          serializeBase64String() {
            var e = new (v().BinaryWriter)();
            return (
              Re.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "AppRatingAuxData";
          }
        }
        class we extends I.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              we.prototype.rating_agency || l.Sg(we.M()),
              I.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              we.sm_m ||
                (we.sm_m = {
                  proto: we,
                  fields: {
                    rating_agency: {
                      n: 1,
                      br: l.qM.readEnum,
                      bw: l.gp.writeEnum,
                    },
                    rating: { n: 2, br: l.qM.readString, bw: l.gp.writeString },
                    source: { n: 3, br: l.qM.readEnum, bw: l.gp.writeEnum },
                    banned: { n: 4, br: l.qM.readBool, bw: l.gp.writeBool },
                    required_age: {
                      n: 5,
                      br: l.qM.readUint32,
                      bw: l.gp.writeUint32,
                    },
                    use_age_gate: {
                      n: 6,
                      br: l.qM.readBool,
                      bw: l.gp.writeBool,
                    },
                    aux_data: { n: 7, c: Re },
                  },
                }),
              we.sm_m
            );
          }
          static MBF() {
            return we.sm_mbf || (we.sm_mbf = l.w0(we.M())), we.sm_mbf;
          }
          toObject(e = !1) {
            return we.toObject(e, this);
          }
          static toObject(e, n) {
            return l.BT(we.M(), e, n);
          }
          static fromObject(e) {
            return l.Uq(we.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (v().BinaryReader)(e),
              r = new we();
            return we.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return l.zj(we.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (v().BinaryWriter)();
            return we.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            l.i0(we.M(), e, n);
          }
          serializeBase64String() {
            var e = new (v().BinaryWriter)();
            return (
              we.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "AppRating";
          }
        }
        function qy(s) {
          return "unknown EContentSurveyMatureTag ( " + s + " )";
        }
        class Ne extends I.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ne.prototype.elanguage || l.Sg(Ne.M()),
              I.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ne.sm_m ||
                (Ne.sm_m = {
                  proto: Ne,
                  fields: {
                    elanguage: {
                      n: 1,
                      br: l.qM.readInt32,
                      bw: l.gp.writeInt32,
                    },
                    text: { n: 2, br: l.qM.readString, bw: l.gp.writeString },
                  },
                }),
              Ne.sm_m
            );
          }
          static MBF() {
            return Ne.sm_mbf || (Ne.sm_mbf = l.w0(Ne.M())), Ne.sm_mbf;
          }
          toObject(e = !1) {
            return Ne.toObject(e, this);
          }
          static toObject(e, n) {
            return l.BT(Ne.M(), e, n);
          }
          static fromObject(e) {
            return l.Uq(Ne.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (v().BinaryReader)(e),
              r = new Ne();
            return Ne.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return l.zj(Ne.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (v().BinaryWriter)();
            return Ne.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            l.i0(Ne.M(), e, n);
          }
          serializeBase64String() {
            var e = new (v().BinaryWriter)();
            return (
              Ne.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "ContentSurveyLocalizedText";
          }
        }
        class De extends I.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              De.prototype.customer_notes || l.Sg(De.M()),
              I.Message.initialize(this, e, 0, -1, [1, 2, 3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              De.sm_m ||
                (De.sm_m = {
                  proto: De,
                  fields: {
                    customer_notes: { n: 1, c: Ne, r: !0, q: !0 },
                    customer_notes_ai: { n: 2, c: Ne, r: !0, q: !0 },
                    mature_tags: {
                      n: 3,
                      r: !0,
                      q: !0,
                      br: l.qM.readEnum,
                      pbr: l.qM.readPackedEnum,
                      bw: l.gp.writeRepeatedEnum,
                    },
                    has_mature_content: {
                      n: 4,
                      br: l.qM.readBool,
                      bw: l.gp.writeBool,
                    },
                    ai_external_service_name: {
                      n: 5,
                      br: l.qM.readString,
                      bw: l.gp.writeString,
                    },
                    ai_external_service_url: {
                      n: 6,
                      br: l.qM.readString,
                      bw: l.gp.writeString,
                    },
                  },
                }),
              De.sm_m
            );
          }
          static MBF() {
            return De.sm_mbf || (De.sm_mbf = l.w0(De.M())), De.sm_mbf;
          }
          toObject(e = !1) {
            return De.toObject(e, this);
          }
          static toObject(e, n) {
            return l.BT(De.M(), e, n);
          }
          static fromObject(e) {
            return l.Uq(De.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (v().BinaryReader)(e),
              r = new De();
            return De.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return l.zj(De.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (v().BinaryWriter)();
            return De.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            l.i0(De.M(), e, n);
          }
          serializeBase64String() {
            var e = new (v().BinaryWriter)();
            return (
              De.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "ContentSurveyDisclosure";
          }
        }
        const _y = 1,
          ex = 2,
          tx = 3,
          nx = 4,
          sx = 5,
          rx = 6,
          ix = 7,
          ax = 8,
          ox = 9,
          lx = 10,
          cx = 11,
          dx = 12,
          ux = 13,
          mx = 14,
          gx = 15,
          px = 16,
          hx = 17,
          fx = 18,
          yx = 19,
          xx = 20,
          vx = 21,
          jx = 22,
          bx = 23,
          Bx = 24,
          Px = 25,
          Ex = 26,
          Ix = 27,
          Tx = 28,
          Sx = 29,
          Mx = 30,
          Lx = 31,
          Ax = 32,
          Ox = 33,
          zx = 34,
          Nx = 35,
          Dx = 36,
          Fx = 37,
          Wx = 38,
          Rx = 39,
          wx = 40,
          Ux = 41,
          Cx = 42,
          Kx = 43,
          Gx = 44,
          Yx = 45,
          kx = 46,
          Vx = 47,
          Qx = 48,
          $x = 49,
          Jx = 50,
          ah = 60,
          oh = 61,
          lh = 62,
          ch = 63,
          dh = 64,
          Zx = 80,
          Xx = 81,
          Hx = 82,
          qx = 83,
          _x = 90,
          ev = 91,
          tv = 95;
        function nv(s) {
          return "unknown EPriceConversionMethod ( " + s + " )";
        }
        function sv(s) {
          return "unknown EProtoBillingType ( " + s + " )";
        }
        function rv(s) {
          return "unknown EProtoActivationCode ( " + s + " )";
        }
        function iv(s) {
          return "unknown EProtoProposalState ( " + s + " )";
        }
        function av(s) {
          return "unknown EContentDescriptorSurveyState ( " + s + " )";
        }
        function ov(s) {
          return "unknown ERatingQuestionaireCategory ( " + s + " )";
        }
        function lv(s) {
          return "unknown EGeneratedGameRatingVersion ( " + s + " )";
        }
        function cv(s) {
          return "unknown EGameContentCategory ( " + s + " )";
        }
        function dv(s) {
          return "unknown EContentSurveySection ( " + s + " )";
        }
        function uv(s) {
          return "unknown EContentSurveySource ( " + s + " )";
        }
        function mv(s) {
          return "unknown EContentSurveyChildAppType ( " + s + " )";
        }
        function gv(s) {
          return "unknown EContentSurveyInheritAction ( " + s + " )";
        }
        function pv(s) {
          return "unknown EGeneratedAIContentType ( " + s + " )";
        }
        class St extends I.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              St.prototype.method || l.Sg(St.M()),
              I.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              St.sm_m ||
                (St.sm_m = {
                  proto: St,
                  fields: {
                    method: { n: 1, br: l.qM.readEnum, bw: l.gp.writeEnum },
                  },
                }),
              St.sm_m
            );
          }
          static MBF() {
            return St.sm_mbf || (St.sm_mbf = l.w0(St.M())), St.sm_mbf;
          }
          toObject(e = !1) {
            return St.toObject(e, this);
          }
          static toObject(e, n) {
            return l.BT(St.M(), e, n);
          }
          static fromObject(e) {
            return l.Uq(St.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (v().BinaryReader)(e),
              r = new St();
            return St.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return l.zj(St.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (v().BinaryWriter)();
            return St.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            l.i0(St.M(), e, n);
          }
          serializeBase64String() {
            var e = new (v().BinaryWriter)();
            return (
              St.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CProductInfo_ForceEmitPriceConversion";
          }
        }
        class Ue extends I.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ue.prototype.survey_section || l.Sg(Ue.M()),
              I.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ue.sm_m ||
                (Ue.sm_m = {
                  proto: Ue,
                  fields: {
                    survey_section: {
                      n: 1,
                      br: l.qM.readEnum,
                      bw: l.gp.writeEnum,
                    },
                    time_reviewed: {
                      n: 2,
                      br: l.qM.readUint32,
                      bw: l.gp.writeUint32,
                    },
                    accountid_reviewer: {
                      n: 3,
                      br: l.qM.readUint32,
                      bw: l.gp.writeUint32,
                    },
                  },
                }),
              Ue.sm_m
            );
          }
          static MBF() {
            return Ue.sm_mbf || (Ue.sm_mbf = l.w0(Ue.M())), Ue.sm_mbf;
          }
          toObject(e = !1) {
            return Ue.toObject(e, this);
          }
          static toObject(e, n) {
            return l.BT(Ue.M(), e, n);
          }
          static fromObject(e) {
            return l.Uq(Ue.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (v().BinaryReader)(e),
              r = new Ue();
            return Ue.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return l.zj(Ue.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (v().BinaryWriter)();
            return Ue.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            l.i0(Ue.M(), e, n);
          }
          serializeBase64String() {
            var e = new (v().BinaryWriter)();
            return (
              Ue.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "SurveySectionReviewed";
          }
        }
        class Ce extends I.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ce.prototype.content_category || l.Sg(Ce.M()),
              I.Message.initialize(this, e, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ce.sm_m ||
                (Ce.sm_m = {
                  proto: Ce,
                  fields: {
                    content_category: {
                      n: 1,
                      br: l.qM.readEnum,
                      bw: l.gp.writeEnum,
                    },
                    questionaire_categories: {
                      n: 2,
                      r: !0,
                      q: !0,
                      br: l.qM.readEnum,
                      pbr: l.qM.readPackedEnum,
                      bw: l.gp.writeRepeatedEnum,
                    },
                  },
                }),
              Ce.sm_m
            );
          }
          static MBF() {
            return Ce.sm_mbf || (Ce.sm_mbf = l.w0(Ce.M())), Ce.sm_mbf;
          }
          toObject(e = !1) {
            return Ce.toObject(e, this);
          }
          static toObject(e, n) {
            return l.BT(Ce.M(), e, n);
          }
          static fromObject(e) {
            return l.Uq(Ce.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (v().BinaryReader)(e),
              r = new Ce();
            return Ce.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return l.zj(Ce.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (v().BinaryWriter)();
            return Ce.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            l.i0(Ce.M(), e, n);
          }
          serializeBase64String() {
            var e = new (v().BinaryWriter)();
            return (
              Ce.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "GeneratedGameContent";
          }
        }
        class Ke extends I.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ke.prototype.rating_agency || l.Sg(Ke.M()),
              I.Message.initialize(this, e, 0, -1, [4], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ke.sm_m ||
                (Ke.sm_m = {
                  proto: Ke,
                  fields: {
                    rating_agency: {
                      n: 1,
                      br: l.qM.readString,
                      bw: l.gp.writeString,
                    },
                    rating: { n: 2, br: l.qM.readString, bw: l.gp.writeString },
                    required_age: {
                      n: 3,
                      br: l.qM.readUint32,
                      bw: l.gp.writeUint32,
                    },
                    descriptors: {
                      n: 4,
                      r: !0,
                      q: !0,
                      br: l.qM.readString,
                      bw: l.gp.writeRepeatedString,
                    },
                    banned: { n: 5, br: l.qM.readBool, bw: l.gp.writeBool },
                  },
                }),
              Ke.sm_m
            );
          }
          static MBF() {
            return Ke.sm_mbf || (Ke.sm_mbf = l.w0(Ke.M())), Ke.sm_mbf;
          }
          toObject(e = !1) {
            return Ke.toObject(e, this);
          }
          static toObject(e, n) {
            return l.BT(Ke.M(), e, n);
          }
          static fromObject(e) {
            return l.Uq(Ke.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (v().BinaryReader)(e),
              r = new Ke();
            return Ke.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return l.zj(Ke.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (v().BinaryWriter)();
            return Ke.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            l.i0(Ke.M(), e, n);
          }
          serializeBase64String() {
            var e = new (v().BinaryWriter)();
            return (
              Ke.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "GeneratedGameRating";
          }
        }
        class Ge extends I.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ge.prototype.timestamp_generated || l.Sg(Ge.M()),
              I.Message.initialize(this, e, 0, -1, [3, 4], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ge.sm_m ||
                (Ge.sm_m = {
                  proto: Ge,
                  fields: {
                    timestamp_generated: {
                      n: 1,
                      br: l.qM.readUint32,
                      bw: l.gp.writeUint32,
                    },
                    generated_version: {
                      n: 2,
                      br: l.qM.readUint32,
                      bw: l.gp.writeUint32,
                    },
                    ratings: { n: 3, c: Ke, r: !0, q: !0 },
                    content_categories: { n: 4, c: Ce, r: !0, q: !0 },
                  },
                }),
              Ge.sm_m
            );
          }
          static MBF() {
            return Ge.sm_mbf || (Ge.sm_mbf = l.w0(Ge.M())), Ge.sm_mbf;
          }
          toObject(e = !1) {
            return Ge.toObject(e, this);
          }
          static toObject(e, n) {
            return l.BT(Ge.M(), e, n);
          }
          static fromObject(e) {
            return l.Uq(Ge.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (v().BinaryReader)(e),
              r = new Ge();
            return Ge.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return l.zj(Ge.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (v().BinaryWriter)();
            return Ge.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            l.i0(Ge.M(), e, n);
          }
          serializeBase64String() {
            var e = new (v().BinaryWriter)();
            return (
              Ge.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "GeneratedGameRatings";
          }
        }
        class Ye extends I.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ye.prototype.desc_code_generated || l.Sg(Ye.M()),
              I.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ye.sm_m ||
                (Ye.sm_m = {
                  proto: Ye,
                  fields: {
                    desc_code_generated: {
                      n: 1,
                      br: l.qM.readString,
                      bw: l.gp.writeString,
                    },
                    desc_copyright_infringement_guarantee: {
                      n: 2,
                      br: l.qM.readString,
                      bw: l.gp.writeString,
                    },
                    desc_content_moderation_strategy: {
                      n: 3,
                      br: l.qM.readString,
                      bw: l.gp.writeString,
                    },
                    external_service_name: {
                      n: 4,
                      br: l.qM.readString,
                      bw: l.gp.writeString,
                    },
                    external_service_url: {
                      n: 5,
                      br: l.qM.readString,
                      bw: l.gp.writeString,
                    },
                    desc_external_service_how_content_available_to_players: {
                      n: 6,
                      br: l.qM.readString,
                      bw: l.gp.writeString,
                    },
                    desc_external_service_monetization: {
                      n: 7,
                      br: l.qM.readString,
                      bw: l.gp.writeString,
                    },
                  },
                }),
              Ye.sm_m
            );
          }
          static MBF() {
            return Ye.sm_mbf || (Ye.sm_mbf = l.w0(Ye.M())), Ye.sm_mbf;
          }
          toObject(e = !1) {
            return Ye.toObject(e, this);
          }
          static toObject(e, n) {
            return l.BT(Ye.M(), e, n);
          }
          static fromObject(e) {
            return l.Uq(Ye.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (v().BinaryReader)(e),
              r = new Ye();
            return Ye.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return l.zj(Ye.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (v().BinaryWriter)();
            return Ye.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            l.i0(Ye.M(), e, n);
          }
          serializeBase64String() {
            var e = new (v().BinaryWriter)();
            return (
              Ye.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "AIContentSurvey";
          }
        }
        class ke extends I.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ke.prototype.disclosure || l.Sg(ke.M()),
              I.Message.initialize(this, e, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ke.sm_m ||
                (ke.sm_m = {
                  proto: ke,
                  fields: {
                    disclosure: { n: 1, c: De },
                    interactive_elements: {
                      n: 2,
                      r: !0,
                      q: !0,
                      br: l.qM.readEnum,
                      pbr: l.qM.readPackedEnum,
                      bw: l.gp.writeRepeatedEnum,
                    },
                  },
                }),
              ke.sm_m
            );
          }
          static MBF() {
            return ke.sm_mbf || (ke.sm_mbf = l.w0(ke.M())), ke.sm_mbf;
          }
          toObject(e = !1) {
            return ke.toObject(e, this);
          }
          static toObject(e, n) {
            return l.BT(ke.M(), e, n);
          }
          static fromObject(e) {
            return l.Uq(ke.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (v().BinaryReader)(e),
              r = new ke();
            return ke.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return l.zj(ke.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (v().BinaryWriter)();
            return ke.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            l.i0(ke.M(), e, n);
          }
          serializeBase64String() {
            var e = new (v().BinaryWriter)();
            return (
              ke.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "ContentSurveyAuxData";
          }
        }
        class Ve extends I.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ve.prototype.id || l.Sg(Ve.M()),
              I.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ve.sm_m ||
                (Ve.sm_m = {
                  proto: Ve,
                  fields: {
                    id: { n: 1, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                  },
                }),
              Ve.sm_m
            );
          }
          static MBF() {
            return Ve.sm_mbf || (Ve.sm_mbf = l.w0(Ve.M())), Ve.sm_mbf;
          }
          toObject(e = !1) {
            return Ve.toObject(e, this);
          }
          static toObject(e, n) {
            return l.BT(Ve.M(), e, n);
          }
          static fromObject(e) {
            return l.Uq(Ve.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (v().BinaryReader)(e),
              r = new Ve();
            return Ve.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return l.zj(Ve.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (v().BinaryWriter)();
            return Ve.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            l.i0(Ve.M(), e, n);
          }
          serializeBase64String() {
            var e = new (v().BinaryWriter)();
            return (
              Ve.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "ContentDescriptor";
          }
        }
        class Qe extends I.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Qe.prototype.surveyid || l.Sg(Qe.M()),
              I.Message.initialize(this, e, 0, -1, [3, 11, 14, 15], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Qe.sm_m ||
                (Qe.sm_m = {
                  proto: Qe,
                  fields: {
                    surveyid: {
                      n: 1,
                      br: l.qM.readUint64String,
                      bw: l.gp.writeUint64String,
                    },
                    state: { n: 2, br: l.qM.readEnum, bw: l.gp.writeEnum },
                    descriptors: { n: 3, c: Ve, r: !0, q: !0 },
                    timestamp_started: {
                      n: 4,
                      br: l.qM.readUint32,
                      bw: l.gp.writeUint32,
                    },
                    timestamp_updated: {
                      n: 5,
                      br: l.qM.readUint32,
                      bw: l.gp.writeUint32,
                    },
                    timestamp_finished: {
                      n: 6,
                      br: l.qM.readUint32,
                      bw: l.gp.writeUint32,
                    },
                    accountid: {
                      n: 7,
                      br: l.qM.readUint32,
                      bw: l.gp.writeUint32,
                    },
                    developer_notes: {
                      n: 8,
                      br: l.qM.readString,
                      bw: l.gp.writeString,
                    },
                    keyvalues: {
                      n: 9,
                      br: l.qM.readString,
                      bw: l.gp.writeString,
                    },
                    ratings: { n: 10, c: Ge },
                    categories: {
                      n: 11,
                      r: !0,
                      q: !0,
                      br: l.qM.readEnum,
                      pbr: l.qM.readPackedEnum,
                      bw: l.gp.writeRepeatedEnum,
                    },
                    ai_survey: { n: 12, c: Ye },
                    internal_notes: {
                      n: 13,
                      br: l.qM.readString,
                      bw: l.gp.writeString,
                    },
                    all_ratings: { n: 14, c: we, r: !0, q: !0 },
                    sections_reviewed: { n: 15, c: Ue, r: !0, q: !0 },
                    disclosure: { n: 16, c: De },
                    inherited_surveyid: {
                      n: 17,
                      br: l.qM.readUint64String,
                      bw: l.gp.writeUint64String,
                    },
                    started_from_scratch: {
                      n: 18,
                      br: l.qM.readBool,
                      bw: l.gp.writeBool,
                    },
                    survey_aux_data: { n: 19, c: ke },
                    source: { n: 20, br: l.qM.readEnum, bw: l.gp.writeEnum },
                    flags: {
                      n: 21,
                      br: l.qM.readUint64String,
                      bw: l.gp.writeUint64String,
                    },
                  },
                }),
              Qe.sm_m
            );
          }
          static MBF() {
            return Qe.sm_mbf || (Qe.sm_mbf = l.w0(Qe.M())), Qe.sm_mbf;
          }
          toObject(e = !1) {
            return Qe.toObject(e, this);
          }
          static toObject(e, n) {
            return l.BT(Qe.M(), e, n);
          }
          static fromObject(e) {
            return l.Uq(Qe.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (v().BinaryReader)(e),
              r = new Qe();
            return Qe.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return l.zj(Qe.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (v().BinaryWriter)();
            return Qe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            l.i0(Qe.M(), e, n);
          }
          serializeBase64String() {
            var e = new (v().BinaryWriter)();
            return (
              Qe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "ContentDescriptorSurvey";
          }
        }
        class $e extends I.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              $e.prototype.appid || l.Sg($e.M()),
              I.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              $e.sm_m ||
                ($e.sm_m = {
                  proto: $e,
                  fields: {
                    appid: { n: 1, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                    include_descriptors: {
                      n: 2,
                      br: l.qM.readBool,
                      bw: l.gp.writeBool,
                    },
                    include_keyvalues: {
                      n: 3,
                      br: l.qM.readBool,
                      bw: l.gp.writeBool,
                    },
                    include_categories: {
                      n: 4,
                      br: l.qM.readBool,
                      bw: l.gp.writeBool,
                    },
                    include_ai_survey: {
                      n: 5,
                      br: l.qM.readBool,
                      bw: l.gp.writeBool,
                    },
                    include_all_ratings: {
                      n: 6,
                      br: l.qM.readBool,
                      bw: l.gp.writeBool,
                    },
                  },
                }),
              $e.sm_m
            );
          }
          static MBF() {
            return $e.sm_mbf || ($e.sm_mbf = l.w0($e.M())), $e.sm_mbf;
          }
          toObject(e = !1) {
            return $e.toObject(e, this);
          }
          static toObject(e, n) {
            return l.BT($e.M(), e, n);
          }
          static fromObject(e) {
            return l.Uq($e.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (v().BinaryReader)(e),
              r = new $e();
            return $e.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return l.zj($e.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (v().BinaryWriter)();
            return $e.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            l.i0($e.M(), e, n);
          }
          serializeBase64String() {
            var e = new (v().BinaryWriter)();
            return (
              $e.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAppContentDescriptors_GetActiveSurvey_Request";
          }
        }
        class Je extends I.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Je.prototype.appid || l.Sg(Je.M()),
              I.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Je.sm_m ||
                (Je.sm_m = {
                  proto: Je,
                  fields: {
                    appid: { n: 1, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                    include_descriptors: {
                      n: 2,
                      br: l.qM.readBool,
                      bw: l.gp.writeBool,
                    },
                    include_keyvalues: {
                      n: 3,
                      br: l.qM.readBool,
                      bw: l.gp.writeBool,
                    },
                    include_categories: {
                      n: 4,
                      br: l.qM.readBool,
                      bw: l.gp.writeBool,
                    },
                    include_ai_survey: {
                      n: 5,
                      br: l.qM.readBool,
                      bw: l.gp.writeBool,
                    },
                    include_all_ratings: {
                      n: 6,
                      br: l.qM.readBool,
                      bw: l.gp.writeBool,
                    },
                  },
                }),
              Je.sm_m
            );
          }
          static MBF() {
            return Je.sm_mbf || (Je.sm_mbf = l.w0(Je.M())), Je.sm_mbf;
          }
          toObject(e = !1) {
            return Je.toObject(e, this);
          }
          static toObject(e, n) {
            return l.BT(Je.M(), e, n);
          }
          static fromObject(e) {
            return l.Uq(Je.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (v().BinaryReader)(e),
              r = new Je();
            return Je.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return l.zj(Je.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (v().BinaryWriter)();
            return Je.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            l.i0(Je.M(), e, n);
          }
          serializeBase64String() {
            var e = new (v().BinaryWriter)();
            return (
              Je.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAppContentDescriptors_GetWorkingSurvey_Request";
          }
        }
        class Fe extends I.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Fe.prototype.surveyid || l.Sg(Fe.M()),
              I.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Fe.sm_m ||
                (Fe.sm_m = {
                  proto: Fe,
                  fields: {
                    surveyid: {
                      n: 1,
                      br: l.qM.readUint64String,
                      bw: l.gp.writeUint64String,
                    },
                    survey: { n: 2, c: Qe },
                  },
                }),
              Fe.sm_m
            );
          }
          static MBF() {
            return Fe.sm_mbf || (Fe.sm_mbf = l.w0(Fe.M())), Fe.sm_mbf;
          }
          toObject(e = !1) {
            return Fe.toObject(e, this);
          }
          static toObject(e, n) {
            return l.BT(Fe.M(), e, n);
          }
          static fromObject(e) {
            return l.Uq(Fe.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (v().BinaryReader)(e),
              r = new Fe();
            return Fe.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return l.zj(Fe.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (v().BinaryWriter)();
            return Fe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            l.i0(Fe.M(), e, n);
          }
          serializeBase64String() {
            var e = new (v().BinaryWriter)();
            return (
              Fe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAppContentDescriptors_GetSurvey_Response";
          }
        }
        var Lo;
        ((s) => {
          function e(r, a, o) {
            return r.SendMsg(
              "AppContentDescriptor.GetActiveSurvey#1",
              (0, Le.I8)($e, a, o),
              Fe,
              { bConstMethod: !0, ePrivilege: 7 },
            );
          }
          s.GetActiveSurvey = e;
          function n(r, a, o) {
            return r.SendMsg(
              "AppContentDescriptor.GetWorkingSurvey#1",
              (0, Le.I8)(Je, a, o),
              Fe,
              { bConstMethod: !0, ePrivilege: 7 },
            );
          }
          s.GetWorkingSurvey = n;
        })(Lo || (Lo = {}));
        const uh = new Map([
            [z0, "esrb"],
            [N0, "pegi"],
            [D0, "bbfc"],
            [F0, "usk"],
            [W0, "oflc"],
            [R0, "nzoflc"],
            [w0, "cero"],
            [U0, "kgrb"],
            [C0, "gmedia"],
            [K0, "dejus"],
            [G0, "mda"],
            [Y0, "fpb"],
            [k0, "csrr"],
            [V0, "crl"],
            [Q0, "agcom"],
            [$0, "igrs"],
            [J0, "steam_germany"],
            [Z0, "steam_australia"],
            [X0, "cadpa"],
          ]),
          mh = "crl",
          gh = "dejus",
          ph = "0",
          hh = "pending";
        function fh(s) {
          return uh.get(s) ?? "";
        }
        function yh(s) {
          return s ? Rt.Localize("#GameRating_Agency_" + s.toUpperCase()) : "";
        }
        function xh(s, e) {
          return !s || !e
            ? ""
            : Rt.Localize("#GameRating_Rating_" + s + "_" + e);
        }
        function vh(s) {
          return Rt.Localize("#GameRating_RARSText_" + s);
        }
        const Bi = new Map([
          [
            H0,
            {
              strFile: "love",
              strToken: "#GameRating_DescriptorImage_CERO_Love",
            },
          ],
          [
            q0,
            {
              strFile: "sexual_content",
              strToken: "#GameRating_DescriptorImage_CERO_SexualContent",
            },
          ],
          [
            _0,
            {
              strFile: "violence",
              strToken: "#GameRating_DescriptorImage_CERO_Violence",
            },
          ],
          [
            eh,
            {
              strFile: "horror",
              strToken: "#GameRating_DescriptorImage_CERO_Horror",
            },
          ],
          [
            th,
            {
              strFile: "drinking_smoking",
              strToken: "#GameRating_DescriptorImage_CERO_DrinkingSmoking",
            },
          ],
          [
            nh,
            {
              strFile: "gambling",
              strToken: "#GameRating_DescriptorImage_CERO_Gambling",
            },
          ],
          [
            sh,
            {
              strFile: "crime",
              strToken: "#GameRating_DescriptorImage_CERO_Crime",
            },
          ],
          [
            rh,
            {
              strFile: "drugs",
              strToken: "#GameRating_DescriptorImage_CERO_Drugs",
            },
          ],
          [
            ih,
            {
              strFile: "language",
              strToken: "#GameRating_DescriptorImage_CERO_Language",
            },
          ],
        ]);
        function jh(s) {
          const e = Bi.get(s);
          if (e)
            return {
              strURL: `${F.TS.STORE_CDN_URL}public/shared/images/game_ratings/CERO/descriptors/${e.strFile}.png`,
              strAlt: Rt.Localize(e.strToken),
            };
        }
        function hv(s) {
          const e = Bi.get(s);
          if (e)
            return `[img]${Config.MEDIA_CDN_URL}store/Ratings/CERO/${e.strFile}.png[/img]`;
        }
        function fv(s) {
          const e = [];
          for (const n of s) {
            const r = n.toLowerCase();
            for (const [a, o] of Bi)
              if (r.includes(`cero/${o.strFile}.png`)) {
                e.push(a);
                break;
              }
          }
          return e;
        }
        const bh = new Map([
          [To, "#GameRating_ContentCategoryDescriptor_60"],
          [So, "#GameRating_ContentCategoryDescriptor_61"],
          [Mo, "#GameRating_ContentCategoryDescriptor_62"],
          [O0, "#GameRating_ContentCategoryDescriptor_63"],
        ]);
        function Ao(s) {
          return s
            .map((e) => bh.get(e))
            .filter((e) => e !== void 0)
            .map((e) => Rt.Localize(e));
        }
        const Bh = new Map([
          ["in-game purchases", To],
          ["in-game purchases (includes random items)", So],
          ["users interact", Mo],
        ]);
        function Ph(s) {
          const e = [];
          for (const n of s) {
            const r = n.trim();
            if (!r) continue;
            const a = Bh.get(r.toLowerCase()),
              o = a !== void 0 ? Ao([a])[0] : r;
            e.includes(o) || e.push(o);
          }
          return e;
        }
        const Eh = new Map([
          [ah, "#GameRating_ContentCategoryDescriptor_60"],
          [oh, "#GameRating_ContentCategoryDescriptor_61"],
          [lh, "#GameRating_ContentCategoryDescriptor_62"],
          [ch, "#GameRating_ContentCategoryDescriptor_63"],
          [dh, "#GameRating_ContentCategoryDescriptor_64"],
        ]);
        function yv(s) {
          const e = [];
          for (const n of s)
            if (
              n.content_category ===
              EGameContentCategory.k_EGameContentCategory_InteractiveElements
            )
              for (const r of n.questionaire_categories ?? []) {
                const a = Eh.get(r);
                a && e.push(GameRatingLocalization.Localize(a));
              }
          return e;
        }
        function Ih(s) {
          const { rating: e } = s,
            { strType: n, strRating: r } = e;
          if (r === hh)
            return (0, t.jsxs)("div", {
              className: (0, D.A)(Xt().GameRating, "GameRating"),
              children: [
                (0, t.jsx)(A.s, {
                  direction: "row",
                  justify: "between",
                  className: Xt().Title,
                  children: Rt.Localize("#GameRating_Pending"),
                }),
                (0, t.jsx)(Oo, { strType: n }),
              ],
            });
          const a = n === mh ? [vh(r)] : e.rgDescriptors,
            o = e.bOnlineMusicNotRated || e.bOnlineInteractionsNotRated;
          return (0, t.jsxs)(A.s, {
            direction: "column",
            gap: "3",
            className: Xt().GameRating,
            children: [
              n === gh
                ? e.nRequiredAge > 0 &&
                  (0, t.jsx)(x.EY, {
                    size: "3",
                    contrast: "title",
                    className: (0, D.A)(Xt().RequiredAge, "RequiredAge"),
                    children: Rt.Localize(
                      "#GameRating_Age_DEJUS",
                      e.nRequiredAge,
                    ),
                  })
                : e.bBanned && (0, t.jsx)(Th, {}),
              !e.bBanned &&
                (0, t.jsxs)(A.s, {
                  direction: "row",
                  gap: "3",
                  className: Xt().Details,
                  children: [
                    (0, t.jsx)("div", {
                      className: Xt().Icon,
                      children: (0, t.jsx)(Sh, { rating: e }),
                    }),
                    (0, t.jsxs)(A.s, {
                      direction: "column",
                      gap: "2",
                      children: [
                        a.length > 0 &&
                          (0, t.jsx)(x.EY, {
                            as: "p",
                            contrast: "body",
                            className: Xt().DescriptorText,
                            children: a.join(`
`),
                          }),
                        (0, t.jsx)(Mh, { rating: e }),
                        o &&
                          (0, t.jsxs)(t.Fragment, {
                            children: [
                              e.bOnlineMusicNotRated &&
                                (0, t.jsx)(x.EY, {
                                  as: "p",
                                  contrast: "body",
                                  className: Xt().DescriptorText,
                                  children: Rt.Localize(
                                    "#GameRating_OnlineMusicNotice",
                                  ),
                                }),
                              e.bOnlineInteractionsNotRated &&
                                (0, t.jsx)(x.EY, {
                                  as: "p",
                                  contrast: "body",
                                  className: Xt().DescriptorText,
                                  children: Rt.Localize(
                                    "#GameRating_OnlineInteractionsNotice",
                                  ),
                                }),
                            ],
                          }),
                        (0, t.jsx)(Lh, { rating: e }),
                      ],
                    }),
                  ],
                }),
              (0, t.jsx)(Oo, { strType: n }),
            ],
          });
        }
        function Th() {
          return (0, t.jsx)(A.s, {
            direction: "row",
            justify: "between",
            className: Xt().Title,
            children: Rt.LocalizeReact(
              "#GameRating_ContentClassification",
              (0, t.jsx)("span", {
                className: Xt().Banned,
                children: Rt.Localize("#GameRating_Banned"),
              }),
            ),
          });
        }
        function Sh(s) {
          const {
            strType: e,
            strRating: n,
            strImageURL: r,
            strImageTarget: a,
          } = s.rating;
          if (n === ph)
            return (0, t.jsx)("div", {
              className: Xt().AllAges,
              children: Rt.Localize("#GameRating_AllAges"),
            });
          if (!r) return null;
          const o = xh(e, n);
          return a
            ? (0, t.jsx)(T.Ii, {
                href: a,
                onOKActionDescription: o,
                children: (0, t.jsx)(_t, { src: r, alt: o }),
              })
            : (0, t.jsx)(_t, { src: r, alt: o });
        }
        function Mh(s) {
          const e = (s.rating.rgDescriptorImages ?? [])
            .map((n) => jh(n))
            .filter((n) => n !== void 0);
          return e.length === 0
            ? null
            : (0, t.jsx)(A.s, {
                direction: "row",
                wrap: "wrap",
                align: "start",
                gap: "1",
                children: e.map((n, r) =>
                  (0, t.jsx)(
                    _t,
                    { src: n.strURL, alt: n.strAlt, title: n.strAlt },
                    r,
                  ),
                ),
              });
        }
        function Lh(s) {
          const {
              rgRatingInteractiveElements: e,
              rgSurveyInteractiveElements: n,
            } = s.rating,
            r = e.length > 0,
            a = r ? e : n;
          return a.length === 0
            ? null
            : (0, t.jsxs)(ne.az, {
                children: [
                  (0, t.jsx)(x.EY, {
                    as: "p",
                    contrast: "note",
                    children: Rt.Localize(
                      r
                        ? "#GameRating_InteractiveElements_Title"
                        : "#GameRating_ContentCategory_InteractiveElements",
                    ),
                  }),
                  (0, t.jsx)(x.EY, {
                    as: "p",
                    contrast: "body",
                    className: Xt().DescriptorText,
                    children: a.join(Rt.Localize("#GameRating_ListDelimiter")),
                  }),
                ],
              });
        }
        function Oo(s) {
          const e = yh(s.strType);
          return e
            ? (0, t.jsx)(x.EY, {
                contrast: "body",
                size: "2",
                className: "Agency",
                children: Rt.Localize("#GameRating_RatingBy", e),
              })
            : null;
        }
        function Ah(s) {
          return {
            strType: s.type || (s.agency !== void 0 ? fh(s.agency) : ""),
            strRating: s.rating ?? "",
            bBanned: !!s.banned,
            nRequiredAge: s.required_age ?? 0,
            rgDescriptors: s.descriptors ?? [],
            rgDescriptorImages: s.descriptor_images ?? [],
            bOnlineMusicNotRated: !!s.esrb_online_music_not_rated,
            bOnlineInteractionsNotRated: !!s.esrb_online_interactions_not_rated,
            rgRatingInteractiveElements: Ph(
              (s.interactive_elements ?? "").split(/[\r\n,]+/),
            ),
            rgSurveyInteractiveElements: Ao(
              s.survey_interactive_elements ?? [],
            ),
            strImageURL: Oh(s),
            strImageTarget: s.image_target || void 0,
          };
        }
        function Oh(s) {
          if (s.image_url)
            return `${F.TS.STORE_CDN_URL}${s.image_url}?${s.image_target ? "v=3" : "v=2"}`;
        }
        function zh(s) {
          const { data: e } = (0, E.x2)({ appid: s.appid });
          return (
            m.use(Rt.Ready()),
            e?.rating ? (0, t.jsx)(Ih, { rating: Ah(e) }) : null
          );
        }
        var Nh = i(9682);
        function zo(s, e) {
          return ["OwnReview", s, e];
        }
        function Dh(s) {
          const e = (0, qt.KV)(),
            n = (0, kt.AP)(s),
            r = Fh(e, F.iA.steamid, n);
          return (0, cn.I)(r);
        }
        function Fh(s, e, n) {
          return {
            queryKey: zo(e, n),
            queryFn: async () => {
              const r = await Nh.YK.GetIndividualRecommendations(s, {
                requests: [{ steamid: e, appid: n }],
              });
              if (r.GetEResult() == rn.p) return null;
              if (r.GetEResult() != rn.R)
                throw new Kr.x(
                  r.GetEResult(),
                  "Error from GetIndividualRecommendations",
                );
              return r.Body().recommendations()[0]?.toObject() ?? null;
            },
            staleTime: 1 / 0,
          };
        }
        function Wh(s) {
          const e = (0, xn.jE)(),
            n = (0, kt.AP)(s);
          return m.useCallback(
            (r) => {
              e.setQueryData(zo(F.iA.steamid, n), r);
            },
            [e, n],
          );
        }
        var Rh = i(85743),
          Pi = i(28794),
          wh = i(57581),
          Uh = i(15751),
          No = i.n(Uh),
          Ch = i(6876),
          Ei = i.n(Ch);
        function Kh(s) {
          const { review: e, eAppType: n, nSteamworksAppid: r, onEdit: a } = s,
            { data: o } = (0, Fs.jn)(F.iA.steamid);
          m.use(g.Ready());
          const c = (0, Rh.Fi)((0, Ds.n)(o, F.iA.steamid), r),
            d = e.is_public
              ? "#AppPage_OwnReview_PostedPublic"
              : "#AppPage_OwnReview_PostedFriendsOnly";
          return (0, t.jsxs)(A.s, {
            direction: "column",
            padding: "4",
            borderColor: "greyneutral-9 50%",
            children: [
              (0, t.jsx)(Gh, { review: e, eAppType: n }),
              (0, t.jsxs)(A.s, {
                direction: "column",
                background: "greyneutral-11 14%",
                children: [
                  (0, t.jsx)(kh, { review: e }),
                  (0, t.jsxs)(A.s, {
                    direction: "column",
                    gap: "3",
                    padding: "3",
                    children: [
                      (0, t.jsxs)(A.s, {
                        gap: "3",
                        align: "center",
                        children: [
                          (0, t.jsx)(Yh, { bPositive: !!e.voted_up }),
                          (0, t.jsx)(ne.az, {
                            flexGrow: "1",
                            children: (0, t.jsx)(x.EY, {
                              size: "3",
                              color: "slate-11",
                              children: g.Localize(d),
                            }),
                          }),
                        ],
                      }),
                      (0, t.jsx)(Vh, { review: e }),
                      (0, t.jsxs)(A.s, {
                        gap: "2",
                        justify: "end",
                        children: [
                          (0, t.jsx)(Ie.$, {
                            focusable: !0,
                            color: "blue",
                            onClick: a,
                            children: g.Localize("#AppPage_OwnReview_Edit"),
                          }),
                          (0, t.jsx)(Ie.v, {
                            focusable: !0,
                            color: "blue",
                            href: c,
                            children: g.Localize("#AppPage_OwnReview_View"),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        }
        function Gh(s) {
          const { review: e, eAppType: n } = s,
            r = g.GetAppTypeLocKey("#AppPage_OwnReview_Reviewed", n ?? w.uE.HT),
            a = (0, Lt._l)(e.time_created ?? 0, { fullmonthname: !0 });
          return (0, t.jsxs)(x.EY, {
            size: "5",
            weight: "medium",
            color: "text-light",
            contrast: "title",
            marginBottom: "2",
            children: [
              g.Localize(r, a),
              !!e.time_updated &&
                ` (${g.Localize("#AppPage_OwnReview_Updated", (0, Lt._l)(e.time_updated, { fullmonthname: !0 }))})`,
            ],
          });
        }
        function Yh(s) {
          const { bPositive: e } = s;
          return (0, t.jsx)("div", {
            className: (0, D.A)(Ei().ThumbIcon, !e && Ei().Down),
            children: (0, t.jsx)(N.twC, {}),
          });
        }
        function kh(s) {
          const { review: e } = s,
            n = e.votes_up ?? 0,
            r = e.comment_count ?? 0;
          return !n && !r
            ? null
            : (0, t.jsxs)(A.s, {
                gap: "3",
                align: "center",
                paddingX: "4",
                paddingY: "2",
                background: "greyneutral-9 50%",
                children: [
                  n > 0 &&
                    (0, t.jsx)(x.EY, {
                      size: "3",
                      children: g.LocalizePlural(
                        "#AppPage_OwnReview_HelpfulCount",
                        n,
                      ),
                    }),
                  r > 0 &&
                    (0, t.jsxs)(A.s, {
                      gap: "1",
                      align: "center",
                      children: [
                        (0, t.jsx)(x.EY, { size: "3", children: r }),
                        (0, t.jsx)(N.MwB, { className: Ei().CommentIcon }),
                      ],
                    }),
                ],
              });
        }
        function Vh(s) {
          const { review: e } = s,
            [n, r] = m.useState(!1),
            a = m.useCallback(() => r(!0), []);
          if (!e.developer_response) return null;
          m.use(Pi.c.Ready());
          const o = (0, Lt._l)(e.time_developer_responded ?? 0, {
            fullmonthname: !0,
            bUseRelativeNames: !1,
          });
          return (0, t.jsxs)(A.s, {
            direction: "column",
            gap: "2",
            children: [
              (0, t.jsxs)(A.s, {
                gap: "2",
                align: "center",
                wrap: "wrap",
                children: [
                  (0, t.jsx)(x.EY, {
                    size: "3",
                    color: "slate-11",
                    children: Pi.c.Localize(
                      "#Review_OfficialDeveloperResponseExistsDate",
                      o,
                    ),
                  }),
                  !n &&
                    (0, t.jsx)(Ie.$, {
                      focusable: !0,
                      size: "1",
                      variant: "ghost",
                      color: "blue",
                      onClick: a,
                      children: Pi.c.Localize(
                        "#Review_OfficialDeveloperResponse_View",
                      ),
                    }),
                ],
              }),
              n &&
                (0, t.jsx)(ne.az, {
                  padding: "3",
                  background: "greyneutral-9 50%",
                  className: (0, D.A)(No().BBCodeContent, No().Community),
                  children: (0, t.jsx)(wh.J, {
                    text: e.developer_response,
                    bBeWary: !0,
                  }),
                }),
            ],
          });
        }
        var Qh = i(3877),
          $h = i(24089);
        function Jh() {
          return $h.TextEntry;
        }
        var Zh = i(86946),
          Xh = i(80549);
        function Hh(s) {
          const {
              rows: e = 3,
              resize: n = "none",
              ref: r,
              value: a,
              onTextChange: o,
              onChange: c,
              disabled: d,
              variant: u,
              ...p
            } = s,
            h = (P) => {
              d || (o(P.target.value), c && c(P));
            },
            f = (0, Xh.f)("TextArea", u),
            y = (0, U.Qn)(),
            j = (0, Zh.w)({
              ...p,
              className: Cn()((0, Qh.T)(), Jh()),
              style: { resize: n },
              cursor: "text",
              disabled: d,
              variant: f,
            }),
            B = y ? qh : "textarea";
          return (0, t.jsx)(B, {
            ref: r,
            ...j,
            value: a || "",
            onChange: h,
            rows: e,
            readOnly: d,
            "aria-disabled": d,
          });
        }
        function qh(s) {
          return (0, t.jsx)(T.dO, { noFocusRing: !0, ...s });
        }
        var _h = i(12204),
          Ii = i(94381),
          Do = i(8833);
        function ef(s) {
          const { orientation: e = "horizontal", size: n = "1", ...r } = s;
          return (0, t.jsx)("div", {
            role: "separator",
            "aria-orientation": e,
            ...(0, Xr.mz)({ ...r, size: n, className: Do.Separator }, tf),
          });
        }
        const tf = [
          ...Aa.L,
          { prop: "size", className: (s) => Do[`Size-${s}`], responsive: !0 },
          {
            prop: "color",
            cssProperty: (s) => ["--separator-color", (0, Xr.w7)(s)],
          },
        ];
        var Fo = i(28361),
          Ti = i(16412);
        function nf(s, e) {
          const n = (0, kt.AP)(s),
            r = (0, wt.ru)("recommend-game");
          return (0, Es.n)({
            mutationFn: (a) => (e ? af(e, a) : rf(s, n, a, r)),
            onSuccess: () => {
              window.location.reload();
            },
          });
        }
        function sf(s) {
          function e(r) {
            return typeof r == "boolean" || r === void 0 || r === null
              ? r
                ? "1"
                : "0"
              : String(r);
          }
          const n = new FormData();
          return (
            Object.entries(s).forEach(([r, a]) => {
              if (Array.isArray(a)) for (const o of a) n.append(r + "[]", e(o));
              else n.append(r, e(a));
            }),
            n
          );
        }
        async function rf(s, e, n, r) {
          const a = await Wo(`${F.TS.STORE_BASE_URL}friends/recommendgame`, {
            appid: s,
            steamworksappid: e,
            comment: n.review ?? "",
            rated_up: n.voted_up,
            is_public: n.is_public,
            language: n.language ?? "",
            received_compensation: n.received_compensation,
            disable_comments: n.comments_disabled,
            sessionid: (0, U.KC)(),
            hide_in_steam_china: !(0, gn.nA)(F.TS.EREALM),
            saved_hardware_id: n.saved_hardware_id,
            snr: r,
          });
          if (!a.success) throw new Error(a.strError ?? "");
        }
        async function af(s, e) {
          if (
            (
              await Wo(`${F.TS.STORE_BASE_URL}userreviews/update/${s}`, {
                review_text: e.review ?? "",
                voted_up: e.voted_up,
                is_public: e.is_public,
                language: e.language ?? "",
                received_compensation: e.received_compensation,
                comments_disabled: e.comments_disabled,
                saved_hardware_id: e.saved_hardware_id,
                sessionid: (0, U.KC)(),
              })
            ).success != rn.R
          )
            throw new Error("");
        }
        async function Wo(s, e) {
          const n = sf(e);
          return await (
            await fetch(s, { method: "POST", body: n, credentials: "include" })
          )
            .json()
            .catch(() => ({}));
        }
        function xv(s) {
          return "unknown EValveIndexComponent ( " + s + " )";
        }
        function vv(s) {
          return "unknown EFramePromoSerialRedemptionSource ( " + s + " )";
        }
        class Ze extends I.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ze.prototype.serial_number || l.Sg(Ze.M()),
              I.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ze.sm_m ||
                (Ze.sm_m = {
                  proto: Ze,
                  fields: {
                    serial_number: {
                      n: 1,
                      br: l.qM.readString,
                      bw: l.gp.writeString,
                    },
                    controller_code: {
                      n: 2,
                      br: l.qM.readString,
                      bw: l.gp.writeString,
                    },
                  },
                }),
              Ze.sm_m
            );
          }
          static MBF() {
            return Ze.sm_mbf || (Ze.sm_mbf = l.w0(Ze.M())), Ze.sm_mbf;
          }
          toObject(e = !1) {
            return Ze.toObject(e, this);
          }
          static toObject(e, n) {
            return l.BT(Ze.M(), e, n);
          }
          static fromObject(e) {
            return l.Uq(Ze.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (v().BinaryReader)(e),
              r = new Ze();
            return Ze.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return l.zj(Ze.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (v().BinaryWriter)();
            return Ze.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            l.i0(Ze.M(), e, n);
          }
          serializeBase64String() {
            var e = new (v().BinaryWriter)();
            return (
              Ze.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_QueryAccountsRegisteredToSerial_Request";
          }
        }
        class Xe extends I.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Xe.prototype.accountid || l.Sg(Xe.M()),
              I.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Xe.sm_m ||
                (Xe.sm_m = {
                  proto: Xe,
                  fields: {
                    accountid: {
                      n: 1,
                      br: l.qM.readUint32,
                      bw: l.gp.writeUint32,
                    },
                    registration_complete: {
                      n: 2,
                      br: l.qM.readBool,
                      bw: l.gp.writeBool,
                    },
                  },
                }),
              Xe.sm_m
            );
          }
          static MBF() {
            return Xe.sm_mbf || (Xe.sm_mbf = l.w0(Xe.M())), Xe.sm_mbf;
          }
          toObject(e = !1) {
            return Xe.toObject(e, this);
          }
          static toObject(e, n) {
            return l.BT(Xe.M(), e, n);
          }
          static fromObject(e) {
            return l.Uq(Xe.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (v().BinaryReader)(e),
              r = new Xe();
            return Xe.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return l.zj(Xe.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (v().BinaryWriter)();
            return Xe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            l.i0(Xe.M(), e, n);
          }
          serializeBase64String() {
            var e = new (v().BinaryWriter)();
            return (
              Xe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_QueryAccountsRegisteredToSerial_Accounts";
          }
        }
        class He extends I.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              He.prototype.accounts || l.Sg(He.M()),
              I.Message.initialize(this, e, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              He.sm_m ||
                (He.sm_m = {
                  proto: He,
                  fields: { accounts: { n: 1, c: Xe, r: !0, q: !0 } },
                }),
              He.sm_m
            );
          }
          static MBF() {
            return He.sm_mbf || (He.sm_mbf = l.w0(He.M())), He.sm_mbf;
          }
          toObject(e = !1) {
            return He.toObject(e, this);
          }
          static toObject(e, n) {
            return l.BT(He.M(), e, n);
          }
          static fromObject(e) {
            return l.Uq(He.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (v().BinaryReader)(e),
              r = new He();
            return He.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return l.zj(He.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (v().BinaryWriter)();
            return He.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            l.i0(He.M(), e, n);
          }
          serializeBase64String() {
            var e = new (v().BinaryWriter)();
            return (
              He.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_QueryAccountsRegisteredToSerial_Response";
          }
        }
        class qe extends I.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              qe.prototype.serial_number || l.Sg(qe.M()),
              I.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              qe.sm_m ||
                (qe.sm_m = {
                  proto: qe,
                  fields: {
                    serial_number: {
                      n: 1,
                      br: l.qM.readString,
                      bw: l.gp.writeString,
                    },
                    controller_code: {
                      n: 2,
                      br: l.qM.readString,
                      bw: l.gp.writeString,
                    },
                  },
                }),
              qe.sm_m
            );
          }
          static MBF() {
            return qe.sm_mbf || (qe.sm_mbf = l.w0(qe.M())), qe.sm_mbf;
          }
          toObject(e = !1) {
            return qe.toObject(e, this);
          }
          static toObject(e, n) {
            return l.BT(qe.M(), e, n);
          }
          static fromObject(e) {
            return l.Uq(qe.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (v().BinaryReader)(e),
              r = new qe();
            return qe.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return l.zj(qe.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (v().BinaryWriter)();
            return qe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            l.i0(qe.M(), e, n);
          }
          serializeBase64String() {
            var e = new (v().BinaryWriter)();
            return (
              qe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_RegisterSteamController_Request";
          }
        }
        class Sn extends I.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), I.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return Sn.toObject(e, this);
          }
          static toObject(e, n) {
            return e ? { $jspbMessageInstance: n } : {};
          }
          static fromObject(e) {
            return new Sn();
          }
          static deserializeBinary(e) {
            let n = new (v().BinaryReader)(e),
              r = new Sn();
            return Sn.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return e;
          }
          serializeBinary() {
            var e = new (v().BinaryWriter)();
            return Sn.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {}
          serializeBase64String() {
            var e = new (v().BinaryWriter)();
            return (
              Sn.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_RegisterSteamController_Response";
          }
        }
        class _e extends I.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              _e.prototype.serial_number || l.Sg(_e.M()),
              I.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _e.sm_m ||
                (_e.sm_m = {
                  proto: _e,
                  fields: {
                    serial_number: {
                      n: 1,
                      br: l.qM.readString,
                      bw: l.gp.writeString,
                    },
                    controller_code: {
                      n: 2,
                      br: l.qM.readString,
                      bw: l.gp.writeString,
                    },
                  },
                }),
              _e.sm_m
            );
          }
          static MBF() {
            return _e.sm_mbf || (_e.sm_mbf = l.w0(_e.M())), _e.sm_mbf;
          }
          toObject(e = !1) {
            return _e.toObject(e, this);
          }
          static toObject(e, n) {
            return l.BT(_e.M(), e, n);
          }
          static fromObject(e) {
            return l.Uq(_e.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (v().BinaryReader)(e),
              r = new _e();
            return _e.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return l.zj(_e.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (v().BinaryWriter)();
            return _e.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            l.i0(_e.M(), e, n);
          }
          serializeBase64String() {
            var e = new (v().BinaryWriter)();
            return (
              _e.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_CompleteSteamControllerRegistration_Request";
          }
        }
        class Mn extends I.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), I.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return Mn.toObject(e, this);
          }
          static toObject(e, n) {
            return e ? { $jspbMessageInstance: n } : {};
          }
          static fromObject(e) {
            return new Mn();
          }
          static deserializeBinary(e) {
            let n = new (v().BinaryReader)(e),
              r = new Mn();
            return Mn.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return e;
          }
          serializeBinary() {
            var e = new (v().BinaryWriter)();
            return Mn.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {}
          serializeBase64String() {
            var e = new (v().BinaryWriter)();
            return (
              Mn.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_CompleteSteamControllerRegistration_Response";
          }
        }
        class et extends I.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              et.prototype.appidorname || l.Sg(et.M()),
              I.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              et.sm_m ||
                (et.sm_m = {
                  proto: et,
                  fields: {
                    appidorname: {
                      n: 1,
                      br: l.qM.readString,
                      bw: l.gp.writeString,
                    },
                    publishedfileid: {
                      n: 2,
                      br: l.qM.readUint64String,
                      bw: l.gp.writeUint64String,
                    },
                    templatename: {
                      n: 3,
                      br: l.qM.readString,
                      bw: l.gp.writeString,
                    },
                  },
                }),
              et.sm_m
            );
          }
          static MBF() {
            return et.sm_mbf || (et.sm_mbf = l.w0(et.M())), et.sm_mbf;
          }
          toObject(e = !1) {
            return et.toObject(e, this);
          }
          static toObject(e, n) {
            return l.BT(et.M(), e, n);
          }
          static fromObject(e) {
            return l.Uq(et.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (v().BinaryReader)(e),
              r = new et();
            return et.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return l.zj(et.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (v().BinaryWriter)();
            return et.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            l.i0(et.M(), e, n);
          }
          serializeBase64String() {
            var e = new (v().BinaryWriter)();
            return (
              et.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_SteamControllerSetConfig_ControllerConfig";
          }
        }
        class tt extends I.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              tt.prototype.serial_number || l.Sg(tt.M()),
              I.Message.initialize(this, e, 0, -1, [4], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              tt.sm_m ||
                (tt.sm_m = {
                  proto: tt,
                  fields: {
                    serial_number: {
                      n: 1,
                      br: l.qM.readString,
                      bw: l.gp.writeString,
                    },
                    controller_code: {
                      n: 2,
                      br: l.qM.readString,
                      bw: l.gp.writeString,
                    },
                    accountid: {
                      n: 3,
                      br: l.qM.readUint32,
                      bw: l.gp.writeUint32,
                    },
                    configurations: { n: 4, c: et, r: !0, q: !0 },
                    controller_type: {
                      n: 5,
                      d: 2,
                      br: l.qM.readInt32,
                      bw: l.gp.writeInt32,
                    },
                    only_for_this_serial: {
                      n: 6,
                      d: !1,
                      br: l.qM.readBool,
                      bw: l.gp.writeBool,
                    },
                  },
                }),
              tt.sm_m
            );
          }
          static MBF() {
            return tt.sm_mbf || (tt.sm_mbf = l.w0(tt.M())), tt.sm_mbf;
          }
          toObject(e = !1) {
            return tt.toObject(e, this);
          }
          static toObject(e, n) {
            return l.BT(tt.M(), e, n);
          }
          static fromObject(e) {
            return l.Uq(tt.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (v().BinaryReader)(e),
              r = new tt();
            return tt.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return l.zj(tt.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (v().BinaryWriter)();
            return tt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            l.i0(tt.M(), e, n);
          }
          serializeBase64String() {
            var e = new (v().BinaryWriter)();
            return (
              tt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_SteamControllerSetConfig_Request";
          }
        }
        class Ln extends I.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), I.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return Ln.toObject(e, this);
          }
          static toObject(e, n) {
            return e ? { $jspbMessageInstance: n } : {};
          }
          static fromObject(e) {
            return new Ln();
          }
          static deserializeBinary(e) {
            let n = new (v().BinaryReader)(e),
              r = new Ln();
            return Ln.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return e;
          }
          serializeBinary() {
            var e = new (v().BinaryWriter)();
            return Ln.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {}
          serializeBase64String() {
            var e = new (v().BinaryWriter)();
            return (
              Ln.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_SteamControllerSetConfig_Response";
          }
        }
        class nt extends I.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              nt.prototype.serial_number || l.Sg(nt.M()),
              I.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              nt.sm_m ||
                (nt.sm_m = {
                  proto: nt,
                  fields: {
                    serial_number: {
                      n: 1,
                      br: l.qM.readString,
                      bw: l.gp.writeString,
                    },
                    controller_code: {
                      n: 2,
                      br: l.qM.readString,
                      bw: l.gp.writeString,
                    },
                    accountid: {
                      n: 3,
                      br: l.qM.readUint32,
                      bw: l.gp.writeUint32,
                    },
                    appidorname: {
                      n: 4,
                      br: l.qM.readString,
                      bw: l.gp.writeString,
                    },
                    controller_type: {
                      n: 5,
                      d: 2,
                      br: l.qM.readInt32,
                      bw: l.gp.writeInt32,
                    },
                    only_for_this_serial: {
                      n: 6,
                      d: !1,
                      br: l.qM.readBool,
                      bw: l.gp.writeBool,
                    },
                  },
                }),
              nt.sm_m
            );
          }
          static MBF() {
            return nt.sm_mbf || (nt.sm_mbf = l.w0(nt.M())), nt.sm_mbf;
          }
          toObject(e = !1) {
            return nt.toObject(e, this);
          }
          static toObject(e, n) {
            return l.BT(nt.M(), e, n);
          }
          static fromObject(e) {
            return l.Uq(nt.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (v().BinaryReader)(e),
              r = new nt();
            return nt.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return l.zj(nt.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (v().BinaryWriter)();
            return nt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            l.i0(nt.M(), e, n);
          }
          serializeBase64String() {
            var e = new (v().BinaryWriter)();
            return (
              nt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_SteamControllerGetConfig_Request";
          }
        }
        class st extends I.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              st.prototype.appidorname || l.Sg(st.M()),
              I.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              st.sm_m ||
                (st.sm_m = {
                  proto: st,
                  fields: {
                    appidorname: {
                      n: 1,
                      br: l.qM.readString,
                      bw: l.gp.writeString,
                    },
                    publishedfileid: {
                      n: 2,
                      br: l.qM.readUint64String,
                      bw: l.gp.writeUint64String,
                    },
                    templatename: {
                      n: 3,
                      br: l.qM.readString,
                      bw: l.gp.writeString,
                    },
                    serial_number: {
                      n: 4,
                      d: "",
                      br: l.qM.readString,
                      bw: l.gp.writeString,
                    },
                    autosave: {
                      n: 5,
                      d: !1,
                      br: l.qM.readBool,
                      bw: l.gp.writeBool,
                    },
                  },
                }),
              st.sm_m
            );
          }
          static MBF() {
            return st.sm_mbf || (st.sm_mbf = l.w0(st.M())), st.sm_mbf;
          }
          toObject(e = !1) {
            return st.toObject(e, this);
          }
          static toObject(e, n) {
            return l.BT(st.M(), e, n);
          }
          static fromObject(e) {
            return l.Uq(st.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (v().BinaryReader)(e),
              r = new st();
            return st.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return l.zj(st.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (v().BinaryWriter)();
            return st.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            l.i0(st.M(), e, n);
          }
          serializeBase64String() {
            var e = new (v().BinaryWriter)();
            return (
              st.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_SteamControllerGetConfig_ControllerConfig";
          }
        }
        class rt extends I.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              rt.prototype.configurations || l.Sg(rt.M()),
              I.Message.initialize(this, e, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              rt.sm_m ||
                (rt.sm_m = {
                  proto: rt,
                  fields: { configurations: { n: 1, c: st, r: !0, q: !0 } },
                }),
              rt.sm_m
            );
          }
          static MBF() {
            return rt.sm_mbf || (rt.sm_mbf = l.w0(rt.M())), rt.sm_mbf;
          }
          toObject(e = !1) {
            return rt.toObject(e, this);
          }
          static toObject(e, n) {
            return l.BT(rt.M(), e, n);
          }
          static fromObject(e) {
            return l.Uq(rt.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (v().BinaryReader)(e),
              r = new rt();
            return rt.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return l.zj(rt.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (v().BinaryWriter)();
            return rt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            l.i0(rt.M(), e, n);
          }
          serializeBase64String() {
            var e = new (v().BinaryWriter)();
            return (
              rt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_SteamControllerGetConfig_Response";
          }
        }
        class it extends I.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              it.prototype.serial_number || l.Sg(it.M()),
              I.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              it.sm_m ||
                (it.sm_m = {
                  proto: it,
                  fields: {
                    serial_number: {
                      n: 1,
                      br: l.qM.readString,
                      bw: l.gp.writeString,
                    },
                    controller_code: {
                      n: 2,
                      br: l.qM.readString,
                      bw: l.gp.writeString,
                    },
                    accountid: {
                      n: 3,
                      br: l.qM.readUint32,
                      bw: l.gp.writeUint32,
                    },
                  },
                }),
              it.sm_m
            );
          }
          static MBF() {
            return it.sm_mbf || (it.sm_mbf = l.w0(it.M())), it.sm_mbf;
          }
          toObject(e = !1) {
            return it.toObject(e, this);
          }
          static toObject(e, n) {
            return l.BT(it.M(), e, n);
          }
          static fromObject(e) {
            return l.Uq(it.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (v().BinaryReader)(e),
              r = new it();
            return it.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return l.zj(it.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (v().BinaryWriter)();
            return it.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            l.i0(it.M(), e, n);
          }
          serializeBase64String() {
            var e = new (v().BinaryWriter)();
            return (
              it.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_DeRegisterSteamController_Request";
          }
        }
        class An extends I.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), I.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return An.toObject(e, this);
          }
          static toObject(e, n) {
            return e ? { $jspbMessageInstance: n } : {};
          }
          static fromObject(e) {
            return new An();
          }
          static deserializeBinary(e) {
            let n = new (v().BinaryReader)(e),
              r = new An();
            return An.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return e;
          }
          serializeBinary() {
            var e = new (v().BinaryWriter)();
            return An.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {}
          serializeBase64String() {
            var e = new (v().BinaryWriter)();
            return (
              An.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_DeRegisterSteamController_Response";
          }
        }
        class at extends I.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              at.prototype.serial_number || l.Sg(at.M()),
              I.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              at.sm_m ||
                (at.sm_m = {
                  proto: at,
                  fields: {
                    serial_number: {
                      n: 1,
                      br: l.qM.readString,
                      bw: l.gp.writeString,
                    },
                    publishedfileid: {
                      n: 2,
                      br: l.qM.readUint64String,
                      bw: l.gp.writeUint64String,
                    },
                    accountid: {
                      n: 3,
                      br: l.qM.readUint32,
                      bw: l.gp.writeUint32,
                    },
                  },
                }),
              at.sm_m
            );
          }
          static MBF() {
            return at.sm_mbf || (at.sm_mbf = l.w0(at.M())), at.sm_mbf;
          }
          toObject(e = !1) {
            return at.toObject(e, this);
          }
          static toObject(e, n) {
            return l.BT(at.M(), e, n);
          }
          static fromObject(e) {
            return l.Uq(at.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (v().BinaryReader)(e),
              r = new at();
            return at.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return l.zj(at.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (v().BinaryWriter)();
            return at.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            l.i0(at.M(), e, n);
          }
          serializeBase64String() {
            var e = new (v().BinaryWriter)();
            return (
              at.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_SetPersonalizationFile_Request";
          }
        }
        class On extends I.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), I.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return On.toObject(e, this);
          }
          static toObject(e, n) {
            return e ? { $jspbMessageInstance: n } : {};
          }
          static fromObject(e) {
            return new On();
          }
          static deserializeBinary(e) {
            let n = new (v().BinaryReader)(e),
              r = new On();
            return On.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return e;
          }
          serializeBinary() {
            var e = new (v().BinaryWriter)();
            return On.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {}
          serializeBase64String() {
            var e = new (v().BinaryWriter)();
            return (
              On.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_SetPersonalizationFile_Response";
          }
        }
        class ot extends I.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ot.prototype.serial_number || l.Sg(ot.M()),
              I.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ot.sm_m ||
                (ot.sm_m = {
                  proto: ot,
                  fields: {
                    serial_number: {
                      n: 1,
                      br: l.qM.readString,
                      bw: l.gp.writeString,
                    },
                    accountid: {
                      n: 2,
                      br: l.qM.readUint32,
                      bw: l.gp.writeUint32,
                    },
                  },
                }),
              ot.sm_m
            );
          }
          static MBF() {
            return ot.sm_mbf || (ot.sm_mbf = l.w0(ot.M())), ot.sm_mbf;
          }
          toObject(e = !1) {
            return ot.toObject(e, this);
          }
          static toObject(e, n) {
            return l.BT(ot.M(), e, n);
          }
          static fromObject(e) {
            return l.Uq(ot.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (v().BinaryReader)(e),
              r = new ot();
            return ot.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return l.zj(ot.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (v().BinaryWriter)();
            return ot.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            l.i0(ot.M(), e, n);
          }
          serializeBase64String() {
            var e = new (v().BinaryWriter)();
            return (
              ot.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_GetPersonalizationFile_Request";
          }
        }
        class lt extends I.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              lt.prototype.publishedfileid || l.Sg(lt.M()),
              I.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              lt.sm_m ||
                (lt.sm_m = {
                  proto: lt,
                  fields: {
                    publishedfileid: {
                      n: 1,
                      br: l.qM.readUint64String,
                      bw: l.gp.writeUint64String,
                    },
                  },
                }),
              lt.sm_m
            );
          }
          static MBF() {
            return lt.sm_mbf || (lt.sm_mbf = l.w0(lt.M())), lt.sm_mbf;
          }
          toObject(e = !1) {
            return lt.toObject(e, this);
          }
          static toObject(e, n) {
            return l.BT(lt.M(), e, n);
          }
          static fromObject(e) {
            return l.Uq(lt.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (v().BinaryReader)(e),
              r = new lt();
            return lt.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return l.zj(lt.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (v().BinaryWriter)();
            return lt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            l.i0(lt.M(), e, n);
          }
          serializeBase64String() {
            var e = new (v().BinaryWriter)();
            return (
              lt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_GetPersonalizationFile_Response";
          }
        }
        class ct extends I.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ct.prototype.product_name || l.Sg(ct.M()),
              I.Message.initialize(this, e, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ct.sm_m ||
                (ct.sm_m = {
                  proto: ct,
                  fields: {
                    product_name: {
                      n: 1,
                      br: l.qM.readString,
                      bw: l.gp.writeString,
                    },
                    values: { n: 2, c: dt, r: !0, q: !0 },
                  },
                }),
              ct.sm_m
            );
          }
          static MBF() {
            return ct.sm_mbf || (ct.sm_mbf = l.w0(ct.M())), ct.sm_mbf;
          }
          toObject(e = !1) {
            return ct.toObject(e, this);
          }
          static toObject(e, n) {
            return l.BT(ct.M(), e, n);
          }
          static fromObject(e) {
            return l.Uq(ct.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (v().BinaryReader)(e),
              r = new ct();
            return ct.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return l.zj(ct.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (v().BinaryWriter)();
            return ct.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            l.i0(ct.M(), e, n);
          }
          serializeBase64String() {
            var e = new (v().BinaryWriter)();
            return (
              ct.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_VRCompatibilityCheck_Request";
          }
        }
        class dt extends I.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              dt.prototype.key || l.Sg(dt.M()),
              I.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              dt.sm_m ||
                (dt.sm_m = {
                  proto: dt,
                  fields: {
                    key: { n: 1, br: l.qM.readString, bw: l.gp.writeString },
                    value: { n: 2, br: l.qM.readString, bw: l.gp.writeString },
                  },
                }),
              dt.sm_m
            );
          }
          static MBF() {
            return dt.sm_mbf || (dt.sm_mbf = l.w0(dt.M())), dt.sm_mbf;
          }
          toObject(e = !1) {
            return dt.toObject(e, this);
          }
          static toObject(e, n) {
            return l.BT(dt.M(), e, n);
          }
          static fromObject(e) {
            return l.Uq(dt.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (v().BinaryReader)(e),
              r = new dt();
            return dt.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return l.zj(dt.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (v().BinaryWriter)();
            return dt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            l.i0(dt.M(), e, n);
          }
          serializeBase64String() {
            var e = new (v().BinaryWriter)();
            return (
              dt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_VRCompatibilityCheck_Request_Pair";
          }
        }
        class ut extends I.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ut.prototype.values || l.Sg(ut.M()),
              I.Message.initialize(this, e, 0, -1, [1, 2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ut.sm_m ||
                (ut.sm_m = {
                  proto: ut,
                  fields: {
                    values: { n: 1, c: mt, r: !0, q: !0 },
                    components: { n: 2, c: gt, r: !0, q: !0 },
                  },
                }),
              ut.sm_m
            );
          }
          static MBF() {
            return ut.sm_mbf || (ut.sm_mbf = l.w0(ut.M())), ut.sm_mbf;
          }
          toObject(e = !1) {
            return ut.toObject(e, this);
          }
          static toObject(e, n) {
            return l.BT(ut.M(), e, n);
          }
          static fromObject(e) {
            return l.Uq(ut.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (v().BinaryReader)(e),
              r = new ut();
            return ut.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return l.zj(ut.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (v().BinaryWriter)();
            return ut.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            l.i0(ut.M(), e, n);
          }
          serializeBase64String() {
            var e = new (v().BinaryWriter)();
            return (
              ut.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_VRCompatibilityCheck_Response";
          }
        }
        class mt extends I.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              mt.prototype.key || l.Sg(mt.M()),
              I.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              mt.sm_m ||
                (mt.sm_m = {
                  proto: mt,
                  fields: {
                    key: { n: 1, br: l.qM.readString, bw: l.gp.writeString },
                    value: { n: 2, br: l.qM.readString, bw: l.gp.writeString },
                  },
                }),
              mt.sm_m
            );
          }
          static MBF() {
            return mt.sm_mbf || (mt.sm_mbf = l.w0(mt.M())), mt.sm_mbf;
          }
          toObject(e = !1) {
            return mt.toObject(e, this);
          }
          static toObject(e, n) {
            return l.BT(mt.M(), e, n);
          }
          static fromObject(e) {
            return l.Uq(mt.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (v().BinaryReader)(e),
              r = new mt();
            return mt.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return l.zj(mt.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (v().BinaryWriter)();
            return mt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            l.i0(mt.M(), e, n);
          }
          serializeBase64String() {
            var e = new (v().BinaryWriter)();
            return (
              mt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_VRCompatibilityCheck_Response_Pair";
          }
        }
        class gt extends I.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              gt.prototype.name || l.Sg(gt.M()),
              I.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              gt.sm_m ||
                (gt.sm_m = {
                  proto: gt,
                  fields: {
                    name: { n: 1, br: l.qM.readString, bw: l.gp.writeString },
                    image: { n: 2, br: l.qM.readString, bw: l.gp.writeString },
                    value: { n: 3, br: l.qM.readString, bw: l.gp.writeString },
                  },
                }),
              gt.sm_m
            );
          }
          static MBF() {
            return gt.sm_mbf || (gt.sm_mbf = l.w0(gt.M())), gt.sm_mbf;
          }
          toObject(e = !1) {
            return gt.toObject(e, this);
          }
          static toObject(e, n) {
            return l.BT(gt.M(), e, n);
          }
          static fromObject(e) {
            return l.Uq(gt.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (v().BinaryReader)(e),
              r = new gt();
            return gt.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return l.zj(gt.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (v().BinaryWriter)();
            return gt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            l.i0(gt.M(), e, n);
          }
          serializeBase64String() {
            var e = new (v().BinaryWriter)();
            return (
              gt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_VRCompatibilityCheck_Response_ComponentDisplay";
          }
        }
        class pt extends I.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              pt.prototype.serial_number || l.Sg(pt.M()),
              I.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              pt.sm_m ||
                (pt.sm_m = {
                  proto: pt,
                  fields: {
                    serial_number: {
                      n: 1,
                      br: l.qM.readString,
                      bw: l.gp.writeString,
                    },
                    manufacturer_serial_number: {
                      n: 2,
                      br: l.qM.readString,
                      bw: l.gp.writeString,
                    },
                    component_code: {
                      n: 3,
                      br: l.qM.readString,
                      bw: l.gp.writeString,
                    },
                    component_type: {
                      n: 4,
                      br: l.qM.readEnum,
                      bw: l.gp.writeEnum,
                    },
                    estimated_time_registered: {
                      n: 5,
                      br: l.qM.readInt32,
                      bw: l.gp.writeInt32,
                    },
                  },
                }),
              pt.sm_m
            );
          }
          static MBF() {
            return pt.sm_mbf || (pt.sm_mbf = l.w0(pt.M())), pt.sm_mbf;
          }
          toObject(e = !1) {
            return pt.toObject(e, this);
          }
          static toObject(e, n) {
            return l.BT(pt.M(), e, n);
          }
          static fromObject(e) {
            return l.Uq(pt.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (v().BinaryReader)(e),
              r = new pt();
            return pt.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return l.zj(pt.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (v().BinaryWriter)();
            return pt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            l.i0(pt.M(), e, n);
          }
          serializeBase64String() {
            var e = new (v().BinaryWriter)();
            return (
              pt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_RegisterValveIndexComponent_Request";
          }
        }
        class zn extends I.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), I.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return zn.toObject(e, this);
          }
          static toObject(e, n) {
            return e ? { $jspbMessageInstance: n } : {};
          }
          static fromObject(e) {
            return new zn();
          }
          static deserializeBinary(e) {
            let n = new (v().BinaryReader)(e),
              r = new zn();
            return zn.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return e;
          }
          serializeBinary() {
            var e = new (v().BinaryWriter)();
            return zn.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {}
          serializeBase64String() {
            var e = new (v().BinaryWriter)();
            return (
              zn.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_RegisterValveIndexComponent_Response";
          }
        }
        class ht extends I.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ht.prototype.serial_number || l.Sg(ht.M()),
              I.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ht.sm_m ||
                (ht.sm_m = {
                  proto: ht,
                  fields: {
                    serial_number: {
                      n: 1,
                      br: l.qM.readString,
                      bw: l.gp.writeString,
                    },
                    controller_code: {
                      n: 2,
                      br: l.qM.readString,
                      bw: l.gp.writeString,
                    },
                  },
                }),
              ht.sm_m
            );
          }
          static MBF() {
            return ht.sm_mbf || (ht.sm_mbf = l.w0(ht.M())), ht.sm_mbf;
          }
          toObject(e = !1) {
            return ht.toObject(e, this);
          }
          static toObject(e, n) {
            return l.BT(ht.M(), e, n);
          }
          static fromObject(e) {
            return l.Uq(ht.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (v().BinaryReader)(e),
              r = new ht();
            return ht.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return l.zj(ht.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (v().BinaryWriter)();
            return ht.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            l.i0(ht.M(), e, n);
          }
          serializeBase64String() {
            var e = new (v().BinaryWriter)();
            return (
              ht.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_GetSteamDeckComponents_Request";
          }
        }
        class ft extends I.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ft.prototype.json_components || l.Sg(ft.M()),
              I.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ft.sm_m ||
                (ft.sm_m = {
                  proto: ft,
                  fields: {
                    json_components: {
                      n: 1,
                      br: l.qM.readString,
                      bw: l.gp.writeString,
                    },
                  },
                }),
              ft.sm_m
            );
          }
          static MBF() {
            return ft.sm_mbf || (ft.sm_mbf = l.w0(ft.M())), ft.sm_mbf;
          }
          toObject(e = !1) {
            return ft.toObject(e, this);
          }
          static toObject(e, n) {
            return l.BT(ft.M(), e, n);
          }
          static fromObject(e) {
            return l.Uq(ft.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (v().BinaryReader)(e),
              r = new ft();
            return ft.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return l.zj(ft.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (v().BinaryWriter)();
            return ft.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            l.i0(ft.M(), e, n);
          }
          serializeBase64String() {
            var e = new (v().BinaryWriter)();
            return (
              ft.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_GetSteamDeckComponents_Response";
          }
        }
        class yt extends I.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              yt.prototype.friendly_name || l.Sg(yt.M()),
              I.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              yt.sm_m ||
                (yt.sm_m = {
                  proto: yt,
                  fields: {
                    friendly_name: {
                      n: 1,
                      br: l.qM.readString,
                      bw: l.gp.writeString,
                    },
                    system_info: { n: 2, c: Q.Lu },
                    backfill_user_reviews: {
                      n: 3,
                      br: l.qM.readBool,
                      bw: l.gp.writeBool,
                    },
                  },
                }),
              yt.sm_m
            );
          }
          static MBF() {
            return yt.sm_mbf || (yt.sm_mbf = l.w0(yt.M())), yt.sm_mbf;
          }
          toObject(e = !1) {
            return yt.toObject(e, this);
          }
          static toObject(e, n) {
            return l.BT(yt.M(), e, n);
          }
          static fromObject(e) {
            return l.Uq(yt.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (v().BinaryReader)(e),
              r = new yt();
            return yt.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return l.zj(yt.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (v().BinaryWriter)();
            return yt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            l.i0(yt.M(), e, n);
          }
          serializeBase64String() {
            var e = new (v().BinaryWriter)();
            return (
              yt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_SaveHardware_Request";
          }
        }
        class xt extends I.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              xt.prototype.hardware_id || l.Sg(xt.M()),
              I.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              xt.sm_m ||
                (xt.sm_m = {
                  proto: xt,
                  fields: {
                    hardware_id: {
                      n: 1,
                      br: l.qM.readUint64String,
                      bw: l.gp.writeUint64String,
                    },
                  },
                }),
              xt.sm_m
            );
          }
          static MBF() {
            return xt.sm_mbf || (xt.sm_mbf = l.w0(xt.M())), xt.sm_mbf;
          }
          toObject(e = !1) {
            return xt.toObject(e, this);
          }
          static toObject(e, n) {
            return l.BT(xt.M(), e, n);
          }
          static fromObject(e) {
            return l.Uq(xt.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (v().BinaryReader)(e),
              r = new xt();
            return xt.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return l.zj(xt.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (v().BinaryWriter)();
            return xt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            l.i0(xt.M(), e, n);
          }
          serializeBase64String() {
            var e = new (v().BinaryWriter)();
            return (
              xt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_SaveHardware_Response";
          }
        }
        class vt extends I.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              vt.prototype.hardware_id || l.Sg(vt.M()),
              I.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              vt.sm_m ||
                (vt.sm_m = {
                  proto: vt,
                  fields: {
                    hardware_id: {
                      n: 1,
                      br: l.qM.readUint64String,
                      bw: l.gp.writeUint64String,
                    },
                    friendly_name: {
                      n: 2,
                      br: l.qM.readString,
                      bw: l.gp.writeString,
                    },
                    timestamp_created: {
                      n: 3,
                      br: l.qM.readUint32,
                      bw: l.gp.writeUint32,
                    },
                    hardware_cluster_id: {
                      n: 4,
                      br: l.qM.readUint64String,
                      bw: l.gp.writeUint64String,
                    },
                    system_info: { n: 5, c: Q.Lu },
                  },
                }),
              vt.sm_m
            );
          }
          static MBF() {
            return vt.sm_mbf || (vt.sm_mbf = l.w0(vt.M())), vt.sm_mbf;
          }
          toObject(e = !1) {
            return vt.toObject(e, this);
          }
          static toObject(e, n) {
            return l.BT(vt.M(), e, n);
          }
          static fromObject(e) {
            return l.Uq(vt.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (v().BinaryReader)(e),
              r = new vt();
            return vt.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return l.zj(vt.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (v().BinaryWriter)();
            return vt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            l.i0(vt.M(), e, n);
          }
          serializeBase64String() {
            var e = new (v().BinaryWriter)();
            return (
              vt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_SavedHardware_Details";
          }
        }
        class jt extends I.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              jt.prototype.steamid || l.Sg(jt.M()),
              I.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              jt.sm_m ||
                (jt.sm_m = {
                  proto: jt,
                  fields: {
                    steamid: {
                      n: 1,
                      br: l.qM.readFixed64String,
                      bw: l.gp.writeFixed64String,
                    },
                  },
                }),
              jt.sm_m
            );
          }
          static MBF() {
            return jt.sm_mbf || (jt.sm_mbf = l.w0(jt.M())), jt.sm_mbf;
          }
          toObject(e = !1) {
            return jt.toObject(e, this);
          }
          static toObject(e, n) {
            return l.BT(jt.M(), e, n);
          }
          static fromObject(e) {
            return l.Uq(jt.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (v().BinaryReader)(e),
              r = new jt();
            return jt.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return l.zj(jt.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (v().BinaryWriter)();
            return jt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            l.i0(jt.M(), e, n);
          }
          serializeBase64String() {
            var e = new (v().BinaryWriter)();
            return (
              jt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_GetSavedHardwareList_Request";
          }
        }
        class bt extends I.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              bt.prototype.saved_hardware || l.Sg(bt.M()),
              I.Message.initialize(this, e, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              bt.sm_m ||
                (bt.sm_m = {
                  proto: bt,
                  fields: { saved_hardware: { n: 1, c: vt, r: !0, q: !0 } },
                }),
              bt.sm_m
            );
          }
          static MBF() {
            return bt.sm_mbf || (bt.sm_mbf = l.w0(bt.M())), bt.sm_mbf;
          }
          toObject(e = !1) {
            return bt.toObject(e, this);
          }
          static toObject(e, n) {
            return l.BT(bt.M(), e, n);
          }
          static fromObject(e) {
            return l.Uq(bt.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (v().BinaryReader)(e),
              r = new bt();
            return bt.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return l.zj(bt.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (v().BinaryWriter)();
            return bt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            l.i0(bt.M(), e, n);
          }
          serializeBase64String() {
            var e = new (v().BinaryWriter)();
            return (
              bt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_GetSavedHardwareList_Response";
          }
        }
        class Bt extends I.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Bt.prototype.hardware_id || l.Sg(Bt.M()),
              I.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Bt.sm_m ||
                (Bt.sm_m = {
                  proto: Bt,
                  fields: {
                    hardware_id: {
                      n: 1,
                      br: l.qM.readUint64String,
                      bw: l.gp.writeUint64String,
                    },
                    delete_hardware: {
                      n: 2,
                      br: l.qM.readBool,
                      bw: l.gp.writeBool,
                    },
                    friendly_name_update: {
                      n: 3,
                      br: l.qM.readString,
                      bw: l.gp.writeString,
                    },
                  },
                }),
              Bt.sm_m
            );
          }
          static MBF() {
            return Bt.sm_mbf || (Bt.sm_mbf = l.w0(Bt.M())), Bt.sm_mbf;
          }
          toObject(e = !1) {
            return Bt.toObject(e, this);
          }
          static toObject(e, n) {
            return l.BT(Bt.M(), e, n);
          }
          static fromObject(e) {
            return l.Uq(Bt.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (v().BinaryReader)(e),
              r = new Bt();
            return Bt.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return l.zj(Bt.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (v().BinaryWriter)();
            return Bt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            l.i0(Bt.M(), e, n);
          }
          serializeBase64String() {
            var e = new (v().BinaryWriter)();
            return (
              Bt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_ManageSavedHardware_Request";
          }
        }
        class Nn extends I.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), I.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return Nn.toObject(e, this);
          }
          static toObject(e, n) {
            return e ? { $jspbMessageInstance: n } : {};
          }
          static fromObject(e) {
            return new Nn();
          }
          static deserializeBinary(e) {
            let n = new (v().BinaryReader)(e),
              r = new Nn();
            return Nn.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return e;
          }
          serializeBinary() {
            var e = new (v().BinaryWriter)();
            return Nn.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {}
          serializeBase64String() {
            var e = new (v().BinaryWriter)();
            return (
              Nn.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_ManageSavedHardware_Response";
          }
        }
        class Pt extends I.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Pt.prototype.serial_number || l.Sg(Pt.M()),
              I.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Pt.sm_m ||
                (Pt.sm_m = {
                  proto: Pt,
                  fields: {
                    serial_number: {
                      n: 1,
                      br: l.qM.readString,
                      bw: l.gp.writeString,
                    },
                    machine_code: {
                      n: 2,
                      br: l.qM.readString,
                      bw: l.gp.writeString,
                    },
                  },
                }),
              Pt.sm_m
            );
          }
          static MBF() {
            return Pt.sm_mbf || (Pt.sm_mbf = l.w0(Pt.M())), Pt.sm_mbf;
          }
          toObject(e = !1) {
            return Pt.toObject(e, this);
          }
          static toObject(e, n) {
            return l.BT(Pt.M(), e, n);
          }
          static fromObject(e) {
            return l.Uq(Pt.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (v().BinaryReader)(e),
              r = new Pt();
            return Pt.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return l.zj(Pt.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (v().BinaryWriter)();
            return Pt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            l.i0(Pt.M(), e, n);
          }
          serializeBase64String() {
            var e = new (v().BinaryWriter)();
            return (
              Pt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_RegisterSteamMachine_Request";
          }
        }
        class Dn extends I.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), I.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return Dn.toObject(e, this);
          }
          static toObject(e, n) {
            return e ? { $jspbMessageInstance: n } : {};
          }
          static fromObject(e) {
            return new Dn();
          }
          static deserializeBinary(e) {
            let n = new (v().BinaryReader)(e),
              r = new Dn();
            return Dn.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return e;
          }
          serializeBinary() {
            var e = new (v().BinaryWriter)();
            return Dn.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {}
          serializeBase64String() {
            var e = new (v().BinaryWriter)();
            return (
              Dn.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_RegisterSteamMachine_Response";
          }
        }
        class Et extends I.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Et.prototype.controllers || l.Sg(Et.M()),
              I.Message.initialize(this, e, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Et.sm_m ||
                (Et.sm_m = {
                  proto: Et,
                  fields: { controllers: { n: 1, c: It, r: !0, q: !0 } },
                }),
              Et.sm_m
            );
          }
          static MBF() {
            return Et.sm_mbf || (Et.sm_mbf = l.w0(Et.M())), Et.sm_mbf;
          }
          toObject(e = !1) {
            return Et.toObject(e, this);
          }
          static toObject(e, n) {
            return l.BT(Et.M(), e, n);
          }
          static fromObject(e) {
            return l.Uq(Et.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (v().BinaryReader)(e),
              r = new Et();
            return Et.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return l.zj(Et.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (v().BinaryWriter)();
            return Et.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            l.i0(Et.M(), e, n);
          }
          serializeBase64String() {
            var e = new (v().BinaryWriter)();
            return (
              Et.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_UpdateControllerUsageReport_Request";
          }
        }
        class It extends I.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              It.prototype.serial_number || l.Sg(It.M()),
              I.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              It.sm_m ||
                (It.sm_m = {
                  proto: It,
                  fields: {
                    serial_number: {
                      n: 1,
                      br: l.qM.readString,
                      bw: l.gp.writeString,
                    },
                    controller_code: {
                      n: 2,
                      br: l.qM.readString,
                      bw: l.gp.writeString,
                    },
                  },
                }),
              It.sm_m
            );
          }
          static MBF() {
            return It.sm_mbf || (It.sm_mbf = l.w0(It.M())), It.sm_mbf;
          }
          toObject(e = !1) {
            return It.toObject(e, this);
          }
          static toObject(e, n) {
            return l.BT(It.M(), e, n);
          }
          static fromObject(e) {
            return l.Uq(It.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (v().BinaryReader)(e),
              r = new It();
            return It.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return l.zj(It.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (v().BinaryWriter)();
            return It.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            l.i0(It.M(), e, n);
          }
          serializeBase64String() {
            var e = new (v().BinaryWriter)();
            return (
              It.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_UpdateControllerUsageReport_Request_Controller";
          }
        }
        class Fn extends I.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), I.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return Fn.toObject(e, this);
          }
          static toObject(e, n) {
            return e ? { $jspbMessageInstance: n } : {};
          }
          static fromObject(e) {
            return new Fn();
          }
          static deserializeBinary(e) {
            let n = new (v().BinaryReader)(e),
              r = new Fn();
            return Fn.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return e;
          }
          serializeBinary() {
            var e = new (v().BinaryWriter)();
            return Fn.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {}
          serializeBase64String() {
            var e = new (v().BinaryWriter)();
            return (
              Fn.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_UpdateControllerUsageReport_Response";
          }
        }
        class Tt extends I.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Tt.prototype.serial || l.Sg(Tt.M()),
              I.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Tt.sm_m ||
                (Tt.sm_m = {
                  proto: Tt,
                  fields: {
                    serial: { n: 1, br: l.qM.readString, bw: l.gp.writeString },
                    component_serial: {
                      n: 2,
                      br: l.qM.readString,
                      bw: l.gp.writeString,
                    },
                  },
                }),
              Tt.sm_m
            );
          }
          static MBF() {
            return Tt.sm_mbf || (Tt.sm_mbf = l.w0(Tt.M())), Tt.sm_mbf;
          }
          toObject(e = !1) {
            return Tt.toObject(e, this);
          }
          static toObject(e, n) {
            return l.BT(Tt.M(), e, n);
          }
          static fromObject(e) {
            return l.Uq(Tt.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (v().BinaryReader)(e),
              r = new Tt();
            return Tt.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return l.zj(Tt.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (v().BinaryWriter)();
            return Tt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            l.i0(Tt.M(), e, n);
          }
          serializeBase64String() {
            var e = new (v().BinaryWriter)();
            return (
              Tt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardwarePromotions_RedeemFramePromoPackage_Request";
          }
        }
        class Wn extends I.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), I.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return Wn.toObject(e, this);
          }
          static toObject(e, n) {
            return e ? { $jspbMessageInstance: n } : {};
          }
          static fromObject(e) {
            return new Wn();
          }
          static deserializeBinary(e) {
            let n = new (v().BinaryReader)(e),
              r = new Wn();
            return Wn.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return e;
          }
          serializeBinary() {
            var e = new (v().BinaryWriter)();
            return Wn.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {}
          serializeBase64String() {
            var e = new (v().BinaryWriter)();
            return (
              Wn.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardwarePromotions_RedeemFramePromoPackage_Response";
          }
        }
        var Si;
        ((s) => {
          function e(M, z, R) {
            return M.SendMsg(
              "AccountHardware.RegisterSteamController#1",
              (0, Le.I8)(qe, z, R),
              Sn,
              { ePrivilege: 1 },
            );
          }
          s.RegisterSteamController = e;
          function n(M, z, R) {
            return M.SendMsg(
              "AccountHardware.CompleteSteamControllerRegistration#1",
              (0, Le.I8)(_e, z, R),
              Mn,
              { ePrivilege: 1 },
            );
          }
          s.CompleteSteamControllerRegistration = n;
          function r(M, z, R) {
            return M.SendMsg(
              "AccountHardware.QueryAccountsRegisteredToController#1",
              (0, Le.I8)(Ze, z, R),
              He,
              { ePrivilege: 1 },
            );
          }
          s.QueryAccountsRegisteredToController = r;
          function a(M, z, R) {
            return M.SendMsg(
              "AccountHardware.UpdateControllerUsageReport#1",
              (0, Le.I8)(Et, z, R),
              Fn,
              { ePrivilege: 1 },
            );
          }
          s.UpdateControllerUsageReport = a;
          function o(M, z, R) {
            return M.SendMsg(
              "AccountHardware.SetDesiredControllerConfigForApp#1",
              (0, Le.I8)(tt, z, R),
              Ln,
              { ePrivilege: 1 },
            );
          }
          s.SetDesiredControllerConfigForApp = o;
          function c(M, z, R) {
            return M.SendMsg(
              "AccountHardware.GetDesiredControllerConfigForApp#1",
              (0, Le.I8)(nt, z, R),
              rt,
              { ePrivilege: 1 },
            );
          }
          s.GetDesiredControllerConfigForApp = c;
          function d(M, z, R) {
            return M.SendMsg(
              "AccountHardware.DeRegisterSteamController#1",
              (0, Le.I8)(it, z, R),
              An,
              { ePrivilege: 1 },
            );
          }
          s.DeRegisterSteamController = d;
          function u(M, z, R) {
            return M.SendMsg(
              "AccountHardware.SetControllerPersonalizationFile#1",
              (0, Le.I8)(at, z, R),
              On,
              { ePrivilege: 1 },
            );
          }
          s.SetControllerPersonalizationFile = u;
          function p(M, z, R) {
            return M.SendMsg(
              "AccountHardware.GetControllerPersonalizationFile#1",
              (0, Le.I8)(ot, z, R),
              lt,
              { ePrivilege: 1 },
            );
          }
          s.GetControllerPersonalizationFile = p;
          function h(M, z, R) {
            return M.SendMsg(
              "AccountHardware.VRCompatibilityCheck#1",
              (0, Le.I8)(ct, z, R),
              ut,
              { ePrivilege: 0 },
            );
          }
          s.VRCompatibilityCheck = h;
          function f(M, z, R) {
            return M.SendMsg(
              "AccountHardware.RegisterValveIndexComponent#1",
              (0, Le.I8)(pt, z, R),
              zn,
              { ePrivilege: 1 },
            );
          }
          s.RegisterValveIndexComponent = f;
          function y(M, z, R) {
            return M.SendMsg(
              "AccountHardware.GetSteamDeckComponents#1",
              (0, Le.I8)(ht, z, R),
              ft,
              { ePrivilege: 1 },
            );
          }
          s.GetSteamDeckComponents = y;
          function j(M, z, R) {
            return M.SendMsg(
              "AccountHardware.SaveHardware#1",
              (0, Le.I8)(yt, z, R),
              xt,
              { ePrivilege: 1 },
            );
          }
          s.SaveHardware = j;
          function B(M, z, R) {
            return M.SendMsg(
              "AccountHardware.ManageSavedHardware#1",
              (0, Le.I8)(Bt, z, R),
              Nn,
              { ePrivilege: 1 },
            );
          }
          s.ManageSavedHardware = B;
          function P(M, z, R) {
            return M.SendMsg(
              "AccountHardware.GetSavedHardwareList#1",
              (0, Le.I8)(jt, z, R),
              bt,
              { ePrivilege: 1 },
            );
          }
          s.GetSavedHardwareList = P;
          function O(M, z, R) {
            return M.SendMsg(
              "AccountHardware.RegisterSteamMachine#1",
              (0, Le.I8)(Pt, z, R),
              Dn,
              { ePrivilege: 1 },
            );
          }
          s.RegisterSteamMachine = O;
        })(Si || (Si = {}));
        var Ro;
        ((s) => {
          function e(n, r, a) {
            return n.SendMsg(
              "AccountHardwarePromotions.RedeemFramePromoPackage#1",
              (0, Le.I8)(Tt, r, a),
              Wn,
              { ePrivilege: 1 },
            );
          }
          s.RedeemFramePromoPackage = e;
        })(Ro || (Ro = {}));
        var of = i(94162);
        function wo(s) {
          return ["SavedHardware", s];
        }
        function lf(s) {
          const e = (0, qt.KV)();
          return (0, cn.I)(cf(e, F.iA.steamid, s));
        }
        function cf(s, e, n) {
          return {
            queryKey: wo(e),
            queryFn: async () => {
              const r = await Si.GetSavedHardwareList(s, { steamid: e });
              if (!r.BSuccess())
                throw new Kr.x(
                  r.GetEResult(),
                  "Error from GetSavedHardwareList",
                );
              return r.Body().toObject().saved_hardware ?? [];
            },
            enabled: n,
            staleTime: 300 * 1e3,
          };
        }
        const df = 1770934110;
        function uf() {
          const s = (0, xn.jE)(),
            e = mf();
          m.useEffect(() => {
            if (e)
              return SteamClient.BrowserView.RegisterForMessageFromParent(
                (r) => {
                  r == "OnCloseSaveHardwareDialog" &&
                    s.invalidateQueries({ queryKey: wo(F.iA.steamid) });
                },
              ).unregister;
          }, [s, e]);
          const n = m.useCallback(() => {
            SteamClient.BrowserView.PostMessageToParent(
              "ShowSavedHardwareDialog",
              "",
            );
          }, []);
          return e ? n : void 0;
        }
        function mf() {
          if (
            !(0, _r.Dp)("BrowserView.PostMessageToParent") ||
            !(0, _r.Dp)("BrowserView.RegisterForMessageFromParent")
          )
            return !1;
          const s = (0, of.MP)();
          return s == 0 || s >= df;
        }
        var gf = i(74049),
          Uo = i.n(gf);
        const pf = "6862-8119-C23E-EA7B",
          hf = 8e3,
          ff = Va.Nb.filter((s) => s != "sc_schinese" && s != "arabic");
        function yf(s) {
          const { appid: e, review: n } = s,
            { data: r } = (0, E.J$)({ appid: e }),
            { data: a } = (0, Fs.jn)(F.iA.steamid),
            [o, c] = m.useState(() => Bf(n)),
            [d, u] = m.useState(""),
            p = nf(e, n?.recommendationid),
            h = p.mutate,
            f = m.useCallback((z) => {
              c((R) => ({ ...R, ...z }));
            }, []),
            y = m.useCallback((z) => f({ review: z }), [f]),
            j = r?.name ?? "",
            B = m.useCallback(() => {
              if (!o.review?.trim()) {
                u(g.Localize("#AppPage_WriteReview_ErrorNoText"));
                return;
              }
              if (o.voted_up === void 0) {
                u(g.Localize("#AppPage_WriteReview_ErrorNoRating", j));
                return;
              }
              u(""), h(o);
            }, [o, h, j]);
          if (!r) return null;
          m.use(g.Ready()), m.use($.Z.Ready());
          const P = !!n,
            O = r.type ?? w.uE.HT,
            M = p.error
              ? p.error.message ||
                g.Localize("#AppPage_WriteReview_ErrorPosting")
              : "";
          return (0, t.jsx)(Wt.YZ, {
            navEntryPreferPosition: V.iU.PREFERRED_CHILD,
            children: (0, t.jsxs)(A.s, {
              direction: "column",
              gap: "3",
              padding: "4",
              borderColor: "greyneutral-9 50%",
              children: [
                (0, t.jsx)(xf, { strAppName: j, eAppType: O, bUpdate: P }),
                (0, t.jsxs)(A.s, {
                  gap: "3",
                  children: [
                    !!a &&
                      (0, t.jsx)(yi.wm, {
                        playerLinkDetails: a,
                        size: "MediumLarge",
                        statusPosition: "border",
                        alt: "",
                      }),
                    (0, t.jsxs)(A.s, {
                      direction: "column",
                      gap: "3",
                      flexGrow: "1",
                      navProps: { preferredFocus: !0 },
                      children: [
                        (!!d || !!M) &&
                          (0, t.jsx)(x.EY, {
                            size: "3",
                            color: "red-10",
                            children: d || M,
                          }),
                        (0, t.jsx)(Hh, {
                          value: o.review ?? "",
                          onTextChange: y,
                          placeholder: g.Localize(
                            "#AppPage_WriteReview_Placeholder",
                          ),
                          rows: 4,
                          maxLength: hf,
                        }),
                        (0, t.jsx)(vf, {
                          review: o,
                          bFreeApp: !!r.is_free,
                          UpdateForm: f,
                        }),
                        (0, t.jsx)(bf, {
                          bVotedUp: o.voted_up,
                          eAppType: O,
                          bUpdate: P,
                          bPosting: p.isPending,
                          UpdateForm: f,
                          OnSubmit: B,
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          });
        }
        function xf(s) {
          const { strAppName: e, eAppType: n, bUpdate: r } = s;
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)(x.EY, {
                size: "5",
                color: "blue-11",
                children: g.Localize(
                  r
                    ? "#AppPage_WriteReview_TitleUpdate"
                    : "#AppPage_WriteReview_Title",
                  e,
                ),
              }),
              (0, t.jsx)(x.EY, {
                size: "3",
                color: "greyneutral-11",
                children: (0, ge.xh)(
                  g.Localize(
                    g.GetAppTypeLocKey("#AppPage_WriteReview_Desc", n),
                  ),
                  (0, t.jsx)(Pe.Y, {
                    underline: "always",
                    color: "blue-8",
                    href: `${F.TS.HELP_BASE_URL}faqs/view/${pf}`,
                  }),
                ),
              }),
              (0, gn.nA)(F.TS.EREALM) &&
                (0, t.jsx)(x.EY, {
                  size: "3",
                  color: "brown-10",
                  children: g.Localize("#AppPage_WriteReview_ChinaDisclaimer"),
                }),
            ],
          });
        }
        function vf(s) {
          const { review: e, bFreeApp: n, UpdateForm: r } = s,
            [a, o] = m.useState(!1),
            c = m.useCallback(() => o((P) => !P), []),
            d = m.useCallback((P) => r({ is_public: P.data }), [r]),
            u = m.useCallback((P) => r({ language: P.data }), [r]),
            p = m.useCallback((P) => r({ comments_disabled: !P }), [r]),
            h = m.useCallback((P) => r({ received_compensation: P }), [r]),
            f = g.Localize("#AppPage_WriteReview_Visibility"),
            y = g.Localize("#AppPage_WriteReview_Language"),
            j = [
              {
                label: g.Localize("#AppPage_WriteReview_VisibilityPublic"),
                data: !0,
              },
              {
                label: g.Localize("#AppPage_WriteReview_VisibilityFriends"),
                data: !1,
              },
            ],
            B = ff.map((P) => ({ label: (0, Fo.$A)(P), data: P }));
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)(Ie.$, {
                variant: "basic",
                color: "greyneutral",
                width: "100%",
                focusable: !0,
                onClick: c,
                children: (0, t.jsxs)(A.s, {
                  justify: "between",
                  align: "center",
                  width: "100%",
                  children: [
                    g.Localize("#AppPage_WriteReview_Settings"),
                    (0, t.jsx)(_h.V, { direction: a ? "up" : "down" }),
                  ],
                }),
              }),
              a &&
                (0, t.jsxs)(A.s, {
                  direction: "column",
                  gap: "2",
                  children: [
                    (0, t.jsxs)(A.s, {
                      justify: "between",
                      align: "center",
                      gap: "2",
                      children: [
                        (0, t.jsx)(x.EY, { size: "3", children: f }),
                        F.iA.is_limited
                          ? (0, t.jsx)(x.EY, {
                              size: "3",
                              color: "greyneutral-11",
                              children: g.Localize(
                                "#AppPage_WriteReview_VisibilityLimited",
                              ),
                            })
                          : (0, t.jsx)(ne.az, {
                              width: "50%",
                              children: (0, t.jsx)(Ti.ZU, {
                                controlled: !0,
                                rgOptions: j,
                                selectedOption: !!e.is_public,
                                onChange: d,
                                menuLabel: f,
                              }),
                            }),
                      ],
                    }),
                    !(0, gn.nA)(F.TS.EREALM) &&
                      (0, t.jsxs)(A.s, {
                        justify: "between",
                        align: "center",
                        gap: "2",
                        children: [
                          (0, t.jsx)(x.EY, { size: "3", children: y }),
                          (0, t.jsx)(ne.az, {
                            width: "50%",
                            children: (0, t.jsx)(Ti.ZU, {
                              controlled: !0,
                              rgOptions: B,
                              selectedOption: e.language,
                              onChange: u,
                              menuLabel: y,
                              strDefaultLabel: (0, Fo.$A)(e.language ?? ""),
                            }),
                          }),
                        ],
                      }),
                    (0, t.jsx)(Ii.S, {
                      checked: !e.comments_disabled,
                      onChange: p,
                      children: (0, t.jsx)(x.EY, {
                        size: "3",
                        children: g.Localize(
                          "#AppPage_WriteReview_AllowComments",
                        ),
                      }),
                    }),
                    (0, t.jsx)(jf, {
                      strSavedHardwareID: e.saved_hardware_id,
                      UpdateForm: r,
                    }),
                    !n &&
                      (0, t.jsx)(Ii.S, {
                        checked: !!e.received_compensation,
                        onChange: h,
                        children: (0, t.jsx)(x.EY, {
                          size: "3",
                          children: g.Localize(
                            "#AppPage_WriteReview_ReceivedFree",
                          ),
                        }),
                      }),
                    (0, t.jsx)(ef, { color: "greyneutral-9 50%", size: "4" }),
                  ],
                }),
            ],
          });
        }
        function jf(s) {
          const { strSavedHardwareID: e, UpdateForm: n } = s,
            [r, a] = m.useState(!!e),
            { data: o, isPending: c } = lf(r),
            d = uf(),
            u = m.useCallback(
              (j) => {
                a(j), j || n({ saved_hardware_id: void 0 });
              },
              [n],
            ),
            p = m.useCallback((j) => n({ saved_hardware_id: j.data }), [n]),
            h = o?.[0]?.hardware_id;
          m.useEffect(() => {
            r && !e && h && n({ saved_hardware_id: h });
          }, [r, e, h, n]);
          const f = g.Localize("#AppPage_WriteReview_PCSpecs"),
            y = (o ?? []).map((j) => ({
              label: j.friendly_name ?? "",
              data: j.hardware_id ?? "",
            }));
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)(Ii.S, {
                checked: r,
                onChange: u,
                children: (0, t.jsx)(x.EY, {
                  size: "3",
                  children: g.Localize("#AppPage_WriteReview_AttachHardware"),
                }),
              }),
              r &&
                (0, t.jsxs)(t.Fragment, {
                  children: [
                    (0, t.jsxs)(A.s, {
                      justify: "between",
                      align: "center",
                      gap: "2",
                      children: [
                        (0, t.jsx)(x.EY, { size: "3", children: f }),
                        (0, t.jsx)(ne.az, {
                          width: "50%",
                          children: (0, t.jsx)(Ti.ZU, {
                            controlled: !0,
                            disabled: !y.length,
                            rgOptions: y,
                            selectedOption: e,
                            onChange: p,
                            menuLabel: f,
                            strDefaultLabel: c
                              ? $.Z.Localize("#Loading")
                              : g.Localize("#AppPage_WriteReview_PCSpecsNone"),
                          }),
                        }),
                      ],
                    }),
                    !!d &&
                      (0, t.jsx)(A.s, {
                        justify: "end",
                        children: (0, t.jsx)(Ie.$, {
                          focusable: !0,
                          variant: "basic",
                          color: "greyneutral",
                          onClick: d,
                          children: g.Localize("#AppPage_WriteReview_AddPC"),
                        }),
                      }),
                  ],
                }),
            ],
          });
        }
        function bf(s) {
          const {
              bVotedUp: e,
              eAppType: n,
              bUpdate: r,
              bPosting: a,
              UpdateForm: o,
              OnSubmit: c,
            } = s,
            d = m.useCallback(() => o({ voted_up: !0 }), [o]),
            u = m.useCallback(() => o({ voted_up: !1 }), [o]);
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsxs)(A.s, {
                direction: "column",
                gap: "2",
                children: [
                  (0, t.jsx)(x.EY, {
                    size: "4",
                    children: g.Localize(
                      g.GetAppTypeLocKey("#AppPage_WriteReview_Recommend", n),
                    ),
                  }),
                  (0, t.jsxs)(A.s, {
                    gap: "2",
                    children: [
                      (0, t.jsx)(Co, {
                        bThumbsUp: !0,
                        bSelected: e === !0,
                        onSelect: d,
                      }),
                      (0, t.jsx)(Co, {
                        bThumbsUp: !1,
                        bSelected: e === !1,
                        onSelect: u,
                      }),
                    ],
                  }),
                ],
              }),
              (0, t.jsx)(A.s, {
                justify: "end",
                children: (0, t.jsx)(Ie.$, {
                  focusable: !0,
                  color: "blue",
                  loading: a,
                  onClick: c,
                  children: g.Localize(
                    r
                      ? "#AppPage_WriteReview_Update"
                      : "#AppPage_WriteReview_Post",
                  ),
                }),
              }),
            ],
          });
        }
        function Co(s) {
          const { bThumbsUp: e, bSelected: n, onSelect: r } = s;
          return (0, t.jsx)(Ie.$, {
            focusable: !0,
            variant: "basic",
            color: n ? "blue" : "greyneutral",
            onClick: r,
            children: (0, t.jsxs)(A.s, {
              direction: "row",
              gap: "1",
              align: "center",
              children: [
                (0, t.jsx)(N.twC, {
                  className: (0, D.A)(
                    Uo().VerdictIcon,
                    !e && Uo().VerdictIconDown,
                  ),
                }),
                (0, t.jsx)(x.EY, {
                  size: "4",
                  contrast: "title",
                  children: g.Localize(
                    e
                      ? "#AppPage_WriteReview_RecommendYes"
                      : "#AppPage_WriteReview_RecommendNo",
                  ),
                }),
              ],
            }),
          });
        }
        function Bf(s) {
          const e = (0, gn.nA)(F.TS.EREALM);
          return s
            ? {
                ...s,
                language: e || !s.language ? Ko() : s.language,
                comments_disabled: s.comments_disabled || e,
                is_public: s.is_public && !F.iA.is_limited,
              }
            : {
                is_public: !F.iA.is_limited,
                language: Ko(),
                comments_disabled: e,
              };
        }
        function Ko() {
          return (0, gn.nA)(F.TS.EREALM)
            ? "schinese"
            : F.TS.LANGUAGE == "korean"
              ? "koreana"
              : F.TS.LANGUAGE;
        }
        function Pf(s) {
          const { appid: e, ownReview: n } = s,
            r = Wh(e),
            [a, o] = m.useState(!1);
          return (
            m.useEffect(() => {
              r(n), o(!0);
            }, [n, r]),
            a ? (0, t.jsx)(Ef, { appid: e }) : null
          );
        }
        function Ef(s) {
          const { appid: e } = s,
            { data: n } = (0, E.J$)({ appid: e }),
            { data: r } = Dh(e),
            a = (0, kt.AP)(e),
            [o, c] = m.useState(!1),
            d = m.useCallback(() => c(!0), []);
          return n
            ? (0, t.jsx)(A.s, {
                direction: "column",
                paddingX: "5",
                paddingY: "3",
                background: "greyneutral-2 80%",
                children:
                  r && !o
                    ? (0, t.jsx)(Kh, {
                        review: r,
                        eAppType: n.type,
                        nSteamworksAppid: a,
                        onEdit: d,
                      })
                    : (0, t.jsx)(yf, { appid: e, review: r ?? null }),
              })
            : null;
        }
        var If = i(27990),
          Tf = i(48338),
          Sf = i.n(Tf),
          Mf = i(75995),
          Rn = i.n(Mf);
        const Go = {
          2023: Rn().Year2023,
          2024: Rn().Year2024,
          2025: Rn().Year2025,
        };
        function Lf(s) {
          const { appid: e } = s,
            { data: n } = (0, E._F)({ appid: e }),
            r = (n?.steam_award ?? [])
              .filter((a) => !!a.localization?.title && !!Go[a.award_year])
              .sort((a, o) => o.award_year - a.award_year);
          return r.length
            ? (0, t.jsx)(A.s, {
                direction: "column",
                gap: "4",
                children: r.map((a) =>
                  (0, t.jsx)(Af, { award: a }, `${a.award_year}_${a.voteid}`),
                ),
              })
            : null;
        }
        function Af(s) {
          const { award: e } = s,
            n = e.award_year,
            r = (0, wt.aL)(`${F.TS.STORE_BASE_URL}steamawards/${n}/`);
          return (0, t.jsxs)(T.Ii, {
            className: (0, D.A)(Rn().Banner, Go[n]),
            href: r,
            children: [
              (0, t.jsxs)("div", {
                className: Rn().Titles,
                children: [
                  (0, t.jsx)("span", {
                    className: Rn().AwardsTitle,
                    children: g.Localize("#AppPage_SteamAwards_Title"),
                  }),
                  (0, t.jsx)("span", { className: Rn().Year, children: n }),
                ],
              }),
              (0, t.jsx)("div", {
                className: Rn().Winner,
                children: g.Localize("#AppPage_SteamAwards_Winner"),
              }),
              (0, t.jsx)("div", {
                className: Rn().Category,
                children: e.localization.title,
              }),
            ],
          });
        }
        var Of = i(72390),
          hs = i.n(Of);
        function zf(s) {
          const { appid: e } = s,
            { metacritic: n, app: r, bShow: a, nScore: o } = Yo(e);
          return (
            m.use(g.Ready()),
            !a || !r
              ? null
              : (0, t.jsxs)(A.s, {
                  align: "start",
                  paddingY: "2",
                  direction: "row",
                  children: [
                    (0, t.jsx)(A.s, {
                      className: (0, D.A)(
                        hs().Score,
                        o > 0 ? Nf(o, r.type) : hs().Low,
                      ),
                      width: "50px",
                      height: "50px",
                      flexShrink: "0",
                      align: "center",
                      justify: "center",
                      children: o > 0 ? o : "NA",
                    }),
                    (0, t.jsxs)(A.s, {
                      direction: "column",
                      paddingLeft: "2",
                      children: [
                        (0, t.jsx)(Ff, {}),
                        o > 0
                          ? n?.url && (0, t.jsx)(Df, { url: n.url })
                          : (0, t.jsx)(x.EY, {
                              size: "2",
                              children: g.Localize(
                                "#AppPage_Metacritic_NotReviewed",
                              ),
                            }),
                      ],
                    }),
                  ],
                })
          );
        }
        function Yo(s) {
          const { data: e } = (0, E.J$)({ appid: s }),
            { data: n } = (0, E._F)({ appid: s }),
            r = e?.type === w.uE.ue ? e.related_items?.parent_appid : void 0,
            { data: a } = (0, E._F)(r ? { appid: r } : void 0);
          if (!e) return { bShow: !1, nScore: 0 };
          const o = n?.metacritic,
            c = (r ? a?.metacritic?.score : o?.score) ?? 0;
          return {
            metacritic: o,
            app: e,
            nScore: c,
            bShow: !!o?.always_show || c > 0,
          };
        }
        function Nf(s, e) {
          const n = e === w.uE.Wz || e === w.uE.gQ,
            r = n ? 61 : 75,
            a = n ? 40 : 50;
          return s >= r ? hs().High : s >= a ? hs().Medium : hs().Low;
        }
        function Df(s) {
          const { url: e } = s;
          return (0, t.jsxs)(Pe.Y, {
            size: "2",
            color: "blue-8",
            href: U.TS.IN_CLIENT ? `steam://openurl/${e}` : e,
            target: U.TS.IN_CLIENT ? void 0 : "_blank",
            children: [
              g.Localize("#AppPage_Metacritic_ReadCriticReviews"),
              (0, t.jsx)("span", {
                className: hs().ExternalIcon,
                children: (0, t.jsx)(N.GrD, {}),
              }),
            ],
          });
        }
        function Ff(s) {
          return (0, t.jsxs)(A.s, {
            direction: "row",
            gap: "1",
            align: "center",
            children: [
              (0, t.jsx)(_t, {
                src: `${U.TS.IMG_URL}v6/mc_logo_no_text.png`,
                alt: "",
                width: "24px",
                height: "24px",
                flexShrink: "0",
              }),
              (0, t.jsx)(x.EY, {
                size: "7",
                weight: "heavy",
                contrast: "title",
                children: "metacritic",
              }),
            ],
          });
        }
        function Wf(s) {
          const { appid: e } = s,
            { data: n } = (0, E._F)({ appid: e }),
            { bShow: r } = Yo(e);
          m.use(g.Ready());
          const a =
              n?.partner_awards_bbcode && n.partner_awards_bbcode.length > 0,
            o = n?.steam_award && n.steam_award.length > 0;
          return !a && !o && !r
            ? null
            : (0, t.jsxs)(ai, {
                className: Sf().StoreAwards,
                "flow-children": "column",
                children: [
                  (0, t.jsx)(dr, {
                    text: g.Localize("#AppPage_Awards_Header"),
                  }),
                  (0, t.jsx)(zf, { appid: e }),
                  (0, t.jsx)(Lf, { appid: e }),
                  n?.partner_awards_bbcode &&
                    (0, t.jsx)(es.n, { text: n.partner_awards_bbcode }),
                ],
              });
        }
        var vr = i(23386),
          ko = i(25509),
          Rf = i(30452),
          Vo = i.n(Rf),
          wf = i(94255),
          Ht = i.n(wf);
        function Mi(s) {
          const {
              title: e,
              link_text: n,
              url: r,
              linkType: a = "inline",
              children: o,
              total_count: c,
              link_footer: d,
              block_footer: u,
            } = s,
            p = (0, U.Qn)(),
            h = p
              ? (0, t.jsx)(x.EY, {
                  contrast: "title",
                  size: "2",
                  weight: "heavy",
                  style: { letterSpacing: "0.5px" },
                  children: e,
                })
              : (0, t.jsx)(x.EY, {
                  contrast: "body",
                  size: "2",
                  weight: "regular",
                  children: e,
                }),
            f = a == "inline" ? Ht().InlineLink : Ht().OverlayLink;
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)(Kf, { title: e, link_text: n ?? Li(c), url: r }),
              (0, t.jsx)("div", {
                className: "noOpinionatedGlobalStyles",
                children: (0, t.jsxs)(A.s, {
                  direction: "column",
                  gap: "2",
                  className: Ht().ShopLink,
                  children: [
                    (0, t.jsx)(T.Ii, {
                      className: (0, D.A)(f, Ht().Link),
                      "flow-children": "column",
                      focusClassName: Ht().ShowLink,
                      focusable: !0,
                      href: r,
                      "aria-label": Li(c),
                      children: (0, t.jsxs)(A.s, {
                        direction: "column",
                        gap: p ? "1" : "2",
                        children: [
                          h,
                          (0, t.jsxs)(ms.x, {
                            autoFlow: "column",
                            autoColumns: "1fr",
                            gap: "2",
                            alignItems: "center",
                            justifyContent: "center",
                            className: Ht().Items,
                            children: [o, (0, t.jsx)(Cf, { total_count: c })],
                          }),
                          n &&
                            (0, t.jsx)("div", {
                              className: Ht().ActivateLabel,
                              children: (0, t.jsx)(ne.az, {
                                background: "blue-8",
                                padding: "2",
                                radius: "sm",
                                children: (0, t.jsx)(x.EY, {
                                  size: "2",
                                  contrast: "title",
                                  children: n,
                                }),
                              }),
                            }),
                          d,
                        ],
                      }),
                    }),
                    u,
                  ],
                }),
              }),
            ],
          });
        }
        function Uf(s) {
          return s == null
            ? g.Localize("#ShopLink_ViewAll_NoCount_Narrow")
            : s >= 1e3
              ? g.Localize(
                  "#ShopLink_ViewAll_NarrowThousands",
                  (s / 1e3).toFixed(),
                )
              : g.Localize("#ShopLink_ViewAll_NarrowUnderThousand", s);
        }
        function Li(s) {
          return s == null
            ? g.Localize("#ShopLink_ViewAll_NoCount")
            : s >= 1e3
              ? g.Localize(
                  "#ShopLink_ViewAll_WideThousands",
                  (s / 1e3).toFixed(),
                )
              : g.Localize("#ShopLink_ViewAll_WideUnderThousand", s);
        }
        function Cf(s) {
          const { total_count: e } = s;
          return (0, t.jsx)(ms.x, {
            className: Ht().AllText,
            height: "100%",
            background: "greyneutral-5",
            children: (0, t.jsxs)(ne.az, {
              alignSelf: "center",
              textAlign: "center",
              justifySelf: "center",
              children: [
                (0, t.jsx)(x.EY, {
                  contrast: "description",
                  className: Ht().Wide,
                  children: Li(e),
                }),
                (0, t.jsx)(x.EY, {
                  contrast: "description",
                  className: Ht().Narrow,
                  children: Uf(e),
                }),
              ],
            }),
          });
        }
        function Kf(s) {
          const { title: e, link_text: n, url: r } = s;
          return (0, t.jsx)("a", {
            href: r,
            className: Ht().ResponsiveLink,
            children: (0, t.jsxs)(A.s, {
              direction: "row",
              background: "blue-3",
              padding: "2",
              align: "center",
              children: [
                (0, t.jsxs)(x.EY, {
                  contrast: "subtitle",
                  className: Ht().Text,
                  children: [e, " - ", n],
                }),
                (0, t.jsx)(x.EY, {
                  contrast: "subtitle",
                  className: Ht().Arrow,
                  children: (0, t.jsx)(Ae.cLJ, { direction: "right" }),
                }),
              ],
            }),
          });
        }
        function Gf(s, e) {
          switch (e.item_class) {
            case vr.sU:
            case vr.zs:
              return `${Qs.TS.COMMUNITY_CDN_URL}economy/profilebackground/items/${s}/${e.image_large}?size=320x200`;
            case vr.Tl:
              return (0, ko.k)(s, e.image_small);
            default:
              return (0, ko.k)(s, e.image_large);
          }
        }
        function Yf(s) {
          const { appid: e, items: n, total_count: r, shop_url: a } = s;
          return (
            m.use(g.Ready()),
            n?.length
              ? (0, t.jsx)(Mi, {
                  title: g.Localize("#AppPage_PointsShop_Header"),
                  url: a,
                  total_count: r,
                  children: n.map((o) =>
                    (0, t.jsx)(
                      ne.az,
                      {
                        alignSelf: "center",
                        children: (0, t.jsx)(_t, {
                          className: (0, D.A)(
                            Vo().ItemImage,
                            o.item_class == vr.sU && Vo().ProfileBackground,
                          ),
                          src: Gf(e, o),
                          alt: o.title,
                        }),
                      },
                      o.defid,
                    ),
                  ),
                })
              : null
          );
        }
        var kf = i(30820),
          Ai = i.n(kf);
        const Qo = 256;
        function Vf(s) {
          const e = `${Qs.TS.COMMUNITY_CDN_URL}economy/image/${s}/${Qo}fx${Qo}f`;
          return { src: e, srcSet: `${e} 1x, ${e}dpx2x 2x` };
        }
        function Qf(s) {
          const { items: e, shop_url: n } = s;
          return (
            m.use(g.Ready()),
            e?.length
              ? (0, t.jsx)(Mi, {
                  title: g.Localize("#AppPage_ItemShop_Header"),
                  link_text: g.Localize("#AppPage_ItemShop_ShopAll"),
                  url: n,
                  linkType: "overlay",
                  children: e.map((r) =>
                    (0, t.jsxs)(
                      ne.az,
                      {
                        className: Ai().Item,
                        textAlign: "center",
                        children: [
                          (0, t.jsx)(_t, {
                            className: Ai().ItemImage,
                            ...Vf(r.icon_url),
                            alt: r.name,
                          }),
                          (0, t.jsx)(x.EY, {
                            size: "2",
                            weight: "heavy",
                            className: Ai().Price,
                            children: r.price,
                          }),
                        ],
                      },
                      r.itemdefid,
                    ),
                  ),
                })
              : null
          );
        }
        const $o = "steamQueryPersist";
        function jv(s) {
          return s.meta?.[$o];
        }
        const Oi = m.createContext(void 0),
          bv = Oi.Provider;
        function Jo(s) {
          const { area: e, maxAgeSeconds: n, meta: r, ...a } = s,
            o = m.useContext(Oi),
            c = m.useMemo(() => zi(r, e, n), [r, e, n]);
          return (0, cn.I)({ ...a, meta: c, persister: o?.GetPersister(e) });
        }
        function Bv(s) {
          const e = React.useContext(Oi),
            n = React.useMemo(
              () =>
                s.queries.map((r) => {
                  const { area: a, maxAgeSeconds: o, meta: c, ...d } = r;
                  return {
                    ...d,
                    meta: zi(c, a, o),
                    persister: e?.GetPersister(a),
                  };
                }),
              [s.queries, e],
            );
          return useQueries({ queries: n, combine: s.combine });
        }
        function zi(s, e, n) {
          return { ...s, [$o]: { area: e, maxAgeSeconds: n } };
        }
        async function Pv(s, e) {
          const { area: n, maxAgeSeconds: r, meta: a, ...o } = e,
            c = { ...o, meta: zi(a, n, r), staleTime: 0 },
            d = s.getQueryState(o.queryKey);
          d &&
            d.fetchStatus !== "idle" &&
            (await s.fetchQuery(c).catch(() => {})),
            await s.fetchQuery(c);
        }
        const $f = Date.now();
        function Ev(s) {
          return s > 0 && s < $f;
        }
        var Zo = i(27386);
        const Cs = 0;
        function Ni(s, ...e) {
          return ["achievements", s, ...e];
        }
        const Jf = (s) => Ni(s, "schema");
        function Xo(s, e) {
          if (!(e === void 0 || e === ""))
            return `${F.TS.BASE_URL_SHARED_CDN}community_assets/images/apps/${s}/${e}`;
        }
        async function Zf(s, e, n) {
          const r = await Zo.xtC.GetGameAchievements(s, {
            appid: e,
            language: n,
          });
          if (r.GetEResult() === rn.p)
            return {
              appid: e,
              language: n,
              groups: [],
              schema_hash: 0,
              schema_version: 0,
            };
          if (r.GetEResult() !== rn.R)
            throw (
              (console.error(
                "Received error from GetGameAchievements",
                r.GetEResult(),
              ),
              new Error(`Error from GetGameAchievements: ${r.GetEResult()}`))
            );
          const a = {};
          a[Cs] = {
            id: Cs,
            archived: !1,
            developeronly: !1,
            ispublic: !0,
            dlcappid: 0,
            order: -1,
            achievements: [],
          };
          const o = r.Body().groups().toString();
          r
            .Body()
            .groups()
            .forEach((u) => {
              const p = u.groupid();
              a[p] = {
                id: p,
                name: u.localized_name(),
                archived: u.archived() ?? !1,
                ispublic: u.ispublic() ?? !0,
                developeronly: u.developeronly() ?? !1,
                dlcappid: u.dlcappid() ?? 0,
                order: u.order() ?? 0,
                achievements: [],
              };
            }),
            r
              .Body()
              .toObject()
              ?.achievements?.forEach((u) => {
                const p = u.groupid ?? Cs;
                a[p].achievements.push({
                  internal_key: u.internal_key ?? 0,
                  api_name: u.internal_name ?? "",
                  name: u.localized_name,
                  description: u.localized_desc,
                  hidden: u.hidden ?? !1,
                  archived: u.archived ?? !1,
                  icon_achieved: Xo(e, u.icon),
                  icon_unachieved: Xo(e, u.icon_gray),
                  groupid: u.groupid ?? Cs,
                  min_progress: u.min_progress_int ?? u.min_progress_float,
                  max_progress: u.max_progress_int ?? u.max_progress_float,
                });
              });
          const c = Object.values(a)
            .filter((u) => u.achievements.length > 0)
            .sort((u, p) => u.order - p.order);
          return {
            appid: e,
            language: n,
            groups: c,
            schema_hash: r.Body()?.schema_hash() ?? 0,
            schema_version: r.Body()?.schema_version() ?? 0,
          };
        }
        const Xf = (s) => Ni(s, "globalpercentages");
        async function Hf(s, e) {
          const n = await Zo.xtC.GetGlobalAchievementPercentages(s, {
            appid: e,
          });
          if (n.GetEResult() === rn.p) return { percentages: {} };
          if (n.GetEResult() !== rn.R)
            throw (
              (console.error(
                "Received error from GetGlobalAchievementPercentages",
                n.GetEResult(),
              ),
              new Error(
                `Error from GetGlobalAchievementPercentages: ${n.GetEResult()}`,
              ))
            );
          return {
            percentages: n
              .Body()
              .achievements()
              .reduce((a, o) => {
                const c = o.internal_key();
                return (
                  c === void 0 || (a[c] = o.player_percent_unlocked() ?? 0.1), a
                );
              }, {}),
          };
        }
        function Iv(s, e) {
          return Ni(s, "user_achievements", e);
        }
        function Di(s, e, n, r) {
          const a = (n?.achievements() ?? []).reduce((c, d) => {
              const u = d.internal_key();
              return (
                (c[u] = {
                  internal_key: u,
                  unlocked: d.unlocked(),
                  unlock_time: d.unlock_time(),
                  progress: d.progress_int() ?? d.progress_float(),
                }),
                c
              );
            }, {}),
            o = (n?.groups() ?? []).reduce((c, d) => {
              const u = d.groupid(),
                p = d.is_completed(),
                h = d.time_completed();
              return (
                (c[u] = {
                  groupid: u,
                  is_achievable: d.is_achievable(),
                  completed_achievements: d.completed_achievements() ?? 0,
                  is_completed: p === void 0 ? !1 : p,
                  time_completed: h || void 0,
                }),
                c
              );
            }, {});
          return {
            appid: s,
            steamid: e,
            achievements: a,
            groups: o,
            schema_hash: r,
          };
        }
        function Tv(s, e) {
          if (!s) return e;
          const n = { ...s.groups };
          for (const r of Object.values(e.groups)) {
            const a = s.groups[r.groupid];
            n[r.groupid] = {
              ...r,
              is_completed: (a?.is_completed ?? !1) || r.is_completed,
              time_completed: a?.time_completed ?? r.time_completed,
            };
          }
          return {
            ...s,
            achievements: { ...s.achievements, ...e.achievements },
            groups: n,
          };
        }
        class qf extends Error {
          constructor() {
            super("GetUserAchievements: server unreachable");
          }
        }
        function _f(s) {
          const e = s.Hdr().transport_error();
          return e === k_ETransportError_RequestNotSent ||
            e === k_ETransportError_ResponseNotReceived
            ? !0
            : s.GetEResult() === k_EResultNoConnection ||
                s.GetEResult() === k_EResultTimeout;
        }
        async function Sv(s, e, n) {
          if (n == "" || n == "0") return Di(e, n, void 0, 0);
          const r = await PlayerService.GetUserAchievements(s, {
            appid: e,
            steamid: n,
          });
          if (
            r.GetEResult() === k_EResultAccessDenied ||
            r.GetEResult() === k_EResultAccountNotFound
          )
            return Di(e, n, void 0, 0);
          if (_f(r)) throw new qf();
          if (r.GetEResult() !== k_EResultOK)
            throw (
              (console.error(
                "Received error from GetUserAchievements",
                r.GetEResult(),
              ),
              new Error(`Error from GetUserAchievements: ${r.GetEResult()}`))
            );
          return Di(e, n, r.Body(), r.Body()?.schema_hash() ?? 0);
        }
        const ye = {};
        (ye.arabic = () => i.e(94507).then(i.t.bind(i, 94507, 19))),
          (ye.brazilian = () => i.e(29815).then(i.t.bind(i, 29815, 19))),
          (ye.bulgarian = () => i.e(79200).then(i.t.bind(i, 79200, 19))),
          (ye.czech = () => i.e(81142).then(i.t.bind(i, 81142, 19))),
          (ye.danish = () => i.e(42394).then(i.t.bind(i, 42394, 19))),
          (ye.dutch = () => i.e(80559).then(i.t.bind(i, 80559, 19))),
          (ye.english = () => i.e(92885).then(i.t.bind(i, 92885, 19))),
          (ye.finnish = () => i.e(22754).then(i.t.bind(i, 22754, 19))),
          (ye.french = () => i.e(89627).then(i.t.bind(i, 89627, 19))),
          (ye.german = () => i.e(8281).then(i.t.bind(i, 8281, 19))),
          (ye.greek = () => i.e(53749).then(i.t.bind(i, 53749, 19))),
          (ye.hungarian = () => i.e(88180).then(i.t.bind(i, 88180, 19))),
          (ye.indonesian = () => i.e(13303).then(i.t.bind(i, 13303, 19))),
          (ye.italian = () => i.e(28757).then(i.t.bind(i, 28757, 19))),
          (ye.japanese = () => i.e(88468).then(i.t.bind(i, 88468, 19))),
          (ye.koreana = () => i.e(82558).then(i.t.bind(i, 82558, 19))),
          (ye.latam = () => i.e(3894).then(i.t.bind(i, 3894, 19))),
          (ye.malay = () => i.e(35957).then(i.t.bind(i, 35957, 19))),
          (ye.norwegian = () => i.e(43081).then(i.t.bind(i, 43081, 19))),
          (ye.polish = () => i.e(63822).then(i.t.bind(i, 63822, 19))),
          (ye.portuguese = () => i.e(16470).then(i.t.bind(i, 16470, 19))),
          (ye.romanian = () => i.e(46488).then(i.t.bind(i, 46488, 19))),
          (ye.russian = () => i.e(50272).then(i.t.bind(i, 50272, 19))),
          (ye.sc_schinese = () => i.e(88794).then(i.t.bind(i, 88794, 19))),
          (ye.schinese = () => i.e(15171).then(i.t.bind(i, 15171, 19))),
          (ye.spanish = () => i.e(34341).then(i.t.bind(i, 34341, 19))),
          (ye.swedish = () => i.e(61844).then(i.t.bind(i, 61844, 19))),
          (ye.tchinese = () => i.e(71088).then(i.t.bind(i, 71088, 19))),
          (ye.thai = () => i.e(49829).then(i.t.bind(i, 49829, 19))),
          (ye.turkish = () => i.e(95917).then(i.t.bind(i, 95917, 19))),
          (ye.ukrainian = () => i.e(15151).then(i.t.bind(i, 15151, 19))),
          (ye.vietnamese = () => i.e(53460).then(i.t.bind(i, 53460, 19)));
        async function ey(s) {
          if (ye[s]) return ye[s]();
        }
        const Ho = (0, Sr.l)(ey);
        function qo(s) {
          return s?.bNoRetryOnError
            ? {
                retry: !1,
                retryOnMount: !1,
                refetchOnWindowFocus: !1,
                refetchOnReconnect: !1,
              }
            : {};
        }
        function ty(s) {
          return {
            ...s,
            groups: s.groups.map((e) =>
              e.id === Cs
                ? { ...e, name: Ho.Localize("#Achievements_Set_BaseGame") }
                : e,
            ),
          };
        }
        function _o(s, e) {
          return {
            queryKey: Jf(e),
            queryFn: async () => {
              const n = F.TS.LANGUAGE;
              return Zf(s, e, n);
            },
            select: ty,
            staleTime: 1440 * 60 * 1e3,
            area: "achievements",
          };
        }
        function jr(s, e) {
          const n = (0, qt.KV)();
          return Jo({ ..._o(n, s), ...qo(e) });
        }
        function ny(s, e) {
          return {
            queryKey: Xf(e),
            queryFn: async () => Hf(s, e),
            staleTime: 1440 * 60 * 1e3,
            area: "achievements",
          };
        }
        function Ks(s, e) {
          const n = (0, qt.KV)();
          return Jo({ ...ny(n, s), ...qo(e) });
        }
        function Mv(s, e) {
          const { data: n } = Ks(s);
          if (n) return n.percentages[e] ?? void 0;
        }
        function Lv(s, e) {
          const n = jr(s),
            r = Ks(s),
            a = n.data,
            o = r.data;
          if (!a || !o)
            return { data: void 0, isPending: n.isPending || r.isPending };
          const c = e ? GetAchievementInternalKeyByApiName(a, e) : void 0;
          return {
            data: c === void 0 ? void 0 : (o.percentages[c] ?? void 0),
            isPending: !1,
          };
        }
        function br(s, e, n) {
          return {
            queryKey: GetUserAchievementsQueryKey(e, n),
            queryFn: async () => GetUserAchievements(s, e, n),
            staleTime: 600 * 1e3,
            area: "achievements",
          };
        }
        function el(s, e, n) {
          const { fnFetchLocalUserAchievements: r } = useAchievementsHost(),
            a = !!r && !!e && n.error instanceof ServerUnreachableError,
            o = useQuery({
              queryKey: GetAppAchievementsQueryKey(
                s,
                "local_user_achievements",
                e,
                n.errorUpdatedAt,
              ),
              queryFn: async () => (await r(s, e)) ?? null,
              enabled: a,
              staleTime: 1 / 0,
              gcTime: 60 * 1e3,
            }),
            c = a ? o.data : void 0,
            d = o.dataUpdatedAt;
          return useMemo(
            () =>
              c
                ? {
                    ...n,
                    data: MergeLocalUserAchievements(n.data, c),
                    dataUpdatedAt: Math.max(n.dataUpdatedAt, d),
                  }
                : n,
            [n, c, d],
          );
        }
        function sy(s, e) {
          const n = useActiveServiceTransport(),
            r = usePersistedQuery(br(n, s, e));
          return el(s, e, r);
        }
        function ry(s) {
          return s.map((e) => e.data);
        }
        function Av(s, e) {
          const n = useActiveServiceTransport(),
            r = useMemo(() => e.map((a) => br(n, s, a)), [n, s, e]);
          return usePersistedQueries({ queries: r, combine: ry });
        }
        function Ov(s, e) {
          const n = useActiveServiceTransport(),
            r = jr(s),
            a = Ks(s),
            o = usePersistedQuery({ ...br(n, s, e ?? ""), enabled: !!e }),
            c = el(s, e ?? "", o),
            d = !!e,
            u = r.data,
            p = d ? c.data : void 0,
            h = u != null && (!d || p !== void 0),
            f = () => (h ? GetAchievementsSummary(u, a.data, p) : void 0),
            y = useQuery({
              queryKey: GetAppAchievementsQueryKey(
                s,
                "summary",
                e ?? "",
                r.dataUpdatedAt,
                a.dataUpdatedAt,
                d ? c.dataUpdatedAt : 0,
              ),
              queryFn: () => {
                const z = f();
                if (z === void 0)
                  throw new Error("No achievements schema to summarize");
                return z;
              },
              initialData: f,
              staleTime: 1 / 0,
              gcTime: 60 * 1e3,
              enabled: h,
            }),
            j = d ? [r, c] : [r],
            B = j.find((z) => z.data === void 0),
            P = B?.isPending ?? !1,
            O = j.find((z) => z.isError),
            M = B ? void 0 : y.data;
          return {
            isPending: P,
            isError: !P && M === void 0,
            error: O?.error ?? null,
            data: M,
          };
        }
        function zv(s, e) {
          const n = jr(s),
            r = Ks(s),
            a = sy(s, e),
            o = n.data,
            c = a.data,
            d = !!o && !!c,
            u = () => (d ? GetAchievementsByStatus(o, r.data, c) : void 0),
            p = useQuery({
              queryKey: GetAppAchievementsQueryKey(
                s,
                "by_status",
                e,
                n.dataUpdatedAt,
                r.dataUpdatedAt,
                a.dataUpdatedAt,
              ),
              queryFn: () => {
                const h = u();
                if (h === void 0)
                  throw new Error("No achievements to split by status");
                return h;
              },
              initialData: u,
              staleTime: 1 / 0,
              gcTime: 60 * 1e3,
              enabled: d,
            });
          return {
            data: d ? p.data : void 0,
            isPending: !d && (n.isPending || a.isPending),
          };
        }
        async function Nv(s, e, n, r) {
          await FetchPersistedQuery(s, br(e, n, r));
        }
        async function Dv(s, e, n) {
          await FetchPersistedQuery(s, _o(e, n));
        }
        var iy = i(93237),
          wn = i.n(iy);
        const ay = 10;
        function oy(s) {
          return s === void 0 ? !1 : s <= ay;
        }
        const tl = new WeakMap();
        function Fv(s, e) {
          for (const n of s.groups) {
            let r = tl.get(n.achievements);
            r ||
              ((r = new Map(
                n.achievements.map((o) => [o.api_name, o.internal_key]),
              )),
              tl.set(n.achievements, r));
            const a = r.get(e);
            if (a !== void 0) return a;
          }
        }
        function Wv(s) {
          return (s?.groups_achievable?.total ?? 0) != 0;
        }
        function ly(s, e, n) {
          return s.achievements.some(
            (r) => (!s.archived && !r.archived) || cy(r, e, n),
          );
        }
        function cy(s, e, n) {
          return (
            e?.achievements[s.internal_key]?.unlocked == !0 ||
            (n?.some((r) => r?.achievements[s.internal_key]?.unlocked == !0) ??
              !1)
          );
        }
        function Rv(s, e) {
          if (Array.isArray(s))
            return (
              s.length > 1 ||
              (s.length == 1 && s[0] !== k_DefaultAchievementGroup)
            );
          {
            const n = s.groups.filter((r) => ly(r, e));
            return (
              n.length > 1 ||
              (n.length == 1 && n[0].id !== k_DefaultAchievementGroup)
            );
          }
        }
        function wv(s, e) {
          return new Intl.DateTimeFormat(GetPreferredLocales(), {
            year: "numeric",
            month: "short",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            hourCycle: e ? "h23" : void 0,
          }).format(new Date(s * 1e3));
        }
        function Uv(s, e) {
          const n = e > 0 ? s / e : 0,
            r = n.toLocaleString(GetPreferredLocales(), {
              style: "percent",
              maximumFractionDigits: e > 100 ? 1 : 0,
            });
          return { percentUnlocked: n, percentUnlockedStr: r };
        }
        function dy(s) {
          return s === void 0
            ? ""
            : (s / 100).toLocaleString(GetPreferredLocales(), {
                style: "percent",
                maximumFractionDigits: 1,
                minimumFractionDigits: 1,
              });
        }
        function Cv(s) {
          return AchievementsLocalization.Localize(
            "#Achievements_Tooltip_GlobalUnlockPercent",
            dy(s),
          );
        }
        function Kv(s, e) {
          return e
            ? {
                name: AchievementsLocalization.Localize(
                  "#AchievementSpoilerName",
                ),
                description: AchievementsLocalization.Localize(
                  "#AchievementSpoilerDescription",
                ),
              }
            : { name: s.name ?? "", description: s.description ?? "" };
        }
        function Gv(s) {
          return s >= 17891964e-1;
        }
        function uy(s) {
          if (s !== void 0)
            return { "--icon-size": s == "fill" ? "100%" : `${s}px` };
        }
        function my(s) {
          const {
              imgURL: e,
              glow: n,
              pauseAnimation: r,
              hidden: a,
              alt: o,
              hideNativeTooltip: c = !1,
              className: d,
              size: u,
              ...p
            } = s,
            [h, f] = m.useState(!1),
            y = m.useCallback((P) => {
              P &&
                (P.complete
                  ? f(!0)
                  : (P.onload = () => {
                      f(!0);
                    }));
            }, []),
            j = n && (a || h),
            B = uy(u);
          return (0, t.jsxs)("div", {
            className: (0, D.A)(
              wn().AchievementIconWrapper,
              d,
              r && wn().RareAchievementNoAnimation,
            ),
            style: B,
            ...p,
            children: [
              j &&
                (0, t.jsx)("div", {
                  className: wn().RareAchievementIconGlowContainerRoot,
                  children: (0, t.jsx)("div", {
                    className: wn().RareAchievementIconGlowContainer,
                    children: (0, t.jsx)("div", {
                      className: wn().RareAchievementIconGlow,
                    }),
                  }),
                }),
              a
                ? (0, t.jsx)("div", {
                    className: (0, D.A)(wn().HiddenLabel, j && wn().IconGlow),
                    children: "?",
                  })
                : (0, t.jsx)("img", {
                    ref: y,
                    className: (0, D.A)(wn().Icon, j && wn().IconGlow),
                    src: e == "" ? void 0 : e,
                    loading: "lazy",
                    alt: o,
                    title: c ? void 0 : o,
                  }),
            ],
          });
        }
        function nl(s) {
          const {
              achievement: e,
              globalUnlockPercentage: n,
              unlocked: r,
              forceVisible: a = !1,
              hidden: o,
              ...c
            } = s,
            d = o ?? (r ? !1 : !a && e.hidden),
            u = (r ? e.icon_achieved : e.icon_unachieved) ?? "",
            p = r && oy(n),
            h = d ? Ho.Localize("#AchievementSpoilerName") : (e.name ?? " ");
          return (0, t.jsx)(my, {
            hidden: d,
            imgURL: u,
            glow: p,
            alt: h,
            ...c,
          });
        }
        function Yv(s) {
          const {
              hidden: e,
              forceVisible: n,
              size: r,
              className: a,
              style: o,
              onClick: c,
              unlocked: d,
              ...u
            } = s,
            { appid: p, achievement: h, progress: f } = u,
            y = useGlobalAchievementPercentage(p, h.internal_key);
          return jsx(AchievementToolTip, {
            ...u,
            children: jsx(nl, {
              achievement: h,
              globalUnlockPercentage: y,
              unlocked: d ?? f?.unlocked ?? !1,
              hidden: e,
              forceVisible: n,
              size: r,
              className: a,
              style: o,
              onClick: c,
              hideNativeTooltip: !0,
            }),
          });
        }
        function gy(s, e) {
          const { data: n } = jr(s);
          if (!n || e) return;
          const r = new Set();
          let a = 0;
          const o = [];
          for (const c of n.groups) {
            const d = c.achievements.filter((u) => !u.archived);
            if (!(!d || !d?.length || c.archived)) {
              if (e) {
                if (c.dlcappid != e) continue;
              } else if (c.dlcappid) {
                r.add(c.dlcappid);
                continue;
              }
              o.push(...d), a++;
            }
          }
          if (o?.length)
            return { achievements: o, nDLCCount: 0, nGroupCount: 1 };
        }
        function py(s) {
          const { appid: e, dlcappid: n, iconCount: r = 4 } = s;
          m.use(g.Ready());
          const a = gy(e, n),
            o = Ks(e),
            c = (0, U.Qn)();
          if (!a || o.isPending) return null;
          const { achievements: d, nDLCCount: u, nGroupCount: p } = a,
            f = d
              .sort((z, R) => {
                if (!z.hidden && R.hidden) return -1;
                if (z.hidden && !R.hidden) return 1;
                const G = o?.data?.percentages?.[z.internal_key] ?? 0;
                return (o?.data?.percentages?.[R.internal_key] ?? 0) - G;
              })
              .slice(0, r),
            y = Array(r - f.length).fill(void 0),
            j = (0, di.v)({ appid: e, dlc: n }),
            B = (0, di.v)({ appid: e, dlc: "all" }),
            P =
              u == 0 || !c
                ? null
                : (0, t.jsx)(x.EY, {
                    color: "plum-8",
                    size: "2",
                    children: g.Localize("#AppPage_Achievements_DLCCount", u),
                  }),
            O =
              u == 0 || c
                ? null
                : (0, t.jsxs)(t.Fragment, {
                    children: [
                      p > 1 &&
                        (0, t.jsx)(Pe.Y, {
                          size: "2",
                          contrast: "title",
                          href: j,
                          children: g.Localize(
                            "#AppPage_Achievements_GroupCount",
                            p,
                          ),
                        }),
                      (0, t.jsx)(Pe.Y, {
                        size: "2",
                        color: "plum-8",
                        href: B,
                        children: g.Localize(
                          "#AppPage_Achievements_DLCCount",
                          u,
                        ),
                      }),
                    ],
                  }),
            M =
              p <= 1 || !c
                ? void 0
                : g.Localize("#AppPage_Achievements_GroupCount", p);
          return (0, t.jsxs)(Mi, {
            title: g.Localize(
              c
                ? "#AppPage_Achievements_Header"
                : "#AppPage_Achievements_Header_Desktop",
            ),
            link_text: M,
            total_count: d?.length,
            url: j,
            link_footer: P,
            block_footer: O,
            children: [
              y.map((z, R) => (0, t.jsx)(ne.az, {}, R)),
              f.map((z, R) =>
                (0, t.jsx)(
                  nl,
                  { achievement: z, unlocked: !z.hidden, size: "fill" },
                  z.api_name,
                ),
              ),
            ],
          });
        }
        var hy = i(73644),
          fy = i(4515),
          yy = i(35177),
          kn = i.n(yy);
        const xy = 30,
          vy = [
            {
              eType: w.xY.kT,
              strPath: "quickref",
              strLabel: "#AppPage_LinksAndInfo_QuickRef",
            },
            {
              eType: w.xY._b,
              strPath: "manual",
              strLabel: "#AppPage_LinksAndInfo_Manual",
            },
            {
              eType: w.xY.cb,
              strPath: "warranty",
              strLabel: "#AppPage_LinksAndInfo_Warranty",
            },
          ];
        function jy(s) {
          const { appid: e } = s,
            { data: n } = (0, E.J$)({ appid: e }),
            { data: r } = (0, E._F)({ appid: e }),
            { data: a } = (0, E.bg)({ appid: e }),
            { data: o } = (0, E.is)({ appid: e }),
            c = (0, kt.AP)(e);
          if ((m.use(g.Ready()), !n)) return null;
          const d = F.TS.EREALM === gn.TU.k_ESteamRealmChina;
          return (0, t.jsxs)(Wt.YZ, {
            className: kn().LinksAndInfo,
            children: [
              (0, t.jsx)(dr, {
                text: g.Localize("#AppPage_LinksAndInfo_Header"),
              }),
              (0, t.jsx)(fs, {
                url: `${F.TS.COMMUNITY_BASE_URL}app/${e}`,
                label: "#AppPage_LinksAndInfo_CommunityHub",
              }),
              (!d || sl(n)) &&
                (0, t.jsx)(by, {
                  children: (0, t.jsx)(By, {
                    appid: e,
                    steamworksAppID: c,
                    app: n,
                    bSteamChina: d,
                    links: r?.links_and_info,
                    rgSocialLinks: a,
                    bRequiresShipping: !!o?.purchase_options?.some(
                      (u) => u.requires_shipping,
                    ),
                  }),
                }),
            ],
          });
        }
        function by(s) {
          const [e, n] = m.useState(!1),
            r = m.useCallback(() => n((a) => !a), []);
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsxs)(S.Z, {
                className: "responsive_banner_link",
                onActivate: r,
                "aria-expanded": e,
                children: [
                  (0, t.jsx)("div", {
                    className: "responsive_banner_link_title",
                    children: g.Localize("#AppPage_LinksAndInfo_MoreLinks"),
                  }),
                  (0, t.jsx)("div", {
                    className: e ? "expand_section expanded" : "expand_section",
                  }),
                ],
              }),
              e &&
                (0, t.jsx)("div", {
                  className: kn().MoreLinks,
                  children: s.children,
                }),
            ],
          });
        }
        function sl(s) {
          return s.type != w.uE.RA && s.type != w.uE.ue && s.type != w.uE.FS;
        }
        function By(s) {
          const {
              appid: e,
              steamworksAppID: n,
              app: r,
              bSteamChina: a,
              links: o,
              rgSocialLinks: c,
              bRequiresShipping: d,
            } = s,
            u = !!r.categories?.feature_categoryids?.includes(xy);
          return (0, t.jsxs)(t.Fragment, {
            children: [
              !a &&
                (0, t.jsxs)(t.Fragment, {
                  children: [
                    d &&
                      (0, t.jsx)(fs, {
                        url: `${F.TS.STORE_BASE_URL}hardware_order_terms`,
                        label: "#AppPage_LinksAndInfo_HardwareOrderTerms",
                        bStoreNav: !0,
                      }),
                    (0, t.jsx)(ys, {
                      url: o?.website,
                      label: g.Localize("#AppPage_LinksAndInfo_Website"),
                    }),
                    c?.map((p) =>
                      (0, t.jsx)(
                        Ey,
                        { social: p },
                        `${p.link_type}_${p.url ?? p.text}`,
                      ),
                    ),
                    vy
                      .filter((p) => o?.available_documents?.includes(p.eType))
                      .map((p) =>
                        (0, t.jsx)(
                          Py,
                          {
                            url: `${F.TS.STORE_BASE_URL}${p.strPath}/${e}`,
                            label: p.strLabel,
                          },
                          p.eType,
                        ),
                      ),
                    (0, t.jsx)(ys, {
                      url: o?.online_manual_url,
                      label: g.Localize("#AppPage_LinksAndInfo_Manual"),
                    }),
                    (0, t.jsx)(ys, {
                      url: o?.health_warning_url,
                      label: g.Localize("#AppPage_LinksAndInfo_HealthWarning"),
                    }),
                    (0, t.jsx)(ys, {
                      url: o?.privacy_policy_url,
                      label: g.Localize("#AppPage_LinksAndInfo_PrivacyPolicy"),
                    }),
                    (0, t.jsx)(ys, {
                      url: o?.stats_url,
                      label: g.Localize("#AppPage_LinksAndInfo_Stats"),
                    }),
                  ],
                }),
              sl(r) &&
                (0, t.jsxs)(t.Fragment, {
                  children: [
                    (0, t.jsx)(fs, {
                      url: `${F.TS.STORE_BASE_URL}newshub/?appids=${e}`,
                      label: "#AppPage_LinksAndInfo_UpdateHistory",
                      bStoreNav: !0,
                    }),
                    (0, t.jsx)(fs, {
                      url: `${F.TS.STORE_BASE_URL}newshub/app/${e}`,
                      label: "#AppPage_LinksAndInfo_News",
                      bStoreNav: !0,
                    }),
                  ],
                }),
              !a &&
                (0, t.jsxs)(t.Fragment, {
                  children: [
                    u &&
                      (0, t.jsx)(fs, {
                        url: `${F.TS.COMMUNITY_BASE_URL}app/${n}/workshop/`,
                        label: "#AppPage_LinksAndInfo_Workshop",
                      }),
                    r.name &&
                      (0, t.jsx)(fs, {
                        url: `${F.TS.COMMUNITY_BASE_URL}actions/Search?T=ClanAccount&K=${encodeURIComponent(r.name)}`,
                        label: "#AppPage_LinksAndInfo_CommunityGroups",
                      }),
                  ],
                }),
            ],
          });
        }
        function fs(s) {
          const { url: e, label: n, bStoreNav: r } = s,
            a = (0, wt.aL)(r ? e : void 0);
          return (0, t.jsx)(T.Ii, {
            className: kn().LinkRow,
            href: a || e,
            children: (0, t.jsx)(x.EY, {
              color: "blue-8",
              children: g.Localize(n),
            }),
          });
        }
        function Py(s) {
          const { url: e, label: n } = s;
          return (0, t.jsxs)(T.Ii, {
            className: kn().LinkRow,
            href: F.TS.IN_CLIENT ? `steam://openurl_external/${e}` : e,
            target: F.TS.IN_CLIENT ? void 0 : "_blank",
            children: [
              (0, t.jsx)(x.EY, { color: "blue-8", children: g.Localize(n) }),
              (0, t.jsx)(rl, {}),
            ],
          });
        }
        function ys(s) {
          const { url: e, label: n, children: r } = s,
            a = xr(e);
          return a
            ? (0, t.jsxs)(T.Ii, {
                className: kn().LinkRow,
                href: a,
                target: F.TS.IN_CLIENT ? void 0 : "_blank",
                rel: "noopener noreferrer",
                children: [
                  r,
                  (0, t.jsx)(x.EY, { color: "blue-8", children: n }),
                  (0, t.jsx)(rl, {}),
                ],
              })
            : null;
        }
        function Ey(s) {
          const { social: e } = s,
            n = e.link_type ?? w.jL.I0,
            r = (0, fy.X)(n);
          if (!r) return null;
          const a = (0, L.we)(`#StoreAdmin_SocialMedia_Type_${r}`),
            o = (0, t.jsx)(hy.k6, { linkType: n, className: kn().SocialIcon });
          return e.url
            ? (0, t.jsx)(ys, { url: e.url, label: a, children: o })
            : (0, t.jsxs)("div", {
                className: kn().LinkRow,
                children: [
                  o,
                  (0, t.jsx)(x.EY, {
                    contrast: "body",
                    children: `${a} ${e.text ?? ""}`,
                  }),
                ],
              });
        }
        function rl() {
          return (0, t.jsx)("span", {
            className: kn().ExternalIcon,
            children: (0, t.jsx)(N.GrD, {}),
          });
        }
        const Iy = m.lazy(() => i.e(85139).then(i.bind(i, 64193))),
          Ty = m.lazy(async () => ({
            default: (await i.e(85139).then(i.bind(i, 64193)))
              .SeasonPassDisplayFromStoreBrowse,
          })),
          Sy = m.lazy(() =>
            Promise.all([
              i.e(36597),
              i.e(87937),
              i.e(28792),
              i.e(56589),
              i.e(85599),
              i.e(33512),
              i.e(94781),
              i.e(18307),
              i.e(8892),
              i.e(80702),
              i.e(48355),
              i.e(36786),
              i.e(55050),
              i.e(60480),
              i.e(60839),
              i.e(14632),
              i.e(5858),
              i.e(90914),
              i.e(54409),
              i.e(73810),
              i.e(96032),
              i.e(92705),
              i.e(9438),
              i.e(49928),
              i.e(49968),
              i.e(74974),
              i.e(11095),
              i.e(65050),
              i.e(50762),
              i.e(23027),
            ]).then(i.bind(i, 98144)),
          ),
          My = m.lazy(() =>
            Promise.all([
              i.e(85599),
              i.e(33512),
              i.e(94781),
              i.e(18307),
              i.e(8892),
              i.e(80702),
              i.e(48355),
              i.e(60480),
              i.e(60839),
              i.e(5858),
              i.e(90914),
              i.e(96032),
              i.e(92705),
              i.e(65050),
              i.e(58612),
              i.e(93125),
              i.e(89672),
            ]).then(i.bind(i, 66825)),
          ),
          Ly = m.lazy(() =>
            Promise.all([
              i.e(36597),
              i.e(56589),
              i.e(85599),
              i.e(33512),
              i.e(94781),
              i.e(18307),
              i.e(8892),
              i.e(80702),
              i.e(48355),
              i.e(36786),
              i.e(55050),
              i.e(60480),
              i.e(60839),
              i.e(14632),
              i.e(54409),
              i.e(73810),
              i.e(49968),
              i.e(74974),
              i.e(11095),
              i.e(14867),
              i.e(8319),
              i.e(10177),
              i.e(68396),
            ]).then(i.bind(i, 2422)),
          ),
          Ay = m.lazy(async () => ({
            default: (await Promise.resolve().then(i.bind(i, 62038)))
              .AccessibilityFeatureDisplay,
          }));
        function Oy(s) {
          const { appid: e } = s,
            n = (0, Tr.Fd)("store_page_asset_url", "application_config");
          return (0, t.jsx)(If.W4, {
            store_page_asset_url: n,
            children: (0, t.jsx)(al, {
              children: (0, t.jsx)(il, {
                children: (0, t.jsxs)(Ul.QA, {
                  eAdultOnlyMediaBehavior: "allowed",
                  children: [
                    (0, t.jsx)(Gs.X, {
                      config: {
                        "events-row": () =>
                          (0, t.jsx)($i.d, {
                            children: (0, t.jsx)(Dt, { appid: e }),
                          }),
                        "deck-topplayed-banner": (r) =>
                          (0, t.jsx)(Qi, { ...r }),
                        "steamawardsvote-embed": () =>
                          (0, t.jsx)(Sy, { appID: e }),
                        "demo-and-quick-pitch": () =>
                          (0, t.jsx)($i.d, {
                            children: (0, t.jsx)(Pr, { appID: e }),
                          }),
                        "deck-verified-results": (r) =>
                          (0, t.jsx)(Hc, {
                            appID: e,
                            results: (0, Tr.Tc)(
                              "hardwarecompatibility",
                              "application_config",
                            ),
                            appName: (0, Tr.Tc)(
                              "appname",
                              "application_config",
                            ),
                            ...r,
                          }),
                        "gamehighlight-trailer": (r) =>
                          (0, t.jsx)(Pl, { ...r }),
                        "gamehighlight-gamepadcarousel": (r) =>
                          (0, t.jsx)(Zl, { ...r }),
                        "gamehighlight-desktopcarousel": (r) =>
                          (0, t.jsx)(Ac, { ...r }),
                        "discovery-queue-app-widget": () =>
                          (0, t.jsx)(My, { appID: e }),
                        "game-notice-controller-required": () =>
                          (0, t.jsx)(Er, {
                            appid: e,
                            type: on.EPurchaseNoticeType_ControllerRequired,
                          }),
                        "game-notice-vr-required": () =>
                          (0, t.jsx)(Er, {
                            type: on.EPurchaseNoticeType_VRRequired,
                          }),
                        "game-notice-vr-supported": () =>
                          (0, t.jsx)(Er, {
                            type: on.EPurchaseNoticeType_VRSupported,
                          }),
                        "season-pass-display": (r) => (0, t.jsx)(Iy, { ...r }),
                        "season-pass-display-gamepad": () =>
                          (0, t.jsx)(Ty, { appid: e }),
                        "storeitems-carousel": (r) =>
                          (0, t.jsx)(fn.Ay, {
                            feature: "recommended",
                            children: (0, t.jsx)(Vi.default, { ...r }),
                          }),
                        "storeitems-carousel-dlc": (r) =>
                          (0, t.jsx)(fn.Ay, {
                            feature: "dlc",
                            children: (0, t.jsx)(Vi.default, { ...r }),
                          }),
                        "creatorhome-carousel": (r) =>
                          (0, t.jsx)(fn.Ay, {
                            feature: "creator",
                            children: (0, t.jsx)(yl, { ...r }),
                          }),
                        parentappwidget: (r) =>
                          (0, t.jsx)(fn.Ay, {
                            feature: r.feature,
                            children: (0, t.jsx)(Gl, { appid: r.appid }),
                          }),
                        appreviews: (r) => (0, t.jsx)(qc.l, { ...r }),
                        "wishlist-item-categories": (r) =>
                          (0, t.jsx)(dd, { ...r }),
                        "purchase-options": (r) => (0, t.jsx)(Hu, { ...r }),
                        "purchase-options-dlc": (r) =>
                          (0, t.jsx)(fn.Ay, {
                            feature: "game-purchase-dlc",
                            children: (0, t.jsx)(Pm, { ...r, appid: e }),
                          }),
                        "purchase-options-dependent-dlc": (r) =>
                          (0, t.jsx)(fn.Ay, {
                            feature: "dlc-dependency",
                            children: (0, t.jsx)(Tm, { ...r }),
                          }),
                        "summary-bar-top": (r) => (0, t.jsx)(Am, { ...r }),
                        "features-section": (r) =>
                          (0, t.jsx)(kg, { ...r, appid: e }),
                        "about-this-game": () => (0, t.jsx)(Gm, { appid: e }),
                        "page-sections": () => (0, t.jsx)(qm, { appid: e }),
                        "legal-notice": () => (0, t.jsx)(ng, { appid: e }),
                        "press-reviews": () => (0, t.jsx)(sg, { appid: e }),
                        "ai-disclosure": () => (0, t.jsx)(ig, { appid: e }),
                        "mature-content-description": () =>
                          (0, t.jsx)(cg, { appid: e }),
                        "cast-and-crew": () =>
                          (0, t.jsx)(fn.Ay, {
                            feature: "cast-and-crew",
                            children: (0, t.jsx)(ug, { appid: e }),
                          }),
                        "series-episodes": () => (0, t.jsx)(Ag, { appid: e }),
                        "music-album-details": (r) =>
                          (0, t.jsx)(op, { ...r, appid: e }),
                        "interest-buttons": (r) => (0, t.jsx)(fp, { appid: e }),
                        "add-to-wishlist": (r) =>
                          (0, t.jsx)(qr, { ...r, color: "storegreen" }),
                        "recommendation-reasons": (r) =>
                          (0, t.jsx)(Jp, { ...r, appid: e }),
                        "friend-ownership": (r) =>
                          (0, t.jsx)(P0, { ...r, appid: e }),
                        "referring-curator-review": (r) =>
                          (0, t.jsx)(T0, { ...r }),
                        "game-rating-section": () =>
                          (0, t.jsx)(zh, { appid: e }),
                        achievements: (r) =>
                          (0, t.jsx)(py, {
                            appid: r.parent_appid ?? e,
                            dlcappid: r.dlcappid,
                          }),
                        "early-access": (r) =>
                          (0, t.jsx)($m, { ...r, appid: e }),
                        "ownership-banner": (r) =>
                          (0, t.jsx)(fn.Ay, {
                            feature: "owned-game",
                            children: (0, t.jsx)(jg, { ...r, appid: e }),
                          }),
                        "store-awards": () => (0, t.jsx)(Wf, { appid: e }),
                        "points-shop-items": (r) => (0, t.jsx)(Yf, { ...r }),
                        "item-shop-items": (r) => (0, t.jsx)(Qf, { ...r }),
                        "links-and-info": () => (0, t.jsx)(jy, { appid: e }),
                        "write-review": (r) =>
                          (0, t.jsx)(fn.Ay, {
                            feature: "owned-game",
                            children: (0, t.jsx)(Pf, { ...r, appid: e }),
                          }),
                      },
                    }),
                    (0, t.jsx)(Gs.X, {
                      omitFocusNavTreeBridge: !0,
                      config: {
                        "review-award": () => (0, t.jsx)(Al.Ay, {}),
                        "broadcast-embed": (r) =>
                          (0, t.jsx)(Ly, { ...s, appid: r.appid }),
                        "store-sidebar-accessibility-info": (r) =>
                          (0, t.jsx)(Ay, { features: r }),
                        "store-sidebar-controller-support-info": (r) =>
                          (0, t.jsx)(ki, { ...r }),
                      },
                    }),
                  ],
                }),
              }),
            }),
          });
        }
        function il(s) {
          const { children: e } = s,
            [n, r] = m.useState(!1);
          return n
            ? e
            : (0, t.jsx)(Gs.X, {
                omitFocusNavTreeBridge: !0,
                config: {
                  "apppage-gameinterest-cache": (a) =>
                    (0, t.jsx)(Ql, { ...a, markReady: () => r(!0) }),
                },
              });
        }
        function al(s) {
          const { children: e } = s,
            [n, r] = m.useState(!1);
          return n
            ? e
            : (0, t.jsx)(Gs.X, {
                omitFocusNavTreeBridge: !0,
                config: {
                  "apppage-store-browse-cache": (a) =>
                    (0, t.jsx)(wm, { ...a, markReady: () => r(!0) }),
                },
              });
        }
      },
      93237: (b) => {
        b.exports = {
          "duration-app-launch": "800ms",
          Icon: "M5YgSyrfvCXXY_XYhYzcl",
          AchievementIconWrapper: "_1DmdUWkRKPlUYGtbBrrRtx",
          RareAchievementIconGlowContainerRoot: "_1R1QQtfmrxNkfIGlKSdDqG",
          RareAchievementIconGlowContainer: "kt0NXHlg2kFjVkiN_2eEL",
          rotate: "_1ovVdJrqKKpglnX8FYej3J",
          RareAchievementNoAnimation: "_1mSBKtmFFZvwBLtxBOMwak",
          RareAchievementIconGlow: "_3vFmYitX2pXuOenxR0blk8",
          IconGlow: "_2BCoqu4wd4ehkJkelVhjb3",
          HiddenLabel: "_1smYxH70zcX0D3CUQDwF3o",
          BackgroundAnimation: "_2XvhZ8yFczR-W7gwjaWoPT",
          "ItemFocusAnim-darkerGrey-nocolor": "NK0YaI2_mwagRH7-tm_GE",
          "ItemFocusAnim-darkerGrey": "_1HU-Kl32lDEq7yT3ba8R5G",
          "ItemFocusAnim-darkGreySettings": "_3PM-EU4OtOaw12xVeiCzRL",
          "ItemFocusAnim-darkGrey": "_1EXXhQ3MOk6cW2xYESY_2i",
          "ItemFocusAnim-grey": "_2V88aGECYldq8tqX286rzp",
          "ItemFocusAnim-translucent-white-10": "_9lQAMImHGe5qClr8AL2Vc",
          "ItemFocusAnim-translucent-white-20": "_3I_vGf7ujHONdHYkGitG6t",
          "ItemFocusAnimBorder-darkGrey": "YU4V8GFJ50LIlOS68c6Wc",
          "ItemFocusAnim-green": "_1qBrpfK0gqYyjGTNuC0FHo",
          focusAnimation: "_1vLld9YwBtNMfxoDxGo2Z4",
          hoverAnimation: "_3JxsbmkLDkwKiYvrnnqOtd",
        };
      },
      89611: (b) => {
        b.exports = {
          ObjectFit: "_NIZ2fYFBu6WSnEE1H6i3",
          ObjectPosition: "_3OZ4rrlKzwAYOKP9HdqUrq",
        };
      },
      24089: (b) => {
        b.exports = { TextEntry: "_1vE-LsK6l_D_5yjbywZV1p" };
      },
      8833: (b) => {
        b.exports = {
          Separator: "_2v8lnOhHPKk5DrlAD0yAwc",
          "Size-1": "HA_T1szVWGIw7_cDibhei",
          "Size-2": "oSgUz2qE-NgHuOm4wt_OC",
          "Size-3": "f9Ra4JmQiBJz_dBLijs_x",
          "Size-4": "_1zkUYDDyfzPgesBbGmMsxP",
        };
      },
      75180: (b) => {
        b.exports = {
          Grid: "_2IVd64AHN6R428cgcPqW7M",
          Display: "_2PUyyAEGuZenuwES7VJvQO",
          Columns: "_16FZUyKiH6Z7trthKypJwf",
          Rows: "_2QdiX1hDsJmlkrHmcCOMbV",
          AutoColumns: "Cr7YIMQn6_lDRU4-3BR8b",
          AutoRows: "_3kyzvGnYVLT0DW6nzP9n18",
          AutoFlow: "_3AvZKfpfaIQbfczVRBASsX",
          Areas: "_1-yfCTWkj4tOFfb3EKXx6N",
          Flow: "_1yUwWGTk4IX0IhdJiKfFBf",
          AlignContent: "_2Tglp6488nVBhU976Llfpe",
          JustifyContent: "TT1_g1XWXbbLgxOPIpczV",
          AlignItems: "_1ve3GjJA-d6MfYcIiXdqz0",
          JustifyItems: "_2LsmJGVn3g0GHmBPNWVn5T",
          Gap: "c0C2uHpDLCegllhH1rM3M",
        };
      },
      39049: (b) => {
        b.exports = {
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
      66575: (b) => {
        b.exports = {
          GameRating: "dIVKtZR3FPk--WsTHPpCg",
          Title: "g6OWaWhTs7-jMnb_ipVdD",
          Banned: "_2OBX7mi9MwO3wh8vz69RW_",
          RequiredAge: "_3ixbRnhEXoSAFMMOxMR7kP",
          Icon: "_3NX32L22YZdobMQdeHDTRz",
          DescriptorText: "_3x1L_MQDZD6RKFHPJQDmCN",
          AllAges: "_2VePhLetNEJD1gctFnUgIC",
        };
      },
      58123: (b) => {
        b.exports = {
          SaleTechPriceGrid: "_14x0A0cAhaV-g8Od_xGbRL",
          LowestRecentPrice: "yLlRefh-UYhYZLE0_k-BK",
          FinalPrice: "_3P_1WcsVP8GJKQ8olprKQ2",
        };
      },
      88208: (b) => {
        b.exports = {
          PreventScroll: "ycpazsHLq6lCBFmWPCLCZ",
          ModalDialog: "_1mPKxUDAZ01x-i7612JIsL",
          ModalDialogContent: "_79d7mzfWutbJb1DCbh1Du",
        };
      },
      5598: (b) => {
        b.exports = {
          SimpleModalDialog: "_3ej4mcyhVunlvw3BjUXtel",
          WideMode: "_1oLxPrvbIeJJ1d96fhJvOI",
          SimpleModalDialogHeader: "_1w-TUMWBEOX_zsSa-BBhK8",
          SimpleModalDialogTitle: "_2tpBIlq2yGQqKcloht-UiJ",
          XButton: "RC4JznqJb34yCm04FKk0I",
          SimpleModalContentCtn: "_2yRV5HfgoGdJZqs9Fl049T",
        };
      },
      9246: (b) => {
        b.exports = {
          narrowWidth: "500px",
          AboutThisGame: "zeZyN-4SGkKN1ukmy4_Ns",
          Header: "_2bGVPSkxnJDt2vN54TTfNK",
        };
      },
      56680: (b) => {
        b.exports = { WishlistModalOverride: "_3V4Y44VzkkQWUAtDh6jQfA" };
      },
      8611: (b) => {
        b.exports = {
          narrowWidth: "500px",
          AutoCollapsePanel: "_2OFBKij25NOweLoQKnH-Hl",
          Contents: "_3z2f7_LIqrKVFzXn-nSN98",
          Collapsed: "_2EgdWaUHP8QhQdix9MlF0d",
          Expanded: "_35-z7zCVOx1yWKf8cJjZkH",
          ReadMore: "_1qDLg0KVwgnZmMwUt99Egn",
          ReadMoreBorderPulse: "_4w9-SNzzdsOMsBG-Ztqf4",
        };
      },
      78747: (b) => {
        b.exports = {
          Container: "_2fN9Ufmh18msZ2F2Tvk4xy",
          Review: "GjOrllO2lWUDh-q5xW-yh",
          Video: "_1B_treg9z5S0DYtv4B2RDc",
          VideoThumbnail: "_3mf5Rtv6HYXZVTxqOYQbBn",
          PlayOverlay: "_1qClaf6FsIipDDUZRsUUbZ",
          PlayIcon: "_2pX0wr8m0s0gCZdHf1uABw",
          DetailRight: "_3glB4FwLdnWk0HbYsZu2CW",
          NoVideo: "_1YdBZgEGPw811XZZnFZf6p",
          Blurb: "_1xWSWeWA0WhhtjcjOw1SKJ",
          Notes: "_2GDWQy36nGG2HVC8I2cHWJ",
          BlurbText: "_2A6WzqPZVha8D0cLveWr_2",
          CuratorReceived: "_2JfTBx-oL3rgrWp-Mcceah",
          Avatar: "_2STaox80L0TUAyTTWvgg7K",
          CuratorInfo: "WDMiZwGT09DlTY2Zolj4H",
          ReviewTitle: "_3Gf4l7NBeeqbvtQVCV1JR4",
          Recommended: "luHN4D2sNDLnLyxeBlF6S",
          NotRecommended: "MScyX4kNlmotUkn4yfT87",
          Informational: "_3xT11pNcMt5vQZZryBo89j",
          Attribution: "Ae6CVnStJmXj4P1nm4fyH",
          ReviewDate: "_1-xxEVmOFH_ALirCqnOMnk",
          ReviewText: "_1bxDLybmzg3qlRHA0uPpgw",
          ActionButtonContainer: "_2DQYZmNg65M853z4QxNcEm",
          ActionButton: "_38k1l9_8MwKGpdKbFVO0iR",
        };
      },
      399: (b) => {
        b.exports = {
          TopPlayedBannerCtn: "_3m4H3O5OzhRFzeMBr1GiJh",
          DeckLogo: "_2fWPD8Bedv6c-yWTvZgAqn",
          BannerTitle: "R1EIDJDmlv3wymunXxGRz",
          BannerRightContent: "_3xmin8LWu9-cWEzsA9HEqJ",
          BannerHeader: "_2qmB_riG0azA3gECMHzEs_",
          BannerGameText: "VTRpu0RD7FA2Cn1UIp_Sn",
          Adventurer: "_2Vfzito2cEHtvOnl6hWD2t",
          Anime: "_1ms_oh1o4LBbEJqlW8N4RN",
          Apocalypse: "_2ba_EyebFU2kLncHcEzoDD",
          Astronaut: "W2X9qKmJY1fAkIM7GsolJ",
          Beach: "_2_LFdeCE0gMxtEUKki5NqO",
          Bed: "_1oByLIlDSo2XnZICLfSwvI",
          Bus: "OB7zhBm37vzrd_8riRWex",
          BusStop: "_2rd1Qm-OWFA2YmwiW-AghQ",
          Campfire: "fWKU1FqjXbYwqp1oB_xBs",
          Car: "GeAKpVY8Ba6-QT7tznVks",
          City: "_2QdugEdfMAb6V79yJPUR9L",
          Family: "_1g6v39jh2MnE5vuJnDagye",
          Farmer: "_3HFHolp6BQ7uMIedbyxc7D",
          Knight: "_2O7EV4jX-WO2knwBjeJz_D",
          Miner: "_13chpvw7DnNOsWqu92qK7_",
          Porch: "_3M4GVoRT9lg9yBm6y1dCSi",
          Robot: "_2RASj4ZnI-VHE5mRp8zKoB",
          Superhero: "_2HvlKfWJXw_ynFe07XKdY8",
          Woodsman: "_1CL5Wdh_nHnOYZvnjVA8YD",
          Zombies: "_3Ox405Kuu5XWIbPA9UvtBS",
        };
      },
      72723: (b) => {
        b.exports = {
          Body: "gWQvQ7aZkfTUnQOpDv4Kf",
          Capsules: "_1vjLJiRQDnGVGagJgrX2vw",
          Item: "_2WnGgbEVDGWA6Aiw-Iac2P",
          CalloutRow: "_2wSV8GFu39c1jHvjlHefEk",
          Callout: "_38aaH3e_WuX02rED-F5LmP",
          Link: "_3r5JsPI6ThzHIlTKWEG3hE",
          Separator: "_3P74cVQ7H470Sa83yRrh9a",
          ActionGroup: "_2-u-jSAp9SDeNep-55FcIH",
          Total: "_2b_TYMpDt3KAMX5DUL-a60",
        };
      },
      26666: (b) => {
        b.exports = {
          PackBody: "_1zq333d3pW7338j8MOxfoG",
          PackInLibrary: "_1-sgh5Na-U3TZmO_toUckA",
          PackCapsulesCtn: "_2jS1JS0vHcRTtKK5vN9bGo",
          PackCapsules: "CfSj_bx6zkyciRhJhRV4c",
          PackCapsulesCollapsed: "_3BI6mqK_SNTj5MBr8unOIZ",
          PackCapsule: "_3Cmt3xhzt5m1iqRlGl85t2",
          PackActionGroup: "_1_rYPVtMNifGny-euMweMD",
        };
      },
      16071: (b) => {
        b.exports = {
          Row: "_3ZALGXUTUz9dMhpygZfEdz",
          FlagInLibrary: "_3J48uHl9Qq29G8SehTatYH",
          FlagOnWishlist: "_32GtArPK5vie6wQkr_eb7v",
          FlagInCart: "K1EJQRP74k3RqoneQCEf0",
          FlagIgnored: "_2_0lJhNfAjXG-HPV-9zVAu",
          Price: "_17AaRdslMVuhHBhcGgPgku",
          Highlight: "fHbnLbbM5MIuAK3uVlGNu",
          Name: "_2yxFkEsqp_Q09rVOSLXhE5",
          HighlightReason: "UyursQIO7t9_SSLgITA19",
          Pill: "_3aNRifG-b3UQH_dr4ksC-T",
          Footer: "_1dVpIbJBuAfOZVuTI3NAbh",
          PartialList: "_3EpqTNpUJjZtEVKKKl3j82",
          AddAllToCart: "_19v2LelCK8HYDasOcWgZXu",
          Revealed: "_3q1MdA6e49037eOZQKOiAq",
          DLCRowReveal: "_3K-29pm9jNOERms32B8gs7",
        };
      },
      38404: (b) => {
        b.exports = {
          EarlyAccess: "_1T_V-LxtA8jew8eiZAQrDD",
          LeavingEarlyAccess: "_2rqsrOwTXLhlSthqDd-y0q",
          Banner: "_2YvNHzQ1VSnCS0ReE6v9T-",
          Title: "_3_95-MF8UOtlX2WqBSCPKN",
          Desc: "qt-OB_c0QQpC8k9v0X_dP",
          Details: "_2UGCx9L9_8NyGSgDyiuyLT",
          Warn: "_1GwZ7imQJcMFj_OCNlAY0n",
          Stale: "_1_3oFMPoQlBsbOcivPi9_d",
          StaleDevs: "TdPVzAhAirPmDB4nB3Cnx",
          DevsSay: "_3wEJCC6E8v86rS7edXsnmn",
          Question: "_1CZg_6pRD4X5aFvbD3VXN5",
          Answer: "_3lCa8UpT82vkN-BV_hD_CH",
          Link: "_29rMxnVxsbWIDWSxuA9idP",
        };
      },
      55367: (b) => {
        b.exports = {
          CategorySection: "_2LrShr7IWhwfZHCuws5N_O",
          CategoryLinks: "_3vOT4NU0o9mYCU_6o_CCRh",
          SearchLink: "_3-Crx2dI9tgqfo1yOT0jw8",
          FeatureString: "_2OKLR5HZU6R8HIQRFgvQBC",
          IconContainer: "_2prv4ehi70tjwqV7eeUpNn",
          Icon: "_15-uJ3AkgzMBpkybqwjiKt",
          LearningAbout: "pi0uqQekyrRHnJCaUyg1u",
          ThirdPartyNotice: "_3IUbntWc11AYm240qy6cLU",
          Row: "hgTWadPUVdT2y17u5wU7Y",
          Anticheat: "_1diznsEx0RUvdMbTwROVEu",
          Name: "_261S1NxSb_IbVaNg77Y9i5",
          BootProtection: "_1SiKZVlI9CdyQnLvyTUYLy",
          ThirdPartyAccount: "_1oaAmtSoqPhwLiGjQ0Y3OG",
          Type: "_1qNe_uLNeOV6BKlQ09jU3n",
        };
      },
      77614: (b) => {
        b.exports = {
          FriendAvatarLink: "_1HwFByD2tVkgQjdeo3upUL",
          Details: "_3pLLJpVOHHWcI5UvltWXQZ",
          Name: "_1MsiMQXdRUXrfqSEZ7ewHM",
          Playtime: "RmetILTrNzddKrz3r4CGf",
        };
      },
      16836: (b) => {
        b.exports = {
          narrowWidth: "500px",
          FriendOwnership: "q5QNi4yaj2QV4U77xNSKp",
          FriendList: "_1jkvh5RzUyV-afkmRZBsEt",
          WithNames: "_1YludsZff-JSeiUJGTaBFP",
        };
      },
      20338: (b) => {
        b.exports = {
          storeNarrowResponsiveWidth: "910px",
          TheaterDialog: "xunB9e_XJHY-ooP2zNKag",
          TheaterModeHeader: "_17YJmMg813A6ympHsbwM7n",
          TheaterModeFooter: "_2469TwTWqAicsI1RnlvsCU",
          TheaterModeFrame: "_35w3v2QgvaAyQ5US4OJOMN",
          Center: "_1nooJM8SlOrumMla-n5kcg",
          Right: "_124rcqdHDS-7ZiS4Ug15rj",
          SkeletonViewArea: "_2Jk5sZuh6Yam81wQzpBUWj",
          TheaterMode: "_1_fv9P3XnAj9M8zRjBUsm0",
          ItemViewArea: "_33i4zSWeCfsTaa25tHu5Us",
          FullscreenArrow: "_258hIVgneRO0dUbgnPZh_R",
          Visible: "_2--1QTPdJLonnu6CEnIlNX",
          Next: "fpXUftvcJkKb5pMG7ctH0",
          Previous: "_1h__Z4jtufgzUAJJ5y1c1v",
          ViewedItem: "_2KIVa7T6PMqAVvVKkwdVZO",
          Active: "_2CZHqKcmYmjWbdMK4aidRV",
          Screenshot: "_2zBrte9SWvr4lSb3lAkNpR",
          PageEmbedded: "TunqbQieNpnpnbQo2LG9Q",
          Controls: "_2h-RE4j4pbuPMtOjZ_fCyr",
        };
      },
      69131: (b) => {
        b.exports = {
          StripSkeleton: "_3-9sYm9MJfEc7DUv7-tqG2",
          TheaterMode: "_1l7ZtmzPX6TqB7rvA1wdUR",
          Items: "_2Y9cdZVnoEU6uCzgX9P8gO",
          Scrollbar: "_3uF_Wfs589dYv9BQRlFmZt",
          Strip: "_3CdIWRo2e9D_FxVHjVII7d",
          StripItems: "ZpjLn9D4rTIVnM4axYSoG",
          Item: "_2Ose8zPg3MlKQQeG9nwv24",
          PlayIcon: "_2qzM1XTf6NXdHvCDD9D-PF",
          Active: "_2uCL56lGO9iUUcLEtE83zG",
          StripScrollbar: "_2Z-YccLz9coJD6SBV13Fya",
          Arrow: "_2lIBEOcXRC3KKhDamcV9t",
          Track: "_2SBCUqLfy4PgWdonAHX_fR",
          Thumb: "_3DXmyv2Yx-lnmLz03GryEd",
        };
      },
      19813: (b) => {
        b.exports = {
          TheaterDialog: "_1cR7UuAEyt152HSNWylbqz",
          FocusRingRoot: "_3zXPOFGaYWCD3fd-ESi70A",
          FocusRingClip: "_2jZfIoMOoZQx6kdcgBhMHa",
          GamepadCarousel: "PYe6PtelQzh2UB7OtpWMk",
          CarouselItem: "_3ulAzvZbXfVEZatmwdipsk",
          StillPoster: "_3pCSQuZSNLXT9AhGtOXpNb",
          VideoStarted: "_1lbow7a3gRkR7fjSzCyrXr",
          Poster: "_3ExPGBI8XGCQSuFfQ6JAlj",
          Icon: "qcq_UlIfBHLqkTw-IcrR8",
          TitleCard: "_3HXfy0jxwE_OWJIKKyQFUE",
          Bottom: "_1QDEDk1q1y-jG5E4UV5-rC",
          SingleFileTrailer: "_3i1CkfhnBQSj5NuMV9PxnF",
          Screenshot: "p0NZiXp9agvT1BeWoCNDK",
          DashTrailer: "_1B_rAEDcFM9o79CoGmnUgM",
          BottomRow: "_3ZLxtge6-gw9pSzVXTf4gd",
          WishlistButton: "_23N7SSBmU_2S4o8Kc8NBEg",
          StarIcon: "_3LKNblFkXFm-hTnW4lMeOQ",
          ButtonIcon: "FP1PcTBe4kKmycVNKGtk3",
        };
      },
      19218: (b) => {
        b.exports = {
          WidestChildContainer: "_3YUWXt-ylyufqMm-YAliva",
          Hidden: "_29niryxpei49tSjYOBokyK",
        };
      },
      30820: (b) => {
        b.exports = {
          Item: "_2YfN55cMXVU9OD0d3_LoX3",
          ItemImage: "_2Zh_TIIvdD8EtU6ZxtELog",
          Price: "_1Fz-4Scga6rZOdvvmk2jLV",
        };
      },
      45200: (b) => {
        b.exports = { LegalNotice: "_2bOEuokOOajSeGl2yZEcPh" };
      },
      35177: (b) => {
        b.exports = {
          LinksAndInfo: "_3TuBg7_-ESlXR8VdekZAh6",
          MoreLinks: "_38qMxU84U3MdKhwOyNRvBh",
          LinkRow: "_3Fsj47byOWjgdvPZrMt79B",
          SocialIcon: "_2MvdxngdrJtnwX501aUgFu",
          ExternalIcon: "_2WUly4aWb_9foEZI0ARnK1",
        };
      },
      72390: (b) => {
        b.exports = {
          Score: "_3KFgbk3IzIHdQyWbx3ixQd",
          High: "_2gwFIDqCXQrEFHQkkMylvp",
          Medium: "_1WRij-yZeVQrXpyB2BQ5Hu",
          Low: "_20XeCHY1vgYRARXPiXK8qr",
          ExternalIcon: "_2_11-nL5KwLaw57DKAUUxk",
        };
      },
      76985: (b) => {
        b.exports = {
          narrowWidth: "500px",
          TrackListContainer: "_1B94J6blto63JooX8xE8x2",
          DiscTabs: "_1f6LeASDnCawGhXbVgpGbN",
          TrackList: "_21qq2GkE5LyRbZDBkOQ1li",
          TrackTable: "_23UelU4wgZXygL_sXDYvsg",
          Number: "_3thPgGlKH6Yk_mzgsffxqm",
          Name: "_3uE097OXGUs1NHySOUIIvS",
          Length: "_2X2HpO9BwpkWRjK97-LN0",
          Odd: "_2lXiCmpwORaq53wIqXcIGO",
        };
      },
      95036: (b) => {
        b.exports = {
          AppList: "_3WieBjkVb28rpePKxyn3gl",
          AppText: "sqjdG_fjedZUmCmzyHdpN",
          InLibrary: "PIsyQ6ew7BEmrOpzzJKCT",
          PrePurchase: "_22HRzKP_R7fYBsp-3dUUfY",
          WrappingName: "eYcltYOCViPqg9Tp6nwGo",
          AppIcon: "_1zJQxJZsmaRcsnMKVsj1SD",
          AppImages: "_2cKkqSc2Aw1kr_8SzTKYNF",
          PlatformIcons: "Wd0ssUN-E1g_6nF5cApwN",
          PlatformIcon: "_2_NmZjBVcuMKTZkfsRP_HD",
          DiscountAndPrice: "_2ooDkAkePuzL0kjqCaU2lR",
        };
      },
      54652: (b) => {
        b.exports = { PurchaseOptionBanner: "_1P2U635xpdOLT2_aa1xwdL" };
      },
      21763: (b) => {
        b.exports = {
          PurchaseOption: "_3TUpv9-O4TIdg6P4Fx3oE7",
          Green: "PnUl8lQhMsTJfCeDt3Hea",
          OnlyChild: "_1Cty2Al1wcwqrIfgzp797A",
          AllowSingleLine: "zw6LBxJeRCbByX-rRxjyh",
          AllowTwoColumn: "_2AYML2I4RE2b74cxTDrgs",
          LeftColumn: "_2TQm9gAofDprradamqfdnX",
          DebugInfo: "_2CZQTTB4EFxu3TE_6mM47o",
          FocusRing: "_1flB_uKuLjatwxoY8KvUUG",
        };
      },
      97393: (b) => {
        b.exports = {
          PlatformIcons: "_34fO3Y9HSHm3JfPdMRIf8m",
          PlatformIcon: "_27rt4wNpnea7jUH3nWwj8m",
        };
      },
      59869: (b) => {
        b.exports = { MenuItem: "_3VWkkleXCrqxmjyoSCylnk" };
      },
      80974: (b) => {
        b.exports = {
          InLibraryRow: "_1Ea1bwlHmxO1UmYTEQ8jHC",
          InLibraryFlag: "_2GveL49aC8sm8Mey1StYth",
          InLibrarySVG: "_2HPdYtyoJJ6hsAHw3jTQ10",
          Actions: "_2vmUZW0F1kvoznIng92EOn",
        };
      },
      14844: (b) => {
        b.exports = {
          PageSections: "_1_PU6_24UNZMD-aymVilmB",
          PageSection: "_2WpiheNBkhzJpmxQ4Arawu",
          Header: "y5728HUyiI5XdCDBm5D7A",
          Banner: "_3hkPxq8NpEEOtbG7MPXNUy",
        };
      },
      30452: (b) => {
        b.exports = {
          ItemImage: "_2emVfokDB6oT4pOU15fVVR",
          ProfileBackground: "_vaAGc8YOYW7s9yJPKtHf",
        };
      },
      6876: (b) => {
        b.exports = {
          ThumbIcon: "_2lDikjo0mk970SwUm3DRTK",
          Down: "_1Cwc3y07Is4gEGD1Q0zKc_",
          CommentIcon: "_2obrbR9xy_xows-ok2qmxn",
        };
      },
      74677: (b) => {
        b.exports = { ModBubble: "_2PauZG_yePbl6rC4OejmqF" };
      },
      18574: (b) => {
        b.exports = {
          CarouselPaddingTop: "8px",
          CarouselPaddingBottom: "8px",
          PurchaseOptionDisplay: "_2zQCVD-7iZA3eShAcWuSrv",
          PurchaseOptionCarouselWrapper: "_2FFRq4AxO47tckosaUvn2X",
          NoCarousel: "_18-XQUf8L7zxxacjLnq08M",
          Single: "_1i8lZsm1WSza_LBo1riVvc",
          PurchaseOptionsCarousel: "_149hLCvHEvVVEn7fORfG75",
          PurchaseOptionWrapper: "_1F2jbNP9IHRfKonl_3baY8",
        };
      },
      77774: (b) => {
        b.exports = {
          ComingSoon: "VcfhtxgxhXCS5YBzd4O22",
          OffsitePrice: "_3nVt7tQlJcd-SJe7k_lDmO",
          Content: "yN2IR7l0MpF7rTD6dlS9f",
          Reminder: "_2KJX1jAw_ha_T3Dv2bDULi",
          Note: "rM8RXPAb9DnacUnfXKjkg",
          Preload: "_2uqsForJwTJzUiCcKC6WK7",
          PreloadActions: "_8FtJtmmrluBTGIheOirY_",
        };
      },
      23413: (b) => {
        b.exports = { AppList: "_1MVRGLawsCpcXLFlFkKAGL" };
      },
      60993: (b) => {
        b.exports = {
          narrowWidth: "500px",
          RecommendationReasonsDisplay: "_8A-vhpEBdS-qVF5Jl9jc7",
          ReviewScore: "DpGN2-UG7sEXIZDAb2xtu",
          Positive: "_1kiOvqf3wN3kBFxMVI8w-3",
          Negative: "_1UTMsJhG80MMvkig6Pw7UN",
        };
      },
      54629: (b) => {
        b.exports = {
          AppList: "_12s81WYtM0B0CmDPB6BMY0",
          AppIconAndName: "_3CcmNvL8ajAAtVfsoFxFRA",
          AppIcon: "_1abKISd0PdmRu72s9yPT6D",
          AppName: "_2VU-DDzaxFtQJqLuyn0IQw",
        };
      },
      2699: (b) => {
        b.exports = { AvatarList: "fIVYEi9n1QY4vaQuxZYW0" };
      },
      13290: (b) => {
        b.exports = {
          narrowWidth: "500px",
          Reason: "_2m2v9tWbf72NndX7vCQd3D",
          TopLine: "_1-A6rmFS2woZVY0AjEpaRx",
          Icon: "_2DPsFVf6FeqLONYXI_xame",
          Positive: "_2JQ3YzNKEfGoIo7Y4JIPZo",
          Negative: "_3vjAexY4vrU7H4bRPWQS1P",
          Additional: "A9r5gdP2l607_aZQG4U0f",
          Divider: "QsaD3B8iBvo8FI0s8Heyb",
        };
      },
      57102: (b) => {
        b.exports = {
          TagList: "_3jV1ymbnCcg8o3qq78ndN7",
          Tag: "gctfUSqAf4-wM1_s7LW7C",
        };
      },
      74049: (b) => {
        b.exports = {
          VerdictIcon: "_9yuiPD5NCU4QYi8jzKFrC",
          VerdictIconDown: "_2j8Acce2gU2Mnn4slpUyTf",
        };
      },
      94255: (b) => {
        b.exports = {
          ShopLink: "lqD2vDqW515szC9Dt3o8c",
          Items: "pge6cRE3xuT4D-kvcijJs",
          ActivateLabel: "Ywd6FXH3HxWEfSO_4XhD",
          Link: "_2773Feh3LQ2SD5dtpRj6hJ",
          AllText: "IfnLtAVfojeH3V-6ObQjr",
          Narrow: "_1ElroLhDfZVa0RFIGapb2J",
          Wide: "_3wGfw-n0Vvme1W7TMRVn1I",
          ShowLink: "_1VS2woF-3sJBcdv8ku8V7m",
          OverlayLink: "_9c2z0an8oHdeFIpJYVdD6",
          InlineLink: "_3qVPPRLyJLnqCVDKgRBYMz",
          ResponsiveLink: "V1oPnW4SHTQZyfLtIOACA",
          Text: "_1VPalkyDcngLWmtdDU2UOT",
          Arrow: "_2UhU5Y9TVx7gCVaf863aKB",
        };
      },
      75995: (b) => {
        b.exports = {
          SteamAwards: "jJURdXW1ChOFN-_p287Zm",
          Banner: "FIGm-_qZMzF3jFUHQ3WnL",
          Titles: "_2J_cQuvocvg37gIlzurEay",
          Winner: "n_444AQvZuBuGzXn2ekfZ",
          Category: "_3kIk6XVA93BAg1PpnlC8jR",
          Year: "jlMMBNsV2V8eRl6Kr0Vsn",
          Year2023: "_3QOYUCrBHECSTWOJukosMs",
          Year2024: "_2TAHqCxVB487j7ILyr5mt3",
          Year2025: "_23ICoTwOCxBIpOwj40sp4h",
        };
      },
      48338: (b) => {
        b.exports = { StoreAwards: "_1CixVKuNHvP6aAZqdbx6nN" };
      },
      3471: (b) => {
        b.exports = {
          narrowWidth: "500px",
          Summary: "_3Prm5m5vhL6ZyDzq9BAi-Q",
          FeatureList: "_3Vfkk-MdImFuKEOrcb0-iS",
          CategoryIcon: "_3q4P9LQHRxDb5N6xxg2cno",
          FeatureNameContainer: "_22m8Q03ftyieJoZUjjJh7f",
          GroupLabel: "_3B6ryPkScWm0fGLpTRaOdy",
          FeatureGroupItems: "_3pZio2UegeDHK5If5lsACR",
          InfoRow: "MebJlVvjledfLjBzNnZks",
          FeatureName: "_2XVo6DmEk_3H8El012J6n3",
          Details: "_3i5pyKjdWnRPqCqWMAmwAb",
          ImageContainer: "_2hLfFwbFsdutlEoG1YjlJe",
          TextBox: "_2_4UfjDA56JkBQwKFByppO",
          Open: "_3qssZq9veZ21NuSSKhTJzE",
          Closed: "HymTK4fzKIl6TGUAtolY6",
          Image: "_33C0hhqH__tmabqGo9QM7O",
          LanguageGrid: "r1YWhYsuFs6pCiaVudl7_",
          LanguageTable: "_1n3a9ye5GfFJ8UdeJ_lC3x",
          LanguageName: "_1gw_w8O9ZchSa2H7_sKPn8",
          CheckColumn: "lPImL9ec29fzNjpS8eeK",
          IconColumn: "_3a5h4jO6SE2kOxAYQfL9Fo",
          SmallIcon: "_2f_urgKOdrn6b3U0a-jFtr",
          Name: "_1J6g7KRhXGw5v-ypP0JKr1",
          Preferred: "_1oX4_5EeXRAXfEE_XiMdjI",
          ShowAll: "_2XP4Qg7E45wuX1whgAsXdH",
          Legend: "_3-IKyLDYxOmAynwPHDVNBL",
          LegendIconContainer: "_2LWUNzwOXwiI1D7TCBxdmE",
          LegendIcon: "_33w2I_6YeeKbxCFtG37Hwh",
        };
      },
      33001: (b) => {
        b.exports = {
          narrowWidth: "500px",
          StorePageBBCode: "_3n5Cn3P3AZI_zLOe5_jB9D",
          StoreImage: "L_7jPXkXscN-QxB458CKV",
          StoreVideo: "_1SedSl74BXCZ_7ixbPl5ml",
        };
      },
      48205: (b) => {
        b.exports = {
          SummaryBarTop: "_1Som9GnszokLGAScqhSozy",
          SummaryBarSection: "_1eIF6oOHrg65kqvbTZmsnv",
          SteamDeckCompat: "_3q5iA4c82x-s_zPm2_mCo6",
          SteamDeckCompatContent: "_3qJR5P57v1Vom-xKZtX_qF",
          HWCompatWrapper: "U0BM13LMuE54MZPv298tt",
          UserTags: "lNpjDNeYU0mE_mITujuVJ",
          Tags: "A_YEuhEOff4v5HceIOAPP",
          Title: "Iuddf6nrTCmOY1Cgf_Gw_",
        };
      },
      31518: (b) => {
        b.exports = {
          CategoriesMenuOption: "_2-cvnCNnFqBG5u89enudpK",
          Label: "KldL9MJqWdVCahi3zvX-E",
          HeaderCtn: "_3WNoErKGw4jngFeVPfTZfs",
        };
      },
      32384: (b) => {
        b.exports = { PrePurchaseTag: "_3YeaCPVOebCGSdpWg3IN5l" };
      },
      37520: (b) => {
        b.exports = {
          DialogContent: "_16pXKCOoRIbFwtZHgqjB8K",
          SearchForm: "WKTuaTjd0YaeJa49cFaSk",
          AddCategoryBtnCtn: "_2iyGkBsDUSp94uk2MlLz1W",
          Visible: "_2MUWoUxUqeFYQh8spy5bpH",
          SearchInput: "_3MO9bYl8-oPkXVO9nu_FXh",
          CategorySelectorCtn: "dGWKt0BhpSa4efl8jRzwR",
          ListHeader: "Y4Cx2WnIKvFCo_RLEflGd",
          DialogCategoryCtn: "_1lH7WZP40yb1SOyXWbcjOH",
          Suggested: "_1ma6_Ey6CqTCDCkq0tqrH4",
          MaxCategoriesMessage: "_223Zevm4T9O8RGEnzI5jHT",
          Buttons: "_2_jN6aSsudj0rOSKRlnwP9",
        };
      },
      46146: (b) => {
        b.exports = {
          wishlistCategoryMaxDisplayChars: "30",
          CategoriesCtn: "_1Ua4366mxFvXUSFTfIlJ-i",
          CategoryListHeader: "_3Ra2jK42XFbrJlIPtsmMfC",
          CategoryList: "_1FrjJkMKzXxdevx_oYK2Nx",
          Multiline: "_16SkCu-YheGIHn8_WtMVnd",
          ForceDefaultSize: "wxjYffVQAVCuubF0aydb5",
          Small: "Tj_sAx3peeMFFwrrnIjIK",
          CategoryBtn: "_1c0u5zo_wZGsAM08nfEEKu",
          NotActionable: "ySn3WlbDgR3ay1P7i3gjT",
          CategoryName: "_1QX11E_2wBgWuzEO7M7ps9",
          Focused: "_2BMRaClxLpIT5YJoDcejhm",
          Selected: "_2vVKhV_YC031wyUrFu6vJx",
          Removable: "_2rdKi5D2dn1dWLtySZS1w7",
          CategorySettingsBtn: "KA8f-sx_XEMnp78-pwZgl",
        };
      },
      6019: (b) => {
        b.exports = {
          TileContainer: "_3YSNlqOERJPDvATbhSyba4",
          TileTitleContainer: "huv5kmY_qRW6CUhP41AX4",
          TileTitleInnerContainer: "_3SemwneNsiLL2pOP4TMon4",
          TileTitle: "_3VhToXcFT_z0HLnw5z1X2d",
          TileActionButton: "NxUN-s-MoparNLrvqVXsN",
          TileSubtitle: "_2FwWgtYbin1N6QcDJJEU3v",
          TileActionContainer: "_1AC_XZBw0R_ud0pPAJ1Nln",
          TileActionInnerContainer: "_2H9PUu43H_69AuO6gTZVdC",
          TileActionInner: "_3Fxxrw6yvbcJc-MzPwHIpB",
          TileActionInnerTitle: "zB1xwvSCbLzyQMcJvBafw",
          TileActionInnerText: "-piyES0-cnJFXEv4BGexr",
        };
      },
      12037: (b) => {
        b.exports = {
          "duration-app-launch": "800ms",
          Container: "_2Jd3MGaOu0C9Ydswf8Q4Tn",
          SectionButton: "_3n8swQFM3I_ARVM_5bPhAs",
          StoreHeaderAdjust: "_3YyCpH32HRhZtt4BOM5wM5",
          EventsSummariesCtn: "_1snIw0RvJduvDtqpmwtKJ9",
          LatestUpdateButtonCtn: "_2vEwZPNBe2qcTuxZf5cpiD",
          LatestUpdateIcon: "mq3ROvmcn5_HdCKG6JXDa",
          LatestUpdateButton: "_1TRFtE8IfXpDQ_loHnB_bU",
          BackgroundAnimation: "_295HzH0_Gg7fchG1zO9Km7",
          "ItemFocusAnim-darkerGrey-nocolor": "_291aUneSnsR7SSD43BPEYt",
          "ItemFocusAnim-darkerGrey": "_3T-aeBZd_novjXZhPEqJ_L",
          "ItemFocusAnim-darkGreySettings": "ekd5ku98aKtUXOuTnlUpj",
          "ItemFocusAnim-darkGrey": "peNld_fsioxlGFxQfdd8I",
          "ItemFocusAnim-grey": "_1433gddOHXCko3qPvXFRFS",
          "ItemFocusAnim-translucent-white-10": "_3ZEmb3nXVV6Jl3vO3gd3n2",
          "ItemFocusAnim-translucent-white-20": "EoCuk2lmX0KUPR7Ja5J0J",
          "ItemFocusAnimBorder-darkGrey": "_3FtKchinLpLv8OXrbvS81w",
          "ItemFocusAnim-green": "_23vh8vhEvEmJ5bnq2YZfx8",
          focusAnimation: "wTWp1KqP_zaAfiOc2ovCo",
          hoverAnimation: "_2knkM4Dk-kiPNpW81PgE0Y",
        };
      },
      97824: (b) => {
        b.exports = {
          OpenInBannerContainer: "_1EQpm6hAsghyCST7W04m-E",
          OpenInBannerContent: "_13oFTFTjvz0YaOVnWZxyqr",
          ValveOnly: "_3jg5qxP4_hiZYa6-GJDCOp",
          BannerMessage: "_1HSa8QK0U-qQCGObG6XYFT",
          BannerTitle: "_3Xfc_DOo4BUZBmxkSRmD6y",
          BannerButtonContainer: "_1lwkSayKFi-9WCDd6pq5bV",
          BannerButton: "_1jso7z80FWGn42k1HP0_cf",
        };
      },
      27510: (b) => {
        b.exports = {
          "duration-app-launch": "800ms",
          PurchaseNoticeContainer: "_2wT0yS1pvmL0ILuaiLHaBb",
          RightHandImage: "_3G-YXeWc1jffse8M8ct7hJ",
          PurchaseNoticeLabel: "dTa5uAAOq-wFRgQQG7xRm",
          PurchaseNoticeImageContainer: "_3Q2RgkhEvzbM10OBqMeTDB",
          VRSupported: "iqWk_VV3jdvFbRFaBkWRB",
          PurchaseNoticeImage: "_19Tk4I5-EL-sVXsUaa3hwU",
          Tilt: "_3dAAfHHQ8xq74OLmQXo9V4",
          VROnly: "_11BzgaR-a1UCE-aOC3bMCD",
          BackgroundAnimation: "_1J1jrrETaG-3_8wMEeqpxY",
          "ItemFocusAnim-darkerGrey-nocolor": "_3yvzhClP6mJaghIH0GHKiv",
          "ItemFocusAnim-darkerGrey": "_1czfyTnV7yzFQJdFsTmDJT",
          "ItemFocusAnim-darkGreySettings": "_20J2LUfIRwm4TI5vyu-UFE",
          "ItemFocusAnim-darkGrey": "_1_qHMTE8sRRjCMuxLoZMl2",
          "ItemFocusAnim-grey": "jagchSyBiPamV4PALsowV",
          "ItemFocusAnim-translucent-white-10": "_3ZVEkEzGePMK1PBQ_GpIb1",
          "ItemFocusAnim-translucent-white-20": "_38eVNkJEvCSuIwBUyo7Qrg",
          "ItemFocusAnimBorder-darkGrey": "_2C7zuRFt6F6RcgTOiWBVnr",
          "ItemFocusAnim-green": "_1IMTjdceyCiJjpowdAaHgY",
          focusAnimation: "_1tLo_FTRTZsAztlpw36eHl",
          hoverAnimation: "_3oGieUcvOTZppk7m3PHA6L",
        };
      },
      63404: (b) => {
        b.exports = {
          narrowWidth: "500px",
          Details: "_8DSX9d1ihrMSeZUFC9elD",
          Summary: "_1FCh_hPFNuwj9vrVDMOvMC",
          FeatureList: "TwihVkmmqI5XLg6P4fpwF",
          CategoryIcon: "_1GkKPFI1K10GLg9538MMAF",
          FeatureNameContainer: "_3sRe2CGQBgablPBz9Bc9c2",
          GroupLabel: "_2079QFhY02KJ4KxGMltDNJ",
          FeatureGroupItems: "_2WWlH-JTbq_f1PEyooC78U",
          InfoRow: "_1RmibngWLogcFmO93kGFgq",
          FeatureName: "ny6hWVK6ii05H200KRhds",
          ImageContainer: "_29jQMo9DGCmcSKyDIC3V7M",
          InfoLink: "_2xmH7agKi37v9kwFHi093S",
        };
      },
      17479: (b) => {
        b.exports = {
          narrowWidth: "500px",
          ReleaseDateInfoCtn: "_3_BM0Yr1nZHLRCU-YScHph",
          GameEditCtn: "_2atDY79LoAg6W2I3f_ghoe",
          ReleaseDateContent: "_3EqL95FAclb4_KUCViyIy",
          EditButton: "_1nt4AvPVzCcmifUL2j41GY",
          Spacer: "D6yaJy1vHTj3skoSwQCmn",
          Top: "_17TBmwVnz8B0fYk9NMgjcC",
          Bottom: "_1mdhhjdhefzfINtpGJDw_F",
          EditButtonIcon: "_23n7mGKR9t2rn_appk4hc4",
          LabelField: "_1yV1XMUdZdavVgSZ6SzXKj",
          Label: "_2aDfpXF8ktFHq439q_1vAi",
          BigField: "_3K2oJx5qEZyMkC2O7Ib77p",
          Set: "_1CXRFvJ5iqKqlENSWgeHPP",
          DescText: "_3FFbGIjpM4z0O1HfqwwsvR",
          StatusText: "jBW2mrF7D6RVhT2u_ZRXB",
          StartWizardButton: "_1hwFIOidJj1HaD2_cI4NRD",
          ControllerSupportLevelString: "_1mfBI5XbiaKU9vS5WkJALu",
          InfoRow: "_2xZaMR-NKc0LbkeM50cZq8",
          LocSection: "_3KAysk4dlhWETa6ixz7V2j",
          HighlightText: "_2Qr-aCeNvCUkoGKh3ikniD",
          GamepadRequired: "xAMFa9akLaRN7hfkTC8_h",
          Personalized: "_1g3WgidGN68CDX4XQPGnl6",
          HighlightRow: "N97okiqePUqGpdeNrIxUU",
          LocString: "_3FBEGAfvLQj4qYjstmZAPE",
          ImgSection: "dxuI55RF56-dzbuXjj2W0",
          SmallerSVG: "_1LWvkVSCiVeG4Yf5uxtQ28",
          BiggerSVG: "WRiytnKTtULWCkwFVJoTx",
          PreviewContainer: "_13bOrUeolqp9EyK3or-cLt",
          StoreSidebarContainer: "_1CTHwmZmi5YE4kovZH_UIl",
          PurchaseNoticeContainer: "_166hsSkQYxKraMJIx7td91",
          PurchaseNoticeImage: "_3UK9OHyZ3r9rA55mgsnZPD",
          NoticeContainer: "_2IS5rvIlv3ARam8O7b_-po",
          ControllerRequiredImage: "_3YEJ5NoOg1YObev3TXdMi",
          Tilt: "_1NEHd7t-JVZYdk68QMEph-",
          ToolTipControl: "_3vt5rw82YhkhWtu5ld9QeP",
          ToolTipContainer: "_3PRdiJdKKfTnwLnTfbCkEz",
        };
      },
      51249: (b) => {
        b.exports = {
          narrowWidth: "500px",
          Header: "_1QLD0WY-y0hqefed0ZhMn1",
          FullWidth: "xCXUyx3dF-dUDB7Y3lQp0",
          CarouselContentsRow: "_2CT-9HYp0yLUhxQviGsEM",
          WithFollowSection: "_2qwt8I2HnbOSGvdebzv4hf",
          CreatorHomeWithItems: "XIDYByW4BEOm-YiOiwGmO",
          WithFollowBtn: "Md5hrkaRH5SlzG0VFNLCQ",
          Carousel: "_3FF8OOtLO0K4fsjePly_rQ",
          Background: "_2Tqj7EzRCeIvjCq0R1MZiy",
          AvatarBackground: "_3SJGdY8UrEOW9-M8zAiXEi",
          ClanInfoRow: "_1KPIgTd9QjHihuus7qFfvw",
          ButtonContainer: "_3o1Ri_nyL6GsPbTQZGSZcT",
          CarouselFollowButton: "_33J1_MYWJVjXbCkBFCNr6f",
          ClanName: "_1l0-iEDSNo_iZ95BUT31hW",
          ClanAvatarImage: "PO1KWbUEvLt8ZVYRTAvMt",
          CarouselFollowSection: "_3-Zh-Ypvsn0buzyWGzuOQf",
          ClanInfoColumn: "fL1BVr1TCO7p3NcU6YlxG",
          CreatorHomeWithoutItems: "_24bEdzyRcz_FKDUqulljpX",
          ClanFollowTitle: "cSNCliWjnECzm1QAZPjDw",
          ClanFollowButtonContainer: "_2CipbQE9-jPKtQxmGJxtAs",
          FollowButton: "sAZjP8hrS9narmNgqgbXf",
        };
      },
      94846: (b) => {
        b.exports = {
          narrowWidth: "500px",
          ParentWidgetContainer: "_2fynndXXlBKZiRaoG9GuDP",
          ParentCapsuleImageContainer: "mcjC8_8ivZdyhU3QKlFrN",
          ParentCapsuleImage: "_2Ti5cIvl7SlIoK7eSIapbL",
          GameName: "_2xz5bttITZV5JH17r1qZsG",
          AppDetails: "IaIxKAMKgbunAgg62ymgi",
          PriceContainer: "_2i6LXaKqXiO0KV4Im0Fw-0",
          AddToWishlistButton: "RccYVBGN6ikWjuKE_Ba6N",
        };
      },
      1205: (b) => {
        b.exports = {
          narrowWidth: "500px",
          Header: "kR_xyFf2ghgC-Jexsw_5v",
          FullWidth: "_263kQddRJk-a3OP3ANz0Bv",
          StoreItemsCarousel: "_2BG1JKMgeqn_cr0rbRhRNA",
          StorePageCarousel: "_1wsWr6qsx_k-ElMmSpGcf",
          Title: "_2BGZunVy7Z0-h18owewCzo",
        };
      },
      89524: (b) => {
        b.exports = {
          "duration-app-launch": "800ms",
          narrowWidth: "500px",
          strScrollSnapCarouselItemHeight: "168px",
          Carousel: "jGiY7rrZh0o9qrh7XNnZU",
          Capsule: "_292IWiCTro5jiTmIxiDfyc",
          Small: "_1mQ-hKJYGkL9gG76spf6uy",
          TwoWide: "_25IMXSN3XeXOPiu-sYHV1U",
          Placeholder: "_1tX6f_kWb07D_qLWgL7-Ah",
          SeeAllLink: "_1SnxJyZ5foWgNRCNLmKm6H",
          BackgroundAnimation: "_1upvVPGAs4gPDPuPdiwYLw",
          "ItemFocusAnim-darkerGrey-nocolor": "HZYxQObJqyV14ZPiEV6Lk",
          "ItemFocusAnim-darkerGrey": "_2ezINEgZ6JsrAsAeqd9me7",
          "ItemFocusAnim-darkGreySettings": "_3hMFH9HQiviY-7U9Fku-Bk",
          "ItemFocusAnim-darkGrey": "_1X6dhTonzVQgrOwVCmKMAA",
          "ItemFocusAnim-grey": "_10lr_URcMaBKxQoDCDSiW9",
          "ItemFocusAnim-translucent-white-10": "_2qAvXvRSJ5YY0wBBIwBCVs",
          "ItemFocusAnim-translucent-white-20": "_1jA2vfdCnoLEOAQXduMla",
          "ItemFocusAnimBorder-darkGrey": "_24pyz7i5duUDYEkH6dcM8a",
          "ItemFocusAnim-green": "_1Z9fl4e9G4PQnLxyIHXNKG",
          focusAnimation: "_268HCaPK9gD6A2Mw_o7sqP",
          hoverAnimation: "DbNTwkzqEh5siXLRNvICD",
        };
      },
    },
  ]);
})();

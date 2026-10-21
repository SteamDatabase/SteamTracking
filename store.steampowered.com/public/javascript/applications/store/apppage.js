/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [57333, 38843, 4874],
    {
      13558: (P, je, i) => {
        "use strict";
        i.d(je, { Tv: () => se, _u: () => ve });
        var t = i(7850),
          d = i(90626),
          D = i(36707),
          te = i(93237),
          K = i.n(te);
        const re = 10;
        function J(_) {
          return _ === void 0 ? !1 : _ <= re;
        }
        const w = new WeakMap();
        function L(_, Z) {
          for (const X of _.groups) {
            let H = w.get(X.achievements);
            H ||
              ((H = new Map(
                X.achievements.map((he) => [he.api_name, he.internal_key]),
              )),
              w.set(X.achievements, H));
            const fe = H.get(Z);
            if (fe !== void 0) return fe;
          }
        }
        function T(_) {
          return (_?.groups_achievable?.total ?? 0) != 0;
        }
        function de(_, Z, X) {
          return _.achievements.some(
            (H) => (!_.archived && !H.archived) || ae(H, Z, X),
          );
        }
        function ae(_, Z, X) {
          return (
            Z?.achievements[_.internal_key]?.unlocked == !0 ||
            (X?.some((H) => H?.achievements[_.internal_key]?.unlocked == !0) ??
              !1)
          );
        }
        function ge(_, Z) {
          if (Array.isArray(_))
            return (
              _.length > 1 ||
              (_.length == 1 && _[0] !== k_DefaultAchievementGroup)
            );
          {
            const X = _.groups.filter((H) => de(H, Z));
            return (
              X.length > 1 ||
              (X.length == 1 && X[0].id !== k_DefaultAchievementGroup)
            );
          }
        }
        function be(_, Z) {
          return new Intl.DateTimeFormat(GetPreferredLocales(), {
            year: "numeric",
            month: "short",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            hourCycle: Z ? "h23" : void 0,
          }).format(new Date(_ * 1e3));
        }
        function ye(_, Z) {
          return AchievementsLocalization.Localize(
            "#Achievements_PercentFormat",
            _.toLocaleString(GetPreferredLocales(), Z),
          );
        }
        function Q(_, Z) {
          const X = Z > 0 ? _ / Z : 0,
            H = ye(X * 100, { maximumFractionDigits: Z > 100 ? 1 : 0 });
          return { percentUnlocked: X, percentUnlockedStr: H };
        }
        function C(_) {
          return _ === void 0
            ? ""
            : ye(_, { maximumFractionDigits: 1, minimumFractionDigits: 1 });
        }
        function xe(_) {
          return AchievementsLocalization.Localize(
            "#Achievements_Tooltip_GlobalUnlockPercent",
            C(_),
          );
        }
        function N(_, Z) {
          return Z
            ? {
                name: AchievementsLocalization.Localize(
                  "#AchievementSpoilerName",
                ),
                description: AchievementsLocalization.Localize(
                  "#AchievementSpoilerDescription",
                ),
              }
            : { name: _.name ?? "", description: _.description ?? "" };
        }
        function U(_) {
          return _ >= 17891964e-1;
        }
        var h = i(64082);
        function Ie(_) {
          if (_ !== void 0)
            return { "--icon-size": _ == "fill" ? "100%" : `${_}px` };
        }
        function ve(_) {
          const {
              imgURL: Z,
              glow: X,
              pauseAnimation: H,
              hidden: fe,
              alt: he,
              hideNativeTooltip: Ee = !1,
              className: Se,
              size: Ne,
              ...Qe
            } = _,
            [ue, Be] = d.useState(!1),
            Vt = d.useCallback((sn) => {
              sn &&
                (sn.complete
                  ? Be(!0)
                  : (sn.onload = () => {
                      Be(!0);
                    }));
            }, []),
            nn = X && (fe || ue),
            Wt = Ie(Ne);
          return (0, t.jsxs)("div", {
            className: (0, D.A)(
              K().AchievementIconWrapper,
              Se,
              H && K().RareAchievementNoAnimation,
            ),
            style: Wt,
            ...Qe,
            children: [
              nn &&
                (0, t.jsx)("div", {
                  className: K().RareAchievementIconGlowContainerRoot,
                  children: (0, t.jsx)("div", {
                    className: K().RareAchievementIconGlowContainer,
                    children: (0, t.jsx)("div", {
                      className: K().RareAchievementIconGlow,
                    }),
                  }),
                }),
              fe
                ? (0, t.jsx)("div", {
                    className: (0, D.A)(K().HiddenLabel, nn && K().IconGlow),
                    children: "?",
                  })
                : (0, t.jsx)("img", {
                    ref: Vt,
                    className: (0, D.A)(K().Icon, nn && K().IconGlow),
                    src: Z == "" ? void 0 : Z,
                    loading: "lazy",
                    alt: he,
                    title: Ee ? void 0 : he,
                  }),
            ],
          });
        }
        function se(_) {
          const {
              achievement: Z,
              globalUnlockPercentage: X,
              unlocked: H,
              forceVisible: fe = !1,
              hidden: he,
              ...Ee
            } = _,
            Se = he ?? (H ? !1 : !fe && Z.hidden),
            Ne = (H ? Z.icon_achieved : Z.icon_unachieved) ?? "",
            Qe = H && J(X),
            ue = Se ? h.c.Localize("#AchievementSpoilerName") : (Z.name ?? " ");
          return (0, t.jsx)(ve, {
            hidden: Se,
            imgURL: Ne,
            glow: Qe,
            alt: ue,
            ...Ee,
          });
        }
        function Pe(_) {
          const {
              hidden: Z,
              forceVisible: X,
              size: H,
              className: fe,
              style: he,
              onClick: Ee,
              unlocked: Se,
              ...Ne
            } = _,
            { appid: Qe, achievement: ue, progress: Be } = Ne,
            Vt = useGlobalAchievementPercentage(Qe, ue.internal_key);
          return jsx(AchievementToolTip, {
            ...Ne,
            children: jsx(se, {
              achievement: ue,
              globalUnlockPercentage: Vt,
              unlocked: Se ?? Be?.unlocked ?? !1,
              hidden: Z,
              forceVisible: X,
              size: H,
              className: fe,
              style: he,
              onClick: Ee,
              hideNativeTooltip: !0,
            }),
          });
        }
      },
      98001: (P, je, i) => {
        "use strict";
        i.d(je, { v: () => D });
        var t = i(72609);
        function d(te) {
          const { appid: K, profileUrl: re, dlc: J } = te,
            w = re
              ? `${re}/achievements/${K}`
              : `${t.TS.COMMUNITY_BASE_URL}achievements/${K}`;
          return J !== void 0 ? `${w}?dlc=${J}` : w;
        }
        function D(te) {
          return d(te);
        }
      },
      64082: (P, je, i) => {
        "use strict";
        i.d(je, { c: () => te });
        var t = i(37901);
        const d = {};
        (d.arabic = () => i.e(94507).then(i.t.bind(i, 94507, 19))),
          (d.brazilian = () => i.e(29815).then(i.t.bind(i, 29815, 19))),
          (d.bulgarian = () => i.e(79200).then(i.t.bind(i, 79200, 19))),
          (d.czech = () => i.e(81142).then(i.t.bind(i, 81142, 19))),
          (d.danish = () => i.e(42394).then(i.t.bind(i, 42394, 19))),
          (d.dutch = () => i.e(80559).then(i.t.bind(i, 80559, 19))),
          (d.english = () => i.e(92885).then(i.t.bind(i, 92885, 19))),
          (d.finnish = () => i.e(22754).then(i.t.bind(i, 22754, 19))),
          (d.french = () => i.e(89627).then(i.t.bind(i, 89627, 19))),
          (d.german = () => i.e(8281).then(i.t.bind(i, 8281, 19))),
          (d.greek = () => i.e(53749).then(i.t.bind(i, 53749, 19))),
          (d.hungarian = () => i.e(88180).then(i.t.bind(i, 88180, 19))),
          (d.indonesian = () => i.e(13303).then(i.t.bind(i, 13303, 19))),
          (d.italian = () => i.e(28757).then(i.t.bind(i, 28757, 19))),
          (d.japanese = () => i.e(88468).then(i.t.bind(i, 88468, 19))),
          (d.koreana = () => i.e(82558).then(i.t.bind(i, 82558, 19))),
          (d.latam = () => i.e(3894).then(i.t.bind(i, 3894, 19))),
          (d.malay = () => i.e(35957).then(i.t.bind(i, 35957, 19))),
          (d.norwegian = () => i.e(43081).then(i.t.bind(i, 43081, 19))),
          (d.polish = () => i.e(63822).then(i.t.bind(i, 63822, 19))),
          (d.portuguese = () => i.e(16470).then(i.t.bind(i, 16470, 19))),
          (d.romanian = () => i.e(46488).then(i.t.bind(i, 46488, 19))),
          (d.russian = () => i.e(50272).then(i.t.bind(i, 50272, 19))),
          (d.sc_schinese = () => i.e(88794).then(i.t.bind(i, 88794, 19))),
          (d.schinese = () => i.e(15171).then(i.t.bind(i, 15171, 19))),
          (d.spanish = () => i.e(34341).then(i.t.bind(i, 34341, 19))),
          (d.swedish = () => i.e(61844).then(i.t.bind(i, 61844, 19))),
          (d.tchinese = () => i.e(71088).then(i.t.bind(i, 71088, 19))),
          (d.thai = () => i.e(49829).then(i.t.bind(i, 49829, 19))),
          (d.turkish = () => i.e(95917).then(i.t.bind(i, 95917, 19))),
          (d.ukrainian = () => i.e(15151).then(i.t.bind(i, 15151, 19))),
          (d.vietnamese = () => i.e(53460).then(i.t.bind(i, 53460, 19)));
        async function D(K) {
          if (d[K]) return d[K]();
        }
        const te = (0, t.l)(D);
      },
      71989: (P, je, i) => {
        "use strict";
        i.d(je, { _: () => re });
        var t = i(7850),
          d = i(8928),
          D = i(69289),
          te = i(89611),
          K = i.n(te);
        function re(w) {
          const L = (0, D.mz)({ ...w, className: w.className }, J);
          return (0, t.jsx)("img", { ...L });
        }
        const J = [
          ...d.h,
          {
            prop: "objectFit",
            className: te.ObjectFit,
            cssProperty: "--object-fit",
          },
          {
            prop: "objectPosition",
            className: te.ObjectPosition,
            cssProperty: "--object-position",
          },
        ];
      },
      84909: (P, je, i) => {
        "use strict";
        i.d(je, { AM: () => _, Pr: () => se });
        var t = i(7850),
          d = i(90626),
          D = i(73788),
          te = i(8083),
          K = i(94621),
          re = i(18938),
          J = i(24660),
          w = i(38566),
          L = i(54130),
          T = i(71742),
          de = i(64238),
          ae = i.n(de),
          ge = i(3877),
          be = i(3166),
          ye = i(28020);
        const Q = (0, d.createContext)(null);
        function C(Z) {
          const { children: X, ...H } = Z,
            fe = ve(H);
          return (0, t.jsx)(Q.Provider, { value: fe, children: X });
        }
        function xe(Z) {
          const { children: X } = Z,
            H = d.Children.only(X),
            fe = (0, d.useContext)(Q);
          return H
            ? fe
              ? (0, d.cloneElement)(H, {
                  ...fe.getReferenceProps(H.props),
                  ref: (0, re.XB)(H.props.ref, fe.floating.refs.setReference),
                })
              : (console.error(
                  "<PopoverAnchor> must be a child of <PopoverRoot>.",
                ),
                null)
            : null;
        }
        function N(Z) {
          const { children: X, className: H, ref: fe, label: he } = Z,
            Ee = (0, d.useContext)(Q),
            Se = (0, D.SV)([fe, Ee?.floating.refs.setFloating]);
          if (!Ee)
            return (
              console.error(
                "<Popover.Positioner> must be a child of <Popover.Root>.",
              ),
              null
            );
          if (!Ee.open) return null;
          let Ne = d.Children.only(X),
            Qe = d.Fragment;
          return (
            Ne.type == _.FocusManager &&
              ((Ne = d.Children.only(Ne.props.children)), (Qe = U)),
            (0, t.jsx)(Qe, {
              children: (0, t.jsx)(ye.HF, {
                presentation: Ee.presentation,
                sizing: Ee.sizing,
                floatingRef: Se,
                floatingProps: Ee.getFloatingProps(),
                floatingStyles: Ee.floating.floatingStyles,
                referenceElement: Ee.floating.elements.domReference,
                className: ae()((0, ge.T)(), H),
                label: he,
                children: Ne,
              }),
            })
          );
        }
        function U(Z) {
          return (0, be.Qn)()
            ? (0, t.jsx)(h, { ...Z })
            : (0, t.jsx)(Ie, { ...Z });
        }
        function h(Z) {
          const { children: X } = Z,
            H = (0, d.useContext)(Q);
          (0, T.wT)(
            !!H,
            "<Popover.Positioner> must be a child of <Popover.Root>.",
          );
          const fe = () => H.floating.context.onOpenChange(!1),
            he = d.useRef(void 0);
          return (
            (0, J.O7)(he, !0, !0),
            (0, t.jsx)(w.D6, {
              navID: "Popover",
              onCancelButton: fe,
              modal: !0,
              navTreeRef: he,
              children: (0, t.jsx)("div", {
                style: { display: "contents" },
                children: (0, t.jsx)(L.q, { children: X }),
              }),
            })
          );
        }
        function Ie(Z) {
          const { children: X } = Z,
            H = (0, d.useContext)(Q);
          return (
            (0, T.wT)(
              !!H,
              "<Popover.Positioner> must be a child of <Popover.Root>.",
            ),
            (0, t.jsx)(D.s3, {
              context: H.floating.context,
              initialFocus: -1,
              returnFocus: !1,
              children: X,
            })
          );
        }
        function ve(Z) {
          const {
            open: X,
            interactions: H = {},
            width: fe,
            maxHeight: he,
            gutter: Ee,
            scroll: Se,
          } = Z;
          let Ne = X;
          const Qe = (0, ye.Pr)(Z.presentation),
            ue = se(Z, Ne, Qe),
            Be = { enabled: !!H.click },
            Vt = typeof H.click == "function" ? H.click(Be) : Be,
            nn = (0, D.kp)(ue.context, Vt),
            Wt = { enabled: !!H.focus },
            sn = typeof H.focus == "function" ? H.focus(Wt) : Wt,
            Sn = (0, D.iQ)(ue.context, sn),
            xn = { handleClose: (0, D.iB)() },
            Mn = typeof H.hover == "function" ? H.hover(xn) : xn,
            M = (0, D.Mk)(ue.context, { enabled: !!H.hover, ...Mn }),
            Gt = (0, D.s9)(ue.context),
            { getFloatingProps: _e, getReferenceProps: ls } = (0, D.bv)([
              nn,
              Sn,
              M,
              Gt,
            ]);
          return {
            floating: ue,
            getFloatingProps: _e,
            getReferenceProps: ls,
            open: Ne,
            presentation: Qe,
            sizing: { width: fe, maxHeight: he, gutter: Ee, scroll: Se },
          };
        }
        function se(Z, X, H) {
          const { onOpenChange: fe, placement: he } = Z,
            Ee = H === "anchor";
          return (0, D.we)({
            open: X,
            onOpenChange: fe,
            middleware: Ee ? Pe(Z) : [],
            whileElementsMounted: Ee ? te.ll : void 0,
            placement: he && typeof he == "object" ? he.initial : he,
            strategy: "fixed",
            platform: {
              ...te.iD,
              getOffsetParent: (Se) => Se?.ownerDocument?.defaultView ?? window,
            },
          });
        }
        function Pe(Z) {
          const { gutter: X = 0, placement: H } = Z,
            fe = [],
            he = H && typeof H == "object";
          return (
            he && H.offset
              ? fe.push((0, K.cY)(H.offset))
              : (!he || H.offset === void 0) && fe.push((0, K.cY)(2)),
            he && H.flip
              ? fe.push((0, K.UU)(H.flip))
              : (!he || H.flip === void 0) && fe.push((0, K.UU)()),
            he && H.shift
              ? fe.push((0, K.BN)(H.shift))
              : (!he || H.shift === void 0) && fe.push((0, K.BN)()),
            fe.push(
              (0, K.Ej)({
                apply: (Ee) => {
                  const { rects: Se, elements: Ne, availableHeight: Qe } = Ee,
                    ue = {
                      boxSizing: "border-box",
                      zIndex: "1",
                      "-webkit-app-region": "no-drag",
                    };
                  switch ((Z.scroll && (ue.overflowY = "auto"), Z.width)) {
                    case "target": {
                      ue.width = `${Se.reference.width}px`;
                      break;
                    }
                    case "content": {
                      ue.width = `${Se.floating.width}px`;
                      break;
                    }
                    case "dropdown": {
                      let Vt = Se.reference.width;
                      Se.floating.width > Vt &&
                        Vt < 200 &&
                        (Vt = Se.floating.width),
                        (ue.width = `${Vt}px`);
                    }
                  }
                  typeof Z.width == "function" &&
                    (ue.width = Z.width({
                      unContentWidth: Se.floating.width,
                      unTargetWidth: Se.reference.width,
                    }));
                  const Be =
                    typeof X == "number" ? `${X}px` : `var(--spacing-${X})`;
                  typeof Z.maxHeight == "function"
                    ? (ue.maxHeight = Z.maxHeight({
                        unAvailableHeight: Qe,
                        gutter: Be,
                      }))
                    : typeof Z.maxHeight == "number"
                      ? (ue.maxHeight = `min( calc( ${Qe}px - ${Be} ), ${Z.maxHeight}px )`)
                      : typeof X == "number"
                        ? (ue.maxHeight = `${Qe - X}px`)
                        : (ue.maxHeight = `calc( ${Qe}px - var(--spacing-${X}) )`),
                    Object.assign(Ne.floating.style, ue),
                    Ne.floating.style.setProperty(
                      "--popover-max-height",
                      ue.maxHeight,
                    );
                },
              }),
            ),
            fe
          );
        }
        const _ = { Root: C, Anchor: xe, Positioner: N, FocusManager: U };
      },
      17171: (P, je, i) => {
        "use strict";
        i.d(je, { w: () => re });
        var t = i(7850),
          d = i(8928),
          D = i(69289),
          te = i(8833),
          K = i.n(te);
        function re(w) {
          const { orientation: L = "horizontal", size: T = "1", ...de } = w;
          return (0, t.jsx)("div", {
            role: "separator",
            "aria-orientation": L,
            ...(0, D.mz)({ ...de, size: T, className: te.Separator }, J),
          });
        }
        const J = [
          ...d.L,
          { prop: "size", className: (w) => te[`Size-${w}`], responsive: !0 },
          {
            prop: "color",
            cssProperty: (w) => ["--separator-color", (0, D.w7)(w)],
          },
        ];
      },
      12204: (P, je, i) => {
        "use strict";
        i.d(je, { V: () => te });
        var t = i(7850),
          d = i(31857);
        const D = {
          up: "rotate( 180, 10, 10 )",
          left: "rotate( 90, 10, 10 )",
          right: "rotate( 270, 10, 10 )",
        };
        function te(K) {
          const { direction: re = "down" } = K,
            J = D[re];
          return (0, t.jsx)(d.I, {
            ...K,
            viewBox: 20,
            children: (0, t.jsx)("path", {
              transform: J,
              d: "M5.14541 6.89977L10.0063 12.2027L14.8671 6.89977C15.3557 6.36674 16.145 6.36674 16.6336 6.89977C17.1221 7.4328 17.1221 8.29385 16.6336 8.82688L10.8832 15.1002C10.3946 15.6333 9.60537 15.6333 9.11678 15.1002L3.36644 8.82688C2.87785 8.29385 2.87785 7.4328 3.36644 6.89977C3.85503 6.38041 4.65682 6.36674 5.14541 6.89977Z",
              fill: "currentColor",
            }),
          });
        }
      },
      95994: (P, je, i) => {
        "use strict";
        i.d(je, { x: () => T });
        var t = i(7850),
          d = i(70182),
          D = i(64238),
          te = i.n(D),
          K = i(8928),
          re = i(69289),
          J = i(75180),
          w = i.n(J),
          L = i(3166);
        function T(ae) {
          const {
              as: ge = "div",
              ref: be,
              focusable: ye,
              navProps: Q,
              ...C
            } = ae,
            xe = (0, L.Qn)(),
            N = (0, re.mz)({ ...C, className: te()(J.Grid, ae.className) }, de),
            U = ye ?? Q?.focusable ?? !!C.onClick,
            h = (0, t.jsx)(ge, { ref: be, ...N });
          return xe
            ? (0, t.jsx)(d.J, {
                "flow-children": "grid",
                ...(Q || {}),
                focusable: U,
                children: h,
              })
            : h;
        }
        const de = [
          ...K.h,
          {
            prop: "display",
            responsive: !0,
            className: J.Display,
            cssProperty: "--grid-display",
          },
          {
            prop: "columns",
            responsive: !0,
            className: J.Columns,
            cssProperty: "--grid-columns",
          },
          {
            prop: "rows",
            responsive: !0,
            className: J.Rows,
            cssProperty: "--grid-rows",
          },
          {
            prop: "autoColumns",
            responsive: !0,
            className: J.AutoColumns,
            cssProperty: "--grid-auto-columns",
          },
          {
            prop: "autoRows",
            responsive: !0,
            className: J.AutoRows,
            cssProperty: "--grid-auto-rows",
          },
          {
            prop: "autoFlow",
            responsive: !0,
            className: J.AutoFlow,
            cssProperty: "--grid-auto-flow",
          },
          {
            prop: "areas",
            responsive: !0,
            className: J.Areas,
            cssProperty: "--grid-areas",
          },
          {
            prop: "flow",
            responsive: !0,
            className: J.Flow,
            cssProperty: "--grid-flow",
          },
          {
            prop: "alignContent",
            responsive: !0,
            className: J.AlignContent,
            cssProperty: "--grid-align-content",
          },
          {
            prop: "justifyContent",
            responsive: !0,
            className: J.JustifyContent,
            cssProperty: "--grid-justify-content",
          },
          {
            prop: "alignItems",
            responsive: !0,
            className: J.AlignItems,
            cssProperty: "--grid-align-items",
          },
          {
            prop: "justifyItems",
            responsive: !0,
            className: J.JustifyItems,
            cssProperty: "--grid-justify-items",
          },
          {
            prop: "gap",
            responsive: !0,
            className: J.Gap,
            cssProperty: (ae) => ["--grid-gap", `var(--spacing-${ae})`],
          },
          {
            prop: "gapX",
            responsive: !0,
            className: J.Gap,
            cssProperty: (ae) => ["--grid-gap-x", `var(--spacing-${ae})`],
          },
          {
            prop: "gapY",
            responsive: !0,
            className: J.Gap,
            cssProperty: (ae) => ["--grid-gap-y", `var(--spacing-${ae})`],
          },
        ];
      },
      57152: (P, je, i) => {
        "use strict";
        i.d(je, { D: () => ge });
        var t = i(7850),
          d = i(39049),
          D = i(8928),
          te = i(15252),
          K = i(69289),
          re = i(90626);
        function J(Q) {
          const { depth: C } = useContext(w);
          return jsx(w.Provider, {
            value: { depth: C + 1 },
            children: jsx(Box, { ...Q }),
          });
        }
        const w = re.createContext({ depth: 0 });
        function L() {
          return (0, re.useContext)(w).depth;
        }
        var T = i(3877),
          de = i(64238),
          ae = i.n(de);
        function ge(Q) {
          const { level: C = "auto", className: xe, color: N } = Q,
            U = L(),
            h = ye(C, U);
          return (0, t.jsx)(h, {
            ...(0, K.mz)(
              { ...Q, className: ae()((0, T.T)(), d.Heading, xe) },
              be,
            ),
          });
        }
        const be = [
          ...te.U6,
          ...D.L,
          {
            prop: "size",
            responsive: !0,
            className: (Q) => d[`HeadingSize-${Q}`],
          },
        ];
        function ye(Q, C) {
          if (Q === "auto" && C === 0) return "h1";
          const xe = Q === "auto" ? C.toString() : Q;
          return /^[1-6]$/.test(xe)
            ? "h" + xe
            : Q === "auto"
              ? (console.error(
                  '<Section> nesting has exceeded "h6" for headings.',
                ),
                "h6")
              : (console.error(
                  `Attempt to render invalid heading level, "${xe}".`,
                ),
                "h1");
        }
      },
      79014: (P, je, i) => {
        "use strict";
        i.d(je, { A: () => D, i: () => d });
        var t = i(90626);
        function d(te, ...K) {
          const re = [],
            J = new RegExp(/(.*?)<(\d+)>(.*?)<\/(\2)>/, "gs");
          let w = 0,
            L;
          for (; (L = J.exec(te)); ) {
            (w += L[0].length), re.push(L[1]);
            const T = parseInt(L[2]),
              de = L[3] || "",
              ae = d(de, ...K),
              be = (T >= 1 && T <= K.length ? K[T - 1] : null)
                ? t.cloneElement(K[T - 1], {}, de ? ae : null)
                : de;
            re.push(be);
          }
          return (
            re.push(te.substr(w)), t.createElement(t.Fragment, null, ...re)
          );
        }
        function D(te, K = ["b", "i", "br"]) {
          const re = K.join("|"),
            J = [],
            w = new RegExp(
              `(?<before>.*?)<(?<tagname>${re})>(?<contents>.*?)(?<endtag><\\/\\2>|$)`,
              "gs",
            );
          let L = 0,
            T;
          for (; (T = w.exec(te)); ) {
            if (!T.groups) continue;
            if (!T.groups?.endtag) {
              const ye = T.groups.before.length + T.groups.tagname.length + 2;
              (L += ye), (w.lastIndex = T.index + ye), J.push(T.groups.before);
              const Q = T[2],
                C = t.createElement(Q);
              J.push(C);
              continue;
            }
            (L += T[0].length), J.push(T.groups.before);
            const de = T.groups.tagname,
              ae = T.groups.contents || "";
            let ge = null;
            ae && (ge = D(ae, K));
            const be = t.createElement(de, {}, ge);
            J.push(be);
          }
          return J.push(te.slice(L)), t.createElement(t.Fragment, null, ...J);
        }
      },
      76962: (P, je, i) => {
        "use strict";
        i.d(je, { y: () => de });
        var t = i(7850),
          d = i(24660),
          D = i(38566),
          te = i(54130),
          K = i(64238),
          re = i.n(K),
          J = i(90626),
          w = i(3166),
          L = i(88208),
          T = i.n(L);
        const de = Object.assign(ae, { Root: ge, Content: ye });
        function ae(Q) {
          const { children: C, className: xe, ...N } = Q;
          return (0, t.jsx)(de.Root, {
            ...N,
            children: (0, t.jsx)(de.Content, { className: xe, children: C }),
          });
        }
        function ge(Q) {
          const {
              onClose: C,
              className: xe,
              navID: N,
              children: U,
              allowScrollBehind: h,
              ...Ie
            } = Q,
            [ve, se] = J.useState(!1),
            Pe = J.useCallback((Z) => {
              Z &&
                (Z.showModal(),
                Z.ownerDocument.defaultView &&
                  se(
                    Z.ownerDocument.body.scrollHeight >
                      Z.ownerDocument.defaultView.innerHeight,
                  ));
            }, []),
            _ = J.useCallback(
              (Z) => {
                Z.target == Z.currentTarget && C("backdropclick");
              },
              [C],
            );
          return (0, t.jsx)(be, {
            navID: N ?? "ModalDialog",
            onClose: C,
            children: (0, t.jsx)("dialog", {
              ref: Pe,
              className: re()(L.ModalDialog, !h && ve && L.PreventScroll, xe),
              onClose: () => C("onclose"),
              onClick: _,
              ...Ie,
              children: (0, t.jsx)(te.q, { children: U }),
            }),
          });
        }
        function be(Q) {
          const { navID: C, onClose: xe, children: N } = Q,
            U = J.useCallback(() => xe("cancelbutton"), [xe]),
            h = J.useRef(void 0);
          return (
            (0, d.O7)(h, !0, !0),
            (0, w.Qn)()
              ? (0, t.jsx)(D.D6, {
                  navID: C ?? "ModalDialog",
                  onCancelButton: U,
                  modal: !0,
                  navTreeRef: h,
                  children: N,
                })
              : (0, t.jsx)(t.Fragment, { children: N })
          );
        }
        function ye(Q) {
          const { className: C, children: xe } = Q;
          return (0, t.jsx)("div", {
            className: re()(L.ModalDialogContent, C),
            onClick: (N) => N.stopPropagation(),
            children: xe,
          });
        }
      },
      47604: (P, je, i) => {
        "use strict";
        i.d(je, { s: () => L });
        var t = i(7850),
          d = i(19298),
          D = i(64238),
          te = i.n(D),
          K = i(36118),
          re = i(76962),
          J = i(5598),
          w = i.n(J);
        function L(T) {
          const {
            onClose: de,
            className: ae,
            navID: ge,
            children: be,
            strTitle: ye,
            wideMode: Q,
            ...C
          } = T;
          return (0, t.jsx)(re.y, {
            onClose: de,
            navID: ge ?? "SimpleModalDialog",
            ...C,
            children: (0, t.jsxs)("div", {
              className: te()(ae, w().SimpleModalDialog, Q && w().WideMode),
              children: [
                " ",
                (0, t.jsxs)(d.Z, {
                  className: w().SimpleModalDialogHeader,
                  children: [
                    ye &&
                      (0, t.jsx)("div", {
                        className: w().SimpleModalDialogTitle,
                        children: ye,
                      }),
                    (0, t.jsx)("button", {
                      onClick: (xe) => (de("xclick"), xe.preventDefault(), !1),
                      className: w().XButton,
                      children: (0, t.jsx)(K.tmm, {}),
                    }),
                  ],
                }),
                (0, t.jsx)("div", {
                  className: w().SimpleModalContentCtn,
                  children: be,
                }),
              ],
            }),
          });
        }
      },
      27990: (P, je, i) => {
        "use strict";
        i.d(je, { W4: () => J, h$: () => L });
        var t = i(7850),
          d = i(90626),
          D = i(72609),
          te = i(38340);
        function K(T, de) {
          return {
            store_page_asset_url: `${D.TS.BASE_URL_SHARED_CDN}store_item_assets/steam/apps/${T}/%s?t=${de}`,
          };
        }
        const re = d.createContext({ store_page_asset_url: "" });
        function J(T) {
          const de =
            T.store_page_asset_url !== void 0
              ? { store_page_asset_url: T.store_page_asset_url }
              : K(T.appid, T.app_last_modified);
          return (0, t.jsx)(re.Provider, { value: de, children: T.children });
        }
        const w = () => d.useContext(re);
        function L() {
          const { store_page_asset_url: T } = w();
          return d.useCallback(
            (de) => {
              if (de)
                if (de.startsWith(te.qR + "/")) {
                  const ae = de.replace(te.qR + "/", "");
                  return T.replace("%s", ae);
                } else return de;
            },
            [T],
          );
        }
      },
      10538: (P, je, i) => {
        "use strict";
        i.r(je), i.d(je, { GameRatingBlock: () => Mi });
        var t = i(7850),
          d = i(37901);
        const D = {};
        (D.arabic = () => i.e(3143).then(i.t.bind(i, 3143, 19))),
          (D.brazilian = () => i.e(38043).then(i.t.bind(i, 38043, 19))),
          (D.bulgarian = () => i.e(60308).then(i.t.bind(i, 60308, 19))),
          (D.czech = () => i.e(99922).then(i.t.bind(i, 99922, 19))),
          (D.danish = () => i.e(32134).then(i.t.bind(i, 32134, 19))),
          (D.dutch = () => i.e(47899).then(i.t.bind(i, 47899, 19))),
          (D.english = () => i.e(31513).then(i.t.bind(i, 31513, 19))),
          (D.finnish = () => i.e(86910).then(i.t.bind(i, 86910, 19))),
          (D.french = () => i.e(67007).then(i.t.bind(i, 67007, 19))),
          (D.german = () => i.e(84597).then(i.t.bind(i, 84597, 19))),
          (D.greek = () => i.e(79169).then(i.t.bind(i, 79169, 19))),
          (D.hungarian = () => i.e(28968).then(i.t.bind(i, 28968, 19))),
          (D.indonesian = () => i.e(17427).then(i.t.bind(i, 17427, 19))),
          (D.italian = () => i.e(65521).then(i.t.bind(i, 65521, 19))),
          (D.japanese = () => i.e(49560).then(i.t.bind(i, 49560, 19))),
          (D.koreana = () => i.e(68858).then(i.t.bind(i, 68858, 19))),
          (D.latam = () => i.e(73682).then(i.t.bind(i, 73682, 19))),
          (D.malay = () => i.e(20073).then(i.t.bind(i, 20073, 19))),
          (D.norwegian = () => i.e(93341).then(i.t.bind(i, 93341, 19))),
          (D.polish = () => i.e(48634).then(i.t.bind(i, 48634, 19))),
          (D.portuguese = () => i.e(64794).then(i.t.bind(i, 64794, 19))),
          (D.romanian = () => i.e(3380).then(i.t.bind(i, 3380, 19))),
          (D.russian = () => i.e(37940).then(i.t.bind(i, 37940, 19))),
          (D.sc_schinese = () => i.e(72910).then(i.t.bind(i, 72910, 19))),
          (D.schinese = () => i.e(3431).then(i.t.bind(i, 3431, 19))),
          (D.spanish = () => i.e(12737).then(i.t.bind(i, 12737, 19))),
          (D.swedish = () => i.e(83504).then(i.t.bind(i, 61123, 19))),
          (D.tchinese = () => i.e(25804).then(i.t.bind(i, 25804, 19))),
          (D.thai = () => i.e(25401).then(i.t.bind(i, 25401, 19))),
          (D.turkish = () => i.e(2593).then(i.t.bind(i, 2593, 19))),
          (D.ukrainian = () => i.e(94219).then(i.t.bind(i, 94219, 19))),
          (D.vietnamese = () => i.e(95784).then(i.t.bind(i, 95784, 19)));
        async function te(k) {
          if (D[k]) return D[k]();
        }
        const K = (0, d.l)(te);
        var re = i(68031),
          J = i(15252),
          w = i(71989),
          L = i(60351),
          T = i(24660),
          de = i(66575),
          ae = i.n(de),
          ge = i(36707);
        const be = 0,
          ye = 1,
          Q = 2,
          C = 3,
          xe = 4;
        var N = i(80613),
          U = i.n(N),
          h = i(75245);
        const Ie = 0,
          ve = 1,
          se = 2,
          Pe = 3,
          _ = 4,
          Z = 5,
          X = 6,
          H = 7,
          fe = 8,
          he = 9,
          Ee = 10,
          Se = 11,
          Ne = 12,
          Qe = 13,
          ue = 14,
          Be = 15,
          Vt = 16,
          nn = 17,
          Wt = 18,
          sn = 19,
          Sn = 0,
          xn = 1,
          Mn = 2,
          M = 3,
          Gt = 4,
          _e = 5,
          ls = 6,
          In = 7,
          Es = 8,
          ne = 9;
        function Ps(k) {
          return "unknown ERatingAgency ( " + k + " )";
        }
        function Ct(k) {
          return "unknown EAppRatingSource ( " + k + " )";
        }
        function Ve(k) {
          return "unknown ERatingDescriptorImage ( " + k + " )";
        }
        class Fe extends N.Message {
          static ImplementsStaticInterface() {}
          constructor(u = null) {
            super(),
              Fe.prototype.descriptors || h.Sg(Fe.M()),
              N.Message.initialize(this, u, 0, -1, [1, 2, 6], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Fe.sm_m ||
                (Fe.sm_m = {
                  proto: Fe,
                  fields: {
                    descriptors: {
                      n: 1,
                      r: !0,
                      q: !0,
                      br: h.qM.readString,
                      bw: h.gp.writeRepeatedString,
                    },
                    interactive_elements: {
                      n: 2,
                      r: !0,
                      q: !0,
                      br: h.qM.readString,
                      bw: h.gp.writeRepeatedString,
                    },
                    official_id: {
                      n: 3,
                      br: h.qM.readString,
                      bw: h.gp.writeString,
                    },
                    esrb_online_music_not_rated: {
                      n: 4,
                      br: h.qM.readBool,
                      bw: h.gp.writeBool,
                    },
                    esrb_online_interactions_not_rated: {
                      n: 5,
                      br: h.qM.readBool,
                      bw: h.gp.writeBool,
                    },
                    descriptor_images: {
                      n: 6,
                      r: !0,
                      q: !0,
                      br: h.qM.readEnum,
                      pbr: h.qM.readPackedEnum,
                      bw: h.gp.writeRepeatedEnum,
                    },
                  },
                }),
              Fe.sm_m
            );
          }
          static MBF() {
            return Fe.sm_mbf || (Fe.sm_mbf = h.w0(Fe.M())), Fe.sm_mbf;
          }
          toObject(u = !1) {
            return Fe.toObject(u, this);
          }
          static toObject(u, E) {
            return h.BT(Fe.M(), u, E);
          }
          static fromObject(u) {
            return h.Uq(Fe.M(), u);
          }
          static deserializeBinary(u) {
            let E = new (U().BinaryReader)(u),
              pe = new Fe();
            return Fe.deserializeBinaryFromReader(pe, E);
          }
          static deserializeBinaryFromReader(u, E) {
            return h.zj(Fe.MBF(), u, E);
          }
          serializeBinary() {
            var u = new (U().BinaryWriter)();
            return Fe.serializeBinaryToWriter(this, u), u.getResultBuffer();
          }
          static serializeBinaryToWriter(u, E) {
            h.i0(Fe.M(), u, E);
          }
          serializeBase64String() {
            var u = new (U().BinaryWriter)();
            return (
              Fe.serializeBinaryToWriter(this, u), u.getResultBase64String()
            );
          }
          getClassName() {
            return "AppRatingAuxData";
          }
        }
        class He extends N.Message {
          static ImplementsStaticInterface() {}
          constructor(u = null) {
            super(),
              He.prototype.rating_agency || h.Sg(He.M()),
              N.Message.initialize(this, u, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              He.sm_m ||
                (He.sm_m = {
                  proto: He,
                  fields: {
                    rating_agency: {
                      n: 1,
                      br: h.qM.readEnum,
                      bw: h.gp.writeEnum,
                    },
                    rating: { n: 2, br: h.qM.readString, bw: h.gp.writeString },
                    source: { n: 3, br: h.qM.readEnum, bw: h.gp.writeEnum },
                    banned: { n: 4, br: h.qM.readBool, bw: h.gp.writeBool },
                    required_age: {
                      n: 5,
                      br: h.qM.readUint32,
                      bw: h.gp.writeUint32,
                    },
                    use_age_gate: {
                      n: 6,
                      br: h.qM.readBool,
                      bw: h.gp.writeBool,
                    },
                    aux_data: { n: 7, c: Fe },
                  },
                }),
              He.sm_m
            );
          }
          static MBF() {
            return He.sm_mbf || (He.sm_mbf = h.w0(He.M())), He.sm_mbf;
          }
          toObject(u = !1) {
            return He.toObject(u, this);
          }
          static toObject(u, E) {
            return h.BT(He.M(), u, E);
          }
          static fromObject(u) {
            return h.Uq(He.M(), u);
          }
          static deserializeBinary(u) {
            let E = new (U().BinaryReader)(u),
              pe = new He();
            return He.deserializeBinaryFromReader(pe, E);
          }
          static deserializeBinaryFromReader(u, E) {
            return h.zj(He.MBF(), u, E);
          }
          serializeBinary() {
            var u = new (U().BinaryWriter)();
            return He.serializeBinaryToWriter(this, u), u.getResultBuffer();
          }
          static serializeBinaryToWriter(u, E) {
            h.i0(He.M(), u, E);
          }
          serializeBase64String() {
            var u = new (U().BinaryWriter)();
            return (
              He.serializeBinaryToWriter(this, u), u.getResultBase64String()
            );
          }
          getClassName() {
            return "AppRating";
          }
        }
        var rn = i(35038);
        function cs(k) {
          return "unknown EContentSurveyMatureTag ( " + k + " )";
        }
        class Ke extends N.Message {
          static ImplementsStaticInterface() {}
          constructor(u = null) {
            super(),
              Ke.prototype.elanguage || h.Sg(Ke.M()),
              N.Message.initialize(this, u, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ke.sm_m ||
                (Ke.sm_m = {
                  proto: Ke,
                  fields: {
                    elanguage: {
                      n: 1,
                      br: h.qM.readInt32,
                      bw: h.gp.writeInt32,
                    },
                    text: { n: 2, br: h.qM.readString, bw: h.gp.writeString },
                  },
                }),
              Ke.sm_m
            );
          }
          static MBF() {
            return Ke.sm_mbf || (Ke.sm_mbf = h.w0(Ke.M())), Ke.sm_mbf;
          }
          toObject(u = !1) {
            return Ke.toObject(u, this);
          }
          static toObject(u, E) {
            return h.BT(Ke.M(), u, E);
          }
          static fromObject(u) {
            return h.Uq(Ke.M(), u);
          }
          static deserializeBinary(u) {
            let E = new (U().BinaryReader)(u),
              pe = new Ke();
            return Ke.deserializeBinaryFromReader(pe, E);
          }
          static deserializeBinaryFromReader(u, E) {
            return h.zj(Ke.MBF(), u, E);
          }
          serializeBinary() {
            var u = new (U().BinaryWriter)();
            return Ke.serializeBinaryToWriter(this, u), u.getResultBuffer();
          }
          static serializeBinaryToWriter(u, E) {
            h.i0(Ke.M(), u, E);
          }
          serializeBase64String() {
            var u = new (U().BinaryWriter)();
            return (
              Ke.serializeBinaryToWriter(this, u), u.getResultBase64String()
            );
          }
          getClassName() {
            return "ContentSurveyLocalizedText";
          }
        }
        class Ge extends N.Message {
          static ImplementsStaticInterface() {}
          constructor(u = null) {
            super(),
              Ge.prototype.customer_notes || h.Sg(Ge.M()),
              N.Message.initialize(this, u, 0, -1, [1, 2, 3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ge.sm_m ||
                (Ge.sm_m = {
                  proto: Ge,
                  fields: {
                    customer_notes: { n: 1, c: Ke, r: !0, q: !0 },
                    customer_notes_ai: { n: 2, c: Ke, r: !0, q: !0 },
                    mature_tags: {
                      n: 3,
                      r: !0,
                      q: !0,
                      br: h.qM.readEnum,
                      pbr: h.qM.readPackedEnum,
                      bw: h.gp.writeRepeatedEnum,
                    },
                    has_mature_content: {
                      n: 4,
                      br: h.qM.readBool,
                      bw: h.gp.writeBool,
                    },
                    ai_external_service_name: {
                      n: 5,
                      br: h.qM.readString,
                      bw: h.gp.writeString,
                    },
                    ai_external_service_url: {
                      n: 6,
                      br: h.qM.readString,
                      bw: h.gp.writeString,
                    },
                  },
                }),
              Ge.sm_m
            );
          }
          static MBF() {
            return Ge.sm_mbf || (Ge.sm_mbf = h.w0(Ge.M())), Ge.sm_mbf;
          }
          toObject(u = !1) {
            return Ge.toObject(u, this);
          }
          static toObject(u, E) {
            return h.BT(Ge.M(), u, E);
          }
          static fromObject(u) {
            return h.Uq(Ge.M(), u);
          }
          static deserializeBinary(u) {
            let E = new (U().BinaryReader)(u),
              pe = new Ge();
            return Ge.deserializeBinaryFromReader(pe, E);
          }
          static deserializeBinaryFromReader(u, E) {
            return h.zj(Ge.MBF(), u, E);
          }
          serializeBinary() {
            var u = new (U().BinaryWriter)();
            return Ge.serializeBinaryToWriter(this, u), u.getResultBuffer();
          }
          static serializeBinaryToWriter(u, E) {
            h.i0(Ge.M(), u, E);
          }
          serializeBase64String() {
            var u = new (U().BinaryWriter)();
            return (
              Ge.serializeBinaryToWriter(this, u), u.getResultBase64String()
            );
          }
          getClassName() {
            return "ContentSurveyDisclosure";
          }
        }
        const Xr = 1,
          ds = 2,
          Rs = 3,
          ar = 4,
          Hn = 5,
          Ts = 6,
          Ws = 7,
          or = 8,
          ws = 9,
          Us = 10,
          Hr = 11,
          Ye = 12,
          Cs = 13,
          qr = 14,
          lr = 15,
          _r = 16,
          cr = 17,
          qn = 18,
          x = 19,
          O = 20,
          G = 21,
          z = 22,
          R = 23,
          q = 24,
          Te = 25,
          Kt = 26,
          $t = 27,
          an = 28,
          Ln = 29,
          Ss = 30,
          gn = 31,
          Le = 32,
          Yt = 33,
          cn = 34,
          Ks = 35,
          Oa = 36,
          za = 37,
          Na = 38,
          Da = 39,
          ei = 40,
          ti = 41,
          ni = 42,
          Fa = 43,
          Ra = 44,
          We = 45,
          Gs = 46,
          Wa = 47,
          Jt = 48,
          wa = 49,
          Me = 50,
          si = 60,
          g = 61,
          ri = 62,
          ii = 63,
          ai = 64,
          Ua = 80,
          $l = 81,
          oi = 82,
          Ca = 83,
          li = 90,
          Ka = 91,
          Ms = 95;
        function An(k) {
          return "unknown EPriceConversionMethod ( " + k + " )";
        }
        function Ga(k) {
          return "unknown EProtoBillingType ( " + k + " )";
        }
        function _n(k) {
          return "unknown EProtoActivationCode ( " + k + " )";
        }
        function dr(k) {
          return "unknown EProtoProposalState ( " + k + " )";
        }
        function Ya(k) {
          return "unknown EContentDescriptorSurveyState ( " + k + " )";
        }
        function ka(k) {
          return "unknown ERatingQuestionaireCategory ( " + k + " )";
        }
        function et(k) {
          return "unknown EGeneratedGameRatingVersion ( " + k + " )";
        }
        function ur(k) {
          return "unknown EGameContentCategory ( " + k + " )";
        }
        function Qa(k) {
          return "unknown EContentSurveySection ( " + k + " )";
        }
        function ci(k) {
          return "unknown EContentSurveySource ( " + k + " )";
        }
        function Ht(k) {
          return "unknown EContentSurveyChildAppType ( " + k + " )";
        }
        function Va(k) {
          return "unknown EContentSurveyInheritAction ( " + k + " )";
        }
        function us(k) {
          return "unknown EGeneratedAIContentType ( " + k + " )";
        }
        class Y extends N.Message {
          static ImplementsStaticInterface() {}
          constructor(u = null) {
            super(),
              Y.prototype.method || h.Sg(Y.M()),
              N.Message.initialize(this, u, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Y.sm_m ||
                (Y.sm_m = {
                  proto: Y,
                  fields: {
                    method: { n: 1, br: h.qM.readEnum, bw: h.gp.writeEnum },
                  },
                }),
              Y.sm_m
            );
          }
          static MBF() {
            return Y.sm_mbf || (Y.sm_mbf = h.w0(Y.M())), Y.sm_mbf;
          }
          toObject(u = !1) {
            return Y.toObject(u, this);
          }
          static toObject(u, E) {
            return h.BT(Y.M(), u, E);
          }
          static fromObject(u) {
            return h.Uq(Y.M(), u);
          }
          static deserializeBinary(u) {
            let E = new (U().BinaryReader)(u),
              pe = new Y();
            return Y.deserializeBinaryFromReader(pe, E);
          }
          static deserializeBinaryFromReader(u, E) {
            return h.zj(Y.MBF(), u, E);
          }
          serializeBinary() {
            var u = new (U().BinaryWriter)();
            return Y.serializeBinaryToWriter(this, u), u.getResultBuffer();
          }
          static serializeBinaryToWriter(u, E) {
            h.i0(Y.M(), u, E);
          }
          serializeBase64String() {
            var u = new (U().BinaryWriter)();
            return (
              Y.serializeBinaryToWriter(this, u), u.getResultBase64String()
            );
          }
          getClassName() {
            return "CProductInfo_ForceEmitPriceConversion";
          }
        }
        class F extends N.Message {
          static ImplementsStaticInterface() {}
          constructor(u = null) {
            super(),
              F.prototype.survey_section || h.Sg(F.M()),
              N.Message.initialize(this, u, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              F.sm_m ||
                (F.sm_m = {
                  proto: F,
                  fields: {
                    survey_section: {
                      n: 1,
                      br: h.qM.readEnum,
                      bw: h.gp.writeEnum,
                    },
                    time_reviewed: {
                      n: 2,
                      br: h.qM.readUint32,
                      bw: h.gp.writeUint32,
                    },
                    accountid_reviewer: {
                      n: 3,
                      br: h.qM.readUint32,
                      bw: h.gp.writeUint32,
                    },
                  },
                }),
              F.sm_m
            );
          }
          static MBF() {
            return F.sm_mbf || (F.sm_mbf = h.w0(F.M())), F.sm_mbf;
          }
          toObject(u = !1) {
            return F.toObject(u, this);
          }
          static toObject(u, E) {
            return h.BT(F.M(), u, E);
          }
          static fromObject(u) {
            return h.Uq(F.M(), u);
          }
          static deserializeBinary(u) {
            let E = new (U().BinaryReader)(u),
              pe = new F();
            return F.deserializeBinaryFromReader(pe, E);
          }
          static deserializeBinaryFromReader(u, E) {
            return h.zj(F.MBF(), u, E);
          }
          serializeBinary() {
            var u = new (U().BinaryWriter)();
            return F.serializeBinaryToWriter(this, u), u.getResultBuffer();
          }
          static serializeBinaryToWriter(u, E) {
            h.i0(F.M(), u, E);
          }
          serializeBase64String() {
            var u = new (U().BinaryWriter)();
            return (
              F.serializeBinaryToWriter(this, u), u.getResultBase64String()
            );
          }
          getClassName() {
            return "SurveySectionReviewed";
          }
        }
        class j extends N.Message {
          static ImplementsStaticInterface() {}
          constructor(u = null) {
            super(),
              j.prototype.content_category || h.Sg(j.M()),
              N.Message.initialize(this, u, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              j.sm_m ||
                (j.sm_m = {
                  proto: j,
                  fields: {
                    content_category: {
                      n: 1,
                      br: h.qM.readEnum,
                      bw: h.gp.writeEnum,
                    },
                    questionaire_categories: {
                      n: 2,
                      r: !0,
                      q: !0,
                      br: h.qM.readEnum,
                      pbr: h.qM.readPackedEnum,
                      bw: h.gp.writeRepeatedEnum,
                    },
                  },
                }),
              j.sm_m
            );
          }
          static MBF() {
            return j.sm_mbf || (j.sm_mbf = h.w0(j.M())), j.sm_mbf;
          }
          toObject(u = !1) {
            return j.toObject(u, this);
          }
          static toObject(u, E) {
            return h.BT(j.M(), u, E);
          }
          static fromObject(u) {
            return h.Uq(j.M(), u);
          }
          static deserializeBinary(u) {
            let E = new (U().BinaryReader)(u),
              pe = new j();
            return j.deserializeBinaryFromReader(pe, E);
          }
          static deserializeBinaryFromReader(u, E) {
            return h.zj(j.MBF(), u, E);
          }
          serializeBinary() {
            var u = new (U().BinaryWriter)();
            return j.serializeBinaryToWriter(this, u), u.getResultBuffer();
          }
          static serializeBinaryToWriter(u, E) {
            h.i0(j.M(), u, E);
          }
          serializeBase64String() {
            var u = new (U().BinaryWriter)();
            return (
              j.serializeBinaryToWriter(this, u), u.getResultBase64String()
            );
          }
          getClassName() {
            return "GeneratedGameContent";
          }
        }
        class ce extends N.Message {
          static ImplementsStaticInterface() {}
          constructor(u = null) {
            super(),
              ce.prototype.rating_agency || h.Sg(ce.M()),
              N.Message.initialize(this, u, 0, -1, [4], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ce.sm_m ||
                (ce.sm_m = {
                  proto: ce,
                  fields: {
                    rating_agency: {
                      n: 1,
                      br: h.qM.readString,
                      bw: h.gp.writeString,
                    },
                    rating: { n: 2, br: h.qM.readString, bw: h.gp.writeString },
                    required_age: {
                      n: 3,
                      br: h.qM.readUint32,
                      bw: h.gp.writeUint32,
                    },
                    descriptors: {
                      n: 4,
                      r: !0,
                      q: !0,
                      br: h.qM.readString,
                      bw: h.gp.writeRepeatedString,
                    },
                    banned: { n: 5, br: h.qM.readBool, bw: h.gp.writeBool },
                  },
                }),
              ce.sm_m
            );
          }
          static MBF() {
            return ce.sm_mbf || (ce.sm_mbf = h.w0(ce.M())), ce.sm_mbf;
          }
          toObject(u = !1) {
            return ce.toObject(u, this);
          }
          static toObject(u, E) {
            return h.BT(ce.M(), u, E);
          }
          static fromObject(u) {
            return h.Uq(ce.M(), u);
          }
          static deserializeBinary(u) {
            let E = new (U().BinaryReader)(u),
              pe = new ce();
            return ce.deserializeBinaryFromReader(pe, E);
          }
          static deserializeBinaryFromReader(u, E) {
            return h.zj(ce.MBF(), u, E);
          }
          serializeBinary() {
            var u = new (U().BinaryWriter)();
            return ce.serializeBinaryToWriter(this, u), u.getResultBuffer();
          }
          static serializeBinaryToWriter(u, E) {
            h.i0(ce.M(), u, E);
          }
          serializeBase64String() {
            var u = new (U().BinaryWriter)();
            return (
              ce.serializeBinaryToWriter(this, u), u.getResultBase64String()
            );
          }
          getClassName() {
            return "GeneratedGameRating";
          }
        }
        class ke extends N.Message {
          static ImplementsStaticInterface() {}
          constructor(u = null) {
            super(),
              ke.prototype.timestamp_generated || h.Sg(ke.M()),
              N.Message.initialize(this, u, 0, -1, [3, 4], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ke.sm_m ||
                (ke.sm_m = {
                  proto: ke,
                  fields: {
                    timestamp_generated: {
                      n: 1,
                      br: h.qM.readUint32,
                      bw: h.gp.writeUint32,
                    },
                    generated_version: {
                      n: 2,
                      br: h.qM.readUint32,
                      bw: h.gp.writeUint32,
                    },
                    ratings: { n: 3, c: ce, r: !0, q: !0 },
                    content_categories: { n: 4, c: j, r: !0, q: !0 },
                  },
                }),
              ke.sm_m
            );
          }
          static MBF() {
            return ke.sm_mbf || (ke.sm_mbf = h.w0(ke.M())), ke.sm_mbf;
          }
          toObject(u = !1) {
            return ke.toObject(u, this);
          }
          static toObject(u, E) {
            return h.BT(ke.M(), u, E);
          }
          static fromObject(u) {
            return h.Uq(ke.M(), u);
          }
          static deserializeBinary(u) {
            let E = new (U().BinaryReader)(u),
              pe = new ke();
            return ke.deserializeBinaryFromReader(pe, E);
          }
          static deserializeBinaryFromReader(u, E) {
            return h.zj(ke.MBF(), u, E);
          }
          serializeBinary() {
            var u = new (U().BinaryWriter)();
            return ke.serializeBinaryToWriter(this, u), u.getResultBuffer();
          }
          static serializeBinaryToWriter(u, E) {
            h.i0(ke.M(), u, E);
          }
          serializeBase64String() {
            var u = new (U().BinaryWriter)();
            return (
              ke.serializeBinaryToWriter(this, u), u.getResultBase64String()
            );
          }
          getClassName() {
            return "GeneratedGameRatings";
          }
        }
        class Ae extends N.Message {
          static ImplementsStaticInterface() {}
          constructor(u = null) {
            super(),
              Ae.prototype.desc_code_generated || h.Sg(Ae.M()),
              N.Message.initialize(this, u, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ae.sm_m ||
                (Ae.sm_m = {
                  proto: Ae,
                  fields: {
                    desc_code_generated: {
                      n: 1,
                      br: h.qM.readString,
                      bw: h.gp.writeString,
                    },
                    desc_copyright_infringement_guarantee: {
                      n: 2,
                      br: h.qM.readString,
                      bw: h.gp.writeString,
                    },
                    desc_content_moderation_strategy: {
                      n: 3,
                      br: h.qM.readString,
                      bw: h.gp.writeString,
                    },
                    external_service_name: {
                      n: 4,
                      br: h.qM.readString,
                      bw: h.gp.writeString,
                    },
                    external_service_url: {
                      n: 5,
                      br: h.qM.readString,
                      bw: h.gp.writeString,
                    },
                    desc_external_service_how_content_available_to_players: {
                      n: 6,
                      br: h.qM.readString,
                      bw: h.gp.writeString,
                    },
                    desc_external_service_monetization: {
                      n: 7,
                      br: h.qM.readString,
                      bw: h.gp.writeString,
                    },
                  },
                }),
              Ae.sm_m
            );
          }
          static MBF() {
            return Ae.sm_mbf || (Ae.sm_mbf = h.w0(Ae.M())), Ae.sm_mbf;
          }
          toObject(u = !1) {
            return Ae.toObject(u, this);
          }
          static toObject(u, E) {
            return h.BT(Ae.M(), u, E);
          }
          static fromObject(u) {
            return h.Uq(Ae.M(), u);
          }
          static deserializeBinary(u) {
            let E = new (U().BinaryReader)(u),
              pe = new Ae();
            return Ae.deserializeBinaryFromReader(pe, E);
          }
          static deserializeBinaryFromReader(u, E) {
            return h.zj(Ae.MBF(), u, E);
          }
          serializeBinary() {
            var u = new (U().BinaryWriter)();
            return Ae.serializeBinaryToWriter(this, u), u.getResultBuffer();
          }
          static serializeBinaryToWriter(u, E) {
            h.i0(Ae.M(), u, E);
          }
          serializeBase64String() {
            var u = new (U().BinaryWriter)();
            return (
              Ae.serializeBinaryToWriter(this, u), u.getResultBase64String()
            );
          }
          getClassName() {
            return "AIContentSurvey";
          }
        }
        class ze extends N.Message {
          static ImplementsStaticInterface() {}
          constructor(u = null) {
            super(),
              ze.prototype.disclosure || h.Sg(ze.M()),
              N.Message.initialize(this, u, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ze.sm_m ||
                (ze.sm_m = {
                  proto: ze,
                  fields: {
                    disclosure: { n: 1, c: Ge },
                    interactive_elements: {
                      n: 2,
                      r: !0,
                      q: !0,
                      br: h.qM.readEnum,
                      pbr: h.qM.readPackedEnum,
                      bw: h.gp.writeRepeatedEnum,
                    },
                  },
                }),
              ze.sm_m
            );
          }
          static MBF() {
            return ze.sm_mbf || (ze.sm_mbf = h.w0(ze.M())), ze.sm_mbf;
          }
          toObject(u = !1) {
            return ze.toObject(u, this);
          }
          static toObject(u, E) {
            return h.BT(ze.M(), u, E);
          }
          static fromObject(u) {
            return h.Uq(ze.M(), u);
          }
          static deserializeBinary(u) {
            let E = new (U().BinaryReader)(u),
              pe = new ze();
            return ze.deserializeBinaryFromReader(pe, E);
          }
          static deserializeBinaryFromReader(u, E) {
            return h.zj(ze.MBF(), u, E);
          }
          serializeBinary() {
            var u = new (U().BinaryWriter)();
            return ze.serializeBinaryToWriter(this, u), u.getResultBuffer();
          }
          static serializeBinaryToWriter(u, E) {
            h.i0(ze.M(), u, E);
          }
          serializeBase64String() {
            var u = new (U().BinaryWriter)();
            return (
              ze.serializeBinaryToWriter(this, u), u.getResultBase64String()
            );
          }
          getClassName() {
            return "ContentSurveyAuxData";
          }
        }
        class Oe extends N.Message {
          static ImplementsStaticInterface() {}
          constructor(u = null) {
            super(),
              Oe.prototype.id || h.Sg(Oe.M()),
              N.Message.initialize(this, u, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Oe.sm_m ||
                (Oe.sm_m = {
                  proto: Oe,
                  fields: {
                    id: { n: 1, br: h.qM.readUint32, bw: h.gp.writeUint32 },
                  },
                }),
              Oe.sm_m
            );
          }
          static MBF() {
            return Oe.sm_mbf || (Oe.sm_mbf = h.w0(Oe.M())), Oe.sm_mbf;
          }
          toObject(u = !1) {
            return Oe.toObject(u, this);
          }
          static toObject(u, E) {
            return h.BT(Oe.M(), u, E);
          }
          static fromObject(u) {
            return h.Uq(Oe.M(), u);
          }
          static deserializeBinary(u) {
            let E = new (U().BinaryReader)(u),
              pe = new Oe();
            return Oe.deserializeBinaryFromReader(pe, E);
          }
          static deserializeBinaryFromReader(u, E) {
            return h.zj(Oe.MBF(), u, E);
          }
          serializeBinary() {
            var u = new (U().BinaryWriter)();
            return Oe.serializeBinaryToWriter(this, u), u.getResultBuffer();
          }
          static serializeBinaryToWriter(u, E) {
            h.i0(Oe.M(), u, E);
          }
          serializeBase64String() {
            var u = new (U().BinaryWriter)();
            return (
              Oe.serializeBinaryToWriter(this, u), u.getResultBase64String()
            );
          }
          getClassName() {
            return "ContentDescriptor";
          }
        }
        class we extends N.Message {
          static ImplementsStaticInterface() {}
          constructor(u = null) {
            super(),
              we.prototype.surveyid || h.Sg(we.M()),
              N.Message.initialize(this, u, 0, -1, [3, 11, 14, 15], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              we.sm_m ||
                (we.sm_m = {
                  proto: we,
                  fields: {
                    surveyid: {
                      n: 1,
                      br: h.qM.readUint64String,
                      bw: h.gp.writeUint64String,
                    },
                    state: { n: 2, br: h.qM.readEnum, bw: h.gp.writeEnum },
                    descriptors: { n: 3, c: Oe, r: !0, q: !0 },
                    timestamp_started: {
                      n: 4,
                      br: h.qM.readUint32,
                      bw: h.gp.writeUint32,
                    },
                    timestamp_updated: {
                      n: 5,
                      br: h.qM.readUint32,
                      bw: h.gp.writeUint32,
                    },
                    timestamp_finished: {
                      n: 6,
                      br: h.qM.readUint32,
                      bw: h.gp.writeUint32,
                    },
                    accountid: {
                      n: 7,
                      br: h.qM.readUint32,
                      bw: h.gp.writeUint32,
                    },
                    developer_notes: {
                      n: 8,
                      br: h.qM.readString,
                      bw: h.gp.writeString,
                    },
                    keyvalues: {
                      n: 9,
                      br: h.qM.readString,
                      bw: h.gp.writeString,
                    },
                    ratings: { n: 10, c: ke },
                    categories: {
                      n: 11,
                      r: !0,
                      q: !0,
                      br: h.qM.readEnum,
                      pbr: h.qM.readPackedEnum,
                      bw: h.gp.writeRepeatedEnum,
                    },
                    ai_survey: { n: 12, c: Ae },
                    internal_notes: {
                      n: 13,
                      br: h.qM.readString,
                      bw: h.gp.writeString,
                    },
                    all_ratings: { n: 14, c: He, r: !0, q: !0 },
                    sections_reviewed: { n: 15, c: F, r: !0, q: !0 },
                    disclosure: { n: 16, c: Ge },
                    inherited_surveyid: {
                      n: 17,
                      br: h.qM.readUint64String,
                      bw: h.gp.writeUint64String,
                    },
                    started_from_scratch: {
                      n: 18,
                      br: h.qM.readBool,
                      bw: h.gp.writeBool,
                    },
                    survey_aux_data: { n: 19, c: ze },
                    source: { n: 20, br: h.qM.readEnum, bw: h.gp.writeEnum },
                    flags: {
                      n: 21,
                      br: h.qM.readUint64String,
                      bw: h.gp.writeUint64String,
                    },
                  },
                }),
              we.sm_m
            );
          }
          static MBF() {
            return we.sm_mbf || (we.sm_mbf = h.w0(we.M())), we.sm_mbf;
          }
          toObject(u = !1) {
            return we.toObject(u, this);
          }
          static toObject(u, E) {
            return h.BT(we.M(), u, E);
          }
          static fromObject(u) {
            return h.Uq(we.M(), u);
          }
          static deserializeBinary(u) {
            let E = new (U().BinaryReader)(u),
              pe = new we();
            return we.deserializeBinaryFromReader(pe, E);
          }
          static deserializeBinaryFromReader(u, E) {
            return h.zj(we.MBF(), u, E);
          }
          serializeBinary() {
            var u = new (U().BinaryWriter)();
            return we.serializeBinaryToWriter(this, u), u.getResultBuffer();
          }
          static serializeBinaryToWriter(u, E) {
            h.i0(we.M(), u, E);
          }
          serializeBase64String() {
            var u = new (U().BinaryWriter)();
            return (
              we.serializeBinaryToWriter(this, u), u.getResultBase64String()
            );
          }
          getClassName() {
            return "ContentDescriptorSurvey";
          }
        }
        class Ue extends N.Message {
          static ImplementsStaticInterface() {}
          constructor(u = null) {
            super(),
              Ue.prototype.appid || h.Sg(Ue.M()),
              N.Message.initialize(this, u, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ue.sm_m ||
                (Ue.sm_m = {
                  proto: Ue,
                  fields: {
                    appid: { n: 1, br: h.qM.readUint32, bw: h.gp.writeUint32 },
                    include_descriptors: {
                      n: 2,
                      br: h.qM.readBool,
                      bw: h.gp.writeBool,
                    },
                    include_keyvalues: {
                      n: 3,
                      br: h.qM.readBool,
                      bw: h.gp.writeBool,
                    },
                    include_categories: {
                      n: 4,
                      br: h.qM.readBool,
                      bw: h.gp.writeBool,
                    },
                    include_ai_survey: {
                      n: 5,
                      br: h.qM.readBool,
                      bw: h.gp.writeBool,
                    },
                    include_all_ratings: {
                      n: 6,
                      br: h.qM.readBool,
                      bw: h.gp.writeBool,
                    },
                  },
                }),
              Ue.sm_m
            );
          }
          static MBF() {
            return Ue.sm_mbf || (Ue.sm_mbf = h.w0(Ue.M())), Ue.sm_mbf;
          }
          toObject(u = !1) {
            return Ue.toObject(u, this);
          }
          static toObject(u, E) {
            return h.BT(Ue.M(), u, E);
          }
          static fromObject(u) {
            return h.Uq(Ue.M(), u);
          }
          static deserializeBinary(u) {
            let E = new (U().BinaryReader)(u),
              pe = new Ue();
            return Ue.deserializeBinaryFromReader(pe, E);
          }
          static deserializeBinaryFromReader(u, E) {
            return h.zj(Ue.MBF(), u, E);
          }
          serializeBinary() {
            var u = new (U().BinaryWriter)();
            return Ue.serializeBinaryToWriter(this, u), u.getResultBuffer();
          }
          static serializeBinaryToWriter(u, E) {
            h.i0(Ue.M(), u, E);
          }
          serializeBase64String() {
            var u = new (U().BinaryWriter)();
            return (
              Ue.serializeBinaryToWriter(this, u), u.getResultBase64String()
            );
          }
          getClassName() {
            return "CAppContentDescriptors_GetActiveSurvey_Request";
          }
        }
        class Ce extends N.Message {
          static ImplementsStaticInterface() {}
          constructor(u = null) {
            super(),
              Ce.prototype.appid || h.Sg(Ce.M()),
              N.Message.initialize(this, u, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ce.sm_m ||
                (Ce.sm_m = {
                  proto: Ce,
                  fields: {
                    appid: { n: 1, br: h.qM.readUint32, bw: h.gp.writeUint32 },
                    include_descriptors: {
                      n: 2,
                      br: h.qM.readBool,
                      bw: h.gp.writeBool,
                    },
                    include_keyvalues: {
                      n: 3,
                      br: h.qM.readBool,
                      bw: h.gp.writeBool,
                    },
                    include_categories: {
                      n: 4,
                      br: h.qM.readBool,
                      bw: h.gp.writeBool,
                    },
                    include_ai_survey: {
                      n: 5,
                      br: h.qM.readBool,
                      bw: h.gp.writeBool,
                    },
                    include_all_ratings: {
                      n: 6,
                      br: h.qM.readBool,
                      bw: h.gp.writeBool,
                    },
                  },
                }),
              Ce.sm_m
            );
          }
          static MBF() {
            return Ce.sm_mbf || (Ce.sm_mbf = h.w0(Ce.M())), Ce.sm_mbf;
          }
          toObject(u = !1) {
            return Ce.toObject(u, this);
          }
          static toObject(u, E) {
            return h.BT(Ce.M(), u, E);
          }
          static fromObject(u) {
            return h.Uq(Ce.M(), u);
          }
          static deserializeBinary(u) {
            let E = new (U().BinaryReader)(u),
              pe = new Ce();
            return Ce.deserializeBinaryFromReader(pe, E);
          }
          static deserializeBinaryFromReader(u, E) {
            return h.zj(Ce.MBF(), u, E);
          }
          serializeBinary() {
            var u = new (U().BinaryWriter)();
            return Ce.serializeBinaryToWriter(this, u), u.getResultBuffer();
          }
          static serializeBinaryToWriter(u, E) {
            h.i0(Ce.M(), u, E);
          }
          serializeBase64String() {
            var u = new (U().BinaryWriter)();
            return (
              Ce.serializeBinaryToWriter(this, u), u.getResultBase64String()
            );
          }
          getClassName() {
            return "CAppContentDescriptors_GetWorkingSurvey_Request";
          }
        }
        class Re extends N.Message {
          static ImplementsStaticInterface() {}
          constructor(u = null) {
            super(),
              Re.prototype.surveyid || h.Sg(Re.M()),
              N.Message.initialize(this, u, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Re.sm_m ||
                (Re.sm_m = {
                  proto: Re,
                  fields: {
                    surveyid: {
                      n: 1,
                      br: h.qM.readUint64String,
                      bw: h.gp.writeUint64String,
                    },
                    survey: { n: 2, c: we },
                  },
                }),
              Re.sm_m
            );
          }
          static MBF() {
            return Re.sm_mbf || (Re.sm_mbf = h.w0(Re.M())), Re.sm_mbf;
          }
          toObject(u = !1) {
            return Re.toObject(u, this);
          }
          static toObject(u, E) {
            return h.BT(Re.M(), u, E);
          }
          static fromObject(u) {
            return h.Uq(Re.M(), u);
          }
          static deserializeBinary(u) {
            let E = new (U().BinaryReader)(u),
              pe = new Re();
            return Re.deserializeBinaryFromReader(pe, E);
          }
          static deserializeBinaryFromReader(u, E) {
            return h.zj(Re.MBF(), u, E);
          }
          serializeBinary() {
            var u = new (U().BinaryWriter)();
            return Re.serializeBinaryToWriter(this, u), u.getResultBuffer();
          }
          static serializeBinaryToWriter(u, E) {
            h.i0(Re.M(), u, E);
          }
          serializeBase64String() {
            var u = new (U().BinaryWriter)();
            return (
              Re.serializeBinaryToWriter(this, u), u.getResultBase64String()
            );
          }
          getClassName() {
            return "CAppContentDescriptors_GetSurvey_Response";
          }
        }
        var mr;
        ((k) => {
          function u(pe, tt, wt) {
            return pe.SendMsg(
              "AppContentDescriptor.GetActiveSurvey#1",
              (0, rn.I8)(Ue, tt, wt),
              Re,
              { bConstMethod: !0, ePrivilege: 7 },
            );
          }
          k.GetActiveSurvey = u;
          function E(pe, tt, wt) {
            return pe.SendMsg(
              "AppContentDescriptor.GetWorkingSurvey#1",
              (0, rn.I8)(Ce, tt, wt),
              Re,
              { bConstMethod: !0, ePrivilege: 7 },
            );
          }
          k.GetWorkingSurvey = E;
        })(mr || (mr = {}));
        var gr = i(72609);
        const ms = new Map([
            [ve, "esrb"],
            [se, "pegi"],
            [Pe, "bbfc"],
            [_, "usk"],
            [Z, "oflc"],
            [X, "nzoflc"],
            [H, "cero"],
            [fe, "kgrb"],
            [he, "gmedia"],
            [Ee, "dejus"],
            [Se, "mda"],
            [Ne, "fpb"],
            [Qe, "csrr"],
            [ue, "crl"],
            [Be, "agcom"],
            [Vt, "igrs"],
            [nn, "steam_germany"],
            [Wt, "steam_australia"],
            [sn, "cadpa"],
          ]),
          Ys = "crl",
          pr = "dejus",
          di = "0",
          ui = "pending";
        function fr(k) {
          return ms.get(k) ?? "";
        }
        function mi(k) {
          return k ? K.Localize("#GameRating_Agency_" + k.toUpperCase()) : "";
        }
        function gi(k, u) {
          return !k || !u
            ? ""
            : K.Localize("#GameRating_Rating_" + k + "_" + u);
        }
        function pi(k) {
          return K.Localize("#GameRating_RARSText_" + k);
        }
        const ks = new Map([
          [
            xn,
            {
              strFile: "love",
              strToken: "#GameRating_DescriptorImage_CERO_Love",
            },
          ],
          [
            Mn,
            {
              strFile: "sexual_content",
              strToken: "#GameRating_DescriptorImage_CERO_SexualContent",
            },
          ],
          [
            M,
            {
              strFile: "violence",
              strToken: "#GameRating_DescriptorImage_CERO_Violence",
            },
          ],
          [
            Gt,
            {
              strFile: "horror",
              strToken: "#GameRating_DescriptorImage_CERO_Horror",
            },
          ],
          [
            _e,
            {
              strFile: "drinking_smoking",
              strToken: "#GameRating_DescriptorImage_CERO_DrinkingSmoking",
            },
          ],
          [
            ls,
            {
              strFile: "gambling",
              strToken: "#GameRating_DescriptorImage_CERO_Gambling",
            },
          ],
          [
            In,
            {
              strFile: "crime",
              strToken: "#GameRating_DescriptorImage_CERO_Crime",
            },
          ],
          [
            Es,
            {
              strFile: "drugs",
              strToken: "#GameRating_DescriptorImage_CERO_Drugs",
            },
          ],
          [
            ne,
            {
              strFile: "language",
              strToken: "#GameRating_DescriptorImage_CERO_Language",
            },
          ],
        ]);
        function fi(k) {
          const u = ks.get(k);
          if (u)
            return {
              strURL: `${gr.TS.STORE_CDN_URL}public/shared/images/game_ratings/CERO/descriptors/${u.strFile}.png`,
              strAlt: K.Localize(u.strToken),
            };
        }
        function $a(k) {
          const u = ks.get(k);
          if (u)
            return `[img]${Config.MEDIA_CDN_URL}store/Ratings/CERO/${u.strFile}.png[/img]`;
        }
        function Ja(k) {
          const u = [];
          for (const E of k) {
            const pe = E.toLowerCase();
            for (const [tt, wt] of ks)
              if (pe.includes(`cero/${wt.strFile}.png`)) {
                u.push(tt);
                break;
              }
          }
          return u;
        }
        const hi = new Map([
          [ye, "#GameRating_ContentCategoryDescriptor_60"],
          [Q, "#GameRating_ContentCategoryDescriptor_61"],
          [xe, "#GameRating_ContentCategoryDescriptor_62"],
          [C, "#GameRating_ContentCategoryDescriptor_63"],
        ]);
        function Qs(k) {
          return k
            .map((u) => hi.get(u))
            .filter((u) => u !== void 0)
            .map((u) => K.Localize(u));
        }
        const yi = new Map([
          ["in-game purchases", ye],
          ["in-game purchases (includes random items)", Q],
          ["users interact", xe],
        ]);
        function vi(k) {
          const u = [];
          for (const E of k) {
            const pe = E.trim();
            if (!pe) continue;
            const tt = yi.get(pe.toLowerCase()),
              wt = tt !== void 0 ? Qs([tt])[0] : pe;
            u.includes(wt) || u.push(wt);
          }
          return u;
        }
        const xi = new Map([
          [si, "#GameRating_ContentCategoryDescriptor_60"],
          [g, "#GameRating_ContentCategoryDescriptor_61"],
          [ri, "#GameRating_ContentCategoryDescriptor_62"],
          [ii, "#GameRating_ContentCategoryDescriptor_63"],
          [ai, "#GameRating_ContentCategoryDescriptor_64"],
        ]);
        function Za(k) {
          const u = [];
          for (const E of k)
            if (
              E.content_category ===
              EGameContentCategory.k_EGameContentCategory_InteractiveElements
            )
              for (const pe of E.questionaire_categories ?? []) {
                const tt = xi.get(pe);
                tt && u.push(GameRatingLocalization.Localize(tt));
              }
          return u;
        }
        function ji(k) {
          const { rating: u } = k,
            { strType: E, strRating: pe } = u;
          if (pe === ui)
            return (0, t.jsxs)("div", {
              className: (0, ge.A)(ae().GameRating, "GameRating"),
              children: [
                (0, t.jsx)(re.s, {
                  direction: "row",
                  justify: "between",
                  className: ae().Title,
                  children: K.Localize("#GameRating_Pending"),
                }),
                (0, t.jsx)(yr, { strType: E }),
              ],
            });
          const tt = E === Ys ? [pi(pe)] : u.rgDescriptors,
            wt = u.bOnlineMusicNotRated || u.bOnlineInteractionsNotRated;
          return (0, t.jsxs)(re.s, {
            direction: "column",
            gap: "3",
            className: ae().GameRating,
            children: [
              E === pr
                ? u.nRequiredAge > 0 &&
                  (0, t.jsx)(J.EY, {
                    size: "3",
                    contrast: "title",
                    className: (0, ge.A)(ae().RequiredAge, "RequiredAge"),
                    children: K.Localize(
                      "#GameRating_Age_DEJUS",
                      u.nRequiredAge,
                    ),
                  })
                : u.bBanned && (0, t.jsx)(bi, {}),
              !u.bBanned &&
                (0, t.jsxs)(re.s, {
                  direction: "row",
                  gap: "3",
                  className: ae().Details,
                  children: [
                    (0, t.jsx)("div", {
                      className: ae().Icon,
                      children: (0, t.jsx)(Bi, { rating: u }),
                    }),
                    (0, t.jsxs)(re.s, {
                      direction: "column",
                      gap: "2",
                      children: [
                        tt.length > 0 &&
                          (0, t.jsx)(J.EY, {
                            as: "p",
                            contrast: "body",
                            className: ae().DescriptorText,
                            children: tt.join(`
`),
                          }),
                        (0, t.jsx)($e, { rating: u }),
                        wt &&
                          (0, t.jsxs)(t.Fragment, {
                            children: [
                              u.bOnlineMusicNotRated &&
                                (0, t.jsx)(J.EY, {
                                  as: "p",
                                  contrast: "body",
                                  className: ae().DescriptorText,
                                  children: K.Localize(
                                    "#GameRating_OnlineMusicNotice",
                                  ),
                                }),
                              u.bOnlineInteractionsNotRated &&
                                (0, t.jsx)(J.EY, {
                                  as: "p",
                                  contrast: "body",
                                  className: ae().DescriptorText,
                                  children: K.Localize(
                                    "#GameRating_OnlineInteractionsNotice",
                                  ),
                                }),
                            ],
                          }),
                        (0, t.jsx)(es, { rating: u }),
                      ],
                    }),
                  ],
                }),
              (0, t.jsx)(yr, { strType: E }),
            ],
          });
        }
        function bi() {
          return (0, t.jsx)(re.s, {
            direction: "row",
            justify: "between",
            className: ae().Title,
            children: K.LocalizeReact(
              "#GameRating_ContentClassification",
              (0, t.jsx)("span", {
                className: ae().Banned,
                children: K.Localize("#GameRating_Banned"),
              }),
            ),
          });
        }
        function Bi(k) {
          const {
            strType: u,
            strRating: E,
            strImageURL: pe,
            strImageTarget: tt,
          } = k.rating;
          if (E === di)
            return (0, t.jsx)("div", {
              className: ae().AllAges,
              children: K.Localize("#GameRating_AllAges"),
            });
          if (!pe) return null;
          const wt = gi(u, E);
          return tt
            ? (0, t.jsx)(T.Ii, {
                href: tt,
                onOKActionDescription: wt,
                children: (0, t.jsx)(w._, { src: pe, alt: wt }),
              })
            : (0, t.jsx)(w._, { src: pe, alt: wt });
        }
        function $e(k) {
          const u = (k.rating.rgDescriptorImages ?? [])
            .map((E) => fi(E))
            .filter((E) => E !== void 0);
          return u.length === 0
            ? null
            : (0, t.jsx)(re.s, {
                direction: "row",
                wrap: "wrap",
                align: "start",
                gap: "1",
                children: u.map((E, pe) =>
                  (0, t.jsx)(
                    w._,
                    { src: E.strURL, alt: E.strAlt, title: E.strAlt },
                    pe,
                  ),
                ),
              });
        }
        function es(k) {
          const {
              rgRatingInteractiveElements: u,
              rgSurveyInteractiveElements: E,
            } = k.rating,
            pe = u.length > 0,
            tt = pe ? u : E;
          return tt.length === 0
            ? null
            : (0, t.jsx)(ts, {
                strTitle: K.Localize(
                  pe
                    ? "#GameRating_InteractiveElements_Title"
                    : "#GameRating_ContentCategory_InteractiveElements",
                ),
                rgElements: tt,
              });
        }
        function hr(k) {
          return (0, t.jsxs)("div", {
            className: ae().GameRating,
            children: [
              (0, t.jsx)("div", {
                className: ae().Title,
                children: K.Localize("#GameRating_ContentCategories_Title"),
              }),
              (0, t.jsx)(ts, {
                strTitle: K.Localize(
                  "#GameRating_ContentCategory_InteractiveElements",
                ),
                rgElements: k.rgInteractiveElements,
              }),
            ],
          });
        }
        function ts(k) {
          return (0, t.jsxs)(L.az, {
            children: [
              (0, t.jsx)(J.EY, {
                as: "p",
                contrast: "note",
                children: k.strTitle,
              }),
              (0, t.jsx)(J.EY, {
                as: "p",
                contrast: "body",
                className: ae().DescriptorText,
                children: k.rgElements.join(
                  K.Localize("#GameRating_ListDelimiter"),
                ),
              }),
            ],
          });
        }
        function yr(k) {
          const u = mi(k.strType);
          return u
            ? (0, t.jsx)(J.EY, {
                contrast: "body",
                size: "2",
                className: "Agency",
                children: K.Localize("#GameRating_RatingBy", u),
              })
            : null;
        }
        function Ei(k) {
          return {
            strType: k.type || (k.agency !== void 0 ? fr(k.agency) : ""),
            strRating: k.rating ?? "",
            bBanned: !!k.banned,
            nRequiredAge: k.required_age ?? 0,
            rgDescriptors: k.descriptors ?? [],
            rgDescriptorImages: k.descriptor_images ?? [],
            bOnlineMusicNotRated: !!k.esrb_online_music_not_rated,
            bOnlineInteractionsNotRated: !!k.esrb_online_interactions_not_rated,
            rgRatingInteractiveElements: vi(
              (k.interactive_elements ?? "").split(/[\r\n,]+/),
            ),
            rgSurveyInteractiveElements: Qs(
              k.survey_interactive_elements ?? [],
            ),
            strImageURL: Pi(k),
            strImageTarget: k.image_target || void 0,
          };
        }
        function Pi(k) {
          if (k.image_url)
            return `${gr.TS.STORE_CDN_URL}${k.image_url}?${k.image_target ? "v=3" : "v=2"}`;
        }
        var vr = i(40358),
          Ti = i(90626),
          Si = i(3166);
        function Mi(k) {
          const {
              id: u,
              eLayout: E = "rightcolumn",
              bRatingAllowed: pe,
              bHideRatingTitle: tt,
            } = k,
            { data: wt, isPending: Vs } = (0, vr.x2)(pe ? u : void 0),
            kt = pe && Vs,
            ns = pe && !!wt?.rating,
            xr = Ii(kt || ns ? void 0 : u),
            Li = (0, Si.Qn)();
          if ((Ti.use(K.Ready()), kt)) return null;
          const jr = E === "details";
          let $s = Li ? "block app_ratings_block" : "block";
          return (
            jr && ($s = "game_rating_area details_block"),
            ns && wt
              ? (0, t.jsxs)("div", {
                  className: $s,
                  children: [
                    !jr &&
                      (0, t.jsx)("div", {
                        className: "responsive_block_header ratings_title",
                        style: tt ? { display: "none" } : void 0,
                        children: K.Localize("#GameRating_Ratings_Title"),
                      }),
                    (0, t.jsx)(ji, { rating: Ei(wt) }),
                  ],
                })
              : xr.length === 0
                ? null
                : (0, t.jsx)("div", {
                    className: $s,
                    children: (0, t.jsx)(hr, { rgInteractiveElements: xr }),
                  })
          );
        }
        function Ii(k) {
          const { data: u } = (0, vr._F)(k);
          return Qs(u?.interactive_elements ?? []);
        }
      },
      45497: (P, je, i) => {
        "use strict";
        i.d(je, { n: () => h });
        var t = i(7850),
          d = i(29950),
          D = i(33770),
          te = i(7487),
          K = i(99412),
          re = i(24660),
          J = i(90626),
          w = i(70187),
          L = i(39239),
          T = i(53113),
          de = i(3166),
          ae = i(94162),
          ge = i(27990),
          be = i(33001),
          ye = i.n(be);
        function Q(ve) {
          return new te.OJ(new te.R8());
        }
        function C(ve) {
          const se = new Map([
            ...Array.from(w.W4.entries()),
            ["img", { Constructor: Ie, autocloses: !1 }],
            ["sup", { Constructor: xe, autocloses: !1 }],
            [
              "h6",
              { Constructor: N, autocloses: !1, skipFollowingNewline: !0 },
            ],
          ]);
          return ve && se.set("url", { Constructor: U, autocloses: !1 }), se;
        }
        function xe(ve) {
          return (0, t.jsx)("sup", { children: ve.children });
        }
        function N(ve) {
          return (0, t.jsx)("h6", { children: ve.children });
        }
        function U(ve) {
          let se = (0, d.J)(w.j$(ve.args));
          return (
            !se &&
              typeof ve.children == "string" &&
              (0, T.DZ)(ve.children) &&
              (se = (0, d.J)(ve.children)),
            se
              ? (0, t.jsx)(re.Ii, { href: se, children: ve.children })
              : ve.children || ""
          );
        }
        function h(ve) {
          const { text: se, languageOverride: Pe, bBypassLinkFilter: _ } = ve,
            [Z] = (0, J.useState)(new D.B(C(_), Q, Pe || K.Bhc));
          return (0, t.jsx)("div", {
            className: ye().StorePageBBCode,
            children: Z.ParseBBCode(se, {}, !0),
          });
        }
        function Ie(ve) {
          const { showErrorInfo: se } = ve.context,
            Pe = (0, ge.h$)(),
            _ = ve.args.alt ?? "";
          if (!!ve.args.mp4 || ve.args.webm) {
            const X = Pe(ve.args.webm),
              H = Pe(ve.args.mp4),
              fe = Pe(ve.args.poster),
              he = (0, ae.Wr)() || (0, ae.Ae)(),
              Ee = (Se) => {
                const Ne = Se.currentTarget;
                Ne.paused ? Ne.play() : Ne.pause();
              };
            return (0, t.jsxs)("video", {
              className: ye().StoreVideo,
              poster: fe,
              "aria-label": _,
              autoPlay: !0,
              muted: !0,
              loop: !0,
              playsInline: !0,
              onClick: Ee,
              children: [
                X &&
                  !he &&
                  (0, t.jsx)("source", { src: X, type: "video/webm" }),
                H &&
                  !de.TS.IN_CLIENT &&
                  (0, t.jsx)("source", { src: H, type: "video/mp4" }),
              ],
            });
          } else {
            const X = Pe(ve.args.src);
            return se
              ? (0, t.jsx)(L.i, { className: ye().StoreImage, src: X })
              : (0, t.jsx)("img", {
                  className: ye().StoreImage,
                  src: X,
                  alt: _,
                });
          }
        }
      },
      4874: (P, je, i) => {
        "use strict";
        i.d(je, {
          BO: () => Mn,
          Bc: () => Vt,
          DD: () => ue,
          Ee: () => qn,
          HM: () => Be,
          Hs: () => Se,
          IN: () => _e,
          Ke: () => Gt,
          QU: () => sn,
          Qn: () => M,
          RC: () => Ps,
          TI: () => Ne,
          Tv: () => fe,
          Vo: () => Ge,
          Ww: () => He,
          Xq: () => ar,
          Y0: () => Qe,
          YW: () => or,
          Yc: () => xn,
          _K: () => Wt,
          eS: () => In,
          fO: () => ws,
          gv: () => Ct,
          lF: () => Cs,
          ll: () => Sn,
          p8: () => Fe,
          tN: () => Us,
          v2: () => nn,
          vo: () => he,
          vu: () => lr,
          w1: () => Ke,
          yM: () => Rs,
        });
        var t = i(90626),
          d = i(35038),
          D = i(80902),
          te = i(75233),
          K = i(51614),
          re = i(57168),
          J = i(42993),
          w = i(68312),
          L = i(72604),
          T = i(2289),
          de = i(27386),
          ae = i(18210),
          ge = i(36053),
          be = i(98609),
          ye = i(97996),
          Q = i(96214),
          C = i(48473),
          xe = i(20117);
        const N = (x, O) =>
            O === void 0
              ? ["get_family_group_for_user ", x]
              : ["get_family_group_for_user ", x, O],
          U = (x) => ["get_family_group", x],
          h = (x) => ["get_family_history", x],
          Ie = (x) => ["get_users_sharing_device", x],
          ve = (x) => ["get_shopping_cart_contents", x],
          se = (x) => ["recent_playtime_sessions", x],
          Pe = (x) => ["get_playtime_summary", x],
          _ = (x, O) => ["get_invite_check_results", x, O];
        function Z(x, O, G) {
          return G
            ? ["get_purchase_requests", x, O, G]
            : O
              ? ["get_purchase_requests", x, O]
              : ["get_purchase_requests", x];
        }
        function X(x, O) {
          if (x != L.R) throw x;
        }
        const H = t.createContext({ staleTimeMs: 1 / 0 });
        function fe(x) {
          const { staleTimeMs: O, children: G } = x,
            z = t.useMemo(() => ({ staleTimeMs: O ?? 3e3 }), [O]);
          return t.createElement(H.Provider, { value: z }, G);
        }
        function he(x = !1) {
          return Ee((0, J.LH)(), x);
        }
        function Ee(x, O = !1) {
          const G = (0, w.KV)(),
            z = (0, t.useContext)(H).staleTimeMs;
          return (0, D.I)({
            queryKey: N(x, O),
            queryFn: async () => {
              const R = d.w.Init(T.Gt);
              R.Body().set_steamid(x),
                R.Body().set_include_family_group_response(O);
              const q = await T.Ex.GetFamilyGroupForUser(G, R);
              return X(q.GetEResult(), "GetFamilyGroupForUser"), q.Body();
            },
            staleTime: z,
            enabled: !!x,
            placeholderData: x ? void 0 : new T.yj(),
          });
        }
        function Se(x) {
          const O = (0, w.KV)(),
            G = (0, t.useContext)(H).staleTimeMs;
          return (0, D.I)({
            queryKey: U(x),
            queryFn: async () => {
              if (x) {
                const z = d.w.Init(T.qb);
                z.Body().set_family_groupid(x);
                const R = await T.Ex.GetFamilyGroup(O, z);
                return X(R.GetEResult(), "GetFamilyGroup"), R.Body();
              } else throw L.p;
            },
            staleTime: G,
          });
        }
        function Ne() {
          const x = (0, w.KV)(),
            O = (0, te.jE)(),
            G = (0, J.LH)();
          return (0, K.n)({
            mutationFn: async (z) => {
              const R = d.w.Init(T.y0);
              R.Body().set_name(z);
              const q = await T.Ex.CreateFamilyGroup(x, R);
              return X(q.GetEResult(), "CreateFamilyGroup"), q.Body();
            },
            onSuccess: () => {
              O.invalidateQueries({ queryKey: N(G) });
            },
          });
        }
        function Qe(x) {
          const O = (0, w.KV)(),
            G = (0, te.jE)(),
            z = (0, J.LH)();
          return (0, K.n)({
            mutationFn: async () => {
              const R = d.w.Init(T.h);
              R.Body().set_family_groupid(x);
              const q = await T.Ex.DeleteFamilyGroup(O, R);
              return X(q.GetEResult(), "DeleteFamilyGroup"), q.Body();
            },
            onSuccess: () => {
              G.invalidateQueries({ queryKey: N(z) }),
                G.invalidateQueries({ queryKey: U(x) }),
                G.invalidateQueries({ queryKey: h(x) });
            },
          });
        }
        function ue(x) {
          const O = (0, w.KV)(),
            G = (0, te.jE)();
          return (0, K.n)({
            mutationFn: async (z) => {
              const R = d.w.Init(T.YD);
              R.Body().set_family_groupid(x), R.Body().set_name(z);
              const q = await T.Ex.ModifyFamilyGroupDetails(O, R);
              return X(q.GetEResult(), "ModifyFamilyGroupDetails"), q.Body();
            },
            onSuccess: () => {
              G.invalidateQueries({ queryKey: U(x) }),
                G.invalidateQueries({ queryKey: h(x) });
            },
          });
        }
        function Be(x, O, G) {
          const z = (0, w.KV)(),
            R = (0, te.jE)();
          return (0, K.n)({
            mutationFn: async () => {
              const q = d.w.Init(T._Y);
              q.Body().set_family_groupid(x),
                q.Body().set_receiver_steamid(O),
                q.Body().set_receiver_role(G);
              const Te = await T.Ex.InviteToFamilyGroup(z, q);
              return X(Te.GetEResult(), "InviteToFamilyGroup"), Te.Body();
            },
            onSuccess: () => {
              R.invalidateQueries({ queryKey: N(O) }),
                R.invalidateQueries({ queryKey: U(x) }),
                R.invalidateQueries({ queryKey: h(x) });
            },
          });
        }
        function Vt(x) {
          const O = (0, w.KV)(),
            G = (0, J.LH)(),
            z = (0, te.jE)();
          return (0, K.n)({
            mutationFn: async () => {
              const R = d.w.Init(T.sv);
              R.Body().set_family_groupid(x);
              const q = await T.Ex.JoinFamilyGroup(O, R);
              return X(q.GetEResult(), "JoinFamilyGroup"), q.Body();
            },
            onSuccess: () => {
              z.invalidateQueries({ queryKey: N(G) }),
                z.invalidateQueries({ queryKey: U(x) }),
                z.invalidateQueries({ queryKey: h(x) });
            },
          });
        }
        function nn(x, O) {
          const G = (0, w.KV)(),
            z = (0, te.jE)();
          return (0, K.n)({
            mutationFn: async () => {
              const R = d.w.Init(T.V1);
              R.Body().set_family_groupid(x), R.Body().set_steamid_to_cancel(O);
              const q = await T.Ex.CancelFamilyGroupInvite(G, R);
              return X(q.GetEResult(), "CancelFamilyGroupInvite"), q.Body();
            },
            onSuccess: () => {
              z.invalidateQueries({ queryKey: N(O) }),
                z.invalidateQueries({ queryKey: U(x) }),
                z.invalidateQueries({ queryKey: h(x) });
            },
          });
        }
        function Wt(x, O) {
          const G = (0, w.KV)(),
            z = (0, te.jE)();
          return (0, K.n)({
            mutationFn: async () => {
              const R = d.w.Init(T.Oe);
              R.Body().set_family_groupid(x), R.Body().set_steamid_to_remove(O);
              const q = await T.Ex.RemoveFromFamilyGroup(G, R);
              return X(q.GetEResult(), "RemoveFromFamilyGroup"), q.Body();
            },
            onSuccess: () => {
              z.invalidateQueries({ queryKey: N(O) }),
                z.invalidateQueries({ queryKey: U(x) }),
                z.invalidateQueries({ queryKey: h(x) });
            },
          });
        }
        function sn(x) {
          const O = (0, w.KV)();
          return (0, D.I)({
            queryKey: Ie(x),
            queryFn: async () => {
              const G = (0, ye.VY)("clientsessionid"),
                z = G && BigInt("0x" + G).toString(),
                R = d.w.Init(T.HP);
              R.Body().set_family_groupid(x),
                R.Body().set_client_instance_id(z ?? void 0);
              const q = await T.Ex.GetUsersSharingDevice(O, R);
              return X(q.GetEResult(), "GetUsersSharingDevice"), q.Body();
            },
          });
        }
        function Sn(x) {
          const O = (0, J.LH)();
          return Se(x)
            .data?.members()
            .find((z) => z.steamid() == O)
            ?.role();
        }
        function xn(x, O) {
          const G = (0, w.KV)();
          return (0, K.n)({
            mutationFn: async () => {
              const z = d.w.Init(T.Fk);
              z.Body().set_family_groupid(x),
                z.Body().set_use_account_cart(!0),
                z.Body().set_store_country_code(O);
              const R = await T.Ex.RequestPurchase(G, z);
              return X(R.GetEResult(), "RequestPurchase"), R.Body();
            },
          });
        }
        function Mn(x, O) {
          const G = (0, w.KV)(),
            z = (0, J.LH)();
          return (0, D.I)({
            queryKey: Z(x, z),
            queryFn: async () => {
              const R = d.w.Init(T.K5);
              R.Body().set_family_groupid(x),
                O !== void 0 && R.Body().set_rt_include_completed_since(O);
              const q = await T.Ex.GetPurchaseRequests(G, R);
              return X(q.GetEResult(), "GetPurchaseRequests"), q.Body();
            },
          });
        }
        function M(x, O) {
          const G = (0, w.KV)(),
            z = (0, J.LH)();
          return (0, D.I)({
            queryKey: Z(x, z, O),
            queryFn: async () => {
              const R = d.w.Init(T.K5);
              R.Body().set_family_groupid(x), R.Body().add_request_ids(O);
              const q = await T.Ex.GetPurchaseRequests(G, R);
              return X(q.GetEResult(), "GetPurchaseRequests"), q.Body();
            },
            select: (R) =>
              R.toObject().requests?.find(({ request_id: q }) => q === O),
          });
        }
        function Gt(x, O, G) {
          const z = (0, w.KV)(),
            R = (0, te.jE)();
          return (0, K.n)({
            mutationFn: async () => {
              const q = d.w.Init(T.e$);
              q.Body().set_family_groupid(x),
                q.Body().set_request_id(O),
                q.Body().set_action(G);
              const Te = await T.Ex.RespondToRequestedPurchase(z, q);
              return (
                X(Te.GetEResult(), "RespondToRequestedPurchase"), Te.Body()
              );
            },
            onSuccess: () => {
              R.invalidateQueries({ queryKey: Z(x) }),
                R.invalidateQueries({ queryKey: h(x) });
            },
          });
        }
        const _e = (0, t.createContext)({
          errorMessage: null,
          setErrorMessage: (x) => {},
        });
        function ls(x, O) {
          return x;
        }
        var In = ((x) => (
          (x[(x.k_EFamilyQueryNone = 0)] = "k_EFamilyQueryNone"),
          (x[(x.k_EFamilyQueryLoadFamily = 1)] = "k_EFamilyQueryLoadFamily"),
          (x[(x.k_EFamilyQueryJoinFamily = 2)] = "k_EFamilyQueryJoinFamily"),
          (x[(x.k_EFamilyQueryDeclineInvite = 3)] =
            "k_EFamilyQueryDeclineInvite"),
          (x[(x.k_EFamilyQueryInviteToFamily = 4)] =
            "k_EFamilyQueryInviteToFamily"),
          (x[(x.k_EFamilyQueryCreateFamily = 5)] =
            "k_EFamilyQueryCreateFamily"),
          (x[(x.k_EFamilyQueryDeleteFamily = 6)] =
            "k_EFamilyQueryDeleteFamily"),
          (x[(x.k_EFamilyQueryModifyFamily = 7)] =
            "k_EFamilyQueryModifyFamily"),
          (x[(x.k_EFamilyQueryRemoveFromFamily = 8)] =
            "k_EFamilyQueryRemoveFromFamily"),
          (x[(x.k_EFamilyQueryGetUsersSharingDevice = 9)] =
            "k_EFamilyQueryGetUsersSharingDevice"),
          (x[(x.k_EFamilyQueryPurchaseRequest = 10)] =
            "k_EFamilyQueryPurchaseRequest"),
          (x[(x.k_EFamilyQueryGetPurchaseRequests = 11)] =
            "k_EFamilyQueryGetPurchaseRequests"),
          (x[(x.k_EFamilyQueryDeclinePurchaseRequest = 12)] =
            "k_EFamilyQueryDeclinePurchaseRequest"),
          (x[(x.k_EFamilyQueryLoadHistory = 13)] = "k_EFamilyQueryLoadHistory"),
          (x[(x.k_EFamilyQueryLoadCart = 14)] = "k_EFamilyQueryLoadCart"),
          (x[(x.k_EFamilyQuerySetCooldownOverrides = 15)] =
            "k_EFamilyQuerySetCooldownOverrides"),
          (x[(x.k_EFamilyQueryResendInvite = 16)] =
            "k_EFamilyQueryResendInvite"),
          x
        ))(In || {});
        const Es = {
          [L.nO]: "#FamilyManagement_ErrorInternalServerError",
          [L.zi]: "#FamilyManagement_ErrorInternalServerError",
          [L.S7]: "#FamilyManagement_ErrorInternalServerError",
          [L.Te]: "#FamilyManagement_ErrorInternalServerError",
          [L.sW]: "#FamilyManagement_AccessDenied",
          [L.p]: "#FamilyManagement_ErrorNoMatch",
          [L.uN]: "#FamilyManagement_ErrorAccountDisabled",
          [L.$U]: "#FamilyManagement_ErrorNoActiveInvite",
          [L.ZI]: "#FamilyManagement_PartnerAccountCannotJoinAsChild",
          [L.UT]: "#FamilyManagement_ErrorFamilySizeLimitExceeded",
          [L.TE]: "#FamilyManagement_ErrorLimitExceeded",
          [L.B1]: "#FamilyManagement_ErrorAccountActivityLimitExceeded",
          [L.Nb]: "#FamilyManagement_LimitedAccount_CreateFamily",
          [L.h_]: { 5: "#FamilyManagement_RateLimitExceeded_CreateFamily" },
          [L.lG]: {
            5: "#FamilyManagement_RegionLocked_CreateFamily",
            2: "#FamilyManagement_RegionLocked_JoinFamily",
          },
          [L.zL]: { 2: "#FamilyManagement_Household_JoinFamily" },
          [L.iC]: {
            5: "#FamilyManagement_ErrorAccountLimitExceeded_CreateFamily",
            2: "#FamilyManagement_ErrorAccountLimitExceeded_JoinFamily",
            8: "#FamilyManagement_ErrorAccountLimitExceeded_RemoveFromFamily",
          },
          [L.Ze]: {
            2: "#FamilyManagement_ErrorDuplicateRequest_JoinFamily",
            4: "#FamilyManagement_ErrorDuplicateRequest_InviteToFamily",
            8: "#FamilyManagement_ErrorDuplicateRequest_RemoveFromFamily",
          },
          [L.fb]: { 4: "#FamilyManagement_ErrorFailed_NoAdditionalDetails" },
        };
        function ne(x, O, G, z) {
          let R = "";
          if (x in Es) {
            const q = Es[x];
            if (typeof q == "string") R = (0, ae.we)(q, ...z);
            else {
              const Te = q;
              G in Te && (R = (0, ae.we)(Te[G], ...z));
            }
          }
          return ls((0, ae.we)(O, R), x);
        }
        function Ps() {
          const { setErrorMessage: x } = (0, t.useContext)(_e);
          return { setErrorMessage: x };
        }
        function Ct(x, O, G) {
          const { setErrorMessage: z } = Ps(),
            { isError: R, error: q } = x,
            Te = he();
          (0, t.useEffect)(() => {
            if (R) {
              const Kt = q,
                $t = [];
              if (Kt === L.TE || Kt === L.B1) {
                let an;
                Te.isSuccess &&
                  Te.data &&
                  (an = Te.data.cooldown_seconds_remaining()),
                  $t.push(Ve(an));
              }
              z(ne(Kt, O, G, $t));
            }
          }, [z, R, q, O, G, Te.isSuccess, Te.data]);
        }
        function Ve(x) {
          if (!x) return (0, ae.we)("#FamilyManagement_LoadingPlaceholder");
          const O = {
            month: "long",
            day: "numeric",
            year: "numeric",
            weekday: void 0,
          };
          return (0, ae.TW)(Date.now() / 1e3 + x, O);
        }
        function Fe(x, O) {
          const { setErrorMessage: G } = Ps();
          (0, t.useEffect)(() => {
            x.isError && G((0, ae.we)(O));
          }, [G, x.isError, O]);
        }
        function He(x) {
          const O = (0, w.KV)();
          return (0, D.I)({
            queryKey: h(x),
            queryFn: async () => {
              const G = d.w.Init(T.pr);
              G.Body().set_family_groupid(x);
              const z = await T.Ex.GetChangeLog(O, G);
              return (
                X(z.GetEResult(), "GetFamilyGroupChangeLog"), z.Body().changes()
              );
            },
            staleTime: 0,
          });
        }
        function rn(x) {
          const O = useActiveServiceTransport();
          return useQuery({
            queryKey: ve(x),
            queryFn: async () => {
              const G = CProtoBufMsg.Init(CShoppingCart_GetContents_Request);
              G.Body().set_gidshoppingcart(x);
              const z = await ShoppingCartService.GetShoppingCartContents(O, G);
              return X(z.GetEResult(), "GetShoppingCartContents"), z.Body();
            },
          });
        }
        function cs(x) {
          const O = useActiveServiceTransport(),
            G = useQueryClient();
          return useMutation({
            mutationFn: async (z) => {
              const R = CProtoBufMsg.Init(
                FGS.CFamilyGroups_SetFamilyCooldownOverrides_Request,
              );
              R.Body().set_family_groupid(x), R.Body().set_cooldown_count(z);
              const q =
                await FGS.FamilyGroupsService.SetFamilyCooldownOverrides(O, R);
              return X(q.GetEResult(), "SetFamilyCooldownOverrides"), q.Body();
            },
            onSuccess: () => {
              G.invalidateQueries({ queryKey: U(x) }),
                G.invalidateQueries({ queryKey: h(x) });
            },
          });
        }
        function Ke(x, O) {
          return `${be.TS.STORE_BASE_URL}cart/purchaserequest/${x}/${O}`;
        }
        function Ge(x) {
          return `${be.TS.STORE_BASE_URL}cart/purchaserequested/${x}`;
        }
        function Xr(x, O) {
          const G = useActiveServiceTransport(),
            z = useQueryClient();
          return useMutation({
            mutationFn: async () => {
              const R = CProtoBufMsg.Init(
                FGS.CFamilyGroups_CreateFamilyGroup_Request,
              );
              R.Body().set_steamid(x), R.Body().set_name(O);
              const q = await FGS.FamilyGroupsService.CreateFamilyGroup(G, R);
              return (
                X(q.GetEResult(), "ForceCreateFamilyGroup"),
                q.Body().family_groupid()
              );
            },
            onSuccess: () => {
              z.invalidateQueries({ queryKey: N(x) });
            },
          });
        }
        function ds(x, O, G, z) {
          return [
            "get_shared_library_apps",
            x,
            O?.bIncludeOwn,
            O?.bIncludeExcluded,
            O?.bIncludeNonGames,
            O?.for_account_id,
            G,
            z,
          ];
        }
        function Rs(x, O) {
          const G = (0, J.LH)(),
            { settings: z, mapAppsAllowed: R } = (0, Q.S0)(G).data,
            q = (0, Q.BM)(),
            Te = (0, w.KV)(),
            {
              bIncludeOwn: Kt,
              bIncludeExcluded: $t,
              bIncludeNonGames: an,
              for_account_id: Ln,
            } = O ?? {},
            Ss = O?.enabled !== void 0 ? O.enabled : !0,
            gn = ds(x, O, z, q),
            Le = (Yt) => !(0, Q.or)(Yt.appid(), q, z, R);
          return (0, D.I)({
            queryKey: gn,
            queryFn: async () => {
              const Yt = d.w.Init(T.xy);
              if (
                (Yt.Body().set_family_groupid(x),
                Yt.Body().set_include_own(Kt),
                Yt.Body().set_include_excluded($t),
                Yt.Body().set_language(be.TS.LANGUAGE),
                Yt.Body().set_include_non_games(an),
                Ln)
              ) {
                const Ks = xe.b2.InitFromAccountID(Ln, be.TS.EUNIVERSE);
                Yt.Body().set_steamid(Ks.ConvertTo64BitString());
              }
              const cn = await T.Ex.GetSharedLibraryApps(Te, Yt);
              return (
                X(cn.GetEResult(), "GetSharedLibraryApps"),
                cn
                  .Body()
                  .apps()
                  .filter(Le)
                  .map((Ks) => Ks.toObject())
              );
            },
            enabled: !!z && Ss,
            placeholderData: re.rX,
            select: O?.select,
          });
        }
        function ar(x, O) {
          const G = (0, te.jE)(),
            z = (0, J.LH)(),
            { settings: R } = (0, Q.S0)(z).data ?? {},
            q = (0, Q.BM)(),
            Te = ds(x, O, R, q);
          return (0, t.useCallback)(() => {
            G.invalidateQueries({ queryKey: Te });
          }, [G, Te]);
        }
        function Hn(x, O) {
          let G = x.sort_as || x.name,
            z = O.sort_as || O.name;
          return (0, C.lY)(G, z);
        }
        function Ts(x, O) {
          return O.rt_time_acquired - x.rt_time_acquired || Hn(x, O);
        }
        function Ws(x, O, G) {
          if (!x && O.length === 0) return !0;
          const z = G.name?.toLocaleLowerCase(),
            R = x.toLocaleLowerCase(),
            q = z?.includes(R) || G.appid?.toString() == R;
          let Te = !0;
          if (G.content_descriptors) {
            for (const Kt of O)
              if (!G.content_descriptors.includes(Kt)) {
                Te = !1;
                break;
              }
          }
          return q && Te;
        }
        function or(x, O, G, z = []) {
          const R = (0, t.useMemo)(
              () => x?.filter((Te) => Ws(G, z, Te)) || [],
              [x, G, z],
            ),
            q = (0, t.useCallback)(
              (Te, Kt) => {
                let $t = Hn;
                switch (O) {
                  case "alpha-asc":
                    $t = Hn;
                    break;
                  case "alpha-desc":
                    $t = (an, Ln) => Hn(Ln, an);
                    break;
                  case "date_acquired-asc":
                    $t = (an, Ln) => Ts(Ln, an);
                    break;
                  case "date_acquired-desc":
                    $t = Ts;
                    break;
                }
                return $t(Te, Kt);
              },
              [O],
            );
          return (0, t.useMemo)(() => R.slice().sort(q), [R, q]);
        }
        function ws(x, O) {
          const G = (0, w.KV)(),
            z = (0, te.jE)(),
            R = (0, J.LH)();
          return (0, K.n)({
            mutationFn: async (q) => {
              const Te = d.w.Init(T.GF);
              Te.Body().set_family_groupid(x),
                Te.Body().set_invite_id(O),
                Te.Body().set_nonce(q);
              const Kt = await T.Ex.ConfirmJoinFamilyGroup(G, Te);
              return X(Kt.GetEResult(), "ConfirmJoinFamilyGroup"), Kt.Body();
            },
            onSuccess: () => {
              z.invalidateQueries({ queryKey: N(R) }),
                z.invalidateQueries({ queryKey: U(x) }),
                z.invalidateQueries({ queryKey: h(x) });
            },
          });
        }
        function Us(x, O, G) {
          const z = (0, w.KV)(),
            R = (0, te.jE)();
          return (0, K.n)({
            mutationFn: async () => {
              const q = d.w.Init(T.U6);
              q.Body().set_family_groupid(x),
                q.Body().set_invite_id(O),
                q.Body().set_nonce(G);
              const Te = await T.Ex.ConfirmInviteToFamilyGroup(z, q);
              return (
                X(Te.GetEResult(), "ConfirmInviteToFamilyGroup"), Te.Body()
              );
            },
            onSuccess: () => {
              R.invalidateQueries({ queryKey: U(x) }),
                R.invalidateQueries({ queryKey: h(x) });
            },
          });
        }
        function Hr(x, O) {
          const G = useActiveServiceTransport();
          return useMutation({
            mutationFn: async () => {
              const z = CProtoBufMsg.Init(
                FGS.CFamilyGroups_ResendInvitationToFamilyGroup_Request,
              );
              z.Body().set_family_groupid(x), z.Body().set_steamid(O);
              const R =
                await FGS.FamilyGroupsService.ResendInvitationToFamilyGroup(
                  G,
                  z,
                );
              return X(R.GetEResult(), "ResendInvitationToFamilyGroup"), R;
            },
          });
        }
        function Ye(x) {
          let O = [];
          x.sort((z, R) => z.time_start - R.time_start);
          let G = new Map();
          for (const z of x) {
            let R = G.get(z.appid);
            R === void 0
              ? G.set(z.appid, z)
              : z.time_start <= R.time_end
                ? (R.time_end = Math.max(R.time_end, z.time_end))
                : (O.push(R), G.set(z.appid, z));
          }
          for (const z of G.values()) O.push(z);
          return O.sort((z, R) => z.time_start - R.time_start), O;
        }
        function Cs(x) {
          const O = (0, w.KV)();
          return (0, D.I)({
            queryKey: se(x),
            queryFn: async () => {
              const G = d.w.Init(de.m8g);
              G.Body().set_steamid(x);
              const z = await de.xtC.GetRecentPlaytimeSessionsForChild(O, G);
              X(z.GetEResult(), "GetRecentPlaytimeSessionsForChild");
              let R = z.Body().toObject().sessions || [];
              return Ye(R);
            },
          });
        }
        function qr(x) {
          const O = useActiveServiceTransport();
          return useQuery({
            queryKey: Pe(x),
            queryFn: async () => {
              const G = CProtoBufMsg.Init(
                FGS.CFamilyGroups_GetPlaytimeSummary_Request,
              );
              G.Body().set_family_groupid(x);
              const z = await FGS.FamilyGroupsService.GetPlaytimeSummary(O, G);
              X(z.GetEResult(), "GetPlaytimeSummary");
              let R = z.Body().toObject().entries ?? [];
              R.sort((Te, Kt) => Kt.seconds_played - Te.seconds_played);
              let q = z.Body().toObject().entries_by_owner ?? [];
              return (
                q.sort((Te, Kt) => Kt.seconds_played - Te.seconds_played),
                { borrowed: R, loaned: q }
              );
            },
            enabled: x !== "0",
          });
        }
        function lr(x) {
          const O = (0, w.KV)(),
            G = (0, J.LH)(),
            z = (0, te.jE)();
          return (0, K.n)({
            mutationFn: async () => {
              const R = d.w.Init(T.cl);
              R.Body().set_family_groupid(x);
              const q = await T.Ex.UndeleteFamilyGroup(O, R);
              return X(q.GetEResult(), "UndeleteFamilyGroup"), q;
            },
            onSuccess: () => {
              z.invalidateQueries({ queryKey: N(G) }),
                z.invalidateQueries({ queryKey: U(x) }),
                z.invalidateQueries({ queryKey: h(x) });
            },
          });
        }
        function _r(x, O) {
          const G = useActiveServiceTransport(),
            z = useQueryClient();
          return useMutation({
            mutationFn: async () => {
              const R = CProtoBufMsg.Init(
                FGS.CFamilyGroups_ForceAcceptInvite_Request,
              );
              R.Body().set_family_groupid(x), R.Body().set_steamid(O);
              const q = await FGS.FamilyGroupsService.ForceAcceptInvite(G, R);
              return X(q.GetEResult(), "ForceAcceptInvite"), null;
            },
            onSuccess: () => {
              z.invalidateQueries({ queryKey: N(O) }),
                z.invalidateQueries({ queryKey: U(x) }),
                z.invalidateQueries({ queryKey: h(x) });
            },
          });
        }
        function cr(x, O) {
          const G = useActiveServiceTransport();
          return useQuery({
            queryKey: _(x, O),
            queryFn: async () => {
              const z = CProtoBufMsg.Init(
                FGS.CFamilyGroups_GetInviteCheckResults_Request,
              );
              z.Body().set_family_groupid(x), z.Body().set_steamid(O);
              const R = await FGS.FamilyGroupsService.GetInviteCheckResults(
                G,
                z,
              );
              return (
                X(R.GetEResult(), "GetInviteCheckResults"), R.Body().toObject()
              );
            },
          });
        }
        function qn(x, O) {
          return x.members().find((G) => G.steamid() == O);
        }
      },
      21079: (P, je, i) => {
        "use strict";
        i.d(je, {
          Dk: () => be,
          Mu: () => C,
          Y8: () => xe,
          ws: () => ye,
          zo: () => Q,
        });
        var t = i(72604),
          d = i(35038),
          D = i(83153),
          te = i(9682),
          K = i(41735),
          re = i.n(K),
          J = i(80902),
          w = i(75233),
          L = i(68312),
          T = i(77187),
          de = i(3166),
          ae = i(90626);
        function ge(h) {
          return ["AppRelevanceStore", "FriendsRecommended", h];
        }
        function be(h) {
          const Ie = (0, L.KV)();
          return (0, J.I)({
            queryKey: ge(h),
            queryFn: () => N(Ie, h),
            enabled: de.iA.logged_in,
          });
        }
        function ye() {
          const h = (0, w.jE)();
          return ae.useCallback(
            (Ie, ve) => {
              h.setQueryData(ge(Ie), ve);
            },
            [h],
          );
        }
        function Q(h) {
          return (0, J.I)({
            queryKey: ["AppRelevanceStore", "StoreRelevance", h],
            queryFn: () => U(h),
            enabled: de.iA.logged_in,
          });
        }
        function C() {
          return (0, T.PG)("App Relevance Store Top Sellers", {
            sort: D.Dq.Rm,
            start: 0,
            count: 100,
          });
        }
        function xe() {
          const { data: h } = C();
          return h;
        }
        async function N(h, Ie) {
          const ve = d.w.Init(te.KV);
          ve.Body().set_appid(Ie);
          const se = await te.YK.GetFriendsRecommendedApp(h, ve),
            Pe = se.GetEResult();
          if (Pe == t.R) return se.Body().toObject();
          throw `Error ${Pe} failed to call GetFriendsRecommendedApp ${Ie}`;
        }
        async function U(h) {
          let Ie = { appid: h },
            ve = { arrSimilarPlayedApps: [], bRecommendedByIR: !1 };
          const Pe = (
            await re().get(
              `${de.TS.STORE_BASE_URL}explore/ajaxgetstorerelevancedata`,
              { params: Ie, withCredentials: !0, timeout: 1e4 },
            )
          ).data;
          return (
            Pe &&
              Pe.success == t.R &&
              (Pe.results.similar_played_apps &&
                (ve.arrSimilarPlayedApps = Pe.results.similar_played_apps.map(
                  (_) => ({
                    appid: _.appid,
                    playtimeForever: _.playtime_forever,
                  }),
                )),
              Pe.results.recommended_by_ir && (ve.bRecommendedByIR = !0)),
            ve
          );
        }
      },
      25509: (P, je, i) => {
        "use strict";
        i.d(je, { k: () => J });
        var t = i(14947),
          d = i(98609),
          D = Object.defineProperty,
          te = Object.getOwnPropertyDescriptor,
          K = (w, L, T, de) => {
            for (
              var ae = de > 1 ? void 0 : de ? te(L, T) : L,
                ge = w.length - 1,
                be;
              ge >= 0;
              ge--
            )
              (be = w[ge]) && (ae = (de ? be(L, T, ae) : be(ae)) || ae);
            return de && ae && D(L, T, ae), ae;
          };
        class re {
          m_ItemDefinition = null;
          m_ItemKV = null;
          constructor(L, T) {
            (0, t.Gn)(this), this.LoadItemDefinition(L, T);
          }
          LoadItemDefinition(L, T) {
            L
              ? (this.m_ItemDefinition = {
                  item_type: L.item_type,
                  item_class: L.item_class,
                  item_description: L.item_description,
                  editor_accountid: L.editor_accountid,
                  deleted: L.deleted,
                  active: L.active,
                  appid: L.appid,
                  item_image_composed: L.item_image_composed,
                  item_image_large: L.item_image_large,
                  item_image_small: L.item_image_small,
                  item_key_values: L.item_key_values,
                  item_movie_mp4: L.item_movie_mp4,
                  item_movie_mp4_small: L.item_movie_mp4_small,
                  item_internal_name: L.item_name,
                  item_series: L.item_series,
                  item_movie_webm: L.item_movie_webm,
                  item_movie_webm_small: L.item_movie_webm_small,
                  item_image_composed_foil: L.item_image_composed_foil,
                  item_last_changed: L.item_last_changed,
                  broadcast_channel_id: L.broadcast_channel_id,
                })
              : (this.m_ItemDefinition = T),
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
        K([t.sH], re.prototype, "m_ItemDefinition", 2),
          K([t.sH], re.prototype, "m_ItemKV", 2);
        function J(w, L) {
          return `${d.TS.COMMUNITY_ASSETS_BASE_URL}images/items/${w}/${L}`;
        }
      },
      63547: (P, je, i) => {
        "use strict";
        i.d(je, { QW: () => ye, VZ: () => be, g: () => ae, kF: () => de });
        var t = i(72604),
          d = i(35038),
          D = i(55051),
          te = i(72609),
          K = i(80902),
          re = i(75233),
          J = i(51614),
          w = i(90626),
          L = i(68312);
        const T = "PlaytestInvites";
        function de() {
          const Q = (0, L.KV)();
          return (0, K.I)({
            queryKey: [T],
            queryFn: async () => {
              const C = d.w.Init(D.rX),
                xe = await D.BX.GetInvites(Q, C);
              if (xe.GetEResult() != t.R)
                throw new Error(
                  `Error from usePlaytestInvite: ${xe.GetEResult()} ${xe.GetErrorMessage()}`,
                );
              return xe.Body()?.toObject().invites ?? [];
            },
          });
        }
        function ae(Q) {
          const C = (0, L.KV)(),
            xe = (0, re.jE)();
          return (0, J.n)({
            mutationFn: async (N) => {
              const U = d.w.Init(D.q);
              U.Body().add_invite_ids(Q),
                U.Body().set_status(N.bAccept ? D.b1.T5 : D.b1.eh);
              const h = await D.BX.UpdateInvites(C, U);
              if (h.GetEResult() != t.R)
                throw {
                  result: h.GetEResult(),
                  message: `Error from UpdatePlaytestInvite: ${h.GetErrorMessage()} ( ${h.GetEResult()} )`,
                };
            },
            onSuccess: (N, U) => {
              xe.setQueryData([T], (h) =>
                h.map((Ie) =>
                  Ie.invite_id === Q
                    ? { ...Ie, status: U.bAccept ? D.b1.T5 : D.b1.eh }
                    : Ie,
                ),
              );
            },
            onError: () => {
              xe.invalidateQueries({ queryKey: [T] });
            },
          });
        }
        function ge(Q) {
          return ["PlaytestUserStatus", Q];
        }
        function be(Q) {
          const C = (0, L.KV)();
          return (0, K.I)({
            queryKey: ge(Q),
            queryFn: async () => {
              if (te.iA.logged_in) {
                const xe = d.w.Init(D.eW);
                Q && xe.Body().set_appid(Q);
                const N = await D.BX.GetUserStatus(C, xe);
                if (N.GetEResult() != t.R)
                  throw new Error(
                    `Error from usePlaytestUserStatus: ${N.GetEResult()} ${N.GetErrorMessage()}`,
                  );
                return N.Body()?.toObject().results ?? [];
              } else return [];
            },
            staleTime: 600 * 1e3,
          });
        }
        function ye() {
          const Q = (0, re.jE)();
          return w.useCallback(
            (C, xe) => {
              Q.setQueryData(ge(C), xe);
            },
            [Q],
          );
        }
      },
      90114: (P, je, i) => {
        "use strict";
        i.r(je),
          i.d(je, {
            OpenInDesktopClient: () => L,
            default: () => de,
            useOpenWebInSteamClient: () => T,
          });
        var t = i(7850),
          d = i(90626),
          D = i(25792),
          te = i(97824),
          K = i.n(te),
          re = i(3166),
          J = i(97996),
          w = i(18210);
        const L = (0, D.Nr)(function (ge) {
          const { fnOpenInSteamClient: be } = T();
          return (0, t.jsx)("div", {
            className: te.OpenInBannerContainer,
            children: (0, t.jsxs)("div", {
              className: te.OpenInBannerContent,
              children: [
                (0, t.jsx)("div", {
                  className: te.BannerButtonContainer,
                  children: (0, t.jsx)("div", {
                    onClick: be,
                    className: te.BannerButton,
                    children: (0, w.we)(
                      "#OpenInDesktopAppBanner_OpenAppButton",
                    ),
                  }),
                }),
                (0, t.jsx)("div", {
                  className: te.BannerMessage,
                  children: (0, t.jsxs)("div", {
                    className: te.BannerTitle,
                    children: [
                      (0, t.jsx)("b", {
                        children: (0, w.we)(
                          "#OpenInDesktopAppBanner_NotSignedIn",
                        ),
                      }),
                      (0, t.jsx)("br", {}),
                      (0, w.we)("#OpenInDesktopAppBanner_Body"),
                    ],
                  }),
                }),
              ],
            }),
          });
        });
        function T() {
          return {
            fnOpenInSteamClient: d.useCallback(() => {
              let ge = `${(0, re.yl)()}//openurl/`;
              const be = (0, J.VY)("browserid");
              if (be) {
                const ye = new URL(window.location.href),
                  Q = new URLSearchParams(ye.search);
                Q.set("utm_bid", be),
                  (ge +=
                    ye.origin + ye.pathname + "?" + Q.toString() + ye.hash);
              } else ge += window.location.href;
              window.location.href = ge;
            }, []),
          };
        }
        const de = L;
      },
      62038: (P, je, i) => {
        "use strict";
        i.r(je),
          i.d(je, {
            AccessibilityFeatureDisplay: () => ye,
            AccessibilityFeaturesFromCategories: () => be,
            AccessibilityIcon: () => Q,
          });
        var t = i(7850),
          d = i(90626),
          D = i(18210),
          te = i(3166),
          K = i(63404),
          re = i.n(K),
          J = i(24660),
          w = i(99412);
        const L = {
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
          T = {
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
        var de = ((N) => (
          (N.Gameplay = "gameplay"),
          (N.Visual = "visual"),
          (N.Audio = "audio"),
          (N.Input = "input"),
          N
        ))(de || {});
        const ae = {
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
          ge = {
            gameplay: "#Accessibility_Group_Gameplay",
            visual: "#Accessibility_Group_Visual",
            audio: "#Accessibility_Group_Audio",
            input: "#Accessibility_Group_Input",
          };
        function be(N) {
          return {
            bAccessibilityResizableUI: N.includes(w.mWc),
            bAccessibilitySubtitles: N.includes(w.sCr),
            bAccessibilityColorAlternatives: N.includes(w.eEM),
            bAccessibilityCameraComfort: N.includes(w.YAh),
            bAccessibilityBackgroundVolumeControls: N.includes(w.Tby),
            bAccessibilityStereoSound: N.includes(w.a2r),
            bAccessibilitySurroundSound: N.includes(w.Obu),
            bAccessibilityNarratedMenus: N.includes(w.C0f),
            bAccessibilityChatSpeechtoText: N.includes(w.FpT),
            bAccessibilityChatTexttoSpeech: N.includes(w.r_E),
            bAccessibilityPlayableWithoutQuicktimeEvents: N.includes(w.eY9),
            bAccessibilityKeyboardOnlyOption: N.includes(w.TQL),
            bAccessibilityMouseOnlyOption: N.includes(w.beA),
            bAccessibilityTouchOnlyOption: N.includes(w.Pw_),
            bAccessibilityDifficultyLevels: N.includes(w.j2d),
            bAccessibilitySaveAnytime: N.includes(w.Rnx),
            bAccessibilityPlayableAtYourOwnPace: N.includes(w.eAR),
            bAccessibilityPlayableWithoutVision: N.includes(w.tIg),
            bAccessibilityContrastControls: N.includes(w.vVO),
          };
        }
        function ye(N) {
          const [U, h] = (0, d.useState)(N.initialOpen ?? !1),
            Ie = d.useId(),
            ve = Object.entries(N.features)
              .filter(([_, Z]) => Z)
              .map(([_]) => _);
          if (ve.length === 0) return null;
          const se = {};
          ve.forEach((_) => {
            const Z = ae[_];
            (se[Z] ??= []), se[Z].push(_);
          });
          const Pe = Object.keys(se).length > 1;
          return (0, t.jsxs)("details", {
            className: re().Details,
            open: U,
            onToggle: (_) => h(_.currentTarget.open),
            children: [
              (0, t.jsxs)(J.f_, {
                className: re().Summary,
                children: [
                  (0, t.jsx)("div", {
                    className: re().ImageContainer,
                    children: (0, t.jsx)(Q, {
                      className: re().CategoryIcon,
                      "aria-label": "",
                    }),
                  }),
                  (0, t.jsxs)("span", {
                    className: re().FeatureNameContainer,
                    id: Ie,
                    children: [
                      (0, t.jsx)("span", {
                        className: re().FeatureName,
                        children: U
                          ? (0, D.we)("#AccessibilityFeatures")
                          : (0, D.we)(
                              "#AccessibilityFeaturesWithCount",
                              ve.length,
                            ),
                      }),
                      (0, t.jsx)("a", {
                        className: re().InfoLink,
                        href: `${te.TS.HELP_BASE_URL}faqs/view/02F5-ACB2-6038-0F36`,
                        target: "_blank",
                        children: "?",
                      }),
                    ],
                  }),
                ],
              }),
              (0, t.jsxs)("ul", {
                className: re().FeatureList,
                "aria-labelledby": Ie,
                children: [
                  Pe &&
                    (0, t.jsxs)(t.Fragment, {
                      children: [
                        se.gameplay &&
                          (0, t.jsx)("li", {
                            children: (0, t.jsx)(C, {
                              group: "gameplay",
                              features: se.gameplay,
                              open: U,
                            }),
                          }),
                        se.visual &&
                          (0, t.jsx)("li", {
                            children: (0, t.jsx)(C, {
                              group: "visual",
                              features: se.visual,
                              open: U,
                            }),
                          }),
                        se.audio &&
                          (0, t.jsx)("li", {
                            children: (0, t.jsx)(C, {
                              group: "audio",
                              features: se.audio,
                              open: U,
                            }),
                          }),
                        se.input &&
                          (0, t.jsx)("li", {
                            children: (0, t.jsx)(C, {
                              group: "input",
                              features: se.input,
                              open: U,
                            }),
                          }),
                      ],
                    }),
                  !Pe &&
                    ve.map((_) =>
                      (0, t.jsx)(
                        "li",
                        { children: (0, t.jsx)(xe, { feature: _, open: U }) },
                        _,
                      ),
                    ),
                ],
              }),
            ],
          });
        }
        function Q(N) {
          return (0, t.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            version: "1.1",
            viewBox: "0 0 1200 1200",
            ...N,
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
        function C(N) {
          const U = d.useId();
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)("span", {
                className: re().GroupLabel,
                id: U,
                children: (0, D.we)(ge[N.group]),
              }),
              (0, t.jsx)("ul", {
                className: re().FeatureGroupItems,
                "aria-labelledby": U,
                children: N.features.map((h) =>
                  (0, t.jsx)(
                    "li",
                    { children: (0, t.jsx)(xe, { feature: h, open: N.open }) },
                    h,
                  ),
                ),
              }),
            ],
          });
        }
        function xe(N) {
          return (0, t.jsx)(J.Ii, {
            href: `${te.TS.STORE_BASE_URL}category/${T[N.feature]}`,
            className: re().InfoRow,
            focusable: N.open,
            children: (0, t.jsx)("span", {
              className: re().FeatureNameContainer,
              children: (0, t.jsx)("span", {
                className: re().FeatureName,
                children: (0, D.we)(L[N.feature]),
              }),
            }),
          });
        }
      },
      61711: (P, je, i) => {
        "use strict";
        i.r(je), i.d(je, { default: () => ae });
        var t = i(7850),
          d = i(54130),
          D = i(19298),
          te = i(20169),
          K = i(97525),
          re = i(18210),
          J = i(3166),
          w = i(1205),
          L = i.n(w),
          T = i(94502),
          de = i(36707);
        function ae(ge) {
          const {
              title: be,
              navKey: ye,
              seeAllLink: Q,
              appIDs: C,
              sortOrder: xe,
              scorePenaltyIfOwned: N,
              capsuleSize: U,
              bFullWidth: h,
            } = ge,
            Ie = (0, J.Qn)(),
            { bShowSeeMoreHint: ve, panelProps: se } = (0, K.i)(Q);
          return (0, t.jsx)(D.Z, {
            className: (0, de.A)(L().StoreItemsCarousel, h && L().FullWidth),
            navEntryPreferPosition: te.iU.PREFERRED_CHILD,
            ...se,
            children: (0, t.jsxs)(d.q, {
              children: [
                (0, t.jsxs)("div", {
                  className: L().Header,
                  children: [
                    (0, t.jsx)("div", { className: L().Title, children: be }),
                    !Ie && (0, t.jsx)(T.H, { url: Q }),
                    Ie &&
                      (0, t.jsx)(K.o, {
                        label: (0, re.we)("#StoreApp_SeeAll"),
                        shown: ve,
                      }),
                  ],
                }),
                (0, t.jsx)(D.Z, {
                  preferredFocus: !0,
                  children: (0, t.jsx)(T._, {
                    navKey: ye,
                    classes: L().StorePageCarousel,
                    appIDs: C,
                    maxItemCount: 4,
                    sortOrder: xe,
                    scorePenaltyIfOwned: N,
                    capsuleSize: U,
                  }),
                }),
              ],
            }),
          });
        }
      },
      94502: (P, je, i) => {
        "use strict";
        i.d(je, { H: () => se, _: () => h });
        var t = i(7850),
          d = i(24660),
          D = i(48156),
          te = i(90626),
          K = i(24805),
          re = i(18994),
          J = i(6469),
          w = i(10142),
          L = i(10349),
          T = i(84676),
          de = i(36707),
          ae = i(18210),
          ge = i(3166),
          be = i(68538),
          ye = i(96117),
          Q = i(89524),
          C = i.n(Q);
        const xe = -1,
          N = parseInt(C().strScrollSnapCarouselItemHeight),
          U = 250;
        function h(Pe) {
          const {
              navKey: _,
              classes: Z,
              appIDs: X,
              sortOrder: H,
              scorePenaltyIfOwned: fe,
              capsuleSize: he,
              maxItemCount: Ee,
              mapAppToCreatorClan: Se,
              strFeatureFirstAppMsg: Ne,
              setNumberVisibleItems: Qe,
            } = Pe,
            ue = (0, re.a4)(910),
            Be = (0, ge.Qn)(),
            [Vt, nn] = (0, J.L2)(),
            [Wt, sn] = te.useState(X),
            Sn = (0, T.zX)(X, K.Xh),
            [xn, Mn] = te.useState(null);
          te.useEffect(() => {
            if (Sn == T.Sq) return;
            const Gt = X.filter(
              (_e) => !w.A.Get().BIsStoreItemMissing(_e, D.c6.qI),
            );
            if (Ne && ue && !Be && Gt.length > 0 && Gt[0] == X[0]) {
              const _e = [Gt[0], xe, ...Gt.slice(1)];
              sn(_e), Mn(Ne), Qe?.(_e.length);
            } else sn(Gt), Qe?.(Gt.length);
          }, [X, Be, ue, Sn, Qe, Ne]);
          const M = Be;
          return (0, t.jsx)(be.F, {
            className: (0, de.A)(Z, {
              SaleSectionCarousel: !0,
              [C().Carousel]: !0,
            }),
            visibleElements: Ee,
            useTestScrollbar: !0,
            bLazyRenderChildren: !0,
            lazyRenderPlaceholderHeight: N,
            lazyRenderPlaceholderWidth: U,
            gap: 12,
            hideArrows: !1,
            screenIsWide: ue,
            navKey: _,
            bForceSimpleCarousel: M,
            children: ve(nn, Wt, H ?? "none", fe ?? 3).map((Gt, _e) =>
              (0, t.jsx)(
                Ie,
                {
                  appID: Gt,
                  size: he,
                  creatorClanAccountID: Se?.get(Gt),
                  strFeaturingMsg: _e == 0 && xn ? xn : void 0,
                },
                Gt,
              ),
            ),
          });
        }
        function Ie(Pe) {
          const {
              appID: _,
              size: Z,
              creatorClanAccountID: X,
              strFeaturingMsg: H,
            } = Pe,
            [fe] = (0, T.G6)(_, D.c6.qI, K.Xh);
          if (_ == xe)
            return (0, t.jsx)("div", {
              className: (0, de.A)({
                [C().Capsule]: !0,
                [C().Small]: Z == "small",
              }),
            });
          if (!fe)
            return (0, t.jsx)("div", {
              className: (0, de.A)(C().Capsule, C().Placeholder),
            });
          const he = (0, L._4)(fe.GetStoreItemType(), fe.GetAppType()),
            Ee = { id: fe.GetID(), type: he },
            Se = !!H;
          return (0, t.jsx)("div", {
            className: (0, de.A)({
              [C().Capsule]: !0,
              [C().TwoWide]: Se,
              [C().Small]: Z == "small",
            }),
            children: (0, t.jsx)(ye.W, {
              capsule: Ee,
              imageType: "header",
              bHidePlatforms: !0,
              bHideStoreHover: Se,
              creatorAccountID: X,
              strDoubleCapsuleMessage: Se ? (0, ae.we)(H) : void 0,
              bPreferAssetWithoutOverride: !1,
            }),
          });
        }
        function ve(Pe, _, Z, X) {
          const H = te.useMemo(
              () => _.filter((he) => !Pe.BIsGameIgnored(he)),
              [_, Pe],
            ),
            fe = te.useMemo(
              () => Array.from({ length: H.length }, () => Math.random()),
              [H.length],
            );
          return Z == "shuffle"
            ? H.map((he, Ee) => {
                const Se =
                  (Pe.BIsGameOwned(he) ? X : 0) +
                  (Math.sqrt(Ee) + 2) * fe[Ee] +
                  Math.sqrt(Ee);
                return { id: he, score: Se };
              })
                .sort((he, Ee) => he.score - Ee.score)
                .map((he) => he.id)
            : Z == "scored"
              ? H.map((he, Ee) => ({
                  id: he,
                  score: Pe.BIsGameOwned(he) ? X + Ee : Ee,
                }))
                  .sort((he, Ee) => he.score - Ee.score)
                  .map((he) => he.id)
              : H;
        }
        function se(Pe) {
          const { url: _ } = Pe;
          return _
            ? (0, t.jsx)(d.Ii, {
                href: _,
                className: (0, de.A)(
                  C().SeeAllLink,
                  "btnv6_grey_black btn_medium",
                ),
                children: (0, t.jsx)("span", {
                  children: (0, ae.we)("#StoreApp_SeeAll"),
                }),
              })
            : void 0;
        }
      },
      94011: (P, je, i) => {
        "use strict";
        i.r(je),
          i.d(je, {
            AppGameInterestCacheInit: () => Yl,
            AppStoreBrowseCacheInit: () => kl,
            default: () => Qf,
          });
        var t = i(7850),
          d = i(90626),
          D = i(65329),
          te = i(72849),
          K = i(7582),
          re = i(53025),
          J = i(71157),
          w = i(90537),
          L = i(24660),
          T = i(19298),
          de = i(20169),
          ae = i(95174),
          ge = i(39905),
          be = i(77495),
          ye = i(12037),
          Q = i(36118),
          C = i(18210);
        function xe(s) {
          return (0, t.jsxs)("div", {
            className: ye.LatestUpdateButtonCtn,
            children: [
              (0, t.jsx)("div", {
                className: ye.LatestUpdateIcon,
                children: (0, t.jsx)(Q.UTF, { role: "presentation" }),
              }),
              (0, t.jsx)(L.ml, {
                className: ye.LatestUpdateButton,
                onClick: s.onClick,
                children: ge.Z.Localize(
                  "#EventBrowse_LatestUpdateTime_Button",
                  (0, C._l)(s.nUpdateTime),
                ),
              }),
            ],
          });
        }
        function N(s) {
          const { nUpdateTime: e, announcementGID: n, onClick: r } = s,
            a = n ? be.O3.GetClanEventFromAnnouncementGID(n) : null,
            o = ae.u;
          return (0, t.jsxs)("div", {
            className: ye.Container,
            children: [
              (0, t.jsxs)("h2", {
                children: [
                  (0, C.we)("#EventBrowse_LastUpdateDate", (0, C._l)(e)),
                  (0, t.jsx)(L.ml, {
                    className: ye.SectionButton,
                    onClick: (l) => {
                      r?.(), l.stopPropagation(), l.preventDefault();
                    },
                    children: (0, C.we)("#EventBrowse_MoreEventsBtn"),
                  }),
                ],
              }),
              !!a &&
                (0, t.jsx)(T.Z, {
                  className: ye.EventsSummariesCtn,
                  "flow-children": "column",
                  navEntryPreferPosition: de.iU.PREFERRED_CHILD,
                  children: (0, t.jsx)(o, {
                    event: a,
                    onClick: (l) => {
                      r?.(), l.stopPropagation(), l.preventDefault();
                    },
                  }),
                }),
            ],
          });
        }
        var U = i(54130),
          h = i(56492),
          Ie = i(33902),
          ve = i(71568),
          se = i(3166);
        const Pe = 500;
        function _(s) {
          const {
              strClassName: e,
              rgEvents: n,
              fnEventShowModal: r,
              elPostRowElement: a,
              bViewAllShowInfiniteScroll: o,
              nSummaryMaxLength: l,
            } = s,
            c = (0, Ie.d)(),
            m = (0, ve.R7)(),
            f = (0, se.Qn)();
          let y = 2,
            v = Pe + 1;
          return (
            m.ownerWindow.window
              ? (v = m.ownerWindow.window.innerWidth)
              : c.viewportWidth && (v = c.viewportWidth.value),
            (y = v <= Pe ? 1 : 2),
            n && n.length == 0 && !a
              ? null
              : (0, t.jsxs)(T.Z, {
                  className: e,
                  "flow-children": "row",
                  children: [
                    !!n &&
                      n.length > 0 &&
                      (0, t.jsx)("div", {
                        className: ye.Container,
                        children: (0, t.jsxs)(U.q, {
                          children: [
                            (0, t.jsxs)("h2", {
                              children: [
                                ge.Z.Localize("#EventBrowse_RecentEvents"),
                                !f &&
                                  !!n &&
                                  (0, t.jsx)(t.Fragment, {
                                    children:
                                      o && r
                                        ? (0, t.jsx)(L.ml, {
                                            className: ye.SectionButton,
                                            onClick: () => r(n[0]),
                                            children: ge.Z.Localize(
                                              "#EventBrowse_MoreEventsBtn",
                                            ),
                                          })
                                        : (0, t.jsx)(h.tj, {
                                            eventModel: n[0],
                                            route: h.PH.k_eViewWebSiteHub,
                                            className: ye.SectionButton,
                                            children: ge.Z.Localize(
                                              "#EventBrowse_MoreEventsBtn",
                                            ),
                                          }),
                                  }),
                              ],
                            }),
                            (0, t.jsx)("div", {
                              className: ye.EventsSummariesCtn,
                              children: n.slice(0, y).map((b) => {
                                const B =
                                  r && !(0, h.sY)()
                                    ? (S) => {
                                        r(b),
                                          S.stopPropagation(),
                                          S.preventDefault();
                                      }
                                    : void 0;
                                return (0, t.jsx)(
                                  ae.u,
                                  {
                                    event: b,
                                    onClick: B,
                                    nSummaryMaxLength: l,
                                  },
                                  b.GID,
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
        var Z = i(49984),
          X = i(19188),
          H = i(96538),
          fe = i(30096);
        function he(s) {
          const {
              trackingLocation: e,
              strClassName: n,
              bViewAllShowInfiniteScroll: r,
            } = s,
            [a, o, l] = (0, fe.uD)(),
            [c, m] = (0, d.useState)(null),
            [f, y] = (0, d.useState)(void 0),
            v = (0, w.Y)(),
            b = (0, d.useCallback)(() => {
              m(null), l();
            }, [l]),
            B = (0, d.useCallback)(
              (De) => {
                e &&
                  De &&
                  De.BIsPartnerEvent() &&
                  v.MarkEventRead(De.GID, De.clanSteamID.GetAccountID(), e) &&
                  v.Flush(),
                  m(De),
                  y(void 0),
                  o();
              },
              [e, v, o],
            ),
            { last_update_event: S, rgEvents: I } = Ee({
              ...s,
              fnEventShowModal: B,
            }),
            V = (0, d.useCallback)(() => {
              const {
                event_gid: De,
                announcement_gid: Xt,
                clan_account_id: tn,
              } = S;
              e && De && v.MarkEventRead(De, tn, e) && v.Flush(),
                y(Xt),
                m(null),
                o();
            }, [S, o, v, e]);
          (0, d.useEffect)(
            () => (
              (window.fnPartnerEvent_ShowInfiniteScroll = (De, Xt) => {
                y(Xt), m(null), y(Xt), o();
              }),
              () => {
                window.fnPartnerEvent_ShowInfiniteScroll &&
                  delete window.fnPartnerEvent_ShowInfiniteScroll;
              }
            ),
            [o],
          );
          const W = (0, se.Qn)(),
            $ = !!S && !!S.rtime,
            me =
              $ && !!S.announcement_gid && (!I || I.length == 0)
                ? S.announcement_gid
                : void 0;
          let ie;
          return (
            $ && me
              ? (ie = (0, t.jsx)(N, {
                  nUpdateTime: S.rtime,
                  announcementGID: me,
                  onClick: V,
                }))
              : $ &&
                !me &&
                !W &&
                (ie = (0, t.jsx)(xe, { nUpdateTime: S.rtime, onClick: V })),
            (0, t.jsxs)(t.Fragment, {
              children: [
                (0, t.jsx)(H.EN, {
                  active: a,
                  children: (0, t.jsx)(Ne, {
                    ...s,
                    announcementGID: f || c?.AnnouncementGID,
                    eventModel: c,
                    closeModal: b,
                  }),
                }),
                (0, t.jsx)(_, {
                  elPostRowElement: ie,
                  rgEvents: I,
                  fnEventShowModal: B,
                  bViewAllShowInfiniteScroll: r,
                  strClassName: n,
                }),
              ],
            })
          );
        }
        function Ee(s) {
          const {
              appid: e,
              event_customization: n,
              partnerEventStore: r,
              trackingLocation: a,
              fnEventShowModal: o,
            } = s,
            [l, c] = (0, d.useState)(null),
            [m, f] = (0, d.useState)(null),
            y = (0, w.Y)(),
            [v] = (0, J.Q)("emgid", void 0),
            [b] = (0, J.Q)("announce_gid", void 0);
          return (
            (0, d.useEffect)(() => {
              const B = (0, Z.v)("EventWebRowEmbed");
              let S = !1;
              if (Se(B)) {
                (S = B.bPreLoaded), c(B.last_update_event);
                const I = [];
                B.announcementGIDList.forEach((V) => {
                  const W = be.O3.GetClanEventFromAnnouncementGID(V);
                  W && I.push(W);
                }),
                  f(I);
              }
              S ||
                (async () => {
                  const V = await r.LoadAdjacentPartnerEvents(
                    void 0,
                    void 0,
                    e,
                    0,
                    2,
                    n,
                  );
                  f(V),
                    a &&
                      V &&
                      V.length > 0 &&
                      (V.filter((W) => W.BIsPartnerEvent()).forEach((W) =>
                        y.MarkEventShown(
                          W.GID,
                          W.clanSteamID.GetAccountID(),
                          a,
                        ),
                      ),
                      y.Flush());
                })();
            }, [e, n, o, r, y, a]),
            (0, d.useEffect)(() => {
              if (m != null && (v || b)) {
                const B = m.find((S) => S.GID === v || S.AnnouncementGID == b);
                B
                  ? o(B)
                  : (async () => {
                      const I = v
                        ? await r.LoadPartnerEventFromClanEventGID(e, v, 0)
                        : await r.LoadPartnerEventFromAnnoucementGID(e, b, 0);
                      I && f([...m, I]);
                    })();
              }
            }, [v, b, m, o, f, r, e]),
            { last_update_event: l, rgEvents: m }
          );
        }
        function Se(s) {
          const e = s;
          return e && typeof e == "object"
            ? e.bPreLoaded !== void 0 &&
                typeof e.bPreLoaded == "boolean" &&
                Array.isArray(e.announcementGIDList)
            : !1;
        }
        function Ne(s) {
          const {
              appid: e,
              partnerEventStore: n,
              trackingLocation: r,
              announcementGID: a,
              eventModel: o,
              closeModal: l,
            } = s,
            c = (0, se.Qn)();
          return (0, t.jsx)(X.N, {
            className: c ? void 0 : ye.StoreHeaderAdjust,
            eventClassName: c ? ye.GamePadUIWidthAdjust : void 0,
            appid: e,
            trackingLocation: r,
            announcementGID: a,
            partnerEventStore: n,
            eventModel: o ?? void 0,
            closeModal: l,
          });
        }
        function Qe(s) {
          const e = (0, K.s4)(),
            n = new Date(e.setUTCHours(0, 0, 0, 0) - 4320 * 60 * 60 * 1e3),
            r = Math.floor(n.getTime() / 1e3),
            { appid: a } = s;
          return (0, t.jsx)(he, {
            appid: a,
            partnerEventStore: re.$.Get(),
            event_customization: {
              rtime_oldestevent: r,
              exclude_tags: ["patchnotes", "hide_store", "mod_hide_store"],
              exclude_event_types: [D.G$._C],
            },
            strClassName: "early_access_announcements",
            trackingLocation: te.Tc.j$,
          });
        }
        var ue = i(99412),
          Be = i(64868),
          Vt = i(41735),
          nn = i.n(Vt),
          Wt = i(29522),
          sn = i(58483),
          Sn = i(82385),
          xn = i(29245),
          Mn = i(27284),
          M = i(40358),
          Gt = i(18057),
          _e = i(6019);
        function ls(s) {
          const e = (0, d.useRef)(null),
            n = (0, sn.LJ)(),
            r = Number(s.appID),
            a = (0, Wt.$5)(r),
            { data: o } = (0, M.J$)(a),
            [l, c] = (0, d.useState)(null);
          (0, d.useEffect)(
            () => (
              (async () => {
                const S = nn().CancelToken.source();
                e.current = S.cancel;
                const I = {
                    exclude_tags: ["steam_game_festival_artist_statement"],
                    require_tags: ["steam_game_festival_broadcast"],
                  },
                  V = await be.O3.LoadAdjacentPartnerEvents(
                    void 0,
                    void 0,
                    r,
                    0,
                    1,
                    I,
                  );
                S.token.reason || (V.length > 0 && c(V[0]));
              })(),
              () => {
                e.current && e.current("DemoAndQuickPitch: Unmounting");
              }
            ),
            [r],
          );
          const [m, f, y] = (0, Be.uD)(),
            v = l ? l.GetNameWithFallback((0, ue.sfN)(se.TS.LANGUAGE)) : null,
            b = l ? l.BHasEventEnded() : !0;
          return !o ||
            !o.related_items?.demo_appid ||
            o.related_items?.demo_appid.length == 0
            ? null
            : (0, t.jsxs)(t.Fragment, {
                children: [
                  (0, t.jsxs)("div", {
                    className: _e.TileContainer,
                    children: [
                      (0, t.jsxs)("div", {
                        className: _e.TileTitleContainer,
                        children: [
                          (0, t.jsxs)("div", {
                            className: _e.TileTitleInnerContainer,
                            children: [
                              (0, t.jsx)("div", {
                                className: _e.TileTitle,
                                children: (0, C.we)(
                                  "#Sale_DownloadDemo",
                                  o.name || "",
                                ),
                              }),
                              (0, t.jsx)(xn.Q, { id: a }),
                            ],
                          }),
                          (0, t.jsx)(Mn.j, {
                            id: a,
                            className: _e.TileActionButton,
                          }),
                        ],
                      }),
                      (0, t.jsx)("div", {
                        className: _e.TileActionContainer,
                        children:
                          l &&
                          v &&
                          (0, t.jsxs)("div", {
                            className: _e.TileActionInnerContainer,
                            children: [
                              b
                                ? (0, t.jsx)("h1", {
                                    children: (0, C.we)(
                                      "#EventBrowse_RecentUpdates",
                                    ),
                                  })
                                : (0, t.jsx)("h1", {
                                    children: (0, C.we)(
                                      "#EventCalendar_TuneIn",
                                    ),
                                  }),
                              (0, t.jsxs)("div", {
                                className: _e.TileActionInner,
                                onClick: f,
                                children: [
                                  (0, t.jsx)("div", {
                                    className: _e.TileActionInnerTitle,
                                    children: v,
                                  }),
                                  (0, t.jsx)("div", {
                                    className: _e.TileActionInnerText,
                                    children: (0, t.jsx)(Gt.K4, {
                                      dateAndTime:
                                        l.GetStartTimeAndDateUnixSeconds(),
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
                  (0, t.jsx)(H.EN, {
                    active: m,
                    children: (0, t.jsx)(Sn.AD, {
                      initialEvent: l,
                      bShowOnlyInitialEvent: !1,
                      partnerEventStore: be.O3,
                      emoticonStore: n,
                      showAppHeader: !0,
                      closeModal: y,
                    }),
                  }),
                ],
              });
        }
        var In = i(20076),
          Es = i(84750),
          ne = i(36707),
          Ps = i(27510),
          Ct = i.n(Ps),
          Ve = i(56718),
          Fe = i(53906);
        const He = new Es.cE();
        var rn = ((s) => (
          (s[(s.EPurchaseNoticeType_ControllerRequired = 0)] =
            "EPurchaseNoticeType_ControllerRequired"),
          (s[(s.EPurchaseNoticeType_VRRequired = 1)] =
            "EPurchaseNoticeType_VRRequired"),
          (s[(s.EPurchaseNoticeType_VRSupported = 2)] =
            "EPurchaseNoticeType_VRSupported"),
          s
        ))(rn || {});
        function cs(s) {
          const { appid: e, type: n } = s;
          switch (n) {
            case 0:
              return (0, t.jsx)(Ke, { appid: e, controllerType: Fe.Oh });
            case 1:
              return (0, t.jsx)(Ge, {});
            default:
              return (0, t.jsx)(Xr, {});
          }
        }
        function Ke(s) {
          return (0, t.jsxs)("div", {
            className: (0, ne.A)(Ct().PurchaseNoticeContainer),
            children: [
              (0, t.jsx)("div", {
                className: (0, ne.A)(Ct().PurchaseNoticeImageContainer),
                children: (0, t.jsx)(Ve.xIk, {
                  type: "xbox",
                  className: (0, ne.A)(Ct().PurchaseNoticeImage, Ct().Tilt),
                }),
              }),
              (0, t.jsx)("div", {
                className: (0, ne.A)(Ct().PurchaseNoticeLabel),
                children: (0, C.we)("#PurchaseNotice_ControllerRequired"),
              }),
            ],
          });
        }
        function Ge(s) {
          return (0, t.jsxs)("div", {
            className: (0, ne.A)(Ct().PurchaseNoticeContainer),
            children: [
              (0, t.jsx)("div", {
                className: (0, ne.A)(Ct().PurchaseNoticeImageContainer),
                children: (0, t.jsx)(Ve.oqe, {
                  className: (0, ne.A)(Ct().PurchaseNoticeImage, Ct().VROnly),
                }),
              }),
              (0, t.jsx)("div", {
                className: (0, ne.A)(Ct().PurchaseNoticeLabel),
                children: (0, C.we)("#PurchaseNotice_VRRequired"),
              }),
            ],
          });
        }
        function Xr(s) {
          return (0, t.jsxs)("div", {
            className: (0, ne.A)(Ct().PurchaseNoticeContainer),
            children: [
              (0, t.jsx)("div", {
                className: (0, ne.A)(
                  Ct().PurchaseNoticeImageContainer,
                  Ct().VRSupported,
                ),
                children: (0, t.jsx)(Ve.Kkn, {
                  className: (0, ne.A)(
                    Ct().PurchaseNoticeImage,
                    Ct().VRSupported,
                  ),
                }),
              }),
              (0, t.jsx)("div", {
                className: (0, ne.A)(Ct().PurchaseNoticeLabel),
                children: (0, C.we)("#PurchaseNotice_VRSupported"),
              }),
            ],
          });
        }
        const ds = cs;
        var Rs = i(97525),
          ar = i(24805),
          Hn = i(813),
          Ts = i(60480),
          Ws = ((s) => (
            (s[(s.k_CreatorHomeNone = 0)] = "k_CreatorHomeNone"),
            (s[(s.k_CreatorHomeAll = -1)] = "k_CreatorHomeAll"),
            s
          ))(Ws || {}),
          or = i(10142),
          ws = i(84676),
          Us = i(72147),
          Hr = i(51249),
          Ye = i.n(Hr),
          Cs = i(94502);
        function qr(s) {
          const {
              clanID: e,
              title: n,
              seeAllLink: r,
              appIDs: a,
              rgAppIDToCreatorIDs: o,
              rgAllCreatorClanIDs: l,
              strFeatureFirstAppMsg: c,
              bFullWidth: m,
            } = s,
            f = (0, ws.zX)(a, ar.Xh),
            y = (0, d.useMemo)(() => {
              const b = new Map(
                Object.entries(o).map(([B, S]) => [Number(B), S]),
              );
              if (f != ws.Sq && e == Ws.k_CreatorHomeAll) {
                const B = new Set(l);
                a.forEach((S) => {
                  if (!b.has(S)) {
                    const I = or.A.Get().GetApp(S);
                    I &&
                      I.GetAllCreatorClanIDs()?.some((V) =>
                        B.has(V) ? (b.set(S, V), !0) : !1,
                      );
                  }
                });
              }
              return b;
            }, [o, f, e, l, a]),
            v = "developer";
          return a.length > 0
            ? (0, t.jsx)(lr, {
                creatorHomeType: v,
                clanID: e,
                titleOverride: n,
                seeAllLink: r,
                appIDs: a,
                mapAppIDsToCreatorClanID: y,
                strFeatureFirstAppMsg: c,
                bFullWidth: m,
              })
            : (0, t.jsx)(_r, { creatorHomeType: v, clanID: e, bFullWidth: m });
        }
        function lr(s) {
          const {
              creatorHomeType: e,
              clanID: n,
              titleOverride: r,
              seeAllLink: a,
              appIDs: o,
              mapAppIDsToCreatorClanID: l,
              strFeatureFirstAppMsg: c,
              bFullWidth: m,
            } = s,
            f = (0, se.Qn)(),
            [y, v] = (0, Hn.TB)(n),
            { creatorHome: b } = (0, Ts.FV)(n),
            B = b?.GetCreatorHomeURL(e),
            [S, I] = d.useState(void 0),
            { bShowSeeMoreHint: V, panelProps: W } = (0, Rs.i)(a);
          if (!b) return;
          const $ = !f && (c ? S == 1 : S <= 2) && v;
          return (0, t.jsx)(T.Z, {
            className: (0, ne.A)(
              Ye().CreatorHomeWithItems,
              $ ? Ye().WithFollowBtn : "",
              m && Ye().FullWidth,
            ),
            navEntryPreferPosition: de.iU.PREFERRED_CHILD,
            ...W,
            children: (0, t.jsxs)(U.q, {
              children: [
                v?.creator_page_bg_url &&
                  (0, t.jsx)("div", {
                    className: Ye().Background,
                    style: { backgroundImage: `url(${v.creator_page_bg_url})` },
                  }),
                (0, t.jsxs)(T.Z, {
                  className: Ye().Header,
                  "flow-children": "row",
                  children: [
                    (0, t.jsxs)("div", {
                      className: Ye().ClanInfoRow,
                      children: [
                        !!v &&
                          (0, t.jsx)("div", {
                            children: (0, t.jsx)(L.Ii, {
                              href: B,
                              focusable: B !== a,
                              children: (0, t.jsx)("img", {
                                className: Ye().ClanAvatarImage,
                                src: b.GetAvatarURLFullSize(),
                              }),
                            }),
                          }),
                        (0, t.jsx)("img", {
                          className: Ye().AvatarBackground,
                          src: b.GetAvatarURLFullSize(),
                        }),
                        (0, t.jsx)("div", {
                          className: Ye().ClanName,
                          children: (0, t.jsx)("a", {
                            href: B,
                            children: r || b.GetName(),
                          }),
                        }),
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      className: Ye().ButtonContainer,
                      children: [
                        !!(!$ && v && !f) &&
                          (0, t.jsx)(Us.of, {
                            className: Ye().CarouselFollowButton,
                            clanAccountID: n,
                          }),
                        !f && (0, t.jsx)(Cs.H, { url: a }),
                        f &&
                          (0, t.jsx)(Rs.o, {
                            label: (0, C.we)("#StoreApp_SeeAll"),
                            shown: V,
                          }),
                      ],
                    }),
                  ],
                }),
                (0, t.jsxs)(T.Z, {
                  className: (0, ne.A)(
                    Ye().CarouselContentsRow,
                    $ && Ye().WithFollowSection,
                  ),
                  preferredFocus: !0,
                  children: [
                    (0, t.jsx)(Cs._, {
                      navKey: "store_page_" + e,
                      classes: Ye().Carousel,
                      appIDs: o,
                      maxItemCount: $ ? S : 4,
                      mapAppToCreatorClan: l,
                      strFeatureFirstAppMsg: c,
                      setNumberVisibleItems: I,
                    }),
                    $ &&
                      (0, t.jsx)("div", {
                        className: Ye().CarouselFollowSection,
                        children: (0, t.jsx)(cr, {
                          clanID: n,
                          creatorName: b.GetName(),
                          creatorUrl: B,
                        }),
                      }),
                  ],
                }),
              ],
            }),
          });
        }
        function _r(s) {
          const { creatorHomeType: e, clanID: n, bFullWidth: r } = s,
            [a, o] = (0, Hn.TB)(n),
            { creatorHome: l } = (0, Ts.FV)(n),
            c = l?.GetCreatorHomeURL(e);
          if (l)
            return (0, t.jsxs)("div", {
              className: (0, ne.A)(
                Ye().CreatorHomeWithoutItems,
                r && Ye().FullWidth,
              ),
              children: [
                o?.creator_page_bg_url &&
                  (0, t.jsx)("div", {
                    className: Ye().Background,
                    style: { backgroundImage: `url(${o.creator_page_bg_url})` },
                  }),
                (0, t.jsx)("div", {
                  children: (0, t.jsx)("a", {
                    href: c,
                    children: (0, t.jsx)("img", {
                      className: Ye().ClanAvatarImage,
                      src: l.GetAvatarURLFullSize(),
                    }),
                  }),
                }),
                (0, t.jsx)(cr, {
                  clanID: n,
                  creatorName: l.GetName(),
                  creatorUrl: c,
                }),
              ],
            });
        }
        function cr(s) {
          const { clanID: e, creatorName: n, creatorUrl: r } = s;
          return (0, t.jsxs)("div", {
            className: Ye().ClanInfoColumn,
            children: [
              (0, t.jsx)("div", {
                className: Ye().ClanFollowTitle,
                children: (0, t.jsx)("a", {
                  href: r,
                  children: (0, C.we)("#StoreApp_FollowCreator", n),
                }),
              }),
              (0, t.jsx)("div", {
                className: Ye().ClanFollowSubtitle,
                children: (0, C.we)("#StoreApp_FollowCreatorSubtitle"),
              }),
              (0, t.jsx)("div", {
                className: Ye().ClanFollowButtonContainer,
                children: (0, t.jsx)(Us.of, {
                  className: Ye().FollowButton,
                  clanAccountID: e,
                }),
              }),
            ],
          });
        }
        var qn = i(14947),
          x = i(12997),
          O = i(64271),
          G = i(65946),
          z = Object.defineProperty,
          R = Object.getOwnPropertyDescriptor,
          q = (s, e, n, r) => {
            for (
              var a = r > 1 ? void 0 : r ? R(e, n) : e, o = s.length - 1, l;
              o >= 0;
              o--
            )
              (l = s[o]) && (a = (r ? l(e, n, a) : l(a)) || a);
            return r && a && z(e, n, a), a;
          };
        function Te(s) {
          let {
              id: e,
              dashManifests: n,
              hlsManifest: r,
              screenshot: a,
              title: o,
              category: l,
              statsURL: c,
            } = s,
            m = Ln(),
            [f, y, v, b] = (0, G.q3)(() => [
              !m.BPlayTrailer(e),
              m.BAutoplayEnabled(),
              m.GetPlayerVolume(),
              m.BAudioMuted(),
            ]),
            B = (0, d.useCallback)(() => {
              m.FireTrailerPlaybackEnded();
            }, [m]);
          return Kt(f)
            ? (0, t.jsx)(x.v, {
                autoplayEnabled: y,
                setAutoplayEnabled: m.GetSetAutoplayEnabled(),
                playerVolume: v,
                setPlayerVolume: m.GetSetPlayerVolume(),
                audioMuted: b,
                setAudioMuted: m.GetSetAudioMuted(),
                children: (0, t.jsx)(O.P, {
                  dashManifests: n,
                  hlsManifest: r,
                  screenshot: a,
                  forcePause: f,
                  onPlaybackEnd: B,
                  altText: o,
                  title: o,
                  category: l,
                  statsURL: c,
                }),
              })
            : null;
        }
        function Kt(s) {
          let e = d.useRef(!1);
          return s || (e.current = !0), e.current;
        }
        class $t {
          m_mapTrailerPlay = new Map();
          m_fnOnTrailerEnd;
          m_bAutoplayEnabled = !1;
          m_fnSetAutoplayEnabled;
          m_flPlayerVolume = 1;
          m_fnSetPlayerVolume;
          m_bAudioMuted = !0;
          m_fnSetAudioMuted;
          constructor() {
            (0, qn.Gn)(this);
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
        q([qn.sH], $t.prototype, "m_mapTrailerPlay", 2),
          q([qn.sH], $t.prototype, "m_bAutoplayEnabled", 2),
          q([qn.sH], $t.prototype, "m_flPlayerVolume", 2),
          q([qn.sH], $t.prototype, "m_bAudioMuted", 2);
        let an = null;
        function Ln() {
          return (
            an ||
              ((an = new $t()),
              window.dispatchEvent(
                new CustomEvent("valve_gamehighlighttrailers_ready", {
                  detail: an,
                }),
              )),
            an
          );
        }
        var Ss = i(67705),
          gn = i(51079),
          Le = i(17479),
          Yt = i(71421);
        function cn(s) {
          const e = s.strSecondaryCategory
              ? `${se.TS.STORE_BASE_URL}search/?controllersupport=${s.strCategory}%2C${s.strSecondaryCategory}`
              : `${se.TS.STORE_BASE_URL}search/?controllersupport=${s.strCategory}`,
            n = (0, t.jsxs)(t.Fragment, {
              children: [
                (0, t.jsx)("div", {
                  className: (0, ne.A)(
                    Le.ImgSection,
                    s.bHightlightRow && Le.HighlightRow,
                    s.bHighlightGPRequired && Le.GamepadRequired,
                  ),
                  children: s.tagImage,
                }),
                (0, t.jsxs)("div", {
                  className: (0, ne.A)(
                    Le.LocSection,
                    s.bHighlightText && Le.HighlightText,
                    s.bHightlightRow && Le.HighlightRow,
                    s.bHighlightGPRequired && Le.GamepadRequired,
                  ),
                  children: [
                    (0, t.jsx)("div", {
                      className: (0, ne.A)(
                        Le.LocString,
                        s.bHighlightText && Le.HighlightText,
                        s.bHightlightRow && Le.HighlightRow,
                        s.bHighlightGPRequired && Le.GamepadRequired,
                        s.bPersonalized && Le.Personalized,
                      ),
                      children: (0, C.we)(s.strLocalizationToken),
                    }),
                    s.strTooltipString &&
                      (0, t.jsx)(Yt.he, {
                        toolTipContent: (0, C.we)(s.strTooltipString),
                        className: Le.ToolTipContainer,
                        children: (0, t.jsx)("span", {
                          className: Le.ToolTipControl,
                          children: "?",
                        }),
                      }),
                  ],
                }),
              ],
            });
          return s.strCategory
            ? (0, t.jsx)("a", { href: e, className: Le.InfoRow, children: n })
            : (0, t.jsx)("div", { className: Le.InfoRow, children: n });
        }
        function Ks(s) {
          return jsx("div", {
            className: styles.PreviewContainer,
            children: jsx(ei, { bPreview: !0, ...s }),
          });
        }
        function Oa(s) {
          return (0, t.jsx)(t.Fragment, {
            children:
              (s.bPartialXboxControllerSupport ||
                s.bFullXboxControllerSupport) &&
              (0, t.jsx)("div", {
                className: Le.StoreSidebarContainer,
                children: (0, t.jsx)(ei, { ...s }),
              }),
          });
        }
        function za() {
          return (0, t.jsx)(cn, {
            tagImage: (0, t.jsx)(Ve.Moo, {
              className: (0, ne.A)(Le.Tilt, Le.SmallerSVG),
              role: "presentation",
            }),
            strLocalizationToken: "#Store_ControllerSupport_GamepadRequired",
            bHighlightGPRequired: !0,
            strTooltipString:
              "#Store_ControllerSupport_Tooltip_ControllerRequired",
          });
        }
        function Na() {
          return (0, t.jsxs)("div", {
            className: (0, ne.A)(Le.PurchaseNoticeContainer),
            children: [
              (0, t.jsx)(Ve.Kz1, {
                className: (0, ne.A)(Le.PurchaseNoticeImage),
                role: "presentation",
              }),
              (0, t.jsx)("div", {
                className: (0, ne.A)(Le.PurchaseNoticeLabel),
                children: (0, C.we)(
                  "#Store_ControllerSupport_GamepadPreferred",
                ),
              }),
            ],
          });
        }
        function Da(s) {
          const { bNoKeyboardSupport: e, bGamepadPreferred: n } = s;
          return (0, t.jsxs)("div", {
            className: (0, ne.A)(Le.NoticeContainer),
            children: [e && (0, t.jsx)(za, {}), n && !e && (0, t.jsx)(Na, {})],
          });
        }
        function ei(s) {
          const {
            bControllerSupportWizardComplete: e,
            bPS4ControllerSupport: n,
            bPS5ControllerSupport: r,
            bPS4ControllerBTSupport: a,
            bPS5ControllerBTSupport: o,
            bFullXboxControllerSupport: l,
            bPartialXboxControllerSupport: c,
            bSteamInputAPISupport: m,
            bHasOther: f,
            bHasPS4: y,
            bHasPS5: v,
            bHasXbox: b,
            bPreview: B,
          } = s;
          let S = [];
          if (n && r && a && o) {
            const I = (0, t.jsx)(Ve.pcV, {
                className: Le.SmallerSVG,
                controllerType: Fe._X,
                partial: !l,
                role: "presentation",
              }),
              V = y || v;
            S.push(
              (0, t.jsx)(
                cn,
                {
                  tagImage: I,
                  strLocalizationToken: V
                    ? "#Store_ControllerSupport_PS_Personalized"
                    : "#Store_ControllerSupport_PS",
                  bPersonalized: V,
                  strCategory: "55",
                  strSecondaryCategory: "57",
                },
                "1",
              ),
            );
          } else {
            if (n) {
              const I = (0, t.jsx)(Ve.pcV, {
                className: Le.SmallerSVG,
                controllerType: Fe._X,
                partial: !l,
                role: "presentation",
              });
              a
                ? S.push(
                    (0, t.jsx)(
                      cn,
                      {
                        tagImage: I,
                        strLocalizationToken: y
                          ? "#Store_ControllerSupport_PS4_Personalized"
                          : "#Store_ControllerSupport_PS4",
                        bPersonalized: y,
                        strCategory: "55",
                      },
                      "2",
                    ),
                  )
                : S.push(
                    (0, t.jsx)(
                      cn,
                      {
                        tagImage: I,
                        strLocalizationToken: y
                          ? "#Store_ControllerSupport_PS4_USB_Personalized"
                          : "#Store_ControllerSupport_PS4_USB",
                        bPersonalized: y,
                        strCategory: "55",
                      },
                      "3",
                    ),
                  );
            }
            if (r) {
              const I = (0, t.jsx)(Ve.pcV, {
                className: Le.SmallerSVG,
                controllerType: Fe.HD,
                partial: !l,
                role: "presentation",
              });
              o
                ? S.push(
                    (0, t.jsx)(
                      cn,
                      {
                        tagImage: I,
                        strLocalizationToken: v
                          ? "#Store_ControllerSupport_PS5_Personalized"
                          : "#Store_ControllerSupport_PS5",
                        bPersonalized: v,
                        strCategory: "57",
                      },
                      "4",
                    ),
                  )
                : S.push(
                    (0, t.jsx)(
                      cn,
                      {
                        tagImage: I,
                        strLocalizationToken: v
                          ? "#Store_ControllerSupport_PS5_USB_Personalized"
                          : "#Store_ControllerSupport_PS5_USB",
                        bPersonalized: v,
                        strCategory: "57",
                      },
                      "5",
                    ),
                  );
            }
          }
          return (0, t.jsx)(t.Fragment, {
            children:
              (c || l) &&
              (0, t.jsxs)(t.Fragment, {
                children: [
                  (0, t.jsx)("div", {
                    className: Le.ControllerSupportLevelString,
                    children: (0, C.we)(
                      l
                        ? "#Store_ControllerSupport_FullController"
                        : "#Store_ControllerSupport_PartialController",
                    ),
                  }),
                  (0, t.jsx)(cn, {
                    tagImage: (0, t.jsx)(Ve.pcV, {
                      className: Le.SmallerSVG,
                      controllerType: Fe.Oh,
                      partial: !l,
                      role: "presentation",
                    }),
                    strLocalizationToken: b
                      ? "#Store_ControllerSupport_Xbox_Personalized"
                      : "#Store_ControllerSupport_Xbox",
                    bPersonalized: b,
                    strCategory: "18",
                  }),
                  S,
                  m &&
                    (0, t.jsx)(cn, {
                      tagImage: (0, t.jsx)(Ve.kdM, {
                        className: Le.BiggerSVG,
                        bGreyOutRightSide: !l,
                        role: "presentation",
                      }),
                      strLocalizationToken: "#Store_ControllerSupport_SIAPI",
                      strTooltipString:
                        "#Store_ControllerSupport_Tooltip_SIAPI",
                      strCategory: "59",
                    }),
                  ((!B && !e) || (!m && f && !b)) &&
                    (0, t.jsx)(cn, {
                      tagImage: (0, t.jsx)(Ve.vet, {
                        className: Le.BiggerSVG,
                        role: "presentation",
                      }),
                      strLocalizationToken:
                        f || y || v
                          ? "#Store_ControllerSupport_Unknown_Personalized"
                          : "#Store_ControllerSupport_Unknown",
                      bPersonalized: f || y || v,
                    }),
                  (0, t.jsx)(Da, { ...s }),
                ],
              }),
          });
        }
        const ti = Oa;
        var ni = i(61711),
          Fa = i(45156),
          Ra = i(399),
          We = i.n(Ra),
          Gs = i(98609),
          Wa = i(92442),
          Jt = i(72865),
          wa = i(37901);
        const Me = {};
        (Me.arabic = () => i.e(70667).then(i.t.bind(i, 70667, 19))),
          (Me.brazilian = () => i.e(58167).then(i.t.bind(i, 58167, 19))),
          (Me.bulgarian = () => i.e(75936).then(i.t.bind(i, 75936, 19))),
          (Me.czech = () => i.e(67478).then(i.t.bind(i, 67478, 19))),
          (Me.danish = () => i.e(77178).then(i.t.bind(i, 77178, 19))),
          (Me.dutch = () => i.e(62063).then(i.t.bind(i, 62063, 19))),
          (Me.english = () => i.e(91253).then(i.t.bind(i, 91253, 19))),
          (Me.finnish = () => i.e(66690).then(i.t.bind(i, 66690, 19))),
          (Me.french = () => i.e(32763).then(i.t.bind(i, 32763, 19))),
          (Me.german = () => i.e(82937).then(i.t.bind(i, 82937, 19))),
          (Me.greek = () => i.e(36501).then(i.t.bind(i, 36501, 19))),
          (Me.hungarian = () => i.e(41812).then(i.t.bind(i, 41812, 19))),
          (Me.indonesian = () => i.e(35383).then(i.t.bind(i, 35383, 19))),
          (Me.italian = () => i.e(48149).then(i.t.bind(i, 48149, 19))),
          (Me.japanese = () => i.e(89876).then(i.t.bind(i, 89876, 19))),
          (Me.koreana = () => i.e(21470).then(i.t.bind(i, 99089, 19))),
          (Me.latam = () => i.e(69206).then(i.t.bind(i, 69206, 19))),
          (Me.malay = () => i.e(74357).then(i.t.bind(i, 74357, 19))),
          (Me.norwegian = () => i.e(94025).then(i.t.bind(i, 94025, 19))),
          (Me.polish = () => i.e(92494).then(i.t.bind(i, 92494, 19))),
          (Me.portuguese = () => i.e(23862).then(i.t.bind(i, 1481, 19))),
          (Me.romanian = () => i.e(48824).then(i.t.bind(i, 48824, 19))),
          (Me.russian = () => i.e(50208).then(i.t.bind(i, 50208, 19))),
          (Me.sc_schinese = () => i.e(63354).then(i.t.bind(i, 63354, 19))),
          (Me.schinese = () => i.e(63875).then(i.t.bind(i, 63875, 19))),
          (Me.spanish = () => i.e(34053).then(i.t.bind(i, 34053, 19))),
          (Me.swedish = () => i.e(38804).then(i.t.bind(i, 38804, 19))),
          (Me.tchinese = () => i.e(48688).then(i.t.bind(i, 48688, 19))),
          (Me.thai = () => i.e(79173).then(i.t.bind(i, 79173, 19))),
          (Me.turkish = () => i.e(75629).then(i.t.bind(i, 75629, 19))),
          (Me.ukrainian = () => i.e(22319).then(i.t.bind(i, 22319, 19))),
          (Me.vietnamese = () => i.e(33844).then(i.t.bind(i, 33844, 19)));
        async function si(s) {
          if (Me[s]) return Me[s]();
        }
        const g = (0, wa.l)(si),
          ri = new Map([
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
          ii = new Map([
            ["adventurer", { className: We().Adventurer }],
            ["anime", { className: We().Anime }],
            ["apocalypse", { className: We().Apocalypse }],
            ["astronaut", { className: We().Astronaut }],
            ["beach", { className: We().Beach }],
            ["bed", { className: We().Bed }],
            ["bus", { className: We().Bus }],
            ["busstop", { className: We().BusStop }],
            ["campfire", { className: We().Campfire }],
            ["car", { className: We().Car }],
            ["city", { className: We().City }],
            ["family", { className: We().Family }],
            ["farmer", { className: We().Farmer }],
            ["knight", { className: We().Knight }],
            ["miner", { className: We().Miner }],
            ["porch", { className: We().Porch }],
            ["robot", { className: We().Robot }],
            ["superhero", { className: We().Superhero }],
            ["woodsman", { className: We().Woodsman }],
            ["zombies", { className: We().Zombies }],
          ]);
        function ai(s) {
          return ri.get(s);
        }
        function Ua(s) {
          return ii.get(s);
        }
        function $l(s) {
          const { appid: e } = s,
            { data: n } = useStoreItemDefaultInfo({ appid: e }),
            r = useIsSteamDeckForSaleInUserCountry();
          return !n || !n.name || !r
            ? null
            : jsx(oi, { appid: e, app_name: n.name });
        }
        function oi(s) {
          const { appid: e } = s,
            n = ai(e);
          return n ? (0, t.jsx)(Ca, { appBannerDef: n, ...s }) : null;
        }
        function Ca(s) {
          const { appid: e, appBannerDef: n, app_name: r } = s,
            a = Ua(n.strBannerType),
            o = (0, Jt.aL)(
              Gs.TS.STORE_BASE_URL +
                `app/${Wa.wy}?deckapp=${e}&utm_source=topplayed_app_banner&utm_campaign=${e}`,
              "topplayed_app_banner",
              e,
            );
          return a
            ? (0, t.jsxs)("div", {
                className: We().BannerWrapper,
                children: [
                  (0, t.jsxs)("div", {
                    className: We().BannerTitle,
                    children: [
                      (0, t.jsx)("div", { className: We().DeckLogo }),
                      g.Localize("#DeckTopPlayedAppBanner_Title"),
                    ],
                  }),
                  (0, t.jsx)("a", {
                    href: o,
                    className: (0, ne.A)(We().TopPlayedBannerCtn, a.className),
                    children: (0, t.jsxs)("div", {
                      className: We().BannerRightContent,
                      children: [
                        (0, t.jsx)("div", {
                          className: We().BannerHeader,
                          children: g.Localize(
                            "#DeckTopPlayedAppBanner_Header",
                          ),
                        }),
                        (0, t.jsx)("div", {
                          className: We().BannerGameText,
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
        var li = i(59970),
          Ka = i(41032),
          Ms = i(21721),
          An = i(27894),
          Ga = i(94846),
          _n = i.n(Ga),
          dr = i(48357),
          Ya = i(64774);
        function ka(s) {
          const { appid: e } = s,
            n = (0, Wt.$5)(e),
            { data: r } = (0, M.lv)(n),
            { data: a } = (0, M.J$)(n),
            o = (0, An.n)(a);
          return !r || !a
            ? null
            : (0, t.jsxs)(T.Z, {
                focusable: !0,
                className: _n().ParentWidgetContainer,
                onActivate: () => {
                  window.location.href = o;
                },
                children: [
                  (0, t.jsx)("div", {
                    className: (0, ne.A)(_n().ParentCapsuleImageContainer),
                    children: (0, t.jsx)("a", {
                      href: o,
                      children: (0, t.jsx)("img", {
                        className: _n().ParentCapsuleImage,
                        src: (0, Ms.b0)(r, "small_capsule"),
                      }),
                    }),
                  }),
                  (0, t.jsxs)("div", {
                    className: _n().AppDetails,
                    children: [
                      (0, t.jsx)("a", {
                        className: (0, ne.A)(_n().GameName),
                        href: o,
                        children: a.name,
                      }),
                      (0, t.jsxs)("div", {
                        className: _n().PriceContainer,
                        children: [
                          (0, t.jsx)(dr.NF, { id: n }),
                          (0, t.jsx)(Ya.r, {
                            appid: e,
                            className: _n().AddToWishlistButton,
                            bTextMode: !0,
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              });
        }
        var et = i(19813),
          ur = i(64415),
          Qa = i(90405);
        function ci(s, e) {
          return (0, d.useMemo)(() => {
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
        var Ht = i(31382),
          Va = i(52951),
          us = i(47045),
          Y = i(72609),
          F = i(68031),
          j = i(15252),
          ce = i(60351);
        function ke(s) {
          const { id: e, bSelfPurchaseOption: n, bHideNewTag: r } = s,
            { data: a } = (0, M.J$)(e);
          return a
            ? (0, t.jsx)(dr.NF, {
                id: e,
                bPurchaseOptionDisplay: !0,
                bHidePrePurchase: !0,
                bSelfPurchaseOption: n,
                bHideNewTag: r,
              })
            : null;
        }
        var Ae = i(42993),
          ze = i(75233),
          Oe = i(80902),
          we = i(51614),
          Ue = i(57589);
        const Ce = new Ue.wd("GameInterest");
        function Re(s, e) {
          return ["GameInterest", s, e];
        }
        function mr(s, e, n, r) {
          s.setQueryData(Re(e, n), r);
        }
        function gr(s) {
          const e = (0, ze.jE)(),
            n = (0, Ae.LH)();
          return (
            d.useEffect(() => {
              const { appid: r, userInterest: a, markReady: o } = s;
              mr(e, n, r, a), o();
            }, [e, n, s]),
            null
          );
        }
        function ms(s) {
          const e = (0, Ae.LH)();
          return (0, Oe.I)({
            queryKey: Re(e, s),
            enabled: !!e,
            queryFn: async () => {
              throw (
                (Ce.Info(
                  "Fetching user game interest from the back end for ",
                  s,
                ),
                new Error("Fetching user game interest is not yet supported"))
              );
            },
          });
        }
        function Ys(s, e, n) {
          const r = (0, ze.jE)(),
            a = (0, Jt.ru)(),
            o = (0, Ae.LH)();
          return (0, we.n)({
            mutationKey: [e, ...Re(o, s)],
            mutationFn: async (l) => {
              Ce.Info(`Mutating ${s} for ${e}`, l);
              const c = new FormData();
              c.set("sessionid", (0, se.KC)()),
                c.set("appid", s.toString()),
                c.set("snr", a);
              const { url: m, new_interest: f } = n(l, c);
              Ce.Info(" new interest before backend call", f),
                r.setQueryData(Re(o, s), f);
              try {
                const y = await fetch(m, { method: "POST", body: c });
                return y.ok
                  ? !0
                  : (Ce.Info(`request to ${e} ${s} failed with ${y}`, l), !1);
              } catch (y) {
                return Ce.Info(`request to ${e} ${s} failed with ${y}`, l), !1;
              }
            },
            onSuccess: (l, c) => {
              l || r.setQueryData(Re(o, s), c.old_interest);
            },
            onError: (l, c, m) => {
              r.setQueryData(Re(o, s), c.old_interest);
            },
          });
        }
        function pr(s) {
          return Ys(s, "wishlist", (e, n) => {
            const { wishlist: r, old_interest: a } = e,
              o = { ...a, wishlist: r },
              l = r
                ? `${se.TS.STORE_BASE_URL}api/addtowishlist`
                : `${se.TS.STORE_BASE_URL}api/removefromwishlist`;
            return { new_interest: o, url: l };
          });
        }
        function di(s) {
          return Ys(s, "ignore", (e, n) => {
            const { ignored: r, ignored_reason: a, old_interest: o } = e,
              l = { ...o, ignored: r, ignored_reason: a };
            r && a !== void 0
              ? n.set("ignore_reason", a.toString())
              : n.set("remove", "1");
            const c = `${se.TS.STORE_BASE_URL}recommended/ignorerecommendation/`;
            return { new_interest: l, url: c };
          });
        }
        function ui(s) {
          return Ys(s, "follow", (e, n) => {
            const { following: r, old_interest: a } = e,
              o = { ...a, following: r };
            r || n.set("unfollow", "1");
            const l = `${se.TS.STORE_BASE_URL}explore/followgame/`;
            return { new_interest: o, url: l };
          });
        }
        var fr = i(20525);
        function mi(s) {
          let { trailers: e, screenshots: n, appid: r } = s;
          return (0, t.jsx)(Ht.QY, {
            supportsFullscreen: !1,
            supportsTheater: !0,
            children: (0, t.jsx)(ks, {
              children: (0, t.jsx)(gi, {
                trailers: e,
                screenshots: n,
                appid: r,
              }),
            }),
          });
        }
        function gi(s) {
          let { trailers: e, screenshots: n, appid: r } = s,
            a = (0, Ht.ri)(),
            o = a?.strMode == "theater",
            l = (0, Ht.Dy)(a, "theater"),
            c = (0, Ht.Dy)(a, "none"),
            m = (0, Va.tw)(),
            [f, y] = fi(o, c),
            v = ci(e, n);
          pi(v);
          const b = d.useCallback(
            (I) => {
              a.refTheater && a.refTheater(I);
            },
            [a],
          );
          if ((d.use(us.n.Ready()), v.length == 0)) return null;
          let B = v.map((I, V) =>
              I.type == "screenshot"
                ? (0, t.jsx)(
                    $a,
                    { autoFocus: V == 0, screenshot: I.data },
                    I.key,
                  )
                : I.type == "trailer"
                  ? (0, t.jsx)(
                      Ja,
                      { autoFocus: V == 0, trailer: I.data },
                      I.key,
                    )
                  : null,
            ),
            S = o ? "" : us.n.Localize("#TrailerPlayer_FullScreen_Tooltip");
          return (0, t.jsx)("div", {
            ref: b,
            className: et.TheaterDialog,
            popover: "manual",
            children: (0, t.jsx)("div", {
              className: et.FocusRingClip,
              children: (0, t.jsx)(U.q, {
                rootClassName: et.FocusRingRoot,
                disableFocusRing: o,
                children: (0, t.jsxs)(T.Z, {
                  ref: m.ref,
                  navRef: m.navRef,
                  className: et.GamepadCarousel,
                  "flow-children": "row",
                  navEntryPreferPosition: de.iU.MAINTAIN_X,
                  onOptionsActionDescription: S,
                  onOptionsButton: l,
                  onCancelButton: o ? c : void 0,
                  onGamepadDirection: f,
                  onFocusWithin: y,
                  children: [
                    !!r && (0, t.jsx)(Bi, { appid: r, fnExitTheaterMode: c }),
                    B,
                  ],
                }),
              }),
            }),
          });
        }
        function pi(s) {
          let e = s.length;
          (0, d.useLayoutEffect)(() => {
            if (e < 1) return;
            document
              .querySelectorAll(".gamehighlight_gamepadskeleton")
              .forEach((r) => r.remove());
          }, [e]);
        }
        function ks(s) {
          let { children: e } = s,
            n = (0, d.useCallback)(() => {}, []),
            [r, a] = (0, d.useState)(!0);
          return (0, t.jsx)(x.v, {
            autoplayEnabled: !1,
            setAutoplayEnabled: n,
            playerVolume: 1,
            setPlayerVolume: n,
            audioMuted: r,
            setAudioMuted: a,
            children: e,
          });
        }
        function fi(s, e) {
          let n = (0, d.useCallback)(
            (a) => {
              s && !a && e();
            },
            [s, e],
          );
          return [(0, d.useCallback)((a) => !!s, [s]), n];
        }
        function $a(s) {
          let { screenshot: e, autoFocus: n } = s,
            r = (0, ne.A)(et.CarouselItem, et.Screenshot);
          return (0, t.jsx)(T.Z, {
            className: r,
            autoFocus: n,
            focusable: !0,
            onOKActionDescription: "",
            children: (0, t.jsx)("img", { src: e.full, alt: e.altText }),
          });
        }
        function Ja(s) {
          let { trailer: e, autoFocus: n } = s;
          return e.dashManifests
            ? (0, t.jsx)(ji, { trailer: e, autoFocus: n })
            : (0, t.jsx)(hi, { trailer: e, autoFocus: n });
        }
        function hi(s) {
          let { trailer: e, autoFocus: n } = s,
            r = (0, d.useRef)(null),
            [a, o] = Qs(),
            l = (0, fe.Ue)(r, o),
            [c, m] = yi(r),
            f = vi(c),
            y = xi(r),
            v = (0, d.useCallback)(
              (V) => {
                let W = r.current;
                if (V.detail.button == ur.pR.TRIGGER_LEFT && W) {
                  (W.currentTime = Math.max(0, W.currentTime - 10)),
                    V.preventDefault(),
                    V.stopPropagation();
                  return;
                }
                if (V.detail.button == ur.pR.TRIGGER_RIGHT && W) {
                  (W.currentTime = Math.min(W.duration, W.currentTime + 10)),
                    V.preventDefault(),
                    V.stopPropagation();
                  return;
                }
              },
              [r],
            );
          if (!e.webmMax) return null;
          let b = e.poster || "",
            B = a.bMuted
              ? us.n.Localize("#TrailerPlayer_Unmute_Tooltip")
              : us.n.Localize("#TrailerPlayer_Mute_Tooltip"),
            S = a.bPaused
              ? us.n.Localize("#TrailerPlayer_Play_Tooltip")
              : us.n.Localize("#TrailerPlayer_Pause_Tooltip"),
            I = (0, ne.A)(et.CarouselItem, et.SingleFileTrailer);
          return (0, t.jsx)(T.Z, {
            className: I,
            onActivate: m,
            onOKActionDescription: S,
            ...f,
            onSecondaryButton: y,
            onSecondaryActionDescription: B,
            onButtonDown: v,
            autoFocus: n,
            children: (0, t.jsx)("video", {
              ref: l,
              controls: !0,
              muted: !0,
              disablePictureInPicture: !0,
              controlsList: "nodownload",
              playsInline: !0,
              preload: "none",
              poster: b,
              children: (0, t.jsx)("source", {
                src: e.webmMax,
                type: "video/webm",
              }),
            }),
          });
        }
        function Qs() {
          let [s, e] = (0, d.useState)({ bPaused: !0, bMuted: !0 }),
            n = (0, fe.QS)(
              (r) => {
                if (!r) return () => {};
                let a = () => {
                    e((m) => ({ ...m, bMuted: r.muted }));
                  },
                  o = () => {
                    e((m) => ({ ...m, bPaused: !1 }));
                  },
                  l = () => {
                    e((m) => ({ ...m, bPaused: !0 }));
                  };
                return (
                  r.addEventListener("volumechange", a),
                  r.addEventListener("play", o),
                  r.addEventListener("pause", l),
                  () => {
                    r.removeEventListener("volumechange", a),
                      r.removeEventListener("play", o),
                      r.removeEventListener("pause", l);
                  }
                );
              },
              [e],
            );
          return [s, n];
        }
        function yi(s) {
          let e = (0, d.useRef)(!1),
            n = (0, d.useRef)(null),
            r = (0, d.useCallback)(
              (o) => {
                let l = s.current;
                if (l && ((e.current = o), !n.current)) {
                  if (!o) {
                    l.paused || l.pause();
                    return;
                  }
                  (n.current = l.play()),
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
            a = (0, d.useCallback)(() => {
              let o = s.current;
              o && r(o.paused);
            }, [r, s]);
          return [r, a];
        }
        function vi(s) {
          let e = (0, d.useCallback)(() => s(!0), [s]),
            n = (0, d.useCallback)(() => s(!1), [s]);
          return { onGamepadFocus: e, onGamepadBlur: n };
        }
        function xi(s) {
          return (0, d.useCallback)(() => {
            let n = s.current;
            n && (n.muted = !n.muted);
          }, [s]);
        }
        function Za(s) {
          const { poster: e, bVideoReady: n } = s;
          return e
            ? (0, t.jsxs)("div", {
                className: (0, ne.A)(et.StillPoster, n && et.VideoStarted),
                children: [
                  (0, t.jsx)("img", {
                    className: (0, ne.A)(et.Poster),
                    src: e,
                    alt: "",
                  }),
                  (0, t.jsx)(fr.ud, { className: et.Icon }),
                ],
              })
            : null;
        }
        function ji(s) {
          let { trailer: e, autoFocus: n } = s,
            [r, a] = (0, d.useState)(!1),
            [o, l] = (0, d.useState)(!1),
            [c, m] = (0, fe.TP)();
          const f = d.useCallback(() => {
            a(!0);
          }, []);
          let y,
            v = (0, ne.A)(et.CarouselItem, et.DashTrailer);
          return (0, t.jsxs)(T.Z, {
            ref: m,
            className: v,
            onFocusWithin: l,
            autoFocus: n,
            children: [
              (0, t.jsx)(Za, { poster: e.poster, bVideoReady: r }),
              (0, t.jsx)(Qa.K, {
                mode: "JustLoad",
                horizontal: !0,
                holdGamepadFocus: !0,
                children: (0, t.jsx)(O.P, {
                  dashManifests: e.dashManifests,
                  hlsManifest: e.hlsManifest,
                  screenshot: e.poster,
                  altText: e.title,
                  forcePause: !o || !c,
                  onPlaybackEnd: y,
                  onPlaybackStart: f,
                  title: e.title,
                  category: e.category,
                  statsURL: e.statsURL,
                }),
              }),
            ],
          });
        }
        function bi(s, e) {
          return Y.TS.STORE_ITEM_BASE_URL + s.replace("${FILENAME}", e);
        }
        function Bi(s) {
          const { appid: e, fnExitTheaterMode: n } = s,
            { data: r } = (0, M.J$)({ appid: e }),
            { data: a } = (0, M.wl)({ appid: e }),
            { data: o } = (0, M.lv)({ appid: e }),
            { data: l } = ms(e),
            { mutateAsync: c } = pr(e),
            m = !!l?.wishlist,
            f = !l?.owned,
            y = d.useCallback(() => {
              l && c({ wishlist: !l.wishlist, old_interest: l });
            }, [c, l]);
          let v, b;
          f &&
            l &&
            ((v = ge.Z.Localize(
              m ? "#Sale_RemoveFromWishlist" : "#Sale_AddToWishlist",
            )),
            (b = y));
          const B = d.useCallback(() => {
            window.postMessage({ method: "FocusPurchaseOptions" });
          }, []);
          if (!o) return null;
          let S = (0, ne.A)(et.CarouselItem, et.TitleCard);
          return (0, t.jsx)(T.Z, {
            className: S,
            onActivate: B,
            onSecondaryActionDescription: v,
            onSecondaryButton: b,
            onOptionsActionDescription: null,
            onOptionsButton: () => {},
            onFocus: n,
            children: (0, t.jsxs)(F.s, {
              position: "absolute",
              inset: "0 0 0 0",
              direction: "column",
              overflow: "hidden",
              children: [
                (0, t.jsx)("img", {
                  className: et.Header,
                  src: bi(o.asset_url_format, o.header),
                  alt: "",
                }),
                (0, t.jsxs)(F.s, {
                  className: et.Bottom,
                  flexGrow: "1",
                  flexShrink: "1",
                  direction: "column",
                  overflow: "hidden",
                  padding: "3",
                  paddingTop: "2",
                  children: [
                    (0, t.jsx)(F.s, {
                      flexGrow: "0",
                      flexShrink: "0",
                      children: (0, t.jsx)(j.EY, {
                        contrast: "title",
                        weight: "heavy",
                        size: { initial: "2", md: "4", lg: "6" },
                        children: r?.name,
                      }),
                    }),
                    (0, t.jsx)(ce.az, {
                      flexGrow: "1",
                      overflow: "hidden",
                      children: (0, t.jsx)(j.EY, {
                        size: { initial: "1", md: "2", lg: "4" },
                        lineClamp: 7,
                        contrast: "body",
                        children: a?.short_description,
                      }),
                    }),
                    r?.best_purchase_option &&
                      (0, t.jsxs)(F.s, {
                        className: et.BottomRow,
                        flexGrow: "0",
                        flexShrink: "0",
                        children: [
                          (0, t.jsx)(ke, { id: { appid: e }, bHideNewTag: !0 }),
                          f &&
                            (0, t.jsxs)(F.s, {
                              className: et.WishlistButton,
                              children: [
                                m
                                  ? (0, t.jsx)(Q.qnF, {
                                      className: et.StarIcon,
                                    })
                                  : (0, t.jsx)(Q.T4m, {
                                      className: et.StarIcon,
                                    }),
                                (0, t.jsx)(Ve.xwO, {
                                  button: "X",
                                  className: et.ButtonIcon,
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
        var $e = i(20338),
          es = i(84456),
          hr = i(7817),
          ts = i(71742);
        function yr() {
          let s = document.cookie.match(
            /(^|; )bGameHighlightAutoplayDisabled=([^;]*)/,
          );
          return !(s && s[2] == "true");
        }
        function Ei(s) {
          let e = new Date();
          e.setTime(e.getTime() + 1e3 * 60 * 60 * 24 * 365 * 10);
          let n = s ? "false" : "true";
          document.cookie = `bGameHighlightAutoplayDisabled=${n}; expires=${e.toUTCString()};path=/`;
        }
        function Pi() {
          let s = document.cookie.match(
              /(^|; )flGameHighlightPlayerVolume=([^;]*)/,
            ),
            e = s && s[2] ? parseFloat(s[2]) : 80;
          return e < 0 ? 0 : e > 100 ? 100 : e;
        }
        function vr(s) {
          let e = new Date();
          e.setTime(e.getTime() + 1e3 * 60 * 60 * 24 * 365 * 10),
            (document.cookie = `flGameHighlightPlayerVolume=${s}; expires=${e.toUTCString()};path=/`);
        }
        function Ti() {
          let s = document.cookie.match(
            /(^|; )bGameHighlightAudioEnabled=([^;]*)/,
          );
          return s && s[2] == "true";
        }
        function Si(s) {
          let e = new Date();
          e.setTime(e.getTime() + 1e3 * 60 * 60 * 24 * 365 * 10);
          let n = s ? "true" : "false";
          document.cookie = `bGameHighlightAudioEnabled=${n}; expires=${e.toUTCString()};path=/`;
        }
        function Mi(s) {
          let { children: e } = s,
            [n, r] = (0, d.useState)(yr),
            a = (0, d.useCallback)((v) => {
              Ei(v), r(v);
            }, []),
            [o, l] = (0, d.useState)(Pi),
            c = (0, d.useCallback)((v) => {
              (v = v * 100), vr(v), l(v);
            }, []),
            [m, f] = (0, d.useState)(Ti),
            y = (0, d.useCallback)((v) => {
              Si(!v), f(!v);
            }, []);
          return (0, t.jsx)(x.v, {
            autoplayEnabled: n,
            setAutoplayEnabled: a,
            playerVolume: o / 100,
            setPlayerVolume: c,
            audioMuted: !m,
            setAudioMuted: y,
            children: e,
          });
        }
        function Ii() {
          return (0, x.F)().m_bAutoplayEnabled ?? !1;
        }
        const k = (0, d.createContext)(void 0);
        function u(s) {
          let { orderedItems: e, children: n } = s,
            r = Ii(),
            [a, o] = (0, d.useState)(() => wt(e, r)),
            l = (0, d.useMemo)(() => {
              if (e.length == 0)
                return {
                  strActiveID: "",
                  strActiveType: "",
                  strPreviousID: "",
                  strNextID: "",
                  fnSetActive: o,
                };
              let c = e.findIndex((v) => v.key == a);
              c = c || 0;
              let m = e[c].type,
                f = Vs("previous", e, c, r),
                y = Vs("next", e, c, r);
              return {
                strActiveID: a,
                strActiveType: m,
                strPreviousID: f,
                strNextID: y,
                fnSetActive: o,
              };
            }, [a, o, e, r]);
          return (0, t.jsx)(k.Provider, { value: l, children: n });
        }
        function E() {
          let s = (0, d.useContext)(k);
          return (
            (0, ts.wT)(
              s != null,
              "useHighlightContext used outside of HighlightContextProvider",
            ),
            s
          );
        }
        function pe(s) {
          let e = E();
          return s == e.strActiveID;
        }
        function tt(s) {
          let e = E();
          return s == e.strNextID;
        }
        function wt(s, e) {
          return (
            (0, ts.wT)(s.length > 0, "Unexpected length"),
            s[0].type == "trailer" && !e ? Vs("next", s, 0, e) : s[0].key
          );
        }
        function Vs(s, e, n, r) {
          (0, ts.wT)(e.length > 0, "Unexpected length");
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
        var kt = i(69131),
          ns = i(13854);
        function xr(s) {
          let { items: e } = s,
            {
              refStrip: n,
              refTrack: r,
              refThumb: a,
              fnRegisterItemElement: o,
            } = Li(),
            c = (0, Ht.ri)()?.strMode == "theater";
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsxs)("div", {
                className: (0, ne.A)(kt.StripSkeleton, c && kt.TheaterMode),
                children: [
                  (0, t.jsx)("div", { className: kt.Items }),
                  (0, t.jsx)("div", { className: kt.Scrollbar }),
                ],
              }),
              (0, t.jsxs)("div", {
                className: (0, ne.A)(kt.Strip, c && kt.TheaterMode),
                children: [
                  (0, t.jsx)(jr, {
                    refStrip: n,
                    items: e,
                    registerItemElement: o,
                  }),
                  (0, t.jsx)(Zl, { refTrack: r, refThumb: a }),
                ],
              }),
            ],
          });
        }
        function Li() {
          let s = E(),
            e = (0, d.useRef)(null),
            n = (0, d.useRef)(null),
            r = (0, d.useRef)(null),
            a = (0, d.useRef)(null),
            o = (0, d.useRef)(void 0);
          o.current || (o.current = new Map()),
            (0, d.useEffect)(() => {
              const m = r.current,
                f = n.current,
                y = e.current;
              if (!m || !f || !y) return;
              let v = y.matches(":dir(rtl)"),
                b = () => {
                  a.current ||
                    (a.current = requestAnimationFrame(() => {
                      a.current = null;
                      let B = f.getBoundingClientRect(),
                        S = m.getBoundingClientRect(),
                        I = B.width - S.width,
                        V = y.scrollWidth - y.clientWidth,
                        W;
                      v
                        ? (W = (0, ns.Fu)(y.scrollLeft, -V, 0, -I, 0))
                        : (W = (0, ns.Fu)(y.scrollLeft, 0, V, 0, I)),
                        (m.style.transform = `translateX( ${W}px )`);
                    }));
                };
              return (
                y.addEventListener("scroll", b, { passive: !0 }),
                () => {
                  y.removeEventListener("scroll", b),
                    a.current && cancelAnimationFrame(a.current);
                }
              );
            }, []),
            (0, d.useEffect)(() => {
              const m = r.current,
                f = n.current,
                y = e.current;
              if (!m || !f || !y) return;
              let v = null,
                b = y.matches(":dir(rtl)"),
                B = (V) => {
                  if (!v) return;
                  let W = V.clientX - v.nInitialClientX,
                    $ = (0, ns.OQ)(v.nInitialPosition + W, 0, v.nTrackWidth),
                    le = (0, ns.Fu)($, 0, v.nTrackWidth, 0, v.nScrollWidth);
                  b && (le = -(v.nScrollWidth - le)),
                    y.scrollTo({ left: le, behavior: "auto" });
                },
                S = (V) => {
                  f.setPointerCapture(V.pointerId);
                  let W = f.getBoundingClientRect(),
                    $ = m.getBoundingClientRect(),
                    le = W.width - $.width,
                    me = y.scrollWidth - y.clientWidth,
                    ie = Math.max($.left - W.left, 0),
                    De = V.clientX;
                  V.target != m &&
                    ((ie = V.clientX - W.left),
                    (ie -= Math.floor($.width / 2)),
                    (ie = (0, ns.OQ)(ie, 0, le))),
                    (v = {
                      nInitialPosition: ie,
                      nInitialClientX: De,
                      nTrackWidth: le,
                      nScrollWidth: me,
                    }),
                    (document.body.style.userSelect = "none"),
                    B(V);
                },
                I = (V) => {
                  (v = null), (document.body.style.userSelect = "");
                };
              return (
                f.addEventListener("pointerdown", S),
                f.addEventListener("pointermove", B),
                f.addEventListener("lostpointercapture", I),
                () => {
                  f.removeEventListener("pointerdown", S),
                    f.removeEventListener("pointermove", B),
                    f.removeEventListener("lostpointercapture", I);
                }
              );
            }, []);
          let l = s.strActiveID;
          (0, d.useEffect)(() => {
            let m = o.current.get(l);
            if (!m) return;
            const f = e.current;
            if (!f) return;
            let y = f.getBoundingClientRect(),
              v = m.getBoundingClientRect();
            if (v.left < y.left || v.right > y.right) {
              let b = v.left - y.left + f.scrollLeft;
              f.scrollTo({ left: b, behavior: "smooth" });
            }
          }, [l]);
          let c = (0, d.useCallback)(
            (m, f) => {
              f ? o.current.set(m, f) : o.current.delete(m);
            },
            [o],
          );
          return {
            refStrip: e,
            refTrack: n,
            refThumb: r,
            fnRegisterItemElement: c,
          };
        }
        function jr(s) {
          let { refStrip: e, items: n, registerItemElement: r } = s,
            a = $s(),
            o = n.map((l) =>
              (0, t.jsx)(Jl, { item: l, registerItemElement: r }, l.key),
            );
          return (0, t.jsx)("div", {
            ref: e,
            className: kt.StripItems,
            onKeyDown: a,
            tabIndex: 0,
            children: o,
          });
        }
        function $s() {
          let s = E();
          return (0, d.useCallback)(
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
        function Jl(s) {
          let { item: e, registerItemElement: n } = s,
            r = E(),
            a = e.key == r.strActiveID,
            o = () => r.fnSetActive(e.key),
            l = e.key,
            c = (0, d.useCallback)((y) => n(l, y), [l, n]),
            m = e.data.thumbnail ? e.data.thumbnail : "",
            f = (0, ne.A)(kt.Item, a && kt.Active);
          return (0, t.jsxs)("div", {
            ref: c,
            className: f,
            onClick: o,
            children: [
              !!m && (0, t.jsx)("img", { src: m, alt: "" }),
              e.type == "trailer" &&
                (0, t.jsx)("div", {
                  className: kt.PlayIcon,
                  children: (0, t.jsx)(fr.ud, {}),
                }),
            ],
          });
        }
        function Zl(s) {
          let { refTrack: e, refThumb: n } = s,
            r = E(),
            a = r.strPreviousID ? () => r.fnSetActive(r.strPreviousID) : void 0,
            o = r.strNextID ? () => r.fnSetActive(r.strNextID) : void 0;
          return (0, t.jsxs)("div", {
            className: kt.StripScrollbar,
            children: [
              (0, t.jsx)("div", {
                className: kt.Arrow,
                onClick: a,
                children: (0, t.jsx)(br, { direction: "left" }),
              }),
              (0, t.jsx)("div", {
                ref: e,
                className: kt.Track,
                children: (0, t.jsx)("div", { ref: n, className: kt.Thumb }),
              }),
              (0, t.jsx)("div", {
                className: kt.Arrow,
                onClick: o,
                children: (0, t.jsx)(br, { direction: "right" }),
              }),
            ],
          });
        }
        function br(s) {
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
        var Xa = i(82734),
          Xl = i(95396),
          Br = i(86048);
        const Hl = 5e3;
        function ql(s) {
          let { appName: e, trailers: n, screenshots: r } = s,
            a = _l(),
            o = ci(n, r);
          return (
            ec(o),
            o.length == 0
              ? null
              : (0, t.jsx)(Ht.QY, {
                  supportsTheater: !a,
                  supportsFullscreen: (0, Xa.tg)(),
                  children: (0, t.jsx)(Mi, {
                    children: (0, t.jsx)(u, {
                      orderedItems: o,
                      children: (0, t.jsxs)(nc, {
                        children: [
                          (0, t.jsx)(rc, { appName: e, items: o }),
                          (0, t.jsx)(xr, { items: o }),
                        ],
                      }),
                    }),
                  }),
                })
          );
        }
        function _l() {
          return (
            (0, Xl.$)(`(max-width: ${$e.storeNarrowResponsiveWidth})`) ||
            Y.TS.IN_MOBILE_WEBVIEW
          );
        }
        function ec(s) {
          let e = s.length;
          (0, d.useLayoutEffect)(() => {
            if (e < 1) return;
            document
              .querySelectorAll(".gamehighlight_desktopskeleton")
              .forEach((r) => r.remove());
          }, [e]);
        }
        const Ha = (0, d.createContext)(!1);
        function tc() {
          return (0, d.useContext)(Ha);
        }
        function nc(s) {
          let { children: e } = s,
            [n, r] = (0, d.useState)(!1),
            a = (0, d.useCallback)((m) => r(m.isIntersecting), []),
            o = (0, fe.BL)(a),
            { refRoot: l } = sc(n),
            c = (0, fe.Ue)(o, l);
          return (0, t.jsx)(Ha.Provider, {
            value: n,
            children: (0, t.jsx)("div", { ref: c, children: e }),
          });
        }
        function sc(s) {
          let e = (0, d.useRef)(null),
            n = (0, d.useRef)(0),
            r = (0, d.useRef)(!1),
            a = (0, d.useRef)(s),
            o = E(),
            l = (0, d.useRef)(o);
          l.current = o;
          let m = ((0, Ht.ri)()?.strMode ?? "none") != "none",
            f = (0, d.useRef)(m);
          f.current = m;
          let y = (0, d.useCallback)(() => {
              if (
                !l.current ||
                l.current.strActiveType != "screenshot" ||
                n.current ||
                r.current ||
                f.current ||
                !a.current
              )
                return;
              let B = () => {
                (n.current = 0), l.current.fnSetActive(l.current.strNextID);
              };
              n.current = window.setTimeout(B, Hl);
            }, []),
            v = (0, d.useCallback)(() => {
              n.current && (window.clearTimeout(n.current), (n.current = 0));
            }, []),
            b = o.strActiveID;
          return (
            (0, d.useEffect)(() => {
              y();
            }, [b]),
            (0, d.useEffect)(() => {
              m ? v() : y();
            }, [m]),
            (0, d.useEffect)(() => {
              const B = e.current;
              if (!B) return;
              let S = () => {
                  document.visibilityState == "visible" ? y() : v();
                },
                I = () => {
                  (r.current = !0), v();
                },
                V = () => {
                  (r.current = !1), y();
                };
              return (
                B.addEventListener("pointerenter", I),
                B.addEventListener("pointerleave", V),
                document.addEventListener("visibilitychange", S),
                () => {
                  B.removeEventListener("pointerenter", I),
                    B.removeEventListener("pointerleave", V),
                    document.addEventListener("visibilitychange", S);
                }
              );
            }, []),
            (0, d.useEffect)(() => {
              (a.current = s), s ? y() : v();
            }, [s, y, v]),
            { refRoot: e }
          );
        }
        function rc(s) {
          let { appName: e, items: n } = s,
            r = E(),
            a = cc(),
            o = (0, Ht.ri)(),
            l = o?.strMode == "theater",
            [c, m] = dc(),
            [f, y] = (0, Br.Rb)(),
            v = f ? r.strActiveID : "",
            b = ac(r),
            B = (0, fe.Ue)(o?.refTheater, b),
            S = n.map((W) =>
              W.type == "screenshot"
                ? (0, t.jsx)(
                    uc,
                    { id: W.key, screenshot: W.data, focus: W.key == v },
                    W.key,
                  )
                : W.type == "trailer"
                  ? (0, t.jsx)(
                      mc,
                      { id: W.key, trailer: W.data, focus: W.key == v },
                      W.key,
                    )
                  : null,
            ),
            I = r.strPreviousID ? () => r.fnSetActive(r.strPreviousID) : void 0,
            V = r.strNextID ? () => r.fnSetActive(r.strNextID) : void 0;
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)(ic, {
                ref: B,
                className: $e.TheaterDialog,
                ...y,
                children: (0, t.jsxs)("div", {
                  className: $e.TheaterModeFrame,
                  children: [
                    (0, t.jsx)(oc, { appName: e }),
                    (0, t.jsxs)("div", {
                      ref: o?.refFullscreen,
                      className: $e.ItemViewArea,
                      ...m,
                      onKeyDown: a,
                      tabIndex: 0,
                      children: [
                        S,
                        (0, t.jsx)("div", {
                          className: (0, ne.A)(
                            $e.FullscreenArrow,
                            c && $e.Visible,
                            $e.Previous,
                          ),
                          onClick: I,
                          "data-keepcontrols": !0,
                          children: (0, t.jsx)(br, { direction: "left" }),
                        }),
                        (0, t.jsx)("div", {
                          className: (0, ne.A)(
                            $e.FullscreenArrow,
                            c && $e.Visible,
                            $e.Next,
                          ),
                          onClick: V,
                          "data-keepcontrols": !0,
                          children: (0, t.jsx)(br, { direction: "right" }),
                        }),
                      ],
                    }),
                    (0, t.jsx)(lc, { items: n, activeItem: r.strActiveID }),
                  ],
                }),
              }),
              (0, t.jsx)("div", {
                className: (0, ne.A)($e.SkeletonViewArea, l && $e.TheaterMode),
              }),
            ],
          });
        }
        function ic(s) {
          let { ref: e, children: n, ...r } = s,
            a = (0, Ht.ri)(),
            o = a?.strMode,
            l = (0, Ht.Dy)(a, "none"),
            c = (0, d.useCallback)(
              (m) => {
                m.target === m.currentTarget && l();
              },
              [l],
            );
          return (
            (0, d.useEffect)(() => {
              if (o != "theater") return;
              let m = (f) => {
                f.key == "Escape" && !f.repeat && l();
              };
              return (
                window.addEventListener("keydown", m),
                () => window.removeEventListener("keydown", m)
              );
            }, [o, l]),
            (0, t.jsx)("div", {
              ref: e,
              ...r,
              popover: "manual",
              onClick: c,
              children: n,
            })
          );
        }
        function ac(s) {
          let e = (0, d.useCallback)(
            (n) => {
              n == "left" && s.strNextID
                ? s.fnSetActive(s.strNextID)
                : n == "right" &&
                  s.strPreviousID &&
                  s.fnSetActive(s.strPreviousID);
            },
            [s],
          );
          return (0, Br.zO)(e);
        }
        function oc(s) {
          let { appName: e } = s,
            n = (0, Ht.ri)(),
            r = (0, Ht.Dy)(n, "none");
          return (0, t.jsxs)("div", {
            className: $e.TheaterModeHeader,
            children: [
              (0, t.jsx)("div", {
                className: $e.Center,
                children: (0, C.we)("#GameHighlight_Theater_Header", e),
              }),
              (0, t.jsx)("div", {
                className: $e.Right,
                children: (0, t.jsx)(Q.tmm, { onClick: r }),
              }),
            ],
          });
        }
        function lc(s) {
          let { items: e, activeItem: n } = s,
            r = e.findIndex((o) => n && o.key == n),
            a = "";
          return (
            r >= 0 &&
              (a = (0, C.we)(
                "#GameHighlight_Theater_ItemCount",
                r + 1,
                e.length,
              )),
            (0, t.jsx)("div", {
              className: $e.TheaterModeFooter,
              children: a.length > 0 && (0, t.jsx)("div", { children: a }),
            })
          );
        }
        function cc() {
          let s = E();
          return (0, d.useCallback)(
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
        function dc() {
          let [s, e] = (0, es.if)(),
            n = (0, d.useRef)({ element: void 0, bKeepControls: !1 }),
            r = (0, d.useCallback)(
              (f) => {
                if (f.target == n.current.element) return;
                let y = (0, es.Ae)(f);
                n.current = { element: f.target, bKeepControls: y };
              },
              [n],
            ),
            a = (0, d.useCallback)(
              (f) => {
                if (n.current.bKeepControls) {
                  e(!0, 0);
                  return;
                }
                e(!0, f);
              },
              [n, e],
            ),
            o = (0, d.useCallback)(
              (f) => {
                f.pointerType != "touch" && (r(f), a((0, es.Av)(f)));
              },
              [a, r],
            ),
            l = (0, d.useCallback)(
              (f) => {
                f.pointerType != "touch" && (r(f), a((0, es.Av)(f)));
              },
              [r, a],
            ),
            c = (0, d.useCallback)(
              (f) => {
                f.pointerType != "touch" &&
                  ((n.current = { element: void 0, bKeepControls: !1 }),
                  a((0, es.Ug)()));
              },
              [n, a],
            ),
            m = (0, d.useCallback)(
              (f) => {
                a((0, es.Av)(f));
              },
              [a],
            );
          return [
            s,
            {
              onPointerEnter: o,
              onPointerMove: l,
              onPointerLeave: c,
              onPointerDown: m,
            },
          ];
        }
        function uc(s) {
          let { id: e, screenshot: n, focus: r } = s,
            a = pe(e),
            o = tt(e),
            l = qa(a || o),
            c = (0, Ht.ri)(),
            m = (0, Ht.Dy)(c, "theater"),
            f = !c?.strMode || c.strMode == "none",
            y = (0, Br.b$)(r);
          if (!l) return null;
          let v = (0, ne.A)(
              $e.ViewedItem,
              a && $e.Active,
              $e.Screenshot,
              f && $e.PageEmbedded,
            ),
            b = n.full,
            B = f ? m : void 0;
          return (0, t.jsxs)("div", {
            ref: y,
            className: v,
            onClick: B,
            tabIndex: 0,
            children: [
              (0, t.jsx)("img", { src: b, alt: n.altText }),
              (0, t.jsxs)("div", {
                className: $e.Controls,
                children: [
                  c?.bSupportsTheater && (0, t.jsx)(hr.tS, {}),
                  c?.bSupportsFullscreen && (0, t.jsx)(hr.Wc, {}),
                ],
              }),
            ],
          });
        }
        function mc(s) {
          let { id: e, trailer: n, focus: r } = s,
            a = pe(e),
            o = qa(a),
            [l, c] = (0, fe.TP)(),
            m = tc(),
            f = E(),
            y = (0, d.useCallback)(() => f.fnSetActive(f.strNextID), [f]);
          if (!o) return null;
          let v = (0, ne.A)($e.ViewedItem, a && $e.Active, $e.Trailer);
          return (0, t.jsx)(Ht.vG, {
            drop: !(0, Xa.tg)(),
            children: (0, t.jsx)("div", {
              ref: c,
              className: v,
              children: (0, t.jsx)(O.P, {
                dashManifests: n.dashManifests,
                hlsManifest: n.hlsManifest,
                screenshot: n.poster,
                altText: n.title,
                forcePause: !a || !l || !m,
                onPlaybackEnd: y,
                title: n.title,
                category: n.category,
                statsURL: n.statsURL,
                focus: r,
              }),
            }),
          });
        }
        function qa(s) {
          let e = (0, d.useRef)(!1);
          return s && (e.current = !0), e.current;
        }
        var gs = i(55051),
          on = i(26356),
          gc = i(46477),
          pc = i(6046),
          fc = i(35111),
          On = i.n(fc),
          ps = i(41944);
        function hc(s) {
          const { appID: e, results: n, appName: r, tab: a = on.ZJ } = s,
            o = (0, se.Qn)();
          let l;
          a == on.JR
            ? (l = (0, C.we)(
                "#SteamMachineCompatibility_Store_CompatSectionHeader_GamepadUI",
              ))
            : a == on.c9
              ? (l = (0, C.we)(
                  "#SteamOSCompatibility_Store_CompatSectionHeader_GamepadUI",
                ))
              : a == on.bY
                ? (l = (0, C.we)(
                    "#SteamFrameCompatibility_Store_CompatSectionHeader_GamepadUI",
                  ))
                : (l = o
                    ? (0, C.we)(
                        "#SteamDeckVerified_Store_CompatSectionHeader_GamepadUI",
                      )
                    : (0, C.we)(
                        "#SteamDeckVerified_Store_CompatSectionHeader_Desktop",
                      ));
          const c = d.useId();
          return n
            ? (0, t.jsxs)("div", {
                className: On().BannerContainer,
                role: "group",
                "aria-labelledby": c,
                children: [
                  (0, t.jsx)("div", {
                    className: On().BannerHeader,
                    id: c,
                    children: l,
                  }),
                  (0, t.jsx)(_a, { ...s }),
                ],
              })
            : null;
        }
        function _a(s) {
          const {
              appID: e,
              results: n,
              appName: r,
              tab: a = on.ZJ,
              className: o,
            } = s,
            l = (0, se.Qn)();
          let c, m;
          if (
            (a == on.c9
              ? ((c = (0, t.jsx)(ps.aw, {
                  category: n.steamos_resolved_category,
                })),
                (m = (0, t.jsx)(yc, { category: n.steamos_resolved_category })))
              : a == on.JR
                ? ((c = (0, t.jsx)(ps.Ez, {
                    category: n.machine_resolved_category,
                  })),
                  (m = (0, t.jsx)(Ai, {
                    category: n.machine_resolved_category,
                  })))
                : a == on.bY
                  ? ((c = (0, t.jsx)(ps.Ez, {
                      category: n.frame_resolved_category,
                    })),
                    (m = (0, t.jsx)(Ai, {
                      category: n.frame_resolved_category,
                    })))
                  : ((c = (0, t.jsx)(ps.Ez, { category: n.resolved_category })),
                    (m = (0, t.jsx)(Ai, { category: n.resolved_category }))),
            !n)
          )
            return null;
          const f = n?.steam_deck_blog_url && a != on.bY;
          return (0, t.jsxs)("div", {
            className: (0, ne.A)(
              l ? On().BannerContent : On().BannerContentDesktop,
              o,
            ),
            children: [
              (0, t.jsxs)("div", { children: [c, m] }),
              (0, t.jsx)(vc, {
                results: n,
                learnMore: (0, C.we)(
                  "#SteamDeckVerified_Store_CompatSection_LearnMore",
                ),
                appName: r || "",
                eStartingTab: a,
              }),
              f && (0, t.jsx)("div", { className: On().Divider }),
              f &&
                (0, t.jsx)(ps.Tz, {
                  url: n.steam_deck_blog_url,
                  containerClass: On().DeveloperComments_Anchor,
                  bIncludeIcon: !0,
                }),
            ],
          });
        }
        function Ai(s) {
          const { category: e } = s;
          return (0, t.jsx)("span", {
            className: On().CompatibilityDetailRatingDescription,
            children: (0, C.we)((0, ps.Dy)(e)),
          });
        }
        function yc(s) {
          const { category: e } = s;
          return (0, t.jsx)("span", {
            className: On().CompatibilityDetailRatingDescription,
            children: (0, C.we)((0, ps.wW)(e)),
          });
        }
        function vc(s) {
          const {
              results: e,
              learnMore: n,
              appName: r,
              eStartingTab: a = on.ZJ,
            } = s,
            [o, l] = (0, d.useState)(!1);
          let c = d.useCallback(
            (y) => {
              const v = (0, gc.D)();
              v && v.AddEvent(gs.Xm.gS), l(!0);
            },
            [l],
          );
          const m = () => {
            l(!1);
          };
          let f = {
            onOKButton: void 0,
            onOKActionDescription: null,
            onCancelActionDescription: ge.Z.Localize("#Button_Close"),
            onCancelButton: () => l(!1),
          };
          return (0, t.jsxs)("div", {
            children: [
              (0, t.jsx)(L.Ii, {
                className: On().LearnMore,
                onClick: c,
                children: n,
              }),
              (0, t.jsx)(H.mt, {
                active: o,
                onDismiss: m,
                modalClassName: "DeckVerifiedModalDialog",
                children: (0, t.jsx)(U.q, {
                  children: (0, t.jsx)(pc.Ay, {
                    results: e,
                    buttonProps: f,
                    appName: r,
                    eStartingTab: a,
                  }),
                }),
              }),
            ],
          });
        }
        const xc = hc;
        var jc = i(4880),
          jn = i(72604),
          Oi = i(66243),
          bc = i(47604),
          Bc = i(64238),
          ss = i.n(Bc),
          Je = i(45931),
          _t = i(37520),
          Zt = i(46146),
          rt = i(35038),
          En = i(19982),
          pn = i(68312);
        const rs = "0",
          eo = "-1",
          Js = "wishlistcategories";
        function to(s, e, n) {
          return [Js, s, e, n];
        }
        function no(s, e, n, r) {
          return {
            queryKey: to(e, !n || n === "0" ? "" : n, r),
            queryFn: () => Ec(s, e, n, r),
            staleTime: 600 * 1e3,
          };
        }
        async function Ec(s, e, n, r) {
          if (!e || (n != e && !r)) return [];
          let a = [];
          if (r) {
            const o = rt.w.Init(En.Y);
            o.Body().set_steamid(e),
              o.Body().set_share_token(r),
              (a =
                (await En.FQ.GetSharedWishlistCategories(s, o))
                  .Body()
                  .toObject().categories ?? []);
          } else {
            const o = rt.w.Init(En.tP);
            a =
              (await En.FQ.GetWishlistCategories(s, o)).Body().toObject()
                .categories ?? [];
          }
          return Fi(a);
        }
        function Er(s, e) {
          const n = (0, Ae.LH)(),
            r = (0, pn.KV)();
          return (0, Oe.I)(no(r, s, n, e));
        }
        function Pc(s, e) {
          const n = (0, Ae.LH)(),
            r = (0, pn.KV)(),
            a = d.useCallback((o) => new Map(o.map((l) => [l.id, l])), []);
          return (0, Oe.I)({ ...no(r, s, n, e), select: a });
        }
        const zi = "wishlistappidcategories";
        function Ni(s, e) {
          return [zi, s, e];
        }
        function Tc(s, e, n) {
          return {
            queryKey: Ni(e, n),
            queryFn: async () => {
              const r = rt.w.Init(En.vu);
              r.Body().set_appid(n);
              const a = await En.FQ.GetItemCategories(s, r);
              return a.BSuccess()
                ? Fi(a.Body().toObject().categories ?? [])
                : [];
            },
            staleTime: 600 * 1e3,
          };
        }
        function Di(s, e) {
          const n = (0, pn.KV)();
          return (0, Oe.I)(Tc(n, s, e));
        }
        function so(s) {
          const e = (0, pn.KV)(),
            n = (0, ze.jE)();
          return (0, we.n)({
            mutationFn: async (r) => {
              const a = rt.w.Init(En.Vh);
              a.Body().set_appid(r.appid),
                a.Body().set_category_name(r.categoryName),
                a.Body().set_categoryid(r.categoryID);
              const o = await En.FQ.AddWishlistItemCategory(e, a);
              let l = { eresult: o.GetEResult() };
              return (
                o.BSuccess() &&
                  (l.category = {
                    id: o.Body().categoryid(),
                    name: o.Body().name(),
                    cItems: o.Body().item_count(),
                    bNotificationOptIn: !!o.Body().notification_opt_in(),
                  }),
                l
              );
            },
            onSuccess(r, a) {
              n.invalidateQueries({
                queryKey: ["WishlistSortedFiltered", s],
                exact: !1,
              }),
                n.invalidateQueries({ queryKey: [Js, s], exact: !1 }),
                n.invalidateQueries({ queryKey: Ni(s, a.appid) });
            },
          });
        }
        function ro(s) {
          const e = (0, pn.KV)(),
            n = (0, ze.jE)();
          return (0, we.n)({
            mutationFn: async (r) => {
              const a = rt.w.Init(En.sF);
              return (
                a.Body().set_appid(r.appid),
                a.Body().set_categoryid(r.categoryID),
                (await En.FQ.RemoveWishlistItemCategory(e, a)).GetEResult()
              );
            },
            onSuccess(r, a) {
              n.invalidateQueries({
                queryKey: ["WishlistSortedFiltered", s],
                exact: !1,
              }),
                n.invalidateQueries({ queryKey: [Js, s], exact: !1 }),
                n.invalidateQueries({ queryKey: Ni(s, a.appid) });
            },
          });
        }
        function $f(s) {
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
              n.invalidateQueries({ queryKey: [Js, s], exact: !1 }),
                n.invalidateQueries({ queryKey: [zi, s], exact: !1 });
            },
          });
        }
        const io = 256;
        function Jf(s) {
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
              for (let l = 0; l < r.rgAppIDs.length; l += io) {
                const c = r.rgAppIDs.slice(l, l + io),
                  m = CProtoBufMsg.Init(
                    CWishlist_SetWishlistItemCategoryBulk_Request,
                  );
                for (const v of c) m.Body().add_appids(v);
                o && o !== rs
                  ? m.Body().set_categoryid(o)
                  : m.Body().set_category_name(r.categoryName),
                  m.Body().set_remove(!!r.bRemove);
                const f = await WishlistService.SetWishlistItemCategoryBulk(
                  e,
                  m,
                );
                if (!f.BSuccess()) {
                  (a.eresult = f.GetEResult()),
                    a.rgAppIDsFailed.push(...r.rgAppIDs.slice(l));
                  break;
                }
                const y = f.Body().toObject();
                a.rgAppIDsUpdated.push(...(y.appids_updated ?? [])),
                  a.rgAppIDsFailed.push(...(y.appids_failed ?? [])),
                  !a.category &&
                    y.category &&
                    ((a.category = Fi([y.category])[0]),
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
                n.invalidateQueries({ queryKey: [Js, s], exact: !1 }),
                n.invalidateQueries({ queryKey: [zi, s], exact: !1 }));
            },
          });
        }
        const Pr = "wishlist_recent_categories";
        function ao(s) {
          return {
            queryKey: [Pr],
            queryFn: async () => (await s.GetObject(Pr)) ?? [],
            staleTime: 3600 * 1e3,
          };
        }
        function oo() {
          const s = (0, pn.rX)();
          return (0, Oe.I)(ao(s));
        }
        function lo() {
          const s = (0, pn.rX)(),
            e = (0, ze.jE)();
          return (0, we.n)({
            mutationFn: async (n) => {
              const r = (await e.ensureQueryData(ao(s))) ?? [],
                a = Array.from(new Set([...n.rgCategoryIDs, r])).slice(0, 3);
              return await s.StoreObject(Pr, a), a;
            },
            onSuccess: async (n) => {
              e.setQueryData([Pr], n);
            },
          });
        }
        function Fi(s) {
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
        function co(s) {
          const { data: e } = Er(s);
          return d.useMemo(() => {
            let n = [
              {
                id: rs,
                name: (0, Je.g)("#Wishlist_Categories_Suggested_Birthday"),
                cItems: 0,
                bNotificationOptIn: !1,
              },
              {
                id: rs,
                name: (0, Je.g)("#Wishlist_Categories_Suggested_Recommended"),
                cItems: 0,
                bNotificationOptIn: !1,
              },
              {
                id: rs,
                name: (0, Je.g)("#Wishlist_Categories_Suggested_Discount"),
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
        function Zf(s) {
          const e = useActiveServiceTransport(),
            n = useQueryClient(),
            r = to(s, s, void 0);
          return useMutation({
            mutationFn: async (a) => {
              const o = await Sc(e, a);
              if (o !== k_EResultOK)
                throw new Error(
                  `SetWishlistCategoryNotifications returned EResult ${o}`,
                );
            },
            onMutate: async (a) => {
              await n.cancelQueries({ queryKey: r }),
                n.setQueryData(r, (o) => {
                  if (!o) return a;
                  const l = new Map(a.map((c) => [c.id, c]));
                  return o.map((c) => l.get(c.id) ?? { ...c });
                });
            },
            onError: () => n.invalidateQueries({ queryKey: r }),
          });
        }
        async function Sc(s, e) {
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
        const Mc = parseInt(Zt.wishlistCategoryMaxDisplayChars);
        var Ri = ((s) => (
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
        ))(Ri || {});
        function Zs(s) {
          const {
              rgCategories: e,
              header: n,
              onClick: r,
              eAction: a,
              bMultiline: o,
              bShowEmptyLabel: l,
              bShowAllButton: c,
              containerClassName: m,
              size: f,
              bShowCounts: y,
            } = s,
            v = d.useRef(null),
            b = a !== 3 && a !== 0;
          let B = [],
            S = !1;
          for (const V of e) {
            V.bSelected && (S = !0);
            const W = V.id === rs ? V.name : V.id,
              $ = (0, t.jsx)(
                uo,
                {
                  category: V,
                  selected: b && !!V.bSelected,
                  onClick: r ? () => r(V.name, V.id) : void 0,
                  eAction: a ?? 0,
                  bShowCount: y,
                },
                W,
              );
            B.push($);
          }
          const I = (0, Je.g)("#Wishlist_Controls_Categories_All");
          return (
            d.useEffect(() => {
              v.current?.Node().BFocusWithin() &&
                v.current.Node().ForceMeasureFocusRing();
            }, [e]),
            (0, t.jsxs)(T.Z, {
              className: ss()(Zt.CategoriesCtn, m),
              scrollIntoViewWhenChildFocused: !0,
              children: [
                n !== null &&
                  (0, t.jsx)("span", {
                    className: Zt.CategoryListHeader,
                    children:
                      n ?? (0, Je.g)("#Wishlist_Controls_Categories_Header"),
                  }),
                (0, t.jsxs)(T.Z, {
                  className: ss()(
                    Zt.CategoryList,
                    o && Zt.Multiline,
                    f === "small" && Zt.Small,
                    f === "default" && Zt.ForceDefaultSize,
                  ),
                  "flow-children": o ? "grid" : "row",
                  focusableIfEmpty: e.length > 0,
                  navRef: v,
                  children: [
                    c &&
                      (0, t.jsx)(uo, {
                        category: {
                          cItems: 0,
                          id: eo,
                          name: I,
                          bNotificationOptIn: !1,
                        },
                        selected: !S,
                        onClick: () => r && r(I, eo),
                        onOKActionDescription: (0, Je.g)(
                          "#Wishlist_Gamepad_Filter_Clear_Category",
                        ),
                      }),
                    B,
                    !e.length &&
                      l &&
                      (0, t.jsx)("div", {
                        className: Zt.CategoryListHeader,
                        children: (0, Je.g)("#Wishlist_Categories_None"),
                      }),
                  ],
                }),
              ],
            })
          );
        }
        function uo(s) {
          const {
              category: e,
              selected: n,
              className: r,
              onOKActionDescription: a,
              onClick: o,
              eAction: l,
              bShowCount: c,
            } = s,
            m = l === 3,
            f = l === 1,
            y = e.name.length >= Mc;
          let v = a;
          f && !v
            ? (v = (0, Je.g)("#Wishlist_Gamepad_Filter_Category"))
            : l === 2 && !v
              ? (v = (0, Je.g)("#Wishlist_Gamepad_Add_Category"))
              : l === 3 &&
                !v &&
                (v = (0, Je.g)("#Wishlist_Gamepad_Removecategory"));
          const b = {
              onOKActionDescription: v,
              onOKButton: () => o && o(),
              focusClassName: Zt.Focused,
            },
            B = !!o;
          let S;
          return (
            y
              ? (S = e.name)
              : m && B
                ? (S = (0, Je.g)(
                    "#Wishlist_Controls_Categories_Remove_Tooltip",
                  ))
                : f &&
                  B &&
                  (S = (0, Je.g)(
                    "#Wishlist_Controls_Categories_Filter_Tooltip",
                  )),
            (0, t.jsx)(Yt.Gq, {
              toolTipContent: S,
              usePointerEvents: !0,
              children: (0, t.jsxs)(L.fu, {
                className: ss()(
                  Zt.CategoryBtn,
                  m && Zt.Removable,
                  n && Zt.Selected,
                  !B && Zt.NotActionable,
                  r,
                ),
                onClick: o,
                ...b,
                children: [
                  (0, t.jsx)("span", {
                    className: Zt.CategoryName,
                    children: e.name,
                  }),
                  c &&
                    e.cItems > 0 &&
                    (0, t.jsxs)("span", { children: ["(", e.cItems, ")"] }),
                  m && (0, t.jsx)(Q.i6V, {}),
                ],
              }),
            })
          );
        }
        function Ic(s) {
          const { categoryCount: e, onClick: n, bSimulateHover: r } = s;
          return (0, t.jsx)(Yt.Gq, {
            toolTipContent: (0, Je.g)("#Wishlist_Controls_Categories_Manage"),
            usePointerEvents: !0,
            children: (0, t.jsx)(L.fu, {
              className: ss()(
                Zt.CategoryBtn,
                Zt.CategorySettingsBtn,
                r && Zt.Focused,
              ),
              onClick: n,
              children: e > 0 ? (0, t.jsx)(Q.vmx, {}) : (0, t.jsx)(Q.FWt, {}),
            }),
          });
        }
        const mo = 16;
        function go(s) {
          const {
              appid: e,
              steamid: n,
              onClose: r,
              filteredCategoryIDs: a,
              onAdvanced: o,
            } = s,
            [l, c] = d.useState([]),
            m = lo(),
            { data: f } = (0, M.J$)({ appid: e }),
            y =
              f && f.name && f.visible
                ? (0, Je.g)("#Wishlist_Controls_Categories_Manageitem", f?.name)
                : (0, Je.g)("#Wishlist_Controls_Categories_Manage"),
            { data: v } = Er(n),
            b = !!o && !!v && v.length > 0,
            B = d.useCallback(() => {
              m.mutate({ rgCategoryIDs: l.reverse() }), r();
            }, [m, l, r]),
            S = (I) => {
              a && a.has(I) && B();
            };
          return (0, t.jsx)(bc.s, {
            onClose: B,
            strTitle: y,
            navID: "AddWishlistCategoryDialog",
            className: _t.DialogContent,
            children: (0, t.jsxs)(T.Z, {
              "flow-children": "column",
              children: [
                (0, t.jsx)(Ac, {
                  appid: e,
                  steamid: n,
                  onCategoryAdd: (I) => c([...l, I].slice(-3)),
                  onCategoryRemove: S,
                }),
                (0, t.jsxs)(T.Z, {
                  className: _t.Buttons,
                  children: [
                    b &&
                      (0, t.jsx)(Oi.Oh, {
                        onClick: o,
                        children: (0, Je.g)(
                          "#Wishlist_Categories_Dialog_Advanced",
                        ),
                      }),
                    (0, t.jsx)(Oi.n9, {
                      onClick: B,
                      children: ge.Z.Localize("#Button_Done"),
                    }),
                  ],
                }),
              ],
            }),
          });
        }
        function Lc(s, e, n, r) {
          const { data: a } = Di(n, e),
            { data: o } = oo(),
            l = (c, m) => {
              const f = new Set(m);
              return [
                ...m.map((v) => c.find((b) => b.id === v)).filter((v) => !!v),
                ...c.filter((v) => !f.has(v.id)),
              ];
            };
          return d.useMemo(() => {
            if (!a) return [];
            const c = new Set(a?.map((b) => b.id) ?? []),
              m = s.filter((b) => !c.has(b.id));
            if (!r || r.length === 0)
              return l(
                m.filter((b) => b.cItems > 0),
                o ?? [],
              );
            const f = r.toLocaleLowerCase();
            let y = !1,
              v = m.filter((b) => {
                let B = b.name.toLocaleLowerCase();
                return y || (y = B === f), B.indexOf(f) > -1;
              });
            return (
              (v = l(v, [])),
              y ||
                v.unshift({
                  id: rs,
                  name: r,
                  cItems: 0,
                  bNotificationOptIn: !1,
                }),
              v
            );
          }, [a, o, s, r]);
        }
        function Ac(s) {
          const {
              appid: e,
              steamid: n,
              onCategoryAdd: r,
              onCategoryRemove: a,
            } = s,
            [o, l] = d.useState(""),
            [c, m] = d.useState(void 0),
            f = Er(n);
          d.useEffect(() => {
            !c && f.data && m(f.data);
          }, [f.data, c]);
          const y = so(n),
            v = async (me, ie) => {
              if (!me || e === 0) return;
              const De = await y.mutateAsync({
                appid: e,
                categoryName: me,
                categoryID: ie ?? rs,
              });
              De.eresult === jn.R &&
                De.category?.id &&
                (r(De.category.id),
                c &&
                  !c.some((Xt) => Xt.id === De.category.id) &&
                  m((Xt) => [...Xt, De.category]));
            },
            b = ro(n),
            B = (me) => {
              e !== 0 && (b.mutate({ appid: e, categoryID: me }), a(me));
            },
            S = (me) => {
              me.stopPropagation(),
                me.preventDefault(),
                !(!o || o.length === 0) && (l(""), v(o));
            },
            { data: I } = Di(n, e),
            V = co(n),
            W = V.length > 0,
            $ = Lc(c ?? [], e, n, o),
            le = (0, se.Qn)();
          return (0, t.jsxs)(T.Z, {
            className: _t.CategorySelectorCtn,
            "flow-children": "column",
            children: [
              (0, t.jsxs)("div", {
                children: [
                  (0, t.jsx)("div", {
                    className: _t.ListHeader,
                    children: (0, Je.g)(
                      "#Wishlist_Controls_Categories_Header_Current",
                    ),
                  }),
                  (0, t.jsx)(Zs, {
                    rgCategories: I ?? [],
                    header: null,
                    eAction: Ri.k_ECategoryButtonAction_Remove,
                    onClick: (me, ie) => B(ie),
                    bMultiline: !0,
                    bShowEmptyLabel: !0,
                    containerClassName: _t.DialogCategoryCtn,
                  }),
                  !!I && I.length >= mo && (0, t.jsx)(Oc, {}),
                ],
              }),
              (0, t.jsxs)("form", {
                className: _t.SearchForm,
                onSubmit: S,
                children: [
                  (0, t.jsx)(L.BA, {
                    autoFocus: !0,
                    value: o,
                    className: _t.SearchInput,
                    type: "search",
                    placeholder: (0, Je.g)(
                      "#Wishlist_Categories_Dialog_Search",
                    ),
                    onChange: (me) => l(me.target.value),
                    onOKActionDescription:
                      o.length > 0
                        ? (0, Je.g)("#Wishlist_Categories_Dialog_Add")
                        : null,
                    maxLength: 500,
                  }),
                  !le &&
                    (0, t.jsx)("div", {
                      className: ss()(
                        _t.AddCategoryBtnCtn,
                        o.length > 0 && _t.Visible,
                      ),
                      children: (0, t.jsx)(Oi.Oh, {
                        onClick: S,
                        children: (0, Je.g)("#Wishlist_Categories_Dialog_Add"),
                      }),
                    }),
                ],
              }),
              (0, t.jsxs)("div", {
                children: [
                  (0, t.jsx)("div", {
                    className: _t.ListHeader,
                    children: (0, Je.g)(
                      "#Wishlist_Controls_Categories_Header_Other",
                    ),
                  }),
                  (0, t.jsx)(Zs, {
                    rgCategories: $,
                    onClick: v,
                    header: null,
                    bMultiline: !0,
                    bShowEmptyLabel: !0,
                    containerClassName: _t.DialogCategoryCtn,
                    eAction: Ri.k_ECategoryButtonAction_Add,
                  }),
                ],
              }),
              W &&
                (0, t.jsxs)("div", {
                  children: [
                    (0, t.jsx)("div", {
                      className: _t.ListHeader,
                      children: (0, Je.g)(
                        "#Wishlist_Controls_Categories_Header_Suggested",
                      ),
                    }),
                    (0, t.jsx)(Zs, {
                      rgCategories: V,
                      onClick: v,
                      header: null,
                      bMultiline: !0,
                      containerClassName: ss()(
                        _t.DialogCategoryCtn,
                        _t.Suggested,
                      ),
                    }),
                  ],
                }),
            ],
          });
        }
        function Oc() {
          return (0, t.jsx)("div", {
            className: _t.MaxCategoriesMessage,
            children: (0, Je.g)("#Wishlist_Categories_Max_Per_App_Reached", mo),
          });
        }
        var Wi = i(31518);
        function po(s, e) {
          if (!s.current) return;
          const n = s.current.closest(".queue_menu_flyout");
          n &&
            (e
              ? n.classList.add("force_expand")
              : n.classList.remove("force_expand"));
        }
        function zc(s) {
          const { appid: e } = s,
            n = (0, Ae.LH)(),
            [r, a] = d.useState(void 0),
            [o, l] = d.useState(!1),
            c = d.useRef(null),
            [m, f] = (0, Br.OP)(),
            { data: y } = Pc(n),
            { data: v } = Er(n),
            b = co(n),
            { data: B } = oo(),
            { data: S } = Di(n, e),
            I = so(n),
            V = ro(n),
            W = lo(),
            $ = async (tn, vn) => {
              if (!r) return;
              const Zr = vn ? r.find((st) => st.id === vn) : void 0;
              if (Zr?.bSelected)
                V.mutate({ appid: e, categoryID: Zr.id }),
                  a(
                    r.map((st) =>
                      st.id === vn
                        ? {
                            ...st,
                            bSelected: !1,
                            cItems: Math.max(0, st.cItems - 1),
                          }
                        : st,
                    ),
                  );
              else if (tn) {
                const st = await I.mutateAsync({
                  appid: e,
                  categoryName: tn,
                  categoryID: vn ?? rs,
                });
                if (st.eresult === jn.R && st.category?.id) {
                  const Ql = { ...st.category, bSelected: !0 };
                  a(
                    (Vf) => Vf?.map((Vl) => (Vl.name === tn ? Ql : Vl)) ?? [Ql],
                  ),
                    W.mutate({ rgCategoryIDs: [st.category.id] });
                }
              }
            },
            le = (tn) => {
              tn.stopPropagation(), tn.preventDefault(), po(c, !0), l(!0);
            },
            me = () => {
              l(!1), po(c, !1), a(void 0);
            },
            ie = 6;
          if (
            (d.useEffect(() => {
              if (r || !y || !v || !S || !B || !b) return;
              let tn = new Set(S.map((st) => st.id) ?? []),
                vn = S.map((st) => ({ ...st, bSelected: !0 }));
              const Zr = B.map((st) => y.get(st)).filter((st) => !!st);
              for (const st of [...Zr, ...v]) {
                if (vn.length >= ie) break;
                tn.has(st.id) || (vn.push(st), tn.add(st.id));
              }
              vn.length < ie &&
                (vn = [...vn, ...(b?.slice(0, ie - vn.length) ?? [])]),
                a(vn);
            }, [r, v, y, B, S, b]),
            !r || r.length === 0)
          )
            return null;
          const De = r.filter((tn) => !tn.bSelected),
            Xt = r.filter((tn) => tn.bSelected);
          return (0, t.jsxs)("div", {
            className: Wi.CategoriesMenuOption,
            ref: c,
            children: [
              (0, t.jsxs)(L.ml, {
                className: Wi.HeaderCtn,
                ...f,
                onClick: le,
                children: [
                  (0, t.jsx)("div", {
                    className: Wi.Label,
                    children: (0, C.we)("#Wishlist_QuickAdd_Header"),
                  }),
                  (0, t.jsx)(Ic, {
                    categoryCount: S?.length ?? 0,
                    bSimulateHover: m,
                    onClick: () => {},
                  }),
                ],
              }),
              Xt.length > 0 &&
                (0, t.jsx)(Zs, {
                  rgCategories: Xt,
                  header: null,
                  onClick: $,
                  bMultiline: !0,
                }),
              De.length > 0 &&
                (0, t.jsxs)("div", {
                  children: [
                    (0, t.jsx)("div", {
                      children: (0, C.we)(
                        "#Wishlist_QuickAdd_RecentAndSuggested",
                      ),
                    }),
                    (0, t.jsx)(Zs, {
                      rgCategories: De,
                      header: null,
                      onClick: $,
                      bMultiline: !0,
                    }),
                  ],
                }),
              o && (0, t.jsx)(go, { appid: e, steamid: n, onClose: me }),
            ],
          });
        }
        var oe = i(48156),
          Xs = i(24179),
          fo = i(79882),
          ho = i(63547),
          Nc = i(68094);
        function wi(s) {
          return s.packageid
            ? { packageid: s.packageid }
            : { bundleid: s.bundleid };
        }
        function Dc(s) {
          return (0, Nc.ER)(wi(s));
        }
        var Ui = i(49147);
        function Hs() {
          const s = (0, pn.KV)(),
            e = Y.iA.accountid;
          return (0, Oe.I)(Fc(s, e));
        }
        function Fc(s, e) {
          return {
            queryKey: yo(e),
            queryFn: async () => {
              if (!e) return new Set();
              const n = await Rc(s, e);
              return new Set(n);
            },
            placeholderData: new Set(),
            staleTime: 600 * 1e3,
          };
        }
        function yo(s) {
          return ["AccountActiveLicenses", s ?? 0];
        }
        async function Rc(s, e) {
          throw new Ui.x(jn.Sq, "Not implemented");
        }
        function vo() {
          const s = (0, ze.jE)(),
            e = Y.iA.accountid;
          return d.useCallback(
            (n) => {
              s.setQueryData(yo(e), () => new Set(n));
            },
            [s, e],
          );
        }
        function Wc(s, e) {
          return !s?.appid ||
            s.type === oe.uE._i ||
            !e ||
            !e.included_appids?.length ||
            !e.included_types?.length
            ? !1
            : e.included_appids.length > 1 &&
                !e.included_appids.includes(s.appid) &&
                e.included_types.every((n) => n === oe.uE._i);
        }
        function xo(s) {
          const { data: e } = (0, M.J$)({ appid: s }),
            n = e?.included_items?.included_packages;
          return d.useMemo(() => {
            const r = new Set();
            for (const a of n || []) a.id && Wc(e, a) && r.add(a.id);
            return r;
          }, [e, n]);
        }
        function wc(s) {
          const { data: e } = (0, M.is)({ appid: s }),
            n = xo(s),
            r = e?.purchase_options;
          return d.useMemo(() => {
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
        var Is = i(67529);
        const zn = d.createContext({ appid: Is.sc, nOptions: 0 }),
          jo = d.createContext({ ShowConfirmDialog: () => {} });
        var Uc = i(1880),
          Cc = i(15568);
        function Kc(s) {
          const {
            active: e,
            onOK: n,
            closeModal: r,
            bCloseOnOK: a,
            children: o,
            ...l
          } = s;
          if (!e) return null;
          const c =
            (typeof l.strTitle == "string" && l.strTitle) ||
            (0, C.we)("#Steam_Platform");
          return (0, t.jsx)(Cc.wA, {
            onlyPopoutIfNeeded: !0,
            popupHeight: 340,
            popupWidth: 640,
            strTitle: c,
            children: (0, t.jsx)(Uc.o0, {
              ...l,
              onCancel: r,
              onOK: () => {
                n(), a && r();
              },
              children: o,
            }),
          });
        }
        function Gc(s) {
          const { bCloseOnOK: e = !0, children: n, ...r } = s,
            [a, o, l] = (0, fe.uD)();
          return [
            (0, t.jsx)(Kc, {
              active: a,
              bCloseOnOK: e,
              closeModal: l,
              ...r,
              children: n,
            }),
            o,
            l,
          ];
        }
        function Yc(s) {
          const [e, n] = d.useState(""),
            [r, a] = d.useState(""),
            [o, l] = Gc({
              bCloseOnOK: !0,
              bAlertDialog: !0,
              onOK: () => {},
              strTitle: e,
              strDescription: r,
            }),
            c = d.useCallback(
              (f, y) => {
                n(f), a(y), l();
              },
              [l],
            ),
            m = d.useMemo(() => ({ ShowConfirmDialog: c }), [c]);
          return (0, t.jsxs)(jo.Provider, {
            value: m,
            children: [s.children, o],
          });
        }
        var kc = i(21763),
          fs = i.n(kc),
          Qc = i(62452);
        const Vc = (s) => (0, t.jsx)(Qc.u, { icon: !0, ...s }),
          Xf = (s) => jsx(ButtonLinkBase, { icon: !0, ...s });
        var Ze = i(8892),
          $c = i(80755);
        function Ci(s) {
          const { color: e, onClick: n, strIconTitle: r, children: a } = s,
            o = (l) => {
              l.stopPropagation(), n && n(l);
            };
          return r
            ? (0, t.jsx)(Vc, {
                color: e,
                onClick: o,
                title: r,
                width: "36px",
                minWidth: "36px",
                children: a,
              })
            : (0, t.jsx)(Ze.$, { color: e, onClick: o, children: a });
        }
        function Jc(s) {
          const {
              onActivate: e,
              onOKActionDescription: n,
              onSecondaryButton: r,
              onSecondaryActionDescription: a,
              price: o,
              okIcon: l,
            } = s,
            c = !1;
          return o || n || (c && a)
            ? (0, t.jsxs)(F.s, {
                direction: "row",
                flexGrow: "0",
                flexShrink: "0",
                align: "stretch",
                justify: "end",
                gap: "2",
                children: [
                  o,
                  c &&
                    a &&
                    (0, t.jsx)(Ci, { onClick: r, children: (0, $c.gh)(a) }),
                  n &&
                    (l
                      ? (0, t.jsx)(Ci, {
                          color: "storegreen",
                          onClick: e,
                          strIconTitle: n,
                          children: l,
                        })
                      : (0, t.jsx)(Ci, {
                          color: "storegreen",
                          onClick: e,
                          children: n,
                        })),
                ],
              })
            : null;
        }
        function Hf(s) {
          const { option: e } = s,
            n = e.type == "item" && !!e.data.is_edition,
            r = e.type == "item" && e.data.package_group;
          return jsx(Fragment, { children: !1 });
        }
        function Nn(s) {
          const {
              className: e,
              option: n,
              color: r = "blue",
              allowSingleLine: a,
              allowTwoColumn: o,
              price: l,
              okIcon: c,
              children: m,
              ...f
            } = s,
            { nOptions: y } = d.useContext(zn),
            v = y == 1;
          return (0, t.jsx)(U.q, {
            rootClassName: fs().FocusRing,
            children: (0, t.jsxs)(T.Z, {
              className: (0, ne.A)(
                fs().PurchaseOption,
                r == "green" && fs().Green,
                a && fs().AllowSingleLine,
                o && fs().AllowTwoColumn,
                v && fs().OnlyChild,
              ),
              focusable: !0,
              ...f,
              children: [
                v &&
                  o &&
                  (0, t.jsx)("div", {
                    className: fs().LeftColumn,
                    children: m,
                  }),
                !(v && o) && m,
                (0, t.jsx)(Jc, { ...f, price: l, okIcon: c }),
                !1,
              ],
            }),
          });
        }
        var bo = i(13977),
          Zc = i(13620);
        function Ki(s) {
          const e = (0, Jt.Gd)();
          return d.useCallback(() => {
            s.packageid
              ? window.AddItemToCart(s.packageid, void 0, e)
              : s.bundleid && window.AddItemToCart(void 0, s.bundleid, e);
          }, [e, s.packageid, s.bundleid]);
        }
        function Tr(s, e) {
          return d.useCallback(() => {
            (0, bo.o)(s, e);
          }, [s, e]);
        }
        function Xc(s, e) {
          return d.useCallback(() => {
            (0, bo.M)(s, e);
          }, [s, e]);
        }
        function Sr(s) {
          const { data: e } = (0, M.J$)(s),
            { ShowConfirmDialog: n } = d.useContext(jo),
            { data: r = new Set() } = Hs(),
            a = vo(),
            o = (0, Zc.S)(s);
          return d.useCallback(() => {
            o.mutateAsync().then(([c, m]) => {
              let f,
                y = e?.name || "";
              if (c != jn.R)
                f = g.Localize(
                  "#AppPage_PurchaseOption_AddToLibraryError",
                  y,
                  c,
                );
              else {
                f = g.Localize("#AppPage_PurchaseOption_AddedToLibrary", y);
                for (let v of m.packageids_added || []) r.add(v);
                a(Array.from(r));
              }
              n(y, f);
            });
          }, [o, n, e?.name, r, a]);
        }
        var dn = i(57152);
        function Hc(s) {
          const { id: e, bPrepurchase: n } = s,
            { data: r } = (0, M.J$)(e);
          return r
            ? n
              ? g.Localize("#AppPage_Prepurchase", r.name)
              : r.name
            : null;
        }
        function Dn(s) {
          const { id: e, title: n, bPrepurchase: r = !1, children: a } = s;
          return (0, t.jsxs)(dn.D, {
            size: "4",
            weight: "heavy",
            children: [n || (0, t.jsx)(Hc, { id: e, bPrepurchase: r }), a],
          });
        }
        function Fn(s) {
          const { children: e } = s;
          return (0, t.jsx)(F.s, {
            direction: "column",
            flexGrow: "1",
            gap: "2",
            overflow: "hidden",
            children: e,
          });
        }
        function qc(s) {
          const { option: e } = s,
            n = { appid: e.appid },
            { data: r } = (0, M.J$)(n),
            a = Sr(n),
            o = (0, Xs.$Y)(),
            l = e.bStandalone,
            c = o.data?.has(e.appid),
            m = Xc(e.appid, r?.name ?? ""),
            f = (0, An.n)(r),
            y = d.useCallback(() => {
              f && (window.location.href = f);
            }, [f]);
          return r
            ? (0, t.jsx)(t.Fragment, {
                children: (0, t.jsxs)(Nn, {
                  color: "green",
                  allowSingleLine: !e.label,
                  allowTwoColumn: !!e.label,
                  option: e,
                  onActivate: m,
                  onOKActionDescription: g.Localize(
                    "#AppPage_PurchaseOption_Download",
                  ),
                  onSecondaryButton: l ? y : void 0,
                  onSecondaryActionDescription: l
                    ? g.Localize("#AppPage_PurchaseOption_MoreInfo")
                    : void 0,
                  onOptionsButton: c ? void 0 : a,
                  onOptionsActionDescription: c
                    ? void 0
                    : g.Localize("#AppPage_PurchaseOption_AddToLibrary"),
                  children: [
                    (0, t.jsx)(Dn, {
                      title: g.Localize(
                        "#AppPage_PurchaseOption_DownloadDemo",
                        r.name,
                      ),
                    }),
                    (0, t.jsx)(Fn, {
                      children: (0, t.jsx)(j.EY, { children: e.label }),
                    }),
                  ],
                }),
              })
            : null;
        }
        var Rn = i(44983),
          Ut = i(16114);
        function _c(s) {
          const { option: e } = s,
            n = d.useContext(zn),
            { data: r } = (0, M.J$)({ appid: n.appid }),
            a = Tr(n.appid, r?.name ?? ""),
            o = (0, Rn._2)(),
            l =
              r &&
              r.free_weekend &&
              (r.free_weekend.start_time || 0) <= o &&
              (r.free_weekend.end_time || 0) > o;
          return r
            ? (0, t.jsxs)(Nn, {
                option: e,
                color: "green",
                allowSingleLine: !0,
                onActivate: a,
                onOKActionDescription: g.Localize(
                  "#AppPage_PurchaseOption_PlayNow",
                ),
                children: [
                  (0, t.jsx)(Dn, {
                    title: g.Localize("#AppPage_PurchaseOption_Play", r.name),
                  }),
                  (0, t.jsxs)(Fn, {
                    children: [
                      !l &&
                        (0, t.jsx)(j.EY, {
                          children: g.Localize(
                            r.type == oe.uE.ue
                              ? "#AppPage_PurchaseOption_FreeDemo"
                              : "#AppPage_PurchaseOption_FreeToPlay",
                          ),
                        }),
                      l &&
                        (0, t.jsx)(j.EY, {
                          children: g.Localize(
                            "#AppPage_PurchaseOption_FreeWeekend",
                            (0, Ut.TW)(r.free_weekend.end_time, {
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
        var Bo = i(7487),
          ed = i(52574),
          td = i(91937),
          nd = i(49144),
          sd = i(33770),
          rd = i(59443),
          Eo = i(51596),
          Mr = i(43434);
        function Po(s) {
          const { text: e, onURLDetected: n } = s,
            r = d.useCallback(
              (o) => {
                let l = (0, Eo.P)(o.args) ?? (0, Eo.P)(o.args, "href");
                return (
                  (0, Mr.p)(l) && (l = (0, Mr.E)(l)), n && n(l), (0, rd._r)(o)
                );
              },
              [n],
            );
          return d
            .useMemo(() => {
              const o = (c) => new Bo.OJ(new Bo.R8()),
                l = { ...ed.L, ...nd.I, ...td.F, url: { Constructor: r } };
              return new sd.B(l, o, se.TS.LANGUAGE);
            }, [r])
            .ParseBBCode(e, void 0);
        }
        var To = i(34360),
          id = i(16346),
          ad = i(59869),
          Gi = i.n(ad);
        function od(s) {
          const { option: e } = s,
            n = Ki(e),
            r = e.packageid
              ? { packageid: e.packageid }
              : { bundleid: e.bundleid };
          return (0, t.jsxs)(To.kt, {
            className: Gi().MenuItem,
            onSelected: n,
            children: [
              (0, t.jsx)("div", {
                className: Gi().Name,
                children: e.purchase_option_name,
              }),
              (0, t.jsx)("div", {
                className: Gi().Price,
                children: (0, t.jsx)(dr.AO, { id: r, purchaseOption: e }),
              }),
            ],
          });
        }
        function ld(s) {
          const { option: e } = s;
          return (0, t.jsx)(To.tz, {
            label: e.data.package_group.dropdown_title,
            children: e.data.items.map((n) =>
              (0, t.jsx)(od, { option: n }, n.packageid ?? n.bundleid),
            ),
          });
        }
        function cd(s) {
          if (s.data.package_group.name == "subscriptions") return !0;
          for (let e of s.data.items)
            if (!e.recurrence_info?.packageid) return !1;
          return !0;
        }
        function dd(s) {
          const { option: e } = s,
            { appid: n } = d.useContext(zn),
            { data: r } = (0, M.J$)({ appid: n }),
            a = e.data.package_group,
            [o, l] = d.useState(""),
            c = (0, Jt.aL)(o),
            m = d.useCallback(() => {
              o && (window.location.href = c);
            }, [o, c]),
            f = d.useCallback(
              (y) => {
                (0, id.lX)((0, t.jsx)(ld, { option: e }), y);
              },
              [e],
            );
          return (0, t.jsxs)(Nn, {
            option: e,
            allowTwoColumn: !0,
            onActivate: f,
            onSecondaryButton: o ? m : void 0,
            onSecondaryActionDescription: o
              ? g.Localize("#AppPage_PurchaseOption_MoreInfo")
              : void 0,
            children: [
              (0, t.jsx)(Dn, {
                title:
                  a.dropdown_title ||
                  g.Localize("#AppPage_Dropdown_DefaultTitle", r?.name),
              }),
              (0, t.jsxs)(Fn, {
                children: [
                  a.dropdown_description_bbcode &&
                    (0, t.jsx)(j.EY, {
                      size: "2",
                      children: (0, t.jsx)(Po, {
                        text: a.dropdown_description_bbcode,
                        onURLDetected: l,
                      }),
                    }),
                  !a.dropdown_description_bbcode &&
                    cd(e) &&
                    (0, t.jsx)(j.EY, {
                      size: "2",
                      children: g.Localize(
                        "#AppPage_Dropdown_DefaultDescription_Subscription",
                      ),
                    }),
                ],
              }),
              (0, t.jsx)(F.s, {
                direction: "row",
                flexGrow: "0",
                flexShrink: "0",
                align: "end",
                justify: "end",
                gap: "2",
                children: (0, t.jsx)(Ze.$, {
                  color: "greyneutral",
                  variant: "dark",
                  children: g.Localize("#AppPage_PurchaseOption_ViewOptions"),
                }),
              }),
            ],
          });
        }
        var So = i(79014);
        function ud(s) {
          const { appid: e } = s,
            { data: n } = (0, M.J$)({ appid: e }),
            { data: r } = (0, M.lv)({ appid: e });
          if (!n || !r) return null;
          const a = (0, Ms.b0)(r, "community_icon");
          return (0, t.jsxs)(t.Fragment, {
            children: [
              !1,
              (0, t.jsx)(j.EY, {
                children: (0, So.i)(
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
        function md(s) {
          const { option: e, appidMasterSub: n } = s,
            r = d.useContext(zn),
            { data: a } = (0, M.J$)({ appid: r.appid }),
            o = Tr(r.appid, a?.name ?? "");
          return a
            ? (0, t.jsxs)(Nn, {
                option: e,
                color: "green",
                onActivate: o,
                onOKActionDescription: g.Localize(
                  "#AppPage_PurchaseOption_PlayNow",
                ),
                children: [
                  (0, t.jsx)(Dn, {
                    title: g.Localize("#AppPage_PurchaseOption_Play", a.name),
                  }),
                  (0, t.jsxs)(Fn, {
                    children: [
                      !n &&
                        (0, t.jsx)(j.EY, {
                          children: g.Localize(
                            "#AppPage_PurchaseOption_Play_Description",
                            a.name,
                          ),
                        }),
                      !!n && (0, t.jsx)(ud, { appid: n }),
                    ],
                  }),
                ],
              })
            : null;
        }
        function gd(s) {
          const { option: e, appidPlaytest: n, bIsOpen: r } = s,
            { data: a } = (0, M.J$)({ appid: n }),
            { data: o } = (0, M.by)({ appid: n }),
            { data: l } = (0, ho.VZ)(n);
          if (!a || !o || !l) return null;
          const c = l?.[0]?.status || gs.EX.Rw;
          console.log(l, c);
          let m, f, y;
          switch (c) {
            case gs.EX.Rw:
              (m = "#AppPage_PurchaseOption_JoinPlaytest"),
                r
                  ? (o.steam_release_date || ue.TQt) < (0, Rn._2)()
                    ? (f = "#AppPage_PurchaseOption_Playtest_Open")
                    : (f = "#AppPage_PurchaseOption_Playtest_Open_Unreleased")
                  : (f = "#AppPage_PurchaseOption_JoinPlaytest_Description");
              break;
            case gs.EX.OT:
              (m = "#AppPage_PurchaseOption_JoinPlaytest"),
                (f = "#AppPage_PurchaseOption_JoinPlaytest_InvitePending");
              break;
            case gs.EX.IS:
              (m = "#AppPage_PurchaseOption_JoinPlaytest"),
                (f = "#AppPage_PurchaseOption_JoinPlaytest_InvitedByFriend");
              break;
            case gs.EX.m7:
              (o.steam_release_date || ue.TQt) < (0, Rn._2)()
                ? ((m = "#AppPage_PurchaseOption_Playtest_Accepted_Title"),
                  (f = "#AppPage_PurchaseOption_Playtest_Accepted"))
                : (o.is_preload,
                  (m =
                    "#AppPage_PurchaseOption_Playtest_Accepted_Unavailable_Title"),
                  (f =
                    "#AppPage_PurchaseOption_Playtest_Accepted_Unavailable"));
              break;
            default:
              (0, ts.wT)(!1, `Unknown playtest status ${c}`);
          }
          return (
            y && Y.iA.logged_in,
            m && f
              ? (0, t.jsxs)(Nn, {
                  option: e,
                  onActivate: y,
                  children: [
                    (0, t.jsx)(Dn, { title: g.Localize(m, a.name) }),
                    (0, t.jsx)(Fn, {
                      children: (0, t.jsx)(j.EY, { children: g.Localize(f) }),
                    }),
                  ],
                })
              : null
          );
        }
        var pd = i(18574),
          Pn = i.n(pd);
        function fd(s) {
          const { option: e } = s,
            n = { appid: e.appid },
            { data: r } = (0, M.J$)(n),
            a = (0, An.n)(r),
            o = d.useCallback(() => {
              a && (window.location.href = a);
            }, [a]);
          return r
            ? (0, t.jsx)(t.Fragment, {
                children: (0, t.jsxs)(Nn, {
                  option: e,
                  onActivate: o,
                  onOKActionDescription: g.Localize(
                    "#AppPage_PurchaseOption_MoreInfo",
                  ),
                  children: [
                    (0, t.jsx)(Dn, { title: e.title }),
                    (0, t.jsx)(Fn, {
                      children: (0, t.jsx)(j.EY, {
                        size: "2",
                        children: e.description,
                      }),
                    }),
                  ],
                }),
              })
            : null;
        }
        function hd(s) {
          const { discount: e } = s;
          (0, Be.bB)({ msInterval: 1e3 });
          const n = (0, Rn._2)();
          if (e.discount_end_date <= n) return null;
          const r = Math.max(e.discount_end_date - n, 0),
            a = e.discount_description,
            o = g.Localize(a, (0, Ut.R2)(r));
          return o == a
            ? null
            : (0, t.jsx)(j.EY, { contrast: "body", size: "2", children: o });
        }
        function yd(s) {
          const { option: e } = s;
          return !e || !e.discount_pct || e.hide_discount_pct_for_compliance
            ? null
            : Y.iA.country_code == "PL"
              ? (0, t.jsx)(j.EY, {
                  size: "2",
                  children: g.Localize("#AppPage_Discount_Last30"),
                })
              : null;
        }
        function vd(s) {
          const { option: e, discount: n } = s,
            r = d.useContext(zn),
            { data: a } = (0, M.J$)({ appid: r.appid }),
            { data: o } = (0, M.J$)({ appid: n.master_sub_appid || Is.sc });
          if (!a || !o || e.discount_pct <= 0) return null;
          const l = n.discount_description,
            c = g.Localize(l, "", e.discount_pct || 0, o.name, a.name);
          return l == c
            ? null
            : (0, t.jsx)(j.EY, { contrast: "body", size: "2", children: c });
        }
        function xd(s) {
          const { option: e } = s;
          if (!e) return null;
          if (e.is_free_to_keep && e.free_to_keep_ends)
            return (0, t.jsx)(j.EY, {
              contrast: "body",
              size: "2",
              children: g.Localize(
                "#AppPage_PurchaseOption_FreeToKeepDescription",
                (0, Ut.TW)(e.free_to_keep_ends, {
                  weekday: void 0,
                  year: void 0,
                  hour: "numeric",
                  minute: "numeric",
                }),
              ),
            });
          if (!e?.active_discounts?.length) return null;
          const n = (0, Rn._2)(),
            r = e.active_discounts.reduce((o, l) =>
              l.discount_end_date != ue.TQt &&
              (!o ||
                (l.discount_end_date > n &&
                  l.discount_end_date < o.discount_end_date))
                ? l
                : o,
            );
          let a = "";
          if (r.discount_end_date == ue.TQt)
            a = (0, t.jsx)(vd, { option: e, discount: r });
          else if (
            r.discount_end_date != ue.TQt &&
            r.discount_end_date - n > 2880 * 60
          ) {
            const o = r.discount_description + "_date";
            (a = g.Localize(
              o,
              (0, Ut.TW)(r.discount_end_date, {
                weekday: void 0,
                year: void 0,
              }),
            )),
              a == o && (a = null);
          } else return (0, t.jsx)(hd, { discount: r });
          return a
            ? (0, t.jsx)(j.EY, { contrast: "body", size: "2", children: a })
            : null;
        }
        function Yi(s) {
          const { option: e } = s;
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)(xd, { option: e }),
              (0, t.jsx)(yd, { option: e }),
            ],
          });
        }
        var ki = i(74107),
          jd = i(58123),
          Ir = i.n(jd);
        function Qi(s) {
          const { id: e, bSelfPurchaseOption: n } = s,
            { data: r } = (0, M.Q_)(e),
            { data: a } = (0, M.J$)(e);
          if (!a) return null;
          const o = n && a.item_type == oe.c6.RD ? a.self_purchase_option : r;
          return !o?.hide_discount_pct_for_compliance || o.discount_pct <= 0
            ? null
            : (0, t.jsx)("table", {
                className: Ir().SaleTechPriceGrid,
                children: (0, t.jsxs)("tbody", {
                  children: [
                    (0, t.jsxs)("tr", {
                      children: [
                        (0, t.jsx)("th", {
                          children: ki.F5.Localize("#PriceGrid_NormalPrice"),
                        }),
                        (0, t.jsx)("th", {
                          children: ki.F5.Localize("#PriceGrid_RecentPrice"),
                        }),
                        (0, t.jsx)("th", {
                          children: ki.F5.Localize("#PriceGrid_CurrentPrice"),
                        }),
                      ],
                    }),
                    (0, t.jsxs)("tr", {
                      children: [
                        (0, t.jsx)("td", {
                          className: Ir().OriginalPrice,
                          children: o.formatted_original_price,
                        }),
                        (0, t.jsx)("td", {
                          className: Ir().LowestRecentPrice,
                          children: o.formatted_lowest_recent_price,
                        }),
                        (0, t.jsx)("td", {
                          className: Ir().FinalPrice,
                          children: o.formatted_final_price,
                        }),
                      ],
                    }),
                  ],
                }),
              });
        }
        var Vi = i(81055),
          bd = i(54652),
          Bd = i.n(bd);
        function $i(s) {
          const { id: e } = s,
            { data: n } = (0, M.J$)(e),
            { data: r } = (0, M.by)(e),
            { data: a } = (0, M.Q_)(e),
            { data: o } = (0, Xs.$Y)();
          if (!n || !r || !a || !o) return null;
          const l = "bundleid" in e && !a.must_purchase_as_set,
            c = r?.is_coming_soon && !!r?.advance_access_date;
          let m = null,
            f,
            y;
          if (l) {
            const v = n.included_appids?.filter((b) => !o.has(b)) || [];
            v.length > 0 &&
              v.length < (n.included_appids?.length || 0) &&
              ((f = "slate-12"),
              (y = "blue-8"),
              (m = g.Localize(
                "#AppPage_PurchaseOption_CompleteYourCollection",
              )));
          } else if (c) {
            const v = (0, Ut.TW)(r.advance_access_date, {
              weekday: void 0,
              month: "short",
              day: "numeric",
              year: void 0,
            });
            (f = "slate-12"),
              (y = "blue-8"),
              (m = g.Localize("#AppPage_AdvanceAccess_Banner", v));
          }
          return m
            ? (0, t.jsx)(F.s, {
                className: Bd().PurchaseOptionBanner,
                paddingX: "1",
                background: y,
                children: (0, t.jsx)(j.EY, {
                  size: "1",
                  color: f,
                  contrast: "title",
                  whiteSpace: "nowrap",
                  truncate: !0,
                  children: m,
                }),
              })
            : null;
        }
        var Ed = i(76962),
          Wn = i(71989);
        function Ls(s, e) {
          return Y.TS.STORE_ITEM_BASE_URL + s.replace("${FILENAME}", e);
        }
        function Pd(s) {
          const { closeModal: e } = s,
            n = d.useContext(zn),
            { data: r } = (0, M.J$)({ appid: n.appid }),
            { data: a } = (0, M.lv)({ appid: n.appid });
          return (0, t.jsxs)(F.s, {
            direction: "column",
            height: "90vh",
            overflow: "hidden",
            align: "center",
            gap: "2",
            children: [
              (0, t.jsx)(ce.az, {
                aspectRatio: "748 / 896",
                flexGrow: "1",
                flexShrink: "1",
                flexBasis: "90%",
                overflow: "hidden",
                children:
                  r &&
                  a &&
                  (0, t.jsx)(Wn._, {
                    width: "100%",
                    src: Ls(a.asset_url_format, a.edition_comparison),
                    alt: r.name,
                  }),
              }),
              (0, t.jsx)(ce.az, {
                flexGrow: "0",
                flexShrink: "0",
                children: (0, t.jsx)(Ze.$, {
                  onClick: e,
                  children: ge.Z.Localize("#Button_Close"),
                }),
              }),
            ],
          });
        }
        const Lr = new Ue.wd("PurchaseOptions");
        function Mo(s) {
          const { id: e } = s,
            { data: n } = (0, M.J$)(e);
          return n?.purchase_description_bbcode
            ? (0, t.jsx)("div", {
                children: (0, t.jsx)(Po, {
                  text: n.purchase_description_bbcode,
                }),
              })
            : null;
        }
        function Io(s) {
          const { id: e } = s,
            { data: n } = (0, M.by)(e),
            { data: r } = Hs();
          if (
            !n ||
            !n.advance_access_date ||
            !n.steam_release_date ||
            !r ||
            !n.is_coming_soon
          )
            return null;
          const a = "packageid" in e && r.has(e.packageid),
            o = (0, Rn._2)(),
            l = (0, Ut.IH)(n.advance_access_date - o),
            c = (0, Ut.IH)(n.steam_release_date - n.advance_access_date);
          let m;
          return (
            o > n.advance_access_date
              ? (m = a
                  ? "#AppPage_AdvanceAccess_Now_Owned"
                  : "#AppPage_AdvanceAccess_Now")
              : (m = a
                  ? "#AppPage_AdvanceAccess_Starts_Owned"
                  : "#AppPage_AdvanceAccess_Starts"),
            m
              ? (0, t.jsx)(j.EY, {
                  size: "2",
                  color: "blue-10",
                  children: g.Localize(m, l, c),
                })
              : null
          );
        }
        function Td(s) {
          const { id: e, option: n } = s,
            r = d.useContext(zn),
            { data: a } = (0, M.J$)(e),
            { data: o } = (0, M.J$)({ appid: r.appid }),
            { data: l } = (0, M.by)(e),
            { data: c } = Hs(),
            m = Sr(e),
            f = Tr(r.appid, o?.name ?? "");
          if (!a || !o || !c) return null;
          const y = "packageid" in e && c.has(e.packageid);
          Lr.Debug(a);
          let v = a.self_purchase_option?.packageid
              ? a.self_purchase_option
              : a.best_purchase_option,
            b = g.Localize("#AppPage_PurchaseOption_GetFreeToKeep", o.name);
          const B = y && v?.is_free_to_keep;
          let S = B ? f : m,
            I = g.Localize(
              B
                ? "#AppPage_PurchaseOption_PlayNow"
                : "#AppPage_PurchaseOption_AddToLibrary",
            );
          return (
            Lr.Debug(e, v, a),
            (0, t.jsxs)(t.Fragment, {
              children: [
                (0, t.jsx)($i, { id: e }),
                (0, t.jsxs)(Nn, {
                  option: n,
                  onActivate: S,
                  onOKActionDescription: I,
                  price: (0, t.jsx)(ke, {
                    id: e,
                    bSelfPurchaseOption: !!a.self_purchase_option?.packageid,
                  }),
                  children: [
                    (0, t.jsx)(Dn, {
                      id: e,
                      title: b,
                      bPrepurchase: (0, Vi.Nq)(l, v),
                    }),
                    y &&
                      (0, t.jsx)(j.EY, {
                        size: "3",
                        weight: "heavy",
                        color: "storegreen-10",
                        children: g.Localize(
                          "#AppPage_PurchaseOption_InLibrary",
                        ),
                      }),
                    (0, t.jsxs)(Fn, {
                      children: [
                        (0, t.jsx)(Qi, {
                          id: e,
                          bSelfPurchaseOption:
                            !!a.self_purchase_option?.packageid,
                        }),
                        (0, t.jsx)(Io, { id: e }),
                        (0, t.jsx)(Yi, { option: v }),
                        (0, t.jsx)(Mo, { id: e }),
                      ],
                    }),
                  ],
                }),
              ],
            })
          );
        }
        function Sd(s) {
          const { id: e, option: n } = s,
            r = d.useContext(zn),
            { data: a } = (0, M.J$)(e),
            { data: o } = (0, M.J$)({ appid: r.appid }),
            { data: l } = (0, M.by)(e),
            { data: c } = Hs(),
            m = Sr(e),
            f = Ki(n.data),
            [y, v, b] = (0, Be.uD)(!1);
          if (!a || !o) return null;
          Lr.Debug(a);
          let B = a.self_purchase_option?.packageid
            ? a.self_purchase_option
            : a.best_purchase_option;
          if (B?.is_free_to_keep) return (0, t.jsx)(Td, { ...s });
          const S =
              n.bAvailableForFree &&
              n.data.packageid &&
              !c?.has(n.data.packageid),
            I = "packageid" in e && !!c?.has(e.packageid);
          let V, W;
          n.data.is_edition &&
            ((V = v),
            (W = g.Localize("#AppPage_PurchaseOption_CompareEditions")));
          let $, le;
          return (
            S &&
              (($ = m),
              (le = g.Localize("#AppPage_PurchaseOption_AddToLibrary"))),
            Lr.Debug(e, B, a),
            (0, t.jsxs)(t.Fragment, {
              children: [
                (0, t.jsx)($i, { id: e }),
                (0, t.jsxs)(Nn, {
                  option: n,
                  allowTwoColumn: !0,
                  onActivate: f,
                  onOKActionDescription: g.Localize(
                    "#AppPage_PurchaseOption_AddToCart",
                  ),
                  onSecondaryButton: V,
                  onSecondaryActionDescription: W,
                  onOptionsButton: $,
                  onOptionsActionDescription: le,
                  price: (0, t.jsx)(ke, {
                    id: e,
                    bSelfPurchaseOption: !!a.self_purchase_option?.packageid,
                  }),
                  okIcon: (0, t.jsx)(Ve.JBW, { width: "24", height: "24" }),
                  children: [
                    (0, t.jsx)(Dn, { id: e, bPrepurchase: (0, Vi.Nq)(l, B) }),
                    I &&
                      (0, t.jsx)(j.EY, {
                        size: "3",
                        weight: "heavy",
                        color: "storegreen-10",
                        children: g.Localize(
                          "#AppPage_PurchaseOption_InLibrary",
                        ),
                      }),
                    (0, t.jsxs)(Fn, {
                      children: [
                        (0, t.jsx)(Qi, {
                          id: e,
                          bSelfPurchaseOption:
                            !!a.self_purchase_option?.packageid,
                        }),
                        (0, t.jsx)(Io, { id: e }),
                        (0, t.jsx)(Yi, { option: B }),
                        (0, t.jsx)(Mo, { id: e }),
                      ],
                    }),
                  ],
                }),
                y &&
                  n.data.is_edition &&
                  (0, t.jsx)(Ed.y.Root, {
                    onClose: b,
                    children: (0, t.jsx)(Pd, { closeModal: b }),
                  }),
              ],
            })
          );
        }
        var Md = i(95036),
          hs = i.n(Md),
          Ar = i(43135),
          Id = i(32384);
        function Lo(s) {
          const { bComingSoon: e, purchaseOption: n, className: r } = s;
          return (0, Vi.o$)(e, n)
            ? (0, t.jsxs)("div", {
                className: ss()(Id.PrePurchaseTag, r),
                children: [
                  (0, t.jsx)(Ve.zD7, {}),
                  ge.Z.Localize("#EventDisplay_CallToAction_Prepurchase_Short"),
                ],
              })
            : null;
        }
        const Ld = new Ue.wd("PurchaseOptions");
        function Ad(s) {
          const { id: e, option: n } = s,
            { data: r } = (0, M.J$)(e),
            { data: a } = (0, M.lv)(e),
            { data: o } = (0, Xs.$Y)(),
            l = Ki(n.data),
            c = (0, An.n)(r),
            m = d.useCallback(() => {
              c && (window.location.href = c);
            }, [c]);
          if (!r || !o) return console.warn("Not ready", e, r, a, o), null;
          const f = r.included_appids?.length || 0,
            y = r.included_appids?.filter((I) => !o.has(I)) || [],
            v = r.included_appids?.filter((I) => o.has(I)) || [];
          let b = y.length,
            S =
              f != y.length
                ? "#AppPage_BuyThisBundle_Partial"
                : "#AppPage_BuyThisBundle";
          return (
            y.length == 0 &&
              ((S = "#AppPage_CollectionComplete"),
              (b = r.included_appids?.length || 0)),
            Ld.Debug(e, r.best_purchase_option, r),
            (0, t.jsxs)(t.Fragment, {
              children: [
                (0, t.jsx)($i, { id: e }),
                (0, t.jsxs)(Nn, {
                  option: n,
                  onActivate: l,
                  onOKActionDescription: g.Localize(
                    "#AppPage_PurchaseOption_AddToCart",
                  ),
                  onSecondaryButton: m,
                  onSecondaryActionDescription: g.Localize(
                    "#AppPage_PurchaseOption_BundleInfo",
                  ),
                  price: (0, t.jsx)(ke, { id: e, bSelfPurchaseOption: !0 }),
                  okIcon: (0, t.jsx)(Ve.JBW, { width: "24", height: "24" }),
                  children: [
                    (0, t.jsx)(Dn, {
                      id: e,
                      children: (0, t.jsxs)(j.EY, {
                        size: "3",
                        color: "blue-8",
                        children: [
                          " ",
                          g.Localize("#AppPage_PurchaseOption_Bundle"),
                        ],
                      }),
                    }),
                    (0, t.jsxs)(Fn, {
                      children: [
                        (0, t.jsx)(Qi, { id: e, bSelfPurchaseOption: !0 }),
                        (0, t.jsxs)(F.s, {
                          direction: "column",
                          flexGrow: "1",
                          flexShrink: "1",
                          overflow: "hidden",
                          gap: "1",
                          children: [
                            (0, t.jsx)(Yi, { option: r.best_purchase_option }),
                            (0, t.jsxs)(F.s, {
                              direction: "column",
                              flexGrow: "1",
                              overflow: "hidden",
                              children: [
                                (0, t.jsx)(j.EY, {
                                  size: "2",
                                  children: g.LocalizePlural(
                                    S,
                                    b,
                                    r.best_purchase_option?.discount_pct ||
                                      r.best_purchase_option
                                        ?.bundle_discount_pct ||
                                      0,
                                  ),
                                }),
                                (0, t.jsx)(zd, {
                                  apps: [...y, ...v],
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
        function qf(s) {
          const { rgAppids: e } = s;
          return e.length == 0
            ? null
            : jsx("div", {
                className: styles.AppImages,
                children: e?.map((n) => jsx(Od, { appid: n }, n)),
              });
        }
        function Od(s) {
          const { appid: e } = s,
            { data: n } = useStoreItemDefaultInfo({ appid: e }),
            { data: r } = useStoreItemAssets({ appid: e });
          if (!n || !r) return console.warn("Not ready", e), null;
          const a = r && StoreAssetURL(r, "small_capsule");
          return jsx(Fragment, { children: jsx("img", { src: a, alt: "" }) });
        }
        function zd(s) {
          const { apps: e, setOwnedApps: n } = s,
            r = 6,
            [a, o] = d.useState(e.length > r + 1 ? r : e.length),
            l = d.useRef(null),
            c = (0, fe.wY)((f) => {
              if (l.current) {
                const y = f.contentRect,
                  v = l.current?.getBoundingClientRect();
                let b = y.height,
                  B = 0;
                for (let S of f.target.children) {
                  if (S.tagName != "LI") continue;
                  const I = S.getBoundingClientRect();
                  if (
                    (B != e.length - 1 && I.height < b - v.height) ||
                    (B == e.length - 1 && I.height < b)
                  )
                    B++, (b -= I.height);
                  else break;
                }
                a != B && o(B),
                  (l.current.style.opacity = B == e.length ? "0" : "1");
              }
            });
          if (e.length == 0 || a == 0) return null;
          const m = e.length - a;
          return (0, t.jsxs)("ul", {
            className: hs().AppList,
            ref: c,
            children: [
              e
                .slice(0, a)
                .map((f) => (0, t.jsx)(Nd, { appid: f, bOwned: n.has(f) }, f)),
              (0, t.jsx)(j.EY, {
                as: "div",
                ref: l,
                size: "2",
                children: g.LocalizePlural("#AppPage_AdditionalItem", m),
              }),
            ],
          });
        }
        function Nd(s) {
          const { appid: e, bOwned: n } = s,
            { data: r } = (0, M.J$)({ appid: e }),
            { data: a } = (0, M.lv)({ appid: e }),
            o = (0, Wt.h0)({ appid: e }),
            { data: l } = (0, M.lv)(o);
          if (!r) return null;
          const c =
            (a && (0, Ms.b0)(a, "community_icon")) ||
            (l && (0, Ms.b0)(l, "community_icon"));
          return (0, t.jsxs)("li", {
            className: hs().BundleApp,
            children: [
              (0, t.jsx)("div", {
                className: hs().AppIcon,
                children: c && (0, t.jsx)("img", { src: c, alt: "" }),
              }),
              (0, t.jsxs)("div", {
                className: hs().AppText,
                children: [
                  (0, t.jsx)(j.EY, {
                    size: "2",
                    contrast: n ? "description" : "subtitle",
                    lineClamp: n ? 1 : 2,
                    className: n ? void 0 : hs().WrappingName,
                    children: r.name,
                  }),
                  n &&
                    (0, t.jsx)(j.EY, {
                      size: "1",
                      weight: "heavy",
                      color: "storegreen-10",
                      className: hs().InLibrary,
                      children: (0, Ar.eI)("in_library"),
                    }),
                  !n &&
                    (0, t.jsx)(Lo, {
                      bComingSoon: r.is_coming_soon,
                      purchaseOption: r.best_purchase_option,
                      className: hs().PrePurchase,
                    }),
                ],
              }),
            ],
          });
        }
        var Xe = i(86336),
          ys = i(24809),
          Dd = i(23413),
          Fd = i.n(Dd);
        function Ao(s) {
          const { appid: e } = s,
            { data: n } = (0, M.J$)({ appid: e });
          return (0, t.jsx)(An.p, {
            storeItem: n,
            children: (0, t.jsx)(Xe.W, { size: "2", children: n?.name }),
          });
        }
        function Rd(s) {
          const { appid: e } = s,
            { data: n } = (0, M.J$)({ appid: e });
          return n
            ? (0, t.jsx)("li", { children: (0, t.jsx)(Ao, { appid: e }) })
            : null;
        }
        function Oo(s) {
          const {
            appid: e,
            strLocTagTitle: n,
            strLocTagBody: r,
            rgAppidParent: a,
            color: o,
          } = s;
          return (0, t.jsx)(ys.k, {
            children: (0, t.jsxs)(F.s, {
              background: o,
              direction: "column",
              padding: "3",
              children: [
                (0, t.jsx)(dn.D, { size: "5", children: g.Localize(n) }),
                a.length == 1 &&
                  (0, t.jsx)(j.EY, {
                    children: g.LocalizeReact(
                      r,
                      (0, t.jsx)(Ao, { appid: a[0] }),
                    ),
                  }),
                a.length > 1 &&
                  (0, t.jsxs)(t.Fragment, {
                    children: [
                      (0, t.jsx)(j.EY, {
                        children: g.Localize("#AppPage_DLCWarning_OneOf"),
                      }),
                      (0, t.jsx)("ul", {
                        className: Fd().AppList,
                        children: a.map((l) => (0, t.jsx)(Rd, { appid: l }, l)),
                      }),
                    ],
                  }),
              ],
            }),
          });
        }
        function Wd(s) {
          const { appid: e } = s,
            { data: n } = (0, M.J$)({ appid: e });
          return !n ||
            n.type != oe.uE.Ov ||
            !n.related_items?.parent_appid ||
            n.related_items.parent_appid == Is.sc
            ? null
            : (0, t.jsx)(Oo, {
                appid: e,
                strLocTagTitle: "#AppPage_DLCWarning_Title_Soundtrack",
                strLocTagBody: "#AppPage_DLCWarning_Soundtrack",
                rgAppidParent: [n.related_items.parent_appid],
                color: "crimson-7",
              });
        }
        function wd(s) {
          const { appid: e } = s,
            { data: n } = (0, M.J$)({ appid: e });
          return !n || n.type != oe.uE._i || !n.related_items?.parent_appid
            ? null
            : (0, t.jsx)(Ud, {
                appid: e,
                appidParent: n.related_items.parent_appid,
              });
        }
        function Ud(s) {
          const { appid: e, appidParent: n } = s,
            { data: r } = (0, M.J$)({ appid: e }),
            { data: a } = (0, M.J$)({ appid: n });
          if (!r || !a || r.type != oe.uE._i) return null;
          const l =
              a && a.type == oe.uE.Sv
                ? "#AppPage_DLCWarning_Software"
                : "#AppPage_DLCWarning",
            c = r.related_items?.dlc_parent_appids?.length
              ? r.related_items?.dlc_parent_appids
              : [n];
          return (0, t.jsx)(Oo, {
            appid: e,
            strLocTagTitle: "#AppPage_DLCWarning_Title",
            strLocTagBody: l,
            rgAppidParent: c,
            color: "purple-7",
          });
        }
        function Cd(s) {
          const { appid: e } = s;
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)(Wd, { appid: e }),
              (0, t.jsx)(wd, { appid: e }),
            ],
          });
        }
        var Kd = i(3348),
          Ji = i(47875),
          Gd = i(25792),
          Yd = i(90114),
          kd = i(56680),
          Qd = i.n(kd);
        const Zi = (0, Gd.Nr)(function (e) {
          const {
              appid: n,
              bAllowRemove: r,
              children: a,
              color: o,
              width: l,
            } = e,
            c = (0, Ae.LH)(),
            { data: m } = ms(n),
            f = pr(n),
            [y, v, b] = (0, fe.uD)();
          (0, d.use)(ge.Z.Ready());
          const B = !!c;
          if (B && !m) return null;
          const S = B && !!m?.wishlist;
          if (S && !r) return null;
          const I = () => {
              f.mutateAsync({ wishlist: !S, old_interest: m });
            },
            V = S ? "#RemoveFromWishlist_ttip" : "#AddToWishlist_ttip",
            W = S ? "#Wishlisted" : "#AddToYourWishlist";
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)(Yt.Gq, {
                toolTipContent: ge.Z.Localize(V),
                children: (0, t.jsx)(Ze.$, {
                  color: o,
                  width: l,
                  onClick: B ? I : v,
                  children: a ? a(S) : ge.Z.Localize(W),
                }),
              }),
              !B && (0, t.jsx)(Vd, { active: y, closeModal: b }),
            ],
          });
        });
        function Vd(s) {
          const { active: e, closeModal: n } = s,
            { fnOpenInSteamClient: r } = (0, Yd.useOpenWebInSteamClient)();
          return (
            (0, d.use)(g.Ready()),
            (0, t.jsx)(H.EN, {
              active: e,
              children: (0, t.jsxs)(H.o0, {
                strTitle: g.Localize("#OpenInDesktopAppBanner_NotSignedIn"),
                className: Qd().WishlistModalOverride,
                strDescription: g.Localize("#Wishlist_NotSignedIn"),
                closeModal: n,
                bAlertDialog: !0,
                children: [
                  (0, t.jsxs)(F.s, {
                    direction: "row",
                    gap: "4",
                    paddingTop: "4",
                    paddingBottom: "4",
                    children: [
                      (0, t.jsx)(Ze.$, {
                        onClick: r,
                        children: g.Localize(
                          "#OpenInDesktopAppBanner_OpenAppButton",
                        ),
                      }),
                      (0, t.jsx)(Ze.$, {
                        color: "dull",
                        onClick: Ji.l,
                        children: ge.Z.Localize("#Login_SignIn"),
                      }),
                    ],
                  }),
                  (0, t.jsx)(j.EY, {
                    children: (0, C.oW)(
                      ge.Z.Localize("#GotSteam_NeedSteam"),
                      (0, t.jsx)(Xe.Y, {
                        href: `${Gs.TS.STORE_BASE_URL}about`,
                      }),
                    ),
                  }),
                ],
              }),
            })
          );
        }
        var $d = i(97393),
          Or = i.n($d);
        function zo(s) {
          const { id: e } = s,
            { data: n } = (0, M.qI)(e);
          if (!n) return null;
          const r = [];
          return (
            n.windows &&
              r.push(
                (0, t.jsx)(
                  "div",
                  {
                    className: Or().PlatformIcon,
                    children: (0, t.jsx)(Q.eJJ, {}),
                  },
                  "windows",
                ),
              ),
            n.mac &&
              r.push(
                (0, t.jsx)(
                  "div",
                  {
                    className: Or().PlatformIcon,
                    children: (0, t.jsx)(Q.kPc, {}),
                  },
                  "mac",
                ),
              ),
            n.steamos_linux &&
              r.push(
                (0, t.jsx)(
                  "div",
                  {
                    className: Or().PlatformIcon,
                    children: (0, t.jsx)(Q.Qte, {}),
                  },
                  "steamos",
                ),
              ),
            r.length == 0
              ? null
              : (0, t.jsx)("div", {
                  className: Or().PlatformIcons,
                  children: r,
                })
          );
        }
        var Jd = i(77774),
          vs = i.n(Jd);
        function Zd(s, e) {
          if (e) return "#AppPage_ComingSoon_UnlocksIn_Software";
          switch (s) {
            case oe.uE.Wz:
              return "#AppPage_ComingSoon_UnlocksIn_Video";
            case oe.uE.gQ:
              return "#AppPage_ComingSoon_UnlocksIn_Series";
            case oe.uE._i:
              return "#AppPage_ComingSoon_UnlocksIn_DLC";
            default:
              return "#AppPage_ComingSoon_UnlocksIn";
          }
        }
        function Xd(s, e) {
          return e
            ? s.custom_release_date_message
              ? s.custom_release_date_message
              : s.steam_release_date
                ? (0, Ut.$z)(s.steam_release_date)
                : ""
            : "";
        }
        function Hd(s, e, n) {
          return s ? s != "date_full" : e ? !0 : !n;
        }
        function qd(s) {
          const {
              appid: e,
              bHasPrePurchaseSub: n,
              bGetsSoftwareTreatment: r,
              bShowReleaseDateIfComingSoon: a,
              strOffsitePrice: o,
              preload: l,
            } = s,
            { data: c } = (0, M.J$)({ appid: e }),
            { data: m } = (0, M.by)({ appid: e }),
            f = (0, Kd.VM)(m);
          if (!c || !m) return null;
          const y = m.coming_soon_display,
            v = m.steam_release_date,
            b = !!v && v < (0, Rn._2)(),
            B = y == "text_comingsoon" || y == "text_tba",
            S = y != "text_comingsoon",
            I = c.type == oe.uE._i,
            V = y ? f : Xd(m, a),
            W = !!V,
            $ = n && !B && W,
            le = !b && !!v && !Hd(y, m.custom_release_date_message, a);
          return (0, t.jsxs)(ys.k, {
            children: [
              (0, t.jsxs)(F.s, {
                direction: "row",
                className: vs().ComingSoon,
                children: [
                  (0, t.jsxs)(F.s, {
                    direction: "column",
                    className: vs().Content,
                    children: [
                      b &&
                        (0, t.jsxs)(t.Fragment, {
                          children: [
                            (0, t.jsx)(dn.D, {
                              size: "5",
                              children: g.Localize("#AppPage_ComingSoon_Title"),
                            }),
                            (0, t.jsx)(j.EY, {
                              size: "2",
                              color: "greyneutral-11",
                              children: g.Localize(
                                "#AppPage_ComingSoon_ReleaseDatePassed",
                              ),
                            }),
                          ],
                        }),
                      !b &&
                        $ &&
                        (0, t.jsx)(dn.D, {
                          size: "5",
                          children: g.Localize(
                            "#AppPage_ComingSoon_ReleasesOn",
                            V,
                          ),
                        }),
                      !b &&
                        !$ &&
                        (0, t.jsxs)(t.Fragment, {
                          children: [
                            (0, t.jsx)(j.EY, {
                              size: "2",
                              color: "greyneutral-11",
                              children: g.Localize(
                                I
                                  ? "#AppPage_ComingSoon_NotYetAvailable_DLC"
                                  : "#AppPage_ComingSoon_NotYetAvailable",
                              ),
                            }),
                            W &&
                              (0, t.jsxs)(dn.D, {
                                size: "5",
                                children: [
                                  S &&
                                    `${g.Localize("#AppPage_ComingSoon_IntendedRelease")}: `,
                                  V,
                                ],
                              }),
                          ],
                        }),
                      le &&
                        (0, t.jsx)(j.EY, {
                          size: "2",
                          children: g.Localize(
                            Zd(c.type, r),
                            (0, Ut.Hq)(v - (0, Rn._2)(), {
                              eSuffix: Ut.a8.None,
                            }),
                          ),
                        }),
                      o &&
                        (0, t.jsx)(j.EY, {
                          size: "3",
                          weight: "heavy",
                          className: vs().OffsitePrice,
                          children: o,
                        }),
                    ],
                  }),
                  !n && (0, t.jsx)(_d, { appid: e }),
                ],
              }),
              l && (0, t.jsx)(eu, { appid: e, preload: l }),
            ],
          });
        }
        function _d(s) {
          const { appid: e } = s,
            { data: n } = ms(e);
          if (!n) return null;
          const r = n.wishlist;
          return (0, t.jsxs)(F.s, {
            direction: "column",
            className: vs().Reminder,
            children: [
              (0, t.jsxs)(F.s, {
                direction: "column",
                className: vs().Note,
                children: [
                  r &&
                    (0, t.jsx)(j.EY, {
                      size: "2",
                      children: g.Localize(
                        "#AppPage_ComingSoon_WishlistReminder_On",
                      ),
                    }),
                  !r &&
                    (0, t.jsxs)(t.Fragment, {
                      children: [
                        (0, t.jsx)(j.EY, {
                          size: "2",
                          children: g.Localize(
                            "#AppPage_ComingSoon_WishlistPrompt",
                          ),
                        }),
                        (0, t.jsx)(j.EY, {
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
                (0, t.jsx)(Xe.Y, {
                  href: `${se.TS.STORE_BASE_URL}wishlist/`,
                  children: g.Localize("#AppPage_ComingSoon_ViewWishlist"),
                }),
              !r && (0, t.jsx)(Zi, { appid: e, color: "storegreen" }),
            ],
          });
        }
        function eu(s) {
          const { appid: e, preload: n } = s,
            { subidFreeOnDemand: r, bOwnedPermanent: a } = n,
            { data: o } = (0, M.J$)({ appid: e }),
            l = (0, Ae.LH)(),
            c = o?.free_weekend?.appid ?? e,
            m = Tr(c, o?.name ?? "");
          if (!o) return null;
          const f = !!l && !!r && !a;
          return (0, t.jsxs)(F.s, {
            direction: "column",
            className: vs().Preload,
            children: [
              (0, t.jsx)(zo, { id: { appid: e } }),
              (0, t.jsx)(dn.D, {
                size: "5",
                children: g.Localize(
                  "#AppPage_ComingSoon_PreloadTitle",
                  o.name,
                ),
              }),
              (0, t.jsxs)(F.s, {
                direction: "row",
                className: vs().PreloadActions,
                children: [
                  (0, t.jsx)(Ze.$, {
                    onClick: m,
                    children: g.Localize("#AppPage_ComingSoon_PreloadButton"),
                  }),
                  f && (0, t.jsx)(tu, { subid: r }),
                ],
              }),
            ],
          });
        }
        function tu(s) {
          const e = Sr({ packageid: s.subid });
          return (0, t.jsx)(Ze.$, {
            color: "greyneutral",
            onClick: e,
            children: g.Localize("#AppPage_ComingSoon_AddToLibrary"),
          });
        }
        var Xi = i(44930),
          xs = i(45497),
          nu = i(74677),
          su = i.n(nu);
        const fn = !1,
          No = [],
          zr = "orange-8",
          ru = "faqs/view/7451-A8FE-3867-6A2E",
          iu = "kb_article.php?ref=1055-ISJM-8568",
          au = "https://support.apple.com/en-us/HT211814",
          ou = {
            [oe.E.C1]: "#AppPage_PurchaseNote_Type_Notice",
            [oe.E.NG]: "#AppPage_PurchaseNote_Type_LowViolence",
            [oe.E.GG]: "#AppPage_PurchaseNote_Type_CreditCardRequired",
            [oe.E.nE]: "#AppPage_PurchaseNote_Type_SystemRequirements",
          };
        function lu(s) {
          const {
            appid: e,
            bUnsupportedLanguage: n,
            bAdminExcludedFromDiscovery: r,
            bRetired: a,
            bMac64BitNotice: o,
            bMacAppleSiliconNotice: l,
            b360Video: c,
          } = s;
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)(du, { appid: e }),
              (n || fn) && (0, t.jsx)(uu, {}),
              (r || fn) && (0, t.jsx)(mu, { appid: e }),
              (0, t.jsx)(gu, {
                appid: e,
                bRetired: a || fn,
                bMac64BitNotice: o || fn,
                bMacAppleSiliconNotice: l || fn,
              }),
              (0, t.jsx)(fu, { appid: e }),
              (0, t.jsx)(hu, { appid: e, b360Video: c }),
            ],
          });
        }
        function is(s) {
          const { title: e, bHighlight: n, children: r } = s;
          return (0, t.jsx)(ys.k, {
            children: (0, t.jsxs)(F.s, {
              background: n ? "sky-4" : void 0,
              borderColor: n ? void 0 : zr,
              direction: "column",
              gap: "2",
              padding: n ? "4" : "3",
              marginBottom: "3",
              children: [
                e &&
                  (0, t.jsx)(dn.D, {
                    size: "4",
                    weight: "heavy",
                    color: n ? void 0 : zr,
                    children: e,
                  }),
                r,
              ],
            }),
          });
        }
        function cu(s) {
          const [e, n] = d.useState(!1);
          return (
            d.useEffect(() => {
              if (
                s != "secureboot_tpm2" ||
                !(0, Xi.Dp)("Compat.CheckBootProtectionEnabled")
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
        function du(s) {
          const { appid: e } = s,
            { data: n } = (0, M._F)({ appid: e }),
            r = n?.anticheat;
          return !cu(r?.boot_protection ? r.boot_protection_name : void 0) &&
            !fn
            ? null
            : (0, t.jsx)(is, {
                title: g.Localize("#AppPage_PurchaseNote_BootProtection_Title"),
                children: (0, t.jsx)(j.EY, {
                  children: (0, Be.xh)(
                    g.Localize("#AppPage_PurchaseNote_BootProtection"),
                    (0, t.jsx)(Xe.Y, {
                      href: `${Y.TS.HELP_BASE_URL}${ru}`,
                      color: "blue-8",
                    }),
                  ),
                }),
              });
        }
        function uu() {
          return (0, t.jsxs)(is, {
            title: g.Localize(
              "#AppPage_PurchaseNote_UnsupportedLanguage_Title",
              (0, C.we)(`#Language_${Y.TS.LANGUAGE}`),
            ),
            children: [
              (0, t.jsx)(j.EY, {
                children: g.Localize(
                  "#AppPage_PurchaseNote_UnsupportedLanguage",
                ),
              }),
              Y.iA.logged_in &&
                (0, t.jsx)(j.EY, {
                  children: (0, Be.xh)(
                    g.Localize(
                      "#AppPage_PurchaseNote_UnsupportedLanguage_Change",
                    ),
                    (0, t.jsx)(Xe.Y, {
                      href: `${Y.TS.STORE_BASE_URL}account/preferences`,
                      color: "blue-8",
                    }),
                  ),
                }),
            ],
          });
        }
        function mu(s) {
          const { appid: e } = s;
          return (0, t.jsx)(is, {
            bHighlight: !0,
            children: (0, t.jsx)(j.EY, {
              size: "4",
              color: "sky-11",
              children: (0, Be.xh)(
                g.Localize("#AppPage_PurchaseNote_ExcludedFromDiscovery"),
                (0, t.jsx)(j.EY, {
                  size: "5",
                  weight: "medium",
                  contrast: "title",
                }),
                (0, t.jsx)(j.EY, { color: "valveonly-7" }),
                (0, t.jsx)(Xe.Y, {
                  href: `${Y.TS.PARTNER_BASE_URL}apps/landing/${e}`,
                  target: "_blank",
                  color: "blue-8",
                }),
              ),
            }),
          });
        }
        function gu(s) {
          const {
              appid: e,
              bRetired: n,
              bMac64BitNotice: r,
              bMacAppleSiliconNotice: a,
            } = s,
            { data: o } = (0, M.J$)({ appid: e });
          if (!o) return null;
          const l = (0, t.jsx)(pu, {
            strType: g.Localize("#AppPage_PurchaseNote_Type_Notice"),
          });
          let c;
          return (
            n
              ? (c = g.Localize("#AppPage_PurchaseNote_Retired", o.name ?? ""))
              : o.unlisted &&
                (c = g.Localize(
                  "#AppPage_PurchaseNote_Unlisted",
                  o.name ?? "",
                )),
            (0, t.jsxs)(t.Fragment, {
              children: [
                c &&
                  (0, t.jsx)(is, {
                    children: (0, t.jsxs)(j.EY, { children: [l, c] }),
                  }),
                fn &&
                  (0, t.jsx)(is, {
                    children: (0, t.jsxs)(j.EY, {
                      children: [
                        l,
                        g.Localize(
                          "#AppPage_PurchaseNote_Unlisted",
                          o.name ?? "",
                        ),
                      ],
                    }),
                  }),
                r &&
                  (0, t.jsx)(is, {
                    children: (0, t.jsxs)(j.EY, {
                      children: [
                        l,
                        (0, Be.xh)(
                          g.Localize("#AppPage_PurchaseNote_Mac64Bit"),
                          (0, t.jsx)(Xe.Y, {
                            href: `${Y.TS.SUPPORT_BASE_URL}${iu}`,
                            color: "blue-8",
                          }),
                        ),
                      ],
                    }),
                  }),
                a &&
                  (0, t.jsx)(is, {
                    children: (0, t.jsxs)(j.EY, {
                      children: [
                        l,
                        (0, Be.xh)(
                          g.Localize("#AppPage_PurchaseNote_MacAppleSilicon"),
                          (0, t.jsx)(Xe.Y, { href: au, color: "blue-8" }),
                        ),
                      ],
                    }),
                  }),
              ],
            })
          );
        }
        function Do(s) {
          const { note: e } = s,
            { type: n, highlighted: r, text_bbcode: a } = e;
          if (!a) return null;
          let o = a;
          const l = n !== void 0 ? ou[n] : void 0;
          return (
            l &&
              (o = `[b][color=var(--color-${zr})][noparse]${g.Localize("#AppPage_PurchaseNote_TypeLabel", g.Localize(l))}[/noparse][/color][/b] ${a}`),
            (0, t.jsx)(is, {
              bHighlight: !!r,
              children: (0, t.jsx)(j.EY, {
                as: "div",
                size: r ? "4" : void 0,
                color: r ? "sky-11" : void 0,
                children: (0, t.jsx)(xs.n, { text: o }),
              }),
            })
          );
        }
        function pu(s) {
          const { strType: e } = s;
          return (0, t.jsx)(j.EY, {
            weight: "heavy",
            color: zr,
            marginRight: "1",
            children: g.Localize("#AppPage_PurchaseNote_TypeLabel", e),
          });
        }
        function fu(s) {
          const { appid: e } = s,
            { data: n } = (0, M.J$)({ appid: e }),
            { data: r } = (0, M.is)({ appid: e });
          let a = r?.purchase_notes;
          return (
            fn && !a?.length && (a = No),
            !n || !a?.length || (n.type == oe.uE.RA && !fn)
              ? null
              : (0, t.jsx)(t.Fragment, {
                  children: a.map((o, l) => (0, t.jsx)(Do, { note: o }, l)),
                })
          );
        }
        function hu(s) {
          const { appid: e, b360Video: n } = s,
            { data: r } = (0, M.qI)({ appid: e }),
            { data: a } = (0, M._F)({ appid: e }),
            o = r?.vr_support;
          let l;
          return (
            o?.vrhmd_only && !n
              ? (l = rn.EPurchaseNoticeType_VRRequired)
              : a?.no_mouse_keyboard_support
                ? (l = rn.EPurchaseNoticeType_ControllerRequired)
                : o?.vrhmd &&
                  o.show_optional_vr_mode_notice &&
                  (l = rn.EPurchaseNoticeType_VRSupported),
            fn
              ? (0, t.jsxs)(ys.k, {
                  children: [
                    (0, t.jsx)(cs, {
                      appid: e,
                      type: rn.EPurchaseNoticeType_VRRequired,
                    }),
                    (0, t.jsx)(cs, {
                      appid: e,
                      type: rn.EPurchaseNoticeType_ControllerRequired,
                    }),
                    (0, t.jsx)(cs, {
                      appid: e,
                      type: rn.EPurchaseNoticeType_VRSupported,
                    }),
                  ],
                })
              : l === void 0
                ? null
                : (0, t.jsx)(ys.k, {
                    children: (0, t.jsx)(cs, { appid: e, type: l }),
                  })
          );
        }
        function yu(s) {
          const { appid: e } = s,
            { data: n } = (0, M.J$)({ appid: e }),
            { data: r } = (0, M.is)({ appid: e }),
            a = (0, Jt.aL)(`${Y.TS.STORE_BASE_URL}about/communitymods/`);
          let o = r?.purchase_notes;
          return (
            fn && !o?.length && (o = No),
            !n || (n.type != oe.uE.RA && !fn) || !o?.[0]?.text_bbcode
              ? null
              : (0, t.jsxs)(t.Fragment, {
                  children: [
                    (0, t.jsx)(ys.k, {
                      children: (0, t.jsxs)(F.s, {
                        className: su().ModBubble,
                        direction: "column",
                        gap: "2",
                        paddingX: "4",
                        paddingY: "3",
                        marginBottom: "3",
                        children: [
                          (0, t.jsx)(dn.D, {
                            size: "6",
                            weight: "heavy",
                            contrast: "title",
                            children: g.Localize(
                              "#AppPage_PurchaseNote_Mod_Title",
                            ),
                          }),
                          (0, t.jsx)(j.EY, {
                            as: "div",
                            contrast: "subtitle",
                            children: (0, t.jsx)(xs.n, {
                              text: o[0].text_bbcode,
                            }),
                          }),
                          (0, t.jsx)(j.EY, {
                            contrast: "subtitle",
                            children: (0, Be.xh)(
                              g.Localize("#AppPage_PurchaseNote_Mod_LearnMore"),
                              (0, t.jsx)(Xe.Y, {
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
                    o.slice(1).map((l, c) => (0, t.jsx)(Do, { note: l }, c)),
                  ],
                })
          );
        }
        const hn = new Ue.wd("PurchaseOptions"),
          Fo = !1;
        function vu(s) {
          const {
              appid: e,
              rgOwnedApps: n,
              rgOwnedPackages: r,
              playtestStatus: a,
              rgFreePackagesAvailable: o,
              strAccountTypeDescription: l,
              comingSoon: c,
              purchaseNotes: m,
            } = s,
            f = (0, Xs._7)(!0),
            y = vo(),
            v = (0, ho.QW)(),
            [b, B] = d.useState(!1);
          return (
            d.useEffect(() => {
              hn.Debug("Initializing PurchaseOptions"),
                hn.Debug("rgOwnedApps", n),
                hn.Debug("rgActiveLicenses", r),
                hn.Debug("playtestStatus", a),
                hn.Debug("rgFreePackagesAvailable", o),
                hn.Debug("strAccountTypeDescription", l),
                f(n),
                y(r),
                Fo && a && v(a.appid, a),
                B(!0);
            }, [e, r, n, a, f, y, v, o, l]),
            d.use(g.Ready()),
            d.use(ge.Z.Ready()),
            b
              ? (0, t.jsx)(d.Suspense, {
                  children: (0, t.jsx)(ju, {
                    appid: e,
                    rgPackagesAvailableForFree: o,
                    strAccountTypeDescription: l,
                    comingSoon: c,
                    purchaseNotes: m,
                  }),
                })
              : null
          );
        }
        function xu(s, e, n) {
          const { data: r } = (0, M.J$)({ appid: s }),
            { data: a } = (0, M.is)({ appid: s }),
            { data: o } = (0, Xs.$Y)(),
            l = xo(s),
            c = a?.purchase_options;
          return (
            hn.Debug(c),
            d.useMemo(() => {
              if (!r || !c || !o) return null;
              const f = r.is_free && !r.is_free_temporarily,
                y = (0, Rn._2)(),
                v =
                  r.free_weekend &&
                  (r.free_weekend.start_time || 0) <= y &&
                  (r.free_weekend.end_time || 0) > y,
                b = new Set(e),
                B = [];
              if (!f)
                if (o.has(s)) B.push({ type: "play" });
                else {
                  const me = (a.purchase_options || [])
                    .map((ie) => ie.free_with_master_sub_appid)
                    .filter((ie) => !!ie);
                  hn.Debug(me);
                  for (const ie of me)
                    if (ie && o.has(ie)) {
                      B.push({ type: "play", appidMasterSub: ie });
                      break;
                    }
                }
              if (Fo) {
                const me = r.related_items?.playtests || [];
                if (me.length > 0)
                  for (const ie of me)
                    ie &&
                      B.push({
                        type: "playtest",
                        appidPlaytest: ie.appid,
                        bIsOpen: !!ie.is_open,
                      });
              }
              const S = new Set(),
                I = new Set(
                  (r.related_items?.standalone_demos || []).map(
                    (me) => me.appid,
                  ),
                );
              for (let me of r.related_items?.demos?.filter(
                (ie) => ie.show_above_purchase,
              ) || [])
                S.has(me.appid) ||
                  (B.push({
                    type: "demo",
                    appid: me.appid,
                    label: me.label,
                    bStandalone: I.has(me.appid),
                  }),
                  S.add(me.appid));
              (f || v) && B.push({ type: "free" });
              const V = new Map();
              for (let me of a.package_groups || [])
                V.set(me.name, { id: me.name, package_group: me, items: [] });
              let W = !!r.related_items?.related_f2p;
              const $ = new Set(
                c
                  .map((me) => me.free_to_keep_base_package)
                  .filter((me) => !!me),
              );
              for (let me of c)
                me.is_free_license &&
                  !me.package_group &&
                  (B.push({
                    type: "item",
                    data: me,
                    bAvailableForFree: !!me.packageid && b.has(me.packageid),
                  }),
                  $.add(me.packageid));
              let le;
              for (let me of c)
                if (
                  !$.has(me.packageid) &&
                  !(me.packageid && l.has(me.packageid))
                ) {
                  if (W && !me.is_edition && r.related_items) {
                    const ie = r.related_items.related_f2p;
                    B.push({
                      type: "related",
                      appid: ie.appid,
                      title: ie.header_text,
                      description: ie.description_text,
                    }),
                      (W = !1);
                  }
                  me.package_group !== le?.id &&
                    (me.package_group
                      ? ((le = V.get(me.package_group)),
                        le?.package_group.display_type == oe.aq.V &&
                          B.push({ type: "dropdown", data: le }))
                      : (le = void 0)),
                    le && le?.package_group.display_type == oe.aq.V
                      ? le.items.push(me)
                      : B.push({
                          type: "item",
                          data: me,
                          bAvailableForFree:
                            !!me.packageid && b.has(me.packageid),
                        });
                }
              return hn.Debug(V), B;
            }, [s, r, a, c, o, e, l])
          );
        }
        function ju(s) {
          const {
              appid: e,
              rgPackagesAvailableForFree: n,
              strAccountTypeDescription: r,
              comingSoon: a,
              purchaseNotes: o,
            } = s,
            { data: l } = (0, M.J$)({ appid: e }),
            c = xu(e, n, r),
            m = d.useRef(null),
            f = d.useCallback((y) => {
              y.data?.method == "FocusPurchaseOptions" &&
                (m.current?.NavTree().Activate(),
                m.current?.TakeFocus(ur.pR.OK));
            }, []);
          return (
            d.useEffect(
              () => (
                window.addEventListener("message", f),
                () => window.removeEventListener("message", f)
              ),
              [f],
            ),
            !l || !c
              ? (hn.Warning("Not ready", e), null)
              : (hn.Debug(l),
                hn.Debug(c),
                (0, t.jsx)(zn.Provider, {
                  value: { appid: e, nOptions: c.length },
                  children: (0, t.jsx)(Yc, {
                    children: (0, t.jsxs)(T.Z, {
                      className: Pn().PurchaseOptionDisplay,
                      navEntryPreferPosition: de.iU.PREFERRED_CHILD,
                      navRef: m,
                      children: [
                        a && (0, t.jsx)(qd, { appid: e, ...a }),
                        (0, t.jsx)(lu, { appid: e, ...o }),
                        (0, t.jsx)(Cd, { appid: e }),
                        (0, t.jsx)(yu, { appid: e }),
                        c.length > 0 &&
                          (0, t.jsxs)(t.Fragment, {
                            children: [
                              (0, t.jsx)(ys.k, {
                                children: (0, t.jsx)(j.EY, {
                                  size: "3",
                                  contrast: "title",
                                  weight: "heavy",
                                  children: g.Localize(
                                    "#AppPage_PurchaseOptions_Title",
                                  ),
                                }),
                              }),
                              c.length > 2 && (0, t.jsx)(bu, { options: c }),
                              c.length <= 2 &&
                                (0, t.jsxs)(T.Z, {
                                  className: (0, ne.A)(
                                    Pn().PurchaseOptionCarouselWrapper,
                                    c.length <= 2 && Pn().NoCarousel,
                                    c.length == 1 && Pn().Single,
                                  ),
                                  preferredFocus: !0,
                                  children: [
                                    c.length <= 2 &&
                                      (0, t.jsx)(Hi, { option: c[0] }),
                                    c.length == 2 &&
                                      (0, t.jsx)(Hi, { option: c[1] }),
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
        function Hi(s) {
          const { option: e } = s;
          let n = null;
          switch (e.type) {
            case "item":
              e.data.packageid
                ? (n = (0, t.jsx)(Sd, { id: wi(e.data), option: e }))
                : (n = (0, t.jsx)(Ad, { id: wi(e.data), option: e }));
              break;
            case "dropdown":
              n = (0, t.jsx)(dd, { option: e });
              break;
            case "demo":
              n = (0, t.jsx)(qc, { option: e });
              break;
            case "free":
              n = (0, t.jsx)(_c, { option: e });
              break;
            case "play":
              n = (0, t.jsx)(md, {
                option: e,
                appidMasterSub: e.appidMasterSub,
              });
              break;
            case "playtest":
              n = (0, t.jsx)(gd, {
                option: e,
                appidPlaytest: e.appidPlaytest,
                bIsOpen: e.bIsOpen,
              });
              break;
            case "related":
              n = (0, t.jsx)(fd, { option: e });
              break;
            default:
          }
          return n
            ? (0, t.jsx)("div", {
                className: Pn().PurchaseOptionWrapper,
                children: n,
              })
            : null;
        }
        function bu(s) {
          const { options: e } = s,
            n = "purchase_options",
            [r, a] = (0, fo.Eh)(n),
            o = 0.96,
            l = 256,
            c = 8,
            m = parseInt(Pn().CarouselPaddingTop),
            f = parseInt(Pn().CarouselPaddingBottom),
            y = d.useCallback(
              (B, S, I, V) => {
                const W = e[B];
                return (0, t.jsx)("div", {
                  style: { width: S, height: I },
                  children: (0, t.jsx)(Hi, { option: W }),
                });
              },
              [e],
            ),
            v = d.useCallback(() => l, [l]),
            b = d.useCallback(
              (B) => {
                const S = e[B];
                switch (S.type) {
                  case "item":
                    return Dc(S.data);
                  case "dropdown":
                    return "dropdown_package_group_" + S.data.id;
                  case "demo":
                    return "demo_" + S.appid;
                  case "free":
                    return "free";
                  case "playtest":
                    return "playtest_" + S.appidPlaytest;
                  case "play":
                    return "play_" + S.appidMasterSub;
                  case "related":
                    return "related_" + S.appid;
                  default:
                    return (
                      (0, ts.wT)(!1, "Unknown purchase option type", S.type),
                      "unknown"
                    );
                }
              },
              [e],
            );
          return e.length == 0
            ? null
            : (0, t.jsx)(T.Z, {
                className: (0, ne.A)(
                  Pn().PurchaseOptionCarouselWrapper,
                  r != 0 && Pn().NotLeft,
                ),
                preferredFocus: !0,
                children: (0, t.jsx)(fo.jy, {
                  name: n,
                  "aria-label": g.Localize("#AppPage_PurchaseOptions_Title"),
                  className: (0, ne.A)(
                    Pn().PurchaseOptionsCarousel,
                    "PurchaseOptions",
                  ),
                  focusedColumn: r,
                  setFocusedColumn: a,
                  nNumItems: e.length,
                  nHeight: l / o + m + f,
                  nItemHeight: l / o,
                  nItemMarginX: c,
                  fnGetColumnWidth: v,
                  fnGetId: b,
                  fnItemRenderer: y,
                  scrollToAlignment: "center",
                }),
              });
        }
        var qt = i(78365),
          js = i(24642);
        const Bu = 0,
          Eu = 1,
          Pu = 2,
          Tu = 3,
          Su = 4,
          Mu = 5;
        var qi = i(95242),
          Iu = i(91405),
          Ro = i(9843);
        const Lu = d.lazy(() =>
          Promise.all([i.e(53080), i.e(56925), i.e(39233), i.e(24102)]).then(
            i.bind(i, 75850),
          ),
        );
        function _i(s) {
          const { rgPackageIDs: e, strButtonToken: n } = s,
            [r, a] = d.useState(void 0),
            o = e.map((b) => ({ packageid: b })),
            { mutate: l, isPending: c } = (0, Iu.w)(o),
            { data: m } = (0, Ro.UI)(),
            f =
              m !== void 0 &&
              e.length > 0 &&
              e.every((b) => (0, Ro.lb)(m, b, void 0)),
            y = d.useCallback(() => a(void 0), []),
            v = d.useCallback(() => {
              l(void 0, { onSuccess: (b) => a(b) });
            }, [l]);
          return e.length == 0
            ? null
            : (0, t.jsxs)(t.Fragment, {
                children: [
                  r &&
                    (0, t.jsx)(d.Suspense, {
                      children: (0, t.jsx)(Lu, {
                        lineItemIDs: r,
                        closeCart: y,
                      }),
                    }),
                  f
                    ? (0, t.jsx)(Ze.v, {
                        navProps: { preferredFocus: !0 },
                        color: "storegreen",
                        focusable: !0,
                        href: `${Y.TS.STORE_BASE_URL}cart/`,
                        children: Je.d.Localize("#AddToCartButton_InCart"),
                      })
                    : (0, t.jsx)(Ze.$, {
                        navProps: { preferredFocus: !0 },
                        color: "storegreen",
                        disabled: c,
                        onClick: v,
                        children: g.Localize(n),
                      }),
                ],
              });
        }
        function ea(s, e, n = { style: "long", type: "conjunction" }) {
          const a = new Intl.ListFormat(C.pf.GetPreferredLocales(), n)
            .formatToParts(s.map((o, l) => l.toString()))
            .map((o) => {
              if (o.type === "literal") return o.value;
              const l = Number.parseInt(o.value);
              return e(s[l], l);
            });
          return d.createElement(d.Fragment, null, ...a);
        }
        var As = i(95994);
        const Au = "17px";
        function Wo(s) {
          const {
            overhang: e = Au,
            marginTop: n,
            marginBottom: r,
            buttonBarContents: a,
            children: o,
          } = s;
          return (0, t.jsxs)(As.x, {
            columns: "1fr",
            rows: `auto ${e}`,
            marginTop: n,
            marginBottom: r,
            children: [o, (0, t.jsx)(Ou, { children: a })],
          });
        }
        function Ou(s) {
          const { children: e } = s;
          return (0, t.jsx)(F.s, {
            marginX: "4",
            alignSelf: "end",
            justify: "end",
            gap: "1",
            zIndex: "1",
            gridColumn: "1",
            gridRow: "1 / -1",
            navProps: { navEntryPreferPosition: de.iU.PREFERRED_CHILD },
            children: e,
          });
        }
        var zu = i(26666),
          bs = i.n(zu);
        const Nu = 6,
          Du = 5,
          Fu = 135;
        function Ru(s) {
          const { appid: e, rgOptions: n } = s;
          return (0, t.jsx)(t.Fragment, {
            children: n.map((r) =>
              (0, t.jsx)(Wu, { appid: e, option: r }, r.packageid),
            ),
          });
        }
        function Wu(s) {
          const { appid: e, option: n } = s,
            r = n.packageid,
            { data: a } = (0, M.J$)({ appid: e }),
            { data: o } = (0, M.J$)({ packageid: r }),
            { data: l } = Hs(),
            c = d.useMemo(() => {
              const v = new Map();
              for (const b of a?.included_items?.included_apps || [])
                b.id && v.set(b.id, b);
              return (o?.included_appids || [])
                .map((b) => v.get(b))
                .filter((b) => !!b);
            }, [a, o]);
          if (!o) return null;
          const m = !!l?.has(r),
            f = !!o.purchase_description_bbcode,
            y = c.slice(0, Nu);
          return (0, t.jsx)(Wo, {
            marginBottom: "4",
            buttonBarContents: (0, t.jsx)(wu, { pkg: o, option: n }),
            children: (0, t.jsxs)(ce.az, {
              position: "relative",
              gridRow: "1",
              gridColumn: "1",
              padding: "4",
              paddingTop: "2",
              paddingBottom: "5",
              radius: "md",
              className: bs().PackBody,
              children: [
                m &&
                  (0, t.jsx)(F.s, {
                    align: "center",
                    gap: "1",
                    position: "absolute",
                    inset: "-8px auto auto 6px",
                    paddingX: "1",
                    className: bs().PackInLibrary,
                    children: (0, Ar.eI)("in_library"),
                  }),
                (0, t.jsxs)(F.s, {
                  justify: "between",
                  align: "center",
                  children: [
                    (0, t.jsx)(j.EY, {
                      size: "5",
                      children: g.Localize(
                        "#AppPage_Dropdown_DefaultTitle",
                        n.purchase_option_name || o.name || "",
                      ),
                    }),
                    (0, t.jsx)(ce.az, {
                      marginBottom: "1",
                      children: (0, t.jsx)(zo, { id: { packageid: r } }),
                    }),
                  ],
                }),
                !f && c.length > 1 && (0, t.jsx)(Uu, { rgApps: c }),
                y.length > 1 &&
                  (0, t.jsx)(ce.az, {
                    position: "relative",
                    padding: "2",
                    className: bs().PackCapsulesCtn,
                    children: (0, t.jsx)(ce.az, {
                      className: (0, ne.A)(
                        bs().PackCapsules,
                        y.length >= Du && bs().PackCapsulesCollapsed,
                      ),
                      children: y.map((v, b) =>
                        (0, t.jsx)(Cu, { appid: v.id, zIndex: 10 - b }, v.id),
                      ),
                    }),
                  }),
              ],
            }),
          });
        }
        function wu(s) {
          const { pkg: e, option: n } = s,
            r = d.useMemo(() => [n.packageid], [n.packageid]);
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)(wo, {
                children: (0, t.jsx)(Ze.v, {
                  focusable: !0,
                  href: (0, Ji._)(e),
                  children: g.Localize("#AppPage_PurchaseOption_MoreInfo"),
                }),
              }),
              (0, t.jsxs)(wo, {
                children: [
                  (0, t.jsx)(qi.z, { purchaseOption: n }),
                  (0, t.jsx)(_i, {
                    rgPackageIDs: r,
                    strButtonToken: "#AppPage_PurchaseOption_AddToCart",
                  }),
                ],
              }),
            ],
          });
        }
        function wo(s) {
          const { children: e } = s;
          return (0, t.jsx)(F.s, {
            align: "center",
            gap: "1",
            zIndex: "1",
            className: bs().PackActionGroup,
            children: e,
          });
        }
        function Uu(s) {
          const { rgApps: e } = s,
            [n, r] = d.useState(!1),
            a = d.useCallback(() => r((m) => !m), []),
            o = d.useMemo(() => {
              let m = 0,
                f = 0;
              for (const y of e) {
                const v = (y.name || "").length;
                if (f > 0 && m + v >= Fu) break;
                (m += v), f++;
              }
              return f;
            }, [e]),
            l = o < e.length,
            c = l && !n ? e.slice(0, o) : e;
          return (0, t.jsx)(T.Z, {
            children: (0, t.jsxs)(j.EY, {
              size: "2",
              marginY: "2",
              children: [
                (0, t.jsx)("b", {
                  children: g.LocalizePlural(
                    "#AppPage_DLCPack_IncludesItems",
                    e.length,
                    (0, js.D)(e.length),
                  ),
                }),
                " ",
                ea(
                  c,
                  (m) =>
                    (0, t.jsx)(
                      Xe.Y,
                      {
                        href: (0, Ji._)(m),
                        whiteSpace: "nowrap",
                        children: m.name,
                      },
                      m.id,
                    ),
                  { type: "unit", style: "short" },
                ),
                l && (n ? " " : "\u2026 "),
                l &&
                  (0, t.jsx)(Xe.W, {
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
        function Cu(s) {
          const { appid: e, zIndex: n } = s,
            { data: r } = (0, M.J$)({ appid: e }),
            { data: a } = (0, M.lv)({ appid: e }),
            o =
              a?.asset_url_format && a.small_capsule
                ? Ls(a.asset_url_format, a.small_capsule)
                : void 0;
          return o
            ? (0, t.jsx)(ce.az, {
                position: "relative",
                display: "inline-block",
                height: "45px",
                width: "120px",
                overflow: "hidden",
                className: bs().PackCapsule,
                style: { zIndex: n },
                children: (0, t.jsx)(Wn._, {
                  height: "100%",
                  width: "100%",
                  src: o,
                  alt: r?.name || "",
                }),
              })
            : null;
        }
        var Ku = i(16071),
          en = i.n(Ku);
        const Nr = 5;
        function Gu(s) {
          switch (s) {
            case Eu:
              return "#AppPage_DLC_Highlight_New";
            case Pu:
              return "#AppPage_DLC_Highlight_ComingSoon";
            case Tu:
              return "#AppPage_DLC_Highlight_PlayerFavorite";
            case Su:
              return "#AppPage_DLC_Highlight_Recommended";
            case Mu:
              return "#AppPage_DLC_Highlight_RecommendedForNewPlayers";
            default:
              return null;
          }
        }
        function Yu(s) {
          switch (s) {
            case "in_cart":
              return en().FlagInCart;
            case "in_library":
              return en().FlagInLibrary;
            case "on_wishlist":
              return en().FlagOnWishlist;
            case "ignored":
            case "excluded_by_preferences":
              return en().FlagIgnored;
          }
        }
        function ku(s) {
          const {
              appid: e,
              rgRows: n,
              nDlcBrowseCount: r,
              nNumDLCExcludedByPreferences: a,
              addAllToCart: o,
            } = s,
            [l, c] = d.useState(!1),
            m = d.useCallback(() => c(!0), []),
            { data: f } = (0, M.J$)({ appid: e }),
            y = wc(e);
          if (!f || (n.length == 0 && a == 0 && !y?.length)) return null;
          d.use(g.Ready()), d.use(Je.d.Ready());
          const v = f.type == oe.uE.Sv,
            b = !l && n.length > Nr,
            B = b ? n.slice(0, Nr) : n;
          return (0, t.jsx)(d.Suspense, {
            children: (0, t.jsxs)(F.s, {
              direction: "column",
              gap: "4",
              marginY: "5",
              children: [
                (0, t.jsxs)(qt.YZ, {
                  "flow-children": "column",
                  children: [
                    (0, t.jsxs)(F.s, {
                      direction: "row",
                      justify: "between",
                      align: "center",
                      marginBottom: "2",
                      children: [
                        (0, t.jsx)(j.EY, {
                          size: "3",
                          contrast: "title",
                          weight: "heavy",
                          children: g.Localize(
                            v
                              ? "#AppPage_DLC_Header_Software"
                              : "#AppPage_DLC_Header",
                          ),
                        }),
                        r > 0 &&
                          (0, t.jsx)(Xe.Y, {
                            size: "2",
                            href: `${Y.TS.STORE_BASE_URL}dlc/${e}/`,
                            children: g.Localize(
                              "#AppPage_DLC_BrowseAll",
                              (0, js.D)(r),
                            ),
                          }),
                      ],
                    }),
                    a > 0 &&
                      (0, t.jsx)(ce.az, {
                        padding: "1",
                        paddingStart: "0",
                        marginBottom: "1",
                        children: (0, t.jsx)(j.EY, {
                          size: "2",
                          color: "greyneutral-11",
                          children: (0, Be.xh)(
                            g.LocalizePlural(
                              "#AppPage_DLC_ExcludedByPreferences",
                              a,
                            ),
                            (0, t.jsx)(Xe.Y, {
                              href: `${Y.TS.STORE_BASE_URL}account/preferences/`,
                            }),
                          ),
                        }),
                      }),
                    B.map((S, I) =>
                      (0, t.jsx)(Qu, { row: S, bRevealed: I >= Nr }, S.appid),
                    ),
                    b &&
                      (0, t.jsxs)(F.s, {
                        direction: "row",
                        justify: "between",
                        align: "center",
                        marginTop: "1",
                        className: en().Footer,
                        children: [
                          (0, t.jsx)(Ze.$, {
                            onClick: m,
                            children: g.Localize("#AppPage_DLC_SeeAll"),
                          }),
                          (0, t.jsx)(j.EY, {
                            size: "2",
                            color: "greyneutral-11",
                            children: g.Localize(
                              "#AppPage_DLC_ShowingResults",
                              "1",
                              (0, js.D)(Nr),
                              (0, js.D)(r),
                            ),
                          }),
                        ],
                      }),
                    !b &&
                      n.length < r &&
                      (0, t.jsx)(ce.az, {
                        marginTop: "1",
                        children: (0, t.jsx)(j.EY, {
                          size: "2",
                          color: "greyneutral-11",
                          className: en().PartialList,
                          children: g.Localize(
                            "#AppPage_DLC_ShowingPartialList",
                            (0, js.D)(n.length),
                            (0, js.D)(r),
                          ),
                        }),
                      }),
                  ],
                }),
                !b &&
                  o &&
                  (0, t.jsxs)(F.s, {
                    direction: "row",
                    justify: "between",
                    align: "center",
                    gap: "2",
                    marginTop: "2",
                    padding: "2",
                    className: en().AddAllToCart,
                    children: [
                      (0, t.jsx)(j.EY, {
                        size: "3",
                        weight: "heavy",
                        children: o.strTotalPrice,
                      }),
                      (0, t.jsx)(_i, {
                        rgPackageIDs: o.rgPackageIDs,
                        strButtonToken: "#AppPage_DLC_BuyAll",
                      }),
                    ],
                  }),
                !!y?.length && (0, t.jsx)(Ru, { appid: e, rgOptions: y }),
              ],
            }),
          });
        }
        function Qu(s) {
          const { bRevealed: e } = s,
            { appid: n, packageid: r, nHighlightReason: a } = s.row,
            { data: o } = (0, M.J$)({ appid: n }),
            { data: l } = (0, M.mr)(r ? { packageid: r } : void 0),
            c = a !== Bu,
            { data: m } = (0, M.lv)(c ? { appid: n } : void 0),
            f = (0, Ar.qz)({ appid: n });
          if (!o) return null;
          const y = Gu(a),
            v =
              m?.asset_url_format && m.small_capsule
                ? Ls(m.asset_url_format, m.small_capsule)
                : void 0;
          return (0, t.jsxs)(An.p, {
            storeItem: o,
            className: (0, ne.A)(
              en().Row,
              c && en().Highlight,
              e && en().Revealed,
            ),
            children: [
              c &&
                v &&
                (0, t.jsx)(Wn._, {
                  maxHeight: "87px",
                  flexGrow: "0",
                  src: v,
                  alt: o.name,
                }),
              (0, t.jsxs)(F.s, {
                direction: "column",
                align: "start",
                gap: "1",
                paddingEnd: "1",
                className: en().Name,
                children: [
                  f &&
                    (0, t.jsx)(j.EY, {
                      size: "1",
                      marginBottom: "1",
                      className: (0, ne.A)(en().Pill, Yu(f)),
                      children: (0, Ar.eI)(f),
                    }),
                  y &&
                    (0, t.jsx)(j.EY, {
                      size: "1",
                      className: (0, ne.A)(en().Pill, en().HighlightReason),
                      children: g.Localize(y),
                    }),
                  (0, t.jsx)(j.EY, { size: "3", children: o.name }),
                ],
              }),
              (0, t.jsxs)(ce.az, {
                flexShrink: "0",
                textAlign: "end",
                className: en().Price,
                children: [
                  o.is_free &&
                    (0, t.jsx)(j.EY, {
                      size: "4",
                      children: g.Localize("#AppPage_DLC_Free"),
                    }),
                  !o.is_free &&
                    (0, t.jsx)(Lo, {
                      bComingSoon: o.is_coming_soon,
                      purchaseOption: l,
                    }),
                  !o.is_free &&
                    l &&
                    (0, t.jsx)(qi.z, { purchaseOption: l, size: "inline" }),
                  !o.is_free &&
                    !l &&
                    (0, t.jsx)(j.EY, {
                      size: "4",
                      children: g.Localize("#AppPage_DLC_NoPrice"),
                    }),
                ],
              }),
            ],
          });
        }
        var Vu = i(72723),
          wn = i.n(Vu);
        function $u(s) {
          const {
              thisDLC: e,
              rgDependencies: n,
              rgPackageIDsToAdd: r,
              strTotalPrice: a,
            } = s,
            o = n.length == 1,
            { data: l } = (0, M.J$)({ appid: e.appid }),
            { data: c } = (0, M.J$)(o ? { appid: n[0].appid } : void 0);
          if (!l || n.length == 0 || (o && !c)) return null;
          d.use(g.Ready()), d.use(Je.d.Ready());
          const m = n[0].bRequired,
            f = o
              ? g.Localize(
                  m
                    ? "#AppPage_DLCDependency_RequiredTitle"
                    : "#AppPage_DLCDependency_RecommendedTitle",
                )
              : null,
            y = o
              ? g.Localize(
                  m
                    ? "#AppPage_DLCDependency_RequiredDesc"
                    : "#AppPage_DLCDependency_RecommendedDesc",
                  l.name || "",
                  c.name || "",
                )
              : g.Localize("#AppPage_DLCDependency_MultipleDesc", l.name || "");
          return (0, t.jsx)(d.Suspense, {
            children: (0, t.jsx)(Wo, {
              marginTop: "5",
              marginBottom: "5",
              buttonBarContents: (0, t.jsx)(Ju, {
                rgPackageIDs: r,
                strTotalPrice: a,
              }),
              children: (0, t.jsxs)(qt.YZ, {
                "flow-children": "column",
                className: wn().Body,
                children: [
                  f &&
                    (0, t.jsx)(j.EY, {
                      size: "6",
                      contrast: "title",
                      marginBottom: "2",
                      children: f,
                    }),
                  (0, t.jsx)(j.EY, {
                    size: "3",
                    children: (0, Be.xh)(
                      y,
                      (0, t.jsx)("b", {}),
                      (0, t.jsx)("b", {}),
                    ),
                  }),
                  (0, t.jsxs)(T.Z, {
                    "flow-children": "row",
                    className: wn().Capsules,
                    children: [
                      (0, t.jsx)(Uo, {
                        appid: e.appid,
                        packageid: e.packageid,
                        strCallout: g.Localize(
                          "#AppPage_DLCDependency_ThisDLC",
                        ),
                      }),
                      n.map((v) =>
                        (0, t.jsxs)(
                          d.Fragment,
                          {
                            children: [
                              (0, t.jsx)(ce.az, {
                                "aria-hidden": !0,
                                className: wn().Separator,
                                children: "+",
                              }),
                              (0, t.jsx)(Uo, {
                                appid: v.appid,
                                packageid: v.packageid,
                                strCallout: g.Localize(
                                  v.bRequired
                                    ? "#AppPage_DLCDependency_RequiredTab"
                                    : "#AppPage_DLCDependency_RecommendedTab",
                                ),
                              }),
                            ],
                          },
                          v.appid,
                        ),
                      ),
                    ],
                  }),
                ],
              }),
            }),
          });
        }
        function Ju(s) {
          const { rgPackageIDs: e, strTotalPrice: n } = s;
          return (0, t.jsxs)(F.s, {
            align: "center",
            gap: "1",
            className: wn().ActionGroup,
            children: [
              (0, t.jsx)(j.EY, {
                size: "3",
                className: wn().Total,
                children: n,
              }),
              (0, t.jsx)(_i, {
                rgPackageIDs: e,
                strButtonToken: "#AppPage_DLCDependency_AddAllToCart",
              }),
            ],
          });
        }
        function Uo(s) {
          const { appid: e, packageid: n, strCallout: r } = s,
            { data: a } = (0, M.J$)({ appid: e }),
            { data: o } = (0, M.lv)({ appid: e }),
            { data: l } = (0, M.mr)(n ? { packageid: n } : void 0);
          if (!a) return null;
          const c =
            o?.asset_url_format && o.small_capsule
              ? Ls(o.asset_url_format, o.small_capsule)
              : void 0;
          return (0, t.jsxs)(T.Z, {
            "flow-children": "column",
            className: wn().Item,
            children: [
              (0, t.jsx)(F.s, {
                justify: "center",
                position: "absolute",
                inset: "-16px 0 auto 0",
                className: wn().CalloutRow,
                children: (0, t.jsx)(j.EY, {
                  size: "1",
                  contrast: "title",
                  className: wn().Callout,
                  children: r,
                }),
              }),
              (0, t.jsxs)(An.p, {
                storeItem: a,
                className: wn().Link,
                children: [
                  c &&
                    (0, t.jsx)(Wn._, {
                      display: "block",
                      width: "100%",
                      src: c,
                      alt: a.name || "",
                    }),
                  (0, t.jsxs)(ce.az, {
                    children: [
                      a.is_free &&
                        (0, t.jsx)(j.EY, {
                          size: "3",
                          children: g.Localize("#AppPage_DLC_Free"),
                        }),
                      !a.is_free &&
                        l &&
                        (0, t.jsx)(qi.z, { purchaseOption: l, size: "inline" }),
                      !a.is_free &&
                        !l &&
                        (0, t.jsx)(j.EY, {
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
        var Co = i(96253),
          Zu = i(48205),
          yn = i.n(Zu),
          Xu = i(21690);
        function Hu(s) {
          const {
              appid: e,
              oTags: n,
              oCreatorLinks: r,
              reviewSummaryRecent: a,
              strIdForReviewSummary: o,
            } = s,
            l = new Map();
          for (const [m, f] of Object.entries(n)) l.set(m, f);
          const c = new Map();
          for (const [m, f] of Object.entries(r)) c.set(m, f);
          return (
            d.useLayoutEffect(() => {
              const m = document.querySelector("#summaryBarTop");
              m && (m.style.height = "unset");
            }, []),
            d.use(g.Ready()),
            (0, t.jsx)(d.Suspense, {
              children: (0, t.jsxs)(T.Z, {
                className: yn().SummaryBarTop,
                "flow-children": "grid",
                navEntryPreferPosition: de.iU.MAINTAIN_X,
                resetNavOnEntry: !0,
                children: [
                  (0, t.jsx)(nm, {
                    appid: e,
                    recent: a,
                    strIdForReviewSummary: o,
                  }),
                  (0, t.jsx)(qu, { appid: e }),
                  (0, t.jsx)(tm, { appid: e, mapTags: l }),
                  (0, t.jsx)(sm, { appid: e, mapCreatorLinks: c }),
                ],
              }),
            })
          );
        }
        function Dr(s) {
          const { children: e } = s;
          return (0, t.jsx)("div", {
            className: yn().Title,
            children: (0, t.jsx)(j.EY, { contrast: "title", children: e }),
          });
        }
        function qu(s) {
          const { appid: e } = s,
            n = d.useMemo(
              () => (0, se.Tc)("hardwarecompatibility", "application_config"),
              [],
            ),
            {
              bSteamDeck: r,
              bSteamOS: a,
              bSteamMachine: o,
              bSteamFrame: l,
            } = (0, Xu.Ec)(),
            [c, m] = d.useMemo(
              () =>
                o
                  ? [
                      on.JR,
                      g.Localize("#AppPage_SummaryBar_SteamMachineCompat"),
                    ]
                  : l
                    ? [
                        on.bY,
                        g.Localize("#AppPage_SummaryBar_SteamFrameCompat"),
                      ]
                    : a && !r
                      ? [on.c9, g.Localize("#AppPage_SummaryBar_SteamOSCompat")]
                      : [
                          on.ZJ,
                          g.Localize("#AppPage_SummaryBar_SteamDeckCompat"),
                        ],
              [r, a, o, l],
            );
          return n
            ? (0, t.jsxs)(T.Z, {
                className: (0, ne.A)(
                  yn().SummaryBarSection,
                  yn().SteamDeckCompat,
                ),
                children: [
                  (0, t.jsx)(Dr, { children: m }),
                  (0, t.jsx)(_a, {
                    className: yn().SteamDeckCompatContent,
                    appID: e,
                    results: n,
                    tab: c,
                  }),
                ],
              })
            : null;
        }
        function _u(s) {
          const e = s.Element?.getBoundingClientRect(),
            n = s.m_Parent?.Element?.getBoundingClientRect();
          return !e || !n ? !1 : e.bottom <= n.bottom;
        }
        function em(s) {
          const { tag: e } = s,
            n = (0, Jt.aL)(
              Y.TS.STORE_BASE_URL + `tags/${(0, Co.ut)(Y.TS.LANGUAGE)}/${e}`,
            );
          return (0, t.jsx)(L.Ii, {
            className: yn().Tag,
            href: n,
            fnCanTakeFocus: _u,
            children: (0, t.jsx)(ce.az, {
              background: "blue-5",
              paddingX: "1",
              paddingY: "0",
              children: (0, t.jsx)(j.EY, { color: "blue-8", children: e }),
            }),
          });
        }
        function tm(s) {
          const { appid: e, mapTags: n } = s;
          return (0, t.jsxs)(qt.YZ, {
            className: (0, ne.A)(yn().SummaryBarSection, yn().UserTags),
            focusable: !0,
            children: [
              (0, t.jsx)(Dr, {
                children: g.Localize("#AppPage_SummaryBar_UserTags"),
              }),
              (0, t.jsx)(T.Z, {
                className: yn().Tags,
                children: Array.from(n.entries()).map(([r, a]) =>
                  (0, t.jsx)(em, { tag: r }, r),
                ),
              }),
            ],
          });
        }
        function Ko(s) {
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
                  (0, t.jsx)(j.EY, {
                    contrast: "body",
                    children: g.Localize(e),
                  }),
                  " ",
                  (0, t.jsx)(j.EY, { color: "blue-8", children: n }),
                  " ",
                  (0, t.jsxs)(j.EY, {
                    contrast: "body",
                    children: [
                      "(",
                      g.Localize("#AppPage_ReviewStats", r, (0, js.D)(a)),
                      ")",
                    ],
                  }),
                ],
              });
        }
        function nm(s) {
          const { appid: e, recent: n, strIdForReviewSummary: r } = s,
            { data: a } = (0, M.ik)({ appid: e }),
            o = d.useCallback(() => {
              window.MoveFocusToId(r);
            }, [r]);
          return !a || !a.summary_filtered?.review_count
            ? null
            : (0, t.jsxs)(T.Z, {
                className: yn().SummaryBarSection,
                onActivate: o,
                children: [
                  (0, t.jsx)(Dr, {
                    children: g.Localize("#AppPage_SummaryBar_UserReviews"),
                  }),
                  (0, t.jsx)(Ko, {
                    label: "#AppPage_Reviews_AllTime",
                    reviewScoreDescription:
                      a.summary_filtered?.review_score_label,
                    percentage: a.summary_filtered.percent_positive,
                    count: a.summary_filtered.review_count,
                  }),
                  n &&
                    (0, t.jsx)(Ko, {
                      label: "#AppPage_Reviews_Recent",
                      reviewScoreDescription: n.description,
                      percentage: n.percentage,
                      count: n.count,
                    }),
                ],
              });
        }
        function sm(s) {
          const { appid: e, mapCreatorLinks: n } = s,
            { data: r } = (0, M.wl)({ appid: e }),
            { data: a } = (0, M.by)({ appid: e }),
            { data: o } = (0, M._F)({ appid: e }),
            l = o?.links_and_info?.manufacturers?.map((c) => ({ name: c }));
          return r
            ? (0, t.jsxs)(qt.YZ, {
                className: (0, ne.A)(yn().SummaryBarSection, yn().GameInfo),
                children: [
                  (0, t.jsx)(Dr, {
                    children: g.Localize("#AppPage_SummaryBar_GameInfo"),
                  }),
                  (0, t.jsx)("table", {
                    children: (0, t.jsxs)("tbody", {
                      children: [
                        (0, t.jsx)(ta, {
                          label: "#AppPage_SummaryBar_Developer",
                          strType: "developer",
                          rgCreators: r.developers,
                          mapCreatorLinks: n,
                        }),
                        (0, t.jsx)(ta, {
                          label: "#AppPage_SummaryBar_Publisher",
                          strType: "publisher",
                          rgCreators: r.publishers,
                          mapCreatorLinks: n,
                        }),
                        (0, t.jsx)(ta, {
                          label: "#AppPage_SummaryBar_Manufacturer",
                          strType: "manufacturer",
                          rgCreators: l,
                        }),
                        !!a?.steam_release_date &&
                          (0, t.jsxs)("tr", {
                            children: [
                              (0, t.jsx)("td", {
                                children: (0, t.jsx)(j.EY, {
                                  contrast: "body",
                                  children: g.Localize(
                                    "#AppPage_SummaryBar_ReleaseDate",
                                  ),
                                }),
                              }),
                              (0, t.jsx)("td", {
                                children: (0, t.jsx)(j.EY, {
                                  contrast: "body",
                                  children: (0, Ut._l)(a?.steam_release_date, {
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
        function rm(s) {
          const { creator: e, strType: n, mapCreatorLinks: r } = s,
            a = (0, Jt.aL)(r?.get(e.name)),
            o = (0, Jt.aL)(
              Y.TS.STORE_BASE_URL +
                `search/?${n}=${encodeURIComponent(e.name)}`,
            ),
            l = a || o;
          return (0, t.jsx)(L.Ii, {
            href: l,
            children: (0, t.jsx)(j.EY, {
              color: "blue-8",
              whiteSpace: "nowrap",
              children: e.name,
            }),
          });
        }
        function ta(s) {
          const { label: e, strType: n, rgCreators: r, mapCreatorLinks: a } = s,
            o = 4;
          return !r || r.length == 0
            ? null
            : (0, t.jsxs)("tr", {
                children: [
                  (0, t.jsx)("td", {
                    children: (0, t.jsx)(j.EY, {
                      contrast: "body",
                      children: g.Localize(e),
                    }),
                  }),
                  (0, t.jsx)("td", {
                    children: (0, t.jsx)(T.Z, {
                      children: (0, t.jsxs)(j.EY, {
                        contrast: "body",
                        lineClamp: 3,
                        children: [
                          ea(
                            r.slice(0, o),
                            (l) =>
                              (0, t.jsx)(
                                rm,
                                { strType: n, creator: l, mapCreatorLinks: a },
                                l.creator_clan_account_id || l.name,
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
        function im(s) {
          const e = (0, ze.jE)();
          return (
            d.useEffect(() => {
              const { rgPayloads: n, markReady: r } = s;
              for (let a of n || [])
                for (let o of a.rgStoreItems || [])
                  (0, M.vB)(e, o, a.dataRequestStoreItems);
              r();
            }, [e, s]),
            null
          );
        }
        var am = i(9246),
          Go = i.n(am),
          om = i(2259),
          lm = i(8611),
          bn = i.n(lm);
        function na(s) {
          const { children: e, className: n } = s,
            {
              setExpanded: r,
              refContents: a,
              bCollapsible: o,
              refPanel: l,
              bExpanded: c,
              bCollapsed: m,
            } = Yo(),
            f = d.useCallback(() => {
              r(!c);
            }, [c, r]);
          return (0, t.jsx)(T.Z, {
            ref: l,
            className: (0, ne.A)(bn().AutoCollapsePanel, n),
            focusableIfEmpty: !0,
            onActivate: o ? f : void 0,
            children: (0, t.jsxs)(
              T.Z,
              {
                focusable: o,
                children: [
                  (0, t.jsx)("div", {
                    ref: a,
                    className: (0, ne.A)(
                      bn().Contents,
                      m && bn().Collapsed,
                      c && bn().Expanded,
                    ),
                    children: e,
                  }),
                  o &&
                    (0, t.jsx)("div", {
                      className: bn().ReadMore,
                      children: g.Localize(
                        c ? "#btn_read_less" : "#btn_read_more",
                      ),
                    }),
                ],
              },
              m ? "collapsed" : "expanded",
            ),
          });
        }
        function sa(s) {
          const { children: e, className: n } = s,
            {
              setExpanded: r,
              refContents: a,
              bCollapsible: o,
              refPanel: l,
              bExpanded: c,
              bCollapsed: m,
            } = Yo(),
            f = d.useCallback(
              (v) => {
                v && r(!0);
              },
              [r],
            ),
            y = d.useCallback(() => {
              r(!1);
            }, [r]);
          return (0, t.jsxs)(qt.YZ, {
            ref: l,
            className: (0, ne.A)(bn().AutoCollapsePanel, n),
            onExplicitFocusLevelChanged: o ? f : void 0,
            children: [
              (0, t.jsx)("div", {
                ref: a,
                className: (0, ne.A)(
                  bn().Contents,
                  m && bn().Collapsed,
                  c && bn().Expanded,
                ),
                children: e,
              }),
              o &&
                !c &&
                (0, t.jsx)("div", {
                  className: bn().ReadMore,
                  children: g.Localize("#btn_read_more"),
                }),
              o &&
                c &&
                (0, t.jsx)(T.Z, {
                  className: bn().ReadMore,
                  onActivate: y,
                  children: g.Localize("#btn_read_less"),
                }),
            ],
          });
        }
        function Yo() {
          const [s, e] = d.useState(!1),
            [n, r] = d.useState(!1),
            a = d.useRef(null),
            o = d.useRef(!1),
            l = d.useCallback(
              (y) => {
                s || r(y.target.scrollHeight > y.target.clientHeight);
              },
              [s],
            ),
            c = (0, om.wY)(l),
            m = n && !s;
          return (
            d.useLayoutEffect(() => {
              o.current &&
                !s &&
                a.current?.scrollIntoView({ block: "nearest" }),
                (o.current = !1);
            }, [s]),
            {
              setExpanded: d.useCallback(
                (y) => {
                  e(y), y || (o.current = !0);
                },
                [e, o],
              ),
              refContents: c,
              refPanel: a,
              bCollapsed: m,
              bExpanded: s,
              bCollapsible: n,
            }
          );
        }
        function cm(s) {
          const { appid: e } = s,
            { data: n } = (0, M.J$)({ appid: e }),
            { data: r } = (0, M.LM)({ appid: e });
          return (
            d.use(g.Ready()),
            !n || n.type == null || !r
              ? null
              : (0, t.jsxs)(na, {
                  className: Go().AboutThisGame,
                  "flow-children": "column",
                  children: [
                    (0, t.jsx)("h2", {
                      className: Go().Header,
                      children: g.Localize(
                        g.GetAppTypeLocKey("#About_This", n.type),
                      ),
                    }),
                    (0, t.jsx)(xs.n, { text: r }),
                  ],
                })
          );
        }
        var dm = i(11512),
          um = i(38404),
          ln = i.n(um);
        const mm = {
          1: "date_full",
          2: "date_month",
          3: "date_quarter",
          4: "date_year",
        };
        function gm(s) {
          const e = s.release_from_early_access_date,
            n = mm[s.release_from_early_access_style];
          return !e || !n ? "" : (0, dm.M)(n, e);
        }
        function pm(s) {
          const { appid: e, staleUpdate: n, bIsAppEditor: r } = s,
            { data: a } = (0, M.J$)({ appid: e }),
            { data: o } = (0, M.by)({ appid: e }),
            { data: l } = (0, M._F)({ appid: e }),
            [c, m] = d.useState(!1),
            f = d.useCallback(() => m((I) => !I), []);
          if ((d.use(g.Ready()), !a || !o)) return null;
          const y = a.type == oe.uE.Sv,
            v = !!o.is_coming_soon,
            b = gm(o);
          let B = "#AppPage_EarlyAccess_Header",
            S = "#AppPage_EarlyAccess_BannerDesc";
          return (
            v
              ? ((B = "#AppPage_EarlyAccess_Header_Soon"),
                (S = "#AppPage_EarlyAccess_BannerDesc_Soon"))
              : y &&
                ((B = "#AppPage_EarlyAccess_Header_Software"),
                (S = "#AppPage_EarlyAccess_BannerDesc_Software")),
            (0, t.jsxs)(qt.YZ, {
              className: ln().EarlyAccess,
              "flow-children": "column",
              children: [
                !!b &&
                  (0, t.jsx)("div", {
                    className: ln().LeavingEarlyAccess,
                    children: g.Localize("#AppPage_EarlyAccess_LeaveWhen", b),
                  }),
                (0, t.jsxs)(T.Z, {
                  className: ln().Banner,
                  "flow-children": "column",
                  children: [
                    (0, t.jsx)("h2", {
                      className: ln().Title,
                      children: g.Localize(B),
                    }),
                    (0, t.jsx)("p", {
                      className: ln().Desc,
                      children: g.Localize(S),
                    }),
                    (0, t.jsx)(Xe.W, {
                      onClick: f,
                      children: g.Localize(
                        c
                          ? "#AppPage_EarlyAccess_ShowLess"
                          : "#AppPage_EarlyAccess_ShowMore",
                      ),
                    }),
                    c &&
                      (0, t.jsx)(fm, {
                        earlyAccess: l?.early_access,
                        staleUpdate: n,
                        bIsAppEditor: r,
                        bSoftware: y,
                      }),
                  ],
                }),
              ],
            })
          );
        }
        function fm(s) {
          const {
              earlyAccess: e,
              staleUpdate: n,
              bIsAppEditor: r,
              bSoftware: a,
            } = s,
            o = `${Y.TS.STORE_BASE_URL}earlyaccessfaq/`,
            l = !!e?.description_bbcode;
          let c;
          l
            ? (c = [
                {
                  text: e?.description_bbcode,
                  tokenHeader: "#AppPage_EarlyAccess_WhatDevsSay",
                },
              ])
            : (c = [
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
          const m = c.some((f) => !!f.text);
          return (0, t.jsxs)(T.Z, {
            className: ln().Details,
            "flow-children": "column",
            children: [
              (0, t.jsxs)("p", {
                className: ln().Warn,
                children: [
                  g.Localize(
                    a
                      ? "#AppPage_EarlyAccess_Warn_Software"
                      : "#AppPage_EarlyAccess_Warn",
                  ),
                  " ",
                  (0, t.jsx)(L.Ii, {
                    className: ln().Link,
                    href: o,
                    children: g.Localize("#AppPage_EarlyAccess_LearnMore"),
                  }),
                ],
              }),
              !!n && (0, t.jsx)(ym, { staleUpdate: n, bIsAppEditor: r }),
              m &&
                (0, t.jsxs)(t.Fragment, {
                  children: [
                    !l &&
                      (0, t.jsx)("div", {
                        className: ln().DevsSay,
                        children: g.Localize(
                          "#AppPage_EarlyAccess_WhatDevsSay",
                        ),
                      }),
                    c.map((f, y) =>
                      (0, t.jsx)(
                        hm,
                        { text: f.text, tokenHeader: f.tokenHeader },
                        y,
                      ),
                    ),
                  ],
                }),
            ],
          });
        }
        function hm(s) {
          const { text: e, tokenHeader: n } = s;
          return e
            ? (0, t.jsxs)(t.Fragment, {
                children: [
                  (0, t.jsx)("h3", {
                    className: ln().Question,
                    children: g.Localize(n),
                  }),
                  (0, t.jsx)("div", {
                    className: ln().Answer,
                    children: (0, Be.xh)(
                      g.Localize("#AppPage_EarlyAccess_Quote"),
                      (0, t.jsx)(xs.n, { text: e }),
                    ),
                  }),
                ],
              })
            : null;
        }
        function ym(s) {
          const { staleUpdate: e, bIsAppEditor: n } = s,
            { nMonthsAgo: r, bNoUpdatesEverPublished: a } = e;
          let o;
          if (!r && a) o = g.Localize("#AppPage_EarlyAccess_NoUpdates");
          else if (r && r > 24) {
            const l = Math.floor(r / 12);
            o = g.LocalizePlural("#AppPage_EarlyAccess_StaleYears", l);
          } else o = g.LocalizePlural("#AppPage_EarlyAccess_StaleMonths", r);
          return (0, t.jsxs)("div", {
            className: ln().Stale,
            children: [
              o,
              " ",
              g.Localize("#AppPage_EarlyAccess_StaleWarning2"),
              n &&
                (0, t.jsx)("div", {
                  className: ln().StaleDevs,
                  children: (0, Be.xh)(
                    g.Localize("#AppPage_EarlyAccess_StaleDevs"),
                    (0, t.jsx)(L.Ii, {
                      className: ln().Link,
                      href: `${Y.TS.PARTNER_BASE_URL}doc/store/earlyaccess#update_notice`,
                    }),
                  ),
                }),
            ],
          });
        }
        var vm = i(14844),
          ra = i.n(vm);
        function xm(s) {
          const { appid: e } = s,
            { data: n } = (0, M._F)({ appid: e });
          d.use(g.Ready());
          const r = n?.section;
          return r?.length
            ? (0, t.jsx)("div", {
                className: ra().PageSections,
                children: r.map((a, o) => (0, t.jsx)(jm, { section: a }, o)),
              })
            : null;
        }
        function jm(s) {
          const { label: e, content_bbcode: n, banner: r } = s.section;
          return (0, t.jsxs)(na, {
            className: ra().PageSection,
            "flow-children": "column",
            children: [
              e && (0, t.jsx)("h2", { className: ra().Header, children: e }),
              n && (0, t.jsx)(xs.n, { text: n }),
            ],
          });
        }
        var bm = i(45200),
          Bm = i.n(bm);
        function Em(s) {
          const { appid: e } = s,
            { data: n } = (0, M._F)({ appid: e });
          return (
            d.use(g.Ready()),
            n?.legal_notice_bbcode
              ? (0, t.jsx)(sa, {
                  className: Bm().LegalNotice,
                  children: (0, t.jsx)(xs.n, {
                    text: n.legal_notice_bbcode,
                    bBypassLinkFilter: !0,
                  }),
                })
              : null
          );
        }
        function Pm(s) {
          const { appid: e } = s,
            { data: n } = (0, M._F)({ appid: e }),
            r = n?.press_review;
          return r?.length
            ? (d.use(g.Ready()),
              (0, t.jsx)(ce.az, {
                marginTop: "5",
                children: (0, t.jsxs)(qt.YZ, {
                  children: [
                    (0, t.jsx)(dn.D, {
                      level: "2",
                      size: "2",
                      weight: "heavy",
                      contrast: "title",
                      children: g.Localize("#AppPage_PressReviews_Header"),
                    }),
                    r.map((a, o) => (0, t.jsx)(Tm, { review: a }, o)),
                  ],
                }),
              }))
            : null;
        }
        function Tm(s) {
          const { quote: e, score: n, site: r, url: a } = s.review;
          let o = e;
          e && r && (o = g.Localize("#AppPage_PressReviews_Quote", e));
          let l = r;
          r &&
            a &&
            (l = (0, t.jsx)(Xe.Y, { href: a, color: "blue-8", children: r }));
          let c = l;
          return (
            n && r
              ? (c = g.LocalizeReact("#AppPage_PressReviews_Attribution", n, l))
              : n && (c = n),
            (0, t.jsxs)(ce.az, {
              marginBottom: "3",
              children: [
                o && (0, t.jsx)(j.EY, { as: "div", size: "2", children: o }),
                c && (0, t.jsx)(j.EY, { as: "div", size: "2", children: c }),
              ],
            })
          );
        }
        function ko(s) {
          const { strHeading: e, strIntro: n, strBody: r } = s;
          return (0, t.jsx)(ce.az, {
            maxWidth: "100%",
            marginTop: "5",
            children: (0, t.jsxs)(na, {
              children: [
                (0, t.jsx)(dn.D, {
                  level: "2",
                  size: "2",
                  weight: "heavy",
                  contrast: "title",
                  children: e,
                }),
                (0, t.jsx)(j.EY, {
                  as: "p",
                  size: "3",
                  marginTop: "3",
                  children: n,
                }),
                (0, t.jsx)(j.EY, {
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
        function Sm(s) {
          const { appid: e } = s,
            { data: n } = (0, M._F)({ appid: e }),
            r = n?.content_survey_ai_notes;
          return r
            ? (d.use(g.Ready()),
              (0, t.jsx)(ko, {
                strHeading: g.Localize("#AppPage_AIDisclosure_Header"),
                strIntro: g.Localize("#AppPage_AIDisclosure_Intro"),
                strBody: r,
              }))
            : null;
        }
        var Bn = i(32093),
          Mm = i(84346),
          Un = i(18735);
        const Im = null,
          Qo = [
            {
              descid: Un.ED,
              parentDescID: 0,
              strNameToken: "#ContentDescriptor_GeneralMatureContent",
              strUserDescToken:
                "#ContentDescriptor_GeneralMatureContent_Description",
              bAllowSearch: !0,
              bCustomerFacing: !0,
              bAdultsOnly: !1,
            },
            {
              descid: Un.M,
              parentDescID: Un.ED,
              strNameToken: "#ContentDescriptor_FrequentViolenceOrGore",
              strUserDescToken:
                "#ContentDescriptor_FrequentViolenceOrGore_Description",
              bAllowSearch: !0,
              bCustomerFacing: !0,
              bAdultsOnly: !1,
            },
            {
              descid: Un.mx,
              parentDescID: Un.ED,
              strNameToken: "#ContentDescriptor_NudityOrSexualContent",
              strUserDescToken:
                "#ContentDescriptor_NudityOrSexualContent_Description",
              bAllowSearch: !0,
              bCustomerFacing: !0,
              bAdultsOnly: !1,
            },
            {
              descid: Un.T4,
              parentDescID: Un.mx,
              strNameToken:
                "#ContentDescriptor_GratuitousNudityOrSexualContent",
              strUserDescToken:
                "#ContentDescriptor_GratuitousNudityOrSexualContent_Description",
              bAllowSearch: !0,
              bCustomerFacing: !0,
              bAdultsOnly: !0,
            },
            {
              descid: Un.u7,
              parentDescID: Un.T4,
              strNameToken: "#ContentDescriptor_AdultOnlySexualContent",
              strUserDescToken:
                "#ContentDescriptor_AdultOnlySexualContent_Description",
              bAllowSearch: !0,
              bCustomerFacing: !0,
              bAdultsOnly: !0,
            },
          ];
        function _f() {
          return Qo;
        }
        function ia(s) {
          return Qo.find((e) => e.descid === s);
        }
        function eh(s) {
          return s.some((e) => ia(e)?.bAdultsOnly);
        }
        function Lm(s, e) {
          return !s.bAdultsOnly || !Im.includes(e);
        }
        function th(s, e) {
          return e.some((n) => {
            const r = ia(n);
            return r && !Lm(r, s);
          });
        }
        function Am(s) {
          const { appid: e } = s,
            { data: n } = (0, M.J$)({ appid: e }),
            { data: r } = (0, M.x2)({ appid: e }),
            a = n?.content_descriptorids;
          if (
            !n ||
            n.type == null ||
            !a?.length ||
            r === void 0 ||
            (0, Bn.nA)(se.TS.EREALM)
          )
            return null;
          d.use(g.Ready()), d.use(ge.Z.Ready());
          let o = r?.content_survey_notes;
          if (!o) {
            const l = [];
            for (const c of a) {
              const m = ia(c);
              m?.bCustomerFacing && l.push(ge.Z.Localize(m.strNameToken));
            }
            o = g.Localize(
              g.GetAppTypeLocKey("#AppPage_MatureContent_Descriptors", n.type),
              new Intl.ListFormat((0, Mm.J)(), {
                type: "unit",
                style: "short",
              }).format(l),
            );
          }
          return (0, t.jsx)(ko, {
            strHeading: g.Localize("#AppPage_MatureContent_Header"),
            strIntro: g.Localize("#AppPage_AgeGate_DescriptorNotes"),
            strBody: o,
          });
        }
        const Om = [
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
        function zm(s) {
          const { appid: e } = s,
            { data: n } = (0, M._F)({ appid: e }),
            r = n?.cast_and_crew,
            a = Om.filter(({ role: o }) => r?.[o]?.length);
          return !r || !a.length
            ? null
            : (d.use(g.Ready()),
              (0, t.jsx)(ce.az, {
                marginTop: "5",
                children: (0, t.jsxs)(sa, {
                  children: [
                    (0, t.jsx)(dn.D, {
                      level: "2",
                      size: "2",
                      weight: "heavy",
                      contrast: "title",
                      children: g.Localize("#AppPage_CastAndCrew_Header"),
                    }),
                    (0, t.jsx)(As.x, {
                      columns: "150px 1fr",
                      marginTop: "2",
                      children: a.map(({ role: o, strTitleToken: l }) =>
                        (0, t.jsx)(
                          Nm,
                          { strTitle: g.Localize(l), rgNames: r[o] },
                          o,
                        ),
                      ),
                    }),
                  ],
                }),
              }));
        }
        function Nm(s) {
          const { strTitle: e, rgNames: n } = s;
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)(j.EY, {
                as: "div",
                size: "4",
                weight: "heavy",
                contrast: "subtitle",
                children: e,
              }),
              (0, t.jsx)(j.EY, {
                as: "div",
                size: "4",
                contrast: "subtitle",
                children: ea(n, (r, a) => (0, t.jsx)(Dm, { strName: r }, a), {
                  type: "unit",
                  style: "short",
                }),
              }),
            ],
          });
        }
        function Dm(s) {
          const { strName: e } = s,
            n = (0, Jt.aL)(
              `${se.TS.STORE_BASE_URL}search/?term=${encodeURIComponent(e)}`,
            );
          return (0, t.jsx)(Xe.Y, { href: n, contrast: "title", children: e });
        }
        var Fm = i(92757),
          Rm = i(5827),
          Wm = i(54806),
          aa = i(98001),
          qs = i(93191),
          _s = i(85978),
          oa = i(58612);
        function Fr(s, e = !1) {
          return (s / 60).toFixed(e || s < 1200 ? 1 : 0);
        }
        function wm(s) {
          const { data: e } = (0, M.J$)({ appid: s }),
            n = (0, Wt.AP)(s),
            { data: r } = (0, oa.Nd)(n),
            a = r?.your_info;
          if (!a?.owned || !a.minutes_played_forever) return null;
          const o = !!e?.categories?.feature_categoryids?.includes(ue.Vb8);
          return {
            nMinutesForever: a.minutes_played_forever,
            nMinutesLastTwoWeeks: a.minutes_played ?? 0,
            bShowStatsLinks: o && !(0, Bn.nA)(Y.TS.EREALM),
            nSteamworksAppid: n,
          };
        }
        function Um(s) {
          const {
              nMinutesForever: e,
              nMinutesLastTwoWeeks: n,
              bShowStatsLinks: r,
              nSteamworksAppid: a,
            } = s.stats,
            { data: o } = (0, _s.jn)(Y.iA.steamid);
          d.use(g.Ready());
          const l = `${(0, qs.n)(o, Y.iA.steamid)}/stats/appid/${a}`,
            c = (0, aa.v)({ appid: a });
          return (0, t.jsxs)(F.s, {
            direction: "column",
            children: [
              (0, t.jsxs)(j.EY, {
                size: "3",
                color: "slate-11",
                children: [
                  n > 0 &&
                    `${g.Localize("#AppPage_MyActivity_HoursLastTwoWeeks", Fr(n))} / `,
                  g.Localize("#AppPage_MyActivity_HoursOnRecord", Fr(e)),
                ],
              }),
              r &&
                (0, t.jsxs)(F.s, {
                  gap: "2",
                  children: [
                    (0, t.jsx)(Xe.Y, {
                      size: "3",
                      color: "blue-8",
                      href: l,
                      children: g.Localize("#AppPage_MyActivity_ViewStats"),
                    }),
                    (0, t.jsx)(Xe.Y, {
                      size: "3",
                      color: "blue-8",
                      href: c,
                      children: g.Localize(
                        "#AppPage_MyActivity_ViewGlobalStats",
                      ),
                    }),
                  ],
                }),
            ],
          });
        }
        var Cm = i(80974),
          Rr = i.n(Cm);
        function Vo(s) {
          return ((0, Bn.nA)(Y.TS.EREALM) ? "steamchina://" : "steam://") + s;
        }
        function Km(s) {
          const {
              appid: e,
              bOwned: n,
              masterSub: r,
              timedTrial: a,
              playAppid: o,
            } = s,
            { data: l } = (0, M.J$)({ appid: e }),
            c = wm(e);
          if (!l || (!n && !c)) return null;
          d.use(g.Ready());
          const m = l.type == oe.uE.Hk,
            f = !!a && a.nSecondsRemaining == 0 && !!r?.subscription,
            y = n && !m && !f;
          return (0, t.jsxs)(F.s, {
            direction: "column",
            paddingX: "5",
            paddingY: "3",
            background: "greyneutral-2 80%",
            children: [
              n && r && (0, t.jsx)(Ym, { masterSub: r, bTrial: !!a }),
              n && !r && (0, t.jsx)(Gm, { strAppName: l.name ?? "" }),
              n && f && (0, t.jsx)(Qm, { subscription: r.subscription }),
              y &&
                (0, t.jsx)(km, {
                  strAppName: l.name ?? "",
                  masterSub: r,
                  timedTrial: a,
                }),
              (0, t.jsxs)(T.Z, {
                className: Rr().Actions,
                "flow-children": "row",
                children: [
                  y &&
                    o !== null &&
                    (0, t.jsx)(Vm, { appid: o, eType: l.type }),
                  y &&
                    !!a &&
                    (0, t.jsx)($m, { nSecondsRemaining: a.nSecondsRemaining }),
                  !!c && (0, t.jsx)(Um, { stats: c }),
                ],
              }),
            ],
          });
        }
        function $o() {
          return (0, t.jsxs)(F.s, {
            className: Rr().InLibraryFlag,
            gap: "1",
            flexShrink: "0",
            align: "center",
            height: "18px",
            paddingX: "1",
            background: "storegreen-10",
            children: [
              (0, t.jsx)(Ve.wpD, { className: Rr().InLibrarySVG }),
              (0, t.jsx)(j.EY, {
                size: "1",
                color: "slate-1",
                children: g.Localize("#AppPage_Owned_InLibraryFlag"),
              }),
            ],
          });
        }
        function Gm(s) {
          const { strAppName: e } = s;
          return (0, t.jsxs)(F.s, {
            gap: "2",
            justify: "between",
            paddingBottom: "3",
            className: Rr().InLibraryRow,
            children: [
              (0, t.jsx)(j.EY, {
                size: "4",
                color: "storegreen-10",
                children: g.Localize("#AppPage_Owned_AlreadyInLibrary", e),
              }),
              (0, t.jsx)($o, {}),
            ],
          });
        }
        function Ym(s) {
          const { masterSub: e, bTrial: n } = s,
            { strPackageName: r, subscription: a } = e,
            o = n
              ? "#AppPage_Owned_MasterSubTrialHeader"
              : "#AppPage_Owned_MasterSubHeader";
          return (0, t.jsxs)(F.s, {
            align: "center",
            gap: "2",
            children: [
              a?.strBadgeImage
                ? (0, t.jsx)(F.s, {
                    background: "blue-7",
                    justify: "center",
                    align: "center",
                    paddingY: "1",
                    paddingLeft: "2",
                    paddingRight: "5",
                    children: (0, t.jsx)(Wn._, {
                      src: a.strBadgeImage,
                      alt: "",
                      height: "18px",
                    }),
                  })
                : (0, t.jsx)($o, {}),
              (0, t.jsx)(ce.az, {
                flexGrow: "0",
                children: (0, t.jsx)(j.EY, {
                  size: "4",
                  color: "storegreen-10",
                  children: g.Localize(o, r),
                }),
              }),
              !!a &&
                (0, t.jsx)(ce.az, {
                  flexShrink: "0",
                  children: (0, t.jsx)(Xe.Y, {
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
        function km(s) {
          const { strAppName: e, masterSub: n, timedTrial: r } = s,
            a = n?.subscription;
          let o = null;
          if (r) {
            const l = (0, Ut.Hq)(r.nSecondsAllowed, { eSuffix: Ut.a8.None });
            a
              ? (o = (0, Be.xh)(
                  g.Localize("#AppPage_Owned_TrialWithMasterSub", l, a.strName),
                  (0, t.jsx)(Xe.Y, { href: a.strInfoURL }),
                ))
              : (o = g.Localize("#AppPage_Owned_TrialFree", e, l));
          } else
            a &&
              (o = (0, Be.xh)(
                g.Localize("#AppPage_Owned_MasterSubDesc", a.strName),
                (0, t.jsx)(Xe.Y, { href: a.strInfoURL }),
              ));
          return o
            ? (0, t.jsx)(j.EY, { size: "3", marginTop: "3", children: o })
            : null;
        }
        function Qm(s) {
          const { subscription: e } = s;
          return (0, t.jsx)(j.EY, {
            size: "3",
            marginTop: "3",
            children: (0, Be.xh)(
              g.Localize("#AppPage_Owned_TrialEnded", e.strName),
              (0, t.jsx)(Xe.Y, { href: e.strInfoURL }),
            ),
          });
        }
        function Vm(s) {
          const { appid: e, eType: n } = s;
          let r = "#AppPage_Owned_Play";
          return (
            n == oe.uE.Sv
              ? (r = "#AppPage_Owned_Use")
              : n == oe.uE.Wz
                ? (r = "#AppPage_Owned_Watch")
                : n == oe.uE.Ov && (r = "#AppPage_Owned_PlayMusic"),
            (0, t.jsx)(Ze.v, {
              focusable: !0,
              color: "blue",
              href: Vo(`launch/${e}/Dialog`),
              children: g.Localize(r),
            })
          );
        }
        function $m(s) {
          const { nSecondsRemaining: e } = s;
          return e <= 0
            ? null
            : (0, t.jsx)(j.EY, {
                size: "4",
                color: "text-light",
                children: (0, Ut.Hq)(e, { eSuffix: Ut.a8.Remaining }),
              });
        }
        const Jm = {
            [oe.fj.ur]: void 0,
            [oe.fj.TV]: "#AppPage_Series_Type_Episode",
            [oe.fj.fH]: "#AppPage_Series_Type_Chapter",
            [oe.fj.hl]: "#AppPage_Series_Type_Bonus",
            [oe.fj.ej]: "#AppPage_Series_Type_BehindTheScenes",
            [oe.fj.h_]: "#AppPage_Series_Type_Deleted",
          },
          Zm = {
            [oe.wi.Q9]: "#AppPage_Series_ExtrasNote_Purchase",
            [oe.wi.NY]: "#AppPage_Series_ExtrasNote_Rental",
            [oe.wi.I]: "#AppPage_Series_ExtrasNote_PurchaseRental",
            [oe.wi.JT]: "#AppPage_Series_ExtrasNote_PurchaseSpecialEdition",
            [oe.wi.LG]: "#AppPage_Series_ExtrasNote_PurchaseDeluxeEdition",
          };
        function Jo(s) {
          return s === oe.fj.TV || s === oe.fj.fH;
        }
        const Xm = {
          "#Season_Number": "#AppPage_Series_SeasonName_Season",
          "#Section_Number": "#AppPage_Series_SeasonName_Section",
          "#Volume_Number": "#AppPage_Series_SeasonName_Volume",
          "#Tutorial_Content": "#AppPage_Series_SeasonName_TutorialContent",
          "#Additional_Content": "#AppPage_Series_SeasonName_AdditionalContent",
          "#Series_Content": "#AppPage_Series_ContentTitle",
          "#Extra_Content": "#AppPage_Series_ExtraContent",
        };
        function Zo(s) {
          const e = s.name && Xm[s.name];
          return e ? g.Localize(e, s.index || 0) : s.name;
        }
        function Xo(s, e) {
          const n = (0, Rm.eG)();
          return (0, Wm.E)({ queries: s.map((r) => e(n, r)) });
        }
        function Hm(s) {
          const { appid: e } = s,
            { season: n, episode: r } = (0, Fm.g)();
          return (0, t.jsx)(qm, {
            appid: e,
            nRequestedSeason: n ? Number(n) : void 0,
            nRequestedEpisode: r ? Number(r) : void 0,
          });
        }
        function qm(s) {
          const { appid: e, nRequestedSeason: n, nRequestedEpisode: r } = s,
            { data: a } = (0, M.J$)({ appid: e }),
            { data: o } = (0, M._F)({ appid: e }),
            { data: l } = (0, M.lv)({ appid: e }),
            c = o?.seasons || [],
            [m, f] = d.useState(c.some((S) => S.index === n) ? n : c[0]?.index),
            [y, v] = d.useState(!1);
          if (!a || (!c.length && a.type !== oe.uE.gQ)) return null;
          if ((d.use(g.Ready()), !c.length))
            return (0, t.jsxs)(ce.az, {
              marginTop: "5",
              children: [
                (0, t.jsx)(dn.D, {
                  level: "2",
                  size: "2",
                  weight: "heavy",
                  contrast: "title",
                  children: g.Localize("#AppPage_Series_ContentTitle"),
                }),
                (0, t.jsx)(j.EY, {
                  as: "p",
                  size: "4",
                  contrast: "subtitle",
                  children: g.Localize("#AppPage_Series_NoContent"),
                }),
              ],
            });
          const b = c.find((S) => S.index === m) || c[0],
            B = (S) => {
              f(S), v(!0);
            };
          return (0, t.jsx)(ce.az, {
            marginTop: "5",
            children: (0, t.jsxs)(T.Z, {
              "flow-children": "column",
              children: [
                (0, t.jsx)(dn.D, {
                  level: "2",
                  size: "2",
                  weight: "heavy",
                  contrast: "title",
                  children:
                    c.length > 1
                      ? g.Localize("#AppPage_Series_ContentTitle")
                      : Zo(b),
                }),
                c.length > 1 &&
                  (0, t.jsx)(F.s, {
                    wrap: "wrap",
                    gap: "2",
                    marginTop: "2",
                    children: c.map((S) =>
                      (0, t.jsx)(
                        Ze.$,
                        {
                          variant: S === b ? "default" : "outline",
                          onClick: () => B(S.index),
                          children: Zo(S),
                        },
                        S.index,
                      ),
                    ),
                  }),
                a.type === oe.uE.Wz &&
                  (0, t.jsx)(_m, {
                    appName: a.name,
                    season: b,
                    eNote: o?.video_extras_note,
                  }),
                (0, t.jsx)(
                  eg,
                  {
                    season: b,
                    series: a,
                    strSeriesHeaderImage:
                      l?.asset_url_format && l.header
                        ? Ls(l.asset_url_format, l.header)
                        : void 0,
                    bFocusFirstEpisode: y,
                    nActiveEpisode: !y && b.index === n ? (r ?? 0) : 0,
                  },
                  b.index,
                ),
              ],
            }),
          });
        }
        function _m(s) {
          const { appName: e, season: n, eNote: r } = s,
            a = Xo(
              (n.episode_appids || []).map((c) => ({ appid: c })),
              M.po,
            );
          let o = 0,
            l = 0;
          for (const { data: c } of a)
            c?.episode?.type !== void 0 && !Jo(c.episode.type) && o++,
              (l += c?.running_time_minutes || 0);
          return (0, t.jsxs)(ce.az, {
            marginTop: "2",
            children: [
              (0, t.jsx)(j.EY, {
                as: "div",
                size: "3",
                contrast: "description",
                children: g.LocalizePlural(
                  "#AppPage_Series_ExtrasSummary",
                  o,
                  l,
                ),
              }),
              (0, t.jsx)(j.EY, {
                as: "div",
                size: "3",
                contrast: "subtitle",
                marginTop: "1",
                children: g.Localize(Zm[r ?? oe.wi.Q9], e || ""),
              }),
            ],
          });
        }
        function eg(s) {
          const {
              season: e,
              series: n,
              strSeriesHeaderImage: r,
              bFocusFirstEpisode: a,
              nActiveEpisode: o,
            } = s,
            l = e.episode_appids || [],
            c = Xo(
              l.map((m) => ({ appid: m })),
              M.us,
            );
          return (0, t.jsx)(ce.az, {
            marginTop: "3",
            children: (0, t.jsxs)(qt.YZ, {
              "flow-children": "column",
              children: [
                c.every(({ data: m, isPending: f }) => !f && !m?.visible) &&
                  (0, t.jsx)(j.EY, {
                    as: "div",
                    size: "3",
                    contrast: "subtitle",
                    marginBottom: "2",
                    children: (0, Be.xh)(
                      g.Localize("#AppPage_Series_SeasonNotAvailable"),
                      (0, t.jsx)("b", {}),
                    ),
                  }),
                l.map((m, f) =>
                  (0, t.jsx)(
                    tg,
                    {
                      appid: m,
                      nSeason: e.index || 0,
                      nPosition: f + 1,
                      series: n,
                      strSeriesHeaderImage: r,
                      bActive: f + 1 === o,
                      bAutoFocus: a && f === 0,
                    },
                    m,
                  ),
                ),
              ],
            }),
          });
        }
        function tg(s) {
          const {
              appid: e,
              nSeason: n,
              nPosition: r,
              series: a,
              strSeriesHeaderImage: o,
              bActive: l,
              bAutoFocus: c,
            } = s,
            m = d.useRef(null),
            { data: f } = (0, M.J$)({ appid: e }),
            { data: y } = (0, M.wl)({ appid: e }),
            { data: v } = (0, M.by)({ appid: e }),
            { data: b } = (0, M._F)({ appid: e }),
            { data: B } = (0, M.lv)({ appid: e });
          d.useEffect(() => {
            l && m.current?.scrollIntoView({ block: "center" });
          }, [l]);
          const S = !!f?.visible,
            I = b?.episode,
            V = !S || !!I?.hide_details,
            W = `${a.name}: `;
          let $ = f?.name || "";
          $.startsWith(W) && ($ = $.slice(W.length));
          let le = I?.number || String(r);
          V &&
            ((le = String(r)),
            ($ = g.Localize(
              "#AppPage_Series_EpisodePlaceholder",
              String(n).padStart(2, "0"),
              String(r).padStart(2, "0"),
            )));
          let me = $;
          Jo(I?.type) &&
            (me = g.Localize("#AppPage_Series_EpisodeName", le, $));
          let ie;
          if (I?.type === oe.fj.TV && S) {
            const Xt = v?.original_release_date || v?.steam_release_date;
            Xt &&
              ((ie = (0, Ut.$z)(Xt)),
              a.is_coming_soon &&
                (ie = g.Localize("#AppPage_Series_AvailableOn", ie)));
          } else {
            const Xt = I?.type !== void 0 ? Jm[I.type] : void 0;
            ie = Xt && g.Localize(Xt);
          }
          const De =
            B?.asset_url_format && B.header
              ? Ls(B.asset_url_format, B.header)
              : o;
          return (0, t.jsxs)(As.x, {
            ref: m,
            focusable: !0,
            navProps: { autoFocus: c },
            columns: "160px 1fr auto",
            gap: "3",
            padding: "2",
            marginBottom: "2",
            background: l ? "blue-3 60%" : "greyneutral-3 60%",
            onClick:
              S && f?.is_free && !a.is_coming_soon
                ? () => {
                    window.location.href = Vo(`run/${e}`);
                  }
                : void 0,
            children: [
              De &&
                (0, t.jsx)(ce.az, {
                  children: (0, t.jsx)(Wn._, {
                    src: De,
                    alt: "",
                    width: "100%",
                  }),
                }),
              (0, t.jsxs)(ce.az, {
                children: [
                  (0, t.jsx)(j.EY, {
                    as: "div",
                    size: "4",
                    weight: "heavy",
                    contrast: "title",
                    children: me,
                  }),
                  (0, t.jsxs)(j.EY, {
                    as: "div",
                    size: "2",
                    contrast: "description",
                    children: [
                      ie && (0, t.jsx)(j.EY, { marginEnd: "3", children: ie }),
                      !V &&
                        !!b?.running_time_minutes &&
                        g.LocalizePlural(
                          "#AppPage_Series_RunningTime",
                          b.running_time_minutes,
                        ),
                    ],
                  }),
                  (0, t.jsx)(j.EY, {
                    as: "div",
                    size: "3",
                    contrast: "body",
                    whiteSpace: "pre-line",
                    marginTop: "1",
                    children: V
                      ? g.Localize("#AppPage_Series_DescriptionNotAvailable")
                      : y?.short_description,
                  }),
                ],
              }),
              S &&
                f?.is_free &&
                (0, t.jsxs)(ce.az, {
                  textAlign: "end",
                  children: [
                    (0, t.jsx)(j.EY, {
                      as: "div",
                      size: "3",
                      contrast: "title",
                      children: g.Localize("#AppPage_Series_Free"),
                    }),
                    a.is_coming_soon
                      ? (0, t.jsx)(j.EY, {
                          as: "div",
                          size: "3",
                          contrast: "description",
                          marginTop: "1",
                          children: g.Localize("#AppPage_Series_ComingSoon"),
                        })
                      : (0, t.jsx)(Ze.$, {
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
        var Ho = i(62038),
          ng = i(55367),
          nt = i.n(ng),
          qo = i(83321),
          la = i(7967),
          Os = i(32994),
          sg = i(3471),
          qe = i.n(sg);
        function er(s) {
          return _o(s)
            ? (0, C.we)("#Language_" + (0, ue.LgB)(s.elanguage))
            : el(s)
              ? (0, C.we)("#language_ext_" + (0, ue.c6v)(s.eadditionallanguage))
              : (0, C.we)("#language_selection_none");
        }
        function rg(s) {
          if (!s) return [];
          const e = [];
          for (let n = 0; n < s.length; n++)
            s[s.length - n - 1] == "1" && e.push(n);
          return e;
        }
        function ig(s) {
          if (!s) return [];
          const e = [],
            n = BigInt(s);
          for (let r = ue.Bhc; r < ue.bP9; r++)
            (n >> BigInt(r)) & BigInt(1) && e.push(r);
          return e;
        }
        function _o(s) {
          return s.elanguage != null && s.elanguage != -1;
        }
        function el(s) {
          return s.eadditionallanguage != null && s.eadditionallanguage != -1;
        }
        function ag(s, e) {
          let n;
          if (!s || !e?.length)
            return {
              rgSorted: [],
              nForceVisible: 0,
              firstPreferredLanguage: n,
            };
          const r = [],
            a = [
              (0, Os.ae)(s),
              ...ig(s.preferences?.secondary_languages),
            ].filter((f) => f != null),
            o = new Set();
          for (const f of a) {
            const y = e.findIndex((v) => v.elanguage == f);
            y != -1 &&
              (r.push({ ...e[y], preferred: !0 }),
              o.add(f),
              n || (n = { ...e[y], preferred: !0 }));
          }
          const l = rg(s.preferences?.additional_languages),
            c = new Set();
          for (const f of l) {
            const y = e.findIndex((v) => v.eadditionallanguage == f);
            y != -1 && (r.push({ ...e[y], preferred: !0 }), c.add(f));
          }
          const m = r.length;
          for (const f of e)
            if (_o(f)) {
              if (o.has(f.elanguage)) continue;
              r.push({ ...f, preferred: !1 }), o.add(f.elanguage);
            } else if (el(f)) {
              if (c.has(f.elanguage)) continue;
              r.push({ ...f, preferred: !1 }), c.add(f.eadditionallanguage);
            }
          return { rgSorted: r, nForceVisible: m, firstPreferredLanguage: n };
        }
        function og(s) {
          const { appid: e, initialOpen: n } = s,
            [r, a] = (0, d.useState)(n ?? !1),
            { data: o } = (0, M.Zx)({ appid: e }),
            { data: l } = (0, M.J$)({ appid: e }),
            { data: c } = (0, Os.lI)(),
            [m, f] = (0, d.useState)(!1),
            y = (0, qo.LT)("md"),
            v = d.useId(),
            {
              rgSorted: b,
              nForceVisible: B,
              firstPreferredLanguage: S,
            } = d.useMemo(() => ag(c, o ?? []), [c, o]);
          if (!b.length || !l || l.type == oe.uE.Ov) return null;
          const I = l.type == oe.uE.Wz || l.type == oe.uE.gQ,
            V = y ? qe().CheckColumn : qe().IconColumn,
            W = y ? cg : dg;
          return (0, t.jsxs)(L.fF, {
            className: qe().Details,
            focusableIfEmpty: !0,
            open: r,
            onToggle: ($) => a($.currentTarget.open),
            children: [
              (0, t.jsxs)(
                L.f_,
                {
                  className: qe().Summary,
                  children: [
                    (0, t.jsx)("div", {
                      className: qe().ImageContainer,
                      children: (0, t.jsx)(Q.vCk, { className: qe().Image }),
                    }),
                    (0, t.jsxs)("div", {
                      className: qe().TextBox,
                      children: [
                        (0, t.jsx)(j.EY, {
                          color: "blue-8",
                          children: g.Localize(
                            "#languages_supported",
                            b.length,
                          ),
                        }),
                        !r && (0, t.jsx)(lg, { language: S }),
                      ],
                    }),
                    r &&
                      (0, t.jsx)("div", {
                        className: qe().Open,
                        children: "-",
                      }),
                    !r &&
                      (0, t.jsx)("div", {
                        className: qe().Closed,
                        children: "+",
                      }),
                  ],
                },
                r ? "open" : "closed",
              ),
              (0, t.jsxs)(la.Qg, {
                className: qe().LanguageGrid,
                focusable: r,
                children: [
                  !y &&
                    (0, t.jsxs)("div", {
                      className: qe().Legend,
                      children: [
                        (0, t.jsx)(j.EY, {
                          color: "greyneutral-11",
                          children: g.Localize("#language_header_subtitles"),
                        }),
                        (0, t.jsx)("div", {
                          className: qe().LegendIconContainer,
                          children: (0, t.jsx)(Q._b5, {
                            className: qe().LegendIcon,
                          }),
                        }),
                        (0, t.jsx)(j.EY, {
                          color: "greyneutral-11",
                          children: g.Localize(
                            "#language_header_full_audio_short",
                          ),
                        }),
                        (0, t.jsx)("div", {
                          className: qe().LegendIconContainer,
                          children: (0, t.jsx)(Q.fSs, {
                            className: qe().LegendIcon,
                          }),
                        }),
                      ],
                    }),
                  (0, t.jsxs)("table", {
                    className: qe().LanguageTable,
                    children: [
                      (0, t.jsxs)("colgroup", {
                        children: [
                          (0, t.jsx)("col", { className: qe().LanguageName }),
                          (0, t.jsx)("col", { className: V }),
                          (0, t.jsx)("col", { className: V }),
                          y && (0, t.jsx)("col", { className: V }),
                        ],
                      }),
                      y &&
                        (0, t.jsx)("thead", {
                          children: (0, t.jsxs)("tr", {
                            children: [
                              (0, t.jsx)("th", {}),
                              (0, t.jsx)("th", {
                                children: (0, t.jsx)(j.EY, {
                                  color: "greyneutral-11",
                                  children: g.Localize(
                                    I
                                      ? "#language_header_interface_video"
                                      : "#language_header_interface",
                                  ),
                                }),
                              }),
                              (0, t.jsx)("th", {
                                children: (0, t.jsx)(j.EY, {
                                  color: "greyneutral-11",
                                  children: g.Localize(
                                    "#language_header_subtitles",
                                  ),
                                }),
                              }),
                              (0, t.jsx)("th", {
                                children: (0, t.jsx)(j.EY, {
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
                        children: b.map(($, le) =>
                          (0, t.jsx)(W, { language: $ }, le),
                        ),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        }
        function lg(s) {
          const { language: e } = s,
            { data: n } = (0, Os.lI)();
          if (!n) return null;
          if (!e || (!e.supported && !e.subtitles && !e.full_audio))
            return (0, t.jsx)(j.EY, {
              color: "blue-8",
              children: (0, C.we)("#Language_" + (0, ue.LgB)((0, Os.ae)(n))),
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
              (0, t.jsx)(j.EY, {
                color: "storegreen-7",
                children: g.Localize(r, er(e)),
              })
            );
          }
        }
        function cg(s) {
          const { language: e } = s,
            n = (0, qo.LT)("md");
          return !e.supported && !e.full_audio && !e.subtitles
            ? (0, t.jsxs)("tr", {
                className: (0, ne.A)(e.preferred && qe().Preferred),
                children: [
                  (0, t.jsx)("td", {
                    children: (0, t.jsx)(j.EY, {
                      color: e.preferred ? "storegreen-7" : "blue-8",
                      children: er(e),
                    }),
                  }),
                  (0, t.jsx)("td", {
                    colSpan: 3,
                    children: g.Localize("#language_not_supported"),
                  }),
                ],
              })
            : (0, t.jsxs)("tr", {
                className: (0, ne.A)(e.preferred && qe().Preferred),
                children: [
                  (0, t.jsx)("td", { className: qe().Name, children: er(e) }),
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
        function dg(s) {
          const { language: e } = s;
          return !e.supported && !e.full_audio && !e.subtitles
            ? (0, t.jsx)("tr", {
                className: (0, ne.A)(e.preferred && qe().Preferred),
                children: (0, t.jsx)("td", {
                  colSpan: 3,
                  children: g.Localize("#language_not_supported_inline", er(e)),
                }),
              })
            : (0, t.jsxs)("tr", {
                className: (0, ne.A)(e.preferred && qe().Preferred),
                children: [
                  (0, t.jsx)("td", { className: qe().Name, children: er(e) }),
                  (0, t.jsx)("td", {
                    children: (0, t.jsx)("div", {
                      className: qe().SmallIcon,
                      children:
                        (e.subtitles && (0, t.jsx)(Q._b5, {})) ||
                        (0, t.jsx)(t.Fragment, {}),
                    }),
                  }),
                  (0, t.jsx)("td", {
                    children: (0, t.jsx)("div", {
                      className: qe().SmallIcon,
                      children:
                        (e.full_audio && (0, t.jsx)(Q.fSs, {})) ||
                        (0, t.jsx)(t.Fragment, {}),
                    }),
                  }),
                ],
              });
        }
        function Wr(s) {
          return (0, t.jsx)(ce.az, {
            marginBottom: "2",
            children: (0, t.jsx)(j.EY, {
              contrast: "title",
              size: "2",
              weight: "heavy",
              style: { letterSpacing: "0.5px" },
              children: s.text,
            }),
          });
        }
        function ug(s) {
          const { appid: e, rgCategories: n, controllersUsed: r } = s,
            { data: a } = (0, M.J$)({ appid: e }),
            { data: o } = (0, M._F)({ appid: e }),
            l = d.useMemo(() => {
              const b = new Set(a?.categories?.feature_categoryids ?? []);
              return (
                a?.categories?.supported_player_categoryids?.forEach((B) =>
                  b.add(B),
                ),
                a?.categories?.controller_categoryids?.forEach((B) => b.add(B)),
                b
              );
            }, [a]),
            { data: c } = (0, M.is)({ appid: e }),
            f =
              c?.purchase_options?.find(
                (b) =>
                  b.free_with_master_sub_appid &&
                  b.free_with_master_sub_appid != Is.sc,
              )?.free_with_master_sub_appid ?? Is.sc;
          if (
            (d.use(g.Ready()),
            d.use(ge.Z.Ready()),
            !a || a.type == null || a?.type == oe.uE.Hk || !o)
          )
            return null;
          const y = n.filter((b) => l.has(b.categoryid ?? 0));
          if (a.type == oe.uE.Ov && y.length == 0) return null;
          const { vetted: v } = o;
          return (0, t.jsxs)(qt.YZ, {
            className: nt().CategorySection,
            "flow-children": "column",
            children: [
              (0, t.jsx)(Wr, { text: g.Localize("#AppPage_Features") }),
              (0, t.jsxs)(j.EY, {
                color: "blue-8",
                size: "2",
                children: [
                  y.length > 0 &&
                    (0, t.jsx)(t.Fragment, {
                      children: (0, t.jsx)(T.Z, {
                        className: nt().CategoryLinks,
                        "flow-children": "column",
                        children: y.map((b, B) =>
                          (0, t.jsx)(pg, { category: b }, B),
                        ),
                      }),
                    }),
                  !v && (0, t.jsx)(hg, { appid: e }),
                  (0, t.jsx)(Ho.AccessibilityFeatureDisplay, {
                    features: (0, Ho.AccessibilityFeaturesFromCategories)(
                      a?.categories?.feature_categoryids ?? [],
                    ),
                  }),
                  (0, t.jsx)(og, { appid: e }),
                  (0, t.jsx)(ti, { ...yg(e, l, r, o) }),
                  (0, t.jsxs)(j.EY, {
                    color: "gold-11",
                    children: [
                      (0, t.jsx)(xg, { extraDetails: o }),
                      (0, t.jsx)(Tg, { extraDetails: o }),
                      (0, t.jsx)(bg, { extraDetails: o }),
                      (0, t.jsx)(tl, { eulas: o.eula ?? [] }),
                      f != Is.sc && (0, t.jsx)(Bg, { appid: f }),
                      (0, t.jsx)(Pg, { extraDetails: o }),
                      (0, t.jsx)(Sg, { extraDetails: o }),
                    ],
                  }),
                ],
              }),
            ],
          });
        }
        function mg(s) {
          switch (s.categoryid) {
            case ue.Wmb:
            case ue.q0f:
              return "category1=" + s.categoryid;
            case ue.PBc:
              return "vrsupport=401";
            case ue.zWR:
              return "vrsupport=402";
            default:
              return "category2=" + s.categoryid;
          }
        }
        function gg(s) {
          return (
            s == ue.Y5S ||
            s == ue.mv5 ||
            (s >= ue.KH9 && s <= ue.fui) ||
            (s >= ue.mWc && s <= ue.vVO)
          );
        }
        function pg(s) {
          const { category: e } = s,
            n = (0, Jt.aL)(`${se.TS.STORE_BASE_URL}search/?${mg(e)}`);
          return gg(e.categoryid)
            ? null
            : (0, t.jsxs)(L.Ii, {
                href: n,
                className: (0, ne.A)(nt().SearchLink),
                children: [
                  (0, t.jsx)("div", {
                    className: nt().IconContainer,
                    children: (0, t.jsx)("img", {
                      className: nt().Icon,
                      src: `${se.TS.IMG_URL}/${e.image_path}`,
                      alt: "",
                    }),
                  }),
                  (0, t.jsx)(j.EY, {
                    className: nt().FeatureString,
                    marginLeft: "2",
                    children: g.Localize(e.display_name),
                  }),
                ],
              });
        }
        const fg = 60;
        function hg(s) {
          const { appid: e } = s,
            { data: n } = (0, M.J$)({ appid: e }),
            { data: r } = (0, M.by)({ appid: e });
          if (!n || se.TS.EREALM == Bn.TU.k_ESteamRealmChina) return null;
          const a = r?.steam_release_date ?? 0,
            o = a != 0 && Date.now() / 1e3 - a < 86400 * fg;
          let l, c;
          switch (n.type) {
            case oe.uE.HT:
              (l = o
                ? "#feature_learning_about_game"
                : "#feature_profile_features_limited"),
                (c = "#feature_learning_about_desc_game");
              break;
            case oe.uE.Sv:
              (l = o
                ? "#feature_learning_about_software"
                : "#feature_profile_features_limited"),
                (c = "#feature_learning_about_desc_software");
              break;
            case oe.uE._i:
              (l = o
                ? "#feature_learning_about_dlc"
                : "#feature_profile_features_limited"),
                (c = "#feature_learning_about_desc_dlc");
              break;
            case oe.uE.RA:
              (l = o
                ? "#feature_learning_about_mod"
                : "#feature_profile_features_limited"),
                (c = "#feature_learning_about_desc_mod");
              break;
          }
          if (!l || !c) return null;
          const m = `${se.TS.IMG_URL}v6/ico/${o ? "ico_learning_about_game.png" : "ico_info.png"}`;
          return (0, t.jsxs)(T.Z, {
            className: nt().LearningAbout,
            children: [
              (0, t.jsx)("div", {
                className: nt().IconContainer,
                children: (0, t.jsx)("img", {
                  className: nt().Icon,
                  src: m,
                  alt: "",
                }),
              }),
              (0, t.jsxs)(j.EY, {
                className: nt().FeatureString,
                marginLeft: "2",
                children: [g.Localize(l), " "],
              }),
            ],
          });
        }
        function yg(s, e, n, r) {
          const {
              controller_wizard_complete: a,
              no_mouse_keyboard_support: o,
            } = r,
            l =
              !!n.has_any_controller &&
              !n.has_ps4_controller &&
              !n.has_ps5_controller &&
              !n.has_xbox_controller;
          return {
            unAppID: s,
            bFullXboxControllerSupport: e.has(ue.mv5),
            bPartialXboxControllerSupport: e.has(ue.Y5S),
            bPS4ControllerSupport: e.has(ue.KH9),
            bPS4ControllerBTSupport: e.has(ue.wFw),
            bPS5ControllerSupport: e.has(ue.wFw),
            bPS5ControllerBTSupport: e.has(ue.lDg),
            bSteamInputAPISupport: e.has(ue.R2g),
            bNoKeyboardSupport: o,
            bGamepadPreferred: e.has(ue.fui),
            bControllerSupportWizardComplete: a,
            bHasXbox: !!n.has_xbox_controller,
            bHasPS4: !!n.has_ps4_controller,
            bHasPS5: !!n.has_ps5_controller,
            bHasOther: l,
          };
        }
        function vg(s) {
          const { activationLimit: e } = s;
          return e
            ? e == "Unlimited"
              ? (0, t.jsx)("div", {
                  className: nt().ActivationLimit,
                  children: g.Localize(
                    "#feature_machine_activation_limit_unlimited",
                  ),
                })
              : (0, t.jsx)("div", {
                  className: nt().ActivationLimit,
                  children: g.Localize("#feature_machine_activation_limit", e),
                })
            : null;
        }
        function xg(s) {
          const { extraDetails: e } = s,
            { drm_third_party_type: n, drm_activation_limit: r } = e;
          return n
            ? (0, t.jsx)("div", {
                className: nt().ThirdPartyNotice,
                children: (0, t.jsxs)(j.EY, {
                  children: [
                    g.Localize("#feature_third_party_drm", n),
                    (0, t.jsx)(vg, { activationLimit: r }),
                  ],
                }),
              })
            : null;
        }
        function jg(s) {
          return s == "secureboot_tpm2"
            ? g.Localize(
                "#feature_anticheat_bootprotection_secureboottpm2_desc",
              )
            : "";
        }
        function bg(s) {
          const { extraDetails: e } = s,
            { anticheat: n } = e;
          if (!n) return null;
          const {
            kernel_mode: r,
            boot_protection: a,
            uninstall_completely: o,
            name: l,
            boot_protection_name: c,
          } = n;
          return (0, t.jsxs)("div", {
            className: (0, ne.A)(nt().ThirdPartyNotice, nt().Anticheat),
            children: [
              (0, t.jsx)(j.EY, {
                children: g.Localize(
                  r
                    ? "#feature_includes_kernel_anti_cheat"
                    : "#feature_includes_non_kernel_anti_cheat",
                ),
              }),
              (0, t.jsxs)(j.EY, {
                color: "bronze-12",
                children: [
                  l,
                  r &&
                    !o &&
                    (0, t.jsx)(j.EY, {
                      children: g.Localize(
                        "#feature_anti_cheat_requires_manual_removal",
                      ),
                    }),
                ],
              }),
              a &&
                (0, t.jsxs)(j.EY, {
                  children: [
                    g.Localize("#feature_anticheat_bootprotection"),
                    (0, t.jsx)("div", {
                      className: nt().BootProtectionName,
                      children: jg(c),
                    }),
                  ],
                }),
            ],
          });
        }
        function Bg(s) {
          const { appid: e } = s,
            { data: n } = (0, M.J$)({ appid: e });
          return !n || !n.name
            ? null
            : (0, t.jsx)(Eg, {
                appid: e,
                title: g.Localize("#feature_master_sub_app_eula", n.name),
              });
        }
        function Eg(s) {
          const { appid: e, title: n } = s,
            { data: r } = (0, M._F)({ appid: e });
          return r ? (0, t.jsx)(tl, { eulas: r.eula ?? [], title: n }) : null;
        }
        function tl(s) {
          const { eulas: e, title: n } = s;
          if (!e?.length) return null;
          const r = n || g.Localize("#feature_third_party_eula");
          return (0, t.jsxs)("div", {
            className: (0, ne.A)(nt().ThirdPartyNotice, nt().Eulas),
            children: [
              (0, t.jsxs)(j.EY, { children: [r, " "] }),
              e.map((a, o) =>
                (0, t.jsx)(
                  L.Ii,
                  {
                    className: nt().Link,
                    href: a.url,
                    children: (0, t.jsx)(j.EY, {
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
        function Pg(s) {
          return s.extraDetails.refund_checks_ea_playtime
            ? (0, t.jsx)("div", {
                className: nt().ThirdPartyNotice,
                children: (0, t.jsx)(j.EY, {
                  children: g.Localize("#feature_third_party_refund_playtime"),
                }),
              })
            : null;
        }
        function Tg(s) {
          const { extraDetails: e } = s,
            {
              user_account_third_party: n,
              user_account_third_party_link_to_steam: r,
            } = e;
          return n
            ? (0, t.jsx)("div", {
                className: (0, ne.A)(
                  nt().ThirdPartyNotice,
                  nt().ThirdPartyAccount,
                ),
                children: (0, t.jsxs)(j.EY, {
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
        function Sg(s) {
          const { extraDetails: e } = s,
            { ai_generation_service: n } = e;
          return !n || !n.name
            ? null
            : (0, t.jsx)("div", {
                className: nt().ThirdPartyNotice,
                children: (0, t.jsx)(j.EY, {
                  children: (0, So.i)(
                    g.Localize(
                      "#feature_ai_generated_content_external_account_service",
                      n.name,
                    ),
                    (0, t.jsx)(L.Ii, { href: n.url }),
                  ),
                }),
              });
        }
        var Mg = i(76985),
          un = i.n(Mg),
          wr = i(48473);
        function Ig(s) {
          const { appid: e, tracks: n, metadata: r } = s,
            { data: a } = (0, M.J$)({ appid: e }),
            [o, l] = d.useState(n[0]?.discNumber ?? 1),
            c = d.useMemo(() => {
              let m = new Map();
              for (const f of n ?? [])
                m.has(f.discNumber)
                  ? m.get(f.discNumber)?.tracks.push(f)
                  : m.set(f.discNumber, {
                      discNumber: f.discNumber,
                      tracks: [f],
                    });
              return m;
            }, [n]);
          return !a || a.type == null || !n?.length
            ? null
            : (0, t.jsxs)(t.Fragment, {
                children: [
                  (0, t.jsxs)(qt.YZ, {
                    className: un().TrackListContainer,
                    "flow-children": "column",
                    children: [
                      c.size > 1 &&
                        (0, t.jsx)(T.Z, {
                          "flow-children": "row",
                          className: un().DiscTabs,
                          children: Array.from(c.values()).map((m) =>
                            (0, t.jsx)(
                              Ze.$,
                              {
                                variant:
                                  m.discNumber == o ? "inverted" : void 0,
                                onClick: () => l(m.discNumber),
                                children: g.Localize(
                                  "#music_disc_tab",
                                  m.discNumber,
                                ),
                              },
                              m.discNumber,
                            ),
                          ),
                        }),
                      (0, t.jsx)(la.Qg, {
                        className: un().TrackList,
                        children: (0, t.jsx)(Lg, { tracks: c.get(o).tracks }),
                      }),
                    ],
                  }),
                  (0, t.jsx)(qt.YZ, {
                    className: un().MetadataContainer,
                    "flow-children": "column",
                    children: (0, t.jsx)(la.Qg, {
                      className: un().Metadata,
                      children: (0, t.jsx)(Ng, { metadata: r }),
                    }),
                  }),
                ],
              });
        }
        function Lg(s) {
          const { tracks: e } = s;
          return (0, t.jsx)(j.EY, {
            color: "greyneutral-12",
            children: (0, t.jsxs)("table", {
              className: un().TrackTable,
              children: [
                (0, t.jsxs)("colgroup", {
                  children: [
                    (0, t.jsx)("col", { className: un().Number }),
                    (0, t.jsx)("col", { className: un().Name }),
                    (0, t.jsx)("col", { className: un().Length }),
                  ],
                }),
                (0, t.jsx)("tbody", {
                  children: e.map((n, r) =>
                    (0, t.jsx)(Ag, { track: n, odd: r % 2 != 0 }, r),
                  ),
                }),
              ],
            }),
          });
        }
        function Ag(s) {
          const { track: e, odd: n } = s;
          return (0, t.jsxs)("tr", {
            className: (0, ne.A)(n && un().Odd),
            children: [
              (0, t.jsx)("td", { children: e.trackNumber }),
              (0, t.jsx)("td", { children: Og(e) }),
              (0, t.jsx)("td", { className: un().Length, children: zg(e) }),
            ],
          });
        }
        function Og(s) {
          if (!s.originalName || !s.originalNameLanguage)
            return s.internationalName;
          const e = C.pf.GetELanguageFallbackOrder()[0] ?? ue.Bhc;
          return (0, ue.wwZ)(e) == s.originalNameLanguage
            ? (0, wr.EK)(s.originalName)
            : g.Localize(
                "#music_localized_track_name",
                (0, wr.EK)(s.internationalName),
                (0, wr.EK)(s.originalName),
              );
        }
        function zg(s) {
          return g.Localize(
            "#music_album_track_duration",
            s.lengthMinutes,
            s.lengthSeconds.toString().padStart(2, "0"),
          );
        }
        function Ng(s) {
          const { metadata: e } = s;
          return e
            ? (0, t.jsxs)(F.s, {
                direction: "column",
                className: un().Credits,
                marginTop: "4",
                children: [
                  (0, t.jsx)(j.EY, {
                    size: "5",
                    weight: "heavy",
                    children: g.Localize("#music_album_metadata"),
                  }),
                  (0, t.jsx)(As.x, {
                    columns: "max-content max-content",
                    gapX: "2",
                    margin: "2",
                    children: e.map((n) =>
                      (0, t.jsx)(Dg, { metadata: n }, n.field),
                    ),
                  }),
                ],
              })
            : null;
        }
        function nl(s, e) {
          return s.find((n) => n.language == e);
        }
        function Dg(s) {
          const { metadata: e } = s;
          if (!e || !e.values?.length) return null;
          const { field: n, values: r } = e,
            a = "#music_album_metadata_key_" + n,
            o = C.pf.GetELanguageFallbackOrder()[0] ?? ue.Bhc,
            l = nl(r, o) || nl(r, ue.Bhc);
          return l
            ? (0, t.jsxs)(t.Fragment, {
                children: [
                  (0, t.jsx)(j.EY, {
                    className: un().CreditName,
                    children: g.Localize(a),
                  }),
                  (0, t.jsx)(j.EY, { children: (0, wr.EK)(l.value) }),
                ],
              })
            : null;
        }
        var Ur = i(84909),
          Bs = i(43462),
          Fg = i(19218),
          ca = i.n(Fg);
        const Rg = new Ue.wd("InterestButtons");
        function Wg(s) {
          const { appid: e } = s,
            { data: n } = (0, M.J$)({ appid: e });
          return !n || n.type == null
            ? null
            : (0, t.jsx)(T.Z, {
                className: ca().ButtonRow,
                "flow-children": "column",
                children: (0, t.jsxs)(F.s, {
                  direction: "column",
                  gap: "1",
                  children: [
                    (0, t.jsx)(Gg, { appid: e }),
                    (0, t.jsxs)(F.s, {
                      direction: "row",
                      width: "100%",
                      gap: "1",
                      children: [
                        (0, t.jsx)(wg, { appid: e }),
                        (0, t.jsx)(Ug, { appid: e }),
                      ],
                    }),
                  ],
                }),
              });
        }
        function da(s) {
          const { options: e, children: n } = s;
          return (0, t.jsxs)("span", {
            className: ca().WidestChildContainer,
            children: [
              e.map((r, a) =>
                (0, t.jsx)("span", { className: ca().Hidden, children: r }, a),
              ),
              (0, t.jsx)("span", { children: n }),
            ],
          });
        }
        function sl() {
          return (0, t.jsx)(ce.az, {
            width: "16px",
            marginRight: "1",
            marginTop: "1",
            children: (0, t.jsx)(Ve.MGO, {}),
          });
        }
        function wg(s) {
          const { appid: e } = s,
            { data: n } = ms(e),
            r = ui(e);
          if (!n) return null;
          const { following: a = !1 } = n,
            o = (m) => {
              r.mutateAsync({ following: m, old_interest: n });
            },
            l = g.Localize("#button_follow"),
            c = (0, t.jsxs)(F.s, {
              direction: "row",
              align: "center",
              gap: "1",
              children: [(0, t.jsx)(sl, {}), g.Localize("#button_follow_undo")],
            });
          return (0, t.jsx)(ce.az, {
            flexGrow: "1",
            children: (0, t.jsxs)(Ze.$, {
              color: "greyneutral",
              onClick: () => o(!a),
              width: "100%",
              children: [
                (0, t.jsx)(ce.az, {
                  children: a ? (0, t.jsx)(Q.c9e, {}) : (0, t.jsx)(Q.pPV, {}),
                }),
                (0, t.jsx)(da, { options: [l, c], children: a ? c : l }),
              ],
            }),
          });
        }
        function Ug(s) {
          const { appid: e } = s,
            { data: n } = ms(e),
            r = di(e),
            [a, o] = d.useState(!1);
          if (!n) return null;
          const { ignored: l = !1, ignored_reason: c } = n,
            m = !!l && (c ?? !1),
            f = (B, S) => {
              Rg.Info("ignoring", B, S),
                r.mutateAsync({
                  ignored: B,
                  ignored_reason: S,
                  old_interest: n,
                });
            },
            y = (B) => {
              f(B !== !1, B === !1 ? void 0 : B), o(!1);
            },
            v = g.Localize("#button_ignore"),
            b = (0, t.jsxs)(F.s, {
              direction: "row",
              align: "center",
              gap: "1",
              children: [(0, t.jsx)(sl, {}), g.Localize("#button_ignore_undo")],
            });
          return (0, t.jsx)(ce.az, {
            flexGrow: "1",
            children: (0, t.jsxs)(Ur.AM.Root, {
              open: a,
              onOpenChange: o,
              children: [
                (0, t.jsx)(Ur.AM.Anchor, {
                  children: (0, t.jsx)(Ze.$, {
                    color: "greyneutral",
                    onClick: () => o(!a),
                    width: "100%",
                    children: (0, t.jsx)(da, {
                      options: [v, b],
                      children: l ? b : v,
                    }),
                  }),
                }),
                (0, t.jsx)(Ur.AM.Positioner, {
                  children: (0, t.jsx)(Ur.AM.FocusManager, {
                    children: (0, t.jsx)(ce.az, {
                      border: "1",
                      borderColor: "blue-7",
                      background: "greyneutral-4",
                      elevation: "1",
                      padding: "1",
                      children: (0, t.jsx)(U.q, {
                        children: (0, t.jsxs)(F.s, {
                          direction: "column",
                          children: [
                            (0, t.jsx)(ua, {
                              type: Bs.RI.$m,
                              currentType: m,
                              select: y,
                            }),
                            (0, t.jsx)(ua, {
                              type: Bs.RI.yK,
                              currentType: m,
                              select: y,
                            }),
                            (0, t.jsx)(ua, {
                              type: !1,
                              currentType: m,
                              select: y,
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
        function Cg(s) {
          switch (s) {
            default:
            case !1:
              return "#ignore_reason_none_header";
            case Bs.RI.$m:
              return "#ignore_reason_generic_header";
            case Bs.RI.yK:
              return "#ignore_reason_otherstore_header";
          }
        }
        function Kg(s) {
          switch (s) {
            default:
            case !1:
              return "#ignore_reason_none_desc";
            case Bs.RI.$m:
              return "#ignore_reason_generic_desc";
            case Bs.RI.yK:
              return "#ignore_reason_otherstore_desc";
          }
        }
        function ua(s) {
          const { type: e, currentType: n, select: r } = s;
          return (0, t.jsx)(T.Z, {
            focusable: !0,
            onActivate: () => r(e),
            autoFocus: n == Bs.RI.$m,
            children: (0, t.jsxs)(F.s, {
              direction: "row",
              padding: "2",
              maxWidth: "275px",
              gap: "2",
              children: [
                (0, t.jsx)(ce.az, {
                  minWidth: "16px",
                  maxWidth: "16px",
                  children:
                    e === n &&
                    (0, t.jsx)(j.EY, { children: (0, t.jsx)(Ve.MGO, {}) }),
                }),
                (0, t.jsxs)(F.s, {
                  direction: "column",
                  gap: "1",
                  children: [
                    (0, t.jsx)(j.EY, {
                      color: "greyneutral-12",
                      weight: "heavy",
                      children: g.Localize(Cg(e)),
                    }),
                    (0, t.jsx)(j.EY, {
                      color: "greyneutral-11",
                      children: g.Localize(Kg(e)),
                    }),
                  ],
                }),
              ],
            }),
          });
        }
        function Gg(s) {
          const { appid: e } = s,
            [n, r] = d.useState(!1),
            a = (0, Ae.LH)(),
            o = (0, t.jsxs)(F.s, {
              direction: "row",
              align: "center",
              gap: "1",
              children: [
                (0, t.jsx)(ce.az, {
                  width: "20px",
                  marginRight: "1",
                  children: (0, t.jsx)(Q.T4m, {}),
                }),
                g.Localize("#button_wishlist"),
              ],
            }),
            l = (0, t.jsxs)(F.s, {
              direction: "row",
              align: "center",
              gap: "1",
              children: [
                (0, t.jsx)(ce.az, {
                  width: "20px",
                  marginRight: "1",
                  children: (0, t.jsx)(Q.qnF, {}),
                }),
                g.Localize("#button_wishlist_undo"),
              ],
            });
          return (0, t.jsx)(ce.az, {
            children: (0, t.jsxs)(T.Z, {
              onSecondaryButton: () => r(!0),
              onSecondaryActionDescription: g.Localize(
                "#wishlist_manage_categories",
              ),
              children: [
                (0, t.jsx)(Zi, {
                  appid: e,
                  bAllowRemove: !0,
                  width: "100%",
                  children: (c) =>
                    (0, t.jsx)(da, { options: [o, l], children: c ? l : o }),
                }),
                n &&
                  (0, t.jsx)(go, {
                    appid: e,
                    steamid: a,
                    onClose: () => r(!1),
                  }),
              ],
            }),
          });
        }
        var Yg = i(60993),
          Cr = i.n(Yg),
          Kr = i(21079),
          kg = i(20125),
          Qg = i(9094),
          rl = i(74679),
          Vg = i(20117);
        function tr(s, e) {
          return (s || []).map((n) => ({
            accountid: Vg.b2.ToAccountID(n.steamid),
            nMinutesPlayedRecent: n.minutes_played || 0,
            nMinutesPlayedForever: n.minutes_played_forever || 0,
            bInGame: e,
          }));
        }
        function il(s) {
          return tr(s.in_wishlist, !1);
        }
        function al(s, e) {
          const n = tr(s.in_game, !0).concat(
            tr(s.played_recently, !1),
            tr(s.played_ever, !1),
            tr(s.owns, !1),
          );
          return e ? n.filter((r) => r.nMinutesPlayedForever > 0) : n;
        }
        function $g(s) {
          const { data: e } = (0, M.J$)({ appid: s }),
            { data: n } = (0, oa.Nd)(s);
          return d.useMemo(
            () =>
              !e || !n
                ? null
                : {
                    rgFriendsThatOwn: al(n, !!e.is_free),
                    rgFriendsThatWant: il(n),
                  },
            [e, n],
          );
        }
        var Jg = i(35675),
          nr = i(60001);
        async function Zg(s, e) {
          const n = (0, kg.Am)(Y.TS.STORE_BASE_URL, e, Y.iA.country_code),
            o = (await (await fetch(n)).json()).rgCurations[s] || {};
          return Object.entries(o).map((l) => ({
            clan_accountid: Number(l[0]),
            recommendation: l[1],
          }));
        }
        function Xg(s) {
          return (0, Oe.I)({
            queryKey: ["UserCurations" + Y.iA.accountid],
            queryFn: async () => Zg(s, Y.iA.accountid),
            enabled: !!Y.iA.accountid,
          });
        }
        function Hg(s) {
          const { data: e } = (0, M.J$)({ appid: s }),
            { data: n } = (0, M.wl)({ appid: s }),
            { data: r } = (0, M.xz)({ appid: s }),
            { data: a } = (0, M.ik)({ appid: s }),
            { data: o } = (0, M.Zx)({ appid: s }),
            { data: l } = (0, Kr.Dk)(s),
            { data: c } = (0, rl.yt)(),
            { data: m } = (0, Kr.zo)(s),
            { data: f } = (0, Kr.Mu)(),
            { data: y } = (0, oa.Nd)(s),
            { data: v } = (0, Os.lI)(),
            { data: b } = (0, Qg.nU)(Y.iA.steamid),
            { data: B } = (0, Jg.Gw)(),
            { data: S } = Xg(s);
          return d.useMemo(() => {
            if (
              !e ||
              !n ||
              !r ||
              !a ||
              !o ||
              !l ||
              !c ||
              !m ||
              !f ||
              !y ||
              !v ||
              !b ||
              !B ||
              !S
            )
              return null;
            const I = { appid: s };
            (I.nCurrentUserPlaytimeMins =
              y.your_info?.minutes_played_forever || 0),
              (I.bCurrentUserOwns = !!y.your_info?.owned),
              (I.bFromInteractiveRecommender = m.bRecommendedByIR),
              I.bCurrentUserOwns ||
                ((I.rgSimilarApps = m.arrSimilarPlayedApps || []),
                I.rgSimilarApps?.length == 0 &&
                  (I.rgMatchingTagsPlayed =
                    c.filter((ie) => r?.find((De) => De.tagid == ie.tagid)) ||
                    []));
            let V =
              (v.preferences?.review_score_preference == gs.Wf.Yy &&
                a.summary_unfiltered) ||
              a.summary_filtered;
            const W = V?.review_score || oe.j6.sZ;
            if (
              ((I.bPositiveReviews = W > oe.j6.lo),
              (I.bNegativeReviews = W > oe.j6.sZ && W < oe.j6.hc),
              (I.eReviewScore = W),
              (I.strReviewScoreLabel = V?.review_score_label),
              e.type != oe.uE.Hk && e.type != oe.uE.Ov)
            ) {
              const ie = (0, Os.ae)(v);
              I.bUserLanguageSupported = !!o.find((De) => De.elanguage == ie);
            } else I.bUserLanguageSupported = !0;
            const le = f.GetItems().findIndex((ie) => ie.GetAppID() == s);
            le != -1 && (le < 25 ? (I.bTopSeller = !0) : (I.bPopular = !0));
            const me = !!b.items.find((ie) => ie.appid == s);
            return (
              (I.bWishlisted = me),
              (I.rgExcludedTags =
                v.tag_preferences?.tags_to_exclude?.filter((ie) =>
                  r?.find((De) => De.tagid == ie.tagid),
                ) || []),
              (I.rgPublishersFollowed = n.publishers?.filter(
                (ie) =>
                  ie.creator_clan_account_id &&
                  B?.get(ie.creator_clan_account_id)?.is_creator,
              )),
              (I.rgDevelopersFollowed = n.developers?.filter(
                (ie) =>
                  ie.creator_clan_account_id &&
                  B?.get(ie.creator_clan_account_id)?.is_creator,
              )),
              (I.rgFranchisesFollowed = n.franchises?.filter(
                (ie) =>
                  ie.creator_clan_account_id &&
                  B?.get(ie.creator_clan_account_id)?.is_creator,
              )),
              (I.rgPublishersFollowed = I.rgPublishersFollowed?.filter(
                (ie) =>
                  !I.rgDevelopersFollowed?.find(
                    (De) =>
                      De.creator_clan_account_id == ie.creator_clan_account_id,
                  ),
              )),
              (I.rgCuratorsPositive = S.filter(
                (ie) => ie.recommendation == nr.tV.$D,
              ).map((ie) => ie.clan_accountid)),
              (I.rgCuratorsNegative = S.filter(
                (ie) => ie.recommendation == nr.tV.qP,
              ).map((ie) => ie.clan_accountid)),
              (I.rgFriendsRecommended = l.accountids_recommended || []),
              (I.rgFriendsDisrecommended = l.accountids_not_recommended || []),
              (I.rgFriendsWishlisted = il(y).map((ie) => ie.accountid)),
              (I.rgFriendsOwned = al(y, !!e.is_free).map((ie) => ie.accountid)),
              I
            );
          }, [s, n, S, B, y, l, f, e, r, c, a, v, m, o, b]);
        }
        var qg = i(13290),
          as = i.n(qg),
          Tn = ((s) => (
            (s[(s.Info = 0)] = "Info"),
            (s[(s.Positive = 1)] = "Positive"),
            (s[(s.Negative = 2)] = "Negative"),
            s
          ))(Tn || {});
        function zs(s) {
          const { type: e, description: n, children: r } = s;
          let a = (0, t.jsx)(Ve.$$j, {});
          return (
            e == 1
              ? (a = (0, t.jsx)(Ve.MGO, { className: as().Positive }))
              : e == 2 && (a = (0, t.jsx)(Q.tmm, { className: as().Negative })),
            (0, t.jsxs)("div", {
              className: as().Reason,
              children: [
                (0, t.jsxs)("div", {
                  className: as().TopLine,
                  children: [
                    (0, t.jsx)("div", { className: as().Icon, children: a }),
                    (0, t.jsx)("div", {
                      className: as().Description,
                      children: n,
                    }),
                  ],
                }),
                r &&
                  (0, t.jsx)("div", {
                    className: as().Additional,
                    children: r,
                  }),
                (0, t.jsx)("div", { className: as().Divider }),
              ],
            })
          );
        }
        function ma(s) {
          const { description: e, children: n } = s;
          return (0, t.jsx)(zs, { type: 0, description: e, children: n });
        }
        function sr(s) {
          const { description: e, children: n } = s;
          return (0, t.jsx)(zs, { type: 1, description: e, children: n });
        }
        function ol(s) {
          const { description: e, children: n } = s;
          return (0, t.jsx)(zs, { type: 2, description: e, children: n });
        }
        var _g = i(2699),
          ep = i.n(_g);
        function ll(s) {
          const { children: e } = s;
          return (0, t.jsx)(T.Z, { className: ep().AvatarList, children: e });
        }
        var ga = i(30986),
          tp = i(77614),
          Gr = i.n(tp);
        function cl(s) {
          const e = (0, Ae.LH)(),
            { data: n } = (0, _s.jn)(e);
          return (0, qs.n)(n, e) + `/friendsthatplay/${s}`;
        }
        function dl(s) {
          const { accountid: e, reviewAppId: n, bShowName: r, friend: a } = s,
            o = (0, _s.jn)(e);
          if (!o.data || !o.data.public_data) return null;
          const l =
              n && o.data ? `${(0, qs.n)(o.data)}/recommended/${n}` : void 0,
            c = o.data.public_data.persona_name;
          return (0, t.jsxs)(L.Ii, {
            className: Gr().FriendAvatarLink,
            href: l || (0, qs.n)(o.data),
            "data-miniprofile": e,
            children: [
              (0, t.jsx)(ga.wm, { playerLinkDetails: o.data, alt: c }),
              r &&
                c &&
                (0, t.jsxs)("div", {
                  className: Gr().Details,
                  children: [
                    (0, t.jsx)("div", { className: Gr().Name, children: c }),
                    a && (0, t.jsx)(np, { friend: a }),
                  ],
                }),
            ],
          });
        }
        function np(s) {
          const { friend: e } = s;
          let n;
          return (
            e.bInGame
              ? (n = g.Localize("#AppPage_FriendOwnership_NowPlaying"))
              : e.nMinutesPlayedRecent > 0 &&
                (n = g.Localize(
                  "#AppPage_FriendOwnership_PlayedHours",
                  Fr(e.nMinutesPlayedRecent, !0),
                )),
            n
              ? (0, t.jsx)("div", { className: Gr().Playtime, children: n })
              : null
          );
        }
        function sp(s) {
          const { accountid: e, appid: n, bLinkToReview: r } = s;
          return (0, t.jsx)(dl, { accountid: e, reviewAppId: r ? n : void 0 });
        }
        function rp(s) {
          const { rgFriends: e, appid: n, bLinkToReview: r } = s;
          return (0, t.jsx)(ll, {
            children: e.map((a) =>
              (0, t.jsx)(sp, { accountid: a, appid: n, bLinkToReview: r }, a),
            ),
          });
        }
        function Yr(s) {
          const {
              type: e,
              appid: n,
              strLocTag: r,
              rgFriends: a,
              nMax: o = 5,
              bLinkToReview: l,
            } = s,
            c = cl(n);
          if (!a || a.length == 0) return null;
          let m = (0, Be.xh)(
            g.LocalizePlural(r, a.length),
            (0, t.jsx)(L.Ii, { href: c }),
          );
          return (0, t.jsx)(zs, {
            type: e,
            description: m,
            children: (0, t.jsx)(rp, {
              rgFriends: a.slice(0, o),
              appid: n,
              bLinkToReview: l,
            }),
          });
        }
        var ip = i(55483);
        function ap(s) {
          const { url: e, avatarUrl: n, alt: r } = s;
          return (0, t.jsx)(Yt.he, {
            toolTipContent: r,
            children: (0, t.jsx)(L.Ii, {
              href: e,
              children: (0, t.jsx)(ga.Ul, { avatarURL: n, alt: r }),
            }),
          });
        }
        function op(s) {
          const { accountid: e, appid: n, fnURLGenerator: r } = s,
            a = (0, ip.TB)(e);
          if (!a.data) return null;
          const o = r(a.data, n);
          return (0, t.jsx)(ap, {
            url: o,
            avatarUrl: a.data.avatar_full_url,
            alt: a.data.group_name,
          });
        }
        function lp(s) {
          const { rgCurators: e, appid: n, fnURLGenerator: r } = s;
          return (0, t.jsx)(ll, {
            children: e.map((a) =>
              (0, t.jsx)(op, { accountid: a, appid: n, fnURLGenerator: r }, a),
            ),
          });
        }
        function pa(s) {
          const {
              type: e,
              fnURLGenerator: n,
              appid: r,
              strLocTag: a,
              rgCurators: o,
              nMax: l = 6,
            } = s,
            c = (0, Jt.aL)(
              Y.TS.STORE_BASE_URL + `curators/mycuratorsreviewing/?appid=${r}`,
            );
          if (!o || o.length == 0) return null;
          let m = (0, Be.xh)(g.Localize(a), (0, t.jsx)(L.Ii, { href: c }));
          return (0, t.jsx)(zs, {
            type: e,
            description: m,
            children: (0, t.jsx)(lp, {
              rgCurators: o.slice(0, l),
              appid: r,
              fnURLGenerator: n,
            }),
          });
        }
        var cp = i(57102),
          ul = i.n(cp);
        function dp(s) {
          const { tag: e } = s;
          return (0, t.jsx)(L.Ii, {
            className: ul().Tag,
            href: `${Y.TS.STORE_BASE_URL}tags/${(0, ue.wwZ)((0, ue.sfN)(Y.TS.LANGUAGE))}/${e.name}`,
            children: e.name,
          });
        }
        function ml(s) {
          const { rgTags: e } = s;
          return e.length == 0
            ? null
            : (0, t.jsx)("div", {
                className: ul().TagList,
                children: e.map((n) => (0, t.jsx)(dp, { tag: n }, n.tagid)),
              });
        }
        var up = i(54629),
          kr = i.n(up),
          mp = i(80702);
        function gp(s) {
          const { appid: e } = s,
            { data: n } = (0, M.J$)({ appid: e }),
            { data: r } = (0, M.lv)({ appid: e });
          if (!n || !r) return null;
          const a = (0, Ms.b0)(r, "community_icon");
          return (0, t.jsx)(mp.Q, {
            id: { appid: e },
            bPreventNavigation: !0,
            hoverProps: {
              direction: "overlay",
              nBodyAlignment: 1,
              style: { minWidth: "320px", zIndex: 5e3 },
            },
            children: (0, t.jsxs)(An.p, {
              className: kr().AppIconAndName,
              storeItem: n,
              children: [
                (0, t.jsx)("div", {
                  className: kr().AppIcon,
                  children: a && (0, t.jsx)("img", { src: a, alt: "" }),
                }),
                (0, t.jsx)("div", {
                  className: kr().AppName,
                  children: n.name,
                }),
              ],
            }),
          });
        }
        function pp(s) {
          const { rgApps: e } = s;
          return e.length == 0
            ? null
            : (0, t.jsx)("div", {
                className: kr().AppList,
                children: e.map((n) =>
                  (0, t.jsx)(gp, { appid: n.appid }, n.appid),
                ),
              });
        }
        function fp(s) {
          const { appid: e, friendsRecommended: n, recommendedTags: r } = s,
            [a, o] = d.useState(!1),
            l = (0, Kr.ws)(),
            c = (0, rl.Fx)();
          return (
            d.useEffect(() => {
              l(e, n), c(r), o(!0);
            }, [e, n, r, l, c]),
            d.use(g.Ready()),
            d.use(ge.Z.Ready()),
            a
              ? (0, t.jsx)(d.Suspense, {
                  children: (0, t.jsx)(yp, { appid: e }),
                })
              : null
          );
        }
        function gl(s, e) {
          const { data: n } = (0, M.J$)({ appid: e.appid });
          return g.GetAppTypePluralLocKey(s, n?.type || oe.uE.HT);
        }
        function hp(s, e) {
          const { data: n } = (0, M.J$)({ appid: e.appid });
          return g.GetAppTypeLocKey(s, n?.type || oe.uE.HT);
        }
        function fa(s, e) {
          const n = hp(s, e);
          return g.Localize(n);
        }
        function yp(s) {
          const { appid: e } = s,
            n = Hg(e);
          return n
            ? (0, t.jsxs)(qt.YZ, {
                className: Cr().RecommendationReasonsDisplay,
                navEntryPreferPosition: de.iU.PREFERRED_CHILD,
                children: [
                  (0, t.jsx)(vp, { reasons: n }),
                  (0, t.jsx)(xp, { reasons: n }),
                  (0, t.jsx)(Bp, { reasons: n }),
                  (0, t.jsx)(Ep, { reasons: n }),
                  (0, t.jsx)(Pp, { reasons: n }),
                  (0, t.jsx)(Sp, { reasons: n }),
                  (0, t.jsx)(Tp, { reasons: n }),
                  (0, t.jsx)(Mp, { reasons: n }),
                  (0, t.jsx)(Ip, { reasons: n }),
                  (0, t.jsx)(zp, { reasons: n }),
                  (0, t.jsx)(Np, { reasons: n }),
                  (0, t.jsx)(Dp, { reasons: n }),
                  (0, t.jsx)(Fp, { reasons: n }),
                  (0, t.jsx)(Rp, { reasons: n }),
                  (0, t.jsx)(Wp, { reasons: n }),
                  (0, t.jsx)(wp, { reasons: n }),
                  (0, t.jsx)(Up, { reasons: n }),
                  (0, t.jsx)(Cp, { reasons: n }),
                ],
              })
            : null;
        }
        function vp(s) {
          const { reasons: e } = s,
            n = fa("#AppPage_RecommendationReason_Header", e);
          return (0, t.jsx)(Wr, { text: n });
        }
        function xp(s) {
          const { reasons: e } = s;
          if (e.nCurrentUserPlaytimeMins > 0) {
            const n = Fr(e.nCurrentUserPlaytimeMins);
            return (0, t.jsx)(ma, {
              description: g.Localize(
                "#AppPage_RecommendationReason_Playtime",
                n,
              ),
            });
          } else if (e.bCurrentUserOwns)
            return (0, t.jsx)(ma, {
              description: g.Localize(
                "#AppPage_RecommendationReason_InLibrary",
              ),
            });
          return null;
        }
        function jp(s) {
          const { reasons: e } = s,
            n = fa("#AppPage_RecommendationReason_MatchingApps", e);
          return (0, t.jsx)(sr, {
            description: n,
            children: (0, t.jsx)(pp, { rgApps: e.rgSimilarApps }),
          });
        }
        function bp(s) {
          const { reasons: e } = s,
            n = fa("#AppPage_RecommendationReason_MatchingTags", e);
          return (0, t.jsx)(sr, {
            description: n,
            children: (0, t.jsx)(ml, { rgTags: e.rgMatchingTagsPlayed }),
          });
        }
        function Bp(s) {
          const { reasons: e } = s;
          return e.rgSimilarApps && e.rgSimilarApps.length > 0
            ? (0, t.jsx)(jp, { reasons: e })
            : e.rgMatchingTagsPlayed && e.rgMatchingTagsPlayed.length > 0
              ? (0, t.jsx)(bp, { reasons: e })
              : null;
        }
        function Ep(s) {
          const { reasons: e } = s;
          return e.bFromInteractiveRecommender
            ? (0, t.jsx)(sr, {
                description: g.Localize(
                  "#AppPage_RecommendationReason_FromInteractiveRecommender",
                ),
              })
            : null;
        }
        function Pp(s) {
          const { reasons: e } = s;
          return e.bPositiveReviews || e.bNegativeReviews
            ? (0, t.jsx)(zs, {
                type: e.bPositiveReviews ? Tn.Positive : Tn.Negative,
                description: (0, Be.xh)(
                  g.Localize(
                    "#AppPage_RecommendationReason_UserReviews",
                    e.strReviewScoreLabel,
                  ),
                  (0, t.jsx)("span", {
                    className: (0, ne.A)(
                      Cr().ReviewScore,
                      e.bPositiveReviews ? Cr().Positive : Cr().Negative,
                    ),
                  }),
                ),
              })
            : null;
        }
        function Tp(s) {
          const { reasons: e } = s;
          return !e.bTopSeller && !e.bPopular
            ? null
            : (0, t.jsx)(sr, {
                description: g.Localize(
                  e.bTopSeller
                    ? "#AppPage_RecommendationReason_TopSeller"
                    : "#AppPage_RecommendationReason_Popular",
                ),
              });
        }
        function Sp(s) {
          const { reasons: e } = s;
          return e.bUserLanguageSupported
            ? null
            : (0, t.jsx)(ol, {
                description: (0, Be.xh)(
                  g.Localize(
                    "#AppPage_RecommendationReason_LanguageUnsupported",
                  ),
                  (0, t.jsx)(L.Ii, {
                    href: `${Y.TS.STORE_BASE_URL}account/languagepreferences/`,
                  }),
                ),
              });
        }
        function Mp(s) {
          const { reasons: e } = s,
            n = (0, Jt.aL)(Y.TS.STORE_BASE_URL + "wishlist");
          return e.bWishlisted
            ? (0, t.jsx)(sr, {
                description: (0, Be.xh)(
                  g.Localize("#AppPage_RecommendationReason_Wishlisted"),
                  (0, t.jsx)(L.Ii, { href: n }),
                ),
              })
            : null;
        }
        function Ip(s) {
          const { reasons: e } = s;
          return !e.rgExcludedTags || e.rgExcludedTags.length == 0
            ? null
            : (0, t.jsx)(ol, {
                description: (0, Be.xh)(
                  g.Localize("#AppPage_RecommendationReason_ExcludedTags"),
                  (0, t.jsx)(L.Ii, {
                    href: `${Y.TS.STORE_BASE_URL}account/preferences`,
                  }),
                ),
                children: (0, t.jsx)(ml, { rgTags: e.rgExcludedTags }),
              });
        }
        function Lp(s, e) {
          return s.vanity_url
            ? `${Y.TS.STORE_BASE_URL}${e}/${s.vanity_url}`
            : `${Y.TS.STORE_BASE_URL}curator/${s.clanAccountID}`;
        }
        function Ap(s, e, n) {
          return `${Lp(s, e)}?appid=${n}`;
        }
        function Op(s) {
          return s.vanity_url
            ? `${Y.TS.COMMUNITY_BASE_URL}groups/${s.vanity_url}`
            : `${Y.TS.COMMUNITY_BASE_URL}gid/${s.clanSteamID?.ConvertTo64BitString()}`;
        }
        function pl(s, e) {
          return `${Op(s)}/curation/app/${e}`;
        }
        function ha(s) {
          const { reasons: e, type: n, strLocTag: r, rgCreators: a } = s;
          if (!a || a.length == 0) return null;
          const o = (l, c) => Ap(l, n, c);
          return (0, t.jsx)(pa, {
            appid: e.appid,
            type: Tn.Positive,
            fnURLGenerator: o,
            strLocTag: r,
            rgCurators: a.map((l) => l.creator_clan_account_id),
          });
        }
        function zp(s) {
          const { reasons: e } = s;
          return (0, t.jsx)(ha, {
            reasons: e,
            type: "developer",
            strLocTag: "#AppPage_RecommendationReason_FollowedDeveloper",
            rgCreators: e?.rgDevelopersFollowed,
          });
        }
        function Np(s) {
          const { reasons: e } = s;
          return (0, t.jsx)(ha, {
            reasons: e,
            type: "publisher",
            strLocTag: "#AppPage_RecommendationReason_FollowedPublisher",
            rgCreators: e?.rgPublishersFollowed,
          });
        }
        function Dp(s) {
          const { reasons: e } = s;
          return (0, t.jsx)(ha, {
            reasons: e,
            type: "franchise",
            strLocTag: "#AppPage_RecommendationReason_FollowedFranchise",
            rgCreators: e?.rgFranchisesFollowed,
          });
        }
        function Fp(s) {
          const { reasons: e } = s;
          return (0, t.jsx)(pa, {
            appid: e.appid,
            type: Tn.Positive,
            fnURLGenerator: pl,
            strLocTag: "#AppPage_RecommendationReason_CuratorRecommended",
            rgCurators: e.rgCuratorsPositive,
          });
        }
        function Rp(s) {
          const { reasons: e } = s;
          return (0, t.jsx)(pa, {
            appid: e.appid,
            type: Tn.Negative,
            fnURLGenerator: pl,
            strLocTag: "#AppPage_RecommendationReason_CuratorDisrecommended",
            rgCurators: e.rgCuratorsNegative,
          });
        }
        function Wp(s) {
          const { reasons: e } = s;
          return (0, t.jsx)(Yr, {
            appid: e.appid,
            type: Tn.Positive,
            strLocTag: "#AppPage_RecommendationReason_FriendsRecommended",
            rgFriends: e.rgFriendsRecommended,
            bLinkToReview: !0,
          });
        }
        function wp(s) {
          const { reasons: e } = s;
          return (0, t.jsx)(Yr, {
            appid: e.appid,
            type: Tn.Negative,
            strLocTag: "#AppPage_RecommendationReason_FriendsDisrecommended",
            rgFriends: e.rgFriendsDisrecommended,
            bLinkToReview: !0,
          });
        }
        function Up(s) {
          const { reasons: e } = s,
            n = gl("#AppPage_RecommendationReason_FriendsWishlisted", e);
          return (0, t.jsx)(Yr, {
            appid: e.appid,
            type: Tn.Info,
            strLocTag: n,
            rgFriends: e.rgFriendsWishlisted,
          });
        }
        function Cp(s) {
          const { reasons: e } = s,
            n = gl("#AppPage_RecommendationReason_FriendsOwned", e);
          return (0, t.jsx)(Yr, {
            appid: e.appid,
            type: Tn.Info,
            strLocTag: n,
            rgFriends: e.rgFriendsOwned,
          });
        }
        var Kp = i(16836),
          ya = i.n(Kp);
        const Gp = 6,
          Yp = 2;
        function kp(s) {
          const { appid: e, bCanShowOwners: n } = s,
            r = $g(e),
            { data: a } = (0, M.J$)({ appid: e }),
            o = r?.rgFriendsThatWant || [],
            l = n ? r?.rgFriendsThatOwn || [] : [];
          if (o.length == 0 && l.length == 0) return null;
          d.use(g.Ready());
          const c = a?.type || oe.uE.HT;
          return (0, t.jsxs)(qt.YZ, {
            className: ya().FriendOwnership,
            "flow-children": "column",
            children: [
              o.length > 0 &&
                (0, t.jsx)(fl, {
                  appid: e,
                  strLocTag: g.GetAppTypePluralLocKey(
                    "#AppPage_RecommendationReason_FriendsWishlisted",
                    c,
                  ),
                  rgFriends: o,
                  bShowNames: o.length <= Yp,
                  bShowPlaytime: !1,
                }),
              l.length > 0 &&
                (0, t.jsx)(fl, {
                  appid: e,
                  strLocTag: g.GetAppTypePluralLocKey(
                    "#AppPage_RecommendationReason_FriendsOwned",
                    c,
                  ),
                  rgFriends: l,
                  bShowNames: !0,
                  bShowPlaytime: !0,
                }),
            ],
          });
        }
        function fl(s) {
          const {
              appid: e,
              strLocTag: n,
              rgFriends: r,
              bShowNames: a,
              bShowPlaytime: o,
            } = s,
            l = cl(e),
            c = (0, Be.xh)(
              g.LocalizePlural(n, r.length),
              (0, t.jsx)(L.Ii, { href: l }),
            );
          return (0, t.jsx)(ma, {
            description: c,
            children: (0, t.jsx)(T.Z, {
              className: (0, ne.A)(ya().FriendList, a && ya().WithNames),
              "flow-children": a ? "grid" : "row",
              children: r
                .slice(0, Gp)
                .map((m) =>
                  (0, t.jsx)(
                    dl,
                    {
                      accountid: m.accountid,
                      bShowName: a,
                      friend: o ? m : void 0,
                    },
                    m.accountid,
                  ),
                ),
            }),
          });
        }
        var Qp = i(35413),
          Vp = i(78747),
          Qt = i.n(Vp);
        function Qr(s) {
          if (!s || !/^https?:/.test(s)) return;
          if (!(0, Mr.p)(s)) return s;
          const e = (0, Mr.E)(s);
          return se.TS.IN_CLIENT ? "steam://openurl_external/" + e : e;
        }
        function $p(s) {
          const { curator: e, recommendation: n } = s,
            r = xl(n.link_url),
            a = Qr(n.link_url),
            o = !!r?.iframe || !!r?.image;
          return (0, t.jsxs)("div", {
            className: Qt().Container,
            children: [
              (0, t.jsx)("h2", {
                children: g.Localize("#AppPage_Curator_Title"),
              }),
              (0, t.jsxs)(qt.YZ, {
                "flow-children": "row",
                className: Qt().Review,
                children: [
                  o &&
                    (0, t.jsxs)(F.s, {
                      direction: "column",
                      className: Qt().Video,
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
                          (0, t.jsxs)(L.Ii, {
                            href: a,
                            className: Qt().VideoThumbnail,
                            children: [
                              (0, t.jsx)("img", {
                                src: r.image,
                                alt: g.Localize(
                                  "#AppPage_Curator_VideoThumbnail",
                                ),
                              }),
                              (0, t.jsx)("div", {
                                className: Qt().PlayOverlay,
                                children: (0, t.jsx)(Ve.jGG, {}),
                              }),
                            ],
                          }),
                        (0, t.jsx)(hl, { ...s }),
                      ],
                    }),
                  (0, t.jsx)("div", {
                    className: (0, ne.A)(Qt().DetailRight, !o && Qt().NoVideo),
                    children: (0, t.jsx)("div", {
                      className: Qt().Blurb,
                      children: (0, t.jsxs)(F.s, {
                        direction: "column",
                        gap: "1",
                        children: [
                          (0, t.jsxs)(F.s, {
                            direction: "row",
                            gap: "1",
                            children: [
                              (0, t.jsx)("div", {
                                className: Qt().Avatar,
                                children: (0, t.jsx)("img", {
                                  src: (0, Qp.t)(e.avatar_sha, "full"),
                                  alt: "",
                                }),
                              }),
                              (0, t.jsxs)(F.s, {
                                direction: "column",
                                flexGrow: "1",
                                children: [
                                  (0, t.jsx)(Jp, {
                                    state: n.recommendation_state,
                                  }),
                                  (0, t.jsx)(j.EY, {
                                    size: "2",
                                    color: "greyneutral-11",
                                    children: (0, t.jsxs)(F.s, {
                                      direction: "row",
                                      gap: "1",
                                      children: [
                                        (0, Be.xh)(
                                          g.Localize(
                                            "#AppPage_Curator_By",
                                            e.name,
                                          ),
                                          (0, t.jsx)(L.Ii, { href: e.link }),
                                        ),
                                        (0, Ut.$z)(n.time_recommended, {
                                          month: "long",
                                        }),
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                              (0, t.jsxs)(F.s, {
                                direction: "row",
                                children: [
                                  !!n.received_for_free &&
                                    (0, t.jsx)(yl, {
                                      strToolTip: g.Localize(
                                        "#AppPage_Curator_ReceivedForFree",
                                      ),
                                      strIcon: "icon_free.png",
                                    }),
                                  !!n.received_compensation &&
                                    (0, t.jsx)(yl, {
                                      strToolTip: g.Localize(
                                        "#AppPage_Curator_ReceivedCompensation",
                                      ),
                                      strIcon: "icon_compensation.png",
                                    }),
                                ],
                              }),
                            ],
                          }),
                          (0, t.jsx)(Zp, { strBlurb: n.blurb }),
                          !o &&
                            (0, t.jsx)(F.s, {
                              direction: "row",
                              children: (0, t.jsx)(hl, { ...s }),
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
        function hl(s) {
          const { recommendation: e, curator_preferences: n } = s,
            r = xl(e.link_url),
            a = Qr(e.link_url),
            o = Qr(n?.discussion_url),
            l = !!r?.iframe || !!r?.image;
          return (0, t.jsxs)(t.Fragment, {
            children: [
              a &&
                (0, t.jsx)(vl, {
                  strURL: a,
                  bPlayIcon: l,
                  strText: g.Localize(
                    l
                      ? "#AppPage_Curator_WatchFullReview"
                      : "#AppPage_Curator_ReadFullReview",
                  ),
                }),
              o &&
                (0, t.jsx)(vl, {
                  strURL: o,
                  strText: g.Localize("#AppPage_Curator_Discuss"),
                }),
            ],
          });
        }
        function yl(s) {
          const { strToolTip: e, strIcon: n } = s;
          return (0, t.jsx)(Yt.he, {
            toolTipContent: e,
            children: (0, t.jsx)("div", {
              className: Qt().CuratorReceived,
              children: (0, t.jsx)("img", {
                src: `${se.TS.IMG_URL}/curators/${n}`,
                alt: "",
              }),
            }),
          });
        }
        function Jp(s) {
          switch (s.state) {
            case nr.tV.$D:
              return (0, t.jsx)("span", {
                className: (0, ne.A)(Qt().ReviewTitle, Qt().Recommended),
                children: g.Localize("#AppPage_Curator_Recommended"),
              });
            case nr.tV.qP:
              return (0, t.jsx)("span", {
                className: (0, ne.A)(Qt().ReviewTitle, Qt().NotRecommended),
                children: g.Localize("#AppPage_Curator_NotRecommended"),
              });
            case nr.tV.y8:
              return (0, t.jsx)("span", {
                className: (0, ne.A)(Qt().ReviewTitle, Qt().Informational),
                children: g.Localize("#AppPage_Curator_Informational"),
              });
            default:
              return null;
          }
        }
        function Zp(s) {
          const e = (s.strBlurb ?? "").split(`
`);
          return e.length == 0
            ? null
            : ((e[0] = g.Localize("#AppPage_Curator_QuoteLeft") + e[0].trim()),
              (e[e.length - 1] =
                e[e.length - 1].trim() +
                g.Localize("#AppPage_Curator_QuoteRight")),
              (0, t.jsx)(j.EY, {
                className: Qt().BlurbText,
                children: e.map((n, r) =>
                  (0, t.jsx)("div", { children: n }, r),
                ),
              }));
        }
        function vl(s) {
          const { strURL: e, strText: n, bPlayIcon: r } = s;
          return (0, t.jsx)(Yt.he, {
            toolTipContent: e,
            children: (0, t.jsxs)(Ze.v, {
              href: e,
              openInNewWindow: !0,
              size: "1",
              variant: "inverted",
              color: "sky",
              width: "100%",
              children: [
                r &&
                  (0, t.jsx)("span", {
                    className: Qt().PlayIcon,
                    children: (0, t.jsx)(Ve.jGG, {}),
                  }),
                n,
              ],
            }),
          });
        }
        function xl(s) {
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
        var Xp = i(10538),
          Hp = i(9682);
        function jl(s, e) {
          return ["OwnReview", s, e];
        }
        function qp(s) {
          const e = (0, pn.KV)(),
            n = (0, Wt.AP)(s),
            r = _p(e, Y.iA.steamid, n);
          return (0, Oe.I)(r);
        }
        function _p(s, e, n) {
          return {
            queryKey: jl(e, n),
            queryFn: async () => {
              const r = await Hp.YK.GetIndividualRecommendations(s, {
                requests: [{ steamid: e, appid: n }],
              });
              if (r.GetEResult() == jn.p) return null;
              if (r.GetEResult() != jn.R)
                throw new Ui.x(
                  r.GetEResult(),
                  "Error from GetIndividualRecommendations",
                );
              return r.Body().recommendations()[0]?.toObject() ?? null;
            },
            staleTime: 1 / 0,
          };
        }
        function e0(s) {
          const e = (0, ze.jE)(),
            n = (0, Wt.AP)(s);
          return d.useCallback(
            (r) => {
              e.setQueryData(jl(Y.iA.steamid, n), r);
            },
            [e, n],
          );
        }
        var t0 = i(85743),
          va = i(28794),
          n0 = i(57581),
          s0 = i(15751),
          bl = i.n(s0),
          r0 = i(6876),
          xa = i.n(r0);
        function i0(s) {
          const { review: e, eAppType: n, nSteamworksAppid: r, onEdit: a } = s,
            { data: o } = (0, _s.jn)(Y.iA.steamid);
          d.use(g.Ready());
          const l = (0, t0.Fi)((0, qs.n)(o, Y.iA.steamid), r),
            c = e.is_public
              ? "#AppPage_OwnReview_PostedPublic"
              : "#AppPage_OwnReview_PostedFriendsOnly";
          return (0, t.jsxs)(F.s, {
            direction: "column",
            padding: "4",
            borderColor: "greyneutral-9 50%",
            children: [
              (0, t.jsx)(a0, { review: e, eAppType: n }),
              (0, t.jsxs)(F.s, {
                direction: "column",
                background: "greyneutral-11 14%",
                children: [
                  (0, t.jsx)(l0, { review: e }),
                  (0, t.jsxs)(F.s, {
                    direction: "column",
                    gap: "3",
                    padding: "3",
                    children: [
                      (0, t.jsxs)(F.s, {
                        gap: "3",
                        align: "center",
                        children: [
                          (0, t.jsx)(o0, { bPositive: !!e.voted_up }),
                          (0, t.jsx)(ce.az, {
                            flexGrow: "1",
                            children: (0, t.jsx)(j.EY, {
                              size: "3",
                              color: "slate-11",
                              children: g.Localize(c),
                            }),
                          }),
                        ],
                      }),
                      (0, t.jsx)(c0, { review: e }),
                      (0, t.jsxs)(F.s, {
                        gap: "2",
                        justify: "end",
                        children: [
                          (0, t.jsx)(Ze.$, {
                            focusable: !0,
                            color: "blue",
                            onClick: a,
                            children: g.Localize("#AppPage_OwnReview_Edit"),
                          }),
                          (0, t.jsx)(Ze.v, {
                            focusable: !0,
                            color: "blue",
                            href: l,
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
        function a0(s) {
          const { review: e, eAppType: n } = s,
            r = g.GetAppTypeLocKey(
              "#AppPage_OwnReview_Reviewed",
              n ?? oe.uE.HT,
            ),
            a = (0, Ut._l)(e.time_created ?? 0, { fullmonthname: !0 });
          return (0, t.jsxs)(j.EY, {
            size: "5",
            weight: "medium",
            color: "text-light",
            contrast: "title",
            marginBottom: "2",
            children: [
              g.Localize(r, a),
              !!e.time_updated &&
                ` (${g.Localize("#AppPage_OwnReview_Updated", (0, Ut._l)(e.time_updated, { fullmonthname: !0 }))})`,
            ],
          });
        }
        function o0(s) {
          const { bPositive: e } = s;
          return (0, t.jsx)("div", {
            className: (0, ne.A)(xa().ThumbIcon, !e && xa().Down),
            children: (0, t.jsx)(Q.twC, {}),
          });
        }
        function l0(s) {
          const { review: e } = s,
            n = e.votes_up ?? 0,
            r = e.comment_count ?? 0;
          return !n && !r
            ? null
            : (0, t.jsxs)(F.s, {
                gap: "3",
                align: "center",
                paddingX: "4",
                paddingY: "2",
                background: "greyneutral-9 50%",
                children: [
                  n > 0 &&
                    (0, t.jsx)(j.EY, {
                      size: "3",
                      children: g.LocalizePlural(
                        "#AppPage_OwnReview_HelpfulCount",
                        n,
                      ),
                    }),
                  r > 0 &&
                    (0, t.jsxs)(F.s, {
                      gap: "1",
                      align: "center",
                      children: [
                        (0, t.jsx)(j.EY, { size: "3", children: r }),
                        (0, t.jsx)(Q.MwB, { className: xa().CommentIcon }),
                      ],
                    }),
                ],
              });
        }
        function c0(s) {
          const { review: e } = s,
            [n, r] = d.useState(!1),
            a = d.useCallback(() => r(!0), []);
          if (!e.developer_response) return null;
          d.use(va.c.Ready());
          const o = (0, Ut._l)(e.time_developer_responded ?? 0, {
            fullmonthname: !0,
            bUseRelativeNames: !1,
          });
          return (0, t.jsxs)(F.s, {
            direction: "column",
            gap: "2",
            children: [
              (0, t.jsxs)(F.s, {
                gap: "2",
                align: "center",
                wrap: "wrap",
                children: [
                  (0, t.jsx)(j.EY, {
                    size: "3",
                    color: "slate-11",
                    children: va.c.Localize(
                      "#Review_OfficialDeveloperResponseExistsDate",
                      o,
                    ),
                  }),
                  !n &&
                    (0, t.jsx)(Ze.$, {
                      focusable: !0,
                      size: "1",
                      variant: "ghost",
                      color: "blue",
                      onClick: a,
                      children: va.c.Localize(
                        "#Review_OfficialDeveloperResponse_View",
                      ),
                    }),
                ],
              }),
              n &&
                (0, t.jsx)(ce.az, {
                  padding: "3",
                  background: "greyneutral-9 50%",
                  className: (0, ne.A)(bl().BBCodeContent, bl().Community),
                  children: (0, t.jsx)(n0.J, {
                    text: e.developer_response,
                    bBeWary: !0,
                  }),
                }),
            ],
          });
        }
        var d0 = i(3877),
          u0 = i(24089);
        function m0() {
          return u0.TextEntry;
        }
        var g0 = i(86946),
          p0 = i(80549);
        function f0(s) {
          const {
              rows: e = 3,
              resize: n = "none",
              ref: r,
              value: a,
              onTextChange: o,
              onChange: l,
              disabled: c,
              variant: m,
              ...f
            } = s,
            y = (I) => {
              c || (o(I.target.value), l && l(I));
            },
            v = (0, p0.f)("TextArea", m),
            b = (0, se.Qn)(),
            B = (0, g0.w)({
              ...f,
              className: ss()((0, d0.T)(), m0()),
              style: { resize: n },
              cursor: "text",
              disabled: c,
              variant: v,
            }),
            S = b ? h0 : "textarea";
          return (0, t.jsx)(S, {
            ref: r,
            ...B,
            value: a || "",
            onChange: y,
            rows: e,
            readOnly: c,
            "aria-disabled": c,
          });
        }
        function h0(s) {
          return (0, t.jsx)(L.dO, { noFocusRing: !0, ...s });
        }
        var y0 = i(12204),
          ja = i(94381),
          v0 = i(17171),
          Bl = i(28361),
          ba = i(16412);
        function x0(s, e) {
          const n = (0, Wt.AP)(s),
            r = (0, Jt.ru)("recommend-game");
          return (0, we.n)({
            mutationFn: (a) => (e ? B0(e, a) : b0(s, n, a, r)),
            onSuccess: () => {
              window.location.reload();
            },
          });
        }
        function j0(s) {
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
        async function b0(s, e, n, r) {
          const a = await El(`${Y.TS.STORE_BASE_URL}friends/recommendgame`, {
            appid: s,
            steamworksappid: e,
            comment: n.review ?? "",
            rated_up: n.voted_up,
            is_public: n.is_public,
            language: n.language ?? "",
            received_compensation: n.received_compensation,
            disable_comments: n.comments_disabled,
            sessionid: (0, se.KC)(),
            hide_in_steam_china: !(0, Bn.nA)(Y.TS.EREALM),
            saved_hardware_id: n.saved_hardware_id,
            snr: r,
          });
          if (!a.success) throw new Error(a.strError ?? "");
        }
        async function B0(s, e) {
          if (
            (
              await El(`${Y.TS.STORE_BASE_URL}userreviews/update/${s}`, {
                review_text: e.review ?? "",
                voted_up: e.voted_up,
                is_public: e.is_public,
                language: e.language ?? "",
                received_compensation: e.received_compensation,
                comments_disabled: e.comments_disabled,
                saved_hardware_id: e.saved_hardware_id,
                sessionid: (0, se.KC)(),
              })
            ).success != jn.R
          )
            throw new Error("");
        }
        async function El(s, e) {
          const n = j0(e);
          return await (
            await fetch(s, { method: "POST", body: n, credentials: "include" })
          )
            .json()
            .catch(() => ({}));
        }
        var ee = i(80613),
          A = i.n(ee),
          p = i(75245);
        function nh(s) {
          return "unknown EValveIndexComponent ( " + s + " )";
        }
        function sh(s) {
          return "unknown EFramePromoSerialRedemptionSource ( " + s + " )";
        }
        class it extends ee.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              it.prototype.serial_number || p.Sg(it.M()),
              ee.Message.initialize(this, e, 0, -1, void 0, null);
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
                      br: p.qM.readString,
                      bw: p.gp.writeString,
                    },
                    controller_code: {
                      n: 2,
                      br: p.qM.readString,
                      bw: p.gp.writeString,
                    },
                  },
                }),
              it.sm_m
            );
          }
          static MBF() {
            return it.sm_mbf || (it.sm_mbf = p.w0(it.M())), it.sm_mbf;
          }
          toObject(e = !1) {
            return it.toObject(e, this);
          }
          static toObject(e, n) {
            return p.BT(it.M(), e, n);
          }
          static fromObject(e) {
            return p.Uq(it.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (A().BinaryReader)(e),
              r = new it();
            return it.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return p.zj(it.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (A().BinaryWriter)();
            return it.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            p.i0(it.M(), e, n);
          }
          serializeBase64String() {
            var e = new (A().BinaryWriter)();
            return (
              it.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_QueryAccountsRegisteredToSerial_Request";
          }
        }
        class at extends ee.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              at.prototype.accountid || p.Sg(at.M()),
              ee.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              at.sm_m ||
                (at.sm_m = {
                  proto: at,
                  fields: {
                    accountid: {
                      n: 1,
                      br: p.qM.readUint32,
                      bw: p.gp.writeUint32,
                    },
                    registration_complete: {
                      n: 2,
                      br: p.qM.readBool,
                      bw: p.gp.writeBool,
                    },
                  },
                }),
              at.sm_m
            );
          }
          static MBF() {
            return at.sm_mbf || (at.sm_mbf = p.w0(at.M())), at.sm_mbf;
          }
          toObject(e = !1) {
            return at.toObject(e, this);
          }
          static toObject(e, n) {
            return p.BT(at.M(), e, n);
          }
          static fromObject(e) {
            return p.Uq(at.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (A().BinaryReader)(e),
              r = new at();
            return at.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return p.zj(at.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (A().BinaryWriter)();
            return at.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            p.i0(at.M(), e, n);
          }
          serializeBase64String() {
            var e = new (A().BinaryWriter)();
            return (
              at.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_QueryAccountsRegisteredToSerial_Accounts";
          }
        }
        class ot extends ee.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ot.prototype.accounts || p.Sg(ot.M()),
              ee.Message.initialize(this, e, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ot.sm_m ||
                (ot.sm_m = {
                  proto: ot,
                  fields: { accounts: { n: 1, c: at, r: !0, q: !0 } },
                }),
              ot.sm_m
            );
          }
          static MBF() {
            return ot.sm_mbf || (ot.sm_mbf = p.w0(ot.M())), ot.sm_mbf;
          }
          toObject(e = !1) {
            return ot.toObject(e, this);
          }
          static toObject(e, n) {
            return p.BT(ot.M(), e, n);
          }
          static fromObject(e) {
            return p.Uq(ot.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (A().BinaryReader)(e),
              r = new ot();
            return ot.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return p.zj(ot.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (A().BinaryWriter)();
            return ot.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            p.i0(ot.M(), e, n);
          }
          serializeBase64String() {
            var e = new (A().BinaryWriter)();
            return (
              ot.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_QueryAccountsRegisteredToSerial_Response";
          }
        }
        class lt extends ee.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              lt.prototype.serial_number || p.Sg(lt.M()),
              ee.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              lt.sm_m ||
                (lt.sm_m = {
                  proto: lt,
                  fields: {
                    serial_number: {
                      n: 1,
                      br: p.qM.readString,
                      bw: p.gp.writeString,
                    },
                    controller_code: {
                      n: 2,
                      br: p.qM.readString,
                      bw: p.gp.writeString,
                    },
                  },
                }),
              lt.sm_m
            );
          }
          static MBF() {
            return lt.sm_mbf || (lt.sm_mbf = p.w0(lt.M())), lt.sm_mbf;
          }
          toObject(e = !1) {
            return lt.toObject(e, this);
          }
          static toObject(e, n) {
            return p.BT(lt.M(), e, n);
          }
          static fromObject(e) {
            return p.Uq(lt.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (A().BinaryReader)(e),
              r = new lt();
            return lt.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return p.zj(lt.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (A().BinaryWriter)();
            return lt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            p.i0(lt.M(), e, n);
          }
          serializeBase64String() {
            var e = new (A().BinaryWriter)();
            return (
              lt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_RegisterSteamController_Request";
          }
        }
        class Cn extends ee.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), ee.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return Cn.toObject(e, this);
          }
          static toObject(e, n) {
            return e ? { $jspbMessageInstance: n } : {};
          }
          static fromObject(e) {
            return new Cn();
          }
          static deserializeBinary(e) {
            let n = new (A().BinaryReader)(e),
              r = new Cn();
            return Cn.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return e;
          }
          serializeBinary() {
            var e = new (A().BinaryWriter)();
            return Cn.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {}
          serializeBase64String() {
            var e = new (A().BinaryWriter)();
            return (
              Cn.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_RegisterSteamController_Response";
          }
        }
        class ct extends ee.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ct.prototype.serial_number || p.Sg(ct.M()),
              ee.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ct.sm_m ||
                (ct.sm_m = {
                  proto: ct,
                  fields: {
                    serial_number: {
                      n: 1,
                      br: p.qM.readString,
                      bw: p.gp.writeString,
                    },
                    controller_code: {
                      n: 2,
                      br: p.qM.readString,
                      bw: p.gp.writeString,
                    },
                  },
                }),
              ct.sm_m
            );
          }
          static MBF() {
            return ct.sm_mbf || (ct.sm_mbf = p.w0(ct.M())), ct.sm_mbf;
          }
          toObject(e = !1) {
            return ct.toObject(e, this);
          }
          static toObject(e, n) {
            return p.BT(ct.M(), e, n);
          }
          static fromObject(e) {
            return p.Uq(ct.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (A().BinaryReader)(e),
              r = new ct();
            return ct.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return p.zj(ct.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (A().BinaryWriter)();
            return ct.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            p.i0(ct.M(), e, n);
          }
          serializeBase64String() {
            var e = new (A().BinaryWriter)();
            return (
              ct.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_CompleteSteamControllerRegistration_Request";
          }
        }
        class Kn extends ee.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), ee.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return Kn.toObject(e, this);
          }
          static toObject(e, n) {
            return e ? { $jspbMessageInstance: n } : {};
          }
          static fromObject(e) {
            return new Kn();
          }
          static deserializeBinary(e) {
            let n = new (A().BinaryReader)(e),
              r = new Kn();
            return Kn.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return e;
          }
          serializeBinary() {
            var e = new (A().BinaryWriter)();
            return Kn.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {}
          serializeBase64String() {
            var e = new (A().BinaryWriter)();
            return (
              Kn.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_CompleteSteamControllerRegistration_Response";
          }
        }
        class dt extends ee.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              dt.prototype.appidorname || p.Sg(dt.M()),
              ee.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              dt.sm_m ||
                (dt.sm_m = {
                  proto: dt,
                  fields: {
                    appidorname: {
                      n: 1,
                      br: p.qM.readString,
                      bw: p.gp.writeString,
                    },
                    publishedfileid: {
                      n: 2,
                      br: p.qM.readUint64String,
                      bw: p.gp.writeUint64String,
                    },
                    templatename: {
                      n: 3,
                      br: p.qM.readString,
                      bw: p.gp.writeString,
                    },
                  },
                }),
              dt.sm_m
            );
          }
          static MBF() {
            return dt.sm_mbf || (dt.sm_mbf = p.w0(dt.M())), dt.sm_mbf;
          }
          toObject(e = !1) {
            return dt.toObject(e, this);
          }
          static toObject(e, n) {
            return p.BT(dt.M(), e, n);
          }
          static fromObject(e) {
            return p.Uq(dt.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (A().BinaryReader)(e),
              r = new dt();
            return dt.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return p.zj(dt.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (A().BinaryWriter)();
            return dt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            p.i0(dt.M(), e, n);
          }
          serializeBase64String() {
            var e = new (A().BinaryWriter)();
            return (
              dt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_SteamControllerSetConfig_ControllerConfig";
          }
        }
        class ut extends ee.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ut.prototype.serial_number || p.Sg(ut.M()),
              ee.Message.initialize(this, e, 0, -1, [4], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ut.sm_m ||
                (ut.sm_m = {
                  proto: ut,
                  fields: {
                    serial_number: {
                      n: 1,
                      br: p.qM.readString,
                      bw: p.gp.writeString,
                    },
                    controller_code: {
                      n: 2,
                      br: p.qM.readString,
                      bw: p.gp.writeString,
                    },
                    accountid: {
                      n: 3,
                      br: p.qM.readUint32,
                      bw: p.gp.writeUint32,
                    },
                    configurations: { n: 4, c: dt, r: !0, q: !0 },
                    controller_type: {
                      n: 5,
                      d: 2,
                      br: p.qM.readInt32,
                      bw: p.gp.writeInt32,
                    },
                    only_for_this_serial: {
                      n: 6,
                      d: !1,
                      br: p.qM.readBool,
                      bw: p.gp.writeBool,
                    },
                  },
                }),
              ut.sm_m
            );
          }
          static MBF() {
            return ut.sm_mbf || (ut.sm_mbf = p.w0(ut.M())), ut.sm_mbf;
          }
          toObject(e = !1) {
            return ut.toObject(e, this);
          }
          static toObject(e, n) {
            return p.BT(ut.M(), e, n);
          }
          static fromObject(e) {
            return p.Uq(ut.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (A().BinaryReader)(e),
              r = new ut();
            return ut.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return p.zj(ut.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (A().BinaryWriter)();
            return ut.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            p.i0(ut.M(), e, n);
          }
          serializeBase64String() {
            var e = new (A().BinaryWriter)();
            return (
              ut.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_SteamControllerSetConfig_Request";
          }
        }
        class Gn extends ee.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), ee.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return Gn.toObject(e, this);
          }
          static toObject(e, n) {
            return e ? { $jspbMessageInstance: n } : {};
          }
          static fromObject(e) {
            return new Gn();
          }
          static deserializeBinary(e) {
            let n = new (A().BinaryReader)(e),
              r = new Gn();
            return Gn.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return e;
          }
          serializeBinary() {
            var e = new (A().BinaryWriter)();
            return Gn.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {}
          serializeBase64String() {
            var e = new (A().BinaryWriter)();
            return (
              Gn.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_SteamControllerSetConfig_Response";
          }
        }
        class mt extends ee.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              mt.prototype.serial_number || p.Sg(mt.M()),
              ee.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              mt.sm_m ||
                (mt.sm_m = {
                  proto: mt,
                  fields: {
                    serial_number: {
                      n: 1,
                      br: p.qM.readString,
                      bw: p.gp.writeString,
                    },
                    controller_code: {
                      n: 2,
                      br: p.qM.readString,
                      bw: p.gp.writeString,
                    },
                    accountid: {
                      n: 3,
                      br: p.qM.readUint32,
                      bw: p.gp.writeUint32,
                    },
                    appidorname: {
                      n: 4,
                      br: p.qM.readString,
                      bw: p.gp.writeString,
                    },
                    controller_type: {
                      n: 5,
                      d: 2,
                      br: p.qM.readInt32,
                      bw: p.gp.writeInt32,
                    },
                    only_for_this_serial: {
                      n: 6,
                      d: !1,
                      br: p.qM.readBool,
                      bw: p.gp.writeBool,
                    },
                  },
                }),
              mt.sm_m
            );
          }
          static MBF() {
            return mt.sm_mbf || (mt.sm_mbf = p.w0(mt.M())), mt.sm_mbf;
          }
          toObject(e = !1) {
            return mt.toObject(e, this);
          }
          static toObject(e, n) {
            return p.BT(mt.M(), e, n);
          }
          static fromObject(e) {
            return p.Uq(mt.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (A().BinaryReader)(e),
              r = new mt();
            return mt.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return p.zj(mt.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (A().BinaryWriter)();
            return mt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            p.i0(mt.M(), e, n);
          }
          serializeBase64String() {
            var e = new (A().BinaryWriter)();
            return (
              mt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_SteamControllerGetConfig_Request";
          }
        }
        class gt extends ee.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              gt.prototype.appidorname || p.Sg(gt.M()),
              ee.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              gt.sm_m ||
                (gt.sm_m = {
                  proto: gt,
                  fields: {
                    appidorname: {
                      n: 1,
                      br: p.qM.readString,
                      bw: p.gp.writeString,
                    },
                    publishedfileid: {
                      n: 2,
                      br: p.qM.readUint64String,
                      bw: p.gp.writeUint64String,
                    },
                    templatename: {
                      n: 3,
                      br: p.qM.readString,
                      bw: p.gp.writeString,
                    },
                    serial_number: {
                      n: 4,
                      d: "",
                      br: p.qM.readString,
                      bw: p.gp.writeString,
                    },
                    autosave: {
                      n: 5,
                      d: !1,
                      br: p.qM.readBool,
                      bw: p.gp.writeBool,
                    },
                  },
                }),
              gt.sm_m
            );
          }
          static MBF() {
            return gt.sm_mbf || (gt.sm_mbf = p.w0(gt.M())), gt.sm_mbf;
          }
          toObject(e = !1) {
            return gt.toObject(e, this);
          }
          static toObject(e, n) {
            return p.BT(gt.M(), e, n);
          }
          static fromObject(e) {
            return p.Uq(gt.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (A().BinaryReader)(e),
              r = new gt();
            return gt.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return p.zj(gt.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (A().BinaryWriter)();
            return gt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            p.i0(gt.M(), e, n);
          }
          serializeBase64String() {
            var e = new (A().BinaryWriter)();
            return (
              gt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_SteamControllerGetConfig_ControllerConfig";
          }
        }
        class pt extends ee.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              pt.prototype.configurations || p.Sg(pt.M()),
              ee.Message.initialize(this, e, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              pt.sm_m ||
                (pt.sm_m = {
                  proto: pt,
                  fields: { configurations: { n: 1, c: gt, r: !0, q: !0 } },
                }),
              pt.sm_m
            );
          }
          static MBF() {
            return pt.sm_mbf || (pt.sm_mbf = p.w0(pt.M())), pt.sm_mbf;
          }
          toObject(e = !1) {
            return pt.toObject(e, this);
          }
          static toObject(e, n) {
            return p.BT(pt.M(), e, n);
          }
          static fromObject(e) {
            return p.Uq(pt.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (A().BinaryReader)(e),
              r = new pt();
            return pt.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return p.zj(pt.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (A().BinaryWriter)();
            return pt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            p.i0(pt.M(), e, n);
          }
          serializeBase64String() {
            var e = new (A().BinaryWriter)();
            return (
              pt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_SteamControllerGetConfig_Response";
          }
        }
        class ft extends ee.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ft.prototype.serial_number || p.Sg(ft.M()),
              ee.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ft.sm_m ||
                (ft.sm_m = {
                  proto: ft,
                  fields: {
                    serial_number: {
                      n: 1,
                      br: p.qM.readString,
                      bw: p.gp.writeString,
                    },
                    controller_code: {
                      n: 2,
                      br: p.qM.readString,
                      bw: p.gp.writeString,
                    },
                    accountid: {
                      n: 3,
                      br: p.qM.readUint32,
                      bw: p.gp.writeUint32,
                    },
                  },
                }),
              ft.sm_m
            );
          }
          static MBF() {
            return ft.sm_mbf || (ft.sm_mbf = p.w0(ft.M())), ft.sm_mbf;
          }
          toObject(e = !1) {
            return ft.toObject(e, this);
          }
          static toObject(e, n) {
            return p.BT(ft.M(), e, n);
          }
          static fromObject(e) {
            return p.Uq(ft.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (A().BinaryReader)(e),
              r = new ft();
            return ft.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return p.zj(ft.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (A().BinaryWriter)();
            return ft.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            p.i0(ft.M(), e, n);
          }
          serializeBase64String() {
            var e = new (A().BinaryWriter)();
            return (
              ft.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_DeRegisterSteamController_Request";
          }
        }
        class Yn extends ee.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), ee.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return Yn.toObject(e, this);
          }
          static toObject(e, n) {
            return e ? { $jspbMessageInstance: n } : {};
          }
          static fromObject(e) {
            return new Yn();
          }
          static deserializeBinary(e) {
            let n = new (A().BinaryReader)(e),
              r = new Yn();
            return Yn.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return e;
          }
          serializeBinary() {
            var e = new (A().BinaryWriter)();
            return Yn.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {}
          serializeBase64String() {
            var e = new (A().BinaryWriter)();
            return (
              Yn.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_DeRegisterSteamController_Response";
          }
        }
        class ht extends ee.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ht.prototype.serial_number || p.Sg(ht.M()),
              ee.Message.initialize(this, e, 0, -1, void 0, null);
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
                      br: p.qM.readString,
                      bw: p.gp.writeString,
                    },
                    publishedfileid: {
                      n: 2,
                      br: p.qM.readUint64String,
                      bw: p.gp.writeUint64String,
                    },
                    accountid: {
                      n: 3,
                      br: p.qM.readUint32,
                      bw: p.gp.writeUint32,
                    },
                  },
                }),
              ht.sm_m
            );
          }
          static MBF() {
            return ht.sm_mbf || (ht.sm_mbf = p.w0(ht.M())), ht.sm_mbf;
          }
          toObject(e = !1) {
            return ht.toObject(e, this);
          }
          static toObject(e, n) {
            return p.BT(ht.M(), e, n);
          }
          static fromObject(e) {
            return p.Uq(ht.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (A().BinaryReader)(e),
              r = new ht();
            return ht.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return p.zj(ht.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (A().BinaryWriter)();
            return ht.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            p.i0(ht.M(), e, n);
          }
          serializeBase64String() {
            var e = new (A().BinaryWriter)();
            return (
              ht.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_SetPersonalizationFile_Request";
          }
        }
        class kn extends ee.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), ee.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return kn.toObject(e, this);
          }
          static toObject(e, n) {
            return e ? { $jspbMessageInstance: n } : {};
          }
          static fromObject(e) {
            return new kn();
          }
          static deserializeBinary(e) {
            let n = new (A().BinaryReader)(e),
              r = new kn();
            return kn.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return e;
          }
          serializeBinary() {
            var e = new (A().BinaryWriter)();
            return kn.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {}
          serializeBase64String() {
            var e = new (A().BinaryWriter)();
            return (
              kn.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_SetPersonalizationFile_Response";
          }
        }
        class yt extends ee.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              yt.prototype.serial_number || p.Sg(yt.M()),
              ee.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              yt.sm_m ||
                (yt.sm_m = {
                  proto: yt,
                  fields: {
                    serial_number: {
                      n: 1,
                      br: p.qM.readString,
                      bw: p.gp.writeString,
                    },
                    accountid: {
                      n: 2,
                      br: p.qM.readUint32,
                      bw: p.gp.writeUint32,
                    },
                  },
                }),
              yt.sm_m
            );
          }
          static MBF() {
            return yt.sm_mbf || (yt.sm_mbf = p.w0(yt.M())), yt.sm_mbf;
          }
          toObject(e = !1) {
            return yt.toObject(e, this);
          }
          static toObject(e, n) {
            return p.BT(yt.M(), e, n);
          }
          static fromObject(e) {
            return p.Uq(yt.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (A().BinaryReader)(e),
              r = new yt();
            return yt.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return p.zj(yt.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (A().BinaryWriter)();
            return yt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            p.i0(yt.M(), e, n);
          }
          serializeBase64String() {
            var e = new (A().BinaryWriter)();
            return (
              yt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_GetPersonalizationFile_Request";
          }
        }
        class vt extends ee.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              vt.prototype.publishedfileid || p.Sg(vt.M()),
              ee.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              vt.sm_m ||
                (vt.sm_m = {
                  proto: vt,
                  fields: {
                    publishedfileid: {
                      n: 1,
                      br: p.qM.readUint64String,
                      bw: p.gp.writeUint64String,
                    },
                  },
                }),
              vt.sm_m
            );
          }
          static MBF() {
            return vt.sm_mbf || (vt.sm_mbf = p.w0(vt.M())), vt.sm_mbf;
          }
          toObject(e = !1) {
            return vt.toObject(e, this);
          }
          static toObject(e, n) {
            return p.BT(vt.M(), e, n);
          }
          static fromObject(e) {
            return p.Uq(vt.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (A().BinaryReader)(e),
              r = new vt();
            return vt.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return p.zj(vt.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (A().BinaryWriter)();
            return vt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            p.i0(vt.M(), e, n);
          }
          serializeBase64String() {
            var e = new (A().BinaryWriter)();
            return (
              vt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_GetPersonalizationFile_Response";
          }
        }
        class xt extends ee.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              xt.prototype.product_name || p.Sg(xt.M()),
              ee.Message.initialize(this, e, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              xt.sm_m ||
                (xt.sm_m = {
                  proto: xt,
                  fields: {
                    product_name: {
                      n: 1,
                      br: p.qM.readString,
                      bw: p.gp.writeString,
                    },
                    values: { n: 2, c: jt, r: !0, q: !0 },
                  },
                }),
              xt.sm_m
            );
          }
          static MBF() {
            return xt.sm_mbf || (xt.sm_mbf = p.w0(xt.M())), xt.sm_mbf;
          }
          toObject(e = !1) {
            return xt.toObject(e, this);
          }
          static toObject(e, n) {
            return p.BT(xt.M(), e, n);
          }
          static fromObject(e) {
            return p.Uq(xt.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (A().BinaryReader)(e),
              r = new xt();
            return xt.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return p.zj(xt.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (A().BinaryWriter)();
            return xt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            p.i0(xt.M(), e, n);
          }
          serializeBase64String() {
            var e = new (A().BinaryWriter)();
            return (
              xt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_VRCompatibilityCheck_Request";
          }
        }
        class jt extends ee.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              jt.prototype.key || p.Sg(jt.M()),
              ee.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              jt.sm_m ||
                (jt.sm_m = {
                  proto: jt,
                  fields: {
                    key: { n: 1, br: p.qM.readString, bw: p.gp.writeString },
                    value: { n: 2, br: p.qM.readString, bw: p.gp.writeString },
                  },
                }),
              jt.sm_m
            );
          }
          static MBF() {
            return jt.sm_mbf || (jt.sm_mbf = p.w0(jt.M())), jt.sm_mbf;
          }
          toObject(e = !1) {
            return jt.toObject(e, this);
          }
          static toObject(e, n) {
            return p.BT(jt.M(), e, n);
          }
          static fromObject(e) {
            return p.Uq(jt.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (A().BinaryReader)(e),
              r = new jt();
            return jt.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return p.zj(jt.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (A().BinaryWriter)();
            return jt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            p.i0(jt.M(), e, n);
          }
          serializeBase64String() {
            var e = new (A().BinaryWriter)();
            return (
              jt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_VRCompatibilityCheck_Request_Pair";
          }
        }
        class bt extends ee.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              bt.prototype.values || p.Sg(bt.M()),
              ee.Message.initialize(this, e, 0, -1, [1, 2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              bt.sm_m ||
                (bt.sm_m = {
                  proto: bt,
                  fields: {
                    values: { n: 1, c: Bt, r: !0, q: !0 },
                    components: { n: 2, c: Et, r: !0, q: !0 },
                  },
                }),
              bt.sm_m
            );
          }
          static MBF() {
            return bt.sm_mbf || (bt.sm_mbf = p.w0(bt.M())), bt.sm_mbf;
          }
          toObject(e = !1) {
            return bt.toObject(e, this);
          }
          static toObject(e, n) {
            return p.BT(bt.M(), e, n);
          }
          static fromObject(e) {
            return p.Uq(bt.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (A().BinaryReader)(e),
              r = new bt();
            return bt.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return p.zj(bt.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (A().BinaryWriter)();
            return bt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            p.i0(bt.M(), e, n);
          }
          serializeBase64String() {
            var e = new (A().BinaryWriter)();
            return (
              bt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_VRCompatibilityCheck_Response";
          }
        }
        class Bt extends ee.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Bt.prototype.key || p.Sg(Bt.M()),
              ee.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Bt.sm_m ||
                (Bt.sm_m = {
                  proto: Bt,
                  fields: {
                    key: { n: 1, br: p.qM.readString, bw: p.gp.writeString },
                    value: { n: 2, br: p.qM.readString, bw: p.gp.writeString },
                  },
                }),
              Bt.sm_m
            );
          }
          static MBF() {
            return Bt.sm_mbf || (Bt.sm_mbf = p.w0(Bt.M())), Bt.sm_mbf;
          }
          toObject(e = !1) {
            return Bt.toObject(e, this);
          }
          static toObject(e, n) {
            return p.BT(Bt.M(), e, n);
          }
          static fromObject(e) {
            return p.Uq(Bt.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (A().BinaryReader)(e),
              r = new Bt();
            return Bt.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return p.zj(Bt.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (A().BinaryWriter)();
            return Bt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            p.i0(Bt.M(), e, n);
          }
          serializeBase64String() {
            var e = new (A().BinaryWriter)();
            return (
              Bt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_VRCompatibilityCheck_Response_Pair";
          }
        }
        class Et extends ee.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Et.prototype.name || p.Sg(Et.M()),
              ee.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Et.sm_m ||
                (Et.sm_m = {
                  proto: Et,
                  fields: {
                    name: { n: 1, br: p.qM.readString, bw: p.gp.writeString },
                    image: { n: 2, br: p.qM.readString, bw: p.gp.writeString },
                    value: { n: 3, br: p.qM.readString, bw: p.gp.writeString },
                  },
                }),
              Et.sm_m
            );
          }
          static MBF() {
            return Et.sm_mbf || (Et.sm_mbf = p.w0(Et.M())), Et.sm_mbf;
          }
          toObject(e = !1) {
            return Et.toObject(e, this);
          }
          static toObject(e, n) {
            return p.BT(Et.M(), e, n);
          }
          static fromObject(e) {
            return p.Uq(Et.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (A().BinaryReader)(e),
              r = new Et();
            return Et.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return p.zj(Et.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (A().BinaryWriter)();
            return Et.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            p.i0(Et.M(), e, n);
          }
          serializeBase64String() {
            var e = new (A().BinaryWriter)();
            return (
              Et.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_VRCompatibilityCheck_Response_ComponentDisplay";
          }
        }
        class Pt extends ee.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Pt.prototype.serial_number || p.Sg(Pt.M()),
              ee.Message.initialize(this, e, 0, -1, void 0, null);
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
                      br: p.qM.readString,
                      bw: p.gp.writeString,
                    },
                    manufacturer_serial_number: {
                      n: 2,
                      br: p.qM.readString,
                      bw: p.gp.writeString,
                    },
                    component_code: {
                      n: 3,
                      br: p.qM.readString,
                      bw: p.gp.writeString,
                    },
                    component_type: {
                      n: 4,
                      br: p.qM.readEnum,
                      bw: p.gp.writeEnum,
                    },
                    estimated_time_registered: {
                      n: 5,
                      br: p.qM.readInt32,
                      bw: p.gp.writeInt32,
                    },
                  },
                }),
              Pt.sm_m
            );
          }
          static MBF() {
            return Pt.sm_mbf || (Pt.sm_mbf = p.w0(Pt.M())), Pt.sm_mbf;
          }
          toObject(e = !1) {
            return Pt.toObject(e, this);
          }
          static toObject(e, n) {
            return p.BT(Pt.M(), e, n);
          }
          static fromObject(e) {
            return p.Uq(Pt.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (A().BinaryReader)(e),
              r = new Pt();
            return Pt.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return p.zj(Pt.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (A().BinaryWriter)();
            return Pt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            p.i0(Pt.M(), e, n);
          }
          serializeBase64String() {
            var e = new (A().BinaryWriter)();
            return (
              Pt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_RegisterValveIndexComponent_Request";
          }
        }
        class Qn extends ee.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), ee.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return Qn.toObject(e, this);
          }
          static toObject(e, n) {
            return e ? { $jspbMessageInstance: n } : {};
          }
          static fromObject(e) {
            return new Qn();
          }
          static deserializeBinary(e) {
            let n = new (A().BinaryReader)(e),
              r = new Qn();
            return Qn.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return e;
          }
          serializeBinary() {
            var e = new (A().BinaryWriter)();
            return Qn.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {}
          serializeBase64String() {
            var e = new (A().BinaryWriter)();
            return (
              Qn.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_RegisterValveIndexComponent_Response";
          }
        }
        class Tt extends ee.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Tt.prototype.serial_number || p.Sg(Tt.M()),
              ee.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Tt.sm_m ||
                (Tt.sm_m = {
                  proto: Tt,
                  fields: {
                    serial_number: {
                      n: 1,
                      br: p.qM.readString,
                      bw: p.gp.writeString,
                    },
                    controller_code: {
                      n: 2,
                      br: p.qM.readString,
                      bw: p.gp.writeString,
                    },
                  },
                }),
              Tt.sm_m
            );
          }
          static MBF() {
            return Tt.sm_mbf || (Tt.sm_mbf = p.w0(Tt.M())), Tt.sm_mbf;
          }
          toObject(e = !1) {
            return Tt.toObject(e, this);
          }
          static toObject(e, n) {
            return p.BT(Tt.M(), e, n);
          }
          static fromObject(e) {
            return p.Uq(Tt.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (A().BinaryReader)(e),
              r = new Tt();
            return Tt.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return p.zj(Tt.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (A().BinaryWriter)();
            return Tt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            p.i0(Tt.M(), e, n);
          }
          serializeBase64String() {
            var e = new (A().BinaryWriter)();
            return (
              Tt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_GetSteamDeckComponents_Request";
          }
        }
        class St extends ee.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              St.prototype.json_components || p.Sg(St.M()),
              ee.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              St.sm_m ||
                (St.sm_m = {
                  proto: St,
                  fields: {
                    json_components: {
                      n: 1,
                      br: p.qM.readString,
                      bw: p.gp.writeString,
                    },
                  },
                }),
              St.sm_m
            );
          }
          static MBF() {
            return St.sm_mbf || (St.sm_mbf = p.w0(St.M())), St.sm_mbf;
          }
          toObject(e = !1) {
            return St.toObject(e, this);
          }
          static toObject(e, n) {
            return p.BT(St.M(), e, n);
          }
          static fromObject(e) {
            return p.Uq(St.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (A().BinaryReader)(e),
              r = new St();
            return St.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return p.zj(St.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (A().BinaryWriter)();
            return St.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            p.i0(St.M(), e, n);
          }
          serializeBase64String() {
            var e = new (A().BinaryWriter)();
            return (
              St.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_GetSteamDeckComponents_Response";
          }
        }
        class Mt extends ee.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Mt.prototype.friendly_name || p.Sg(Mt.M()),
              ee.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Mt.sm_m ||
                (Mt.sm_m = {
                  proto: Mt,
                  fields: {
                    friendly_name: {
                      n: 1,
                      br: p.qM.readString,
                      bw: p.gp.writeString,
                    },
                    system_info: { n: 2, c: D.Lu },
                    backfill_user_reviews: {
                      n: 3,
                      br: p.qM.readBool,
                      bw: p.gp.writeBool,
                    },
                  },
                }),
              Mt.sm_m
            );
          }
          static MBF() {
            return Mt.sm_mbf || (Mt.sm_mbf = p.w0(Mt.M())), Mt.sm_mbf;
          }
          toObject(e = !1) {
            return Mt.toObject(e, this);
          }
          static toObject(e, n) {
            return p.BT(Mt.M(), e, n);
          }
          static fromObject(e) {
            return p.Uq(Mt.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (A().BinaryReader)(e),
              r = new Mt();
            return Mt.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return p.zj(Mt.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (A().BinaryWriter)();
            return Mt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            p.i0(Mt.M(), e, n);
          }
          serializeBase64String() {
            var e = new (A().BinaryWriter)();
            return (
              Mt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_SaveHardware_Request";
          }
        }
        class It extends ee.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              It.prototype.hardware_id || p.Sg(It.M()),
              ee.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              It.sm_m ||
                (It.sm_m = {
                  proto: It,
                  fields: {
                    hardware_id: {
                      n: 1,
                      br: p.qM.readUint64String,
                      bw: p.gp.writeUint64String,
                    },
                  },
                }),
              It.sm_m
            );
          }
          static MBF() {
            return It.sm_mbf || (It.sm_mbf = p.w0(It.M())), It.sm_mbf;
          }
          toObject(e = !1) {
            return It.toObject(e, this);
          }
          static toObject(e, n) {
            return p.BT(It.M(), e, n);
          }
          static fromObject(e) {
            return p.Uq(It.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (A().BinaryReader)(e),
              r = new It();
            return It.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return p.zj(It.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (A().BinaryWriter)();
            return It.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            p.i0(It.M(), e, n);
          }
          serializeBase64String() {
            var e = new (A().BinaryWriter)();
            return (
              It.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_SaveHardware_Response";
          }
        }
        class Lt extends ee.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Lt.prototype.hardware_id || p.Sg(Lt.M()),
              ee.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Lt.sm_m ||
                (Lt.sm_m = {
                  proto: Lt,
                  fields: {
                    hardware_id: {
                      n: 1,
                      br: p.qM.readUint64String,
                      bw: p.gp.writeUint64String,
                    },
                    friendly_name: {
                      n: 2,
                      br: p.qM.readString,
                      bw: p.gp.writeString,
                    },
                    timestamp_created: {
                      n: 3,
                      br: p.qM.readUint32,
                      bw: p.gp.writeUint32,
                    },
                    hardware_cluster_id: {
                      n: 4,
                      br: p.qM.readUint64String,
                      bw: p.gp.writeUint64String,
                    },
                    system_info: { n: 5, c: D.Lu },
                  },
                }),
              Lt.sm_m
            );
          }
          static MBF() {
            return Lt.sm_mbf || (Lt.sm_mbf = p.w0(Lt.M())), Lt.sm_mbf;
          }
          toObject(e = !1) {
            return Lt.toObject(e, this);
          }
          static toObject(e, n) {
            return p.BT(Lt.M(), e, n);
          }
          static fromObject(e) {
            return p.Uq(Lt.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (A().BinaryReader)(e),
              r = new Lt();
            return Lt.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return p.zj(Lt.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (A().BinaryWriter)();
            return Lt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            p.i0(Lt.M(), e, n);
          }
          serializeBase64String() {
            var e = new (A().BinaryWriter)();
            return (
              Lt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_SavedHardware_Details";
          }
        }
        class At extends ee.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              At.prototype.steamid || p.Sg(At.M()),
              ee.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              At.sm_m ||
                (At.sm_m = {
                  proto: At,
                  fields: {
                    steamid: {
                      n: 1,
                      br: p.qM.readFixed64String,
                      bw: p.gp.writeFixed64String,
                    },
                  },
                }),
              At.sm_m
            );
          }
          static MBF() {
            return At.sm_mbf || (At.sm_mbf = p.w0(At.M())), At.sm_mbf;
          }
          toObject(e = !1) {
            return At.toObject(e, this);
          }
          static toObject(e, n) {
            return p.BT(At.M(), e, n);
          }
          static fromObject(e) {
            return p.Uq(At.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (A().BinaryReader)(e),
              r = new At();
            return At.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return p.zj(At.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (A().BinaryWriter)();
            return At.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            p.i0(At.M(), e, n);
          }
          serializeBase64String() {
            var e = new (A().BinaryWriter)();
            return (
              At.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_GetSavedHardwareList_Request";
          }
        }
        class Ot extends ee.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ot.prototype.saved_hardware || p.Sg(Ot.M()),
              ee.Message.initialize(this, e, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ot.sm_m ||
                (Ot.sm_m = {
                  proto: Ot,
                  fields: { saved_hardware: { n: 1, c: Lt, r: !0, q: !0 } },
                }),
              Ot.sm_m
            );
          }
          static MBF() {
            return Ot.sm_mbf || (Ot.sm_mbf = p.w0(Ot.M())), Ot.sm_mbf;
          }
          toObject(e = !1) {
            return Ot.toObject(e, this);
          }
          static toObject(e, n) {
            return p.BT(Ot.M(), e, n);
          }
          static fromObject(e) {
            return p.Uq(Ot.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (A().BinaryReader)(e),
              r = new Ot();
            return Ot.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return p.zj(Ot.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (A().BinaryWriter)();
            return Ot.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            p.i0(Ot.M(), e, n);
          }
          serializeBase64String() {
            var e = new (A().BinaryWriter)();
            return (
              Ot.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_GetSavedHardwareList_Response";
          }
        }
        class zt extends ee.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              zt.prototype.hardware_id || p.Sg(zt.M()),
              ee.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              zt.sm_m ||
                (zt.sm_m = {
                  proto: zt,
                  fields: {
                    hardware_id: {
                      n: 1,
                      br: p.qM.readUint64String,
                      bw: p.gp.writeUint64String,
                    },
                    delete_hardware: {
                      n: 2,
                      br: p.qM.readBool,
                      bw: p.gp.writeBool,
                    },
                    friendly_name_update: {
                      n: 3,
                      br: p.qM.readString,
                      bw: p.gp.writeString,
                    },
                  },
                }),
              zt.sm_m
            );
          }
          static MBF() {
            return zt.sm_mbf || (zt.sm_mbf = p.w0(zt.M())), zt.sm_mbf;
          }
          toObject(e = !1) {
            return zt.toObject(e, this);
          }
          static toObject(e, n) {
            return p.BT(zt.M(), e, n);
          }
          static fromObject(e) {
            return p.Uq(zt.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (A().BinaryReader)(e),
              r = new zt();
            return zt.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return p.zj(zt.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (A().BinaryWriter)();
            return zt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            p.i0(zt.M(), e, n);
          }
          serializeBase64String() {
            var e = new (A().BinaryWriter)();
            return (
              zt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_ManageSavedHardware_Request";
          }
        }
        class Vn extends ee.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), ee.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return Vn.toObject(e, this);
          }
          static toObject(e, n) {
            return e ? { $jspbMessageInstance: n } : {};
          }
          static fromObject(e) {
            return new Vn();
          }
          static deserializeBinary(e) {
            let n = new (A().BinaryReader)(e),
              r = new Vn();
            return Vn.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return e;
          }
          serializeBinary() {
            var e = new (A().BinaryWriter)();
            return Vn.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {}
          serializeBase64String() {
            var e = new (A().BinaryWriter)();
            return (
              Vn.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_ManageSavedHardware_Response";
          }
        }
        class Nt extends ee.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Nt.prototype.serial_number || p.Sg(Nt.M()),
              ee.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Nt.sm_m ||
                (Nt.sm_m = {
                  proto: Nt,
                  fields: {
                    serial_number: {
                      n: 1,
                      br: p.qM.readString,
                      bw: p.gp.writeString,
                    },
                    machine_code: {
                      n: 2,
                      br: p.qM.readString,
                      bw: p.gp.writeString,
                    },
                  },
                }),
              Nt.sm_m
            );
          }
          static MBF() {
            return Nt.sm_mbf || (Nt.sm_mbf = p.w0(Nt.M())), Nt.sm_mbf;
          }
          toObject(e = !1) {
            return Nt.toObject(e, this);
          }
          static toObject(e, n) {
            return p.BT(Nt.M(), e, n);
          }
          static fromObject(e) {
            return p.Uq(Nt.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (A().BinaryReader)(e),
              r = new Nt();
            return Nt.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return p.zj(Nt.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (A().BinaryWriter)();
            return Nt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            p.i0(Nt.M(), e, n);
          }
          serializeBase64String() {
            var e = new (A().BinaryWriter)();
            return (
              Nt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_RegisterSteamMachine_Request";
          }
        }
        class $n extends ee.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), ee.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return $n.toObject(e, this);
          }
          static toObject(e, n) {
            return e ? { $jspbMessageInstance: n } : {};
          }
          static fromObject(e) {
            return new $n();
          }
          static deserializeBinary(e) {
            let n = new (A().BinaryReader)(e),
              r = new $n();
            return $n.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return e;
          }
          serializeBinary() {
            var e = new (A().BinaryWriter)();
            return $n.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {}
          serializeBase64String() {
            var e = new (A().BinaryWriter)();
            return (
              $n.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_RegisterSteamMachine_Response";
          }
        }
        class Dt extends ee.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Dt.prototype.controllers || p.Sg(Dt.M()),
              ee.Message.initialize(this, e, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Dt.sm_m ||
                (Dt.sm_m = {
                  proto: Dt,
                  fields: { controllers: { n: 1, c: Ft, r: !0, q: !0 } },
                }),
              Dt.sm_m
            );
          }
          static MBF() {
            return Dt.sm_mbf || (Dt.sm_mbf = p.w0(Dt.M())), Dt.sm_mbf;
          }
          toObject(e = !1) {
            return Dt.toObject(e, this);
          }
          static toObject(e, n) {
            return p.BT(Dt.M(), e, n);
          }
          static fromObject(e) {
            return p.Uq(Dt.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (A().BinaryReader)(e),
              r = new Dt();
            return Dt.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return p.zj(Dt.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (A().BinaryWriter)();
            return Dt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            p.i0(Dt.M(), e, n);
          }
          serializeBase64String() {
            var e = new (A().BinaryWriter)();
            return (
              Dt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_UpdateControllerUsageReport_Request";
          }
        }
        class Ft extends ee.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ft.prototype.serial_number || p.Sg(Ft.M()),
              ee.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ft.sm_m ||
                (Ft.sm_m = {
                  proto: Ft,
                  fields: {
                    serial_number: {
                      n: 1,
                      br: p.qM.readString,
                      bw: p.gp.writeString,
                    },
                    controller_code: {
                      n: 2,
                      br: p.qM.readString,
                      bw: p.gp.writeString,
                    },
                  },
                }),
              Ft.sm_m
            );
          }
          static MBF() {
            return Ft.sm_mbf || (Ft.sm_mbf = p.w0(Ft.M())), Ft.sm_mbf;
          }
          toObject(e = !1) {
            return Ft.toObject(e, this);
          }
          static toObject(e, n) {
            return p.BT(Ft.M(), e, n);
          }
          static fromObject(e) {
            return p.Uq(Ft.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (A().BinaryReader)(e),
              r = new Ft();
            return Ft.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return p.zj(Ft.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (A().BinaryWriter)();
            return Ft.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            p.i0(Ft.M(), e, n);
          }
          serializeBase64String() {
            var e = new (A().BinaryWriter)();
            return (
              Ft.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_UpdateControllerUsageReport_Request_Controller";
          }
        }
        class Jn extends ee.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), ee.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return Jn.toObject(e, this);
          }
          static toObject(e, n) {
            return e ? { $jspbMessageInstance: n } : {};
          }
          static fromObject(e) {
            return new Jn();
          }
          static deserializeBinary(e) {
            let n = new (A().BinaryReader)(e),
              r = new Jn();
            return Jn.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return e;
          }
          serializeBinary() {
            var e = new (A().BinaryWriter)();
            return Jn.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {}
          serializeBase64String() {
            var e = new (A().BinaryWriter)();
            return (
              Jn.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_UpdateControllerUsageReport_Response";
          }
        }
        class Rt extends ee.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Rt.prototype.serial || p.Sg(Rt.M()),
              ee.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Rt.sm_m ||
                (Rt.sm_m = {
                  proto: Rt,
                  fields: {
                    serial: { n: 1, br: p.qM.readString, bw: p.gp.writeString },
                    component_serial: {
                      n: 2,
                      br: p.qM.readString,
                      bw: p.gp.writeString,
                    },
                  },
                }),
              Rt.sm_m
            );
          }
          static MBF() {
            return Rt.sm_mbf || (Rt.sm_mbf = p.w0(Rt.M())), Rt.sm_mbf;
          }
          toObject(e = !1) {
            return Rt.toObject(e, this);
          }
          static toObject(e, n) {
            return p.BT(Rt.M(), e, n);
          }
          static fromObject(e) {
            return p.Uq(Rt.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (A().BinaryReader)(e),
              r = new Rt();
            return Rt.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return p.zj(Rt.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (A().BinaryWriter)();
            return Rt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            p.i0(Rt.M(), e, n);
          }
          serializeBase64String() {
            var e = new (A().BinaryWriter)();
            return (
              Rt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardwarePromotions_RedeemFramePromoPackage_Request";
          }
        }
        class Zn extends ee.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), ee.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return Zn.toObject(e, this);
          }
          static toObject(e, n) {
            return e ? { $jspbMessageInstance: n } : {};
          }
          static fromObject(e) {
            return new Zn();
          }
          static deserializeBinary(e) {
            let n = new (A().BinaryReader)(e),
              r = new Zn();
            return Zn.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return e;
          }
          serializeBinary() {
            var e = new (A().BinaryWriter)();
            return Zn.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {}
          serializeBase64String() {
            var e = new (A().BinaryWriter)();
            return (
              Zn.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardwarePromotions_RedeemFramePromoPackage_Response";
          }
        }
        var Ba;
        ((s) => {
          function e(W, $, le) {
            return W.SendMsg(
              "AccountHardware.RegisterSteamController#1",
              (0, rt.I8)(lt, $, le),
              Cn,
              { ePrivilege: 1 },
            );
          }
          s.RegisterSteamController = e;
          function n(W, $, le) {
            return W.SendMsg(
              "AccountHardware.CompleteSteamControllerRegistration#1",
              (0, rt.I8)(ct, $, le),
              Kn,
              { ePrivilege: 1 },
            );
          }
          s.CompleteSteamControllerRegistration = n;
          function r(W, $, le) {
            return W.SendMsg(
              "AccountHardware.QueryAccountsRegisteredToController#1",
              (0, rt.I8)(it, $, le),
              ot,
              { ePrivilege: 1 },
            );
          }
          s.QueryAccountsRegisteredToController = r;
          function a(W, $, le) {
            return W.SendMsg(
              "AccountHardware.UpdateControllerUsageReport#1",
              (0, rt.I8)(Dt, $, le),
              Jn,
              { ePrivilege: 1 },
            );
          }
          s.UpdateControllerUsageReport = a;
          function o(W, $, le) {
            return W.SendMsg(
              "AccountHardware.SetDesiredControllerConfigForApp#1",
              (0, rt.I8)(ut, $, le),
              Gn,
              { ePrivilege: 1 },
            );
          }
          s.SetDesiredControllerConfigForApp = o;
          function l(W, $, le) {
            return W.SendMsg(
              "AccountHardware.GetDesiredControllerConfigForApp#1",
              (0, rt.I8)(mt, $, le),
              pt,
              { ePrivilege: 1 },
            );
          }
          s.GetDesiredControllerConfigForApp = l;
          function c(W, $, le) {
            return W.SendMsg(
              "AccountHardware.DeRegisterSteamController#1",
              (0, rt.I8)(ft, $, le),
              Yn,
              { ePrivilege: 1 },
            );
          }
          s.DeRegisterSteamController = c;
          function m(W, $, le) {
            return W.SendMsg(
              "AccountHardware.SetControllerPersonalizationFile#1",
              (0, rt.I8)(ht, $, le),
              kn,
              { ePrivilege: 1 },
            );
          }
          s.SetControllerPersonalizationFile = m;
          function f(W, $, le) {
            return W.SendMsg(
              "AccountHardware.GetControllerPersonalizationFile#1",
              (0, rt.I8)(yt, $, le),
              vt,
              { ePrivilege: 1 },
            );
          }
          s.GetControllerPersonalizationFile = f;
          function y(W, $, le) {
            return W.SendMsg(
              "AccountHardware.VRCompatibilityCheck#1",
              (0, rt.I8)(xt, $, le),
              bt,
              { ePrivilege: 0 },
            );
          }
          s.VRCompatibilityCheck = y;
          function v(W, $, le) {
            return W.SendMsg(
              "AccountHardware.RegisterValveIndexComponent#1",
              (0, rt.I8)(Pt, $, le),
              Qn,
              { ePrivilege: 1 },
            );
          }
          s.RegisterValveIndexComponent = v;
          function b(W, $, le) {
            return W.SendMsg(
              "AccountHardware.GetSteamDeckComponents#1",
              (0, rt.I8)(Tt, $, le),
              St,
              { ePrivilege: 1 },
            );
          }
          s.GetSteamDeckComponents = b;
          function B(W, $, le) {
            return W.SendMsg(
              "AccountHardware.SaveHardware#1",
              (0, rt.I8)(Mt, $, le),
              It,
              { ePrivilege: 1 },
            );
          }
          s.SaveHardware = B;
          function S(W, $, le) {
            return W.SendMsg(
              "AccountHardware.ManageSavedHardware#1",
              (0, rt.I8)(zt, $, le),
              Vn,
              { ePrivilege: 1 },
            );
          }
          s.ManageSavedHardware = S;
          function I(W, $, le) {
            return W.SendMsg(
              "AccountHardware.GetSavedHardwareList#1",
              (0, rt.I8)(At, $, le),
              Ot,
              { ePrivilege: 1 },
            );
          }
          s.GetSavedHardwareList = I;
          function V(W, $, le) {
            return W.SendMsg(
              "AccountHardware.RegisterSteamMachine#1",
              (0, rt.I8)(Nt, $, le),
              $n,
              { ePrivilege: 1 },
            );
          }
          s.RegisterSteamMachine = V;
        })(Ba || (Ba = {}));
        var Pl;
        ((s) => {
          function e(n, r, a) {
            return n.SendMsg(
              "AccountHardwarePromotions.RedeemFramePromoPackage#1",
              (0, rt.I8)(Rt, r, a),
              Zn,
              { ePrivilege: 1 },
            );
          }
          s.RedeemFramePromoPackage = e;
        })(Pl || (Pl = {}));
        var E0 = i(94162);
        function Tl(s) {
          return ["SavedHardware", s];
        }
        function P0(s) {
          const e = (0, pn.KV)();
          return (0, Oe.I)(T0(e, Y.iA.steamid, s));
        }
        function T0(s, e, n) {
          return {
            queryKey: Tl(e),
            queryFn: async () => {
              const r = await Ba.GetSavedHardwareList(s, { steamid: e });
              if (!r.BSuccess())
                throw new Ui.x(
                  r.GetEResult(),
                  "Error from GetSavedHardwareList",
                );
              return r.Body().toObject().saved_hardware ?? [];
            },
            enabled: n,
            staleTime: 300 * 1e3,
          };
        }
        const S0 = 1770934110;
        function M0() {
          const s = (0, ze.jE)(),
            e = I0();
          d.useEffect(() => {
            if (e)
              return SteamClient.BrowserView.RegisterForMessageFromParent(
                (r) => {
                  r == "OnCloseSaveHardwareDialog" &&
                    s.invalidateQueries({ queryKey: Tl(Y.iA.steamid) });
                },
              ).unregister;
          }, [s, e]);
          const n = d.useCallback(() => {
            SteamClient.BrowserView.PostMessageToParent(
              "ShowSavedHardwareDialog",
              "",
            );
          }, []);
          return e ? n : void 0;
        }
        function I0() {
          if (
            !(0, Xi.Dp)("BrowserView.PostMessageToParent") ||
            !(0, Xi.Dp)("BrowserView.RegisterForMessageFromParent")
          )
            return !1;
          const s = (0, E0.MP)();
          return s == 0 || s >= S0;
        }
        var L0 = i(74049),
          Sl = i.n(L0);
        const A0 = "6862-8119-C23E-EA7B",
          O0 = 8e3,
          z0 = Co.Nb.filter((s) => s != "sc_schinese" && s != "arabic");
        function N0(s) {
          const { appid: e, review: n } = s,
            { data: r } = (0, M.J$)({ appid: e }),
            { data: a } = (0, _s.jn)(Y.iA.steamid),
            [o, l] = d.useState(() => w0(n)),
            [c, m] = d.useState(""),
            f = x0(e, n?.recommendationid),
            y = f.mutate,
            v = d.useCallback(($) => {
              l((le) => ({ ...le, ...$ }));
            }, []),
            b = d.useCallback(($) => v({ review: $ }), [v]),
            B = r?.name ?? "",
            S = d.useCallback(() => {
              if (!o.review?.trim()) {
                m(g.Localize("#AppPage_WriteReview_ErrorNoText"));
                return;
              }
              if (o.voted_up === void 0) {
                m(g.Localize("#AppPage_WriteReview_ErrorNoRating", B));
                return;
              }
              m(""), y(o);
            }, [o, y, B]);
          if (!r) return null;
          d.use(g.Ready()), d.use(ge.Z.Ready());
          const I = !!n,
            V = r.type ?? oe.uE.HT,
            W = f.error
              ? f.error.message ||
                g.Localize("#AppPage_WriteReview_ErrorPosting")
              : "";
          return (0, t.jsx)(qt.YZ, {
            navEntryPreferPosition: de.iU.PREFERRED_CHILD,
            children: (0, t.jsxs)(F.s, {
              direction: "column",
              gap: "3",
              padding: "4",
              borderColor: "greyneutral-9 50%",
              children: [
                (0, t.jsx)(D0, { strAppName: B, eAppType: V, bUpdate: I }),
                (0, t.jsxs)(F.s, {
                  gap: "3",
                  children: [
                    !!a &&
                      (0, t.jsx)(ga.wm, {
                        playerLinkDetails: a,
                        size: "MediumLarge",
                        statusPosition: "border",
                        alt: "",
                      }),
                    (0, t.jsxs)(F.s, {
                      direction: "column",
                      gap: "3",
                      flexGrow: "1",
                      navProps: { preferredFocus: !0 },
                      children: [
                        (!!c || !!W) &&
                          (0, t.jsx)(j.EY, {
                            size: "3",
                            color: "red-10",
                            children: c || W,
                          }),
                        (0, t.jsx)(f0, {
                          value: o.review ?? "",
                          onTextChange: b,
                          placeholder: g.Localize(
                            "#AppPage_WriteReview_Placeholder",
                          ),
                          rows: 4,
                          maxLength: O0,
                        }),
                        (0, t.jsx)(F0, {
                          review: o,
                          bFreeApp: !!r.is_free,
                          UpdateForm: v,
                        }),
                        (0, t.jsx)(W0, {
                          bVotedUp: o.voted_up,
                          eAppType: V,
                          bUpdate: I,
                          bPosting: f.isPending,
                          UpdateForm: v,
                          OnSubmit: S,
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          });
        }
        function D0(s) {
          const { strAppName: e, eAppType: n, bUpdate: r } = s;
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)(j.EY, {
                size: "5",
                color: "blue-11",
                children: g.Localize(
                  r
                    ? "#AppPage_WriteReview_TitleUpdate"
                    : "#AppPage_WriteReview_Title",
                  e,
                ),
              }),
              (0, t.jsx)(j.EY, {
                size: "3",
                color: "greyneutral-11",
                children: (0, Be.xh)(
                  g.Localize(
                    g.GetAppTypeLocKey("#AppPage_WriteReview_Desc", n),
                  ),
                  (0, t.jsx)(Xe.Y, {
                    underline: "always",
                    color: "blue-8",
                    href: `${Y.TS.HELP_BASE_URL}faqs/view/${A0}`,
                  }),
                ),
              }),
              (0, Bn.nA)(Y.TS.EREALM) &&
                (0, t.jsx)(j.EY, {
                  size: "3",
                  color: "brown-10",
                  children: g.Localize("#AppPage_WriteReview_ChinaDisclaimer"),
                }),
            ],
          });
        }
        function F0(s) {
          const { review: e, bFreeApp: n, UpdateForm: r } = s,
            [a, o] = d.useState(!1),
            l = d.useCallback(() => o((I) => !I), []),
            c = d.useCallback((I) => r({ is_public: I.data }), [r]),
            m = d.useCallback((I) => r({ language: I.data }), [r]),
            f = d.useCallback((I) => r({ comments_disabled: !I }), [r]),
            y = d.useCallback((I) => r({ received_compensation: I }), [r]),
            v = g.Localize("#AppPage_WriteReview_Visibility"),
            b = g.Localize("#AppPage_WriteReview_Language"),
            B = [
              {
                label: g.Localize("#AppPage_WriteReview_VisibilityPublic"),
                data: !0,
              },
              {
                label: g.Localize("#AppPage_WriteReview_VisibilityFriends"),
                data: !1,
              },
            ],
            S = z0.map((I) => ({ label: (0, Bl.$A)(I), data: I }));
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)(Ze.$, {
                variant: "basic",
                color: "greyneutral",
                width: "100%",
                focusable: !0,
                onClick: l,
                children: (0, t.jsxs)(F.s, {
                  justify: "between",
                  align: "center",
                  width: "100%",
                  children: [
                    g.Localize("#AppPage_WriteReview_Settings"),
                    (0, t.jsx)(y0.V, { direction: a ? "up" : "down" }),
                  ],
                }),
              }),
              a &&
                (0, t.jsxs)(F.s, {
                  direction: "column",
                  gap: "2",
                  children: [
                    (0, t.jsxs)(F.s, {
                      justify: "between",
                      align: "center",
                      gap: "2",
                      children: [
                        (0, t.jsx)(j.EY, { size: "3", children: v }),
                        Y.iA.is_limited
                          ? (0, t.jsx)(j.EY, {
                              size: "3",
                              color: "greyneutral-11",
                              children: g.Localize(
                                "#AppPage_WriteReview_VisibilityLimited",
                              ),
                            })
                          : (0, t.jsx)(ce.az, {
                              width: "50%",
                              children: (0, t.jsx)(ba.ZU, {
                                controlled: !0,
                                rgOptions: B,
                                selectedOption: !!e.is_public,
                                onChange: c,
                                menuLabel: v,
                              }),
                            }),
                      ],
                    }),
                    !(0, Bn.nA)(Y.TS.EREALM) &&
                      (0, t.jsxs)(F.s, {
                        justify: "between",
                        align: "center",
                        gap: "2",
                        children: [
                          (0, t.jsx)(j.EY, { size: "3", children: b }),
                          (0, t.jsx)(ce.az, {
                            width: "50%",
                            children: (0, t.jsx)(ba.ZU, {
                              controlled: !0,
                              rgOptions: S,
                              selectedOption: e.language,
                              onChange: m,
                              menuLabel: b,
                              strDefaultLabel: (0, Bl.$A)(e.language ?? ""),
                            }),
                          }),
                        ],
                      }),
                    (0, t.jsx)(ja.S, {
                      checked: !e.comments_disabled,
                      onChange: f,
                      children: (0, t.jsx)(j.EY, {
                        size: "3",
                        children: g.Localize(
                          "#AppPage_WriteReview_AllowComments",
                        ),
                      }),
                    }),
                    (0, t.jsx)(R0, {
                      strSavedHardwareID: e.saved_hardware_id,
                      UpdateForm: r,
                    }),
                    !n &&
                      (0, t.jsx)(ja.S, {
                        checked: !!e.received_compensation,
                        onChange: y,
                        children: (0, t.jsx)(j.EY, {
                          size: "3",
                          children: g.Localize(
                            "#AppPage_WriteReview_ReceivedFree",
                          ),
                        }),
                      }),
                    (0, t.jsx)(v0.w, { color: "greyneutral-9 50%", size: "4" }),
                  ],
                }),
            ],
          });
        }
        function R0(s) {
          const { strSavedHardwareID: e, UpdateForm: n } = s,
            [r, a] = d.useState(!!e),
            { data: o, isPending: l } = P0(r),
            c = M0(),
            m = d.useCallback(
              (B) => {
                a(B), B || n({ saved_hardware_id: void 0 });
              },
              [n],
            ),
            f = d.useCallback((B) => n({ saved_hardware_id: B.data }), [n]),
            y = o?.[0]?.hardware_id;
          d.useEffect(() => {
            r && !e && y && n({ saved_hardware_id: y });
          }, [r, e, y, n]);
          const v = g.Localize("#AppPage_WriteReview_PCSpecs"),
            b = (o ?? []).map((B) => ({
              label: B.friendly_name ?? "",
              data: B.hardware_id ?? "",
            }));
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)(ja.S, {
                checked: r,
                onChange: m,
                children: (0, t.jsx)(j.EY, {
                  size: "3",
                  children: g.Localize("#AppPage_WriteReview_AttachHardware"),
                }),
              }),
              r &&
                (0, t.jsxs)(t.Fragment, {
                  children: [
                    (0, t.jsxs)(F.s, {
                      justify: "between",
                      align: "center",
                      gap: "2",
                      children: [
                        (0, t.jsx)(j.EY, { size: "3", children: v }),
                        (0, t.jsx)(ce.az, {
                          width: "50%",
                          children: (0, t.jsx)(ba.ZU, {
                            controlled: !0,
                            disabled: !b.length,
                            rgOptions: b,
                            selectedOption: e,
                            onChange: f,
                            menuLabel: v,
                            strDefaultLabel: l
                              ? ge.Z.Localize("#Loading")
                              : g.Localize("#AppPage_WriteReview_PCSpecsNone"),
                          }),
                        }),
                      ],
                    }),
                    !!c &&
                      (0, t.jsx)(F.s, {
                        justify: "end",
                        children: (0, t.jsx)(Ze.$, {
                          focusable: !0,
                          variant: "basic",
                          color: "greyneutral",
                          onClick: c,
                          children: g.Localize("#AppPage_WriteReview_AddPC"),
                        }),
                      }),
                  ],
                }),
            ],
          });
        }
        function W0(s) {
          const {
              bVotedUp: e,
              eAppType: n,
              bUpdate: r,
              bPosting: a,
              UpdateForm: o,
              OnSubmit: l,
            } = s,
            c = d.useCallback(() => o({ voted_up: !0 }), [o]),
            m = d.useCallback(() => o({ voted_up: !1 }), [o]);
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsxs)(F.s, {
                direction: "column",
                gap: "2",
                children: [
                  (0, t.jsx)(j.EY, {
                    size: "4",
                    children: g.Localize(
                      g.GetAppTypeLocKey("#AppPage_WriteReview_Recommend", n),
                    ),
                  }),
                  (0, t.jsxs)(F.s, {
                    gap: "2",
                    children: [
                      (0, t.jsx)(Ml, {
                        bThumbsUp: !0,
                        bSelected: e === !0,
                        onSelect: c,
                      }),
                      (0, t.jsx)(Ml, {
                        bThumbsUp: !1,
                        bSelected: e === !1,
                        onSelect: m,
                      }),
                    ],
                  }),
                ],
              }),
              (0, t.jsx)(F.s, {
                justify: "end",
                children: (0, t.jsx)(Ze.$, {
                  focusable: !0,
                  color: "blue",
                  loading: a,
                  onClick: l,
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
        function Ml(s) {
          const { bThumbsUp: e, bSelected: n, onSelect: r } = s;
          return (0, t.jsx)(Ze.$, {
            focusable: !0,
            variant: "basic",
            color: n ? "blue" : "greyneutral",
            onClick: r,
            children: (0, t.jsxs)(F.s, {
              direction: "row",
              gap: "1",
              align: "center",
              children: [
                (0, t.jsx)(Q.twC, {
                  className: (0, ne.A)(
                    Sl().VerdictIcon,
                    !e && Sl().VerdictIconDown,
                  ),
                }),
                (0, t.jsx)(j.EY, {
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
        function w0(s) {
          const e = (0, Bn.nA)(Y.TS.EREALM);
          return s
            ? {
                ...s,
                language: e || !s.language ? Il() : s.language,
                comments_disabled: s.comments_disabled || e,
                is_public: s.is_public && !Y.iA.is_limited,
              }
            : {
                is_public: !Y.iA.is_limited,
                language: Il(),
                comments_disabled: e,
              };
        }
        function Il() {
          return (0, Bn.nA)(Y.TS.EREALM)
            ? "schinese"
            : Y.TS.LANGUAGE == "korean"
              ? "koreana"
              : Y.TS.LANGUAGE;
        }
        function U0(s) {
          const { appid: e, ownReview: n } = s,
            r = e0(e),
            [a, o] = d.useState(!1);
          return (
            d.useEffect(() => {
              r(n), o(!0);
            }, [n, r]),
            a ? (0, t.jsx)(C0, { appid: e }) : null
          );
        }
        function C0(s) {
          const { appid: e } = s,
            { data: n } = (0, M.J$)({ appid: e }),
            { data: r } = qp(e),
            a = (0, Wt.AP)(e),
            [o, l] = d.useState(!1),
            c = d.useCallback(() => l(!0), []);
          return n
            ? (0, t.jsx)(F.s, {
                direction: "column",
                paddingX: "5",
                paddingY: "3",
                background: "greyneutral-2 80%",
                children:
                  r && !o
                    ? (0, t.jsx)(i0, {
                        review: r,
                        eAppType: n.type,
                        nSteamworksAppid: a,
                        onEdit: c,
                      })
                    : (0, t.jsx)(N0, { appid: e, review: r ?? null }),
              })
            : null;
        }
        var K0 = i(27990),
          G0 = i(48338),
          Y0 = i.n(G0),
          k0 = i(75995),
          Xn = i.n(k0);
        const Ll = {
          2023: Xn().Year2023,
          2024: Xn().Year2024,
          2025: Xn().Year2025,
        };
        function Q0(s) {
          const { appid: e } = s,
            { data: n } = (0, M._F)({ appid: e }),
            r = (n?.steam_award ?? [])
              .filter((a) => !!a.localization?.title && !!Ll[a.award_year])
              .sort((a, o) => o.award_year - a.award_year);
          return r.length
            ? (0, t.jsx)(F.s, {
                direction: "column",
                gap: "4",
                children: r.map((a) =>
                  (0, t.jsx)(V0, { award: a }, `${a.award_year}_${a.voteid}`),
                ),
              })
            : null;
        }
        function V0(s) {
          const { award: e } = s,
            n = e.award_year,
            r = (0, Jt.aL)(`${Y.TS.STORE_BASE_URL}steamawards/${n}/`);
          return (0, t.jsxs)(L.Ii, {
            className: (0, ne.A)(Xn().Banner, Ll[n]),
            href: r,
            children: [
              (0, t.jsxs)("div", {
                className: Xn().Titles,
                children: [
                  (0, t.jsx)("span", {
                    className: Xn().AwardsTitle,
                    children: g.Localize("#AppPage_SteamAwards_Title"),
                  }),
                  (0, t.jsx)("span", { className: Xn().Year, children: n }),
                ],
              }),
              (0, t.jsx)("div", {
                className: Xn().Winner,
                children: g.Localize("#AppPage_SteamAwards_Winner"),
              }),
              (0, t.jsx)("div", {
                className: Xn().Category,
                children: e.localization.title,
              }),
            ],
          });
        }
        var $0 = i(72390),
          Ns = i.n($0);
        function J0(s) {
          const { appid: e } = s,
            { metacritic: n, app: r, bShow: a, nScore: o } = Al(e);
          return (
            d.use(g.Ready()),
            !a || !r
              ? null
              : (0, t.jsxs)(F.s, {
                  align: "start",
                  paddingY: "2",
                  direction: "row",
                  children: [
                    (0, t.jsx)(F.s, {
                      className: (0, ne.A)(
                        Ns().Score,
                        o > 0 ? Z0(o, r.type) : Ns().Low,
                      ),
                      width: "50px",
                      height: "50px",
                      flexShrink: "0",
                      align: "center",
                      justify: "center",
                      children: o > 0 ? o : "NA",
                    }),
                    (0, t.jsxs)(F.s, {
                      direction: "column",
                      paddingLeft: "2",
                      children: [
                        (0, t.jsx)(H0, {}),
                        o > 0
                          ? n?.url && (0, t.jsx)(X0, { url: n.url })
                          : (0, t.jsx)(j.EY, {
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
        function Al(s) {
          const { data: e } = (0, M.J$)({ appid: s }),
            { data: n } = (0, M._F)({ appid: s }),
            r = e?.type === oe.uE.ue ? e.related_items?.parent_appid : void 0,
            { data: a } = (0, M._F)(r ? { appid: r } : void 0);
          if (!e) return { bShow: !1, nScore: 0 };
          const o = n?.metacritic,
            l = (r ? a?.metacritic?.score : o?.score) ?? 0;
          return {
            metacritic: o,
            app: e,
            nScore: l,
            bShow: !!o?.always_show || l > 0,
          };
        }
        function Z0(s, e) {
          const n = e === oe.uE.Wz || e === oe.uE.gQ,
            r = n ? 61 : 75,
            a = n ? 40 : 50;
          return s >= r ? Ns().High : s >= a ? Ns().Medium : Ns().Low;
        }
        function X0(s) {
          const { url: e } = s;
          return (0, t.jsxs)(Xe.Y, {
            size: "2",
            color: "blue-8",
            href: se.TS.IN_CLIENT ? `steam://openurl/${e}` : e,
            target: se.TS.IN_CLIENT ? void 0 : "_blank",
            children: [
              g.Localize("#AppPage_Metacritic_ReadCriticReviews"),
              (0, t.jsx)("span", {
                className: Ns().ExternalIcon,
                children: (0, t.jsx)(Q.GrD, {}),
              }),
            ],
          });
        }
        function H0(s) {
          return (0, t.jsxs)(F.s, {
            direction: "row",
            gap: "1",
            align: "center",
            children: [
              (0, t.jsx)(Wn._, {
                src: `${se.TS.IMG_URL}v6/mc_logo_no_text.png`,
                alt: "",
                width: "24px",
                height: "24px",
                flexShrink: "0",
              }),
              (0, t.jsx)(j.EY, {
                size: "7",
                weight: "heavy",
                contrast: "title",
                children: "metacritic",
              }),
            ],
          });
        }
        function q0(s) {
          const { appid: e } = s,
            { data: n } = (0, M._F)({ appid: e }),
            { bShow: r } = Al(e);
          d.use(g.Ready());
          const a =
              n?.partner_awards_bbcode && n.partner_awards_bbcode.length > 0,
            o = n?.steam_award && n.steam_award.length > 0;
          return !a && !o && !r
            ? null
            : (0, t.jsxs)(sa, {
                className: Y0().StoreAwards,
                "flow-children": "column",
                children: [
                  (0, t.jsx)(Wr, {
                    text: g.Localize("#AppPage_Awards_Header"),
                  }),
                  (0, t.jsx)(J0, { appid: e }),
                  (0, t.jsx)(Q0, { appid: e }),
                  n?.partner_awards_bbcode &&
                    (0, t.jsx)(xs.n, { text: n.partner_awards_bbcode }),
                ],
              });
        }
        var Vr = i(23386),
          Ol = i(25509),
          _0 = i(30452),
          zl = i.n(_0),
          ef = i(94255),
          mn = i.n(ef);
        function Ea(s) {
          const {
              title: e,
              link_text: n,
              url: r,
              linkType: a = "inline",
              children: o,
              total_count: l,
              link_footer: c,
              block_footer: m,
            } = s,
            f = (0, se.Qn)(),
            y = f
              ? (0, t.jsx)(j.EY, {
                  contrast: "title",
                  size: "2",
                  weight: "heavy",
                  style: { letterSpacing: "0.5px" },
                  children: e,
                })
              : (0, t.jsx)(j.EY, {
                  contrast: "body",
                  size: "2",
                  weight: "regular",
                  children: e,
                }),
            v = a == "inline" ? mn().InlineLink : mn().OverlayLink;
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)(sf, { title: e, link_text: n ?? Pa(l), url: r }),
              (0, t.jsx)("div", {
                className: "noOpinionatedGlobalStyles",
                children: (0, t.jsxs)(F.s, {
                  direction: "column",
                  gap: "2",
                  className: mn().ShopLink,
                  children: [
                    (0, t.jsx)(L.Ii, {
                      className: (0, ne.A)(v, mn().Link),
                      "flow-children": "column",
                      focusClassName: mn().ShowLink,
                      focusable: !0,
                      href: r,
                      "aria-label": Pa(l),
                      children: (0, t.jsxs)(F.s, {
                        direction: "column",
                        gap: f ? "1" : "2",
                        children: [
                          y,
                          (0, t.jsxs)(As.x, {
                            autoFlow: "column",
                            autoColumns: "1fr",
                            gap: "2",
                            alignItems: "center",
                            justifyContent: "center",
                            className: mn().Items,
                            children: [o, (0, t.jsx)(nf, { total_count: l })],
                          }),
                          n &&
                            (0, t.jsx)("div", {
                              className: mn().ActivateLabel,
                              children: (0, t.jsx)(ce.az, {
                                background: "blue-8",
                                padding: "2",
                                radius: "sm",
                                children: (0, t.jsx)(j.EY, {
                                  size: "2",
                                  contrast: "title",
                                  children: n,
                                }),
                              }),
                            }),
                          c,
                        ],
                      }),
                    }),
                    m,
                  ],
                }),
              }),
            ],
          });
        }
        function tf(s) {
          return s == null
            ? g.Localize("#ShopLink_ViewAll_NoCount_Narrow")
            : s >= 1e3
              ? g.Localize(
                  "#ShopLink_ViewAll_NarrowThousands",
                  (s / 1e3).toFixed(),
                )
              : g.Localize("#ShopLink_ViewAll_NarrowUnderThousand", s);
        }
        function Pa(s) {
          return s == null
            ? g.Localize("#ShopLink_ViewAll_NoCount")
            : s >= 1e3
              ? g.Localize(
                  "#ShopLink_ViewAll_WideThousands",
                  (s / 1e3).toFixed(),
                )
              : g.Localize("#ShopLink_ViewAll_WideUnderThousand", s);
        }
        function nf(s) {
          const { total_count: e } = s;
          return (0, t.jsx)(As.x, {
            className: mn().AllText,
            height: "100%",
            background: "greyneutral-5",
            children: (0, t.jsxs)(ce.az, {
              alignSelf: "center",
              textAlign: "center",
              justifySelf: "center",
              children: [
                (0, t.jsx)(j.EY, {
                  contrast: "description",
                  className: mn().Wide,
                  children: Pa(e),
                }),
                (0, t.jsx)(j.EY, {
                  contrast: "description",
                  className: mn().Narrow,
                  children: tf(e),
                }),
              ],
            }),
          });
        }
        function sf(s) {
          const { title: e, link_text: n, url: r } = s;
          return (0, t.jsx)("a", {
            href: r,
            className: mn().ResponsiveLink,
            children: (0, t.jsxs)(F.s, {
              direction: "row",
              background: "blue-3",
              padding: "2",
              align: "center",
              children: [
                (0, t.jsxs)(j.EY, {
                  contrast: "subtitle",
                  className: mn().Text,
                  children: [e, " - ", n],
                }),
                (0, t.jsx)(j.EY, {
                  contrast: "subtitle",
                  className: mn().Arrow,
                  children: (0, t.jsx)(Ve.cLJ, { direction: "right" }),
                }),
              ],
            }),
          });
        }
        function rf(s, e) {
          switch (e.item_class) {
            case Vr.sU:
            case Vr.zs:
              return `${Gs.TS.COMMUNITY_CDN_URL}economy/profilebackground/items/${s}/${e.image_large}?size=320x200`;
            case Vr.Tl:
              return (0, Ol.k)(s, e.image_small);
            default:
              return (0, Ol.k)(s, e.image_large);
          }
        }
        function af(s) {
          const { appid: e, items: n, total_count: r, shop_url: a } = s;
          return (
            d.use(g.Ready()),
            n?.length
              ? (0, t.jsx)(Ea, {
                  title: g.Localize("#AppPage_PointsShop_Header"),
                  url: a,
                  total_count: r,
                  children: n.map((o) =>
                    (0, t.jsx)(
                      ce.az,
                      {
                        alignSelf: "center",
                        children: (0, t.jsx)(Wn._, {
                          className: (0, ne.A)(
                            zl().ItemImage,
                            o.item_class == Vr.sU && zl().ProfileBackground,
                          ),
                          src: rf(e, o),
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
        var of = i(30820),
          Ta = i.n(of);
        const Nl = 256;
        function lf(s) {
          const e = `${Gs.TS.COMMUNITY_CDN_URL}economy/image/${s}/${Nl}fx${Nl}f`;
          return { src: e, srcSet: `${e} 1x, ${e}dpx2x 2x` };
        }
        function cf(s) {
          const { items: e, shop_url: n } = s;
          return (
            d.use(g.Ready()),
            e?.length
              ? (0, t.jsx)(Ea, {
                  title: g.Localize("#AppPage_ItemShop_Header"),
                  link_text: g.Localize("#AppPage_ItemShop_ShopAll"),
                  url: n,
                  linkType: "overlay",
                  children: e.map((r) =>
                    (0, t.jsxs)(
                      ce.az,
                      {
                        className: Ta().Item,
                        textAlign: "center",
                        children: [
                          (0, t.jsx)(Wn._, {
                            className: Ta().ItemImage,
                            ...lf(r.icon_url),
                            alt: r.name,
                          }),
                          (0, t.jsx)(j.EY, {
                            size: "2",
                            weight: "heavy",
                            className: Ta().Price,
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
        const Dl = "steamQueryPersist";
        function rh(s) {
          return s.meta?.[Dl];
        }
        const Sa = d.createContext(void 0),
          ih = Sa.Provider;
        function Fl(s) {
          const { area: e, maxAgeSeconds: n, meta: r, ...a } = s,
            o = d.useContext(Sa),
            l = d.useMemo(() => Ma(r, e, n), [r, e, n]);
          return (0, Oe.I)({ ...a, meta: l, persister: o?.GetPersister(e) });
        }
        function ah(s) {
          const e = React.useContext(Sa),
            n = React.useMemo(
              () =>
                s.queries.map((r) => {
                  const { area: a, maxAgeSeconds: o, meta: l, ...c } = r;
                  return {
                    ...c,
                    meta: Ma(l, a, o),
                    persister: e?.GetPersister(a),
                  };
                }),
              [s.queries, e],
            );
          return useQueries({ queries: n, combine: s.combine });
        }
        function Ma(s, e, n) {
          return { ...s, [Dl]: { area: e, maxAgeSeconds: n } };
        }
        async function oh(s, e) {
          const { area: n, maxAgeSeconds: r, meta: a, ...o } = e,
            l = { ...o, meta: Ma(a, n, r), staleTime: 0 },
            c = s.getQueryState(o.queryKey);
          c &&
            c.fetchStatus !== "idle" &&
            (await s.fetchQuery(l).catch(() => {})),
            await s.fetchQuery(l);
        }
        const df = Date.now();
        function lh(s) {
          return s > 0 && s < df;
        }
        var Rl = i(27386);
        const rr = 0;
        function Ia(s, ...e) {
          return ["achievements", s, ...e];
        }
        const uf = (s) => Ia(s, "schema");
        function Wl(s, e) {
          if (!(e === void 0 || e === ""))
            return `${Y.TS.BASE_URL_SHARED_CDN}community_assets/images/apps/${s}/${e}`;
        }
        async function mf(s, e, n) {
          const r = await Rl.xtC.GetGameAchievements(s, {
            appid: e,
            language: n,
          });
          if (r.GetEResult() === jn.p)
            return {
              appid: e,
              language: n,
              groups: [],
              schema_hash: 0,
              schema_version: 0,
            };
          if (r.GetEResult() !== jn.R)
            throw (
              (console.error(
                "Received error from GetGameAchievements",
                r.GetEResult(),
              ),
              new Error(`Error from GetGameAchievements: ${r.GetEResult()}`))
            );
          const a = {};
          a[rr] = {
            id: rr,
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
            .forEach((m) => {
              const f = m.groupid();
              a[f] = {
                id: f,
                name: m.localized_name(),
                archived: m.archived() ?? !1,
                ispublic: m.ispublic() ?? !0,
                developeronly: m.developeronly() ?? !1,
                dlcappid: m.dlcappid() ?? 0,
                order: m.order() ?? 0,
                achievements: [],
              };
            }),
            r
              .Body()
              .toObject()
              ?.achievements?.forEach((m) => {
                const f = m.groupid ?? rr;
                a[f].achievements.push({
                  internal_key: m.internal_key ?? 0,
                  api_name: m.internal_name ?? "",
                  name: m.localized_name,
                  description: m.localized_desc,
                  hidden: m.hidden ?? !1,
                  archived: m.archived ?? !1,
                  icon_achieved: Wl(e, m.icon),
                  icon_unachieved: Wl(e, m.icon_gray),
                  groupid: m.groupid ?? rr,
                  min_progress: m.min_progress_int ?? m.min_progress_float,
                  max_progress: m.max_progress_int ?? m.max_progress_float,
                });
              });
          const l = Object.values(a)
            .filter((m) => m.achievements.length > 0)
            .sort((m, f) => m.order - f.order);
          return {
            appid: e,
            language: n,
            groups: l,
            schema_hash: r.Body()?.schema_hash() ?? 0,
            schema_version: r.Body()?.schema_version() ?? 0,
          };
        }
        const gf = (s) => Ia(s, "globalpercentages");
        async function pf(s, e) {
          const n = await Rl.xtC.GetGlobalAchievementPercentages(s, {
            appid: e,
          });
          if (n.GetEResult() === jn.p) return { percentages: {} };
          if (n.GetEResult() !== jn.R)
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
                const l = o.internal_key();
                return (
                  l === void 0 || (a[l] = o.player_percent_unlocked() ?? 0.1), a
                );
              }, {}),
          };
        }
        function ch(s, e) {
          return Ia(s, "user_achievements", e);
        }
        function La(s, e, n, r) {
          const a = (n?.achievements() ?? []).reduce((l, c) => {
              const m = c.internal_key();
              return (
                (l[m] = {
                  internal_key: m,
                  unlocked: c.unlocked(),
                  unlock_time: c.unlock_time(),
                  progress: c.progress_int() ?? c.progress_float(),
                }),
                l
              );
            }, {}),
            o = (n?.groups() ?? []).reduce((l, c) => {
              const m = c.groupid(),
                f = c.is_completed(),
                y = c.time_completed();
              return (
                (l[m] = {
                  groupid: m,
                  is_achievable: c.is_achievable(),
                  completed_achievements: c.completed_achievements() ?? 0,
                  is_completed: f === void 0 ? !1 : f,
                  time_completed: y || void 0,
                }),
                l
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
        function dh(s, e) {
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
        class ff extends Error {
          constructor() {
            super("GetUserAchievements: server unreachable");
          }
        }
        function hf(s) {
          const e = s.Hdr().transport_error();
          return e === k_ETransportError_RequestNotSent ||
            e === k_ETransportError_ResponseNotReceived
            ? !0
            : s.GetEResult() === k_EResultNoConnection ||
                s.GetEResult() === k_EResultTimeout;
        }
        async function uh(s, e, n) {
          if (n == "" || n == "0") return La(e, n, void 0, 0);
          const r = await PlayerService.GetUserAchievements(s, {
            appid: e,
            steamid: n,
          });
          if (
            r.GetEResult() === k_EResultAccessDenied ||
            r.GetEResult() === k_EResultAccountNotFound
          )
            return La(e, n, void 0, 0);
          if (hf(r)) throw new ff();
          if (r.GetEResult() !== k_EResultOK)
            throw (
              (console.error(
                "Received error from GetUserAchievements",
                r.GetEResult(),
              ),
              new Error(`Error from GetUserAchievements: ${r.GetEResult()}`))
            );
          return La(e, n, r.Body(), r.Body()?.schema_hash() ?? 0);
        }
        var yf = i(64082);
        function wl(s) {
          return s?.bNoRetryOnError
            ? {
                retry: !1,
                retryOnMount: !1,
                refetchOnWindowFocus: !1,
                refetchOnReconnect: !1,
              }
            : {};
        }
        function vf(s) {
          return {
            ...s,
            groups: s.groups.map((e) =>
              e.id === rr
                ? { ...e, name: yf.c.Localize("#Achievements_Set_BaseGame") }
                : e,
            ),
          };
        }
        function Ul(s, e) {
          return {
            queryKey: uf(e),
            queryFn: async () => {
              const n = Y.TS.LANGUAGE;
              return mf(s, e, n);
            },
            select: vf,
            staleTime: 1440 * 60 * 1e3,
            area: "achievements",
          };
        }
        function $r(s, e) {
          const n = (0, pn.KV)();
          return Fl({ ...Ul(n, s), ...wl(e) });
        }
        function xf(s, e) {
          return {
            queryKey: gf(e),
            queryFn: async () => pf(s, e),
            staleTime: 1440 * 60 * 1e3,
            area: "achievements",
          };
        }
        function ir(s, e) {
          const n = (0, pn.KV)();
          return Fl({ ...xf(n, s), ...wl(e) });
        }
        function mh(s, e) {
          const { data: n } = ir(s);
          if (n) return n.percentages[e] ?? void 0;
        }
        function gh(s, e) {
          const n = $r(s),
            r = ir(s),
            a = n.data,
            o = r.data;
          if (!a || !o)
            return { data: void 0, isPending: n.isPending || r.isPending };
          const l = e ? GetAchievementInternalKeyByApiName(a, e) : void 0;
          return {
            data: l === void 0 ? void 0 : (o.percentages[l] ?? void 0),
            isPending: !1,
          };
        }
        function Jr(s, e, n) {
          return {
            queryKey: GetUserAchievementsQueryKey(e, n),
            queryFn: async () => GetUserAchievements(s, e, n),
            staleTime: 600 * 1e3,
            area: "achievements",
          };
        }
        function Cl(s, e, n) {
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
            l = a ? o.data : void 0,
            c = o.dataUpdatedAt;
          return useMemo(
            () =>
              l
                ? {
                    ...n,
                    data: MergeLocalUserAchievements(n.data, l),
                    dataUpdatedAt: Math.max(n.dataUpdatedAt, c),
                  }
                : n,
            [n, l, c],
          );
        }
        function jf(s, e) {
          const n = useActiveServiceTransport(),
            r = usePersistedQuery(Jr(n, s, e));
          return Cl(s, e, r);
        }
        function bf(s) {
          return s.map((e) => e.data);
        }
        function ph(s, e) {
          const n = useActiveServiceTransport(),
            r = useMemo(() => e.map((a) => Jr(n, s, a)), [n, s, e]);
          return usePersistedQueries({ queries: r, combine: bf });
        }
        function fh(s, e) {
          const n = useActiveServiceTransport(),
            r = $r(s),
            a = ir(s),
            o = usePersistedQuery({ ...Jr(n, s, e ?? ""), enabled: !!e }),
            l = Cl(s, e ?? "", o),
            c = !!e,
            m = r.data,
            f = c ? l.data : void 0,
            y = m != null && (!c || f !== void 0),
            v = () => (y ? GetAchievementsSummary(m, a.data, f) : void 0),
            b = useQuery({
              queryKey: GetAppAchievementsQueryKey(
                s,
                "summary",
                e ?? "",
                r.dataUpdatedAt,
                a.dataUpdatedAt,
                c ? l.dataUpdatedAt : 0,
              ),
              queryFn: () => {
                const $ = v();
                if ($ === void 0)
                  throw new Error("No achievements schema to summarize");
                return $;
              },
              initialData: v,
              staleTime: 1 / 0,
              gcTime: 60 * 1e3,
              enabled: y,
            }),
            B = c ? [r, l] : [r],
            S = B.find(($) => $.data === void 0),
            I = S?.isPending ?? !1,
            V = B.find(($) => $.isError),
            W = S ? void 0 : b.data;
          return {
            isPending: I,
            isError: !I && W === void 0,
            error: V?.error ?? null,
            data: W,
          };
        }
        function hh(s, e) {
          const n = $r(s),
            r = ir(s),
            a = jf(s, e),
            o = n.data,
            l = a.data,
            c = !!o && !!l,
            m = () => (c ? GetAchievementsByStatus(o, r.data, l) : void 0),
            f = useQuery({
              queryKey: GetAppAchievementsQueryKey(
                s,
                "by_status",
                e,
                n.dataUpdatedAt,
                r.dataUpdatedAt,
                a.dataUpdatedAt,
              ),
              queryFn: () => {
                const y = m();
                if (y === void 0)
                  throw new Error("No achievements to split by status");
                return y;
              },
              initialData: m,
              staleTime: 1 / 0,
              gcTime: 60 * 1e3,
              enabled: c,
            });
          return {
            data: c ? f.data : void 0,
            isPending: !c && (n.isPending || a.isPending),
          };
        }
        async function yh(s, e, n, r) {
          await FetchPersistedQuery(s, Jr(e, n, r));
        }
        async function vh(s, e, n) {
          await FetchPersistedQuery(s, Ul(e, n));
        }
        var Bf = i(13558);
        function Ef(s, e) {
          const { data: n } = $r(s);
          if (!n) return;
          const r = new Set();
          let a = 0;
          const o = [];
          for (const l of n.groups) {
            const c = l.achievements.filter((m) => !m.archived);
            if (!(!c || !c?.length || l.archived)) {
              if (e) {
                if (l.dlcappid != e) continue;
              } else if (l.dlcappid) {
                r.add(l.dlcappid);
                continue;
              }
              o.push(...c), a++;
            }
          }
          if (o?.length)
            return { achievements: o, nDLCCount: r.size, nGroupCount: a };
        }
        function Pf(s) {
          const { appid: e, dlcappid: n, iconCount: r = 4 } = s;
          d.use(g.Ready());
          const a = Ef(e, n),
            o = ir(e),
            l = (0, se.Qn)();
          if (!a || o.isPending) return null;
          const { achievements: c, nDLCCount: m, nGroupCount: f } = a,
            v = c
              .sort(($, le) => {
                if (!$.hidden && le.hidden) return -1;
                if ($.hidden && !le.hidden) return 1;
                const me = o?.data?.percentages?.[$.internal_key] ?? 0;
                return (o?.data?.percentages?.[le.internal_key] ?? 0) - me;
              })
              .slice(0, r),
            b = Array(r - v.length).fill(void 0),
            B = (0, aa.v)({ appid: e, dlc: n }),
            S = (0, aa.v)({ appid: e, dlc: "all" }),
            I =
              m == 0 || !l
                ? null
                : (0, t.jsx)(j.EY, {
                    color: "plum-8",
                    size: "2",
                    children: g.Localize("#AppPage_Achievements_DLCCount", m),
                  }),
            V =
              m == 0 || l
                ? null
                : (0, t.jsxs)(t.Fragment, {
                    children: [
                      f > 1 &&
                        (0, t.jsx)(Xe.Y, {
                          size: "2",
                          contrast: "title",
                          href: B,
                          children: g.Localize(
                            "#AppPage_Achievements_GroupCount",
                            f,
                          ),
                        }),
                      (0, t.jsx)(Xe.Y, {
                        size: "2",
                        color: "plum-8",
                        href: S,
                        children: g.Localize(
                          "#AppPage_Achievements_DLCCount",
                          m,
                        ),
                      }),
                    ],
                  }),
            W =
              f <= 1 || !l
                ? void 0
                : g.Localize("#AppPage_Achievements_GroupCount", f);
          return (0, t.jsxs)(Ea, {
            title: g.Localize(
              l
                ? "#AppPage_Achievements_Header"
                : "#AppPage_Achievements_Header_Desktop",
            ),
            link_text: W,
            total_count: c?.length,
            url: B,
            link_footer: I,
            block_footer: V,
            children: [
              b.map(($, le) => (0, t.jsx)(ce.az, {}, le)),
              v.map(($, le) =>
                (0, t.jsx)(
                  Bf.Tv,
                  { achievement: $, unlocked: !$.hidden, size: "fill" },
                  $.api_name,
                ),
              ),
            ],
          });
        }
        var Tf = i(73644),
          Sf = i(4515),
          Mf = i(35177),
          os = i.n(Mf);
        const If = 30,
          Lf = [
            {
              eType: oe.xY.kT,
              strPath: "quickref",
              strLabel: "#AppPage_LinksAndInfo_QuickRef",
            },
            {
              eType: oe.xY._b,
              strPath: "manual",
              strLabel: "#AppPage_LinksAndInfo_Manual",
            },
            {
              eType: oe.xY.cb,
              strPath: "warranty",
              strLabel: "#AppPage_LinksAndInfo_Warranty",
            },
          ];
        function Af(s) {
          const { appid: e } = s,
            { data: n } = (0, M.J$)({ appid: e }),
            { data: r } = (0, M._F)({ appid: e }),
            { data: a } = (0, M.bg)({ appid: e }),
            { data: o } = (0, M.is)({ appid: e }),
            l = (0, Wt.AP)(e);
          if ((d.use(g.Ready()), !n)) return null;
          const c = Y.TS.EREALM === Bn.TU.k_ESteamRealmChina;
          return (0, t.jsxs)(qt.YZ, {
            className: os().LinksAndInfo,
            children: [
              (0, t.jsx)(Wr, {
                text: g.Localize("#AppPage_LinksAndInfo_Header"),
              }),
              (0, t.jsx)(Ds, {
                url: `${Y.TS.COMMUNITY_BASE_URL}app/${e}`,
                label: "#AppPage_LinksAndInfo_CommunityHub",
              }),
              (!c || Kl(n)) &&
                (0, t.jsx)(Of, {
                  children: (0, t.jsx)(Nf, {
                    appid: e,
                    steamworksAppID: l,
                    app: n,
                    bSteamChina: c,
                    links: r?.links_and_info,
                    rgSocialLinks: a,
                    bRequiresShipping: !!o?.purchase_options?.some(
                      (m) => m.requires_shipping,
                    ),
                  }),
                }),
            ],
          });
        }
        function Of(s) {
          const [e, n] = d.useState(!1),
            r = d.useCallback(() => n((a) => !a), []);
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsxs)(F.s, {
                align: "center",
                cursor: "pointer",
                background: "sky-6 50%",
                radius: "sm",
                role: "button",
                onClick: r,
                "aria-expanded": e,
                children: [
                  (0, t.jsx)(ce.az, {
                    flexGrow: "1",
                    paddingX: "3",
                    paddingY: "2",
                    children: (0, t.jsx)(j.EY, {
                      size: "2",
                      color: "blue-8",
                      children: g.Localize("#AppPage_LinksAndInfo_MoreLinks"),
                    }),
                  }),
                  (0, t.jsx)(F.s, {
                    paddingX: "2",
                    children: (0, t.jsx)(zf, { bExpanded: e }),
                  }),
                ],
              }),
              e &&
                (0, t.jsx)("div", {
                  className: os().MoreLinks,
                  children: s.children,
                }),
            ],
          });
        }
        function zf(s) {
          const { bExpanded: e } = s;
          return (0, t.jsx)("svg", {
            width: "16",
            height: "16",
            viewBox: "0 0 18 18",
            fill: "#e5e5e5",
            "aria-hidden": "true",
            children: e
              ? (0, t.jsx)("path", {
                  d: "M9.7,9.7h4.7C14.7,9.7,15,9.4,15,9s-0.3-0.7-0.7-0.7H9.7H8.3H3.7C3.3,8.3,3,8.6,3,9s0.3,0.7,0.7,0.7h4.7H9.7z",
                })
              : (0, t.jsx)("path", {
                  d: "M9.7,3.7C9.7,3.3,9.4,3,9,3S8.3,3.3,8.3,3.7v4.7H3.7C3.3,8.3,3,8.6,3,9s0.3,0.7,0.7,0.7h4.7v4.7C8.3,14.7,8.6,15,9,15s0.7-0.3,0.7-0.7V9.7h4.7C14.7,9.7,15,9.4,15,9s-0.3-0.7-0.7-0.7H9.7V3.7z",
                }),
          });
        }
        function Kl(s) {
          return s.type != oe.uE.RA && s.type != oe.uE.ue && s.type != oe.uE.FS;
        }
        function Nf(s) {
          const {
              appid: e,
              steamworksAppID: n,
              app: r,
              bSteamChina: a,
              links: o,
              rgSocialLinks: l,
              bRequiresShipping: c,
            } = s,
            m = !!r.categories?.feature_categoryids?.includes(If);
          return (0, t.jsxs)(t.Fragment, {
            children: [
              !a &&
                (0, t.jsxs)(t.Fragment, {
                  children: [
                    c &&
                      (0, t.jsx)(Ds, {
                        url: `${Y.TS.STORE_BASE_URL}hardware_order_terms`,
                        label: "#AppPage_LinksAndInfo_HardwareOrderTerms",
                        bStoreNav: !0,
                      }),
                    (0, t.jsx)(Fs, {
                      url: o?.website,
                      label: g.Localize("#AppPage_LinksAndInfo_Website"),
                    }),
                    l?.map((f) =>
                      (0, t.jsx)(
                        Ff,
                        { social: f },
                        `${f.link_type}_${f.url ?? f.text}`,
                      ),
                    ),
                    Lf.filter((f) =>
                      o?.available_documents?.includes(f.eType),
                    ).map((f) =>
                      (0, t.jsx)(
                        Df,
                        {
                          url: `${Y.TS.STORE_BASE_URL}${f.strPath}/${e}`,
                          label: f.strLabel,
                        },
                        f.eType,
                      ),
                    ),
                    (0, t.jsx)(Fs, {
                      url: o?.online_manual_url,
                      label: g.Localize("#AppPage_LinksAndInfo_Manual"),
                    }),
                    (0, t.jsx)(Fs, {
                      url: o?.health_warning_url,
                      label: g.Localize("#AppPage_LinksAndInfo_HealthWarning"),
                    }),
                    (0, t.jsx)(Fs, {
                      url: o?.privacy_policy_url,
                      label: g.Localize("#AppPage_LinksAndInfo_PrivacyPolicy"),
                    }),
                    (0, t.jsx)(Fs, {
                      url: o?.stats_url,
                      label: g.Localize("#AppPage_LinksAndInfo_Stats"),
                    }),
                  ],
                }),
              Kl(r) &&
                (0, t.jsxs)(t.Fragment, {
                  children: [
                    (0, t.jsx)(Ds, {
                      url: `${Y.TS.STORE_BASE_URL}newshub/?appids=${e}`,
                      label: "#AppPage_LinksAndInfo_UpdateHistory",
                      bStoreNav: !0,
                    }),
                    (0, t.jsx)(Ds, {
                      url: `${Y.TS.STORE_BASE_URL}newshub/app/${e}`,
                      label: "#AppPage_LinksAndInfo_News",
                      bStoreNav: !0,
                    }),
                  ],
                }),
              !a &&
                (0, t.jsxs)(t.Fragment, {
                  children: [
                    m &&
                      (0, t.jsx)(Ds, {
                        url: `${Y.TS.COMMUNITY_BASE_URL}app/${n}/workshop/`,
                        label: "#AppPage_LinksAndInfo_Workshop",
                      }),
                    r.name &&
                      (0, t.jsx)(Ds, {
                        url: `${Y.TS.COMMUNITY_BASE_URL}actions/Search?T=ClanAccount&K=${encodeURIComponent(r.name)}`,
                        label: "#AppPage_LinksAndInfo_CommunityGroups",
                      }),
                  ],
                }),
            ],
          });
        }
        function Ds(s) {
          const { url: e, label: n, bStoreNav: r } = s,
            a = (0, Jt.aL)(r ? e : void 0);
          return (0, t.jsx)(L.Ii, {
            className: os().LinkRow,
            href: a || e,
            children: (0, t.jsx)(j.EY, {
              color: "blue-8",
              children: g.Localize(n),
            }),
          });
        }
        function Df(s) {
          const { url: e, label: n } = s;
          return (0, t.jsxs)(L.Ii, {
            className: os().LinkRow,
            href: Y.TS.IN_CLIENT ? `steam://openurl_external/${e}` : e,
            target: Y.TS.IN_CLIENT ? void 0 : "_blank",
            children: [
              (0, t.jsx)(j.EY, { color: "blue-8", children: g.Localize(n) }),
              (0, t.jsx)(Gl, {}),
            ],
          });
        }
        function Fs(s) {
          const { url: e, label: n, children: r } = s,
            a = Qr(e);
          return a
            ? (0, t.jsxs)(L.Ii, {
                className: os().LinkRow,
                href: a,
                target: Y.TS.IN_CLIENT ? void 0 : "_blank",
                rel: "noopener noreferrer",
                children: [
                  r,
                  (0, t.jsx)(j.EY, { color: "blue-8", children: n }),
                  (0, t.jsx)(Gl, {}),
                ],
              })
            : null;
        }
        function Ff(s) {
          const { social: e } = s,
            n = e.link_type ?? oe.jL.I0,
            r = (0, Sf.X)(n);
          if (!r) return null;
          const a = (0, C.we)(`#StoreAdmin_SocialMedia_Type_${r}`),
            o = (0, t.jsx)(Tf.k6, { linkType: n, className: os().SocialIcon });
          return e.url
            ? (0, t.jsx)(Fs, { url: e.url, label: a, children: o })
            : (0, t.jsxs)("div", {
                className: os().LinkRow,
                children: [
                  o,
                  (0, t.jsx)(j.EY, {
                    contrast: "body",
                    children: `${a} ${e.text ?? ""}`,
                  }),
                ],
              });
        }
        function Gl() {
          return (0, t.jsx)("span", {
            className: os().ExternalIcon,
            children: (0, t.jsx)(Q.GrD, {}),
          });
        }
        var Rf = i(80154),
          Aa = i.n(Rf);
        function Wf(s) {
          const { appid: e } = s,
            { data: n } = (0, M.J$)({ appid: e }),
            { data: r } = (0, M.wl)({ appid: e }),
            a = r?.franchises?.find(
              (S) => !!S.creator_clan_account_id,
            )?.creator_clan_account_id,
            o = n?.type == oe.uE._i || n?.type == oe.uE.Ov,
            l = a && !o ? { creatorid: a } : void 0,
            { data: c } = (0, M.J$)(l),
            { data: m } = (0, M.lv)(l),
            f = c?.name,
            y = (0, Jt.aL)(
              a && f ? wf(a, f, c?.store_url_slug) : void 0,
              "franchise-home-link",
            );
          if (!f || !y) return null;
          d.use(g.Ready());
          const v = m?.creator_home_background,
            b = v
              ? `${Y.TS.CLAN_CDN_ASSET_URL}images/${a}/${encodeURIComponent(v)}`
              : void 0,
            B = f.toLowerCase().includes("franchise");
          return (0, t.jsxs)(L.Ii, {
            className: Aa().FranchiseNotice,
            href: y,
            children: [
              b &&
                (0, t.jsx)("div", {
                  className: Aa().Background,
                  style: { backgroundImage: `url( "${b}" )` },
                }),
              (0, t.jsx)("div", {
                className: Aa().Name,
                children: g.Localize(
                  B
                    ? "#AppPage_Franchise_SeeAll_NamedFranchise"
                    : "#AppPage_Franchise_SeeAll",
                  f,
                ),
              }),
            ],
          });
        }
        function wf(s, e, n) {
          return Y.TS.EREALM === Bn.TU.k_ESteamRealmChina
            ? `${Y.TS.STORE_BASE_URL}search/?franchise=${encodeURIComponent(e)}`
            : n
              ? `${Y.TS.STORE_BASE_URL}franchise/${encodeURIComponent(n)}`
              : `${Y.TS.STORE_BASE_URL}curator/${s}`;
        }
        const Uf = d.lazy(() => i.e(85139).then(i.bind(i, 64193))),
          Cf = d.lazy(async () => ({
            default: (await i.e(85139).then(i.bind(i, 64193)))
              .SeasonPassDisplayFromStoreBrowse,
          })),
          Kf = d.lazy(() =>
            Promise.all([
              i.e(36597),
              i.e(87937),
              i.e(28792),
              i.e(56589),
              i.e(85599),
              i.e(33512),
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
            ]).then(i.bind(i, 93285)),
          ),
          Gf = d.lazy(() =>
            Promise.all([
              i.e(85599),
              i.e(33512),
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
              i.e(89672),
            ]).then(i.bind(i, 66825)),
          ),
          Yf = d.lazy(() =>
            Promise.all([
              i.e(36597),
              i.e(56589),
              i.e(85599),
              i.e(33512),
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
          kf = d.lazy(async () => ({
            default: (await Promise.resolve().then(i.bind(i, 62038)))
              .AccessibilityFeatureDisplay,
          }));
        function Qf(s) {
          const { appid: e } = s,
            n = (0, Ss.Fd)("store_page_asset_url", "application_config");
          return (0, t.jsx)(K0.W4, {
            store_page_asset_url: n,
            children: (0, t.jsx)(kl, {
              children: (0, t.jsx)(Yl, {
                children: (0, t.jsxs)(Ka.QA, {
                  eAdultOnlyMediaBehavior: "allowed",
                  children: [
                    (0, t.jsx)(In.X, {
                      config: {
                        "events-row": () =>
                          (0, t.jsx)(li.d, {
                            children: (0, t.jsx)(Qe, { appid: e }),
                          }),
                        "deck-topplayed-banner": (r) =>
                          (0, t.jsx)(oi, { ...r }),
                        "steamawardsvote-embed": () =>
                          (0, t.jsx)(Kf, { appID: e }),
                        "demo-and-quick-pitch": () =>
                          (0, t.jsx)(li.d, {
                            children: (0, t.jsx)(ls, { appID: e }),
                          }),
                        "deck-verified-results": (r) =>
                          (0, t.jsx)(xc, {
                            appID: e,
                            results: (0, Ss.Tc)(
                              "hardwarecompatibility",
                              "application_config",
                            ),
                            appName: (0, Ss.Tc)(
                              "appname",
                              "application_config",
                            ),
                            ...r,
                          }),
                        "gamehighlight-trailer": (r) =>
                          (0, t.jsx)(Te, { ...r }),
                        "gamehighlight-gamepadcarousel": (r) =>
                          (0, t.jsx)(mi, { ...r }),
                        "gamehighlight-desktopcarousel": (r) =>
                          (0, t.jsx)(ql, { ...r }),
                        "discovery-queue-app-widget": () =>
                          (0, t.jsx)(Gf, { appID: e }),
                        "game-notice-controller-required": () =>
                          (0, t.jsx)(ds, {
                            appid: e,
                            type: rn.EPurchaseNoticeType_ControllerRequired,
                          }),
                        "game-notice-vr-required": () =>
                          (0, t.jsx)(ds, {
                            type: rn.EPurchaseNoticeType_VRRequired,
                          }),
                        "game-notice-vr-supported": () =>
                          (0, t.jsx)(ds, {
                            type: rn.EPurchaseNoticeType_VRSupported,
                          }),
                        "season-pass-display": (r) => (0, t.jsx)(Uf, { ...r }),
                        "season-pass-display-gamepad": () =>
                          (0, t.jsx)(Cf, { appid: e }),
                        "storeitems-carousel": (r) =>
                          (0, t.jsx)(gn.Ay, {
                            feature: "recommended",
                            children: (0, t.jsx)(ni.default, { ...r }),
                          }),
                        "storeitems-carousel-dlc": (r) =>
                          (0, t.jsx)(gn.Ay, {
                            feature: "dlc",
                            children: (0, t.jsx)(ni.default, { ...r }),
                          }),
                        "creatorhome-carousel": (r) =>
                          (0, t.jsx)(gn.Ay, {
                            feature: "creator",
                            children: (0, t.jsx)(qr, { ...r }),
                          }),
                        parentappwidget: (r) =>
                          (0, t.jsx)(gn.Ay, {
                            feature: r.feature,
                            children: (0, t.jsx)(ka, { appid: r.appid }),
                          }),
                        appreviews: (r) => (0, t.jsx)(jc.l, { ...r }),
                        "wishlist-item-categories": (r) =>
                          (0, t.jsx)(zc, { ...r }),
                        "purchase-options": (r) => (0, t.jsx)(vu, { ...r }),
                        "purchase-options-dlc": (r) =>
                          (0, t.jsx)(gn.Ay, {
                            feature: "game-purchase-dlc",
                            children: (0, t.jsx)(ku, { ...r, appid: e }),
                          }),
                        "purchase-options-dependent-dlc": (r) =>
                          (0, t.jsx)(gn.Ay, {
                            feature: "dlc-dependency",
                            children: (0, t.jsx)($u, { ...r }),
                          }),
                        "summary-bar-top": (r) => (0, t.jsx)(Hu, { ...r }),
                        "features-section": (r) =>
                          (0, t.jsx)(ug, { ...r, appid: e }),
                        "about-this-game": () => (0, t.jsx)(cm, { appid: e }),
                        "page-sections": () => (0, t.jsx)(xm, { appid: e }),
                        "legal-notice": () => (0, t.jsx)(Em, { appid: e }),
                        "press-reviews": () => (0, t.jsx)(Pm, { appid: e }),
                        "ai-disclosure": () => (0, t.jsx)(Sm, { appid: e }),
                        "mature-content-description": () =>
                          (0, t.jsx)(Am, { appid: e }),
                        "cast-and-crew": () =>
                          (0, t.jsx)(gn.Ay, {
                            feature: "cast-and-crew",
                            children: (0, t.jsx)(zm, { appid: e }),
                          }),
                        "series-episodes": () => (0, t.jsx)(Hm, { appid: e }),
                        "music-album-details": (r) =>
                          (0, t.jsx)(Ig, { ...r, appid: e }),
                        "interest-buttons": (r) => (0, t.jsx)(Wg, { appid: e }),
                        "add-to-wishlist": (r) =>
                          (0, t.jsx)(Zi, { ...r, color: "storegreen" }),
                        "recommendation-reasons": (r) =>
                          (0, t.jsx)(fp, { ...r, appid: e }),
                        "friend-ownership": (r) =>
                          (0, t.jsx)(kp, { ...r, appid: e }),
                        "referring-curator-review": (r) =>
                          (0, t.jsx)($p, { ...r }),
                        "game-rating-block": (r) =>
                          (0, t.jsx)(Xp.GameRatingBlock, {
                            ...r,
                            id: { appid: e },
                          }),
                        achievements: (r) =>
                          (0, t.jsx)(Pf, {
                            appid: r.parent_appid ?? e,
                            dlcappid: r.dlcappid,
                          }),
                        "early-access": (r) =>
                          (0, t.jsx)(pm, { ...r, appid: e }),
                        "ownership-banner": (r) =>
                          (0, t.jsx)(gn.Ay, {
                            feature: "owned-game",
                            children: (0, t.jsx)(Km, { ...r, appid: e }),
                          }),
                        "store-awards": () => (0, t.jsx)(q0, { appid: e }),
                        "points-shop-items": (r) => (0, t.jsx)(af, { ...r }),
                        "item-shop-items": (r) => (0, t.jsx)(cf, { ...r }),
                        "links-and-info": () => (0, t.jsx)(Af, { appid: e }),
                        "franchise-notice": () => (0, t.jsx)(Wf, { appid: e }),
                        "write-review": (r) =>
                          (0, t.jsx)(gn.Ay, {
                            feature: "owned-game",
                            children: (0, t.jsx)(U0, { ...r, appid: e }),
                          }),
                      },
                    }),
                    (0, t.jsx)(In.X, {
                      omitFocusNavTreeBridge: !0,
                      config: {
                        "review-award": () => (0, t.jsx)(Fa.Ay, {}),
                        "broadcast-embed": (r) =>
                          (0, t.jsx)(Yf, { ...s, appid: r.appid }),
                        "store-sidebar-accessibility-info": (r) =>
                          (0, t.jsx)(kf, { features: r }),
                        "store-sidebar-controller-support-info": (r) =>
                          (0, t.jsx)(ti, { ...r }),
                      },
                    }),
                  ],
                }),
              }),
            }),
          });
        }
        function Yl(s) {
          const { children: e } = s,
            [n, r] = d.useState(!1);
          return n
            ? e
            : (0, t.jsx)(In.X, {
                omitFocusNavTreeBridge: !0,
                config: {
                  "apppage-gameinterest-cache": (a) =>
                    (0, t.jsx)(gr, { ...a, markReady: () => r(!0) }),
                },
              });
        }
        function kl(s) {
          const { children: e } = s,
            [n, r] = d.useState(!1);
          return n
            ? e
            : (0, t.jsx)(In.X, {
                omitFocusNavTreeBridge: !0,
                config: {
                  "apppage-store-browse-cache": (a) =>
                    (0, t.jsx)(im, { ...a, markReady: () => r(!0) }),
                },
              });
        }
      },
      93237: (P) => {
        P.exports = {
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
        };
      },
      89611: (P) => {
        P.exports = {
          ObjectFit: "_NIZ2fYFBu6WSnEE1H6i3",
          ObjectPosition: "_3OZ4rrlKzwAYOKP9HdqUrq",
        };
      },
      24089: (P) => {
        P.exports = { TextEntry: "_1vE-LsK6l_D_5yjbywZV1p" };
      },
      8833: (P) => {
        P.exports = {
          Separator: "_2v8lnOhHPKk5DrlAD0yAwc",
          "Size-1": "HA_T1szVWGIw7_cDibhei",
          "Size-2": "oSgUz2qE-NgHuOm4wt_OC",
          "Size-3": "f9Ra4JmQiBJz_dBLijs_x",
          "Size-4": "_1zkUYDDyfzPgesBbGmMsxP",
        };
      },
      75180: (P) => {
        P.exports = {
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
      39049: (P) => {
        P.exports = {
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
      66575: (P) => {
        P.exports = {
          GameRating: "dIVKtZR3FPk--WsTHPpCg",
          Title: "g6OWaWhTs7-jMnb_ipVdD",
          Banned: "_2OBX7mi9MwO3wh8vz69RW_",
          RequiredAge: "_3ixbRnhEXoSAFMMOxMR7kP",
          Icon: "_3NX32L22YZdobMQdeHDTRz",
          DescriptorText: "_3x1L_MQDZD6RKFHPJQDmCN",
          AllAges: "_2VePhLetNEJD1gctFnUgIC",
        };
      },
      58123: (P) => {
        P.exports = {
          SaleTechPriceGrid: "_14x0A0cAhaV-g8Od_xGbRL",
          LowestRecentPrice: "yLlRefh-UYhYZLE0_k-BK",
          FinalPrice: "_3P_1WcsVP8GJKQ8olprKQ2",
        };
      },
      88208: (P) => {
        P.exports = {
          PreventScroll: "ycpazsHLq6lCBFmWPCLCZ",
          ModalDialog: "_1mPKxUDAZ01x-i7612JIsL",
          ModalDialogContent: "_79d7mzfWutbJb1DCbh1Du",
        };
      },
      5598: (P) => {
        P.exports = {
          SimpleModalDialog: "_3ej4mcyhVunlvw3BjUXtel",
          WideMode: "_1oLxPrvbIeJJ1d96fhJvOI",
          SimpleModalDialogHeader: "_1w-TUMWBEOX_zsSa-BBhK8",
          SimpleModalDialogTitle: "_2tpBIlq2yGQqKcloht-UiJ",
          XButton: "RC4JznqJb34yCm04FKk0I",
          SimpleModalContentCtn: "_2yRV5HfgoGdJZqs9Fl049T",
        };
      },
      9246: (P) => {
        P.exports = {
          narrowWidth: "500px",
          AboutThisGame: "zeZyN-4SGkKN1ukmy4_Ns",
          Header: "_2bGVPSkxnJDt2vN54TTfNK",
        };
      },
      56680: (P) => {
        P.exports = { WishlistModalOverride: "_3V4Y44VzkkQWUAtDh6jQfA" };
      },
      8611: (P) => {
        P.exports = {
          narrowWidth: "500px",
          AutoCollapsePanel: "_2OFBKij25NOweLoQKnH-Hl",
          Contents: "_3z2f7_LIqrKVFzXn-nSN98",
          Collapsed: "_2EgdWaUHP8QhQdix9MlF0d",
          Expanded: "_35-z7zCVOx1yWKf8cJjZkH",
          ReadMore: "_1qDLg0KVwgnZmMwUt99Egn",
          ReadMoreBorderPulse: "_4w9-SNzzdsOMsBG-Ztqf4",
        };
      },
      78747: (P) => {
        P.exports = {
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
        };
      },
      399: (P) => {
        P.exports = {
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
      72723: (P) => {
        P.exports = {
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
      26666: (P) => {
        P.exports = {
          PackBody: "_1zq333d3pW7338j8MOxfoG",
          PackInLibrary: "_1-sgh5Na-U3TZmO_toUckA",
          PackCapsulesCtn: "_2jS1JS0vHcRTtKK5vN9bGo",
          PackCapsules: "CfSj_bx6zkyciRhJhRV4c",
          PackCapsulesCollapsed: "_3BI6mqK_SNTj5MBr8unOIZ",
          PackCapsule: "_3Cmt3xhzt5m1iqRlGl85t2",
          PackActionGroup: "_1_rYPVtMNifGny-euMweMD",
        };
      },
      16071: (P) => {
        P.exports = {
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
      38404: (P) => {
        P.exports = {
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
      55367: (P) => {
        P.exports = {
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
      80154: (P) => {
        P.exports = {
          FranchiseNotice: "_3cc4dI9V3PqeoQqj5SxBZz",
          Background: "njXxktHY4WsietvAfQD6Q",
          Name: "zxG9gBQG2fVTPjAa87gWf",
        };
      },
      77614: (P) => {
        P.exports = {
          FriendAvatarLink: "_1HwFByD2tVkgQjdeo3upUL",
          Details: "_3pLLJpVOHHWcI5UvltWXQZ",
          Name: "_1MsiMQXdRUXrfqSEZ7ewHM",
          Playtime: "RmetILTrNzddKrz3r4CGf",
        };
      },
      16836: (P) => {
        P.exports = {
          narrowWidth: "500px",
          FriendOwnership: "q5QNi4yaj2QV4U77xNSKp",
          FriendList: "_1jkvh5RzUyV-afkmRZBsEt",
          WithNames: "_1YludsZff-JSeiUJGTaBFP",
        };
      },
      20338: (P) => {
        P.exports = {
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
      69131: (P) => {
        P.exports = {
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
      19813: (P) => {
        P.exports = {
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
      19218: (P) => {
        P.exports = {
          WidestChildContainer: "_3YUWXt-ylyufqMm-YAliva",
          Hidden: "_29niryxpei49tSjYOBokyK",
        };
      },
      30820: (P) => {
        P.exports = {
          Item: "_2YfN55cMXVU9OD0d3_LoX3",
          ItemImage: "_2Zh_TIIvdD8EtU6ZxtELog",
          Price: "_1Fz-4Scga6rZOdvvmk2jLV",
        };
      },
      45200: (P) => {
        P.exports = { LegalNotice: "_2bOEuokOOajSeGl2yZEcPh" };
      },
      35177: (P) => {
        P.exports = {
          LinksAndInfo: "_3TuBg7_-ESlXR8VdekZAh6",
          MoreLinks: "_38qMxU84U3MdKhwOyNRvBh",
          LinkRow: "_3Fsj47byOWjgdvPZrMt79B",
          SocialIcon: "_2MvdxngdrJtnwX501aUgFu",
          ExternalIcon: "_2WUly4aWb_9foEZI0ARnK1",
        };
      },
      72390: (P) => {
        P.exports = {
          Score: "_3KFgbk3IzIHdQyWbx3ixQd",
          High: "_2gwFIDqCXQrEFHQkkMylvp",
          Medium: "_1WRij-yZeVQrXpyB2BQ5Hu",
          Low: "_20XeCHY1vgYRARXPiXK8qr",
          ExternalIcon: "_2_11-nL5KwLaw57DKAUUxk",
        };
      },
      76985: (P) => {
        P.exports = {
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
      95036: (P) => {
        P.exports = {
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
      54652: (P) => {
        P.exports = { PurchaseOptionBanner: "_1P2U635xpdOLT2_aa1xwdL" };
      },
      21763: (P) => {
        P.exports = {
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
      97393: (P) => {
        P.exports = {
          PlatformIcons: "_34fO3Y9HSHm3JfPdMRIf8m",
          PlatformIcon: "_27rt4wNpnea7jUH3nWwj8m",
        };
      },
      59869: (P) => {
        P.exports = { MenuItem: "_3VWkkleXCrqxmjyoSCylnk" };
      },
      80974: (P) => {
        P.exports = {
          InLibraryRow: "_1Ea1bwlHmxO1UmYTEQ8jHC",
          InLibraryFlag: "_2GveL49aC8sm8Mey1StYth",
          InLibrarySVG: "_2HPdYtyoJJ6hsAHw3jTQ10",
          Actions: "_2vmUZW0F1kvoznIng92EOn",
        };
      },
      14844: (P) => {
        P.exports = {
          PageSections: "_1_PU6_24UNZMD-aymVilmB",
          PageSection: "_2WpiheNBkhzJpmxQ4Arawu",
          Header: "y5728HUyiI5XdCDBm5D7A",
          Banner: "_3hkPxq8NpEEOtbG7MPXNUy",
        };
      },
      30452: (P) => {
        P.exports = {
          ItemImage: "_2emVfokDB6oT4pOU15fVVR",
          ProfileBackground: "_vaAGc8YOYW7s9yJPKtHf",
        };
      },
      6876: (P) => {
        P.exports = {
          ThumbIcon: "_2lDikjo0mk970SwUm3DRTK",
          Down: "_1Cwc3y07Is4gEGD1Q0zKc_",
          CommentIcon: "_2obrbR9xy_xows-ok2qmxn",
        };
      },
      74677: (P) => {
        P.exports = { ModBubble: "_2PauZG_yePbl6rC4OejmqF" };
      },
      18574: (P) => {
        P.exports = {
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
      77774: (P) => {
        P.exports = {
          ComingSoon: "VcfhtxgxhXCS5YBzd4O22",
          OffsitePrice: "_3nVt7tQlJcd-SJe7k_lDmO",
          Content: "yN2IR7l0MpF7rTD6dlS9f",
          Reminder: "_2KJX1jAw_ha_T3Dv2bDULi",
          Note: "rM8RXPAb9DnacUnfXKjkg",
          Preload: "_2uqsForJwTJzUiCcKC6WK7",
          PreloadActions: "_8FtJtmmrluBTGIheOirY_",
        };
      },
      23413: (P) => {
        P.exports = { AppList: "_1MVRGLawsCpcXLFlFkKAGL" };
      },
      60993: (P) => {
        P.exports = {
          narrowWidth: "500px",
          RecommendationReasonsDisplay: "_8A-vhpEBdS-qVF5Jl9jc7",
          ReviewScore: "DpGN2-UG7sEXIZDAb2xtu",
          Positive: "_1kiOvqf3wN3kBFxMVI8w-3",
          Negative: "_1UTMsJhG80MMvkig6Pw7UN",
        };
      },
      54629: (P) => {
        P.exports = {
          AppList: "_12s81WYtM0B0CmDPB6BMY0",
          AppIconAndName: "_3CcmNvL8ajAAtVfsoFxFRA",
          AppIcon: "_1abKISd0PdmRu72s9yPT6D",
          AppName: "_2VU-DDzaxFtQJqLuyn0IQw",
        };
      },
      2699: (P) => {
        P.exports = { AvatarList: "fIVYEi9n1QY4vaQuxZYW0" };
      },
      13290: (P) => {
        P.exports = {
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
      57102: (P) => {
        P.exports = {
          TagList: "_3jV1ymbnCcg8o3qq78ndN7",
          Tag: "gctfUSqAf4-wM1_s7LW7C",
        };
      },
      74049: (P) => {
        P.exports = {
          VerdictIcon: "_9yuiPD5NCU4QYi8jzKFrC",
          VerdictIconDown: "_2j8Acce2gU2Mnn4slpUyTf",
        };
      },
      94255: (P) => {
        P.exports = {
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
      75995: (P) => {
        P.exports = {
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
      48338: (P) => {
        P.exports = { StoreAwards: "_1CixVKuNHvP6aAZqdbx6nN" };
      },
      3471: (P) => {
        P.exports = {
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
      33001: (P) => {
        P.exports = {
          narrowWidth: "500px",
          StorePageBBCode: "_3n5Cn3P3AZI_zLOe5_jB9D",
          StoreImage: "L_7jPXkXscN-QxB458CKV",
          StoreVideo: "_1SedSl74BXCZ_7ixbPl5ml",
        };
      },
      48205: (P) => {
        P.exports = {
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
      31518: (P) => {
        P.exports = {
          CategoriesMenuOption: "_2-cvnCNnFqBG5u89enudpK",
          Label: "KldL9MJqWdVCahi3zvX-E",
          HeaderCtn: "_3WNoErKGw4jngFeVPfTZfs",
        };
      },
      32384: (P) => {
        P.exports = { PrePurchaseTag: "_3YeaCPVOebCGSdpWg3IN5l" };
      },
      37520: (P) => {
        P.exports = {
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
      46146: (P) => {
        P.exports = {
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
      6019: (P) => {
        P.exports = {
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
      12037: (P) => {
        P.exports = {
          "duration-app-launch": "800ms",
          Container: "_2Jd3MGaOu0C9Ydswf8Q4Tn",
          SectionButton: "_3n8swQFM3I_ARVM_5bPhAs",
          StoreHeaderAdjust: "_3YyCpH32HRhZtt4BOM5wM5",
          EventsSummariesCtn: "_1snIw0RvJduvDtqpmwtKJ9",
          LatestUpdateButtonCtn: "_2vEwZPNBe2qcTuxZf5cpiD",
          LatestUpdateIcon: "mq3ROvmcn5_HdCKG6JXDa",
          LatestUpdateButton: "_1TRFtE8IfXpDQ_loHnB_bU",
        };
      },
      97824: (P) => {
        P.exports = {
          OpenInBannerContainer: "_1EQpm6hAsghyCST7W04m-E",
          OpenInBannerContent: "_13oFTFTjvz0YaOVnWZxyqr",
          ValveOnly: "_3jg5qxP4_hiZYa6-GJDCOp",
          BannerMessage: "_1HSa8QK0U-qQCGObG6XYFT",
          BannerTitle: "_3Xfc_DOo4BUZBmxkSRmD6y",
          BannerButtonContainer: "_1lwkSayKFi-9WCDd6pq5bV",
          BannerButton: "_1jso7z80FWGn42k1HP0_cf",
        };
      },
      27510: (P) => {
        P.exports = {
          "duration-app-launch": "800ms",
          PurchaseNoticeContainer: "_2wT0yS1pvmL0ILuaiLHaBb",
          RightHandImage: "_3G-YXeWc1jffse8M8ct7hJ",
          PurchaseNoticeLabel: "dTa5uAAOq-wFRgQQG7xRm",
          PurchaseNoticeImageContainer: "_3Q2RgkhEvzbM10OBqMeTDB",
          VRSupported: "iqWk_VV3jdvFbRFaBkWRB",
          PurchaseNoticeImage: "_19Tk4I5-EL-sVXsUaa3hwU",
          Tilt: "_3dAAfHHQ8xq74OLmQXo9V4",
          VROnly: "_11BzgaR-a1UCE-aOC3bMCD",
        };
      },
      63404: (P) => {
        P.exports = {
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
      17479: (P) => {
        P.exports = {
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
      51249: (P) => {
        P.exports = {
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
      94846: (P) => {
        P.exports = {
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
      1205: (P) => {
        P.exports = {
          narrowWidth: "500px",
          Header: "kR_xyFf2ghgC-Jexsw_5v",
          FullWidth: "_263kQddRJk-a3OP3ANz0Bv",
          StoreItemsCarousel: "_2BG1JKMgeqn_cr0rbRhRNA",
          StorePageCarousel: "_1wsWr6qsx_k-ElMmSpGcf",
          Title: "_2BGZunVy7Z0-h18owewCzo",
        };
      },
      89524: (P) => {
        P.exports = {
          "duration-app-launch": "800ms",
          narrowWidth: "500px",
          strScrollSnapCarouselItemHeight: "168px",
          Carousel: "jGiY7rrZh0o9qrh7XNnZU",
          Capsule: "_292IWiCTro5jiTmIxiDfyc",
          Small: "_1mQ-hKJYGkL9gG76spf6uy",
          TwoWide: "_25IMXSN3XeXOPiu-sYHV1U",
          Placeholder: "_1tX6f_kWb07D_qLWgL7-Ah",
          SeeAllLink: "_1SnxJyZ5foWgNRCNLmKm6H",
        };
      },
    },
  ]);
})();

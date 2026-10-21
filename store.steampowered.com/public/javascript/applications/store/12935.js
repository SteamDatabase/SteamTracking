/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [12935],
    {
      84909: (F, X, a) => {
        "use strict";
        a.d(X, { AM: () => K, Pr: () => g });
        var e = a(7850),
          I = a(90626),
          M = a(73788),
          y = a(8083),
          _ = a(94621),
          k = a(18938),
          S = a(24660),
          Y = a(38566),
          B = a(54130),
          L = a(71742),
          d = a(64238),
          w = a.n(d),
          $ = a(3877),
          ne = a(3166),
          J = a(28020);
        const ee = (0, I.createContext)(null);
        function v(x) {
          const { children: E, ...p } = x,
            h = u(p);
          return (0, e.jsx)(ee.Provider, { value: h, children: E });
        }
        function N(x) {
          const { children: E } = x,
            p = I.Children.only(E),
            h = (0, I.useContext)(ee);
          return p
            ? h
              ? (0, I.cloneElement)(p, {
                  ...h.getReferenceProps(p.props),
                  ref: (0, k.XB)(p.props.ref, h.floating.refs.setReference),
                })
              : (console.error(
                  "<PopoverAnchor> must be a child of <PopoverRoot>.",
                ),
                null)
            : null;
        }
        function z(x) {
          const { children: E, className: p, ref: h, label: A } = x,
            T = (0, I.useContext)(ee),
            G = (0, M.SV)([h, T?.floating.refs.setFloating]);
          if (!T)
            return (
              console.error(
                "<Popover.Positioner> must be a child of <Popover.Root>.",
              ),
              null
            );
          if (!T.open) return null;
          let b = I.Children.only(E),
            U = I.Fragment;
          return (
            b.type == K.FocusManager &&
              ((b = I.Children.only(b.props.children)), (U = te)),
            (0, e.jsx)(U, {
              children: (0, e.jsx)(J.HF, {
                presentation: T.presentation,
                sizing: T.sizing,
                floatingRef: G,
                floatingProps: T.getFloatingProps(),
                floatingStyles: T.floating.floatingStyles,
                referenceElement: T.floating.elements.domReference,
                className: w()((0, $.T)(), p),
                label: A,
                children: b,
              }),
            })
          );
        }
        function te(x) {
          return (0, ne.Qn)()
            ? (0, e.jsx)(P, { ...x })
            : (0, e.jsx)(o, { ...x });
        }
        function P(x) {
          const { children: E } = x,
            p = (0, I.useContext)(ee);
          (0, L.wT)(
            !!p,
            "<Popover.Positioner> must be a child of <Popover.Root>.",
          );
          const h = () => p.floating.context.onOpenChange(!1),
            A = I.useRef(void 0);
          return (
            (0, S.O7)(A, !0, !0),
            (0, e.jsx)(Y.D6, {
              navID: "Popover",
              onCancelButton: h,
              modal: !0,
              navTreeRef: A,
              children: (0, e.jsx)("div", {
                style: { display: "contents" },
                children: (0, e.jsx)(B.q, { children: E }),
              }),
            })
          );
        }
        function o(x) {
          const { children: E } = x,
            p = (0, I.useContext)(ee);
          return (
            (0, L.wT)(
              !!p,
              "<Popover.Positioner> must be a child of <Popover.Root>.",
            ),
            (0, e.jsx)(M.s3, {
              context: p.floating.context,
              initialFocus: -1,
              returnFocus: !1,
              children: E,
            })
          );
        }
        function u(x) {
          const {
            open: E,
            interactions: p = {},
            width: h,
            maxHeight: A,
            gutter: T,
            scroll: G,
          } = x;
          let b = E;
          const U = (0, J.Pr)(x.presentation),
            Z = g(x, b, U),
            ae = { enabled: !!p.click },
            ie = typeof p.click == "function" ? p.click(ae) : ae,
            ue = (0, M.kp)(Z.context, ie),
            ve = { enabled: !!p.focus },
            ge = typeof p.focus == "function" ? p.focus(ve) : ve,
            pe = (0, M.iQ)(Z.context, ge),
            de = { handleClose: (0, M.iB)() },
            xe = typeof p.hover == "function" ? p.hover(de) : de,
            De = (0, M.Mk)(Z.context, { enabled: !!p.hover, ...xe }),
            le = (0, M.s9)(Z.context),
            { getFloatingProps: _e, getReferenceProps: Pe } = (0, M.bv)([
              ue,
              pe,
              De,
              le,
            ]);
          return {
            floating: Z,
            getFloatingProps: _e,
            getReferenceProps: Pe,
            open: b,
            presentation: U,
            sizing: { width: h, maxHeight: A, gutter: T, scroll: G },
          };
        }
        function g(x, E, p) {
          const { onOpenChange: h, placement: A } = x,
            T = p === "anchor";
          return (0, M.we)({
            open: E,
            onOpenChange: h,
            middleware: T ? D(x) : [],
            whileElementsMounted: T ? y.ll : void 0,
            placement: A && typeof A == "object" ? A.initial : A,
            strategy: "fixed",
            platform: {
              ...y.iD,
              getOffsetParent: (G) => G?.ownerDocument?.defaultView ?? window,
            },
          });
        }
        function D(x) {
          const { gutter: E = 0, placement: p } = x,
            h = [],
            A = p && typeof p == "object";
          return (
            A && p.offset
              ? h.push((0, _.cY)(p.offset))
              : (!A || p.offset === void 0) && h.push((0, _.cY)(2)),
            A && p.flip
              ? h.push((0, _.UU)(p.flip))
              : (!A || p.flip === void 0) && h.push((0, _.UU)()),
            A && p.shift
              ? h.push((0, _.BN)(p.shift))
              : (!A || p.shift === void 0) && h.push((0, _.BN)()),
            h.push(
              (0, _.Ej)({
                apply: (T) => {
                  const { rects: G, elements: b, availableHeight: U } = T,
                    Z = {
                      boxSizing: "border-box",
                      zIndex: "1",
                      "-webkit-app-region": "no-drag",
                    };
                  switch ((x.scroll && (Z.overflowY = "auto"), x.width)) {
                    case "target": {
                      Z.width = `${G.reference.width}px`;
                      break;
                    }
                    case "content": {
                      Z.width = `${G.floating.width}px`;
                      break;
                    }
                    case "dropdown": {
                      let ie = G.reference.width;
                      G.floating.width > ie &&
                        ie < 200 &&
                        (ie = G.floating.width),
                        (Z.width = `${ie}px`);
                    }
                  }
                  typeof x.width == "function" &&
                    (Z.width = x.width({
                      unContentWidth: G.floating.width,
                      unTargetWidth: G.reference.width,
                    }));
                  const ae =
                    typeof E == "number" ? `${E}px` : `var(--spacing-${E})`;
                  typeof x.maxHeight == "function"
                    ? (Z.maxHeight = x.maxHeight({
                        unAvailableHeight: U,
                        gutter: ae,
                      }))
                    : typeof x.maxHeight == "number"
                      ? (Z.maxHeight = `min( calc( ${U}px - ${ae} ), ${x.maxHeight}px )`)
                      : typeof E == "number"
                        ? (Z.maxHeight = `${U - E}px`)
                        : (Z.maxHeight = `calc( ${U}px - var(--spacing-${E}) )`),
                    Object.assign(b.floating.style, Z),
                    b.floating.style.setProperty(
                      "--popover-max-height",
                      Z.maxHeight,
                    );
                },
              }),
            ),
            h
          );
        }
        const K = { Root: v, Anchor: N, Positioner: z, FocusManager: te };
      },
      12204: (F, X, a) => {
        "use strict";
        a.d(X, { V: () => y });
        var e = a(7850),
          I = a(31857);
        const M = {
          up: "rotate( 180, 10, 10 )",
          left: "rotate( 90, 10, 10 )",
          right: "rotate( 270, 10, 10 )",
        };
        function y(_) {
          const { direction: k = "down" } = _,
            S = M[k];
          return (0, e.jsx)(I.I, {
            ..._,
            viewBox: 20,
            children: (0, e.jsx)("path", {
              transform: S,
              d: "M5.14541 6.89977L10.0063 12.2027L14.8671 6.89977C15.3557 6.36674 16.145 6.36674 16.6336 6.89977C17.1221 7.4328 17.1221 8.29385 16.6336 8.82688L10.8832 15.1002C10.3946 15.6333 9.60537 15.6333 9.11678 15.1002L3.36644 8.82688C2.87785 8.29385 2.87785 7.4328 3.36644 6.89977C3.85503 6.38041 4.65682 6.36674 5.14541 6.89977Z",
              fill: "currentColor",
            }),
          });
        }
      },
      59432: (F, X, a) => {
        "use strict";
        a.d(X, { Gw: () => _, Lk: () => k, ai: () => y, mm: () => M });
        var e = a(14947);
        const I = e.sH.box(void 0);
        function M() {
          return I.get();
        }
        function y(S) {
          (0, e.h5)(() => I.set(S));
        }
        function _() {
          const S = I.get();
          return S || Math.floor(Date.now() / 1e3);
        }
        function k() {
          const S = I.get();
          return S ? new Date(S * 1e3) : new Date();
        }
      },
      79083: (F, X, a) => {
        "use strict";
        a.d(X, { m: () => _, U: () => k });
        var e = a(7850),
          I = a(36118),
          M = ((S) => (
            (S.k_ECutArrowStyle = "single"),
            (S.k_EDoubleArrowStyle = "double"),
            (S.k_EThickChevron = "chevron"),
            (S.k_EFilledArrow = "filled"),
            (S.k_EPointyArrow = "pointy"),
            S
          ))(M || {}),
          y = ((S) => (
            (S.k_EPillCrumb = "pill"),
            (S.k_ECircularCrumb = "circle"),
            (S.k_ESquareCrumb = "square"),
            S
          ))(y || {});
        function _(S) {
          const { arrowFill: Y, arrowStyle: B, direction: L } = S;
          switch (B) {
            default:
            case M.k_ECutArrowStyle: {
              const d = L == "right" ? 0 : 180;
              return (0, e.jsx)(I.uMb, {
                fill: Y || "white",
                role: "presentation",
                angle: d,
              });
            }
            case M.k_EDoubleArrowStyle: {
              const d = L == "right" ? 180 : 0;
              return (0, e.jsx)(I.F2T, {
                fill: Y || "white",
                role: "presentation",
                angle: d,
              });
            }
            case M.k_EThickChevron: {
              const d = L == "right" ? 0 : 180;
              return (0, e.jsx)(I.l8x, {
                fill: Y || "white",
                role: "presentation",
                angle: d,
              });
            }
            case M.k_EFilledArrow: {
              const d = L == "right" ? 90 : 270;
              return (0, e.jsx)(I.V5W, {
                fill: Y || "white",
                role: "presentation",
                angle: d,
              });
            }
            case M.k_EPointyArrow:
              return (0, e.jsx)(I.L0X, {
                fill: Y || "white",
                role: "presentation",
                direction: L || "left",
              });
          }
        }
        function k(S) {
          const {
              bIsActive: Y,
              breadcrumbActiveColor: B,
              breadcrumbColor: L,
              breadcrumbStyle: d,
            } = S,
            w = Y ? B || "#FFFFFF" : L || "#606974";
          switch (d) {
            default:
            case y.k_EPillCrumb:
              return (0, e.jsx)(I.IGf, { fill: w, role: "presentation" });
            case y.k_ECircularCrumb:
              return (0, e.jsx)(I.az8, { fill: w, role: "presentation" });
            case y.k_ESquareCrumb:
              return (0, e.jsx)(I.koA, { fill: w, role: "presentation" });
          }
        }
      },
      93125: (F, X, a) => {
        "use strict";
        a.d(X, { A: () => E, D: () => x });
        var e = a(7850),
          I = a(90626),
          M = a(75844),
          y = a(18210),
          _ = a(99412),
          k = a(5858),
          S = a(36707),
          Y = a(56420),
          B = a.n(Y),
          L = Object.defineProperty,
          d = Object.getOwnPropertyDescriptor,
          w = (p, h, A, T) => {
            for (
              var G = T > 1 ? void 0 : T ? d(h, A) : h, b = p.length - 1, U;
              b >= 0;
              b--
            )
              (U = p[b]) && (G = (T ? U(h, A, G) : U(G)) || G);
            return T && G && L(h, A, G), G;
          };
        let $ = class extends I.Component {
          static get hoverClass() {
            return B().hoverParent;
          }
          render() {
            const {
              persona: p,
              animating: h,
              className: A,
              size: T,
              dim: G,
              ...b
            } = this.props;
            let U = "";
            return (
              T == "medium"
                ? (U = B().Medium)
                : T == "large" && (U = B().Large),
              (0, e.jsxs)("div", {
                className: (0, S.A)(
                  B().SnoozeContainer,
                  p.online_state,
                  A,
                  h && B().animating,
                  U,
                  G && B().Dim,
                ),
                ...b,
                children: [
                  (0, e.jsx)("div", {
                    "data-text": "Z",
                    className: (0, S.A)(B().SnoozeZ, B().Z1),
                    children: "Z",
                  }),
                  (0, e.jsx)("div", {
                    "data-text": "Z",
                    className: (0, S.A)(B().SnoozeZ, B().Z2),
                    children: "Z",
                  }),
                  (0, e.jsx)("div", {
                    "data-text": "Z",
                    className: (0, S.A)(B().SnoozeZ, B().Z3),
                    children: "Z",
                  }),
                ],
              })
            );
          }
        };
        $ = w([M.PA], $);
        var ne = a(88363),
          J = a(36118),
          ee = a(70342),
          v = a.n(ee),
          N = a(75975);
        const z = (0, M.PA)((p) => {
          const { persona: h, className: A, ...T } = p;
          if (!h || !h.is_online) return null;
          const G = h.HasStateFlag(ne.R$),
            b = h.HasStateFlag(ne.hs),
            U = h.m_eGamingDeviceType == _.LS$,
            Z = h.m_eGamingDeviceType == _.ppM,
            ae = !U && !Z && !b && h.HasStateFlag(ne.sr);
          return (0, e.jsxs)(I.Fragment, {
            children: [
              G &&
                (0, e.jsx)("div", {
                  className: (0, S.A)(
                    A,
                    v().PersonaStatusIcon,
                    v().MobilePhoneIcon,
                    (0, k.rO)(h),
                  ),
                  title: (0, y.we)("#Platform_Hint_Mobile"),
                  ...T,
                  children: (0, e.jsx)(N.rf, {}),
                }),
              b &&
                (0, e.jsx)("div", {
                  className: (0, S.A)(
                    A,
                    v().PersonaStatusIcon,
                    v().VRIcon,
                    (0, k.rO)(h),
                  ),
                  title: (0, y.we)("#Platform_Hint_VR"),
                  ...T,
                  children: (0, e.jsx)(J.MUh, {}),
                }),
              ae &&
                (0, e.jsx)("div", {
                  className: (0, S.A)(
                    A,
                    v().PersonaStatusIcon,
                    v().BigPictureIcon,
                    (0, k.rO)(h),
                  ),
                  title: (0, y.we)("#Platform_Hint_BigPicture"),
                  ...T,
                  children: (0, e.jsx)(J.bPr, {}),
                }),
              U &&
                (0, e.jsx)("div", {
                  className: (0, S.A)(
                    A,
                    v().PersonaStatusIcon,
                    v().SteamDeckIcon,
                    (0, k.rO)(h),
                  ),
                  title: (0, y.we)("#Platform_Hint_SteamDeck"),
                  ...T,
                  children: (0, e.jsx)(J.DQe, {}),
                }),
              Z &&
                (0, e.jsx)("div", {
                  className: (0, S.A)(
                    A,
                    v().PersonaStatusIcon,
                    v().SteamDeckIcon,
                    (0, k.rO)(h),
                  ),
                  title: (0, y.we)("#Platform_Hint_LegionGoS"),
                  ...T,
                  children: (0, e.jsx)(J.DQe, {}),
                }),
            ],
          });
        });
        var te = a(18828),
          P = a.n(te),
          o = a(3166),
          u = Object.defineProperty,
          g = Object.getOwnPropertyDescriptor,
          D = (p, h, A, T) => {
            for (
              var G = T > 1 ? void 0 : T ? g(h, A) : h, b = p.length - 1, U;
              b >= 0;
              b--
            )
              (U = p[b]) && (G = (T ? U(h, A, G) : U(G)) || G);
            return T && G && u(h, A, G), G;
          };
        function K(p) {
          return (0, e.jsxs)(I.Fragment, {
            children: [
              (0, e.jsx)("span", {
                className: P().partyBeaconJoin,
                children: (0, y.we)("#User_WantsToPlay"),
              }),
              "\xA0\u2013\xA0",
              p.persona.GetCurrentGameName(),
            ],
          });
        }
        let x = class extends I.Component {
          render() {
            const {
              className: p,
              onContextMenu: h,
              persona: A,
              eFriendRelationship: T,
              bIsSelf: G,
              bParenthesizeNicknames: b,
              strNickname: U,
              bCompactView: Z,
              bHideGameName: ae,
              bHideEnhancedRichPresenceLabel: ie,
              bHideSnooze: ue,
              bHideStatus: ve,
              renderStatus: ge,
              renderRichPresence: pe,
              bHidePersona: de,
              bDNDSet: xe,
              bHasPartyBeacon: De,
              bHasGamePrivacy: le,
              bNoMask: _e,
              bEllipsisName: Pe,
              bDropPadding: Ae,
              ...Ie
            } = this.props;
            let Ee = null,
              he = null,
              Ge = null,
              Me = [
                p,
                P().personaNameAndStatusLabel,
                (0, k.rO)(A),
                Z ? P().compactView : void 0,
                _e ? P().NoMask : void 0,
              ];
            De || A.has_public_party_beacon
              ? (he = (0, e.jsx)(K, { persona: A }))
              : (0, _.aPS)(T)
                ? ((he = (0, y.we)("#PersonaStateBlocked")),
                  Me.push(P().blocked))
                : A.is_ingame
                  ? (!A.is_in_nonsteam_game || G || (0, _.S$u)(T)
                      ? (he = A.GetCurrentGameName())
                      : (he = (0, y.we)("#PersonaStateInNonSteamGame")),
                    !G && !de
                      ? (Ge = A.GetCurrentGameRichPresence())
                      : G &&
                        A.is_awayOrSnooze &&
                        (Ge = (0, y.we)("#PersonaStateAway")))
                  : A.m_broadcastAccountId &&
                    (he = (0, y.we)("#PersonaStateWatchingBroadcast")),
              he || (he = A.GetLocalizedOnlineStatus()),
              ge && (he = ge());
            let Re = !de && !ue;
            ue === !1 && (Re = !0),
              A.is_awayOrSnooze && Re && (Ee = (0, e.jsx)($, { persona: A }));
            let Ne = (0, e.jsx)(e.Fragment, {});
            h
              ? (Ne = (0, e.jsx)("div", {
                  className: "ContextMenuButton",
                  onClick: h,
                  children: (0, e.jsx)(J.GB9, {}),
                }))
              : Me.push(P().noContextMenu),
              de && Me.push(P().hidePersona),
              pe && (Ge = pe()),
              (ae || !Ge) && Me.push(P().twoLine);
            const ye = !A.is_ingame && !ve,
              Be = !ie && Ge,
              We = he && (!ae || !Be),
              ze = (0, _.IDH)(o.TS.LAUNCHER_TYPE);
            let je = U && !b,
              et = je ? U : A.m_strPlayerName,
              Oe = !de && (We || ye) && Be;
            return (0, e.jsxs)("div", {
              ...Ie,
              className: (0, S.A)(...Me),
              onContextMenu: h,
              children: [
                (0, e.jsxs)("div", {
                  className: (0, S.A)(
                    P().statusAndName,
                    Oe ? P().threeLines : void 0,
                  ),
                  children: [
                    (0, e.jsxs)("div", {
                      className: (0, S.A)(
                        P().playerName,
                        Pe ? P().EllipsisName : void 0,
                      ),
                      children: [
                        et || "\xA0",
                        b &&
                          U &&
                          (0, e.jsxs)("span", {
                            className: P().playerNickname,
                            children: ["(", U, ")"],
                          }),
                      ],
                    }),
                    xe &&
                      (0, e.jsx)("div", {
                        className: P().DNDContainer,
                        title: (0, y.we)("#User_ToggleDoNotDisturb"),
                        children: (0, e.jsx)(J.Aj0, {}),
                      }),
                    je &&
                      (0, e.jsx)("span", {
                        className: P().playerNicknameBracket,
                        title: (0, y.we)("#isNickname"),
                        children: " *",
                      }),
                    (0, e.jsx)(z, { persona: A }),
                    Ee,
                    (A.m_bPlayerNamePending || A.m_bAvatarPending) &&
                      ze &&
                      (0, e.jsx)("div", {
                        className: P().PendingPersona,
                        title: (0, y.we)("#SteamChina_PendingPersonaName"),
                        children: (0, e.jsx)(J.zD7, {}),
                      }),
                    Ne,
                  ],
                }),
                !de &&
                  (0, e.jsxs)("div", {
                    className: P().richPresenceContainer,
                    children: [
                      (We || ye) &&
                        (0, e.jsxs)("div", {
                          className: (0, S.A)(
                            P().gameName,
                            Oe ? P().threeLines : void 0,
                            P().richPresenceLabel,
                            Ae && P().dropPadding,
                            "no-drag",
                          ),
                          children: [
                            le &&
                              (0, e.jsx)("div", {
                                className: P().gameIsPrivateIcon,
                                title: (0, y.we)("#User_GameInfoHidden"),
                                children: (0, e.jsx)(J.jZl, {}),
                              }),
                            he,
                          ],
                        }),
                      Be &&
                        (0, e.jsxs)("div", {
                          className: (0, S.A)(
                            P().richPresenceLabel,
                            Ae && P().dropPadding,
                            "no-drag",
                          ),
                          children: [Ge, " "],
                        }),
                    ],
                  }),
              ],
            });
          }
        };
        x = D([M.PA], x);
        const E = (0, M.PA)((p) => {
          const {
            persona: h,
            bParenthesizeNicknames: A,
            strNickname: T,
            bIgnorePersonaStatus: G,
            bDisableColoring: b,
            className: U,
            ...Z
          } = p;
          let ie = T && !A ? T : h.m_strPlayerName;
          return (0, e.jsx)("span", {
            ...Z,
            className: (0, S.A)(
              U,
              b && P().DisableColoring,
              !G && (0, k.rO)(h),
            ),
            children: (0, e.jsxs)("span", {
              className: P().playerName,
              children: [
                ie || "\xA0",
                A &&
                  T &&
                  (0, e.jsxs)("span", {
                    className: P().playerNickname,
                    children: ["(", T, ")"],
                  }),
              ],
            }),
          });
        });
      },
      46943: (F, X, a) => {
        "use strict";
        a.d(X, { Ul: () => N, xz: () => o, $Y: () => P, i8: () => te });
        var e = a(7850),
          I = a(90626),
          M = a(75844),
          y = a(5858),
          _ = a(36707),
          k = a(3166),
          S = a(13465);
        const Y =
            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gOTAK/9sAQwADAgIDAgIDAwMDBAMDBAUIBQUEBAUKBwcGCAwKDAwLCgsLDQ4SEA0OEQ4LCxAWEBETFBUVFQwPFxgWFBgSFBUU/9sAQwEDBAQFBAUJBQUJFA0LDRQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQU/8AAEQgAIAAgAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A/P4mW5nmllmeSR3LMzMSSc1a07R73V72KzsILi9u5TiOC2RpJHPoFGSarQ/ef6n+de4fAn9oaL4D+DfGX9i6Uf8AhO9XSKDT9eZY3WxiDZcBGByTkn0JCZBxQB41qeiX+iXslnqNtdWF3H9+3uo2jkX6q2CKpgy208MsUzxyI4ZWViCDmvsr9rrUdT1j9nb4T6h8RBbH4qXUs0zMsSxXJ04hivnKoAU5MPGBg7uM7q+NpvvJ9R/OgAh+8/1P867T4POI/iz4Mc6U+u7NZtG/suPbuu8TKfKG4hct93njnmuKIltp5opYXjkRyrKykEHNWbDVbvSr63vbKaezvLeRZYbi3ZkkidTlWVhyCCMgjpQB6l+1F411nx58dPFWpa5a3mnXaXP2ZNOvXVpLKNBhYflJUY5PB5JJ6k15LN95PqP51a1PWr7WtQnvtRuLm/vrhzJNc3TtJLIx6lmbJJ9zVQCW5nhiiheSR3CqqqSSc0Af/9k=",
          B =
            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gODAK/9sAQwAGBAUGBQQGBgUGBwcGCAoQCgoJCQoUDg8MEBcUGBgXFBYWGh0lHxobIxwWFiAsICMmJykqKRkfLTAtKDAlKCko/9sAQwEHBwcKCAoTCgoTKBoWGigoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgo/8AAEQgAQABAAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A8Inmk8+T94/3j/EfWmedJ/z0f/vo0T/6+T/eP86ZQA/zpP8Ano//AH0aPOk/56P/AN9GmVo6Loeq65M0Wj6ddXrr94QRF9v1I6fjQBR86T/no/8A30aPOk/56P8A99GtHW/Dus6GV/tjS7yyD8K00RVW+h6GsugB/nSf89H/AO+jT4JpPPj/AHj/AHh/EfWoafB/r4/94fzoAJ/9fJ/vH+dMp8/+vk/3j/OmUAXdE099W1mw06Jgsl3PHApPYswUH9a+qPF3iHSPhF4S0+003TxK0hMcEAbZvIA3SO2OvIz6k18nW88ttcRz28jxTRMHSRGKsrA5BBHQg1b1TWdT1fy/7V1G8vfLzs+0TNJtz1xknHQUAfUXw+8c6Z8UdN1HS9V0xIpUTM1s7eYkiE43KcAgg/lxg180+NtEHhzxZqmkqxdLWcojHqUPK598EV9CfBbwpF4G8J3fiLxA4trm5hEsnmceRCOQD/tHqR9B1r568a63/wAJH4r1TVghRLqYuinqE6KD74AoAxafB/r4/wDeH86ZT4P9fH/vD+dABP8A6+T/AHj/ADplPn/18n+8f50ygArt/gtpltq/xK0e2vYxJArPMUYZDFEZhn2yBXEV0/w203VNX8YWdloOoHTtQkWQx3IZl2gISeV55AI/GgD1H9pvxPdi/s/DcDGOz8pbqfHWRizBQfYbc/U+1eD12PxW0fWtE8Tpa+I9UOqXpt0cTl2bCEthctz1B/OuOoAKfB/r4/8AeH86ZT4P9fH/ALw/nQAT/wCvk/3j/OmVNPDJ58n7t/vH+E+tM8mT/nm//fJoAZV7Q9Xv9C1KLUNJuGtryMEJIoBIyCD1BHQmqnkyf883/wC+TR5Mn/PN/wDvk0AaHiHXtT8RX4vdau2u7oIIxIygHaCSBwB6msyn+TJ/zzf/AL5NHkyf883/AO+TQAynwf6+P/eH86PJk/55v/3yafBDJ58f7t/vD+E+tAH/2Q==",
          L =
            a.p +
            "images/applications/store/avatar_default_full.jpg?v=valveisgoodatcaching";
        var d = a(43047),
          w = a.n(d),
          $ = a(71742),
          ne = Object.defineProperty,
          J = Object.getOwnPropertyDescriptor,
          ee = (u, g, D, K) => {
            for (
              var x = K > 1 ? void 0 : K ? J(g, D) : g, E = u.length - 1, p;
              E >= 0;
              E--
            )
              (p = u[E]) && (x = (K ? p(g, D, x) : p(x)) || x);
            return K && x && ne(g, D, x), x;
          };
        function v(u) {
          switch (u) {
            case "X-Small":
            case "Small":
              return Y;
            case "Medium":
            case "MediumLarge":
              return B;
            case "Large":
            case "X-Large":
            case "FillArea":
              return L;
            default:
              return (0, $.z_)(u, `Unhandled size ${u}`), B;
          }
        }
        const N = I.memo(function (g) {
            const {
                strAvatarURL: D,
                size: K = "Medium",
                className: x,
                statusStyle: E,
                statusPosition: p,
                children: h,
                ...A
              } = g,
              T = I.useMemo(() => {
                const G = [];
                return D && G.push(D), G.push(v(K)), G;
              }, [D, K]);
            return (0, e.jsxs)("div", {
              className: (0, _.A)(
                w().avatarHolder,
                "avatarHolder",
                "no-drag",
                K,
                x,
              ),
              ...A,
              children: [
                (0, e.jsx)("div", {
                  className: (0, _.A)(w().avatarStatus, "avatarStatus", p),
                  style: E,
                }),
                (0, e.jsx)(S.c, {
                  className: (0, _.A)(w().avatar, "avatar"),
                  rgSources: T,
                  draggable: !1,
                }),
                h,
              ],
            });
          }),
          z = I.memo(function (g) {
            const {
              strAvatarURL: D,
              size: K = "Medium",
              className: x,
              statusStyle: E,
              statusPosition: p,
              children: h,
              ...A
            } = g;
            return (0, e.jsxs)("div", {
              className: (0, _.A)(
                w().avatarHolder,
                "avatarHolder",
                "no-drag",
                K,
                x,
              ),
              ...A,
              children: [
                (0, e.jsx)("div", {
                  className: (0, _.A)(w().avatarStatus, "avatarStatus", p),
                  style: E,
                }),
                (0, e.jsx)("img", {
                  className: (0, _.A)(w().avatar, "avatar"),
                  src: D,
                  draggable: !1,
                }),
                h,
              ],
            });
          });
        let te = class extends I.Component {
          render() {
            const {
              persona: u,
              size: g = "Medium",
              animatedAvatar: D,
              className: K,
              strBackupAvatarURL: x,
              ...E
            } = this.props;
            let p = "";
            return (
              D && D.image_small && D.image_small.length != 0
                ? (p = k.TS.MEDIA_CDN_COMMUNITY_URL + "images/" + D.image_small)
                : u
                  ? ((p = u.avatar_url_medium),
                    g == "Small" || g == "X-Small"
                      ? (p = u.avatar_url)
                      : (g == "Large" || g == "X-Large" || g == "FillArea") &&
                        (p = u.avatar_url_full))
                  : x && (p = x),
              (0, e.jsx)(N, {
                strAvatarURL: p,
                size: g,
                className: (0, _.A)((0, y.rO)(u), K),
                ...E,
              })
            );
          }
        };
        te = ee([M.PA], te);
        const P = (0, M.PA)((u) => {
          const {
            profileItem: g,
            className: D,
            bDisableAnimation: K,
            ...x
          } = u;
          if (!g || !g.image_small || g.image_small.length == 0) return null;
          let E = K ? g.image_large : g.image_small;
          return (
            E || (E = g.image_small),
            E.startsWith("https://") ||
              (E = k.TS.MEDIA_CDN_COMMUNITY_URL + "images/" + E),
            (0, e.jsx)("div", {
              className: (0, _.A)(w().avatarFrame, D, "avatarFrame"),
              ...x,
              children: (0, e.jsx)("img", {
                className: w().avatarFrameImg,
                src: E,
              }),
            })
          );
        });
        let o = class extends I.Component {
          m_timer;
          constructor(u) {
            super(u),
              (this.state = { bAnimate: this.props.loopDuration != "None" }),
              (this.m_timer = 0);
          }
          componentDidMount() {
            this.props.bParentHovered || this.SetupAnimationTimer();
          }
          SetupAnimationTimer() {
            let u = 0;
            switch (this.props.loopDuration) {
              case "Short":
                u = 2500;
                break;
              case "Medium":
                u = 5e3;
                break;
              case "Long":
                u = 1e4;
                break;
            }
            u != 0 &&
              (this.setState({ bAnimate: this.props.loopDuration != "None" }),
              (this.m_timer = window.setTimeout(
                () => this.setState({ bAnimate: !1 }),
                u,
              )));
          }
          StopAnimationTimer() {
            this.m_timer &&
              (window.clearTimeout(this.m_timer), (this.m_timer = 0));
          }
          onHover() {
            this.SetupAnimationTimer();
          }
          componentWillUnmount() {
            this.StopAnimationTimer();
          }
          componentDidUpdate(u) {
            this.props.loopDuration != u.loopDuration &&
              (this.props.loopDuration == "None"
                ? (this.setState({ bAnimate: !1 }), this.StopAnimationTimer())
                : this.props.loopDuration == "Infinite"
                  ? (this.setState({ bAnimate: !0 }), this.StopAnimationTimer())
                  : (this.setState({ bAnimate: !0 }),
                    this.SetupAnimationTimer())),
              this.props.bParentHovered != u.bParentHovered &&
                (this.props.bParentHovered &&
                this.props.loopDuration != "None" &&
                this.props.loopDuration != "Infinite"
                  ? (this.setState({ bAnimate: !0 }), this.StopAnimationTimer())
                  : this.state.bAnimate && this.SetupAnimationTimer());
          }
          render() {
            let {
              loopDuration: u,
              animatedAvatar: g,
              avatarFrame: D,
              children: K,
              style: x,
              bLimitProfileFrameAnimationTime: E,
              bParentHovered: p,
              ...h
            } = this.props;
            h.onClick && (x = { ...x, cursor: "pointer" });
            const A = this.state.bAnimate ? (g ?? void 0) : void 0;
            return (0, e.jsx)("div", {
              onMouseEnter: () =>
                this.setState({ bAnimate: this.props.loopDuration != "None" }),
              onMouseLeave: () => this.SetupAnimationTimer(),
              children: (0, e.jsxs)(te, {
                animatedAvatar: A,
                ...h,
                children: [
                  K,
                  (0, e.jsx)(P, {
                    profileItem: D ?? null,
                    bDisableAnimation: E && !this.state.bAnimate,
                  }),
                ],
              }),
            });
          }
        };
        o = ee([M.PA], o);
      },
      35098: (F, X, a) => {
        "use strict";
        a.d(X, { DW: () => w, js: () => L, mK: () => v, tb: () => ee });
        var e = a(90626),
          I = a(80902),
          M = a(54806),
          y = a(99412),
          _ = a(68312),
          k = a(15369),
          S = a(5858),
          Y = a(76559),
          B = a(15860);
        function L(P) {
          const o = (0, _.KV)(),
            u = e.useContext(J);
          return (0, I.I)(v(u, o, P));
        }
        function d(P) {
          const o = React.useRef(void 0),
            u = L(P);
          return u.data
            ? u
            : (o.current ||
                (o.current = new CPersonaStateImpl(
                  typeof P == "string"
                    ? new CSteamID(P)
                    : CSteamID.InitFromAccountID(P),
                )),
              { ...u, data: o.current });
        }
        function w(P) {
          const o = (0, _.KV)(),
            u = e.useContext(J);
          return (0, M.E)({ queries: P.map((g) => v(u, o, g)) });
        }
        function $(P) {
          return ReactQueryClient.getQueryData(["PlayerSummary", P]);
        }
        function ne(P) {
          const { loadPersonaState: o, children: u } = P,
            g = React.useMemo(() => ({ loadPersonaState: o }), [o]);
          return React.createElement(J.Provider, { value: g }, u);
        }
        const J = e.createContext({
          loadPersonaState: async (P, o) => {
            if (P == null) return null;
            const u = await z(o).load(
              Y.b.InitFromAccountID(P).ConvertTo64BitString(),
            );
            return te(Y.b.InitFromAccountID(P), u);
          },
        });
        function ee() {
          return e.useContext(J);
        }
        function v(P, o, u) {
          const g = typeof u == "string" ? new Y.b(u).GetAccountID() : u;
          return {
            queryKey: ["PlayerSummary", g],
            queryFn: () => P.loadPersonaState(g, o),
            enabled: !!g,
          };
        }
        let N;
        function z(P) {
          return (N ??= (0, B.c)(P));
        }
        function te(P, o) {
          let u = new S.Z(P);
          const g = o?.public_data,
            D = o?.private_data;
          return (
            (u.m_bInitialized = !!o),
            (u.m_ePersonaState = D?.persona_state ?? y.cU3),
            (u.m_strAvatarHash = g?.sha_digest_avatar
              ? (0, k.Kx)(g.sha_digest_avatar)
              : S.dV),
            (u.m_strPlayerName = g?.persona_name ?? P.ConvertTo64BitString()),
            (u.m_strAccountName = D?.account_name),
            D?.persona_state_flags &&
              (u.m_unPersonaStateFlags = D?.persona_state_flags),
            D?.game_id && (u.m_gameid = D?.game_id),
            D?.game_server_ip_address &&
              (u.m_unGameServerIP = D?.game_server_ip_address),
            D?.lobby_steam_id && (u.m_game_lobby_id = D?.lobby_steam_id),
            D?.game_extra_info && (u.m_strGameExtraInfo = D?.game_extra_info),
            g?.profile_url && (u.m_strProfileURL = g.profile_url),
            u
          );
        }
      },
      84676: (F, X, a) => {
        "use strict";
        a.d(X, {
          G6: () => w,
          Gg: () => J,
          Ow: () => ne,
          Sq: () => B,
          YM: () => P,
          eR: () => L,
          ik: () => d,
          mZ: () => ee,
          t7: () => $,
          zX: () => N,
        });
        var e = a(41735),
          I = a.n(e),
          M = a(90626),
          y = a(72604),
          _ = a(48156),
          k = a(30096),
          S = a(10142);
        function Y(o, u, g = !0) {
          const D = g
              ? CStoreItemCache.k_DataRequest_BasicInfo
              : CStoreItemCache.k_DataRequest_CommonOnly,
            K = g || CStoreItemCache.Get().BHasStoreItem(o, u, D) ? o : null,
            [x, E] = w(K, u, D),
            [p, h] = useState(null),
            [A, T] = w(p, u, D);
          useEffect(() => {
            x?.GetAppType() === EStoreAppType.k_EStoreAppType_Demo &&
              h(x.GetParentAppID());
          }, [x]);
          let G = x?.GetShortDescription()
            ? StripBBCodeTags(x.GetShortDescription())
            : "";
          (!G || G.length === 0) &&
            A &&
            (G = A?.GetShortDescription()
              ? StripBBCodeTags(A.GetShortDescription())
              : "");
          const b = E == d && (!p || T == d);
          return [G, b];
        }
        const B = 1,
          L = 2,
          d = 3;
        function w(o, u, g, D) {
          const K = (0, M.useRef)(void 0),
            x = (0, M.useRef)(void 0),
            E = (0, k.CH)();
          K.current = o;
          const [p, h] = (0, M.useState)(void 0),
            {
              include_assets: A,
              include_release: T,
              include_platforms: G,
              include_all_purchase_options: b,
              include_screenshots: U,
              include_trailers: Z,
              include_ratings: ae,
              include_tag_count: ie,
              include_reviews: ue,
              include_basic_info: ve,
              include_supported_languages: ge,
              include_full_description: pe,
              include_included_items: de,
              include_assets_without_overrides: xe,
              apply_user_filters: De,
              include_links: le,
              include_extra_details: _e,
              include_optin_registration_tags: Pe,
            } = g;
          if (
            ((0, M.useEffect)(() => {
              const Ie = {
                include_assets: A,
                include_release: T,
                include_platforms: G,
                include_all_purchase_options: b,
                include_screenshots: U,
                include_trailers: Z,
                include_ratings: ae,
                include_tag_count: ie,
                include_reviews: ue,
                include_basic_info: ve,
                include_supported_languages: ge,
                include_full_description: pe,
                include_included_items: de,
                include_assets_without_overrides: xe,
                apply_user_filters: De,
                include_links: le,
                include_extra_details: _e,
                include_optin_registration_tags: Pe,
              };
              let Ee = null;
              return (
                !o ||
                  o < 0 ||
                  S.A.Get().BHasStoreItem(o, u, Ie) ||
                  (p !== void 0 && D && D == x.current) ||
                  (D !== x.current && (h(void 0), (x.current = D)),
                  (Ee = I().CancelToken.source()),
                  S.A.Get()
                    .QueueStoreItemRequest(o, u, Ie)
                    .then((he) => {
                      !Ee?.token.reason && K.current === o && h(he == y.R), E();
                    })),
                () => Ee?.cancel("useStoreItemCache: unmounting")
              );
            }, [
              o,
              u,
              D,
              p,
              A,
              T,
              G,
              b,
              U,
              Z,
              ae,
              ie,
              ue,
              ve,
              ge,
              pe,
              de,
              xe,
              De,
              le,
              _e,
              Pe,
              E,
            ]),
            !o)
          )
            return [null, L];
          if (p === !1) return [void 0, L];
          if (S.A.Get().BIsStoreItemMissing(o, u)) return [void 0, L];
          if (!S.A.Get().BHasStoreItem(o, u, g)) return [void 0, B];
          const Ae = S.A.Get().GetStoreItemWithLegacyVisibilityCheck(o, u);
          return Ae ? [Ae, d] : [null, L];
        }
        function $(o, u, g) {
          return w(o, _.c6.qI, u, g);
        }
        function ne(o, u, g) {
          return w(o, _.c6.xO, u, g);
        }
        function J(o, u, g) {
          return w(o, _.c6.RD, u, g);
        }
        function ee(o, u, g) {
          const [D, K] = w(o, u, g);
          let x;
          D?.GetStoreItemType() == _.c6.RD &&
            !D.GetAssets()?.GetHeaderURL() &&
            D?.GetIncludedAppIDs().length == 1 &&
            (x = D.GetIncludedAppIDs()[0]);
          const [E, p] = $(x, g);
          return x && E?.BIsVisible() ? [E, p] : [D, K];
        }
        function v(o, u, g, D) {
          const K = (0, k.CH)(),
            {
              include_assets: x,
              include_release: E,
              include_platforms: p,
              include_all_purchase_options: h,
              include_screenshots: A,
              include_trailers: T,
              include_ratings: G,
              include_tag_count: b,
              include_reviews: U,
              include_basic_info: Z,
              include_supported_languages: ae,
              include_full_description: ie,
              include_included_items: ue,
              include_assets_without_overrides: ve,
              apply_user_filters: ge,
              include_links: pe,
              include_extra_details: de,
              include_optin_registration_tags: xe,
            } = g;
          return (
            (0, M.useEffect)(() => {
              if (!o || o.length == 0) return;
              const le = {
                  include_assets: x,
                  include_release: E,
                  include_platforms: p,
                  include_all_purchase_options: h,
                  include_screenshots: A,
                  include_trailers: T,
                  include_ratings: G,
                  include_tag_count: b,
                  include_reviews: U,
                  include_basic_info: Z,
                  include_supported_languages: ae,
                  include_full_description: ie,
                  include_included_items: ue,
                  include_assets_without_overrides: ve,
                  apply_user_filters: ge,
                  include_links: pe,
                  include_extra_details: de,
                  include_optin_registration_tags: xe,
                },
                _e = o.filter(
                  (Ie) =>
                    !(
                      S.A.Get().BHasStoreItem(Ie, u, le) ||
                      S.A.Get().BIsStoreItemMissing(Ie, u)
                    ),
                );
              if (_e.length == 0) return;
              const Pe = I().CancelToken.source(),
                Ae = _e.map((Ie) => S.A.Get().QueueStoreItemRequest(Ie, u, le));
              return (
                Promise.all(Ae).then(() => {
                  Pe.token.reason || K();
                }),
                () => Pe.cancel("useStoreItemCacheMultiplePackages: unmounting")
              );
            }, [
              o,
              u,
              D,
              K,
              x,
              E,
              p,
              h,
              A,
              T,
              G,
              b,
              U,
              Z,
              ae,
              ie,
              ue,
              ve,
              ge,
              pe,
              de,
              xe,
            ]),
            o
              ? o.every(
                  (le) =>
                    S.A.Get().BHasStoreItem(le, u, g) ||
                    S.A.Get().BIsStoreItemMissing(le, u),
                )
                ? o.every((le) =>
                    S.A.Get().GetStoreItemWithLegacyVisibilityCheck(le, u),
                  )
                  ? d
                  : L
                : B
              : L
          );
        }
        function N(o, u, g) {
          return v(o, _.c6.qI, u, g);
        }
        function z(o, u, g) {
          return v(o, EStoreItemType.k_EStoreItemType_Bundle, u, g);
        }
        function te(o, u, g) {
          return v(o, EStoreItemType.k_EStoreItemType_Package, u, g);
        }
        function P() {
          M.useEffect(
            () => (
              S.A.Get().SetReturnUnavailableItems(!0),
              () => S.A.Get().SetReturnUnavailableItems(!1)
            ),
            [],
          );
        }
      },
      86390: (F, X, a) => {
        "use strict";
        a.d(X, { Cg: () => $, pZ: () => J, vg: () => ne });
        var e = a(7850),
          I = a(90626),
          M = a(88003),
          y = a(18210),
          _ = a(3166),
          k = a(87242),
          S = a(74974),
          Y = a(6740),
          B = a(62179),
          L = a(3685),
          d = a(96538);
        function w(v) {
          return (0, e.jsx)(M.x_, {
            onEscKeypress: v.closeModal,
            bDisableBackgroundDismiss: !0,
            children: (0, e.jsx)(ee, {
              redirectURL: v.redirectURL,
              guestOption: v.guestOption,
            }),
          });
        }
        function $(v) {
          const { redirectURL: N = window.location.href } = v;
          return (0, e.jsx)(d.EN, {
            active: !0,
            children: (0, e.jsx)(w, { redirectURL: N }),
          });
        }
        function ne() {
          (0, M.pg)(
            (0, e.jsx)(w, {
              ownerWin: window,
              redirectURL: window.location.href,
            }),
            window,
            { strTitle: (0, y.we)("#Login_SignInTitle") },
          );
        }
        function J(v, N) {
          (0, M.pg)(
            (0, e.jsx)(w, { ownerWin: window, redirectURL: v, guestOption: N }),
            window,
            { strTitle: (0, y.we)("#Login_SignInTitle") },
          );
        }
        function ee(v) {
          const { redirectURL: N, guestOption: z } = v,
            [te] = (0, I.useState)(
              new B.x(
                new L.D(_.TS.WEBAPI_BASE_URL),
              ).GetAnonymousServiceTransport(),
            ),
            [P, o] = (0, I.useState)(!1),
            u = (g) => {
              g == k.wI.k_PrimaryDomainFail ? o(!0) : window.location.assign(N);
            };
          return (0, e.jsx)("div", {
            children: P
              ? (0, e.jsx)(S.Fn, {})
              : (0, e.jsx)(S.YN, {
                  autoFocus: !0,
                  transport: te,
                  platform: Y.SS.tS,
                  onComplete: u,
                  redirectUrl: N,
                  theme: "modal",
                  children: z && (0, e.jsx)(S.Mk, { redirectURL: N }),
                }),
          });
        }
      },
      75975: (F, X, a) => {
        "use strict";
        a.d(X, { Jl: () => B, nl: () => p, rf: () => E });
        var e = a(7850),
          I = a(36118),
          M = a(56718),
          y = a(3166);
        function _() {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Settings, {})
            : jsx(SVG.Settings, {});
        }
        function k(h) {
          const A = h.filled ?? !0;
          return useInGamepadUI()
            ? A
              ? jsx(GamepadSVG.Star, {})
              : jsx(GamepadSVG.EmptyStar, {})
            : jsx(SVG.Star, {});
        }
        function S(h) {
          const A = h.filled ?? !0;
          return useInGamepadUI()
            ? A
              ? jsx(GamepadSVG.Heart, {})
              : jsx(GamepadSVG.HeartEmpty, {})
            : jsx(SVG.Heart, {});
        }
        function Y() {
          return useInGamepadUI()
            ? jsx(GamepadSVG.ControllerStatus, {})
            : jsx(SVG.BigPicture, {});
        }
        function B(h) {
          return (0, y.Qn)()
            ? (0, e.jsx)(M.MGO, { ...h })
            : (0, e.jsx)(I.Jlk, { ...h });
        }
        function L() {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Carat, { direction: "down" })
            : jsx(SVG.FlatArrow, { angle: 180 });
        }
        function d() {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Information, {})
            : jsx(SVG.Information, {});
        }
        function w(h) {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Lock, {})
            : jsx(SVG.Lock, {});
        }
        function $() {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Download, {})
            : jsx(SVG.Download, {});
        }
        function ne() {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Play, {})
            : jsx(SVG.Play, {});
        }
        function J(h) {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Achievement, {})
            : jsx(SVG.AwardIcon, {});
        }
        function ee(h) {
          return useInGamepadUI()
            ? jsx(GamepadSVG.ThumbsUp, {})
            : jsx(SVG.ThumbsUpUserNews, { className: h.className });
        }
        function v(h) {
          return useInGamepadUI()
            ? jsx(GamepadSVG.ThumbsDown, {})
            : jsx(SVG.ThumbsUpUserNews, { className: h.className });
        }
        function N(h) {
          return useInGamepadUI()
            ? jsx(GamepadSVG.CommentThread, { className: h.className })
            : jsx(SVG.CommentThread, { className: h.className });
        }
        function z() {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Pause, {})
            : jsx(SVG.Pause, {});
        }
        function te() {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Reload, {})
            : jsx(SVG.Reload, {});
        }
        function P() {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Update, {})
            : jsx(SVG.Update, {});
        }
        function o() {
          return jsx(GamepadSVG.Globe, {});
        }
        function u() {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Close, {})
            : jsx(SVG.X_Line, {});
        }
        function g() {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Trash, {})
            : jsx(SVG.Trash, {});
        }
        function D() {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Dynamic, {})
            : jsx(SVG.DynamicCollection, {});
        }
        function K() {
          return jsx(GamepadSVG.Add, {});
        }
        function x() {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Edit, {})
            : jsx(SVG.Edit, {});
        }
        function E() {
          return (0, e.jsx)(I.rfv, {});
        }
        function p() {
          return (0, y.Qn)() ? (0, e.jsx)(M.nl, {}) : (0, e.jsx)(I.jZW, {});
        }
      },
      13465: (F, X, a) => {
        "use strict";
        a.d(X, { c: () => M });
        var e = a(7850),
          I = a(90626);
        function M(y) {
          const {
              rgSources: _,
              onIncrementalError: k,
              onError: S,
              strAltText: Y,
              ref: B,
              ...L
            } = y,
            [d, w] = I.useState(0),
            $ = I.useMemo(() => JSON.stringify(_), [_]),
            [ne, J] = I.useState($);
          ne != $ && (J($), w(0));
          const ee = I.useMemo(() => {
              let z = "";
              return (
                _ && _.length > d && (z = _[d]),
                z ||
                  (console.warn(
                    "MultiSourceImage created with no image src",
                    y,
                    d,
                  ),
                  (z =
                    "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=")),
                z
              );
            }, [_, d, y]),
            v = I.useCallback(
              (z) => {
                k?.(z, _[d], d);
                const te = d + 1;
                te >= _.length && S && S(z), te < _.length && w(te);
              },
              [d, S, k, _],
            ),
            N = I.useRef(null);
          return (
            I.useImperativeHandle(
              B,
              () => ({ imgRef: N, nSourceIndex: d, nSourceLength: _.length }),
              [N, d, _],
            ),
            I.useEffect(() => {
              const z = N.current;
              z?.complete && z.naturalWidth == 0 && (z.src = z.src);
            }, []),
            (0, e.jsx)("img", { ref: N, ...L, src: ee, onError: v, alt: Y }, ne)
          );
        }
      },
      23366: (F, X, a) => {
        "use strict";
        a.d(X, {
          F$: () => ee,
          Mn: () => ne,
          S0: () => J,
          Vh: () => L,
          zJ: () => w,
        });
        var e = a(48366),
          I = a(78280),
          M = a(87913),
          y = a(72604),
          _ = a(2289),
          k = a(80902),
          S = a(4874),
          Y = a(98609),
          B = a(67705);
        function L() {
          return (0, B.Fd)("cart_config", "application_config");
        }
        function d() {
          return ["shopping_cart", "sale_drop_progress"];
        }
        function w() {
          return (0, k.I)({
            queryKey: d(),
            queryFn: async () => {
              const N = await (
                await fetch(`${Y.TS.STORE_BASE_URL}cart/ajaxsaledropprogress`)
              ).json();
              return (
                N.eresult !== y.R &&
                  console.error("Failed to load sale drop progress"),
                N
              );
            },
            enabled: Y.iA.logged_in,
          });
        }
        function $(v) {
          return (0, e.c2)(v) || (0, e.kx)(v);
        }
        var ne = ((v) => (
          (v[(v.k_ECanRequest = 0)] = "k_ECanRequest"),
          (v[(v.k_EIsNotChild = 1)] = "k_EIsNotChild"),
          (v[(v.k_EInvalidCartType = 2)] = "k_EInvalidCartType"),
          (v[(v.k_ENonGiftableItemPresent = 3)] = "k_ENonGiftableItemPresent"),
          v
        ))(ne || {});
        function J() {
          const v = (0, I.j4)(),
            N = (0, S.vo)(),
            z = (0, M.g7)(),
            te = N.isSuccess && N.data.role() == _.PQ.sf,
            P = z.data?.cart_items.some((u) => !u.can_purchase_as_gift);
          let o = 0;
          return te ? ($(v) ? P && (o = 3) : (o = 2)) : (o = 1), [o === 0, o];
        }
        function ee() {
          const v = (0, I.j4)(),
            N = (0, S.vo)();
          return N.isSuccess && N.data.role() == _.PQ.s && (0, e.uU)(v);
        }
      },
      49311: (F, X, a) => {
        "use strict";
        a.r(X),
          a.d(X, {
            BaseCartPage: () => rt,
            default: () => Ps,
            useInitCartLocalization: () => Ht,
          });
        var e = a(7850),
          I = a(63088),
          M = a(78280),
          y = a(19298),
          _ = a(48156),
          k = a(56925),
          S = a(64238),
          Y = a.n(S),
          B = a(9843),
          L = a(87913),
          d = a(90626),
          w = a(92757),
          $ = a(4874),
          ne = a(67529),
          J = a(10142),
          ee = a(84676),
          v = a(16412),
          N = a(25792),
          z = a(86390),
          te = a(51079),
          P = a(85599),
          o = a(18210),
          u = a(98609),
          g = a(36707),
          D = a(34633);
        function K(n) {
          return (0, e.jsx)("div", {
            className: (0, g.A)(D.CartCard, n.className),
            children: n.children,
          });
        }
        var x = a(23366),
          E = a(32093),
          p = a(98972);
        function h(n) {
          const { cart: t } = n,
            s = A(t);
          if (
            !t ||
            !u.iA.logged_in ||
            !s ||
            (0, E.nA)(u.TS.EREALM) ||
            !s.strSaleName
          )
            return null;
          const {
              cEarned: i,
              pctProgress: r,
              rgPrepurchaseApps: l,
              strFormattedSpendPerDrop: c,
              strSaleName: m,
            } = s,
            f = i > 0,
            C = (0, e.jsx)("div", {
              className: p.Explanation,
              children: (0, o.we)("#Cart_SaleCardDrops_Explanation", m),
            });
          return (0, e.jsxs)(K, {
            className: p.TradingCardContainer,
            children: [
              f &&
                (0, e.jsx)("div", {
                  className: p.EarnedMessage,
                  children: (0, o.Yp)(
                    "#Cart_SaleCardDrops_EarnedMessage",
                    i,
                    m,
                  ),
                }),
              !f && C,
              (0, e.jsxs)("div", {
                className: p.ProgressSection,
                children: [
                  (0, e.jsx)("div", {
                    children: (0, o.we)("#Cart_SaleCardDrops_ProgressLabel"),
                  }),
                  (0, e.jsx)(T, { value: r }),
                  (0, e.jsxs)("div", {
                    className: p.Right,
                    children: [
                      "(",
                      (0, o.we)("#Cart_SaleCardDrops_CardCost", c),
                      ")",
                    ],
                  }),
                ],
              }),
              f && C,
              l.length > 0 &&
                (0, e.jsxs)("div", {
                  className: p.IneligbleList,
                  children: [
                    (0, e.jsx)("p", {
                      children: (0, o.we)(
                        "#Cart_SaleCardDrops_PrepurchaseIneligible",
                        m,
                      ),
                    }),
                    (0, e.jsx)("ul", {
                      children: l.map((R) =>
                        (0, e.jsx)("li", { children: R }, R),
                      ),
                    }),
                  ],
                }),
            ],
          });
        }
        function A(n) {
          const t = (0, x.zJ)();
          if (!n || !t.isSuccess || !t.data?.sale_name) return null;
          const s = new Set();
          let i = 0;
          for (const W of n.cart_items)
            W.subtotal && (i += parseInt(W.subtotal.amount_in_cents));
          const {
              sale_name: r,
              spend_earned_for_next_drop: l,
              spend_needed_for_next_drop: c,
              formatted_spend_per_drop: m,
            } = t.data,
            f = i + l,
            C = Math.floor(f / c),
            R = Math.floor((100 * (f % c)) / c);
          return {
            cEarned: C,
            pctProgress: R,
            strFormattedSpendPerDrop: m,
            rgPrepurchaseApps: Array.from(s),
            strSaleName: r,
          };
        }
        function T(n) {
          const { value: t } = n,
            s = Math.min(100, Math.max(0, t));
          return (0, e.jsx)("div", {
            className: p.ProgressRail,
            children: (0, e.jsx)("div", {
              className: p.Progress,
              style: { width: `${s}%` },
            }),
          });
        }
        var G = a(20169),
          b = a(10349),
          U = a(2668),
          Z = a(96117),
          ae = a(15437);
        function ie(n, t = !0) {
          return (0, ae.FY)(
            {
              bIncludeDailyDeals: !0,
              nIncludeTopNSpecials: 8,
              spotlightLocation: { location: "cart" },
              rgAdditionalRecommendationIDs: n,
            },
            { include_assets: !0, include_release: !0 },
            t,
          );
        }
        var ue = a(50169),
          ve = a(45803),
          ge = a.n(ve),
          pe = a(40358),
          de = a(13784),
          xe = a(30096);
        function De() {
          const n = (0, xe.CH)();
          return (
            d.useEffect(
              () => (
                window.addEventListener("resize", n),
                () => window.removeEventListener("resize", n)
              ),
              [n],
            ),
            window.innerWidth < parseInt(D.strMaxCartPartResponsiveWidth)
          );
        }
        function le(n) {
          const { bMinimalDisplay: t } = n,
            s = De();
          return (s && t) || (!s && !t) ? null : (0, e.jsx)(_e, { ...n });
        }
        function _e(n) {
          const { cart: t, bMinimalDisplay: s } = n,
            i = Pe(t),
            r = (0, d.useMemo)(() => {
              const l = new Set(
                [
                  ...(i?.developers || []),
                  ...(i?.publishers || []),
                  ...(i?.franchises || []),
                ]
                  .filter((c) => !!c && !!c.creator_clan_account_id)
                  .map((c) => c.creator_clan_account_id),
              );
              return Array.from(l);
            }, [i]);
          return r.length == 0
            ? null
            : (0, e.jsxs)("div", {
                className: ge().CartCreatorCtn,
                children: [
                  (0, e.jsx)("div", {
                    className: ge().Title,
                    children: (0, o.we)("#Cart_FollowCreator_title"),
                  }),
                  (0, e.jsx)("div", {
                    className: ge().Description,
                    children: (0, o.we)("#Cart_FollowCreator_desc"),
                  }),
                  (0, e.jsx)("br", {}),
                  r.map((l) =>
                    (0, e.jsx)(
                      de.hA,
                      {
                        creatorID: {
                          name: "",
                          clan_account_id: l,
                          type: "developer",
                        },
                        bHideCreatorType: !0,
                        bSmallFormat: !0,
                        bMinimalDisplay: s,
                        bCompact: !0,
                      },
                      "creat" + l,
                    ),
                  ),
                ],
              });
        }
        function Pe(n) {
          const [t, s] = (0, d.useState)(null),
            i = (0, d.useMemo)(
              () =>
                n?.line_items?.length == 1 && n.line_items[0].packageid
                  ? { packageid: n.line_items[0].packageid }
                  : void 0,
              [n],
            ),
            { data: r } = (0, pe.U2)(i);
          (0, d.useEffect)(() => {
            const m = r?.type;
            m == _.uE.HT
              ? s(r.id)
              : (m == _.uE._i || m == _.uE.Ov) &&
                s(r.related_items?.parent_appid);
          }, [r?.id, r?.related_items?.parent_appid, r?.type]);
          const l = (0, d.useMemo)(() => (t ? { appid: t } : void 0), [t]),
            { data: c } = (0, pe.wl)(l);
          return c;
        }
        function Ae(n, t = []) {
          return t.filter(({ item_id: s, item: i }) =>
            s
              ? n[s.appid]
                ? !1
                : i?.appid
                  ? !n[i?.appid]
                  : i?.included_appids
                    ? i.included_appids.every((r) => !n[r])
                    : !0
              : !0,
          );
        }
        function Ie(n) {
          const { cart: t, validatedCart: s } = n,
            [i, r] = d.useState(void 0),
            l = (s?.cart_items || []).reduce(
              (j, Q) => j.concat(Q.store_item.included_appids),
              [],
            );
          d.useEffect(() => {
            i === void 0 &&
              t &&
              r(
                t?.line_items.map((j) =>
                  j.packageid
                    ? { packageid: j.packageid }
                    : { bundleid: j.bundleid },
                ),
              );
          }, [i, t]);
          const c = ie(i, i !== void 0);
          if (c.isError) return null;
          const m = l.reduce((j, Q) => ((j[Q] = !0), j), {}),
            f = Ae(m, c.data?.purchase_recommendations),
            C = Ae(m, c.data?.specials),
            R = Ae(m, c.data?.daily_deals),
            W = Ae(m, c.data?.spotlights);
          return (0, e.jsxs)("div", {
            className: ue.CartUpsellArea,
            children: [
              (0, e.jsx)("div", {
                className: ue.CartUpsellTitle,
                children: (0, o.we)("#Recommendations_Header"),
              }),
              f?.length > 3
                ? (0, e.jsx)(Ee, {
                    type: "recommended",
                    data: f,
                    isLoaded: !c.isLoading,
                  })
                : (0, e.jsx)(Ee, {
                    type: "specials",
                    data: C,
                    isLoaded: !c.isLoading,
                  }),
              (0, e.jsx)(le, { cart: t, bMinimalDisplay: !1 }),
            ],
          });
        }
        function Ee(n) {
          const { data: t, isLoaded: s, type: i } = n;
          return !t && s
            ? null
            : (0, e.jsx)(te.Ay, {
                feature: `upsell-${i}`,
                children: (0, e.jsx)(Re, {
                  className: (0, g.A)(ue.Specials),
                  children: t
                    ?.slice(0, 3)
                    .map(({ item_id: r, item: l }) =>
                      (0, e.jsx)(he, { item_id: r, item: l }, (0, b.wD)(r)),
                    ),
                }),
              });
        }
        function he(n) {
          const { item: t } = n;
          return (0, e.jsx)(Z.W, {
            capsule: { id: t.id, type: (0, b._4)(t.item_type, t.type) },
            imageType: "header",
            onlyOneDiscountPct: !0,
            bPreferAssetWithoutOverride: !1,
          });
        }
        function Ge(n) {
          const { data: t, isLoaded: s } = n;
          return !t && s
            ? null
            : jsx(Re, {
                className: classnames(styles.DailyDeals, !s && styles.Loading),
                children: t
                  ?.slice(0, 2)
                  .map((i) =>
                    jsx(
                      FeaturedItemDailyDeal,
                      { dailyDeal: i },
                      StoreItemIDToString(i.item_id),
                    ),
                  ),
              });
        }
        function Me(n) {
          const { data: t, isLoaded: s } = n,
            i = React.useMemo(
              () =>
                t
                  ?.filter((r) => r.spotlight_template != "weeklong_deals")
                  .slice(0, 2),
              [t],
            );
          return !i && s
            ? null
            : jsx(Re, {
                className: classnames(styles.Spotlights, !s && styles.Loading),
                children: i.map((r) =>
                  jsx(
                    FeaturedItemSpotlight,
                    { spotlight: r },
                    r.item_id
                      ? StoreItemIDToString(r.item_id)
                      : r.spotlight_title,
                  ),
                ),
              });
        }
        function Re(n) {
          const { className: t, children: s } = n;
          return (0, e.jsx)(y.Z, {
            "flow-children": "row",
            navEntryPreferPosition: G.iU.MAINTAIN_X,
            className: (0, g.A)(ue.UpsellRow, t),
            children: s,
          });
        }
        var Ne = a(8892),
          ye = a(68031),
          Be = a(60351),
          We = a(15252),
          ze = a(86336),
          je = a(79485),
          et = a(38580),
          Oe = a(2289),
          kt = a(86519),
          ft = a(42993),
          zt = a(20117),
          gt = a(35038),
          pt = a(19563),
          ht = a(80902),
          Ct = a(68312),
          Zt = a(5858),
          vt = a(76559),
          Yt = a(58612),
          Ze = a(35098),
          Le = a(3166);
        function Jt(n, t) {
          const s = Xt(n),
            i = (0, Yt.d0)({ loadFavorites: !0, loadNicknames: !0 }),
            r = s?.data?.ownership_info[0]?.friend_ownership,
            l = d.useMemo(
              () => new Map(r && r.map((f) => [f.accountid, f])),
              [r],
            ),
            c = d.useMemo(() => new Set(t), [t]);
          if (s.isLoading || i.isLoading) return { isLoading: !0 };
          if (s.isError || i.isError) return { isError: !0 };
          const m = i.data.map((f, C) => {
            const R = l.get(f.accountid) || {
              already_owns: !1,
              wishes_for: !1,
            };
            return { ...f, ownership: R };
          });
          return (
            m.sort((f, C) => {
              const R = c.has(f.accountid),
                W = c.has(C.accountid);
              if (R != W) return R ? -1 : 1;
              if (f.is_favorite != C.is_favorite) return f.is_favorite ? -1 : 1;
              if (f.ownership.wishes_for) {
                if (!C.ownership.wishes_for) return -1;
              } else if (C.ownership.wishes_for) return 1;
              const j = f.ownership.partial_wishes_for?.length ?? 0,
                Q = C.ownership.partial_wishes_for?.length ?? 0;
              if (j != Q) return Q - j;
              if (f.ownership.already_owns) {
                if (!C.ownership.already_owns) return 1;
              } else if (C.ownership.already_owns) return -1;
              const ce = f.ownership.partial_owns_appids?.length ?? 0,
                se = C.ownership.partial_owns_appids?.length ?? 0;
              if (ce != se) return ce - se;
              if (j > 0) {
                const q = f.ownership.partial_wishes_for.reduce(
                    (oe, fe) => oe ^ fe,
                    0,
                  ),
                  re = C.ownership.partial_wishes_for.reduce(
                    (oe, fe) => oe ^ fe,
                    0,
                  );
                if (q != re) return q - re;
              }
              if (ce > 0) {
                const q = f.ownership.partial_owns_appids.reduce(
                    (oe, fe) => oe ^ fe,
                    0,
                  ),
                  re = C.ownership.partial_owns_appids.reduce(
                    (oe, fe) => oe ^ fe,
                    0,
                  );
                if (q != re) return q - re;
              }
              return f.persona.m_strPlayerName.localeCompare(
                C.persona.m_strPlayerName,
              );
            }),
            { rgFriendsForGifting: m }
          );
        }
        function Xt(n) {
          const t = (0, Ct.KV)(),
            s = (0, b.Je)(n.id, n.item_type);
          return (0, ht.I)({
            queryKey: ["FriendOwnershipForGifting", s],
            queryFn: async () => {
              const i = gt.w.Init(pt.HM);
              i.Body().set_item_ids([_.O4.fromObject(s)]);
              const r = await pt._o.GetFriendOwnershipForGifting(t, i);
              if (!r.BSuccess()) throw r.GetEResult();
              return r.Body().toObject();
            },
          });
        }
        function tt(n) {
          const t = (0, ft.LH)(),
            s = (0, Ze.js)(n.gift_info?.accountid_giftee),
            i = d.useMemo(
              () =>
                (0, Le.Fd)("giftee_player_summaries", "application_config") ??
                [],
              [],
            );
          if (!n.gift_info?.accountid_giftee || s.isLoading) return null;
          if (s.data?.m_bInitialized || t) return s.data;
          const r = i.find((c) => c.accountid === n.gift_info.accountid_giftee);
          if (!r) return null;
          let l = new Zt.Z(vt.b.InitFromAccountID(r.accountid));
          return (
            (l.m_strAvatarHash = r.avatarHash),
            (l.m_strPlayerName = r.playerName),
            (l.m_bInitialized = !0),
            l
          );
        }
        var $t = a(92298),
          xt = a.n($t),
          qt = a(44894),
          At = a(7582),
          en = a(95695),
          nt = a.n(en),
          tn = a(71421),
          nn = a(12916),
          Se = a.n(nn),
          sn = a(87937),
          me = a.n(sn);
        const St = "hh:mm a",
          st = "HH:mm";
        function an(n) {
          const {
            nLatestTime: t,
            nEarliestTime: s,
            fnGetTimeToUpdate: i,
            onError: r,
            strAlsoShowTimeZone: l,
            disabled: c,
            bNoDefaultDate: m,
            className: f,
            strDescToolTip: C,
            strDescription: R,
            bShowTimeZone: W,
            strInvalidDateTimeLocalizedMsg: j,
            fnIsValidDateTime: Q,
            bWeekdaysOnly: ce,
            fnSetTimeToUpdate: se,
            bForce24HourFormat: q,
            bAllowClear: re,
          } = n;
          let oe = on() || q ? st : St;
          const fe = i(),
            [ot, we] = d.useState(fe > 0 ? me()(fe * 1e3) : null),
            [ke, Os] = d.useState(0),
            [lt, ct] = d.useState(),
            [ut, dt] = d.useState(),
            Ls = cn(lt, ut, j, Q, r),
            Kt = !r && Ls;
          let mt;
          if (t && s && t == s && s > At.HD.GetTimeNowWithOverride()) {
            const V = me().unix(s);
            (mt = {
              hours: { max: V.hour(), min: V.hour(), step: 0 },
              minutes: { max: V.minute(), min: V.minute(), step: 0 },
              seconds: { max: V.seconds(), min: V.seconds(), step: 0 },
              milliseconds: { max: 0, min: 0, step: 0 },
            }),
              (oe = st);
          }
          let Vt;
          !fe && s && !m && (Vt = me().unix(s));
          const Qt = me().tz.guess(),
            bs = me().unix(fe).tz(Qt),
            Ue = !!l && Qt != l && me().unix(fe).tz(l),
            Fs = (V) => {
              if (c) return;
              dt(null);
              const $e = i(),
                Te = me().unix($e || At.HD.GetTimeNowWithOverride());
              (V = V.clone()),
                V.hour(Te.hour()),
                V.minute(Te.minute()),
                V.second(0),
                se(V.unix()),
                we(V);
            },
            {
              fnOnInput: ws,
              fnOnInputBlur: Us,
              fnOnChange: Ws,
            } = _t(Pt, Fs, dt),
            Hs = (V) => {
              if (c) return;
              ct(null);
              let $e = i(),
                Te = 0;
              if (!$e)
                Te =
                  me().unix(s).hour(0).second(0).minutes(0).unix() +
                  3600 * V.hour() +
                  60 * V.minutes();
              else {
                const qe = me().unix($e);
                (V = V.clone()),
                  V.year(qe.year()),
                  V.month(qe.month()),
                  V.date(qe.date()),
                  (Te = V.unix());
              }
              se(Te), we(me().unix(Te));
            },
            {
              fnOnInput: Ks,
              fnOnInputBlur: Vs,
              fnOnChange: Qs,
            } = _t(It, Hs, ct),
            ks = () => {
              c || (se(0), we(null), dt(null), ct(null), Os((V) => V + 1));
            },
            zs = re && !c && fe > 0;
          return (0, e.jsxs)("div", {
            className: (0, g.A)(Se().EventTimeSection, f),
            children: [
              (0, e.jsxs)("div", {
                className: (0, g.A)(Se().EventTimeTitle, "DialogLabel"),
                children: [
                  (0, e.jsx)(tn.he, {
                    toolTipContent: C,
                    direction: "top",
                    children: !!R && (0, e.jsx)("span", { children: R }),
                  }),
                  Kt &&
                    (0, e.jsxs)("span", {
                      className: Se().DateErrorCtn,
                      children: [(0, e.jsx)("img", { src: qt.A }), Kt],
                    }),
                ],
              }),
              (0, e.jsxs)("div", {
                className: nt().FlexRowContainer,
                children: [
                  (0, e.jsxs)("div", {
                    className: (0, g.A)(nt().InputBorder, Se().TimeBlock),
                    children: [
                      (0, e.jsx)(
                        xt(),
                        {
                          onChange: Ws,
                          timeFormat: !1,
                          value: ut ?? ot,
                          isValidDate: (V) => !c && ln(s, t, ce, V),
                          initialValue: Vt,
                          inputProps: {
                            placeholder: (0, o.we)(
                              "#DateTimePicker_Enter_Date",
                            ),
                            className: (0, g.A)(
                              Se().DateWidth,
                              "DialogInput",
                              "DialogTextInputBase",
                            ),
                            disabled: c,
                            onChange: (V) => ws(V.currentTarget.value),
                            onBlur: (V) => Us(V.currentTarget.value),
                          },
                        },
                        "date" + ke,
                      ),
                      !!Ue &&
                        (0, e.jsx)("div", {
                          className: Se().PacificTimeHint,
                          children: Ue.format("L"),
                        }),
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    className: (0, g.A)(nt().InputBorder, Se().TimeBlock),
                    children: [
                      (0, e.jsx)(
                        xt(),
                        {
                          onChange: Qs,
                          dateFormat: !1,
                          timeFormat: oe,
                          timeConstraints: mt,
                          value: lt ?? ot,
                          inputProps: {
                            placeholder: (0, o.we)(
                              "#DateTimePicker_Enter_Time",
                            ),
                            className: (0, g.A)(
                              Se().TimeWidth,
                              "DialogInput",
                              "DialogTextInputBase",
                            ),
                            disabled: c,
                            onChange: (V) => Ks(V.currentTarget.value),
                            onBlur: (V) => Vs(V.currentTarget.value),
                          },
                        },
                        "time" + ke,
                      ),
                      !!Ue &&
                        (0, e.jsx)("div", {
                          className: Se().PacificTimeHint,
                          children: Ue.format("LT"),
                        }),
                    ],
                  }),
                  W &&
                    (0, e.jsxs)("div", {
                      children: [
                        (0, e.jsx)("div", {
                          className: Se().TimeZone,
                          children: bs.zoneAbbr(),
                        }),
                        !!Ue &&
                          (0, e.jsx)("div", {
                            className: Se().TimeZone,
                            children: Ue.zoneAbbr(),
                          }),
                      ],
                    }),
                  zs &&
                    (0, e.jsx)("button", {
                      type: "button",
                      className: Se().ClearButton,
                      onClick: ks,
                      children: (0, o.we)("#Button_Clear"),
                    }),
                ],
              }),
              !!mt &&
                (0, e.jsx)("div", {
                  children: (0, o.we)("#DateTimePicker_DateTime_Fixed"),
                }),
            ],
          });
        }
        function _t(n, t, s) {
          const [i, r] = d.useState(!1);
          return {
            fnOnInput: (f) => {
              s(f), r(!0);
            },
            fnOnInputBlur: (f) => {
              if (i) {
                const C = n(f);
                C.isValid() && t(C);
              }
              r(!1);
            },
            fnOnChange: (f) => {
              if (!i)
                if (typeof f == "string") {
                  const C = n(f);
                  C.isValid() && t(C);
                } else t(f);
            },
          };
        }
        function rn() {
          const t = me()("2025-01-14").format("L").split(/[-/.]/),
            s = t.indexOf("14");
          return t.indexOf("01") < s;
        }
        function on() {
          return me()("2025-01-14T13:00:00")
            .format("LT")
            .toLowerCase()
            .includes("13");
        }
        function Pt(n) {
          return me()(n, rn() ? "M/D/YYYY" : "D/M/YYYY", !1);
        }
        function It(n) {
          return me()(n, [St, st], !1);
        }
        function ln(n, t, s, i) {
          const r = me().unix(n).hour(0).seconds(0).minute(0);
          let l = i.unix() >= r.unix();
          if (l && t && t >= n) {
            const c = me().unix(t).hour(23).minute(59).seconds(59);
            l = i.unix() <= c.unix();
          }
          return (
            l && s && (i.weekday() == 0 || i.weekday() == 6) && (l = !1), l
          );
        }
        function cn(n, t, s, i, r) {
          const l = i && i(),
            c = t && !Pt(t).isValid(),
            m = n && !It(n).isValid(),
            f = m || c || typeof l == "string" || l === !1;
          let C = null;
          return (
            f &&
              ((C = (0, o.we)(
                s || "#DateTimePicker_Fallback_Invalid_DateTime",
              )),
              m
                ? (C = (0, o.we)("#DateTimePicker_Time_CannotParse"))
                : c
                  ? (C = (0, o.we)("#DateTimePicker_Date_CannotParse"))
                  : typeof l == "string" && (C = l)),
            d.useEffect(() => {
              r && r(C);
            }, [C, r]),
            C
          );
        }
        var un = a(36174),
          dn = a(83934),
          O = a.n(dn);
        const mn = d.memo(function (t) {
          const { scheduledTime: s, onScheduledTimeChange: i } = t,
            [r, l] = d.useState(null),
            c = s > 0,
            m = () => {
              i(0);
            },
            f = () => {
              s || i(Date.now() / 1e3);
            };
          return (0, e.jsxs)(Ve, {
            children: [
              (0, e.jsx)(be, {
                children: (0, o.we)("#Cart_GiftDelivery_Label"),
              }),
              (0, e.jsx)(Bt, {
                children: (0, e.jsx)(v.Od, {
                  controlled: !0,
                  checked: !c,
                  onChange: (C) => C && m(),
                  label: (0, o.we)("#Cart_GiftDelivery_Now"),
                }),
              }),
              (0, e.jsxs)(Bt, {
                children: [
                  (0, e.jsx)(v.Od, {
                    controlled: !0,
                    checked: c,
                    onChange: (C) => C && f(),
                    label: (0, o.we)("#Cart_GiftDelivery_ScheduleDelivery"),
                  }),
                  (0, e.jsx)("div", { style: { clear: "both" } }),
                  r &&
                    (0, e.jsx)("div", {
                      className: O().ScheduleError,
                      children: r,
                    }),
                  c &&
                    (0, e.jsx)(N.tH, {
                      children: (0, e.jsx)(fn, {
                        scheduledTime: s,
                        onScheduledTimeChange: i,
                        setScheduledError: l,
                      }),
                    }),
                ],
              }),
            ],
          });
        });
        function fn(n) {
          const {
            scheduledTime: t,
            onScheduledTimeChange: s,
            setScheduledError: i,
          } = n;
          if ((0, Le.Qn)())
            return (0, e.jsx)(pn, {
              scheduledTime: t,
              onScheduledTimeChange: s,
              setScheduledError: i,
            });
          {
            const l = () => jt(t);
            return (0, e.jsx)(an, {
              bShowTimeZone: !0,
              className: O().GiftDatePicker,
              nEarliestTime: Date.now() / 1e3,
              fnGetTimeToUpdate: () => t,
              fnSetTimeToUpdate: s,
              fnIsValidDateTime: l,
              onError: i,
            });
          }
        }
        function jt(n) {
          const t = Date.now() / 1e3 + un.Kp.PerYear,
            s = new Date(null, null, null, 0, 0, 0, 0).getTime() / 1e3;
          return n > t
            ? (0, o.we)("#Cart_GiftScheduleError_TooFar")
            : n < s
              ? (0, o.we)("#Cart_GiftScheduleError_InvalidDate")
              : !0;
        }
        function gn(n, t) {
          let s = n.getHours(),
            i = n.getMinutes();
          return (
            t && (s > 12 ? (s -= 12) : s == 0 && (s = 12)),
            `${s}:${i < 10 ? "0" : ""}${i}`
          );
        }
        function pn(n) {
          const {
              scheduledTime: t,
              onScheduledTimeChange: s,
              setScheduledError: i,
            } = n,
            r = d.useMemo(() => {
              const re = new Intl.DateTimeFormat(o.pf.GetPreferredLocales(), {
                hour: "numeric",
              });
              return (
                re.resolvedOptions().hour12 ||
                re.resolvedOptions().hourCycle == "h12"
              );
            }, []),
            l = new Date(t * 1e3),
            [c, m] = (0, d.useState)(l.getMonth()),
            [f, C] = (0, d.useState)(l.getDate()),
            [R, W] = (0, d.useState)(l.getFullYear()),
            [j, Q] = (0, d.useState)(() => gn(l, r)),
            [ce, se] = (0, d.useState)(l.getHours() >= 12 ? "PM" : "AM");
          d.useEffect(() => {
            let re = j.match(/^\s*([012]?[0-9]):([0-9]{2})\s*/);
            if (!re) return;
            let oe = parseInt(re[1]);
            const fe = parseInt(re[2]);
            r &&
              (ce == "PM" && oe < 12
                ? (oe += 12)
                : ce == "AM" && oe == 12 && (oe = 0));
            const we = new Date(R, c, f, oe, fe, 0, 0).getTime() / 1e3,
              ke = jt(we);
            ke === !0 ? (i(null), s(we)) : i(ke);
          }, [R, c, f, j, ce, r, s, i]);
          const q = Le.TS.COUNTRY == "US" && Le.TS.LANGUAGE == "english";
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsxs)(v.Xp, {
                className: O().GamepadTimePickerRow,
                children: [
                  q && (0, e.jsx)(Dt, { month: c, setMonth: m }),
                  (0, e.jsx)(Cn, { year: R, month: c, day: f, setDay: C }),
                  !q && (0, e.jsx)(Dt, { month: c, setMonth: m }),
                  (0, e.jsx)(hn, { year: R, setYear: W }),
                ],
              }),
              (0, e.jsxs)(v.Xp, {
                className: O().GamepadTimePickerRow,
                children: [
                  (0, e.jsx)(v.pd, {
                    value: j,
                    onChange: (re) => Q(re.currentTarget.value),
                  }),
                  r && (0, e.jsx)(vn, { strAMPM: ce, setAMPM: se }),
                  (0, e.jsx)(v.VP, {
                    className: O().TimezoneDisplay,
                    children: (0, e.jsx)(N.tH, {
                      children: (0, e.jsx)(xn, {}),
                    }),
                  }),
                  !r && (0, e.jsx)(v.VP, { children: "\xA0" }),
                ],
              }),
            ],
          });
        }
        function hn(n) {
          const { year: t, setYear: s } = n,
            i = d.useMemo(() => {
              const r = new Date(),
                l = new Intl.DateTimeFormat(o.pf.GetPreferredLocales(), {
                  year: "numeric",
                });
              return [r.getFullYear(), r.getFullYear() + 1].map((c) => ({
                label: l.format(new Date(c, 0, 1)),
                data: c,
              }));
            }, []);
          return (0, e.jsx)(v.m, {
            selectedOption: t,
            onChange: (r) => s(r.data),
            rgOptions: i,
          });
        }
        function Dt(n) {
          const { month: t, setMonth: s } = n,
            i = d.useMemo(() => {
              const r = new Intl.DateTimeFormat(o.pf.GetPreferredLocales(), {
                month: "short",
              });
              return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((l) => ({
                label: r.format(new Date(null, l)),
                data: l,
              }));
            }, []);
          return (0, e.jsx)(v.m, {
            selectedOption: t,
            onChange: (r) => s(r.data),
            rgOptions: i,
          });
        }
        function Cn(n) {
          const { year: t, month: s, day: i, setDay: r } = n,
            l = d.useMemo(() => {
              const c = new Date(t, s + 1, 0).getDate(),
                m = new Intl.DateTimeFormat(o.pf.GetPreferredLocales(), {
                  day: "numeric",
                });
              let f = [];
              for (let C = 1; C <= c; C++)
                f.push({ label: m.format(new Date(null, null, C)), data: C });
              return f;
            }, [s, t]);
          return (0, e.jsx)(v.m, {
            selectedOption: i,
            onChange: (c) => r(c.data),
            rgOptions: l,
          });
        }
        function vn(n) {
          const { strAMPM: t, setAMPM: s } = n,
            i = d.useMemo(() => {
              const r = new Intl.DateTimeFormat(o.pf.GetPreferredLocales(), {
                  hour: "numeric",
                  hour12: !0,
                }),
                l =
                  r
                    .formatToParts(new Date(null, null, null, 5))
                    .find((m) => m.type == "dayPeriod")?.value || "AM",
                c =
                  r
                    .formatToParts(new Date(null, null, null, 17))
                    .find((m) => m.type == "dayPeriod")?.value || "PM";
              return [
                { label: l, data: "AM" },
                { label: c, data: "PM" },
              ];
            }, []);
          return (0, e.jsx)(v.m, {
            selectedOption: t,
            onChange: (r) => s(r.data),
            rgOptions: i,
          });
        }
        function xn() {
          const n = new Intl.DateTimeFormat(o.pf.GetPreferredLocales(), {
            timeZoneName: "short",
          })
            .formatToParts()
            .find((t) => t.type == "timeZoneName");
          return (0, e.jsx)(e.Fragment, { children: n ? n.value : "" });
        }
        var He = a(46943),
          Ke = a(53080);
        function An(n) {
          const { lineItem: t } = n,
            { data: s } = (0, B.UI)(),
            i = d.useMemo(() => {
              let m = [];
              for (const f of s?.line_items ?? [])
                f.line_item_id === t.line_item_id ||
                  !f.flags?.is_gift ||
                  !f.gift_info ||
                  m.push(f);
              return m;
            }, [s?.line_items, t.line_item_id]),
            { mutate: r } = (0, je.C)(),
            l = (m) => {
              r({
                lineItemID: t.line_item_id,
                lineItemFlags: t.flags,
                giftInfo: { ...(m.gift_info ?? {}) },
              });
            },
            c = (0, Ke.WM)({
              rgOptions: i,
              selectedValue: null,
              onSelectionChange: l,
            });
          return i.length < 1
            ? null
            : (0, e.jsx)(Be.az, {
                flexGrow: "0",
                children: (0, e.jsxs)(Ke.l6.Root, {
                  state: c,
                  children: [
                    (0, e.jsx)(Ke.l6.Trigger, {
                      children: (0, e.jsx)(We.EY, {
                        children: (0, o.we)(
                          "#Cart_Gifting_CopyGiftOptionsFrom",
                        ),
                      }),
                    }),
                    (0, e.jsx)(Ke.l6.Options, {
                      children: i.map((m, f) =>
                        (0, e.jsx)(
                          Ke.l6.Option,
                          {
                            value: m,
                            children: (0, e.jsx)(Sn, { lineItem: m }),
                          },
                          f,
                        ),
                      ),
                    }),
                  ],
                }),
              });
        }
        function Sn(n) {
          const { lineItem: t } = n,
            s = t.bundleid ? _.c6.xO : _.c6.RD,
            [i] = (0, ee.mZ)(t.bundleid ? t.bundleid : t.packageid, s, {
              include_basic_info: !0,
            }),
            r = tt(t),
            l = r?.m_strPlayerName ?? t.gift_info?.email_giftee;
          if (!i || !l) return null;
          const c = r
            ? (0, e.jsx)(He.i8, {
                size: "X-Small",
                statusPosition: "none",
                persona: r,
              })
            : (0, e.jsx)(e.Fragment, {});
          return (0, e.jsxs)(ye.s, {
            minWidth: "0",
            align: "center",
            justify: "between",
            gap: "4",
            maxWidth: "600px",
            children: [
              (0, e.jsx)("div", { children: i.GetName() }),
              (0, e.jsxs)(ye.s, {
                gap: "1",
                align: "center",
                children: [c, l],
              }),
            ],
          });
        }
        var _n = a(7967),
          Pn = a(5827),
          In = a(54806),
          jn = a(93125),
          Et = a(96538);
        function Dn(n) {
          const {
            storeItem: t,
            lineItem: s,
            bShowGiftRecipientModal: i,
            fnOnDismiss: r,
            highlightedAccountIDs: l,
          } = n;
          return (0, e.jsx)(Et.mt, {
            className: O().GiftRecipientPickerModal,
            active: i,
            onDismiss: r,
            children: (0, e.jsx)(En, {
              onDismiss: r,
              lineItem: s,
              storeItem: t,
              highlightedAccountIDs: l ?? [],
            }),
          });
        }
        const En = d.memo(function (t) {
          const { storeItem: s, highlightedAccountIDs: i, ...r } = t,
            { rgFriendsForGifting: l, isLoading: c, isError: m } = Jt(s, i),
            f = (0, Ze.DW)(i),
            C = d.useMemo(() => {
              const R = new Map(
                f
                  .filter((j) => !!j.data)
                  .map((j) => [j.data.GetAccountID(), j.data]),
              );
              for (const j of l ?? []) R.delete(j.accountid);
              let W = [];
              for (const j of R.values())
                W.push({
                  accountid: j.GetAccountID(),
                  persona: j,
                  ownership: { already_owns: !1, wishes_for: !1 },
                });
              return l && W.push(...l), W;
            }, [l, f]);
          return (0, e.jsx)(yn, {
            ...r,
            rgAccountsForGifting: C,
            isLoading: c,
            isError: m,
          });
        });
        function yn(n) {
          const {
              lineItem: t,
              onDismiss: s,
              rgAccountsForGifting: i,
              isLoading: r,
              isError: l,
            } = n,
            c = (0, je.C)(),
            [m, f] = d.useState(""),
            C = d.useMemo(() => {
              if (!i) return [];
              const j = m.toLocaleLowerCase();
              return j.length < 1
                ? i
                : i.filter(
                    (Q) =>
                      !!(
                        Q.persona.m_strPlayerName
                          .toLocaleLowerCase()
                          .indexOf(j) > -1 ||
                        (Q.nickname &&
                          Q.nickname.toLocaleLowerCase().indexOf(j) > -1)
                      ),
                  );
            }, [m, i]),
            R = t.gift_info?.accountid_giftee,
            W = (j) => {
              if (j) {
                const Q = new vt.b(j);
                Q.BIsValid() &&
                  c.mutate({
                    lineItemID: t.line_item_id,
                    lineItemFlags: t.flags,
                    giftInfo: {
                      ...(t.gift_info ?? {}),
                      accountid_giftee: Q && Q.GetAccountID(),
                    },
                  });
              }
              s();
            };
          return l
            ? (0, e.jsx)(yt, {
                children: (0, e.jsx)("div", {
                  className: O().LoadingError,
                  children: (0, o.we)("#Cart_GiftRecipientModal_IssueLoading"),
                }),
              })
            : (0, e.jsxs)(yt, {
                loading: r,
                children: [
                  (0, e.jsx)(Gn, { value: m, onChange: f }),
                  (0, e.jsx)(Tn, {
                    children: C.map((j) =>
                      (0, e.jsx)(
                        Mn,
                        {
                          selected: j.accountid === R,
                          onSelect: W,
                          ownership: j.ownership,
                          persona: j.persona,
                          nickname: j.nickname,
                        },
                        j.accountid,
                      ),
                    ),
                  }),
                ],
              });
        }
        function yt(n) {
          const { loading: t, children: s } = n;
          return (0, e.jsxs)(y.Z, {
            className: O().GiftRecipientPickerFormCtn,
            children: [
              (0, e.jsx)("div", {
                className: O().FormTitle,
                children: (0, o.we)("#Cart_GiftRecipientModal_Title"),
              }),
              t && (0, e.jsx)(P.t, { position: "center", size: "large" }),
              !t && s,
            ],
          });
        }
        function Gn(n) {
          const { value: t, onChange: s } = n;
          return (0, e.jsx)(v.pd, {
            autoFocus: !0,
            bShowClearAction: !0,
            className: O().GiftFriendsInput,
            placeholder: (0, o.we)("#Cart_GiftRecipientModal_Placeholder"),
            value: t,
            onChange: (i) => s(i.currentTarget.value),
          });
        }
        function Tn(n) {
          return (0, e.jsx)(_n.MS, { className: O().GiftFriendsListCtn, ...n });
        }
        function Mn(n) {
          const {
              selected: t,
              onSelect: s,
              nickname: i,
              persona: r,
              ownership: l,
            } = n,
            c = l.already_owns,
            m = d.useCallback(() => {
              c || s(r.m_steamid.ConvertTo64BitString());
            }, [c, s, r]);
          return (0, e.jsxs)(y.Z, {
            className: (0, g.A)(
              O().GiftPickerFriendBlock,
              t && O().Selected,
              c && O().Disabled,
            ),
            focusClassName: O().Focused,
            noFocusRing: !0,
            onActivate: m,
            children: [
              (0, e.jsx)(He.i8, {
                className: O().FriendAvatar,
                statusPosition: "right",
                persona: r,
              }),
              (0, e.jsx)(jn.A, {
                bParenthesizeNicknames: !0,
                strNickname: i,
                persona: r,
                className: O().PersonaName,
              }),
              (0, e.jsxs)("div", {
                className: O().FriendsGiftLabel,
                children: [
                  (0, e.jsx)(Rn, { ownership: l }),
                  (0, e.jsx)(Nn, { ownership: l }),
                ],
              }),
            ],
          });
        }
        function Rn(n) {
          const { ownership: t } = n,
            { already_owns: s, partial_owns_appids: i } = t;
          return s
            ? (0, e.jsx)("div", {
                className: (0, g.A)(O().OwnsGame),
                children: (0, o.we)("#Cart_GiftRecipientModal_OwnsGameLabel"),
              })
            : i && i.length > 0
              ? (0, e.jsx)("div", {
                  className: (0, g.A)(O().OwnsGame),
                  children: (0, o.PP)(
                    "#Cart_GiftRecipientModal_PartialOwnsLabel",
                    (0, e.jsx)(Gt, { rgAppList: i }),
                  ),
                })
              : null;
        }
        function Nn(n) {
          const { ownership: t } = n,
            { already_owns: s, wishes_for: i, partial_wishes_for: r } = t;
          return s
            ? null
            : i
              ? (0, e.jsx)("div", {
                  className: (0, g.A)(O().OnWishlist),
                  children: (0, o.we)("#Cart_GiftRecipientModal_OnWishlist"),
                })
              : r && r.length > 0
                ? (0, e.jsx)("div", {
                    className: (0, g.A)(O().OnWishlist),
                    children: (0, o.PP)(
                      "#Cart_GiftRecipientModal_PartialWishlistLabel",
                      (0, e.jsx)(Gt, { rgAppList: r }),
                    ),
                  })
                : null;
        }
        function Gt(n) {
          const { rgAppList: t } = n,
            s = (0, Pn.eG)(),
            i = d.useMemo(
              () =>
                Array.from(new Set(t))
                  .slice(0, 6)
                  .map((c) => (0, pe.us)(s, { appid: c })),
              [s, t],
            ),
            r = (0, In.E)({ queries: i }),
            l = [];
          for (const c of r)
            if (!(!c.data || !c.data.name)) {
              if (l.length >= 3) break;
              l.push(
                (0, e.jsxs)(e.Fragment, {
                  children: [l.length ? ", " : "", c.data.name],
                }),
              );
            }
          return l;
        }
        function Bn(n) {
          const { giftInfo: t, onChange: s } = n,
            i = (0, Ze.js)(t.accountid_giftee);
          return i.data
            ? (0, e.jsxs)(Rt, {
                children: [
                  (0, e.jsxs)(Nt, {
                    children: [
                      (0, e.jsx)(be, {
                        children: (0, o.we)("#Cart_PurchaseFor_Label"),
                      }),
                      (0, e.jsx)("a", {
                        href: i.data.GetCommunityProfileURL(),
                        target: "_blank",
                        children: (0, e.jsx)(He.i8, {
                          className: O().FriendAvatar,
                          statusPosition: "right",
                          persona: i.data,
                        }),
                      }),
                      i.data.m_strPlayerName,
                    ],
                  }),
                  (0, e.jsx)(kn, { giftInfo: t, onChange: s }),
                ],
              })
            : null;
        }
        function On(n) {
          const { lineItem: t } = n;
          return (0, e.jsxs)(Rt, {
            children: [
              (0, e.jsx)(Hn, { ...n }),
              (0, e.jsx)(Qn, { lineItem: t }),
              (0, e.jsx)(Zn, {
                gifteeAccountID: t.gift_info?.accountid_giftee,
              }),
            ],
          });
        }
        function Ln(n) {
          return u.iA.logged_in
            ? null
            : (0, e.jsx)("div", {
                className: O().SignInLink,
                children: (0, e.jsx)(Ne.$, {
                  onClick: () => (0, z.vg)(),
                  children: (0, o.we)("#Cart_Gifting_SignInForFriends"),
                }),
              });
        }
        function bn(n) {
          const { lineItem: t, storeItem: s } = n,
            [i, r] = d.useState(!1),
            { data: l } = (0, B.UI)(),
            c = d.useMemo(() => {
              if (!l?.line_items) return [];
              let m = new Set();
              for (const f of l.line_items)
                f.line_item_id !== t.line_item_id &&
                  f.gift_info?.accountid_giftee &&
                  m.add(f.gift_info.accountid_giftee);
              return [...m];
            }, [l?.line_items, t.line_item_id]);
          return (0, e.jsxs)(e.Fragment, {
            children: [
              u.iA.logged_in &&
                (0, e.jsx)(Ne.$, {
                  onClick: () => r(!0),
                  children: (0, o.we)("#Cart_SelectRecipient"),
                }),
              i &&
                (0, e.jsx)(Dn, {
                  bShowGiftRecipientModal: i,
                  fnOnDismiss: () => r(!1),
                  lineItem: t,
                  storeItem: s,
                  highlightedAccountIDs: c,
                }),
            ],
          });
        }
        function Fn(n) {
          const { lineItem: t, onClick: s } = n,
            { mutate: i } = (0, je.C)(),
            r = d.useCallback(() => {
              i({
                lineItemID: t.line_item_id,
                lineItemFlags: t.flags,
                giftInfo: { ...t.gift_info, email_giftee: "" },
              }),
                s();
            }, [i, t, s]);
          return (0, e.jsx)(Ne.$, {
            color: "dull",
            onClick: r,
            children: (0, o.we)("#Cart_EnterRecipientEmail"),
          });
        }
        function wn(n) {
          const { lineItem: t } = n,
            s = tt(t);
          return s
            ? (0, e.jsxs)(ye.s, {
                align: "center",
                children: [
                  (0, e.jsx)("a", {
                    href: s.GetCommunityProfileURL(),
                    target: "_blank",
                    children: (0, e.jsx)(He.i8, {
                      className: O().FriendAvatar,
                      statusPosition: "right",
                      persona: s,
                    }),
                  }),
                  s.m_strPlayerName,
                ],
              })
            : null;
        }
        function Un(n) {
          const { lineItem: t } = n,
            s = t.gift_info?.email_giftee,
            { mutate: i } = (0, je.C)(),
            [r, l, c] = (0, kt.M)(s, 1e3);
          return (
            (0, d.useEffect)(() => {
              if (!l || l == t.gift_info?.email_giftee) return;
              let m = t.gift_info ? { ...t.gift_info } : {};
              (m.email_giftee = l),
                (m.time_scheduled_send = 0),
                i({
                  lineItemID: t.line_item_id,
                  lineItemFlags: t.flags,
                  giftInfo: m,
                });
            }, [i, t, l]),
            (0, e.jsxs)("div", {
              children: [
                (0, e.jsx)("div", {
                  className: O().GiftEmailInput,
                  children: (0, e.jsx)(v.pd, {
                    label: " ",
                    mustBeEmail: !0,
                    value: r,
                    onChange: (m) => c(m.target.value),
                    maxChars: zn,
                  }),
                }),
                (0, e.jsxs)("ul", {
                  className: O().GiftEmailWarnings,
                  children: [
                    (0, e.jsx)("li", {
                      children: (0, o.we)("#Cart_GiftDeliveryEmail_Warning1"),
                    }),
                    (0, e.jsx)("li", {
                      children: (0, o.we)(
                        "#Cart_GiftDeliveryEmail_Warning2",
                        u.iA.country_code,
                      ),
                    }),
                  ],
                }),
              ],
            })
          );
        }
        var Wn = ((n) => (
          (n[(n.NoRecipientSelected = 0)] = "NoRecipientSelected"),
          (n[(n.AccountSelected = 1)] = "AccountSelected"),
          (n[(n.EmailSelected = 2)] = "EmailSelected"),
          n
        ))(Wn || {});
        function Hn(n) {
          const { lineItem: t } = n,
            [s, i] = d.useState(!1),
            r = d.useMemo(
              () =>
                t.gift_info?.accountid_giftee
                  ? 1
                  : s || t.gift_info?.email_giftee
                    ? 2
                    : 0,
              [t, s],
            ),
            { mutate: l } = (0, je.C)(),
            c = d.useCallback(() => {
              let m = t.gift_info ? { ...t.gift_info } : {};
              (m.accountid_giftee = null),
                (m.email_giftee = null),
                i(!1),
                l({
                  lineItemID: t.line_item_id,
                  lineItemFlags: t.flags,
                  giftInfo: m,
                });
            }, [l, t]);
          return (0, e.jsxs)(Ve, {
            children: [
              (0, e.jsx)("div", { className: O().GiftFormDivider }),
              (0, e.jsxs)(ye.s, {
                justify: "between",
                gap: "3",
                direction: { initial: "column-reverse", md: "row" },
                marginBottom: "2",
                children: [
                  (0, e.jsxs)(Nt, {
                    children: [
                      (0, e.jsx)(be, {
                        fullWidth: r === 2,
                        children:
                          r == 2
                            ? (0, o.we)("#Cart_GiftRecipientEmail_Label")
                            : (0, o.we)("#Cart_GiftRecipient_Label"),
                      }),
                      r == 1 && (0, e.jsx)(wn, { lineItem: t }),
                      r == 0 &&
                        (0, e.jsx)(Kn, { onEmailRecipient: () => i(!0), ...n }),
                      r != 0 &&
                        (0, e.jsxs)(Ye, {
                          onClick: c,
                          children: [
                            "(",
                            r == 2
                              ? (0, o.we)("#Cart_EditGiftDelivery")
                              : (0, o.we)("#Cart_Edit"),
                            ")",
                          ],
                        }),
                    ],
                  }),
                  (0, e.jsx)(An, { lineItem: t }),
                ],
              }),
              (0, e.jsx)("div", {
                children: r == 2 && (0, e.jsx)(Un, { ...n }),
              }),
              r == 1 && (0, e.jsx)(Vn, { lineItem: t }),
            ],
          });
        }
        function Kn(n) {
          const { onEmailRecipient: t, ...s } = n;
          return (0, e.jsxs)(ye.s, {
            align: "center",
            gap: "2",
            marginStart: "2",
            wrap: "wrap",
            children: [
              (0, e.jsx)(bn, { ...s }),
              (0, e.jsx)(Fn, { onClick: t, ...s }),
              (0, e.jsx)(Ln, {}),
            ],
          });
        }
        function Vn(n) {
          const { lineItem: t } = n,
            s = tt(t),
            { data: i } = (0, et.Dv)(),
            r = d.useMemo(
              () => !i || i.includes(s?.GetSteamIDAsString()),
              [i, s],
            );
          return !s || r
            ? null
            : (0, e.jsx)(Be.az, {
                marginTop: "3",
                className: O().GiftNonFriendWarning,
                children: (0, e.jsxs)(We.EY, {
                  size: "3",
                  color: "amber-9",
                  children: [
                    u.iA.logged_in &&
                      (0, o.PP)(
                        "#Cart_Warning_GiftToNonFriend_Named",
                        (0, e.jsx)(ze.Y, {
                          target: "_blank",
                          href: s.GetCommunityProfileURL(),
                          children: s.m_strPlayerName,
                        }),
                      ),
                    !u.iA.logged_in &&
                      (0, o.oW)(
                        "#Cart_Warning_GiftToAccount_LoggedOut_Actionable",
                        (0, e.jsx)(ze.W, {
                          color: "text-light",
                          contrast: "title",
                          onClick: () => (0, z.vg)(),
                        }),
                      ),
                  ],
                }),
              });
        }
        function Qn(n) {
          const { lineItem: t } = n,
            [s, i] = d.useState(t.gift_info?.gift_message?.message || ""),
            r = d.useRef(s),
            [l, c] = d.useState(t.gift_info?.gift_message?.signature || ""),
            m = d.useRef(l),
            [f, C] = d.useState(t.gift_info?.time_scheduled_send),
            R = d.useRef(f),
            W = d.useCallback((q) => {
              (j.current = !0), C(Math.floor(q));
            }, []),
            j = d.useRef(!1);
          d.useEffect(() => {
            j.current ||
              ((R.current = t.gift_info?.time_scheduled_send),
              (r.current = t.gift_info?.gift_message?.message || ""),
              (m.current = t.gift_info?.gift_message?.signature || ""),
              C(R.current),
              i(r.current),
              c(m.current));
          }, [t.gift_info]);
          const Q = (0, xe._g)(3e3),
            { mutate: ce } = (0, je.C)(),
            se = d.useCallback(
              (q) => {
                Q(() => {
                  j.current &&
                    (ce({
                      lineItemID: t.line_item_id,
                      lineItemFlags: t.flags,
                      giftInfo: q,
                    }),
                    (j.current = !1));
                });
              },
              [ce, t.line_item_id, t.flags, Q],
            );
          return (
            (0, d.useEffect)(() => {
              (R.current != f || r.current != s || m.current != l) &&
                (se({
                  accountid_giftee: t.gift_info?.accountid_giftee,
                  email_giftee: t.gift_info?.email_giftee,
                  gift_message: { message: s, signature: l },
                  time_scheduled_send: f,
                }),
                (R.current = f),
                (r.current = s),
                (m.current = l));
            }, [s, l, f, se, t.gift_info]),
            (0, e.jsx)(Mt, {
              id: t.line_item_id,
              message: s,
              onMessageChange: (q) => {
                (j.current = !0), i(q);
              },
              signature: l,
              onSignatureChange: (q) => {
                (j.current = !0), c(q);
              },
              scheduledTime: f,
              onScheduledTimeChange: W,
              bShowScheduledTime:
                !t.gift_info?.email_giftee || t.gift_info?.email_giftee == "",
            })
          );
        }
        function kn(n) {
          const { giftInfo: t, onChange: s } = n;
          return (0, e.jsx)(Mt, {
            id: "cart",
            message: t.gift_message?.message || "",
            onMessageChange: (i) =>
              s({ ...t, gift_message: { ...t.gift_message, message: i } }),
            signature: t.gift_message?.signature || "",
            onSignatureChange: (i) =>
              s({ ...t, gift_message: { ...t.gift_message, signature: i } }),
            scheduledTime: t.time_scheduled_send,
            onScheduledTimeChange: (i) => s({ ...t, time_scheduled_send: i }),
            bShowScheduledTime: !t?.email_giftee || t?.email_giftee == "",
          });
        }
        const Tt = 160,
          zn = 330;
        function Mt(n) {
          const {
              id: t,
              message: s,
              onMessageChange: i,
              signature: r,
              onSignatureChange: l,
              bShowScheduledTime: c,
              scheduledTime: m,
              onScheduledTimeChange: f,
              onBlur: C,
            } = n,
            R = (0, ft.LH)(),
            W = Tt - s.length,
            [j, Q] = d.useState(!1),
            ce = j || r?.length > 0 || !R,
            { data: se } = (0, Ze.js)(u.iA.accountid);
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsxs)(Ve, {
                children: [
                  (0, e.jsx)(be, {
                    fullWidth: !0,
                    children: (0, o.PP)(
                      "#Cart_GiftDelivery_Body",
                      (0, e.jsx)("span", {
                        className: W <= 0 ? O().RedText : null,
                        children: W,
                      }),
                    ),
                  }),
                  (0, e.jsx)(v.Cl, {
                    nMinHeight: 50,
                    className: O().GiftNoteInput,
                    value: s,
                    onBlur: C,
                    onChange: (q) => i(q.target.value),
                  }),
                ],
              }),
              !!R &&
                (0, e.jsx)(Ve, {
                  children: (0, e.jsxs)("div", {
                    className: O().GiftFormRecipient,
                    children: [
                      (0, e.jsx)(be, {
                        children: (0, o.we)("#Cart_GiftDelivery_From"),
                      }),
                      (0, e.jsx)(He.i8, {
                        className: O().FriendAvatar,
                        statusPosition: "right",
                        persona: se,
                      }),
                      " ",
                      se?.m_strPlayerName || "",
                      !ce &&
                        (0, e.jsxs)(Ye, {
                          onClick: () => Q(!0),
                          children: [
                            "(",
                            (0, o.we)("#Cart_GiftDelivery_AddSignature"),
                            ")",
                          ],
                        }),
                    ],
                  }),
                }),
              ce &&
                (0, e.jsxs)(Ve, {
                  children: [
                    (0, e.jsx)(be, {
                      fullWidth: !0,
                      children: (0, o.we)("#Cart_GiftDelivery_Signature"),
                    }),
                    (0, e.jsx)(v.pd, {
                      value: r,
                      className: O().GiftSignatureInput,
                      onChange: (q) => l(q.target.value),
                      onBlur: C,
                      maxChars: Tt,
                    }),
                  ],
                }),
              c &&
                (0, e.jsx)(mn, { scheduledTime: m, onScheduledTimeChange: f }),
            ],
          });
        }
        function Rt(n) {
          return (0, e.jsx)("div", {
            className: O().GiftFormCtn,
            children: n.children,
          });
        }
        function Ve(n) {
          return (0, e.jsx)("div", {
            className: O().GiftFormSection,
            children: n.children,
          });
        }
        function Nt(n) {
          return (0, e.jsx)("div", {
            className: O().GiftFormRecipient,
            children: n.children,
          });
        }
        function Bt(n) {
          return (0, e.jsx)("div", {
            className: O().GiftRadioRow,
            children: n.children,
          });
        }
        function be(n) {
          const { fullWidth: t } = n;
          return (0, e.jsx)("div", {
            className: Y()(O().FormTextLabel, t && O().FullWidth),
            children: n.children,
          });
        }
        function Ye(n) {
          return (0, e.jsx)(y.Z, {
            onActivate: n.onClick,
            children: n.children,
            className: O().LinkButton,
          });
        }
        function Zn(n) {
          const { gifteeAccountID: t } = n,
            { isLoading: s, data: i } = (0, $.vo)(!0);
          if (s || i.is_not_member_of_any_group() || i.role() === Oe.PQ.sf)
            return null;
          const r = zt.b2
            .InitFromAccountID(t, u.TS.EUNIVERSE)
            .ConvertTo64BitString();
          return i
            .family_group()
            .members()
            .some((c) => c.steamid() === r && c.role() === Oe.PQ.sf)
            ? (0, e.jsxs)("div", {
                className: O().FamilyGiftNotice,
                children: [" ", (0, o.we)("#Cart_FamilyGift_Notice")],
              })
            : null;
        }
        var Qe = a(48366),
          Yn = a(48201),
          Ot = a(58162),
          Je = a(99412),
          Lt = a(71742),
          Jn = a(58732),
          at = a(72609),
          Fe = a(60659);
        function Xn() {
          const n = (0, M.j4)(),
            [t] = (0, Fe.fg)(),
            s = `${at.TS.STORE_CHECKOUT_BASE_URL}checkout/`;
          if ((0, Qe.c2)(n)) return `${s}?accountcart=1`;
          if ((0, Qe.sb)(n)) return `${s}?gidreplay=${n.gid}`;
          {
            const i = new URLSearchParams();
            return (
              i.append("cart", n.gid ?? ""),
              t?.accountid_giftee &&
                (i.append("purchasetype", "gift"),
                i.append("bIsGift", "1"),
                i.append("giftInfo", encodeURIComponent(JSON.stringify(t)))),
              `${s}?${i.toString()}`
            );
          }
        }
        var bt = a(29392);
        function $n() {
          return ["shopping_cart", "relevant_coupons"];
        }
        async function qn(n) {
          const t = gt.w.Init(bt.wi);
          t.Body().set_language((0, Je.sfN)(at.TS.LANGUAGE));
          const s = await bt.t8.GetRelevantCoupons(n, t);
          return s.BIsValid()
            ? s.Body().toObject()
            : (console.error("Failed to load relevant coupons"), {});
        }
        function es() {
          const n = (0, Ct.KV)();
          return (0, ht.I)(ts(n));
        }
        function ts(n) {
          return {
            queryKey: $n(),
            queryFn: async () =>
              ((await qn(n)).line_items ?? []).reduce(
                (s, i) => (
                  i.line_item_id && (s[i.line_item_id] = i.coupons ?? []), s
                ),
                {},
              ),
            enabled: at.iA.logged_in,
            placeholderData: () => ({}),
          };
        }
        var Ce = a(50829),
          ns = a(75975);
        function ss(n) {
          const {
              lineItem: t,
              storeItem: s,
              couponApplied: i,
              availableCoupons: r,
            } = n,
            [{ bDialogActive: l, strDialogTitle: c }, m] = d.useState({
              bDialogActive: !1,
            }),
            f = () =>
              m({
                bDialogActive: !0,
                strDialogTitle: (0, o.we)(
                  i ? "#Cart_CouponModify_Change" : "#Cart_CouponModify_Add",
                ),
              }),
            C = (0, je.C)(),
            R = (W) => {
              C.mutate({
                lineItemID: t.line_item_id,
                giftInfo: t.gift_info,
                lineItemFlags: { ...t.flags },
                gidCoupon: W,
              });
            };
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(as, {
                couponApplied: i,
                numAvailable: r.length,
                onModifyClick: f,
              }),
              (0, e.jsx)(rs, {
                active: l,
                title: c || (0, o.we)("#Cart_CouponModify_Add"),
                packageName: s.name,
                onRequestClose: () => m({ bDialogActive: !1 }),
                couponApplied: i,
                availableCoupons: r,
                onCouponChange: R,
              }),
            ],
          });
        }
        function as(n) {
          const { couponApplied: t, numAvailable: s, onModifyClick: i } = n,
            r = (0, o.we)(
              t ? "#Cart_CouponModify_Change" : "#Cart_CouponModify_Add",
            );
          return (0, e.jsx)("div", {
            className: Ce.CouponPickerRowGlow,
            children: (0, e.jsxs)("div", {
              className: Ce.CouponPickerRow,
              children: [
                t ? (0, e.jsx)(is, { ...t }) : null,
                (0, e.jsx)(it, {
                  children: (0, o.Yp)("#Cart_CouponAvailability", s),
                }),
                (0, e.jsx)("div", {
                  className: Ce.ModifyLink,
                  children: (0, e.jsx)(Ye, { onClick: i, children: r }),
                }),
              ],
            }),
          });
        }
        function is(n) {
          const { large_icon_url: t, title: s } = n;
          return (0, e.jsx)("img", {
            className: Ce.CouponRepresentation,
            src: t,
            title: s,
          });
        }
        function rs(n) {
          const {
              active: t,
              onRequestClose: s,
              packageName: i,
              title: r,
              couponApplied: l,
              availableCoupons: c,
              onCouponChange: m,
            } = n,
            [f, C] = d.useState(l?.gidcoupon || ""),
            R = () => {
              s(), m(f || Je.kFb);
            };
          return (0, e.jsxs)(Et.mt, {
            active: t,
            onDismiss: s,
            children: [
              (0, e.jsx)(v.Y9, { children: r }),
              (0, e.jsx)(v.a3, {
                children: (0, o.PP)(
                  "#Cart_SelectCouponToApply",
                  (0, e.jsx)("span", {
                    className: Ce.PackageName,
                    children: i,
                  }),
                ),
              }),
              (0, e.jsx)(os, {
                availableCoupons: c,
                couponApplied: l?.gidcoupon,
                couponSelected: f,
                onSelectedChange: C,
              }),
              (0, e.jsx)(v.CB, {
                onCancel: s,
                onOK: R,
                strOKText: (0, o.we)("#Button_Done"),
              }),
            ],
          });
        }
        function os(n) {
          const {
              availableCoupons: t,
              couponApplied: s,
              couponSelected: i,
              onSelectedChange: r,
            } = n,
            { data: l } = (0, L.g7)(),
            c = (l?.cart_items || []).map((m) => m.coupon_applied?.gidcoupon);
          return (0, e.jsx)("div", {
            className: Ce.CouponListContainer,
            children: t.map((m) =>
              (0, e.jsx)(
                ls,
                {
                  ...m,
                  applied: s === m.gidcoupon,
                  selected: i === m.gidcoupon,
                  inUse: c.includes(m.gidcoupon),
                  onSelected: (f) => r(f ? m.gidcoupon : ""),
                },
                m.gidcoupon,
              ),
            ),
          });
        }
        function ls(n) {
          const {
              applied: t,
              inUse: s,
              selected: i,
              large_icon_url: r,
              title: l,
              discount_pct: c,
              onSelected: m,
            } = n,
            f = !t && s,
            C = f ? void 0 : () => m(!i);
          return (0, e.jsxs)("div", {
            className: (0, g.A)(Ce.CouponListItem, f && Ce.Disabled),
            onClick: C,
            children: [
              (0, e.jsx)(cs, { checked: i, hidden: f }),
              (0, e.jsx)("img", { src: r, title: l, className: Ce.Image }),
              (0, e.jsxs)("div", {
                className: Ce.Info,
                children: [
                  t &&
                    (0, e.jsx)(it, {
                      children: (0, o.we)("#Cart_Coupons_Applied"),
                    }),
                  f &&
                    (0, e.jsx)(it, {
                      children: (0, o.we)("#Cart_Coupons_InUse"),
                    }),
                ],
              }),
              (0, e.jsxs)("div", {
                className: Ce.Discount,
                children: ["-", c, "%"],
              }),
            ],
          });
        }
        function it(n) {
          return (0, e.jsx)("div", {
            className: Ce.CouponInfoText,
            children: n.children,
          });
        }
        function cs(n) {
          const { checked: t, hidden: s } = n;
          return (0, e.jsx)("div", {
            className: (0, g.A)(Ce.Checkbox, s && Ce.Hidden),
            children: t && (0, e.jsx)(ns.Jl, {}),
          });
        }
        var Xe = a(2165),
          us = a(71460),
          ds = a.n(us),
          ms = a(11543),
          H = a.n(ms);
        function fs() {
          const [n, t] = d.useState(null);
          return (
            d.useEffect(() => {
              t((0, x.Vh)()?.rgUserCountryOptions);
            }, []),
            n
              ? (0, e.jsxs)("div", {
                  className: (0, g.A)(
                    H().EstimatedTotalFlex,
                    ds().UserCountrySelector,
                  ),
                  children: [
                    (0, e.jsx)("div", {
                      className: H().CartLabelText,
                      children: (0, o.we)("#Cart_UserCountrySelector"),
                    }),
                    (0, e.jsx)("div", {
                      className: H().CartValueText,
                      children: (0, e.jsx)(gs, { rgCountryOptions: n }),
                    }),
                  ],
                })
              : null
          );
        }
        function gs(n) {
          const { rgCountryOptions: t } = n,
            [s, i] = d.useState(u.TS.COUNTRY),
            r = d.useMemo(
              () => Object.keys(t).map((c) => ({ label: t[c], data: c })),
              [t],
            ),
            l = d.useCallback((c) => {
              c.data != u.TS.COUNTRY &&
                PresentCountryCurrencyChangeDialog(c.data == "help"),
                i(c.data);
            }, []);
          return (0, e.jsx)(v.m, {
            selectedOption: s,
            onChange: l,
            rgOptions: r,
            contextMenuPositionOptions: { bMatchWidth: !1 },
          });
        }
        function ps(n) {
          const { children: t } = n;
          return (0, e.jsx)(hs, { children: t });
        }
        function hs(n) {
          const { children: t } = n,
            s = (0, B.UI)(),
            { data: i } = es(),
            r = s.isLoading || !s.data,
            l = (0, Le.Qn)(),
            [c, m] = (0, Fe.fg)(),
            { sortedLineItems: f, bCartIncludesGifts: C } = d.useMemo(() => {
              const j = s?.data?.line_items || [],
                Q = j.some((se) => se.flags?.is_gift);
              return {
                sortedLineItems: j.sort((se, q) => {
                  const re = se.bundleid ?? se.packageid,
                    oe = q.bundleid ?? q.packageid;
                  return se.time_added == q.time_added
                    ? re < oe
                      ? 1
                      : -1
                    : se.time_added < q.time_added
                      ? 1
                      : -1;
                }),
                bCartIncludesGifts: Q,
              };
            }, [s?.data?.line_items]),
            R = (j) =>
              (0, e.jsx)(Cs, {
                ...j,
                availableCoupons: (i && i[j.lineItem.line_item_id]) || [],
              }),
            { data: W } = (0, L.g7)();
          return (0, e.jsxs)(Xe.wW, {
            validateCart: W,
            eDisplayType: Xe.WA.k_ECartDisplayType_FullPage,
            children: [
              (0, e.jsx)(Xe.ZZ, {}),
              (0, e.jsxs)(y.Z, {
                className: H().ShoppingCartCtn,
                children: [
                  (0, e.jsxs)(y.Z, {
                    className: H().ShoppingCartLeftCol,
                    children: [
                      r && (0, e.jsx)(Ot.UD, {}),
                      !!c &&
                        !!m &&
                        (0, e.jsx)(N.tH, {
                          children: (0, e.jsx)(K, {
                            children: (0, e.jsx)(Bn, {
                              giftInfo: c,
                              onChange: m,
                            }),
                          }),
                        }),
                      (0, e.jsx)(N.tH, {
                        children: (0, e.jsx)(Yn.p, {
                          lineItems: f,
                          cartValidation: W,
                          renderLineItem: R,
                        }),
                      }),
                      (0, e.jsx)(Xe.LP, { validateCart: W }),
                      !l &&
                        (0, e.jsxs)("div", {
                          className: H().ResponsiveShoppingCartSummary,
                          children: [
                            (0, e.jsx)(Ft, {
                              bCartIncludesGifts: C,
                              strEstimatedTotal:
                                W?.estimated_totals?.subtotal.formatted_amount,
                            }),
                            (0, e.jsx)(Wt, {}),
                          ],
                        }),
                      t &&
                        t({
                          cart: s.data,
                          validatedCart: W,
                          bCartIncludesGifts: C,
                        }),
                    ],
                  }),
                  (0, e.jsx)(y.Z, {
                    className: (0, g.A)(
                      H().ShoppingCartRightCol,
                      f?.length <= 2 && H().SmallCart,
                    ),
                    children: (0, e.jsxs)("div", {
                      className: H().CartRightColStickyCtn,
                      children: [
                        (0, e.jsx)(Ft, {
                          bCartIncludesGifts: C,
                          strEstimatedTotal:
                            W?.estimated_totals?.subtotal.formatted_amount,
                        }),
                        (0, e.jsx)(Wt, {}),
                        (0, e.jsx)(le, { cart: s.data, bMinimalDisplay: !0 }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          });
        }
        function Cs(n) {
          const {
              lineItem: t,
              storeItem: s,
              validatedItem: i,
              availableCoupons: r,
              children: l,
            } = n,
            [c] = (0, Fe.Ez)(),
            m = c === "gifts" && !!t.flags.is_gift,
            f = !!r.length;
          return (0, e.jsxs)(y.Z, {
            children: [
              (0, e.jsxs)(Ot.Rz, {
                children: [
                  l,
                  m && (0, e.jsx)(On, { storeItem: s, lineItem: t }),
                ],
              }),
              f &&
                (0, e.jsx)(ss, {
                  storeItem: s,
                  lineItem: t,
                  couponApplied: i?.coupon_applied,
                  availableCoupons: r,
                }),
            ],
          });
        }
        const Ft = (0, N.Nr)(function (t) {
          const { strEstimatedTotal: s, bCartIncludesGifts: i } = t,
            { bButtonDisabled: r, nextStep: l, bGuestAvailable: c } = wt(i);
          return (0, e.jsxs)("div", {
            className: H().CartSummaryCtn,
            children: [
              (0, e.jsx)(N.tH, { children: (0, e.jsx)(fs, {}) }),
              (0, e.jsxs)("div", {
                className: (0, g.A)(
                  H().EstimatedTotalFlex,
                  H().SummaryMarginBottom,
                ),
                children: [
                  (0, e.jsx)("div", {
                    className: H().CartLabelText,
                    children: (0, o.we)("#Cart_EstimatedTotal"),
                  }),
                  (0, e.jsx)("div", {
                    className: H().CartValueText,
                    children: s,
                  }),
                ],
              }),
              (0, e.jsx)("div", {
                className: (0, g.A)(H().CartNoteText, H().SummaryMarginBottom),
                children: (0, o.we)("#Cart_Note_SalesTax"),
              }),
              (0, e.jsxs)(N.wC, {
                children: [
                  (0, e.jsx)(Ut, {
                    bDisabled: r,
                    nextStep: l,
                    bGuestOption: c,
                  }),
                  (0, e.jsx)(Ss, { disabled: r || i }),
                  (0, e.jsx)(xs, { bDisabled: r }),
                ],
              }),
            ],
          });
        });
        function wt(n) {
          const t = (0, B.UI)(),
            s = (0, L.g7)(),
            i = s.isSuccess && s.data.cart_items.every((Q) => !Q.errors),
            [r, l] = (0, Fe.Ez)(),
            c = (0, Qe.EJ)(),
            m = (0, L.p2)(s.data),
            C = (0, L.MT)(s.data) || m,
            R =
              t.isSuccess &&
              t.data.line_items.some(
                (Q) =>
                  Q.flags?.is_gift &&
                  !Q.gift_info?.accountid_giftee &&
                  (!Q.gift_info?.email_giftee ||
                    !v.pd.validateEmail(Q.gift_info?.email_giftee)),
              );
          let W =
            u.iA.logged_in &&
            ((r === "initial" && !n && !i) ||
              (t.isSuccess && t.data.line_items.length == 0));
          W = W || (r === "gifts" && (!i || R));
          let j;
          return (
            n && r == "initial" && !c
              ? (j = "gifts")
              : u.iA.logged_in
                ? (j = "checkout")
                : (j = "login"),
            { bButtonDisabled: W, nextStep: j, bGuestAvailable: C }
          );
        }
        function vs(n) {
          const {
            bButtonDisabled: t,
            nextStep: s,
            bGuestAvailable: i,
          } = wt(n.bCartIncludesGifts);
          return (0, e.jsx)(Ut, { bDisabled: t, nextStep: s, bGuestOption: i });
        }
        function Ut(n) {
          const { bDisabled: t, nextStep: s, bGuestOption: i } = n,
            r = Xn(),
            l = (0, w.W6)(),
            [c, m] = (0, Fe.Ez)(),
            f = (0, M.j4)();
          let C = Je.kFb;
          (0, Qe.kx)(f) && (C = f.gid);
          const R = () => {
              switch (s) {
                case "login":
                  if (C != Je.kFb && i) {
                    const Q =
                      u.TS.STORE_CHECKOUT_BASE_URL +
                      "checkout?purchasetype=self&cart=" +
                      C;
                    (0, z.pZ)(Q, i);
                  } else (0, z.vg)();
                  break;
                case "gifts":
                  m("gifts"), l.push(Jn.B.ShoppingCartGifts());
                  break;
                case "checkout":
                  location.href = r;
                  break;
                default:
                  (0, Lt.z_)(s, "unhandled step");
              }
            },
            W = As(s),
            j = (0, g.A)(
              H().CartSummaryBtn,
              H().SummaryMarginBottom,
              H().Button,
            );
          return (0, e.jsx)(v.jn, {
            disabled: t,
            className: j,
            onClick: R,
            children: W,
          });
        }
        function Wt() {
          const n = `${u.TS.STORE_BASE_URL}subscriber_agreement/`;
          return (0, e.jsxs)(y.Z, {
            className: H().LicenseContextCtn,
            children: [
              (0, e.jsx)("img", {
                src: `${u.TS.IMG_URL}/checkout/computer.png`,
                alt: "",
              }),
              (0, e.jsxs)("div", {
                children: [
                  (0, e.jsx)("div", {
                    className: H().LicenseTitle,
                    children: (0, o.we)("#Cart_LicenseContextTitle"),
                  }),
                  (0, e.jsx)("div", {
                    className: H().LicenseLink,
                    children: (0, o.PP)(
                      "#Cart_LicenseContextLink",
                      (0, e.jsx)("a", {
                        href: n,
                        children: (0, o.we)("#Cart_LicenseContextSSA"),
                      }),
                    ),
                  }),
                ],
              }),
            ],
          });
        }
        function xs(n) {
          const { bDisabled: t } = n,
            s = (0, $.vo)(),
            i = (0, Qe.sI)(),
            r = (0, x.F$)(),
            l = (0, $.Ke)(s.data?.family_groupid(), i, Oe.IG.DP),
            c = () => {
              l.mutate(void 0, {
                onSuccess: () => {
                  location.href = `${u.TS.STORE_BASE_URL}account/familymanagement?tab=requests`;
                },
              });
            };
          return r
            ? (0, e.jsx)(v.$n, {
                disabled: t,
                className: (0, g.A)(
                  H().CartSummaryBtn,
                  H().SummaryMarginBottom,
                ),
                onClick: c,
                children: (0, o.we)("#Cart_DeclinePurchaseRequest"),
              })
            : null;
        }
        function As(n) {
          return n == "login"
            ? (0, o.we)("#Cart_ContinueButton_Payment")
            : n == "gifts"
              ? (0, o.we)("#Cart_ContinueButton_Gifts")
              : n == "checkout"
                ? (0, o.we)("#Cart_ContinueButton_Payment")
                : ((0, Lt.z_)(n, "unhandled step"), "");
        }
        function Ss(n) {
          const { disabled: t } = n,
            i = (0, $.vo)().data?.family_groupid(),
            r = (0, $.Yc)(i, u.iA.country_code),
            [l, c] = (0, x.S0)(),
            [m, f] = d.useState(!1),
            C = () => {
              !t &&
                !m &&
                (f(!0),
                r.mutate(void 0, {
                  onSuccess: () => {
                    window.location.assign((0, $.Vo)(i));
                  },
                }));
            };
          return !l && c != x.Mn.k_ENonGiftableItemPresent
            ? null
            : (0, e.jsxs)("div", {
                className: (0, g.A)(
                  H().RequestPurchaseCtn,
                  H().SummaryMarginBottom,
                ),
                children: [
                  (0, e.jsx)(v.jn, {
                    disabled: t || m || !l,
                    className: (0, g.A)(H().CartSummaryBtn),
                    onClick: C,
                    children: (0, o.we)("#Cart_RequestPurchase"),
                  }),
                  l &&
                    (0, e.jsx)("div", {
                      children: (0, o.we)("#Cart_RequestPurchaseExplanation"),
                    }),
                  c === x.Mn.k_ENonGiftableItemPresent &&
                    (0, e.jsx)("div", {
                      children: (0, o.we)(
                        "#Cart_RequestPurchaseNonGiftableItems",
                      ),
                    }),
                ],
              });
        }
        var _s = a(32593);
        function Ps(n) {
          const t = Ht(),
            s = Rs();
          (0, ee.YM)();
          let i = null;
          return (
            t
              ? s.type == "replay"
                ? (i = (0, e.jsx)(Ds, { cartID: s }))
                : (i = (0, e.jsx)(js, { cartID: s, ...n }))
              : (i = (0, e.jsx)("div", {
                  className: Y()(H().ShoppingCartPage, H().CartPagePlaceholder),
                  children: (0, e.jsx)(P.t, {
                    position: "center",
                    msDelayAppear: 250,
                  }),
                })),
            (0, e.jsxs)(e.Fragment, { children: [(0, e.jsx)(Is, {}), i] })
          );
        }
        function Is() {
          return (0, k.Pt)(), (0, $.vo)(), null;
        }
        function js(n) {
          const { cartID: t, initialStep: s = "initial" } = n,
            [i, r] = d.useState(s),
            c = (0, B.UI)()?.data?.line_items.length || 0,
            m = ys(i, c);
          return (0, e.jsx)(rt, {
            cartID: t,
            title: m,
            step: i,
            onStepChange: r,
            children: ({ cart: f, validatedCart: C, bCartIncludesGifts: R }) =>
              (0, e.jsxs)(e.Fragment, {
                children: [
                  (0, e.jsx)(N.tH, {
                    children: (0, e.jsx)(Ns, {
                      isCartEmpty: !f || f.line_items.length === 0,
                      cart: C,
                      bCartIncludesGifts: R,
                    }),
                  }),
                  (0, e.jsx)(N.tH, {
                    children: (0, e.jsx)(Ie, { cart: f, validatedCart: C }),
                  }),
                ],
              }),
          });
        }
        function Ds(n) {
          const { cartID: t } = n;
          return u.iA.logged_in
            ? (0, e.jsx)(rt, {
                cartID: t,
                title: (0, o.we)("#Cart_Replay_SavedCart"),
                step: "initial",
                onStepChange: () => {},
                children: () =>
                  (0, e.jsx)(K, {
                    children: (0, o.we)("#Cart_Replay_Instructions", 72),
                  }),
              })
            : (0, e.jsx)(z.Cg, {});
        }
        function rt(n) {
          const {
              children: t,
              cartID: s,
              title: i,
              step: r,
              onStepChange: l,
              ...c
            } = n,
            m = d.useRef(null);
          return (
            d.useEffect(() => {
              m.current && m.current.NavTree()?.Activate(!0);
            }, []),
            (0, e.jsx)(te.Ay, {
              controller: "cart",
              method: "display",
              submethod: r,
              children: (0, e.jsxs)(Fe.iZ, {
                cartID: s,
                step: r,
                setStep: l,
                ...c,
                children: [
                  (0, e.jsx)(Ts, {}),
                  (0, e.jsxs)(y.Z, {
                    className: H().ShoppingCartPage,
                    navRef: m,
                    children: [
                      (0, e.jsx)(Es, { step: r, title: i }),
                      (0, e.jsx)("div", {
                        className: H().ShoppingCartHeader,
                        children: i,
                      }),
                      (0, e.jsx)(ps, { children: t }),
                    ],
                  }),
                ],
              }),
            })
          );
        }
        function Es(n) {
          const { step: t, title: s } = n,
            i = Gs(t);
          return (0, Le.Qn)()
            ? null
            : (0, e.jsxs)("div", {
                className: H().ShoppingCartBreadcrumbs,
                children: [
                  (0, e.jsx)("a", {
                    href: u.TS.STORE_BASE_URL,
                    children: (0, o.we)("#Cart_Bradcrumb_Home"),
                  }),
                  " ",
                  i,
                  " ",
                  (0, e.jsxs)("span", {
                    className: H().CurrentBreadcrumb,
                    children: ["> ", s],
                  }),
                ],
              });
        }
        function Ht() {
          const [n, t] = d.useState(!1);
          return (
            d.useEffect(() => {
              n || (0, _s.U)().then(() => t(!0));
            }, [n]),
            n
          );
        }
        function ys(n, t) {
          return n === "gifts"
            ? (0, o.we)("#Cart_GiftOptions")
            : t > 0
              ? (0, o.Yp)("#Cart_YourShoppingCartLineItems", t)
              : (0, o.we)("#Cart_YourShoppingCart");
        }
        function Gs(n) {
          return n === "gifts"
            ? (0, e.jsxs)(e.Fragment, {
                children: [
                  "> ",
                  (0, e.jsx)("a", {
                    href: u.TS.STORE_BASE_URL + "cart",
                    children: (0, o.we)("#Cart_YourShoppingCart"),
                  }),
                ],
              })
            : null;
        }
        function Ts(n) {
          const t = Ms();
          return (0, e.jsx)("div", {
            className: H().BackgroundImage,
            style: t ? { backgroundImage: `url("${t}")` } : null,
          });
        }
        function Ms() {
          const n = d.useRef(""),
            t = (0, B.UI)(),
            { data: s } = (0, L.g7)(),
            i = !n.current;
          let r = ne.sc,
            l = _.c6.Ep;
          if (i && s !== void 0) {
            const m = t.data?.line_items || [],
              f = m.length
                ? m.reduce((C, R) => (C.time_added > R.time_added ? C : R))
                : null;
            (r = f?.bundleid || f?.packageid || ne.sc),
              (l = r === f?.bundleid ? _.c6.xO : _.c6.RD);
          }
          const [c] = (0, ee.G6)(r, l, L.xz);
          if (c && i) {
            const m = J.A.Get(),
              f = c.GetIncludedAppIDs();
            for (const C of f) {
              const R = m.GetApp(C);
              if (!R) continue;
              const W = R.GetAssets().GetPageBackgroundURL();
              if (W) {
                n.current = W;
                break;
              }
            }
          }
          return n.current;
        }
        function Rs() {
          const n = (0, w.zy)();
          return (0, d.useMemo)(
            () =>
              (0, M.VF)(
                new URLSearchParams(n.search).get("gidreplay") ?? void 0,
              ),
            [n.search],
          );
        }
        function Ns(n) {
          const { isCartEmpty: t, cart: s, bCartIncludesGifts: i } = n,
            r = () => (window.location.href = u.TS.STORE_BASE_URL);
          return (0, e.jsxs)(e.Fragment, {
            children: [
              !t && (0, e.jsx)(h, { cart: s }),
              (0, e.jsxs)(y.Z, {
                "flow-children": "row",
                className: H().CartFooter,
                children: [
                  (0, e.jsxs)("div", {
                    className: H().NavButtons,
                    children: [
                      (0, e.jsx)(v.$n, {
                        onClick: r,
                        className: H().Button,
                        children: (0, o.we)("#Cart_ContinueShopping"),
                      }),
                      (0, e.jsx)(vs, { bCartIncludesGifts: i }),
                    ],
                  }),
                  !t && (0, e.jsx)(Bs, {}),
                ],
              }),
            ],
          });
        }
        function Bs() {
          const n = (0, I.Z)(),
            t = () => n.mutate();
          return (0, e.jsx)(Ye, {
            onClick: t,
            children: (0, o.we)("#Cart_RemoveAll"),
          });
        }
      },
      34633: (F) => {
        F.exports = {
          strMaxCartPartResponsiveWidth: "840px",
          CartCard: "tVR7nCVynuzImpvF9viMI",
        };
      },
      56420: (F) => {
        F.exports = {
          narrowWidth: "500px",
          SnoozeContainer: "_1DsumfIa3MlkzUV9EXY5W9",
          SnoozeZ: "_2n0EiKMGRP-r_BI5tDtttu",
          none: "T3Fb5KTXwIHM2B-ThTvEs",
          Medium: "_1iYPlsChibPe7Ga9B3c5Wm",
          Large: "_3BESV4eFnr4EnaSaJSdk6T",
          Dim: "rpZ9bKyFXYvNQvgtKn5GV",
          Z1: "_2hnF3M_l4xdIdQ4CkN7LYB",
          Z2: "VmQTOrz5MPOWte5C9K7YS",
          Z3: "_29mtadjX8N6pRn5TX1nA0o",
          hoverParent: "_3-8cByP2koYzHwgZqjvFA",
          animating: "_2rXc7hLg6bohWZ-JpRcYEB",
          Snoring: "_38wIVgo1WjvGqL5ZsmpmiX",
        };
      },
      18828: (F) => {
        F.exports = {
          "duration-app-launch": "800ms",
          narrowWidth: "500px",
          statusAndName: "_4ZTzGZ5TTgFyfw1DcXLXS",
          threeLines: "_1oYSXGjBe7QctQ1ikLpCMm",
          blocked: "VTxPkslK1CSpKNFMgKg7d",
          richPresenceLabel: "_2Ri005Wg_uXDTa71kdRbcN",
          playerName: "nOdcT-MoOaXGePXLyPe0H",
          playerNickname: "_2saJTAocZ9TnYXTGvnqUMC",
          EllipsisName: "_1valFgvEGxquAi_2IrAKqO",
          DisableColoring: "_3oDmKGyTBBm7i4DULjwYcC",
          playerNicknameBracket: "_3XEmWmfQy7gbYJ4KJ1N9tp",
          richPresenceContainer: "_3sxE7F1LV2IcSX68YsH9dI",
          gameName: "_1cB0qtF0paHWWyj1XNcnbG",
          dropPadding: "_3tEPYJ6xjX0d6akU-hhrs4",
          NoMask: "_2dAj6KfWRAxoYPr6tgXd6t",
          twoLine: "_1BbOegz8bYL7iPzgYpOgQI",
          DNDContainer: "_3IswZMeeD6ORStUjgv6Xh8",
          partyBeaconJoin: "_3BnDsXrefFJrt_8frF2wvB",
          hidePersona: "_3ZJkOzmqed_i-p74uF3hus",
          compactView: "_3bbRZyUiK-bfc5Qov6xukI",
          noContextMenu: "_1JE5G7_FNm2SRDEEnOWMVv",
          gameIsPrivateIcon: "_2gBKQXiTBLjeVVaqvc5QVh",
          PendingPersona: "_2sxXnGfkPxNgR6Lk1-SmfQ",
        };
      },
      70342: (F) => {
        F.exports = {
          "duration-app-launch": "800ms",
          narrowWidth: "500px",
          PersonaStatusIcon: "KxAI_M9gWx3OnKSshHOs6",
          MobilePhoneIcon: "_1iRFj5lJrMqMnRb3GZYPSw",
          SteamDeckIcon: "_2oLqcfqHHKKAK0WfzjXMg_",
          VRIcon: "_368tz9TSOLGiG2mNMLScMz",
        };
      },
      43047: (F) => {
        F.exports = {
          narrowWidth: "500px",
          avatarHolder: "nibodjvvrm86uCfnnAn4g",
          avatarStatus: "_3xUpb5DWXPFNcHHIcv-9pe",
          avatar: "_3h-QRJGxnVOIExtHD1R0f2",
          avatarFrame: "X_mJE4BYV5StDPwZhSiAu",
          avatarFrameImg: "_3fM0F85j3aWVzr4RJM9-eu",
        };
      },
      12916: (F) => {
        F.exports = {
          EventTimeSection: "_3HyTVTASSmLacvaM964sgu",
          EventTimeTitle: "_2lG5hFYhu9PGPn6RoFeQOL",
          EventVisibilityItem: "_1she-lvNiCP3ASjTnl4q7x",
          EventEditorInputPaneContainer: "_1fCy4cz5Hyj9wDivcVseuc",
          TimeWidth: "_3JGsBe8Ou5QGqfihv0OPed",
          EventPublishTimeCtn: "_2QIVvn2p9gUwsAlifi-nkM",
          DateWidth: "_2P2kw0vHZogg7Ny7cAjQBo",
          PacificTimeHint: "_18FxDrpsfO5Tt8EFui49hV",
          TimeZone: "-x3Rw6W2fJfWRMs7vKr1I",
          ClearButton: "TzhaDn0jN2ILks403xqXQ",
          InputBorder: "_1_H1sN2GVTzxSaz55gv03s",
          TimeBlock: "_2xLBsAMYVDoygyWbl2YIzI",
          TimeRowContainer: "BWmgg29ZeDbO6oj7Z1U7T",
          TimeRowDropDown: "_3ECiyuGLUqPzuS1hKCdfDm",
          EndDateAmountCtn: "_1BIlZEGSO_4tw5Lmc1Kkbf",
          EndRound: "jwuNowbLB28M6nkqFkF_C",
          VisibilityItemList: "_3B0QM3cOEqER2AD2Y85NFy",
          VisibilityItems: "_1WleIEEiF-9nJ57tLWkRmS",
          EventEditorVisibilityCtn: "_4gWwydbAbp2t1NCeW9LLV",
          DateErrorCtn: "_1Ao_g72kBAdoOo0lGUG7Mr",
        };
      },
      45803: (F) => {
        F.exports = {
          CartCreatorCtn: "_2HG7VOroS8aHSg-W3fPyTt",
          Title: "_307GrwtjhKkXh5dUC5KjUv",
          Description: "_3YGQuryhG_j0UPSIaC_7ul",
        };
      },
      98972: (F) => {
        F.exports = {
          strMaxCartPartResponsiveWidth: "840px",
          CartCard: "_3s8SimT1ZQwPeXXdDFPQLK",
          TradingCardContainer: "_2haWAmlu7TDqdL95bf4G8g",
          EarnedMessage: "_2p5xYmfnLWerjNkmBDfZXp",
          Right: "_18eO4-XadW5jmTpgdATkSz",
          ProgressSection: "_2M_5i3fmNkCv4pCoMmk1Os",
          Progress: "lf5WnbH_ohSVbUnvd3Nf2",
          ProgressRail: "_3TjWhPYAqbU3Hrzm6Iq6il",
          IneligbleList: "_1r6njhPeny9XyTQKt2-__7",
        };
      },
      50169: (F) => {
        F.exports = {
          strMaxCartPartResponsiveWidth: "840px",
          CartCard: "qp08vFwlN2mRCsja6T_-g",
          CartUpsellArea: "_2rkDlHZ2yi-tFtDk4-CC4U",
          CartUpsellTitle: "_2dxsG5kVzdAeX8R0mGOiV8",
          UpsellRow: "_24yiwSg4qoT0NRBSlWoUXw",
          Specials: "_2-sCaPlOkBP6wsNVrDNHvZ",
          Loading: "pUmkjugwizSD0CopYMP1P",
          DailyDeals: "rpifv8i-Dj8KDO5qKGvWG",
          Spotlights: "udcFpqnwSDcMv_byU2oQc",
        };
      },
      50829: (F) => {
        F.exports = {
          CouponPickerRowGlow: "_2ETXQ6ojtTNSbACqQ2o0Yv",
          CouponPickerRow: "_3wfeHGptWCHP2ctMNwtAr8",
          ModifyLink: "_3JmdOP-Eoam3irQDjytJ9V",
          CouponRepresentation: "_1_LYYN59DADLVYtqwZYjSm",
          PackageName: "_3L1DF5dTgbrn6BlQIgv8c-",
          CouponListContainer: "ir0tpMmQQazulD77PH8DZ",
          CouponListItem: "_3pw4q_MAfhjbHBkGJVrYyz",
          Disabled: "_1GFD8zuMK_JuYQUQhOo4zz",
          Image: "_2gY_V_NV2khWDAjW5A9Nmd",
          Info: "_1Je1cc8-t1TZpSr6VwGwbN",
          Discount: "_3KPbt6pUHnz1M3cEORSHvV",
          CouponInfoText: "FicMnlG4nr7BEujcPpbGp",
          Checkbox: "_265qJZDbyz2JxqvT15KpRr",
          Hidden: "_21w270Ne6__P31083H0FFV",
        };
      },
      83934: (F) => {
        F.exports = {
          GiftFormDivider: "_1mAU7zkVivAPGFPI3maedz",
          GiftFormSection: "_1tguxhk732P4gi865oLjSE",
          SignInLink: "_3PPF6YhUS0OHDhePQ8H8GV",
          FormTextLabel: "_1TulC_KnETCU3Ks4Y1hQ70",
          FullWidth: "_1NKGWg4uzU98wSFcgJ4tz1",
          FormTitle: "NYKHMrCLjXgs0HgP8G8ei",
          RedText: "_1Ja8Ra-vrBec1_MVpbvrL",
          GiftNoteInput: "_3wPcWGmcqJzbUXHRTPYsXa",
          GiftRecipientPickerModal: "_3R_gixvbcQCJxxRTmCvpJw",
          GiftFriendsListCtn: "_321Woxp4ONn3k90_NLayE0",
          GiftRecipientPickerFormCtn: "_2SDa5ofHp4X7qHQE540cIS",
          GiftFriendsInput: "_1OuNJQWR-7lSdtgyJf69uF",
          GiftRecipientSaveBtn: "_18bhpboMEhi47IMCRQt-2s",
          GiftPickerFriendBlock: "_3qPIR-iXdtj8oUzr8cH1Ey",
          FriendAvatar: "_1AeyMd0eAcDoRyiR0KkOwC",
          Focused: "_11n414df5ioq8YLpNJuHpM",
          Disabled: "_3jwhGaqW0tVwkzg9eXjJWZ",
          Selected: "_1Wx7OLK94f5EXTrnc8MqUs",
          PersonaName: "_1ki9msaNQoGECm27Yz5YGX",
          FriendsGiftLabel: "_3FPeG6FVHnapQP5UKhrMvC",
          OwnsGame: "YK5pj3LG0Q81ZMKdO9Mcc",
          OnWishlist: "_28yZdTwE0gz4jOV6olyg7F",
          GiftFormRecipient: "_2bnjZDtqxcOZI3eITR0MuL",
          LinkButton: "_12zYFuKO2U-1QfeVxlGfwF",
          GiftDatePicker: "VZsqgN_QGXQcRsD6OgscT",
          ScheduleGiftBtn: "_3gADDjjeuuq4YHM8O1IeiQ",
          GiftScheduleIcon: "_742UkQg_TM_Sdf4w5Ye2a",
          GiftRadioLabel: "_3IlfjNwkM2GwzkZyD0llva",
          GiftRadioRow: "RMDo0KSLaIgeffA12m9Ln",
          GiftSignatureInput: "_3tP7DCVH8b-Vyu5ig2fTAk",
          ScheduleError: "_3y4BqvBTwDLWUl1TCNqWp9",
          LoadingError: "_35a12Zg31sBh2Lj4ClSTRz",
          GamepadTimePickerRow: "_2EZzsNeqqWMVcuzawVZc56",
          TimezoneDisplay: "_1zgxnwJ3wM_SzElTI5DOyw",
          FamilyGiftNotice: "_1B5Eew-T7ehFeKRYrle_-l",
          GiftNonFriendWarning: "_2RHycas9bwPdkNJ4QSaMnr",
          GiftEmailInput: "vsYKgPb-InpQZyJ4AoP2m",
          GiftEmailWarnings: "_37q9WvJ0H38LXVjg2BQI1w",
        };
      },
      11543: (F) => {
        F.exports = {
          strMaxCartPartResponsiveWidth: "840px",
          CartCard: "_2w0ZEap3hR1c0K0_DxJDdN",
          ShoppingCartPage: "_22xtsolKcQit92o-LBeRWD",
          CartCheckboxNoMargin: "_1S9a0tZYJv0d4x3-DrxbuS",
          CartPagePlaceholder: "_3Hr6r9HTC7jT51-4vf_X8B",
          ShoppingCartHeader: "bCGAC51za6R_thjPd7_vw",
          ShoppingCartCtn: "_1jqUY_WcPgZnIOE-d9x7wc",
          ShoppingCartLeftCol: "_17GFdSD2pc0BquZk5cejg8",
          ShoppingCartRightCol: "_3HIve50RR17shqpJqmrUps",
          LoadingThrobber: "eDdFpOTz0O9U7xBshZJUx",
          CartRightColStickyCtn: "_1bCdGv5zX6cYDovFfcBfdg",
          CartSummaryCtn: "_2bIzQo07mxubFvscA8RIA8",
          EstimatedTotalFlex: "_2DjadWLFH3keW9rGWZKxSk",
          SummaryMarginBottom: "qV80oahDZsbXiS6lIDLND",
          LicenseContextCtn: "jY9l4aHTdQLHeTWfPonTr",
          LicenseTitle: "p8XFGmprI4snkQjm11Pf2",
          LicenseLink: "_2Wg3oyIvxKKM_o6q7rXdc5",
          ResponsiveShoppingCartSummary: "dpVdC9qAMjdzrN7VWFria",
          RequestPurchaseCtn: "_2jup-7OkSAzTBG-K9r9OCX",
          CartNoteText: "_31DQWsrdb_9oV-vMOaaPqI",
          CartLabelText: "_3ayrhzEm-T_IRhWeQ4HFxr",
          CartValueText: "_2WLaY5TxjBGVyuWe_6KS3N",
          ShoppingCartBreadcrumbs: "_2FKdJT3nRLNX_ue4Zj-qdK",
          CurrentBreadcrumb: "_3TtUDn-J9j6rkwHqjT-i4Y",
          CartFooter: "_1Sdz1qnoKoD9eEPpC340Yj",
          NavButtons: "pp99Du2IR2EJ9UsjKcrRQ",
          Button: "_1rk1xUIAHMcMMDm4jz3MOM",
          CartSummaryBtn: "_1OKOHubCISYxpyNw0_nSgh",
          BetaNotice: "_1DTyDw3G0f4gmhjAvr_MGb",
          Text: "I4Bz94kh1lGOH1KrPzxzk",
          BackgroundImage: "FaiD8bJRAZ-HoNo0VvLOO",
        };
      },
      71460: (F) => {
        F.exports = { UserCountrySelector: "_1G8JdfmCwhonn-pZk-tfwP" };
      },
      44894: (F, X, a) => {
        "use strict";
        a.d(X, { A: () => e });
        const e =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAcJJREFUeNqkUz1PAkEQfStggjESejU0GozlGqn8SGywkYIYY0IsaLCwIBTQUN5fMLGm8S8QSWwslVAYjAlUBEJDhCgWwp3nzN6eHqIVl8zN7rx5b+dm9oRt25jlmcOMj59f10JAkPcBcXIGWdECyqYn6TfGdZ9S9d4K4gQYx4WCtJzE+G/sKJudwpQABUGnGSf5vKzX60jmctL8SYzz+iCdls1mEzuplMIsLSC4iSUh1ClUlpHIZGStVkM0GsVNqVRlIJZIyG63i1AohMdKpUrZRQqXz4j7LWA7VSiR/WRSNhsNRRgOh+i02wgGg3hrtRSZelLmI6cExs7nKJGVtTX50uupMn0+H157PUWmZpYDXLoWUFPo6MC87jivx4MBFtxOWZYS11VipNdT98DWDVsPh2XQNLFIMdc4xpg9OZ3JMdIpRowSXVKt36+yuXvGxn+N0XS+3zj0kG+JSPEi261H5FCLmN9lUyNWyZ+Qag54eA6Hbfa8j1A88g+2qrlqCkKIZdovbAG7m8D5E3B5D9xR7IPsk/u7DextABd14OrBwd6J23YFligQ0IPwXE7lbedXUAPya5yHMiLuq5j1d/4SYAAj3NATBGE4PgAAAABJRU5ErkJggg==";
      },
    },
  ]);
})();

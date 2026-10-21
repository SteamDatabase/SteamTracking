/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [67072],
    {
      91354: (V, de, u) => {
        "use strict";
        u.d(de, { c: () => re });
        var e = u(7850),
          h = u(64238),
          f = u.n(h),
          O = u(16412),
          J = u(36118),
          C = u(89206),
          W = u.n(C);
        function re(R) {
          const { bExpanded: T, setExpanded: r } = R;
          return (0, e.jsx)(O.wl, {
            className: f()(C.ExpandRowButton, T && C.Selected),
            onClick: () => r(!T),
            children: (0, e.jsx)(J.b8_, { direction: "down" }),
          });
        }
      },
      58679: (V, de, u) => {
        "use strict";
        u.d(de, { ff: () => G, iM: () => $, iV: () => xe, pC: () => ue });
        var e = u(7850),
          h = u(90626),
          f = u(20803),
          O = u.n(f),
          J = u(36118),
          C = u(18210),
          W = u(2289),
          re = u(36707),
          R = u(46943),
          T = u(76559),
          r = u(4874),
          L = u(35098),
          x = u(42993),
          ce = u(58612),
          te = u(93125),
          ne = u(9852),
          k = u(53107),
          U = u(98609),
          Y = u(99412);
        function j(B) {
          return (0, e.jsx)(J.d1w, {});
        }
        function N(B) {
          return (0, e.jsx)(J.Bir, {});
        }
        function $(B) {
          return (0, e.jsx)("div", {
            className: (0, re.A)(f.RoleIcon, B.className),
            children: B.role == W.PQ.sf ? (0, e.jsx)(N, {}) : (0, e.jsx)(j, {}),
          });
        }
        function xe(B) {
          const { steamid: b } = B,
            w = (0, L.js)(b),
            v = (0, ce.M8)(),
            A = (0, ne.T)(),
            E = v.data?.get(new T.b(b).GetAccountID()),
            Z = A.data?.preferences().parenthesize_nicknames();
          return (0, e.jsxs)(e.Fragment, {
            children: [
              w.data?.m_strPlayerName || "\xA0",
              " ",
              Z &&
                E &&
                (0, e.jsxs)("span", {
                  className: f.playerNickname,
                  children: ["(", E, ")"],
                }),
            ],
          });
        }
        function X(B) {
          const { role: b, persona: w, isSelf: v } = B;
          let A = B.size || "Large";
          const E = (0, ce.M8)(),
            Z = (0, ne.T)(),
            z = E.data?.get(w.GetAccountID()),
            pe = Z.data?.preferences().parenthesize_nicknames();
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsxs)("div", {
                className: f.ProfileLink,
                children: [
                  (0, e.jsx)(R.i8, {
                    className: f.Avatar,
                    persona: w,
                    size: A,
                    statusPosition: "right",
                  }),
                  (0, e.jsx)(te.D, {
                    className: f.PlayerName,
                    bIsSelf: v,
                    bHideStatus: !1,
                    bHidePersona: !1,
                    bParenthesizeNicknames: pe,
                    bCompactView: !1,
                    persona: w,
                    strNickname: z,
                    eFriendRelationship: Y._UC,
                    bEllipsisName: !0,
                  }),
                ],
              }),
              (0, e.jsxs)("div", {
                className: f.RoleAndIcon,
                children: [
                  (0, e.jsx)($, { className: f.ProfileRoleIcon, role: b }),
                  (0, e.jsx)("div", {
                    className: f.RoleName,
                    children: (0, C.we)(`#FamilyManagement_Role_${b}`),
                  }),
                ],
              }),
            ],
          });
        }
        function ue(B) {
          const b = (0, h.useContext)(r.IN);
          return b.errorMessage
            ? (0, e.jsx)("div", {
                className: f.FamilyErrorDisplay,
                children: b.errorMessage,
              })
            : null;
        }
        function G(B) {
          const { persona: b, role: w, invitePending: v } = B,
            E = (0, x.LH)() == b.GetSteamIDAsString();
          return (0, e.jsxs)("div", {
            className: f.FamilyMemberStatus,
            children: [
              (0, e.jsx)(X, { role: w, persona: b, isSelf: E }),
              v &&
                (0, e.jsx)("div", {
                  className: f.InvitePending,
                  children: (0, C.we)("#FamilyManagement_InvitePending"),
                }),
              E &&
                (0, e.jsx)("span", {
                  className: f.MeBadge,
                  children: (0, C.we)("#FamilyManagement_Me"),
                }),
            ],
          });
        }
        function H(B) {
          const { steamID: b, role: w } = B,
            v = usePlayerSummary(b);
          useQuerySetMessageOnErrorEffect(
            v,
            "#FamilyManagement_ErrorLoadFamilyGeneric",
          );
          const A = useCallback(
            (E) => {
              let Z = `${Config.COMMUNITY_BASE_URL}profiles/${b}`;
              OpenLinkInNewWindow(E, Z);
            },
            [b],
          );
          return v.isSuccess
            ? jsx(Panel, {
                className: classnames(styles.FamilyMemberRow, styles.InfoRow),
                onActivate: A,
                children: jsx(G, { persona: v.data, role: w }),
              })
            : null;
        }
      },
      93125: (V, de, u) => {
        "use strict";
        u.d(de, { A: () => B, D: () => H });
        var e = u(7850),
          h = u(90626),
          f = u(75844),
          O = u(18210),
          J = u(99412),
          C = u(5858),
          W = u(36707),
          re = u(56420),
          R = u.n(re),
          T = Object.defineProperty,
          r = Object.getOwnPropertyDescriptor,
          L = (b, w, v, A) => {
            for (
              var E = A > 1 ? void 0 : A ? r(w, v) : w, Z = b.length - 1, z;
              Z >= 0;
              Z--
            )
              (z = b[Z]) && (E = (A ? z(w, v, E) : z(E)) || E);
            return A && E && T(w, v, E), E;
          };
        let x = class extends h.Component {
          static get hoverClass() {
            return R().hoverParent;
          }
          render() {
            const {
              persona: b,
              animating: w,
              className: v,
              size: A,
              dim: E,
              ...Z
            } = this.props;
            let z = "";
            return (
              A == "medium"
                ? (z = R().Medium)
                : A == "large" && (z = R().Large),
              (0, e.jsxs)("div", {
                className: (0, W.A)(
                  R().SnoozeContainer,
                  b.online_state,
                  v,
                  w && R().animating,
                  z,
                  E && R().Dim,
                ),
                ...Z,
                children: [
                  (0, e.jsx)("div", {
                    "data-text": "Z",
                    className: (0, W.A)(R().SnoozeZ, R().Z1),
                    children: "Z",
                  }),
                  (0, e.jsx)("div", {
                    "data-text": "Z",
                    className: (0, W.A)(R().SnoozeZ, R().Z2),
                    children: "Z",
                  }),
                  (0, e.jsx)("div", {
                    "data-text": "Z",
                    className: (0, W.A)(R().SnoozeZ, R().Z3),
                    children: "Z",
                  }),
                ],
              })
            );
          }
        };
        x = L([f.PA], x);
        var ce = u(88363),
          te = u(36118),
          ne = u(70342),
          k = u.n(ne),
          U = u(75975);
        const Y = (0, f.PA)((b) => {
          const { persona: w, className: v, ...A } = b;
          if (!w || !w.is_online) return null;
          const E = w.HasStateFlag(ce.R$),
            Z = w.HasStateFlag(ce.hs),
            z = w.m_eGamingDeviceType == J.LS$,
            pe = w.m_eGamingDeviceType == J.ppM,
            he = !z && !pe && !Z && w.HasStateFlag(ce.sr);
          return (0, e.jsxs)(h.Fragment, {
            children: [
              E &&
                (0, e.jsx)("div", {
                  className: (0, W.A)(
                    v,
                    k().PersonaStatusIcon,
                    k().MobilePhoneIcon,
                    (0, C.rO)(w),
                  ),
                  title: (0, O.we)("#Platform_Hint_Mobile"),
                  ...A,
                  children: (0, e.jsx)(U.rf, {}),
                }),
              Z &&
                (0, e.jsx)("div", {
                  className: (0, W.A)(
                    v,
                    k().PersonaStatusIcon,
                    k().VRIcon,
                    (0, C.rO)(w),
                  ),
                  title: (0, O.we)("#Platform_Hint_VR"),
                  ...A,
                  children: (0, e.jsx)(te.MUh, {}),
                }),
              he &&
                (0, e.jsx)("div", {
                  className: (0, W.A)(
                    v,
                    k().PersonaStatusIcon,
                    k().BigPictureIcon,
                    (0, C.rO)(w),
                  ),
                  title: (0, O.we)("#Platform_Hint_BigPicture"),
                  ...A,
                  children: (0, e.jsx)(te.bPr, {}),
                }),
              z &&
                (0, e.jsx)("div", {
                  className: (0, W.A)(
                    v,
                    k().PersonaStatusIcon,
                    k().SteamDeckIcon,
                    (0, C.rO)(w),
                  ),
                  title: (0, O.we)("#Platform_Hint_SteamDeck"),
                  ...A,
                  children: (0, e.jsx)(te.DQe, {}),
                }),
              pe &&
                (0, e.jsx)("div", {
                  className: (0, W.A)(
                    v,
                    k().PersonaStatusIcon,
                    k().SteamDeckIcon,
                    (0, C.rO)(w),
                  ),
                  title: (0, O.we)("#Platform_Hint_LegionGoS"),
                  ...A,
                  children: (0, e.jsx)(te.DQe, {}),
                }),
            ],
          });
        });
        var j = u(18828),
          N = u.n(j),
          $ = u(3166),
          xe = Object.defineProperty,
          X = Object.getOwnPropertyDescriptor,
          ue = (b, w, v, A) => {
            for (
              var E = A > 1 ? void 0 : A ? X(w, v) : w, Z = b.length - 1, z;
              Z >= 0;
              Z--
            )
              (z = b[Z]) && (E = (A ? z(w, v, E) : z(E)) || E);
            return A && E && xe(w, v, E), E;
          };
        function G(b) {
          return (0, e.jsxs)(h.Fragment, {
            children: [
              (0, e.jsx)("span", {
                className: N().partyBeaconJoin,
                children: (0, O.we)("#User_WantsToPlay"),
              }),
              "\xA0\u2013\xA0",
              b.persona.GetCurrentGameName(),
            ],
          });
        }
        let H = class extends h.Component {
          render() {
            const {
              className: b,
              onContextMenu: w,
              persona: v,
              eFriendRelationship: A,
              bIsSelf: E,
              bParenthesizeNicknames: Z,
              strNickname: z,
              bCompactView: pe,
              bHideGameName: he,
              bHideEnhancedRichPresenceLabel: ve,
              bHideSnooze: Pe,
              bHideStatus: Fe,
              renderStatus: Re,
              renderRichPresence: ke,
              bHidePersona: Ie,
              bDNDSet: He,
              bHasPartyBeacon: be,
              bHasGamePrivacy: We,
              bNoMask: Ue,
              bEllipsisName: Ve,
              bDropPadding: Ke,
              ...Ze
            } = this.props;
            let Ee = null,
              fe = null,
              Se = null,
              we = [
                b,
                N().personaNameAndStatusLabel,
                (0, C.rO)(v),
                pe ? N().compactView : void 0,
                Ue ? N().NoMask : void 0,
              ];
            be || v.has_public_party_beacon
              ? (fe = (0, e.jsx)(G, { persona: v }))
              : (0, J.aPS)(A)
                ? ((fe = (0, O.we)("#PersonaStateBlocked")),
                  we.push(N().blocked))
                : v.is_ingame
                  ? (!v.is_in_nonsteam_game || E || (0, J.S$u)(A)
                      ? (fe = v.GetCurrentGameName())
                      : (fe = (0, O.we)("#PersonaStateInNonSteamGame")),
                    !E && !Ie
                      ? (Se = v.GetCurrentGameRichPresence())
                      : E &&
                        v.is_awayOrSnooze &&
                        (Se = (0, O.we)("#PersonaStateAway")))
                  : v.m_broadcastAccountId &&
                    (fe = (0, O.we)("#PersonaStateWatchingBroadcast")),
              fe || (fe = v.GetLocalizedOnlineStatus()),
              Re && (fe = Re());
            let Te = !Ie && !Pe;
            Pe === !1 && (Te = !0),
              v.is_awayOrSnooze && Te && (Ee = (0, e.jsx)(x, { persona: v }));
            let Ge = (0, e.jsx)(e.Fragment, {});
            w
              ? (Ge = (0, e.jsx)("div", {
                  className: "ContextMenuButton",
                  onClick: w,
                  children: (0, e.jsx)(te.GB9, {}),
                }))
              : we.push(N().noContextMenu),
              Ie && we.push(N().hidePersona),
              ke && (Se = ke()),
              (he || !Se) && we.push(N().twoLine);
            const Oe = !v.is_ingame && !Fe,
              Le = !ve && Se,
              ze = fe && (!he || !Le),
              lt = (0, J.IDH)($.TS.LAUNCHER_TYPE);
            let et = z && !Z,
              ct = et ? z : v.m_strPlayerName,
              tt = !Ie && (ze || Oe) && Le;
            return (0, e.jsxs)("div", {
              ...Ze,
              className: (0, W.A)(...we),
              onContextMenu: w,
              children: [
                (0, e.jsxs)("div", {
                  className: (0, W.A)(
                    N().statusAndName,
                    tt ? N().threeLines : void 0,
                  ),
                  children: [
                    (0, e.jsxs)("div", {
                      className: (0, W.A)(
                        N().playerName,
                        Ve ? N().EllipsisName : void 0,
                      ),
                      children: [
                        ct || "\xA0",
                        Z &&
                          z &&
                          (0, e.jsxs)("span", {
                            className: N().playerNickname,
                            children: ["(", z, ")"],
                          }),
                      ],
                    }),
                    He &&
                      (0, e.jsx)("div", {
                        className: N().DNDContainer,
                        title: (0, O.we)("#User_ToggleDoNotDisturb"),
                        children: (0, e.jsx)(te.Aj0, {}),
                      }),
                    et &&
                      (0, e.jsx)("span", {
                        className: N().playerNicknameBracket,
                        title: (0, O.we)("#isNickname"),
                        children: " *",
                      }),
                    (0, e.jsx)(Y, { persona: v }),
                    Ee,
                    (v.m_bPlayerNamePending || v.m_bAvatarPending) &&
                      lt &&
                      (0, e.jsx)("div", {
                        className: N().PendingPersona,
                        title: (0, O.we)("#SteamChina_PendingPersonaName"),
                        children: (0, e.jsx)(te.zD7, {}),
                      }),
                    Ge,
                  ],
                }),
                !Ie &&
                  (0, e.jsxs)("div", {
                    className: N().richPresenceContainer,
                    children: [
                      (ze || Oe) &&
                        (0, e.jsxs)("div", {
                          className: (0, W.A)(
                            N().gameName,
                            tt ? N().threeLines : void 0,
                            N().richPresenceLabel,
                            Ke && N().dropPadding,
                            "no-drag",
                          ),
                          children: [
                            We &&
                              (0, e.jsx)("div", {
                                className: N().gameIsPrivateIcon,
                                title: (0, O.we)("#User_GameInfoHidden"),
                                children: (0, e.jsx)(te.jZl, {}),
                              }),
                            fe,
                          ],
                        }),
                      Le &&
                        (0, e.jsxs)("div", {
                          className: (0, W.A)(
                            N().richPresenceLabel,
                            Ke && N().dropPadding,
                            "no-drag",
                          ),
                          children: [Se, " "],
                        }),
                    ],
                  }),
              ],
            });
          }
        };
        H = ue([f.PA], H);
        const B = (0, f.PA)((b) => {
          const {
            persona: w,
            bParenthesizeNicknames: v,
            strNickname: A,
            bIgnorePersonaStatus: E,
            bDisableColoring: Z,
            className: z,
            ...pe
          } = b;
          let ve = A && !v ? A : w.m_strPlayerName;
          return (0, e.jsx)("span", {
            ...pe,
            className: (0, W.A)(
              z,
              Z && N().DisableColoring,
              !E && (0, C.rO)(w),
            ),
            children: (0, e.jsxs)("span", {
              className: N().playerName,
              children: [
                ve || "\xA0",
                v &&
                  A &&
                  (0, e.jsxs)("span", {
                    className: N().playerNickname,
                    children: ["(", A, ")"],
                  }),
              ],
            }),
          });
        });
      },
      54407: (V, de, u) => {
        "use strict";
        u.d(de, { B3: () => $, KM: () => ne, KT: () => N });
        var e = u(41735),
          h = u.n(e),
          f = u(58632),
          O = u.n(f),
          J = u(90626),
          C = u(80902),
          W = u(75233),
          re = u(72604),
          R = u(76559),
          T = u(34592),
          r = u(3166),
          L = u(35038),
          x = u(27386),
          ce = u(68312);
        const te = "nicknames";
        function ne(X) {
          const ue = (0, ce.KV)(),
            { data: G, isLoading: H } = (0, C.I)({
              queryKey: [te],
              queryFn: async () => {
                const B = new Map();
                if (r.iA.logged_in) {
                  const b = L.w.Init(x.w_T),
                    v = (await x.xtC.GetNicknameList(ue, b)).Body().toObject();
                  v?.nicknames &&
                    v.nicknames.length > 0 &&
                    v.nicknames.forEach((A) => {
                      A.accountid &&
                        A.nickname &&
                        B.set(A.accountid, A.nickname);
                    });
                }
                return B;
              },
            });
          return G ? G.get(X) : null;
        }
        async function k(X) {
          if (!X || X.length == 0) return [];
          const ue =
            (0, r.yK)() == "community"
              ? r.TS.COMMUNITY_BASE_URL
              : r.TS.STORE_BASE_URL;
          if (X.length == 1) {
            const G = { accountid: X[0], origin: self.origin },
              H = await h().get(`${ue}actions/ajaxgetavatarpersona`, {
                params: G,
              });
            if (
              !H ||
              H.status != 200 ||
              H.data?.success != re.R ||
              !H.data?.userinfo
            )
              throw `Load single avatar/persona failed ${((0, T.H))(H).strErrorMsg}`;
            return [H.data.userinfo];
          } else {
            const G = { accountids: X.join(","), origin: self.origin },
              H = await h().get(`${ue}actions/ajaxgetmultiavatarpersona`, {
                params: G,
              });
            if (
              !H ||
              H.status != 200 ||
              H.data?.success != re.R ||
              !H.data?.userinfos
            )
              throw `Load single avatar/persona failed ${((0, T.H))(H).strErrorMsg}`;
            const B = new Map();
            return (
              H.data.userinfos.forEach((b) =>
                B.set(new R.b(b.steamid).GetAccountID(), b),
              ),
              X.map((b) => B.get(b))
            );
          }
        }
        const U = new (O())((X) => k(X), { cache: !1 }),
          Y = "avatarandpersonas";
        function j(X) {
          return [Y, X];
        }
        function N(X) {
          const { data: ue, isLoading: G } = (0, C.I)({
            queryKey: j(X),
            queryFn: () => U.load(X),
          });
          return [ue, G];
        }
        function $(X) {
          const ue = (0, W.jE)(),
            { data: G, isLoading: H } = (0, C.I)({
              queryKey: [Y, X],
              queryFn: async () => {
                const b = await U.loadMany(X);
                return (
                  b.forEach((w) => {
                    if (w instanceof Error) return;
                    const v = [Y, new R.b(w.steamid).GetAccountID()];
                    ue.setQueryData(v, w);
                  }),
                  b
                );
              },
              enabled: X?.length > 0,
            }),
            B = (0, J.useMemo)(() => {
              const b = new Array();
              return (
                G?.forEach((w) => {
                  w instanceof Error || b.push(w);
                }),
                b
              );
            }, [G]);
          return H ? null : B;
        }
        function xe(X) {
          return ReactQueryClient.getQueryData([Y, X]);
        }
      },
      75975: (V, de, u) => {
        "use strict";
        u.d(de, { Jl: () => R, nl: () => b, rf: () => B });
        var e = u(7850),
          h = u(36118),
          f = u(56718),
          O = u(3166);
        function J() {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Settings, {})
            : jsx(SVG.Settings, {});
        }
        function C(w) {
          const v = w.filled ?? !0;
          return useInGamepadUI()
            ? v
              ? jsx(GamepadSVG.Star, {})
              : jsx(GamepadSVG.EmptyStar, {})
            : jsx(SVG.Star, {});
        }
        function W(w) {
          const v = w.filled ?? !0;
          return useInGamepadUI()
            ? v
              ? jsx(GamepadSVG.Heart, {})
              : jsx(GamepadSVG.HeartEmpty, {})
            : jsx(SVG.Heart, {});
        }
        function re() {
          return useInGamepadUI()
            ? jsx(GamepadSVG.ControllerStatus, {})
            : jsx(SVG.BigPicture, {});
        }
        function R(w) {
          return (0, O.Qn)()
            ? (0, e.jsx)(f.MGO, { ...w })
            : (0, e.jsx)(h.Jlk, { ...w });
        }
        function T() {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Carat, { direction: "down" })
            : jsx(SVG.FlatArrow, { angle: 180 });
        }
        function r() {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Information, {})
            : jsx(SVG.Information, {});
        }
        function L(w) {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Lock, {})
            : jsx(SVG.Lock, {});
        }
        function x() {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Download, {})
            : jsx(SVG.Download, {});
        }
        function ce() {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Play, {})
            : jsx(SVG.Play, {});
        }
        function te(w) {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Achievement, {})
            : jsx(SVG.AwardIcon, {});
        }
        function ne(w) {
          return useInGamepadUI()
            ? jsx(GamepadSVG.ThumbsUp, {})
            : jsx(SVG.ThumbsUpUserNews, { className: w.className });
        }
        function k(w) {
          return useInGamepadUI()
            ? jsx(GamepadSVG.ThumbsDown, {})
            : jsx(SVG.ThumbsUpUserNews, { className: w.className });
        }
        function U(w) {
          return useInGamepadUI()
            ? jsx(GamepadSVG.CommentThread, { className: w.className })
            : jsx(SVG.CommentThread, { className: w.className });
        }
        function Y() {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Pause, {})
            : jsx(SVG.Pause, {});
        }
        function j() {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Reload, {})
            : jsx(SVG.Reload, {});
        }
        function N() {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Update, {})
            : jsx(SVG.Update, {});
        }
        function $() {
          return jsx(GamepadSVG.Globe, {});
        }
        function xe() {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Close, {})
            : jsx(SVG.X_Line, {});
        }
        function X() {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Trash, {})
            : jsx(SVG.Trash, {});
        }
        function ue() {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Dynamic, {})
            : jsx(SVG.DynamicCollection, {});
        }
        function G() {
          return jsx(GamepadSVG.Add, {});
        }
        function H() {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Edit, {})
            : jsx(SVG.Edit, {});
        }
        function B() {
          return (0, e.jsx)(h.rfv, {});
        }
        function b() {
          return (0, O.Qn)() ? (0, e.jsx)(f.nl, {}) : (0, e.jsx)(h.jZW, {});
        }
      },
      9852: (V, de, u) => {
        "use strict";
        u.d(de, { T: () => W });
        var e = u(72604),
          h = u(35038),
          f = u(27386),
          O = u(80902),
          J = u(68312);
        function C(re) {
          return {
            queryKey: ["communitypreferences"],
            queryFn: async () => {
              const R = h.w.Init(f.tzK),
                T = await f.xtC.GetCommunityPreferences(re, R);
              if (T.GetEResult() != e.R)
                throw new Error(
                  `Error from GetCommunityPreferences: ${T.GetEResult()} ${T.GetErrorMessage()}`,
                );
              return T.Body();
            },
            staleTime: 300 * 1e3,
          };
        }
        function W() {
          const re = (0, J.KV)();
          return (0, O.I)(C(re));
        }
      },
      95198: (V, de, u) => {
        "use strict";
        u.d(de, {
          H5: () => te,
          Rl: () => r,
          TW: () => T,
          V: () => ne,
          eH: () => ce,
          fd: () => x,
        });
        var e = u(18735),
          h = u(80902),
          f = u(41735),
          O = u.n(f),
          J = u(3166),
          C = u(18210),
          W = u(72609);
        const re = null;
        function R() {
          return re.includes(UserConfig.country_code);
        }
        const T = [e.ED, e.M, e.mx, e.T4, e.u7];
        function r(j) {
          let N = [];
          switch (j) {
            case e.ED:
              N.push(e.M), N.push(e.mx);
            case e.mx:
              N.push(e.T4);
            case e.T4:
              N.push(e.u7);
              break;
          }
          return N;
        }
        let L = new Map();
        L.set(e.M, e.ED),
          L.set(e.mx, e.ED),
          L.set(e.T4, e.mx),
          L.set(e.u7, e.T4);
        function x(j) {
          let N = [],
            $ = L.get(j);
          return $ && (N.push($), N.push(...x($))), N;
        }
        function ce(j) {
          return (0, h.I)({
            queryKey: [
              "examples_for_content_descriptor",
              j === null ? null : j.valueOf(),
            ],
            queryFn: async () => {
              if (j === null) return [];
              const N = new URLSearchParams();
              return (
                N.append("filter", "examplesforcontentdescriptors"),
                N.append("ignore_preferences", "1"),
                N.append("category1", "992,994,998"),
                N.append("descids", j.valueOf().toString()),
                N.append("json", "1"),
                (
                  await O()({
                    url: `${J.TS.STORE_BASE_URL}search/results/?${N.toString()}`,
                    method: "GET",
                    responseType: "json",
                  })
                ).data.items
              );
            },
          });
        }
        function te(j) {
          let N = null;
          switch (j) {
            case e.ED:
              N = "#ContentDescriptor_GeneralMatureContent";
              break;
            case e.M:
              N = "#ContentDescriptor_FrequentViolenceOrGore";
              break;
            case e.mx:
              N = "#ContentDescriptor_NudityOrSexualContent";
              break;
            case e.T4:
              N = "#ContentDescriptor_GratuitousNudityOrSexualContent";
              break;
            case e.u7:
              N = "#ContentDescriptor_AdultOnlySexualContent";
              break;
            default:
              throw "Invalid content descriptor.";
          }
          return (0, C.we)(N);
        }
        function ne(j, N = !1) {
          let $ = "";
          switch (j) {
            case e.ED:
              $ += (0, C.we)(
                "#ContentDescriptor_GeneralMatureContent_Description",
              );
              break;
            case e.M:
              $ += (0, C.we)(
                "#ContentDescriptor_FrequentViolenceOrGore_Description",
              );
              break;
            case e.mx:
              $ += (0, C.we)(
                "#ContentDescriptor_NudityOrSexualContent_Description",
              );
              break;
            case e.T4:
              $ += (0, C.we)(
                "#ContentDescriptor_GratuitousNudityOrSexualContent_Description",
              );
              break;
            case e.u7:
              $ += (0, C.we)(
                "#ContentDescriptor_AdultOnlySexualContent_Description",
              );
              break;
            default:
              throw "Invalid content descriptor.";
          }
          return (
            N &&
              (j === e.T4 || j === e.u7) &&
              ($ += " " + (0, C.we)("#ContentDescriptor_Affirm18YearsOld")),
            $
          );
        }
        function k() {
          return [
            EContentDescriptorID.k_EContentDescriptor_AdultOnlySexualContent,
            EContentDescriptorID.k_EContentDescriptor_GratuitousSexualContent,
            EContentDescriptorID.k_EContentDescriptor_NudityOrSexualContent,
          ];
        }
        function U() {
          return [
            EContentDescriptorID.k_EContentDescriptor_AdultOnlySexualContent,
            EContentDescriptorID.k_EContentDescriptor_GratuitousSexualContent,
          ];
        }
        function Y(j) {
          return !UserConfig.logged_in ||
            !j ||
            !j.content_descriptors_to_exclude
            ? k()
            : j.content_descriptors_to_exclude.map(
                (N) => N.content_descriptorid,
              );
        }
      },
      27126: (V, de, u) => {
        "use strict";
        u.d(de, { h: () => f });
        var e = u(90626);
        const h = {};
        function f(O) {
          const [J, C] = (0, e.useState)(!1);
          return (
            (0, e.useEffect)(() => {
              let W = !0;
              h[O]
                ? h[O].refCount++
                : (h[O] = { list: window.matchMedia(O), refCount: 1 });
              const re = h[O].list,
                R = () => {
                  W && C(re.matches);
                };
              return (
                R(),
                re.addEventListener("change", R),
                () => {
                  (W = !1),
                    re.removeEventListener("change", R),
                    h[O].refCount--,
                    h[O].refCount === 0 && delete h[O];
                }
              );
            }, [O]),
            J
          );
        }
      },
      80718: (V, de, u) => {
        "use strict";
        u.r(de),
          u.d(de, {
            FamilyTabContainer: () => mn,
            GenerateNameElementForHistory: () => cn,
            default: () => _s,
          });
        var e = u(7850),
          h = u(2289),
          f = u(90626),
          O = u(42993),
          J = u(24660),
          C = u(16412),
          W = u(36118),
          re = u(21418),
          R = u(85599),
          T = u(36707),
          r = u(18210),
          L = u(70322),
          x = u(4874),
          ce = u(58679),
          te = u(46943),
          ne = u(35098),
          k = u(92757),
          U = u(96538),
          Y = u(3166),
          j = u(19298);
        function N(i, t) {
          return new URLSearchParams(i.search).get(t);
        }
        const $ = "invitation",
          xe = "nonce";
        function X(i) {
          const { cooldownSecondsRemaining: t } = i,
            n = {
              month: "long",
              day: "numeric",
              year: "numeric",
              weekday: void 0,
            };
          return (0, e.jsx)("div", {
            className: L.DialogText,
            children: (0, r.we)(
              "#FamilyManagement_CooldownAllowed",
              (0, r.TW)(Date.now() / 1e3 + t, n),
            ),
          });
        }
        function ue(i) {
          const {
              inviterSteamID: t,
              familyGroupID: n,
              role: a,
              inviteID: s,
            } = i,
            o = (0, O.LH)(),
            l = (0, x.Bc)(n),
            c = (0, x.v2)(n, o),
            p = (0, ne.js)(t),
            d = (0, x.fO)(n, s),
            [m, g] = (0, f.useState)(!1),
            [y, _] = (0, f.useState)(!1),
            [I, P] = (0, f.useState)(""),
            { setErrorMessage: S } = (0, x.RC)();
          (0, x.p8)(p, "#FamilyManagement_ErrorLoadFamilyInviteGeneric");
          const D = (0, k.W6)(),
            q = (0, k.zy)(),
            se = !!N(q, $);
          (0, x.gv)(
            l,
            "#FamilyManagement_ErrorAcceptInvite",
            x.eS.k_EFamilyQueryJoinFamily,
          ),
            (0, x.gv)(
              c,
              "#FamilyManagement_ErrorDeclineInvite",
              x.eS.k_EFamilyQueryDeclineInvite,
            );
          const ie = (0, x.vo)();
          if (
            (ie.isSuccess &&
              !ie.data.is_not_member_of_any_group() &&
              D.push("/account/familymanagement"),
            p.isError)
          )
            return null;
          if (p.isLoading)
            return (0, e.jsx)("div", {
              className: L.ThrobberContainer,
              children: (0, e.jsx)(R.t, {}),
            });
          const le = () => {
              S(null),
                l.mutate(null, {
                  onSuccess: (je) => {
                    je.cooldown_skip_granted() && _(!0),
                      je.two_factor_method() === h.GC.SC
                        ? Y.TS.IN_MOBILE_WEBVIEW
                          ? (window.location.href =
                              "steammobile://confirmations?first_of_type=11")
                          : g("awaitmobile2fa")
                        : je.two_factor_method() === h.GC.Mk
                          ? g("awaitemail2fa")
                          : D.push("/account/familymanagement");
                  },
                });
            },
            Ne = () => {
              S(null), c.mutate(), se && D.push("/account/familymanagement");
            },
            _e = p.data,
            ye = () => g(!1),
            Ce = () => D.push("/account/familymanagement"),
            Be = (je) =>
              je
                ? Y.TS.IN_MOBILE_WEBVIEW
                  ? "#FamilyManagement_Await2FAForJoin_Description_Mobile_MobileApp"
                  : "#FamilyManagement_Await2FAForJoin_Description_Mobile"
                : "#FamilyManagement_Await2FAForJoin_Description_Email",
            rt = async () => {
              d.mutateAsync(I).then(Ce);
            };
          return (0, e.jsxs)("div", {
            className: L.IncomingInviteRow,
            children: [
              (0, e.jsxs)(U.EN, {
                active: !!m,
                children: [
                  m === "explanation" &&
                    (0, e.jsxs)(U.eV, {
                      title: (0, r.we)(
                        `#FamilyManagement_RoleDescriptionLongHeader_${a}`,
                      ),
                      closeModal: ye,
                      children: [
                        a === h.PQ.s ? (0, e.jsx)(G, {}) : (0, e.jsx)(H, {}),
                        (0, e.jsx)(C.$n, {
                          onClick: ye,
                          children: (0, r.we)("#FamilyManagement_Close"),
                        }),
                      ],
                    }),
                  m === "confirm" &&
                    (0, e.jsx)(U.o0, {
                      closeModal: ye,
                      onCancel: ye,
                      onOK: le,
                      strTitle: (0, r.we)(
                        "#FamilyManagement_ConfirmJoinDialog",
                      ),
                      children: (0, r.oW)(
                        `#FamilyManagement_ConfirmJoin_${a}`,
                        (0, e.jsx)("b", {}),
                      ),
                    }),
                  m === "awaitmobile2fa" &&
                    (0, e.jsxs)(U.eV, {
                      title: (0, r.we)(
                        "#FamilyManagement_Await2FAForJoin_Header",
                      ),
                      closeModal: Ce,
                      children: [
                        (0, e.jsx)("div", {
                          className: L.DialogText,
                          children: (0, r.we)(Be(m === "awaitmobile2fa")),
                        }),
                        y &&
                          (0, e.jsx)(X, {
                            cooldownSecondsRemaining:
                              ie.data.cooldown_seconds_remaining(),
                          }),
                        y &&
                          (0, e.jsx)("div", {
                            className: L.DialogText,
                            children: (0, r.we)(
                              "#FamilyManagement_CooldownAllowed_2_Join",
                            ),
                          }),
                        (0, e.jsx)(C.$n, {
                          onClick: Ce,
                          children: (0, r.we)("#FamilyManagement_Close"),
                        }),
                      ],
                    }),
                  m === "awaitemail2fa" &&
                    (0, e.jsxs)(U.eV, {
                      title: (0, r.we)(
                        "#FamilyManagement_Await2FAForJoin_Header",
                      ),
                      closeModal: Ce,
                      children: [
                        a === h.PQ.sf &&
                          (0, e.jsxs)(j.Z, {
                            className: L.DialogWarning,
                            children: [
                              (0, e.jsx)(j.Z, {
                                className: L.DialogText,
                                children: (0, r.we)(
                                  "#FamilyManagement_Await2FAForJoin_ChildWarning_1",
                                ),
                              }),
                              (0, e.jsx)(j.Z, {
                                className: L.DialogText,
                                children: (0, r.oW)(
                                  "#FamilyManagement_Await2FAForJoin_ChildWarning_2",
                                  (0, e.jsx)("a", {
                                    href: `${Y.TS.HELP_BASE_URL}/wizard/HelpChangePassword`,
                                  }),
                                ),
                              }),
                            ],
                          }),
                        (0, e.jsx)(j.Z, {
                          className: L.DialogText,
                          children: (0, r.we)(
                            "#FamilyManagement_Await2FAForJoin_Description_Email",
                          ),
                        }),
                        (0, e.jsx)(j.Z, {
                          className: L.TwoFactorCodeBox,
                          children: (0, e.jsx)(J.BA, {
                            className: L.EditNameInput,
                            type: "text",
                            onChange: (je) => {
                              P(je.target.value), S(null);
                            },
                            value: I,
                            placeholder: (0, r.we)(
                              "#FamilyManagement_Await2FAForJoin_InputPlaceholder",
                            ),
                            maxLength: 128,
                          }),
                        }),
                        (0, e.jsxs)(j.Z, {
                          className: L.DialogButtons,
                          children: [
                            (0, e.jsx)(C.jn, {
                              onClick: rt,
                              children: (0, r.we)(
                                "#FamilyManagement_AwaitCodeFromEmail_Confirm",
                              ),
                            }),
                            (0, e.jsx)(C.$n, {
                              onClick: ye,
                              children: (0, r.we)(
                                "#FamilyManagement_AwaitCodeFromEmail_Cancel",
                              ),
                            }),
                          ],
                        }),
                      ],
                    }),
                  m == "alreadyaccepted" &&
                    (0, e.jsxs)(U.eV, {
                      title: (0, r.we)(
                        "#FamilyManagement_AlreadyAccepted_Header",
                      ),
                      closeModal: Ce,
                      children: [
                        (0, e.jsx)("div", {
                          className: L.DialogText,
                          children: (0, r.we)(
                            "#FamilyManagement_AlreadyAccepted_Text",
                          ),
                        }),
                        (0, e.jsx)(C.$n, {
                          onClick: Ce,
                          children: (0, r.we)("#FamilyManagement_Close"),
                        }),
                      ],
                    }),
                ],
              }),
              (0, e.jsxs)("div", {
                className: L.InviteRowHeader,
                children: [
                  (0, e.jsx)("a", {
                    className: L.ProfileLink,
                    href: _e.GetCommunityProfileURL(),
                    children: (0, e.jsx)(te.i8, {
                      className: L.Avatar,
                      persona: _e,
                      size: "Large",
                      statusPosition: "right",
                    }),
                  }),
                  (0, e.jsx)("div", {
                    className: L.InviteRowDetails,
                    children: (0, r.PP)(
                      a === h.PQ.s
                        ? "#FamilyManagement_PendingFamilyInviteInviteText_Adult"
                        : "#FamilyManagement_PendingFamilyInviteInviteText_Child",
                      (0, e.jsx)("a", {
                        className: L.ProfileLink,
                        href: _e.GetCommunityProfileURL(),
                        children: (0, e.jsx)("span", {
                          className: L.PersonaName,
                          children: _e?.m_strPlayerName,
                        }),
                      }),
                      (0, e.jsxs)("div", {
                        className: L.RoleBlock,
                        children: [
                          (0, e.jsx)(ce.iM, { className: L.RoleIcon, role: a }),
                          (0, e.jsx)("span", {
                            className: L.RoleName,
                            children: (0, r.we)(`#FamilyManagement_Role_${a}`),
                          }),
                        ],
                      }),
                    ),
                  }),
                ],
              }),
              a == h.PQ.s &&
                (0, e.jsx)("div", {
                  className: L.RoleDescriptionShort,
                  children: (0, e.jsx)("p", {
                    children: (0, r.oW)(
                      "#FamilyManagement_RoleDescriptionShort_Adult",
                      (0, e.jsx)("span", { className: L.RoleName }),
                      (0, e.jsx)("a", {
                        className: L.LearnMoreLink,
                        onClick: () => g("explanation"),
                      }),
                    ),
                  }),
                }),
              a == h.PQ.sf &&
                (0, e.jsxs)("div", {
                  className: L.RoleDescriptionShort,
                  children: [
                    (0, e.jsx)("p", {
                      children: (0, r.oW)(
                        "#FamilyManagement_RoleDescriptionShort_Child",
                        (0, e.jsx)("span", { className: L.RoleName }),
                        (0, e.jsx)("a", {
                          className: L.LearnMoreLink,
                          onClick: () => g("explanation"),
                        }),
                      ),
                    }),
                    (0, e.jsxs)("ul", {
                      className: L.RoleDescriptionList,
                      children: [
                        (0, e.jsx)("li", {
                          children: (0, r.we)(
                            "#FamilyManagement_RoleDescriptionShort_Child_1",
                          ),
                        }),
                        (0, e.jsx)("li", {
                          children: (0, r.we)(
                            "#FamilyManagement_RoleDescriptionShort_Child_2",
                          ),
                        }),
                        (0, e.jsx)("li", {
                          children: (0, r.we)(
                            "#FamilyManagement_RoleDescriptionShort_Child_3",
                          ),
                        }),
                      ],
                    }),
                  ],
                }),
              (0, e.jsxs)("div", {
                className: L.Buttons,
                children: [
                  (0, e.jsx)(C.$n, {
                    className: L.AcceptInviteButton,
                    onClick: () => g("confirm"),
                    children: (0, r.we)("#FamilyManagement_AcceptInviteButton"),
                  }),
                  (0, e.jsx)(C.$n, {
                    className: L.DeclineInviteButton,
                    onClick: Ne,
                    children: (0, r.we)(
                      "#FamilyManagement_DeclineInviteButton",
                    ),
                  }),
                ],
              }),
            ],
          });
        }
        function G() {
          return (0, e.jsxs)("div", {
            className: (0, T.A)("account_settings_container"),
            children: [
              (0, e.jsx)("p", {
                children: (0, r.we)("#FamilyManagement_AdultDescription_1"),
              }),
              (0, e.jsx)("p", {
                children: (0, r.we)("#FamilyManagement_AdultDescription_2"),
              }),
              (0, e.jsxs)("ul", {
                children: [
                  (0, e.jsx)("li", {
                    children: (0, r.we)("#FamilyManagement_AdultDescription_3"),
                  }),
                  (0, e.jsx)("li", {
                    children: (0, r.we)("#FamilyManagement_AdultDescription_4"),
                  }),
                  (0, e.jsx)("li", {
                    children: (0, r.we)("#FamilyManagement_AdultDescription_5"),
                  }),
                ],
              }),
            ],
          });
        }
        function H() {
          return (0, e.jsxs)("div", {
            className: (0, T.A)("account_settings_container"),
            children: [
              (0, e.jsx)("p", {
                children: (0, r.we)("#FamilyManagement_ChildDescription_1"),
              }),
              (0, e.jsxs)("ul", {
                children: [
                  (0, e.jsx)("li", {
                    children: (0, r.we)("#FamilyManagement_ChildDescription_2"),
                  }),
                  (0, e.jsx)("li", {
                    children: (0, r.we)("#FamilyManagement_ChildDescription_3"),
                  }),
                  (0, e.jsx)("li", {
                    children: (0, r.we)("#FamilyManagement_ChildDescription_4"),
                  }),
                ],
              }),
              (0, e.jsx)("p", {
                children: (0, r.we)("#FamilyManagement_ChildDescription_5"),
              }),
            ],
          });
        }
        const B = "familyid",
          b = "invite";
        function w() {
          const i = (0, k.W6)(),
            t = (0, k.zy)(),
            n = N(t, B),
            a = N(t, b),
            s = N(t, xe);
          return (
            (0, x.tN)(n, a, s).mutate(null, {
              onSuccess: () => i.push("/account/familymanagement"),
            }),
            (0, e.jsx)(R.t, {})
          );
        }
        var v = u(80329),
          A = u(58612),
          E = u(76559),
          Z = u(93125),
          z = u(9852),
          pe = u(99412),
          he = u(88268),
          ve = u(20169),
          Pe = u(18938),
          Fe = u(79089),
          Re = u(33902);
        const ke = f.memo(function (t) {
          const {
              virtualizer: n,
              bDynamic: a,
              scrollAlign: s,
              bNativeScrollIntoView: o,
              idx: l,
              rowGap: c,
              renderItem: p,
            } = t,
            d = f.useCallback(
              (m, g, y) => (n.scrollToIndex(l, { align: s }), !0),
              [n, l, s],
            );
          return (0, e.jsx)(j.Z, {
            ref: a ? n.measureElement : void 0,
            navKey: `VirtualizedListIndex-${l}`,
            "data-index": l,
            fnScrollIntoViewHandler: o ? void 0 : d,
            scrollIntoViewWhenChildFocused: "force",
            style: { width: "100%", paddingBottom: c },
            children: p(l),
          });
        });
        function Ie(i) {
          return (0, Pe.QS)(
            (t) => {
              if (!t) return;
              const n = new t.ownerDocument.defaultView.ResizeObserver((o) => {
                i(o[0]);
              });
              let a = [],
                s = t;
              for (; s && s != null; )
                n.observe(s), a.push(s), (s = s.parentElement);
              return () => {
                a.forEach((o) => n.unobserve(o));
              };
            },
            [i],
          );
        }
        function He(i, t) {
          const n = i.getBoundingClientRect().top;
          return t
            ? n - t.getBoundingClientRect().top - t.clientTop + t.scrollTop
            : n + (i.ownerDocument.defaultView?.scrollY ?? 0);
        }
        const be = f.forwardRef(function (t, n) {
          const {
              nRows: a,
              nItemHeight: s,
              nRowGap: o,
              overscan: l,
              renderItem: c,
              getItemKey: p,
              bDynamic: d,
              measureElement: m,
              className: g,
              forceVirtualizeType: y,
              hintVirtualizeType: _,
              scrollAlign: I,
              bNativeScrollIntoView: P,
              bNoOverscanOffscreen: S,
              bBrowserScrollAnchoring: D,
              initialOffset: q,
              onOffsetChange: se,
              ...ie
            } = t,
            [le, Ne] = (0, f.useState)(y ?? _),
            [_e, ye] = f.useState(),
            [Ce, Be] = f.useState(),
            [rt, je] = f.useState(),
            vt = f.useRef(null),
            Ns = f.useCallback(
              ($e) => {
                if (!$e) return;
                const ot = (0, Fe._f)($e, "y"),
                  Rs = He($e, y == "window" ? null : ot),
                  St = ot?.getBoundingClientRect(),
                  pn = () => {
                    y != "window" &&
                      (ye(ot || void 0),
                      Be((jt) => {
                        if (!St) return;
                        const fn = Math.round(St.width),
                          hn = Math.round(St.height);
                        return jt?.width == fn && jt?.height == hn
                          ? jt
                          : { width: fn, height: hn };
                      })),
                      je(Rs),
                      y || Ne(ot ? "element" : "window");
                  };
                S ? pn() : (0, f.startTransition)(pn);
              },
              [y, S],
            ),
            dn = f.useRef(_e);
          dn.current = _e;
          const bs = f.useCallback(() => {
              if (!vt.current) return;
              const $e = He(vt.current, dn.current);
              (0, f.startTransition)(() => {
                je($e);
              });
            }, []),
            Ms = Ie(bs),
            As = (0, Pe.Ue)(Ns, vt, Ms, n),
            un = {
              nRows: a,
              nItemHeight: s,
              nRowGap: o,
              overscan: l,
              renderItem: c,
              getItemKey: p,
              bDynamic: d,
              measureElement: m,
              forceVirtualizeType: y,
              hintVirtualizeType: _,
              scrollAlign: I,
              bNativeScrollIntoView: P,
              bNoOverscanOffscreen: S,
              bBrowserScrollAnchoring: D,
              initialOffset: q,
              onOffsetChange: se,
            };
          return (0, e.jsx)(j.Z, {
            className: g,
            ref: As,
            ...ie,
            children: (0, e.jsxs)(f.Suspense, {
              children: [
                le === "element" &&
                  (0, e.jsx)(Ze, {
                    ...un,
                    nScrollMargin: rt,
                    elScrollable: _e,
                    rectScrollable: Ce,
                  }),
                le === "window" && (0, e.jsx)(Ke, { ...un, nScrollMargin: rt }),
              ],
            }),
          });
        });
        function We(i, t, n) {
          f.useEffect(() => {
            n ||
              (0, f.startTransition)(() => {
                i.measure();
              });
          }, [i, t, n]);
        }
        function Ue(i, t, n) {
          if (!t) return "first";
          const a = i.options.scrollMargin,
            s = a + i.getTotalSize(),
            o = i.scrollOffset ?? 0,
            l = (i.scrollRect ?? i.options.initialRect).height;
          return a > o + l + n ? "first" : s < o - n ? "last" : "all";
        }
        function Ve(i, t, n) {
          const [, a] = (0, f.useState)(0),
            s = f.useRef({ bPositionKnown: t, nMargin: n, eRowWindow: "all" });
          (s.current.bPositionKnown = t), (s.current.nMargin = n);
          const o = f.useCallback(
            (c, p) =>
              Se(c, (d, m) => {
                p(d, m);
                const {
                  bPositionKnown: g,
                  nMargin: y,
                  eRowWindow: _,
                } = s.current;
                Ue(c, g, y) != _ && a((I) => I + 1);
              }),
            [],
          );
          return {
            observeElementOffset: i ? o : Se,
            fnGetRowWindow: (c) => {
              const p = i ? Ue(c, t, n) : "all";
              return (s.current.eRowWindow = p), p;
            },
          };
        }
        function Ke(i) {
          const {
              nScrollMargin: t,
              nRows: n,
              nItemHeight: a,
              nRowGap: s = 10,
              overscan: o = 6,
              initialOffset: l,
              onOffsetChange: c,
              measureElement: p,
              getItemKey: d,
              bDynamic: m,
              bNoOverscanOffscreen: g,
              bBrowserScrollAnchoring: y,
            } = i,
            _ = (0, Re.d)(),
            I = a + s,
            { observeElementOffset: P, fnGetRowWindow: S } = Ve(
              g,
              t !== void 0,
              o * I,
            ),
            D = (0, he.XW)({
              count: n,
              scrollMargin: t,
              estimateSize: f.useCallback(() => I, [I]),
              measureElement: p,
              getItemKey: d,
              overscan: o,
              initialOffset: l ?? (() => window.scrollY),
              initialRect: void 0,
              observeElementOffset: P,
              observeElementRect: we,
              onChange(q, se) {
                c?.(q.scrollOffset);
              },
            });
          return (
            (D.shouldAdjustScrollPositionOnItemSizeChange = (q) =>
              !y && t !== void 0 && q.start < (D.scrollOffset ?? 0)),
            We(D, I, m),
            (0, e.jsx)(Ee, { ...i, virtualizer: D, eRowWindow: S(D) })
          );
        }
        function Ze(i) {
          const {
              nRows: t,
              nScrollMargin: n,
              elScrollable: a,
              rectScrollable: s,
              nItemHeight: o,
              nRowGap: l = 10,
              overscan: c = 6,
              initialOffset: p,
              onOffsetChange: d,
              measureElement: m,
              getItemKey: g,
              bDynamic: y,
              bNoOverscanOffscreen: _,
              bBrowserScrollAnchoring: I,
            } = i,
            P = o + l,
            S = (0, Re.d)(),
            { observeElementOffset: D, fnGetRowWindow: q } = Ve(
              _,
              a !== void 0 && n !== void 0,
              c * P,
            ),
            se = (0, he.Te)({
              count: t,
              scrollMargin: n ?? 0,
              getScrollElement: () => (
                a &&
                  se.scrollElement !== a &&
                  p === void 0 &&
                  (se.scrollOffset = a.scrollTop),
                a ?? null
              ),
              estimateSize: f.useCallback(() => P, [P]),
              measureElement: m,
              getItemKey: g,
              overscan: c,
              initialRect: a
                ? s
                : {
                    height: S.viewportHeight?.value ?? 1e3,
                    width: S.viewportWidth?.value ?? 1e3,
                  },
              initialOffset: p,
              observeElementOffset: D,
              observeElementRect: Te,
              onChange(ie, le) {
                d?.(ie.scrollOffset);
              },
            });
          return (
            (se.shouldAdjustScrollPositionOnItemSizeChange = (ie) =>
              !I && a !== void 0 && ie.start < (se.scrollOffset ?? 0)),
            We(se, P, y),
            (0, e.jsx)(Ee, { ...i, virtualizer: se, eRowWindow: q(se) })
          );
        }
        function Ee(i) {
          const {
              virtualizer: t,
              eRowWindow: n,
              nRowGap: a,
              renderItem: s,
              bDynamic: o,
              scrollAlign: l = "center",
              bNativeScrollIntoView: c,
            } = i,
            p = t.getVirtualItems(),
            d =
              n == "first"
                ? t.measurementsCache[0]
                : t.measurementsCache[t.measurementsCache.length - 1],
            m = n == "all" ? p : d ? [d] : [],
            g = m.length ? m[0].start - t.options.scrollMargin : 0,
            y = Math.max(0, t.getTotalSize());
          return (0, e.jsx)(j.Z, {
            "flow-children": "column",
            navEntryPreferPosition: ve.iU.MAINTAIN_Y,
            style: { height: `${y}px`, width: "100%", position: "relative" },
            children: (0, e.jsx)("div", {
              style: {
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                transform: `translateY( ${g}px )`,
              },
              children: m.map((_) =>
                (0, e.jsx)(
                  ke,
                  {
                    virtualizer: t,
                    bDynamic: o,
                    scrollAlign: l,
                    bNativeScrollIntoView: c,
                    idx: _.index,
                    rowGap: a,
                    renderItem: s,
                  },
                  _.key,
                ),
              ),
            }),
          });
        }
        function fe(i) {
          return (...t) => {
            queueMicrotask(() => {
              (0, f.startTransition)(() => {
                i(...t);
              });
            });
          };
        }
        function Se(i, t) {
          const n = i.scrollElement;
          if (!n) return;
          let a;
          "scrollX" in n
            ? (a = fe((l) =>
                t(n[i.options.horizontal ? "scrollX" : "scrollY"], l),
              ))
            : (a = fe((l) =>
                t(n[i.options.horizontal ? "scrollLeft" : "scrollTop"], l),
              ));
          const s = () => a(!0),
            o = () => a(!1);
          return (
            o(),
            n.addEventListener("scroll", s, { passive: !0 }),
            n.addEventListener("scrollend", o, { passive: !0 }),
            () => {
              n.removeEventListener("scroll", s),
                n.removeEventListener("scrollend", o);
            }
          );
        }
        function we(i, t) {
          const n = i.scrollElement;
          if (!n) return;
          const a = fe(() => t({ width: n.innerWidth, height: n.innerHeight }));
          return (
            a(),
            n.addEventListener("resize", a, { passive: !0 }),
            () => {
              n.removeEventListener("resize", a);
            }
          );
        }
        function Te(i, t) {
          const n = i.scrollElement;
          if (!n) return;
          const a = fe((l) =>
            t({ width: Math.round(l.width), height: Math.round(l.height) }),
          );
          a(n.getBoundingClientRect());
          const s = n.ownerDocument.defaultView;
          if (!s?.ResizeObserver) return () => {};
          const o = new s.ResizeObserver((l) => {
            if (l[0]?.borderBoxSize[0]) {
              a({
                width: l[0].borderBoxSize[0].inlineSize,
                height: l[0].borderBoxSize[0].blockSize,
              });
              return;
            }
            a(n.getBoundingClientRect());
          });
          return (
            o.observe(n, { box: "border-box" }),
            () => {
              o.unobserve(n);
            }
          );
        }
        var Ge = u(48473);
        function Oe(i) {
          return new URLSearchParams(i.search).get("inviteuser");
        }
        function Le(i) {
          const { familyGroupID: t } = i,
            n = (0, k.zy)(),
            [a, s] = (0, f.useState)(Oe(n)),
            [o, l] = (0, f.useState)(a == null ? "splash" : "selectRole"),
            c = (0, x.Hs)(t),
            p =
              c.data.slot_cooldown_remaining_seconds() > 0 &&
              c.data.slot_cooldown_overrides() === 0,
            d = (m) => {
              s(m), l("selectRole");
            };
          return o === "splash"
            ? (0, e.jsx)(ze, { onClick: () => l("selectMethod") })
            : o === "selectMethod" && !p
              ? (0, e.jsx)(et, {
                  familyGroupID: t,
                  onCancel: () => l("splash"),
                  onSelect: d,
                })
              : o === "selectMethod" && p
                ? (0, e.jsx)(ct, {
                    slotCooldownSeconds:
                      c.data.slot_cooldown_remaining_seconds(),
                    familyGroupID: t,
                    onCancel: () => l("splash"),
                    onSelect: d,
                  })
                : o === "selectRole"
                  ? (0, e.jsx)(tt, {
                      familyGroupID: t,
                      steamid: a,
                      onCancel: () => l("splash"),
                    })
                  : null;
        }
        function ze(i) {
          const t = {
            month: "long",
            day: "numeric",
            year: "numeric",
            weekday: void 0,
          };
          return (0, e.jsx)("div", {
            className: v.InviteButtonCtn,
            children: (0, e.jsxs)(C.jn, {
              noFocusRing: !1,
              className: v.InviteButton,
              onClick: i.onClick,
              children: [
                W.e6B({}),
                (0, e.jsx)("span", {
                  children: (0, r.we)("#FamilyManagement_InviteAMember"),
                }),
              ],
            }),
          });
        }
        function lt(i) {
          const { familyGroupID: t, onSelect: n } = i,
            a = (0, x.Hs)(t),
            s = (0, x.QU)(t),
            o = (0, A.EW)();
          (0, x.gv)(
            s,
            "#FamilyManagement_ErrorLoadUsersSharingDevice",
            x.eS.k_EFamilyQueryGetUsersSharingDevice,
          );
          const l = s.data
            ?.users()
            .filter(
              (c) => !a.data?.pending_invites().some((p) => p.steamid() == c),
            )
            .filter((c) => o.data?.indexOf(c) === -1);
          return s.isError || l?.length == 0 || !o.isSuccess
            ? null
            : (0, e.jsxs)(e.Fragment, {
                children: [
                  (0, e.jsx)("div", {
                    className: v.Text,
                    children: (0, r.we)("#FamilyManagement_PreviousUsers"),
                  }),
                  s.isLoading
                    ? (0, e.jsx)("div", {
                        className: v.ThrobberContainer,
                        children: (0, e.jsx)(R.t, {}),
                      })
                    : (0, e.jsx)(Pt, { steamids: l, onSelect: n }),
                ],
              });
        }
        function et(i) {
          const { familyGroupID: t, onSelect: n, onCancel: a } = i;
          return (0, e.jsxs)("div", {
            className: v.SelectAccountContainer,
            children: [
              (0, e.jsx)(C.wl, {
                className: v.CloseButton,
                onClick: a,
                children: (0, e.jsx)(W.sED, {}),
              }),
              (0, e.jsx)("div", {
                className: v.Header,
                children: (0, r.we)("#FamilyManagement_InviteAMember"),
              }),
              (0, e.jsx)("div", {
                className: v.Text,
                children: (0, r.we)("#FamilyManagement_InviteMethodText"),
              }),
              (0, e.jsx)(j.Z, {
                className: v.MethodButtons,
                children: (0, e.jsx)(_n, { familyGroupID: t, onSelect: n }),
              }),
              (0, e.jsx)(lt, { familyGroupID: t, onSelect: n }),
            ],
          });
        }
        function ct(i) {
          const {
            familyGroupID: t,
            onSelect: n,
            onCancel: a,
            slotCooldownSeconds: s,
          } = i;
          let o = (0, f.useRef)(
            (0, r.TW)(Math.floor(new Date().getTime() / 1e3) + s, !1, !0),
          );
          const l = (0, x.Hs)(t),
            c = (0, A.EW)();
          if (!c.isSuccess) return null;
          const p = l.data
            .former_members()
            .map((d) => d.steamid())
            .filter((d) => c.data.indexOf(d) === -1);
          return (0, e.jsxs)("div", {
            className: v.SelectAccountContainer,
            children: [
              (0, e.jsx)(C.wl, {
                className: v.CloseButton,
                noFocusRing: !1,
                onClick: a,
                children: (0, e.jsx)(W.sED, {}),
              }),
              (0, e.jsx)("div", {
                className: v.Header,
                children: (0, r.we)("#FamilyManagement_InviteAMember"),
              }),
              (0, e.jsx)("div", {
                className: v.Text,
                children: (0, r.we)(
                  "#FamilyManagement_CooldownAndReinvite",
                  o.current,
                ),
              }),
              (0, e.jsx)(Pt, { steamids: p, onSelect: n }),
            ],
          });
        }
        function tt(i) {
          const { familyGroupID: t, steamid: n, onCancel: a } = i,
            { setErrorMessage: s } = (0, x.RC)(),
            o = (0, ne.js)(n);
          (0, x.p8)(o, "#FamilyManagement_ErrorLoadFamilyGeneric");
          const [l, c] = (0, f.useState)(h.PQ.kr),
            [p, d] = (0, f.useState)(null),
            m = (0, x.HM)(t, n, l);
          (0, x.gv)(
            m,
            "#FamilyManagement_ErrorInvite",
            x.eS.k_EFamilyQueryInviteToFamily,
          );
          const g = () => {
            m.mutateAsync(null, {
              onSuccess: (I) => {
                I.two_factor_method() === h.GC.uk
                  ? a()
                  : I.two_factor_method() === h.GC.SC
                    ? d("awaitmobile2fa")
                    : I.two_factor_method() === h.GC.Mk && d("awaitemail2fa");
              },
            });
          };
          if (o.isLoading)
            return (0, e.jsx)("div", {
              className: v.ThrobberContainer,
              children: (0, e.jsx)(R.t, {}),
            });
          const y = o.data,
            _ = (I) => {
              s(""), c(I);
            };
          return (0, e.jsxs)("div", {
            className: v.SelectRoleContainer,
            children: [
              (0, e.jsx)(U.EN, {
                active: l !== h.PQ.kr,
                children:
                  p === "awaitmobile2fa" || p === "awaitemail2fa"
                    ? (0, e.jsx)(yn, {
                        onClose: a,
                        eMethod: p === "awaitemail2fa" ? h.GC.Mk : h.GC.SC,
                      })
                    : (0, e.jsx)(gn, {
                        steamid: n,
                        role: l,
                        onCancel: () => c(h.PQ.kr),
                        onConfirm: g,
                      }),
              }),
              (0, e.jsx)(j.Z, {
                className: v.CloseButton,
                onActivate: a,
                children: (0, e.jsx)(W.sED, {}),
              }),
              (0, e.jsxs)("div", {
                className: v.Header,
                children: [
                  (0, e.jsx)("span", {
                    className: v.Invite,
                    children: (0, r.we)("#FamilyManagement_Invite"),
                  }),
                  (0, e.jsx)(te.i8, {
                    className: v.Avatar,
                    persona: y,
                    size: "Large",
                    statusPosition: "right",
                  }),
                  (0, e.jsx)("div", {
                    className: v.PlayerName,
                    children: y?.m_strPlayerName,
                  }),
                ],
              }),
              (0, e.jsx)("div", {
                className: v.Text,
                children: (0, r.we)("#FamilyManagement_ChooseRole"),
              }),
              (0, e.jsxs)(j.Z, {
                className: v.InviteButtonCtn,
                children: [
                  (0, e.jsx)(Ct, { role: h.PQ.s, onSelect: () => _(h.PQ.s) }),
                  (0, e.jsx)(Ct, { role: h.PQ.sf, onSelect: () => _(h.PQ.sf) }),
                ],
              }),
            ],
          });
        }
        function yn(i) {
          const { eMethod: t, onClose: n } = i;
          let a;
          if (t === h.GC.SC && Y.TS.IN_MOBILE_WEBVIEW)
            a = "#FamilyManagement_Await2FAForInvite_MobileAuth_InMobileApp";
          else if (t === h.GC.SC)
            a = "#FamilyManagement_Await2FAForInvite_MobileAuth";
          else if (t === h.GC.Mk)
            a = "#FamilyManagement_Await2FAForInvite_EmailAuth";
          else return null;
          return (0, e.jsxs)(U.o0, {
            bAlertDialog: !0,
            onOK: n,
            closeModal: n,
            strTitle: (0, r.we)("#FamilyManagement_ConfirmInviteTitle"),
            children: [
              (0, e.jsx)(ce.pC, {}),
              (0, e.jsx)("div", { className: v.Text, children: (0, r.we)(a) }),
            ],
          });
        }
        function gn(i) {
          const { onCancel: t, onConfirm: n, steamid: a, role: s } = i,
            l = (0, ne.js)(a).data;
          return (0, e.jsxs)(U.o0, {
            onCancel: t,
            strTitle: (0, r.we)("#FamilyManagement_ConfirmInviteTitle"),
            onOK: n,
            strOKButtonText: (0, r.we)("#FamilyManagement_Invite"),
            children: [
              (0, e.jsx)(ce.pC, {}),
              (0, e.jsxs)("div", {
                className: v.ProfilePlusRole,
                children: [
                  (0, e.jsx)(te.i8, {
                    className: v.Avatar,
                    persona: l,
                    size: "Large",
                    statusPosition: "right",
                  }),
                  (0, e.jsx)("div", {
                    className: v.PlayerName,
                    children: l?.m_strPlayerName,
                  }),
                  (0, e.jsx)(ce.iM, { className: v.RoleIcon, role: s }),
                  (0, e.jsx)("div", {
                    className: v.RoleName,
                    children: (0, r.we)(`#FamilyManagement_Role_${s}`),
                  }),
                ],
              }),
              (0, e.jsx)("div", {
                className: v.Text,
                children: (0, r.we)("#FamilyManagement_ConfirmInvite"),
              }),
            ],
          });
        }
        function _n(i) {
          const { familyGroupID: t, onSelect: n } = i,
            [a, s] = (0, f.useState)(!1),
            l = (0, x.Hs)(t)
              .data.members()
              .map((c) => c.steamid());
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(U.EN, {
                active: a,
                children: (0, e.jsx)(U.eV, {
                  title: (0, r.we)("#FamilyManagement_InviteMethodFriend"),
                  className: v.SelectFriendModal,
                  onCancel: () => s(!1),
                  children: (0, e.jsx)(vn, {
                    setSelectedFriendSteamID: n,
                    excludeSteamIDs: l,
                  }),
                }),
              }),
              (0, e.jsx)(C.$n, {
                noFocusRing: !1,
                onClick: () => s(!0),
                children: (0, r.we)("#FamilyManagement_InviteMethodFriend"),
              }),
            ],
          });
        }
        function Pt(i) {
          const { steamids: t, onSelect: n } = i;
          return (0, e.jsx)(j.Z, {
            className: v.ProfileSelector,
            "flow-children": "grid",
            children: t.map((a) =>
              (0, e.jsx)(xn, { steamid: a, onClick: () => n(a) }, a),
            ),
          });
        }
        function xn(i) {
          const { steamid: t, onClick: n } = i,
            a = new E.b(t),
            s = (0, ne.js)(t),
            o = (0, A.M8)(),
            c = (0, z.T)().data?.preferences().parenthesize_nicknames(),
            p = o.data?.get(a.GetAccountID());
          if (
            ((0, x.p8)(s, "#FamilyManagement_ErrorLoadFamilyGeneric"),
            s.isLoading)
          )
            return null;
          const d = s.data;
          return (0, e.jsxs)(j.Z, {
            className: v.ProfileChoice,
            onActivate: n,
            children: [
              (0, e.jsx)("div", {
                className: v.Avatar,
                children: (0, e.jsx)(te.i8, {
                  className: v.Avatar,
                  persona: d,
                  size: "Large",
                  statusPosition: "right",
                }),
              }),
              (0, e.jsx)(Z.D, {
                className: v.PlayerName,
                bParenthesizeNicknames: c,
                bIsSelf: !1,
                bHideStatus: !0,
                bHidePersona: !1,
                bCompactView: !1,
                persona: d,
                strNickname: p,
                eFriendRelationship: pe._UC,
              }),
            ],
          });
        }
        function Ct(i) {
          const { role: t, onSelect: n } = i;
          return (0, e.jsxs)(C.jn, {
            className: (0, T.A)(v.InviteButton),
            noFocusRing: !1,
            onClick: () => n(t),
            children: [
              t == h.PQ.sf ? (0, e.jsx)(W.Bir, {}) : (0, e.jsx)(W.d1w, {}),
              (0, e.jsx)("span", {
                children: (0, r.we)(
                  `#FamilyManagement_InviteAsRoleButton_${t}`,
                ),
              }),
            ],
          });
        }
        function vn(i) {
          const { setSelectedFriendSteamID: t, excludeSteamIDs: n } = i,
            a = (0, A.Dv)();
          (0, x.p8)(a, "#FamilyManagement_ErrorLoadFriendListGeneric");
          const s = a.data;
          return a.isLoading
            ? (0, e.jsx)("div", {
                className: v.ThrobberContainer,
                children: (0, e.jsx)(R.t, {}),
              })
            : a.isError
              ? null
              : (0, e.jsx)(Sn, {
                  setSelectedFriendSteamID: t,
                  steamIDs: s,
                  excludeSteamIDs: n,
                });
        }
        function Sn(i) {
          const {
              setSelectedFriendSteamID: t,
              steamIDs: n,
              excludeSteamIDs: a,
            } = i,
            s = (0, ne.DW)(n),
            o = (0, A.M8)(),
            l = (0, z.T)(),
            [c, p] = f.useState(""),
            d = l.data?.preferences().parenthesize_nicknames(),
            m = f.useCallback(
              (I, P) => {
                let S = I.persona.m_strPlayerName,
                  D = P.persona.m_strPlayerName;
                return (
                  d ||
                    (I.nickname && (S = I.nickname),
                    P.nickname && (D = P.nickname)),
                  (0, Ge.lY)(S, D) ||
                    I.persona.m_steamid.GetAccountID() -
                      P.persona.m_steamid.GetAccountID()
                );
              },
              [d],
            ),
            g = (0, f.useMemo)(
              () =>
                s
                  .map((S) => S.data)
                  .filter((S) => !!S)
                  .filter(
                    (S) =>
                      c == "" ||
                      Pn(
                        c.toLowerCase(),
                        S?.m_strPlayerName,
                        o.data?.get(S?.m_steamid.GetAccountID()),
                      ),
                  )
                  .filter(
                    (S) => a.indexOf(S?.m_steamid.ConvertTo64BitString()) == -1,
                  )
                  .map((S) => ({
                    persona: S,
                    nickname: o.data?.get(S?.m_steamid.GetAccountID()),
                  }))
                  .sort(m),
              [a, s, o, c, m],
            ),
            y = f.useCallback(
              (I) =>
                (0, e.jsx)(Cn, {
                  persona: g[I].persona,
                  nickname: g[I].nickname,
                  setSelectedFriendSteamID: t,
                }),
              [g, t],
            ),
            _ = s.some((I) => I.isLoading);
          return (0, e.jsxs)(j.Z, {
            className: v.InviteFriendSelector,
            children: [
              (0, e.jsx)("p", {
                className: v.InviteText,
                children: (0, r.we)("#FamilyManagement_SelectFriend"),
              }),
              _ && (0, e.jsx)(R.t, { size: "xlarge" }),
              !_ &&
                (0, e.jsxs)(e.Fragment, {
                  children: [
                    (0, e.jsx)(j.Z, {
                      className: v.InputContainer,
                      children: (0, e.jsx)(jn, { strFilter: c, setFilter: p }),
                    }),
                    (0, e.jsx)(j.Z, {
                      className: v.FriendList,
                      children: (0, e.jsx)(be, {
                        nRows: g.length,
                        nItemHeight: 84,
                        renderItem: y,
                      }),
                    }),
                  ],
                }),
            ],
          });
        }
        function jn(i) {
          const { strFilter: t, setFilter: n } = i;
          return (0, e.jsx)(C.pd, {
            autoFocus: !0,
            bShowClearAction: !0,
            className: v.InviteFriendInput,
            type: "text",
            onChange: (a) => n(a.target.value),
            value: t,
            placeholder: (0, r.we)(
              "#FamilyManagement_InviteFriendNamePlaceholder",
            ),
          });
        }
        function Pn(i, t, n) {
          return (
            !i ||
            (t && t.toLowerCase().includes(i)) ||
            (n && n.toLowerCase().includes(i))
          );
        }
        function Cn(i) {
          const { persona: t, nickname: n, setSelectedFriendSteamID: a } = i,
            o = (0, z.T)().data?.preferences().parenthesize_nicknames();
          return (0, e.jsxs)(j.Z, {
            className: v.FriendSelectorRow,
            onActivate: (l) => {
              a(t.m_steamid.ConvertTo64BitString());
            },
            children: [
              (0, e.jsx)(te.i8, {
                className: v.Avatar,
                persona: t,
                size: "Large",
                statusPosition: "right",
              }),
              (0, e.jsx)(Z.D, {
                className: v.PlayerName,
                bIsSelf: !1,
                bHideStatus: !1,
                bHidePersona: !1,
                bParenthesizeNicknames: o,
                bCompactView: !1,
                persona: t,
                strNickname: n,
                eFriendRelationship: pe._UC,
              }),
            ],
          });
        }
        var M = u(16195),
          ae = u(34286),
          Fn = u(20803),
          Je = u(30096);
        function In(i) {
          return typeof i.cooldown_seconds_remaining == "function";
        }
        function mt(i) {
          const { familyGroupID: t, member: n } = i,
            a = (0, ne.js)(n.steamid());
          (0, x.p8)(a, "#FamilyManagement_ErrorLoadFamilyGeneric");
          const [s, o, l] = (0, Je.uD)(!1);
          if (!a.isSuccess) return null;
          let c = a.data,
            p = !1,
            d = null;
          return (
            In(n)
              ? ((d = (0, e.jsx)(Nn, {
                  active: s,
                  onClose: l,
                  familyGroupID: t,
                  member: n,
                  persona: c,
                })),
                (p = !0))
              : (d = (0, e.jsx)(Mn, {
                  active: s,
                  onClose: l,
                  familyGroupID: t,
                  invited: n,
                  persona: c,
                })),
            (0, e.jsxs)(e.Fragment, {
              children: [
                d,
                (0, e.jsx)(j.Z, {
                  className: (0, T.A)(Fn.FamilyMemberRow, ae.FamilyMemberRow),
                  onActivate: o,
                  children: (0, e.jsx)("div", {
                    className: ae.TopRow,
                    children: (0, e.jsx)(ce.ff, {
                      persona: c,
                      role: n.role(),
                      invitePending: !p,
                    }),
                  }),
                }),
              ],
            })
          );
        }
        function wn(i) {
          const t = new Date(i.time_joined() * 1e3);
          return (
            (new Date().getTime() - t.getTime()) / (1e3 * 24 * 60 * 60) < 30
          );
        }
        function Dn(i) {
          const {
              active: t,
              onClose: n,
              familyGroupID: a,
              member: s,
              persona: o,
              isSelf: l,
            } = i,
            { setErrorMessage: c } = (0, x.RC)(),
            p = (0, x._K)(a, s.steamid()),
            d = (0, k.W6)(),
            m = (0, k.zy)(),
            g = Math.ceil(s.cooldown_seconds_remaining() / (3600 * 24) || 0);
          let y = l
            ? (0, r.we)("#FamilyManagement_RemoveMemberConfirmationText_Self")
            : (0, r.we)(
                "#FamilyManagement_RemoveMemberConfirmationText",
                o?.m_strPlayerName,
              );
          g !== 0 &&
            (y +=
              " " +
              (l
                ? (0, r.Yp)("#FamilyManagement_CannotJoinFor_Self", g)
                : (0, r.we)("#FamilyManagement_CannotJoinFor", g)));
          let _ = l
            ? (0, r.we)("#FamilyManagement_RemoveMemberConfirmationTitle_Self")
            : (0, r.we)("#FamilyManagement_RemoveMemberConfirmationTitle");
          const I = () => {
            c(null), p.mutate(null, { onSuccess: () => d.push(m.pathname) });
          };
          return (0, e.jsx)(U.EN, {
            active: t,
            children: (0, e.jsx)(U.o0, {
              strTitle: _,
              onOK: I,
              closeModal: n,
              children: (0, e.jsx)("div", {
                className: ae.RemovalDescription,
                children: y,
              }),
            }),
          });
        }
        function Nn(i) {
          const {
              active: t,
              onClose: n,
              familyGroupID: a,
              member: s,
              persona: o,
            } = i,
            [l, c, p] = (0, Je.uD)(!1),
            d = (0, x._K)(a, s.steamid()),
            { setErrorMessage: m } = (0, x.RC)();
          (0, x.gv)(
            d,
            "#FamilyManagement_ErrorRemovingFromFamily",
            x.eS.k_EFamilyQueryRemoveFromFamily,
          );
          const y = (0, O.LH)() == s.steamid(),
            _ = wn(s),
            P = (0, x.vo)().data?.role(),
            D = (0, x.Hs)(a).data.members().length === 1,
            q = (0, k.W6)(),
            { url: se } = (0, k.W5)(),
            ie = () => {
              m(null), c(), n();
            },
            le = () => {
              const Be = new E.b(s.steamid());
              window.location.href =
                Y.TS.HELP_BASE_URL +
                "wizard/HelpRecoverFamilyMember?childid=" +
                Be.GetAccountID();
            },
            Ne = () => {
              window.location.href =
                Y.TS.COMMUNITY_BASE_URL + "profiles/" + s.steamid();
            },
            _e = () => {
              window.location.href =
                Y.TS.STORE_BASE_URL + "wishlist/profiles/" + s.steamid();
            },
            ye = () => {
              const Be = se.endsWith("/") ? se.slice(0, -1) : se;
              q.push(`${Be}/parentalcontrols/${s.steamid()}`);
            };
          let Ce = (0, r.we)(
            "#FamilyManagement_ManageDialogTitle",
            o?.m_strPlayerName,
          );
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(Dn, {
                active: l,
                onClose: p,
                familyGroupID: a,
                member: s,
                persona: o,
                isSelf: y,
              }),
              (0, e.jsx)(U.EN, {
                active: t,
                children: (0, e.jsx)(U.eV, {
                  className: ae.FamilyMemberActionsDialog,
                  titleClassName: ae.Title,
                  title: Ce,
                  bAllowFullSize: !0,
                  bOKDisabled: !0,
                  closeModal: n,
                  bHideCloseIcon: !0,
                  children: (0, e.jsxs)("div", {
                    className: ae.ButtonList,
                    children: [
                      (0, e.jsx)(C.$n, {
                        className: ae.ManagementButton,
                        onClick: Ne,
                        children: (0, r.we)("#FamilyManagement_ProfileLink"),
                      }),
                      (0, e.jsx)(C.$n, {
                        className: ae.ManagementButton,
                        onClick: _e,
                        children: (0, r.we)("#FamilyManagement_WishlistLink"),
                      }),
                      (0, e.jsx)(C.Nu, { className: ae.Separator }),
                      !y &&
                        s.role() == h.PQ.sf &&
                        (0, e.jsx)(C.$n, {
                          className: ae.ManagementButton,
                          onClick: ye,
                          children: (0, r.we)(
                            "#FamilyManagement_ParentalControls",
                          ),
                        }),
                      !_ &&
                        !y &&
                        s.role() == h.PQ.sf &&
                        (0, e.jsx)(C.$n, {
                          className: ae.ManagementButton,
                          disabled: _,
                          onClick: le,
                          children: (0, r.we)(
                            "#FamilyManagement_RecoverMember",
                          ),
                        }),
                      !D &&
                        P !== h.PQ.sf &&
                        (0, e.jsx)(C.$n, {
                          className: (0, T.A)(ae.ManagementButton, ae.Remove),
                          onClick: ie,
                          children: (0, r.we)(
                            y
                              ? "#FamilyManagement_RemoveMember_Self"
                              : "#FamilyManagement_RemoveMember",
                          ),
                        }),
                      D && (0, e.jsx)(An, { familyGroupID: a }),
                      (0, e.jsx)(C.Nu, { className: ae.Separator }),
                      (0, e.jsx)(C.$n, {
                        className: ae.ManagementButton,
                        onClick: n,
                        children: (0, r.we)("#FamilyManagement_Cancel"),
                      }),
                    ],
                  }),
                }),
              }),
            ],
          });
        }
        function bn(i) {
          const {
              active: t,
              onClose: n,
              familyGroupID: a,
              invited: s,
              persona: o,
            } = i,
            l = (0, x.v2)(a, s.steamid()),
            { setErrorMessage: c } = (0, x.RC)();
          (0, x.gv)(
            l,
            "#FamilyManagement_ErrorCancelInvite",
            x.eS.k_EFamilyQueryDeclineInvite,
          );
          const p = () => {
            c(null), l.mutate();
          };
          let d = (0, r.we)(
            "#FamilyManagement_CancelInvitationConfirmationText",
            o?.m_strPlayerName,
          );
          return (0, e.jsx)(U.EN, {
            active: t,
            children: (0, e.jsx)(U.o0, {
              strTitle: (0, r.we)(
                "#FamilyManagement_CancelInvitationConfirmationTitle",
              ),
              strDescription: d,
              onOK: p,
              closeModal: n,
            }),
          });
        }
        function Mn(i) {
          const {
              active: t,
              onClose: n,
              familyGroupID: a,
              invited: s,
              persona: o,
            } = i,
            [l, c, p] = (0, Je.uD)(!1),
            d = (0, x.v2)(a, s.steamid()),
            { setErrorMessage: m } = (0, x.RC)();
          (0, x.gv)(
            d,
            "#FamilyManagement_ErrorCancelInvite",
            x.eS.k_EFamilyQueryDeclineInvite,
          );
          const g = () => {
              window.location.href =
                Y.TS.COMMUNITY_BASE_URL + "profiles/" + s.steamid();
            },
            y = () => {
              m(null), c(), n();
            };
          let _ = (0, r.we)(
            "#FamilyManagement_ManageDialogTitle",
            o?.m_strPlayerName,
          );
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(bn, {
                active: l,
                onClose: p,
                familyGroupID: a,
                invited: s,
                persona: o,
              }),
              (0, e.jsx)(U.EN, {
                active: t,
                children: (0, e.jsx)(U.eV, {
                  className: ae.FamilyMemberActionsDialog,
                  titleClassName: ae.Title,
                  title: _,
                  bAllowFullSize: !0,
                  bOKDisabled: !0,
                  closeModal: n,
                  bHideCloseIcon: !0,
                  children: (0, e.jsxs)("div", {
                    className: ae.ButtonList,
                    children: [
                      (0, e.jsx)(C.$n, {
                        className: ae.ManagementButton,
                        onClick: g,
                        children: (0, r.we)("#FamilyManagement_ProfileLink"),
                      }),
                      (0, e.jsx)(C.Nu, { className: ae.Separator }),
                      (0, e.jsx)(C.$n, {
                        className: (0, T.A)(
                          ae.ManagementButton,
                          ae.CancelInvite,
                        ),
                        onClick: y,
                        children: (0, r.we)(
                          "#FamilyManagement_CancelInviteButton",
                        ),
                      }),
                      (0, e.jsx)(C.Nu, { className: ae.Separator }),
                      (0, e.jsx)(C.$n, {
                        className: ae.ManagementButton,
                        onClick: n,
                        children: (0, r.we)("#FamilyManagement_Cancel"),
                      }),
                    ],
                  }),
                }),
              }),
            ],
          });
        }
        function An(i) {
          const { familyGroupID: t } = i,
            [n, a, s] = (0, Je.uD)(!1),
            o = (0, x.Y0)(t),
            { setErrorMessage: l } = (0, x.RC)();
          (0, x.gv)(
            o,
            "#FamilyManagement_ErrorDeleteFamily",
            x.eS.k_EFamilyQueryDeleteFamily,
          );
          const p = (0, x.vo)().data.cooldown_seconds_remaining(),
            d = Date.now() / 1e3 + p,
            m = (0, r.TW)(d),
            g = (0, k.W6)();
          if (o.isPending)
            return (0, e.jsx)("div", {
              className: ae.ThrobberContainer,
              children: (0, e.jsx)(R.t, {}),
            });
          const y = () => {
              l(null), a();
            },
            _ = () => {
              l(null),
                o.mutate(null, {
                  onSuccess: () => g.push("/account/familymanagement"),
                });
            };
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(U.EN, {
                active: n,
                children: (0, e.jsxs)(U.o0, {
                  strTitle: (0, r.we)(
                    "#FamilyManagement_DeleteFamilyConfirmationTitle",
                  ),
                  onOK: _,
                  closeModal: s,
                  children: [
                    p > 0 &&
                      (0, e.jsxs)(e.Fragment, {
                        children: [
                          (0, e.jsx)("p", {
                            children: (0, r.we)(
                              "#FamilyManagement_DeleteFamilyConfirmationText_1",
                            ),
                          }),
                          (0, e.jsxs)("ul", {
                            children: [
                              (0, e.jsx)("li", {
                                children: (0, r.we)(
                                  "#FamilyManagement_DeleteFamilyConfirmationText_2",
                                  m,
                                ),
                              }),
                              (0, e.jsx)("li", {
                                children: (0, r.we)(
                                  "#FamilyManagement_DeleteFamilyConfirmationText_3",
                                ),
                              }),
                              (0, e.jsx)("li", {
                                children: (0, r.we)(
                                  "#FamilyManagement_DeleteFamilyConfirmationText_4",
                                ),
                              }),
                            ],
                          }),
                        ],
                      }),
                    p === 0 &&
                      (0, e.jsx)("p", {
                        children: (0, r.we)(
                          "#FamilyManagement_DeleteFamilyConfirmationText_NoCooldown",
                        ),
                      }),
                  ],
                }),
              }),
              (0, e.jsx)(C.$n, {
                className: (0, T.A)(ae.DeleteFamily, ae.ManagementButton),
                noFocusRing: !1,
                onClick: y,
                children: (0, r.we)("#FamilyManagement_DeleteFamilyButton"),
              }),
            ],
          });
        }
        var Me = u(92264);
        function Rn(i) {
          const { familyGroupID: t, ...n } = i,
            a = (0, x.Ww)(t);
          (0, x.gv)(
            a,
            "#FamilyManagement_ErrorLoadHistory",
            x.eS.k_EFamilyQueryLoadHistory,
          );
          let s = (0, f.useMemo)(() => a.data?.slice(0).reverse() || [], [a]);
          const o = parseInt(n.nFamilyHistoryRowHeight),
            l = f.useCallback(
              (c) =>
                (0, e.jsx)(En, {
                  entry: s[c],
                  styleProps: n,
                  fnRenderName: i.FnRenderName,
                }),
              [s, n, i.FnRenderName],
            );
          return (0, e.jsx)(j.Z, {
            className: n.FamilyHistory,
            children: (0, e.jsx)(be, {
              bDynamic: !0,
              nRows: s.length,
              nItemHeight: o,
              renderItem: l,
            }),
          });
        }
        function En(i) {
          let { entry: t, styleProps: n, fnRenderName: a, ...s } = i;
          const o = Intl.DateTimeFormat(r.pf.GetPreferredLocales(), {
              month: "numeric",
              year: "numeric",
              day: "numeric",
              hour: "numeric",
              minute: "numeric",
            }),
            l = new Date(parseInt(t.timestamp()) * 1e3),
            c = o.format(l),
            p = (0, r.we)("#FamilyHistory_SteamSupport"),
            d = (0, ne.js)(t.actor_steamid());
          let m,
            g = a(t.actor_steamid());
          t.actor_steamid()
            ? t.by_support()
              ? (m = (0, e.jsxs)(e.Fragment, {
                  children: [
                    (0, e.jsx)("b", { children: d.data?.m_strPlayerName }),
                    " (",
                    p,
                    ")",
                  ],
                }))
              : (m = g)
            : (m = p);
          let y = JSON.parse(t.body());
          const _ = a(y.account),
            I = y.seconds && (0, Me.R2)(y.seconds),
            P = y.reason ? y.reason : "";
          let S;
          switch (t.type()) {
            case h.NP.E4:
              S = (0, r.PP)("#FamilyHistory_FamilyCreated", m, y.name);
              break;
            case h.NP.RE:
              S = (0, r.PP)("#FamilyHistory_FamilyModified", m, y.name);
              break;
            case h.NP.xD:
              S = (0, r.PP)("#FamilyHistory_FamilyDeleted", m);
              break;
            case h.NP.fd:
              const D = (0, r.we)(
                `#FamilyManagement_Role_${y.role}`,
              ).toLocaleLowerCase();
              S = (0, r.PP)("#FamilyHistory_AccountInvited", m, D, _);
              break;
            case h.NP.M4:
              S = (0, r.PP)("#FamilyHistory_InviteDeniedByFamilySize", m, _);
              break;
            case h.NP.Ve:
              S = (0, r.PP)("#FamilyHistory_JoinedFamily", m);
              break;
            case h.NP.pu:
              S = (0, r.PP)("#FamilyHistory_JoinDeniedByRegionMismatch", m);
              break;
            case h.NP.SW:
              S = (0, r.PP)("#FamilyHistory_JoinDenied", m, P);
              break;
            case h.NP.Ig:
              S = (0, r.PP)("#FamilyHistory_JoinDeniedByMissingIpAddress", m);
              break;
            case h.NP.yu:
              S = (0, r.PP)("#FamilyHistory_JoinDeniedByFamilyCooldown", m, I);
              break;
            case h.NP.zA:
              S = (0, r.PP)("#FamilyHistory_JoinDeniedByUserCooldown", m, I);
              break;
            case h.NP.kv:
              S = (0, r.PP)("#FamilyHistory_JoinDeniedByOtherFamily", m);
              break;
            case h.NP.yt:
              S = (0, r.PP)("#FamilyHistory_AccountRemoved", m, _);
              break;
            case h.NP.H$:
              t.actor_steamid() === y.account
                ? (S = (0, r.PP)("#FamilyHistory_InviteRejected", m))
                : (S = (0, r.PP)("#FamilyHistory_InviteCancelled", m, _));
              break;
            case h.NP.am:
              S = (0, r.PP)("#FamilyHistory_PurchaseRequested", m);
              break;
            case h.NP.n0:
              S = (0, r.PP)("#FamilyHistory_ParentalSettingsDisabled", m, _);
              break;
            case h.NP.i6:
              S = (0, r.PP)("#FamilyHistory_ParentalSettingsEnabled", m, _);
              break;
            case h.NP.Pj:
              S = (0, r.PP)("#FamilyHistory_ParentalSettingsChanged", m, _);
              break;
            case h.NP.v9:
              S = (0, r.PP)(
                "#FamilyHistory_FamilyCooldownOverridesChanged",
                m,
                y.count,
              );
              break;
            case h.NP.yZ:
              S = (0, r.PP)("#FamilyHistory_PurchaseRequestCanceled", m);
              break;
            case h.NP.Wl:
              S = (0, r.PP)("#FamilyHistory_PurchaseRequestApproved", m, _);
              break;
            case h.NP.re:
              S = (0, r.PP)("#FamilyHistory_PurchaseRequestDeclined", m, _);
              break;
            case h.NP.Pm:
              S = (0, r.PP)("#FamilyHistory_CooldownSkipConsumed", m);
              break;
            case h.NP.qe:
              S = (0, r.PP)("#FamilyHistory_FamilyRestored", m);
              break;
            case h.NP.X9:
              S = (0, r.PP)("#FamilyHistory_ForceAcceptedInvite", m, _);
              break;
            default:
              S = (0, r.PP)("#FamilyHistory_UnknownChange");
              break;
          }
          return (0, e.jsxs)(j.Z, {
            className: (0, T.A)(n.Entry),
            focusable: !0,
            ...s,
            children: [
              (0, e.jsx)("div", {
                className: (0, T.A)(n.Timestamp),
                children: c,
              }),
              (0, e.jsx)("div", {
                className: (0, T.A)(n.EntryText),
                children: S,
              }),
            ],
          });
        }
        var oe = u(96214),
          Tn = u(22185),
          Gn = u(84278),
          K = u.n(Gn),
          Ft = u(54407),
          Ae = u(84676),
          On = u(19367),
          De = u.n(On),
          Ln = u(41635),
          Bn = u(71742),
          kn = u(92298),
          It = u.n(kn),
          F = u(73712),
          ee = u(79365),
          Hn = u(21721),
          Wn = u(64238),
          Un = u.n(Wn),
          Ye = u(29528);
        const Vn =
          u.p +
          "images/applications/store/defaultappimage.png?v=valveisgoodatcaching";
        var Kn = u(2259),
          zn = u(1242);
        function Qn(i) {
          const {
              idxStart: t,
              idxEnd: n,
              renderItem: a,
              height: s,
              itemWidth: o,
              columnGap: l,
            } = i,
            c = [];
          for (let p = t; p < n; p++) c.push(a(p, o));
          return (0, e.jsx)(j.Z, {
            className: zn.VirtualizedGridRow,
            style: { height: s, gap: l },
            children: c,
          });
        }
        function qn(i) {
          const {
              nItems: t,
              renderItem: n,
              nAspectRatio: a,
              nColumns: s = 7,
              nColumnGap: o = 10,
              nRowGap: l = 10,
              onWidthChanged: c,
            } = i,
            [p, d] = f.useState(0),
            m = Math.ceil(t / s),
            g = Math.max(0, Math.floor((p - (s - 1) * o) / s)),
            y = Math.floor(g / a),
            _ = f.useCallback(
              (S) => {
                d(S.borderBoxSize[0].inlineSize),
                  c &&
                    c(
                      S.target.ownerDocument.defaultView?.innerWidth || 0,
                      S.borderBoxSize[0].inlineSize,
                    );
              },
              [c],
            ),
            I = (0, Kn.wY)(_),
            P = (S) =>
              (0, e.jsx)(
                Qn,
                {
                  idxStart: S * s,
                  idxEnd: Math.min(t, (S + 1) * s),
                  height: y,
                  itemWidth: g,
                  columnGap: o,
                  renderItem: n,
                },
                S,
              );
          return (0, e.jsx)(be, {
            ref: I,
            nRows: m,
            nItemHeight: y,
            nRowGap: l,
            renderItem: P,
          });
        }
        function Zn(i) {
          const { app: t, width: n, index: a, renderItem: s } = i,
            [o, l] = f.useState("loading"),
            c = (0, Hn.pd)(t.appid);
          if (c === void 0) return null;
          const p = o == "error" || !c;
          let d;
          p
            ? (d = (0, e.jsxs)(e.Fragment, {
                children: [
                  (0, e.jsx)("img", {
                    className: Ye.Capsule,
                    src: Vn,
                    alt: t.name,
                    loading: "lazy",
                  }),
                  (0, e.jsx)("div", { className: Ye.Label, children: t.name }),
                ],
              }))
            : (d = (0, e.jsx)("img", {
                className: Ye.Capsule,
                src: c,
                alt: t.name,
                onLoad: () => l("loaded"),
                onError: () => l("error"),
              }));
          const m = {
            className: Un()(Ye.AppGridItem, (p || o == "loaded") && Ye.Loaded),
            style: { width: n },
            fnScrollIntoViewHandler: () => !0,
            children: d,
          };
          return s(t, a, m);
        }
        function wt(i) {
          const { rgApps: t, renderItem: n, ...a } = i,
            s = f.useCallback(
              (o, l) => {
                const c = t[o];
                return (0, e.jsx)(
                  Zn,
                  { app: c, width: l, index: o, renderItem: n },
                  c.appid,
                );
              },
              [t, n],
            );
          return (0, e.jsx)(qn, {
            nItems: t.length,
            renderItem: s,
            nAspectRatio: 600 / 900,
            ...a,
          });
        }
        var dt = u(56718),
          ut = u(20117),
          Dt = u(40358),
          Jn = u(29522),
          Yn = u(16346),
          nt = u(56925),
          Xn = u(13977),
          Qe = u(34360),
          Nt = u(80702),
          bt = u(53107),
          Xe = u(82734),
          Q = u(63043);
        function Mt(i, t) {
          (0, bt.EP)(i, `steam://open/games/details/${t}`);
        }
        function pt(i, t) {
          t && (Y.TS.IN_CLIENT ? (window.location.href = t) : (0, bt.EP)(i, t));
        }
        function $n(i) {
          const { app: t, sort: n } = i,
            a = (0, O.LH)(),
            s = (0, nt.Uy)(t.appid),
            o = t.owner_steamids.filter((P) => P != a),
            l = (0, ne.DW)(o),
            c = (0, A.M8)(),
            d = (0, z.T)().data?.preferences().parenthesize_nicknames();
          let m = null;
          switch (t.exclude_reason) {
            case h.fO.RN:
              break;
            case h.fO.C2:
              m = "#FamilyGame_Excluded_License";
              break;
            case h.fO.zC:
            case h.fO.ro:
              m = "#FamilyGame_Excluded_FreeApp";
              break;
            case h.fO.xg:
              s
                ? (m = "#FamilyGame_Excluded_Private")
                : (m = "#FamilyGame_Excluded_PrivateLicense");
              break;
            case h.fO.sA:
            case h.fO.xO:
              m = "#FamilyGame_Excluded_OptedOut";
              break;
            case h.fO.DG:
              m = "#FamilyGame_Excluded_Nonrefundable_DLC";
              break;
            case h.fO.iz:
              m = "#FamilyGame_Excluded_ParentAppExcluded";
              break;
            case h.fO.Az:
              m = "#FamilyGame_Excluded_UnreleasedApp";
              break;
            case h.fO.jp:
              m = "#FamilyGame_Excluded_WrongAppType";
              break;
            case h.fO.DQ:
            case h.fO.SU:
            case h.fO.Wr:
              m = "#FamilyGame_Excluded_DevPackage";
              break;
            case h.fO.L6:
              m = "#FamilyGame_Excluded_FreeWeekend";
              break;
            case h.fO.xr:
              m = "#FamilyGame_Excluded_InvalidPackage";
              break;
            case h.fO.A1:
            case h.fO.w4:
            case h.fO.FN:
              m = "#FamilyGame_Excluded_Subscription";
              break;
            case h.fO.zg:
              m = "#FamilyGame_Excluded_SpecialPackage";
              break;
            case h.fO.CY:
              m = "#FamilyGame_Excluded_WrongLicenseType";
              break;
            case h.fO.Wv:
              m = "#FamilyGame_Excluded_NoShareableApps";
              break;
            case h.fO.cZ:
            case h.fO.Qs:
            case h.fO.DI:
              m = "#FamilyGame_Excluded_Borrowed";
              break;
            case h.fO.Ec:
              m = "#FamilyGame_Excluded_LicensePending";
              break;
            case h.fO.Yt:
              m = "#FamilyGame_Excluded_RefundPending";
              break;
            case h.fO.CB:
              m = "#FamilyGame_Excluded_TimedTrial";
              break;
            case h.fO.qG:
              m = "#FamilyGame_Excluded_LicenseInactive";
              break;
            default:
              m = "#FamilyGame_Excluded_Unknown";
              break;
          }
          let g;
          (n == "date_acquired-asc" || n == "date_acquired-desc") &&
            t.rt_time_acquired &&
            (g = (0, e.jsx)("div", {
              className: Q.Acquired,
              children: (0, r.we)(
                "#FamilyGame_DateAcquired",
                (0, r.TW)(t.rt_time_acquired, {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                  weekday: void 0,
                }),
              ),
            }));
          const y = (P) =>
            At(l[P].data, c.data?.get(new ut.b2(o[P]).GetAccountID()), d);
          let _, I;
          if (
            (m &&
              (_ = (0, e.jsxs)(e.Fragment, {
                children: [
                  (0, e.jsx)("div", {
                    className: Q.Excluded,
                    children: (0, r.we)(m),
                  }),
                  (0, e.jsx)("div", {
                    className: Q.ExcludedCode,
                    children: (0, r.we)(
                      "#FamilyGame_ExcludedCode",
                      t.exclude_reason,
                    ),
                  }),
                ],
              })),
            t.exclude_reason != h.fO.zC)
          )
            if (
              (s &&
                !_ &&
                (_ = (0, e.jsx)("div", {
                  className: Q.Excluded,
                  children: (0, r.we)("#FamilyGame_Excluded_Private"),
                })),
              o.length == 0 || l.some((P) => !P.isSuccess))
            )
              I = null;
            else {
              const P = o.length != t.owner_steamids.length && !s;
              o.length == 1
                ? (I = (0, e.jsx)("div", {
                    className: Q.LibraryOwnerSingle,
                    children: (0, r.we)(
                      P
                        ? "#FamilyGames_FromTheLibraryOf_Single_Owned"
                        : "#FamilyGames_FromTheLibraryOf_Single",
                      y(0),
                    ),
                  }))
                : (I = (0, e.jsxs)("div", {
                    className: Q.LibraryOwnerMultiple,
                    children: [
                      (0, e.jsx)("div", {
                        className: Q.Header,
                        children: (0, r.we)(
                          P
                            ? "#FamilyGames_FromTheLibraryOf_Header_Owned"
                            : "#FamilyGames_FromTheLibraryOf_Header",
                        ),
                      }),
                      (0, e.jsx)("ul", {
                        children: o.map((S, D) =>
                          (0, e.jsx)(
                            "li",
                            { className: Q.Owner, children: y(D) },
                            S,
                          ),
                        ),
                      }),
                    ],
                  }));
            }
          return (0, e.jsxs)("div", {
            className: Q.AdditionalHoverCtn,
            children: [_, I, g],
          });
        }
        function ea(i) {
          const { item: t } = i,
            n = (0, nt.Uy)(t.appid),
            a = (0, O.LH)();
          let s = t.owner_steamids.length;
          return (
            n && t.owner_steamids.includes(a) && (s = s - 1),
            s <= 1
              ? null
              : (0, e.jsx)("div", { className: Q.LicenseCount, children: s })
          );
        }
        function At(i, t, n) {
          let a = i.m_strPlayerName;
          return t && (a = n ? `${i.m_strPlayerName} (${t})` : `${t}*`), a;
        }
        function Rt(i) {
          const t = new ut.b2(i),
            n = (0, ne.js)(i),
            a = (0, A.M8)(),
            s = (0, z.T)(),
            o = a.data?.get(t.GetAccountID()),
            l = s.data?.preferences().parenthesize_nicknames();
          return !n.isSuccess || !a.isSuccess || !s.isSuccess
            ? null
            : At(n.data, o, l);
        }
        function ta(i) {
          const { item: t, strSteamID: n } = i,
            a = Rt(n),
            s = t.appid,
            { settings: o, mapAppsAllowed: l } = (0, oe.S0)(n).data,
            c = l?.get(t.appid) || !1,
            p = (0, oe.At)(n),
            d = f.useCallback(() => {
              (0, oe.qR)(o, !c, [s]), p.mutate(o);
            }, [s, o, p, c]);
          return !a || !o || !o.is_enabled || o.applist_base_id == 0
            ? null
            : (0, e.jsx)(Qe.kt, {
                onSelected: d,
                children: (0, r.we)(
                  c ? "#FamilyGame_DenyForChild" : "#FamilyGame_AllowForChild",
                  a,
                ),
              });
        }
        function na(i) {
          const { item: t, bOwnsGame: n, familyContext: a } = i,
            s = (0, O.LH)(),
            { familyGroup: o, invalidateGamesList: l } = a,
            c = o.members.find((D) => D.steamid == s).role == h.PQ.s,
            { data: p } = (0, Dt.J$)({ appid: t.appid }),
            d = n || t.exclude_reason == h.fO.RN,
            m = (0, nt.Uy)(t.appid),
            { mutateAsync: g } = (0, nt.bD)(t.appid),
            y = Y.TS.IN_CLIENT,
            _ = f.useCallback(async () => {
              await g(!m), l();
            }, [g, m, l]),
            I = f.useCallback(
              (D) => {
                p &&
                  pt(
                    (0, Xe.uX)(D),
                    `${Y.TS.STORE_BASE_URL}${p.store_url_path}`,
                  );
              },
              [p],
            ),
            P = f.useCallback(
              (D) => {
                Mt((0, Xe.uX)(D), t.appid);
              },
              [t],
            ),
            S = y && d;
          return (0, e.jsxs)(Qe.tz, {
            children: [
              d &&
                (0, e.jsx)(Qe.kt, {
                  onSelected: () => {
                    (0, Xn.o)(t.appid, t.name);
                  },
                  children: (0, r.we)("#FamilyGame_PlayGame"),
                }),
              S &&
                (0, e.jsx)(Qe.kt, {
                  onSelected: P,
                  children: (0, r.we)("#FamilyGame_OpenAppDetails"),
                }),
              p?.visible &&
                (0, e.jsx)(Qe.kt, {
                  onSelected: I,
                  children: (0, r.we)("#FamilyGame_ViewStore"),
                }),
              (0, e.jsx)(Qe.kt, {
                onSelected: _,
                children: (0, r.we)(
                  m
                    ? "#FamilyGame_UnmarkAsPrivate"
                    : "#FamilyGame_MarkAsPrivate",
                ),
              }),
              c &&
                o.members
                  .filter((D) => D.role == h.PQ.sf)
                  .map((D) =>
                    (0, e.jsx)(
                      ta,
                      { item: t, strSteamID: D.steamid },
                      D.steamid,
                    ),
                  ),
            ],
          });
        }
        function aa(i) {
          const {
              app: t,
              item: n,
              bShowLicenseCount: a,
              sort: s,
              className: o,
              children: l,
              ...c
            } = i,
            p = (0, O.LH)(),
            d = f.useContext(Lt),
            m = (0, e.jsx)($n, { app: n, sort: s }),
            g = { direction: "right", style: { minWidth: "320px" } },
            y = (0, Jn.$5)(n.appid),
            { data: _ } = (0, Dt.J$)(y),
            I = n.exclude_reason == h.fO.RN || n.exclude_reason == h.fO.zC,
            P = n.owner_steamids.some((le) => le == p),
            S = Y.TS.IN_CLIENT,
            D = _ && _.visible,
            q = f.useCallback(
              (le) => {
                (0, Yn.lX)(
                  (0, e.jsx)(na, { item: n, bOwnsGame: P, familyContext: d }),
                  le,
                ),
                  le.stopPropagation(),
                  le.preventDefault();
              },
              [n, P, d],
            ),
            se = (S && (I || P)) || D,
            ie = f.useCallback(
              (le) => {
                S && (I || P)
                  ? Mt((0, Xe.uX)(le), t.appid)
                  : D &&
                    pt(
                      (0, Xe.uX)(le),
                      `${Y.TS.STORE_BASE_URL}${_.store_url_path}`,
                    );
              },
              [t.appid, I, P, _, D, S],
            );
          return (0, e.jsx)(Nt.Q, {
            id: y,
            name: n.name,
            bPreventNavigation: P || I,
            bHidePrice: P,
            bShowWishlistButton: !P,
            hoverProps: g,
            className: Q.HoverSource,
            elElementToAppend: m,
            children: (0, e.jsxs)(j.Z, {
              className: (0, T.A)(o, Q.FamilyGameItem, se && Q.Selectable),
              focusable: !0,
              onActivate: se ? ie : void 0,
              onContextMenu: q,
              ...c,
              children: [l, a && (0, e.jsx)(ea, { item: n })],
            }),
          });
        }
        function sa() {
          const [i, t] = f.useState(7),
            n = f.useCallback((a, s) => {
              let o;
              a <= parseInt(Q.nNarrowWidth)
                ? (o = 3)
                : a <= parseInt(Q.nMediumWidth)
                  ? (o = 5)
                  : (o = 7),
                t(o);
            }, []);
          return [i, n];
        }
        function ia(i) {
          const { nRows: n, setShowAll: a, setRows: s, nIncrement: o = 2 } = i,
            l = f.useRef(void 0),
            c = () => {
              s(n + o);
            };
          return (
            f.useEffect(() => {
              l.current?.BHasFocus() &&
                (l.current
                  .Node()
                  ?.GetLastFocusElement()
                  .scrollIntoView({ block: "end" }),
                l.current?.Node().ForceMeasureFocusRing());
            }, [n]),
            (0, e.jsxs)(j.Z, {
              className: Q.Buttons,
              children: [
                (0, e.jsx)("div", {
                  className: Q.ButtonWrapper,
                  children: (0, e.jsx)(C.$n, {
                    className: Q.Button,
                    navRef: l,
                    onClick: c,
                    children: (0, r.we)("#FamilyGames_ShowMore"),
                  }),
                }),
                (0, e.jsx)("div", {
                  className: Q.ButtonWrapper,
                  children: (0, e.jsx)(C.$n, {
                    className: Q.Button,
                    onClick: () => a(!0),
                    children: (0, r.we)("#FamilyGames_ShowAll"),
                  }),
                }),
              ],
            })
          );
        }
        function Et(i, t) {
          const [n, a] = sa(),
            [s, o] = f.useState(2),
            [l, c] = f.useState(t),
            p = f.useMemo(
              () =>
                (l ? i : i.slice(0, n * s))?.map((y) => ({
                  appid: y.appid,
                  name: y.name,
                })),
              [l, i, s, n],
            ),
            d = Math.max(i.length - n * s, 0),
            m = l || d == 0;
          return {
            rgApps: p,
            nRows: s,
            setRows: o,
            bDisplayingAll: m,
            setShowAll: c,
            nColumns: n,
            OnWidthChanged: a,
          };
        }
        function ft(i) {
          const {
              rgSortedGames: t,
              strLabel: n,
              bShowLicenseCount: a = !0,
              sort: s,
            } = i,
            {
              rgApps: o,
              nRows: l,
              setRows: c,
              bDisplayingAll: p,
              setShowAll: d,
              nColumns: m,
              OnWidthChanged: g,
            } = Et(t, !1),
            y = f.useCallback(
              (_, I, P) =>
                (0, e.jsx)(aa, {
                  app: _,
                  item: t[I],
                  bShowLicenseCount: a,
                  sort: s,
                  ...P,
                }),
              [t, a, s],
            );
          return t?.length
            ? (0, e.jsxs)("div", {
                className: Q.FamilyGamesSection,
                children: [
                  (0, e.jsxs)("div", {
                    className: Q.Header,
                    children: [
                      (0, e.jsx)("div", { className: Q.Label, children: n }),
                      (0, e.jsx)("div", {
                        className: Q.Count,
                        children: (0, r.we)("#FamilyGames_Count", t.length),
                      }),
                    ],
                  }),
                  (0, e.jsx)(wt, {
                    rgApps: o,
                    nColumns: m,
                    onWidthChanged: g,
                    renderItem: y,
                  }),
                  !p && (0, e.jsx)(ia, { nRows: l, setRows: c, setShowAll: d }),
                ],
              })
            : null;
        }
        function Tt(i) {
          const {
              rgOptions: t,
              sort: n,
              setSort: a,
              bAscending: s,
              children: o,
            } = i,
            l = t.findIndex((d) => d == n),
            c = l != -1,
            p = t[(l + 1) % t.length];
          return (0, e.jsxs)(j.Z, {
            className: (0, T.A)(Q.FamilyGamesSortSelector, c && Q.Selected),
            onActivate: () => a(p),
            children: [
              o,
              (0, e.jsx)("div", {
                className: Q.DirectionIndicator,
                children:
                  c && (0, e.jsx)(dt.i3G, { direction: s ? "up" : "down" }),
              }),
            ],
          });
        }
        function ra(i) {
          const { sort: t, setSort: n } = i;
          return (0, e.jsxs)(j.Z, {
            className: Q.FamilyGamesSort,
            children: [
              (0, e.jsx)(Tt, {
                rgOptions: ["alpha-asc", "alpha-desc"],
                sort: t,
                setSort: n,
                bAscending: t == "alpha-asc",
                children: (0, r.we)("#FamilyGames_Sort_Alphabetical"),
              }),
              (0, e.jsx)(Tt, {
                rgOptions: ["date_acquired-desc", "date_acquired-asc"],
                sort: t,
                setSort: n,
                bAscending: t == "date_acquired-asc",
                children: (0, r.we)("#FamilyGames_Sort_DateAcquired"),
              }),
            ],
          });
        }
        function Gt(i) {
          const { strFilter: t, setFilter: n } = i,
            a = f.useCallback(
              (s) => {
                n(s.target.value);
              },
              [n],
            );
          return (0, e.jsx)(j.Z, {
            className: Q.FamilyGamesSearchBox,
            children: (0, e.jsx)(C.pd, {
              className: Q.Input,
              value: t,
              onChange: a,
              placeholder: (0, r.we)("#Parental_GameList_Search"),
            }),
          });
        }
        function oa(i) {
          const { strFilter: t, setFilter: n, sort: a, setSort: s } = i;
          return (0, e.jsxs)(j.Z, {
            className: Q.FamilyGamesControls,
            children: [
              (0, e.jsx)(ra, { sort: a, setSort: s }),
              (0, e.jsx)(Gt, { strFilter: t, setFilter: n }),
            ],
          });
        }
        const Ot = { bIncludeOwn: !0, bIncludeExcluded: !0 };
        function la(i) {
          const { familyGroupID: t, children: n } = i,
            a = (0, x.Xq)(t, Ot),
            s = (0, x.Hs)(t),
            o = f.useMemo(
              () => ({
                familyGroupID: t,
                familyGroup: s.data?.toObject(),
                invalidateGamesList: a,
              }),
              [t, s.data, a],
            );
          return (0, e.jsx)(Lt.Provider, { value: o, children: n });
        }
        const Lt = f.createContext(void 0);
        function ca(i) {
          const { familyGroupID: t } = i,
            [n, a] = f.useState(""),
            [s, o] = f.useState("alpha-asc"),
            l = (0, x.yM)(t, Ot),
            c = (0, x.YW)(l.data, s, n),
            p = f.useMemo(
              () => c?.filter((g) => g.exclude_reason == h.fO.RN),
              [c],
            ),
            d = f.useMemo(
              () =>
                c?.filter(
                  (g) =>
                    g.exclude_reason != h.fO.RN && g.exclude_reason != h.fO.zC,
                ),
              [c],
            ),
            m = f.useMemo(
              () => c?.filter((g) => g.exclude_reason == h.fO.zC),
              [c],
            );
          return (0, e.jsxs)(la, {
            familyGroupID: t,
            children: [
              l.isFetching &&
                (0, e.jsx)("div", {
                  className: Q.Loading,
                  children: (0, e.jsx)(R.t, {}),
                }),
              l.isError &&
                (0, e.jsx)("div", {
                  className: Q.Error,
                  children: (0, r.we)("#FamilyGames_Error", l.error),
                }),
              l.isSuccess &&
                (0, e.jsxs)("div", {
                  className: Q.FamilyGames,
                  children: [
                    l.data?.length > 0 &&
                      (0, e.jsxs)(e.Fragment, {
                        children: [
                          (0, e.jsx)(oa, {
                            strFilter: n,
                            setFilter: a,
                            sort: s,
                            setSort: o,
                          }),
                          (0, e.jsx)(ft, {
                            rgSortedGames: p,
                            strLabel: (0, r.we)("#FamilyGames_IncludedGames"),
                            sort: s,
                          }),
                          (0, e.jsx)(ft, {
                            rgSortedGames: d,
                            bShowLicenseCount: !1,
                            strLabel: (0, r.we)("#FamilyGames_ExcludedGames"),
                            sort: s,
                          }),
                          (0, e.jsx)(ft, {
                            rgSortedGames: m,
                            bShowLicenseCount: !1,
                            strLabel: (0, r.we)("#FamilyGames_FreeGames"),
                            sort: s,
                          }),
                          c?.length == 0 &&
                            (0, e.jsx)("div", {
                              className: Q.Empty,
                              children: (0, r.we)("#FamilyGames_EmptySearch"),
                            }),
                        ],
                      }),
                    l.data?.length == 0 &&
                      (0, e.jsx)("div", {
                        className: Q.Empty,
                        children: (0, r.we)("#FamilyGames_NoGames"),
                      }),
                  ],
                }),
            ],
          });
        }
        var at = u(71421),
          Bt = u(23903),
          kt = u(80902),
          Ht = u(57168),
          Wt = u(83153),
          ma = u(35038),
          ht = u(84192),
          da = u(68312),
          st = u(10142),
          Ut = u(24525);
        function Vt(i, t) {
          const n = De()()
              .startOf("day")
              .add(30 * i, "minutes"),
            a = De()()
              .startOf("day")
              .add(30 * t, "minutes"),
            s = Intl.DateTimeFormat(r.pf.GetPreferredLocales(), {
              hour: "numeric",
              minute: "numeric",
            });
          return (
            s.format(n.toDate()).replace(" ", "\xA0") +
            "-" +
            s.format(a.toDate()).replace(" ", "\xA0")
          );
        }
        function yt(i) {
          if (i == BigInt(0)) return (0, r.we)("#Parental_Playtime_Never");
          if (i == BigInt(0xffffffffffff))
            return (0, r.we)("#Parental_Playtime_AnyTime");
          let t = [],
            n = -1;
          for (let a = 0; a < 48; a++)
            i & (BigInt(1) << BigInt(a))
              ? n == -1 && (n = a)
              : n != -1 && (t.push(Vt(n, a)), (n = -1));
          return n != -1 && (t.push(Vt(n, 48)), (n = -1)), t.join(", ");
        }
        var ge = u(95198);
        function ua(i, t) {
          return t
            .members()
            .filter((a) => a.role() == h.PQ.sf && a.steamid() != i)
            .map((a) => a.steamid());
        }
        function pa(i) {
          const { steamid: t, settings: n, familyGroup: a } = i,
            s = (0, oe.vM)(t, n),
            o = (0, oe.Ut)(t),
            { setErrorMessage: l } = (0, x.RC)();
          (0, x.p8)(s, "#FamilyManagement_ErrorModifyParentalSettingsGeneric"),
            (0, x.p8)(
              o,
              "#FamilyManagement_ErrorModifyParentalSettingsGeneric",
            );
          let [c, p] = (0, f.useState)(""),
            d = ua(t, a);
          const m = (0, ne.DW)(d),
            g = Ln.$D(m, (P) => P.isSuccess),
            y = (0, f.useMemo)(() => {
              let P = [];
              if (
                (P.push({
                  label: (0, r.we)("#Parental_EnabledSetting"),
                  data: "enabled",
                }),
                P.push({
                  label: (0, r.we)("#Parental_DisabledSetting"),
                  data: "disabled",
                }),
                g > 0)
              ) {
                P.push({ bIsSeparator: !0 });
                for (let S of m) {
                  if (!S.isSuccess) continue;
                  let D = (0, r.we)(
                    "#Parental_CopySettingsFrom",
                    S.data.m_strPlayerName,
                  );
                  P.push({
                    label: D,
                    data: `copy_${S.data.GetSteamIDAsString()}`,
                  });
                }
              }
              return P;
            }, [m, g]),
            _ = f.useCallback(
              (P) => {
                l(null);
                let S = P.data;
                if (S == "enabled") s.mutate();
                else if (S == "disabled") o.mutate();
                else if (S.startsWith("copy_")) {
                  let D = S.split("_");
                  p(D[1]);
                }
              },
              [l, s, o],
            );
          let I = n.is_enabled ? "enabled" : "disabled";
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(fa, {
                steamid: t,
                otherChildrenQuery: m,
                confirmCopy: c,
                setConfirmCopy: p,
              }),
              (0, e.jsx)(C.Vb, {
                strClassName: F.DropDownCtn,
                controlled: !0,
                bottomSeparator: "none",
                label: (0, r.we)("#Parental_EnableDropdown"),
                rgOptions: y,
                selectedOption: I,
                onChange: _,
                bMatchWidth: !1,
              }),
            ],
          });
        }
        function fa(i) {
          const {
              steamid: t,
              otherChildrenQuery: n,
              confirmCopy: a,
              setConfirmCopy: s,
            } = i,
            o = (0, ne.js)(t),
            l = (0, oe.Xl)(),
            c = f.useCallback(() => {
              a.length != 0 &&
                (l.mutate({ steamidSrc: a, steamidDest: t }), s(""));
            }, [t, a, s, l]);
          let p = "";
          if (a.length > 0) {
            for (let g of n)
              !g.isSuccess ||
                g.data.GetSteamIDAsString() != a ||
                (p = g.data.m_strPlayerName);
            p.length == 0 && (p = a);
          }
          let d = t;
          o.isSuccess && (d = o.data.m_strPlayerName);
          let m = (0, r.we)("#Parental_CopySettingsConfirmation_Desc", d, p);
          return (0, e.jsx)(U.EN, {
            active: a.length > 0,
            children: (0, e.jsx)(U.o0, {
              closeModal: () => s(""),
              onOK: c,
              strTitle: (0, r.we)("#Parental_CopySettingsConfirmation_Title"),
              children: (0, e.jsx)("div", {
                className: F.ConfirmCopyDescription,
                children: m,
              }),
            }),
          });
        }
        function ha(i) {
          const { steamid: t, settings: n } = i,
            a = (0, oe.At)(t),
            { setErrorMessage: s } = (0, x.RC)();
          (0, x.p8)(a, "#FamilyManagement_ErrorModifyParentalSettingsGeneric");
          const o = f.useMemo(
              () => [
                { label: (0, r.we)("#Parental_Baselist_AllGames"), data: 0 },
                { label: (0, r.we)("#Parental_Baselist_NoGames"), data: 1 },
              ],
              [],
            ),
            l = f.useCallback(
              (c, p) => {
                s(null), (n.applist_base_id = c.data), a.mutate(n);
              },
              [n, a, s],
            );
          return (0, e.jsx)(C.Vb, {
            focusable: !0,
            strClassName: F.DropDownCtn,
            bottomSeparator: "none",
            label: (0, r.we)("#Parental_Baselist_Label"),
            rgOptions: o,
            selectedOption: n.applist_base_id,
            onChange: l,
          });
        }
        function ya(i) {
          const { steamid: t, settings: n, game: a, ...s } = i,
            o = (0, oe.At)(t),
            l = a.appid,
            c = n.applist_custom.find((y) => y.appid == l),
            { setErrorMessage: p } = (0, x.RC)();
          (0, x.p8)(o, "#FamilyManagement_ErrorModifyParentalSettingsGeneric");
          const d = c?.is_allowed || !1,
            m =
              a.img_icon_url ||
              (a.img_icon_hash &&
                Y.TS.MEDIA_CDN_COMMUNITY_URL +
                  "images/apps/" +
                  l +
                  "/" +
                  a.img_icon_hash +
                  ".jpg"),
            g = f.useCallback(() => {
              p(null), (0, oe.qR)(n, !d, [l]), o.mutate(n);
            }, [l, n, o, p, d]);
          return (0, e.jsxs)(j.Z, {
            className: (0, T.A)(F.ParentalGameRow, d && F.Allowed),
            onActivate: g,
            ...s,
            children: [
              m && (0, e.jsx)("img", { className: F.Icon, src: m }),
              !m && (0, e.jsx)("div", { className: F.Icon }),
              (0, e.jsx)("div", { className: F.Name, children: a.name }),
              (0, e.jsx)(C.Od, {
                className: F.RoundCheckbox,
                checked: d,
                onChange: g,
              }),
            ],
          });
        }
        function ga(i) {
          const {
              setContentDescriptors: t,
              selectedContentDescriptors: n,
              showFilter: a,
              setShowFilter: s,
              onDismiss: o,
            } = i,
            [l, c] = (0, f.useState)(n),
            p = (m) => (g) => {
              let y = [];
              if (g) {
                const I = [m].concat((0, ge.fd)(m));
                for (const P of ge.TW)
                  (l.includes(P) || I.includes(P)) && y.push(P);
              } else {
                const I = [m].concat((0, ge.Rl)(m));
                for (const P of ge.TW)
                  l.includes(P) && !I.includes(P) && y.push(P);
              }
              c(y);
            },
            d = [
              {
                label: (0, r.we)("#Parental_GameList_ShowAllFilter"),
                data: "show_all",
              },
              {
                label: (0, r.we)("#Parental_GameList_ShowAllowedOnlyFilter"),
                data: "show_allowed_only",
              },
              {
                label: (0, r.we)("#Parental_GameList_ShowDeniedOnlyFilter"),
                data: "show_denied_only",
              },
            ];
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(C.Y9, {
                children: (0, r.we)(
                  "#Parental_GameList_ShowGamesThatAreFilterHeader",
                ),
              }),
              (0, e.jsx)(j.Z, {
                className: F.FilterDropdownCtn,
                children: (0, e.jsx)(C.ZU, {
                  focusable: !0,
                  rgOptions: d,
                  selectedOption: a,
                  onChange: (m) => s(m.data),
                }),
              }),
              (0, e.jsx)(C.Y9, {
                children: (0, r.we)(
                  "#Parental_GameList_ContentDescriptorFilterHeader",
                ),
              }),
              (0, e.jsx)(j.Z, {
                className: F.FilterSection,
                children: ge.TW.map((m) => {
                  const g = l.includes(m),
                    y = p(m);
                  return (0, e.jsxs)(
                    j.Z,
                    {
                      className: F.FilterRow,
                      children: [
                        (0, e.jsx)(j.Z, {
                          className: F.FilterInfo,
                          children: (0, ge.H5)(m),
                        }),
                        (0, e.jsx)(j.Z, {
                          className: F.FilterToggle,
                          children: (0, e.jsx)(C.Yh, {
                            checked: g,
                            onChange: y,
                          }),
                        }),
                      ],
                    },
                    m,
                  );
                }),
              }),
              (0, e.jsx)(C.CB, {
                onCancel: o,
                onOK: () => {
                  t(l), o();
                },
                strOKText: (0, r.we)("#Parental_GameList_Button_Apply"),
                className: F.FilterModalButtons,
              }),
            ],
          });
        }
        function _a(i) {
          const {
              strFilter: t,
              setFilter: n,
              strView: a,
              setView: s,
              setContentDescriptors: o,
              selectedContentDescriptors: l,
              showFilter: c,
              setShowFilter: p,
            } = i,
            [d, m] = (0, f.useState)(!1);
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(U.mt, {
                active: d,
                onDismiss: () => m(!1),
                className: F.FilterModal,
                children: (0, e.jsx)(ga, {
                  selectedContentDescriptors: l,
                  setContentDescriptors: o,
                  showFilter: c,
                  setShowFilter: p,
                  onDismiss: () => m(!1),
                }),
              }),
              (0, e.jsxs)(j.Z, {
                className: F.ParentalGameListHeader,
                children: [
                  (0, e.jsx)("div", {
                    className: F.Title,
                    children: (0, r.we)("#Parental_GameList_Header"),
                  }),
                  (0, e.jsxs)(j.Z, {
                    className: F.SearchCtn,
                    children: [
                      (0, e.jsxs)("div", {
                        className: F.SelectorCtn,
                        children: [
                          (0, e.jsx)(j.Z, {
                            className: (0, T.A)(
                              F.ViewSelector,
                              a == "list" && F.Selected,
                            ),
                            onActivate: () => s("list"),
                            children: (0, e.jsx)(at.he, {
                              toolTipContent: (0, r.we)(
                                "#Parental_GameList_List",
                              ),
                              children: (0, e.jsx)(dt.B8B, {}),
                            }),
                          }),
                          (0, e.jsx)(j.Z, {
                            className: (0, T.A)(
                              F.ViewSelector,
                              a == "grid" && F.Selected,
                            ),
                            onActivate: () => s("grid"),
                            children: (0, e.jsx)(at.he, {
                              toolTipContent: (0, r.we)(
                                "#Parental_GameList_Grid",
                              ),
                              children: (0, e.jsx)(dt.F7C, {}),
                            }),
                          }),
                        ],
                      }),
                      (0, e.jsx)(Gt, { strFilter: t, setFilter: n }),
                      (0, e.jsx)(j.Z, {
                        className: F.FilterDropdownButton,
                        onActivate: () => m(!0),
                        children: (0, e.jsx)(at.he, {
                          toolTipContent: (0, r.we)(
                            "#Parental_GameList_Filter",
                          ),
                          children: (0, e.jsx)(W.nkJ, {}),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        }
        function xa(i) {
          const t = (0, da.KV)(),
            n = ["ParentalSearchSuggestions", i];
          return (0, kt.I)({
            queryKey: n,
            queryFn: async () => {
              if (i.length < 2) return [];
              const a = ma.w.Init(Wt.pI);
              a.Body().set_query_name(JSON.stringify(n)),
                a.Body().set_search_term(i),
                (0, ht.rV)(a),
                (0, ht.Bn)(a, { include_basic_info: !0, include_assets: !0 }),
                (0, ht.hc)(a, {
                  type_filters: { include_games: !0 },
                  price_filters: { only_free_items: !0 },
                }),
                a.Body().set_max_results(20),
                a.Body().set_use_spellcheck(!0);
              let s = await Wt.Fs.SearchSuggestions(t, a);
              return s.BSuccess()
                ? s
                    .Body()
                    .store_items()
                    .map((o) => {
                      const l = o.name().replace(/^The |^A |^An /i, "");
                      return {
                        appid: o.appid(),
                        name: o.name(),
                        sort_as: l,
                        capsule_filename: o.assets().library_capsule(),
                        img_icon_hash: o.assets().community_icon(),
                        searchSuggestion: !0,
                      };
                    })
                : [];
            },
            placeholderData: Ht.rX,
          });
        }
        function va(i) {
          const t = i.applist_custom.map((a) => a.appid),
            n = (0, Ae.zX)(t, { include_assets: !0 });
          return (0, kt.I)({
            queryKey: ["ParentalStoreItems", t],
            queryFn: async () =>
              t
                .map((a) => {
                  const s = st.A.Get().GetApp(a);
                  return (
                    s && {
                      appid: s.GetAppID(),
                      name: s.GetName(),
                      capsule_filename: s.GetAssets().GetLibraryCapsuleURL(),
                      img_icon_url: s.GetAssets().GetCommunityIconURL(),
                      parentalApp: !0,
                    }
                  );
                })
                .filter((a) => !!a),
            enabled: n != Ae.Sq,
            placeholderData: Ht.rX,
          });
        }
        function Sa(i, t, n) {
          const a = (0, x.vo)()?.data.family_groupid(),
            s = (0, x.yM)(a, {
              bIncludeOwn: !0,
              bIncludeExcluded: !0,
              bIncludeNonGames: !0,
              for_account_id: parseInt(i.steamid),
            }).data;
          let o = va(i).data,
            l = xa(t).data;
          const [c, p] = f.useMemo(() => {
            const y = ut.b2
                .InitFromAccountID(parseInt(i.steamid), Y.TS.EUNIVERSE)
                .ConvertTo64BitString(),
              _ = s?.filter(
                (S) =>
                  S.app_type != Ut.B7 &&
                  (S.exclude_reason == h.fO.RN || S.owner_steamids.includes(y)),
              ),
              I = s?.filter(
                (S) => S.app_type == Ut.B7 && S.owner_steamids.includes(y),
              ),
              P = t ? l?.concat(I || []) : [];
            return [_, P];
          }, [s, l, t, i.steamid]);
          (l = p?.filter((y) => c.findIndex((_) => _.appid == y.appid) == -1)),
            (o = o?.filter(
              (y) => p.findIndex((_) => _.appid == y.appid) == -1,
            ));
          const d = f.useMemo(() => {
              const y = new Map();
              return (
                o?.forEach((_) => y.set(_.appid, _)),
                c?.forEach((_) => y.set(_.appid, _)),
                Array.from(y.values())
              );
            }, [c, o]),
            m = (0, x.YW)(d, "alpha-asc", t, n),
            g = (0, x.YW)(p, "alpha-asc", t, n);
          return [m, g];
        }
        function ja(i) {
          const {
              strToken: t,
              steamid: n,
              nAllowed: a,
              nTotal: s,
              setAllowAllApps: o,
            } = i,
            l = Rt(n);
          return (0, e.jsxs)("div", {
            className: F.SectionHeader,
            children: [
              (0, e.jsx)("div", {
                className: F.Title,
                children: (0, r.we)(t + (s ? "_Count" : ""), a, s, l),
              }),
              o &&
                (0, e.jsxs)(j.Z, {
                  className: F.SelectorCtn,
                  children: [
                    (0, e.jsx)(C.$n, {
                      onClick: () => o(!0),
                      children: (0, r.we)("#Parental_GameList_AllowAll"),
                    }),
                    (0, e.jsx)(C.$n, {
                      onClick: () => o(!1),
                      children: (0, r.we)("#Parental_GameList_DenyAll"),
                    }),
                  ],
                }),
            ],
          });
        }
        function Kt(i) {
          const {
              strTitleToken: t,
              nAllowed: n,
              nTotal: a,
              setAllowAllApps: s,
              strView: o,
              steamid: l,
              settings: c,
              rgAllApps: p,
            } = i,
            d = !0,
            {
              rgApps: m,
              bDisplayingAll: g,
              nColumns: y,
              OnWidthChanged: _,
            } = Et(p, d);
          return (
            (0, Bn.wT)(g, "Parental Control Library not displaying all"),
            p.length == 0
              ? null
              : (0, e.jsxs)("div", {
                  className: F.ParentalGameSection,
                  children: [
                    (0, e.jsx)(ja, {
                      strToken: t,
                      steamid: l,
                      nAllowed: n,
                      nTotal: a,
                      setAllowAllApps: s,
                    }),
                    o == "list" &&
                      (0, e.jsx)(Ca, {
                        steamid: l,
                        settings: c,
                        rgSortedGames: p,
                      }),
                    o == "grid" &&
                      (0, e.jsx)(Ia, {
                        steamid: l,
                        settings: c,
                        rgSortedGames: m,
                        nColumns: y,
                        onWidthChanged: _,
                      }),
                  ],
                })
          );
        }
        function Pa(i) {
          const { steamid: t, settings: n, mapAppsAllowed: a } = i,
            s = (0, oe.At)(t),
            [o, l] = f.useState(""),
            [c, p] = f.useState([]),
            [d, m] = f.useState("show_all"),
            [g, y] = f.useState("grid");
          let [_, I] = Sa(n, o, c);
          const P = _?.filter((ie) => !(0, oe.or)(ie.appid, !0, n, a)),
            S = new Set(P.map((ie) => ie.appid)),
            D = P?.length || 0,
            q = (!o && _?.length) || 0,
            se = f.useCallback(
              (ie) => {
                (0, oe.qR)(
                  n,
                  ie,
                  _.map((le) => le.appid),
                ),
                  s.mutate(n);
              },
              [n, _, s],
            );
          return _.length == 0 && !o && c.length === 0
            ? null
            : (d === "show_allowed_only"
                ? (_ = _.filter((ie) => S.has(ie.appid)))
                : d === "show_denied_only" &&
                  (_ = _.filter((ie) => !S.has(ie.appid))),
              (0, e.jsxs)("div", {
                className: F.ParentalGameListOuter,
                children: [
                  (0, e.jsx)(_a, {
                    strFilter: o,
                    setFilter: l,
                    strView: g,
                    setView: y,
                    selectedContentDescriptors: c,
                    setContentDescriptors: p,
                    showFilter: d,
                    setShowFilter: m,
                  }),
                  (0, e.jsxs)("div", {
                    className: F.Content,
                    children: [
                      (0, e.jsx)(Kt, {
                        strTitleToken: "#Parental_GameList_Library",
                        strView: g,
                        nAllowed: D,
                        nTotal: q,
                        setAllowAllApps: !o && se,
                        steamid: t,
                        settings: n,
                        rgAllApps: _,
                      }),
                      (0, e.jsx)(Kt, {
                        strTitleToken: "#Parental_GameList_Store",
                        strView: g,
                        steamid: t,
                        settings: n,
                        rgAllApps: I,
                      }),
                      _.length + I.length == 0 &&
                        (0, e.jsx)("div", {
                          className: F.Empty,
                          children: (0, r.we)("#Parental_GameList_Empty"),
                        }),
                    ],
                  }),
                ],
              }));
        }
        function Ca(i) {
          const { steamid: t, settings: n, rgSortedGames: a } = i,
            s = parseInt(F.nParentalListRowHeight),
            o = f.useCallback(
              (l) => (0, e.jsx)(ya, { steamid: t, settings: n, game: a[l] }, l),
              [t, n, a],
            );
          return (0, e.jsx)(be, {
            nRows: a?.length,
            nItemHeight: s,
            nRowGap: 0,
            renderItem: o,
          });
        }
        function Fa(i) {
          const {
            app: t,
            item: n,
            bIsAllowed: a,
            setAllowed: s,
            className: o,
            children: l,
            ...c
          } = i;
          return (0, e.jsx)(j.Z, {
            className: (0, T.A)(o, F.ParentalApp, a && F.Allowed),
            focusable: !0,
            onActivate: () => s(t, !a),
            ...c,
            children: l,
          });
        }
        function Ia(i) {
          const {
              steamid: t,
              settings: n,
              rgSortedGames: a,
              nColumns: s,
              onWidthChanged: o,
            } = i,
            l = (0, oe.At)(t),
            c = f.useMemo(
              () => a?.map((m) => ({ appid: m.appid, name: m.name })),
              [a],
            ),
            p = f.useCallback(
              (m, g) => {
                (0, oe.qR)(n, g, [m.appid]), l.mutate(n);
              },
              [n, l],
            ),
            d = f.useCallback(
              (m, g, y) => {
                const _ =
                  n.applist_custom.find((I) => I.appid == m.appid)
                    ?.is_allowed || !1;
                return (0, e.jsx)(Fa, {
                  app: m,
                  item: c[g],
                  bIsAllowed: _,
                  setAllowed: p,
                  ...y,
                });
              },
              [c, n, p],
            );
          return (0, e.jsx)(wt, {
            rgApps: c,
            nColumns: s,
            onWidthChanged: o,
            renderItem: d,
          });
        }
        function wa(i) {
          const { steamid: t, settings: n, mapAppsAllowed: a } = i;
          return (0, e.jsxs)("div", {
            children: [
              (0, e.jsx)(ha, { steamid: t, settings: n }),
              n.applist_base_id != 0 &&
                (0, e.jsx)(Pa, { steamid: t, settings: n, mapAppsAllowed: a }),
            ],
          });
        }
        function Da(i) {
          const { steamid: t, settings: n, feature: a, label: s } = i,
            o = !!(n.enabled_features & (1 << a)),
            l = (0, oe.At)(t),
            c = f.useCallback(
              (p) => {
                const d = n.enabled_features ^ (1 << a);
                (n.enabled_features = d), l.mutate(n);
              },
              [l, n, a],
            );
          return (0, e.jsx)(C.y4, {
            className: F.ToggleCtn,
            bottomSeparator: "none",
            label: (0, r.we)(s),
            checked: o,
            onChange: c,
          });
        }
        const it = {
          [ee.Gm]: null,
          [ee.ip]: {
            featureDescription: "#Parental_Feature_Store",
            requestDescription: "#Parental_FeatureRequest_Store",
            requestDescriptionSelf: "#Parental_FeatureRequest_Store_Self",
          },
          [ee.qR]: {
            featureDescription: "#Parental_Feature_Community",
            requestDescription: "#Parental_FeatureRequest_Community",
            requestDescriptionSelf: "#Parental_FeatureRequest_Community_Self",
          },
          [ee.WJ]: {
            featureDescription: "#Parental_Feature_Profile",
            requestDescription: "#Parental_FeatureRequest_Profile",
            requestDescriptionSelf: "#Parental_FeatureRequest_Profile_Self",
          },
          [ee.M]: {
            featureDescription: "#Parental_Feature_Friends",
            requestDescription: "#Parental_FeatureRequest_Friends",
            requestDescriptionSelf: "#Parental_FeatureRequest_Friends_Self",
          },
          [ee.S9]: {
            featureDescription: "#Parental_Feature_News",
            requestDescription: "#Parental_FeatureRequest_News",
            requestDescriptionSelf: "#Parental_FeatureRequest_News_Self",
          },
          [ee.ut]: {
            featureDescription: "#Parental_Feature_Trading",
            requestDescription: "#Parental_FeatureRequest_Trading",
            requestDescriptionSelf: "#Parental_FeatureRequest_Trading_Self",
          },
          [ee.OK]: {
            featureDescription: "#Parental_Feature_Settings",
            requestDescription: "#Parental_FeatureRequest_Settings",
            requestDescriptionSelf: "#Parental_FeatureRequest_Settings_Self",
          },
          [ee.U8]: {
            featureDescription: "#Parental_Feature_Console",
            requestDescription: "#Parental_FeatureRequest_Console",
            requestDescriptionSelf: "#Parental_FeatureRequest_Console_Self",
          },
          [ee.rE]: {
            featureDescription: "#Parental_Feature_Browser",
            requestDescription: "#Parental_FeatureRequest_Browser",
            requestDescriptionSelf: "#Parental_FeatureRequest_Browser_Self",
          },
          [ee.$R]: null,
          [ee.ms]: null,
          [ee.FC]: null,
          [ee.bV]: null,
          [ee.lA]: null,
          [ee.dB]: null,
          [ee.b]: {
            featureDescription: "#Parental_Feature_Desktop",
            requestDescription: "#Parental_FeatureRequest_Desktop",
            requestDescriptionSelf: "#Parental_FeatureRequest_Desktop_Self",
          },
          [ee.Xd]: null,
        };
        function Na(i) {
          const { steamid: t, settings: n } = i,
            a = f.useRef(n.enabled_features),
            s = [ee.ip, ee.qR, ee.WJ, ee.M],
            o = [ee.$R, ee.ms, ee.FC, ee.bV, ee.lA, ee.dB],
            l = [];
          for (let c = ee.ip; c < ee.Xd; c++)
            !o.includes(c) &&
              (s.includes(c) || a.current & (1 << c)) &&
              l.push(c);
          return (0, e.jsxs)("div", {
            className: F.ParentalFeatures,
            children: [
              (0, e.jsx)("hr", {}),
              l.map((c) =>
                it[c]
                  ? (0, e.jsxs)(
                      f.Fragment,
                      {
                        children: [
                          (0, e.jsx)(Da, {
                            steamid: t,
                            settings: n,
                            feature: c,
                            label: it[c].featureDescription,
                          }),
                          (0, e.jsx)("hr", {}),
                        ],
                      },
                      c,
                    )
                  : null,
              ),
            ],
          });
        }
        function ba(i) {
          const {
              className: t,
              enabled: n,
              locked: a,
              slotIndex: s,
              onToggle: o,
              dragState: l,
              setDragState: c,
              ...p
            } = i,
            [d, m] = (0, f.useState)(!1),
            g = (0, f.useRef)(void 0),
            y = (D) => {
              l !== null && !a && n !== l && o(s),
                D.target.releasePointerCapture(D.pointerId);
            },
            _ = (D) => {
              D.target.releasePointerCapture(D.pointerId);
            },
            I = (D) => {
              c(!n), m(!0), o(s), D.target.releasePointerCapture(D.pointerId);
            },
            P = () => {
              c(null);
            },
            S = () => {
              !a && !d && o(s), c(null), m(!1);
            };
          return (0, e.jsx)(j.Z, {
            ref: g,
            ...p,
            className: (0, T.A)(
              t,
              F.ParentalPlaytimeWindowSelector,
              n && F.Enabled,
              a && F.Locked,
            ),
            onActivate: S,
            onPointerDown: I,
            onPointerEnter: y,
            onPointerLeave: _,
            onPointerUp: P,
          });
        }
        function zt(i) {
          const {
              className: t,
              nWindows: n,
              nLockedWindows: a,
              onToggle: s,
            } = i,
            o = [],
            l = Intl.DateTimeFormat(r.pf.GetPreferredLocales(), {
              hour: "numeric",
              minute: "numeric",
            }),
            [c, p] = (0, f.useState)(null);
          for (let d = 0; d < 48; d++) {
            const m = n & (BigInt(1) << BigInt(d)),
              g = a && a & (BigInt(1) << BigInt(d));
            o.push(
              (0, e.jsx)(
                ba,
                {
                  enabled: !!m,
                  locked: !!g,
                  slotIndex: d,
                  onToggle: s,
                  dragState: c,
                  setDragState: p,
                },
                d,
              ),
            );
          }
          for (let d = 0; d < 48; d = d + 8) {
            const m = { gridColumnStart: d + 1, gridColumnEnd: d + 9 };
            o.push(
              (0, e.jsx)(
                "div",
                { className: (0, T.A)(F.HashMark, "HashMark" + d), style: m },
                "HashMark" + d,
              ),
            );
          }
          for (let d = 0; d <= 48; d = d + 8) {
            const m = De()()
              .startOf("day")
              .add(Math.floor(d / 2), "hours");
            let g = l.format(m.toDate());
            const y = d == 0 ? 0 : d - 4,
              _ = d == 0 || d == 48 ? 4 : 8,
              I = { gridColumnStart: y + 1, gridColumnEnd: y + 1 + _ };
            o.push(
              (0, e.jsx)(
                "div",
                {
                  className: (0, T.A)(F.HourMarker, "Hour" + d),
                  style: I,
                  children: g,
                },
                "Hour" + d,
              ),
            );
          }
          return (0, e.jsx)(j.Z, {
            className: (0, T.A)(F.ParentalPlaytimeGrid, t),
            onMouseLeave: () => p(null),
            children: o,
          });
        }
        function Ma(i) {
          const {
              steamid: t,
              settings: n,
              dayIndexStart: a,
              closeModal: s,
            } = i,
            [o, l] = f.useState(a),
            c = f.useRef(Object.assign({}, n)),
            p = (0, oe.At)(t),
            d = () => {
              p.mutate(c.current), s();
            };
          return (0, e.jsx)(U.o0, {
            className: F.ParentalPlaytimeWindowsDialog,
            closeModal: s,
            onOK: d,
            strTitle: (0, e.jsx)(C.Y9, {
              className: F.Title,
              children: (0, r.we)("#Parental_PlaytimeWindows_Title"),
            }),
            children: (0, e.jsx)(Ra, {
              restrictions: c.current.playtime_restrictions?.playtime_days[o],
              dayIndex: o,
              setDayIndex: l,
            }),
          });
        }
        function Aa(i) {
          const { dayIndex: t, onChange: n } = i,
            a = f.useCallback(
              (o) => {
                n(o.data);
              },
              [n],
            ),
            s = Jt();
          return (0, e.jsx)(C.ZU, {
            rgOptions: s,
            selectedOption: t,
            onChange: a,
            strDropDownButtonClassName: F.DaySelector,
            arrowClassName: F.Arrow,
            contextMenuPositionOptions: {
              bMatchWidth: !0,
              bDisablePopTop: !0,
              bFitToWindow: !0,
            },
          });
        }
        function Ra(i) {
          const { restrictions: t, dayIndex: n, setDayIndex: a } = i,
            [s, o] = f.useState(BigInt(parseInt(t?.allowed_time_windows) || 0)),
            l = (0, Y.Qn)();
          f.useEffect(() => {
            o(BigInt(parseInt(t?.allowed_time_windows) || 0));
          }, [t]);
          const c = f.useCallback(
              (m) => {
                const g = s ^ (BigInt(1) << BigInt(m));
                (t.allowed_time_windows = g.toString()), o(g);
              },
              [s, t],
            ),
            p = f.useCallback(
              (m) => {
                (t.allowed_time_windows = m.toString()), o(m);
              },
              [t],
            ),
            d = f.useCallback(
              (m) => {
                t.allowed_daily_minutes = m;
              },
              [t],
            );
          return (0, e.jsxs)("div", {
            className: F.ParentalPlaytimeWindowsDialogInner,
            children: [
              (0, e.jsxs)(j.Z, {
                className: F.TopRow,
                children: [
                  (0, e.jsx)(Aa, { dayIndex: n, onChange: a }),
                  (0, e.jsxs)("div", {
                    className: F.Right,
                    children: [
                      (0, e.jsx)("div", {
                        className: F.PlaytimeDescription,
                        children: yt(s),
                      }),
                      (0, e.jsxs)(j.Z, {
                        className: F.PlaytimeButtons,
                        children: [
                          s == BigInt(0) &&
                            (0, e.jsx)(J.Ii, {
                              onClick: () => p(BigInt(0xffffffffffff)),
                              children: (0, r.we)(
                                "#Parental_PlaytimeWindows_AllowAll",
                              ),
                            }),
                          s != BigInt(0) &&
                            (0, e.jsx)(J.Ii, {
                              onClick: () => p(BigInt(0)),
                              children: (0, r.we)(
                                "#Parental_PlaytimeWindows_ClearAll",
                              ),
                            }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, e.jsxs)("div", {
                className: F.ParentalPlaytimeWindows,
                children: [
                  (0, e.jsx)(zt, {
                    className: F.Grid,
                    nWindows: s,
                    onToggle: c,
                  }),
                  !l &&
                    (0, e.jsx)(Ea, {
                      className: F.Input,
                      nWindows: s,
                      onSet: p,
                    }),
                ],
              }),
              (0, e.jsx)(Zt, {
                strLabel: "#Parental_Playtime_Limit",
                nMinutes: t.allowed_daily_minutes || 0,
                onSelected: d,
              }),
            ],
          });
        }
        function Qt(i, t) {
          let n = BigInt(0),
            a = BigInt(1) << BigInt(i);
          for (let s = i; s < t; s++) (n = n | a), (a = a << BigInt(1));
          return n;
        }
        function Ea(i) {
          const { className: t, nWindows: n, onSet: a, ...s } = i,
            [o, l] = f.useState(De()().startOf("day")),
            [c, p] = f.useState(De()().startOf("day").add(1, "day")),
            d = o;
          let m = De()(c);
          const g = (d.hour() ?? 0) * 2 + (d.minute() ?? 0) / 30;
          let y =
            (m.hour() ?? 0) * 2 +
            (m.minute() ?? 0) / 30 +
            (m.day() - d.day()) * 48;
          const _ = f.useCallback(() => {
              let D = Qt(g, y);
              a(n | D);
            }, [a, n, g, y]),
            I = f.useCallback(() => {
              let D = Qt(g, y);
              a(n & ~D);
            }, [a, n, g, y]),
            P = f.useCallback(
              (D) => {
                const q = D;
                l(q), q > m && p(q);
              },
              [m],
            ),
            S = f.useCallback(
              (D) => {
                let q = D;
                q.hours() != 0 || q.minutes() != 0
                  ? (q = q.day(d.day()))
                  : (q = q.day(d.day() + 1)),
                  q >= d ? p(q) : p(De()(d));
              },
              [d],
            );
          return (0, e.jsxs)("div", {
            className: (0, T.A)(F.ParentalPlaytimeInput, t),
            ...s,
            children: [
              (0, e.jsx)("div", {
                children: (0, r.we)("#Parental_PlaytimeWindows_From"),
              }),
              (0, e.jsx)("div", {
                children: (0, r.we)("#Parental_PlaytimeWindows_To"),
              }),
              (0, e.jsx)("div", {}),
              (0, e.jsx)(It(), {
                className: F.Datetime,
                value: d,
                onChange: P,
                dateFormat: !1,
                open: !0,
                input: !1,
                timeConstraints: { minutes: { min: 0, max: 59, step: 30 } },
              }),
              (0, e.jsx)(It(), {
                className: F.Datetime,
                value: m,
                onChange: S,
                dateFormat: !1,
                open: !0,
                input: !1,
                timeConstraints: { minutes: { min: 0, max: 59, step: 30 } },
              }),
              (0, e.jsxs)("div", {
                className: F.ButtonCtn,
                children: [
                  (0, e.jsx)("div", {
                    className: F.ButtonWrapper,
                    children: (0, e.jsx)(C.$n, {
                      className: F.Button,
                      disabled: g >= y,
                      onClick: _,
                      children: "+",
                    }),
                  }),
                  (0, e.jsx)("div", {
                    className: F.ButtonWrapper,
                    children: (0, e.jsx)(C.$n, {
                      className: F.Button,
                      disabled: g >= y,
                      onClick: I,
                      children: "-",
                    }),
                  }),
                ],
              }),
            ],
          });
        }
        function qt(i) {
          let t = (0, r.Yp)("#Parental_Playtime_Hours", i);
          return (
            i == 0
              ? (t = (0, r.we)("#Parental_Playtime_Hours_None"))
              : i == 24 &&
                (t = (0, r.we)("#Parental_Playtime_Hours_NoRestriction")),
            t
          );
        }
        function Ta(i) {
          const t = Math.floor(i / 60);
          return qt(t);
        }
        function Zt(i) {
          const {
              strLabel: t,
              nMinutes: n,
              onSelected: a,
              nMin: s = 0,
              nMax: o = 25,
            } = i,
            c = (0, Bt.xC)() === "mobile" ? "below" : "inline",
            p = f.useCallback(
              (m) => {
                a(m.data * 60);
              },
              [a],
            ),
            d = [];
          for (let m = s; m < o; m++) d.push({ data: m, label: qt(m) });
          return (0, e.jsx)(C.Vb, {
            layout: c,
            label: (0, r.we)(t),
            bottomSeparator: "none",
            rgOptions: d,
            selectedOption: Math.floor(n / 60),
            onChange: p,
            strDropDownButtonClassName: F.HoursSelector,
            arrowClassName: F.Arrow,
            contextMenuPositionOptions: {
              bMatchWidth: !0,
              bDisablePopTop: !0,
              bFitToWindow: !0,
            },
          });
        }
        function Ga(i) {
          const { steamid: t, settings: n, dayIndex: a, strDay: s } = i,
            [o, l] = f.useState(!1),
            c = BigInt(
              parseInt(
                n.playtime_restrictions?.playtime_days[a]?.allowed_time_windows,
              ) || 0,
            ),
            p =
              n.playtime_restrictions?.playtime_days[a]
                ?.allowed_daily_minutes || 0;
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsxs)(j.Z, {
                className: F.ParentalPlaytimeRow,
                onActivate: () => l(!0),
                children: [
                  (0, e.jsx)("div", { className: F.Day, children: s }),
                  (0, e.jsx)("div", { className: F.Windows, children: yt(c) }),
                  (0, e.jsxs)("div", {
                    className: F.Minutes,
                    children: [
                      (0, e.jsxs)("div", {
                        children: [(0, r.we)("#Parental_Playtime_Limit"), ":"],
                      }),
                      (0, e.jsx)("div", { children: Ta(p) }),
                    ],
                  }),
                ],
              }),
              (0, e.jsx)(U.EN, {
                active: o,
                children: (0, e.jsx)(Ma, {
                  steamid: t,
                  settings: n,
                  dayIndexStart: a,
                  closeModal: () => l(!1),
                }),
              }),
            ],
          });
        }
        function Jt() {
          const i = De()
              .localeData(r.pf.GetPreferredLocales()[0])
              .firstDayOfWeek(),
            t = Intl.DateTimeFormat(r.pf.GetPreferredLocales(), {
              weekday: "long",
            });
          return Array.from({ length: 7 }, (n, a) => {
            const s = (a + i) % 7;
            return { data: s, label: t.format(De()().day(s).toDate()) };
          });
        }
        function Oa(i) {
          const { steamid: t, settings: n } = i,
            a = Jt().map((s) =>
              (0, e.jsx)(
                Ga,
                { steamid: t, settings: n, dayIndex: s.data, strDay: s.label },
                s.data,
              ),
            );
          return (0, e.jsx)("div", {
            className: F.ParentalPlaytimeInner,
            children: a,
          });
        }
        function La(i) {
          const { steamid: t, settings: n } = i,
            a = (0, oe.At)(t),
            s = f.useCallback(
              (l) => {
                if (
                  ((n.playtime_restrictions.apply_playtime_restrictions = l),
                  !n.playtime_restrictions.playtime_days?.length)
                ) {
                  n.playtime_restrictions.playtime_days = [];
                  for (let c = 0; c < 7; c++)
                    n.playtime_restrictions.playtime_days.push({});
                }
                a.mutate(n);
              },
              [a, n],
            ),
            o = n.playtime_restrictions.apply_playtime_restrictions;
          return (0, e.jsxs)("div", {
            className: F.ParentalPlaytime,
            children: [
              (0, e.jsx)(C.y4, {
                className: F.ToggleCtn,
                bottomSeparator: "none",
                label: (0, r.we)("#Parental_EnablePlaytimeRestrictions"),
                checked: o,
                onChange: s,
              }),
              o && (0, e.jsx)(Oa, { steamid: t, settings: n }),
            ],
          });
        }
        function Ba(i) {
          const {
              steamid: t,
              eContentDescriptor: n,
              settings: a,
              fnSelectContentDescriptor: s,
            } = i,
            o = (0, oe.At)(t);
          let l = (0, ge.H5)(n),
            c = (0, ge.V)(n, !0);
          const p = (P) => P.excluded_store_content_descriptors,
            d = (P, S) => {
              P.excluded_store_content_descriptors = S;
            },
            m = (P) => P.excluded_community_content_descriptors,
            g = (P, S) => {
              P.excluded_community_content_descriptors = S;
            },
            y = (P, S) => (D) => {
              const q = !D;
              let se = P(a);
              if (q) {
                const ie = [n].concat((0, ge.Rl)(n));
                for (const le of ie)
                  se.findIndex((ye) => ye === le.valueOf()) !== -1 ||
                    se.push(le.valueOf());
              } else {
                const ie = [n].concat((0, ge.fd)(n));
                for (const le of ie) {
                  const Ne = se.findIndex((ye) => ye === le.valueOf());
                  Ne !== -1 && se.splice(Ne, 1);
                }
              }
              S(a, se), o.mutate(a);
            },
            _ = !a.excluded_store_content_descriptors.includes(n.valueOf()),
            I = !a.excluded_community_content_descriptors.includes(n.valueOf());
          return (0, e.jsxs)(j.Z, {
            className: F.ContentDescriptorRow,
            navEntryPreferPosition: ve.iU.MAINTAIN_X,
            children: [
              (0, e.jsxs)(j.Z, {
                className: F.ContentDescriptorInfo,
                children: [
                  (0, e.jsx)("div", {
                    className: F.ContentDescriptorName,
                    children: l,
                  }),
                  (0, e.jsxs)("div", {
                    className: F.ContentDescriptorDescription,
                    children: [
                      c,
                      (0, e.jsx)("br", {}),
                      (0, e.jsx)(J.Ii, {
                        className: F.ContentDescriptorViewExamples,
                        onClick: () => s(n),
                        children: (0, r.we)(
                          "#ContentDescriptors_ViewExampleProducts",
                        ),
                      }),
                    ],
                  }),
                ],
              }),
              (0, e.jsx)(j.Z, {
                className: F.ContentDescriptorToggle,
                children: (0, e.jsx)(C.Yh, { checked: _, onChange: y(p, d) }),
              }),
              (0, e.jsx)(j.Z, {
                className: F.ContentDescriptorToggle,
                children: (0, e.jsx)(C.Yh, { checked: I, onChange: y(m, g) }),
              }),
            ],
          });
        }
        function ka(i) {
          const { strName: t, strLogoUrl: n } = i;
          return (0, e.jsxs)(j.Z, {
            className: F.ContentDescriptorExampleApp,
            focusable: !0,
            children: [
              (0, e.jsx)("img", { src: n }),
              (0, e.jsx)("div", { children: t }),
            ],
          });
        }
        function Ha(i) {
          const { eSelectedContentDescriptor: t, fnSelectDescriptor: n } = i,
            a = (0, ge.eH)(t);
          return (0, e.jsx)(U.EN, {
            active: t !== null,
            children: (0, e.jsxs)(U.eV, {
              title: (0, r.we)("#ContentDescriptor_ExampleProductsHeader"),
              closeModal: () => n(null),
              children: [
                !a.data && (0, e.jsx)(R.t, {}),
                a.data?.length === 0 &&
                  (0, e.jsx)("p", {
                    children: (0, r.we)("#ContentDescriptorExample_NoGames"),
                  }),
                a.data?.length > 0 &&
                  a.data.map((s, o) =>
                    (0, e.jsx)(ka, { strName: s.name, strLogoUrl: s.logo }, o),
                  ),
              ],
            }),
          });
        }
        function Wa(i) {
          const { steamid: t, settings: n } = i,
            [a, s] = (0, f.useState)(null);
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(Ha, {
                eSelectedContentDescriptor: a,
                fnSelectDescriptor: s,
              }),
              (0, e.jsxs)(j.Z, {
                className: F.ContentDescriptorParentalSettings,
                children: [
                  (0, e.jsx)("p", {
                    children: (0, r.we)("#Parental_ContentDescriptors_Intro"),
                  }),
                  (0, e.jsxs)(j.Z, {
                    className: F.ContentDescriptorParentalSettingsInner,
                    children: [
                      (0, e.jsxs)(j.Z, {
                        className: F.ContentDescriptorRow,
                        children: [
                          (0, e.jsx)(j.Z, {
                            className: F.ContentDescriptorInfo,
                          }),
                          (0, e.jsx)(j.Z, {
                            className: F.ContentDescriptorToggle,
                            children: (0, r.we)(
                              "#Parental_ContentDescriptors_Store",
                            ),
                          }),
                          (0, e.jsx)(j.Z, {
                            className: F.ContentDescriptorToggle,
                            children: (0, r.we)(
                              "#Parental_ContentDescriptors_Community",
                            ),
                          }),
                        ],
                      }),
                      ge.TW.map((o) =>
                        (0, e.jsx)(
                          Ba,
                          {
                            steamid: t,
                            eContentDescriptor: o,
                            settings: n,
                            fnSelectContentDescriptor: s,
                          },
                          o,
                        ),
                      ),
                    ],
                  }),
                ],
              }),
            ],
          });
        }
        function Yt(i) {
          return (0, e.jsx)("div", {
            className: F.ErrorLoading,
            children: (0, r.we)("#Parental_Settings_PageError"),
          });
        }
        function Ua(i) {
          let t = (0, k.g)();
          const n = (0, O.LH)(),
            a = t.steamid,
            s = (0, k.W6)(),
            o = () => {
              s.push("/account/familymanagement");
            },
            l = (0, x.vo)(!0),
            c = (0, oe.S0)(a),
            p = (0, ne.js)(a),
            d = l.isLoading || c.isLoading || p.isLoading,
            m = l.isError || c.isError || p.isError;
          if (d && !m) return (0, e.jsx)(R.t, { position: "center" });
          if (m || !c.data.settings) return (0, e.jsx)(Yt, {});
          const g = l.data.family_group(),
            y = (0, x.Ee)(g, n),
            _ = (0, x.Ee)(g, t.steamid);
          if (!y || !_ || y.role() != h.PQ.s || _.role() != h.PQ.sf)
            return (0, e.jsx)(Yt, {});
          const { settings: I, mapAppsAllowed: P } = c.data,
            S = p.data;
          return (0, e.jsxs)("div", {
            className: F.FamilyMemberParentalSettings,
            children: [
              (0, e.jsx)(j.Z, {
                className: F.ReturnToFamily,
                onActivate: o,
                children: (0, r.we)("#Parental_Settings_Return"),
              }),
              (0, e.jsxs)("div", {
                className: F.HeaderContainer,
                children: [
                  (0, e.jsx)(Va, { member: _, persona: S }),
                  (0, e.jsx)(pa, { steamid: a, settings: I, familyGroup: g }),
                ],
              }),
              I.is_enabled &&
                (0, e.jsx)(Ka, { steamID: a, settings: I, mapAppsAllowed: P }),
            ],
          });
        }
        function Va(i) {
          const { member: t, persona: n } = i;
          return (0, e.jsxs)("div", {
            className: F.ParentalHeader,
            children: [
              (0, e.jsx)("div", {
                className: F.Title,
                children: (0, r.we)("#Parental_Settings_For"),
              }),
              (0, e.jsx)(ce.ff, { persona: n, role: t.role() }),
            ],
          });
        }
        function Ka(i) {
          const { steamID: t, settings: n, mapAppsAllowed: a } = i,
            s = (0, f.useMemo)(
              () => [
                {
                  name: (0, r.we)("#Parental_Tab_AllowedGames"),
                  key: "games",
                  contents: (0, e.jsx)(wa, {
                    steamid: t,
                    settings: n,
                    mapAppsAllowed: a,
                  }),
                },
                {
                  name: (0, r.we)("#Parental_Tab_Settings"),
                  key: "settings",
                  contents: (0, e.jsx)(za, { steamid: t, settings: n }),
                },
                {
                  name: (0, r.we)("#Parental_Tab_PlaytimeLimits"),
                  key: "playtime",
                  contents: (0, e.jsx)(La, { steamid: t, settings: n }),
                },
              ],
              [t, n, a],
            );
          return (0, e.jsx)(re.V, {
            tabs: s,
            classNameCtn: M.FamilyTabs,
            classNameTab: M.FamilyTab,
          });
        }
        function za(i) {
          const { steamid: t, settings: n } = i;
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(Na, { steamid: t, settings: n }),
              (0, e.jsx)(Wa, { steamid: t, settings: n }),
            ],
          });
        }
        var Qa = u(14874),
          qa = u(48156),
          Za = ((i) => (
            (i[(i.k_ParentalFeature = 0)] = "k_ParentalFeature"),
            (i[(i.k_ParentalPlaytime = 1)] = "k_ParentalPlaytime"),
            (i[(i.k_PurchaseRequest = 2)] = "k_PurchaseRequest"),
            i
          ))(Za || {});
        function Ja(i) {
          const t = (0, O.LH)(),
            a = f.useRef(Math.floor(Date.now() / 1e3)).current - 3600 * 24 * 30,
            s = (0, oe.ve)(i, a),
            o = (0, x.BO)(i, a);
          if (!s.isSuccess || !o.isSuccess) return [];
          let l = s.data
            .feature_requests()
            .map((c) => ({
              type: 0,
              key: "parentalfeature_" + c.requestid(),
              data: c,
              requestTimestamp: c.time_requested(),
            }));
          return (
            (l = l.concat(
              s.data
                .playtime_requests()
                .map((c) => ({
                  type: 1,
                  key: "parentalplaytime_" + c.requestid(),
                  data: c,
                  requestTimestamp: c.time_requested(),
                })),
            )),
            (l = l.concat(
              o.data
                .requests()
                .map((c) => ({
                  type: 2,
                  key: "purchaserequest_" + c.request_id(),
                  data: c,
                  requestTimestamp: c.time_requested(),
                })),
            )),
            l.sort((c, p) => p.requestTimestamp - c.requestTimestamp),
            l
          );
        }
        function Ya(i) {
          const { item: t, closeModal: n } = i,
            a = (0, oe.EB)(t),
            [s, o] = f.useState(3600),
            c = (0, Bt.xC)() === "mobile" ? "below" : "inline",
            p = f.useCallback(() => {
              a.mutateAsync({ bApprove: !0, durationSec: s });
            }, [a, s]),
            d = f.useCallback((g, y) => {
              o(g.data);
            }, []),
            m = [
              {
                label: (0, r.we)("#FeatureRequest_AcceptDialog_1Hour"),
                data: 3600,
              },
              {
                label: (0, r.we)("#FeatureRequest_AcceptDialog_4Hours"),
                data: 14400,
              },
              {
                label: (0, r.we)("#FeatureRequest_AcceptDialog_24Hours"),
                data: 1440 * 60,
              },
              {
                label: (0, r.we)("#FeatureRequest_AcceptDialog_Permanently"),
                data: 0,
              },
            ];
          return (0, e.jsxs)(U.o0, {
            className: K().ApproveRequestDialog,
            closeModal: n,
            onOK: p,
            strTitle: (0, e.jsx)(C.Y9, {
              className: K().Title,
              children: (0, r.we)("#FeatureRequest_AcceptDialog_Title"),
            }),
            children: [
              (0, e.jsx)(C.a3, {
                children: (0, r.we)("#FeatureRequest_AcceptDialog_BodyText"),
              }),
              (0, e.jsx)(C.Vb, {
                layout: c,
                bottomSeparator: "none",
                label: (0, r.we)("#FeatureRequest_AcceptDialog_AllowAccess"),
                rgOptions: m,
                selectedOption: s,
                onChange: d,
              }),
            ],
          });
        }
        function Xa(i) {
          const {
              currentMinutes: t,
              currentWindows: n,
              additionalMinutes: a,
              setAdditionalMinutes: s,
              nWindows: o,
              setWindows: l,
            } = i,
            c = n == BigInt(0xffffffffffff),
            p = t == 1440,
            d = f.useCallback(
              (y) => {
                const _ = o ^ (BigInt(1) << BigInt(y));
                l(_);
              },
              [o, l],
            ),
            m = f.useCallback(
              (y) => {
                s(y);
              },
              [s],
            );
          let g = "#PlaytimeRequest_AcceptDialog_BodyText";
          return (
            c &&
              (g = "#PlaytimeRequest_AcceptDialog_BodyText_UnlimitedWindows"),
            p && (g = "#PlaytimeRequest_AcceptDialog_BodyText_UnlimitedHours"),
            (0, e.jsxs)("div", {
              className: K().ApprovePlaytimeDialog,
              children: [
                (0, e.jsx)(C.a3, { children: (0, r.we)(g) }),
                !c &&
                  (0, e.jsxs)("div", {
                    className: K().ParentalPlaytimeWindows,
                    children: [
                      (0, e.jsx)("div", {
                        className: K().Text,
                        children: yt(o),
                      }),
                      (0, e.jsx)(zt, {
                        nWindows: o,
                        nLockedWindows: n,
                        onToggle: d,
                      }),
                    ],
                  }),
                !p &&
                  (0, e.jsxs)("div", {
                    className: K().CurrentHours,
                    children: [
                      (0, r.Yp)(
                        "#PlaytimeRequest_AcceptDialog_CurrentHours",
                        Math.floor(t / 60),
                      ),
                      " ",
                    ],
                  }),
                p &&
                  (0, e.jsx)("div", {
                    className: K().CurrentHours,
                    children: (0, r.we)(
                      "#PlaytimeRequest_AcceptDialog_UnlimitedHours",
                    ),
                  }),
                !p &&
                  (0, e.jsx)(Zt, {
                    strLabel: "#PlaytimeRequest_AcceptDialog_AdditionalTime",
                    nMinutes: a,
                    onSelected: m,
                    nMax: 25 - t / 60,
                  }),
              ],
            })
          );
        }
        function $a(i) {
          const { item: t, closeModal: n } = i,
            a = (0, oe.To)(t),
            [s, o] = f.useState(!1),
            l = t.current_playtime_restrictions().allowed_daily_minutes(),
            c = BigInt(
              parseInt(
                t.current_playtime_restrictions().allowed_time_windows(),
              ),
            ),
            [p, d] = f.useState(60),
            [m, g] = f.useState(c);
          f.useEffect(() => {
            o(p == 0 && c == m);
          }, [p, c, m]);
          const y = f.useCallback(() => {
            const _ = new Tn.$A();
            _.restrictions(!0).set_allowed_daily_minutes(l + p),
              _.restrictions(!0).set_allowed_time_windows(m.toString()),
              _.set_rtime_expires(t.time_expires()),
              a.mutateAsync({ bApprove: !0, restrictions: _ });
          }, [a, l, p, m, t]);
          return (0, e.jsx)(U.o0, {
            className: K().ApproveRequestDialog,
            closeModal: n,
            onOK: y,
            bOKDisabled: s,
            strTitle: (0, e.jsx)(C.Y9, {
              className: K().Title,
              children: (0, r.we)("#FeatureRequest_AcceptDialog_Title"),
            }),
            children: (0, e.jsx)(Xa, {
              currentMinutes: l,
              currentWindows: c,
              additionalMinutes: p,
              setAdditionalMinutes: d,
              nWindows: m,
              setWindows: g,
            }),
          });
        }
        function Xt(i) {
          let { steamIDResponder: t, resultMessage: n, timeResponded: a } = i;
          const s = (0, ne.js)(t.ConvertTo64BitString()),
            o = s?.data,
            l = (0, Ft.KM)(t.GetAccountID()),
            c = (0, z.T)();
          return (
            o || (n = (0, r.we)("#ParentalRequest_Canceled")),
            (0, e.jsxs)("div", {
              className: K().RequestResponse,
              children: [
                (0, e.jsx)("div", { className: K().Result, children: n }),
                !!o &&
                  (0, e.jsxs)("div", {
                    className: K().AvatarAndPersona,
                    children: [
                      (0, e.jsx)(te.i8, {
                        className: K().Avatar,
                        persona: o,
                        size: "Medium",
                        statusPosition: "right",
                      }),
                      (0, e.jsx)(Z.A, {
                        persona: s.data,
                        bParenthesizeNicknames: c.data
                          ?.preferences()
                          .parenthesize_nicknames(),
                        strNickname: l,
                      }),
                    ],
                  }),
                (0, e.jsx)("div", {
                  className: K().TimeResponded,
                  children: (0, r.Nm)(a),
                }),
              ],
            })
          );
        }
        function $t(i) {
          const { steamID: t, locToken: n, locTokenPlurality: a } = i,
            s = (0, ne.js)(t.ConvertTo64BitString()),
            o = s?.data,
            l = (0, Ft.KM)(t.GetAccountID()),
            c = (0, z.T)();
          return s.isSuccess
            ? (0, e.jsxs)("div", {
                className: K().AvatarAndPersona,
                children: [
                  (0, e.jsx)(te.i8, {
                    className: K().Avatar,
                    persona: o,
                    size: "Medium",
                    statusPosition: "right",
                  }),
                  (0, r.TG)(
                    n,
                    a,
                    (0, e.jsx)(Z.A, {
                      persona: s.data,
                      bParenthesizeNicknames: c.data
                        ?.preferences()
                        .parenthesize_nicknames(),
                      strNickname: l,
                    }),
                  ),
                ],
              })
            : null;
        }
        function en(i) {
          const {
              item: t,
              nFeatures: n,
              onReject: a,
              renderApproveDialog: s,
            } = i,
            o = (0, O.LH)(),
            l = t.steamid() == o,
            c = !n,
            [p, d] = f.useState(!1),
            m = f.useCallback(() => {
              d(!0);
            }, []);
          let g = [],
            y = n;
          for (let _ = 0; _ < 32; _++)
            if (y & (1 << _)) {
              const I = _,
                P = l
                  ? it[I]?.requestDescriptionSelf
                  : it[I]?.requestDescription;
              P && g.push((0, r.we)(P));
            }
          return g.length == 0 && !c
            ? null
            : (0, e.jsxs)("div", {
                className: (0, T.A)(
                  K().FamilyRequestItem,
                  K().ParentalFeatureRequestItem,
                ),
                children: [
                  (0, e.jsxs)("div", {
                    className: K().RequestInfo,
                    children: [
                      l &&
                        (0, e.jsx)("div", {
                          className: K().SelfRequested,
                          children: (0, r.we)(
                            c
                              ? "#PlaytimeRequest_UserRequested_Self"
                              : "#FeatureRequest_UserRequested_Self",
                          ),
                        }),
                      !l &&
                        (0, e.jsx)($t, {
                          steamID: new E.b(t.steamid()),
                          locToken: c
                            ? "#PlaytimeRequest_UserRequested"
                            : "#FeatureRequest_UserRequested",
                          locTokenPlurality: 1,
                        }),
                      (0, e.jsxs)("ul", {
                        className: K().FeatureList,
                        children: [
                          g.map((_) =>
                            (0, e.jsx)(
                              "li",
                              { className: K().Feature, children: _ },
                              _,
                            ),
                          ),
                          (0, e.jsx)("div", {
                            className: K().TimeResponded,
                            children: (0, r.Nm)(t.time_requested()),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    className: K().StatusCtn,
                    children: [
                      !l &&
                        !t.time_responded() &&
                        (0, e.jsxs)(j.Z, {
                          className: K().Buttons,
                          children: [
                            (0, e.jsx)(C.jn, {
                              noFocusRing: !1,
                              onClick: m,
                              children: (0, r.we)("#ParentalRequest_Accept"),
                            }),
                            (0, e.jsx)(C.$n, {
                              noFocusRing: !1,
                              onClick: a,
                              children: (0, r.we)("#ParentalRequest_Reject"),
                            }),
                          ],
                        }),
                      l &&
                        !t.time_responded() &&
                        (0, e.jsx)("div", {
                          className: (0, T.A)(K().Buttons, K().Pending),
                          children: (0, r.we)("#ParentalRequest_Pending"),
                        }),
                      !!t.time_responded() &&
                        (0, e.jsx)(Xt, {
                          steamIDResponder: new E.b(t.steamid_responder()),
                          resultMessage: (0, r.we)(
                            t.approved()
                              ? "#ParentalRequest_AcceptedBy"
                              : "#ParentalRequest_RejectedBy",
                          ),
                          timeResponded: t.time_responded(),
                        }),
                      !t.time_responded() &&
                        (0, e.jsx)(U.EN, {
                          active: p,
                          children: s(() => d(!1)),
                        }),
                    ],
                  }),
                ],
              });
        }
        function es(i) {
          const { item: t } = i,
            n = (0, oe.EB)(t),
            a = f.useCallback(() => {
              n.mutateAsync({ bApprove: !1, durationSec: 0 });
            }, [n]),
            s = f.useCallback(
              (l) => (0, e.jsx)(Ya, { item: t, closeModal: l }),
              [t],
            ),
            o = t.features();
          return (0, e.jsx)(en, {
            item: t,
            nFeatures: o,
            onReject: a,
            renderApproveDialog: s,
          });
        }
        function ts(i) {
          const { item: t } = i,
            n = (0, oe.To)(t),
            a = f.useCallback(() => {
              n.mutateAsync({ bApprove: !1, restrictions: null });
            }, [n]),
            s = f.useCallback(
              (o) => (0, e.jsx)($a, { item: t, closeModal: o }),
              [t],
            );
          return (0, e.jsx)(en, {
            item: t,
            onReject: a,
            renderApproveDialog: s,
          });
        }
        function ns(i) {
          const { packageIDs: t, bundleIDs: n } = i;
          return !t.length && !n.length
            ? null
            : (0, e.jsxs)(e.Fragment, {
                children: [
                  (0, e.jsx)("div", {
                    className: K().Purchased,
                    children: (0, r.Yp)(
                      "#PurchaseRequest_Purchased",
                      t.length + n.length,
                    ),
                  }),
                  (0, e.jsx)(tn, { packageIDs: t, bundleIDs: n }),
                ],
              });
        }
        function tn(i) {
          const { packageIDs: t, bundleIDs: n } = i,
            [a, s] = (0, f.useState)(!1),
            o = 5;
          if (!t.length && !n.length) return null;
          const l = t.length + n.length;
          let c = null;
          if (a || l <= o) c = nn(t, n, l);
          else {
            (c = nn(t, n, o)),
              c.push(
                (0, e.jsx)(
                  "span",
                  {
                    children: (0, r.we)(
                      "#PurchaseRequest_PackageLinksFinalSeparator",
                    ),
                  },
                  "sepand",
                ),
              );
            const p = t.length + n.length - o;
            c.push(
              (0, e.jsx)(
                j.Z,
                {
                  onActivate: () => s(!0),
                  className: (0, T.A)(K().PackageShowMore, K().Selectable),
                  focusable: !0,
                  children: (0, r.we)(
                    "#PurchaseRequest_PackageLinksShowMore",
                    p,
                  ),
                },
                "showMore",
              ),
            );
          }
          return (0, e.jsx)("div", {
            className: K().PackageLinks,
            children: c,
          });
        }
        function nn(i, t, n) {
          let a = [],
            s = 0;
          for (let o = 0; o < i.length && s < n; o++, s++) {
            const l = i[o];
            a.push((0, e.jsx)(as, { packageID: l }, l)),
              s < n - 1 &&
                a.push(
                  (0, e.jsx)(
                    "span",
                    {
                      children: (0, r.we)(
                        "#PurchaseRequest_PackageLinksSeparator",
                      ),
                    },
                    "sep" + l,
                  ),
                );
          }
          for (let o = 0; o < t.length && s < n; o++, s++) {
            const l = t[o];
            a.push((0, e.jsx)(ss, { bundleID: l }, l)),
              s < n - 1 &&
                a.push(
                  (0, e.jsx)(
                    "span",
                    {
                      children: (0, r.we)(
                        "#PurchaseRequest_PackageLinksSeparator",
                      ),
                    },
                    "sep" + l,
                  ),
                );
          }
          return a;
        }
        function as(i) {
          const { packageID: t } = i,
            [n] = (0, Ae.Gg)(t, {});
          return (0, e.jsx)(an, { storeItem: n });
        }
        function ss(i) {
          const { bundleID: t } = i,
            [n] = (0, Ae.Ow)(t, {});
          return (0, e.jsx)(an, { storeItem: n });
        }
        function an(i) {
          const { storeItem: t } = i,
            n = { direction: "right", style: { minWidth: "320px" } },
            a = (0, Qa.DJ)(t),
            s = f.useCallback(
              (l) => {
                pt((0, Xe.uX)(l), t.GetStorePageURL());
              },
              [t],
            );
          if (!t) return null;
          const o = t.GetStoreItemType() === qa.c6.RD ? "sub" : "bundle";
          return (0, e.jsx)(Nt.Q, {
            id: a,
            name: t.GetName(),
            bPreventNavigation: !0,
            bHidePrice: !1,
            bShowWishlistButton: !1,
            hoverProps: n,
            className: K().HoverSource,
            children: (0, e.jsx)(j.Z, {
              className: (0, T.A)(K().PackageLinkItem, K().Selectable),
              focusable: !0,
              onActivate: s,
              children: (0, e.jsx)("div", {
                className: K().PackageLinkItemText,
                children: t.GetName(),
              }),
            }),
          });
        }
        function is(i) {
          const { item: t, familyGroupID: n } = i,
            a = (0, O.LH)(),
            s = t.requester_steamid() === a,
            o = (0, x.Ke)(n, t.request_id(), s ? h.IG.jG : h.IG.DP),
            { setErrorMessage: l } = (0, x.RC)();
          (0, x.gv)(
            o,
            s
              ? "#FamilyManagement_ErrorCancelPurchaseRequest"
              : "#FamilyManagement_ErrorDeclinePurchaseRequest",
            x.eS.k_EFamilyQueryDeclinePurchaseRequest,
          );
          const c = (0, x.w1)(n, t.request_id()),
            p = () => {
              l(null), o.mutate();
            };
          let d = "";
          if (t.is_completed())
            switch (t.response_action()) {
              case h.IG.Z5:
              case h.IG.hs:
                break;
              case h.IG.DP:
                d = (0, r.we)("#PurchaseRequest_DeclinedBy");
                break;
              case h.IG.ge:
                d = (0, r.we)("#PurchaseRequest_PurchasedBy");
                break;
              case h.IG.JV:
                d = (0, r.we)("#PurchaseRequest_Abandoned");
                break;
              case h.IG.jG:
                d = (0, r.we)("#PurchaseRequest_CanceledBy");
                break;
            }
          let m = !1;
          return (
            t.purchased_packageids() &&
              t.requested_packageids() &&
              t.purchased_packageids().length ==
                t.requested_packageids().length &&
              t.purchased_bundleids() &&
              t.requested_bundleids() &&
              t.purchased_bundleids().length ==
                t.requested_bundleids().length &&
              (m = !0),
            (0, e.jsxs)("div", {
              className: (0, T.A)(
                K().FamilyRequestItem,
                K().PurchaseRequestItem,
              ),
              children: [
                (0, e.jsxs)("div", {
                  className: K().RequestInfo,
                  children: [
                    s &&
                      (0, e.jsx)("div", {
                        className: K().SelfRequested,
                        children: (0, r.Yp)(
                          "#PurchaseRequest_UserRequested_Self",
                          t.requested_packageids()?.length,
                        ),
                      }),
                    !s &&
                      (0, e.jsx)($t, {
                        steamID: new E.b(t.requester_steamid()),
                        locToken: "#PurchaseRequest_UserRequested",
                        locTokenPlurality: t.requested_packageids()?.length,
                      }),
                    (0, e.jsx)(tn, {
                      packageIDs: t.requested_packageids(),
                      bundleIDs: t.requested_bundleids(),
                    }),
                    !m &&
                      (0, e.jsx)(ns, {
                        packageIDs: t.purchased_packageids(),
                        bundleIDs: t.purchased_bundleids(),
                      }),
                  ],
                }),
                (0, e.jsxs)("div", {
                  className: K().StatusCtn,
                  children: [
                    !t.time_responded() &&
                      (0, e.jsxs)(j.Z, {
                        className: K().Buttons,
                        children: [
                          !s &&
                            !t.time_responded() &&
                            (0, e.jsx)("a", {
                              href: c,
                              children: (0, e.jsx)(C.jn, {
                                noFocusRing: !1,
                                children: (0, r.we)("#PurchaseRequest_View"),
                              }),
                            }),
                          (0, e.jsx)(C.$n, {
                            noFocusRing: !1,
                            onClick: p,
                            children: (0, r.we)(
                              s
                                ? "#PurchaseRequest_Cancel"
                                : "#PurchaseRequest_Decline",
                            ),
                          }),
                        ],
                      }),
                    t.time_responded() &&
                      (0, e.jsx)(Xt, {
                        steamIDResponder: new E.b(t.responder_steamid()),
                        resultMessage: d,
                        timeResponded: t.time_responded(),
                      }),
                  ],
                }),
              ],
            })
          );
        }
        function rs(i) {
          const { item: t, familyGroupID: n } = i;
          let a;
          switch (t.type) {
            case 0:
              a = (0, e.jsx)(es, { item: t.data });
              break;
            case 1:
              a = (0, e.jsx)(ts, { item: t.data });
              break;
            case 2:
              a = (0, e.jsx)(is, { item: t.data, familyGroupID: n });
              break;
            default:
              a = null;
              break;
          }
          return a;
        }
        function os(i) {
          const { rgRequests: t, familyGroupID: n } = i,
            a = t.length > 0;
          return (0, e.jsxs)(e.Fragment, {
            children: [
              !a &&
                (0, e.jsx)("div", {
                  className: K().NoFamilyRequests,
                  children: (0, r.we)("#FamilyManagement_NoCurrentRequests"),
                }),
              a &&
                (0, e.jsx)("div", {
                  className: K().FamilyRequests,
                  children: t.map((s) =>
                    (0, e.jsx)(rs, { item: s, familyGroupID: n }, s.key),
                  ),
                }),
            ],
          });
        }
        var sn = u(36175),
          me = u(49118),
          ls = u(91354),
          cs = u(98609);
        const ms =
            u.p +
            "images/applications/store/defaultappimage.png?v=valveisgoodatcaching",
          qe = 1,
          gt = 24 / qe,
          ds = 14;
        function us(i) {
          const { steamid: t } = i,
            n = (0, x.lF)(t);
          if (((0, Ae.YM)(), n.isLoading))
            return (0, e.jsx)("div", {
              className: me.ThrobberContainer,
              children: (0, e.jsx)(R.t, {}),
            });
          const a = (l) => {
            const c = l.getTime() / 1e3;
            let p = new Date(l);
            p.setDate(p.getDate() + 1);
            const d = p.getTime() / 1e3;
            return n.isSuccess
              ? n.data.filter((m) => m.time_start <= d && m.time_end >= c)
              : [];
          };
          let s = new Date();
          s.setHours(0, 0, 0, 0);
          let o = [...Array(ds).keys()].map((l) => {
            let c = new Date(s);
            return c.setDate(c.getDate() - l), c;
          });
          return (0, e.jsx)(
            "div",
            {
              className: me.PlaytimeHistoryBrowser,
              children: o.map((l, c) =>
                (0, e.jsx)(ps, { date: l, vecSessions: a(l) }, c),
              ),
            },
            t,
          );
        }
        function ps(i) {
          const { date: t, vecSessions: n } = i;
          let a = new Date(t);
          a.setDate(a.getDate() + 1);
          const s = t.getTime() / 1e3,
            o = a.getTime() / 1e3,
            l = (0, Me._l)(s, !0, !0, !1, !0),
            [c, p] = (0, f.useState)(!1);
          let d = 0;
          for (const P of n)
            d += Math.min(P.time_end, o) - Math.max(P.time_start, s);
          const m =
              d === 0 ? (0, r.we)("#FamilyPlaytime_NoPlaytime") : (0, Me.IH)(d),
            g = (P) => {
              const S = s + qe * 3600 * P,
                D = s + qe * 3600 * (P + 1);
              return n.filter((q) => q.time_start <= D && q.time_end >= S);
            };
          let y = new Map();
          for (const P of n) {
            y.has(P.appid) || y.set(P.appid, 0);
            const S = Math.min(P.time_end, o) - Math.max(P.time_start, s);
            y.set(P.appid, y.get(P.appid) + S);
          }
          const _ = Array.from(y.entries());
          _.sort((P, S) => S[1] - P[1]);
          const I = n.length == 0;
          return (0, e.jsxs)(j.Z, {
            className: (0, T.A)(me.PlaytimeHistoryDay, I && me.Empty),
            children: [
              (0, e.jsxs)(j.Z, {
                className: me.PlaytimeOnDay,
                onClick: I ? void 0 : () => p(!c),
                children: [
                  (0, e.jsxs)(j.Z, {
                    className: me.DateColumn,
                    onActivate: I ? void 0 : () => p(!c),
                    children: [
                      l,
                      (0, e.jsx)("br", {}),
                      (0, e.jsx)("span", {
                        className: me.TotalTimePlayed,
                        children: m,
                      }),
                    ],
                  }),
                  d > 0 &&
                    [...Array(gt).keys()].map((P) =>
                      (0, e.jsx)(
                        hs,
                        { nDate: s, nBin: P, vecSessions: g(P) },
                        P,
                      ),
                    ),
                  !I && (0, e.jsx)(ls.c, { bExpanded: c, setExpanded: p }),
                ],
              }),
              c &&
                !I &&
                (0, e.jsx)(j.Z, {
                  className: me.PlaytimeSessionRows,
                  children: _.map((P, S) =>
                    (0, e.jsx)(ys, { appid: P[0], nSecondsPlayed: P[1] }, S),
                  ),
                }),
            ],
          });
        }
        function rn(i) {
          const { appid: t } = i,
            [n, a] = f.useState(0),
            [s, o] = f.useState(!1),
            [l] = (0, Ae.t7)(t, st.A.k_DataRequest_Assets);
          if (!l) return null;
          const c = cs.TS.STORE_ICON_BASE_URL;
          let p = [`${c}${t}/library_600x900.jpg`, `${c}${t}/portrait.png`, ms];
          l.GetAssets()?.GetLibraryCapsuleURL() &&
            (p = [l.GetAssets()?.GetLibraryCapsuleURL(), ...p]);
          const d = () => {
              o(!0);
            },
            m = () => {
              n < p.length && a((y) => y + 1);
            },
            g = p[n];
          return (0, e.jsx)("img", {
            className: (0, T.A)(me.AppImage, s && me.Loaded),
            onLoad: d,
            onError: m,
            src: g,
          });
        }
        function fs(i) {
          const { appid: t } = i,
            [n] = (0, Ae.t7)(t, st.A.k_DataRequest_Assets);
          return n
            ? (0, e.jsx)(J.Ii, {
                href: n.GetStorePageURL(),
                children: (0, e.jsx)(rn, { appid: t }),
              })
            : null;
        }
        function hs(i) {
          const { nDate: t, nBin: n, vecSessions: a } = i,
            s = t + qe * 3600 * n,
            o = t + qe * 3600 * (n + 1),
            [l, c] = (0, f.useState)(!1);
          let p = 0,
            d = new Set();
          for (const D of a)
            (p += Math.min(D.time_end, o) - Math.max(D.time_start, s)),
              d.add(D.appid);
          const m = me.strBarForegroundColor,
            g = me.strBarBackgroundColor,
            y = Math.round((100 * p) / (qe * 3600)),
            _ = `linear-gradient(0deg, ${m} 0%, ${m} ${y}%, ${g} ${y}%, ${g} 100%)`,
            I = (D) => {
              if (D === 0 || D === gt) return "";
              const q = Math.round(gt / 6);
              return D % q === q / 2
                ? new Date(s * 1e3).toLocaleTimeString(
                    r.pf.GetPreferredLocales(),
                    { hour: "numeric" },
                  )
                : "";
            };
          let P =
              d.size === 0
                ? null
                : (0, e.jsx)(j.Z, {
                    className: me.AppListTooltipApps,
                    children: Array.from(d).map((D) =>
                      (0, e.jsx)(fs, { appid: D }, D),
                    ),
                  }),
            S = (0, e.jsxs)("div", {
              className: me.AppListTooltip,
              children: [
                (0, e.jsxs)("div", {
                  className: me.TimeRangeTooltip,
                  children: [(0, Me.KC)(s), " - ", (0, Me.KC)(o)],
                }),
                P,
              ],
            });
          return (0, e.jsxs)(j.Z, {
            focusable: d.size > 0,
            onOKButton: () => c(!0),
            children: [
              (0, e.jsxs)(U.mt, {
                active: l,
                onDismiss: () => c(!1),
                children: [
                  (0, e.jsx)("div", {
                    className: me.TimeRangeTooltip,
                    children: (0, r.we)(
                      "#FamilyPlaytime_GamesPlayedBetween",
                      (0, Me.KC)(s),
                      (0, Me.KC)(o),
                    ),
                  }),
                  P,
                ],
              }),
              (0, e.jsx)(at.m9, {
                toolTipContent: S,
                nDelayShowMS: 0,
                children: (0, e.jsx)("div", {
                  className: (0, T.A)(me.PlaytimeHistoryBin),
                  style: { background: _ },
                  children: (0, e.jsx)("span", {
                    className: me.TimeLabel,
                    children: I(n),
                  }),
                }),
              }),
            ],
          });
        }
        function ys(i) {
          const { appid: t, nSecondsPlayed: n } = i,
            [a] = (0, Ae.t7)(t, st.A.k_DataRequest_Assets);
          return a
            ? (0, e.jsx)(J.Ii, {
                href: a.GetStorePageURL(),
                children: (0, e.jsxs)(j.Z, {
                  className: me.SessionRow,
                  children: [
                    (0, e.jsx)("div", {
                      className: me.GameIcon,
                      children: (0, e.jsx)(rn, { appid: t }),
                    }),
                    (0, e.jsx)("div", {
                      className: me.SessionRowTimeRange,
                      children: (0, Me.IH)(n),
                    }),
                    (0, e.jsx)("div", {
                      className: me.SessionRowGameName,
                      children: a.GetName(),
                    }),
                  ],
                }),
              })
            : null;
        }
        function gs(i) {
          const { familyGroupID: t } = i,
            n = (0, x.Hs)(t),
            a = n.data
              ?.members()
              .filter((m) => m.role() === h.PQ.sf)
              .map((m) => m.steamid()),
            s = (0, ne.DW)(a),
            o = (0, A.M8)(),
            l = (0, z.T)(),
            [c, p] = (0, f.useState)(a ? a[0] : null);
          if (n.isLoading || s.some((m) => m.isLoading) || o.isLoading)
            return (0, e.jsx)("div", {
              className: sn.ThrobberContainer,
              children: (0, e.jsx)(R.t, {}),
            });
          if (a.length === 0)
            return (0, e.jsx)("p", {
              children: (0, r.we)("#FamilyPlaytime_NoChildren"),
            });
          const d = s.map((m) => ({
            label: (0, e.jsx)(Z.A, {
              persona: m.data,
              bIgnorePersonaStatus: !0,
              bParenthesizeNicknames: l.data
                ?.preferences()
                .parenthesize_nicknames(),
              strNickname: o.data.get(m.data.m_steamid.GetAccountID()),
            }),
            data: m.data.m_steamid.ConvertTo64BitString(),
          }));
          return (0, e.jsxs)(j.Z, {
            className: sn.FamilyPlaytime,
            children: [
              (0, e.jsx)(C.Vb, {
                rgOptions: d,
                selectedOption: c,
                onChange: (m) => p(m.data),
                label: (0, r.we)("#FamilyPlaytime_ShowPlaytimeFor"),
                layout: "inline",
                childrenContainerWidth: "max",
              }),
              (0, e.jsx)(us, { steamid: c }),
            ],
          });
        }
        const _s = function () {
          const [t, n] = (0, f.useState)(null),
            a = (0, k.W5)(),
            s = (0, x.vo)();
          if (s.isError) return null;
          const o = !s.data?.is_not_member_of_any_group(),
            l = Y.TS.HELP_BASE_URL + "faqs/view/054C-3167-DD7F-49D4";
          return (0, e.jsx)(x.Tv, {
            staleTimeMs: 3e3,
            children: (0, e.jsxs)(x.IN.Provider, {
              value: { errorMessage: t, setErrorMessage: n },
              children: [
                (0, e.jsx)(ce.pC, {}),
                (0, e.jsxs)(Cs, {
                  children: [
                    (0, e.jsx)(W.Hxx, {}),
                    (0, e.jsx)("span", {
                      className: M.FamilyManagementTitle,
                      children: (0, r.we)("#FamilyManagement_Title"),
                    }),
                    (0, e.jsx)(J.Ii, {
                      className: M.HelpLink,
                      href: l,
                      children: (0, e.jsx)(W._VW, {}),
                    }),
                  ],
                }),
                s.isLoading &&
                  (0, e.jsx)("div", {
                    className: M.ThrobberContainer,
                    children: (0, e.jsx)(R.t, {}),
                  }),
                !s.isLoading &&
                  (0, e.jsx)("div", {
                    className: M.FamilySettingsContainer,
                    children: (0, e.jsx)(j.Z, {
                      className: M.FamilyContainer,
                      children: (0, e.jsxs)(k.dO, {
                        children: [
                          (0, e.jsx)(k.qh, {
                            path: `${a.path}/create`,
                            component: Ss,
                          }),
                          (0, e.jsx)(k.qh, {
                            path: `${a.path}/join`,
                            component: js,
                          }),
                          (0, e.jsx)(k.qh, {
                            path: `${a.path}/confirm_invite`,
                            component: w,
                          }),
                          (0, e.jsx)(k.qh, {
                            path: `${a.path}/parentalcontrols/:steamid`,
                            component: Ua,
                          }),
                          (0, e.jsx)(k.qh, {
                            children: o
                              ? (0, e.jsx)(mn, {
                                  familyGroupID: s.data.family_groupid(),
                                })
                              : (0, e.jsx)(vs, {}),
                          }),
                        ],
                      }),
                    }),
                  }),
              ],
            }),
          });
        };
        function on(i) {
          const t = [
            {
              name: (0, r.we)("#FamilyManagement_SetupTab"),
              key: "setup",
              contents: i.children,
            },
          ];
          return (0, e.jsx)(re.V, { tabs: t, classNameCtn: M.FamilyTabs });
        }
        function _t(i) {
          const t = [
            {
              name: (0, r.we)("#FamilyManagement_JoinAFamily"),
              key: "setup",
              contents: i.children,
            },
          ];
          return (0, e.jsx)(re.V, { tabs: t, classNameCtn: M.FamilyTabs });
        }
        function xs(i) {
          const { familyGroupID: t } = i,
            { mutate: n } = (0, x.vu)(t);
          return (0, e.jsx)(C.jn, {
            className: M.UndeleteSplashButton,
            onClick: () => n(),
            children: (0, r.we)("#FamilyManagement_UndeleteButton"),
          });
        }
        function vs(i) {
          const t = (0, k.W6)(),
            n = (0, x.vo)(),
            { setErrorMessage: a } = (0, x.RC)();
          if (n.isLoading) return (0, e.jsx)(R.t, {});
          const s = n.data?.pending_group_invites().length,
            o = () => {
              a(""), t.push("/account/familymanagement/create");
            },
            l = () => {
              a(""), t.push("/account/familymanagement/join");
            };
          let c;
          s === 0
            ? (c = null)
            : s === 1
              ? (c = (0, r.we)(
                  "#FamilyManagement_SelectJoinButtonPendingInvite",
                ))
              : (c = (0, r.we)(
                  "#FamilyManagement_SelectJoinButtonPendingInvites",
                  s,
                ));
          const p = n.data.cooldown_seconds_remaining() > 0,
            d = n.data.can_undelete_last_joined_family();
          return (0, e.jsx)(on, {
            children: (0, e.jsxs)("div", {
              className: M.OnboardSplashContainer,
              children: [
                (0, e.jsxs)("div", {
                  className: M.WallOfText,
                  children: [
                    (0, e.jsx)("p", {
                      children: (0, r.we)(
                        "#FamilyManagement_CreateInstructions",
                      ),
                    }),
                    (0, e.jsx)("p", {
                      children: (0, r.we)(
                        "#FamilyManagement_CreateInstructions_2",
                      ),
                    }),
                  ],
                }),
                (p || d) &&
                  (0, e.jsxs)("div", {
                    className: M.SplashCooldown,
                    children: [
                      (0, e.jsx)(W.eTF, { color: M.colorCautionSign }),
                      (0, e.jsxs)("div", {
                        children: [
                          !d && (0, r.we)("#FamilyManagement_CanRejoin"),
                          d && (0, r.we)("#FamilyManagement_CanUndelete"),
                        ],
                      }),
                      d &&
                        (0, e.jsx)(e.Fragment, {
                          children: (0, e.jsx)(xs, {
                            familyGroupID:
                              n.data.latest_joined_family_groupid(),
                          }),
                        }),
                    ],
                  }),
                (0, e.jsxs)("div", {
                  className: M.OnboardSplashButtons,
                  children: [
                    (0, e.jsxs)(C.jn, {
                      className: M.OnboardSplashButton,
                      onClick: l,
                      children: [
                        (0, e.jsx)("div", {
                          className: M.OnboardSplashButtonLabel,
                          children: (0, r.we)(
                            "#FamilyManagement_SelectJoinButton",
                          ),
                        }),
                        (0, e.jsx)("div", {
                          className: M.OnboardSplashButtonGraphic,
                          children: (0, e.jsx)(W.dsc, {}),
                        }),
                        s > 0 &&
                          (0, e.jsx)("div", {
                            className: M.OnboardSplashButtonBadge,
                            children: c,
                          }),
                      ],
                    }),
                    (0, e.jsxs)(C.jn, {
                      className: M.OnboardSplashButton,
                      onClick: o,
                      children: [
                        (0, e.jsx)("div", {
                          className: M.OnboardSplashButtonLabel,
                          children: (0, r.we)(
                            "#FamilyManagement_SelectCreateButton",
                          ),
                        }),
                        (0, e.jsx)("div", {
                          className: M.OnboardSplashButtonGraphic,
                          children: (0, e.jsx)(W.LDq, {}),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          });
        }
        function ln(i) {
          const {
            active: t,
            isCreate: n,
            closeModal: a,
            cooldownSeconds: s,
          } = i;
          return (0, e.jsx)(U.EN, {
            active: t,
            children: (0, e.jsxs)(U.o0, {
              bAlertDialog: !0,
              onOK: a,
              closeModal: a,
              strTitle: (0, r.we)(
                n
                  ? "#FamilyManagement_FamilyCreated"
                  : "#FamilyManagement_FamilyJoined",
              ),
              children: [
                (0, e.jsx)(X, { cooldownSecondsRemaining: s }),
                (0, e.jsx)("div", {
                  className: M.DialogText,
                  children: (0, r.we)(
                    n
                      ? "#FamilyManagement_CooldownAllowed_2_Create"
                      : "#FamilyManagement_CooldownAllowed_2_Join",
                  ),
                }),
              ],
            }),
          });
        }
        function Ss(i) {
          const [t, n] = (0, f.useState)(""),
            a = (0, x.TI)(),
            s = (0, k.W6)(),
            o = (0, x.vo)(),
            [l, c, p] = (0, Je.uD)(!1),
            { setErrorMessage: d } = (0, x.RC)();
          if (
            ((0, x.gv)(
              a,
              "#FamilyManagement_ErrorCreateFamily",
              x.eS.k_EFamilyQueryCreateFamily,
            ),
            o.data && !o.data?.is_not_member_of_any_group() && !l)
          )
            return (0, e.jsx)(k.rd, { to: "/account/familymanagement" });
          const m = () => {
            d(null),
              a.mutate(t, {
                onSuccess: (g) => {
                  g.cooldown_skip_granted() && c();
                },
              });
          };
          return a.isPending
            ? (0, e.jsx)("div", {
                className: M.ThrobberContainer,
                children: (0, e.jsx)(R.t, {}),
              })
            : (0, e.jsxs)(on, {
                children: [
                  (0, e.jsx)(ln, {
                    active: l,
                    isCreate: !0,
                    closeModal: p,
                    cooldownSeconds: o.data.cooldown_seconds_remaining(),
                  }),
                  (0, e.jsxs)("div", {
                    className: M.CreateFamilyContainer,
                    children: [
                      (0, e.jsx)(xt, {
                        children: (0, r.we)(
                          "#FamilyManagement_CreateAFamilyHeader",
                        ),
                      }),
                      (0, e.jsx)("p", {
                        children: (0, r.we)(
                          "#FamilyManagement_CreateAFamilyText",
                        ),
                      }),
                      (0, e.jsxs)("div", {
                        className: M.CreateFamilyForm,
                        children: [
                          (0, e.jsx)(J.BA, {
                            type: "text",
                            onChange: (g) => {
                              n(g.target.value), d(null);
                            },
                            value: t,
                            placeholder: (0, r.we)(
                              "#FamilyManagement_InputNamePlaceholder",
                            ),
                          }),
                          (0, e.jsx)(C.jn, {
                            disabled: t.length === 0,
                            onClick: m,
                            children: (0, r.we)(
                              "#FamilyManagement_FinalizeCreateFamily",
                            ),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              });
        }
        function js(i) {
          const t = (0, x.vo)(),
            n = t.data?.pending_group_invites().length,
            [a, s] = (0, f.useState)(!1),
            o = (0, k.W6)(),
            [l, c] = (0, f.useState)(!1),
            p = (0, k.zy)(),
            d = N(p, $),
            m = (0, x.Bc)(d);
          if (t.data && !t.data?.is_not_member_of_any_group() && !a)
            return d
              ? (0, e.jsx)(k.rd, {
                  to: `/account/familymanagement?invitation=${d}`,
                })
              : (0, e.jsx)(k.rd, { to: "/account/familymanagement" });
          let g = null,
            y = t.data.pending_group_invites();
          if (d) {
            const _ = y.findIndex((I) => I.family_groupid() === d);
            _ !== -1 && ((g = y[_]), (y = y.slice()), y.splice(_, 1));
          }
          return (
            g !== null &&
              g.awaiting_2fa() &&
              Y.TS.IN_MOBILE_WEBVIEW &&
              (m.mutate(),
              (window.location.href =
                "steammobile://confirmations?first_of_type=11")),
            a
              ? (0, e.jsx)(_t, {
                  children: (0, e.jsx)(ln, {
                    active: a,
                    isCreate: !1,
                    closeModal: () => {
                      s(!1), o.push("/account/familymanagement");
                    },
                    cooldownSeconds: t.data?.cooldown_seconds_remaining(),
                  }),
                })
              : g
                ? (0, e.jsx)(_t, {
                    children: (0, e.jsxs)("div", {
                      className: M.JoinFamilyContainer,
                      children: [
                        (0, e.jsxs)("p", {
                          children: [
                            (0, r.oW)(
                              "#FamilyManagement_PendingInvitesText",
                              (0, e.jsx)("span", { className: M.JoinWarning }),
                              (0, e.jsx)("b", {}),
                            ),
                            " ",
                          ],
                        }),
                        (0, e.jsx)(
                          ue,
                          {
                            inviteID: g.invite_id(),
                            inviterSteamID: g.inviter_steamid(),
                            familyGroupID: g.family_groupid(),
                            role: g.role(),
                            setCooldownModalActive: s,
                          },
                          d,
                        ),
                        y.length > 0 &&
                          !l &&
                          (0, e.jsx)(e.Fragment, {
                            children: (0, e.jsxs)("p", {
                              children: [
                                (0, r.we)(
                                  y.length === 1
                                    ? "#FamilyManagement_OtherInvite"
                                    : "#FamilyManagement_OtherInvites",
                                  y.length,
                                ),
                                " ",
                                (0, e.jsx)("a", {
                                  onClick: () => c(!0),
                                  children: (0, r.we)(
                                    "#FamilyManagement_Expand",
                                  ),
                                }),
                              ],
                            }),
                          }),
                        y.length > 0 &&
                          l &&
                          (0, e.jsxs)(e.Fragment, {
                            children: [
                              (0, e.jsxs)("p", {
                                children: [
                                  (0, r.we)(
                                    y.length === 1
                                      ? "#FamilyManagement_OtherInvite"
                                      : "#FamilyManagement_OtherInvites",
                                    y.length,
                                  ),
                                  " ",
                                  (0, e.jsx)("a", {
                                    onClick: () => c(!1),
                                    children: (0, r.we)(
                                      "#FamilyManagement_Collapse",
                                    ),
                                  }),
                                ],
                              }),
                              (0, e.jsx)("div", {
                                children: y.map((_) =>
                                  (0, e.jsx)(
                                    ue,
                                    {
                                      inviterSteamID: _.inviter_steamid(),
                                      inviteID: _.invite_id(),
                                      familyGroupID: _.family_groupid(),
                                      role: _.role(),
                                      setCooldownModalActive: s,
                                    },
                                    _.family_groupid(),
                                  ),
                                ),
                              }),
                            ],
                          }),
                      ],
                    }),
                  })
                : (0, e.jsx)(_t, {
                    children: (0, e.jsxs)("div", {
                      className: M.JoinFamilyContainer,
                      children: [
                        d &&
                          (0, e.jsx)("div", {
                            className: M.IncomingInviteGone,
                            children: (0, r.we)(
                              "#FamilyManagement_IncomingInviteGone",
                            ),
                          }),
                        (0, e.jsx)(xt, {
                          children: (0, r.we)("#FamilyManagement_JoinAFamily"),
                        }),
                        (0, e.jsx)("p", {
                          children: (0, r.we)(
                            "#FamilyManagement_ToJoinInstructions",
                          ),
                        }),
                        (0, e.jsx)("br", {}),
                        n > 0 &&
                          (0, e.jsxs)(e.Fragment, {
                            children: [
                              (0, e.jsx)(xt, {
                                children: (0, r.we)(
                                  "#FamilyManagement_PendingInvitesHeader",
                                ),
                              }),
                              (0, e.jsxs)("p", {
                                children: [
                                  (0, r.oW)(
                                    "#FamilyManagement_PendingInvitesText",
                                    (0, e.jsx)("span", {
                                      className: M.JoinWarning,
                                    }),
                                    (0, e.jsx)("b", {}),
                                  ),
                                  " ",
                                ],
                              }),
                              t.data
                                ?.pending_group_invites()
                                .map((_) =>
                                  (0, e.jsx)(
                                    ue,
                                    {
                                      inviteID: _.invite_id(),
                                      inviterSteamID: _.inviter_steamid(),
                                      familyGroupID: _.family_groupid(),
                                      role: _.role(),
                                      setCooldownModalActive: s,
                                    },
                                    _.family_groupid(),
                                  ),
                                ),
                            ],
                          }),
                      ],
                    }),
                  })
          );
        }
        function Ps(i) {
          const t = (0, x.vo)(),
            n = t.data.family_groupid(),
            a = t.data.role() === h.PQ.s,
            s = (0, x.Hs)(n);
          return (
            (0, x.gv)(
              s,
              "#FamilyManagement_ErrorLoadFamily",
              x.eS.k_EFamilyQueryLoadFamily,
            ),
            s.isLoading
              ? (0, e.jsx)("div", {
                  className: M.ManageFamily,
                  children: (0, e.jsx)("div", {
                    className: M.ThrobberContainer,
                    children: (0, e.jsx)(R.t, {}),
                  }),
                })
              : s.isError
                ? null
                : (0, e.jsxs)(j.Z, {
                    className: M.ManageFamily,
                    children: [
                      (0, e.jsx)(Fs, {}),
                      (0, e.jsx)(Is, { familyGroupID: n, isAdult: a }),
                      (0, e.jsx)(ws, { familyGroupID: n }),
                    ],
                  })
          );
        }
        function xt(i) {
          return (0, e.jsx)("div", {
            className: M.FamilySubsection,
            children: i.children,
          });
        }
        function Cs(i) {
          const t = (0, k.W6)();
          function n() {
            t.push("/account/familymanagement");
          }
          return (0, e.jsx)("div", {
            className: M.PreferencesHeader,
            children: (0, e.jsx)("div", {
              className: (0, T.A)(
                M.AccountHeader,
                "account_header_line noicon",
              ),
              onClick: n,
              children: i.children,
            }),
          });
        }
        function Fs() {
          const i = (0, k.zy)(),
            t = N(i, $),
            n = (0, x.vo)(),
            a = !n.data.is_not_member_of_any_group();
          return !t || !a || t === n.data.family_groupid()
            ? null
            : (0, e.jsxs)("div", {
                className: M.IncomingInviteGone,
                children: [
                  (0, e.jsx)(W.eTF, { color: M.colorCautionSign }),
                  (0, e.jsx)("span", {
                    children: (0, r.we)(
                      "#FamilyManagement_CannotJoinWhileAlreadyMember",
                    ),
                  }),
                ],
              });
        }
        function Is(i) {
          const { familyGroupID: t, isAdult: n } = i,
            a = (0, x.Hs)(t);
          (0, x.gv)(
            a,
            "#FamilyManagement_ErrorLoadFamily",
            x.eS.k_EFamilyQueryLoadFamily,
          );
          const s = a.data,
            o = s.members().length + s.pending_invites().length,
            l =
              s.free_spots() + s.members().length + s.pending_invites().length;
          return (0, e.jsxs)("div", {
            className: M.FamilyNameAndSlots,
            children: [
              (0, e.jsx)(Ds, { familyGroupID: t, isAdult: n }),
              n &&
                (0, e.jsx)("div", {
                  className: M.FamilySlotsContainer,
                  children: (0, r.we)("#FamilyManagement_MemberCount", o, l),
                }),
            ],
          });
        }
        function cn(i) {
          const t = (0, ne.js)(i),
            n = `${Y.TS.COMMUNITY_BASE_URL}profiles/${i}`;
          return t.isSuccess
            ? (0, e.jsx)(J.Ii, {
                className: M.FamilyHistoryName,
                href: n,
                children: (0, e.jsx)("b", {
                  children: (0, e.jsx)(ce.iV, { steamid: i }),
                }),
              })
            : null;
        }
        function mn(i) {
          const { familyGroupID: t } = i,
            n = Ja(t),
            a = (0, x.ll)(t),
            s = [
              {
                name: (0, r.we)("#FamilyManagement_ManageTab"),
                key: "manage",
                contents: (0, e.jsx)(Ps, {}),
              },
            ];
          return (
            s.push({
              name: (0, r.we)("#FamilyManagement_LibraryTab"),
              key: "library",
              contents: (0, e.jsx)(ca, { familyGroupID: t }),
            }),
            s.push({
              name: (0, r.we)("#FamilyManagement_RequestsTab"),
              key: "requests",
              contents: (0, e.jsx)(os, { rgRequests: n, familyGroupID: t }),
            }),
            a === h.PQ.s &&
              (s.push({
                name: (0, r.we)("#FamilyManagement_PlaytimeTab"),
                key: "playtime",
                contents: (0, e.jsx)(gs, { familyGroupID: t }),
              }),
              s.push({
                name: (0, r.we)("#FamilyManagement_HistoryTab"),
                key: "history",
                contents: (0, e.jsx)(Rn, {
                  familyGroupID: t,
                  nFamilyHistoryRowHeight: M.nFamilyHistoryRowHeight,
                  FamilyHistory: M.FamilyHistory,
                  Entry: M.Entry,
                  Timestamp: M.Timestamp,
                  EntryText: M.EntryText,
                  FnRenderName: cn,
                }),
              })),
            (0, e.jsx)(j.Z, {
              autoFocus: !0,
              focusableIfEmpty: !0,
              children: (0, e.jsx)(re.V, {
                tabs: s,
                classNameCtn: M.FamilyTabs,
                classNameTab: M.FamilyTab,
                preferredFocus: !0,
              }),
            })
          );
        }
        function ws(i) {
          const { familyGroupID: t } = i,
            n = (0, x.ll)(t),
            a = (0, x.Hs)(t);
          (0, x.gv)(
            a,
            "#FamilyManagement_ErrorLoadFamily",
            x.eS.k_EFamilyQueryLoadFamily,
          );
          const s = (0, O.LH)();
          if (a.isLoading)
            return (0, e.jsx)("div", {
              className: M.ThrobberContainer,
              children: (0, e.jsx)(R.t, {}),
            });
          if (a.isError) return null;
          const o = n == h.PQ.s,
            l = a.data.members().findIndex((d) => d.steamid() === s),
            c = a.data.members()[l],
            p = a.data.members().slice();
          return (
            l !== -1 && p.splice(l, 1),
            (0, e.jsxs)(e.Fragment, {
              children: [
                l !== -1 &&
                  (0, e.jsx)(mt, { familyGroupID: t, member: c }, c.steamid()),
                p.map((d) =>
                  (0, e.jsx)(mt, { familyGroupID: t, member: d }, d.steamid()),
                ),
                o &&
                  a.data
                    ?.pending_invites()
                    .map((d) =>
                      (0, e.jsx)(
                        mt,
                        { familyGroupID: t, member: d },
                        d.steamid(),
                      ),
                    ),
                o &&
                  a.data.free_spots() > 0 &&
                  (0, e.jsx)(Le, { familyGroupID: t }),
              ],
            })
          );
        }
        function Ds(i) {
          const { familyGroupID: t, isAdult: n } = i,
            [a, s] = (0, f.useState)(!1),
            o = (0, x.Hs)(t),
            { setErrorMessage: l } = (0, x.RC)();
          (0, x.gv)(
            o,
            "#FamilyManagement_ErrorLoadFamily",
            x.eS.k_EFamilyQueryLoadFamily,
          );
          const [c, p] = (0, f.useState)(o.data?.name()),
            d = (0, x.DD)(t);
          (0, x.gv)(
            d,
            "#FamilyManagement_ErrorModifyFamily",
            x.eS.k_EFamilyQueryModifyFamily,
          );
          const m = (_) => {
              l(null), d.mutate(_), s(!1);
            },
            g = () => {
              s(!0), l(null);
            },
            y = (_) => {
              p(_.target.value), l(null);
            };
          return a && n
            ? (0, e.jsxs)(j.Z, {
                className: M.FamilyNameEditor,
                children: [
                  (0, e.jsx)("span", {
                    className: M.YourFamily,
                    children: (0, r.we)("#FamilyManagement_YourFamily"),
                  }),
                  (0, e.jsx)(J.BA, {
                    className: M.EditNameInput,
                    type: "text",
                    onChange: y,
                    value: c,
                    placeholder: (0, r.we)(
                      "#FamilyManagement_InputNamePlaceholder",
                    ),
                    maxLength: 128,
                  }),
                  (0, e.jsx)(C.$n, {
                    className: M.SaveButton,
                    noFocusRing: !1,
                    onClick: () => m(c),
                    children: (0, r.we)(
                      "#FamilyManagement_EditFamilyNameSaveButton",
                    ),
                  }),
                  (0, e.jsx)(C.$n, {
                    className: M.CancelButton,
                    noFocusRing: !1,
                    onClick: () => {
                      s(!1), l(null);
                    },
                    children: (0, r.we)(
                      "#FamilyManagement_EditFamilyNameCancelButton",
                    ),
                  }),
                ],
              })
            : (0, e.jsxs)("div", {
                className: M.FamilyNameEditor,
                children: [
                  (0, e.jsx)("span", {
                    className: M.YourFamily,
                    children: (0, r.we)("#FamilyManagement_YourFamily"),
                  }),
                  (0, e.jsxs)(j.Z, {
                    className: M.FamilyNameButton,
                    onActivate: n ? g : void 0,
                    children: [
                      (0, e.jsx)("div", {
                        className: M.FamilyName,
                        children: c,
                      }),
                      n &&
                        (0, e.jsx)(j.Z, {
                          className: M.EditButton,
                          children: (0, e.jsx)(W.ffu, {}),
                        }),
                    ],
                  }),
                ],
              });
        }
      },
      23903: (V, de, u) => {
        "use strict";
        u.d(de, {
          BJ: () => r,
          Kt: () => ue,
          OM: () => X,
          Th: () => j,
          WH: () => N,
          Yp: () => ne,
          az: () => R,
          cV: () => T,
          mG: () => te,
          tv: () => $,
          xC: () => xe,
        });
        var e = u(7850),
          h = u(90626),
          f = u(4399),
          O = u.n(f),
          J = u(36707),
          C = u(19298),
          W = u(27126),
          re = u(3166);
        const R = (0, h.forwardRef)(function (H, B) {
            const {
                component: b,
                padding: w,
                paddingX: v,
                paddingY: A,
                paddingRight: E,
                paddingLeft: Z,
                paddingTop: z,
                paddingBottom: pe,
                margin: he,
                marginX: ve,
                marginY: Pe,
                marginLeft: Fe,
                marginTop: Re,
                marginRight: ke,
                marginBottom: Ie,
                display: He,
                flexDirection: be,
                flexWrap: We,
                justifyContent: Ue,
                alignItems: Ve,
                flexGrow: Ke,
                flexShrink: Ze,
                flexBasis: Ee,
                flex: fe,
                className: Se,
                style: we,
                ...Te
              } = H,
              Ge = (0, J.A)(
                j("padding-left", Z || v || w),
                j("padding-top", z || A || w),
                j("padding-right", E || v || w),
                j("padding-bottom", pe || A || w),
                j("margin-left", Fe || ve || he),
                j("margin-top", Re || Pe || he),
                j("margin-right", ke || ve || he),
                j("margin-bottom", Ie || Pe || he),
                Se,
              ),
              Oe = {
                display: He,
                flexDirection: be,
                flexWrap: We,
                justifyContent: Ue,
                alignItems: Ve,
                flexGrow: Ke,
                flexShrink: Ze,
                flexBasis: Ee,
                flex: fe,
                ...we,
              },
              Le = { className: Ge, style: Oe, ref: B, ...Te };
            if (b) {
              const ze = b;
              return (0, e.jsx)(ze, { ...Le });
            }
            return (0, e.jsx)(C.Z, { className: Ge, style: Oe, ref: B, ...Te });
          }),
          T = (0, h.forwardRef)(function (H, B) {
            const {
                children: b,
                style: w,
                spacing: v,
                horizontalSpacing: A,
                verticalSpacing: E,
                itemClassName: Z,
                "flow-children": z = "row",
                ...pe
              } = H,
              he = te(),
              ve = he.spacing[$(A || v || "none")],
              Pe = he.spacing[$(E || v || "none")];
            return (0, e.jsx)(C.Z, {
              "flow-children": z,
              ref: B,
              style: { ...(w || {}), marginTop: L(-Pe) },
              ...pe,
              children: (0, e.jsx)("div", {
                style: { marginLeft: L(-ve) },
                className: f.InlineContainer,
                children: h.Children.map(b, (Fe) =>
                  Fe != null
                    ? (0, e.jsx)(R, {
                        paddingLeft: A || v,
                        paddingTop: E || v,
                        className: Z,
                        children: Fe,
                      })
                    : null,
                ),
              }),
            });
          }),
          r = (0, h.forwardRef)(function (H, B) {
            const {
                spacing: b,
                itemClassName: w,
                children: v,
                className: A,
                ...E
              } = H,
              Z = h.Children.count(v);
            return (0, e.jsx)(C.Z, {
              "flow-children": "column",
              ref: B,
              className: A,
              ...E,
              children: h.Children.map(v, (z, pe) =>
                z != null
                  ? (0, e.jsx)(R, {
                      paddingBottom: pe !== Z - 1 ? b : void 0,
                      className: (0, J.A)(w, f.RemoveOnEmpty),
                      children: z,
                    })
                  : null,
              ),
            });
          }),
          L = (G) => `${G}px`,
          x = {
            spacing: {
              none: 0,
              xxsmall: 4,
              xsmall: 8,
              small: 12,
              medium: 20,
              large: 32,
              xlarge: 48,
              xxlarge: 96,
              xxxlarge: 192,
            },
            breakpoint: { mobile: 0, tablet: 740, desktop: 965 },
          },
          ce = (0, h.createContext)(x),
          te = () => (0, h.useContext)(ce),
          ne = (G) => {
            const { config: H, children: B } = G,
              b = H || x,
              w = (0, h.useMemo)(() => k(b), [b]),
              [v, A] = (0, h.useState)(0);
            return (
              (0, h.useLayoutEffect)(() => {
                A((E) => E + 1);
              }, [w]),
              (0, e.jsxs)(h.Fragment, {
                children: [(0, e.jsx)("style", { children: w }), B],
              })
            );
          };
        function k(G) {
          return [
            "padding",
            "padding-top",
            "padding-bottom",
            "padding-right",
            "padding-left",
            "margin",
            "margin-left",
            "margin-top",
            "margin-right",
            "margin-bottom",
          ]
            .map((B) =>
              Object.keys(G.spacing)
                .map((b) => Y(B, b, G.spacing[b]))
                .join(`
`),
            )
            .join(`
`);
        }
        const U = (G, H) => `${G}-${H}`,
          Y = (G, H, B) => `.${U(G, H)} { ${G}: ${B}px; }`,
          j = (G, H) => {
            const B = $(H);
            return H ? U(G, B) : "";
          };
        function N(G) {
          const H = te(),
            B = $(G);
          return (G && H.spacing[B]) || 0;
        }
        function $(G) {
          const H = xe();
          return Array.isArray(G)
            ? G[
                Math.min(
                  H === "desktop" ? 2 : H === "tablet" ? 1 : 0,
                  G.length - 1,
                )
              ]
            : G;
        }
        function xe() {
          const {
              breakpoint: { tablet: G, desktop: H },
            } = te(),
            B = (0, W.h)(`(min-width: ${G}px)`),
            b = (0, W.h)(`(min-width: ${H}px)`);
          return (0, re.Qn)()
            ? "mobile"
            : b
              ? "desktop"
              : B
                ? "tablet"
                : "mobile";
        }
        function X(G) {
          return G.children(xe());
        }
        function ue(G) {
          return (0, e.jsx)(R, { component: C.Z, ...G });
        }
      },
      29528: (V) => {
        V.exports = {
          AppGridItem: "_3EHR0vjVp91HIDN-WKXpuB",
          NoImage: "_--1j5crfWvm4vTD76qd0G",
          Capsule: "_3dBfx1sV1COVdSsh7RdgMd",
          Loaded: "FmbmC2C9Se8Jqjj-uQjAw",
          Label: "_1tVCPhzTgmUpMpErm-4mHX",
        };
      },
      1242: (V) => {
        V.exports = {
          VirtualizedGridWrapper: "K6224j9GEn0UKuVD4_m0E",
          VirtualizedGridRow: "-padb24TteB2RGJuMHdLn",
        };
      },
      89206: (V) => {
        V.exports = {
          narrowWidth: "500px",
          ExpandRowButton: "r6FhuuUn6dvEsEckchXo5",
          Selected: "wOEL5nQgChVeJX_0DwcXg",
        };
      },
      20803: (V) => {
        V.exports = {
          narrowWidth: "500px",
          RoleIcon: "_1uvKF_UbD6VhnVdaRkXhbu",
          ProfileLink: "_2oSTSohQ1CZIgVn7E6_0Ft",
          MeBadge: "_2W_HQa5Rhf-hHITgV5H0bu",
          PlayerName: "AdQYbMq7HHJ3Jgljib9UX",
          RoleAndIcon: "_3VzCnvA_1SxskuCqmZkkHA",
          RoleName: "_3C9nRrwzQk9qHlJx6NaXDI",
          FamilyErrorDisplay: "egC2pffk2Ff-wvlnEHOqf",
          FamilyMemberStatus: "bMHOg1F_hCL_s5erx4pWC",
          FamilyMemberRow: "_2LyGIHuQ8SFKb5T262YUvg",
          InfoRow: "_3TgL3aJ2hUdLP2stFZ2wZv",
          InvitePending: "_1IeeH6Qo58UdaFJ3hkLMzs",
        };
      },
      56420: (V) => {
        V.exports = {
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
      18828: (V) => {
        V.exports = {
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
      70342: (V) => {
        V.exports = {
          "duration-app-launch": "800ms",
          narrowWidth: "500px",
          PersonaStatusIcon: "KxAI_M9gWx3OnKSshHOs6",
          MobilePhoneIcon: "_1iRFj5lJrMqMnRb3GZYPSw",
          SteamDeckIcon: "_2oLqcfqHHKKAK0WfzjXMg_",
          VRIcon: "_368tz9TSOLGiG2mNMLScMz",
        };
      },
      49118: (V) => {
        V.exports = {
          "duration-app-launch": "800ms",
          narrowWidth: "500px",
          strBarForegroundColor: "#1a9fff",
          strBarBackgroundColor: "hsla(0,0%,100%,.1)",
          ThrobberContainer: "_1dfVPvR3jkg7V5wYeWqGje",
          PlaytimeHistoryBrowser: "_3Q_itK0y9iym9Rf_hRp2U4",
          PlaytimeHistoryDay: "_1tN3Fqg4eB8P5q6VnP8zsU",
          Empty: "_37RhGmL2y7OEHIbTvldv-2",
          PlaytimeOnDay: "_1vwoIEn92Lj8rkCnAsZInK",
          DateColumn: "_2I7p_DHJUzX-5BTwCYcuSY",
          TotalTimePlayed: "_5khZsbwVzrlOZXIrVdCIq",
          PlaytimeHistoryBin: "OX7BJg-jEVTFZj9J7KJxS",
          TimeLabel: "zaoHrBgKPKb_8Q_YRESk5",
          TimeRangeTooltip: "_1kxEvVLftK9NWs_-7SKLLe",
          PlaytimeSessionRows: "_2oOtUbkUZKW62otpARvY3f",
          SessionRow: "AkQ21cho5ASGMCVe165gM",
          GameIcon: "_1AKx5e4_hXQPEx3rkBwKbz",
          SessionRowTimeRange: "_2tyLYvLUbwnf1okXNXBFG4",
          SessionRowGameName: "dWjmpmQNPsKL-1WrIqiMw",
          AppListTooltipApps: "_2om9ImjdyOLWxlqRouLCL",
          AppListTooltip: "_2gqejUUMCHd51lF8qlQ1ns",
          AppImage: "_3Jl4YQadMqVmN9rTlDoxsJ",
          Loaded: "emNZdRnzXbk4gR0vRINf8",
        };
      },
      63043: (V) => {
        V.exports = {
          narrowWidth: "500px",
          nMediumWidth: "620px",
          nNarrowWidth: "500px",
          FamilyGames: "_3Pnf9j-DVi9cm7cJ383yI1",
          Header: "LP9H7bBiPB8N8jFzCQumL",
          Buttons: "_35BlnGUYkm2MwN318q0gZU",
          ButtonWrapper: "_1ve5nrPCrUjlbKp1PXsiJD",
          Button: "_2UOyb8dGbKlL6QDQiqYFoc",
          FamilyGamesSection: "_1o7lKXffOJjZ_CpH1bHfY-",
          Label: "_1M5eDPxFjv1ByJEK38h5Tu",
          Count: "_3x604kYqXRJbqWmeLWAHrj",
          FamilyGameItem: "gDwBcqV9krVb3dtAUyPfF",
          Selectable: "_1tuLMqXoTmpR6w6XzgePfq",
          HoverSource: "_2BUegwuSTdD1TQkecqv9B3",
          LicenseCount: "OchtG0jyJQXcr2o0t34q7",
          FamilyGamesSearchBox: "_2wXQTbH2iavMx1sFDH_Xpn",
          Input: "_29VTx5sjP43UH8k1twOUgE",
          FamilyGamesControls: "_1uN1cZ9U62K-VgLto02fC3",
          FamilyGamesSort: "_24xN9g6I0FudAHqb3lnrNP",
          FamilyGamesSortSelector: "_259TK-AiNNlYVUpyzutBh7",
          Selected: "_1dj3rXk2ck61UrJGt3pP9e",
          DirectionIndicator: "_3HYMkq8Ske2dJk0k51ve3J",
          AdditionalHoverCtn: "_3-q8xJGfslyHFJUlzGes_H",
          Loading: "_15y-D2NYrFwOAZ-AfJKy6Q",
          Error: "_3fKMV_g7GIfskW_oGQqbaD",
          ExcludedCode: "_3vYQgrrL-TpIRWQXAb6Ip3",
        };
      },
      70322: (V) => {
        V.exports = {
          narrowWidth: "500px",
          IncomingInviteRow: "_1GICwsV-USjHjcokRCO32i",
          InviteRowHeader: "AYHhNB9WZZdRWcPm20I_O",
          Avatar: "_3LPMSQpCd5Dh0Tocxewoz1",
          PersonaName: "_3x3dDlfuVsF9BPonkyl0Gs",
          FamilyName: "boWA49TLaFWuuS_Ky4jMH",
          RoleIcon: "_3BhC4y8ABw34stugO_WlSv",
          RoleBlock: "_1NYqqNQkcNPs6ODhW3Ypqh",
          RoleName: "EVV-aE5THCnYYlB0cbnGO",
          RoleDescriptionShort: "OKxvRrmFkD6Cbv6RU6Y7",
          RoleDescriptionList: "_1X5cbFGqhqwIKqeZJyMvCY",
          LearnMoreLink: "_32K94kiZEjBxfu4vkQbXWU",
          Buttons: "iZCbdcapOSWH8Bs2semvQ",
          AcceptInviteButton: "_34In_8oy6NEHpqq-u5b5h0",
          DeclineInviteButton: "_3CEsyOSHFq2lEntEwtgg1u",
          WallOfText: "_20gCk09IqQIza6FC80pgIq",
          FamilyIncomingInvites: "_3-_pKi5c78GisE2tgnAzly",
          IncomingInvitesHeader: "_3zIHX47b2_-2BEnV4mv6AF",
          IncomingInvitesDescription: "_1j-XQvhcdMiYcBB3tYFDnM",
          DimChildren: "_27iWdfYJ_Jr2hfkHCNphO6",
          IncomingInviteGone: "_2spwHF-2Z9jxpKmreqhL3_",
          ThrobberContainer: "_2gVuBqs4SNVBbo83R8fc23",
          DialogText: "kRsD9njPy9CclBtipmAzj",
          DialogWarning: "_2qS0rCuMQ43B6InDgKODss",
          TwoFactorCodeBox: "_3-gKfctqYjcg0lvG4G_N3V",
          DialogButtons: "U6nihCNIspsVrDb7fjYhK",
        };
      },
      80329: (V) => {
        V.exports = {
          narrowWidth: "500px",
          "duration-app-launch": "800ms",
          InviteButtonCtn: "O_QQdR2Hi2oq9k3mKRAQl",
          InviteButton: "_2hzB3GB7oJwh8smVP_Jjsq",
          SelectAccountContainer: "_3VYLj7Kf9u3FCG4cI1gnM7",
          SelectRoleContainer: "_1JFlDaoGEUJH6J-nks7h-3",
          CloseButton: "_3GXpDskii1UGmRC-JIajGR",
          Text: "_2HfX7xCmrFI48UShMW9H7k",
          Header: "_1YrjrkSMcrtL9YsMwaq-ky",
          MethodButtons: "_2MucXf7fH6QXYLpMhmrT8S",
          Invite: "Be14tb8AvIFhQgzHQ2Gw7",
          PlayerName: "_5DVuU_EZQ7FWM_Gs2mObd",
          InviteRoles: "_1jIMhV96QtN_-zMiSXwe8U",
          InviteRole: "_14G2MX9wX6jZwm4vRY9uZ-",
          RoleIcon: "MzHevEd7isedooX-dErvr",
          ProfilePlusRole: "IZ-EC_FBcyFeQM2ZdsOfn",
          RoleName: "_1Ja4dF0wi9qfpZpCIbSb-U",
          ProfileSelector: "_2ABK2CdU7SYpNUQL2ZSddE",
          ProfileChoice: "_2yH7U_to45JvL82cS0kLO_",
          InviteFamilyMember: "_1X3V1K6d_Smanitk41kTtC",
          InviteMemberExpandButton: "_1G0KkUtCmwE6qlPSgXMXIj",
          InviteSection: "_10bmoN5pr9IoO7oOL8fSJ0",
          CloseInviteSection: "_1wpqyKESN_wEn81FPDQ94h",
          GroupSlotCooldownDescription: "T0rj6BcIrWI_LupPa0Krq",
          InviteRoleDescription: "_10qEfACVIhYw-jJZWn4F7G",
          ActiveRole: "_2Z5KMxr37lGmQOHfyK7uXu",
          InviteMethodHeader: "_1PqTYpV-fONsTV2vNQlpPW",
          InviteMethods: "LOswIy4swgXiAV3TibgcO",
          InviteMethodButton: "ikBZQxjgLua65wWg99hcW",
          SelectedFriend: "_2UvjLeiLbL0VdXxQ48cdDm",
          Avatar: "_3s-ErxnICuPZvoWoVW2_Kr",
          RemoveSelection: "UkN21FQZ2LHSovqod6EG7",
          InviteSectionButtons: "_2SSgCAiCn56XkIDHnLrry6",
          CancelButton: "_15nCumxrzH9OacfaL6NRGn",
          SelectFriendModal: "JR6QKI9nDOVWuQsyrwBX",
          InviteFriendSelector: "_21OW_bu1x6BeYWyN4DWfhk",
          InputContainer: "_2SnCfenTfnFsm3g2upYnsl",
          InviteFriendInput: "Rz-seYcbbpBPbzlRxLnso",
          FriendList: "_1G_Dah5zXlksozZnevEGRE",
          FriendSelectorRow: "_2qyKwMuoCMj5o3CO6NW_IO",
          InviteText: "_2H_R6xqjQOWNiRA9qQrhV1",
          ThrobberContainer: "_12k1ELQW10xFpZWSrbnaad",
          FriendSelectorPlaceholder: "_2r46bpLc_qpnLHbnayzmSG",
          Error: "rE1IiJak5Yg84H2WpLPYJ",
        };
      },
      16195: (V) => {
        V.exports = {
          narrowWidth: "500px",
          nFamilyHistoryRowHeight: "30px",
          colorCautionSign: "#ffc82c",
          FamilyManagementHeader: "_34_DnraB5jiO2jDJudbSRN",
          SectionDescription: "_1z6ZWxnxh-VlWIVrqxYoc2",
          AccountHeader: "_2kInmhTbJ8d4tM_ShAhrbw",
          BetaBadge: "_14wvJiLS17Em5n9DNQnI0n",
          PreferencesHeader: "_17sdi2EINuHcyjS90RFKbR",
          FamilyContainer: "_2Fq1ae8YHWoFHZKQRZRJJS",
          FamilySubsection: "_2SKgwaV-ptKsHUdNFpSDOI",
          FamilyTabs: "_1W5zoA-Qt32wmR4cAQXU4P",
          FamilyTab: "_2OMeCsUQ6WiH_72QYhi0I0",
          ThrobberContainer: "_2guJiCyy6CRVp5xixbQ2hs",
          ManageFamily: "_3ayYOCw_ZCm0rF1vDVmwfO",
          FamilyNameAndSlots: "rG9v6g24n_n7jdI7rK5zY",
          FamilyNameEditor: "_3OIDlxU9x7bhWVKKi8wwaH",
          YourFamily: "_2odf9s6doISgveVnyo9_Km",
          FamilyName: "_1X4chbdWPqQwoi2pg7-ebI",
          FamilyNameButton: "_21tUbooOHqAFZy0hfNkcnb",
          EditNameInput: "_2cXhAZJGVLrDD_TVE6hdwq",
          EditButton: "o6KnEAuyHthAy8wUoldpD",
          SaveButton: "_39Ldnfxr7DlhXHZZgBVF4W",
          CancelButton: "_15P7ohP3vq0SmtT5d274y1",
          OnboardSplashContainer: "_3HBvbSDPYGc6K_O32LovGq",
          WallOfText: "xdQkSQDFlnZtUOE3pU4T4",
          SplashCooldown: "spLt3RYXreScsUzo4yQRa",
          UndeleteSplashButton: "_3zUm6DMGoA_yO_qpX09tpM",
          OnboardSplashButtons: "_12md3Zc1vL6ogBUmI1k4Jh",
          OnboardSplashButton: "_2R8KFsdzOosYGjDF6ahgMK",
          OnboardSplashButtonLabel: "_1hqqUWxUB1RwYN5jPH4nkd",
          OnboardSplashButtonBadge: "_1JrBU1ac5Cr9HZ2VrohqRJ",
          FamilySettingsContainer: "hMgR2gFc_fP8LK9e2Vwvq",
          FamilyHistory: "_1t_5IvfyF8aF_tGXLkprpc",
          Entry: "_2xRpeEOhZkwE0Gm2T2nIrX",
          Timestamp: "_3s0E2Z45PIt1bxfcerFwdD",
          EntryText: "_3G8Ee5GQgCv2RgtSRwZSHB",
          IncomingInviteGone: "_2sKy8KMVlq2ZVtrEewVS88",
          CreateFamilyContainer: "_3uS4aqCTqfDSxjRsr1bSA-",
          CreateFamilyForm: "_10fN6VvSPscMJyGHfvePu3",
          JoinFamilyContainer: "JtCI1J9RW7AZBsaJV_p5E",
          FriendCodeContainer: "_2gJ6mJtdYFclXTWyIArECF",
          FriendCodeDisplay: "_1jANphzwbKMsFwdNGymA1",
          FriendCodeCopyButton: "_38Z3nE8M3k-kUjLmv9e4Nu",
          YourFriendCode: "_24iUjHaXmTFLxuFxA6BgTU",
          JoinWarning: "_2nK5N79jK_gB0gCK-fVR5k",
          DialogText: "_2ujgTTfdXjs504qXqBeqdE",
        };
      },
      34286: (V) => {
        V.exports = {
          narrowWidth: "500px",
          FamilyMemberActionsDialog: "_16A2KJKlnPu1uaHtIUYb4F",
          Title: "_1oYQjM_dBVgi6H5huhPIki",
          Separator: "_sqvJIOU6QsulQvWR_x2C",
          ButtonList: "_1Bw-Ncug82ur21Gez97m41",
          FamilyMemberRow: "TTgPUDgZKRwRLHs0om_Jn",
          TopRow: "_20bk3gw7mQb1rm93YkO757",
          ManagementButton: "vDtJqUVxjZtCpsN9muEoX",
          Remove: "UzQPbZ_qXs2s2AEpznJmt",
          DeleteFamily: "_2zCYLK35m4KaTz5TqLnLt3",
          CancelInvite: "-ycr5X2s8Env2lwBiW1Gf",
          RemovalDescription: "_1qHe5zeiRC5b-3dT5JRul4",
        };
      },
      73712: (V) => {
        V.exports = {
          narrowWidth: "500px",
          "duration-app-launch": "800ms",
          nParentalListRowHeight: "40px",
          nAppGridRowHeight: "80px",
          FamilyMemberParentalSettings: "_34chYS1nDoOgMNeYQ2KpPQ",
          DropDownCtn: "_1TwO8yn7ASLQbAlH4osa5H",
          ToggleCtn: "lrSecLbPDqHGdI_gp4x5C",
          ButtonCtn: "_2R0PG64-Sn4ejGmmWHbT2a",
          ReturnToFamily: "_1wt3faSKMXs0FgGEy9uvMF",
          HeaderContainer: "_9EsRZs9cB4vhvCP1Pk_LP",
          ErrorLoading: "_2sfuO43Z8B5siCLX3SXkZ0",
          ConfirmCopyDescription: "RWuJfirXaFrrS6t62DdSl",
          ParentalHeader: "nF5tVZsrtsN88yqlPUc2t",
          Title: "_-8pd6RexnzXuLFobm1T_",
          ParentalGameListHeader: "_2oJ9Bxj4Co72Go5Mq42_8J",
          SearchCtn: "_4O472KmMFFSaSAt4-H58T",
          SelectorCtn: "_257siDy9PId0Lc6msYf5YS",
          Selector: "_2Qb3-2-5hh4aG44Uv8q7tK",
          ParentalGameListOuter: "_3RbIcjnPaWTf4nrib_HPAa",
          Content: "_3FkfJa0i5BibbYgnVlSDrQ",
          Empty: "YKTZD66mFdor5BQFmpdzy",
          ParentalGameSection: "_1ugy_CuPjW56powwI-s6vo",
          SectionHeader: "_5THBvRlV9B8tkkqRPlnFA",
          ParentalGameRow: "e8fXQNSRl1DAFQiRHLK2a",
          Name: "_3L8NHpo6ao9nHVhHW4CJnU",
          Allowed: "_2JNwI2OBNP8taZ7Z34Tulo",
          Icon: "_1HZTsnBVB3gvbCbtf4Rckz",
          RoundCheckbox: "_30BdYsMXN1KhvFxz_fCUrS",
          ParentalFeatures: "Cj34zDTvglJR_N8wUJM2s",
          ParentalPlaytimeInner: "_1XMBkpG_zeKHHXvOLAWyLB",
          ParentalPlaytimeRow: "_2X1GpAOA6OS_jbvfZEbmuy",
          Day: "_2WgTQHCpIlhduEs0_ySokI",
          Windows: "_30S29pj6VtyDi-6ffWPYFG",
          Minutes: "_2q90EvCIjIfUU67XpXQWua",
          ParentalPlaytimeWindowsDialog: "_1EzaeIxWkbPFGeLyQ98IV8",
          ParentalPlaytimeWindows: "_11oc_xrTDyyj9ZIxooI-",
          Grid: "_2arYwLUx8UfUtRcIbFfI-B",
          Input: "y-FOnDjy_tNVLyKOnQeqk",
          ParentalPlaytimeGrid: "l1Uf2XvwgC0si0e3wdxRD",
          Hours: "PY2SzP1sfP0Ll0V2CzE0y",
          HourMarker: "_68UkF7YzyOQrMl7YbBADF",
          HashMark: "_3kxXNsmvYCtmrscTD9Hsh0",
          ParentalPlaytimeWindowSelector: "_1xAKt33YaSfi9TbbgpIb5T",
          Enabled: "qJJzOstLWPhnslUP39MVH",
          Locked: "SBNDnArArnkjfTiY2AeNp",
          ParentalPlaytimeWindowsDialogInner: "w9peVHXHbe1cE2WEnClu3",
          TopRow: "_3jjYvVw0DXqdRBamdby62z",
          DaySelector: "h80CX0NYBW4dEIMSCZBuL",
          Right: "_3r2iJrVwylbyvjWNXwKjhg",
          PlaytimeDescription: "_1--tArXALehoeK4lZrrbA4",
          PlaytimeButtons: "_2zGFisWaeH_w7QiULc8Ag",
          ParentalApp: "wpR_GbuToqyTLpZsMsX3C",
          Children: "_30MsmlQHLV3q3ZvN0CLSfg",
          ViewSelector: "_2YLQ1uAUrlpbuBRLIL6ZnO",
          Selected: "_24VpjKSJH67vIJjrqQGiBn",
          FilterDropdownCtn: "_3EmrLTvrmiuJhDHruK1InH",
          FilterSection: "_1sE_cisDa8U8UTvKWU9Jap",
          FilterRow: "_2I98IhEnkkp7yb-OAZmeFR",
          FilterInfo: "_3AuGnq9lNERQibR7oKltQE",
          FilterToggle: "_3ONn74kY596zlxdOS6aIPC",
          FilterModalButtons: "_39LNRgxdemgkP8aWCKa6Og",
          FilterDropdownButton: "_2xKXgM4yOrIS77zORU2B54",
          ParentalPlaytimeInput: "_1HPx9mmyzR0JvJprjPjyTs",
          Button: "_1snFfw3ZgFquKvyfpzcnfk",
          ButtonWrapper: "_1QZ73K7rBNcO70omwFjI_S",
          Datetime: "e_tMs874rAZ2qdE84Uqfq",
          ContentDescriptorParentalSettings: "_2QmEXbQMp-fr7KyOPphSk4",
          ContentDescriptorParentalSettingsInner: "_39Yb4R8Nr6Q9CJ_CXvsoca",
          ContentDescriptorRow: "DIAUSLue3_bmzvCwbTeIG",
          ContentDescriptorInfo: "_2fn59ljMtlie2g5NSiaVxH",
          ContentDescriptorName: "_2d-NRXGvXbBXFM1u3qO8HK",
          ContentDescriptorDescription: "_1CzqDvlI9BiZ34y76ZxiDP",
          ContentDescriptorToggle: "_2BQ5kejzl2IpMdjad_8Zmd",
          ContentDescriptorExampleApp: "_2Dst3UKiLxmHuFByhiTRzj",
        };
      },
      36175: (V) => {
        V.exports = {
          ThrobberContainer: "_3VjPauBxHErDMNCJVlsgYs",
          FamilyPlaytime: "_1b1sthnt2e6izmHyDW7fam",
        };
      },
      84278: (V) => {
        V.exports = {
          narrowWidth: "500px",
          FamilyRequests: "_1VbIwyMsiBOa0cCBINYbUo",
          FamilyRequestItem: "_2g9TrrGm4UVImhlSMi3Ab4",
          RequestInfo: "_1gqAhfkhB_yUwqiMnvwFtO",
          Feature: "_2zPRlByGX4zzYpKzhpw0dW",
          FeatureList: "ccxwViiWCqhlNZIMKy0Dx",
          CartSummary: "_25GJW5fEysaxc-6VinR_c_",
          SelfRequested: "jxmvXGE_bd9-iXyJ1mBMX",
          TimeResponded: "_2mypsPC8VzdlSBBGYvRd1T",
          StatusCtn: "d6z4dkaukQvCKtJEog0Um",
          Pending: "_38w9gDJ4Dba_cpV4cRzvfe",
          Buttons: "_2T2ciAqKK4YMDU48BrX3Py",
          AvatarAndPersona: "i8dlhqpE5lRgbz0R-UIRK",
          RequestResponse: "_1M_WB3PUCjX1GT-w3A1es5",
          ParentalFeatureRequestItem: "_3aZNXtMcw5GPCPLdGtqnlQ",
          ParentalPlaytimeRequestItem: "_1FS_d-SzgkBxRpPjD8P57h",
          PurchaseRequestItem: "wm_NtPLFihN_RUct8gc9h",
          HoverSource: "_8CRZn6CXwhlJ8ODhQbkp2",
          PackageLinks: "PaWyIiMaw2nN1x3vzbIPW",
          PackageLinkItem: "_24yzKI2Y4Kl01CPt0KotCe",
          PackageLinkItemText: "_1jx9ws3qC6giFHNd9kXKKg",
          PackageShowMore: "_1c6u1vQE3mhKaPmnRAaHuL",
          ApprovePlaytimeDialog: "_1ZDtFPLB0QT6g3T7TTRc2I",
          CurrentHours: "_1NbpMdC9cNXB7ZXejpX0JO",
          Text: "_2bwyfbue6YKiiz5sPD-aUw",
        };
      },
      4399: (V) => {
        V.exports = {
          InlineContainer: "_3nHerBg5ELmarLbN--Gmpp",
          RemoveOnEmpty: "_1Y8hK5A-ASv-Y5SGGb5Em5",
        };
      },
    },
  ]);
})();

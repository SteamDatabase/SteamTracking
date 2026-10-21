/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [6953],
    {
      58679: (g, D, e) => {
        "use strict";
        e.d(D, { ff: () => m, iM: () => B, iV: () => F, pC: () => E });
        var s = e(7850),
          v = e(90626),
          u = e(20803),
          j = e.n(u),
          _ = e(36118),
          h = e(18210),
          C = e(2289),
          f = e(36707),
          I = e(46943),
          R = e(76559),
          O = e(4874),
          U = e(35098),
          T = e(42993),
          M = e(58612),
          p = e(93125),
          x = e(9852),
          S = e(53107),
          K = e(98609),
          P = e(99412);
        function A(r) {
          return (0, s.jsx)(_.d1w, {});
        }
        function N(r) {
          return (0, s.jsx)(_.Bir, {});
        }
        function B(r) {
          return (0, s.jsx)("div", {
            className: (0, f.A)(u.RoleIcon, r.className),
            children: r.role == C.PQ.sf ? (0, s.jsx)(N, {}) : (0, s.jsx)(A, {}),
          });
        }
        function F(r) {
          const { steamid: t } = r,
            a = (0, U.js)(t),
            i = (0, M.M8)(),
            c = (0, x.T)(),
            l = i.data?.get(new R.b(t).GetAccountID()),
            d = c.data?.preferences().parenthesize_nicknames();
          return (0, s.jsxs)(s.Fragment, {
            children: [
              a.data?.m_strPlayerName || "\xA0",
              " ",
              d &&
                l &&
                (0, s.jsxs)("span", {
                  className: u.playerNickname,
                  children: ["(", l, ")"],
                }),
            ],
          });
        }
        function n(r) {
          const { role: t, persona: a, isSelf: i } = r;
          let c = r.size || "Large";
          const l = (0, M.M8)(),
            d = (0, x.T)(),
            L = l.data?.get(a.GetAccountID()),
            W = d.data?.preferences().parenthesize_nicknames();
          return (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsxs)("div", {
                className: u.ProfileLink,
                children: [
                  (0, s.jsx)(I.i8, {
                    className: u.Avatar,
                    persona: a,
                    size: c,
                    statusPosition: "right",
                  }),
                  (0, s.jsx)(p.D, {
                    className: u.PlayerName,
                    bIsSelf: i,
                    bHideStatus: !1,
                    bHidePersona: !1,
                    bParenthesizeNicknames: W,
                    bCompactView: !1,
                    persona: a,
                    strNickname: L,
                    eFriendRelationship: P._UC,
                    bEllipsisName: !0,
                  }),
                ],
              }),
              (0, s.jsxs)("div", {
                className: u.RoleAndIcon,
                children: [
                  (0, s.jsx)(B, { className: u.ProfileRoleIcon, role: t }),
                  (0, s.jsx)("div", {
                    className: u.RoleName,
                    children: (0, h.we)(`#FamilyManagement_Role_${t}`),
                  }),
                ],
              }),
            ],
          });
        }
        function E(r) {
          const t = (0, v.useContext)(O.IN);
          return t.errorMessage
            ? (0, s.jsx)("div", {
                className: u.FamilyErrorDisplay,
                children: t.errorMessage,
              })
            : null;
        }
        function m(r) {
          const { persona: t, role: a, invitePending: i } = r,
            l = (0, T.LH)() == t.GetSteamIDAsString();
          return (0, s.jsxs)("div", {
            className: u.FamilyMemberStatus,
            children: [
              (0, s.jsx)(n, { role: a, persona: t, isSelf: l }),
              i &&
                (0, s.jsx)("div", {
                  className: u.InvitePending,
                  children: (0, h.we)("#FamilyManagement_InvitePending"),
                }),
              l &&
                (0, s.jsx)("span", {
                  className: u.MeBadge,
                  children: (0, h.we)("#FamilyManagement_Me"),
                }),
            ],
          });
        }
        function o(r) {
          const { steamID: t, role: a } = r,
            i = usePlayerSummary(t);
          useQuerySetMessageOnErrorEffect(
            i,
            "#FamilyManagement_ErrorLoadFamilyGeneric",
          );
          const c = useCallback(
            (l) => {
              let d = `${Config.COMMUNITY_BASE_URL}profiles/${t}`;
              OpenLinkInNewWindow(l, d);
            },
            [t],
          );
          return i.isSuccess
            ? jsx(Panel, {
                className: classnames(styles.FamilyMemberRow, styles.InfoRow),
                onActivate: c,
                children: jsx(m, { persona: i.data, role: a }),
              })
            : null;
        }
      },
      54407: (g, D, e) => {
        "use strict";
        e.d(D, { B3: () => B, KM: () => x, KT: () => N });
        var s = e(41735),
          v = e.n(s),
          u = e(58632),
          j = e.n(u),
          _ = e(90626),
          h = e(80902),
          C = e(75233),
          f = e(72604),
          I = e(76559),
          R = e(34592),
          O = e(3166),
          U = e(35038),
          T = e(27386),
          M = e(68312);
        const p = "nicknames";
        function x(n) {
          const E = (0, M.KV)(),
            { data: m, isLoading: o } = (0, h.I)({
              queryKey: [p],
              queryFn: async () => {
                const r = new Map();
                if (O.iA.logged_in) {
                  const t = U.w.Init(T.w_T),
                    i = (await T.xtC.GetNicknameList(E, t)).Body().toObject();
                  i?.nicknames &&
                    i.nicknames.length > 0 &&
                    i.nicknames.forEach((c) => {
                      c.accountid &&
                        c.nickname &&
                        r.set(c.accountid, c.nickname);
                    });
                }
                return r;
              },
            });
          return m ? m.get(n) : null;
        }
        async function S(n) {
          if (!n || n.length == 0) return [];
          const E =
            (0, O.yK)() == "community"
              ? O.TS.COMMUNITY_BASE_URL
              : O.TS.STORE_BASE_URL;
          if (n.length == 1) {
            const m = { accountid: n[0], origin: self.origin },
              o = await v().get(`${E}actions/ajaxgetavatarpersona`, {
                params: m,
              });
            if (
              !o ||
              o.status != 200 ||
              o.data?.success != f.R ||
              !o.data?.userinfo
            )
              throw `Load single avatar/persona failed ${((0, R.H))(o).strErrorMsg}`;
            return [o.data.userinfo];
          } else {
            const m = { accountids: n.join(","), origin: self.origin },
              o = await v().get(`${E}actions/ajaxgetmultiavatarpersona`, {
                params: m,
              });
            if (
              !o ||
              o.status != 200 ||
              o.data?.success != f.R ||
              !o.data?.userinfos
            )
              throw `Load single avatar/persona failed ${((0, R.H))(o).strErrorMsg}`;
            const r = new Map();
            return (
              o.data.userinfos.forEach((t) =>
                r.set(new I.b(t.steamid).GetAccountID(), t),
              ),
              n.map((t) => r.get(t))
            );
          }
        }
        const K = new (j())((n) => S(n), { cache: !1 }),
          P = "avatarandpersonas";
        function A(n) {
          return [P, n];
        }
        function N(n) {
          const { data: E, isLoading: m } = (0, h.I)({
            queryKey: A(n),
            queryFn: () => K.load(n),
          });
          return [E, m];
        }
        function B(n) {
          const E = (0, C.jE)(),
            { data: m, isLoading: o } = (0, h.I)({
              queryKey: [P, n],
              queryFn: async () => {
                const t = await K.loadMany(n);
                return (
                  t.forEach((a) => {
                    if (a instanceof Error) return;
                    const i = [P, new I.b(a.steamid).GetAccountID()];
                    E.setQueryData(i, a);
                  }),
                  t
                );
              },
              enabled: n?.length > 0,
            }),
            r = (0, _.useMemo)(() => {
              const t = new Array();
              return (
                m?.forEach((a) => {
                  a instanceof Error || t.push(a);
                }),
                t
              );
            }, [m]);
          return o ? null : r;
        }
        function F(n) {
          return ReactQueryClient.getQueryData([P, n]);
        }
      },
      9852: (g, D, e) => {
        "use strict";
        e.d(D, { T: () => C });
        var s = e(72604),
          v = e(35038),
          u = e(27386),
          j = e(80902),
          _ = e(68312);
        function h(f) {
          return {
            queryKey: ["communitypreferences"],
            queryFn: async () => {
              const I = v.w.Init(u.tzK),
                R = await u.xtC.GetCommunityPreferences(f, I);
              if (R.GetEResult() != s.R)
                throw new Error(
                  `Error from GetCommunityPreferences: ${R.GetEResult()} ${R.GetErrorMessage()}`,
                );
              return R.Body();
            },
            staleTime: 300 * 1e3,
          };
        }
        function C() {
          const f = (0, _.KV)();
          return (0, j.I)(h(f));
        }
      },
      6953: (g, D, e) => {
        "use strict";
        e.r(D),
          e.d(D, { PurchaseRequestSimpleInfoPage: () => o, default: () => N });
        var s = e(7850),
          v = e(9843),
          u = e(83665),
          j = e(23366),
          _ = e(90626),
          h = e(75233),
          C = e(42993),
          f = e(4874),
          I = e(58679),
          R = e(76559),
          O = e(54407),
          U = e(16412),
          T = e(85599),
          M = e(18210),
          p = e(98609),
          x = e(66372);
        function S(t) {
          const { familyGroupID: a } = t,
            i = (0, f.Hs)(a),
            l = (0, f.BO)(a).data?.requests()?.length;
          if (!l) return null;
          const d = (0, M.Yp)("#PurchaseRequestBanner_PendingRequest", l);
          return (0, s.jsx)("div", {
            className: x.PurchaseRequestBanner,
            children: (0, M.PP)(
              "#PurchaseRequestBanner_YouHavePendingRequestsForFamilyName",
              (0, s.jsx)("a", {
                href:
                  p.TS.STORE_BASE_URL + "account/familymanagement?tab=requests",
                children: d,
              }),
              (0, s.jsx)("span", { children: i.data?.name() }),
            ),
          });
        }
        var K = e(91721),
          P = e.n(K),
          A = e(49311);
        function N(t) {
          const { familyGroupID: a, requestID: i } = t,
            [c, l] = _.useState(),
            d = (0, f.Qn)(a, i),
            L = (0, A.useInitCartLocalization)(),
            W = (0, C.LH)(),
            G = (0, h.jE)(),
            y = d.data;
          return (
            (0, _.useEffect)(() => {
              if (y) {
                const H = {
                    type: "request",
                    gid: y.gidshoppingcart,
                    requestID: y.request_id,
                  },
                  q = (0, j.Vh)();
                q?.requestcartgid === H.gid &&
                  q.requestcart &&
                  (0, u.LN)(G, H, (0, v.qS)(q.requestcart)),
                  l(H);
              }
            }, [y, G]),
            d.isError
              ? (0, s.jsx)(B, { familyGroupID: a })
              : d.isLoading || !L || (y && !c)
                ? (0, s.jsx)(F, {})
                : y
                  ? y.is_completed
                    ? (0, s.jsx)(E, { familyGroupID: a })
                    : y.requester_steamid === W
                      ? (0, s.jsx)(m, { familyGroupID: a })
                      : (0, s.jsx)(r, { request: y, cartID: c })
                  : (0, s.jsx)(n, { familyGroupID: a })
          );
        }
        function B(t) {
          const { familyGroupID: a } = t;
          return (0, s.jsx)(o, {
            familyGroupID: a,
            headerLocToken: "#PurchaseRequest_RequestErrorHeader",
          });
        }
        function F() {
          return (0, s.jsx)("div", {
            className: P().PurchaseRequestInfoPage,
            children: (0, s.jsx)(T.t, { size: "medium", msDelayAppear: 300 }),
          });
        }
        function n(t) {
          const { familyGroupID: a } = t;
          return (0, s.jsx)(o, {
            familyGroupID: a,
            headerLocToken: "#PurchaseRequest_RequestNotFoundHeader",
          });
        }
        function E(t) {
          const { familyGroupID: a } = t;
          return (0, s.jsx)(o, {
            familyGroupID: a,
            headerLocToken: "#PurchaseRequest_RequestCompletedHeader",
          });
        }
        function m(t) {
          const { familyGroupID: a } = t;
          return (0, s.jsx)(o, {
            familyGroupID: a,
            headerLocToken: "#PurchaseRequest_RequestPendingHeader",
            infoLocToken: "#PurchaseRequest_RequestPendingInfo",
          });
        }
        function o(t) {
          const { familyGroupID: a, headerLocToken: i, infoLocToken: c } = t,
            [l, d] = _.useState(null),
            L = () => {
              window.location.assign(p.TS.STORE_BASE_URL);
            };
          return (0, s.jsx)("div", {
            className: P().PurchaseRequestInfoPage,
            children: (0, s.jsxs)(f.IN.Provider, {
              value: { errorMessage: l, setErrorMessage: d },
              children: [
                (0, s.jsx)("div", {
                  className: P().Header,
                  children: (0, M.we)(i),
                }),
                (0, s.jsx)(I.pC, {}),
                (0, s.jsx)(S, { familyGroupID: a }),
                !!c &&
                  (0, s.jsx)("div", {
                    className: P().Info,
                    children: (0, M.we)(c),
                  }),
                (0, s.jsx)("div", {
                  className: P().ButtonContainer,
                  children: (0, s.jsx)(U.jn, {
                    className: P().PrimaryButton,
                    onClick: L,
                    children: (0, M.we)("#PurchaseRequested_ReturnToStore"),
                  }),
                }),
              ],
            }),
          });
        }
        function r(t) {
          const { request: a, cartID: i } = t,
            c = new R.b(a.requester_steamid).GetAccountID(),
            [l] = (0, O.KT)(c),
            [d, L] = _.useState({ accountid_giftee: c }),
            W = _.useRef(() => {}).current,
            G = (0, M.we)("#Cart_PurchaseRequestTitle", l?.persona_name);
          return (0, s.jsx)(A.BaseCartPage, {
            cartID: i,
            step: "gifts",
            onStepChange: W,
            title: G,
            cartWideGiftInfo: d,
            onCartWideGiftInfoChange: L,
          });
        }
      },
      20803: (g) => {
        g.exports = {
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
      66372: (g) => {
        g.exports = {
          strMaxCartPartResponsiveWidth: "840px",
          CartCard: "_1xIt8XUBQEbK-xSRQhbtW0",
          PurchaseRequestBanner: "_-0ewDwG8C2PYKGJDqSP40",
        };
      },
      91721: (g) => {
        g.exports = {
          PurchaseRequestInfoPage: "_2vUK2Ij_I2rOkqw9wZ2Diy",
          Header: "kw7cBqn_8NJ4l9R4nkZXE",
          ButtonContainer: "_2TQ_WuHwPbieu3aZfxn2TN",
          PrimaryButton: "_2-7r0qbPMo9ML9sGFiKwq6",
        };
      },
    },
  ]);
})();

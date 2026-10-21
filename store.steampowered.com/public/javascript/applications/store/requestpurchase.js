/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [58987, 6953],
    {
      58679: (D, h, e) => {
        "use strict";
        e.d(h, { ff: () => m, iM: () => B, iV: () => F, pC: () => _ });
        var s = e(7850),
          y = e(90626),
          u = e(20803),
          v = e.n(u),
          f = e(36118),
          R = e(18210),
          L = e(2289),
          P = e(36707),
          O = e(46943),
          M = e(76559),
          C = e(4874),
          U = e(35098),
          j = e(42993),
          g = e(58612),
          p = e(93125),
          x = e(9852),
          S = e(53107),
          K = e(98609),
          E = e(99412);
        function A(r) {
          return (0, s.jsx)(f.d1w, {});
        }
        function W(r) {
          return (0, s.jsx)(f.Bir, {});
        }
        function B(r) {
          return (0, s.jsx)("div", {
            className: (0, P.A)(u.RoleIcon, r.className),
            children: r.role == L.PQ.sf ? (0, s.jsx)(W, {}) : (0, s.jsx)(A, {}),
          });
        }
        function F(r) {
          const { steamid: t } = r,
            a = (0, U.js)(t),
            i = (0, g.M8)(),
            c = (0, x.T)(),
            l = i.data?.get(new M.b(t).GetAccountID()),
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
          const l = (0, g.M8)(),
            d = (0, x.T)(),
            T = l.data?.get(a.GetAccountID()),
            N = d.data?.preferences().parenthesize_nicknames();
          return (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsxs)("div", {
                className: u.ProfileLink,
                children: [
                  (0, s.jsx)(O.i8, {
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
                    bParenthesizeNicknames: N,
                    bCompactView: !1,
                    persona: a,
                    strNickname: T,
                    eFriendRelationship: E._UC,
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
                    children: (0, R.we)(`#FamilyManagement_Role_${t}`),
                  }),
                ],
              }),
            ],
          });
        }
        function _(r) {
          const t = (0, y.useContext)(C.IN);
          return t.errorMessage
            ? (0, s.jsx)("div", {
                className: u.FamilyErrorDisplay,
                children: t.errorMessage,
              })
            : null;
        }
        function m(r) {
          const { persona: t, role: a, invitePending: i } = r,
            l = (0, j.LH)() == t.GetSteamIDAsString();
          return (0, s.jsxs)("div", {
            className: u.FamilyMemberStatus,
            children: [
              (0, s.jsx)(n, { role: a, persona: t, isSelf: l }),
              i &&
                (0, s.jsx)("div", {
                  className: u.InvitePending,
                  children: (0, R.we)("#FamilyManagement_InvitePending"),
                }),
              l &&
                (0, s.jsx)("span", {
                  className: u.MeBadge,
                  children: (0, R.we)("#FamilyManagement_Me"),
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
      54407: (D, h, e) => {
        "use strict";
        e.d(h, { B3: () => B, KM: () => x, KT: () => W });
        var s = e(41735),
          y = e.n(s),
          u = e(58632),
          v = e.n(u),
          f = e(90626),
          R = e(80902),
          L = e(75233),
          P = e(72604),
          O = e(76559),
          M = e(34592),
          C = e(3166),
          U = e(35038),
          j = e(27386),
          g = e(68312);
        const p = "nicknames";
        function x(n) {
          const _ = (0, g.KV)(),
            { data: m, isLoading: o } = (0, R.I)({
              queryKey: [p],
              queryFn: async () => {
                const r = new Map();
                if (C.iA.logged_in) {
                  const t = U.w.Init(j.w_T),
                    i = (await j.xtC.GetNicknameList(_, t)).Body().toObject();
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
          const _ =
            (0, C.yK)() == "community"
              ? C.TS.COMMUNITY_BASE_URL
              : C.TS.STORE_BASE_URL;
          if (n.length == 1) {
            const m = { accountid: n[0], origin: self.origin },
              o = await y().get(`${_}actions/ajaxgetavatarpersona`, {
                params: m,
              });
            if (
              !o ||
              o.status != 200 ||
              o.data?.success != P.R ||
              !o.data?.userinfo
            )
              throw `Load single avatar/persona failed ${((0, M.H))(o).strErrorMsg}`;
            return [o.data.userinfo];
          } else {
            const m = { accountids: n.join(","), origin: self.origin },
              o = await y().get(`${_}actions/ajaxgetmultiavatarpersona`, {
                params: m,
              });
            if (
              !o ||
              o.status != 200 ||
              o.data?.success != P.R ||
              !o.data?.userinfos
            )
              throw `Load single avatar/persona failed ${((0, M.H))(o).strErrorMsg}`;
            const r = new Map();
            return (
              o.data.userinfos.forEach((t) =>
                r.set(new O.b(t.steamid).GetAccountID(), t),
              ),
              n.map((t) => r.get(t))
            );
          }
        }
        const K = new (v())((n) => S(n), { cache: !1 }),
          E = "avatarandpersonas";
        function A(n) {
          return [E, n];
        }
        function W(n) {
          const { data: _, isLoading: m } = (0, R.I)({
            queryKey: A(n),
            queryFn: () => K.load(n),
          });
          return [_, m];
        }
        function B(n) {
          const _ = (0, L.jE)(),
            { data: m, isLoading: o } = (0, R.I)({
              queryKey: [E, n],
              queryFn: async () => {
                const t = await K.loadMany(n);
                return (
                  t.forEach((a) => {
                    if (a instanceof Error) return;
                    const i = [E, new O.b(a.steamid).GetAccountID()];
                    _.setQueryData(i, a);
                  }),
                  t
                );
              },
              enabled: n?.length > 0,
            }),
            r = (0, f.useMemo)(() => {
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
          return ReactQueryClient.getQueryData([E, n]);
        }
      },
      9852: (D, h, e) => {
        "use strict";
        e.d(h, { T: () => L });
        var s = e(72604),
          y = e(35038),
          u = e(27386),
          v = e(80902),
          f = e(68312);
        function R(P) {
          return {
            queryKey: ["communitypreferences"],
            queryFn: async () => {
              const O = y.w.Init(u.tzK),
                M = await u.xtC.GetCommunityPreferences(P, O);
              if (M.GetEResult() != s.R)
                throw new Error(
                  `Error from GetCommunityPreferences: ${M.GetEResult()} ${M.GetErrorMessage()}`,
                );
              return M.Body();
            },
            staleTime: 300 * 1e3,
          };
        }
        function L() {
          const P = (0, f.KV)();
          return (0, v.I)(R(P));
        }
      },
      46296: (D, h, e) => {
        "use strict";
        e.r(h), e.d(h, { default: () => u });
        var s = e(7850),
          y = e(6953);
        function u(v) {
          const { familyGroupID: f } = v;
          return (0, s.jsx)(y.PurchaseRequestSimpleInfoPage, {
            familyGroupID: f,
            headerLocToken: "#PurchaseRequested_Header",
            infoLocToken: "#PurchaseRequested_Info",
          });
        }
      },
      6953: (D, h, e) => {
        "use strict";
        e.r(h),
          e.d(h, { PurchaseRequestSimpleInfoPage: () => o, default: () => W });
        var s = e(7850),
          y = e(9843),
          u = e(83665),
          v = e(23366),
          f = e(90626),
          R = e(75233),
          L = e(42993),
          P = e(4874),
          O = e(58679),
          M = e(76559),
          C = e(54407),
          U = e(16412),
          j = e(85599),
          g = e(18210),
          p = e(98609),
          x = e(66372);
        function S(t) {
          const { familyGroupID: a } = t,
            i = (0, P.Hs)(a),
            l = (0, P.BO)(a).data?.requests()?.length;
          if (!l) return null;
          const d = (0, g.Yp)("#PurchaseRequestBanner_PendingRequest", l);
          return (0, s.jsx)("div", {
            className: x.PurchaseRequestBanner,
            children: (0, g.PP)(
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
          E = e.n(K),
          A = e(49311);
        function W(t) {
          const { familyGroupID: a, requestID: i } = t,
            [c, l] = f.useState(),
            d = (0, P.Qn)(a, i),
            T = (0, A.useInitCartLocalization)(),
            N = (0, L.LH)(),
            G = (0, R.jE)(),
            I = d.data;
          return (
            (0, f.useEffect)(() => {
              if (I) {
                const H = {
                    type: "request",
                    gid: I.gidshoppingcart,
                    requestID: I.request_id,
                  },
                  q = (0, v.Vh)();
                q?.requestcartgid === H.gid &&
                  q.requestcart &&
                  (0, u.LN)(G, H, (0, y.qS)(q.requestcart)),
                  l(H);
              }
            }, [I, G]),
            d.isError
              ? (0, s.jsx)(B, { familyGroupID: a })
              : d.isLoading || !T || (I && !c)
                ? (0, s.jsx)(F, {})
                : I
                  ? I.is_completed
                    ? (0, s.jsx)(_, { familyGroupID: a })
                    : I.requester_steamid === N
                      ? (0, s.jsx)(m, { familyGroupID: a })
                      : (0, s.jsx)(r, { request: I, cartID: c })
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
            className: E().PurchaseRequestInfoPage,
            children: (0, s.jsx)(j.t, { size: "medium", msDelayAppear: 300 }),
          });
        }
        function n(t) {
          const { familyGroupID: a } = t;
          return (0, s.jsx)(o, {
            familyGroupID: a,
            headerLocToken: "#PurchaseRequest_RequestNotFoundHeader",
          });
        }
        function _(t) {
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
            [l, d] = f.useState(null),
            T = () => {
              window.location.assign(p.TS.STORE_BASE_URL);
            };
          return (0, s.jsx)("div", {
            className: E().PurchaseRequestInfoPage,
            children: (0, s.jsxs)(P.IN.Provider, {
              value: { errorMessage: l, setErrorMessage: d },
              children: [
                (0, s.jsx)("div", {
                  className: E().Header,
                  children: (0, g.we)(i),
                }),
                (0, s.jsx)(O.pC, {}),
                (0, s.jsx)(S, { familyGroupID: a }),
                !!c &&
                  (0, s.jsx)("div", {
                    className: E().Info,
                    children: (0, g.we)(c),
                  }),
                (0, s.jsx)("div", {
                  className: E().ButtonContainer,
                  children: (0, s.jsx)(U.jn, {
                    className: E().PrimaryButton,
                    onClick: T,
                    children: (0, g.we)("#PurchaseRequested_ReturnToStore"),
                  }),
                }),
              ],
            }),
          });
        }
        function r(t) {
          const { request: a, cartID: i } = t,
            c = new M.b(a.requester_steamid).GetAccountID(),
            [l] = (0, C.KT)(c),
            [d, T] = f.useState({ accountid_giftee: c }),
            N = f.useRef(() => {}).current,
            G = (0, g.we)("#Cart_PurchaseRequestTitle", l?.persona_name);
          return (0, s.jsx)(A.BaseCartPage, {
            cartID: i,
            step: "gifts",
            onStepChange: N,
            title: G,
            cartWideGiftInfo: d,
            onCartWideGiftInfoChange: T,
          });
        }
      },
      20803: (D) => {
        D.exports = {
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
      66372: (D) => {
        D.exports = {
          strMaxCartPartResponsiveWidth: "840px",
          CartCard: "_1xIt8XUBQEbK-xSRQhbtW0",
          PurchaseRequestBanner: "_-0ewDwG8C2PYKGJDqSP40",
        };
      },
      91721: (D) => {
        D.exports = {
          PurchaseRequestInfoPage: "_2vUK2Ij_I2rOkqw9wZ2Diy",
          Header: "kw7cBqn_8NJ4l9R4nkZXE",
          ButtonContainer: "_2TQ_WuHwPbieu3aZfxn2TN",
          PrimaryButton: "_2-7r0qbPMo9ML9sGFiKwq6",
        };
      },
    },
  ]);
})();

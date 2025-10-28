/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [3687],
  {
    56330: (e) => {
      e.exports = {
        ErrorStyles: "_2Sg7W8jsvFcXVuQ7fbhSLJ",
        ErrorStylesWithIcon: "Lc2PK-Vkkvr2TUS0TfCqq",
        ErrorIconLayout: "_42__6kBR5lkICeFfkFnwz",
        ErrorStylesBackground: "_3fVv6M5HyJXcQ6kNF1SvoH",
        ErrorFloatBelow: "_2aKylEXoZKcXuXfFcmcuQc",
        WarningStyles: "_3gxgE6PMPecWZDBSlGjMX_",
        WarningStylesWithIcon: "_1S_uSkD_E5ayHa48JzzE0E",
        WarningIconLayout: "_2jM80ZtA-oI5okavBZZqnF",
        WarningStylesBackground: "UYrHsewdjj7dSkpWGgikw",
        Stuck: "_2b5wWgFg1yvry3TDzRUfFt",
        WarningFloatBelow: "_3e0cNuLANduciMmeZz1dnk",
        InfoStyles: "_2lreMbIjEILzP1Eomy1QZM",
        InfoStylesWithIcon: "_1_-PibdcIVQzDZEP0_PeLV",
        InfoIconLayout: "_3kyPzolDIjhIh7zW0wA6fy",
        InfoStylesBackground: "_3gNTI5UYknHdJwDfou9Iih",
        Padding: "_36hmaGtzxNb1Pql2UhfM5Z",
        NotTooWideModal: "UfQcb76CCbHawnpQ9tbu3",
        ImageManageDialog: "Pl7AIUjh5siFakQJbPFO9",
        SuccessErrorDialog: "_1wBO1L1tT0f1wtl3CpBWbn",
      };
    },
    93474: (e) => {
      e.exports = {
        EntryList: "_2XXQSmtLL-udq2lLiHeB6Q",
        Entry: "_1Cd1TJ4SgK5DkDNbI-USUL",
        Label: "dI3ijAItl10LuKeR9XCdK",
        VisibilityState: "_2oDgGL0H43MaV3D4fTBH4t",
        SelectedSVG: "_3Niy5UbG2M3zTi6wUY2jda",
        HeaderRow: "_2PLSeE9RayjVbZKYqcszIq",
        ActionsRow: "_27NYV-vucABpZz6K_oGGgu",
        ManageButton: "_2F5-HSU7JNjiVuDm_h_I4D",
        SVGIcon: "_3jIkQOyf1K28G5lxJiiDkV",
      };
    },
    71298: (e, t, n) => {
      "use strict";
      n.d(t, { Hh: () => s, vs: () => i });
      var r = n(90626),
        o = n(51706),
        a = n(56330),
        l = n(61859),
        c = n(22797);
      function i(e) {
        const [t, n] = (0, r.useState)(() => Boolean(e)),
          [o, a] = (0, r.useState)(!1),
          [l, c] = (0, r.useState)(!1),
          [i, s] = (0, r.useState)(null),
          [E, m] = (0, r.useState)(null),
          [u, _] = (0, r.useState)(null),
          [S, d] = (0, r.useState)(null),
          [g, v] = (0, r.useState)(null);
        return {
          bLoading: t,
          bError: o,
          bSuccess: l,
          strError: i,
          strSuccess: E,
          elSuccess: S,
          elError: u,
          strThrobber: g,
          fnSetLoading: n,
          fnSetError: a,
          fnSetSuccess: c,
          fnSetStrError: s,
          fnSetStrSuccess: m,
          fnSetElSuccess: d,
          fnSetElError: _,
          fnSetThrobber: v,
        };
      }
      function s(e) {
        const {
            strDialogTitle: t,
            state: n,
            closeModal: i,
            strThrobber: s,
          } = e,
          {
            bLoading: E,
            bError: m,
            bSuccess: u,
            strError: _,
            strSuccess: S,
            elSuccess: d,
            elError: g,
            strThrobber: v,
          } = n;
        return m || _ || g
          ? r.createElement(
              o.o0,
              {
                strTitle: t,
                bAlertDialog: !0,
                closeModal: i,
                className: a.SucessErrorDialog,
              },
              Boolean(_) &&
                r.createElement(
                  "div",
                  { className: a.ErrorStylesWithIcon },
                  _ || (0, l.we)("#Error_ErrorCommunicatingWithNetwork"),
                ),
              Boolean(g) && g,
            )
          : u || S || d
            ? r.createElement(
                o.o0,
                {
                  strTitle: t,
                  strDescription: S || (0, l.we)("#EventDisplay_Share_Success"),
                  bAlertDialog: !0,
                  closeModal: i,
                  className: a.SucessErrorDialog,
                },
                r.createElement(r.Fragment, null, Boolean(d) && d),
              )
            : r.createElement(
                o.o0,
                {
                  strTitle: t,
                  className: a.SucessErrorDialog,
                  bProgressDialog: !0,
                  closeModal: () => {},
                },
                r.createElement(c.t, {
                  string: s || v || (0, l.we)("#Loading"),
                  size: "medium",
                  position: "center",
                }),
              );
      }
    },
    87731: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => f });
      var r = n(90626),
        o = n(78327),
        a = n(41735),
        l = n.n(a),
        c = n(61859),
        i = n(22837),
        s = n(17720),
        E = n(20194),
        m = n(51614),
        u = n(6379),
        _ = n(84933),
        S = n(22797),
        d = n(93474),
        g = n.n(d),
        v = n(75113),
        D = n(12155),
        w = n(81393),
        k = n(32754),
        C = n(53835),
        I = n(78395),
        b = n(71298),
        L = n(21869),
        p = n(8092);
      function f(e) {
        const { clanAccountID: t, page_config: n } = e,
          a = (0, _.YR)(() => new s.b(t, o.TS.EUNIVERSE, 7, 0)),
          {
            bIsFetching: i,
            rgEventModels: m,
            fnRefetch: d,
          } = (function (e) {
            const {
              data: t,
              isFetching: n,
              refetch: r,
            } = (0, E.I)({
              queryKey: [
                "DraftAndHiddenPartnerEvents",
                e.ConvertTo64BitString(),
              ],
              queryFn: async () => {
                const t =
                    o.TS.STORE_BASE_URL +
                    "/curator/" +
                    e.GetAccountID() +
                    "/admin/ajaxgetcreatorhomeevents",
                  n = { l: o.TS.LANGUAGE },
                  r = await l()
                    .get(t, { params: n })
                    .catch(() => {}),
                  a = new Array();
                a.push(
                  ...r.data.creatorhome_event_gids.map((t) =>
                    u.MX.LoadHiddenPartnerEvent(e, t),
                  ),
                );
                return await Promise.all(a);
              },
            });
            return { bIsFetching: n, rgEventModels: t, fnRefetch: r };
          })(a),
          v = `${o.TS.COMMUNITY_BASE_URL}gid/${a.ConvertTo64BitString()}/partnerevents/create?type=creatorhome`,
          { creatorHome: D, isFetching: w, refetch: I } = (0, p.FV)(t),
          b = D?.GetLinkedEventGID(),
          L = b && m?.some((e) => b == e.GID),
          f = i || w,
          h = () => {
            d(), I();
          };
        return r.createElement(
          r.Fragment,
          null,
          r.createElement(
            "h4",
            null,
            (0, c.we)("#CreatorHome_EventLink_Title"),
          ),
          r.createElement("p", null, (0, c.we)("#CreatorHome_EventLink_Desc")),
          !L &&
            r.createElement(
              "p",
              null,
              (0, c.we)("#CreatorHome_EventLink_BasicActive"),
            ),
          L &&
            r.createElement(
              "p",
              null,
              (0, c.we)("#CreatorHome_EventLink_AdvancedActive"),
            ),
          r.createElement(
            k.he,
            { toolTipContent: (0, c.we)("#CreatorHome_EventLink_Create_ttip") },
            r.createElement(
              C.$n,
              { onClick: () => window.open(v, "_blank", "noopener") },
              (0, c.we)("#CreatorHome_EventLink_Create"),
            ),
          ),
          r.createElement("br", null),
          r.createElement(
            "div",
            { className: g().EntryList },
            f && r.createElement(S.t, null),
            !f &&
              m?.map((e) =>
                r.createElement(y, {
                  key: e.GID,
                  creatorHome: D,
                  clanSteamID: a,
                  eventModel: e,
                  refetch: h,
                }),
              ),
          ),
        );
      }
      function y(e) {
        const { clanSteamID: t, creatorHome: n, eventModel: a, refetch: s } = e,
          [E, u] = r.useState(!1),
          _ = (0, m.n)({
            mutationFn: async (e) => {
              const t =
                  o.TS.STORE_BASE_URL +
                  "/curator/" +
                  e.clanSteamID.GetAccountID() +
                  "/admin/ajaxdeletecreatorhomeevent",
                n = new FormData();
              n.append("sessionid", o.TS.SESSIONID), n.append("gid", e.gid);
              const r = await l().post(t, n, { withCredentials: !0 });
              return 1 == r?.data?.success ?? !1;
            },
          }),
          [S, d] = r.useState(!1),
          [w, C] = r.useState(!1),
          I = (0, m.n)({
            mutationFn: async (e) => {
              const t =
                  o.TS.STORE_BASE_URL +
                  "/curator/" +
                  e.clanSteamID.GetAccountID() +
                  "/admin/ajaxselectcreatorhome",
                n = new FormData();
              n.append("sessionid", o.TS.SESSIONID), n.append("gid", e.gid);
              const r = await l().post(t, n, { withCredentials: !0 });
              return 1 == r?.data?.success ?? !1;
            },
          }),
          b = n?.GetLinkedEventGID(),
          L = b && b == a.GID,
          p = !L && a.BIsVisibleEvent();
        return r.createElement(
          r.Fragment,
          null,
          r.createElement(h, {
            active: E,
            mutateAsync: () => _.mutateAsync({ clanSteamID: t, gid: a.GID }),
            onClose: (e) => {
              u(!1), e && s();
            },
            strTitle: (0, c.we)("#Button_Delete"),
            strDescription: (0, c.we)(
              "#CreatorHome_EventLink_Delete_Dialog_Desc",
            ),
            strError: (0, c.we)("#CreatorHome_EventLink_Delete_Dialog_Error"),
          }),
          r.createElement(h, {
            active: S,
            mutateAsync: () => I.mutateAsync({ clanSteamID: t, gid: a.GID }),
            onClose: (e) => {
              d(!1), e && s();
            },
            strTitle: (0, c.we)("#CreatorHome_EventLink_Select"),
            strDescription: (0, c.we)(
              "#CreatorHome_EventLink_Select_Dialog_Desc",
            ),
            strError: (0, c.we)("#CreatorHome_EventLink_Select_Dialog_Error"),
          }),
          r.createElement(h, {
            active: w,
            mutateAsync: () => I.mutateAsync({ clanSteamID: t, gid: "0" }),
            onClose: (e) => {
              C(!1), e && s();
            },
            strTitle: (0, c.we)("#CreatorHome_EventLink_Clear"),
            strDescription: (0, c.we)(
              "#CreatorHome_EventLink_Clear_Dialog_Desc",
            ),
            strError: (0, c.we)("#CreatorHome_EventLink_Clear_Dialog_Error"),
          }),
          r.createElement(
            "div",
            { className: g().Entry },
            r.createElement(
              "div",
              { className: g().HeaderRow },
              r.createElement(
                "span",
                { className: g().Label },
                a.GetNameWithFallback((0, i.sf)(o.TS.LANGUAGE)),
              ),
              !a.BIsVisibleEvent() &&
                r.createElement(
                  k.he,
                  {
                    className: g().VisibilityState,
                    toolTipContent: (0, c.we)(
                      "#CreatorHome_EventLink_Unpublished_ttip",
                    ),
                  },
                  (0, c.we)("#CreatorHome_EventLink_Unpublished"),
                ),
              p &&
                r.createElement(T, {
                  eventModel: a,
                  label: (0, c.we)("#CreatorHome_EventLink_Select"),
                  icon: r.createElement(D.FEq, null),
                  onClick: () => d(!0),
                  tooltip: (0, c.we)("#CreatorHome_EventLink_Select_ttip"),
                }),
              L &&
                r.createElement(T, {
                  eventModel: a,
                  label: (0, c.we)("#CreatorHome_EventLink_Clear"),
                  icon: r.createElement(D.FEq, { filled: !0 }),
                  onClick: () => C(!0),
                  tooltip: (0, c.we)("#CreatorHome_EventLink_Clear_ttip"),
                }),
            ),
            r.createElement(
              "div",
              { className: g().ActionsRow },
              r.createElement(T, {
                eventModel: a,
                label: (0, c.we)("#Button_Edit"),
                icon: r.createElement(D.ffu, null),
                route: v.PH.k_eCommunityEdit,
              }),
              r.createElement(T, {
                eventModel: a,
                label: (0, c.we)("#Button_Preview"),
                icon: r.createElement(D.Exy, null),
                route: v.PH.k_eCommunityPreview,
              }),
              r.createElement(T, {
                eventModel: a,
                label: (0, c.we)("#Button_Delete"),
                icon: r.createElement(D.lMJ, null),
                onClick: () => u(!0),
              }),
            ),
          ),
        );
      }
      function h(e) {
        const {
            active: t,
            mutateAsync: n,
            onClose: o,
            strTitle: a,
            strDescription: l,
            strError: c,
          } = e,
          i = (0, b.vs)();
        if (t)
          return i.bLoading
            ? r.createElement(
                L.E,
                { active: !0 },
                r.createElement(b.Hh, { state: i, strDialogTitle: a }),
              )
            : r.createElement(
                L.E,
                { active: !0 },
                r.createElement(I.o0, {
                  strTitle: a,
                  strDescription: l,
                  onCancel: () => o(!1),
                  bOKDisabled: i.bLoading,
                  onOK: async () => {
                    i.fnSetLoading(!0);
                    try {
                      (await n()) ? o(!0) : i.fnSetElError(c);
                    } catch (e) {
                      i.fnSetElError(c);
                    }
                  },
                }),
              );
      }
      function T(e) {
        const {
          eventModel: t,
          label: n,
          tooltip: o,
          icon: a,
          route: l,
          onClick: c,
        } = e;
        (0, w.wT)(l || c, "Must specify route or onClick");
        const i =
          c ||
          (() => {
            const e = l ? (0, v.yh)(t, null, l, "absolute") : void 0;
            window.open(e, "_blank", "noopener");
          });
        return r.createElement(
          "div",
          { className: g().ManageButton, onClick: i },
          r.createElement("div", { className: g().SVGIcon }, a),
          r.createElement(k.he, { toolTipContent: o }, n),
        );
      }
    },
  },
]);

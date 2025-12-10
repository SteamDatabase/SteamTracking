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
        ListsCtn: "tBftQdkNwMsCS3Jnef1UH",
        EntryList: "_2XXQSmtLL-udq2lLiHeB6Q",
        Entry: "_1Cd1TJ4SgK5DkDNbI-USUL",
        Active: "bYXdHZaVexq93H1xDBGqm",
        Label: "dI3ijAItl10LuKeR9XCdK",
        UnpublishedState: "_1tt9jL7Dj8I6_LezFi2Zgv",
        PublishedAndNotSelectedState: "_2XhRaA3elALg0OQnynUZu4",
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
        a = n(51706),
        o = n(56330),
        l = n(61859),
        c = n(22797);
      function i(e) {
        const [t, n] = (0, r.useState)(() => Boolean(e)),
          [a, o] = (0, r.useState)(!1),
          [l, c] = (0, r.useState)(!1),
          [i, s] = (0, r.useState)(null),
          [E, m] = (0, r.useState)(null),
          [u, _] = (0, r.useState)(null),
          [d, S] = (0, r.useState)(null),
          [v, g] = (0, r.useState)(null);
        return {
          bLoading: t,
          bError: a,
          bSuccess: l,
          strError: i,
          strSuccess: E,
          elSuccess: d,
          elError: u,
          strThrobber: v,
          fnSetLoading: n,
          fnSetError: o,
          fnSetSuccess: c,
          fnSetStrError: s,
          fnSetStrSuccess: m,
          fnSetElSuccess: S,
          fnSetElError: _,
          fnSetThrobber: g,
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
            strSuccess: d,
            elSuccess: S,
            elError: v,
            strThrobber: g,
          } = n;
        return m || _ || v
          ? r.createElement(
              a.o0,
              {
                strTitle: t,
                bAlertDialog: !0,
                closeModal: i,
                className: o.SucessErrorDialog,
              },
              Boolean(_) &&
                r.createElement(
                  "div",
                  { className: o.ErrorStylesWithIcon },
                  _ || (0, l.we)("#Error_ErrorCommunicatingWithNetwork"),
                ),
              Boolean(v) && v,
            )
          : u || d || S
            ? r.createElement(
                a.o0,
                {
                  strTitle: t,
                  strDescription: d || (0, l.we)("#EventDisplay_Share_Success"),
                  bAlertDialog: !0,
                  closeModal: i,
                  className: o.SucessErrorDialog,
                },
                r.createElement(r.Fragment, null, Boolean(S) && S),
              )
            : r.createElement(
                a.o0,
                {
                  strTitle: t,
                  className: o.SucessErrorDialog,
                  bProgressDialog: !0,
                  closeModal: () => {},
                },
                r.createElement(c.t, {
                  string: s || g || (0, l.we)("#Loading"),
                  size: "medium",
                  position: "center",
                }),
              );
      }
    },
    87731: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => y });
      var r = n(90626),
        a = n(78327),
        o = n(41735),
        l = n.n(o),
        c = n(61859),
        i = n(22837),
        s = n(17720),
        E = n(20194),
        m = n(51614),
        u = n(6379),
        _ = n(84933),
        d = n(22797),
        S = n(93474),
        v = n.n(S),
        g = n(75113),
        D = n(12155),
        w = n(81393),
        C = n(32754),
        I = n(53835),
        L = n(78395),
        h = n(71298),
        k = n(21869),
        b = n(8092),
        f = n(52038);
      function y(e) {
        const { clanAccountID: t } = e,
          n = (0, _.YR)(() => new s.b(t, a.TS.EUNIVERSE, 7, 0)),
          {
            bIsFetching: o,
            rgEventModels: i,
            fnRefetch: m,
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
                    a.TS.STORE_BASE_URL +
                    "/curator/" +
                    e.GetAccountID() +
                    "/admin/ajaxgetcreatorhomeevents",
                  n = { l: a.TS.LANGUAGE },
                  r = await l()
                    .get(t, { params: n })
                    .catch(() => {}),
                  o = new Array();
                o.push(
                  ...r.data.creatorhome_event_gids.map((t) =>
                    u.MX.LoadHiddenPartnerEvent(e, t),
                  ),
                );
                return await Promise.all(o);
              },
            });
            return { bIsFetching: n, rgEventModels: t, fnRefetch: r };
          })(n),
          S = `${a.TS.COMMUNITY_BASE_URL}gid/${n.ConvertTo64BitString()}/partnerevents/create?type=creatorhome`,
          { creatorHome: g, isFetching: D, refetch: w } = (0, b.FV)(t),
          L = g?.GetLinkedEventGID(),
          h = L && i?.some((e) => L == e.GID),
          k = o || D,
          f = () => {
            m(), w();
          },
          y = r.useMemo(
            () => [...(i ?? [])].sort((e, t) => t.startTime - e.startTime),
            [i],
          ),
          T = y.filter((e) => L && L == e.GID),
          H = y.filter((e) => !L || L != e.GID);
        return r.createElement(
          r.Fragment,
          null,
          r.createElement(
            "h4",
            null,
            (0, c.we)("#CreatorHome_EventLink_Title"),
          ),
          r.createElement("p", null, (0, c.we)("#CreatorHome_EventLink_Desc")),
          !h &&
            r.createElement(
              "p",
              null,
              (0, c.we)("#CreatorHome_EventLink_BasicActive"),
            ),
          r.createElement(
            C.he,
            {
              toolTipContent: (0, c.we)("#CreatorHome_EventLink_Create_ttip"),
              style: { width: "25%" },
            },
            r.createElement(
              I.jn,
              { onClick: () => window.location.assign(S) },
              (0, c.we)("#CreatorHome_EventLink_Create"),
            ),
          ),
          r.createElement("br", null),
          k && r.createElement(d.t, null),
          !k &&
            r.createElement(
              "div",
              { className: v().ListsCtn },
              T.length > 0 &&
                r.createElement(
                  r.Fragment,
                  null,
                  r.createElement(
                    "h5",
                    null,
                    (0, c.we)("#CreatorHome_EventLink_ActiveListTitle"),
                  ),
                  r.createElement(
                    "div",
                    { className: v().EntryList },
                    T.map((e) =>
                      r.createElement(p, {
                        key: e.GID,
                        creatorHome: g,
                        clanSteamID: n,
                        eventModel: e,
                        refetch: f,
                      }),
                    ),
                  ),
                ),
              H.length > 0 &&
                r.createElement(
                  r.Fragment,
                  null,
                  r.createElement(
                    "h5",
                    null,
                    (0, c.we)("#CreatorHome_EventLink_InactiveListTitle"),
                  ),
                  r.createElement(
                    "div",
                    { className: v().EntryList },
                    H.map((e) =>
                      r.createElement(p, {
                        key: e.GID,
                        creatorHome: g,
                        clanSteamID: n,
                        eventModel: e,
                        refetch: f,
                      }),
                    ),
                  ),
                ),
            ),
        );
      }
      function p(e) {
        const { clanSteamID: t, creatorHome: n, eventModel: o, refetch: s } = e,
          [E, u] = r.useState(!1),
          _ = (0, m.n)({
            mutationFn: async (e) => {
              const t =
                  a.TS.STORE_BASE_URL +
                  "/curator/" +
                  e.clanSteamID.GetAccountID() +
                  "/admin/ajaxdeletecreatorhomeevent",
                n = new FormData();
              n.append("sessionid", a.TS.SESSIONID), n.append("gid", e.gid);
              const r = await l().post(t, n, { withCredentials: !0 });
              return 1 == r?.data?.success;
            },
          }),
          [d, S] = r.useState(!1),
          [w, I] = r.useState(!1),
          L = (0, m.n)({
            mutationFn: async (e) => {
              const t =
                  a.TS.STORE_BASE_URL +
                  "/curator/" +
                  e.clanSteamID.GetAccountID() +
                  "/admin/ajaxselectcreatorhome",
                n = new FormData();
              n.append("sessionid", a.TS.SESSIONID), n.append("gid", e.gid);
              const r = await l().post(t, n, { withCredentials: !0 });
              return 1 == r?.data?.success;
            },
          }),
          h = n?.GetLinkedEventGID(),
          k = h && h == o.GID,
          b = !k && o.BIsVisibleEvent();
        return r.createElement(
          r.Fragment,
          null,
          r.createElement(T, {
            active: E,
            mutateAsync: () => _.mutateAsync({ clanSteamID: t, gid: o.GID }),
            onClose: (e) => {
              u(!1), e && s();
            },
            strTitle: (0, c.we)("#Button_Delete"),
            strDescription: (0, c.we)(
              "#CreatorHome_EventLink_Delete_Dialog_Desc",
            ),
            strError: (0, c.we)("#CreatorHome_EventLink_Delete_Dialog_Error"),
          }),
          r.createElement(T, {
            active: d,
            mutateAsync: () => L.mutateAsync({ clanSteamID: t, gid: o.GID }),
            onClose: (e) => {
              S(!1), e && s();
            },
            strTitle: (0, c.we)("#CreatorHome_EventLink_Select"),
            strDescription: (0, c.we)(
              "#CreatorHome_EventLink_Select_Dialog_Desc",
            ),
            strError: (0, c.we)("#CreatorHome_EventLink_Select_Dialog_Error"),
          }),
          r.createElement(T, {
            active: w,
            mutateAsync: () => L.mutateAsync({ clanSteamID: t, gid: "0" }),
            onClose: (e) => {
              I(!1), e && s();
            },
            strTitle: (0, c.we)("#CreatorHome_EventLink_Clear"),
            strDescription: (0, c.we)(
              "#CreatorHome_EventLink_Clear_Dialog_Desc",
            ),
            strError: (0, c.we)("#CreatorHome_EventLink_Clear_Dialog_Error"),
          }),
          r.createElement(
            "div",
            { className: (0, f.A)(v().Entry, k && v().Active) },
            r.createElement(
              "div",
              { className: v().HeaderRow },
              r.createElement(
                "span",
                { className: v().Label },
                o.GetNameWithFallback((0, i.sf)(a.TS.LANGUAGE)),
              ),
              !o.BIsVisibleEvent() &&
                r.createElement(
                  C.he,
                  {
                    className: v().UnpublishedState,
                    toolTipContent: (0, c.we)(
                      "#CreatorHome_EventLink_Unpublished_ttip",
                    ),
                  },
                  (0, c.we)("#CreatorHome_EventLink_Unpublished"),
                ),
              o.BIsVisibleEvent() &&
                !k &&
                r.createElement(
                  C.he,
                  {
                    className: v().PublishedAndNotSelectedState,
                    toolTipContent: (0, c.we)(
                      "#CreatorHome_EventLink_PublishedAndNotSelected_ttip",
                    ),
                  },
                  (0, c.we)("#CreatorHome_EventLink_PublishedAndNotSelected"),
                ),
              b &&
                r.createElement(H, {
                  eventModel: o,
                  label: (0, c.we)("#CreatorHome_EventLink_Select"),
                  icon: r.createElement(D.FEq, null),
                  onClick: () => S(!0),
                  tooltip: (0, c.we)("#CreatorHome_EventLink_Select_ttip"),
                }),
              k &&
                r.createElement(H, {
                  eventModel: o,
                  label: (0, c.we)("#CreatorHome_EventLink_Clear"),
                  icon: r.createElement(D.FEq, { filled: !0 }),
                  onClick: () => I(!0),
                  tooltip: (0, c.we)("#CreatorHome_EventLink_Clear_ttip"),
                }),
            ),
            r.createElement(
              "div",
              { className: v().ActionsRow },
              r.createElement(H, {
                eventModel: o,
                label: (0, c.we)("#Button_Edit"),
                icon: r.createElement(D.ffu, null),
                route: g.PH.k_eCommunityEdit,
              }),
              r.createElement(H, {
                eventModel: o,
                label: (0, c.we)("#Button_Preview"),
                icon: r.createElement(D.Exy, null),
                route: g.PH.k_eCommunityPreviewSale,
              }),
              r.createElement(H, {
                eventModel: o,
                label: (0, c.we)("#Button_Delete"),
                icon: r.createElement(D.lMJ, null),
                onClick: () => u(!0),
              }),
            ),
          ),
        );
      }
      function T(e) {
        const {
            active: t,
            mutateAsync: n,
            onClose: a,
            strTitle: o,
            strDescription: l,
            strError: c,
          } = e,
          i = (0, h.vs)();
        if (t)
          return i.bLoading
            ? r.createElement(
                k.E,
                { active: !0 },
                r.createElement(h.Hh, { state: i, strDialogTitle: o }),
              )
            : r.createElement(
                k.E,
                { active: !0 },
                r.createElement(L.o0, {
                  strTitle: o,
                  strDescription: l,
                  onCancel: () => a(!1),
                  bOKDisabled: i.bLoading,
                  onOK: async () => {
                    i.fnSetLoading(!0);
                    try {
                      (await n()) ? a(!0) : i.fnSetElError(c);
                    } catch (e) {
                      i.fnSetElError(c);
                    }
                  },
                }),
              );
      }
      function H(e) {
        const {
          eventModel: t,
          label: n,
          tooltip: a,
          icon: o,
          route: l,
          onClick: c,
        } = e;
        (0, w.wT)(l || c, "Must specify route or onClick");
        const i =
          c ||
          (() => {
            const e = l ? (0, g.yh)(t, null, l, "absolute") : void 0;
            window.location.assign(e);
          });
        return r.createElement(
          C.Gq,
          { toolTipContent: a },
          r.createElement(
            "div",
            { className: v().ManageButton, onClick: i },
            r.createElement("div", { className: v().SVGIcon }, o),
            n,
          ),
        );
      }
    },
  },
]);

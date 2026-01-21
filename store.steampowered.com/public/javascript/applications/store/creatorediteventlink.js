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
        ManageButton: "_2F5-HSU7JNjiVuDm_h_I4D",
        MustPublish: "oUfRC_JxvbarFSmiUwBCn",
        ActionsRow: "_27NYV-vucABpZz6K_oGGgu",
        SVGIcon: "_3jIkQOyf1K28G5lxJiiDkV",
      };
    },
    71298: (e, t, n) => {
      "use strict";
      n.d(t, { Hh: () => i, vs: () => s });
      var r = n(90626),
        a = n(51706),
        l = n(56330),
        o = n(61859),
        c = n(22797);
      function s(e) {
        const [t, n] = (0, r.useState)(() => Boolean(e)),
          [a, l] = (0, r.useState)(!1),
          [o, c] = (0, r.useState)(!1),
          [s, i] = (0, r.useState)(null),
          [m, E] = (0, r.useState)(null),
          [u, _] = (0, r.useState)(null),
          [d, S] = (0, r.useState)(null),
          [v, g] = (0, r.useState)(null);
        return {
          bLoading: t,
          bError: a,
          bSuccess: o,
          strError: s,
          strSuccess: m,
          elSuccess: d,
          elError: u,
          strThrobber: v,
          fnSetLoading: n,
          fnSetError: l,
          fnSetSuccess: c,
          fnSetStrError: i,
          fnSetStrSuccess: E,
          fnSetElSuccess: S,
          fnSetElError: _,
          fnSetThrobber: g,
        };
      }
      function i(e) {
        const {
            strDialogTitle: t,
            state: n,
            closeModal: s,
            strThrobber: i,
          } = e,
          {
            bLoading: m,
            bError: E,
            bSuccess: u,
            strError: _,
            strSuccess: d,
            elSuccess: S,
            elError: v,
            strThrobber: g,
          } = n;
        return E || _ || v
          ? r.createElement(
              a.o0,
              {
                strTitle: t,
                bAlertDialog: !0,
                closeModal: s,
                className: l.SucessErrorDialog,
              },
              Boolean(_) &&
                r.createElement(
                  "div",
                  { className: l.ErrorStylesWithIcon },
                  _ || (0, o.we)("#Error_ErrorCommunicatingWithNetwork"),
                ),
              Boolean(v) && v,
            )
          : u || d || S
            ? r.createElement(
                a.o0,
                {
                  strTitle: t,
                  strDescription: d || (0, o.we)("#EventDisplay_Share_Success"),
                  bAlertDialog: !0,
                  closeModal: s,
                  className: l.SucessErrorDialog,
                },
                r.createElement(r.Fragment, null, Boolean(S) && S),
              )
            : r.createElement(
                a.o0,
                {
                  strTitle: t,
                  className: l.SucessErrorDialog,
                  bProgressDialog: !0,
                  closeModal: () => {},
                },
                r.createElement(c.t, {
                  string: i || g || (0, o.we)("#Loading"),
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
        l = n(41735),
        o = n.n(l),
        c = n(61859),
        s = n(22837),
        i = n(17720),
        m = n(20194),
        E = n(51614),
        u = n(6379),
        _ = n(84933),
        d = n(22797),
        S = n(93474),
        v = n.n(S),
        g = n(75113),
        w = n(12155),
        D = n(81393),
        L = n(32754),
        C = n(53835),
        b = n(78395),
        h = n(71298),
        k = n(21869),
        I = n(8092),
        p = n(52038),
        f = n(26408);
      function y(e) {
        const { clanAccountID: t } = e,
          n = (0, _.YR)(() => new i.b(t, a.TS.EUNIVERSE, 7, 0)),
          {
            bIsFetching: l,
            rgEventModels: s,
            fnRefetch: E,
          } = (function (e) {
            const {
              data: t,
              isFetching: n,
              refetch: r,
            } = (0, m.I)({
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
                  r = await o()
                    .get(t, { params: n })
                    .catch(() => {}),
                  l = new Array();
                l.push(
                  ...r.data.creatorhome_event_gids.map((t) =>
                    u.MX.LoadHiddenPartnerEvent(e, t),
                  ),
                );
                return await Promise.all(l);
              },
            });
            return { bIsFetching: n, rgEventModels: t, fnRefetch: r };
          })(n),
          S = `${a.TS.COMMUNITY_BASE_URL}gid/${n.ConvertTo64BitString()}/partnerevents/create?type=creatorhome`,
          { creatorHome: g, isFetching: w, refetch: D } = (0, I.FV)(t),
          b = g?.GetLinkedEventGID(),
          h = b && s?.some((e) => b == e.GID),
          k = l || w,
          p = () => {
            E(), D();
          },
          f = r.useMemo(
            () => [...(s ?? [])].sort((e, t) => t.startTime - e.startTime),
            [s],
          ),
          y = f.filter((e) => b && b == e.GID),
          T = f.filter((e) => !b || b != e.GID);
        return r.createElement(
          r.Fragment,
          null,
          r.createElement(
            L.he,
            {
              toolTipContent: (0, c.we)("#CreatorHome_EventLink_Create_ttip"),
              style: { width: "25%" },
            },
            r.createElement(
              C.jn,
              { onClick: () => window.location.assign(S) },
              (0, c.we)("#CreatorHome_EventLink_Create"),
            ),
          ),
          r.createElement(
            "h4",
            null,
            (0, c.we)("#CreatorHome_EventLink_Title"),
          ),
          r.createElement("p", null, (0, c.we)("#CreatorHome_EventLink_Desc")),
          r.createElement("br", null),
          r.createElement(
            "div",
            { className: v().ListsCtn },
            !h &&
              r.createElement(
                r.Fragment,
                null,
                r.createElement(
                  "h5",
                  null,
                  (0, c.we)("#CreatorHome_EventLink_ActiveListTitle"),
                ),
                r.createElement(
                  "p",
                  null,
                  (0, c.we)("#CreatorHome_EventLink_BasicActive"),
                ),
              ),
            k && r.createElement(d.t, null),
            !k &&
              r.createElement(
                r.Fragment,
                null,
                y.length > 0 &&
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
                      y.map((e) =>
                        r.createElement(H, {
                          key: e.GID,
                          creatorHome: g,
                          clanSteamID: n,
                          eventModel: e,
                          refetch: p,
                        }),
                      ),
                    ),
                  ),
                T.length > 0 &&
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
                      T.map((e) =>
                        r.createElement(H, {
                          key: e.GID,
                          creatorHome: g,
                          clanSteamID: n,
                          eventModel: e,
                          refetch: p,
                        }),
                      ),
                    ),
                  ),
              ),
          ),
        );
      }
      function H(e) {
        const { clanSteamID: t, creatorHome: n, eventModel: l, refetch: i } = e,
          [m, u] = r.useState(!1),
          _ = (0, E.n)({
            mutationFn: async (e) => {
              const t =
                  a.TS.STORE_BASE_URL +
                  "/curator/" +
                  e.clanSteamID.GetAccountID() +
                  "/admin/ajaxdeletecreatorhomeevent",
                n = new FormData();
              n.append("sessionid", a.TS.SESSIONID), n.append("gid", e.gid);
              const r = await o().post(t, n, { withCredentials: !0 });
              return 1 == r?.data?.success;
            },
          }),
          [d, S] = r.useState(!1),
          [D, L] = r.useState(!1),
          C = (0, E.n)({
            mutationFn: async (e) => {
              const t =
                  a.TS.STORE_BASE_URL +
                  "/curator/" +
                  e.clanSteamID.GetAccountID() +
                  "/admin/ajaxselectcreatorhome",
                n = new FormData();
              n.append("sessionid", a.TS.SESSIONID), n.append("gid", e.gid);
              const r = await o().post(t, n, { withCredentials: !0 });
              return 1 == r?.data?.success;
            },
          }),
          b = n?.GetLinkedEventGID(),
          h = b && b == l.GID,
          k = !h && l.BIsVisibleEvent();
        return r.createElement(
          r.Fragment,
          null,
          r.createElement(T, {
            active: m,
            mutateAsync: () => _.mutateAsync({ clanSteamID: t, gid: l.GID }),
            onClose: (e) => {
              u(!1), e && i();
            },
            strTitle: (0, c.we)("#Button_Delete"),
            strDescription: (0, c.we)(
              "#CreatorHome_EventLink_Delete_Dialog_Desc",
            ),
            strError: (0, c.we)("#CreatorHome_EventLink_Delete_Dialog_Error"),
          }),
          r.createElement(T, {
            active: d,
            mutateAsync: () => C.mutateAsync({ clanSteamID: t, gid: l.GID }),
            onClose: (e) => {
              S(!1), e && i();
            },
            strTitle: (0, c.we)("#CreatorHome_EventLink_Select"),
            strDescription: (0, c.we)(
              "#CreatorHome_EventLink_Select_Dialog_Desc",
            ),
            strError: (0, c.we)("#CreatorHome_EventLink_Select_Dialog_Error"),
          }),
          r.createElement(T, {
            active: D,
            mutateAsync: () => C.mutateAsync({ clanSteamID: t, gid: "0" }),
            onClose: (e) => {
              L(!1), e && i();
            },
            strTitle: (0, c.we)("#CreatorHome_EventLink_Clear"),
            strDescription: (0, c.we)(
              "#CreatorHome_EventLink_Clear_Dialog_Desc",
            ),
            strError: (0, c.we)("#CreatorHome_EventLink_Clear_Dialog_Error"),
          }),
          r.createElement(
            "div",
            { className: (0, p.A)(v().Entry, h && v().Active) },
            r.createElement(
              "div",
              { className: v().HeaderRow },
              r.createElement(
                "span",
                { className: v().Label },
                l.GetNameWithFallback((0, s.sf)(a.TS.LANGUAGE)),
              ),
              !l.BIsVisibleEvent() &&
                r.createElement(
                  "span",
                  { className: v().UnpublishedState },
                  r.createElement(
                    "span",
                    null,
                    (0, c.we)("#CreatorHome_EventLink_Unpublished"),
                  ),
                  r.createElement(f.o, {
                    tooltip: (0, c.we)(
                      "#CreatorHome_EventLink_Unpublished_ttip",
                    ),
                    small: !0,
                  }),
                ),
              l.BIsVisibleEvent() &&
                !h &&
                r.createElement(
                  "span",
                  { className: v().PublishedAndNotSelectedState },
                  r.createElement(
                    "span",
                    null,
                    (0, c.we)("#CreatorHome_EventLink_PublishedAndNotSelected"),
                  ),
                  r.createElement(f.o, {
                    tooltip: (0, c.we)(
                      "#CreatorHome_EventLink_PublishedAndNotSelected_ttip",
                    ),
                    small: !0,
                  }),
                ),
              k
                ? r.createElement(A, {
                    eventModel: l,
                    label: (0, c.we)("#CreatorHome_EventLink_Select"),
                    icon: r.createElement(w.FEq, null),
                    onClick: () => S(!0),
                    tooltip: (0, c.we)("#CreatorHome_EventLink_Select_ttip"),
                  })
                : !h &&
                    r.createElement(
                      "div",
                      { className: v().MustPublish },
                      (0, c.we)("#CreatorHome_EventLink_MustPublish"),
                      r.createElement(f.o, {
                        tooltip: (0, c.we)(
                          "#CreatorHome_EventLink_MustPublish_ttip",
                        ),
                        small: !0,
                      }),
                    ),
              h &&
                r.createElement(A, {
                  eventModel: l,
                  label: (0, c.we)("#CreatorHome_EventLink_Clear"),
                  icon: r.createElement(w.FEq, { filled: !0 }),
                  onClick: () => L(!0),
                  tooltip: (0, c.we)("#CreatorHome_EventLink_Clear_ttip"),
                }),
            ),
            r.createElement(
              "div",
              { className: v().ActionsRow },
              r.createElement(A, {
                eventModel: l,
                label: (0, c.we)("#Button_Edit"),
                icon: r.createElement(w.ffu, null),
                route: g.PH.k_eCommunityEdit,
              }),
              r.createElement(A, {
                eventModel: l,
                label: (0, c.we)("#Button_Preview"),
                icon: r.createElement(w.Exy, null),
                route: g.PH.k_eCommunityPreviewSale,
              }),
              r.createElement(A, {
                eventModel: l,
                label: (0, c.we)("#Button_Delete"),
                icon: r.createElement(w.lMJ, null),
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
            strTitle: l,
            strDescription: o,
            strError: c,
          } = e,
          s = (0, h.vs)();
        if (t)
          return s.bLoading
            ? r.createElement(
                k.E,
                { active: !0 },
                r.createElement(h.Hh, { state: s, strDialogTitle: l }),
              )
            : r.createElement(
                k.E,
                { active: !0 },
                r.createElement(b.o0, {
                  strTitle: l,
                  strDescription: o,
                  onCancel: () => a(!1),
                  bOKDisabled: s.bLoading,
                  onOK: async () => {
                    s.fnSetLoading(!0);
                    try {
                      (await n()) ? a(!0) : s.fnSetElError(c);
                    } catch (e) {
                      s.fnSetElError(c);
                    }
                  },
                }),
              );
      }
      function A(e) {
        const {
          eventModel: t,
          label: n,
          tooltip: a,
          icon: l,
          route: o,
          onClick: c,
        } = e;
        (0, D.wT)(o || c, "Must specify route or onClick");
        const s =
          c ||
          (() => {
            const e = o ? (0, g.yh)(t, null, o, "absolute") : void 0;
            window.location.assign(e);
          });
        return r.createElement(
          "div",
          { className: v().ManageButton, onClick: s },
          r.createElement("div", { className: v().SVGIcon }, l),
          n,
          a && r.createElement(f.o, { tooltip: a, small: !0 }),
        );
      }
    },
  },
]);

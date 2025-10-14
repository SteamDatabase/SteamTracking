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
        HeaderRow: "_2PLSeE9RayjVbZKYqcszIq",
        ActionsRow: "_27NYV-vucABpZz6K_oGGgu",
        ManageButton: "_2F5-HSU7JNjiVuDm_h_I4D",
        SVGIcon: "_3jIkQOyf1K28G5lxJiiDkV",
      };
    },
    71298: (e, t, n) => {
      "use strict";
      n.d(t, { Hh: () => i, vs: () => s });
      var r = n(90626),
        o = n(51706),
        a = n(56330),
        l = n(61859),
        c = n(22797);
      function s(e) {
        const [t, n] = (0, r.useState)(() => Boolean(e)),
          [o, a] = (0, r.useState)(!1),
          [l, c] = (0, r.useState)(!1),
          [s, i] = (0, r.useState)(null),
          [E, u] = (0, r.useState)(null),
          [m, S] = (0, r.useState)(null),
          [d, _] = (0, r.useState)(null),
          [g, v] = (0, r.useState)(null);
        return {
          bLoading: t,
          bError: o,
          bSuccess: l,
          strError: s,
          strSuccess: E,
          elSuccess: d,
          elError: m,
          strThrobber: g,
          fnSetLoading: n,
          fnSetError: a,
          fnSetSuccess: c,
          fnSetStrError: i,
          fnSetStrSuccess: u,
          fnSetElSuccess: _,
          fnSetElError: S,
          fnSetThrobber: v,
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
            bLoading: E,
            bError: u,
            bSuccess: m,
            strError: S,
            strSuccess: d,
            elSuccess: _,
            elError: g,
            strThrobber: v,
          } = n;
        return u || S || g
          ? r.createElement(
              o.o0,
              {
                strTitle: t,
                bAlertDialog: !0,
                closeModal: s,
                className: a.SucessErrorDialog,
              },
              Boolean(S) &&
                r.createElement(
                  "div",
                  { className: a.ErrorStylesWithIcon },
                  S || (0, l.we)("#Error_ErrorCommunicatingWithNetwork"),
                ),
              Boolean(g) && g,
            )
          : m || d || _
            ? r.createElement(
                o.o0,
                {
                  strTitle: t,
                  strDescription: d || (0, l.we)("#EventDisplay_Share_Success"),
                  bAlertDialog: !0,
                  closeModal: s,
                  className: a.SucessErrorDialog,
                },
                r.createElement(r.Fragment, null, Boolean(_) && _),
              )
            : r.createElement(
                o.o0,
                {
                  strTitle: t,
                  className: a.SucessErrorDialog,
                  closeModal: () => {},
                },
                r.createElement(c.t, {
                  string: i || v || (0, l.we)("#Loading"),
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
        o = n(78327),
        a = n(41735),
        l = n.n(a),
        c = n(61859),
        s = n(22837),
        i = n(17720),
        E = n(20194),
        u = n(51614),
        m = n(6379),
        S = n(84933),
        d = n(22797),
        _ = n(93474),
        g = n.n(_),
        v = n(75113),
        b = n(12155),
        f = n(81393),
        D = n(32754),
        I = n(53835),
        w = n(78395),
        h = n(71298),
        k = n(21869);
      function y(e) {
        const { clanAccountID: t, page_config: n } = e,
          a = (0, S.YR)(() => new i.b(t, o.TS.EUNIVERSE, 7, 0)),
          {
            bIsFetching: s,
            rgEventModels: u,
            fnRefetch: _,
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
                    m.MX.LoadHiddenPartnerEvent(e, t),
                  ),
                );
                return await Promise.all(a);
              },
            });
            return { bIsFetching: n, rgEventModels: t, fnRefetch: r };
          })(a),
          v = `${o.TS.COMMUNITY_BASE_URL}gid/${a.ConvertTo64BitString()}/partnerevents/create?type=creatorhome`;
        return r.createElement(
          r.Fragment,
          null,
          r.createElement(
            "h4",
            null,
            (0, c.we)("#CreatorHome_EventLink_Title"),
          ),
          r.createElement("p", null, (0, c.we)("#CreatorHome_EventLink_Desc")),
          r.createElement(
            D.he,
            { toolTipContent: (0, c.we)("#CreatorHome_EventLink_Create_ttip") },
            r.createElement(
              I.$n,
              { onClick: () => window.open(v, "_blank", "noopener") },
              (0, c.we)("#CreatorHome_EventLink_Create"),
            ),
          ),
          r.createElement("br", null),
          r.createElement(
            "div",
            { className: g().EntryList },
            s && r.createElement(d.t, null),
            !s &&
              u?.map((e) =>
                r.createElement(C, {
                  key: e.GID,
                  clanSteamID: a,
                  eventModel: e,
                  refetch: _,
                }),
              ),
          ),
        );
      }
      function C(e) {
        const { clanSteamID: t, eventModel: n, refetch: a } = e,
          [l, i] = r.useState(!1),
          E = n.BIsVisibleEvent();
        return r.createElement(
          r.Fragment,
          null,
          r.createElement(
            k.E,
            { active: l },
            r.createElement(p, {
              clanSteamID: t,
              eventModel: n,
              onClose: () => {
                i(!1), a();
              },
            }),
          ),
          r.createElement(
            "div",
            { className: g().Entry },
            r.createElement(
              "div",
              { className: g().HeaderRow },
              r.createElement(
                "span",
                { className: g().Label },
                n.GetNameWithFallback((0, s.sf)(o.TS.LANGUAGE)),
              ),
              !n.BIsVisibleEvent() &&
                r.createElement(
                  D.he,
                  {
                    className: g().VisibilityState,
                    toolTipContent: (0, c.we)(
                      "#CreatorHome_EventLink_Unpublished_ttip",
                    ),
                  },
                  (0, c.we)("#CreatorHome_EventLink_Unpublished"),
                ),
            ),
            r.createElement(
              "div",
              { className: g().ActionsRow },
              r.createElement(L, {
                eventModel: n,
                label: (0, c.we)("#Button_Edit"),
                icon: r.createElement(b.ffu, null),
                route: v.PH.k_eCommunityEdit,
              }),
              r.createElement(L, {
                eventModel: n,
                label: (0, c.we)("#Button_Preview"),
                icon: r.createElement(b.Exy, null),
                route: v.PH.k_eCommunityPreview,
              }),
              r.createElement(L, {
                eventModel: n,
                label: (0, c.we)("#Button_Delete"),
                icon: r.createElement(b.lMJ, null),
                onClick: () => i(!0),
              }),
              E &&
                r.createElement(L, {
                  eventModel: n,
                  label: (0, c.we)("#CreatorHome_EventLink_Choose"),
                  tooltip: (0, c.we)("#CreatorHome_EventLink_Choose_ttip"),
                  icon: r.createElement(b.yUp, { bPinned: !1 }),
                  onClick: () => {},
                }),
              false,
            ),
          ),
        );
      }
      function p(e) {
        const { clanSteamID: t, eventModel: n, onClose: a } = e,
          s = (0, u.n)({
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
          i = (0, h.vs)();
        return i.bLoading
          ? r.createElement(h.Hh, {
              state: i,
              strDialogTitle: (0, c.we)("#Button_Delete"),
              closeModal: a,
            })
          : r.createElement(w.o0, {
              strTitle: (0, c.we)("#Button_Delete"),
              strDescription: (0, c.we)(
                "#CreatorHome_EventLink_Delete_Dialog_Desc",
              ),
              onCancel: a,
              bOKDisabled: i.bLoading,
              onOK: async () => {
                i.fnSetLoading(!0);
                try {
                  const e = await s.mutateAsync({ clanSteamID: t, gid: n.GID });
                  i.fnSetSuccess(e),
                    e ||
                      i.fnSetElError(
                        (0, c.we)("#CreatorHome_EventLink_Delete_Dialog_Error"),
                      );
                } catch (e) {
                  i.fnSetElError(
                    (0, c.we)("#CreatorHome_EventLink_Delete_Dialog_Error"),
                  );
                }
              },
            });
      }
      function L(e) {
        const {
          eventModel: t,
          route: n,
          onClick: o,
          label: a,
          tooltip: l,
          icon: c,
        } = e;
        return (
          (0, f.wT)(n || o, "Must specify route or onClick"),
          r.createElement(
            r.Fragment,
            null,
            n &&
              r.createElement(
                v.tj,
                {
                  className: g().ManageButton,
                  eventModel: t,
                  route: n,
                  onClick: (e) => e.stopPropagation(),
                },
                r.createElement("div", { className: g().SVGIcon }, c),
                r.createElement(D.he, { toolTipContent: l }, a),
              ),
            o &&
              r.createElement(
                "div",
                { className: g().ManageButton, onClick: o },
                r.createElement("div", { className: g().SVGIcon }, c),
                r.createElement(D.he, { toolTipContent: l }, a),
              ),
          )
        );
      }
    },
  },
]);

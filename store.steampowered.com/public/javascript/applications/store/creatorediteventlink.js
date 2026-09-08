/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [73687],
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
    32803: (e, t, n) => {
      "use strict";
      n.d(t, {
        Bw: () => T,
        EX: () => f,
        Hx: () => x,
        JP: () => k,
        LJ: () => D,
        OG: () => U,
        PH: () => r,
        T7: () => y,
        sY: () => A,
        tj: () => H,
        yh: () => j,
      });
      var r,
        i = n(7850),
        s = n(27939),
        a = n(22837),
        o = n(45699),
        c = n(60014),
        l = n(90626),
        u = n(92757),
        d = n(55963),
        m = n(26161),
        _ = n(16180),
        p = n(81393),
        S = n(61336),
        h = n(78327),
        v = n(66418),
        w = n(78686),
        b = n(71420),
        g = n(39777);
      !(function (e) {
        (e.k_eView = "view"),
          (e.k_eViewWebSiteHub = "websitehub"),
          (e.k_eCommunityView = "communityview"),
          (e.k_eCommunityEdit = "edit"),
          (e.k_eCommunityEditBroadcast = "editBroadcast"),
          (e.k_eCommunityAdminPage = "admin"),
          (e.k_eCommunityPublish = "publish"),
          (e.k_eCommunityMigrate = "migrate"),
          (e.k_eCommunityPreview = "preview"),
          (e.k_eCommunityPreviewSale = "previewsale"),
          (e.k_eCommunityAnnouncementHub = "community_announcehub"),
          (e.k_eStoreView = "storeview"),
          (e.k_eStoreNewsHub = "newshub"),
          (e.k_eStoreOwnerPage = "store"),
          (e.k_eStoreSalePage = "sale"),
          (e.k_eStoreUsersNewsHub = "usernewshub");
      })(r || (r = {}));
      const E =
        /(?:steampowered\.com|community\.\S+\.steam\.dev|store\.\S+\.steam\.dev|valve\.org\/store|steam\.dev\/store|\.steamchina\.com|steamcommunity\.com|valve\.org\/community|steam\.dev\/community)\/(\w+)(\/|$)/i;
      function I(e, t) {
        if (!t) return !1;
        const n = (function (e) {
            const t = e.match(E);
            return t?.[1];
          })(window.location.href),
          i = "news" == n,
          s = t.GetEventType() == a.ajI,
          o = (t.appid, !1);
        switch (e) {
          case r.k_eView:
            return i && !0;
          case r.k_eCommunityView:
          case r.k_eCommunityEdit:
          case r.k_eCommunityEditBroadcast:
          case r.k_eCommunityPublish:
          case r.k_eCommunityMigrate:
          case r.k_eCommunityPreview:
          case r.k_eCommunityPreviewSale:
          case r.k_eCommunityAnnouncementHub:
            return o;
          case r.k_eCommunityAdminPage:
            return !s && o;
          case r.k_eViewWebSiteHub:
            return i;
          case r.k_eStoreView:
            return i && !0;
          case r.k_eStoreNewsHub:
          case r.k_eStoreOwnerPage:
          case r.k_eStoreUsersNewsHub:
            return i;
          case r.k_eStoreSalePage:
            return !1;
          default:
            return (0, p.wT)(!1, "Unknown route specified for link: " + e), !1;
        }
      }
      function k(e) {
        const t =
          v.TS.COMMUNITY_BASE_URL +
          "gid/" +
          e.clanSteamID.ConvertTo64BitString() +
          "/announcements/share/" +
          e.AnnouncementGID;
        return {
          strFacebookUrl: t + "?site=facebook&t=" + Math.random(),
          strTwitterUrl: t + "?site=twitter",
          strRedditUrl: t + "?site=reddit",
        };
      }
      function f(e) {
        return L(e, r.k_eStoreSalePage, "absolute");
      }
      function y(e) {
        return L(e, r.k_eStoreView, "absolute");
      }
      function C(e, t, n) {
        if (n)
          return (
            (e ? "/games/" + h.UF.VANITY_ID : "/groups/" + h.UF.VANITY_ID) + "/"
          );
        const r = e ? "ogg/" + e : "gid/" + t.ConvertTo64BitString();
        return v.TS.COMMUNITY_BASE_URL + r + "/";
      }
      function D() {
        return "news";
      }
      function A() {
        return !1;
      }
      function L(e, t, n) {
        const { data: r } = (0, g.J$)(e?.appid ? { appid: e.appid } : void 0);
        if (e) return j(e, r, t, n);
      }
      function j(e, t, n, i) {
        const o = "relative" === i,
          c = o ? "/" : v.TS.STORE_BASE_URL,
          l = C(e.appid, e.clanSteamID, o);
        n === r.k_eView
          ? (n = r.k_eStoreView)
          : n === r.k_eViewWebSiteHub && (n = r.k_eStoreNewsHub);
        const u = e.GID ? e.GID : "",
          d = e.AnnouncementGID ? e.AnnouncementGID : "",
          _ =
            e.BIsOGGEvent() &&
            e.appid &&
            t &&
            e.BHasSaleUpdateLandingPageVanity(),
          S = e.GetEventType() == a.ajI;
        switch (n) {
          case r.k_eCommunityPublish:
            return (
              l +
              (e.bOldAnnouncement
                ? "partnerevents/migrate_announcement/" + d
                : "partnerevents/publish/" + u + "?tab=publishing")
            );
          case r.k_eCommunityEdit:
            return (
              l +
              (e.bOldAnnouncement
                ? "partnerevents/migrate_announcement/" + d
                : "partnerevents/edit/" + u)
            );
          case r.k_eCommunityEditBroadcast:
            return (
              l +
              (e.bOldAnnouncement
                ? "partnerevents/migrate_announcement/" + d
                : "partnerevents/edit/" + u) +
              "?tab=broadcast"
            );
          case r.k_eCommunityMigrate:
            return l + "partnerevents/migrate_announcement/" + d;
          case r.k_eCommunityPreview:
            return S
              ? l + "partnerevents/previewsale/" + u
              : l +
                  (e.bOldAnnouncement
                    ? "partnerevents/preview_old_announcement/" + d
                    : "partnerevents/preview/" + u);
          case r.k_eCommunityPreviewSale:
            return l + "partnerevents/previewsale/" + u;
          case r.k_eCommunityAdminPage:
            return S
              ? `${c}curator/${e.clanSteamID.GetAccountID()}/admin/creatorhome_link`
              : l + "partnerevents";
          case r.k_eCommunityAnnouncementHub:
            return l + "announcements";
          case r.k_eStoreNewsHub:
            return (
              c +
              `news/${e.appid ? `app/${e.appid}` : `group/${e.clanSteamID.GetAccountID()}`}`
            );
          case r.k_eStoreOwnerPage:
            return (
              c +
              (e.appid
                ? "app/" + e.appid
                : "curator/" + e.clanSteamID.GetAccountID())
            );
          case r.k_eStoreSalePage:
            return e.jsondata.bSaleEnabled
              ? e.clanSteamID.GetAccountID() == s.wv
                ? `${c}charts/topnewreleases/${e.jsondata.sale_vanity_id}`
                : e.clanSteamID.GetAccountID() == s.yT
                  ? `${c}charts/bestofyear/${e.jsondata.sale_vanity_id}`
                  : _
                    ? `${(0, b._)(t)}/${e.GetSaleUpdateLandingPageVanity()}`
                    : S
                      ? `${c}curator/${e.clanSteamID.GetAccountID()}`
                      : c +
                        (e.jsondata
                          .sale_vanity_id_valve_approved_for_sale_subpath
                          ? "sale/"
                          : "curator/" +
                            e.clanSteamID.GetAccountID() +
                            "/sale/") +
                        e.jsondata.sale_vanity_id
              : c;
          case r.k_eCommunityView:
            return l + "announcements/detail/" + d;
          case r.k_eStoreView:
            if (e.clanSteamID.GetAccountID() == (0, m.H)())
              return `${v.TS.STORE_BASE_URL}meetsteam/${u}`;
            if (_)
              return `${(0, b._)(t)}/${e.GetSaleUpdateLandingPageVanity()}`;
            if (S) return `${c}curator/${e.clanSteamID.GetAccountID()}`;
            {
              const t = "view";
              return `${c}news/${e.appid ? `app/${e.appid}` : `group/${e.clanSteamID.GetAccountID()}`}/${e.bOldAnnouncement ? `old_view/${d}` : `${t}/${u}`}`;
            }
          case r.k_eStoreUsersNewsHub:
            return `${c}news/`;
          default:
            return (0, p.wT)(!1, "Unknown route specified for link"), "";
        }
      }
      function T(e, t, n) {
        return L(
          e,
          t,
          "forceAbsolute" === n || !I(t, e) ? "absolute" : "relative",
        );
      }
      function U(e) {
        const { eventModel: t, route: n, bPopup: r = !0 } = e,
          s = I(n, t),
          a = L(t, n, s ? "relative" : "absolute");
        return (
          l.useEffect(() => {
            a && (r ? window.open(a) : window.location.assign(a));
          }, [r, a]),
          s && a ? (0, i.jsx)(u.rd, { push: !0, to: a }) : null
        );
      }
      function x(e, t, n) {
        const r = C(e, t, !1);
        return "admin" === n ? r + "partnerevents" : "";
      }
      function H(e) {
        const { eventModel: t, preferredFocus: n } = e,
          { bCanUseLink: s } = l.useContext(_.I),
          a = (0, c.n9)(),
          m = (0, u.W6)(),
          p = s && I(e.route, t),
          h = L(t, e.route, p ? "relative" : "absolute"),
          v = !p && h ? (0, S.NT)(h) : h,
          b = p || !v ? v : (0, d.wJ)(v, a),
          g = L(t, r.k_eViewWebSiteHub, "absolute"),
          E = Boolean(e.route != r.k_eViewWebSiteHub)
            ? w.Z.Localize("#EventBrowse_MoreEventsBtn")
            : "",
          k = l.useCallback(() => {
            g && window.location.assign(g);
          }, [g]);
        return t
          ? p
            ? (0, i.jsx)(o.Ii, {
                style: e.style,
                className: e.className,
                href: m.createHref({ pathname: b }),
                onClick: (t) => {
                  b && (e.onClick?.(t), m.push(b), t.preventDefault());
                },
                onOptionsActionDescription: E,
                onOptionsButton: E ? k : void 0,
                preferredFocus: n,
                children: e.children,
              })
            : (0, i.jsx)(o.Ii, {
                href: b,
                style: e.style,
                className: e.className,
                onClick: e.onClick,
                preferredFocus: n,
                onOptionsActionDescription: E,
                onOptionsButton: E ? k : void 0,
                children: e.children,
              })
          : null;
      }
    },
    45334: (e, t, n) => {
      "use strict";
      n.d(t, { $e: () => r, B7: () => s, Pe: () => a, Pv: () => i });
      const r = 1,
        i = 2,
        s = 4,
        a = 1073741824;
    },
    62349: (e, t, n) => {
      "use strict";
      function r(e) {
        return (
          !!e &&
          Boolean(
            e.related_items &&
              e.related_items.standalone_demo_appid &&
              e.related_items.standalone_demo_appid.length > 0 &&
              e.related_items.standalone_demo_appid[0],
          )
        );
      }
      function i(e) {
        return e && e.related_items?.standalone_demo_appid
          ? e.related_items?.standalone_demo_appid
          : [];
      }
      n.d(t, { J: () => r, S: () => i });
    },
    71420: (e, t, n) => {
      "use strict";
      n.d(t, { _: () => s, l: () => a });
      var r = n(66418),
        i = n(62349);
      function s(e, t = !1) {
        if (e)
          return t && (0, i.J)(e)
            ? `${r.TS.STORE_BASE_URL}app/${((0, i.S))(e)[0]}`
            : `${r.TS.STORE_BASE_URL}${e.store_url_path}`;
      }
      function a() {
        window.location.href = `${r.TS.STORE_BASE_URL}login/?redir=${encodeURIComponent(window.location.href)}`;
      }
    },
    17690: (e, t, n) => {
      "use strict";
      n.d(t, { IU: () => l, by: () => u, sc: () => o });
      var r = n(78327),
        i = n(85044),
        s = n(81393),
        a = n(45334);
      const o = 0,
        c = "061818254b2c99ac49e6626adb128ed1282a392f",
        l = 120;
      class u {
        m_unAppID;
        m_bInitialized = !1;
        m_strName;
        m_strIconURL;
        m_dtUpdatedFromServer;
        m_eAppType;
        constructor(e) {
          this.m_unAppID = e;
        }
        get appid() {
          return this.m_unAppID;
        }
        get is_initialized() {
          return this.m_bInitialized;
        }
        get is_valid() {
          return this.m_bInitialized && !!this.m_strName;
        }
        get name() {
          return this.m_strName;
        }
        get icon_url_no_default() {
          return this.m_strIconURL && this.BuildAppURL(this.m_strIconURL, c);
        }
        get icon_url() {
          return this.BuildAppURL(this.m_strIconURL, c);
        }
        get time_updated_from_server() {
          return this.m_dtUpdatedFromServer;
        }
        get apptype() {
          return this.m_eAppType;
        }
        BIsApplicationOrTool() {
          return this.apptype == a.B7 || this.apptype == a.Pv;
        }
        BuildAppURL(e, t) {
          return e
            ? r.TS.MEDIA_CDN_COMMUNITY_URL +
                "images/apps/" +
                this.appid +
                "/" +
                e +
                ".jpg"
            : (0, i.t)(t);
        }
        DeserializeFromMessage(e) {
          (this.m_bInitialized = !0),
            (this.m_strName = e.name()),
            (this.m_strIconURL = e.icon()),
            (this.m_dtUpdatedFromServer = new Date()),
            (this.m_eAppType = e.app_type());
        }
        DeserializeFromAppOverview(e) {
          e.icon_hash() && e.app_type() != a.Pe
            ? ((this.m_bInitialized = !0),
              (this.m_strName = e.display_name()),
              (this.m_strIconURL = e.icon_hash()),
              (this.m_dtUpdatedFromServer = new Date()),
              (this.m_eAppType = e.app_type()))
            : (this.m_bInitialized = !1);
        }
        DeserializeFromCacheObject(e) {
          try {
            (this.m_strName = e.strName),
              (this.m_strIconURL = e.strIconURL),
              (this.m_dtUpdatedFromServer = new Date(e.strUpdatedFromServer)),
              (this.m_eAppType = e.eAppType),
              (this.m_bInitialized = !0);
          } catch {}
        }
        SerializeToCacheObject() {
          return (
            (0, s.wT)(
              this.m_bInitialized,
              "Attempting to serialize an uninitialized AppInfo object for caching!",
            ),
            this.m_bInitialized
              ? {
                  strName: this.m_strName,
                  strIconURL: this.m_strIconURL,
                  strUpdatedFromServer: this.m_dtUpdatedFromServer.toJSON(),
                  eAppType: this.m_eAppType,
                }
              : null
          );
        }
      }
    },
    85044: (e, t, n) => {
      "use strict";
      n.d(t, { d: () => i, t: () => s });
      var r = n(78327);
      const i = "fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb";
      function s(e, t) {
        let n = ".jpg";
        (e && "0000000000000000000000000000000000000000" !== e) || (e = i),
          44 == e.length && ((n = e.substr(-4)), (e = e.substr(0, 40)));
        let s = r.TS.AVATAR_BASE_URL;
        return (
          s ||
            ((s = r.TS.MEDIA_CDN_COMMUNITY_URL + "images/avatars/"),
            (s += e.substr(0, 2) + "/")),
          (s += e),
          t && "small" != t && (s += "_" + t),
          (s += n),
          s
        );
      }
    },
    71298: (e, t, n) => {
      "use strict";
      n.d(t, { Hh: () => u, vs: () => l });
      var r = n(7850),
        i = n(90626),
        s = n(74568),
        a = n(56330),
        o = n(61859),
        c = n(22797);
      function l(e) {
        const [t, n] = (0, i.useState)(() => Boolean(e)),
          [r, s] = (0, i.useState)(!1),
          [a, o] = (0, i.useState)(!1),
          [c, l] = (0, i.useState)(null),
          [u, d] = (0, i.useState)(null),
          [m, _] = (0, i.useState)(null),
          [p, S] = (0, i.useState)(null),
          [h, v] = (0, i.useState)(null);
        return {
          bLoading: t,
          bError: r,
          bSuccess: a,
          strError: c,
          strSuccess: u,
          elSuccess: p,
          elError: m,
          strThrobber: h,
          fnSetLoading: n,
          fnSetError: s,
          fnSetSuccess: o,
          fnSetStrError: l,
          fnSetStrSuccess: d,
          fnSetElSuccess: S,
          fnSetElError: _,
          fnSetThrobber: v,
        };
      }
      function u(e) {
        const {
            strDialogTitle: t,
            state: n,
            closeModal: i,
            strThrobber: l,
          } = e,
          {
            bLoading: u,
            bError: d,
            bSuccess: m,
            strError: _,
            strSuccess: p,
            elSuccess: S,
            elError: h,
            strThrobber: v,
          } = n;
        return d || _ || h
          ? (0, r.jsxs)(s.o0, {
              strTitle: t,
              bAlertDialog: !0,
              closeModal: i,
              className: a.SuccessErrorDialog,
              children: [
                Boolean(_) &&
                  (0, r.jsx)("div", {
                    className: a.ErrorStylesWithIcon,
                    children:
                      _ || (0, o.we)("#Error_ErrorCommunicatingWithNetwork"),
                  }),
                Boolean(h) && h,
              ],
            })
          : m || p || S
            ? (0, r.jsx)(s.o0, {
                strTitle: t,
                strDescription: p || (0, o.we)("#EventDisplay_Share_Success"),
                bAlertDialog: !0,
                closeModal: i,
                className: a.SuccessErrorDialog,
                children: (0, r.jsx)(r.Fragment, { children: Boolean(S) && S }),
              })
            : (0, r.jsx)(s.o0, {
                strTitle: t,
                className: a.SuccessErrorDialog,
                bProgressDialog: !0,
                closeModal: () => {},
                children: (0, r.jsx)(c.t, {
                  string: l || v || (0, o.we)("#Loading"),
                  size: "medium",
                  position: "center",
                }),
              });
      }
    },
    26161: (e, t, n) => {
      "use strict";
      n.d(t, { H: () => s });
      var r = n(22837),
        i = n(30470);
      const s = () => (i.TS.EUNIVERSE === r.Rv ? 2581 : 45267781);
    },
    4434: (e, t, n) => {
      "use strict";
      n.d(t, { m: () => a });
      var r = n(41735),
        i = n.n(r),
        s = n(90626);
      function a(e) {
        const t = s.useRef(i().CancelToken.source());
        return (
          s.useEffect(() => {
            const n = t.current;
            return () => n.cancel(e ? `${e}: unmounting` : "unmounting");
          }, [e]),
          t.current
        );
      }
    },
    87731: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => j });
      var r = n(7850),
        i = n(90626),
        s = n(78327),
        a = n(41735),
        o = n.n(a),
        c = n(61859),
        l = n(22837),
        u = n(37085),
        d = n(17720),
        m = n(80902),
        _ = n(51614),
        p = n(6379),
        S = n(84933),
        h = n(22797),
        v = n(93474),
        w = n.n(v),
        b = n(32803),
        g = n(12155),
        E = n(81393),
        I = n(32754),
        k = n(56283),
        f = n(78395),
        y = n(71298),
        C = n(21869),
        D = n(67165),
        A = n(52038),
        L = n(26408);
      function j(e) {
        const { clanAccountID: t } = e,
          n = (0, S.YR)(() => new d.b(t, s.TS.EUNIVERSE, l.P3F, 0)),
          {
            bIsFetching: a,
            rgEventModels: u,
            fnRefetch: _,
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
                    s.TS.STORE_BASE_URL +
                    "/curator/" +
                    e.GetAccountID() +
                    "/admin/ajaxgetcreatorhomeevents",
                  n = { l: s.TS.LANGUAGE },
                  r = await o()
                    .get(t, { params: n })
                    .catch(() => {}),
                  i = new Array();
                i.push(
                  ...r.data.creatorhome_event_gids.map((t) =>
                    p.MX.LoadHiddenPartnerEvent(e, t),
                  ),
                );
                return await Promise.all(i);
              },
            });
            return { bIsFetching: n, rgEventModels: t, fnRefetch: r };
          })(n),
          v = `${s.TS.COMMUNITY_BASE_URL}gid/${n.ConvertTo64BitString()}/partnerevents/create?type=creatorhome`,
          { creatorHome: b, isFetching: g, refetch: E } = (0, D.FV)(t),
          f = b?.GetLinkedEventGID(),
          y = f && u?.some((e) => f == e.GID),
          C = a || g,
          A = () => {
            _(), E();
          },
          L = i.useMemo(
            () => [...(u ?? [])].sort((e, t) => t.startTime - e.startTime),
            [u],
          ),
          j = L.filter((e) => f && f == e.GID),
          U = L.filter((e) => !f || f != e.GID);
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(I.he, {
              toolTipContent: (0, c.we)("#CreatorHome_EventLink_Create_ttip"),
              style: { width: "25%" },
              children: (0, r.jsx)(k.jn, {
                onClick: () => window.location.assign(v),
                children: (0, c.we)("#CreatorHome_EventLink_Create"),
              }),
            }),
            (0, r.jsx)("h4", {
              children: (0, c.we)("#CreatorHome_EventLink_Title"),
            }),
            (0, r.jsx)("p", {
              children: (0, c.we)("#CreatorHome_EventLink_Desc"),
            }),
            (0, r.jsx)("br", {}),
            (0, r.jsxs)("div", {
              className: w().ListsCtn,
              children: [
                !y &&
                  (0, r.jsxs)(r.Fragment, {
                    children: [
                      (0, r.jsx)("h5", {
                        children: (0, c.we)(
                          "#CreatorHome_EventLink_ActiveListTitle",
                        ),
                      }),
                      (0, r.jsx)("p", {
                        children: (0, c.we)(
                          "#CreatorHome_EventLink_BasicActive",
                        ),
                      }),
                    ],
                  }),
                C && (0, r.jsx)(h.t, {}),
                !C &&
                  (0, r.jsxs)(r.Fragment, {
                    children: [
                      j.length > 0 &&
                        (0, r.jsxs)(r.Fragment, {
                          children: [
                            (0, r.jsx)("h5", {
                              children: (0, c.we)(
                                "#CreatorHome_EventLink_ActiveListTitle",
                              ),
                            }),
                            (0, r.jsx)("div", {
                              className: w().EntryList,
                              children: j.map((e) =>
                                (0, r.jsx)(
                                  T,
                                  {
                                    creatorHome: b,
                                    clanSteamID: n,
                                    eventModel: e,
                                    refetch: A,
                                  },
                                  e.GID,
                                ),
                              ),
                            }),
                          ],
                        }),
                      U.length > 0 &&
                        (0, r.jsxs)(r.Fragment, {
                          children: [
                            (0, r.jsx)("h5", {
                              children: (0, c.we)(
                                "#CreatorHome_EventLink_InactiveListTitle",
                              ),
                            }),
                            (0, r.jsx)("div", {
                              className: w().EntryList,
                              children: U.map((e) =>
                                (0, r.jsx)(
                                  T,
                                  {
                                    creatorHome: b,
                                    clanSteamID: n,
                                    eventModel: e,
                                    refetch: A,
                                  },
                                  e.GID,
                                ),
                              ),
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
      function T(e) {
        const { clanSteamID: t, creatorHome: n, eventModel: a, refetch: d } = e,
          [m, p] = i.useState(!1),
          S = (0, _.n)({
            mutationFn: async (e) => {
              const t =
                  s.TS.STORE_BASE_URL +
                  "/curator/" +
                  e.clanSteamID.GetAccountID() +
                  "/admin/ajaxdeletecreatorhomeevent",
                n = new FormData();
              n.append("sessionid", (0, s.KC)()), n.append("gid", e.gid);
              const r = await o().post(t, n, { withCredentials: !0 });
              return r?.data?.success == u.R;
            },
          }),
          [h, v] = i.useState(!1),
          [E, I] = i.useState(!1),
          k = (0, _.n)({
            mutationFn: async (e) => {
              const t =
                  s.TS.STORE_BASE_URL +
                  "/curator/" +
                  e.clanSteamID.GetAccountID() +
                  "/admin/ajaxselectcreatorhome",
                n = new FormData();
              n.append("sessionid", (0, s.KC)()), n.append("gid", e.gid);
              const r = await o().post(t, n, { withCredentials: !0 });
              return r?.data?.success == u.R;
            },
          }),
          f = n?.GetLinkedEventGID(),
          y = f && f == a.GID,
          C = !y && a.BIsVisibleEvent(),
          D = `${s.TS.COMMUNITY_BASE_URL}gid/${t.ConvertTo64BitString()}/partnerevents/clone/${a.GID}?redir=${window.location.href}`;
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(U, {
              active: m,
              mutateAsync: () => S.mutateAsync({ clanSteamID: t, gid: a.GID }),
              onClose: (e) => {
                p(!1), e && d();
              },
              strTitle: (0, c.we)("#Button_Delete"),
              strDescription: (0, c.we)(
                "#CreatorHome_EventLink_Delete_Dialog_Desc",
              ),
              strError: (0, c.we)("#CreatorHome_EventLink_Delete_Dialog_Error"),
            }),
            (0, r.jsx)(U, {
              active: h,
              mutateAsync: () => k.mutateAsync({ clanSteamID: t, gid: a.GID }),
              onClose: (e) => {
                v(!1), e && d();
              },
              strTitle: (0, c.we)("#CreatorHome_EventLink_Select"),
              strDescription: (0, c.we)(
                "#CreatorHome_EventLink_Select_Dialog_Desc",
              ),
              strError: (0, c.we)("#CreatorHome_EventLink_Select_Dialog_Error"),
            }),
            (0, r.jsx)(U, {
              active: E,
              mutateAsync: () => k.mutateAsync({ clanSteamID: t, gid: "0" }),
              onClose: (e) => {
                I(!1), e && d();
              },
              strTitle: (0, c.we)("#CreatorHome_EventLink_Clear"),
              strDescription: (0, c.we)(
                "#CreatorHome_EventLink_Clear_Dialog_Desc",
              ),
              strError: (0, c.we)("#CreatorHome_EventLink_Clear_Dialog_Error"),
            }),
            (0, r.jsxs)("div", {
              className: (0, A.A)(w().Entry, y && w().Active),
              children: [
                (0, r.jsxs)("div", {
                  className: w().HeaderRow,
                  children: [
                    (0, r.jsx)("span", {
                      className: w().Label,
                      children: a.GetNameWithFallback(
                        (0, l.sfN)(s.TS.LANGUAGE),
                      ),
                    }),
                    !a.BIsVisibleEvent() &&
                      (0, r.jsxs)("span", {
                        className: w().UnpublishedState,
                        children: [
                          (0, r.jsx)("span", {
                            children: (0, c.we)(
                              "#CreatorHome_EventLink_Unpublished",
                            ),
                          }),
                          (0, r.jsx)(L.o, {
                            tooltip: (0, c.we)(
                              "#CreatorHome_EventLink_Unpublished_ttip",
                            ),
                            small: !0,
                          }),
                        ],
                      }),
                    a.BIsVisibleEvent() &&
                      !y &&
                      (0, r.jsxs)("span", {
                        className: w().PublishedAndNotSelectedState,
                        children: [
                          (0, r.jsx)("span", {
                            children: (0, c.we)(
                              "#CreatorHome_EventLink_PublishedAndNotSelected",
                            ),
                          }),
                          (0, r.jsx)(L.o, {
                            tooltip: (0, c.we)(
                              "#CreatorHome_EventLink_PublishedAndNotSelected_ttip",
                            ),
                            small: !0,
                          }),
                        ],
                      }),
                    C
                      ? (0, r.jsx)(x, {
                          eventModel: a,
                          label: (0, c.we)("#CreatorHome_EventLink_Select"),
                          icon: (0, r.jsx)(g.FEq, {}),
                          onClick: () => v(!0),
                          tooltip: (0, c.we)(
                            "#CreatorHome_EventLink_Select_ttip",
                          ),
                        })
                      : !y &&
                        (0, r.jsxs)("div", {
                          className: w().MustPublish,
                          children: [
                            (0, c.we)("#CreatorHome_EventLink_MustPublish"),
                            (0, r.jsx)(L.o, {
                              tooltip: (0, c.we)(
                                "#CreatorHome_EventLink_MustPublish_ttip",
                              ),
                              small: !0,
                            }),
                          ],
                        }),
                    y &&
                      (0, r.jsx)(x, {
                        eventModel: a,
                        label: (0, c.we)("#CreatorHome_EventLink_Clear"),
                        icon: (0, r.jsx)(g.FEq, { filled: !0 }),
                        onClick: () => I(!0),
                        tooltip: (0, c.we)("#CreatorHome_EventLink_Clear_ttip"),
                      }),
                  ],
                }),
                (0, r.jsxs)("div", {
                  className: w().ActionsRow,
                  children: [
                    (0, r.jsx)(x, {
                      eventModel: a,
                      label: (0, c.we)("#Button_Edit"),
                      icon: (0, r.jsx)(g.ffu, {}),
                      route: b.PH.k_eCommunityEdit,
                    }),
                    (0, r.jsx)(x, {
                      eventModel: a,
                      label: (0, c.we)("#Button_Preview"),
                      icon: (0, r.jsx)(g.Exy, {}),
                      route: b.PH.k_eCommunityPreviewSale,
                    }),
                    (0, r.jsx)(x, {
                      eventModel: a,
                      label: (0, c.we)("#Button_Clone"),
                      icon: (0, r.jsx)(g.rI_, {}),
                      onClick: () => window.location.assign(D),
                    }),
                    !y &&
                      (0, r.jsx)(x, {
                        eventModel: a,
                        label: (0, c.we)("#Button_Delete"),
                        icon: (0, r.jsx)(g.lMJ, {}),
                        onClick: () => p(!0),
                      }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      function U(e) {
        const {
            active: t,
            mutateAsync: n,
            onClose: i,
            strTitle: s,
            strDescription: a,
            strError: o,
          } = e,
          c = (0, y.vs)();
        if (t)
          return c.bLoading
            ? (0, r.jsx)(C.E, {
                active: !0,
                children: (0, r.jsx)(y.Hh, { state: c, strDialogTitle: s }),
              })
            : (0, r.jsx)(C.E, {
                active: !0,
                children: (0, r.jsx)(f.o0, {
                  strTitle: s,
                  strDescription: a,
                  onCancel: () => i(!1),
                  bOKDisabled: c.bLoading,
                  onOK: async () => {
                    c.fnSetLoading(!0);
                    try {
                      (await n()) ? i(!0) : c.fnSetElError(o);
                    } catch (e) {
                      c.fnSetElError(o);
                    }
                  },
                }),
              });
      }
      function x(e) {
        const {
          eventModel: t,
          label: n,
          tooltip: i,
          icon: s,
          route: a,
          onClick: o,
        } = e;
        (0, E.wT)(a || o, "Must specify route or onClick");
        const c =
          o ||
          (() => {
            const e = a ? (0, b.yh)(t, null, a, "absolute") : void 0;
            window.location.assign(e);
          });
        return (0, r.jsxs)("div", {
          className: w().ManageButton,
          onClick: c,
          children: [
            (0, r.jsx)("div", { className: w().SVGIcon, children: s }),
            n,
            i && (0, r.jsx)(L.o, { tooltip: i, small: !0 }),
          ],
        });
      }
    },
  },
]);

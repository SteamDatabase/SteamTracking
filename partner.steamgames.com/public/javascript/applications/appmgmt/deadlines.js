/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [3350],
  {
    54330: (e, t, r) => {
      r.d(t, { u: () => l });
      var n = r(66418),
        s = r(20194),
        a = r(41735),
        o = r.n(a),
        i = r(90626);
      function l(e) {
        const t = (0, s.I)({
          queryKey: ["useMilestoneByAppID", e],
          queryFn: async () => {
            const t = `${n.T.PARTNER_BASE_URL}seasonpass/ajaxgetmilestoneinfo`,
              r = { appid: e },
              s = await o().get(t, { params: r });
            if (1 == s?.data?.success) return s.data.milestones;
            throw new Error("failed to load milestonse for appid " + e);
          },
          enabled: Boolean(e),
        });
        return i.useMemo(() => t?.data, [e, t.isLoading]);
      }
    },
    32179: (e, t, r) => {
      r.d(t, {
        MY: () => c,
        UA: () => p,
        Yd: () => f,
        rN: () => _,
        vh: () => m,
      });
      var n = r(34629),
        s = r(41735),
        a = r.n(s),
        o = r(90626),
        i = r(68797),
        l = r(78327),
        u = r(10333);
      function c() {
        return 2 == l.TS.EUNIVERSE ? 12 : 1;
      }
      class d {
        m_mapOptInToPartners = new Map();
        m_mapPromises = new Map();
        GetPartnerInfo(e) {
          return this.m_mapOptInToPartners.get(e);
        }
        BHasPartnerInfoLoad(e) {
          return this.m_mapOptInToPartners.has(e);
        }
        async FindPartnerByName(e) {
          return (
            this.m_mapPromises.has(e) ||
              this.m_mapPromises.set(e, this.InternalFindPartnerByName(e)),
            this.m_mapPromises.get(e)
          );
        }
        async InternalFindPartnerByName(e) {
          const t = new Array();
          try {
            const r = l.TS.PARTNER_BASE_URL + "pub/ajaxfindpublishers",
              n = {
                sessionid: l.TS.SESSIONID,
                searchtext: e,
                origin: self.origin,
              },
              s = await a().get(r, { params: n });
            200 == s?.status && 1 == s?.data?.success
              ? s.data.publishers.forEach((e) => {
                  const r = {
                    partnerid: e.publisherid,
                    name: e.publishername,
                    partner_url:
                      l.TS.PARTNER_BASE_URL + `pub/publisher/${e.publisherid}/`,
                    contacts: e.contacts,
                  };
                  this.m_mapOptInToPartners.set(e.publisherid, r), t.push(r);
                })
              : console.log(
                  `CPartnerInfoStore.FindPartnerByName failed with status ${s?.status} eresult ${s?.data?.success} and msg ${s?.data?.msg}`,
                );
          } catch (e) {
            const t = (0, i.H)(e);
            console.error(
              "CPartnerInfoStore.FindPartnerByName failed add: " +
                t.strErrorMsg,
              t,
            );
          }
          return t;
        }
        async LoadPartnerInfo(e) {
          if (this.m_mapOptInToPartners.has(e))
            return this.m_mapOptInToPartners.get(e);
          await this.FindPartnerByName("" + e);
          return (
            this.BHasPartnerInfoLoad(e) ||
              this.m_mapOptInToPartners.set(e, null),
            this.m_mapOptInToPartners.get(e)
          );
        }
        async LoadMultiplePartnerInfo(e) {
          if (!e || 0 == e.length) return [];
          const t = e.map((e) => !this.m_mapOptInToPartners.has(e));
          if (t.length > 0) {
            const e = t.map((e) => this.FindPartnerByName("" + e));
            await Promise.all(e);
          }
          return e.map((e) => this.m_mapOptInToPartners.get(e)).filter(Boolean);
        }
        static s_Singleton;
        static Get() {
          return (
            d.s_Singleton ||
              ((d.s_Singleton = new d()),
              ("dev" != l.TS.WEB_UNIVERSE && "beta" != l.TS.WEB_UNIVERSE) ||
                (window.g_PartnerInfoStore = d.s_Singleton)),
            d.s_Singleton
          );
        }
        constructor() {
          let e = JSON.parse(
            JSON.stringify((0, l.Tc)("partner_info", "application_config")),
          );
          this.ValidateStoreDefault(e) &&
            (e.forEach((e) => this.m_mapOptInToPartners.set(e.partnerid, e)),
            "dev" == l.TS.WEB_UNIVERSE &&
              console.log("DEV_DEUBG: CPartnerInfoStore::constructor", e));
        }
        ValidateStoreDefault(e) {
          const t = e;
          return (
            !!(
              t &&
              Array.isArray(t) &&
              t.length > 0 &&
              "object" == typeof t[0]
            ) &&
            "number" == typeof t[0].partnerid &&
            "string" == typeof t[0].name
          );
        }
      }
      function m(e) {
        const [t, r] = (0, o.useState)(!1);
        return (
          (0, o.useEffect)(() => {
            !t &&
              e?.length > 0 &&
              d
                .Get()
                .LoadMultiplePartnerInfo(e)
                .then(() => r(!0));
          }, [e, t]),
          t
        );
      }
      function p(e) {
        const [t, r] = o.useState(() => d.Get().GetPartnerInfo(e));
        return (
          o.useEffect(() => {
            !d.Get().BHasPartnerInfoLoad(e) && e > 0
              ? d
                  .Get()
                  .LoadPartnerInfo(e)
                  .then((e) => r(e))
              : d.Get().BHasPartnerInfoLoad(e) &&
                t?.partnerid != e &&
                r(d.Get().GetPartnerInfo(e));
          }, [e, t]),
          [t]
        );
      }
      function _() {
        return { fnFindPartnerByName: d.Get().FindPartnerByName };
      }
      function f(e) {
        return d.Get().GetPartnerInfo(e);
      }
      (0, n.Cg)([u.o], d.prototype, "FindPartnerByName", null);
    },
    37789: (e, t, r) => {
      r.r(t), r.d(t, { default: () => G });
      var n = r(90626),
        s = r(24484),
        a = r(18573),
        o = r.n(a),
        i = r(52038),
        l = r(95695),
        u = r.n(l),
        c = r(51272),
        d = r(84811),
        m = r(39879),
        p = r(95034),
        _ = r(55263),
        f = r(16021),
        g = r(32179),
        h = r(66418),
        E = r(61859),
        S = r(91675),
        y = r(26408),
        I = r(54330);
      const P = { include_assets: !0, include_release: !0 };
      function C(e) {
        const { rgDeadlines: t } = e,
          [r, s] = (0, p.QD)("query", ""),
          a = (0, n.useMemo)(
            () =>
              Array.from(
                new Set(t.map((e) => e.data.store_item_id).filter(Boolean)),
              ),
            [t],
          ),
          o = (0, n.useMemo)(
            () =>
              Array.from(
                new Set(t.map((e) => e.data.partnerid).filter(Boolean)),
              ),
            [t],
          ),
          i = (0, _.zX)(a, P),
          l = (0, g.vh)(o),
          u = (0, n.useMemo)(() => {
            const e = r.trim().toLocaleLowerCase();
            return t
              .filter(
                (t) =>
                  0 == e.length ||
                  1 == i ||
                  !l ||
                  f.A.Get()
                    .GetApp(t.data.store_item_id)
                    ?.GetName()
                    .toLocaleLowerCase()
                    .includes(e) ||
                  (0, g.Yd)(t.data.partnerid)
                    ?.name.toLocaleLowerCase()
                    .includes(e),
              )
              .sort((e, t) => t.data.due_date - e.data.due_date);
          }, [r, t, i, l]);
        return n.createElement(
          d.tH,
          null,
          n.createElement("h3", null, "Season Passes"),
          n.createElement(m.pd, {
            type: "string",
            value: r,
            onChange: (e) => s(e.currentTarget.value.toLocaleLowerCase()),
            label: "Filter",
            tooltip:
              "Filters the list to be those that contain the letters you typed exactly (case insenstive) on the page id or name",
            placeholder: "type here...",
          }),
          n.createElement(
            "table",
            null,
            n.createElement(
              "thead",
              null,
              n.createElement(
                "tr",
                null,
                n.createElement("th", null, "Deadline ID"),
                n.createElement(
                  "th",
                  null,
                  "Milestone ID ",
                  n.createElement(y.o, {
                    tooltip: "This is only unique within a DLC Season Pass",
                  }),
                ),
                n.createElement("th", null, "Season Pass DLC"),
                n.createElement("th", null, "Partner"),
                n.createElement("th", null, "Season Pass Release Date"),
                n.createElement("th", null, "Deadline Date"),
                n.createElement("th", null, "Milestone Name"),
                n.createElement("th", null, "Ticket?"),
              ),
            ),
            n.createElement(
              "tbody",
              null,
              u.map((e) =>
                n.createElement(w, { key: "" + e.deadlineid, deadline: e }),
              ),
            ),
          ),
        );
      }
      function w(e) {
        const { deadline: t } = e,
          [r] = (0, _.t7)(t.data.store_item_id, P),
          [s] = (0, g.UA)(t.data.partnerid),
          a = (0, I.u)(t.data.store_item_id),
          o = a?.find((e) => e.milestone_id == Number.parseInt(t.data.gid));
        return n.createElement(
          "tr",
          null,
          n.createElement("td", null, t.deadlineid),
          n.createElement("td", null, t.data.gid),
          n.createElement(
            "td",
            null,
            n.createElement(
              "a",
              { href: r?.GetStorePageURL(), target: "_blank" },
              r?.GetName() || "unknown",
            ),
            "(",
            n.createElement(
              "a",
              {
                href: `${h.T.PARTNER_BASE_URL}admin/game/editbyappid/${t.data.store_item_id}`,
                target: "_blank",
              },
              t.data.store_item_id,
              ")",
            ),
          ),
          n.createElement(
            "td",
            null,
            n.createElement(
              "a",
              {
                href: `${h.T}pub/companydetails/${t.data.partnerid}`,
                target: "_blank",
              },
              s?.name || "unknown",
              " (",
              t.data.partnerid,
              ")",
            ),
          ),
          n.createElement(
            "td",
            null,
            (0, E.TW)(r?.GetReleaseDateRTime()),
            n.createElement("span", null, " - "),
            (0, S.KC)(r?.GetReleaseDateRTime(), { bForce24HourClock: !1 }),
          ),
          n.createElement(
            "td",
            null,
            (0, E.TW)(t.data.due_date),
            n.createElement("span", null, " - "),
            (0, S.KC)(t.data.due_date, { bForce24HourClock: !1 }),
          ),
          n.createElement(
            "td",
            null,
            o?.title.find((e) => 0 == e.language)?.localized_string,
          ),
          n.createElement("td", null, "TODO"),
        );
      }
      function G(e) {
        const t = (function () {
          const [e] = (0, n.useState)(
            (0, s.Tc)("deadlines", "application_config"),
          );
          return e;
        })();
        return n.createElement(
          d.tH,
          null,
          n.createElement(
            "div",
            { className: o().DashboardCtn },
            n.createElement(
              "h1",
              null,
              "Missed Deadlines Dashboard",
              n.createElement(
                "button",
                {
                  className: (0, i.A)(u().Button),
                  style: { float: "right", marginRight: "16px" },
                  onClick: (e) =>
                    (0, c.EP)(
                      e,
                      "https://confluence.valve.org/display/~adils/Steam+Season+Passes",
                    ),
                },
                "Help",
              ),
            ),
            n.createElement("hr", null),
            n.createElement(
              "p",
              null,
              "This dashboard surfaces any important deadlines that a partner has missed. Currently, the only ones we are tracking are related to customer commitments with Season Pass DLC.",
            ),
          ),
          n.createElement(C, { rgDeadlines: t }),
        );
      }
    },
    66418: (e, t, r) => {
      r.d(t, { T: () => s, i: () => a });
      var n = r(30470);
      const s = window.Config ?? n.TS,
        a = window.UserConfig ?? n.iA;
      window.Config && Object.assign(n.TS, window.Config),
        window.UserConfig && Object.assign(a, window.UserConfig);
    },
    55263: (e, t, r) => {
      r.d(t, {
        G6: () => l,
        Gg: () => d,
        MS: () => f,
        Ow: () => c,
        gF: () => g,
        mZ: () => m,
        t7: () => u,
        zX: () => _,
      });
      var n = r(41735),
        s = r.n(n),
        a = r(90626),
        o = r(84933),
        i = r(16021);
      function l(e, t, r, n) {
        const l = (0, a.useRef)(),
          u = (0, a.useRef)(void 0),
          c = (0, o.CH)();
        l.current = e;
        const [d, m] = (0, a.useState)(void 0),
          {
            include_assets: p,
            include_release: _,
            include_platforms: f,
            include_all_purchase_options: g,
            include_screenshots: h,
            include_trailers: E,
            include_ratings: S,
            include_tag_count: y,
            include_reviews: I,
            include_basic_info: P,
            include_supported_languages: C,
            include_full_description: w,
            include_included_items: G,
            include_assets_without_overrides: b,
            apply_user_filters: T,
            include_links: v,
          } = r;
        if (
          ((0, a.useEffect)(() => {
            const r = {
              include_assets: p,
              include_release: _,
              include_platforms: f,
              include_all_purchase_options: g,
              include_screenshots: h,
              include_trailers: E,
              include_ratings: S,
              include_tag_count: y,
              include_reviews: I,
              include_basic_info: P,
              include_supported_languages: C,
              include_full_description: w,
              include_included_items: G,
              include_assets_without_overrides: b,
              apply_user_filters: T,
              include_links: v,
            };
            let a = null;
            return (
              !e ||
                e < 0 ||
                i.A.Get().BHasStoreItem(e, t, r) ||
                (void 0 !== d && n && n == u.current) ||
                (n !== u.current && (m(void 0), (u.current = n)),
                (a = s().CancelToken.source()),
                i.A.Get()
                  .QueueStoreItemRequest(e, t, r)
                  .then((t) => {
                    a?.token.reason || l.current !== e || m(1 == t), c();
                  })),
              () => a?.cancel("useStoreItemCache: unmounting")
            );
          }, [e, t, n, d, p, _, f, g, h, E, S, y, I, P, C, w, G, b, T, v, c]),
          !e)
        )
          return [null, 2];
        if (!1 === d) return [void 0, 2];
        if (i.A.Get().BIsStoreItemMissing(e, t)) return [void 0, 2];
        if (!i.A.Get().BHasStoreItem(e, t, r)) return [void 0, 1];
        const A = i.A.Get().GetStoreItemWithLegacyVisibilityCheck(e, t);
        return A ? [A, 3] : [null, 2];
      }
      function u(e, t, r) {
        return l(e, 0, t, r);
      }
      function c(e, t, r) {
        return l(e, 2, t, r);
      }
      function d(e, t, r) {
        return l(e, 1, t, r);
      }
      function m(e, t, r) {
        const [n, s] = l(e, t, r);
        let a;
        1 != n?.GetStoreItemType() ||
          n.GetAssets()?.GetHeaderURL() ||
          1 != n?.GetIncludedAppIDs().length ||
          (a = n.GetIncludedAppIDs()[0]);
        const [o, i] = u(a, r);
        return a && o?.BIsVisible() ? [o, i] : [n, s];
      }
      function p(e, t, r, n) {
        const l = (0, o.CH)(),
          {
            include_assets: u,
            include_release: c,
            include_platforms: d,
            include_all_purchase_options: m,
            include_screenshots: p,
            include_trailers: _,
            include_ratings: f,
            include_tag_count: g,
            include_reviews: h,
            include_basic_info: E,
            include_supported_languages: S,
            include_full_description: y,
            include_included_items: I,
            include_assets_without_overrides: P,
            apply_user_filters: C,
            include_links: w,
          } = r;
        if (
          ((0, a.useEffect)(() => {
            if (!e || 0 == e.length) return;
            const r = {
                include_assets: u,
                include_release: c,
                include_platforms: d,
                include_all_purchase_options: m,
                include_screenshots: p,
                include_trailers: _,
                include_ratings: f,
                include_tag_count: g,
                include_reviews: h,
                include_basic_info: E,
                include_supported_languages: S,
                include_full_description: y,
                include_included_items: I,
                include_assets_without_overrides: P,
                apply_user_filters: C,
                include_links: w,
              },
              n = e.filter(
                (e) =>
                  !(
                    i.A.Get().BHasStoreItem(e, t, r) ||
                    i.A.Get().BIsStoreItemMissing(e, t)
                  ),
              );
            if (0 == n.length) return;
            const a = s().CancelToken.source(),
              o = n.map((e) => i.A.Get().QueueStoreItemRequest(e, t, r));
            return (
              Promise.all(o).then(() => {
                a.token.reason || l();
              }),
              () => a.cancel("useStoreItemCacheMultiplePackages: unmounting")
            );
          }, [e, t, n, l, u, c, d, m, p, _, f, g, h, E, S, y, I, P, C, w]),
          !e)
        )
          return 2;
        if (
          !e.every(
            (e) =>
              i.A.Get().BHasStoreItem(e, t, r) ||
              i.A.Get().BIsStoreItemMissing(e, t),
          )
        )
          return 1;
        return e.every((e) =>
          i.A.Get().GetStoreItemWithLegacyVisibilityCheck(e, t),
        )
          ? 3
          : 2;
      }
      function _(e, t, r) {
        return p(e, 0, t, r);
      }
      function f(e, t, r) {
        return p(e, 2, t, r);
      }
      function g(e, t, r) {
        return p(e, 1, t, r);
      }
    },
    68797: (e, t, r) => {
      r.d(t, { H: () => o });
      var n = r(41735),
        s = r.n(n),
        a = r(56545);
      function o(e) {
        if (s().isCancel(e))
          return { strErrorMsg: "Action Cancelled:" + e, errorCode: 52 };
        if (
          void 0 !== e.response &&
          e.response.data &&
          "object" == typeof e.response.data
        ) {
          if ("msg" in e.response.data)
            return {
              strErrorMsg: e.response.data.msg,
              errorCode: e.response.data.success,
            };
          if ("err_msg" in e.response.data)
            return {
              strErrorMsg: e.response.data.err_msg,
              errorCode: e.response.data.success,
            };
          if ("message" in e.response.data)
            return {
              strErrorMsg: e.response.data.message,
              errorCode: e.response.data.success,
            };
          if ("success" in e.response.data)
            return {
              strErrorMsg: "error code: " + e.response.data.success,
              errorCode: e.response.data.success,
            };
        } else if ("object" == typeof e.data) {
          if ("msg" in e.data)
            return { strErrorMsg: e.data.msg, errorCode: e.data.success };
          if ("err_msg" in e.data)
            return { strErrorMsg: e.data.err_msg, errorCode: e.data.success };
          if ("message" in e.data)
            return { strErrorMsg: e.data.message, errorCode: e.data.success };
          if ("success" in e.data)
            return {
              strErrorMsg: "error code: " + e.data.success,
              errorCode: e.data.success,
            };
        } else {
          if (void 0 !== e.success && void 0 !== e.msg)
            return { strErrorMsg: e.msg, errorCode: e.success };
          if (void 0 !== e.success && void 0 !== e.message)
            return { strErrorMsg: e.message, errorCode: e.success };
          if (void 0 !== e.success && void 0 !== e.err_msg)
            return { strErrorMsg: e.err_msg, errorCode: e.success };
          if ("string" == typeof e && e.length > 1024)
            console.groupCollapsed(
              "GetMsgAndErrorCodeFromResponse cannot parse: ",
            ),
              console.warn(e),
              console.groupEnd();
          else {
            if ("object" == typeof e && e instanceof a.w)
              return {
                strErrorMsg: "" + e.GetErrorMessage(),
                errorCode: e.GetEResult(),
              };
            console.warn("GetMsgAndErrorCodeFromResponse cannot parse: ", e);
          }
        }
        return "object" == typeof e && "status" in e
          ? {
              strErrorMsg: "Unknown Error: " + e + "\nStatus Code:" + e.status,
              errorCode: 2,
            }
          : { strErrorMsg: "Unknown Error: " + e, errorCode: 2 };
      }
    },
  },
]);

/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [3350],
  {
    54330: (e, t, n) => {
      n.d(t, { u: () => o });
      var a = n(66418),
        r = n(20194),
        s = n(41735),
        i = n.n(s),
        l = n(90626);
      function o(e) {
        const t = (0, r.I)({
          queryKey: ["useMilestoneByAppID", e],
          queryFn: async () => {
            const t = `${a.T.PARTNER_BASE_URL}seasonpass/ajaxgetmilestoneinfo`,
              n = { appid: e },
              r = await i().get(t, { params: n });
            if (1 == r?.data?.success) return r.data.milestones;
            throw new Error("failed to load milestonse for appid " + e);
          },
          enabled: Boolean(e),
        });
        return l.useMemo(() => t?.data, [e, t.isLoading]);
      }
    },
    32179: (e, t, n) => {
      n.d(t, {
        MY: () => c,
        UA: () => _,
        Yd: () => f,
        rN: () => p,
        vh: () => m,
      });
      var a = n(34629),
        r = n(41735),
        s = n.n(r),
        i = n(90626),
        l = n(68797),
        o = n(78327),
        u = n(10333);
      function c() {
        return 2 == o.TS.EUNIVERSE ? 12 : 1;
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
            const n = o.TS.PARTNER_BASE_URL + "pub/ajaxfindpublishers",
              a = {
                sessionid: o.TS.SESSIONID,
                searchtext: e,
                origin: self.origin,
              },
              r = await s().get(n, { params: a });
            200 == r?.status && 1 == r?.data?.success
              ? r.data.publishers.forEach((e) => {
                  const n = {
                    partnerid: e.publisherid,
                    name: e.publishername,
                    partner_url:
                      o.TS.PARTNER_BASE_URL + `pub/publisher/${e.publisherid}/`,
                    contacts: e.contacts,
                  };
                  this.m_mapOptInToPartners.set(e.publisherid, n), t.push(n);
                })
              : console.log(
                  `CPartnerInfoStore.FindPartnerByName failed with status ${r?.status} eresult ${r?.data?.success} and msg ${r?.data?.msg}`,
                );
          } catch (e) {
            const t = (0, l.H)(e);
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
              ("dev" != o.TS.WEB_UNIVERSE && "beta" != o.TS.WEB_UNIVERSE) ||
                (window.g_PartnerInfoStore = d.s_Singleton)),
            d.s_Singleton
          );
        }
        constructor() {
          let e = JSON.parse(
            JSON.stringify((0, o.Tc)("partner_info", "application_config")),
          );
          this.ValidateStoreDefault(e) &&
            (e.forEach((e) => this.m_mapOptInToPartners.set(e.partnerid, e)),
            "dev" == o.TS.WEB_UNIVERSE &&
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
        const [t, n] = (0, i.useState)(!1);
        return (
          (0, i.useEffect)(() => {
            !t &&
              e?.length > 0 &&
              d
                .Get()
                .LoadMultiplePartnerInfo(e)
                .then(() => n(!0));
          }, [e, t]),
          t
        );
      }
      function _(e) {
        const [t, n] = i.useState(() => d.Get().GetPartnerInfo(e));
        return (
          i.useEffect(() => {
            !d.Get().BHasPartnerInfoLoad(e) && e > 0
              ? d
                  .Get()
                  .LoadPartnerInfo(e)
                  .then((e) => n(e))
              : d.Get().BHasPartnerInfoLoad(e) &&
                t?.partnerid != e &&
                n(d.Get().GetPartnerInfo(e));
          }, [e, t]),
          [t]
        );
      }
      function p() {
        return { fnFindPartnerByName: d.Get().FindPartnerByName };
      }
      function f(e) {
        return d.Get().GetPartnerInfo(e);
      }
      (0, a.Cg)([u.o], d.prototype, "FindPartnerByName", null);
    },
    37789: (e, t, n) => {
      n.r(t), n.d(t, { default: () => G });
      var a = n(90626),
        r = n(24484),
        s = n(18573),
        i = n.n(s),
        l = n(52038),
        o = n(95695),
        u = n.n(o),
        c = n(51272),
        d = n(84811),
        m = n(7068),
        _ = n(95034),
        p = n(55263),
        f = n(16021),
        h = n(32179),
        g = n(66418),
        E = n(61859),
        I = n(91675),
        S = n(26408),
        y = n(54330);
      const P = { include_assets: !0, include_release: !0 };
      function w(e) {
        const { rgDeadlines: t } = e,
          [n, r] = (0, _.QD)("query", ""),
          s = (0, a.useMemo)(
            () =>
              Array.from(
                new Set(t.map((e) => e.data.store_item_id).filter(Boolean)),
              ),
            [t],
          ),
          i = (0, a.useMemo)(
            () =>
              Array.from(
                new Set(t.map((e) => e.data.partnerid).filter(Boolean)),
              ),
            [t],
          ),
          l = (0, p.zX)(s, P),
          o = (0, h.vh)(i),
          u = (0, a.useMemo)(() => {
            const e = n.trim().toLocaleLowerCase();
            return t
              .filter(
                (t) =>
                  0 == e.length ||
                  1 == l ||
                  !o ||
                  f.A.Get()
                    .GetApp(t.data.store_item_id)
                    ?.GetName()
                    .toLocaleLowerCase()
                    .includes(e) ||
                  (0, h.Yd)(t.data.partnerid)
                    ?.name.toLocaleLowerCase()
                    .includes(e),
              )
              .sort((e, t) => t.data.due_date - e.data.due_date);
          }, [n, t, l, o]);
        return a.createElement(
          d.tH,
          null,
          a.createElement("h3", null, "Season Passes"),
          a.createElement(m.pd, {
            type: "string",
            value: n,
            onChange: (e) => r(e.currentTarget.value.toLocaleLowerCase()),
            label: "Filter",
            tooltip:
              "Filters the list to be those that contain the letters you typed exactly (case insenstive) on the page id or name",
            placeholder: "type here...",
          }),
          a.createElement(
            "table",
            null,
            a.createElement(
              "thead",
              null,
              a.createElement(
                "tr",
                null,
                a.createElement("th", null, "Deadline ID"),
                a.createElement(
                  "th",
                  null,
                  "Milestone ID ",
                  a.createElement(S.o, {
                    tooltip: "This is only unique within a DLC Season Pass",
                  }),
                ),
                a.createElement("th", null, "Season Pass DLC"),
                a.createElement("th", null, "Partner"),
                a.createElement("th", null, "Season Pass Release Date"),
                a.createElement("th", null, "Deadline Date"),
                a.createElement("th", null, "Milestone Name"),
                a.createElement("th", null, "Ticket?"),
              ),
            ),
            a.createElement(
              "tbody",
              null,
              u.map((e) =>
                a.createElement(T, { key: "" + e.deadlineid, deadline: e }),
              ),
            ),
          ),
        );
      }
      function T(e) {
        const { deadline: t } = e,
          [n] = (0, p.t7)(t.data.store_item_id, P),
          [r] = (0, h.UA)(t.data.partnerid),
          s = (0, y.u)(t.data.store_item_id),
          i = s?.find((e) => e.milestone_id == Number.parseInt(t.data.gid));
        return a.createElement(
          "tr",
          null,
          a.createElement("td", null, t.deadlineid),
          a.createElement("td", null, t.data.gid),
          a.createElement(
            "td",
            null,
            a.createElement(
              "a",
              { href: n?.GetStorePageURL(), target: "_blank" },
              n?.GetName() || "unknown",
            ),
            "(",
            a.createElement(
              "a",
              {
                href: `${g.T.PARTNER_BASE_URL}admin/game/editbyappid/${t.data.store_item_id}`,
                target: "_blank",
              },
              t.data.store_item_id,
              ")",
            ),
          ),
          a.createElement(
            "td",
            null,
            a.createElement(
              "a",
              {
                href: `${g.T}pub/companydetails/${t.data.partnerid}`,
                target: "_blank",
              },
              r?.name || "unknown",
              " (",
              t.data.partnerid,
              ")",
            ),
          ),
          a.createElement(
            "td",
            null,
            (0, E.TW)(n?.GetReleaseDateRTime()),
            a.createElement("span", null, " - "),
            (0, I.KC)(n?.GetReleaseDateRTime(), { bForce24HourClock: !1 }),
          ),
          a.createElement(
            "td",
            null,
            (0, E.TW)(t.data.due_date),
            a.createElement("span", null, " - "),
            (0, I.KC)(t.data.due_date, { bForce24HourClock: !1 }),
          ),
          a.createElement(
            "td",
            null,
            i?.title.find((e) => 0 == e.language)?.localized_string,
          ),
          a.createElement("td", null, "TODO"),
        );
      }
      function G(e) {
        const t = (function () {
          const [e] = (0, a.useState)(
            (0, r.Tc)("deadlines", "application_config"),
          );
          return e;
        })();
        return a.createElement(
          d.tH,
          null,
          a.createElement(
            "div",
            { className: i().DashboardCtn },
            a.createElement(
              "h1",
              null,
              "Missed Deadlines Dashboard",
              a.createElement(
                "button",
                {
                  className: (0, l.A)(u().Button),
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
            a.createElement("hr", null),
            a.createElement(
              "p",
              null,
              "This dashboard surfaces any important deadlines that a partner has missed. Currently, the only ones we are tracking are related to customer commitments with Season Pass DLC.",
            ),
          ),
          a.createElement(w, { rgDeadlines: t }),
        );
      }
    },
    66418: (e, t, n) => {
      n.d(t, { T: () => r, i: () => s });
      var a = n(30470);
      const r = window.Config ?? a.TS,
        s = window.UserConfig ?? a.iA;
      window.Config && Object.assign(a.TS, window.Config),
        window.UserConfig && Object.assign(s, window.UserConfig);
    },
    55263: (e, t, n) => {
      n.d(t, {
        G6: () => o,
        Gg: () => d,
        MS: () => f,
        Ow: () => c,
        gF: () => h,
        mZ: () => m,
        t7: () => u,
        zX: () => p,
      });
      var a = n(41735),
        r = n.n(a),
        s = n(90626),
        i = n(56093),
        l = n(16021);
      function o(e, t, n, a) {
        const o = (0, s.useRef)(),
          u = (0, s.useRef)(void 0),
          c = (0, i.CH)();
        o.current = e;
        const [d, m] = (0, s.useState)(void 0),
          {
            include_assets: _,
            include_release: p,
            include_platforms: f,
            include_all_purchase_options: h,
            include_screenshots: g,
            include_trailers: E,
            include_ratings: I,
            include_tag_count: S,
            include_reviews: y,
            include_basic_info: P,
            include_supported_languages: w,
            include_full_description: T,
            include_included_items: G,
            include_assets_without_overrides: b,
            apply_user_filters: B,
            include_links: C,
          } = n;
        if (
          ((0, s.useEffect)(() => {
            const n = {
              include_assets: _,
              include_release: p,
              include_platforms: f,
              include_all_purchase_options: h,
              include_screenshots: g,
              include_trailers: E,
              include_ratings: I,
              include_tag_count: S,
              include_reviews: y,
              include_basic_info: P,
              include_supported_languages: w,
              include_full_description: T,
              include_included_items: G,
              include_assets_without_overrides: b,
              apply_user_filters: B,
              include_links: C,
            };
            let s = null;
            return (
              !e ||
                l.A.Get().BHasStoreItem(e, t, n) ||
                (void 0 !== d && a && a == u.current) ||
                (a !== u.current && (m(void 0), (u.current = a)),
                (s = r().CancelToken.source()),
                l.A.Get()
                  .QueueStoreItemRequest(e, t, n)
                  .then((t) => {
                    s?.token.reason || o.current !== e || m(1 == t), c();
                  })),
              () => s?.cancel("useStoreItemCache: unmounting")
            );
          }, [e, t, a, d, _, p, f, h, g, E, I, S, y, P, w, T, G, b, B, C, c]),
          !e)
        )
          return [null, 2];
        if (!1 === d) return [void 0, 2];
        if (l.A.Get().BIsStoreItemMissing(e, t)) return [void 0, 2];
        if (!l.A.Get().BHasStoreItem(e, t, n)) return [void 0, 1];
        const A = l.A.Get().GetStoreItemWithLegacyVisibilityCheck(e, t);
        return A ? [A, 3] : [null, 2];
      }
      function u(e, t, n) {
        return o(e, 0, t, n);
      }
      function c(e, t, n) {
        return o(e, 2, t, n);
      }
      function d(e, t, n) {
        return o(e, 1, t, n);
      }
      function m(e, t, n) {
        const [a, r] = o(e, t, n);
        let s;
        1 != a?.GetStoreItemType() ||
          a.GetAssets()?.GetHeaderURL() ||
          1 != a?.GetIncludedAppIDs().length ||
          (s = a.GetIncludedAppIDs()[0]);
        const [i, l] = u(s, n);
        return s && i?.BIsVisible() ? [i, l] : [a, r];
      }
      function _(e, t, n, a) {
        const o = (0, i.CH)(),
          {
            include_assets: u,
            include_release: c,
            include_platforms: d,
            include_all_purchase_options: m,
            include_screenshots: _,
            include_trailers: p,
            include_ratings: f,
            include_tag_count: h,
            include_reviews: g,
            include_basic_info: E,
            include_supported_languages: I,
            include_full_description: S,
            include_included_items: y,
            include_assets_without_overrides: P,
            apply_user_filters: w,
            include_links: T,
          } = n;
        if (
          ((0, s.useEffect)(() => {
            if (!e || 0 == e.length) return;
            const n = {
                include_assets: u,
                include_release: c,
                include_platforms: d,
                include_all_purchase_options: m,
                include_screenshots: _,
                include_trailers: p,
                include_ratings: f,
                include_tag_count: h,
                include_reviews: g,
                include_basic_info: E,
                include_supported_languages: I,
                include_full_description: S,
                include_included_items: y,
                include_assets_without_overrides: P,
                apply_user_filters: w,
                include_links: T,
              },
              a = e.filter(
                (e) =>
                  !(
                    l.A.Get().BHasStoreItem(e, t, n) ||
                    l.A.Get().BIsStoreItemMissing(e, t)
                  ),
              );
            if (0 == a.length) return;
            const s = r().CancelToken.source(),
              i = a.map((e) => l.A.Get().QueueStoreItemRequest(e, t, n));
            return (
              Promise.all(i).then(() => {
                s.token.reason || o();
              }),
              () => s.cancel("useStoreItemCacheMultiplePackages: unmounting")
            );
          }, [e, t, a, o, u, c, d, m, _, p, f, h, g, E, I, S, y, P, w, T]),
          !e)
        )
          return 2;
        if (
          !e.every(
            (e) =>
              l.A.Get().BHasStoreItem(e, t, n) ||
              l.A.Get().BIsStoreItemMissing(e, t),
          )
        )
          return 1;
        return e.every((e) =>
          l.A.Get().GetStoreItemWithLegacyVisibilityCheck(e, t),
        )
          ? 3
          : 2;
      }
      function p(e, t, n) {
        return _(e, 0, t, n);
      }
      function f(e, t, n) {
        return _(e, 2, t, n);
      }
      function h(e, t, n) {
        return _(e, 1, t, n);
      }
    },
  },
]);

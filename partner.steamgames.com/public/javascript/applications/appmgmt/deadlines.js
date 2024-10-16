/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [3350],
  {
    54292: (e) => {
      e.exports = {
        header_container: "_1sufRvqysxjE-xyRrrKL5U",
        header_label: "_36r9iRM8nCGkZBkqJOFd7G",
        NotificationContainer: "mXFFZGFLLywwiNBr7ouAn",
      };
    },
    45737: (e) => {
      e.exports = {
        AdminPageCtn: "wC3_c2yhq3ppKA9AKQoTy",
        WidePageCtn: "uHgjQHyNygSKukDngfNQO",
        PageTitleFlexCtn: "_3uPTh_ikegl-PIq12cfjJg",
        PageTitle: "_2RxJB5bupbx0mkW8dYJQRE",
        Beta: "_1YBhTKSlOER8bOnp0BU4Wj",
        PageSubTitle: "okuL_y7hLnZUD5P4ACqUN",
        ValveOnlyTitle: "_3skaXOiv1_vtHc_pGOPNsc",
        ValveOnlyBackground: "_2FESGwA28dH3EVAa7uTsUX",
        ColumnCtn: "_1bjwXvgQa-kJBMijOLS8X5",
        LeftCol: "_1AqrivbzwCs57BXiugqpeA",
        ColHeader: "_3m2-TXBKQenlqzPUBuhbaD",
        ColHeaderImg: "_1VFkxNTzCFO2uCcle_nAJk",
        SectionCtn: "_1eWwNe3G6T8EcVRg0R5Ftj",
        Bright: "_3ZqV0CAeVnd0rruF6TVKQz",
        ActionBar: "ilVbVkb6hkO_s6E_kiiSd",
        SectionIntroRequirements: "_3TKZIwYk2f5dd3MR5909Uz",
        warning: "_2HiNh3o5cgMEbzFKYBUjAy",
        RightCol: "_3kaQhRnhNh_awrnNX90rui",
        NoSticky: "JQNb8bHftBTAYpCXTx52v",
        SmallText: "_3ltg5fPzb-WsRyzI41vAv_",
        Button: "_3L1DFwM1lpsRwZ-AaMx9ie",
        TitleSmall: "_3DyXNd5UgceEG9fcCKinvw",
        DefaultSectionCtn: "Pupnokb21glaosRjxBjAm",
        Indent: "_7PV326-4cpZdmTCEdgC2l",
        DashLink: "_2NH_FlbsKA0jN2jPG4Rn9A",
        FlexRow: "_3rz6jzCvvOGt8N0XaPIdzg",
        MarginBottom: "_2Bw2oyBgXlb8EZ4HHbE8Ye",
        StatusLineItemCtn: "_2h8s6LCid-ECW3NhDIBaFX",
        StatusIcon: "_3dYtRWTacFdf4BVwqGSgcd",
        StatusIconDone: "_1tiAc3o7NUJsBdgLS6vCl_",
        UploadedImageDisplayCtn: "_1_JRuj6yAJovBDZE8IMSob",
        UploaderLeftCol: "_3KQhw0sa1q_h62e4yaFgbw",
        MarketingMessage: "_2pCvRF734J5gLxMMHW7LIb",
        BannerPreview: "_1x4unTauuLCbMkThgRpsXc",
        UploaderRightCol: "_3jcvvtnLhiQBvAebO2eI4Z",
        LangCountTitle: "_1tPNH9hTWnMUsbdob5i93a",
        LangSelectCtn: "_3tHzJ-eCQIlg-4XjTN0bNU",
        UploaderImgLang: "_1jJThBArHevzcJ93kx4WhR",
        LangSelected: "_1sUrnQsBw06ZqTIbMeE9tT",
        DeleteAll: "rYuknI3K1VFknv90GNUTc",
        EditCtn: "_1g5X3AT4HwD0ya2e2t2WTO",
        StatusBtn: "_1MGZHxsnyQPrLXwl-8Fium",
        HalfWidthBtnCtn: "fGJIpDJEvYkHmhWFP39BX",
        StatReportCtn: "_1J3v1KGOhdSGz77c2rLxWy",
        Stat: "_3OYQbVCq1yBuEx1XcDzG06",
        BigStat: "lYYwDDss378Sm0FKPBxPh",
        IncreaseRateInfo: "_2yY3XT7VPyYBZS3FCEGgRS",
      };
    },
    54330: (e, t, n) => {
      "use strict";
      n.d(t, { u: () => l });
      var r = n(66418),
        a = n(20194),
        s = n(41735),
        i = n.n(s),
        o = n(90626);
      function l(e) {
        const t = (0, a.I)({
          queryKey: ["useMilestoneByAppID", e],
          queryFn: async () => {
            const t = `${r.T.PARTNER_BASE_URL}seasonpass/ajaxgetmilestoneinfo`,
              n = { appid: e },
              a = await i().get(t, { params: n });
            if (1 == a?.data?.success) return a.data.milestones;
            throw new Error("failed to load milestonse for appid " + e);
          },
          enabled: Boolean(e),
        });
        return o.useMemo(() => t?.data, [e, t.isLoading]);
      }
    },
    32179: (e, t, n) => {
      "use strict";
      n.d(t, {
        MY: () => d,
        UA: () => m,
        Yd: () => g,
        rN: () => p,
        vh: () => _,
      });
      var r = n(34629),
        a = n(41735),
        s = n.n(a),
        i = n(90626),
        o = n(68797),
        l = n(78327),
        c = n(6419);
      function d() {
        return 2 == l.TS.EUNIVERSE ? 12 : 1;
      }
      class u {
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
            const n = l.TS.PARTNER_BASE_URL + "pub/ajaxfindpublishers",
              r = {
                sessionid: l.TS.SESSIONID,
                searchtext: e,
                origin: self.origin,
              },
              a = await s().get(n, { params: r });
            200 == a?.status && 1 == a?.data?.success
              ? a.data.publishers.forEach((e) => {
                  const n = {
                    partnerid: e.publisherid,
                    name: e.publishername,
                    partner_url:
                      l.TS.PARTNER_BASE_URL + `pub/publisher/${e.publisherid}/`,
                    contacts: e.contacts,
                  };
                  this.m_mapOptInToPartners.set(e.publisherid, n), t.push(n);
                })
              : console.log(
                  `CPartnerInfoStore.FindPartnerByName failed with status ${a?.status} eresult ${a?.data?.success} and msg ${a?.data?.msg}`,
                );
          } catch (e) {
            const t = (0, o.H)(e);
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
            u.s_Singleton ||
              ((u.s_Singleton = new u()),
              ("dev" != l.TS.WEB_UNIVERSE && "beta" != l.TS.WEB_UNIVERSE) ||
                (window.g_PartnerInfoStore = u.s_Singleton)),
            u.s_Singleton
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
      function _(e) {
        const [t, n] = (0, i.useState)(!1);
        return (
          (0, i.useEffect)(() => {
            !t &&
              e?.length > 0 &&
              u
                .Get()
                .LoadMultiplePartnerInfo(e)
                .then(() => n(!0));
          }, [e, t]),
          t
        );
      }
      function m(e) {
        const [t, n] = i.useState(() => u.Get().GetPartnerInfo(e));
        return (
          i.useEffect(() => {
            !u.Get().BHasPartnerInfoLoad(e) && e > 0
              ? u
                  .Get()
                  .LoadPartnerInfo(e)
                  .then((e) => n(e))
              : u.Get().BHasPartnerInfoLoad(e) &&
                t?.partnerid != e &&
                n(u.Get().GetPartnerInfo(e));
          }, [e, t]),
          [t]
        );
      }
      function p() {
        return { fnFindPartnerByName: u.Get().FindPartnerByName };
      }
      function g(e) {
        return u.Get().GetPartnerInfo(e);
      }
      (0, r.Cg)([c.o], u.prototype, "FindPartnerByName", null);
    },
    37789: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => w });
      var r = n(90626),
        a = n(24484),
        s = n(18573),
        i = n.n(s),
        o = n(52038),
        l = n(95695),
        c = n.n(l),
        d = n(51272),
        u = n(84811),
        _ = n(71541),
        m = n(95034),
        p = n(55263),
        g = n(16021),
        f = n(32179),
        h = n(66418),
        E = n(61859),
        S = n(91675),
        C = n(26408),
        y = n(54330);
      const I = { include_assets: !0, include_release: !0 };
      function P(e) {
        const { rgDeadlines: t } = e,
          [n, a] = (0, m.QD)("query", ""),
          s = (0, r.useMemo)(
            () =>
              Array.from(
                new Set(t.map((e) => e.data.store_item_id).filter(Boolean)),
              ),
            [t],
          ),
          i = (0, r.useMemo)(
            () =>
              Array.from(
                new Set(t.map((e) => e.data.partnerid).filter(Boolean)),
              ),
            [t],
          ),
          o = (0, p.zX)(s, I),
          l = (0, f.vh)(i),
          c = (0, r.useMemo)(() => {
            const e = n.trim().toLocaleLowerCase();
            return t
              .filter(
                (t) =>
                  0 == e.length ||
                  1 == o ||
                  !l ||
                  g.A.Get()
                    .GetApp(t.data.store_item_id)
                    ?.GetName()
                    .toLocaleLowerCase()
                    .includes(e) ||
                  (0, f.Yd)(t.data.partnerid)
                    ?.name.toLocaleLowerCase()
                    .includes(e),
              )
              .sort((e, t) => t.data.due_date - e.data.due_date);
          }, [n, t, o, l]);
        return r.createElement(
          u.tH,
          null,
          r.createElement("h3", null, "Season Passes"),
          r.createElement(_.pd, {
            type: "string",
            value: n,
            onChange: (e) => a(e.currentTarget.value.toLocaleLowerCase()),
            label: "Filter",
            tooltip:
              "Filters the list to be those that contain the letters you typed exactly (case insenstive) on the page id or name",
            placeholder: "type here...",
          }),
          r.createElement(
            "table",
            null,
            r.createElement(
              "thead",
              null,
              r.createElement(
                "tr",
                null,
                r.createElement("th", null, "Deadline ID"),
                r.createElement(
                  "th",
                  null,
                  "Milestone ID ",
                  r.createElement(C.o, {
                    tooltip: "This is only unique within a DLC Season Pass",
                  }),
                ),
                r.createElement("th", null, "Season Pass DLC"),
                r.createElement("th", null, "Partner"),
                r.createElement("th", null, "Season Pass Release Date"),
                r.createElement("th", null, "Deadline Date"),
                r.createElement("th", null, "Milestone Name"),
                r.createElement("th", null, "Ticket?"),
              ),
            ),
            r.createElement(
              "tbody",
              null,
              c.map((e) =>
                r.createElement(b, { key: "" + e.deadlineid, deadline: e }),
              ),
            ),
          ),
        );
      }
      function b(e) {
        const { deadline: t } = e,
          [n] = (0, p.t7)(t.data.store_item_id, I),
          [a] = (0, f.UA)(t.data.partnerid),
          s = (0, y.u)(t.data.store_item_id),
          i = s?.find((e) => e.milestone_id == Number.parseInt(t.data.gid));
        return r.createElement(
          "tr",
          null,
          r.createElement("td", null, t.deadlineid),
          r.createElement("td", null, t.data.gid),
          r.createElement(
            "td",
            null,
            r.createElement(
              "a",
              { href: n?.GetStorePageURL(), target: "_blank" },
              n?.GetName() || "unknown",
            ),
            "(",
            r.createElement(
              "a",
              {
                href: `${h.T.PARTNER_BASE_URL}admin/game/editbyappid/${t.data.store_item_id}`,
                target: "_blank",
              },
              t.data.store_item_id,
              ")",
            ),
          ),
          r.createElement(
            "td",
            null,
            r.createElement(
              "a",
              {
                href: `${h.T}pub/companydetails/${t.data.partnerid}`,
                target: "_blank",
              },
              a?.name || "unknown",
              " (",
              t.data.partnerid,
              ")",
            ),
          ),
          r.createElement(
            "td",
            null,
            (0, E.TW)(n?.GetReleaseDateRTime()),
            r.createElement("span", null, " - "),
            (0, S.KC)(n?.GetReleaseDateRTime(), { bForce24HourClock: !1 }),
          ),
          r.createElement(
            "td",
            null,
            (0, E.TW)(t.data.due_date),
            r.createElement("span", null, " - "),
            (0, S.KC)(t.data.due_date, { bForce24HourClock: !1 }),
          ),
          r.createElement(
            "td",
            null,
            i?.title.find((e) => 0 == e.language)?.localized_string,
          ),
          r.createElement("td", null, "TODO"),
        );
      }
      function w(e) {
        const t = (function () {
          const [e] = (0, r.useState)(
            (0, a.Tc)("deadlines", "application_config"),
          );
          return e;
        })();
        return r.createElement(
          u.tH,
          null,
          r.createElement(
            "div",
            { className: i().DashboardCtn },
            r.createElement(
              "h1",
              null,
              "Missed Deadlines Dashboard",
              r.createElement(
                "button",
                {
                  className: (0, o.A)(c().Button),
                  style: { float: "right", marginRight: "16px" },
                  onClick: (e) =>
                    (0, d.EP)(
                      e,
                      "https://confluence.valve.org/display/~adils/Steam+Season+Passes",
                    ),
                },
                "Help",
              ),
            ),
            r.createElement("hr", null),
            r.createElement(
              "p",
              null,
              "This dashboard surfaces any important deadlines that a partner has missed. Currently, the only ones we are tracking are related to customer commitments with Season Pass DLC.",
            ),
          ),
          r.createElement(P, { rgDeadlines: t }),
        );
      }
    },
    20880: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => u });
      var r = n(90626),
        a = n(24484),
        s = n(84811),
        i = n(32179),
        o = n(54292),
        l = n.n(o),
        c = n(45737),
        d = n.n(c);
      function u(e) {
        const [t, n, o] = (function () {
            const [e] = (0, r.useState)(
                (0, a.Tc)("deadlines", "application_config"),
              ),
              [t] = (0, r.useState)(
                parseInt((0, a.Tc)("actionid", "application_config")),
              ),
              [n] = (0, r.useState)(
                parseInt((0, a.Tc)("publisherid", "application_config")),
              );
            return [e, t, n];
          })(),
          [c] = (0, i.UA)(o),
          [u, p] = r.useMemo(() => {
            const e = [...t];
            e.sort((e, t) => {
              const n = new Date(
                  JSON.parse(e.data.description_jsondata)?.CreatedOn,
                ),
                r = new Date(
                  JSON.parse(t.data.description_jsondata)?.CreatedOn,
                );
              return n.getTime() > r.getTime() ? 1 : -1;
            });
            return [e.pop(), e];
          }, [t]);
        return r.createElement(
          s.tH,
          null,
          r.createElement(
            "div",
            { className: d().AdminPageCtn },
            r.createElement(
              "div",
              { className: l().header_container },
              r.createElement(
                "div",
                { className: l().header_label },
                "Steamworks Document Communication",
              ),
            ),
            p.map((e, t) =>
              r.createElement(m, { key: "update_" + t, deadline: e }),
            ),
            r.createElement(_, { deadline: u }),
          ),
        );
      }
      function _(e) {
        const { deadline: t } = e,
          n = JSON.parse(t.data.description_jsondata);
        return r.createElement(
          "div",
          { className: l().NotificationContainer },
          r.createElement(
            "div",
            { key: n.NotificationID },
            r.createElement("div", null, "Subject: ", n.Subject),
            r.createElement("div", null, "Address: ", n.Address),
          ),
        );
      }
      function m(e) {
        const { deadline: t } = e,
          n = JSON.parse(t.data.description_jsondata);
        return r.createElement(
          "div",
          { key: n.NotificationID },
          "Update",
          r.createElement("div", null, "Subject: ", n.Subject),
          r.createElement("div", null, "Address: ", n.Address),
        );
      }
    },
    66418: (e, t, n) => {
      "use strict";
      n.d(t, { T: () => a, i: () => s });
      var r = n(30470);
      const a = window.Config ?? r.TS,
        s = window.UserConfig ?? r.iA;
      window.Config && Object.assign(r.TS, window.Config),
        window.UserConfig && Object.assign(s, window.UserConfig);
    },
    55263: (e, t, n) => {
      "use strict";
      n.d(t, {
        G6: () => l,
        Gg: () => u,
        MS: () => g,
        Ow: () => d,
        gF: () => f,
        mZ: () => _,
        t7: () => c,
        zX: () => p,
      });
      var r = n(41735),
        a = n.n(r),
        s = n(90626),
        i = n(73745),
        o = n(16021);
      function l(e, t, n, r) {
        const l = (0, s.useRef)(),
          c = (0, s.useRef)(void 0),
          d = (0, i.CH)();
        l.current = e;
        const [u, _] = (0, s.useState)(void 0),
          {
            include_assets: m,
            include_release: p,
            include_platforms: g,
            include_all_purchase_options: f,
            include_screenshots: h,
            include_trailers: E,
            include_ratings: S,
            include_tag_count: C,
            include_reviews: y,
            include_basic_info: I,
            include_supported_languages: P,
            include_full_description: b,
            include_included_items: w,
            include_assets_without_overrides: T,
            apply_user_filters: v,
            include_links: B,
          } = n;
        if (
          ((0, s.useEffect)(() => {
            const n = {
              include_assets: m,
              include_release: p,
              include_platforms: g,
              include_all_purchase_options: f,
              include_screenshots: h,
              include_trailers: E,
              include_ratings: S,
              include_tag_count: C,
              include_reviews: y,
              include_basic_info: I,
              include_supported_languages: P,
              include_full_description: b,
              include_included_items: w,
              include_assets_without_overrides: T,
              apply_user_filters: v,
              include_links: B,
            };
            let s = null;
            return (
              !e ||
                e < 0 ||
                o.A.Get().BHasStoreItem(e, t, n) ||
                (void 0 !== u && r && r == c.current) ||
                (r !== c.current && (_(void 0), (c.current = r)),
                (s = a().CancelToken.source()),
                o.A.Get()
                  .QueueStoreItemRequest(e, t, n)
                  .then((t) => {
                    s?.token.reason || l.current !== e || _(1 == t), d();
                  })),
              () => s?.cancel("useStoreItemCache: unmounting")
            );
          }, [e, t, r, u, m, p, g, f, h, E, S, C, y, I, P, b, w, T, v, B, d]),
          !e)
        )
          return [null, 2];
        if (!1 === u) return [void 0, 2];
        if (o.A.Get().BIsStoreItemMissing(e, t)) return [void 0, 2];
        if (!o.A.Get().BHasStoreItem(e, t, n)) return [void 0, 1];
        const A = o.A.Get().GetStoreItemWithLegacyVisibilityCheck(e, t);
        return A ? [A, 3] : [null, 2];
      }
      function c(e, t, n) {
        return l(e, 0, t, n);
      }
      function d(e, t, n) {
        return l(e, 2, t, n);
      }
      function u(e, t, n) {
        return l(e, 1, t, n);
      }
      function _(e, t, n) {
        const [r, a] = l(e, t, n);
        let s;
        1 != r?.GetStoreItemType() ||
          r.GetAssets()?.GetHeaderURL() ||
          1 != r?.GetIncludedAppIDs().length ||
          (s = r.GetIncludedAppIDs()[0]);
        const [i, o] = c(s, n);
        return s && i?.BIsVisible() ? [i, o] : [r, a];
      }
      function m(e, t, n, r) {
        const l = (0, i.CH)(),
          {
            include_assets: c,
            include_release: d,
            include_platforms: u,
            include_all_purchase_options: _,
            include_screenshots: m,
            include_trailers: p,
            include_ratings: g,
            include_tag_count: f,
            include_reviews: h,
            include_basic_info: E,
            include_supported_languages: S,
            include_full_description: C,
            include_included_items: y,
            include_assets_without_overrides: I,
            apply_user_filters: P,
            include_links: b,
          } = n;
        if (
          ((0, s.useEffect)(() => {
            if (!e || 0 == e.length) return;
            const n = {
                include_assets: c,
                include_release: d,
                include_platforms: u,
                include_all_purchase_options: _,
                include_screenshots: m,
                include_trailers: p,
                include_ratings: g,
                include_tag_count: f,
                include_reviews: h,
                include_basic_info: E,
                include_supported_languages: S,
                include_full_description: C,
                include_included_items: y,
                include_assets_without_overrides: I,
                apply_user_filters: P,
                include_links: b,
              },
              r = e.filter(
                (e) =>
                  !(
                    o.A.Get().BHasStoreItem(e, t, n) ||
                    o.A.Get().BIsStoreItemMissing(e, t)
                  ),
              );
            if (0 == r.length) return;
            const s = a().CancelToken.source(),
              i = r.map((e) => o.A.Get().QueueStoreItemRequest(e, t, n));
            return (
              Promise.all(i).then(() => {
                s.token.reason || l();
              }),
              () => s.cancel("useStoreItemCacheMultiplePackages: unmounting")
            );
          }, [e, t, r, l, c, d, u, _, m, p, g, f, h, E, S, C, y, I, P, b]),
          !e)
        )
          return 2;
        if (
          !e.every(
            (e) =>
              o.A.Get().BHasStoreItem(e, t, n) ||
              o.A.Get().BIsStoreItemMissing(e, t),
          )
        )
          return 1;
        return e.every((e) =>
          o.A.Get().GetStoreItemWithLegacyVisibilityCheck(e, t),
        )
          ? 3
          : 2;
      }
      function p(e, t, n) {
        return m(e, 0, t, n);
      }
      function g(e, t, n) {
        return m(e, 2, t, n);
      }
      function f(e, t, n) {
        return m(e, 1, t, n);
      }
    },
    68797: (e, t, n) => {
      "use strict";
      n.d(t, { H: () => i });
      var r = n(41735),
        a = n.n(r),
        s = n(56545);
      function i(e) {
        if (a().isCancel(e))
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
            if ("object" == typeof e && e instanceof s.w)
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

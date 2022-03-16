/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [1],
  {
    "2l+k": function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return S;
      });
      var a = r("mrSG"),
        n = r("vDqi"),
        s = r.n(n),
        i = r("2vnA"),
        o = r("lkRc"),
        l = r("WBba"),
        d = r("bxBv"),
        c = r("hJ1w"),
        m = (r("mgoM"), r("kyHq"), r("kLLr")),
        u = (r("AiWL"), r("6oCP")),
        _ = r("NtSG"),
        h = r("r64O"),
        p = r("OS6B");
      class b {
        constructor(e) {
          (this.m_mapURLToPosted = new Map()),
            (this.m_clanAccountID = e.clanid),
            (this.m_clanSteamID = m.a.InitFromClanID(this.m_clanAccountID)),
            Object(i.G)(() => {
              (this.m_strRSSFeedURL = e.rss_feed_url),
                (this.m_strRSSGID = e.rss_feed_gid),
                (this.m_eRSSFeedLanguage = e.rss_feed_language),
                (this.m_rtimeRSSLastChecked = e.rss_feed_last_checked),
                (this.m_nPollIntervalSeconds = e.poll_interval),
                (this.m_eCuratorLanguage = e.curation_language);
            });
        }
        GetFeedLanguageHandleUnset() {
          return -1 == this.m_eRSSFeedLanguage
            ? -1 == this.m_eCuratorLanguage
              ? 0
              : this.m_eCuratorLanguage
            : this.m_eRSSFeedLanguage;
        }
        GetCuratorLanguage() {
          return -1 == this.m_eCuratorLanguage ? 0 : this.m_eCuratorLanguage;
        }
        BHasSavedRSSURL() {
          return Boolean(this.m_strRSSFeedURL);
        }
        GetRSSUrl() {
          return this.m_strRSSFeedURL ? this.m_strRSSFeedURL : "";
        }
        GetRSSLastRtimeChecked() {
          return this.m_rtimeRSSLastChecked;
        }
        GetClanSteamID() {
          return this.m_clanSteamID;
        }
        GetClanAccountID() {
          return this.m_clanAccountID;
        }
        BHasSetupFeed(e) {
          return Boolean(this.m_strRSSGID) && this.m_strRSSFeedURL === e;
        }
        BIsAutomationEnabled() {
          return Boolean(this.m_nPollIntervalSeconds > 0);
        }
        BHasFeedGID() {
          return Boolean(this.m_strRSSGID);
        }
        PreviewPartnerEventsFromRSSFeed(e) {
          return Object(a.a)(this, void 0, void 0, function* () {
            if (!this.BIsLoggedIn())
              return (
                console.error(
                  "PreviewPartnerEventsFromRSSFeed: User not logged in"
                ),
                null
              );
            const t = d.b.Init(c.c);
            t.Body().set_rss_url(e),
              t.Body().set_lang(this.GetFeedLanguageHandleUnset());
            let r = yield c.e.PreviewPartnerEvents(
              S.Get().GetCuratorTransport(),
              t
            );
            return (
              1 != r.GetEResult() &&
                console.error(
                  "PreviewPartnerEventsFromRSSFeed error: " +
                    r.GetEMsg() +
                    " " +
                    r.GetEResult()
                ),
              r
            );
          });
        }
        FetchPublishedEvents(e = 100) {
          return Object(a.a)(this, void 0, void 0, function* () {
            if (!this.BIsLoggedIn())
              return (
                console.error("FetchPublishedEvents: User not logged in"), null
              );
            if (!this.m_strRSSGID)
              return (
                console.error(
                  "FetchPublishedEvents: Need to create a news feed first"
                ),
                null
              );
            const t = d.b.Init(c.b);
            t.Body().set_news_feed_gid(this.m_strRSSGID),
              t.Body().set_amount(e);
            let r = yield c.e.GetBatchPublishedPartnerEvent(
              S.Get().GetCuratorTransport(),
              t
            );
            return (
              1 != r.GetEResult()
                ? console.error(
                    "FetchPublishedEvents error: EMsg:" +
                      Object(_.a)(r.GetEMsg()) +
                      " EResult:" +
                      r.GetEResult() +
                      " msg:" +
                      r.Hdr().error_message()
                  )
                : Object(i.G)(() => {
                    for (let e = 0; e < r.Body().clan_event_gid().length; ++e) {
                      let t = {
                        url: r.Body().news_url()[e],
                        clan_event_gid: r.Body().clan_event_gid()[e],
                        news_post_gid: r.Body().news_post_gid()[e],
                      };
                      this.m_mapURLToPosted.set(t.url, t);
                    }
                  }),
              r
            );
          });
        }
        MapArticleURLToClanEventGID(e) {
          let t = this.m_mapURLToPosted.get(e);
          if (t) return t.clan_event_gid;
        }
        BIsLoggedIn() {
          return o.k.logged_in;
        }
        CreateOrUpdateRSSNewFeed(e, t = 0) {
          return Object(a.a)(this, void 0, void 0, function* () {
            let r = new FormData();
            r.append("sessionid", o.d.SESSIONID),
              r.append("gid", this.m_strRSSGID),
              r.append("lang", "" + this.GetCuratorLanguage()),
              r.append("rss_url", e),
              r.append("polling_interval", "" + t);
            const a =
              o.d.STORE_BASE_URL +
              "curator/" +
              this.m_clanAccountID +
              "/admin/ajaxmanagerssfeed";
            let n = yield s.a.post(a, r, { withCredentials: !0 });
            return (
              1 == n.data.success &&
                Object(i.G)(() => {
                  (this.m_strRSSGID = n.data.gid),
                    (this.m_strRSSFeedURL = e),
                    (this.m_nPollIntervalSeconds = t);
                }),
              n.data
            );
          });
        }
        UpdateAutomation(e) {
          return Object(a.a)(this, void 0, void 0, function* () {
            return this.CreateOrUpdateRSSNewFeed(
              this.m_strRSSFeedURL,
              e ? 300 : 0
            );
          });
        }
        CheckForNewUpdate() {
          return Object(a.a)(this, void 0, void 0, function* () {
            if (this.m_strRSSGID) {
              let e = new FormData();
              e.append("sessionid", o.d.SESSIONID),
                e.append("gid", this.m_strRSSGID);
              const t =
                o.d.STORE_BASE_URL +
                "curator/" +
                this.m_clanAccountID +
                "/admin/ajaxcheckfornews";
              yield s.a.post(t, e, { withCredentials: !0 });
            }
          });
        }
        CreatePost(e, t) {
          return Object(a.a)(this, void 0, void 0, function* () {
            if (!this.BIsLoggedIn())
              return (
                console.error(
                  "CreatePartnerFromPreviewPost: User not logged in"
                ),
                null
              );
            if (!this.m_strRSSGID)
              return (
                console.error(
                  "CreatePartnerFromPreviewPost: Need to create a news feed first"
                ),
                null
              );
            let r = new c.a();
            r.set_gid(e.post.gid),
              r.set_news_feed_gid(this.m_strRSSGID),
              r.set_title(e.post.title),
              r.set_url(e.post.url),
              r.set_author(e.post.author),
              r.set_rtime_date(e.post.rtime_date),
              r.set_contents(e.post.contents),
              r.set_commited(e.post.commited),
              r.set_deleted(e.post.deleted),
              r.set_tags(e.post.tags),
              r.set_appids(e.post.appids),
              r.set_recommendation_state(e.post.recommendation_state),
              r.set_received_for_free(e.post.received_for_free),
              r.set_received_compensation(e.post.received_compensation),
              r.set_blurb(e.post.blurb);
            const a = d.b.Init(c.d);
            a.Body().set_post(r), a.Body().set_draft(t);
            let n = yield c.e.PublishPartnerEvent(
              S.Get().GetCuratorTransport(),
              a
            );
            return (
              1 != n.GetEResult()
                ? console.error(
                    "CreatePost error: " + n.GetEMsg() + " " + n.GetEResult()
                  )
                : (Object(i.G)(() => {
                    let t = {
                      url: e.post.url,
                      clan_event_gid: n.Body().clan_event_gid(),
                      news_post_gid: n.Body().news_post_gid(),
                    };
                    this.m_mapURLToPosted.set(e.post.url, t);
                  }),
                  u.b.LoadPartnerEventFromClanEventGIDAndClanSteamID(
                    this.m_clanSteamID,
                    n.Body().clan_event_gid(),
                    0
                  )),
              n
            );
          });
        }
      }
      Object(a.b)([i.C], b.prototype, "m_strRSSFeedURL", void 0),
        Object(a.b)([i.C], b.prototype, "m_strRSSGID", void 0),
        Object(a.b)([i.C], b.prototype, "m_rtimeRSSLastChecked", void 0),
        Object(a.b)([i.C], b.prototype, "m_nPollIntervalSeconds", void 0),
        Object(a.b)([i.C], b.prototype, "m_eRSSFeedLanguage", void 0),
        Object(a.b)([i.C], b.prototype, "m_eCuratorLanguage", void 0),
        Object(a.b)([i.C], b.prototype, "m_mapURLToPosted", void 0);
      class S {
        constructor() {
          (this.m_mapClanAccountToAdmin = new Map()),
            (this.m_defaultAdmin = void 0),
            (this.m_mapClanToEventRSSStats = new Map()),
            (this.m_setPendingClanInfo = new Set()),
            (this.m_cClanInfoRequestsInFlight = 0);
        }
        GetCuratorTransport() {
          return (
            Object(h.a)(
              this.m_transport,
              "Expects Transpoate to be initialized but it is now"
            ),
            this.m_transport
          );
        }
        GetDefaultAdmin() {
          return this.m_defaultAdmin;
        }
        GetRSSAdminStats(e) {
          return this.m_mapClanToEventRSSStats.get(e);
        }
        static Get() {
          return (
            S.s_CuratorAdminStore ||
              ((S.s_CuratorAdminStore = new S()),
              S.s_CuratorAdminStore.Init(),
              "dev" === o.d.WEB_UNIVERSE &&
                (window.g_CuratorAdminStore = S.s_CuratorAdminStore)),
            S.s_CuratorAdminStore
          );
        }
        Init() {
          let e = Object(o.h)("curatoradmin", "application_config");
          this.ValidateStoreDefault(e) &&
            ((this.m_defaultAdmin = new b(e)),
            this.m_mapClanAccountToAdmin.set(e.clanid, this.m_defaultAdmin)),
            this.ValidateWebAPI(e) &&
              (this.m_transport = new l.a(
                o.d.WEBAPI_BASE_URL,
                e.webapi_token
              ).GetServiceTransport());
        }
        ValidateStoreDefault(e) {
          return e && "object" == typeof e && "number" == typeof e.clanid;
        }
        ValidateWebAPI(e) {
          return e && "string" == typeof e.webapi_token;
        }
        BIsLoggedIn() {
          return o.k.logged_in;
        }
        BHavePendingInfoRequests() {
          return (
            this.m_setPendingClanInfo.size > 0 ||
            this.m_cClanInfoRequestsInFlight > 0
          );
        }
        BIsLoadingClanID(e) {
          return this.m_setPendingClanInfo.has(e);
        }
        BHasClanIDLoaded(e) {
          return this.m_mapClanAccountToAdmin.has(e);
        }
        GetRSSAdminForClanAccountID(e) {
          return this.m_mapClanAccountToAdmin.get(e);
        }
        QueueCuratorAdminInfoLoad(e) {
          return Object(a.a)(this, void 0, void 0, function* () {
            return e
              ? this.m_mapClanAccountToAdmin.has(e)
                ? Promise.resolve()
                : (this.m_setPendingClanInfo.size ||
                    ((this.m_PendingClanInfoPromise = new Promise(
                      (e) => (this.m_PendingClanInfoResolve = e)
                    )),
                    window.setTimeout(() => this.FlushPendingClanInfo(), 25)),
                  this.m_setPendingClanInfo.add(e),
                  this.m_PendingClanInfoPromise)
              : (Object(h.a)(
                  !e,
                  "unexpected clanid of zero or undefined: " + e
                ),
                Promise.resolve());
          });
        }
        FlushPendingClanInfo() {
          return Object(a.a)(this, void 0, void 0, function* () {
            const e = this.m_PendingClanInfoResolve,
              t = Array.from(this.m_setPendingClanInfo);
            (this.m_PendingClanInfoPromise = void 0),
              (this.m_PendingClanInfoResolve = void 0),
              this.m_setPendingClanInfo.clear(),
              yield this.LoadBatchedClanRSSAdminInfo(t),
              e();
          });
        }
        EnsureClanInfoLoaded(e) {
          const t = e.filter(
            (e) =>
              !this.m_mapClanAccountToAdmin.has(e) &&
              this.m_setPendingClanInfo.has(e)
          );
          return (
            t.forEach((e) => this.QueueCuratorAdminInfoLoad(e)),
            t.length > 0 && this.m_PendingClanInfoPromise
              ? this.m_PendingClanInfoPromise
              : Promise.resolve()
          );
        }
        LoadBatchedClanRSSAdminInfo(e) {
          return Object(a.a)(this, void 0, void 0, function* () {
            this.m_cClanInfoRequestsInFlight++;
            let t = e.filter((e) => !this.m_mapClanAccountToAdmin.has(e));
            for (; t.length > 0; ) {
              const r = Math.min(50, t.length);
              t.slice(0, r);
              t = t.slice(r);
              try {
                const t =
                    o.d.STORE_BASE_URL + "events_admin/ajaxgetrssadmininfo",
                  r = { clanids: e },
                  a = yield s.a.get(t, { params: r, withCredentials: !0 });
                if (
                  a &&
                  a.data &&
                  1 == a.data.success &&
                  a.data.rss_admin_infos &&
                  Array.isArray(a.data.rss_admin_infos)
                )
                  Object(i.G)(() => {
                    a.data.rss_admin_infos.forEach((e) => {
                      this.m_mapClanAccountToAdmin.set(e.clanid, new b(e));
                    }),
                      a.data.rss_event_stats.forEach((e) => {
                        this.m_mapClanToEventRSSStats.set(e.clan_account_id, e);
                      });
                  });
                else {
                  const e = Object(p.a)(a.data || {});
                  console.error(
                    "LoadBatchedClanRSSAdminInfo error:" + e.strErrorMsg,
                    e
                  );
                }
              } catch (e) {
                const t = Object(p.a)(e);
                console.error(
                  "LoadBatchedClanRSSAdminInfo catched error:" + t.strErrorMsg,
                  t
                );
              }
            }
            this.m_cClanInfoRequestsInFlight--;
          });
        }
      }
      Object(a.b)(
        [i.C.shallow],
        S.prototype,
        "m_mapClanAccountToAdmin",
        void 0
      ),
        Object(a.b)(
          [i.C.shallow],
          S.prototype,
          "m_mapClanToEventRSSStats",
          void 0
        );
    },
    A2AY: function (e, t, r) {
      e.exports = {
        Ctn: "managerss_Ctn_1cSpO",
        RssInput: "managerss_RssInput_8NQ9L",
        PreviewListCtn: "managerss_PreviewListCtn_HRcOM",
        PostCtn: "managerss_PostCtn_3MI2h",
        PostTitle: "managerss_PostTitle_1Zsns",
        ActivePost: "managerss_ActivePost_h-qBF",
        PostDate: "managerss_PostDate_2vXmu",
        ErrorPost: "managerss_ErrorPost_aBLy2",
        PostDraft: "managerss_PostDraft_10_gL",
        PostStaged: "managerss_PostStaged_nNzd6",
        PreviewListBtn: "managerss_PreviewListBtn_3NT8s",
        PreviewButtons: "managerss_PreviewButtons_3lbyc",
        UrlSettingCtn: "managerss_UrlSettingCtn_iN4At",
        Error: "managerss_Error_1ZZ51",
        DialogPostTitle: "managerss_DialogPostTitle_1XamD",
        DashboardBtn: "managerss_DashboardBtn_2Hlrm",
        RawRSS: "managerss_RawRSS_2mOAh",
        ButtonCtn: "managerss_ButtonCtn_13jSB",
        PreviewBtn: "managerss_PreviewBtn_3HssD",
        ViewRaw: "managerss_ViewRaw_2jvHr",
        LanguageRow: "managerss_LanguageRow_g_9tL",
        LanguageTitle: "managerss_LanguageTitle_2jkBi",
        LanguageSet: "managerss_LanguageSet_2zsMr",
      };
    },
    hJ1w: function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return o;
      }),
        r.d(t, "c", function () {
          return c;
        }),
        r.d(t, "d", function () {
          return _;
        }),
        r.d(t, "b", function () {
          return p;
        }),
        r.d(t, "e", function () {
          return S;
        });
      var a = r("hRO2"),
        n = r("OS8t");
      const s = a.Message;
      class i extends s {
        constructor(e = null) {
          super(),
            i.prototype.gid || n.a(i.M()),
            s.initialize(this, e, 0, -1, [5], null);
        }
        static M() {
          return (
            i.sm_m ||
              (i.sm_m = {
                proto: i,
                fields: {
                  gid: {
                    n: 1,
                    br: n.d.readFixed64String,
                    bw: n.h.writeFixed64String,
                  },
                  name: { n: 2, br: n.d.readString, bw: n.h.writeString },
                  type: { n: 3, d: 0, br: n.d.readUint32, bw: n.h.writeUint32 },
                  url: { n: 4, br: n.d.readString, bw: n.h.writeString },
                  associated_apps: {
                    n: 5,
                    r: !0,
                    q: !0,
                    br: n.d.readUint32,
                    bw: n.h.writeRepeatedUint32,
                  },
                  poll_interval: {
                    n: 6,
                    d: 300,
                    br: n.d.readUint32,
                    bw: n.h.writeUint32,
                  },
                  kv_description: {
                    n: 7,
                    br: n.d.readString,
                    bw: n.h.writeString,
                  },
                  kv_filter: { n: 8, br: n.d.readString, bw: n.h.writeString },
                  publish_to_clan_account_id: {
                    n: 9,
                    br: n.d.readUint32,
                    bw: n.h.writeUint32,
                  },
                  language: { n: 10, br: n.d.readUint32, bw: n.h.writeUint32 },
                  last_error: {
                    n: 11,
                    br: n.d.readUint32,
                    bw: n.h.writeUint32,
                  },
                  last_update: {
                    n: 12,
                    br: n.d.readUint32,
                    bw: n.h.writeUint32,
                  },
                  last_checked: {
                    n: 13,
                    br: n.d.readUint32,
                    bw: n.h.writeUint32,
                  },
                },
              }),
            i.sm_m
          );
        }
        static MBF() {
          return i.sm_mbf || (i.sm_mbf = n.e(i.M())), i.sm_mbf;
        }
        toObject(e = !1) {
          return i.toObject(e, this);
        }
        static toObject(e, t) {
          return n.g(i.M(), e, t);
        }
        static fromObject(e) {
          return n.c(i.M(), e);
        }
        static deserializeBinary(e) {
          let t = new a.BinaryReader(e),
            r = new i();
          return i.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.b(i.MBF(), e, t);
        }
        serializeBinary() {
          var e = new a.BinaryWriter();
          return i.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.f(i.M(), e, t);
        }
        serializeBase64String() {
          var e = new a.BinaryWriter();
          return i.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CNewsFeedDef";
        }
      }
      class o extends s {
        constructor(e = null) {
          super(),
            o.prototype.gid || n.a(o.M()),
            s.initialize(this, e, 0, -1, [11], null);
        }
        static M() {
          return (
            o.sm_m ||
              (o.sm_m = {
                proto: o,
                fields: {
                  gid: {
                    n: 1,
                    br: n.d.readFixed64String,
                    bw: n.h.writeFixed64String,
                  },
                  news_feed_gid: {
                    n: 2,
                    br: n.d.readFixed64String,
                    bw: n.h.writeFixed64String,
                  },
                  title: { n: 3, br: n.d.readString, bw: n.h.writeString },
                  url: { n: 4, br: n.d.readString, bw: n.h.writeString },
                  author: { n: 5, br: n.d.readString, bw: n.h.writeString },
                  rtime_date: { n: 6, br: n.d.readUint32, bw: n.h.writeUint32 },
                  contents: { n: 7, br: n.d.readString, bw: n.h.writeString },
                  commited: { n: 8, br: n.d.readBool, bw: n.h.writeBool },
                  deleted: { n: 9, br: n.d.readBool, bw: n.h.writeBool },
                  tags: { n: 10, br: n.d.readString, bw: n.h.writeString },
                  appids: {
                    n: 11,
                    r: !0,
                    q: !0,
                    br: n.d.readUint32,
                    bw: n.h.writeRepeatedUint32,
                  },
                  recommendation_state: {
                    n: 12,
                    br: n.d.readEnum,
                    bw: n.h.writeEnum,
                  },
                  received_compensation: {
                    n: 13,
                    br: n.d.readBool,
                    bw: n.h.writeBool,
                  },
                  received_for_free: {
                    n: 14,
                    br: n.d.readBool,
                    bw: n.h.writeBool,
                  },
                  blurb: { n: 15, br: n.d.readString, bw: n.h.writeString },
                  event_subtitle: {
                    n: 16,
                    br: n.d.readString,
                    bw: n.h.writeString,
                  },
                  event_summary: {
                    n: 17,
                    br: n.d.readString,
                    bw: n.h.writeString,
                  },
                },
              }),
            o.sm_m
          );
        }
        static MBF() {
          return o.sm_mbf || (o.sm_mbf = n.e(o.M())), o.sm_mbf;
        }
        toObject(e = !1) {
          return o.toObject(e, this);
        }
        static toObject(e, t) {
          return n.g(o.M(), e, t);
        }
        static fromObject(e) {
          return n.c(o.M(), e);
        }
        static deserializeBinary(e) {
          let t = new a.BinaryReader(e),
            r = new o();
          return o.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.b(o.MBF(), e, t);
        }
        serializeBinary() {
          var e = new a.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.f(o.M(), e, t);
        }
        serializeBase64String() {
          var e = new a.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CNewsFeedPostDef";
        }
      }
      class l extends s {
        constructor(e = null) {
          super(),
            l.prototype.converted_content || n.a(l.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            l.sm_m ||
              (l.sm_m = {
                proto: l,
                fields: {
                  converted_content: {
                    n: 1,
                    br: n.d.readString,
                    bw: n.h.writeString,
                  },
                  found_html: { n: 2, br: n.d.readBool, bw: n.h.writeBool },
                },
              }),
            l.sm_m
          );
        }
        static MBF() {
          return l.sm_mbf || (l.sm_mbf = n.e(l.M())), l.sm_mbf;
        }
        toObject(e = !1) {
          return l.toObject(e, this);
        }
        static toObject(e, t) {
          return n.g(l.M(), e, t);
        }
        static fromObject(e) {
          return n.c(l.M(), e);
        }
        static deserializeBinary(e) {
          let t = new a.BinaryReader(e),
            r = new l();
          return l.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.b(l.MBF(), e, t);
        }
        serializeBinary() {
          var e = new a.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.f(l.M(), e, t);
        }
        serializeBase64String() {
          var e = new a.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CNews_ConvertHTMLToBBCode_Response";
        }
      }
      class d extends s {
        constructor(e = null) {
          super(),
            d.prototype.rss_message || n.a(d.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            d.sm_m ||
              (d.sm_m = {
                proto: d,
                fields: {
                  rss_message: {
                    n: 1,
                    br: n.d.readString,
                    bw: n.h.writeString,
                  },
                  unique_id: { n: 2, br: n.d.readString, bw: n.h.writeString },
                  title: { n: 3, br: n.d.readString, bw: n.h.writeString },
                  desc: { n: 4, br: n.d.readString, bw: n.h.writeString },
                  jsondata: { n: 5, br: n.d.readString, bw: n.h.writeString },
                  post: { n: 6, c: o },
                  valid_post: { n: 7, br: n.d.readBool, bw: n.h.writeBool },
                  post_error_msg: {
                    n: 8,
                    br: n.d.readString,
                    bw: n.h.writeString,
                  },
                },
              }),
            d.sm_m
          );
        }
        static MBF() {
          return d.sm_mbf || (d.sm_mbf = n.e(d.M())), d.sm_mbf;
        }
        toObject(e = !1) {
          return d.toObject(e, this);
        }
        static toObject(e, t) {
          return n.g(d.M(), e, t);
        }
        static fromObject(e) {
          return n.c(d.M(), e);
        }
        static deserializeBinary(e) {
          let t = new a.BinaryReader(e),
            r = new d();
          return d.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.b(d.MBF(), e, t);
        }
        serializeBinary() {
          var e = new a.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.f(d.M(), e, t);
        }
        serializeBase64String() {
          var e = new a.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CNewsPartnerEventPreview";
        }
      }
      class c extends s {
        constructor(e = null) {
          super(),
            c.prototype.rss_url || n.a(c.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            c.sm_m ||
              (c.sm_m = {
                proto: c,
                fields: {
                  rss_url: { n: 1, br: n.d.readString, bw: n.h.writeString },
                  lang: { n: 2, br: n.d.readUint32, bw: n.h.writeUint32 },
                },
              }),
            c.sm_m
          );
        }
        static MBF() {
          return c.sm_mbf || (c.sm_mbf = n.e(c.M())), c.sm_mbf;
        }
        toObject(e = !1) {
          return c.toObject(e, this);
        }
        static toObject(e, t) {
          return n.g(c.M(), e, t);
        }
        static fromObject(e) {
          return n.c(c.M(), e);
        }
        static deserializeBinary(e) {
          let t = new a.BinaryReader(e),
            r = new c();
          return c.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.b(c.MBF(), e, t);
        }
        serializeBinary() {
          var e = new a.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.f(c.M(), e, t);
        }
        serializeBase64String() {
          var e = new a.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CNews_PreviewPartnerEvents_Request";
        }
      }
      class m extends s {
        constructor(e = null) {
          super(),
            m.prototype.rss_url || n.a(m.M()),
            s.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            m.sm_m ||
              (m.sm_m = {
                proto: m,
                fields: {
                  rss_url: { n: 1, br: n.d.readString, bw: n.h.writeString },
                  results: { n: 2, c: d, r: !0, q: !0 },
                  error_msg: { n: 3, br: n.d.readString, bw: n.h.writeString },
                },
              }),
            m.sm_m
          );
        }
        static MBF() {
          return m.sm_mbf || (m.sm_mbf = n.e(m.M())), m.sm_mbf;
        }
        toObject(e = !1) {
          return m.toObject(e, this);
        }
        static toObject(e, t) {
          return n.g(m.M(), e, t);
        }
        static fromObject(e) {
          return n.c(m.M(), e);
        }
        static deserializeBinary(e) {
          let t = new a.BinaryReader(e),
            r = new m();
          return m.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.b(m.MBF(), e, t);
        }
        serializeBinary() {
          var e = new a.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.f(m.M(), e, t);
        }
        serializeBase64String() {
          var e = new a.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CNews_PreviewPartnerEvents_Response";
        }
      }
      class u extends s {
        constructor(e = null) {
          super(),
            u.prototype.feeds || n.a(u.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            u.sm_m ||
              (u.sm_m = {
                proto: u,
                fields: { feeds: { n: 1, c: i, r: !0, q: !0 } },
              }),
            u.sm_m
          );
        }
        static MBF() {
          return u.sm_mbf || (u.sm_mbf = n.e(u.M())), u.sm_mbf;
        }
        toObject(e = !1) {
          return u.toObject(e, this);
        }
        static toObject(e, t) {
          return n.g(u.M(), e, t);
        }
        static fromObject(e) {
          return n.c(u.M(), e);
        }
        static deserializeBinary(e) {
          let t = new a.BinaryReader(e),
            r = new u();
          return u.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.b(u.MBF(), e, t);
        }
        serializeBinary() {
          var e = new a.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.f(u.M(), e, t);
        }
        serializeBase64String() {
          var e = new a.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CNews_GetNewsFeedByRepublishClan_Response";
        }
      }
      class _ extends s {
        constructor(e = null) {
          super(),
            _.prototype.post || n.a(_.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  post: { n: 1, c: o },
                  draft: { n: 2, br: n.d.readBool, bw: n.h.writeBool },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = n.e(_.M())), _.sm_mbf;
        }
        toObject(e = !1) {
          return _.toObject(e, this);
        }
        static toObject(e, t) {
          return n.g(_.M(), e, t);
        }
        static fromObject(e) {
          return n.c(_.M(), e);
        }
        static deserializeBinary(e) {
          let t = new a.BinaryReader(e),
            r = new _();
          return _.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.b(_.MBF(), e, t);
        }
        serializeBinary() {
          var e = new a.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.f(_.M(), e, t);
        }
        serializeBase64String() {
          var e = new a.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CNews_PublishPartnerEvent_Request";
        }
      }
      class h extends s {
        constructor(e = null) {
          super(),
            h.prototype.clan_event_gid || n.a(h.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
                fields: {
                  clan_event_gid: {
                    n: 1,
                    br: n.d.readFixed64String,
                    bw: n.h.writeFixed64String,
                  },
                  news_post_gid: {
                    n: 2,
                    br: n.d.readFixed64String,
                    bw: n.h.writeFixed64String,
                  },
                },
              }),
            h.sm_m
          );
        }
        static MBF() {
          return h.sm_mbf || (h.sm_mbf = n.e(h.M())), h.sm_mbf;
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, t) {
          return n.g(h.M(), e, t);
        }
        static fromObject(e) {
          return n.c(h.M(), e);
        }
        static deserializeBinary(e) {
          let t = new a.BinaryReader(e),
            r = new h();
          return h.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.b(h.MBF(), e, t);
        }
        serializeBinary() {
          var e = new a.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.f(h.M(), e, t);
        }
        serializeBase64String() {
          var e = new a.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CNews_PublishPartnerEvent_Response";
        }
      }
      class p extends s {
        constructor(e = null) {
          super(),
            p.prototype.news_feed_gid || n.a(p.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
                fields: {
                  news_feed_gid: {
                    n: 1,
                    br: n.d.readFixed64String,
                    bw: n.h.writeFixed64String,
                  },
                  start_index: {
                    n: 2,
                    d: 0,
                    br: n.d.readUint32,
                    bw: n.h.writeUint32,
                  },
                  amount: {
                    n: 3,
                    d: 100,
                    br: n.d.readUint32,
                    bw: n.h.writeUint32,
                  },
                },
              }),
            p.sm_m
          );
        }
        static MBF() {
          return p.sm_mbf || (p.sm_mbf = n.e(p.M())), p.sm_mbf;
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, t) {
          return n.g(p.M(), e, t);
        }
        static fromObject(e) {
          return n.c(p.M(), e);
        }
        static deserializeBinary(e) {
          let t = new a.BinaryReader(e),
            r = new p();
          return p.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.b(p.MBF(), e, t);
        }
        serializeBinary() {
          var e = new a.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.f(p.M(), e, t);
        }
        serializeBase64String() {
          var e = new a.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CNews_GetBatchPublishedPartnerEvent_Request";
        }
      }
      class b extends s {
        constructor(e = null) {
          super(),
            b.prototype.clan_account_id || n.a(b.M()),
            s.initialize(this, e, 0, -1, [3, 4, 5], null);
        }
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = {
                proto: b,
                fields: {
                  clan_account_id: {
                    n: 1,
                    br: n.d.readUint32,
                    bw: n.h.writeUint32,
                  },
                  news_feed_gid: {
                    n: 2,
                    br: n.d.readFixed64String,
                    bw: n.h.writeFixed64String,
                  },
                  clan_event_gid: {
                    n: 3,
                    r: !0,
                    q: !0,
                    br: n.d.readFixed64String,
                    bw: n.h.writeRepeatedFixed64String,
                  },
                  news_post_gid: {
                    n: 4,
                    r: !0,
                    q: !0,
                    br: n.d.readFixed64String,
                    bw: n.h.writeRepeatedFixed64String,
                  },
                  news_url: {
                    n: 5,
                    r: !0,
                    q: !0,
                    br: n.d.readString,
                    bw: n.h.writeRepeatedString,
                  },
                },
              }),
            b.sm_m
          );
        }
        static MBF() {
          return b.sm_mbf || (b.sm_mbf = n.e(b.M())), b.sm_mbf;
        }
        toObject(e = !1) {
          return b.toObject(e, this);
        }
        static toObject(e, t) {
          return n.g(b.M(), e, t);
        }
        static fromObject(e) {
          return n.c(b.M(), e);
        }
        static deserializeBinary(e) {
          let t = new a.BinaryReader(e),
            r = new b();
          return b.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.b(b.MBF(), e, t);
        }
        serializeBinary() {
          var e = new a.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.f(b.M(), e, t);
        }
        serializeBase64String() {
          var e = new a.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CNews_GetBatchPublishedPartnerEvent_Response";
        }
      }
      var S;
      !(function (e) {
        (e.ConvertHTMLToBBCode = function (e, t) {
          return e.SendMsg("News.ConvertHTMLToBBCode#1", t, l, {
            bConstMethod: !0,
            ePrivilege: 0,
            eWebAPIKeyRequirement: 1,
          });
        }),
          (e.PreviewPartnerEvents = function (e, t) {
            return e.SendMsg("News.PreviewPartnerEvents#1", t, m, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
          (e.GetNewsFeedByRepublishClan = function (e, t) {
            return e.SendMsg("News.GetNewsFeedByRepublishClan#1", t, u, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
          (e.PublishPartnerEvent = function (e, t) {
            return e.SendMsg("News.PublishPartnerEvent#1", t, h, {
              ePrivilege: 1,
            });
          }),
          (e.GetBatchPublishedPartnerEvent = function (e, t) {
            return e.SendMsg("News.GetBatchPublishedPartnerEvent#1", t, b, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          });
      })(S || (S = {}));
    },
    "r+ba": function (e, t, r) {
      e.exports = {
        "duration-app-launch": "800ms",
        Container: "partnereventwebrowembed_Container_2Jd3M",
        StoreHeaderAdjust: "partnereventwebrowembed_StoreHeaderAdjust_3YyCp",
        SectionButtonCtn: "partnereventwebrowembed_SectionButtonCtn_1HP0y",
        SectionButton: "partnereventwebrowembed_SectionButton_3n8sw",
        EventsSummariesCtn: "partnereventwebrowembed_EventsSummariesCtn_1snIw",
        LatestUpdateButtonCtn:
          "partnereventwebrowembed_LatestUpdateButtonCtn_2vEwZ",
        LatestUpdateIcon: "partnereventwebrowembed_LatestUpdateIcon_mq3RO",
        LatestUpdateButton: "partnereventwebrowembed_LatestUpdateButton_1TRFt",
      };
    },
    wjMc: function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return T;
      });
      var a = r("mrSG"),
        n = r("vDqi"),
        s = r.n(n),
        i = r("2l+k"),
        o = r("lkRc"),
        l = (r("kyHq"), r("kLLr"));
      r("AiWL"), r("UCyf");
      class d {
        constructor() {
          this.m_mapClanToRecommendation = new Map();
        }
        static Get() {
          return (
            d.s_CuratorStore ||
              ((d.s_CuratorStore = new d()),
              d.s_CuratorStore.Init(),
              (window.g_CuratorRecommendationStore = d.s_CuratorStore)),
            d.s_CuratorStore
          );
        }
        Init() {}
        GetReviewForApp(e, t) {
          if (this.m_mapClanToRecommendation.has(e.GetAccountID())) {
            return this.m_mapClanToRecommendation.get(e.GetAccountID()).get(t);
          }
        }
        BHasReviewForApp(e, t) {
          return Boolean(this.GetReviewForApp(e, t));
        }
        BHasReviewForAppByClanAccount(e, t) {
          let r = l.a.InitFromClanID(e);
          return Boolean(this.GetReviewForApp(r, t));
        }
        LoadAppRecommendation(e, t) {
          return Object(a.a)(this, void 0, void 0, function* () {
            this.m_mapClanToRecommendation.has(e.GetAccountID()) ||
              this.m_mapClanToRecommendation.set(e.GetAccountID(), new Map());
            let r = this.m_mapClanToRecommendation.get(e.GetAccountID());
            const a = [];
            if (
              (t.forEach((e) => {
                r.has(e) || a.push(e);
              }),
              a.length > 0)
            ) {
              const t =
                  o.d.STORE_BASE_URL +
                  "curator/" +
                  e.GetAccountID() +
                  "/admin/ajaxgetrecbyapps",
                n = yield s.a.get(t, {
                  params: {
                    appids: a,
                    cc: o.d.COUNTRY || "US",
                    l: o.d.LANGUAGE,
                  },
                }),
                i = n && n.data;
              i &&
                i.rec_app &&
                i.rec_app.forEach((e) => {
                  r.set(Number(e.appid), e);
                });
            }
          });
        }
      }
      var c = r("TyAF"),
        m = r("q1tI"),
        u = r.n(m),
        _ = r("mgoM"),
        h = r("3+zv"),
        p = (r("hJ1w"), r("6oCP")),
        b = r("Mgs7"),
        S = r("T27q"),
        g = r("fpVW"),
        v = r.n(g),
        w = r("r+ba"),
        R = r("Jqb/"),
        f = r("ka0M"),
        B = r("0OaU"),
        C = r("+d9t"),
        E = r("exH9"),
        O = r("X3Ds"),
        P = r("TLQK"),
        j = r("OS6B"),
        y = r("opsS"),
        M = r("A2AY"),
        F = (r("sOw0"), r("bxBv"), r("Kw0F")),
        L = r("bS9Q"),
        A = r("qP7j"),
        D = r.n(A),
        I = r("IzPI"),
        U = r("Z1oF");
      let G = class extends u.a.Component {
        constructor() {
          super(...arguments),
            (this.state = {
              strRssURL: i.a.Get().GetDefaultAdmin().GetRSSUrl(),
            }),
            (this.m_Admin = i.a.Get().GetDefaultAdmin());
        }
        OnChangeActualRSSURL(e) {
          this.setState({ strRssURL: e.target.value });
        }
        OnCreateOrSaveFeed(e) {
          e.preventDefault(),
            Object(f.d)(
              u.a.createElement(W, {
                strRSSUrl: this.state.strRssURL,
                admin: this.m_Admin,
              }),
              Object(O.o)(e)
            );
        }
        OnRevert(e) {
          e.preventDefault(),
            this.setState({ strRssURL: this.m_Admin.GetRSSUrl() });
        }
        render() {
          let e = Boolean(this.state.strRssURL === this.m_Admin.GetRSSUrl());
          if (void 0 !== window.Prototype)
            return window.location.reload(), null;
          const t = Object(_.f)(
              Object(_.d)(this.m_Admin.GetFeedLanguageHandleUnset())
            ),
            r = i.a.Get().GetDefaultAdmin();
          return u.a.createElement(
            "div",
            { className: Object(E.a)(M.Ctn) },
            u.a.createElement(
              "div",
              { className: "titleframe" },
              u.a.createElement(
                "h4",
                null,
                Object(P.f)("#CuratorAdmin_RSSFeed_title")
              ),
              u.a.createElement(
                "p",
                { className: "subtitle" },
                Object(P.f)("#CuratorAdmin_RSSFeed_desc")
              ),
              u.a.createElement(
                "p",
                null,
                Object(P.m)(
                  "#CuratorAdmin_RSSFeed_doc_link",
                  u.a.createElement(
                    "a",
                    {
                      href: "https://partner.steamgames.com/doc/store/news/rss",
                      target: "_blank",
                    },
                    Object(P.f)("#CuratorAdmin_RSSFeed_doc_link_text")
                  )
                )
              ),
              u.a.createElement(
                "p",
                { className: M.DashboardBtn },
                u.a.createElement(
                  C.a,
                  {
                    href:
                      o.d.COMMUNITY_BASE_URL +
                      "gid/" +
                      this.m_Admin.GetClanSteamID().ConvertTo64BitString() +
                      "/partnerevents/",
                    className: Object(E.a)(v.a.Button, v.a.Primary),
                  },
                  Object(P.f)("#RSSManager_EventDashBoard")
                )
              )
            ),
            u.a.createElement(
              "div",
              { className: "darkframe" },
              u.a.createElement(
                "div",
                { className: M.LanguageRow },
                u.a.createElement(
                  "span",
                  { className: M.LanguageTitle },
                  Object(P.f)("#CuratorAdmin_RSSFeed_lang_only")
                ),
                u.a.createElement("span", { className: M.LanguageSet }, t),
                u.a.createElement(
                  "a",
                  {
                    href:
                      o.d.COMMUNITY_BASE_URL +
                      "gid/" +
                      this.m_Admin.GetClanSteamID().ConvertTo64BitString() +
                      "/edit ",
                    target: "_blank",
                    className: Object(E.a)(v.a.Button, M.PreviewBtn),
                  },
                  Object(P.f)("#CuratorAdmin_RSSFeed_edit_language")
                )
              ),
              Boolean(
                this.m_Admin.GetFeedLanguageHandleUnset() !=
                  this.m_Admin.GetCuratorLanguage()
              ) &&
                u.a.createElement(
                  "div",
                  {
                    className: Object(E.a)(
                      M.LanguageRow,
                      D.a.WarningIconLayout
                    ),
                  },
                  u.a.createElement(
                    "span",
                    { className: M.LanguageTitle },
                    Object(P.f)(
                      "#CuratorAdmin_Curator_lang_only",
                      Object(P.f)(
                        "#Language_" +
                          Object(_.d)(this.m_Admin.GetCuratorLanguage())
                      ),
                      t
                    )
                  )
                ),
              u.a.createElement(
                "div",
                {
                  className: Object(E.a)(v.a.FlexRowContainer, M.UrlSettingCtn),
                },
                u.a.createElement(b.l, {
                  className: M.RssInpu,
                  type: "text",
                  name: "link_url",
                  id: "link_url",
                  value: this.state.strRssURL,
                  label: Object(P.f)("#CuratorAdmin_RSSFeed"),
                  placeholder: Object(P.f)("#CuratorAdmin_RSSFeed_placeholder"),
                  onChange: this.OnChangeActualRSSURL,
                  mustBeURL: !0,
                }),
                u.a.createElement(
                  "a",
                  {
                    className: "btn_green_white_innerfade btn_medium",
                    onClick: this.OnCreateOrSaveFeed,
                  },
                  u.a.createElement(
                    "span",
                    null,
                    Object(P.f)(e ? "#Button_Saved" : "#Button_Save")
                  )
                ),
                !e &&
                  u.a.createElement(
                    "a",
                    {
                      onClick: this.OnRevert,
                      className: "btn_grey_white_innerfade btn_medium",
                    },
                    Object(P.f)("#Button_Revert")
                  )
              ),
              u.a.createElement(z, { admin: r }),
              u.a.createElement("br", null),
              u.a.createElement(T, {
                strRssURL: this.state.strRssURL,
                admin: r,
              })
            )
          );
        }
      };
      Object(a.b)([y.a], G.prototype, "OnChangeActualRSSURL", null),
        Object(a.b)([y.a], G.prototype, "OnCreateOrSaveFeed", null),
        Object(a.b)([y.a], G.prototype, "OnRevert", null),
        (G = Object(a.b)([c.a], G));
      t.b = G;
      let T = class extends u.a.Component {
        constructor() {
          super(...arguments),
            (this.state = {
              strParseRssURL: this.props.strRssURL,
              bLoadingPreview: !1,
            }),
            (this.m_cancelSignal = s.a.CancelToken.source());
        }
        componentDidMount() {
          const { admin: e } = this.props;
          e.BHasFeedGID() &&
            e.BHasSavedRSSURL() &&
            e.GetRSSUrl() == this.props.strRssURL &&
            this.OnLoadPreview();
        }
        componentWillUnmount() {
          this.m_cancelSignal.cancel(
            "PreviewRSSViewAndControl component unmounted"
          );
        }
        RenderPreviews() {
          let e = this.props.admin,
            t = new Array();
          if (this.state.previews) {
            let r = this.state.previews;
            (r = r.sort((t, r) => {
              let a = e.MapArticleURLToClanEventGID(t.post.url),
                n = e.MapArticleURLToClanEventGID(r.post.url),
                s = a ? p.b.GetClanEventModel(a) : null,
                i = n ? p.b.GetClanEventModel(n) : null;
              return s && i
                ? i.postTime - s.postTime
                : s
                ? -1
                : i
                ? 1
                : r.post.rtime_date - t.post.rtime_date;
            })),
              r.forEach((r) => {
                t.push(
                  u.a.createElement(N, {
                    newsData: r,
                    admin: e,
                    key: "id: " + r.unique_id,
                    clanSteamID: e.GetClanSteamID(),
                    fnGetRSSUrl: this.GetRSSPreviewURL,
                  })
                );
              });
          }
          return t;
        }
        GetRSSPreviewURL() {
          return this.state.strParseRssURL;
        }
        OnLoadPreview() {
          this.setState(
            {
              bLoadingPreview: !0,
              previews: void 0,
              strPreviewURL: this.props.strRssURL,
              strPreviewErrorMsg: void 0,
            },
            this.DoLoadPreview
          );
        }
        DoLoadPreview() {
          return Object(a.a)(this, void 0, void 0, function* () {
            let e = this.props.admin,
              t = yield e.PreviewPartnerEventsFromRSSFeed(this.props.strRssURL);
            if (t && 1 == t.GetEResult()) {
              let r = t.Body().toObject();
              this.setState(
                { strParseRssURL: r.rss_url, bLoadingPreview: !0 },
                () =>
                  Object(a.a)(this, void 0, void 0, function* () {
                    yield e.FetchPublishedEvents(
                      Math.max(100, r.results.length)
                    );
                    let t = new Array(),
                      a = new Array();
                    if (
                      (r.results.forEach((r) => {
                        let n = e.MapArticleURLToClanEventGID(r.post.url);
                        n && t.push(n),
                          r.post.appids &&
                            1 === r.post.appids.length &&
                            0 !== r.post.recommendation_state &&
                            a.push(r.post.appids[0]);
                      }),
                      t.length > 0 &&
                        (yield p.b.LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs(
                          t,
                          null,
                          this.m_cancelSignal
                        )),
                      a.length > 0)
                    ) {
                      const t = e.GetClanSteamID();
                      yield d.Get().LoadAppRecommendation(t, a);
                    }
                    this.setState({
                      previews: r.results,
                      bLoadingPreview: void 0,
                    });
                  })
              );
            } else
              this.setState({
                bLoadingPreview: void 0,
                strPreviewErrorMsg: Object(P.f)(
                  "#Error_Description",
                  t.GetEResult(),
                  t.Hdr().error_message()
                ),
              });
          });
        }
        render() {
          const e = this.RenderPreviews();
          let t = this.props.admin;
          return u.a.createElement(
            "div",
            null,
            Boolean(
              !this.state.bLoadingPreview &&
                this.state.strPreviewURL !== this.props.strRssURL
            ) &&
              u.a.createElement(
                "div",
                { className: M.PreviewListBtn },
                u.a.createElement(
                  b.d,
                  {
                    disabled: !b.l.validateUrl(this.props.strRssURL),
                    onClick: this.OnLoadPreview,
                  },
                  Object(P.f)("#CuratorAdmin_RSSFeed_preview")
                )
              ),
            this.state.bLoadingPreview &&
              u.a.createElement(B.a, {
                string: Object(P.f)("#Loading"),
                size: "medium",
                position: "center",
              }),
            this.state.strPreviewErrorMsg &&
              u.a.createElement(
                "div",
                { className: v.a.ErrorMsg },
                this.state.strPreviewErrorMsg
              ),
            Boolean(e.length > 0) &&
              u.a.createElement(
                "div",
                null,
                u.a.createElement(
                  "p",
                  null,
                  Object(P.f)(
                    "#RSSManager_PreviewInfo",
                    this.state.strPreviewURL
                  )
                ),
                u.a.createElement("div", { className: M.PreviewListCtn }, e),
                u.a.createElement(
                  "p",
                  { className: M.DashboardBtn },
                  u.a.createElement(
                    C.a,
                    {
                      href:
                        o.d.COMMUNITY_BASE_URL +
                        "gid/" +
                        t.GetClanSteamID().ConvertTo64BitString() +
                        "/partnerevents/",
                      className: Object(E.a)(v.a.Button, v.a.Primary),
                    },
                    Object(P.f)("#RSSManager_EventDashBoard")
                  )
                )
              )
          );
        }
      };
      Object(a.b)([y.a], T.prototype, "GetRSSPreviewURL", null),
        Object(a.b)([y.a], T.prototype, "OnLoadPreview", null),
        (T = Object(a.b)([c.a], T));
      let z = class extends u.a.Component {
        constructor() {
          super(...arguments), (this.state = {});
        }
        OnToggleChannelAutomation(e) {
          e
            ? (this.setState({ strErrorMessage: void 0 }),
              Object(f.d)(
                u.a.createElement(W, {
                  strRSSUrl: this.props.admin.GetRSSUrl(),
                  admin: this.props.admin,
                  bActivatePooling: !0,
                }),
                window
              ))
            : this.setState(
                {
                  strErrorMessage: void 0,
                  strReasonWaiting: Object(P.f)("#Saving"),
                },
                this.BDisableAutomation
              );
        }
        BDisableAutomation() {
          return Object(a.a)(this, void 0, void 0, function* () {
            this.props.admin
              .UpdateAutomation(!1)
              .catch(() =>
                this.setState({
                  strErrorMessage: Object(P.f)(
                    "#RSSManager_Status_Automation_DisableFailed"
                  ),
                })
              )
              .finally(() => this.setState({ strReasonWaiting: void 0 }));
          });
        }
        OnQueueScan(e) {
          return Object(a.a)(this, void 0, void 0, function* () {
            this.setState({
              strReasonWaiting: Object(P.f)("#CuratorAdmin_RSSFeed_scannow"),
            }),
              this.props.admin
                .CheckForNewUpdate()
                .then(() =>
                  Object(f.d)(
                    u.a.createElement(R.e, {
                      strTitle: Object(P.f)("#CuratorAdmin_RSSFeed_scannow"),
                      strDescription: Object(P.f)(
                        "#CuratorAdmin_RSSFeed_queued"
                      ),
                    }),
                    Object(O.o)(e)
                  )
                )
                .catch((t) =>
                  Object(f.d)(
                    u.a.createElement(R.g, {
                      strTitle: Object(P.f)("#CuratorAdmin_RSSFeed_scannow"),
                      strDescription: Object(j.a)(t),
                    }),
                    Object(O.o)(e)
                  )
                )
                .finally(() => this.setState({ strReasonWaiting: void 0 }));
          });
        }
        render() {
          return this.props.admin.BHasSavedRSSURL()
            ? u.a.createElement(
                "div",
                null,
                Boolean(this.state.strReasonWaiting) &&
                  u.a.createElement(B.a, {
                    size: "medium",
                    string: this.state.strReasonWaiting,
                  }),
                Boolean(this.state.strErrorMessage) &&
                  u.a.createElement(
                    "div",
                    { className: M.Error },
                    this.state.strErrorMessage
                  ),
                u.a.createElement(b.p, {
                  onChange: this.OnToggleChannelAutomation,
                  label: Object(P.f)("#RSSManager_Status_Automation_Desc"),
                  checked: this.props.admin.BIsAutomationEnabled(),
                  description: "",
                }),
                this.props.admin.BIsAutomationEnabled() &&
                  u.a.createElement(
                    "p",
                    null,
                    Object(P.f)("#CuratorAdmin_RSSFeed_lastscanned"),
                    " ",
                    Object(P.k)(this.props.admin.GetRSSLastRtimeChecked(), !1),
                    "  @ ",
                    Object(U.f)(this.props.admin.GetRSSLastRtimeChecked(), {
                      bForce24HourClock: !1,
                    }),
                    " ",
                    u.a.createElement(
                      "a",
                      { onClick: this.OnQueueScan },
                      u.a.createElement(
                        "span",
                        null,
                        Object(P.f)("#CuratorAdmin_RSSFeed_scannow")
                      )
                    )
                  )
              )
            : null;
        }
      };
      Object(a.b)([y.a], z.prototype, "OnToggleChannelAutomation", null),
        Object(a.b)([y.a], z.prototype, "OnQueueScan", null),
        (z = Object(a.b)([c.a], z));
      let N = class extends u.a.Component {
        constructor() {
          super(...arguments),
            (this.state = {
              clan_event_gid: this.props.admin.MapArticleURLToClanEventGID(
                this.props.newsData.post.url
              ),
              bLoadingPartnerEvent: Boolean(
                this.props.admin.MapArticleURLToClanEventGID(
                  this.props.newsData.post.url
                )
              ),
            });
        }
        componentDidMount() {
          this.DoPartnerEventLoad();
        }
        DoPartnerEventLoad() {
          return Object(a.a)(this, void 0, void 0, function* () {
            if (this.state.clan_event_gid) {
              let e = this.props.admin.GetClanSteamID(),
                t = p.b.GetClanEventModel(this.state.clan_event_gid);
              t ||
                (t = yield p.b.LoadHiddenPartnerEvent(
                  e,
                  this.state.clan_event_gid
                )),
                this.setState({
                  bLoadingPartnerEvent: !1,
                  existingEventModel: t,
                });
            }
          });
        }
        OnOpenPreviewAsPartnerEvent(e) {
          const { newsData: t, clanSteamID: r } = this.props;
          let a = new h.q();
          (a.GID = "PreviewPartnerEventRow_0"),
            (a.clanSteamID = r),
            (a.postTime = Date.now() / 1e3),
            (a.startTime = Date.now() / 1e3),
            (a.type = 28),
            a.vecTags.push("auto_rssfeed"),
            a.vecTags.push("curator"),
            a.vecTags.push("curator_public"),
            a.name.set(0, t.title),
            a.description.set(0, t.desc),
            this.ValidateJSONDefault(t.jsondata) && (a.jsondata = t.jsondata),
            a.jsondata.read_more_link ||
              (a.jsondata.read_more_link = t.unique_id);
          let n = this.props.admin.GetFeedLanguageHandleUnset();
          !a.jsondata.localized_summary &&
            t.post.event_summary &&
            ((a.jsondata.localized_summary = Object(F.e)(
              a.jsondata.localized_summary,
              30,
              null
            )),
            (a.jsondata.localized_summary[0] = t.post.event_summary),
            0 != n && (a.jsondata.localized_summary[n] = t.post.event_summary)),
            !a.jsondata.localized_subtitle &&
              t.post.event_subtitle &&
              ((a.jsondata.localized_subtitle = Object(F.e)(
                a.jsondata.localized_subtitle,
                30,
                null
              )),
              (a.jsondata.localized_subtitle[0] = t.post.event_subtitle),
              0 != n &&
                (a.jsondata.localized_subtitle[n] = t.post.event_subtitle)),
            this.ShowModalEvent(a);
        }
        OnViewEvent() {
          this.ShowModalEvent(p.b.GetClanEventModel(this.state.clan_event_gid));
        }
        ShowModalEvent(e) {
          let t = document.getElementById("curator_header_area_ctn_id");
          t &&
            (e
              ? t.classList.add("curator_header_area_ctn_hideme")
              : t.classList.remove("curator_header_area_ctn_hideme")),
            this.setState({ eventModelForPreviewNow: e });
        }
        ValidateJSONDefault(e) {
          const t = e;
          return !(!t || Array.isArray(t) || "object" != typeof t);
        }
        OnPostNewsEvent(e) {
          const { newsData: t, fnGetRSSUrl: r } = this.props;
          Object(f.d)(
            u.a.createElement(W, {
              newsData: t,
              admin: this.props.admin,
              strRSSUrl: r(),
              fnClanEventGID: this.OnClanEventCreateSuccess,
            }),
            Object(O.o)(e)
          );
        }
        OnUpdateNewsEvent(e) {
          const { newsData: t, fnGetRSSUrl: r } = this.props;
          Object(f.d)(
            u.a.createElement(W, {
              newsData: t,
              strRSSUrl: r(),
              admin: this.props.admin,
              fnClanEventGID: this.OnClanEventCreateSuccess,
              bUpdatePost: !0,
            }),
            Object(O.o)(e)
          );
        }
        HideModalEvent() {
          this.state.eventModelForPreviewNow && this.ShowModalEvent(void 0);
        }
        OnClanEventCreateSuccess(e) {
          this.setState(
            { clan_event_gid: e, bLoadingPartnerEvent: !0 },
            this.DoPartnerEventLoad
          );
        }
        OnShowRawRSS(e) {
          const t = this.props.newsData.rss_message,
            r = (() => {
              const e = t.match(/<entry[^>]*>([\s\S]*)<\/entry>/m);
              if (!e) return t;
              const r = e[1].match(/<content[^>]*>[\s\S]*<\/content>/m);
              return r ? Object(L.b)(r[0]) : e[0];
            })();
          Object(f.d)(
            u.a.createElement(
              R.e,
              {
                bAlertDialog: !0,
                strTitle: Object(P.f)("#RSSManager_PostEvent_ViewRaw"),
              },
              u.a.createElement("textarea", {
                className: M.RawRSS,
                value: r,
                disabled: !0,
              })
            ),
            Object(O.o)(e)
          );
        }
        render() {
          const { newsData: e } = this.props,
            {
              clan_event_gid: t,
              existingEventModel: r,
              bLoadingPartnerEvent: a,
            } = this.state;
          let n = this.props.admin,
            s = n.GetClanSteamID(),
            i = r && r.BIsStagedEvent(),
            l = e.post.appids && 1 == e.post.appids.length && e.post.appids[0],
            c =
              0 !== e.post.recommendation_state &&
              l &&
              d.Get().BHasReviewForApp(s, l),
            m = "";
          if (r) {
            const e =
              r.GetVisibilityStartTimeAndDateUnixSeconds() ||
              r.GetPostTimeAndDateUnixSeconds();
            m =
              Object(P.n)(e) +
              " @ " +
              Object(U.f)(e, { bForce24HourClock: !1 });
          }
          return u.a.createElement(
            "div",
            {
              className: Object(E.a)(
                M.PostCtn,
                Boolean(t) ? M.ActivePost : "",
                Boolean(e.valid_post) ? "" : M.ErrorPost
              ),
            },
            u.a.createElement("span", { className: M.PostTitle }, e.title),
            u.a.createElement("br", null),
            Boolean(r) &&
              u.a.createElement(
                u.a.Fragment,
                null,
                Boolean(r.BIsVisibleEvent()) &&
                  u.a.createElement(
                    "span",
                    { className: M.PostDate },
                    Object(P.f)("#RSSManager_PostEvent_PostedDate", m)
                  ),
                Boolean(!r.BIsVisibleEvent()) &&
                  u.a.createElement(
                    "span",
                    {
                      className: Object(E.a)(
                        M.PostDraft,
                        i ? M.PostStaged : ""
                      ),
                    },
                    Object(P.f)(
                      i
                        ? "#RSSManager_PostEvent_Staged"
                        : "#RSSManager_PostEvent_Draft",
                      m
                    )
                  )
              ),
            Boolean(!e.valid_post && e.post_error_msg) &&
              u.a.createElement(
                "div",
                { className: D.a.ErrorStylesBackground },
                Object(P.f)("#Error_Generic_Label"),
                " ",
                Object(P.f)(e.post_error_msg)
              ),
            u.a.createElement(
              "div",
              { className: M.ButtonCtn },
              Boolean(t)
                ? u.a.createElement(
                    u.a.Fragment,
                    null,
                    Boolean(a)
                      ? u.a.createElement(B.a, {
                          string: Object(P.f)("#Loading"),
                          size: "small",
                          position: "center",
                        })
                      : u.a.createElement(
                          "div",
                          {
                            onClick: this.OnViewEvent,
                            className: Object(E.a)(v.a.Button, M.PreviewBtn),
                          },
                          Object(P.f)("#RSSManager_PostEvent_ViewEvent")
                        ),
                    u.a.createElement(
                      "a",
                      {
                        className: Object(E.a)(v.a.Button, M.PreviewBtn),
                        href:
                          o.d.COMMUNITY_BASE_URL +
                          "gid/" +
                          n.GetClanSteamID().ConvertTo64BitString() +
                          "/partnerevents/edit/" +
                          this.state.clan_event_gid,
                      },
                      Object(P.f)("#RSSManager_PostEvent_EditEvent")
                    ),
                    u.a.createElement(
                      "div",
                      {
                        onClick: this.OnUpdateNewsEvent,
                        className: Object(E.a)(v.a.Button, M.PreviewBtn),
                      },
                      Object(P.f)("#RSSManager_PostEvent_UpdateEvent")
                    ),
                    c &&
                      u.a.createElement(
                        "a",
                        {
                          className: Object(E.a)(v.a.Button, M.PreviewBtn),
                          href: Object(I.h)(
                            o.d.STORE_BASE_URL +
                              "app/" +
                              e.post.appids[0] +
                              "/?curator_clanid=" +
                              s.GetAccountID()
                          ),
                        },
                        Object(P.f)("#RSSManager_SeeReview")
                      )
                  )
                : u.a.createElement(
                    u.a.Fragment,
                    null,
                    u.a.createElement(
                      "div",
                      {
                        onClick: this.OnOpenPreviewAsPartnerEvent,
                        className: Object(E.a)(v.a.Button, M.PreviewBtn),
                      },
                      Object(P.f)("#CuratorAdmin_RSSFeed_col_preview_event")
                    ),
                    u.a.createElement(
                      "div",
                      {
                        onClick: this.OnPostNewsEvent,
                        className: Object(E.a)(v.a.Button, M.PreviewBtn),
                      },
                      Object(P.f)("#CuratorAdmin_RSSFeed_col_create_event")
                    )
                  ),
              Boolean(e.rss_message && e.rss_message.length > 0) &&
                u.a.createElement(
                  "div",
                  { onClick: this.OnShowRawRSS, className: M.ViewRaw },
                  Object(P.f)("#RSSManager_PostEvent_ViewRaw")
                ),
              Boolean(this.state.eventModelForPreviewNow) &&
                u.a.createElement(
                  R.k,
                  { className: w.StoreHeaderAdjust },
                  u.a.createElement(
                    "div",
                    null,
                    u.a.createElement(S.b, {
                      event: this.state.eventModelForPreviewNow,
                      fnClose: this.HideModalEvent,
                    })
                  )
                )
            )
          );
        }
      };
      Object(a.b)([y.a], N.prototype, "DoPartnerEventLoad", null),
        Object(a.b)([y.a], N.prototype, "OnOpenPreviewAsPartnerEvent", null),
        Object(a.b)([y.a], N.prototype, "OnViewEvent", null),
        Object(a.b)([y.a], N.prototype, "OnPostNewsEvent", null),
        Object(a.b)([y.a], N.prototype, "OnUpdateNewsEvent", null),
        Object(a.b)([y.a], N.prototype, "HideModalEvent", null),
        Object(a.b)([y.a], N.prototype, "OnClanEventCreateSuccess", null),
        Object(a.b)([y.a], N.prototype, "OnShowRawRSS", null),
        (N = Object(a.b)([c.a], N));
      class W extends u.a.Component {
        constructor() {
          super(...arguments),
            (this.state = {
              initialState: W.DetermineStartState(this.props),
              step: W.DetermineStartState(this.props),
              bDraftMode: !0,
            });
        }
        static DetermineStartState(e) {
          let t = e.admin.BHasSetupFeed(e.strRSSUrl);
          return e.newsData && t
            ? e.bUpdatePost
              ? "update_post"
              : "create_post"
            : e.bActivatePooling
            ? "activate_feed"
            : e.admin.BHasSavedRSSURL()
            ? "update_feed"
            : "feed_missing";
        }
        OnCreateNewsFeed() {
          this.setState({ step: "creating_feed" }, this.DoCreateNewsFeed);
        }
        DoCreateNewsFeed() {
          return Object(a.a)(this, void 0, void 0, function* () {
            let e = yield this.props.admin.CreateOrUpdateRSSNewFeed(
              this.props.strRSSUrl,
              this.props.bActivatePooling ? 300 : 0
            );
            1 != e.success
              ? this.setState({
                  step: "failure",
                  eResult: e.success,
                  strErrorMessage: Object(P.f)("#RSSManager_PostEvent_Failure"),
                })
              : this.setState({
                  step: this.props.newsData ? "create_post" : "success",
                });
          });
        }
        OnCreatePost() {
          this.setState({ step: "waiting_post" }, this.DoCreatePost);
        }
        DoCreatePost() {
          return Object(a.a)(this, void 0, void 0, function* () {
            let e = yield this.props.admin.CreatePost(
              this.props.newsData,
              Boolean(this.state.bDraftMode)
            );
            1 != e.GetEResult()
              ? this.setState({
                  step: "failure",
                  eResult: e.GetEResult(),
                  strErrorMessage: Object(P.f)("#RSSManager_PostEvent_Failure"),
                })
              : (this.props.fnClanEventGID &&
                  this.props.fnClanEventGID(e.Body().clan_event_gid()),
                this.setState({
                  step: "success",
                  eventGID: e.Body().clan_event_gid(),
                }));
          });
        }
        OnChangeDraftMode(e) {
          this.setState({ bDraftMode: e });
        }
        OnChangePermissionsCreateFeed(e) {
          this.setState({ bPermissions: e });
        }
        OnChangeConductCreateFeed(e) {
          this.setState({ bConduct: e });
        }
        GetStrTitle() {
          if (this.props.newsData)
            return Object(P.f)(
              this.props.bUpdatePost
                ? "#RSSManager_PostEvent_UpdateEvent"
                : "#RSSManager_PostEvent_Tilte"
            );
          switch (this.state.initialState) {
            case "feed_missing":
              return Object(P.f)("#RSSManager_PostEvent_CreateFeedTitle");
            default:
            case "update_feed":
              return Object(P.f)("#RSSManager_PostEvent_UpdateFeedTitle");
            case "activate_feed":
              return Object(P.f)("#RSSManager_Status_Automation_Activate");
          }
        }
        render() {
          const { strRSSUrl: e } = this.props;
          switch (this.state.step) {
            case "feed_missing":
            case "activate_feed":
            case "update_feed":
            default:
              return u.a.createElement(
                R.f,
                null,
                u.a.createElement(b.k, null, " ", this.GetStrTitle(), " "),
                u.a.createElement(
                  b.b,
                  null,
                  u.a.createElement(
                    b.c,
                    null,
                    this.props.newsData &&
                      u.a.createElement(
                        "div",
                        null,
                        Object(P.f)(
                          "#RSSManager_PostEvent_CreateFeed_DuringPost"
                        )
                      ),
                    Boolean("activate_feed" !== this.state.step) &&
                      u.a.createElement(
                        "div",
                        null,
                        Object(P.f)("#RSSManager_PostEvent_CreateFeed_Desc", e)
                      ),
                    u.a.createElement(
                      "div",
                      null,
                      Object(P.f)("#RSSManager_CreateFeed_Review")
                    ),
                    u.a.createElement(
                      "div",
                      null,
                      u.a.createElement(b.e, {
                        label: Object(P.f)(
                          "#RSSManager_CreateFeed_Permissions_v1"
                        ),
                        onChange: this.OnChangePermissionsCreateFeed,
                        checked: Boolean(this.state.bPermissions),
                      })
                    ),
                    u.a.createElement(
                      "div",
                      null,
                      u.a.createElement(b.e, {
                        label: Object(P.f)("#RSSManager_CreateFeed_Conduct_v1"),
                        onChange: this.OnChangeConductCreateFeed,
                        checked: Boolean(this.state.bConduct),
                      }),
                      u.a.createElement(
                        C.a,
                        { href: o.d.STORE_BASE_URL + "online_conduct/" },
                        Object(P.f)("#RSSManager_CreateFeed_Conduct_Link")
                      )
                    )
                  ),
                  u.a.createElement(
                    b.j,
                    null,
                    u.a.createElement(b.n, {
                      bOKDisabled: !Boolean(
                        this.state.bPermissions && this.state.bConduct
                      ),
                      onOK: this.OnCreateNewsFeed,
                      onCancel: this.props.closeModal,
                    })
                  )
                )
              );
            case "failure":
              return u.a.createElement(
                R.g,
                {
                  strDescription: Object(P.f)("#RSSManager_PostEvent_Failure"),
                  closeModal: this.props.closeModal,
                },
                u.a.createElement(
                  "div",
                  null,
                  Object(P.f)(
                    "#Error_Description",
                    this.state.eResult,
                    this.state.strErrorMessage
                  )
                )
              );
            case "creating_feed":
            case "waiting_post":
              return u.a.createElement(
                R.e,
                {
                  strTitle: this.GetStrTitle(),
                  strDescription: Object(P.f)("#RSSManager_PostEvent_InFlight"),
                  closeModal: this.props.closeModal,
                },
                u.a.createElement(B.a, { position: "center" })
              );
            case "create_post":
              return u.a.createElement(
                R.f,
                null,
                u.a.createElement(b.k, null, " ", this.GetStrTitle(), " "),
                u.a.createElement(
                  b.b,
                  null,
                  u.a.createElement(
                    b.c,
                    null,
                    u.a.createElement(
                      "div",
                      null,
                      u.a.createElement(
                        "div",
                        null,
                        Object(P.f)("#RSSManager_PostEvent_CreatePost")
                      ),
                      u.a.createElement(
                        "div",
                        { className: M.DialogPostTitle },
                        this.props.newsData.title
                      ),
                      u.a.createElement("br", null),
                      u.a.createElement(
                        "div",
                        null,
                        u.a.createElement(b.e, {
                          label: Object(P.f)(
                            "#RSSManager_PostEvent_CreatePost_Draft"
                          ),
                          onChange: this.OnChangeDraftMode,
                          checked: Boolean(this.state.bDraftMode),
                        })
                      )
                    )
                  ),
                  u.a.createElement(
                    b.j,
                    null,
                    u.a.createElement(b.n, {
                      onOK: this.OnCreatePost,
                      onCancel: this.props.closeModal,
                    })
                  )
                )
              );
            case "update_post":
              return u.a.createElement(
                R.f,
                null,
                u.a.createElement(b.k, null, " ", this.GetStrTitle(), " "),
                u.a.createElement(
                  b.b,
                  null,
                  u.a.createElement(
                    b.c,
                    null,
                    u.a.createElement(
                      "div",
                      null,
                      u.a.createElement(
                        "div",
                        null,
                        Object(P.f)("#RSSManager_PostEvent_UpdatePost")
                      ),
                      u.a.createElement("br", null),
                      u.a.createElement(
                        "div",
                        { className: M.DialogPostTitle },
                        this.props.newsData.title
                      ),
                      u.a.createElement("br", null)
                    )
                  ),
                  u.a.createElement(
                    b.j,
                    null,
                    u.a.createElement(b.n, {
                      onOK: this.OnCreatePost,
                      onCancel: this.props.closeModal,
                    })
                  )
                )
              );
            case "success":
              return u.a.createElement(
                R.e,
                {
                  strTitle: this.GetStrTitle(),
                  strDescription: Object(P.f)(
                    this.props.newsData
                      ? "#RSSManager_PostEvent_Success"
                      : "#RSSManager_PostEvent_Success_feed"
                  ),
                  closeModal: this.props.closeModal,
                  bAlertDialog: !0,
                },
                Boolean(this.state.eventGID) &&
                  u.a.createElement(
                    "a",
                    {
                      href:
                        o.d.COMMUNITY_BASE_URL +
                        "gid/" +
                        this.props.admin
                          .GetClanSteamID()
                          .ConvertTo64BitString() +
                        "/partnerevents/edit/" +
                        this.state.eventGID,
                    },
                    Object(P.f)("#RSSManager_PostEvent_EventLink")
                  )
              );
          }
        }
      }
      Object(a.b)([y.a], W.prototype, "OnCreateNewsFeed", null),
        Object(a.b)([y.a], W.prototype, "DoCreateNewsFeed", null),
        Object(a.b)([y.a], W.prototype, "OnCreatePost", null),
        Object(a.b)([y.a], W.prototype, "DoCreatePost", null),
        Object(a.b)([y.a], W.prototype, "OnChangeDraftMode", null),
        Object(a.b)([y.a], W.prototype, "OnChangePermissionsCreateFeed", null),
        Object(a.b)([y.a], W.prototype, "OnChangeConductCreateFeed", null),
        Object(a.b)([y.a], W.prototype, "GetStrTitle", null);
    },
  },
]);

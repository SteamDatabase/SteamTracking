/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [8087],
  {
    33208: (e) => {
      e.exports = {
        TotalMinutesContainer: "yircomponents_TotalMinutesContainer_1Wj_E",
        MinutesPlayed: "yircomponents_MinutesPlayed_33Xip",
        TotalMinutesSubtitle: "yircomponents_TotalMinutesSubtitle_156D1",
        TopGamesContainer: "yircomponents_TopGamesContainer_1j8KS",
        TopGameTitle: "yircomponents_TopGameTitle_3xEkR",
        TopGameBlockContainer: "yircomponents_TopGameBlockContainer_1o-Oa",
        BackgroundImage: "yircomponents_BackgroundImage_1X3FQ",
        InfoContainer: "yircomponents_InfoContainer_30H7n",
        RankNameContainer: "yircomponents_RankNameContainer_3_H22",
        Rank: "yircomponents_Rank_1fe0i",
        Title: "yircomponents_Title_2geom",
        MinutesContainer: "yircomponents_MinutesContainer_2U4OU",
        MinutesSubtitle: "yircomponents_MinutesSubtitle_17vh1",
        Left: "yircomponents_Left_5T9Mz",
        Right: "yircomponents_Right_2R67s",
      };
    },
    82115: (e) => {
      e.exports = {
        YearInReviewContainer: "yirlanding_YearInReviewContainer_1FBH8",
        RewindHeader: "yirlanding_RewindHeader_1wMXR",
        UserName: "yirlanding_UserName_3_FPl",
        YearSubtitle: "yirlanding_YearSubtitle_1HWWi",
      };
    },
    43359: (e, t, r) => {
      "use strict";
      r.d(t, { U: () => s, W: () => n });
      var a = r(90666);
      const n = "fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb";
      function s(e, t) {
        let r = ".jpg";
        (e && "0000000000000000000000000000000000000000" !== e) || (e = n),
          44 == e.length && ((r = e.substr(-4)), (e = e.substr(0, 40)));
        let s = a.De.AVATAR_BASE_URL;
        return (
          s ||
            ((s = a.De.MEDIA_CDN_COMMUNITY_URL + "images/avatars/"),
            (s += e.substr(0, 2) + "/")),
          (s += e),
          t && "small" != t && (s += "_" + t),
          (s += r),
          s
        );
      }
    },
    67833: (e, t, r) => {
      "use strict";
      r.d(t, {
        OL: () => o,
        Hf: () => c,
        mY: () => m,
        B1: () => l,
        ZP: () => u,
      });
      var a = r(77520),
        n = r(35092),
        s = r(90666);
      const i = JSON.parse(
        '{"store.steampowered.com":1,"steamtv":2200,"steamclient":5000,"library":5100,"friendsui":5200,"friendcontextmenu":5201,"topsellers":7000,"steamcharts":7001,"weeklytopsellers":7002,"topchartlist":7003,"overview":7004,"mostplayed":7005,"salecreatorhome":100700,"saleitembrowse":100701,"salefacetbrowse":100702,"salesection":100703,"saletabsection":100704,"salebroadcast":100705,"salecuratorrec":100706,"saleeventsched":100707,"salesubscription":100708,"saleitemsearch":100709,"salesmartwishlist":100710,"salesmartir":100711,"salesmartdlc":100712,"salesmarttagrec":100713,"salebrowsetopwishlisted":100714,"salebrowsetrendingwishlisted":100715,"salebrowsepopularcomingsoon":100716,"salebrowsemostplayeddemo":100717,"salebrowsedailyactiveuserdemo":100718,"salebrowseplayednowdemo":100719,"salebrowserecentlyreleased":100720,"salebrowsepopularpurchased":100721,"salebrowsepopularpurchaseddiscounted":100722,"salebrowsediscounted":100723,"salebrowseprice":100724,"salebrowsenewandtrending":100725,"salebrowsetopsellers":100726,"salebrowsetoprated":100727,"spotlight":40,"daily-deal":43,"promo-takeover":118,"live-broadcast":143,"large-cluster":201}'
      );
      function o(e, t = "", r = null) {
        return u.InstrumentLink(e, t, r);
      }
      function l(e, t, r = null) {
        const a = (0, n.FM)(e).toLowerCase(),
          i = (0, n.FM)(s.De.COMMUNITY_BASE_URL).toLowerCase(),
          o = (0, n.FM)(s.De.STORE_BASE_URL).toLowerCase();
        return a === i || a === o ? c(e, t, r) : e;
      }
      function c(e, t, r = null) {
        const a = m(t, r);
        return u.AddNavParamToURL(e, a);
      }
      function m(e, t = null) {
        return (null == e ? void 0 : e.domain)
          ? u.GetLinkParam(e, t)
          : s.De.SNR;
      }
      class u {
        static SetNavEventParams(e, t, r = null, a = null) {
          (u.sm_strDomain = e),
            (u.sm_strController = t),
            (u.sm_strMethod = r),
            (u.sm_strSubmethod = a),
            (u.sm_strComputedLinkPrefix = null);
        }
        static GetDefaultParams() {
          let e = { domain: u.sm_strDomain, controller: u.sm_strController };
          return (
            u.sm_strMethod && (e.method = u.sm_strMethod),
            u.sm_strSubmethod && (e.submethod = u.sm_strSubmethod),
            e
          );
        }
        static ParseSNR(e) {
          const t = e.split("_") || [];
          return {
            domain: t[0],
            controller: t[1],
            method: t[2],
            submethod: t[3],
            feature: t[4],
            depth: t[5] ? Number(t[5]) : void 0,
          };
        }
        static InstrumentLink(e, t, r = null) {
          const a = u.GetLinkParam(t, r);
          return u.AddNavParamToURL(e, a);
        }
        static GetLinkParam(e, t = null) {
          let r, a;
          if (
            ("string" == typeof e || e.domain || (e = e.feature),
            "string" != typeof e && e.domain)
          )
            (r = u.ComputeLinkPrefix(
              e.domain,
              e.controller,
              e.method,
              e.submethod
            )),
              (a = e.feature),
              (t = null != t ? t : e.depth);
          else {
            if (!u.sm_strComputedLinkPrefix && !u.ComputeStaticLinkPrefix())
              return null;
            (r = u.sm_strComputedLinkPrefix),
              (a = "string" == typeof e ? e : e.feature);
          }
          let n = u.EncodeEventComponent(a);
          return n && ((r += "_" + n), t && (r += "_" + t)), r;
        }
        static AddNavParamToURL(e, t) {
          try {
            const r = new URL((0, n.Pm)(e)),
              a = new URLSearchParams(r.search);
            return (
              a.set("snr", encodeURIComponent(t)),
              r.origin + r.pathname + "?" + a.toString() + r.hash
            );
          } catch (t) {
            return console.error(e, t), e;
          }
        }
        static ComputeStaticLinkPrefix() {
          return u.sm_strDomain
            ? ((u.sm_strComputedLinkPrefix = u.ComputeLinkPrefix(
                u.sm_strDomain,
                u.sm_strController,
                u.sm_strMethod,
                u.sm_strSubmethod
              )),
              !0)
            : ((0, a.X)(
                !1,
                "CStoreNavEvents::SetNavEventParams was not called before calling InstrumentLink!"
              ),
              !1);
        }
        static ComputeLinkPrefix(e, t, r, a) {
          let n = "";
          return (
            (n += u.EncodeEventComponent(e)),
            (n += "_"),
            (n += u.EncodeEventComponent(t)),
            (n += "_"),
            (n += u.EncodeEventComponent(r)),
            (n += "_"),
            (n += u.EncodeEventComponent(a)),
            n
          );
        }
        static EncodeEventComponent(e) {
          if (!e) return "";
          return e in i
            ? "" + i[e]
            : (e.match(/^[0-9]+$/) || (e = e.replace(/^[0-9]+/, "")),
              e.replace(/[^a-zA-Z0-9\- ]+/g, ""));
        }
      }
    },
    2388: (e, t, r) => {
      "use strict";
      r.d(t, { Gr: () => f, y$: () => p });
      var a = r(70655),
        n = r(9669),
        s = r.n(n),
        i = r(22188),
        o = r(67294),
        l = (r(26149), r(92398), r(43359)),
        c = r(3389),
        m = (r(82946), r(77520)),
        u = r(93976),
        d = r(90666);
      class _ {
        constructor() {
          (this.m_mapProfiles = new Map()),
            (this.m_mapProfilesLoading = new Map());
        }
        LoadProfiles(e, t) {
          return (0, a.mG)(this, void 0, void 0, function* () {
            (0,
            m.X)(e.length <= 500, "Check LoadProfiles, requesting too many steam IDs");
            let r = e.filter(
              (e) =>
                !this.m_mapProfiles.has(e) && !this.m_mapProfilesLoading.has(e)
            );
            if (0 == r.length) return this.m_mapProfilesLoading.get(e[0]);
            let a = d.De.COMMUNITY_BASE_URL + "actions/ajaxresolveusers",
              n = s().get(a, {
                params: { steamids: r.join(",") },
                withCredentials: !0,
                cancelToken: null == t ? void 0 : t.token,
              });
            r.forEach((e) => this.m_mapProfilesLoading.set(e, n));
            let i = yield n;
            i.data &&
              200 == i.status &&
              i.data.forEach((e) => {
                (e.avatar_hash = e.avatar_url),
                  (e.avatar_url_medium = (0, l.U)(e.avatar_url, "medium")),
                  (e.avatar_url_full = (0, l.U)(e.avatar_url, "full")),
                  (e.avatar_url = (0, l.U)(e.avatar_url)),
                  this.m_mapProfiles.set(e.steamid, e),
                  this.m_mapProfilesLoading.delete(e.steamid);
              });
          });
        }
        GetProfile(e) {
          return this.m_mapProfiles.get(e);
        }
        GetProfileByAccountID(e) {
          return this.m_mapProfiles.get(
            c.K.InitFromAccountID(e).ConvertTo64BitString()
          );
        }
        GetProfileBySteamID(e) {
          return this.m_mapProfiles.get(e.ConvertTo64BitString());
        }
        BHasProfile(e) {
          return this.m_mapProfiles.has(e);
        }
        BHasProfileByAccountID(e) {
          return this.m_mapProfiles.has(
            c.K.InitFromAccountID(e).ConvertTo64BitString()
          );
        }
        BHasProfileBySteamID(e) {
          return this.m_mapProfiles.has(e.ConvertTo64BitString());
        }
        GetProfileURLBySteamID(e) {
          const t = this.GetProfileBySteamID(e);
          return t && t.profile_url
            ? d.De.COMMUNITY_BASE_URL + "id/" + t.profile_url
            : d.De.COMMUNITY_BASE_URL + "profiles/" + e.ConvertTo64BitString();
        }
        GetPersonaNameBySteamID(e) {
          const t = this.GetProfileBySteamID(e);
          return t && t.persona_name ? t.persona_name : "";
        }
      }
      (0, a.gn)([i.LO], _.prototype, "m_mapProfiles", void 0);
      const p = new _();
      function f(e) {
        const t = o.useMemo(
            () => (e ? ("string" == typeof e ? new c.K(e) : e) : null),
            [e]
          ),
          [r, a] = (0, o.useState)(!!t && !p.BHasProfileBySteamID(t));
        (0, o.useEffect)(() => {
          const e = s().CancelToken.source();
          return (
            t &&
              !p.BHasProfileBySteamID(t) &&
              p
                .LoadProfiles([t.ConvertTo64BitString()])
                .catch((e) => {
                  const r = (0, u.l)(e);
                  console.error(
                    "useUserProfile failed to load profile for " +
                      t.ConvertTo64BitString() +
                      ": " +
                      r.strErrorMsg,
                    r
                  );
                })
                .finally(() => {
                  e.token.reason || a(!1);
                }),
            () => e.cancel("unmounting useUserProfile")
          );
        }, [e]);
        return [r, !!t && p.GetProfileBySteamID(t)];
      }
      window.g_ProfileStore = p;
    },
    65924: (e, t, r) => {
      "use strict";
      r.d(t, { HC: () => c, ZP: () => l, bJ: () => m });
      var a = r(70655),
        n = r(67294),
        s = r(67833),
        i = r(90666);
      const o = n.createContext({});
      function l(e) {
        const { children: t } = e,
          r = (0, a._T)(e, ["children"]),
          i = m();
        return n.createElement(
          o.Provider,
          {
            value: Object.assign(
              Object.assign(Object.assign({}, s.ZP.GetDefaultParams()), i),
              r
            ),
          },
          t
        );
      }
      function c(e) {
        const { children: t } = e,
          r = e.snr || i.De.SNR,
          a = s.ZP.ParseSNR(r);
        return n.createElement(
          o.Provider,
          {
            value: Object.assign(Object.assign({}, s.ZP.GetDefaultParams()), a),
          },
          t
        );
      }
      function m() {
        return n.useContext(o);
      }
    },
    13596: (e, t, r) => {
      "use strict";
      r.d(t, { V: () => o });
      var a = r(67294),
        n = r(95598),
        s = r(50732),
        i = r.n(s);
      class o extends a.PureComponent {
        constructor(e) {
          super(e);
        }
        AddSizeClass(e) {
          "small" == this.props.size
            ? e.push(i().throbber_small)
            : "medium" == this.props.size
            ? e.push(i().throbber_medium)
            : "xlarge" == this.props.size
            ? e.push(i().throbber_xlarge)
            : "xxlarge" == this.props.size
            ? e.push(i().throbber_xxlarge)
            : e.push(i().throbber_large);
        }
        render() {
          let e = [i().LoadingWrapper, "SteamLogoThrobber"];
          this.AddSizeClass(e),
            void 0 === this.props.string && e.push(i().noString),
            this.props.className && e.push(this.props.className),
            this.props.static && e.push(i().Static);
          let t = a.createElement(
            "div",
            { className: e.join(" ") },
            a.createElement(
              "div",
              { className: i().Throbber },
              a.createElement(n.wUs, { className: i().base }),
              a.createElement(n.wUs, { className: i().blur })
            )
          );
          return a.createElement(
            "div",
            {
              className:
                "center" == this.props.position
                  ? i().throbber_center_wrapper
                  : "",
            },
            t,
            Boolean(this.props.string) &&
              a.createElement(
                "div",
                { className: i().ThrobberText },
                this.props.string
              )
          );
        }
      }
    },
    35092: (e, t, r) => {
      "use strict";
      r.d(t, {
        FM: () => n,
        OL: () => _,
        Pm: () => o,
        XW: () => s,
        dK: () => c,
        et: () => l,
        k6: () => d,
        md: () => p,
        xL: () => u,
      });
      var a = r(90666);
      r(92398);
      function n(e) {
        let t = new RegExp(
            "^(steam://openurl(_external)?/)?((f|ht)tps?://)?([^@/?#]*@)?([^/#?]+)",
            "im"
          ),
          r = e.match(t);
        return r && r.length > 5 ? r[6].toString() : e;
      }
      function s(e) {
        let t = n(e);
        return t.startsWith("www.") && (t = t.slice(4)), t;
      }
      const i = /^(steam|ftp|https?):\/\//;
      function o(e) {
        return i.test(e) ? e : "https://" + e;
      }
      function l(e) {
        return e
          ? 1 != a.De.EUNIVERSE
            ? e
            : ("http:" == e.substring(0, 5) && (e = "https:" + e.substring(5)),
              (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e =
                (e = (e = e.replace(
                  /https:\/\/media.steampowered.com\//g,
                  a.De.MEDIA_CDN_URL
                )).replace(
                  /https:\/\/cdn.akamai.steamstatic.com\//g,
                  a.De.MEDIA_CDN_URL
                )).replace(
                  /https:\/\/cdn.cloudflare.steamstatic.com\//g,
                  a.De.MEDIA_CDN_URL
                )).replace(
                /https:\/\/cdn.edgecast.steamstatic.com\//g,
                a.De.MEDIA_CDN_URL
              )).replace(
                /https:\/\/cdn.dota2.com\//g,
                a.De.MEDIA_CDN_URL
              )).replace(
                /https:\/\/storefront.steampowered.com\/v\/gfx\//g,
                a.De.MEDIA_CDN_URL + "steam/"
              )).replace(
                /https:\/\/cdn.steamcommunity.com\//g,
                a.De.COMMUNITY_CDN_URL
              )).replace(
                /https:\/\/community.akamai.steamstatic.com\//g,
                a.De.COMMUNITY_CDN_URL
              )).replace(
                /https:\/\/community.cloudflare.steamstatic.com\//g,
                a.De.COMMUNITY_CDN_URL
              )).replace(
                /https:\/\/community.edgecast.steamstatic.com\//g,
                a.De.COMMUNITY_CDN_URL
              )).replace(/{IMG_URL}/g, a.De.IMG_URL)).replace(
                /{MEDIA_CDN_URL}/g,
                a.De.MEDIA_CDN_URL
              )).replace(
                /{MEDIA_CDN_COMMUNITY_URL}/g,
                a.De.MEDIA_CDN_COMMUNITY_URL
              )).replace(
                /{COMMUNITY_CDN_URL}/g,
                a.De.COMMUNITY_CDN_URL
              )).replace(
                /{STEAM_CLAN_IMAGE}/g,
                a.De.MEDIA_CDN_COMMUNITY_URL + "images/clans/"
              )))
          : e;
      }
      function c(e) {
        if (!e) return !0;
        const t = n(e).toLocaleLowerCase();
        return (
          [
            n(a.De.COMMUNITY_CDN_URL).toLocaleLowerCase(),
            n(a.De.MEDIA_CDN_URL).toLocaleLowerCase(),
            n(a.De.MEDIA_CDN_COMMUNITY_URL).toLocaleLowerCase(),
            n(a.De.STORE_CDN_URL).toLocaleLowerCase(),
            "support.steampowered.com",
            "steamcdn-a.akamaihd.net",
            "cdn.cloudflare.steamstatic.com",
            "cdn.akamai.steamstatic.com",
          ].indexOf(t) >= 0
        );
      }
      function m(e, t) {
        return `${a.De.MEDIA_CDN_URL}steam/apps/${e}/${t}`;
      }
      function u(e) {
        return m(e, "page_bg_generated.jpg");
      }
      function d(e) {
        return m(e, "page_bg_generated_v6b.jpg");
      }
      function _(e) {
        return a.De.SNR &&
          a.De.SNR.length > 0 &&
          e &&
          -1 == e.toLocaleLowerCase().indexOf("snr=")
          ? e + (e.indexOf("?") >= 0 ? "&" : "?") + "snr=" + a.De.SNR
          : e;
      }
      function p(e, t) {
        try {
          const r = new URL(t),
            a = new URL(e);
          return r.origin + a.pathname + a.search + a.hash;
        } catch (e) {
          return "";
        }
      }
    },
    24262: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, { YearInReviewRoutes: () => W, default: () => j });
      var a = r(67294),
        n = r(9355),
        s = r(78587),
        i = r(65924),
        o = r(70655),
        l = r(90666),
        c = r(77520),
        m = r(65902),
        u = r(58114),
        d = r(33019),
        _ = r(40110);
      const p = d.Message;
      class f extends p {
        constructor(e = null) {
          super(),
            f.prototype.total_playtime_seconds || _.aR(f.M()),
            p.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            f.sm_m ||
              (f.sm_m = {
                proto: f,
                fields: {
                  total_playtime_seconds: {
                    n: 1,
                    br: _.FE.readUint32,
                    bw: _.Xc.writeUint32,
                  },
                  vr_playtime_seconds: {
                    n: 2,
                    br: _.FE.readUint32,
                    bw: _.Xc.writeUint32,
                  },
                  deck_playtime_seconds: {
                    n: 3,
                    br: _.FE.readUint32,
                    bw: _.Xc.writeUint32,
                  },
                  controller_playtime_seconds: {
                    n: 4,
                    br: _.FE.readUint32,
                    bw: _.Xc.writeUint32,
                  },
                  linux_playtime_seconds: {
                    n: 5,
                    br: _.FE.readUint32,
                    bw: _.Xc.writeUint32,
                  },
                  macos_playtime_seconds: {
                    n: 6,
                    br: _.FE.readUint32,
                    bw: _.Xc.writeUint32,
                  },
                  windows_playtime_seconds: {
                    n: 7,
                    br: _.FE.readUint32,
                    bw: _.Xc.writeUint32,
                  },
                  total_sessions: {
                    n: 20,
                    br: _.FE.readUint32,
                    bw: _.Xc.writeUint32,
                  },
                  vr_sessions: {
                    n: 21,
                    br: _.FE.readUint32,
                    bw: _.Xc.writeUint32,
                  },
                  deck_sessions: {
                    n: 22,
                    br: _.FE.readUint32,
                    bw: _.Xc.writeUint32,
                  },
                  controller_sessions: {
                    n: 23,
                    br: _.FE.readUint32,
                    bw: _.Xc.writeUint32,
                  },
                  linux_sessions: {
                    n: 24,
                    br: _.FE.readUint32,
                    bw: _.Xc.writeUint32,
                  },
                  macos_sessions: {
                    n: 25,
                    br: _.FE.readUint32,
                    bw: _.Xc.writeUint32,
                  },
                  windows_sessions: {
                    n: 26,
                    br: _.FE.readUint32,
                    bw: _.Xc.writeUint32,
                  },
                },
              }),
            f.sm_m
          );
        }
        static MBF() {
          return f.sm_mbf || (f.sm_mbf = _.Bh(f.M())), f.sm_mbf;
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, t) {
          return _.TA(f.M(), e, t);
        }
        static fromObject(e) {
          return _.aD(f.M(), e);
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new f();
          return f.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.F(f.MBF(), e, t);
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.l2(f.M(), e, t);
        }
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlaytimeStats";
        }
      }
      class h extends p {
        constructor(e = null) {
          super(),
            h.prototype.appid || _.aR(h.M()),
            p.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
                fields: {
                  appid: { n: 1, br: _.FE.readUint32, bw: _.Xc.writeUint32 },
                  stats: { n: 2, c: f },
                  longest_consecutive_days: {
                    n: 3,
                    br: _.FE.readUint32,
                    bw: _.Xc.writeUint32,
                  },
                },
              }),
            h.sm_m
          );
        }
        static MBF() {
          return h.sm_mbf || (h.sm_mbf = _.Bh(h.M())), h.sm_mbf;
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, t) {
          return _.TA(h.M(), e, t);
        }
        static fromObject(e) {
          return _.aD(h.M(), e);
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new h();
          return h.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.F(h.MBF(), e, t);
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.l2(h.M(), e, t);
        }
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CGamePlaytimeStats";
        }
      }
      class w extends p {
        constructor(e = null) {
          super(),
            w.prototype.total_stats || _.aR(w.M()),
            p.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            w.sm_m ||
              (w.sm_m = {
                proto: w,
                fields: {
                  total_stats: { n: 1, c: f },
                  games: { n: 2, c: h, r: !0, q: !0 },
                  longest_consecutive_days: {
                    n: 3,
                    br: _.FE.readUint32,
                    bw: _.Xc.writeUint32,
                  },
                },
              }),
            w.sm_m
          );
        }
        static MBF() {
          return w.sm_mbf || (w.sm_mbf = _.Bh(w.M())), w.sm_mbf;
        }
        toObject(e = !1) {
          return w.toObject(e, this);
        }
        static toObject(e, t) {
          return _.TA(w.M(), e, t);
        }
        static fromObject(e) {
          return _.aD(w.M(), e);
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new w();
          return w.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.F(w.MBF(), e, t);
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.l2(w.M(), e, t);
        }
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserPlaytimeStats";
        }
      }
      class g extends p {
        constructor(e = null) {
          super(),
            g.prototype.account_id || _.aR(g.M()),
            p.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            g.sm_m ||
              (g.sm_m = {
                proto: g,
                fields: {
                  account_id: {
                    n: 1,
                    br: _.FE.readUint32,
                    bw: _.Xc.writeUint32,
                  },
                  year: { n: 2, br: _.FE.readUint32, bw: _.Xc.writeUint32 },
                  playtime_stats: { n: 3, c: w },
                },
              }),
            g.sm_m
          );
        }
        static MBF() {
          return g.sm_mbf || (g.sm_mbf = _.Bh(g.M())), g.sm_mbf;
        }
        toObject(e = !1) {
          return g.toObject(e, this);
        }
        static toObject(e, t) {
          return _.TA(g.M(), e, t);
        }
        static fromObject(e) {
          return _.aD(g.M(), e);
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new g();
          return g.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.F(g.MBF(), e, t);
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.l2(g.M(), e, t);
        }
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserYearInReviewStats";
        }
      }
      class y extends p {
        constructor(e = null) {
          super(),
            y.prototype.steamid || _.aR(y.M()),
            p.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            y.sm_m ||
              (y.sm_m = {
                proto: y,
                fields: {
                  steamid: {
                    n: 1,
                    br: _.FE.readFixed64String,
                    bw: _.Xc.writeFixed64String,
                  },
                  year: { n: 2, br: _.FE.readUint32, bw: _.Xc.writeUint32 },
                  force_regenerate: {
                    n: 3,
                    br: _.FE.readBool,
                    bw: _.Xc.writeBool,
                  },
                },
              }),
            y.sm_m
          );
        }
        static MBF() {
          return y.sm_mbf || (y.sm_mbf = _.Bh(y.M())), y.sm_mbf;
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, t) {
          return _.TA(y.M(), e, t);
        }
        static fromObject(e) {
          return _.aD(y.M(), e);
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new y();
          return y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.F(y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.l2(y.M(), e, t);
        }
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSaleFeature_GetUserYearInReview_Request";
        }
      }
      class b extends p {
        constructor(e = null) {
          super(),
            b.prototype.stats || _.aR(b.M()),
            p.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = { proto: b, fields: { stats: { n: 1, c: g } } }),
            b.sm_m
          );
        }
        static MBF() {
          return b.sm_mbf || (b.sm_mbf = _.Bh(b.M())), b.sm_mbf;
        }
        toObject(e = !1) {
          return b.toObject(e, this);
        }
        static toObject(e, t) {
          return _.TA(b.M(), e, t);
        }
        static fromObject(e) {
          return _.aD(b.M(), e);
        }
        static deserializeBinary(e) {
          let t = new d.BinaryReader(e),
            r = new b();
          return b.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.F(b.MBF(), e, t);
        }
        serializeBinary() {
          var e = new d.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.l2(b.M(), e, t);
        }
        serializeBase64String() {
          var e = new d.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSaleFeature_GetUserYearInReview_Response";
        }
      }
      var v;
      !(function (e) {
        e.GetUserYearInReview = function (e, t) {
          return e.SendMsg("SaleFeature.GetUserYearInReview#1", t, b, {
            bConstMethod: !0,
            ePrivilege: 2,
            eWebAPIKeyRequirement: 1,
          });
        };
      })(v || (v = {}));
      var B = r(88767);
      class M {
        constructor(e) {
          (this.m_allStats = null), (this.m_allStats = e);
        }
        BIsValid() {
          return Boolean(this.m_allStats);
        }
        GetRawStats() {
          return this.m_allStats;
        }
        GetPlayTimeStats() {
          return this.m_allStats.playtime_stats;
        }
      }
      class R {
        constructor() {
          this.m_SteamInterface = null;
        }
        GetLoadYearInReview(e, t) {
          return (0, o.mG)(this, void 0, void 0, function* () {
            const r = u.gA.Init(y);
            r.Body().set_steamid(e), r.Body().set_year(t);
            return (yield v.GetUserYearInReview(
              this.m_SteamInterface.GetServiceTransport(),
              r
            ))
              .Body()
              .stats()
              .toObject();
          });
        }
        static Get() {
          return (
            R.s_Singleton ||
              ((R.s_Singleton = new R()),
              R.s_Singleton.Init(),
              "dev" == l.De.WEB_UNIVERSE &&
                (window.g_YearInReview = R.s_Singleton)),
            R.s_Singleton
          );
        }
        Init() {
          const e = (0, l.kQ)(
            "sale_feature_webapi_token",
            "application_config"
          );
          (0, c.X)(
            e,
            "CPromotionPlanningStore: promotion operation token is missing"
          ),
            (this.m_SteamInterface = new m.J(l.De.WEBAPI_BASE_URL, e));
        }
      }
      var E = r(13596),
        C = r(41311);
      function U() {
        return a.createElement(
          "div",
          null,
          a.createElement(
            "div",
            null,
            "Hey your year sucked, try some of these:"
          )
        );
      }
      var S = r(82115),
        I = r.n(S);
      var D = r(47808),
        N = r(33208);
      function L(e) {
        const [t, r] = (0, a.useState)(0),
          n = (0, a.useRef)(null),
          s = Math.trunc(e.nSeconds / 60);
        return (
          (0, a.useEffect)(() => {
            let e = 0;
            const t = Math.round(50),
              a = setInterval(() => {
                e++;
                const n = (i = e / t) * (2 - i);
                var i;
                r(Math.trunc(s * n)), e === t && clearInterval(a);
              }, 100);
          }, [s]),
          a.createElement(
            "div",
            { className: N.TotalMinutesContainer },
            a.createElement(
              "div",
              { ref: n, className: N.MinutesPlayed },
              (0, D.AV)(t)
            ),
            a.createElement(
              "span",
              { className: N.TotalMinutesSubtitle },
              "Total Minutes Played"
            )
          )
        );
      }
      var P = r(52114),
        T = r(7573);
      function F(e) {
        return a.createElement(
          "div",
          { className: N.TopGamesContainer },
          a.createElement("div", { className: N.TopGameTitle }, "TOP GAMES"),
          e.rgItems.map((e, t) =>
            a.createElement(z, { key: t, gameStat: e, rank: t + 1 })
          )
        );
      }
      function z(e) {
        var t;
        const { gameStat: r, rank: n } = e,
          { appid: s } = r,
          [i] = (0, P.vs)(s, { include_basic_info: !0, include_assets: !0 });
        return i
          ? a.createElement(
              "div",
              { className: N.TopGameBlockContainer },
              a.createElement("img", {
                className: N.BackgroundImage,
                height: 232,
                width: 720,
                src:
                  null === (t = i.GetAssets()) || void 0 === t
                    ? void 0
                    : t.GetLibraryHeroURL(),
              }),
              a.createElement(
                "div",
                { className: N.InfoContainer },
                a.createElement(
                  "div",
                  {
                    className: (0, T.Z)(
                      N.RankNameContainer,
                      n % 2 == 0 ? N.Left : N.Right
                    ),
                  },
                  a.createElement("div", { className: N.Rank }, n),
                  a.createElement("div", { className: N.Title }, i.GetName())
                ),
                a.createElement(
                  "div",
                  {
                    className: (0, T.Z)(
                      N.MinutesContainer,
                      n % 2 == 0 ? N.Left : N.Right
                    ),
                  },
                  a.createElement(
                    "div",
                    { className: N.MinutesPlayed },
                    (0, D.AV)(Math.trunc(r.stats.total_playtime_seconds / 60))
                  ),
                  a.createElement(
                    "div",
                    { className: N.MinutesSubtitle },
                    "MINUTES PLAYED"
                  )
                )
              )
            )
          : null;
      }
      var O = r(2388),
        k = r(3389);
      function A(e) {
        return l.L7.logged_in || e.steamId
          ? a.createElement(
              "div",
              { className: I().YearInReviewContainer },
              a.createElement(G, { steamId: e.steamId, year: e.year })
            )
          : a.createElement(
              "div",
              { className: I().YearInReviewContainer },
              a.createElement(
                "div",
                null,
                (0, C.Xx)("#YearInReview_LoginPrompt")
              )
            );
      }
      function G(e) {
        var t;
        const r = (0, s.k6)(),
          n = ((i = e.year), parseInt(i));
        var i;
        const o = null !== (t = e.steamId) && void 0 !== t ? t : l.L7.steamid;
        (0, a.useEffect)(() => {
          if (n && e.steamId) return;
          let t = n;
          if (!t) {
            const e = new Date(new Date().valueOf() - 28908057600);
            t = e.getFullYear() < 2022 ? 2022 : e.getFullYear();
          }
          r.replace(W.Home(o, t.toString()));
        }, [n, e.steamId, o, r]);
        const c = new k.K(o),
          [m, u] = (0, O.Gr)(c);
        return n < 2022 || n > new Date().getFullYear()
          ? a.createElement(
              "div",
              { className: I().YearInReviewContainer },
              a.createElement(
                "div",
                null,
                "Womp Womp, we didn't do the math for this year"
              )
            )
          : m
          ? null
          : u && c.BIsIndividualAccount()
          ? a.createElement(
              "div",
              { className: I().YearInReviewContainer },
              a.createElement(
                "div",
                { className: I().RewindHeader },
                (0, C.kQ)(
                  "#YearInReview_SteamRewindHeader",
                  a.createElement(
                    "span",
                    { className: I().UserName },
                    (0, C.Xx)(
                      "#YearInReview_PossessiveUserName",
                      u.persona_name
                    )
                  ),
                  a.createElement("span", { className: I().YearSubtitle }, n)
                )
              ),
              a.createElement(Y, { steamId: e.steamId, nYear: n })
            )
          : a.createElement(
              "div",
              { className: I().YearInReviewContainer },
              a.createElement("div", null, "New phone who dis?")
            );
      }
      function Y(e) {
        var t, r;
        const { steamId: n, nYear: s } = e;
        let { userYearInReview: i, isLoading: o } = (function (e, t) {
          const { data: r, isLoading: n } = (0, B.useQuery)(
            ["YearInReview", "Get", e, t],
            () => R.Get().GetLoadYearInReview(e, t)
          );
          return {
            userYearInReview: (0, a.useMemo)(() => (r ? new M(r) : null), [r]),
            isLoading: n,
          };
        })(n, s);
        return o
          ? a.createElement(E.V, {
              string: (0, C.Xx)("#Loading"),
              position: "center",
            })
          : i &&
            i.BIsValid() &&
            (null ===
              (r =
                null === (t = i.GetPlayTimeStats()) || void 0 === t
                  ? void 0
                  : t.total_stats) || void 0 === r
              ? void 0
              : r.total_playtime_seconds)
          ? a.createElement(
              a.Fragment,
              null,
              a.createElement(L, {
                nSeconds:
                  i.GetPlayTimeStats().total_stats.total_playtime_seconds,
              }),
              a.createElement(F, { rgItems: i.GetPlayTimeStats().games })
            )
          : a.createElement(U, null);
      }
      var x = r(32548);
      const W = { Home: (e, t) => `${n.Z.YearInReview(e, t)}` };
      function j(e) {
        return a.createElement(
          i.ZP,
          { domain: "store.steampowered.com", controller: "yearinreview" },
          a.createElement(
            s.rs,
            null,
            a.createElement(s.AW, {
              path: `${W.Home(":steamId?", ":year?")}`,
              render: (e) =>
                a.createElement(
                  i.ZP,
                  { method: "yearinreview" },
                  a.createElement(
                    x.S,
                    null,
                    a.createElement(A, {
                      steamId: e.match.params.steamId,
                      year: e.match.params.year,
                    })
                  )
                ),
            })
          )
        );
      }
    },
  },
]);

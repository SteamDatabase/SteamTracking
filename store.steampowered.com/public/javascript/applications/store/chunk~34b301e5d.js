/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [8626],
  {
    40252: (e, t, i) => {
      i.d(t, { Am: () => m, x3: () => p });
      var s = i(90666),
        r = (i(22188), i(22154), i(43359)),
        a = (i(39799), i(64010), i(77520));
      const n = "061818254b2c99ac49e6626adb128ed1282a392f",
        p = 120;
      class m {
        constructor(e) {
          (this.m_bInitialized = !1), (this.m_unAppID = e);
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
        get header_image_url() {
          return s.De.MEDIA_CDN_URL + `steam/apps/${this.m_unAppID}/header.jpg`;
        }
        get icon_url_no_default() {
          return this.m_strIconURL && this.BuildAppURL(this.m_strIconURL, n);
        }
        get icon_url() {
          return this.BuildAppURL(this.m_strIconURL, n);
        }
        get logo_url() {
          return (
            s.De.MEDIA_CDN_URL +
            `steam/apps/${this.m_unAppID}/capsule_231x87.jpg`
          );
        }
        get time_updated_from_server() {
          return this.m_dtUpdatedFromServer;
        }
        get apptype() {
          return this.m_eAppType;
        }
        BIsApplicationOrTool() {
          return 4 == this.apptype || 2 == this.apptype;
        }
        BuildAppURL(e, t) {
          return e
            ? s.De.MEDIA_CDN_COMMUNITY_URL +
                "images/apps/" +
                this.appid +
                "/" +
                e +
                ".jpg"
            : (0, r.U)(t);
        }
        DeserializeFromMessage(e) {
          (this.m_bInitialized = !0),
            (this.m_strName = e.name()),
            (this.m_strIconURL = e.icon()),
            (this.m_dtUpdatedFromServer = new Date()),
            (this.m_eAppType = e.app_type());
        }
        DeserializeFromAppOverview(e) {
          e.icon_hash() && 1073741824 != e.app_type()
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
          } catch (e) {}
        }
        SerializeToCacheObject() {
          return (
            (0, a.X)(
              this.m_bInitialized,
              "Attempting to serialize an uninitialized AppInfo object for caching!"
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
    22154: (e, t, i) => {
      i.d(t, { v: () => a });
      var s = i(90666),
        r = (i(26149), i(22188));
      class a {
        constructor(e) {
          (this.m_nLastUpdated = 0),
            (this.m_mapLanguages = r.LO.map()),
            (this.m_fetching = null),
            (this.m_appid = e);
        }
        GetAppID() {
          return this.m_appid;
        }
        GetTokenList(e) {
          return this.m_mapLanguages.has(e) ? this.m_mapLanguages.get(e) : null;
        }
        Localize(e, t) {
          let i = s.De.LANGUAGE;
          return n(
            e,
            this.GetTokenList(i),
            "english" != i ? this.GetTokenList("english") : null,
            this.m_appid,
            t
          );
        }
        SubstituteParams(e, t) {
          let i = s.De.LANGUAGE;
          return p(
            e,
            this.GetTokenList(i),
            "english" != i ? this.GetTokenList("english") : null,
            this.m_appid,
            t
          );
        }
      }
      function n(e, t, i, r, a) {
        if (!e.startsWith("#"))
          return console.log("Token doesn't start with #:", e), "";
        let n = e;
        e = e.toLowerCase();
        let m = "";
        if (
          (t && t.has(e) && (m = t.get(e)),
          !m && i && i.has(e) && (m = i.get(e)),
          m)
        )
          m = p(m, t, i, r, a);
        else if (
          ((t || i) &&
            console.log(
              "No loc found for appid",
              r,
              n,
              "Tokens:",
              t,
              "Fallback:",
              i
            ),
          t && 1 != s.De.EUNIVERSE)
        )
          return e;
        return m;
      }
      function p(e, t, i, s, r) {
        let a = e.match(/{[A-za-z0-9_%#:]+}/g);
        if (a)
          for (let p of a) {
            let a = n(m(p.slice(1, -1), r), t, i, s, r);
            if (!a) return "";
            e = e.replace(p, a);
          }
        return (e = m(e, r));
      }
      function m(e, t) {
        let i = e.match(/%[A-Za-z0-9_:]+%/g);
        if (i)
          for (let s of i) {
            let i = s.slice(1, -1).toLowerCase(),
              r = t.get(i);
            null == r
              ? console.log("No rich presence found for", i)
              : (e = e.replace(s, r));
          }
        return e;
      }
    },
    43359: (e, t, i) => {
      i.d(t, { U: () => a, W: () => r });
      var s = i(90666);
      const r = "fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb";
      function a(e, t) {
        let i = ".jpg";
        (e && "0000000000000000000000000000000000000000" !== e) || (e = r),
          44 == e.length && ((i = e.substr(-4)), (e = e.substr(0, 40)));
        let a = s.De.AVATAR_BASE_URL;
        return (
          a ||
            ((a = s.De.MEDIA_CDN_COMMUNITY_URL + "images/avatars/"),
            (a += e.substr(0, 2) + "/")),
          (a += e),
          t && "small" != t && (a += "_" + t),
          (a += i),
          a
        );
      }
    },
    64010: (e, t, i) => {
      var s = i(33019);
      i(40110), i(21205);
      s.Message;
    },
  },
]);

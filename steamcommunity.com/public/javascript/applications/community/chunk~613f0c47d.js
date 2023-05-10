/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [5663],
  {
    24105: (e, t, r) => {
      r.d(t, { W: () => l });
      var i = r(33940),
        n = (r(47165), r(50265)),
        a = (r(51637), r(18712), r(61218), r(32765)),
        s = (r(26391), r(52868)),
        o = r.n(s);
      r(63403), r(46132);
      class l {
        constructor(e) {
          (this.m_appidList = new Array()),
            (this.m_socialList = new Array()),
            (this.m_strName = ""),
            (this.m_strAvatarURLFullSize = ""),
            (this.m_strTagLineLoc = ""),
            (this.m_nFollowers = 0),
            (this.m_strVanity = ""),
            (this.m_webLink = void 0),
            (this.m_bIsLoaded = !1),
            (this.m_bIsHidden = !1),
            (this.m_clanAccountFlags = 0),
            (this.m_clanSteamID = e);
        }
        Initialize(e) {
          (this.m_strName = e.name || ""),
            (this.m_strAvatarURLFullSize =
              e.avatar_url_full_size ||
              "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/fe/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb_full.jpg"),
            e.social && e.social.forEach((e) => this.m_socialList.push(e)),
            (this.m_strTagLineLoc = e.tag_line_localized || ""),
            (this.m_nFollowers = e.followers || 0),
            (this.m_strVanity = e.vanity || void 0),
            (this.m_webLink = e.weblink),
            (this.m_bIsHidden = e.hidden || !1),
            (this.m_clanAccountFlags = e.clan_account_flags),
            e.appids && e.appids.forEach((e) => this.m_appidList.push(e)),
            (this.m_bIsLoaded = !0);
        }
        GetCreatorHomeIdentifier() {
          return {
            name: this.m_strName,
            clan_account_id: this.m_clanSteamID.GetAccountID(),
            type: "developer",
            hidden: this.m_bIsHidden,
          };
        }
        BIsPartnerEventEditorEnabled() {
          return Boolean(8 & this.m_clanAccountFlags);
        }
        BHasClanAccountFlagSet(e) {
          return Boolean(this.m_clanAccountFlags & e);
        }
        BIsLoaded() {
          return this.m_bIsLoaded;
        }
        GetClanSteamID() {
          return this.m_clanSteamID;
        }
        GetClanAccountID() {
          return this.m_clanSteamID.GetAccountID();
        }
        GetAppIDList() {
          return this.m_appidList;
        }
        GetSocialList() {
          return this.m_socialList;
        }
        GetName() {
          return this.m_strName;
        }
        GetAvatarURLFullSize() {
          return this.m_strAvatarURLFullSize;
        }
        GetTagLine() {
          return this.m_strTagLineLoc;
        }
        GetNumFollowers() {
          return this.m_nFollowers;
        }
        BIsHidden() {
          return this.m_bIsHidden;
        }
        GetCreatorHomeURL(e) {
          if (this.m_strVanity) {
            switch (e) {
              case "publisher":
                return (
                  a.De.STORE_BASE_URL + "publisher/" + this.m_strVanity + "/"
                );
              case "franchise":
                return (
                  a.De.STORE_BASE_URL + "franchise/" + this.m_strVanity + "/"
                );
            }
            return a.De.STORE_BASE_URL + "developer/" + this.m_strVanity + "/";
          }
          return (
            a.De.STORE_BASE_URL +
            "curator/" +
            this.m_clanSteamID.GetAccountID() +
            "/"
          );
        }
        BHasWebLink() {
          return void 0 !== this.m_webLink;
        }
        GetWebLink() {
          return this.m_webLink;
        }
        GetVanityString() {
          return this.m_strVanity;
        }
        AdjustFollower(e) {
          this.m_nFollowers += e;
        }
        EnablePartnerEventEditorFlag() {
          return (0, i.mG)(this, void 0, void 0, function* () {
            this.BIsPartnerEventEditorEnabled() ||
              (yield this.UpdateGroupFlagsFeature([2, 8], !0));
          });
        }
        UpdateGroupFlagsFeature(e, t) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            let r = a.De.PARTNER_BASE_URL + "sales/ajaxupdateclanaccountflags",
              i = this.m_clanAccountFlags;
            if (
              (e.forEach((e) => {
                t ? (i |= e) : (i &= ~e);
              }),
              i == this.m_clanAccountFlags)
            )
              return;
            let n = new Array();
            1 & i && n.push(1),
              8 & i && n.push(8),
              2 & i && n.push(2),
              4 & i && n.push(4),
              16 & i && n.push(16),
              32 & i && n.push(32);
            let s = new FormData();
            s.append("sessionid", a.De.SESSIONID),
              s.append("clan_account_id", this.GetClanAccountID().toString()),
              s.append("accountflags", JSON.stringify(n));
            let l = yield o().post(r, s);
            l &&
              200 == l.status &&
              1 == l.data.success &&
              (this.m_clanAccountFlags = i);
          });
        }
      }
      (0, i.gn)([n.LO], l.prototype, "m_appidList", void 0),
        (0, i.gn)([n.LO], l.prototype, "m_nFollowers", void 0),
        (0, i.gn)([n.LO], l.prototype, "m_clanAccountFlags", void 0);
    },
    57361: (e, t, r) => {
      r.d(t, { Am: () => l, x3: () => o });
      var i = r(32765),
        n = (r(50265), r(56373), r(4556)),
        a = (r(84321), r(56020), r(23801));
      const s = "061818254b2c99ac49e6626adb128ed1282a392f",
        o = 120;
      class l {
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
          return i.De.MEDIA_CDN_URL + `steam/apps/${this.m_unAppID}/header.jpg`;
        }
        get icon_url_no_default() {
          return this.m_strIconURL && this.BuildAppURL(this.m_strIconURL, s);
        }
        get icon_url() {
          return this.BuildAppURL(this.m_strIconURL, s);
        }
        get logo_url() {
          return (
            i.De.MEDIA_CDN_URL +
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
            ? i.De.MEDIA_CDN_COMMUNITY_URL +
                "images/apps/" +
                this.appid +
                "/" +
                e +
                ".jpg"
            : (0, n.U)(t);
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
    18712: (e, t, r) => {
      var i = r(33940),
        n = r(50265),
        a = (r(46132), r(51637), r(6681), r(54507), r(54671), r(207)),
        s = r(32765);
      class o {
        InitFrom(e) {
          (this.title = e.title),
            (this.capsule = l(e.capsule)),
            (this.tiny_capsule = l(e.tiny_capsule)),
            (this.main_capsule = l(e.main_capsule)),
            (this.library_asset = l(e.library_asset)),
            (this.type = e.type),
            (this.price_in_cents = e.price_in_cents),
            (this.price = e.price),
            (this.orig_price_in_cents = e.orig_price_in_cents),
            (this.orig_price = e.orig_price),
            (this.discount_percent = e.discount_percent),
            (this.rt_release_date = e.rt_release_date),
            (this.release = e.release),
            (this.screenshot_list = e.screenshot_list.map(l)),
            (this.subid = e.subid),
            (this.button_action = e.button_action),
            (this.app_to_run = e.app_to_run),
            (this.is_free = e.is_free),
            (this.free_weekend_label = e.free_weekend_label),
            (this.required_age = e.required_age),
            (this.coming_soon = e.coming_soon),
            (this.early_access = e.early_access),
            (this.no_main_cap = e.no_main_cap),
            (this.appid = Number(e.appid)),
            (this.full_game_appid = Number(e.full_game_appid)),
            (this.tags = e.tags),
            (this.content_descriptors = e.content_descriptors),
            (this.reviews_filtered = e.reviews_filtered),
            (this.reviews_unfiltered = e.reviews_unfiltered),
            (this.available_windows = e.available_windows),
            (this.available_mac = e.available_mac),
            (this.available_linux = e.available_linux),
            (this.microtrailer = l(e.microtrailer)),
            (this.microtrailer_mp4 = l(e.microtrailer_mp4)),
            (this.support_vrhmd = e.support_vrhmd),
            (this.support_vrhmd_only = e.support_vrhmd_only),
            (this.creator_clan_ids = e.creator_clan_ids),
            (this.localized_langs = e.localized_langs),
            (this.deck_compatibility_category =
              e.deck_compatibility_category || 0);
        }
        GetCapsuleDimensions() {
          return { width: 460, height: 215 };
        }
        GetMainCapsuleDimensions() {
          return { width: 616, height: 353 };
        }
        GetTinyCapsuleDimensions() {
          return { width: 231, height: 87 };
        }
        get capsule_link() {
          return (0, a.OL)(s.De.STORE_BASE_URL + "app/" + this.appid);
        }
        get name() {
          return this.title;
        }
        get id() {
          return this.appid;
        }
        get header_image_url() {
          return this.capsule;
        }
        get formatted_orig_price() {
          return this.orig_price;
        }
        get formatted_final_price() {
          return this.price;
        }
        get purchasePackageId() {
          return this.subid;
        }
      }
      function l(e) {
        return e && !e.startsWith("http") ? s.De.STORE_ICON_BASE_URL + e : e;
      }
      (0, i.gn)([n.LO], o.prototype, "title", void 0),
        (0, i.gn)([n.LO], o.prototype, "capsule", void 0),
        (0, i.gn)([n.LO], o.prototype, "tiny_capsule", void 0),
        (0, i.gn)([n.LO], o.prototype, "main_capsule", void 0),
        (0, i.gn)([n.LO], o.prototype, "library_asset", void 0),
        (0, i.gn)([n.LO], o.prototype, "type", void 0),
        (0, i.gn)([n.LO], o.prototype, "price_in_cents", void 0),
        (0, i.gn)([n.LO], o.prototype, "price", void 0),
        (0, i.gn)([n.LO], o.prototype, "orig_price_in_cents", void 0),
        (0, i.gn)([n.LO], o.prototype, "orig_price", void 0),
        (0, i.gn)([n.LO], o.prototype, "discount_percent", void 0),
        (0, i.gn)([n.LO], o.prototype, "rt_release_date", void 0),
        (0, i.gn)([n.LO], o.prototype, "release", void 0),
        (0, i.gn)([n.LO], o.prototype, "screenshot_list", void 0),
        (0, i.gn)([n.LO], o.prototype, "subid", void 0),
        (0, i.gn)([n.LO], o.prototype, "button_action", void 0),
        (0, i.gn)([n.LO], o.prototype, "app_to_run", void 0),
        (0, i.gn)([n.LO], o.prototype, "is_free", void 0),
        (0, i.gn)([n.LO], o.prototype, "free_weekend_label", void 0),
        (0, i.gn)([n.LO], o.prototype, "required_age", void 0),
        (0, i.gn)([n.LO], o.prototype, "appid", void 0),
        (0, i.gn)([n.LO], o.prototype, "full_game_appid", void 0),
        (0, i.gn)([n.LO], o.prototype, "tags", void 0),
        (0, i.gn)([n.LO], o.prototype, "content_descriptors", void 0),
        (0, i.gn)([n.LO], o.prototype, "reviews_filtered", void 0),
        (0, i.gn)([n.LO], o.prototype, "reviews_unfiltered", void 0),
        (0, i.gn)([n.LO], o.prototype, "microtrailer", void 0),
        (0, i.gn)([n.LO], o.prototype, "microtrailer_mp4", void 0),
        (0, i.gn)([n.LO], o.prototype, "coming_soon", void 0),
        (0, i.gn)([n.LO], o.prototype, "early_access", void 0),
        (0, i.gn)([n.LO], o.prototype, "available_windows", void 0),
        (0, i.gn)([n.LO], o.prototype, "available_mac", void 0),
        (0, i.gn)([n.LO], o.prototype, "available_linux", void 0),
        (0, i.gn)([n.LO], o.prototype, "support_vrhmd", void 0),
        (0, i.gn)([n.LO], o.prototype, "support_vrhmd_only", void 0),
        (0, i.gn)([n.LO], o.prototype, "no_main_cap", void 0),
        (0, i.gn)([n.LO], o.prototype, "creator_clan_ids", void 0),
        (0, i.gn)([n.LO], o.prototype, "localized_langs", void 0),
        (0, i.gn)([n.LO], o.prototype, "deck_compatibility_category", void 0);
      class c {}
      (0, i.gn)([n.LO], c.prototype, "language", void 0),
        (0, i.gn)([n.LO], c.prototype, "subtitles", void 0),
        (0, i.gn)([n.LO], c.prototype, "full_audio", void 0),
        (0, i.gn)([n.LO], c.prototype, "interface", void 0);
    },
    56373: (e, t, r) => {
      r.d(t, { v: () => a });
      var i = r(32765),
        n = (r(46132), r(50265));
      class a {
        constructor(e) {
          (this.m_nLastUpdated = 0),
            (this.m_mapLanguages = n.LO.map()),
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
          let r = i.De.LANGUAGE;
          return s(
            e,
            this.GetTokenList(r),
            "english" != r ? this.GetTokenList("english") : null,
            this.m_appid,
            t
          );
        }
        SubstituteParams(e, t) {
          let r = i.De.LANGUAGE;
          return o(
            e,
            this.GetTokenList(r),
            "english" != r ? this.GetTokenList("english") : null,
            this.m_appid,
            t
          );
        }
      }
      function s(e, t, r, n, a) {
        if (!e.startsWith("#"))
          return console.log("Token doesn't start with #:", e), "";
        let s = e;
        e = e.toLowerCase();
        let l = "";
        if (
          (t && t.has(e) && (l = t.get(e)),
          !l && r && r.has(e) && (l = r.get(e)),
          l)
        )
          l = o(l, t, r, n, a);
        else if (
          ((t || r) &&
            console.log(
              "No loc found for appid",
              n,
              s,
              "Tokens:",
              t,
              "Fallback:",
              r
            ),
          t && 1 != i.De.EUNIVERSE)
        )
          return e;
        return l;
      }
      function o(e, t, r, i, n) {
        let a = e.match(/{[A-za-z0-9_%#:]+}/g);
        if (a)
          for (let o of a) {
            let a = s(l(o.slice(1, -1), n), t, r, i, n);
            if (!a) return "";
            e = e.replace(o, a);
          }
        return (e = l(e, n));
      }
      function l(e, t) {
        let r = e.match(/%[A-Za-z0-9_:]+%/g);
        if (r)
          for (let i of r) {
            let r = i.slice(1, -1).toLowerCase(),
              n = t.get(r);
            null == n
              ? console.log("No rich presence found for", r)
              : (e = e.replace(i, n));
          }
        return e;
      }
    },
    4556: (e, t, r) => {
      r.d(t, { U: () => a, W: () => n });
      var i = r(32765);
      const n = "fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb";
      function a(e, t) {
        let r = ".jpg";
        (e && "0000000000000000000000000000000000000000" !== e) || (e = n),
          44 == e.length && ((r = e.substr(-4)), (e = e.substr(0, 40)));
        let a = i.De.AVATAR_BASE_URL;
        return (
          a ||
            ((a = i.De.MEDIA_CDN_COMMUNITY_URL + "images/avatars/"),
            (a += e.substr(0, 2) + "/")),
          (a += e),
          t && "small" != t && (a += "_" + t),
          (a += r),
          a
        );
      }
    },
    56020: (e, t, r) => {
      var i = r(45878);
      r(29063), r(6681);
      i.Message;
    },
    26391: (e, t, r) => {
      var i = r(45878),
        n = r(29063);
      const a = i.Message;
      class s extends a {
        constructor(e = null) {
          super(), a.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return s.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new s();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new s();
          return s.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return s.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return s.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClan_RespondToClanInvite_Response";
        }
      }
      class o extends a {
        constructor(e = null) {
          super(),
            o.prototype.matches || n.aR(o.M()),
            a.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            o.sm_m ||
              (o.sm_m = {
                proto: o,
                fields: {
                  matches: { n: 1, c: l, r: !0, q: !0 },
                  num_total_results: {
                    n: 2,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  next_cursor: {
                    n: 3,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                },
              }),
            o.sm_m
          );
        }
        static MBF() {
          return o.sm_mbf || (o.sm_mbf = n.Bh(o.M())), o.sm_mbf;
        }
        toObject(e = !1) {
          return o.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(o.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(o.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new o();
          return o.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(o.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(o.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClan_GetPartnerEventsByBuildIDRange_Response";
        }
      }
      class l extends a {
        constructor(e = null) {
          super(),
            l.prototype.appid || n.aR(l.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            l.sm_m ||
              (l.sm_m = {
                proto: l,
                fields: {
                  appid: { n: 1, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  build_id: { n: 2, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  branch: { n: 3, br: n.FE.readString, bw: n.Xc.writeString },
                  clan_event_gid: {
                    n: 4,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  clan_account_id: {
                    n: 5,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                },
              }),
            l.sm_m
          );
        }
        static MBF() {
          return l.sm_mbf || (l.sm_mbf = n.Bh(l.M())), l.sm_mbf;
        }
        toObject(e = !1) {
          return l.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(l.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(l.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new l();
          return l.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(l.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(l.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClan_GetPartnerEventsByBuildIDRange_Response_PatchNotesDesc";
        }
      }
      var c;
      !(function (e) {
        (e.RespondToClanInvite = function (e, t) {
          return e.SendMsg("Clan.RespondToClanInvite#1", t, s, {
            ePrivilege: 1,
          });
        }),
          (e.GetPartnerEventsByBuildIDRange = function (e, t) {
            return e.SendMsg("Clan.GetPartnerEventsByBuildIDRange#1", t, o, {
              bConstMethod: !0,
              ePrivilege: 0,
              eWebAPIKeyRequirement: 1,
            });
          });
      })(c || (c = {}));
    },
    54507: (e, t, r) => {
      r.d(t, { Fi: () => I, it: () => v });
      var i = r(45878),
        n = r(29063);
      const a = i.Message;
      class s extends a {
        constructor(e = null) {
          super(),
            s.prototype.promotions || n.aR(s.M()),
            a.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            s.sm_m ||
              (s.sm_m = {
                proto: s,
                fields: { promotions: { n: 1, c: o, r: !0, q: !0 } },
              }),
            s.sm_m
          );
        }
        static MBF() {
          return s.sm_mbf || (s.sm_mbf = n.Bh(s.M())), s.sm_mbf;
        }
        toObject(e = !1) {
          return s.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(s.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(s.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new s();
          return s.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(s.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return s.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(s.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return s.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserAccount_GetAvailableValveDiscountPromotions_Response";
        }
      }
      class o extends a {
        constructor(e = null) {
          super(),
            o.prototype.promotionid || n.aR(o.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            o.sm_m ||
              (o.sm_m = {
                proto: o,
                fields: {
                  promotionid: {
                    n: 1,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  promotion_description: {
                    n: 2,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  minimum_cart_amount: {
                    n: 3,
                    br: n.FE.readInt64String,
                    bw: n.Xc.writeInt64String,
                  },
                  minimum_cart_amount_for_display: {
                    n: 4,
                    br: n.FE.readInt64String,
                    bw: n.Xc.writeInt64String,
                  },
                  discount_amount: {
                    n: 5,
                    br: n.FE.readInt64String,
                    bw: n.Xc.writeInt64String,
                  },
                  currency_code: {
                    n: 6,
                    br: n.FE.readInt32,
                    bw: n.Xc.writeInt32,
                  },
                  available_use_count: {
                    n: 7,
                    br: n.FE.readInt32,
                    bw: n.Xc.writeInt32,
                  },
                  promotional_discount_type: {
                    n: 8,
                    br: n.FE.readInt32,
                    bw: n.Xc.writeInt32,
                  },
                  loyalty_reward_id: {
                    n: 9,
                    br: n.FE.readInt32,
                    bw: n.Xc.writeInt32,
                  },
                  localized_name_token: {
                    n: 10,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  max_use_count: {
                    n: 11,
                    br: n.FE.readInt32,
                    bw: n.Xc.writeInt32,
                  },
                },
              }),
            o.sm_m
          );
        }
        static MBF() {
          return o.sm_mbf || (o.sm_mbf = n.Bh(o.M())), o.sm_mbf;
        }
        toObject(e = !1) {
          return o.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(o.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(o.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new o();
          return o.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(o.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(o.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserAccount_GetAvailableValveDiscountPromotions_Response_ValveDiscountPromotionDetails";
        }
      }
      class l extends a {
        constructor(e = null) {
          super(),
            l.prototype.has_wallet || n.aR(l.M()),
            a.initialize(this, e, 0, -1, [13], null);
        }
        static M() {
          return (
            l.sm_m ||
              (l.sm_m = {
                proto: l,
                fields: {
                  has_wallet: { n: 1, br: n.FE.readBool, bw: n.Xc.writeBool },
                  user_country_code: {
                    n: 2,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  wallet_country_code: {
                    n: 3,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  wallet_state: {
                    n: 4,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  balance: {
                    n: 5,
                    br: n.FE.readInt64String,
                    bw: n.Xc.writeInt64String,
                  },
                  delayed_balance: {
                    n: 6,
                    br: n.FE.readInt64String,
                    bw: n.Xc.writeInt64String,
                  },
                  currency_code: {
                    n: 7,
                    br: n.FE.readInt32,
                    bw: n.Xc.writeInt32,
                  },
                  time_most_recent_txn: {
                    n: 8,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  most_recent_txnid: {
                    n: 9,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  balance_in_usd: {
                    n: 10,
                    br: n.FE.readInt64String,
                    bw: n.Xc.writeInt64String,
                  },
                  delayed_balance_in_usd: {
                    n: 11,
                    br: n.FE.readInt64String,
                    bw: n.Xc.writeInt64String,
                  },
                  has_wallet_in_other_regions: {
                    n: 12,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                  other_regions: {
                    n: 13,
                    r: !0,
                    q: !0,
                    br: n.FE.readInt32,
                    pbr: n.FE.readPackedInt32,
                    bw: n.Xc.writeRepeatedInt32,
                  },
                  formatted_balance: {
                    n: 14,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                },
              }),
            l.sm_m
          );
        }
        static MBF() {
          return l.sm_mbf || (l.sm_mbf = n.Bh(l.M())), l.sm_mbf;
        }
        toObject(e = !1) {
          return l.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(l.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(l.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new l();
          return l.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(l.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(l.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserAccount_GetWalletDetails_Response";
        }
      }
      class c extends a {
        constructor(e = null) {
          super(),
            c.prototype.pwid || n.aR(c.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            c.sm_m ||
              (c.sm_m = {
                proto: c,
                fields: {
                  pwid: { n: 1, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  identity_verification: {
                    n: 2,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  performed_age_verification: {
                    n: 3,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                },
              }),
            c.sm_m
          );
        }
        static MBF() {
          return c.sm_mbf || (c.sm_mbf = n.Bh(c.M())), c.sm_mbf;
        }
        toObject(e = !1) {
          return c.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(c.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(c.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new c();
          return c.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(c.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(c.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserAccount_GetAccountLinkStatus_Response";
        }
      }
      class m extends a {
        constructor(e = null) {
          super(), a.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return m.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new m();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new m();
          return m.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserAccount_CancelLicenseForApp_Response";
        }
      }
      class d extends a {
        constructor(e = null) {
          super(),
            d.prototype.country || n.aR(d.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            d.sm_m ||
              (d.sm_m = {
                proto: d,
                fields: {
                  country: { n: 1, br: n.FE.readString, bw: n.Xc.writeString },
                },
              }),
            d.sm_m
          );
        }
        static MBF() {
          return d.sm_mbf || (d.sm_mbf = n.Bh(d.M())), d.sm_mbf;
        }
        toObject(e = !1) {
          return d.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(d.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(d.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new d();
          return d.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(d.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(d.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserAccount_GetUserCountry_Response";
        }
      }
      class u extends a {
        constructor(e = null) {
          super(),
            u.prototype.invite_token || n.aR(u.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            u.sm_m ||
              (u.sm_m = {
                proto: u,
                fields: {
                  invite_token: {
                    n: 1,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  invite_limit: {
                    n: 2,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  invite_duration: {
                    n: 3,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  time_created: {
                    n: 4,
                    br: n.FE.readFixed32,
                    bw: n.Xc.writeFixed32,
                  },
                  valid: { n: 5, br: n.FE.readBool, bw: n.Xc.writeBool },
                },
              }),
            u.sm_m
          );
        }
        static MBF() {
          return u.sm_mbf || (u.sm_mbf = n.Bh(u.M())), u.sm_mbf;
        }
        toObject(e = !1) {
          return u.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(u.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(u.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new u();
          return u.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(u.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(u.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserAccount_CreateFriendInviteToken_Response";
        }
      }
      class p extends a {
        constructor(e = null) {
          super(),
            p.prototype.tokens || n.aR(p.M()),
            a.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
                fields: { tokens: { n: 1, c: u, r: !0, q: !0 } },
              }),
            p.sm_m
          );
        }
        static MBF() {
          return p.sm_mbf || (p.sm_mbf = n.Bh(p.M())), p.sm_mbf;
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(p.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(p.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new p();
          return p.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(p.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(p.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserAccount_GetFriendInviteTokens_Response";
        }
      }
      class _ extends a {
        constructor(e = null) {
          super(),
            _.prototype.valid || n.aR(_.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  valid: { n: 1, br: n.FE.readBool, bw: n.Xc.writeBool },
                  steamid: {
                    n: 2,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  invite_duration: {
                    n: 3,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = n.Bh(_.M())), _.sm_mbf;
        }
        toObject(e = !1) {
          return _.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(_.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(_.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new _();
          return _.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(_.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(_.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserAccount_ViewFriendInviteToken_Response";
        }
      }
      class h extends a {
        constructor(e = null) {
          super(), a.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new h();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new h();
          return h.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserAccount_RedeemFriendInviteToken_Response";
        }
      }
      class g extends a {
        constructor(e = null) {
          super(), a.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return g.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new g();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new g();
          return g.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserAccount_RevokeFriendInviteToken_Response";
        }
      }
      class y extends a {
        constructor(e = null) {
          super(), a.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new y();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new y();
          return y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserAccount_RegisterCompatTool_Response";
        }
      }
      class I extends a {
        constructor(e = null) {
          super(),
            I.prototype.account_type || n.aR(I.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            I.sm_m ||
              (I.sm_m = {
                proto: I,
                fields: {
                  account_type: { n: 1, br: n.FE.readEnum, bw: n.Xc.writeEnum },
                  account_id: {
                    n: 2,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  filter: { n: 3, br: n.FE.readEnum, bw: n.Xc.writeEnum },
                  return_access_token: {
                    n: 4,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                },
              }),
            I.sm_m
          );
        }
        static MBF() {
          return I.sm_mbf || (I.sm_mbf = n.Bh(I.M())), I.sm_mbf;
        }
        toObject(e = !1) {
          return I.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(I.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(I.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new I();
          return I.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(I.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return I.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(I.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return I.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAccountLinking_GetLinkedAccountInfo_Request";
        }
      }
      class f extends a {
        constructor(e = null) {
          super(),
            f.prototype.external_accounts || n.aR(f.M()),
            a.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            f.sm_m ||
              (f.sm_m = {
                proto: f,
                fields: { external_accounts: { n: 1, c: w, r: !0, q: !0 } },
              }),
            f.sm_m
          );
        }
        static MBF() {
          return f.sm_mbf || (f.sm_mbf = n.Bh(f.M())), f.sm_mbf;
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(f.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(f.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new f();
          return f.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(f.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(f.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAccountLinking_GetLinkedAccountInfo_Response";
        }
      }
      class w extends a {
        constructor(e = null) {
          super(),
            w.prototype.external_type || n.aR(w.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            w.sm_m ||
              (w.sm_m = {
                proto: w,
                fields: {
                  external_type: {
                    n: 1,
                    br: n.FE.readEnum,
                    bw: n.Xc.writeEnum,
                  },
                  external_id: {
                    n: 2,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  external_user_name: {
                    n: 3,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  external_url: {
                    n: 4,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  access_token: {
                    n: 5,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  access_token_secret: {
                    n: 6,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  is_valid: { n: 7, br: n.FE.readBool, bw: n.Xc.writeBool },
                },
              }),
            w.sm_m
          );
        }
        static MBF() {
          return w.sm_mbf || (w.sm_mbf = n.Bh(w.M())), w.sm_mbf;
        }
        toObject(e = !1) {
          return w.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(w.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(w.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new w();
          return w.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(w.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(w.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAccountLinking_GetLinkedAccountInfo_Response_CExternalAccountTuple_Response";
        }
      }
      class B extends a {
        constructor(e = null) {
          super(),
            B.prototype.steamid || n.aR(B.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            B.sm_m ||
              (B.sm_m = {
                proto: B,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  client_token: {
                    n: 2,
                    br: n.FE.readBytes,
                    bw: n.Xc.writeBytes,
                  },
                  expiry: { n: 3, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  deviceid: { n: 4, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                },
              }),
            B.sm_m
          );
        }
        static MBF() {
          return B.sm_mbf || (B.sm_mbf = n.Bh(B.M())), B.sm_mbf;
        }
        toObject(e = !1) {
          return B.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(B.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(B.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new B();
          return B.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(B.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(B.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEmbeddedClient_Token";
        }
      }
      class C extends a {
        constructor(e = null) {
          super(),
            C.prototype.result || n.aR(C.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            C.sm_m ||
              (C.sm_m = {
                proto: C,
                fields: {
                  result: { n: 1, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  token: { n: 2, c: B },
                },
              }),
            C.sm_m
          );
        }
        static MBF() {
          return C.sm_mbf || (C.sm_mbf = n.Bh(C.M())), C.sm_mbf;
        }
        toObject(e = !1) {
          return C.toObject(e, this);
        }
        static toObject(e, t) {
          return n.TA(C.M(), e, t);
        }
        static fromObject(e) {
          return n.aD(C.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new C();
          return C.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.F(C.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.l2(C.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEmbeddedClient_AuthorizeDevice_Response";
        }
      }
      var b, v, L;
      !(function (e) {
        (e.GetAvailableValveDiscountPromotions = function (e, t) {
          return e.SendMsg(
            "UserAccount.GetAvailableValveDiscountPromotions#1",
            t,
            s,
            { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 }
          );
        }),
          (e.GetClientWalletDetails = function (e, t) {
            return e.SendMsg("UserAccount.GetClientWalletDetails#1", t, l, {
              ePrivilege: 1,
            });
          }),
          (e.GetAccountLinkStatus = function (e, t) {
            return e.SendMsg("UserAccount.GetAccountLinkStatus#1", t, c, {
              ePrivilege: 1,
            });
          }),
          (e.CancelLicenseForApp = function (e, t) {
            return e.SendMsg("UserAccount.CancelLicenseForApp#1", t, m, {
              ePrivilege: 1,
            });
          }),
          (e.GetUserCountry = function (e, t) {
            return e.SendMsg("UserAccount.GetUserCountry#1", t, d, {
              ePrivilege: 1,
            });
          }),
          (e.CreateFriendInviteToken = function (e, t) {
            return e.SendMsg("UserAccount.CreateFriendInviteToken#1", t, u, {
              ePrivilege: 3,
            });
          }),
          (e.GetFriendInviteTokens = function (e, t) {
            return e.SendMsg("UserAccount.GetFriendInviteTokens#1", t, p, {
              ePrivilege: 1,
            });
          }),
          (e.ViewFriendInviteToken = function (e, t) {
            return e.SendMsg("UserAccount.ViewFriendInviteToken#1", t, _, {
              ePrivilege: 1,
            });
          }),
          (e.RedeemFriendInviteToken = function (e, t) {
            return e.SendMsg("UserAccount.RedeemFriendInviteToken#1", t, h, {
              ePrivilege: 1,
            });
          }),
          (e.RevokeFriendInviteToken = function (e, t) {
            return e.SendMsg("UserAccount.RevokeFriendInviteToken#1", t, g, {
              ePrivilege: 1,
            });
          }),
          (e.RegisterCompatTool = function (e, t) {
            return e.SendMsg("UserAccount.RegisterCompatTool#1", t, y, {
              ePrivilege: 1,
            });
          });
      })(b || (b = {})),
        (function (e) {
          e.GetLinkedAccountInfo = function (e, t) {
            return e.SendMsg("AccountLinking.GetLinkedAccountInfo#1", t, f, {
              bConstMethod: !0,
              ePrivilege: 0,
              eWebAPIKeyRequirement: 1,
            });
          };
        })(v || (v = {})),
        (function (e) {
          e.AuthorizeCurrentDevice = function (e, t) {
            return e.SendMsg("EmbeddedClient.AuthorizeCurrentDevice#1", t, C, {
              ePrivilege: 1,
            });
          };
        })(L || (L = {}));
    },
    82079: (e, t, r) => {
      r.d(t, { KU: () => _, sV: () => p, yh: () => h });
      var i = r(33940),
        n = r(52868),
        a = r.n(n),
        s = r(50265),
        o = r(89526),
        l = (r(46132), r(51637), r(47165)),
        c = (r(63403), r(23801)),
        m = r(32765),
        d = r(61218);
      class u {
        constructor() {
          (this.m_mapAppIDToClanInfo = new Map()),
            (this.m_mapVanityToClanInfo = new Map()),
            (this.m_mapClanAccountIDToClanInfo = new Map()),
            (this.m_mapPromisesLoading = new Map()),
            (this.m_rgQueuedEventsClanIDs = new Array()),
            (this.m_bLoadedFromConfig = !1);
        }
        Init() {
          this.LazyInit();
        }
        LazyInit() {
          this.m_bLoadedFromConfig ||
            ((0, s.z)(() => {
              let e = (0, m.ip)("groupvanityinfo", "application_config");
              this.ValidateClanConfig(e) &&
                e.forEach((e) => {
                  this.InternalSetupValue(e);
                });
            }),
            (this.m_bLoadedFromConfig = !0));
        }
        ValidateClanConfig(e) {
          const t = e;
          return (
            !!(
              t &&
              Array.isArray(t) &&
              t.length > 0 &&
              "object" == typeof t[0]
            ) &&
            "number" == typeof t[0].clanAccountID &&
            ("number" == typeof t[0].appid ||
              "string" == typeof t[0].vanity_url)
          );
        }
        BHasClanInfoLoaded(e) {
          return (
            (0, c.X)(e.BIsValid(), "Clan SteamID is not valid when ClanInfo"),
            (0, c.X)(
              e.BIsClanAccount(),
              "Clan SteamID is not a clan account id when requesting clan info "
            ),
            this.m_mapClanAccountIDToClanInfo.has(e.GetAccountID())
          );
        }
        BHasClanInfoLoadedByAccountID(e) {
          return this.m_mapClanAccountIDToClanInfo.has(e);
        }
        RegisterClanData(e) {
          for (const t of e) this.InternalSetupValue(t);
        }
        InternalSetupValue(e) {
          const t = {
            clanAccountID: e.clanAccountID,
            clanSteamID: new l.K(e.clanSteamIDString),
            appid: e.appid,
            vanity_url: e.vanity_url,
            member_count: e.member_count,
            is_ogg: e.is_ogg,
            is_creator_home: e.is_creator_home,
            is_curator: e.is_curator,
            has_visible_store_page: e.has_visible_store_page,
            has_rss_feed: e.has_rss_feed,
            rss_language: e.rss_language ? e.rss_language : 0,
            avatar_full_url: e.avatar_full_url,
            avatar_medium_url: e.avatar_medium_url,
            group_name: e.group_name,
            creator_page_bg_url: e.creator_page_bg_url,
            partner_events_enabled: e.partner_events_enabled,
          };
          0 != e.appid && this.m_mapAppIDToClanInfo.set(e.appid, t),
            e.vanity_url &&
              e.vanity_url.length > 0 &&
              this.m_mapVanityToClanInfo.set(
                e.vanity_url.toLocaleLowerCase(),
                t
              ),
            this.m_mapClanAccountIDToClanInfo.set(e.clanAccountID, t);
        }
        GetRequestParam() {
          return { origin: self.origin };
        }
        LoadOGGClanInfoForAppID(e) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            if (
              (this.LazyInit(),
              "string" == typeof e && (e = parseInt(e)),
              (0, c.X)(
                0 != e,
                "LoadOGGClanInfoForAppID called with appid of zero"
              ),
              0 == e)
            )
              return null;
            if (this.m_mapAppIDToClanInfo.has(e))
              return this.m_mapAppIDToClanInfo.get(e);
            let t = "appid_" + e;
            return (
              this.m_mapPromisesLoading.has(t) ||
                this.m_mapPromisesLoading.set(
                  t,
                  this.InternalLoadOGGClanInfoForAppID(e)
                ),
              this.m_mapPromisesLoading.get(t)
            );
          });
        }
        InternalLoadOGGClanInfoForAppID(e) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            const t =
              m.De.COMMUNITY_BASE_URL + "ogg/" + e + "/ajaxgetvanityandclanid/";
            let r = yield a().get(t, { params: this.GetRequestParam() });
            return (
              this.InternalSetupValue(r.data), this.m_mapAppIDToClanInfo.get(e)
            );
          });
        }
        LoadOGGClanInfoForIdentifier(e) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            if (
              (this.LazyInit(),
              this.m_mapVanityToClanInfo.has(
                null == e ? void 0 : e.toLocaleLowerCase()
              ))
            )
              return this.m_mapVanityToClanInfo.get(
                null == e ? void 0 : e.toLocaleLowerCase()
              );
            let t =
              "storevanity_" + (null == e ? void 0 : e.toLocaleLowerCase());
            return (
              this.m_mapPromisesLoading.has(t) ||
                this.m_mapPromisesLoading.set(
                  t,
                  this.InternalLoadOGGClanInfoForIdentifier(e)
                ),
              this.m_mapPromisesLoading.get(t)
            );
          });
        }
        InternalLoadOGGClanInfoForIdentifier(e) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            const t =
              m.De.COMMUNITY_BASE_URL +
              "games/" +
              e +
              "/ajaxgetvanityandclanid/";
            let r = yield a().get(t, { params: this.GetRequestParam() });
            return (
              this.InternalSetupValue(r.data),
              this.m_mapVanityToClanInfo.get(
                null == e ? void 0 : e.toLocaleLowerCase()
              )
            );
          });
        }
        LoadOGGClanInfoForGroupVanity(e) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            if (
              (this.LazyInit(),
              this.m_mapVanityToClanInfo.has(
                null == e ? void 0 : e.toLocaleLowerCase()
              ))
            )
              return this.m_mapVanityToClanInfo.get(
                null == e ? void 0 : e.toLocaleLowerCase()
              );
            let t = "community_name_" + e;
            return (
              this.m_mapPromisesLoading.has(t) ||
                this.m_mapPromisesLoading.set(
                  t,
                  this.InternalLoadOGGClanInfoForGroupVanity(
                    null == e ? void 0 : e.toLocaleLowerCase()
                  )
                ),
              this.m_mapPromisesLoading.get(t)
            );
          });
        }
        InternalLoadOGGClanInfoForGroupVanity(e) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            const t =
              m.De.COMMUNITY_BASE_URL +
              "groups/" +
              e +
              "/ajaxgetvanityandclanid/";
            let r = yield a().get(t, { params: this.GetRequestParam() });
            return (
              this.InternalSetupValue(r.data),
              this.m_mapVanityToClanInfo.get(
                null == e ? void 0 : e.toLocaleLowerCase()
              )
            );
          });
        }
        LoadClanInfoForClanSteamID(e) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            this.LazyInit();
            let t = e.GetAccountID();
            if (this.m_mapClanAccountIDToClanInfo.has(t))
              return this.m_mapClanAccountIDToClanInfo.get(t);
            let r = "clanaccountid_" + t;
            return (
              this.m_mapPromisesLoading.has(r) ||
                this.m_mapPromisesLoading.set(
                  r,
                  this.InternalLoadClanInfoForClanSteamID(e)
                ),
              this.m_mapPromisesLoading.get(r)
            );
          });
        }
        LoadClanInfoForClanAccountID(e) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            const t = l.K.InitFromClanID(e);
            return this.LoadClanInfoForClanSteamID(t);
          });
        }
        InternalLoadClanInfoForClanSteamID(e) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            let t = e.GetAccountID();
            const r =
              m.De.COMMUNITY_BASE_URL +
              "gid/" +
              e.ConvertTo64BitString() +
              "/ajaxgetvanityandclanid/";
            let i = yield a().get(r, { params: this.GetRequestParam() });
            return (
              this.InternalSetupValue(i.data),
              this.m_mapClanAccountIDToClanInfo.get(t)
            );
          });
        }
        GetOGGClanInfo(e) {
          return "string" == typeof e
            ? this.m_mapVanityToClanInfo.get(
                null == e ? void 0 : e.toLocaleLowerCase()
              )
            : this.m_mapAppIDToClanInfo.get(e);
        }
        GetClanSteamIDForAppID(e) {
          if ((this.LazyInit(), this.m_mapAppIDToClanInfo.has(e)))
            return l.K.InitFromClanID(
              this.m_mapAppIDToClanInfo.get(e).clanAccountID
            );
        }
        GetClanVanityForAppID(e) {
          if ((this.LazyInit(), this.m_mapAppIDToClanInfo.has(e)))
            return this.m_mapAppIDToClanInfo.get(e).vanity_url;
        }
        GetClanVanityForClanSteamID(e) {
          if (
            (this.LazyInit(),
            this.m_mapClanAccountIDToClanInfo.has(e.GetAccountID()))
          )
            return this.m_mapClanAccountIDToClanInfo.get(e.GetAccountID())
              .vanity_url;
        }
        HasLoadedClanAccountID(e) {
          return this.LazyInit(), this.m_mapClanAccountIDToClanInfo.has(e);
        }
        GetClanMemberCount(e) {
          return this.m_mapAppIDToClanInfo.has(e)
            ? this.m_mapAppIDToClanInfo.get(e).member_count
            : 0;
        }
        GetClanInfoByClanAccountID(e) {
          return (
            this.LazyInit(),
            (0, c.X)(
              !!e,
              "Unepxected clanid when requesting information. GetClanInfoByClanAccountID "
            ),
            this.m_mapClanAccountIDToClanInfo.get(e)
          );
        }
        GetCreatorStoreURL(e) {
          let t = d.bq.GetCreatorHome(e);
          if (t) return t.GetCreatorHomeURL("developer");
          let r = this.GetClanInfoByClanAccountID(e.GetAccountID());
          return (
            m.De.COMMUNITY_BASE_URL +
            (r.vanity_url
              ? "groups/" + r.vanity_url
              : "gid/" + e.ConvertTo64BitString())
          );
        }
      }
      (0, i.gn)([s.LO], u.prototype, "m_mapAppIDToClanInfo", void 0),
        (0, i.gn)([s.LO], u.prototype, "m_mapVanityToClanInfo", void 0),
        (0, i.gn)([s.LO], u.prototype, "m_mapClanAccountIDToClanInfo", void 0),
        (0, i.gn)([s.aD], u.prototype, "RegisterClanData", null),
        (0, i.gn)([s.aD], u.prototype, "InternalSetupValue", null);
      const p = new u();
      function _(e) {
        const [t, r] = (0, o.useState)(
            e ? p.GetClanInfoByClanAccountID(e) : void 0
          ),
          [i, n] = (0, o.useState)(!!e && !p.BHasClanInfoLoadedByAccountID(e));
        return (
          (0, o.useEffect)(() => {
            if (e)
              if (p.BHasClanInfoLoadedByAccountID(e))
                r(p.GetClanInfoByClanAccountID(e)), n(!1);
              else {
                n(!0);
                const t = l.K.InitFromClanID(
                  "string" == typeof e ? Number.parseInt(e) : e
                );
                p.LoadClanInfoForClanSteamID(t).then((e) => {
                  r(e), n(!1);
                });
              }
            else r(void 0), n(!1);
          }, [e]),
          [i, t]
        );
      }
      function h(e) {
        const [t, r] = (0, o.useState)(p.GetOGGClanInfo(e));
        return (
          (0, o.useEffect)(() => {
            t || p.LoadOGGClanInfoForGroupVanity(e).then(r);
          }, [t, e]),
          t
        );
      }
      window.g_ClanStore = p;
    },
    61218: (e, t, r) => {
      r.d(t, { bq: () => p, iG: () => _ });
      var i = r(33940),
        n = r(58218),
        a = r(52868),
        s = r.n(a),
        o = r(50265),
        l = r(89526),
        c = (r(51637), r(24105)),
        m = (r(18712), r(47165)),
        d = (r(63403), r(32765));
      class u {
        constructor() {
          (this.m_mapClanToCreatorHome = new Map()),
            (this.m_mapAppToCreatorIDList = new Map()),
            (this.m_bLoadedFromConfig = !1);
        }
        LazyInit() {
          if (!this.m_bLoadedFromConfig) {
            let e = (0, d.kQ)("creatorhome", "application_config");
            this.ValidateStoreDefault(e) &&
              e.forEach((e) => {
                let t = Number(e.creator_clan_id),
                  r = m.K.InitFromClanID(t),
                  i = new c.W(r);
                i.Initialize(e),
                  (i.m_promise = u.GetAsPromise(i)),
                  this.m_mapClanToCreatorHome.set(t, i);
              });
            let t = (0, d.kQ)("creatorhomeforapp", "application_config");
            this.ValidateStoreDefaultAppList(t) &&
              t.forEach((e) => {
                this.m_mapAppToCreatorIDList.has(e.appid) ||
                  this.m_mapAppToCreatorIDList.set(e.appid, new Array()),
                  this.m_mapAppToCreatorIDList.get(e.appid).push(e);
              }),
              (this.m_bLoadedFromConfig = !0);
          }
        }
        static GetAsPromise(e) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            return e;
          });
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
            "string" == typeof t[0].name &&
            ("string" == typeof t[0].creator_clan_id ||
              "number" == typeof t[0].creator_clan_id)
          );
        }
        ValidateStoreDefaultAppList(e) {
          const t = e;
          return (
            !!(
              t &&
              Array.isArray(t) &&
              t.length > 0 &&
              "object" == typeof t[0]
            ) &&
            "number" == typeof t[0].clan_account_id &&
            t[0].clan_account_id > 0 &&
            "number" == typeof t[0].appid &&
            t[0].appid > 0
          );
        }
        BHasCreatorHomeLoaded(e) {
          return (
            this.m_mapClanToCreatorHome.has(e.GetAccountID()) &&
            this.m_mapClanToCreatorHome.get(e.GetAccountID()).BIsLoaded()
          );
        }
        GetCreatorHome(e) {
          return this.m_mapClanToCreatorHome.get(e.GetAccountID());
        }
        GetCreatorHomeByID(e) {
          return this.m_mapClanToCreatorHome.get(e.clan_account_id);
        }
        LoadCreatorHome(e, t) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            if (
              (this.LazyInit(),
              !this.m_mapClanToCreatorHome.has(e.GetAccountID()))
            ) {
              let r = new c.W(e);
              (r.m_promise = this.InternalCreatorHome(r, t)),
                yield r.m_promise,
                this.m_mapClanToCreatorHome.set(e.GetAccountID(), r);
            }
            return this.m_mapClanToCreatorHome.get(e.GetAccountID()).m_promise;
          });
        }
        InternalCreatorHome(e, t) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            let r = { get_appids: !0, l: d.De.LANGUAGE, origin: self.origin },
              i =
                d.De.STORE_BASE_URL +
                "curator/" +
                e.GetClanAccountID() +
                "/ajaxgetcreatorhomeinfo",
              n = yield s().get(i, { params: r, cancelToken: t && t.token });
            return e.Initialize(n.data), e;
          });
        }
        LoadCreatorHomeListForAppIncludeHiddden(e, t) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            if ((this.LazyInit(), !this.m_mapAppToCreatorIDList.has(e))) {
              let r = { appid: e },
                i = d.De.STORE_BASE_URL + "events/ajaxgetcreatorhomeidforapp",
                n = yield s().get(i, {
                  params: r,
                  cancelToken: t && t.token,
                  withCredentials: !0,
                });
              this.m_mapAppToCreatorIDList.set(e, n.data.creator_list);
            }
            return this.m_mapAppToCreatorIDList.get(e);
          });
        }
        SearchCreatorHomeStore(e, t, r) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            let i = `${d.De.STORE_BASE_URL}curator/0/ajaxsearchcurators`,
              n = {
                term: e.replace(" ", "+"),
                require_creator: t,
                cc: d.De.COUNTRY,
                l: d.De.LANGUAGE,
              },
              a = new Array();
            const l = yield s().get(i, { params: n, cancelToken: r.token });
            return (
              l.data.curators &&
                (0, o.z)(() => {
                  l.data.curators.forEach((e) => {
                    if (!this.m_mapClanToCreatorHome.has(e.creator_clan_id)) {
                      let t = m.K.InitFromClanID(e.creator_clan_id),
                        r = new c.W(t);
                      r.Initialize(e),
                        this.m_mapClanToCreatorHome.set(e.creator_clan_id, r);
                    }
                    a.push(this.m_mapClanToCreatorHome.get(e.creator_clan_id));
                  });
                }),
              a
            );
          });
        }
        GetCreatorHomeListForAppIncludeHidden(e) {
          return this.m_mapAppToCreatorIDList.has(e)
            ? this.m_mapAppToCreatorIDList.get(e)
            : [];
        }
      }
      (0, i.gn)([o.LO], u.prototype, "m_mapClanToCreatorHome", void 0),
        (0, i.gn)([o.LO], u.prototype, "m_mapAppToCreatorIDList", void 0),
        (0, i.gn)([o.aD], u.prototype, "LazyInit", null);
      const p = new u();
      function _(e) {
        var t;
        const r = m.K.InitFromClanID(e),
          [i, a] = l.useState(p.GetCreatorHome(r)),
          s = (0, n.T)("useCreatorHome");
        return (
          l.useEffect(() => {
            const t = m.K.InitFromClanID(e);
            p.BHasCreatorHomeLoaded(t)
              ? i || a(p.GetCreatorHome(t))
              : p.LoadCreatorHome(t).then(() => {
                  var e;
                  (null === (e = null == s ? void 0 : s.token) || void 0 === e
                    ? void 0
                    : e.reason) || a(p.GetCreatorHome(t));
                });
          }, [
            null === (t = null == s ? void 0 : s.token) || void 0 === t
              ? void 0
              : t.reason,
            e,
            i,
          ]),
          i
        );
      }
      window.g_CreatorHomeStore = p;
    },
    54671: (e, t, r) => {
      r.d(t, { LA: () => u, jg: () => d });
      var i = r(33940),
        n = r(52868),
        a = r.n(n),
        s = r(50265),
        o = (r(46132), r(51637), r(47165), r(63403), r(23217)),
        l = r(32765),
        c = r(89526);
      const m = "unUserdataVersion";
      class d {
        constructor() {
          (this.m_setWishList = new Set()),
            (this.m_wishlistInOrder = Array()),
            (this.m_setOwnedPackages = new Set()),
            (this.m_setOwnedApps = new Set()),
            (this.m_setFollowedApps = new Set()),
            (this.m_setExcludedTagsIds = new Set()),
            (this.m_setExcludedContentDescriptors = new Set()),
            (this.m_setRecommendedApps = new Set()),
            (this.m_recAppInOrder = new Array()),
            (this.m_mapIgnoredApps = new Map()),
            (this.m_mapIgnoredPackages = new Map()),
            (this.m_setCuratorsFollowed = new Set()),
            (this.m_setCuratorsIgnored = new Set()),
            (this.m_bShowFilteredUserReviewScores = !0),
            (this.m_setPreferredPlatforms = new Set()),
            (this.m_bAllowAppImpressions = !1),
            (this.m_primaryLanguage = -1),
            (this.m_secondaryLanguages = new Set()),
            (this.m_setRecommendedTags = new Set()),
            (this.m_mapRecommendingCuratorsForApp = new Map()),
            (this.m_setPackagesInCart = new Set()),
            (this.m_setAppsInCart = new Set()),
            (this.m_nCartLineItemCount = 0),
            (this.m_bIsLoaded = !1),
            (this.m_bAjaxInFlight = !1);
        }
        BIsLoaded() {
          return this.m_bIsLoaded;
        }
        GetWishlistGamesInUserOrder() {
          return this.m_wishlistInOrder;
        }
        GetWishlistGameCount() {
          return this.m_setWishList.size;
        }
        GetRecommendedGamesInIRPriorityOrder() {
          return this.m_recAppInOrder;
        }
        GetFollowedCuratorCount() {
          return this.m_setCuratorsFollowed.size;
        }
        GetFollowedCuratorsAccountID() {
          return Array.from(this.m_setCuratorsFollowed);
        }
        GetPackagesInCartCount() {
          return this.m_setPackagesInCart.size;
        }
        GetAppInCartCount() {
          return this.m_setAppsInCart.size;
        }
        GetCartLineItemCount() {
          return this.m_nCartLineItemCount;
        }
        GetIgnoredAppsCount() {
          return this.m_mapIgnoredApps.size;
        }
        BIsFollowingCurator(e) {
          const t =
            "object" == typeof e && "GetAccountID" in e ? e.GetAccountID() : e;
          return this.m_setCuratorsFollowed.has(t);
        }
        BIsFollowingCreator(e) {
          return this.BIsFollowingCurator(e);
        }
        BIsIgnoringCurator(e) {
          const t =
            "object" == typeof e && "GetAccountID" in e ? e.GetAccountID() : e;
          return this.m_setCuratorsIgnored.has(t);
        }
        get ExcludedContentDescriptor() {
          return Array.from(this.m_setExcludedContentDescriptors);
        }
        BExcludesTag(e) {
          return e.some((e) => this.m_setExcludedTagsIds.has(Number(e.tagid)));
        }
        BExcludeTagIDs(e) {
          return e.some((e) => this.m_setExcludedTagsIds.has(e));
        }
        GetExcludedTagsSortedByID() {
          return Array.from(this.m_setExcludedTagsIds).sort();
        }
        BExcludesContentDescriptor(e) {
          return e.some((e) => this.m_setExcludedContentDescriptors.has(e));
        }
        BIncludesContentDescriptor(e) {
          return !this.m_setExcludedContentDescriptors.has(e);
        }
        BIsGameWishlisted(e) {
          return this.m_setWishList.has(Number(e));
        }
        BIsGameRecommended(e) {
          return this.m_setRecommendedApps.has(Number(e));
        }
        BIsGameIgnored(e) {
          return this.m_mapIgnoredApps && this.m_mapIgnoredApps.has(e);
        }
        BIsPackageIgnored(e) {
          var t;
          return null === (t = this.m_mapIgnoredPackages) || void 0 === t
            ? void 0
            : t.has(e);
        }
        BIsGameOwned(e) {
          return this.m_setOwnedApps.has(Number(e));
        }
        BOwnsApp(e) {
          return this.m_setOwnedApps.has(Number(e));
        }
        BFollowsApp(e) {
          return this.m_setFollowedApps.has(Number(e));
        }
        BOwnsPackage(e) {
          return this.m_setOwnedPackages.has(Number(e));
        }
        BShowFilteredUserReviewScores() {
          return this.m_bShowFilteredUserReviewScores;
        }
        BAppImpressionsAllowed() {
          return this.m_bAllowAppImpressions;
        }
        GetPrimaryLanguage() {
          return this.m_primaryLanguage;
        }
        GetSecondaryLanguages() {
          return this.m_secondaryLanguages;
        }
        BIsAnyLanguageEnabled(e) {
          return (
            null == this.m_primaryLanguage ||
            this.m_primaryLanguage <= -1 ||
            30 <= this.m_primaryLanguage ||
            e.some(
              (e) =>
                this.m_primaryLanguage === e || this.m_secondaryLanguages.has(e)
            )
          );
        }
        GetRecommendedTags() {
          return this.m_setRecommendedTags;
        }
        BIsAjaxInFlight() {
          return this.m_bAjaxInFlight;
        }
        BIsAppRecommendedBySomeCurator(e) {
          return this.m_mapRecommendingCuratorsForApp.has(e);
        }
        GetRecommendingCuratorsForApp(e) {
          return this.m_mapRecommendingCuratorsForApp.get(e);
        }
        GetOwnedApps() {
          return this.m_setOwnedApps;
        }
        GetWishlistedApps() {
          return this.m_setWishList;
        }
        HintLoad() {
          return (0, i.mG)(this, void 0, void 0, function* () {
            return (
              this.m_promise || (this.m_promise = this.InternalLoad()),
              this.m_promise
            );
          });
        }
        InternalLoad() {
          return (0, i.mG)(this, void 0, void 0, function* () {
            let e = window.localStorage.getItem(m) || "0",
              t = {
                v: "0" == e ? void 0 : e,
                id: "" + l.L7.accountid,
                cc: "" + l.De.COUNTRY,
                origin: self.origin,
              },
              r = l.De.STORE_BASE_URL + "dynamicstore/userdata/";
            try {
              let e = yield a().get(r, { params: t, withCredentials: !0 });
              e &&
                200 == e.status &&
                (0, s.z)(() => {
                  if (((this.m_bIsLoaded = !0), e.data.rgCurators)) {
                    this.m_setCuratorsFollowed = new Set();
                    for (const t in e.data.rgCurators)
                      this.m_setCuratorsFollowed.add(Number(t));
                  }
                  if (
                    (e.data.rgCuratorsIgnored &&
                      (this.m_setCuratorsIgnored = new Set(
                        e.data.rgCuratorsIgnored.map((e) => Number(e))
                      )),
                    e.data.rgWishlist &&
                      ((this.m_wishlistInOrder = e.data.rgWishlist.map((e) =>
                        Number(e)
                      )),
                      (this.m_setWishList = new Set(
                        e.data.rgWishlist.map((e) => Number(e))
                      ))),
                    e.data.rgFollowedApps &&
                      (this.m_setFollowedApps = new Set(
                        e.data.rgFollowedApps.map((e) => Number(e))
                      )),
                    e.data.rgOwnedApps &&
                      (this.m_setOwnedApps = new Set(
                        e.data.rgOwnedApps.map((e) => Number(e))
                      )),
                    e.data.rgOwnedPackages &&
                      (this.m_setOwnedPackages = new Set(
                        e.data.rgOwnedPackages.map((e) => Number(e))
                      )),
                    e.data.rgIgnoredApps)
                  ) {
                    const t = e.data.rgIgnoredApps;
                    this.m_mapIgnoredApps = new Map();
                    for (const e in t)
                      this.m_mapIgnoredApps.set(Number(e), Number(t[e]));
                  }
                  if (e.data.rgIgnoredPackages) {
                    const t = e.data.rgIgnoredPackages;
                    this.m_mapIgnoredPackages = new Map();
                    for (const e in t)
                      this.m_mapIgnoredPackages.set(Number(e), Number(t[e]));
                  }
                  if (
                    (e.data.rgExcludedTags &&
                      (this.m_setExcludedTagsIds = new Set(
                        e.data.rgExcludedTags.map((e) => Number(e.tagid))
                      )),
                    e.data.rgExcludedContentDescriptorIDs &&
                      (this.m_setExcludedContentDescriptors = new Set(
                        e.data.rgExcludedContentDescriptorIDs.map((e) =>
                          Number(e)
                        )
                      )),
                    e.data.rgRecommendedApps &&
                      ((this.m_recAppInOrder = e.data.rgRecommendedApps.map(
                        (e) => Number(e)
                      )),
                      (this.m_setRecommendedApps = new Set(
                        e.data.rgRecommendedApps.map((e) => Number(e))
                      ))),
                    e.data.rgPreferredPlatforms &&
                      (this.m_setPreferredPlatforms = new Set(
                        e.data.rgPreferredPlatforms
                      )),
                    e.data.bAllowAppImpressions &&
                      (this.m_bAllowAppImpressions =
                        e.data.bAllowAppImpressions),
                    (this.m_bShowFilteredUserReviewScores =
                      !!e.data.bShowFilteredUserReviewScores),
                    void 0 !== e.data.rgPrimaryLanguage &&
                      (this.m_primaryLanguage = e.data.rgPrimaryLanguage),
                    e.data.rgSecondaryLanguages &&
                      (this.m_secondaryLanguages = new Set(
                        e.data.rgSecondaryLanguages
                      )),
                    e.data.rgRecommendedTags &&
                      (this.m_setRecommendedTags = new Set(
                        e.data.rgRecommendedTags.map((e) => e.tagid)
                      )),
                    e.data.rgAppsInCart &&
                      (this.m_setAppsInCart = new Set(e.data.rgAppsInCart)),
                    e.data.rgPackagesInCart &&
                      (this.m_setPackagesInCart = new Set(
                        e.data.rgPackagesInCart
                      )),
                    e.data.nCartLineItemCount &&
                      (this.m_nCartLineItemCount = e.data.nCartLineItemCount),
                    e.data.rgCurations)
                  )
                    for (const t of Object.keys(e.data.rgCurations)) {
                      const r = [];
                      for (const i of Object.keys(e.data.rgCurations[t]))
                        0 === e.data.rgCurations[t][i] && r.push(Number(i));
                      this.m_mapRecommendingCuratorsForApp.set(Number(t), r);
                    }
                });
            } catch (e) {
              let t = (0, o.l)(e);
              console.error("CDynamicStore.InternalLoad", t.strErrorMsg, t);
            }
            return this;
          });
        }
        UpdateFollowOrIgnoreCurator(e, t, r) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            let i =
              l.De.STORE_BASE_URL +
              "curators/" +
              (t ? "ajaxfollow/" : "ajaxignore/");
            const n = e.GetAccountID(),
              s = new FormData();
            s.append("clanid", "" + n),
              s.append("sessionid", l.De.SESSIONID),
              s.append(t ? "follow" : "ignore", r ? "1" : "0");
            let o = yield a().post(i, s, { withCredentials: !0 });
            if (o && 200 == o.status) {
              this.InvalidateCache();
              const e = t
                ? this.m_setCuratorsFollowed
                : this.m_setCuratorsIgnored;
              r ? e.add(n) : e.delete(n);
            }
            return o.data;
          });
        }
        UpdateAppIgnore(e, t, r = 0) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            let i = l.De.STORE_BASE_URL + "recommended/ignorerecommendation";
            const n = new FormData();
            n.append("sessionid", l.De.SESSIONID),
              n.append("appid", "" + e),
              n.append("remove", t ? "0" : "1"),
              n.append("snr", l.De.SNR),
              n.append("ignore_reason", "" + r);
            try {
              this.m_bAjaxInFlight = !0;
              let o = yield a().post(i, n, { withCredentials: !0 });
              return (
                o &&
                  200 == o.status &&
                  (0, s.z)(() => {
                    this.InvalidateCache(),
                      t
                        ? this.m_mapIgnoredApps.set(e, r)
                        : this.m_mapIgnoredApps.delete(e);
                  }),
                (this.m_bAjaxInFlight = !1),
                o.data
              );
            } catch (e) {
              let t = (0, o.l)(e);
              console.error("UpdateAppIgnore", t.strErrorMsg, t);
            }
            return (this.m_bAjaxInFlight = !1), { success: 2 };
          });
        }
        UpdateGameWishlist(e, t, r, n) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            let i =
              l.De.STORE_BASE_URL +
              "api/" +
              (t ? "addtowishlist" : "removefromwishlist");
            const s = new FormData();
            s.append("appid", "" + e),
              s.append("sessionid", l.De.SESSIONID),
              r && s.append("snr", r),
              (this.m_bAjaxInFlight = !0);
            let o = yield a().post(i, s, {
              withCredentials: !0,
              cancelToken: n ? n.token : void 0,
            });
            if (((this.m_bAjaxInFlight = !1), n && n.token.reason))
              return { success: 52 };
            if (
              ((o.data.success = 1 == o.data.success ? 1 : 2),
              1 == o.data.success)
            )
              if ((this.InvalidateCache(), (e = Number(e)), t))
                this.m_setWishList.has(e) || this.m_wishlistInOrder.push(e),
                  this.m_setWishList.add(e);
              else {
                if (this.m_setWishList.has(e)) {
                  const t = this.m_wishlistInOrder.findIndex((t) => t == e);
                  -1 != t && this.m_wishlistInOrder.splice(t, 1);
                }
                this.m_setWishList.delete(e);
              }
            return o.data;
          });
        }
        AddToCart(e, t, r, n, s, o) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            const i = new FormData();
            i.append("action", "add_to_cart"),
              o
                ? i.append("bundleid", o.toString())
                : i.append("subid", "" + t),
              s && i.append("snr", s),
              i.append("sessionid", l.De.SESSIONID),
              i.append("quantity", "1");
            try {
              yield a().post(r, i, { withCredentials: !0 }),
                e.preventDefault(),
                this.InvalidateCache(),
                (window.location.href = n);
            } catch (e) {
              console.log("HandleOnAddToCart"), console.log(e);
            }
          });
        }
        AddLicenseForFreeGame(e) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            if (this.BOwnsApp(e)) return 1;
            try {
              const t = new FormData();
              t.append("sessionid", l.De.SESSIONID),
                t.append("appid", "" + e),
                t.append("cc", l.De.COUNTRY);
              let r =
                  l.De.STORE_BASE_URL + "actions/addappformastersubscription",
                i = yield a().post(r, t, { withCredentials: !0 });
              if (
                (this.InvalidateCache(),
                !i.data.success || 1 !== i.data.success)
              )
                return i.data.success ? i.data.success : 2;
              this.m_setOwnedApps.add(Number(e));
            } catch (e) {
              let t = (0, o.l)(e);
              return (
                console.log("AddLicense request failed:", t.strErrorMsg, t), 2
              );
            }
            return 1;
          });
        }
        UpdateFollowingApp(e, t) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            try {
              const r = l.De.STORE_BASE_URL + "explore/followgame",
                i = new FormData();
              i.append("appid", "" + e),
                i.append("sessionid", l.De.SESSIONID),
                t || i.append("unfollow", "1");
              const n = yield a().post(r, i, { withCredentials: !0 });
              if (!n.data) return 2;
              this.InvalidateCache(),
                t
                  ? this.m_setFollowedApps.add(Number(e))
                  : this.m_setFollowedApps.delete(Number(e));
            } catch (e) {
              return console.log("Follow game request failed"), 2;
            }
            return 1;
          });
        }
        BHasPlatformPreferenceSet() {
          return (
            this.m_setPreferredPlatforms.size > 0 &&
            this.m_setPreferredPlatforms.size < 3
          );
        }
        BIsPreferredPlatform(e) {
          return this.m_setPreferredPlatforms.has(e);
        }
        InvalidateCache() {
          window.localStorage.setItem(
            m,
            (
              Number.parseInt(window.localStorage.getItem(m) || "0") + 1
            ).toString()
          );
        }
        static Get() {
          return (
            d.s_globalSingletonStore ||
              ((d.s_globalSingletonStore = new d()),
              "dev" == l.De.WEB_UNIVERSE &&
                (window.DUS = d.s_globalSingletonStore)),
            d.s_globalSingletonStore
          );
        }
      }
      function u() {
        const [e, t] = (0, c.useState)(!d.Get().BIsLoaded());
        return (
          (0, c.useEffect)(() => {
            e &&
              d
                .Get()
                .HintLoad()
                .finally(() => t(!d.Get().BIsLoaded()));
          }, [e]),
          [e, d.Get()]
        );
      }
      (0, i.gn)([s.LO], d.prototype, "m_setWishList", void 0),
        (0, i.gn)([s.LO], d.prototype, "m_setOwnedPackages", void 0),
        (0, i.gn)([s.LO], d.prototype, "m_setOwnedApps", void 0),
        (0, i.gn)([s.LO], d.prototype, "m_setFollowedApps", void 0),
        (0, i.gn)([s.LO], d.prototype, "m_setExcludedTagsIds", void 0),
        (0, i.gn)(
          [s.LO],
          d.prototype,
          "m_setExcludedContentDescriptors",
          void 0
        ),
        (0, i.gn)([s.LO], d.prototype, "m_setRecommendedApps", void 0),
        (0, i.gn)([s.LO], d.prototype, "m_mapIgnoredApps", void 0),
        (0, i.gn)([s.LO], d.prototype, "m_mapIgnoredPackages", void 0),
        (0, i.gn)([s.LO], d.prototype, "m_setCuratorsFollowed", void 0),
        (0, i.gn)([s.LO], d.prototype, "m_setCuratorsIgnored", void 0),
        (0, i.gn)(
          [s.LO],
          d.prototype,
          "m_bShowFilteredUserReviewScores",
          void 0
        ),
        (0, i.gn)([s.LO], d.prototype, "m_primaryLanguage", void 0),
        (0, i.gn)([s.LO], d.prototype, "m_secondaryLanguages", void 0),
        (0, i.gn)([s.LO], d.prototype, "m_setRecommendedTags", void 0),
        (0, i.gn)(
          [s.LO],
          d.prototype,
          "m_mapRecommendingCuratorsForApp",
          void 0
        ),
        (0, i.gn)([s.LO], d.prototype, "m_setPackagesInCart", void 0),
        (0, i.gn)([s.LO], d.prototype, "m_setAppsInCart", void 0),
        (0, i.gn)([s.LO], d.prototype, "m_nCartLineItemCount", void 0),
        (0, i.gn)([s.LO], d.prototype, "m_bAjaxInFlight", void 0),
        (0, i.gn)([s.Fl], d.prototype, "ExcludedContentDescriptor", null),
        (0, i.gn)([s.aD], d.prototype, "UpdateAppIgnore", null);
    },
    24448: (e, t, r) => {
      r.d(t, { Gr: () => h, Jq: () => g, y$: () => _ });
      var i = r(33940),
        n = r(52868),
        a = r.n(n),
        s = r(50265),
        o = r(89526),
        l = (r(46132), r(51637), r(4556)),
        c = r(47165),
        m = (r(63403), r(23801)),
        d = r(23217),
        u = r(32765);
      class p {
        constructor() {
          (this.m_mapProfiles = new Map()),
            (this.m_mapProfilesLoading = new Map());
        }
        LoadProfiles(e, t) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            (0,
            m.X)(e.length <= 500, "Check LoadProfiles, requesting too many steam IDs");
            let r = e.filter(
              (e) =>
                !this.m_mapProfiles.has(e) && !this.m_mapProfilesLoading.has(e)
            );
            if (0 == r.length) return this.m_mapProfilesLoading.get(e[0]);
            let i = u.De.COMMUNITY_BASE_URL + "actions/ajaxresolveusers",
              n = a().get(i, {
                params: { steamids: r.join(",") },
                withCredentials: !0,
                cancelToken: null == t ? void 0 : t.token,
              });
            r.forEach((e) => this.m_mapProfilesLoading.set(e, n));
            let s = yield n;
            s.data &&
              200 == s.status &&
              s.data.forEach((e) => {
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
        BHasAllProfilesBySteamID(e) {
          return !e.some((e) => !this.BHasProfileBySteamID(e));
        }
        GetProfileURLBySteamID(e) {
          const t = this.GetProfileBySteamID(e);
          return t && t.profile_url
            ? u.De.COMMUNITY_BASE_URL + "id/" + t.profile_url
            : u.De.COMMUNITY_BASE_URL + "profiles/" + e.ConvertTo64BitString();
        }
        GetPersonaNameBySteamID(e) {
          const t = this.GetProfileBySteamID(e);
          return t && t.persona_name ? t.persona_name : "";
        }
      }
      (0, i.gn)([s.LO], p.prototype, "m_mapProfiles", void 0);
      const _ = new p();
      function h(e) {
        const t = o.useMemo(
            () => (e ? ("string" == typeof e ? new c.K(e) : e) : null),
            [e]
          ),
          [r, i] = (0, o.useState)(!!t && !_.BHasProfileBySteamID(t));
        (0, o.useEffect)(() => {
          const e = a().CancelToken.source();
          return (
            t &&
              !_.BHasProfileBySteamID(t) &&
              _.LoadProfiles([t.ConvertTo64BitString()])
                .catch((e) => {
                  const r = (0, d.l)(e);
                  console.error(
                    "useUserProfile failed to load profile for " +
                      t.ConvertTo64BitString() +
                      ": " +
                      r.strErrorMsg,
                    r
                  );
                })
                .finally(() => {
                  e.token.reason || i(!1);
                }),
            () => e.cancel("unmounting useUserProfile")
          );
        }, [e]);
        return [r, !!t && _.GetProfileBySteamID(t)];
      }
      function g(e) {
        return h(o.useMemo(() => c.K.InitFromAccountID(e), [e]));
      }
      window.g_ProfileStore = _;
    },
    58218: (e, t, r) => {
      r.d(t, { T: () => s });
      var i = r(52868),
        n = r.n(i),
        a = r(89526);
      function s(e) {
        const t = a.useRef(n().CancelToken.source());
        return (
          a.useEffect(() => {
            const r = t.current;
            return () => r.cancel(e ? `${e}: unmounting` : "unmounting");
          }, [e]),
          t.current
        );
      }
    },
    63403: (e, t, r) => {
      r(46132);
    },
    207: (e, t, r) => {
      r.d(t, {
        Bg: () => u,
        FM: () => a,
        H7: () => n,
        OL: () => p,
        Pm: () => l,
        XW: () => s,
        dK: () => m,
        et: () => c,
        md: () => _,
      });
      var i = r(32765);
      r(51637), r(14826);
      const n =
        /((?:(?:https?:)|(?:www[.,])|(?:[!#-;=?-Z\\\^-~]+[\.,](?:(?:[a-zA-Z]{2,4}[\.?]*[\/\\\?#])|(?:(?:biz|com|gallery|in|name|net|online|org|tech|trade|xyz)(?=\W|$)))))(?:[^ː\s"<>\[\]]*[^\\s"<>\[\],.ː:])?)/;
      function a(e) {
        let t = new RegExp(
            "^(steam://openurl(_external)?/)?((f|ht)tps?://)?([^@/?#]*@)?([^/#?]+)",
            "im"
          ),
          r = e.match(t);
        return r && r.length > 5 ? r[6].toString() : e;
      }
      function s(e) {
        let t = a(e);
        return t.startsWith("www.") && (t = t.slice(4)), t;
      }
      const o = /^(steam|ftp|https?):\/\//;
      function l(e) {
        return o.test(e) ? e : "https://" + e;
      }
      function c(e) {
        return e
          ? 1 != i.De.EUNIVERSE
            ? e
            : ("http:" == e.substring(0, 5) && (e = "https:" + e.substring(5)),
              (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e =
                (e = (e = e.replace(
                  /https:\/\/media.steampowered.com\//g,
                  i.De.MEDIA_CDN_URL
                )).replace(
                  /https:\/\/cdn.akamai.steamstatic.com\//g,
                  i.De.MEDIA_CDN_URL
                )).replace(
                  /https:\/\/cdn.cloudflare.steamstatic.com\//g,
                  i.De.MEDIA_CDN_URL
                )).replace(
                /https:\/\/cdn.edgecast.steamstatic.com\//g,
                i.De.MEDIA_CDN_URL
              )).replace(
                /https:\/\/cdn.dota2.com\//g,
                i.De.MEDIA_CDN_URL
              )).replace(
                /https:\/\/storefront.steampowered.com\/v\/gfx\//g,
                i.De.MEDIA_CDN_URL + "steam/"
              )).replace(
                /https:\/\/cdn.steamcommunity.com\//g,
                i.De.COMMUNITY_CDN_URL
              )).replace(
                /https:\/\/community.akamai.steamstatic.com\//g,
                i.De.COMMUNITY_CDN_URL
              )).replace(
                /https:\/\/community.cloudflare.steamstatic.com\//g,
                i.De.COMMUNITY_CDN_URL
              )).replace(
                /https:\/\/community.edgecast.steamstatic.com\//g,
                i.De.COMMUNITY_CDN_URL
              )).replace(/{IMG_URL}/g, i.De.IMG_URL)).replace(
                /{MEDIA_CDN_URL}/g,
                i.De.MEDIA_CDN_URL
              )).replace(
                /{MEDIA_CDN_COMMUNITY_URL}/g,
                i.De.MEDIA_CDN_COMMUNITY_URL
              )).replace(
                /{COMMUNITY_CDN_URL}/g,
                i.De.COMMUNITY_CDN_URL
              )).replace(
                /{STEAM_CLAN_IMAGE}/g,
                i.De.MEDIA_CDN_COMMUNITY_URL + "images/clans/"
              )))
          : e;
      }
      function m(e) {
        if (!e) return !0;
        const t = a(e).toLocaleLowerCase();
        return (
          [
            a(i.De.COMMUNITY_CDN_URL).toLocaleLowerCase(),
            a(i.De.MEDIA_CDN_URL).toLocaleLowerCase(),
            a(i.De.MEDIA_CDN_COMMUNITY_URL).toLocaleLowerCase(),
            a(i.De.STORE_CDN_URL).toLocaleLowerCase(),
            "support.steampowered.com",
            "steamcdn-a.akamaihd.net",
            "cdn.cloudflare.steamstatic.com",
            "cdn.akamai.steamstatic.com",
          ].indexOf(t) >= 0
        );
      }
      function d(e, t) {
        return `${i.De.MEDIA_CDN_URL}steam/apps/${e}/${t}`;
      }
      function u(e) {
        return d(e, "header.jpg");
      }
      function p(e) {
        return i.De.SNR &&
          i.De.SNR.length > 0 &&
          e &&
          -1 == e.toLocaleLowerCase().indexOf("snr=")
          ? e + (e.indexOf("?") >= 0 ? "&" : "?") + "snr=" + i.De.SNR
          : e;
      }
      function _(e, t) {
        try {
          const r = new URL(t),
            i = new URL(e);
          return r.href.replace(/\/$/, "") + i.pathname + i.search + i.hash;
        } catch (e) {
          return "";
        }
      }
    },
  },
]);

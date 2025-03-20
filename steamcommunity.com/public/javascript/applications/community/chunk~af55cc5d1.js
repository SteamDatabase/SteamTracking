/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [5955],
  {
    4796: (t, e, a) => {
      a.d(e, { TB: () => d, W$: () => I, ac: () => _ });
      var n = a(34629),
        r = a(41735),
        o = a.n(r),
        i = a(14947),
        s = a(90626),
        l = a(17720),
        m = a(44332),
        c = a(78327),
        p = a(67165);
      class u {
        constructor() {
          (this.m_mapAppIDToClanInfo = new Map()),
            (this.m_mapVanityToClanInfo = new Map()),
            (this.m_mapClanAccountIDToClanInfo = new Map()),
            (this.m_mapPromisesLoading = new Map()),
            (this.m_rgQueuedEventsClanIDs = new Array()),
            (this.m_bLoadedFromConfig = !1),
            (0, i.Gn)(this);
        }
        Init() {
          this.LazyInit();
        }
        LazyInit() {
          this.m_bLoadedFromConfig ||
            ((0, i.h5)(() => {
              let t = (0, c.Fd)("groupvanityinfo", "application_config");
              this.ValidateClanConfig(t) &&
                t.forEach((t) => {
                  this.InternalSetupValue(t);
                });
            }),
            (this.m_bLoadedFromConfig = !0));
        }
        AddGroupVanities(t) {
          (0, i.h5)(() => {
            this.ValidateClanConfig(t) &&
              t.forEach((t) => {
                this.InternalSetupValue(t);
              });
          });
        }
        ValidateClanConfig(t) {
          const e = t;
          return (
            !!(
              e &&
              Array.isArray(e) &&
              e.length > 0 &&
              "object" == typeof e[0]
            ) &&
            "number" == typeof e[0].clanAccountID &&
            ("number" == typeof e[0].appid ||
              "string" == typeof e[0].vanity_url)
          );
        }
        BHasClanInfoLoaded(t) {
          return (
            (0, m.w)(t.BIsValid(), "Clan SteamID is not valid when ClanInfo"),
            (0, m.w)(
              t.BIsClanAccount(),
              "Clan SteamID is not a clan account id when requesting clan info ",
            ),
            this.m_mapClanAccountIDToClanInfo.has(t.GetAccountID())
          );
        }
        BHasClanInfoLoadedByAccountID(t) {
          return this.m_mapClanAccountIDToClanInfo.has(t);
        }
        RegisterClanData(t) {
          for (const e of t) this.InternalSetupValue(e);
        }
        InternalSetupValue(t) {
          const e = {
            clanAccountID: t.clanAccountID,
            clanSteamID: new l.b(t.clanSteamIDString),
            appid: t.appid,
            vanity_url: t.vanity_url,
            member_count: t.member_count,
            is_ogg: t.is_ogg,
            is_creator_home: t.is_creator_home,
            is_curator: t.is_curator,
            has_visible_store_page: t.has_visible_store_page,
            has_rss_feed: t.has_rss_feed,
            rss_language: t.rss_language ? t.rss_language : 0,
            avatar_full_url: t.avatar_full_url,
            avatar_medium_url: t.avatar_medium_url,
            group_name: t.group_name,
            creator_page_bg_url: t.creator_page_bg_url,
            partner_events_enabled: t.partner_events_enabled,
          };
          0 != t.appid && this.m_mapAppIDToClanInfo.set(t.appid, e),
            t.vanity_url &&
              t.vanity_url.length > 0 &&
              this.m_mapVanityToClanInfo.set(
                t.vanity_url.toLocaleLowerCase(),
                e,
              ),
            this.m_mapClanAccountIDToClanInfo.set(t.clanAccountID, e);
        }
        GetRequestParam() {
          return { origin: self.origin };
        }
        async LoadOGGClanInfoForAppID(t) {
          if (
            (this.LazyInit(),
            "string" == typeof t && (t = parseInt(t)),
            (0, m.w)(
              0 != t,
              "LoadOGGClanInfoForAppID called with appid of zero",
            ),
            0 == t)
          )
            return null;
          if (this.m_mapAppIDToClanInfo.has(t))
            return this.m_mapAppIDToClanInfo.get(t);
          let e = "appid_" + t;
          return (
            this.m_mapPromisesLoading.has(e) ||
              this.m_mapPromisesLoading.set(
                e,
                this.InternalLoadOGGClanInfoForAppID(t),
              ),
            this.m_mapPromisesLoading.get(e)
          );
        }
        async InternalLoadOGGClanInfoForAppID(t) {
          const e =
            c.TS.COMMUNITY_BASE_URL + "ogg/" + t + "/ajaxgetvanityandclanid/";
          let a = null;
          try {
            a = (await o().get(e, { params: this.GetRequestParam() })).data;
          } catch (t) {}
          return a
            ? (this.InternalSetupValue(a), this.m_mapAppIDToClanInfo.get(t))
            : null;
        }
        async LoadOGGClanInfoForIdentifier(t) {
          if (
            (this.LazyInit(),
            this.m_mapVanityToClanInfo.has(
              null == t ? void 0 : t.toLocaleLowerCase(),
            ))
          )
            return this.m_mapVanityToClanInfo.get(
              null == t ? void 0 : t.toLocaleLowerCase(),
            );
          let e = "storevanity_" + (null == t ? void 0 : t.toLocaleLowerCase());
          return (
            this.m_mapPromisesLoading.has(e) ||
              this.m_mapPromisesLoading.set(
                e,
                this.InternalLoadOGGClanInfoForIdentifier(t),
              ),
            this.m_mapPromisesLoading.get(e)
          );
        }
        async InternalLoadOGGClanInfoForIdentifier(t) {
          const e =
            c.TS.COMMUNITY_BASE_URL + "games/" + t + "/ajaxgetvanityandclanid/";
          let a = await o().get(e, { params: this.GetRequestParam() });
          return (
            this.InternalSetupValue(a.data),
            this.m_mapVanityToClanInfo.get(
              null == t ? void 0 : t.toLocaleLowerCase(),
            )
          );
        }
        async LoadOGGClanInfoForGroupVanity(t) {
          if (
            (this.LazyInit(),
            this.m_mapVanityToClanInfo.has(
              null == t ? void 0 : t.toLocaleLowerCase(),
            ))
          )
            return this.m_mapVanityToClanInfo.get(
              null == t ? void 0 : t.toLocaleLowerCase(),
            );
          let e = "community_name_" + t;
          return (
            this.m_mapPromisesLoading.has(e) ||
              this.m_mapPromisesLoading.set(
                e,
                this.InternalLoadOGGClanInfoForGroupVanity(
                  null == t ? void 0 : t.toLocaleLowerCase(),
                ),
              ),
            this.m_mapPromisesLoading.get(e)
          );
        }
        async InternalLoadOGGClanInfoForGroupVanity(t) {
          const e =
            c.TS.COMMUNITY_BASE_URL +
            "groups/" +
            t +
            "/ajaxgetvanityandclanid/";
          let a = await o().get(e, { params: this.GetRequestParam() });
          return (
            this.InternalSetupValue(a.data),
            this.m_mapVanityToClanInfo.get(
              null == t ? void 0 : t.toLocaleLowerCase(),
            )
          );
        }
        async LoadClanInfoForClanSteamID(t) {
          this.LazyInit();
          let e = t.GetAccountID();
          if (this.m_mapClanAccountIDToClanInfo.has(e))
            return this.m_mapClanAccountIDToClanInfo.get(e);
          let a = "clanaccountid_" + e;
          return (
            this.m_mapPromisesLoading.has(a) ||
              this.m_mapPromisesLoading.set(
                a,
                this.InternalLoadClanInfoForClanSteamID(t),
              ),
            this.m_mapPromisesLoading.get(a)
          );
        }
        async LoadClanInfoForClanAccountID(t) {
          const e = l.b.InitFromClanID(t);
          return this.LoadClanInfoForClanSteamID(e);
        }
        async InternalLoadClanInfoForClanSteamID(t) {
          let e = t.GetAccountID();
          const a =
            c.TS.COMMUNITY_BASE_URL +
            "gid/" +
            t.ConvertTo64BitString() +
            "/ajaxgetvanityandclanid/";
          let n = await o().get(a, { params: this.GetRequestParam() });
          return (
            this.InternalSetupValue(n.data),
            this.m_mapClanAccountIDToClanInfo.get(e)
          );
        }
        GetOGGClanInfo(t) {
          return "string" == typeof t
            ? this.m_mapVanityToClanInfo.get(
                null == t ? void 0 : t.toLocaleLowerCase(),
              )
            : this.m_mapAppIDToClanInfo.get(t);
        }
        GetClanSteamIDForAppID(t) {
          if ((this.LazyInit(), this.m_mapAppIDToClanInfo.has(t)))
            return l.b.InitFromClanID(
              this.m_mapAppIDToClanInfo.get(t).clanAccountID,
            );
        }
        GetClanVanityForAppID(t) {
          if ((this.LazyInit(), this.m_mapAppIDToClanInfo.has(t)))
            return this.m_mapAppIDToClanInfo.get(t).vanity_url;
        }
        GetClanVanityForClanSteamID(t) {
          if (
            (this.LazyInit(),
            this.m_mapClanAccountIDToClanInfo.has(t.GetAccountID()))
          )
            return this.m_mapClanAccountIDToClanInfo.get(t.GetAccountID())
              .vanity_url;
        }
        HasLoadedClanAccountID(t) {
          return this.LazyInit(), this.m_mapClanAccountIDToClanInfo.has(t);
        }
        GetClanMemberCount(t) {
          return this.m_mapAppIDToClanInfo.has(t)
            ? this.m_mapAppIDToClanInfo.get(t).member_count
            : 0;
        }
        GetClanInfoByClanAccountID(t) {
          return (
            this.LazyInit(),
            (0, m.w)(
              !!t,
              "Unepxected clanid when requesting information. GetClanInfoByClanAccountID ",
            ),
            this.m_mapClanAccountIDToClanInfo.get(t)
          );
        }
        GetCreatorStoreURL(t) {
          let e = p.pF.GetCreatorHome(t);
          if (e) return e.GetCreatorHomeURL("developer");
          let a = this.GetClanInfoByClanAccountID(t.GetAccountID());
          return (
            c.TS.COMMUNITY_BASE_URL +
            (a.vanity_url
              ? "groups/" + a.vanity_url
              : "gid/" + t.ConvertTo64BitString())
          );
        }
      }
      (0, n.Cg)([i.sH], u.prototype, "m_mapAppIDToClanInfo", void 0),
        (0, n.Cg)([i.sH], u.prototype, "m_mapVanityToClanInfo", void 0),
        (0, n.Cg)([i.sH], u.prototype, "m_mapClanAccountIDToClanInfo", void 0),
        (0, n.Cg)([i.XI], u.prototype, "RegisterClanData", null),
        (0, n.Cg)([i.XI], u.prototype, "InternalSetupValue", null);
      const _ = new u();
      function d(t) {
        const [e, a] = (0, s.useState)(
            t ? _.GetClanInfoByClanAccountID(t) : void 0,
          ),
          [n, r] = (0, s.useState)(!!t && !_.BHasClanInfoLoadedByAccountID(t));
        return (
          (0, s.useEffect)(() => {
            if (t)
              if (_.BHasClanInfoLoadedByAccountID(t))
                a(_.GetClanInfoByClanAccountID(t)), r(!1);
              else {
                r(!0);
                const e = l.b.InitFromClanID(
                  "string" == typeof t ? Number.parseInt(t) : t,
                );
                _.LoadClanInfoForClanSteamID(e).then((t) => {
                  a(null != t ? t : void 0), r(!1);
                });
              }
            else a(void 0), r(!1);
          }, [t]),
          [n, e]
        );
      }
      function I(t) {
        const [e, a] = (0, s.useState)(_.GetOGGClanInfo(t));
        return (
          (0, s.useEffect)(() => {
            e || _.LoadOGGClanInfoForGroupVanity(t).then(a);
          }, [e, t]),
          e
        );
      }
      window.g_ClanStore = _;
    },
    67165: (t, e, a) => {
      a.d(e, { pF: () => L, FV: () => A });
      var n = a(34629),
        r = a(4434),
        o = a(41735),
        i = a.n(o),
        s = a(14947),
        l = a(90626),
        m = a(78327);
      class c {
        constructor(t) {
          (this.m_appidList = new Array()),
            (this.m_strName = ""),
            (this.m_strAvatarURLFullSize = ""),
            (this.m_strTagLineLoc = ""),
            (this.m_nFollowers = 0),
            (this.m_strVanity = ""),
            (this.m_webLink = void 0),
            (this.m_bIsLoaded = !1),
            (this.m_bIsHidden = !1),
            (this.m_clanAccountFlags = 0),
            (0, s.Gn)(this),
            (this.m_clanSteamID = t);
        }
        Initialize(t) {
          var e;
          (this.m_strName = t.name || ""),
            (this.m_strAvatarURLFullSize =
              t.avatar_url_full_size ||
              "https://avatars.steamstatic.com/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb_full.jpg"),
            (this.m_strTagLineLoc = t.tag_line_localized || ""),
            (this.m_nFollowers = t.followers || 0),
            (this.m_strVanity = t.vanity || void 0),
            (this.m_webLink = t.weblink),
            (this.m_bIsHidden = t.hidden || !1),
            (this.m_clanAccountFlags =
              null !== (e = t.clan_account_flags) && void 0 !== e ? e : 0),
            t.appids && t.appids.forEach((t) => this.m_appidList.push(t)),
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
        BHasClanAccountFlagSet(t) {
          return Boolean(this.m_clanAccountFlags & t);
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
        GetCreatorHomeURL(t) {
          if (this.m_strVanity) {
            switch (t) {
              case "publisher":
                return (
                  m.TS.STORE_BASE_URL + "publisher/" + this.m_strVanity + "/"
                );
              case "franchise":
                return (
                  m.TS.STORE_BASE_URL + "franchise/" + this.m_strVanity + "/"
                );
            }
            return m.TS.STORE_BASE_URL + "developer/" + this.m_strVanity + "/";
          }
          return (
            m.TS.STORE_BASE_URL +
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
        AdjustFollower(t) {
          this.m_nFollowers += t;
        }
        async EnablePartnerEventEditorFlag() {
          this.BIsPartnerEventEditorEnabled() ||
            (await this.UpdateGroupFlagsFeature([2, 8], !0));
        }
        async UpdateGroupFlagsFeature(t, e) {
          let a = m.TS.PARTNER_BASE_URL + "sales/ajaxupdateclanaccountflags",
            n = this.m_clanAccountFlags;
          if (
            (t.forEach((t) => {
              e ? (n |= t) : (n &= ~t);
            }),
            n == this.m_clanAccountFlags)
          )
            return;
          let r = new Array();
          1 & n && r.push(1),
            8 & n && r.push(8),
            2 & n && r.push(2),
            4 & n && r.push(4),
            16 & n && r.push(16),
            32 & n && r.push(32),
            64 & n && r.push(64);
          let o = new FormData();
          o.append("sessionid", m.TS.SESSIONID),
            o.append("clan_account_id", this.GetClanAccountID().toString()),
            o.append("accountflags", JSON.stringify(r));
          let s = await i().post(a, o);
          s &&
            200 == s.status &&
            1 == s.data.success &&
            (this.m_clanAccountFlags = n);
        }
      }
      (0, n.Cg)([s.sH], c.prototype, "m_appidList", void 0),
        (0, n.Cg)([s.sH], c.prototype, "m_nFollowers", void 0),
        (0, n.Cg)([s.sH], c.prototype, "m_clanAccountFlags", void 0);
      var p,
        u = a(17720),
        _ = a(56545),
        d = a(80613),
        I = a.n(d),
        h = a(89068);
      d.Message;
      class C extends d.Message {
        static ImplementsStaticInterface() {}
        constructor(t = null) {
          super(),
            C.prototype.clan_account_id || h.Sg(C.M()),
            d.Message.initialize(this, t, 0, -1, [2], null);
        }
        static M() {
          return (
            C.sm_m ||
              (C.sm_m = {
                proto: C,
                fields: {
                  clan_account_id: {
                    n: 1,
                    br: h.qM.readUint32,
                    bw: h.gp.writeUint32,
                  },
                  appid_list: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: h.qM.readUint32,
                    pbr: h.qM.readPackedUint32,
                    bw: h.gp.writeRepeatedUint32,
                  },
                },
              }),
            C.sm_m
          );
        }
        static MBF() {
          return C.sm_mbf || (C.sm_mbf = h.w0(C.M())), C.sm_mbf;
        }
        toObject(t = !1) {
          return C.toObject(t, this);
        }
        static toObject(t, e) {
          return h.BT(C.M(), t, e);
        }
        static fromObject(t) {
          return h.Uq(C.M(), t);
        }
        static deserializeBinary(t) {
          let e = new (I().BinaryReader)(t),
            a = new C();
          return C.deserializeBinaryFromReader(a, e);
        }
        static deserializeBinaryFromReader(t, e) {
          return h.zj(C.MBF(), t, e);
        }
        serializeBinary() {
          var t = new (I().BinaryWriter)();
          return C.serializeBinaryToWriter(this, t), t.getResultBuffer();
        }
        static serializeBinaryToWriter(t, e) {
          h.i0(C.M(), t, e);
        }
        serializeBase64String() {
          var t = new (I().BinaryWriter)();
          return C.serializeBinaryToWriter(this, t), t.getResultBase64String();
        }
        getClassName() {
          return "CDeveloperPageToApps";
        }
      }
      class g extends d.Message {
        static ImplementsStaticInterface() {}
        constructor(t = null) {
          super(),
            g.prototype.clan_account_ids || h.Sg(g.M()),
            d.Message.initialize(this, t, 0, -1, [1], null);
        }
        static M() {
          return (
            g.sm_m ||
              (g.sm_m = {
                proto: g,
                fields: {
                  clan_account_ids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: h.qM.readUint32,
                    pbr: h.qM.readPackedUint32,
                    bw: h.gp.writeRepeatedUint32,
                  },
                  ignore_dlc: { n: 2, br: h.qM.readBool, bw: h.gp.writeBool },
                },
              }),
            g.sm_m
          );
        }
        static MBF() {
          return g.sm_mbf || (g.sm_mbf = h.w0(g.M())), g.sm_mbf;
        }
        toObject(t = !1) {
          return g.toObject(t, this);
        }
        static toObject(t, e) {
          return h.BT(g.M(), t, e);
        }
        static fromObject(t) {
          return h.Uq(g.M(), t);
        }
        static deserializeBinary(t) {
          let e = new (I().BinaryReader)(t),
            a = new g();
          return g.deserializeBinaryFromReader(a, e);
        }
        static deserializeBinaryFromReader(t, e) {
          return h.zj(g.MBF(), t, e);
        }
        serializeBinary() {
          var t = new (I().BinaryWriter)();
          return g.serializeBinaryToWriter(this, t), t.getResultBuffer();
        }
        static serializeBinaryToWriter(t, e) {
          h.i0(g.M(), t, e);
        }
        serializeBase64String() {
          var t = new (I().BinaryWriter)();
          return g.serializeBinaryToWriter(this, t), t.getResultBase64String();
        }
        getClassName() {
          return "CStoreCatalog_GetDevPageAllAppsLinked_Request";
        }
      }
      class f extends d.Message {
        static ImplementsStaticInterface() {}
        constructor(t = null) {
          super(),
            f.prototype.results || h.Sg(f.M()),
            d.Message.initialize(this, t, 0, -1, [1], null);
        }
        static M() {
          return (
            f.sm_m ||
              (f.sm_m = {
                proto: f,
                fields: { results: { n: 1, c: C, r: !0, q: !0 } },
              }),
            f.sm_m
          );
        }
        static MBF() {
          return f.sm_mbf || (f.sm_mbf = h.w0(f.M())), f.sm_mbf;
        }
        toObject(t = !1) {
          return f.toObject(t, this);
        }
        static toObject(t, e) {
          return h.BT(f.M(), t, e);
        }
        static fromObject(t) {
          return h.Uq(f.M(), t);
        }
        static deserializeBinary(t) {
          let e = new (I().BinaryReader)(t),
            a = new f();
          return f.deserializeBinaryFromReader(a, e);
        }
        static deserializeBinaryFromReader(t, e) {
          return h.zj(f.MBF(), t, e);
        }
        serializeBinary() {
          var t = new (I().BinaryWriter)();
          return f.serializeBinaryToWriter(this, t), t.getResultBuffer();
        }
        static serializeBinaryToWriter(t, e) {
          h.i0(f.M(), t, e);
        }
        serializeBase64String() {
          var t = new (I().BinaryWriter)();
          return f.serializeBinaryToWriter(this, t), t.getResultBase64String();
        }
        getClassName() {
          return "CStoreCatalog_GetDevPageAllAppsLinked_Response";
        }
      }
      !(function (t) {
        t.GetDevPageAllAppsLinked = function (t, e) {
          return t.SendMsg(
            "StoreCatalog.GetDevPageAllAppsLinked#1",
            (0, _.I8)(g, e),
            f,
            { ePrivilege: 1 },
          );
        };
      })(p || (p = {}));
      class y {
        constructor() {
          (this.m_mapClanToCreatorHome = new Map()),
            (this.m_mapAppToCreatorIDList = new Map()),
            (this.m_bLoadedFromConfig = !1),
            (0, s.Gn)(this);
        }
        LazyInit() {
          if (!this.m_bLoadedFromConfig) {
            let t = (0, m.Tc)("creatorhome", "application_config");
            this.ValidateStoreDefault(t) &&
              t.forEach((t) => {
                let e = Number(t.creator_clan_id),
                  a = u.b.InitFromClanID(e),
                  n = new c(a);
                n.Initialize(t),
                  (n.m_promise = y.GetAsPromise(n)),
                  this.m_mapClanToCreatorHome.set(e, n);
              });
            let e = (0, m.Tc)("creatorhomeforapp", "application_config");
            this.ValidateStoreDefaultAppList(e) &&
              e.forEach((t) => {
                void 0 !== t.appid &&
                  (this.m_mapAppToCreatorIDList.has(t.appid) ||
                    this.m_mapAppToCreatorIDList.set(t.appid, new Array()),
                  this.m_mapAppToCreatorIDList.get(t.appid).push(t));
              }),
              (this.m_bLoadedFromConfig = !0);
          }
        }
        static async GetAsPromise(t) {
          return t;
        }
        ValidateStoreDefault(t) {
          const e = t;
          return (
            !!(
              e &&
              Array.isArray(e) &&
              e.length > 0 &&
              "object" == typeof e[0]
            ) &&
            "string" == typeof e[0].name &&
            ("string" == typeof e[0].creator_clan_id ||
              "number" == typeof e[0].creator_clan_id)
          );
        }
        ValidateStoreDefaultAppList(t) {
          const e = t;
          return (
            !!(
              e &&
              Array.isArray(e) &&
              e.length > 0 &&
              "object" == typeof e[0]
            ) &&
            "number" == typeof e[0].clan_account_id &&
              e[0].clan_account_id > 0 &&
              "number" == typeof e[0].appid &&
            e[0].appid > 0
          );
        }
        BHasCreatorHomeLoaded(t) {
          return (
            this.m_mapClanToCreatorHome.has(t.GetAccountID()) &&
            this.m_mapClanToCreatorHome.get(t.GetAccountID()).BIsLoaded()
          );
        }
        GetCreatorHome(t) {
          return this.m_mapClanToCreatorHome.get(t.GetAccountID());
        }
        GetCreatorHomeByID(t) {
          return this.m_mapClanToCreatorHome.get(t.clan_account_id);
        }
        async LoadCreatorHome(t, e) {
          if (
            (this.LazyInit(),
            !this.m_mapClanToCreatorHome.has(t.GetAccountID()))
          ) {
            let a = new c(t);
            (a.m_promise = this.InternalCreatorHome(a, e)),
              await a.m_promise,
              this.m_mapClanToCreatorHome.set(t.GetAccountID(), a);
          }
          return this.m_mapClanToCreatorHome.get(t.GetAccountID()).m_promise;
        }
        async InternalCreatorHome(t, e) {
          let a = { get_appids: !0, l: m.TS.LANGUAGE, origin: self.origin },
            n =
              m.TS.STORE_BASE_URL +
              "curator/" +
              t.GetClanAccountID() +
              "/ajaxgetcreatorhomeinfo",
            r = await i().get(n, { params: a, cancelToken: e && e.token });
          return t.Initialize(r.data), t;
        }
        async LoadCreatorHomeListForAppIncludeHiddden(t, e) {
          if ((this.LazyInit(), !this.m_mapAppToCreatorIDList.has(t))) {
            let a = { appid: t },
              n = m.TS.STORE_BASE_URL + "events/ajaxgetcreatorhomeidforapp",
              r = await i().get(n, {
                params: a,
                cancelToken: e && e.token,
                withCredentials: !0,
              });
            this.m_mapAppToCreatorIDList.set(t, r.data.creator_list);
          }
          return this.m_mapAppToCreatorIDList.get(t);
        }
        async SearchCreatorHomeStore(t, e, a) {
          let n = `${m.TS.STORE_BASE_URL}curator/0/ajaxsearchcurators`,
            r = {
              term: t.replace(" ", "+"),
              require_creator: e,
              cc: m.TS.COUNTRY,
              l: m.TS.LANGUAGE,
              origin: self.origin,
            },
            o = new Array();
          const l = await i().get(n, { params: r, cancelToken: a.token });
          return (
            l.data.curators &&
              (0, s.h5)(() => {
                l.data.curators.forEach((t) => {
                  if (!this.m_mapClanToCreatorHome.has(t.creator_clan_id)) {
                    let e = u.b.InitFromClanID(t.creator_clan_id),
                      a = new c(e);
                    a.Initialize(t),
                      this.m_mapClanToCreatorHome.set(t.creator_clan_id, a);
                  }
                  o.push(this.m_mapClanToCreatorHome.get(t.creator_clan_id));
                });
              }),
            o
          );
        }
        GetCreatorHomeListForAppIncludeHidden(t) {
          return this.m_mapAppToCreatorIDList.has(t)
            ? this.m_mapAppToCreatorIDList.get(t)
            : [];
        }
      }
      (0, n.Cg)([s.sH], y.prototype, "m_mapClanToCreatorHome", void 0),
        (0, n.Cg)([s.sH], y.prototype, "m_mapAppToCreatorIDList", void 0),
        (0, n.Cg)([s.XI], y.prototype, "LazyInit", null);
      const L = new y();
      function A(t) {
        var e;
        const a = u.b.InitFromClanID(t),
          [n, o] = l.useState(L.GetCreatorHome(a)),
          i = (0, r.m)("useCreatorHome");
        return (
          l.useEffect(() => {
            const e = u.b.InitFromClanID(t);
            L.BHasCreatorHomeLoaded(e)
              ? n
                ? n.GetClanAccountID() != t && o(L.GetCreatorHome(e))
                : o(L.GetCreatorHome(e))
              : L.LoadCreatorHome(e).then(() => {
                  var t;
                  (null === (t = null == i ? void 0 : i.token) || void 0 === t
                    ? void 0
                    : t.reason) || o(L.GetCreatorHome(e));
                });
          }, [
            null === (e = null == i ? void 0 : i.token) || void 0 === e
              ? void 0
              : e.reason,
            t,
            n,
          ]),
          n
        );
      }
      window.g_CreatorHomeStore = L;
    },
  },
]);

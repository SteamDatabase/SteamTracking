/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [5955],
  {
    4796: (e, t, r) => {
      r.d(t, { TB: () => _, W$: () => g, ac: () => d });
      var a = r(34629),
        n = r(41735),
        i = r.n(n),
        s = r(14947),
        o = r(90626),
        l = r(17720),
        m = r(44332),
        c = r(78327),
        u = r(67165);
      class p {
        constructor() {
          (this.m_mapAppIDToClanInfo = new Map()),
            (this.m_mapVanityToClanInfo = new Map()),
            (this.m_mapClanAccountIDToClanInfo = new Map()),
            (this.m_mapPromisesLoading = new Map()),
            (this.m_rgQueuedEventsClanIDs = new Array()),
            (this.m_bLoadedFromConfig = !1),
            (0, s.Gn)(this);
        }
        Init() {
          this.LazyInit();
        }
        LazyInit() {
          this.m_bLoadedFromConfig ||
            ((0, s.h5)(() => {
              let e = (0, c.Fd)("groupvanityinfo", "application_config");
              this.ValidateClanConfig(e) &&
                e.forEach((e) => {
                  this.InternalSetupValue(e);
                });
            }),
            (this.m_bLoadedFromConfig = !0));
        }
        AddGroupVanities(e) {
          (0, s.h5)(() => {
            this.ValidateClanConfig(e) &&
              e.forEach((e) => {
                this.InternalSetupValue(e);
              });
          });
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
            (0, m.w)(e.BIsValid(), "Clan SteamID is not valid when ClanInfo"),
            (0, m.w)(
              e.BIsClanAccount(),
              "Clan SteamID is not a clan account id when requesting clan info ",
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
            clanSteamID: new l.b(e.clanSteamIDString),
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
                t,
              ),
            this.m_mapClanAccountIDToClanInfo.set(e.clanAccountID, t);
        }
        GetRequestParam() {
          return { origin: self.origin };
        }
        async LoadOGGClanInfoForAppID(e) {
          if (
            (this.LazyInit(),
            "string" == typeof e && (e = parseInt(e)),
            (0, m.w)(
              0 != e,
              "LoadOGGClanInfoForAppID called with appid of zero",
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
                this.InternalLoadOGGClanInfoForAppID(e),
              ),
            this.m_mapPromisesLoading.get(t)
          );
        }
        async InternalLoadOGGClanInfoForAppID(e) {
          const t =
            c.TS.COMMUNITY_BASE_URL + "ogg/" + e + "/ajaxgetvanityandclanid/";
          let r = null;
          try {
            r = (await i().get(t, { params: this.GetRequestParam() })).data;
          } catch (e) {}
          return r
            ? (this.InternalSetupValue(r), this.m_mapAppIDToClanInfo.get(e))
            : null;
        }
        async LoadOGGClanInfoForIdentifier(e) {
          if (
            (this.LazyInit(),
            this.m_mapVanityToClanInfo.has(
              null == e ? void 0 : e.toLocaleLowerCase(),
            ))
          )
            return this.m_mapVanityToClanInfo.get(
              null == e ? void 0 : e.toLocaleLowerCase(),
            );
          let t = "storevanity_" + (null == e ? void 0 : e.toLocaleLowerCase());
          return (
            this.m_mapPromisesLoading.has(t) ||
              this.m_mapPromisesLoading.set(
                t,
                this.InternalLoadOGGClanInfoForIdentifier(e),
              ),
            this.m_mapPromisesLoading.get(t)
          );
        }
        async InternalLoadOGGClanInfoForIdentifier(e) {
          const t =
            c.TS.COMMUNITY_BASE_URL + "games/" + e + "/ajaxgetvanityandclanid/";
          let r = await i().get(t, { params: this.GetRequestParam() });
          return (
            this.InternalSetupValue(r.data),
            this.m_mapVanityToClanInfo.get(
              null == e ? void 0 : e.toLocaleLowerCase(),
            )
          );
        }
        async LoadOGGClanInfoForGroupVanity(e) {
          if (
            (this.LazyInit(),
            this.m_mapVanityToClanInfo.has(
              null == e ? void 0 : e.toLocaleLowerCase(),
            ))
          )
            return this.m_mapVanityToClanInfo.get(
              null == e ? void 0 : e.toLocaleLowerCase(),
            );
          let t = "community_name_" + e;
          return (
            this.m_mapPromisesLoading.has(t) ||
              this.m_mapPromisesLoading.set(
                t,
                this.InternalLoadOGGClanInfoForGroupVanity(
                  null == e ? void 0 : e.toLocaleLowerCase(),
                ),
              ),
            this.m_mapPromisesLoading.get(t)
          );
        }
        async InternalLoadOGGClanInfoForGroupVanity(e) {
          const t =
            c.TS.COMMUNITY_BASE_URL +
            "groups/" +
            e +
            "/ajaxgetvanityandclanid/";
          let r = await i().get(t, { params: this.GetRequestParam() });
          return (
            this.InternalSetupValue(r.data),
            this.m_mapVanityToClanInfo.get(
              null == e ? void 0 : e.toLocaleLowerCase(),
            )
          );
        }
        async LoadClanInfoForClanSteamID(e) {
          this.LazyInit();
          let t = e.GetAccountID();
          if (this.m_mapClanAccountIDToClanInfo.has(t))
            return this.m_mapClanAccountIDToClanInfo.get(t);
          let r = "clanaccountid_" + t;
          return (
            this.m_mapPromisesLoading.has(r) ||
              this.m_mapPromisesLoading.set(
                r,
                this.InternalLoadClanInfoForClanSteamID(e),
              ),
            this.m_mapPromisesLoading.get(r)
          );
        }
        async LoadClanInfoForClanAccountID(e) {
          const t = l.b.InitFromClanID(e);
          return this.LoadClanInfoForClanSteamID(t);
        }
        async InternalLoadClanInfoForClanSteamID(e) {
          let t = e.GetAccountID();
          const r =
            c.TS.COMMUNITY_BASE_URL +
            "gid/" +
            e.ConvertTo64BitString() +
            "/ajaxgetvanityandclanid/";
          let a = await i().get(r, { params: this.GetRequestParam() });
          return (
            this.InternalSetupValue(a.data),
            this.m_mapClanAccountIDToClanInfo.get(t)
          );
        }
        GetOGGClanInfo(e) {
          return "string" == typeof e
            ? this.m_mapVanityToClanInfo.get(
                null == e ? void 0 : e.toLocaleLowerCase(),
              )
            : this.m_mapAppIDToClanInfo.get(e);
        }
        GetClanSteamIDForAppID(e) {
          if ((this.LazyInit(), this.m_mapAppIDToClanInfo.has(e)))
            return l.b.InitFromClanID(
              this.m_mapAppIDToClanInfo.get(e).clanAccountID,
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
            (0, m.w)(
              !!e,
              "Unepxected clanid when requesting information. GetClanInfoByClanAccountID ",
            ),
            this.m_mapClanAccountIDToClanInfo.get(e)
          );
        }
        GetCreatorStoreURL(e) {
          let t = u.pF.GetCreatorHome(e);
          if (t) return t.GetCreatorHomeURL("developer");
          let r = this.GetClanInfoByClanAccountID(e.GetAccountID());
          return (
            c.TS.COMMUNITY_BASE_URL +
            (r.vanity_url
              ? "groups/" + r.vanity_url
              : "gid/" + e.ConvertTo64BitString())
          );
        }
      }
      (0, a.Cg)([s.sH], p.prototype, "m_mapAppIDToClanInfo", void 0),
        (0, a.Cg)([s.sH], p.prototype, "m_mapVanityToClanInfo", void 0),
        (0, a.Cg)([s.sH], p.prototype, "m_mapClanAccountIDToClanInfo", void 0),
        (0, a.Cg)([s.XI], p.prototype, "RegisterClanData", null),
        (0, a.Cg)([s.XI], p.prototype, "InternalSetupValue", null);
      const d = new p();
      function _(e) {
        const [t, r] = (0, o.useState)(
            e ? d.GetClanInfoByClanAccountID(e) : void 0,
          ),
          [a, n] = (0, o.useState)(!!e && !d.BHasClanInfoLoadedByAccountID(e));
        return (
          (0, o.useEffect)(() => {
            if (e)
              if (d.BHasClanInfoLoadedByAccountID(e))
                r(d.GetClanInfoByClanAccountID(e)), n(!1);
              else {
                n(!0);
                const t = l.b.InitFromClanID(
                  "string" == typeof e ? Number.parseInt(e) : e,
                );
                d.LoadClanInfoForClanSteamID(t).then((e) => {
                  r(null != e ? e : void 0), n(!1);
                });
              }
            else r(void 0), n(!1);
          }, [e]),
          [a, t]
        );
      }
      function g(e) {
        const [t, r] = (0, o.useState)(d.GetOGGClanInfo(e));
        return (
          (0, o.useEffect)(() => {
            t || d.LoadOGGClanInfoForGroupVanity(e).then(r);
          }, [t, e]),
          t
        );
      }
      window.g_ClanStore = d;
    },
    67165: (e, t, r) => {
      r.d(t, { pF: () => z, FV: () => v });
      var a = r(34629),
        n = r(4434),
        i = r(41735),
        s = r.n(i),
        o = r(14947),
        l = r(90626),
        m = r(78327);
      class c {
        constructor(e) {
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
            (0, o.Gn)(this),
            (this.m_clanSteamID = e);
        }
        Initialize(e) {
          var t;
          (this.m_strName = e.name || ""),
            (this.m_strAvatarURLFullSize =
              e.avatar_url_full_size ||
              "https://avatars.steamstatic.com/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb_full.jpg"),
            (this.m_strTagLineLoc = e.tag_line_localized || ""),
            (this.m_nFollowers = e.followers || 0),
            (this.m_strVanity = e.vanity || void 0),
            (this.m_webLink = e.weblink),
            (this.m_bIsHidden = e.hidden || !1),
            (this.m_clanAccountFlags =
              null !== (t = e.clan_account_flags) && void 0 !== t ? t : 0),
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
        AdjustFollower(e) {
          this.m_nFollowers += e;
        }
        async EnablePartnerEventEditorFlag() {
          this.BIsPartnerEventEditorEnabled() ||
            (await this.UpdateGroupFlagsFeature([2, 8], !0));
        }
        async UpdateGroupFlagsFeature(e, t) {
          let r = m.TS.PARTNER_BASE_URL + "sales/ajaxupdateclanaccountflags",
            a = this.m_clanAccountFlags;
          if (
            (e.forEach((e) => {
              t ? (a |= e) : (a &= ~e);
            }),
            a == this.m_clanAccountFlags)
          )
            return;
          let n = new Array();
          1 & a && n.push(1),
            8 & a && n.push(8),
            2 & a && n.push(2),
            4 & a && n.push(4),
            16 & a && n.push(16),
            32 & a && n.push(32),
            64 & a && n.push(64);
          let i = new FormData();
          i.append("sessionid", m.TS.SESSIONID),
            i.append("clan_account_id", this.GetClanAccountID().toString()),
            i.append("accountflags", JSON.stringify(n));
          let o = await s().post(r, i);
          o &&
            200 == o.status &&
            1 == o.data.success &&
            (this.m_clanAccountFlags = a);
        }
      }
      (0, a.Cg)([o.sH], c.prototype, "m_appidList", void 0),
        (0, a.Cg)([o.sH], c.prototype, "m_nFollowers", void 0),
        (0, a.Cg)([o.sH], c.prototype, "m_clanAccountFlags", void 0);
      var u,
        p = r(17720),
        d = r(56545),
        _ = r(80613),
        g = r.n(_),
        h = r(89068);
      class I extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            I.prototype.appid || h.Sg(I.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            I.sm_m ||
              (I.sm_m = {
                proto: I,
                fields: {
                  appid: { n: 1, br: h.qM.readUint32, bw: h.gp.writeUint32 },
                  clan_steamid: {
                    n: 2,
                    br: h.qM.readFixed64String,
                    bw: h.gp.writeFixed64String,
                  },
                  relation: { n: 3, br: h.qM.readEnum, bw: h.gp.writeEnum },
                  linkname: { n: 4, br: h.qM.readString, bw: h.gp.writeString },
                  json: { n: 5, br: h.qM.readString, bw: h.gp.writeString },
                },
              }),
            I.sm_m
          );
        }
        static MBF() {
          return I.sm_mbf || (I.sm_mbf = h.w0(I.M())), I.sm_mbf;
        }
        toObject(e = !1) {
          return I.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(I.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(I.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (g().BinaryReader)(e),
            r = new I();
          return I.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(I.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (g().BinaryWriter)();
          return I.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(I.M(), e, t);
        }
        serializeBase64String() {
          var e = new (g().BinaryWriter)();
          return I.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CDeveloperPageLink";
        }
      }
      class f extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            f.prototype.clan_account_id || h.Sg(f.M()),
            _.Message.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            f.sm_m ||
              (f.sm_m = {
                proto: f,
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
            f.sm_m
          );
        }
        static MBF() {
          return f.sm_mbf || (f.sm_mbf = h.w0(f.M())), f.sm_mbf;
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(f.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(f.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (g().BinaryReader)(e),
            r = new f();
          return f.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(f.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (g().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(f.M(), e, t);
        }
        serializeBase64String() {
          var e = new (g().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CDeveloperPageToApps";
        }
      }
      class C extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            C.prototype.appid || h.Sg(C.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            C.sm_m ||
              (C.sm_m = {
                proto: C,
                fields: {
                  appid: { n: 1, br: h.qM.readUint32, bw: h.gp.writeUint32 },
                  link: { n: 2, c: I },
                  remove: {
                    n: 3,
                    d: !1,
                    br: h.qM.readBool,
                    bw: h.gp.writeBool,
                  },
                  update_json_only: {
                    n: 4,
                    d: !1,
                    br: h.qM.readBool,
                    bw: h.gp.writeBool,
                  },
                  skip_clan_permissions: {
                    n: 5,
                    d: !1,
                    br: h.qM.readBool,
                    bw: h.gp.writeBool,
                  },
                  partner_id: {
                    n: 6,
                    br: h.qM.readUint32,
                    bw: h.gp.writeUint32,
                  },
                },
              }),
            C.sm_m
          );
        }
        static MBF() {
          return C.sm_mbf || (C.sm_mbf = h.w0(C.M())), C.sm_mbf;
        }
        toObject(e = !1) {
          return C.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(C.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(C.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (g().BinaryReader)(e),
            r = new C();
          return C.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(C.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (g().BinaryWriter)();
          return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(C.M(), e, t);
        }
        serializeBase64String() {
          var e = new (g().BinaryWriter)();
          return C.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreCatalog_SetDevPageLink_Request";
        }
      }
      class y extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), _.Message.initialize(this, e, 0, -1, void 0, null);
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
          let t = new (g().BinaryReader)(e),
            r = new y();
          return y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (g().BinaryWriter)();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (g().BinaryWriter)();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreCatalog_SetDevPageLink_Response";
        }
      }
      class B extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            B.prototype.appid || h.Sg(B.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            B.sm_m ||
              (B.sm_m = {
                proto: B,
                fields: {
                  appid: { n: 1, br: h.qM.readUint32, bw: h.gp.writeUint32 },
                },
              }),
            B.sm_m
          );
        }
        static MBF() {
          return B.sm_mbf || (B.sm_mbf = h.w0(B.M())), B.sm_mbf;
        }
        toObject(e = !1) {
          return B.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(B.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(B.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (g().BinaryReader)(e),
            r = new B();
          return B.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(B.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (g().BinaryWriter)();
          return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(B.M(), e, t);
        }
        serializeBase64String() {
          var e = new (g().BinaryWriter)();
          return B.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreCatalog_GetDevPageLinks_Request";
        }
      }
      class b extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            b.prototype.links || h.Sg(b.M()),
            _.Message.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = {
                proto: b,
                fields: { links: { n: 1, c: I, r: !0, q: !0 } },
              }),
            b.sm_m
          );
        }
        static MBF() {
          return b.sm_mbf || (b.sm_mbf = h.w0(b.M())), b.sm_mbf;
        }
        toObject(e = !1) {
          return b.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(b.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(b.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (g().BinaryReader)(e),
            r = new b();
          return b.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(b.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (g().BinaryWriter)();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(b.M(), e, t);
        }
        serializeBase64String() {
          var e = new (g().BinaryWriter)();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreCatalog_GetDevPageLinks_Response";
        }
      }
      class S extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            S.prototype.clan_account_ids || h.Sg(S.M()),
            _.Message.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            S.sm_m ||
              (S.sm_m = {
                proto: S,
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
            S.sm_m
          );
        }
        static MBF() {
          return S.sm_mbf || (S.sm_mbf = h.w0(S.M())), S.sm_mbf;
        }
        toObject(e = !1) {
          return S.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(S.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(S.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (g().BinaryReader)(e),
            r = new S();
          return S.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(S.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (g().BinaryWriter)();
          return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(S.M(), e, t);
        }
        serializeBase64String() {
          var e = new (g().BinaryWriter)();
          return S.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreCatalog_GetDevPageAllAppsLinked_Request";
        }
      }
      class w extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            w.prototype.results || h.Sg(w.M()),
            _.Message.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            w.sm_m ||
              (w.sm_m = {
                proto: w,
                fields: { results: { n: 1, c: f, r: !0, q: !0 } },
              }),
            w.sm_m
          );
        }
        static MBF() {
          return w.sm_mbf || (w.sm_mbf = h.w0(w.M())), w.sm_mbf;
        }
        toObject(e = !1) {
          return w.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(w.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(w.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (g().BinaryReader)(e),
            r = new w();
          return w.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(w.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (g().BinaryWriter)();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(w.M(), e, t);
        }
        serializeBase64String() {
          var e = new (g().BinaryWriter)();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreCatalog_GetDevPageAllAppsLinked_Response";
        }
      }
      class L extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            L.prototype.partnerid || h.Sg(L.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            L.sm_m ||
              (L.sm_m = {
                proto: L,
                fields: {
                  partnerid: {
                    n: 1,
                    br: h.qM.readUint32,
                    bw: h.gp.writeUint32,
                  },
                },
              }),
            L.sm_m
          );
        }
        static MBF() {
          return L.sm_mbf || (L.sm_mbf = h.w0(L.M())), L.sm_mbf;
        }
        toObject(e = !1) {
          return L.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(L.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(L.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (g().BinaryReader)(e),
            r = new L();
          return L.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(L.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (g().BinaryWriter)();
          return L.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(L.M(), e, t);
        }
        serializeBase64String() {
          var e = new (g().BinaryWriter)();
          return L.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreCatalog_GetDevPagesForPartner_Request";
        }
      }
      class M extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            M.prototype.results || h.Sg(M.M()),
            _.Message.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            M.sm_m ||
              (M.sm_m = {
                proto: M,
                fields: { results: { n: 1, c: T, r: !0, q: !0 } },
              }),
            M.sm_m
          );
        }
        static MBF() {
          return M.sm_mbf || (M.sm_mbf = h.w0(M.M())), M.sm_mbf;
        }
        toObject(e = !1) {
          return M.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(M.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(M.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (g().BinaryReader)(e),
            r = new M();
          return M.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(M.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (g().BinaryWriter)();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(M.M(), e, t);
        }
        serializeBase64String() {
          var e = new (g().BinaryWriter)();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreCatalog_GetDevPagesForPartner_Response";
        }
      }
      class T extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            T.prototype.clan_accountid || h.Sg(T.M()),
            _.Message.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            T.sm_m ||
              (T.sm_m = {
                proto: T,
                fields: {
                  clan_accountid: {
                    n: 1,
                    br: h.qM.readUint32,
                    bw: h.gp.writeUint32,
                  },
                  linknames: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: h.qM.readString,
                    bw: h.gp.writeRepeatedString,
                  },
                },
              }),
            T.sm_m
          );
        }
        static MBF() {
          return T.sm_mbf || (T.sm_mbf = h.w0(T.M())), T.sm_mbf;
        }
        toObject(e = !1) {
          return T.toObject(e, this);
        }
        static toObject(e, t) {
          return h.BT(T.M(), e, t);
        }
        static fromObject(e) {
          return h.Uq(T.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (g().BinaryReader)(e),
            r = new T();
          return T.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.zj(T.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (g().BinaryWriter)();
          return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.i0(T.M(), e, t);
        }
        serializeBase64String() {
          var e = new (g().BinaryWriter)();
          return T.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreCatalog_GetDevPagesForPartner_Response_CDevPageInfo";
        }
      }
      !(function (e) {
        (e.SetDevPageLink = function (e, t) {
          return e.SendMsg(
            "StoreCatalog.SetDevPageLink#1",
            (0, d.I8)(C, t),
            y,
            { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
          );
        }),
          (e.GetDevPageLinks = function (e, t) {
            return e.SendMsg(
              "StoreCatalog.GetDevPageLinks#1",
              (0, d.I8)(B, t),
              b,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }),
          (e.GetDevPageAllAppsLinked = function (e, t) {
            return e.SendMsg(
              "StoreCatalog.GetDevPageAllAppsLinked#1",
              (0, d.I8)(S, t),
              w,
              { ePrivilege: 1 },
            );
          }),
          (e.GetDevPagesForPartner = function (e, t) {
            return e.SendMsg(
              "StoreCatalog.GetDevPagesForPartner#1",
              (0, d.I8)(L, t),
              M,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          });
      })(u || (u = {}));
      class A {
        constructor() {
          (this.m_mapClanToCreatorHome = new Map()),
            (this.m_mapAppToCreatorIDList = new Map()),
            (this.m_bLoadedFromConfig = !1),
            (0, o.Gn)(this);
        }
        LazyInit() {
          if (!this.m_bLoadedFromConfig) {
            let e = (0, m.Tc)("creatorhome", "application_config");
            this.ValidateStoreDefault(e) &&
              e.forEach((e) => {
                let t = Number(e.creator_clan_id),
                  r = p.b.InitFromClanID(t),
                  a = new c(r);
                a.Initialize(e),
                  (a.m_promise = A.GetAsPromise(a)),
                  this.m_mapClanToCreatorHome.set(t, a);
              });
            let t = (0, m.Tc)("creatorhomeforapp", "application_config");
            this.ValidateStoreDefaultAppList(t) &&
              t.forEach((e) => {
                void 0 !== e.appid &&
                  (this.m_mapAppToCreatorIDList.has(e.appid) ||
                    this.m_mapAppToCreatorIDList.set(e.appid, new Array()),
                  this.m_mapAppToCreatorIDList.get(e.appid).push(e));
              }),
              (this.m_bLoadedFromConfig = !0);
          }
        }
        static async GetAsPromise(e) {
          return e;
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
        async LoadCreatorHome(e, t) {
          if (
            (this.LazyInit(),
            !this.m_mapClanToCreatorHome.has(e.GetAccountID()))
          ) {
            let r = new c(e);
            (r.m_promise = this.InternalCreatorHome(r, t)),
              await r.m_promise,
              this.m_mapClanToCreatorHome.set(e.GetAccountID(), r);
          }
          return this.m_mapClanToCreatorHome.get(e.GetAccountID()).m_promise;
        }
        async InternalCreatorHome(e, t) {
          let r = { get_appids: !0, l: m.TS.LANGUAGE, origin: self.origin },
            a =
              m.TS.STORE_BASE_URL +
              "curator/" +
              e.GetClanAccountID() +
              "/ajaxgetcreatorhomeinfo",
            n = await s().get(a, { params: r, cancelToken: t && t.token });
          return e.Initialize(n.data), e;
        }
        async LoadCreatorHomeListForAppIncludeHiddden(e, t) {
          if ((this.LazyInit(), !this.m_mapAppToCreatorIDList.has(e))) {
            let r = { appid: e },
              a = m.TS.STORE_BASE_URL + "events/ajaxgetcreatorhomeidforapp",
              n = await s().get(a, {
                params: r,
                cancelToken: t && t.token,
                withCredentials: !0,
              });
            this.m_mapAppToCreatorIDList.set(e, n.data.creator_list);
          }
          return this.m_mapAppToCreatorIDList.get(e);
        }
        async SearchCreatorHomeStore(e, t, r) {
          let a = `${m.TS.STORE_BASE_URL}curator/0/ajaxsearchcurators`,
            n = {
              term: e.replace(" ", "+"),
              require_creator: t,
              cc: m.TS.COUNTRY,
              l: m.TS.LANGUAGE,
              origin: self.origin,
            },
            i = new Array();
          const l = await s().get(a, { params: n, cancelToken: r.token });
          return (
            l.data.curators &&
              (0, o.h5)(() => {
                l.data.curators.forEach((e) => {
                  if (!this.m_mapClanToCreatorHome.has(e.creator_clan_id)) {
                    let t = p.b.InitFromClanID(e.creator_clan_id),
                      r = new c(t);
                    r.Initialize(e),
                      this.m_mapClanToCreatorHome.set(e.creator_clan_id, r);
                  }
                  i.push(this.m_mapClanToCreatorHome.get(e.creator_clan_id));
                });
              }),
            i
          );
        }
        GetCreatorHomeListForAppIncludeHidden(e) {
          return this.m_mapAppToCreatorIDList.has(e)
            ? this.m_mapAppToCreatorIDList.get(e)
            : [];
        }
      }
      (0, a.Cg)([o.sH], A.prototype, "m_mapClanToCreatorHome", void 0),
        (0, a.Cg)([o.sH], A.prototype, "m_mapAppToCreatorIDList", void 0),
        (0, a.Cg)([o.XI], A.prototype, "LazyInit", null);
      const z = new A();
      function v(e) {
        var t;
        const r = p.b.InitFromClanID(e),
          [a, i] = l.useState(z.GetCreatorHome(r)),
          s = (0, n.m)("useCreatorHome");
        return (
          l.useEffect(() => {
            const t = p.b.InitFromClanID(e);
            z.BHasCreatorHomeLoaded(t)
              ? a
                ? a.GetClanAccountID() != e && i(z.GetCreatorHome(t))
                : i(z.GetCreatorHome(t))
              : z.LoadCreatorHome(t).then(() => {
                  var e;
                  (null === (e = null == s ? void 0 : s.token) || void 0 === e
                    ? void 0
                    : e.reason) || i(z.GetCreatorHome(t));
                });
          }, [
            null === (t = null == s ? void 0 : s.token) || void 0 === t
              ? void 0
              : t.reason,
            e,
            a,
          ]),
          a
        );
      }
      window.g_CreatorHomeStore = z;
    },
  },
]);

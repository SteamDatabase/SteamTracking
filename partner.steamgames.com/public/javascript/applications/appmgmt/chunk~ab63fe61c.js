/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [5859],
  {
    5864: (e, t, r) => {
      r.d(t, {
        $q: () => X,
        CS: () => Q,
        D4: () => s,
        EO: () => m,
        JE: () => G,
        LK: () => I,
        MG: () => A,
        NI: () => M,
        OT: () => i,
        QG: () => q,
        S4: () => C,
        T: () => o,
        V$: () => a,
        ZR: () => j,
        cc: () => ee,
        ds: () => L,
        e6: () => E,
        hd: () => N,
        nf: () => n,
        pk: () => l,
        rj: () => u,
        tU: () => b,
      });
      var s,
        i,
        a,
        n,
        o,
        l,
        u,
        c,
        m,
        _ = r(80613),
        g = r.n(_),
        d = r(89068),
        p = r(56545),
        h = r(15161);
      !(function (e) {
        (e[(e.k_EMarketingMessageInvalid = 0)] = "k_EMarketingMessageInvalid"),
          (e[(e.k_EMarketingMessageNowAvailable = 1)] =
            "k_EMarketingMessageNowAvailable"),
          (e[(e.k_EMarketingMessageWeekendDeal = 2)] =
            "k_EMarketingMessageWeekendDeal"),
          (e[(e.k_EMarketingMessagePrePurchase = 3)] =
            "k_EMarketingMessagePrePurchase"),
          (e[(e.k_EMarketingMessagePlayNow = 4)] =
            "k_EMarketingMessagePlayNow"),
          (e[(e.k_EMarketingMessagePreloadNow = 5)] =
            "k_EMarketingMessagePreloadNow"),
          (e[(e.k_EMarketingMessageGeneral = 6)] =
            "k_EMarketingMessageGeneral"),
          (e[(e.k_EMarketingMessageDemoQuit = 7)] =
            "k_EMarketingMessageDemoQuit"),
          (e[(e.k_EMarketingMessageGifting = 8)] =
            "k_EMarketingMessageGifting"),
          (e[(e.k_EMarketingMessageEJsKorner = 9)] =
            "k_EMarketingMessageEJsKorner"),
          (e[(e.k_EMarketingMessageUpdate = 10)] = "k_EMarketingMessageUpdate"),
          (e[(e.k_EMarketingMessageMidweekDeal = 11)] =
            "k_EMarketingMessageMidweekDeal"),
          (e[(e.k_EMarketingMessageDailyDeal = 12)] =
            "k_EMarketingMessageDailyDeal"),
          (e[(e.k_EMarketingMessageNewDLC = 13)] = "k_EMarketingMessageNewDLC"),
          (e[(e.k_EMarketingMessageFreeWeekend = 14)] =
            "k_EMarketingMessageFreeWeekend"),
          (e[(e.k_EMarketingMessageSalePages = 15)] =
            "k_EMarketingMessageSalePages"),
          (e[(e.k_EMarketingMessagePlaytestAvailable = 16)] =
            "k_EMarketingMessagePlaytestAvailable");
      })(s || (s = {})),
        (function (e) {
          (e[(e.k_EMarketingMessageNoAssociation = 0)] =
            "k_EMarketingMessageNoAssociation"),
            (e[(e.k_EMarketingMessageAppAssociation = 1)] =
              "k_EMarketingMessageAppAssociation"),
            (e[(e.k_EMarketingMessageSubscriptionAssociation = 2)] =
              "k_EMarketingMessageSubscriptionAssociation"),
            (e[(e.k_EMarketingMessagePublisherAssociation = 3)] =
              "k_EMarketingMessagePublisherAssociation"),
            (e[(e.k_EMarketingMessageGenreAssociation = 4)] =
              "k_EMarketingMessageGenreAssociation"),
            (e[(e.k_EMarketingMessageBundleAssociation = 5)] =
              "k_EMarketingMessageBundleAssociation");
        })(i || (i = {})),
        (function (e) {
          (e[(e.k_EMarketingMessageVisibleBeta = 1)] =
            "k_EMarketingMessageVisibleBeta"),
            (e[(e.k_EMarketingMessageVisiblePublic = 2)] =
              "k_EMarketingMessageVisiblePublic"),
            (e[(e.k_EMarketingMessageVisibleApprovedForPublish = 3)] =
              "k_EMarketingMessageVisibleApprovedForPublish");
        })(a || (a = {})),
        (function (e) {
          (e[(e.k_EMarketingMessageLookupInvalid = 0)] =
            "k_EMarketingMessageLookupInvalid"),
            (e[(e.k_EMarketingMessageLookupByGID = 1)] =
              "k_EMarketingMessageLookupByGID"),
            (e[(e.k_EMarketingMessageLookupActive = 2)] =
              "k_EMarketingMessageLookupActive"),
            (e[(e.k_EMarketingMessageLookupByTitleWithType = 3)] =
              "k_EMarketingMessageLookupByTitleWithType"),
            (e[(e.k_EMarketingMessageLookupByGIDList = 4)] =
              "k_EMarketingMessageLookupByGIDList");
        })(n || (n = {})),
        (function (e) {
          (e[(e.k_EMarketingMessageValidRealms_GlobalOnly = 0)] =
            "k_EMarketingMessageValidRealms_GlobalOnly"),
            (e[(e.k_EMarketingMessageValidRealms_SteamChinaOnly = 1)] =
              "k_EMarketingMessageValidRealms_SteamChinaOnly"),
            (e[(e.k_EMarketingMessageValidRealms_GlobalAndSteamChina = 2)] =
              "k_EMarketingMessageValidRealms_GlobalAndSteamChina");
        })(o || (o = {})),
        (function (e) {
          (e[(e.k_EMarketingMessageFilterType_Invalid = 0)] =
            "k_EMarketingMessageFilterType_Invalid"),
            (e[(e.k_EMarketingMessageFilterType_OwnsApps = 1)] =
              "k_EMarketingMessageFilterType_OwnsApps"),
            (e[(e.k_EMarketingMessageFilterType_DoesNotOwnApps = 2)] =
              "k_EMarketingMessageFilterType_DoesNotOwnApps"),
            (e[(e.k_EMarketingMessageFilterType_OwnsPackages = 3)] =
              "k_EMarketingMessageFilterType_OwnsPackages"),
            (e[(e.k_EMarketingMessageFilterType_DoesNotOwnsPackages = 4)] =
              "k_EMarketingMessageFilterType_DoesNotOwnsPackages"),
            (e[(e.k_EMarketingMessageFilterType_WishlistsApps = 5)] =
              "k_EMarketingMessageFilterType_WishlistsApps"),
            (e[(e.k_EMarketingMessageFilterType_FollowsApps = 6)] =
              "k_EMarketingMessageFilterType_FollowsApps"),
            (e[(e.k_EMarketingMessageFilterType_MinPlayTimeApps = 7)] =
              "k_EMarketingMessageFilterType_MinPlayTimeApps"),
            (e[(e.k_EMarketingMessageFilterType_MustLaunchedApps = 8)] =
              "k_EMarketingMessageFilterType_MustLaunchedApps"),
            (e[(e.k_EMarketingMessageFilterType_RecentPlayedApps = 9)] =
              "k_EMarketingMessageFilterType_RecentPlayedApps"),
            (e[(e.k_EMarketingMessageFilterType_RetentionApps = 10)] =
              "k_EMarketingMessageFilterType_RetentionApps"),
            (e[(e.k_EMarketingMessageFilterType_SimilarApps = 11)] =
              "k_EMarketingMessageFilterType_SimilarApps"),
            (e[(e.k_EMarketingMessageFilterType_MAX = 12)] =
              "k_EMarketingMessageFilterType_MAX");
        })(l || (l = {})),
        (function (e) {
          (e[(e.k_EMarketingMessageTemplate_Unknown = 0)] =
            "k_EMarketingMessageTemplate_Unknown"),
            (e[(e.k_EMarketingMessageTemplate_Image = 1)] =
              "k_EMarketingMessageTemplate_Image"),
            (e[(e.k_EMarketingMessageTemplate_Animated = 2)] =
              "k_EMarketingMessageTemplate_Animated"),
            (e[(e.k_EMarketingMessageTemplate_Featured_Video = 3)] =
              "k_EMarketingMessageTemplate_Featured_Video"),
            (e[(e.k_EMarketingMessageTemplate_DLC_Override = 4)] =
              "k_EMarketingMessageTemplate_DLC_Override"),
            (e[(e.k_EMarketingMessageTemplate_Replay = 5)] =
              "k_EMarketingMessageTemplate_Replay"),
            (e[(e.k_EMarketingMessageTemplate_Event = 6)] =
              "k_EMarketingMessageTemplate_Event"),
            (e[(e.k_EMarketingMessageTemplate_AutoRender = 7)] =
              "k_EMarketingMessageTemplate_AutoRender"),
            (e[(e.k_EMarketingMessageTemplate_MAX = 8)] =
              "k_EMarketingMessageTemplate_MAX");
        })(u || (u = {})),
        (function (e) {
          (e[(e.k_EMarketingMessageClickLocation_Unknown = 0)] =
            "k_EMarketingMessageClickLocation_Unknown"),
            (e[(e.k_EMarketingMessageClickLocation_Image = 1)] =
              "k_EMarketingMessageClickLocation_Image"),
            (e[(e.k_EMarketingMessageClickLocation_Button = 2)] =
              "k_EMarketingMessageClickLocation_Button"),
            (e[(e.k_EMarketingMessageClickLocation_DlcCapsule = 3)] =
              "k_EMarketingMessageClickLocation_DlcCapsule"),
            (e[(e.k_EMarketingMessageClickLocation_HeaderArea = 4)] =
              "k_EMarketingMessageClickLocation_HeaderArea"),
            (e[(e.k_EMarketingMessageClickLocation_GameCapsule = 5)] =
              "k_EMarketingMessageClickLocation_GameCapsule"),
            (e[(e.k_EMarketingMessageClickLocation_PartnerEvent = 6)] =
              "k_EMarketingMessageClickLocation_PartnerEvent");
        })(c || (c = {}));
      class M extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            M.prototype.gid || d.Sg(M.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            M.sm_m ||
              (M.sm_m = {
                proto: M,
                fields: {
                  gid: {
                    n: 1,
                    br: d.qM.readFixed64String,
                    bw: d.gp.writeFixed64String,
                  },
                  title: { n: 2, br: d.qM.readString, bw: d.gp.writeString },
                  type: { n: 3, br: d.qM.readEnum, bw: d.gp.writeEnum },
                  visibility: { n: 4, br: d.qM.readEnum, bw: d.gp.writeEnum },
                  priority: { n: 5, br: d.qM.readUint32, bw: d.gp.writeUint32 },
                  association_type: {
                    n: 6,
                    br: d.qM.readEnum,
                    bw: d.gp.writeEnum,
                  },
                  associated_id: {
                    n: 7,
                    br: d.qM.readUint32,
                    bw: d.gp.writeUint32,
                  },
                  associated_name: {
                    n: 8,
                    br: d.qM.readString,
                    bw: d.gp.writeString,
                  },
                  start_date: {
                    n: 9,
                    br: d.qM.readUint32,
                    bw: d.gp.writeUint32,
                  },
                  end_date: {
                    n: 10,
                    br: d.qM.readUint32,
                    bw: d.gp.writeUint32,
                  },
                  country_allow: {
                    n: 11,
                    br: d.qM.readString,
                    bw: d.gp.writeString,
                  },
                  country_deny: {
                    n: 12,
                    br: d.qM.readString,
                    bw: d.gp.writeString,
                  },
                  ownership_restrictions_overridden: {
                    n: 13,
                    br: d.qM.readBool,
                    bw: d.gp.writeBool,
                  },
                  must_own_appid: {
                    n: 14,
                    br: d.qM.readUint32,
                    bw: d.gp.writeUint32,
                  },
                  must_not_own_appid: {
                    n: 15,
                    br: d.qM.readUint32,
                    bw: d.gp.writeUint32,
                  },
                  must_own_packageid: {
                    n: 16,
                    br: d.qM.readUint32,
                    bw: d.gp.writeUint32,
                  },
                  must_not_own_packageid: {
                    n: 17,
                    br: d.qM.readUint32,
                    bw: d.gp.writeUint32,
                  },
                  must_have_launched_appid: {
                    n: 18,
                    br: d.qM.readUint32,
                    bw: d.gp.writeUint32,
                  },
                  additional_restrictions: {
                    n: 19,
                    br: d.qM.readString,
                    bw: d.gp.writeString,
                  },
                  template_type: {
                    n: 20,
                    br: d.qM.readString,
                    bw: d.gp.writeString,
                  },
                  template_vars: {
                    n: 21,
                    br: d.qM.readString,
                    bw: d.gp.writeString,
                  },
                  flags: { n: 22, br: d.qM.readUint32, bw: d.gp.writeUint32 },
                  creator_name: {
                    n: 23,
                    br: d.qM.readString,
                    bw: d.gp.writeString,
                  },
                  template_vars_json: {
                    n: 24,
                    br: d.qM.readString,
                    bw: d.gp.writeString,
                  },
                  additional_restrictions_json: {
                    n: 25,
                    br: d.qM.readString,
                    bw: d.gp.writeString,
                  },
                },
              }),
            M.sm_m
          );
        }
        static MBF() {
          return M.sm_mbf || (M.sm_mbf = d.w0(M.M())), M.sm_mbf;
        }
        toObject(e = !1) {
          return M.toObject(e, this);
        }
        static toObject(e, t) {
          return d.BT(M.M(), e, t);
        }
        static fromObject(e) {
          return d.Uq(M.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (g().BinaryReader)(e),
            r = new M();
          return M.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return d.zj(M.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (g().BinaryWriter)();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          d.i0(M.M(), e, t);
        }
        serializeBase64String() {
          var e = new (g().BinaryWriter)();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessageProto";
        }
      }
      class y extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            y.prototype.gid || d.Sg(y.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            y.sm_m ||
              (y.sm_m = {
                proto: y,
                fields: {
                  gid: {
                    n: 1,
                    br: d.qM.readFixed64String,
                    bw: d.gp.writeFixed64String,
                  },
                  title: { n: 2, br: d.qM.readString, bw: d.gp.writeString },
                  type: { n: 3, br: d.qM.readEnum, bw: d.gp.writeEnum },
                  associated_item_id: { n: 4, c: h.O4 },
                  associated_item: { n: 5, c: h.vB },
                  associated_name: {
                    n: 6,
                    br: d.qM.readString,
                    bw: d.gp.writeString,
                  },
                  template_type: {
                    n: 10,
                    br: d.qM.readString,
                    bw: d.gp.writeString,
                  },
                  template_vars_json: {
                    n: 11,
                    br: d.qM.readString,
                    bw: d.gp.writeString,
                  },
                },
              }),
            y.sm_m
          );
        }
        static MBF() {
          return y.sm_mbf || (y.sm_mbf = d.w0(y.M())), y.sm_mbf;
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, t) {
          return d.BT(y.M(), e, t);
        }
        static fromObject(e) {
          return d.Uq(y.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (g().BinaryReader)(e),
            r = new y();
          return y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return d.zj(y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (g().BinaryWriter)();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          d.i0(y.M(), e, t);
        }
        serializeBase64String() {
          var e = new (g().BinaryWriter)();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CDisplayMarketingMessage";
        }
      }
      class B extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            B.prototype.country || d.Sg(B.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            B.sm_m ||
              (B.sm_m = {
                proto: B,
                fields: {
                  country: { n: 1, br: d.qM.readString, bw: d.gp.writeString },
                  anonymous_user: {
                    n: 2,
                    br: d.qM.readBool,
                    bw: d.gp.writeBool,
                  },
                },
              }),
            B.sm_m
          );
        }
        static MBF() {
          return B.sm_mbf || (B.sm_mbf = d.w0(B.M())), B.sm_mbf;
        }
        toObject(e = !1) {
          return B.toObject(e, this);
        }
        static toObject(e, t) {
          return d.BT(B.M(), e, t);
        }
        static fromObject(e) {
          return d.Uq(B.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (g().BinaryReader)(e),
            r = new B();
          return B.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return d.zj(B.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (g().BinaryWriter)();
          return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          d.i0(B.M(), e, t);
        }
        serializeBase64String() {
          var e = new (g().BinaryWriter)();
          return B.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_GetActiveMarketingMessages_Request";
        }
      }
      class k extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            k.prototype.messages || d.Sg(k.M()),
            _.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            k.sm_m ||
              (k.sm_m = {
                proto: k,
                fields: {
                  messages: { n: 1, c: M, r: !0, q: !0 },
                  time_next_message_age: {
                    n: 2,
                    br: d.qM.readUint32,
                    bw: d.gp.writeUint32,
                  },
                },
              }),
            k.sm_m
          );
        }
        static MBF() {
          return k.sm_mbf || (k.sm_mbf = d.w0(k.M())), k.sm_mbf;
        }
        toObject(e = !1) {
          return k.toObject(e, this);
        }
        static toObject(e, t) {
          return d.BT(k.M(), e, t);
        }
        static fromObject(e) {
          return d.Uq(k.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (g().BinaryReader)(e),
            r = new k();
          return k.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return d.zj(k.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (g().BinaryWriter)();
          return k.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          d.i0(k.M(), e, t);
        }
        serializeBase64String() {
          var e = new (g().BinaryWriter)();
          return k.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_GetActiveMarketingMessages_Response";
        }
      }
      class b extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            b.prototype.start_past_days || d.Sg(b.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = {
                proto: b,
                fields: {
                  start_past_days: {
                    n: 1,
                    br: d.qM.readUint32,
                    bw: d.gp.writeUint32,
                  },
                  upto_past_days: {
                    n: 2,
                    br: d.qM.readUint32,
                    bw: d.gp.writeUint32,
                  },
                },
              }),
            b.sm_m
          );
        }
        static MBF() {
          return b.sm_mbf || (b.sm_mbf = d.w0(b.M())), b.sm_mbf;
        }
        toObject(e = !1) {
          return b.toObject(e, this);
        }
        static toObject(e, t) {
          return d.BT(b.M(), e, t);
        }
        static fromObject(e) {
          return d.Uq(b.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (g().BinaryReader)(e),
            r = new b();
          return b.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return d.zj(b.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (g().BinaryWriter)();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          d.i0(b.M(), e, t);
        }
        serializeBase64String() {
          var e = new (g().BinaryWriter)();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_GetPastMarketingMessages_Request";
        }
      }
      class f extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            f.prototype.messages || d.Sg(f.M()),
            _.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            f.sm_m ||
              (f.sm_m = {
                proto: f,
                fields: { messages: { n: 1, c: M, r: !0, q: !0 } },
              }),
            f.sm_m
          );
        }
        static MBF() {
          return f.sm_mbf || (f.sm_mbf = d.w0(f.M())), f.sm_mbf;
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, t) {
          return d.BT(f.M(), e, t);
        }
        static fromObject(e) {
          return d.Uq(f.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (g().BinaryReader)(e),
            r = new f();
          return f.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return d.zj(f.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (g().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          d.i0(f.M(), e, t);
        }
        serializeBase64String() {
          var e = new (g().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_GetPastMarketingMessages_Response";
        }
      }
      class I extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            I.prototype.include_seen_messages || d.Sg(I.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            I.sm_m ||
              (I.sm_m = {
                proto: I,
                fields: {
                  include_seen_messages: {
                    n: 1,
                    br: d.qM.readBool,
                    bw: d.gp.writeBool,
                  },
                  country_code: {
                    n: 2,
                    br: d.qM.readString,
                    bw: d.gp.writeString,
                  },
                  elanguage: { n: 3, br: d.qM.readInt32, bw: d.gp.writeInt32 },
                  operating_system: {
                    n: 4,
                    br: d.qM.readInt32,
                    bw: d.gp.writeInt32,
                  },
                  client_package_version: {
                    n: 5,
                    br: d.qM.readInt32,
                    bw: d.gp.writeInt32,
                  },
                  context: { n: 6, c: h.TS },
                  data_request: { n: 7, c: h.gn },
                },
              }),
            I.sm_m
          );
        }
        static MBF() {
          return I.sm_mbf || (I.sm_mbf = d.w0(I.M())), I.sm_mbf;
        }
        toObject(e = !1) {
          return I.toObject(e, this);
        }
        static toObject(e, t) {
          return d.BT(I.M(), e, t);
        }
        static fromObject(e) {
          return d.Uq(I.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (g().BinaryReader)(e),
            r = new I();
          return I.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return d.zj(I.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (g().BinaryWriter)();
          return I.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          d.i0(I.M(), e, t);
        }
        serializeBase64String() {
          var e = new (g().BinaryWriter)();
          return I.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_GetMarketingMessagesForUser_Request";
        }
      }
      class S extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            S.prototype.messages || d.Sg(S.M()),
            _.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            S.sm_m ||
              (S.sm_m = {
                proto: S,
                fields: { messages: { n: 1, c: R, r: !0, q: !0 } },
              }),
            S.sm_m
          );
        }
        static MBF() {
          return S.sm_mbf || (S.sm_mbf = d.w0(S.M())), S.sm_mbf;
        }
        toObject(e = !1) {
          return S.toObject(e, this);
        }
        static toObject(e, t) {
          return d.BT(S.M(), e, t);
        }
        static fromObject(e) {
          return d.Uq(S.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (g().BinaryReader)(e),
            r = new S();
          return S.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return d.zj(S.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (g().BinaryWriter)();
          return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          d.i0(S.M(), e, t);
        }
        serializeBase64String() {
          var e = new (g().BinaryWriter)();
          return S.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_GetMarketingMessagesForUser_Response";
        }
      }
      class R extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            R.prototype.already_seen || d.Sg(R.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            R.sm_m ||
              (R.sm_m = {
                proto: R,
                fields: {
                  already_seen: { n: 1, br: d.qM.readBool, bw: d.gp.writeBool },
                  message: { n: 2, c: y },
                },
              }),
            R.sm_m
          );
        }
        static MBF() {
          return R.sm_mbf || (R.sm_mbf = d.w0(R.M())), R.sm_mbf;
        }
        toObject(e = !1) {
          return R.toObject(e, this);
        }
        static toObject(e, t) {
          return d.BT(R.M(), e, t);
        }
        static fromObject(e) {
          return d.Uq(R.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (g().BinaryReader)(e),
            r = new R();
          return R.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return d.zj(R.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (g().BinaryWriter)();
          return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          d.i0(R.M(), e, t);
        }
        serializeBase64String() {
          var e = new (g().BinaryWriter)();
          return R.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_GetMarketingMessagesForUser_Response_MarketingMessageForUser";
        }
      }
      class T extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            T.prototype.country_code || d.Sg(T.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            T.sm_m ||
              (T.sm_m = {
                proto: T,
                fields: {
                  country_code: {
                    n: 2,
                    br: d.qM.readString,
                    bw: d.gp.writeString,
                  },
                  elanguage: { n: 3, br: d.qM.readInt32, bw: d.gp.writeInt32 },
                  operating_system: {
                    n: 4,
                    br: d.qM.readInt32,
                    bw: d.gp.writeInt32,
                  },
                  client_package_version: {
                    n: 5,
                    br: d.qM.readInt32,
                    bw: d.gp.writeInt32,
                  },
                },
              }),
            T.sm_m
          );
        }
        static MBF() {
          return T.sm_mbf || (T.sm_mbf = d.w0(T.M())), T.sm_mbf;
        }
        toObject(e = !1) {
          return T.toObject(e, this);
        }
        static toObject(e, t) {
          return d.BT(T.M(), e, t);
        }
        static fromObject(e) {
          return d.Uq(T.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (g().BinaryReader)(e),
            r = new T();
          return T.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return d.zj(T.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (g().BinaryWriter)();
          return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          d.i0(T.M(), e, t);
        }
        serializeBase64String() {
          var e = new (g().BinaryWriter)();
          return T.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_DoesUserHavePendingMarketingMessages_Request";
        }
      }
      class w extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            w.prototype.has_pending_messages || d.Sg(w.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            w.sm_m ||
              (w.sm_m = {
                proto: w,
                fields: {
                  has_pending_messages: {
                    n: 1,
                    br: d.qM.readBool,
                    bw: d.gp.writeBool,
                  },
                  pending_message_count: {
                    n: 2,
                    br: d.qM.readInt32,
                    bw: d.gp.writeInt32,
                  },
                },
              }),
            w.sm_m
          );
        }
        static MBF() {
          return w.sm_mbf || (w.sm_mbf = d.w0(w.M())), w.sm_mbf;
        }
        toObject(e = !1) {
          return w.toObject(e, this);
        }
        static toObject(e, t) {
          return d.BT(w.M(), e, t);
        }
        static fromObject(e) {
          return d.Uq(w.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (g().BinaryReader)(e),
            r = new w();
          return w.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return d.zj(w.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (g().BinaryWriter)();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          d.i0(w.M(), e, t);
        }
        serializeBase64String() {
          var e = new (g().BinaryWriter)();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_DoesUserHavePendingMarketingMessages_Response";
        }
      }
      class E extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            E.prototype.gid || d.Sg(E.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            E.sm_m ||
              (E.sm_m = {
                proto: E,
                fields: {
                  gid: {
                    n: 1,
                    br: d.qM.readFixed64String,
                    bw: d.gp.writeFixed64String,
                  },
                  context: { n: 2, c: h.TS },
                  data_request: { n: 3, c: h.gn },
                },
              }),
            E.sm_m
          );
        }
        static MBF() {
          return E.sm_mbf || (E.sm_mbf = d.w0(E.M())), E.sm_mbf;
        }
        toObject(e = !1) {
          return E.toObject(e, this);
        }
        static toObject(e, t) {
          return d.BT(E.M(), e, t);
        }
        static fromObject(e) {
          return d.Uq(E.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (g().BinaryReader)(e),
            r = new E();
          return E.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return d.zj(E.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (g().BinaryWriter)();
          return E.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          d.i0(E.M(), e, t);
        }
        serializeBase64String() {
          var e = new (g().BinaryWriter)();
          return E.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_GetDisplayMarketingMessage_Request";
        }
      }
      class z extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            z.prototype.message || d.Sg(z.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            z.sm_m ||
              (z.sm_m = { proto: z, fields: { message: { n: 1, c: y } } }),
            z.sm_m
          );
        }
        static MBF() {
          return z.sm_mbf || (z.sm_mbf = d.w0(z.M())), z.sm_mbf;
        }
        toObject(e = !1) {
          return z.toObject(e, this);
        }
        static toObject(e, t) {
          return d.BT(z.M(), e, t);
        }
        static fromObject(e) {
          return d.Uq(z.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (g().BinaryReader)(e),
            r = new z();
          return z.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return d.zj(z.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (g().BinaryWriter)();
          return z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          d.i0(z.M(), e, t);
        }
        serializeBase64String() {
          var e = new (g().BinaryWriter)();
          return z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_GetDisplayMarketingMessage_Response";
        }
      }
      class C extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            C.prototype.gid || d.Sg(C.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            C.sm_m ||
              (C.sm_m = {
                proto: C,
                fields: {
                  gid: {
                    n: 1,
                    br: d.qM.readFixed64String,
                    bw: d.gp.writeFixed64String,
                  },
                  display_index: {
                    n: 2,
                    d: 0,
                    br: d.qM.readUint32,
                    bw: d.gp.writeUint32,
                  },
                  template_type: {
                    n: 3,
                    d: u.k_EMarketingMessageTemplate_Unknown,
                    br: d.qM.readEnum,
                    bw: d.gp.writeEnum,
                  },
                },
              }),
            C.sm_m
          );
        }
        static MBF() {
          return C.sm_mbf || (C.sm_mbf = d.w0(C.M())), C.sm_mbf;
        }
        toObject(e = !1) {
          return C.toObject(e, this);
        }
        static toObject(e, t) {
          return d.BT(C.M(), e, t);
        }
        static fromObject(e) {
          return d.Uq(C.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (g().BinaryReader)(e),
            r = new C();
          return C.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return d.zj(C.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (g().BinaryWriter)();
          return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          d.i0(C.M(), e, t);
        }
        serializeBase64String() {
          var e = new (g().BinaryWriter)();
          return C.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_MarkMessageSeen_Notification";
        }
      }
      class v extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            v.prototype.gid || d.Sg(v.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            v.sm_m ||
              (v.sm_m = {
                proto: v,
                fields: {
                  gid: {
                    n: 1,
                    br: d.qM.readFixed64String,
                    bw: d.gp.writeFixed64String,
                  },
                  display_index: {
                    n: 2,
                    d: 0,
                    br: d.qM.readUint32,
                    bw: d.gp.writeUint32,
                  },
                  template_type: {
                    n: 3,
                    d: u.k_EMarketingMessageTemplate_Unknown,
                    br: d.qM.readEnum,
                    bw: d.gp.writeEnum,
                  },
                  click_location: {
                    n: 4,
                    d: c.k_EMarketingMessageClickLocation_Unknown,
                    br: d.qM.readEnum,
                    bw: d.gp.writeEnum,
                  },
                },
              }),
            v.sm_m
          );
        }
        static MBF() {
          return v.sm_mbf || (v.sm_mbf = d.w0(v.M())), v.sm_mbf;
        }
        toObject(e = !1) {
          return v.toObject(e, this);
        }
        static toObject(e, t) {
          return d.BT(v.M(), e, t);
        }
        static fromObject(e) {
          return d.Uq(v.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (g().BinaryReader)(e),
            r = new v();
          return v.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return d.zj(v.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (g().BinaryWriter)();
          return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          d.i0(v.M(), e, t);
        }
        serializeBase64String() {
          var e = new (g().BinaryWriter)();
          return v.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_MarkMessageClicked_Notification";
        }
      }
      class F extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            F.prototype.gid || d.Sg(F.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            F.sm_m ||
              (F.sm_m = {
                proto: F,
                fields: {
                  gid: {
                    n: 1,
                    br: d.qM.readFixed64String,
                    bw: d.gp.writeFixed64String,
                  },
                },
              }),
            F.sm_m
          );
        }
        static MBF() {
          return F.sm_mbf || (F.sm_mbf = d.w0(F.M())), F.sm_mbf;
        }
        toObject(e = !1) {
          return F.toObject(e, this);
        }
        static toObject(e, t) {
          return d.BT(F.M(), e, t);
        }
        static fromObject(e) {
          return d.Uq(F.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (g().BinaryReader)(e),
            r = new F();
          return F.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return d.zj(F.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (g().BinaryWriter)();
          return F.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          d.i0(F.M(), e, t);
        }
        serializeBase64String() {
          var e = new (g().BinaryWriter)();
          return F.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_GetMarketingMessage_Request";
        }
      }
      class P extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            P.prototype.message || d.Sg(P.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            P.sm_m ||
              (P.sm_m = { proto: P, fields: { message: { n: 1, c: M } } }),
            P.sm_m
          );
        }
        static MBF() {
          return P.sm_mbf || (P.sm_mbf = d.w0(P.M())), P.sm_mbf;
        }
        toObject(e = !1) {
          return P.toObject(e, this);
        }
        static toObject(e, t) {
          return d.BT(P.M(), e, t);
        }
        static fromObject(e) {
          return d.Uq(P.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (g().BinaryReader)(e),
            r = new P();
          return P.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return d.zj(P.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (g().BinaryWriter)();
          return P.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          d.i0(P.M(), e, t);
        }
        serializeBase64String() {
          var e = new (g().BinaryWriter)();
          return P.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_GetMarketingMessage_Response";
        }
      }
      class A extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            A.prototype.lookup_type || d.Sg(A.M()),
            _.Message.initialize(this, e, 0, -1, [4], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            A.sm_m ||
              (A.sm_m = {
                proto: A,
                fields: {
                  lookup_type: { n: 1, br: d.qM.readEnum, bw: d.gp.writeEnum },
                  gid: {
                    n: 2,
                    br: d.qM.readFixed64String,
                    bw: d.gp.writeFixed64String,
                  },
                  message_type: { n: 3, br: d.qM.readEnum, bw: d.gp.writeEnum },
                  gidlist: {
                    n: 4,
                    r: !0,
                    q: !0,
                    br: d.qM.readFixed64String,
                    pbr: d.qM.readPackedFixed64String,
                    bw: d.gp.writeRepeatedFixed64String,
                  },
                  title: { n: 5, br: d.qM.readString, bw: d.gp.writeString },
                },
              }),
            A.sm_m
          );
        }
        static MBF() {
          return A.sm_mbf || (A.sm_mbf = d.w0(A.M())), A.sm_mbf;
        }
        toObject(e = !1) {
          return A.toObject(e, this);
        }
        static toObject(e, t) {
          return d.BT(A.M(), e, t);
        }
        static fromObject(e) {
          return d.Uq(A.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (g().BinaryReader)(e),
            r = new A();
          return A.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return d.zj(A.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (g().BinaryWriter)();
          return A.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          d.i0(A.M(), e, t);
        }
        serializeBase64String() {
          var e = new (g().BinaryWriter)();
          return A.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_FindMarketingMessages_Request";
        }
      }
      class O extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            O.prototype.messages || d.Sg(O.M()),
            _.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            O.sm_m ||
              (O.sm_m = {
                proto: O,
                fields: { messages: { n: 1, c: M, r: !0, q: !0 } },
              }),
            O.sm_m
          );
        }
        static MBF() {
          return O.sm_mbf || (O.sm_mbf = d.w0(O.M())), O.sm_mbf;
        }
        toObject(e = !1) {
          return O.toObject(e, this);
        }
        static toObject(e, t) {
          return d.BT(O.M(), e, t);
        }
        static fromObject(e) {
          return d.Uq(O.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (g().BinaryReader)(e),
            r = new O();
          return O.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return d.zj(O.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (g().BinaryWriter)();
          return O.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          d.i0(O.M(), e, t);
        }
        serializeBase64String() {
          var e = new (g().BinaryWriter)();
          return O.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_FindMarketingMessages_Response";
        }
      }
      class q extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            q.prototype.message || d.Sg(q.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            q.sm_m ||
              (q.sm_m = {
                proto: q,
                fields: {
                  message: { n: 1, c: M },
                  from_json: { n: 2, br: d.qM.readBool, bw: d.gp.writeBool },
                },
              }),
            q.sm_m
          );
        }
        static MBF() {
          return q.sm_mbf || (q.sm_mbf = d.w0(q.M())), q.sm_mbf;
        }
        toObject(e = !1) {
          return q.toObject(e, this);
        }
        static toObject(e, t) {
          return d.BT(q.M(), e, t);
        }
        static fromObject(e) {
          return d.Uq(q.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (g().BinaryReader)(e),
            r = new q();
          return q.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return d.zj(q.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (g().BinaryWriter)();
          return q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          d.i0(q.M(), e, t);
        }
        serializeBase64String() {
          var e = new (g().BinaryWriter)();
          return q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_CreateMarketingMessage_Request";
        }
      }
      class U extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            U.prototype.gid || d.Sg(U.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            U.sm_m ||
              (U.sm_m = {
                proto: U,
                fields: {
                  gid: {
                    n: 1,
                    br: d.qM.readFixed64String,
                    bw: d.gp.writeFixed64String,
                  },
                },
              }),
            U.sm_m
          );
        }
        static MBF() {
          return U.sm_mbf || (U.sm_mbf = d.w0(U.M())), U.sm_mbf;
        }
        toObject(e = !1) {
          return U.toObject(e, this);
        }
        static toObject(e, t) {
          return d.BT(U.M(), e, t);
        }
        static fromObject(e) {
          return d.Uq(U.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (g().BinaryReader)(e),
            r = new U();
          return U.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return d.zj(U.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (g().BinaryWriter)();
          return U.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          d.i0(U.M(), e, t);
        }
        serializeBase64String() {
          var e = new (g().BinaryWriter)();
          return U.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_CreateMarketingMessage_Response";
        }
      }
      class j extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            j.prototype.gid || d.Sg(j.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            j.sm_m ||
              (j.sm_m = {
                proto: j,
                fields: {
                  gid: {
                    n: 1,
                    br: d.qM.readFixed64String,
                    bw: d.gp.writeFixed64String,
                  },
                  message: { n: 2, c: M },
                  from_json: { n: 3, br: d.qM.readBool, bw: d.gp.writeBool },
                },
              }),
            j.sm_m
          );
        }
        static MBF() {
          return j.sm_mbf || (j.sm_mbf = d.w0(j.M())), j.sm_mbf;
        }
        toObject(e = !1) {
          return j.toObject(e, this);
        }
        static toObject(e, t) {
          return d.BT(j.M(), e, t);
        }
        static fromObject(e) {
          return d.Uq(j.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (g().BinaryReader)(e),
            r = new j();
          return j.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return d.zj(j.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (g().BinaryWriter)();
          return j.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          d.i0(j.M(), e, t);
        }
        serializeBase64String() {
          var e = new (g().BinaryWriter)();
          return j.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_UpdateMarketingMessage_Request";
        }
      }
      class W extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return W.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new W();
        }
        static deserializeBinary(e) {
          let t = new (g().BinaryReader)(e),
            r = new W();
          return W.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (g().BinaryWriter)();
          return W.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (g().BinaryWriter)();
          return W.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_UpdateMarketingMessage_Response";
        }
      }
      class G extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            G.prototype.gid || d.Sg(G.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            G.sm_m ||
              (G.sm_m = {
                proto: G,
                fields: {
                  gid: {
                    n: 1,
                    br: d.qM.readFixed64String,
                    bw: d.gp.writeFixed64String,
                  },
                },
              }),
            G.sm_m
          );
        }
        static MBF() {
          return G.sm_mbf || (G.sm_mbf = d.w0(G.M())), G.sm_mbf;
        }
        toObject(e = !1) {
          return G.toObject(e, this);
        }
        static toObject(e, t) {
          return d.BT(G.M(), e, t);
        }
        static fromObject(e) {
          return d.Uq(G.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (g().BinaryReader)(e),
            r = new G();
          return G.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return d.zj(G.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (g().BinaryWriter)();
          return G.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          d.i0(G.M(), e, t);
        }
        serializeBase64String() {
          var e = new (g().BinaryWriter)();
          return G.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_DeleteMarketingMessage_Request";
        }
      }
      class D extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return D.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new D();
        }
        static deserializeBinary(e) {
          let t = new (g().BinaryReader)(e),
            r = new D();
          return D.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (g().BinaryWriter)();
          return D.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (g().BinaryWriter)();
          return D.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_DeleteMarketingMessage_Response";
        }
      }
      class L extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            L.prototype.gid || d.Sg(L.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            L.sm_m ||
              (L.sm_m = {
                proto: L,
                fields: {
                  gid: {
                    n: 1,
                    br: d.qM.readFixed64String,
                    bw: d.gp.writeFixed64String,
                  },
                },
              }),
            L.sm_m
          );
        }
        static MBF() {
          return L.sm_mbf || (L.sm_mbf = d.w0(L.M())), L.sm_mbf;
        }
        toObject(e = !1) {
          return L.toObject(e, this);
        }
        static toObject(e, t) {
          return d.BT(L.M(), e, t);
        }
        static fromObject(e) {
          return d.Uq(L.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (g().BinaryReader)(e),
            r = new L();
          return L.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return d.zj(L.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (g().BinaryWriter)();
          return L.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          d.i0(L.M(), e, t);
        }
        serializeBase64String() {
          var e = new (g().BinaryWriter)();
          return L.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_GetMarketingMessageViewerStats_Request";
        }
      }
      class x extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            x.prototype.rt_time_hour || d.Sg(x.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            x.sm_m ||
              (x.sm_m = {
                proto: x,
                fields: {
                  rt_time_hour: {
                    n: 1,
                    br: d.qM.readUint32,
                    bw: d.gp.writeUint32,
                  },
                  seen_count: {
                    n: 2,
                    br: d.qM.readUint32,
                    bw: d.gp.writeUint32,
                  },
                  template_type: {
                    n: 3,
                    br: d.qM.readEnum,
                    bw: d.gp.writeEnum,
                  },
                  display_index: {
                    n: 4,
                    br: d.qM.readUint32,
                    bw: d.gp.writeUint32,
                  },
                },
              }),
            x.sm_m
          );
        }
        static MBF() {
          return x.sm_mbf || (x.sm_mbf = d.w0(x.M())), x.sm_mbf;
        }
        toObject(e = !1) {
          return x.toObject(e, this);
        }
        static toObject(e, t) {
          return d.BT(x.M(), e, t);
        }
        static fromObject(e) {
          return d.Uq(x.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (g().BinaryReader)(e),
            r = new x();
          return x.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return d.zj(x.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (g().BinaryWriter)();
          return x.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          d.i0(x.M(), e, t);
        }
        serializeBase64String() {
          var e = new (g().BinaryWriter)();
          return x.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessageHourlyStats";
        }
      }
      class H extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            H.prototype.stats || d.Sg(H.M()),
            _.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            H.sm_m ||
              (H.sm_m = {
                proto: H,
                fields: { stats: { n: 1, c: x, r: !0, q: !0 } },
              }),
            H.sm_m
          );
        }
        static MBF() {
          return H.sm_mbf || (H.sm_mbf = d.w0(H.M())), H.sm_mbf;
        }
        toObject(e = !1) {
          return H.toObject(e, this);
        }
        static toObject(e, t) {
          return d.BT(H.M(), e, t);
        }
        static fromObject(e) {
          return d.Uq(H.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (g().BinaryReader)(e),
            r = new H();
          return H.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return d.zj(H.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (g().BinaryWriter)();
          return H.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          d.i0(H.M(), e, t);
        }
        serializeBase64String() {
          var e = new (g().BinaryWriter)();
          return H.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_GetMarketingMessageViewerStats_Response";
        }
      }
      class N extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            N.prototype.rt_start_time || d.Sg(N.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            N.sm_m ||
              (N.sm_m = {
                proto: N,
                fields: {
                  rt_start_time: {
                    n: 1,
                    br: d.qM.readUint32,
                    bw: d.gp.writeUint32,
                  },
                  rt_end_time: {
                    n: 2,
                    br: d.qM.readUint32,
                    bw: d.gp.writeUint32,
                  },
                },
              }),
            N.sm_m
          );
        }
        static MBF() {
          return N.sm_mbf || (N.sm_mbf = d.w0(N.M())), N.sm_mbf;
        }
        toObject(e = !1) {
          return N.toObject(e, this);
        }
        static toObject(e, t) {
          return d.BT(N.M(), e, t);
        }
        static fromObject(e) {
          return d.Uq(N.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (g().BinaryReader)(e),
            r = new N();
          return N.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return d.zj(N.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (g().BinaryWriter)();
          return N.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          d.i0(N.M(), e, t);
        }
        serializeBase64String() {
          var e = new (g().BinaryWriter)();
          return N.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_GetMarketingMessagesViewerRangeStats_Request";
        }
      }
      class K extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            K.prototype.rt_time_hour || d.Sg(K.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            K.sm_m ||
              (K.sm_m = {
                proto: K,
                fields: {
                  rt_time_hour: {
                    n: 1,
                    br: d.qM.readUint32,
                    bw: d.gp.writeUint32,
                  },
                  clicked_count: {
                    n: 2,
                    br: d.qM.readUint32,
                    bw: d.gp.writeUint32,
                  },
                  display_index: {
                    n: 3,
                    br: d.qM.readUint32,
                    bw: d.gp.writeUint32,
                  },
                  template_type: {
                    n: 4,
                    br: d.qM.readEnum,
                    bw: d.gp.writeEnum,
                  },
                  click_location: {
                    n: 5,
                    br: d.qM.readEnum,
                    bw: d.gp.writeEnum,
                  },
                },
              }),
            K.sm_m
          );
        }
        static MBF() {
          return K.sm_mbf || (K.sm_mbf = d.w0(K.M())), K.sm_mbf;
        }
        toObject(e = !1) {
          return K.toObject(e, this);
        }
        static toObject(e, t) {
          return d.BT(K.M(), e, t);
        }
        static fromObject(e) {
          return d.Uq(K.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (g().BinaryReader)(e),
            r = new K();
          return K.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return d.zj(K.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (g().BinaryWriter)();
          return K.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          d.i0(K.M(), e, t);
        }
        serializeBase64String() {
          var e = new (g().BinaryWriter)();
          return K.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessageClickedHourlyStats";
        }
      }
      class V extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            V.prototype.stats || d.Sg(V.M()),
            _.Message.initialize(this, e, 0, -1, [1, 2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            V.sm_m ||
              (V.sm_m = {
                proto: V,
                fields: {
                  stats: { n: 1, c: x, r: !0, q: !0 },
                  clicked_stats: { n: 2, c: K, r: !0, q: !0 },
                },
              }),
            V.sm_m
          );
        }
        static MBF() {
          return V.sm_mbf || (V.sm_mbf = d.w0(V.M())), V.sm_mbf;
        }
        toObject(e = !1) {
          return V.toObject(e, this);
        }
        static toObject(e, t) {
          return d.BT(V.M(), e, t);
        }
        static fromObject(e) {
          return d.Uq(V.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (g().BinaryReader)(e),
            r = new V();
          return V.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return d.zj(V.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (g().BinaryWriter)();
          return V.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          d.i0(V.M(), e, t);
        }
        serializeBase64String() {
          var e = new (g().BinaryWriter)();
          return V.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_GetMarketingMessagesViewerRangeStats_Response";
        }
      }
      class Q extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Q.prototype.gid || d.Sg(Q.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Q.sm_m ||
              (Q.sm_m = {
                proto: Q,
                fields: {
                  gid: {
                    n: 1,
                    br: d.qM.readFixed64String,
                    bw: d.gp.writeFixed64String,
                  },
                },
              }),
            Q.sm_m
          );
        }
        static MBF() {
          return Q.sm_mbf || (Q.sm_mbf = d.w0(Q.M())), Q.sm_mbf;
        }
        toObject(e = !1) {
          return Q.toObject(e, this);
        }
        static toObject(e, t) {
          return d.BT(Q.M(), e, t);
        }
        static fromObject(e) {
          return d.Uq(Q.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (g().BinaryReader)(e),
            r = new Q();
          return Q.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return d.zj(Q.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (g().BinaryWriter)();
          return Q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          d.i0(Q.M(), e, t);
        }
        serializeBase64String() {
          var e = new (g().BinaryWriter)();
          return Q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_GetMarketingMessageClickedStats_Request";
        }
      }
      class $ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            $.prototype.stats || d.Sg($.M()),
            _.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            $.sm_m ||
              ($.sm_m = {
                proto: $,
                fields: { stats: { n: 1, c: K, r: !0, q: !0 } },
              }),
            $.sm_m
          );
        }
        static MBF() {
          return $.sm_mbf || ($.sm_mbf = d.w0($.M())), $.sm_mbf;
        }
        toObject(e = !1) {
          return $.toObject(e, this);
        }
        static toObject(e, t) {
          return d.BT($.M(), e, t);
        }
        static fromObject(e) {
          return d.Uq($.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (g().BinaryReader)(e),
            r = new $();
          return $.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return d.zj($.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (g().BinaryWriter)();
          return $.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          d.i0($.M(), e, t);
        }
        serializeBase64String() {
          var e = new (g().BinaryWriter)();
          return $.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_GetMarketingMessageClickedStats_Response";
        }
      }
      class Y extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Y.prototype.partnerid || d.Sg(Y.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Y.sm_m ||
              (Y.sm_m = {
                proto: Y,
                fields: {
                  partnerid: {
                    n: 1,
                    br: d.qM.readUint32,
                    bw: d.gp.writeUint32,
                  },
                },
              }),
            Y.sm_m
          );
        }
        static MBF() {
          return Y.sm_mbf || (Y.sm_mbf = d.w0(Y.M())), Y.sm_mbf;
        }
        toObject(e = !1) {
          return Y.toObject(e, this);
        }
        static toObject(e, t) {
          return d.BT(Y.M(), e, t);
        }
        static fromObject(e) {
          return d.Uq(Y.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (g().BinaryReader)(e),
            r = new Y();
          return Y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return d.zj(Y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (g().BinaryWriter)();
          return Y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          d.i0(Y.M(), e, t);
        }
        serializeBase64String() {
          var e = new (g().BinaryWriter)();
          return Y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_GetPartnerReadyToPublishMessages_Request";
        }
      }
      class J extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            J.prototype.messages || d.Sg(J.M()),
            _.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            J.sm_m ||
              (J.sm_m = {
                proto: J,
                fields: { messages: { n: 1, c: y, r: !0, q: !0 } },
              }),
            J.sm_m
          );
        }
        static MBF() {
          return J.sm_mbf || (J.sm_mbf = d.w0(J.M())), J.sm_mbf;
        }
        toObject(e = !1) {
          return J.toObject(e, this);
        }
        static toObject(e, t) {
          return d.BT(J.M(), e, t);
        }
        static fromObject(e) {
          return d.Uq(J.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (g().BinaryReader)(e),
            r = new J();
          return J.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return d.zj(J.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (g().BinaryWriter)();
          return J.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          d.i0(J.M(), e, t);
        }
        serializeBase64String() {
          var e = new (g().BinaryWriter)();
          return J.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_GetPartnerReadyToPublishMessages_Response";
        }
      }
      class X extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            X.prototype.gid || d.Sg(X.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            X.sm_m ||
              (X.sm_m = {
                proto: X,
                fields: {
                  gid: {
                    n: 1,
                    br: d.qM.readFixed64String,
                    bw: d.gp.writeFixed64String,
                  },
                  partnerid: {
                    n: 2,
                    br: d.qM.readUint32,
                    bw: d.gp.writeUint32,
                  },
                },
              }),
            X.sm_m
          );
        }
        static MBF() {
          return X.sm_mbf || (X.sm_mbf = d.w0(X.M())), X.sm_mbf;
        }
        toObject(e = !1) {
          return X.toObject(e, this);
        }
        static toObject(e, t) {
          return d.BT(X.M(), e, t);
        }
        static fromObject(e) {
          return d.Uq(X.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (g().BinaryReader)(e),
            r = new X();
          return X.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return d.zj(X.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (g().BinaryWriter)();
          return X.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          d.i0(X.M(), e, t);
        }
        serializeBase64String() {
          var e = new (g().BinaryWriter)();
          return X.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_PartnerPublishMessage_Request";
        }
      }
      class Z extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Z.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new Z();
        }
        static deserializeBinary(e) {
          let t = new (g().BinaryReader)(e),
            r = new Z();
          return Z.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (g().BinaryWriter)();
          return Z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (g().BinaryWriter)();
          return Z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_PartnerPublishMessage_Response";
        }
      }
      class ee extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ee.prototype.gid || d.Sg(ee.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ee.sm_m ||
              (ee.sm_m = {
                proto: ee,
                fields: {
                  gid: {
                    n: 1,
                    br: d.qM.readFixed64String,
                    bw: d.gp.writeFixed64String,
                  },
                  partnerid: {
                    n: 2,
                    br: d.qM.readUint32,
                    bw: d.gp.writeUint32,
                  },
                },
              }),
            ee.sm_m
          );
        }
        static MBF() {
          return ee.sm_mbf || (ee.sm_mbf = d.w0(ee.M())), ee.sm_mbf;
        }
        toObject(e = !1) {
          return ee.toObject(e, this);
        }
        static toObject(e, t) {
          return d.BT(ee.M(), e, t);
        }
        static fromObject(e) {
          return d.Uq(ee.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (g().BinaryReader)(e),
            r = new ee();
          return ee.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return d.zj(ee.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (g().BinaryWriter)();
          return ee.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          d.i0(ee.M(), e, t);
        }
        serializeBase64String() {
          var e = new (g().BinaryWriter)();
          return ee.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_GetPartnerMessagePreview_Request";
        }
      }
      class te extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            te.prototype.message || d.Sg(te.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            te.sm_m ||
              (te.sm_m = { proto: te, fields: { message: { n: 1, c: M } } }),
            te.sm_m
          );
        }
        static MBF() {
          return te.sm_mbf || (te.sm_mbf = d.w0(te.M())), te.sm_mbf;
        }
        toObject(e = !1) {
          return te.toObject(e, this);
        }
        static toObject(e, t) {
          return d.BT(te.M(), e, t);
        }
        static fromObject(e) {
          return d.Uq(te.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (g().BinaryReader)(e),
            r = new te();
          return te.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return d.zj(te.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (g().BinaryWriter)();
          return te.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          d.i0(te.M(), e, t);
        }
        serializeBase64String() {
          var e = new (g().BinaryWriter)();
          return te.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_GetPartnerMessagePreview_Response";
        }
      }
      class re extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            re.prototype.appids || d.Sg(re.M()),
            _.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            re.sm_m ||
              (re.sm_m = {
                proto: re,
                fields: {
                  appids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: d.qM.readUint32,
                    pbr: d.qM.readPackedUint32,
                    bw: d.gp.writeRepeatedUint32,
                  },
                },
              }),
            re.sm_m
          );
        }
        static MBF() {
          return re.sm_mbf || (re.sm_mbf = d.w0(re.M())), re.sm_mbf;
        }
        toObject(e = !1) {
          return re.toObject(e, this);
        }
        static toObject(e, t) {
          return d.BT(re.M(), e, t);
        }
        static fromObject(e) {
          return d.Uq(re.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (g().BinaryReader)(e),
            r = new re();
          return re.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return d.zj(re.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (g().BinaryWriter)();
          return re.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          d.i0(re.M(), e, t);
        }
        serializeBase64String() {
          var e = new (g().BinaryWriter)();
          return re.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessage_GetMarketingMessagesForApps_Request";
        }
      }
      class se extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            se.prototype.messages || d.Sg(se.M()),
            _.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            se.sm_m ||
              (se.sm_m = {
                proto: se,
                fields: { messages: { n: 1, c: M, r: !0, q: !0 } },
              }),
            se.sm_m
          );
        }
        static MBF() {
          return se.sm_mbf || (se.sm_mbf = d.w0(se.M())), se.sm_mbf;
        }
        toObject(e = !1) {
          return se.toObject(e, this);
        }
        static toObject(e, t) {
          return d.BT(se.M(), e, t);
        }
        static fromObject(e) {
          return d.Uq(se.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (g().BinaryReader)(e),
            r = new se();
          return se.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return d.zj(se.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (g().BinaryWriter)();
          return se.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          d.i0(se.M(), e, t);
        }
        serializeBase64String() {
          var e = new (g().BinaryWriter)();
          return se.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessage_GetMarketingMessagesForApps_Response";
        }
      }
      class ie extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ie.prototype.partnerid || d.Sg(ie.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ie.sm_m ||
              (ie.sm_m = {
                proto: ie,
                fields: {
                  partnerid: {
                    n: 1,
                    br: d.qM.readUint32,
                    bw: d.gp.writeUint32,
                  },
                },
              }),
            ie.sm_m
          );
        }
        static MBF() {
          return ie.sm_mbf || (ie.sm_mbf = d.w0(ie.M())), ie.sm_mbf;
        }
        toObject(e = !1) {
          return ie.toObject(e, this);
        }
        static toObject(e, t) {
          return d.BT(ie.M(), e, t);
        }
        static fromObject(e) {
          return d.Uq(ie.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (g().BinaryReader)(e),
            r = new ie();
          return ie.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return d.zj(ie.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (g().BinaryWriter)();
          return ie.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          d.i0(ie.M(), e, t);
        }
        serializeBase64String() {
          var e = new (g().BinaryWriter)();
          return ie.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessage_GetMarketingMessagesForPartner_Request";
        }
      }
      class ae extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ae.prototype.messages || d.Sg(ae.M()),
            _.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ae.sm_m ||
              (ae.sm_m = {
                proto: ae,
                fields: { messages: { n: 1, c: M, r: !0, q: !0 } },
              }),
            ae.sm_m
          );
        }
        static MBF() {
          return ae.sm_mbf || (ae.sm_mbf = d.w0(ae.M())), ae.sm_mbf;
        }
        toObject(e = !1) {
          return ae.toObject(e, this);
        }
        static toObject(e, t) {
          return d.BT(ae.M(), e, t);
        }
        static fromObject(e) {
          return d.Uq(ae.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (g().BinaryReader)(e),
            r = new ae();
          return ae.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return d.zj(ae.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (g().BinaryWriter)();
          return ae.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          d.i0(ae.M(), e, t);
        }
        serializeBase64String() {
          var e = new (g().BinaryWriter)();
          return ae.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessage_GetMarketingMessagesForPartner_Response";
        }
      }
      !(function (e) {
        (e.GetActiveMarketingMessages = function (e, t) {
          return e.SendMsg(
            "MarketingMessages.GetActiveMarketingMessages#1",
            (0, p.I8)(B, t),
            k,
            { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
          );
        }),
          (e.GetPastMarketingMessages = function (e, t) {
            return e.SendMsg(
              "MarketingMessages.GetPastMarketingMessages#1",
              (0, p.I8)(b, t),
              f,
              { bConstMethod: !0, ePrivilege: 4 },
            );
          }),
          (e.GetMarketingMessagesForUser = function (e, t) {
            return e.SendMsg(
              "MarketingMessages.GetMarketingMessagesForUser#1",
              (0, p.I8)(I, t),
              S,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.DoesUserHavePendingMarketingMessages = function (e, t) {
            return e.SendMsg(
              "MarketingMessages.DoesUserHavePendingMarketingMessages#1",
              (0, p.I8)(T, t),
              w,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetDisplayMarketingMessage = function (e, t) {
            return e.SendMsg(
              "MarketingMessages.GetDisplayMarketingMessage#1",
              (0, p.I8)(E, t),
              z,
              { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.GetDisplayMarketingMessageForUser = function (e, t) {
            return e.SendMsg(
              "MarketingMessages.GetDisplayMarketingMessageForUser#1",
              (0, p.I8)(E, t),
              z,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetDisplayMarketingMessageAdmin = function (e, t) {
            return e.SendMsg(
              "MarketingMessages.GetDisplayMarketingMessageAdmin#1",
              (0, p.I8)(E, t),
              z,
              { bConstMethod: !0, ePrivilege: 4 },
            );
          }),
          (e.MarkMessageSeen = function (e, t) {
            return e.SendNotification(
              "MarketingMessages.MarkMessageSeen#1",
              (0, p.I8)(C, t),
              { ePrivilege: 1 },
            );
          }),
          (e.MarkMessageClicked = function (e, t) {
            return e.SendNotification(
              "MarketingMessages.MarkMessageClicked#1",
              (0, p.I8)(v, t),
              { ePrivilege: 1 },
            );
          }),
          (e.GetMarketingMessage = function (e, t) {
            return e.SendMsg(
              "MarketingMessages.GetMarketingMessage#1",
              (0, p.I8)(F, t),
              P,
              { ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.CreateMarketingMessage = function (e, t) {
            return e.SendMsg(
              "MarketingMessages.CreateMarketingMessage#1",
              (0, p.I8)(q, t),
              U,
              { ePrivilege: 4 },
            );
          }),
          (e.UpdateMarketingMessage = function (e, t) {
            return e.SendMsg(
              "MarketingMessages.UpdateMarketingMessage#1",
              (0, p.I8)(j, t),
              W,
              { ePrivilege: 5 },
            );
          }),
          (e.DeleteMarketingMessage = function (e, t) {
            return e.SendMsg(
              "MarketingMessages.DeleteMarketingMessage#1",
              (0, p.I8)(G, t),
              D,
              { ePrivilege: 4 },
            );
          }),
          (e.FindMarketingMessages = function (e, t) {
            return e.SendMsg(
              "MarketingMessages.FindMarketingMessages#1",
              (0, p.I8)(A, t),
              O,
              { ePrivilege: 5 },
            );
          }),
          (e.GetMarketingMessageViewerStats = function (e, t) {
            return e.SendMsg(
              "MarketingMessages.GetMarketingMessageViewerStats#1",
              (0, p.I8)(L, t),
              H,
              { ePrivilege: 4 },
            );
          }),
          (e.GetMarketingMessagesViewerRangeStats = function (e, t) {
            return e.SendMsg(
              "MarketingMessages.GetMarketingMessagesViewerRangeStats#1",
              (0, p.I8)(N, t),
              V,
              { ePrivilege: 4 },
            );
          }),
          (e.GetMarketingMessageClickedStats = function (e, t) {
            return e.SendMsg(
              "MarketingMessages.GetMarketingMessageClickedStats#1",
              (0, p.I8)(Q, t),
              $,
              { ePrivilege: 4 },
            );
          }),
          (e.GetPartnerReadyToPublishMessages = function (e, t) {
            return e.SendMsg(
              "MarketingMessages.GetPartnerReadyToPublishMessages#1",
              (0, p.I8)(Y, t),
              J,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }),
          (e.PublishPartnerMessage = function (e, t) {
            return e.SendMsg(
              "MarketingMessages.PublishPartnerMessage#1",
              (0, p.I8)(X, t),
              Z,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }),
          (e.GetPartnerMessagePreview = function (e, t) {
            return e.SendMsg(
              "MarketingMessages.GetPartnerMessagePreview#1",
              (0, p.I8)(ee, t),
              te,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }),
          (e.GetMarketingMessagesForPartner = function (e, t) {
            return e.SendMsg(
              "MarketingMessages.GetMarketingMessagesForPartner#1",
              (0, p.I8)(ie, t),
              ae,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }),
          (e.GetMarketingMessagesForApps = function (e, t) {
            return e.SendMsg(
              "MarketingMessages.GetMarketingMessagesForApps#1",
              (0, p.I8)(re, t),
              se,
              { ePrivilege: 4 },
            );
          });
      })(m || (m = {}));
    },
    72839: (e, t, r) => {
      r.d(t, { Bn: () => l, hS: () => o, rV: () => n });
      var s = r(15161),
        i = r(78327),
        a = r(2160);
      r(94601);
      function n(e, t) {
        e.Body().set_context(o(t));
      }
      function o(e) {
        let t = new s.TS();
        return (
          e || t.set_country_code(i.TS.COUNTRY),
          t.set_language(i.TS.LANGUAGE),
          i.TS.EREALM != a.TU.k_ESteamRealmUnknown &&
            t.set_steam_realm(i.TS.EREALM),
          t
        );
      }
      function l(e, t) {
        e.Body().set_data_request(s.gn.fromObject(t));
      }
    },
    82097: (e, t, r) => {
      r.d(t, { A: () => z });
      var s = r(34629),
        i = r(14947),
        a = r(37085),
        n = r(22837),
        o = r(56545),
        l = r(96059),
        u = r(59411),
        c = r(15161),
        m = r(81393),
        _ = r(68797),
        g = r(78327),
        d = r(72839),
        p = r(62792),
        h = r(61859),
        M = r(91675),
        y = r(63369),
        B = r(62490);
      class k {
        m_eItemType;
        m_unID;
        m_bVisible = !1;
        m_strName;
        m_strStoreURLPath;
        m_unAppID;
        m_eAppType;
        m_rgIncludedAppTypes;
        m_rgIncludedAppIDs;
        m_bIsFree;
        m_bIsFreeTemporary;
        m_bIsComingSoon;
        m_bIsEarlyAccess;
        m_RelatedItems;
        m_ContentDescriptorIDs;
        m_StoreCategories;
        m_ReviewInfo;
        m_BasicInfo;
        m_rgStoreTags = [];
        m_rgStoreTagIDs = [];
        m_Assets;
        m_AssetsWithoutOverrides;
        m_ReleaseInfo;
        m_Platforms;
        m_BestPurchaseOption;
        m_SelfPurchaseOption;
        m_rgPurchaseOptions;
        m_Screenshots;
        m_Trailers;
        m_rgSupportedLanguages;
        m_strStoreURLPathOverride;
        m_freeWeekend;
        m_DataRequested = { include_tag_count: 0 };
        m_strInternalName;
        m_rgLinks;
        m_userFilterFailure;
        constructor(e, t) {
          (this.m_eItemType = e.item_type()),
            (this.m_unID = e.id()),
            (this.m_bVisible = !!e.visible()),
            (this.m_strName = e.name()),
            (this.m_strStoreURLPath = e.store_url_path()),
            (this.m_unAppID = e.appid()),
            (this.m_eAppType = e.type()),
            (this.m_rgIncludedAppTypes = e.included_types()),
            (this.m_rgIncludedAppIDs = e.included_appids()),
            (this.m_bIsFree = !!e.is_free()),
            (this.m_bIsFreeTemporary = !!e.is_free_temporarily()),
            (this.m_bIsComingSoon =
              !!e.is_coming_soon() || !!e.release()?.is_coming_soon()),
            (this.m_bIsEarlyAccess = !!e.is_early_access()),
            (this.m_RelatedItems = e.related_items()?.toObject()),
            (this.m_ContentDescriptorIDs = e.content_descriptorids()),
            (this.m_StoreCategories = e.categories().toObject()),
            (this.m_BestPurchaseOption = e.best_purchase_option()?.toObject()),
            (this.m_strStoreURLPathOverride = e.store_url_path_override()),
            (this.m_freeWeekend = e.free_weekend()?.toObject()),
            (this.m_strInternalName = e.internal_name()),
            (this.m_eItemType != c.c6.k_EStoreItemType_Package &&
              this.m_eItemType != c.c6.k_EStoreItemType_Bundle) ||
              (this.m_SelfPurchaseOption = e.self_purchase_option(!1)
                ? e.self_purchase_option().toObject()
                : this.m_BestPurchaseOption),
            this.MergeData(e, t);
        }
        MergeData(e, t) {
          t.include_assets &&
            !this.m_Assets &&
            ((this.m_Assets = new f(e.assets(), e.id())),
            (this.m_DataRequested.include_assets = !0)),
            t.include_assets_without_overrides &&
              !this.m_AssetsWithoutOverrides &&
              ((this.m_AssetsWithoutOverrides = new f(
                e.assets_without_overrides(),
                e.id(),
              )),
              (this.m_DataRequested.include_assets_without_overrides = !0)),
            t.include_release &&
              !this.m_ReleaseInfo &&
              ((this.m_ReleaseInfo = e.release().toObject()),
              (this.m_DataRequested.include_release = !0)),
            t.include_platforms &&
              !this.m_Platforms &&
              ((this.m_Platforms = e.platforms().toObject()),
              (this.m_DataRequested.include_platforms = !0)),
            t.include_all_purchase_options &&
              !this.m_rgPurchaseOptions &&
              ((this.m_rgPurchaseOptions = e
                .purchase_options()
                .map((e) => e.toObject())),
              (this.m_DataRequested.include_all_purchase_options = !0)),
            t.include_screenshots &&
              !this.m_Screenshots &&
              ((this.m_Screenshots = new R(e.screenshots())),
              (this.m_DataRequested.include_screenshots = !0)),
            t.include_trailers &&
              !this.m_Trailers &&
              ((this.m_Trailers = new I(e.trailers())),
              (this.m_DataRequested.include_trailers = !0)),
            t.include_tag_count &&
              t.include_tag_count > this.m_rgStoreTags.length &&
              this.m_DataRequested.include_tag_count < t.include_tag_count &&
              ((this.m_rgStoreTags = e.tags().map((e) => e.toObject())),
              (this.m_rgStoreTagIDs = this.m_rgStoreTags.map((e) => e.tagid)),
              (this.m_DataRequested.include_tag_count = Math.max(
                t.include_tag_count,
                this.m_rgStoreTags.length || 0,
              ))),
            t.include_reviews &&
              !this.m_ReviewInfo &&
              ((this.m_ReviewInfo = e.reviews().toObject()),
              (this.m_DataRequested.include_reviews = !0)),
            t.include_basic_info &&
              !this.m_BasicInfo &&
              ((this.m_BasicInfo = e.basic_info().toObject()),
              (this.m_DataRequested.include_basic_info = !0)),
            t.include_supported_languages &&
              !this.m_rgSupportedLanguages &&
              ((this.m_rgSupportedLanguages = e
                .supported_languages()
                .map((e) => e.toObject())),
              (this.m_DataRequested.include_supported_languages = !0)),
            t.include_links &&
              !this.m_rgLinks &&
              ((this.m_rgLinks = e.links().map((e) => e.toObject())),
              (this.m_DataRequested.include_links = !0)),
            t.apply_user_filters &&
              !this.m_userFilterFailure &&
              ((this.m_userFilterFailure = e.user_filter_failure()?.toObject()),
              (this.m_DataRequested.apply_user_filters = !0));
        }
        static BDataRequestContainsOtherDataRequest(e, t) {
          return Boolean(
            (!t.include_assets || e.include_assets) &&
              (!t.include_assets_without_overrides ||
                e.include_assets_without_overrides) &&
              (!t.include_release || e.include_release) &&
              (!t.include_platforms || e.include_platforms) &&
              (!t.include_all_purchase_options ||
                e.include_all_purchase_options) &&
              (!t.include_screenshots || e.include_screenshots) &&
              (!t.include_trailers || e.include_trailers) &&
              (!t.include_ratings || e.include_ratings) &&
              (!t.include_tag_count ||
                (e.include_tag_count || 0) >= t.include_tag_count) &&
              (!t.include_reviews || e.include_reviews) &&
              (!t.include_basic_info || e.include_basic_info) &&
              (!t.include_supported_languages ||
                e.include_supported_languages) &&
              (!t.include_links || e.include_links),
          );
        }
        BContainDataRequest(e) {
          return k.BDataRequestContainsOtherDataRequest(
            this.m_DataRequested,
            e,
          );
        }
        BCheckDataRequestIncluded(e) {
          ("dev" != g.TS.WEB_UNIVERSE && "beta" != g.TS.WEB_UNIVERSE) ||
            (0, m.wT)(
              this.BContainDataRequest(e),
              `Requested data without for ${(0, p.Rz)(this.m_eItemType)} @ ${this.m_unID}`,
              e,
              this.m_DataRequested,
            );
        }
        GetStoreItemType() {
          return this.m_eItemType;
        }
        GetID() {
          return this.m_unID;
        }
        GetUniqueID() {
          return this.m_eItemType + "_" + this.m_unID;
        }
        BIsVisible() {
          return this.m_bVisible;
        }
        GetName() {
          return this.m_strName;
        }
        GetStorePageURL(e = !1) {
          return e && this.HasDemoStandaloneStorePage()
            ? g.TS.STORE_BASE_URL +
                "app/" +
                this.GetDemoStandaloneStorePageAppIDs()[0]
            : g.TS.STORE_BASE_URL + this.m_strStoreURLPath;
        }
        GetStorePageURLWithOverride() {
          return this.m_strStoreURLPathOverride &&
            this.m_strStoreURLPathOverride.length > 0
            ? this.GetStorePageURLOverride()
            : this.GetStorePageURL();
        }
        GetStorePageURLOverride() {
          return this.m_strStoreURLPathOverride;
        }
        GetCommunityPageURL() {
          return this.GetAppID()
            ? g.TS.COMMUNITY_BASE_URL + "app/" + this.GetAppID()
            : null;
        }
        GetCommunityDiscussionForumsURL() {
          return this.GetAppID()
            ? g.TS.COMMUNITY_BASE_URL +
                "app/" +
                this.GetAppID() +
                "/discussions/"
            : null;
        }
        GetAppID() {
          return this.m_unAppID;
        }
        GetAppIDToRun() {
          const e = this.GetParentAppID();
          return e && this.m_eAppType != c.uE.k_EStoreAppType_Music
            ? e
            : this.GetAppID();
        }
        GetAppType() {
          return this.m_eAppType;
        }
        BIsApplicationOrTool() {
          return (
            this.GetAppType() == c.uE.k_EStoreAppType_Software ||
            this.GetAppType() == c.uE.k_EStoreAppType_Tool
          );
        }
        k_regexSalePage =
          /^https?:\/\/[^\/]*(?:valvesoftware|steampowered).com\/(?:(curator|dev|developer|pub|publisher|franchise)\/[0-9a-zA-Z\-_]+\/)?sale\//;
        BIsSalePage() {
          return (
            this.GetStoreItemType() === c.c6.k_EStoreItemType_App &&
            this.k_regexSalePage.test(this.GetStorePageURLWithOverride())
          );
        }
        GetSalePageVanityURL() {
          let e = this.GetStorePageURLWithOverride();
          return (
            this.GetStoreItemType() === c.c6.k_EStoreItemType_App &&
              ((e = this.GetStorePageURLWithOverride().replace(
                this.k_regexSalePage,
                "",
              )),
              e.endsWith("/") && (e = e.replace("/", ""))),
            e
          );
        }
        GetIncludedAppTypes() {
          return this.m_rgIncludedAppTypes;
        }
        GetIncludedAppIDs() {
          return this.m_rgIncludedAppIDs;
        }
        GetIncludedAppIDsOrSelf() {
          return this.GetStoreItemType() == c.c6.k_EStoreItemType_App
            ? [this.GetID()]
            : this.GetIncludedAppIDs();
        }
        BIsFree() {
          return this.m_bIsFree;
        }
        BIsFreeTemporary() {
          return this.m_bIsFreeTemporary;
        }
        BIsFreeWeekend() {
          const e = Date.now() / 1e3;
          return (
            Boolean(this.m_freeWeekend) &&
            this.m_freeWeekend.start_time <= e &&
            e <= this.m_freeWeekend.end_time
          );
        }
        GetFreeWeekendEnd() {
          return this.m_freeWeekend?.end_time;
        }
        GetFreeWeekendPlayTextOverride() {
          return this.m_freeWeekend?.text;
        }
        BIsEarlyAccess() {
          return this.m_bIsEarlyAccess;
        }
        GetParentAppID() {
          return this.m_RelatedItems?.parent_appid;
        }
        BHasDemo() {
          return (this.m_RelatedItems?.demo_appid?.length ?? 0) > 0;
        }
        GetDemoAppIDs() {
          return this.m_RelatedItems?.demo_appid ?? [];
        }
        HasDemoStandaloneStorePage() {
          return (this.m_RelatedItems?.standalone_demo_appid?.length ?? 0) > 0;
        }
        GetDemoStandaloneStorePageAppIDs() {
          return this.m_RelatedItems?.standalone_demo_appid ?? [];
        }
        GetContentDescriptorIDs() {
          return this.m_ContentDescriptorIDs;
        }
        HasContentDescriptorID(e) {
          return this.m_ContentDescriptorIDs?.includes(e);
        }
        GetStoreCategories_SupportedPlayers() {
          return this.m_StoreCategories?.supported_player_categoryids || [];
        }
        GetStoreCategories_Features() {
          return this.m_StoreCategories?.feature_categoryids || [];
        }
        GetStoreCategories_Controller() {
          return this.m_StoreCategories?.controller_categoryids || [];
        }
        BHasStoreCategory(e) {
          return Boolean(
            this.GetStoreCategories_SupportedPlayers().find((t) => e === t) ||
              this.GetStoreCategories_Features().find((t) => e === t) ||
              this.GetStoreCategories_Controller().find((t) => e === t),
          );
        }
        GetFilteredReviewSummary() {
          return (
            this.BCheckDataRequestIncluded({ include_reviews: !0 }),
            this.m_ReviewInfo?.summary_filtered
          );
        }
        GetUnfilteredReviewSummary() {
          return (
            this.BCheckDataRequestIncluded({ include_reviews: !0 }),
            this.m_ReviewInfo?.summary_unfiltered ||
              this.m_ReviewInfo?.summary_filtered
          );
        }
        GetFilteredReviewSummaryLanguage() {
          return (
            this.BCheckDataRequestIncluded({ include_reviews: !0 }),
            this.m_ReviewInfo?.summary_language_specific
          );
        }
        GetShortDescription() {
          return (
            this.BCheckDataRequestIncluded({ include_basic_info: !0 }),
            this.m_BasicInfo?.short_description ?? ""
          );
        }
        GetDeveloperNames() {
          return (
            this.BCheckDataRequestIncluded({ include_basic_info: !0 }),
            this.m_BasicInfo?.developers
              ?.map((e) => e.name.trim())
              ?.filter((e) => e?.length > 0) ?? []
          );
        }
        GetFranchiseNames() {
          return (
            this.BCheckDataRequestIncluded({ include_basic_info: !0 }),
            this.m_BasicInfo?.franchises
              ?.map((e) => e.name.trim())
              ?.filter((e) => e?.length > 0) ?? []
          );
        }
        GetPublisherNames() {
          this.BCheckDataRequestIncluded({ include_basic_info: !0 });
          const e =
            this.m_BasicInfo?.publishers
              ?.map((e) => e.name.trim())
              ?.filter((e) => e?.length > 0) ?? [];
          return e?.length > 0 ? e : this.GetDeveloperNames();
        }
        GetAllCreatorClanIDs() {
          return (
            this.BCheckDataRequestIncluded({ include_basic_info: !0 }),
            this.m_BasicInfo
              ? b([
                  ...this.m_BasicInfo.developers,
                  ...this.m_BasicInfo.publishers,
                  ...this.m_BasicInfo.franchises,
                ])
              : []
          );
        }
        GetAllPublisherCreatorClans() {
          return (
            this.BCheckDataRequestIncluded({ include_basic_info: !0 }),
            this.m_BasicInfo ? b(this.m_BasicInfo.publishers) : []
          );
        }
        GetAllDeveloperCreatorClans() {
          return (
            this.BCheckDataRequestIncluded({ include_basic_info: !0 }),
            this.m_BasicInfo ? b(this.m_BasicInfo.developers) : []
          );
        }
        GetAllFranchiseCreatorClans() {
          return (
            this.BCheckDataRequestIncluded({ include_basic_info: !0 }),
            this.m_BasicInfo ? b(this.m_BasicInfo.franchises) : []
          );
        }
        GetCapsuleHeadline() {
          return (
            this.BCheckDataRequestIncluded({ include_basic_info: !0 }),
            this.m_BasicInfo?.capsule_headline
          );
        }
        GetTags() {
          return (
            this.BCheckDataRequestIncluded({ include_tag_count: 1 }),
            this.m_rgStoreTags
          );
        }
        GetTagIDs() {
          return (
            this.BCheckDataRequestIncluded({ include_tag_count: 1 }),
            this.m_rgStoreTagIDs
          );
        }
        BHasTags() {
          return (
            this.BCheckDataRequestIncluded({ include_tag_count: 1 }),
            this.m_rgStoreTagIDs?.length > 0
          );
        }
        GetAssets() {
          return (
            this.BCheckDataRequestIncluded({ include_assets: !0 }),
            this.m_Assets
          );
        }
        GetAssetsWithoutOverrides() {
          return (
            this.BCheckDataRequestIncluded({
              include_assets_without_overrides: !0,
            }),
            this.m_AssetsWithoutOverrides
          );
        }
        GetOriginalReleaseDateRTime() {
          this.BCheckDataRequestIncluded({ include_release: !0 });
          let e = this.m_ReleaseInfo?.original_steam_release_date;
          return e || (e = this.GetReleaseDateRTime()), e;
        }
        GetReleaseDateRTime(e = !1) {
          if (
            (this.BCheckDataRequestIncluded({ include_release: !0 }),
            this.m_ReleaseInfo?.is_coming_soon && !e)
          )
            return 0;
          let t = this.m_ReleaseInfo?.steam_release_date;
          return t || (t = this.m_ReleaseInfo?.original_release_date), t;
        }
        GetFormattedSteamReleaseDate() {
          if (
            (this.BCheckDataRequestIncluded({ include_release: !0 }),
            this.m_ReleaseInfo?.is_coming_soon)
          ) {
            if (this.m_ReleaseInfo?.coming_soon_display)
              return (0, y.d)(this.m_ReleaseInfo);
            if (this.m_ReleaseInfo?.custom_release_date_message)
              return this.m_ReleaseInfo.custom_release_date_message;
            const e = this.m_ReleaseInfo?.steam_release_date;
            return e
              ? this.m_ReleaseInfo?.is_abridged_release_date
                ? (0, M.sq)(new Date(1e3 * e))
                : (0, h.$z)(e)
              : "";
          }
          const e = this.GetReleaseDateRTime();
          return e ? (0, h.$z)(e) : "";
        }
        BIsComingSoon() {
          return this.m_bIsComingSoon;
        }
        BIsCustomComingSoonDisplay() {
          return (
            this.BCheckDataRequestIncluded({ include_release: !0 }),
            !!this.BIsComingSoon() &&
              (this.m_ReleaseInfo?.coming_soon_display
                ? ["text_tba", "text_comingsoon"].includes(
                    this.m_ReleaseInfo.coming_soon_display,
                  )
                : !!this.m_ReleaseInfo?.custom_release_date_message)
          );
        }
        BLimitedLaunchActive() {
          return this.m_ReleaseInfo?.limited_launch_active;
        }
        BIsPrePurchase() {
          return (
            this.BIsComingSoon() &&
            Boolean(this.GetBestPurchaseOption()?.packageid)
          );
        }
        BIsReleased() {
          return !this.BIsComingSoon();
        }
        GetPlatforms() {
          return (
            this.BCheckDataRequestIncluded({ include_platforms: !0 }),
            this.m_Platforms
          );
        }
        GetBestPurchaseOption() {
          return this.m_BestPurchaseOption;
        }
        GetBestPurchasePriceInCents() {
          if (this.m_BestPurchaseOption?.final_price_in_cents)
            return Number.parseInt(
              this.m_BestPurchaseOption.final_price_in_cents,
            );
        }
        GetBestPurchasePriceFormatted() {
          return this.m_BestPurchaseOption?.formatted_final_price;
        }
        GetBestPurchaseOriginalPriceInCents() {
          return this.m_BestPurchaseOption?.original_price_in_cents
            ? Number.parseInt(this.m_BestPurchaseOption.final_price_in_cents)
            : this.GetBestPurchasePriceInCents();
        }
        GetBestPurchaseOriginalPriceFormatted() {
          return (
            this.m_BestPurchaseOption?.formatted_original_price ??
            this.m_BestPurchaseOption?.formatted_final_price
          );
        }
        GetAllPurchaseOptions() {
          return (
            this.BCheckDataRequestIncluded({
              include_all_purchase_options: !0,
            }),
            this.m_rgPurchaseOptions
          );
        }
        GetSelfPurchaseOption() {
          return this.m_SelfPurchaseOption;
        }
        BHasAgeSafeScreenshots() {
          return this.GetScreenshots(!0).length > 0;
        }
        GetScreenshots(e) {
          return (
            this.BCheckDataRequestIncluded({ include_screenshots: !0 }),
            this.m_Screenshots
              ? e
                ? this.m_Screenshots.GetOnlyAllAgesScreenshots()
                : this.m_Screenshots.GetAllAgesAndMatureScreenshots()
              : []
          );
        }
        BIsAgeSafeScreenshot(e) {
          return this.m_Screenshots.GetOnlyAllAgesScreenshots().includes(e);
        }
        BHasTrailers(e) {
          return (
            this.BCheckDataRequestIncluded({ include_trailers: !0 }),
            this.m_Trailers?.BHasTrailers(e)
          );
        }
        BHasHighlightTrailers(e) {
          return (
            this.BCheckDataRequestIncluded({ include_trailers: !0 }),
            (this.m_Trailers?.GetHighlightTrailers(e)?.length ?? 0) > 0
          );
        }
        GetAllTrailers() {
          return (
            this.BCheckDataRequestIncluded({ include_trailers: !0 }),
            this.m_Trailers
          );
        }
        BHasSomeLanguageSupport(e) {
          return (
            this.BCheckDataRequestIncluded({ include_supported_languages: !0 }),
            this.m_rgSupportedLanguages?.some(
              (t) =>
                t.elanguage == e &&
                (t.supported || t.subtitles || t.full_audio),
            ) || !1
          );
        }
        GetAllLanguagesWithSomeSupport() {
          return (
            this.BCheckDataRequestIncluded({ include_supported_languages: !0 }),
            this.m_rgSupportedLanguages
              ?.filter((e) => e.supported || e.subtitles || e.full_audio)
              .map((e) => e.elanguage) || []
          );
        }
        GetDataRequest() {
          return this.m_DataRequested;
        }
        GetMicroTrailer(e) {
          if (
            (this.BCheckDataRequestIncluded({ include_trailers: !0 }),
            this.m_Trailers)
          ) {
            const t = this.m_Trailers
              .GetAllTrailers(e)
              .find((e) => !!e.GetMicroTrailer());
            if (t) return t.GetMicroTrailer();
          }
          return null;
        }
        GetLinks() {
          return (
            this.BCheckDataRequestIncluded({ include_links: !0 }),
            this.m_rgLinks
          );
        }
        GetUserFilterFailure() {
          return (
            this.BCheckDataRequestIncluded({ apply_user_filters: !0 }),
            this.m_userFilterFailure
          );
        }
        ReplaceBestPurchaseOption(e) {
          this.m_BestPurchaseOption = e;
        }
        GetInternalName() {
          return this.m_strInternalName;
        }
      }
      function b(e) {
        if (!e?.length) return [];
        const t = e.map((e) => e.creator_clan_account_id).filter((e) => !!e);
        return Array.from(new Set(t));
      }
      class f {
        m_strMainCapsuleURL;
        m_strSmallCapsuleURL;
        m_strHeaderURL;
        m_strPackageHeaderURL;
        m_strPageBackgroundURL;
        m_strRawPageBackgroundURL;
        m_strHeroCapsuleURL;
        m_strHeroCapsuleURL_2x;
        m_strLibraryCapsuleURL;
        m_strLibraryCapsuleURL_2x;
        m_strLibraryHeroURL;
        m_strLibraryHeroURL_2x;
        m_strCommunityIcon;
        m_strCommunityIcon_Full;
        constructor(e, t) {
          const r = e.asset_url_format();
          r &&
            (e.main_capsule() &&
              (this.m_strMainCapsuleURL = this.ConstructAssetURL(
                r,
                e.main_capsule(),
              )),
            e.small_capsule() &&
              (this.m_strSmallCapsuleURL = this.ConstructAssetURL(
                r,
                e.small_capsule(),
              )),
            e.header() &&
              (this.m_strHeaderURL = this.ConstructAssetURL(r, e.header())),
            e.package_header() &&
              (this.m_strPackageHeaderURL = this.ConstructAssetURL(
                r,
                e.package_header(),
              )),
            e.raw_page_background() &&
              (this.m_strRawPageBackgroundURL = this.ConstructAssetURL(
                r,
                e.raw_page_background(),
              )),
            e.hero_capsule() &&
              (this.m_strHeroCapsuleURL = this.ConstructAssetURL(
                r,
                e.hero_capsule(),
              )),
            e.hero_capsule_2x() &&
              (this.m_strHeroCapsuleURL_2x = this.ConstructAssetURL(
                r,
                e.hero_capsule_2x(),
              )),
            e.library_capsule() &&
              (this.m_strLibraryCapsuleURL = this.ConstructAssetURL(
                r,
                e.library_capsule(),
              )),
            e.library_capsule_2x() &&
              (this.m_strLibraryCapsuleURL_2x = this.ConstructAssetURL(
                r,
                e.library_capsule_2x(),
              )),
            e.library_hero() &&
              (this.m_strLibraryHeroURL = this.ConstructAssetURL(
                r,
                e.library_hero(),
              )),
            e.library_hero_2x() &&
              (this.m_strLibraryHeroURL_2x = this.ConstructAssetURL(
                r,
                e.library_hero_2x(),
              ))),
            e.community_icon() &&
              ((this.m_strCommunityIcon = `${g.TS.MEDIA_CDN_COMMUNITY_URL}images/apps/${t}/${e.community_icon()}.jpg`),
              (this.m_strCommunityIcon_Full = `${g.TS.MEDIA_CDN_COMMUNITY_URL}images/apps/${t}/${e.community_icon()}_full.jpg`)),
            e.page_background_path() &&
              (this.m_strPageBackgroundURL = `${g.TS.STORE_CDN_URL}images/storepagebackground/${e.page_background_path()}`);
        }
        GetMainCapsuleURL() {
          return this.m_strMainCapsuleURL;
        }
        GetSmallCapsuleURL() {
          return this.m_strSmallCapsuleURL;
        }
        GetHeaderURL() {
          return this.m_strHeaderURL;
        }
        GetPackageHeaderURL() {
          return this.m_strPackageHeaderURL;
        }
        GetPageBackgroundURL() {
          return this.m_strPageBackgroundURL;
        }
        GetRawPageBackgroundURL() {
          return this.m_strRawPageBackgroundURL;
        }
        GetHeroCapsuleURL() {
          return this.m_strHeroCapsuleURL;
        }
        GetHeroCapsuleURL_2x() {
          return this.m_strHeroCapsuleURL_2x;
        }
        GetLibraryCapsuleURL() {
          return this.m_strLibraryCapsuleURL;
        }
        GetLibraryCapsuleURL_2x() {
          return this.m_strLibraryCapsuleURL_2x;
        }
        GetLibraryHeroURL() {
          return this.m_strLibraryHeroURL;
        }
        GetLibraryHeroURL_2x() {
          return this.m_strLibraryHeroURL_2x;
        }
        ConstructAssetURL(e, t) {
          return (
            g.TS.BASE_URL_SHARED_CDN +
            "/store_item_assets/" +
            e.replace("${FILENAME}", t)
          );
        }
        GetCommunityIconURL() {
          return this.m_strCommunityIcon;
        }
        GetCommunityIconURL_Full() {
          return this.m_strCommunityIcon_Full;
        }
      }
      class I {
        m_mapTrailer;
        m_highlightTrailers;
        m_highlightTrailersAllAges;
        m_otherTrailers;
        m_otherTrailersAllAges;
        constructor(e) {
          (this.m_highlightTrailers =
            e.highlights()?.map((e) => new S(e)) ?? []),
            (this.m_highlightTrailersAllAges = this.m_highlightTrailers.filter(
              (e) => e.BIsAllAges(),
            )),
            (this.m_otherTrailers =
              e.other_trailers()?.map((e) => new S(e)) ?? []),
            (this.m_otherTrailersAllAges = this.m_otherTrailers.filter((e) =>
              e.BIsAllAges(),
            )),
            (this.m_mapTrailer = new Map(
              [...this.m_highlightTrailers, ...this.m_otherTrailers].map(
                (e) => [e.GetTrailerID(), e],
              ),
            ));
        }
        BHasTrailers(e) {
          return e
            ? this.m_highlightTrailersAllAges.length > 0 ||
                this.m_otherTrailersAllAges.length > 0
            : this.m_highlightTrailers.length > 0 ||
                this.m_otherTrailers.length > 0;
        }
        GetHighlightTrailers(e) {
          return e ? this.m_highlightTrailersAllAges : this.m_highlightTrailers;
        }
        GetOtherTrailers(e) {
          return e ? this.m_otherTrailersAllAges : this.m_otherTrailers;
        }
        GetAllTrailers(e) {
          return [...this.GetHighlightTrailers(e), ...this.GetOtherTrailers(e)];
        }
        GetTrailerByID(e) {
          return this.m_mapTrailer.get(e);
        }
      }
      class S {
        m_strTrailerName;
        m_eTrailerCategory;
        m_nBaseID;
        m_Trailer480p;
        m_TrailerMax;
        m_MicroTrailer;
        m_rgDashTrailers;
        m_rgHlsTrailer;
        m_strScreenshotMedium;
        m_strScreenshotFull;
        m_bIsAllAges;
        constructor(e) {
          (this.m_strTrailerName = e.trailer_name()),
            (this.m_nBaseID = e.trailer_base_id()),
            (this.m_eTrailerCategory = e.trailer_category());
          const t = e.trailer_url_format();
          if (
            (t &&
              (e.trailer_480p() &&
                (this.m_Trailer480p = this.ExtractTrailerFormats(
                  t,
                  e.trailer_480p(),
                )),
              e.trailer_max() &&
                (this.m_TrailerMax = this.ExtractTrailerFormats(
                  t,
                  e.trailer_max(),
                )),
              e.microtrailer() &&
                (this.m_MicroTrailer = this.ExtractTrailerFormats(
                  t,
                  e.microtrailer(),
                )),
              e.screenshot_medium() &&
                (this.m_strScreenshotMedium = this.ConstructScreenshotURL(
                  t,
                  e.screenshot_medium(),
                )),
              e.screenshot_full() &&
                (this.m_strScreenshotFull = this.ConstructScreenshotURL(
                  t,
                  e.screenshot_full(),
                ))),
            e.adaptive_trailers())
          ) {
            this.m_rgDashTrailers = this.ExtractAdaptiveTrailers(
              e.adaptive_trailers(),
              "dash",
            );
            let t = this.ExtractAdaptiveTrailers(e.adaptive_trailers(), "hls");
            t.length > 0 && (this.m_rgHlsTrailer = t[0]);
          }
          this.m_bIsAllAges = e.all_ages() ?? !0;
        }
        GetName() {
          return this.m_strTrailerName;
        }
        GetTrailerID() {
          return this.m_nBaseID;
        }
        GetTrailerCategory() {
          return this.m_eTrailerCategory;
        }
        GetTrailer480p() {
          return this.m_Trailer480p;
        }
        GetTrailerMax() {
          return this.m_TrailerMax;
        }
        GetTrailersDash() {
          return this.m_rgDashTrailers;
        }
        GetTrailerHls() {
          return this.m_rgHlsTrailer;
        }
        GetMicroTrailer() {
          return this.m_MicroTrailer;
        }
        GetScreenshot() {
          return this.m_strScreenshotFull
            ? this.m_strScreenshotFull
            : this.m_strScreenshotMedium;
        }
        BIsAllAges() {
          return this.m_bIsAllAges;
        }
        ExtractTrailerFormats(e, t) {
          let r = {};
          return (
            t.forEach((t) => {
              "video/mp4" == t.type()
                ? (r.strMP4URL = this.ConstructAssetURL(e, t.filename()))
                : "video/webm" == t.type() &&
                  (r.strWebMURL = this.ConstructAssetURL(e, t.filename()));
            }),
            r
          );
        }
        ExtractAdaptiveTrailers(e, t) {
          let r = `${t}_`,
            s = e.filter(
              (e) => e.encoding() && e.cdn_path() && e.encoding().startsWith(r),
            ),
            i = s.findIndex((e) => e.encoding().endsWith("_av1"));
          return (
            i > 0 && B.yY(s, i, 0),
            s.map((e) => this.ConstructAssetURL(e.cdn_path(), ""))
          );
        }
        ConstructScreenshotURL(e, t) {
          return (
            g.TS.BASE_URL_SHARED_CDN +
            "/store_item_assets/" +
            e.replace("${FILENAME}", t)
          );
        }
        ConstructAssetURL(e, t) {
          return (
            g.TS.VIDEO_CDN_URL +
            "/store_trailers/" +
            e.replace("${FILENAME}", t)
          );
        }
      }
      class R {
        m_rgAllScreenshots;
        m_rgOnlyAllAgesScreenshots;
        constructor(e) {
          const t = e.all_ages_screenshots() || [],
            r = e.mature_content_screenshots() || [],
            s = (e) =>
              g.TS.BASE_URL_SHARED_CDN + "/store_item_assets/" + e.filename();
          (this.m_rgOnlyAllAgesScreenshots = t.map(s)),
            (this.m_rgAllScreenshots = [...t, ...r]
              .sort((e, t) => e.ordinal() - t.ordinal())
              .map(s));
        }
        GetAllAgesAndMatureScreenshots() {
          return this.m_rgAllScreenshots;
        }
        GetOnlyAllAgesScreenshots() {
          return this.m_rgOnlyAllAgesScreenshots;
        }
      }
      var T = r(6419);
      function w(e, t) {
        if (!e) return t;
        if (!t) return e;
        return {
          include_assets: e.include_assets || t.include_assets,
          include_release: e.include_release || t.include_release,
          include_platforms: e.include_platforms || t.include_platforms,
          include_all_purchase_options:
            e.include_all_purchase_options || t.include_all_purchase_options,
          include_screenshots: e.include_screenshots || t.include_screenshots,
          include_trailers: e.include_trailers || t.include_trailers,
          include_ratings: e.include_ratings || t.include_ratings,
          include_tag_count:
            Math.max(e.include_tag_count || 0, t.include_tag_count || 0) ||
            void 0,
          include_reviews: e.include_reviews || t.include_reviews,
          include_basic_info: e.include_basic_info || t.include_basic_info,
          include_supported_languages:
            e.include_supported_languages || t.include_supported_languages,
          include_full_description:
            e.include_full_description || t.include_full_description,
          include_included_items:
            e.include_included_items || t.include_included_items,
          include_assets_without_overrides:
            e.include_assets_without_overrides ||
            t.include_assets_without_overrides,
          apply_user_filters: e.apply_user_filters || t.apply_user_filters,
          include_links: e.include_links || t.include_links,
        };
      }
      async function E(e, t) {
        const r = await e,
          s = await t;
        return r != a.d.k_EResultOK ? r : s;
      }
      class z {
        k_QueueWaitUntilRequestMS = 5;
        k_nMaxBatchSize = 250;
        m_bReturnUnavailableItems = !1;
        m_mapApps = new Map();
        m_mapPackages = new Map();
        m_mapBundles = new Map();
        m_mapTags = new Map();
        m_mapCreators = new Map();
        m_mapHubCategories = new Map();
        m_setUnavailableApps = new Set();
        m_setUnavailablePackages = new Set();
        m_setUnavailableBundles = new Set();
        m_setUnavailableTags = new Set();
        m_setUnavailableCreators = new Set();
        m_setUnavailableHubCategories = new Set();
        m_setUnavailableDueToCountryRestrictionApps = new Set();
        m_setUnavailableDueToCountryRestrictionPackages = new Set();
        m_setUnavailableDueToCountryRestrictionBundles = new Set();
        m_mapAppsInFlight = new Map();
        m_mapPackageInFlight = new Map();
        m_mapBundleInFlight = new Map();
        m_mapTagsInFlight = new Map();
        m_mapCreatorsInFlight = new Map();
        m_mapHubCategoriesInFlight = new Map();
        m_serviceTransport;
        m_bUsePartnerAPI = !1;
        m_bInitialized = !1;
        m_bActivelyResettingCache = !1;
        m_setPendingAppInfo = new Set();
        m_setPendingBundleInfo = new Set();
        m_setPendingPackageInfo = new Set();
        m_setPendingTagInfo = new Set();
        m_setPendingCreatorInfo = new Set();
        m_setPendingHubCategoryInfo = new Set();
        m_setPendingDataRequest = {};
        m_PendingInfoPromise;
        m_PendingInfoResolve = void 0;
        m_PendingTimer = void 0;
        k_AlreadyResolvedOK = Promise.resolve(a.d.k_EResultOK);
        k_AlreadyResolvedInvalid = Promise.resolve(a.d.k_EResultInvalidParam);
        k_AlreadyResolvedBusy = Promise.resolve(a.d.k_EResultBusy);
        static sm_instance;
        static Get() {
          return (
            z.sm_instance ||
              ((z.sm_instance = new z()),
              (window.StoreItemCache = z.sm_instance)),
            z.sm_instance
          );
        }
        static Initialize(e, t) {
          const r = z.Get();
          return (
            (0, m.wT)(
              !r.m_bInitialized,
              "CStoreItemCache was already initialized; initialize it only once.",
            ),
            (r.m_serviceTransport = e),
            (r.m_bUsePartnerAPI = !!t),
            (r.m_bInitialized = !0),
            () => {
              (r.m_serviceTransport = void 0),
                (r.m_bUsePartnerAPI = !1),
                (r.m_bInitialized = !1);
            }
          );
        }
        SetSteamInterface(e) {
          this.SetServiceTransport(e.GetServiceTransport());
        }
        SetServiceTransport(e) {
          this.m_serviceTransport = e;
        }
        SetReturnUnavailableItems(e) {
          this.m_bReturnUnavailableItems = e;
        }
        GetReturnUnavailableItems() {
          return this.m_bReturnUnavailableItems;
        }
        async ResetCache() {
          (this.m_bActivelyResettingCache = !0), this.FlushPendingInfo();
          let e = [];
          this.m_mapAppsInFlight.forEach((t) => {
            e.push(t.promise);
          }),
            this.m_mapBundleInFlight.forEach((t) => {
              e.push(t.promise);
            }),
            this.m_mapPackageInFlight.forEach((t) => {
              e.push(t.promise);
            }),
            this.m_mapTagsInFlight.forEach((t) => {
              e.push(t.promise);
            }),
            this.m_mapCreatorsInFlight.forEach((t) => {
              e.push(t.promise);
            }),
            this.m_mapHubCategoriesInFlight.forEach((t) => {
              e.push(t.promise);
            }),
            await Promise.all(e),
            this.m_mapApps.clear(),
            this.m_mapBundles.clear(),
            this.m_mapPackages.clear(),
            this.m_mapTagsInFlight.clear(),
            this.m_mapCreatorsInFlight.clear(),
            this.m_mapHubCategoriesInFlight.clear(),
            (this.m_bActivelyResettingCache = !1);
        }
        static BIsInitialized() {
          return z.Get().m_bInitialized;
        }
        static k_DataRequest_CommonOnly = {};
        static k_DataRequest_BasicInfo = { include_basic_info: !0 };
        static k_DataRequest_Assets = { include_assets: !0 };
        static k_DataRequest_IncludeAll = {
          include_assets: !0,
          include_release: !0,
          include_platforms: !0,
          include_all_purchase_options: !0,
          include_screenshots: !0,
          include_trailers: !0,
          include_ratings: !0,
          include_tag_count: 20,
          include_reviews: !0,
          include_basic_info: !0,
          include_supported_languages: !0,
          include_links: !0,
        };
        async QueueAppRequest(e, t) {
          return this.QueueStoreItemRequest(e, c.c6.k_EStoreItemType_App, t);
        }
        async QueuePackageRequest(e, t) {
          return this.QueueStoreItemRequest(
            e,
            c.c6.k_EStoreItemType_Package,
            t,
          );
        }
        async QueueBundleRequest(e, t) {
          return this.QueueStoreItemRequest(e, c.c6.k_EStoreItemType_Bundle, t);
        }
        async QueueTagRequest(e, t) {
          return this.QueueStoreItemRequest(e, c.c6.k_EStoreItemType_Tag, t);
        }
        async QueueCreatorRequest(e, t) {
          return this.QueueStoreItemRequest(
            e,
            c.c6.k_EStoreItemType_Creator,
            t,
          );
        }
        async QueueHubCategoryRequest(e, t) {
          return this.QueueStoreItemRequest(
            e,
            c.c6.k_EStoreItemType_HubCategory,
            t,
          );
        }
        static ValidateDataRequest(e) {
          const t = [
            e.include_assets,
            e.include_release,
            e.include_platforms,
            e.include_all_purchase_options,
            e.include_screenshots,
            e.include_trailers,
            e.include_ratings,
            e.include_reviews,
            e.include_basic_info,
            e.include_supported_languages,
            e.include_links,
          ];
          for (const e of t) if (!0 !== e && void 0 !== e) return !1;
          return !0;
        }
        async QueueMultipleAppRequests(e, t) {
          if (!e || 0 == e.length) return a.d.k_EResultOK;
          const r = (
            await Promise.all(
              e.map((e) =>
                this.QueueStoreItemRequest(e, c.c6.k_EStoreItemType_App, t),
              ),
            )
          ).filter((e) => e != a.d.k_EResultOK);
          return r.length > 0 ? r[0] : a.d.k_EResultOK;
        }
        async QueueMultiplePackageRequests(e, t) {
          if (!e || 0 == e.length) return a.d.k_EResultOK;
          const r = (
            await Promise.all(
              e.map((e) =>
                this.QueueStoreItemRequest(e, c.c6.k_EStoreItemType_Package, t),
              ),
            )
          ).filter((e) => e != a.d.k_EResultOK);
          return r.length > 0 ? r[0] : a.d.k_EResultOK;
        }
        async QueueMultipleBundleRequests(e, t) {
          if (!e || 0 == e.length) return a.d.k_EResultOK;
          const r = (
            await Promise.all(
              e.map((e) =>
                this.QueueStoreItemRequest(e, c.c6.k_EStoreItemType_Bundle, t),
              ),
            )
          ).filter((e) => e != a.d.k_EResultOK);
          return r.length > 0 ? r[0] : a.d.k_EResultOK;
        }
        async QueueMultipleTagRequests(e, t) {
          if (!e || 0 == e.length) return a.d.k_EResultOK;
          const r = (
            await Promise.all(
              e.map((e) =>
                this.QueueStoreItemRequest(e, c.c6.k_EStoreItemType_Tag, t),
              ),
            )
          ).filter((e) => e != a.d.k_EResultOK);
          return r.length > 0 ? r[0] : a.d.k_EResultOK;
        }
        async QueueMultipleCreatorRequests(e, t) {
          if (!e || 0 == e.length) return a.d.k_EResultOK;
          const r = (
            await Promise.all(
              e.map((e) =>
                this.QueueStoreItemRequest(e, c.c6.k_EStoreItemType_Creator, t),
              ),
            )
          ).filter((e) => e != a.d.k_EResultOK);
          return r.length > 0 ? r[0] : a.d.k_EResultOK;
        }
        async QueueMultipleHubCategoryRequests(e, t) {
          if (!e || 0 == e.length) return a.d.k_EResultOK;
          const r = (
            await Promise.all(
              e.map((e) =>
                this.QueueStoreItemRequest(
                  e,
                  c.c6.k_EStoreItemType_HubCategory,
                  t,
                ),
              ),
            )
          ).filter((e) => e != a.d.k_EResultOK);
          return r.length > 0 ? r[0] : a.d.k_EResultOK;
        }
        async QueueMultipleStoreItemRequests(e, t, r) {
          if (!e || 0 == e.length) return a.d.k_EResultOK;
          const s = (
            await Promise.all(
              e.map((e, s) => this.QueueStoreItemRequest(e, t[s], r)),
            )
          ).filter((e) => e != a.d.k_EResultOK);
          return s.length > 0 ? s[0] : a.d.k_EResultOK;
        }
        async QueueStoreItemRequest(e, t, r) {
          if (
            ((0, m.wT)(
              z.ValidateDataRequest(r),
              "Invalid Data Request: " + JSON.stringify(r),
            ),
            "string" == typeof e && (e = parseInt(e)),
            this.m_bActivelyResettingCache)
          )
            return (
              console.log(
                "Rejecting store item request due to currently clearing the cache",
              ),
              this.k_AlreadyResolvedBusy
            );
          if (!e)
            return (
              (0, m.wT)(
                !e,
                `unexpected id ${e} of zero or undefined for type ${t}`,
              ),
              this.k_AlreadyResolvedInvalid
            );
          const s = this.GetPreviousSupersetLoadPromise(e, t, r);
          if (s) return s;
          switch (
            (this.m_PendingInfoPromise ||
              ((this.m_PendingInfoPromise = new Promise(
                (e) => (this.m_PendingInfoResolve = e),
              )),
              (this.m_PendingTimer = window.setTimeout(
                () => this.FlushPendingInfo(),
                this.k_QueueWaitUntilRequestMS,
              ))),
            (this.m_setPendingDataRequest = w(this.m_setPendingDataRequest, r)),
            t)
          ) {
            case c.c6.k_EStoreItemType_App:
              this.m_setPendingAppInfo.add(e);
              break;
            case c.c6.k_EStoreItemType_Bundle:
              this.m_setPendingBundleInfo.add(e);
              break;
            case c.c6.k_EStoreItemType_Package:
              this.m_setPendingPackageInfo.add(e);
              break;
            case c.c6.k_EStoreItemType_Tag:
              this.m_setPendingTagInfo.add(e);
              break;
            case c.c6.k_EStoreItemType_Creator:
              this.m_setPendingCreatorInfo.add(e);
              break;
            case c.c6.k_EStoreItemType_HubCategory:
              this.m_setPendingHubCategoryInfo.add(e);
              break;
            default:
              (0, m.wT)(!1, `Unexpected Type ${t}`);
          }
          const i = this.m_PendingInfoPromise;
          return (
            this.m_setPendingAppInfo.size +
              this.m_setPendingPackageInfo.size +
              this.m_setPendingBundleInfo.size >=
              this.k_nMaxBatchSize &&
              (this.m_PendingTimer && window.clearTimeout(this.m_PendingTimer),
              this.FlushPendingInfo()),
            i
          );
        }
        async FlushPendingInfo() {
          if (void 0 === this.m_PendingInfoResolve) return;
          const e = this.m_PendingInfoResolve,
            t = Array.from(this.m_setPendingAppInfo),
            r = Array.from(this.m_setPendingPackageInfo),
            s = Array.from(this.m_setPendingBundleInfo),
            i = Array.from(this.m_setPendingTagInfo),
            a = Array.from(this.m_setPendingCreatorInfo),
            n = Array.from(this.m_setPendingHubCategoryInfo),
            o = this.m_setPendingDataRequest;
          (this.m_PendingInfoPromise = void 0),
            (this.m_PendingInfoResolve = void 0),
            this.m_setPendingAppInfo.clear(),
            this.m_setPendingBundleInfo.clear(),
            this.m_setPendingPackageInfo.clear(),
            this.m_setPendingTagInfo.clear(),
            this.m_setPendingCreatorInfo.clear(),
            this.m_setPendingHubCategoryInfo.clear(),
            (this.m_setPendingDataRequest = {}),
            (this.m_PendingTimer = void 0),
            this.HintLoadStoreItems(t, r, s, i, a, n, o).then((t) => e(t));
        }
        async HintLoadStoreApps(e, t) {
          return this.HintLoadStoreItems(e, null, null, null, null, null, t);
        }
        async HintLoadStorePackages(e, t) {
          return this.HintLoadStoreItems(null, e, null, null, null, null, t);
        }
        async HintLoadStoreBundles(e, t) {
          return this.HintLoadStoreItems(null, null, e, null, null, null, t);
        }
        GetPreviousSupersetLoadPromise(e, t, r) {
          if (this.BHasStoreItem(e, t, r) || this.BIsStoreItemMissing(e, t))
            return this.k_AlreadyResolvedOK;
          let s = null;
          switch (t) {
            case c.c6.k_EStoreItemType_App:
              s = this.m_mapAppsInFlight.get(e);
              break;
            case c.c6.k_EStoreItemType_Package:
              s = this.m_mapPackageInFlight.get(e);
              break;
            case c.c6.k_EStoreItemType_Bundle:
              s = this.m_mapBundleInFlight.get(e);
              break;
            case c.c6.k_EStoreItemType_Tag:
              s = this.m_mapTagsInFlight.get(e);
              break;
            case c.c6.k_EStoreItemType_Creator:
              s = this.m_mapCreatorsInFlight.get(e);
              break;
            case c.c6.k_EStoreItemType_HubCategory:
              s = this.m_mapHubCategoriesInFlight.get(e);
          }
          return s && k.BDataRequestContainsOtherDataRequest(s.dataRequest, r)
            ? s.promise
            : null;
        }
        async HintLoadStoreItems(e, t, r, s, i, n, o) {
          let l = null;
          const u = new Promise((e) => (l = e));
          let m = [],
            _ = [];
          (e || []).forEach((e) => {
            const t = this.GetPreviousSupersetLoadPromise(
              e,
              c.c6.k_EStoreItemType_App,
              o,
            );
            if (t) _.push(t);
            else {
              m.push(c.O4.fromObject({ appid: e }));
              let t = w(
                this.GetStoreItemDataRequest(e, c.c6.k_EStoreItemType_App),
                o,
              );
              const r = this.m_mapAppsInFlight.get(e);
              (t = w(r?.dataRequest, t)),
                r && _.push(r.promise),
                this.m_mapAppsInFlight.set(e, {
                  promise: r ? E(r.promise, u) : u,
                  dataRequest: t,
                });
            }
          }),
            (t || []).forEach((e) => {
              const t = this.GetPreviousSupersetLoadPromise(
                e,
                c.c6.k_EStoreItemType_Package,
                o,
              );
              if (t) _.push(t);
              else {
                m.push(c.O4.fromObject({ packageid: e }));
                let t = w(
                  this.GetStoreItemDataRequest(
                    e,
                    c.c6.k_EStoreItemType_Package,
                  ),
                  o,
                );
                const r = this.m_mapPackageInFlight.get(e);
                (t = w(r?.dataRequest, t)),
                  r && _.push(r.promise),
                  this.m_mapPackageInFlight.set(e, {
                    promise: r ? E(r.promise, u) : u,
                    dataRequest: t,
                  });
              }
            }),
            (r || []).forEach((e) => {
              const t = this.GetPreviousSupersetLoadPromise(
                e,
                c.c6.k_EStoreItemType_Bundle,
                o,
              );
              if (t) _.push(t);
              else {
                m.push(c.O4.fromObject({ bundleid: e }));
                let t = w(
                  this.GetStoreItemDataRequest(e, c.c6.k_EStoreItemType_Bundle),
                  o,
                );
                const r = this.m_mapBundleInFlight.get(e);
                (t = w(r?.dataRequest, t)),
                  r && _.push(r.promise),
                  this.m_mapBundleInFlight.set(e, {
                    promise: r ? E(r.promise, u) : u,
                    dataRequest: t,
                  });
              }
            }),
            (s || []).forEach((e) => {
              const t = this.GetPreviousSupersetLoadPromise(
                e,
                c.c6.k_EStoreItemType_Tag,
                o,
              );
              if (t) _.push(t);
              else {
                m.push(c.O4.fromObject({ tagid: e }));
                let t = w(
                  this.GetStoreItemDataRequest(e, c.c6.k_EStoreItemType_Tag),
                  o,
                );
                const r = this.m_mapTagsInFlight.get(e);
                (t = w(r?.dataRequest, t)),
                  r && _.push(r.promise),
                  this.m_mapTagsInFlight.set(e, {
                    promise: r ? E(r.promise, u) : u,
                    dataRequest: t,
                  });
              }
            }),
            (i || []).forEach((e) => {
              const t = this.GetPreviousSupersetLoadPromise(
                e,
                c.c6.k_EStoreItemType_Creator,
                o,
              );
              if (t) _.push(t);
              else {
                m.push(c.O4.fromObject({ creatorid: e }));
                let t = w(
                  this.GetStoreItemDataRequest(
                    e,
                    c.c6.k_EStoreItemType_Creator,
                  ),
                  o,
                );
                const r = this.m_mapCreatorsInFlight.get(e);
                (t = w(r?.dataRequest, t)),
                  r && _.push(r.promise),
                  this.m_mapCreatorsInFlight.set(e, {
                    promise: r ? E(r.promise, u) : u,
                    dataRequest: t,
                  });
              }
            }),
            (n || []).forEach((e) => {
              const t = this.GetPreviousSupersetLoadPromise(
                e,
                c.c6.k_EStoreItemType_HubCategory,
                o,
              );
              if (t) _.push(t);
              else {
                m.push(c.O4.fromObject({ hubcategoryid: e }));
                let t = w(
                  this.GetStoreItemDataRequest(
                    e,
                    c.c6.k_EStoreItemType_HubCategory,
                  ),
                  o,
                );
                const r = this.m_mapHubCategoriesInFlight.get(e);
                (t = w(r?.dataRequest, t)),
                  r && _.push(r.promise),
                  this.m_mapHubCategoriesInFlight.set(e, {
                    promise: r ? E(r.promise, u) : u,
                    dataRequest: t,
                  });
              }
            });
          let g = a.d.k_EResultOK;
          if (
            (m.length > 0 &&
              (g = await this.InternalHandleLoadStoreItems(m, o)),
            l(g),
            _.length > 0)
          ) {
            const e = await Promise.all(_);
            for (const t of e)
              t != a.d.k_EResultOK && g == a.d.k_EResultOK && (g = t);
          }
          return (
            (e || []).forEach((e) => this.m_mapAppsInFlight.delete(e)),
            (t || []).forEach((e) => this.m_mapPackageInFlight.delete(e)),
            (r || []).forEach((e) => this.m_mapBundleInFlight.delete(e)),
            (s || []).forEach((e) => this.m_mapTagsInFlight.delete(e)),
            (i || []).forEach((e) => this.m_mapCreatorsInFlight.delete(e)),
            (n || []).forEach((e) => this.m_mapHubCategoriesInFlight.delete(e)),
            g
          );
        }
        MarkStoreItemIDUnavailable(e) {
          (e || []).forEach((e) => {
            e.appid()
              ? (this.m_setUnavailableApps.add(e.appid()),
                this.m_mapApps.delete(e.appid()))
              : e.packageid()
                ? (this.m_setUnavailablePackages.add(e.packageid()),
                  this.m_mapPackages.delete(e.packageid()))
                : e.bundleid()
                  ? (this.m_setUnavailableBundles.add(e.bundleid()),
                    this.m_mapBundles.delete(e.bundleid()))
                  : e.tagid()
                    ? (this.m_setUnavailableTags.add(e.tagid()),
                      this.m_mapTags.delete(e.tagid()))
                    : e.creatorid()
                      ? (this.m_setUnavailableCreators.add(e.creatorid()),
                        this.m_mapCreators.delete(e.creatorid()))
                      : e.hubcategoryid() &&
                        (this.m_setUnavailableHubCategories.add(
                          e.hubcategoryid(),
                        ),
                        this.m_mapHubCategories.delete(e.hubcategoryid()));
          });
        }
        SortStoreItems(e) {
          let t = e.slice();
          return (
            t.sort((e, t) => {
              let r = e.appid() ?? 0,
                s = t.appid() ?? 0;
              if (r != s) return r - s;
              let i = e.packageid() ?? 0,
                a = t.packageid() ?? 0;
              if (i != a) return i - a;
              let n = e.bundleid() ?? 0,
                o = t.bundleid() ?? 0;
              if (n != o) return n - o;
              let l = e.tagid() ?? 0,
                u = t.tagid() ?? 0;
              if (l != u) return l - u;
              let c = e.creatorid() ?? 0,
                m = t.creatorid() ?? 0;
              if (c != m) return c - m;
              let _ = e.hubcategoryid() ?? 0,
                g = t.hubcategoryid() ?? 0;
              return _ != g ? _ - g : 0;
            }),
            t
          );
        }
        GetServiceTransport() {
          return (
            this.m_serviceTransport ||
              (console.warn(
                "Service transport not initialized for StoreItemCache",
              ),
              (this.m_serviceTransport = new l.D(
                g.TS.WEBAPI_BASE_URL,
              ).GetAnonymousServiceTransport())),
            this.m_serviceTransport
          );
        }
        async InternalHandleLoadStoreItems(e, t) {
          let r = a.d.k_EResultOK;
          (e = this.SortStoreItems(e)),
            t.include_included_items &&
              (t = {
                ...t,
                included_item_data_request: {
                  ...t,
                  include_included_items: !1,
                },
              });
          const s = new Array();
          try {
            const l = [];
            for (; e.length > 0; ) {
              const r = e.splice(0, this.k_nMaxBatchSize);
              if ((s.push(r), this.m_bUsePartnerAPI)) {
                const e = o.w.Init(u.St);
                e.Body().set_include_unpublished(!1);
                const s = e.Body().getitems_request(!0);
                s.set_context((0, d.hS)(this.m_bUsePartnerAPI)),
                  s.set_data_request(c.gn.fromObject(t)),
                  s.set_ids(r),
                  l.push(u.BT.GetItems(this.GetServiceTransport(), e));
              } else {
                const e = o.w.Init(c.eE);
                (0, d.rV)(e, this.m_bUsePartnerAPI),
                  (0, d.Bn)(e, t),
                  e.Body().set_ids(r),
                  l.push(c.$4.GetItems(this.GetServiceTransport(), e));
              }
            }
            (await Promise.all(l)).forEach((o, l) => {
              o.GetEResult() == a.d.k_EResultOK
                ? o
                    .Body()
                    .store_items()
                    .forEach((r) => {
                      const s = r.id(),
                        n = r.item_type();
                      let l =
                          this.m_bReturnUnavailableItems &&
                          r.success() == a.d.k_EResultAccessDenied,
                        u =
                          r.success() == a.d.k_EResultOK &&
                          !this.BIsStoreItemMissing(s, n);
                      if (l || u) this.ReadItem(r, t);
                      else {
                        switch (
                          ("dev" == g.TS.WEB_UNIVERSE &&
                            console.warn(
                              `Failed to load ${s} type ${n} with error ${r.success()}`,
                              r,
                            ),
                          n)
                        ) {
                          case c.c6.k_EStoreItemType_App:
                            this.m_setUnavailableApps.add(s),
                              this.m_mapApps.delete(s);
                            break;
                          case c.c6.k_EStoreItemType_Package:
                            this.m_setUnavailablePackages.add(s),
                              this.m_mapPackages.delete(s);
                            break;
                          case c.c6.k_EStoreItemType_Bundle:
                            this.m_setUnavailableBundles.add(s),
                              this.m_mapBundles.delete(s);
                            break;
                          case c.c6.k_EStoreItemType_Tag:
                            this.m_setUnavailableTags.add(s),
                              this.m_mapTags.delete(s);
                            break;
                          case c.c6.k_EStoreItemType_Creator:
                            this.m_setUnavailableCreators.add(s),
                              this.m_mapCreators.delete(s);
                            break;
                          case c.c6.k_EStoreItemType_HubCategory:
                            this.m_setUnavailableHubCategories.add(s),
                              this.m_mapHubCategories.delete(s);
                            break;
                          default:
                            console.error(
                              "CStoreItemCache.InternalHandleLoadStoreItems unexpected item_type in response " +
                                n +
                                " " +
                                s,
                            );
                        }
                        if (r.unvailable_for_country_restriction())
                          switch (n) {
                            case c.c6.k_EStoreItemType_App:
                              this.m_setUnavailableDueToCountryRestrictionApps.add(
                                s,
                              );
                              break;
                            case c.c6.k_EStoreItemType_Package:
                              this.m_setUnavailableDueToCountryRestrictionPackages.add(
                                s,
                              );
                              break;
                            case c.c6.k_EStoreItemType_Bundle:
                              this.m_setUnavailableDueToCountryRestrictionBundles.add(
                                s,
                              );
                              break;
                            case c.c6.k_EStoreItemType_Tag:
                            case c.c6.k_EStoreItemType_Creator:
                            case c.c6.k_EStoreItemType_HubCategory:
                              console.error(
                                "CStoreItemCache::InternalHandleLoadStoreItems - tags, creators or categories don't have country restrictions. eResult: " +
                                  o.GetEResult() +
                                  " message: " +
                                  o.Hdr().error_message(),
                                (0, i.HO)(e),
                              );
                          }
                      }
                    })
                : (console.warn(
                    "CStoreItemCache::InternalHandleLoadStoreItems failed with eResult: " +
                      o.GetEResult() +
                      " message: " +
                      o.Hdr().error_message(),
                    (0, i.HO)(e),
                  ),
                  (o.Hdr().transport_error() == n.vL.k_ETransportOK ||
                    g.TS.FROM_WEB) &&
                    this.MarkStoreItemIDUnavailable(s[l]),
                  r == a.d.k_EResultOK && (r = o.GetEResult()));
            });
          } catch (e) {
            const t = (0, _.H)(e);
            return (
              console.error(
                "CStoreItemCache::InternalHandleLoadStoreItems failed: " +
                  t.strErrorMsg,
                t,
              ),
              s.forEach((e) => this.MarkStoreItemIDUnavailable(e)),
              a.d.k_EResultUnexpectedError
            );
          }
          return r;
        }
        GetMapForType(e) {
          let t;
          switch (e) {
            case c.c6.k_EStoreItemType_App:
              t = this.m_mapApps;
              break;
            case c.c6.k_EStoreItemType_Bundle:
              t = this.m_mapBundles;
              break;
            case c.c6.k_EStoreItemType_Package:
              t = this.m_mapPackages;
              break;
            case c.c6.k_EStoreItemType_Tag:
              t = this.m_mapTags;
              break;
            case c.c6.k_EStoreItemType_Creator:
              t = this.m_mapCreators;
              break;
            case c.c6.k_EStoreItemType_HubCategory:
              t = this.m_mapHubCategories;
              break;
            default:
              console.error("Invalid map type requested", e);
          }
          return t;
        }
        BHasStoreItem(e, t, r) {
          let s = this.GetMapForType(t);
          return Boolean(
            s && s.has(e) && (!r || s.get(e).BContainDataRequest(r)),
          );
        }
        GetStoreItem(e, t) {
          if (
            t == c.c6.k_EStoreItemType_Invalid ||
            t == c.c6.k_EStoreItemType_Mtx
          )
            return;
          const r = this.GetMapForType(t);
          return r?.get(e);
        }
        GetStoreItemWithLegacyVisibilityCheck(e, t) {
          const r = this.GetStoreItem(e, t);
          return r && (this.m_bReturnUnavailableItems || r.BIsVisible())
            ? r
            : void 0;
        }
        GetStoreItemDataRequest(e, t) {
          return this.GetMapForType(t)?.get(e)?.GetDataRequest() || null;
        }
        BHasApp(e, t) {
          return this.BHasStoreItem(e, c.c6.k_EStoreItemType_App, t);
        }
        GetApp(e) {
          return this.GetStoreItem(e, c.c6.k_EStoreItemType_App);
        }
        BHasPackage(e, t) {
          return this.BHasStoreItem(e, c.c6.k_EStoreItemType_Package, t);
        }
        GetPackage(e) {
          return this.GetStoreItem(e, c.c6.k_EStoreItemType_Package);
        }
        BHasBundle(e, t) {
          return this.BHasStoreItem(e, c.c6.k_EStoreItemType_Bundle, t);
        }
        GetBundle(e) {
          return this.GetStoreItem(e, c.c6.k_EStoreItemType_Bundle);
        }
        BHasTag(e, t) {
          return this.BHasStoreItem(e, c.c6.k_EStoreItemType_Tag, t);
        }
        GetTag(e) {
          return this.GetStoreItem(e, c.c6.k_EStoreItemType_Tag);
        }
        BHasCreator(e, t) {
          return this.BHasStoreItem(e, c.c6.k_EStoreItemType_Creator, t);
        }
        GetCreator(e) {
          return this.GetStoreItem(e, c.c6.k_EStoreItemType_Creator);
        }
        BHasHubCategory(e, t) {
          return this.BHasStoreItem(e, c.c6.k_EStoreItemType_HubCategory, t);
        }
        GetHubCategory(e) {
          return this.GetStoreItem(e, c.c6.k_EStoreItemType_HubCategory);
        }
        BIsStoreItemMissing(e, t) {
          switch (t) {
            case c.c6.k_EStoreItemType_App:
              return this.BIsAppMissing(e);
            case c.c6.k_EStoreItemType_Package:
              return this.BIsPackageMissing(e);
            case c.c6.k_EStoreItemType_Bundle:
              return this.BIsBundleMissing(e);
            case c.c6.k_EStoreItemType_Tag:
              return this.BIsTagMissing(e);
            case c.c6.k_EStoreItemType_Creator:
              return this.BIsCreatorMissing(e);
            case c.c6.k_EStoreItemType_HubCategory:
              return this.BIsHubCategoryMissing(e);
            default:
              return console.error("BStoreItemMissing invalid type", t), !0;
          }
        }
        BIsAppMissing(e) {
          return this.m_setUnavailableApps.has(e);
        }
        BIsPackageMissing(e) {
          return this.m_setUnavailablePackages.has(e);
        }
        BIsBundleMissing(e) {
          return this.m_setUnavailableBundles.has(e);
        }
        BIsTagMissing(e) {
          return this.m_setUnavailableTags.has(e);
        }
        BIsCreatorMissing(e) {
          return this.m_setUnavailableCreators.has(e);
        }
        BIsHubCategoryMissing(e) {
          return this.m_setUnavailableHubCategories.has(e);
        }
        BIsStoreItemUnavailableDueToCountryRestriction(e, t) {
          switch (t) {
            case c.c6.k_EStoreItemType_App:
              return this.BIsAppUnavailableDueToCountryRestriction(e);
            case c.c6.k_EStoreItemType_Package:
              return this.BIsPackageUnavailableDueToCountryRestriction(e);
            case c.c6.k_EStoreItemType_Bundle:
              return this.BIsBundleUnavailableDueToCountryRestriction(e);
            case c.c6.k_EStoreItemType_Tag:
            case c.c6.k_EStoreItemType_Creator:
            case c.c6.k_EStoreItemType_HubCategory:
              return (
                console.error(
                  "BIsStoreItemUnavailableDueToCountryRestriction - tags, creators or categories don't have country restrictions. type: ",
                  t,
                ),
                !0
              );
            default:
              return console.error("BStoreItemMissing invalid type", t), !0;
          }
        }
        BIsAppUnavailableDueToCountryRestriction(e) {
          return this.m_setUnavailableDueToCountryRestrictionApps.has(e);
        }
        BIsPackageUnavailableDueToCountryRestriction(e) {
          return this.m_setUnavailableDueToCountryRestrictionPackages.has(e);
        }
        BIsBundleUnavailableDueToCountryRestriction(e) {
          return this.m_setUnavailableDueToCountryRestrictionBundles.has(e);
        }
        ReadResults(e, t) {
          let r = [];
          for (const s of e) r.push(this.ReadItem(s, t));
          return r;
        }
        ReadItem(e, t) {
          const r = e.item_type();
          let s = null;
          if (void 0 === r)
            return (
              console.warn(`Failed to load item data: ${e.success()}`), null
            );
          switch (r) {
            case c.c6.k_EStoreItemType_App:
              s = this.m_mapApps;
              break;
            case c.c6.k_EStoreItemType_Package:
              s = this.m_mapPackages;
              break;
            case c.c6.k_EStoreItemType_Bundle:
              s = this.m_mapBundles;
              break;
            case c.c6.k_EStoreItemType_Tag:
              s = this.m_mapTags;
              break;
            case c.c6.k_EStoreItemType_Creator:
              s = this.m_mapCreators;
              break;
            case c.c6.k_EStoreItemType_HubCategory:
              s = this.m_mapHubCategories;
              break;
            default:
              return console.error(`Invalid item type: ${r}`), null;
          }
          let i = s.get(e.id());
          if (
            (i ? i.MergeData(e, t) : ((i = new k(e, t)), s.set(e.id(), i)),
            t.include_included_items && e.included_items(!1))
          ) {
            for (const r of e.included_items().included_apps())
              this.ReadItem(r, t.included_item_data_request);
            for (const r of e.included_items().included_packages())
              this.ReadItem(r, t.included_item_data_request);
          }
          return i;
        }
      }
      (0, s.Cg)([T.o], z.prototype, "ReadItem", null);
    },
    62792: (e, t, r) => {
      r.d(t, {
        Di: () => _,
        FT: () => M,
        JK: () => n,
        Je: () => p,
        M9: () => y,
        Rz: () => l,
        SW: () => u,
        Si: () => R,
        TM: () => c,
        TV: () => f,
        _P: () => B,
        cW: () => b,
        gy: () => k,
        hh: () => g,
        lY: () => I,
        pk: () => o,
        s9: () => S,
        vo: () => d,
        wD: () => h,
        wR: () => m,
      });
      var s,
        i = r(5864),
        a = r(15161);
      function n(e) {
        return "app" == e
          ? a.c6.k_EStoreItemType_App
          : "sub" == e
            ? a.c6.k_EStoreItemType_Package
            : a.c6.k_EStoreItemType_Bundle;
      }
      function o(e, t = a.c6.k_EStoreItemType_Invalid) {
        return e?.appid
          ? a.c6.k_EStoreItemType_App
          : e?.packageid
            ? a.c6.k_EStoreItemType_Package
            : e?.bundleid
              ? a.c6.k_EStoreItemType_Bundle
              : e?.creatorid
                ? a.c6.k_EStoreItemType_Creator
                : e?.hubcategoryid
                  ? a.c6.k_EStoreItemType_HubCategory
                  : e?.tagid
                    ? a.c6.k_EStoreItemType_Tag
                    : t;
      }
      function l(e) {
        switch (e) {
          case a.c6.k_EStoreItemType_App:
            return "app";
          case a.c6.k_EStoreItemType_Bundle:
            return "bundle";
          case a.c6.k_EStoreItemType_Package:
            return "package";
          case a.c6.k_EStoreItemType_Mtx:
            return "mtx";
        }
        return "invalid";
      }
      function u(e) {
        switch (e) {
          case "sub":
            return a.c6.k_EStoreItemType_Package;
          case "bundle":
            return a.c6.k_EStoreItemType_Bundle;
          default:
            return a.c6.k_EStoreItemType_App;
        }
      }
      function c(e) {
        switch (e) {
          case a.c6.k_EStoreItemType_Bundle:
            return "bundle";
          case a.c6.k_EStoreItemType_Package:
            return "sub";
          default:
            return "app";
        }
      }
      function m(e, t, r) {
        return e
          ? { id: e, item_type: "app" }
          : t
            ? { id: t, item_type: "sub" }
            : { id: r, item_type: "bundle" };
      }
      function _(e) {
        return "app" == e?.item_type
          ? { appid: e.id }
          : "sub" == e?.item_type
            ? { packageid: e.id }
            : "bundle" == e?.item_type
              ? { bundleid: e.id }
              : null;
      }
      function g(e) {
        return e?.appid
          ? { item_type: "app", id: e.appid }
          : e?.packageid
            ? { item_type: "sub", id: e.packageid }
            : e?.bundleid
              ? { item_type: "bundle", id: e.bundleid }
              : null;
      }
      function d(e, t) {
        return t == a.c6.k_EStoreItemType_App
          ? { id: e, item_type: "app" }
          : t == a.c6.k_EStoreItemType_Package
            ? { id: e, item_type: "sub" }
            : t == a.c6.k_EStoreItemType_Bundle
              ? { id: e, item_type: "bundle" }
              : (console.error(
                  "ConvertEStoreItemTypeToStoreItemKey unexpected item type: ",
                  t,
                ),
                { id: 0, item_type: "app" });
      }
      function p(e, t) {
        return t == a.c6.k_EStoreItemType_App
          ? { appid: e }
          : t == a.c6.k_EStoreItemType_Package
            ? { packageid: e }
            : t == a.c6.k_EStoreItemType_Bundle
              ? { bundleid: e }
              : t == a.c6.k_EStoreItemType_Tag
                ? { tagid: e }
                : t == a.c6.k_EStoreItemType_Creator
                  ? { creatorid: e }
                  : t == a.c6.k_EStoreItemType_HubCategory
                    ? { hubcategoryid: e }
                    : null;
      }
      function h(e) {
        return e?.appid
          ? "a" + e.appid
          : e?.packageid
            ? "p" + e.packageid
            : e?.bundleid
              ? "b" + e.bundleid
              : e?.creatorid
                ? "c" + e.creatorid
                : e?.hubcategoryid
                  ? "h" + e.hubcategoryid
                  : e?.tagid
                    ? "t" + e.tagid
                    : "unknown0";
      }
      function M(e, t) {
        switch (t) {
          case a.c6.k_EStoreItemType_App:
            return "a" + e;
          case a.c6.k_EStoreItemType_Package:
            return "p" + e;
          case a.c6.k_EStoreItemType_Bundle:
            return "b" + e;
        }
        return "unknown0";
      }
      function y(e) {
        return e?.appid
          ? e.appid
          : e?.packageid
            ? e.packageid
            : e?.bundleid
              ? e.bundleid
              : e?.hubcategoryid
                ? e.hubcategoryid
                : e?.creatorid
                  ? e.creatorid
                  : e?.tagid
                    ? e.tagid
                    : 0;
      }
      function B(e) {
        return e?.appid
          ? a.c6.k_EStoreItemType_App
          : e?.packageid
            ? a.c6.k_EStoreItemType_Package
            : e?.bundleid
              ? a.c6.k_EStoreItemType_Bundle
              : e?.hubcategoryid
                ? a.c6.k_EStoreItemType_HubCategory
                : e?.creatorid
                  ? a.c6.k_EStoreItemType_Creator
                  : e?.tagid
                    ? a.c6.k_EStoreItemType_Tag
                    : 0;
      }
      function k(e) {
        return "app" == e?.item_type
          ? a.c6.k_EStoreItemType_App
          : "sub" == e?.item_type
            ? a.c6.k_EStoreItemType_Package
            : "bundle" == e?.item_type
              ? a.c6.k_EStoreItemType_Bundle
              : a.c6.k_EStoreItemType_Invalid;
      }
      function b(e) {
        const t = Number.parseInt(e.substring(1));
        switch (e.charAt(0)) {
          case "a":
            return { appid: t };
          case "p":
            return { packageid: t };
          default:
            return { bundleid: t };
        }
      }
      function f(e) {
        return "application" == e
          ? a.c6.k_EStoreItemType_App
          : "bundle" == e
            ? a.c6.k_EStoreItemType_Bundle
            : "package" == e
              ? a.c6.k_EStoreItemType_Package
              : a.c6.k_EStoreItemType_Invalid;
      }
      function I(e) {
        return e == a.c6.k_EStoreItemType_App
          ? "application"
          : e == a.c6.k_EStoreItemType_Package
            ? "package"
            : e == a.c6.k_EStoreItemType_Bundle
              ? "bundle"
              : null;
      }
      function S(e) {
        return e == i.OT.k_EMarketingMessageAppAssociation
          ? a.c6.k_EStoreItemType_App
          : e == i.OT.k_EMarketingMessageBundleAssociation
            ? a.c6.k_EStoreItemType_Bundle
            : e == i.OT.k_EMarketingMessageSubscriptionAssociation
              ? a.c6.k_EStoreItemType_Package
              : a.c6.k_EStoreItemType_Invalid;
      }
      function R(e) {
        return e == a.c6.k_EStoreItemType_App
          ? i.OT.k_EMarketingMessageAppAssociation
          : e == a.c6.k_EStoreItemType_Package
            ? i.OT.k_EMarketingMessageSubscriptionAssociation
            : e == a.c6.k_EStoreItemType_Bundle
              ? i.OT.k_EMarketingMessageBundleAssociation
              : null;
      }
      !(function (e) {
        (e[(e.k_NotRejected = -1)] = "k_NotRejected"),
          (e[(e.k_RejectNoMainCap = 0)] = "k_RejectNoMainCap"),
          (e[(e.k_RejectWrongPlatform = 1)] = "k_RejectWrongPlatform"),
          (e[(e.k_RejectNoComingSoon = 2)] = "k_RejectNoComingSoon"),
          (e[(e.k_RejectNoVR = 3)] = "k_RejectNoVR"),
          (e[(e.k_RejectCreatorClan = 4)] = "k_RejectCreatorClan"),
          (e[(e.k_RejectIgnoredGame = 5)] = "k_RejectIgnoredGame"),
          (e[(e.k_RejectSupportedLanguage = 6)] = "k_RejectSupportedLanguage"),
          (e[(e.k_RejectNotLoaded = 7)] = "k_RejectNotLoaded"),
          (e[(e.k_RejectIgnoreGameTags = 8)] = "k_RejectIgnoreGameTags"),
          (e[(e.k_RejectIgnoreContentDescriptors = 9)] =
            "k_RejectIgnoreContentDescriptors"),
          (e[(e.k_RejectEarlyAccess = 10)] = "k_RejectEarlyAccess"),
          (e[(e.k_RejectSoftware = 11)] = "k_RejectSoftware"),
          (e[(e.k_RejectDLC = 12)] = "k_RejectDLC"),
          (e[(e.k_RejectInLibrary = 13)] = "k_RejectInLibrary"),
          (e[(e.k_RejectNotInLibrary = 14)] = "k_RejectNotInLibrary"),
          (e[(e.k_RejectVideo = 15)] = "k_RejectVideo"),
          (e[(e.k_RejectNoDiscount = 16)] = "k_RejectNoDiscount"),
          (e[(e.k_RejectAlreadyDisplayed = 17)] = "k_RejectAlreadyDisplayed"),
          (e[(e.k_RejectNoTrailer = 18)] = "k_RejectNoTrailer"),
          (e[(e.k_RejectAO = 19)] = "k_RejectAO");
      })(s || (s = {}));
    },
    63369: (e, t, r) => {
      r.d(t, { M: () => n, d: () => a });
      var s = r(61859),
        i = r(91675);
      function a(e) {
        return n(
          e.coming_soon_display,
          e.steam_release_date,
          e.custom_release_date_message,
        );
      }
      function n(e, t, r, a) {
        switch (e) {
          case "date_full":
            return (0, s.$z)(t);
          case "date_month":
            return (0, i.sq)(new Date(1e3 * t));
          case "date_quarter":
            return (0, i.u6)(new Date(1e3 * t), a);
          case "date_year":
            return (0, i.vl)(new Date(1e3 * t));
          case "text_comingsoon":
            return r || (0, s.we)("#Store_ComingSoon_ComingSoon");
          case "text_tba":
            return r || (0, s.we)("#Store_ComingSoon_TBA");
          default:
            return "";
        }
      }
    },
    68797: (e, t, r) => {
      r.d(t, { H: () => o });
      var s = r(37085),
        i = r(41735),
        a = r.n(i),
        n = r(56545);
      function o(e) {
        if (a().isCancel(e))
          return {
            strErrorMsg: "Action Cancelled:" + e,
            errorCode: s.d.k_EResultCancelled,
          };
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
            if ("object" == typeof e && e instanceof n.w)
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
              errorCode: s.d.k_EResultFail,
            }
          : {
              strErrorMsg: "Unknown Error: " + e,
              errorCode: s.d.k_EResultFail,
            };
      }
    },
  },
]);
